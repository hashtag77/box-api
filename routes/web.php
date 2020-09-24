<?php

use Carbon\Carbon;
use App\Services\BoxService;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function() {
    return redirect('/exhibit');
});

Route::get('/logout', 'Api\Manager\ApiController@logout');
Route::get('session-logout', 'Api\Exhibit\ApiController@sessionLogout');

Route::get('/{section}', 'HomeController@index')->where('section', 'manager|exhibit');

Route::get('box', function() {
    return BoxService::getBoxAuthCode();
});

Route::get('box/callback', function() {
    return BoxService::getBoxAccessToken();
});

Auth::routes();
