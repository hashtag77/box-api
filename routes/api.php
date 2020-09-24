<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'box',   'namespace' => 'Api'], function () {
    /* VirtualDepo Manager */
    Route::group(['namespace' => 'Manager'], function () {
        // Api
        Route::get('update-token/{user_id}', 'ApiController@updateAccessToken');
        Route::get('check-login', 'ApiController@checkLogin');
        Route::get('grant-access', 'ApiController@grantAccess');
        Route::get('folder-files/{private_folder_id}/{shared_folder_id}/{session_id}/{prefix_value}/{private_folder_name}/{shared_folder_name}', 'ApiController@getFolderFiles');
        Route::get('disconnect', 'ApiController@disconnect');
        Route::get('check-records/{file_id}/{shared_folder_id}', 'ApiController@checkRecords');
        Route::get('refresh-records/{folder_id}/{folder_type}/{shared_folder_id}', 'ApiController@refreshRecords');

        Route::post('current-user', 'ApiController@getCurrentUser');
        Route::post('intoduce-exhibit', 'ApiController@introduceExhibit');
        Route::post('undo-exhibit', 'ApiController@undoExhibit');
        Route::post('check-email-validity', 'ApiController@checkUserEmailValidity');
        Route::post('check-email', 'ApiController@checkUserEmail');
        Route::post('create-user', 'ApiController@createUser');
        Route::post('login-user', 'ApiController@LoginUser');
        Route::post('update-profile-info', 'ApiController@updateProfileInfo');
        Route::post('check-session-entry', 'ApiController@checkSessionEntry');

        // Admin Console
        Route::post('update-organization-details', 'AdminConsoleController@updateOrganizationDetails');
        Route::post('reset-user-password', 'AdminConsoleController@resetUserPassword');
        Route::post('remove-user', 'AdminConsoleController@removeUser');
        Route::post('suspend-user', 'AdminConsoleController@suspendUser');
        Route::post('activate-user', 'AdminConsoleController@activatedUser');
        Route::post('update-privilege', 'AdminConsoleController@updatePrivilege');

        // Mails
        Route::post('send-otp', 'MailController@sendPasswordResetOtp');
        Route::post('match-otp', 'MailController@verifyOtp');
        Route::post('update-password', 'MailController@resetPassword');
        Route::get('verify-email/{email}', 'MailController@emailVerify');
        Route::post('verify-email', 'MailController@verifyEmail');
        Route::post('update-email', 'MailController@sendEmailChangeOtp');
        Route::post('verify-update-email', 'MailController@verifyAndUpdateEmail');
        Route::post('invite-user', 'MailController@inviteUser');
        Route::get('invite-user-confirm/{email}', 'MailController@confirmUser');
        Route::post('contant-suspended-support', 'MailController@contactSupportForSuspendedAccount');
        Route::get('suspended-support/{email}', 'MailController@confirmSuspendedUser');
    });

    /* VirtualDepo Exhibit */
    Route::group(['namespace' => 'Exhibit'], function () {
        // Api
        Route::get('update-access-token/{user_id}', 'ApiController@updateAccessToken');
        Route::get('check-session-login', 'ApiController@checkSessionLogin');

        Route::post('check-session-id', 'ApiController@checkSessionId');
        Route::post('get-folder-files', 'ApiController@getFolderFiles');
        Route::post('session-login', 'ApiController@sessionLogin');
        Route::post('follow', 'ApiController@follow');
    });
});
