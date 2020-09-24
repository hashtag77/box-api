<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function box_connect()
    {
        return $this->hasOne(BoxConnect::class);
    }

    public function organizations()
    {
        return $this->belongsToMany(Organization::class);
    }

    public function privileges()
    {
        return $this->belongsToMany(Privilege::class, 'organization_user');
    }

    public function exhibit_sessions()
    {
        return $this->hasMany(ExhibitSession::class);
    }
}
