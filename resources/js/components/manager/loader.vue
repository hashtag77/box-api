<template>
     <div class="loader-align d-flex justify-content-center">
        <div>
            <b-spinner label="Spinning" variant="primary"></b-spinner>
        </div>
        <h5 v-if="message !==''" class="mt-3">{{message}}</h5>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default Vue.extend({
        props:['loaderMessage', 'loaderSize'],
        data() {
            return {
                message: this.loaderMessage,
            }
        },
    })
</script>

<style>
 .loader-align .text-primary {
    color: #169bc8 !important;
 }
</style>
