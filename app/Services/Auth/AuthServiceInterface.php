<?php

namespace App\Services\Auth;

use Illuminate\Http\Request;
use App\Http\Requests\API\LoginRequest;

interface AuthServiceInterface
{
    public function login(LoginRequest $request);

    public function logout(Request $request);
}
