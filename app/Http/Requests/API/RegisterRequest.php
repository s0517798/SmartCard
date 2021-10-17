<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'email' => 'required|string|max:255|email|unique:users,email',
            'password' => 'required|string|min:8|max:32',
            'name' => 'required|string|max:255|alpha_spaces',
            'uid' => 'required|string|max:10|alpha_dash|unique:users',
        ];
    }
}
