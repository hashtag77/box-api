<template>
    <div class="box-shared">
        <div class="preview-container"
            :style="halfView ? tabView ? 'height: 55vh' : 'height: 60vh;':
                '' "></div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        props:[
            'accessToken',
            'fileId',
            'halfView',
            'tabView'
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
    .box-shared .preview-container {
        border: 1px solid #eee;
        height:calc(100vh - 61px);
        width: 100%;
    }
     /* @media screen and (max-width: 1400px) {
       .box-shared .preview-container {
            border: 1px solid #eee;
            height:calc(100vh - 64px);
            width: 100%;
        }
     } */

    .bp-header .bp-default-logo svg {
        display: none !important;
    }
</style>

