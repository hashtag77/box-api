<template>
     <div id="app">
        <v-app id="inspire">
            <v-row justify="center" >
                <v-dialog v-model="dialog"  persistent max-width="450">
                    <v-card>
                        <v-card-title class="box-popup-title mb-5">Confirm save</v-card-title>
                        <v-card-text>This Session ID already exists. Do you want to update the settings?</v-card-text>
                        <v-card-actions>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <button
                                    class="box-warning-okay btn btn-yes mr-3"
                                    @click="$emit('handleSaveDetails')"
                                >
                                    Yes
                                </button>
                                <button
                                    class="box-warning-cancel btn btn-secondary"
                                    @click="$emit('cancleDetailsPopup')"
                                >
                                    No
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

    Vue.use(Vuetify)
    export default Vue.extend({
        props:[
                'showDetailPopup',
            ],
        data(){
            return{
                dialog: this.showDetailPopup,
            }
        }
    })
</script>
<style scoped>

</style>
