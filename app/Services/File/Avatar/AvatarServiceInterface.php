<?php

namespace App\Services\File\Avatar;

use App\Http\Requests\API\AvatarRequest;

interface AvatarServiceInterface
{
    public function store(AvatarRequest $file);
}
