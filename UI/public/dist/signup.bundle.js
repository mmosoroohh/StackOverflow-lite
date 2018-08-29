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
/******/ 	return __webpack_require__(__webpack_require__.s = "./UI/js/signup.js");
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

/***/ "./UI/js/signup.js":
/*!*************************!*\
  !*** ./UI/js/signup.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _api = __webpack_require__(/*! ./api */ "./UI/js/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var signup = document.getElementById('signup');

var data = {
    name: null,
    email: null,
    password: null
};

name.addEventListener("change", function (e) {
    data.name = e.target.value;
    // console.log(data)
});

email.addEventListener("change", function (e) {
    data.email = e.target.value;
    // console.log(data);
});

password.addEventListener("change", function (e) {
    data.password = e.target.value;
    // console.log(data);
});

signup.addEventListener('click', function (e) {
    e.preventDefault();
    if (data.name && data.email && data.password) {
        _api2.default.post('/auth/signup', data).then(function (res) {
            return res.json();
        }).then(function (data) {
            return console.log(data);
        });
    } else {
        console.log('All fields are required');
    }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVUkvanMvYXBpLmpzIiwid2VicGFjazovLy8uL1VJL2pzL3NpZ251cC5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwiYXBpIiwicG9zdCIsImVuZHBvaW50IiwiZGF0YSIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibW9kZSIsIm5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ251cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLFVBQVUsOEJBQWhCOztBQUVBLElBQU1DLE1BQU07QUFFVkMsUUFGVSxnQkFFTEMsUUFGSyxFQUVLQyxJQUZMLEVBRXlCO0FBQUEsWUFBZEMsS0FBYyx1RUFBTixJQUFNOztBQUNqQyxlQUFPQyxXQUFTTixPQUFULEdBQW1CRyxRQUFuQixFQUErQjtBQUNsQ0ksb0JBQVEsTUFEMEI7QUFFbENDLGtCQUFNQyxLQUFLQyxTQUFMLENBQWVOLElBQWYsQ0FGNEI7QUFHbENPLHFCQUFTO0FBQ0xDLDJDQUF5QlAsS0FEcEI7QUFFTCxnQ0FBZ0Isa0JBRlg7QUFHTFEsc0JBQU07QUFIRDtBQUh5QixTQUEvQixDQUFQO0FBU0Q7QUFaUyxDQUFaOztrQkFpQmVaLEc7Ozs7Ozs7Ozs7Ozs7O0FDbkJmOzs7Ozs7QUFFQSxJQUFNYSxPQUFPQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDQSxJQUFNQyxRQUFRRixTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQSxJQUFNRSxXQUFXSCxTQUFTQyxjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0EsSUFBTUcsU0FBU0osU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFmOztBQUVBLElBQUlaLE9BQU87QUFDUFUsVUFBSyxJQURFO0FBRVBHLFdBQU8sSUFGQTtBQUdQQyxjQUFVO0FBSEgsQ0FBWDs7QUFNQUosS0FBS00sZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsYUFBSztBQUNqQ2hCLFNBQUtVLElBQUwsR0FBV08sRUFBRUMsTUFBRixDQUFTQyxLQUFwQjtBQUNBO0FBQ0gsQ0FIRDs7QUFLQU4sTUFBTUcsZ0JBQU4sQ0FBdUIsUUFBdkIsRUFBaUMsYUFBSztBQUNsQ2hCLFNBQUthLEtBQUwsR0FBWUksRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNBO0FBQ0gsQ0FIRDs7QUFLQUwsU0FBU0UsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsYUFBSztBQUNyQ2hCLFNBQUtjLFFBQUwsR0FBZUcsRUFBRUMsTUFBRixDQUFTQyxLQUF4QjtBQUNBO0FBQ0gsQ0FIRDs7QUFRQUosT0FBT0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU0MsQ0FBVCxFQUFZO0FBQ3pDQSxNQUFFRyxjQUFGO0FBQ0EsUUFBR3BCLEtBQUtVLElBQUwsSUFBYVYsS0FBS2EsS0FBbEIsSUFBMkJiLEtBQUtjLFFBQW5DLEVBQTZDO0FBQ3pDakIsc0JBQUlDLElBQUosQ0FBUyxjQUFULEVBQXlCRSxJQUF6QixFQUErQnFCLElBQS9CLENBQW9DO0FBQUEsbUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLFNBQXBDLEVBQXVERixJQUF2RCxDQUE0RDtBQUFBLG1CQUFRRyxRQUFRQyxHQUFSLENBQVl6QixJQUFaLENBQVI7QUFBQSxTQUE1RDtBQUNILEtBRkQsTUFFTztBQUNId0IsZ0JBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNIO0FBQ0osQ0FQRCxFIiwiZmlsZSI6InNpZ251cC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1VJL2pzL3NpZ251cC5qc1wiKTtcbiIsImNvbnN0IGJhc2VVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo1MDAwL2FwaS92Mic7XG5cbmNvbnN0IGFwaSA9IHtcbiAgICBcbiAgcG9zdChlbmRwb2ludCwgZGF0YSwgdG9rZW4gPSBudWxsKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVcmx9JHtlbmRwb2ludH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgbW9kZTogJ25vLWNvcnMnICAgICAgXG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpOyIsImltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5jb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKVxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKVxuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKVxuY29uc3Qgc2lnbnVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cCcpXG5cbmxldCBkYXRhID0ge1xuICAgIG5hbWU6bnVsbCxcbiAgICBlbWFpbDogbnVsbCxcbiAgICBwYXNzd29yZDogbnVsbFxufVxuXG5uYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgZGF0YS5uYW1lPSBlLnRhcmdldC52YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxufSlcblxuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICBkYXRhLmVtYWlsPSBlLnRhcmdldC52YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgIGRhdGEucGFzc3dvcmQ9IGUudGFyZ2V0LnZhbHVlO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xufSk7XG5cblxuXG5cbnNpZ251cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoZGF0YS5uYW1lICYmIGRhdGEuZW1haWwgJiYgZGF0YS5wYXNzd29yZCkge1xuICAgICAgICBhcGkucG9zdCgnL2F1dGgvc2lnbnVwJywgZGF0YSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCcpXG4gICAgfVxufSlcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9