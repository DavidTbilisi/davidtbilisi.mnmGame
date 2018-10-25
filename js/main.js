/**
 * Created by david on 10/24/2018.
 */
import '../css/main.scss';
import {Array} from './Array';
global.vm = new Vue({
    el: "#vuejs",
    data: {
        arr: new Array(),
        show: false,
        answer: false,
        one: new Array().rand(10,99)
    },
    computed:{
        number: function () {
            "use strict";
            let rand = this.arr.rand(0,99);
            return this.addZero(rand);
        },

        all: function () {
            let rang = this.arr.range({from:0, to:99});
            let yvela = [];
            rang.forEach(function (a) {
                yvela.push(a<10?`0${a}`:a)
            });
            return yvela;
        }
    },
    methods: {
        addZero: function (num) {
            return num < 10 ? `0${num}`: num;
        },

        next: function () {
           this.one = this.addZero(this.arr.rand(0,99));
        }
    }

});