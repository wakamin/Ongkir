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
  if (sdongkir_lcz.account_type != "pro") {
    return;
  }

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

module.exports = __webpack_require__(/*! C:\Users\kasmi\Local Sites\ongkir\app\public\wp-content\plugins\ongkir\src\assets\js\admin-ongkir.js */"./src/assets/js/admin-ongkir.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1vbmdraXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi9nZW5lcmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYWRtaW4vbWFpbi1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi9zaGlwcGluZy1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FkbWluL3dvby1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwib24iLCJkYXRhIiwicHJvcCIsInNkb2tyX3NldHRpbmdfZWxzIiwic2V0dGluZ19mb3JtIiwiYWNjb3VudF90eXBlIiwiZ2V0X2xvY2F0aW9uX2J0biIsImxvYWRpbmdfYmxvY2siLCJsb2FkaW5nX3RleHQiLCJnZXRfbG9jYXRpb25fbXNnIiwiZ2V0X2xvY2F0aW9uX3NwaW5uZXIiLCJjaGlsZHJlbiIsInNkb2tyX3NldHRpbmdfZnVuYyIsImdldF9sb2NhdGlvbiIsImF0dHIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0X3Byb3ZpbmNlIiwidGhlbiIsInJlcyIsImdldF9jaXR5IiwiZ2V0X2ludGxfb3JpZ2luIiwiZ2V0X2ludGxfZGVzdGluYXRpb24iLCJnZXRfYWxsX3N1YmRpc3RyaWN0cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJodG1sIiwic2RvbmdraXJfbGN6IiwiZ2V0X3Byb3ZpbmNlX3RleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFqYXgiLCJ1cmwiLCJhamF4dXJsIiwidHlwZSIsImFjdGlvbiIsIm5vbmNlX2FqYXgiLCJub25jZSIsInN1Y2Nlc3MiLCJlcnJvciIsImFsZXJ0IiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsImdldF9jaXR5X3RleHQiLCJnZXRfc3ViZGlzdHJpY3QiLCJsYXN0X2NpdHlfaWQiLCJkb25lIiwiY2l0eV9pZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0X2ludGxfb3JpZ2luX3RleHQiLCJnZXRfaW50bF9kZXN0aW5hdGlvbl90ZXh0IiwiaXMiLCJwYXJlbnQiLCJlbHMiLCJjb3VudHJ5Iiwic3ViZGlzdHJpY3QiLCJzdWJkaXN0cmljdF90ciIsInN1YmRpc3RyaWN0X2V4aXN0cyIsImxlbmd0aCIsInNkb2tyX2NvdW50cnlfcHJvdmluY2UiLCJoaWRlIiwic2Rva3JfdXBkYXRlX3N0b3JlX2NvdW50cnkiLCJ2YWwiLCJjdHJ5UHJvdiIsImNpdHlFbCIsImNpdHlPcHRXcmFwcGVyIiwiaGFzQ2xhc3MiLCJpbnB1dFRleHQiLCJyZW1vdmUiLCJhcHBlbmQiLCJzZG9rcl9zaGlwcGluZ19jaXR5X29wdGlvbnMiLCJwcm92aW5jZSIsInNob3ciLCJjaXR5Iiwic2Rva3JfdXBkYXRlX3N0b3JlX2NpdHkiLCJzZG9rcl9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zIiwiY291bnRyeVZhbCIsInNwbGl0IiwiZW1wdHkiLCJzZWxlY3RlZCIsImNpdGllcyIsInRleHQiLCJwbGVhc2Vfc2VsZWN0X3RleHQiLCJmb3JFYWNoIiwibmFtZSIsInN1YmRpc3RyaWN0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LENBQWdCYyxNQUFoQixDQUNJMUUsNkNBQUMsQ0FBQyxtQkFBRCxDQUFELENBQ0tlLElBREwsQ0FDVSxPQURWLEVBQ21CLEVBRG5CLEVBRUt1RSxJQUZMLENBRVV6RCxZQUFZLENBQUMwRCxrQkFGdkIsQ0FESjtBQUtBRyxzQkFBWSxDQUFDRixPQUFiLENBQXFCLFVBQUM1QixXQUFELEVBQWlCO0FBQ2xDRixlQUFHLENBQUNFLFdBQUosQ0FBZ0JjLE1BQWhCLENBQ0kxRSw2Q0FBQyxDQUFDLG1CQUFELENBQUQsQ0FDS2UsSUFETCxDQUNVLE9BRFYsRUFDbUI2QyxXQUFXLENBQUM2QixJQUQvQixFQUVLMUUsSUFGTCxDQUdRLFVBSFIsRUFJUXFFLFFBQVEsSUFBSXhCLFdBQVcsQ0FBQzZCLElBQXhCLEdBQ00sVUFETixHQUVNLEtBTmQsRUFRS0gsSUFSTCxDQVFVMUIsV0FBVyxDQUFDNkIsSUFSdEIsQ0FESjtBQVdILFdBWkQ7QUFjQS9CLGFBQUcsQ0FBQ0UsV0FBSixDQUFnQjdDLElBQWhCLENBQXFCLFVBQXJCLEVBQWlDLEtBQWpDO0FBRUFpQixpQkFBTztBQUNWLFNBakNFO0FBa0NIVSxhQUFLLEVBQUUsZUFBVWpCLEdBQVYsRUFBZTtBQUNsQmlDLGFBQUcsQ0FBQ0UsV0FBSixDQUFnQjdDLElBQWhCLENBQXFCLFVBQXJCLEVBQWlDLEtBQWpDO0FBQ0FrQixnQkFBTSxDQUFDLHNCQUFELENBQU47QUFDSDtBQXJDRSxPQUFQO0FBdUNILEtBakRNLENBQVA7QUFrREg7QUFDSixDQXpSQSxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsd0IiLCJmaWxlIjoiYWRtaW4tb25na2lyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiLi9hZG1pbi9tYWluLWNvbmZpZ1wiO1xyXG5pbXBvcnQgXCIuL2FkbWluL2dlbmVyYWxcIjtcclxuaW1wb3J0IFwiLi9hZG1pbi9zaGlwcGluZy1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgXCIuL2FkbWluL3dvby1zZXR0aW5nc1wiO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuc2Rva3Itc2VsZWN0LWFsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCQodGhpcykuZGF0YShcInRhcmdldFwiKSkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnNkb2tyLXVuc2VsZWN0LWFsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCQodGhpcykuZGF0YShcInRhcmdldFwiKSkucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8vIFNldHRpbmcgcGFnZVxyXG4gICAgbGV0IHNkb2tyX3NldHRpbmdfZWxzID0ge1xyXG4gICAgICAgIHNldHRpbmdfZm9ybTogJChcIiNzZG9rcl9zZXR0aW5nX2Zvcm1cIiksXHJcbiAgICAgICAgYWNjb3VudF90eXBlOiAkKFwiI3Nkb2tyX3JhamFvbmdraXJfYWNjb3VudF90eXBlXCIpLFxyXG4gICAgICAgIGdldF9sb2NhdGlvbl9idG46ICQoXCIjc2Rva3ItZ2V0LWxvY2F0aW9uXCIpLFxyXG4gICAgICAgIGxvYWRpbmdfYmxvY2s6ICQoXCIuc2Rva3ItbG9hZGluZ1wiKSxcclxuICAgICAgICBsb2FkaW5nX3RleHQ6ICQoXCIuc2Rva3ItbG9hZGluZ19fdGV4dFwiKSxcclxuICAgICAgICBnZXRfbG9jYXRpb25fbXNnOiAkKFwiLnNkb2tyLWdldC1sb2NhdGlvbi1tc2dcIiksXHJcbiAgICAgICAgZ2V0X2xvY2F0aW9uX3NwaW5uZXI6ICQoXCIjc2Rva3ItZ2V0LWxvY2F0aW9uXCIpLmNoaWxkcmVuKFwiLnNwaW5uZXJcIiksXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZG9rcl9zZXR0aW5nX2Z1bmMgPSB7XHJcbiAgICAgICAgZ2V0X2xvY2F0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9idG4uYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX2Jsb2NrLnJlbW92ZUNsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX3NwaW5uZXIucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fbXNnLmFkZENsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jXHJcbiAgICAgICAgICAgICAgICAuZ2V0X3Byb3ZpbmNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9jaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2ludGxfb3JpZ2luKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2ludGxfZGVzdGluYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9hbGxfc3ViZGlzdHJpY3RzKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfcHJvdmluY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwoc2RvbmdraXJfbGN6LmdldF9wcm92aW5jZV90ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3Byb3ZpbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X2NpdHk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwoc2RvbmdraXJfbGN6LmdldF9jaXR5X3RleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfY2l0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9zdWJkaXN0cmljdDogZnVuY3Rpb24gKGxhc3RfY2l0eV9pZCA9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3N1YmRpc3RyaWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jaXR5X2lkOiBsYXN0X2NpdHlfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkdldHRpbmcgc3ViZGlzdHJpY3RzIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfYWxsX3N1YmRpc3RyaWN0czogZnVuY3Rpb24gKGxhc3RfY2l0eV9pZCA9IDApIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jXHJcbiAgICAgICAgICAgICAgICAuZ2V0X3N1YmRpc3RyaWN0KGxhc3RfY2l0eV9pZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2FsbF9zdWJkaXN0cmljdHMoZGF0YS5jaXR5X2lkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fYnRuLmF0dHIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX3NwaW5uZXIuYWRkQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNkb2tyLWhpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX21zZy5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2Rva3ItaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX2Jsb2NrLmFkZENsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9pbnRsX29yaWdpbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChcclxuICAgICAgICAgICAgICAgIHNkb25na2lyX2xjei5nZXRfaW50bF9vcmlnaW5fdGV4dCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2ludGxfb3JpZ2luXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X2ludGxfZGVzdGluYXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwoXHJcbiAgICAgICAgICAgICAgICBzZG9uZ2tpcl9sY3ouZ2V0X2ludGxfZGVzdGluYXRpb25fdGV4dCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2ludGxfZGVzdGluYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gT24gY2xpY2sgZ2V0IGxvY2F0aW9uIGJ1dHRvblxyXG4gICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX2J0bi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2xvY2F0aW9uKCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5zZG9rcl93Y19zaGlwcGluZ19lbmFibGVfY2JcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KFwibGFiZWxcIilcclxuICAgICAgICAgICAgICAgIC5wYXJlbnQoXCIuc2RvbmdraXItY2FyZF9faGVhZGVyXCIpXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KFwiLnNkb25na2lyLWNhcmRcIilcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KFwibGFiZWxcIilcclxuICAgICAgICAgICAgICAgIC5wYXJlbnQoXCIuc2RvbmdraXItY2FyZF9faGVhZGVyXCIpXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KFwiLnNkb25na2lyLWNhcmRcIilcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHNkb25na2lyX2xjei5hY2NvdW50X3R5cGUgIT0gXCJwcm9cIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbHMgPSB7XHJcbiAgICAgICAgY291bnRyeTogJChcInNlbGVjdFtuYW1lPSd3b29jb21tZXJjZV9kZWZhdWx0X2NvdW50cnknXVwiKSxcclxuICAgICAgICBzdWJkaXN0cmljdDogJChcIiNzZG9uZ2tpcl9zaGlwcGluZ19vcmlnaW5fc3ViZGlzdHJpY3RcIiksXHJcbiAgICAgICAgc3ViZGlzdHJpY3RfdHI6ICQoXCIjc2RvbmdraXJfc2hpcHBpbmdfb3JpZ2luX3N1YmRpc3RyaWN0XCIpXHJcbiAgICAgICAgICAgIC5wYXJlbnQoXCJ0ZFwiKVxyXG4gICAgICAgICAgICAucGFyZW50KFwidHJcIiksXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3ViZGlzdHJpY3RfZXhpc3RzID0gZWxzLnN1YmRpc3RyaWN0Lmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgLy8gSGlkZSB0aGUgc3ViZGlzdHJpY3QgaWYgc3RvcmUgY291bnRyeSBpcyBub3QgSW5kb25lc2lhXHJcbiAgICBpZiAoZWxzLmNvdW50cnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChzZG9rcl9jb3VudHJ5X3Byb3ZpbmNlKCkuY291bnRyeSAhPSBcIklEXCIpIHtcclxuICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0X3RyLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBPbiBjaGFuZ2UgY291bnRyeVxyXG4gICAgZWxzLmNvdW50cnkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEltbWVkaWF0ZWxseSB1cGRhdGUgdGhlIHN0b3JlIGNvdW50cnkgb3B0aW9uXHJcbiAgICAgICAgICogU28gd2UgY2FuIGdldCB1cGRhdGVkIGFsbG93ZWQgdmFsdWVzIHRvIGJlIHN0b3JlIHRvIHRoZSBzdG9yZSBjaXR5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2Rva3JfdXBkYXRlX3N0b3JlX2NvdW50cnkoJCh0aGlzKS52YWwoKSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0cnlQcm92ID0gc2Rva3JfY291bnRyeV9wcm92aW5jZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gY3RyeVByb3YuY291bnRyeTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNpdHlFbCA9ICQoXCIjbWFpbmZvcm0gLmZvcm0tdGFibGUgI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpdHlPcHRXcmFwcGVyID0gY2l0eUVsLnBhcmVudChcInRkXCIpLnBhcmVudChcInRyXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvdW50cnkgPT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5oYXNDbGFzcyhcImZvcm1pbnAtc2VsZWN0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gYDx0ZCBjbGFzcz1cImZvcm1pbnAgZm9ybWlucC1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwid29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiIGlkPVwid29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiIHN0eWxlPVwiXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+UGxlYXNlIHNlbGVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eUVsLnBhcmVudChcInRkXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHlPcHRXcmFwcGVyLmFwcGVuZChpbnB1dFRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNkb2tyX3NoaXBwaW5nX2NpdHlfb3B0aW9ucyhjdHJ5UHJvdi5wcm92aW5jZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTaG93IHRoZSBzdWJkaXN0cmljdFxyXG4gICAgICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdF90ci5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5oYXNDbGFzcyhcImZvcm1pbnAtdGV4dFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGA8dGQgY2xhc3M9XCJmb3JtaW5wIGZvcm1pbnAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIndvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIiBpZD1cIndvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIiB0eXBlPVwidGV4dFwiIHN0eWxlPVwiXCIgdmFsdWU9XCJcIiBjbGFzcz1cIlwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHlFbC5wYXJlbnQoXCJ0ZFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXR5T3B0V3JhcHBlci5hcHBlbmQoaW5wdXRUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIaWRlIHRoZSBzdWJkaXN0cmljdFxyXG4gICAgICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdF90ci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBjaXR5XHJcbiAgICAkKFwiI21haW5mb3JtXCIpLm9uKFwiY2hhbmdlXCIsIFwiI3dvb2NvbW1lcmNlX3N0b3JlX2NpdHlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbW1lZGlhdGVsbHkgdXBkYXRlIHRoZSBzdG9yZSBjaXR5IG9wdGlvblxyXG4gICAgICAgICAqIFNvIHdlIGNhbiBnZXQgdXBkYXRlZCBhbGxvd2VkIHZhbHVlcyB0byBiZSBzdG9yZSB0byB0aGUgc3RvcmUgc3ViZGlzdHJpY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZG9rcl91cGRhdGVfc3RvcmVfY2l0eShjaXR5KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgY3RyeVByb3YgPSBzZG9rcl9jb3VudHJ5X3Byb3ZpbmNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBjdHJ5UHJvdi5jb3VudHJ5O1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvdW50cnkgIT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIHNkb2tyX3NoaXBwaW5nX3N1YmRpc3RyaWN0X29wdGlvbnMoY2l0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCBjb3VudHJ5IGFuZCBwcm92aW5jZSB2YWx1ZVxyXG4gICAgZnVuY3Rpb24gc2Rva3JfY291bnRyeV9wcm92aW5jZSgpIHtcclxuICAgICAgICBjb25zdCBjb3VudHJ5VmFsID0gZWxzLmNvdW50cnkudmFsKCkuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgIGxldCBwcm92aW5jZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChjb3VudHJ5VmFsWzBdID09IFwiSURcIikge1xyXG4gICAgICAgICAgICBwcm92aW5jZSA9IGNvdW50cnlWYWxbMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5VmFsWzBdLFxyXG4gICAgICAgICAgICBwcm92aW5jZTogcHJvdmluY2UsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgc3RvcmUgY291bnRyeVxyXG4gICAgZnVuY3Rpb24gc2Rva3JfdXBkYXRlX3N0b3JlX2NvdW50cnkoY291bnRyeSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN1YmRpc3RyaWN0X2V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfdXBkYXRlX3N0b3JlX2NvdW50cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogY291bnRyeSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHN0b3JlIGNpdHlcclxuICAgIGZ1bmN0aW9uIHNkb2tyX3VwZGF0ZV9zdG9yZV9jaXR5KGNpdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl91cGRhdGVfc3RvcmVfY2l0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBjaXR5OiBjaXR5LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc2hpcHBpbmcgY2l0eSBvcHRpb25zXHJcbiAgICBmdW5jdGlvbiBzZG9rcl9zaGlwcGluZ19jaXR5X29wdGlvbnMocHJvdmluY2UsIHNlbGVjdGVkID0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm92aW5jZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfY2l0aWVzX2J5X3Byb3ZpbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpbmNlOiBwcm92aW5jZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2l0aWVzID0gcmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIGAke2NpdHkudHlwZX0gJHtjaXR5Lm5hbWV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9PSBgJHtjaXR5LnR5cGV9ICR7Y2l0eS5uYW1lfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChgJHtjaXR5LnR5cGV9ICR7Y2l0eS5uYW1lfWApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN3b29jb21tZXJjZV9zdG9yZV9jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjd29vY29tbWVyY2Vfc3RvcmVfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJkaXN0cmljdF9leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHNoaXBwaW5nIHN1YmRpc3RyaWN0IG9wdGlvbnNcclxuICAgIGZ1bmN0aW9uIHNkb2tyX3NoaXBwaW5nX3N1YmRpc3RyaWN0X29wdGlvbnMoY2l0eSwgc2VsZWN0ZWQgPSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGNpdHkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ViZGlzdHJpY3RfZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfc3ViZGlzdHJpY3RzX2J5X2NpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogY2l0eSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViZGlzdHJpY3RzID0gcmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YmRpc3RyaWN0cy5mb3JFYWNoKChzdWJkaXN0cmljdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHMuc3ViZGlzdHJpY3QuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBzdWJkaXN0cmljdC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID09IHN1YmRpc3RyaWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzdWJkaXN0cmljdC5uYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnN1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9