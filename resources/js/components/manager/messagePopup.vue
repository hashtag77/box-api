<template>
     <div id="app">
        <v-app id="inspire">
            <v-row justify="center" >
                <v-dialog v-model="dialog"  persistent max-width="450">
                    <v-card >
                        <v-card-title class="box-popup-title mb-5">{{title}}</v-card-title>
                        <v-card-text>
                            {{responseMessage}}
                            <div v-if="!responseMessage">
                                <loader />
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                               <div class="text-left" v-if="responseMessage">
                                    <button
                                        class="box-btn-save"
                                        style="width: 70px; height: 37px;"
                                        @click="$emit('cancleMessagePopup')"
                                    >
                                        Okay
                                    </button>
                                </div>
                            </v-card-actions>
                        </v-card-actions>
                        </v-card >
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
    import loader from './loader'

    Vue.use(Vuetify)
    export default Vue.extend({
        props:[
                'title',
                'responseMessage',
                'responsePopup',
            ],
            components:{
                loader
            },
        data(){
            return{
                dialog: this.responsePopup,
            }
        }
    })
</script>
<style >

</style>
