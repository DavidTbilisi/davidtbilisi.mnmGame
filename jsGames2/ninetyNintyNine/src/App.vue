<template>
    <div id="app" class="container-fluid">
        <div class="top">
            <div class="row">
                <div class="col-sm-4">
                    <span>min: </span>
                    <input v-model="min"
                            type="number"
                            min="0"
                            :max="parseInt(max)-2">
                </div>
                <div class="col-sm-4">
                    <h3 class="random-number"> {{ rand }}
                        <span v-show="title"> {{ images[ parseInt(rand) ].slice(4) }} </span>
                    </h3>
                </div>
                <div class="col-sm-4">
                    <span>max: </span>
                    <input v-model="max"
                           type="number"
                           :min="parseInt(min)+1"
                           max="999">
                </div>
            </div>
        </div>

        <div class="answer">
            <div class="row">
                <div class="col">
                    <img v-show="imgVisible"
                         @click="toggleTitle"
                         :src="imgSrc(images[parseInt(rand)])"
                         :alt="images[parseInt(rand)]"
                         :title="images[parseInt(rand)]">
                </div>
            </div>
        </div>

        <div class="test">
            <div class="row">
                <div class="col">
                    <span v-for="r in randArr"
                          :class="{correct:rand==r&&showCorrect}"
                          >
                    <img @click="testCorrect"
                         :src="imgSrc(parseInt(r) )"
                         :alt="images[parseInt(r)]"
                         :title="images[parseInt(r)]">
                        </span>
                </div>
            </div>
        </div>
        <div class="learn">
            <div class="row">
                <div class="col" v-show="learnShow">
                    <hr>
                    <div v-for="l in learn" class="one-item">
                        <img :src="imgSrc(parseInt(l))"
                             :alt="images[parseInt(l)]"
                             :title="images[parseInt(l)]">
                        <p> {{ images[parseInt(l)] }} </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div class="row">
                <div class="col-sm-4">
                    <button @click="toggleImage()">img</button>
                </div>
                <div class="col-sm-4">
                    <button @click="toggleLearn()">learn</button>
                </div>
                <div class="col-sm-4">
                    <button @click="next()">next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {names} from "./names";
    import {Array} from "./Array";
    import 'bootstrap/dist/css/bootstrap-grid.min.css';
    const a = new Array();
    export default {
        name: 'app',
        data () {
            return {
                title: false,
                imgVisible: false,
                images: names,
                imgN: 1,
                rand: 0,
                randArr: [],
                min: 0,
                max: 10,
//                learn: [],
                learnShow: false,
                showCorrect: false,
            }
        },
        filters: {
            int: function (val) {
                return parseInt(val)
            }
        },
        methods: {
            imgSrc(num){
                let number = this.addZeros(num);
                if (!NaN) {
                    return require(`./assets/images/${number}.jpg`);
                } else {
                    console.warn(number);
                }
            },
            addZeros(num) {
                let n = parseInt(num);
                return n < 10 ? `00${n}` : n < 100 ? `0${n}` : n;
            },
            toggleTitle(){
                this.title = this.title ? false : true;
            },

            toggleImage(){
                this.imgVisible = this.imgVisible ? false : true;

            },
            toggleLearn(){
                this.learnShow = this.learnShow ? false : true;
            },
            testCorrect(e){
                if( e.target.src.match(this.rand) ){
                    this.showCorrect = true;
                    setTimeout(() =>{
                        this.showCorrect = false;
                        this.next()
                    }, 5e2);
                } else {
                    console.log('note')
                }
            },
            genRandom(){
                let withoutZeros = a.rand(this.min, this.max);
                return this.addZeros(withoutZeros);
            },
            getRandArr(to) {
                let arr = [];
                let arr2 = [];
                a.loop({to: to}, () => {
                    let one = a.rand(this.min, this.max);
                    arr.push(one)
                });
                arr.forEach((thisOne) => {
                    arr2.push(this.addZeros(thisOne));
                });
                arr2[a.rand(0, to)] = this.rand;
                return arr2;
            },
            next(){
                this.rand = this.genRandom();
                this.randArr = this.getRandArr(7);
            },
        },

        mounted() {
            this.next();
        },

        computed: {
            learn: function () {
                let min = this.min;
                let max = this.max;
                return a.range({from: min, to: max})
            }
        }
    }

</script>

<style lang="scss">
    :root {
        font-size: 10px;
    }

    html, body, #app, button {
        font-size: 10rem;
    }

    #app {
        text-align: center;
    }

    .flex {
        display: flex;
    }

    .top {
        input {
            font-size: 5rem;
        }
    }

    .answer {
        img {
            width: 30rem;
        }
    }

    .test {
        img {
            width: 20rem;
        }
        span{
            display:inline-block;
        }
        .correct{
            position: relative;

            &:after{
                position: absolute;
                top:0;
                right: 0;
                content: '\2713';
                display: block;
                --size:100%;
                width:  var(--size);
                height: var(--size);
                color: #00ffaf;
                font-size:20rem;
                /*background: #ff000061;*/
            }
        }
    }

    .learn {
        .one-item {
            box-shadow: 0px 0px 10px -1px black;
            padding: 2rem 0;
            margin: 4rem 0;
        }
    }

    .bottom {
        position: fixed;
        bottom: 2rem;
        right: 50%;
        transform: translate(50%);
        width: 100%;
        button {
            padding: 1rem 3rem;
        }
    }

</style>
