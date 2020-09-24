<template>
     <div id="app" class="box-support-popup">
        <v-app id="inspire">
            <v-row justify="center" >
                <v-dialog v-model="dialog"  persistent max-width="500">
                    <v-card v-if="!responseMessage">
                        <v-card-title class="box-popup-title mb-5">Contact Support</v-card-title>
                        <v-card-text>
                            <div class="d-inline-flex align-items-center w-100">
                                <label
                                    class="box-prefix-label col-form-label col-form-label-sm"
                                    style="width:18%;"
                                >
                                    Email
                                 </label>
                                <!-- <div class="box-account-item d-flex d-inline align-items-center">

                                </div> -->

                                <div class="box-user-profile position-relative  w-100">
                                    <input
                                        :type="'email'"
                                        class="box-input-field box-input-background  w-100"
                                        :value="email"
                                        disabled
                                    >
                                </div>
                            </div>
                            <div class="d-inline-flex align-items-center w-100">
                                <label
                                    style="width:18%;"
                                    class="box-prefix-label col-form-label col-form-label-sm"
                                >
                                Message
                                </label>
                                <div class="box-user-profile position-relative  w-100">
                                    <textarea
                                        type="text"
                                        class="box-input-field box-input-background  w-100"
                                        placeholder="Enter message"
                                        v-model="message"
                                    >
                                    </textarea>
                                </div>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                               <div class="text-left">
                                    <button
                                        v-if="!sendSupportEmailLoader"
                                        class="box-btn-save"
                                        style="width: 76px; height: 37px;"
                                        @click="handleSupportEmail"
                                    >
                                        Submit
                                    </button>
                                    <button v-else class="box-btn-save"><b-spinner small></b-spinner></button>
                                </div>
                                <button
                                    class="box-warning-cancel btn"
                                    @click="$emit('closeSupporPopup')"
                                >
                                    Cancel
                                </button>
                            </v-card-actions>
                        </v-card-actions>
                    </v-card>
                    <v-card class="pt-4" v-else>
                        <v-card-title class="box-popup-title mb-5">Contact Support</v-card-title>
                        <v-card-text>
                            {{responseMessage}}
                        </v-card-text>
                        <v-card-actions>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <button
                                    class="box-btn-save"
                                    @click="$emit('closeSupporPopup')"
                                >
                                    Okay
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
                'showSupportPopup',
                'email'
            ],
        data(){
            return{
                dialog: this.showSupportPopup,
                message:'',
                sendSupportEmailLoader: false,
                responseMessage:''
            }
        },
        methods: {
            async handleSupportEmail() {
                const data = {
                    'email' : this.email,
                    'message' : this.message
                }
                this.sendSupportEmailLoader = true
                const res = await ApiRequest.contactSupportForSuspendedAccount(data)
                if(res.status) {
                    this.responseMessage = res.message
                    this.sendSupportEmailLoader = false
                }
            }
        }
    })
</script>
<style >
    .box-support-popup #inspire .v-application--wrap {
        display: none;
    }
</style>
