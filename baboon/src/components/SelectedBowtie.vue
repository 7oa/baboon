<template>
        <div class="sel-bowtie"
             :style="{ backgroundImage: 'url(' + bowtie + ')'  }">
        </div>
</template>
<script>
    export default {
        props: ["bowtie"],
        data(){
            return{
            }
        }
    }
</script>
<style lang="scss" scoped>
    .sel-bowtie{
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 100%;
        height: 100%;
        cursor: move;
    }
</style>