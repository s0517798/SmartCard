<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\API\RegisterRequest;
use App\Http\Requests\API\UpdateUserRequest;
use App\Http\Requests\API\AvatarRequest;

use App\Services\User\UserService;
use App\Helpers\APIHelper;

use Log;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        $user = $this->userService->index();
        $res = APIHelper::createAPIResponse(false, 200, '', $user);
        return response()->json($res, 200);
    }

    public function store(RegisterRequest $request)
    {
        $user = $this->userService->store($request);
        $res = APIHelper::createAPIResponse(false, 200, '', [
            'id' => $user->id,
        ]);
        return response()->json($res, 200);
    }

    public function show($uid)
    {
        $user = $this->userService->show($uid);
        if ($user) {
            $res = APIHelper::createAPIResponse(false, 200, '', $user);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 404, 'User not found', []);
            return response()->json($res, 200);
        }
    }

    public function update(UpdateUserRequest $request)
    {
        $user = $this->userService->update($request);
        if ($user) {
            $res = APIHelper::createAPIResponse(false, 200, '', $user);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 401, 'Update Failed', []);
            return response()->json($res, 200);
        }
    }

    public function uploadAvatar(AvatarRequest $request)
    {
        $user = $this->userService->uploadAvatar($request);
        if ($user) {
            $res = APIHelper::createAPIResponse(false, 200, '', [
                'url' => $user->profile_photo_url
            ]);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 401, 'Update Failed', []);
            return response()->json($res, 200);
        }
    }

    public function me(Request $request)
    {
        $user = $this->userService->me($request);
        if ($user) {
            $res = APIHelper::createAPIResponse(false, 200, '', $user);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 404, 'User not found', []);
            return response()->json($res, 200);
        }
    }
}
