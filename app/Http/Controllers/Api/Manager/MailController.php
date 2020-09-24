<?php

namespace App\Http\Controllers\Api\Manager;

use App\User;
use App\Privilege;
use Carbon\Carbon;
use App\Organization;
use App\Helpers\Helper;
use App\Enums\UserStatus;
use App\Enums\PrivilegeType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Session;

class MailController extends Controller
{
    /**
     * Send Reset Password OTP to email
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JSONResponse
     */
    public function sendPasswordResetOtp(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();

        if ($user) {
            $to_name = $user->name;
            $to_email = $user->email;

            $reset_exists = DB::table('password_resets')
                            ->where('email', $user->email)
                            ->first();

            if ($reset_exists) {
                $reset = $reset_exists;
            } else {
                $password_reset = DB::table('password_resets')->insert([
                    'email'         => $user->email,
                    'token'         => Helper::randomStringGenerator(),
                    'created_at'    => Carbon::now()
                ]);

                $reset = DB::table('password_resets')
                            ->where('email', $user->email)
                            ->first();
            }

            $data = array(
                "name"  => $user->name,
                "token" => $reset->token
            );

            Mail::send("emails.password-reset", $data, function($message) use ($to_name, $to_email) {
                    $message->to($to_email, $to_name)
                            ->subject("Password Reset");
                    $message->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
            });

            $response = [
                'status'    => true,
                'message'   => 'OTP has been sent successfully to your email!'
            ];
        } else {
            $response = [
                'status'    => false,
                'message'   => 'Email does not exists!'
            ];
        }

        return response()->json($response);
    }

    /**
     * Verify OTP
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JSONResponse
     */
    public function verifyOtp(Request $request)
    {
        $reset = DB::table('password_resets')
                ->where('email', $request->input('email'))
                ->where('token', $request->input('token'))
                ->first();

        if ($reset) {
            $response = [
                'status'    => true
            ];
        } else {
            $response = [
                'status'    => false,
                'message'   => 'Invalid OTP!'
            ];
        }

        return response()->json($response);
    }

    /**
     * Reset Password
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JSONResponse
     */
    public function resetPassword(Request $request)
    {
        $reset = DB::table('password_resets')
                    ->where('email', $request->input('email'))
                    ->delete();

        User::where('email', $request->input('email'))
                ->update([
                    'password'              => Hash::make($request->input('password')),
                    'password_changed_at'   => Carbon::now()
                ]);

        $user = User::where('email', $request->input('email'))->first();

        return response()->json([
            'status'                => true,
            'message'               => 'Password changed successfully! Please login to continue.',
            'user'                  => $user
        ]);
    }

    /**
     * Verify Email
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JSONResponse
     */
    public static function verifyEmail(Request $request)
    {
        $email = $request->input('email');

        return self::verifyEmailAddress($email);
    }

    /**
     * Verify Email Address
     *
     */
    public static function verifyEmailAddress($email)
    {
        $user = User::where('email', $email)->first();

        if ($user) {
            $to_name = $user->name;
            $to_email = $user->email;

            $token = Carbon::parse(Carbon::now())->format('YmdHis');

            $data = array(
                "name"  => $user->name,
                "url"   => env('APP_URL') . '/api/box/verify-email/' . Crypt::encrypt($user->email)
            );

            Mail::send("emails.email-verify", $data, function($message) use ($to_name, $to_email) {
                    $message->to($to_email, $to_name)
                            ->subject("Verify Your Email");
                    $message->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
            });

            return response()->json([
                'status'    => true,
                'message'   => 'Please check your email!'
            ]);
        }
    }


    /**
     * Email Verify
     *
     * @param $email
     * @return Illuminate\Http\JSONResponse
     */
    public function emailVerify($email)
    {
        $user = User::where('email', Crypt::decrypt($email))->first();

        if ($user) {
            if ($user->email_verified_at) {
                return redirect('/');
            } else {
                $user->email_verified_at = Carbon::now();
                $user->save();

                Session::flash('success', 'Email verified successfully.');
            }
        } else {
            Session::flash('error', 'Email is already verified!');
        }

        return redirect('/');
    }

    /**
     * Send Email Change OTP to email
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JSONResponse
     */
    public function sendEmailChangeOtp(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();

        if ($user) {
            $to_name = $user->name;
            $to_email = $user->email;

            $reset_exists = DB::table('email_resets')
                            ->where('email', $user->email)
                            ->first();

            if ($reset_exists) {
                $reset = $reset_exists;
            } else {
                $email_reset = DB::table('email_resets')->insert([
                    'email'         => $user->email,
                    'token'         => Helper::randomStringGenerator(),
                    'new_email'     => $request->input('new_email'),
                    'created_at'    => Carbon::now()
                ]);

                $reset = DB::table('email_resets')
                            ->where('email', $user->email)
                            ->first();
            }

            $data = array(
                "name"  => $user->name,
                "token" => $reset->token
            );

            Mail::send("emails.update-email", $data, function($message) use ($to_name, $to_email) {
                    $message->to($to_email, $to_name)
                            ->subject("Update Email");
                    $message->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
            });

            $response = [
                'status'    => true,
                'message'   => 'We sent you an email to your old email address "<b>' . $to_email . '</b>" to confirm your new email address.<br>Please enter the code from the email below to confirm:'
            ];
        } else {
            $response = [
                'status'    => false,
                'message'   => 'Email does not exists!'
            ];
        }

        return response()->json($response);
    }

