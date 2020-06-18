/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_Template_Global_Global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _js_Template_Table_Table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _js_Template_Table_Row_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _js_Template_Table_Column_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _assets_icons_01_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _assets_icons_02_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _assets_icons_03_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _assets_icons_04_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _assets_icons_05_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _assets_icons_06_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);












const axios = __webpack_require__(15);

const url = 'https://api.covid19api.com/summary';
const parent = document.createElement("div");
const global = new _js_Template_Global_Global_js__WEBPACK_IMPORTED_MODULE_1__["default"](parent);
const table = new _js_Template_Table_Table_js__WEBPACK_IMPORTED_MODULE_2__["default"](parent); // Get data from API

async function getData(url) {
  let request;

  try {
    request = await axios.get(url);
    localStorage.setItem('newConfirmed', request.data.Global.NewConfirmed);
    const result = await Promise.all([fetch(createNav(request.data.Date)), fetch(createGlobal(request.data.Global)), fetch(createCountries(request.data.Countries))]);
    return {
      request,
      global: result[0],
      country: result[1]
    };
  } catch (error) {
    console.log(error);
  }
}

getData(url);

function createNav(response) {
  const data = response;
  document.getElementById('data').innerHTML = splitData(data);
  return;
} // Table head, Object with name & icon


const header = [{
  name: 'Country',
  isSortable: true
}, {
  name: 'New Confirmed',
  isSortable: true
}, {
  name: 'Total Confirmed',
  isSortable: true
}, {
  name: 'New Deaths',
  isSortable: true
}, {
  name: 'Total Deaths',
  isSortable: true
}, {
  name: 'New Recovered',
  isSortable: true
}, {
  name: 'Total Recovered',
  isSortable: true
}]; // Create global data section

const createGlobal = response => {
  const data = response;
  const globalData = [{
    data: data.NewConfirmed,
    title: 'Nuovi Confermati',
    icon: 1
  }, {
    data: data.TotalConfirmed,
    title: 'Totale Confermati',
    icon: 2
  }, {
    data: data.NewDeaths,
    title: 'Nuovi Decessi',
    icon: 3
  }, {
    data: data.TotalDeaths,
    title: 'Totale Confermati',
    icon: 4
  }, {
    data: data.NewRecovered,
    title: 'Nuovi Ricoveri',
    icon: 5
  }, {
    data: data.TotalRecovered,
    title: 'Totale Confermati',
    icon: 6
  }];
  globalData.forEach(addGlobal);
  const setBoxes = global.setBox();
  global.append(parent, setBoxes);
}; // Create box for the global section


const addGlobal = data => {
  global.addBox(data.data, data.title, data.icon);
}; // Create Table function


const createCountries = response => {
  const countries = response;
  header.forEach(addHeaderToTable);
  countries.forEach(addRowToTable);
  const addTable = table.printTable();
  table.append(parent, addTable);
}; // Create table head function


const addHeaderToTable = header => {
  const myColumn = new _js_Template_Table_Column_js__WEBPACK_IMPORTED_MODULE_4__["default"](header);
  const [x, y] = myColumn.getHtml();
  table.addColumn(x, y);
}; // Create table body function


const addRowToTable = countries => {
  const myRow = new _js_Template_Table_Row_js__WEBPACK_IMPORTED_MODULE_3__["default"](countries);
  const getRow = myRow.getHtml();
  table.addRow(getRow);
}; // Split data function


const splitData = x => {
  const string = x.split('T');
  const left = string[0];
  const split = left.split('-');
  const day = split[2];
  const month = split[1];
  const year = split[0];
  const result = 'Data: ' + day + '-' + month + '-' + year;
  return result;
}; // Function invoked onclick (table <th>)


function sortTest(n) {
  table.sortRows(n); // Print table

  const addTable = table.printTable(); // Append table to DOM

  table.append(parent, addTable);
}

