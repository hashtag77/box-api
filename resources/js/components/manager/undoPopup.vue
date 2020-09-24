<template>
     <div id="app">
        <v-app id="inspire">
            <v-row justify="center" >
                <v-dialog v-model="dialog"  persistent max-width="450">
                    <v-card>
                        <v-card-title class="box-popup-title mb-5">Undo Exhibit Introduction</v-card-title>
                        <v-card-text>Are you sure you want to undo exhibit introduction for this document?</v-card-text>
                        <v-card-actions>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <button
                                    class="box-warning-okay btn btn-yes mr-3"
                                    @click="$emit('handleUndoExhibit', undoData)"
                                >
                                    Okay
                                </button>
                                <button
                                    class="box-warning-cancel btn btn-secondary"
                                    @click="$emit('handleUndoPopup', undoData)"
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

    Vue.use(Vuetify)
    export default Vue.extend({
        props:[
                'undoPopup',
                'undoData'
            ],
        data(){
            return{
                dialog: this.undoPopup,
            }
        }
    })
</script>
<style >

</style>
