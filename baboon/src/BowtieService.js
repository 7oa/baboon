import Vue from 'vue';

const colors = [
    {
        value: '',
        ttl: 'Все'
    },
    {
        value: 'red',
        ttl: 'Красный'
    },
    {
        value: 'orange',
        ttl: 'Оранжевый'
    },
    {
        value: 'yellow',
        ttl: 'Желтый'
    },
    {
        value: 'blue',
        ttl: 'Синий'
    },
    {
        value: 'brown',
        ttl: 'Коричневый'
    },
    {
        value: 'violet',
        ttl: 'Фиолетовый'
    },
    {
        value: 'bordo',
        ttl: 'Бордовый'
    },
    {
        value: 'green',
        ttl: 'Зеленый'
    },
    {
        value: 'gray',
        ttl: 'Серый'
    },
    {
        value: 'black',
        ttl: 'Черный'
    },
];
const BowtiesArray = [
    {
        id: 1,
        art: '101BBK',
        description: 'Описание',
        url: 'images/bowties/101BBK_1.png',
        color: 'red',
        price: 600
    },
    {
        id: 2,
        art: '101BBK2',
        description: 'Описание',
        url: 'images/bowties/101BBK_2.png',
        color: 'violet',
        price: 650
    },
    {
        id: 4,
        art: '107BBK',
        description: 'Описание',
        url: 'images/bowties/107BBK_1.png',
        color: 'blue',
        price: 680
    },
    {
        id: 5,
        art: '109BBK',
        description: 'Описание',
        url: 'images/bowties/109BBK_1.png',
        color: 'brown',
        price: 500
    },
    {
        id: 6,
        art: '109BBK2',
        description: 'Описание',
        url: 'images/bowties/109BBK_2.png',
        color: 'red,bordo',
        price: 400
    },
    {
        id: 7,
        art: '110BBK_1',
        description: 'Описание',
        url: 'images/bowties/110BBK_1.png',
        color: 'black',
        price: 690
    },
    {
        id: 8,
        art: '110BBK_2',
        description: 'Описание',
        url: 'images/bowties/110BBK_2.png',
        color: 'black',
        price: 690
    },
    {
        id: 9,
        art: '111BBK_1',
        description: 'Описание',
        url: 'images/bowties/111BBK_1.png',
        color: 'brown',
        price: 690
    },
    {
        id: 10,
        art: '111BBK_2',
        description: 'Описание',
        url: 'images/bowties/111BBK_2.png',
        color: 'black,gray',
        price: 690
    },
    {
        id: 11,
        art: '112BBK_1',
        description: 'Описание',
        url: 'images/bowties/112BBK_1.png',
        color: 'brown,green',
        price: 690
    },
    {
        id: 12,
        art: '112BBK_2',
        description: 'Описание',
        url: 'images/bowties/112BBK_2.png',
        color: 'brown',
        price: 690
    },
    {
        id: 13,
        art: '113BBK_2',
        description: 'Описание',
        url: 'images/bowties/113BBK_2.png',
        color: 'blue',
        price: 690
    },
    {
        id: 14,
        art: '97BBK_1',
        description: 'Описание',
        url: 'images/bowties/97BBK_1.png',
        color: 'red',
        price: 690
    },
    {
        id: 15,
        art: '97BBK_2',
        description: 'Описание',
        url: 'images/bowties/97BBK_2.png',
        color: 'black',
        price: 690
    },
    {
        id: 16,
        art: '99BBK_1',
        description: 'Описание',
        url: 'images/bowties/99BBK_1.png',
        color: 'red',
        price: 690
    },
    {
        id: 17,
        art: '99BBK_2',
        description: 'Описание',
        url: 'images/bowties/99BBK_2.png',
        color: 'violet',
        price: 690
    },
    {
        id: 18,
        art: '100BBK_1',
        description: 'Описание',
        url: 'images/bowties/100BBK_1.png',
        color: 'green',
        price: 690
    },
    {
        id: 19,
        art: '100BBK_2',
        description: 'Описание',
        url: 'images/bowties/100BBK_2.png',
        color: 'red,black',
        price: 690
    },
    {
        id: 20,
        art: '102BBK_1',
        description: 'Описание',
        url: 'images/bowties/102BBK_1.png',
        color: 'red',
        price: 690
    },
    {
        id: 21,
        art: '102BBK_2',
        description: 'Описание',
        url: 'images/bowties/102BBK_2.png',
        color: 'blue,violet',
        price: 690
    },
    {
        id: 22,
        art: '103BBK_1',
        description: 'Описание',
        url: 'images/bowties/103BBK_1.png',
        color: 'orange,yellow',
        price: 690
    },
    {
        id: 23,
        art: '103BBK_2',
        description: 'Описание',
        url: 'images/bowties/103BBK_2.png',
        color: 'black,gray',
        price: 690
    },
    {
        id: 24,
        art: '104BBK_1',
        description: 'Описание',
        url: 'images/bowties/104BBK_1.png',
        color: 'orange',
        price: 690
    },
    {
        id: 25,
        art: '104BBK_2',
        description: 'Описание',
        url: 'images/bowties/104BBK_2.png',
        color: 'violet',
        price: 690
    },
    {
        id: 26,
        art: '105BBK_1',
        description: 'Описание',
        url: 'images/bowties/105BBK_1.png',
        color: 'blue',
        price: 690
    },
    {
        id: 27,
        art: '105BBK_2',
        description: 'Описание',
        url: 'images/bowties/105BBK_2.png',
        color: 'bordo',
        price: 690
    },
    {
        id: 28,
        art: '106BBK_1',
        description: 'Описание',
        url: 'images/bowties/106BBK_1.png',
        color: 'yellow',
        price: 690
    },
    {
        id: 29,
        art: '106BBK_2',
        description: 'Описание',
        url: 'images/bowties/106BBK_2.png',
        color: 'green',
        price: 690
    },
    {
        id: 30,
        art: '107BBK_2',
        description: 'Описание',
        url: 'images/bowties/107BBK_2.png',
        color: 'black',
        price: 690
    },
    {
        id: 31,
        art: '108BBK_1',
        description: 'Описание',
        url: 'images/bowties/108BBK_1.png',
        color: 'yellow',
        price: 690
    },
    {
        id: 32,
        art: '108BBK_2',
        description: 'Описание',
        url: 'images/bowties/108BBK_2.png',
        color: 'gray',
        price: 690
    },
    {
        id: 33,
        art: '113BBK_1',
        description: 'Описание',
        url: 'images/bowties/113BBK_1.png',
        color: 'gray,black',
        price: 690
    }
];

export default new Vue({
    data: {
        BowtiesArray,
        colors
    },
    methods:{
        selectBowtie(url){
            this.$emit("selectBowtie", url);
        },
        removeImage(){
            this.$emit("removeImage");
        }
    }
});