    /**
     * Verify and Update Email Address
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JSONResponse
     */
    public function verifyAndUpdateEmail(Request $request)
    {
        $reset = DB::table('email_resets')
                ->where('email', $request->input('email'))
                ->where('token', $request->input('token'));

        if ($reset->first()) {
            $reset->delete();

            $response = [
                'status'    => true,
                'message'   => 'OTP Verified!'
            ];
        } else {
            $response = [
                'status'    => false,
                'message'   => 'Invalid OTP!'
            ];
        }

        return response()->json($response);
    }

    /**
     * Invite User
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JSONResponse
     */
    public function inviteUser(Request $request)
    {
        $auth_user = User::find($request->input('user_id'));
        $org = Organization::find($request->input('org_id'));

        $user = User::where('email', $request->input('email'))->first();

        if (!$user) {
            $to_email = $request->input('email');

            $data = array(
                "invite_by" => $auth_user->name,
                'org'       => $org->name,
                "url"       => env('APP_URL') . '/api/box/invite-user-confirm/' . Crypt::encrypt($to_email)
            );

            Mail::send("emails.invite-user", $data, function($message) use ($to_email) {
                $message->to($to_email)
                        ->subject("Invite");
                $message->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
            });

            $create = User::create([
                'email' => $to_email,
            ]);

            $org_user_create = DB::table('organization_user')->insert([
                'organization_id'   => $org->id,
                'user_id'           => $create->id,
                'privilege_id'      => Privilege::where('name', PrivilegeType::BASIC)->first()->id
            ]);

            $users = [];
            foreach ($org->users()->get() as $org_user) {
                $org_user['privilege'] = $org_user->privileges()->first()->name;
                array_push($users, $org_user);
            }

            $response = [
                'status'    => true,
                'message'   => 'Invitation sent successfully!',
                'users'     => $users
            ];
        } else if ($user && $user->status == UserStatus::PENDING) {
            $to_email = $user->email;

            $data = array(
                "invite_by" => $auth_user->name,
                'org'       => $org->name,
                "url"       => env('APP_URL') . '/api/box/invite-user-confirm/' . Crypt::encrypt($to_email)
            );

            Mail::send("emails.invite-user", $data, function($message) use ($to_email) {
                $message->to($to_email)
                        ->subject("Invite");
                $message->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
            });

            $users = [];
            foreach ($org->users()->get() as $org_user) {
                $org_user['privilege'] = $org_user->privileges()->first()->name;
                array_push($users, $org_user);
            }

            $response = [
                'status'    => true,
                'message'   => 'Invitation sent successfully!',
                'users'     => $users
            ];
        } else {
            $response = [
                'status'    => false,
                'message'   => 'User already exists!'
            ];
        }

        return response()->json($response);
    }

    /**
     * Confirm User
     *
     * @param $email
     * @return redirectTo
     */
    public function confirmUser($email)
    {
        $user = User::where('email', Crypt::decrypt($email))->first();

        if ($user && $user->status == UserStatus::PENDING) {
            if (session_status() == PHP_SESSION_NONE) {
                session_start();
            }

            $_SESSION['invited_email'] = $user->email;
        }

        return redirect('/');
    }

    /**
     * Contact Support For Suspended Account
     *
     * @param Illuminate\Http\Request
     * @return Illuminate\Http\JSONResponse
     */
    public function contactSupportForSuspendedAccount(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();

        if ($user) {
            $org = $user->organizations()->first();

            if ($org->support_email !== null) {
                $to_email = $org->support_email;

                $data = array(
                    "user_name" => $user->name,
                    'user_email'=> $user->email,
                    'msg'       => $request->input('message'),
                    "url"       => env('APP_URL') . '/api/box/suspended-support/' . Crypt::encrypt($request->input('email'))
                );

                Mail::send("emails.suspended-support", $data, function($message) use ($to_email) {
                    $message->to($to_email)
                            ->subject("Suspended Account Request");
                    $message->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
                });
            } else {
                foreach ($org->users()->get() as $org_user) {
                    if ($org_user->status == UserStatus::CONFIRMED && $org_user->privileges()->first()->name == PrivilegeType::ACCOUNTOWNER) {
                        $to_email = $org_user->email;

                        $data = array(
                            "user_name" => $user->name,
                            'user_email'=> $user->email,
                            'msg'       => $request->input('message'),
                            "url"       => env('APP_URL') . '/api/box/suspended-support/' . Crypt::encrypt($request->input('email'))
                        );

                        Mail::send("emails.suspended-support", $data, function($message) use ($to_email) {
                            $message->to($to_email)
                                    ->subject("Suspended Account Request");
                            $message->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
                        });
                    }
                }
            }

            $response = [
                'status'    => true,
                'message'   => 'Query sent successfully!'
            ];
        } else {
            $response = [
                'status'    => false,
                'message'   => 'Something went wrong!'
            ];
        }

        return response()->json($response);
    }

    /**
     * Confirm Suspended User
     *
     * @param $email
     * @return redirectTo
     */
    public function confirmSuspendedUser($email)
    {
        $user = User::where('email', Crypt::decrypt($email))->first();

        if ($user && $user->status == UserStatus::SUSPENDED) {
            $user->status = UserStatus::CONFIRMED;
            $user->save();
        }

        return redirect('/');
    }
}
