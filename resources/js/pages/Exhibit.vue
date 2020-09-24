<template>
     <div class="">
        <div v-if="initialLoader" class="box-initial-loader">
            <div class="loader-align">
                <loader :loaderMessage="'Checking for Authentication...'"/>
            </div>
        </div>
        <div class="box-flash-fix">
            <flash-message class="box-flash-text myCustomClass"></flash-message>
        </div>
        <div v-if="!isUserLogin && !initialLoader">
            <sessionIdLogin
                :loginLoader="loginLoader"
                :isMobile="isMobile"
                v-on:handleUserLogin="handleUserLogin"
                v-on:handleDirectLogin="handleDirectLogin"
            />
        </div>
        <div
            class="container-fluid main-wrapper"
            :class="fullView ? 'p-0' : '' "
            v-else-if="isUserLogin && !initialLoader"
        >
            <div class="row" v-if="!fullView">
                <div class="col-md-6 box-left  pt-0 pl-0 pr-1" >
                    <div class="border-0 box-border bg-white" style="height:60px; padding: 9px 4px;">
                        <div class="">
                            <img
                                src="/images/logo.svg"
                                style="position: relative; left:0px;"
                            >
                        </div>
                    </div>
                    <div class="bg-white" >
                        <sharedFileList
                            :fullView="fullView"
                            :sharedFiles="sharedFiles"
                            :fileLoader="fileLoader"
                            :selectedFile="selectedFile"
                            :halfView="halfView"
                            :splitView="splitView"
                            :tabView="tabView"
                            :updatedIndex="updatedIndex"
                            v-on:handleFilePreview="handleFilePreview"
                            v-on:getFolderData="getFolderData"
                        />
                    </div>
                </div>
                <div class="col-md-6 box-right bg-white pl-0 pr-0 py-0" style="height:100vh">
                    <div class="box-border button right-section"  style="height: 60px;justify-content: space-between;padding: 10px 0px;">
                        <div  align="left" class="pl-3" >
                            <span style="color: #6e7b7f;" v-if="selectedFileName">Selected: </span>
                            <span :title="selectedFileName" class="box-private-text ml-1" style="top:0px;">
                                {{ ((selectedFileName).length > 45 ?
                                        (selectedFileName).substring(0,45)+"..." :
                                            (selectedFileName))}}
                            </span>
                        </div>
                        <div align="right" class="d-flex align-items-center">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex justify-content-center" :class="splitView ? 'box-icon-btn d-flex' : 'box-exhibit-view-icon'" style="cursor:pointer;">
                                    <img
                                        :src="splitViewImage"
                                        @click="handleSplitView"
                                    >
                                </div>
                                <div class="d-flex justify-content-center"  :class="halfView ? 'box-icon-btn' : 'box-exhibit-view-icon'" style="cursor:pointer;">
                                    <img
                                        :src="haflViewImage"
                                        @click="handleHalfView"
                                    >
                                </div>
                                <div class="d-flex justify-content-center"  :class="fullView ? 'box-icon-btn' : 'box-exhibit-view-icon'" style="cursor:pointer;">
                                    <img
                                        :src="fullViewImage"
                                        @click="handleFullView"
                                    >
                                </div>
                            </div>
                            <img src="/images/verticle.svg" class="mx-2" >
                            <span class="box-switch mr-2 mb-0">
                                <label class="switch">
                                    <input
                                        type="checkbox"
                                        v-model="followChecked"
                                        @change="handleFollow"
                                    >
                                    <span class="slider round"></span>
                                </label>
                            </span>
                            <span class="box-private-text" style="color: #6e7b7f !important;">Follow</span>
                            <img src="/images/verticle.svg" class="mx-2" >
                            <span class="exhibit-setting-icon">
                                <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none p-0" no-caret>
                                    <template v-slot:button-content>
                                        <button class="btn box-icon-btn">
                                            <img src="/images/setting-icon.svg" class="exhibit-settings">
                                        </button>
                                    </template>
                                    <b-dropdown-item v-on:click="handleExit">
                                        <a  class="text-decoration-none">
                                            <img src="/images/Logout.svg" class="mr-2">
                                            <span>Exit</span>
                                        </a>
                                    </b-dropdown-item>
                                </b-dropdown>
                            </span>
                        </div>
                    </div>
                    <div class="col-sm-12 pt-0 px-0">
                        <div v-if="accessToken && fileId ">
                            <shareFilePreview
                                :accessToken="accessToken"
                                :fileId="fileId"
                                :halfView="halfView"
                                :tabView="tabView"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div
                    v-if="halfView"
                    class="col-md-12 p-0"
                >
                <div :style="tabView ?
                    sharedFiles.length > 0 ? 'height:45vh;':'height:100vh;':
                     sharedFiles.length > 0 ? 'height:40vh;':'height:100vh;'">
                      <div class="border-0 box-border bg-white" style="height:60px;margin-bottom:1px;">
                        <div class="box-logo" style="padding-left: 4px;">
                            <img src="/images/logo.svg">
                        </div>
                        <div class="right-section" align="right">
                            <div class="d-flex justify-content-between">
                                <div
                                    class="d-flex"
                                    :class="splitView ? 'box-icon-btn' : 'box-exhibit-view-icon'"
                                    style="cursor:pointer;"
                                    v-if="!tabView"
                                >
                                    <img
                                        :src="splitViewImage"
                                        class="mx-2"
                                        @click="handleSplitView"
                                    >
                                </div>
                                <div class="d-flex"  :class="halfView ? 'box-icon-btn' : 'box-exhibit-view-icon'" style="cursor:pointer;">
                                    <img :src="haflViewImage" class="mx-2" @click="handleHalfView">
                                </div>
                                <div class="d-flex"  :class="fullView && showFullPreview ? 'box-icon-btn' : 'box-exhibit-view-icon'" style="cursor:pointer;">
                                    <img :src="fullViewImage" class="mx-2" @click="handleFullView">
                                </div>
                            </div>
                            <img src="/images/verticle.svg" class="mx-2" >
                            <span class="box-switch mr-2 mb-0">
                                <label class="switch">
                                    <input
                                        type="checkbox"
                                        v-model="followChecked"
                                        @change="handleFollow"
                                    >
                                    <span class="slider round"></span>
                                </label>
                            </span>
                            <span class="box-private-text" style="color: #6e7b7f;">Follow</span>
                            <img src="/images/verticle.svg" class="mx-2" >
                            <span class="exhibit-setting-icon">
                                <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none p-0" no-caret>
                                    <template v-slot:button-content>
                                        <button class="btn box-icon-btn">
                                            <img src="/images/setting-icon.svg" class="exhibit-settings">
                                        </button>
                                    </template>
                                    <b-dropdown-item v-on:click="handleExit">
                                        <a  class="text-decoration-none">
                                            <img src="/images/Logout.svg" class="mr-2">
                                            <span>Exit</span>
                                        </a>
                                    </b-dropdown-item>
                                </b-dropdown>
                            </span>
                        </div>
                    </div>
                    <div class="bg-white ">
                        <sharedFileList
                            :fullView="fullView"
                            :sharedFiles="sharedFiles"
                            :fileLoader="fileLoader"
                            :selectedFile="selectedFile"
                            :halfView="halfView"
                            :splitView="splitView"
                            :tabView="tabView"
                            :updatedIndex="updatedIndex"
                            v-on:handleFilePreview="handleFilePreview"
                            v-on:getFolderData="getFolderData"
                        />
                    </div>
                </div>

                <div v-if="accessToken && fileId " :style="tabView ? 'height:55vh;' : 'height:60vh;'">
                    <shareFilePreview
                        :accessToken="accessToken"
                        :fileId="fileId"
                        :halfView="halfView"
                        :tabView="tabView"
                    />
                </div>
                </div>
                <div v-else>
                   <div
                    v-if="!showFullPreview"
                    class="col-md-12 p-0"
                    style="height:100vh;"
                >
                    <div class="border-0 box-border bg-white" style="height:60px;margin-bottom:1px">
                        <div class="box-logo">
                            <img
                                src="/images/logo.svg"
                                :class="isMobile ? 'exhibit-logo-position-login' : ''"
                                :style="!isMobile ? 'position: relative;left: 4px;' : ''"
                            >
                        </div>
                        <div class="right-section" style="padding:9px 0px;" align="right">
                            <div class="d-flex justify-content-between" v-if="!isMobile">
                                <div
                                    class="d-flex"
                                    :class="splitView ? 'box-icon-btn' : 'box-exhibit-view-icon'"
                                    style="cursor:pointer;"
                                    v-if="!tabView"
                                >
                                    <img
                                        :src="splitViewImage"
                                        class="mx-2"
                                        @click="handleSplitView"
                                    >
                                </div>
                                <div class="d-flex"  :class="halfView ? 'box-icon-btn' : 'box-exhibit-view-icon'" style="cursor:pointer;">
                                    <img :src="haflViewImage" class="mx-2" @click="handleHalfView">
                                </div>
                                <div class="d-flex"  :class="fullView ? 'box-icon-btn' : 'box-exhibit-view-icon'" style="cursor:pointer;">
                                    <img :src="fullViewImage" class="mx-2" @click="handleFullView">
                                </div>
                                <img src="/images/verticle.svg" class="mx-2" >
                            </div>
                            <span class="box-switch mr-2 mb-0">
                                <label class="switch">
                                    <input
                                        type="checkbox"
                                        v-model="followChecked"
                                        @change="handleFollow"
                                    >
                                    <span class="slider round"></span>
                                </label>
                            </span>
                            <span class="box-private-text" style="color: #6e7b7f;">Follow</span>
                            <img src="/images/verticle.svg" class="mx-2" >
                            <span class="exhibit-setting-icon">
                                <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none p-0" no-caret>
                                    <template v-slot:button-content>
                                        <button class="btn box-icon-btn">
                                            <img src="/images/setting-icon.svg" class="exhibit-settings">
                                        </button>
                                    </template>
                                    <b-dropdown-item v-on:click="handleExit">
                                        <a  class="text-decoration-none">
                                            <img src="/images/Logout.svg" class="mr-2">
                                            <span>Exit</span>
                                        </a>
                                    </b-dropdown-item>
                                </b-dropdown>
                            </span>
                        </div>
                    </div>
                    <div class="bg-white mobile-full-page-list" >
                        <sharedFileList
                            :fullView="fullView"
                            :sharedFiles="sharedFiles"
                            :fileLoader="fileLoader"
                            :selectedFile="selectedFile"
                            :halfView="halfView"
                            :isMobile="isMobile"
                            :splitView="splitView"
                            :tabView="tabView"
                            :updatedIndex="updatedIndex"
                            v-on:handleFilePreview="handleFilePreview"
                            v-on:getFolderData="getFolderData"
                        />
                    </div>
                </div>
                <div
                    v-else
                    class="col-md-12 p-0"
                    style="height:100vh;"
                >
                     <div
                        class="exhibit-preview-header border-0 bg-white"
                        :style="isMobile ? 'padding-left: 5px': ''"
                    >
                        <div class="">
                            <img
                                src="/images/logo.svg"
                                :style="isMobile ? 'position: relative; top:1px;': 'position: relative;top: -3px;left: -2px;'"
                            >
                        </div>
                        <p class="mb-0 mt-1 web-tablet-mode" v-if="!isMobile" :title="selectedFileName"> Preview: {{selectedFileName.length > 50 ? selectedFileName.substring(0,50)+"..." : selectedFileName }}</p>
                        <p v-else class="mb-0 mt-1" :title="selectedFileName">Preview: {{selectedFileName.length > 20 ? selectedFileName.substring(0,20)+"..." : selectedFileName }}</p>
                        <div class="">
                            <img src="/images/cross-btn.svg" style="height: 35px; width: 35px; cursor: pointer;" v-on:click="showFullPreview = false">
                        </div>
                    </div>
                   <div v-if="accessToken && fileId ">
                        <shareFilePreview
                            :accessToken="accessToken"
                            :fileId="fileId"
                            :halfView="halfView"
                            :tabView="tabView"
                        />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sessionIdLogin from '../components/auth/sessionIdLogin'
