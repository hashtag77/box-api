<template>
    <div id="app">
        <v-app id="inspire">
            <v-row justify="center" >
                <v-dialog v-model="dialog"  persistent max-width="700">
                    <v-card>
                        <v-card-title class="box-popup-title mb-5">Settings</v-card-title>
                        <v-card-text>
                            <div class="d-inline-flex w-100">
                                <label for="session_id" style="width:18%;" class="box-prefix-label col-form-label col-form-label-sm">Session ID</label>
                                <div class="ml-3" style="width:100%;">
                                    <div class="box-session-field ">
                                        <input
                                            type="text"
                                            class="box-prefix mb-3"
                                            style="width: 80%;"
                                            id="session_id"
                                            placeholder="Enter a session ID for the folder preview app…"
                                            :value="sessionIdValue"
                                            @input="handleClearValue"
                                            @blur="handleSessionId"
                                        >
                                        <button v-if="showCheckbtn" class="box-session-btn" @click="getFolderDetails"><img :src="checkedButtonName"></button>
                                        <button v-if="showbtnLoader" class="box-session-btn"><b-spinner small style="color: #169bc8;"></b-spinner></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-inline-flex w-100">
                                <label for="namingPrefix" style="width:18%;" class="box-prefix-label col-form-label col-form-label-sm">Naming Prefix</label>
                                <div class="ml-3" style="width:100%;">
                                    <input
                                        type="text"
                                        class="box-prefix box-session-input mb-3"
                                        style="width: 80%;"
                                        id="namingPrefix"
                                        placeholder="Prefix"
                                        :disabled="!sessionIdValue"
                                        v-model="prefixValue"

                                    >
                                </div>
                            </div>
                            <div class="d-inline-flex" style="width:100%" >
                                <label
                                    class="box-prefix-label col-form-label col-form-label-sm mr-3"
                                    style="width:15%;"
                                >
                                    Private Folder
                                </label>
                                <div
                                    :class="privateFolderName ? 'box-selected-folder' : ''"
                                    style="width: 66.5%;"
                                >
                                    <div v-if="privateFolderName" :title="privateFolderName" class="box-folder-name">
                                        <img src="/images/folder.svg" class="mr-2" width="18px" height="16">
                                        <span class="folder-name">
                                            {{ (privateFolderName.length > 55) ? privateFolderName.substring(0,55)+"..." : privateFolderName}}
                                        </span>
                                    </div>
                                    <div :class="privateFolderName ? 'box-dot-btn': ''">
                                        <button
                                            :class="privateFolderName ? 'box-selected': 'box-select font-weight-bold'"
                                            type="button"
                                            :disabled="!sessionIdValue"
                                            @click="handleFolderPopup('private')"
                                        >
                                            {{privateButtonName}}
                                        </button>
                                    </div>
                                </div>

                                <div v-if="showPrivatePopup">
                                    <folderPopup
                                        :accessToken="accessToken"
                                        :title="'Select Private Folder'"
                                        v-on:handleSelectedFolder="handlePrivateFolder"
                                        v-on:showFolderPopup="showFolderPopup"
                                    />
                                </div>
                            </div>
                            <div class="d-inline-flex" style="width:100%" >
                                <label
                                    class="box-prefix-label col-form-label col-form-label-sm mr-3"
                                    style="width:15%;"
                                >
                                    Shared Folder
                                </label>
                                <div :class="sharedFolderName ? 'box-selected-folder' : ''" style="width: 66.5%;">
                                    <div v-if="sharedFolderName" :title="sharedFolderName" class="box-folder-name">
                                        <img src="/images/folder.svg" class="mr-2" width="18px" height="16">
                                        <span class="folder-name">
                                            {{ (sharedFolderName.length > 55) ? sharedFolderName.substring(0,55)+"..." : sharedFolderName}}
                                        </span>
                                    </div>
                                    <div :class="sharedFolderName ? 'box-dot-btn': ''">
                                        <button
                                            :class="sharedFolderName ? 'box-selected': 'box-select font-weight-bold'"
                                            type="button"
                                            :disabled="!sessionIdValue"
                                            @click="handleFolderPopup('shared')"
                                        >
                                            {{sharedButtonName}}
                                        </button>
                                    </div>
                                </div>
                                <div v-if="showSharePopup">
                                    <folderPopup
                                        :accessToken="accessToken"
                                        :title="'Select Shared Folder'"
                                        v-on:handleSelectedFolder="handleSharedFolder"
                                        v-on:showFolderPopup="showFolderPopup"
                                    />
                                </div>
                            </div>
                            <p
                                class="alert alert-danger"
                                role="alert"
                                style="color:white; background-color: #761b18; width: 434px;
                                    margin: 0 auto;"
                                v-if="isError"
                            >
                                Shared Folder cannot be same as Private Folder.
                            </p>

                            <!-- <v-divider></v-divider> -->
                            <!-- <div class="row align-items-center pl-3">
                                <label
                                    for="box-account"
                                    class="box-account-title col-form-label col-form-label-sm mr-3"
                                    style="width: 15%"
                                >
                                    Box-Account:
                                </label>
                                <img src="/images/user.svg" class="mr-2">
                                <h5 id="box-account" class="box-account-title-name mb-0 mr-3">
                                    {{userInfo.name}}
                                </h5>
                                <p class="box-disconnect mb-0" @click="handleDisconnect">Disconnect?</p>
                            </div> -->
                        </v-card-text>
                        <v-divider class="m-0"></v-divider>
                        <v-card-actions>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <button
                                    class="box-btn-save mr-3"
                                    :disabled="!(privateFolderId && sharedFolderId && prefixValue && (privateFolderId !== sharedFolderId))"
                                    @click="handleSetting"
                                >
                                    Save Settings
                                </button>
                                <button
                                    class="box-btn-cancel"
                                    @click="$emit('handlePopup')"
                                >
                                    Cancel
                                </button>
                            </v-card-actions>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-app>
        <div v-if="showDetailPopup">
            <updatePopup
                :showDetailPopup="showDetailPopup"
                v-on:handleSaveDetails="handleSaveDetails"
                v-on:cancleDetailsPopup="cancleDetailsPopup"
            />
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuetify from 'vuetify'
    import ApiRequest from '../../models/api'
    import 'vuetify/dist/vuetify.min.css'
    import folderPopup from './folderPopup'
    import updatePopup from './updatePopup'

    Vue.use(Vuetify)
    export default Vue.extend({
        props:[
            'showPopup',
            'folders',
            'userInfo',
            'privateValueId',
            'sharedValueId',
            'prefixValues',
            'accessToken',
            'privateName',
            'sharedName',
            'sessionId',
            'sessionDataStatus'
        ],
        components:{
            folderPopup,
            updatePopup
        },
        data(){
            return{
                dialog:this.showPopup,
                privateFolderId :this.privateValueId ? this.privateValueId : '',
                sharedFolderId : this.sharedValueId ? this.sharedValueId : '',
                prefixValue:this.prefixValues ? this.prefixValues : '',
                // resetCheck: false,
                // resetStatus: false,
                privateFolderName: this.privateName ? this.privateName :  '',
                sharedFolderName: this.sharedName ? this.sharedName : '',
                isError: false,
                showPrivatePopup:false,
                showSharePopup:false,
                privateButtonName: this.privateName ? '...' : 'Select Private Folder',
                sharedButtonName: this.sharedName ? '...' : 'Select Shared Folder',
                sessionIdValue: this.sessionId,
                showCheckbtn: false,
                showbtnLoader: false,
                getDetails: false,
                showDetailPopup: false,
                checkedButtonName: '/images/check_btn.svg',
                resetDetails: false,
                sessionResponse: {},
                isSessionIdEnter: false,
                showFileUpdatePopup: false,
                sessionDataFound: this.sessionDataStatus,
                tripleDotbtn: '/images/triple-dot.svg'
            }
        },
        watch:{},
        created(){
            if(this.sessionId) {
                this.showCheckbtn = true
                this.checkedButtonName = '/images/triple-dot.svg'
                this.resetDetails = true
            }
         },
        methods:{
            handleSetting() {
                if(!this.sessionDataFound) {
                  this.handleSaveSettings()
                } else {
                    if(Object.keys(this.sessionResponse).length > 0) {
                        if(this.sessionResponse.session_data.private_folder_id !== this.privateFolderId ||
                            this.sessionResponse.session_data.shared_folder_id !== this.sharedFolderId ||
                                this.sessionResponse.session_data.prefix !== this.prefixValue) {
                                    this.showFileUpdatePopup = true
                                    this.handleUpdatePopup()
                        } else {
                            this.handleSaveSettings()
                        }
                    } else {
                        if(this.prefixValues !== this.prefixValue ||
                            this.privateValueId !== this.privateFolderId ||
                                this.sharedValueId !== this.sharedFolderId) {
                                    this.showFileUpdatePopup = true
                                    this.handleUpdatePopup()
                        } else {
                            this.handleSaveSettings()
                        }
                    }
                }

            },
            handleUpdatePopup(){
                if(this.showFileUpdatePopup) {
                    this.showDetailPopup = true
                }
            },
            handleSaveSettings() {
                this.dialog = false
                const fieldValues = {
                    'privateFolderId': this.privateFolderId,
                    'sharedFolderId' : this.sharedFolderId,
                    'prefixValue'   : this.prefixValue,
                    'privateFolderName' : this.privateFolderName,
                    'sharedFolderName' : this.sharedFolderName,
                    'session_id': this.sessionIdValue,
                    'sessionDataStatus': this.sessionDataFound
                }
                this.$emit('handleSetting', fieldValues)
            },
            onPrivateInput(value, id) {
                this.privateFolderId = value
                this.checkForSameEntries()
            },
            onSharedInput(value, id) {
                this.sharedFolderId = value
                this.checkForSameEntries()
            },
            checkForSameEntries() {
                this.isError = (this.privateFolderId == this.sharedFolderId) ? true : false
            },
            async handleDisconnect() {
                const res = await ApiRequest.disconnect()
                if (res.status) {
                    window.location.reload()
                }
            },
            handleFolderPopup(folder) {
                if(folder === 'private') {
                    this.showPrivatePopup = true
                } else {
                    this.showSharePopup = true
                }
            },
            handlePrivateFolder(items){
                this.showPrivatePopup = false
                this.privateFolderId = items[0].id
                this.privateFolderName = items[0].name
                this.privateButtonName = '...'
                this.checkForSameEntries()
            },
            handleSharedFolder(items){
                this.showSharePopup = false
                this.sharedFolderId = items[0].id
                this.sharedFolderName = items[0].name
                this.sharedButtonName = '...'
                this.checkForSameEntries()
            },
            showFolderPopup(){
                this.showPrivatePopup = false
                this.showSharePopup = false
            },
            async handleSessionId(){
                this.showbtnLoader = true
                const res = await ApiRequest.checkSessionEntry({'session_id': this.sessionIdValue})
                this.showbtnLoader = false
                if(res.status) {
                    this.showCheckbtn = true
                    this.sessionResponse = res
                    this.sessionDataFound = true
                } else {
                    this.sessionDataFound = false
                }
                this.isSessionIdEnter = true
            },
            handleClearValue({target}){
                this.sessionIdValue = target.value
                this.showCheckbtn = false
                this.privateFolderId = ''
                this.sharedFolderId = ''
                this.prefixValue = ''
                this.privateFolderName = ''
                this.sharedFolderName = ''
                this.privateButtonName = 'Select Private Folder'
                this.sharedButtonName = 'Select Shared Folder'
                this.checkedButtonName = '/images/check_btn.svg'
                this.resetDetails = false

            },
            getFolderDetails(){
                if(!this.resetDetails) {
                    this.fillDetails()
                    this.checkedButtonName = '/images/triple-dot.svg'
                    this.resetDetails = true
                } else {
                    this.editDetails()
                    this.checkedButtonName = '/images/check_btn.svg'
                    this.resetDetails = false
                }
            },
            fillDetails() {
                this.prefixValue = Object.keys(this.sessionResponse).length > 0 ? this.sessionResponse.session_data.prefix : this.prefixValues
                this.privateFolderName = Object.keys(this.sessionResponse).length > 0 ? this.sessionResponse.private_folder_name : this.privateName
                this.sharedFolderName = Object.keys(this.sessionResponse).length > 0 ? this.sessionResponse.shared_folder_name : this.sharedName
                this.privateButtonName = '...'
                this.sharedButtonName = '...'
                this.privateFolderId = Object.keys(this.sessionResponse).length > 0 ? this.sessionResponse.session_data.private_folder_id : this.privateValueId
                this.sharedFolderId = Object.keys(this.sessionResponse).length > 0 ? this.sessionResponse.session_data.shared_folder_id : this.sharedValueId
            },
            editDetails(){
                this.prefixValue = ''
                this.privateFolderName = ''
                this.sharedFolderName = ''
                this.privateButtonName = 'Select Private Folder'
                this.sharedButtonName = 'Select Shared Folder'
                this.privateFolderId = ''
                this.sharedFolderId = ''
            },
            cancleDetailsPopup(){
                this.showDetailPopup = false
            },
            handleSaveDetails(){
                this.showDetailPopup = false
                this.handleSaveSettings()
            }
        }
    })
</script>
<style >

</style>
