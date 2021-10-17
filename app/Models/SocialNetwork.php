<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialNetwork extends Model
{
    use HasFactory;
    protected $table = 'social_networks';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'placeholder',
        'href',
        'href_app',
        'path_icon_svg',
    ];

    public function About()
    {
        return $this->hasMany(\App\Models\About::class, 'network_social_id', 'id');
    }
}
