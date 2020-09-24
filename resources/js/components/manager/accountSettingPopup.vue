<template>
    <div id="app">
        <v-app id="inspire">
            <v-row justify="center" >
                <v-dialog v-model="dialog"  persistent max-width="740" >
                    <v-card class="box-account-pop-up">
                        <v-card-text no-body class="p-0">
                            <b-tabs pills card vertical>
                                <b-tab
                                    class="box-account-tabs"
                                    active
                                    v-on:click="handleProfileTabs"
                                >

                                    <template v-slot:title  >
                                        <img :src="profileImage" class="mr-2">
                                        <span> Profile </span>
                                    </template>
                                    <b-card-text class="box-account-body">
                                        <div class="d-flex justify-content-between align-items-center my-3">
                                            <span class="box-account-heading">Welcome, {{userData.name}}</span>
                                            <span
                                                style="cursor:pointer"
                                                @click="handleClosePopup"
                                            >
                                                <img src="/images/cross-btn.svg">
                                            </span>
                                        </div>
                                         <div class="box-account-item d-flex flex-column mb-5">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                class="box-popup-input"
                                                placeholder="Enter your full name"
                                                v-model="userName"
                                            >
                                        </div>
                                        <div class="box-account-item d-flex flex-column pt-4 mb-5">
                                            <label v-if="!isEmailChange || !emailOTPSend">Email</label>
                                            <div v-if="!isEmailChange" class=" d-flex">
                                                <p class="box-account-text mb-0">
                                                    {{ newUserEmail ? newUserEmail : userEmail}}
                                                </p>
                                                <button
                                                    class="box-change-text ml-3"
                                                    v-on:click="isEmailChange= true"
                                                    v-if="!newUserEmail"
                                                >
                                                    Change
                                                </button>
                                            </div>
                                            <p v-if="updateEmailMessage" class="mt-2" style="color:#2bb34f;">
                                                OTP Verified! Please click "Save Settings" to update your email.
                                            </p>
                                            <div v-if="!emailOTPSend && isEmailChange" class="box-account-input">
                                                <input
                                                    type="email"
                                                    class="box-popup-input"
                                                    style="width:405px;"
                                                    placeholder="Enter new email"
                                                    v-model="newUserEmail"
                                                    v-on:input="buttonDisable = false"
                                                >
                                                <button
                                                    type="button"
                                                    class="box-change-btn box-btn-save ml-1"
                                                    style="font-size:15px;"
                                                    v-if="!changeButtonLoader"
                                                    @click="checkEmail"
                                                    :disabled="buttonDisable"
                                                >
                                                    Change
                                                </button>
                                                 <button
                                                    class="box-change-btn box-btn-save ml-1"
                                                    v-else
                                                >
                                                    <b-spinner small></b-spinner>
                                                </button>
                                                <p v-if="errorMsg"  class="text-danger font-weight-bold mt-1">
                                                    {{errorMsg}}
                                                </p>
                                                <p
                                                    v-if="!emailValid"
                                                    class="text-danger font-weight-bold mt-1"
                                                >
                                                    Please enter a valid email.
                                                </p>
                                                <!-- <p v-if="updateEmailMessage" class="text-success">
                                                    {{updateEmailMessage}}
                                                </p> -->
                                            </div>
                                            <div v-else-if="emailOTPSend && isEmailChange">
                                                <p v-if="emailMessage"  v-html="emailMessage"></p>
                                                <input
                                                    type="text"
                                                    placeholder="Enter OTP Code"
                                                    class="box-popup-input"
                                                    style="width:405px;"
                                                    v-model="emailOTPValue"
                                                >
                                                <button
                                                    class="box-change-btn box-btn-save ml-1"
                                                    v-if="!showEmailSubmitLoader"
                                                    @click="handleEmailSubmitOTP"
                                                    style="font-size:15px;"
                                                >
                                                    Confirm
                                                </button>
                                                <button class="box-change-btn box-btn-save ml-5" v-else>
                                                    <b-spinner small></b-spinner>
                                                </button>
                                                <p v-if="errorMessage" class="text-danger font-weight-bold mt-1">{{errorMessage}}</p>
                                            </div>
                                        </div>
                                        <div class="box-account-footer mt-5">
                                            <v-spacer></v-spacer>
                                            <v-divider class="m-0"></v-divider>
                                            <v-card-actions class="px-3 py-5">
                                                <button
                                                    class="box-btn-save mr-3"
                                                    @click="handleSaveSetting"
                                                    :disabled="isEmailChange"
                                                >
                                                    Save Settings
                                                </button>
                                                <button
                                                    class="box-btn-cancel"
                                                    @click="$emit('closeAccountSettingPopup')"
                                                >
                                                    Cancel
                                                </button>
                                            </v-card-actions>
                                        </div>
                                     </b-card-text>
                                </b-tab>
                                <b-tab v-on:click="handleSecurityTab">
                                    <template v-slot:title>
                                        <img :src="securityImage" class="mr-2">
                                        <span> Security </span>
                                    </template>
                                    <b-card-text class="box-account-body">
                                       <div class="d-flex justify-content-between align-items-center my-3">
                                            <span class="box-account-heading">Welcome, {{userData.name}}</span>
                                            <span
                                                style="cursor:pointer"
                                                @click="handleClosePopup"
                                            >
                                                <img src="/images/cross-btn.svg">
                                            </span>
                                        </div>
                                        <p v-if="!resetPassword">
                                            <span v-if="passwordChangedAt !== null">
                                                Your password was last changed on {{passwordChangedAt}}.
                                            </span>
                                            To change your password, click the button below.
                                        </p>
                                        <button
                                            v-if="!otpSend && !showLoader && !otpMatch"
                                            class="box-btn-save mr-3 mt-3"
                                            @click="handleResetPassword"
                                        >
                                            Reset Password
                                        </button>
                                         <p v-if="successMessage" style="color:#2bb34f;" class="font-weight-bold mt-3 mb-0" >{{successMessage}}</p>
                                        <div v-if="showLoader" class="text-left">
                                            <button  class="box-btn-save mt-3"><b-spinner small></b-spinner></button>
                                        </div>
                                        <div v-if="otpSend" class="text-left">
                                            <input
                                                type="text"
                                                placeholder="Enter the OTP"
                                                class="box-input-field box-input-background"
                                                style="width: 357px;"
                                                v-model="otpValue"
                                            >
                                            <button class="box-btn-save ml-1" v-if="!showSubmitLoader" @click="handleSubmitOTP">Submit OTP</button>
                                            <button class="box-btn-save ml-1" v-else>
                                                <b-spinner small></b-spinner>
                                            </button>
                                            <p v-if="message" class="font-weight-bold" style="color:#2bb34f;">{{message}}</p>
                                            <p v-if="errorMessage" class="text-danger font-weight-bold">{{errorMessage}}</p>
                                        </div>
                                        <div v-if="otpMatch" class="text-left">
                                            <div class="d-inline-flex align-items-center w-100">
                                                <div class="box-account-item d-flex d-inline align-items-center" style="width:35%;">
                                                    <label
                                                        class="box-prefix-label col-form-label col-form-label-sm"
                                                    >
                                                        New Password
                                                    </label>
                                                    <img src="/images/info.svg" :title="tooltipText" class="ml-2">
                                                </div>
                                                <div class="box-user-profile position-relative">
                                                    <input
                                                        :type="!showPassword ? 'password' : 'text'"
                                                        class="box-input-field box-input-background mr-0"
                                                        placeholder="Enter new password"
                                                        style="width: 380px"
                                                        :value="password"
                                                        @blur="handlePassword"
                                                    >

                                                    <span
                                                        v-if="!showPassword"
                                                        class="position-absolute"
                                                        style="cursor:pointer"
                                                        v-on:click="showPassword = !showPassword"
                                                    >
                                                        <b-icon-eye></b-icon-eye>
                                                    </span>
                                                    <span
                                                        v-else
                                                        class="position-absolute"
                                                        style="cursor:pointer"
                                                        v-on:click="showPassword = !showPassword"
                                                    >
                                                        <b-icon-eye-slash></b-icon-eye-slash>
                                                    </span>
                                                    <p
                                                        v-if="!isPasswordValid"
                                                        class="text-danger font-weight-bold mb-0"
                                                    >
                                                        Invalid Password!
                                                        <small>(Must include atleast 1 uppercase and 1 lowecase, 1 special character and 1 number)</small>
                                                    </p>
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
                                                        class="box-input-field box-input-background mr-0"
                                                        style="width: 380px"
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
                                                    <!-- <p v-if="!isConfirmPasswordValid" class="text-danger  font-weight-bold">Invalid Password!</p> -->
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
                                    </b-card-text>
                                </b-tab>
                                <b-tab v-on:click="handleBoxTab" v-if="userInfo.name !== undefined">
                                    <template v-slot:title>
                                        <img :src="boxImage" class="mr-2">
                                        <span> Box Account </span>
                                    </template>
                                    <b-card-text class="box-account-body">
                                        <div class="d-flex justify-content-between align-items-center my-3">
                                            <span class="box-account-heading">Welcome, {{userData.name}}</span>
                                            <span
                                                 style="cursor:pointer"
                                                @click="handleClosePopup"
                                            >
                                                <img src="/images/cross-btn.svg">
                                            </span>
                                        </div>
                                        <div v-if="!disconnectStatus">
                                            <p>
                                                Connected Box-Account
                                            </p>
                                            <div class="row align-items-center pl-3">
                                                <img src="/images/user.svg" class="mr-2">
                                                <h5 id="box-account" class="box-account-title-name mb-0 mr-3">
                                                    {{userInfo.name}}
                                                </h5>
                                                <p class="box-disconnect mb-0" @click="handleDisconnect">Disconnect?</p>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <p>
                                                You are not connected to a Box Account at this moment, click the button below to continue.
                                            </p>
                                            <button
                                                class="box-connect-btn"
                                                @click="$emit('handleCurrentUserDetails')"
                                            >
                                                Connect Box Account
                                            </button>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                            </b-tabs>
                        </v-card-text>
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

    Vue.use(Vuetify)
    export default Vue.extend({
        props:[
            'showAccountSettingPopup',
            'userData',
            'userInfo'
            ],
        components:{
                folderPopup
            },
        data(){
            return{
                dialog:this.showAccountSettingPopup,
                userName: this.userData.name,
                userEmail: this.userData.email,
                newUserEmail: '',
                buttonDisable: true,
                errorMsg: '',
                emailValid: true,
                otpSend:false,
                message:'',
                showSubmitLoader: false,
                otpValue:'',
                showLoader: false,
                otpMatch: false,
                showPassword: false,
                showConfirmPassword: false,
                isPasswordValid: true,
                isConfirmPasswordValid: false,
                isPasswordMatch: true,
                errorMessage: '',
                password: '',
                confirmPassword: '',
                showResetLoader: false,
                successMessage: '',
                emailOTPSend: false,
                emailMessage:'',
                emailOTPValue:'',
                showEmailSubmitLoader: false,
                updateEmailMessage: '',
                changeButtonLoader: false,
                passwordChangedAt : this.userData.password_changed_at ?  moment(this.userData.password_changed_at).format('MM/DD/YYYY'): null,
                isEmailChange: false,
                tooltipText: 'Your password must be between 8 and 30 characters, and must contain at least one uppercase, at least one lowercase, at least one number digit and at least one special character.',
                disconnectStatus: false,
                resetPassword: false,
                profileImage: '/images/user-circle.svg',
                securityImage: '/images/inactive-security.svg',
                boxImage: '/images/weather-01.svg'
            }
        },
        created(){ },
        methods:{
            async handleEmailChange(){
                this.checkEmail()
                this.changeButtonLoader = true
                const res = await ApiRequest.updateEmail(data)
                this.changeButtonLoader = false
                if(res.status) {
                    this.emailOTPSend = res.status
                    this.emailMessage = res.message
                }
            },
           async checkEmail() {
                const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
                if(isEmailValid.test(this.newUserEmail)){
                    this.emailValid = true
                    if(this.newUserEmail !== this.userEmail) {
                        const data = {
                            'email': this.userData.email,
                            'new_email': this.newUserEmail
                        }
                        const res = await ApiRequest.checkEmail({'email': this.newUserEmail})
                        if (!res.status) {
                            this.changeButtonLoader = true
                            const response = await ApiRequest.updateEmail(data)
                            this.changeButtonLoader = false
                            if(response.status) {
                                this.emailOTPSend = response.status
                                this.emailMessage = response.message
                            }
                        } else {
                            this.errorMsg = res.message

                        }
                    } else {
                        this.errorMsg = ''
                    }
                } else {
                    this.errorMsg = ''
                    this.emailValid = false
                }
            },
            async handleResetPassword(){
                 this.showLoader = true
                const res = await ApiRequest.sendOTP({'email': this.userEmail})
                this.otpSend = res.status
                this.showLoader = false
                this.message = res.message
                this.resetPassword = true
            },
            async handleSubmitOTP(){
                this.showSubmitLoader = true
                const data = {
                    'email': this.userEmail,
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
            handlePassword(e) {
                this.password = e.target.value
                if(this.passwordValidate(e.target.value)) {
                    this.isPasswordValid = true
                }else {
                    this.isPasswordValid = false
                }
            },
             passwordValidate(password) {
                const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,#+_:;(){}=<>^~"'`\[\]\\\/\|.-])[A-Za-z\d@$!%*?&,#+_:;(){}=<>^~"'`\[\]\\\/\|.-]{8,}$/
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
                        this.passwordChangedAt = moment(res.user.password_changed_at).format('MM/DD/YYYY')
                        this.successMessage = 'Password changed successfully!'
                        this.resetPassword = false
                        this.$emit('handleUpdateUserData', res.user)
                    }
                }else {
                    this.isPasswordMatch = false

                }
            },
            async handleEmailSubmitOTP(){
                const data = {
                    'email': this.userData.email,
                    'token': this.emailOTPValue
                }
                this.showEmailSubmitLoader = true
                const res = await ApiRequest.verifyUpdateEmail(data)
                this.showEmailSubmitLoader = false
                if(res.status) {
                    this.emailOTPSend = false
                    this.isEmailChange = false
                    this.buttonDisable = true
                    this.updateEmailMessage = res.message
                } else {
                    this.errorMessage = res.message
                }
            },
            async handleSaveSetting() {
                let data = {}
                if (this.newUserEmail) {
                    data = {
                        'email' : this.newUserEmail,
                        'name'  : this.userName,
                        'id'    : this.userData.id
                    }
                } else {
                    data = {
                        'name'  : this.userName,
                        'id'    : this.userData.id
                    }
                }
                const res = await ApiRequest.updateProfileInfo(data)
                this.$emit('handleUserSettings', res.user)
            },
            async handleDisconnect() {
                const res = await ApiRequest.disconnect()
                if (res.status) {
                    this.disconnectStatus = true
                }
            },
            handleClosePopup() {
                if(this.disconnectStatus) {
                    window.location.reload()
                }
                this.$emit('closeAccountSettingPopup')
            },
            handleBoxTab() {
                this.profileImage = '/images/user.svg'
                 this.securityImage = '/images/inactive-security.svg'
                this.boxImage = '/images/active-box.svg'
            },
            handleSecurityTab() {
                this.profileImage = '/images/user.svg'
                this.securityImage = '/images/Security.svg'
                this.boxImage = '/images/weather-01.svg'
            },
            handleProfileTabs(){
                this.profileImage = '/images/user-circle.svg'
                this.securityImage = '/images/inactive-security.svg'
                this.boxImage = '/images/weather-01.svg'
            }
        }
    })
</script>
<style>

 </style>
