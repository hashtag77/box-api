<?php

namespace App\Services;

use App\User;
use Carbon\Carbon;
use App\BoxConnect;
use GuzzleHttp\Psr7;
use App\Enums\ApiType;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Session;
use GuzzleHttp\Exception\RequestException;

class ExhibitBoxService
{
    /**
     * Get Box Authorization Code.
     *
     * @return Illuminate\Http\Response
     */
    public static function getBoxAuthCode()
    {
        $client = new Client();
        $response = $client->request(
            'GET',
            config('services.box.authorization_url') . '?response_type=code&client_id=' . config('services.box.client_id') . '&redirect_uri=' . config('services.box.redirect_uri')
        )->getBody()->getContents();

        return $response;
    }

    /**
     * Get Box Access Token.
     *
     * @return Illuminate\Http\Response
     */
    public static function getBoxAccessToken()
    {
        if (isset($_GET['code'])) {
            $client = new Client();
            $response = $client->request('POST', config('services.box.authentication_url'), [
                'headers' => [
                    'Content-Type' => 'application/x-www-form-urlencoded'
                ],
                'form_params' => [
                    'grant_type' => 'authorization_code',
                    'client_id' => config('services.box.client_id'),
                    'client_secret' => config('services.box.client_secret'),
                    'code'  => $_GET['code']
                ]
            ])->getBody()->getContents();

            if (session_status() == PHP_SESSION_NONE) {
                session_start();
            }
            $_SESSION["exhibit_access_token"] = json_decode($response)->access_token;
            $_SESSION["exhibit_expiry"] = Carbon::now();
            $_SESSION["exhibit_refresh_token"] = json_decode($response)->refresh_token;

            return redirect('/');
        } else {
            Session::flash('error', 'Access Denied! Please try again.');
            return redirect('/');
        }
    }

    /**
     * Initiate Box Api Call
     * 
     * @param $type (GET, POST, DELETE), $url
     * @return Illuminate\Http\Response
     */
    public static function boxApi($type, $url, $data, $api, $exhibit_first)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        $user_id = $_SESSION['exhibit_user_id'];
        $user_login_time = (array_key_exists('exhibit_session_login_time', $_SESSION)) ? $_SESSION['exhibit_session_login_time'] : Carbon::now();

        if ($exhibit_first !== '') {
            $boxAccount = BoxConnect::where('user_id', $user_id)->first();
        } else {
            $user = User::find($user_id);
            $boxAccount = BoxConnect::where('email', '!=', $user->box_connect->email)->orderBy('id', 'desc')->first();
        }

