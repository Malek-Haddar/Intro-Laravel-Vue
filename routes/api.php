<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\Authenticate;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::ApiResource('post', PostsController::class);




// Route::post('login', [AuthController::class, 'authenticate'])
//     ->name('authenticate');




// Route::resource('post', PostsController::class)
//     ->middleware('auth');

//Public Routes
Route::get('/post', [PostsController::class, 'index']);
Route::get('/post/{id}', [PostsController::class, 'show']);
// Route::get('/post/search/{name}', [ProductController::class, 'search']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'authenticate']);



//Protected Routes
// Route::group(['middleware' => ['auth:sanctum']], function () {
Route::post('/post', [PostsController::class, 'store']);
Route::put('/post/{id}', [PostsController::class, 'update']);
Route::delete('/post/{id}', [PostsController::class, 'destroy']);
Route::post('/logout', [AuthController::class, 'logout']);
// });

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
