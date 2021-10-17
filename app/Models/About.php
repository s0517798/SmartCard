<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;
    protected $table = 'about';
    protected $primaryKey = 'id';
    protected $fillable = [
        'order_number',
        'user_id',
        'social_network_id',
        'show_button_text',
        'button_text',
        'value',
    ];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class, 'user_id', 'id');
    }

    public function socialNetwork()
    {
        return $this->belongsTo(\App\Models\SocialNetwork::class, 'social_network_id', 'id');
    }
}
