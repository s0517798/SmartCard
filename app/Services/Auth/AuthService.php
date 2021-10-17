<?php

namespace App\Services\Auth;

use Illuminate\Http\Request;
use App\Http\Requests\API\LoginRequest;
use App\Http\Requests\API\ChangePasswordRequest;
use App\Services\Auth\AuthServiceInterface;
use App\Repositories\User\UserEloquentRepository;
use Hash;
use Auth;
use Log;

class AuthService implements AuthServiceInterface
{
    protected $userRepository;

    public function __construct(UserEloquentRepository $userRepository)
    {
        $this->userRepository  = $userRepository;
    }

    public function login(LoginRequest $request)
    {
        if (Auth::attempt(
            [
                'email' => $request->input('email'),
                'password' => $request->input('password'),
            ]
        )) {
            // $user = User::whereEmail($request->input('email'))->first();
            $user = $this->userRepository->firstByEmail($request->input('email'));
            $token = $user->createToken('APP');
            return $token->plainTextToken;
        } else {
            return false;
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
    }

    public function changePassword(ChangePasswordRequest $request)
    {
        $user = $request->user();
        if ($user) {
            if (Hash::check($request->input('current_password'), $user->password)) {
                $user->forceFill([
                    'password' => Hash::make($request->input('password')),
                ])->save();
                return true;
            }
        }
        return false;
    }
}
