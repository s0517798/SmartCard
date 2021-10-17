<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'password',
        'introduction',
        'uid',
        'avatar_url',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'avatar_url'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
        'about',
    ];

    public function getProfilePhotoUrlAttribute()
    {
        return $this->avatar_url != null ? $this->avatar_url : asset('images/logo.png');
    }

    public function getAboutAttribute()
    {
        return $this->about()->get();
    }

    public function about()
    {
        return $this->hasMany(\App\Models\About::class, 'user_id', 'id');
    }
}
