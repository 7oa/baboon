<template>
    <div class="bowties-bl">
        <div class="tools">
            <div class="row">
                <div class="col">
                    <div class="select-line">
                        <div class="select-line__ttl">Цвет</div>
                        <select class="form-control" v-model="color">
                            <option v-for="colors in ColorsArray" :value="colors.value">{{colors.ttl}}</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="view-list">
                        <a @click="view='grid'" class="view view_grid" :class="view=='grid'?'active':''"></a>
                        <a @click="view='list'" class="view view_list" :class="view=='list'?'active':''"></a>
                    </div>

                </div>
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
                ColorsArray: [],
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
            this.ColorsArray = BowtieService.colors;
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
    .bowties-bl{
        border: 1px solid #ccc;
        height: 615px;
    }
    .tools{
        border-bottom: 1px solid #ccc;
        padding: 10px;
        box-sizing: border-box;
        background-color: #eee;
    }
    .bowties-ttl{
        text-align: center;
        font-size: 24px;
        margin-bottom: 30px;
        font-weight: bold;
        color: #4b322e;
    }
    .bowties{
        max-height: 554px;
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
    .view-list{
        display: flex;
        justify-content: flex-end;
    }
    .view{
        display: block;
        width: 38px;
        height: 38px;
        cursor: pointer;
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: center;
        margin-left: 5px;
        border: 1px solid #ccc;
        padding: 5px;
        border-radius: 3px;
        background-color: #fff;
        transition: .5s;
        &_grid{
            background-image: url('/images/menu.svg');
        }
        &_list{
            background-image: url('/images/list-with-dots.svg');
        }
        &.active{
            border-color: rgba(255, 50, 50, 0.5);
            -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 50, 50, 0.75);
            -moz-box-shadow:    0px 0px 5px 0px rgba(255, 50, 50, 0.75);
            box-shadow: 0px 0px 5px 0px rgba(255, 50, 50, 0.75);
        }
    }
</style>