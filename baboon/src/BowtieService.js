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
        id: 3,
        art: '105BBK',
        description: 'Описание',
        url: 'images/bowties/105BBK_1.png',
        color: 'blue',
        price: 670
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
        color: 'red',
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