<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'support_email'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
