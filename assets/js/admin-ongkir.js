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
  // sdokr_setting_els.account_type.on("change", function () {
  //     $("input#submit").trigger("click");
  // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1vbmdraXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZG9rcl9zZXR0aW5nX2VscyIsInNldHRpbmdfZm9ybSIsImFjY291bnRfdHlwZSIsImdldF9sb2NhdGlvbl9idG4iLCJsb2FkaW5nX2Jsb2NrIiwibG9hZGluZ190ZXh0IiwiZ2V0X2xvY2F0aW9uX21zZyIsImdldF9sb2NhdGlvbl9zcGlubmVyIiwiY2hpbGRyZW4iLCJzZG9rcl9zZXR0aW5nX2Z1bmMiLCJnZXRfbG9jYXRpb24iLCJhdHRyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImdldF9wcm92aW5jZSIsInRoZW4iLCJyZXMiLCJnZXRfY2l0eSIsImdldF9pbnRsX29yaWdpbiIsImdldF9pbnRsX2Rlc3RpbmF0aW9uIiwiZ2V0X2FsbF9zdWJkaXN0cmljdHMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsIm9uZ2tpcl9sY3oiLCJnZXRfcHJvdmluY2VfdGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWpheCIsInVybCIsImFqYXh1cmwiLCJ0eXBlIiwiZGF0YSIsImFjdGlvbiIsIm5vbmNlX2FqYXgiLCJub25jZSIsInN1Y2Nlc3MiLCJlcnJvciIsImFsZXJ0IiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsImdldF9jaXR5X3RleHQiLCJnZXRfc3ViZGlzdHJpY3QiLCJsYXN0X2NpdHlfaWQiLCJkb25lIiwiY2l0eV9pZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0X2ludGxfb3JpZ2luX3RleHQiLCJnZXRfaW50bF9kZXN0aW5hdGlvbl90ZXh0Iiwib24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFFQUEsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQixlQUQwQixDQUcxQjs7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRztBQUNwQkMsZ0JBQVksRUFBRUosNkNBQUMsQ0FBQyxxQkFBRCxDQURLO0FBRXBCSyxnQkFBWSxFQUFFTCw2Q0FBQyxDQUFDLGdDQUFELENBRks7QUFHcEJNLG9CQUFnQixFQUFFTiw2Q0FBQyxDQUFDLHFCQUFELENBSEM7QUFJcEJPLGlCQUFhLEVBQUVQLDZDQUFDLENBQUMsZ0JBQUQsQ0FKSTtBQUtwQlEsZ0JBQVksRUFBRVIsNkNBQUMsQ0FBQyxzQkFBRCxDQUxLO0FBTXBCUyxvQkFBZ0IsRUFBRVQsNkNBQUMsQ0FBQyx5QkFBRCxDQU5DO0FBT3BCVSx3QkFBb0IsRUFBRVYsNkNBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCVyxRQUF6QixDQUFrQyxVQUFsQztBQVBGLEdBQXhCO0FBVUEsTUFBSUMsa0JBQWtCLEdBQUc7QUFDckJDLGdCQUFZLEVBQUUsd0JBQVk7QUFDdEJWLHVCQUFpQixDQUFDRyxnQkFBbEIsQ0FBbUNRLElBQW5DLENBQXdDLFVBQXhDLEVBQW9ELElBQXBEO0FBQ0FYLHVCQUFpQixDQUFDSSxhQUFsQixDQUFnQ1EsV0FBaEMsQ0FBNEMsWUFBNUM7QUFDQVosdUJBQWlCLENBQUNPLG9CQUFsQixDQUF1Q0ssV0FBdkMsQ0FBbUQsWUFBbkQ7QUFDQVosdUJBQWlCLENBQUNNLGdCQUFsQixDQUFtQ08sUUFBbkMsQ0FBNEMsWUFBNUM7QUFDQUosd0JBQWtCLENBQ2JLLFlBREwsR0FFS0MsSUFGTCxDQUVVLFVBQUNDLEdBQUQsRUFBUztBQUNYLGVBQU9QLGtCQUFrQixDQUFDUSxRQUFuQixFQUFQO0FBQ0gsT0FKTCxFQUtLRixJQUxMLENBS1UsVUFBQ0MsR0FBRCxFQUFTO0FBQ1gsZUFBT1Asa0JBQWtCLENBQUNTLGVBQW5CLEVBQVA7QUFDSCxPQVBMLEVBUUtILElBUkwsQ0FRVSxVQUFDQyxHQUFELEVBQVM7QUFDWCxlQUFPUCxrQkFBa0IsQ0FBQ1Usb0JBQW5CLEVBQVA7QUFDSCxPQVZMLEVBV0tKLElBWEwsQ0FXVSxVQUFDQyxHQUFELEVBQVM7QUFDWFAsMEJBQWtCLENBQUNXLG9CQUFuQjtBQUNILE9BYkwsV0FjVyxVQUFDQyxHQUFELEVBQVM7QUFDWkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDSCxPQWhCTDtBQWlCSCxLQXZCb0I7QUF3QnJCUCxnQkFBWSxFQUFFLHdCQUFZO0FBQ3RCZCx1QkFBaUIsQ0FBQ0ssWUFBbEIsQ0FBK0JtQixJQUEvQixDQUFvQ0MsVUFBVSxDQUFDQyxpQkFBL0M7QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUMxQ2hDLHFEQUFDLENBQUNpQyxJQUFGLENBQU87QUFDSEMsYUFBRyxFQUFFTixVQUFVLENBQUNPLE9BRGI7QUFFSEMsY0FBSSxFQUFFLE1BRkg7QUFHSEMsY0FBSSxFQUFFO0FBQ0ZDLGtCQUFNLEVBQUUscUJBRE47QUFFRkMsc0JBQVUsRUFBRVgsVUFBVSxDQUFDWTtBQUZyQixXQUhIO0FBT0hDLGlCQUFPLEVBQUUsaUJBQVV0QixHQUFWLEVBQWU7QUFDcEI7QUFDQSxnQkFBSWtCLElBQUksR0FBR2xCLEdBQUcsQ0FBQ2tCLElBQWY7QUFDQU4sbUJBQU8sQ0FBQ00sSUFBRCxDQUFQO0FBQ0gsV0FYRTtBQVlISyxlQUFLLEVBQUUsZUFBVWxCLEdBQVYsRUFBZTtBQUNsQkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FtQixpQkFBSyxDQUFDbkIsR0FBRyxDQUFDb0IsWUFBSixDQUFpQlAsSUFBakIsQ0FBc0JRLE9BQXZCLENBQUw7QUFDQWIsa0JBQU0sQ0FBQ1IsR0FBRyxDQUFDb0IsWUFBSixDQUFpQlAsSUFBakIsQ0FBc0JRLE9BQXZCLENBQU47QUFDSDtBQWhCRSxTQUFQO0FBa0JILE9BbkJNLENBQVA7QUFvQkgsS0E5Q29CO0FBK0NyQnpCLFlBQVEsRUFBRSxvQkFBWTtBQUNsQmpCLHVCQUFpQixDQUFDSyxZQUFsQixDQUErQm1CLElBQS9CLENBQW9DQyxVQUFVLENBQUNrQixhQUEvQztBQUNBLGFBQU8sSUFBSWhCLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUMxQ2hDLHFEQUFDLENBQUNpQyxJQUFGLENBQU87QUFDSEMsYUFBRyxFQUFFTixVQUFVLENBQUNPLE9BRGI7QUFFSEMsY0FBSSxFQUFFLE1BRkg7QUFHSEMsY0FBSSxFQUFFO0FBQ0ZDLGtCQUFNLEVBQUUsaUJBRE47QUFFRkMsc0JBQVUsRUFBRVgsVUFBVSxDQUFDWTtBQUZyQixXQUhIO0FBT0hDLGlCQUFPLEVBQUUsaUJBQVV0QixHQUFWLEVBQWU7QUFDcEI7QUFDQSxnQkFBSWtCLElBQUksR0FBR2xCLEdBQUcsQ0FBQ2tCLElBQWY7QUFDQU4sbUJBQU8sQ0FBQ00sSUFBRCxDQUFQO0FBQ0gsV0FYRTtBQVlISyxlQUFLLEVBQUUsZUFBVWxCLEdBQVYsRUFBZTtBQUNsQkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FtQixpQkFBSyxDQUFDbkIsR0FBRyxDQUFDb0IsWUFBSixDQUFpQlAsSUFBakIsQ0FBc0JRLE9BQXZCLENBQUw7QUFDQWIsa0JBQU0sQ0FBQ1IsR0FBRyxDQUFDb0IsWUFBSixDQUFpQlAsSUFBakIsQ0FBc0JRLE9BQXZCLENBQU47QUFDSDtBQWhCRSxTQUFQO0FBa0JILE9BbkJNLENBQVA7QUFvQkgsS0FyRW9CO0FBc0VyQkUsbUJBQWUsRUFBRSwyQkFBNEI7QUFBQSxVQUFsQkMsWUFBa0IsdUVBQUgsQ0FBRztBQUN6QyxhQUFPLElBQUlsQixPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDMUNoQyxxREFBQyxDQUFDaUMsSUFBRixDQUFPO0FBQ0hDLGFBQUcsRUFBRU4sVUFBVSxDQUFDTyxPQURiO0FBRUhDLGNBQUksRUFBRSxNQUZIO0FBR0hDLGNBQUksRUFBRTtBQUNGQyxrQkFBTSxFQUFFLHdCQUROO0FBRUZDLHNCQUFVLEVBQUVYLFVBQVUsQ0FBQ1ksS0FGckI7QUFHRlEsd0JBQVksRUFBRUE7QUFIWixXQUhIO0FBUUhQLGlCQUFPLEVBQUUsaUJBQVV0QixHQUFWLEVBQWU7QUFDcEI7QUFDQSxnQkFBSWtCLElBQUksR0FBR2xCLEdBQUcsQ0FBQ2tCLElBQWY7QUFDQWxDLDZCQUFpQixDQUFDSyxZQUFsQixDQUErQm1CLElBQS9CLENBQW9DVSxJQUFJLENBQUNRLE9BQXpDO0FBQ0FkLG1CQUFPLENBQUNNLElBQUQsQ0FBUDtBQUNILFdBYkU7QUFjSEssZUFBSyxFQUFFLGVBQVVsQixHQUFWLEVBQWU7QUFDbEJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBbUIsaUJBQUssQ0FBQ25CLEdBQUcsQ0FBQ29CLFlBQUosQ0FBaUJQLElBQWpCLENBQXNCUSxPQUF2QixDQUFMO0FBQ0FiLGtCQUFNLENBQUMsNEJBQUQsQ0FBTjtBQUNIO0FBbEJFLFNBQVA7QUFvQkgsT0FyQk0sQ0FBUDtBQXNCSCxLQTdGb0I7QUE4RnJCVCx3QkFBb0IsRUFBRSxnQ0FBNEI7QUFBQSxVQUFsQnlCLFlBQWtCLHVFQUFILENBQUc7QUFDOUNwQyx3QkFBa0IsQ0FDYm1DLGVBREwsQ0FDcUJDLFlBRHJCLEVBRUs5QixJQUZMLENBRVUsVUFBQ0MsR0FBRCxFQUFTO0FBQ1gsWUFBSWtCLElBQUksR0FBR2xCLEdBQUcsQ0FBQ2tCLElBQWY7O0FBRUEsWUFBSSxDQUFDQSxJQUFJLENBQUNZLElBQVYsRUFBZ0I7QUFDWnJDLDRCQUFrQixDQUFDVyxvQkFBbkIsQ0FBd0NjLElBQUksQ0FBQ2EsT0FBN0M7QUFDSCxTQUZELE1BRU87QUFDSC9DLDJCQUFpQixDQUFDRyxnQkFBbEIsQ0FBbUNRLElBQW5DLENBQ0ksVUFESixFQUVJLEtBRko7QUFJQVgsMkJBQWlCLENBQUNPLG9CQUFsQixDQUF1Q00sUUFBdkMsQ0FDSSxZQURKO0FBR0FiLDJCQUFpQixDQUFDTSxnQkFBbEIsQ0FBbUNNLFdBQW5DLENBQ0ksWUFESjtBQUdBWiwyQkFBaUIsQ0FBQ0ksYUFBbEIsQ0FBZ0NTLFFBQWhDLENBQXlDLFlBQXpDO0FBQ0FtQyxnQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNIO0FBQ0osT0FyQkwsV0FzQlcsVUFBQzdCLEdBQUQsRUFBUztBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILE9BeEJMO0FBeUJILEtBeEhvQjtBQXlIckJILG1CQUFlLEVBQUUsMkJBQVk7QUFDekJsQix1QkFBaUIsQ0FBQ0ssWUFBbEIsQ0FBK0JtQixJQUEvQixDQUNJQyxVQUFVLENBQUMwQixvQkFEZjtBQUdBLGFBQU8sSUFBSXhCLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUMxQ2hDLHFEQUFDLENBQUNpQyxJQUFGLENBQU87QUFDSEMsYUFBRyxFQUFFTixVQUFVLENBQUNPLE9BRGI7QUFFSEMsY0FBSSxFQUFFLE1BRkg7QUFHSEMsY0FBSSxFQUFFO0FBQ0ZDLGtCQUFNLEVBQUUsd0JBRE47QUFFRkMsc0JBQVUsRUFBRVgsVUFBVSxDQUFDWTtBQUZyQixXQUhIO0FBT0hDLGlCQUFPLEVBQUUsaUJBQVV0QixHQUFWLEVBQWU7QUFDcEI7QUFDQSxnQkFBSWtCLElBQUksR0FBR2xCLEdBQUcsQ0FBQ2tCLElBQWY7QUFDQU4sbUJBQU8sQ0FBQ00sSUFBRCxDQUFQO0FBQ0gsV0FYRTtBQVlISyxlQUFLLEVBQUUsZUFBVWxCLEdBQVYsRUFBZTtBQUNsQkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FtQixpQkFBSyxDQUFDbkIsR0FBRyxDQUFDb0IsWUFBSixDQUFpQlAsSUFBakIsQ0FBc0JRLE9BQXZCLENBQUw7QUFDQWIsa0JBQU0sQ0FBQ1IsR0FBRyxDQUFDb0IsWUFBSixDQUFpQlAsSUFBakIsQ0FBc0JRLE9BQXZCLENBQU47QUFDSDtBQWhCRSxTQUFQO0FBa0JILE9BbkJNLENBQVA7QUFvQkgsS0FqSm9CO0FBa0pyQnZCLHdCQUFvQixFQUFFLGdDQUFZO0FBQzlCbkIsdUJBQWlCLENBQUNLLFlBQWxCLENBQStCbUIsSUFBL0IsQ0FDSUMsVUFBVSxDQUFDMkIseUJBRGY7QUFHQSxhQUFPLElBQUl6QixPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDMUNoQyxxREFBQyxDQUFDaUMsSUFBRixDQUFPO0FBQ0hDLGFBQUcsRUFBRU4sVUFBVSxDQUFDTyxPQURiO0FBRUhDLGNBQUksRUFBRSxNQUZIO0FBR0hDLGNBQUksRUFBRTtBQUNGQyxrQkFBTSxFQUFFLDZCQUROO0FBRUZDLHNCQUFVLEVBQUVYLFVBQVUsQ0FBQ1k7QUFGckIsV0FISDtBQU9IQyxpQkFBTyxFQUFFLGlCQUFVdEIsR0FBVixFQUFlO0FBQ3BCO0FBQ0EsZ0JBQUlrQixJQUFJLEdBQUdsQixHQUFHLENBQUNrQixJQUFmO0FBQ0FOLG1CQUFPLENBQUNNLElBQUQsQ0FBUDtBQUNILFdBWEU7QUFZSEssZUFBSyxFQUFFLGVBQVVsQixHQUFWLEVBQWU7QUFDbEJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBbUIsaUJBQUssQ0FBQ25CLEdBQUcsQ0FBQ29CLFlBQUosQ0FBaUJQLElBQWpCLENBQXNCUSxPQUF2QixDQUFMO0FBQ0FiLGtCQUFNLENBQUNSLEdBQUcsQ0FBQ29CLFlBQUosQ0FBaUJQLElBQWpCLENBQXNCUSxPQUF2QixDQUFOO0FBQ0g7QUFoQkUsU0FBUDtBQWtCSCxPQW5CTSxDQUFQO0FBb0JIO0FBMUtvQixHQUF6QixDQWQwQixDQTJMMUI7O0FBQ0ExQyxtQkFBaUIsQ0FBQ0csZ0JBQWxCLENBQW1Da0QsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsWUFBWTtBQUN2RDVDLHNCQUFrQixDQUFDQyxZQUFuQjtBQUNILEdBRkQsRUE1TDBCLENBZ00xQjtBQUNBO0FBQ0E7QUFDQTtBQUNILENBcE1ELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsd0IiLCJmaWxlIjoiYWRtaW4tb25na2lyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8gU2V0dGluZyBwYWdlXHJcbiAgICBsZXQgc2Rva3Jfc2V0dGluZ19lbHMgPSB7XHJcbiAgICAgICAgc2V0dGluZ19mb3JtOiAkKFwiI3Nkb2tyX3NldHRpbmdfZm9ybVwiKSxcclxuICAgICAgICBhY2NvdW50X3R5cGU6ICQoXCIjc2Rva3JfcmFqYW9uZ2tpcl9hY2NvdW50X3R5cGVcIiksXHJcbiAgICAgICAgZ2V0X2xvY2F0aW9uX2J0bjogJChcIiNzZG9rci1nZXQtbG9jYXRpb25cIiksXHJcbiAgICAgICAgbG9hZGluZ19ibG9jazogJChcIi5zZG9rci1sb2FkaW5nXCIpLFxyXG4gICAgICAgIGxvYWRpbmdfdGV4dDogJChcIi5zZG9rci1sb2FkaW5nX190ZXh0XCIpLFxyXG4gICAgICAgIGdldF9sb2NhdGlvbl9tc2c6ICQoXCIuc2Rva3ItZ2V0LWxvY2F0aW9uLW1zZ1wiKSxcclxuICAgICAgICBnZXRfbG9jYXRpb25fc3Bpbm5lcjogJChcIiNzZG9rci1nZXQtbG9jYXRpb25cIikuY2hpbGRyZW4oXCIuc3Bpbm5lclwiKSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNkb2tyX3NldHRpbmdfZnVuYyA9IHtcclxuICAgICAgICBnZXRfbG9jYXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX2J0bi5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfYmxvY2sucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5nZXRfbG9jYXRpb25fc3Bpbm5lci5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9tc2cuYWRkQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmNcclxuICAgICAgICAgICAgICAgIC5nZXRfcHJvdmluY2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2NpdHkoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfaW50bF9vcmlnaW4oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNkb2tyX3NldHRpbmdfZnVuYy5nZXRfaW50bF9kZXN0aW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Z1bmMuZ2V0X2FsbF9zdWJkaXN0cmljdHMoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9wcm92aW5jZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChvbmdraXJfbGN6LmdldF9wcm92aW5jZV90ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9wcm92aW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfY2l0eTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChvbmdraXJfbGN6LmdldF9jaXR5X3RleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2NpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X3N1YmRpc3RyaWN0OiBmdW5jdGlvbiAobGFzdF9jaXR5X2lkID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3N1YmRpc3RyaWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY2l0eV9pZDogbGFzdF9jaXR5X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZG9rcl9zZXR0aW5nX2Vscy5sb2FkaW5nX3RleHQuaHRtbChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJHZXR0aW5nIHN1YmRpc3RyaWN0cyBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0X2FsbF9zdWJkaXN0cmljdHM6IGZ1bmN0aW9uIChsYXN0X2NpdHlfaWQgPSAwKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZnVuY1xyXG4gICAgICAgICAgICAgICAgLmdldF9zdWJkaXN0cmljdChsYXN0X2NpdHlfaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmRvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9hbGxfc3ViZGlzdHJpY3RzKGRhdGEuY2l0eV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMuZ2V0X2xvY2F0aW9uX2J0bi5hdHRyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9zcGlubmVyLmFkZENsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZG9rci1oaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9tc2cucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNkb2tyLWhpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ19ibG9jay5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfaW50bF9vcmlnaW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0dGluZ19lbHMubG9hZGluZ190ZXh0Lmh0bWwoXHJcbiAgICAgICAgICAgICAgICBvbmdraXJfbGN6LmdldF9pbnRsX29yaWdpbl90ZXh0LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2ludGxfb3JpZ2luXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldF9pbnRsX2Rlc3RpbmF0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldHRpbmdfZWxzLmxvYWRpbmdfdGV4dC5odG1sKFxyXG4gICAgICAgICAgICAgICAgb25na2lyX2xjei5nZXRfaW50bF9kZXN0aW5hdGlvbl90ZXh0LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2ludGxfZGVzdGluYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIE9uIGNsaWNrIGdldCBsb2NhdGlvbiBidXR0b25cclxuICAgIHNkb2tyX3NldHRpbmdfZWxzLmdldF9sb2NhdGlvbl9idG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3Jfc2V0dGluZ19mdW5jLmdldF9sb2NhdGlvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIGFjY291bnQgdHlwZVxyXG4gICAgLy8gc2Rva3Jfc2V0dGluZ19lbHMuYWNjb3VudF90eXBlLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkKFwiaW5wdXQjc3VibWl0XCIpLnRyaWdnZXIoXCJjbGlja1wiKTtcclxuICAgIC8vIH0pO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==