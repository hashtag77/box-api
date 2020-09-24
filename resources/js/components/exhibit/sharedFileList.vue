<template>
    <div>
        <div>
            <div class="col-sm-12 px-0 py-0">
                <div class="box-shared-table">
                    <table  class="table-borderless custom-table table mb-0" >
                        <thead>
                            <tr class="box-table-row pl-1" style="height:48px;">
                                <th
                                   class="pl-1"
                                   :class="fullView ? isMobile ? 'col-4 exhibit-mobile-width' : 'col-2' : 'col-3'"
                                >
                                    <span
                                        class="box-table-title box-table-title-clicked box-name"
                                        :ref="'fileList-exhibit'"
                                        @click="handleSortingExhibit"
                                    >
                                        Exhibit
                                        <b-icon-chevron-expand></b-icon-chevron-expand>
                                    </span>
                                </th>
                                <th
                                    :class="fullView ? isMobile ? 'col-5' : 'col-7' : 'col-6'"
                                >
                                    <span
                                        class="box-table-title box-name"
                                        :ref="'fileList-name'"
                                        @click="handleSortingName"
                                    >
                                       Name
                                        <b-icon-chevron-expand></b-icon-chevron-expand>
                                    </span></th>
                                <th
                                    class="col-2 exhibit-size-padding"
                                    :class="isMobile ? 'pl-0' : ''"
                                >
                                    <span
                                        class="box-table-title box-size pl-1"
                                        :ref="'fileList-size'"
                                        @click="handleSortingSize"
                                    >
                                        Size
                                        <b-icon-chevron-expand></b-icon-chevron-expand>
                                    </span>
                                </th>
                                <th
                                    class="col d-flex justify-content-end"
                                    style="padding-top: 10px;">
                                    <span class="exhibit-refresh pl-1">
                                        <button
                                            type="button"
                                            class="box-refresh-btn exhibit-refresh-btn box-refresh-disable"
                                            style="height: 34px;"
                                            :disabled="fileLoader"
                                            @click="$emit('getFolderData')"
                                        >
                                            <img
                                                src="/images/refresh.svg"
                                            >
                                        </button>
                                     </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            v-if="filterFiles !== undefined && filterFiles.length > 0"
                            :class="halfView ? 'exhibit-tbody-height': ''"
                        >
                            <tr
                                class="box-table-row pl-1"
                                style="height:45px;"
                                v-for="(item, index) in filterFiles"
                                :key="index"
                                :ref="'highlight_' + index"
                                @click="handleClick(item, index)"
                            >
                                <td
                                    class="box-table-name d-flex align-items-center"
                                    :class="fullView ? isMobile ? 'col-4 exhibit-mobile-width':'col-2' : 'col-3'"
                                    :title="item.exhibit_name"
                                >
                                    <span class="exhibit-mobile-name">
                                        {{ (isMobile || tabView ?
                                            ((item.exhibit_name.length > 15) ? item.exhibit_name.substring(0,15)+"..." : item.exhibit_name):
                                                ((item.exhibit_name.length > 25) ? item.exhibit_name.substring(0,25)+"..." : item.exhibit_name))}}
                                        <span
                                            v-if="item.exhibit_num"
                                            class="box-badge badge ml-1"
                                        >
                                            {{item.exhibit_num}}
                                        </span>
                                    </span>

                                </td>
                                <td
                                    class="box-table-data"
                                    :class="fullView ? isMobile ? 'col-5': 'col-7' : 'col-6'"
                                    :title="item.filename"
                                >
                                    <span style="width:26px;" class="d-inline-block"><img :src="item.thumb"></span>
                                    <span class="exhibit-mobile-name">
                                        {{ (isMobile ?
                                            ((item.filename.length > 30) ? item.filename.substring(0,30)+"..." : item.filename):
                                                ((fullView || tabView ) ? ((item.filename.length > 65) ? item.filename.substring(0,65)+"..." : item.filename) :
                                                    ((item.filename.length > 45) ? item.filename.substring(0,45)+"..." : item.filename)))}}
                                    </span>
                                </td>
                                <td
                                    class="box-table-data"
                                    :class="fullView ? 'col-2' : 'col-3'"
                                >
                                    <span class="exhibit-mobile-size" :class="halfView && !tabView ? 'pl-2': ''">{{item.size}} MB</span>
                                </td>
                            </tr>
                        </tbody>
                         <div v-else-if="fileLoader" class="box-empty-folder" style="height: calc(100vh - 8vh);">
                            <loader :loaderMessage="'Fetching files'"/>
                        </div>
                        <div v-else class="exhibit-empty-folder">
                            <img src="/images/empty.svg" class="empty-folder-height">
                            <div class="box-folder-text" :style="isMobile ? 'padding-top:20px;' : 'padding-top:25px;'">
                                <p class="mb-0">Please stand by: No exhibits have been introduced. <br>
                                    Exhibits will be automatically presented here.
                                </p>
                            </div>
                        </div>
                     </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loader from '../manager/loader'
