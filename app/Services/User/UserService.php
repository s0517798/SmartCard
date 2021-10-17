<?php

namespace App\Services\User;

use Illuminate\Http\Request;
use App\Http\Requests\API\RegisterRequest;
use App\Http\Requests\API\UpdateUserRequest;
use App\Http\Requests\API\AvatarRequest;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use App\Services\File\Avatar\AvatarService;
use App\Helpers\FilterHelper;

use App\Services\User\UserServiceInterface;
use App\Repositories\User\UserEloquentRepository;
use App\Repositories\SocialNetwork\SocialNetworkEloquentRepository;

use Hash;
use Log;

class UserService implements UserServiceInterface
{
    protected $userRepository;
    protected $avatarService;
    protected $socialNetworkRepository;

    public function __construct(UserEloquentRepository $userRepository, AvatarService $avatarService, SocialNetworkEloquentRepository $socialNetworkRepository)
    {
        $this->userRepository = $userRepository;
        $this->avatarService = $avatarService;
        $this->socialNetworkRepository = $socialNetworkRepository;
    }

    public function index()
    {
        $user = $this->userRepository->getAll();
        return FilterHelper::filterDataUser($user);
    }

    public function store(RegisterRequest $request)
    {
        $user = $this->userRepository->create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'uid' => $request->input('uid'),
        ]);

        return $user;
    }

    public function show($uid)
    {
        $user = $this->userRepository->firstByUID($uid);
        return FilterHelper::filterDataUser($user);
    }

    public function update(UpdateUserRequest $request)
    {
        Validator::make((array)$request, [
            'email' => [
                Rule::unique('users')->ignore($request->user()->id),
            ],
        ]);

        $user = $this->userRepository->update($request->user()->id, [
            'uid' => $request->user()->uid,
            'name' => $request->name,
            'introduction' => $request->introduction != null ? $request->introduction : "",
            'email' => $request->email,
            'phone_number' => $request->phone_number != null ? $request->phone_number : "",
        ]);
        return FilterHelper::filterDataUser($user);
    }

    public function uploadAvatar(AvatarRequest $request)
    {
        $url = $this->avatarService->store($request);
        $user = $this->userRepository->update($request->user()->id, [
            'avatar_url' => $url,
        ]);
        return $user;
    }

    public function me(Request $request)
    {
        $user =  $request->user();
        return FilterHelper::filterDataUser($user);
    }

    public function noSelectSocialNetwork(Request $request)
    {
        $all = FilterHelper::filterSocialNetwork($this->socialNetworkRepository->getAll());
        $idSelected = [];
        $noSelect = [];
        foreach ($this->userRepository->find($request->user()->id)->about as $key => $value) {
            array_push($idSelected, $value->id);
        }
        foreach ($all as $key => $value) {
            if (!in_array($value['id'], $idSelected)) {
                array_push($noSelect, $all[$key]);
            }
        }
        return $noSelect;
    }
}
