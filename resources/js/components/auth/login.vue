<template>
    <div style="background: #ffffff;">
        <div class="box-cloud-header" style="height: 60px;">
            <div class="box-header-logo">
                <img src="/images/logo.svg">
            </div>
        </div>
        <div class="box-flash-fix">
            <flash-message class="box-flash-text myCustomClass"></flash-message>
            <div
                class="box-flash-text myCustomClass"
                v-if="inactiveUser"
            >
                <div class="flash__wrapper">
                    <div role="alert" aria-live="polite" aria-atomic="true" class="error flash__message">
                        <div class="flash__message-content text-center">
                            <div class="box-update-loader">
                                <span
                                    v-if="inactiveUser"
                                >
                                    Your account is inactive. Please contact
                                    <button
                                        class="box-btn-save"
                                        style="width: 76px; height: 37px;"
                                        @click="handleSupport"
                                    >
                                        support
                                    </button>
                                    for more information.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="box-login-form">

            <div class="box-login-card">
                <div class="text-center mb-5">
                    <img src="/images/vi_logo.svg">
                </div>

                <div v-if="!getOTP" class="box-flex d-flex flex-column mb-4">

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        class="border border-secondary"
                        :value="email"
                        @input="handleEmailChange"
                    >
                    <button
                        v-if="!emailAvailable && !forgotPassword && !createAcount && !nextButtonLoader"
                        type="button"
                        class="box-btn-save"
                        @click="checkEmail"
                    >
                        Next
                    </button>
                    <button v-if="nextButtonLoader">
                        <b-spinner small></b-spinner>
                    </button>
                    <button
                        v-if="forgotPassword && !nextButtonLoader"
                        type="button"
                        class="box-btn-save"
                        @click="handleOTPFunction"
                    >
                        Get OTP
                    </button>
                </div>

                <div
                    class="box-flex d-flex flex-column mb-4"
                    v-if="getOTP && !otpMatch"
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            class="border border-secondary"
                            v-model="otpValue"
                        >
                    </div>
                    <div>
                        <button
                            v-if="!submitButtonLoader"
                            type="button"
                            class="box-btn-save"
                            @click="handleSubmitOTP"
                        >
                            Submit OTP
                        </button>
                         <button v-else>
                            <b-spinner small></b-spinner>
                        </button>
                    </div>
                </div>
                <div
                    class="box-flex d-flex flex-column mb-4"
                    v-if="emailAvailable && !forgotPassword"
                >
                    <div class="d-flex d-inline">
                        <label>Password</label>
                        <img src="/images/info.svg" :title="tooltipText" class="ml-2 mb-3">
                    </div>
                    <div class="box-form-password position-relative">
                         <input
                            :type="!showLoginPassword ? 'password' : 'text'"
                            class="border border-secondary"
                            placeholder="Enter your password"
                            v-model="password"

                        >
                        <span
                            v-if="!showLoginPassword"
                            class="position-absolute"
                            style="cursor:pointer"
                            v-on:click="showLoginPassword = !showLoginPassword"
                        >
                            <b-icon-eye></b-icon-eye>
                        </span>
                        <span
                            v-else
                            class="position-absolute"
                            style="cursor:pointer"
                            v-on:click="showLoginPassword = !showLoginPassword"
                        >
                            <b-icon-eye-slash></b-icon-eye-slash>
                        </span>
                    </div>

                    <button
                        type="button"
                        class="box-btn-save"
                        @click="handleLogin"
                    >
                        Login
                    </button>
                    <a
                        class="box-btn-forgot mt-2"
                        @click="handleforgotPassword"
                    >
                        Forgot Password?
                    </a>
                </div>

            </div>
            <div
                class="box-flex"
                v-if="createAcount && !emailAvailable"
            >
                <div v-if="!otpMatch" class="d-flex flex-column mb-4">
                    <label> Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        class="border border-secondary"
                        v-model="fullName"
                    >
                </div>
                <div class="d-flex flex-column mb-4">
                   <div class="d-flex d-inline">
                        <label>Password</label>
                        <!-- <span type="button" class="box-tooltip" data-toggle="tooltip" data-placement="top" :title="tooltipText">
                         i
                        </span> -->
                        <img src="/images/info.svg" :title="tooltipText" class="ml-2 mb-3">
                    </div>
                    <div class="box-form-password position-relative">
                        <input
                            :type="!sPassword ? 'password' : 'text'"
                            class="border border-secondary"
                            placeholder="Enter your password"
                            :value="newPassword"
                            @blur="handlePassword"
                        >
                        <span
                            v-if="!sPassword"
                            class="position-absolute"
                            style="cursor:pointer"
                            v-on:click="sPassword = !sPassword"
                        >
                            <b-icon-eye></b-icon-eye>
                        </span>
                        <span
                            v-else
                            class="position-absolute"
                            style="cursor:pointer"
                            v-on:click="sPassword = !sPassword"
                        >
                            <b-icon-eye-slash></b-icon-eye-slash>
                        </span>
                    </div>
                </div>
                <div class="d-flex flex-column mb-4">
                    <label> Confirm Password</label>
                    <div class="box-form-password position-relative">
                        <input
                            :type="!sConfirmPassword ? 'password' : 'text'"
                            class="border border-secondary"
                            v-model="confirmNewPassword"
                            placeholder="Enter password again"
                        >
                        <span
                            v-if="!sConfirmPassword"
                            class="position-absolute"
                            style="cursor:pointer"
                            v-on:click="sConfirmPassword = !sConfirmPassword"
                        >
                            <b-icon-eye ></b-icon-eye>
                        </span>
                        <span
                            v-else
                            class="position-absolute"
                            style="cursor:pointer"
                            v-on:click="sConfirmPassword = !sConfirmPassword"
                        >
                            <b-icon-eye-slash></b-icon-eye-slash>
                        </span>
                    </div>
                </div>
                <button
                    type="button"
                    class="box-btn-save"
                    v-if="!otpMatch && !createAccountLoader"
                    @click="createNewAccount"
                >
                    Create an Account
                </button>
                 <button v-if="createAccountLoader">
                    <b-spinner small></b-spinner>
                </button>
                <button
                    type="button"
                    class="box-btn-save"
                    v-if="otpMatch && !passwordUpdated"
                    @click="handleResetPassword"
                >
                    Reset password
                </button>
                <button v-else-if="passwordUpdated">
                    <b-spinner small></b-spinner>
                </button>
            </div>
        </div>
        <div v-if="showSupportPopup">
            <supportPopup
                :showSupportPopup="showSupportPopup"
                :email="email"
                v-on:closeSupporPopup="closeSupporPopup"
            />
    </div>
    </div>
