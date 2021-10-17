<?php

namespace App\Repositories\User;

use App\Repositories\EloquentRepository;
use App\Repositories\User\UserRepositoryInterface;
use App\Models\User;

class UserEloquentRepository extends EloquentRepository implements UserRepositoryInterface
{
    public function getModel()
    {
        return User::class;
    }

    public function firstByEmail($email)
    {
        $user = User::whereEmail($email)->first();
        return $user;
    }

    public function firstByUID($uid)
    {
        $user = User::where('uid', $uid)->first();
        return $user;
    }
}
