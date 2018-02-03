<template>
    <div class="wrapper content">
        <div class="right-col">
            <app-uploadimg></app-uploadimg>
        </div>
        <div class="left-col">
            <app-bowties></app-bowties>
        </div>
    </div>
</template>

<script>
    import UploadImg from './components/UploadImg.vue'
    import Bowties from './components/BowtiesList.vue'

    export default{
        components:{
            'app-uploadimg': UploadImg,
            'app-bowties': Bowties
        }
    }
</script>

<style lang="scss">
</style>
