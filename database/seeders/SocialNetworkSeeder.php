<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\SocialNetwork;

class SocialNetworkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SocialNetwork::create([
            'name' => 'facebook',
            'placeholder' => 'Your UID',
            'href' => 'http://www.facebook.com/',
            'path_icon_svg' => '/images/social-networks/facebook.svg',
        ]);
        SocialNetwork::create([
            'name' => 'instagram',
            'placeholder' => 'Your UID',
            'href' => 'https://www.instagram.com/',
            'path_icon_svg' => '/images/social-networks/instagram.svg',
        ]);
        SocialNetwork::create([
            'name' => 'line',
            'placeholder' => 'Your UID',
            'href' => 'https://line.me/R/ti/p/',
            'path_icon_svg' => '/images/social-networks/line.svg',
        ]);
        SocialNetwork::create([
            'name' => 'linkedin',
            'placeholder' => 'Your UID',
            'href' => 'https://www.linkedin.com/in/',
            'path_icon_svg' => '/images/social-networks/linkedin.svg',
        ]);
        SocialNetwork::create([
            'name' => 'momo',
            'placeholder' => 'Your Phone Number',
            'href' => 'https://nhantien.momo.vn/',
            'path_icon_svg' => '/images/social-networks/momo.png',
        ]);
        SocialNetwork::create([
            'name' => 'printerest',
            'placeholder' => 'Your UID',
            'href' => 'https://www.pinterest.com/',
            'path_icon_svg' => '/images/social-networks/printerest.svg',
        ]);
        SocialNetwork::create([
            'name' => 'telegram',
            'placeholder' => 'Your UID',
            'href' => 'https://telegram.me/',
            'path_icon_svg' => '/images/social-networks/telegram.svg',
        ]);
        SocialNetwork::create([
            'name' => 'tiktok',
            'placeholder' => 'Your UID',
            'href' => 'https://www.tiktok.com/@',
            'path_icon_svg' => '/images/social-networks/tiktok.svg',
        ]);
        SocialNetwork::create([
            'name' => 'twitter',
            'placeholder' => 'Your UID',
            'href' => 'https://twitter.com/',
            'path_icon_svg' => '/images/social-networks/twitter.svg',
        ]);
        SocialNetwork::create([
            'name' => 'website',
            'placeholder' => 'Your URL',
            'href' => '',
            'path_icon_svg' => '/images/social-networks/world.svg',
        ]);
        SocialNetwork::create([
            'name' => 'skype',
            'placeholder' => 'Your ID',
            'href' => 'skype:',
            'path_icon_svg' => '/images/social-networks/skype.svg',
        ]);
        SocialNetwork::create([
            'name' => 'youtube',
            'placeholder' => 'Your UID',
            'href' => 'https://www.youtube.com/channel/',
            'path_icon_svg' => '/images/social-networks/youtube.svg',
        ]);
        SocialNetwork::create([
            'name' => 'zalo',
            'placeholder' => 'Your UID',
            'href' => 'https://zalo.me/',
            'path_icon_svg' => '/images/social-networks/zalo.svg',
        ]);
    }
}
