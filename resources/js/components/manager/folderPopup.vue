<template>
     <div id="app">
        <v-app id="inspire">
            <v-row justify="center" >
                <v-dialog v-model="dialog"  persistent max-width="700">
                    <v-card>
                        <v-card-title class="box-popup-title mb-5 d-flex justify-content-between">
                            <span> {{title}} </span>
                            <button type="button" class="close" aria-label="Close" @click="$emit('showFolderPopup')">
                                <span aria-hidden="true" class="text-dark">&times;</span>
                            </button>
                        </v-card-title>
                        <v-card-text>
                            <div class="folder-picker"></div>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-app>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default Vue.extend({
        props:[
                'accessToken',
                'title'
            ],
        data(){
            return{
                dialog:true
            }
        },
        mounted(){
            var folderPicker = new Box.FolderPicker();
            const el = this
            folderPicker.addListener('choose', function(items) {
                el.$emit('handleSelectedFolder', items)
            });
            folderPicker.addListener('cancel', function() {});

            folderPicker.show('0', this.accessToken, {
                container: '.folder-picker',
                maxSelectable: 1,
                canUpload: false,
                canCreateNewFolder: false,
                sortBy: 'date',
                sortDirection: 'DESC',
                size: 'large',
                canSetShareAccess: false
            });
        },
        created(){ },
        methods:{

        }
    })
</script>
<style scoped>
    .folder-picker {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        min-width: 320px;
    }
    .be-logo {
        display: none !important;
    }
    .v-dialog__content {
        align-items: center !important;
    }
    .btn-group>.btn.btn-primary:last-of-type {
        border-right-color: #169bc8 !important;
        background-color: #169bc8 !important;
    }
    .bcp-content {
        flex: 1 0 240px;
    }
</style>
