<?php

namespace App\Http\Controllers\Api\Exhibit;

use Carbon\Carbon;
use App\BoxConnect;
use App\FileExhibit;
use App\UndoExhibit;
use App\Enums\ApiType;
use GuzzleHttp\Client;
use App\Enums\ItemType;
use App\ExhibitSession;
use App\Helpers\Helper;
use App\Services\ExhibitBoxService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Crypt;

class ApiController extends Controller
{
    private $item_file, $api_exhibit;

    public function __construct()
    {
        $this->item_file = ItemType::FILE;
        $this->api_exhibit = ApiType::EXHIBIT;
    }

    /**
     * Call Box Api
     *
     */
    public function callBoxApi($url, $exhibit_first)
    {
        return ExhibitBoxService::boxApi('GET', $url, [], $this->api_exhibit, $exhibit_first);
    }

    /**
     * Check Session Login
     */
    public function checkSessionLogin()
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        if (array_key_exists('exhibit_session_id', $_SESSION) && $_SESSION['exhibit_session_id'] !== null) {
            if (array_key_exists('exhibit_session_login_time', $_SESSION) && (Carbon::now() > Carbon::parse($_SESSION['exhibit_session_login_time'])->addHours(config('constants.login_timeout')))) {
                $this->sessionLogout();
                $response = [
                    'status' => false
                ];
            } else {
                $exhibit_session = ExhibitSession::find($_SESSION['exhibit_session_id']);
                $_SESSION['exhibit_user_id'] = $exhibit_session->user_id;
                $response = [
                    'status'        => true,
                    'session_data'  => $exhibit_session
                ];
            }
        } else {
            $response = [
                'status' => false
            ];
        }

