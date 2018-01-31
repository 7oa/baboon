<template>
    <div>
        <div class="photo-frame">
            <div v-if="!image">
                <div class="uploadphoto-mess">
                    <h2>Загрузите фото</h2>
                    <div class="noimage"></div>
                    <input type="file" @change="onFileChange">
                </div>
            </div>
            <div v-else>
                <div class="uploadphoto-data">
                    <div class="foto" :style="{ backgroundImage: 'url(' + image + ')', width: value + '%', height: value + '%' }">
                    </div>
                    <sel-bowties :bowtie="bowtie"></sel-bowties>
                </div>
            </div>
        </div>
        <div v-if="image">
            <div class="params-line">
                <div class="params-label">Размер фото: {{value}}%</div>
                <div class="params-changer">
                    <input type="range" min="1" max="200" step="1" v-model="value">
                </div>

            </div>
            <div>
                <button @click="removeImage">Удалить фото</button>
            </div>
        </div>

    </div>

</template>
<script>
    import SelectedBowtie from './SelectedBowtie.vue';
    import BowtieService from '../BowtieService.js';

    export default {
        data(){
            return{
                image: '/images/men.jpg',
                value: 100,
                bowtie: ''
            }
        },
        created(){
            BowtieService.$on("selectBowtie", (selectedBowtie) => {
                this.bowtie = selectedBowtie;
            })
        },
        components: {
            'sel-bowties': SelectedBowtie
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
    .noimage{
        background-image: url('/images/noavatar.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: 100%;
        height: 300px;
    }
    .photo-frame{
        width: 100%;
        height: 600px;
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
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .foto{
        width: 100%;
        height: 100%;
        background-size: cover;
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