export default {
    props:[
        'fullView',
        'sharedFiles',
        'fileLoader',
        'selectedFile',
        'halfView',
        'updatedIndex',
        'isMobile',
        'splitView',
        'tabView',
        'tabProView'
    ],
    components:{
        loader
    },
    data() {
        return {
            filterFiles: this.sharedFiles,
            localselected:this.sharedFiles[0],
            isAscending: true
        }
    },
    watch:{
        sharedFiles: function(val) {
            this.filterFiles = val
        },
        selectedFile: function(val) {
            if(val) {
               const index = this.filterFiles.findIndex(item => val.id === item.id)
                setTimeout(() => {
                    if((!this.isMobile && !this.fullView) || this.halfView) {
                        this.handleClick(val, index)
                    }else if(this.fullView || this.isMobile) {
                        this.highlightItems(index)
                    }
                }, 50);
            }
        },
        updatedIndex: function(val) {
            this.highlightItems(val)
        }
    },
    created(){
        const id = this.selectedFile.id
        if(this.fullView || this.halfView || this.splitView) {
            if(this.filterFiles.length > 0) {
                const index = this.filterFiles.findIndex(item => id === item.id)
                setTimeout(()=>{
                    this.highlightItems(index)
                }, 50)
            }
        }
    },
    methods: {
        handleClick(item, index) {
            this.highlightItems(index)
            this.$emit('handleFilePreview', item)
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
        highLightHeading(id) {
            const currentRef = this.$refs['fileList-'+ id]
            const currentItem = document.querySelectorAll(".box-table-title-clicked")
            currentItem[0].classList.remove("box-table-title-clicked")
            currentRef.classList.add('box-table-title-clicked')
        },
        handleSortingName() {
            this.highLightHeading('name')
            if(!this.isAscending) {
                this.filterFiles = this.filterFiles.sort((a, b) => (a.filename > b.filename) ? -1 : 1);
            } else {
                this.filterFiles = this.filterFiles.sort((a, b) => (a.filename > b.filename) ? 1 : -1);
            }
            this.isAscending = !this.isAscending
        },
        handleSortingSize() {
            this.highLightHeading('size')
            if(!this.isAscending) {
                this.filterFiles = this.filterFiles.sort((a, b) => (a.size > b.size) ? -1 : 1);
            } else {
                this.filterFiles = this.filterFiles.sort((a, b) => (a.size > b.size) ? 1 : -1);
            }
            this.isAscending = !this.isAscending
        },
        handleSortingExhibit() {
            this.highLightHeading('exhibit')
            if (!this.isAscending) {
                this.filterFiles = this.filterFiles.sort((a, b) => (a.exhibit_name > b.exhibit_name) ? -1 : 1);
            } else {
                this.filterFiles = this.filterFiles.sort((a, b) => (a.exhibit_name > b.exhibit_name) ? 1 : -1);
            }
            this.isAscending = !this.isAscending
        },
    }
}
</script>

<style>

</style>
