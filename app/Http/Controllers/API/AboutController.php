<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\API\AboutRequest;
use App\Http\Requests\API\AboutOrderNumberRequest;

use App\Services\About\AboutService;

use App\Helpers\APIHelper;
use Log;

class AboutController extends Controller
{
    protected $aboutService;

    public function __construct(AboutService $aboutService)
    {
        $this->aboutService = $aboutService;
    }

    public function index(Request $request)
    {
        $list = $this->aboutService->index($request);
        if ($list) {
            $res = APIHelper::createAPIResponse(false, 200, '', $list);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 200, 'Empty', []);
            return response()->json($res, 200);
        }
    }

    /**
     * Lấy ra danh sách các social network mà người dùng chưa chọn trong list social network
     *
     * @return void
     */
    public function noSelect(Request $request)
    {
        $list = $this->aboutService->noSelect($request);
        if ($list) {
            $res = APIHelper::createAPIResponse(false, 200, '', $list);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 200, 'Empty', []);
            return response()->json($res, 200);
        }
    }

    public function store(AboutRequest $request)
    {
        $result = $this->aboutService->store($request);
        if ($result) {
            $res = APIHelper::createAPIResponse(false, 200, '', $result);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 200, 'Empty', []);
            return response()->json($res, 200);
        }
    }

    public function update($id, AboutRequest $request)
    {
        $result = $this->aboutService->update($id, $request);
        // switch ($result) {
        //     case "Error 403": {
        //             $res = APIHelper::createAPIResponse(true, 403, '', []);
        //             return response()->json($res, 403);
        //             break;
        //         }
        //     case "Error 404": {
        //             $res = APIHelper::createAPIResponse(true, 404, '', [
        //                 'result' => $result,
        //             ]);
        //             return response()->json($res, 404);
        //             break;
        //         }
        //     case true: {
        //             $res = APIHelper::createAPIResponse(false, 200, '', [
        //                 'result' => $result,
        //             ]);
        //             return response()->json($res, 200);
        //             break;
        //         }

        //     case false: {
        //             $res = APIHelper::createAPIResponse(true, 200, 'Empty', []);
        //             return response()->json($res, 200);
        //             break;
        //         }
        //     default: {
        //             $res = APIHelper::createAPIResponse(false, 200, '', [
        //                 'result' => $result,
        //             ]);
        //             return response()->json($res, 200);
        //             break;
        //         }
        // }
        if ($result) {
            $res = APIHelper::createAPIResponse(true, 200, '', [
                'result' => $result,
            ]);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 500, '', [
                'result' => $result,
            ]);
            return response()->json($res, 200);
        }
    }

    public function updateOrderNumber(Request $request)
    {
        $result = $this->aboutService->updateOrderNumber($request);
        // switch ($result) {
        //     case "Error 403": {
        //             $res = APIHelper::createAPIResponse(true, 403, '', []);
        //             return response()->json($res, 403);
        //             break;
        //         }
        //     case "Error 404": {
        //             $res = APIHelper::createAPIResponse(true, 404, '', [
        //                 'result' => $result,
        //             ]);
        //             return response()->json($res, 404);
        //             break;
        //         }
        //     case true: {
        //             $res = APIHelper::createAPIResponse(false, 200, '', [
        //                 'result' => $result,
        //             ]);
        //             return response()->json($res, 200);
        //             break;
        //         }

        //     case false: {
        //             $res = APIHelper::createAPIResponse(true, 200, 'Empty', []);
        //             return response()->json($res, 200);
        //             break;
        //         }
        //     default: {
        //             $res = APIHelper::createAPIResponse(false, 200, '', [
        //                 'result' => $result,
        //             ]);
        //             return response()->json($res, 200);
        //             break;
        //         }
        // }
        if ($result) {
            $res = APIHelper::createAPIResponse(true, 200, '', [
                'result' => $result,
            ]);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 500, '', [
                'result' => $result,
            ]);
            return response()->json($res, 200);
        }
    }

    public function destroy($id, Request $request)
    {
        $result = $this->aboutService->destroy($id, $request);
        // switch ($result) {
        //     case "Error 403": {
        //             $res = APIHelper::createAPIResponse(true, 403, '', []);
        //             return response()->json($res, 403);
        //             break;
        //         }
        //     case "Error 404": {
        //             $res = APIHelper::createAPIResponse(true, 404, '', [
        //                 'result' => $result,
        //             ]);
        //             return response()->json($res, 404);
        //             break;
        //         }
        //     case true: {
        //             $res = APIHelper::createAPIResponse(false, 200, '', [
        //                 'result' => $result,
        //             ]);
        //             return response()->json($res, 200);
        //             break;
        //         }

        //     case false: {
        //             $res = APIHelper::createAPIResponse(true, 200, 'Empty', []);
        //             return response()->json($res, 200);
        //             break;
        //         }
        //     default: {
        //             $res = APIHelper::createAPIResponse(false, 200, '', [
        //                 'result' => $result,
        //             ]);
        //             return response()->json($res, 200);
        //             break;
        //         }
        // }
        if ($result) {
            $res = APIHelper::createAPIResponse(true, 200, '', [
                'result' => $result,
            ]);
            return response()->json($res, 200);
        } else {
            $res = APIHelper::createAPIResponse(true, 500, '', [
                'result' => $result,
            ]);
            return response()->json($res, 200);
        }
    }
}
