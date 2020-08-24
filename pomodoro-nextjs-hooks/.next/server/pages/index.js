module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\carlo\\projects\\pomodoro-nextjs-hooks\\pomodoro-nextjs-hooks\\pages\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Home() {
  const periodTime = 60 * 25;
  const shortPause = 60 * 5;
  const longPause = 60 * 10;
  const {
    0: customTime,
    1: setCustomTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: baseTime,
    1: setBaseTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(periodTime);
  const {
    0: timer,
    1: setTimer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(baseTime);
  const {
    0: timeLeft,
    1: setTimeLeft
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(baseTime * 1000, 'mm:ss'));
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: storeTimeOut,
    1: setStoreTimeOut
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (timer == 0) {
      (function notifyMe() {
        if (!("Notification" in window)) {
          alert("Este browser não suporta notificações de Desktop");
        } else if (Notification.permission === "granted") {
          var notification = new Notification("TIME IS OVER!");
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission(function (permission) {
            if (permission === "granted") {
              var notification = new Notification("TIME IS OVER!");
            }
          });
        }
      })();
    }
  }, [timer]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isActive && timer >= 0) {
      setStoreTimeOut(setTimeout(() => {
        setTimer(timer - 1);
        setTimeLeft(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(timer * 1000, 'mm:ss'));
      }, 1000));
    } else {
      clearTimeout(storeTimeOut);
    }
  }, [timer, isActive]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    resetTime();
  }, [baseTime]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (customTime > 0) {
      let seconds = customTime * 60;
      if (customTime == 60) seconds--;
      setBaseTime(seconds);
    }
  }, [customTime]);

  function resetTime() {
    setIsActive(false);
    setTimer(baseTime);
    setTimeLeft(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(baseTime * 1000, 'mm:ss'));
  }

  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Pomodoro:", timeLeft), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "Hello Next"), __jsx("button", {
    onClick: () => setBaseTime(periodTime),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "25"), __jsx("button", {
    onClick: () => setBaseTime(longPause),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "10"), __jsx("button", {
    onClick: () => setBaseTime(shortPause),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, "5"), __jsx("input", {
    type: "number",
    min: "0",
    max: "60",
    onChange: e => setCustomTime(e.target.value),
    value: customTime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, timeLeft), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx("button", {
    onClick: () => setIsActive(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "Start"), __jsx("button", {
    onClick: () => setIsActive(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "Stop"), __jsx("button", {
    onClick: () => resetTime(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "Reset")));
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkhvbWUiLCJwZXJpb2RUaW1lIiwic2hvcnRQYXVzZSIsImxvbmdQYXVzZSIsImN1c3RvbVRpbWUiLCJzZXRDdXN0b21UaW1lIiwidXNlU3RhdGUiLCJiYXNlVGltZSIsInNldEJhc2VUaW1lIiwidGltZXIiLCJzZXRUaW1lciIsInRpbWVMZWZ0Iiwic2V0VGltZUxlZnQiLCJmb3JtYXQiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwic3RvcmVUaW1lT3V0Iiwic2V0U3RvcmVUaW1lT3V0IiwidXNlRWZmZWN0Iiwibm90aWZ5TWUiLCJ3aW5kb3ciLCJhbGVydCIsIk5vdGlmaWNhdGlvbiIsInBlcm1pc3Npb24iLCJub3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJyZXNldFRpbWUiLCJzZWNvbmRzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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anMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzeFwiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHBlcmlvZFRpbWUgPSA2MCAqIDI1XG4gIGNvbnN0IHNob3J0UGF1c2UgPSA2MCAqIDVcbiAgY29uc3QgbG9uZ1BhdXNlID0gNjAgKiAxMFxuXG4gIGNvbnN0IFsgY3VzdG9tVGltZSwgc2V0Q3VzdG9tVGltZSBdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgWyBiYXNlVGltZSwgc2V0QmFzZVRpbWUgXSA9IHVzZVN0YXRlKHBlcmlvZFRpbWUpXG4gIGNvbnN0IFsgdGltZXIsIHNldFRpbWVyIF0gPSB1c2VTdGF0ZShiYXNlVGltZSk7XG4gIGNvbnN0IFsgdGltZUxlZnQsIHNldFRpbWVMZWZ0IF0gPSB1c2VTdGF0ZShmb3JtYXQoYmFzZVRpbWUgKiAxMDAwLCAnbW06c3MnKSk7XG4gIGNvbnN0IFsgaXNBY3RpdmUsIHNldElzQWN0aXZlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgc3RvcmVUaW1lT3V0LCBzZXRTdG9yZVRpbWVPdXQgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodGltZXIgPT0gMCl7XG5cbiAgICAoZnVuY3Rpb24gbm90aWZ5TWUoKSB7XG4gICAgICBpZiAoIShcIk5vdGlmaWNhdGlvblwiIGluIHdpbmRvdykpIHtcbiAgICAgICAgYWxlcnQoXCJFc3RlIGJyb3dzZXIgbsOjbyBzdXBvcnRhIG5vdGlmaWNhw6fDtWVzIGRlIERlc2t0b3BcIik7XG4gICAgICB9XG4gICAgXG4gICAgICBlbHNlIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHtcbiAgICAgICAgdmFyIG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oXCJUSU1FIElTIE9WRVIhXCIpO1xuICAgICAgfVxuICAgIFxuICAgICAgZWxzZSBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdkZW5pZWQnKSB7XG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbihmdW5jdGlvbiAocGVybWlzc2lvbikge1xuICAgICAgICAgIGlmIChwZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIikge1xuICAgICAgICAgICAgdmFyIG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oXCJUSU1FIElTIE9WRVIhXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkoKVxuICB9XG5cbiAgfSxbdGltZXJdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoaXNBY3RpdmUgJiYgdGltZXIgPj0gMCl7XG4gICAgICBzZXRTdG9yZVRpbWVPdXQoc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgc2V0VGltZXIodGltZXIgLSAxKVxuICAgICAgICBzZXRUaW1lTGVmdChmb3JtYXQodGltZXIgKiAxMDAwLCAnbW06c3MnKSlcbiAgICAgIH0sIDEwMDApKVxuICAgIH1lbHNle1xuICAgICAgY2xlYXJUaW1lb3V0KHN0b3JlVGltZU91dClcbiAgICB9XG4gIH0sIFt0aW1lciwgaXNBY3RpdmVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlc2V0VGltZSgpXG4gIH0sIFtiYXNlVGltZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihjdXN0b21UaW1lID4gMCl7XG4gICAgICBsZXQgc2Vjb25kcyA9IGN1c3RvbVRpbWUgKiA2MFxuICAgICAgaWYgKGN1c3RvbVRpbWUgPT0gNjApIHNlY29uZHMtLVxuICAgICAgc2V0QmFzZVRpbWUoc2Vjb25kcylcbiAgICB9XG4gIH0sIFtjdXN0b21UaW1lXSlcblxuICBmdW5jdGlvbiByZXNldFRpbWUgKCkge1xuICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICBzZXRUaW1lcihiYXNlVGltZSk7XG4gICAgc2V0VGltZUxlZnQoZm9ybWF0KGJhc2VUaW1lICogMTAwMCwgJ21tOnNzJykpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvbW9kb3JvOnt0aW1lTGVmdH08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SGVsbG8gTmV4dDwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QmFzZVRpbWUocGVyaW9kVGltZSl9PjI1PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QmFzZVRpbWUobG9uZ1BhdXNlKX0+MTA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRCYXNlVGltZShzaG9ydFBhdXNlKX0+NTwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9XCI2MFwiXG4gICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDdXN0b21UaW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgIHZhbHVlPXtjdXN0b21UaW1lfS8+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxzcGFuPnt0aW1lTGVmdH08L3NwYW4+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNBY3RpdmUodHJ1ZSl9PlN0YXJ0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNBY3RpdmUoZmFsc2UpfT5TdG9wPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVzZXRUaW1lKCl9PlJlc2V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==