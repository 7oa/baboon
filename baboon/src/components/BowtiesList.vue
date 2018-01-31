<template>
    <div class="bowties-bl">
        <div class="bowties-ttl">Выберите бабочку</div>
        <div class="select-line">
            <div class="select-line__ttl">Цвет</div>
            <select name="" id="" v-model="color">
                <option value="">Все</option>
                <option value="red">Красный</option>
                <option value="blue">Синий</option>
                <option value="brown">Коричневый</option>
                <option value="violet">Фиолетовый</option>
            </select>
        </div>
        <transition-group name="bowtiestranz" tag="div" class="bowties">
            <bowtie v-for="bowtieItem in filteredItems"
                    :key="bowtieItem.id"
                    :bowtieItem="bowtieItem"
                    :class = "{active: activeItem==bowtieItem.id}"
                    @click.native = "activeItem=bowtieItem.id"
                    @selectBowtie="selectBowtie">
            </bowtie>
        </transition-group>
    </div>
</template>
<script>
    import BowtieItem from '../components/BowtieItem.vue'

    const BowtiesArray = [
        {
            id: 1,
            art: '101BBK',
            description: 'Описание',
            url: '/images/bowties/101BBK_1.png',
            color: 'red',
            price: 600
        },
        {
            id: 2,
            art: '101BBK',
            description: 'Описание',
            url: '/images/bowties/101BBK_2.png',
            color: 'violet',
            price: 600
        },
        {
            id: 3,
            art: '105BBK',
            description: 'Описание',
            url: '/images/bowties/105BBK_1.png',
            color: 'blue',
            price: 600
        },
        {
            id: 4,
            art: '107BBK',
            description: 'Описание',
            url: '/images/bowties/107BBK_1.png',
            color: 'blue',
            price: 600
        },
        {
            id: 5,
            art: '109BBK',
            description: 'Описание',
            url: '/images/bowties/109BBK_1.png',
            color: 'brown',
            price: 500
        },
        {
            id: 6,
            art: '109BBK',
            description: 'Описание',
            url: '/images/bowties/109BBK_2.png',
            color: 'red',
            price: 400
        }
    ];

    export default {
        data(){
            return{
                BowtiesArray,
                activeItem: null,
                color: ""
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
        methods: {
            selectBowtie(url){
                this.$emit("selectBowtie", url)
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
        display: flex;
        flex-wrap: wrap;
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