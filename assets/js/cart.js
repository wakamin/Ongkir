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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/cart.js":
/*!*******************************!*\
  !*** ./src/assets/js/cart.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var html = {
    city_text: "<input type=\"text\" class=\"input-text\" value=\"\" placeholder=\"".concat(sdongkir_lcz.city_text, "\" name=\"calc_shipping_city\" id=\"calc_shipping_city\" />"),
    city_select: "<select name=\"calc_shipping_city\" class=\"state_select\" id=\"calc_shipping_city\" data-placeholder=\"".concat(sdongkir_lcz.city_text, "\">\n                <option value=\"\">").concat(sdongkir_lcz.please_select_text, "</option>\n            </select>")
  }; // Initialize the input field type

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_country").val() == "ID") {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict_field").removeClass("sdokr-hide");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict_field").addClass("sdokr-hide");
  } // On country change


  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("change", "#calc_shipping_country", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").empty();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").val() == "";
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").empty();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").val() == "";
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city_field").empty();

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val() == "ID") {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city_field").append(html.city_select);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict_field").removeClass("sdokr-hide");
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city_field").append(html.city_text);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict_field").addClass("sdokr-hide");
    }
  }); // On state change

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("change", "#calc_shipping_state", function () {
    var province = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();

    if (province != undefined) {
      sdokr_get_city_options(province);
    }
  }); // On city change

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("change", "#calc_shipping_city", function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_country").val() == "ID") {
      sdokr_get_subdistrict_options(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
    }
  }); // On change subdistrict

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("change", "#calc_shipping_subdistrict", function () {
    sdokr_set_session_subdistrict(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
  }); // Get city options

  function sdokr_get_city_options(province) {
    return new Promise(function (resolve, reject) {
      if (province == "") {
        resolve();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").val() == "";
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").val() == "";
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_get_cities_by_province",
          nonce_ajax: sdongkir_lcz.nonce,
          province: province
        },
        success: function success(res) {
          var cities = res.data.data;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          cities.forEach(function (city) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "".concat(city.type, " ").concat(city.name)).text("".concat(city.type, " ").concat(city.name)));
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").attr("disabled", false);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").attr("disabled", false);
          resolve();
        },
        error: function error(err) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").attr("disabled", false);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").attr("disabled", false);
          reject("Something went wrong");
        }
      });
    });
  } // Get subdistrict options


  function sdokr_get_subdistrict_options(city) {
    return new Promise(function (resolve, reject) {
      if (city == "") {
        resolve();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").val() == "";
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_get_subdistricts_by_city",
          nonce_ajax: sdongkir_lcz.nonce,
          city: city
        },
        success: function success(res) {
          var subdistricts = res.data.data;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          subdistricts.forEach(function (subdistrict) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", subdistrict.name).text(subdistrict.name));
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").attr("disabled", false);
          resolve();
        },
        error: function error(err) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").attr("disabled", false);
          reject("Something went wrong");
        }
      });
    });
  } // Set session subdistrict


  function sdokr_set_session_subdistrict(subdistrict_id) {
    return new Promise(function (resolve, reject) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name="calc_shipping"]').attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_set_session_subdistrict",
          nonce_ajax: sdongkir_lcz.nonce,
          subdistrict_id: subdistrict_id
        },
        success: function success(res) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name="calc_shipping"]').attr("disabled", false);
          resolve(res);
        },
        error: function error(err) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name="calc_shipping"]').attr("disabled", false);
          reject(err);
        }
      });
    });
  }
});

/***/ }),

