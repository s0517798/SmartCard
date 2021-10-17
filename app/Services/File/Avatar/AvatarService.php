<?php

namespace App\Services\File\Avatar;

use Illuminate\Http\Request;
use App\Http\Requests\API\AvatarRequest;
use Illuminate\Support\Facades\Storage;
use App\Services\File\Avatar\AvatarServiceInterface;

class AvatarService implements AvatarServiceInterface
{
    public function store(AvatarRequest $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $originalName = $file->getClientOriginalName();

            $name = time() . '_' . $originalName;
            $destinationPath = storage_path('app/public/images');

            $file->move($destinationPath, $name);
            return asset(Storage::url('images/' . $name));
        } else {
            return null;
        }
    }
}
