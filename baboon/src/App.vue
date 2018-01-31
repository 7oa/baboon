<template>
    <div class="container">
        <div class="right-col">
            <app-uploadimg :selectBowtie="bowtie"></app-uploadimg>
        </div>
        <div class="left-col">
            <app-bowties @selectBowtie="selectBowtie"></app-bowties>
        </div>
    </div>
</template>

<script>
    import UploadImg from './components/UploadImg.vue'
    import Bowties from './components/BowtiesList.vue'

    export default{
        data(){
            return{
                bowtie: ''
            }
        },
        components:{
            'app-uploadimg': UploadImg,
            'app-bowties': Bowties
        },
        methods: {
            selectBowtie(url){
                this.bowtie = url;
            }
        }
    }
</script>

<style lang="scss">
    .container{
        width: 1000px;
        margin: 0 auto;
        display: flex;
    }
    .right-col,
    .left-col{
        width: 48%;
        flex: 0 0 auto;
    }
    .right-col{
        margin-right: 2%;
    }
</style>
