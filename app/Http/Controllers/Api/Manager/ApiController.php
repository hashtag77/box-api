<?php

namespace App\Http\Controllers\Api\Manager;

use App\User;
use App\Privilege;
use Carbon\Carbon;
use App\BoxConnect;
use App\FileExhibit;
use App\UndoExhibit;
use App\Enums\ApiType;
use GuzzleHttp\Client;
use App\Enums\ItemType;
use App\ExhibitSession;
use App\Helpers\Helper;
use App\Enums\UserStatus;
use App\Enums\PrivilegeType;
use App\Services\BoxService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;

class ApiController extends Controller
{
    private $item_folder, $item_file, $api_manager;

    public function __construct()
    {
        $this->item_folder = ItemType::FOLDER;
        $this->item_file = ItemType::FILE;

        $this->api_manager = ApiType::MANAGER;
    }

    /**
     * Check for user login
     *
     */
    public function checkLogin()
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        if (array_key_exists('invited_email', $_SESSION)) {
            $response = [
                'status'        => true,
                'invited_email' => $_SESSION['invited_email']
            ];

            unset($_SESSION['invited_email']);
        } else if (array_key_exists('user_id', $_SESSION) && $_SESSION['user_id'] !== null) {
            if (array_key_exists('user_login_time', $_SESSION) && (Carbon::now() > Carbon::parse($_SESSION['user_login_time'])->addHours(config('constants.login_timeout')))) {
                $this->logout();
                $response = [
                    'status' => false
                ];
            } else {
                $user = User::find($_SESSION['user_id']);
                $users = $owners = [];
                foreach ($user->organizations()->first()->users()->get() as $org_user) {
                    if ($org_user->status == UserStatus::CONFIRMED && $org_user->privileges()->first()->name == PrivilegeType::ACCOUNTOWNER) {
                        array_push($owners, $org_user);
                    }
                    if ($user->privileges()->first()->name == PrivilegeType::ADMIN && ($org_user->privileges()->first()->name == PrivilegeType::ADMIN || $org_user->privileges()->first()->name == PrivilegeType::BASIC)) {
                        $org_user['privilege'] = $org_user->privileges()->first()->name;
                        array_push($users, $org_user);
                    } elseif($user->privileges()->first()->name != PrivilegeType::ADMIN) {
                        $org_user['privilege'] = $org_user->privileges()->first()->name;
                        array_push($users, $org_user);
                    }
                }
                $response = [
                    'status'        => true,
                    'user'          => $user,
                    'organization'  => $user->organizations()->first(),
                    'privilege'     => $user->privileges()->first(),
                    'users'         => $users,
                    'owners'        => $owners,
                    'privileges'    => ($user->privileges()->first()->name != PrivilegeType::ADMIN) ? Privilege::where('name', '!=', PrivilegeType::SUPERADMIN)->get() : Privilege::where('name', '!=', PrivilegeType::SUPERADMIN)->where('name', '!=', PrivilegeType::ACCOUNTOWNER)->get()
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
     * Logout
     *
     */
    public function logout()
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        unset($_SESSION['user_id']);
        unset($_SESSION['user_login_time']);
        unset($_SESSION['access_token']);
        unset($_SESSION['expiry']);
        unset($_SESSION['refresh_token']);

        return redirect('/manager');
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

        $user_id = $_SESSION['user_id'];
        $user_login_time = (array_key_exists('user_login_time', $_SESSION)) ? $_SESSION['user_login_time'] : Carbon::now();

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

            unset($_SESSION['user_id']);
            unset($_SESSION['user_login_time']);
            unset($_SESSION['access_token']);
            unset($_SESSION['expiry']);
            unset($_SESSION['refresh_token']);
            
            $_SESSION["access_token"] = json_decode($response)->access_token;
            $_SESSION["expiry"] = Carbon::now();
            $_SESSION["refresh_token"] = json_decode($response)->refresh_token;
            $_SESSION['user_id'] = $user_id;
            $_SESSION['user_login_time'] = $user_login_time;

            $name = $boxAccount->name;
            $email = $boxAccount->email;

            $test = $boxAccount->delete();
            $boxConnect = BoxConnect::create([
                'user_id'       => $user_id,
                'name'          => $name,
                'email'         => $email,
                'access_token'  => Crypt::encrypt($_SESSION['access_token']),
                'refresh_token' => Crypt::encrypt($_SESSION['refresh_token']),
                'expiry'        => $_SESSION['expiry']
            ]);
        } else {
            $_SESSION["access_token"] = Crypt::decrypt($boxAccount->access_token);
            $_SESSION["expiry"] = $boxAccount->expiry;
            $_SESSION["refresh_token"] = Crypt::decrypt($boxAccount->refresh_token);
        }

        return response()->json(['accessToken' => $_SESSION['access_token']]);
    }

    /**
     * Grant access
     *
     */
    public function grantAccess()
    {
        return BoxService::getBoxAuthCode();
    }

    /**
     * Call Box Api
     *
     */
    public function callBoxApi($url)
    {
        return BoxService::boxApi('GET', $url, [], $this->api_manager, '');
    }

    /**
     * Get current user
     * Ref: Called through API
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCurrentUser(Request $request)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        $_SESSION['user_id'] = $request->input('user_id');

        $boxAccount = BoxConnect::where('user_id', $request->input('user_id'))->first();

        $api = $this->callBoxApi('https://api.box.com/2.0/users/me');

        if (!is_array($api) && !is_string($api) && $api->getStatusCode()) {
            $api = [];
        }

        if (!empty($api) && !$boxAccount) {
            $boxConnect = BoxConnect::create([
                'user_id'       => $request->input('user_id'),
                'name'          => json_decode($api)->name,
                'email'         => json_decode($api)->login,
                'access_token'  => Crypt::encrypt($_SESSION['access_token']),
                'refresh_token' => Crypt::encrypt($_SESSION['refresh_token']),
                'expiry'        => $_SESSION['expiry']
            ]);
        }

        $response = [
            'user'          => (!empty($api)) ? json_decode($api): [],
            'accessToken'   => array_key_exists('access_token', $_SESSION) ? $_SESSION['access_token'] : ''
        ];

        return response()->json($response, 200);
    }

    /**
     * Get folder files
     * Ref: Called through API
     *
     * @param $private_folder_id, $shared_folder_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFolderFiles($private_folder_id, $shared_folder_id, $session_id, $prefix_value, $pvt_folder_name, $srd_folder_name)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        $values = [
            'private_folder_id'     => $private_folder_id,
            'shared_folder_id'      => $shared_folder_id,
            'session_id'            => $session_id,
            'prefix_value'          => $prefix_value,
            'user_id'               => $_SESSION['user_id'],
            'private_folder_name'   => $pvt_folder_name,
            'shared_folder_name'    => $srd_folder_name
        ];
        $this->exhibitSession($values);

        $data = [];
        $private_call = $this->fetchFolderItems($private_folder_id);
        $private_folder_name = $this->fetchFolderDetails($private_folder_id);
        $shared_call = $this->fetchFolderItems($shared_folder_id);
        $shared_folder_name = $this->fetchFolderDetails($shared_folder_id);

        $private_files = [];
        foreach ($this->fetchFolderFiles($private_call, $shared_folder_id) as $private_data) {
            $private_data->thumb = Helper::getThumb($private_data->name);
            array_push($private_files, $private_data);
        }

        $shared_files = [];
        foreach ($this->fetchFolderFiles($shared_call, $id = null) as $shared_data) {
            $shared_data->thumb = Helper::getThumb($shared_data->name);
            array_push($shared_files, $shared_data);
        }

        $data = [
            'accessToken'       => $_SESSION['access_token'],
            'privateData'       => $private_files,
            'privateFolderName' => json_decode($private_folder_name)->name,
            'sharedData'        => $shared_files,
            'sharedFolderName'  => json_decode($shared_folder_name)->name,
        ];

        return response()->json($data, 200);
    }

    /**
     * Check for record
     *
     * @param Integer $file_id
     */
    public function checkRecords($file_id, $shared_folder_id)
    {
        $fileExhibit = FileExhibit::where('file_id', $file_id)
                                    ->where('shared_folder_id', $shared_folder_id)
                                    ->first();

        if ($fileExhibit) {
            $fileData = json_decode($this->fetchFileDetails($fileExhibit->copied_file_id));
            $fileData->thumb = Helper::getThumb($fileData->name);
            $response = json_encode($fileData);
        } else {
            $response = json_encode([]);
        }

        return $response;
    }

    /**
     * Introduce exhibit
     *
     * @param Illuminate\Http\Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function introduceExhibit(Request $request)
    {
        $fileDetails = $this->fetchFileDetails($request->input('file_id'));

        if ((is_array($fileDetails) && !empty($fileDetails)) || (!is_array($fileDetails) && json_decode($fileDetails) !== null)) {
            $data = [
                'name' => $request->input('prefix') . ' ' . $request->input('exhibit_number') . ' - ' . json_decode($fileDetails)->name ,
                'parent' => [
                    'id' => $request->input('shared_folder_id')
                ]
            ];
            $copy = BoxService::boxApi(
                'POST',
                'https://api.box.com/2.0/files/' . $request->input('file_id') . '/copy',
                $data, 
                $this->api_manager,
                ''
            );

            if ($copy) {
                $fileDetails = $this->callBoxApi('https://api.box.com/2.0/files/' . json_decode($copy)->id);
                $parseJson = json_decode($fileDetails);
                $parseJson->modified_at = Helper::formatDate($parseJson->modified_at);
                $parseJson->size = Helper::formatFileSize($parseJson->size);
                $parseJson->thumb = Helper::getThumb($parseJson->name);

                $fileExhibit = $this->saveExhibitDetails($request, json_decode($copy));
                return response()->json(['status' => true, 'record' => $parseJson], 200);
            } else {
                return response()->json(['status' => false], 200);
            }
        } else {
            return response()->json(['error' => 'expired'], 200);
        }
    }

    /**
     * Save exhibit details
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http|Response
     */
    public function saveExhibitDetails(Request $request, $copy)
    {
        $fileExhibit = FileExhibit::where('file_id', $request->input('file_id'))
                                    ->where('shared_folder_id', $copy->parent->id)
                                    ->first();

        if ($fileExhibit) {
            $fileExhibit->exhibit_number = $request->input('exhibit_number');
            $fileExhibit->save();
        }
        else {
            FileExhibit::create([
                'file_id'           => $request->input('file_id'),
                'exhibit_number'    => $request->input('exhibit_number'),
                'private_folder_id' => $request->input('private_folder_id'),
                'copied_file_id'    => $copy->id,
                'shared_folder_id'  => $copy->parent->id
            ]);
        }

        return true;
    }

    /**
     * Disconnect Box Account
     *
     * @return Illuminate\Http\JsonResponse
     */
    public function disconnect()
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        $boxAccounts = BoxConnect::where('user_id', $_SESSION['user_id'])->get();
        foreach ($boxAccounts as $boxAccount) {
            $boxAccount->delete();
        }
        unset($_SESSION['access_token']);
        unset($_SESSION['expiry']);
        unset($_SESSION['refresh_token']);

        return response()->json(['status' => true], 200);
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
        return $this->callBoxApi('https://api.box.com/2.0/folders/' . $folder_id);
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
        return $this->callBoxApi('https://api.box.com/2.0/folders/' . $folder_id . '/items?limit=1000');
    }

