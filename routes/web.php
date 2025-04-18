<?php

use App\Http\Controllers\LokerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegistController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('', [LokerController::class, 'index']);
Route::get('registrasi/', [LokerController::class, 'registrasi'])->name('registrasi');
Route::post('registrasi/', [LokerController::class, 'registrasi_store'])->name('registrasi-store');
Route::post('verifikasi-data/', [LokerController::class, 'verifikasi_store'])->name('verif-store');
Route::post('password/', [LokerController::class, 'password_store'])->name('password-store');

Route::get('two', function () {
    return inertia('Two/Index');
});

Route::get('registration/', [RegistController::class, 'registrasi'])->name('registrasi2');
Route::post('registration/', [RegistController::class, 'registrasi_store'])->name('registrasi2-store');
Route::post('verifikasi/', [RegistController::class, 'verifikasi_store'])->name('verifikasi2-store');
Route::post('password-store/', [RegistController::class, 'password_store'])->name('password2-store');
