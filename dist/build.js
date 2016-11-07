/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _datepicker = __webpack_require__(2);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_datepicker2.default);
	exports.default = _datepicker2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(3)
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] datepicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-191d1609/datepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./datepicker.vue", function() {
				var newContent = require("!!./node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.vue-datepicker {\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: verdana;\r\n  font-size: 14px;\r\n  color: #666; }\r\n  .vue-datepicker * {\r\n    margin: 0;\r\n    padding: 0; }\r\n  .vue-datepicker input {\r\n    display: block;\r\n    width: 245px;\r\n    height: 28px;\r\n    padding-left: 6px;\r\n    border: 1px solid #DDD;\r\n    outline: none; }\r\n  .vue-datepicker .vue-datepicker-panel {\r\n    position: absolute;\r\n    z-index: 99999;\r\n    left: 0;\r\n    background-color: #FFF;\r\n    width: 245px;\r\n    border: 1px solid #DDD;\r\n    box-shadow: 0 0 10px 0 #DDD;\r\n    padding: 10px 6px; }\r\n    .vue-datepicker .vue-datepicker-panel .vue-datepicker-month {\r\n      padding-bottom: 4px;\r\n      height: 35px;\r\n      line-height: 35px;\r\n      overflow: hidden;\r\n      text-align: center; }\r\n      .vue-datepicker .vue-datepicker-panel .vue-datepicker-month a {\r\n        float: left;\r\n        display: block;\r\n        width: 35px;\r\n        cursor: pointer;\r\n        color: #999;\r\n        font-size: 12px; }\r\n        .vue-datepicker .vue-datepicker-panel .vue-datepicker-month a:hover {\r\n          background-color: #F5F6F7; }\r\n      .vue-datepicker .vue-datepicker-panel .vue-datepicker-month span {\r\n        float: left;\r\n        display: block;\r\n        width: 175px; }\r\n        .vue-datepicker .vue-datepicker-panel .vue-datepicker-month span.vue-datepicker-btn:hover {\r\n          background-color: #F5F6F7;\r\n          cursor: pointer; }\r\n    .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 {\r\n      width: 245px;\r\n      border-collapse: collapse;\r\n      text-align: center; }\r\n      .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb thead, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 thead {\r\n        background-color: #F5F6F7;\r\n        height: 35px;\r\n        line-height: 35px;\r\n        border-top: 1px solid #DDD;\r\n        border-bottom: 1px solid #DDD; }\r\n        .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb thead tr, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 thead tr {\r\n          border: none; }\r\n          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb thead tr th, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 thead tr th {\r\n            width: 35px;\r\n            font-size: 12px;\r\n            border: none;\r\n            font-weight: normal; }\r\n      .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr {\r\n        border-top: 1px solid #EEE; }\r\n        .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td {\r\n          height: 31.5px; }\r\n          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed {\r\n            cursor: pointer; }\r\n            .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed span, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed span {\r\n              display: block;\r\n              height: 21.7px;\r\n              line-height: 21.7px; }\r\n            .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed:hover, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed:hover {\r\n              background-color: #F5F6F7;\r\n              color: #d0000e; }\r\n            .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-on span, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-on span {\r\n              color: #FFF;\r\n              background-color: #d0000e; }\r\n            .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-invalid, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-invalid {\r\n              cursor: default; }\r\n              .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-invalid span, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-invalid span {\r\n                color: #ccc; }\r\n              .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-invalid:hover, .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-invalid:hover {\r\n                background-color: transparent; }\r\n    .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr {\r\n      border-top: 1px solid #EEE; }\r\n      .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td {\r\n        height: 31.5px;\r\n        padding: 4px 10px;\r\n        font-size: 13px; }\r\n        .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed {\r\n          cursor: pointer; }\r\n          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed span {\r\n            display: block;\r\n            height: 22.75px;\r\n            line-height: 22.75px; }\r\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(8);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function dateFormat(y, m, d, fm) {
		if (!fm) {
			fm = 'yyyy-mm-dd';
		}
		m = ('0' + (parseInt(m) + 1)).slice(-2);
		d = ('0' + d).slice(-2);
		return fm.replace('yyyy', y).replace('YYYY', y).replace('mm', m).replace('MM', m).replace('DD', d).replace('dd', d);
	}

	function dateCompare(date1, date2) {
		if (date1.day && date2.day) {
			return date1.year > date2.year || date1.year == date2.year && date1.month > date2.month || date1.year == date2.year && date1.month == date2.month && date1.day > date2.day;
		} else {
			return date1.year > date2.year || date1.year == date2.year && date1.month > date2.month;
		}
	}

	exports.default = {
		props: {
			field: {
				type: String,
				default: ''
			},
			value: {
				type: String,
				default: '',
				twoWay: true
			},
			format: {
				type: String,
				default: 'yyyy-mm-dd'
			},

			forward: {
				default: false
			},
			placeholder: {
				type: String,
				default: ''
			},
			conf: {
				type: Object,
				default: function _default() {
					return {};
				}
			}
		},
		data: function data() {
			var value = this.value;
			var conf = this.conf;
			var dateObj = void 0;var year = void 0;var month = void 0;var day = void 0;
			var langConf = {
				week: ['日', '一', '二', '三', '四', '五', '六'],
				month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
			};
			if (value) {
				dateObj = new Date(value);
			} else {
				dateObj = new Date();
			}
			if (conf) {
				langConf = (0, _assign2.default)(langConf, conf);
			}
			year = dateObj.getFullYear();
			month = dateObj.getMonth();
			day = dateObj.getDate();
			return {
				langConf: langConf,
				dayPanelIsShow: false,
				monthPanelIsShow: false,
				isMouseOver: false,
				year: year,
				month: month,
				day: day
			};
		},

		computed: {
			monthArr: function monthArr() {
				var month = this.langConf.month;
				var res = [];
				for (var i = 0; i <= 3; i++) {
					var temp = [];
					for (var j = 1; j <= 3; j++) {
						var id = i * 3 + j - 1;
						temp.push({ id: id, name: month[id] });
					}
					res.push(temp);
				}
				return res;
			},
			curr: function curr() {
				var value = this.value;
				var dateObj = void 0;var year = void 0;var month = void 0;var day = void 0;
				if (value) {
					dateObj = new Date(value);
				} else {
					dateObj = new Date();
				}
				year = dateObj.getFullYear();
				month = dateObj.getMonth();
				day = dateObj.getDate();
				return { year: year, month: month, day: day };
			},
			monthDays: function monthDays() {
				var year = this.year;
				var month = this.month;
				var dayNum = void 0;
				month++;

				if (month == 2) {
					if (year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0)) {
						dayNum = 29;
					} else {
						dayNum = 28;
					}
				} else {
					if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
						dayNum = 31;
					} else {
						dayNum = 30;
					}
				}

				var firstDay = new Date(year, month - 1, 1).getDay(),
				    dayArr = new Array(6).fill(0).map(function () {
					return new Array(7).fill('');
				}),
				    row = 0,
				    col = firstDay;
				for (var d = 1; d <= dayNum; d++) {
					dayArr[row][col] = d;
					if (col < 6) {
						col++;
					} else {
						col = 0;
						row++;
					}
				}

				return dayArr;
			},
			today: function today() {
				var dateObj = new Date(),
				    year = dateObj.getFullYear(),
				    month = dateObj.getMonth(),
				    day = dateObj.getDate();
				return { year: year, month: month, day: day };
			}
		},
		methods: {
			startChoiceMonth: function startChoiceMonth() {
				this.dayPanelIsShow = false;
				this.monthPanelIsShow = true;
			},
			prevYear: function prevYear() {
				var year = this.year;
				var forward = this.forward;
				var today = this.today;

				if (forward && today.year >= year) {
					return false;
				}
				this.year--;
			},
			nextYear: function nextYear() {
				this.year++;
			},
			choiceMonth: function choiceMonth(m) {
				var year = this.year;
				var today = this.today;
				var forward = this.forward;

				if (forward && (today.year > year || today.year == year && today.month > m)) {
					return false;
				}
				this.month = m;
				this.dayPanelIsShow = true;
				this.monthPanelIsShow = false;
			},
			classMonth: function classMonth(m) {
				var month = this.month;
				var year = this.year;
				var curr = this.curr;
				var today = this.today;
				var forward = this.forward;

				return {
					'z-on': m == month && curr.year == year,
					'z-existed': true,
					'z-invalid': forward && (today.year > year || today.year == year && today.month > m)
				};
			},
			classDay: function classDay(d) {
				var month = this.month;
				var year = this.year;
				var curr = this.curr;
				var today = this.today;
				var forward = this.forward;
				var isValid = forward && dateCompare(today, { year: year, month: month, day: d });
				return {
					'z-on': curr.day == d && curr.month == month && curr.year == year,
					'z-existed': d != '',
					'z-invalid': isValid
				};
			},
			startChoice: function startChoice(e) {
				if (e && e.type == 'keypress') {
					console.log(e);
					e.returnValue = false;
				}
				this.dayPanelIsShow = true;
			},
			prevMonth: function prevMonth() {
				var year = this.year;
				var month = this.month;
				var today = this.today;
				var forward = this.forward;

				if (forward && (today.year > year || today.year == year && today.month >= month)) {
					return false;
				}
				if (month > 1) {
					this.month--;
				} else {
					this.year--;
					this.month = 11;
				}
			},
			nextMonth: function nextMonth() {
				var month = this.month;

				if (month < 11) {
					this.month++;
				} else {
					this.year++;
					this.month = 0;
				}
			},
			choiceDay: function choiceDay(d) {
				var year = this.year;
				var month = this.month;
				var format = this.format;
				var today = this.today;
				var forward = this.forward;

				if (d !== '' && !(forward && dateCompare(today, { year: year, month: month, day: d }))) {
					this.day = d;
					this.value = dateFormat(year, month, d, format);
					this.immEndChoice();
				}
			},
			endChoice: function endChoice() {
				var that = this;
				that.isMouseOver = false;
				setTimeout(function () {
					if (!that.isMouseOver) {
						that.dayPanelIsShow = false;
					}
				}, 1000);
			},
			startMouseOver: function startMouseOver() {
				this.isMouseOver = true;
			},
			immEndChoice: function immEndChoice() {
				this.isMouseOver = true;
				this.dayPanelIsShow = false;
			}
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10);
	module.exports = __webpack_require__(13).Object.assign;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(11);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(26)});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , ctx       = __webpack_require__(14)
	  , hide      = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17)
	  , createDesc = __webpack_require__(25);
	module.exports = __webpack_require__(21) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(18)
	  , IE8_DOM_DEFINE = __webpack_require__(20)
	  , toPrimitive    = __webpack_require__(24)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(21) && !__webpack_require__(22)(function(){
	  return Object.defineProperty(__webpack_require__(23)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(22)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19)
	  , document = __webpack_require__(12).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(19);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(27)
	  , gOPS     = __webpack_require__(42)
	  , pIE      = __webpack_require__(43)
	  , toObject = __webpack_require__(44)
	  , IObject  = __webpack_require__(31)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(22)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(28)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(29)
	  , toIObject    = __webpack_require__(30)
	  , arrayIndexOf = __webpack_require__(34)(false)
	  , IE_PROTO     = __webpack_require__(38)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(31)
	  , defined = __webpack_require__(33);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(32);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(30)
	  , toLength  = __webpack_require__(35)
	  , toIndex   = __webpack_require__(37);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(36)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(39)('keys')
	  , uid    = __webpack_require__(40);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(33);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"vue-datepicker\" @mouseout=\"endChoice\" @mouseover=\"startMouseOver\">\n\t<input type=\"text\" :name=\"field\" :id=\"field\" :value=\"value\" :placeholder=\"placeholder\" @click=\"startChoice\" @keypress=\"startChoice\">\n\t<!--日期选择-->\n\t<div class=\"vue-datepicker-panel\" v-show=\"dayPanelIsShow\">\n\t\t<div class=\"vue-datepicker-month\">\n\t\t\t<a class=\"vue-datepicker-prev\" @click=\"prevMonth\"> &lt; </a>\n\t\t\t<span class=\"vue-datepicker-btn\" @click=\"startChoiceMonth\">{{ year }}年 {{ month+1 }}月</span>\n\t\t\t<a class=\"vue-datepicker-next\" @click=\"nextMonth\"> &gt; </a>\n\t\t</div>\n\t\t<table class=\"vue-datepicker-tb\">\n\t\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th v-for=\"d in langConf.week\">{{ d }}</th>\n\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t<tr v-for=\"(mIndex, m) in monthDays\" track-by=\"$index\">\n\t\t\t\t<td v-for=\"(dIndex, d) in m\" track-by=\"$index\" @click=\"choiceDay(d, $event)\"\n\t\t\t\t\t:class=\"classDay(d)\">\n\t\t\t\t\t<span>{{ d }}</span>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<!--年月选择-->\n\t<div class=\"vue-datepicker-panel\" v-show=\"monthPanelIsShow\">\n\t\t<div class=\"vue-datepicker-month\">\n\t\t\t<a class=\"vue-datepicker-prev\" @click=\"prevYear\"> &lt; </a>\n\t\t\t<span>{{ year }}年</span>\n\t\t\t<a class=\"vue-datepicker-next\" @click=\"nextYear\"> &gt; </a>\n\t\t</div>\n\t\t<table class=\"vue-datepicker-tb2\">\n\t\t\t<col width=\"33%\"/>\n\t\t\t<col width=\"33%\"/>\n\t\t\t<col width=\"33%\"/>\n\t\t\t<tbody>\n\t\t\t<tr v-for=\"season in monthArr\" track-by=\"$index\">\n\t\t\t\t<td v-for=\"m in season\" track-by=\"$index\" @click=\"choiceMonth(m.id)\"\n\t\t\t\t\t:class=\"classMonth(m.id)\">\n\t\t\t\t\t<span>{{ m.name }}</span>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n";

/***/ }
/******/ ]);