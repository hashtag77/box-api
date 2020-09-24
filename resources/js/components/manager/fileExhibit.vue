<template>
    <div>
        <div class="box-border-shadow">
            <p class="box-exhibit-text pl-4 mb-0">
                <span v-if="!duplicateRecord && folderType === 'private'">
                    <span v-if="exhibitFile.name" style="color: #6e7b7f;"> Selected: </span>
                    <span
                        v-if="exhibitFile.name"
                        :title="prefixValue+' '+exhibitNum+' - '+exhibitFile.name"
                        class="ml-1"
                    >
                        {{ ((exhibitFile.name).length > 30 ?
                                (exhibitFile.name).substring(0,30)+"..." :
                                    (exhibitFile.name))}}
                    </span>
                </span>
                 <span v-else-if="duplicateRecord && folderType === 'shared'">
                    <span v-if="exhibitFile.name" style="color: #6e7b7f;"> Selected: </span>
                    <span
                        v-if="exhibitFile.name"
                        :title="exhibitFile.name"
                        class="ml-1"
                    >
                        {{ ((exhibitFile.name).length > 30 ?
                                (exhibitFile.name).substring(0,30)+"..." : (exhibitFile.name))}}
                    </span>
                </span>
                <span v-else-if="duplicateRecord && folderType === 'private' && exhibitFile.name">
                    <span style="color: #6e7b7f;"> Introduced: </span>
                    <span class="box-badge badge">{{exhibitFile.exhibit_number}}</span>
                    <span :title="exhibitFile.name">
                        {{ ((exhibitFile.name).length > 30 ?
                            (exhibitFile.name).substring(0,30)+"...":
                                (exhibitFile.name)) }}
                    </span>
                </span>
                <span v-if="!duplicateRecord && folderType === 'private' && exhibitFile.name" class="exhibit-align">
                    <span>
                        <label class="box-exhibit-number mr-1 ml-4">Exhibit Number: </label>
                        <input
                            type="text"
                            class="ml-2"
                            :value="exhibitNum"
                            @change="handleExhibitNumber"
                            @keypress="handleInteger($event)"
                        >
                    </span>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import ApiRequest from '../../models/api'
    import loader from './loader'
    export default Vue.extend({
        props:[
            'prefixValue',
            'exhibitNumber',
            'selectedFile',
            'duplicateRecord',
            'folderType'
        ],
        components:{loader},
        data(){
            return{
                exhibitNum: (this.exhibitNumber) ? this.exhibitNumber  : "001",
                exhibitFile: this.selectedFile ? this.selectedFile : {}
            }
        },
          watch:{
            selectedFile: function(val) {
                this.exhibitFile = val ? val : {}
            },
            exhibitNumber: function(val) {
                this.exhibitNum = val ? val : '001'
            }
        },
        methods:{
            handleExhibitNumber(e) {
                const val = this.returnExhibitNumber(e.target.value)
                e.target.value = val
                this.exhibitNum = val
                this.$emit('handleExhibitNumber', this.exhibitNum)
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
            handleInteger(e) {
                const val = e.target.value
                if (e.charCode > 47 && e.charCode < 58) {
                    return true
                } else {
                    e.returnValue = false
                }
            }
        }
    })
</script>

 <style>

 </style>
