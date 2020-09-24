<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BoxConnect extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'name', 'email', 'access_token', 'refresh_token', 'expiry'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
