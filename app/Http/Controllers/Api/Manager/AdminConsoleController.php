<?php

namespace App\Http\Controllers\Api\Manager;

Use DB;
use App\User;
use Carbon\Carbon;
use App\Organization;
use App\Enums\UserStatus;
use App\Enums\PrivilegeType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AdminConsoleController extends Controller
{
    /**
     * Update Organization Details
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function updateOrganizationDetails(Request $request)
    {
        $org = Organization::find($request->input('org_id'));
        $org->name = $request->input('org_name');
        $org->support_email = $request->input('support_email');
        $org->save();

        return response()->json([
            'status'        => true,
            'organization'  => $org
        ]);
    }

    /**
     * Reset User Password
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function resetUserPassword(Request $request)
    {
        $user = User::where('id', $request->input('user_id'))
                    ->update([
                        'password'              => Hash::make($request->input('password')),
                        'password_changed_at'   => Carbon::now()
                    ]);

        return response()->json([
            'status'    => true,
            'message'   => 'Password changed successfully!'
        ]);
    }

    /**
     * Remove User
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function removeUser(Request $request)
    {
        $org_user = DB::table('organization_user')
                        ->where('organization_id', $request->input('org_id'))
                        ->where('user_id', $request->input('user_id'))
                        ->delete();

        $user = User::find($request->input('user_id'));
        $user->delete();

        $org = Organization::find($request->input('org_id'));
        $users = $owners = [];
        foreach ($org->users()->get() as $org_user) {
            if ($org_user->status == UserStatus::CONFIRMED && $org_user->privileges()->first()->name == PrivilegeType::ACCOUNTOWNER) {
                array_push($owners, $org_user);
            }
            $org_user['privilege'] = $org_user->privileges()->first()->name;
            array_push($users, $org_user);
        }

        return response()->json([
            'status'    => true,
            'users'     => $users,
            'owners'    => $owners,
            'message'   => 'User removed!'

        ]);
    }

    /**
     * Suspend User
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function suspendUser(Request $request)
    {
        $user = User::where('id', $request->input('user_id'))
                    ->update([
                        'status' => UserStatus::SUSPENDED
                    ]);

        $org = Organization::find($request->input('org_id'));
        $users = $owners = [];
        foreach ($org->users()->get() as $org_user) {
            if ($org_user->status == UserStatus::CONFIRMED && $org_user->privileges()->first()->name == PrivilegeType::ACCOUNTOWNER) {
                array_push($owners, $org_user);
            }
            $org_user['privilege'] = $org_user->privileges()->first()->name;
            array_push($users, $org_user);
        }
        
        return response()->json([
            'status'    => true,
            'users'     => $users,
            'owners'    => $owners,
            'message'   => 'User has been suspended!'
        ]);
    }

    /**
     * Activate User
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function activatedUser(Request $request)
    {
        $user = User::where('id', $request->input('user_id'))
                    ->update([
                        'status' => UserStatus::CONFIRMED
                    ]);

        $org = Organization::find($request->input('org_id'));
        $users = $owners = [];
        foreach ($org->users()->get() as $org_user) {
            if ($org_user->status == UserStatus::CONFIRMED && $org_user->privileges()->first()->name == PrivilegeType::ACCOUNTOWNER) {
                array_push($owners, $org_user);
            }
            $org_user['privilege'] = $org_user->privileges()->first()->name;
            array_push($users, $org_user);
        }
        
        return response()->json([
            'status'    => true,
            'users'     => $users,
            'owners'    => $owners,
            'message'   => 'User has been activated!'
        ]);
    }

    /**
     * Update Privilege
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JsonResponse
     */
    public function updatePrivilege(Request $request)
    {
        $update = DB::table('organization_user')
                    ->where('organization_id', $request->input('org_id'))
                    ->where('user_id', $request->input('user_id'))
                    ->update([
                        'privilege_id' => $request->input('privilege_id')
                    ]);

        $org = Organization::find($request->input('org_id'));
        $users = $owners = [];
        foreach ($org->users()->get() as $org_user) {
            if ($org_user->status == UserStatus::CONFIRMED && $org_user->privileges()->first()->name == PrivilegeType::ACCOUNTOWNER) {
                array_push($owners, $org_user);
            }
            $org_user['privilege'] = $org_user->privileges()->first()->name;
            array_push($users, $org_user);
        }
        
        return response()->json([
            'status'    => true,
            'users'     => $users,
            'owners'    => $owners,
            'message'   => 'Privilege updated!'
        ]);
    }
}
