<template>
    <div class="bowtie" :style="{ backgroundImage: 'url(' + bowtieItem.url + ')' }">
    </div>
</template>
<script>
    export default {
        props: ["bowtieItem"]
    }
</script>
<style lang="scss" scoped>
    .bowtie{
        width: 130px;
        height: 130px;
        margin: 9px;
        flex: 0 0 auto;
        margin-bottom: 10px;
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        border-radius: 50%;
        border: 2px solid transparent;
        &.active{
            border-color: coral;
            transition: 0.5s;
        }
    }
</style>