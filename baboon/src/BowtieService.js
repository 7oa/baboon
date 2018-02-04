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
    {
        value: 'white',
        ttl: 'Белый'
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
    },
    {
        id: 34,
        art: '61BBK_1',
        description: 'Описание',
        url: 'images/bowties/61BBK_1.png',
        color: 'green',
        price: 690
    },
    {
        id: 35,
        art: '61BBK_2',
        description: 'Описание',
        url: 'images/bowties/61BBK_2.png',
        color: 'yellow,white',
        price: 690
    },
    {
        id: 36,
        art: '63BBK',
        description: 'Описание',
        url: 'images/bowties/63BBK.png',
        color: 'black',
        price: 690
    },
    {
        id: 37,
        art: '67BBK_1',
        description: 'Описание',
        url: 'images/bowties/67BBK_1.png',
        color: 'blue',
        price: 690
    },
    {
        id: 38,
        art: '69BBK_1',
        description: 'Описание',
        url: 'images/bowties/69BBK_1.png',
        color: 'blue',
        price: 690
    },
    {
        id: 39,
        art: '69BBK_2',
        description: 'Описание',
        url: 'images/bowties/69BBK_2.png',
        color: 'pink',
        price: 690
    },
    {
        id: 40,
        art: '77BBK_1',
        description: 'Описание',
        url: 'images/bowties/77BBK_1.png',
        color: 'red,orange',
        price: 690
    },
    {
        id: 41,
        art: '77BBK_2',
        description: 'Описание',
        url: 'images/bowties/77BBK_2.png',
        color: 'red,orange,black',
        price: 690
    },
    {
        id: 42,
        art: '78BBK_1',
        description: 'Описание',
        url: 'images/bowties/78BBK_1.png',
        color: 'gray',
        price: 690
    },
    {
        id: 43,
        art: '78BBK_2',
        description: 'Описание',
        url: 'images/bowties/78BBK_2.png',
        color: 'gray',
        price: 690
    },
    {
        id: 44,
        art: '80BBK_1',
        description: 'Описание',
        url: 'images/bowties/80BBK_1.png',
        color: 'blue',
        price: 690
    },
    {
        id: 45,
        art: '80BBK_2',
        description: 'Описание',
        url: 'images/bowties/80BBK_2.png',
        color: 'orange,brown',
        price: 690
    },
    {
        id: 46,
        art: '82BBK_1',
        description: 'Описание',
        url: 'images/bowties/82BBK_1.png',
        color: 'black,blue,gray',
        price: 690
    },
    {
        id: 47,
        art: '82BBK_2',
        description: 'Описание',
        url: 'images/bowties/82BBK_2.png',
        color: 'red,blue',
        price: 690
    },
    {
        id: 48,
        art: '83BBK_1',
        description: 'Описание',
        url: 'images/bowties/83BBK_1.png',
        color: 'brown,gray',
        price: 690
    },
    {
        id: 49,
        art: '83BBK_2',
        description: 'Описание',
        url: 'images/bowties/83BBK_2.png',
        color: 'brown,gray',
        price: 690
    },
    {
        id: 50,
        art: '85BBK_1',
        description: 'Описание',
        url: 'images/bowties/85BBK_1.png',
        color: 'green',
        price: 690
    },
    {
        id: 51,
        art: '85BBK_2',
        description: 'Описание',
        url: 'images/bowties/85BBK_2.png',
        color: 'orange',
        price: 690
    },
    {
        id: 52,
        art: '86BBK_1',
        description: 'Описание',
        url: 'images/bowties/86BBK_1.png',
        color: 'white',
        price: 690
    },
    {
        id: 53,
        art: '86BBK_2',
        description: 'Описание',
        url: 'images/bowties/86BBK_2.png',
        color: 'gray',
        price: 690
    },
    {
        id: 54,
        art: '87BBK_1',
        description: 'Описание',
        url: 'images/bowties/87BBK_1.png',
        color: 'gray,black',
        price: 690
    },
    {
        id: 55,
        art: '87BBK_2',
        description: 'Описание',
        url: 'images/bowties/87BBK_2.png',
        color: 'gray,black,brown',
        price: 690
    },
    {
        id: 56,
        art: '90BBK_1',
        description: 'Описание',
        url: 'images/bowties/90BBK_1.png',
        color: 'orange,blue',
        price: 690
    },
    {
        id: 57,
        art: '90BBK_2',
        description: 'Описание',
        url: 'images/bowties/90BBK_2.png',
        color: 'gray,black',
        price: 690
    },
    {
        id: 58,
        art: '93BBK_1',
        description: 'Описание',
        url: 'images/bowties/93BBK_1.png',
        color: 'white',
        price: 690
    },
    {
        id: 59,
        art: '93BBK_2',
        description: 'Описание',
        url: 'images/bowties/93BBK_2.png',
        color: 'gray,black',
        price: 690
    },
    {
        id: 60,
        art: '94BBK_1',
        description: 'Описание',
        url: 'images/bowties/94BBK_1.png',
        color: 'orange',
        price: 690
    },
    {
        id: 61,
        art: '94BBK_2',
        description: 'Описание',
        url: 'images/bowties/94BBK_2.png',
        color: 'brown',
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