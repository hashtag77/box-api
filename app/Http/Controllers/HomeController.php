<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($section)
    {
        return view('home')->with([
            'title' => 'VirtualDepo | ' . ucfirst(trans($section))
        ]);
    }
}
