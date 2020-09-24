<?php

use App\Organization;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class OrganizationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Organization::create([
            'name'          => 'TrailEdge LLC',
            'description'   => 'TrailEdge LLC Organization',
            'slug'          => Str::slug('TrailEdge LLC')
        ]);
    }
}
