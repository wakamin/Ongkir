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

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
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

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
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

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1vbmdraXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi9nZW5lcmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYWRtaW4vbWFpbi1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi9zaGlwcGluZy1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FkbWluL3dvby1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwib24iLCJkYXRhIiwicHJvcCIsInNkb2tyX3NldHRpbmdfZWxzIiwic2V0dGluZ19mb3JtIiwiYWNjb3VudF90eXBlIiwiZ2V0X2xvY2F0aW9uX2J0biIsImxvYWRpbmdfYmxvY2siLCJsb2FkaW5nX3RleHQiLCJnZXRfbG9jYXRpb25fbXNnIiwiZ2V0X2xvY2F0aW9uX3NwaW5uZXIiLCJjaGlsZHJlbiIsInNkb2tyX3NldHRpbmdfZnVuYyIsImdldF9sb2NhdGlvbiIsImF0dHIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0X3Byb3ZpbmNlIiwidGhlbiIsInJlcyIsImdldF9jaXR5IiwiZ2V0X2ludGxfb3JpZ2luIiwiZ2V0X2ludGxfZGVzdGluYXRpb24iLCJnZXRfYWxsX3N1YmRpc3RyaWN0cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJodG1sIiwic2RvbmdraXJfbGN6IiwiZ2V0X3Byb3ZpbmNlX3RleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFqYXgiLCJ1cmwiLCJhamF4dXJsIiwidHlwZSIsImFjdGlvbiIsIm5vbmNlX2FqYXgiLCJub25jZSIsInN1Y2Nlc3MiLCJlcnJvciIsImFsZXJ0IiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsImdldF9jaXR5X3RleHQiLCJnZXRfc3ViZGlzdHJpY3QiLCJsYXN0X2NpdHlfaWQiLCJkb25lIiwiY2l0eV9pZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0X2ludGxfb3JpZ2luX3RleHQiLCJnZXRfaW50bF9kZXN0aW5hdGlvbl90ZXh0IiwiaXMiLCJwYXJlbnQiLCJlbHMiLCJjb3VudHJ5Iiwic3ViZGlzdHJpY3QiLCJzdWJkaXN0cmljdF90ciIsInN1YmRpc3RyaWN0X2V4aXN0cyIsImxlbmd0aCIsInNkb2tyX2NvdW50cnlfcHJvdmluY2UiLCJoaWRlIiwic2Rva3JfdXBkYXRlX3N0b3JlX2NvdW50cnkiLCJ2YWwiLCJjdHJ5UHJvdiIsImNpdHlFbCIsImNpdHlPcHRXcmFwcGVyIiwiaGFzQ2xhc3MiLCJpbnB1dFRleHQiLCJyZW1vdmUiLCJhcHBlbmQiLCJzZG9rcl9zaGlwcGluZ19jaXR5X29wdGlvbnMiLCJwcm92aW5jZSIsInNob3ciLCJjaXR5Iiwic2Rva3JfdXBkYXRlX3N0b3JlX2NpdHkiLCJzZG9rcl9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zIiwiY291bnRyeVZhbCIsInNwbGl0IiwiZW1wdHkiLCJzZWxlY3RlZCIsImNpdGllcyIsInRleHQiLCJwbGVhc2Vfc2VsZWN0X3RleHQiLCJmb3JFYWNoIiwibmFtZSIsInN1YmRpc3RyaWN0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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T0FEVixFQUNtQixFQURuQixFQUVLdUUsSUFGTCxDQUVVekQsWUFBWSxDQUFDMEQsa0JBRnZCLENBREo7QUFLQUcsc0JBQVksQ0FBQ0YsT0FBYixDQUFxQixVQUFDNUIsV0FBRCxFQUFpQjtBQUNsQ0YsZUFBRyxDQUFDRSxXQUFKLENBQWdCYyxNQUFoQixDQUNJMUUsNkNBQUMsQ0FBQyxtQkFBRCxDQUFELENBQ0tlLElBREwsQ0FDVSxPQURWLEVBQ21CNkMsV0FBVyxDQUFDNkIsSUFEL0IsRUFFSzFFLElBRkwsQ0FHUSxVQUhSLEVBSVFxRSxRQUFRLElBQUl4QixXQUFXLENBQUM2QixJQUF4QixHQUNNLFVBRE4sR0FFTSxLQU5kLEVBUUtILElBUkwsQ0FRVTFCLFdBQVcsQ0FBQzZCLElBUnRCLENBREo7QUFXSCxXQVpEO0FBY0EvQixhQUFHLENBQUNFLFdBQUosQ0FBZ0I3QyxJQUFoQixDQUFxQixVQUFyQixFQUFpQyxLQUFqQztBQUVBaUIsaUJBQU87QUFDVixTQWpDRTtBQWtDSFUsYUFBSyxFQUFFLGVBQVVqQixHQUFWLEVBQWU7QUFDbEJpQyxhQUFHLENBQUNFLFdBQUosQ0FBZ0I3QyxJQUFoQixDQUFxQixVQUFyQixFQUFpQyxLQUFqQztBQUNBa0IsZ0JBQU0sQ0FBQyxzQkFBRCxDQUFOO0FBQ0g7QUFyQ0UsT0FBUDtBQXVDSCxLQWpETSxDQUFQO0FBa0RIO0FBQ0osQ0FyUkEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLHdCIiwiZmlsZSI6ImFkbWluLW9uZ2tpci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBcIi4vYWRtaW4vbWFpbi1jb25maWdcIjtcclxuaW1wb3J0IFwiLi9hZG1pbi9nZW5lcmFsXCI7XHJcbmltcG9ydCBcIi4vYWRtaW4vc2hpcHBpbmctc2V0dGluZ3NcIjtcclxuaW1wb3J0IFwiLi9hZG1pbi93b28tc2V0dGluZ3NcIjtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLnNkb2tyLXNlbGVjdC1hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgkKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIikpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zZG9rci11bnNlbGVjdC1hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgkKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIikpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvLyBTZXR0aW5nIHBhZ2VcclxuICAgIGxldCBzZG9rcl9zZXR0aW5nX2VscyA9IHtcclxuICAgICAgICBzZXR0aW5nX2Zvcm06ICQoXCIjc2Rva3Jfc2V0dGluZ19mb3JtXCIpLFxyXG4gICAgICAgIGFjY291bnRfdHlwZTogJChcIiNzZG9rcl9yYWphb25na2lyX2FjY291bnRfdHlwZVwiKSxcclxuICAgICAgICBnZXRfbG9jYXRpb25fYnRuOiAkKFwiI3Nkb2tyLWdldC1sb2NhdGlvblwiKSxcclxuICAgICAgICBsb2FkaW5nX2Jsb2NrOiAkKFwiLnNkb2tyLWxvYWRpbmdcIiksXHJcbiAgICAgICAgbG9hZGluZ190ZXh0OiAkKFwiLnNkb2tyLWxvYWRpbmdfX3RleHRcIiksXHJcbiAgICAgICAgZ2V0X2xvY2F0aW9uX21zZzogJChcIi5zZG9rci1nZXQtbG9jYXRpb24tbXNnXCIpLFxyXG4gICAgICAgIGdldF9sb2NhdGlvbl9zcGlubmVyOiAkKFwiI3Nkb2tyLWdldC1sb2NhdGlvblwiKS5jaGlsZHJlbihcIi5zcGlubmVyXCIpLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2Rva3Jfc2V0dGluZ19mdW5jID0ge1xyXG4gICAgICAgIGdldF9sb2NhdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fYnRuLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ19ibG9jay5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9zcGlubmVyLnJlbW92ZUNsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX21zZy5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuY1xyXG4gICAgICAgICAgICAgICAgLmdldF9wcm92aW5jZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfY2l0eSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9pbnRsX29yaWdpbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9pbnRsX2Rlc3RpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfYWxsX3N1YmRpc3RyaWN0cygpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X3Byb3ZpbmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKHNkb25na2lyX2xjei5nZXRfcHJvdmluY2VfdGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9wcm92aW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9jaXR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKHNkb25na2lyX2xjei5nZXRfY2l0eV90ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2NpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfc3ViZGlzdHJpY3Q6IGZ1bmN0aW9uIChsYXN0X2NpdHlfaWQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9zdWJkaXN0cmljdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY2l0eV9pZDogbGFzdF9jaXR5X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJHZXR0aW5nIHN1YmRpc3RyaWN0cyBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X2FsbF9zdWJkaXN0cmljdHM6IGZ1bmN0aW9uIChsYXN0X2NpdHlfaWQgPSAwKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuY1xyXG4gICAgICAgICAgICAgICAgLmdldF9zdWJkaXN0cmljdChsYXN0X2NpdHlfaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmRvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9hbGxfc3ViZGlzdHJpY3RzKGRhdGEuY2l0eV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX2J0bi5hdHRyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9zcGlubmVyLmFkZENsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZG9rci1oaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9tc2cucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNkb2tyLWhpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ19ibG9jay5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfaW50bF9vcmlnaW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwoXHJcbiAgICAgICAgICAgICAgICBzZG9uZ2tpcl9sY3ouZ2V0X2ludGxfb3JpZ2luX3RleHQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9pbnRsX29yaWdpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9pbnRsX2Rlc3RpbmF0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKFxyXG4gICAgICAgICAgICAgICAgc2RvbmdraXJfbGN6LmdldF9pbnRsX2Rlc3RpbmF0aW9uX3RleHQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9pbnRsX2Rlc3RpbmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIE9uIGNsaWNrIGdldCBsb2NhdGlvbiBidXR0b25cclxuICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9idG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9sb2NhdGlvbigpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuc2Rva3Jfd2Nfc2hpcHBpbmdfZW5hYmxlX2NiXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpIHtcclxuICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgLnBhcmVudChcImxhYmVsXCIpXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KFwiLnNkb25na2lyLWNhcmRfX2hlYWRlclwiKVxyXG4gICAgICAgICAgICAgICAgLnBhcmVudChcIi5zZG9uZ2tpci1jYXJkXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgLnBhcmVudChcImxhYmVsXCIpXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KFwiLnNkb25na2lyLWNhcmRfX2hlYWRlclwiKVxyXG4gICAgICAgICAgICAgICAgLnBhcmVudChcIi5zZG9uZ2tpci1jYXJkXCIpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGVscyA9IHtcclxuICAgICAgICBjb3VudHJ5OiAkKFwic2VsZWN0W25hbWU9J3dvb2NvbW1lcmNlX2RlZmF1bHRfY291bnRyeSddXCIpLFxyXG4gICAgICAgIHN1YmRpc3RyaWN0OiAkKFwiI3Nkb25na2lyX3NoaXBwaW5nX29yaWdpbl9zdWJkaXN0cmljdFwiKSxcclxuICAgICAgICBzdWJkaXN0cmljdF90cjogJChcIiNzZG9uZ2tpcl9zaGlwcGluZ19vcmlnaW5fc3ViZGlzdHJpY3RcIilcclxuICAgICAgICAgICAgLnBhcmVudChcInRkXCIpXHJcbiAgICAgICAgICAgIC5wYXJlbnQoXCJ0clwiKSxcclxuICAgIH07XHJcbiAgICBjb25zdCBzdWJkaXN0cmljdF9leGlzdHMgPSBlbHMuc3ViZGlzdHJpY3QubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAvLyBIaWRlIHRoZSBzdWJkaXN0cmljdCBpZiBzdG9yZSBjb3VudHJ5IGlzIG5vdCBJbmRvbmVzaWFcclxuICAgIGlmIChlbHMuY291bnRyeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKHNkb2tyX2NvdW50cnlfcHJvdmluY2UoKS5jb3VudHJ5ICE9IFwiSURcIikge1xyXG4gICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3RfdHIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBjb3VudHJ5XHJcbiAgICBlbHMuY291bnRyeS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW1tZWRpYXRlbGx5IHVwZGF0ZSB0aGUgc3RvcmUgY291bnRyeSBvcHRpb25cclxuICAgICAgICAgKiBTbyB3ZSBjYW4gZ2V0IHVwZGF0ZWQgYWxsb3dlZCB2YWx1ZXMgdG8gYmUgc3RvcmUgdG8gdGhlIHN0b3JlIGNpdHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZG9rcl91cGRhdGVfc3RvcmVfY291bnRyeSgkKHRoaXMpLnZhbCgpKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgY3RyeVByb3YgPSBzZG9rcl9jb3VudHJ5X3Byb3ZpbmNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBjdHJ5UHJvdi5jb3VudHJ5O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2l0eUVsID0gJChcIiNtYWluZm9ybSAuZm9ybS10YWJsZSAjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY2l0eU9wdFdyYXBwZXIgPSBjaXR5RWwucGFyZW50KFwidGRcIikucGFyZW50KFwidHJcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnRyeSA9PSBcIklEXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY2l0eUVsLnBhcmVudChcInRkXCIpLmhhc0NsYXNzKFwiZm9ybWlucC1zZWxlY3RcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBgPHRkIGNsYXNzPVwiZm9ybWlucCBmb3JtaW5wLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIgaWQ9XCJ3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIgc3R5bGU9XCJcIiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5QbGVhc2Ugc2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+YDtcclxuICAgICAgICAgICAgICAgICAgICBjaXR5RWwucGFyZW50KFwidGRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eU9wdFdyYXBwZXIuYXBwZW5kKGlucHV0VGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2Rva3Jfc2hpcHBpbmdfY2l0eV9vcHRpb25zKGN0cnlQcm92LnByb3ZpbmNlKTtcclxuICAgICAgICAgICAgICAgIC8vIFNob3cgdGhlIHN1YmRpc3RyaWN0XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0X3RyLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghY2l0eUVsLnBhcmVudChcInRkXCIpLmhhc0NsYXNzKFwiZm9ybWlucC10ZXh0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gYDx0ZCBjbGFzcz1cImZvcm1pbnAgZm9ybWlucC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwid29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiIGlkPVwid29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgc3R5bGU9XCJcIiB2YWx1ZT1cIlwiIGNsYXNzPVwiXCIgcGxhY2Vob2xkZXI9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eUVsLnBhcmVudChcInRkXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHlPcHRXcmFwcGVyLmFwcGVuZChpbnB1dFRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIHN1YmRpc3RyaWN0XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0X3RyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIGNpdHlcclxuICAgICQoXCIjbWFpbmZvcm1cIikub24oXCJjaGFuZ2VcIiwgXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY2l0eSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEltbWVkaWF0ZWxseSB1cGRhdGUgdGhlIHN0b3JlIGNpdHkgb3B0aW9uXHJcbiAgICAgICAgICogU28gd2UgY2FuIGdldCB1cGRhdGVkIGFsbG93ZWQgdmFsdWVzIHRvIGJlIHN0b3JlIHRvIHRoZSBzdG9yZSBzdWJkaXN0cmljdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNkb2tyX3VwZGF0ZV9zdG9yZV9jaXR5KGNpdHkpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdHJ5UHJvdiA9IHNkb2tyX2NvdW50cnlfcHJvdmluY2UoKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IGN0cnlQcm92LmNvdW50cnk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnRyeSAhPSBcIklEXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgc2Rva3Jfc2hpcHBpbmdfc3ViZGlzdHJpY3Rfb3B0aW9ucyhjaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gR2V0IGNvdW50cnkgYW5kIHByb3ZpbmNlIHZhbHVlXHJcbiAgICBmdW5jdGlvbiBzZG9rcl9jb3VudHJ5X3Byb3ZpbmNlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50cnlWYWwgPSBlbHMuY291bnRyeS52YWwoKS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgbGV0IHByb3ZpbmNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50cnlWYWxbMF0gPT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgIHByb3ZpbmNlID0gY291bnRyeVZhbFsxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6IGNvdW50cnlWYWxbMF0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlOiBwcm92aW5jZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBzdG9yZSBjb3VudHJ5XHJcbiAgICBmdW5jdGlvbiBzZG9rcl91cGRhdGVfc3RvcmVfY291bnRyeShjb3VudHJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl91cGRhdGVfc3RvcmVfY291bnRyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgc3RvcmUgY2l0eVxyXG4gICAgZnVuY3Rpb24gc2Rva3JfdXBkYXRlX3N0b3JlX2NpdHkoY2l0eSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX3VwZGF0ZV9zdG9yZV9jaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IGNpdHksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBzaGlwcGluZyBjaXR5IG9wdGlvbnNcclxuICAgIGZ1bmN0aW9uIHNkb2tyX3NoaXBwaW5nX2NpdHlfb3B0aW9ucyhwcm92aW5jZSwgc2VsZWN0ZWQgPSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHByb3ZpbmNlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9jaXRpZXNfYnlfcHJvdmluY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2U6IHByb3ZpbmNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaXRpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgYCR7Y2l0eS50eXBlfSAke2NpdHkubmFtZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID09IGAke2NpdHkudHlwZX0gJHtjaXR5Lm5hbWV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGAke2NpdHkudHlwZX0gJHtjaXR5Lm5hbWV9YCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc2hpcHBpbmcgc3ViZGlzdHJpY3Qgb3B0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2Rva3Jfc2hpcHBpbmdfc3ViZGlzdHJpY3Rfb3B0aW9ucyhjaXR5LCBzZWxlY3RlZCA9IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoY2l0eSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9zdWJkaXN0cmljdHNfYnlfY2l0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBjaXR5OiBjaXR5LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJkaXN0cmljdHMgPSByZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViZGlzdHJpY3RzLmZvckVhY2goKHN1YmRpc3RyaWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIHN1YmRpc3RyaWN0Lm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPT0gc3ViZGlzdHJpY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHN1YmRpc3RyaWN0Lm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=