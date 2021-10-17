<?php

namespace App\Helpers;

use Log;

class FilterHelper
{
    public static function filterDataUser(Object $user)
    {
        $about = [];
        foreach ($user->about as $key => $value) {
            $about[$key] = [
                'id' => $value->id,
                'name' => $value->socialNetwork->name,
                'order_number' => $value->order_number,
                'show_button_text' => $value->show_button_text,
                'button_text' => $value->button_text,
                'value' => $value->value,
                'placeholder' => $value->socialNetwork->placeholder,
                'href' => $value->socialNetwork->href,
                'path_icon_svg' => $value->socialNetwork->path_icon_svg,
                'icon_font_awesome' => $value->socialNetwork->icon_font_awesome,
            ];
        }

        /* Sort with order_number */
        usort($about, function ($item1, $item2) {
            return $item1['order_number'] <=> $item2['order_number'];
        });

        $res = [
            // 'id' => $user->id,
            'email' => $user->email,
            'phone_number' => $user->phone_number,
            // 'uid' => $user->uid,
            'name' => $user->name,
            'introduction' => $user->introduction,
            'profile_photo_url' => $user->profile_photo_url,
            'about' => $about,
        ];
        return $res;
    }

    public static function filterSocialNetwork(Object $socialNetwork)
    {
        $result = [];
        foreach ($socialNetwork as $key => $value) {
            $result[$key] = [
                'id' => $value->id,
                'name' => $value->name,
                'placeholder' => $value->placeholder,
                'href' => $value->href,
                'path_icon_svg' => $value->path_icon_svg,
            ];
        }
        return $result;
    }

    public static function filterAbout(Object $about)
    {
        return [
            'id' => $about->id,
            'order_number' => $about->order_number,
            // 'user_id' => $about->user_id,
            'social_network_id' => $about->social_network_id,
            'show_button_text' => $about->show_button_text,
            'button_text' => $about->button_text,
            'value' => $about->value,
        ];
    }
}
