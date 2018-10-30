/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./js/Array.js":
/*!*********************!*\
  !*** ./js/Array.js ***!
  \*********************/
/*! exports provided: Array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Array", function() { return Array; });
/**
 * Created by david on 10/17/2018.
 */
class Array {
  arrRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  rand(from = 0, to = 10) {
    return Math.floor(Math.random() * (to - from) + from);
  }

  randFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  min(array) {
    return Math.min.apply(Math, array);
  }

  max(array) {
    return Math.max.apply(Math, array);
  }

  range(obj) {
    let array = [];
    this.loop(obj, function (i) {
      array.push(i);
    });
    return array;
  }

  loop(obj = {}, callback) {
    obj.from = obj.from === undefined ? 0 : obj.from;
    obj.to = obj.to === undefined ? 9 : obj.to;
    obj.step = obj.step === undefined ? 1 : obj.step;

    for (let i = obj.from; i <= obj.to; i += obj.step) {
      callback(i);
    }
  }

}

/***/ }),

/***/ "./js/comp.btn.js":
/*!************************!*\
  !*** ./js/comp.btn.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./js/data.js");
/**
 * Created by david on 10/27/2018.
 */

Vue.component('btn', {
  template: `
        <button @click="toggleValue">
             <slot name="if_true" v-if='answer'></slot>
             <slot name="if_else"  v-else></slot>
        </button>
   `,
  data: function () {
    "use strict";

    return _data__WEBPACK_IMPORTED_MODULE_0__["sharedData"];
  },
  methods: {
    toggleValue() {
      "use strict";

      Events.$emit('toggleValue', "answer");
    }

  }
});

/***/ }),

/***/ "./js/comp.message.js":
/*!****************************!*\
  !*** ./js/comp.message.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by david on 10/27/2018.
 */
Vue.component('message', {
  props: ['title', 'body'],
  template: `
    <div class="message">
    <h1> {{title}}</h1>
    <p>{{body}}</p>
</div>
    
    `
});

/***/ }),

/***/ "./js/data.js":
/*!********************!*\
  !*** ./js/data.js ***!
  \********************/
/*! exports provided: sharedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedData", function() { return sharedData; });
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./js/Array.js");
/**
 * Created by david on 10/27/2018.
 */

