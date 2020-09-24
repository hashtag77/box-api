<template>
    <div class="">
        <div v-if="initialLoader" class="box-initial-loader">
            <div class="loader-align">
                <loader :loaderMessage="'Checking for Authentication...'"/>
            </div>
        </div>
        <div class="box-flash-fix">
            <flash-message class="box-flash-text myCustomClass"></flash-message>
            <div
                class="box-flash-text myCustomClass"
                v-if="updating || undoExhibitStatus"
            >
                <div class="flash__wrapper">
                    <div role="alert" aria-live="polite" aria-atomic="true" class="success flash__message">
                        <div class="flash__message-content text-center">
                            <div class="box-update-loader">
                                <span
                                    v-if="updating"
                                >
                                    Updating files...
                                </span>
                                <span
                                    v-else-if="undoExhibitStatus"
                                >
                                    Exhibit is being reverted...
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!userLogin">
            <login
                :invited="invited"
                v-on:createBoxUser="createBoxUser"
                v-on:handleUserLogin="handleUserLogin"
            />
        </div>
        <div v-else-if="userLogin && currentUser.user == ''">
            <div v-if="boxPopupResponse !== ''">
                <div v-html="boxPopupResponse"></div>
            </div>
            <div v-else >
                <div v-if="accountLoader" class="d-flex align-items-center justify-content-center" style="height:100vh;" >
                    <loader :loaderMessage="'Checking for Access...'"/>
                </div>
                <div v-else-if="currentUser.user.name === undefined" >
                    <div class="box-cloud-header" style="height:60px;">
                        <div class="box-header-logo" style="padding-left: 1px;">
                            <img
                                src="/images/logo.svg"
                            >
                        </div>
                        <div class="" align="right">
                            <div class="box-border right-section" style="border:none !important;" align="right">
                                <button class="btn box-icon-btn" disabled>
                                    <img src="/images/setting-icon.svg">
                                </button>

                                <div>
                                    <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none p-0" no-caret>
                                        <template v-slot:button-content>
                                            <button class="btn box-icon-btn">
                                                <img src="/images/user-circle.svg">
                                            </button>
                                        </template>
                                        <b-dropdown-item v-on:click="showAccountSettingPopup = !showAccountSettingPopup">
                                            <img src="/images/user-circle.svg" class="mr-2">
                                            <span>Account Settings</span>
                                        </b-dropdown-item>
                                        <b-dropdown-item
                                            v-on:click="showAdminConsolePopup = !showAdminConsolePopup"
                                            v-if="userPrivilege != 'Basic'"
                                        >
                                            <img src="/images/Group.svg" class="mr-2">
                                            <span>Admin Console</span>
                                        </b-dropdown-item>
                                        <b-dropdown-item v-on:click="handleLogout">
                                            <a class="text-decoration-none">
                                                <img src="/images/Logout.svg" class="mr-2">
                                                <span>Logout</span>
                                            </a>
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>
                        </div>
                        <div v-if="showAccountSettingPopup">
                            <accountSettingPopup
                                :userInfo="currentUser.user"
                                :userData="userData"
                                :showAccountSettingPopup="showAccountSettingPopup"
                                v-on:closeAccountSettingPopup="closeAccountSettingPopup"
                                v-on:grantAccess="grantAccess"
                                v-on:handleCurrentUserDetails="handleCurrentUserDetails"
                                v-on:handleUserSettings="handleUserSettings"
                                v-on:handleUpdateUserData="handleUpdateUserData"
                            />
                        </div>
                        <div v-if="showAdminConsolePopup">
                            <adminConsolePopup
                                :showAdminConsolePopup="showAdminConsolePopup"
                                :userArray="userArray"
                                :privileges="privileges"
                                :organization="organization"
                                :owners="owners"
                                :userData="userData"
                                :userPrivilege="userPrivilege"
                                v-on:closeAdminConsolePopup="closeAdminConsolePopup"
                                v-on:handleAdminConsoleOrganization="handleAdminConsoleOrganization"
                                v-on:updateInvitedUser="updateInvitedUser"
                                v-on:updateOwnersData="updateOwnersData"
                            />
                        </div>
                    </div>
                    <frontView v-on:grantAccess="grantAccess" />
                </div>
            </div>
        </div>
        <div
            class="container-fluid main-wrapper"
            v-else-if="userLogin && currentUser.user && currentUser.user.name !== undefined"
        >
            <div class="row">
                <div class="col-md-6 box-left  pt-0 pl-0 pr-1" >
                    <div class="border-0 box-border bg-white" style="height:60px;">
                        <div class="pl-1">
                            <img
                                src="/images/logo.svg"
                                style="position: relative;left: 0px;top: 9px;"
                            >
                        </div>
                    </div>
                    <div class="bg-white" >
                        <fileList
                            :privateFolderName="privateFolderName"
                            :sharedFolderName="sharedFolderName"
                            :privateData="privateFolderFile"
                            :sharedData="sharedFolderFile"
                            :folderId="privateFolderId"
                            :privateId="privateFolderId"
                            :sharedId="sharedFolderId"
                            :loading="loading"
                            :undoExhibit="undoExhibit"
                            :undoFileId="undoFileId"
                            :exhibitVal="exhibitVal"
                            :selectedFileId="selectedFileId"
                            :initialFetch="initialFetch"
                            :showPreview="showPreview"
                            :prefixValue="prefixValue"
                            :exhibitNum="exhibitNumber"
                            v-on:handleUndoPopup="handleUndoPopup"
                            v-on:handleRefresh="handleRefresh"
                            v-on:handleFiles="handleFiles"
                            v-on:sharedFilePreview="sharedFilePreview"
                            v-on:handleError="handleError"
                            v-on:sessionExpired="sessionExpired"
                            v-on:handleExhibit="handleExhibit"
                        />
                    </div>
                </div>
                <div class="col-md-6 box-right bg-white pl-0 pr-0 py-0" style="height:100vh">
                    <div class="box-border right-section" align="right"  style="height:60px;">
                        <button class="btn box-icon-btn" @click="handlePopup">
                           <img src="/images/setting-icon.svg">
                        </button>

                        <div>
                            <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none p-0" no-caret>
                                 <template v-slot:button-content>
                                    <button class="btn box-icon-btn">
                                        <img src="/images/user-circle.svg">
                                    </button>
                                </template>
                                <b-dropdown-item v-on:click="showAccountSettingPopup = !showAccountSettingPopup">
                                    <img src="/images/user-circle.svg" class="mr-2">
                                    <span>Account Settings</span>
                                </b-dropdown-item>
                                <b-dropdown-item
                                    v-on:click="showAdminConsolePopup = !showAdminConsolePopup"
                                    v-if="userPrivilege != 'Basic'"
                                >
                                    <img src="/images/Group.svg" class="mr-2">
                                    <span>Admin Console</span>
                                </b-dropdown-item>
                                <b-dropdown-item >
                                    <a v-on:click="handleLogout" class="text-decoration-none">
                                        <img src="/images/Logout.svg" class="mr-2">
                                        <span>Logout</span>
                                    </a>
                                </b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                    <div class="col-sm-12 pt-0 px-0">
                        <fileExhibit
                            :privateFolder="privateFolderName"
                            :sharedFolder="sharedFolderName"
                            :exhibitNumber="exhibitNumber"
                            :selectedFile="selectedFile"
                            :sharedFolderId="sharedFolderId"
                            :privateFolderId="privateFolderId"
                            :duplicateRecord="duplicateRecord"
                            :exhibitLoad="exhibitLoad"
                            :folderType="folderType"
                            v-on:handleFilePreview="handleFilePreview"
                            v-on:handleExhibitNumber="handleExhibitNumber"

                        />

                        <div v-if="accessToken && fileId">
                            <filePreview
                                :accessToken="accessToken"
                                :fileId="fileId"
                                :duplicateRecord="duplicateRecord"
                                :folderType="folderType"
                            />
                        </div>
                    </div>
                    <div v-if="showPopup">
                        <settingPopup
                            :showPopup="showPopup"
                            :accessToken="accessToken"
                            :userInfo="currentUser.user"
                            :privateValueId="privateFolderId"
                            :sharedValueId="sharedFolderId"
                            :privateName="privateFolderName"
                            :sharedName="sharedFolderName"
                            :prefixValues="prefixValue"
                            :sessionId="sessionId"
                            :sessionDataStatus="sessionDataStatus"
                            v-on:handlePopup="handlePopup"
                            v-on:handleSetting="handleSetting"
                            v-on:handleFolderPopup="handleFolderPopup"
                        />
                    </div>
                    <div v-if="showAccountSettingPopup">
                        <accountSettingPopup
                            :userInfo="currentUser.user"
                            :userData="userData"
                            :showAccountSettingPopup="showAccountSettingPopup"
                            v-on:closeAccountSettingPopup="closeAccountSettingPopup"
                            v-on:grantAccess="grantAccess"
                            v-on:handleCurrentUserDetails="handleCurrentUserDetails"
                            v-on:handleUserSettings="handleUserSettings"
                            v-on:handleUpdateUserData="handleUpdateUserData"
                        />
                    </div>
                    <div v-if="showAdminConsolePopup">
                        <adminConsolePopup
                            :showAdminConsolePopup="showAdminConsolePopup"
                            :userArray="userArray"
                            :privileges="privileges"
                            :organization="organization"
                            :owners="owners"
                            :userData="userData"
                            :userPrivilege="userPrivilege"
                            v-on:closeAdminConsolePopup="closeAdminConsolePopup"
                            v-on:handleAdminConsoleOrganization="handleAdminConsoleOrganization"
                            v-on:updateInvitedUser="updateInvitedUser"
                            v-on:updateOwnersData="updateOwnersData"
                        />
                    </div>
                    <div v-if="undoPopup">
                        <undoPopup
                            :undoPopup="undoPopup"
                            :undoData="undoData"
                            v-on:handleUndoExhibit="handleUndoExhibit"
                            v-on:handleUndoPopup="handleUndoPopup"
                        />
                    </div>
                    <div v-if="showUserProfilePopUp">
                        <userProfile
                            :userData="userData"
                            :showUserProfilePopUp="showUserProfilePopUp"
                            v-on:closePopup="closeUserProfilePopup"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import fileList from '../components/manager/fileList'
    import fileExhibit from '../components/manager/fileExhibit'
    import filePreview from '../components/manager/filePreview'
    import settingPopup from '../components/manager/settingPopup'
    import ApiRequest from '../models/api'
    import loader from '../components/manager/loader'
    import frontView from '../components/manager/frontView'
    import folderPopup from '../components/manager/folderPopup'
    import undoPopup from '../components/manager/undoPopup'
    import login from '../components/auth/login'
    import userProfile from '../components/manager/userProfile'
    import accountSettingPopup from '../components/manager/accountSettingPopup'
    import adminConsolePopup from '../components/manager/adminConsolePopup'
    export default {
        components:{
            fileList,
            fileExhibit,
            filePreview,
            settingPopup,
            loader,
            frontView,
            folderPopup,
            undoPopup,
            login,
            userProfile,
            accountSettingPopup,
            adminConsolePopup
        },
        data(){
            return{
                showPopup:false,
                folders:{},
                privateFolderFile:[],
                sharedFolderFile:[],
                currentUser:{},
                privateFolderName:'',
                sharedFolderName: '',
                prefixValue:'',
                selectedFile:{},
                boxPopupResponse:'',
                sharedFolderId:'',
                privateFolderId:'',
                accessToken:'',
                fileId:'',
                loading: false,
                showPreview: true,
                flashMessage: {},
                accountLoader:false,
                folderLoader: false,
                preview: false,
                showFolderPopup: false,
                duplicateRecord: false,
                exhibitLoad:false,
                updating: false,
                undoExhibit: false,
                undoFileId: '',
                undoExhibitStatus: false,
                undoPopup: false,
                undoData: '',
                exhibitVal: '',
                selectedFileId: '',
                constPreview : false,
                userLogin: true,
                userLoginId: '',
                userData:{},
                showUserProfilePopUp: false,
                initialLoader: false,
                initialFetch: false,
                showAccountSettingPopup: false,
                showAdminConsolePopup:false,
                userPrivilege: '',
                userArray: [],
                privileges: {},
                organization: {},
                owners: [],
                invited: '',
                folderType:'private',
                sessionId: '',
                sessionDataStatus: false,
                exhibitNumber: '001'
            }
        },
        async created(){
            this.initialLoader = true
            const res = await ApiRequest.checkLogin()
            if (res.status) {
                if (res.invited_email !== undefined) {
                    this.invited = res.invited_email
                    this.userLogin = false
                    this.initialLoader = false
                } else {
                    this.userLogin = true
                    this.userLoginId = res.user.id
                    this.userData = res.user
                    this.userPrivilege = res.privilege.name
                    this.userArray = res.users
                    this.privileges = res.privileges
                    this.organization = res.organization
                    this.owners = res.owners
                    this.createBoxUser()
                }
            } else {
                this.userLogin = false
                this.initialLoader = false
            }
        },
        methods:{
            handleUserLogin(userId) {
                this.userLogin = true
                this.userLoginId = userId
                window.location.reload()
            },
            async createBoxUser() {
                // this.accountLoader = true
                this.currentUser = await ApiRequest.getCurrentUser({'user_id' : this.userLoginId})
                 this.initialLoader = false
                if (this.currentUser.accessToken === '') {
                    this.accountLoader = false
                } else {
                    this.accountLoader = false
                    this.accessToken = this.currentUser.accessToken
                    if(this.currentUser.user.name !== undefined) {
                            this.flash('Access granted!', 'success', {
                            timeout: 3000,
                        });
                    }
                }
            },
            async updateAccessToken() {
                const res = await ApiRequest.updateAccessToken(this.userData.id);
                this.accessToken = res.accessToken
            },
            handlePopup(){
                this.updateAccessToken()
                this.showPopup = !this.showPopup
            },
            handleUndoPopup(item) {
                this.undoData = item
                this.undoPopup = (this.undoPopup) ? false : true
            },
            handleSetting(fieldValues){
                this.privateFolderFile = []
                this.sharedFolderFile = []
                this.selectedFile = {}
                this.fileId = ''
                this.duplicateRecord = false
                this.loading = true
                this.handlePopup()
                this.flash('Settings updated!', 'success', {
                    timeout: 3000,
                });
                this.flashMessage = {
                    'message' : 'Files fetched!',
                    'type' : 'success'
                }
                this.privateFolderName =  fieldValues.privateFolderName
                this.sharedFolderName =  fieldValues.sharedFolderName
                // Request for folders files
                this.handleFolderRequset(
                    fieldValues.privateFolderId,
                    fieldValues.sharedFolderId,
                    fieldValues.prefixValue,
                    fieldValues.session_id,
                    fieldValues.sessionDataStatus,
                    fieldValues.privateFolderName,
                    fieldValues.sharedFolderName
                )
            },
            async handleFiles(item, type) {
                this.exhibitLoad = true
                this.folderType = type
                if(this.fileId !== item.id) {
                    this.fileId = ''
                    this.updateAccessToken()
                }
                const response = await ApiRequest.checkRecords(item.id, this.sharedFolderId);
                if (response.length === 0) {
                    this.selectedFile = item
                    if(!this.fileId || this.fileId !== item.id) {
                        this.fileId = item.id
                    }
                    this.duplicateRecord = false
                    this.undoExhibit = false
                } else {
                    this.selectedFile = response
                    this.selectedFile.exhibit_number = item['exhibit_number']
                     this.fileId = response.id
                     if(this.fileId !== response.id) {
                        this.fileId = response.id
                    }
                    this.undoFileId = item.id
                    this.duplicateRecord = true
                    this.undoExhibit = true
                }
                this.exhibitLoad = false
            },
            async grantAccess() {
                this.accountLoader = true
                this.boxPopupResponse = await ApiRequest.grantAccess()
                if(this.boxPopupResponse) {
                    this.accountLoader = false
                }
            },
            handlePreview() {
                this.showPreview = (this.showPreview) ? false : true
            },
            handleFilePreview(executionType) {
                this.preview = false
                this.sharedFolderFile = []
                this.loading = true
                this.handleFolderRequset(this.privateFolderId, this.sharedFolderId, this.prefixValue, null )
            },
            async handleFolderRequset (
                privateFolderId,
                sharedFolderId,
                prefixValue,
                sessionId,
                sessionDataStatus,
                privateFolderName,
                sharedFolderName ) {
                const response = await ApiRequest.getFolderFiles (
                    privateFolderId,
                    sharedFolderId,
                    sessionId,
                    prefixValue,
                    privateFolderName,
                    sharedFolderName
                )
                this.loading = false
                this.updating = false
                this.undoExhibitStatus = false
                this.initialFetch= true
                if(response.accessToken) {
                    this.privateFolderFile = response.privateData
                    this.sharedFolderFile = response.sharedData
                    this.privateFolderName = response.privateFolderName
                    this.sharedFolderName = response.sharedFolderName
                    // this.exhibitNumber = this.sharedFolderFile.length + 1

                    if(Object.keys(this.flashMessage).length > 0 && this.privateFolderFile.length > 0){
                        this.flash(this.flashMessage.message, this.flashMessage.type, {
                            timeout: 3000,
                        });
                    }
                } else {
                    this.sessionExpired()
                }
                this.prefixValue = prefixValue
                this.sessionId = sessionId
                this.sessionDataStatus = sessionDataStatus
                this.privateFolderId = privateFolderId
                this.sharedFolderId = sharedFolderId
                const currentItem = document.querySelectorAll(".current-active")
                currentItem.forEach(value =>{
                    value.classList.remove("current-active");
                })
            },
            handleError() {
                this.flash('Item with the same name already exists in the Shared Folder!', 'error', {
                    timeout: 3000,
                });
            },
            sessionExpired() {
                this.flash('Session expired! Redirecting...', 'error', {
                    timeout: 3000,
                });
                window.setTimeout(function() {
                    location.reload()
                    }, 3000
                )
            },
            handleFolderPopup() {
                this.showFolderPopup = true
            },
            async handleUndoExhibit(item) {
                this.undoPopup = false
                this.undoExhibitStatus = true
                const res = await ApiRequest.undoExhibit(item)
                this.duplicateRecord = false
                this.undoExhibitStatus = false
                let data = []
                let indexVal
                this.privateFolderFile.forEach((val, index) => {
                    if (val.id === item.item_id) {
                        delete val['exhibit_number']
                        data = val
                        indexVal = index
                    }
                })
                this.$set(this.privateFolderFile, indexVal, data)
                let newIndex = this.sharedFolderFile.findIndex((val) => val.id == res.file_id)
                this.$delete(this.sharedFolderFile, newIndex)
                if(this.sharedFolderFile.length > 0) {
                    this.selectedFileId = this.sharedFolderFile[0].id
                }
                const currentItem = document.querySelectorAll(".current-active")
                currentItem.forEach(value =>{
                    value.classList.remove("current-active");
                })
                this.flash('Exhibit has been successfully reverted!', 'success', {
                    timeout: 3000,
                });
            },
            handleExhibit(exhibitVal, selectedFileId, record, exhibitNum) {
                let data = []
                let indexVal
                let localItem
                this.selectedFileId = record.id
                this.exhibitNumber = exhibitNum
                this.privateFolderFile.forEach((item, index) => {
                    if (item.id === selectedFileId) {
                        item['exhibit_number'] = exhibitVal
                        data = item
                        indexVal = index
                        localItem = item
                    }
                })
                this.$set(this.privateFolderFile, indexVal, data)
                this.$set(this.sharedFolderFile, this.sharedFolderFile.length, record)
                this.handleFiles(localItem, 'private')
                this.undoExhibit = true
                this.undoFileId = selectedFileId
                this.flash('Exhibit Introduction Successful!', 'success', {
                    timeout: 3000,
                });
            },
            async handleRefresh(folderId, type) {
                if(type === 'private') {
                    this.privateFolderFile = []
                } else {
                    this.sharedFolderFile = []
                }
                this.selectedFile = {}
                this.fileId = ''
                this.loading = true
                this.updating = true
                const res = await ApiRequest.refreshRecords(folderId, type, this.sharedFolderId)
                if (res.status && res.files.length > 0) {
                    if(type === 'private') {
                        this.privateFolderFile = res.files
                        // this.selectedFileId = res.files[0].id
                    } else {
                        this.sharedFolderFile = res.files
                        this.selectedFileId = res.files[0].id
                    }
                } else if (!res.status) {
                    this.sessionExpired()
                }
                this.updating = false
                this.loading = false
            },
            handleUserProfile(){
               this.showUserProfilePopUp = true
            },
            closeUserProfilePopup(){
                this.showUserProfilePopUp = false
            },
            closeAdminConsolePopup() {
                this.showAdminConsolePopup = false
            },
            closeAccountSettingPopup() {
                this.showAccountSettingPopup = false
            },
            handleUserSettings(userData) {
                this.handleUpdateUserData(userData)
                this.showAccountSettingPopup = false
            },
            handleUpdateUserData(userData) {
                this.userData = userData
            },
            handleCurrentUserDetails() {
                this.grantAccess()
                this.createBoxUser()
            },
            handleLogout(){
                window.open('/logout', '_self')
            },
            handleAdminConsoleOrganization(data) {
                this.organization = data
                this.closeAdminConsolePopup()
            },
            updateInvitedUser(data) {
                this.userArray = data
                // this.closeAdminConsolePopup()
            },
            updateOwnersData(data) {
                this.owners = data
            },
            sharedFilePreview(item, type){
                this.selectedFile = item
                this.folderType = type
                this.fileId = item.id
                this.selectedFileId = item.id
                this.duplicateRecord = true
            },
            handleExhibitNumber(num) {
                this.exhibitNumber = num
            }
        }
    }
</script>
<style>

    /* .v-application--wrap {
        display: none;
    } */
</style>
