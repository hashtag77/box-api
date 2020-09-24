<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Privilege extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'organization_user');
    }
}