var sharedData = {
  arr: new _Array__WEBPACK_IMPORTED_MODULE_0__["Array"](),
  show: false,
  answer: false,
  one: new _Array__WEBPACK_IMPORTED_MODULE_0__["Array"]().rand(10, 99),
  tests: [],
  weakNums: [],
  rightClass: {
    good: false
  },
  names: ['000 - МаНоМетр', '001 - МаНЖет', '002 - МоНеТа', '003 - МоНоКль', '004 - НуНЧаки', '005 - МеМБрана', '006 - МаНиШка', '007 - аНаНаС', '008 - НиМФа', '009 - НаМоРдник', '010 - НоЖНицы', '011 - Маленький оЖоГ', '012 - НоГТи', '013 - НоЖиК', '014 - Маленькая ЖуЧка', '015 - Маленький ГоБой', '016 - аНГеЛ', '017 - МаГиСтраль', '018 - НоЖоВка', '019 - аНГаР', '020 - МаяТНик', '021 - иНТеГрал', '022 - МеДиаТор', '023 - иНДиКатор', '024 - НиТоЧка', '025 - МоТоБлок', '026 - МеТЛа', '027 - уНиТаЗ', '028 - НаДФиль', '029 - МеТРо', '030 - МуХоМор', '031 - Майка КоЖаная', '032 - МаКеТ', '033 - МаКаКа', '034 - Навозная КуЧа', '035 - иНКуБатор', '036 - МуХоЛовка', '037 - МаКСим', '038 - МаХоВик', '039 - МиКРофон', '040 - НоЧНик', '041 - Маленький ЧиЖ', '042 - МеЧеТь', '043 - МяЧиК', '044 - Маленькая Чешуйчатая Щука', '045 - Набор ЩуПов', '046 - МоЧаЛка', '047 - НаЧеС', '048 - МяЧ Футбольный', '049 - Масть ЧеРви', '050 - Малиновый ПиоН', '051 - Много ПуГовиц', '052 - МоПеД', '053 - НаБойКи', '054 - Новая ПеЧь', '055 - Новая ПоБеда', '056 - аМПуЛа', '057 - НеБоСкреб', '058 - Натуральный БиФштекс', '059 - НаПеРсток', '060 - МеЛьНица', '061 - аНаЛьГин', '062 - МоЛоТок', '063 - МоЛоКо', '064 - НаЛиЧник', '065 - МоЛьБерт', '066 - МыШеЛовка', '067 - эМуЛьСия', '068 - НаШиВка', '069 - МыШЦа', '070 - НеЗНайка', '071 - МоЗГ', '072 - МоСТ', '073 - МаСКа', '074 - НоСоЧки', '075 - НеЗаБудка', '076 - НоСиЛки', '077 - НаСоС', '078 - НаЗВание', '079 - НоСоРог', '080 - Маленький ВиНтик', '081 - Набор ФуЖеров', '082 - НеВоД', '083 - Нейтральный ФиКсаж', '084 - дюйМоВоЧка', '085 - аМФиБия', '086 - НаВоЛочка', '087 - МаВЗолей', '088 - Новый ВэФ', '089 - аМФоРа', '090 - МаРМелад', '091 - МоРоЖеное', '092 - аМоРТизатор', '093 - МоРКовь', '094 - НаРуЧники', '095 - Медная ЦеПь', '096 - МаРЛя', '097 - МаРС', '098 - МуРаВей', '099 - НаРЦис', '100 - стол', '101 - ГоНГ', '102 - оГНеТушитель', '103 - ГаМаК', '104 - ЖеМЧуг', '105 - ГаМБургер', '106 - ЖеНьШень', '107 - ГНеЗдо', '108 - оГНиВо', '109 - ГеНеРатор', '110 - ГиГаНт', '111 - Голодная ГаГа', '112 - ЖГуТ', '113 - Голубая ГайКа', '114 - Желтая ГуЩа', '115 - Голубая Губная Помада', '116 - ЖиГуЛи', '117 - Глиняный ГуСь', '118 - Гнутые ГВозди', '119 - Голубые ГоРы', '120 - ЖеТоН', '121 - Железный ДоГ', '122 - Глиняная ДуДка', '123 - ГаДюКа', '124 - Жирная ТоЧка', '125 - оГромная ТуБа', '126 - ГаДаЛка', '127 - Гнутый ДиСк', '128 - Желтый ДиВан', '129 - ГиДРант', '130 - Голубое оКНо', '131 - Грубая КоЖа', '132 - ЖаКеТ', '133 - иГрушечный КоК', '134 - Гравийная КуЧа', '135 - Железный КаБлук', '136 - ЖиКЛер', '137 - ГазоноКоСилка', '138 - Голубой КоВрик', '139 - Географическая КаРта', '140 - Железный ЧаН', '141 - Жаропрочный ЧуГун', '142 - Железная ЩеТка', '143 - ЖуЧоК', '144 - Голубя ЧуЧело', '145 - Железный ЩуП', '146 - Железная ЧаШа', '147 - Говорящие ЧаСы', '148 - Желтый ЩаВель', '149 - Желтая ЧеРта', '150 - ГиПНоз', '151 - Желтая ПоГанка', '152 - Желтая ПоДушка', '153 - ГуБКа', '154 - ГуБаЧ', '155 - ГиППопотам', '156 - ГоБеЛен', '157 - ГиПС', '158 - Жигулевское ПиВо', '159 - ЖаБРы', '160 - ГЛяНцеватель', '161 - ГоЛоГрамма', '162 - ЖёЛуДь', '163 - ГаЛаКтика', '164 - ГаЛоЧка', '165 - ГЛоБус', '166 - ГЛуШитель', '167 - ГаЛСтук', '168 - ГоЛоВастик', '169 - ГаЛеРа', '170 - ГуСеНица', '171 - Грязная СаЖа', '172 - ГаЗеТа', '173 - ГаЗиК', '174 - Жук уСаЧ', '175 - ГаЗоПровод', '176 - ЖеЗЛ', '177 - одна (1) СоСалка', '178 - Железный СиФон', '179 - ГаЗиРовка', '180 - ГаВаНа', '181 - Голубой ФуЖер', '182 - ГоВяДина', '183 - Газовый ФаКел', '184 - ЖВаЧка', '185 - Глубинный ВиБратор', '186 - Железная ВиЛка', '187 - ГВоЗдодер', '188 - Глазированные ВаФли', '189 - ГВаРдеец', '190 - ГРаНата', '191 - ГаРаЖ', '192 - ГРаДусник', '193 - ГиРьКи', '194 - ГоРЧица', '195 - ГРиБ', '196 - ГРеЛка', '197 - оГРыЗок', '198 - ГРаФин', '199 - оГуРеЦ']
};
/*
function getNames () {
var ar = []; document.querySelectorAll('p font').forEach( (e) =>{ar.push( e.innerHTML )} );
    // console.log(ar);
 var string = '[';
 ar.forEach((e,i) => {
 if (i % 2 != 0) {
 string +=`'${e}',`
 }
 });
 string += "]"
    return string;
 }
* */

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ "./css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Array */ "./js/Array.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./js/data.js");
/* harmony import */ var _comp_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp.btn */ "./js/comp.btn.js");
/* harmony import */ var _comp_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp.message */ "./js/comp.message.js");
/* harmony import */ var _comp_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_comp_message__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Created by david on 10/24/2018.
 */