    /**
     * Fetch folder files
     * Ref: Called self
     *
     * @param $folder_items
     * @return Array $data
     */
    public function fetchFolderFiles($folder_items, $target_id)
    {
        $data = [];
        foreach (json_decode($folder_items)->entries as $key => $entry) {
            if ($entry->type == $this->item_file) {
                $fileDetails = $this->callBoxApi('https://api.box.com/2.0/files/' . $entry->id);
                $parseJson = json_decode($fileDetails);
                $modified_at = Helper::formatDate($parseJson->modified_at);
                $parseJson->modified_at = $modified_at;
                $size = Helper::formatFileSize($parseJson->size);
                $parseJson->size = $size;

                $exhibitDetails = ($target_id !== null)
                                    ? FileExhibit::where('file_id', $entry->id)
                                                    ->where('shared_folder_id', $target_id)
                                                    ->orderBy('id', 'desc')->first()
                                    : FileExhibit::where('file_id', $entry->id)
                                                    ->orderBy('id', 'desc')
                                                    ->first();
                if ($exhibitDetails) {
                    $parseJson->exhibit_number = $exhibitDetails->exhibit_number;
                }
                array_push($data, $parseJson);
            }
        }

        return $data;
    }

    /**
     * Fetch file details
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http|Response
     */
    public function fetchFileDetails($file_id)
    {
        return $this->callBoxApi('https://api.box.com/2.0/files/' . $file_id);
    }

