<template>
    <div>
        <div>
            <div class="box-search box-border-shadow d-flex justify-content-between">
                <div class="box-folder-private mr-2 pl-2 my-0">
                    <div
                        class="box-selected-drop position-relative"
                        v-if="privateName || sharedName"
                    >
                        <span class="styled-select folder-dropdown-border">
                            <b-dropdown size="lg"  variant="link" toggle-class="box-folder-dropdown text-decoration-none p-0" :no-caret="noCaret">
                                <template v-slot:button-content>
                                    <button class="">
                                        <img src="/images/folder.svg" class="mr-2" width="18px" height="16">
                                        <span class="box-dropdown-text">{{selectedFolderName.length > 20 ? selectedFolderName.substring(0,20)+"...": selectedFolderName}}</span>
                                        <span class="box-select-icon"><b-icon-caret-down-fill></b-icon-caret-down-fill></span>
                                    </button>
                                </template>
                                <b-dropdown-item v-on:click="handlePrivateFolderData">
                                    <img src="/images/folder.svg" class="mr-2" width="18px" height="16">
                                    <span>{{privateName.length > 20 ? privateName.substring(0,20)+"...": privateName}}</span>
                                </b-dropdown-item>
                                <b-dropdown-item v-on:click="handleSharedFolderData">
                                    <img src="/images/folder.svg" class="mr-2" width="18px" height="16">
                                    <span>{{sharedName.length > 20 ? sharedName.substring(0,20)+"...": sharedName}}</span>
                                </b-dropdown-item>
                            </b-dropdown>
                        </span>
                    </div>
                    <span  v-if="initialFetch">
                        <!-- <img src="/images/verticle.svg" class="mr-3 ml-3" > -->
                        <button
                            type="button"
                            class="box-refresh-btn box-private-text box-refresh-disable ml-2"
                            style="height: 34px;"
                            :disabled="!(privateData.length > 0) && !(sharedData.length > 0)"
                            @click="handleFileRefresh"
                        >
                            <img
                                src="/images/refresh.svg"
                                class="mr-2"
                                style="padding-bottom: 3px;"
                            >
                            Refresh
                        </button>
                    </span>
                </div>
                <div class="box-input-search" >
                    <div
                        class="box-search-text pl-3"
                        id="box-search-id"
                        v-if="initialFetch && type === 'private'"
                        @click="handleSearch"
                    >
                        <img src="/images/search.svg">
                        <input
                            type="text"
                            class="box-serach-input pl-2"
                            :disabled="!(privateData.length > 0) || !(sharedData.length > 0)"
                            placeholder="Search..."
                            v-model="searchInputValue"
                        >
                    </div>
                    <div
                        class="search-close-icon"
                        v-if="searchFileActive && type === 'private'"
                        @click="closeSearch"
                    >
                        <img src="/images/close.svg">
                    </div>
                </div>
            </div>
            <div class="col-sm-12 px-0 py-0">
                <div class="">
                    <table  class="table-borderless custom-table table mb-0" >
                        <thead>
                            <tr class="box-table-row ">
                                <th
                                   :class="type==='private' ? 'col-4 pl-2' : 'col-6 pl-2'"
                                >
                                    <span
                                        class="box-table-title box-table-title-clicked box-name"
                                        :ref="'fileList-name'"
                                        @click="handleSortingName"
                                    >
                                        Name
                                        <b-icon-chevron-expand></b-icon-chevron-expand>
                                    </span>
                                </th>
                                <th
                                    :class="type==='private' ? 'col-3' : 'col-4'"
                                >
                                    <span
                                        class="box-table-title"
                                        :ref="'fileList-date'"
                                        @click="handleSortingDate"
                                    >
                                        Last Updated
                                        <b-icon-chevron-expand></b-icon-chevron-expand>
                                    </span></th>
                                <th
                                    :class="type==='private' ? 'col-2' :'col'"
                                >
                                    <span
                                        class="box-table-title box-size"
                                        :ref="'fileList-size'"
                                        @click="handleSortingSize"
                                    >
                                        Size
                                        <b-icon-chevron-expand></b-icon-chevron-expand>
                                    </span>
                                </th>
                                <th v-if="type === 'private'" class="col-1" ></th>
                                <th  v-if="type === 'private'" class="col" ></th>
                            </tr>
                        </thead>
                        <tbody  v-if="filterFiles.length > 0">
                            <tr
                                class="box-table-row highlighted-selection align-items-center"
                                style="height:50px;"
                                v-for="(item, index) in filterFiles"
                                :key="index"
                                :ref="'highlight_' + index"
                                :id="item.id"
                                @click="handleClick(item, index)"
                            >
                                <td
                                    class="box-table-name d-flex align-items-center mr-1"
                                    :class="type==='private' ? 'col-4' : 'col-6'"
                                    :title="item.name"
                                >
                                    <span style="width:28px;"><img :src="item.thumb"></span>
                                    <span class="box-data-name"> {{ (item.name.length > 30) ? item.name.substring(0,30)+"..." : item.name}} </span>
                                </td>
                                <td
                                    class="box-table-data"
                                    :class="type==='private' ? 'col-3' : 'col-4'"
                                >
                                    {{item.modified_at}}
                                </td>
                                <td
                                    class="box-table-data"
                                    :class="type==='private' ? 'col-2' : 'col'"
                                >
                                    {{item.size}} MB
                                </td>
                                 <td
                                    v-if="type === 'private'"
                                    class="box-table-data col-2 col-2 d-flex justify-content-center mr-2"
                                >
                                    <p class="mb-0" v-if="item.exhibit_number">
                                        <img src="/images/check.svg" alt=""> <span class="box-badge badge">{{item.exhibit_number}}</span>
                                    </p>
                                    <div
                                        v-else-if="oldItemId === item.id && !item.exhibit_number"
                                        class="box-exhibit-btn"
                                    >
                                        <button
                                            class="box-btn-hover btn btn-primary-preview m-0 p-0"
                                            :id="'btn_'+ item.id"
                                            :disabled="exhibitDisabled"
                                            @click="introduceExhibit(item, index)"
                                        >
                                            {{buttonName}}
                                        </button>
                                    </div>
                                </td>
                                <td
                                    class="box-table-data col d-flex flex-row-reverse align-items-center"
                                    v-if="type == 'private' && undoExhibit && item.id === undoFileId && item.exhibit_number"
                                >
                                    <b-dropdown
                                        id="dropdown-1"
                                        class="box-drop-btn"
                                        :no-caret="noCaret"
                                        variant="default"
                                    >
                                        <b-dropdown-item
                                            @click="handleUndo"
                                        >
                                            <b-icon-arrow-counterclockwise class="mr-2" style="color: #4e4e4e;"></b-icon-arrow-counterclockwise> Undo Exhibit
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </td>
                            </tr>
                        </tbody>
                         <div v-else-if="loading" class="box-empty-folder">
                            <loader :loaderMessage="'Fetching files'"/>
                        </div>
                        <div v-else class="box-empty-folder">
                            <img src="/images/empty.svg">
                            <div class="box-folder-text" v-if="privateId || sharedId">
                                <p class="mb-0">There is no file in this folder.</p>
                                <p v-if="type === 'private'">
                                    Get started by adding file on your private
                                    <a :href="'https://app.box.com/folder/'+ privateId">Box.com</a> folder
                                </p>
                            </div>
                            <div v-else>
                                <p class="box-empty-folder-text mb-0 mt-3 pr-3">Please update Settings (<img src="/images/setting-icon.svg">).</p>
                            </div>
                        </div>
                     </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import loader from './loader'
    import ApiRequest from '../../models/api'
    export default Vue.extend({
        props:[
            'privateFolderName',
            'sharedFolderName',
            'privateData',
            'sharedData',
            'loading',
            'privateId',
            'sharedId',
            'undoExhibit',
            'undoFileId',
            "exhibitVal",
            "selectedFileId",
            'initialFetch',
            'showPreview',
            'prefixValue',
            'exhibitNum'
        ],
        components:{
            loader
        },
        data(){
            return{
                filterFiles: this.privateData,
                isAscending:true,
                noCaret: true,
                searchFileActive: false,
                searchInutText: '',
                searchInputValue:'',
                privateName: this.privateFolderName,
                sharedName: this.sharedFolderName,
                type:'private',
                privateFileIndex: '',
                selectedPrivateFile: {},
                selectedSharedFile: {},
                sharedFileIndex:'',
                selectedFolderName: this.privateFolderName,
                localPrivatePreview: true,
                localSharedPreview: true,
                buttonName: 'Introduce Exhibit',
                currentActive: false,
                oldItemId: '',
                exhibitNumber: this.exhibitNum,
                exhibitDisabled: false
            }
        },
        watch:{
            privateData: function(val) {
                if ( this.type === 'private') {
                    this.filterFiles = val
                    if(Object.keys(val).length > 0) {
                        this.handlePrivateFolderData()
                    }
                }
            },
            sharedData: function(val) {
                if ( this.type === 'shared') {
                    this.filterFiles = val
                    if(Object.keys(val).length > 0) {
                        this.handleSharedFolderData()
                    }
                }
            },
            searchInputValue: function(val) {
                this.filterFiles = this.privateData.filter(function(item) {
                    if(item.name.toLowerCase().indexOf(val) > -1) {
                        return item
                    }
                })
                if(val === '') {
                    this.filterFiles = this.privateData
                }
            },
            type: function(val) {
                if(val === 'shared') {
                    this.handleSharedFolderData()
                } else {
                    this.handlePrivateFolderData()
                }
            },
            privateFolderName: function(val) {
                this.privateName = val
                this.selectedFolderName = val
            },
            sharedFolderName: function(val) {
                this.sharedName = val
            },
            showPreview: function(val) {
                if(this.type ===  'private') {
                    this.localPrivatePreview = val
                } else {
                    this.localSharedPreview = val
                }
            },
            exhibitNum: function(val) {
                this.exhibitNumber = val
            }
        },
        created(){},
        mounted(){},
        methods:{
            handleSortingName(){
                this.highLightHeading('name')
                if(!this.isAscending){
                   this.filterFiles= this.filterFiles.sort((a, b) => (a.name > b.name) ? -1 : 1);
                }else{
                    this.filterFiles=this.filterFiles.sort((a, b) => (a.name > b.name) ? 1 : -1);
                }
                this.isAscending = !this.isAscending
            },
            handleSortingSize() {
                this.highLightHeading('size')
                if(!this.isAscending) {
                   this.filterFiles= this.filterFiles.sort((a, b) => (a.size > b.size) ? -1 : 1);
                } else {
                    this.filterFiles=this.filterFiles.sort((a, b) => (a.size > b.size) ? 1 : -1);
                }
                this.isAscending = !this.isAscending
            },
            handleSortingDate() {
                this.highLightHeading('date')
                if (!this.isAscending) {
                   this.filterFiles= this.filterFiles.sort((a, b) => (a.modified_at > b.modified_at) ? -1 : 1);
                } else {
                    this.filterFiles=this.filterFiles.sort((a, b) => (a.modified_at > b.modified_at) ? 1 : -1);
                }
                this.isAscending = !this.isAscending
            },
            highLightHeading(id) {
                const currentRef = this.$refs['fileList-'+ id]
                const currentItem = document.querySelectorAll(".box-table-title-clicked")
                currentItem[0].classList.remove("box-table-title-clicked")
                currentRef.classList.add('box-table-title-clicked')
            },
            handleClick(item, index) {
                this.highlightItems(index)
                if(this.type === 'private') {
                    this.privateFileIndex = index
                    this.selectedPrivateFile = item
                    this.oldItemId = item.id
                    this.$emit('handleFiles', item, this.type)
                } else {
                    this.selectedSharedFile = item
                    this.sharedFileIndex = index
                    this.$emit('sharedFilePreview', item, this.type)
                }
            },
            handleSearch() {
                if(this.privateData.length > 0) {
                    const searchElement = document.getElementById('box-search-id')
                    searchElement.classList.add('box-selected-search')
                    this.searchFileActive = true
                }
            },
            highlightItems(id) {
                const currentRef = this.$refs['highlight_'+ id]
                const currentItem = document.querySelectorAll(".current-active")
                if(currentItem) {
                    currentItem.forEach(value =>{
                        value.classList.remove("current-active");
                    })
                }
                currentRef[0].classList.add('current-active')
            },
            handleUndo() {
                const item = {
                    item_id: this.undoFileId,
                    target_id: this.sharedId
                }
                this.$emit('handleUndoPopup', item)
            },
            closeSearch(){
                let searchElement = document.getElementById('box-search-id')
                searchElement.classList.remove("box-selected-search")
                this.searchFileActive = false
                this.searchInputValue = ''
            },
            handleFileRefresh() {
                if(this.type === 'private') {
                    this.closeSearch()
                    this.$emit('handleRefresh', this.privateId, this.type)
                } else {
                    this.$emit('handleRefresh', this.sharedId, this.type)
                }
            },
            handlePrivateFolderData(){
                this.filterFiles = this.privateData
                this.type = 'private'
                this.selectedFolderName = this.privateName
                if(this.selectedPrivateFile !== undefined && !(Object.keys(this.selectedPrivateFile).length > 0)) {
                    this.selectedPrivateFile = this.filterFiles[0]
                    this.privateFileIndex = 0
                }
                if(!this.oldItemId) {
                    this.oldItemId = this.filterFiles[0].id
                }
                this.$emit('handleFiles', this.selectedPrivateFile,  'private', this.localPrivatePreview)
                setTimeout(()=>{
                    this.highlightItems(this.privateFileIndex)
                }, 50)

            },
            handleSharedFolderData() {
                this.filterFiles = this.sharedData
                this.selectedFolderName = this.sharedName
                this.type = 'shared'
                if(Object.keys(this.filterFiles).length > 0) {
                    if(this.selectedFileId) {
                        this.filterFiles.forEach((item, index) => {
                            if(this.selectedFileId === item.id) {
                                this.selectedSharedFile = item
                                this.sharedFileIndex = index
                            }
                        })
                    } else {
                        if(Object.keys(this.selectedSharedFile).length === 0) {
                            this.selectedSharedFile = this.filterFiles[0]
                            this.sharedFileIndex = 0
                        }
                    }
                    this.$emit('sharedFilePreview', this.selectedSharedFile, 'shared')
                    setTimeout(()=>{
                        this.highlightItems(this.sharedFileIndex)
                    }, 100)
                } else {
                    this.selectedSharedFile = {}
                    this.$emit('sharedFilePreview', this.selectedSharedFile, 'shared')
                }
            },
             async introduceExhibit(item, indexVal) {
                const el = document.getElementById('btn_'+ item.id)
                const element = document.querySelectorAll('.highlighted-selection')
                element.forEach((val,index) => {
                    if(val.id === item.id) {
                        el.innerHTML = 'Exhibiting...'
                        el.disabled = true
                    }
                })
                const fileId = this.selectedPrivateFile.id
                const formData = {
                    'private_folder_id': this.privateId,
                    'shared_folder_id': this.sharedId,
                    'exhibit_number': this.exhibitNum,
                    'file_id': fileId,
                    'prefix': this.prefixValue
                }
                const response = await ApiRequest.introduceExhibit(formData)
                if(response.status) {
                    this.buttonName = 'Introduce Exhibit'
                    // this.exhibitFile = ''
                    const exhibitVal = this.exhibitNum
                    this.exhibitNumber = this.returnExhibitNumber((parseInt(this.exhibitNumber) + 1).toString())
                    this.$emit('handleExhibit', exhibitVal, fileId, response.record, this.exhibitNumber)
                } else if(response.error === 'expired') {
                    this.$emit('sessionExpired')
                } else {
                    this.buttonName = 'Introduce Exhibit'
                    this.$emit('handleError')
                }
                this.exhibitDisabled = false
            },
            returnExhibitNumber(value) {
                var inputVal = value;
                if (inputVal.length == 1) {
                    inputVal = "00" + inputVal;
                } else if (inputVal.length == 2) {
                    inputVal = "0" + inputVal
                } else {
                    inputVal = inputVal
                }
                return inputVal
            },
        }
    })
</script>

<style>

</style>
