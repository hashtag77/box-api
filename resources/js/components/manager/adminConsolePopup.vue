<template>
    <div id="app" class="box-admin-console">
        <v-app id="inspire">
            <v-row justify="center" >
                <v-dialog v-model="dialog"  persistent max-width="940" style="overflow: hidden">
                    <v-card class="box-account-pop-up">
                        <v-card-text no-body class="p-0">
                            <b-tabs pills card vertical>
                                <b-tab
                                    title="Organization"
                                    ref="tab_highlight_1"
                                    active
                                    v-on:click="handletabs"
                                >
                                    <template v-slot:title>
                                        <span class="d-flex align-items-center" >
                                            <img :src="oragizationImage" class="mr-1">
                                            <span>Organization </span>
                                        </span>
                                    </template>
                                    <b-card-text class="box-account-body">
                                         <div class="d-flex justify-content-between align-items-center my-3">
                                            <span class="box-account-heading">{{organization.name}}: Profile</span>
                                            <span
                                                style="cursor:pointer"
                                                @click="$emit('closeAdminConsolePopup')"
                                            >
                                                <img src="/images/cross-btn.svg">
                                            </span>
                                        </div>
                                         <div class="box-account-item d-flex flex-column mb-5">
                                            <label>Organization Name</label>
                                            <input
                                                type="text"
                                                class="box-popup-input"
                                                style="width:100%"
                                                placeholder="Enter your full name"
                                                v-model="organizationName"
                                            >
                                        </div>
                                        <p v-if="isOrganizationEmpty" class="text-danger font-weight-bold">Organization name should not be empty.</p>
                                         <div class="box-account-item d-flex flex-column pt-4 mb-5">
                                            <label>Account Owners</label>
                                            <div class="box-owner-scroll">
                                                <div class=" d-flex mb-1" v-for="(owner, index) in adminOwners" :key="index">
                                                    <p class="box-account-text mb-0">{{`${owner['name']} (${owner['email']})`}}</p>
                                                    <button
                                                        class="box-change-text ml-3"
                                                        @click="handlechangeUser"
                                                        v-if="userPrivilege !== 'Admin'"
                                                    >
                                                        Change
                                                    </button>
                                                </div>
                                            </div>
                                         </div>
                                         <div class="box-account-footer mt-5">
                                            <v-spacer></v-spacer>
                                            <v-divider class="m-0"></v-divider>
                                            <v-card-actions class="px-3 py-5">
                                                <button
                                                    class="box-btn-save mr-3"
                                                    @click="handleAdminSetting"
                                                >
                                                    Save Settings
                                                </button>
                                                <button
                                                    class="box-btn-cancel"
                                                    @click="$emit('closeAdminConsolePopup')"
                                                >
                                                    Cancel
                                                </button>
                                            </v-card-actions>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab
                                    title="Users"
                                    ref="tab_highlight_2"
                                    v-on:click="handleUserTab"
                                >
                                    <template v-slot:title>
                                        <span class="d-flex align-items-center" >
                                            <img :src="usertabImage" class="mr-2">
                                            <span> Users </span>
                                        </span>
                                    </template>
                                    <b-card-text class="box-account-body">
                                        <div class="d-flex justify-content-between align-items-center my-3">
                                            <span class="box-account-heading">{{organization.name}}: Users</span>
                                            <span
                                                style="cursor:pointer"
                                                @click="$emit('closeAdminConsolePopup')"
                                            >
                                                <img src="/images/cross-btn.svg">
                                            </span>
                                        </div>
                                        <div class="box-account-item">
                                            <label>Add new User</label>
                                            <div class="box-account-input">
                                                <input
                                                    type="email"
                                                    class="box-popup-input"
                                                    style="width:600px;"
                                                    placeholder="Enter the email address of the user you want to invite"
                                                    :value="inviteEmail"
                                                    @input="handleEmailChange"
                                                >
                                                <button
                                                    type="button"
                                                    v-if="!inviteUserLoader"
                                                    class="box-change-btn box-btn-save"
                                                    style="width:100px; font-size:15px;"
                                                    @click="handleInviteUser"
                                                >
                                                    Invite User
                                                </button>
                                                <button
                                                    type="button"
                                                    v-else
                                                    class="box-change-btn box-btn-save"
                                                    style="width:100px; font-size:15px;"
                                                >
                                                    <b-spinner small></b-spinner>
                                                </button>
                                            </div>
                                            <p v-if="!emailValid" class="text-danger font-weight-bold mt-1"> Please enter valid email </p>
                                            <div v-if="inviteUserMessage">
                                                <p
                                                    class="mt-1 font-weight-bold"
                                                    :class="!inviteUserStatus ? 'text-danger': ''"
                                                    :style="inviteUserStatus ? 'color:#2bb34f;': ''"
                                                >
                                                    {{inviteUserMessage}}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 px-0 py-0 mt-4">
                                            <div>
                                                <table class="table-borderless custom-table table">
                                                    <thead>
                                                        <tr class="box-table-row">
                                                            <th class="box-supprt-table-text col-3">
                                                                <span
                                                                    class="box-table-title box-table-title-clicked  box-name"
                                                                    :ref="'highlight_name'"
                                                                    style="max-width:62px;"
                                                                    @click="handleSortingName"
                                                                >
                                                                    Name
                                                                    <b-icon-chevron-expand></b-icon-chevron-expand>
                                                                </span>
                                                            </th>
                                                            <th class="box-supprt-table-text col-4">
                                                                <span
                                                                    class="box-table-title text-left pl-2"
                                                                    style="max-width:62px;"
                                                                    :ref="'highlight_email'"
                                                                     @click="handleSortingEmail"
                                                                >
                                                                    Email
                                                                    <b-icon-chevron-expand></b-icon-chevron-expand>
                                                                </span>
                                                            </th>
                                                            <th class="box-supprt-table-text col-2">
                                                                <span  class="box-table-title text-left pl-2" style="max-width: 90px;" :ref="'fileList-date'">
                                                                    Privileges
                                                                    <b-icon-chevron-expand></b-icon-chevron-expand>
                                                                </span>
                                                            </th>
                                                            <th class="box-supprt-table-text col-2">
                                                                <span
                                                                    class="box-table-title text-left pl-2"
                                                                    style="max-width:68px;"
                                                                    :ref="'highlight_status'"
                                                                    @click="handleSortingStatus"
                                                                >
                                                                    Status
                                                                    <b-icon-chevron-expand></b-icon-chevron-expand>
                                                                </span>
                                                            </th>
                                                            <th class="box-supprt-table-text col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody style="height: 170px;">
                                                        <tr
                                                            class="box-table-row"
                                                            style="height: 35px;"
                                                            v-for="(item, index) in rawData"
                                                            :key="index"
                                                        >
                                                            <td class="col-3">{{item['name'] ? item['name']: 'Pending'}}</td>
                                                            <td class="col-4 mr-2">{{item['email']}}</td>
                                                            <td class="col-2 mt-2">
                                                                <select
                                                                    class="table-select-box"
                                                                    @change="handleSelected($event, item)"
                                                                >
                                                                    <option
                                                                        v-for="(privilege, index) in privilegesData"
                                                                        :key="index"
                                                                        :name="privilege['name']"
                                                                        :selected="item['privilege'] === privilege['name'] ? true: false"
                                                                        :value="privilege['id']"
                                                                    >
                                                                        {{privilege['name']}}
                                                                    </option>
                                                                </select>
                                                            </td>
                                                            <td
                                                                class="col-2"
                                                                :class="item['status'] === 'Suspended'? 'text-danger' : '' "
                                                            >
                                                                {{item['status']}}
                                                            </td>
                                                            <td class="box-user-dropdown col">
                                                                 <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none p-0" no-caret>
                                                                    <template v-slot:button-content class="text-decoration-none">
                                                                         <img src="/images/triple-dot.svg">
                                                                    </template>
                                                                    <div v-if="item['status'] === 'Confirmed'">
                                                                        <b-dropdown-item @click="handleResetPassowrd(item)">
                                                                            <img src="/images/reset-password.svg" class="mr-2">
                                                                            <span>Reset Password</span>
                                                                        </b-dropdown-item>
                                                                        <b-dropdown-item @click="handleAdminSuspend(item)">
                                                                            <!-- <b-icon-lock style="color:#169bc8"></b-icon-lock> -->
                                                                            <img src="/images/suspend.svg" class="mr-2">
                                                                            <span class="ml-2">Suspend</span>
                                                                        </b-dropdown-item>
                                                                        <b-dropdown-item @click="handleRemoveUser(item)">
                                                                            <img src="/images/remove-user.svg" class="mr-2">
                                                                            <span>Remove</span>
                                                                        </b-dropdown-item>
                                                                    </div>
                                                                    <div v-if="item['status'] === 'Pending'">
                                                                        <b-dropdown-item @click="handleReinviteUser(item)">
                                                                            <img src="/images/reinvite-user.svg" class="mr-2">
                                                                            <span>Resend invite</span>
                                                                        </b-dropdown-item>
                                                                        <b-dropdown-item @click="handleRemoveUser(item)">
                                                                            <img src="/images/remove-user.svg" class="mr-2">
                                                                            <span>Remove</span>
                                                                        </b-dropdown-item>
                                                                    </div>
                                                                    <div v-if="item['status'] === 'Suspended'">
                                                                        <b-dropdown-item @click="handleActivateUser(item)">
                                                                            <img src="/images/activate.svg" class="mr-2">
                                                                            <!-- <b-icon-unlock style="color:#169bc8"></b-icon-unlock> -->
                                                                            <span class="ml-2">Activate</span>
                                                                        </b-dropdown-item>
                                                                        <b-dropdown-item @click="handleRemoveUser(item)">
                                                                            <img src="/images/remove-user.svg" class="mr-2">
                                                                            <span @click="handleRemoveUser">Remove</span>
                                                                        </b-dropdown-item>
                                                                    </div>
                                                                </b-dropdown>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab
                                    title="Support"
                                    ref="tab_highlight_3"
                                    v-on:click="handleSupportTab"
                                >
                                    <template v-slot:title>
                                        <span class="d-flex align-items-center">
                                            <!-- <b-icon-chat-square-quote
                                                class="mr-2"
                                                :style="supportTabActive ? 'color:#169bc8' : ''"
                                            ></b-icon-chat-square-quote> -->
                                            <img :src="supportImage" class="mr-2">
                                            <span> Support </span>
                                        </span>
                                    </template>
                                    <b-card-text class="box-account-body">
                                         <div class="d-flex justify-content-between align-items-center my-3">
                                            <span class="box-account-heading">{{organization.name}}: Support</span>
                                            <span
                                                style="cursor:pointer"
                                                @click="$emit('closeAdminConsolePopup')"
                                            >
                                                <img src="/images/cross-btn.svg">
                                            </span>
                                        </div>
                                         <div class="box-account-item d-flex flex-column mb-5">
                                            <label>Support Email</label>
                                            <input
                                                type="email"
                                                class="box-popup-input"
                                                style="width:100%"
                                                placeholder="Enter a support email"
                                                v-model="supportEmail"
                                            >
                                        </div>
                                        <p v-if="!supportEmailValid" class="text-danger font-weight-bold"> Invalid Email!</p>
                                        <div class="box-account-footer mt-5">
                                            <v-spacer></v-spacer>
                                            <v-divider class="m-0"></v-divider>
                                            <v-card-actions class="px-3 py-5">
                                                <button
                                                    class="box-btn-save mr-3"
                                                    @click="handleAdminSetting"
                                                >
                                                    Save Settings
                                                </button>
                                                <button
                                                    class="box-btn-cancel"
                                                    @click="$emit('closeAdminConsolePopup')"
                                                >
                                                    Cancel
                                                </button>
                                            </v-card-actions>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                            </b-tabs>
                        </v-card-text>
                        <v-divider class="m-0"></v-divider>
                         <div v-if="showPopup">
                            <generalPopup
                                :title="title"
                                :popupText="popupText"
                                :showPopup="showPopup"
                                :purpose="purpose"
                                :itemData="itemData"
                                v-on:popupConfirm="popupConfirm"
                                v-on:popupCancle="canclePopup"
                            />
                        </div>
                        <div v-if="responsePopup">
                            <messagePopup
                                :title="title"
                                :responseMessage="responseMessage"
                                :responsePopup="responsePopup"
                                v-on:cancleMessagePopup="cancleMessagePopup"
                            />
                        </div>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-app>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuetify from 'vuetify'
    import ApiRequest from '../../models/api'
    import 'vuetify/dist/vuetify.min.css'
    import generalPopup from './generalPopup'
    import messagePopup from './messagePopup'

    Vue.use(Vuetify)
    export default Vue.extend({
        props:[
               'showAdminConsolePopup',
               'userArray',
               'privileges',
               'owners',
               'organization',
               'userData',
               'userPrivilege'
            ],
        components:{
                generalPopup,
                messagePopup
            },
        data(){
            return{
                dialog:this.showAdminConsolePopup,
                pageNumber: 1,
                size: 3,
                pageData:{},
                pageCount: 0,
                rawData: this.userArray,
                adminOwners: this.owners,
                privilegesData: this.privileges,
                organizationName: this.organization.name,
                inviteEmail: '',
                emailValid: true,
                disableInviteUser: true,
                inviteUserMessage:'',
                inviteUserStatus: true,
                supportEmail: this.organization.support_email,
                inviteUserLoader: false,
                showPopup: false,
                itemData: {},
                responseMessage: '',
                responsePopup: false,
                supportEmailValid: true,
                isOrganizationEmpty: false,
                isAscending: true,
                oragizationImage: '/images/active-building.svg',
                usertabImage: '/images/inactive-user.svg',
                supportImage: '/images/inactive-support.svg'
            }
        },
        created(){
        },
        mounted(){},
        computed:{},
        methods:{
            async handleAdminSetting(){
                if(this.organizationName && this.supportEmail) {
                    this.isOrganizationEmpty = false
                    if(this.emailValidate(this.supportEmail)) {
                        const data = {
                            'org_id'  : this.organization.id,
                            'org_name': this.organizationName,
                            'support_email' : this.supportEmail
                        }
                        this.supportEmailValid = true
                        const res = await ApiRequest.updateOrganizationDetails(data)
                        if(res.status) {
                            this.$emit('handleAdminConsoleOrganization', res.organization)
                        }
                     } else {
                        this.supportEmailValid = false
                     }

                } else if (this.organizationName) {
                         this.isOrganizationEmpty = false
                         const data = {
                            'org_id'  : this.organization.id,
                            'org_name': this.organizationName,
                        }
                        const res = await ApiRequest.updateOrganizationDetails(data)
                        if(res.status) {
                            this.$emit('handleAdminConsoleOrganization', res.organization)
                        }
                } else if (!this.organizationName) {
                    this.isOrganizationEmpty = true
                }
            },
            async handleInviteUser() {
                if(this.emailValidate(this.inviteEmail)) {
                    this.emailValid = true
                    this.inviteUserLoader = true
                    const res = await ApiRequest.inviteUser({
                        'email': this.inviteEmail,
                        'user_id': this.userData.id,
                        'org_id'  : this.organization.id
                    })
                    if(res.status) {
                        this.rawData = res.users
                        this.inviteEmail = ''
                        this.$emit('updateInvitedUser', res.users)
                    }
                    this.inviteUserLoader = false
                    this.inviteUserStatus = res.status
                    this.inviteUserMessage = res.message
                } else {
                    this.emailValid = false
                    this.inviteUserLoader = false
                }
            },
            handleSelected(e, item){
                  const data = {
                    'user_id' : item.id,
                    'privilege_id': e.target.value,
                    'org_id'  : item.pivot.organization_id
                }
                this.itemData = data
                this.title = 'Update Priviledge'
                this.popupText = 'Do you want to update priviledge?'
                this.purpose = 'Update Priviledge'
                this.showPopup = true
            },
            handlechangeUser(){
                let currentRef1 = this.$refs['tab_highlight_1']
                let currentRef2 = this.$refs['tab_highlight_2']
                this.oragizationImage = '/images/Organization.svg'
                this.usertabImage = '/images/User-icon.svg'
                currentRef1.active = false
                currentRef2.active = true
            },
            handleResetPassowrd(item){
                 const data = {
                    'user_id' : item.id,
                    'org_id'  : item.pivot.organization_id
                }
                this.itemData = data
                this.title = 'Reset Password'
                this.popupText = ''
                this.purpose = 'Reset password'
                this.showPopup = true
            },
            handleAdminSuspend(item){
                const data = {
                    'user_id' : item.id,
                    'org_id'  : item.pivot.organization_id
                }
                this.itemData = data
                this.title = 'Suspend User'
                this.popupText = 'Do you want to suspend user?'
                this.purpose = 'Suspend user'
                this.showPopup = true
            },
            handleRemoveUser(item) {
                const data = {
                    'user_id' : item.id,
                    'org_id'  : item.pivot.organization_id
                }
                this.itemData = data
                this.title = 'Remove User'
                this.popupText = 'Do you want to remove user?'
                this.purpose = 'Remove user'
                this.showPopup = true
            },
            handleReinviteUser (item) {
                const data = {
                    'user_id' : item.id,
                    'email'   : item.email,
                    'org_id'  : item.pivot.organization_id
                }
                this.itemData = data
                this.title = 'Reinvite User'
                this.popupText = 'Do you want to reinvite user?'
                this.purpose = 'Reinvite user'
                this.showPopup = true
            },
            handleActivateUser(item) {
                const data = {
                    'user_id' : item.id,
                    'org_id'  : item.pivot.organization_id
                }
                this.itemData = data
                this.title = 'Activate User'
                this.popupText = 'Do you want to activate user?'
                this.purpose = 'Activate user'
                this.showPopup = true
            },
            async popupConfirm(popupPurpose, operationData) {
                if(popupPurpose === 'Remove user') {
                    const res = await ApiRequest.removeUser(operationData)
                    if(res.status) {
                        this.rawData = res.users
                        this.adminOwners = res.owners
                        this.responseMessage = res.message
                        this.$emit('updateInvitedUser', res.users)
                        this.$emit('updateOwnersData', res.owners)
                        this.responsePopup = true
                    }
                } else if (popupPurpose === 'Suspend user') {
                    const res = await ApiRequest.suspendUser(operationData)
                    if(res.status) {
                        this.rawData = res.users
                        this.adminOwners = res.owners
                        this.responseMessage = res.message
                        this.$emit('updateInvitedUser', res.users)
                        this.$emit('updateOwnersData', res.owners)
                        this.responsePopup = true
                    }
                } else if (popupPurpose === 'Activate user') {
                    const res = await ApiRequest.activatedUser(operationData)
                    if(res.status) {
                        this.rawData = res.users
                        this.adminOwners = res.owners
                        this.responseMessage = res.message
                        this.$emit('updateInvitedUser', res.users)
                        this.$emit('updateOwnersData', res.owners)
                        this.responsePopup = true
                    }
                } else if(popupPurpose === 'Reset password') {
                    this.responseMessage = operationData.message
                    this.responsePopup = true
                } else if(popupPurpose === 'Reinvite user') {
                    this.responsePopup = true
                    const res = await ApiRequest.inviteUser(operationData)
                    if(res.status) {
                        this.responseMessage = res.message
                        // this.responsePopup = true
                    }
                } else if(popupPurpose === 'Update Priviledge') {
                    const res = await ApiRequest.updatePrivilege(operationData)
                    if(res.status) {
                        this.responseMessage = res.message
                        this.responsePopup = true
                        this.rawData = res.users
                        this.adminOwners = res.owners
                        this.$emit('updateInvitedUser', res.users)
                        this.$emit('updateOwnersData', res.owners)
                    }
                }
                this.showPopup = false
            },
            canclePopup() {
                this.showPopup = false
            },
            cancleMessagePopup() {
                this.responsePopup = false
            },
            emailValidate(email) {
                const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
                return isEmailValid.test(email)
            },
            handleSortingName(){
                this.highLightHeading('name')
                if(!this.isAscending){
                   this.rawData= this.rawData.sort((a, b) => (a.name > b.name) ? -1 : 1);
                }else{
                    this.rawData=this.rawData.sort((a, b) => (a.name > b.name) ? 1 : -1);
                }
                this.isAscending = !this.isAscending
            },
            handleSortingEmail() {
                 this.highLightHeading('email')
                if(!this.isAscending){
                   this.rawData= this.rawData.sort((a, b) => (a.email > b.email) ? -1 : 1);
                }else{
                    this.rawData=this.rawData.sort((a, b) => (a.email > b.email) ? 1 : -1);
                }
                this.isAscending = !this.isAscending
            },
              handleSortingStatus() {
                 this.highLightHeading('status')
                if(!this.isAscending){
                   this.rawData= this.rawData.sort((a, b) => (a.status > b.status) ? -1 : 1);
                }else{
                    this.rawData=this.rawData.sort((a, b) => (a.status > b.status) ? 1 : -1);
                }
                this.isAscending = !this.isAscending
            },
            highLightHeading(id){
                const currentRef = this.$refs['highlight_'+ id]
                const currentItem = document.querySelectorAll(".box-table-title-clicked")
                currentItem.forEach(value =>{
                    value.classList.remove("box-table-title-clicked");
                })
                currentRef.classList.add('box-table-title-clicked')
            },
            handletabs() {
                this.oragizationImage = '/images/active-building.svg'
                this.usertabImage = '/images/inactive-user.svg'
                this.supportImage =  '/images/inactive-support.svg'
                let currentRef1 = this.$refs['tab_highlight_1']
                let currentRef2 = this.$refs['tab_highlight_2']
                currentRef1.active = true
                currentRef2.active = false
            },
            handleUserTab() {
                this.oragizationImage = '/images/Organization.svg'
                this.usertabImage = '/images/User-icon.svg'
                this.supportImage =  '/images/inactive-support.svg'
            },
            handleSupportTab() {
                this.supportImage =  '/images/active-support.svg'
                this.usertabImage = '/images/inactive-user.svg'
                this.oragizationImage = '/images/Organization.svg'
            },
            handleEmailChange({target}) {
                this.inviteEmail = target.value
                this.inviteUserMessage = ''
            }
        }
    })
</script>
<style>

</style>
