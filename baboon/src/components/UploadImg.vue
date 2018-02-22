<template>
    <div>
        <div class="photo-frame">
            <div class="uploadphoto-mess" v-if="!image">
                <h2>загрузите фото</h2>
                <div class="noimage"></div>
                <input type="file" @change="onFileChange">
            </div>
            <div class="uploadphoto-data" v-else>
                <vue-draggable-resizable class="photo-resize"
                                         :resizable="false"
                                         :style="{ width: propWidth + 'px', height: propHeight + 'px' }">
                    <div class="foto" :style="{ backgroundImage: 'url(' + image + ')', width: propWidth + 'px', height: propHeight + 'px' }">
                    </div>
                </vue-draggable-resizable>
                <vue-draggable-resizable class="drag-res" v-if="bowtie"
                                         :parent="true"
                                         :active="true"
                                         :handles="['tl','tr','bl','br']"
                                         :w="100" :h="80"
                                         :y="200" :x="190">
                    <sel-bowties :bowtie="bowtie"></sel-bowties>
                </vue-draggable-resizable>
            </div>
        </div>
        <div v-if="image" class="bootom-panel">
            <div class="params-line">
                <div class="params-label">Размер фото: {{value}}%</div>
                <div class="params-changer">
                    <input type="range" min="1" max="200" step="1" v-model="value">
                </div>

            </div>
            <div class="">
                <button @click="removeImage" class="btn btn-secondary">Удалить фото</button>
            </div>
        </div>

    </div>

</template>
<script>
    import SelectedBowtie from './SelectedBowtie.vue';
    import BowtieService from '../BowtieService.js';
    import VueDraggableResizable from 'vue-draggable-resizable'

    export default {
        data(){
            return{
                image: '',
                value: 100,
                bowtie: '',
                width: 478,
                height: 618
            }
        },
        components: {
            'sel-bowties': SelectedBowtie,
            VueDraggableResizable
        },
        computed:{
            propWidth(){
                return  parseInt((this.width*this.value/100)/(this.height/618))
            },
            propHeight(){
                return parseInt(618*this.value/100)
            }
        },
        created(){
            BowtieService.$on("selectBowtie", (selectedBowtie) => {
                this.bowtie = selectedBowtie;
            })
        },
        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                var image = new Image();
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;

                    var img = new Image;
                    image.onload = function() {
                        vm.width = this.width;
                        vm.height = this.height;
                        console.log(this.width);
                        console.log(this.height);
                    };
                    image.src = reader.result;
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
                this.image = '';
                this.value = 100;
                this.bowtie = '';
                BowtieService.removeImage();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .photo-frame{
        width: 100%;
        height: 615px;
        border: 1px solid #ccc;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        margin-bottom: 10px;
        img{
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }
    }
    .uploadphoto-data{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
    .photo-resize{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .foto{
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
    }
    .params-line{
        /*display: flex;*/
        /*align-items: center;*/
        margin-bottom: 20px;
    }
    .params-label{
        /*flex: 0 0 auto;*/
        margin-bottom: 10px;
    }
    .params-changer{
        /*display: flex;*/
        /*align-items: center;*/
    }
</style>