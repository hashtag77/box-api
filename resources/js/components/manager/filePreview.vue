<template>
    <div style="margin-top: 1px;">
        <div class="preview-container"></div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        props:[
            'accessToken',
            'fileId',
            'duplicateRecord',
            'folderType'
        ],
        watch:{
            fileId: function(val) {
                var preview = new Box.Preview();
                preview.show(val, this.accessToken, {
                    container: '.preview-container',
                    showDownload: true
                });
            }
        },
        mounted(){
            var preview = new Box.Preview();
            preview.show(this.fileId, this.accessToken, {
                container: '.preview-container',
                showDownload: true
            });

        }
    })
</script>
<style>
    .preview-container {
        border: 1px solid #eee;
        height:calc(100vh - 115px);
        width: 100%;
    }
    @media screen and (max-width: 1400px) {
        .preview-container {
            border: 1px solid #eee;
            height:calc(100vh - 125px);
            width: 100%;
        }
    }

    .bp-header .bp-default-logo svg {
        display: none !important;
    }
</style>
