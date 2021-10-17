<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;
use Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Nguyen Van A',
            'email' => 'nguyenvana@gmail.com',
            'phone_number' => '0123456789',
            'password' => Hash::make('password'),
            'introduction' => "Hello World!",
            'uid' => 'UID001',
        ]);
    }
}