        return response()->json($response);
    }

    /**
     * Check if Session ID exists
     *
     * @param Illuminate\Http\Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkSessionId(Request $request)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        $exhibit_session = ExhibitSession::where('session_id', $request->input('session_id'))->first();

        if ($exhibit_session) {
            unset($_SESSION['exhibit_user_id']);
            unset($_SESSION['exhibit_session_id']);
            unset($_SESSION['exhibit_session_login_time']);

            $_SESSION['exhibit_user_id'] = $exhibit_session->user_id;
            $folder_details = $this->fetchFolderDetails($exhibit_session->shared_folder_id);

            if (!empty($folder_details)) {
                if (json_decode($folder_details)->shared_link->is_password_enabled) {
                    $exhibit_session->shared_folder_link = json_decode($folder_details)->shared_link->url;
                    $exhibit_session->save();
                    $response = [
                        'status'            => true,
                        'password_enabled'  => true
                    ];
                } else {
                    $_SESSION['exhibit_session_id'] = $exhibit_session->id;
                    $_SESSION['exhibit_session_login_time'] = Carbon::now();

                    $response = [
                        'status'            => true,
                        'password_enabled'  => false,
                        'session_data'      => $exhibit_session
                    ];
                }
            } else {
                $response = [
                    'status'    => false,
                    'message'   => 'Exhibits folder is moved to a new location. Contact technician for more info.'
                ];
            }
        } else {
            $response = [
                'status'    => false,
                'message'   => 'Account does not exists for this Session ID.'
            ];
        }

        return response()->json($response);
    }

    /**
     * Session Login
     *
     * @param Illuminate\Http\Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sessionLogin(Request $request)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        $exhibit_session = ExhibitSession::where('session_id', $request->input('session_id'))->first();

        $_SESSION['exhibit_user_id'] = $exhibit_session->user_id;

        if ($exhibit_session) {
            $params = [
                'shared_link'           => $exhibit_session->shared_folder_link,
                'shared_link_password'  => $request->input('password')
            ];
            $shared = ExhibitBoxService::boxApi(
                'SHARED',
                'https://api.box.com/2.0/shared_items/',
                $params,
                $this->api_exhibit,
                ''
            );

            if (!empty($shared)) {
                $_SESSION['exhibit_session_id'] = $exhibit_session->id;
                $_SESSION['exhibit_session_login_time'] = Carbon::now();

                $response = [
                    'status'        => true,
                    'session_data'  => $exhibit_session
                ];
            } else {
                $response = [
                    'status'    => false,
                    'message'   => "Incorrect password for this Session ID."
                ];
            }
        } else {
            $response = [
                'status' => false,
                'message'   => 'Account does not exists for this Session ID.'
            ];
        }

        return response()->json($response);
    }

    /**
     * Update Access Token
     *
     */
    public function updateAccessToken($user_id)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        $user_login_time = (array_key_exists('exhibit_session_login_time', $_SESSION)) ? $_SESSION['exhibit_session_login_time'] : Carbon::now();

        $boxAccount = BoxConnect::where('user_id', $user_id)->first();

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

            unset($_SESSION['exhibit_user_id']);
            unset($_SESSION['exhibit_session_login_time']);
            unset($_SESSION['exhibit_access_token']);
            unset($_SESSION['exhibit_expiry']);
            unset($_SESSION['exhibit_refresh_token']);

            $_SESSION["exhibit_access_token"] = json_decode($response)->access_token;
            $_SESSION["exhibit_expiry"] = Carbon::now();
            $_SESSION["exhibit_refresh_token"] = json_decode($response)->refresh_token;
            $_SESSION['exhibit_user_id'] = $user_id;
            $_SESSION['exhibit_session_login_time'] = $user_login_time;

            $name = $boxAccount->name;
            $email = $boxAccount->email;

            $test = $boxAccount->delete();
            $boxConnect = BoxConnect::create([
                'user_id'       => $user_id,
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

        return response()->json(['accessToken' => $_SESSION['exhibit_access_token']]);
    }

    /**
     * Session Logout
     *
     */
    public function sessionLogout()
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        unset($_SESSION['exhibit_user_id']);
        unset($_SESSION['exhibit_session_id']);
        unset($_SESSION['exhibit_session_login_time']);

        return redirect('/');
    }

    /**
     * Follow Files
     *
     * @param Illuminate\Http\Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function follow(Request $request)
    {
        $undo_exhibits = UndoExhibit::where('shared_folder_id', $request->input('shared_folder_id'))->get();

        if (count($undo_exhibits) > 0) {
            $data = [];
            foreach ($undo_exhibits as $undo_exhibit) {
                array_push($data, $undo_exhibit->file_id);
            }

            $response = [
                'status'    => false,
                'undos'     => $data,
                'message'   => 'Exhibit Removed by Presenter.'
            ];

            UndoExhibit::truncate();
        } else {
            $file_exhibit = FileExhibit::where('shared_folder_id', $request->input('shared_folder_id'));

            if ($file_exhibit->first()) {
                $file_exhibit_first = $file_exhibit->first();
                $file_exhibit_check = $file_exhibit;
                $file_exhibit_check = $file_exhibit_check->where('copied_file_id', $request->input('file_id'))->first();

                if ($file_exhibit_check) {
                    $file_exhibit_data = FileExhibit::where('shared_folder_id', $request->input('shared_folder_id'))
                                                    ->where('id', '>', $file_exhibit_check->id)
                                                    ->get();

                    if (count($file_exhibit_data) > 0) {
                        $data = [];
                        foreach ($file_exhibit_data as $file) {
                            $fileDetails = $this->callBoxApi('https://api.box.com/2.0/files/' . $file->copied_file_id, 'exhibit_first');
                            if (!empty($fileDetails)) {
                                $parseJson = json_decode($fileDetails);
                                $dataVal = Helper::exhibitName($request->input('prefix'), $parseJson->name);
                                $parseJson->exhibit_name = $dataVal['prefix'];
                                $parseJson->exhibit_num = $dataVal['exhibit_num'];
                                $parseJson->filename = $dataVal['filename'];
                                $size = Helper::formatFileSize($parseJson->size);
                                $parseJson->size = $size;
                                $parseJson->thumb = Helper::getThumb($parseJson->name);

                                array_push($data, $parseJson);
                            }
                        }

                        $response = [
                            'status' => true,
                            'files'  => $data
                        ];
                    } else {
                        $response = [
                            'status' => false
                        ];
                    }
                } else {
                    if ($file_exhibit_first) {
                        $file_exhibits = FileExhibit::where('shared_folder_id', $request->input('shared_folder_id'))->get();
                        $data = [];
                        foreach ($file_exhibits as $files) {
                            $fileDetails = $this->callBoxApi('https://api.box.com/2.0/files/' . $files->copied_file_id, 'exhibit_first');
                            if (!empty($fileDetails)) {
                                $parseJson = json_decode($fileDetails);
                                $dataVal = Helper::exhibitName($request->input('prefix'), $parseJson->name);
                                $parseJson->exhibit_name = $dataVal['prefix'];
                                $parseJson->exhibit_num = $dataVal['exhibit_num'];
                                $parseJson->filename = $dataVal['filename'];
                                $size = Helper::formatFileSize($parseJson->size);
                                $parseJson->size = $size;
                                $parseJson->thumb = Helper::getThumb($parseJson->name);

                                array_push($data, $parseJson);
                            }
                        }

                        $response = [
                            'status' => true,
                            'files'  => $data
                        ];
                    } else {
                        $response = [
                            'status' => false
                        ];
                    }
                }
            } else {
                $response = [
                    'status' => false
                ];
            }
        }

        return response()->json($response);
    }

    /**
     * Get Folder Files
     *
     * @param Illuminate\Http\Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFolderFiles(Request $request)
    {
        $exhibit = ExhibitSession::where('session_id', $request->input('session_id'))->first();
        $shared_call = $this->fetchFolderItems($request->input('shared_folder_id'));

        if (!empty($shared_call)) {
            $folder_files = $this->fetchFolderFiles(json_decode($shared_call), $exhibit);
        } else {
            $folder_files = [];
        }

        return response()->json([
            'files' => $folder_files
        ]);
    }

    /**
     * Fetch folder details
     * Ref: Called self
     *
     * @param $folder_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function fetchFolderDetails($folder_id)
    {
        return $this->callBoxApi('https://api.box.com/2.0/folders/' . $folder_id, 'exhibit_first');
    }

    /**
     * Fetch folder items
     * Ref: Called self
     *
     * @param $folder_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function fetchFolderItems($folder_id)
    {
        return $this->callBoxApi('https://api.box.com/2.0/folders/' . $folder_id . '/items?limit=1000', 'exhibit_first');
    }

    /**
     * Fetch folder files
     * Ref: Called self
     *
     * @param $folder_items
     * @return Array $data
     */
    public function fetchFolderFiles($folder_items, $exhibit)
    {
        $data = [];
        foreach ($folder_items->entries as $key => $entry) {
            if ($entry->type == $this->item_file) {
                $fileDetails = $this->callBoxApi('https://api.box.com/2.0/files/' . $entry->id, 'exhibit_first');
                $parseJson = json_decode($fileDetails);
                $dataVal = Helper::exhibitName($exhibit->prefix, $parseJson->name);
                $parseJson->exhibit_name = $dataVal['prefix'];
                $parseJson->exhibit_num = $dataVal['exhibit_num'];
                $parseJson->filename = $dataVal['filename'];
                $size = Helper::formatFileSize($parseJson->size);
                $parseJson->size = $size;
                $parseJson->thumb = Helper::getThumb($parseJson->name);

                array_push($data, $parseJson);
            }
        }

        return $data;
    }
}
