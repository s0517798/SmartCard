<?php

namespace App\Services\File\File;

use App\Http\Requests\API\FileRequest;

interface FileServiceInterface
{
    public function store(FileRequest $file);
}