    /**
     * Reset Check-marks
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function undoExhibit(Request $request)
    {
        $fileExhibit = FileExhibit::where('file_id', $request->input('item_id'))
                                    ->where('shared_folder_id', $request->input('target_id'))
                                    ->first();

        $delete = BoxService::boxApi(
            'DELETE',
            'https://api.box.com/2.0/files/' . $fileExhibit->copied_file_id,
            [],
            $this->api_manager,
            ''
        );

        $copied_file_id = $fileExhibit->copied_file_id;

        UndoExhibit::create([
            'file_id'           => $fileExhibit->copied_file_id,
            'shared_folder_id'  => $fileExhibit->shared_folder_id
        ]);

        $fileExhibit->delete();

        return response()->json(['status' => true, 'file_id' => $copied_file_id]);
    }

    /**
     * Refresh records
     *
     * @param $folder_id
     * @return Illuminate\Http\JsonResponse
     */
    public function refreshRecords($folder_id, $type, $shared_folder_id)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        $folder_items = $this->fetchFolderItems($folder_id);
        $files = [];
        if ($type == 'private') {
            foreach ($this->fetchFolderFiles($folder_items, $shared_folder_id) as $private_data) {
                $private_data->thumb = Helper::getThumb($private_data->name);
                array_push($files, $private_data);
            }
        } else {
            foreach ($this->fetchFolderFiles($folder_items, $id = null) as $shared_data) {
                $shared_data->thumb = Helper::getThumb($shared_data->name);
                array_push($files, $shared_data);
            }
        }

