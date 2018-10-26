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
        one: new Array().rand(10,99),
        tests: [],
        weakNums: [],
        rightClass: {good:false}
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
            this.answer = false;
            this.one = this.addZero(this.arr.rand(0,99));
            this.testQuestions(8);
        },
        testQuestions: function (num) {
            let This = this;
            let returnValue = [];

            this.arr.loop({to:num}, function (i) {
                let oneTestQ = This.addZero( This.arr.rand(0,99) );
                    returnValue.push( oneTestQ );
            });

            let thRand = This.arr.rand(0,num+1);

            returnValue[thRand] = this.one;

            this.tests= returnValue;

            console.log(this.tests);
            return returnValue;
        },
        isRight(e,bool){
            "use strict";
            console.log(e,bool);
            let trueAnswer = e.target.src.match(this.one);
            if(trueAnswer){
                this.rightClass = {good: bool===this.one};
                setTimeout(()=> {
                    this.next();
                    this.rightClass = {good: false}
                },1000);
            } else {
                this.weakNums.push(this.one);
            }
        }
    }

});