window.sortTest = sortTest;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap);"]);
// Module
exports.push([module.i, ".navContainer .nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 64px;\n  background-color: #3f51b5;\n  color: white;\n  font-weight: 300;\n  padding: 0px 16px;\n}\n.navContainer .nav .navTitle {\n  font-size: 20px;\n}\n.navContainer .nav .navData {\n  font-size: 20px;\n}\n\n.containerGlobal {\n  background-color: #ecf0f1;\n}\n.containerGlobal .globalTitle {\n  font-size: 2em;\n  text-align: center;\n  padding: 16px;\n}\n.containerGlobal .globalSub #sectionGlobal {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  flex-direction: row;\n}\n.containerGlobal .globalSub #sectionGlobal .globalItem {\n  flex: 33%;\n  flex-direction: column;\n  text-align: center;\n  padding-bottom: 16px;\n}\n.containerGlobal .globalSub #sectionGlobal .globalItem img {\n  width: 60px;\n  height: auto;\n}\n.containerGlobal .globalSub #sectionGlobal .globalItem .itemTitle {\n  font-size: 1.3em;\n  font-weight: 400;\n}\n.containerGlobal .globalSub #sectionGlobal .globalItem .itemData {\n  font-size: 1em;\n  font-weight: 300;\n}\n\n.nazioneContainer {\n  padding: 16px;\n  background-color: #f5f6fa;\n}\n.nazioneContainer .nazioneTitle {\n  text-align: center;\n  font-size: 2em;\n}\ntd,\nth {\n  border-bottom: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntable {\n  width: 100%;\n  padding: 16px;\n}\n\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n}", "",{"version":3,"sources":["/Users/sandrogreco/Progetti/Work/SeoTesterOnline/Progetto/covid19-seotesteronline/src/scss/components/_navbar.scss","style.scss","/Users/sandrogreco/Progetti/Work/SeoTesterOnline/Progetto/covid19-seotesteronline/src/scss/components/_global.scss","/Users/sandrogreco/Progetti/Work/SeoTesterOnline/Progetto/covid19-seotesteronline/src/scss/components/_nazione.scss","/Users/sandrogreco/Progetti/Work/SeoTesterOnline/Progetto/covid19-seotesteronline/src/scss/style.scss"],"names":[],"mappings":"AAEE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EAEA,YAAA;EACA,yBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;ACDJ;ADEI;EACE,eAAA;ACAN;ADEI;EACE,eAAA;ACAN;;ACdA;EAEE,yBAJkB;ADoBpB;ACfE;EACE,cAAA;EACA,kBAAA;EACA,aAAA;ADiBJ;ACdI;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,UAAA;EACA,mBAAA;ADgBN;ACfM;EACE,SAAA;EACA,sBAAA;EACA,kBAAA;EACA,oBAAA;ADiBR;ACfQ;EACE,WAAA;EACA,YAAA;ADiBV;ACfQ;EACE,gBAAA;EACA,gBAAA;ADiBV;ACdQ;EACE,cAAA;EACA,gBAAA;ADgBV;;AEhDA;EAEE,aAAA;EACA,yBALmB;AFuDrB;AEjDE;EACE,kBAAA;EACA,cAAA;AFmDJ;AE5CA;;EAEE,gCAAA;EACA,gBAAA;EACA,YAAA;AF8CF;;AE3CA;EACE,WAAA;EACA,aAAA;AF8CF;;AGjEA;;EAEE,SAAA;EACA,iCAAA;AHoEF","file":"style.scss","sourcesContent":[".navContainer {\n  // width: 100%;\n  .nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    // width: 100%;\n    height: 64px;\n    background-color: rgb(63, 81, 181);\n    color: white;\n    font-weight: 300;\n    padding: 0px 16px;\n    .navTitle {\n      font-size: 20px;\n    }\n    .navData {\n      font-size: 20px;\n    }\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap\");\n.navContainer .nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 64px;\n  background-color: #3f51b5;\n  color: white;\n  font-weight: 300;\n  padding: 0px 16px;\n}\n.navContainer .nav .navTitle {\n  font-size: 20px;\n}\n.navContainer .nav .navData {\n  font-size: 20px;\n}\n\n.containerGlobal {\n  background-color: #ecf0f1;\n}\n.containerGlobal .globalTitle {\n  font-size: 2em;\n  text-align: center;\n  padding: 16px;\n}\n.containerGlobal .globalSub #sectionGlobal {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  flex-direction: row;\n}\n.containerGlobal .globalSub #sectionGlobal .globalItem {\n  flex: 33%;\n  flex-direction: column;\n  text-align: center;\n  padding-bottom: 16px;\n}\n.containerGlobal .globalSub #sectionGlobal .globalItem img {\n  width: 60px;\n  height: auto;\n}\n.containerGlobal .globalSub #sectionGlobal .globalItem .itemTitle {\n  font-size: 1.3em;\n  font-weight: 400;\n}\n.containerGlobal .globalSub #sectionGlobal .globalItem .itemData {\n  font-size: 1em;\n  font-weight: 300;\n}\n\n.nazioneContainer {\n  padding: 16px;\n  background-color: #f5f6fa;\n}\n.nazioneContainer .nazioneTitle {\n  text-align: center;\n  font-size: 2em;\n}\ntd,\nth {\n  border-bottom: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntable {\n  width: 100%;\n  padding: 16px;\n}\n\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n}","$global-background: #ecf0f1;\n\n.containerGlobal {\n  // width: 100%;\n  background-color: $global-background;\n  .globalTitle {\n    font-size: 2em;\n    text-align: center;\n    padding: 16px;\n  }\n  .globalSub {\n    #sectionGlobal {\n      display: flex;\n      flex-wrap: wrap;\n      margin: 0;\n      padding: 0;\n      flex-direction: row;\n      .globalItem {\n        flex: 33%;\n        flex-direction: column;\n        text-align: center;\n        padding-bottom: 16px;\n        // background-color: red;\n        img {\n          width: 60px;\n          height: auto;\n        }\n        .itemTitle {\n          font-size: 1.3em;\n          font-weight: 400;\n        }\n\n        .itemData {\n          font-size: 1em;\n          font-weight: 300;\n        }\n      }\n    }\n  }\n}\n","$nazione-background: #f5f6fa;\n\n.nazioneContainer {\n  // width: 100%;\n  padding: 16px;\n  background-color: $nazione-background;\n  .nazioneTitle {\n    text-align: center;\n    font-size: 2em;\n  }\n  .filtroContainer {\n    // width: 100%;\n  }\n}\n\ntd,\nth {\n  border-bottom: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntable {\n  width: 100%;\n  padding: 16px;\n}\n","@import \"./components/navbar\";\n@import \"./components/global\";\n@import \"./components/nazione\";\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap\");\n\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Global; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Classe che serve per la gestione dei dati globali.
class Global {
  constructor(_parent) {
    _defineProperty(this, "boxes", []);

    _defineProperty(this, "formattedBoxes", '');

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "append", (parent, html) => {
      if (!(parent instanceof HTMLDivElement)) {
        throw new Error('parent must be a HTMLDivElement object');
      }

      if (typeof html !== 'string') {
        throw new Error('html must be a string');
      }

      const main = document.getElementById('sectionGlobal');
      main.innerHTML = html;
    });

    _defineProperty(this, "addBox", (columnValue, columnTitle, columnImg) => {
      // console.log(columnValue, columnTitle, columnImg);
      if (typeof columnTitle != 'string') {
        throw new Error('columnTitle must be a string');
      }

      if (typeof columnValue != 'number') {
        throw new Error('columnValue must be a numeric value');
      }

      this.boxes.push({
        title: columnTitle,
        value: columnValue,
        img: columnImg
      }); // console.log(this.boxes);
    });

    _defineProperty(this, "isAValidHtmlElement", parent => {
      return parent instanceof HTMLDivElement || parent instanceof HTMLBodyElement;
    });

    if (!this.isAValidHtmlElement(_parent)) {
      throw new Error('parent must be a HTMLDivElement');
    }

    this.parent = _parent;
  }

  setBox() {
    let formatX = '';
    let counter = 1;

    for (const box of this.boxes) {
      formatX += `
      <div class="globalItem">
        <img src="src/assets/icons/0${counter}.svg">
        <div class="itemTitle">${box.title}</div>
        <div class="itemData">${box.value}</div>
      </div>`;
      counter += 1;
    }

    return formatX;
  }

  formatBoxes() {
    this.formattedBoxes += `
    <div class="globalItem">
      <img src="src/assets/icons/0${counter}.svg">
      <div class="itemTitle">${boxes.title}</div>
      <div class="itemData">${boxes.value}</div>
    </div>`;
    counter += 1;
  }

}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Table {
  constructor(parent) {
    _defineProperty(this, "columns", []);

    _defineProperty(this, "rows", []);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "sortedRows", []);

    _defineProperty(this, "direction", 0);

    _defineProperty(this, "sortRows", n => {
      switch (n) {
        case 'Country':
          this.sortByValue('country');
          break;

        case 'New Confirmed':
          this.sortByValue('newConfirmed');
          break;

        case 'Total Confirmed':
          this.sortByValue('totalConfirmed');
          break;

        case 'New Deaths':
          this.sortByValue('newDeaths');
          break;

        case 'Total Deaths':
          this.sortByValue('totalDeaths');
          break;

        case 'New Recovered':
          this.sortByValue('newRecovered');
          break;

        case 'Total Recovered':
          this.sortByValue('totalRecovered');
          break;

        default:
          return;
      }
    });

    _defineProperty(this, "changeDirection", () => {
      if (this.direction == 0) {
        this.direction = 1;
        return 'decr';
      } else {
        this.direction = 0;
        return 'asc';
      }
    });

    _defineProperty(this, "sortByValue", n => {
      const direction = this.changeDirection();

      if (direction === 'asc') {
        this.rows.sort(function (a, b) {
          if (a[n] < b[n]) {
            return -1;
          }

          if (a[n] > b[n]) {
            return 1;
          }

          return 0;
        });
      } else if (direction === 'decr') {
        this.rows.sort(function (a, b) {
          if (a[n] > b[n]) {
            return -1;
          }

          if (a[n] < b[n]) {
            return 1;
          }

          return 0;
        });
      }
    });

    if (!this.isAValidHtmlElement(parent)) {
      throw new Error('parent must be a HTMLDivElement object');
    }

    this.parent = parent;
  }

  append(parent, html) {
    if (!(parent instanceof HTMLDivElement)) {
      throw new Error('parent must be a HTMLDivElement object');
    }

    if (typeof html !== 'string') {
      throw new Error('html must be a string');
    } // Append table on div id="countries"


    const main = document.getElementById('countries');
    main.innerHTML = html;
  }

  printTable() {
    const tableHeader = this.getHeader();
    const tableBody = this.getBody();
    return `
        <table id="myTable">
            <thead>
            ${tableHeader}
            </thead>
            <tbody>
            ${tableBody}
            </tbody>
        </table>
        `;
  }

  getHeader() {
    let counter = 0;
    let formattedColumns = '';

    for (const column of this.columns) {
      if (!column || !column.name) {
        continue;
      }

      if (column.isSortable) {
        formattedColumns += `<th onclick="sortTest('${column.name}')">${column.name} <i class="fas fa-sort-down"></i></th>`;
      } else {
        formattedColumns += `<th>${column.name}</th>`;
      }

      counter += 1;
    }

    return `<tr>${formattedColumns}</tr>`;
  }

  getBody() {
    let formattedRows = '';

    for (const row of this.rows) {
      formattedRows += `
            <tr>
                <td>${row.country}</td>
                <td>${row.newConfirmed}</td>
                <td>${row.totalConfirmed}</td>
                <td>${row.newDeaths}</td>
                <td>${row.totalDeaths}</td>
                <td>${row.newRecovered}</td>
                <td>${row.totalRecovered}</td>
            </tr>
            `;
    }

    return formattedRows;
  }

  addColumn(columnName, isSortable) {
    if (typeof columnName !== 'string') {
      throw new Error('columnName must be a string');
    }

    this.columns.push({
      name: columnName,
      isSortable
    });
  }

  addRow(row) {
    if (typeof row !== 'object') {
      throw new Error('row must be an array');
    }

    this.rows.push(row);
  }

  isAValidHtmlElement(parent) {
    return parent instanceof HTMLDivElement || parent instanceof HTMLBodyElement;
  } // Function invoked on click (table head)


}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Row; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Row {
  constructor(country) {
    _defineProperty(this, "country", 'No Country');

    _defineProperty(this, "newConfirmed", 0);

    _defineProperty(this, "totalConfirmed", 0);

    _defineProperty(this, "newDeaths", 0);

    _defineProperty(this, "totalDeaths", 0);

    _defineProperty(this, "newRecovered", 0);

    _defineProperty(this, "totalRecovered", 0);

    _defineProperty(this, "getHtml", () => {
      return {
        country: this.getCountry(),
        newConfirmed: this.getNewConfirmed(),
        totalConfirmed: this.getTotalConfirmed(),
        newDeaths: this.getNewDeaths(),
        totalDeaths: this.getTotalDeaths(),
        newRecovered: this.getNewRecovered(),
        totalRecovered: this.getTotalRecovered()
      };
    });

    if (typeof country.Country !== 'string' || country.Country == '') {
      throw new Error('country must be a string');
    }

    this.country = country.Country;
    this.newConfirmed = country.NewConfirmed;
    this.totalConfirmed = country.TotalConfirmed;
    this.newDeaths = country.NewDeaths;
    this.totalDeaths = country.TotalDeaths;
    this.newRecovered = country.NewRecovered;
    this.totalRecovered = country.TotalRecovered;
  }

  getCountry() {
    // console.log(this.country);
    return this.country;
  }

  getNewConfirmed() {
    // console.log(this.newConfirmed);
    return this.newConfirmed;
  }

  getTotalConfirmed() {
    // console.log(this.totalConfirmed);
    return this.totalConfirmed;
  }

  getNewDeaths() {
    // console.log(this.newDeaths);
    return this.newDeaths;
  }

  getTotalDeaths() {
    // console.log(this.totalDeaths);
    return this.totalDeaths;
  }

  getNewRecovered() {
    // console.log(this.newRecovered);
    return this.newRecovered;
  }

  getTotalRecovered() {
    // console.log(this.totalRecovered);
    return this.totalRecovered;
  }

}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Column; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Column {
  constructor(header) {
    _defineProperty(this, "name", '');

    _defineProperty(this, "isSortable", false);

    if (typeof header.name !== 'string' || header.name == '') {
      throw new Error('name must be a string');
    }

    this.name = header.name;
    this.isSortable = header.isSortable;
  }

  setSortable(isSortable) {
    if (typeof isSortable !== 'boolean') {
      throw new Error('isSortable must be a boolean');
    }

    return this.isSortable = isSortable;
  }

  getName() {
    return this.name;
  }

  getHtml() {
    return [this.getName(), this.setSortable(this.isSortable)];
  }

}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/01.svg");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/02.svg");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/03.svg");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/04.svg");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/05.svg");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/06.svg");

/***/ })
/******/ ]);