window.Events = new Vue();
global.vm = new Vue({
  el: "#vuejs",
  data: _data__WEBPACK_IMPORTED_MODULE_2__["sharedData"],
  computed: {
    number: function () {
      "use strict";

      let rand = this.arr.rand(0, 99);
      return this.addZero(rand);
    },
    all: function () {
      let rang = this.arr.range({
        from: 0,
        to: 99
      });
      let yvela = [];
      rang.forEach(function (a) {
        yvela.push(a < 10 ? `0${a}` : a);
      });
      return yvela;
    }
  },
  methods: {
    addZero: function (num) {
      return num < 10 ? `0${num}` : num;
    },
    next: function () {
      this.answer = false;
      this.one = this.addZero(this.arr.rand(0, 99));
      this.testQuestions(19);
    },
    testQuestions: function (num) {
      let This = this;
      let returnValue = [];
      this.arr.loop({
        to: num
      }, function (i) {
        let oneTestQ = This.addZero(This.arr.rand(0, 99));
        returnValue.push(oneTestQ);
      });
      let thRand = This.arr.rand(0, num + 1);
      returnValue[thRand] = this.one;
      this.tests = returnValue;
      console.log(this.tests);
      return returnValue;
    },

    isRight(e, bool) {
      "use strict";

      let trueAnswer = e.target.src.match(this.one);

      if (trueAnswer) {
        this.rightClass = {
          good: bool === this.one
        };
        setTimeout(() => {
          this.next();
          this.rightClass = {
            good: false
          };
        }, 500);
      } else {
        this.weakNums.push(this.one);
      }
    },

    toggleValue(val) {
      "use strict";

      val = val === true ? false : true;
    }

  },
  created: function () {
    Events.$on('toggleValue', fromEmit => {
      switch (fromEmit) {
        case "answer":
          this.answer = this.answer == true ? false : true;
          break;

        case 'show':
          this.show = this.show == true ? false : true;
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vanMvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcC5idG4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcC5tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL2pzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRhdmlkIG9uIDEwLzE3LzIwMTguXHJcbiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5IHtcbiAgYXJyUmVtb3ZlKGFyciwgdmFsdWUpIHtcbiAgICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gZWxlICE9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcmFuZChmcm9tID0gMCwgdG8gPSAxMCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodG8gLSBmcm9tKSArIGZyb20pO1xuICB9XG5cbiAgcmFuZEZyb20oYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gIH1cblxuICBtaW4oYXJyYXkpIHtcbiAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkoTWF0aCwgYXJyYXkpO1xuICB9XG5cbiAgbWF4KGFycmF5KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFycmF5KTtcbiAgfVxuXG4gIHJhbmdlKG9iaikge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIHRoaXMubG9vcChvYmosIGZ1bmN0aW9uIChpKSB7XG4gICAgICBhcnJheS5wdXNoKGkpO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGxvb3Aob2JqID0ge30sIGNhbGxiYWNrKSB7XG4gICAgb2JqLmZyb20gPSBvYmouZnJvbSA9PT0gdW5kZWZpbmVkID8gMCA6IG9iai5mcm9tO1xuICAgIG9iai50byA9IG9iai50byA9PT0gdW5kZWZpbmVkID8gOSA6IG9iai50bztcbiAgICBvYmouc3RlcCA9IG9iai5zdGVwID09PSB1bmRlZmluZWQgPyAxIDogb2JqLnN0ZXA7XG5cbiAgICBmb3IgKGxldCBpID0gb2JqLmZyb207IGkgPD0gb2JqLnRvOyBpICs9IG9iai5zdGVwKSB7XG4gICAgICBjYWxsYmFjayhpKTtcbiAgICB9XG4gIH1cblxufSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRhdmlkIG9uIDEwLzI3LzIwMTguXHJcbiAqL1xuaW1wb3J0IHsgc2hhcmVkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5WdWUuY29tcG9uZW50KCdidG4nLCB7XG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwidG9nZ2xlVmFsdWVcIj5cbiAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaWZfdHJ1ZVwiIHYtaWY9J2Fuc3dlcic+PC9zbG90PlxuICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJpZl9lbHNlXCIgIHYtZWxzZT48L3Nsb3Q+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgYCxcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgcmV0dXJuIHNoYXJlZERhdGE7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVWYWx1ZSgpIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBFdmVudHMuJGVtaXQoJ3RvZ2dsZVZhbHVlJywgXCJhbnN3ZXJcIik7XG4gICAgfVxuXG4gIH1cbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRhdmlkIG9uIDEwLzI3LzIwMTguXHJcbiAqL1xuVnVlLmNvbXBvbmVudCgnbWVzc2FnZScsIHtcbiAgcHJvcHM6IFsndGl0bGUnLCAnYm9keSddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgPGgxPiB7e3RpdGxlfX08L2gxPlxuICAgIDxwPnt7Ym9keX19PC9wPlxuPC9kaXY+XG4gICAgXG4gICAgYFxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGF2aWQgb24gMTAvMjcvMjAxOC5cclxuICovXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gJy4vQXJyYXknO1xuZXhwb3J0IHZhciBzaGFyZWREYXRhID0ge1xuICBhcnI6IG5ldyBBcnJheSgpLFxuICBzaG93OiBmYWxzZSxcbiAgYW5zd2VyOiBmYWxzZSxcbiAgb25lOiBuZXcgQXJyYXkoKS5yYW5kKDEwLCA5OSksXG4gIHRlc3RzOiBbXSxcbiAgd2Vha051bXM6IFtdLFxuICByaWdodENsYXNzOiB7XG4gICAgZ29vZDogZmFsc2VcbiAgfSxcbiAgbmFtZXM6IFsnMDAwIC0g0JzQsNCd0L7QnNC10YLRgCcsICcwMDEgLSDQnNCw0J3QltC10YInLCAnMDAyIC0g0JzQvtCd0LXQotCwJywgJzAwMyAtINCc0L7QndC+0JrQu9GMJywgJzAwNCAtINCd0YPQndCn0LDQutC4JywgJzAwNSAtINCc0LXQnNCR0YDQsNC90LAnLCAnMDA2IC0g0JzQsNCd0LjQqNC60LAnLCAnMDA3IC0g0LDQndCw0J3QsNChJywgJzAwOCAtINCd0LjQnNCk0LAnLCAnMDA5IC0g0J3QsNCc0L7QoNC00L3QuNC6JywgJzAxMCAtINCd0L7QltCd0LjRhtGLJywgJzAxMSAtINCc0LDQu9C10L3RjNC60LjQuSDQvtCW0L7QkycsICcwMTIgLSDQndC+0JPQotC4JywgJzAxMyAtINCd0L7QltC40JonLCAnMDE0IC0g0JzQsNC70LXQvdGM0LrQsNGPINCW0YPQp9C60LAnLCAnMDE1IC0g0JzQsNC70LXQvdGM0LrQuNC5INCT0L7QkdC+0LknLCAnMDE2IC0g0LDQndCT0LXQmycsICcwMTcgLSDQnNCw0JPQuNCh0YLRgNCw0LvRjCcsICcwMTggLSDQndC+0JbQvtCS0LrQsCcsICcwMTkgLSDQsNCd0JPQsNCgJywgJzAyMCAtINCc0LDRj9Ci0J3QuNC6JywgJzAyMSAtINC40J3QotC10JPRgNCw0LsnLCAnMDIyIC0g0JzQtdCU0LjQsNCi0L7RgCcsICcwMjMgLSDQuNCd0JTQuNCa0LDRgtC+0YAnLCAnMDI0IC0g0J3QuNCi0L7Qp9C60LAnLCAnMDI1IC0g0JzQvtCi0L7QkdC70L7QuicsICcwMjYgLSDQnNC10KLQm9CwJywgJzAyNyAtINGD0J3QuNCi0LDQlycsICcwMjggLSDQndCw0JTQpNC40LvRjCcsICcwMjkgLSDQnNC10KLQoNC+JywgJzAzMCAtINCc0YPQpdC+0JzQvtGAJywgJzAzMSAtINCc0LDQudC60LAg0JrQvtCW0LDQvdCw0Y8nLCAnMDMyIC0g0JzQsNCa0LXQoicsICcwMzMgLSDQnNCw0JrQsNCa0LAnLCAnMDM0IC0g0J3QsNCy0L7Qt9C90LDRjyDQmtGD0KfQsCcsICcwMzUgLSDQuNCd0JrRg9CR0LDRgtC+0YAnLCAnMDM2IC0g0JzRg9Cl0L7Qm9C+0LLQutCwJywgJzAzNyAtINCc0LDQmtCh0LjQvCcsICcwMzggLSDQnNCw0KXQvtCS0LjQuicsICcwMzkgLSDQnNC40JrQoNC+0YTQvtC9JywgJzA0MCAtINCd0L7Qp9Cd0LjQuicsICcwNDEgLSDQnNCw0LvQtdC90YzQutC40Lkg0KfQuNCWJywgJzA0MiAtINCc0LXQp9C10KLRjCcsICcwNDMgLSDQnNGP0KfQuNCaJywgJzA0NCAtINCc0LDQu9C10L3RjNC60LDRjyDQp9C10YjRg9C50YfQsNGC0LDRjyDQqdGD0LrQsCcsICcwNDUgLSDQndCw0LHQvtGAINCp0YPQn9C+0LInLCAnMDQ2IC0g0JzQvtCn0LDQm9C60LAnLCAnMDQ3IC0g0J3QsNCn0LXQoScsICcwNDggLSDQnNGP0Kcg0KTRg9GC0LHQvtC70YzQvdGL0LknLCAnMDQ5IC0g0JzQsNGB0YLRjCDQp9C10KDQstC4JywgJzA1MCAtINCc0LDQu9C40L3QvtCy0YvQuSDQn9C40L7QnScsICcwNTEgLSDQnNC90L7Qs9C+INCf0YPQk9C+0LLQuNGGJywgJzA1MiAtINCc0L7Qn9C10JQnLCAnMDUzIC0g0J3QsNCR0L7QudCa0LgnLCAnMDU0IC0g0J3QvtCy0LDRjyDQn9C10KfRjCcsICcwNTUgLSDQndC+0LLQsNGPINCf0L7QkdC10LTQsCcsICcwNTYgLSDQsNCc0J/Rg9Cb0LAnLCAnMDU3IC0g0J3QtdCR0L7QodC60YDQtdCxJywgJzA1OCAtINCd0LDRgtGD0YDQsNC70YzQvdGL0Lkg0JHQuNCk0YjRgtC10LrRgScsICcwNTkgLSDQndCw0J/QtdCg0YHRgtC+0LonLCAnMDYwIC0g0JzQtdCb0YzQndC40YbQsCcsICcwNjEgLSDQsNCd0LDQm9GM0JPQuNC9JywgJzA2MiAtINCc0L7Qm9C+0KLQvtC6JywgJzA2MyAtINCc0L7Qm9C+0JrQvicsICcwNjQgLSDQndCw0JvQuNCn0L3QuNC6JywgJzA2NSAtINCc0L7Qm9GM0JHQtdGA0YInLCAnMDY2IC0g0JzRi9Co0LXQm9C+0LLQutCwJywgJzA2NyAtINGN0JzRg9Cb0YzQodC40Y8nLCAnMDY4IC0g0J3QsNCo0LjQktC60LAnLCAnMDY5IC0g0JzRi9Co0KbQsCcsICcwNzAgLSDQndC10JfQndCw0LnQutCwJywgJzA3MSAtINCc0L7Ql9CTJywgJzA3MiAtINCc0L7QodCiJywgJzA3MyAtINCc0LDQodCa0LAnLCAnMDc0IC0g0J3QvtCh0L7Qp9C60LgnLCAnMDc1IC0g0J3QtdCX0LDQkdGD0LTQutCwJywgJzA3NiAtINCd0L7QodC40JvQutC4JywgJzA3NyAtINCd0LDQodC+0KEnLCAnMDc4IC0g0J3QsNCX0JLQsNC90LjQtScsICcwNzkgLSDQndC+0KHQvtCg0L7QsycsICcwODAgLSDQnNCw0LvQtdC90YzQutC40Lkg0JLQuNCd0YLQuNC6JywgJzA4MSAtINCd0LDQsdC+0YAg0KTRg9CW0LXRgNC+0LInLCAnMDgyIC0g0J3QtdCS0L7QlCcsICcwODMgLSDQndC10LnRgtGA0LDQu9GM0L3Ri9C5INCk0LjQmtGB0LDQticsICcwODQgLSDQtNGO0LnQnNC+0JLQvtCn0LrQsCcsICcwODUgLSDQsNCc0KTQuNCR0LjRjycsICcwODYgLSDQndCw0JLQvtCb0L7Rh9C60LAnLCAnMDg3IC0g0JzQsNCS0JfQvtC70LXQuScsICcwODggLSDQndC+0LLRi9C5INCS0Y3QpCcsICcwODkgLSDQsNCc0KTQvtCg0LAnLCAnMDkwIC0g0JzQsNCg0JzQtdC70LDQtCcsICcwOTEgLSDQnNC+0KDQvtCW0LXQvdC+0LUnLCAnMDkyIC0g0LDQnNC+0KDQotC40LfQsNGC0L7RgCcsICcwOTMgLSDQnNC+0KDQmtC+0LLRjCcsICcwOTQgLSDQndCw0KDRg9Cn0L3QuNC60LgnLCAnMDk1IC0g0JzQtdC00L3QsNGPINCm0LXQn9GMJywgJzA5NiAtINCc0LDQoNCb0Y8nLCAnMDk3IC0g0JzQsNCg0KEnLCAnMDk4IC0g0JzRg9Cg0LDQktC10LknLCAnMDk5IC0g0J3QsNCg0KbQuNGBJywgJzEwMCAtINGB0YLQvtC7JywgJzEwMSAtINCT0L7QndCTJywgJzEwMiAtINC+0JPQndC10KLRg9GI0LjRgtC10LvRjCcsICcxMDMgLSDQk9Cw0JzQsNCaJywgJzEwNCAtINCW0LXQnNCn0YPQsycsICcxMDUgLSDQk9Cw0JzQkdGD0YDQs9C10YAnLCAnMTA2IC0g0JbQtdCd0YzQqNC10L3RjCcsICcxMDcgLSDQk9Cd0LXQl9C00L4nLCAnMTA4IC0g0L7Qk9Cd0LjQktC+JywgJzEwOSAtINCT0LXQndC10KDQsNGC0L7RgCcsICcxMTAgLSDQk9C40JPQsNCd0YInLCAnMTExIC0g0JPQvtC70L7QtNC90LDRjyDQk9Cw0JPQsCcsICcxMTIgLSDQltCT0YPQoicsICcxMTMgLSDQk9C+0LvRg9Cx0LDRjyDQk9Cw0LnQmtCwJywgJzExNCAtINCW0LXQu9GC0LDRjyDQk9GD0KnQsCcsICcxMTUgLSDQk9C+0LvRg9Cx0LDRjyDQk9GD0LHQvdCw0Y8g0J/QvtC80LDQtNCwJywgJzExNiAtINCW0LjQk9GD0JvQuCcsICcxMTcgLSDQk9C70LjQvdGP0L3Ri9C5INCT0YPQodGMJywgJzExOCAtINCT0L3Rg9GC0YvQtSDQk9CS0L7Qt9C00LgnLCAnMTE5IC0g0JPQvtC70YPQsdGL0LUg0JPQvtCg0YsnLCAnMTIwIC0g0JbQtdCi0L7QnScsICcxMjEgLSDQltC10LvQtdC30L3Ri9C5INCU0L7QkycsICcxMjIgLSDQk9C70LjQvdGP0L3QsNGPINCU0YPQlNC60LAnLCAnMTIzIC0g0JPQsNCU0Y7QmtCwJywgJzEyNCAtINCW0LjRgNC90LDRjyDQotC+0KfQutCwJywgJzEyNSAtINC+0JPRgNC+0LzQvdCw0Y8g0KLRg9CR0LAnLCAnMTI2IC0g0JPQsNCU0LDQm9C60LAnLCAnMTI3IC0g0JPQvdGD0YLRi9C5INCU0LjQodC6JywgJzEyOCAtINCW0LXQu9GC0YvQuSDQlNC40JLQsNC9JywgJzEyOSAtINCT0LjQlNCg0LDQvdGCJywgJzEzMCAtINCT0L7Qu9GD0LHQvtC1INC+0JrQndC+JywgJzEzMSAtINCT0YDRg9Cx0LDRjyDQmtC+0JbQsCcsICcxMzIgLSDQltCw0JrQtdCiJywgJzEzMyAtINC40JPRgNGD0YjQtdGH0L3Ri9C5INCa0L7QmicsICcxMzQgLSDQk9GA0LDQstC40LnQvdCw0Y8g0JrRg9Cn0LAnLCAnMTM1IC0g0JbQtdC70LXQt9C90YvQuSDQmtCw0JHQu9GD0LonLCAnMTM2IC0g0JbQuNCa0JvQtdGAJywgJzEzNyAtINCT0LDQt9C+0L3QvtCa0L7QodC40LvQutCwJywgJzEzOCAtINCT0L7Qu9GD0LHQvtC5INCa0L7QktGA0LjQuicsICcxMzkgLSDQk9C10L7Qs9GA0LDRhNC40YfQtdGB0LrQsNGPINCa0LDQoNGC0LAnLCAnMTQwIC0g0JbQtdC70LXQt9C90YvQuSDQp9Cw0J0nLCAnMTQxIC0g0JbQsNGA0L7Qv9GA0L7Rh9C90YvQuSDQp9GD0JPRg9C9JywgJzE0MiAtINCW0LXQu9C10LfQvdCw0Y8g0KnQtdCi0LrQsCcsICcxNDMgLSDQltGD0KfQvtCaJywgJzE0NCAtINCT0L7Qu9GD0LHRjyDQp9GD0KfQtdC70L4nLCAnMTQ1IC0g0JbQtdC70LXQt9C90YvQuSDQqdGD0J8nLCAnMTQ2IC0g0JbQtdC70LXQt9C90LDRjyDQp9Cw0KjQsCcsICcxNDcgLSDQk9C+0LLQvtGA0Y/RidC40LUg0KfQsNCh0YsnLCAnMTQ4IC0g0JbQtdC70YLRi9C5INCp0LDQktC10LvRjCcsICcxNDkgLSDQltC10LvRgtCw0Y8g0KfQtdCg0YLQsCcsICcxNTAgLSDQk9C40J/QndC+0LcnLCAnMTUxIC0g0JbQtdC70YLQsNGPINCf0L7Qk9Cw0L3QutCwJywgJzE1MiAtINCW0LXQu9GC0LDRjyDQn9C+0JTRg9GI0LrQsCcsICcxNTMgLSDQk9GD0JHQmtCwJywgJzE1NCAtINCT0YPQkdCw0KcnLCAnMTU1IC0g0JPQuNCf0J/QvtC/0L7RgtCw0LwnLCAnMTU2IC0g0JPQvtCR0LXQm9C10L0nLCAnMTU3IC0g0JPQuNCf0KEnLCAnMTU4IC0g0JbQuNCz0YPQu9C10LLRgdC60L7QtSDQn9C40JLQvicsICcxNTkgLSDQltCw0JHQoNGLJywgJzE2MCAtINCT0JvRj9Cd0YbQtdCy0LDRgtC10LvRjCcsICcxNjEgLSDQk9C+0JvQvtCT0YDQsNC80LzQsCcsICcxNjIgLSDQltGR0JvRg9CU0YwnLCAnMTYzIC0g0JPQsNCb0LDQmtGC0LjQutCwJywgJzE2NCAtINCT0LDQm9C+0KfQutCwJywgJzE2NSAtINCT0JvQvtCR0YPRgScsICcxNjYgLSDQk9Cb0YPQqNC40YLQtdC70YwnLCAnMTY3IC0g0JPQsNCb0KHRgtGD0LonLCAnMTY4IC0g0JPQvtCb0L7QktCw0YHRgtC40LonLCAnMTY5IC0g0JPQsNCb0LXQoNCwJywgJzE3MCAtINCT0YPQodC10J3QuNGG0LAnLCAnMTcxIC0g0JPRgNGP0LfQvdCw0Y8g0KHQsNCW0LAnLCAnMTcyIC0g0JPQsNCX0LXQotCwJywgJzE3MyAtINCT0LDQl9C40JonLCAnMTc0IC0g0JbRg9C6INGD0KHQsNCnJywgJzE3NSAtINCT0LDQl9C+0J/RgNC+0LLQvtC0JywgJzE3NiAtINCW0LXQl9CbJywgJzE3NyAtINC+0LTQvdCwICgxKSDQodC+0KHQsNC70LrQsCcsICcxNzggLSDQltC10LvQtdC30L3Ri9C5INCh0LjQpNC+0L0nLCAnMTc5IC0g0JPQsNCX0LjQoNC+0LLQutCwJywgJzE4MCAtINCT0LDQktCw0J3QsCcsICcxODEgLSDQk9C+0LvRg9Cx0L7QuSDQpNGD0JbQtdGAJywgJzE4MiAtINCT0L7QktGP0JTQuNC90LAnLCAnMTgzIC0g0JPQsNC30L7QstGL0Lkg0KTQsNCa0LXQuycsICcxODQgLSDQltCS0LDQp9C60LAnLCAnMTg1IC0g0JPQu9GD0LHQuNC90L3Ri9C5INCS0LjQkdGA0LDRgtC+0YAnLCAnMTg2IC0g0JbQtdC70LXQt9C90LDRjyDQktC40JvQutCwJywgJzE4NyAtINCT0JLQvtCX0LTQvtC00LXRgCcsICcxODggLSDQk9C70LDQt9C40YDQvtCy0LDQvdC90YvQtSDQktCw0KTQu9C4JywgJzE4OSAtINCT0JLQsNCg0LTQtdC10YYnLCAnMTkwIC0g0JPQoNCw0J3QsNGC0LAnLCAnMTkxIC0g0JPQsNCg0LDQlicsICcxOTIgLSDQk9Cg0LDQlNGD0YHQvdC40LonLCAnMTkzIC0g0JPQuNCg0YzQmtC4JywgJzE5NCAtINCT0L7QoNCn0LjRhtCwJywgJzE5NSAtINCT0KDQuNCRJywgJzE5NiAtINCT0KDQtdCb0LrQsCcsICcxOTcgLSDQvtCT0KDRi9CX0L7QuicsICcxOTggLSDQk9Cg0LDQpNC40L0nLCAnMTk5IC0g0L7Qk9GD0KDQtdCmJ11cbn07XG4vKlxyXG5mdW5jdGlvbiBnZXROYW1lcyAoKSB7XHJcbnZhciBhciA9IFtdOyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwIGZvbnQnKS5mb3JFYWNoKCAoZSkgPT57YXIucHVzaCggZS5pbm5lckhUTUwgKX0gKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFyKTtcclxuIHZhciBzdHJpbmcgPSAnWyc7XHJcbiBhci5mb3JFYWNoKChlLGkpID0+IHtcclxuIGlmIChpICUgMiAhPSAwKSB7XHJcbiBzdHJpbmcgKz1gJyR7ZX0nLGBcclxuIH1cclxuIH0pO1xyXG4gc3RyaW5nICs9IFwiXVwiXHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG4gfVxyXG4qICovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGF2aWQgb24gMTAvMjQvMjAxOC5cclxuICovXG5pbXBvcnQgJy4uL2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IHsgQXJyYXkgfSBmcm9tICcuL0FycmF5JztcbmltcG9ydCB7IHNoYXJlZERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0ICcuL2NvbXAuYnRuJztcbmltcG9ydCAnLi9jb21wLm1lc3NhZ2UnO1xud2luZG93LkV2ZW50cyA9IG5ldyBWdWUoKTtcbmdsb2JhbC52bSA9IG5ldyBWdWUoe1xuICBlbDogXCIjdnVlanNcIixcbiAgZGF0YTogc2hhcmVkRGF0YSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBudW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBsZXQgcmFuZCA9IHRoaXMuYXJyLnJhbmQoMCwgOTkpO1xuICAgICAgcmV0dXJuIHRoaXMuYWRkWmVybyhyYW5kKTtcbiAgICB9LFxuICAgIGFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHJhbmcgPSB0aGlzLmFyci5yYW5nZSh7XG4gICAgICAgIGZyb206IDAsXG4gICAgICAgIHRvOiA5OVxuICAgICAgfSk7XG4gICAgICBsZXQgeXZlbGEgPSBbXTtcbiAgICAgIHJhbmcuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICB5dmVsYS5wdXNoKGEgPCAxMCA/IGAwJHthfWAgOiBhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHl2ZWxhO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFkZFplcm86IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgIHJldHVybiBudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bTtcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuYW5zd2VyID0gZmFsc2U7XG4gICAgICB0aGlzLm9uZSA9IHRoaXMuYWRkWmVybyh0aGlzLmFyci5yYW5kKDAsIDk5KSk7XG4gICAgICB0aGlzLnRlc3RRdWVzdGlvbnMoMTkpO1xuICAgIH0sXG4gICAgdGVzdFF1ZXN0aW9uczogZnVuY3Rpb24gKG51bSkge1xuICAgICAgbGV0IFRoaXMgPSB0aGlzO1xuICAgICAgbGV0IHJldHVyblZhbHVlID0gW107XG4gICAgICB0aGlzLmFyci5sb29wKHtcbiAgICAgICAgdG86IG51bVxuICAgICAgfSwgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgbGV0IG9uZVRlc3RRID0gVGhpcy5hZGRaZXJvKFRoaXMuYXJyLnJhbmQoMCwgOTkpKTtcbiAgICAgICAgcmV0dXJuVmFsdWUucHVzaChvbmVUZXN0USk7XG4gICAgICB9KTtcbiAgICAgIGxldCB0aFJhbmQgPSBUaGlzLmFyci5yYW5kKDAsIG51bSArIDEpO1xuICAgICAgcmV0dXJuVmFsdWVbdGhSYW5kXSA9IHRoaXMub25lO1xuICAgICAgdGhpcy50ZXN0cyA9IHJldHVyblZhbHVlO1xuICAgICAgY29uc29sZS5sb2codGhpcy50ZXN0cyk7XG4gICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfSxcblxuICAgIGlzUmlnaHQoZSwgYm9vbCkge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIGxldCB0cnVlQW5zd2VyID0gZS50YXJnZXQuc3JjLm1hdGNoKHRoaXMub25lKTtcblxuICAgICAgaWYgKHRydWVBbnN3ZXIpIHtcbiAgICAgICAgdGhpcy5yaWdodENsYXNzID0ge1xuICAgICAgICAgIGdvb2Q6IGJvb2wgPT09IHRoaXMub25lXG4gICAgICAgIH07XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIHRoaXMucmlnaHRDbGFzcyA9IHtcbiAgICAgICAgICAgIGdvb2Q6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2Vha051bXMucHVzaCh0aGlzLm9uZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHRvZ2dsZVZhbHVlKHZhbCkge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIHZhbCA9IHZhbCA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIEV2ZW50cy4kb24oJ3RvZ2dsZVZhbHVlJywgZnJvbUVtaXQgPT4ge1xuICAgICAgc3dpdGNoIChmcm9tRW1pdCkge1xuICAgICAgICBjYXNlIFwiYW5zd2VyXCI6XG4gICAgICAgICAgdGhpcy5hbnN3ZXIgPSB0aGlzLmFuc3dlciA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgIHRoaXMuc2hvdyA9IHRoaXMuc2hvdyA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=