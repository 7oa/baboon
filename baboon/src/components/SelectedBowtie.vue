<template>
    <vue-draggable-resizable class="drag-res"
            v-if="bowtie"
            :parent="true"
            :active="true"
            :handles="['tl','tr','bl','br']"
            :w="100"
            :h="80"
            :y="200"
            :x="190">
        <div class="sel-bowtie"
             :style="{ backgroundImage: 'url(' + bowtie + ')'  }">

        </div>
    </vue-draggable-resizable>
</template>
<script>
    import VueDraggableResizable from 'vue-draggable-resizable'

    export default {
        props: ["bowtie", "valueBowtie"],
        data(){
            return{
            }
        },
        components:{
            VueDraggableResizable
        },
        methods: {
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