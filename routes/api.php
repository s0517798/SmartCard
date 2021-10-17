<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
// use App\Http\Controllers\API\FileController;
use App\Http\Controllers\API\AboutController;
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


Route::name('api.')->group(function () {
    Route::prefix('/auth')->name('auth.')->group(function () {
        Route::post('/login', [AuthController::class, 'login'])->name('login');
        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
            Route::post('/change-password', [AuthController::class, 'changePassword'])->name('changePassword');
        });
    });

    Route::post('/register', [UserController::class, 'store'])->name('register');

    Route::prefix('/profile')->name('profile.')->group(function () {
        Route::middleware('auth:sanctum')->group(function () {
            Route::get('/me', [UserController::class, 'me'])->name('me');
            Route::put('/me', [UserController::class, 'update'])->name('update');
            Route::post('/avatar', [UserController::class, 'uploadAvatar'])->name('uploadAvatar');
            // Route::get('/all', [UserController::class, 'index'])->name('index');
        });
        Route::get('/{uid}', [UserController::class, 'show'])->name('show');
    });

    Route::prefix('/about')->name('about.')->middleware('auth:sanctum')->group(function () {
        Route::get('/', [AboutController::class, 'index'])->name('index');
        Route::get('/noSelect', [AboutController::class, 'noSelect'])->name('noSelect');
        Route::post('/social-link', [AboutController::class, 'store'])->name('store');
        Route::put('/social-link/order', [AboutController::class, 'updateOrderNumber'])->name('updateOrderNumber');
        Route::put('/social-link/{id}', [AboutController::class, 'update'])->name('update');
        Route::delete('/social-link/{id}', [AboutController::class, 'destroy'])->name('destroy');
    });

    // Route::prefix('/file')->name('file')->middleware('auth:sanctum')->group(function () {
    //     Route::post('/upload', [FileController::class, 'store'])->name('store');
    // });
});
