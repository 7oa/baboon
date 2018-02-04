<template>
    <div>
        <div class="bowtie-grid"
             :class="active"
             v-if="view=='grid'"
             :style="{ backgroundImage: 'url(' + bowtieItem.url + ')' }">
        </div>

        <div class="bowtie-list" :class="active" v-if="view=='list'">
            <div class="bowtie-list__img" :style="{ backgroundImage: 'url(' + bowtieItem.url + ')' }"></div>
            <div>
                <div class="bowtie-list__name">
                    <strong>Название:</strong> {{ bowtieItem.art}}
                </div>
                <div class="bowtie-list__desc">
                    <strong>Описание:</strong> {{ bowtieItem.description}}
                </div>
                <div class="bowtie-list__price">
                    <strong>Цена:</strong> {{ price }}
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["bowtieItem","view", "active"],
        computed: {
            price(){
                return this.bowtieItem.price + 'р.'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .bowtie-grid{
        width: 135px;
        height: 135px;
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
    .bowtie-list{
        display: flex;
        margin: 10px;
        border: 2px solid transparent;
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;
        &__img{
            width: 120px;
            height: 82px;
            flex: 0 0 auto;
            margin-right: 20px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
        &.active{
            border-color: coral;
            transition: 0.5s;
        }
    }
</style>