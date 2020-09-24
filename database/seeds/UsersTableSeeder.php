<?php

use App\User;
use App\Privilege;
use Carbon\Carbon;
use App\Organization;
use App\Enums\UserStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userOne = User::create([
            'status'            => UserStatus::CONFIRMED,
            'name'              => 'Super Admin',
            'email'             => 'superadmin@virtualdeposition.com',
            'password'          => Hash::make('12345678'),
            'email_verified_at' => Carbon::now()
        ]);

        DB::table('organization_user')->insert([
            'user_id'       => $userOne->id,
            'privilege_id'  => Privilege::where('name', 'Super Admin')->first()->id
        ]);

        $userTwo = User::create([
            'status'            => UserStatus::CONFIRMED,
            'name'              => 'Jana',
            'email'             => 'jana@thetrialedge.com',
            'password'          => Hash::make('Trial#891-vd'),
            'email_verified_at' => Carbon::now()
        ]);

        DB::table('organization_user')->insert([
            'organization_id'   => Organization::first()->id,
            'user_id'           => $userTwo->id,
            'privilege_id'      => Privilege::where('name', 'Account Owner')->first()->id
        ]);

        $userThree = User::create([
            'status'            => UserStatus::CONFIRMED,
            'name'              => 'Jeremiah Kelman',
            'email'             => 'jkelman@thetrialedge.com',
            'password'          => Hash::make('CaptainPrice@933-vd'),
            'email_verified_at' => Carbon::now()
        ]);

        DB::table('organization_user')->insert([
            'organization_id'   => Organization::first()->id,
            'user_id'           => $userThree->id,
            'privilege_id'      => Privilege::where('name', 'Account Owner')->first()->id
        ]);

        $userFive = User::create([
            'status'            => UserStatus::CONFIRMED,
            'name'              => 'Pilot Test',
            'email'             => 'pilottest0007@gmail.com',
            'password'          => Hash::make('12345678'),
            'email_verified_at' => Carbon::now()
        ]);

        DB::table('organization_user')->insert([
            'organization_id'   => Organization::first()->id,
            'user_id'           => $userFive->id,
            'privilege_id'      => Privilege::where('name', 'Admin')->first()->id
        ]);

        $userSix = User::create([
            'status'            => UserStatus::SUSPENDED,
            'name'              => 'Test User',
            'email'             => 'test@test.com',
            'password'          => Hash::make('12345678'),
            'email_verified_at' => Carbon::now()
        ]);

        DB::table('organization_user')->insert([
            'organization_id'   => Organization::first()->id,
            'user_id'           => $userSix->id,
            'privilege_id'      => Privilege::where('name', 'Basic')->first()->id
        ]);

        $userSeven = User::create([
            'status'            => UserStatus::PENDING,
            'email'             => 'user1@user.com'
        ]);

        DB::table('organization_user')->insert([
            'organization_id'   => Organization::first()->id,
            'user_id'           => $userSeven->id,
            'privilege_id'      => Privilege::where('name', 'Basic')->first()->id
        ]);
    }
}
