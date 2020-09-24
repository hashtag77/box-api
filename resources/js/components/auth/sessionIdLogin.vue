<template>
    <div style="background: #ffffff;">
        <div
            class="box-cloud-header"
            :style="isMobile ? 'padding-left: 3px;' :''"
            style="height: 60px;"
        >
            <div class="box-header-logo ">
                <img
                    src="/images/logo.svg"
                >
            </div>
        </div>
        <div class="box-flash-fix">
            <flash-message class="box-flash-text myCustomClass"></flash-message>
        </div>

        <div class="box-login-form">

            <div class="box-login-card">
                <div class="text-center mb-5">
                    <img src="/images/vi_logo.svg">
                </div>

                <div class="box-flex d-flex flex-column mb-4">

                    <label>Session ID</label>
                    <input
                        type="text"
                        placeholder="Enter your session id"
                        class="border border-secondary"
                        v-model="sessionid"
                    >
                    <button
                        type="button"
                        v-if="!showPasswordField && !nextButtonLoader"
                        class="box-btn-save"
                        @click="checkSessionId"
                    >
                        Next
                    </button>
                    <button   class="box-btn-save" v-if="nextButtonLoader">
                        <b-spinner small></b-spinner>
                    </button>
                </div>

                <div
                    class="box-flex d-flex flex-column mb-4"
                    v-if="showPasswordField"
                >
                    <div class="d-flex d-inline">
                        <label>Password</label>
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
                        v-if="!loginLoader"
                        @click="handleLogin"
                    >
                        Login
                    </button>
                    <button v-else class="box-btn-save">
                        <b-spinner small></b-spinner>
                    </button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import ExhibitApi from '../../models/exhibit';
import loader from '../manager/loader'
// import supportPopup from '../manager/supportPopup'
export default {
    props:[
        'loginLoader',
        'isMobile'
    ],
    components:{
        loader
    },
    data() {
        return{
            sessionid: '',
            sessionIdValidation: true,
            sessionIdErrorMsg:'',
            showPasswordField: false,
            showLoginPassword: false,
            nextButtonLoader: false,
            password: '',
            sessionData:{},
            isPasswordNeed: true
        }
    },
    created(){
        // if (this.invited !== "") {
        //     this.email = this.invited
        //     this.emailAvailable = false
        //     this.createAcount = true
        // }
    },
    methods:{
       async checkSessionId() {
            if(this.sessionid) {
                this.nextButtonLoader = true
                const res = await ExhibitApi.checkSessionId({'session_id': this.sessionid})
                this.nextButtonLoader = false
                if(res.status) {
                    if(res.password_enabled) {
                        this.showPasswordField = true
                    } else {
                        this.$emit('handleDirectLogin', res.session_data)
                    }
                } else {
                    this.flash(res.message, 'error', {
                        timeout: 3000,
                    });
                }
            } else {
                this.flash('Please enter a valid Session ID.', 'error', {
                        timeout: 3000,
                    });
            }
        },
        handleLogin() {
            const data = {
                'session_id' : this.sessionid,
                'password' : this.password
            }
            if(this.password) {
                this.$emit('handleUserLogin', data)
            } else {
                this.flash('Please enter a Password.', 'error', {
                    timeout: 3000,
                })
            }
        }
    }
}
</script>

<style>

</style>

