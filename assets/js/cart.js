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

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jYXJ0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJodG1sIiwiY2l0eV90ZXh0Iiwic2RvbmdraXJfbGN6IiwiY2l0eV9zZWxlY3QiLCJwbGVhc2Vfc2VsZWN0X3RleHQiLCJ2YWwiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZG9jdW1lbnQiLCJvbiIsImVtcHR5IiwiYXBwZW5kIiwicHJvdmluY2UiLCJ1bmRlZmluZWQiLCJzZG9rcl9nZXRfY2l0eV9vcHRpb25zIiwic2Rva3JfZ2V0X3N1YmRpc3RyaWN0X29wdGlvbnMiLCJzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXR0ciIsImFqYXgiLCJ1cmwiLCJhamF4dXJsIiwidHlwZSIsImRhdGEiLCJhY3Rpb24iLCJub25jZV9hamF4Iiwibm9uY2UiLCJzdWNjZXNzIiwicmVzIiwiY2l0aWVzIiwidGV4dCIsImZvckVhY2giLCJjaXR5IiwibmFtZSIsImVycm9yIiwiZXJyIiwic3ViZGlzdHJpY3RzIiwic3ViZGlzdHJpY3QiLCJzdWJkaXN0cmljdF9pZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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ciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaHRtbCA9IHtcclxuICAgICAgICBjaXR5X3RleHQ6IGA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LXRleHRcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiJHtzZG9uZ2tpcl9sY3ouY2l0eV90ZXh0fVwiIG5hbWU9XCJjYWxjX3NoaXBwaW5nX2NpdHlcIiBpZD1cImNhbGNfc2hpcHBpbmdfY2l0eVwiIC8+YCxcclxuICAgICAgICBjaXR5X3NlbGVjdDogYDxzZWxlY3QgbmFtZT1cImNhbGNfc2hpcHBpbmdfY2l0eVwiIGNsYXNzPVwic3RhdGVfc2VsZWN0XCIgaWQ9XCJjYWxjX3NoaXBwaW5nX2NpdHlcIiBkYXRhLXBsYWNlaG9sZGVyPVwiJHtzZG9uZ2tpcl9sY3ouY2l0eV90ZXh0fVwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPiR7c2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dH08L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+YCxcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgaW5wdXQgZmllbGQgdHlwZVxyXG4gICAgaWYgKCQoXCIjY2FsY19zaGlwcGluZ19jb3VudHJ5XCIpLnZhbCgpID09IFwiSURcIikge1xyXG4gICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdF9maWVsZFwiKS5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdF9maWVsZFwiKS5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT24gY291bnRyeSBjaGFuZ2VcclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwiI2NhbGNfc2hpcHBpbmdfY291bnRyeVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX2NpdHlcIikuZW1wdHkoKTtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS52YWwoKSA9PSBcIlwiO1xyXG4gICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS52YWwoKSA9PSBcIlwiO1xyXG4gICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5X2ZpZWxkXCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IFwiSURcIikge1xyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eV9maWVsZFwiKS5hcHBlbmQoaHRtbC5jaXR5X3NlbGVjdCk7XHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdF9maWVsZFwiKS5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX2NpdHlfZmllbGRcIikuYXBwZW5kKGh0bWwuY2l0eV90ZXh0KTtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0X2ZpZWxkXCIpLmFkZENsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPbiBzdGF0ZSBjaGFuZ2VcclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwiI2NhbGNfc2hpcHBpbmdfc3RhdGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpbmNlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZiAocHJvdmluY2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX2dldF9jaXR5X29wdGlvbnMocHJvdmluY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNpdHkgY2hhbmdlXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCBcIiNjYWxjX3NoaXBwaW5nX2NpdHlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKFwiI2NhbGNfc2hpcHBpbmdfY291bnRyeVwiKS52YWwoKSA9PSBcIklEXCIpIHtcclxuICAgICAgICAgICAgc2Rva3JfZ2V0X3N1YmRpc3RyaWN0X29wdGlvbnMoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIHN1YmRpc3RyaWN0XHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCBcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCBjaXR5IG9wdGlvbnNcclxuICAgIGZ1bmN0aW9uIHNkb2tyX2dldF9jaXR5X29wdGlvbnMocHJvdmluY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAocHJvdmluY2UgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS52YWwoKSA9PSBcIlwiO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLnZhbCgpID09IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2NpdGllc19ieV9wcm92aW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZTogcHJvdmluY2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpdGllcyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgYCR7Y2l0eS50eXBlfSAke2NpdHkubmFtZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGAke2NpdHkudHlwZX0gJHtjaXR5Lm5hbWV9YCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc3ViZGlzdHJpY3Qgb3B0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2Rva3JfZ2V0X3N1YmRpc3RyaWN0X29wdGlvbnMoY2l0eSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChjaXR5ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikudmFsKCkgPT0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfc3ViZGlzdHJpY3RzX2J5X2NpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogY2l0eSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViZGlzdHJpY3RzID0gcmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YmRpc3RyaWN0cy5mb3JFYWNoKChzdWJkaXN0cmljdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBzdWJkaXN0cmljdC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHN1YmRpc3RyaWN0Lm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgc2Vzc2lvbiBzdWJkaXN0cmljdFxyXG4gICAgZnVuY3Rpb24gc2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3Qoc3ViZGlzdHJpY3RfaWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAkKCdidXR0b25bbmFtZT1cImNhbGNfc2hpcHBpbmdcIl0nKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJkaXN0cmljdF9pZDogc3ViZGlzdHJpY3RfaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2J1dHRvbltuYW1lPVwiY2FsY19zaGlwcGluZ1wiXScpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYnV0dG9uW25hbWU9XCJjYWxjX3NoaXBwaW5nXCJdJykuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==