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
/******/ 	return __webpack_require__(__webpack_require__.s = "./UI/js/signin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./UI/js/api.js":
/*!**********************!*\
  !*** ./UI/js/api.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var baseUrl = 'http://127.0.0.1:5000/api/v2';

var api = {
    post: function post(endpoint, data) {
        var token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        return fetch("" + baseUrl + endpoint, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Authorization: "Bearer " + token,
                "content-type": "application/json",
                mode: 'no-cors'
            }
        });
    }
};

exports.default = api;

/***/ }),

/***/ "./UI/js/signin.js":
/*!*************************!*\
  !*** ./UI/js/signin.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _api = __webpack_require__(/*! ./api */ "./UI/js/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var email = document.getElementById('email');
var password = document.getElementById('password');
var signin = document.getElementById('signin');

var data = {
    email: null,
    password: null
};

email.addEventListener("change", function (e) {
    data.email = e.target.value;
    // console.log(data);
});

password.addEventListener("change", function (e) {
    data.password = e.target.value;
    // console.log(data);
});

signin.addEventListener('click', function (e) {
    e.preventDefault();
    if (data.email && data.password) {
        _api2.default.post('/auth/signin', data).then(function (res) {
            return res.json();
        }).then(function (data) {
            return console.log(data);
        });
    } else {
        console.log('All fields are required');
    }
});

// .then(response => response.json())
// .catch(error => console.error('Error '+ error))
// .then(data => {
//     if(data.message !== "Logged in successfully!"){
//         let err = document.getElementById('err-message')
//         err.style.display = "block"
//         err.innerHTML = data.message
//     }else{
//         setItems(data.token, data.email.email);
//     }
// })
// return false;
// }

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVUkvanMvYXBpLmpzIiwid2VicGFjazovLy8uL1VJL2pzL3NpZ25pbi5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwiYXBpIiwicG9zdCIsImVuZHBvaW50IiwiZGF0YSIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibW9kZSIsImVtYWlsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhc3N3b3JkIiwic2lnbmluIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsVUFBVSw4QkFBaEI7O0FBRUEsSUFBTUMsTUFBTTtBQUVWQyxRQUZVLGdCQUVMQyxRQUZLLEVBRUtDLElBRkwsRUFFeUI7QUFBQSxZQUFkQyxLQUFjLHVFQUFOLElBQU07O0FBQ2pDLGVBQU9DLFdBQVNOLE9BQVQsR0FBbUJHLFFBQW5CLEVBQStCO0FBQ2xDSSxvQkFBUSxNQUQwQjtBQUVsQ0Msa0JBQU1DLEtBQUtDLFNBQUwsQ0FBZU4sSUFBZixDQUY0QjtBQUdsQ08scUJBQVM7QUFDTEMsMkNBQXlCUCxLQURwQjtBQUVMLGdDQUFnQixrQkFGWDtBQUdMUSxzQkFBTTtBQUhEO0FBSHlCLFNBQS9CLENBQVA7QUFTRDtBQVpTLENBQVo7O2tCQWlCZVosRzs7Ozs7Ozs7Ozs7Ozs7QUNuQmY7Ozs7OztBQUVBLElBQU1hLFFBQVFDLFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLElBQU1DLFdBQVdGLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQSxJQUFNRSxTQUFTSCxTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQWY7O0FBRUEsSUFBSVosT0FBTztBQUNQVSxXQUFPLElBREE7QUFFUEcsY0FBVTtBQUZILENBQVg7O0FBS0FILE1BQU1LLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLGFBQUs7QUFDbENmLFNBQUtVLEtBQUwsR0FBWU0sRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNBO0FBQ0gsQ0FIRDs7QUFLQUwsU0FBU0UsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsYUFBSztBQUNyQ2YsU0FBS2EsUUFBTCxHQUFlRyxFQUFFQyxNQUFGLENBQVNDLEtBQXhCO0FBQ0E7QUFDSCxDQUhEOztBQVFBSixPQUFPQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTQyxDQUFULEVBQVk7QUFDekNBLE1BQUVHLGNBQUY7QUFDQSxRQUFHbkIsS0FBS1UsS0FBTCxJQUFjVixLQUFLYSxRQUF0QixFQUFnQztBQUM1QmhCLHNCQUFJQyxJQUFKLENBQVMsY0FBVCxFQUF5QkUsSUFBekIsRUFDQ29CLElBREQsQ0FDTTtBQUFBLG1CQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxTQUROLEVBRUNGLElBRkQsQ0FFTTtBQUFBLG1CQUFRRyxRQUFRQyxHQUFSLENBQVl4QixJQUFaLENBQVI7QUFBQSxTQUZOO0FBR0gsS0FKRCxNQUlPO0FBQ0h1QixnQkFBUUMsR0FBUixDQUFZLHlCQUFaO0FBQ0g7QUFDSixDQVREOztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJmaWxlIjoic2lnbmluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vVUkvanMvc2lnbmluLmpzXCIpO1xuIiwiY29uc3QgYmFzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjUwMDAvYXBpL3YyJztcblxuY29uc3QgYXBpID0ge1xuICAgIFxuICBwb3N0KGVuZHBvaW50LCBkYXRhLCB0b2tlbiA9IG51bGwpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVybH0ke2VuZHBvaW50fWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBtb2RlOiAnbm8tY29ycycgICAgICBcbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJylcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJylcbmNvbnN0IHNpZ25pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduaW4nKVxuXG5sZXQgZGF0YSA9IHtcbiAgICBlbWFpbDogbnVsbCxcbiAgICBwYXNzd29yZDogbnVsbFxufVxuXG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgIGRhdGEuZW1haWw9IGUudGFyZ2V0LnZhbHVlO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xufSk7XG5cbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgZGF0YS5wYXNzd29yZD0gZS50YXJnZXQudmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG59KTtcblxuXG5cblxuc2lnbmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZihkYXRhLmVtYWlsICYmIGRhdGEucGFzc3dvcmQpIHtcbiAgICAgICAgYXBpLnBvc3QoJy9hdXRoL3NpZ25pbicsIGRhdGEpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCcpXG4gICAgfVxufSlcblxuXG4vLyAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgJysgZXJyb3IpKVxuLy8gLnRoZW4oZGF0YSA9PiB7XG4vLyAgICAgaWYoZGF0YS5tZXNzYWdlICE9PSBcIkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkhXCIpe1xuLy8gICAgICAgICBsZXQgZXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vyci1tZXNzYWdlJylcbi8vICAgICAgICAgZXJyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbi8vICAgICAgICAgZXJyLmlubmVySFRNTCA9IGRhdGEubWVzc2FnZVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgICBzZXRJdGVtcyhkYXRhLnRva2VuLCBkYXRhLmVtYWlsLmVtYWlsKTtcbi8vICAgICB9XG4vLyB9KVxuLy8gcmV0dXJuIGZhbHNlO1xuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=