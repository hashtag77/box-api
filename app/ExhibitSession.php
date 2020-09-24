<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExhibitSession extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'session_id', 'prefix', 'private_folder_id', 'shared_folder_id', 'shared_folder_link', 'private_folder_name', 'shared_folder_name'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}