        if ($boxAccount) {
            if (Carbon::now() > Carbon::parse($boxAccount->expiry)->addMinutes(config('constants.token_expires_in'))) {
                $client = new Client();
                $response = $client->request('POST', config('services.box.authentication_url'), [
                    'headers' => [
                        'Content-Type' => 'application/x-www-form-urlencoded'
                    ],
                    'form_params' => [
                        'grant_type' => 'refresh_token',
                        'client_id' => config('services.box.client_id'),
                        'client_secret' => config('services.box.client_secret'),
                        'refresh_token'  => Crypt::decrypt($boxAccount->refresh_token)
                    ]
                ])->getBody()->getContents();

                unset($_SESSION['exhibit_access_token']);
                unset($_SESSION['exhibit_expiry']);
                unset($_SESSION['exhibit_refresh_token']);
                
                $_SESSION["exhibit_access_token"] = json_decode($response)->access_token;
                $_SESSION["exhibit_expiry"] = Carbon::now();
                $_SESSION["exhibit_refresh_token"] = json_decode($response)->refresh_token;

                $name = $boxAccount->name;
                $email = $boxAccount->email;
                $box_user_id = $boxAccount->user_id;

                $test = $boxAccount->delete();
                $boxConnect = BoxConnect::create([
                    'user_id'       => $box_user_id,
                    'name'          => $name,
                    'email'         => $email,
                    'access_token'  => Crypt::encrypt($_SESSION['exhibit_access_token']),
                    'refresh_token' => Crypt::encrypt($_SESSION['exhibit_refresh_token']),
                    'expiry'        => $_SESSION['exhibit_expiry']
                ]);
            } else {
                $_SESSION["exhibit_access_token"] = Crypt::decrypt($boxAccount->access_token);
                $_SESSION["exhibit_expiry"] = $boxAccount->expiry;
                $_SESSION["exhibit_refresh_token"] = Crypt::decrypt($boxAccount->refresh_token);
            }
                    
            try {
                switch ($type) {
                    case 'GET':
                        $response = self::getBoxApiData($url, $api);
                    break;
                    case 'POST':
                        $response = self::postBoxApiData($url, $data, $api);
                    break;
                    case 'DELETE':
                        $response = self::deleteBoxApiData($url, $api);
                    break;
                    case 'PUT':
                        $response = self::putBoxApiData($url, $data, $api);
                    break;
                    case 'SHARED':
                        $response = self::sharedBoxApiData($url, $data, $api);
                    break;
                }
            } catch (RequestException $e) {
                $response = [];
            }
        } else {
            if (array_key_exists('exhibit_access_token', $_SESSION)) {
                switch ($type) {
                    case 'GET':
                        $response = self::getBoxApiData($url, $api);
                    break;
                    case 'POST':
                        $response = self::postBoxApiData($url, $data, $api);
                    break;
                    case 'DELETE':
                        $response = self::deleteBoxApiData($url, $api);
                    break;
                    case 'PUT':
                        $response = self::putBoxApiData($url, $data, $api);
                    break;
                    case 'SHARED':
                        $response = self::sharedBoxApiData($url, $data, $api);
                    break;
                }
            } else {
                $response = [];
            }
        }

        return $response;
    }

    /**
     * Initiates a GET box api call.
     *
     * @param $url
     * @return Illuminate\Http\Response
     */
    public static function getBoxApiData($url, $api)
    {
        $token = $_SESSION['exhibit_access_token'];
        $client = new Client();
        $response = $client->request('GET', $url, [
            'headers' => [
                'Authorization' => "Bearer {$token}"
            ]
        ])->getBody()->getContents();

        return $response;
    }

    /**
     * Initiates a POST box api call.
     *
     * @param $url, $data
     * @return Illuminate\Http\Response
     */
    public static function postBoxApiData($url, $data, $api)
    {
        $token = $_SESSION['exhibit_access_token'];
        $client = new Client();
        $response = $client->request('POST', $url, [
            'headers' => [
                'Authorization' => "Bearer {$token}",
                'Content-Type'  => 'application/json'
            ],
            'json' => $data
        ])->getBody()->getContents();

        return $response;
    }

    /**
     * Initiates a DELETE box api call.
     *
     * @param $url
     * @return Illuminate\Http\Response
     */
    public static function deleteBoxApiData($url, $api)
    {
        $token = $_SESSION['exhibit_access_token'];
        $client = new Client();
        $response = $client->request('DELETE', $url, [
            'headers' => [
                'Authorization' => "Bearer {$token}"
            ]
        ])->getBody()->getContents();

        return $response;
    }

    /**
     * Initiates a PUT box api call.
     *
     * @param $url
     * @return Illuminate\Http\Response
     */
    public static function putBoxApiData($url, $data, $api)
    {
        $token = $_SESSION['exhibit_access_token'];
        $client = new Client();
        $response = $client->request('PUT', $url, [
            'headers' => [
                'Authorization' => "Bearer {$token}"
            ],
            'query' => $data['query'], 
            'json'  => $data['json']
        ])->getBody()->getContents();

        return $response;
    }

    /**
     * Initiates a PUT box api call.
     *
     * @param $url
     * @return Illuminate\Http\Response
     */
    public static function sharedBoxApiData($url, $data, $api)
    {
        $token = $_SESSION['exhibit_access_token'];
        $client = new Client();
        $response = $client->request('GET', $url, [
            'headers' => [
                'Authorization' => "Bearer {$token}",
                'BoxApi'        => "shared_link={$data['shared_link']}&shared_link_password={$data['shared_link_password']}"
            ],
        ])->getBody()->getContents();

        return $response;
    }
}