/***/ 2:
/*!*************************************!*\
  !*** multi ./src/assets/js/cart.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Course\WooCommerce\JuanPablo\wp-content\plugins\ongkir\src\assets\js\cart.js */"./src/assets/js/cart.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jYXJ0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaHRtbCIsImNpdHlfdGV4dCIsInNkb25na2lyX2xjeiIsImNpdHlfc2VsZWN0IiwicGxlYXNlX3NlbGVjdF90ZXh0IiwidmFsIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm9uIiwiZW1wdHkiLCJhcHBlbmQiLCJwcm92aW5jZSIsInVuZGVmaW5lZCIsInNkb2tyX2dldF9jaXR5X29wdGlvbnMiLCJzZG9rcl9nZXRfc3ViZGlzdHJpY3Rfb3B0aW9ucyIsInNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhdHRyIiwiYWpheCIsInVybCIsImFqYXh1cmwiLCJ0eXBlIiwiZGF0YSIsImFjdGlvbiIsIm5vbmNlX2FqYXgiLCJub25jZSIsInN1Y2Nlc3MiLCJyZXMiLCJjaXRpZXMiLCJ0ZXh0IiwiZm9yRWFjaCIsImNpdHkiLCJuYW1lIiwiZXJyb3IiLCJlcnIiLCJzdWJkaXN0cmljdHMiLCJzdWJkaXN0cmljdCIsInN1YmRpc3RyaWN0X2lkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGh0bWwgPSB7XHJcbiAgICAgICAgY2l0eV90ZXh0OiBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dC10ZXh0XCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIiR7c2RvbmdraXJfbGN6LmNpdHlfdGV4dH1cIiBuYW1lPVwiY2FsY19zaGlwcGluZ19jaXR5XCIgaWQ9XCJjYWxjX3NoaXBwaW5nX2NpdHlcIiAvPmAsXHJcbiAgICAgICAgY2l0eV9zZWxlY3Q6IGA8c2VsZWN0IG5hbWU9XCJjYWxjX3NoaXBwaW5nX2NpdHlcIiBjbGFzcz1cInN0YXRlX3NlbGVjdFwiIGlkPVwiY2FsY19zaGlwcGluZ19jaXR5XCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7c2RvbmdraXJfbGN6LmNpdHlfdGV4dH1cIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4ke3Nkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHR9PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PmAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgdGhlIGlucHV0IGZpZWxkIHR5cGVcclxuICAgIGlmICgkKFwiI2NhbGNfc2hpcHBpbmdfY291bnRyeVwiKS52YWwoKSA9PSBcIklEXCIpIHtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGRcIikucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGRcIikuYWRkQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9uIGNvdW50cnkgY2hhbmdlXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCBcIiNjYWxjX3NoaXBwaW5nX2NvdW50cnlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX2NpdHlcIikudmFsKCkgPT0gXCJcIjtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuZW1wdHkoKTtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikudmFsKCkgPT0gXCJcIjtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eV9maWVsZFwiKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIklEXCIpIHtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX2NpdHlfZmllbGRcIikuYXBwZW5kKGh0bWwuY2l0eV9zZWxlY3QpO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGRcIikucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5X2ZpZWxkXCIpLmFwcGVuZChodG1sLmNpdHlfdGV4dCk7XHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdF9maWVsZFwiKS5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gc3RhdGUgY2hhbmdlXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCBcIiNjYWxjX3NoaXBwaW5nX3N0YXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwcm92aW5jZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYgKHByb3ZpbmNlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZG9rcl9nZXRfY2l0eV9vcHRpb25zKHByb3ZpbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPbiBjaXR5IGNoYW5nZVxyXG4gICAgJChkb2N1bWVudCkub24oXCJjaGFuZ2VcIiwgXCIjY2FsY19zaGlwcGluZ19jaXR5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJChcIiNjYWxjX3NoaXBwaW5nX2NvdW50cnlcIikudmFsKCkgPT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX2dldF9zdWJkaXN0cmljdF9vcHRpb25zKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBzdWJkaXN0cmljdFxyXG4gICAgJChkb2N1bWVudCkub24oXCJjaGFuZ2VcIiwgXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3QoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHZXQgY2l0eSBvcHRpb25zXHJcbiAgICBmdW5jdGlvbiBzZG9rcl9nZXRfY2l0eV9vcHRpb25zKHByb3ZpbmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHByb3ZpbmNlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX2NpdHlcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX2NpdHlcIikudmFsKCkgPT0gXCJcIjtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS52YWwoKSA9PSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9jaXRpZXNfYnlfcHJvdmluY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2U6IHByb3ZpbmNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaXRpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIGAke2NpdHkudHlwZX0gJHtjaXR5Lm5hbWV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChgJHtjaXR5LnR5cGV9ICR7Y2l0eS5uYW1lfWApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHN1YmRpc3RyaWN0IG9wdGlvbnNcclxuICAgIGZ1bmN0aW9uIHNkb2tyX2dldF9zdWJkaXN0cmljdF9vcHRpb25zKGNpdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoY2l0eSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLnZhbCgpID09IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3N1YmRpc3RyaWN0c19ieV9jaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IGNpdHksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YmRpc3RyaWN0cyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJkaXN0cmljdHMuZm9yRWFjaCgoc3ViZGlzdHJpY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgc3ViZGlzdHJpY3QubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzdWJkaXN0cmljdC5uYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHNlc3Npb24gc3ViZGlzdHJpY3RcclxuICAgIGZ1bmN0aW9uIHNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0KHN1YmRpc3RyaWN0X2lkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgJCgnYnV0dG9uW25hbWU9XCJjYWxjX3NoaXBwaW5nXCJdJykuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViZGlzdHJpY3RfaWQ6IHN1YmRpc3RyaWN0X2lkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdidXR0b25bbmFtZT1cImNhbGNfc2hpcHBpbmdcIl0nKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2J1dHRvbltuYW1lPVwiY2FsY19zaGlwcGluZ1wiXScpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=