<?php

namespace App\Helpers;

class APIHelper
{
    public static function createAPIResponse($isError = true, $code = 500, $message = '', $content = [])
    {
        $result = [];
        if ($isError) {
            $result['success'] = false;
            $result['code'] = $code;
            $result['message'] = $message;
        } else {
            $result['success'] = true;
            $result['code'] = $code;
            if ($content == null) {
                $result['message'] = $message;
            } else {
                $result['data'] = $content;
            }
        }
        return $result;
    }
}
