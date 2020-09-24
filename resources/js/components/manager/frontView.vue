<template>
    <div class="box-front">
        <img src="/images/cloud.svg" width="200px" height="140px">
        <p class="box-cloud-text mt-4">Start using the Virtual Depo Exhibit Introduction Tool<br>
            by connecting to your Box.com account.</p>
        <button
            class="box-connect-btn"
            @click="$emit('grantAccess')"
        >
            Connect with Box
        </button>
    </div>
</template>
<script >
    import Vue from 'vue'
    export default Vue.extend({})
</script>
<style>

</style>
