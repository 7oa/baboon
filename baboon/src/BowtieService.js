import Vue from 'vue';

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

export default new Vue({
    data: {
        BowtiesArray
    },
    methods:{
        selectBowtie(url){
            this.$emit("selectBowtie", url)
        }
    }
});