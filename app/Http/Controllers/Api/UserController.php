<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class UserController extends Controller
{
    //
    public function login(Request $request)
    {

        $credientials = $request->only('email', 'password');
        if (Auth::attempt($credientials)) {
            $token = Str::random(80);
            Auth::user()->api_token = $token;
            Auth::user()->save();
            return response()->json(['token' => $token], 200);
        } else {
            return response()->json(['status' => 'Email or password is incorrect'], 403);
        }

    }
}
