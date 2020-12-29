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
    subdistrict: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdongkir_shipping_origin_subdistrict_id"),
    subdistrict_tr: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdongkir_shipping_origin_subdistrict_id").parent("td").parent("tr")
  }; // Hide the subdistrict if store country is not Indonesia

  if (sdokr_country_province().country != "ID") {
    els.subdistrict_tr.hide();
  } // On change country


  els.country.on("change", function () {
    /**
     * Immediatelly update the store country option
     * So we can get updated allowed values to be store to the store city
     */
    sdokr_update_store_country(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()).then(function () {
      var ctryProv = sdokr_country_province();
      var country = ctryProv.country;
      var cityEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#mainform .form-table #woocommerce_store_city");
      var cityOptWrapper = cityEl.parent("td").parent("tr");

      if (country == "ID") {
        if (!cityEl.parent("td").hasClass("forminp-select")) {
          var inputText = "<td class=\"forminp forminp-select\">\n                        <select name=\"woocommerce_store_city\" id=\"woocommerce_store_city\" style=\"\" class=\"\">\n                            <option value=\"\" selected=\"selected\">Please select</option>\n                        </select>\n                    </td>";
          cityEl.parent("td").remove();
          cityOptWrapper.append(inputText);
        }

        sdokr_shipping_city_options(ctryProv.province); // Show the subdistrict

        els.subdistrict_tr.show();
      } else {
        if (!cityEl.parent("td").hasClass("forminp-text")) {
          var _inputText = "<td class=\"forminp forminp-text\">\n                        <input name=\"woocommerce_store_city\" id=\"woocommerce_store_city\" type=\"text\" style=\"\" value=\"\" class=\"\" placeholder=\"\">\n                    </td>";
          cityEl.parent("td").remove();
          cityOptWrapper.append(_inputText);
        } // Hide the subdistrict


        els.subdistrict_tr.hide();
      }
    });
  }); // On change city

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#mainform").on("change", "#woocommerce_store_city", function () {
    var city = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
    /**
     * Immediatelly update the store city option
     * So we can get updated allowed values to be store to the store subdistrict
     */

    sdokr_update_store_city(city).then(function () {
      var ctryProv = sdokr_country_province();
      var country = ctryProv.country;

      if (country != "ID") {
        return;
      }

      sdokr_shipping_subdistrict_options(city);
    });
  }); // Get country and province value

  function sdokr_country_province() {
    var countryVal = els.country.val().split(":");
    var province_id = "";

    if (countryVal[0] == "ID") {
      var provinceArr = countryVal[1].split("-");
      province_id = provinceArr[1];
    } else {
      province_id = countryVal.length == 2 ? countryVal[1] : "";
    }

    return {
      country: countryVal[0],
      province: province_id
    };
  } // Update store country


  function sdokr_update_store_country(country) {
    return new Promise(function (resolve, reject) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").attr("disabled", true);
      els.subdistrict.attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").empty();
      els.subdistrict.empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_update_store_country",
          nonce_ajax: sdongkir_lcz.nonce,
          country: country
        },
        success: function success(res) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").attr("disabled", false);
          els.subdistrict.attr("disabled", false);
          resolve();
        }
      });
    });
  } // Update store city


  function sdokr_update_store_city(city) {
    return new Promise(function (resolve, reject) {
      els.subdistrict.attr("disabled", true);
      els.subdistrict.empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_update_store_city",
          nonce_ajax: sdongkir_lcz.nonce,
          city: city
        },
        success: function success(res) {
          els.subdistrict.attr("disabled", false);
          resolve();
        }
      });
    });
  } // Get shipping city options


  function sdokr_shipping_city_options(province_id) {
    var selected_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return new Promise(function (resolve, reject) {
      if (province_id == "") {
        resolve();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").attr("disabled", true);
      els.subdistrict.attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").empty();
      els.subdistrict.empty();
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
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", city.city_id).attr("selected", selected_id == city.city_id ? "selected" : false).text("".concat(city.type, " ").concat(city.name)));
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
  } // Get shipping subdistrict options


  function sdokr_shipping_subdistrict_options(city_id) {
    var selected_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return new Promise(function (resolve, reject) {
      if (city_id == "") {
        resolve();
      }

      els.subdistrict.attr("disabled", true);
      els.subdistrict.empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_get_subdistricts_by_city_id",
          nonce_ajax: sdongkir_lcz.nonce,
          city_id: city_id
        },
        success: function success(res) {
          var subdistricts = res.data.data;
          els.subdistrict.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          subdistricts.forEach(function (subdistrict) {
            els.subdistrict.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", subdistrict.subdistrict_id).attr("selected", selected_id == subdistrict.subdistrict_id ? "selected" : false).text(subdistrict.name));
          });
          els.subdistrict.attr("disabled", false);
          resolve();
        },
        error: function error(err) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1vbmdraXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi9nZW5lcmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYWRtaW4vbWFpbi1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi93b28tc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImRhdGEiLCJwcm9wIiwic2Rva3Jfc2V0dGluZ19lbHMiLCJzZXR0aW5nX2Zvcm0iLCJhY2NvdW50X3R5cGUiLCJnZXRfbG9jYXRpb25fYnRuIiwibG9hZGluZ19ibG9jayIsImxvYWRpbmdfdGV4dCIsImdldF9sb2NhdGlvbl9tc2ciLCJnZXRfbG9jYXRpb25fc3Bpbm5lciIsImNoaWxkcmVuIiwic2Rva3Jfc2V0dGluZ19mdW5jIiwiZ2V0X2xvY2F0aW9uIiwiYXR0ciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJnZXRfcHJvdmluY2UiLCJ0aGVuIiwicmVzIiwiZ2V0X2NpdHkiLCJnZXRfaW50bF9vcmlnaW4iLCJnZXRfaW50bF9kZXN0aW5hdGlvbiIsImdldF9hbGxfc3ViZGlzdHJpY3RzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJzZG9uZ2tpcl9sY3oiLCJnZXRfcHJvdmluY2VfdGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWpheCIsInVybCIsImFqYXh1cmwiLCJ0eXBlIiwiYWN0aW9uIiwibm9uY2VfYWpheCIsIm5vbmNlIiwic3VjY2VzcyIsImVycm9yIiwiYWxlcnQiLCJyZXNwb25zZUpTT04iLCJtZXNzYWdlIiwiZ2V0X2NpdHlfdGV4dCIsImdldF9zdWJkaXN0cmljdCIsImxhc3RfY2l0eV9pZCIsImRvbmUiLCJjaXR5X2lkIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRfaW50bF9vcmlnaW5fdGV4dCIsImdldF9pbnRsX2Rlc3RpbmF0aW9uX3RleHQiLCJlbHMiLCJjb3VudHJ5Iiwic3ViZGlzdHJpY3QiLCJzdWJkaXN0cmljdF90ciIsInBhcmVudCIsInNkb2tyX2NvdW50cnlfcHJvdmluY2UiLCJoaWRlIiwic2Rva3JfdXBkYXRlX3N0b3JlX2NvdW50cnkiLCJ2YWwiLCJjdHJ5UHJvdiIsImNpdHlFbCIsImNpdHlPcHRXcmFwcGVyIiwiaGFzQ2xhc3MiLCJpbnB1dFRleHQiLCJyZW1vdmUiLCJhcHBlbmQiLCJzZG9rcl9zaGlwcGluZ19jaXR5X29wdGlvbnMiLCJwcm92aW5jZSIsInNob3ciLCJjaXR5Iiwic2Rva3JfdXBkYXRlX3N0b3JlX2NpdHkiLCJzZG9rcl9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zIiwiY291bnRyeVZhbCIsInNwbGl0IiwicHJvdmluY2VfaWQiLCJwcm92aW5jZUFyciIsImxlbmd0aCIsImVtcHR5Iiwic2VsZWN0ZWRfaWQiLCJjaXRpZXMiLCJ0ZXh0IiwicGxlYXNlX3NlbGVjdF90ZXh0IiwiZm9yRWFjaCIsIm5hbWUiLCJzdWJkaXN0cmljdHMiLCJzdWJkaXN0cmljdF9pZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUUsaUJBQVVyQixHQUFWLEVBQWU7QUFDcEIsY0FBTXNFLFlBQVksR0FBR3RFLEdBQUcsQ0FBQ2xCLElBQUosQ0FBU0EsSUFBOUI7QUFFQXNELGFBQUcsQ0FBQ0UsV0FBSixDQUFnQmEsTUFBaEIsQ0FDSXpFLDZDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUNLaUIsSUFETCxDQUNVLE9BRFYsRUFDbUIsRUFEbkIsRUFFS3VFLElBRkwsQ0FFVXpELFlBQVksQ0FBQzBELGtCQUZ2QixDQURKO0FBS0FHLHNCQUFZLENBQUNGLE9BQWIsQ0FBcUIsVUFBQzlCLFdBQUQsRUFBaUI7QUFDbENGLGVBQUcsQ0FBQ0UsV0FBSixDQUFnQmEsTUFBaEIsQ0FDSXpFLDZDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUNLaUIsSUFETCxDQUNVLE9BRFYsRUFDbUIyQyxXQUFXLENBQUNpQyxjQUQvQixFQUVLNUUsSUFGTCxDQUdRLFVBSFIsRUFJUXFFLFdBQVcsSUFBSTFCLFdBQVcsQ0FBQ2lDLGNBQTNCLEdBQ00sVUFETixHQUVNLEtBTmQsRUFRS0wsSUFSTCxDQVFVNUIsV0FBVyxDQUFDK0IsSUFSdEIsQ0FESjtBQVdILFdBWkQ7QUFjQWpDLGFBQUcsQ0FBQ0UsV0FBSixDQUFnQjNDLElBQWhCLENBQXFCLFVBQXJCLEVBQWlDLEtBQWpDO0FBRUFpQixpQkFBTztBQUNWLFNBakNFO0FBa0NIVSxhQUFLLEVBQUUsZUFBVWpCLEdBQVYsRUFBZTtBQUNsQitCLGFBQUcsQ0FBQ0UsV0FBSixDQUFnQjNDLElBQWhCLENBQXFCLFVBQXJCLEVBQWlDLEtBQWpDO0FBQ0FrQixnQkFBTSxDQUFDLHNCQUFELENBQU47QUFDSDtBQXJDRSxPQUFQO0FBdUNILEtBL0NNLENBQVA7QUFnREg7QUFDSixDQTlQRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLHdCIiwiZmlsZSI6ImFkbWluLW9uZ2tpci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBcIi4vYWRtaW4vbWFpbi1jb25maWdcIjtcclxuaW1wb3J0IFwiLi9hZG1pbi9nZW5lcmFsXCI7XHJcbmltcG9ydCBcIi4vYWRtaW4vd29vLXNldHRpbmdzXCI7XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuc2Rva3Itc2VsZWN0LWFsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCQodGhpcykuZGF0YShcInRhcmdldFwiKSkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnNkb2tyLXVuc2VsZWN0LWFsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCQodGhpcykuZGF0YShcInRhcmdldFwiKSkucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvLyBTZXR0aW5nIHBhZ2VcclxuICAgIGxldCBzZG9rcl9zZXR0aW5nX2VscyA9IHtcclxuICAgICAgICBzZXR0aW5nX2Zvcm06ICQoXCIjc2Rva3Jfc2V0dGluZ19mb3JtXCIpLFxyXG4gICAgICAgIGFjY291bnRfdHlwZTogJChcIiNzZG9rcl9yYWphb25na2lyX2FjY291bnRfdHlwZVwiKSxcclxuICAgICAgICBnZXRfbG9jYXRpb25fYnRuOiAkKFwiI3Nkb2tyLWdldC1sb2NhdGlvblwiKSxcclxuICAgICAgICBsb2FkaW5nX2Jsb2NrOiAkKFwiLnNkb2tyLWxvYWRpbmdcIiksXHJcbiAgICAgICAgbG9hZGluZ190ZXh0OiAkKFwiLnNkb2tyLWxvYWRpbmdfX3RleHRcIiksXHJcbiAgICAgICAgZ2V0X2xvY2F0aW9uX21zZzogJChcIi5zZG9rci1nZXQtbG9jYXRpb24tbXNnXCIpLFxyXG4gICAgICAgIGdldF9sb2NhdGlvbl9zcGlubmVyOiAkKFwiI3Nkb2tyLWdldC1sb2NhdGlvblwiKS5jaGlsZHJlbihcIi5zcGlubmVyXCIpLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2Rva3Jfc2V0dGluZ19mdW5jID0ge1xyXG4gICAgICAgIGdldF9sb2NhdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fYnRuLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ19ibG9jay5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9zcGlubmVyLnJlbW92ZUNsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX21zZy5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuY1xyXG4gICAgICAgICAgICAgICAgLmdldF9wcm92aW5jZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfY2l0eSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9pbnRsX29yaWdpbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9pbnRsX2Rlc3RpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfYWxsX3N1YmRpc3RyaWN0cygpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X3Byb3ZpbmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKHNkb25na2lyX2xjei5nZXRfcHJvdmluY2VfdGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9wcm92aW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9jaXR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKHNkb25na2lyX2xjei5nZXRfY2l0eV90ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2NpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfc3ViZGlzdHJpY3Q6IGZ1bmN0aW9uIChsYXN0X2NpdHlfaWQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9zdWJkaXN0cmljdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY2l0eV9pZDogbGFzdF9jaXR5X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJHZXR0aW5nIHN1YmRpc3RyaWN0cyBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X2FsbF9zdWJkaXN0cmljdHM6IGZ1bmN0aW9uIChsYXN0X2NpdHlfaWQgPSAwKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuY1xyXG4gICAgICAgICAgICAgICAgLmdldF9zdWJkaXN0cmljdChsYXN0X2NpdHlfaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmRvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9hbGxfc3ViZGlzdHJpY3RzKGRhdGEuY2l0eV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX2J0bi5hdHRyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9zcGlubmVyLmFkZENsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZG9rci1oaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9tc2cucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNkb2tyLWhpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ19ibG9jay5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfaW50bF9vcmlnaW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwoXHJcbiAgICAgICAgICAgICAgICBzZG9uZ2tpcl9sY3ouZ2V0X2ludGxfb3JpZ2luX3RleHQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9pbnRsX29yaWdpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9pbnRsX2Rlc3RpbmF0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKFxyXG4gICAgICAgICAgICAgICAgc2RvbmdraXJfbGN6LmdldF9pbnRsX2Rlc3RpbmF0aW9uX3RleHQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9pbnRsX2Rlc3RpbmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIE9uIGNsaWNrIGdldCBsb2NhdGlvbiBidXR0b25cclxuICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9idG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9sb2NhdGlvbigpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBlbHMgPSB7XHJcbiAgICAgICAgY291bnRyeTogJChcInNlbGVjdFtuYW1lPSd3b29jb21tZXJjZV9kZWZhdWx0X2NvdW50cnknXVwiKSxcclxuICAgICAgICBzdWJkaXN0cmljdDogJChcIiNzZG9uZ2tpcl9zaGlwcGluZ19vcmlnaW5fc3ViZGlzdHJpY3RfaWRcIiksXHJcbiAgICAgICAgc3ViZGlzdHJpY3RfdHI6ICQoXCIjc2RvbmdraXJfc2hpcHBpbmdfb3JpZ2luX3N1YmRpc3RyaWN0X2lkXCIpXHJcbiAgICAgICAgICAgIC5wYXJlbnQoXCJ0ZFwiKVxyXG4gICAgICAgICAgICAucGFyZW50KFwidHJcIiksXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEhpZGUgdGhlIHN1YmRpc3RyaWN0IGlmIHN0b3JlIGNvdW50cnkgaXMgbm90IEluZG9uZXNpYVxyXG4gICAgaWYgKHNkb2tyX2NvdW50cnlfcHJvdmluY2UoKS5jb3VudHJ5ICE9IFwiSURcIikge1xyXG4gICAgICAgIGVscy5zdWJkaXN0cmljdF90ci5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIGNvdW50cnlcclxuICAgIGVscy5jb3VudHJ5Lm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbW1lZGlhdGVsbHkgdXBkYXRlIHRoZSBzdG9yZSBjb3VudHJ5IG9wdGlvblxyXG4gICAgICAgICAqIFNvIHdlIGNhbiBnZXQgdXBkYXRlZCBhbGxvd2VkIHZhbHVlcyB0byBiZSBzdG9yZSB0byB0aGUgc3RvcmUgY2l0eVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNkb2tyX3VwZGF0ZV9zdG9yZV9jb3VudHJ5KCQodGhpcykudmFsKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdHJ5UHJvdiA9IHNkb2tyX2NvdW50cnlfcHJvdmluY2UoKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IGN0cnlQcm92LmNvdW50cnk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaXR5RWwgPSAkKFwiI21haW5mb3JtIC5mb3JtLXRhYmxlICN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjaXR5T3B0V3JhcHBlciA9IGNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5wYXJlbnQoXCJ0clwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb3VudHJ5ID09IFwiSURcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaXR5RWwucGFyZW50KFwidGRcIikuaGFzQ2xhc3MoXCJmb3JtaW5wLXNlbGVjdFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGA8dGQgY2xhc3M9XCJmb3JtaW5wIGZvcm1pbnAtc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIndvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIiBpZD1cIndvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIiBzdHlsZT1cIlwiIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPlBsZWFzZSBzZWxlY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXR5T3B0V3JhcHBlci5hcHBlbmQoaW5wdXRUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZG9rcl9zaGlwcGluZ19jaXR5X29wdGlvbnMoY3RyeVByb3YucHJvdmluY2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgc3ViZGlzdHJpY3RcclxuICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdF90ci5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5oYXNDbGFzcyhcImZvcm1pbnAtdGV4dFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGA8dGQgY2xhc3M9XCJmb3JtaW5wIGZvcm1pbnAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIndvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIiBpZD1cIndvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIiB0eXBlPVwidGV4dFwiIHN0eWxlPVwiXCIgdmFsdWU9XCJcIiBjbGFzcz1cIlwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXR5T3B0V3JhcHBlci5hcHBlbmQoaW5wdXRUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIaWRlIHRoZSBzdWJkaXN0cmljdFxyXG4gICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0X3RyLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIGNpdHlcclxuICAgICQoXCIjbWFpbmZvcm1cIikub24oXCJjaGFuZ2VcIiwgXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY2l0eSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEltbWVkaWF0ZWxseSB1cGRhdGUgdGhlIHN0b3JlIGNpdHkgb3B0aW9uXHJcbiAgICAgICAgICogU28gd2UgY2FuIGdldCB1cGRhdGVkIGFsbG93ZWQgdmFsdWVzIHRvIGJlIHN0b3JlIHRvIHRoZSBzdG9yZSBzdWJkaXN0cmljdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNkb2tyX3VwZGF0ZV9zdG9yZV9jaXR5KGNpdHkpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdHJ5UHJvdiA9IHNkb2tyX2NvdW50cnlfcHJvdmluY2UoKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IGN0cnlQcm92LmNvdW50cnk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnRyeSAhPSBcIklEXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2Rva3Jfc2hpcHBpbmdfc3ViZGlzdHJpY3Rfb3B0aW9ucyhjaXR5KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCBjb3VudHJ5IGFuZCBwcm92aW5jZSB2YWx1ZVxyXG4gICAgZnVuY3Rpb24gc2Rva3JfY291bnRyeV9wcm92aW5jZSgpIHtcclxuICAgICAgICBjb25zdCBjb3VudHJ5VmFsID0gZWxzLmNvdW50cnkudmFsKCkuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgIGxldCBwcm92aW5jZV9pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChjb3VudHJ5VmFsWzBdID09IFwiSURcIikge1xyXG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUFyciA9IGNvdW50cnlWYWxbMV0uc3BsaXQoXCItXCIpO1xyXG4gICAgICAgICAgICBwcm92aW5jZV9pZCA9IHByb3ZpbmNlQXJyWzFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByb3ZpbmNlX2lkID0gY291bnRyeVZhbC5sZW5ndGggPT0gMiA/IGNvdW50cnlWYWxbMV0gOiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnRyeTogY291bnRyeVZhbFswXSxcclxuICAgICAgICAgICAgcHJvdmluY2U6IHByb3ZpbmNlX2lkLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHN0b3JlIGNvdW50cnlcclxuICAgIGZ1bmN0aW9uIHNkb2tyX3VwZGF0ZV9zdG9yZV9jb3VudHJ5KGNvdW50cnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfdXBkYXRlX3N0b3JlX2NvdW50cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogY291bnRyeSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHN0b3JlIGNpdHlcclxuICAgIGZ1bmN0aW9uIHNkb2tyX3VwZGF0ZV9zdG9yZV9jaXR5KGNpdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl91cGRhdGVfc3RvcmVfY2l0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBjaXR5OiBjaXR5LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc2hpcHBpbmcgY2l0eSBvcHRpb25zXHJcbiAgICBmdW5jdGlvbiBzZG9rcl9zaGlwcGluZ19jaXR5X29wdGlvbnMocHJvdmluY2VfaWQsIHNlbGVjdGVkX2lkID0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm92aW5jZV9pZCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfY2l0aWVzX2J5X3Byb3ZpbmNlX2lkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpbmNlX2lkOiBwcm92aW5jZV9pZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2l0aWVzID0gcmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIGNpdHkuY2l0eV9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF9pZCA9PSBjaXR5LmNpdHlfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChgJHtjaXR5LnR5cGV9ICR7Y2l0eS5uYW1lfWApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBzaGlwcGluZyBzdWJkaXN0cmljdCBvcHRpb25zXHJcbiAgICBmdW5jdGlvbiBzZG9rcl9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zKGNpdHlfaWQsIHNlbGVjdGVkX2lkID0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChjaXR5X2lkID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3N1YmRpc3RyaWN0c19ieV9jaXR5X2lkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpdHlfaWQ6IGNpdHlfaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YmRpc3RyaWN0cyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJkaXN0cmljdHMuZm9yRWFjaCgoc3ViZGlzdHJpY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgc3ViZGlzdHJpY3Quc3ViZGlzdHJpY3RfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfaWQgPT0gc3ViZGlzdHJpY3Quc3ViZGlzdHJpY3RfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzdWJkaXN0cmljdC5uYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9