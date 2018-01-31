<template>
    <div class="bowties-bl">

        <div class="bowties-ttl">Выберите бабочку</div>

        <div class="row">
            <div class="col">
                <div class="select-line">
                    <div class="select-line__ttl">Цвет</div>
                    <select class="form-control" v-model="color">
                        <option value="">Все</option>
                        <option value="red">Красный</option>
                        <option value="blue">Синий</option>
                        <option value="brown">Коричневый</option>
                        <option value="violet">Фиолетовый</option>
                    </select>
                </div>
            </div>
            <div class="col">
                Вид:
                <a @click="view='grid'">Плитка</a>
                <a @click="view='list'">Список</a>
            </div>
        </div>

        <transition-group name="bowtiestranz" tag="div" class="bowties" :class="view">
            <bowtie v-for="bowtieItem in filteredItems"
                    :key="bowtieItem.id"
                    :bowtieItem="bowtieItem"
                    :active = "activeItem==bowtieItem.id? 'active' : '' "
                    :view = "view"
                    @click.native = "clickOnBowtie(bowtieItem.id,bowtieItem.url)">
            </bowtie>
        </transition-group>
    </div>
</template>
<script>
    import BowtieItem from './BowtieItem.vue';
    import BowtieService from '../BowtieService.js'

    export default {
        data(){
            return{
                BowtiesArray: [],
                activeItem: null,
                color: "",
                view: 'grid'
            }
        },
        computed:{
          filteredItems(){
              var bowtieArray = this.BowtiesArray,
                  searchString = this.color;

              if(!searchString){
                  return bowtieArray;
              }

              searchString = searchString.trim().toLowerCase();

              bowtieArray = bowtieArray.filter(function(item){
                  if(item.color.toLowerCase().indexOf(searchString) !== -1){
                      return item;
                  }
              });

              return bowtieArray;
          }
        },
        components:{
            'bowtie': BowtieItem
        },
        created(){
            this.BowtiesArray = BowtieService.BowtiesArray;
            BowtieService.$on("removeImage", () => {
                this.activeItem = null;
            })
        },
        methods: {
            clickOnBowtie(id,url){
                this.activeItem = id;
                BowtieService.selectBowtie(url);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .bowties-ttl{
        text-align: center;
        font-size: 24px;
        margin-bottom: 30px;
        font-weight: bold;
        color: #4b322e;
    }
    .bowties{
        max-height: 500px;
        overflow-y: auto;
        &.list{

        }
        &.grid{
            display: flex;
            flex-wrap: wrap;
        }
    }
    .select-line{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        &__ttl{
            flex:  0 0 auto;
            margin-right: 10px;
        }
    }
    .bowtiestranz{
        &-move { transition: all 600ms ease-in-out 50ms }
        &-enter-active { transition: all 300ms ease-out }

        &-leave-active {
            transition: all 200ms ease-in;
            position: absolute;
            z-index: 0;
        }

        &-enter,
        &-leave-to { opacity: 0 }
        &-enter { transform: scale(0.9) }
    }
</style>