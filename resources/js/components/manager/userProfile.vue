<template>
     <div id="app">
        <v-app id="inspire">
            <v-row justify="center" >
                <v-dialog v-model="dialog"  persistent max-width="550">
                    <v-card>
                        <v-card-title class="box-popup-title mb-5">Profile</v-card-title>
                        <v-card-text>
                            <div class="d-inline-flex align-items-center w-100">
                                <label
                                    class="box-prefix-label-icon col-form-label col-form-label-sm"
                                >
                                   <b-icon-person-fill></b-icon-person-fill>
                                </label>
                                <div class="box-text ml-3" >
                                    {{userData.name}}
                                </div>
                            </div>
                            <div class="d-inline-flex align-items-center w-100">
                                <label
                                    class="box-prefix-label-icon col-form-label col-form-label-sm"
                                >
                                   <b-icon-envelope-fill></b-icon-envelope-fill>
                                </label>
                                <div class="box-text ml-3">
                                    {{userData.email}}
                                    <span v-if="userData.email_verified_at !== null" class="text-success font-weight-bold ml-3">
                                        <b-icon-check2 class="text-success font-weight-bold"></b-icon-check2> Verifiled
                                    </span>
                                    <span v-else class="ml-3">
                                        <b-icon-x class="text-danger font-weight-bold"></b-icon-x> <span class="text-danger font-weight-bold">Not Verifiled</span>
                                        <button v-if="!verifyLoader" class=" box-btn-save box-btn-verify ml-3" @click="handleVerifyEmail">Verify</button>
                                        <button v-else class=" box-btn-save box-btn-verify ml-3"><b-spinner  small></b-spinner></button>
                                    </span>
                                </div>
                            </div>
                             <p v-if="verifyMessage" class="text-success font-weight-bold">{{verifyMessage}}</p>
                            <div v-if="otpSend" class="text-left">
                                <input
                                    type="text"
                                    placeholder="Enter the OTP"
                                    class="box-input-field border border-secondary"
                                    v-model="otpValue"
                                >
                                <button class="box-btn-save ml-5" v-if="!showSubmitLoader" @click="handleSubmitOTP">Submit OTP</button>
                                <button class="box-btn-save ml-5" v-else>
                                    <b-spinner small></b-spinner>
                                </button>
                                <p v-if="message" class="text-success font-weight-bold">{{message}}</p>
                                <p v-if="errorMessage" class="text-danger font-weight-bold">{{errorMessage}}</p>
                            </div>
                            <div v-if="otpMatch" class="text-left">
                                <div class="d-inline-flex align-items-center w-100">
                                    <div class="d-flex d-inline align-items-center" style="width:35%;">
                                        <label
                                            class="box-prefix-label col-form-label col-form-label-sm"
                                        >
                                            New Password:
                                        </label>
                                        <span type="button" class="box-tooltip" data-toggle="tooltip" data-placement="top" :title="tooltipText">
                                        i
                                        </span>
                                    </div>
                                    <!-- <label
                                        style="width:35%;"
                                        class="box-prefix-label col-form-label col-form-label-sm"
                                    >
                                        New Password
                                    </label> -->
                                    <div class="box-user-profile position-relative">
                                        <input
                                            :type="!showPassword ? 'password' : 'text'"
                                            class="box-input-field border border-secondary"
                                            placeholder="Enter new password"
                                            :value="password"
                                            @blur="handlePassword"
                                        >

                                         <span
                                            v-if="!showPassword"
                                            class="position-absolute"
                                            v-on:click="showPassword = !showPassword"
                                        >
                                            <b-icon-eye></b-icon-eye>
                                        </span>
                                        <span
                                            v-else
                                            class="position-absolute"
                                            v-on:click="showPassword = !showPassword"
                                        >
                                            <b-icon-eye-slash></b-icon-eye-slash>
                                        </span>
                                        <p v-if="!isPasswordValid" class="text-danger  font-weight-bold">Invalid Password!</p>
                                    </div>
                                </div>
                                <div class="d-inline-flex align-items-center w-100">
                                    <label
                                        style="width:35%;"
                                        class="box-prefix-label col-form-label col-form-label-sm"
                                    >
                                       Confirm Password
                                    </label>
                                    <div class="box-user-profile position-relative">
                                        <input
                                            :type="!showConfirmPassword ? 'password' : 'text'"
                                            class="box-input-field border border-secondary"
                                            placeholder="Re-enter your password"
                                            v-model="confirmPassword"
                                        >
                                        <span
                                            v-if="!showConfirmPassword"
                                            class="position-absolute"
                                            v-on:click="showConfirmPassword = !showConfirmPassword"
                                        >
                                            <b-icon-eye></b-icon-eye>
                                        </span>
                                        <span
                                            v-else
                                            class="position-absolute"
                                            v-on:click="showConfirmPassword = !showConfirmPassword"
                                        >
                                            <b-icon-eye-slash></b-icon-eye-slash>
                                        </span>
                                        <p v-if="!isConfirmPasswordValid" class="text-danger  font-weight-bold">Invalid Password!</p>
                                    </div>
                                </div>

                                <p v-if="!isPasswordMatch" class="text-danger font-weight-bold">Password does not match!</p>
                                <div class="text-left">
                                    <button
                                        v-if="!showResetLoader"
                                        class="box-btn-save mt-2"
                                        @click="handleReset"
                                    >
                                        Reset
                                    </button>
                                    <button v-else class="box-btn-save"><b-spinner small></b-spinner></button>
                                </div>
                            </div>
                            <div v-if="!showLoader" class="text-left">
                                <button
                                    v-if="!otpSend && !otpMatch"
                                    class="box-btn-save mr-3 mt-3"
                                    @click="handleResetPassword"
                                >
                                    Reset Password
                                </button>
                            </div>
                            <p v-if="successMessage" class="text-success font-weight-bold mt-3 mb-0">{{successMessage}}</p>
                            <div v-if="showLoader" class="text-left mt-3">
                                <button  class="box-btn-save"><b-spinner small></b-spinner></button>
                            </div>
                        </v-card-text>
                        <v-divider class="m-0"></v-divider>
                        <v-card-actions>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <a
                                    href="/logout"
                                    class="box-btn-save box-btn-anchor mr-3 ml-2"
                                >
                                    Logout
                                </a>
                                <button
                                    class="box-btn-cancel"
                                    @click="$emit('closePopup')"
                                >
                                    Close
                                </button>
                            </v-card-actions>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-app>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuetify from 'vuetify'
    import ApiRequest from '../../models/api'
    import 'vuetify/dist/vuetify.min.css'
    import folderPopup from './folderPopup'
    import loader from './loader'

    Vue.use(Vuetify)
    export default Vue.extend({
        props:[
            'userData',
            'showUserProfilePopUp'
        ],
        components:{loader},
        data(){
            return{
                dialog: this.showUserProfilePopUp,
                otpSend: false,
                otpValue: '',
                otpMatch:false,
                password:'',
                confirmPassword:'',
                showPassword: false,
                showConfirmPassword: false,
                message: '',
                errorMessage:'',
                isPasswordMatch: true,
                isPasswordValid: true,
                isConfirmPasswordValid: true,
                showLoader: false,
                showSubmitLoader: false,
                verifyMessage: '',
                verifyLoader: false,
                showResetLoader: false,
                successMessage:'',
                tooltipText: 'Your password must be between 8 and 30 characters, and must contain at least one uppercase, at least one lowercase, at least one number digit and at least one special character.'
            }
        },
        methods:{
            async handleResetPassword(){
                this.showLoader = true
                const res = await ApiRequest.sendOTP({'email': this.userData.email})
                this.otpSend = res.status
                this.showLoader = false
                this.message = res.message
            },
            handlePassword(e) {
                if(this.passwordValidate(e.target.value)) {
                    this.password = e.target.value
                    this.isPasswordValid = true
                }else {
                    this.password = e.target.value
                    this.isPasswordValid = false
                }
            },
            async handleSubmitOTP(){
                this.showSubmitLoader = true
                const data = {
                    'email': this.userData.email,
                    'token': this.otpValue
                }
                const res = await ApiRequest.matchOTP(data)
                if(res.status) {
                    setTimeout(()=>{
                        this.showSubmitLoader = false
                        this.otpSend = false
                        this.otpMatch = true
                    }, 1000)
                } else {
                    this.errorMessage = res.message
                    this.message = ''
                    this.showSubmitLoader = false
                }
            },
            handleConfirmPassword(e) {
                if(this.passwordValidate(e.target.value)) {
                    this.confirmPassword = e.target.value
                     this.isConfirmPasswordValid = true
                }else {
                    this.confirmPassword = e.target.value
                    this.isConfirmPasswordValid = false
                }
            },
            passwordValidate(password) {
                const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                return validPassword.test(password)
            },
            async handleReset(){
                if(this.password === this.confirmPassword) {
                    const data = {
                        'email': this.userData.email,
                        'password': this.password
                    }
                    this.showResetLoader = true
                    const res = await ApiRequest.updatePassword(data)
                    if(res.status) {
                        this.showResetLoader = false
                        this.otpSend = false
                        this.otpMatch = false
                        this.successMessage = 'Password changed successfully!'
                    }
                }else {
                    this.isPasswordMatch = false

                }
            },
            async handleVerifyEmail(){
                this.verifyLoader = true
                const res = await ApiRequest.verifyEmail({'email': this.userData.email})
                if(res.status) {
                    this.verifyLoader = false
                    this.verifyMessage = res.message
                }
            }
        }
    })
</script>
<style>

</style>
