<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

class AboutRequest extends FormRequest
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
            'social_network_id' => 'required',
            'show_button_text' => 'required',
            'button_text' => 'required',
            'value' => 'required',
        ];
    }
}
