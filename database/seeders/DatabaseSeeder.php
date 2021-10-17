<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(\Database\Seeders\UserSeeder::class);
        $this->call(\Database\Seeders\SocialNetworkSeeder::class);
        // $this->call(\Database\Seeders\AboutSeeder::class);
    }
}
