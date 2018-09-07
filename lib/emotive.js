(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("emotive", [], factory);
	else if(typeof exports === 'object')
		exports["emotive"] = factory();
	else
		root["emotive"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/colors.js":
/*!*********************************!*\
  !*** ./src/constants/colors.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MEDIUMSEAGREEN = exports.MEDIUMPURPLE = exports.MEDIUMORCHID = exports.MEDIUMBLUE = exports.MEDIUMAQUAMARINE = exports.MAGENTA = exports.LINEN = exports.LIMEGREEN = exports.LIGHTYELLOW = exports.LIGHTSTEELBLUE = exports.LIGHTSLATEGREY = exports.LIGHTSLATEGRAY = exports.LIGHTSKYBLUE = exports.LIGHTSEAGREEN = exports.LIGHTSALMON = exports.LIGHTPINK = exports.LIGHTGREY = exports.LIGHTGREEN = exports.LIGHTGRAY = exports.LIGHTGOLDENRODYELLOW = exports.LIGHTCYAN = exports.LIGHTCORAL = exports.LIGHTBLUE = exports.LEMONCHIFFON = exports.LAWNGREEN = exports.LAVENDERBLUSH = exports.LAVENDER = exports.KHAKI = exports.IVORY = exports.INDIGO = exports.INDIANRED = exports.HOTPINK = exports.HONEYDEW = exports.GREY = exports.GREENYELLOW = exports.GOLDENROD = exports.GOLD = exports.GHOSTWHITE = exports.GAINSBORO = exports.FORESTGREEN = exports.FLORALWHITE = exports.FIREBRICK = exports.DODGERBLUE = exports.DIMGRAY = exports.DEEPSKYBLUE = exports.DEEPPINK = exports.DARKVIOLET = exports.DARKTURQUOISE = exports.DARKSLATEGREY = exports.DARKSLATEGRAY = exports.DARKSLATEBLUE = exports.DARKSEAGREEN = exports.DARKSALMON = exports.DARKRED = exports.DARKORCHID = exports.DARKORANGE = exports.DARKOLIVEGREEN = exports.DARKMAGENTA = exports.DARKKHAKI = exports.DARKGREY = exports.DARKGREEN = exports.DARKGRAY = exports.DARKGOLDENROD = exports.DARKCYAN = exports.DARKBLUE = exports.CYAN = exports.CRIMSON = exports.CORNSILK = exports.CORNFLOWERBLUE = exports.CORAL = exports.CHOCOLATE = exports.CHARTREUSE = exports.CADETBLUE = exports.BURLYWOOD = exports.BROWN = exports.BLUEVIOLET = exports.BLANCHEDALMOND = exports.BISQUE = exports.BEIGE = exports.AZURE = exports.AQUAMARINE = exports.ANTIQUEWHITE = exports.ALICEBLUE = exports.ORANGE = exports.AQUA = exports.TEAL = exports.BLUE = exports.NAVY = exports.YELLOW = exports.OLIVE = exports.LIME = exports.GREEN = exports.FUCHSIA = exports.PURPLE = exports.RED = exports.MAROON = exports.WHITE = exports.GRAY = exports.SILVER = exports.BLACK = void 0;
exports.Colors = exports.REBECCAPURPLE = exports.YELLOWGREEN = exports.WHITESMOKE = exports.WHEAT = exports.VIOLET = exports.TURQUOISE = exports.TOMATO = exports.THISTLE = exports.TAN = exports.STEELBLUE = exports.SPRINGGREEN = exports.SNOW = exports.SLATEGRAY = exports.SLATEBLUE = exports.SKYBLUE = exports.SIENNA = exports.SEASHELL = exports.SEAGREEN = exports.SANDYBROWN = exports.SALMON = exports.SADDLEBROWN = exports.ROYALBLUE = exports.ROSYBROWN = exports.POWDERBLUE = exports.PLUM = exports.PINK = exports.PERU = exports.PEACHPUFF = exports.PAPAYAWHIP = exports.PALEVIOLETRED = exports.PALETURQUOISE = exports.PALEGREEN = exports.PALEGOLDENROD = exports.ORCHID = exports.ORANGERED = exports.OLIVEDRAB = exports.OLDLACE = exports.NAVAJOWHITE = exports.MOCCASIN = exports.MISTYROSE = exports.MINTCREAM = exports.MIDNIGHTBLUE = exports.MEDIUMVIOLETRED = exports.MEDIUMTURQUOISE = exports.MEDIUMSPRINGGREEN = exports.MEDIUMSLATEBLUE = void 0;
var BLACK = 'black';
exports.BLACK = BLACK;
var SILVER = 'silver';
exports.SILVER = SILVER;
var GRAY = 'gray';
exports.GRAY = GRAY;
var WHITE = 'white';
exports.WHITE = WHITE;
var MAROON = 'maroon';
exports.MAROON = MAROON;
var RED = 'red';
exports.RED = RED;
var PURPLE = 'purple';
exports.PURPLE = PURPLE;
var FUCHSIA = 'fuchsia';
exports.FUCHSIA = FUCHSIA;
var GREEN = 'green';
exports.GREEN = GREEN;
var LIME = 'lime';
exports.LIME = LIME;
var OLIVE = 'olive';
exports.OLIVE = OLIVE;
var YELLOW = 'yellow';
exports.YELLOW = YELLOW;
var NAVY = 'navy';
exports.NAVY = NAVY;
var BLUE = 'blue';
exports.BLUE = BLUE;
var TEAL = 'teal';
exports.TEAL = TEAL;
var AQUA = 'aqua';
exports.AQUA = AQUA;
var ORANGE = 'orange';
exports.ORANGE = ORANGE;
var ALICEBLUE = 'aliceblue';
exports.ALICEBLUE = ALICEBLUE;
var ANTIQUEWHITE = 'antiquewhite';
exports.ANTIQUEWHITE = ANTIQUEWHITE;
var AQUAMARINE = 'aquamarine';
exports.AQUAMARINE = AQUAMARINE;
var AZURE = 'azure';
exports.AZURE = AZURE;
var BEIGE = 'beige';
exports.BEIGE = BEIGE;
var BISQUE = 'bisque';
exports.BISQUE = BISQUE;
var BLANCHEDALMOND = 'blanchedalmond';
exports.BLANCHEDALMOND = BLANCHEDALMOND;
var BLUEVIOLET = 'blueviolet';
exports.BLUEVIOLET = BLUEVIOLET;
var BROWN = 'brown';
exports.BROWN = BROWN;
var BURLYWOOD = 'burlywood';
exports.BURLYWOOD = BURLYWOOD;
var CADETBLUE = 'cadetblue';
exports.CADETBLUE = CADETBLUE;
var CHARTREUSE = 'chartreuse';
exports.CHARTREUSE = CHARTREUSE;
var CHOCOLATE = 'chocolate';
exports.CHOCOLATE = CHOCOLATE;
var CORAL = 'coral';
exports.CORAL = CORAL;
var CORNFLOWERBLUE = 'cornflowerblue';
exports.CORNFLOWERBLUE = CORNFLOWERBLUE;
var CORNSILK = 'cornsilk';
exports.CORNSILK = CORNSILK;
var CRIMSON = 'crimson';
exports.CRIMSON = CRIMSON;
var CYAN = 'cyan';
exports.CYAN = CYAN;
var DARKBLUE = 'darkblue';
exports.DARKBLUE = DARKBLUE;
var DARKCYAN = 'darkcyan';
exports.DARKCYAN = DARKCYAN;
var DARKGOLDENROD = 'darkgoldenrod';
exports.DARKGOLDENROD = DARKGOLDENROD;
var DARKGRAY = 'darkgray';
exports.DARKGRAY = DARKGRAY;
var DARKGREEN = 'darkgreen';
exports.DARKGREEN = DARKGREEN;
var DARKGREY = 'darkgrey';
exports.DARKGREY = DARKGREY;
var DARKKHAKI = 'darkkhaki';
exports.DARKKHAKI = DARKKHAKI;
var DARKMAGENTA = 'darkmagenta';
exports.DARKMAGENTA = DARKMAGENTA;
var DARKOLIVEGREEN = 'darkolivegreen';
exports.DARKOLIVEGREEN = DARKOLIVEGREEN;
var DARKORANGE = 'darkorange';
exports.DARKORANGE = DARKORANGE;
var DARKORCHID = 'darkorchid';
exports.DARKORCHID = DARKORCHID;
var DARKRED = 'darkred';
exports.DARKRED = DARKRED;
var DARKSALMON = 'darksalmon';
exports.DARKSALMON = DARKSALMON;
var DARKSEAGREEN = 'darkseagreen';
exports.DARKSEAGREEN = DARKSEAGREEN;
var DARKSLATEBLUE = 'darkslateblue';
exports.DARKSLATEBLUE = DARKSLATEBLUE;
var DARKSLATEGRAY = 'darkslategray';
exports.DARKSLATEGRAY = DARKSLATEGRAY;
var DARKSLATEGREY = 'darkslategrey';
exports.DARKSLATEGREY = DARKSLATEGREY;
var DARKTURQUOISE = 'darkturquoise';
exports.DARKTURQUOISE = DARKTURQUOISE;
var DARKVIOLET = 'darkviolet';
exports.DARKVIOLET = DARKVIOLET;
var DEEPPINK = 'deeppink';
exports.DEEPPINK = DEEPPINK;
var DEEPSKYBLUE = 'deepskyblue';
exports.DEEPSKYBLUE = DEEPSKYBLUE;
var DIMGRAY = 'dimgray';
exports.DIMGRAY = DIMGRAY;
var DODGERBLUE = 'dodgerblue';
exports.DODGERBLUE = DODGERBLUE;
var FIREBRICK = 'firebrick';
exports.FIREBRICK = FIREBRICK;
var FLORALWHITE = 'floralwhite';
exports.FLORALWHITE = FLORALWHITE;
var FORESTGREEN = 'forestgreen';
exports.FORESTGREEN = FORESTGREEN;
var GAINSBORO = 'gainsboro';
exports.GAINSBORO = GAINSBORO;
var GHOSTWHITE = 'ghostwhite';
exports.GHOSTWHITE = GHOSTWHITE;
var GOLD = 'gold';
exports.GOLD = GOLD;
var GOLDENROD = 'goldenrod';
exports.GOLDENROD = GOLDENROD;
var GREENYELLOW = 'greenyellow';
exports.GREENYELLOW = GREENYELLOW;
var GREY = 'grey';
exports.GREY = GREY;
var HONEYDEW = 'honeydew';
exports.HONEYDEW = HONEYDEW;
var HOTPINK = 'hotpink';
exports.HOTPINK = HOTPINK;
var INDIANRED = 'indianred';
exports.INDIANRED = INDIANRED;
var INDIGO = 'indigo';
exports.INDIGO = INDIGO;
var IVORY = 'ivory';
exports.IVORY = IVORY;
var KHAKI = 'khaki';
exports.KHAKI = KHAKI;
var LAVENDER = 'lavender';
exports.LAVENDER = LAVENDER;
var LAVENDERBLUSH = 'lavenderblush';
exports.LAVENDERBLUSH = LAVENDERBLUSH;
var LAWNGREEN = 'lawngreen';
exports.LAWNGREEN = LAWNGREEN;
var LEMONCHIFFON = 'lemonchiffon';
exports.LEMONCHIFFON = LEMONCHIFFON;
var LIGHTBLUE = 'lightblue';
exports.LIGHTBLUE = LIGHTBLUE;
var LIGHTCORAL = 'lightcoral';
exports.LIGHTCORAL = LIGHTCORAL;
var LIGHTCYAN = 'lightcyan';
exports.LIGHTCYAN = LIGHTCYAN;
var LIGHTGOLDENRODYELLOW = 'lightgoldenrodyellow';
exports.LIGHTGOLDENRODYELLOW = LIGHTGOLDENRODYELLOW;
var LIGHTGRAY = 'lightgray';
exports.LIGHTGRAY = LIGHTGRAY;
var LIGHTGREEN = 'lightgreen';
exports.LIGHTGREEN = LIGHTGREEN;
var LIGHTGREY = 'lightgrey';
exports.LIGHTGREY = LIGHTGREY;
var LIGHTPINK = 'lightpink';
exports.LIGHTPINK = LIGHTPINK;
var LIGHTSALMON = 'lightsalmon';
exports.LIGHTSALMON = LIGHTSALMON;
var LIGHTSEAGREEN = 'lightseagreen';
exports.LIGHTSEAGREEN = LIGHTSEAGREEN;
var LIGHTSKYBLUE = 'lightskyblue';
exports.LIGHTSKYBLUE = LIGHTSKYBLUE;
var LIGHTSLATEGRAY = 'lightslategray';
exports.LIGHTSLATEGRAY = LIGHTSLATEGRAY;
var LIGHTSLATEGREY = 'lightslategrey';
exports.LIGHTSLATEGREY = LIGHTSLATEGREY;
var LIGHTSTEELBLUE = 'lightsteelblue';
exports.LIGHTSTEELBLUE = LIGHTSTEELBLUE;
var LIGHTYELLOW = 'lightyellow';
exports.LIGHTYELLOW = LIGHTYELLOW;
var LIMEGREEN = 'limegreen';
exports.LIMEGREEN = LIMEGREEN;
var LINEN = 'linen';
exports.LINEN = LINEN;
var MAGENTA = 'magenta';
exports.MAGENTA = MAGENTA;
var MEDIUMAQUAMARINE = 'mediumaquamarine';
exports.MEDIUMAQUAMARINE = MEDIUMAQUAMARINE;
var MEDIUMBLUE = 'mediumblue';
exports.MEDIUMBLUE = MEDIUMBLUE;
var MEDIUMORCHID = 'mediumorchid';
exports.MEDIUMORCHID = MEDIUMORCHID;
var MEDIUMPURPLE = 'mediumpurple';
exports.MEDIUMPURPLE = MEDIUMPURPLE;
var MEDIUMSEAGREEN = 'mediumseagreen';
exports.MEDIUMSEAGREEN = MEDIUMSEAGREEN;
var MEDIUMSLATEBLUE = 'mediumslateblue';
exports.MEDIUMSLATEBLUE = MEDIUMSLATEBLUE;
var MEDIUMSPRINGGREEN = 'mediumspringgreen';
exports.MEDIUMSPRINGGREEN = MEDIUMSPRINGGREEN;
var MEDIUMTURQUOISE = 'mediumturquoise';
exports.MEDIUMTURQUOISE = MEDIUMTURQUOISE;
var MEDIUMVIOLETRED = 'mediumvioletred';
exports.MEDIUMVIOLETRED = MEDIUMVIOLETRED;
var MIDNIGHTBLUE = 'midnightblue';
exports.MIDNIGHTBLUE = MIDNIGHTBLUE;
var MINTCREAM = 'mintcream';
exports.MINTCREAM = MINTCREAM;
var MISTYROSE = 'mistyrose';
exports.MISTYROSE = MISTYROSE;
var MOCCASIN = 'moccasin';
exports.MOCCASIN = MOCCASIN;
var NAVAJOWHITE = 'navajowhite';
exports.NAVAJOWHITE = NAVAJOWHITE;
var OLDLACE = 'oldlace';
exports.OLDLACE = OLDLACE;
var OLIVEDRAB = 'olivedrab';
exports.OLIVEDRAB = OLIVEDRAB;
var ORANGERED = 'orangered';
exports.ORANGERED = ORANGERED;
var ORCHID = 'orchid';
exports.ORCHID = ORCHID;
var PALEGOLDENROD = 'palegoldenrod';
exports.PALEGOLDENROD = PALEGOLDENROD;
var PALEGREEN = 'palegreen';
exports.PALEGREEN = PALEGREEN;
var PALETURQUOISE = 'paleturquoise';
exports.PALETURQUOISE = PALETURQUOISE;
var PALEVIOLETRED = 'palevioletred';
exports.PALEVIOLETRED = PALEVIOLETRED;
var PAPAYAWHIP = 'papayawhip';
exports.PAPAYAWHIP = PAPAYAWHIP;
var PEACHPUFF = 'peachpuff';
exports.PEACHPUFF = PEACHPUFF;
var PERU = 'peru';
exports.PERU = PERU;
var PINK = 'pink';
exports.PINK = PINK;
var PLUM = 'plum';
exports.PLUM = PLUM;
var POWDERBLUE = 'powderblue';
exports.POWDERBLUE = POWDERBLUE;
var ROSYBROWN = 'rosybrown';
exports.ROSYBROWN = ROSYBROWN;
var ROYALBLUE = 'royalblue';
exports.ROYALBLUE = ROYALBLUE;
var SADDLEBROWN = 'saddlebrown';
exports.SADDLEBROWN = SADDLEBROWN;
var SALMON = 'salmon';
exports.SALMON = SALMON;
var SANDYBROWN = 'sandybrown';
exports.SANDYBROWN = SANDYBROWN;
var SEAGREEN = 'seagreen';
exports.SEAGREEN = SEAGREEN;
var SEASHELL = 'seashell';
exports.SEASHELL = SEASHELL;
var SIENNA = 'sienna';
exports.SIENNA = SIENNA;
var SKYBLUE = 'skyblue';
exports.SKYBLUE = SKYBLUE;
var SLATEBLUE = 'slateblue';
exports.SLATEBLUE = SLATEBLUE;
var SLATEGRAY = 'slategray';
exports.SLATEGRAY = SLATEGRAY;
var SNOW = 'snow';
exports.SNOW = SNOW;
var SPRINGGREEN = 'springgreen';
exports.SPRINGGREEN = SPRINGGREEN;
var STEELBLUE = 'steelblue';
exports.STEELBLUE = STEELBLUE;
var TAN = 'tan';
exports.TAN = TAN;
var THISTLE = 'thistle';
exports.THISTLE = THISTLE;
var TOMATO = 'tomato';
exports.TOMATO = TOMATO;
var TURQUOISE = 'turquoise';
exports.TURQUOISE = TURQUOISE;
var VIOLET = 'violet';
exports.VIOLET = VIOLET;
var WHEAT = 'wheat';
exports.WHEAT = WHEAT;
var WHITESMOKE = 'whitesmoke';
exports.WHITESMOKE = WHITESMOKE;
var YELLOWGREEN = 'yellowgreen';
exports.YELLOWGREEN = YELLOWGREEN;
var REBECCAPURPLE = 'rebeccapurple';
exports.REBECCAPURPLE = REBECCAPURPLE;
var Colors = {
  BLACK: BLACK,
  SILVER: SILVER,
  GRAY: GRAY,
  WHITE: WHITE,
  MAROON: MAROON,
  RED: RED,
  PURPLE: PURPLE,
  FUCHSIA: FUCHSIA,
  GREEN: GREEN,
  LIME: LIME,
  OLIVE: OLIVE,
  YELLOW: YELLOW,
  NAVY: NAVY,
  BLUE: BLUE,
  TEAL: TEAL,
  AQUA: AQUA,
  ORANGE: ORANGE,
  ALICEBLUE: ALICEBLUE,
  ANTIQUEWHITE: ANTIQUEWHITE,
  AQUAMARINE: AQUAMARINE,
  AZURE: AZURE,
  BEIGE: BEIGE,
  BISQUE: BISQUE,
  BLANCHEDALMOND: BLANCHEDALMOND,
  BLUEVIOLET: BLUEVIOLET,
  BROWN: BROWN,
  BURLYWOOD: BURLYWOOD,
  CADETBLUE: CADETBLUE,
  CHARTREUSE: CHARTREUSE,
  CHOCOLATE: CHOCOLATE,
  CORAL: CORAL,
  CORNFLOWERBLUE: CORNFLOWERBLUE,
  CORNSILK: CORNSILK,
  CRIMSON: CRIMSON,
  CYAN: CYAN,
  DARKBLUE: DARKBLUE,
  DARKCYAN: DARKCYAN,
  DARKGOLDENROD: DARKGOLDENROD,
  DARKGRAY: DARKGRAY,
  DARKGREEN: DARKGREEN,
  DARKGREY: DARKGREY,
  DARKKHAKI: DARKKHAKI,
  DARKMAGENTA: DARKMAGENTA,
  DARKOLIVEGREEN: DARKOLIVEGREEN,
  DARKORANGE: DARKORANGE,
  DARKORCHID: DARKORCHID,
  DARKRED: DARKRED,
  DARKSALMON: DARKSALMON,
  DARKSEAGREEN: DARKSEAGREEN,
  DARKSLATEBLUE: DARKSLATEBLUE,
  DARKSLATEGRAY: DARKSLATEGRAY,
  DARKSLATEGREY: DARKSLATEGREY,
  DARKTURQUOISE: DARKTURQUOISE,
  DARKVIOLET: DARKVIOLET,
  DEEPPINK: DEEPPINK,
  DEEPSKYBLUE: DEEPSKYBLUE,
  DIMGRAY: DIMGRAY,
  DODGERBLUE: DODGERBLUE,
  FIREBRICK: FIREBRICK,
  FLORALWHITE: FLORALWHITE,
  FORESTGREEN: FORESTGREEN,
  GAINSBORO: GAINSBORO,
  GHOSTWHITE: GHOSTWHITE,
  GOLD: GOLD,
  GOLDENROD: GOLDENROD,
  GREENYELLOW: GREENYELLOW,
  GREY: GREY,
  HONEYDEW: HONEYDEW,
  HOTPINK: HOTPINK,
  INDIANRED: INDIANRED,
  INDIGO: INDIGO,
  IVORY: IVORY,
  KHAKI: KHAKI,
  LAVENDER: LAVENDER,
  LAVENDERBLUSH: LAVENDERBLUSH,
  LAWNGREEN: LAWNGREEN,
  LEMONCHIFFON: LEMONCHIFFON,
  LIGHTBLUE: LIGHTBLUE,
  LIGHTCORAL: LIGHTCORAL,
  LIGHTCYAN: LIGHTCYAN,
  LIGHTGOLDENRODYELLOW: LIGHTGOLDENRODYELLOW,
  LIGHTGRAY: LIGHTGRAY,
  LIGHTGREEN: LIGHTGREEN,
  LIGHTGREY: LIGHTGREY,
  LIGHTPINK: LIGHTPINK,
  LIGHTSALMON: LIGHTSALMON,
  LIGHTSEAGREEN: LIGHTSEAGREEN,
  LIGHTSKYBLUE: LIGHTSKYBLUE,
  LIGHTSLATEGRAY: LIGHTSLATEGRAY,
  LIGHTSLATEGREY: LIGHTSLATEGREY,
  LIGHTSTEELBLUE: LIGHTSTEELBLUE,
  LIGHTYELLOW: LIGHTYELLOW,
  LIMEGREEN: LIMEGREEN,
  LINEN: LINEN,
  MAGENTA: MAGENTA,
  MEDIUMAQUAMARINE: MEDIUMAQUAMARINE,
  MEDIUMBLUE: MEDIUMBLUE,
  MEDIUMORCHID: MEDIUMORCHID,
  MEDIUMPURPLE: MEDIUMPURPLE,
  MEDIUMSEAGREEN: MEDIUMSEAGREEN,
  MEDIUMSLATEBLUE: MEDIUMSLATEBLUE,
  MEDIUMSPRINGGREEN: MEDIUMSPRINGGREEN,
  MEDIUMTURQUOISE: MEDIUMTURQUOISE,
  MEDIUMVIOLETRED: MEDIUMVIOLETRED,
  MIDNIGHTBLUE: MIDNIGHTBLUE,
  MINTCREAM: MINTCREAM,
  MISTYROSE: MISTYROSE,
  MOCCASIN: MOCCASIN,
  NAVAJOWHITE: NAVAJOWHITE,
  OLDLACE: OLDLACE,
  OLIVEDRAB: OLIVEDRAB,
  ORANGERED: ORANGERED,
  ORCHID: ORCHID,
  PALEGOLDENROD: PALEGOLDENROD,
  PALEGREEN: PALEGREEN,
  PALETURQUOISE: PALETURQUOISE,
  PALEVIOLETRED: PALEVIOLETRED,
  PAPAYAWHIP: PAPAYAWHIP,
  PEACHPUFF: PEACHPUFF,
  PERU: PERU,
  PINK: PINK,
  PLUM: PLUM,
  POWDERBLUE: POWDERBLUE,
  ROSYBROWN: ROSYBROWN,
  ROYALBLUE: ROYALBLUE,
  SADDLEBROWN: SADDLEBROWN,
  SALMON: SALMON,
  SANDYBROWN: SANDYBROWN,
  SEAGREEN: SEAGREEN,
  SEASHELL: SEASHELL,
  SIENNA: SIENNA,
  SKYBLUE: SKYBLUE,
  SLATEBLUE: SLATEBLUE,
  SLATEGRAY: SLATEGRAY,
  SNOW: SNOW,
  SPRINGGREEN: SPRINGGREEN,
  STEELBLUE: STEELBLUE,
  TAN: TAN,
  THISTLE: THISTLE,
  TOMATO: TOMATO,
  TURQUOISE: TURQUOISE,
  VIOLET: VIOLET,
  WHEAT: WHEAT,
  WHITESMOKE: WHITESMOKE,
  YELLOWGREEN: YELLOWGREEN,
  REBECCAPURPLE: REBECCAPURPLE
};
exports.Colors = Colors;

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(/*! ./colors */ "./src/constants/colors.js");

Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colors[key];
    }
  });
});

var _keywords = __webpack_require__(/*! ./keywords */ "./src/constants/keywords.js");

Object.keys(_keywords).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _keywords[key];
    }
  });
});

var _units = __webpack_require__(/*! ./units */ "./src/constants/units.js");

Object.keys(_units).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _units[key];
    }
  });
});

/***/ }),

/***/ "./src/constants/keywords.js":
/*!***********************************!*\
  !*** ./src/constants/keywords.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DENSE = exports.DEFAULT = exports.DECIMAL_LEADING_ZERO = exports.DECIMAL = exports.DASHES = exports.DASHED = exports.DARKEN = exports.CURSIVE = exports.CURRENT_COLOR = exports.CROSSHAIR = exports.CROP = exports.COVER = exports.COPY = exports.CONTINUOUS = exports.CONTEXTUAL = exports.CONTEXT_MENU = exports.CONTENTS = exports.CONTENT_BOX = exports.CONTENT = exports.CONTAIN = exports.CONDENSED = exports.COMPRESS = exports.COMMON_LIGATURES = exports.COLUMN_REVERSE = exports.COLUMN = exports.COLOR_DODGE = exports.COLOR_BURN = exports.COLOR = exports.COLLAPSE = exports.COL_RESIZE = exports.CODE = exports.CLOSEST_SIDE = exports.CLOSEST_CORNER = exports.CLOSE_QUOTE = exports.CLOSE = exports.CLONE = exports.CLIP = exports.CIRCLE = exports.CENTRAL = exports.CENTER_RIGHT = exports.CENTER_LEFT = exports.CENTER = exports.CELL = exports.CAPTION = exports.CAPITALIZE = exports.BUTT = exports.BREAK_WORD = exports.BREAK_SPACES = exports.BREAK_ALL = exports.BOUNDING_BOX = exports.BOTTOM = exports.BOTH = exports.BORDER_BOX = exports.BOLDER = exports.BOLD = exports.BLOCK_START = exports.BLOCK_END = exports.BLOCK = exports.BLINK = exports.BIDI_OVERRIDE = exports.BEVEL = exports.BELOW = exports.BEHIND = exports.BASELINE = exports.BALANCE_ALL = exports.BALANCE = exports.BACKWARDS = exports.AVOID_REGION = exports.AVOID_PAGE = exports.AVOID_COLUMN = exports.AVOID = exports.AUTO = exports.AT = exports.AROUND = exports.ARMENIAN = exports.ARCS = exports.ANYWHERE = exports.ALWAYS = exports.ALTERNATE_REVERSE = exports.ALTERNATE = exports.ALPHABETIC = exports.ALPHA = exports.ALLOW_END = exports.ALL_SMALL_CAPS = exports.ALL_SCROLL = exports.ALL_PETITE_CAPS = exports.ALL = exports.ALIAS = exports.ADD = exports.ABSOLUTE = exports.ABOVE = exports._900 = exports._800 = exports._700 = exports._600 = exports._500 = exports._400 = exports._300 = exports._200 = exports._100 = void 0;
exports.LARGE = exports.LANDSCAPE = exports.KEEP_ALL = exports.JUSTIFY_ALL = exports.JUSTIFY = exports.JIS90 = exports.JIS83 = exports.JIS78 = exports.JIS04 = exports.ITALIC = exports.ISOLATE_OVERRIDE = exports.ISOLATE = exports.INVERT = exports.INTERSECT = exports.INTER_WORD = exports.INTER_CHARACTER = exports.INSIDE = exports.INSET = exports.INLINE_TABLE = exports.INLINE_START = exports.INLINE_GRID = exports.INLINE_FLEX = exports.INLINE_END = exports.INLINE_BLOCK = exports.INLINE = exports.INITIAL = exports.INHERIT = exports.INFINITE = exports.IDEOGRAPHIC = exports.ICON = exports.HUE = exports.HORIZONTAL_TB = exports.HORIZONTAL = exports.HISTORICAL_LIGATURES = exports.HIGHER = exports.HIGH = exports.HIDE = exports.HIDDEN = exports.HELP = exports.HEBREW = exports.HARD_LIGHT = exports.HANGING = exports.GROOVE = exports.GRID = exports.GRABBING = exports.GRAB = exports.GEORGIAN = exports.GAPS = exports.FULL_WIDTH = exports.FRONT_IMAGE = exports.FRAGMENTS = exports.FORWARDS = exports.FORCE_END = exports.FORCE = exports.FLOW_ROOT = exports.FLOW = exports.FLEX_START = exports.FLEX_END = exports.FLEX = exports.FIXED = exports.FIRST = exports.FILLED = exports.FILL_BOX = exports.FILL = exports.FASTER = exports.FAST = exports.FARTHEST_SIDE = exports.FARTHEST_CORNER = exports.FAR_RIGHT = exports.FAR_LEFT = exports.FANTASY = exports.EXTRA_EXPANDED = exports.EXTRA_CONDENSED = exports.EXPANDED = exports.EXCLUSION = exports.EXCLUDE = exports.EW_RESIZE = exports.EVENODD = exports.END = exports.EMBED = exports.ELLIPSIS = exports.ELLIPSE = exports.EASE_OUT = exports.EASE_IN_OUT = exports.EASE_IN = exports.EASE = exports.EACH_LINE = exports.E_RESIZE = exports.DOUBLE_CIRCLE = exports.DOUBLE = exports.DOTTED = exports.DOT = exports.DOCUMENT_URL = exports.DISPLAY = exports.DISCRETIONARY_LIGATURES = exports.DISCARD = exports.DISC = exports.DIGITS = exports.DIFFERENCE = exports.DIAGONAL_FRACTIONS = void 0;
exports.RECTO = exports.RECT = exports.PROXIMITY = exports.PROPORTIONAL_WIDTH = exports.PROPORTIONAL_NUMS = exports.PROGRESS = exports.PRE_WRAP = exports.PRE_LINE = exports.PRE = exports.PORTRAIT = exports.POINTER = exports.PLAINTEXT = exports.PETITE_CAPS = exports.PAUSED = exports.PARENT = exports.PAINT = exports.PAGINATE = exports.PAGE = exports.PADDING_BOX = exports.OVERLINE = exports.OVERLAY = exports.OVERFLOW = exports.OVER = exports.OUTSIDE_SHAPE = exports.OUTSIDE = exports.OUTSET = exports.ORDINAL = exports.OPEN_QUOTE = exports.OPEN = exports.ONCE = exports.ON = exports.OLDSTYLE_NUMS = exports.OFF = exports.OBLIQUE = exports.NWSE_RESIZE = exports.NW_RESIZE = exports.NS_RESIZE = exports.NOWRAP = exports.NOT_ALLOWED = exports.NORMAL = exports.NONZERO = exports.NONE = exports.NO_REPEAT = exports.NO_OPEN_QUOTE = exports.NO_HISTORICAL_LIGATURES = exports.NO_DROP = exports.NO_DISCRETIONARY_LIGATURES = exports.NO_CONTEXTUAL = exports.NO_COMMON_LIGATURES = exports.NO_CLOSE_QUOTE = exports.NO_CLIP = exports.NESW_RESIZE = exports.NE_RESIZE = exports.N_RESIZE = exports.MULTIPLY = exports.MOVE = exports.MONOSPACE = exports.MIXED = exports.MIX = exports.MITER = exports.MIN_CONTENT = exports.MIDDLE = exports.MESSAGE_BOX = exports.MENU = exports.MEDIUM = exports.MAX_CONTENT = exports.MATHEMATICAL = exports.MATCH_PARENT = exports.MARGIN_BOX = exports.MANUAL = exports.MANDATORY = exports.LUMINOSITY = exports.LUMINANCE = exports.LTR = exports.LOWERCASE = exports.LOWER_ROMAN = exports.LOWER_LATIN = exports.LOWER_GREEK = exports.LOWER_ALPHA = exports.LOWER = exports.LOW = exports.LOUD = exports.LOOSE = exports.LOCAL = exports.LIST_ITEM = exports.LIST_CONTAINER = exports.LINING_NUMS = exports.LINEARRGB = exports.LINEAR = exports.LINE_THROUGH = exports.LIGHTER = exports.LIGHTEN = exports.LEVEL = exports.LEGACY = exports.LEFTWARDS = exports.LEFT_SIDE = exports.LEFT = exports.LAYOUT = exports.LAST = exports.LARGER = void 0;
exports.TEXT = exports.TABULAR_NUMS = exports.TABLE_ROW_GROUP = exports.TABLE_ROW = exports.TABLE_HEADER_GROUP = exports.TABLE_FOOTER_GROUP = exports.TABLE_COLUMN_GROUP = exports.TABLE_COLUMN = exports.TABLE_CELL = exports.TABLE_CAPTION = exports.TABLE = exports.SW_RESIZE = exports.SUPER = exports.SUBTRACT = exports.SUBGRID = exports.SUB = exports.STYLE = exports.STUPID = exports.STROKE_BOX = exports.STRICT = exports.STRETCH = exports.STICKY = exports.STEP_START = exports.STEP_END = exports.STATUS_BAR = exports.STATIC = exports.START = exports.STACKED_FRACTIONS = exports.STABLE = exports.SRGB = exports.SQUARE = exports.SPELL_OUT = exports.SPAN = exports.SPACE_EVENLY = exports.SPACE_BETWEEN = exports.SPACE_AROUND = exports.SPACE = exports.SOLID = exports.SOFT_LIGHT = exports.SOFT = exports.SNAP_INLINE = exports.SNAP_BLOCK = exports.SNAP = exports.SMOOTH = exports.SMALLER = exports.SMALL_CAPTION = exports.SMALL_CAPS = exports.SMALL = exports.SLOWER = exports.SLOW = exports.SLICE = exports.SLASHED_ZERO = exports.SIZE = exports.SIMPLIFIED = exports.SILENT = exports.SIDEWAYS_RL = exports.SIDEWAYS_LR = exports.SIDEWAYS = exports.SHOW = exports.SHAPE_BOX = exports.SESAME = exports.SERIF = exports.SEPARATE = exports.SEMI_EXPANDED = exports.SEMI_CONDENSED = exports.SELF_START = exports.SELF_END = exports.SE_RESIZE = exports.SCROLL_POSITION = exports.SCROLL = exports.SCREEN = exports.SCALE_DOWN = exports.SATURATION = exports.SANS_SERIF = exports.SAME = exports.SAFE = exports.S_RESIZE = exports.RUNNING = exports.RUN_IN = exports.RUBY_TEXT_CONTAINER = exports.RUBY_TEXT = exports.RUBY_BASE_CONTAINER = exports.RUBY_BASE = exports.RUBY = exports.RTL = exports.ROW_REVERSE = exports.ROW_RESIZE = exports.ROW = exports.ROUND = exports.RIGHTWARDS = exports.RIGHT_SIDE = exports.RIGHT = exports.RIDGE = exports.REVERT = exports.REVERSE = exports.REPEAT_Y = exports.REPEAT_X = exports.REPEAT = exports.RELATIVE = exports.REGION = void 0;
exports.Keywords = exports.ZOOM_OUT = exports.ZOOM_IN = exports.ZOOM = exports.Y = exports.XX_SMALL = exports.XX_LARGE = exports.X_SOFT = exports.X_SMALL = exports.X_SLOW = exports.X_LOW = exports.X_LOUD = exports.X_LARGE = exports.X_HIGH = exports.X_FAST = exports.X = exports.WRAP_REVERSE = exports.WRAP = exports.WAVY = exports.WAIT = exports.W_RESIZE = exports.VISIBLE = exports.VIEW_BOX = exports.VERTICAL_TEXT = exports.VERTICAL_RL = exports.VERTICAL_LR = exports.VERTICAL = exports.VERSO = exports.UPRIGHT = exports.UPPERCASE = exports.UPPER_ROMAN = exports.UPPER_LATIN = exports.UPPER_GREEK = exports.UPPER_ALPHA = exports.UNSET = exports.UNSAFE = exports.UNICASE = exports.UNDERLINE = exports.UNDER = exports.ULTRA_EXPANDED = exports.ULTRA_CONDENSED = exports.TRIANGLE = exports.TRANSPARENT = exports.TRADITIONAL = exports.TOP = exports.TO = exports.TITLING_CAPS = exports.THIN = exports.THICK = exports.TEXT_TOP = exports.TEXT_BOTTOM = void 0;
var _100 = '100';
exports._100 = _100;
var _200 = '200';
exports._200 = _200;
var _300 = '300';
exports._300 = _300;
var _400 = '400';
exports._400 = _400;
var _500 = '500';
exports._500 = _500;
var _600 = '600';
exports._600 = _600;
var _700 = '700';
exports._700 = _700;
var _800 = '800';
exports._800 = _800;
var _900 = '900';
exports._900 = _900;
var ABOVE = 'above';
exports.ABOVE = ABOVE;
var ABSOLUTE = 'absolute';
exports.ABSOLUTE = ABSOLUTE;
var ADD = 'add';
exports.ADD = ADD;
var ALIAS = 'alias';
exports.ALIAS = ALIAS;
var ALL = 'all';
exports.ALL = ALL;
var ALL_PETITE_CAPS = 'all-petite-caps';
exports.ALL_PETITE_CAPS = ALL_PETITE_CAPS;
var ALL_SCROLL = 'all-scroll';
exports.ALL_SCROLL = ALL_SCROLL;
var ALL_SMALL_CAPS = 'all-small-caps';
exports.ALL_SMALL_CAPS = ALL_SMALL_CAPS;
var ALLOW_END = 'allow-end';
exports.ALLOW_END = ALLOW_END;
var ALPHA = 'alpha';
exports.ALPHA = ALPHA;
var ALPHABETIC = 'alphabetic';
exports.ALPHABETIC = ALPHABETIC;
var ALTERNATE = 'alternate';
exports.ALTERNATE = ALTERNATE;
var ALTERNATE_REVERSE = 'alternate-reverse';
exports.ALTERNATE_REVERSE = ALTERNATE_REVERSE;
var ALWAYS = 'always';
exports.ALWAYS = ALWAYS;
var ANYWHERE = 'anywhere';
exports.ANYWHERE = ANYWHERE;
var ARCS = 'arcs';
exports.ARCS = ARCS;
var ARMENIAN = 'armenian';
exports.ARMENIAN = ARMENIAN;
var AROUND = 'around';
exports.AROUND = AROUND;
var AT = 'at';
exports.AT = AT;
var AUTO = 'auto';
exports.AUTO = AUTO;
var AVOID = 'avoid';
exports.AVOID = AVOID;
var AVOID_COLUMN = 'avoid-column';
exports.AVOID_COLUMN = AVOID_COLUMN;
var AVOID_PAGE = 'avoid-page';
exports.AVOID_PAGE = AVOID_PAGE;
var AVOID_REGION = 'avoid-region';
exports.AVOID_REGION = AVOID_REGION;
var BACKWARDS = 'backwards';
exports.BACKWARDS = BACKWARDS;
var BALANCE = 'balance';
exports.BALANCE = BALANCE;
var BALANCE_ALL = 'balance-all';
exports.BALANCE_ALL = BALANCE_ALL;
var BASELINE = 'baseline';
exports.BASELINE = BASELINE;
var BEHIND = 'behind';
exports.BEHIND = BEHIND;
var BELOW = 'below';
exports.BELOW = BELOW;
var BEVEL = 'bevel';
exports.BEVEL = BEVEL;
var BIDI_OVERRIDE = 'bidi-override';
exports.BIDI_OVERRIDE = BIDI_OVERRIDE;
var BLINK = 'blink';
exports.BLINK = BLINK;
var BLOCK = 'block';
exports.BLOCK = BLOCK;
var BLOCK_END = 'block-end';
exports.BLOCK_END = BLOCK_END;
var BLOCK_START = 'block-start';
exports.BLOCK_START = BLOCK_START;
var BOLD = 'bold';
exports.BOLD = BOLD;
var BOLDER = 'bolder';
exports.BOLDER = BOLDER;
var BORDER_BOX = 'border-box';
exports.BORDER_BOX = BORDER_BOX;
var BOTH = 'both';
exports.BOTH = BOTH;
var BOTTOM = 'bottom';
exports.BOTTOM = BOTTOM;
var BOUNDING_BOX = 'bounding-box';
exports.BOUNDING_BOX = BOUNDING_BOX;
var BREAK_ALL = 'break-all';
exports.BREAK_ALL = BREAK_ALL;
var BREAK_SPACES = 'break-spaces';
exports.BREAK_SPACES = BREAK_SPACES;
var BREAK_WORD = 'break-word';
exports.BREAK_WORD = BREAK_WORD;
var BUTT = 'butt';
exports.BUTT = BUTT;
var CAPITALIZE = 'capitalize';
exports.CAPITALIZE = CAPITALIZE;
var CAPTION = 'caption';
exports.CAPTION = CAPTION;
var CELL = 'cell';
exports.CELL = CELL;
var CENTER = 'center';
exports.CENTER = CENTER;
var CENTER_LEFT = 'center-left';
exports.CENTER_LEFT = CENTER_LEFT;
var CENTER_RIGHT = 'center-right';
exports.CENTER_RIGHT = CENTER_RIGHT;
var CENTRAL = 'central';
exports.CENTRAL = CENTRAL;
var CIRCLE = 'circle';
exports.CIRCLE = CIRCLE;
var CLIP = 'clip';
exports.CLIP = CLIP;
var CLONE = 'clone';
exports.CLONE = CLONE;
var CLOSE = 'close';
exports.CLOSE = CLOSE;
var CLOSE_QUOTE = 'close-quote';
exports.CLOSE_QUOTE = CLOSE_QUOTE;
var CLOSEST_CORNER = 'closest-corner';
exports.CLOSEST_CORNER = CLOSEST_CORNER;
var CLOSEST_SIDE = 'closest-side';
exports.CLOSEST_SIDE = CLOSEST_SIDE;
var CODE = 'code';
exports.CODE = CODE;
var COL_RESIZE = 'col-resize';
exports.COL_RESIZE = COL_RESIZE;
var COLLAPSE = 'collapse';
exports.COLLAPSE = COLLAPSE;
var COLOR = 'color';
exports.COLOR = COLOR;
var COLOR_BURN = 'color-burn';
exports.COLOR_BURN = COLOR_BURN;
var COLOR_DODGE = 'color';
exports.COLOR_DODGE = COLOR_DODGE;
var COLUMN = 'column';
exports.COLUMN = COLUMN;
var COLUMN_REVERSE = 'column-reverse';
exports.COLUMN_REVERSE = COLUMN_REVERSE;
var COMMON_LIGATURES = 'common-ligatures';
exports.COMMON_LIGATURES = COMMON_LIGATURES;
var COMPRESS = 'compress';
exports.COMPRESS = COMPRESS;
var CONDENSED = 'condensed';
exports.CONDENSED = CONDENSED;
var CONTAIN = 'contain';
exports.CONTAIN = CONTAIN;
var CONTENT = 'content';
exports.CONTENT = CONTENT;
var CONTENT_BOX = 'content-box';
exports.CONTENT_BOX = CONTENT_BOX;
var CONTENTS = 'contents';
exports.CONTENTS = CONTENTS;
var CONTEXT_MENU = 'context-menu';
exports.CONTEXT_MENU = CONTEXT_MENU;
var CONTEXTUAL = 'contextual';
exports.CONTEXTUAL = CONTEXTUAL;
var CONTINUOUS = 'continuous';
exports.CONTINUOUS = CONTINUOUS;
var COPY = 'copy';
exports.COPY = COPY;
var COVER = 'cover';
exports.COVER = COVER;
var CROP = 'crop';
exports.CROP = CROP;
var CROSSHAIR = 'crosshair';
exports.CROSSHAIR = CROSSHAIR;
var CURRENT_COLOR = 'currentColor';
exports.CURRENT_COLOR = CURRENT_COLOR;
var CURSIVE = 'cursive';
exports.CURSIVE = CURSIVE;
var DARKEN = 'darken';
exports.DARKEN = DARKEN;
var DASHED = 'dashed';
exports.DASHED = DASHED;
var DASHES = 'dashes';
exports.DASHES = DASHES;
var DECIMAL = 'decimal';
exports.DECIMAL = DECIMAL;
var DECIMAL_LEADING_ZERO = 'decimal-leading-zero';
exports.DECIMAL_LEADING_ZERO = DECIMAL_LEADING_ZERO;
var DEFAULT = 'default';
exports.DEFAULT = DEFAULT;
var DENSE = 'dense';
exports.DENSE = DENSE;
var DIAGONAL_FRACTIONS = 'diagonal-fractions';
exports.DIAGONAL_FRACTIONS = DIAGONAL_FRACTIONS;
var DIFFERENCE = 'difference';
exports.DIFFERENCE = DIFFERENCE;
var DIGITS = 'digits';
exports.DIGITS = DIGITS;
var DISC = 'disc';
exports.DISC = DISC;
var DISCARD = 'discard';
exports.DISCARD = DISCARD;
var DISCRETIONARY_LIGATURES = 'discretionary-ligatures';
exports.DISCRETIONARY_LIGATURES = DISCRETIONARY_LIGATURES;
var DISPLAY = 'display';
exports.DISPLAY = DISPLAY;
var DOCUMENT_URL = 'document-url';
exports.DOCUMENT_URL = DOCUMENT_URL;
var DOT = 'dot';
exports.DOT = DOT;
var DOTTED = 'dotted';
exports.DOTTED = DOTTED;
var DOUBLE = 'double';
exports.DOUBLE = DOUBLE;
var DOUBLE_CIRCLE = 'double-circle';
exports.DOUBLE_CIRCLE = DOUBLE_CIRCLE;
var E_RESIZE = 'e-resize';
exports.E_RESIZE = E_RESIZE;
var EACH_LINE = 'each-line';
exports.EACH_LINE = EACH_LINE;
var EASE = 'ease';
exports.EASE = EASE;
var EASE_IN = 'ease-in';
exports.EASE_IN = EASE_IN;
var EASE_IN_OUT = 'ease-in-out';
exports.EASE_IN_OUT = EASE_IN_OUT;
var EASE_OUT = 'ease-out';
exports.EASE_OUT = EASE_OUT;
var ELLIPSE = 'ellipse';
exports.ELLIPSE = ELLIPSE;
var ELLIPSIS = 'ellipsis';
exports.ELLIPSIS = ELLIPSIS;
var EMBED = 'embed';
exports.EMBED = EMBED;
var END = 'end';
exports.END = END;
var EVENODD = 'evenodd';
exports.EVENODD = EVENODD;
var EW_RESIZE = 'ew-resize';
exports.EW_RESIZE = EW_RESIZE;
var EXCLUDE = 'exclude';
exports.EXCLUDE = EXCLUDE;
var EXCLUSION = 'exclusion';
exports.EXCLUSION = EXCLUSION;
var EXPANDED = 'expanded';
exports.EXPANDED = EXPANDED;
var EXTRA_CONDENSED = 'extra-condensed';
exports.EXTRA_CONDENSED = EXTRA_CONDENSED;
var EXTRA_EXPANDED = 'extra-expanded';
exports.EXTRA_EXPANDED = EXTRA_EXPANDED;
var FANTASY = 'fantasy';
exports.FANTASY = FANTASY;
var FAR_LEFT = 'far-left';
exports.FAR_LEFT = FAR_LEFT;
var FAR_RIGHT = 'far-right';
exports.FAR_RIGHT = FAR_RIGHT;
var FARTHEST_CORNER = 'farthest-side';
exports.FARTHEST_CORNER = FARTHEST_CORNER;
var FARTHEST_SIDE = 'farthest-side';
exports.FARTHEST_SIDE = FARTHEST_SIDE;
var FAST = 'fast';
exports.FAST = FAST;
var FASTER = 'faster';
exports.FASTER = FASTER;
var FILL = 'fill';
exports.FILL = FILL;
var FILL_BOX = 'fill-box';
exports.FILL_BOX = FILL_BOX;
var FILLED = 'filled';
exports.FILLED = FILLED;
var FIRST = 'first';
exports.FIRST = FIRST;
var FIXED = 'fixed';
exports.FIXED = FIXED;
var FLEX = 'flex';
exports.FLEX = FLEX;
var FLEX_END = 'flex-end';
exports.FLEX_END = FLEX_END;
var FLEX_START = 'flex-start';
exports.FLEX_START = FLEX_START;
var FLOW = 'flow';
exports.FLOW = FLOW;
var FLOW_ROOT = 'flow-root';
exports.FLOW_ROOT = FLOW_ROOT;
var FORCE = 'force';
exports.FORCE = FORCE;
var FORCE_END = 'force-end';
exports.FORCE_END = FORCE_END;
var FORWARDS = 'forwards';
exports.FORWARDS = FORWARDS;
var FRAGMENTS = 'fragments';
exports.FRAGMENTS = FRAGMENTS;
var FRONT_IMAGE = 'front-image';
exports.FRONT_IMAGE = FRONT_IMAGE;
var FULL_WIDTH = 'full-width';
exports.FULL_WIDTH = FULL_WIDTH;
var GAPS = 'gaps';
exports.GAPS = GAPS;
var GEORGIAN = 'georgian';
exports.GEORGIAN = GEORGIAN;
var GRAB = 'grab';
exports.GRAB = GRAB;
var GRABBING = 'grabbing';
exports.GRABBING = GRABBING;
var GRID = 'grid';
exports.GRID = GRID;
var GROOVE = 'groove';
exports.GROOVE = GROOVE;
var HANGING = 'hanging';
exports.HANGING = HANGING;
var HARD_LIGHT = 'hard-light';
exports.HARD_LIGHT = HARD_LIGHT;
var HEBREW = 'hebrew';
exports.HEBREW = HEBREW;
var HELP = 'help';
exports.HELP = HELP;
var HIDDEN = 'hidden';
exports.HIDDEN = HIDDEN;
var HIDE = 'hide';
exports.HIDE = HIDE;
var HIGH = 'high';
exports.HIGH = HIGH;
var HIGHER = 'higher';
exports.HIGHER = HIGHER;
var HISTORICAL_LIGATURES = 'historical-ligatures';
exports.HISTORICAL_LIGATURES = HISTORICAL_LIGATURES;
var HORIZONTAL = 'horizontal';
exports.HORIZONTAL = HORIZONTAL;
var HORIZONTAL_TB = 'horizontal-tb';
exports.HORIZONTAL_TB = HORIZONTAL_TB;
var HUE = 'hue';
exports.HUE = HUE;
var ICON = 'icon';
exports.ICON = ICON;
var IDEOGRAPHIC = 'ideographic';
exports.IDEOGRAPHIC = IDEOGRAPHIC;
var INFINITE = 'infinite';
exports.INFINITE = INFINITE;
var INHERIT = 'inherit';
exports.INHERIT = INHERIT;
var INITIAL = 'initial';
exports.INITIAL = INITIAL;
var INLINE = 'inline';
exports.INLINE = INLINE;
var INLINE_BLOCK = 'inline-block';
exports.INLINE_BLOCK = INLINE_BLOCK;
var INLINE_END = 'inline-end';
exports.INLINE_END = INLINE_END;
var INLINE_FLEX = 'inline-flex';
exports.INLINE_FLEX = INLINE_FLEX;
var INLINE_GRID = 'inline-grid';
exports.INLINE_GRID = INLINE_GRID;
var INLINE_START = 'inline-start';
exports.INLINE_START = INLINE_START;
var INLINE_TABLE = 'inline-table';
exports.INLINE_TABLE = INLINE_TABLE;
var INSET = 'inset';
exports.INSET = INSET;
var INSIDE = 'inside';
exports.INSIDE = INSIDE;
var INTER_CHARACTER = 'inter-character';
exports.INTER_CHARACTER = INTER_CHARACTER;
var INTER_WORD = 'inter-word';
exports.INTER_WORD = INTER_WORD;
var INTERSECT = 'intersect';
exports.INTERSECT = INTERSECT;
var INVERT = 'invert';
exports.INVERT = INVERT;
var ISOLATE = 'isolate';
exports.ISOLATE = ISOLATE;
var ISOLATE_OVERRIDE = 'isolate-override';
exports.ISOLATE_OVERRIDE = ISOLATE_OVERRIDE;
var ITALIC = 'italic';
exports.ITALIC = ITALIC;
var JIS04 = 'jis40';
exports.JIS04 = JIS04;
var JIS78 = 'jis78';
exports.JIS78 = JIS78;
var JIS83 = 'jis83';
exports.JIS83 = JIS83;
var JIS90 = 'jis90';
exports.JIS90 = JIS90;
var JUSTIFY = 'justify';
exports.JUSTIFY = JUSTIFY;
var JUSTIFY_ALL = 'justify-all';
exports.JUSTIFY_ALL = JUSTIFY_ALL;
var KEEP_ALL = 'keep-all';
exports.KEEP_ALL = KEEP_ALL;
var LANDSCAPE = 'landscape';
exports.LANDSCAPE = LANDSCAPE;
var LARGE = 'large';
exports.LARGE = LARGE;
var LARGER = 'larger';
exports.LARGER = LARGER;
var LAST = 'last';
exports.LAST = LAST;
var LAYOUT = 'layout';
exports.LAYOUT = LAYOUT;
var LEFT = 'left';
exports.LEFT = LEFT;
var LEFT_SIDE = 'left-side';
exports.LEFT_SIDE = LEFT_SIDE;
var LEFTWARDS = 'leftwards';
exports.LEFTWARDS = LEFTWARDS;
var LEGACY = 'legacy';
exports.LEGACY = LEGACY;
var LEVEL = 'level';
exports.LEVEL = LEVEL;
var LIGHTEN = 'lighten';
exports.LIGHTEN = LIGHTEN;
var LIGHTER = 'lighter';
exports.LIGHTER = LIGHTER;
var LINE_THROUGH = 'line-through';
exports.LINE_THROUGH = LINE_THROUGH;
var LINEAR = 'linear';
exports.LINEAR = LINEAR;
var LINEARRGB = 'linearRGB';
exports.LINEARRGB = LINEARRGB;
var LINING_NUMS = 'lining-nums';
exports.LINING_NUMS = LINING_NUMS;
var LIST_CONTAINER = 'list-container';
exports.LIST_CONTAINER = LIST_CONTAINER;
var LIST_ITEM = 'list-item';
exports.LIST_ITEM = LIST_ITEM;
var LOCAL = 'local';
exports.LOCAL = LOCAL;
var LOOSE = 'loose';
exports.LOOSE = LOOSE;
var LOUD = 'loud';
exports.LOUD = LOUD;
var LOW = 'low';
exports.LOW = LOW;
var LOWER = 'lower';
exports.LOWER = LOWER;
var LOWER_ALPHA = 'lower-alpha';
exports.LOWER_ALPHA = LOWER_ALPHA;
var LOWER_GREEK = 'lower-greek';
exports.LOWER_GREEK = LOWER_GREEK;
var LOWER_LATIN = 'lower-latin';
exports.LOWER_LATIN = LOWER_LATIN;
var LOWER_ROMAN = 'lower-roman';
exports.LOWER_ROMAN = LOWER_ROMAN;
var LOWERCASE = 'lowercase';
exports.LOWERCASE = LOWERCASE;
var LTR = 'ltr';
exports.LTR = LTR;
var LUMINANCE = 'luminance';
exports.LUMINANCE = LUMINANCE;
var LUMINOSITY = 'luminosity';
exports.LUMINOSITY = LUMINOSITY;
var MANDATORY = 'mandatory';
exports.MANDATORY = MANDATORY;
var MANUAL = 'manual';
exports.MANUAL = MANUAL;
var MARGIN_BOX = 'margin-box';
exports.MARGIN_BOX = MARGIN_BOX;
var MATCH_PARENT = 'match-parent';
exports.MATCH_PARENT = MATCH_PARENT;
var MATHEMATICAL = 'mathematical';
exports.MATHEMATICAL = MATHEMATICAL;
var MAX_CONTENT = 'max-content';
exports.MAX_CONTENT = MAX_CONTENT;
var MEDIUM = 'medium';
exports.MEDIUM = MEDIUM;
var MENU = 'menu';
exports.MENU = MENU;
var MESSAGE_BOX = 'message-box';
exports.MESSAGE_BOX = MESSAGE_BOX;
var MIDDLE = 'middle';
exports.MIDDLE = MIDDLE;
var MIN_CONTENT = 'min-content';
exports.MIN_CONTENT = MIN_CONTENT;
var MITER = 'miter';
exports.MITER = MITER;
var MIX = 'mix';
exports.MIX = MIX;
var MIXED = 'mixed';
exports.MIXED = MIXED;
var MONOSPACE = 'monospace';
exports.MONOSPACE = MONOSPACE;
var MOVE = 'move';
exports.MOVE = MOVE;
var MULTIPLY = 'multiply';
exports.MULTIPLY = MULTIPLY;
var N_RESIZE = 'n-resize';
exports.N_RESIZE = N_RESIZE;
var NE_RESIZE = 'ne-resize';
exports.NE_RESIZE = NE_RESIZE;
var NESW_RESIZE = 'nesw-resize';
exports.NESW_RESIZE = NESW_RESIZE;
var NO_CLIP = 'no-clip';
exports.NO_CLIP = NO_CLIP;
var NO_CLOSE_QUOTE = 'no-close-quote';
exports.NO_CLOSE_QUOTE = NO_CLOSE_QUOTE;
var NO_COMMON_LIGATURES = 'no-common-ligatures';
exports.NO_COMMON_LIGATURES = NO_COMMON_LIGATURES;
var NO_CONTEXTUAL = 'no-contextual';
exports.NO_CONTEXTUAL = NO_CONTEXTUAL;
var NO_DISCRETIONARY_LIGATURES = 'no-discretionary-ligatures';
exports.NO_DISCRETIONARY_LIGATURES = NO_DISCRETIONARY_LIGATURES;
var NO_DROP = 'no-drop';
exports.NO_DROP = NO_DROP;
var NO_HISTORICAL_LIGATURES = 'no-historical-ligatures';
exports.NO_HISTORICAL_LIGATURES = NO_HISTORICAL_LIGATURES;
var NO_OPEN_QUOTE = 'no-open-quote';
exports.NO_OPEN_QUOTE = NO_OPEN_QUOTE;
var NO_REPEAT = 'no-repeat';
exports.NO_REPEAT = NO_REPEAT;
var NONE = 'none';
exports.NONE = NONE;
var NONZERO = 'nonzero';
exports.NONZERO = NONZERO;
var NORMAL = 'normal';
exports.NORMAL = NORMAL;
var NOT_ALLOWED = 'not-allowed';
exports.NOT_ALLOWED = NOT_ALLOWED;
var NOWRAP = 'nowrap';
exports.NOWRAP = NOWRAP;
var NS_RESIZE = 'ns-resize';
exports.NS_RESIZE = NS_RESIZE;
var NW_RESIZE = 'nw-resize';
exports.NW_RESIZE = NW_RESIZE;
var NWSE_RESIZE = 'nwse-resize';
exports.NWSE_RESIZE = NWSE_RESIZE;
var OBLIQUE = 'oblique';
exports.OBLIQUE = OBLIQUE;
var OFF = 'off';
exports.OFF = OFF;
var OLDSTYLE_NUMS = 'oldstyle-nums';
exports.OLDSTYLE_NUMS = OLDSTYLE_NUMS;
var ON = 'on';
exports.ON = ON;
var ONCE = 'once';
exports.ONCE = ONCE;
var OPEN = 'open';
exports.OPEN = OPEN;
var OPEN_QUOTE = 'open-quote';
exports.OPEN_QUOTE = OPEN_QUOTE;
var ORDINAL = 'ordinal';
exports.ORDINAL = ORDINAL;
var OUTSET = 'outset';
exports.OUTSET = OUTSET;
var OUTSIDE = 'outside';
exports.OUTSIDE = OUTSIDE;
var OUTSIDE_SHAPE = 'outside-shape';
exports.OUTSIDE_SHAPE = OUTSIDE_SHAPE;
var OVER = 'over';
exports.OVER = OVER;
var OVERFLOW = 'overflow';
exports.OVERFLOW = OVERFLOW;
var OVERLAY = 'overlay';
exports.OVERLAY = OVERLAY;
var OVERLINE = 'overline';
exports.OVERLINE = OVERLINE;
var PADDING_BOX = 'padding-box';
exports.PADDING_BOX = PADDING_BOX;
var PAGE = 'page';
exports.PAGE = PAGE;
var PAGINATE = 'paginate';
exports.PAGINATE = PAGINATE;
var PAINT = 'paint';
exports.PAINT = PAINT;
var PARENT = 'parent';
exports.PARENT = PARENT;
var PAUSED = 'paused';
exports.PAUSED = PAUSED;
var PETITE_CAPS = 'petite-caps';
exports.PETITE_CAPS = PETITE_CAPS;
var PLAINTEXT = 'plaintext';
exports.PLAINTEXT = PLAINTEXT;
var POINTER = 'pointer';
exports.POINTER = POINTER;
var PORTRAIT = 'portrait';
exports.PORTRAIT = PORTRAIT;
var PRE = 'pre';
exports.PRE = PRE;
var PRE_LINE = 'pre-line';
exports.PRE_LINE = PRE_LINE;
var PRE_WRAP = 'pre-wrap';
exports.PRE_WRAP = PRE_WRAP;
var PROGRESS = 'progress';
exports.PROGRESS = PROGRESS;
var PROPORTIONAL_NUMS = 'proportional-nums';
exports.PROPORTIONAL_NUMS = PROPORTIONAL_NUMS;
var PROPORTIONAL_WIDTH = 'proportional-width';
exports.PROPORTIONAL_WIDTH = PROPORTIONAL_WIDTH;
var PROXIMITY = 'proximity';
exports.PROXIMITY = PROXIMITY;
var RECT = 'rect';
exports.RECT = RECT;
var RECTO = 'recto';
exports.RECTO = RECTO;
var REGION = 'region';
exports.REGION = REGION;
var RELATIVE = 'relative';
exports.RELATIVE = RELATIVE;
var REPEAT = 'repeat';
exports.REPEAT = REPEAT;
var REPEAT_X = 'repeat-x';
exports.REPEAT_X = REPEAT_X;
var REPEAT_Y = 'repeat-y';
exports.REPEAT_Y = REPEAT_Y;
var REVERSE = 'reverse';
exports.REVERSE = REVERSE;
var REVERT = 'revert';
exports.REVERT = REVERT;
var RIDGE = 'ridge';
exports.RIDGE = RIDGE;
var RIGHT = 'right';
exports.RIGHT = RIGHT;
var RIGHT_SIDE = 'right-side';
exports.RIGHT_SIDE = RIGHT_SIDE;
var RIGHTWARDS = 'rightwards';
exports.RIGHTWARDS = RIGHTWARDS;
var ROUND = 'round';
exports.ROUND = ROUND;
var ROW = 'row';
exports.ROW = ROW;
var ROW_RESIZE = 'row-resize';
exports.ROW_RESIZE = ROW_RESIZE;
var ROW_REVERSE = 'row-reverse';
exports.ROW_REVERSE = ROW_REVERSE;
var RTL = 'rtl';
exports.RTL = RTL;
var RUBY = 'ruby';
exports.RUBY = RUBY;
var RUBY_BASE = 'ruby-base';
exports.RUBY_BASE = RUBY_BASE;
var RUBY_BASE_CONTAINER = 'ruby-base-container';
exports.RUBY_BASE_CONTAINER = RUBY_BASE_CONTAINER;
var RUBY_TEXT = 'ruby-text';
exports.RUBY_TEXT = RUBY_TEXT;
var RUBY_TEXT_CONTAINER = 'ruby-text-container';
exports.RUBY_TEXT_CONTAINER = RUBY_TEXT_CONTAINER;
var RUN_IN = 'run-in';
exports.RUN_IN = RUN_IN;
var RUNNING = 'running';
exports.RUNNING = RUNNING;
var S_RESIZE = 's-resize';
exports.S_RESIZE = S_RESIZE;
var SAFE = 'safe';
exports.SAFE = SAFE;
var SAME = 'same';
exports.SAME = SAME;
var SANS_SERIF = 'sans-serif';
exports.SANS_SERIF = SANS_SERIF;
var SATURATION = 'saturation';
exports.SATURATION = SATURATION;
var SCALE_DOWN = 'scale-down';
exports.SCALE_DOWN = SCALE_DOWN;
var SCREEN = 'screen';
exports.SCREEN = SCREEN;
var SCROLL = 'scroll';
exports.SCROLL = SCROLL;
var SCROLL_POSITION = 'scroll-position';
exports.SCROLL_POSITION = SCROLL_POSITION;
var SE_RESIZE = 'se-resize';
exports.SE_RESIZE = SE_RESIZE;
var SELF_END = 'self-end';
exports.SELF_END = SELF_END;
var SELF_START = 'self-start';
exports.SELF_START = SELF_START;
var SEMI_CONDENSED = 'semi-condensed';
exports.SEMI_CONDENSED = SEMI_CONDENSED;
var SEMI_EXPANDED = 'semi-expanded';
exports.SEMI_EXPANDED = SEMI_EXPANDED;
var SEPARATE = 'separate';
exports.SEPARATE = SEPARATE;
var SERIF = 'serif';
exports.SERIF = SERIF;
var SESAME = 'sesame';
exports.SESAME = SESAME;
var SHAPE_BOX = 'shape-box';
exports.SHAPE_BOX = SHAPE_BOX;
var SHOW = 'show';
exports.SHOW = SHOW;
var SIDEWAYS = 'sideways';
exports.SIDEWAYS = SIDEWAYS;
var SIDEWAYS_LR = 'sideways-lr';
exports.SIDEWAYS_LR = SIDEWAYS_LR;
var SIDEWAYS_RL = 'sideways-rl';
exports.SIDEWAYS_RL = SIDEWAYS_RL;
var SILENT = 'silent';
exports.SILENT = SILENT;
var SIMPLIFIED = 'simplified';
exports.SIMPLIFIED = SIMPLIFIED;
var SIZE = 'size';
exports.SIZE = SIZE;
var SLASHED_ZERO = 'slashed-zero';
exports.SLASHED_ZERO = SLASHED_ZERO;
var SLICE = 'slice';
exports.SLICE = SLICE;
var SLOW = 'slow';
exports.SLOW = SLOW;
var SLOWER = 'slower';
exports.SLOWER = SLOWER;
var SMALL = 'small';
exports.SMALL = SMALL;
var SMALL_CAPS = 'small-caps';
exports.SMALL_CAPS = SMALL_CAPS;
var SMALL_CAPTION = 'small-caption';
exports.SMALL_CAPTION = SMALL_CAPTION;
var SMALLER = 'smaller';
exports.SMALLER = SMALLER;
var SMOOTH = 'smooth';
exports.SMOOTH = SMOOTH;
var SNAP = 'snap';
exports.SNAP = SNAP;
var SNAP_BLOCK = 'snap-block';
exports.SNAP_BLOCK = SNAP_BLOCK;
var SNAP_INLINE = 'snap-inline';
exports.SNAP_INLINE = SNAP_INLINE;
var SOFT = 'soft';
exports.SOFT = SOFT;
var SOFT_LIGHT = 'soft-light';
exports.SOFT_LIGHT = SOFT_LIGHT;
var SOLID = 'solid';
exports.SOLID = SOLID;
var SPACE = 'space';
exports.SPACE = SPACE;
var SPACE_AROUND = 'space-around';
exports.SPACE_AROUND = SPACE_AROUND;
var SPACE_BETWEEN = 'space-between';
exports.SPACE_BETWEEN = SPACE_BETWEEN;
var SPACE_EVENLY = 'space-evenly';
exports.SPACE_EVENLY = SPACE_EVENLY;
var SPAN = 'span';
exports.SPAN = SPAN;
var SPELL_OUT = 'spell-out';
exports.SPELL_OUT = SPELL_OUT;
var SQUARE = 'square';
exports.SQUARE = SQUARE;
var SRGB = 'sRGB';
exports.SRGB = SRGB;
var STABLE = 'stable';
exports.STABLE = STABLE;
var STACKED_FRACTIONS = 'stacked-fractions';
exports.STACKED_FRACTIONS = STACKED_FRACTIONS;
var START = 'start';
exports.START = START;
var STATIC = 'static';
exports.STATIC = STATIC;
var STATUS_BAR = 'status-bar';
exports.STATUS_BAR = STATUS_BAR;
var STEP_END = 'step-end';
exports.STEP_END = STEP_END;
var STEP_START = 'step-start';
exports.STEP_START = STEP_START;
var STICKY = 'sticky';
exports.STICKY = STICKY;
var STRETCH = 'stretch';
exports.STRETCH = STRETCH;
var STRICT = 'strict';
exports.STRICT = STRICT;
var STROKE_BOX = 'stroke-box';
exports.STROKE_BOX = STROKE_BOX;
var STUPID = 'stupid';
exports.STUPID = STUPID;
var STYLE = 'style';
exports.STYLE = STYLE;
var SUB = 'sub';
exports.SUB = SUB;
var SUBGRID = 'subgrid';
exports.SUBGRID = SUBGRID;
var SUBTRACT = 'subtract';
exports.SUBTRACT = SUBTRACT;
var SUPER = 'super';
exports.SUPER = SUPER;
var SW_RESIZE = 'sw-resize';
exports.SW_RESIZE = SW_RESIZE;
var TABLE = 'table';
exports.TABLE = TABLE;
var TABLE_CAPTION = 'table-caption';
exports.TABLE_CAPTION = TABLE_CAPTION;
var TABLE_CELL = 'table-cell';
exports.TABLE_CELL = TABLE_CELL;
var TABLE_COLUMN = 'table-column';
exports.TABLE_COLUMN = TABLE_COLUMN;
var TABLE_COLUMN_GROUP = 'table-column-group';
exports.TABLE_COLUMN_GROUP = TABLE_COLUMN_GROUP;
var TABLE_FOOTER_GROUP = 'table-footer-group';
exports.TABLE_FOOTER_GROUP = TABLE_FOOTER_GROUP;
var TABLE_HEADER_GROUP = 'table-header-group';
exports.TABLE_HEADER_GROUP = TABLE_HEADER_GROUP;
var TABLE_ROW = 'table-row';
exports.TABLE_ROW = TABLE_ROW;
var TABLE_ROW_GROUP = 'table-row-group';
exports.TABLE_ROW_GROUP = TABLE_ROW_GROUP;
var TABULAR_NUMS = 'tabular-nums';
exports.TABULAR_NUMS = TABULAR_NUMS;
var TEXT = 'text';
exports.TEXT = TEXT;
var TEXT_BOTTOM = 'text-bottom';
exports.TEXT_BOTTOM = TEXT_BOTTOM;
var TEXT_TOP = 'text-top';
exports.TEXT_TOP = TEXT_TOP;
var THICK = 'thick';
exports.THICK = THICK;
var THIN = 'thin';
exports.THIN = THIN;
var TITLING_CAPS = 'titling-caps';
exports.TITLING_CAPS = TITLING_CAPS;
var TO = 'to';
exports.TO = TO;
var TOP = 'top';
exports.TOP = TOP;
var TRADITIONAL = 'traditional';
exports.TRADITIONAL = TRADITIONAL;
var TRANSPARENT = 'transparent';
exports.TRANSPARENT = TRANSPARENT;
var TRIANGLE = 'triangle';
exports.TRIANGLE = TRIANGLE;
var ULTRA_CONDENSED = 'ultra-condensed';
exports.ULTRA_CONDENSED = ULTRA_CONDENSED;
var ULTRA_EXPANDED = 'ultra-expanded';
exports.ULTRA_EXPANDED = ULTRA_EXPANDED;
var UNDER = 'under';
exports.UNDER = UNDER;
var UNDERLINE = 'underline';
exports.UNDERLINE = UNDERLINE;
var UNICASE = 'unicase';
exports.UNICASE = UNICASE;
var UNSAFE = 'unsafe';
exports.UNSAFE = UNSAFE;
var UNSET = 'unset';
exports.UNSET = UNSET;
var UPPER_ALPHA = 'upper-alpha';
exports.UPPER_ALPHA = UPPER_ALPHA;
var UPPER_GREEK = 'upper-greek';
exports.UPPER_GREEK = UPPER_GREEK;
var UPPER_LATIN = 'upper-latin';
exports.UPPER_LATIN = UPPER_LATIN;
var UPPER_ROMAN = 'upper-roman';
exports.UPPER_ROMAN = UPPER_ROMAN;
var UPPERCASE = 'uppercase';
exports.UPPERCASE = UPPERCASE;
var UPRIGHT = 'upright';
exports.UPRIGHT = UPRIGHT;
var VERSO = 'verso';
exports.VERSO = VERSO;
var VERTICAL = 'vertical';
exports.VERTICAL = VERTICAL;
var VERTICAL_LR = 'vertical-lr';
exports.VERTICAL_LR = VERTICAL_LR;
var VERTICAL_RL = 'vertical-rl';
exports.VERTICAL_RL = VERTICAL_RL;
var VERTICAL_TEXT = 'vertical-text';
exports.VERTICAL_TEXT = VERTICAL_TEXT;
var VIEW_BOX = 'view-box';
exports.VIEW_BOX = VIEW_BOX;
var VISIBLE = 'visible';
exports.VISIBLE = VISIBLE;
var W_RESIZE = 'w-resize';
exports.W_RESIZE = W_RESIZE;
var WAIT = 'wait';
exports.WAIT = WAIT;
var WAVY = 'wavy';
exports.WAVY = WAVY;
var WRAP = 'wrap';
exports.WRAP = WRAP;
var WRAP_REVERSE = 'wrap-reverse';
exports.WRAP_REVERSE = WRAP_REVERSE;
var X = 'x';
exports.X = X;
var X_FAST = 'x-fast';
exports.X_FAST = X_FAST;
var X_HIGH = 'x-high';
exports.X_HIGH = X_HIGH;
var X_LARGE = 'x-large';
exports.X_LARGE = X_LARGE;
var X_LOUD = 'x-loud';
exports.X_LOUD = X_LOUD;
var X_LOW = 'x-low';
exports.X_LOW = X_LOW;
var X_SLOW = 'x-slow';
exports.X_SLOW = X_SLOW;
var X_SMALL = 'x-small';
exports.X_SMALL = X_SMALL;
var X_SOFT = 'x-soft';
exports.X_SOFT = X_SOFT;
var XX_LARGE = 'xx-large';
exports.XX_LARGE = XX_LARGE;
var XX_SMALL = 'xx-small';
exports.XX_SMALL = XX_SMALL;
var Y = 'y';
exports.Y = Y;
var ZOOM = 'zoom';
exports.ZOOM = ZOOM;
var ZOOM_IN = 'zoom-in';
exports.ZOOM_IN = ZOOM_IN;
var ZOOM_OUT = 'zoom-out';
exports.ZOOM_OUT = ZOOM_OUT;
var Keywords = {
  _100: _100,
  _200: _200,
  _300: _300,
  _400: _400,
  _500: _500,
  _600: _600,
  _700: _700,
  _800: _800,
  _900: _900,
  ABOVE: ABOVE,
  ABSOLUTE: ABSOLUTE,
  ADD: ADD,
  ALIAS: ALIAS,
  ALL: ALL,
  ALL_PETITE_CAPS: ALL_PETITE_CAPS,
  ALL_SCROLL: ALL_SCROLL,
  ALL_SMALL_CAPS: ALL_SMALL_CAPS,
  ALLOW_END: ALLOW_END,
  ALPHA: ALPHA,
  ALPHABETIC: ALPHABETIC,
  ALTERNATE: ALTERNATE,
  ALTERNATE_REVERSE: ALTERNATE_REVERSE,
  ALWAYS: ALWAYS,
  ANYWHERE: ANYWHERE,
  ARCS: ARCS,
  ARMENIAN: ARMENIAN,
  AROUND: AROUND,
  AT: AT,
  AUTO: AUTO,
  AVOID: AVOID,
  AVOID_COLUMN: AVOID_COLUMN,
  AVOID_PAGE: AVOID_PAGE,
  AVOID_REGION: AVOID_REGION,
  BACKWARDS: BACKWARDS,
  BALANCE: BALANCE,
  BALANCE_ALL: BALANCE_ALL,
  BASELINE: BASELINE,
  BEHIND: BEHIND,
  BELOW: BELOW,
  BEVEL: BEVEL,
  BIDI_OVERRIDE: BIDI_OVERRIDE,
  BLINK: BLINK,
  BLOCK: BLOCK,
  BLOCK_END: BLOCK_END,
  BLOCK_START: BLOCK_START,
  BOLD: BOLD,
  BOLDER: BOLDER,
  BORDER_BOX: BORDER_BOX,
  BOTH: BOTH,
  BOTTOM: BOTTOM,
  BOUNDING_BOX: BOUNDING_BOX,
  BREAK_ALL: BREAK_ALL,
  BREAK_SPACES: BREAK_SPACES,
  BREAK_WORD: BREAK_WORD,
  BUTT: BUTT,
  CAPITALIZE: CAPITALIZE,
  CAPTION: CAPTION,
  CELL: CELL,
  CENTER: CENTER,
  CENTER_LEFT: CENTER_LEFT,
  CENTER_RIGHT: CENTER_RIGHT,
  CENTRAL: CENTRAL,
  CIRCLE: CIRCLE,
  CLIP: CLIP,
  CLONE: CLONE,
  CLOSE: CLOSE,
  CLOSE_QUOTE: CLOSE_QUOTE,
  CLOSEST_CORNER: CLOSEST_CORNER,
  CLOSEST_SIDE: CLOSEST_SIDE,
  CODE: CODE,
  COL_RESIZE: COL_RESIZE,
  COLLAPSE: COLLAPSE,
  COLOR: COLOR,
  COLOR_BURN: COLOR_BURN,
  COLOR_DODGE: COLOR_DODGE,
  COLUMN: COLUMN,
  COLUMN_REVERSE: COLUMN_REVERSE,
  COMMON_LIGATURES: COMMON_LIGATURES,
  COMPRESS: COMPRESS,
  CONDENSED: CONDENSED,
  CONTAIN: CONTAIN,
  CONTENT: CONTENT,
  CONTENT_BOX: CONTENT_BOX,
  CONTENTS: CONTENTS,
  CONTEXT_MENU: CONTEXT_MENU,
  CONTEXTUAL: CONTEXTUAL,
  CONTINUOUS: CONTINUOUS,
  COPY: COPY,
  COVER: COVER,
  CROP: CROP,
  CROSSHAIR: CROSSHAIR,
  CURRENT_COLOR: CURRENT_COLOR,
  CURSIVE: CURSIVE,
  DARKEN: DARKEN,
  DASHED: DASHED,
  DASHES: DASHES,
  DECIMAL: DECIMAL,
  DECIMAL_LEADING_ZERO: DECIMAL_LEADING_ZERO,
  DEFAULT: DEFAULT,
  DENSE: DENSE,
  DIAGONAL_FRACTIONS: DIAGONAL_FRACTIONS,
  DIFFERENCE: DIFFERENCE,
  DIGITS: DIGITS,
  DISC: DISC,
  DISCARD: DISCARD,
  DISCRETIONARY_LIGATURES: DISCRETIONARY_LIGATURES,
  DISPLAY: DISPLAY,
  DOCUMENT_URL: DOCUMENT_URL,
  DOT: DOT,
  DOTTED: DOTTED,
  DOUBLE: DOUBLE,
  DOUBLE_CIRCLE: DOUBLE_CIRCLE,
  E_RESIZE: E_RESIZE,
  EACH_LINE: EACH_LINE,
  EASE: EASE,
  EASE_IN: EASE_IN,
  EASE_IN_OUT: EASE_IN_OUT,
  EASE_OUT: EASE_OUT,
  ELLIPSE: ELLIPSE,
  ELLIPSIS: ELLIPSIS,
  EMBED: EMBED,
  END: END,
  EVENODD: EVENODD,
  EW_RESIZE: EW_RESIZE,
  EXCLUDE: EXCLUDE,
  EXCLUSION: EXCLUSION,
  EXPANDED: EXPANDED,
  EXTRA_CONDENSED: EXTRA_CONDENSED,
  EXTRA_EXPANDED: EXTRA_EXPANDED,
  FANTASY: FANTASY,
  FAR_LEFT: FAR_LEFT,
  FAR_RIGHT: FAR_RIGHT,
  FARTHEST_CORNER: FARTHEST_CORNER,
  FARTHEST_SIDE: FARTHEST_SIDE,
  FAST: FAST,
  FASTER: FASTER,
  FILL: FILL,
  FILL_BOX: FILL_BOX,
  FILLED: FILLED,
  FIRST: FIRST,
  FIXED: FIXED,
  FLEX: FLEX,
  FLEX_END: FLEX_END,
  FLEX_START: FLEX_START,
  FLOW: FLOW,
  FLOW_ROOT: FLOW_ROOT,
  FORCE: FORCE,
  FORCE_END: FORCE_END,
  FORWARDS: FORWARDS,
  FRAGMENTS: FRAGMENTS,
  FRONT_IMAGE: FRONT_IMAGE,
  FULL_WIDTH: FULL_WIDTH,
  GAPS: GAPS,
  GEORGIAN: GEORGIAN,
  GRAB: GRAB,
  GRABBING: GRABBING,
  GRID: GRID,
  GROOVE: GROOVE,
  HANGING: HANGING,
  HARD_LIGHT: HARD_LIGHT,
  HEBREW: HEBREW,
  HELP: HELP,
  HIDDEN: HIDDEN,
  HIDE: HIDE,
  HIGH: HIGH,
  HIGHER: HIGHER,
  HISTORICAL_LIGATURES: HISTORICAL_LIGATURES,
  HORIZONTAL: HORIZONTAL,
  HORIZONTAL_TB: HORIZONTAL_TB,
  HUE: HUE,
  ICON: ICON,
  IDEOGRAPHIC: IDEOGRAPHIC,
  INFINITE: INFINITE,
  INHERIT: INHERIT,
  INITIAL: INITIAL,
  INLINE: INLINE,
  INLINE_BLOCK: INLINE_BLOCK,
  INLINE_END: INLINE_END,
  INLINE_FLEX: INLINE_FLEX,
  INLINE_GRID: INLINE_GRID,
  INLINE_START: INLINE_START,
  INLINE_TABLE: INLINE_TABLE,
  INSET: INSET,
  INSIDE: INSIDE,
  INTER_CHARACTER: INTER_CHARACTER,
  INTER_WORD: INTER_WORD,
  INTERSECT: INTERSECT,
  INVERT: INVERT,
  ISOLATE: ISOLATE,
  ISOLATE_OVERRIDE: ISOLATE_OVERRIDE,
  ITALIC: ITALIC,
  JIS04: JIS04,
  JIS78: JIS78,
  JIS83: JIS83,
  JIS90: JIS90,
  JUSTIFY: JUSTIFY,
  JUSTIFY_ALL: JUSTIFY_ALL,
  KEEP_ALL: KEEP_ALL,
  LANDSCAPE: LANDSCAPE,
  LARGE: LARGE,
  LARGER: LARGER,
  LAST: LAST,
  LAYOUT: LAYOUT,
  LEFT: LEFT,
  LEFT_SIDE: LEFT_SIDE,
  LEFTWARDS: LEFTWARDS,
  LEGACY: LEGACY,
  LEVEL: LEVEL,
  LIGHTEN: LIGHTEN,
  LIGHTER: LIGHTER,
  LINE_THROUGH: LINE_THROUGH,
  LINEAR: LINEAR,
  LINEARRGB: LINEARRGB,
  LINING_NUMS: LINING_NUMS,
  LIST_CONTAINER: LIST_CONTAINER,
  LIST_ITEM: LIST_ITEM,
  LOCAL: LOCAL,
  LOOSE: LOOSE,
  LOUD: LOUD,
  LOW: LOW,
  LOWER: LOWER,
  LOWER_ALPHA: LOWER_ALPHA,
  LOWER_GREEK: LOWER_GREEK,
  LOWER_LATIN: LOWER_LATIN,
  LOWER_ROMAN: LOWER_ROMAN,
  LOWERCASE: LOWERCASE,
  LTR: LTR,
  LUMINANCE: LUMINANCE,
  LUMINOSITY: LUMINOSITY,
  MANDATORY: MANDATORY,
  MANUAL: MANUAL,
  MARGIN_BOX: MARGIN_BOX,
  MATCH_PARENT: MATCH_PARENT,
  MATHEMATICAL: MATHEMATICAL,
  MAX_CONTENT: MAX_CONTENT,
  MEDIUM: MEDIUM,
  MENU: MENU,
  MESSAGE_BOX: MESSAGE_BOX,
  MIDDLE: MIDDLE,
  MIN_CONTENT: MIN_CONTENT,
  MITER: MITER,
  MIX: MIX,
  MIXED: MIXED,
  MONOSPACE: MONOSPACE,
  MOVE: MOVE,
  MULTIPLY: MULTIPLY,
  N_RESIZE: N_RESIZE,
  NE_RESIZE: NE_RESIZE,
  NESW_RESIZE: NESW_RESIZE,
  NO_CLIP: NO_CLIP,
  NO_CLOSE_QUOTE: NO_CLOSE_QUOTE,
  NO_COMMON_LIGATURES: NO_COMMON_LIGATURES,
  NO_CONTEXTUAL: NO_CONTEXTUAL,
  NO_DISCRETIONARY_LIGATURES: NO_DISCRETIONARY_LIGATURES,
  NO_DROP: NO_DROP,
  NO_HISTORICAL_LIGATURES: NO_HISTORICAL_LIGATURES,
  NO_OPEN_QUOTE: NO_OPEN_QUOTE,
  NO_REPEAT: NO_REPEAT,
  NONE: NONE,
  NONZERO: NONZERO,
  NORMAL: NORMAL,
  NOT_ALLOWED: NOT_ALLOWED,
  NOWRAP: NOWRAP,
  NS_RESIZE: NS_RESIZE,
  NW_RESIZE: NW_RESIZE,
  NWSE_RESIZE: NWSE_RESIZE,
  OBLIQUE: OBLIQUE,
  OFF: OFF,
  OLDSTYLE_NUMS: OLDSTYLE_NUMS,
  ON: ON,
  ONCE: ONCE,
  OPEN: OPEN,
  OPEN_QUOTE: OPEN_QUOTE,
  ORDINAL: ORDINAL,
  OUTSET: OUTSET,
  OUTSIDE: OUTSIDE,
  OUTSIDE_SHAPE: OUTSIDE_SHAPE,
  OVER: OVER,
  OVERFLOW: OVERFLOW,
  OVERLAY: OVERLAY,
  OVERLINE: OVERLINE,
  PADDING_BOX: PADDING_BOX,
  PAGE: PAGE,
  PAGINATE: PAGINATE,
  PAINT: PAINT,
  PARENT: PARENT,
  PAUSED: PAUSED,
  PETITE_CAPS: PETITE_CAPS,
  PLAINTEXT: PLAINTEXT,
  POINTER: POINTER,
  PORTRAIT: PORTRAIT,
  PRE: PRE,
  PRE_LINE: PRE_LINE,
  PRE_WRAP: PRE_WRAP,
  PROGRESS: PROGRESS,
  PROPORTIONAL_NUMS: PROPORTIONAL_NUMS,
  PROPORTIONAL_WIDTH: PROPORTIONAL_WIDTH,
  PROXIMITY: PROXIMITY,
  RECT: RECT,
  RECTO: RECTO,
  REGION: REGION,
  RELATIVE: RELATIVE,
  REPEAT: REPEAT,
  REPEAT_X: REPEAT_X,
  REPEAT_Y: REPEAT_Y,
  REVERSE: REVERSE,
  REVERT: REVERT,
  RIDGE: RIDGE,
  RIGHT: RIGHT,
  RIGHT_SIDE: RIGHT_SIDE,
  RIGHTWARDS: RIGHTWARDS,
  ROUND: ROUND,
  ROW: ROW,
  ROW_RESIZE: ROW_RESIZE,
  ROW_REVERSE: ROW_REVERSE,
  RTL: RTL,
  RUBY: RUBY,
  RUBY_BASE: RUBY_BASE,
  RUBY_BASE_CONTAINER: RUBY_BASE_CONTAINER,
  RUBY_TEXT: RUBY_TEXT,
  RUBY_TEXT_CONTAINER: RUBY_TEXT_CONTAINER,
  RUN_IN: RUN_IN,
  RUNNING: RUNNING,
  S_RESIZE: S_RESIZE,
  SAFE: SAFE,
  SAME: SAME,
  SANS_SERIF: SANS_SERIF,
  SATURATION: SATURATION,
  SCALE_DOWN: SCALE_DOWN,
  SCREEN: SCREEN,
  SCROLL: SCROLL,
  SCROLL_POSITION: SCROLL_POSITION,
  SE_RESIZE: SE_RESIZE,
  SELF_END: SELF_END,
  SELF_START: SELF_START,
  SEMI_CONDENSED: SEMI_CONDENSED,
  SEMI_EXPANDED: SEMI_EXPANDED,
  SEPARATE: SEPARATE,
  SERIF: SERIF,
  SESAME: SESAME,
  SHAPE_BOX: SHAPE_BOX,
  SHOW: SHOW,
  SIDEWAYS: SIDEWAYS,
  SIDEWAYS_LR: SIDEWAYS_LR,
  SIDEWAYS_RL: SIDEWAYS_RL,
  SILENT: SILENT,
  SIMPLIFIED: SIMPLIFIED,
  SIZE: SIZE,
  SLASHED_ZERO: SLASHED_ZERO,
  SLICE: SLICE,
  SLOW: SLOW,
  SLOWER: SLOWER,
  SMALL: SMALL,
  SMALL_CAPS: SMALL_CAPS,
  SMALL_CAPTION: SMALL_CAPTION,
  SMALLER: SMALLER,
  SMOOTH: SMOOTH,
  SNAP: SNAP,
  SNAP_BLOCK: SNAP_BLOCK,
  SNAP_INLINE: SNAP_INLINE,
  SOFT: SOFT,
  SOFT_LIGHT: SOFT_LIGHT,
  SOLID: SOLID,
  SPACE: SPACE,
  SPACE_AROUND: SPACE_AROUND,
  SPACE_BETWEEN: SPACE_BETWEEN,
  SPACE_EVENLY: SPACE_EVENLY,
  SPAN: SPAN,
  SPELL_OUT: SPELL_OUT,
  SQUARE: SQUARE,
  SRGB: SRGB,
  STABLE: STABLE,
  STACKED_FRACTIONS: STACKED_FRACTIONS,
  START: START,
  STATIC: STATIC,
  STATUS_BAR: STATUS_BAR,
  STEP_END: STEP_END,
  STEP_START: STEP_START,
  STICKY: STICKY,
  STRETCH: STRETCH,
  STRICT: STRICT,
  STROKE_BOX: STROKE_BOX,
  STUPID: STUPID,
  STYLE: STYLE,
  SUB: SUB,
  SUBGRID: SUBGRID,
  SUBTRACT: SUBTRACT,
  SUPER: SUPER,
  SW_RESIZE: SW_RESIZE,
  TABLE: TABLE,
  TABLE_CAPTION: TABLE_CAPTION,
  TABLE_CELL: TABLE_CELL,
  TABLE_COLUMN: TABLE_COLUMN,
  TABLE_COLUMN_GROUP: TABLE_COLUMN_GROUP,
  TABLE_FOOTER_GROUP: TABLE_FOOTER_GROUP,
  TABLE_HEADER_GROUP: TABLE_HEADER_GROUP,
  TABLE_ROW: TABLE_ROW,
  TABLE_ROW_GROUP: TABLE_ROW_GROUP,
  TABULAR_NUMS: TABULAR_NUMS,
  TEXT: TEXT,
  TEXT_BOTTOM: TEXT_BOTTOM,
  TEXT_TOP: TEXT_TOP,
  THICK: THICK,
  THIN: THIN,
  TITLING_CAPS: TITLING_CAPS,
  TO: TO,
  TOP: TOP,
  TRADITIONAL: TRADITIONAL,
  TRANSPARENT: TRANSPARENT,
  TRIANGLE: TRIANGLE,
  ULTRA_CONDENSED: ULTRA_CONDENSED,
  ULTRA_EXPANDED: ULTRA_EXPANDED,
  UNDER: UNDER,
  UNDERLINE: UNDERLINE,
  UNICASE: UNICASE,
  UNSAFE: UNSAFE,
  UNSET: UNSET,
  UPPER_ALPHA: UPPER_ALPHA,
  UPPER_GREEK: UPPER_GREEK,
  UPPER_LATIN: UPPER_LATIN,
  UPPER_ROMAN: UPPER_ROMAN,
  UPPERCASE: UPPERCASE,
  UPRIGHT: UPRIGHT,
  VERSO: VERSO,
  VERTICAL: VERTICAL,
  VERTICAL_LR: VERTICAL_LR,
  VERTICAL_RL: VERTICAL_RL,
  VERTICAL_TEXT: VERTICAL_TEXT,
  VIEW_BOX: VIEW_BOX,
  VISIBLE: VISIBLE,
  W_RESIZE: W_RESIZE,
  WAIT: WAIT,
  WAVY: WAVY,
  WRAP: WRAP,
  WRAP_REVERSE: WRAP_REVERSE,
  X: X,
  X_FAST: X_FAST,
  X_HIGH: X_HIGH,
  X_LARGE: X_LARGE,
  X_LOUD: X_LOUD,
  X_LOW: X_LOW,
  X_SLOW: X_SLOW,
  X_SMALL: X_SMALL,
  X_SOFT: X_SOFT,
  XX_LARGE: XX_LARGE,
  XX_SMALL: XX_SMALL,
  Y: Y,
  ZOOM: ZOOM,
  ZOOM_IN: ZOOM_IN,
  ZOOM_OUT: ZOOM_OUT
};
exports.Keywords = Keywords;

/***/ }),

/***/ "./src/constants/units.js":
/*!********************************!*\
  !*** ./src/constants/units.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Units = exports.VW = exports.VMIN = exports.VMAX = exports.VI = exports.VH = exports.VB = exports.TURN = exports.S = exports.RLH = exports.REM = exports.RAD = exports.Q = exports.PX = exports.PT = exports.PERCENTAGE = exports.PC = exports.MS = exports.MM = exports.LH = exports.KHZ = exports.IN = exports.IC = exports.HZ = exports.GRAD = exports.FR = exports.EX = exports.EM = exports.DPPX = exports.DPI = exports.DPCM = exports.DEG = exports.CM = exports.CH = exports.CAP = void 0;
var CAP = 'cap';
exports.CAP = CAP;
var CH = 'ch';
exports.CH = CH;
var CM = 'cm';
exports.CM = CM;
var DEG = 'deg';
exports.DEG = DEG;
var DPCM = 'dpcm';
exports.DPCM = DPCM;
var DPI = 'dpi';
exports.DPI = DPI;
var DPPX = 'dppx';
exports.DPPX = DPPX;
var EM = 'em';
exports.EM = EM;
var EX = 'ex';
exports.EX = EX;
var FR = 'fr';
exports.FR = FR;
var GRAD = 'grad';
exports.GRAD = GRAD;
var HZ = 'Hz';
exports.HZ = HZ;
var IC = 'ic';
exports.IC = IC;
var IN = 'in';
exports.IN = IN;
var KHZ = 'kHz';
exports.KHZ = KHZ;
var LH = 'lh';
exports.LH = LH;
var MM = 'mm';
exports.MM = MM;
var MS = 'ms';
exports.MS = MS;
var PC = 'pc';
exports.PC = PC;
var PERCENTAGE = '%';
exports.PERCENTAGE = PERCENTAGE;
var PT = 'pt';
exports.PT = PT;
var PX = 'px';
exports.PX = PX;
var Q = 'Q';
exports.Q = Q;
var RAD = 'rad';
exports.RAD = RAD;
var REM = 'rem';
exports.REM = REM;
var RLH = 'rlh';
exports.RLH = RLH;
var S = 's';
exports.S = S;
var TURN = 'turn';
exports.TURN = TURN;
var VB = 'vb';
exports.VB = VB;
var VH = 'vh';
exports.VH = VH;
var VI = 'vi';
exports.VI = VI;
var VMAX = 'vmax';
exports.VMAX = VMAX;
var VMIN = 'vmin';
exports.VMIN = VMIN;
var VW = 'vw';
exports.VW = VW;
var Units = {
  CAP: CAP,
  CH: CH,
  CM: CM,
  DEG: DEG,
  DPCM: DPCM,
  DPI: DPI,
  DPPX: DPPX,
  EM: EM,
  EX: EX,
  FR: FR,
  GRAD: GRAD,
  HZ: HZ,
  IC: IC,
  IN: IN,
  KHZ: KHZ,
  LH: LH,
  MM: MM,
  MS: MS,
  PC: PC,
  PERCENTAGE: PERCENTAGE,
  PT: PT,
  PX: PX,
  Q: Q,
  RAD: RAD,
  REM: REM,
  RLH: RLH,
  S: S,
  TURN: TURN,
  VB: VB,
  VH: VH,
  VI: VI,
  VMAX: VMAX,
  VMIN: VMIN,
  VW: VW
};
exports.Units = Units;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  css: true,
  Methods: true,
  Properties: true
};
exports.css = css;
exports.Properties = exports.Methods = void 0;

var _constants = __webpack_require__(/*! ./constants */ "./src/constants/index.js");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

var _methods = __webpack_require__(/*! ./methods */ "./src/methods/index.js");

Object.keys(_methods).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _methods[key];
    }
  });
});

var _properties = __webpack_require__(/*! ./properties */ "./src/properties/index.js");

Object.keys(_properties).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _properties[key];
    }
  });
});

// export const css = (...styles) => Object.assign({}, ...styles);
function css() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  return Object.assign.apply(Object, [{}].concat(styles));
}

var Methods = {
  rgb: _methods.rgb,
  rgba: _methods.rgba,
  hsl: _methods.hsl,
  hsla: _methods.hsla,
  hex: _methods.hex,
  hexa: _methods.hexa,
  targetCounter: _methods.targetCounter,
  targetCounters: _methods.targetCounters,
  targetText: _methods.targetText,
  leader: _methods.leader,
  blur: _methods.blur,
  brightness: _methods.brightness,
  contrast: _methods.contrast,
  dropShadow: _methods.dropShadow,
  grayscale: _methods.grayscale,
  hueRotate: _methods.hueRotate,
  invert: _methods.invert,
  opacity: _methods.opacity,
  saturate: _methods.saturate,
  sepia: _methods.sepia,
  stylistic: _methods.stylistic,
  styleset: _methods.styleset,
  characterVariant: _methods.characterVariant,
  swash: _methods.swash,
  ornaments: _methods.ornaments,
  annotation: _methods.annotation,
  linearGradient: _methods.linearGradient,
  repeatingLinearGradient: _methods.repeatingLinearGradient,
  radialGradient: _methods.radialGradient,
  repeatingRadialGradient: _methods.repeatingRadialGradient,
  crossFade: _methods.crossFade,
  element: _methods.element,
  image: _methods.image,
  imageSet: _methods.imageSet,
  add: _methods.add,
  sub: _methods.sub,
  mul: _methods.mul,
  div: _methods.div,
  calc: _methods.calc,
  fitContent: _methods.fitContent,
  minMax: _methods.minMax,
  ray: _methods.ray,
  rect: _methods.rect,
  inset: _methods.inset,
  circle: _methods.circle,
  ellipse: _methods.ellipse,
  polygon: _methods.polygon,
  cubicBezier: _methods.cubicBezier,
  steps: _methods.steps,
  frames: _methods.frames,
  matrix: _methods.matrix,
  matrix3d: _methods.matrix3d,
  perspective: _methods.perspective,
  rotate: _methods.rotate,
  rotate3d: _methods.rotate3d,
  rotateX: _methods.rotateX,
  rotateY: _methods.rotateY,
  rotateZ: _methods.rotateZ,
  scale: _methods.scale,
  scale3d: _methods.scale3d,
  scaleX: _methods.scaleX,
  scaleY: _methods.scaleY,
  scaleZ: _methods.scaleZ,
  skew: _methods.skew,
  skewX: _methods.skewX,
  skewY: _methods.skewY,
  translate: _methods.translate,
  translate3d: _methods.translate3d,
  translateX: _methods.translateX,
  translateY: _methods.translateY,
  translateZ: _methods.translateZ,
  format: _methods.format,
  local: _methods.local,
  url: _methods.url,
  attr: _methods.attr,
  _var: _methods._var
};
exports.Methods = Methods;
var Properties = {
  AlignContent: _properties.AlignContent,
  AlignItems: _properties.AlignItems,
  AlignmentBaseline: _properties.AlignmentBaseline,
  AlignSelf: _properties.AlignSelf,
  All: _properties.All,
  Animation: _properties.Animation,
  AnimationDelay: _properties.AnimationDelay,
  AnimationDirection: _properties.AnimationDirection,
  AnimationDuration: _properties.AnimationDuration,
  AnimationFillMode: _properties.AnimationFillMode,
  AnimationIterationCount: _properties.AnimationIterationCount,
  AnimationName: _properties.AnimationName,
  AnimationPlayState: _properties.AnimationPlayState,
  AnimationTimingFunction: _properties.AnimationTimingFunction,
  Background: _properties.Background,
  BackgroundAttachment: _properties.BackgroundAttachment,
  BackgroundBlendMode: _properties.BackgroundBlendMode,
  BackgroundClip: _properties.BackgroundClip,
  BackgroundColor: _properties.BackgroundColor,
  BackgroundImage: _properties.BackgroundImage,
  BackgroundOrigin: _properties.BackgroundOrigin,
  BackgroundPosition: _properties.BackgroundPosition,
  BackgroundRepeat: _properties.BackgroundRepeat,
  BackgroundSize: _properties.BackgroundSize,
  BaselineShift: _properties.BaselineShift,
  BlockOverflow: _properties.BlockOverflow,
  BlockSize: _properties.BlockSize,
  BookmarkLabel: _properties.BookmarkLabel,
  BookmarkLevel: _properties.BookmarkLevel,
  BookmarkState: _properties.BookmarkState,
  Border: _properties.Border,
  BorderBlock: _properties.BorderBlock,
  BorderBlockColor: _properties.BorderBlockColor,
  BorderBlockEnd: _properties.BorderBlockEnd,
  BorderBlockEndColor: _properties.BorderBlockEndColor,
  BorderBlockEndStyle: _properties.BorderBlockEndStyle,
  BorderBlockEndWidth: _properties.BorderBlockEndWidth,
  BorderBlockStart: _properties.BorderBlockStart,
  BorderBlockStartColor: _properties.BorderBlockStartColor,
  BorderBlockStartStyle: _properties.BorderBlockStartStyle,
  BorderBlockStartWidth: _properties.BorderBlockStartWidth,
  BorderBlockStyle: _properties.BorderBlockStyle,
  BorderBlockWidth: _properties.BorderBlockWidth,
  BorderBottom: _properties.BorderBottom,
  BorderBottomColor: _properties.BorderBottomColor,
  BorderBottomLeftRadius: _properties.BorderBottomLeftRadius,
  BorderBottomRightRadius: _properties.BorderBottomRightRadius,
  BorderBottomStyle: _properties.BorderBottomStyle,
  BorderBottomWidth: _properties.BorderBottomWidth,
  BorderBoundary: _properties.BorderBoundary,
  BorderCollapse: _properties.BorderCollapse,
  BorderColor: _properties.BorderColor,
  BorderEndEndRadius: _properties.BorderEndEndRadius,
  BorderEndStartRadius: _properties.BorderEndStartRadius,
  BorderImage: _properties.BorderImage,
  BorderImageOutset: _properties.BorderImageOutset,
  BorderImageRepeat: _properties.BorderImageRepeat,
  BorderImageSlice: _properties.BorderImageSlice,
  BorderImageSource: _properties.BorderImageSource,
  BorderImageWidth: _properties.BorderImageWidth,
  BorderInline: _properties.BorderInline,
  BorderInlineColor: _properties.BorderInlineColor,
  BorderInlineEnd: _properties.BorderInlineEnd,
  BorderInlineEndColor: _properties.BorderInlineEndColor,
  BorderInlineEndStyle: _properties.BorderInlineEndStyle,
  BorderInlineEndWidth: _properties.BorderInlineEndWidth,
  BorderInlineStart: _properties.BorderInlineStart,
  BorderInlineStartColor: _properties.BorderInlineStartColor,
  BorderInlineStartStyle: _properties.BorderInlineStartStyle,
  BorderInlineStartWidth: _properties.BorderInlineStartWidth,
  BorderInlineStyle: _properties.BorderInlineStyle,
  BorderInlineWidth: _properties.BorderInlineWidth,
  BorderLeft: _properties.BorderLeft,
  BorderLeftColor: _properties.BorderLeftColor,
  BorderLeftStyle: _properties.BorderLeftStyle,
  BorderLeftWidth: _properties.BorderLeftWidth,
  BorderRadius: _properties.BorderRadius,
  BorderRight: _properties.BorderRight,
  BorderRightColor: _properties.BorderRightColor,
  BorderRightStyle: _properties.BorderRightStyle,
  BorderRightWidth: _properties.BorderRightWidth,
  BorderSpacing: _properties.BorderSpacing,
  BorderStartEndRadius: _properties.BorderStartEndRadius,
  BorderStartStartRadius: _properties.BorderStartStartRadius,
  BorderStyle: _properties.BorderStyle,
  BorderTop: _properties.BorderTop,
  BorderTopColor: _properties.BorderTopColor,
  BorderTopLeftRadius: _properties.BorderTopLeftRadius,
  BorderTopRightRadius: _properties.BorderTopRightRadius,
  BorderTopStyle: _properties.BorderTopStyle,
  BorderTopWidth: _properties.BorderTopWidth,
  BorderWidth: _properties.BorderWidth,
  Bottom: _properties.Bottom,
  BoxDecorationBreak: _properties.BoxDecorationBreak,
  BoxShadow: _properties.BoxShadow,
  BreakAfter: _properties.BreakAfter,
  BreakBefore: _properties.BreakBefore,
  BreakInside: _properties.BreakInside,
  CaptionSide: _properties.CaptionSide,
  CaretColor: _properties.CaretColor,
  Chains: _properties.Chains,
  Clear: _properties.Clear,
  Clip: _properties.Clip,
  ClipPath: _properties.ClipPath,
  ClipRule: _properties.ClipRule,
  Color: _properties.Color,
  ColorInterpolationFilters: _properties.ColorInterpolationFilters,
  ColumnCount: _properties.ColumnCount,
  ColumnFill: _properties.ColumnFill,
  ColumnGap: _properties.ColumnGap,
  ColumnRule: _properties.ColumnRule,
  ColumnRuleColor: _properties.ColumnRuleColor,
  ColumnRuleStyle: _properties.ColumnRuleStyle,
  ColumnRuleWidth: _properties.ColumnRuleWidth,
  Columns: _properties.Columns,
  ColumnSpan: _properties.ColumnSpan,
  ColumnWidth: _properties.ColumnWidth,
  Contain: _properties.Contain,
  Content: _properties.Content,
  Continue: _properties.Continue,
  CounterIncrement: _properties.CounterIncrement,
  CounterReset: _properties.CounterReset,
  CounterSet: _properties.CounterSet,
  Cursor: _properties.Cursor,
  Direction: _properties.Direction,
  Display: _properties.Display,
  DominantBaseline: _properties.DominantBaseline,
  EmptyCells: _properties.EmptyCells,
  Fill: _properties.Fill,
  FillBreak: _properties.FillBreak,
  FillColor: _properties.FillColor,
  FillImage: _properties.FillImage,
  FillOpacity: _properties.FillOpacity,
  FillOrigin: _properties.FillOrigin,
  FillPosition: _properties.FillPosition,
  FillRepeat: _properties.FillRepeat,
  FillRule: _properties.FillRule,
  FillSize: _properties.FillSize,
  Filter: _properties.Filter,
  Flex: _properties.Flex,
  FlexBasis: _properties.FlexBasis,
  FlexDirection: _properties.FlexDirection,
  FlexFlow: _properties.FlexFlow,
  FlexGrow: _properties.FlexGrow,
  FlexShrink: _properties.FlexShrink,
  FlexWrap: _properties.FlexWrap,
  Float: _properties.Float,
  FloatOffset: _properties.FloatOffset,
  FloatReference: _properties.FloatReference,
  FloodColor: _properties.FloodColor,
  FloodOpacity: _properties.FloodOpacity,
  Flow: _properties.Flow,
  Font: _properties.Font,
  FontFamily: _properties.FontFamily,
  FontFeatureSettings: _properties.FontFeatureSettings,
  FontKerning: _properties.FontKerning,
  FontSize: _properties.FontSize,
  FontSizeAdjust: _properties.FontSizeAdjust,
  FontStretch: _properties.FontStretch,
  FontStyle: _properties.FontStyle,
  FontSynthesis: _properties.FontSynthesis,
  FontVariant: _properties.FontVariant,
  FontVariantCaps: _properties.FontVariantCaps,
  FontVariantEastAsian: _properties.FontVariantEastAsian,
  FontVariantLigatures: _properties.FontVariantLigatures,
  FontVariantNumeric: _properties.FontVariantNumeric,
  FontVariantPosition: _properties.FontVariantPosition,
  FontWeight: _properties.FontWeight,
  Gap: _properties.Gap,
  GlyphOrientationVertical: _properties.GlyphOrientationVertical,
  Grid: _properties.Grid,
  GridArea: _properties.GridArea,
  GridAutoColumns: _properties.GridAutoColumns,
  GridAutoFlow: _properties.GridAutoFlow,
  GridAutoRows: _properties.GridAutoRows,
  GridColumn: _properties.GridColumn,
  GridColumnEnd: _properties.GridColumnEnd,
  GridColumnStart: _properties.GridColumnStart,
  GridRow: _properties.GridRow,
  GridRowEnd: _properties.GridRowEnd,
  GridRowStart: _properties.GridRowStart,
  GridTemplate: _properties.GridTemplate,
  GridTemplateAreas: _properties.GridTemplateAreas,
  GridTemplateColumns: _properties.GridTemplateColumns,
  GridTemplateRows: _properties.GridTemplateRows,
  HangingPunctuation: _properties.HangingPunctuation,
  Height: _properties.Height,
  Hyphens: _properties.Hyphens,
  ImageOrientation: _properties.ImageOrientation,
  ImageResolution: _properties.ImageResolution,
  InitialLetters: _properties.InitialLetters,
  InitialLettersAlign: _properties.InitialLettersAlign,
  InitialLettersWrap: _properties.InitialLettersWrap,
  InlineSize: _properties.InlineSize,
  InlineSizing: _properties.InlineSizing,
  Inset: _properties.Inset,
  InsetBlock: _properties.InsetBlock,
  InsetBlockEnd: _properties.InsetBlockEnd,
  InsetBlockStart: _properties.InsetBlockStart,
  InsetInline: _properties.InsetInline,
  InsetInlineEnd: _properties.InsetInlineEnd,
  InsetInlineStart: _properties.InsetInlineStart,
  Isolation: _properties.Isolation,
  JustifyContent: _properties.JustifyContent,
  JustifyItems: _properties.JustifyItems,
  JustifySelf: _properties.JustifySelf,
  Left: _properties.Left,
  LetterSpacing: _properties.LetterSpacing,
  LightingColor: _properties.LightingColor,
  LineBreak: _properties.LineBreak,
  LineClamp: _properties.LineClamp,
  LineHeight: _properties.LineHeight,
  LineHeightStep: _properties.LineHeightStep,
  ListStyle: _properties.ListStyle,
  ListStyleImage: _properties.ListStyleImage,
  ListStylePosition: _properties.ListStylePosition,
  ListStyleType: _properties.ListStyleType,
  Margin: _properties.Margin,
  MarginBlock: _properties.MarginBlock,
  MarginBlockEnd: _properties.MarginBlockEnd,
  MarginBlockStart: _properties.MarginBlockStart,
  MarginBottom: _properties.MarginBottom,
  MarginInline: _properties.MarginInline,
  MarginInlineEnd: _properties.MarginInlineEnd,
  MarginInlineStart: _properties.MarginInlineStart,
  MarginLeft: _properties.MarginLeft,
  MarginRight: _properties.MarginRight,
  MarginTop: _properties.MarginTop,
  MarkerSide: _properties.MarkerSide,
  Mask: _properties.Mask,
  MaskBorder: _properties.MaskBorder,
  MaskBorderMode: _properties.MaskBorderMode,
  MaskBorderOutset: _properties.MaskBorderOutset,
  MaskBorderRepeat: _properties.MaskBorderRepeat,
  MaskBorderSlice: _properties.MaskBorderSlice,
  MaskBorderSource: _properties.MaskBorderSource,
  MaskBorderWidth: _properties.MaskBorderWidth,
  MaskClip: _properties.MaskClip,
  MaskComposite: _properties.MaskComposite,
  MaskImage: _properties.MaskImage,
  MaskMode: _properties.MaskMode,
  MaskOrigin: _properties.MaskOrigin,
  MaskPosition: _properties.MaskPosition,
  MaskRepeat: _properties.MaskRepeat,
  MaskSize: _properties.MaskSize,
  MaskType: _properties.MaskType,
  MaxBlockSize: _properties.MaxBlockSize,
  MaxHeight: _properties.MaxHeight,
  MaxInlineSize: _properties.MaxInlineSize,
  MaxLines: _properties.MaxLines,
  MaxWidth: _properties.MaxWidth,
  MaxZoom: _properties.MaxZoom,
  MinBlockSize: _properties.MinBlockSize,
  MinHeight: _properties.MinHeight,
  MinInlineSize: _properties.MinInlineSize,
  MinWidth: _properties.MinWidth,
  MinZoom: _properties.MinZoom,
  MixBlendMode: _properties.MixBlendMode,
  ObjectFit: _properties.ObjectFit,
  ObjectPosition: _properties.ObjectPosition,
  Offset: _properties.Offset,
  OffsetAfter: _properties.OffsetAfter,
  OffsetAnchor: _properties.OffsetAnchor,
  OffsetBefore: _properties.OffsetBefore,
  OffsetDistance: _properties.OffsetDistance,
  OffsetEnd: _properties.OffsetEnd,
  OffsetPath: _properties.OffsetPath,
  OffsetPosition: _properties.OffsetPosition,
  OffsetRotate: _properties.OffsetRotate,
  OffsetStart: _properties.OffsetStart,
  Opacity: _properties.Opacity,
  Order: _properties.Order,
  Orientation: _properties.Orientation,
  Orphans: _properties.Orphans,
  Outline: _properties.Outline,
  OutlineColor: _properties.OutlineColor,
  OutlineOffset: _properties.OutlineOffset,
  OutlineStyle: _properties.OutlineStyle,
  OutlineWidth: _properties.OutlineWidth,
  Overflow: _properties.Overflow,
  OverflowBlock: _properties.OverflowBlock,
  OverflowInline: _properties.OverflowInline,
  OverflowWrap: _properties.OverflowWrap,
  OverflowX: _properties.OverflowX,
  OverflowY: _properties.OverflowY,
  Padding: _properties.Padding,
  PaddingBlock: _properties.PaddingBlock,
  PaddingBlockEnd: _properties.PaddingBlockEnd,
  PaddingBlockStart: _properties.PaddingBlockStart,
  PaddingBottom: _properties.PaddingBottom,
  PaddingInline: _properties.PaddingInline,
  PaddingInlineEnd: _properties.PaddingInlineEnd,
  PaddingInlineStart: _properties.PaddingInlineStart,
  PaddingLeft: _properties.PaddingLeft,
  PaddingRight: _properties.PaddingRight,
  PaddingTop: _properties.PaddingTop,
  PageBreakAfter: _properties.PageBreakAfter,
  PageBreakBefore: _properties.PageBreakBefore,
  PageBreakInside: _properties.PageBreakInside,
  PlaceContent: _properties.PlaceContent,
  PlaceItems: _properties.PlaceItems,
  PlaceSelf: _properties.PlaceSelf,
  Position: _properties.Position,
  Quotes: _properties.Quotes,
  Resize: _properties.Resize,
  Right: _properties.Right,
  RowGap: _properties.RowGap,
  RubyAlign: _properties.RubyAlign,
  RubyMerge: _properties.RubyMerge,
  RubyPosition: _properties.RubyPosition,
  ScrollbarGutter: _properties.ScrollbarGutter,
  ScrollBehavior: _properties.ScrollBehavior,
  ScrollMargin: _properties.ScrollMargin,
  ScrollMarginBlock: _properties.ScrollMarginBlock,
  ScrollMarginBlockEnd: _properties.ScrollMarginBlockEnd,
  ScrollMarginBlockStart: _properties.ScrollMarginBlockStart,
  ScrollMarginBottom: _properties.ScrollMarginBottom,
  ScrollMarginInline: _properties.ScrollMarginInline,
  ScrollMarginInlineEnd: _properties.ScrollMarginInlineEnd,
  ScrollMarginInlineStart: _properties.ScrollMarginInlineStart,
  ScrollMarginLeft: _properties.ScrollMarginLeft,
  ScrollMarginRight: _properties.ScrollMarginRight,
  ScrollMarginTop: _properties.ScrollMarginTop,
  ScrollPadding: _properties.ScrollPadding,
  ScrollPaddingBlock: _properties.ScrollPaddingBlock,
  ScrollPaddingBlockEnd: _properties.ScrollPaddingBlockEnd,
  ScrollPaddingBlockStart: _properties.ScrollPaddingBlockStart,
  ScrollPaddingBottom: _properties.ScrollPaddingBottom,
  ScrollPaddingInline: _properties.ScrollPaddingInline,
  ScrollPaddingInlineEnd: _properties.ScrollPaddingInlineEnd,
  ScrollPaddingInlineStart: _properties.ScrollPaddingInlineStart,
  ScrollPaddingLeft: _properties.ScrollPaddingLeft,
  ScrollPaddingRight: _properties.ScrollPaddingRight,
  ScrollPaddingTop: _properties.ScrollPaddingTop,
  ScrollSnapAlign: _properties.ScrollSnapAlign,
  ScrollSnapStop: _properties.ScrollSnapStop,
  ScrollSnapType: _properties.ScrollSnapType,
  Shape: _properties.Shape,
  ShapeImageThreshold: _properties.ShapeImageThreshold,
  ShapeInside: _properties.ShapeInside,
  ShapeMargin: _properties.ShapeMargin,
  ShapeOutside: _properties.ShapeOutside,
  Size: _properties.Size,
  StringSet: _properties.StringSet,
  Stroke: _properties.Stroke,
  StrokeAlign: _properties.StrokeAlign,
  StrokeBreak: _properties.StrokeBreak,
  StrokeColor: _properties.StrokeColor,
  StrokeDasharray: _properties.StrokeDasharray,
  StrokeDashCorner: _properties.StrokeDashCorner,
  StrokeDashJustify: _properties.StrokeDashJustify,
  StrokeDashoffset: _properties.StrokeDashoffset,
  StrokeImage: _properties.StrokeImage,
  StrokeLinecap: _properties.StrokeLinecap,
  StrokeLinejoin: _properties.StrokeLinejoin,
  StrokeMiterlimit: _properties.StrokeMiterlimit,
  StrokeOpacity: _properties.StrokeOpacity,
  StrokeOrigin: _properties.StrokeOrigin,
  StrokePosition: _properties.StrokePosition,
  StrokeRepeat: _properties.StrokeRepeat,
  StrokeSize: _properties.StrokeSize,
  StrokeWidth: _properties.StrokeWidth,
  TableLayout: _properties.TableLayout,
  TabSize: _properties.TabSize,
  TextAlign: _properties.TextAlign,
  TextAlignAll: _properties.TextAlignAll,
  TextAlignLast: _properties.TextAlignLast,
  TextCombineUpright: _properties.TextCombineUpright,
  TextDecoration: _properties.TextDecoration,
  TextDecorationColor: _properties.TextDecorationColor,
  TextDecorationLine: _properties.TextDecorationLine,
  TextDecorationStyle: _properties.TextDecorationStyle,
  TextEmphasis: _properties.TextEmphasis,
  TextEmphasisColor: _properties.TextEmphasisColor,
  TextEmphasisPosition: _properties.TextEmphasisPosition,
  TextEmphasisStyle: _properties.TextEmphasisStyle,
  TextIndent: _properties.TextIndent,
  TextJustify: _properties.TextJustify,
  TextOrientation: _properties.TextOrientation,
  TextOverflow: _properties.TextOverflow,
  TextShadow: _properties.TextShadow,
  TextTransform: _properties.TextTransform,
  TextUnderlinePosition: _properties.TextUnderlinePosition,
  Top: _properties.Top,
  Transition: _properties.Transition,
  TransitionDelay: _properties.TransitionDelay,
  TransitionDuration: _properties.TransitionDuration,
  TransitionProperty: _properties.TransitionProperty,
  TransitionTimingFunction: _properties.TransitionTimingFunction,
  UnicodeBidi: _properties.UnicodeBidi,
  UserZoom: _properties.UserZoom,
  VerticalAlign: _properties.VerticalAlign,
  ViewportFit: _properties.ViewportFit,
  Visibility: _properties.Visibility,
  WhiteSpace: _properties.WhiteSpace,
  Widows: _properties.Widows,
  Width: _properties.Width,
  WillChange: _properties.WillChange,
  WordBreak: _properties.WordBreak,
  WordSpacing: _properties.WordSpacing,
  WordWrap: _properties.WordWrap,
  WritingMode: _properties.WritingMode,
  ZIndex: _properties.ZIndex,
  Zoom: _properties.Zoom
};
exports.Properties = Properties;

/***/ }),

/***/ "./src/methods/calc.js":
/*!*****************************!*\
  !*** ./src/methods/calc.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minMax = exports.fitContent = exports.calc = exports.div = exports.mul = exports.sub = exports.add = void 0;

var _utils = __webpack_require__(/*! utils */ "./src/utils/index.js");

var add = function add() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return "(".concat(values.join(' + '), ")");
};

exports.add = add;

var sub = function sub() {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  return "(".concat(values.join(' - '), ")");
};

exports.sub = sub;

var mul = function mul() {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }

  return "(".concat(values.join(' * '), ")");
};

exports.mul = mul;

var div = function div() {
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }

  return "(".concat(values.join(' / '), ")");
};

exports.div = div;

var calc = function calc() {
  for (var _len5 = arguments.length, values = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    values[_key5] = arguments[_key5];
  }

  return 'calc' + add(values);
};

exports.calc = calc;

calc.add = function () {
  return 'calc' + add.apply(void 0, arguments);
};

calc.sub = function () {
  return 'calc' + sub.apply(void 0, arguments);
};

calc.mul = function () {
  return 'calc' + mul.apply(void 0, arguments);
};

calc.div = function () {
  return 'calc' + div.apply(void 0, arguments);
};

var fitContent = (0, _utils.method)('fit-content');
exports.fitContent = fitContent;
var minMax = (0, _utils.method)('min-max');
exports.minMax = minMax;

/***/ }),

/***/ "./src/methods/color.js":
/*!******************************!*\
  !*** ./src/methods/color.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexa = exports.hex = exports.hsla = exports.hsl = exports.rgba = exports.rgb = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var rgb = (0, _utils.method)('rgb');
exports.rgb = rgb;
var rgba = (0, _utils.method)('rgba');
exports.rgba = rgba;
var hsl = (0, _utils.method)('hsl');
exports.hsl = hsl;
var hsla = (0, _utils.method)('hsla');
exports.hsla = hsla;

var hex = function hex(code) {
  return  true ? code.slice(1) : undefined;
};

exports.hex = hex;

var hexa = function hexa(code, alpha) {
  return hex(code) + (alpha * 255).toString(16);
};

exports.hexa = hexa;

/***/ }),

/***/ "./src/methods/content.js":
/*!********************************!*\
  !*** ./src/methods/content.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leader = exports.targetText = exports.targetCounters = exports.targetCounter = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var targetCounter = (0, _utils.method)('targetCounter');
exports.targetCounter = targetCounter;
var targetCounters = (0, _utils.method)('targetCounters');
exports.targetCounters = targetCounters;
var targetText = (0, _utils.method)('targetText');
exports.targetText = targetText;
var leader = (0, _utils.method)('leader');
exports.leader = leader;

/***/ }),

/***/ "./src/methods/filter.js":
/*!*******************************!*\
  !*** ./src/methods/filter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sepia = exports.saturate = exports.opacity = exports.invert = exports.hueRotate = exports.grayscale = exports.dropShadow = exports.contrast = exports.brightness = exports.blur = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var blur = (0, _utils.method)('blur');
exports.blur = blur;
var brightness = (0, _utils.method)('brightness');
exports.brightness = brightness;
var contrast = (0, _utils.method)('contrast');
exports.contrast = contrast;
var dropShadow = (0, _utils.method)('drop-shadow');
exports.dropShadow = dropShadow;
var grayscale = (0, _utils.method)('grayscale');
exports.grayscale = grayscale;
var hueRotate = (0, _utils.method)('hue-rotate');
exports.hueRotate = hueRotate;
var invert = (0, _utils.method)('invert');
exports.invert = invert;
var opacity = (0, _utils.method)('opacity');
exports.opacity = opacity;
var saturate = (0, _utils.method)('saturate');
exports.saturate = saturate;
var sepia = (0, _utils.method)('sepia');
exports.sepia = sepia;

/***/ }),

/***/ "./src/methods/font.js":
/*!*****************************!*\
  !*** ./src/methods/font.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.annotation = exports.ornaments = exports.swash = exports.characterVariant = exports.styleset = exports.stylistic = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var stylistic = (0, _utils.method)('stylistic');
exports.stylistic = stylistic;
var styleset = (0, _utils.method)('styleset');
exports.styleset = styleset;
var characterVariant = (0, _utils.method)('character-variant');
exports.characterVariant = characterVariant;
var swash = (0, _utils.method)('swash');
exports.swash = swash;
var ornaments = (0, _utils.method)('ornaments');
exports.ornaments = ornaments;
var annotation = (0, _utils.method)('annotation');
exports.annotation = annotation;

/***/ }),

/***/ "./src/methods/gradient.js":
/*!*********************************!*\
  !*** ./src/methods/gradient.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatingRadialGradient = exports.radialGradient = exports.repeatingLinearGradient = exports.linearGradient = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var linearGradient = (0, _utils.method)('linear-gradient');
exports.linearGradient = linearGradient;

linearGradient.toTop = function () {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return linearGradient.apply(void 0, [_constants.TO, _constants.TOP].concat(params));
};

linearGradient.toLeft = function () {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  return linearGradient.apply(void 0, [_constants.TO, _constants.LEFT].concat(params));
};

linearGradient.toRight = function () {
  for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }

  return linearGradient.apply(void 0, [_constants.TO, _constants.RIGHT].concat(params));
};

linearGradient.toBottom = function () {
  for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    params[_key4] = arguments[_key4];
  }

  return linearGradient.apply(void 0, [_constants.TO, _constants.BOTTOM].concat(params));
};

linearGradient.toTopLeft = function () {
  for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    params[_key5] = arguments[_key5];
  }

  return linearGradient.apply(void 0, [_constants.TO, _constants.TOP, _constants.LEFT].concat(params));
};

linearGradient.toTopRight = function () {
  for (var _len6 = arguments.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    params[_key6] = arguments[_key6];
  }

  return linearGradient.apply(void 0, [_constants.TO, _constants.TOP, _constants.RIGHT].concat(params));
};

linearGradient.toBottomLeft = function () {
  for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    params[_key7] = arguments[_key7];
  }

  return linearGradient.apply(void 0, [_constants.TO, _constants.BOTTOM, _constants.LEFT].concat(params));
};

linearGradient.toBottomRight = function () {
  for (var _len8 = arguments.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    params[_key8] = arguments[_key8];
  }

  return linearGradient.apply(void 0, [_constants.TO, _constants.BOTTOM, _constants.RIGHT].concat(params));
};

var repeatingLinearGradient = (0, _utils.method)('repeating-linear-gradient');
exports.repeatingLinearGradient = repeatingLinearGradient;

repeatingLinearGradient.toTop = function () {
  for (var _len9 = arguments.length, params = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    params[_key9] = arguments[_key9];
  }

  return repeatingLinearGradient.apply(void 0, [_constants.TO, _constants.TOP].concat(params));
};

repeatingLinearGradient.toLeft = function () {
  for (var _len10 = arguments.length, params = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    params[_key10] = arguments[_key10];
  }

  return repeatingLinearGradient.apply(void 0, [_constants.TO, _constants.LEFT].concat(params));
};

repeatingLinearGradient.toRight = function () {
  for (var _len11 = arguments.length, params = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    params[_key11] = arguments[_key11];
  }

  return repeatingLinearGradient.apply(void 0, [_constants.TO, _constants.RIGHT].concat(params));
};

repeatingLinearGradient.toBottom = function () {
  for (var _len12 = arguments.length, params = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    params[_key12] = arguments[_key12];
  }

  return repeatingLinearGradient.apply(void 0, [_constants.TO, _constants.BOTTOM].concat(params));
};

repeatingLinearGradient.toTopLeft = function () {
  for (var _len13 = arguments.length, params = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    params[_key13] = arguments[_key13];
  }

  return repeatingLinearGradient.apply(void 0, [_constants.TO, _constants.TOP, _constants.LEFT].concat(params));
};

repeatingLinearGradient.toTopRight = function () {
  for (var _len14 = arguments.length, params = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    params[_key14] = arguments[_key14];
  }

  return repeatingLinearGradient.apply(void 0, [_constants.TO, _constants.TOP, _constants.RIGHT].concat(params));
};

repeatingLinearGradient.toBottomLeft = function () {
  for (var _len15 = arguments.length, params = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    params[_key15] = arguments[_key15];
  }

  return repeatingLinearGradient.apply(void 0, [_constants.TO, _constants.BOTTOM, _constants.LEFT].concat(params));
};

repeatingLinearGradient.toBottomRight = function () {
  for (var _len16 = arguments.length, params = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    params[_key16] = arguments[_key16];
  }

  return repeatingLinearGradient.apply(void 0, [_constants.TO, _constants.BOTTOM, _constants.RIGHT].concat(params));
};

var radialGradient = (0, _utils.method)('radial-gradient');
exports.radialGradient = radialGradient;
radialGradient.extent = {
  CLOSEST_SIDE: 'closest-side',
  CLOSEST_CORNER: 'closest-corner',
  FARTHEST_SIDE: 'farthest-side',
  FARTHEST_CORNER: 'farthest-corner'
};

radialGradient.closestSide = function () {
  for (var _len17 = arguments.length, params = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    params[_key17] = arguments[_key17];
  }

  return radialGradient.apply(void 0, [_constants.CLOSEST_SIDE].concat(params));
};

radialGradient.closestCorner = function () {
  for (var _len18 = arguments.length, params = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    params[_key18] = arguments[_key18];
  }

  return radialGradient.apply(void 0, [_constants.CLOSEST_CORNER].concat(params));
};

radialGradient.farthestSide = function () {
  for (var _len19 = arguments.length, params = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    params[_key19] = arguments[_key19];
  }

  return radialGradient.apply(void 0, [_constants.FARTHEST_SIDE].concat(params));
};

radialGradient.farthestCorner = function () {
  for (var _len20 = arguments.length, params = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    params[_key20] = arguments[_key20];
  }

  return radialGradient.apply(void 0, [_constants.FARTHEST_CORNER].concat(params));
};

radialGradient.circle = function () {
  for (var _len21 = arguments.length, params = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    params[_key21] = arguments[_key21];
  }

  return radialGradient.apply(void 0, [_constants.CIRCLE].concat(params));
};

radialGradient.ellipse = function () {
  for (var _len22 = arguments.length, params = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    params[_key22] = arguments[_key22];
  }

  return radialGradient.apply(void 0, [_constants.ELLIPSE].concat(params));
};

var repeatingRadialGradient = (0, _utils.method)('repeating-radial-gradient');
exports.repeatingRadialGradient = repeatingRadialGradient;

repeatingRadialGradient.closestSide = function () {
  for (var _len23 = arguments.length, params = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    params[_key23] = arguments[_key23];
  }

  return repeatingRadialGradient.apply(void 0, [_constants.CLOSEST_SIDE].concat(params));
};

repeatingRadialGradient.closestCorner = function () {
  for (var _len24 = arguments.length, params = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    params[_key24] = arguments[_key24];
  }

  return repeatingRadialGradient.apply(void 0, [_constants.CLOSEST_CORNER].concat(params));
};

repeatingRadialGradient.farthestSide = function () {
  for (var _len25 = arguments.length, params = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    params[_key25] = arguments[_key25];
  }

  return repeatingRadialGradient.apply(void 0, [_constants.FARTHEST_SIDE].concat(params));
};

repeatingRadialGradient.farthestCorner = function () {
  for (var _len26 = arguments.length, params = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    params[_key26] = arguments[_key26];
  }

  return repeatingRadialGradient.apply(void 0, [_constants.FARTHEST_CORNER].concat(params));
};

repeatingRadialGradient.circle = function () {
  for (var _len27 = arguments.length, params = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    params[_key27] = arguments[_key27];
  }

  return repeatingRadialGradient.apply(void 0, [_constants.CIRCLE].concat(params));
};

repeatingRadialGradient.ellipse = function () {
  for (var _len28 = arguments.length, params = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    params[_key28] = arguments[_key28];
  }

  return repeatingRadialGradient.apply(void 0, [_constants.ELLIPSE].concat(params));
};

/***/ }),

/***/ "./src/methods/image.js":
/*!******************************!*\
  !*** ./src/methods/image.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageSet = exports.image = exports.element = exports.crossFade = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var crossFade = (0, _utils.method)('cross-faded');
exports.crossFade = crossFade;
var element = (0, _utils.method)('element');
exports.element = element;
var image = (0, _utils.method)('image');
exports.image = image;
var imageSet = (0, _utils.method)('image-set');
exports.imageSet = imageSet;

/***/ }),

/***/ "./src/methods/index.js":
/*!******************************!*\
  !*** ./src/methods/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calc = __webpack_require__(/*! ./calc */ "./src/methods/calc.js");

Object.keys(_calc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calc[key];
    }
  });
});

var _color = __webpack_require__(/*! ./color */ "./src/methods/color.js");

Object.keys(_color).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _color[key];
    }
  });
});

var _content = __webpack_require__(/*! ./content */ "./src/methods/content.js");

Object.keys(_content).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _content[key];
    }
  });
});

var _filter = __webpack_require__(/*! ./filter */ "./src/methods/filter.js");

Object.keys(_filter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filter[key];
    }
  });
});

var _font = __webpack_require__(/*! ./font */ "./src/methods/font.js");

Object.keys(_font).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _font[key];
    }
  });
});

var _gradient = __webpack_require__(/*! ./gradient */ "./src/methods/gradient.js");

Object.keys(_gradient).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _gradient[key];
    }
  });
});

var _image = __webpack_require__(/*! ./image */ "./src/methods/image.js");

Object.keys(_image).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _image[key];
    }
  });
});

var _measures = __webpack_require__(/*! ./measures */ "./src/methods/measures.js");

Object.keys(_measures).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _measures[key];
    }
  });
});

var _offset = __webpack_require__(/*! ./offset */ "./src/methods/offset.js");

Object.keys(_offset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _offset[key];
    }
  });
});

var _shape = __webpack_require__(/*! ./shape */ "./src/methods/shape.js");

Object.keys(_shape).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _shape[key];
    }
  });
});

var _timing = __webpack_require__(/*! ./timing */ "./src/methods/timing.js");

Object.keys(_timing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _timing[key];
    }
  });
});

var _transform = __webpack_require__(/*! ./transform */ "./src/methods/transform.js");

Object.keys(_transform).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _transform[key];
    }
  });
});

var _url = __webpack_require__(/*! ./url */ "./src/methods/url.js");

Object.keys(_url).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _url[key];
    }
  });
});

var _variable = __webpack_require__(/*! ./variable */ "./src/methods/variable.js");

Object.keys(_variable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _variable[key];
    }
  });
});

/***/ }),

/***/ "./src/methods/measures.js":
/*!*********************************!*\
  !*** ./src/methods/measures.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Measures = exports.ms = exports.s = exports.dppx = exports.dpcm = exports.dpi = exports.x = exports.percent = exports.pt = exports.pc = exports.inch = exports.quart = exports.mm = exports.cm = exports.px = exports.vmax = exports.vmin = exports.vb = exports.vi = exports.vw = exports.vh = exports.rlh = exports.rem = exports.lh = exports.ic = exports.ex = exports.em = exports.ch = exports.cap = exports.kHz = exports.Hz = exports.fr = exports.turn = exports.rad = exports.grad = exports.deg = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _utils2 = __webpack_require__(/*! utils */ "./src/utils/index.js");

/* Angle */
var deg = (0, _utils.measure)(_constants.DEG);
exports.deg = deg;
var grad = (0, _utils.measure)(_constants.GRAD);
exports.grad = grad;
var rad = (0, _utils.measure)(_constants.RAD);
exports.rad = rad;
var turn = (0, _utils.measure)(_constants.TURN);
/* Flex */

exports.turn = turn;
var fr = (0, _utils.measure)(_constants.FR);
/* Frequency */

exports.fr = fr;
var Hz = (0, _utils.measure)(_constants.HZ);
exports.Hz = Hz;
var kHz = (0, _utils.measure)(_constants.KHZ);
/* Length */

exports.kHz = kHz;
var cap = (0, _utils.measure)(_constants.CAP);
exports.cap = cap;
var ch = (0, _utils.measure)(_constants.CH);
exports.ch = ch;
var em = (0, _utils.measure)(_constants.EM);
exports.em = em;
var ex = (0, _utils.measure)(_constants.EX);
exports.ex = ex;
var ic = (0, _utils.measure)(_constants.IC);
exports.ic = ic;
var lh = (0, _utils.measure)(_constants.LH);
exports.lh = lh;
var rem = (0, _utils.measure)(_constants.REM);
exports.rem = rem;
var rlh = (0, _utils.measure)(_constants.RLH);
exports.rlh = rlh;
var vh = (0, _utils.measure)(_constants.VH);
exports.vh = vh;
var vw = (0, _utils.measure)(_constants.VW);
exports.vw = vw;
var vi = (0, _utils.measure)(_constants.VI);
exports.vi = vi;
var vb = (0, _utils.measure)(_constants.VB);
exports.vb = vb;
var vmin = (0, _utils.measure)(_constants.VMIN);
exports.vmin = vmin;
var vmax = (0, _utils.measure)(_constants.VMAX);
exports.vmax = vmax;
var px = (0, _utils.measure)(_constants.PX);
exports.px = px;
var cm = (0, _utils.measure)(_constants.CM);
exports.cm = cm;
var mm = (0, _utils.measure)(_constants.MM);
exports.mm = mm;
var quart = (0, _utils.measure)(_constants.Q);
exports.quart = quart;
var inch = (0, _utils.measure)(_constants.IN);
exports.inch = inch;
var pc = (0, _utils.measure)(_constants.PC);
exports.pc = pc;
var pt = (0, _utils.measure)(_constants.PT);
exports.pt = pt;
var percent = (0, _utils.measure)(_constants.PERCENTAGE);
exports.percent = percent;
var x = (0, _utils.measure)(_constants.PERCENTAGE);
/* Resolution */

exports.x = x;
var dpi = (0, _utils.measure)(_constants.DPI);
exports.dpi = dpi;
var dpcm = (0, _utils.measure)(_constants.DPCM);
exports.dpcm = dpcm;
var dppx = (0, _utils.measure)(_constants.DPPX);
/* Time */

exports.dppx = dppx;
var s = (0, _utils.measure)(_constants.S);
exports.s = s;
var ms = (0, _utils.measure)(_constants.MS);
exports.ms = ms;
var Measures = {
  deg: deg,
  grad: grad,
  rad: rad,
  turn: turn,
  fr: fr,
  Hz: Hz,
  kHz: kHz,
  cap: cap,
  ch: ch,
  em: em,
  ex: ex,
  ic: ic,
  lh: lh,
  rem: rem,
  rlh: rlh,
  vh: vh,
  vw: vw,
  vi: vi,
  vb: vb,
  vmin: vmin,
  vmax: vmax,
  px: px,
  cm: cm,
  mm: mm,
  quart: quart,
  inch: inch,
  pc: pc,
  pt: pt,
  percent: percent,
  x: x,
  dpi: dpi,
  dpcm: dpcm,
  dppx: dppx,
  s: s,
  ms: ms
};
exports.Measures = Measures;

/***/ }),

/***/ "./src/methods/offset.js":
/*!*******************************!*\
  !*** ./src/methods/offset.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ray = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var ray = (0, _utils.method)('ray');
exports.ray = ray;

/***/ }),

/***/ "./src/methods/shape.js":
/*!******************************!*\
  !*** ./src/methods/shape.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polygon = exports.ellipse = exports.circle = exports.inset = exports.rect = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var rect = (0, _utils.method)('rect');
exports.rect = rect;
var inset = (0, _utils.method)('inset');
exports.inset = inset;
var circle = (0, _utils.method)('circle');
exports.circle = circle;

circle.closestSide = function () {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return circle.apply(void 0, [_constants.CLOSEST_SIDE].concat(params));
};

circle.farthestSide = function () {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  return circle.apply(void 0, [_constants.FARTHEST_SIDE].concat(params));
};

var ellipse = (0, _utils.method)('ellipse');
exports.ellipse = ellipse;

ellipse.closestSide = function () {
  for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }

  return ellipse.apply(void 0, [_constants.CLOSEST_SIDE].concat(params));
};

ellipse.farthestSide = function () {
  for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    params[_key4] = arguments[_key4];
  }

  return ellipse.apply(void 0, [_constants.FARTHEST_SIDE].concat(params));
};

var polygon = (0, _utils.method)('polygon');
exports.polygon = polygon;

polygon.nonzero = function () {
  for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    params[_key5] = arguments[_key5];
  }

  return polygon.apply(void 0, [_constants.NONZERO].concat(params));
};

polygon.evenodd = function () {
  for (var _len6 = arguments.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    params[_key6] = arguments[_key6];
  }

  return polygon.apply(void 0, [_constants.EVENODD].concat(params));
};

/***/ }),

/***/ "./src/methods/timing.js":
/*!*******************************!*\
  !*** ./src/methods/timing.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frames = exports.steps = exports.cubicBezier = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var cubicBezier = (0, _utils.method)('cubic-bezier');
exports.cubicBezier = cubicBezier;
var steps = (0, _utils.method)('steps');
exports.steps = steps;

steps.start = function () {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return steps.apply(void 0, params.concat([_constants.START]));
};

steps.end = function () {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  return steps.apply(void 0, params.concat([_constants.END]));
};

var frames = (0, _utils.method)('frames');
exports.frames = frames;

/***/ }),

/***/ "./src/methods/transform.js":
/*!**********************************!*\
  !*** ./src/methods/transform.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateZ = exports.translateY = exports.translateX = exports.translate3d = exports.translate = exports.skewY = exports.skewX = exports.skew = exports.scaleZ = exports.scaleY = exports.scaleX = exports.scale3d = exports.scale = exports.rotateZ = exports.rotateY = exports.rotateX = exports.rotate3d = exports.rotate = exports.perspective = exports.matrix3d = exports.matrix = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var matrix = (0, _utils.method)('matrix');
exports.matrix = matrix;
var matrix3d = (0, _utils.method)('matrix3d');
exports.matrix3d = matrix3d;
var perspective = (0, _utils.method)('perspective');
exports.perspective = perspective;
var rotate = (0, _utils.method)('rotate');
exports.rotate = rotate;
var rotate3d = (0, _utils.method)('rotate3d');
exports.rotate3d = rotate3d;
var rotateX = (0, _utils.method)('rotateX');
exports.rotateX = rotateX;
var rotateY = (0, _utils.method)('rotateY');
exports.rotateY = rotateY;
var rotateZ = (0, _utils.method)('rotateZ');
exports.rotateZ = rotateZ;
var scale = (0, _utils.method)('scale');
exports.scale = scale;
var scale3d = (0, _utils.method)('scale3d');
exports.scale3d = scale3d;
var scaleX = (0, _utils.method)('scaleX');
exports.scaleX = scaleX;
var scaleY = (0, _utils.method)('scaleY');
exports.scaleY = scaleY;
var scaleZ = (0, _utils.method)('scaleZ');
exports.scaleZ = scaleZ;
var skew = (0, _utils.method)('skew');
exports.skew = skew;
var skewX = (0, _utils.method)('skewX');
exports.skewX = skewX;
var skewY = (0, _utils.method)('skewY');
exports.skewY = skewY;
var translate = (0, _utils.method)('translate');
exports.translate = translate;
var translate3d = (0, _utils.method)('translate3d');
exports.translate3d = translate3d;
var translateX = (0, _utils.method)('translateX');
exports.translateX = translateX;
var translateY = (0, _utils.method)('translateY');
exports.translateY = translateY;
var translateZ = (0, _utils.method)('translateZ');
exports.translateZ = translateZ;

/***/ }),

/***/ "./src/methods/url.js":
/*!****************************!*\
  !*** ./src/methods/url.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = exports.local = exports.format = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var format = (0, _utils.method)('format');
exports.format = format;
var local = (0, _utils.method)('local');
exports.local = local;
var url = (0, _utils.method)('url');
exports.url = url;

/***/ }),

/***/ "./src/methods/variable.js":
/*!*********************************!*\
  !*** ./src/methods/variable.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._var = exports.attr = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var attr = (0, _utils.method)('attr');
exports.attr = attr;

var _var = (0, _utils.method)('var');

exports._var = _var;

/***/ }),

/***/ "./src/properties/animation/animation.js":
/*!***********************************************!*\
  !*** ./src/properties/animation/animation.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationPlayState = exports.AnimationIterationCount = exports.AnimationFillMode = exports.AnimationDirection = exports.AnimationDuration = exports.AnimationDelay = exports.AnimationTimingFunction = exports.AnimationName = exports.Animation = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var _methods = __webpack_require__(/*! ../../methods */ "./src/methods/index.js");

var Animation = (0, _utils.property)('animation');
exports.Animation = Animation;
Animation.NONE = Animation(_constants.NONE);
var AnimationName = (0, _utils.property)('animationName');
exports.AnimationName = AnimationName;
AnimationName.NONE = AnimationName(_constants.NONE);
var AnimationTimingFunction = (0, _utils.property)('animationTimingFunction');
exports.AnimationTimingFunction = AnimationTimingFunction;
AnimationTimingFunction.LINEAR = AnimationTimingFunction(_constants.LINEAR);
AnimationTimingFunction.EASE = AnimationTimingFunction(_constants.EASE);
AnimationTimingFunction.EASE_IN = AnimationTimingFunction(_constants.EASE_IN);
AnimationTimingFunction.EASE_OUT = AnimationTimingFunction(_constants.EASE_OUT);
AnimationTimingFunction.EASE_IN_OUT = AnimationTimingFunction(_constants.EASE_IN_OUT);
AnimationTimingFunction.STEP_START = AnimationTimingFunction(_constants.STEP_START);
AnimationTimingFunction.STEP_END = AnimationTimingFunction(_constants.STEP_END);

AnimationTimingFunction.cubicBezier = function () {
  return AnimationTimingFunction(_methods.cubicBezier.apply(void 0, arguments));
};

AnimationTimingFunction.steps = function () {
  return AnimationTimingFunction(_methods.steps.apply(void 0, arguments));
};

AnimationTimingFunction.frames = function () {
  return AnimationTimingFunction(_methods.frames.apply(void 0, arguments));
};

var AnimationDelay = (0, _utils.property)('animationDelay');
exports.AnimationDelay = AnimationDelay;
var AnimationDuration = (0, _utils.property)('animationDuration');
exports.AnimationDuration = AnimationDuration;
var AnimationDirection = (0, _utils.property)('animationDirection');
exports.AnimationDirection = AnimationDirection;
AnimationDirection.NORMAL = AnimationDirection(_constants.NORMAL);
AnimationDirection.REVERSE = AnimationDirection(_constants.REVERSE);
AnimationDirection.ALTERNATE = AnimationDirection(_constants.ALTERNATE);
AnimationDirection.ALTERNATE_REVERSE = AnimationDirection(_constants.ALTERNATE_REVERSE);
var AnimationFillMode = (0, _utils.property)('animationFillMode');
exports.AnimationFillMode = AnimationFillMode;
AnimationFillMode.NONE = AnimationFillMode(_constants.NONE);
AnimationFillMode.FORWARDS = AnimationFillMode(_constants.FORWARDS);
AnimationFillMode.BACKWARDS = AnimationFillMode(_constants.BACKWARDS);
AnimationFillMode.BOTH = AnimationFillMode(_constants.BOTH);
var AnimationIterationCount = (0, _utils.property)('animationIterationCount');
exports.AnimationIterationCount = AnimationIterationCount;
AnimationIterationCount.INFINITE = AnimationIterationCount(_constants.INFINITE);
var AnimationPlayState = (0, _utils.property)('animationPlayState');
exports.AnimationPlayState = AnimationPlayState;
AnimationPlayState.RUNNING = AnimationPlayState(_constants.RUNNING);
AnimationPlayState.PAUSED = AnimationPlayState(_constants.PAUSED);

/***/ }),

/***/ "./src/properties/animation/index.js":
/*!*******************************************!*\
  !*** ./src/properties/animation/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animation = __webpack_require__(/*! ./animation */ "./src/properties/animation/animation.js");

Object.keys(_animation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animation[key];
    }
  });
});

var _offset = __webpack_require__(/*! ./offset */ "./src/properties/animation/offset.js");

Object.keys(_offset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _offset[key];
    }
  });
});

var _transition = __webpack_require__(/*! ./transition */ "./src/properties/animation/transition.js");

Object.keys(_transition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _transition[key];
    }
  });
});

/***/ }),

/***/ "./src/properties/animation/offset.js":
/*!********************************************!*\
  !*** ./src/properties/animation/offset.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OffsetAnchor = exports.OffsetRotate = exports.OffsetDistance = exports.OffsetPath = exports.OffsetPosition = exports.Offset = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var _methods = __webpack_require__(/*! ../../methods */ "./src/methods/index.js");

var Offset = (0, _utils.property)('offset');
exports.Offset = Offset;
var OffsetPosition = (0, _utils.property)('offsetPosition');
exports.OffsetPosition = OffsetPosition;
OffsetPosition.AUTO = OffsetPosition(_constants.AUTO);
var OffsetPath = (0, _utils.property)('offsetPath');
exports.OffsetPath = OffsetPath;
OffsetPath.NONE = OffsetPath(_constants.NONE);

OffsetPath.ray = function () {
  return OffsetPath(_methods.ray.apply(void 0, arguments));
};

var OffsetDistance = (0, _utils.property)('offsetDistance');
exports.OffsetDistance = OffsetDistance;
var OffsetRotate = (0, _utils.property)('offsetRotate');
exports.OffsetRotate = OffsetRotate;
OffsetRotate.AUTO = OffsetRotate(_constants.AUTO);
OffsetRotate.REVERSE = OffsetRotate(_constants.REVERSE);
var OffsetAnchor = (0, _utils.property)('offsetAnchor');
exports.OffsetAnchor = OffsetAnchor;
OffsetAnchor.AUTO = OffsetAnchor(_constants.AUTO);

/***/ }),

/***/ "./src/properties/animation/transition.js":
/*!************************************************!*\
  !*** ./src/properties/animation/transition.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransitionTimingFunction = exports.TransitionProperty = exports.TransitionDuration = exports.TransitionDelay = exports.Transition = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var _methods = __webpack_require__(/*! ../../methods */ "./src/methods/index.js");

var Transition = (0, _utils.property)('transition');
exports.Transition = Transition;
var TransitionDelay = (0, _utils.property)('transitionDelay');
exports.TransitionDelay = TransitionDelay;
var TransitionDuration = (0, _utils.property)('transitionDuration');
exports.TransitionDuration = TransitionDuration;
var TransitionProperty = (0, _utils.property)('transitionProperty');
exports.TransitionProperty = TransitionProperty;
TransitionProperty.NONE = TransitionProperty(_constants.NONE);
TransitionProperty.ALL = TransitionProperty(_constants.ALL);
var TransitionTimingFunction = (0, _utils.property)('transitionTimingFunction');
exports.TransitionTimingFunction = TransitionTimingFunction;
TransitionTimingFunction.LINEAR = TransitionTimingFunction(_constants.LINEAR);
TransitionTimingFunction.EASE = TransitionTimingFunction(_constants.EASE);
TransitionTimingFunction.EASE_IN = TransitionTimingFunction(_constants.EASE_IN);
TransitionTimingFunction.EASE_OUT = TransitionTimingFunction(_constants.EASE_OUT);
TransitionTimingFunction.EASE_IN_OUT = TransitionTimingFunction(_constants.EASE_IN_OUT);
TransitionTimingFunction.STEP_START = TransitionTimingFunction(_constants.STEP_START);
TransitionTimingFunction.STEP_END = TransitionTimingFunction(_constants.STEP_END);

TransitionTimingFunction.cubicBezier = function () {
  return TransitionTimingFunction(_methods.cubicBezier.apply(void 0, arguments));
};

TransitionTimingFunction.steps = function () {
  return TransitionTimingFunction(_methods.steps.apply(void 0, arguments));
};

TransitionTimingFunction.frames = function () {
  return TransitionTimingFunction(_methods.frames.apply(void 0, arguments));
};

/***/ }),

/***/ "./src/properties/index.js":
/*!*********************************!*\
  !*** ./src/properties/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animation = __webpack_require__(/*! ./animation */ "./src/properties/animation/index.js");

Object.keys(_animation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animation[key];
    }
  });
});

var _layout = __webpack_require__(/*! ./layout */ "./src/properties/layout/index.js");

Object.keys(_layout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _layout[key];
    }
  });
});

var _misc = __webpack_require__(/*! ./misc */ "./src/properties/misc/index.js");

Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _misc[key];
    }
  });
});

var _typography = __webpack_require__(/*! ./typography */ "./src/properties/typography/index.js");

Object.keys(_typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typography[key];
    }
  });
});

var _visual = __webpack_require__(/*! ./visual */ "./src/properties/visual/index.js");

Object.keys(_visual).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _visual[key];
    }
  });
});

/***/ }),

/***/ "./src/properties/layout/box-sizing.js":
/*!*********************************************!*\
  !*** ./src/properties/layout/box-sizing.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxSizing = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var BoxSizing = (0, _utils.property)('boxSizing');
exports.BoxSizing = BoxSizing;
BoxSizing.CONTENT_BOX = BoxSizing(_constants.CONTENT_BOX);
BoxSizing.BORDER_BOX = BoxSizing(_constants.BORDER_BOX);

/***/ }),

/***/ "./src/properties/layout/break.js":
/*!****************************************!*\
  !*** ./src/properties/layout/break.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxDecorationBreak = exports.Widows = exports.Orphans = exports.BreakInside = exports.BreakAfter = exports.BreakBefore = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var BreakBefore = (0, _utils.property)('breakBefore');
exports.BreakBefore = BreakBefore;
BreakBefore.AUTO = BreakBefore(_constants.AUTO);
BreakBefore.AVOID = BreakBefore(_constants.AVOID);
BreakBefore.AVOID_PAGE = BreakBefore(_constants.AVOID_PAGE);
BreakBefore.PAGE = BreakBefore(_constants.PAGE);
BreakBefore.LEFT = BreakBefore(_constants.LEFT);
BreakBefore.RIGHT = BreakBefore(_constants.RIGHT);
BreakBefore.RECTO = BreakBefore(_constants.RECTO);
BreakBefore.VERSO = BreakBefore(_constants.VERSO);
BreakBefore.AVOID_COLUMN = BreakBefore(_constants.AVOID_COLUMN);
BreakBefore.COLUMN = BreakBefore(_constants.COLUMN);
BreakBefore.AVOID_REGION = BreakBefore(_constants.AVOID_REGION);
BreakBefore.REGION = BreakBefore(_constants.REGION);
var BreakAfter = (0, _utils.property)('breakAfter');
exports.BreakAfter = BreakAfter;
BreakAfter.AUTO = BreakAfter(_constants.AUTO);
BreakAfter.AVOID = BreakAfter(_constants.AVOID);
BreakAfter.AVOID_PAGE = BreakAfter(_constants.AVOID_PAGE);
BreakAfter.PAGE = BreakAfter(_constants.PAGE);
BreakAfter.LEFT = BreakAfter(_constants.LEFT);
BreakAfter.RIGHT = BreakAfter(_constants.RIGHT);
BreakAfter.RECTO = BreakAfter(_constants.RECTO);
BreakAfter.VERSO = BreakAfter(_constants.VERSO);
BreakAfter.AVOID_COLUMN = BreakAfter(_constants.AVOID_COLUMN);
BreakAfter.COLUMN = BreakAfter(_constants.COLUMN);
BreakAfter.AVOID_REGION = BreakAfter(_constants.AVOID_REGION);
BreakAfter.REGION = BreakAfter(_constants.REGION);
var BreakInside = (0, _utils.property)('breakInside');
exports.BreakInside = BreakInside;
BreakInside.AUTO = BreakInside(_constants.AUTO);
BreakInside.AVOID = BreakInside(_constants.AVOID);
BreakInside.AVOID_PAGE = BreakInside(_constants.AVOID_PAGE);
BreakInside.AVOID_COLUMN = BreakInside(_constants.AVOID_COLUMN);
BreakInside.AVOID_REGION = BreakInside(_constants.AVOID_REGION);
var Orphans = (0, _utils.property)('orphans');
exports.Orphans = Orphans;
var Widows = (0, _utils.property)('widows');
exports.Widows = Widows;
var BoxDecorationBreak = (0, _utils.property)('boxDecorationBreak');
exports.BoxDecorationBreak = BoxDecorationBreak;
BoxDecorationBreak.SLICE = BoxDecorationBreak(_constants.SLICE);
BoxDecorationBreak.CLONE = BoxDecorationBreak(_constants.CLONE);

/***/ }),

/***/ "./src/properties/layout/display.js":
/*!******************************************!*\
  !*** ./src/properties/layout/display.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BorderBoundary = exports.ShapeInside = exports.Display = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Display = (0, _utils.property)('display');
exports.Display = Display;
Display.NONE = Display(_constants.NONE);
Display.BLOCK = Display(_constants.BLOCK);
Display.INLINE_BLOCK = Display(_constants.INLINE_BLOCK);
Display.INLINE = Display(_constants.INLINE);
Display.LIST_ITEM = Display(_constants.LIST_ITEM);
Display.TABLE = Display(_constants.TABLE);
Display.INLINE_TABLE = Display(_constants.INLINE_TABLE);
Display.TABLE_ROW = Display(_constants.TABLE_ROW);
Display.TABLE_ROW_GROUP = Display(_constants.TABLE_ROW_GROUP);
Display.TABLE_COLUMN = Display(_constants.TABLE_COLUMN);
Display.TABLE_COLUMN_GROUP = Display(_constants.TABLE_COLUMN_GROUP);
Display.TABLE_HEADER_GROUP = Display(_constants.TABLE_HEADER_GROUP);
Display.TABLE_FOOTER_GROUP = Display(_constants.TABLE_FOOTER_GROUP);
Display.TABLE_CELL = Display(_constants.TABLE_CELL);
Display.TABLE_CAPTION = Display(_constants.TABLE_CAPTION);
Display.FLEX = Display(_constants.FLEX);
Display.GRID = Display(_constants.GRID);
Display.SUBGRID = Display(_constants.SUBGRID);
Display.INLINE_FLEX = Display(_constants.INLINE_FLEX);
Display.INLINE_GRID = Display(_constants.INLINE_GRID);
Display.RUBY = Display(_constants.RUBY);
Display.RUBY_BASE = Display(_constants.RUBY_BASE);
Display.RUBY_TEXT = Display(_constants.RUBY_TEXT);
Display.RUBY_BASE_CONTAINER = Display(_constants.RUBY_BASE_CONTAINER);
Display.RUBY_TEXT_CONTAINER = Display(_constants.RUBY_TEXT_CONTAINER);
Display.CONTENTS = Display(_constants.CONTENTS);
Display.RUN_IN = Display(_constants.RUN_IN);
Display.FLOW = Display(_constants.FLOW);
Display.FLOW_ROOT = Display(_constants.FLOW_ROOT);
var ShapeInside = (0, _utils.property)('shapeInside');
exports.ShapeInside = ShapeInside;
ShapeInside.AUTO = ShapeInside(_constants.AUTO);
ShapeInside.OUTSIDE_SHAPE = ShapeInside(_constants.OUTSIDE_SHAPE);
ShapeInside.SHAPE_BOX = ShapeInside(_constants.SHAPE_BOX);
ShapeInside.DISPLAY = ShapeInside(_constants.DISPLAY);
var BorderBoundary = (0, _utils.property)('borderBoundary');
exports.BorderBoundary = BorderBoundary;
BorderBoundary.NONE = BorderBoundary(_constants.NONE);
BorderBoundary.NONE = BorderBoundary(_constants.PARENT);
BorderBoundary.NONE = BorderBoundary(_constants.DISPLAY);

/***/ }),

/***/ "./src/properties/layout/flexbox.js":
/*!******************************************!*\
  !*** ./src/properties/layout/flexbox.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceSelf = exports.PlaceItems = exports.PlaceContent = exports.AlignSelf = exports.AlignItems = exports.AlignContent = exports.JustifySelf = exports.JustifyItems = exports.JustifyContent = exports.Order = exports.FlexWrap = exports.FlexDirection = exports.FlexFlow = exports.FlexBasis = exports.FlexShrink = exports.FlexGrow = exports.Flex = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Flex = (0, _utils.property)('flex');
exports.Flex = Flex;
Flex.NONE = Flex(_constants.NONE);
var FlexGrow = (0, _utils.property)('flexGrow');
exports.FlexGrow = FlexGrow;
var FlexShrink = (0, _utils.property)('flexShrink');
exports.FlexShrink = FlexShrink;
var FlexBasis = (0, _utils.property)('flexBasis');
exports.FlexBasis = FlexBasis;
FlexBasis.AUTO = FlexBasis(_constants.AUTO);
FlexBasis.CONTENT = FlexBasis(_constants.CONTENT);
var FlexFlow = (0, _utils.property)('flexFlow');
exports.FlexFlow = FlexFlow;
var FlexDirection = (0, _utils.property)('flexDirection');
exports.FlexDirection = FlexDirection;
FlexDirection.ROW = FlexDirection(_constants.ROW);
FlexDirection.ROW_REVERSE = FlexDirection(_constants.ROW_REVERSE);
FlexDirection.COLUMN = FlexDirection(_constants.COLUMN);
FlexDirection.COLUMN_REVERSE = FlexDirection(_constants.COLUMN_REVERSE);
var FlexWrap = (0, _utils.property)('flexWrap');
exports.FlexWrap = FlexWrap;
FlexWrap.NOWRAP = FlexWrap(_constants.NOWRAP);
FlexWrap.WRAP = FlexWrap(_constants.WRAP);
FlexWrap.WRAP_REVERSE = FlexWrap(_constants.WRAP_REVERSE);
var Order = (0, _utils.property)('order');
exports.Order = Order;

/* Justify */
var JustifyContent = (0, _utils.property)('justifyContent');
exports.JustifyContent = JustifyContent;
JustifyContent.NORMAL = JustifyContent(_constants.NORMAL);
JustifyContent.SPACE_BETWEEN = JustifyContent(_constants.SPACE_BETWEEN);
JustifyContent.SPACE_AROUND = JustifyContent(_constants.SPACE_AROUND);
JustifyContent.SPACE_EVENLY = JustifyContent(_constants.SPACE_EVENLY);
JustifyContent.STRETCH = JustifyContent(_constants.STRETCH);
JustifyContent.CENTER = JustifyContent(_constants.CENTER);
JustifyContent.START = JustifyContent(_constants.START);
JustifyContent.END = JustifyContent(_constants.END);
JustifyContent.FLEX_START = JustifyContent(_constants.FLEX_START);
JustifyContent.FLEX_END = JustifyContent(_constants.FLEX_END);
JustifyContent.LEFT = JustifyContent(_constants.LEFT);
JustifyContent.RIGHT = JustifyContent(_constants.RIGHT);

JustifyContent.safe = function () {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return JustifyContent.apply(void 0, [_constants.SAFE].concat(values));
};

JustifyContent.unsafe = function () {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  return JustifyContent.apply(void 0, [_constants.UNSAFE].concat(values));
};

var JustifyItems = (0, _utils.property)('justifyItems');
exports.JustifyItems = JustifyItems;
JustifyItems.NORMAL = JustifyItems(_constants.NORMAL);
JustifyItems.STRETCH = JustifyItems(_constants.STRETCH);
JustifyItems.BASELINE = JustifyItems(_constants.BASELINE);
JustifyItems.FIRST_BASELINE = JustifyItems(_constants.FIRST, _constants.BASELINE);
JustifyItems.LAST_BASELINE = JustifyItems(_constants.LAST, _constants.BASELINE);
JustifyItems.CENTER = JustifyItems(_constants.CENTER);
JustifyItems.START = JustifyItems(_constants.START);
JustifyItems.END = JustifyItems(_constants.END);
JustifyItems.SELF_START = JustifyItems(_constants.SELF_START);
JustifyItems.SELF_END = JustifyItems(_constants.SELF_END);
JustifyItems.FLEX_START = JustifyItems(_constants.FLEX_START);
JustifyItems.FLEX_END = JustifyItems(_constants.FLEX_END);
JustifyItems.LEFT = JustifyItems(_constants.LEFT);
JustifyItems.RIGHT = JustifyItems(_constants.RIGHT);
JustifyItems.LEGACY = JustifyItems(_constants.LEGACY);

JustifyItems.safe = function () {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }

  return JustifyItems.apply(void 0, [_constants.SAFE].concat(values));
};

JustifyItems.unsafe = function () {
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }

  return JustifyItems.apply(void 0, [_constants.UNSAFE].concat(values));
};

JustifyItems.legacy = function () {
  for (var _len5 = arguments.length, values = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    values[_key5] = arguments[_key5];
  }

  return JustifyItems.apply(void 0, [_constants.LEGACY].concat(values));
};

var JustifySelf = (0, _utils.property)('justifySelf');
exports.JustifySelf = JustifySelf;
JustifySelf.AUTO = JustifySelf(_constants.AUTO);
JustifySelf.NORMAL = JustifySelf(_constants.NORMAL);
JustifySelf.STRETCH = JustifySelf(_constants.STRETCH);
JustifySelf.BASELINE = JustifySelf(_constants.BASELINE);
JustifySelf.FIRST_BASELINE = JustifySelf(_constants.FIRST, _constants.BASELINE);
JustifySelf.LAST_BASELINE = JustifySelf(_constants.LAST, _constants.BASELINE);
JustifySelf.CENTER = JustifySelf(_constants.CENTER);
JustifySelf.START = JustifySelf(_constants.START);
JustifySelf.END = JustifySelf(_constants.END);
JustifySelf.FLEX_START = JustifySelf(_constants.FLEX_START);
JustifySelf.FLEX_END = JustifySelf(_constants.FLEX_END);
JustifySelf.SELF_START = JustifySelf(_constants.SELF_START);
JustifySelf.SELF_END = JustifySelf(_constants.SELF_END);
JustifySelf.RIGHT = JustifySelf(_constants.RIGHT);
JustifySelf.LEGACY = JustifySelf(_constants.LEGACY);

JustifySelf.safe = function () {
  for (var _len6 = arguments.length, values = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    values[_key6] = arguments[_key6];
  }

  return JustifySelf.apply(void 0, [_constants.SAFE].concat(values));
};

JustifySelf.unsafe = function () {
  for (var _len7 = arguments.length, values = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    values[_key7] = arguments[_key7];
  }

  return JustifySelf.apply(void 0, [_constants.UNSAFE].concat(values));
};

/* Align */
var AlignContent = (0, _utils.property)('alignContent');
exports.AlignContent = AlignContent;
AlignContent.NORMAL = AlignContent(_constants.NORMAL);
AlignContent.BASELINE = AlignContent(_constants.BASELINE);
AlignContent.FIRST_BASELINE = AlignContent(_constants.FIRST, _constants.BASELINE);
AlignContent.LAST_BASELINE = AlignContent(_constants.LAST, _constants.BASELINE);
AlignContent.SPACE_BETWEEN = AlignContent(_constants.SPACE_BETWEEN);
AlignContent.SPACE_AROUND = AlignContent(_constants.SPACE_AROUND);
AlignContent.SPACE_AROUND = AlignContent(_constants.SPACE_EVENLY);
AlignContent.STRETCH = AlignContent(_constants.STRETCH);
AlignContent.CENTER = AlignContent(_constants.CENTER);
AlignContent.START = AlignContent(_constants.START);
AlignContent.END = AlignContent(_constants.END);
AlignContent.FLEX_START = AlignContent(_constants.FLEX_START);
AlignContent.FLEX_END = AlignContent(_constants.FLEX_END);

AlignContent.safe = function () {
  for (var _len8 = arguments.length, values = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    values[_key8] = arguments[_key8];
  }

  return AlignContent.apply(void 0, [_constants.SAFE].concat(values));
};

AlignContent.unsafe = function () {
  for (var _len9 = arguments.length, values = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    values[_key9] = arguments[_key9];
  }

  return AlignContent.apply(void 0, [_constants.UNSAFE].concat(values));
};

var AlignItems = (0, _utils.property)('alignItems');
exports.AlignItems = AlignItems;
AlignItems.NORMAL = AlignItems(_constants.NORMAL);
AlignItems.STRETCH = AlignItems(_constants.STRETCH);
AlignItems.BASELINE = AlignItems(_constants.BASELINE);
AlignItems.FIRST_BASELINE = AlignItems(_constants.FIRST, _constants.BASELINE);
AlignItems.LAST_BASELINE = AlignItems(_constants.LAST, _constants.BASELINE);
AlignItems.CENTER = AlignItems(_constants.CENTER);
AlignItems.START = AlignItems(_constants.START);
AlignItems.END = AlignItems(_constants.END);
AlignItems.FLEX_START = AlignItems(_constants.FLEX_START);
AlignItems.FLEX_END = AlignItems(_constants.FLEX_END);
AlignItems.SELF_START = AlignItems(_constants.SELF_START);
AlignItems.SELF_END = AlignItems(_constants.SELF_END);

AlignItems.safe = function () {
  for (var _len10 = arguments.length, values = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    values[_key10] = arguments[_key10];
  }

  return AlignItems.apply(void 0, [_constants.SAFE].concat(values));
};

AlignItems.unsafe = function () {
  for (var _len11 = arguments.length, values = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    values[_key11] = arguments[_key11];
  }

  return AlignItems.apply(void 0, [_constants.UNSAFE].concat(values));
};

var AlignSelf = (0, _utils.property)('alignSelf');
exports.AlignSelf = AlignSelf;
AlignSelf.AUTO = AlignSelf(_constants.AUTO);
AlignSelf.NORMAL = AlignSelf(_constants.NORMAL);
AlignSelf.STRETCH = AlignSelf(_constants.STRETCH);
AlignSelf.BASELINE = AlignSelf(_constants.BASELINE);
AlignSelf.FIRST_BASELINE = AlignSelf(_constants.FIRST, _constants.BASELINE);
AlignSelf.LAST_BASELINE = AlignSelf(_constants.LAST, _constants.BASELINE);
AlignSelf.CENTER = AlignSelf(_constants.CENTER);
AlignSelf.START = AlignSelf(_constants.START);
AlignSelf.END = AlignSelf(_constants.END);
AlignSelf.FLEX_START = AlignSelf(_constants.FLEX_START);
AlignSelf.FLEX_END = AlignSelf(_constants.FLEX_END);
AlignSelf.SELF_START = AlignSelf(_constants.SELF_START);
AlignSelf.SELF_END = AlignSelf(_constants.SELF_END);

AlignSelf.safe = function () {
  for (var _len12 = arguments.length, values = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    values[_key12] = arguments[_key12];
  }

  return AlignSelf.apply(void 0, [_constants.SAFE].concat(values));
};

AlignSelf.unsafe = function () {
  for (var _len13 = arguments.length, values = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    values[_key13] = arguments[_key13];
  }

  return AlignSelf.apply(void 0, [_constants.UNSAFE].concat(values));
};

/* Place */
var PlaceContent = (0, _utils.property)('placeContent');
exports.PlaceContent = PlaceContent;
PlaceContent.NORMAL = PlaceContent(_constants.NORMAL);
PlaceContent.BASELINE = PlaceContent(_constants.BASELINE);
PlaceContent.FIRST_BASELINE = PlaceContent(_constants.FIRST, _constants.BASELINE);
PlaceContent.LAST_BASELINE = PlaceContent(_constants.LAST, _constants.BASELINE);
PlaceContent.SPACE_BETWEEN = PlaceContent(_constants.SPACE_BETWEEN);
PlaceContent.SPACE_AROUND = PlaceContent(_constants.SPACE_AROUND);
PlaceContent.SPACE_AROUND = PlaceContent(_constants.SPACE_EVENLY);
PlaceContent.STRETCH = PlaceContent(_constants.STRETCH);
PlaceContent.CENTER = PlaceContent(_constants.CENTER);
PlaceContent.START = PlaceContent(_constants.START);
PlaceContent.END = PlaceContent(_constants.END);
PlaceContent.FLEX_START = PlaceContent(_constants.FLEX_START);
PlaceContent.FLEX_END = PlaceContent(_constants.FLEX_END);

PlaceContent.safe = function () {
  for (var _len14 = arguments.length, values = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    values[_key14] = arguments[_key14];
  }

  return PlaceContent.apply(void 0, [_constants.SAFE].concat(values));
};

PlaceContent.unsafe = function () {
  for (var _len15 = arguments.length, values = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    values[_key15] = arguments[_key15];
  }

  return PlaceContent.apply(void 0, [_constants.UNSAFE].concat(values));
};

var PlaceItems = (0, _utils.property)('placeItems');
exports.PlaceItems = PlaceItems;
PlaceItems.NORMAL = PlaceItems(_constants.NORMAL);
PlaceItems.STRETCH = PlaceItems(_constants.STRETCH);
PlaceItems.BASELINE = PlaceItems(_constants.BASELINE);
PlaceItems.FIRST_BASELINE = PlaceItems(_constants.FIRST, _constants.BASELINE);
PlaceItems.LAST_BASELINE = PlaceItems(_constants.LAST, _constants.BASELINE);
PlaceItems.CENTER = PlaceItems(_constants.CENTER);
PlaceItems.START = PlaceItems(_constants.START);
PlaceItems.END = PlaceItems(_constants.END);
PlaceItems.FLEX_START = PlaceItems(_constants.FLEX_START);
PlaceItems.FLEX_END = PlaceItems(_constants.FLEX_END);
PlaceItems.SELF_START = PlaceItems(_constants.SELF_START);
PlaceItems.SELF_END = PlaceItems(_constants.SELF_END);

PlaceItems.safe = function () {
  for (var _len16 = arguments.length, values = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    values[_key16] = arguments[_key16];
  }

  return PlaceItems.apply(void 0, [_constants.SAFE].concat(values));
};

PlaceItems.unsafe = function () {
  for (var _len17 = arguments.length, values = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    values[_key17] = arguments[_key17];
  }

  return PlaceItems.apply(void 0, [_constants.UNSAFE].concat(values));
};

var PlaceSelf = (0, _utils.property)('placeSelf');
exports.PlaceSelf = PlaceSelf;
PlaceSelf.AUTO = PlaceSelf(_constants.AUTO);
PlaceSelf.NORMAL = PlaceSelf(_constants.NORMAL);
PlaceSelf.STRETCH = PlaceSelf(_constants.STRETCH);
PlaceSelf.BASELINE = PlaceSelf(_constants.BASELINE);
PlaceSelf.FIRST_BASELINE = PlaceSelf(_constants.FIRST, _constants.BASELINE);
PlaceSelf.LAST_BASELINE = PlaceSelf(_constants.LAST, _constants.BASELINE);
PlaceSelf.CENTER = PlaceSelf(_constants.CENTER);
PlaceSelf.START = PlaceSelf(_constants.START);
PlaceSelf.END = PlaceSelf(_constants.END);
PlaceSelf.FLEX_START = PlaceSelf(_constants.FLEX_START);
PlaceSelf.FLEX_END = PlaceSelf(_constants.FLEX_END);
PlaceSelf.SELF_START = PlaceSelf(_constants.SELF_START);
PlaceSelf.SELF_END = PlaceSelf(_constants.SELF_END);

PlaceSelf.safe = function () {
  for (var _len18 = arguments.length, values = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    values[_key18] = arguments[_key18];
  }

  return PlaceSelf.apply(void 0, [_constants.SAFE].concat(values));
};

PlaceSelf.unsafe = function () {
  for (var _len19 = arguments.length, values = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    values[_key19] = arguments[_key19];
  }

  return PlaceSelf.apply(void 0, [_constants.UNSAFE].concat(values));
};

/***/ }),

/***/ "./src/properties/layout/float.js":
/*!****************************************!*\
  !*** ./src/properties/layout/float.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatOffset = exports.FloatDefer = exports.FloatReference = exports.Clear = exports.Float = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Float = (0, _utils.property)('float');
exports.Float = Float;
Float.BLOCK_START = Float(_constants.BLOCK_START);
Float.BLOCK_END = Float(_constants.BLOCK_END);
Float.INLINE_START = Float(_constants.INLINE_START);
Float.INLINE_END = Float(_constants.INLINE_END);
Float.SNAP_BLOCK = Float(_constants.SNAP_BLOCK);
Float.SNAP_INLINE = Float(_constants.SNAP_INLINE);
Float.LEFT = Float(_constants.LEFT);
Float.RIGHT = Float(_constants.RIGHT);
Float.TOP = Float(_constants.TOP);
Float.BOTTOM = Float(_constants.BOTTOM);
Float.NONE = Float(_constants.NONE);
var Clear = (0, _utils.property)('clear');
exports.Clear = Clear;
Clear.BLOCK_START = Clear(_constants.BLOCK_START);
Clear.BLOCK_END = Clear(_constants.BLOCK_END);
Clear.INLINE_START = Clear(_constants.INLINE_START);
Clear.INLINE_END = Clear(_constants.INLINE_END);
Clear.LEFT = Clear(_constants.LEFT);
Clear.RIGHT = Clear(_constants.RIGHT);
Clear.TOP = Clear(_constants.TOP);
Clear.BOTTOM = Clear(_constants.BOTTOM);
Clear.NONE = Clear(_constants.NONE);
var FloatReference = (0, _utils.property)('floatReference');
exports.FloatReference = FloatReference;
FloatReference.INLINE = FloatReference(_constants.INLINE);
FloatReference.COLUMN = FloatReference(_constants.COLUMN);
FloatReference.REGION = FloatReference(_constants.REGION);
FloatReference.PAGE = FloatReference(_constants.PAGE);
var FloatDefer = (0, _utils.property)('floatDefer');
exports.FloatDefer = FloatDefer;
FloatDefer.NONE = FloatDefer(_constants.NONE);
FloatDefer.LAST = FloatDefer(_constants.LAST);
var FloatOffset = (0, _utils.property)('floatOffset');
exports.FloatOffset = FloatOffset;

/***/ }),

/***/ "./src/properties/layout/grid.js":
/*!***************************************!*\
  !*** ./src/properties/layout/grid.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridTemplateRows = exports.GridTemplateColumns = exports.GridTemplateAreas = exports.GridTemplate = exports.GridColumnEnd = exports.GridColumnStart = exports.GridColumn = exports.GridRowEnd = exports.GridRowStart = exports.GridRow = exports.GridAutoFlow = exports.GridAutoRows = exports.GridAutoColumns = exports.GridArea = exports.Grid = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Grid = (0, _utils.property)('grid');
exports.Grid = Grid;
var GridArea = (0, _utils.property)('gridArea');
exports.GridArea = GridArea;
var GridAutoColumns = (0, _utils.property)('gridAutoColumns');
exports.GridAutoColumns = GridAutoColumns;
GridAutoColumns.AUTO = GridAutoColumns(_constants.AUTO);
GridAutoColumns.MIN_CONTENT = GridAutoColumns(_constants.MIN_CONTENT);
GridAutoColumns.MAX_CONTENT = GridAutoColumns(_constants.MAX_CONTENT);
var GridAutoRows = (0, _utils.property)('gridAutoRows');
exports.GridAutoRows = GridAutoRows;
GridAutoRows.AUTO = GridAutoRows(_constants.AUTO);
GridAutoRows.MIN_CONTENT = GridAutoRows(_constants.MIN_CONTENT);
GridAutoRows.MAX_CONTENT = GridAutoRows(_constants.MAX_CONTENT);
var GridAutoFlow = (0, _utils.property)('gridAutoFlow');
exports.GridAutoFlow = GridAutoFlow;
GridAutoFlow.ROW = GridAutoFlow(_constants.ROW);
GridAutoFlow.COLUMN = GridAutoFlow(_constants.COLUMN);
GridAutoFlow.DENSE = GridAutoFlow(_constants.DENSE);
var GridRow = (0, _utils.property)('gridRow');
exports.GridRow = GridRow;
GridRow.AUTO = GridRow(_constants.AUTO);

GridRow.span = function () {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return GridRow.apply(void 0, [_constants.SPAN].concat(values));
};

var GridRowStart = (0, _utils.property)('gridRowStart');
exports.GridRowStart = GridRowStart;
GridRowStart.AUTO = GridRowStart(_constants.AUTO);

GridRowStart.span = function () {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  return GridRowStart.apply(void 0, [_constants.SPAN].concat(values));
};

var GridRowEnd = (0, _utils.property)('gridRowEnd');
exports.GridRowEnd = GridRowEnd;
GridRowEnd.AUTO = GridRowEnd(_constants.AUTO);

GridRowEnd.span = function () {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }

  return GridRowEnd.apply(void 0, [_constants.SPAN].concat(values));
};

var GridColumn = (0, _utils.property)('gridColumn');
exports.GridColumn = GridColumn;
GridColumn.AUTO = GridColumn(_constants.AUTO);

GridColumn.span = function () {
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }

  return GridColumn.apply(void 0, [_constants.SPAN].concat(values));
};

var GridColumnStart = (0, _utils.property)('gridRowStart');
exports.GridColumnStart = GridColumnStart;
GridColumnStart.AUTO = GridColumnStart(_constants.AUTO);

GridColumnStart.span = function () {
  for (var _len5 = arguments.length, values = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    values[_key5] = arguments[_key5];
  }

  return GridColumnStart.apply(void 0, [_constants.SPAN].concat(values));
};

var GridColumnEnd = (0, _utils.property)('gridRowEnd');
exports.GridColumnEnd = GridColumnEnd;
GridColumnEnd.AUTO = GridColumnEnd(_constants.AUTO);

GridColumnEnd.span = function () {
  for (var _len6 = arguments.length, values = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    values[_key6] = arguments[_key6];
  }

  return GridColumnEnd.apply(void 0, [_constants.SPAN].concat(values));
};

var GridTemplate = (0, _utils.property)('gridTemplate');
exports.GridTemplate = GridTemplate;
GridTemplate.NONE = GridTemplate(_constants.NONE);
var GridTemplateAreas = (0, _utils.property)('gridTemplateAreas');
exports.GridTemplateAreas = GridTemplateAreas;
GridTemplateAreas.NONE = GridTemplateAreas(_constants.NONE);
var GridTemplateColumns = (0, _utils.property)('gridTemplateColumns');
exports.GridTemplateColumns = GridTemplateColumns;
GridTemplateColumns.NONE = GridTemplateColumns(_constants.NONE);
var GridTemplateRows = (0, _utils.property)('gridTemplateRows');
exports.GridTemplateRows = GridTemplateRows;
GridTemplateRows.NONE = GridTemplateRows(_constants.NONE);

/***/ }),

/***/ "./src/properties/layout/index.js":
/*!****************************************!*\
  !*** ./src/properties/layout/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boxSizing = __webpack_require__(/*! ./box-sizing */ "./src/properties/layout/box-sizing.js");

Object.keys(_boxSizing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _boxSizing[key];
    }
  });
});

var _break = __webpack_require__(/*! ./break */ "./src/properties/layout/break.js");

Object.keys(_break).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _break[key];
    }
  });
});

var _display = __webpack_require__(/*! ./display */ "./src/properties/layout/display.js");

Object.keys(_display).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _display[key];
    }
  });
});

var _flexbox = __webpack_require__(/*! ./flexbox */ "./src/properties/layout/flexbox.js");

Object.keys(_flexbox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _flexbox[key];
    }
  });
});

var _float = __webpack_require__(/*! ./float */ "./src/properties/layout/float.js");

Object.keys(_float).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _float[key];
    }
  });
});

var _grid = __webpack_require__(/*! ./grid */ "./src/properties/layout/grid.js");

Object.keys(_grid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _grid[key];
    }
  });
});

var _inline = __webpack_require__(/*! ./inline */ "./src/properties/layout/inline.js");

Object.keys(_inline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inline[key];
    }
  });
});

var _inset = __webpack_require__(/*! ./inset */ "./src/properties/layout/inset.js");

Object.keys(_inset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inset[key];
    }
  });
});

var _margin = __webpack_require__(/*! ./margin */ "./src/properties/layout/margin.js");

Object.keys(_margin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _margin[key];
    }
  });
});

var _multicol = __webpack_require__(/*! ./multicol */ "./src/properties/layout/multicol.js");

Object.keys(_multicol).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _multicol[key];
    }
  });
});

var _overflow = __webpack_require__(/*! ./overflow */ "./src/properties/layout/overflow.js");

Object.keys(_overflow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _overflow[key];
    }
  });
});

var _padding = __webpack_require__(/*! ./padding */ "./src/properties/layout/padding.js");

Object.keys(_padding).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _padding[key];
    }
  });
});

var _position = __webpack_require__(/*! ./position */ "./src/properties/layout/position.js");

Object.keys(_position).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _position[key];
    }
  });
});

var _ruby = __webpack_require__(/*! ./ruby */ "./src/properties/layout/ruby.js");

Object.keys(_ruby).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ruby[key];
    }
  });
});

var _scroll = __webpack_require__(/*! ./scroll */ "./src/properties/layout/scroll.js");

Object.keys(_scroll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scroll[key];
    }
  });
});

var _size = __webpack_require__(/*! ./size */ "./src/properties/layout/size.js");

Object.keys(_size).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _size[key];
    }
  });
});

var _tables = __webpack_require__(/*! ./tables */ "./src/properties/layout/tables.js");

Object.keys(_tables).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tables[key];
    }
  });
});

var _template = __webpack_require__(/*! ./template */ "./src/properties/layout/template.js");

Object.keys(_template).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _template[key];
    }
  });
});

var _viewport = __webpack_require__(/*! ./viewport */ "./src/properties/layout/viewport.js");

Object.keys(_viewport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _viewport[key];
    }
  });
});

var _zIndex = __webpack_require__(/*! ./z-index */ "./src/properties/layout/z-index.js");

Object.keys(_zIndex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _zIndex[key];
    }
  });
});

var _zoom = __webpack_require__(/*! ./zoom */ "./src/properties/layout/zoom.js");

Object.keys(_zoom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _zoom[key];
    }
  });
});

/***/ }),

/***/ "./src/properties/layout/inline.js":
/*!*****************************************!*\
  !*** ./src/properties/layout/inline.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalAlign = exports.InlineSizing = exports.InitialLettersWrap = exports.InitialLettersAlign = exports.InitialLetters = exports.DominantBaseline = exports.BaselineShift = exports.AlignmentBaseline = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var AlignmentBaseline = (0, _utils.property)('alignmentBaseline');
exports.AlignmentBaseline = AlignmentBaseline;
AlignmentBaseline.BASELINE = AlignmentBaseline(_constants.BASELINE);
AlignmentBaseline.TEXT_BOTTOM = AlignmentBaseline(_constants.TEXT_BOTTOM);
AlignmentBaseline.ALPHABETIC = AlignmentBaseline(_constants.ALPHABETIC);
AlignmentBaseline.IDEOGRAPHIC = AlignmentBaseline(_constants.IDEOGRAPHIC);
AlignmentBaseline.MIDDLE = AlignmentBaseline(_constants.MIDDLE);
AlignmentBaseline.CENTRAL = AlignmentBaseline(_constants.CENTRAL);
AlignmentBaseline.MATHEMATICAL = AlignmentBaseline(_constants.MATHEMATICAL);
AlignmentBaseline.TEXT_TOP = AlignmentBaseline(_constants.TEXT_TOP);
AlignmentBaseline.BOTTOM = AlignmentBaseline(_constants.BOTTOM);
AlignmentBaseline.CENTER = AlignmentBaseline(_constants.CENTER);
AlignmentBaseline.TOP = AlignmentBaseline(_constants.TOP);
var BaselineShift = (0, _utils.property)('baselineShift');
exports.BaselineShift = BaselineShift;
BaselineShift.SUB = BaselineShift(_constants.SUB);
BaselineShift.SUPER = BaselineShift(_constants.SUPER);
var DominantBaseline = (0, _utils.property)('dominantBaseline');
exports.DominantBaseline = DominantBaseline;
DominantBaseline.BASELINE = DominantBaseline(_constants.AUTO);
DominantBaseline.TEXT_BOTTOM = DominantBaseline(_constants.TEXT_BOTTOM);
DominantBaseline.ALPHABETIC = DominantBaseline(_constants.ALPHABETIC);
DominantBaseline.IDEOGRAPHIC = DominantBaseline(_constants.IDEOGRAPHIC);
DominantBaseline.MIDDLE = DominantBaseline(_constants.MIDDLE);
DominantBaseline.CENTRAL = DominantBaseline(_constants.CENTRAL);
DominantBaseline.MATHEMATICAL = DominantBaseline(_constants.MATHEMATICAL);
DominantBaseline.TEXT_TOP = DominantBaseline(_constants.HANGING);
DominantBaseline.BOTTOM = DominantBaseline(_constants.TEXT_TOP);
var InitialLetters = (0, _utils.property)('initialLetters');
exports.InitialLetters = InitialLetters;
InitialLetters.NORMAL = InitialLetters(_constants.NORMAL);
var InitialLettersAlign = (0, _utils.property)('initialLettersAlign');
exports.InitialLettersAlign = InitialLettersAlign;
InitialLettersAlign.BORDER_BOX = InitialLettersAlign(_constants.BORDER_BOX);
InitialLettersAlign.ALPHABETIC = InitialLettersAlign(_constants.ALPHABETIC);
InitialLettersAlign.IDEOGRAPHIC = InitialLettersAlign(_constants.IDEOGRAPHIC);
InitialLettersAlign.HEBREW = InitialLettersAlign(_constants.HEBREW);
InitialLettersAlign.HANGING = InitialLettersAlign(_constants.HANGING);
var InitialLettersWrap = (0, _utils.property)('initialLettersWrap');
exports.InitialLettersWrap = InitialLettersWrap;
InitialLettersWrap.NONE = InitialLettersWrap(_constants.NONE);
InitialLettersWrap.FIRST = InitialLettersWrap(_constants.FIRST);
InitialLettersWrap.ALL = InitialLettersWrap(_constants.ALL);
InitialLettersWrap.GRID = InitialLettersWrap(_constants.GRID);
var InlineSizing = (0, _utils.property)('inlineSizing');
exports.InlineSizing = InlineSizing;
InlineSizing.NORMAL = InlineSizing(_constants.NORMAL);
InlineSizing.STRETCH = InlineSizing(_constants.STRETCH);
var VerticalAlign = (0, _utils.property)('verticalAlign');
exports.VerticalAlign = VerticalAlign;
VerticalAlign.SUB = VerticalAlign(_constants.SUB);
VerticalAlign.SUPER = VerticalAlign(_constants.SUPER);
VerticalAlign.BASELINE = VerticalAlign(_constants.BASELINE);
VerticalAlign.TEXT_BOTTOM = VerticalAlign(_constants.TEXT_BOTTOM);
VerticalAlign.ALPHABETIC = VerticalAlign(_constants.ALPHABETIC);
VerticalAlign.IDEOGRAPHIC = VerticalAlign(_constants.IDEOGRAPHIC);
VerticalAlign.MIDDLE = VerticalAlign(_constants.MIDDLE);
VerticalAlign.CENTRAL = VerticalAlign(_constants.CENTRAL);
VerticalAlign.MATHEMATICAL = VerticalAlign(_constants.MATHEMATICAL);
VerticalAlign.TEXT_TOP = VerticalAlign(_constants.TEXT_TOP);
VerticalAlign.BOTTOM = VerticalAlign(_constants.BOTTOM);
VerticalAlign.CENTER = VerticalAlign(_constants.CENTER);
VerticalAlign.TOP = VerticalAlign(_constants.TOP);

/***/ }),

/***/ "./src/properties/layout/inset.js":
/*!****************************************!*\
  !*** ./src/properties/layout/inset.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InsetInlineEnd = exports.InsetInlineStart = exports.InsetInline = exports.InsetBlockEnd = exports.InsetBlockStart = exports.InsetBlock = exports.Inset = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Inset = (0, _utils.property)('inset');
exports.Inset = Inset;
Inset.AUTO = Inset(_constants.AUTO);
var InsetBlock = (0, _utils.property)('insetBlock');
exports.InsetBlock = InsetBlock;
InsetBlock.AUTO = InsetBlock(_constants.AUTO);
var InsetBlockStart = (0, _utils.property)('insetBlockStart');
exports.InsetBlockStart = InsetBlockStart;
InsetBlockStart.AUTO = InsetBlockStart(_constants.AUTO);
var InsetBlockEnd = (0, _utils.property)('insetBlockEnd');
exports.InsetBlockEnd = InsetBlockEnd;
InsetBlockEnd.AUTO = InsetBlockEnd(_constants.AUTO);
var InsetInline = (0, _utils.property)('insetInline');
exports.InsetInline = InsetInline;
InsetInline.AUTO = InsetInline(_constants.AUTO);
var InsetInlineStart = (0, _utils.property)('insetInlineStart');
exports.InsetInlineStart = InsetInlineStart;
InsetInlineStart.AUTO = InsetInlineStart(_constants.AUTO);
var InsetInlineEnd = (0, _utils.property)('insetInlineEnd');
exports.InsetInlineEnd = InsetInlineEnd;
InsetInlineEnd.AUTO = InsetInlineEnd(_constants.AUTO);

/***/ }),

/***/ "./src/properties/layout/margin.js":
/*!*****************************************!*\
  !*** ./src/properties/layout/margin.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarginInlineEnd = exports.MarginInlineStart = exports.MarginBlockEnd = exports.MarginBlockStart = exports.MarginInline = exports.MarginBlock = exports.MarginRight = exports.MarginLeft = exports.MarginBottom = exports.MarginTop = exports.Margin = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Margin = (0, _utils.property)('margin');
exports.Margin = Margin;
Margin.AUTO = Margin(_constants.AUTO);
var MarginTop = (0, _utils.property)('marginTop');
exports.MarginTop = MarginTop;
MarginTop.AUTO = MarginTop(_constants.AUTO);
var MarginBottom = (0, _utils.property)('marginBottom');
exports.MarginBottom = MarginBottom;
MarginBottom.AUTO = MarginBottom(_constants.AUTO);
var MarginLeft = (0, _utils.property)('marginLeft');
exports.MarginLeft = MarginLeft;
MarginLeft.AUTO = MarginLeft(_constants.AUTO);
var MarginRight = (0, _utils.property)('marginRight');
exports.MarginRight = MarginRight;
MarginRight.AUTO = MarginRight(_constants.AUTO);
var MarginBlock = (0, _utils.property)('marginBlock');
exports.MarginBlock = MarginBlock;
MarginBlock.AUTO = MarginBlock(_constants.AUTO);
var MarginInline = (0, _utils.property)('marginInline');
exports.MarginInline = MarginInline;
MarginInline.AUTO = MarginInline(_constants.AUTO);
var MarginBlockStart = (0, _utils.property)('marginBlockStart');
exports.MarginBlockStart = MarginBlockStart;
MarginBlockStart.AUTO = MarginBlockStart(_constants.AUTO);
var MarginBlockEnd = (0, _utils.property)('marginBlockEnd');
exports.MarginBlockEnd = MarginBlockEnd;
MarginBlockEnd.AUTO = MarginBlockEnd(_constants.AUTO);
var MarginInlineStart = (0, _utils.property)('marginInlineStart');
exports.MarginInlineStart = MarginInlineStart;
MarginInlineStart.AUTO = MarginInlineStart(_constants.AUTO);
var MarginInlineEnd = (0, _utils.property)('marginInlineEnd');
exports.MarginInlineEnd = MarginInlineEnd;
MarginInlineEnd.AUTO = MarginInlineEnd(_constants.AUTO);

/***/ }),

/***/ "./src/properties/layout/multicol.js":
/*!*******************************************!*\
  !*** ./src/properties/layout/multicol.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnGap = exports.RowGap = exports.Gap = exports.ColumnWidth = exports.ColumnSpan = exports.ColumnRuleWidth = exports.ColumnRuleStyle = exports.ColumnRuleColor = exports.ColumnRule = exports.ColumnFill = exports.ColumnCount = exports.Columns = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Columns = (0, _utils.property)('columns');
exports.Columns = Columns;
var ColumnCount = (0, _utils.property)('columnCount');
exports.ColumnCount = ColumnCount;
ColumnCount.AUTO = ColumnCount(_constants.AUTO);
var ColumnFill = (0, _utils.property)('columnFill');
exports.ColumnFill = ColumnFill;
ColumnFill.AUTO = ColumnFill(_constants.AUTO);
ColumnFill.BALANCE = ColumnFill(_constants.BALANCE);
ColumnFill.BALANCE_ALL = ColumnFill(_constants.BALANCE_ALL);
var ColumnRule = (0, _utils.property)('columnRule');
exports.ColumnRule = ColumnRule;

ColumnRule.hidden = function () {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return ColumnRule.apply(void 0, [_constants.HIDDEN].concat(values));
};

ColumnRule.dotted = function () {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  return ColumnRule.apply(void 0, [_constants.DOTTED].concat(values));
};

ColumnRule.dashed = function () {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }

  return ColumnRule.apply(void 0, [_constants.DASHED].concat(values));
};

ColumnRule.solid = function () {
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }

  return ColumnRule.apply(void 0, [_constants.SOLID].concat(values));
};

ColumnRule.double = function () {
  for (var _len5 = arguments.length, values = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    values[_key5] = arguments[_key5];
  }

  return ColumnRule.apply(void 0, [_constants.DOUBLE].concat(values));
};

ColumnRule.groove = function () {
  for (var _len6 = arguments.length, values = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    values[_key6] = arguments[_key6];
  }

  return ColumnRule.apply(void 0, [_constants.GROOVE].concat(values));
};

ColumnRule.ridge = function () {
  for (var _len7 = arguments.length, values = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    values[_key7] = arguments[_key7];
  }

  return ColumnRule.apply(void 0, [_constants.RIDGE].concat(values));
};

ColumnRule.inset = function () {
  for (var _len8 = arguments.length, values = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    values[_key8] = arguments[_key8];
  }

  return ColumnRule.apply(void 0, [_constants.INSET].concat(values));
};

ColumnRule.outset = function () {
  for (var _len9 = arguments.length, values = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    values[_key9] = arguments[_key9];
  }

  return ColumnRule.apply(void 0, [_constants.OUTSET].concat(values));
};

ColumnRule.thin = function () {
  for (var _len10 = arguments.length, values = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    values[_key10] = arguments[_key10];
  }

  return ColumnRule.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

ColumnRule.medium = function () {
  for (var _len11 = arguments.length, values = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    values[_key11] = arguments[_key11];
  }

  return ColumnRule.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

ColumnRule.thick = function () {
  for (var _len12 = arguments.length, values = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    values[_key12] = arguments[_key12];
  }

  return ColumnRule.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var ColumnRuleColor = (0, _utils.property)('columnRule');
exports.ColumnRuleColor = ColumnRuleColor;
ColumnRuleColor.TRANSPARENT = ColumnRuleColor(_constants.TRANSPARENT);
var ColumnRuleStyle = (0, _utils.property)('columnRuleStyle');
exports.ColumnRuleStyle = ColumnRuleStyle;
ColumnRuleStyle.NONE = ColumnRuleStyle(_constants.NONE);
ColumnRuleStyle.HIDDEN = ColumnRuleStyle(_constants.HIDDEN);
ColumnRuleStyle.DOTTED = ColumnRuleStyle(_constants.DOTTED);
ColumnRuleStyle.DASHED = ColumnRuleStyle(_constants.DASHED);
ColumnRuleStyle.SOLID = ColumnRuleStyle(_constants.SOLID);
ColumnRuleStyle.DOUBLE = ColumnRuleStyle(_constants.DOUBLE);
ColumnRuleStyle.GROOVE = ColumnRuleStyle(_constants.GROOVE);
ColumnRuleStyle.RIDGE = ColumnRuleStyle(_constants.RIDGE);
ColumnRuleStyle.INSET = ColumnRuleStyle(_constants.INSET);
ColumnRuleStyle.OUTSET = ColumnRuleStyle(_constants.OUTSET);
var ColumnRuleWidth = (0, _utils.property)('columnRuleWidth');
exports.ColumnRuleWidth = ColumnRuleWidth;
ColumnRuleWidth.THIN = ColumnRuleWidth(_constants.THIN);
ColumnRuleWidth.MEDIUM = ColumnRuleWidth(_constants.MEDIUM);
ColumnRuleWidth.THICK = ColumnRuleWidth(_constants.THICK);
var ColumnSpan = (0, _utils.property)('columnRuleWidth');
exports.ColumnSpan = ColumnSpan;
ColumnSpan.NONE = ColumnSpan(_constants.NONE);
ColumnSpan.ALL = ColumnSpan(_constants.ALL);
var ColumnWidth = (0, _utils.property)('columnRuleWidth');
exports.ColumnWidth = ColumnWidth;
ColumnWidth.AUTO = ColumnWidth(_constants.AUTO);

/* Gap */
var Gap = (0, _utils.property)('gap');
exports.Gap = Gap;
Gap.NORMAL = Gap(_constants.NORMAL);
var RowGap = (0, _utils.property)('rowGap');
exports.RowGap = RowGap;
RowGap.NORMAL = RowGap(_constants.NORMAL);
var ColumnGap = (0, _utils.property)('columnGap');
exports.ColumnGap = ColumnGap;
ColumnGap.NORMAL = ColumnGap(_constants.NORMAL);

/***/ }),

/***/ "./src/properties/layout/overflow.js":
/*!*******************************************!*\
  !*** ./src/properties/layout/overflow.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollbarGutter = exports.MaxLines = exports.LineClamp = exports.Continue = exports.BlockOverflow = exports.OverflowInline = exports.OverflowBlock = exports.OverflowY = exports.OverflowX = exports.Overflow = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Overflow = (0, _utils.property)('overflow');
exports.Overflow = Overflow;
Overflow.AUTO = Overflow(_constants.AUTO);
Overflow.VISIBLE = Overflow(_constants.VISIBLE);
Overflow.HIDDEN = Overflow(_constants.HIDDEN);
Overflow.CLIP = Overflow(_constants.CLIP);
Overflow.SCROLL = Overflow(_constants.SCROLL);
var OverflowX = (0, _utils.property)('overflowX');
exports.OverflowX = OverflowX;
OverflowX.AUTO = OverflowX(_constants.AUTO);
OverflowX.VISIBLE = OverflowX(_constants.VISIBLE);
OverflowX.HIDDEN = OverflowX(_constants.HIDDEN);
OverflowX.CLIP = OverflowX(_constants.CLIP);
OverflowX.SCROLL = OverflowX(_constants.SCROLL);
var OverflowY = (0, _utils.property)('overflowY');
exports.OverflowY = OverflowY;
OverflowY.AUTO = OverflowY(_constants.AUTO);
OverflowY.VISIBLE = OverflowY(_constants.VISIBLE);
OverflowY.HIDDEN = OverflowY(_constants.HIDDEN);
OverflowY.CLIP = OverflowY(_constants.CLIP);
OverflowY.SCROLL = OverflowY(_constants.SCROLL);
var OverflowBlock = (0, _utils.property)('overflowBlock');
exports.OverflowBlock = OverflowBlock;
OverflowBlock.AUTO = OverflowBlock(_constants.AUTO);
OverflowBlock.VISIBLE = OverflowBlock(_constants.VISIBLE);
OverflowBlock.HIDDEN = OverflowBlock(_constants.HIDDEN);
OverflowBlock.CLIP = OverflowBlock(_constants.CLIP);
OverflowBlock.SCROLL = OverflowBlock(_constants.SCROLL);
var OverflowInline = (0, _utils.property)('overflowInline');
exports.OverflowInline = OverflowInline;
OverflowInline.AUTO = OverflowInline(_constants.AUTO);
OverflowInline.VISIBLE = OverflowInline(_constants.VISIBLE);
OverflowInline.HIDDEN = OverflowInline(_constants.HIDDEN);
OverflowInline.CLIP = OverflowInline(_constants.CLIP);
OverflowInline.SCROLL = OverflowInline(_constants.SCROLL);
var BlockOverflow = (0, _utils.property)('blockOverflow');
exports.BlockOverflow = BlockOverflow;
BlockOverflow.CLIP = BlockOverflow(_constants.CLIP);
BlockOverflow.ELLIPSIS = BlockOverflow(_constants.ELLIPSIS);
var Continue = (0, _utils.property)('continue');
exports.Continue = Continue;
Continue.AUTO = Continue(_constants.AUTO);
Continue.OVERFLOW = Continue(_constants.OVERFLOW);
Continue.PAGINATE = Continue(_constants.PAGINATE);
Continue.FRAGMENTS = Continue(_constants.FRAGMENTS);
Continue.DISCARD = Continue(_constants.DISCARD);
var LineClamp = (0, _utils.property)('lineClamp');
exports.LineClamp = LineClamp;
LineClamp.NONE = LineClamp(_constants.NONE);
var MaxLines = (0, _utils.property)('maxLines');
exports.MaxLines = MaxLines;
MaxLines.NONE = MaxLines(_constants.NONE);
var ScrollbarGutter = (0, _utils.property)('scrollbarGutter');
exports.ScrollbarGutter = ScrollbarGutter;
ScrollbarGutter.AUTO = ScrollbarGutter(_constants.AUTO);
ScrollbarGutter.STABLE = ScrollbarGutter(_constants.STABLE);
ScrollbarGutter.ALWAYS = ScrollbarGutter(_constants.ALWAYS);

/***/ }),

/***/ "./src/properties/layout/padding.js":
/*!******************************************!*\
  !*** ./src/properties/layout/padding.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaddingInlineEnd = exports.PaddingInlineStart = exports.PaddingInline = exports.PaddingBlockEnd = exports.PaddingBlockStart = exports.PaddingBlock = exports.PaddingRight = exports.PaddingLeft = exports.PaddingBottom = exports.PaddingTop = exports.Padding = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var Padding = (0, _utils.property)('padding');
exports.Padding = Padding;
var PaddingTop = (0, _utils.property)('paddingTop');
exports.PaddingTop = PaddingTop;
var PaddingBottom = (0, _utils.property)('paddingBottom');
exports.PaddingBottom = PaddingBottom;
var PaddingLeft = (0, _utils.property)('paddingLeft');
exports.PaddingLeft = PaddingLeft;
var PaddingRight = (0, _utils.property)('paddingRight');
exports.PaddingRight = PaddingRight;
var PaddingBlock = (0, _utils.property)('paddingBlock');
exports.PaddingBlock = PaddingBlock;
var PaddingBlockStart = (0, _utils.property)('paddingBlockStart');
exports.PaddingBlockStart = PaddingBlockStart;
var PaddingBlockEnd = (0, _utils.property)('paddingBlockEnd');
exports.PaddingBlockEnd = PaddingBlockEnd;
var PaddingInline = (0, _utils.property)('paddingInline');
exports.PaddingInline = PaddingInline;
var PaddingInlineStart = (0, _utils.property)('paddingInlineStart');
exports.PaddingInlineStart = PaddingInlineStart;
var PaddingInlineEnd = (0, _utils.property)('paddingInlineEnd');
exports.PaddingInlineEnd = PaddingInlineEnd;

/***/ }),

/***/ "./src/properties/layout/position.js":
/*!*******************************************!*\
  !*** ./src/properties/layout/position.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OffsetEnd = exports.OffsetStart = exports.OffsetAfter = exports.OffsetBefore = exports.Right = exports.Left = exports.Bottom = exports.Top = exports.Position = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Position = (0, _utils.property)('position');
exports.Position = Position;
Position.STATIC = Position(_constants.STATIC);
Position.RELATIVE = Position(_constants.RELATIVE);
Position.ABSOLUTE = Position(_constants.ABSOLUTE);
Position.FIXED = Position(_constants.FIXED);
Position.STICKY = Position(_constants.STICKY);
var Top = (0, _utils.property)('top');
exports.Top = Top;
Top.AUTO = Top(_constants.AUTO);
var Bottom = (0, _utils.property)('bottom');
exports.Bottom = Bottom;
Bottom.AUTO = Bottom(_constants.AUTO);
var Left = (0, _utils.property)('left');
exports.Left = Left;
Left.AUTO = Left(_constants.AUTO);
var Right = (0, _utils.property)('right');
exports.Right = Right;
Right.AUTO = Right(_constants.AUTO);
var OffsetBefore = (0, _utils.property)('offsetBefore');
exports.OffsetBefore = OffsetBefore;
OffsetBefore.AUTO = OffsetBefore(_constants.AUTO);
var OffsetAfter = (0, _utils.property)('offsetAfter');
exports.OffsetAfter = OffsetAfter;
OffsetAfter.AUTO = OffsetAfter(_constants.AUTO);
var OffsetStart = (0, _utils.property)('offsetStart');
exports.OffsetStart = OffsetStart;
OffsetStart.AUTO = OffsetStart(_constants.AUTO);
var OffsetEnd = (0, _utils.property)('offsetEnd');
exports.OffsetEnd = OffsetEnd;
OffsetEnd.AUTO = OffsetEnd(_constants.AUTO);

/***/ }),

/***/ "./src/properties/layout/ruby.js":
/*!***************************************!*\
  !*** ./src/properties/layout/ruby.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RubyAlign = exports.RubyMerge = exports.RubyPosition = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var RubyPosition = (0, _utils.property)('rubyPosition');
exports.RubyPosition = RubyPosition;
RubyPosition.OVER = RubyPosition(_constants.OVER);
RubyPosition.UNDER = RubyPosition(_constants.UNDER);
RubyPosition.INTER_CHARACTER = RubyPosition(_constants.INTER_CHARACTER);
RubyPosition.RIGHT = RubyPosition(_constants.RIGHT);
RubyPosition.LEFT = RubyPosition(_constants.LEFT);
var RubyMerge = (0, _utils.property)('rubyMerge');
exports.RubyMerge = RubyMerge;
RubyMerge.AUTO = RubyMerge(_constants.AUTO);
RubyMerge.SEPARATE = RubyMerge(_constants.SEPARATE);
RubyMerge.COLLAPSE = RubyMerge(_constants.COLLAPSE);
var RubyAlign = (0, _utils.property)('rubyAlign');
exports.RubyAlign = RubyAlign;
RubyAlign.AUTO = RubyAlign(_constants.START);
RubyAlign.CENTER = RubyAlign(_constants.CENTER);
RubyAlign.SPACE_BETWEEN = RubyAlign(_constants.SPACE_BETWEEN);
RubyAlign.SPACE_AROUND = RubyAlign(_constants.SPACE_AROUND);

/***/ }),

/***/ "./src/properties/layout/scroll.js":
/*!*****************************************!*\
  !*** ./src/properties/layout/scroll.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollSnapType = exports.ScrollSnapStop = exports.ScrollSnapAlign = exports.ScrollPaddingLeft = exports.ScrollPaddingBottom = exports.ScrollPaddingRight = exports.ScrollPaddingTop = exports.ScrollPaddingInlineEnd = exports.ScrollPaddingInlineStart = exports.ScrollPaddingInline = exports.ScrollPaddingBlockEnd = exports.ScrollPaddingBlockStart = exports.ScrollPaddingBlock = exports.ScrollPadding = exports.ScrollMarginLeft = exports.ScrollMarginBottom = exports.ScrollMarginRight = exports.ScrollMarginTop = exports.ScrollMarginInlineEnd = exports.ScrollMarginInlineStart = exports.ScrollMarginInline = exports.ScrollMarginBlockEnd = exports.ScrollMarginBlockStart = exports.ScrollMarginBlock = exports.ScrollMargin = exports.ScrollBehavior = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var ScrollBehavior = (0, _utils.property)('scrollBehavior');
exports.ScrollBehavior = ScrollBehavior;
ScrollBehavior.AUTO = ScrollBehavior(_constants.AUTO);
ScrollBehavior.AUTO = ScrollBehavior(_constants.SMOOTH);
var ScrollMargin = (0, _utils.property)('scrollMargin');
exports.ScrollMargin = ScrollMargin;
var ScrollMarginBlock = (0, _utils.property)('scrollMarginBlock');
exports.ScrollMarginBlock = ScrollMarginBlock;
var ScrollMarginBlockStart = (0, _utils.property)('scrollMarginBlockStart');
exports.ScrollMarginBlockStart = ScrollMarginBlockStart;
var ScrollMarginBlockEnd = (0, _utils.property)('scrollMarginBlockEnd');
exports.ScrollMarginBlockEnd = ScrollMarginBlockEnd;
var ScrollMarginInline = (0, _utils.property)('scrollMarginInline');
exports.ScrollMarginInline = ScrollMarginInline;
var ScrollMarginInlineStart = (0, _utils.property)('scrollMarginInlineStart');
exports.ScrollMarginInlineStart = ScrollMarginInlineStart;
var ScrollMarginInlineEnd = (0, _utils.property)('scrollMarginInlineEnd');
exports.ScrollMarginInlineEnd = ScrollMarginInlineEnd;
var ScrollMarginTop = (0, _utils.property)('scrollMarginTop');
exports.ScrollMarginTop = ScrollMarginTop;
var ScrollMarginRight = (0, _utils.property)('scrollMarginRight');
exports.ScrollMarginRight = ScrollMarginRight;
var ScrollMarginBottom = (0, _utils.property)('scrollMarginBottom');
exports.ScrollMarginBottom = ScrollMarginBottom;
var ScrollMarginLeft = (0, _utils.property)('scrollMarginLeft');
exports.ScrollMarginLeft = ScrollMarginLeft;
var ScrollPadding = (0, _utils.property)('scrollPadding');
exports.ScrollPadding = ScrollPadding;
ScrollPadding.AUTO = ScrollPadding(_constants.AUTO);
var ScrollPaddingBlock = (0, _utils.property)('scrollPaddingBlock');
exports.ScrollPaddingBlock = ScrollPaddingBlock;
var ScrollPaddingBlockStart = (0, _utils.property)('scrollPaddingBlockStart');
exports.ScrollPaddingBlockStart = ScrollPaddingBlockStart;
var ScrollPaddingBlockEnd = (0, _utils.property)('scrollPaddingBlockEnd');
exports.ScrollPaddingBlockEnd = ScrollPaddingBlockEnd;
var ScrollPaddingInline = (0, _utils.property)('scrollPaddingInline');
exports.ScrollPaddingInline = ScrollPaddingInline;
var ScrollPaddingInlineStart = (0, _utils.property)('scrollPaddingInlineStart');
exports.ScrollPaddingInlineStart = ScrollPaddingInlineStart;
var ScrollPaddingInlineEnd = (0, _utils.property)('scrollPaddingInlineEnd');
exports.ScrollPaddingInlineEnd = ScrollPaddingInlineEnd;
var ScrollPaddingTop = (0, _utils.property)('scrollPadding');
exports.ScrollPaddingTop = ScrollPaddingTop;
var ScrollPaddingRight = (0, _utils.property)('scrollPadding');
exports.ScrollPaddingRight = ScrollPaddingRight;
var ScrollPaddingBottom = (0, _utils.property)('scrollPadding');
exports.ScrollPaddingBottom = ScrollPaddingBottom;
var ScrollPaddingLeft = (0, _utils.property)('scrollPadding');
exports.ScrollPaddingLeft = ScrollPaddingLeft;
var ScrollSnapAlign = (0, _utils.property)('scrollSnapAlign');
exports.ScrollSnapAlign = ScrollSnapAlign;
ScrollSnapAlign.NONE = ScrollSnapAlign(_constants.NONE);
ScrollSnapAlign.START = ScrollSnapAlign(_constants.START);
ScrollSnapAlign.END = ScrollSnapAlign(_constants.END);
ScrollSnapAlign.CENTER = ScrollSnapAlign(_constants.CENTER);
var ScrollSnapStop = (0, _utils.property)('scrollSnapStop');
exports.ScrollSnapStop = ScrollSnapStop;
ScrollSnapStop.NORMAL = ScrollSnapStop(_constants.NORMAL);
ScrollSnapStop.ALWAYS = ScrollSnapStop(_constants.ALWAYS);
var ScrollSnapType = (0, _utils.property)('scrollSnapType');
exports.ScrollSnapType = ScrollSnapType;
ScrollSnapType.NONE = ScrollSnapType(_constants.NONE);
ScrollSnapType.X = ScrollSnapType(_constants.X);
ScrollSnapType.Y = ScrollSnapType(_constants.Y);
ScrollSnapType.INLINE = ScrollSnapType(_constants.INLINE);
ScrollSnapType.INLINE = ScrollSnapType(_constants.BLOCK);
ScrollSnapType.INLINE = ScrollSnapType(_constants.BOTH);
ScrollSnapType.MANDATORY = ScrollSnapType(_constants.MANDATORY);
ScrollSnapType.PROXIMITY = ScrollSnapType(_constants.PROXIMITY);

/***/ }),

/***/ "./src/properties/layout/size.js":
/*!***************************************!*\
  !*** ./src/properties/layout/size.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaxHeight = exports.MinHeight = exports.Height = exports.MaxWidth = exports.MinWidth = exports.Width = exports.Resize = exports.MaxInlineSize = exports.MaxBlockSize = exports.MinInlineSize = exports.MinBlockSize = exports.InlineSize = exports.BlockSize = exports.Size = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var _index = __webpack_require__(/*! ../../methods/index */ "./src/methods/index.js");

var Size = (0, _utils.property)('size');
exports.Size = Size;
Size.AUTO = Size(_constants.AUTO);
Size.PORTRAIT = Size(_constants.PORTRAIT);
Size.LANDSCAPE = Size(_constants.LANDSCAPE);
var BlockSize = (0, _utils.property)('blockSize');
exports.BlockSize = BlockSize;
BlockSize.AUTO = BlockSize(_constants.AUTO);
var InlineSize = (0, _utils.property)('inlineSize');
exports.InlineSize = InlineSize;
InlineSize.AUTO = InlineSize(_constants.AUTO);
var MinBlockSize = (0, _utils.property)('minBlockSize');
exports.MinBlockSize = MinBlockSize;
var MinInlineSize = (0, _utils.property)('minInlineSize');
exports.MinInlineSize = MinInlineSize;
var MaxBlockSize = (0, _utils.property)('maxBlockSize');
exports.MaxBlockSize = MaxBlockSize;
MaxBlockSize.NONE = MaxBlockSize(_constants.NONE);
var MaxInlineSize = (0, _utils.property)('maxInlineSize');
exports.MaxInlineSize = MaxInlineSize;
MaxInlineSize.NONE = MaxInlineSize(_constants.NONE);
var Resize = (0, _utils.property)('resize');
exports.Resize = Resize;
Resize.NONE = Resize(_constants.NONE);
Resize.BOTH = Resize(_constants.BOTH);
Resize.HORIZONTAL = Resize(_constants.HORIZONTAL);
Resize.VERTICAL = Resize(_constants.VERTICAL);

/* Width */
var Width = (0, _utils.property)('width');
exports.Width = Width;
Width.AUTO = Width(_constants.AUTO);
Width.MIN_CONTENT = Width(_constants.MIN_CONTENT);
Width.MAX_CONTENT = Width(_constants.MAX_CONTENT);

Width.fitContent = function () {
  return Width(_index.fitContent.apply(void 0, arguments));
};

var MinWidth = (0, _utils.property)('minWidth');
exports.MinWidth = MinWidth;
MinWidth.AUTO = MinWidth(_constants.AUTO);
MinWidth.MIN_CONTENT = MinWidth(_constants.MIN_CONTENT);
MinWidth.MAX_CONTENT = MinWidth(_constants.MAX_CONTENT);

MinWidth.fitContent = function () {
  return MinWidth(_index.fitContent.apply(void 0, arguments));
};

var MaxWidth = (0, _utils.property)('maxWidth');
exports.MaxWidth = MaxWidth;
MaxWidth.NONE = MaxWidth(_constants.NONE);
MaxWidth.MIN_CONTENT = MaxWidth(_constants.MIN_CONTENT);
MaxWidth.MAX_CONTENT = MaxWidth(_constants.MAX_CONTENT);

MaxWidth.fitContent = function () {
  return MaxWidth(_index.fitContent.apply(void 0, arguments));
};

/* Height */
var Height = (0, _utils.property)('height');
exports.Height = Height;
Height.AUTO = Height(_constants.AUTO);
Height.MIN_CONTENT = Height(_constants.MIN_CONTENT);
Height.MAX_CONTENT = Height(_constants.MAX_CONTENT);

Height.fitContent = function () {
  return Height(_index.fitContent.apply(void 0, arguments));
};

var MinHeight = (0, _utils.property)('minHeight');
exports.MinHeight = MinHeight;
MinHeight.AUTO = MinHeight(_constants.AUTO);
MinHeight.MIN_CONTENT = MinHeight(_constants.MIN_CONTENT);
MinHeight.MAX_CONTENT = MinHeight(_constants.MAX_CONTENT);

MinHeight.fitContent = function () {
  return MinHeight(_index.fitContent.apply(void 0, arguments));
};

var MaxHeight = (0, _utils.property)('maxHeight');
exports.MaxHeight = MaxHeight;
MaxHeight.NONE = MaxHeight(_constants.NONE);
MaxHeight.MIN_CONTENT = MaxHeight(_constants.MIN_CONTENT);
MaxHeight.MAX_CONTENT = MaxHeight(_constants.MAX_CONTENT);

MaxHeight.fitContent = function () {
  return MaxHeight(_index.fitContent.apply(void 0, arguments));
};

/***/ }),

/***/ "./src/properties/layout/tables.js":
/*!*****************************************!*\
  !*** ./src/properties/layout/tables.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyCells = exports.CaptionSide = exports.BorderSpacing = exports.BorderCollapse = exports.TableLayout = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var TableLayout = (0, _utils.property)('captionSide');
exports.TableLayout = TableLayout;
TableLayout.AUTO = TableLayout(_constants.AUTO);
TableLayout.FIXED = TableLayout(_constants.FIXED);
var BorderCollapse = (0, _utils.property)('borderCollapse');
exports.BorderCollapse = BorderCollapse;
BorderCollapse.COLLAPSE = BorderCollapse(_constants.COLLAPSE);
BorderCollapse.SEPARATE = BorderCollapse(_constants.SEPARATE);
var BorderSpacing = (0, _utils.property)('borderSpacing');
exports.BorderSpacing = BorderSpacing;
var CaptionSide = (0, _utils.property)('captionSide');
exports.CaptionSide = CaptionSide;
CaptionSide.TOP = CaptionSide(_constants.TOP);
CaptionSide.BOTTOM = CaptionSide(_constants.BOTTOM);
var EmptyCells = (0, _utils.property)('emptyCells');
exports.EmptyCells = EmptyCells;
EmptyCells.SHOW = EmptyCells(_constants.SHOW);
EmptyCells.HIDE = EmptyCells(_constants.HIDE);

/***/ }),

/***/ "./src/properties/layout/template.js":
/*!*******************************************!*\
  !*** ./src/properties/layout/template.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flow = exports.Chains = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Chains = (0, _utils.property)('chains');
exports.Chains = Chains;
Chains.NONE = Chains(_constants.NONE);
var Flow = (0, _utils.property)('flow');
exports.Flow = Flow;
Flow.AUTO = Flow(_constants.AUTO);
Flow.SAME = Flow(_constants.SAME);

Flow.quoted = function () {
  return Flow('\'' + _utils.concatWithSpaces.apply(void 0, arguments) + '\'');
};

/***/ }),

/***/ "./src/properties/layout/viewport.js":
/*!*******************************************!*\
  !*** ./src/properties/layout/viewport.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Orientation = exports.ViewportFit = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var ViewportFit = (0, _utils.property)('viewportFit');
exports.ViewportFit = ViewportFit;
ViewportFit.AUTO = ViewportFit(_constants.AUTO);
ViewportFit.CONTAIN = ViewportFit(_constants.CONTAIN);
ViewportFit.COVER = ViewportFit(_constants.COVER);
var Orientation = (0, _utils.property)('orientation');
exports.Orientation = Orientation;
Orientation.AUTO = Orientation(_constants.AUTO);
Orientation.PORTRAIT = Orientation(_constants.PORTRAIT);
Orientation.LANDSCAPE = Orientation(_constants.LANDSCAPE);

/***/ }),

/***/ "./src/properties/layout/z-index.js":
/*!******************************************!*\
  !*** ./src/properties/layout/z-index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZIndex = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var ZIndex = (0, _utils.property)('zIndex');
exports.ZIndex = ZIndex;
ZIndex.AUTO = ZIndex(_constants.AUTO);

/***/ }),

/***/ "./src/properties/layout/zoom.js":
/*!***************************************!*\
  !*** ./src/properties/layout/zoom.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserZoom = exports.MaxZoom = exports.MinZoom = exports.Zoom = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Zoom = (0, _utils.property)('zoom');
exports.Zoom = Zoom;
Zoom.AUTO = Zoom(_constants.AUTO);
var MinZoom = (0, _utils.property)('minZoom');
exports.MinZoom = MinZoom;
MinZoom.AUTO = MinZoom(_constants.AUTO);
var MaxZoom = (0, _utils.property)('maxZoom');
exports.MaxZoom = MaxZoom;
MaxZoom.AUTO = MaxZoom(_constants.AUTO);
var UserZoom = (0, _utils.property)('userZoom');
exports.UserZoom = UserZoom;
UserZoom.ZOOM = UserZoom(_constants.ZOOM);
UserZoom.FIXED = UserZoom(_constants.FIXED);

/***/ }),

/***/ "./src/properties/misc/all.js":
/*!************************************!*\
  !*** ./src/properties/misc/all.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var All = (0, _utils.property)('all');
exports.All = All;
All.REVERT = All(_constants.REVERT);

/***/ }),

/***/ "./src/properties/misc/index.js":
/*!**************************************!*\
  !*** ./src/properties/misc/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _all = __webpack_require__(/*! ./all */ "./src/properties/misc/all.js");

Object.keys(_all).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _all[key];
    }
  });
});

var _performance = __webpack_require__(/*! ./performance */ "./src/properties/misc/performance.js");

Object.keys(_performance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _performance[key];
    }
  });
});

var _voice = __webpack_require__(/*! ./voice */ "./src/properties/misc/voice.js");

Object.keys(_voice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _voice[key];
    }
  });
});

/***/ }),

/***/ "./src/properties/misc/performance.js":
/*!********************************************!*\
  !*** ./src/properties/misc/performance.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WillChange = exports.Contain = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Contain = (0, _utils.property)('contain');
exports.Contain = Contain;
Contain.NONE = Contain(_constants.NONE);
Contain.STRICT = Contain(_constants.STRICT);
Contain.CONTENT = Contain(_constants.CONTENT);
Contain.SIZE = Contain(_constants.SIZE);
Contain.LAYOUT = Contain(_constants.LAYOUT);
Contain.STYLE = Contain(_constants.STYLE);
Contain.PAINT = Contain(_constants.PAINT);
var WillChange = (0, _utils.property)('willChange');
exports.WillChange = WillChange;
WillChange.AUTO = WillChange(_constants.AUTO);
WillChange.SCROLL_POSITION = WillChange(_constants.SCROLL_POSITION);
WillChange.CONTENTS = WillChange(_constants.CONTENTS);

/***/ }),

/***/ "./src/properties/misc/voice.js":
/*!**************************************!*\
  !*** ./src/properties/misc/voice.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Volume = exports.Richness = exports.Stress = exports.PitchRange = exports.Pitch = exports.VoiceFamily = exports.SpeechRate = exports.SpeakHeader = exports.SpeakNumeral = exports.SpeakPunctuation = exports.Speak = exports.Elevation = exports.Azimuth = exports.PauseAfter = exports.PauseBefore = exports.Pause = exports.PlayDuring = exports.CueAfter = exports.CueBefore = exports.Cue = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

/* Cue */
var Cue = (0, _utils.property)('cue');
exports.Cue = Cue;
Cue.NONE = Cue(_constants.NONE);
var CueBefore = (0, _utils.property)('cueBefore');
exports.CueBefore = CueBefore;
CueBefore.NONE = CueBefore(_constants.NONE);
var CueAfter = (0, _utils.property)('cueAfter');
exports.CueAfter = CueAfter;
CueAfter.NONE = CueAfter(_constants.NONE);
/* Mixing */

var PlayDuring = (0, _utils.property)('playDuring');
exports.PlayDuring = PlayDuring;
PlayDuring.AUTO = PlayDuring(_constants.AUTO);
PlayDuring.NONE = PlayDuring(_constants.NONE);

PlayDuring.mix = function () {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return PlayDuring.apply(void 0, values.concat([_constants.MIX]));
};

PlayDuring.repeat = function () {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  return PlayDuring.apply(void 0, values.concat([_constants.REPEAT]));
};
/* Pause */


var Pause = (0, _utils.property)('pause');
exports.Pause = Pause;
var PauseBefore = (0, _utils.property)('pauseBefore');
exports.PauseBefore = PauseBefore;
var PauseAfter = (0, _utils.property)('pauseAfter');
/* Spatial */

exports.PauseAfter = PauseAfter;
var Azimuth = (0, _utils.property)('azimuth');
exports.Azimuth = Azimuth;
Azimuth.LEFT_SIDE = Azimuth(_constants.LEFT_SIDE);
Azimuth.FAR_LEFT = Azimuth(_constants.FAR_LEFT);
Azimuth.LEFT = Azimuth(_constants.LEFT);
Azimuth.CENTER_LEFT = Azimuth(_constants.CENTER_LEFT);
Azimuth.CENTER = Azimuth(_constants.CENTER);
Azimuth.CENTER_RIGHT = Azimuth(_constants.CENTER_RIGHT);
Azimuth.RIGHT = Azimuth(_constants.RIGHT);
Azimuth.FAR_RIGHT = Azimuth(_constants.FAR_RIGHT);
Azimuth.RIGHT_SIDE = Azimuth(_constants.RIGHT_SIDE);
Azimuth.BEHIND = Azimuth(_constants.BEHIND);
Azimuth.LEFTWARDS = Azimuth(_constants.LEFTWARDS);
Azimuth.RIGHTWARDS = Azimuth(_constants.RIGHTWARDS);
var Elevation = (0, _utils.property)('elevation');
exports.Elevation = Elevation;
Elevation.BELOW = Elevation(_constants.BELOW);
Elevation.LEVEL = Elevation(_constants.LEVEL);
Elevation.ABOVE = Elevation(_constants.ABOVE);
Elevation.HIGHER = Elevation(_constants.HIGHER);
Elevation.LOWER = Elevation(_constants.LOWER);
/* Speak */

var Speak = (0, _utils.property)('speak');
exports.Speak = Speak;
Speak.SPELL_OUT = Speak(_constants.SPELL_OUT);
var SpeakPunctuation = (0, _utils.property)('speakPunctuation');
exports.SpeakPunctuation = SpeakPunctuation;
SpeakPunctuation.CODE = SpeakPunctuation(_constants.CODE);
SpeakPunctuation.NONE = SpeakPunctuation(_constants.NONE);
var SpeakNumeral = (0, _utils.property)('speakNumeral');
exports.SpeakNumeral = SpeakNumeral;
SpeakNumeral.DIGITS = SpeakNumeral(_constants.DIGITS);
SpeakNumeral.CONTINUOUS = SpeakNumeral(_constants.CONTINUOUS);
var SpeakHeader = (0, _utils.property)('speakHeader');
exports.SpeakHeader = SpeakHeader;
SpeakHeader.ONCE = SpeakHeader(_constants.ONCE);
SpeakHeader.ALWAYS = SpeakHeader(_constants.ALWAYS);
/* Voice */

var SpeechRate = (0, _utils.property)('speechRate');
exports.SpeechRate = SpeechRate;
SpeechRate.X_SLOW = SpeechRate(_constants.X_SLOW);
SpeechRate.SLOW = SpeechRate(_constants.SLOW);
SpeechRate.MEDIUM = SpeechRate(_constants.MEDIUM);
SpeechRate.FAST = SpeechRate(_constants.FASTER);
SpeechRate.X_FAST = SpeechRate(_constants.X_FAST);
SpeechRate.FASTER = SpeechRate(_constants.FASTER);
SpeechRate.SLOWER = SpeechRate(_constants.SLOWER);
var VoiceFamily = (0, _utils.property)('voiceFamily');
exports.VoiceFamily = VoiceFamily;
var Pitch = (0, _utils.property)('voiceFamily');
exports.Pitch = Pitch;
Pitch.X_LOW = Pitch(_constants.X_LOW);
Pitch.LOW = Pitch(_constants.LOW);
Pitch.MEDIUM = Pitch(_constants.MEDIUM);
Pitch.HIGH = Pitch(_constants.HIGH);
Pitch.X_HIGH = Pitch(_constants.X_HIGH);
var PitchRange = (0, _utils.property)('pitchRange');
exports.PitchRange = PitchRange;
var Stress = (0, _utils.property)('stress');
exports.Stress = Stress;
var Richness = (0, _utils.property)('richness');
/* Volume */

exports.Richness = Richness;
var Volume = (0, _utils.property)('volume');
exports.Volume = Volume;
Volume.SILENT = Volume(_constants.SILENT);
Volume.X_SOFT = Volume(_constants.X_SOFT);
Volume.SOFT = Volume(_constants.SOFT);
Volume.MEDIUM = Volume(_constants.MEDIUM);
Volume.LOUD = Volume(_constants.LOUD);
Volume.X_LOUD = Volume(_constants.X_LOUD);

/***/ }),

/***/ "./src/properties/typography/font.js":
/*!*******************************************!*\
  !*** ./src/properties/typography/font.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontSynthesis = exports.FontStretch = exports.FontSizeAdjust = exports.FontSize = exports.FontWeight = exports.FontVariantPosition = exports.FontVariantNumeric = exports.FontVariantLigatures = exports.FontVariantEastAsian = exports.FontVariantCaps = exports.FontVariant = exports.FontStyle = exports.FontKerning = exports.FontFeatureSettings = exports.FontFamily = exports.Font = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Font = (0, _utils.property)('font');
exports.Font = Font;
Font.CAPTION = Font(_constants.CAPTION);
Font.ICON = Font(_constants.ICON);
Font.MENU = Font(_constants.MENU);
Font.MESSAGE_BOX = Font(_constants.MESSAGE_BOX);
Font.SMALL_CAPTION = Font(_constants.SMALL_CAPTION);
Font.STATUS_BAR = Font(_constants.STATUS_BAR);
var FontFamily = (0, _utils.property)('fontFamily');
exports.FontFamily = FontFamily;
FontFamily.SERIF = FontFamily(_constants.SERIF);
FontFamily.SANS_SERIF = FontFamily(_constants.SANS_SERIF);
FontFamily.CURSIVE = FontFamily(_constants.CURSIVE);
FontFamily.FANTASY = FontFamily(_constants.FANTASY);
FontFamily.MONOSPACE = FontFamily(_constants.MONOSPACE);

FontFamily.serif = function () {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return FontFamily([].concat(values, [_constants.SERIF]));
};

FontFamily.sansSerif = function () {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  return FontFamily([].concat(values, [_constants.SANS_SERIF]));
};

FontFamily.cursive = function () {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }

  return FontFamily([].concat(values, [_constants.CURSIVE]));
};

FontFamily.fantasy = function () {
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }

  return FontFamily([].concat(values, [_constants.FANTASY]));
};

FontFamily.monospace = function () {
  for (var _len5 = arguments.length, values = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    values[_key5] = arguments[_key5];
  }

  return FontFamily([].concat(values, [_constants.MONOSPACE]));
};

var FontFeatureSettings = (0, _utils.property)('fontFeatureSettings');
exports.FontFeatureSettings = FontFeatureSettings;
FontFeatureSettings.NORMAL = FontFeatureSettings(_constants.NORMAL);
var FontKerning = (0, _utils.property)('fontKerning');
exports.FontKerning = FontKerning;
FontKerning.AUTO = FontKerning(_constants.AUTO);
FontKerning.NORMAL = FontKerning(_constants.NORMAL);
FontKerning.NONE = FontKerning(_constants.NONE);
var FontStyle = (0, _utils.property)('fontStyle');
exports.FontStyle = FontStyle;
FontStyle.NORMAL = FontStyle(_constants.NORMAL);
FontStyle.ITALIC = FontStyle(_constants.ITALIC);
FontStyle.OBLIQUE = FontStyle(_constants.OBLIQUE);
var FontVariant = (0, _utils.property)('fontVariant');
exports.FontVariant = FontVariant;
FontVariant.NORMAL = FontVariant(_constants.NORMAL);
FontVariant.NONE = FontVariant(_constants.NONE);
var FontVariantCaps = (0, _utils.property)('fontVariantCaps');
exports.FontVariantCaps = FontVariantCaps;
FontVariantCaps.NORMAL = FontVariantCaps(_constants.NORMAL);
FontVariantCaps.SMALL_CAPS = FontVariantCaps(_constants.SMALL_CAPS);
FontVariantCaps.ALL_SMALL_CAPS = FontVariantCaps(_constants.ALL_SMALL_CAPS);
FontVariantCaps.PETITE_CAPS = FontVariantCaps(_constants.PETITE_CAPS);
FontVariantCaps.ALL_PETITE_CAPS = FontVariantCaps(_constants.ALL_PETITE_CAPS);
FontVariantCaps.UNICASE = FontVariantCaps(_constants.UNICASE);
FontVariantCaps.TITLING_CAPS = FontVariantCaps(_constants.TITLING_CAPS);
var FontVariantEastAsian = (0, _utils.property)('fontVariantEastAsian');
exports.FontVariantEastAsian = FontVariantEastAsian;
FontVariantEastAsian.NORMAL = FontVariantEastAsian(_constants.NORMAL);
FontVariantEastAsian.JIS78 = FontVariantEastAsian(_constants.JIS78);
FontVariantEastAsian.JIS83 = FontVariantEastAsian(_constants.JIS83);
FontVariantEastAsian.JIS90 = FontVariantEastAsian(_constants.JIS90);
FontVariantEastAsian.JIS04 = FontVariantEastAsian(_constants.JIS04);
FontVariantEastAsian.SIMPLIFIED = FontVariantEastAsian(_constants.SIMPLIFIED);
FontVariantEastAsian.TRADITIONAL = FontVariantEastAsian(_constants.TRADITIONAL);
FontVariantEastAsian.FULL_WIDTH = FontVariantEastAsian(_constants.FULL_WIDTH);
FontVariantEastAsian.PROPORTIONAL_WIDTH = FontVariantEastAsian(_constants.PROPORTIONAL_WIDTH);
FontVariantEastAsian.RUBY = FontVariantEastAsian(_constants.RUBY);
var FontVariantLigatures = (0, _utils.property)('fontVariantLigatures');
exports.FontVariantLigatures = FontVariantLigatures;
FontVariantLigatures.NORMAL = FontVariantLigatures(_constants.NORMAL);
FontVariantLigatures.NONE = FontVariantLigatures(_constants.NONE);
FontVariantLigatures.COMMON_LIGATURES = FontVariantLigatures(_constants.COMMON_LIGATURES);
FontVariantLigatures.NO_COMMON_LIGATURES = FontVariantLigatures(_constants.NO_COMMON_LIGATURES);
FontVariantLigatures.DISCRETIONARY_LIGATURES = FontVariantLigatures(_constants.DISCRETIONARY_LIGATURES);
FontVariantLigatures.NO_DISCRETIONARY_LIGATURES = FontVariantLigatures(_constants.NO_DISCRETIONARY_LIGATURES);
FontVariantLigatures.HISTORICAL_LIGATURES = FontVariantLigatures(_constants.HISTORICAL_LIGATURES);
FontVariantLigatures.NO_HISTORICAL_LIGATURES = FontVariantLigatures(_constants.NO_HISTORICAL_LIGATURES);
FontVariantLigatures.CONTEXTUAL = FontVariantLigatures(_constants.CONTEXTUAL);
FontVariantLigatures.NO_CONTEXTUAL = FontVariantLigatures(_constants.NO_CONTEXTUAL);
var FontVariantNumeric = (0, _utils.property)('fontVariantNumeric');
exports.FontVariantNumeric = FontVariantNumeric;
FontVariantNumeric.NORMAL = FontVariantNumeric(_constants.NORMAL);
FontVariantNumeric.LINING_NUMS = FontVariantNumeric(_constants.LINING_NUMS);
FontVariantNumeric.OLDSTYLE_NUMS = FontVariantNumeric(_constants.OLDSTYLE_NUMS);
FontVariantNumeric.PROPORTIONAL_NUMS = FontVariantNumeric(_constants.PROPORTIONAL_NUMS);
FontVariantNumeric.TABULAR_NUMS = FontVariantNumeric(_constants.TABULAR_NUMS);
FontVariantNumeric.DIAGONAL_FRACTIONS = FontVariantNumeric(_constants.DIAGONAL_FRACTIONS);
FontVariantNumeric.STACKED_FRACTIONS = FontVariantNumeric(_constants.STACKED_FRACTIONS);
FontVariantNumeric.ORDINAL = FontVariantNumeric(_constants.ORDINAL);
FontVariantNumeric.SLASHED_ZERO = FontVariantNumeric(_constants.SLASHED_ZERO);
var FontVariantPosition = (0, _utils.property)('fontVariantPosition');
exports.FontVariantPosition = FontVariantPosition;
FontVariantPosition.NORMAL = FontVariantPosition(_constants.NORMAL);
FontVariantPosition.SUB = FontVariantPosition(_constants.SUB);
FontVariantPosition.SUPER = FontVariantPosition(_constants.SUPER);
var FontWeight = (0, _utils.property)('fontWeight');
exports.FontWeight = FontWeight;
FontWeight.NORMAL = FontWeight(_constants.NORMAL);
FontWeight.BOLD = FontWeight(_constants.BOLD);
FontWeight.BOLDER = FontWeight(_constants.BOLDER);
FontWeight.LIGHTER = FontWeight(_constants.LIGHTER);
FontWeight._100 = FontWeight(_constants._100);
FontWeight._200 = FontWeight(_constants._200);
FontWeight._300 = FontWeight(_constants._300);
FontWeight._400 = FontWeight(_constants._400);
FontWeight._500 = FontWeight(_constants._500);
FontWeight._600 = FontWeight(_constants._600);
FontWeight._700 = FontWeight(_constants._700);
FontWeight._800 = FontWeight(_constants._800);
FontWeight._900 = FontWeight(_constants._900);
var FontSize = (0, _utils.property)('fontSize');
exports.FontSize = FontSize;
FontSize.XX_SMALL = FontSize(_constants.XX_SMALL);
FontSize.X_SMALL = FontSize(_constants.X_SMALL);
FontSize.SMALL = FontSize(_constants.SMALL);
FontSize.MEDIUM = FontSize(_constants.MEDIUM);
FontSize.LARGE = FontSize(_constants.LARGE);
FontSize.X_LARGE = FontSize(_constants.X_LARGE);
FontSize.XX_LARGE = FontSize(_constants.XX_LARGE);
FontSize.LARGER = FontSize(_constants.LARGER);
FontSize.SMALLER = FontSize(_constants.SMALLER);
var FontSizeAdjust = (0, _utils.property)('fontSizeAdjust');
exports.FontSizeAdjust = FontSizeAdjust;
FontSizeAdjust.NONE = FontSizeAdjust(_constants.NONE);
var FontStretch = (0, _utils.property)('fontStretch');
exports.FontStretch = FontStretch;
FontStretch.NORMAL = FontStretch(_constants.NORMAL);
FontStretch.ULTRA_CONDENSED = FontStretch(_constants.ULTRA_CONDENSED);
FontStretch.EXTRA_CONDENSED = FontStretch(_constants.EXTRA_CONDENSED);
FontStretch.CONDENSED = FontStretch(_constants.CONDENSED);
FontStretch.SEMI_CONDENSED = FontStretch(_constants.SEMI_CONDENSED);
FontStretch.SEMI_EXPANDED = FontStretch(_constants.SEMI_EXPANDED);
FontStretch.EXPANDED = FontStretch(_constants.EXPANDED);
FontStretch.EXTRA_EXPANDED = FontStretch(_constants.EXTRA_EXPANDED);
FontStretch.ULTRA_EXPANDED = FontStretch(_constants.ULTRA_EXPANDED);
var FontSynthesis = (0, _utils.property)('fontSynthesis');
exports.FontSynthesis = FontSynthesis;
FontSynthesis.NONE = FontSynthesis(_constants.NONE);

/***/ }),

/***/ "./src/properties/typography/generated.js":
/*!************************************************!*\
  !*** ./src/properties/typography/generated.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookmarkState = exports.BookmarkLabel = exports.BookmarkLevel = exports.StringSet = exports.Quotes = exports.Content = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var _index = __webpack_require__(/*! ../../methods/index */ "./src/methods/index.js");

var Content = (0, _utils.property)('content');
exports.Content = Content;
Content.NONE = Content(_constants.NONE);
Content.NORMAL = Content(_constants.NORMAL);
Content.CONTENTS = Content(_constants.CONTENTS);
Content.OPEN_QUOTE = Content(_constants.OPEN_QUOTE);
Content.CLOSE_QUOTE = Content(_constants.CLOSE_QUOTE);
Content.NO_OPEN_QUOTE = Content(_constants.NO_OPEN_QUOTE);
Content.NO_CLOSE_QUOTE = Content(_constants.NO_CLOSE_QUOTE);
Content.DOCUMENT_URL = Content(_constants.DOCUMENT_URL);

Content.url = function () {
  return Content(_index.url.apply(void 0, arguments));
};

Content.targetCounter = function () {
  return Content(_index.targetCounter.apply(void 0, arguments));
};

Content.targetCounters = function () {
  return Content(_index.targetCounters.apply(void 0, arguments));
};

Content.targetText = function () {
  return Content(_index.targetText.apply(void 0, arguments));
};

Content.leader = function () {
  return Content(_index.leader.apply(void 0, arguments));
};

var Quotes = (0, _utils.property)('quotes');
exports.Quotes = Quotes;
Quotes.NONE = Quotes(_constants.NONE);
var StringSet = (0, _utils.property)('stringSet');
exports.StringSet = StringSet;
StringSet.NONE = StringSet(_constants.NONE);
var BookmarkLevel = (0, _utils.property)('bookmarkLevel');
exports.BookmarkLevel = BookmarkLevel;
BookmarkLevel.NONE = BookmarkLevel(_constants.NONE);
var BookmarkLabel = (0, _utils.property)('bookmarkLabel');
exports.BookmarkLabel = BookmarkLabel;
BookmarkLabel.CONTENTS = BookmarkLabel(_constants.CONTENTS);
BookmarkLabel.OPEN_QUOTE = BookmarkLabel(_constants.OPEN_QUOTE);
BookmarkLabel.CLOSE_QUOTE = BookmarkLabel(_constants.CLOSE_QUOTE);
BookmarkLabel.NO_OPEN_QUOTE = BookmarkLabel(_constants.NO_OPEN_QUOTE);
BookmarkLabel.NO_CLOSE_QUOTE = BookmarkLabel(_constants.NO_CLOSE_QUOTE);
BookmarkLabel.DOCUMENT_URL = BookmarkLabel(_constants.DOCUMENT_URL);

BookmarkLabel.url = function () {
  return BookmarkLabel(_index.url.apply(void 0, arguments));
};

BookmarkLabel.targetCounter = function () {
  return BookmarkLabel(_index.targetCounter.apply(void 0, arguments));
};

BookmarkLabel.targetCounters = function () {
  return BookmarkLabel(_index.targetCounters.apply(void 0, arguments));
};

BookmarkLabel.targetText = function () {
  return BookmarkLabel(_index.targetText.apply(void 0, arguments));
};

BookmarkLabel.leader = function () {
  return BookmarkLabel(_index.leader.apply(void 0, arguments));
};

var BookmarkState = (0, _utils.property)('bookmarkState');
exports.BookmarkState = BookmarkState;
BookmarkState.OPEN = BookmarkState(_constants.OPEN);
BookmarkState.CLOSE = BookmarkState(_constants.CLOSE);

/***/ }),

/***/ "./src/properties/typography/index.js":
/*!********************************************!*\
  !*** ./src/properties/typography/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _font = __webpack_require__(/*! ./font */ "./src/properties/typography/font.js");

Object.keys(_font).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _font[key];
    }
  });
});

var _generated = __webpack_require__(/*! ./generated */ "./src/properties/typography/generated.js");

Object.keys(_generated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _generated[key];
    }
  });
});

var _lineHeight = __webpack_require__(/*! ./line-height */ "./src/properties/typography/line-height.js");

Object.keys(_lineHeight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lineHeight[key];
    }
  });
});

var _pageBreak = __webpack_require__(/*! ./page-Break */ "./src/properties/typography/page-Break.js");

Object.keys(_pageBreak).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pageBreak[key];
    }
  });
});

var _punctuation = __webpack_require__(/*! ./punctuation */ "./src/properties/typography/punctuation.js");

Object.keys(_punctuation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _punctuation[key];
    }
  });
});

var _text = __webpack_require__(/*! ./text */ "./src/properties/typography/text.js");

Object.keys(_text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _text[key];
    }
  });
});

var _word = __webpack_require__(/*! ./word */ "./src/properties/typography/word.js");

Object.keys(_word).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _word[key];
    }
  });
});

var _wrap = __webpack_require__(/*! ./wrap */ "./src/properties/typography/wrap.js");

Object.keys(_wrap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _wrap[key];
    }
  });
});

var _writingMode = __webpack_require__(/*! ./writing-mode */ "./src/properties/typography/writing-mode.js");

Object.keys(_writingMode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _writingMode[key];
    }
  });
});

/***/ }),

/***/ "./src/properties/typography/line-height.js":
/*!**************************************************!*\
  !*** ./src/properties/typography/line-height.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineHeightStep = exports.LineHeight = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var LineHeight = (0, _utils.property)('lineHeight');
exports.LineHeight = LineHeight;
LineHeight.NORMAL = LineHeight(_constants.NORMAL);
var LineHeightStep = (0, _utils.property)('lineHeightStep');
exports.LineHeightStep = LineHeightStep;
LineHeightStep.NONE = LineHeightStep(_constants.NONE);

/***/ }),

/***/ "./src/properties/typography/page-Break.js":
/*!*************************************************!*\
  !*** ./src/properties/typography/page-Break.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageBreakInside = exports.PageBreakAfter = exports.PageBreakBefore = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var PageBreakBefore = (0, _utils.property)('pageBreakBefore');
exports.PageBreakBefore = PageBreakBefore;
PageBreakBefore.AUTO = PageBreakBefore(_constants.AUTO);
PageBreakBefore.ALWAYS = PageBreakBefore(_constants.ALWAYS);
PageBreakBefore.AVOID = PageBreakBefore(_constants.AVOID);
PageBreakBefore.LEFT = PageBreakBefore(_constants.LEFT);
PageBreakBefore.RIGHT = PageBreakBefore(_constants.RIGHT);
var PageBreakAfter = (0, _utils.property)('pageBreakAfter');
exports.PageBreakAfter = PageBreakAfter;
PageBreakAfter.AUTO = PageBreakAfter(_constants.AUTO);
PageBreakAfter.ALWAYS = PageBreakAfter(_constants.ALWAYS);
PageBreakAfter.AVOID = PageBreakAfter(_constants.AVOID);
PageBreakAfter.LEFT = PageBreakAfter(_constants.LEFT);
PageBreakAfter.RIGHT = PageBreakAfter(_constants.RIGHT);
var PageBreakInside = (0, _utils.property)('pageBreakInside');
exports.PageBreakInside = PageBreakInside;
PageBreakInside.AUTO = PageBreakInside(_constants.AUTO);
PageBreakInside.AVOID = PageBreakInside(_constants.AVOID);

/***/ }),

/***/ "./src/properties/typography/punctuation.js":
/*!**************************************************!*\
  !*** ./src/properties/typography/punctuation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabSize = exports.Hyphens = exports.HangingPunctuation = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var HangingPunctuation = (0, _utils.property)('hangingPunctuation');
exports.HangingPunctuation = HangingPunctuation;
HangingPunctuation.NONE = HangingPunctuation(_constants.NONE);
HangingPunctuation.FIRST = HangingPunctuation(_constants.FIRST);
HangingPunctuation.FORCE_END = HangingPunctuation(_constants.FORCE_END);
HangingPunctuation.ALLOW_END = HangingPunctuation(_constants.ALLOW_END);
HangingPunctuation.LAST = HangingPunctuation(_constants.LAST);
var Hyphens = (0, _utils.property)('hyphens');
exports.Hyphens = Hyphens;
Hyphens.NONE = Hyphens(_constants.NONE);
Hyphens.MANUAL = Hyphens(_constants.MANUAL);
Hyphens.AUTO = Hyphens(_constants.AUTO);
var TabSize = (0, _utils.property)('tabSize');
exports.TabSize = TabSize;

/***/ }),

/***/ "./src/properties/typography/text.js":
/*!*******************************************!*\
  !*** ./src/properties/typography/text.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextDecorationStyle = exports.TextDecorationLine = exports.TextDecorationColor = exports.TextDecoration = exports.TextEmphasisStyle = exports.TextEmphasisPosition = exports.TextEmphasisColor = exports.TextEmphasis = exports.TextOverflow = exports.LineBreak = exports.WhiteSpace = exports.LetterSpacing = exports.TextJustify = exports.TextUnderlinePosition = exports.TextShadow = exports.TextTransform = exports.TextIndent = exports.TextAlignLast = exports.TextAlignAll = exports.TextAlign = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var TextAlign = (0, _utils.property)('textAlign');
exports.TextAlign = TextAlign;
TextAlign.START = TextAlign(_constants.START);
TextAlign.END = TextAlign(_constants.END);
TextAlign.LEFT = TextAlign(_constants.LEFT);
TextAlign.RIGHT = TextAlign(_constants.RIGHT);
TextAlign.CENTER = TextAlign(_constants.CENTER);
TextAlign.JUSTIFY = TextAlign(_constants.JUSTIFY);
TextAlign.MATCH_PARENT = TextAlign(_constants.MATCH_PARENT);
TextAlign.JUSTIFY_ALL = TextAlign(_constants.JUSTIFY_ALL);
var TextAlignAll = (0, _utils.property)('textAlignAll');
exports.TextAlignAll = TextAlignAll;
TextAlignAll.START = TextAlignAll(_constants.START);
TextAlignAll.END = TextAlignAll(_constants.END);
TextAlignAll.LEFT = TextAlignAll(_constants.LEFT);
TextAlignAll.RIGHT = TextAlignAll(_constants.RIGHT);
TextAlignAll.CENTER = TextAlignAll(_constants.CENTER);
TextAlignAll.JUSTIFY = TextAlignAll(_constants.JUSTIFY);
TextAlignAll.MATCH_PARENT = TextAlignAll(_constants.MATCH_PARENT);
var TextAlignLast = (0, _utils.property)('textAlignAll');
exports.TextAlignLast = TextAlignLast;
TextAlignLast.AUTO = TextAlignLast(_constants.AUTO);
TextAlignLast.START = TextAlignLast(_constants.START);
TextAlignLast.END = TextAlignLast(_constants.END);
TextAlignLast.LEFT = TextAlignLast(_constants.LEFT);
TextAlignLast.RIGHT = TextAlignLast(_constants.RIGHT);
TextAlignLast.CENTER = TextAlignLast(_constants.CENTER);
TextAlignLast.JUSTIFY = TextAlignLast(_constants.JUSTIFY);
var TextIndent = (0, _utils.property)('textIndent');
exports.TextIndent = TextIndent;
var TextTransform = (0, _utils.property)('textTransform');
exports.TextTransform = TextTransform;
TextTransform.NONE = TextTransform(_constants.NONE);
TextTransform.CAPITALIZE = TextTransform(_constants.CAPITALIZE);
TextTransform.UPPERCASE = TextTransform(_constants.UPPERCASE);
TextTransform.LOWERCASE = TextTransform(_constants.LOWERCASE);
TextTransform.FULL_WIDTH = TextTransform(_constants.FULL_WIDTH);
var TextShadow = (0, _utils.property)('textShadow');
exports.TextShadow = TextShadow;
TextShadow.NONE = TextShadow(_constants.NONE);
var TextUnderlinePosition = (0, _utils.property)('textUnderlinePosition');
exports.TextUnderlinePosition = TextUnderlinePosition;
TextUnderlinePosition.AUTO = TextUnderlinePosition(_constants.AUTO);
TextUnderlinePosition.UNDER = TextUnderlinePosition(_constants.UNDER);
TextUnderlinePosition.LEFT = TextUnderlinePosition(_constants.LEFT);
TextUnderlinePosition.RIGHT = TextUnderlinePosition(_constants.RIGHT);
var TextJustify = (0, _utils.property)('textJustify');
exports.TextJustify = TextJustify;
TextJustify.AUTO = TextJustify(_constants.AUTO);
TextJustify.NONE = TextJustify(_constants.NONE);
TextJustify.INTER_WORD = TextJustify(_constants.INTER_WORD);
TextJustify.INTER_CHARACTER = TextJustify(_constants.INTER_CHARACTER);
var LetterSpacing = (0, _utils.property)('letterSpacing');
exports.LetterSpacing = LetterSpacing;
LetterSpacing.NORMAL = LetterSpacing(_constants.NORMAL);
var WhiteSpace = (0, _utils.property)('whiteSpace');
exports.WhiteSpace = WhiteSpace;
WhiteSpace.NORMAL = WhiteSpace(_constants.NORMAL);
WhiteSpace.PRE = WhiteSpace(_constants.PRE);
WhiteSpace.NOWRAP = WhiteSpace(_constants.NOWRAP);
WhiteSpace.PRE_WRAP = WhiteSpace(_constants.PRE_WRAP);
WhiteSpace.PRE_LINE = WhiteSpace(_constants.PRE_LINE);
var LineBreak = (0, _utils.property)('lineBreak');
exports.LineBreak = LineBreak;
LineBreak.AUTO = LineBreak(_constants.AUTO);
LineBreak.LOOSE = LineBreak(_constants.LOOSE);
LineBreak.NORMAL = LineBreak(_constants.NORMAL);
LineBreak.STRICT = LineBreak(_constants.STRICT);
LineBreak.ANYWHERE = LineBreak(_constants.ANYWHERE);
var TextOverflow = (0, _utils.property)('textOverflow');
exports.TextOverflow = TextOverflow;
TextOverflow.CLIP = TextOverflow(_constants.CLIP);
TextOverflow.ELLIPSIS = TextOverflow(_constants.ELLIPSIS);
var TextEmphasis = (0, _utils.property)('textEmphasis');
exports.TextEmphasis = TextEmphasis;
var TextEmphasisColor = (0, _utils.property)('textEmphasisColor');
exports.TextEmphasisColor = TextEmphasisColor;
TextEmphasisColor.CURRENT_COLOR = TextEmphasisColor(_constants.CURRENT_COLOR);
var TextEmphasisPosition = (0, _utils.property)('textEmphasisPosition');
exports.TextEmphasisPosition = TextEmphasisPosition;
var TextEmphasisStyle = (0, _utils.property)('textEmphasisStyle');
exports.TextEmphasisStyle = TextEmphasisStyle;
TextEmphasisStyle.NONE = TextEmphasisStyle(_constants.NONE);
TextEmphasisStyle.FILLED = TextEmphasisStyle(_constants.FILLED);
TextEmphasisStyle.OPEN = TextEmphasisStyle(_constants.OPEN);
TextEmphasisStyle.DOT = TextEmphasisStyle(_constants.DOT);
TextEmphasisStyle.CIRCLE = TextEmphasisStyle(_constants.CIRCLE);
TextEmphasisStyle.DOUBLE_CIRCLE = TextEmphasisStyle(_constants.DOUBLE_CIRCLE);
TextEmphasisStyle.TRIANGLE = TextEmphasisStyle(_constants.TRIANGLE);
TextEmphasisStyle.SESAME = TextEmphasisStyle(_constants.SESAME);
var TextDecoration = (0, _utils.property)('textDecoration');
exports.TextDecoration = TextDecoration;
var TextDecorationColor = (0, _utils.property)('textDecorationColor');
exports.TextDecorationColor = TextDecorationColor;
var TextDecorationLine = (0, _utils.property)('textDecorationLine');
exports.TextDecorationLine = TextDecorationLine;
TextDecorationLine.NONE = TextDecoration(_constants.NONE);
TextDecorationLine.UNDERLINE = TextDecoration(_constants.UNDERLINE);
TextDecorationLine.OVERLINE = TextDecoration(_constants.OVERLINE);
TextDecorationLine.LINE_THROUGH = TextDecoration(_constants.LINE_THROUGH);
TextDecorationLine.BLINK = TextDecoration(_constants.BLINK);
var TextDecorationStyle = (0, _utils.property)('textDecorationStyle');
exports.TextDecorationStyle = TextDecorationStyle;
TextDecorationStyle.SOLID = TextDecorationStyle(_constants.SOLID);
TextDecorationStyle.DOUBLE = TextDecorationStyle(_constants.DOUBLE);
TextDecorationStyle.DOTTED = TextDecorationStyle(_constants.DOTTED);
TextDecorationStyle.DASHED = TextDecorationStyle(_constants.DASHED);
TextDecorationStyle.WAVY = TextDecorationStyle(_constants.WAVY);

/***/ }),

/***/ "./src/properties/typography/word.js":
/*!*******************************************!*\
  !*** ./src/properties/typography/word.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WordSpacing = exports.WordBreak = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var WordBreak = (0, _utils.property)('wordBreak');
exports.WordBreak = WordBreak;
WordBreak.NORMAL = WordBreak(_constants.NORMAL);
WordBreak.KEEP_ALL = WordBreak(_constants.KEEP_ALL);
WordBreak.BREAK_ALL = WordBreak(_constants.BREAK_ALL);
WordBreak.BREAK_WORD = WordBreak(_constants.BREAK_WORD);
var WordSpacing = (0, _utils.property)('wordSpacing');
exports.WordSpacing = WordSpacing;
WordSpacing.NORMAL = WordSpacing(_constants.NORMAL);

/***/ }),

/***/ "./src/properties/typography/wrap.js":
/*!*******************************************!*\
  !*** ./src/properties/typography/wrap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverflowWrap = exports.WordWrap = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var WordWrap = (0, _utils.property)('wordWrap');
exports.WordWrap = WordWrap;
WordWrap.NORMAL = WordWrap(_constants.NORMAL);
WordWrap.BREAK_WORD = WordWrap(_constants.BREAK_WORD);
WordWrap.BREAK_SPACES = WordWrap(_constants.BREAK_SPACES);
var OverflowWrap = (0, _utils.property)('overflowWrap');
exports.OverflowWrap = OverflowWrap;
OverflowWrap.NORMAL = OverflowWrap(_constants.NORMAL);
OverflowWrap.BREAK_WORD = OverflowWrap(_constants.BREAK_WORD);
OverflowWrap.BREAK_SPACES = OverflowWrap(_constants.BREAK_SPACES);

/***/ }),

/***/ "./src/properties/typography/writing-mode.js":
/*!***************************************************!*\
  !*** ./src/properties/typography/writing-mode.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WritingMode = exports.UnicodeBidi = exports.TextOrientation = exports.TextCombineUpright = exports.GlyphOrientationVertical = exports.Direction = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var _measures = __webpack_require__(/*! ../../methods/measures */ "./src/methods/measures.js");

var Direction = (0, _utils.property)('direction');
exports.Direction = Direction;
Direction.LTR = Direction(_constants.LTR);
Direction.RTL = Direction(_constants.RTL);
var GlyphOrientationVertical = (0, _utils.property)('glyphOrientationVertical');
exports.GlyphOrientationVertical = GlyphOrientationVertical;
GlyphOrientationVertical.AUTO = GlyphOrientationVertical(_constants.AUTO);
GlyphOrientationVertical._0 = GlyphOrientationVertical._0DEG = GlyphOrientationVertical(0);
GlyphOrientationVertical._90 = GlyphOrientationVertical._90DEG = GlyphOrientationVertical((0, _measures.deg)(90));
var TextCombineUpright = (0, _utils.property)('textCombineUpright');
exports.TextCombineUpright = TextCombineUpright;
TextCombineUpright.NONE = TextCombineUpright(_constants.NONE);
TextCombineUpright.ALL = TextCombineUpright(_constants.ALL);
TextCombineUpright.DIGITS = TextCombineUpright(_constants.DIGITS);

TextCombineUpright.digits = function () {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return TextCombineUpright.apply(void 0, [_constants.DIGITS].concat(values));
};

var TextOrientation = (0, _utils.property)('textOrientation');
exports.TextOrientation = TextOrientation;
TextOrientation.MIXED = TextOrientation(_constants.MIXED);
TextOrientation.UPRIGHT = TextOrientation(_constants.UPRIGHT);
TextOrientation.SIDEWAYS = TextOrientation(_constants.SIDEWAYS);
var UnicodeBidi = (0, _utils.property)('unicodeBidi');
exports.UnicodeBidi = UnicodeBidi;
UnicodeBidi.NORMAL = UnicodeBidi(_constants.NORMAL);
UnicodeBidi.EMBED = UnicodeBidi(_constants.EMBED);
UnicodeBidi.ISOLATE = UnicodeBidi(_constants.ISOLATE);
UnicodeBidi.BIDI_OVERRIDE = UnicodeBidi(_constants.BIDI_OVERRIDE);
UnicodeBidi.ISOLATE_OVERRIDE = UnicodeBidi(_constants.ISOLATE_OVERRIDE);
UnicodeBidi.PLAINTEXT = UnicodeBidi(_constants.PLAINTEXT);
var WritingMode = (0, _utils.property)('writingMode');
exports.WritingMode = WritingMode;
WritingMode.HORIZONTAL_TB = WritingMode(_constants.HORIZONTAL_TB);
WritingMode.VERTICAL_RL = WritingMode(_constants.VERTICAL_RL);
WritingMode.VERTICAL_LR = WritingMode(_constants.VERTICAL_LR);
WritingMode.SIDEWAYS_RL = WritingMode(_constants.SIDEWAYS_RL);
WritingMode.SIDEWAYS_LR = WritingMode(_constants.SIDEWAYS_LR);

/***/ }),

/***/ "./src/properties/visual/background.js":
/*!*********************************************!*\
  !*** ./src/properties/visual/background.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundSize = exports.BackgroundOrigin = exports.BackgroundClip = exports.BackgroundPosition = exports.BackgroundAttachment = exports.BackgroundRepeat = exports.BackgroundImage = exports.BackgroundColor = exports.Background = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Background = (0, _utils.property)('background');
exports.Background = Background;
var BackgroundColor = (0, _utils.property)('backgroundColor');
exports.BackgroundColor = BackgroundColor;
BackgroundColor.TRANSPARENT = BackgroundColor(_constants.TRANSPARENT);
var BackgroundImage = (0, _utils.property)('backgroundImage');
exports.BackgroundImage = BackgroundImage;
BackgroundImage.NONE = BackgroundImage(_constants.NONE);
var BackgroundRepeat = (0, _utils.property)('backgroundRepeat');
exports.BackgroundRepeat = BackgroundRepeat;
BackgroundRepeat.REPEAT = BackgroundRepeat(_constants.REPEAT);
BackgroundRepeat.REPEAT_X = BackgroundRepeat(_constants.REPEAT_X);
BackgroundRepeat.REPEAT_Y = BackgroundRepeat(_constants.REPEAT_Y);
BackgroundRepeat.SPACE = BackgroundRepeat(_constants.SPACE);
BackgroundRepeat.AROUND = BackgroundRepeat(_constants.AROUND);
BackgroundRepeat.NO_REPEAT = BackgroundRepeat(_constants.NO_REPEAT);
var BackgroundAttachment = (0, _utils.property)('backgroundAttachment');
exports.BackgroundAttachment = BackgroundAttachment;
BackgroundAttachment.FIXED = BackgroundAttachment(_constants.FIXED);
BackgroundAttachment.LOCAL = BackgroundAttachment(_constants.LOCAL);
BackgroundAttachment.SCROLL = BackgroundAttachment(_constants.SCROLL);
var BackgroundPosition = (0, _utils.property)('backgroundPosition');
exports.BackgroundPosition = BackgroundPosition;
BackgroundPosition.TOP = BackgroundPosition(_constants.TOP);
BackgroundPosition.RIGHT = BackgroundPosition(_constants.RIGHT);
BackgroundPosition.LEFT = BackgroundPosition(_constants.LEFT);
BackgroundPosition.BOTTOM = BackgroundPosition(_constants.BOTTOM);
BackgroundPosition.TOP_LEFT = BackgroundPosition(_constants.TOP, _constants.LEFT);
BackgroundPosition.TOP_RIGHT = BackgroundPosition(_constants.TOP, _constants.RIGHT);
BackgroundPosition.BOTTOM_LEFT = BackgroundPosition(_constants.BOTTOM, _constants.LEFT);
BackgroundPosition.BOTTOM_RIGHT = BackgroundPosition(_constants.BOTTOM, _constants.RIGHT);
var BackgroundClip = (0, _utils.property)('backgroundClip');
exports.BackgroundClip = BackgroundClip;
BackgroundClip.BORDER_BOX = BackgroundClip(_constants.BORDER_BOX);
BackgroundClip.PADDING_BOX = BackgroundClip(_constants.PADDING_BOX);
BackgroundClip.CONTENT_BOX = BackgroundClip(_constants.CONTENT_BOX);
var BackgroundOrigin = (0, _utils.property)('backgroundOrigin');
exports.BackgroundOrigin = BackgroundOrigin;
BackgroundOrigin.BORDER_BOX = BackgroundOrigin(_constants.BORDER_BOX);
BackgroundOrigin.PADDING_BOX = BackgroundOrigin(_constants.PADDING_BOX);
BackgroundOrigin.CONTENT_BOX = BackgroundOrigin(_constants.CONTENT_BOX);
var BackgroundSize = (0, _utils.property)('backgroundSize');
exports.BackgroundSize = BackgroundSize;
BackgroundSize.AUTO = BackgroundSize(_constants.AUTO);
BackgroundSize.CONTAIN = BackgroundSize(_constants.CONTAIN);
BackgroundSize.COVER = BackgroundSize(_constants.COVER);

/***/ }),

/***/ "./src/properties/visual/blend.js":
/*!****************************************!*\
  !*** ./src/properties/visual/blend.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundBlendMode = exports.Isolation = exports.MixBlendMode = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var MixBlendMode = (0, _utils.property)('mixBlendMode');
exports.MixBlendMode = MixBlendMode;
MixBlendMode.NORMAL = MixBlendMode(_constants.NORMAL);
MixBlendMode.MULTIPLY = MixBlendMode(_constants.MULTIPLY);
MixBlendMode.SCREEN = MixBlendMode(_constants.SCREEN);
MixBlendMode.OVERLAY = MixBlendMode(_constants.OVERLAY);
MixBlendMode.DARKEN = MixBlendMode(_constants.DARKEN);
MixBlendMode.LIGHTEN = MixBlendMode(_constants.LIGHTEN);
MixBlendMode.COLOR_DODGE = MixBlendMode(_constants.COLOR_DODGE);
MixBlendMode.COLOR_BURN = MixBlendMode(_constants.COLOR_BURN);
MixBlendMode.HARD_LIGHT = MixBlendMode(_constants.HARD_LIGHT);
MixBlendMode.SOFT_LIGHT = MixBlendMode(_constants.SOFT_LIGHT);
MixBlendMode.DIFFERENCE = MixBlendMode(_constants.DIFFERENCE);
MixBlendMode.EXCLUSION = MixBlendMode(_constants.EXCLUSION);
MixBlendMode.HUE = MixBlendMode(_constants.HUE);
MixBlendMode.SATURATION = MixBlendMode(_constants.SATURATION);
MixBlendMode.COLOR = MixBlendMode(_constants.COLOR);
MixBlendMode.LUMINOSITY = MixBlendMode(_constants.LUMINOSITY);
var Isolation = (0, _utils.property)('isolation');
exports.Isolation = Isolation;
Isolation.AUTO = Isolation(_constants.AUTO);
Isolation.ISOLATE = Isolation(_constants.ISOLATE);
var BackgroundBlendMode = (0, _utils.property)('backgroundBlendMode');
exports.BackgroundBlendMode = BackgroundBlendMode;
BackgroundBlendMode.NORMAL = BackgroundBlendMode(_constants.NORMAL);
BackgroundBlendMode.MULTIPLY = BackgroundBlendMode(_constants.MULTIPLY);
BackgroundBlendMode.SCREEN = BackgroundBlendMode(_constants.SCREEN);
BackgroundBlendMode.OVERLAY = BackgroundBlendMode(_constants.OVERLAY);
BackgroundBlendMode.DARKEN = BackgroundBlendMode(_constants.DARKEN);
BackgroundBlendMode.LIGHTEN = BackgroundBlendMode(_constants.LIGHTEN);
BackgroundBlendMode.COLOR_DODGE = BackgroundBlendMode(_constants.COLOR_DODGE);
BackgroundBlendMode.COLOR_BURN = BackgroundBlendMode(_constants.COLOR_BURN);
BackgroundBlendMode.HARD_LIGHT = BackgroundBlendMode(_constants.HARD_LIGHT);
BackgroundBlendMode.SOFT_LIGHT = BackgroundBlendMode(_constants.SOFT_LIGHT);
BackgroundBlendMode.DIFFERENCE = BackgroundBlendMode(_constants.DIFFERENCE);
BackgroundBlendMode.EXCLUSION = BackgroundBlendMode(_constants.EXCLUSION);
BackgroundBlendMode.HUE = BackgroundBlendMode(_constants.HUE);
BackgroundBlendMode.SATURATION = BackgroundBlendMode(_constants.SATURATION);
BackgroundBlendMode.COLOR = BackgroundBlendMode(_constants.COLOR);
BackgroundBlendMode.LUMINOSITY = BackgroundBlendMode(_constants.LUMINOSITY);

/***/ }),

/***/ "./src/properties/visual/border.js":
/*!*****************************************!*\
  !*** ./src/properties/visual/border.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BorderImageWidth = exports.BorderImageSource = exports.BorderImageSlice = exports.BorderImageRepeat = exports.BorderImageOutset = exports.BorderImage = exports.BorderEndEndRadius = exports.BorderEndStartRadius = exports.BorderStartEndRadius = exports.BorderStartStartRadius = exports.BorderBottomRightRadius = exports.BorderBottomLeftRadius = exports.BorderTopRightRadius = exports.BorderTopLeftRadius = exports.BorderRadius = exports.BorderInlineEndColor = exports.BorderInlineStartColor = exports.BorderInlineColor = exports.BorderBlockEndColor = exports.BorderBlockStartColor = exports.BorderBlockColor = exports.BorderRightColor = exports.BorderLeftColor = exports.BorderBottomColor = exports.BorderTopColor = exports.BorderColor = exports.BorderInlineEndStyle = exports.BorderInlineStartStyle = exports.BorderInlineStyle = exports.BorderBlockEndStyle = exports.BorderBlockStartStyle = exports.BorderBlockStyle = exports.BorderRightStyle = exports.BorderLeftStyle = exports.BorderBottomStyle = exports.BorderTopStyle = exports.BorderStyle = exports.BorderInlineEndWidth = exports.BorderInlineStartWidth = exports.BorderInlineWidth = exports.BorderBlockEndWidth = exports.BorderBlockStartWidth = exports.BorderBlockWidth = exports.BorderRightWidth = exports.BorderLeftWidth = exports.BorderBottomWidth = exports.BorderTopWidth = exports.BorderWidth = exports.BorderInlineEnd = exports.BorderInlineStart = exports.BorderInline = exports.BorderBlockEnd = exports.BorderBlockStart = exports.BorderBlock = exports.BorderRight = exports.BorderLeft = exports.BorderBottom = exports.BorderTop = exports.Border = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Border = (0, _utils.property)('border');
exports.Border = Border;

Border.hidden = function () {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return Border.apply(void 0, [_constants.HIDDEN].concat(values));
};

Border.dotted = function () {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  return Border.apply(void 0, [_constants.DOTTED].concat(values));
};

Border.dashed = function () {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }

  return Border.apply(void 0, [_constants.DASHED].concat(values));
};

Border.solid = function () {
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }

  return Border.apply(void 0, [_constants.SOLID].concat(values));
};

Border.double = function () {
  for (var _len5 = arguments.length, values = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    values[_key5] = arguments[_key5];
  }

  return Border.apply(void 0, [_constants.DOUBLE].concat(values));
};

Border.groove = function () {
  for (var _len6 = arguments.length, values = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    values[_key6] = arguments[_key6];
  }

  return Border.apply(void 0, [_constants.GROOVE].concat(values));
};

Border.ridge = function () {
  for (var _len7 = arguments.length, values = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    values[_key7] = arguments[_key7];
  }

  return Border.apply(void 0, [_constants.RIDGE].concat(values));
};

Border.inset = function () {
  for (var _len8 = arguments.length, values = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    values[_key8] = arguments[_key8];
  }

  return Border.apply(void 0, [_constants.INSET].concat(values));
};

Border.outset = function () {
  for (var _len9 = arguments.length, values = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    values[_key9] = arguments[_key9];
  }

  return Border.apply(void 0, [_constants.OUTSET].concat(values));
};

Border.thin = function () {
  for (var _len10 = arguments.length, values = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    values[_key10] = arguments[_key10];
  }

  return Border.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

Border.medium = function () {
  for (var _len11 = arguments.length, values = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    values[_key11] = arguments[_key11];
  }

  return Border.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

Border.thick = function () {
  for (var _len12 = arguments.length, values = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    values[_key12] = arguments[_key12];
  }

  return Border.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var BorderTop = (0, _utils.property)('borderTop');
exports.BorderTop = BorderTop;

BorderTop.hidden = function () {
  for (var _len13 = arguments.length, values = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    values[_key13] = arguments[_key13];
  }

  return BorderTop.apply(void 0, [_constants.HIDDEN].concat(values));
};

BorderTop.dotted = function () {
  for (var _len14 = arguments.length, values = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    values[_key14] = arguments[_key14];
  }

  return BorderTop.apply(void 0, [_constants.DOTTED].concat(values));
};

BorderTop.dashed = function () {
  for (var _len15 = arguments.length, values = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    values[_key15] = arguments[_key15];
  }

  return BorderTop.apply(void 0, [_constants.DASHED].concat(values));
};

BorderTop.solid = function () {
  for (var _len16 = arguments.length, values = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    values[_key16] = arguments[_key16];
  }

  return BorderTop.apply(void 0, [_constants.SOLID].concat(values));
};

BorderTop.double = function () {
  for (var _len17 = arguments.length, values = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    values[_key17] = arguments[_key17];
  }

  return BorderTop.apply(void 0, [_constants.DOUBLE].concat(values));
};

BorderTop.groove = function () {
  for (var _len18 = arguments.length, values = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    values[_key18] = arguments[_key18];
  }

  return BorderTop.apply(void 0, [_constants.GROOVE].concat(values));
};

BorderTop.ridge = function () {
  for (var _len19 = arguments.length, values = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    values[_key19] = arguments[_key19];
  }

  return BorderTop.apply(void 0, [_constants.RIDGE].concat(values));
};

BorderTop.inset = function () {
  for (var _len20 = arguments.length, values = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    values[_key20] = arguments[_key20];
  }

  return BorderTop.apply(void 0, [_constants.INSET].concat(values));
};

BorderTop.outset = function () {
  for (var _len21 = arguments.length, values = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    values[_key21] = arguments[_key21];
  }

  return BorderTop.apply(void 0, [_constants.OUTSET].concat(values));
};

BorderTop.thin = function () {
  for (var _len22 = arguments.length, values = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    values[_key22] = arguments[_key22];
  }

  return BorderTop.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

BorderTop.medium = function () {
  for (var _len23 = arguments.length, values = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    values[_key23] = arguments[_key23];
  }

  return BorderTop.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

BorderTop.thick = function () {
  for (var _len24 = arguments.length, values = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    values[_key24] = arguments[_key24];
  }

  return BorderTop.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var BorderBottom = (0, _utils.property)('borderBottom');
exports.BorderBottom = BorderBottom;

BorderBottom.hidden = function () {
  for (var _len25 = arguments.length, values = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    values[_key25] = arguments[_key25];
  }

  return BorderBottom.apply(void 0, [_constants.HIDDEN].concat(values));
};

BorderBottom.dotted = function () {
  for (var _len26 = arguments.length, values = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    values[_key26] = arguments[_key26];
  }

  return BorderBottom.apply(void 0, [_constants.DOTTED].concat(values));
};

BorderBottom.dashed = function () {
  for (var _len27 = arguments.length, values = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    values[_key27] = arguments[_key27];
  }

  return BorderBottom.apply(void 0, [_constants.DASHED].concat(values));
};

BorderBottom.solid = function () {
  for (var _len28 = arguments.length, values = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    values[_key28] = arguments[_key28];
  }

  return BorderBottom.apply(void 0, [_constants.SOLID].concat(values));
};

BorderBottom.double = function () {
  for (var _len29 = arguments.length, values = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
    values[_key29] = arguments[_key29];
  }

  return BorderBottom.apply(void 0, [_constants.DOUBLE].concat(values));
};

BorderBottom.groove = function () {
  for (var _len30 = arguments.length, values = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
    values[_key30] = arguments[_key30];
  }

  return BorderBottom.apply(void 0, [_constants.GROOVE].concat(values));
};

BorderBottom.ridge = function () {
  for (var _len31 = arguments.length, values = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
    values[_key31] = arguments[_key31];
  }

  return BorderBottom.apply(void 0, [_constants.RIDGE].concat(values));
};

BorderBottom.inset = function () {
  for (var _len32 = arguments.length, values = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
    values[_key32] = arguments[_key32];
  }

  return BorderBottom.apply(void 0, [_constants.INSET].concat(values));
};

BorderBottom.outset = function () {
  for (var _len33 = arguments.length, values = new Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
    values[_key33] = arguments[_key33];
  }

  return BorderBottom.apply(void 0, [_constants.OUTSET].concat(values));
};

BorderBottom.thin = function () {
  for (var _len34 = arguments.length, values = new Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
    values[_key34] = arguments[_key34];
  }

  return BorderBottom.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

BorderBottom.medium = function () {
  for (var _len35 = arguments.length, values = new Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
    values[_key35] = arguments[_key35];
  }

  return BorderBottom.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

BorderBottom.thick = function () {
  for (var _len36 = arguments.length, values = new Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
    values[_key36] = arguments[_key36];
  }

  return BorderBottom.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var BorderLeft = (0, _utils.property)('borderLeft');
exports.BorderLeft = BorderLeft;

BorderLeft.hidden = function () {
  for (var _len37 = arguments.length, values = new Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
    values[_key37] = arguments[_key37];
  }

  return BorderLeft.apply(void 0, [_constants.HIDDEN].concat(values));
};

BorderLeft.dotted = function () {
  for (var _len38 = arguments.length, values = new Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
    values[_key38] = arguments[_key38];
  }

  return BorderLeft.apply(void 0, [_constants.DOTTED].concat(values));
};

BorderLeft.dashed = function () {
  for (var _len39 = arguments.length, values = new Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
    values[_key39] = arguments[_key39];
  }

  return BorderLeft.apply(void 0, [_constants.DASHED].concat(values));
};

BorderLeft.solid = function () {
  for (var _len40 = arguments.length, values = new Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
    values[_key40] = arguments[_key40];
  }

  return BorderLeft.apply(void 0, [_constants.SOLID].concat(values));
};

BorderLeft.double = function () {
  for (var _len41 = arguments.length, values = new Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
    values[_key41] = arguments[_key41];
  }

  return BorderLeft.apply(void 0, [_constants.DOUBLE].concat(values));
};

BorderLeft.groove = function () {
  for (var _len42 = arguments.length, values = new Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
    values[_key42] = arguments[_key42];
  }

  return BorderLeft.apply(void 0, [_constants.GROOVE].concat(values));
};

BorderLeft.ridge = function () {
  for (var _len43 = arguments.length, values = new Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
    values[_key43] = arguments[_key43];
  }

  return BorderLeft.apply(void 0, [_constants.RIDGE].concat(values));
};

BorderLeft.inset = function () {
  for (var _len44 = arguments.length, values = new Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
    values[_key44] = arguments[_key44];
  }

  return BorderLeft.apply(void 0, [_constants.INSET].concat(values));
};

BorderLeft.outset = function () {
  for (var _len45 = arguments.length, values = new Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
    values[_key45] = arguments[_key45];
  }

  return BorderLeft.apply(void 0, [_constants.OUTSET].concat(values));
};

BorderLeft.thin = function () {
  for (var _len46 = arguments.length, values = new Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
    values[_key46] = arguments[_key46];
  }

  return BorderLeft.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

BorderLeft.medium = function () {
  for (var _len47 = arguments.length, values = new Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
    values[_key47] = arguments[_key47];
  }

  return BorderLeft.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

BorderLeft.thick = function () {
  for (var _len48 = arguments.length, values = new Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
    values[_key48] = arguments[_key48];
  }

  return BorderLeft.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var BorderRight = (0, _utils.property)('borderRight');
exports.BorderRight = BorderRight;

BorderRight.hidden = function () {
  for (var _len49 = arguments.length, values = new Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
    values[_key49] = arguments[_key49];
  }

  return BorderRight.apply(void 0, [_constants.HIDDEN].concat(values));
};

BorderRight.dotted = function () {
  for (var _len50 = arguments.length, values = new Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
    values[_key50] = arguments[_key50];
  }

  return BorderRight.apply(void 0, [_constants.DOTTED].concat(values));
};

BorderRight.dashed = function () {
  for (var _len51 = arguments.length, values = new Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
    values[_key51] = arguments[_key51];
  }

  return BorderRight.apply(void 0, [_constants.DASHED].concat(values));
};

BorderRight.solid = function () {
  for (var _len52 = arguments.length, values = new Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
    values[_key52] = arguments[_key52];
  }

  return BorderRight.apply(void 0, [_constants.SOLID].concat(values));
};

BorderRight.double = function () {
  for (var _len53 = arguments.length, values = new Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
    values[_key53] = arguments[_key53];
  }

  return BorderRight.apply(void 0, [_constants.DOUBLE].concat(values));
};

BorderRight.groove = function () {
  for (var _len54 = arguments.length, values = new Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
    values[_key54] = arguments[_key54];
  }

  return BorderRight.apply(void 0, [_constants.GROOVE].concat(values));
};

BorderRight.ridge = function () {
  for (var _len55 = arguments.length, values = new Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
    values[_key55] = arguments[_key55];
  }

  return BorderRight.apply(void 0, [_constants.RIDGE].concat(values));
};

BorderRight.inset = function () {
  for (var _len56 = arguments.length, values = new Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
    values[_key56] = arguments[_key56];
  }

  return BorderRight.apply(void 0, [_constants.INSET].concat(values));
};

BorderRight.outset = function () {
  for (var _len57 = arguments.length, values = new Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {
    values[_key57] = arguments[_key57];
  }

  return BorderRight.apply(void 0, [_constants.OUTSET].concat(values));
};

BorderRight.thin = function () {
  for (var _len58 = arguments.length, values = new Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {
    values[_key58] = arguments[_key58];
  }

  return BorderRight.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

BorderRight.medium = function () {
  for (var _len59 = arguments.length, values = new Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {
    values[_key59] = arguments[_key59];
  }

  return BorderRight.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

BorderRight.thick = function () {
  for (var _len60 = arguments.length, values = new Array(_len60), _key60 = 0; _key60 < _len60; _key60++) {
    values[_key60] = arguments[_key60];
  }

  return BorderRight.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var BorderBlock = (0, _utils.property)('borderBlock');
exports.BorderBlock = BorderBlock;

BorderBlock.hidden = function () {
  for (var _len61 = arguments.length, values = new Array(_len61), _key61 = 0; _key61 < _len61; _key61++) {
    values[_key61] = arguments[_key61];
  }

  return BorderBlock.apply(void 0, [_constants.HIDDEN].concat(values));
};

BorderBlock.dotted = function () {
  for (var _len62 = arguments.length, values = new Array(_len62), _key62 = 0; _key62 < _len62; _key62++) {
    values[_key62] = arguments[_key62];
  }

  return BorderBlock.apply(void 0, [_constants.DOTTED].concat(values));
};

BorderBlock.dashed = function () {
  for (var _len63 = arguments.length, values = new Array(_len63), _key63 = 0; _key63 < _len63; _key63++) {
    values[_key63] = arguments[_key63];
  }

  return BorderBlock.apply(void 0, [_constants.DASHED].concat(values));
};

BorderBlock.solid = function () {
  for (var _len64 = arguments.length, values = new Array(_len64), _key64 = 0; _key64 < _len64; _key64++) {
    values[_key64] = arguments[_key64];
  }

  return BorderBlock.apply(void 0, [_constants.SOLID].concat(values));
};

BorderBlock.double = function () {
  for (var _len65 = arguments.length, values = new Array(_len65), _key65 = 0; _key65 < _len65; _key65++) {
    values[_key65] = arguments[_key65];
  }

  return BorderBlock.apply(void 0, [_constants.DOUBLE].concat(values));
};

BorderBlock.groove = function () {
  for (var _len66 = arguments.length, values = new Array(_len66), _key66 = 0; _key66 < _len66; _key66++) {
    values[_key66] = arguments[_key66];
  }

  return BorderBlock.apply(void 0, [_constants.GROOVE].concat(values));
};

BorderBlock.ridge = function () {
  for (var _len67 = arguments.length, values = new Array(_len67), _key67 = 0; _key67 < _len67; _key67++) {
    values[_key67] = arguments[_key67];
  }

  return BorderBlock.apply(void 0, [_constants.RIDGE].concat(values));
};

BorderBlock.inset = function () {
  for (var _len68 = arguments.length, values = new Array(_len68), _key68 = 0; _key68 < _len68; _key68++) {
    values[_key68] = arguments[_key68];
  }

  return BorderBlock.apply(void 0, [_constants.INSET].concat(values));
};

BorderBlock.outset = function () {
  for (var _len69 = arguments.length, values = new Array(_len69), _key69 = 0; _key69 < _len69; _key69++) {
    values[_key69] = arguments[_key69];
  }

  return BorderBlock.apply(void 0, [_constants.OUTSET].concat(values));
};

BorderBlock.thin = function () {
  for (var _len70 = arguments.length, values = new Array(_len70), _key70 = 0; _key70 < _len70; _key70++) {
    values[_key70] = arguments[_key70];
  }

  return BorderBlock.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

BorderBlock.medium = function () {
  for (var _len71 = arguments.length, values = new Array(_len71), _key71 = 0; _key71 < _len71; _key71++) {
    values[_key71] = arguments[_key71];
  }

  return BorderBlock.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

BorderBlock.thick = function () {
  for (var _len72 = arguments.length, values = new Array(_len72), _key72 = 0; _key72 < _len72; _key72++) {
    values[_key72] = arguments[_key72];
  }

  return BorderBlock.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var BorderBlockStart = (0, _utils.property)('borderBlockStart');
exports.BorderBlockStart = BorderBlockStart;

BorderBlockStart.hidden = function () {
  for (var _len73 = arguments.length, values = new Array(_len73), _key73 = 0; _key73 < _len73; _key73++) {
    values[_key73] = arguments[_key73];
  }

  return BorderBlockStart.apply(void 0, [_constants.HIDDEN].concat(values));
};

BorderBlockStart.dotted = function () {
  for (var _len74 = arguments.length, values = new Array(_len74), _key74 = 0; _key74 < _len74; _key74++) {
    values[_key74] = arguments[_key74];
  }

  return BorderBlockStart.apply(void 0, [_constants.DOTTED].concat(values));
};

BorderBlockStart.dashed = function () {
  for (var _len75 = arguments.length, values = new Array(_len75), _key75 = 0; _key75 < _len75; _key75++) {
    values[_key75] = arguments[_key75];
  }

  return BorderBlockStart.apply(void 0, [_constants.DASHED].concat(values));
};

BorderBlockStart.solid = function () {
  for (var _len76 = arguments.length, values = new Array(_len76), _key76 = 0; _key76 < _len76; _key76++) {
    values[_key76] = arguments[_key76];
  }

  return BorderBlockStart.apply(void 0, [_constants.SOLID].concat(values));
};

BorderBlockStart.double = function () {
  for (var _len77 = arguments.length, values = new Array(_len77), _key77 = 0; _key77 < _len77; _key77++) {
    values[_key77] = arguments[_key77];
  }

  return BorderBlockStart.apply(void 0, [_constants.DOUBLE].concat(values));
};

BorderBlockStart.groove = function () {
  for (var _len78 = arguments.length, values = new Array(_len78), _key78 = 0; _key78 < _len78; _key78++) {
    values[_key78] = arguments[_key78];
  }

  return BorderBlockStart.apply(void 0, [_constants.GROOVE].concat(values));
};

BorderBlockStart.ridge = function () {
  for (var _len79 = arguments.length, values = new Array(_len79), _key79 = 0; _key79 < _len79; _key79++) {
    values[_key79] = arguments[_key79];
  }

  return BorderBlockStart.apply(void 0, [_constants.RIDGE].concat(values));
};

BorderBlockStart.inset = function () {
  for (var _len80 = arguments.length, values = new Array(_len80), _key80 = 0; _key80 < _len80; _key80++) {
    values[_key80] = arguments[_key80];
  }

  return BorderBlockStart.apply(void 0, [_constants.INSET].concat(values));
};

BorderBlockStart.outset = function () {
  for (var _len81 = arguments.length, values = new Array(_len81), _key81 = 0; _key81 < _len81; _key81++) {
    values[_key81] = arguments[_key81];
  }

  return BorderBlockStart.apply(void 0, [_constants.OUTSET].concat(values));
};

BorderBlockStart.thin = function () {
  for (var _len82 = arguments.length, values = new Array(_len82), _key82 = 0; _key82 < _len82; _key82++) {
    values[_key82] = arguments[_key82];
  }

  return BorderBlockStart.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

BorderBlockStart.medium = function () {
  for (var _len83 = arguments.length, values = new Array(_len83), _key83 = 0; _key83 < _len83; _key83++) {
    values[_key83] = arguments[_key83];
  }

  return BorderBlockStart.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

BorderBlockStart.thick = function () {
  for (var _len84 = arguments.length, values = new Array(_len84), _key84 = 0; _key84 < _len84; _key84++) {
    values[_key84] = arguments[_key84];
  }

  return BorderBlockStart.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var BorderBlockEnd = (0, _utils.property)('borderBlockEnd');
exports.BorderBlockEnd = BorderBlockEnd;

BorderBlockEnd.hidden = function () {
  for (var _len85 = arguments.length, values = new Array(_len85), _key85 = 0; _key85 < _len85; _key85++) {
    values[_key85] = arguments[_key85];
  }

  return BorderBlockEnd.apply(void 0, [_constants.HIDDEN].concat(values));
};

BorderBlockEnd.dotted = function () {
  for (var _len86 = arguments.length, values = new Array(_len86), _key86 = 0; _key86 < _len86; _key86++) {
    values[_key86] = arguments[_key86];
  }

  return BorderBlockEnd.apply(void 0, [_constants.DOTTED].concat(values));
};

BorderBlockEnd.dashed = function () {
  for (var _len87 = arguments.length, values = new Array(_len87), _key87 = 0; _key87 < _len87; _key87++) {
    values[_key87] = arguments[_key87];
  }

  return BorderBlockEnd.apply(void 0, [_constants.DASHED].concat(values));
};

BorderBlockEnd.solid = function () {
  for (var _len88 = arguments.length, values = new Array(_len88), _key88 = 0; _key88 < _len88; _key88++) {
    values[_key88] = arguments[_key88];
  }

  return BorderBlockEnd.apply(void 0, [_constants.SOLID].concat(values));
};

BorderBlockEnd.double = function () {
  for (var _len89 = arguments.length, values = new Array(_len89), _key89 = 0; _key89 < _len89; _key89++) {
    values[_key89] = arguments[_key89];
  }

  return BorderBlockEnd.apply(void 0, [_constants.DOUBLE].concat(values));
};

BorderBlockEnd.groove = function () {
  for (var _len90 = arguments.length, values = new Array(_len90), _key90 = 0; _key90 < _len90; _key90++) {
    values[_key90] = arguments[_key90];
  }

  return BorderBlockEnd.apply(void 0, [_constants.GROOVE].concat(values));
};

BorderBlockEnd.ridge = function () {
  for (var _len91 = arguments.length, values = new Array(_len91), _key91 = 0; _key91 < _len91; _key91++) {
    values[_key91] = arguments[_key91];
  }

  return BorderBlockEnd.apply(void 0, [_constants.RIDGE].concat(values));
};

BorderBlockEnd.inset = function () {
  for (var _len92 = arguments.length, values = new Array(_len92), _key92 = 0; _key92 < _len92; _key92++) {
    values[_key92] = arguments[_key92];
  }

  return BorderBlockEnd.apply(void 0, [_constants.INSET].concat(values));
};

BorderBlockEnd.outset = function () {
  for (var _len93 = arguments.length, values = new Array(_len93), _key93 = 0; _key93 < _len93; _key93++) {
    values[_key93] = arguments[_key93];
  }

  return BorderBlockEnd.apply(void 0, [_constants.OUTSET].concat(values));
};

BorderBlockEnd.thin = function () {
  for (var _len94 = arguments.length, values = new Array(_len94), _key94 = 0; _key94 < _len94; _key94++) {
    values[_key94] = arguments[_key94];
  }

  return BorderBlockEnd.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

BorderBlockEnd.medium = function () {
  for (var _len95 = arguments.length, values = new Array(_len95), _key95 = 0; _key95 < _len95; _key95++) {
    values[_key95] = arguments[_key95];
  }

  return BorderBlockEnd.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

BorderBlockEnd.thick = function () {
  for (var _len96 = arguments.length, values = new Array(_len96), _key96 = 0; _key96 < _len96; _key96++) {
    values[_key96] = arguments[_key96];
  }

  return BorderBlockEnd.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var BorderInline = (0, _utils.property)('borderInline');
exports.BorderInline = BorderInline;

BorderInline.hidden = function () {
  for (var _len97 = arguments.length, values = new Array(_len97), _key97 = 0; _key97 < _len97; _key97++) {
    values[_key97] = arguments[_key97];
  }

  return BorderInline.apply(void 0, [_constants.HIDDEN].concat(values));
};

BorderInline.dotted = function () {
  for (var _len98 = arguments.length, values = new Array(_len98), _key98 = 0; _key98 < _len98; _key98++) {
    values[_key98] = arguments[_key98];
  }

  return BorderInline.apply(void 0, [_constants.DOTTED].concat(values));
};

BorderInline.dashed = function () {
  for (var _len99 = arguments.length, values = new Array(_len99), _key99 = 0; _key99 < _len99; _key99++) {
    values[_key99] = arguments[_key99];
  }

  return BorderInline.apply(void 0, [_constants.DASHED].concat(values));
};

BorderInline.solid = function () {
  for (var _len100 = arguments.length, values = new Array(_len100), _key100 = 0; _key100 < _len100; _key100++) {
    values[_key100] = arguments[_key100];
  }

  return BorderInline.apply(void 0, [_constants.SOLID].concat(values));
};

BorderInline.double = function () {
  for (var _len101 = arguments.length, values = new Array(_len101), _key101 = 0; _key101 < _len101; _key101++) {
    values[_key101] = arguments[_key101];
  }

  return BorderInline.apply(void 0, [_constants.DOUBLE].concat(values));
};

BorderInline.groove = function () {
  for (var _len102 = arguments.length, values = new Array(_len102), _key102 = 0; _key102 < _len102; _key102++) {
    values[_key102] = arguments[_key102];
  }

  return BorderInline.apply(void 0, [_constants.GROOVE].concat(values));
};

BorderInline.ridge = function () {
  for (var _len103 = arguments.length, values = new Array(_len103), _key103 = 0; _key103 < _len103; _key103++) {
    values[_key103] = arguments[_key103];
  }

  return BorderInline.apply(void 0, [_constants.RIDGE].concat(values));
};

BorderInline.inset = function () {
  for (var _len104 = arguments.length, values = new Array(_len104), _key104 = 0; _key104 < _len104; _key104++) {
    values[_key104] = arguments[_key104];
  }

  return BorderInline.apply(void 0, [_constants.INSET].concat(values));
};

BorderInline.outset = function () {
  for (var _len105 = arguments.length, values = new Array(_len105), _key105 = 0; _key105 < _len105; _key105++) {
    values[_key105] = arguments[_key105];
  }

  return BorderInline.apply(void 0, [_constants.OUTSET].concat(values));
};

BorderInline.thin = function () {
  for (var _len106 = arguments.length, values = new Array(_len106), _key106 = 0; _key106 < _len106; _key106++) {
    values[_key106] = arguments[_key106];
  }

  return BorderInline.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

BorderInline.medium = function () {
  for (var _len107 = arguments.length, values = new Array(_len107), _key107 = 0; _key107 < _len107; _key107++) {
    values[_key107] = arguments[_key107];
  }

  return BorderInline.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

BorderInline.thick = function () {
  for (var _len108 = arguments.length, values = new Array(_len108), _key108 = 0; _key108 < _len108; _key108++) {
    values[_key108] = arguments[_key108];
  }

  return BorderInline.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var BorderInlineStart = (0, _utils.property)('borderInlineStart');
exports.BorderInlineStart = BorderInlineStart;

BorderInlineStart.hidden = function () {
  for (var _len109 = arguments.length, values = new Array(_len109), _key109 = 0; _key109 < _len109; _key109++) {
    values[_key109] = arguments[_key109];
  }

  return BorderInlineStart.apply(void 0, [_constants.HIDDEN].concat(values));
};

BorderInlineStart.dotted = function () {
  for (var _len110 = arguments.length, values = new Array(_len110), _key110 = 0; _key110 < _len110; _key110++) {
    values[_key110] = arguments[_key110];
  }

  return BorderInlineStart.apply(void 0, [_constants.DOTTED].concat(values));
};

BorderInlineStart.dashed = function () {
  for (var _len111 = arguments.length, values = new Array(_len111), _key111 = 0; _key111 < _len111; _key111++) {
    values[_key111] = arguments[_key111];
  }

  return BorderInlineStart.apply(void 0, [_constants.DASHED].concat(values));
};

BorderInlineStart.solid = function () {
  for (var _len112 = arguments.length, values = new Array(_len112), _key112 = 0; _key112 < _len112; _key112++) {
    values[_key112] = arguments[_key112];
  }

  return BorderInlineStart.apply(void 0, [_constants.SOLID].concat(values));
};

BorderInlineStart.double = function () {
  for (var _len113 = arguments.length, values = new Array(_len113), _key113 = 0; _key113 < _len113; _key113++) {
    values[_key113] = arguments[_key113];
  }

  return BorderInlineStart.apply(void 0, [_constants.DOUBLE].concat(values));
};

BorderInlineStart.groove = function () {
  for (var _len114 = arguments.length, values = new Array(_len114), _key114 = 0; _key114 < _len114; _key114++) {
    values[_key114] = arguments[_key114];
  }

  return BorderInlineStart.apply(void 0, [_constants.GROOVE].concat(values));
};

BorderInlineStart.ridge = function () {
  for (var _len115 = arguments.length, values = new Array(_len115), _key115 = 0; _key115 < _len115; _key115++) {
    values[_key115] = arguments[_key115];
  }

  return BorderInlineStart.apply(void 0, [_constants.RIDGE].concat(values));
};

BorderInlineStart.inset = function () {
  for (var _len116 = arguments.length, values = new Array(_len116), _key116 = 0; _key116 < _len116; _key116++) {
    values[_key116] = arguments[_key116];
  }

  return BorderInlineStart.apply(void 0, [_constants.INSET].concat(values));
};

BorderInlineStart.outset = function () {
  for (var _len117 = arguments.length, values = new Array(_len117), _key117 = 0; _key117 < _len117; _key117++) {
    values[_key117] = arguments[_key117];
  }

  return BorderInlineStart.apply(void 0, [_constants.OUTSET].concat(values));
};

BorderInlineStart.thin = function () {
  for (var _len118 = arguments.length, values = new Array(_len118), _key118 = 0; _key118 < _len118; _key118++) {
    values[_key118] = arguments[_key118];
  }

  return BorderInlineStart.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

BorderInlineStart.medium = function () {
  for (var _len119 = arguments.length, values = new Array(_len119), _key119 = 0; _key119 < _len119; _key119++) {
    values[_key119] = arguments[_key119];
  }

  return BorderInlineStart.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

BorderInlineStart.thick = function () {
  for (var _len120 = arguments.length, values = new Array(_len120), _key120 = 0; _key120 < _len120; _key120++) {
    values[_key120] = arguments[_key120];
  }

  return BorderInlineStart.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

var BorderInlineEnd = (0, _utils.property)('borderInlineEnd');
exports.BorderInlineEnd = BorderInlineEnd;

BorderInlineEnd.hidden = function () {
  for (var _len121 = arguments.length, values = new Array(_len121), _key121 = 0; _key121 < _len121; _key121++) {
    values[_key121] = arguments[_key121];
  }

  return BorderInlineEnd.apply(void 0, [_constants.HIDDEN].concat(values));
};

BorderInlineEnd.dotted = function () {
  for (var _len122 = arguments.length, values = new Array(_len122), _key122 = 0; _key122 < _len122; _key122++) {
    values[_key122] = arguments[_key122];
  }

  return BorderInlineEnd.apply(void 0, [_constants.DOTTED].concat(values));
};

BorderInlineEnd.dashed = function () {
  for (var _len123 = arguments.length, values = new Array(_len123), _key123 = 0; _key123 < _len123; _key123++) {
    values[_key123] = arguments[_key123];
  }

  return BorderInlineEnd.apply(void 0, [_constants.DASHED].concat(values));
};

BorderInlineEnd.solid = function () {
  for (var _len124 = arguments.length, values = new Array(_len124), _key124 = 0; _key124 < _len124; _key124++) {
    values[_key124] = arguments[_key124];
  }

  return BorderInlineEnd.apply(void 0, [_constants.SOLID].concat(values));
};

BorderInlineEnd.double = function () {
  for (var _len125 = arguments.length, values = new Array(_len125), _key125 = 0; _key125 < _len125; _key125++) {
    values[_key125] = arguments[_key125];
  }

  return BorderInlineEnd.apply(void 0, [_constants.DOUBLE].concat(values));
};

BorderInlineEnd.groove = function () {
  for (var _len126 = arguments.length, values = new Array(_len126), _key126 = 0; _key126 < _len126; _key126++) {
    values[_key126] = arguments[_key126];
  }

  return BorderInlineEnd.apply(void 0, [_constants.GROOVE].concat(values));
};

BorderInlineEnd.ridge = function () {
  for (var _len127 = arguments.length, values = new Array(_len127), _key127 = 0; _key127 < _len127; _key127++) {
    values[_key127] = arguments[_key127];
  }

  return BorderInlineEnd.apply(void 0, [_constants.RIDGE].concat(values));
};

BorderInlineEnd.inset = function () {
  for (var _len128 = arguments.length, values = new Array(_len128), _key128 = 0; _key128 < _len128; _key128++) {
    values[_key128] = arguments[_key128];
  }

  return BorderInlineEnd.apply(void 0, [_constants.INSET].concat(values));
};

BorderInlineEnd.outset = function () {
  for (var _len129 = arguments.length, values = new Array(_len129), _key129 = 0; _key129 < _len129; _key129++) {
    values[_key129] = arguments[_key129];
  }

  return BorderInlineEnd.apply(void 0, [_constants.OUTSET].concat(values));
};

BorderInlineEnd.thin = function () {
  for (var _len130 = arguments.length, values = new Array(_len130), _key130 = 0; _key130 < _len130; _key130++) {
    values[_key130] = arguments[_key130];
  }

  return BorderInlineEnd.apply(void 0, [_constants.THIN, _constants.SOLID].concat(values));
};

BorderInlineEnd.medium = function () {
  for (var _len131 = arguments.length, values = new Array(_len131), _key131 = 0; _key131 < _len131; _key131++) {
    values[_key131] = arguments[_key131];
  }

  return BorderInlineEnd.apply(void 0, [_constants.MEDIUM, _constants.SOLID].concat(values));
};

BorderInlineEnd.thick = function () {
  for (var _len132 = arguments.length, values = new Array(_len132), _key132 = 0; _key132 < _len132; _key132++) {
    values[_key132] = arguments[_key132];
  }

  return BorderInlineEnd.apply(void 0, [_constants.THICK, _constants.SOLID].concat(values));
};

/* Width */
var BorderWidth = (0, _utils.property)('borderWidth');
exports.BorderWidth = BorderWidth;
BorderWidth.THIN = BorderWidth(_constants.THIN);
BorderWidth.MEDIUM = BorderWidth(_constants.MEDIUM);
BorderWidth.THICK = BorderWidth(_constants.THICK);
var BorderTopWidth = (0, _utils.property)('borderWidth');
exports.BorderTopWidth = BorderTopWidth;
BorderTopWidth.THIN = BorderTopWidth(_constants.THIN);
BorderTopWidth.MEDIUM = BorderTopWidth(_constants.MEDIUM);
BorderTopWidth.THICK = BorderTopWidth(_constants.THICK);
var BorderBottomWidth = (0, _utils.property)('borderWidth');
exports.BorderBottomWidth = BorderBottomWidth;
BorderBottomWidth.THIN = BorderBottomWidth(_constants.THIN);
BorderBottomWidth.MEDIUM = BorderBottomWidth(_constants.MEDIUM);
BorderBottomWidth.THICK = BorderBottomWidth(_constants.THICK);
var BorderLeftWidth = (0, _utils.property)('borderWidth');
exports.BorderLeftWidth = BorderLeftWidth;
BorderLeftWidth.THIN = BorderLeftWidth(_constants.THIN);
BorderLeftWidth.MEDIUM = BorderLeftWidth(_constants.MEDIUM);
BorderLeftWidth.THICK = BorderLeftWidth(_constants.THICK);
var BorderRightWidth = (0, _utils.property)('borderWidth');
exports.BorderRightWidth = BorderRightWidth;
BorderRightWidth.THIN = BorderRightWidth(_constants.THIN);
BorderRightWidth.MEDIUM = BorderRightWidth(_constants.MEDIUM);
BorderRightWidth.THICK = BorderRightWidth(_constants.THICK);
var BorderBlockWidth = (0, _utils.property)('borderBlockWidth');
exports.BorderBlockWidth = BorderBlockWidth;
BorderBlockWidth.THIN = BorderBlockWidth(_constants.THIN);
BorderBlockWidth.MEDIUM = BorderBlockWidth(_constants.MEDIUM);
BorderBlockWidth.THICK = BorderBlockWidth(_constants.THICK);
var BorderBlockStartWidth = (0, _utils.property)('borderBlockStartWidth');
exports.BorderBlockStartWidth = BorderBlockStartWidth;
BorderBlockStartWidth.THIN = BorderBlockStartWidth(_constants.THIN);
BorderBlockStartWidth.MEDIUM = BorderBlockStartWidth(_constants.MEDIUM);
BorderBlockStartWidth.THICK = BorderBlockStartWidth(_constants.THICK);
var BorderBlockEndWidth = (0, _utils.property)('borderBlockEndWidth');
exports.BorderBlockEndWidth = BorderBlockEndWidth;
BorderBlockEndWidth.THIN = BorderBlockEndWidth(_constants.THIN);
BorderBlockEndWidth.MEDIUM = BorderBlockEndWidth(_constants.MEDIUM);
BorderBlockEndWidth.THICK = BorderBlockEndWidth(_constants.THICK);
var BorderInlineWidth = (0, _utils.property)('borderInlineWidth');
exports.BorderInlineWidth = BorderInlineWidth;
BorderInlineWidth.THIN = BorderInlineWidth(_constants.THIN);
BorderInlineWidth.MEDIUM = BorderInlineWidth(_constants.MEDIUM);
BorderInlineWidth.THICK = BorderInlineWidth(_constants.THICK);
var BorderInlineStartWidth = (0, _utils.property)('borderInlineStartWidth');
exports.BorderInlineStartWidth = BorderInlineStartWidth;
BorderInlineStartWidth.THIN = BorderInlineStartWidth(_constants.THIN);
BorderInlineStartWidth.MEDIUM = BorderInlineStartWidth(_constants.MEDIUM);
BorderInlineStartWidth.THICK = BorderInlineStartWidth(_constants.THICK);
var BorderInlineEndWidth = (0, _utils.property)('borderInlineEndWidth');
exports.BorderInlineEndWidth = BorderInlineEndWidth;
BorderInlineEndWidth.THIN = BorderInlineEndWidth(_constants.THIN);
BorderInlineEndWidth.MEDIUM = BorderInlineEndWidth(_constants.MEDIUM);
BorderInlineEndWidth.THICK = BorderInlineEndWidth(_constants.THICK);

/* Style */
var BorderStyle = (0, _utils.property)('borderStyle');
exports.BorderStyle = BorderStyle;
BorderStyle.NONE = BorderStyle(_constants.NONE);
BorderStyle.HIDDEN = BorderStyle(_constants.HIDDEN);
BorderStyle.DOTTED = BorderStyle(_constants.DOTTED);
BorderStyle.DASHED = BorderStyle(_constants.DASHED);
BorderStyle.SOLID = BorderStyle(_constants.SOLID);
BorderStyle.DOUBLE = BorderStyle(_constants.DOUBLE);
BorderStyle.GROOVE = BorderStyle(_constants.GROOVE);
BorderStyle.RIDGE = BorderStyle(_constants.RIDGE);
BorderStyle.INSET = BorderStyle(_constants.INSET);
BorderStyle.OUTSET = BorderStyle(_constants.OUTSET);
var BorderTopStyle = (0, _utils.property)('borderStyle');
exports.BorderTopStyle = BorderTopStyle;
BorderTopStyle.NONE = BorderTopStyle(_constants.NONE);
BorderTopStyle.HIDDEN = BorderTopStyle(_constants.HIDDEN);
BorderTopStyle.DOTTED = BorderTopStyle(_constants.DOTTED);
BorderTopStyle.DASHED = BorderTopStyle(_constants.DASHED);
BorderTopStyle.SOLID = BorderTopStyle(_constants.SOLID);
BorderTopStyle.DOUBLE = BorderTopStyle(_constants.DOUBLE);
BorderTopStyle.GROOVE = BorderTopStyle(_constants.GROOVE);
BorderTopStyle.RIDGE = BorderTopStyle(_constants.RIDGE);
BorderTopStyle.INSET = BorderTopStyle(_constants.INSET);
BorderTopStyle.OUTSET = BorderTopStyle(_constants.OUTSET);
var BorderBottomStyle = (0, _utils.property)('borderBottomStyle');
exports.BorderBottomStyle = BorderBottomStyle;
BorderBottomStyle.NONE = BorderBottomStyle(_constants.NONE);
BorderBottomStyle.HIDDEN = BorderBottomStyle(_constants.HIDDEN);
BorderBottomStyle.DOTTED = BorderBottomStyle(_constants.DOTTED);
BorderBottomStyle.DASHED = BorderBottomStyle(_constants.DASHED);
BorderBottomStyle.SOLID = BorderBottomStyle(_constants.SOLID);
BorderBottomStyle.DOUBLE = BorderBottomStyle(_constants.DOUBLE);
BorderBottomStyle.GROOVE = BorderBottomStyle(_constants.GROOVE);
BorderBottomStyle.RIDGE = BorderBottomStyle(_constants.RIDGE);
BorderBottomStyle.INSET = BorderBottomStyle(_constants.INSET);
BorderBottomStyle.OUTSET = BorderBottomStyle(_constants.OUTSET);
var BorderLeftStyle = (0, _utils.property)('borderLeftStyle');
exports.BorderLeftStyle = BorderLeftStyle;
BorderLeftStyle.NONE = BorderLeftStyle(_constants.NONE);
BorderLeftStyle.HIDDEN = BorderLeftStyle(_constants.HIDDEN);
BorderLeftStyle.DOTTED = BorderLeftStyle(_constants.DOTTED);
BorderLeftStyle.DASHED = BorderLeftStyle(_constants.DASHED);
BorderLeftStyle.SOLID = BorderLeftStyle(_constants.SOLID);
BorderLeftStyle.DOUBLE = BorderLeftStyle(_constants.DOUBLE);
BorderLeftStyle.GROOVE = BorderLeftStyle(_constants.GROOVE);
BorderLeftStyle.RIDGE = BorderLeftStyle(_constants.RIDGE);
BorderLeftStyle.INSET = BorderLeftStyle(_constants.INSET);
BorderLeftStyle.OUTSET = BorderLeftStyle(_constants.OUTSET);
var BorderRightStyle = (0, _utils.property)('borderRightStyle');
exports.BorderRightStyle = BorderRightStyle;
BorderRightStyle.NONE = BorderRightStyle(_constants.NONE);
BorderRightStyle.HIDDEN = BorderRightStyle(_constants.HIDDEN);
BorderRightStyle.DOTTED = BorderRightStyle(_constants.DOTTED);
BorderRightStyle.DASHED = BorderRightStyle(_constants.DASHED);
BorderRightStyle.SOLID = BorderRightStyle(_constants.SOLID);
BorderRightStyle.DOUBLE = BorderRightStyle(_constants.DOUBLE);
BorderRightStyle.GROOVE = BorderRightStyle(_constants.GROOVE);
BorderRightStyle.RIDGE = BorderRightStyle(_constants.RIDGE);
BorderRightStyle.INSET = BorderRightStyle(_constants.INSET);
BorderRightStyle.OUTSET = BorderRightStyle(_constants.OUTSET);
var BorderBlockStyle = (0, _utils.property)('borderBlockStyle');
exports.BorderBlockStyle = BorderBlockStyle;
BorderBlockStyle.NONE = BorderBlockStyle(_constants.NONE);
BorderBlockStyle.HIDDEN = BorderBlockStyle(_constants.HIDDEN);
BorderBlockStyle.DOTTED = BorderBlockStyle(_constants.DOTTED);
BorderBlockStyle.DASHED = BorderBlockStyle(_constants.DASHED);
BorderBlockStyle.SOLID = BorderBlockStyle(_constants.SOLID);
BorderBlockStyle.DOUBLE = BorderBlockStyle(_constants.DOUBLE);
BorderBlockStyle.GROOVE = BorderBlockStyle(_constants.GROOVE);
BorderBlockStyle.RIDGE = BorderBlockStyle(_constants.RIDGE);
BorderBlockStyle.INSET = BorderBlockStyle(_constants.INSET);
BorderBlockStyle.OUTSET = BorderBlockStyle(_constants.OUTSET);
var BorderBlockStartStyle = (0, _utils.property)('borderBlockStartStyle');
exports.BorderBlockStartStyle = BorderBlockStartStyle;
BorderBlockStartStyle.NONE = BorderBlockStartStyle(_constants.NONE);
BorderBlockStartStyle.HIDDEN = BorderBlockStartStyle(_constants.HIDDEN);
BorderBlockStartStyle.DOTTED = BorderBlockStartStyle(_constants.DOTTED);
BorderBlockStartStyle.DASHED = BorderBlockStartStyle(_constants.DASHED);
BorderBlockStartStyle.SOLID = BorderBlockStartStyle(_constants.SOLID);
BorderBlockStartStyle.DOUBLE = BorderBlockStartStyle(_constants.DOUBLE);
BorderBlockStartStyle.GROOVE = BorderBlockStartStyle(_constants.GROOVE);
BorderBlockStartStyle.RIDGE = BorderBlockStartStyle(_constants.RIDGE);
BorderBlockStartStyle.INSET = BorderBlockStartStyle(_constants.INSET);
BorderBlockStartStyle.OUTSET = BorderBlockStartStyle(_constants.OUTSET);
var BorderBlockEndStyle = (0, _utils.property)('borderBlockEndStyle');
exports.BorderBlockEndStyle = BorderBlockEndStyle;
BorderBlockEndStyle.NONE = BorderBlockEndStyle(_constants.NONE);
BorderBlockEndStyle.HIDDEN = BorderBlockEndStyle(_constants.HIDDEN);
BorderBlockEndStyle.DOTTED = BorderBlockEndStyle(_constants.DOTTED);
BorderBlockEndStyle.DASHED = BorderBlockEndStyle(_constants.DASHED);
BorderBlockEndStyle.SOLID = BorderBlockEndStyle(_constants.SOLID);
BorderBlockEndStyle.DOUBLE = BorderBlockEndStyle(_constants.DOUBLE);
BorderBlockEndStyle.GROOVE = BorderBlockEndStyle(_constants.GROOVE);
BorderBlockEndStyle.RIDGE = BorderBlockEndStyle(_constants.RIDGE);
BorderBlockEndStyle.INSET = BorderBlockEndStyle(_constants.INSET);
BorderBlockEndStyle.OUTSET = BorderBlockEndStyle(_constants.OUTSET);
var BorderInlineStyle = (0, _utils.property)('borderInlineStyle');
exports.BorderInlineStyle = BorderInlineStyle;
BorderInlineStyle.NONE = BorderInlineStyle(_constants.NONE);
BorderInlineStyle.HIDDEN = BorderInlineStyle(_constants.HIDDEN);
BorderInlineStyle.DOTTED = BorderInlineStyle(_constants.DOTTED);
BorderInlineStyle.DASHED = BorderInlineStyle(_constants.DASHED);
BorderInlineStyle.SOLID = BorderInlineStyle(_constants.SOLID);
BorderInlineStyle.DOUBLE = BorderInlineStyle(_constants.DOUBLE);
BorderInlineStyle.GROOVE = BorderInlineStyle(_constants.GROOVE);
BorderInlineStyle.RIDGE = BorderInlineStyle(_constants.RIDGE);
BorderInlineStyle.INSET = BorderInlineStyle(_constants.INSET);
BorderInlineStyle.OUTSET = BorderInlineStyle(_constants.OUTSET);
var BorderInlineStartStyle = (0, _utils.property)('borderInlineStartStyle');
exports.BorderInlineStartStyle = BorderInlineStartStyle;
BorderInlineStartStyle.NONE = BorderInlineStartStyle(_constants.NONE);
BorderInlineStartStyle.HIDDEN = BorderInlineStartStyle(_constants.HIDDEN);
BorderInlineStartStyle.DOTTED = BorderInlineStartStyle(_constants.DOTTED);
BorderInlineStartStyle.DASHED = BorderInlineStartStyle(_constants.DASHED);
BorderInlineStartStyle.SOLID = BorderInlineStartStyle(_constants.SOLID);
BorderInlineStartStyle.DOUBLE = BorderInlineStartStyle(_constants.DOUBLE);
BorderInlineStartStyle.GROOVE = BorderInlineStartStyle(_constants.GROOVE);
BorderInlineStartStyle.RIDGE = BorderInlineStartStyle(_constants.RIDGE);
BorderInlineStartStyle.INSET = BorderInlineStartStyle(_constants.INSET);
BorderInlineStartStyle.OUTSET = BorderInlineStartStyle(_constants.OUTSET);
var BorderInlineEndStyle = (0, _utils.property)('borderInlineEndStyle');
exports.BorderInlineEndStyle = BorderInlineEndStyle;
BorderInlineEndStyle.NONE = BorderInlineEndStyle(_constants.NONE);
BorderInlineEndStyle.HIDDEN = BorderInlineEndStyle(_constants.HIDDEN);
BorderInlineEndStyle.DOTTED = BorderInlineEndStyle(_constants.DOTTED);
BorderInlineEndStyle.DASHED = BorderInlineEndStyle(_constants.DASHED);
BorderInlineEndStyle.SOLID = BorderInlineEndStyle(_constants.SOLID);
BorderInlineEndStyle.DOUBLE = BorderInlineEndStyle(_constants.DOUBLE);
BorderInlineEndStyle.GROOVE = BorderInlineEndStyle(_constants.GROOVE);
BorderInlineEndStyle.RIDGE = BorderInlineEndStyle(_constants.RIDGE);
BorderInlineEndStyle.INSET = BorderInlineEndStyle(_constants.INSET);
BorderInlineEndStyle.OUTSET = BorderInlineEndStyle(_constants.OUTSET);

/* Colors */
var BorderColor = (0, _utils.property)('borderColor');
exports.BorderColor = BorderColor;
var BorderTopColor = (0, _utils.property)('borderTopColor');
exports.BorderTopColor = BorderTopColor;
var BorderBottomColor = (0, _utils.property)('borderBottomColor');
exports.BorderBottomColor = BorderBottomColor;
var BorderLeftColor = (0, _utils.property)('borderLeftColor');
exports.BorderLeftColor = BorderLeftColor;
var BorderRightColor = (0, _utils.property)('borderRightColor');
exports.BorderRightColor = BorderRightColor;
var BorderBlockColor = (0, _utils.property)('borderBlockColor');
exports.BorderBlockColor = BorderBlockColor;
var BorderBlockStartColor = (0, _utils.property)('borderBlockStartColor');
exports.BorderBlockStartColor = BorderBlockStartColor;
var BorderBlockEndColor = (0, _utils.property)('borderBlockEndColor');
exports.BorderBlockEndColor = BorderBlockEndColor;
var BorderInlineColor = (0, _utils.property)('borderInlineColor');
exports.BorderInlineColor = BorderInlineColor;
var BorderInlineStartColor = (0, _utils.property)('borderInlineStartColor');
exports.BorderInlineStartColor = BorderInlineStartColor;
var BorderInlineEndColor = (0, _utils.property)('borderInlineEndColor');
exports.BorderInlineEndColor = BorderInlineEndColor;

/* Radius */
var BorderRadius = (0, _utils.property)('borderRadius');
exports.BorderRadius = BorderRadius;
var BorderTopLeftRadius = (0, _utils.property)('borderTopLeftRadius');
exports.BorderTopLeftRadius = BorderTopLeftRadius;
var BorderTopRightRadius = (0, _utils.property)('borderTopRightRadius');
exports.BorderTopRightRadius = BorderTopRightRadius;
var BorderBottomLeftRadius = (0, _utils.property)('borderBottomLeftRadius');
exports.BorderBottomLeftRadius = BorderBottomLeftRadius;
var BorderBottomRightRadius = (0, _utils.property)('borderBottomRightRadius');
exports.BorderBottomRightRadius = BorderBottomRightRadius;
var BorderStartStartRadius = (0, _utils.property)('borderStartStartRadius');
exports.BorderStartStartRadius = BorderStartStartRadius;
var BorderStartEndRadius = (0, _utils.property)('borderStartEndRadius');
exports.BorderStartEndRadius = BorderStartEndRadius;
var BorderEndStartRadius = (0, _utils.property)('borderEndStartRadius');
exports.BorderEndStartRadius = BorderEndStartRadius;
var BorderEndEndRadius = (0, _utils.property)('borderEndEndRadius');
exports.BorderEndEndRadius = BorderEndEndRadius;

/* Image */
var BorderImage = (0, _utils.property)('borderImage');
exports.BorderImage = BorderImage;
var BorderImageOutset = (0, _utils.property)('borderImageOutset');
exports.BorderImageOutset = BorderImageOutset;
var BorderImageRepeat = (0, _utils.property)('borderImageRepeat');
exports.BorderImageRepeat = BorderImageRepeat;
BorderImageRepeat.STRETCH = BorderImageRepeat(_constants.STRETCH);
BorderImageRepeat.REPEAT = BorderImageRepeat(_constants.REPEAT);
BorderImageRepeat.ROUND = BorderImageRepeat(_constants.ROUND);
BorderImageRepeat.SPACE = BorderImageRepeat(_constants.SPACE);
var BorderImageSlice = (0, _utils.property)('borderImageSlice');
exports.BorderImageSlice = BorderImageSlice;
var BorderImageSource = (0, _utils.property)('borderImageSource');
exports.BorderImageSource = BorderImageSource;
BorderImageSource.NONE = BorderImageSource(_constants.NONE);
var BorderImageWidth = (0, _utils.property)('borderImageWidth');
exports.BorderImageWidth = BorderImageWidth;
BorderImageWidth.AUTO = BorderImageWidth(_constants.AUTO);

/***/ }),

/***/ "./src/properties/visual/box-shadow.js":
/*!*********************************************!*\
  !*** ./src/properties/visual/box-shadow.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxShadow = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var BoxShadow = (0, _utils.property)('boxShadow');
exports.BoxShadow = BoxShadow;
BoxShadow.NONE = BoxShadow(_constants.NONE);

/***/ }),

/***/ "./src/properties/visual/clip.js":
/*!***************************************!*\
  !*** ./src/properties/visual/clip.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClipRule = exports.ClipPath = exports.Clip = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var _methods = __webpack_require__(/*! ../../methods */ "./src/methods/index.js");

var Clip = (0, _utils.property)('clip');
exports.Clip = Clip;
Clip.AUTO = Clip(_constants.AUTO);

Clip.rect = function () {
  return Clip(_methods.rect.apply(void 0, arguments));
};

var ClipPath = (0, _utils.property)('clipPath');
exports.ClipPath = ClipPath;
ClipPath.NONE = ClipPath(_constants.NONE);
ClipPath.FILL_BOX = ClipPath(_constants.FILL_BOX);
ClipPath.STROKE_BOX = ClipPath(_constants.STROKE_BOX);
ClipPath.VIEW_BOX = ClipPath(_constants.VIEW_BOX);
ClipPath.MARGIN_BOX = ClipPath(_constants.MARGIN_BOX);
ClipPath.BORDER_BOX = ClipPath(_constants.BORDER_BOX);
ClipPath.PADDING_BOX = ClipPath(_constants.PADDING_BOX);
ClipPath.CONTENT_BOX = ClipPath(_constants.CONTENT_BOX);
var ClipRule = (0, _utils.property)('clipRule');
exports.ClipRule = ClipRule;
ClipRule.NONZERO = ClipRule(_constants.NONZERO);
ClipRule.EVENODD = ClipRule(_constants.EVENODD);

/***/ }),

/***/ "./src/properties/visual/color.js":
/*!****************************************!*\
  !*** ./src/properties/visual/color.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Opacity = exports.CaretColor = exports.Color = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Color = (0, _utils.property)('color');
exports.Color = Color;
Color.TRANSPARENT = Color(_constants.TRANSPARENT);
var CaretColor = (0, _utils.property)('caretColor');
exports.CaretColor = CaretColor;
CaretColor.AUTO = CaretColor(_constants.AUTO);
CaretColor.TRANSPARENT = CaretColor(_constants.TRANSPARENT);
var Opacity = (0, _utils.property)('opacity');
exports.Opacity = Opacity;

/***/ }),

/***/ "./src/properties/visual/counter.js":
/*!******************************************!*\
  !*** ./src/properties/visual/counter.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CounterIncrement = exports.CounterReset = exports.CounterSet = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var CounterSet = (0, _utils.property)('counterSet');
exports.CounterSet = CounterSet;
CounterSet.NONE = CounterSet(_constants.NONE);
var CounterReset = (0, _utils.property)('counterReset');
exports.CounterReset = CounterReset;
CounterReset.NONE = CounterReset(_constants.NONE);
var CounterIncrement = (0, _utils.property)('counterIncrement');
exports.CounterIncrement = CounterIncrement;
CounterIncrement.NONE = CounterIncrement(_constants.NONE);

/***/ }),

/***/ "./src/properties/visual/cursor.js":
/*!*****************************************!*\
  !*** ./src/properties/visual/cursor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cursor = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Cursor = (0, _utils.property)('cursor');
exports.Cursor = Cursor;
Cursor.AUTO = Cursor(_constants.AUTO);
Cursor.DEFAULT = Cursor(_constants.DEFAULT);
Cursor.NONE = Cursor(_constants.NONE);
Cursor.CONTEXT_MENU = Cursor(_constants.CONTEXT_MENU);
Cursor.HELP = Cursor(_constants.HELP);
Cursor.POINTER = Cursor(_constants.POINTER);
Cursor.PROGRESS = Cursor(_constants.PROGRESS);
Cursor.WAIT = Cursor(_constants.WAIT);
Cursor.CELL = Cursor(_constants.CELL);
Cursor.CROSSHAIR = Cursor(_constants.CROSSHAIR);
Cursor.TEXT = Cursor(_constants.TEXT);
Cursor.VERTICAL_TEXT = Cursor(_constants.VERTICAL_TEXT);
Cursor.ALIAS = Cursor(_constants.ALIAS);
Cursor.COPY = Cursor(_constants.COPY);
Cursor.MOVE = Cursor(_constants.MOVE);
Cursor.NO_DROP = Cursor(_constants.NO_DROP);
Cursor.NOT_ALLOWED = Cursor(_constants.NOT_ALLOWED);
Cursor.GRAB = Cursor(_constants.GRAB);
Cursor.GRABBING = Cursor(_constants.GRABBING);
Cursor.ALL_SCROLL = Cursor(_constants.ALL_SCROLL);
Cursor.COL_RESIZE = Cursor(_constants.COL_RESIZE);
Cursor.ROW_RESIZE = Cursor(_constants.ROW_RESIZE);
Cursor.N_RESIZE = Cursor(_constants.N_RESIZE);
Cursor.E_RESIZE = Cursor(_constants.E_RESIZE);
Cursor.S_RESIZE = Cursor(_constants.S_RESIZE);
Cursor.W_RESIZE = Cursor(_constants.W_RESIZE);
Cursor.NE_RESIZE = Cursor(_constants.NE_RESIZE);
Cursor.NW_RESIZE = Cursor(_constants.NW_RESIZE);
Cursor.SE_RESIZE = Cursor(_constants.SE_RESIZE);
Cursor.SW_RESIZE = Cursor(_constants.SW_RESIZE);
Cursor.EW_RESIZE = Cursor(_constants.EW_RESIZE);
Cursor.NS_RESIZE = Cursor(_constants.NS_RESIZE);
Cursor.NESW_RESIZE = Cursor(_constants.NESW_RESIZE);
Cursor.NWSE_RESIZE = Cursor(_constants.NWSE_RESIZE);
Cursor.ZOOM_IN = Cursor(_constants.ZOOM_IN);
Cursor.ZOOM_OUT = Cursor(_constants.ZOOM_OUT);

/***/ }),

/***/ "./src/properties/visual/fill.js":
/*!***************************************!*\
  !*** ./src/properties/visual/fill.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FillOpacity = exports.FillRepeat = exports.FillSize = exports.FillPosition = exports.FillOrigin = exports.FillImage = exports.FillColor = exports.FillBreak = exports.FillRule = exports.Fill = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Fill = (0, _utils.property)('fill');
exports.Fill = Fill;
var FillRule = (0, _utils.property)('fillRule');
exports.FillRule = FillRule;
FillRule.NONZERO = FillRule(_constants.NONZERO);
FillRule.EVENODD = FillRule(_constants.EVENODD);
var FillBreak = (0, _utils.property)('fillBreak');
exports.FillBreak = FillBreak;
FillBreak.BOUNDING_BOX = FillBreak(_constants.BOUNDING_BOX);
FillBreak.SLICE = FillBreak(_constants.SLICE);
FillBreak.CLONE = FillBreak(_constants.CLONE);
var FillColor = (0, _utils.property)('fillColor');
exports.FillColor = FillColor;
FillColor.TRANSPARENT = FillColor(_constants.TRANSPARENT);
var FillImage = (0, _utils.property)('fillImage');
exports.FillImage = FillImage;
FillImage.NONE = FillImage(_constants.NONE);
var FillOrigin = (0, _utils.property)('fillOrigin');
exports.FillOrigin = FillOrigin;
FillOrigin.MATCH_PARENT = FillOrigin(_constants.MATCH_PARENT);
FillOrigin.FILL_BOX = FillOrigin(_constants.FILL_BOX);
FillOrigin.STROKE_BOX = FillOrigin(_constants.STROKE_BOX);
FillOrigin.CONTENT_BOX = FillOrigin(_constants.CONTENT_BOX);
FillOrigin.PADDING_BOX = FillOrigin(_constants.PADDING_BOX);
FillOrigin.BORDER_BOX = FillOrigin(_constants.BORDER_BOX);
var FillPosition = (0, _utils.property)('fillPosition');
exports.FillPosition = FillPosition;
FillPosition.TOP = FillPosition(_constants.TOP);
FillPosition.RIGHT = FillPosition(_constants.RIGHT);
FillPosition.LEFT = FillPosition(_constants.LEFT);
FillPosition.BOTTOM = FillPosition(_constants.BOTTOM);
FillPosition.TOP_LEFT = FillPosition(_constants.TOP, _constants.LEFT);
FillPosition.TOP_RIGHT = FillPosition(_constants.TOP, _constants.RIGHT);
FillPosition.BOTTOM_LEFT = FillPosition(_constants.BOTTOM, _constants.LEFT);
FillPosition.BOTTOM_RIGHT = FillPosition(_constants.BOTTOM, _constants.RIGHT);
var FillSize = (0, _utils.property)('fillSize');
exports.FillSize = FillSize;
FillSize.AUTO = FillSize(_constants.AUTO);
var FillRepeat = (0, _utils.property)('fillRepeat');
exports.FillRepeat = FillRepeat;
FillRepeat.REPEAT = FillRepeat(_constants.REPEAT);
FillRepeat.REPEAT_X = FillRepeat(_constants.REPEAT_X);
FillRepeat.REPEAT_Y = FillRepeat(_constants.REPEAT_Y);
FillRepeat.SPACE = FillRepeat(_constants.SPACE);
FillRepeat.AROUND = FillRepeat(_constants.AROUND);
FillRepeat.NO_REPEAT = FillRepeat(_constants.NO_REPEAT);
var FillOpacity = (0, _utils.property)('fillOpacity');
exports.FillOpacity = FillOpacity;

/***/ }),

/***/ "./src/properties/visual/filter.js":
/*!*****************************************!*\
  !*** ./src/properties/visual/filter.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightingColor = exports.ColorInterpolationFilters = exports.FloodOpacity = exports.FloodColor = exports.Filter = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var _methods = __webpack_require__(/*! ../../methods */ "./src/methods/index.js");

var Filter = (0, _utils.property)('filter');
exports.Filter = Filter;
Filter.NONE = Filter(_constants.NONE);

Filter.blur = function () {
  return Filter(_methods.blur.apply(void 0, arguments));
};

Filter.brightness = function () {
  return Filter(_methods.brightness.apply(void 0, arguments));
};

Filter.contrast = function () {
  return Filter(_methods.contrast.apply(void 0, arguments));
};

Filter.dropShadow = function () {
  return Filter(_methods.dropShadow.apply(void 0, arguments));
};

Filter.grayscale = function () {
  return Filter(_methods.grayscale.apply(void 0, arguments));
};

Filter.hueRotate = function () {
  return Filter(_methods.hueRotate.apply(void 0, arguments));
};

Filter.invert = function () {
  return Filter(_methods.invert.apply(void 0, arguments));
};

Filter.opacity = function () {
  return Filter(_methods.opacity.apply(void 0, arguments));
};

Filter.sepia = function () {
  return Filter(_methods.sepia.apply(void 0, arguments));
};

Filter.saturate = function () {
  return Filter(_methods.saturate.apply(void 0, arguments));
};

var FloodColor = (0, _utils.property)('floodColor');
exports.FloodColor = FloodColor;
FloodColor.TRANSPARENT = FloodColor(_constants.TRANSPARENT);
var FloodOpacity = (0, _utils.property)('floodOpacity');
exports.FloodOpacity = FloodOpacity;
var ColorInterpolationFilters = (0, _utils.property)('colorInterpolationFilters');
exports.ColorInterpolationFilters = ColorInterpolationFilters;
ColorInterpolationFilters.AUTO = ColorInterpolationFilters(_constants.AUTO);
ColorInterpolationFilters.SRGB = ColorInterpolationFilters(_constants.SRGB);
ColorInterpolationFilters.LINEARRGB = ColorInterpolationFilters(_constants.LINEARRGB);
var LightingColor = (0, _utils.property)('lightingColor');
exports.LightingColor = LightingColor;
LightingColor.TRANSPARENT = LightingColor(_constants.TRANSPARENT);

/***/ }),

/***/ "./src/properties/visual/index.js":
/*!****************************************!*\
  !*** ./src/properties/visual/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _background = __webpack_require__(/*! ./background */ "./src/properties/visual/background.js");

Object.keys(_background).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _background[key];
    }
  });
});

var _blend = __webpack_require__(/*! ./blend */ "./src/properties/visual/blend.js");

Object.keys(_blend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _blend[key];
    }
  });
});

var _border = __webpack_require__(/*! ./border */ "./src/properties/visual/border.js");

Object.keys(_border).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _border[key];
    }
  });
});

var _boxShadow = __webpack_require__(/*! ./box-shadow */ "./src/properties/visual/box-shadow.js");

Object.keys(_boxShadow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _boxShadow[key];
    }
  });
});

var _outline = __webpack_require__(/*! ./outline */ "./src/properties/visual/outline.js");

Object.keys(_outline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _outline[key];
    }
  });
});

var _color = __webpack_require__(/*! ./color */ "./src/properties/visual/color.js");

Object.keys(_color).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _color[key];
    }
  });
});

var _counter = __webpack_require__(/*! ./counter */ "./src/properties/visual/counter.js");

Object.keys(_counter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _counter[key];
    }
  });
});

var _cursor = __webpack_require__(/*! ./cursor */ "./src/properties/visual/cursor.js");

Object.keys(_cursor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cursor[key];
    }
  });
});

var _fill = __webpack_require__(/*! ./fill */ "./src/properties/visual/fill.js");

Object.keys(_fill).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fill[key];
    }
  });
});

var _filter = __webpack_require__(/*! ./filter */ "./src/properties/visual/filter.js");

Object.keys(_filter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filter[key];
    }
  });
});

var _list = __webpack_require__(/*! ./list */ "./src/properties/visual/list.js");

Object.keys(_list).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _list[key];
    }
  });
});

var _clip = __webpack_require__(/*! ./clip */ "./src/properties/visual/clip.js");

Object.keys(_clip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _clip[key];
    }
  });
});

var _mask = __webpack_require__(/*! ./mask */ "./src/properties/visual/mask.js");

Object.keys(_mask).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mask[key];
    }
  });
});

var _media = __webpack_require__(/*! ./media */ "./src/properties/visual/media.js");

Object.keys(_media).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _media[key];
    }
  });
});

var _shape = __webpack_require__(/*! ./shape */ "./src/properties/visual/shape.js");

Object.keys(_shape).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _shape[key];
    }
  });
});

var _stroke = __webpack_require__(/*! ./stroke */ "./src/properties/visual/stroke.js");

Object.keys(_stroke).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stroke[key];
    }
  });
});

var _visibility = __webpack_require__(/*! ./visibility */ "./src/properties/visual/visibility.js");

Object.keys(_visibility).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _visibility[key];
    }
  });
});

/***/ }),

/***/ "./src/properties/visual/list.js":
/*!***************************************!*\
  !*** ./src/properties/visual/list.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkerSide = exports.ListStylePosition = exports.ListStyleImage = exports.ListStyleType = exports.ListStyle = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var ListStyle = (0, _utils.property)('listStyle');
exports.ListStyle = ListStyle;
var ListStyleType = (0, _utils.property)('listStyleType');
exports.ListStyleType = ListStyleType;
ListStyleType.NONE = ListStyleType(_constants.NONE);
ListStyleType.DISC = ListStyleType(_constants.DISC);
ListStyleType.CIRCLE = ListStyleType(_constants.CIRCLE);
ListStyleType.SQUARE = ListStyleType(_constants.SQUARE);
ListStyleType.DECIMAL = ListStyleType(_constants.DECIMAL);
ListStyleType.DECIMAL_LEADING_ZERO = ListStyleType(_constants.DECIMAL_LEADING_ZERO);
ListStyleType.LOWER_ROMAN = ListStyleType(_constants.LOWER_ROMAN);
ListStyleType.UPPER_ROMAN = ListStyleType(_constants.UPPER_ROMAN);
ListStyleType.LOWER_GREEK = ListStyleType(_constants.LOWER_GREEK);
ListStyleType.UPPER_GREEK = ListStyleType(_constants.UPPER_GREEK);
ListStyleType.LOWER_LATIN = ListStyleType(_constants.LOWER_LATIN);
ListStyleType.UPPER_LATIN = ListStyleType(_constants.UPPER_LATIN);
ListStyleType.ARMENIAN = ListStyleType(_constants.ARMENIAN);
ListStyleType.GEORGIAN = ListStyleType(_constants.GEORGIAN);
ListStyleType.LOWER_ALPHA = ListStyleType(_constants.LOWER_ALPHA);
ListStyleType.UPPER_ALPHA = ListStyleType(_constants.UPPER_ALPHA);
var ListStyleImage = (0, _utils.property)('listStyleImage');
exports.ListStyleImage = ListStyleImage;
ListStyleImage.NONE = ListStyleImage(_constants.NONE);
var ListStylePosition = (0, _utils.property)('listStylePosition');
exports.ListStylePosition = ListStylePosition;
ListStylePosition.INSIDE = ListStylePosition(_constants.INSIDE);
ListStylePosition.OUTSIDE = ListStylePosition(_constants.OUTSIDE);
var MarkerSide = (0, _utils.property)('markerSide');
exports.MarkerSide = MarkerSide;
MarkerSide.LIST_ITEM = MarkerSide(_constants.LIST_ITEM);
MarkerSide.LIST_CONTAINER = MarkerSide(_constants.LIST_CONTAINER);

/***/ }),

/***/ "./src/properties/visual/mask.js":
/*!***************************************!*\
  !*** ./src/properties/visual/mask.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaskType = exports.MaskBorderRepeat = exports.MaskBorderOutset = exports.MaskBorderWidth = exports.MaskBorderSlice = exports.MaskBorderMode = exports.MaskBorderSource = exports.MaskBorder = exports.MaskComposite = exports.MaskSize = exports.MaskOrigin = exports.MaskClip = exports.MaskPosition = exports.MaskRepeat = exports.MaskMode = exports.MaskImage = exports.Mask = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Mask = (0, _utils.property)('mask');
exports.Mask = Mask;
var MaskImage = (0, _utils.property)('maskImage');
exports.MaskImage = MaskImage;
MaskImage.NONE = MaskImage(_constants.NONE);
var MaskMode = (0, _utils.property)('maskMode');
exports.MaskMode = MaskMode;
MaskMode.AUTO = MaskMode(_constants.AUTO);
MaskMode.ALPHA = MaskMode(_constants.ALPHA);
MaskMode.LUMINANCE = MaskMode(_constants.LUMINANCE);
var MaskRepeat = (0, _utils.property)('maskRepeat');
exports.MaskRepeat = MaskRepeat;
MaskRepeat.REPEAT = MaskRepeat(_constants.REPEAT);
MaskRepeat.REPEAT_X = MaskRepeat(_constants.REPEAT_X);
MaskRepeat.REPEAT_Y = MaskRepeat(_constants.REPEAT_Y);
MaskRepeat.SPACE = MaskRepeat(_constants.SPACE);
MaskRepeat.ROUND = MaskRepeat(_constants.ROUND);
MaskRepeat.NO_REPEAT = MaskRepeat(_constants.NO_REPEAT);
var MaskPosition = (0, _utils.property)('maskPosition');
exports.MaskPosition = MaskPosition;
MaskPosition.CENTER = MaskPosition(_constants.CENTER);
MaskPosition.TOP = MaskPosition(_constants.TOP);
MaskPosition.LEFT = MaskPosition(_constants.LEFT);
MaskPosition.RIGHT = MaskPosition(_constants.RIGHT);
MaskPosition.BOTTOM = MaskPosition(_constants.BOTTOM);
var MaskClip = (0, _utils.property)('maskClip');
exports.MaskClip = MaskClip;
MaskClip.NO_CLIP = MaskClip(_constants.NO_CLIP);
MaskClip.FILL_BOX = MaskClip(_constants.FILL_BOX);
MaskClip.STROKE_BOX = MaskClip(_constants.STROKE_BOX);
MaskClip.VIEW_BOX = MaskClip(_constants.VIEW_BOX);
MaskClip.MARGIN_BOX = MaskClip(_constants.MARGIN_BOX);
MaskClip.BORDER_BOX = MaskClip(_constants.BORDER_BOX);
MaskClip.PADDING_BOX = MaskClip(_constants.PADDING_BOX);
MaskClip.CONTENT_BOX = MaskClip(_constants.CONTENT_BOX);
var MaskOrigin = (0, _utils.property)('maskOrigin');
exports.MaskOrigin = MaskOrigin;
MaskOrigin.FILL_BOX = MaskOrigin(_constants.FILL_BOX);
MaskOrigin.STROKE_BOX = MaskOrigin(_constants.STROKE_BOX);
MaskOrigin.VIEW_BOX = MaskOrigin(_constants.VIEW_BOX);
MaskOrigin.MARGIN_BOX = MaskOrigin(_constants.MARGIN_BOX);
MaskOrigin.BORDER_BOX = MaskOrigin(_constants.BORDER_BOX);
MaskOrigin.PADDING_BOX = MaskOrigin(_constants.PADDING_BOX);
MaskOrigin.CONTENT_BOX = MaskOrigin(_constants.CONTENT_BOX);
var MaskSize = (0, _utils.property)('maskSize');
exports.MaskSize = MaskSize;
MaskSize.AUTO = MaskSize(_constants.AUTO);
MaskSize.COVER = MaskSize(_constants.COVER);
MaskSize.CONTAIN = MaskSize(_constants.CONTAIN);
var MaskComposite = (0, _utils.property)('maskComposite');
exports.MaskComposite = MaskComposite;
MaskComposite.ADD = MaskComposite(_constants.ADD);
MaskComposite.SUBTRACT = MaskComposite(_constants.SUBTRACT);
MaskComposite.INTERSECT = MaskComposite(_constants.INTERSECT);
MaskComposite.EXCLUDE = MaskComposite(_constants.EXCLUDE);
var MaskBorder = (0, _utils.property)('maskBorder');
exports.MaskBorder = MaskBorder;
var MaskBorderSource = (0, _utils.property)('maskBorderSource');
exports.MaskBorderSource = MaskBorderSource;
MaskBorderSource.NONE = MaskBorderSource(_constants.NONE);
var MaskBorderMode = (0, _utils.property)('maskBorderMode');
exports.MaskBorderMode = MaskBorderMode;
MaskBorderMode.ALPHA = MaskBorderMode(_constants.ALPHA);
MaskBorderMode.LUMINANCE = MaskBorderMode(_constants.LUMINANCE);
var MaskBorderSlice = (0, _utils.property)('maskBorderSlice');
exports.MaskBorderSlice = MaskBorderSlice;
MaskBorderSlice.FILL = MaskBorderMode(_constants.FILL);
var MaskBorderWidth = (0, _utils.property)('maskBorderWidth');
exports.MaskBorderWidth = MaskBorderWidth;
MaskBorderWidth.AUTO = MaskBorderWidth(_constants.AUTO);
var MaskBorderOutset = (0, _utils.property)('maskBorderOutset');
exports.MaskBorderOutset = MaskBorderOutset;
var MaskBorderRepeat = (0, _utils.property)('maskBorderRepeat');
exports.MaskBorderRepeat = MaskBorderRepeat;
MaskBorderRepeat.STRETCH = MaskBorderRepeat(_constants.STRETCH);
MaskBorderRepeat.REPEAT = MaskBorderRepeat(_constants.REPEAT);
MaskBorderRepeat.ROUND = MaskBorderRepeat(_constants.ROUND);
MaskBorderRepeat.SPACE = MaskBorderRepeat(_constants.SPACE);
var MaskType = (0, _utils.property)('maskType');
exports.MaskType = MaskType;
MaskType.ALPHA = MaskType(_constants.ALPHA);
MaskType.LUMINANCE = MaskType(_constants.LUMINANCE);

/***/ }),

/***/ "./src/properties/visual/media.js":
/*!****************************************!*\
  !*** ./src/properties/visual/media.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectPosition = exports.ObjectFit = exports.ImageResolution = exports.ImageOrientation = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var ImageOrientation = (0, _utils.property)('imageOrientation');
exports.ImageOrientation = ImageOrientation;
var ImageResolution = (0, _utils.property)('imageResolution');
exports.ImageResolution = ImageResolution;
ImageResolution.FRONT_IMAGE = ImageResolution(_constants.FRONT_IMAGE);
var ObjectFit = (0, _utils.property)('objectFit');
exports.ObjectFit = ObjectFit;
ObjectFit.NONE = ObjectFit(_constants.NONE);
ObjectFit.FILL = ObjectFit(_constants.FILL);
ObjectFit.CONTAIN = ObjectFit(_constants.CONTAIN);
ObjectFit.COVER = ObjectFit(_constants.COVER);
ObjectFit.SCALE_DOWN = ObjectFit(_constants.SCALE_DOWN);
var ObjectPosition = (0, _utils.property)('objectPosition');
exports.ObjectPosition = ObjectPosition;

/***/ }),

/***/ "./src/properties/visual/outline.js":
/*!******************************************!*\
  !*** ./src/properties/visual/outline.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutlineWidth = exports.OutlineStyle = exports.OutlineOffset = exports.OutlineColor = exports.Outline = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Outline = (0, _utils.property)('outline');
exports.Outline = Outline;
var OutlineColor = (0, _utils.property)('outlineColor');
exports.OutlineColor = OutlineColor;
OutlineColor.INVERT = OutlineColor(_constants.INVERT);
var OutlineOffset = (0, _utils.property)('outlineOffset');
exports.OutlineOffset = OutlineOffset;
var OutlineStyle = (0, _utils.property)('outlineOffset');
exports.OutlineStyle = OutlineStyle;
OutlineStyle.AUTO = OutlineStyle(_constants.AUTO);
OutlineStyle.NONE = OutlineStyle(_constants.NONE);
OutlineStyle.HIDDEN = OutlineStyle(_constants.HIDDEN);
OutlineStyle.DOTTED = OutlineStyle(_constants.DOTTED);
OutlineStyle.DASHED = OutlineStyle(_constants.DASHED);
OutlineStyle.SOLID = OutlineStyle(_constants.SOLID);
OutlineStyle.DOUBLE = OutlineStyle(_constants.DOUBLE);
OutlineStyle.GROOVE = OutlineStyle(_constants.GROOVE);
OutlineStyle.RIDGE = OutlineStyle(_constants.RIDGE);
OutlineStyle.INSET = OutlineStyle(_constants.INSET);
OutlineStyle.OUTSET = OutlineStyle(_constants.OUTSET);
var OutlineWidth = (0, _utils.property)('outlineWidth');
exports.OutlineWidth = OutlineWidth;
OutlineWidth.THIN = OutlineWidth(_constants.THIN);
OutlineWidth.MEDIUM = OutlineWidth(_constants.MEDIUM);
OutlineWidth.THICK = OutlineWidth(_constants.THICK);

/***/ }),

/***/ "./src/properties/visual/shape.js":
/*!****************************************!*\
  !*** ./src/properties/visual/shape.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShapeMargin = exports.ShapeImageThreshold = exports.ShapeOutside = exports.Shape = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Shape = (0, _utils.property)('shape');
exports.Shape = Shape;
Shape.RECT = Shape(_constants.RECT);
Shape.ROUND = Shape(_constants.ROUND);
var ShapeOutside = (0, _utils.property)('shapeOutside');
exports.ShapeOutside = ShapeOutside;
ShapeOutside.NONE = ShapeOutside(_constants.NONE);
var ShapeImageThreshold = (0, _utils.property)('shapeImageThreshold');
exports.ShapeImageThreshold = ShapeImageThreshold;
var ShapeMargin = (0, _utils.property)('shapeImageThreshold');
exports.ShapeMargin = ShapeMargin;

/***/ }),

/***/ "./src/properties/visual/stroke.js":
/*!*****************************************!*\
  !*** ./src/properties/visual/stroke.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrokeOpacity = exports.StrokeRepeat = exports.StrokeSize = exports.StrokePosition = exports.StrokeOrigin = exports.StrokeImage = exports.StrokeColor = exports.StrokeDashJustify = exports.StrokeDashCorner = exports.StrokeDashoffset = exports.StrokeDasharray = exports.StrokeBreak = exports.StrokeMiterlimit = exports.StrokeLinejoin = exports.StrokeLinecap = exports.StrokeAlign = exports.StrokeWidth = exports.Stroke = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Stroke = (0, _utils.property)('stroke');
exports.Stroke = Stroke;
var StrokeWidth = (0, _utils.property)('strokeWidth');
exports.StrokeWidth = StrokeWidth;
var StrokeAlign = (0, _utils.property)('strokeAlign');
exports.StrokeAlign = StrokeAlign;
StrokeAlign.CENTER = StrokeAlign(_constants.CENTER);
StrokeAlign.INSET = StrokeAlign(_constants.INSET);
StrokeAlign.OUTSET = StrokeAlign(_constants.OUTSET);
var StrokeLinecap = (0, _utils.property)('strokeLinecap');
exports.StrokeLinecap = StrokeLinecap;
StrokeLinecap.BUTT = StrokeLinecap(_constants.BUTT);
StrokeLinecap.ROUND = StrokeLinecap(_constants.ROUND);
StrokeLinecap.SQUARE = StrokeLinecap(_constants.SQUARE);
var StrokeLinejoin = (0, _utils.property)('strokeLinejoin');
exports.StrokeLinejoin = StrokeLinejoin;
StrokeLinejoin.CROP = StrokeLinejoin(_constants.CROP);
StrokeLinejoin.ARCS = StrokeLinejoin(_constants.ARCS);
StrokeLinejoin.MITER = StrokeLinejoin(_constants.MITER);
StrokeLinejoin.BEVEL = StrokeLinejoin(_constants.BEVEL);
StrokeLinejoin.ROUND = StrokeLinejoin(_constants.ROUND);
StrokeLinejoin.STUPID = StrokeLinejoin(_constants.STUPID);
var StrokeMiterlimit = (0, _utils.property)('strokeMiterlimit');
exports.StrokeMiterlimit = StrokeMiterlimit;
var StrokeBreak = (0, _utils.property)('strokeBreak');
exports.StrokeBreak = StrokeBreak;
StrokeBreak.BOUNDING_BOX = StrokeBreak(_constants.BOUNDING_BOX);
StrokeBreak.SLICE = StrokeBreak(_constants.SLICE);
StrokeBreak.CLONE = StrokeBreak(_constants.CLONE);
var StrokeDasharray = (0, _utils.property)('strokeDasharray');
exports.StrokeDasharray = StrokeDasharray;
StrokeDasharray.NONE = StrokeDasharray(_constants.NONE);
var StrokeDashoffset = (0, _utils.property)('strokeDashoffset');
exports.StrokeDashoffset = StrokeDashoffset;
var StrokeDashCorner = (0, _utils.property)('strokeDashCorner');
exports.StrokeDashCorner = StrokeDashCorner;
StrokeDashCorner.NONE = StrokeDashCorner(_constants.NONE);
var StrokeDashJustify = (0, _utils.property)('strokeDashJustify');
exports.StrokeDashJustify = StrokeDashJustify;
StrokeDashJustify.NONE = StrokeDashJustify(_constants.NONE);
StrokeDashJustify.NONE = StrokeDashJustify(_constants.STRETCH);
StrokeDashJustify.NONE = StrokeDashJustify(_constants.COMPRESS);
StrokeDashJustify.NONE = StrokeDashJustify(_constants.DASHES);
StrokeDashJustify.NONE = StrokeDashJustify(_constants.GAPS);
var StrokeColor = (0, _utils.property)('strokeColor');
exports.StrokeColor = StrokeColor;
StrokeColor.TRANSPARENT = StrokeColor(_constants.TRANSPARENT);
var StrokeImage = (0, _utils.property)('strokeImage');
exports.StrokeImage = StrokeImage;
StrokeImage.NONE = StrokeImage(_constants.NONE);
var StrokeOrigin = (0, _utils.property)('strokeOrigin');
exports.StrokeOrigin = StrokeOrigin;
StrokeOrigin.MATCH_PARENT = StrokeOrigin(_constants.MATCH_PARENT);
StrokeOrigin.FILL_BOX = StrokeOrigin(_constants.FILL_BOX);
StrokeOrigin.STROKE_BOX = StrokeOrigin(_constants.STROKE_BOX);
StrokeOrigin.CONTENT_BOX = StrokeOrigin(_constants.CONTENT_BOX);
StrokeOrigin.PADDING_BOX = StrokeOrigin(_constants.PADDING_BOX);
StrokeOrigin.BORDER_BOX = StrokeOrigin(_constants.BORDER_BOX);
var StrokePosition = (0, _utils.property)('strokePosition');
exports.StrokePosition = StrokePosition;
StrokePosition.TOP = StrokePosition(_constants.TOP);
StrokePosition.RIGHT = StrokePosition(_constants.RIGHT);
StrokePosition.LEFT = StrokePosition(_constants.LEFT);
StrokePosition.BOTTOM = StrokePosition(_constants.BOTTOM);
StrokePosition.TOP_LEFT = StrokePosition(_constants.TOP, _constants.LEFT);
StrokePosition.TOP_RIGHT = StrokePosition(_constants.TOP, _constants.RIGHT);
StrokePosition.BOTTOM_LEFT = StrokePosition(_constants.BOTTOM, _constants.LEFT);
StrokePosition.BOTTOM_RIGHT = StrokePosition(_constants.BOTTOM, _constants.RIGHT);
var StrokeSize = (0, _utils.property)('strokeSize');
exports.StrokeSize = StrokeSize;
StrokeSize.AUTO = StrokeSize(_constants.AUTO);
var StrokeRepeat = (0, _utils.property)('strokeRepeat');
exports.StrokeRepeat = StrokeRepeat;
StrokeRepeat.REPEAT = StrokeRepeat(_constants.REPEAT);
StrokeRepeat.REPEAT_X = StrokeRepeat(_constants.REPEAT_X);
StrokeRepeat.REPEAT_Y = StrokeRepeat(_constants.REPEAT_Y);
StrokeRepeat.SPACE = StrokeRepeat(_constants.SPACE);
StrokeRepeat.AROUND = StrokeRepeat(_constants.AROUND);
StrokeRepeat.NO_REPEAT = StrokeRepeat(_constants.NO_REPEAT);
var StrokeOpacity = (0, _utils.property)('strokeOpacity');
exports.StrokeOpacity = StrokeOpacity;

/***/ }),

/***/ "./src/properties/visual/visibility.js":
/*!*********************************************!*\
  !*** ./src/properties/visual/visibility.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visibility = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var Visibility = (0, _utils.property)('visibility');
exports.Visibility = Visibility;
Visibility.VISIBLE = Visibility(_constants.VISIBLE);
Visibility.HIDDEN = Visibility(_constants.HIDDEN);
Visibility.COLLAPSE = Visibility(_constants.COLLAPSE);

/***/ }),

/***/ "./src/utils/controls.js":
/*!*******************************!*\
  !*** ./src/utils/controls.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// export function If(condition, styleSuccess, styleFailure) {
//     if (condition) {
//         return styleSuccess;
//     }
//     else {
//         return styleFailure ? styleFailure : {};
//     }
// }
//
// export function IfNot(condition, styleSuccess, styleFailure) {
//     return If(!condition, styleSuccess, styleFailure);
// }
//
// export function Multi(...styles) {
//     let list = {};
//     for (const style of styles) {
//         for (const property of Object.keys(style)) {
//             if (!list.hasOwnProperty(property)) {
//                 list[property] = [];
//             }
//             list[property].push(style[property]);
//         }
//     }
//     for (const property of Object.keys(list)) {
//         list[property] = list[property].join(' ');
//     }
//     return list;
// }

/***/ }),

/***/ "./src/utils/factory.js":
/*!******************************!*\
  !*** ./src/utils/factory.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.method = exports.params = exports.property = exports.args = exports.measure = exports.concatWithCommas = exports.concatWithSpaces = exports.isValid = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Says if the value could be used inside a CSS property of method.
 * @param value
 * @returns {boolean}
 */
var isValid = function isValid(value) {
  if (typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return true;
};
/**
 * Concat values with a space as separator.
 * @param values
 * @returns {string}
 */


exports.isValid = isValid;

var concatWithSpaces = function concatWithSpaces(values) {
  return values.join(' ');
};
/**
 * Concat values with a comma as separator.
 * @param values
 * @returns {string}
 */


exports.concatWithSpaces = concatWithSpaces;

var concatWithCommas = function concatWithCommas(values) {
  return values.join(', ');
};
/**
 * Create a method that append the specified unit to values passed to it.
 * NOTE: 0 value is always printed without any unit.
 * NOTE: multiple values are concatenated with a space between them.
 * @param unit
 * @returns {function}
 */


exports.concatWithCommas = concatWithCommas;

var measure = function measure(unit) {
  return function () {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    return concatWithSpaces(values.filter(function (value) {
      return isValid(value);
    }).map(function (value) {
      return value + (value ? unit : '');
    }));
  };
};
/**
 * Manages property arguments, including arrays and sub-arrays,
 * generating a single string.
 * @param args
 * @returns {string}
 */


exports.measure = measure;

var args = function args() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return concatWithSpaces(args.filter(function (arg) {
    return isValid(arg);
  }).map(function (arg) {
    if (Array.isArray(arg)) {
      return concatWithCommas(arg.map(function (subArg) {
        if (Array.isArray(subArg)) {
          return concatWithSpaces(subArg.filter(function (subSubArg) {
            return !Array.isArray(subSubArg);
          }));
        }

        return subArg;
      }));
    }

    return arg;
  }));
};
/**
 * Create method to a assign the value of a specified property.
 * @param name
 * @returns {Function} the style object containing the single valorized
 *     property.
 */


exports.args = args;

var property = function property(name) {
  return function () {
    return _defineProperty({}, name, args.apply(void 0, arguments));
  };
};
/**
 * Manages method parameters, including arrays,
 * generating a single string.
 * @param params
 * @returns {string}
 */


exports.property = property;

var params = function params() {
  for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }

  return concatWithCommas(params.filter(function (param) {
    return isValid(param);
  }).map(function (param) {
    if (Array.isArray(param)) {
      return concatWithSpaces(param.filter(function (subParam) {
        return !Array.isArray(subParam);
      }));
    }

    return param;
  }));
};
/**
 * Wraps parameters with method name and round brackets.
 * @param name
 * @returns {function}
 */


exports.params = params;

var method = function method(name) {
  return function () {
    for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      values[_key4] = arguments[_key4];
    }

    return name + '(' + params(values) + ')';
  };
};

exports.method = method;

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controls = __webpack_require__(/*! ./controls */ "./src/utils/controls.js");

Object.keys(_controls).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _controls[key];
    }
  });
});

var _factory = __webpack_require__(/*! ./factory */ "./src/utils/factory.js");

Object.keys(_factory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _factory[key];
    }
  });
});

/***/ })

/******/ });
});
//# sourceMappingURL=emotive.js.map