import sharedFileList from '../components/exhibit/sharedFileList'
import shareFilePreview from '../components/exhibit/sharedFilePreview'
import loader from '../components/manager/loader'
import ExhibitApi from '../models/exhibit';
import ApiRequest from '../models/api'
export default {
    components:{
        sessionIdLogin,
        sharedFileList,
        shareFilePreview,
        loader
    },
    data() {
        return {
            isUserLogin: false,
            fullView: false,
            halfView:false,
            fullViewImage: '/images/inactive-full-view.svg',
            haflViewImage: '/images/inactive-half-view.svg',
            splitViewImage: '/images/active-split-view.svg',
            sharedFiles: [],
            fileLoader:false,
            accessToken: '',
            userId : '',
            fileId: '',
            showPreview: true,
            initialLoader: false,
            loginLoader: false,
            sharedFolderId: '',
            selectedFileName: '',
            followChecked: true,
            timer:'',
            filesCopy: [],
            recentFiles:{},
            splitView: true,
            selectedFile: {},
            recentFileCheck: false,
            showFullPreview: false,
            requestStatus: false,
            filePrefix: '',
            sessionID: '',
            updatedIndex: '',
            isMobile: false,
            tabView: false
        }
    },
    async created(){
        this.initialLoader = true
        const res = await ExhibitApi.checkSessionLogin()
        this.isUserLogin = res.status
        this.initialLoader = false
        if(res.status) {
            this.sessionID = res.session_data.session_id
            this.filePrefix = res.session_data.prefix
            this.userId = res.session_data.user_id
            this.sharedFolderId = res.session_data.shared_folder_id
            this.updateAccessToken()
            this.getFolderData()
        }
        if(screen.width <= 767) {
            this.splitView = false
            this.halfView = false
            this.fullView = true
            this.isMobile = true
        }
        if(768 <= screen.width && screen.width <= 1360) {
            this.splitView = false
            this.fullView = true
            this.halfView = true
            this.tabView = true
        }
    },
    methods:{
        async handleUserLogin(userData) {
            this.loginLoader = true
            const res = await ExhibitApi.sessionLogin(userData)
            this.loginLoader = false
            if(res.status) {
                this.isUserLogin = true
                this.sessionID = res.session_data.session_id
                this.filePrefix = res.session_data.prefix
                this.userId = res.session_data.user_id
                this.sharedFolderId = res.session_data.shared_folder_id
                this.updateAccessToken()
                this.getFolderData()
                this.flash('Access granted!', 'success', {
                    timeout: 3000,
                });
            } else {
                this.flash(res.message, 'error', {
                    timeout: 3000,
                });
            }
        },
        handleDirectLogin(sessionData){
            this.isUserLogin = true
            this.userId = sessionData.user_id
            this.sharedFolderId = sessionData.shared_folder_id
            this.filePrefix = sessionData.prefix
            this.sessionID = sessionData.session_id
            this.updateAccessToken()
            this.getFolderData()
            this.flash('Access granted!', 'success', {
                timeout: 3000,
            });
        },
        async getFolderData() {
            this.fileLoader = true
            this.sharedFiles = []
            this.fileId = ''
            this.selectedFileName =''
            const res = await ExhibitApi.getSessionData({'shared_folder_id': this.sharedFolderId, 'session_id': this.sessionID})
            this.sharedFiles = res.files
            this.selectedFile = res.files[0]
            this.fileLoader = false
            if(res.files.length > 0) {
                this.recentFileCheck = true
            }
            this.handleFollow()
            this.getRecentFile()
        },
        async updateAccessToken() {
            const res = await ExhibitApi.updateAccessToken(this.userId);
            this.accessToken = res.accessToken
        },
        handleFilePreview(item) {
            this.updateAccessToken()
            this.fileId  = item.id
            this.selectedFileName = item.name
            this.selectedFile = item
            if(this.fullView && !this.halfView) {
                this.showFullPreview = true
            }
        },
        handlePreview() {
            this.showPreview = (this.showPreview) ? false : true
        },
        handleFullView() {
            this.fullView = true
            this.splitView = false
            this.halfView = false
            this.splitViewImage = '/images/inactive-split-view.svg'
            this.fullViewImage ='/images/active-full-view.svg'
            this.haflViewImage = '/images/inactive-half-view.svg'
        },
        handleSplitView() {
            this.splitView = true
            this.fullView = false
            this.halfView = false
            this.splitViewImage = '/images/active-split-view.svg'
            this.fullViewImage ='/images/inactive-full-view.svg'
            this.haflViewImage = '/images/inactive-half-view.svg'
        },
        handleHalfView() {
            this.fullView = true
            this.halfView = true
            this.splitView = false
            this.splitViewImage = '/images/inactive-split-view.svg'
            this.fullViewImage ='/images/inactive-full-view.svg'
            this.haflViewImage = '/images/active-half-view.svg'
        },
        handleExit() {
            window.open('/session-logout', '_self')
        },
        handleFollow() {
            this.timer = setInterval(async () => {
                // DO this for multifiles
                if(!this.requestStatus) {
                    let response
                    this.requestStatus = true
                    if (this.recentFiles) {
                        const res = await ExhibitApi.follow(
                            {
                                'file_id': this.recentFiles.id,
                                'shared_folder_id':this.sharedFolderId,
                                'prefix' : this.filePrefix
                            })
                        if(res.status) {
                            response = res.files[0]
                            this.sharedFiles.push(res.files[0])
                            this.recentFiles = res.files[0]
                            if(this.recentFileCheck) {
                                const fileName = this.recentFiles.exhibit_name + ' ' + this.recentFiles.exhibit_num
                                this.flash(`New exhibit introduced: ${fileName}`, 'success', {
                                    timeout: 3000,
                                });
                            }
                        } else {
                            if(res.undos) {
                                if(this.sharedFiles.length > 0) {
                                    let index = this.sharedFiles.findIndex(item => item.id === res.undos[0])
                                    if(index >=0 ) {
                                        this.$delete(this.sharedFiles, index)
                                        if(this.selectedFile.id === res.undos[0]) {
                                            this.selectedFile = this.sharedFiles[0]
                                        } else {
                                            this.updatedIndex = this.sharedFiles.findIndex(item => item.id === this.selectedFile.id)
                                        }
                                        if (this.fileId === res.undos[0]) {
                                            this.fileId = ''
                                            this.selectedFile = {}
                                            this.selectedFileName =''
                                            if (this.showFullPreview) {
                                                this.showFullPreview = false
                                            }
                                        }
                                        this.getRecentFile()
                                        this.flash(res.message, 'error', {
                                            timeout: 3000,
                                        });
                                    }
                                } else {
                                    this.fileId = ''
                                    this.showFullPreview = false
                                    this.selectedFile = {}
                                    this.selectedFileName =''
                                }
                            }
                        }
                    } else {
                        this.updateAccessToken()
                        const res = await ExhibitApi.getSessionData({'shared_folder_id': this.sharedFolderId, 'session_id': this.sessionID})
                        this.sharedFiles = res.files
                        response = res.files[0]
                        this.getRecentFile()
                        if(res.files.length > 0) {
                            // this.flash(`New file introduced: ${this.recentFiles.name}`, 'success', {
                            //     timeout: 4000,
                            // });
                            this.recentFileCheck = true
                        }
                    }
                    this.requestStatus = false
                    if(this.followChecked && response) {
                        this.selectedFile = response
                        response = ''
                    }
                }
            }, 5000);
        },
        getRecentFile() {
            this.filesCopy =[...this.sharedFiles]
            const sortedFiles = this.filesCopy.sort((a, b) => (a.modified_at > b.modified_at) ? -1 : 1);
            this.recentFiles = sortedFiles[0]
        }
    },
    beforeDestroy () {
        clearInterval(this.timer)
    },
}
</script>

<style>

</style>
