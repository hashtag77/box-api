<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FileExhibit extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'file_id', 'exhibit_number', 'private_folder_id', 'copied_file_id', 'shared_folder_id'
    ];
}
