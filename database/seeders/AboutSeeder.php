<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\About;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = \App\Models\SocialNetwork::all()->count();
        for ($i = 1; $i <= $count; $i++) {
            About::create([
                'order_number' => $i - 1,
                'user_id' => 1,
                'social_network_id' => $i,
                'show_button_text' => 0,
                'button_text' => "Button Text",
                'value' => 'Value ' . $i,
            ]);
        }
    }
}
