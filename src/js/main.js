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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular_aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var angular_aria__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_aria__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var angular_animate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_animate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var angular_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var angular_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_material_angular_material_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var angular_material_angular_material_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_material_angular_material_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_01_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _assets_icons_02_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _assets_icons_03_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _assets_icons_04_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20);
/* harmony import */ var _assets_icons_05_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21);
/* harmony import */ var _assets_icons_06_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22);












 // Url dell'API

let urlApi = 'https://api.covid19api.com/summary';
const app = angular.module("covid19", ['ngMaterial', 'ngMessages']);
app.controller("test", $scope => {
  fetch(urlApi).then(response => response.json()).then(data => {
    $scope.date = data.Date;
    $scope.global = data.Global;
    $scope.countries = data.Countries;
    $scope.$apply();
  });
});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(12);
            var content = __webpack_require__(13);

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
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".containerGlobal {\n  background-color: #ecf0f1;\n}\n.containerGlobal .globalTitle {\n  font-size: 2em;\n  text-align: center;\n  padding: 16px;\n}\n.containerGlobal .globalSub .globalItem {\n  text-align: center;\n  padding-bottom: 16px;\n}\n.containerGlobal .globalSub .globalItem img {\n  width: 60px;\n  height: auto;\n}\n.containerGlobal .globalSub .globalItem .itemTitle {\n  font-size: 1.3em;\n}\n.containerGlobal .globalSub .globalItem .itemData {\n  font-size: 1em;\n}\n\n.nazioneContainer {\n  padding: 16px;\n  background-color: #f5f6fa;\n}\n.nazioneContainer .nazioneTitle {\n  text-align: center;\n  font-size: 2em;\n}\n.nazioneContainer .filtroContainer {\n  width: 100%;\n}\n\ntd, th {\n  border-bottom: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntable {\n  width: 100%;\n  padding: 16px;\n}", "",{"version":3,"sources":["/Users/sandrogreco/Progetti/Work/SeoTesterOnline/Progetto/covid19-seotesteronline/src/css/style.scss","style.scss"],"names":[],"mappings":"AAIA;EACE,yBAJkB;ACCpB;ADIE;EACE,cAAA;EACA,kBAAA;EACA,aAAA;ACFJ;ADKI;EACE,kBAAA;EACA,oBAAA;ACHN;ADIM;EACE,WAAA;EACA,YAAA;ACFR;ADIM;EACE,gBAAA;ACFR;ADKM;EACE,cAAA;ACHR;;ADSA;EACE,aAAA;EACA,yBA9BmB;ACwBrB;ADOE;EACE,kBAAA;EACA,cAAA;ACLJ;ADOE;EACE,WAAA;ACLJ;;ADSA;EACE,gCAAA;EACA,gBAAA;EACA,YAAA;ACNF;;ADSA;EACE,WAAA;EACA,aAAA;ACNF","file":"style.scss","sourcesContent":["\n$global-background: #ecf0f1;\n$nazione-background: #f5f6fa;\n\n.containerGlobal{\n  background-color: $global-background;\n  .globalTitle{\n    font-size: 2em;\n    text-align: center;\n    padding: 16px;\n  }\n  .globalSub{\n    .globalItem{\n      text-align: center;\n      padding-bottom: 16px;\n      img{\n        width: 60px;\n        height: auto;\n      }\n      .itemTitle{\n        font-size: 1.3em;\n      }\n      \n      .itemData{\n        font-size: 1em;\n      }\n    }\n  }\n}\n\n.nazioneContainer{\n  padding: 16px;\n  background-color: $nazione-background;\n  .nazioneTitle{\n    text-align: center;\n    font-size: 2em;\n  }\n  .filtroContainer{\n    width: 100%;\n  }\n}\n\ntd, th {\n  border-bottom: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntable{\n  width: 100%;\n  padding: 16px;\n}",".containerGlobal {\n  background-color: #ecf0f1;\n}\n.containerGlobal .globalTitle {\n  font-size: 2em;\n  text-align: center;\n  padding: 16px;\n}\n.containerGlobal .globalSub .globalItem {\n  text-align: center;\n  padding-bottom: 16px;\n}\n.containerGlobal .globalSub .globalItem img {\n  width: 60px;\n  height: auto;\n}\n.containerGlobal .globalSub .globalItem .itemTitle {\n  font-size: 1.3em;\n}\n.containerGlobal .globalSub .globalItem .itemData {\n  font-size: 1em;\n}\n\n.nazioneContainer {\n  padding: 16px;\n  background-color: #f5f6fa;\n}\n.nazioneContainer .nazioneTitle {\n  text-align: center;\n  font-size: 2em;\n}\n.nazioneContainer .filtroContainer {\n  width: 100%;\n}\n\ntd, th {\n  border-bottom: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntable {\n  width: 100%;\n  padding: 16px;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/01.svg");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/02.svg");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/03.svg");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/04.svg");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/05.svg");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icons/06.svg");

/***/ })
/******/ ]);