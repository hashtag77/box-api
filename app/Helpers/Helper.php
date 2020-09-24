<?php

namespace App\Helpers;

use Carbon\Carbon;

class Helper
{
    public static function formatDate($date)
    {
        return Carbon::parse($date)->format('m/d/Y');
    }

    public static function formatFileSize($size)
    {
        return number_format($size/(1024*1024), 3);
    }

    public static function getThumb($filename)
    {
        $extension = pathinfo($filename, PATHINFO_EXTENSION);
        if (in_array($extension, config('constants.ext.pdf'))) {
            $thumb = 'pdf.svg';
        } elseif (in_array($extension, config('constants.ext.image'))) {
            $thumb = 'image.svg';
        } elseif (in_array($extension, config('constants.ext.word'))) {
            $thumb = 'word.svg';
        } elseif (in_array($extension, config('constants.ext.excel'))) {
            $thumb = 'excel.svg';
        } elseif (in_array($extension, config('constants.ext.powerpoint'))) {
            $thumb = 'powerpoint.svg';
        } else {
            $thumb = 'file.svg';
        }

        return '/images/' . $thumb;
    }

    public static function randomStringGenerator()
    {
        $length = 10;

        $sets = array();
        $sets[] = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
        $sets[] = 'abcdefghjkmnpqrstuvwxyz';
        $sets[] = '23456789';
        $sets[]  = '!@#$%&*?';

        $randomString = '';
        
        foreach ($sets as $set) {
            $randomString .= $set[array_rand(str_split($set))];
        }

        while(strlen($randomString) < $length) {
            $randomSet = $sets[array_rand($sets)];
            
            $randomString .= $randomSet[array_rand(str_split($randomSet))]; 
        }

        return str_shuffle($randomString);
    }

    public static function exhibitName($prefix, $filename)
    {
        if (strpos($filename, $prefix) !== false) {
            $new_name = str_replace($prefix, "", $filename);
            $name = $prefix . '' .  explode("-", $new_name)[0] . '- ';
            $response = [
                'prefix'        => $prefix,
                'exhibit_num'   => trim(explode("-", $new_name)[0]),
                'filename'      => str_replace($name, "", $filename)
            ];
        } else {
            $response = [
                'prefix'        => $prefix,
                'exhibit_num'   => '',
                'filename'      => $filename
            ];
        }

        return $response;
    }
}