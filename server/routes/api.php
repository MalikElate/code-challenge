<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the 'api' middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// get all the skills for a
Route::get('/skills', function (Request $request) {
        $users = DB::select('select * from skills');

        return $users;
});
Route::post('/skills', function (Request $request) {
    // DB::insert(
    //     "insert into skills (skill_name, skill_status, skill_tag)
    //     values (?, 'incomplete', ?);", ['test', 'test']
    // );

    return $request->input('skill');
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });

