<?php

use App\Http\Controllers\BantuanMadani;
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



Route::get('', [BantuanMadani::class, 'index'])->name('bantuan.index');
Route::post('bantuan/registration/', [BantuanMadani::class, 'registrasi_store'])->name('bantuan.registrasi-store');
Route::post('bantuan/store-verifikasi/', [BantuanMadani::class, 'verifikasi_store'])->name('bantuan.verifikasi-store');
Route::post('bantuan/password-store/', [BantuanMadani::class, 'password_store'])->name('bantuan.password-store');
