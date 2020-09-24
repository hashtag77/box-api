<?php

use App\Privilege;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class PrivilegesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Privilege::insert([
            [
                'name'          => 'Super Admin',
                'description'   => 'Super admin of Virtual Deposition.',
                'created_at'    => Carbon::now(),
                'updated_at'    => Carbon::now()
            ],
            [
                'name'          => 'Account Owner',
                'description'   => 'Acts as a super admin for an organization.',
                'created_at'    => Carbon::now(),
                'updated_at'    => Carbon::now()
            ],
            [
                'name'          => 'Admin',
                'description'   => 'Admin for an organization.',
                'created_at'    => Carbon::now(),
                'updated_at'    => Carbon::now()
            ],
            [
                'name'          => 'Basic',
                'description'   => 'Basic user of an organization.',
                'created_at'    => Carbon::now(),
                'updated_at'    => Carbon::now()
            ]
        ]);
    }
}
