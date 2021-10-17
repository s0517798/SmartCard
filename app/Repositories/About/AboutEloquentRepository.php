<?php

namespace App\Repositories\About;

use App\Repositories\EloquentRepository;
use App\Repositories\About\AboutRepositoryInterface;
use App\Models\About;

class AboutEloquentRepository extends EloquentRepository implements AboutRepositoryInterface
{
    public function getModel()
    {
        return About::class;
    }
    public function maxOrderNumber($user_id)
    {
        return $this->_model->where('user_id', $user_id)->max('order_number');
    }
}