        $response = [
            'files'  => $files,
            'status' => true
        ];

        return response()->json($response);
    }

    /**
     * Check User Email Validity
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function checkUserEmailValidity(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();

        if ($user) {
            switch ($user->status) {
                case UserStatus::SUSPENDED:
                    $response = [
                        'status'    => false,
                        'message'   => 'Your account is inactive. Please contact support for more information.',
                        'suspended' => true
                    ];
                break;
                case UserStatus::PENDING:
                    $response = [
                        'status' => true,
                        'message'=> 'Please complete registration to confirm your account.'
                    ];
                break;
                case UserStatus::CONFIRMED:
                    $response = [
                        'status'    => true,
                        'user'      => $user->id
                    ];
                break;
            }
        } else {
            $response = [
                'status' => false,
                'message'=> "Account doesn't exists for this email address."
            ];
        }

        return response()->json($response);
    }
    /**
     * Check User Email
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function checkUserEmail(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();
        $response = [
            'status' => ($user) ? true : false,
            'message'=> ($user) ? 'Email already exists!' : ''
        ];

        return response()->json($response);
    }

    /**
     * Create User
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function createUser(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();

        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        unset($_SESSION['user_id']);
        unset($_SESSION['user_login_time']);
        unset($_SESSION['access_token']);
        unset($_SESSION['expiry']);
        unset($_SESSION['refresh_token']);

        if ($user) {
            $user->name                 = $request->input('name');
            $user->password             = Hash::make($request->input('password'));
            $user->email_verified_at    = Carbon::now();
            $user->status               = UserStatus::CONFIRMED;
            $user->save();

            $_SESSION['user_id'] = $user->id;
            $_SESSION['user_login_time'] = Carbon::now();
        }

        return response()->json([
            'status'    => true,
            'user_id'   => $user->id
        ]);
    }

    /**
     * Login User
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function loginUser(Request $request)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        $user = User::where('email', $request->input('email'))->first();

        if (Hash::check($request->input('password'), $user->password)) {
            unset($_SESSION['user_id']);
            unset($_SESSION['user_login_time']);
            unset($_SESSION['access_token']);
            unset($_SESSION['expiry']);
            unset($_SESSION['refresh_token']);

            $response = [
                'status' => true,
                'user_id'=> $user->id
            ];

            $_SESSION['user_id'] = $user->id;
            $_SESSION['user_login_time'] = Carbon::now();
        } else {
            $response = [
                'status' => false
            ];
        }

        return response()->json($response);
    }

    /**
     * Update user profile
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function updateProfileInfo(Request $request)
    {
        $user = User::find($request->input('id'));
        $user->name = $request->input('name');

        if ($request->has('email')) {
            $user->email = $request->input('email');
        }

        $user->save();

        return response()->json([
            'status' => true,
            'user'   => $user
        ]);
    }

    /**
     * Check session entry
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function checkSessionEntry(Request $request)
    {
        $exhibit_session = ExhibitSession::where('session_id', $request->input('session_id'))->first();

        if ($exhibit_session) {
            $response = [
                'status'                => true,
                'session_data'          => $exhibit_session,
                'private_folder_name'   => $exhibit_session->private_folder_name,
                'shared_folder_name'    => $exhibit_session->shared_folder_name,
            ];
        } else {
            $response = [
                'status' => false
            ];
        }

        return response()->json($response);
    }

    /**
     * Exhibit session Save/Update
     *
     * @param Array $data
     * @return Illuminate\Http\JsonResponse
     */
    public function exhibitSession($data)
    {
        $exhibit_session = ExhibitSession::where('session_id', $data['session_id'])->first();

        $shared_folder_details = json_decode($this->fetchFolderDetails($data['shared_folder_id']));
        if ($shared_folder_details->shared_link !== null) {
            $shared_folder_link = $shared_folder_details->shared_link->url;
        } else {
            $query = ['fields' => 'shared_link'];
            $json = ['shared_link' => ['access' => 'open']];
            $params = [
                'query' => $query,
                'json'  => $json
            ];
            $put = BoxService::boxApi(
                'PUT',
                'https://api.box.com/2.0/folders/' . $data['shared_folder_id'],
                $params,
                $this->api_manager,
                ''
            );

            $shared_folder_link = json_decode($put)->shared_link->url;
        }

        if ($exhibit_session) {
            $exhibit_session->update([
                'user_id'               => $data['user_id'],
                'prefix'                => $data['prefix_value'],
                'private_folder_id'     => $data['private_folder_id'],
                'shared_folder_id'      => $data['shared_folder_id'],
                'shared_folder_link'    => $shared_folder_link,
                'private_folder_name'   => $data['private_folder_name'],
                'shared_folder_name'    => $data['shared_folder_name']
            ]);
        } else {
            ExhibitSession::create([
                'user_id'               => $data['user_id'],
                'session_id'            => $data['session_id'],
                'prefix'                => $data['prefix_value'],
                'private_folder_id'     => $data['private_folder_id'],
                'shared_folder_id'      => $data['shared_folder_id'],
                'shared_folder_link'    => $shared_folder_link,
                'private_folder_name'   => $data['private_folder_name'],
                'shared_folder_name'    => $data['shared_folder_name']
            ]);
        }
    }
}