</template>

<script>
import ApiRequest from '../../models/api';
import loader from '../manager/loader'
import supportPopup from '../manager/supportPopup'
export default {
    props:[
        'invited'
    ],
    components:{
        loader,
        supportPopup
    },
    data() {
        return{
            email: '',
            emailAvailable: false,
            emailValid: true,
            password:'',
            createAcount: false,
            sPassword: false,
            sConfirmPassword: false,
            showLoginPassword: false,
            fullName:'',
            newPassword:'',
            confirmNewPassword:'',
            forgotPassword: false,
            getOTP: false,
            otpValue:'',
            otpMatch: false,
            message: '',
            showSubmitLoader: false,
            isOtpSent: false,
            passwordUpdated: false,
            updateMessage:'',
            nextButtonLoader: false,
            otpLoader: false,
            submitButtonLoader: false,
            createAccountLoader: false,
            tooltipText: 'Your password must be between 8 and 30 characters, and must contain at least one uppercase, at least one lowercase, at least one number digit and at least one special character.',
            inactiveUser: false,
            showSupportPopup: false
        }
    },
    created(){
        if (this.invited !== "") {
            this.email = this.invited
            this.emailAvailable = false
            this.createAcount = true
        }
    },
    methods:{
        handleEmailChange({target}){
            if(this.email !== target.value) {
                this.createAcount = false
                this.emailAvailable = false
            }
            this.email = target.value
            this.inactiveUser = false
        },
        async checkEmail(){
            const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
            if(isEmailValid.test(this.email)){
                this.nextButtonLoader = true
                const res = await ApiRequest.checkEmailValidity({'email': this.email})
                if (res.status) {
                    if (res.user !== undefined) {
                        this.emailAvailable = true
                        this.createAcount = false
                        this.nextButtonLoader = false
                    } else {
                        this.emailAvailable = false
                        this.createAcount = true
                        this.nextButtonLoader = false
                        this.flash(res.message, 'success', {
                            timeout: 3000,
                        });
                    }
                } else {
                    if (res.suspended !== undefined) {
                        this.inactiveUser = true
                        this.nextButtonLoader = false
                    } else {
                        this.flash(res.message, 'error', {
                            timeout: 3000,
                        });
                        this.nextButtonLoader = false
                    }
                }
            } else {
                this.emailValid = false
                this.flash('Please enter valid email.', 'error', {
                    timeout: 3000,
                });
            }
        },
        async createNewAccount(){
            if(this.newPassword === this.confirmNewPassword) {
                this.createAccountLoader = true
                const data = {
                    'email'     : this.email,
                    'name'      : this.fullName,
                    'password'  : this.newPassword
                }
                const res = await ApiRequest.createUser(data)
                this.createAccountLoader = false
                this.$emit('handleUserLogin', res.user_id)
            } else {
                this.flash('Password does not match!.', 'error', {
                    timeout: 3000,
                });
            }
        },
        async handleLogin(){
            const data = {
                'email'     : this.email,
                'password'  : this.password
            }
            const res = await ApiRequest.loginUser(data)
            if (res.status) {
                this.$emit('handleUserLogin', res.user_id)
            } else {
                this.flash('Invalid credentials.', 'error', {
                    timeout: 3000,
                });
            }
        },
        handleLoginPassword(e){
             if(this.passwordValidate(e.target.value)) {
                this.password = e.target.value
            }else {
                this.password = e.target.value
                const errorMessage = 'Please enter valid password. (Must include atleast 1 uppercase and 1 lowecase, 1 special character and 1 number)'
                this.flash(errorMessage, 'error', {
                    timeout: 3000,
                });
            }
        },
        handlePassword(e) {
            if(this.passwordValidate(e.target.value)) {
                this.newPassword = e.target.value
            }else {
                this.newPassword = e.target.value
                const errorMessage = 'Please enter valid password. (Must include atleast 1 uppercase and 1 lowecase, 1 special character and 1 number)'
                this.flash(errorMessage, 'error', {
                    timeout: 3000,
                });
            }

        },
        handleConfirmPassword(e) {
              if(this.passwordValidate(e.target.value)) {
                this.confirmNewPassword = e.target.value
            }else {
                this.confirmNewPassword = e.target.value
                const errorMessage = 'Please enter valid password. (Must include atleast 1 uppercase and 1 lowecase, 1 special character and 1 number)'
                this.flash(errorMessage, 'error', {
                    timeout: 3000,
                });
            }
        },
        passwordValidate(password) {
            const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,#+_:;(){}=<>^~"'`\[\]\\\/\|.-])[A-Za-z\d@$!%*?&,#+_:;(){}=<>^~"'`\[\]\\\/\|.-]{8,}$/
            return validPassword.test(password)
        },
        handleforgotPassword(){
            this.forgotPassword = true
            this.email = ''
        },
        async handleOTPFunction(){
            this.isOtpSent = true
            this.nextButtonLoader = true
            const res = await ApiRequest.sendOTP({'email':this.email})
            if (res.status) {
                this.getOTP = true
                this.isOtpSent = false
            }
            this.nextButtonLoader = false
            this.message = res.message
            this.flash(res.message, res.status ? 'success': 'error', {
                timeout: 3000,
            });
        },
        async handleSubmitOTP(){
            this.submitButtonLoader = true
            const data = {
                'email': this.email,
                'token': this.otpValue
            }
            const res = await ApiRequest.matchOTP(data)
            if (res.status) {
                setTimeout(()=>{
                    this.otpMatch = true
                    this.createAcount = true
                    this.emailAvailable = false
                    this.submitButtonLoader = false
                }, 1000)
            } else {
                this.flash(res.message, 'error', {
                    timeout: 3000,
                });
                this.submitButtonLoader = false
            }
        },
        async handleResetPassword(){
            this.passwordUpdated = true
            const data = {
                'email': this.email,
                'password': this.newPassword
            }
            if(this.newPassword === this.confirmNewPassword){
                const res = await ApiRequest.updatePassword(data)
                if(res.status) {
                    setTimeout(()=>{
                        this.passwordUpdated = false
                        this.getOTP = false
                        this.emailAvailable = false
                        this.forgotPassword = false
                        this.email = ''
                        this.password = ''
                        this.newPassword = ''
                        this.confirmNewPassword = ''
                        this.createAcount = false
                    }, 2000)
                    this.flash(res.message, 'success', {
                        timeout: 3000,
                    });
                }
            } else {
                this.passwordUpdated = false
                this.flash('Password does not match!.', 'error', {
                    timeout: 3000,
                });
            }
        },
        handleSupport(){
            this.inactiveUser = false
            this.showSupportPopup = true
        },
        closeSupporPopup() {
            this.showSupportPopup = false
        }
    }
}
</script>

<style>

</style>

