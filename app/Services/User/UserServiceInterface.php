<?php

namespace App\Services\User;

use Illuminate\Http\Request;
use App\Http\Requests\API\RegisterRequest;
use App\Http\Requests\API\UpdateUserRequest;
use App\Http\Requests\API\AvatarRequest;

interface UserServiceInterface
{

    public function index();

    public function store(RegisterRequest $request);

    /**
     * Show a user's information
     *
     * @param  mixed $id
     * @return void
     */
    public function show($uid);

    public function update(UpdateUserRequest $request);

    public function uploadAvatar(AvatarRequest $request);

    public function me(Request $request);

    public function noSelectSocialNetwork(Request $request);
}
