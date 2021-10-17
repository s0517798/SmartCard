<?php

namespace App\Repositories\SocialNetwork;

use App\Repositories\EloquentRepository;
use App\Repositories\SocialNetwork\SocialNetworkRepositoryInterface;
use App\Models\SocialNetwork;

class SocialNetworkEloquentRepository extends EloquentRepository implements SocialNetworkRepositoryInterface
{
    public function getModel()
    {
        return SocialNetwork::class;
    }
}
