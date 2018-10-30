/**
 * Created by david on 10/27/2018.
 */
import {sharedData} from './data';

Vue.component('btn', {
    template: `
        <button @click="toggleValue">
             <slot name="if_true" v-if='answer'></slot>
             <slot name="if_else"  v-else></slot>
        </button>
   `,
    data: function () {
        "use strict";
        return sharedData;
    },
    methods:{
        toggleValue(){
            "use strict";
            Events.$emit('toggleValue', "answer");
        }
    }
});