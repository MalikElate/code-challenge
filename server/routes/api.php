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
    $skill = $request->input('skill');
    $tag = $request->input('tag');
    DB::insert(
        "insert into skills (skill_name, skill_status, skill_tag)
        values (?, 'incomplete', ?);", [$skill, $tag]
    );
    return [$skill, $tag];
});

Route::delete('/skills/{id}', function (Request $request, $id) {
    DB::delete('delete from skills where skill_id = ?', [$id]);
    return $id;
});

Route::put('/skills/{id}/{newStatus}', function (Request $request, $id, $newStatus) {
    DB::update(
        "update skills set skill_status = ? where skill_id = ?",
        [$newStatus, $id]
    );
    return $id;
});
