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
  }); // On change account type

  sdokr_setting_els.account_type.on("change", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("input#submit").trigger("click");
  });
});

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/assets/js/admin-ongkir.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/wordpress/wp-content/plugins/ongkir/src/assets/js/admin-ongkir.js */"./src/assets/js/admin-ongkir.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1vbmdraXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZG9rcl9zZXR0aW5nX2VscyIsInNldHRpbmdfZm9ybSIsImFjY291bnRfdHlwZSIsImdldF9sb2NhdGlvbl9idG4iLCJsb2FkaW5nX2Jsb2NrIiwibG9hZGluZ190ZXh0IiwiZ2V0X2xvY2F0aW9uX21zZyIsImdldF9sb2NhdGlvbl9zcGlubmVyIiwiY2hpbGRyZW4iLCJzZG9rcl9zZXR0aW5nX2Z1bmMiLCJnZXRfbG9jYXRpb24iLCJhdHRyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImdldF9wcm92aW5jZSIsInRoZW4iLCJyZXMiLCJnZXRfY2l0eSIsImdldF9pbnRsX29yaWdpbiIsImdldF9pbnRsX2Rlc3RpbmF0aW9uIiwiZ2V0X2FsbF9zdWJkaXN0cmljdHMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsIm9uZ2tpcl9sY3oiLCJnZXRfcHJvdmluY2VfdGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWpheCIsInVybCIsImFqYXh1cmwiLCJ0eXBlIiwiZGF0YSIsImFjdGlvbiIsIm5vbmNlX2FqYXgiLCJub25jZSIsInN1Y2Nlc3MiLCJlcnJvciIsImFsZXJ0IiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsImdldF9jaXR5X3RleHQiLCJnZXRfc3ViZGlzdHJpY3QiLCJsYXN0X2NpdHlfaWQiLCJkb25lIiwiY2l0eV9pZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0X2ludGxfb3JpZ2luX3RleHQiLCJnZXRfaW50bF9kZXN0aW5hdGlvbl90ZXh0Iiwib24iLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQW1CLGlCQUFLLENBQUNuQixHQUFHLENBQUNvQixZQUFKLENBQWlCUCxJQUFqQixDQUFzQlEsT0FBdkIsQ0FBTDtBQUNBYixrQkFBTSxDQUFDUixHQUFHLENBQUNvQixZQUFKLENBQWlCUCxJQUFqQixDQUFzQlEsT0FBdkIsQ0FBTjtBQUNIO0FBaEJFLFNBQVA7QUFrQkgsT0FuQk0sQ0FBUDtBQW9CSDtBQTFLb0IsR0FBekIsQ0FkMEIsQ0EyTDFCOztBQUNBMUMsbUJBQWlCLENBQUNHLGdCQUFsQixDQUFtQ2tELEVBQW5DLENBQXNDLE9BQXRDLEVBQStDLFlBQVk7QUFDdkQ1QyxzQkFBa0IsQ0FBQ0MsWUFBbkI7QUFDSCxHQUZELEVBNUwwQixDQWdNMUI7O0FBQ0FWLG1CQUFpQixDQUFDRSxZQUFsQixDQUErQm1ELEVBQS9CLENBQWtDLFFBQWxDLEVBQTRDLFlBQVk7QUFDcER4RCxpREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnlELE9BQWxCLENBQTBCLE9BQTFCO0FBQ0gsR0FGRDtBQUdILENBcE1ELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsd0IiLCJmaWxlIjoiYWRtaW4tb25na2lyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBTZXR0aW5nIHBhZ2VcbiAgICBsZXQgc2Rva3Jfc2V0dGluZ19lbHMgPSB7XG4gICAgICAgIHNldHRpbmdfZm9ybTogJChcIiNzZG9rcl9zZXR0aW5nX2Zvcm1cIiksXG4gICAgICAgIGFjY291bnRfdHlwZTogJChcIiNzZG9rcl9yYWphb25na2lyX2FjY291bnRfdHlwZVwiKSxcbiAgICAgICAgZ2V0X2xvY2F0aW9uX2J0bjogJChcIiNzZG9rci1nZXQtbG9jYXRpb25cIiksXG4gICAgICAgIGxvYWRpbmdfYmxvY2s6ICQoXCIuc2Rva3ItbG9hZGluZ1wiKSxcbiAgICAgICAgbG9hZGluZ190ZXh0OiAkKFwiLnNkb2tyLWxvYWRpbmdfX3RleHRcIiksXG4gICAgICAgIGdldF9sb2NhdGlvbl9tc2c6ICQoXCIuc2Rva3ItZ2V0LWxvY2F0aW9uLW1zZ1wiKSxcbiAgICAgICAgZ2V0X2xvY2F0aW9uX3NwaW5uZXI6ICQoXCIjc2Rva3ItZ2V0LWxvY2F0aW9uXCIpLmNoaWxkcmVuKFwiLnNwaW5uZXJcIiksXG4gICAgfTtcblxuICAgIGxldCBzZG9rcl9zZXR0aW5nX2Z1bmMgPSB7XG4gICAgICAgIGdldF9sb2NhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX2J0bi5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX2Jsb2NrLnJlbW92ZUNsYXNzKFwic2Rva3ItaGlkZVwiKTtcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9zcGlubmVyLnJlbW92ZUNsYXNzKFwic2Rva3ItaGlkZVwiKTtcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9tc2cuYWRkQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jXG4gICAgICAgICAgICAgICAgLmdldF9wcm92aW5jZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9jaXR5KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2ludGxfb3JpZ2luKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2ludGxfZGVzdGluYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9hbGxfc3ViZGlzdHJpY3RzKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRfcHJvdmluY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKG9uZ2tpcl9sY3ouZ2V0X3Byb3ZpbmNlX3RleHQpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IG9uZ2tpcl9sY3ouYWpheHVybCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3Byb3ZpbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBvbmdraXJfbGN6Lm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRfY2l0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwob25na2lyX2xjei5nZXRfY2l0eV90ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBvbmdraXJfbGN6LmFqYXh1cmwsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9jaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBvbmdraXJfbGN6Lm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRfc3ViZGlzdHJpY3Q6IGZ1bmN0aW9uIChsYXN0X2NpdHlfaWQgPSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogb25na2lyX2xjei5hamF4dXJsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfc3ViZGlzdHJpY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IG9uZ2tpcl9sY3oubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NpdHlfaWQ6IGxhc3RfY2l0eV9pZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJHZXR0aW5nIHN1YmRpc3RyaWN0cyBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRfYWxsX3N1YmRpc3RyaWN0czogZnVuY3Rpb24gKGxhc3RfY2l0eV9pZCA9IDApIHtcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuY1xuICAgICAgICAgICAgICAgIC5nZXRfc3ViZGlzdHJpY3QobGFzdF9jaXR5X2lkKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9hbGxfc3ViZGlzdHJpY3RzKGRhdGEuY2l0eV9pZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fYnRuLmF0dHIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9zcGlubmVyLmFkZENsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2Rva3ItaGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9tc2cucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZG9rci1oaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ19ibG9jay5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldF9pbnRsX29yaWdpbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwoXG4gICAgICAgICAgICAgICAgb25na2lyX2xjei5nZXRfaW50bF9vcmlnaW5fdGV4dCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogb25na2lyX2xjei5hamF4dXJsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfaW50bF9vcmlnaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IG9uZ2tpcl9sY3oubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldF9pbnRsX2Rlc3RpbmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChcbiAgICAgICAgICAgICAgICBvbmdraXJfbGN6LmdldF9pbnRsX2Rlc3RpbmF0aW9uX3RleHQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IG9uZ2tpcl9sY3ouYWpheHVybCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2ludGxfZGVzdGluYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IG9uZ2tpcl9sY3oubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIE9uIGNsaWNrIGdldCBsb2NhdGlvbiBidXR0b25cbiAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fYnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2xvY2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBjaGFuZ2UgYWNjb3VudCB0eXBlXG4gICAgc2Rva3Jfc2V0dGluZ19lbHMuYWNjb3VudF90eXBlLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcImlucHV0I3N1Ym1pdFwiKS50cmlnZ2VyKFwiY2xpY2tcIik7XG4gICAgfSk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=