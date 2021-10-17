<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\API\FileRequest;
use App\Services\File\FileService;
use App\Helpers\APIHelper;

class FileController extends Controller
{
    protected $fileService;

    public function __construct(FileService $fileService)
    {
        $this->fileService = $fileService;
    }

    public function store(FileRequest $request)
    {
        $url = $this->fileService->store($request);

        if ($url) {
            $res = APIHelper::createAPIResponse(false, 200, '', [
                'url' => $url,
            ]);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 200, 'Url not found', []);
            return response()->json($res, 200);
        }
    }
}
