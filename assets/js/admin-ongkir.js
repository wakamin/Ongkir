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
/* harmony import */ var _admin_main_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/main-config */ "./src/assets/js/admin/main-config.js");
/* harmony import */ var _admin_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/general */ "./src/assets/js/admin/general.js");



/***/ }),

/***/ "./src/assets/js/admin/general.js":
/*!****************************************!*\
  !*** ./src/assets/js/admin/general.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-select-all").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target")).prop("checked", true);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-unselect-all").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target")).prop("checked", false);
  });
});

/***/ }),

/***/ "./src/assets/js/admin/main-config.js":
/*!********************************************!*\
  !*** ./src/assets/js/admin/main-config.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  "use strict"; // Setting page

  var sdokr_setting_els = {
    setting_form: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdokr_setting_form"),
    account_type: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdokr_rajaongkir_account_type"),
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
      sdokr_setting_els.get_location_msg.addClass("sdokr-hide");
      sdokr_setting_func.get_province().then(function (res) {
        return sdokr_setting_func.get_city();
      }).then(function (res) {
        return sdokr_setting_func.get_intl_origin();
      }).then(function (res) {
        return sdokr_setting_func.get_intl_destination();
      }).then(function (res) {
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
          sdokr_setting_func.get_all_subdistricts(data.city_id);
        } else {
          sdokr_setting_els.get_location_btn.attr("disabled", false);
          sdokr_setting_els.get_location_spinner.addClass("sdokr-hide");
          sdokr_setting_els.get_location_msg.removeClass("sdokr-hide");
          sdokr_setting_els.loading_block.addClass("sdokr-hide");
          window.location.reload();
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
  }; // On click get location button

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

module.exports = __webpack_require__(/*! E:\Course\WooCommerce\JuanPablo\wp-content\plugins\ongkir\src\assets\js\admin-ongkir.js */"./src/assets/js/admin-ongkir.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1vbmdraXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi9nZW5lcmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYWRtaW4vbWFpbi1jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImRhdGEiLCJwcm9wIiwic2Rva3Jfc2V0dGluZ19lbHMiLCJzZXR0aW5nX2Zvcm0iLCJhY2NvdW50X3R5cGUiLCJnZXRfbG9jYXRpb25fYnRuIiwibG9hZGluZ19ibG9jayIsImxvYWRpbmdfdGV4dCIsImdldF9sb2NhdGlvbl9tc2ciLCJnZXRfbG9jYXRpb25fc3Bpbm5lciIsImNoaWxkcmVuIiwic2Rva3Jfc2V0dGluZ19mdW5jIiwiZ2V0X2xvY2F0aW9uIiwiYXR0ciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJnZXRfcHJvdmluY2UiLCJ0aGVuIiwicmVzIiwiZ2V0X2NpdHkiLCJnZXRfaW50bF9vcmlnaW4iLCJnZXRfaW50bF9kZXN0aW5hdGlvbiIsImdldF9hbGxfc3ViZGlzdHJpY3RzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJvbmdraXJfbGN6IiwiZ2V0X3Byb3ZpbmNlX3RleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFqYXgiLCJ1cmwiLCJhamF4dXJsIiwidHlwZSIsImFjdGlvbiIsIm5vbmNlX2FqYXgiLCJub25jZSIsInN1Y2Nlc3MiLCJlcnJvciIsImFsZXJ0IiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsImdldF9jaXR5X3RleHQiLCJnZXRfc3ViZGlzdHJpY3QiLCJsYXN0X2NpdHlfaWQiLCJkb25lIiwiY2l0eV9pZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2Fk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LEVBQStDLFlBQVk7QUFDdkRZLHNCQUFrQixDQUFDQyxZQUFuQjtBQUNILEdBRkQ7QUFHSCxDQS9MRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLHdCIiwiZmlsZSI6ImFkbWluLW9uZ2tpci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBcIi4vYWRtaW4vbWFpbi1jb25maWdcIjtcclxuaW1wb3J0IFwiLi9hZG1pbi9nZW5lcmFsXCI7XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuc2Rva3Itc2VsZWN0LWFsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCQodGhpcykuZGF0YShcInRhcmdldFwiKSkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnNkb2tyLXVuc2VsZWN0LWFsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCQodGhpcykuZGF0YShcInRhcmdldFwiKSkucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvLyBTZXR0aW5nIHBhZ2VcclxuICAgIGxldCBzZG9rcl9zZXR0aW5nX2VscyA9IHtcclxuICAgICAgICBzZXR0aW5nX2Zvcm06ICQoXCIjc2Rva3Jfc2V0dGluZ19mb3JtXCIpLFxyXG4gICAgICAgIGFjY291bnRfdHlwZTogJChcIiNzZG9rcl9yYWphb25na2lyX2FjY291bnRfdHlwZVwiKSxcclxuICAgICAgICBnZXRfbG9jYXRpb25fYnRuOiAkKFwiI3Nkb2tyLWdldC1sb2NhdGlvblwiKSxcclxuICAgICAgICBsb2FkaW5nX2Jsb2NrOiAkKFwiLnNkb2tyLWxvYWRpbmdcIiksXHJcbiAgICAgICAgbG9hZGluZ190ZXh0OiAkKFwiLnNkb2tyLWxvYWRpbmdfX3RleHRcIiksXHJcbiAgICAgICAgZ2V0X2xvY2F0aW9uX21zZzogJChcIi5zZG9rci1nZXQtbG9jYXRpb24tbXNnXCIpLFxyXG4gICAgICAgIGdldF9sb2NhdGlvbl9zcGlubmVyOiAkKFwiI3Nkb2tyLWdldC1sb2NhdGlvblwiKS5jaGlsZHJlbihcIi5zcGlubmVyXCIpLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2Rva3Jfc2V0dGluZ19mdW5jID0ge1xyXG4gICAgICAgIGdldF9sb2NhdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fYnRuLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ19ibG9jay5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9zcGlubmVyLnJlbW92ZUNsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX21zZy5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuY1xyXG4gICAgICAgICAgICAgICAgLmdldF9wcm92aW5jZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfY2l0eSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9pbnRsX29yaWdpbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9pbnRsX2Rlc3RpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfYWxsX3N1YmRpc3RyaWN0cygpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X3Byb3ZpbmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKG9uZ2tpcl9sY3ouZ2V0X3Byb3ZpbmNlX3RleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3Byb3ZpbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9jaXR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKG9uZ2tpcl9sY3ouZ2V0X2NpdHlfdGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfY2l0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfc3ViZGlzdHJpY3Q6IGZ1bmN0aW9uIChsYXN0X2NpdHlfaWQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfc3ViZGlzdHJpY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jaXR5X2lkOiBsYXN0X2NpdHlfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkdldHRpbmcgc3ViZGlzdHJpY3RzIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfYWxsX3N1YmRpc3RyaWN0czogZnVuY3Rpb24gKGxhc3RfY2l0eV9pZCA9IDApIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jXHJcbiAgICAgICAgICAgICAgICAuZ2V0X3N1YmRpc3RyaWN0KGxhc3RfY2l0eV9pZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2FsbF9zdWJkaXN0cmljdHMoZGF0YS5jaXR5X2lkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fYnRuLmF0dHIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX3NwaW5uZXIuYWRkQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNkb2tyLWhpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX21zZy5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2Rva3ItaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX2Jsb2NrLmFkZENsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9pbnRsX29yaWdpbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChcclxuICAgICAgICAgICAgICAgIG9uZ2tpcl9sY3ouZ2V0X2ludGxfb3JpZ2luX3RleHQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfaW50bF9vcmlnaW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X2ludGxfZGVzdGluYXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwoXHJcbiAgICAgICAgICAgICAgICBvbmdraXJfbGN6LmdldF9pbnRsX2Rlc3RpbmF0aW9uX3RleHQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfaW50bF9kZXN0aW5hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gT24gY2xpY2sgZ2V0IGxvY2F0aW9uIGJ1dHRvblxyXG4gICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX2J0bi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2xvY2F0aW9uKCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=