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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/admin-ongkir.js":
/*!***************************************!*\
  !*** ./src/assets/js/admin-ongkir.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  "use strict"; // Setting page

  var sdokr_setting_els = {
    get_location_btn: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdokr-get-location"),
    loading_block: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-loading"),
    loading_text: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-loading__text"),
    get_location_msg: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-get-location-msg"),
    get_location_spinner: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdokr-get-location").children(".spinner")
  };
  var sdokr_setting_func = {
    get_location: function get_location() {
      sdokr_setting_els.get_location_btn.attr("disabled", true);
      sdokr_setting_els.loading_block.removeClass("sdokr-hide");
      sdokr_setting_els.get_location_spinner.removeClass("sdokr-hide");
      sdokr_setting_func.get_province().then(function (res) {
        console.log(res);
        return sdokr_setting_func.get_city();
      }).then(function (res) {
        console.log(res);
        return sdokr_setting_func.get_intl_origin();
      }).then(function (res) {
        console.log(res);
        return sdokr_setting_func.get_intl_destination();
      }).then(function (res) {
        console.log(res);
        sdokr_setting_func.get_all_subdistricts();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    get_province: function get_province() {
      sdokr_setting_els.loading_text.html(ongkir_lcz.get_province_text);
      return new Promise(function (resolve, reject) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: ongkir_lcz.ajaxurl,
          type: "POST",
          data: {
            action: "ongkir_get_province",
            nonce_ajax: ongkir_lcz.nonce
          },
          success: function success(res) {
            // console.log(res);
            var data = res.data;
            resolve(data);
          },
          error: function error(err) {
            console.log(err);
            alert(err.responseJSON.data.message);
            reject(err.responseJSON.data.message);
          }
        });
      });
    },
    get_city: function get_city() {
      sdokr_setting_els.loading_text.html(ongkir_lcz.get_city_text);
      return new Promise(function (resolve, reject) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: ongkir_lcz.ajaxurl,
          type: "POST",
          data: {
            action: "ongkir_get_city",
            nonce_ajax: ongkir_lcz.nonce
          },
          success: function success(res) {
            // console.log(res);
            var data = res.data;
            resolve(data);
          },
          error: function error(err) {
            console.log(err);
            alert(err.responseJSON.data.message);
            reject(err.responseJSON.data.message);
          }
        });
      });
    },
    get_subdistrict: function get_subdistrict() {
      var last_city_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new Promise(function (resolve, reject) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: ongkir_lcz.ajaxurl,
          type: "POST",
          data: {
            action: "ongkir_get_subdistrict",
            nonce_ajax: ongkir_lcz.nonce,
            last_city_id: last_city_id
          },
          success: function success(res) {
            // console.log(res);
            var data = res.data;
            sdokr_setting_els.loading_text.html(data.message);
            resolve(data);
          },
          error: function error(err) {
            console.log(err);
            alert(err.responseJSON.data.message);
            reject("Getting subdistricts error");
          }
        });
      });
    },
    get_all_subdistricts: function get_all_subdistricts() {
      var last_city_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      sdokr_setting_func.get_subdistrict(last_city_id).then(function (res) {
        var data = res.data;

        if (!data.done) {
          console.log(data);
          sdokr_setting_func.get_all_subdistricts(data.city_id);
        } else {
          sdokr_setting_els.get_location_btn.attr("disabled", false);
          sdokr_setting_els.get_location_spinner.addClass("sdokr-hide");
          sdokr_setting_els.get_location_msg.removeClass("sdokr-hide");
          sdokr_setting_els.loading_block.addClass("sdokr-hide");
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    get_intl_origin: function get_intl_origin() {
      sdokr_setting_els.loading_text.html(ongkir_lcz.get_intl_origin_text);
      return new Promise(function (resolve, reject) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: ongkir_lcz.ajaxurl,
          type: "POST",
          data: {
            action: "ongkir_get_intl_origin",
            nonce_ajax: ongkir_lcz.nonce
          },
          success: function success(res) {
            // console.log(res);
            var data = res.data;
            resolve(data);
          },
          error: function error(err) {
            console.log(err);
            alert(err.responseJSON.data.message);
            reject(err.responseJSON.data.message);
          }
        });
      });
    },
    get_intl_destination: function get_intl_destination() {
      sdokr_setting_els.loading_text.html(ongkir_lcz.get_intl_destination_text);
      return new Promise(function (resolve, reject) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: ongkir_lcz.ajaxurl,
          type: "POST",
          data: {
            action: "ongkir_get_intl_destination",
            nonce_ajax: ongkir_lcz.nonce
          },
          success: function success(res) {
            // console.log(res);
            var data = res.data;
            resolve(data);
          },
          error: function error(err) {
            console.log(err);
            alert(err.responseJSON.data.message);
            reject(err.responseJSON.data.message);
          }
        });
      });
    }
  };
  sdokr_setting_els.get_location_btn.on("click", function () {
    sdokr_setting_func.get_location();
  });
});

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/assets/js/admin-ongkir.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\wordpress\wp-content\plugins\ongkir\src\assets\js\admin-ongkir.js */"./src/assets/js/admin-ongkir.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1vbmdraXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZG9rcl9zZXR0aW5nX2VscyIsImdldF9sb2NhdGlvbl9idG4iLCJsb2FkaW5nX2Jsb2NrIiwibG9hZGluZ190ZXh0IiwiZ2V0X2xvY2F0aW9uX21zZyIsImdldF9sb2NhdGlvbl9zcGlubmVyIiwiY2hpbGRyZW4iLCJzZG9rcl9zZXR0aW5nX2Z1bmMiLCJnZXRfbG9jYXRpb24iLCJhdHRyIiwicmVtb3ZlQ2xhc3MiLCJnZXRfcHJvdmluY2UiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImdldF9jaXR5IiwiZ2V0X2ludGxfb3JpZ2luIiwiZ2V0X2ludGxfZGVzdGluYXRpb24iLCJnZXRfYWxsX3N1YmRpc3RyaWN0cyIsImVyciIsImh0bWwiLCJvbmdraXJfbGN6IiwiZ2V0X3Byb3ZpbmNlX3RleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFqYXgiLCJ1cmwiLCJhamF4dXJsIiwidHlwZSIsImRhdGEiLCJhY3Rpb24iLCJub25jZV9hamF4Iiwibm9uY2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJhbGVydCIsInJlc3BvbnNlSlNPTiIsIm1lc3NhZ2UiLCJnZXRfY2l0eV90ZXh0IiwiZ2V0X3N1YmRpc3RyaWN0IiwibGFzdF9jaXR5X2lkIiwiZG9uZSIsImNpdHlfaWQiLCJhZGRDbGFzcyIsImdldF9pbnRsX29yaWdpbl90ZXh0IiwiZ2V0X2ludGxfZGVzdGluYXRpb25fdGV4dCIsIm9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7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QUFqQixDQUFzQlEsT0FBdkIsQ0FBTDtBQUNBYixrQkFBTSxDQUFDTixHQUFHLENBQUNrQixZQUFKLENBQWlCUCxJQUFqQixDQUFzQlEsT0FBdkIsQ0FBTjtBQUNIO0FBaEJFLFNBQVA7QUFrQkgsT0FuQk0sQ0FBUDtBQW9CSDtBQTdLb0IsR0FBekI7QUFnTEF2QyxtQkFBaUIsQ0FBQ0MsZ0JBQWxCLENBQW1DK0MsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsWUFBWTtBQUN2RHpDLHNCQUFrQixDQUFDQyxZQUFuQjtBQUNILEdBRkQ7QUFHSCxDQS9MRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLHdCIiwiZmlsZSI6ImFkbWluLW9uZ2tpci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8vIFNldHRpbmcgcGFnZVxyXG4gICAgbGV0IHNkb2tyX3NldHRpbmdfZWxzID0ge1xyXG4gICAgICAgIGdldF9sb2NhdGlvbl9idG46ICQoXCIjc2Rva3ItZ2V0LWxvY2F0aW9uXCIpLFxyXG4gICAgICAgIGxvYWRpbmdfYmxvY2s6ICQoXCIuc2Rva3ItbG9hZGluZ1wiKSxcclxuICAgICAgICBsb2FkaW5nX3RleHQ6ICQoXCIuc2Rva3ItbG9hZGluZ19fdGV4dFwiKSxcclxuICAgICAgICBnZXRfbG9jYXRpb25fbXNnOiAkKFwiLnNkb2tyLWdldC1sb2NhdGlvbi1tc2dcIiksXHJcbiAgICAgICAgZ2V0X2xvY2F0aW9uX3NwaW5uZXI6ICQoXCIjc2Rva3ItZ2V0LWxvY2F0aW9uXCIpLmNoaWxkcmVuKFwiLnNwaW5uZXJcIiksXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZG9rcl9zZXR0aW5nX2Z1bmMgPSB7XHJcbiAgICAgICAgZ2V0X2xvY2F0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9idG4uYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX2Jsb2NrLnJlbW92ZUNsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX3NwaW5uZXIucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmNcclxuICAgICAgICAgICAgICAgIC5nZXRfcHJvdmluY2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfY2l0eSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2ludGxfb3JpZ2luKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfaW50bF9kZXN0aW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfYWxsX3N1YmRpc3RyaWN0cygpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X3Byb3ZpbmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKG9uZ2tpcl9sY3ouZ2V0X3Byb3ZpbmNlX3RleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3Byb3ZpbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9jaXR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKG9uZ2tpcl9sY3ouZ2V0X2NpdHlfdGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfY2l0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfc3ViZGlzdHJpY3Q6IGZ1bmN0aW9uIChsYXN0X2NpdHlfaWQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfc3ViZGlzdHJpY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jaXR5X2lkOiBsYXN0X2NpdHlfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkdldHRpbmcgc3ViZGlzdHJpY3RzIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfYWxsX3N1YmRpc3RyaWN0czogZnVuY3Rpb24gKGxhc3RfY2l0eV9pZCA9IDApIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jXHJcbiAgICAgICAgICAgICAgICAuZ2V0X3N1YmRpc3RyaWN0KGxhc3RfY2l0eV9pZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9hbGxfc3ViZGlzdHJpY3RzKGRhdGEuY2l0eV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX2J0bi5hdHRyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9zcGlubmVyLmFkZENsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZG9rci1oaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9tc2cucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNkb2tyLWhpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ19ibG9jay5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X2ludGxfb3JpZ2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKFxyXG4gICAgICAgICAgICAgICAgb25na2lyX2xjei5nZXRfaW50bF9vcmlnaW5fdGV4dCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9pbnRsX29yaWdpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfaW50bF9kZXN0aW5hdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChcclxuICAgICAgICAgICAgICAgIG9uZ2tpcl9sY3ouZ2V0X2ludGxfZGVzdGluYXRpb25fdGV4dCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9pbnRsX2Rlc3RpbmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fYnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfbG9jYXRpb24oKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==