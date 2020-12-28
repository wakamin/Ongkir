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
/* harmony import */ var _admin_woo_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/woo-settings */ "./src/assets/js/admin/woo-settings.js");




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
      sdokr_setting_els.loading_text.html(sdongkir_lcz.get_province_text);
      return new Promise(function (resolve, reject) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: sdongkir_lcz.ajaxurl,
          type: "POST",
          data: {
            action: "ongkir_get_province",
            nonce_ajax: sdongkir_lcz.nonce
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
      sdokr_setting_els.loading_text.html(sdongkir_lcz.get_city_text);
      return new Promise(function (resolve, reject) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: sdongkir_lcz.ajaxurl,
          type: "POST",
          data: {
            action: "ongkir_get_city",
            nonce_ajax: sdongkir_lcz.nonce
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
          url: sdongkir_lcz.ajaxurl,
          type: "POST",
          data: {
            action: "ongkir_get_subdistrict",
            nonce_ajax: sdongkir_lcz.nonce,
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
      sdokr_setting_els.loading_text.html(sdongkir_lcz.get_intl_origin_text);
      return new Promise(function (resolve, reject) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: sdongkir_lcz.ajaxurl,
          type: "POST",
          data: {
            action: "ongkir_get_intl_origin",
            nonce_ajax: sdongkir_lcz.nonce
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
      sdokr_setting_els.loading_text.html(sdongkir_lcz.get_intl_destination_text);
      return new Promise(function (resolve, reject) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: sdongkir_lcz.ajaxurl,
          type: "POST",
          data: {
            action: "ongkir_get_intl_destination",
            nonce_ajax: sdongkir_lcz.nonce
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

/***/ "./src/assets/js/admin/woo-settings.js":
/*!*********************************************!*\
  !*** ./src/assets/js/admin/woo-settings.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var els = {
    country: jquery__WEBPACK_IMPORTED_MODULE_0___default()("select[name='woocommerce_default_country']"),
    subdistrict: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdongkir_shipping_origin_subdistrict_id")
  };
  els.country.on("change", function () {
    var countryVal = els.country.val().split(":");
    var country = countryVal[0];
    var cityEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#mainform .form-table #woocommerce_store_city");
    var cityOptWrapper = cityEl.parent("td").parent("tr");

    if (country == "ID") {
      if (!cityEl.parent("td").hasClass("forminp-select")) {
        var inputText = "<td class=\"forminp forminp-select\">\n                    <select name=\"woocommerce_store_city\" id=\"woocommerce_store_city\" style=\"\" class=\"\">\n                        <option value=\"\" selected=\"selected\">Please select</option>\n                    </select>\n                </td>";
        cityEl.parent("td").remove();
        cityOptWrapper.append(inputText);
      }

      var provinceArr = countryVal[1].split("-");
      var province_id = provinceArr[1];
      sdokr_get_shipping_city_options(province_id);
    } else {
      if (!cityEl.parent("td").hasClass("forminp-text")) {
        var _inputText = "<td class=\"forminp forminp-text\">\n                    <input name=\"woocommerce_store_city\" id=\"woocommerce_store_city\" type=\"text\" style=\"\" value=\"\" class=\"\" placeholder=\"\">\n                </td>";
        cityEl.parent("td").remove();
        cityOptWrapper.append(_inputText);
      }
    }
  }); // Get shipping city options

  function sdokr_get_shipping_city_options(province_id) {
    return new Promise(function (resolve, reject) {
      if (province_id == "") {
        resolve();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").attr("disabled", true);
      els.subdistrict.attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").val() == "";
      els.subdistrict.empty();
      els.subdistrict.val() == "";
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_get_cities_by_province_id",
          nonce_ajax: sdongkir_lcz.nonce,
          province_id: province_id
        },
        success: function success(res) {
          var cities = res.data.data;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          cities.forEach(function (city) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", city.city_id).text("".concat(city.type, " ").concat(city.name)));
          });
          els.subdistrict.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").attr("disabled", false);
          els.subdistrict.attr("disabled", false);
          resolve();
        },
        error: function error(err) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").attr("disabled", false);
          els.subdistrict.attr("disabled", false);
          reject("Something went wrong");
        }
      });
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1vbmdraXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi9nZW5lcmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYWRtaW4vbWFpbi1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi93b28tc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImRhdGEiLCJwcm9wIiwic2Rva3Jfc2V0dGluZ19lbHMiLCJzZXR0aW5nX2Zvcm0iLCJhY2NvdW50X3R5cGUiLCJnZXRfbG9jYXRpb25fYnRuIiwibG9hZGluZ19ibG9jayIsImxvYWRpbmdfdGV4dCIsImdldF9sb2NhdGlvbl9tc2ciLCJnZXRfbG9jYXRpb25fc3Bpbm5lciIsImNoaWxkcmVuIiwic2Rva3Jfc2V0dGluZ19mdW5jIiwiZ2V0X2xvY2F0aW9uIiwiYXR0ciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJnZXRfcHJvdmluY2UiLCJ0aGVuIiwicmVzIiwiZ2V0X2NpdHkiLCJnZXRfaW50bF9vcmlnaW4iLCJnZXRfaW50bF9kZXN0aW5hdGlvbiIsImdldF9hbGxfc3ViZGlzdHJpY3RzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJzZG9uZ2tpcl9sY3oiLCJnZXRfcHJvdmluY2VfdGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWpheCIsInVybCIsImFqYXh1cmwiLCJ0eXBlIiwiYWN0aW9uIiwibm9uY2VfYWpheCIsIm5vbmNlIiwic3VjY2VzcyIsImVycm9yIiwiYWxlcnQiLCJyZXNwb25zZUpTT04iLCJtZXNzYWdlIiwiZ2V0X2NpdHlfdGV4dCIsImdldF9zdWJkaXN0cmljdCIsImxhc3RfY2l0eV9pZCIsImRvbmUiLCJjaXR5X2lkIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRfaW50bF9vcmlnaW5fdGV4dCIsImdldF9pbnRsX2Rlc3RpbmF0aW9uX3RleHQiLCJlbHMiLCJjb3VudHJ5Iiwic3ViZGlzdHJpY3QiLCJjb3VudHJ5VmFsIiwidmFsIiwic3BsaXQiLCJjaXR5RWwiLCJjaXR5T3B0V3JhcHBlciIsInBhcmVudCIsImhhc0NsYXNzIiwiaW5wdXRUZXh0IiwicmVtb3ZlIiwiYXBwZW5kIiwicHJvdmluY2VBcnIiLCJwcm92aW5jZV9pZCIsInNkb2tyX2dldF9zaGlwcGluZ19jaXR5X29wdGlvbnMiLCJlbXB0eSIsImNpdGllcyIsInRleHQiLCJwbGVhc2Vfc2VsZWN0X3RleHQiLCJmb3JFYWNoIiwiY2l0eSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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Q21CLEVBRG5CLEVBRUsyRCxJQUZMLENBRVU3QyxZQUFZLENBQUM4QyxrQkFGdkIsQ0FESjtBQU1BN0UsdURBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCaUIsSUFBN0IsQ0FBa0MsVUFBbEMsRUFBOEMsS0FBOUM7QUFDQXlDLGFBQUcsQ0FBQ0UsV0FBSixDQUFnQjNDLElBQWhCLENBQXFCLFVBQXJCLEVBQWlDLEtBQWpDO0FBRUFpQixpQkFBTztBQUNWLFNBbENFO0FBbUNIVSxhQUFLLEVBQUUsZUFBVWpCLEdBQVYsRUFBZTtBQUNsQjNCLHVEQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QmlCLElBQTdCLENBQWtDLFVBQWxDLEVBQThDLEtBQTlDO0FBQ0F5QyxhQUFHLENBQUNFLFdBQUosQ0FBZ0IzQyxJQUFoQixDQUFxQixVQUFyQixFQUFpQyxLQUFqQztBQUNBa0IsZ0JBQU0sQ0FBQyxzQkFBRCxDQUFOO0FBQ0g7QUF2Q0UsT0FBUDtBQXlDSCxLQXJETSxDQUFQO0FBc0RIO0FBQ0osQ0EvRkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSx3QiIsImZpbGUiOiJhZG1pbi1vbmdraXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgXCIuL2FkbWluL21haW4tY29uZmlnXCI7XHJcbmltcG9ydCBcIi4vYWRtaW4vZ2VuZXJhbFwiO1xyXG5pbXBvcnQgXCIuL2FkbWluL3dvby1zZXR0aW5nc1wiO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLnNkb2tyLXNlbGVjdC1hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgkKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIikpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zZG9rci11bnNlbGVjdC1hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgkKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIikpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8gU2V0dGluZyBwYWdlXHJcbiAgICBsZXQgc2Rva3Jfc2V0dGluZ19lbHMgPSB7XHJcbiAgICAgICAgc2V0dGluZ19mb3JtOiAkKFwiI3Nkb2tyX3NldHRpbmdfZm9ybVwiKSxcclxuICAgICAgICBhY2NvdW50X3R5cGU6ICQoXCIjc2Rva3JfcmFqYW9uZ2tpcl9hY2NvdW50X3R5cGVcIiksXHJcbiAgICAgICAgZ2V0X2xvY2F0aW9uX2J0bjogJChcIiNzZG9rci1nZXQtbG9jYXRpb25cIiksXHJcbiAgICAgICAgbG9hZGluZ19ibG9jazogJChcIi5zZG9rci1sb2FkaW5nXCIpLFxyXG4gICAgICAgIGxvYWRpbmdfdGV4dDogJChcIi5zZG9rci1sb2FkaW5nX190ZXh0XCIpLFxyXG4gICAgICAgIGdldF9sb2NhdGlvbl9tc2c6ICQoXCIuc2Rva3ItZ2V0LWxvY2F0aW9uLW1zZ1wiKSxcclxuICAgICAgICBnZXRfbG9jYXRpb25fc3Bpbm5lcjogJChcIiNzZG9rci1nZXQtbG9jYXRpb25cIikuY2hpbGRyZW4oXCIuc3Bpbm5lclwiKSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNkb2tyX3NldHRpbmdfZnVuYyA9IHtcclxuICAgICAgICBnZXRfbG9jYXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX2J0bi5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfYmxvY2sucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fc3Bpbm5lci5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9tc2cuYWRkQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmNcclxuICAgICAgICAgICAgICAgIC5nZXRfcHJvdmluY2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2NpdHkoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfaW50bF9vcmlnaW4oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfaW50bF9kZXN0aW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2FsbF9zdWJkaXN0cmljdHMoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9wcm92aW5jZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChzZG9uZ2tpcl9sY3ouZ2V0X3Byb3ZpbmNlX3RleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfcHJvdmluY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfY2l0eTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChzZG9uZ2tpcl9sY3ouZ2V0X2NpdHlfdGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9jaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X3N1YmRpc3RyaWN0OiBmdW5jdGlvbiAobGFzdF9jaXR5X2lkID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfc3ViZGlzdHJpY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NpdHlfaWQ6IGxhc3RfY2l0eV9pZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiR2V0dGluZyBzdWJkaXN0cmljdHMgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9hbGxfc3ViZGlzdHJpY3RzOiBmdW5jdGlvbiAobGFzdF9jaXR5X2lkID0gMCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmNcclxuICAgICAgICAgICAgICAgIC5nZXRfc3ViZGlzdHJpY3QobGFzdF9jaXR5X2lkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfYWxsX3N1YmRpc3RyaWN0cyhkYXRhLmNpdHlfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9idG4uYXR0cihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fc3Bpbm5lci5hZGRDbGFzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2Rva3ItaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fbXNnLnJlbW92ZUNsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZG9rci1oaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfYmxvY2suYWRkQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X2ludGxfb3JpZ2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKFxyXG4gICAgICAgICAgICAgICAgc2RvbmdraXJfbGN6LmdldF9pbnRsX29yaWdpbl90ZXh0LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfaW50bF9vcmlnaW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfaW50bF9kZXN0aW5hdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChcclxuICAgICAgICAgICAgICAgIHNkb25na2lyX2xjei5nZXRfaW50bF9kZXN0aW5hdGlvbl90ZXh0LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfaW50bF9kZXN0aW5hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBPbiBjbGljayBnZXQgbG9jYXRpb24gYnV0dG9uXHJcbiAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fYnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfbG9jYXRpb24oKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZWxzID0ge1xyXG4gICAgICAgIGNvdW50cnk6ICQoXCJzZWxlY3RbbmFtZT0nd29vY29tbWVyY2VfZGVmYXVsdF9jb3VudHJ5J11cIiksXHJcbiAgICAgICAgc3ViZGlzdHJpY3Q6ICQoXCIjc2RvbmdraXJfc2hpcHBpbmdfb3JpZ2luX3N1YmRpc3RyaWN0X2lkXCIpLFxyXG4gICAgfTtcclxuXHJcbiAgICBlbHMuY291bnRyeS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnRyeVZhbCA9IGVscy5jb3VudHJ5LnZhbCgpLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBjb25zdCBjb3VudHJ5ID0gY291bnRyeVZhbFswXTtcclxuXHJcbiAgICAgICAgY29uc3QgY2l0eUVsID0gJChcIiNtYWluZm9ybSAuZm9ybS10YWJsZSAjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKTtcclxuICAgICAgICBjb25zdCBjaXR5T3B0V3JhcHBlciA9IGNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5wYXJlbnQoXCJ0clwiKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50cnkgPT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgIGlmICghY2l0eUVsLnBhcmVudChcInRkXCIpLmhhc0NsYXNzKFwiZm9ybWlucC1zZWxlY3RcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGA8dGQgY2xhc3M9XCJmb3JtaW5wIGZvcm1pbnAtc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwid29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiIGlkPVwid29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiIHN0eWxlPVwiXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5QbGVhc2Ugc2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L3RkPmA7XHJcbiAgICAgICAgICAgICAgICBjaXR5RWwucGFyZW50KFwidGRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBjaXR5T3B0V3JhcHBlci5hcHBlbmQoaW5wdXRUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VBcnIgPSBjb3VudHJ5VmFsWzFdLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VfaWQgPSBwcm92aW5jZUFyclsxXTtcclxuICAgICAgICAgICAgc2Rva3JfZ2V0X3NoaXBwaW5nX2NpdHlfb3B0aW9ucyhwcm92aW5jZV9pZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFjaXR5RWwucGFyZW50KFwidGRcIikuaGFzQ2xhc3MoXCJmb3JtaW5wLXRleHRcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGA8dGQgY2xhc3M9XCJmb3JtaW5wIGZvcm1pbnAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwid29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiIGlkPVwid29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgc3R5bGU9XCJcIiB2YWx1ZT1cIlwiIGNsYXNzPVwiXCIgcGxhY2Vob2xkZXI9XCJcIj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+YDtcclxuICAgICAgICAgICAgICAgIGNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGNpdHlPcHRXcmFwcGVyLmFwcGVuZChpbnB1dFRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gR2V0IHNoaXBwaW5nIGNpdHkgb3B0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2Rva3JfZ2V0X3NoaXBwaW5nX2NpdHlfb3B0aW9ucyhwcm92aW5jZV9pZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm92aW5jZV9pZCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikudmFsKCkgPT0gXCJcIjtcclxuICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC52YWwoKSA9PSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9jaXRpZXNfYnlfcHJvdmluY2VfaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2VfaWQ6IHByb3ZpbmNlX2lkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaXRpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgY2l0eS5jaXR5X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGAke2NpdHkudHlwZX0gJHtjaXR5Lm5hbWV9YCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9