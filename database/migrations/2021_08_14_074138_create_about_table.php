<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAboutTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('about', function (Blueprint $table) {
            $table->id();
            $table->integer('order_number');
            $table->foreignId('user_id')
                ->constrained('users');
            $table->foreignId('social_network_id')
                ->constrained('social_networks');
            $table->boolean('show_button_text')
                ->default(false);
            $table->string('button_text')
                ->nullable();
            $table->string('value');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('about');
    }
}
