<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\API\LoginRequest;
use App\Http\Requests\API\ChangePasswordRequest;
use App\Helpers\APIHelper;

use App\Services\Auth\AuthService;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function login(LoginRequest $request)
    {
        $token = $this->authService->login($request);
        if ($token) {
            $res = APIHelper::createAPIResponse(false, 200, '', [
                'token' => $token,
            ]);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 401, 'Wrong login information', []);
            return response()->json($res, 200);
        }
    }

    public function logout(Request $request)
    {
        $this->authService->logout($request);
        $res = APIHelper::createAPIResponse(false, 200, '', [
            'id' => $request->user()->id,
        ]);
        return response()->json($res, 200);
    }

    public function changePassword(ChangePasswordRequest $request)
    {
        $result = $this->authService->changePassword($request);
        $res = APIHelper::createAPIResponse(false, 200, '', [
            'result' => $result,
        ]);
        return response()->json($res, 200);
    }
}
