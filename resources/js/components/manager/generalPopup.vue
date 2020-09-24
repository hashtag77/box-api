<template>
     <div id="app">
        <v-app id="inspire">
            <v-row justify="center" >
                <v-dialog v-model="dialog"  persistent :max-width="purpose === 'Reset password' ? '600' : '450'">
                    <v-card v-if="purpose === 'Reset password'">
                        <v-card-title class="box-popup-title mb-5">{{title}}</v-card-title>
                        <v-card-text>
                            <div class="d-inline-flex align-items-center w-100">
                                <div class="box-account-item d-flex d-inline align-items-center" style="width:30%;">
                                    <label
                                        class="box-prefix-label col-form-label col-form-label-sm"
                                    >
                                        New Password
                                    </label>
                                    <img src="/images/info.svg" :title="tooltipText" class="ml-2">
                                </div>
                                <div class="box-user-profile position-relative w-100">
                                    <input
                                        :type="!showPassword ? 'password' : 'text'"
                                        class="box-input-field box-input-background w-100"
                                        placeholder="Enter new password"
                                        :value="newPassword"
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
                                        <small>(Must include atleast 1 uppercase and 1 lowecase, 1 special character and 1 number) </small>
                                    </p>
                                </div>
                            </div>
                            <div class="d-inline-flex align-items-center w-100">
                                <label
                                    style="width:30%;"
                                    class="box-prefix-label col-form-label col-form-label-sm"
                                >
                                Confirm Password
                                </label>
                                <div class="box-user-profile position-relative w-100">
                                    <input
                                        :type="!showConfirmPassword ? 'password' : 'text'"
                                        class="box-input-field box-input-background w-100"
                                        placeholder="Re-enter your password"
                                        v-model="confirmPassword"
                                    >
                                    <span
                                        v-if="!showConfirmPassword"
                                        class="position-absolute"
                                        style="cursor:pointer"
                                        v-on:click="showConfirmPassword = !showConfirmPassword"
                                    >
                                        <b-icon-eye></b-icon-eye>
                                    </span>
                                    <span
                                        v-else
                                        class="position-absolute"
                                        style="cursor:pointer"
                                        v-on:click="showConfirmPassword = !showConfirmPassword"
                                    >
                                        <b-icon-eye-slash></b-icon-eye-slash>
                                    </span>
                                </div>
                            </div>
                            <p v-if="!isPasswordMatch" class="text-danger font-weight-bold">Password does not match!</p>
                        </v-card-text>
                        <v-card-actions>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                               <div class="text-left">
                                    <button
                                        v-if="!showResetLoader"
                                        class="box-btn-save mr-3"
                                        style="width: 76px; height: 37px;"
                                        :disabled="!isPasswordValid"
                                        @click="handleReset"
                                    >
                                        Reset
                                    </button>
                                    <button v-else class="box-btn-save"><b-spinner small></b-spinner></button>
                                </div>
                                <button
                                    class="box-warning-cancel btn"
                                    @click="$emit('popupCancle')"
                                >
                                    Cancel
                                </button>
                            </v-card-actions>
                        </v-card-actions>
                    </v-card>
                     <v-card v-else>
                        <v-card-title class="box-popup-title mb-5">{{title}}</v-card-title>
                        <v-card-text>{{popupText}}</v-card-text>
                        <v-card-actions>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <button
                                    class="mr-3"
                                    :class="purpose === 'Activate user'? 'box-btn-save' : 'box-warning-okay btn btn-yes'"
                                    :style="purpose === 'Activate user'? 'width: 70px; height: 37px;' : ''"
                                    @click="$emit('popupConfirm', purpose, itemData)"
                                >
                                    Okay
                                </button>
                                <button
                                    class="box-warning-cancel btn btn-secondary"
                                    @click="$emit('popupCancle')"
                                >
                                    Cancel
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
    import 'vuetify/dist/vuetify.min.css'
    import ApiRequest from '../../models/api'

    Vue.use(Vuetify)
    export default Vue.extend({
        props:[
                'title',
                'popupText',
                'showPopup',
                'purpose',
                'itemData'
            ],
        data(){
            return{
                dialog: this.showPopup,
                newPassword: '',
                confirmPassword: '',
                showPassword: false,
                showConfirmPassword: false,
                isPasswordValid: true,
                isPasswordMatch: true,
                showResetLoader: false,
                tooltipText: 'Your password must be between 8 and 30 characters, and must contain at least one uppercase, at least one lowercase, at least one number digit and at least one special character.'
            }
        },
        methods: {
             handlePassword(e) {
                this.newPassword = e.target.value
                if(this.passwordValidate(this.newPassword)) {
                    this.isPasswordValid = true
                }else {
                    this.isPasswordValid = false
                }
            },
            passwordValidate(password) {
                const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,#+_:;(){}=<>^~"'`\[\]\\\/\|.-])[A-Za-z\d@$!%*?&,#+_:;(){}=<>^~"'`\[\]\\\/\|.-]{8,}$/
                return validPassword.test(password)
            },
            async handleReset() {
             if(this.newPassword === this.confirmPassword) {
                    const data = {
                        'user_id': this.itemData.user_id,
                        'password': this.newPassword
                    }
                    this.showResetLoader = true
                    const res = await ApiRequest.resetUserPassword(data)
                    this.showResetLoader = false
                    if(res.status) {
                        this.$emit('popupConfirm', this.purpose, res)
                    }
                } else {
                    this.isPasswordMatch = false
                }
            },
        }
    })
</script>
<style >

</style>
