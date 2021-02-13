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
/* harmony import */ var _admin_shipping_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/shipping-settings */ "./src/assets/js/admin/shipping-settings.js");
/* harmony import */ var _admin_woo_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/woo-settings */ "./src/assets/js/admin/woo-settings.js");





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

/***/ "./src/assets/js/admin/shipping-settings.js":
/*!**************************************************!*\
  !*** ./src/assets/js/admin/shipping-settings.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr_wc_shipping_enable_cb").on("click", function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(":checked")) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent("label").parent(".sdongkir-card__header").parent(".sdongkir-card").addClass("active");
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent("label").parent(".sdongkir-card__header").parent(".sdongkir-card").removeClass("active");
    }
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
    subdistrict: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdongkir_shipping_origin_subdistrict"),
    subdistrict_tr: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdongkir_shipping_origin_subdistrict").parent("td").parent("tr")
  };
  var subdistrict_exists = els.subdistrict.length > 0 ? true : false; // Hide the subdistrict if store country is not Indonesia

  if (els.country.length > 0) {
    if (sdokr_country_province().country != "ID") {
      if (subdistrict_exists) {
        els.subdistrict_tr.hide();
      }
    }
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

        if (subdistrict_exists) {
          els.subdistrict_tr.show();
        }
      } else {
        if (!cityEl.parent("td").hasClass("forminp-text")) {
          var _inputText = "<td class=\"forminp forminp-text\">\n                        <input name=\"woocommerce_store_city\" id=\"woocommerce_store_city\" type=\"text\" style=\"\" value=\"\" class=\"\" placeholder=\"\">\n                    </td>";
          cityEl.parent("td").remove();
          cityOptWrapper.append(_inputText);
        } // Hide the subdistrict


        if (subdistrict_exists) {
          els.subdistrict_tr.hide();
        }
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

      if (subdistrict_exists) {
        sdokr_shipping_subdistrict_options(city);
      }
    });
  }); // Get country and province value

  function sdokr_country_province() {
    var countryVal = els.country.val().split(":");
    var province = "";

    if (countryVal[0] == "ID") {
      province = countryVal[1];
    }

    return {
      country: countryVal[0],
      province: province
    };
  } // Update store country


  function sdokr_update_store_country(country) {
    return new Promise(function (resolve, reject) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").empty();

      if (subdistrict_exists) {
        els.subdistrict.attr("disabled", true);
        els.subdistrict.empty();
      }

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
      if (subdistrict_exists) {
        els.subdistrict.attr("disabled", true);
        els.subdistrict.empty();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_update_store_city",
          nonce_ajax: sdongkir_lcz.nonce,
          city: city
        },
        success: function success(res) {
          if (subdistrict_exists) {
            els.subdistrict.attr("disabled", false);
          }

          resolve();
        }
      });
    });
  } // Get shipping city options


  function sdokr_shipping_city_options(province) {
    var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return new Promise(function (resolve, reject) {
      if (province == "") {
        resolve();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").empty();

      if (subdistrict_exists) {
        els.subdistrict.attr("disabled", true);
        els.subdistrict.empty();
      }

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
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          cities.forEach(function (city) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "".concat(city.type, " ").concat(city.name)).attr("selected", selected == "".concat(city.type, " ").concat(city.name) ? "selected" : false).text("".concat(city.type, " ").concat(city.name)));
          });

          if (subdistrict_exists) {
            els.subdistrict.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
            els.subdistrict.attr("disabled", false);
          }

          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").attr("disabled", false);
          resolve();
        },
        error: function error(err) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#woocommerce_store_city").attr("disabled", false);

          if (subdistrict_exists) {
            els.subdistrict.attr("disabled", false);
          }

          reject("Something went wrong");
        }
      });
    });
  } // Get shipping subdistrict options


  function sdokr_shipping_subdistrict_options(city) {
    var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return new Promise(function (resolve, reject) {
      if (city == "") {
        resolve();
      }

      if (subdistrict_exists) {
        els.subdistrict.attr("disabled", true);
        els.subdistrict.empty();
      }

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
          els.subdistrict.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          subdistricts.forEach(function (subdistrict) {
            els.subdistrict.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", subdistrict.name).attr("selected", selected == subdistrict.name ? "selected" : false).text(subdistrict.name));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1vbmdraXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi9nZW5lcmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYWRtaW4vbWFpbi1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi9zaGlwcGluZy1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FkbWluL3dvby1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZGF0YSIsInByb3AiLCJzZG9rcl9zZXR0aW5nX2VscyIsInNldHRpbmdfZm9ybSIsImFjY291bnRfdHlwZSIsImdldF9sb2NhdGlvbl9idG4iLCJsb2FkaW5nX2Jsb2NrIiwibG9hZGluZ190ZXh0IiwiZ2V0X2xvY2F0aW9uX21zZyIsImdldF9sb2NhdGlvbl9zcGlubmVyIiwiY2hpbGRyZW4iLCJzZG9rcl9zZXR0aW5nX2Z1bmMiLCJnZXRfbG9jYXRpb24iLCJhdHRyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImdldF9wcm92aW5jZSIsInRoZW4iLCJyZXMiLCJnZXRfY2l0eSIsImdldF9pbnRsX29yaWdpbiIsImdldF9pbnRsX2Rlc3RpbmF0aW9uIiwiZ2V0X2FsbF9zdWJkaXN0cmljdHMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsInNkb25na2lyX2xjeiIsImdldF9wcm92aW5jZV90ZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhamF4IiwidXJsIiwiYWpheHVybCIsInR5cGUiLCJhY3Rpb24iLCJub25jZV9hamF4Iiwibm9uY2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJhbGVydCIsInJlc3BvbnNlSlNPTiIsIm1lc3NhZ2UiLCJnZXRfY2l0eV90ZXh0IiwiZ2V0X3N1YmRpc3RyaWN0IiwibGFzdF9jaXR5X2lkIiwiZG9uZSIsImNpdHlfaWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldF9pbnRsX29yaWdpbl90ZXh0IiwiZ2V0X2ludGxfZGVzdGluYXRpb25fdGV4dCIsImlzIiwicGFyZW50IiwiZWxzIiwiY291bnRyeSIsInN1YmRpc3RyaWN0Iiwic3ViZGlzdHJpY3RfdHIiLCJzdWJkaXN0cmljdF9leGlzdHMiLCJsZW5ndGgiLCJzZG9rcl9jb3VudHJ5X3Byb3ZpbmNlIiwiaGlkZSIsInNkb2tyX3VwZGF0ZV9zdG9yZV9jb3VudHJ5IiwidmFsIiwiY3RyeVByb3YiLCJjaXR5RWwiLCJjaXR5T3B0V3JhcHBlciIsImhhc0NsYXNzIiwiaW5wdXRUZXh0IiwicmVtb3ZlIiwiYXBwZW5kIiwic2Rva3Jfc2hpcHBpbmdfY2l0eV9vcHRpb25zIiwicHJvdmluY2UiLCJzaG93IiwiY2l0eSIsInNkb2tyX3VwZGF0ZV9zdG9yZV9jaXR5Iiwic2Rva3Jfc2hpcHBpbmdfc3ViZGlzdHJpY3Rfb3B0aW9ucyIsImNvdW50cnlWYWwiLCJzcGxpdCIsImVtcHR5Iiwic2VsZWN0ZWQiLCJjaXRpZXMiLCJ0ZXh0IiwicGxlYXNlX3NlbGVjdF90ZXh0IiwiZm9yRWFjaCIsIm5hbWUiLCJzdWJkaXN0cmljdHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FB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QUFNc0UsWUFBWSxHQUFHdEUsR0FBRyxDQUFDbEIsSUFBSixDQUFTQSxJQUE5QjtBQUVBd0QsYUFBRyxDQUFDRSxXQUFKLENBQWdCYyxNQUFoQixDQUNJNUUsNkNBQUMsQ0FBQyxtQkFBRCxDQUFELENBQ0tpQixJQURMLENBQ1UsT0FEVixFQUNtQixFQURuQixFQUVLdUUsSUFGTCxDQUVVekQsWUFBWSxDQUFDMEQsa0JBRnZCLENBREo7QUFLQUcsc0JBQVksQ0FBQ0YsT0FBYixDQUFxQixVQUFDNUIsV0FBRCxFQUFpQjtBQUNsQ0YsZUFBRyxDQUFDRSxXQUFKLENBQWdCYyxNQUFoQixDQUNJNUUsNkNBQUMsQ0FBQyxtQkFBRCxDQUFELENBQ0tpQixJQURMLENBQ1UsT0FEVixFQUNtQjZDLFdBQVcsQ0FBQzZCLElBRC9CLEVBRUsxRSxJQUZMLENBR1EsVUFIUixFQUlRcUUsUUFBUSxJQUFJeEIsV0FBVyxDQUFDNkIsSUFBeEIsR0FDTSxVQUROLEdBRU0sS0FOZCxFQVFLSCxJQVJMLENBUVUxQixXQUFXLENBQUM2QixJQVJ0QixDQURKO0FBV0gsV0FaRDtBQWNBL0IsYUFBRyxDQUFDRSxXQUFKLENBQWdCN0MsSUFBaEIsQ0FBcUIsVUFBckIsRUFBaUMsS0FBakM7QUFFQWlCLGlCQUFPO0FBQ1YsU0FqQ0U7QUFrQ0hVLGFBQUssRUFBRSxlQUFVakIsR0FBVixFQUFlO0FBQ2xCaUMsYUFBRyxDQUFDRSxXQUFKLENBQWdCN0MsSUFBaEIsQ0FBcUIsVUFBckIsRUFBaUMsS0FBakM7QUFDQWtCLGdCQUFNLENBQUMsc0JBQUQsQ0FBTjtBQUNIO0FBckNFLE9BQVA7QUF1Q0gsS0FqRE0sQ0FBUDtBQWtESDtBQUNKLENBclJELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsd0IiLCJmaWxlIjoiYWRtaW4tb25na2lyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiLi9hZG1pbi9tYWluLWNvbmZpZ1wiO1xyXG5pbXBvcnQgXCIuL2FkbWluL2dlbmVyYWxcIjtcclxuaW1wb3J0IFwiLi9hZG1pbi9zaGlwcGluZy1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgXCIuL2FkbWluL3dvby1zZXR0aW5nc1wiO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLnNkb2tyLXNlbGVjdC1hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgkKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIikpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zZG9rci11bnNlbGVjdC1hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgkKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIikpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8gU2V0dGluZyBwYWdlXHJcbiAgICBsZXQgc2Rva3Jfc2V0dGluZ19lbHMgPSB7XHJcbiAgICAgICAgc2V0dGluZ19mb3JtOiAkKFwiI3Nkb2tyX3NldHRpbmdfZm9ybVwiKSxcclxuICAgICAgICBhY2NvdW50X3R5cGU6ICQoXCIjc2Rva3JfcmFqYW9uZ2tpcl9hY2NvdW50X3R5cGVcIiksXHJcbiAgICAgICAgZ2V0X2xvY2F0aW9uX2J0bjogJChcIiNzZG9rci1nZXQtbG9jYXRpb25cIiksXHJcbiAgICAgICAgbG9hZGluZ19ibG9jazogJChcIi5zZG9rci1sb2FkaW5nXCIpLFxyXG4gICAgICAgIGxvYWRpbmdfdGV4dDogJChcIi5zZG9rci1sb2FkaW5nX190ZXh0XCIpLFxyXG4gICAgICAgIGdldF9sb2NhdGlvbl9tc2c6ICQoXCIuc2Rva3ItZ2V0LWxvY2F0aW9uLW1zZ1wiKSxcclxuICAgICAgICBnZXRfbG9jYXRpb25fc3Bpbm5lcjogJChcIiNzZG9rci1nZXQtbG9jYXRpb25cIikuY2hpbGRyZW4oXCIuc3Bpbm5lclwiKSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNkb2tyX3NldHRpbmdfZnVuYyA9IHtcclxuICAgICAgICBnZXRfbG9jYXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX2J0bi5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfYmxvY2sucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fc3Bpbm5lci5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9tc2cuYWRkQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmNcclxuICAgICAgICAgICAgICAgIC5nZXRfcHJvdmluY2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2NpdHkoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfaW50bF9vcmlnaW4oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfaW50bF9kZXN0aW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2FsbF9zdWJkaXN0cmljdHMoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9wcm92aW5jZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChzZG9uZ2tpcl9sY3ouZ2V0X3Byb3ZpbmNlX3RleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfcHJvdmluY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfY2l0eTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChzZG9uZ2tpcl9sY3ouZ2V0X2NpdHlfdGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9jaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X3N1YmRpc3RyaWN0OiBmdW5jdGlvbiAobGFzdF9jaXR5X2lkID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfc3ViZGlzdHJpY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NpdHlfaWQ6IGxhc3RfY2l0eV9pZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiR2V0dGluZyBzdWJkaXN0cmljdHMgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9hbGxfc3ViZGlzdHJpY3RzOiBmdW5jdGlvbiAobGFzdF9jaXR5X2lkID0gMCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmNcclxuICAgICAgICAgICAgICAgIC5nZXRfc3ViZGlzdHJpY3QobGFzdF9jaXR5X2lkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfYWxsX3N1YmRpc3RyaWN0cyhkYXRhLmNpdHlfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9idG4uYXR0cihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fc3Bpbm5lci5hZGRDbGFzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2Rva3ItaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fbXNnLnJlbW92ZUNsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZG9rci1oaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfYmxvY2suYWRkQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X2ludGxfb3JpZ2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKFxyXG4gICAgICAgICAgICAgICAgc2RvbmdraXJfbGN6LmdldF9pbnRsX29yaWdpbl90ZXh0LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfaW50bF9vcmlnaW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfaW50bF9kZXN0aW5hdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChcclxuICAgICAgICAgICAgICAgIHNkb25na2lyX2xjei5nZXRfaW50bF9kZXN0aW5hdGlvbl90ZXh0LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfaW50bF9kZXN0aW5hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBPbiBjbGljayBnZXQgbG9jYXRpb24gYnV0dG9uXHJcbiAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fYnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfbG9jYXRpb24oKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLnNkb2tyX3djX3NoaXBwaW5nX2VuYWJsZV9jYlwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgIC5wYXJlbnQoXCJsYWJlbFwiKVxyXG4gICAgICAgICAgICAgICAgLnBhcmVudChcIi5zZG9uZ2tpci1jYXJkX19oZWFkZXJcIilcclxuICAgICAgICAgICAgICAgIC5wYXJlbnQoXCIuc2RvbmdraXItY2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgIC5wYXJlbnQoXCJsYWJlbFwiKVxyXG4gICAgICAgICAgICAgICAgLnBhcmVudChcIi5zZG9uZ2tpci1jYXJkX19oZWFkZXJcIilcclxuICAgICAgICAgICAgICAgIC5wYXJlbnQoXCIuc2RvbmdraXItY2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZWxzID0ge1xyXG4gICAgICAgIGNvdW50cnk6ICQoXCJzZWxlY3RbbmFtZT0nd29vY29tbWVyY2VfZGVmYXVsdF9jb3VudHJ5J11cIiksXHJcbiAgICAgICAgc3ViZGlzdHJpY3Q6ICQoXCIjc2RvbmdraXJfc2hpcHBpbmdfb3JpZ2luX3N1YmRpc3RyaWN0XCIpLFxyXG4gICAgICAgIHN1YmRpc3RyaWN0X3RyOiAkKFwiI3Nkb25na2lyX3NoaXBwaW5nX29yaWdpbl9zdWJkaXN0cmljdFwiKVxyXG4gICAgICAgICAgICAucGFyZW50KFwidGRcIilcclxuICAgICAgICAgICAgLnBhcmVudChcInRyXCIpLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHN1YmRpc3RyaWN0X2V4aXN0cyA9IGVscy5zdWJkaXN0cmljdC5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgIC8vIEhpZGUgdGhlIHN1YmRpc3RyaWN0IGlmIHN0b3JlIGNvdW50cnkgaXMgbm90IEluZG9uZXNpYVxyXG4gICAgaWYgKGVscy5jb3VudHJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAoc2Rva3JfY291bnRyeV9wcm92aW5jZSgpLmNvdW50cnkgIT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdF90ci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIGNvdW50cnlcclxuICAgIGVscy5jb3VudHJ5Lm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbW1lZGlhdGVsbHkgdXBkYXRlIHRoZSBzdG9yZSBjb3VudHJ5IG9wdGlvblxyXG4gICAgICAgICAqIFNvIHdlIGNhbiBnZXQgdXBkYXRlZCBhbGxvd2VkIHZhbHVlcyB0byBiZSBzdG9yZSB0byB0aGUgc3RvcmUgY2l0eVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNkb2tyX3VwZGF0ZV9zdG9yZV9jb3VudHJ5KCQodGhpcykudmFsKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdHJ5UHJvdiA9IHNkb2tyX2NvdW50cnlfcHJvdmluY2UoKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IGN0cnlQcm92LmNvdW50cnk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaXR5RWwgPSAkKFwiI21haW5mb3JtIC5mb3JtLXRhYmxlICN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjaXR5T3B0V3JhcHBlciA9IGNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5wYXJlbnQoXCJ0clwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb3VudHJ5ID09IFwiSURcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaXR5RWwucGFyZW50KFwidGRcIikuaGFzQ2xhc3MoXCJmb3JtaW5wLXNlbGVjdFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGA8dGQgY2xhc3M9XCJmb3JtaW5wIGZvcm1pbnAtc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIndvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIiBpZD1cIndvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIiBzdHlsZT1cIlwiIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPlBsZWFzZSBzZWxlY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXR5T3B0V3JhcHBlci5hcHBlbmQoaW5wdXRUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZG9rcl9zaGlwcGluZ19jaXR5X29wdGlvbnMoY3RyeVByb3YucHJvdmluY2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgc3ViZGlzdHJpY3RcclxuICAgICAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3RfdHIuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaXR5RWwucGFyZW50KFwidGRcIikuaGFzQ2xhc3MoXCJmb3JtaW5wLXRleHRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBgPHRkIGNsYXNzPVwiZm9ybWlucCBmb3JtaW5wLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIgaWQ9XCJ3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIgdHlwZT1cInRleHRcIiBzdHlsZT1cIlwiIHZhbHVlPVwiXCIgY2xhc3M9XCJcIiBwbGFjZWhvbGRlcj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+YDtcclxuICAgICAgICAgICAgICAgICAgICBjaXR5RWwucGFyZW50KFwidGRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eU9wdFdyYXBwZXIuYXBwZW5kKGlucHV0VGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSGlkZSB0aGUgc3ViZGlzdHJpY3RcclxuICAgICAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3RfdHIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPbiBjaGFuZ2UgY2l0eVxyXG4gICAgJChcIiNtYWluZm9ybVwiKS5vbihcImNoYW5nZVwiLCBcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjaXR5ID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW1tZWRpYXRlbGx5IHVwZGF0ZSB0aGUgc3RvcmUgY2l0eSBvcHRpb25cclxuICAgICAgICAgKiBTbyB3ZSBjYW4gZ2V0IHVwZGF0ZWQgYWxsb3dlZCB2YWx1ZXMgdG8gYmUgc3RvcmUgdG8gdGhlIHN0b3JlIHN1YmRpc3RyaWN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2Rva3JfdXBkYXRlX3N0b3JlX2NpdHkoY2l0eSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0cnlQcm92ID0gc2Rva3JfY291bnRyeV9wcm92aW5jZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gY3RyeVByb3YuY291bnRyeTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb3VudHJ5ICE9IFwiSURcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBzZG9rcl9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zKGNpdHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHZXQgY291bnRyeSBhbmQgcHJvdmluY2UgdmFsdWVcclxuICAgIGZ1bmN0aW9uIHNkb2tyX2NvdW50cnlfcHJvdmluY2UoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnRyeVZhbCA9IGVscy5jb3VudHJ5LnZhbCgpLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBsZXQgcHJvdmluY2UgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoY291bnRyeVZhbFswXSA9PSBcIklEXCIpIHtcclxuICAgICAgICAgICAgcHJvdmluY2UgPSBjb3VudHJ5VmFsWzFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnRyeTogY291bnRyeVZhbFswXSxcclxuICAgICAgICAgICAgcHJvdmluY2U6IHByb3ZpbmNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHN0b3JlIGNvdW50cnlcclxuICAgIGZ1bmN0aW9uIHNkb2tyX3VwZGF0ZV9zdG9yZV9jb3VudHJ5KGNvdW50cnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX3VwZGF0ZV9zdG9yZV9jb3VudHJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IGNvdW50cnksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBzdG9yZSBjaXR5XHJcbiAgICBmdW5jdGlvbiBzZG9rcl91cGRhdGVfc3RvcmVfY2l0eShjaXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfdXBkYXRlX3N0b3JlX2NpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogY2l0eSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHNoaXBwaW5nIGNpdHkgb3B0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2Rva3Jfc2hpcHBpbmdfY2l0eV9vcHRpb25zKHByb3ZpbmNlLCBzZWxlY3RlZCA9IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAocHJvdmluY2UgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2NpdGllc19ieV9wcm92aW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZTogcHJvdmluY2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpdGllcyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBgJHtjaXR5LnR5cGV9ICR7Y2l0eS5uYW1lfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPT0gYCR7Y2l0eS50eXBlfSAke2NpdHkubmFtZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoYCR7Y2l0eS50eXBlfSAke2NpdHkubmFtZX1gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBzaGlwcGluZyBzdWJkaXN0cmljdCBvcHRpb25zXHJcbiAgICBmdW5jdGlvbiBzZG9rcl9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zKGNpdHksIHNlbGVjdGVkID0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChjaXR5ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3N1YmRpc3RyaWN0c19ieV9jaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IGNpdHksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YmRpc3RyaWN0cyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJkaXN0cmljdHMuZm9yRWFjaCgoc3ViZGlzdHJpY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgc3ViZGlzdHJpY3QubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9PSBzdWJkaXN0cmljdC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc3ViZGlzdHJpY3QubmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==