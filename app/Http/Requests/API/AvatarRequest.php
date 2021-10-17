<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

class AvatarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // 'file' => 'required|image|mimes:jpeg,png,jpg|max:2048|dimensions:min_width=200,min_height=200,max_width=1000,max_height=1000',
            'file' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ];
    }
}
