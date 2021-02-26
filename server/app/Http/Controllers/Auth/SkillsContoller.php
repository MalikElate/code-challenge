<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetAuthenticatedUserController extends Controller
{
    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->authenticate();

        $request->session()->regenerate();
        $user = Auth::user();
        $id = Auth::id();

        return '$id'; 

        // Web redirects are removed since Laravel is acting only as an API 
        // return redirect()->intended(RouteServiceProvider::HOME);
    }
}
