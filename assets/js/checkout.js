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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/select2/dist/js/select2.js":
/*!*************************************************!*\
  !*** ./node_modules/select2/dist/js/select2.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Select2 4.0.13
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 = function () {
    // Restore the Select2 AMD loader so it can be used
    // Needed mostly in the language files, where the loader is not inserted
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
      var S2 = jQuery.fn.select2.amd;
    }

    var S2;

    (function () {
      if (!S2 || !S2.requirejs) {
        if (!S2) {
          S2 = {};
        } else {
          require = S2;
        }
        /**
         * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
         * Released under MIT license, http://github.com/requirejs/almond/LICENSE
         */
        //Going sloppy to avoid 'use strict' string cost, but strict practices should
        //be followed.

        /*global setTimeout: false */


        var requirejs, require, define;

        (function (undef) {
          var main,
              _req,
              makeMap,
              handlers,
              defined = {},
              waiting = {},
              config = {},
              defining = {},
              hasOwn = Object.prototype.hasOwnProperty,
              aps = [].slice,
              jsSuffixRegExp = /\.js$/;

          function hasProp(obj, prop) {
            return hasOwn.call(obj, prop);
          }
          /**
           * Given a relative module name, like ./something, normalize it to
           * a real name that can be mapped to a path.
           * @param {String} name the relative name
           * @param {String} baseName a real name that the name arg is relative
           * to.
           * @returns {String} normalized name
           */


          function normalize(name, baseName) {
            var nameParts,
                nameSegment,
                mapValue,
                foundMap,
                lastIndex,
                foundI,
                foundStarMap,
                starI,
                i,
                j,
                part,
                normalizedBaseParts,
                baseParts = baseName && baseName.split("/"),
                map = config.map,
                starMap = map && map['*'] || {}; //Adjust any relative paths.

            if (name) {
              name = name.split('/');
              lastIndex = name.length - 1; // If wanting node ID compatibility, strip .js from end
              // of IDs. Have to do this here, and not in nameToUrl
              // because node allows either .js or non .js to map
              // to same file.

              if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
              } // Starts with a '.' so need the baseName


              if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
              } //start trimDots


              for (i = 0; i < name.length; i++) {
                part = name[i];

                if (part === '.') {
                  name.splice(i, 1);
                  i -= 1;
                } else if (part === '..') {
                  // If at the start, or previous value is still ..,
                  // keep them so that when converted to a path it may
                  // still work when converted to a path, even though
                  // as an ID it is less than ideal. In larger point
                  // releases, may be better to just kick out an error.
                  if (i === 0 || i === 1 && name[2] === '..' || name[i - 1] === '..') {
                    continue;
                  } else if (i > 0) {
                    name.splice(i - 1, 2);
                    i -= 2;
                  }
                }
              } //end trimDots


              name = name.join('/');
            } //Apply map config if available.


            if ((baseParts || starMap) && map) {
              nameParts = name.split('/');

              for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                  //Find the longest baseName segment match in the config.
                  //So, do joins on the biggest to smallest lengths of baseParts.
                  for (j = baseParts.length; j > 0; j -= 1) {
                    mapValue = map[baseParts.slice(0, j).join('/')]; //baseName segment has  config, find if it has one for
                    //this name.

                    if (mapValue) {
                      mapValue = mapValue[nameSegment];

                      if (mapValue) {
                        //Match, update name to the new value.
                        foundMap = mapValue;
                        foundI = i;
                        break;
                      }
                    }
                  }
                }

                if (foundMap) {
                  break;
                } //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.


                if (!foundStarMap && starMap && starMap[nameSegment]) {
                  foundStarMap = starMap[nameSegment];
                  starI = i;
                }
              }

              if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
              }

              if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
              }
            }

            return name;
          }

          function makeRequire(relName, forceSync) {
            return function () {
              //A version of a require function that passes a moduleName
              //value for items that may need to
              //look up paths relative to the moduleName
              var args = aps.call(arguments, 0); //If first arg is not require('string'), and there is only
              //one arg, it is the array form without a callback. Insert
              //a null so that the following concat is correct.

              if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
              }

              return _req.apply(undef, args.concat([relName, forceSync]));
            };
          }

          function makeNormalize(relName) {
            return function (name) {
              return normalize(name, relName);
            };
          }

          function makeLoad(depName) {
            return function (value) {
              defined[depName] = value;
            };
          }

          function callDep(name) {
            if (hasProp(waiting, name)) {
              var args = waiting[name];
              delete waiting[name];
              defining[name] = true;
              main.apply(undef, args);
            }

            if (!hasProp(defined, name) && !hasProp(defining, name)) {
              throw new Error('No ' + name);
            }

            return defined[name];
          } //Turns a plugin!resource to [plugin, resource]
          //with the plugin being undefined if the name
          //did not have a plugin prefix.


          function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;

            if (index > -1) {
              prefix = name.substring(0, index);
              name = name.substring(index + 1, name.length);
            }

            return [prefix, name];
          } //Creates a parts array for a relName where first part is plugin ID,
          //second part is resource ID. Assumes relName has already been normalized.


          function makeRelParts(relName) {
            return relName ? splitPrefix(relName) : [];
          }
          /**
           * Makes a name map, normalizing the name, and using a plugin
           * for normalization if necessary. Grabs a ref to plugin
           * too, as an optimization.
           */


          makeMap = function makeMap(name, relParts) {
            var plugin,
                parts = splitPrefix(name),
                prefix = parts[0],
                relResourceName = relParts[1];
            name = parts[1];

            if (prefix) {
              prefix = normalize(prefix, relResourceName);
              plugin = callDep(prefix);
            } //Normalize according


            if (prefix) {
              if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
              } else {
                name = normalize(name, relResourceName);
              }
            } else {
              name = normalize(name, relResourceName);
              parts = splitPrefix(name);
              prefix = parts[0];
              name = parts[1];

              if (prefix) {
                plugin = callDep(prefix);
              }
            } //Using ridiculous property names for space reasons


            return {
              f: prefix ? prefix + '!' + name : name,
              //fullName
              n: name,
              pr: prefix,
              p: plugin
            };
          };

          function makeConfig(name) {
            return function () {
              return config && config.config && config.config[name] || {};
            };
          }

          handlers = {
            require: function require(name) {
              return makeRequire(name);
            },
            exports: function exports(name) {
              var e = defined[name];

              if (typeof e !== 'undefined') {
                return e;
              } else {
                return defined[name] = {};
              }
            },
            module: function module(name) {
              return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
              };
            }
          };

          main = function main(name, deps, callback, relName) {
            var cjsModule,
                depName,
                ret,
                map,
                i,
                relParts,
                args = [],
                callbackType = _typeof(callback),
                usingExports; //Use name if no relName


            relName = relName || name;
            relParts = makeRelParts(relName); //Call the callback to define the module, if necessary.

            if (callbackType === 'undefined' || callbackType === 'function') {
              //Pull out the defined dependencies and pass the ordered
              //values to the callback.
              //Default to [require, exports, module] if no deps
              deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;

              for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f; //Fast path CommonJS standard dependencies.

                if (depName === "require") {
                  args[i] = handlers.require(name);
                } else if (depName === "exports") {
                  //CommonJS module spec 1.1
                  args[i] = handlers.exports(name);
                  usingExports = true;
                } else if (depName === "module") {
                  //CommonJS module spec 1.1
                  cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) {
                  args[i] = callDep(depName);
                } else if (map.p) {
                  map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                  args[i] = defined[depName];
                } else {
                  throw new Error(name + ' missing ' + depName);
                }
              }

              ret = callback ? callback.apply(defined[name], args) : undefined;

              if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name]) {
                  defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                  //Use the return value from the function.
                  defined[name] = ret;
                }
              }
            } else if (name) {
              //May just be an object definition for the module. Only
              //worry about defining if have a module name.
              defined[name] = callback;
            }
          };

          requirejs = require = _req = function req(deps, callback, relName, forceSync, alt) {
            if (typeof deps === "string") {
              if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
              } //Just return the module wanted. In this scenario, the
              //deps arg is the module name, and second arg (if passed)
              //is just the relName.
              //Normalize module name, if it contains . or ..


              return callDep(makeMap(deps, makeRelParts(callback)).f);
            } else if (!deps.splice) {
              //deps is a config object, not an array.
              config = deps;

              if (config.deps) {
                _req(config.deps, config.callback);
              }

              if (!callback) {
                return;
              }

              if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
              } else {
                deps = undef;
              }
            } //Support require(['a'])


            callback = callback || function () {}; //If relName is a function, it is an errback handler,
            //so remove it.


            if (typeof relName === 'function') {
              relName = forceSync;
              forceSync = alt;
            } //Simulate async callback;


            if (forceSync) {
              main(undef, deps, callback, relName);
            } else {
              //Using a non-zero value because of concern for what old browsers
              //do, and latest browsers "upgrade" to 4 if lower value is used:
              //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
              //If want a value immediately, use require('id') instead -- something
              //that works in almond on the global level, but not guaranteed and
              //unlikely to work in other AMD implementations.
              setTimeout(function () {
                main(undef, deps, callback, relName);
              }, 4);
            }

            return _req;
          };
          /**
           * Just drops the config on the floor, but returns req in case
           * the config return value is used.
           */


          _req.config = function (cfg) {
            return _req(cfg);
          };
          /**
           * Expose module registry for debugging and tooling
           */


          requirejs._defined = defined;

          define = function define(name, deps, callback) {
            if (typeof name !== 'string') {
              throw new Error('See almond README: incorrect module build, no module name');
            } //This module may not have dependencies


            if (!deps.splice) {
              //deps is not an array, so probably means
              //an object literal or factory function for
              //the value. Adjust args.
              callback = deps;
              deps = [];
            }

            if (!hasProp(defined, name) && !hasProp(waiting, name)) {
              waiting[name] = [name, deps, callback];
            }
          };

          define.amd = {
            jQuery: true
          };
        })();

        S2.requirejs = requirejs;
        S2.require = require;
        S2.define = define;
      }
    })();

    S2.define("almond", function () {});
    /* global jQuery:false, $:false */

    S2.define('jquery', [], function () {
      var _$ = jQuery || $;

      if (_$ == null && console && console.error) {
        console.error('Select2: An instance of jQuery or a jQuery-compatible library was not ' + 'found. Make sure that you are including jQuery before Select2 on your ' + 'web page.');
      }

      return _$;
    });
    S2.define('select2/utils', ['jquery'], function ($) {
      var Utils = {};

      Utils.Extend = function (ChildClass, SuperClass) {
        var __hasProp = {}.hasOwnProperty;

        function BaseConstructor() {
          this.constructor = ChildClass;
        }

        for (var key in SuperClass) {
          if (__hasProp.call(SuperClass, key)) {
            ChildClass[key] = SuperClass[key];
          }
        }

        BaseConstructor.prototype = SuperClass.prototype;
        ChildClass.prototype = new BaseConstructor();
        ChildClass.__super__ = SuperClass.prototype;
        return ChildClass;
      };

      function getMethods(theClass) {
        var proto = theClass.prototype;
        var methods = [];

        for (var methodName in proto) {
          var m = proto[methodName];

          if (typeof m !== 'function') {
            continue;
          }

          if (methodName === 'constructor') {
            continue;
          }

          methods.push(methodName);
        }

        return methods;
      }

      Utils.Decorate = function (SuperClass, DecoratorClass) {
        var decoratedMethods = getMethods(DecoratorClass);
        var superMethods = getMethods(SuperClass);

        function DecoratedClass() {
          var unshift = Array.prototype.unshift;
          var argCount = DecoratorClass.prototype.constructor.length;
          var calledConstructor = SuperClass.prototype.constructor;

          if (argCount > 0) {
            unshift.call(arguments, SuperClass.prototype.constructor);
            calledConstructor = DecoratorClass.prototype.constructor;
          }

          calledConstructor.apply(this, arguments);
        }

        DecoratorClass.displayName = SuperClass.displayName;

        function ctr() {
          this.constructor = DecoratedClass;
        }

        DecoratedClass.prototype = new ctr();

        for (var m = 0; m < superMethods.length; m++) {
          var superMethod = superMethods[m];
          DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod];
        }

        var calledMethod = function calledMethod(methodName) {
          // Stub out the original method if it's not decorating an actual method
          var originalMethod = function originalMethod() {};

          if (methodName in DecoratedClass.prototype) {
            originalMethod = DecoratedClass.prototype[methodName];
          }

          var decoratedMethod = DecoratorClass.prototype[methodName];
          return function () {
            var unshift = Array.prototype.unshift;
            unshift.call(arguments, originalMethod);
            return decoratedMethod.apply(this, arguments);
          };
        };

        for (var d = 0; d < decoratedMethods.length; d++) {
          var decoratedMethod = decoratedMethods[d];
          DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
        }

        return DecoratedClass;
      };

      var Observable = function Observable() {
        this.listeners = {};
      };

      Observable.prototype.on = function (event, callback) {
        this.listeners = this.listeners || {};

        if (event in this.listeners) {
          this.listeners[event].push(callback);
        } else {
          this.listeners[event] = [callback];
        }
      };

      Observable.prototype.trigger = function (event) {
        var slice = Array.prototype.slice;
        var params = slice.call(arguments, 1);
        this.listeners = this.listeners || {}; // Params should always come in as an array

        if (params == null) {
          params = [];
        } // If there are no arguments to the event, use a temporary object


        if (params.length === 0) {
          params.push({});
        } // Set the `_type` of the first object to the event


        params[0]._type = event;

        if (event in this.listeners) {
          this.invoke(this.listeners[event], slice.call(arguments, 1));
        }

        if ('*' in this.listeners) {
          this.invoke(this.listeners['*'], arguments);
        }
      };

      Observable.prototype.invoke = function (listeners, params) {
        for (var i = 0, len = listeners.length; i < len; i++) {
          listeners[i].apply(this, params);
        }
      };

      Utils.Observable = Observable;

      Utils.generateChars = function (length) {
        var chars = '';

        for (var i = 0; i < length; i++) {
          var randomChar = Math.floor(Math.random() * 36);
          chars += randomChar.toString(36);
        }

        return chars;
      };

      Utils.bind = function (func, context) {
        return function () {
          func.apply(context, arguments);
        };
      };

      Utils._convertData = function (data) {
        for (var originalKey in data) {
          var keys = originalKey.split('-');
          var dataLevel = data;

          if (keys.length === 1) {
            continue;
          }

          for (var k = 0; k < keys.length; k++) {
            var key = keys[k]; // Lowercase the first letter
            // By default, dash-separated becomes camelCase

            key = key.substring(0, 1).toLowerCase() + key.substring(1);

            if (!(key in dataLevel)) {
              dataLevel[key] = {};
            }

            if (k == keys.length - 1) {
              dataLevel[key] = data[originalKey];
            }

            dataLevel = dataLevel[key];
          }

          delete data[originalKey];
        }

        return data;
      };

      Utils.hasScroll = function (index, el) {
        // Adapted from the function created by @ShadowScripter
        // and adapted by @BillBarry on the Stack Exchange Code Review website.
        // The original code can be found at
        // http://codereview.stackexchange.com/q/13338
        // and was designed to be used with the Sizzle selector engine.
        var $el = $(el);
        var overflowX = el.style.overflowX;
        var overflowY = el.style.overflowY; //Check both x and y declarations

        if (overflowX === overflowY && (overflowY === 'hidden' || overflowY === 'visible')) {
          return false;
        }

        if (overflowX === 'scroll' || overflowY === 'scroll') {
          return true;
        }

        return $el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth;
      };

      Utils.escapeMarkup = function (markup) {
        var replaceMap = {
          '\\': '&#92;',
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#39;',
          '/': '&#47;'
        }; // Do not try to escape the markup if it's not a string

        if (typeof markup !== 'string') {
          return markup;
        }

        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
          return replaceMap[match];
        });
      }; // Append an array of jQuery nodes to a given element.


      Utils.appendMany = function ($element, $nodes) {
        // jQuery 1.7.x does not support $.fn.append() with an array
        // Fall back to a jQuery object collection using $.fn.add()
        if ($.fn.jquery.substr(0, 3) === '1.7') {
          var $jqNodes = $();
          $.map($nodes, function (node) {
            $jqNodes = $jqNodes.add(node);
          });
          $nodes = $jqNodes;
        }

        $element.append($nodes);
      }; // Cache objects in Utils.__cache instead of $.data (see #4346)


      Utils.__cache = {};
      var id = 0;

      Utils.GetUniqueElementId = function (element) {
        // Get a unique element Id. If element has no id,
        // creates a new unique number, stores it in the id
        // attribute and returns the new id.
        // If an id already exists, it simply returns it.
        var select2Id = element.getAttribute('data-select2-id');

        if (select2Id == null) {
          // If element has id, use it.
          if (element.id) {
            select2Id = element.id;
            element.setAttribute('data-select2-id', select2Id);
          } else {
            element.setAttribute('data-select2-id', ++id);
            select2Id = id.toString();
          }
        }

        return select2Id;
      };

      Utils.StoreData = function (element, name, value) {
        // Stores an item in the cache for a specified element.
        // name is the cache key.
        var id = Utils.GetUniqueElementId(element);

        if (!Utils.__cache[id]) {
          Utils.__cache[id] = {};
        }

        Utils.__cache[id][name] = value;
      };

      Utils.GetData = function (element, name) {
        // Retrieves a value from the cache by its key (name)
        // name is optional. If no name specified, return
        // all cache items for the specified element.
        // and for a specified element.
        var id = Utils.GetUniqueElementId(element);

        if (name) {
          if (Utils.__cache[id]) {
            if (Utils.__cache[id][name] != null) {
              return Utils.__cache[id][name];
            }

            return $(element).data(name); // Fallback to HTML5 data attribs.
          }

          return $(element).data(name); // Fallback to HTML5 data attribs.
        } else {
          return Utils.__cache[id];
        }
      };

      Utils.RemoveData = function (element) {
        // Removes all cached items for a specified element.
        var id = Utils.GetUniqueElementId(element);

        if (Utils.__cache[id] != null) {
          delete Utils.__cache[id];
        }

        element.removeAttribute('data-select2-id');
      };

      return Utils;
    });
    S2.define('select2/results', ['jquery', './utils'], function ($, Utils) {
      function Results($element, options, dataAdapter) {
        this.$element = $element;
        this.data = dataAdapter;
        this.options = options;

        Results.__super__.constructor.call(this);
      }

      Utils.Extend(Results, Utils.Observable);

      Results.prototype.render = function () {
        var $results = $('<ul class="select2-results__options" role="listbox"></ul>');

        if (this.options.get('multiple')) {
          $results.attr('aria-multiselectable', 'true');
        }

        this.$results = $results;
        return $results;
      };

      Results.prototype.clear = function () {
        this.$results.empty();
      };

      Results.prototype.displayMessage = function (params) {
        var escapeMarkup = this.options.get('escapeMarkup');
        this.clear();
        this.hideLoading();
        var $message = $('<li role="alert" aria-live="assertive"' + ' class="select2-results__option"></li>');
        var message = this.options.get('translations').get(params.message);
        $message.append(escapeMarkup(message(params.args)));
        $message[0].className += ' select2-results__message';
        this.$results.append($message);
      };

      Results.prototype.hideMessages = function () {
        this.$results.find('.select2-results__message').remove();
      };

      Results.prototype.append = function (data) {
        this.hideLoading();
        var $options = [];

        if (data.results == null || data.results.length === 0) {
          if (this.$results.children().length === 0) {
            this.trigger('results:message', {
              message: 'noResults'
            });
          }

          return;
        }

        data.results = this.sort(data.results);

        for (var d = 0; d < data.results.length; d++) {
          var item = data.results[d];
          var $option = this.option(item);
          $options.push($option);
        }

        this.$results.append($options);
      };

      Results.prototype.position = function ($results, $dropdown) {
        var $resultsContainer = $dropdown.find('.select2-results');
        $resultsContainer.append($results);
      };

      Results.prototype.sort = function (data) {
        var sorter = this.options.get('sorter');
        return sorter(data);
      };

      Results.prototype.highlightFirstItem = function () {
        var $options = this.$results.find('.select2-results__option[aria-selected]');
        var $selected = $options.filter('[aria-selected=true]'); // Check if there are any selected options

        if ($selected.length > 0) {
          // If there are selected options, highlight the first
          $selected.first().trigger('mouseenter');
        } else {
          // If there are no selected options, highlight the first option
          // in the dropdown
          $options.first().trigger('mouseenter');
        }

        this.ensureHighlightVisible();
      };

      Results.prototype.setClasses = function () {
        var self = this;
        this.data.current(function (selected) {
          var selectedIds = $.map(selected, function (s) {
            return s.id.toString();
          });
          var $options = self.$results.find('.select2-results__option[aria-selected]');
          $options.each(function () {
            var $option = $(this);
            var item = Utils.GetData(this, 'data'); // id needs to be converted to a string when comparing

            var id = '' + item.id;

            if (item.element != null && item.element.selected || item.element == null && $.inArray(id, selectedIds) > -1) {
              $option.attr('aria-selected', 'true');
            } else {
              $option.attr('aria-selected', 'false');
            }
          });
        });
      };

      Results.prototype.showLoading = function (params) {
        this.hideLoading();
        var loadingMore = this.options.get('translations').get('searching');
        var loading = {
          disabled: true,
          loading: true,
          text: loadingMore(params)
        };
        var $loading = this.option(loading);
        $loading.className += ' loading-results';
        this.$results.prepend($loading);
      };

      Results.prototype.hideLoading = function () {
        this.$results.find('.loading-results').remove();
      };

      Results.prototype.option = function (data) {
        var option = document.createElement('li');
        option.className = 'select2-results__option';
        var attrs = {
          'role': 'option',
          'aria-selected': 'false'
        };
        var matches = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;

        if (data.element != null && matches.call(data.element, ':disabled') || data.element == null && data.disabled) {
          delete attrs['aria-selected'];
          attrs['aria-disabled'] = 'true';
        }

        if (data.id == null) {
          delete attrs['aria-selected'];
        }

        if (data._resultId != null) {
          option.id = data._resultId;
        }

        if (data.title) {
          option.title = data.title;
        }

        if (data.children) {
          attrs.role = 'group';
          attrs['aria-label'] = data.text;
          delete attrs['aria-selected'];
        }

        for (var attr in attrs) {
          var val = attrs[attr];
          option.setAttribute(attr, val);
        }

        if (data.children) {
          var $option = $(option);
          var label = document.createElement('strong');
          label.className = 'select2-results__group';
          var $label = $(label);
          this.template(data, label);
          var $children = [];

          for (var c = 0; c < data.children.length; c++) {
            var child = data.children[c];
            var $child = this.option(child);
            $children.push($child);
          }

          var $childrenContainer = $('<ul></ul>', {
            'class': 'select2-results__options select2-results__options--nested'
          });
          $childrenContainer.append($children);
          $option.append(label);
          $option.append($childrenContainer);
        } else {
          this.template(data, option);
        }

        Utils.StoreData(option, 'data', data);
        return option;
      };

      Results.prototype.bind = function (container, $container) {
        var self = this;
        var id = container.id + '-results';
        this.$results.attr('id', id);
        container.on('results:all', function (params) {
          self.clear();
          self.append(params.data);

          if (container.isOpen()) {
            self.setClasses();
            self.highlightFirstItem();
          }
        });
        container.on('results:append', function (params) {
          self.append(params.data);

          if (container.isOpen()) {
            self.setClasses();
          }
        });
        container.on('query', function (params) {
          self.hideMessages();
          self.showLoading(params);
        });
        container.on('select', function () {
          if (!container.isOpen()) {
            return;
          }

          self.setClasses();

          if (self.options.get('scrollAfterSelect')) {
            self.highlightFirstItem();
          }
        });
        container.on('unselect', function () {
          if (!container.isOpen()) {
            return;
          }

          self.setClasses();

          if (self.options.get('scrollAfterSelect')) {
            self.highlightFirstItem();
          }
        });
        container.on('open', function () {
          // When the dropdown is open, aria-expended="true"
          self.$results.attr('aria-expanded', 'true');
          self.$results.attr('aria-hidden', 'false');
          self.setClasses();
          self.ensureHighlightVisible();
        });
        container.on('close', function () {
          // When the dropdown is closed, aria-expended="false"
          self.$results.attr('aria-expanded', 'false');
          self.$results.attr('aria-hidden', 'true');
          self.$results.removeAttr('aria-activedescendant');
        });
        container.on('results:toggle', function () {
          var $highlighted = self.getHighlightedResults();

          if ($highlighted.length === 0) {
            return;
          }

          $highlighted.trigger('mouseup');
        });
        container.on('results:select', function () {
          var $highlighted = self.getHighlightedResults();

          if ($highlighted.length === 0) {
            return;
          }

          var data = Utils.GetData($highlighted[0], 'data');

          if ($highlighted.attr('aria-selected') == 'true') {
            self.trigger('close', {});
          } else {
            self.trigger('select', {
              data: data
            });
          }
        });
        container.on('results:previous', function () {
          var $highlighted = self.getHighlightedResults();
          var $options = self.$results.find('[aria-selected]');
          var currentIndex = $options.index($highlighted); // If we are already at the top, don't move further
          // If no options, currentIndex will be -1

          if (currentIndex <= 0) {
            return;
          }

          var nextIndex = currentIndex - 1; // If none are highlighted, highlight the first

          if ($highlighted.length === 0) {
            nextIndex = 0;
          }

          var $next = $options.eq(nextIndex);
          $next.trigger('mouseenter');
          var currentOffset = self.$results.offset().top;
          var nextTop = $next.offset().top;
          var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextTop - currentOffset < 0) {
            self.$results.scrollTop(nextOffset);
          }
        });
        container.on('results:next', function () {
          var $highlighted = self.getHighlightedResults();
          var $options = self.$results.find('[aria-selected]');
          var currentIndex = $options.index($highlighted);
          var nextIndex = currentIndex + 1; // If we are at the last option, stay there

          if (nextIndex >= $options.length) {
            return;
          }

          var $next = $options.eq(nextIndex);
          $next.trigger('mouseenter');
          var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
          var nextBottom = $next.offset().top + $next.outerHeight(false);
          var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextBottom > currentOffset) {
            self.$results.scrollTop(nextOffset);
          }
        });
        container.on('results:focus', function (params) {
          params.element.addClass('select2-results__option--highlighted');
        });
        container.on('results:message', function (params) {
          self.displayMessage(params);
        });

        if ($.fn.mousewheel) {
          this.$results.on('mousewheel', function (e) {
            var top = self.$results.scrollTop();
            var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;
            var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
            var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

            if (isAtTop) {
              self.$results.scrollTop(0);
              e.preventDefault();
              e.stopPropagation();
            } else if (isAtBottom) {
              self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height());
              e.preventDefault();
              e.stopPropagation();
            }
          });
        }

        this.$results.on('mouseup', '.select2-results__option[aria-selected]', function (evt) {
          var $this = $(this);
          var data = Utils.GetData(this, 'data');

          if ($this.attr('aria-selected') === 'true') {
            if (self.options.get('multiple')) {
              self.trigger('unselect', {
                originalEvent: evt,
                data: data
              });
            } else {
              self.trigger('close', {});
            }

            return;
          }

          self.trigger('select', {
            originalEvent: evt,
            data: data
          });
        });
        this.$results.on('mouseenter', '.select2-results__option[aria-selected]', function (evt) {
          var data = Utils.GetData(this, 'data');
          self.getHighlightedResults().removeClass('select2-results__option--highlighted');
          self.trigger('results:focus', {
            data: data,
            element: $(this)
          });
        });
      };

      Results.prototype.getHighlightedResults = function () {
        var $highlighted = this.$results.find('.select2-results__option--highlighted');
        return $highlighted;
      };

      Results.prototype.destroy = function () {
        this.$results.remove();
      };

      Results.prototype.ensureHighlightVisible = function () {
        var $highlighted = this.getHighlightedResults();

        if ($highlighted.length === 0) {
          return;
        }

        var $options = this.$results.find('[aria-selected]');
        var currentIndex = $options.index($highlighted);
        var currentOffset = this.$results.offset().top;
        var nextTop = $highlighted.offset().top;
        var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);
        var offsetDelta = nextTop - currentOffset;
        nextOffset -= $highlighted.outerHeight(false) * 2;

        if (currentIndex <= 2) {
          this.$results.scrollTop(0);
        } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
          this.$results.scrollTop(nextOffset);
        }
      };

      Results.prototype.template = function (result, container) {
        var template = this.options.get('templateResult');
        var escapeMarkup = this.options.get('escapeMarkup');
        var content = template(result, container);

        if (content == null) {
          container.style.display = 'none';
        } else if (typeof content === 'string') {
          container.innerHTML = escapeMarkup(content);
        } else {
          $(container).append(content);
        }
      };

      return Results;
    });
    S2.define('select2/keys', [], function () {
      var KEYS = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };
      return KEYS;
    });
    S2.define('select2/selection/base', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function BaseSelection($element, options) {
        this.$element = $element;
        this.options = options;

        BaseSelection.__super__.constructor.call(this);
      }

      Utils.Extend(BaseSelection, Utils.Observable);

      BaseSelection.prototype.render = function () {
        var $selection = $('<span class="select2-selection" role="combobox" ' + ' aria-haspopup="true" aria-expanded="false">' + '</span>');
        this._tabindex = 0;

        if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
          this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
        } else if (this.$element.attr('tabindex') != null) {
          this._tabindex = this.$element.attr('tabindex');
        }

        $selection.attr('title', this.$element.attr('title'));
        $selection.attr('tabindex', this._tabindex);
        $selection.attr('aria-disabled', 'false');
        this.$selection = $selection;
        return $selection;
      };

      BaseSelection.prototype.bind = function (container, $container) {
        var self = this;
        var resultsId = container.id + '-results';
        this.container = container;
        this.$selection.on('focus', function (evt) {
          self.trigger('focus', evt);
        });
        this.$selection.on('blur', function (evt) {
          self._handleBlur(evt);
        });
        this.$selection.on('keydown', function (evt) {
          self.trigger('keypress', evt);

          if (evt.which === KEYS.SPACE) {
            evt.preventDefault();
          }
        });
        container.on('results:focus', function (params) {
          self.$selection.attr('aria-activedescendant', params.data._resultId);
        });
        container.on('selection:update', function (params) {
          self.update(params.data);
        });
        container.on('open', function () {
          // When the dropdown is open, aria-expanded="true"
          self.$selection.attr('aria-expanded', 'true');
          self.$selection.attr('aria-owns', resultsId);

          self._attachCloseHandler(container);
        });
        container.on('close', function () {
          // When the dropdown is closed, aria-expanded="false"
          self.$selection.attr('aria-expanded', 'false');
          self.$selection.removeAttr('aria-activedescendant');
          self.$selection.removeAttr('aria-owns');
          self.$selection.trigger('focus');

          self._detachCloseHandler(container);
        });
        container.on('enable', function () {
          self.$selection.attr('tabindex', self._tabindex);
          self.$selection.attr('aria-disabled', 'false');
        });
        container.on('disable', function () {
          self.$selection.attr('tabindex', '-1');
          self.$selection.attr('aria-disabled', 'true');
        });
      };

      BaseSelection.prototype._handleBlur = function (evt) {
        var self = this; // This needs to be delayed as the active element is the body when the tab
        // key is pressed, possibly along with others.

        window.setTimeout(function () {
          // Don't trigger `blur` if the focus is still in the selection
          if (document.activeElement == self.$selection[0] || $.contains(self.$selection[0], document.activeElement)) {
            return;
          }

          self.trigger('blur', evt);
        }, 1);
      };

      BaseSelection.prototype._attachCloseHandler = function (container) {
        $(document.body).on('mousedown.select2.' + container.id, function (e) {
          var $target = $(e.target);
          var $select = $target.closest('.select2');
          var $all = $('.select2.select2-container--open');
          $all.each(function () {
            if (this == $select[0]) {
              return;
            }

            var $element = Utils.GetData(this, 'element');
            $element.select2('close');
          });
        });
      };

      BaseSelection.prototype._detachCloseHandler = function (container) {
        $(document.body).off('mousedown.select2.' + container.id);
      };

      BaseSelection.prototype.position = function ($selection, $container) {
        var $selectionContainer = $container.find('.selection');
        $selectionContainer.append($selection);
      };

      BaseSelection.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      };

      BaseSelection.prototype.update = function (data) {
        throw new Error('The `update` method must be defined in child classes.');
      };
      /**
       * Helper method to abstract the "enabled" (not "disabled") state of this
       * object.
       *
       * @return {true} if the instance is not disabled.
       * @return {false} if the instance is disabled.
       */


      BaseSelection.prototype.isEnabled = function () {
        return !this.isDisabled();
      };
      /**
       * Helper method to abstract the "disabled" state of this object.
       *
       * @return {true} if the disabled option is true.
       * @return {false} if the disabled option is false.
       */


      BaseSelection.prototype.isDisabled = function () {
        return this.options.get('disabled');
      };

      return BaseSelection;
    });
    S2.define('select2/selection/single', ['jquery', './base', '../utils', '../keys'], function ($, BaseSelection, Utils, KEYS) {
      function SingleSelection() {
        SingleSelection.__super__.constructor.apply(this, arguments);
      }

      Utils.Extend(SingleSelection, BaseSelection);

      SingleSelection.prototype.render = function () {
        var $selection = SingleSelection.__super__.render.call(this);

        $selection.addClass('select2-selection--single');
        $selection.html('<span class="select2-selection__rendered"></span>' + '<span class="select2-selection__arrow" role="presentation">' + '<b role="presentation"></b>' + '</span>');
        return $selection;
      };

      SingleSelection.prototype.bind = function (container, $container) {
        var self = this;

        SingleSelection.__super__.bind.apply(this, arguments);

        var id = container.id + '-container';
        this.$selection.find('.select2-selection__rendered').attr('id', id).attr('role', 'textbox').attr('aria-readonly', 'true');
        this.$selection.attr('aria-labelledby', id);
        this.$selection.on('mousedown', function (evt) {
          // Only respond to left clicks
          if (evt.which !== 1) {
            return;
          }

          self.trigger('toggle', {
            originalEvent: evt
          });
        });
        this.$selection.on('focus', function (evt) {// User focuses on the container
        });
        this.$selection.on('blur', function (evt) {// User exits the container
        });
        container.on('focus', function (evt) {
          if (!container.isOpen()) {
            self.$selection.trigger('focus');
          }
        });
      };

      SingleSelection.prototype.clear = function () {
        var $rendered = this.$selection.find('.select2-selection__rendered');
        $rendered.empty();
        $rendered.removeAttr('title'); // clear tooltip on empty
      };

      SingleSelection.prototype.display = function (data, container) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');
        return escapeMarkup(template(data, container));
      };

      SingleSelection.prototype.selectionContainer = function () {
        return $('<span></span>');
      };

      SingleSelection.prototype.update = function (data) {
        if (data.length === 0) {
          this.clear();
          return;
        }

        var selection = data[0];
        var $rendered = this.$selection.find('.select2-selection__rendered');
        var formatted = this.display(selection, $rendered);
        $rendered.empty().append(formatted);
        var title = selection.title || selection.text;

        if (title) {
          $rendered.attr('title', title);
        } else {
          $rendered.removeAttr('title');
        }
      };

      return SingleSelection;
    });
    S2.define('select2/selection/multiple', ['jquery', './base', '../utils'], function ($, BaseSelection, Utils) {
      function MultipleSelection($element, options) {
        MultipleSelection.__super__.constructor.apply(this, arguments);
      }

      Utils.Extend(MultipleSelection, BaseSelection);

      MultipleSelection.prototype.render = function () {
        var $selection = MultipleSelection.__super__.render.call(this);

        $selection.addClass('select2-selection--multiple');
        $selection.html('<ul class="select2-selection__rendered"></ul>');
        return $selection;
      };

      MultipleSelection.prototype.bind = function (container, $container) {
        var self = this;

        MultipleSelection.__super__.bind.apply(this, arguments);

        this.$selection.on('click', function (evt) {
          self.trigger('toggle', {
            originalEvent: evt
          });
        });
        this.$selection.on('click', '.select2-selection__choice__remove', function (evt) {
          // Ignore the event if it is disabled
          if (self.isDisabled()) {
            return;
          }

          var $remove = $(this);
          var $selection = $remove.parent();
          var data = Utils.GetData($selection[0], 'data');
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        });
      };

      MultipleSelection.prototype.clear = function () {
        var $rendered = this.$selection.find('.select2-selection__rendered');
        $rendered.empty();
        $rendered.removeAttr('title');
      };

      MultipleSelection.prototype.display = function (data, container) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');
        return escapeMarkup(template(data, container));
      };

      MultipleSelection.prototype.selectionContainer = function () {
        var $container = $('<li class="select2-selection__choice">' + '<span class="select2-selection__choice__remove" role="presentation">' + '&times;' + '</span>' + '</li>');
        return $container;
      };

      MultipleSelection.prototype.update = function (data) {
        this.clear();

        if (data.length === 0) {
          return;
        }

        var $selections = [];

        for (var d = 0; d < data.length; d++) {
          var selection = data[d];
          var $selection = this.selectionContainer();
          var formatted = this.display(selection, $selection);
          $selection.append(formatted);
          var title = selection.title || selection.text;

          if (title) {
            $selection.attr('title', title);
          }

          Utils.StoreData($selection[0], 'data', selection);
          $selections.push($selection);
        }

        var $rendered = this.$selection.find('.select2-selection__rendered');
        Utils.appendMany($rendered, $selections);
      };

      return MultipleSelection;
    });
    S2.define('select2/selection/placeholder', ['../utils'], function (Utils) {
      function Placeholder(decorated, $element, options) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
        decorated.call(this, $element, options);
      }

      Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }

        return placeholder;
      };

      Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
        var $placeholder = this.selectionContainer();
        $placeholder.html(this.display(placeholder));
        $placeholder.addClass('select2-selection__placeholder').removeClass('select2-selection__choice');
        return $placeholder;
      };

      Placeholder.prototype.update = function (decorated, data) {
        var singlePlaceholder = data.length == 1 && data[0].id != this.placeholder.id;
        var multipleSelections = data.length > 1;

        if (multipleSelections || singlePlaceholder) {
          return decorated.call(this, data);
        }

        this.clear();
        var $placeholder = this.createPlaceholder(this.placeholder);
        this.$selection.find('.select2-selection__rendered').append($placeholder);
      };

      return Placeholder;
    });
    S2.define('select2/selection/allowClear', ['jquery', '../keys', '../utils'], function ($, KEYS, Utils) {
      function AllowClear() {}

      AllowClear.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);

        if (this.placeholder == null) {
          if (this.options.get('debug') && window.console && console.error) {
            console.error('Select2: The `allowClear` option should be used in combination ' + 'with the `placeholder` option.');
          }
        }

        this.$selection.on('mousedown', '.select2-selection__clear', function (evt) {
          self._handleClear(evt);
        });
        container.on('keypress', function (evt) {
          self._handleKeyboardClear(evt, container);
        });
      };

      AllowClear.prototype._handleClear = function (_, evt) {
        // Ignore the event if it is disabled
        if (this.isDisabled()) {
          return;
        }

        var $clear = this.$selection.find('.select2-selection__clear'); // Ignore the event if nothing has been selected

        if ($clear.length === 0) {
          return;
        }

        evt.stopPropagation();
        var data = Utils.GetData($clear[0], 'data');
        var previousVal = this.$element.val();
        this.$element.val(this.placeholder.id);
        var unselectData = {
          data: data
        };
        this.trigger('clear', unselectData);

        if (unselectData.prevented) {
          this.$element.val(previousVal);
          return;
        }

        for (var d = 0; d < data.length; d++) {
          unselectData = {
            data: data[d]
          }; // Trigger the `unselect` event, so people can prevent it from being
          // cleared.

          this.trigger('unselect', unselectData); // If the event was prevented, don't clear it out.

          if (unselectData.prevented) {
            this.$element.val(previousVal);
            return;
          }
        }

        this.$element.trigger('input').trigger('change');
        this.trigger('toggle', {});
      };

      AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
        if (container.isOpen()) {
          return;
        }

        if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
          this._handleClear(evt);
        }
      };

      AllowClear.prototype.update = function (decorated, data) {
        decorated.call(this, data);

        if (this.$selection.find('.select2-selection__placeholder').length > 0 || data.length === 0) {
          return;
        }

        var removeAll = this.options.get('translations').get('removeAllItems');
        var $remove = $('<span class="select2-selection__clear" title="' + removeAll() + '">' + '&times;' + '</span>');
        Utils.StoreData($remove[0], 'data', data);
        this.$selection.find('.select2-selection__rendered').prepend($remove);
      };

      return AllowClear;
    });
    S2.define('select2/selection/search', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function Search(decorated, $element, options) {
        decorated.call(this, $element, options);
      }

      Search.prototype.render = function (decorated) {
        var $search = $('<li class="select2-search select2-search--inline">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' + '</li>');
        this.$searchContainer = $search;
        this.$search = $search.find('input');
        var $rendered = decorated.call(this);

        this._transferTabIndex();

        return $rendered;
      };

      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var resultsId = container.id + '-results';
        decorated.call(this, container, $container);
        container.on('open', function () {
          self.$search.attr('aria-controls', resultsId);
          self.$search.trigger('focus');
        });
        container.on('close', function () {
          self.$search.val('');
          self.$search.removeAttr('aria-controls');
          self.$search.removeAttr('aria-activedescendant');
          self.$search.trigger('focus');
        });
        container.on('enable', function () {
          self.$search.prop('disabled', false);

          self._transferTabIndex();
        });
        container.on('disable', function () {
          self.$search.prop('disabled', true);
        });
        container.on('focus', function (evt) {
          self.$search.trigger('focus');
        });
        container.on('results:focus', function (params) {
          if (params.data._resultId) {
            self.$search.attr('aria-activedescendant', params.data._resultId);
          } else {
            self.$search.removeAttr('aria-activedescendant');
          }
        });
        this.$selection.on('focusin', '.select2-search--inline', function (evt) {
          self.trigger('focus', evt);
        });
        this.$selection.on('focusout', '.select2-search--inline', function (evt) {
          self._handleBlur(evt);
        });
        this.$selection.on('keydown', '.select2-search--inline', function (evt) {
          evt.stopPropagation();
          self.trigger('keypress', evt);
          self._keyUpPrevented = evt.isDefaultPrevented();
          var key = evt.which;

          if (key === KEYS.BACKSPACE && self.$search.val() === '') {
            var $previousChoice = self.$searchContainer.prev('.select2-selection__choice');

            if ($previousChoice.length > 0) {
              var item = Utils.GetData($previousChoice[0], 'data');
              self.searchRemoveChoice(item);
              evt.preventDefault();
            }
          }
        });
        this.$selection.on('click', '.select2-search--inline', function (evt) {
          if (self.$search.val()) {
            evt.stopPropagation();
          }
        }); // Try to detect the IE version should the `documentMode` property that
        // is stored on the document. This is only implemented in IE and is
        // slightly cleaner than doing a user agent check.
        // This property is not available in Edge, but Edge also doesn't have
        // this bug.

        var msie = document.documentMode;
        var disableInputEvents = msie && msie <= 11; // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.

        this.$selection.on('input.searchcheck', '.select2-search--inline', function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents) {
            self.$selection.off('input.search input.searchcheck');
            return;
          } // Unbind the duplicated `keyup` event


          self.$selection.off('keyup.search');
        });
        this.$selection.on('keyup.search input.search', '.select2-search--inline', function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents && evt.type === 'input') {
            self.$selection.off('input.search input.searchcheck');
            return;
          }

          var key = evt.which; // We can freely ignore events from modifier keys

          if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
            return;
          } // Tabbing will be handled during the `keydown` phase


          if (key == KEYS.TAB) {
            return;
          }

          self.handleSearch(evt);
        });
      };
      /**
       * This method will transfer the tabindex attribute from the rendered
       * selection to the search box. This allows for the search box to be used as
       * the primary focus instead of the selection container.
       *
       * @private
       */


      Search.prototype._transferTabIndex = function (decorated) {
        this.$search.attr('tabindex', this.$selection.attr('tabindex'));
        this.$selection.attr('tabindex', '-1');
      };

      Search.prototype.createPlaceholder = function (decorated, placeholder) {
        this.$search.attr('placeholder', placeholder.text);
      };

      Search.prototype.update = function (decorated, data) {
        var searchHadFocus = this.$search[0] == document.activeElement;
        this.$search.attr('placeholder', '');
        decorated.call(this, data);
        this.$selection.find('.select2-selection__rendered').append(this.$searchContainer);
        this.resizeSearch();

        if (searchHadFocus) {
          this.$search.trigger('focus');
        }
      };

      Search.prototype.handleSearch = function () {
        this.resizeSearch();

        if (!this._keyUpPrevented) {
          var input = this.$search.val();
          this.trigger('query', {
            term: input
          });
        }

        this._keyUpPrevented = false;
      };

      Search.prototype.searchRemoveChoice = function (decorated, item) {
        this.trigger('unselect', {
          data: item
        });
        this.$search.val(item.text);
        this.handleSearch();
      };

      Search.prototype.resizeSearch = function () {
        this.$search.css('width', '25px');
        var width = '';

        if (this.$search.attr('placeholder') !== '') {
          width = this.$selection.find('.select2-selection__rendered').width();
        } else {
          var minimumWidth = this.$search.val().length + 1;
          width = minimumWidth * 0.75 + 'em';
        }

        this.$search.css('width', width);
      };

      return Search;
    });
    S2.define('select2/selection/eventRelay', ['jquery'], function ($) {
      function EventRelay() {}

      EventRelay.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var relayEvents = ['open', 'opening', 'close', 'closing', 'select', 'selecting', 'unselect', 'unselecting', 'clear', 'clearing'];
        var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting', 'clearing'];
        decorated.call(this, container, $container);
        container.on('*', function (name, params) {
          // Ignore events that should not be relayed
          if ($.inArray(name, relayEvents) === -1) {
            return;
          } // The parameters should always be an object


          params = params || {}; // Generate the jQuery event for the Select2 event

          var evt = $.Event('select2:' + name, {
            params: params
          });
          self.$element.trigger(evt); // Only handle preventable events if it was one

          if ($.inArray(name, preventableEvents) === -1) {
            return;
          }

          params.prevented = evt.isDefaultPrevented();
        });
      };

      return EventRelay;
    });
    S2.define('select2/translation', ['jquery', 'require'], function ($, require) {
      function Translation(dict) {
        this.dict = dict || {};
      }

      Translation.prototype.all = function () {
        return this.dict;
      };

      Translation.prototype.get = function (key) {
        return this.dict[key];
      };

      Translation.prototype.extend = function (translation) {
        this.dict = $.extend({}, translation.all(), this.dict);
      }; // Static functions


      Translation._cache = {};

      Translation.loadPath = function (path) {
        if (!(path in Translation._cache)) {
          var translations = require(path);

          Translation._cache[path] = translations;
        }

        return new Translation(Translation._cache[path]);
      };

      return Translation;
    });
    S2.define('select2/diacritics', [], function () {
      var diacritics = {
        "\u24B6": 'A',
        "\uFF21": 'A',
        "\xC0": 'A',
        "\xC1": 'A',
        "\xC2": 'A',
        "\u1EA6": 'A',
        "\u1EA4": 'A',
        "\u1EAA": 'A',
        "\u1EA8": 'A',
        "\xC3": 'A',
        "\u0100": 'A',
        "\u0102": 'A',
        "\u1EB0": 'A',
        "\u1EAE": 'A',
        "\u1EB4": 'A',
        "\u1EB2": 'A',
        "\u0226": 'A',
        "\u01E0": 'A',
        "\xC4": 'A',
        "\u01DE": 'A',
        "\u1EA2": 'A',
        "\xC5": 'A',
        "\u01FA": 'A',
        "\u01CD": 'A',
        "\u0200": 'A',
        "\u0202": 'A',
        "\u1EA0": 'A',
        "\u1EAC": 'A',
        "\u1EB6": 'A',
        "\u1E00": 'A',
        "\u0104": 'A',
        "\u023A": 'A',
        "\u2C6F": 'A',
        "\uA732": 'AA',
        "\xC6": 'AE',
        "\u01FC": 'AE',
        "\u01E2": 'AE',
        "\uA734": 'AO',
        "\uA736": 'AU',
        "\uA738": 'AV',
        "\uA73A": 'AV',
        "\uA73C": 'AY',
        "\u24B7": 'B',
        "\uFF22": 'B',
        "\u1E02": 'B',
        "\u1E04": 'B',
        "\u1E06": 'B',
        "\u0243": 'B',
        "\u0182": 'B',
        "\u0181": 'B',
        "\u24B8": 'C',
        "\uFF23": 'C',
        "\u0106": 'C',
        "\u0108": 'C',
        "\u010A": 'C',
        "\u010C": 'C',
        "\xC7": 'C',
        "\u1E08": 'C',
        "\u0187": 'C',
        "\u023B": 'C',
        "\uA73E": 'C',
        "\u24B9": 'D',
        "\uFF24": 'D',
        "\u1E0A": 'D',
        "\u010E": 'D',
        "\u1E0C": 'D',
        "\u1E10": 'D',
        "\u1E12": 'D',
        "\u1E0E": 'D',
        "\u0110": 'D',
        "\u018B": 'D',
        "\u018A": 'D',
        "\u0189": 'D',
        "\uA779": 'D',
        "\u01F1": 'DZ',
        "\u01C4": 'DZ',
        "\u01F2": 'Dz',
        "\u01C5": 'Dz',
        "\u24BA": 'E',
        "\uFF25": 'E',
        "\xC8": 'E',
        "\xC9": 'E',
        "\xCA": 'E',
        "\u1EC0": 'E',
        "\u1EBE": 'E',
        "\u1EC4": 'E',
        "\u1EC2": 'E',
        "\u1EBC": 'E',
        "\u0112": 'E',
        "\u1E14": 'E',
        "\u1E16": 'E',
        "\u0114": 'E',
        "\u0116": 'E',
        "\xCB": 'E',
        "\u1EBA": 'E',
        "\u011A": 'E',
        "\u0204": 'E',
        "\u0206": 'E',
        "\u1EB8": 'E',
        "\u1EC6": 'E',
        "\u0228": 'E',
        "\u1E1C": 'E',
        "\u0118": 'E',
        "\u1E18": 'E',
        "\u1E1A": 'E',
        "\u0190": 'E',
        "\u018E": 'E',
        "\u24BB": 'F',
        "\uFF26": 'F',
        "\u1E1E": 'F',
        "\u0191": 'F',
        "\uA77B": 'F',
        "\u24BC": 'G',
        "\uFF27": 'G',
        "\u01F4": 'G',
        "\u011C": 'G',
        "\u1E20": 'G',
        "\u011E": 'G',
        "\u0120": 'G',
        "\u01E6": 'G',
        "\u0122": 'G',
        "\u01E4": 'G',
        "\u0193": 'G',
        "\uA7A0": 'G',
        "\uA77D": 'G',
        "\uA77E": 'G',
        "\u24BD": 'H',
        "\uFF28": 'H',
        "\u0124": 'H',
        "\u1E22": 'H',
        "\u1E26": 'H',
        "\u021E": 'H',
        "\u1E24": 'H',
        "\u1E28": 'H',
        "\u1E2A": 'H',
        "\u0126": 'H',
        "\u2C67": 'H',
        "\u2C75": 'H',
        "\uA78D": 'H',
        "\u24BE": 'I',
        "\uFF29": 'I',
        "\xCC": 'I',
        "\xCD": 'I',
        "\xCE": 'I',
        "\u0128": 'I',
        "\u012A": 'I',
        "\u012C": 'I',
        "\u0130": 'I',
        "\xCF": 'I',
        "\u1E2E": 'I',
        "\u1EC8": 'I',
        "\u01CF": 'I',
        "\u0208": 'I',
        "\u020A": 'I',
        "\u1ECA": 'I',
        "\u012E": 'I',
        "\u1E2C": 'I',
        "\u0197": 'I',
        "\u24BF": 'J',
        "\uFF2A": 'J',
        "\u0134": 'J',
        "\u0248": 'J',
        "\u24C0": 'K',
        "\uFF2B": 'K',
        "\u1E30": 'K',
        "\u01E8": 'K',
        "\u1E32": 'K',
        "\u0136": 'K',
        "\u1E34": 'K',
        "\u0198": 'K',
        "\u2C69": 'K',
        "\uA740": 'K',
        "\uA742": 'K',
        "\uA744": 'K',
        "\uA7A2": 'K',
        "\u24C1": 'L',
        "\uFF2C": 'L',
        "\u013F": 'L',
        "\u0139": 'L',
        "\u013D": 'L',
        "\u1E36": 'L',
        "\u1E38": 'L',
        "\u013B": 'L',
        "\u1E3C": 'L',
        "\u1E3A": 'L',
        "\u0141": 'L',
        "\u023D": 'L',
        "\u2C62": 'L',
        "\u2C60": 'L',
        "\uA748": 'L',
        "\uA746": 'L',
        "\uA780": 'L',
        "\u01C7": 'LJ',
        "\u01C8": 'Lj',
        "\u24C2": 'M',
        "\uFF2D": 'M',
        "\u1E3E": 'M',
        "\u1E40": 'M',
        "\u1E42": 'M',
        "\u2C6E": 'M',
        "\u019C": 'M',
        "\u24C3": 'N',
        "\uFF2E": 'N',
        "\u01F8": 'N',
        "\u0143": 'N',
        "\xD1": 'N',
        "\u1E44": 'N',
        "\u0147": 'N',
        "\u1E46": 'N',
        "\u0145": 'N',
        "\u1E4A": 'N',
        "\u1E48": 'N',
        "\u0220": 'N',
        "\u019D": 'N',
        "\uA790": 'N',
        "\uA7A4": 'N',
        "\u01CA": 'NJ',
        "\u01CB": 'Nj',
        "\u24C4": 'O',
        "\uFF2F": 'O',
        "\xD2": 'O',
        "\xD3": 'O',
        "\xD4": 'O',
        "\u1ED2": 'O',
        "\u1ED0": 'O',
        "\u1ED6": 'O',
        "\u1ED4": 'O',
        "\xD5": 'O',
        "\u1E4C": 'O',
        "\u022C": 'O',
        "\u1E4E": 'O',
        "\u014C": 'O',
        "\u1E50": 'O',
        "\u1E52": 'O',
        "\u014E": 'O',
        "\u022E": 'O',
        "\u0230": 'O',
        "\xD6": 'O',
        "\u022A": 'O',
        "\u1ECE": 'O',
        "\u0150": 'O',
        "\u01D1": 'O',
        "\u020C": 'O',
        "\u020E": 'O',
        "\u01A0": 'O',
        "\u1EDC": 'O',
        "\u1EDA": 'O',
        "\u1EE0": 'O',
        "\u1EDE": 'O',
        "\u1EE2": 'O',
        "\u1ECC": 'O',
        "\u1ED8": 'O',
        "\u01EA": 'O',
        "\u01EC": 'O',
        "\xD8": 'O',
        "\u01FE": 'O',
        "\u0186": 'O',
        "\u019F": 'O',
        "\uA74A": 'O',
        "\uA74C": 'O',
        "\u0152": 'OE',
        "\u01A2": 'OI',
        "\uA74E": 'OO',
        "\u0222": 'OU',
        "\u24C5": 'P',
        "\uFF30": 'P',
        "\u1E54": 'P',
        "\u1E56": 'P',
        "\u01A4": 'P',
        "\u2C63": 'P',
        "\uA750": 'P',
        "\uA752": 'P',
        "\uA754": 'P',
        "\u24C6": 'Q',
        "\uFF31": 'Q',
        "\uA756": 'Q',
        "\uA758": 'Q',
        "\u024A": 'Q',
        "\u24C7": 'R',
        "\uFF32": 'R',
        "\u0154": 'R',
        "\u1E58": 'R',
        "\u0158": 'R',
        "\u0210": 'R',
        "\u0212": 'R',
        "\u1E5A": 'R',
        "\u1E5C": 'R',
        "\u0156": 'R',
        "\u1E5E": 'R',
        "\u024C": 'R',
        "\u2C64": 'R',
        "\uA75A": 'R',
        "\uA7A6": 'R',
        "\uA782": 'R',
        "\u24C8": 'S',
        "\uFF33": 'S',
        "\u1E9E": 'S',
        "\u015A": 'S',
        "\u1E64": 'S',
        "\u015C": 'S',
        "\u1E60": 'S',
        "\u0160": 'S',
        "\u1E66": 'S',
        "\u1E62": 'S',
        "\u1E68": 'S',
        "\u0218": 'S',
        "\u015E": 'S',
        "\u2C7E": 'S',
        "\uA7A8": 'S',
        "\uA784": 'S',
        "\u24C9": 'T',
        "\uFF34": 'T',
        "\u1E6A": 'T',
        "\u0164": 'T',
        "\u1E6C": 'T',
        "\u021A": 'T',
        "\u0162": 'T',
        "\u1E70": 'T',
        "\u1E6E": 'T',
        "\u0166": 'T',
        "\u01AC": 'T',
        "\u01AE": 'T',
        "\u023E": 'T',
        "\uA786": 'T',
        "\uA728": 'TZ',
        "\u24CA": 'U',
        "\uFF35": 'U',
        "\xD9": 'U',
        "\xDA": 'U',
        "\xDB": 'U',
        "\u0168": 'U',
        "\u1E78": 'U',
        "\u016A": 'U',
        "\u1E7A": 'U',
        "\u016C": 'U',
        "\xDC": 'U',
        "\u01DB": 'U',
        "\u01D7": 'U',
        "\u01D5": 'U',
        "\u01D9": 'U',
        "\u1EE6": 'U',
        "\u016E": 'U',
        "\u0170": 'U',
        "\u01D3": 'U',
        "\u0214": 'U',
        "\u0216": 'U',
        "\u01AF": 'U',
        "\u1EEA": 'U',
        "\u1EE8": 'U',
        "\u1EEE": 'U',
        "\u1EEC": 'U',
        "\u1EF0": 'U',
        "\u1EE4": 'U',
        "\u1E72": 'U',
        "\u0172": 'U',
        "\u1E76": 'U',
        "\u1E74": 'U',
        "\u0244": 'U',
        "\u24CB": 'V',
        "\uFF36": 'V',
        "\u1E7C": 'V',
        "\u1E7E": 'V',
        "\u01B2": 'V',
        "\uA75E": 'V',
        "\u0245": 'V',
        "\uA760": 'VY',
        "\u24CC": 'W',
        "\uFF37": 'W',
        "\u1E80": 'W',
        "\u1E82": 'W',
        "\u0174": 'W',
        "\u1E86": 'W',
        "\u1E84": 'W',
        "\u1E88": 'W',
        "\u2C72": 'W',
        "\u24CD": 'X',
        "\uFF38": 'X',
        "\u1E8A": 'X',
        "\u1E8C": 'X',
        "\u24CE": 'Y',
        "\uFF39": 'Y',
        "\u1EF2": 'Y',
        "\xDD": 'Y',
        "\u0176": 'Y',
        "\u1EF8": 'Y',
        "\u0232": 'Y',
        "\u1E8E": 'Y',
        "\u0178": 'Y',
        "\u1EF6": 'Y',
        "\u1EF4": 'Y',
        "\u01B3": 'Y',
        "\u024E": 'Y',
        "\u1EFE": 'Y',
        "\u24CF": 'Z',
        "\uFF3A": 'Z',
        "\u0179": 'Z',
        "\u1E90": 'Z',
        "\u017B": 'Z',
        "\u017D": 'Z',
        "\u1E92": 'Z',
        "\u1E94": 'Z',
        "\u01B5": 'Z',
        "\u0224": 'Z',
        "\u2C7F": 'Z',
        "\u2C6B": 'Z',
        "\uA762": 'Z',
        "\u24D0": 'a',
        "\uFF41": 'a',
        "\u1E9A": 'a',
        "\xE0": 'a',
        "\xE1": 'a',
        "\xE2": 'a',
        "\u1EA7": 'a',
        "\u1EA5": 'a',
        "\u1EAB": 'a',
        "\u1EA9": 'a',
        "\xE3": 'a',
        "\u0101": 'a',
        "\u0103": 'a',
        "\u1EB1": 'a',
        "\u1EAF": 'a',
        "\u1EB5": 'a',
        "\u1EB3": 'a',
        "\u0227": 'a',
        "\u01E1": 'a',
        "\xE4": 'a',
        "\u01DF": 'a',
        "\u1EA3": 'a',
        "\xE5": 'a',
        "\u01FB": 'a',
        "\u01CE": 'a',
        "\u0201": 'a',
        "\u0203": 'a',
        "\u1EA1": 'a',
        "\u1EAD": 'a',
        "\u1EB7": 'a',
        "\u1E01": 'a',
        "\u0105": 'a',
        "\u2C65": 'a',
        "\u0250": 'a',
        "\uA733": 'aa',
        "\xE6": 'ae',
        "\u01FD": 'ae',
        "\u01E3": 'ae',
        "\uA735": 'ao',
        "\uA737": 'au',
        "\uA739": 'av',
        "\uA73B": 'av',
        "\uA73D": 'ay',
        "\u24D1": 'b',
        "\uFF42": 'b',
        "\u1E03": 'b',
        "\u1E05": 'b',
        "\u1E07": 'b',
        "\u0180": 'b',
        "\u0183": 'b',
        "\u0253": 'b',
        "\u24D2": 'c',
        "\uFF43": 'c',
        "\u0107": 'c',
        "\u0109": 'c',
        "\u010B": 'c',
        "\u010D": 'c',
        "\xE7": 'c',
        "\u1E09": 'c',
        "\u0188": 'c',
        "\u023C": 'c',
        "\uA73F": 'c',
        "\u2184": 'c',
        "\u24D3": 'd',
        "\uFF44": 'd',
        "\u1E0B": 'd',
        "\u010F": 'd',
        "\u1E0D": 'd',
        "\u1E11": 'd',
        "\u1E13": 'd',
        "\u1E0F": 'd',
        "\u0111": 'd',
        "\u018C": 'd',
        "\u0256": 'd',
        "\u0257": 'd',
        "\uA77A": 'd',
        "\u01F3": 'dz',
        "\u01C6": 'dz',
        "\u24D4": 'e',
        "\uFF45": 'e',
        "\xE8": 'e',
        "\xE9": 'e',
        "\xEA": 'e',
        "\u1EC1": 'e',
        "\u1EBF": 'e',
        "\u1EC5": 'e',
        "\u1EC3": 'e',
        "\u1EBD": 'e',
        "\u0113": 'e',
        "\u1E15": 'e',
        "\u1E17": 'e',
        "\u0115": 'e',
        "\u0117": 'e',
        "\xEB": 'e',
        "\u1EBB": 'e',
        "\u011B": 'e',
        "\u0205": 'e',
        "\u0207": 'e',
        "\u1EB9": 'e',
        "\u1EC7": 'e',
        "\u0229": 'e',
        "\u1E1D": 'e',
        "\u0119": 'e',
        "\u1E19": 'e',
        "\u1E1B": 'e',
        "\u0247": 'e',
        "\u025B": 'e',
        "\u01DD": 'e',
        "\u24D5": 'f',
        "\uFF46": 'f',
        "\u1E1F": 'f',
        "\u0192": 'f',
        "\uA77C": 'f',
        "\u24D6": 'g',
        "\uFF47": 'g',
        "\u01F5": 'g',
        "\u011D": 'g',
        "\u1E21": 'g',
        "\u011F": 'g',
        "\u0121": 'g',
        "\u01E7": 'g',
        "\u0123": 'g',
        "\u01E5": 'g',
        "\u0260": 'g',
        "\uA7A1": 'g',
        "\u1D79": 'g',
        "\uA77F": 'g',
        "\u24D7": 'h',
        "\uFF48": 'h',
        "\u0125": 'h',
        "\u1E23": 'h',
        "\u1E27": 'h',
        "\u021F": 'h',
        "\u1E25": 'h',
        "\u1E29": 'h',
        "\u1E2B": 'h',
        "\u1E96": 'h',
        "\u0127": 'h',
        "\u2C68": 'h',
        "\u2C76": 'h',
        "\u0265": 'h',
        "\u0195": 'hv',
        "\u24D8": 'i',
        "\uFF49": 'i',
        "\xEC": 'i',
        "\xED": 'i',
        "\xEE": 'i',
        "\u0129": 'i',
        "\u012B": 'i',
        "\u012D": 'i',
        "\xEF": 'i',
        "\u1E2F": 'i',
        "\u1EC9": 'i',
        "\u01D0": 'i',
        "\u0209": 'i',
        "\u020B": 'i',
        "\u1ECB": 'i',
        "\u012F": 'i',
        "\u1E2D": 'i',
        "\u0268": 'i',
        "\u0131": 'i',
        "\u24D9": 'j',
        "\uFF4A": 'j',
        "\u0135": 'j',
        "\u01F0": 'j',
        "\u0249": 'j',
        "\u24DA": 'k',
        "\uFF4B": 'k',
        "\u1E31": 'k',
        "\u01E9": 'k',
        "\u1E33": 'k',
        "\u0137": 'k',
        "\u1E35": 'k',
        "\u0199": 'k',
        "\u2C6A": 'k',
        "\uA741": 'k',
        "\uA743": 'k',
        "\uA745": 'k',
        "\uA7A3": 'k',
        "\u24DB": 'l',
        "\uFF4C": 'l',
        "\u0140": 'l',
        "\u013A": 'l',
        "\u013E": 'l',
        "\u1E37": 'l',
        "\u1E39": 'l',
        "\u013C": 'l',
        "\u1E3D": 'l',
        "\u1E3B": 'l',
        "\u017F": 'l',
        "\u0142": 'l',
        "\u019A": 'l',
        "\u026B": 'l',
        "\u2C61": 'l',
        "\uA749": 'l',
        "\uA781": 'l',
        "\uA747": 'l',
        "\u01C9": 'lj',
        "\u24DC": 'm',
        "\uFF4D": 'm',
        "\u1E3F": 'm',
        "\u1E41": 'm',
        "\u1E43": 'm',
        "\u0271": 'm',
        "\u026F": 'm',
        "\u24DD": 'n',
        "\uFF4E": 'n',
        "\u01F9": 'n',
        "\u0144": 'n',
        "\xF1": 'n',
        "\u1E45": 'n',
        "\u0148": 'n',
        "\u1E47": 'n',
        "\u0146": 'n',
        "\u1E4B": 'n',
        "\u1E49": 'n',
        "\u019E": 'n',
        "\u0272": 'n',
        "\u0149": 'n',
        "\uA791": 'n',
        "\uA7A5": 'n',
        "\u01CC": 'nj',
        "\u24DE": 'o',
        "\uFF4F": 'o',
        "\xF2": 'o',
        "\xF3": 'o',
        "\xF4": 'o',
        "\u1ED3": 'o',
        "\u1ED1": 'o',
        "\u1ED7": 'o',
        "\u1ED5": 'o',
        "\xF5": 'o',
        "\u1E4D": 'o',
        "\u022D": 'o',
        "\u1E4F": 'o',
        "\u014D": 'o',
        "\u1E51": 'o',
        "\u1E53": 'o',
        "\u014F": 'o',
        "\u022F": 'o',
        "\u0231": 'o',
        "\xF6": 'o',
        "\u022B": 'o',
        "\u1ECF": 'o',
        "\u0151": 'o',
        "\u01D2": 'o',
        "\u020D": 'o',
        "\u020F": 'o',
        "\u01A1": 'o',
        "\u1EDD": 'o',
        "\u1EDB": 'o',
        "\u1EE1": 'o',
        "\u1EDF": 'o',
        "\u1EE3": 'o',
        "\u1ECD": 'o',
        "\u1ED9": 'o',
        "\u01EB": 'o',
        "\u01ED": 'o',
        "\xF8": 'o',
        "\u01FF": 'o',
        "\u0254": 'o',
        "\uA74B": 'o',
        "\uA74D": 'o',
        "\u0275": 'o',
        "\u0153": 'oe',
        "\u01A3": 'oi',
        "\u0223": 'ou',
        "\uA74F": 'oo',
        "\u24DF": 'p',
        "\uFF50": 'p',
        "\u1E55": 'p',
        "\u1E57": 'p',
        "\u01A5": 'p',
        "\u1D7D": 'p',
        "\uA751": 'p',
        "\uA753": 'p',
        "\uA755": 'p',
        "\u24E0": 'q',
        "\uFF51": 'q',
        "\u024B": 'q',
        "\uA757": 'q',
        "\uA759": 'q',
        "\u24E1": 'r',
        "\uFF52": 'r',
        "\u0155": 'r',
        "\u1E59": 'r',
        "\u0159": 'r',
        "\u0211": 'r',
        "\u0213": 'r',
        "\u1E5B": 'r',
        "\u1E5D": 'r',
        "\u0157": 'r',
        "\u1E5F": 'r',
        "\u024D": 'r',
        "\u027D": 'r',
        "\uA75B": 'r',
        "\uA7A7": 'r',
        "\uA783": 'r',
        "\u24E2": 's',
        "\uFF53": 's',
        "\xDF": 's',
        "\u015B": 's',
        "\u1E65": 's',
        "\u015D": 's',
        "\u1E61": 's',
        "\u0161": 's',
        "\u1E67": 's',
        "\u1E63": 's',
        "\u1E69": 's',
        "\u0219": 's',
        "\u015F": 's',
        "\u023F": 's',
        "\uA7A9": 's',
        "\uA785": 's',
        "\u1E9B": 's',
        "\u24E3": 't',
        "\uFF54": 't',
        "\u1E6B": 't',
        "\u1E97": 't',
        "\u0165": 't',
        "\u1E6D": 't',
        "\u021B": 't',
        "\u0163": 't',
        "\u1E71": 't',
        "\u1E6F": 't',
        "\u0167": 't',
        "\u01AD": 't',
        "\u0288": 't',
        "\u2C66": 't',
        "\uA787": 't',
        "\uA729": 'tz',
        "\u24E4": 'u',
        "\uFF55": 'u',
        "\xF9": 'u',
        "\xFA": 'u',
        "\xFB": 'u',
        "\u0169": 'u',
        "\u1E79": 'u',
        "\u016B": 'u',
        "\u1E7B": 'u',
        "\u016D": 'u',
        "\xFC": 'u',
        "\u01DC": 'u',
        "\u01D8": 'u',
        "\u01D6": 'u',
        "\u01DA": 'u',
        "\u1EE7": 'u',
        "\u016F": 'u',
        "\u0171": 'u',
        "\u01D4": 'u',
        "\u0215": 'u',
        "\u0217": 'u',
        "\u01B0": 'u',
        "\u1EEB": 'u',
        "\u1EE9": 'u',
        "\u1EEF": 'u',
        "\u1EED": 'u',
        "\u1EF1": 'u',
        "\u1EE5": 'u',
        "\u1E73": 'u',
        "\u0173": 'u',
        "\u1E77": 'u',
        "\u1E75": 'u',
        "\u0289": 'u',
        "\u24E5": 'v',
        "\uFF56": 'v',
        "\u1E7D": 'v',
        "\u1E7F": 'v',
        "\u028B": 'v',
        "\uA75F": 'v',
        "\u028C": 'v',
        "\uA761": 'vy',
        "\u24E6": 'w',
        "\uFF57": 'w',
        "\u1E81": 'w',
        "\u1E83": 'w',
        "\u0175": 'w',
        "\u1E87": 'w',
        "\u1E85": 'w',
        "\u1E98": 'w',
        "\u1E89": 'w',
        "\u2C73": 'w',
        "\u24E7": 'x',
        "\uFF58": 'x',
        "\u1E8B": 'x',
        "\u1E8D": 'x',
        "\u24E8": 'y',
        "\uFF59": 'y',
        "\u1EF3": 'y',
        "\xFD": 'y',
        "\u0177": 'y',
        "\u1EF9": 'y',
        "\u0233": 'y',
        "\u1E8F": 'y',
        "\xFF": 'y',
        "\u1EF7": 'y',
        "\u1E99": 'y',
        "\u1EF5": 'y',
        "\u01B4": 'y',
        "\u024F": 'y',
        "\u1EFF": 'y',
        "\u24E9": 'z',
        "\uFF5A": 'z',
        "\u017A": 'z',
        "\u1E91": 'z',
        "\u017C": 'z',
        "\u017E": 'z',
        "\u1E93": 'z',
        "\u1E95": 'z',
        "\u01B6": 'z',
        "\u0225": 'z',
        "\u0240": 'z',
        "\u2C6C": 'z',
        "\uA763": 'z',
        "\u0386": "\u0391",
        "\u0388": "\u0395",
        "\u0389": "\u0397",
        "\u038A": "\u0399",
        "\u03AA": "\u0399",
        "\u038C": "\u039F",
        "\u038E": "\u03A5",
        "\u03AB": "\u03A5",
        "\u038F": "\u03A9",
        "\u03AC": "\u03B1",
        "\u03AD": "\u03B5",
        "\u03AE": "\u03B7",
        "\u03AF": "\u03B9",
        "\u03CA": "\u03B9",
        "\u0390": "\u03B9",
        "\u03CC": "\u03BF",
        "\u03CD": "\u03C5",
        "\u03CB": "\u03C5",
        "\u03B0": "\u03C5",
        "\u03CE": "\u03C9",
        "\u03C2": "\u03C3",
        "\u2019": '\''
      };
      return diacritics;
    });
    S2.define('select2/data/base', ['../utils'], function (Utils) {
      function BaseAdapter($element, options) {
        BaseAdapter.__super__.constructor.call(this);
      }

      Utils.Extend(BaseAdapter, Utils.Observable);

      BaseAdapter.prototype.current = function (callback) {
        throw new Error('The `current` method must be defined in child classes.');
      };

      BaseAdapter.prototype.query = function (params, callback) {
        throw new Error('The `query` method must be defined in child classes.');
      };

      BaseAdapter.prototype.bind = function (container, $container) {// Can be implemented in subclasses
      };

      BaseAdapter.prototype.destroy = function () {// Can be implemented in subclasses
      };

      BaseAdapter.prototype.generateResultId = function (container, data) {
        var id = container.id + '-result-';
        id += Utils.generateChars(4);

        if (data.id != null) {
          id += '-' + data.id.toString();
        } else {
          id += '-' + Utils.generateChars(4);
        }

        return id;
      };

      return BaseAdapter;
    });
    S2.define('select2/data/select', ['./base', '../utils', 'jquery'], function (BaseAdapter, Utils, $) {
      function SelectAdapter($element, options) {
        this.$element = $element;
        this.options = options;

        SelectAdapter.__super__.constructor.call(this);
      }

      Utils.Extend(SelectAdapter, BaseAdapter);

      SelectAdapter.prototype.current = function (callback) {
        var data = [];
        var self = this;
        this.$element.find(':selected').each(function () {
          var $option = $(this);
          var option = self.item($option);
          data.push(option);
        });
        callback(data);
      };

      SelectAdapter.prototype.select = function (data) {
        var self = this;
        data.selected = true; // If data.element is a DOM node, use it instead

        if ($(data.element).is('option')) {
          data.element.selected = true;
          this.$element.trigger('input').trigger('change');
          return;
        }

        if (this.$element.prop('multiple')) {
          this.current(function (currentData) {
            var val = [];
            data = [data];
            data.push.apply(data, currentData);

            for (var d = 0; d < data.length; d++) {
              var id = data[d].id;

              if ($.inArray(id, val) === -1) {
                val.push(id);
              }
            }

            self.$element.val(val);
            self.$element.trigger('input').trigger('change');
          });
        } else {
          var val = data.id;
          this.$element.val(val);
          this.$element.trigger('input').trigger('change');
        }
      };

      SelectAdapter.prototype.unselect = function (data) {
        var self = this;

        if (!this.$element.prop('multiple')) {
          return;
        }

        data.selected = false;

        if ($(data.element).is('option')) {
          data.element.selected = false;
          this.$element.trigger('input').trigger('change');
          return;
        }

        this.current(function (currentData) {
          var val = [];

          for (var d = 0; d < currentData.length; d++) {
            var id = currentData[d].id;

            if (id !== data.id && $.inArray(id, val) === -1) {
              val.push(id);
            }
          }

          self.$element.val(val);
          self.$element.trigger('input').trigger('change');
        });
      };

      SelectAdapter.prototype.bind = function (container, $container) {
        var self = this;
        this.container = container;
        container.on('select', function (params) {
          self.select(params.data);
        });
        container.on('unselect', function (params) {
          self.unselect(params.data);
        });
      };

      SelectAdapter.prototype.destroy = function () {
        // Remove anything added to child elements
        this.$element.find('*').each(function () {
          // Remove any custom data set by Select2
          Utils.RemoveData(this);
        });
      };

      SelectAdapter.prototype.query = function (params, callback) {
        var data = [];
        var self = this;
        var $options = this.$element.children();
        $options.each(function () {
          var $option = $(this);

          if (!$option.is('option') && !$option.is('optgroup')) {
            return;
          }

          var option = self.item($option);
          var matches = self.matches(params, option);

          if (matches !== null) {
            data.push(matches);
          }
        });
        callback({
          results: data
        });
      };

      SelectAdapter.prototype.addOptions = function ($options) {
        Utils.appendMany(this.$element, $options);
      };

      SelectAdapter.prototype.option = function (data) {
        var option;

        if (data.children) {
          option = document.createElement('optgroup');
          option.label = data.text;
        } else {
          option = document.createElement('option');

          if (option.textContent !== undefined) {
            option.textContent = data.text;
          } else {
            option.innerText = data.text;
          }
        }

        if (data.id !== undefined) {
          option.value = data.id;
        }

        if (data.disabled) {
          option.disabled = true;
        }

        if (data.selected) {
          option.selected = true;
        }

        if (data.title) {
          option.title = data.title;
        }

        var $option = $(option);

        var normalizedData = this._normalizeItem(data);

        normalizedData.element = option; // Override the option's data with the combined data

        Utils.StoreData(option, 'data', normalizedData);
        return $option;
      };

      SelectAdapter.prototype.item = function ($option) {
        var data = {};
        data = Utils.GetData($option[0], 'data');

        if (data != null) {
          return data;
        }

        if ($option.is('option')) {
          data = {
            id: $option.val(),
            text: $option.text(),
            disabled: $option.prop('disabled'),
            selected: $option.prop('selected'),
            title: $option.prop('title')
          };
        } else if ($option.is('optgroup')) {
          data = {
            text: $option.prop('label'),
            children: [],
            title: $option.prop('title')
          };
          var $children = $option.children('option');
          var children = [];

          for (var c = 0; c < $children.length; c++) {
            var $child = $($children[c]);
            var child = this.item($child);
            children.push(child);
          }

          data.children = children;
        }

        data = this._normalizeItem(data);
        data.element = $option[0];
        Utils.StoreData($option[0], 'data', data);
        return data;
      };

      SelectAdapter.prototype._normalizeItem = function (item) {
        if (item !== Object(item)) {
          item = {
            id: item,
            text: item
          };
        }

        item = $.extend({}, {
          text: ''
        }, item);
        var defaults = {
          selected: false,
          disabled: false
        };

        if (item.id != null) {
          item.id = item.id.toString();
        }

        if (item.text != null) {
          item.text = item.text.toString();
        }

        if (item._resultId == null && item.id && this.container != null) {
          item._resultId = this.generateResultId(this.container, item);
        }

        return $.extend({}, defaults, item);
      };

      SelectAdapter.prototype.matches = function (params, data) {
        var matcher = this.options.get('matcher');
        return matcher(params, data);
      };

      return SelectAdapter;
    });
    S2.define('select2/data/array', ['./select', '../utils', 'jquery'], function (SelectAdapter, Utils, $) {
      function ArrayAdapter($element, options) {
        this._dataToConvert = options.get('data') || [];

        ArrayAdapter.__super__.constructor.call(this, $element, options);
      }

      Utils.Extend(ArrayAdapter, SelectAdapter);

      ArrayAdapter.prototype.bind = function (container, $container) {
        ArrayAdapter.__super__.bind.call(this, container, $container);

        this.addOptions(this.convertToOptions(this._dataToConvert));
      };

      ArrayAdapter.prototype.select = function (data) {
        var $option = this.$element.find('option').filter(function (i, elm) {
          return elm.value == data.id.toString();
        });

        if ($option.length === 0) {
          $option = this.option(data);
          this.addOptions($option);
        }

        ArrayAdapter.__super__.select.call(this, data);
      };

      ArrayAdapter.prototype.convertToOptions = function (data) {
        var self = this;
        var $existing = this.$element.find('option');
        var existingIds = $existing.map(function () {
          return self.item($(this)).id;
        }).get();
        var $options = []; // Filter out all items except for the one passed in the argument

        function onlyItem(item) {
          return function () {
            return $(this).val() == item.id;
          };
        }

        for (var d = 0; d < data.length; d++) {
          var item = this._normalizeItem(data[d]); // Skip items which were pre-loaded, only merge the data


          if ($.inArray(item.id, existingIds) >= 0) {
            var $existingOption = $existing.filter(onlyItem(item));
            var existingData = this.item($existingOption);
            var newData = $.extend(true, {}, item, existingData);
            var $newOption = this.option(newData);
            $existingOption.replaceWith($newOption);
            continue;
          }

          var $option = this.option(item);

          if (item.children) {
            var $children = this.convertToOptions(item.children);
            Utils.appendMany($option, $children);
          }

          $options.push($option);
        }

        return $options;
      };

      return ArrayAdapter;
    });
    S2.define('select2/data/ajax', ['./array', '../utils', 'jquery'], function (ArrayAdapter, Utils, $) {
      function AjaxAdapter($element, options) {
        this.ajaxOptions = this._applyDefaults(options.get('ajax'));

        if (this.ajaxOptions.processResults != null) {
          this.processResults = this.ajaxOptions.processResults;
        }

        AjaxAdapter.__super__.constructor.call(this, $element, options);
      }

      Utils.Extend(AjaxAdapter, ArrayAdapter);

      AjaxAdapter.prototype._applyDefaults = function (options) {
        var defaults = {
          data: function data(params) {
            return $.extend({}, params, {
              q: params.term
            });
          },
          transport: function transport(params, success, failure) {
            var $request = $.ajax(params);
            $request.then(success);
            $request.fail(failure);
            return $request;
          }
        };
        return $.extend({}, defaults, options, true);
      };

      AjaxAdapter.prototype.processResults = function (results) {
        return results;
      };

      AjaxAdapter.prototype.query = function (params, callback) {
        var matches = [];
        var self = this;

        if (this._request != null) {
          // JSONP requests cannot always be aborted
          if ($.isFunction(this._request.abort)) {
            this._request.abort();
          }

          this._request = null;
        }

        var options = $.extend({
          type: 'GET'
        }, this.ajaxOptions);

        if (typeof options.url === 'function') {
          options.url = options.url.call(this.$element, params);
        }

        if (typeof options.data === 'function') {
          options.data = options.data.call(this.$element, params);
        }

        function request() {
          var $request = options.transport(options, function (data) {
            var results = self.processResults(data, params);

            if (self.options.get('debug') && window.console && console.error) {
              // Check to make sure that the response included a `results` key.
              if (!results || !results.results || !$.isArray(results.results)) {
                console.error('Select2: The AJAX results did not return an array in the ' + '`results` key of the response.');
              }
            }

            callback(results);
          }, function () {
            // Attempt to detect if a request was aborted
            // Only works if the transport exposes a status property
            if ('status' in $request && ($request.status === 0 || $request.status === '0')) {
              return;
            }

            self.trigger('results:message', {
              message: 'errorLoading'
            });
          });
          self._request = $request;
        }

        if (this.ajaxOptions.delay && params.term != null) {
          if (this._queryTimeout) {
            window.clearTimeout(this._queryTimeout);
          }

          this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
        } else {
          request();
        }
      };

      return AjaxAdapter;
    });
    S2.define('select2/data/tags', ['jquery'], function ($) {
      function Tags(decorated, $element, options) {
        var tags = options.get('tags');
        var createTag = options.get('createTag');

        if (createTag !== undefined) {
          this.createTag = createTag;
        }

        var insertTag = options.get('insertTag');

        if (insertTag !== undefined) {
          this.insertTag = insertTag;
        }

        decorated.call(this, $element, options);

        if ($.isArray(tags)) {
          for (var t = 0; t < tags.length; t++) {
            var tag = tags[t];

            var item = this._normalizeItem(tag);

            var $option = this.option(item);
            this.$element.append($option);
          }
        }
      }

      Tags.prototype.query = function (decorated, params, callback) {
        var self = this;

        this._removeOldTags();

        if (params.term == null || params.page != null) {
          decorated.call(this, params, callback);
          return;
        }

        function wrapper(obj, child) {
          var data = obj.results;

          for (var i = 0; i < data.length; i++) {
            var option = data[i];
            var checkChildren = option.children != null && !wrapper({
              results: option.children
            }, true);
            var optionText = (option.text || '').toUpperCase();
            var paramsTerm = (params.term || '').toUpperCase();
            var checkText = optionText === paramsTerm;

            if (checkText || checkChildren) {
              if (child) {
                return false;
              }

              obj.data = data;
              callback(obj);
              return;
            }
          }

          if (child) {
            return true;
          }

          var tag = self.createTag(params);

          if (tag != null) {
            var $option = self.option(tag);
            $option.attr('data-select2-tag', true);
            self.addOptions([$option]);
            self.insertTag(data, tag);
          }

          obj.results = data;
          callback(obj);
        }

        decorated.call(this, params, wrapper);
      };

      Tags.prototype.createTag = function (decorated, params) {
        var term = $.trim(params.term);

        if (term === '') {
          return null;
        }

        return {
          id: term,
          text: term
        };
      };

      Tags.prototype.insertTag = function (_, data, tag) {
        data.unshift(tag);
      };

      Tags.prototype._removeOldTags = function (_) {
        var $options = this.$element.find('option[data-select2-tag]');
        $options.each(function () {
          if (this.selected) {
            return;
          }

          $(this).remove();
        });
      };

      return Tags;
    });
    S2.define('select2/data/tokenizer', ['jquery'], function ($) {
      function Tokenizer(decorated, $element, options) {
        var tokenizer = options.get('tokenizer');

        if (tokenizer !== undefined) {
          this.tokenizer = tokenizer;
        }

        decorated.call(this, $element, options);
      }

      Tokenizer.prototype.bind = function (decorated, container, $container) {
        decorated.call(this, container, $container);
        this.$search = container.dropdown.$search || container.selection.$search || $container.find('.select2-search__field');
      };

      Tokenizer.prototype.query = function (decorated, params, callback) {
        var self = this;

        function createAndSelect(data) {
          // Normalize the data object so we can use it for checks
          var item = self._normalizeItem(data); // Check if the data object already exists as a tag
          // Select it if it doesn't


          var $existingOptions = self.$element.find('option').filter(function () {
            return $(this).val() === item.id;
          }); // If an existing option wasn't found for it, create the option

          if (!$existingOptions.length) {
            var $option = self.option(item);
            $option.attr('data-select2-tag', true);

            self._removeOldTags();

            self.addOptions([$option]);
          } // Select the item, now that we know there is an option for it


          select(item);
        }

        function select(data) {
          self.trigger('select', {
            data: data
          });
        }

        params.term = params.term || '';
        var tokenData = this.tokenizer(params, this.options, createAndSelect);

        if (tokenData.term !== params.term) {
          // Replace the search term if we have the search box
          if (this.$search.length) {
            this.$search.val(tokenData.term);
            this.$search.trigger('focus');
          }

          params.term = tokenData.term;
        }

        decorated.call(this, params, callback);
      };

      Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
        var separators = options.get('tokenSeparators') || [];
        var term = params.term;
        var i = 0;

        var createTag = this.createTag || function (params) {
          return {
            id: params.term,
            text: params.term
          };
        };

        while (i < term.length) {
          var termChar = term[i];

          if ($.inArray(termChar, separators) === -1) {
            i++;
            continue;
          }

          var part = term.substr(0, i);
          var partParams = $.extend({}, params, {
            term: part
          });
          var data = createTag(partParams);

          if (data == null) {
            i++;
            continue;
          }

          callback(data); // Reset the term to not include the tokenized portion

          term = term.substr(i + 1) || '';
          i = 0;
        }

        return {
          term: term
        };
      };

      return Tokenizer;
    });
    S2.define('select2/data/minimumInputLength', [], function () {
      function MinimumInputLength(decorated, $e, options) {
        this.minimumInputLength = options.get('minimumInputLength');
        decorated.call(this, $e, options);
      }

      MinimumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';

        if (params.term.length < this.minimumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooShort',
            args: {
              minimum: this.minimumInputLength,
              input: params.term,
              params: params
            }
          });
          return;
        }

        decorated.call(this, params, callback);
      };

      return MinimumInputLength;
    });
    S2.define('select2/data/maximumInputLength', [], function () {
      function MaximumInputLength(decorated, $e, options) {
        this.maximumInputLength = options.get('maximumInputLength');
        decorated.call(this, $e, options);
      }

      MaximumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';

        if (this.maximumInputLength > 0 && params.term.length > this.maximumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooLong',
            args: {
              maximum: this.maximumInputLength,
              input: params.term,
              params: params
            }
          });
          return;
        }

        decorated.call(this, params, callback);
      };

      return MaximumInputLength;
    });
    S2.define('select2/data/maximumSelectionLength', [], function () {
      function MaximumSelectionLength(decorated, $e, options) {
        this.maximumSelectionLength = options.get('maximumSelectionLength');
        decorated.call(this, $e, options);
      }

      MaximumSelectionLength.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('select', function () {
          self._checkIfMaximumSelected();
        });
      };

      MaximumSelectionLength.prototype.query = function (decorated, params, callback) {
        var self = this;

        this._checkIfMaximumSelected(function () {
          decorated.call(self, params, callback);
        });
      };

      MaximumSelectionLength.prototype._checkIfMaximumSelected = function (_, successCallback) {
        var self = this;
        this.current(function (currentData) {
          var count = currentData != null ? currentData.length : 0;

          if (self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength) {
            self.trigger('results:message', {
              message: 'maximumSelected',
              args: {
                maximum: self.maximumSelectionLength
              }
            });
            return;
          }

          if (successCallback) {
            successCallback();
          }
        });
      };

      return MaximumSelectionLength;
    });
    S2.define('select2/dropdown', ['jquery', './utils'], function ($, Utils) {
      function Dropdown($element, options) {
        this.$element = $element;
        this.options = options;

        Dropdown.__super__.constructor.call(this);
      }

      Utils.Extend(Dropdown, Utils.Observable);

      Dropdown.prototype.render = function () {
        var $dropdown = $('<span class="select2-dropdown">' + '<span class="select2-results"></span>' + '</span>');
        $dropdown.attr('dir', this.options.get('dir'));
        this.$dropdown = $dropdown;
        return $dropdown;
      };

      Dropdown.prototype.bind = function () {// Should be implemented in subclasses
      };

      Dropdown.prototype.position = function ($dropdown, $container) {// Should be implemented in subclasses
      };

      Dropdown.prototype.destroy = function () {
        // Remove the dropdown from the DOM
        this.$dropdown.remove();
      };

      return Dropdown;
    });
    S2.define('select2/dropdown/search', ['jquery', '../utils'], function ($, Utils) {
      function Search() {}

      Search.prototype.render = function (decorated) {
        var $rendered = decorated.call(this);
        var $search = $('<span class="select2-search select2-search--dropdown">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' + '</span>');
        this.$searchContainer = $search;
        this.$search = $search.find('input');
        $rendered.prepend($search);
        return $rendered;
      };

      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var resultsId = container.id + '-results';
        decorated.call(this, container, $container);
        this.$search.on('keydown', function (evt) {
          self.trigger('keypress', evt);
          self._keyUpPrevented = evt.isDefaultPrevented();
        }); // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.

        this.$search.on('input', function (evt) {
          // Unbind the duplicated `keyup` event
          $(this).off('keyup');
        });
        this.$search.on('keyup input', function (evt) {
          self.handleSearch(evt);
        });
        container.on('open', function () {
          self.$search.attr('tabindex', 0);
          self.$search.attr('aria-controls', resultsId);
          self.$search.trigger('focus');
          window.setTimeout(function () {
            self.$search.trigger('focus');
          }, 0);
        });
        container.on('close', function () {
          self.$search.attr('tabindex', -1);
          self.$search.removeAttr('aria-controls');
          self.$search.removeAttr('aria-activedescendant');
          self.$search.val('');
          self.$search.trigger('blur');
        });
        container.on('focus', function () {
          if (!container.isOpen()) {
            self.$search.trigger('focus');
          }
        });
        container.on('results:all', function (params) {
          if (params.query.term == null || params.query.term === '') {
            var showSearch = self.showSearch(params);

            if (showSearch) {
              self.$searchContainer.removeClass('select2-search--hide');
            } else {
              self.$searchContainer.addClass('select2-search--hide');
            }
          }
        });
        container.on('results:focus', function (params) {
          if (params.data._resultId) {
            self.$search.attr('aria-activedescendant', params.data._resultId);
          } else {
            self.$search.removeAttr('aria-activedescendant');
          }
        });
      };

      Search.prototype.handleSearch = function (evt) {
        if (!this._keyUpPrevented) {
          var input = this.$search.val();
          this.trigger('query', {
            term: input
          });
        }

        this._keyUpPrevented = false;
      };

      Search.prototype.showSearch = function (_, params) {
        return true;
      };

      return Search;
    });
    S2.define('select2/dropdown/hidePlaceholder', [], function () {
      function HidePlaceholder(decorated, $element, options, dataAdapter) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
        decorated.call(this, $element, options, dataAdapter);
      }

      HidePlaceholder.prototype.append = function (decorated, data) {
        data.results = this.removePlaceholder(data.results);
        decorated.call(this, data);
      };

      HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }

        return placeholder;
      };

      HidePlaceholder.prototype.removePlaceholder = function (_, data) {
        var modifiedData = data.slice(0);

        for (var d = data.length - 1; d >= 0; d--) {
          var item = data[d];

          if (this.placeholder.id === item.id) {
            modifiedData.splice(d, 1);
          }
        }

        return modifiedData;
      };

      return HidePlaceholder;
    });
    S2.define('select2/dropdown/infiniteScroll', ['jquery'], function ($) {
      function InfiniteScroll(decorated, $element, options, dataAdapter) {
        this.lastParams = {};
        decorated.call(this, $element, options, dataAdapter);
        this.$loadingMore = this.createLoadingMore();
        this.loading = false;
      }

      InfiniteScroll.prototype.append = function (decorated, data) {
        this.$loadingMore.remove();
        this.loading = false;
        decorated.call(this, data);

        if (this.showLoadingMore(data)) {
          this.$results.append(this.$loadingMore);
          this.loadMoreIfNeeded();
        }
      };

      InfiniteScroll.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('query', function (params) {
          self.lastParams = params;
          self.loading = true;
        });
        container.on('query:append', function (params) {
          self.lastParams = params;
          self.loading = true;
        });
        this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
      };

      InfiniteScroll.prototype.loadMoreIfNeeded = function () {
        var isLoadMoreVisible = $.contains(document.documentElement, this.$loadingMore[0]);

        if (this.loading || !isLoadMoreVisible) {
          return;
        }

        var currentOffset = this.$results.offset().top + this.$results.outerHeight(false);
        var loadingMoreOffset = this.$loadingMore.offset().top + this.$loadingMore.outerHeight(false);

        if (currentOffset + 50 >= loadingMoreOffset) {
          this.loadMore();
        }
      };

      InfiniteScroll.prototype.loadMore = function () {
        this.loading = true;
        var params = $.extend({}, {
          page: 1
        }, this.lastParams);
        params.page++;
        this.trigger('query:append', params);
      };

      InfiniteScroll.prototype.showLoadingMore = function (_, data) {
        return data.pagination && data.pagination.more;
      };

      InfiniteScroll.prototype.createLoadingMore = function () {
        var $option = $('<li ' + 'class="select2-results__option select2-results__option--load-more"' + 'role="option" aria-disabled="true"></li>');
        var message = this.options.get('translations').get('loadingMore');
        $option.html(message(this.lastParams));
        return $option;
      };

      return InfiniteScroll;
    });
    S2.define('select2/dropdown/attachBody', ['jquery', '../utils'], function ($, Utils) {
      function AttachBody(decorated, $element, options) {
        this.$dropdownParent = $(options.get('dropdownParent') || document.body);
        decorated.call(this, $element, options);
      }

      AttachBody.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('open', function () {
          self._showDropdown();

          self._attachPositioningHandler(container); // Must bind after the results handlers to ensure correct sizing


          self._bindContainerResultHandlers(container);
        });
        container.on('close', function () {
          self._hideDropdown();

          self._detachPositioningHandler(container);
        });
        this.$dropdownContainer.on('mousedown', function (evt) {
          evt.stopPropagation();
        });
      };

      AttachBody.prototype.destroy = function (decorated) {
        decorated.call(this);
        this.$dropdownContainer.remove();
      };

      AttachBody.prototype.position = function (decorated, $dropdown, $container) {
        // Clone all of the container classes
        $dropdown.attr('class', $container.attr('class'));
        $dropdown.removeClass('select2');
        $dropdown.addClass('select2-container--open');
        $dropdown.css({
          position: 'absolute',
          top: -999999
        });
        this.$container = $container;
      };

      AttachBody.prototype.render = function (decorated) {
        var $container = $('<span></span>');
        var $dropdown = decorated.call(this);
        $container.append($dropdown);
        this.$dropdownContainer = $container;
        return $container;
      };

      AttachBody.prototype._hideDropdown = function (decorated) {
        this.$dropdownContainer.detach();
      };

      AttachBody.prototype._bindContainerResultHandlers = function (decorated, container) {
        // These should only be bound once
        if (this._containerResultsHandlersBound) {
          return;
        }

        var self = this;
        container.on('results:all', function () {
          self._positionDropdown();

          self._resizeDropdown();
        });
        container.on('results:append', function () {
          self._positionDropdown();

          self._resizeDropdown();
        });
        container.on('results:message', function () {
          self._positionDropdown();

          self._resizeDropdown();
        });
        container.on('select', function () {
          self._positionDropdown();

          self._resizeDropdown();
        });
        container.on('unselect', function () {
          self._positionDropdown();

          self._resizeDropdown();
        });
        this._containerResultsHandlersBound = true;
      };

      AttachBody.prototype._attachPositioningHandler = function (decorated, container) {
        var self = this;
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;
        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.each(function () {
          Utils.StoreData(this, 'select2-scroll-position', {
            x: $(this).scrollLeft(),
            y: $(this).scrollTop()
          });
        });
        $watchers.on(scrollEvent, function (ev) {
          var position = Utils.GetData(this, 'select2-scroll-position');
          $(this).scrollTop(position.y);
        });
        $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent, function (e) {
          self._positionDropdown();

          self._resizeDropdown();
        });
      };

      AttachBody.prototype._detachPositioningHandler = function (decorated, container) {
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;
        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.off(scrollEvent);
        $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
      };

      AttachBody.prototype._positionDropdown = function () {
        var $window = $(window);
        var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
        var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');
        var newDirection = null;
        var offset = this.$container.offset();
        offset.bottom = offset.top + this.$container.outerHeight(false);
        var container = {
          height: this.$container.outerHeight(false)
        };
        container.top = offset.top;
        container.bottom = offset.top + container.height;
        var dropdown = {
          height: this.$dropdown.outerHeight(false)
        };
        var viewport = {
          top: $window.scrollTop(),
          bottom: $window.scrollTop() + $window.height()
        };
        var enoughRoomAbove = viewport.top < offset.top - dropdown.height;
        var enoughRoomBelow = viewport.bottom > offset.bottom + dropdown.height;
        var css = {
          left: offset.left,
          top: container.bottom
        }; // Determine what the parent element is to use for calculating the offset

        var $offsetParent = this.$dropdownParent; // For statically positioned elements, we need to get the element
        // that is determining the offset

        if ($offsetParent.css('position') === 'static') {
          $offsetParent = $offsetParent.offsetParent();
        }

        var parentOffset = {
          top: 0,
          left: 0
        };

        if ($.contains(document.body, $offsetParent[0]) || $offsetParent[0].isConnected) {
          parentOffset = $offsetParent.offset();
        }

        css.top -= parentOffset.top;
        css.left -= parentOffset.left;

        if (!isCurrentlyAbove && !isCurrentlyBelow) {
          newDirection = 'below';
        }

        if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
          newDirection = 'above';
        } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
          newDirection = 'below';
        }

        if (newDirection == 'above' || isCurrentlyAbove && newDirection !== 'below') {
          css.top = container.top - parentOffset.top - dropdown.height;
        }

        if (newDirection != null) {
          this.$dropdown.removeClass('select2-dropdown--below select2-dropdown--above').addClass('select2-dropdown--' + newDirection);
          this.$container.removeClass('select2-container--below select2-container--above').addClass('select2-container--' + newDirection);
        }

        this.$dropdownContainer.css(css);
      };

      AttachBody.prototype._resizeDropdown = function () {
        var css = {
          width: this.$container.outerWidth(false) + 'px'
        };

        if (this.options.get('dropdownAutoWidth')) {
          css.minWidth = css.width;
          css.position = 'relative';
          css.width = 'auto';
        }

        this.$dropdown.css(css);
      };

      AttachBody.prototype._showDropdown = function (decorated) {
        this.$dropdownContainer.appendTo(this.$dropdownParent);

        this._positionDropdown();

        this._resizeDropdown();
      };

      return AttachBody;
    });
    S2.define('select2/dropdown/minimumResultsForSearch', [], function () {
      function countResults(data) {
        var count = 0;

        for (var d = 0; d < data.length; d++) {
          var item = data[d];

          if (item.children) {
            count += countResults(item.children);
          } else {
            count++;
          }
        }

        return count;
      }

      function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
        this.minimumResultsForSearch = options.get('minimumResultsForSearch');

        if (this.minimumResultsForSearch < 0) {
          this.minimumResultsForSearch = Infinity;
        }

        decorated.call(this, $element, options, dataAdapter);
      }

      MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
        if (countResults(params.data.results) < this.minimumResultsForSearch) {
          return false;
        }

        return decorated.call(this, params);
      };

      return MinimumResultsForSearch;
    });
    S2.define('select2/dropdown/selectOnClose', ['../utils'], function (Utils) {
      function SelectOnClose() {}

      SelectOnClose.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('close', function (params) {
          self._handleSelectOnClose(params);
        });
      };

      SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
        if (params && params.originalSelect2Event != null) {
          var event = params.originalSelect2Event; // Don't select an item if the close event was triggered from a select or
          // unselect event

          if (event._type === 'select' || event._type === 'unselect') {
            return;
          }
        }

        var $highlightedResults = this.getHighlightedResults(); // Only select highlighted results

        if ($highlightedResults.length < 1) {
          return;
        }

        var data = Utils.GetData($highlightedResults[0], 'data'); // Don't re-select already selected resulte

        if (data.element != null && data.element.selected || data.element == null && data.selected) {
          return;
        }

        this.trigger('select', {
          data: data
        });
      };

      return SelectOnClose;
    });
    S2.define('select2/dropdown/closeOnSelect', [], function () {
      function CloseOnSelect() {}

      CloseOnSelect.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('select', function (evt) {
          self._selectTriggered(evt);
        });
        container.on('unselect', function (evt) {
          self._selectTriggered(evt);
        });
      };

      CloseOnSelect.prototype._selectTriggered = function (_, evt) {
        var originalEvent = evt.originalEvent; // Don't close if the control key is being held

        if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
          return;
        }

        this.trigger('close', {
          originalEvent: originalEvent,
          originalSelect2Event: evt
        });
      };

      return CloseOnSelect;
    });
    S2.define('select2/i18n/en', [], function () {
      // English
      return {
        errorLoading: function errorLoading() {
          return 'The results could not be loaded.';
        },
        inputTooLong: function inputTooLong(args) {
          var overChars = args.input.length - args.maximum;
          var message = 'Please delete ' + overChars + ' character';

          if (overChars != 1) {
            message += 's';
          }

          return message;
        },
        inputTooShort: function inputTooShort(args) {
          var remainingChars = args.minimum - args.input.length;
          var message = 'Please enter ' + remainingChars + ' or more characters';
          return message;
        },
        loadingMore: function loadingMore() {
          return 'Loading more results…';
        },
        maximumSelected: function maximumSelected(args) {
          var message = 'You can only select ' + args.maximum + ' item';

          if (args.maximum != 1) {
            message += 's';
          }

          return message;
        },
        noResults: function noResults() {
          return 'No results found';
        },
        searching: function searching() {
          return 'Searching…';
        },
        removeAllItems: function removeAllItems() {
          return 'Remove all items';
        }
      };
    });
    S2.define('select2/defaults', ['jquery', 'require', './results', './selection/single', './selection/multiple', './selection/placeholder', './selection/allowClear', './selection/search', './selection/eventRelay', './utils', './translation', './diacritics', './data/select', './data/array', './data/ajax', './data/tags', './data/tokenizer', './data/minimumInputLength', './data/maximumInputLength', './data/maximumSelectionLength', './dropdown', './dropdown/search', './dropdown/hidePlaceholder', './dropdown/infiniteScroll', './dropdown/attachBody', './dropdown/minimumResultsForSearch', './dropdown/selectOnClose', './dropdown/closeOnSelect', './i18n/en'], function ($, require, ResultsList, SingleSelection, MultipleSelection, Placeholder, AllowClear, SelectionSearch, EventRelay, Utils, Translation, DIACRITICS, SelectData, ArrayData, AjaxData, Tags, Tokenizer, MinimumInputLength, MaximumInputLength, MaximumSelectionLength, Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll, AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect, EnglishTranslation) {
      function Defaults() {
        this.reset();
      }

      Defaults.prototype.apply = function (options) {
        options = $.extend(true, {}, this.defaults, options);

        if (options.dataAdapter == null) {
          if (options.ajax != null) {
            options.dataAdapter = AjaxData;
          } else if (options.data != null) {
            options.dataAdapter = ArrayData;
          } else {
            options.dataAdapter = SelectData;
          }

          if (options.minimumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength);
          }

          if (options.maximumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength);
          }

          if (options.maximumSelectionLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength);
          }

          if (options.tags) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
          }

          if (options.tokenSeparators != null || options.tokenizer != null) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer);
          }

          if (options.query != null) {
            var Query = require(options.amdBase + 'compat/query');

            options.dataAdapter = Utils.Decorate(options.dataAdapter, Query);
          }

          if (options.initSelection != null) {
            var InitSelection = require(options.amdBase + 'compat/initSelection');

            options.dataAdapter = Utils.Decorate(options.dataAdapter, InitSelection);
          }
        }

        if (options.resultsAdapter == null) {
          options.resultsAdapter = ResultsList;

          if (options.ajax != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll);
          }

          if (options.placeholder != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder);
          }

          if (options.selectOnClose) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose);
          }
        }

        if (options.dropdownAdapter == null) {
          if (options.multiple) {
            options.dropdownAdapter = Dropdown;
          } else {
            var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
            options.dropdownAdapter = SearchableDropdown;
          }

          if (options.minimumResultsForSearch !== 0) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch);
          }

          if (options.closeOnSelect) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect);
          }

          if (options.dropdownCssClass != null || options.dropdownCss != null || options.adaptDropdownCssClass != null) {
            var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, DropdownCSS);
          }

          options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody);
        }

        if (options.selectionAdapter == null) {
          if (options.multiple) {
            options.selectionAdapter = MultipleSelection;
          } else {
            options.selectionAdapter = SingleSelection;
          } // Add the placeholder mixin if a placeholder was specified


          if (options.placeholder != null) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder);
          }

          if (options.allowClear) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear);
          }

          if (options.multiple) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch);
          }

          if (options.containerCssClass != null || options.containerCss != null || options.adaptContainerCssClass != null) {
            var ContainerCSS = require(options.amdBase + 'compat/containerCss');

            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, ContainerCSS);
          }

          options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay);
        } // If the defaults were not previously applied from an element, it is
        // possible for the language option to have not been resolved


        options.language = this._resolveLanguage(options.language); // Always fall back to English since it will always be complete

        options.language.push('en');
        var uniqueLanguages = [];

        for (var l = 0; l < options.language.length; l++) {
          var language = options.language[l];

          if (uniqueLanguages.indexOf(language) === -1) {
            uniqueLanguages.push(language);
          }
        }

        options.language = uniqueLanguages;
        options.translations = this._processTranslations(options.language, options.debug);
        return options;
      };

      Defaults.prototype.reset = function () {
        function stripDiacritics(text) {
          // Used 'uni range + named function' from http://jsperf.com/diacritics/18
          function match(a) {
            return DIACRITICS[a] || a;
          }

          return text.replace(/[^\u0000-\u007E]/g, match);
        }

        function matcher(params, data) {
          // Always return the object if there is nothing to compare
          if ($.trim(params.term) === '') {
            return data;
          } // Do a recursive check for options with children


          if (data.children && data.children.length > 0) {
            // Clone the data object if there are children
            // This is required as we modify the object to remove any non-matches
            var match = $.extend(true, {}, data); // Check each child of the option

            for (var c = data.children.length - 1; c >= 0; c--) {
              var child = data.children[c];
              var matches = matcher(params, child); // If there wasn't a match, remove the object in the array

              if (matches == null) {
                match.children.splice(c, 1);
              }
            } // If any children matched, return the new object


            if (match.children.length > 0) {
              return match;
            } // If there were no matching children, check just the plain object


            return matcher(params, match);
          }

          var original = stripDiacritics(data.text).toUpperCase();
          var term = stripDiacritics(params.term).toUpperCase(); // Check if the text contains the term

          if (original.indexOf(term) > -1) {
            return data;
          } // If it doesn't contain the term, don't return anything


          return null;
        }

        this.defaults = {
          amdBase: './',
          amdLanguageBase: './i18n/',
          closeOnSelect: true,
          debug: false,
          dropdownAutoWidth: false,
          escapeMarkup: Utils.escapeMarkup,
          language: {},
          matcher: matcher,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: false,
          scrollAfterSelect: false,
          sorter: function sorter(data) {
            return data;
          },
          templateResult: function templateResult(result) {
            return result.text;
          },
          templateSelection: function templateSelection(selection) {
            return selection.text;
          },
          theme: 'default',
          width: 'resolve'
        };
      };

      Defaults.prototype.applyFromElement = function (options, $element) {
        var optionLanguage = options.language;
        var defaultLanguage = this.defaults.language;
        var elementLanguage = $element.prop('lang');
        var parentLanguage = $element.closest('[lang]').prop('lang');
        var languages = Array.prototype.concat.call(this._resolveLanguage(elementLanguage), this._resolveLanguage(optionLanguage), this._resolveLanguage(defaultLanguage), this._resolveLanguage(parentLanguage));
        options.language = languages;
        return options;
      };

      Defaults.prototype._resolveLanguage = function (language) {
        if (!language) {
          return [];
        }

        if ($.isEmptyObject(language)) {
          return [];
        }

        if ($.isPlainObject(language)) {
          return [language];
        }

        var languages;

        if (!$.isArray(language)) {
          languages = [language];
        } else {
          languages = language;
        }

        var resolvedLanguages = [];

        for (var l = 0; l < languages.length; l++) {
          resolvedLanguages.push(languages[l]);

          if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
            // Extract the region information if it is included
            var languageParts = languages[l].split('-');
            var baseLanguage = languageParts[0];
            resolvedLanguages.push(baseLanguage);
          }
        }

        return resolvedLanguages;
      };

      Defaults.prototype._processTranslations = function (languages, debug) {
        var translations = new Translation();

        for (var l = 0; l < languages.length; l++) {
          var languageData = new Translation();
          var language = languages[l];

          if (typeof language === 'string') {
            try {
              // Try to load it with the original name
              languageData = Translation.loadPath(language);
            } catch (e) {
              try {
                // If we couldn't load it, check if it wasn't the full path
                language = this.defaults.amdLanguageBase + language;
                languageData = Translation.loadPath(language);
              } catch (ex) {
                // The translation could not be loaded at all. Sometimes this is
                // because of a configuration problem, other times this can be
                // because of how Select2 helps load all possible translation files
                if (debug && window.console && console.warn) {
                  console.warn('Select2: The language file for "' + language + '" could ' + 'not be automatically loaded. A fallback will be used instead.');
                }
              }
            }
          } else if ($.isPlainObject(language)) {
            languageData = new Translation(language);
          } else {
            languageData = language;
          }

          translations.extend(languageData);
        }

        return translations;
      };

      Defaults.prototype.set = function (key, value) {
        var camelKey = $.camelCase(key);
        var data = {};
        data[camelKey] = value;

        var convertedData = Utils._convertData(data);

        $.extend(true, this.defaults, convertedData);
      };

      var defaults = new Defaults();
      return defaults;
    });
    S2.define('select2/options', ['require', 'jquery', './defaults', './utils'], function (require, $, Defaults, Utils) {
      function Options(options, $element) {
        this.options = options;

        if ($element != null) {
          this.fromElement($element);
        }

        if ($element != null) {
          this.options = Defaults.applyFromElement(this.options, $element);
        }

        this.options = Defaults.apply(this.options);

        if ($element && $element.is('input')) {
          var InputCompat = require(this.get('amdBase') + 'compat/inputData');

          this.options.dataAdapter = Utils.Decorate(this.options.dataAdapter, InputCompat);
        }
      }

      Options.prototype.fromElement = function ($e) {
        var excludedData = ['select2'];

        if (this.options.multiple == null) {
          this.options.multiple = $e.prop('multiple');
        }

        if (this.options.disabled == null) {
          this.options.disabled = $e.prop('disabled');
        }

        if (this.options.dir == null) {
          if ($e.prop('dir')) {
            this.options.dir = $e.prop('dir');
          } else if ($e.closest('[dir]').prop('dir')) {
            this.options.dir = $e.closest('[dir]').prop('dir');
          } else {
            this.options.dir = 'ltr';
          }
        }

        $e.prop('disabled', this.options.disabled);
        $e.prop('multiple', this.options.multiple);

        if (Utils.GetData($e[0], 'select2Tags')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-select2-tags` attribute has been changed to ' + 'use the `data-data` and `data-tags="true"` attributes and will be ' + 'removed in future versions of Select2.');
          }

          Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
          Utils.StoreData($e[0], 'tags', true);
        }

        if (Utils.GetData($e[0], 'ajaxUrl')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-ajax-url` attribute has been changed to ' + '`data-ajax--url` and support for the old attribute will be removed' + ' in future versions of Select2.');
          }

          $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
          Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
        }

        var dataset = {};

        function upperCaseLetter(_, letter) {
          return letter.toUpperCase();
        } // Pre-load all of the attributes which are prefixed with `data-`


        for (var attr = 0; attr < $e[0].attributes.length; attr++) {
          var attributeName = $e[0].attributes[attr].name;
          var prefix = 'data-';

          if (attributeName.substr(0, prefix.length) == prefix) {
            // Get the contents of the attribute after `data-`
            var dataName = attributeName.substring(prefix.length); // Get the data contents from the consistent source
            // This is more than likely the jQuery data helper

            var dataValue = Utils.GetData($e[0], dataName); // camelCase the attribute name to match the spec

            var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter); // Store the data attribute contents into the dataset since

            dataset[camelDataName] = dataValue;
          }
        } // Prefer the element's `dataset` attribute if it exists
        // jQuery 1.x does not correctly handle data attributes with multiple dashes


        if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
          dataset = $.extend(true, {}, $e[0].dataset, dataset);
        } // Prefer our internal data cache if it exists


        var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);
        data = Utils._convertData(data);

        for (var key in data) {
          if ($.inArray(key, excludedData) > -1) {
            continue;
          }

          if ($.isPlainObject(this.options[key])) {
            $.extend(this.options[key], data[key]);
          } else {
            this.options[key] = data[key];
          }
        }

        return this;
      };

      Options.prototype.get = function (key) {
        return this.options[key];
      };

      Options.prototype.set = function (key, val) {
        this.options[key] = val;
      };

      return Options;
    });
    S2.define('select2/core', ['jquery', './options', './utils', './keys'], function ($, Options, Utils, KEYS) {
      var Select2 = function Select2($element, options) {
        if (Utils.GetData($element[0], 'select2') != null) {
          Utils.GetData($element[0], 'select2').destroy();
        }

        this.$element = $element;
        this.id = this._generateId($element);
        options = options || {};
        this.options = new Options(options, $element);

        Select2.__super__.constructor.call(this); // Set up the tabindex


        var tabindex = $element.attr('tabindex') || 0;
        Utils.StoreData($element[0], 'old-tabindex', tabindex);
        $element.attr('tabindex', '-1'); // Set up containers and adapters

        var DataAdapter = this.options.get('dataAdapter');
        this.dataAdapter = new DataAdapter($element, this.options);
        var $container = this.render();

        this._placeContainer($container);

        var SelectionAdapter = this.options.get('selectionAdapter');
        this.selection = new SelectionAdapter($element, this.options);
        this.$selection = this.selection.render();
        this.selection.position(this.$selection, $container);
        var DropdownAdapter = this.options.get('dropdownAdapter');
        this.dropdown = new DropdownAdapter($element, this.options);
        this.$dropdown = this.dropdown.render();
        this.dropdown.position(this.$dropdown, $container);
        var ResultsAdapter = this.options.get('resultsAdapter');
        this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
        this.$results = this.results.render();
        this.results.position(this.$results, this.$dropdown); // Bind events

        var self = this; // Bind the container to all of the adapters

        this._bindAdapters(); // Register any DOM event handlers


        this._registerDomEvents(); // Register any internal event handlers


        this._registerDataEvents();

        this._registerSelectionEvents();

        this._registerDropdownEvents();

        this._registerResultsEvents();

        this._registerEvents(); // Set the initial state


        this.dataAdapter.current(function (initialData) {
          self.trigger('selection:update', {
            data: initialData
          });
        }); // Hide the original select

        $element.addClass('select2-hidden-accessible');
        $element.attr('aria-hidden', 'true'); // Synchronize any monitored attributes

        this._syncAttributes();

        Utils.StoreData($element[0], 'select2', this); // Ensure backwards compatibility with $element.data('select2').

        $element.data('select2', this);
      };

      Utils.Extend(Select2, Utils.Observable);

      Select2.prototype._generateId = function ($element) {
        var id = '';

        if ($element.attr('id') != null) {
          id = $element.attr('id');
        } else if ($element.attr('name') != null) {
          id = $element.attr('name') + '-' + Utils.generateChars(2);
        } else {
          id = Utils.generateChars(4);
        }

        id = id.replace(/(:|\.|\[|\]|,)/g, '');
        id = 'select2-' + id;
        return id;
      };

      Select2.prototype._placeContainer = function ($container) {
        $container.insertAfter(this.$element);

        var width = this._resolveWidth(this.$element, this.options.get('width'));

        if (width != null) {
          $container.css('width', width);
        }
      };

      Select2.prototype._resolveWidth = function ($element, method) {
        var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

        if (method == 'resolve') {
          var styleWidth = this._resolveWidth($element, 'style');

          if (styleWidth != null) {
            return styleWidth;
          }

          return this._resolveWidth($element, 'element');
        }

        if (method == 'element') {
          var elementWidth = $element.outerWidth(false);

          if (elementWidth <= 0) {
            return 'auto';
          }

          return elementWidth + 'px';
        }

        if (method == 'style') {
          var style = $element.attr('style');

          if (typeof style !== 'string') {
            return null;
          }

          var attrs = style.split(';');

          for (var i = 0, l = attrs.length; i < l; i = i + 1) {
            var attr = attrs[i].replace(/\s/g, '');
            var matches = attr.match(WIDTH);

            if (matches !== null && matches.length >= 1) {
              return matches[1];
            }
          }

          return null;
        }

        if (method == 'computedstyle') {
          var computedStyle = window.getComputedStyle($element[0]);
          return computedStyle.width;
        }

        return method;
      };

      Select2.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container);
        this.selection.bind(this, this.$container);
        this.dropdown.bind(this, this.$container);
        this.results.bind(this, this.$container);
      };

      Select2.prototype._registerDomEvents = function () {
        var self = this;
        this.$element.on('change.select2', function () {
          self.dataAdapter.current(function (data) {
            self.trigger('selection:update', {
              data: data
            });
          });
        });
        this.$element.on('focus.select2', function (evt) {
          self.trigger('focus', evt);
        });
        this._syncA = Utils.bind(this._syncAttributes, this);
        this._syncS = Utils.bind(this._syncSubtree, this);

        if (this.$element[0].attachEvent) {
          this.$element[0].attachEvent('onpropertychange', this._syncA);
        }

        var observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

        if (observer != null) {
          this._observer = new observer(function (mutations) {
            self._syncA();

            self._syncS(null, mutations);
          });

          this._observer.observe(this.$element[0], {
            attributes: true,
            childList: true,
            subtree: false
          });
        } else if (this.$element[0].addEventListener) {
          this.$element[0].addEventListener('DOMAttrModified', self._syncA, false);
          this.$element[0].addEventListener('DOMNodeInserted', self._syncS, false);
          this.$element[0].addEventListener('DOMNodeRemoved', self._syncS, false);
        }
      };

      Select2.prototype._registerDataEvents = function () {
        var self = this;
        this.dataAdapter.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerSelectionEvents = function () {
        var self = this;
        var nonRelayEvents = ['toggle', 'focus'];
        this.selection.on('toggle', function () {
          self.toggleDropdown();
        });
        this.selection.on('focus', function (params) {
          self.focus(params);
        });
        this.selection.on('*', function (name, params) {
          if ($.inArray(name, nonRelayEvents) !== -1) {
            return;
          }

          self.trigger(name, params);
        });
      };

      Select2.prototype._registerDropdownEvents = function () {
        var self = this;
        this.dropdown.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerResultsEvents = function () {
        var self = this;
        this.results.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerEvents = function () {
        var self = this;
        this.on('open', function () {
          self.$container.addClass('select2-container--open');
        });
        this.on('close', function () {
          self.$container.removeClass('select2-container--open');
        });
        this.on('enable', function () {
          self.$container.removeClass('select2-container--disabled');
        });
        this.on('disable', function () {
          self.$container.addClass('select2-container--disabled');
        });
        this.on('blur', function () {
          self.$container.removeClass('select2-container--focus');
        });
        this.on('query', function (params) {
          if (!self.isOpen()) {
            self.trigger('open', {});
          }

          this.dataAdapter.query(params, function (data) {
            self.trigger('results:all', {
              data: data,
              query: params
            });
          });
        });
        this.on('query:append', function (params) {
          this.dataAdapter.query(params, function (data) {
            self.trigger('results:append', {
              data: data,
              query: params
            });
          });
        });
        this.on('keypress', function (evt) {
          var key = evt.which;

          if (self.isOpen()) {
            if (key === KEYS.ESC || key === KEYS.TAB || key === KEYS.UP && evt.altKey) {
              self.close(evt);
              evt.preventDefault();
            } else if (key === KEYS.ENTER) {
              self.trigger('results:select', {});
              evt.preventDefault();
            } else if (key === KEYS.SPACE && evt.ctrlKey) {
              self.trigger('results:toggle', {});
              evt.preventDefault();
            } else if (key === KEYS.UP) {
              self.trigger('results:previous', {});
              evt.preventDefault();
            } else if (key === KEYS.DOWN) {
              self.trigger('results:next', {});
              evt.preventDefault();
            }
          } else {
            if (key === KEYS.ENTER || key === KEYS.SPACE || key === KEYS.DOWN && evt.altKey) {
              self.open();
              evt.preventDefault();
            }
          }
        });
      };

      Select2.prototype._syncAttributes = function () {
        this.options.set('disabled', this.$element.prop('disabled'));

        if (this.isDisabled()) {
          if (this.isOpen()) {
            this.close();
          }

          this.trigger('disable', {});
        } else {
          this.trigger('enable', {});
        }
      };

      Select2.prototype._isChangeMutation = function (evt, mutations) {
        var changed = false;
        var self = this; // Ignore any mutation events raised for elements that aren't options or
        // optgroups. This handles the case when the select element is destroyed

        if (evt && evt.target && evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP') {
          return;
        }

        if (!mutations) {
          // If mutation events aren't supported, then we can only assume that the
          // change affected the selections
          changed = true;
        } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
          for (var n = 0; n < mutations.addedNodes.length; n++) {
            var node = mutations.addedNodes[n];

            if (node.selected) {
              changed = true;
            }
          }
        } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
          changed = true;
        } else if ($.isArray(mutations)) {
          $.each(mutations, function (evt, mutation) {
            if (self._isChangeMutation(evt, mutation)) {
              // We've found a change mutation.
              // Let's escape from the loop and continue
              changed = true;
              return false;
            }
          });
        }

        return changed;
      };

      Select2.prototype._syncSubtree = function (evt, mutations) {
        var changed = this._isChangeMutation(evt, mutations);

        var self = this; // Only re-pull the data if we think there is a change

        if (changed) {
          this.dataAdapter.current(function (currentData) {
            self.trigger('selection:update', {
              data: currentData
            });
          });
        }
      };
      /**
       * Override the trigger method to automatically trigger pre-events when
       * there are events that can be prevented.
       */


      Select2.prototype.trigger = function (name, args) {
        var actualTrigger = Select2.__super__.trigger;
        var preTriggerMap = {
          'open': 'opening',
          'close': 'closing',
          'select': 'selecting',
          'unselect': 'unselecting',
          'clear': 'clearing'
        };

        if (args === undefined) {
          args = {};
        }

        if (name in preTriggerMap) {
          var preTriggerName = preTriggerMap[name];
          var preTriggerArgs = {
            prevented: false,
            name: name,
            args: args
          };
          actualTrigger.call(this, preTriggerName, preTriggerArgs);

          if (preTriggerArgs.prevented) {
            args.prevented = true;
            return;
          }
        }

        actualTrigger.call(this, name, args);
      };

      Select2.prototype.toggleDropdown = function () {
        if (this.isDisabled()) {
          return;
        }

        if (this.isOpen()) {
          this.close();
        } else {
          this.open();
        }
      };

      Select2.prototype.open = function () {
        if (this.isOpen()) {
          return;
        }

        if (this.isDisabled()) {
          return;
        }

        this.trigger('query', {});
      };

      Select2.prototype.close = function (evt) {
        if (!this.isOpen()) {
          return;
        }

        this.trigger('close', {
          originalEvent: evt
        });
      };
      /**
       * Helper method to abstract the "enabled" (not "disabled") state of this
       * object.
       *
       * @return {true} if the instance is not disabled.
       * @return {false} if the instance is disabled.
       */


      Select2.prototype.isEnabled = function () {
        return !this.isDisabled();
      };
      /**
       * Helper method to abstract the "disabled" state of this object.
       *
       * @return {true} if the disabled option is true.
       * @return {false} if the disabled option is false.
       */


      Select2.prototype.isDisabled = function () {
        return this.options.get('disabled');
      };

      Select2.prototype.isOpen = function () {
        return this.$container.hasClass('select2-container--open');
      };

      Select2.prototype.hasFocus = function () {
        return this.$container.hasClass('select2-container--focus');
      };

      Select2.prototype.focus = function (data) {
        // No need to re-trigger focus events if we are already focused
        if (this.hasFocus()) {
          return;
        }

        this.$container.addClass('select2-container--focus');
        this.trigger('focus', {});
      };

      Select2.prototype.enable = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("enable")` method has been deprecated and will' + ' be removed in later Select2 versions. Use $element.prop("disabled")' + ' instead.');
        }

        if (args == null || args.length === 0) {
          args = [true];
        }

        var disabled = !args[0];
        this.$element.prop('disabled', disabled);
      };

      Select2.prototype.data = function () {
        if (this.options.get('debug') && arguments.length > 0 && window.console && console.warn) {
          console.warn('Select2: Data can no longer be set using `select2("data")`. You ' + 'should consider setting the value instead using `$element.val()`.');
        }

        var data = [];
        this.dataAdapter.current(function (currentData) {
          data = currentData;
        });
        return data;
      };

      Select2.prototype.val = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("val")` method has been deprecated and will be' + ' removed in later Select2 versions. Use $element.val() instead.');
        }

        if (args == null || args.length === 0) {
          return this.$element.val();
        }

        var newVal = args[0];

        if ($.isArray(newVal)) {
          newVal = $.map(newVal, function (obj) {
            return obj.toString();
          });
        }

        this.$element.val(newVal).trigger('input').trigger('change');
      };

      Select2.prototype.destroy = function () {
        this.$container.remove();

        if (this.$element[0].detachEvent) {
          this.$element[0].detachEvent('onpropertychange', this._syncA);
        }

        if (this._observer != null) {
          this._observer.disconnect();

          this._observer = null;
        } else if (this.$element[0].removeEventListener) {
          this.$element[0].removeEventListener('DOMAttrModified', this._syncA, false);
          this.$element[0].removeEventListener('DOMNodeInserted', this._syncS, false);
          this.$element[0].removeEventListener('DOMNodeRemoved', this._syncS, false);
        }

        this._syncA = null;
        this._syncS = null;
        this.$element.off('.select2');
        this.$element.attr('tabindex', Utils.GetData(this.$element[0], 'old-tabindex'));
        this.$element.removeClass('select2-hidden-accessible');
        this.$element.attr('aria-hidden', 'false');
        Utils.RemoveData(this.$element[0]);
        this.$element.removeData('select2');
        this.dataAdapter.destroy();
        this.selection.destroy();
        this.dropdown.destroy();
        this.results.destroy();
        this.dataAdapter = null;
        this.selection = null;
        this.dropdown = null;
        this.results = null;
      };

      Select2.prototype.render = function () {
        var $container = $('<span class="select2 select2-container">' + '<span class="selection"></span>' + '<span class="dropdown-wrapper" aria-hidden="true"></span>' + '</span>');
        $container.attr('dir', this.options.get('dir'));
        this.$container = $container;
        this.$container.addClass('select2-container--' + this.options.get('theme'));
        Utils.StoreData($container[0], 'element', this.$element);
        return $container;
      };

      return Select2;
    });
    S2.define('jquery-mousewheel', ['jquery'], function ($) {
      // Used to shim jQuery.mousewheel for non-full builds.
      return $;
    });
    S2.define('jquery.select2', ['jquery', 'jquery-mousewheel', './select2/core', './select2/defaults', './select2/utils'], function ($, _, Select2, Defaults, Utils) {
      if ($.fn.select2 == null) {
        // All methods that should return the element
        var thisMethods = ['open', 'close', 'destroy'];

        $.fn.select2 = function (options) {
          options = options || {};

          if (_typeof(options) === 'object') {
            this.each(function () {
              var instanceOptions = $.extend(true, {}, options);
              var instance = new Select2($(this), instanceOptions);
            });
            return this;
          } else if (typeof options === 'string') {
            var ret;
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
              var instance = Utils.GetData(this, 'select2');

              if (instance == null && window.console && console.error) {
                console.error('The select2(\'' + options + '\') method was called on an ' + 'element that is not using Select2.');
              }

              ret = instance[options].apply(instance, args);
            }); // Check if we should be returning `this`

            if ($.inArray(options, thisMethods) > -1) {
              return this;
            }

            return ret;
          } else {
            throw new Error('Invalid arguments for Select2: ' + options);
          }
        };
      }

      if ($.fn.select2.defaults == null) {
        $.fn.select2.defaults = Defaults;
      }

      return Select2;
    }); // Return the AMD loader configuration so it can be used outside of this file

    return {
      define: S2.define,
      require: S2.require
    };
  }(); // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe


  var select2 = S2.require('jquery.select2'); // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.


  jQuery.fn.select2.amd = S2; // Return the Select2 instance for anyone who is importing it.

  return select2;
});

/***/ }),

/***/ "./src/assets/js/checkout.js":
/*!***********************************!*\
  !*** ./src/assets/js/checkout.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  // elements
  var els = {
    billing_country: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_country"),
    billing_state: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_state"),
    billing_city: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city"),
    billing_city_field: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city_field"),
    billing_subdistrict: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict"),
    billing_subdistrict_field: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict_field"),
    shipping_country: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_country"),
    shipping_state: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_state"),
    shipping_city: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city"),
    shipping_city_field: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city_field"),
    shipping_subdistrict: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict"),
    shipping_subdistrict_field: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict_field")
  }; // Initialize select2

  els.billing_subdistrict.select2();
  els.shipping_subdistrict.select2(); // Initialize address fields

  sdokr_billing_address_fields();
  sdokr_shipping_address_fields(); // Initialize billing city and subdistrict options

  if (els.billing_country.val() == "ID") {
    sdokr_get_billing_city_options().then(function () {
      sdokr_set_session_subdistrict("billing", "");
    });
    sdokr_get_billing_subdistrict_options().then(function () {
      sdokr_set_session_subdistrict("billing", "");
    });
  } // Initialize shipping city and subdistrict options


  if (els.shipping_country.val() == "ID") {
    sdokr_get_shipping_city_options().then(function () {
      sdokr_set_session_subdistrict("shipping", "");
    });
    sdokr_get_shipping_subdistrict_options().then(function () {
      sdokr_set_session_subdistrict("shipping", "");
    });
  } // On change billing country


  els.billing_country.on("change", function () {
    sdokr_billing_address_fields();
    sdokr_set_session_subdistrict("billing", "");
  }); // On change billing state

  els.billing_state.on("change", function () {
    if (els.billing_country.val() != "ID") {
      return;
    }

    sdokr_get_billing_city_options().then(function () {
      sdokr_set_session_subdistrict("billing", "");
    });
  }); // On change billing city

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city_field").on("change", "#billing_city", function () {
    if (els.billing_country.val() != "ID") {
      return;
    }

    sdokr_get_billing_subdistrict_options().then(function () {
      sdokr_set_session_subdistrict("billing", "");
    });
  }); // On change billing subdistrict

  els.billing_subdistrict.on("change", function () {
    sdokr_set_session_subdistrict("billing", jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
  }); // On change shipping country

  els.shipping_country.on("change", function () {
    sdokr_shipping_address_fields();
    sdokr_set_session_subdistrict("billing", "");
  }); // On change shipping state

  els.shipping_state.on("change", function () {
    if (els.shipping_country.val() != "ID") {
      return;
    }

    sdokr_get_shipping_city_options().then(function () {
      sdokr_set_session_subdistrict("shipping", "");
    });
  }); // On change shipping city

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city_field").on("change", "#shipping_city", function () {
    if (els.shipping_country.val() != "ID") {
      return;
    }

    sdokr_get_shipping_subdistrict_options().then(function () {
      sdokr_set_session_subdistrict("shipping", "");
    });
  }); // On change shipping subdistrict

  els.shipping_subdistrict.on("change", function () {
    sdokr_set_session_subdistrict("shipping", jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
  }); // Show hide billing subdistrict

  function sdokr_billing_address_fields() {
    if (els.billing_country.val() == "ID") {
      // Setup subdistrict
      els.billing_subdistrict_field.children("label").html("".concat(sdongkir_lcz.subdistrict_text, "&nbsp;<abbr class=\"required\" title=\"required\">*</abbr>"));
      els.billing_subdistrict_field.fadeIn(); // Setup city

      var billing_city_select = "<select name=\"billing_city\" id=\"billing_city\" class=\"select\" autocomplete=\"address-level2\" data-placeholder=\"".concat(sdongkir_lcz.please_select_text, "\"></select>");
      els.billing_city_field.children(".woocommerce-input-wrapper").html(billing_city_select);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").select2();
    } else {
      // Setup subdistrict
      els.billing_subdistrict_field.fadeOut(); // Setup city

      var billing_city_input = '<input type="text" class="input-text " name="billing_city" id="billing_city" placeholder="" value="" autocomplete="address-level2">';
      els.billing_city_field.children(".woocommerce-input-wrapper").html(billing_city_input);
    }
  } // Show hide shipping subdistrict


  function sdokr_shipping_address_fields() {
    if (els.shipping_country.val() == "ID") {
      // Setup subdistrict
      els.shipping_subdistrict_field.children("label").html("".concat(sdongkir_lcz.subdistrict_text, "&nbsp;<abbr class=\"required\" title=\"required\">*</abbr>"));
      els.shipping_subdistrict_field.fadeIn(); // Setup city

      var shipping_city_select = "<select name=\"shipping_city\" id=\"shipping_city\" class=\"select\" autocomplete=\"address-level2\" data-placeholder=\"".concat(sdongkir_lcz.please_select_text, "\"></select>");
      els.shipping_city_field.children(".woocommerce-input-wrapper").html(shipping_city_select);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").select2();
    } else {
      // Setup subdistrict
      els.shipping_subdistrict_field.fadeOut(); // Setup city

      var shipping_city_input = '<input type="text" class="input-text " name="shipping_city" id="shipping_city" placeholder="" value="" autocomplete="address-level2">';
      els.shipping_city_field.children(".woocommerce-input-wrapper").html(shipping_city_input);
    }
  } // Get billing city options


  function sdokr_get_billing_city_options() {
    return new Promise(function (resolve, reject) {
      if (els.billing_state.val() == "") {
        resolve();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").attr("disabled", true);
      els.billing_subdistrict.attr("disabled", true);
      var state = els.billing_state.val().split("-");
      var province_id = state[1];
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
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").empty();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").val() == "";
          els.billing_subdistrict.empty();
          els.billing_subdistrict.val() == "";
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          cities.forEach(function (city) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", city.city_id).text("".concat(city.type, " ").concat(city.name)));
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").attr("disabled", false);
          els.billing_subdistrict.attr("disabled", false);
          resolve();
        },
        error: function error(err) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").attr("disabled", false);
          els.billing_subdistrict.attr("disabled", false);
          reject("Something went wrong");
        }
      });
    });
  } // Get shipping city options


  function sdokr_get_shipping_city_options() {
    return new Promise(function (resolve, reject) {
      if (els.shipping_state.val() == "") {
        resolve();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").attr("disabled", true);
      els.shipping_subdistrict.attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_get_cities_by_province_id",
          nonce_ajax: sdongkir_lcz.nonce,
          province_id: els.shipping_state.val()
        },
        success: function success(res) {
          var cities = res.data.data;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").empty();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").val() == "";
          els.shipping_subdistrict.empty();
          els.shipping_subdistrict.val() == "";
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          cities.forEach(function (city) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", city.city_id).text("".concat(city.type, " ").concat(city.name)));
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").attr("disabled", false);
          els.shipping_subdistrict.attr("disabled", false);
          resolve();
        },
        error: function error(err) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").attr("disabled", false);
          els.shipping_subdistrict.attr("disabled", false);
          reject("Something went wrong");
        }
      });
    });
  } // Get billing subdistrict options


  function sdokr_get_billing_subdistrict_options() {
    return new Promise(function (resolve, reject) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").val() == "") {
        resolve();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_get_subdistricts_by_city_id",
          nonce_ajax: sdongkir_lcz.nonce,
          city_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").val()
        },
        success: function success(res) {
          var subdistricts = res.data.data;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").empty();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").val() == "";
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          subdistricts.forEach(function (subdistrict) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", subdistrict.subdistrict_id).text(subdistrict.name));
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").attr("disabled", false);
          resolve();
        },
        error: function error(err) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").attr("disabled", false);
          reject("Something went wrong");
        }
      });
    });
  } // Get shipping subdistrict options


  function sdokr_get_shipping_subdistrict_options() {
    return new Promise(function (resolve, reject) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").val() == "") {
        resolve();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_get_subdistricts_by_city_id",
          nonce_ajax: sdongkir_lcz.nonce,
          city_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").val()
        },
        success: function success(res) {
          var subdistricts = res.data.data;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").empty();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").val() == "";
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          subdistricts.forEach(function (subdistrict) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", subdistrict.subdistrict_id).text(subdistrict.name));
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").attr("disabled", false);
          resolve();
        },
        error: function error(err) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").attr("disabled", false);
          reject("Something went wrong");
        }
      });
    });
  } // Set session subdistrict


  function sdokr_set_session_subdistrict(type, subdistrict_id) {
    return new Promise(function (resolve, reject) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_set_session_subdistrict",
          nonce_ajax: sdongkir_lcz.nonce,
          subdistrict_id: subdistrict_id,
          type: type
        },
        success: function success(res) {
          resolve(res);
        }
      });
    }).then(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").trigger("update_checkout");
    });
  }
});

/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./src/assets/js/checkout.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Course\WooCommerce\JuanPablo\wp-content\plugins\ongkir\src\assets\js\checkout.js */"./src/assets/js/checkout.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsImpRdWVyeSIsIlMyIiwiZm4iLCJzZWxlY3QyIiwiYW1kIiwicmVxdWlyZWpzIiwicmVxdWlyZSIsInVuZGVmIiwibWFpbiIsInJlcSIsIm1ha2VNYXAiLCJoYW5kbGVycyIsImRlZmluZWQiLCJ3YWl0aW5nIiwiY29uZmlnIiwiZGVmaW5pbmciLCJoYXNPd24iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcyIsInNsaWNlIiwianNTdWZmaXhSZWdFeHAiLCJoYXNQcm9wIiwib2JqIiwicHJvcCIsImNhbGwiLCJub3JtYWxpemUiLCJuYW1lIiwiYmFzZU5hbWUiLCJuYW1lUGFydHMiLCJuYW1lU2VnbWVudCIsIm1hcFZhbHVlIiwiZm91bmRNYXAiLCJsYXN0SW5kZXgiLCJmb3VuZEkiLCJmb3VuZFN0YXJNYXAiLCJzdGFySSIsImkiLCJqIiwicGFydCIsIm5vcm1hbGl6ZWRCYXNlUGFydHMiLCJiYXNlUGFydHMiLCJzcGxpdCIsIm1hcCIsInN0YXJNYXAiLCJsZW5ndGgiLCJub2RlSWRDb21wYXQiLCJ0ZXN0IiwicmVwbGFjZSIsImNoYXJBdCIsImNvbmNhdCIsInNwbGljZSIsImpvaW4iLCJtYWtlUmVxdWlyZSIsInJlbE5hbWUiLCJmb3JjZVN5bmMiLCJhcmdzIiwiYXJndW1lbnRzIiwicHVzaCIsImFwcGx5IiwibWFrZU5vcm1hbGl6ZSIsIm1ha2VMb2FkIiwiZGVwTmFtZSIsInZhbHVlIiwiY2FsbERlcCIsIkVycm9yIiwic3BsaXRQcmVmaXgiLCJwcmVmaXgiLCJpbmRleCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJtYWtlUmVsUGFydHMiLCJyZWxQYXJ0cyIsInBsdWdpbiIsInBhcnRzIiwicmVsUmVzb3VyY2VOYW1lIiwiZiIsIm4iLCJwciIsInAiLCJtYWtlQ29uZmlnIiwiZXhwb3J0cyIsImUiLCJtb2R1bGUiLCJpZCIsInVyaSIsImRlcHMiLCJjYWxsYmFjayIsImNqc01vZHVsZSIsInJldCIsImNhbGxiYWNrVHlwZSIsInVzaW5nRXhwb3J0cyIsImxvYWQiLCJ1bmRlZmluZWQiLCJhbHQiLCJzZXRUaW1lb3V0IiwiY2ZnIiwiX2RlZmluZWQiLCJfJCIsIiQiLCJjb25zb2xlIiwiZXJyb3IiLCJVdGlscyIsIkV4dGVuZCIsIkNoaWxkQ2xhc3MiLCJTdXBlckNsYXNzIiwiX19oYXNQcm9wIiwiQmFzZUNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJrZXkiLCJfX3N1cGVyX18iLCJnZXRNZXRob2RzIiwidGhlQ2xhc3MiLCJwcm90byIsIm1ldGhvZHMiLCJtZXRob2ROYW1lIiwibSIsIkRlY29yYXRlIiwiRGVjb3JhdG9yQ2xhc3MiLCJkZWNvcmF0ZWRNZXRob2RzIiwic3VwZXJNZXRob2RzIiwiRGVjb3JhdGVkQ2xhc3MiLCJ1bnNoaWZ0IiwiQXJyYXkiLCJhcmdDb3VudCIsImNhbGxlZENvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJjdHIiLCJzdXBlck1ldGhvZCIsImNhbGxlZE1ldGhvZCIsIm9yaWdpbmFsTWV0aG9kIiwiZGVjb3JhdGVkTWV0aG9kIiwiZCIsIk9ic2VydmFibGUiLCJsaXN0ZW5lcnMiLCJvbiIsImV2ZW50IiwidHJpZ2dlciIsInBhcmFtcyIsIl90eXBlIiwiaW52b2tlIiwibGVuIiwiZ2VuZXJhdGVDaGFycyIsImNoYXJzIiwicmFuZG9tQ2hhciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiYmluZCIsImZ1bmMiLCJjb250ZXh0IiwiX2NvbnZlcnREYXRhIiwiZGF0YSIsIm9yaWdpbmFsS2V5Iiwia2V5cyIsImRhdGFMZXZlbCIsImsiLCJ0b0xvd2VyQ2FzZSIsImhhc1Njcm9sbCIsImVsIiwiJGVsIiwib3ZlcmZsb3dYIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImlubmVyV2lkdGgiLCJzY3JvbGxXaWR0aCIsImVzY2FwZU1hcmt1cCIsIm1hcmt1cCIsInJlcGxhY2VNYXAiLCJTdHJpbmciLCJtYXRjaCIsImFwcGVuZE1hbnkiLCIkZWxlbWVudCIsIiRub2RlcyIsImpxdWVyeSIsInN1YnN0ciIsIiRqcU5vZGVzIiwibm9kZSIsImFkZCIsImFwcGVuZCIsIl9fY2FjaGUiLCJHZXRVbmlxdWVFbGVtZW50SWQiLCJlbGVtZW50Iiwic2VsZWN0MklkIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiU3RvcmVEYXRhIiwiR2V0RGF0YSIsIlJlbW92ZURhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJSZXN1bHRzIiwib3B0aW9ucyIsImRhdGFBZGFwdGVyIiwicmVuZGVyIiwiJHJlc3VsdHMiLCJnZXQiLCJhdHRyIiwiY2xlYXIiLCJlbXB0eSIsImRpc3BsYXlNZXNzYWdlIiwiaGlkZUxvYWRpbmciLCIkbWVzc2FnZSIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJoaWRlTWVzc2FnZXMiLCJmaW5kIiwicmVtb3ZlIiwiJG9wdGlvbnMiLCJyZXN1bHRzIiwiY2hpbGRyZW4iLCJzb3J0IiwiaXRlbSIsIiRvcHRpb24iLCJvcHRpb24iLCJwb3NpdGlvbiIsIiRkcm9wZG93biIsIiRyZXN1bHRzQ29udGFpbmVyIiwic29ydGVyIiwiaGlnaGxpZ2h0Rmlyc3RJdGVtIiwiJHNlbGVjdGVkIiwiZmlsdGVyIiwiZmlyc3QiLCJlbnN1cmVIaWdobGlnaHRWaXNpYmxlIiwic2V0Q2xhc3NlcyIsInNlbGYiLCJjdXJyZW50Iiwic2VsZWN0ZWQiLCJzZWxlY3RlZElkcyIsInMiLCJlYWNoIiwiaW5BcnJheSIsInNob3dMb2FkaW5nIiwibG9hZGluZ01vcmUiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJ0ZXh0IiwiJGxvYWRpbmciLCJwcmVwZW5kIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cnMiLCJtYXRjaGVzIiwid2luZG93IiwiRWxlbWVudCIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiX3Jlc3VsdElkIiwidGl0bGUiLCJyb2xlIiwidmFsIiwibGFiZWwiLCIkbGFiZWwiLCJ0ZW1wbGF0ZSIsIiRjaGlsZHJlbiIsImMiLCJjaGlsZCIsIiRjaGlsZCIsIiRjaGlsZHJlbkNvbnRhaW5lciIsImNvbnRhaW5lciIsIiRjb250YWluZXIiLCJpc09wZW4iLCJyZW1vdmVBdHRyIiwiJGhpZ2hsaWdodGVkIiwiZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzIiwiY3VycmVudEluZGV4IiwibmV4dEluZGV4IiwiJG5leHQiLCJlcSIsImN1cnJlbnRPZmZzZXQiLCJvZmZzZXQiLCJ0b3AiLCJuZXh0VG9wIiwibmV4dE9mZnNldCIsInNjcm9sbFRvcCIsIm91dGVySGVpZ2h0IiwibmV4dEJvdHRvbSIsImFkZENsYXNzIiwibW91c2V3aGVlbCIsImJvdHRvbSIsImRlbHRhWSIsImlzQXRUb3AiLCJpc0F0Qm90dG9tIiwiaGVpZ2h0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJldnQiLCIkdGhpcyIsIm9yaWdpbmFsRXZlbnQiLCJyZW1vdmVDbGFzcyIsImRlc3Ryb3kiLCJvZmZzZXREZWx0YSIsInJlc3VsdCIsImNvbnRlbnQiLCJkaXNwbGF5IiwiaW5uZXJIVE1MIiwiS0VZUyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDIiwiU1BBQ0UiLCJQQUdFX1VQIiwiUEFHRV9ET1dOIiwiRU5EIiwiSE9NRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIkRFTEVURSIsIkJhc2VTZWxlY3Rpb24iLCIkc2VsZWN0aW9uIiwiX3RhYmluZGV4IiwicmVzdWx0c0lkIiwiX2hhbmRsZUJsdXIiLCJ3aGljaCIsInVwZGF0ZSIsIl9hdHRhY2hDbG9zZUhhbmRsZXIiLCJfZGV0YWNoQ2xvc2VIYW5kbGVyIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwiYm9keSIsIiR0YXJnZXQiLCJ0YXJnZXQiLCIkc2VsZWN0IiwiY2xvc2VzdCIsIiRhbGwiLCJvZmYiLCIkc2VsZWN0aW9uQ29udGFpbmVyIiwiaXNFbmFibGVkIiwiaXNEaXNhYmxlZCIsIlNpbmdsZVNlbGVjdGlvbiIsImh0bWwiLCIkcmVuZGVyZWQiLCJzZWxlY3Rpb25Db250YWluZXIiLCJzZWxlY3Rpb24iLCJmb3JtYXR0ZWQiLCJNdWx0aXBsZVNlbGVjdGlvbiIsIiRyZW1vdmUiLCJwYXJlbnQiLCIkc2VsZWN0aW9ucyIsIlBsYWNlaG9sZGVyIiwiZGVjb3JhdGVkIiwicGxhY2Vob2xkZXIiLCJub3JtYWxpemVQbGFjZWhvbGRlciIsIl8iLCJjcmVhdGVQbGFjZWhvbGRlciIsIiRwbGFjZWhvbGRlciIsInNpbmdsZVBsYWNlaG9sZGVyIiwibXVsdGlwbGVTZWxlY3Rpb25zIiwiQWxsb3dDbGVhciIsIl9oYW5kbGVDbGVhciIsIl9oYW5kbGVLZXlib2FyZENsZWFyIiwiJGNsZWFyIiwicHJldmlvdXNWYWwiLCJ1bnNlbGVjdERhdGEiLCJwcmV2ZW50ZWQiLCJyZW1vdmVBbGwiLCJTZWFyY2giLCIkc2VhcmNoIiwiJHNlYXJjaENvbnRhaW5lciIsIl90cmFuc2ZlclRhYkluZGV4IiwiX2tleVVwUHJldmVudGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiJHByZXZpb3VzQ2hvaWNlIiwicHJldiIsInNlYXJjaFJlbW92ZUNob2ljZSIsIm1zaWUiLCJkb2N1bWVudE1vZGUiLCJkaXNhYmxlSW5wdXRFdmVudHMiLCJ0eXBlIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoSGFkRm9jdXMiLCJyZXNpemVTZWFyY2giLCJpbnB1dCIsInRlcm0iLCJjc3MiLCJ3aWR0aCIsIm1pbmltdW1XaWR0aCIsIkV2ZW50UmVsYXkiLCJyZWxheUV2ZW50cyIsInByZXZlbnRhYmxlRXZlbnRzIiwiRXZlbnQiLCJUcmFuc2xhdGlvbiIsImRpY3QiLCJhbGwiLCJleHRlbmQiLCJ0cmFuc2xhdGlvbiIsIl9jYWNoZSIsImxvYWRQYXRoIiwicGF0aCIsInRyYW5zbGF0aW9ucyIsImRpYWNyaXRpY3MiLCJCYXNlQWRhcHRlciIsInF1ZXJ5IiwiZ2VuZXJhdGVSZXN1bHRJZCIsIlNlbGVjdEFkYXB0ZXIiLCJzZWxlY3QiLCJpcyIsImN1cnJlbnREYXRhIiwidW5zZWxlY3QiLCJhZGRPcHRpb25zIiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJub3JtYWxpemVkRGF0YSIsIl9ub3JtYWxpemVJdGVtIiwiZGVmYXVsdHMiLCJtYXRjaGVyIiwiQXJyYXlBZGFwdGVyIiwiX2RhdGFUb0NvbnZlcnQiLCJjb252ZXJ0VG9PcHRpb25zIiwiZWxtIiwiJGV4aXN0aW5nIiwiZXhpc3RpbmdJZHMiLCJvbmx5SXRlbSIsIiRleGlzdGluZ09wdGlvbiIsImV4aXN0aW5nRGF0YSIsIm5ld0RhdGEiLCIkbmV3T3B0aW9uIiwicmVwbGFjZVdpdGgiLCJBamF4QWRhcHRlciIsImFqYXhPcHRpb25zIiwiX2FwcGx5RGVmYXVsdHMiLCJwcm9jZXNzUmVzdWx0cyIsInEiLCJ0cmFuc3BvcnQiLCJzdWNjZXNzIiwiZmFpbHVyZSIsIiRyZXF1ZXN0IiwiYWpheCIsInRoZW4iLCJmYWlsIiwiX3JlcXVlc3QiLCJpc0Z1bmN0aW9uIiwiYWJvcnQiLCJ1cmwiLCJyZXF1ZXN0IiwiaXNBcnJheSIsInN0YXR1cyIsImRlbGF5IiwiX3F1ZXJ5VGltZW91dCIsImNsZWFyVGltZW91dCIsIlRhZ3MiLCJ0YWdzIiwiY3JlYXRlVGFnIiwiaW5zZXJ0VGFnIiwidCIsInRhZyIsIl9yZW1vdmVPbGRUYWdzIiwicGFnZSIsIndyYXBwZXIiLCJjaGVja0NoaWxkcmVuIiwib3B0aW9uVGV4dCIsInRvVXBwZXJDYXNlIiwicGFyYW1zVGVybSIsImNoZWNrVGV4dCIsInRyaW0iLCJUb2tlbml6ZXIiLCJ0b2tlbml6ZXIiLCJkcm9wZG93biIsImNyZWF0ZUFuZFNlbGVjdCIsIiRleGlzdGluZ09wdGlvbnMiLCJ0b2tlbkRhdGEiLCJzZXBhcmF0b3JzIiwidGVybUNoYXIiLCJwYXJ0UGFyYW1zIiwiTWluaW11bUlucHV0TGVuZ3RoIiwiJGUiLCJtaW5pbXVtSW5wdXRMZW5ndGgiLCJtaW5pbXVtIiwiTWF4aW11bUlucHV0TGVuZ3RoIiwibWF4aW11bUlucHV0TGVuZ3RoIiwibWF4aW11bSIsIk1heGltdW1TZWxlY3Rpb25MZW5ndGgiLCJtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoIiwiX2NoZWNrSWZNYXhpbXVtU2VsZWN0ZWQiLCJzdWNjZXNzQ2FsbGJhY2siLCJjb3VudCIsIkRyb3Bkb3duIiwic2hvd1NlYXJjaCIsIkhpZGVQbGFjZWhvbGRlciIsInJlbW92ZVBsYWNlaG9sZGVyIiwibW9kaWZpZWREYXRhIiwiSW5maW5pdGVTY3JvbGwiLCJsYXN0UGFyYW1zIiwiJGxvYWRpbmdNb3JlIiwiY3JlYXRlTG9hZGluZ01vcmUiLCJzaG93TG9hZGluZ01vcmUiLCJsb2FkTW9yZUlmTmVlZGVkIiwiaXNMb2FkTW9yZVZpc2libGUiLCJkb2N1bWVudEVsZW1lbnQiLCJsb2FkaW5nTW9yZU9mZnNldCIsImxvYWRNb3JlIiwicGFnaW5hdGlvbiIsIm1vcmUiLCJBdHRhY2hCb2R5IiwiJGRyb3Bkb3duUGFyZW50IiwiX3Nob3dEcm9wZG93biIsIl9hdHRhY2hQb3NpdGlvbmluZ0hhbmRsZXIiLCJfYmluZENvbnRhaW5lclJlc3VsdEhhbmRsZXJzIiwiX2hpZGVEcm9wZG93biIsIl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIiLCIkZHJvcGRvd25Db250YWluZXIiLCJkZXRhY2giLCJfY29udGFpbmVyUmVzdWx0c0hhbmRsZXJzQm91bmQiLCJfcG9zaXRpb25Ecm9wZG93biIsIl9yZXNpemVEcm9wZG93biIsInNjcm9sbEV2ZW50IiwicmVzaXplRXZlbnQiLCJvcmllbnRhdGlvbkV2ZW50IiwiJHdhdGNoZXJzIiwicGFyZW50cyIsIngiLCJzY3JvbGxMZWZ0IiwieSIsImV2IiwiJHdpbmRvdyIsImlzQ3VycmVudGx5QWJvdmUiLCJoYXNDbGFzcyIsImlzQ3VycmVudGx5QmVsb3ciLCJuZXdEaXJlY3Rpb24iLCJ2aWV3cG9ydCIsImVub3VnaFJvb21BYm92ZSIsImVub3VnaFJvb21CZWxvdyIsImxlZnQiLCIkb2Zmc2V0UGFyZW50Iiwib2Zmc2V0UGFyZW50IiwicGFyZW50T2Zmc2V0IiwiaXNDb25uZWN0ZWQiLCJvdXRlcldpZHRoIiwibWluV2lkdGgiLCJhcHBlbmRUbyIsImNvdW50UmVzdWx0cyIsIk1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwibWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJJbmZpbml0eSIsIlNlbGVjdE9uQ2xvc2UiLCJfaGFuZGxlU2VsZWN0T25DbG9zZSIsIm9yaWdpbmFsU2VsZWN0MkV2ZW50IiwiJGhpZ2hsaWdodGVkUmVzdWx0cyIsIkNsb3NlT25TZWxlY3QiLCJfc2VsZWN0VHJpZ2dlcmVkIiwiY3RybEtleSIsIm1ldGFLZXkiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJvdmVyQ2hhcnMiLCJpbnB1dFRvb1Nob3J0IiwicmVtYWluaW5nQ2hhcnMiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJyZW1vdmVBbGxJdGVtcyIsIlJlc3VsdHNMaXN0IiwiU2VsZWN0aW9uU2VhcmNoIiwiRElBQ1JJVElDUyIsIlNlbGVjdERhdGEiLCJBcnJheURhdGEiLCJBamF4RGF0YSIsIkRyb3Bkb3duU2VhcmNoIiwiRW5nbGlzaFRyYW5zbGF0aW9uIiwiRGVmYXVsdHMiLCJyZXNldCIsInRva2VuU2VwYXJhdG9ycyIsIlF1ZXJ5IiwiYW1kQmFzZSIsImluaXRTZWxlY3Rpb24iLCJJbml0U2VsZWN0aW9uIiwicmVzdWx0c0FkYXB0ZXIiLCJzZWxlY3RPbkNsb3NlIiwiZHJvcGRvd25BZGFwdGVyIiwibXVsdGlwbGUiLCJTZWFyY2hhYmxlRHJvcGRvd24iLCJjbG9zZU9uU2VsZWN0IiwiZHJvcGRvd25Dc3NDbGFzcyIsImRyb3Bkb3duQ3NzIiwiYWRhcHREcm9wZG93bkNzc0NsYXNzIiwiRHJvcGRvd25DU1MiLCJzZWxlY3Rpb25BZGFwdGVyIiwiYWxsb3dDbGVhciIsImNvbnRhaW5lckNzc0NsYXNzIiwiY29udGFpbmVyQ3NzIiwiYWRhcHRDb250YWluZXJDc3NDbGFzcyIsIkNvbnRhaW5lckNTUyIsImxhbmd1YWdlIiwiX3Jlc29sdmVMYW5ndWFnZSIsInVuaXF1ZUxhbmd1YWdlcyIsImwiLCJfcHJvY2Vzc1RyYW5zbGF0aW9ucyIsImRlYnVnIiwic3RyaXBEaWFjcml0aWNzIiwiYSIsIm9yaWdpbmFsIiwiYW1kTGFuZ3VhZ2VCYXNlIiwiZHJvcGRvd25BdXRvV2lkdGgiLCJzY3JvbGxBZnRlclNlbGVjdCIsInRlbXBsYXRlUmVzdWx0IiwidGVtcGxhdGVTZWxlY3Rpb24iLCJ0aGVtZSIsImFwcGx5RnJvbUVsZW1lbnQiLCJvcHRpb25MYW5ndWFnZSIsImRlZmF1bHRMYW5ndWFnZSIsImVsZW1lbnRMYW5ndWFnZSIsInBhcmVudExhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiaXNFbXB0eU9iamVjdCIsImlzUGxhaW5PYmplY3QiLCJyZXNvbHZlZExhbmd1YWdlcyIsImxhbmd1YWdlUGFydHMiLCJiYXNlTGFuZ3VhZ2UiLCJsYW5ndWFnZURhdGEiLCJleCIsIndhcm4iLCJzZXQiLCJjYW1lbEtleSIsImNhbWVsQ2FzZSIsImNvbnZlcnRlZERhdGEiLCJPcHRpb25zIiwiZnJvbUVsZW1lbnQiLCJJbnB1dENvbXBhdCIsImV4Y2x1ZGVkRGF0YSIsImRpciIsImRhdGFzZXQiLCJ1cHBlckNhc2VMZXR0ZXIiLCJsZXR0ZXIiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlTmFtZSIsImRhdGFOYW1lIiwiZGF0YVZhbHVlIiwiY2FtZWxEYXRhTmFtZSIsIlNlbGVjdDIiLCJfZ2VuZXJhdGVJZCIsInRhYmluZGV4IiwiRGF0YUFkYXB0ZXIiLCJfcGxhY2VDb250YWluZXIiLCJTZWxlY3Rpb25BZGFwdGVyIiwiRHJvcGRvd25BZGFwdGVyIiwiUmVzdWx0c0FkYXB0ZXIiLCJfYmluZEFkYXB0ZXJzIiwiX3JlZ2lzdGVyRG9tRXZlbnRzIiwiX3JlZ2lzdGVyRGF0YUV2ZW50cyIsIl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cyIsIl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzIiwiX3JlZ2lzdGVyUmVzdWx0c0V2ZW50cyIsIl9yZWdpc3RlckV2ZW50cyIsImluaXRpYWxEYXRhIiwiX3N5bmNBdHRyaWJ1dGVzIiwiaW5zZXJ0QWZ0ZXIiLCJfcmVzb2x2ZVdpZHRoIiwibWV0aG9kIiwiV0lEVEgiLCJzdHlsZVdpZHRoIiwiZWxlbWVudFdpZHRoIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJfc3luY0EiLCJfc3luY1MiLCJfc3luY1N1YnRyZWUiLCJhdHRhY2hFdmVudCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwiX29ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhZGRFdmVudExpc3RlbmVyIiwibm9uUmVsYXlFdmVudHMiLCJ0b2dnbGVEcm9wZG93biIsImZvY3VzIiwiYWx0S2V5IiwiY2xvc2UiLCJvcGVuIiwiX2lzQ2hhbmdlTXV0YXRpb24iLCJjaGFuZ2VkIiwibm9kZU5hbWUiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwibXV0YXRpb24iLCJhY3R1YWxUcmlnZ2VyIiwicHJlVHJpZ2dlck1hcCIsInByZVRyaWdnZXJOYW1lIiwicHJlVHJpZ2dlckFyZ3MiLCJoYXNGb2N1cyIsImVuYWJsZSIsIm5ld1ZhbCIsImRldGFjaEV2ZW50IiwiZGlzY29ubmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVEYXRhIiwidGhpc01ldGhvZHMiLCJpbnN0YW5jZU9wdGlvbnMiLCJpbnN0YW5jZSIsInJlYWR5IiwiZWxzIiwiYmlsbGluZ19jb3VudHJ5IiwiYmlsbGluZ19zdGF0ZSIsImJpbGxpbmdfY2l0eSIsImJpbGxpbmdfY2l0eV9maWVsZCIsImJpbGxpbmdfc3ViZGlzdHJpY3QiLCJiaWxsaW5nX3N1YmRpc3RyaWN0X2ZpZWxkIiwic2hpcHBpbmdfY291bnRyeSIsInNoaXBwaW5nX3N0YXRlIiwic2hpcHBpbmdfY2l0eSIsInNoaXBwaW5nX2NpdHlfZmllbGQiLCJzaGlwcGluZ19zdWJkaXN0cmljdCIsInNoaXBwaW5nX3N1YmRpc3RyaWN0X2ZpZWxkIiwic2Rva3JfYmlsbGluZ19hZGRyZXNzX2ZpZWxkcyIsInNkb2tyX3NoaXBwaW5nX2FkZHJlc3NfZmllbGRzIiwic2Rva3JfZ2V0X2JpbGxpbmdfY2l0eV9vcHRpb25zIiwic2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3QiLCJzZG9rcl9nZXRfYmlsbGluZ19zdWJkaXN0cmljdF9vcHRpb25zIiwic2Rva3JfZ2V0X3NoaXBwaW5nX2NpdHlfb3B0aW9ucyIsInNkb2tyX2dldF9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zIiwic2RvbmdraXJfbGN6Iiwic3ViZGlzdHJpY3RfdGV4dCIsImZhZGVJbiIsImJpbGxpbmdfY2l0eV9zZWxlY3QiLCJwbGVhc2Vfc2VsZWN0X3RleHQiLCJmYWRlT3V0IiwiYmlsbGluZ19jaXR5X2lucHV0Iiwic2hpcHBpbmdfY2l0eV9zZWxlY3QiLCJzaGlwcGluZ19jaXR5X2lucHV0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdGF0ZSIsInByb3ZpbmNlX2lkIiwiYWpheHVybCIsImFjdGlvbiIsIm5vbmNlX2FqYXgiLCJub25jZSIsInJlcyIsImNpdGllcyIsImZvckVhY2giLCJjaXR5IiwiY2l0eV9pZCIsImVyciIsInN1YmRpc3RyaWN0cyIsInN1YmRpc3RyaWN0Iiwic3ViZGlzdHJpY3RfaWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QTNCSztBQTRCZixrQkFBVSxHQTVCSztBQTZCZixrQkFBVSxHQTdCSztBQThCZixrQkFBVSxHQTlCSztBQStCZixrQkFBVSxHQS9CSztBQWdDZixrQkFBVSxHQWhDSztBQWlDZixrQkFBVSxHQWpDSztBQWtDZixrQkFBVSxJQWxDSztBQW1DZixnQkFBVSxJQW5DSztBQW9DZixrQkFBVSxJQXBDSztBQXFDZixrQkFBVSxJQXJDSztBQXNDZixrQkFBVSxJQXRDSztBQXVDZixrQkFBVSxJQXZDSztBQXdDZixrQkFBVSxJQXhDSztBQXlDZixrQkFBVSxJQXpDSztBQTBDZixrQkFBVSxJQTFDSztBQTJDZixrQkFBVSxHQTNDSztBQTRDZixrQkFBVSxHQTVDSztBQTZDZixrQkFBVSxHQTdDSztBQThDZixrQkFBVSxHQTlDSztBQStDZixrQkFBVSxHQS9DSztBQWdEZixrQkFBVSxHQWhESztBQWlEZixrQkFBVSxHQWpESztBQWtEZixrQkFBVSxHQWxESztBQW1EZixrQkFBVSxHQW5ESztBQW9EZixrQkFBVSxHQXBESztBQXFEZixrQkFBVSxHQXJESztBQXNEZixrQkFBVSxHQXRESztBQXVEZixrQkFBVSxHQXZESztBQXdEZixrQkFBVSxHQXhESztBQXlEZixnQkFBVSxHQXpESztBQTBEZixrQkFBVSxHQTFESztBQTJEZixrQkFBVSxHQTNESztBQTREZixrQkFBVSxHQTVESztBQTZEZixrQkFBVSxHQTdESztBQThEZixrQkFBVSxHQTlESztBQStEZixrQkFBVSxHQS9ESztBQWdFZixrQkFBVSxHQWhFSztBQWlFZixrQkFBVSxHQWpFSztBQWtFZixrQkFBVSxHQWxFSztBQW1FZixrQkFBVSxHQW5FSztBQW9FZixrQkFBVSxHQXBFSztBQXFFZixrQkFBVSxHQXJFSztBQXNFZixrQkFBVSxHQXRFSztBQXVFZixrQkFBVSxHQXZFSztBQXdFZixrQkFBVSxHQXhFSztBQXlFZixrQkFBVSxHQXpFSztBQTBFZixrQkFBVSxHQTFFSztBQTJFZixrQkFBVSxJQTNFSztBQTRFZixrQkFBVSxJQTVFSztBQTZFZixrQkFBVSxJQTdFSztBQThFZixrQkFBVSxJQTlFSztBQStFZixrQkFBVSxHQS9FSztBQWdGZixrQkFBVSxHQWhGSztBQWlGZixnQkFBVSxHQWpGSztBQWtGZixnQkFBVSxHQWxGSztBQW1GZixnQkFBVSxHQW5GSztBQW9GZixrQkFBVSxHQXBGSztBQXFGZixrQkFBVSxHQXJGSztBQXNGZixrQkFBVSxHQXRGSztBQXVGZixrQkFBVSxHQXZGSztBQXdGZixrQkFBVSxHQXhGSztBQXlGZixrQkFBVSxHQXpGSztBQTBGZixrQkFBVSxHQTFGSztBQTJGZixrQkFBVSxHQTNGSztBQTRGZixrQkFBVSxHQTVGSztBQTZGZixrQkFBVSxHQTdGSztBQThGZixnQkFBVSxHQTlGSztBQStGZixrQkFBVSxHQS9GSztBQWdHZixrQkFBVSxHQWhHSztBQWlHZixrQkFBVSxHQWpHSztBQWtHZixrQkFBVSxHQWxHSztBQW1HZixrQkFBVSxHQW5HSztBQW9HZixrQkFBVSxHQXBHSztBQXFHZixrQkFBVSxHQXJHSztBQXNHZixrQkFBVSxHQXRHSztBQXVHZixrQkFBVSxHQXZHSztBQXdHZixrQkFBVSxHQXhHSztBQXlHZixrQkFBVSxHQXpHSztBQTBHZixrQkFBVSxHQTFHSztBQTJHZixrQkFBVSxHQTNHSztBQTRHZixrQkFBVSxHQTVHSztBQTZHZixrQkFBVSxHQTdHSztBQThHZixrQkFBVSxHQTlHSztBQStHZixrQkFBVSxHQS9HSztBQWdIZixrQkFBVSxHQWhISztBQWlIZixrQkFBVSxHQWpISztBQWtIZixrQkFBVSxHQWxISztBQW1IZixrQkFBVSxHQW5ISztBQW9IZixrQkFBVSxHQXBISztBQXFIZixrQkFBVSxHQXJISztBQXNIZixrQkFBVSxHQXRISztBQXVIZixrQkFBVSxHQXZISztBQXdIZixrQkFBVSxHQXhISztBQXlIZixrQkFBVSxHQXpISztBQTBIZixrQkFBVSxHQTFISztBQTJIZixrQkFBVSxHQTNISztBQTRIZixrQkFBVSxHQTVISztBQTZIZixrQkFBVSxHQTdISztBQThIZixrQkFBVSxHQTlISztBQStIZixrQkFBVSxHQS9ISztBQWdJZixrQkFBVSxHQWhJSztBQWlJZixrQkFBVSxHQWpJSztBQWtJZixrQkFBVSxHQWxJSztBQW1JZixrQkFBVSxHQW5JSztBQW9JZixrQkFBVSxHQXBJSztBQXFJZixrQkFBVSxHQXJJSztBQXNJZixrQkFBVSxHQXRJSztBQXVJZixrQkFBVSxHQXZJSztBQXdJZixrQkFBVSxHQXhJSztBQXlJZixrQkFBVSxHQXpJSztBQTBJZixrQkFBVSxHQTFJSztBQTJJZixrQkFBVSxHQTNJSztBQTRJZixrQkFBVSxHQTVJSztBQTZJZixrQkFBVSxHQTdJSztBQThJZixnQkFBVSxHQTlJSztBQStJZixnQkFBVSxHQS9JSztBQWdKZixnQkFBVSxHQWhKSztBQWlKZixrQkFBVSxHQWpKSztBQWtKZixrQkFBVSxHQWxKSztBQW1KZixrQkFBVSxHQW5KSztBQW9KZixrQkFBVSxHQXBKSztBQXFKZixnQkFBVSxHQXJKSztBQXNKZixrQkFBVSxHQXRKSztBQXVKZixrQkFBVSxHQXZKSztBQXdKZixrQkFBVSxHQXhKSztBQXlKZixrQkFBVSxHQXpKSztBQTBKZixrQkFBVSxHQTFKSztBQTJKZixrQkFBVSxHQTNKSztBQTRKZixrQkFBVSxHQTVKSztBQTZKZixrQkFBVSxHQTdKSztBQThKZixrQkFBVSxHQTlKSztBQStKZixrQkFBVSxHQS9KSztBQWdLZixrQkFBVSxHQWhLSztBQWlLZixrQkFBVSxHQWpLSztBQWtLZixrQkFBVSxHQWxLSztBQW1LZixrQkFBVSxHQW5LSztBQW9LZixrQkFBVSxHQXBLSztBQXFLZixrQkFBVSxHQXJLSztBQXNLZixrQkFBVSxHQXRLSztBQXVLZixrQkFBVSxHQXZLSztBQXdLZixrQkFBVSxHQXhLSztBQXlLZixrQkFBVSxHQXpLSztBQTBLZixrQkFBVSxHQTFLSztBQTJLZixrQkFBVSxHQTNLSztBQTRLZixrQkFBVSxHQTVLSztBQTZLZixrQkFBVSxHQTdLSztBQThLZixrQkFBVSxHQTlLSztBQStLZixrQkFBVSxHQS9LSztBQWdMZixrQkFBVSxHQWhMSztBQWlMZixrQkFBVSxHQWpMSztBQWtMZixrQkFBVSxHQWxMSztBQW1MZixrQkFBVSxHQW5MSztBQW9MZixrQkFBVSxHQXBMSztBQXFMZixrQkFBVSxHQXJMSztBQXNMZixrQkFBVSxHQXRMSztBQXVMZixrQkFBVSxHQXZMSztBQXdMZixrQkFBVSxHQXhMSztBQXlMZixrQkFBVSxHQXpMSztBQTBMZixrQkFBVSxHQTFMSztBQTJMZixrQkFBVSxHQTNMSztBQTRMZixrQkFBVSxHQTVMSztBQTZMZixrQkFBVSxHQTdMSztBQThMZixrQkFBVSxHQTlMSztBQStMZixrQkFBVSxHQS9MSztBQWdNZixrQkFBVSxHQWhNSztBQWlNZixrQkFBVSxJQWpNSztBQWtNZixrQkFBVSxJQWxNSztBQW1NZixrQkFBVSxHQW5NSztBQW9NZixrQkFBVSxHQXBNSztBQXFNZixrQkFBVSxHQXJNSztBQXNNZixrQkFBVSxHQXRNSztBQXVNZixrQkFBVSxHQXZNSztBQXdNZixrQkFBVSxHQXhNSztBQXlNZixrQkFBVSxHQXpNSztBQTBNZixrQkFBVSxHQTFNSztBQTJNZixrQkFBVSxHQTNNSztBQTRNZixrQkFBVSxHQTVNSztBQTZNZixrQkFBVSxHQTdNSztBQThNZixnQkFBVSxHQTlNSztBQStNZixrQkFBVSxHQS9NSztBQWdOZixrQkFBVSxHQWhOSztBQWlOZixrQkFBVSxHQWpOSztBQWtOZixrQkFBVSxHQWxOSztBQW1OZixrQkFBVSxHQW5OSztBQW9OZixrQkFBVSxHQXBOSztBQXFOZixrQkFBVSxHQXJOSztBQXNOZixrQkFBVSxHQXROSztBQXVOZixrQkFBVSxHQXZOSztBQXdOZixrQkFBVSxHQXhOSztBQXlOZixrQkFBVSxJQXpOSztBQTBOZixrQkFBVSxJQTFOSztBQTJOZixrQkFBVSxHQTNOSztBQTROZixrQkFBVSxHQTVOSztBQTZOZixnQkFBVSxHQTdOSztBQThOZixnQkFBVSxHQTlOSztBQStOZixnQkFBVSxHQS9OSztBQWdPZixrQkFBVSxHQWhPSztBQWlPZixrQkFBVSxHQWpPSztBQWtPZixrQkFBVSxHQWxPSztBQW1PZixrQkFBVSxHQW5PSztBQW9PZixnQkFBVSxHQXBPSztBQXFPZixrQkFBVSxHQXJPSztBQXNPZixrQkFBVSxHQXRPSztBQXVPZixrQkFBVSxHQXZPSztBQXdPZixrQkFBVSxHQXhPSztBQXlPZixrQkFBVSxHQXpPSztBQTBPZixrQkFBVSxHQTFPSztBQTJPZixrQkFBVSxHQTNPSztBQTRPZixrQkFBVSxHQTVPSztBQTZPZixrQkFBVSxHQTdPSztBQThPZixnQkFBVSxHQTlPSztBQStPZixrQkFBVSxHQS9PSztBQWdQZixrQkFBVSxHQWhQSztBQWlQZixrQkFBVSxHQWpQSztBQWtQZixrQkFBVSxHQWxQSztBQW1QZixrQkFBVSxHQW5QSztBQW9QZixrQkFBVSxHQXBQSztBQXFQZixrQkFBVSxHQXJQSztBQXNQZixrQkFBVSxHQXRQSztBQXVQZixrQkFBVSxHQXZQSztBQXdQZixrQkFBVSxHQXhQSztBQXlQZixrQkFBVSxHQXpQSztBQTBQZixrQkFBVSxHQTFQSztBQTJQZixrQkFBVSxHQTNQSztBQTRQZixrQkFBVSxHQTVQSztBQTZQZixrQkFBVSxHQTdQSztBQThQZixrQkFBVSxHQTlQSztBQStQZixnQkFBVSxHQS9QSztBQWdRZixrQkFBVSxHQWhRSztBQWlRZixrQkFBVSxHQWpRSztBQWtRZixrQkFBVSxHQWxRSztBQW1RZixrQkFBVSxHQW5RSztBQW9RZixrQkFBVSxHQXBRSztBQXFRZixrQkFBVSxJQXJRSztBQXNRZixrQkFBVSxJQXRRSztBQXVRZixrQkFBVSxJQXZRSztBQXdRZixrQkFBVSxJQXhRSztBQXlRZixrQkFBVSxHQXpRSztBQTBRZixrQkFBVSxHQTFRSztBQTJRZixrQkFBVSxHQTNRSztBQTRRZixrQkFBVSxHQTVRSztBQTZRZixrQkFBVSxHQTdRSztBQThRZixrQkFBVSxHQTlRSztBQStRZixrQkFBVSxHQS9RSztBQWdSZixrQkFBVSxHQWhSSztBQWlSZixrQkFBVSxHQWpSSztBQWtSZixrQkFBVSxHQWxSSztBQW1SZixrQkFBVSxHQW5SSztBQW9SZixrQkFBVSxHQXBSSztBQXFSZixrQkFBVSxHQXJSSztBQXNSZixrQkFBVSxHQXRSSztBQXVSZixrQkFBVSxHQXZSSztBQXdSZixrQkFBVSxHQXhSSztBQXlSZixrQkFBVSxHQXpSSztBQTBSZixrQkFBVSxHQTFSSztBQTJSZixrQkFBVSxHQTNSSztBQTRSZixrQkFBVSxHQTVSSztBQTZSZixrQkFBVSxHQTdSSztBQThSZixrQkFBVSxHQTlSSztBQStSZixrQkFBVSxHQS9SSztBQWdTZixrQkFBVSxHQWhTSztBQWlTZixrQkFBVSxHQWpTSztBQWtTZixrQkFBVSxHQWxTSztBQW1TZixrQkFBVSxHQW5TSztBQW9TZixrQkFBVSxHQXBTSztBQXFTZixrQkFBVSxHQXJTSztBQXNTZixrQkFBVSxHQXRTSztBQXVTZixrQkFBVSxHQXZTSztBQXdTZixrQkFBVSxHQXhTSztBQXlTZixrQkFBVSxHQXpTSztBQTBTZixrQkFBVSxHQTFTSztBQTJTZixrQkFBVSxHQTNTSztBQTRTZixrQkFBVSxHQTVTSztBQTZTZixrQkFBVSxHQTdTSztBQThTZixrQkFBVSxHQTlTSztBQStTZixrQkFBVSxHQS9TSztBQWdUZixrQkFBVSxHQWhUSztBQWlUZixrQkFBVSxHQWpUSztBQWtUZixrQkFBVSxHQWxUSztBQW1UZixrQkFBVSxHQW5USztBQW9UZixrQkFBVSxHQXBUSztBQXFUZixrQkFBVSxHQXJUSztBQXNUZixrQkFBVSxHQXRUSztBQXVUZixrQkFBVSxHQXZUSztBQXdUZixrQkFBVSxHQXhUSztBQXlUZixrQkFBVSxHQXpUSztBQTBUZixrQkFBVSxHQTFUSztBQTJUZixrQkFBVSxHQTNUSztBQTRUZixrQkFBVSxHQTVUSztBQTZUZixrQkFBVSxHQTdUSztBQThUZixrQkFBVSxHQTlUSztBQStUZixrQkFBVSxHQS9USztBQWdVZixrQkFBVSxHQWhVSztBQWlVZixrQkFBVSxHQWpVSztBQWtVZixrQkFBVSxHQWxVSztBQW1VZixrQkFBVSxHQW5VSztBQW9VZixrQkFBVSxHQXBVSztBQXFVZixrQkFBVSxJQXJVSztBQXNVZixrQkFBVSxHQXRVSztBQXVVZixrQkFBVSxHQXZVSztBQXdVZixnQkFBVSxHQXhVSztBQXlVZixnQkFBVSxHQXpVSztBQTBVZixnQkFBVSxHQTFVSztBQTJVZixrQkFBVSxHQTNVSztBQTRVZixrQkFBVSxHQTVVSztBQTZVZixrQkFBVSxHQTdVSztBQThVZixrQkFBVSxHQTlVSztBQStVZixrQkFBVSxHQS9VSztBQWdWZixnQkFBVSxHQWhWSztBQWlWZixrQkFBVSxHQWpWSztBQWtWZixrQkFBVSxHQWxWSztBQW1WZixrQkFBVSxHQW5WSztBQW9WZixrQkFBVSxHQXBWSztBQXFWZixrQkFBVSxHQXJWSztBQXNWZixrQkFBVSxHQXRWSztBQXVWZixrQkFBVSxHQXZWSztBQXdWZixrQkFBVSxHQXhWSztBQXlWZixrQkFBVSxHQXpWSztBQTBWZixrQkFBVSxHQTFWSztBQTJWZixrQkFBVSxHQTNWSztBQTRWZixrQkFBVSxHQTVWSztBQTZWZixrQkFBVSxHQTdWSztBQThWZixrQkFBVSxHQTlWSztBQStWZixrQkFBVSxHQS9WSztBQWdXZixrQkFBVSxHQWhXSztBQWlXZixrQkFBVSxHQWpXSztBQWtXZixrQkFBVSxHQWxXSztBQW1XZixrQkFBVSxHQW5XSztBQW9XZixrQkFBVSxHQXBXSztBQXFXZixrQkFBVSxHQXJXSztBQXNXZixrQkFBVSxHQXRXSztBQXVXZixrQkFBVSxHQXZXSztBQXdXZixrQkFBVSxHQXhXSztBQXlXZixrQkFBVSxHQXpXSztBQTBXZixrQkFBVSxHQTFXSztBQTJXZixrQkFBVSxHQTNXSztBQTRXZixrQkFBVSxHQTVXSztBQTZXZixrQkFBVSxHQTdXSztBQThXZixrQkFBVSxJQTlXSztBQStXZixrQkFBVSxHQS9XSztBQWdYZixrQkFBVSxHQWhYSztBQWlYZixrQkFBVSxHQWpYSztBQWtYZixrQkFBVSxHQWxYSztBQW1YZixrQkFBVSxHQW5YSztBQW9YZixrQkFBVSxHQXBYSztBQXFYZixrQkFBVSxHQXJYSztBQXNYZixrQkFBVSxHQXRYSztBQXVYZixrQkFBVSxHQXZYSztBQXdYZixrQkFBVSxHQXhYSztBQXlYZixrQkFBVSxHQXpYSztBQTBYZixrQkFBVSxHQTFYSztBQTJYZixrQkFBVSxHQTNYSztBQTRYZixrQkFBVSxHQTVYSztBQTZYZixrQkFBVSxHQTdYSztBQThYZixrQkFBVSxHQTlYSztBQStYZixnQkFBVSxHQS9YSztBQWdZZixrQkFBVSxHQWhZSztBQWlZZixrQkFBVSxHQWpZSztBQWtZZixrQkFBVSxHQWxZSztBQW1ZZixrQkFBVSxHQW5ZSztBQW9ZZixrQkFBVSxHQXBZSztBQXFZZixrQkFBVSxHQXJZSztBQXNZZixrQkFBVSxHQXRZSztBQXVZZixrQkFBVSxHQXZZSztBQXdZZixrQkFBVSxHQXhZSztBQXlZZixrQkFBVSxHQXpZSztBQTBZZixrQkFBVSxHQTFZSztBQTJZZixrQkFBVSxHQTNZSztBQTRZZixrQkFBVSxHQTVZSztBQTZZZixrQkFBVSxHQTdZSztBQThZZixrQkFBVSxHQTlZSztBQStZZixrQkFBVSxHQS9ZSztBQWdaZixrQkFBVSxHQWhaSztBQWlaZixrQkFBVSxHQWpaSztBQWtaZixrQkFBVSxHQWxaSztBQW1aZixrQkFBVSxHQW5aSztBQW9aZixrQkFBVSxHQXBaSztBQXFaZixrQkFBVSxHQXJaSztBQXNaZixrQkFBVSxHQXRaSztBQXVaZixrQkFBVSxHQXZaSztBQXdaZixrQkFBVSxHQXhaSztBQXlaZixrQkFBVSxHQXpaSztBQTBaZixnQkFBVSxHQTFaSztBQTJaZixnQkFBVSxHQTNaSztBQTRaZixnQkFBVSxHQTVaSztBQTZaZixrQkFBVSxHQTdaSztBQThaZixrQkFBVSxHQTlaSztBQStaZixrQkFBVSxHQS9aSztBQWdhZixrQkFBVSxHQWhhSztBQWlhZixnQkFBVSxHQWphSztBQWthZixrQkFBVSxHQWxhSztBQW1hZixrQkFBVSxHQW5hSztBQW9hZixrQkFBVSxHQXBhSztBQXFhZixrQkFBVSxHQXJhSztBQXNhZixrQkFBVSxHQXRhSztBQXVhZixrQkFBVSxHQXZhSztBQXdhZixrQkFBVSxHQXhhSztBQXlhZixrQkFBVSxHQXphSztBQTBhZixnQkFBVSxHQTFhSztBQTJhZixrQkFBVSxHQTNhSztBQTRhZixrQkFBVSxHQTVhSztBQTZhZixnQkFBVSxHQTdhSztBQThhZixrQkFBVSxHQTlhSztBQSthZixrQkFBVSxHQS9hSztBQWdiZixrQkFBVSxHQWhiSztBQWliZixrQkFBVSxHQWpiSztBQWtiZixrQkFBVSxHQWxiSztBQW1iZixrQkFBVSxHQW5iSztBQW9iZixrQkFBVSxHQXBiSztBQXFiZixrQkFBVSxHQXJiSztBQXNiZixrQkFBVSxHQXRiSztBQXViZixrQkFBVSxHQXZiSztBQXdiZixrQkFBVSxHQXhiSztBQXliZixrQkFBVSxJQXpiSztBQTBiZixnQkFBVSxJQTFiSztBQTJiZixrQkFBVSxJQTNiSztBQTRiZixrQkFBVSxJQTViSztBQTZiZixrQkFBVSxJQTdiSztBQThiZixrQkFBVSxJQTliSztBQStiZixrQkFBVSxJQS9iSztBQWdjZixrQkFBVSxJQWhjSztBQWljZixrQkFBVSxJQWpjSztBQWtjZixrQkFBVSxHQWxjSztBQW1jZixrQkFBVSxHQW5jSztBQW9jZixrQkFBVSxHQXBjSztBQXFjZixrQkFBVSxHQXJjSztBQXNjZixrQkFBVSxHQXRjSztBQXVjZixrQkFBVSxHQXZjSztBQXdjZixrQkFBVSxHQXhjSztBQXljZixrQkFBVSxHQXpjSztBQTBjZixrQkFBVSxHQTFjSztBQTJjZixrQkFBVSxHQTNjSztBQTRjZixrQkFBVSxHQTVjSztBQTZjZixrQkFBVSxHQTdjSztBQThjZixrQkFBVSxHQTljSztBQStjZixrQkFBVSxHQS9jSztBQWdkZixnQkFBVSxHQWhkSztBQWlkZixrQkFBVSxHQWpkSztBQWtkZixrQkFBVSxHQWxkSztBQW1kZixrQkFBVSxHQW5kSztBQW9kZixrQkFBVSxHQXBkSztBQXFkZixrQkFBVSxHQXJkSztBQXNkZixrQkFBVSxHQXRkSztBQXVkZixrQkFBVSxHQXZkSztBQXdkZixrQkFBVSxHQXhkSztBQXlkZixrQkFBVSxHQXpkSztBQTBkZixrQkFBVSxHQTFkSztBQTJkZixrQkFBVSxHQTNkSztBQTRkZixrQkFBVSxHQTVkSztBQTZkZixrQkFBVSxH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LEtBQTVDO0FBQ0FzaEIsZ0JBQU0sQ0FBQyxzQkFBRCxDQUFOO0FBQ0g7QUFqQ0UsT0FBUDtBQW1DSCxLQTFDTSxDQUFQO0FBMkNILEdBalh5QixDQW1YMUI7OztBQUNBLFdBQVNmLDZCQUFULENBQXVDdFYsSUFBdkMsRUFBNkNvWCxjQUE3QyxFQUE2RDtBQUN6RCxXQUFPLElBQUlqQixPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDMUMxbkIsbURBQUMsQ0FBQ2dWLElBQUYsQ0FBTztBQUNITSxXQUFHLEVBQUV5UixZQUFZLENBQUNjLE9BRGY7QUFFSHhXLFlBQUksRUFBRSxNQUZIO0FBR0gvTixZQUFJLEVBQUU7QUFDRndrQixnQkFBTSxFQUFFLGdDQUROO0FBRUZDLG9CQUFVLEVBQUVoQixZQUFZLENBQUNpQixLQUZ2QjtBQUdGUyx3QkFBYyxFQUFFQSxjQUhkO0FBSUZwWCxjQUFJLEVBQUVBO0FBSkosU0FISDtBQVNId0QsZUFBTyxFQUFFLGlCQUFVb1QsR0FBVixFQUFlO0FBQ3BCUixpQkFBTyxDQUFDUSxHQUFELENBQVA7QUFDSDtBQVhFLE9BQVA7QUFhSCxLQWRNLEVBY0poVCxJQWRJLENBY0MsWUFBWTtBQUNoQmpWLG1EQUFDLENBQUMsTUFBRCxDQUFELENBQVVzQyxPQUFWLENBQWtCLGlCQUFsQjtBQUNILEtBaEJNLENBQVA7QUFpQkg7QUFDSixDQXZZRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHdCIiwiZmlsZSI6ImNoZWNrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLyohXG4gKiBTZWxlY3QyIDQuMC4xM1xuICogaHR0cHM6Ly9zZWxlY3QyLmdpdGh1Yi5pb1xuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocm9vdCwgalF1ZXJ5KSB7XG4gICAgICBpZiAoalF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gcmVxdWlyZSgnalF1ZXJ5JykgcmV0dXJucyBhIGZhY3RvcnkgdGhhdCByZXF1aXJlcyB3aW5kb3cgdG9cbiAgICAgICAgLy8gYnVpbGQgYSBqUXVlcnkgaW5zdGFuY2UsIHdlIG5vcm1hbGl6ZSBob3cgd2UgdXNlIG1vZHVsZXNcbiAgICAgICAgLy8gdGhhdCByZXF1aXJlIHRoaXMgcGF0dGVybiBidXQgdGhlIHdpbmRvdyBwcm92aWRlZCBpcyBhIG5vb3BcbiAgICAgICAgLy8gaWYgaXQncyBkZWZpbmVkIChob3cganF1ZXJ5IHdvcmtzKVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKShyb290KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgICAgcmV0dXJuIGpRdWVyeTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgfVxufSAoZnVuY3Rpb24gKGpRdWVyeSkge1xuICAvLyBUaGlzIGlzIG5lZWRlZCBzbyB3ZSBjYW4gY2F0Y2ggdGhlIEFNRCBsb2FkZXIgY29uZmlndXJhdGlvbiBhbmQgdXNlIGl0XG4gIC8vIFRoZSBpbm5lciBmaWxlIHNob3VsZCBiZSB3cmFwcGVkIChieSBgYmFubmVyLnN0YXJ0LmpzYCkgaW4gYSBmdW5jdGlvbiB0aGF0XG4gIC8vIHJldHVybnMgdGhlIEFNRCBsb2FkZXIgcmVmZXJlbmNlcy5cbiAgdmFyIFMyID0oZnVuY3Rpb24gKCkge1xuICAvLyBSZXN0b3JlIHRoZSBTZWxlY3QyIEFNRCBsb2FkZXIgc28gaXQgY2FuIGJlIHVzZWRcbiAgLy8gTmVlZGVkIG1vc3RseSBpbiB0aGUgbGFuZ3VhZ2UgZmlsZXMsIHdoZXJlIHRoZSBsb2FkZXIgaXMgbm90IGluc2VydGVkXG4gIGlmIChqUXVlcnkgJiYgalF1ZXJ5LmZuICYmIGpRdWVyeS5mbi5zZWxlY3QyICYmIGpRdWVyeS5mbi5zZWxlY3QyLmFtZCkge1xuICAgIHZhciBTMiA9IGpRdWVyeS5mbi5zZWxlY3QyLmFtZDtcbiAgfVxudmFyIFMyOyhmdW5jdGlvbiAoKSB7IGlmICghUzIgfHwgIVMyLnJlcXVpcmVqcykge1xuaWYgKCFTMikgeyBTMiA9IHt9OyB9IGVsc2UgeyByZXF1aXJlID0gUzI7IH1cbi8qKlxuICogQGxpY2Vuc2UgYWxtb25kIDAuMy4zIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzLlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UsIGh0dHA6Ly9naXRodWIuY29tL3JlcXVpcmVqcy9hbG1vbmQvTElDRU5TRVxuICovXG4vL0dvaW5nIHNsb3BweSB0byBhdm9pZCAndXNlIHN0cmljdCcgc3RyaW5nIGNvc3QsIGJ1dCBzdHJpY3QgcHJhY3RpY2VzIHNob3VsZFxuLy9iZSBmb2xsb3dlZC5cbi8qZ2xvYmFsIHNldFRpbWVvdXQ6IGZhbHNlICovXG5cbnZhciByZXF1aXJlanMsIHJlcXVpcmUsIGRlZmluZTtcbihmdW5jdGlvbiAodW5kZWYpIHtcbiAgICB2YXIgbWFpbiwgcmVxLCBtYWtlTWFwLCBoYW5kbGVycyxcbiAgICAgICAgZGVmaW5lZCA9IHt9LFxuICAgICAgICB3YWl0aW5nID0ge30sXG4gICAgICAgIGNvbmZpZyA9IHt9LFxuICAgICAgICBkZWZpbmluZyA9IHt9LFxuICAgICAgICBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgICBhcHMgPSBbXS5zbGljZSxcbiAgICAgICAganNTdWZmaXhSZWdFeHAgPSAvXFwuanMkLztcblxuICAgIGZ1bmN0aW9uIGhhc1Byb3Aob2JqLCBwcm9wKSB7XG4gICAgICAgIHJldHVybiBoYXNPd24uY2FsbChvYmosIHByb3ApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgcmVsYXRpdmUgbW9kdWxlIG5hbWUsIGxpa2UgLi9zb21ldGhpbmcsIG5vcm1hbGl6ZSBpdCB0b1xuICAgICAqIGEgcmVhbCBuYW1lIHRoYXQgY2FuIGJlIG1hcHBlZCB0byBhIHBhdGguXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIHJlbGF0aXZlIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYmFzZU5hbWUgYSByZWFsIG5hbWUgdGhhdCB0aGUgbmFtZSBhcmcgaXMgcmVsYXRpdmVcbiAgICAgKiB0by5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBub3JtYWxpemVkIG5hbWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBub3JtYWxpemUobmFtZSwgYmFzZU5hbWUpIHtcbiAgICAgICAgdmFyIG5hbWVQYXJ0cywgbmFtZVNlZ21lbnQsIG1hcFZhbHVlLCBmb3VuZE1hcCwgbGFzdEluZGV4LFxuICAgICAgICAgICAgZm91bmRJLCBmb3VuZFN0YXJNYXAsIHN0YXJJLCBpLCBqLCBwYXJ0LCBub3JtYWxpemVkQmFzZVBhcnRzLFxuICAgICAgICAgICAgYmFzZVBhcnRzID0gYmFzZU5hbWUgJiYgYmFzZU5hbWUuc3BsaXQoXCIvXCIpLFxuICAgICAgICAgICAgbWFwID0gY29uZmlnLm1hcCxcbiAgICAgICAgICAgIHN0YXJNYXAgPSAobWFwICYmIG1hcFsnKiddKSB8fCB7fTtcblxuICAgICAgICAvL0FkanVzdCBhbnkgcmVsYXRpdmUgcGF0aHMuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gbmFtZS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAvLyBJZiB3YW50aW5nIG5vZGUgSUQgY29tcGF0aWJpbGl0eSwgc3RyaXAgLmpzIGZyb20gZW5kXG4gICAgICAgICAgICAvLyBvZiBJRHMuIEhhdmUgdG8gZG8gdGhpcyBoZXJlLCBhbmQgbm90IGluIG5hbWVUb1VybFxuICAgICAgICAgICAgLy8gYmVjYXVzZSBub2RlIGFsbG93cyBlaXRoZXIgLmpzIG9yIG5vbiAuanMgdG8gbWFwXG4gICAgICAgICAgICAvLyB0byBzYW1lIGZpbGUuXG4gICAgICAgICAgICBpZiAoY29uZmlnLm5vZGVJZENvbXBhdCAmJiBqc1N1ZmZpeFJlZ0V4cC50ZXN0KG5hbWVbbGFzdEluZGV4XSkpIHtcbiAgICAgICAgICAgICAgICBuYW1lW2xhc3RJbmRleF0gPSBuYW1lW2xhc3RJbmRleF0ucmVwbGFjZShqc1N1ZmZpeFJlZ0V4cCwgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGFydHMgd2l0aCBhICcuJyBzbyBuZWVkIHRoZSBiYXNlTmFtZVxuICAgICAgICAgICAgaWYgKG5hbWVbMF0uY2hhckF0KDApID09PSAnLicgJiYgYmFzZVBhcnRzKSB7XG4gICAgICAgICAgICAgICAgLy9Db252ZXJ0IGJhc2VOYW1lIHRvIGFycmF5LCBhbmQgbG9wIG9mZiB0aGUgbGFzdCBwYXJ0LFxuICAgICAgICAgICAgICAgIC8vc28gdGhhdCAuIG1hdGNoZXMgdGhhdCAnZGlyZWN0b3J5JyBhbmQgbm90IG5hbWUgb2YgdGhlIGJhc2VOYW1lJ3NcbiAgICAgICAgICAgICAgICAvL21vZHVsZS4gRm9yIGluc3RhbmNlLCBiYXNlTmFtZSBvZiAnb25lL3R3by90aHJlZScsIG1hcHMgdG9cbiAgICAgICAgICAgICAgICAvLydvbmUvdHdvL3RocmVlLmpzJywgYnV0IHdlIHdhbnQgdGhlIGRpcmVjdG9yeSwgJ29uZS90d28nIGZvclxuICAgICAgICAgICAgICAgIC8vdGhpcyBub3JtYWxpemF0aW9uLlxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCYXNlUGFydHMgPSBiYXNlUGFydHMuc2xpY2UoMCwgYmFzZVBhcnRzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIG5hbWUgPSBub3JtYWxpemVkQmFzZVBhcnRzLmNvbmNhdChuYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9zdGFydCB0cmltRG90c1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gbmFtZVtpXTtcbiAgICAgICAgICAgICAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBpIC09IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGF0IHRoZSBzdGFydCwgb3IgcHJldmlvdXMgdmFsdWUgaXMgc3RpbGwgLi4sXG4gICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgdGhlbSBzbyB0aGF0IHdoZW4gY29udmVydGVkIHRvIGEgcGF0aCBpdCBtYXlcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RpbGwgd29yayB3aGVuIGNvbnZlcnRlZCB0byBhIHBhdGgsIGV2ZW4gdGhvdWdoXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIGFuIElEIGl0IGlzIGxlc3MgdGhhbiBpZGVhbC4gSW4gbGFyZ2VyIHBvaW50XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbGVhc2VzLCBtYXkgYmUgYmV0dGVyIHRvIGp1c3Qga2ljayBvdXQgYW4gZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwIHx8IChpID09PSAxICYmIG5hbWVbMl0gPT09ICcuLicpIHx8IG5hbWVbaSAtIDFdID09PSAnLi4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zcGxpY2UoaSAtIDEsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAtPSAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9lbmQgdHJpbURvdHNcblxuICAgICAgICAgICAgbmFtZSA9IG5hbWUuam9pbignLycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9BcHBseSBtYXAgY29uZmlnIGlmIGF2YWlsYWJsZS5cbiAgICAgICAgaWYgKChiYXNlUGFydHMgfHwgc3Rhck1hcCkgJiYgbWFwKSB7XG4gICAgICAgICAgICBuYW1lUGFydHMgPSBuYW1lLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IG5hbWVQYXJ0cy5sZW5ndGg7IGkgPiAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICBuYW1lU2VnbWVudCA9IG5hbWVQYXJ0cy5zbGljZSgwLCBpKS5qb2luKFwiL1wiKTtcblxuICAgICAgICAgICAgICAgIGlmIChiYXNlUGFydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9GaW5kIHRoZSBsb25nZXN0IGJhc2VOYW1lIHNlZ21lbnQgbWF0Y2ggaW4gdGhlIGNvbmZpZy5cbiAgICAgICAgICAgICAgICAgICAgLy9TbywgZG8gam9pbnMgb24gdGhlIGJpZ2dlc3QgdG8gc21hbGxlc3QgbGVuZ3RocyBvZiBiYXNlUGFydHMuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGJhc2VQYXJ0cy5sZW5ndGg7IGogPiAwOyBqIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZhbHVlID0gbWFwW2Jhc2VQYXJ0cy5zbGljZSgwLCBqKS5qb2luKCcvJyldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Jhc2VOYW1lIHNlZ21lbnQgaGFzICBjb25maWcsIGZpbmQgaWYgaXQgaGFzIG9uZSBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyBuYW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwVmFsdWUgPSBtYXBWYWx1ZVtuYW1lU2VnbWVudF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTWF0Y2gsIHVwZGF0ZSBuYW1lIHRvIHRoZSBuZXcgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTWFwID0gbWFwVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kSSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmb3VuZE1hcCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0NoZWNrIGZvciBhIHN0YXIgbWFwIG1hdGNoLCBidXQganVzdCBob2xkIG9uIHRvIGl0LFxuICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBzaG9ydGVyIHNlZ21lbnQgbWF0Y2ggbGF0ZXIgaW4gYSBtYXRjaGluZ1xuICAgICAgICAgICAgICAgIC8vY29uZmlnLCB0aGVuIGZhdm9yIG92ZXIgdGhpcyBzdGFyIG1hcC5cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kU3Rhck1hcCAmJiBzdGFyTWFwICYmIHN0YXJNYXBbbmFtZVNlZ21lbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kU3Rhck1hcCA9IHN0YXJNYXBbbmFtZVNlZ21lbnRdO1xuICAgICAgICAgICAgICAgICAgICBzdGFySSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWZvdW5kTWFwICYmIGZvdW5kU3Rhck1hcCkge1xuICAgICAgICAgICAgICAgIGZvdW5kTWFwID0gZm91bmRTdGFyTWFwO1xuICAgICAgICAgICAgICAgIGZvdW5kSSA9IHN0YXJJO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRNYXApIHtcbiAgICAgICAgICAgICAgICBuYW1lUGFydHMuc3BsaWNlKDAsIGZvdW5kSSwgZm91bmRNYXApO1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lUGFydHMuam9pbignLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVJlcXVpcmUocmVsTmFtZSwgZm9yY2VTeW5jKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL0EgdmVyc2lvbiBvZiBhIHJlcXVpcmUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgYSBtb2R1bGVOYW1lXG4gICAgICAgICAgICAvL3ZhbHVlIGZvciBpdGVtcyB0aGF0IG1heSBuZWVkIHRvXG4gICAgICAgICAgICAvL2xvb2sgdXAgcGF0aHMgcmVsYXRpdmUgdG8gdGhlIG1vZHVsZU5hbWVcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXBzLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgICAgICAgICAgLy9JZiBmaXJzdCBhcmcgaXMgbm90IHJlcXVpcmUoJ3N0cmluZycpLCBhbmQgdGhlcmUgaXMgb25seVxuICAgICAgICAgICAgLy9vbmUgYXJnLCBpdCBpcyB0aGUgYXJyYXkgZm9ybSB3aXRob3V0IGEgY2FsbGJhY2suIEluc2VydFxuICAgICAgICAgICAgLy9hIG51bGwgc28gdGhhdCB0aGUgZm9sbG93aW5nIGNvbmNhdCBpcyBjb3JyZWN0LlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJyAmJiBhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXEuYXBwbHkodW5kZWYsIGFyZ3MuY29uY2F0KFtyZWxOYW1lLCBmb3JjZVN5bmNdKSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZU5vcm1hbGl6ZShyZWxOYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuYW1lLCByZWxOYW1lKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlTG9hZChkZXBOYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGRlZmluZWRbZGVwTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsRGVwKG5hbWUpIHtcbiAgICAgICAgaWYgKGhhc1Byb3Aod2FpdGluZywgbmFtZSkpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gd2FpdGluZ1tuYW1lXTtcbiAgICAgICAgICAgIGRlbGV0ZSB3YWl0aW5nW25hbWVdO1xuICAgICAgICAgICAgZGVmaW5pbmdbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFpbi5hcHBseSh1bmRlZiwgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc1Byb3AoZGVmaW5lZCwgbmFtZSkgJiYgIWhhc1Byb3AoZGVmaW5pbmcsIG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vICcgKyBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmaW5lZFtuYW1lXTtcbiAgICB9XG5cbiAgICAvL1R1cm5zIGEgcGx1Z2luIXJlc291cmNlIHRvIFtwbHVnaW4sIHJlc291cmNlXVxuICAgIC8vd2l0aCB0aGUgcGx1Z2luIGJlaW5nIHVuZGVmaW5lZCBpZiB0aGUgbmFtZVxuICAgIC8vZGlkIG5vdCBoYXZlIGEgcGx1Z2luIHByZWZpeC5cbiAgICBmdW5jdGlvbiBzcGxpdFByZWZpeChuYW1lKSB7XG4gICAgICAgIHZhciBwcmVmaXgsXG4gICAgICAgICAgICBpbmRleCA9IG5hbWUgPyBuYW1lLmluZGV4T2YoJyEnKSA6IC0xO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcHJlZml4ID0gbmFtZS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKGluZGV4ICsgMSwgbmFtZS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcHJlZml4LCBuYW1lXTtcbiAgICB9XG5cbiAgICAvL0NyZWF0ZXMgYSBwYXJ0cyBhcnJheSBmb3IgYSByZWxOYW1lIHdoZXJlIGZpcnN0IHBhcnQgaXMgcGx1Z2luIElELFxuICAgIC8vc2Vjb25kIHBhcnQgaXMgcmVzb3VyY2UgSUQuIEFzc3VtZXMgcmVsTmFtZSBoYXMgYWxyZWFkeSBiZWVuIG5vcm1hbGl6ZWQuXG4gICAgZnVuY3Rpb24gbWFrZVJlbFBhcnRzKHJlbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHJlbE5hbWUgPyBzcGxpdFByZWZpeChyZWxOYW1lKSA6IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgbmFtZSBtYXAsIG5vcm1hbGl6aW5nIHRoZSBuYW1lLCBhbmQgdXNpbmcgYSBwbHVnaW5cbiAgICAgKiBmb3Igbm9ybWFsaXphdGlvbiBpZiBuZWNlc3NhcnkuIEdyYWJzIGEgcmVmIHRvIHBsdWdpblxuICAgICAqIHRvbywgYXMgYW4gb3B0aW1pemF0aW9uLlxuICAgICAqL1xuICAgIG1ha2VNYXAgPSBmdW5jdGlvbiAobmFtZSwgcmVsUGFydHMpIHtcbiAgICAgICAgdmFyIHBsdWdpbixcbiAgICAgICAgICAgIHBhcnRzID0gc3BsaXRQcmVmaXgobmFtZSksXG4gICAgICAgICAgICBwcmVmaXggPSBwYXJ0c1swXSxcbiAgICAgICAgICAgIHJlbFJlc291cmNlTmFtZSA9IHJlbFBhcnRzWzFdO1xuXG4gICAgICAgIG5hbWUgPSBwYXJ0c1sxXTtcblxuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICBwcmVmaXggPSBub3JtYWxpemUocHJlZml4LCByZWxSZXNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgcGx1Z2luID0gY2FsbERlcChwcmVmaXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Ob3JtYWxpemUgYWNjb3JkaW5nXG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgIGlmIChwbHVnaW4gJiYgcGx1Z2luLm5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBwbHVnaW4ubm9ybWFsaXplKG5hbWUsIG1ha2VOb3JtYWxpemUocmVsUmVzb3VyY2VOYW1lKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBub3JtYWxpemUobmFtZSwgcmVsUmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWUgPSBub3JtYWxpemUobmFtZSwgcmVsUmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIHBhcnRzID0gc3BsaXRQcmVmaXgobmFtZSk7XG4gICAgICAgICAgICBwcmVmaXggPSBwYXJ0c1swXTtcbiAgICAgICAgICAgIG5hbWUgPSBwYXJ0c1sxXTtcbiAgICAgICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4gPSBjYWxsRGVwKHByZWZpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1VzaW5nIHJpZGljdWxvdXMgcHJvcGVydHkgbmFtZXMgZm9yIHNwYWNlIHJlYXNvbnNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGY6IHByZWZpeCA/IHByZWZpeCArICchJyArIG5hbWUgOiBuYW1lLCAvL2Z1bGxOYW1lXG4gICAgICAgICAgICBuOiBuYW1lLFxuICAgICAgICAgICAgcHI6IHByZWZpeCxcbiAgICAgICAgICAgIHA6IHBsdWdpblxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtYWtlQ29uZmlnKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoY29uZmlnICYmIGNvbmZpZy5jb25maWcgJiYgY29uZmlnLmNvbmZpZ1tuYW1lXSkgfHwge307XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlcnMgPSB7XG4gICAgICAgIHJlcXVpcmU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZVJlcXVpcmUobmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydHM6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgZSA9IGRlZmluZWRbbmFtZV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZGVmaW5lZFtuYW1lXSA9IHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kdWxlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbmFtZSxcbiAgICAgICAgICAgICAgICB1cmk6ICcnLFxuICAgICAgICAgICAgICAgIGV4cG9ydHM6IGRlZmluZWRbbmFtZV0sXG4gICAgICAgICAgICAgICAgY29uZmlnOiBtYWtlQ29uZmlnKG5hbWUpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1haW4gPSBmdW5jdGlvbiAobmFtZSwgZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUpIHtcbiAgICAgICAgdmFyIGNqc01vZHVsZSwgZGVwTmFtZSwgcmV0LCBtYXAsIGksIHJlbFBhcnRzLFxuICAgICAgICAgICAgYXJncyA9IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tUeXBlID0gdHlwZW9mIGNhbGxiYWNrLFxuICAgICAgICAgICAgdXNpbmdFeHBvcnRzO1xuXG4gICAgICAgIC8vVXNlIG5hbWUgaWYgbm8gcmVsTmFtZVxuICAgICAgICByZWxOYW1lID0gcmVsTmFtZSB8fCBuYW1lO1xuICAgICAgICByZWxQYXJ0cyA9IG1ha2VSZWxQYXJ0cyhyZWxOYW1lKTtcblxuICAgICAgICAvL0NhbGwgdGhlIGNhbGxiYWNrIHRvIGRlZmluZSB0aGUgbW9kdWxlLCBpZiBuZWNlc3NhcnkuXG4gICAgICAgIGlmIChjYWxsYmFja1R5cGUgPT09ICd1bmRlZmluZWQnIHx8IGNhbGxiYWNrVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy9QdWxsIG91dCB0aGUgZGVmaW5lZCBkZXBlbmRlbmNpZXMgYW5kIHBhc3MgdGhlIG9yZGVyZWRcbiAgICAgICAgICAgIC8vdmFsdWVzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIC8vRGVmYXVsdCB0byBbcmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlXSBpZiBubyBkZXBzXG4gICAgICAgICAgICBkZXBzID0gIWRlcHMubGVuZ3RoICYmIGNhbGxiYWNrLmxlbmd0aCA/IFsncmVxdWlyZScsICdleHBvcnRzJywgJ21vZHVsZSddIDogZGVwcztcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkZXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWFwID0gbWFrZU1hcChkZXBzW2ldLCByZWxQYXJ0cyk7XG4gICAgICAgICAgICAgICAgZGVwTmFtZSA9IG1hcC5mO1xuXG4gICAgICAgICAgICAgICAgLy9GYXN0IHBhdGggQ29tbW9uSlMgc3RhbmRhcmQgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAgICAgIGlmIChkZXBOYW1lID09PSBcInJlcXVpcmVcIikge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gaGFuZGxlcnMucmVxdWlyZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlcE5hbWUgPT09IFwiZXhwb3J0c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQ29tbW9uSlMgbW9kdWxlIHNwZWMgMS4xXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBoYW5kbGVycy5leHBvcnRzKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB1c2luZ0V4cG9ydHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVwTmFtZSA9PT0gXCJtb2R1bGVcIikge1xuICAgICAgICAgICAgICAgICAgICAvL0NvbW1vbkpTIG1vZHVsZSBzcGVjIDEuMVxuICAgICAgICAgICAgICAgICAgICBjanNNb2R1bGUgPSBhcmdzW2ldID0gaGFuZGxlcnMubW9kdWxlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzUHJvcChkZWZpbmVkLCBkZXBOYW1lKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUHJvcCh3YWl0aW5nLCBkZXBOYW1lKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUHJvcChkZWZpbmluZywgZGVwTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGNhbGxEZXAoZGVwTmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXAucCkge1xuICAgICAgICAgICAgICAgICAgICBtYXAucC5sb2FkKG1hcC5uLCBtYWtlUmVxdWlyZShyZWxOYW1lLCB0cnVlKSwgbWFrZUxvYWQoZGVwTmFtZSksIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGRlZmluZWRbZGVwTmFtZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5hbWUgKyAnIG1pc3NpbmcgJyArIGRlcE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0ID0gY2FsbGJhY2sgPyBjYWxsYmFjay5hcHBseShkZWZpbmVkW25hbWVdLCBhcmdzKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAvL0lmIHNldHRpbmcgZXhwb3J0cyB2aWEgXCJtb2R1bGVcIiBpcyBpbiBwbGF5LFxuICAgICAgICAgICAgICAgIC8vZmF2b3IgdGhhdCBvdmVyIHJldHVybiB2YWx1ZSBhbmQgZXhwb3J0cy4gQWZ0ZXIgdGhhdCxcbiAgICAgICAgICAgICAgICAvL2Zhdm9yIGEgbm9uLXVuZGVmaW5lZCByZXR1cm4gdmFsdWUgb3ZlciBleHBvcnRzIHVzZS5cbiAgICAgICAgICAgICAgICBpZiAoY2pzTW9kdWxlICYmIGNqc01vZHVsZS5leHBvcnRzICE9PSB1bmRlZiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY2pzTW9kdWxlLmV4cG9ydHMgIT09IGRlZmluZWRbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lZFtuYW1lXSA9IGNqc01vZHVsZS5leHBvcnRzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmV0ICE9PSB1bmRlZiB8fCAhdXNpbmdFeHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVXNlIHRoZSByZXR1cm4gdmFsdWUgZnJvbSB0aGUgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSByZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIC8vTWF5IGp1c3QgYmUgYW4gb2JqZWN0IGRlZmluaXRpb24gZm9yIHRoZSBtb2R1bGUuIE9ubHlcbiAgICAgICAgICAgIC8vd29ycnkgYWJvdXQgZGVmaW5pbmcgaWYgaGF2ZSBhIG1vZHVsZSBuYW1lLlxuICAgICAgICAgICAgZGVmaW5lZFtuYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlcXVpcmVqcyA9IHJlcXVpcmUgPSByZXEgPSBmdW5jdGlvbiAoZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUsIGZvcmNlU3luYywgYWx0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVwcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2RlcHNdKSB7XG4gICAgICAgICAgICAgICAgLy9jYWxsYmFjayBpbiB0aGlzIGNhc2UgaXMgcmVhbGx5IHJlbE5hbWVcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlcnNbZGVwc10oY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9KdXN0IHJldHVybiB0aGUgbW9kdWxlIHdhbnRlZC4gSW4gdGhpcyBzY2VuYXJpbywgdGhlXG4gICAgICAgICAgICAvL2RlcHMgYXJnIGlzIHRoZSBtb2R1bGUgbmFtZSwgYW5kIHNlY29uZCBhcmcgKGlmIHBhc3NlZClcbiAgICAgICAgICAgIC8vaXMganVzdCB0aGUgcmVsTmFtZS5cbiAgICAgICAgICAgIC8vTm9ybWFsaXplIG1vZHVsZSBuYW1lLCBpZiBpdCBjb250YWlucyAuIG9yIC4uXG4gICAgICAgICAgICByZXR1cm4gY2FsbERlcChtYWtlTWFwKGRlcHMsIG1ha2VSZWxQYXJ0cyhjYWxsYmFjaykpLmYpO1xuICAgICAgICB9IGVsc2UgaWYgKCFkZXBzLnNwbGljZSkge1xuICAgICAgICAgICAgLy9kZXBzIGlzIGEgY29uZmlnIG9iamVjdCwgbm90IGFuIGFycmF5LlxuICAgICAgICAgICAgY29uZmlnID0gZGVwcztcbiAgICAgICAgICAgIGlmIChjb25maWcuZGVwcykge1xuICAgICAgICAgICAgICAgIHJlcShjb25maWcuZGVwcywgY29uZmlnLmNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5zcGxpY2UpIHtcbiAgICAgICAgICAgICAgICAvL2NhbGxiYWNrIGlzIGFuIGFycmF5LCB3aGljaCBtZWFucyBpdCBpcyBhIGRlcGVuZGVuY3kgbGlzdC5cbiAgICAgICAgICAgICAgICAvL0FkanVzdCBhcmdzIGlmIHRoZXJlIGFyZSBkZXBlbmRlbmNpZXNcbiAgICAgICAgICAgICAgICBkZXBzID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSByZWxOYW1lO1xuICAgICAgICAgICAgICAgIHJlbE5hbWUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXBzID0gdW5kZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1N1cHBvcnQgcmVxdWlyZShbJ2EnXSlcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgICAgICAvL0lmIHJlbE5hbWUgaXMgYSBmdW5jdGlvbiwgaXQgaXMgYW4gZXJyYmFjayBoYW5kbGVyLFxuICAgICAgICAvL3NvIHJlbW92ZSBpdC5cbiAgICAgICAgaWYgKHR5cGVvZiByZWxOYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZWxOYW1lID0gZm9yY2VTeW5jO1xuICAgICAgICAgICAgZm9yY2VTeW5jID0gYWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9TaW11bGF0ZSBhc3luYyBjYWxsYmFjaztcbiAgICAgICAgaWYgKGZvcmNlU3luYykge1xuICAgICAgICAgICAgbWFpbih1bmRlZiwgZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9Vc2luZyBhIG5vbi16ZXJvIHZhbHVlIGJlY2F1c2Ugb2YgY29uY2VybiBmb3Igd2hhdCBvbGQgYnJvd3NlcnNcbiAgICAgICAgICAgIC8vZG8sIGFuZCBsYXRlc3QgYnJvd3NlcnMgXCJ1cGdyYWRlXCIgdG8gNCBpZiBsb3dlciB2YWx1ZSBpcyB1c2VkOlxuICAgICAgICAgICAgLy9odHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS90aW1lcnMuaHRtbCNkb20td2luZG93dGltZXJzLXNldHRpbWVvdXQ6XG4gICAgICAgICAgICAvL0lmIHdhbnQgYSB2YWx1ZSBpbW1lZGlhdGVseSwgdXNlIHJlcXVpcmUoJ2lkJykgaW5zdGVhZCAtLSBzb21ldGhpbmdcbiAgICAgICAgICAgIC8vdGhhdCB3b3JrcyBpbiBhbG1vbmQgb24gdGhlIGdsb2JhbCBsZXZlbCwgYnV0IG5vdCBndWFyYW50ZWVkIGFuZFxuICAgICAgICAgICAgLy91bmxpa2VseSB0byB3b3JrIGluIG90aGVyIEFNRCBpbXBsZW1lbnRhdGlvbnMuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtYWluKHVuZGVmLCBkZXBzLCBjYWxsYmFjaywgcmVsTmFtZSk7XG4gICAgICAgICAgICB9LCA0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEp1c3QgZHJvcHMgdGhlIGNvbmZpZyBvbiB0aGUgZmxvb3IsIGJ1dCByZXR1cm5zIHJlcSBpbiBjYXNlXG4gICAgICogdGhlIGNvbmZpZyByZXR1cm4gdmFsdWUgaXMgdXNlZC5cbiAgICAgKi9cbiAgICByZXEuY29uZmlnID0gZnVuY3Rpb24gKGNmZykge1xuICAgICAgICByZXR1cm4gcmVxKGNmZyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV4cG9zZSBtb2R1bGUgcmVnaXN0cnkgZm9yIGRlYnVnZ2luZyBhbmQgdG9vbGluZ1xuICAgICAqL1xuICAgIHJlcXVpcmVqcy5fZGVmaW5lZCA9IGRlZmluZWQ7XG5cbiAgICBkZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgZGVwcywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWUgYWxtb25kIFJFQURNRTogaW5jb3JyZWN0IG1vZHVsZSBidWlsZCwgbm8gbW9kdWxlIG5hbWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVGhpcyBtb2R1bGUgbWF5IG5vdCBoYXZlIGRlcGVuZGVuY2llc1xuICAgICAgICBpZiAoIWRlcHMuc3BsaWNlKSB7XG4gICAgICAgICAgICAvL2RlcHMgaXMgbm90IGFuIGFycmF5LCBzbyBwcm9iYWJseSBtZWFuc1xuICAgICAgICAgICAgLy9hbiBvYmplY3QgbGl0ZXJhbCBvciBmYWN0b3J5IGZ1bmN0aW9uIGZvclxuICAgICAgICAgICAgLy90aGUgdmFsdWUuIEFkanVzdCBhcmdzLlxuICAgICAgICAgICAgY2FsbGJhY2sgPSBkZXBzO1xuICAgICAgICAgICAgZGVwcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNQcm9wKGRlZmluZWQsIG5hbWUpICYmICFoYXNQcm9wKHdhaXRpbmcsIG5hbWUpKSB7XG4gICAgICAgICAgICB3YWl0aW5nW25hbWVdID0gW25hbWUsIGRlcHMsIGNhbGxiYWNrXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkZWZpbmUuYW1kID0ge1xuICAgICAgICBqUXVlcnk6IHRydWVcbiAgICB9O1xufSgpKTtcblxuUzIucmVxdWlyZWpzID0gcmVxdWlyZWpzO1MyLnJlcXVpcmUgPSByZXF1aXJlO1MyLmRlZmluZSA9IGRlZmluZTtcbn1cbn0oKSk7XG5TMi5kZWZpbmUoXCJhbG1vbmRcIiwgZnVuY3Rpb24oKXt9KTtcblxuLyogZ2xvYmFsIGpRdWVyeTpmYWxzZSwgJDpmYWxzZSAqL1xuUzIuZGVmaW5lKCdqcXVlcnknLFtdLGZ1bmN0aW9uICgpIHtcbiAgdmFyIF8kID0galF1ZXJ5IHx8ICQ7XG5cbiAgaWYgKF8kID09IG51bGwgJiYgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdTZWxlY3QyOiBBbiBpbnN0YW5jZSBvZiBqUXVlcnkgb3IgYSBqUXVlcnktY29tcGF0aWJsZSBsaWJyYXJ5IHdhcyBub3QgJyArXG4gICAgICAnZm91bmQuIE1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgaW5jbHVkaW5nIGpRdWVyeSBiZWZvcmUgU2VsZWN0MiBvbiB5b3VyICcgK1xuICAgICAgJ3dlYiBwYWdlLidcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIF8kO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi91dGlscycsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgdmFyIFV0aWxzID0ge307XG5cbiAgVXRpbHMuRXh0ZW5kID0gZnVuY3Rpb24gKENoaWxkQ2xhc3MsIFN1cGVyQ2xhc3MpIHtcbiAgICB2YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgICBmdW5jdGlvbiBCYXNlQ29uc3RydWN0b3IgKCkge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IENoaWxkQ2xhc3M7XG4gICAgfVxuXG4gICAgZm9yICh2YXIga2V5IGluIFN1cGVyQ2xhc3MpIHtcbiAgICAgIGlmIChfX2hhc1Byb3AuY2FsbChTdXBlckNsYXNzLCBrZXkpKSB7XG4gICAgICAgIENoaWxkQ2xhc3Nba2V5XSA9IFN1cGVyQ2xhc3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBCYXNlQ29uc3RydWN0b3IucHJvdG90eXBlID0gU3VwZXJDbGFzcy5wcm90b3R5cGU7XG4gICAgQ2hpbGRDbGFzcy5wcm90b3R5cGUgPSBuZXcgQmFzZUNvbnN0cnVjdG9yKCk7XG4gICAgQ2hpbGRDbGFzcy5fX3N1cGVyX18gPSBTdXBlckNsYXNzLnByb3RvdHlwZTtcblxuICAgIHJldHVybiBDaGlsZENsYXNzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE1ldGhvZHMgKHRoZUNsYXNzKSB7XG4gICAgdmFyIHByb3RvID0gdGhlQ2xhc3MucHJvdG90eXBlO1xuXG4gICAgdmFyIG1ldGhvZHMgPSBbXTtcblxuICAgIGZvciAodmFyIG1ldGhvZE5hbWUgaW4gcHJvdG8pIHtcbiAgICAgIHZhciBtID0gcHJvdG9bbWV0aG9kTmFtZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG1ldGhvZHMucHVzaChtZXRob2ROYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kcztcbiAgfVxuXG4gIFV0aWxzLkRlY29yYXRlID0gZnVuY3Rpb24gKFN1cGVyQ2xhc3MsIERlY29yYXRvckNsYXNzKSB7XG4gICAgdmFyIGRlY29yYXRlZE1ldGhvZHMgPSBnZXRNZXRob2RzKERlY29yYXRvckNsYXNzKTtcbiAgICB2YXIgc3VwZXJNZXRob2RzID0gZ2V0TWV0aG9kcyhTdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIERlY29yYXRlZENsYXNzICgpIHtcbiAgICAgIHZhciB1bnNoaWZ0ID0gQXJyYXkucHJvdG90eXBlLnVuc2hpZnQ7XG5cbiAgICAgIHZhciBhcmdDb3VudCA9IERlY29yYXRvckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cbiAgICAgIHZhciBjYWxsZWRDb25zdHJ1Y3RvciA9IFN1cGVyQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAoYXJnQ291bnQgPiAwKSB7XG4gICAgICAgIHVuc2hpZnQuY2FsbChhcmd1bWVudHMsIFN1cGVyQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yKTtcblxuICAgICAgICBjYWxsZWRDb25zdHJ1Y3RvciA9IERlY29yYXRvckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICAgIH1cblxuICAgICAgY2FsbGVkQ29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBEZWNvcmF0b3JDbGFzcy5kaXNwbGF5TmFtZSA9IFN1cGVyQ2xhc3MuZGlzcGxheU5hbWU7XG5cbiAgICBmdW5jdGlvbiBjdHIgKCkge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IERlY29yYXRlZENsYXNzO1xuICAgIH1cblxuICAgIERlY29yYXRlZENsYXNzLnByb3RvdHlwZSA9IG5ldyBjdHIoKTtcblxuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgc3VwZXJNZXRob2RzLmxlbmd0aDsgbSsrKSB7XG4gICAgICB2YXIgc3VwZXJNZXRob2QgPSBzdXBlck1ldGhvZHNbbV07XG5cbiAgICAgIERlY29yYXRlZENsYXNzLnByb3RvdHlwZVtzdXBlck1ldGhvZF0gPVxuICAgICAgICBTdXBlckNsYXNzLnByb3RvdHlwZVtzdXBlck1ldGhvZF07XG4gICAgfVxuXG4gICAgdmFyIGNhbGxlZE1ldGhvZCA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICAvLyBTdHViIG91dCB0aGUgb3JpZ2luYWwgbWV0aG9kIGlmIGl0J3Mgbm90IGRlY29yYXRpbmcgYW4gYWN0dWFsIG1ldGhvZFxuICAgICAgdmFyIG9yaWdpbmFsTWV0aG9kID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAgIGlmIChtZXRob2ROYW1lIGluIERlY29yYXRlZENsYXNzLnByb3RvdHlwZSkge1xuICAgICAgICBvcmlnaW5hbE1ldGhvZCA9IERlY29yYXRlZENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRlY29yYXRlZE1ldGhvZCA9IERlY29yYXRvckNsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVuc2hpZnQgPSBBcnJheS5wcm90b3R5cGUudW5zaGlmdDtcblxuICAgICAgICB1bnNoaWZ0LmNhbGwoYXJndW1lbnRzLCBvcmlnaW5hbE1ldGhvZCk7XG5cbiAgICAgICAgcmV0dXJuIGRlY29yYXRlZE1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkZWNvcmF0ZWRNZXRob2RzLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgZGVjb3JhdGVkTWV0aG9kID0gZGVjb3JhdGVkTWV0aG9kc1tkXTtcblxuICAgICAgRGVjb3JhdGVkQ2xhc3MucHJvdG90eXBlW2RlY29yYXRlZE1ldGhvZF0gPSBjYWxsZWRNZXRob2QoZGVjb3JhdGVkTWV0aG9kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRGVjb3JhdGVkQ2xhc3M7XG4gIH07XG5cbiAgdmFyIE9ic2VydmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgfTtcblxuICBPYnNlcnZhYmxlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgaWYgKGV2ZW50IGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XSA9IFtjYWxsYmFja107XG4gICAgfVxuICB9O1xuXG4gIE9ic2VydmFibGUucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gICAgdmFyIHBhcmFtcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwge307XG5cbiAgICAvLyBQYXJhbXMgc2hvdWxkIGFsd2F5cyBjb21lIGluIGFzIGFuIGFycmF5XG4gICAgaWYgKHBhcmFtcyA9PSBudWxsKSB7XG4gICAgICBwYXJhbXMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gYXJndW1lbnRzIHRvIHRoZSBldmVudCwgdXNlIGEgdGVtcG9yYXJ5IG9iamVjdFxuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBwYXJhbXMucHVzaCh7fSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBgX3R5cGVgIG9mIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIGV2ZW50XG4gICAgcGFyYW1zWzBdLl90eXBlID0gZXZlbnQ7XG5cbiAgICBpZiAoZXZlbnQgaW4gdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuaW52b2tlKHRoaXMubGlzdGVuZXJzW2V2ZW50XSwgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9XG5cbiAgICBpZiAoJyonIGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmludm9rZSh0aGlzLmxpc3RlbmVyc1snKiddLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcblxuICBPYnNlcnZhYmxlLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAobGlzdGVuZXJzLCBwYXJhbXMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgcGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgVXRpbHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XG5cbiAgVXRpbHMuZ2VuZXJhdGVDaGFycyA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICB2YXIgY2hhcnMgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByYW5kb21DaGFyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYpO1xuICAgICAgY2hhcnMgKz0gcmFuZG9tQ2hhci50b1N0cmluZygzNik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYXJzO1xuICB9O1xuXG4gIFV0aWxzLmJpbmQgPSBmdW5jdGlvbiAoZnVuYywgY29udGV4dCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICBVdGlscy5fY29udmVydERhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGZvciAodmFyIG9yaWdpbmFsS2V5IGluIGRhdGEpIHtcbiAgICAgIHZhciBrZXlzID0gb3JpZ2luYWxLZXkuc3BsaXQoJy0nKTtcblxuICAgICAgdmFyIGRhdGFMZXZlbCA9IGRhdGE7XG5cbiAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBrZXlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdO1xuXG4gICAgICAgIC8vIExvd2VyY2FzZSB0aGUgZmlyc3QgbGV0dGVyXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIGRhc2gtc2VwYXJhdGVkIGJlY29tZXMgY2FtZWxDYXNlXG4gICAgICAgIGtleSA9IGtleS5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG5cbiAgICAgICAgaWYgKCEoa2V5IGluIGRhdGFMZXZlbCkpIHtcbiAgICAgICAgICBkYXRhTGV2ZWxba2V5XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGsgPT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgZGF0YUxldmVsW2tleV0gPSBkYXRhW29yaWdpbmFsS2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFMZXZlbCA9IGRhdGFMZXZlbFtrZXldO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgZGF0YVtvcmlnaW5hbEtleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgVXRpbHMuaGFzU2Nyb2xsID0gZnVuY3Rpb24gKGluZGV4LCBlbCkge1xuICAgIC8vIEFkYXB0ZWQgZnJvbSB0aGUgZnVuY3Rpb24gY3JlYXRlZCBieSBAU2hhZG93U2NyaXB0ZXJcbiAgICAvLyBhbmQgYWRhcHRlZCBieSBAQmlsbEJhcnJ5IG9uIHRoZSBTdGFjayBFeGNoYW5nZSBDb2RlIFJldmlldyB3ZWJzaXRlLlxuICAgIC8vIFRoZSBvcmlnaW5hbCBjb2RlIGNhbiBiZSBmb3VuZCBhdFxuICAgIC8vIGh0dHA6Ly9jb2RlcmV2aWV3LnN0YWNrZXhjaGFuZ2UuY29tL3EvMTMzMzhcbiAgICAvLyBhbmQgd2FzIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCB0aGUgU2l6emxlIHNlbGVjdG9yIGVuZ2luZS5cblxuICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICB2YXIgb3ZlcmZsb3dYID0gZWwuc3R5bGUub3ZlcmZsb3dYO1xuICAgIHZhciBvdmVyZmxvd1kgPSBlbC5zdHlsZS5vdmVyZmxvd1k7XG5cbiAgICAvL0NoZWNrIGJvdGggeCBhbmQgeSBkZWNsYXJhdGlvbnNcbiAgICBpZiAob3ZlcmZsb3dYID09PSBvdmVyZmxvd1kgJiZcbiAgICAgICAgKG92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgb3ZlcmZsb3dZID09PSAndmlzaWJsZScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG92ZXJmbG93WCA9PT0gJ3Njcm9sbCcgfHwgb3ZlcmZsb3dZID09PSAnc2Nyb2xsJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICgkZWwuaW5uZXJIZWlnaHQoKSA8IGVsLnNjcm9sbEhlaWdodCB8fFxuICAgICAgJGVsLmlubmVyV2lkdGgoKSA8IGVsLnNjcm9sbFdpZHRoKTtcbiAgfTtcblxuICBVdGlscy5lc2NhcGVNYXJrdXAgPSBmdW5jdGlvbiAobWFya3VwKSB7XG4gICAgdmFyIHJlcGxhY2VNYXAgPSB7XG4gICAgICAnXFxcXCc6ICcmIzkyOycsXG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnLFxuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAnXFwnJzogJyYjMzk7JyxcbiAgICAgICcvJzogJyYjNDc7J1xuICAgIH07XG5cbiAgICAvLyBEbyBub3QgdHJ5IHRvIGVzY2FwZSB0aGUgbWFya3VwIGlmIGl0J3Mgbm90IGEgc3RyaW5nXG4gICAgaWYgKHR5cGVvZiBtYXJrdXAgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbWFya3VwO1xuICAgIH1cblxuICAgIHJldHVybiBTdHJpbmcobWFya3VwKS5yZXBsYWNlKC9bJjw+XCInXFwvXFxcXF0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZU1hcFttYXRjaF07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQXBwZW5kIGFuIGFycmF5IG9mIGpRdWVyeSBub2RlcyB0byBhIGdpdmVuIGVsZW1lbnQuXG4gIFV0aWxzLmFwcGVuZE1hbnkgPSBmdW5jdGlvbiAoJGVsZW1lbnQsICRub2Rlcykge1xuICAgIC8vIGpRdWVyeSAxLjcueCBkb2VzIG5vdCBzdXBwb3J0ICQuZm4uYXBwZW5kKCkgd2l0aCBhbiBhcnJheVxuICAgIC8vIEZhbGwgYmFjayB0byBhIGpRdWVyeSBvYmplY3QgY29sbGVjdGlvbiB1c2luZyAkLmZuLmFkZCgpXG4gICAgaWYgKCQuZm4uanF1ZXJ5LnN1YnN0cigwLCAzKSA9PT0gJzEuNycpIHtcbiAgICAgIHZhciAkanFOb2RlcyA9ICQoKTtcblxuICAgICAgJC5tYXAoJG5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAkanFOb2RlcyA9ICRqcU5vZGVzLmFkZChub2RlKTtcbiAgICAgIH0pO1xuXG4gICAgICAkbm9kZXMgPSAkanFOb2RlcztcbiAgICB9XG5cbiAgICAkZWxlbWVudC5hcHBlbmQoJG5vZGVzKTtcbiAgfTtcblxuICAvLyBDYWNoZSBvYmplY3RzIGluIFV0aWxzLl9fY2FjaGUgaW5zdGVhZCBvZiAkLmRhdGEgKHNlZSAjNDM0NilcbiAgVXRpbHMuX19jYWNoZSA9IHt9O1xuXG4gIHZhciBpZCA9IDA7XG4gIFV0aWxzLkdldFVuaXF1ZUVsZW1lbnRJZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gR2V0IGEgdW5pcXVlIGVsZW1lbnQgSWQuIElmIGVsZW1lbnQgaGFzIG5vIGlkLFxuICAgIC8vIGNyZWF0ZXMgYSBuZXcgdW5pcXVlIG51bWJlciwgc3RvcmVzIGl0IGluIHRoZSBpZFxuICAgIC8vIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyB0aGUgbmV3IGlkLlxuICAgIC8vIElmIGFuIGlkIGFscmVhZHkgZXhpc3RzLCBpdCBzaW1wbHkgcmV0dXJucyBpdC5cblxuICAgIHZhciBzZWxlY3QySWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QyLWlkJyk7XG4gICAgaWYgKHNlbGVjdDJJZCA9PSBudWxsKSB7XG4gICAgICAvLyBJZiBlbGVtZW50IGhhcyBpZCwgdXNlIGl0LlxuICAgICAgaWYgKGVsZW1lbnQuaWQpIHtcbiAgICAgICAgc2VsZWN0MklkID0gZWxlbWVudC5pZDtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcsIHNlbGVjdDJJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QyLWlkJywgKytpZCk7XG4gICAgICAgIHNlbGVjdDJJZCA9IGlkLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3QySWQ7XG4gIH07XG5cbiAgVXRpbHMuU3RvcmVEYXRhID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgLy8gU3RvcmVzIGFuIGl0ZW0gaW4gdGhlIGNhY2hlIGZvciBhIHNwZWNpZmllZCBlbGVtZW50LlxuICAgIC8vIG5hbWUgaXMgdGhlIGNhY2hlIGtleS5cbiAgICB2YXIgaWQgPSBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQoZWxlbWVudCk7XG4gICAgaWYgKCFVdGlscy5fX2NhY2hlW2lkXSkge1xuICAgICAgVXRpbHMuX19jYWNoZVtpZF0gPSB7fTtcbiAgICB9XG5cbiAgICBVdGlscy5fX2NhY2hlW2lkXVtuYW1lXSA9IHZhbHVlO1xuICB9O1xuXG4gIFV0aWxzLkdldERhdGEgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSkge1xuICAgIC8vIFJldHJpZXZlcyBhIHZhbHVlIGZyb20gdGhlIGNhY2hlIGJ5IGl0cyBrZXkgKG5hbWUpXG4gICAgLy8gbmFtZSBpcyBvcHRpb25hbC4gSWYgbm8gbmFtZSBzcGVjaWZpZWQsIHJldHVyblxuICAgIC8vIGFsbCBjYWNoZSBpdGVtcyBmb3IgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgIC8vIGFuZCBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICB2YXIgaWQgPSBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQoZWxlbWVudCk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGlmIChVdGlscy5fX2NhY2hlW2lkXSkge1xuICAgICAgICBpZiAoVXRpbHMuX19jYWNoZVtpZF1bbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBVdGlscy5fX2NhY2hlW2lkXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJChlbGVtZW50KS5kYXRhKG5hbWUpOyAvLyBGYWxsYmFjayB0byBIVE1MNSBkYXRhIGF0dHJpYnMuXG4gICAgICB9XG4gICAgICByZXR1cm4gJChlbGVtZW50KS5kYXRhKG5hbWUpOyAvLyBGYWxsYmFjayB0byBIVE1MNSBkYXRhIGF0dHJpYnMuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBVdGlscy5fX2NhY2hlW2lkXTtcbiAgICB9XG4gIH07XG5cbiAgVXRpbHMuUmVtb3ZlRGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gUmVtb3ZlcyBhbGwgY2FjaGVkIGl0ZW1zIGZvciBhIHNwZWNpZmllZCBlbGVtZW50LlxuICAgIHZhciBpZCA9IFV0aWxzLkdldFVuaXF1ZUVsZW1lbnRJZChlbGVtZW50KTtcbiAgICBpZiAoVXRpbHMuX19jYWNoZVtpZF0gIT0gbnVsbCkge1xuICAgICAgZGVsZXRlIFV0aWxzLl9fY2FjaGVbaWRdO1xuICAgIH1cblxuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNlbGVjdDItaWQnKTtcbiAgfTtcblxuICByZXR1cm4gVXRpbHM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3Jlc3VsdHMnLFtcbiAgJ2pxdWVyeScsXG4gICcuL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIFJlc3VsdHMgKCRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhQWRhcHRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgUmVzdWx0cy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChSZXN1bHRzLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRyZXN1bHRzID0gJChcbiAgICAgICc8dWwgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvbnNcIiByb2xlPVwibGlzdGJveFwiPjwvdWw+J1xuICAgICk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnbXVsdGlwbGUnKSkge1xuICAgICAgJHJlc3VsdHMuYXR0cignYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIHRoaXMuJHJlc3VsdHMgPSAkcmVzdWx0cztcblxuICAgIHJldHVybiAkcmVzdWx0cztcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLmVtcHR5KCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuZGlzcGxheU1lc3NhZ2UgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIHZhciAkbWVzc2FnZSA9ICQoXG4gICAgICAnPGxpIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiJyArXG4gICAgICAnIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIj48L2xpPidcbiAgICApO1xuXG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQocGFyYW1zLm1lc3NhZ2UpO1xuXG4gICAgJG1lc3NhZ2UuYXBwZW5kKFxuICAgICAgZXNjYXBlTWFya3VwKFxuICAgICAgICBtZXNzYWdlKHBhcmFtcy5hcmdzKVxuICAgICAgKVxuICAgICk7XG5cbiAgICAkbWVzc2FnZVswXS5jbGFzc05hbWUgKz0gJyBzZWxlY3QyLXJlc3VsdHNfX21lc3NhZ2UnO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQoJG1lc3NhZ2UpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmhpZGVNZXNzYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX21lc3NhZ2UnKS5yZW1vdmUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIHZhciAkb3B0aW9ucyA9IFtdO1xuXG4gICAgaWYgKGRhdGEucmVzdWx0cyA9PSBudWxsIHx8IGRhdGEucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLiRyZXN1bHRzLmNoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICAgIG1lc3NhZ2U6ICdub1Jlc3VsdHMnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5yZXN1bHRzID0gdGhpcy5zb3J0KGRhdGEucmVzdWx0cyk7XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGl0ZW0gPSBkYXRhLnJlc3VsdHNbZF07XG5cbiAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgICRvcHRpb25zLnB1c2goJG9wdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQoJG9wdGlvbnMpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCRyZXN1bHRzLCAkZHJvcGRvd24pIHtcbiAgICB2YXIgJHJlc3VsdHNDb250YWluZXIgPSAkZHJvcGRvd24uZmluZCgnLnNlbGVjdDItcmVzdWx0cycpO1xuICAgICRyZXN1bHRzQ29udGFpbmVyLmFwcGVuZCgkcmVzdWx0cyk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHNvcnRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ3NvcnRlcicpO1xuXG4gICAgcmV0dXJuIHNvcnRlcihkYXRhKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5oaWdobGlnaHRGaXJzdEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRvcHRpb25zID0gdGhpcy4kcmVzdWx0c1xuICAgICAgLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgdmFyICRzZWxlY3RlZCA9ICRvcHRpb25zLmZpbHRlcignW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0nKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgc2VsZWN0ZWQgb3B0aW9uc1xuICAgIGlmICgkc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIHNlbGVjdGVkIG9wdGlvbnMsIGhpZ2hsaWdodCB0aGUgZmlyc3RcbiAgICAgICRzZWxlY3RlZC5maXJzdCgpLnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHNlbGVjdGVkIG9wdGlvbnMsIGhpZ2hsaWdodCB0aGUgZmlyc3Qgb3B0aW9uXG4gICAgICAvLyBpbiB0aGUgZHJvcGRvd25cbiAgICAgICRvcHRpb25zLmZpcnN0KCkudHJpZ2dlcignbW91c2VlbnRlcicpO1xuICAgIH1cblxuICAgIHRoaXMuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnNldENsYXNzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRhLmN1cnJlbnQoZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRJZHMgPSAkLm1hcChzZWxlY3RlZCwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHMuaWQudG9TdHJpbmcoKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgJG9wdGlvbnMgPSBzZWxmLiRyZXN1bHRzXG4gICAgICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgICAgJG9wdGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgICB2YXIgaXRlbSA9IFV0aWxzLkdldERhdGEodGhpcywgJ2RhdGEnKTtcblxuICAgICAgICAvLyBpZCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgd2hlbiBjb21wYXJpbmdcbiAgICAgICAgdmFyIGlkID0gJycgKyBpdGVtLmlkO1xuXG4gICAgICAgIGlmICgoaXRlbS5lbGVtZW50ICE9IG51bGwgJiYgaXRlbS5lbGVtZW50LnNlbGVjdGVkKSB8fFxuICAgICAgICAgICAgKGl0ZW0uZWxlbWVudCA9PSBudWxsICYmICQuaW5BcnJheShpZCwgc2VsZWN0ZWRJZHMpID4gLTEpKSB7XG4gICAgICAgICAgJG9wdGlvbi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkb3B0aW9uLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5zaG93TG9hZGluZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICB2YXIgbG9hZGluZ01vcmUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQoJ3NlYXJjaGluZycpO1xuXG4gICAgdmFyIGxvYWRpbmcgPSB7XG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB0ZXh0OiBsb2FkaW5nTW9yZShwYXJhbXMpXG4gICAgfTtcbiAgICB2YXIgJGxvYWRpbmcgPSB0aGlzLm9wdGlvbihsb2FkaW5nKTtcbiAgICAkbG9hZGluZy5jbGFzc05hbWUgKz0gJyBsb2FkaW5nLXJlc3VsdHMnO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5wcmVwZW5kKCRsb2FkaW5nKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5oaWRlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLmZpbmQoJy5sb2FkaW5nLXJlc3VsdHMnKS5yZW1vdmUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5vcHRpb24gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24nO1xuXG4gICAgdmFyIGF0dHJzID0ge1xuICAgICAgJ3JvbGUnOiAnb3B0aW9uJyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogJ2ZhbHNlJ1xuICAgIH07XG5cbiAgICB2YXIgbWF0Y2hlcyA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8XG4gICAgICB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgIHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICBpZiAoKGRhdGEuZWxlbWVudCAhPSBudWxsICYmIG1hdGNoZXMuY2FsbChkYXRhLmVsZW1lbnQsICc6ZGlzYWJsZWQnKSkgfHxcbiAgICAgICAgKGRhdGEuZWxlbWVudCA9PSBudWxsICYmIGRhdGEuZGlzYWJsZWQpKSB7XG4gICAgICBkZWxldGUgYXR0cnNbJ2FyaWEtc2VsZWN0ZWQnXTtcbiAgICAgIGF0dHJzWydhcmlhLWRpc2FibGVkJ10gPSAndHJ1ZSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaWQgPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuX3Jlc3VsdElkICE9IG51bGwpIHtcbiAgICAgIG9wdGlvbi5pZCA9IGRhdGEuX3Jlc3VsdElkO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnRpdGxlKSB7XG4gICAgICBvcHRpb24udGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgICBhdHRycy5yb2xlID0gJ2dyb3VwJztcbiAgICAgIGF0dHJzWydhcmlhLWxhYmVsJ10gPSBkYXRhLnRleHQ7XG4gICAgICBkZWxldGUgYXR0cnNbJ2FyaWEtc2VsZWN0ZWQnXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSB7XG4gICAgICB2YXIgdmFsID0gYXR0cnNbYXR0cl07XG5cbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgdmFyICRvcHRpb24gPSAkKG9wdGlvbik7XG5cbiAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ3NlbGVjdDItcmVzdWx0c19fZ3JvdXAnO1xuXG4gICAgICB2YXIgJGxhYmVsID0gJChsYWJlbCk7XG4gICAgICB0aGlzLnRlbXBsYXRlKGRhdGEsIGxhYmVsKTtcblxuICAgICAgdmFyICRjaGlsZHJlbiA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGRhdGEuY2hpbGRyZW4ubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gZGF0YS5jaGlsZHJlbltjXTtcblxuICAgICAgICB2YXIgJGNoaWxkID0gdGhpcy5vcHRpb24oY2hpbGQpO1xuXG4gICAgICAgICRjaGlsZHJlbi5wdXNoKCRjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHZhciAkY2hpbGRyZW5Db250YWluZXIgPSAkKCc8dWw+PC91bD4nLCB7XG4gICAgICAgICdjbGFzcyc6ICdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbnMgc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zLS1uZXN0ZWQnXG4gICAgICB9KTtcblxuICAgICAgJGNoaWxkcmVuQ29udGFpbmVyLmFwcGVuZCgkY2hpbGRyZW4pO1xuXG4gICAgICAkb3B0aW9uLmFwcGVuZChsYWJlbCk7XG4gICAgICAkb3B0aW9uLmFwcGVuZCgkY2hpbGRyZW5Db250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlbXBsYXRlKGRhdGEsIG9wdGlvbik7XG4gICAgfVxuXG4gICAgVXRpbHMuU3RvcmVEYXRhKG9wdGlvbiwgJ2RhdGEnLCBkYXRhKTtcblxuICAgIHJldHVybiBvcHRpb247XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgaWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5hdHRyKCdpZCcsIGlkKTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphbGwnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmNsZWFyKCk7XG4gICAgICBzZWxmLmFwcGVuZChwYXJhbXMuZGF0YSk7XG5cbiAgICAgIGlmIChjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG4gICAgICAgIHNlbGYuaGlnaGxpZ2h0Rmlyc3RJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YXBwZW5kJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5hcHBlbmQocGFyYW1zLmRhdGEpO1xuXG4gICAgICBpZiAoY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdxdWVyeScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuaGlkZU1lc3NhZ2VzKCk7XG4gICAgICBzZWxmLnNob3dMb2FkaW5nKHBhcmFtcyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG5cbiAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdzY3JvbGxBZnRlclNlbGVjdCcpKSB7XG4gICAgICAgIHNlbGYuaGlnaGxpZ2h0Rmlyc3RJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnNldENsYXNzZXMoKTtcblxuICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ3Njcm9sbEFmdGVyU2VsZWN0JykpIHtcbiAgICAgICAgc2VsZi5oaWdobGlnaHRGaXJzdEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW4sIGFyaWEtZXhwZW5kZWQ9XCJ0cnVlXCJcbiAgICAgIHNlbGYuJHJlc3VsdHMuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuICAgICAgc2VsZi5lbnN1cmVIaWdobGlnaHRWaXNpYmxlKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgY2xvc2VkLCBhcmlhLWV4cGVuZGVkPVwiZmFsc2VcIlxuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIHNlbGYuJHJlc3VsdHMucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6dG9nZ2xlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJGhpZ2hsaWdodGVkLnRyaWdnZXIoJ21vdXNldXAnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJGhpZ2hsaWdodGVkWzBdLCAnZGF0YScpO1xuXG4gICAgICBpZiAoJGhpZ2hsaWdodGVkLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnKSA9PSAndHJ1ZScpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdjbG9zZScsIHt9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0Jywge1xuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6cHJldmlvdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0cy5maW5kKCdbYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XG5cbiAgICAgIC8vIElmIHdlIGFyZSBhbHJlYWR5IGF0IHRoZSB0b3AsIGRvbid0IG1vdmUgZnVydGhlclxuICAgICAgLy8gSWYgbm8gb3B0aW9ucywgY3VycmVudEluZGV4IHdpbGwgYmUgLTFcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuXG4gICAgICAvLyBJZiBub25lIGFyZSBoaWdobGlnaHRlZCwgaGlnaGxpZ2h0IHRoZSBmaXJzdFxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyICRuZXh0ID0gJG9wdGlvbnMuZXEobmV4dEluZGV4KTtcblxuICAgICAgJG5leHQudHJpZ2dlcignbW91c2VlbnRlcicpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHNlbGYuJHJlc3VsdHMub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIG5leHRUb3AgPSAkbmV4dC5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgbmV4dE9mZnNldCA9IHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQpO1xuXG4gICAgICBpZiAobmV4dEluZGV4ID09PSAwKSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xuICAgICAgfSBlbHNlIGlmIChuZXh0VG9wIC0gY3VycmVudE9mZnNldCA8IDApIHtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AobmV4dE9mZnNldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bmV4dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgICB2YXIgJG9wdGlvbnMgPSBzZWxmLiRyZXN1bHRzLmZpbmQoJ1thcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgICB2YXIgY3VycmVudEluZGV4ID0gJG9wdGlvbnMuaW5kZXgoJGhpZ2hsaWdodGVkKTtcblxuICAgICAgdmFyIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG5cbiAgICAgIC8vIElmIHdlIGFyZSBhdCB0aGUgbGFzdCBvcHRpb24sIHN0YXkgdGhlcmVcbiAgICAgIGlmIChuZXh0SW5kZXggPj0gJG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyICRuZXh0ID0gJG9wdGlvbnMuZXEobmV4dEluZGV4KTtcblxuICAgICAgJG5leHQudHJpZ2dlcignbW91c2VlbnRlcicpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHNlbGYuJHJlc3VsdHMub2Zmc2V0KCkudG9wICtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgICB2YXIgbmV4dEJvdHRvbSA9ICRuZXh0Lm9mZnNldCgpLnRvcCArICRuZXh0Lm91dGVySGVpZ2h0KGZhbHNlKTtcbiAgICAgIHZhciBuZXh0T2Zmc2V0ID0gc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoKSArIG5leHRCb3R0b20gLSBjdXJyZW50T2Zmc2V0O1xuXG4gICAgICBpZiAobmV4dEluZGV4ID09PSAwKSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xuICAgICAgfSBlbHNlIGlmIChuZXh0Qm90dG9tID4gY3VycmVudE9mZnNldCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcChuZXh0T2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5lbGVtZW50LmFkZENsYXNzKCdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czptZXNzYWdlJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5kaXNwbGF5TWVzc2FnZShwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKCQuZm4ubW91c2V3aGVlbCkge1xuICAgICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0b3AgPSBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgIHZhciBib3R0b20gPSBzZWxmLiRyZXN1bHRzLmdldCgwKS5zY3JvbGxIZWlnaHQgLSB0b3AgKyBlLmRlbHRhWTtcblxuICAgICAgICB2YXIgaXNBdFRvcCA9IGUuZGVsdGFZID4gMCAmJiB0b3AgLSBlLmRlbHRhWSA8PSAwO1xuICAgICAgICB2YXIgaXNBdEJvdHRvbSA9IGUuZGVsdGFZIDwgMCAmJiBib3R0b20gPD0gc2VsZi4kcmVzdWx0cy5oZWlnaHQoKTtcblxuICAgICAgICBpZiAoaXNBdFRvcCkge1xuICAgICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBdEJvdHRvbSkge1xuICAgICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKFxuICAgICAgICAgICAgc2VsZi4kcmVzdWx0cy5nZXQoMCkuc2Nyb2xsSGVpZ2h0IC0gc2VsZi4kcmVzdWx0cy5oZWlnaHQoKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2V1cCcsICcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XG5cbiAgICAgIGlmICgkdGhpcy5hdHRyKCdhcmlhLXNlbGVjdGVkJykgPT09ICd0cnVlJykge1xuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmdldCgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigndW5zZWxlY3QnLCB7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdjbG9zZScsIHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3QnLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dCxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRyZXN1bHRzLm9uKCdtb3VzZWVudGVyJywgJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkXScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEodGhpcywgJ2RhdGEnKTtcblxuICAgICAgc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG5cbiAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czpmb2N1cycsIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgZWxlbWVudDogJCh0aGlzKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSB0aGlzLiRyZXN1bHRzXG4gICAgLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcblxuICAgIHJldHVybiAkaGlnaGxpZ2h0ZWQ7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLnJlbW92ZSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmVuc3VyZUhpZ2hsaWdodFZpc2libGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRoaWdobGlnaHRlZCA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJHJlc3VsdHMuZmluZCgnW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gJG9wdGlvbnMuaW5kZXgoJGhpZ2hsaWdodGVkKTtcblxuICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gdGhpcy4kcmVzdWx0cy5vZmZzZXQoKS50b3A7XG4gICAgdmFyIG5leHRUb3AgPSAkaGlnaGxpZ2h0ZWQub2Zmc2V0KCkudG9wO1xuICAgIHZhciBuZXh0T2Zmc2V0ID0gdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AoKSArIChuZXh0VG9wIC0gY3VycmVudE9mZnNldCk7XG5cbiAgICB2YXIgb2Zmc2V0RGVsdGEgPSBuZXh0VG9wIC0gY3VycmVudE9mZnNldDtcbiAgICBuZXh0T2Zmc2V0IC09ICRoaWdobGlnaHRlZC5vdXRlckhlaWdodChmYWxzZSkgKiAyO1xuXG4gICAgaWYgKGN1cnJlbnRJbmRleCA8PSAyKSB7XG4gICAgICB0aGlzLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICB9IGVsc2UgaWYgKG9mZnNldERlbHRhID4gdGhpcy4kcmVzdWx0cy5vdXRlckhlaWdodCgpIHx8IG9mZnNldERlbHRhIDwgMCkge1xuICAgICAgdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AobmV4dE9mZnNldCk7XG4gICAgfVxuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24gKHJlc3VsdCwgY29udGFpbmVyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLmdldCgndGVtcGxhdGVSZXN1bHQnKTtcbiAgICB2YXIgZXNjYXBlTWFya3VwID0gdGhpcy5vcHRpb25zLmdldCgnZXNjYXBlTWFya3VwJyk7XG5cbiAgICB2YXIgY29udGVudCA9IHRlbXBsYXRlKHJlc3VsdCwgY29udGFpbmVyKTtcblxuICAgIGlmIChjb250ZW50ID09IG51bGwpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gZXNjYXBlTWFya3VwKGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGNvbnRhaW5lcikuYXBwZW5kKGNvbnRlbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUmVzdWx0cztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIva2V5cycsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBLRVlTID0ge1xuICAgIEJBQ0tTUEFDRTogOCxcbiAgICBUQUI6IDksXG4gICAgRU5URVI6IDEzLFxuICAgIFNISUZUOiAxNixcbiAgICBDVFJMOiAxNyxcbiAgICBBTFQ6IDE4LFxuICAgIEVTQzogMjcsXG4gICAgU1BBQ0U6IDMyLFxuICAgIFBBR0VfVVA6IDMzLFxuICAgIFBBR0VfRE9XTjogMzQsXG4gICAgRU5EOiAzNSxcbiAgICBIT01FOiAzNixcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxuICAgIERFTEVURTogNDZcbiAgfTtcblxuICByZXR1cm4gS0VZUztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL2Jhc2UnLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscycsXG4gICcuLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzLCBLRVlTKSB7XG4gIGZ1bmN0aW9uIEJhc2VTZWxlY3Rpb24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBCYXNlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKEJhc2VTZWxlY3Rpb24sIFV0aWxzLk9ic2VydmFibGUpO1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHNlbGVjdGlvbiA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvblwiIHJvbGU9XCJjb21ib2JveFwiICcgK1xuICAgICAgJyBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgIHRoaXMuX3RhYmluZGV4ID0gMDtcblxuICAgIGlmIChVdGlscy5HZXREYXRhKHRoaXMuJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnKSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl90YWJpbmRleCA9IFV0aWxzLkdldERhdGEodGhpcy4kZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3RhYmluZGV4ID0gdGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgICRzZWxlY3Rpb24uYXR0cigndGl0bGUnLCB0aGlzLiRlbGVtZW50LmF0dHIoJ3RpdGxlJykpO1xuICAgICRzZWxlY3Rpb24uYXR0cigndGFiaW5kZXgnLCB0aGlzLl90YWJpbmRleCk7XG4gICAgJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24gPSAkc2VsZWN0aW9uO1xuXG4gICAgcmV0dXJuICRzZWxlY3Rpb247XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcmVzdWx0c0lkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHRzJztcblxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignZm9jdXMnLCBldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdibHVyJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5faGFuZGxlQmx1cihldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdrZXlwcmVzcycsIGV2dCk7XG5cbiAgICAgIGlmIChldnQud2hpY2ggPT09IEtFWVMuU1BBQ0UpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgcGFyYW1zLmRhdGEuX3Jlc3VsdElkKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0aW9uOnVwZGF0ZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYudXBkYXRlKHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW4sIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLW93bnMnLCByZXN1bHRzSWQpO1xuXG4gICAgICBzZWxmLl9hdHRhY2hDbG9zZUhhbmRsZXIoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBjbG9zZWQsIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLnJlbW92ZUF0dHIoJ2FyaWEtb3ducycpO1xuXG4gICAgICBzZWxmLiRzZWxlY3Rpb24udHJpZ2dlcignZm9jdXMnKTtcblxuICAgICAgc2VsZi5fZGV0YWNoQ2xvc2VIYW5kbGVyKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2VuYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsIHNlbGYuX3RhYmluZGV4KTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Rpc2FibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9KTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5faGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRlbGF5ZWQgYXMgdGhlIGFjdGl2ZSBlbGVtZW50IGlzIHRoZSBib2R5IHdoZW4gdGhlIHRhYlxuICAgIC8vIGtleSBpcyBwcmVzc2VkLCBwb3NzaWJseSBhbG9uZyB3aXRoIG90aGVycy5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBEb24ndCB0cmlnZ2VyIGBibHVyYCBpZiB0aGUgZm9jdXMgaXMgc3RpbGwgaW4gdGhlIHNlbGVjdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBzZWxmLiRzZWxlY3Rpb25bMF0pIHx8XG4gICAgICAgICgkLmNvbnRhaW5zKHNlbGYuJHNlbGVjdGlvblswXSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRyaWdnZXIoJ2JsdXInLCBldnQpO1xuICAgIH0sIDEpO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLl9hdHRhY2hDbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cbiAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdtb3VzZWRvd24uc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcblxuICAgICAgdmFyICRzZWxlY3QgPSAkdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QyJyk7XG5cbiAgICAgIHZhciAkYWxsID0gJCgnLnNlbGVjdDIuc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcblxuICAgICAgJGFsbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgPT0gJHNlbGVjdFswXSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkZWxlbWVudCA9IFV0aWxzLkdldERhdGEodGhpcywgJ2VsZW1lbnQnKTtcblxuICAgICAgICAkZWxlbWVudC5zZWxlY3QyKCdjbG9zZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuX2RldGFjaENsb3NlSGFuZGxlciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAkKGRvY3VtZW50LmJvZHkpLm9mZignbW91c2Vkb3duLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZCk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoJHNlbGVjdGlvbiwgJGNvbnRhaW5lcikge1xuICAgIHZhciAkc2VsZWN0aW9uQ29udGFpbmVyID0gJGNvbnRhaW5lci5maW5kKCcuc2VsZWN0aW9uJyk7XG4gICAgJHNlbGVjdGlvbkNvbnRhaW5lci5hcHBlbmQoJHNlbGVjdGlvbik7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9kZXRhY2hDbG9zZUhhbmRsZXIodGhpcy5jb250YWluZXIpO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHVwZGF0ZWAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIGFic3RyYWN0IHRoZSBcImVuYWJsZWRcIiAobm90IFwiZGlzYWJsZWRcIikgc3RhdGUgb2YgdGhpc1xuICAgKiBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge3RydWV9IGlmIHRoZSBpbnN0YW5jZSBpcyBub3QgZGlzYWJsZWQuXG4gICAqIEByZXR1cm4ge2ZhbHNlfSBpZiB0aGUgaW5zdGFuY2UgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5pc0VuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzRGlzYWJsZWQoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJkaXNhYmxlZFwiIHN0YXRlIG9mIHRoaXMgb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgZGlzYWJsZWQgb3B0aW9uIGlzIHRydWUuXG4gICAqIEByZXR1cm4ge2ZhbHNlfSBpZiB0aGUgZGlzYWJsZWQgb3B0aW9uIGlzIGZhbHNlLlxuICAgKi9cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldCgnZGlzYWJsZWQnKTtcbiAgfTtcblxuICByZXR1cm4gQmFzZVNlbGVjdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL3NpbmdsZScsW1xuICAnanF1ZXJ5JyxcbiAgJy4vYmFzZScsXG4gICcuLi91dGlscycsXG4gICcuLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIEJhc2VTZWxlY3Rpb24sIFV0aWxzLCBLRVlTKSB7XG4gIGZ1bmN0aW9uIFNpbmdsZVNlbGVjdGlvbiAoKSB7XG4gICAgU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKFNpbmdsZVNlbGVjdGlvbiwgQmFzZVNlbGVjdGlvbik7XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSBTaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLnJlbmRlci5jYWxsKHRoaXMpO1xuXG4gICAgJHNlbGVjdGlvbi5hZGRDbGFzcygnc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZScpO1xuXG4gICAgJHNlbGVjdGlvbi5odG1sKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkXCI+PC9zcGFuPicgK1xuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93XCIgcm9sZT1cInByZXNlbnRhdGlvblwiPicgK1xuICAgICAgICAnPGIgcm9sZT1cInByZXNlbnRhdGlvblwiPjwvYj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICByZXR1cm4gJHNlbGVjdGlvbjtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5iaW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgaWQgPSBjb250YWluZXIuaWQgKyAnLWNvbnRhaW5lcic7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpXG4gICAgICAuYXR0cignaWQnLCBpZClcbiAgICAgIC5hdHRyKCdyb2xlJywgJ3RleHRib3gnKVxuICAgICAgLmF0dHIoJ2FyaWEtcmVhZG9ubHknLCAndHJ1ZScpO1xuICAgIHRoaXMuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCBpZCk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIE9ubHkgcmVzcG9uZCB0byBsZWZ0IGNsaWNrc1xuICAgICAgaWYgKGV2dC53aGljaCAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcigndG9nZ2xlJywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBVc2VyIGV4aXRzIHRoZSBjb250YWluZXJcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLiRzZWxlY3Rpb24udHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuICAgICRyZW5kZXJlZC5lbXB0eSgpO1xuICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpOyAvLyBjbGVhciB0b29sdGlwIG9uIGVtcHR5XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5ID0gZnVuY3Rpb24gKGRhdGEsIGNvbnRhaW5lcikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlU2VsZWN0aW9uJyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgcmV0dXJuIGVzY2FwZU1hcmt1cCh0ZW1wbGF0ZShkYXRhLCBjb250YWluZXIpKTtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJCgnPHNwYW4+PC9zcGFuPicpO1xuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0aW9uID0gZGF0YVswXTtcblxuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuICAgIHZhciBmb3JtYXR0ZWQgPSB0aGlzLmRpc3BsYXkoc2VsZWN0aW9uLCAkcmVuZGVyZWQpO1xuXG4gICAgJHJlbmRlcmVkLmVtcHR5KCkuYXBwZW5kKGZvcm1hdHRlZCk7XG5cbiAgICB2YXIgdGl0bGUgPSBzZWxlY3Rpb24udGl0bGUgfHwgc2VsZWN0aW9uLnRleHQ7XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgICRyZW5kZXJlZC5hdHRyKCd0aXRsZScsIHRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHJlbmRlcmVkLnJlbW92ZUF0dHIoJ3RpdGxlJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTaW5nbGVTZWxlY3Rpb247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9tdWx0aXBsZScsW1xuICAnanF1ZXJ5JyxcbiAgJy4vYmFzZScsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBCYXNlU2VsZWN0aW9uLCBVdGlscykge1xuICBmdW5jdGlvbiBNdWx0aXBsZVNlbGVjdGlvbiAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBNdWx0aXBsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChNdWx0aXBsZVNlbGVjdGlvbiwgQmFzZVNlbGVjdGlvbik7XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHNlbGVjdGlvbiA9IE11bHRpcGxlU2VsZWN0aW9uLl9fc3VwZXJfXy5yZW5kZXIuY2FsbCh0aGlzKTtcblxuICAgICRzZWxlY3Rpb24uYWRkQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZScpO1xuXG4gICAgJHNlbGVjdGlvbi5odG1sKFxuICAgICAgJzx1bCBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiPjwvdWw+J1xuICAgICk7XG5cbiAgICByZXR1cm4gJHNlbGVjdGlvbjtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBNdWx0aXBsZVNlbGVjdGlvbi5fX3N1cGVyX18uYmluZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcigndG9nZ2xlJywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgICcuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiBpdCBpcyBkaXNhYmxlZFxuICAgICAgICBpZiAoc2VsZi5pc0Rpc2FibGVkKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJHJlbW92ZSA9ICQodGhpcyk7XG4gICAgICAgIHZhciAkc2VsZWN0aW9uID0gJHJlbW92ZS5wYXJlbnQoKTtcblxuICAgICAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJHNlbGVjdGlvblswXSwgJ2RhdGEnKTtcblxuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuICAgICRyZW5kZXJlZC5lbXB0eSgpO1xuICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5ID0gZnVuY3Rpb24gKGRhdGEsIGNvbnRhaW5lcikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlU2VsZWN0aW9uJyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgcmV0dXJuIGVzY2FwZU1hcmt1cCh0ZW1wbGF0ZShkYXRhLCBjb250YWluZXIpKTtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuc2VsZWN0aW9uQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkY29udGFpbmVyID0gJChcbiAgICAgICc8bGkgY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlXCI+JyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj4nICtcbiAgICAgICAgICAnJnRpbWVzOycgK1xuICAgICAgICAnPC9zcGFuPicgK1xuICAgICAgJzwvbGk+J1xuICAgICk7XG5cbiAgICByZXR1cm4gJGNvbnRhaW5lcjtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJHNlbGVjdGlvbnMgPSBbXTtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IGRhdGFbZF07XG5cbiAgICAgIHZhciAkc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb25Db250YWluZXIoKTtcbiAgICAgIHZhciBmb3JtYXR0ZWQgPSB0aGlzLmRpc3BsYXkoc2VsZWN0aW9uLCAkc2VsZWN0aW9uKTtcblxuICAgICAgJHNlbGVjdGlvbi5hcHBlbmQoZm9ybWF0dGVkKTtcblxuICAgICAgdmFyIHRpdGxlID0gc2VsZWN0aW9uLnRpdGxlIHx8IHNlbGVjdGlvbi50ZXh0O1xuXG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgJHNlbGVjdGlvbi5hdHRyKCd0aXRsZScsIHRpdGxlKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuU3RvcmVEYXRhKCRzZWxlY3Rpb25bMF0sICdkYXRhJywgc2VsZWN0aW9uKTtcblxuICAgICAgJHNlbGVjdGlvbnMucHVzaCgkc2VsZWN0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcblxuICAgIFV0aWxzLmFwcGVuZE1hbnkoJHJlbmRlcmVkLCAkc2VsZWN0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIE11bHRpcGxlU2VsZWN0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vcGxhY2Vob2xkZXInLFtcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKFV0aWxzKSB7XG4gIGZ1bmN0aW9uIFBsYWNlaG9sZGVyIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubm9ybWFsaXplUGxhY2Vob2xkZXIob3B0aW9ucy5nZXQoJ3BsYWNlaG9sZGVyJykpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgUGxhY2Vob2xkZXIucHJvdG90eXBlLm5vcm1hbGl6ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKF8sIHBsYWNlaG9sZGVyKSB7XG4gICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0ge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfTtcblxuICBQbGFjZWhvbGRlci5wcm90b3R5cGUuY3JlYXRlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwbGFjZWhvbGRlcikge1xuICAgIHZhciAkcGxhY2Vob2xkZXIgPSB0aGlzLnNlbGVjdGlvbkNvbnRhaW5lcigpO1xuXG4gICAgJHBsYWNlaG9sZGVyLmh0bWwodGhpcy5kaXNwbGF5KHBsYWNlaG9sZGVyKSk7XG4gICAgJHBsYWNlaG9sZGVyLmFkZENsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXInKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZScpO1xuXG4gICAgcmV0dXJuICRwbGFjZWhvbGRlcjtcbiAgfTtcblxuICBQbGFjZWhvbGRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIHZhciBzaW5nbGVQbGFjZWhvbGRlciA9IChcbiAgICAgIGRhdGEubGVuZ3RoID09IDEgJiYgZGF0YVswXS5pZCAhPSB0aGlzLnBsYWNlaG9sZGVyLmlkXG4gICAgKTtcbiAgICB2YXIgbXVsdGlwbGVTZWxlY3Rpb25zID0gZGF0YS5sZW5ndGggPiAxO1xuXG4gICAgaWYgKG11bHRpcGxlU2VsZWN0aW9ucyB8fCBzaW5nbGVQbGFjZWhvbGRlcikge1xuICAgICAgcmV0dXJuIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHZhciAkcGxhY2Vob2xkZXIgPSB0aGlzLmNyZWF0ZVBsYWNlaG9sZGVyKHRoaXMucGxhY2Vob2xkZXIpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKS5hcHBlbmQoJHBsYWNlaG9sZGVyKTtcbiAgfTtcblxuICByZXR1cm4gUGxhY2Vob2xkZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9hbGxvd0NsZWFyJyxbXG4gICdqcXVlcnknLFxuICAnLi4va2V5cycsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBLRVlTLCBVdGlscykge1xuICBmdW5jdGlvbiBBbGxvd0NsZWFyICgpIHsgfVxuXG4gIEFsbG93Q2xlYXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdTZWxlY3QyOiBUaGUgYGFsbG93Q2xlYXJgIG9wdGlvbiBzaG91bGQgYmUgdXNlZCBpbiBjb21iaW5hdGlvbiAnICtcbiAgICAgICAgICAnd2l0aCB0aGUgYHBsYWNlaG9sZGVyYCBvcHRpb24uJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignbW91c2Vkb3duJywgJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXInLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBzZWxmLl9oYW5kbGVDbGVhcihldnQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX2hhbmRsZUtleWJvYXJkQ2xlYXIoZXZ0LCBjb250YWluZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIEFsbG93Q2xlYXIucHJvdG90eXBlLl9oYW5kbGVDbGVhciA9IGZ1bmN0aW9uIChfLCBldnQpIHtcbiAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIGl0IGlzIGRpc2FibGVkXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRjbGVhciA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyJyk7XG5cbiAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIG5vdGhpbmcgaGFzIGJlZW4gc2VsZWN0ZWRcbiAgICBpZiAoJGNsZWFyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSgkY2xlYXJbMF0sICdkYXRhJyk7XG5cbiAgICB2YXIgcHJldmlvdXNWYWwgPSB0aGlzLiRlbGVtZW50LnZhbCgpO1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHRoaXMucGxhY2Vob2xkZXIuaWQpO1xuXG4gICAgdmFyIHVuc2VsZWN0RGF0YSA9IHtcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xuICAgIHRoaXMudHJpZ2dlcignY2xlYXInLCB1bnNlbGVjdERhdGEpO1xuICAgIGlmICh1bnNlbGVjdERhdGEucHJldmVudGVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnZhbChwcmV2aW91c1ZhbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICB1bnNlbGVjdERhdGEgPSB7XG4gICAgICAgIGRhdGE6IGRhdGFbZF1cbiAgICAgIH07XG5cbiAgICAgIC8vIFRyaWdnZXIgdGhlIGB1bnNlbGVjdGAgZXZlbnQsIHNvIHBlb3BsZSBjYW4gcHJldmVudCBpdCBmcm9tIGJlaW5nXG4gICAgICAvLyBjbGVhcmVkLlxuICAgICAgdGhpcy50cmlnZ2VyKCd1bnNlbGVjdCcsIHVuc2VsZWN0RGF0YSk7XG5cbiAgICAgIC8vIElmIHRoZSBldmVudCB3YXMgcHJldmVudGVkLCBkb24ndCBjbGVhciBpdCBvdXQuXG4gICAgICBpZiAodW5zZWxlY3REYXRhLnByZXZlbnRlZCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LnZhbChwcmV2aW91c1ZhbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3RvZ2dsZScsIHt9KTtcbiAgfTtcblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS5faGFuZGxlS2V5Ym9hcmRDbGVhciA9IGZ1bmN0aW9uIChfLCBldnQsIGNvbnRhaW5lcikge1xuICAgIGlmIChjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZ0LndoaWNoID09IEtFWVMuREVMRVRFIHx8IGV2dC53aGljaCA9PSBLRVlTLkJBQ0tTUEFDRSkge1xuICAgICAgdGhpcy5faGFuZGxlQ2xlYXIoZXZ0KTtcbiAgICB9XG4gIH07XG5cbiAgQWxsb3dDbGVhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuXG4gICAgaWYgKHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyJykubGVuZ3RoID4gMCB8fFxuICAgICAgICBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciByZW1vdmVBbGwgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQoJ3JlbW92ZUFsbEl0ZW1zJyk7XG5cbiAgICB2YXIgJHJlbW92ZSA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXJcIiB0aXRsZT1cIicgKyByZW1vdmVBbGwoKSArJ1wiPicgK1xuICAgICAgICAnJnRpbWVzOycgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcbiAgICBVdGlscy5TdG9yZURhdGEoJHJlbW92ZVswXSwgJ2RhdGEnLCBkYXRhKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykucHJlcGVuZCgkcmVtb3ZlKTtcbiAgfTtcblxuICByZXR1cm4gQWxsb3dDbGVhcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL3NlYXJjaCcsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL3V0aWxzJyxcbiAgJy4uL2tleXMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMsIEtFWVMpIHtcbiAgZnVuY3Rpb24gU2VhcmNoIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdmFyICRzZWFyY2ggPSAkKFxuICAgICAgJzxsaSBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1pbmxpbmVcIj4nICtcbiAgICAgICAgJzxpbnB1dCBjbGFzcz1cInNlbGVjdDItc2VhcmNoX19maWVsZFwiIHR5cGU9XCJzZWFyY2hcIiB0YWJpbmRleD1cIi0xXCInICtcbiAgICAgICAgJyBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiJyArXG4gICAgICAgICcgc3BlbGxjaGVjaz1cImZhbHNlXCIgcm9sZT1cInNlYXJjaGJveFwiIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiIC8+JyArXG4gICAgICAnPC9saT4nXG4gICAgKTtcblxuICAgIHRoaXMuJHNlYXJjaENvbnRhaW5lciA9ICRzZWFyY2g7XG4gICAgdGhpcy4kc2VhcmNoID0gJHNlYXJjaC5maW5kKCdpbnB1dCcpO1xuXG4gICAgdmFyICRyZW5kZXJlZCA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5fdHJhbnNmZXJUYWJJbmRleCgpO1xuXG4gICAgcmV0dXJuICRyZW5kZXJlZDtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcmVzdWx0c0lkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHRzJztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1jb250cm9scycsIHJlc3VsdHNJZCk7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2gudmFsKCcnKTtcbiAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZW5hYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICBzZWxmLl90cmFuc2ZlclRhYkluZGV4KCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Rpc2FibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2gucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIGlmIChwYXJhbXMuZGF0YS5fcmVzdWx0SWQpIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHBhcmFtcy5kYXRhLl9yZXN1bHRJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzaW4nLCAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2ZvY3VzJywgZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXNvdXQnLCAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9oYW5kbGVCbHVyKGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2tleWRvd24nLCAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHNlbGYudHJpZ2dlcigna2V5cHJlc3MnLCBldnQpO1xuXG4gICAgICBzZWxmLl9rZXlVcFByZXZlbnRlZCA9IGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcblxuICAgICAgdmFyIGtleSA9IGV2dC53aGljaDtcblxuICAgICAgaWYgKGtleSA9PT0gS0VZUy5CQUNLU1BBQ0UgJiYgc2VsZi4kc2VhcmNoLnZhbCgpID09PSAnJykge1xuICAgICAgICB2YXIgJHByZXZpb3VzQ2hvaWNlID0gc2VsZi4kc2VhcmNoQ29udGFpbmVyXG4gICAgICAgICAgLnByZXYoJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlJyk7XG5cbiAgICAgICAgaWYgKCRwcmV2aW91c0Nob2ljZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBVdGlscy5HZXREYXRhKCRwcmV2aW91c0Nob2ljZVswXSwgJ2RhdGEnKTtcblxuICAgICAgICAgIHNlbGYuc2VhcmNoUmVtb3ZlQ2hvaWNlKGl0ZW0pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignY2xpY2snLCAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoc2VsZi4kc2VhcmNoLnZhbCgpKSB7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRyeSB0byBkZXRlY3QgdGhlIElFIHZlcnNpb24gc2hvdWxkIHRoZSBgZG9jdW1lbnRNb2RlYCBwcm9wZXJ0eSB0aGF0XG4gICAgLy8gaXMgc3RvcmVkIG9uIHRoZSBkb2N1bWVudC4gVGhpcyBpcyBvbmx5IGltcGxlbWVudGVkIGluIElFIGFuZCBpc1xuICAgIC8vIHNsaWdodGx5IGNsZWFuZXIgdGhhbiBkb2luZyBhIHVzZXIgYWdlbnQgY2hlY2suXG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlIGluIEVkZ2UsIGJ1dCBFZGdlIGFsc28gZG9lc24ndCBoYXZlXG4gICAgLy8gdGhpcyBidWcuXG4gICAgdmFyIG1zaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gICAgdmFyIGRpc2FibGVJbnB1dEV2ZW50cyA9IG1zaWUgJiYgbXNpZSA8PSAxMTtcblxuICAgIC8vIFdvcmthcm91bmQgZm9yIGJyb3dzZXJzIHdoaWNoIGRvIG5vdCBzdXBwb3J0IHRoZSBgaW5wdXRgIGV2ZW50XG4gICAgLy8gVGhpcyB3aWxsIHByZXZlbnQgZG91YmxlLXRyaWdnZXJpbmcgb2YgZXZlbnRzIGZvciBicm93c2VycyB3aGljaCBzdXBwb3J0XG4gICAgLy8gYm90aCB0aGUgYGtleXVwYCBhbmQgYGlucHV0YCBldmVudHMuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKFxuICAgICAgJ2lucHV0LnNlYXJjaGNoZWNrJyxcbiAgICAgICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElFIHdpbGwgdHJpZ2dlciB0aGUgYGlucHV0YCBldmVudCB3aGVuIGEgcGxhY2Vob2xkZXIgaXMgdXNlZCBvbiBhXG4gICAgICAgIC8vIHNlYXJjaCBib3guIFRvIGdldCBhcm91bmQgdGhpcyBpc3N1ZSwgd2UgYXJlIGZvcmNlZCB0byBpZ25vcmUgYWxsXG4gICAgICAgIC8vIGBpbnB1dGAgZXZlbnRzIGluIElFIGFuZCBrZWVwIHVzaW5nIGBrZXl1cGAuXG4gICAgICAgIGlmIChkaXNhYmxlSW5wdXRFdmVudHMpIHtcbiAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24ub2ZmKCdpbnB1dC5zZWFyY2ggaW5wdXQuc2VhcmNoY2hlY2snKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbmJpbmQgdGhlIGR1cGxpY2F0ZWQgYGtleXVwYCBldmVudFxuICAgICAgICBzZWxmLiRzZWxlY3Rpb24ub2ZmKCdrZXl1cC5zZWFyY2gnKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKFxuICAgICAgJ2tleXVwLnNlYXJjaCBpbnB1dC5zZWFyY2gnLFxuICAgICAgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gSUUgd2lsbCB0cmlnZ2VyIHRoZSBgaW5wdXRgIGV2ZW50IHdoZW4gYSBwbGFjZWhvbGRlciBpcyB1c2VkIG9uIGFcbiAgICAgICAgLy8gc2VhcmNoIGJveC4gVG8gZ2V0IGFyb3VuZCB0aGlzIGlzc3VlLCB3ZSBhcmUgZm9yY2VkIHRvIGlnbm9yZSBhbGxcbiAgICAgICAgLy8gYGlucHV0YCBldmVudHMgaW4gSUUgYW5kIGtlZXAgdXNpbmcgYGtleXVwYC5cbiAgICAgICAgaWYgKGRpc2FibGVJbnB1dEV2ZW50cyAmJiBldnQudHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgIHNlbGYuJHNlbGVjdGlvbi5vZmYoJ2lucHV0LnNlYXJjaCBpbnB1dC5zZWFyY2hjaGVjaycpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXkgPSBldnQud2hpY2g7XG5cbiAgICAgICAgLy8gV2UgY2FuIGZyZWVseSBpZ25vcmUgZXZlbnRzIGZyb20gbW9kaWZpZXIga2V5c1xuICAgICAgICBpZiAoa2V5ID09IEtFWVMuU0hJRlQgfHwga2V5ID09IEtFWVMuQ1RSTCB8fCBrZXkgPT0gS0VZUy5BTFQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUYWJiaW5nIHdpbGwgYmUgaGFuZGxlZCBkdXJpbmcgdGhlIGBrZXlkb3duYCBwaGFzZVxuICAgICAgICBpZiAoa2V5ID09IEtFWVMuVEFCKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5oYW5kbGVTZWFyY2goZXZ0KTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHRyYW5zZmVyIHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgZnJvbSB0aGUgcmVuZGVyZWRcbiAgICogc2VsZWN0aW9uIHRvIHRoZSBzZWFyY2ggYm94LiBUaGlzIGFsbG93cyBmb3IgdGhlIHNlYXJjaCBib3ggdG8gYmUgdXNlZCBhc1xuICAgKiB0aGUgcHJpbWFyeSBmb2N1cyBpbnN0ZWFkIG9mIHRoZSBzZWxlY3Rpb24gY29udGFpbmVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgU2VhcmNoLnByb3RvdHlwZS5fdHJhbnNmZXJUYWJJbmRleCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB0aGlzLiRzZWFyY2guYXR0cigndGFiaW5kZXgnLCB0aGlzLiRzZWxlY3Rpb24uYXR0cigndGFiaW5kZXgnKSk7XG4gICAgdGhpcy4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5jcmVhdGVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBsYWNlaG9sZGVyKSB7XG4gICAgdGhpcy4kc2VhcmNoLmF0dHIoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIudGV4dCk7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgdmFyIHNlYXJjaEhhZEZvY3VzID0gdGhpcy4kc2VhcmNoWzBdID09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLiRzZWFyY2guYXR0cigncGxhY2Vob2xkZXInLCAnJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJylcbiAgICAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuJHNlYXJjaENvbnRhaW5lcik7XG5cbiAgICB0aGlzLnJlc2l6ZVNlYXJjaCgpO1xuICAgIGlmIChzZWFyY2hIYWRGb2N1cykge1xuICAgICAgdGhpcy4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfVxuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuaGFuZGxlU2VhcmNoID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzaXplU2VhcmNoKCk7XG5cbiAgICBpZiAoIXRoaXMuX2tleVVwUHJldmVudGVkKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLiRzZWFyY2gudmFsKCk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7XG4gICAgICAgIHRlcm06IGlucHV0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9rZXlVcFByZXZlbnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuc2VhcmNoUmVtb3ZlQ2hvaWNlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgaXRlbSkge1xuICAgIHRoaXMudHJpZ2dlcigndW5zZWxlY3QnLCB7XG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWFyY2gudmFsKGl0ZW0udGV4dCk7XG4gICAgdGhpcy5oYW5kbGVTZWFyY2goKTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnJlc2l6ZVNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRzZWFyY2guY3NzKCd3aWR0aCcsICcyNXB4Jyk7XG5cbiAgICB2YXIgd2lkdGggPSAnJztcblxuICAgIGlmICh0aGlzLiRzZWFyY2guYXR0cigncGxhY2Vob2xkZXInKSAhPT0gJycpIHtcbiAgICAgIHdpZHRoID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKS53aWR0aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWluaW11bVdpZHRoID0gdGhpcy4kc2VhcmNoLnZhbCgpLmxlbmd0aCArIDE7XG5cbiAgICAgIHdpZHRoID0gKG1pbmltdW1XaWR0aCAqIDAuNzUpICsgJ2VtJztcbiAgICB9XG5cbiAgICB0aGlzLiRzZWFyY2guY3NzKCd3aWR0aCcsIHdpZHRoKTtcbiAgfTtcblxuICByZXR1cm4gU2VhcmNoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vZXZlbnRSZWxheScsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgZnVuY3Rpb24gRXZlbnRSZWxheSAoKSB7IH1cblxuICBFdmVudFJlbGF5LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciByZWxheUV2ZW50cyA9IFtcbiAgICAgICdvcGVuJywgJ29wZW5pbmcnLFxuICAgICAgJ2Nsb3NlJywgJ2Nsb3NpbmcnLFxuICAgICAgJ3NlbGVjdCcsICdzZWxlY3RpbmcnLFxuICAgICAgJ3Vuc2VsZWN0JywgJ3Vuc2VsZWN0aW5nJyxcbiAgICAgICdjbGVhcicsICdjbGVhcmluZydcbiAgICBdO1xuXG4gICAgdmFyIHByZXZlbnRhYmxlRXZlbnRzID0gW1xuICAgICAgJ29wZW5pbmcnLCAnY2xvc2luZycsICdzZWxlY3RpbmcnLCAndW5zZWxlY3RpbmcnLCAnY2xlYXJpbmcnXG4gICAgXTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICAvLyBJZ25vcmUgZXZlbnRzIHRoYXQgc2hvdWxkIG5vdCBiZSByZWxheWVkXG4gICAgICBpZiAoJC5pbkFycmF5KG5hbWUsIHJlbGF5RXZlbnRzKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcGFyYW1ldGVycyBzaG91bGQgYWx3YXlzIGJlIGFuIG9iamVjdFxuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgICAvLyBHZW5lcmF0ZSB0aGUgalF1ZXJ5IGV2ZW50IGZvciB0aGUgU2VsZWN0MiBldmVudFxuICAgICAgdmFyIGV2dCA9ICQuRXZlbnQoJ3NlbGVjdDI6JyArIG5hbWUsIHtcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoZXZ0KTtcblxuICAgICAgLy8gT25seSBoYW5kbGUgcHJldmVudGFibGUgZXZlbnRzIGlmIGl0IHdhcyBvbmVcbiAgICAgIGlmICgkLmluQXJyYXkobmFtZSwgcHJldmVudGFibGVFdmVudHMpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5wcmV2ZW50ZWQgPSBldnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEV2ZW50UmVsYXk7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3RyYW5zbGF0aW9uJyxbXG4gICdqcXVlcnknLFxuICAncmVxdWlyZSdcbl0sIGZ1bmN0aW9uICgkLCByZXF1aXJlKSB7XG4gIGZ1bmN0aW9uIFRyYW5zbGF0aW9uIChkaWN0KSB7XG4gICAgdGhpcy5kaWN0ID0gZGljdCB8fCB7fTtcbiAgfVxuXG4gIFRyYW5zbGF0aW9uLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGljdDtcbiAgfTtcblxuICBUcmFuc2xhdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0aGlzLmRpY3Rba2V5XTtcbiAgfTtcblxuICBUcmFuc2xhdGlvbi5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKHRyYW5zbGF0aW9uKSB7XG4gICAgdGhpcy5kaWN0ID0gJC5leHRlbmQoe30sIHRyYW5zbGF0aW9uLmFsbCgpLCB0aGlzLmRpY3QpO1xuICB9O1xuXG4gIC8vIFN0YXRpYyBmdW5jdGlvbnNcblxuICBUcmFuc2xhdGlvbi5fY2FjaGUgPSB7fTtcblxuICBUcmFuc2xhdGlvbi5sb2FkUGF0aCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgaWYgKCEocGF0aCBpbiBUcmFuc2xhdGlvbi5fY2FjaGUpKSB7XG4gICAgICB2YXIgdHJhbnNsYXRpb25zID0gcmVxdWlyZShwYXRoKTtcblxuICAgICAgVHJhbnNsYXRpb24uX2NhY2hlW3BhdGhdID0gdHJhbnNsYXRpb25zO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb24oVHJhbnNsYXRpb24uX2NhY2hlW3BhdGhdKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNsYXRpb247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RpYWNyaXRpY3MnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICB2YXIgZGlhY3JpdGljcyA9IHtcbiAgICAnXFx1MjRCNic6ICdBJyxcbiAgICAnXFx1RkYyMSc6ICdBJyxcbiAgICAnXFx1MDBDMCc6ICdBJyxcbiAgICAnXFx1MDBDMSc6ICdBJyxcbiAgICAnXFx1MDBDMic6ICdBJyxcbiAgICAnXFx1MUVBNic6ICdBJyxcbiAgICAnXFx1MUVBNCc6ICdBJyxcbiAgICAnXFx1MUVBQSc6ICdBJyxcbiAgICAnXFx1MUVBOCc6ICdBJyxcbiAgICAnXFx1MDBDMyc6ICdBJyxcbiAgICAnXFx1MDEwMCc6ICdBJyxcbiAgICAnXFx1MDEwMic6ICdBJyxcbiAgICAnXFx1MUVCMCc6ICdBJyxcbiAgICAnXFx1MUVBRSc6ICdBJyxcbiAgICAnXFx1MUVCNCc6ICdBJyxcbiAgICAnXFx1MUVCMic6ICdBJyxcbiAgICAnXFx1MDIyNic6ICdBJyxcbiAgICAnXFx1MDFFMCc6ICdBJyxcbiAgICAnXFx1MDBDNCc6ICdBJyxcbiAgICAnXFx1MDFERSc6ICdBJyxcbiAgICAnXFx1MUVBMic6ICdBJyxcbiAgICAnXFx1MDBDNSc6ICdBJyxcbiAgICAnXFx1MDFGQSc6ICdBJyxcbiAgICAnXFx1MDFDRCc6ICdBJyxcbiAgICAnXFx1MDIwMCc6ICdBJyxcbiAgICAnXFx1MDIwMic6ICdBJyxcbiAgICAnXFx1MUVBMCc6ICdBJyxcbiAgICAnXFx1MUVBQyc6ICdBJyxcbiAgICAnXFx1MUVCNic6ICdBJyxcbiAgICAnXFx1MUUwMCc6ICdBJyxcbiAgICAnXFx1MDEwNCc6ICdBJyxcbiAgICAnXFx1MDIzQSc6ICdBJyxcbiAgICAnXFx1MkM2Ric6ICdBJyxcbiAgICAnXFx1QTczMic6ICdBQScsXG4gICAgJ1xcdTAwQzYnOiAnQUUnLFxuICAgICdcXHUwMUZDJzogJ0FFJyxcbiAgICAnXFx1MDFFMic6ICdBRScsXG4gICAgJ1xcdUE3MzQnOiAnQU8nLFxuICAgICdcXHVBNzM2JzogJ0FVJyxcbiAgICAnXFx1QTczOCc6ICdBVicsXG4gICAgJ1xcdUE3M0EnOiAnQVYnLFxuICAgICdcXHVBNzNDJzogJ0FZJyxcbiAgICAnXFx1MjRCNyc6ICdCJyxcbiAgICAnXFx1RkYyMic6ICdCJyxcbiAgICAnXFx1MUUwMic6ICdCJyxcbiAgICAnXFx1MUUwNCc6ICdCJyxcbiAgICAnXFx1MUUwNic6ICdCJyxcbiAgICAnXFx1MDI0Myc6ICdCJyxcbiAgICAnXFx1MDE4Mic6ICdCJyxcbiAgICAnXFx1MDE4MSc6ICdCJyxcbiAgICAnXFx1MjRCOCc6ICdDJyxcbiAgICAnXFx1RkYyMyc6ICdDJyxcbiAgICAnXFx1MDEwNic6ICdDJyxcbiAgICAnXFx1MDEwOCc6ICdDJyxcbiAgICAnXFx1MDEwQSc6ICdDJyxcbiAgICAnXFx1MDEwQyc6ICdDJyxcbiAgICAnXFx1MDBDNyc6ICdDJyxcbiAgICAnXFx1MUUwOCc6ICdDJyxcbiAgICAnXFx1MDE4Nyc6ICdDJyxcbiAgICAnXFx1MDIzQic6ICdDJyxcbiAgICAnXFx1QTczRSc6ICdDJyxcbiAgICAnXFx1MjRCOSc6ICdEJyxcbiAgICAnXFx1RkYyNCc6ICdEJyxcbiAgICAnXFx1MUUwQSc6ICdEJyxcbiAgICAnXFx1MDEwRSc6ICdEJyxcbiAgICAnXFx1MUUwQyc6ICdEJyxcbiAgICAnXFx1MUUxMCc6ICdEJyxcbiAgICAnXFx1MUUxMic6ICdEJyxcbiAgICAnXFx1MUUwRSc6ICdEJyxcbiAgICAnXFx1MDExMCc6ICdEJyxcbiAgICAnXFx1MDE4Qic6ICdEJyxcbiAgICAnXFx1MDE4QSc6ICdEJyxcbiAgICAnXFx1MDE4OSc6ICdEJyxcbiAgICAnXFx1QTc3OSc6ICdEJyxcbiAgICAnXFx1MDFGMSc6ICdEWicsXG4gICAgJ1xcdTAxQzQnOiAnRFonLFxuICAgICdcXHUwMUYyJzogJ0R6JyxcbiAgICAnXFx1MDFDNSc6ICdEeicsXG4gICAgJ1xcdTI0QkEnOiAnRScsXG4gICAgJ1xcdUZGMjUnOiAnRScsXG4gICAgJ1xcdTAwQzgnOiAnRScsXG4gICAgJ1xcdTAwQzknOiAnRScsXG4gICAgJ1xcdTAwQ0EnOiAnRScsXG4gICAgJ1xcdTFFQzAnOiAnRScsXG4gICAgJ1xcdTFFQkUnOiAnRScsXG4gICAgJ1xcdTFFQzQnOiAnRScsXG4gICAgJ1xcdTFFQzInOiAnRScsXG4gICAgJ1xcdTFFQkMnOiAnRScsXG4gICAgJ1xcdTAxMTInOiAnRScsXG4gICAgJ1xcdTFFMTQnOiAnRScsXG4gICAgJ1xcdTFFMTYnOiAnRScsXG4gICAgJ1xcdTAxMTQnOiAnRScsXG4gICAgJ1xcdTAxMTYnOiAnRScsXG4gICAgJ1xcdTAwQ0InOiAnRScsXG4gICAgJ1xcdTFFQkEnOiAnRScsXG4gICAgJ1xcdTAxMUEnOiAnRScsXG4gICAgJ1xcdTAyMDQnOiAnRScsXG4gICAgJ1xcdTAyMDYnOiAnRScsXG4gICAgJ1xcdTFFQjgnOiAnRScsXG4gICAgJ1xcdTFFQzYnOiAnRScsXG4gICAgJ1xcdTAyMjgnOiAnRScsXG4gICAgJ1xcdTFFMUMnOiAnRScsXG4gICAgJ1xcdTAxMTgnOiAnRScsXG4gICAgJ1xcdTFFMTgnOiAnRScsXG4gICAgJ1xcdTFFMUEnOiAnRScsXG4gICAgJ1xcdTAxOTAnOiAnRScsXG4gICAgJ1xcdTAxOEUnOiAnRScsXG4gICAgJ1xcdTI0QkInOiAnRicsXG4gICAgJ1xcdUZGMjYnOiAnRicsXG4gICAgJ1xcdTFFMUUnOiAnRicsXG4gICAgJ1xcdTAxOTEnOiAnRicsXG4gICAgJ1xcdUE3N0InOiAnRicsXG4gICAgJ1xcdTI0QkMnOiAnRycsXG4gICAgJ1xcdUZGMjcnOiAnRycsXG4gICAgJ1xcdTAxRjQnOiAnRycsXG4gICAgJ1xcdTAxMUMnOiAnRycsXG4gICAgJ1xcdTFFMjAnOiAnRycsXG4gICAgJ1xcdTAxMUUnOiAnRycsXG4gICAgJ1xcdTAxMjAnOiAnRycsXG4gICAgJ1xcdTAxRTYnOiAnRycsXG4gICAgJ1xcdTAxMjInOiAnRycsXG4gICAgJ1xcdTAxRTQnOiAnRycsXG4gICAgJ1xcdTAxOTMnOiAnRycsXG4gICAgJ1xcdUE3QTAnOiAnRycsXG4gICAgJ1xcdUE3N0QnOiAnRycsXG4gICAgJ1xcdUE3N0UnOiAnRycsXG4gICAgJ1xcdTI0QkQnOiAnSCcsXG4gICAgJ1xcdUZGMjgnOiAnSCcsXG4gICAgJ1xcdTAxMjQnOiAnSCcsXG4gICAgJ1xcdTFFMjInOiAnSCcsXG4gICAgJ1xcdTFFMjYnOiAnSCcsXG4gICAgJ1xcdTAyMUUnOiAnSCcsXG4gICAgJ1xcdTFFMjQnOiAnSCcsXG4gICAgJ1xcdTFFMjgnOiAnSCcsXG4gICAgJ1xcdTFFMkEnOiAnSCcsXG4gICAgJ1xcdTAxMjYnOiAnSCcsXG4gICAgJ1xcdTJDNjcnOiAnSCcsXG4gICAgJ1xcdTJDNzUnOiAnSCcsXG4gICAgJ1xcdUE3OEQnOiAnSCcsXG4gICAgJ1xcdTI0QkUnOiAnSScsXG4gICAgJ1xcdUZGMjknOiAnSScsXG4gICAgJ1xcdTAwQ0MnOiAnSScsXG4gICAgJ1xcdTAwQ0QnOiAnSScsXG4gICAgJ1xcdTAwQ0UnOiAnSScsXG4gICAgJ1xcdTAxMjgnOiAnSScsXG4gICAgJ1xcdTAxMkEnOiAnSScsXG4gICAgJ1xcdTAxMkMnOiAnSScsXG4gICAgJ1xcdTAxMzAnOiAnSScsXG4gICAgJ1xcdTAwQ0YnOiAnSScsXG4gICAgJ1xcdTFFMkUnOiAnSScsXG4gICAgJ1xcdTFFQzgnOiAnSScsXG4gICAgJ1xcdTAxQ0YnOiAnSScsXG4gICAgJ1xcdTAyMDgnOiAnSScsXG4gICAgJ1xcdTAyMEEnOiAnSScsXG4gICAgJ1xcdTFFQ0EnOiAnSScsXG4gICAgJ1xcdTAxMkUnOiAnSScsXG4gICAgJ1xcdTFFMkMnOiAnSScsXG4gICAgJ1xcdTAxOTcnOiAnSScsXG4gICAgJ1xcdTI0QkYnOiAnSicsXG4gICAgJ1xcdUZGMkEnOiAnSicsXG4gICAgJ1xcdTAxMzQnOiAnSicsXG4gICAgJ1xcdTAyNDgnOiAnSicsXG4gICAgJ1xcdTI0QzAnOiAnSycsXG4gICAgJ1xcdUZGMkInOiAnSycsXG4gICAgJ1xcdTFFMzAnOiAnSycsXG4gICAgJ1xcdTAxRTgnOiAnSycsXG4gICAgJ1xcdTFFMzInOiAnSycsXG4gICAgJ1xcdTAxMzYnOiAnSycsXG4gICAgJ1xcdTFFMzQnOiAnSycsXG4gICAgJ1xcdTAxOTgnOiAnSycsXG4gICAgJ1xcdTJDNjknOiAnSycsXG4gICAgJ1xcdUE3NDAnOiAnSycsXG4gICAgJ1xcdUE3NDInOiAnSycsXG4gICAgJ1xcdUE3NDQnOiAnSycsXG4gICAgJ1xcdUE3QTInOiAnSycsXG4gICAgJ1xcdTI0QzEnOiAnTCcsXG4gICAgJ1xcdUZGMkMnOiAnTCcsXG4gICAgJ1xcdTAxM0YnOiAnTCcsXG4gICAgJ1xcdTAxMzknOiAnTCcsXG4gICAgJ1xcdTAxM0QnOiAnTCcsXG4gICAgJ1xcdTFFMzYnOiAnTCcsXG4gICAgJ1xcdTFFMzgnOiAnTCcsXG4gICAgJ1xcdTAxM0InOiAnTCcsXG4gICAgJ1xcdTFFM0MnOiAnTCcsXG4gICAgJ1xcdTFFM0EnOiAnTCcsXG4gICAgJ1xcdTAxNDEnOiAnTCcsXG4gICAgJ1xcdTAyM0QnOiAnTCcsXG4gICAgJ1xcdTJDNjInOiAnTCcsXG4gICAgJ1xcdTJDNjAnOiAnTCcsXG4gICAgJ1xcdUE3NDgnOiAnTCcsXG4gICAgJ1xcdUE3NDYnOiAnTCcsXG4gICAgJ1xcdUE3ODAnOiAnTCcsXG4gICAgJ1xcdTAxQzcnOiAnTEonLFxuICAgICdcXHUwMUM4JzogJ0xqJyxcbiAgICAnXFx1MjRDMic6ICdNJyxcbiAgICAnXFx1RkYyRCc6ICdNJyxcbiAgICAnXFx1MUUzRSc6ICdNJyxcbiAgICAnXFx1MUU0MCc6ICdNJyxcbiAgICAnXFx1MUU0Mic6ICdNJyxcbiAgICAnXFx1MkM2RSc6ICdNJyxcbiAgICAnXFx1MDE5Qyc6ICdNJyxcbiAgICAnXFx1MjRDMyc6ICdOJyxcbiAgICAnXFx1RkYyRSc6ICdOJyxcbiAgICAnXFx1MDFGOCc6ICdOJyxcbiAgICAnXFx1MDE0Myc6ICdOJyxcbiAgICAnXFx1MDBEMSc6ICdOJyxcbiAgICAnXFx1MUU0NCc6ICdOJyxcbiAgICAnXFx1MDE0Nyc6ICdOJyxcbiAgICAnXFx1MUU0Nic6ICdOJyxcbiAgICAnXFx1MDE0NSc6ICdOJyxcbiAgICAnXFx1MUU0QSc6ICdOJyxcbiAgICAnXFx1MUU0OCc6ICdOJyxcbiAgICAnXFx1MDIyMCc6ICdOJyxcbiAgICAnXFx1MDE5RCc6ICdOJyxcbiAgICAnXFx1QTc5MCc6ICdOJyxcbiAgICAnXFx1QTdBNCc6ICdOJyxcbiAgICAnXFx1MDFDQSc6ICdOSicsXG4gICAgJ1xcdTAxQ0InOiAnTmonLFxuICAgICdcXHUyNEM0JzogJ08nLFxuICAgICdcXHVGRjJGJzogJ08nLFxuICAgICdcXHUwMEQyJzogJ08nLFxuICAgICdcXHUwMEQzJzogJ08nLFxuICAgICdcXHUwMEQ0JzogJ08nLFxuICAgICdcXHUxRUQyJzogJ08nLFxuICAgICdcXHUxRUQwJzogJ08nLFxuICAgICdcXHUxRUQ2JzogJ08nLFxuICAgICdcXHUxRUQ0JzogJ08nLFxuICAgICdcXHUwMEQ1JzogJ08nLFxuICAgICdcXHUxRTRDJzogJ08nLFxuICAgICdcXHUwMjJDJzogJ08nLFxuICAgICdcXHUxRTRFJzogJ08nLFxuICAgICdcXHUwMTRDJzogJ08nLFxuICAgICdcXHUxRTUwJzogJ08nLFxuICAgICdcXHUxRTUyJzogJ08nLFxuICAgICdcXHUwMTRFJzogJ08nLFxuICAgICdcXHUwMjJFJzogJ08nLFxuICAgICdcXHUwMjMwJzogJ08nLFxuICAgICdcXHUwMEQ2JzogJ08nLFxuICAgICdcXHUwMjJBJzogJ08nLFxuICAgICdcXHUxRUNFJzogJ08nLFxuICAgICdcXHUwMTUwJzogJ08nLFxuICAgICdcXHUwMUQxJzogJ08nLFxuICAgICdcXHUwMjBDJzogJ08nLFxuICAgICdcXHUwMjBFJzogJ08nLFxuICAgICdcXHUwMUEwJzogJ08nLFxuICAgICdcXHUxRURDJzogJ08nLFxuICAgICdcXHUxRURBJzogJ08nLFxuICAgICdcXHUxRUUwJzogJ08nLFxuICAgICdcXHUxRURFJzogJ08nLFxuICAgICdcXHUxRUUyJzogJ08nLFxuICAgICdcXHUxRUNDJzogJ08nLFxuICAgICdcXHUxRUQ4JzogJ08nLFxuICAgICdcXHUwMUVBJzogJ08nLFxuICAgICdcXHUwMUVDJzogJ08nLFxuICAgICdcXHUwMEQ4JzogJ08nLFxuICAgICdcXHUwMUZFJzogJ08nLFxuICAgICdcXHUwMTg2JzogJ08nLFxuICAgICdcXHUwMTlGJzogJ08nLFxuICAgICdcXHVBNzRBJzogJ08nLFxuICAgICdcXHVBNzRDJzogJ08nLFxuICAgICdcXHUwMTUyJzogJ09FJyxcbiAgICAnXFx1MDFBMic6ICdPSScsXG4gICAgJ1xcdUE3NEUnOiAnT08nLFxuICAgICdcXHUwMjIyJzogJ09VJyxcbiAgICAnXFx1MjRDNSc6ICdQJyxcbiAgICAnXFx1RkYzMCc6ICdQJyxcbiAgICAnXFx1MUU1NCc6ICdQJyxcbiAgICAnXFx1MUU1Nic6ICdQJyxcbiAgICAnXFx1MDFBNCc6ICdQJyxcbiAgICAnXFx1MkM2Myc6ICdQJyxcbiAgICAnXFx1QTc1MCc6ICdQJyxcbiAgICAnXFx1QTc1Mic6ICdQJyxcbiAgICAnXFx1QTc1NCc6ICdQJyxcbiAgICAnXFx1MjRDNic6ICdRJyxcbiAgICAnXFx1RkYzMSc6ICdRJyxcbiAgICAnXFx1QTc1Nic6ICdRJyxcbiAgICAnXFx1QTc1OCc6ICdRJyxcbiAgICAnXFx1MDI0QSc6ICdRJyxcbiAgICAnXFx1MjRDNyc6ICdSJyxcbiAgICAnXFx1RkYzMic6ICdSJyxcbiAgICAnXFx1MDE1NCc6ICdSJyxcbiAgICAnXFx1MUU1OCc6ICdSJyxcbiAgICAnXFx1MDE1OCc6ICdSJyxcbiAgICAnXFx1MDIxMCc6ICdSJyxcbiAgICAnXFx1MDIxMic6ICdSJyxcbiAgICAnXFx1MUU1QSc6ICdSJyxcbiAgICAnXFx1MUU1Qyc6ICdSJyxcbiAgICAnXFx1MDE1Nic6ICdSJyxcbiAgICAnXFx1MUU1RSc6ICdSJyxcbiAgICAnXFx1MDI0Qyc6ICdSJyxcbiAgICAnXFx1MkM2NCc6ICdSJyxcbiAgICAnXFx1QTc1QSc6ICdSJyxcbiAgICAnXFx1QTdBNic6ICdSJyxcbiAgICAnXFx1QTc4Mic6ICdSJyxcbiAgICAnXFx1MjRDOCc6ICdTJyxcbiAgICAnXFx1RkYzMyc6ICdTJyxcbiAgICAnXFx1MUU5RSc6ICdTJyxcbiAgICAnXFx1MDE1QSc6ICdTJyxcbiAgICAnXFx1MUU2NCc6ICdTJyxcbiAgICAnXFx1MDE1Qyc6ICdTJyxcbiAgICAnXFx1MUU2MCc6ICdTJyxcbiAgICAnXFx1MDE2MCc6ICdTJyxcbiAgICAnXFx1MUU2Nic6ICdTJyxcbiAgICAnXFx1MUU2Mic6ICdTJyxcbiAgICAnXFx1MUU2OCc6ICdTJyxcbiAgICAnXFx1MDIxOCc6ICdTJyxcbiAgICAnXFx1MDE1RSc6ICdTJyxcbiAgICAnXFx1MkM3RSc6ICdTJyxcbiAgICAnXFx1QTdBOCc6ICdTJyxcbiAgICAnXFx1QTc4NCc6ICdTJyxcbiAgICAnXFx1MjRDOSc6ICdUJyxcbiAgICAnXFx1RkYzNCc6ICdUJyxcbiAgICAnXFx1MUU2QSc6ICdUJyxcbiAgICAnXFx1MDE2NCc6ICdUJyxcbiAgICAnXFx1MUU2Qyc6ICdUJyxcbiAgICAnXFx1MDIxQSc6ICdUJyxcbiAgICAnXFx1MDE2Mic6ICdUJyxcbiAgICAnXFx1MUU3MCc6ICdUJyxcbiAgICAnXFx1MUU2RSc6ICdUJyxcbiAgICAnXFx1MDE2Nic6ICdUJyxcbiAgICAnXFx1MDFBQyc6ICdUJyxcbiAgICAnXFx1MDFBRSc6ICdUJyxcbiAgICAnXFx1MDIzRSc6ICdUJyxcbiAgICAnXFx1QTc4Nic6ICdUJyxcbiAgICAnXFx1QTcyOCc6ICdUWicsXG4gICAgJ1xcdTI0Q0EnOiAnVScsXG4gICAgJ1xcdUZGMzUnOiAnVScsXG4gICAgJ1xcdTAwRDknOiAnVScsXG4gICAgJ1xcdTAwREEnOiAnVScsXG4gICAgJ1xcdTAwREInOiAnVScsXG4gICAgJ1xcdTAxNjgnOiAnVScsXG4gICAgJ1xcdTFFNzgnOiAnVScsXG4gICAgJ1xcdTAxNkEnOiAnVScsXG4gICAgJ1xcdTFFN0EnOiAnVScsXG4gICAgJ1xcdTAxNkMnOiAnVScsXG4gICAgJ1xcdTAwREMnOiAnVScsXG4gICAgJ1xcdTAxREInOiAnVScsXG4gICAgJ1xcdTAxRDcnOiAnVScsXG4gICAgJ1xcdTAxRDUnOiAnVScsXG4gICAgJ1xcdTAxRDknOiAnVScsXG4gICAgJ1xcdTFFRTYnOiAnVScsXG4gICAgJ1xcdTAxNkUnOiAnVScsXG4gICAgJ1xcdTAxNzAnOiAnVScsXG4gICAgJ1xcdTAxRDMnOiAnVScsXG4gICAgJ1xcdTAyMTQnOiAnVScsXG4gICAgJ1xcdTAyMTYnOiAnVScsXG4gICAgJ1xcdTAxQUYnOiAnVScsXG4gICAgJ1xcdTFFRUEnOiAnVScsXG4gICAgJ1xcdTFFRTgnOiAnVScsXG4gICAgJ1xcdTFFRUUnOiAnVScsXG4gICAgJ1xcdTFFRUMnOiAnVScsXG4gICAgJ1xcdTFFRjAnOiAnVScsXG4gICAgJ1xcdTFFRTQnOiAnVScsXG4gICAgJ1xcdTFFNzInOiAnVScsXG4gICAgJ1xcdTAxNzInOiAnVScsXG4gICAgJ1xcdTFFNzYnOiAnVScsXG4gICAgJ1xcdTFFNzQnOiAnVScsXG4gICAgJ1xcdTAyNDQnOiAnVScsXG4gICAgJ1xcdTI0Q0InOiAnVicsXG4gICAgJ1xcdUZGMzYnOiAnVicsXG4gICAgJ1xcdTFFN0MnOiAnVicsXG4gICAgJ1xcdTFFN0UnOiAnVicsXG4gICAgJ1xcdTAxQjInOiAnVicsXG4gICAgJ1xcdUE3NUUnOiAnVicsXG4gICAgJ1xcdTAyNDUnOiAnVicsXG4gICAgJ1xcdUE3NjAnOiAnVlknLFxuICAgICdcXHUyNENDJzogJ1cnLFxuICAgICdcXHVGRjM3JzogJ1cnLFxuICAgICdcXHUxRTgwJzogJ1cnLFxuICAgICdcXHUxRTgyJzogJ1cnLFxuICAgICdcXHUwMTc0JzogJ1cnLFxuICAgICdcXHUxRTg2JzogJ1cnLFxuICAgICdcXHUxRTg0JzogJ1cnLFxuICAgICdcXHUxRTg4JzogJ1cnLFxuICAgICdcXHUyQzcyJzogJ1cnLFxuICAgICdcXHUyNENEJzogJ1gnLFxuICAgICdcXHVGRjM4JzogJ1gnLFxuICAgICdcXHUxRThBJzogJ1gnLFxuICAgICdcXHUxRThDJzogJ1gnLFxuICAgICdcXHUyNENFJzogJ1knLFxuICAgICdcXHVGRjM5JzogJ1knLFxuICAgICdcXHUxRUYyJzogJ1knLFxuICAgICdcXHUwMEREJzogJ1knLFxuICAgICdcXHUwMTc2JzogJ1knLFxuICAgICdcXHUxRUY4JzogJ1knLFxuICAgICdcXHUwMjMyJzogJ1knLFxuICAgICdcXHUxRThFJzogJ1knLFxuICAgICdcXHUwMTc4JzogJ1knLFxuICAgICdcXHUxRUY2JzogJ1knLFxuICAgICdcXHUxRUY0JzogJ1knLFxuICAgICdcXHUwMUIzJzogJ1knLFxuICAgICdcXHUwMjRFJzogJ1knLFxuICAgICdcXHUxRUZFJzogJ1knLFxuICAgICdcXHUyNENGJzogJ1onLFxuICAgICdcXHVGRjNBJzogJ1onLFxuICAgICdcXHUwMTc5JzogJ1onLFxuICAgICdcXHUxRTkwJzogJ1onLFxuICAgICdcXHUwMTdCJzogJ1onLFxuICAgICdcXHUwMTdEJzogJ1onLFxuICAgICdcXHUxRTkyJzogJ1onLFxuICAgICdcXHUxRTk0JzogJ1onLFxuICAgICdcXHUwMUI1JzogJ1onLFxuICAgICdcXHUwMjI0JzogJ1onLFxuICAgICdcXHUyQzdGJzogJ1onLFxuICAgICdcXHUyQzZCJzogJ1onLFxuICAgICdcXHVBNzYyJzogJ1onLFxuICAgICdcXHUyNEQwJzogJ2EnLFxuICAgICdcXHVGRjQxJzogJ2EnLFxuICAgICdcXHUxRTlBJzogJ2EnLFxuICAgICdcXHUwMEUwJzogJ2EnLFxuICAgICdcXHUwMEUxJzogJ2EnLFxuICAgICdcXHUwMEUyJzogJ2EnLFxuICAgICdcXHUxRUE3JzogJ2EnLFxuICAgICdcXHUxRUE1JzogJ2EnLFxuICAgICdcXHUxRUFCJzogJ2EnLFxuICAgICdcXHUxRUE5JzogJ2EnLFxuICAgICdcXHUwMEUzJzogJ2EnLFxuICAgICdcXHUwMTAxJzogJ2EnLFxuICAgICdcXHUwMTAzJzogJ2EnLFxuICAgICdcXHUxRUIxJzogJ2EnLFxuICAgICdcXHUxRUFGJzogJ2EnLFxuICAgICdcXHUxRUI1JzogJ2EnLFxuICAgICdcXHUxRUIzJzogJ2EnLFxuICAgICdcXHUwMjI3JzogJ2EnLFxuICAgICdcXHUwMUUxJzogJ2EnLFxuICAgICdcXHUwMEU0JzogJ2EnLFxuICAgICdcXHUwMURGJzogJ2EnLFxuICAgICdcXHUxRUEzJzogJ2EnLFxuICAgICdcXHUwMEU1JzogJ2EnLFxuICAgICdcXHUwMUZCJzogJ2EnLFxuICAgICdcXHUwMUNFJzogJ2EnLFxuICAgICdcXHUwMjAxJzogJ2EnLFxuICAgICdcXHUwMjAzJzogJ2EnLFxuICAgICdcXHUxRUExJzogJ2EnLFxuICAgICdcXHUxRUFEJzogJ2EnLFxuICAgICdcXHUxRUI3JzogJ2EnLFxuICAgICdcXHUxRTAxJzogJ2EnLFxuICAgICdcXHUwMTA1JzogJ2EnLFxuICAgICdcXHUyQzY1JzogJ2EnLFxuICAgICdcXHUwMjUwJzogJ2EnLFxuICAgICdcXHVBNzMzJzogJ2FhJyxcbiAgICAnXFx1MDBFNic6ICdhZScsXG4gICAgJ1xcdTAxRkQnOiAnYWUnLFxuICAgICdcXHUwMUUzJzogJ2FlJyxcbiAgICAnXFx1QTczNSc6ICdhbycsXG4gICAgJ1xcdUE3MzcnOiAnYXUnLFxuICAgICdcXHVBNzM5JzogJ2F2JyxcbiAgICAnXFx1QTczQic6ICdhdicsXG4gICAgJ1xcdUE3M0QnOiAnYXknLFxuICAgICdcXHUyNEQxJzogJ2InLFxuICAgICdcXHVGRjQyJzogJ2InLFxuICAgICdcXHUxRTAzJzogJ2InLFxuICAgICdcXHUxRTA1JzogJ2InLFxuICAgICdcXHUxRTA3JzogJ2InLFxuICAgICdcXHUwMTgwJzogJ2InLFxuICAgICdcXHUwMTgzJzogJ2InLFxuICAgICdcXHUwMjUzJzogJ2InLFxuICAgICdcXHUyNEQyJzogJ2MnLFxuICAgICdcXHVGRjQzJzogJ2MnLFxuICAgICdcXHUwMTA3JzogJ2MnLFxuICAgICdcXHUwMTA5JzogJ2MnLFxuICAgICdcXHUwMTBCJzogJ2MnLFxuICAgICdcXHUwMTBEJzogJ2MnLFxuICAgICdcXHUwMEU3JzogJ2MnLFxuICAgICdcXHUxRTA5JzogJ2MnLFxuICAgICdcXHUwMTg4JzogJ2MnLFxuICAgICdcXHUwMjNDJzogJ2MnLFxuICAgICdcXHVBNzNGJzogJ2MnLFxuICAgICdcXHUyMTg0JzogJ2MnLFxuICAgICdcXHUyNEQzJzogJ2QnLFxuICAgICdcXHVGRjQ0JzogJ2QnLFxuICAgICdcXHUxRTBCJzogJ2QnLFxuICAgICdcXHUwMTBGJzogJ2QnLFxuICAgICdcXHUxRTBEJzogJ2QnLFxuICAgICdcXHUxRTExJzogJ2QnLFxuICAgICdcXHUxRTEzJzogJ2QnLFxuICAgICdcXHUxRTBGJzogJ2QnLFxuICAgICdcXHUwMTExJzogJ2QnLFxuICAgICdcXHUwMThDJzogJ2QnLFxuICAgICdcXHUwMjU2JzogJ2QnLFxuICAgICdcXHUwMjU3JzogJ2QnLFxuICAgICdcXHVBNzdBJzogJ2QnLFxuICAgICdcXHUwMUYzJzogJ2R6JyxcbiAgICAnXFx1MDFDNic6ICdkeicsXG4gICAgJ1xcdTI0RDQnOiAnZScsXG4gICAgJ1xcdUZGNDUnOiAnZScsXG4gICAgJ1xcdTAwRTgnOiAnZScsXG4gICAgJ1xcdTAwRTknOiAnZScsXG4gICAgJ1xcdTAwRUEnOiAnZScsXG4gICAgJ1xcdTFFQzEnOiAnZScsXG4gICAgJ1xcdTFFQkYnOiAnZScsXG4gICAgJ1xcdTFFQzUnOiAnZScsXG4gICAgJ1xcdTFFQzMnOiAnZScsXG4gICAgJ1xcdTFFQkQnOiAnZScsXG4gICAgJ1xcdTAxMTMnOiAnZScsXG4gICAgJ1xcdTFFMTUnOiAnZScsXG4gICAgJ1xcdTFFMTcnOiAnZScsXG4gICAgJ1xcdTAxMTUnOiAnZScsXG4gICAgJ1xcdTAxMTcnOiAnZScsXG4gICAgJ1xcdTAwRUInOiAnZScsXG4gICAgJ1xcdTFFQkInOiAnZScsXG4gICAgJ1xcdTAxMUInOiAnZScsXG4gICAgJ1xcdTAyMDUnOiAnZScsXG4gICAgJ1xcdTAyMDcnOiAnZScsXG4gICAgJ1xcdTFFQjknOiAnZScsXG4gICAgJ1xcdTFFQzcnOiAnZScsXG4gICAgJ1xcdTAyMjknOiAnZScsXG4gICAgJ1xcdTFFMUQnOiAnZScsXG4gICAgJ1xcdTAxMTknOiAnZScsXG4gICAgJ1xcdTFFMTknOiAnZScsXG4gICAgJ1xcdTFFMUInOiAnZScsXG4gICAgJ1xcdTAyNDcnOiAnZScsXG4gICAgJ1xcdTAyNUInOiAnZScsXG4gICAgJ1xcdTAxREQnOiAnZScsXG4gICAgJ1xcdTI0RDUnOiAnZicsXG4gICAgJ1xcdUZGNDYnOiAnZicsXG4gICAgJ1xcdTFFMUYnOiAnZicsXG4gICAgJ1xcdTAxOTInOiAnZicsXG4gICAgJ1xcdUE3N0MnOiAnZicsXG4gICAgJ1xcdTI0RDYnOiAnZycsXG4gICAgJ1xcdUZGNDcnOiAnZycsXG4gICAgJ1xcdTAxRjUnOiAnZycsXG4gICAgJ1xcdTAxMUQnOiAnZycsXG4gICAgJ1xcdTFFMjEnOiAnZycsXG4gICAgJ1xcdTAxMUYnOiAnZycsXG4gICAgJ1xcdTAxMjEnOiAnZycsXG4gICAgJ1xcdTAxRTcnOiAnZycsXG4gICAgJ1xcdTAxMjMnOiAnZycsXG4gICAgJ1xcdTAxRTUnOiAnZycsXG4gICAgJ1xcdTAyNjAnOiAnZycsXG4gICAgJ1xcdUE3QTEnOiAnZycsXG4gICAgJ1xcdTFENzknOiAnZycsXG4gICAgJ1xcdUE3N0YnOiAnZycsXG4gICAgJ1xcdTI0RDcnOiAnaCcsXG4gICAgJ1xcdUZGNDgnOiAnaCcsXG4gICAgJ1xcdTAxMjUnOiAnaCcsXG4gICAgJ1xcdTFFMjMnOiAnaCcsXG4gICAgJ1xcdTFFMjcnOiAnaCcsXG4gICAgJ1xcdTAyMUYnOiAnaCcsXG4gICAgJ1xcdTFFMjUnOiAnaCcsXG4gICAgJ1xcdTFFMjknOiAnaCcsXG4gICAgJ1xcdTFFMkInOiAnaCcsXG4gICAgJ1xcdTFFOTYnOiAnaCcsXG4gICAgJ1xcdTAxMjcnOiAnaCcsXG4gICAgJ1xcdTJDNjgnOiAnaCcsXG4gICAgJ1xcdTJDNzYnOiAnaCcsXG4gICAgJ1xcdTAyNjUnOiAnaCcsXG4gICAgJ1xcdTAxOTUnOiAnaHYnLFxuICAgICdcXHUyNEQ4JzogJ2knLFxuICAgICdcXHVGRjQ5JzogJ2knLFxuICAgICdcXHUwMEVDJzogJ2knLFxuICAgICdcXHUwMEVEJzogJ2knLFxuICAgICdcXHUwMEVFJzogJ2knLFxuICAgICdcXHUwMTI5JzogJ2knLFxuICAgICdcXHUwMTJCJzogJ2knLFxuICAgICdcXHUwMTJEJzogJ2knLFxuICAgICdcXHUwMEVGJzogJ2knLFxuICAgICdcXHUxRTJGJzogJ2knLFxuICAgICdcXHUxRUM5JzogJ2knLFxuICAgICdcXHUwMUQwJzogJ2knLFxuICAgICdcXHUwMjA5JzogJ2knLFxuICAgICdcXHUwMjBCJzogJ2knLFxuICAgICdcXHUxRUNCJzogJ2knLFxuICAgICdcXHUwMTJGJzogJ2knLFxuICAgICdcXHUxRTJEJzogJ2knLFxuICAgICdcXHUwMjY4JzogJ2knLFxuICAgICdcXHUwMTMxJzogJ2knLFxuICAgICdcXHUyNEQ5JzogJ2onLFxuICAgICdcXHVGRjRBJzogJ2onLFxuICAgICdcXHUwMTM1JzogJ2onLFxuICAgICdcXHUwMUYwJzogJ2onLFxuICAgICdcXHUwMjQ5JzogJ2onLFxuICAgICdcXHUyNERBJzogJ2snLFxuICAgICdcXHVGRjRCJzogJ2snLFxuICAgICdcXHUxRTMxJzogJ2snLFxuICAgICdcXHUwMUU5JzogJ2snLFxuICAgICdcXHUxRTMzJzogJ2snLFxuICAgICdcXHUwMTM3JzogJ2snLFxuICAgICdcXHUxRTM1JzogJ2snLFxuICAgICdcXHUwMTk5JzogJ2snLFxuICAgICdcXHUyQzZBJzogJ2snLFxuICAgICdcXHVBNzQxJzogJ2snLFxuICAgICdcXHVBNzQzJzogJ2snLFxuICAgICdcXHVBNzQ1JzogJ2snLFxuICAgICdcXHVBN0EzJzogJ2snLFxuICAgICdcXHUyNERCJzogJ2wnLFxuICAgICdcXHVGRjRDJzogJ2wnLFxuICAgICdcXHUwMTQwJzogJ2wnLFxuICAgICdcXHUwMTNBJzogJ2wnLFxuICAgICdcXHUwMTNFJzogJ2wnLFxuICAgICdcXHUxRTM3JzogJ2wnLFxuICAgICdcXHUxRTM5JzogJ2wnLFxuICAgICdcXHUwMTNDJzogJ2wnLFxuICAgICdcXHUxRTNEJzogJ2wnLFxuICAgICdcXHUxRTNCJzogJ2wnLFxuICAgICdcXHUwMTdGJzogJ2wnLFxuICAgICdcXHUwMTQyJzogJ2wnLFxuICAgICdcXHUwMTlBJzogJ2wnLFxuICAgICdcXHUwMjZCJzogJ2wnLFxuICAgICdcXHUyQzYxJzogJ2wnLFxuICAgICdcXHVBNzQ5JzogJ2wnLFxuICAgICdcXHVBNzgxJzogJ2wnLFxuICAgICdcXHVBNzQ3JzogJ2wnLFxuICAgICdcXHUwMUM5JzogJ2xqJyxcbiAgICAnXFx1MjREQyc6ICdtJyxcbiAgICAnXFx1RkY0RCc6ICdtJyxcbiAgICAnXFx1MUUzRic6ICdtJyxcbiAgICAnXFx1MUU0MSc6ICdtJyxcbiAgICAnXFx1MUU0Myc6ICdtJyxcbiAgICAnXFx1MDI3MSc6ICdtJyxcbiAgICAnXFx1MDI2Ric6ICdtJyxcbiAgICAnXFx1MjRERCc6ICduJyxcbiAgICAnXFx1RkY0RSc6ICduJyxcbiAgICAnXFx1MDFGOSc6ICduJyxcbiAgICAnXFx1MDE0NCc6ICduJyxcbiAgICAnXFx1MDBGMSc6ICduJyxcbiAgICAnXFx1MUU0NSc6ICduJyxcbiAgICAnXFx1MDE0OCc6ICduJyxcbiAgICAnXFx1MUU0Nyc6ICduJyxcbiAgICAnXFx1MDE0Nic6ICduJyxcbiAgICAnXFx1MUU0Qic6ICduJyxcbiAgICAnXFx1MUU0OSc6ICduJyxcbiAgICAnXFx1MDE5RSc6ICduJyxcbiAgICAnXFx1MDI3Mic6ICduJyxcbiAgICAnXFx1MDE0OSc6ICduJyxcbiAgICAnXFx1QTc5MSc6ICduJyxcbiAgICAnXFx1QTdBNSc6ICduJyxcbiAgICAnXFx1MDFDQyc6ICduaicsXG4gICAgJ1xcdTI0REUnOiAnbycsXG4gICAgJ1xcdUZGNEYnOiAnbycsXG4gICAgJ1xcdTAwRjInOiAnbycsXG4gICAgJ1xcdTAwRjMnOiAnbycsXG4gICAgJ1xcdTAwRjQnOiAnbycsXG4gICAgJ1xcdTFFRDMnOiAnbycsXG4gICAgJ1xcdTFFRDEnOiAnbycsXG4gICAgJ1xcdTFFRDcnOiAnbycsXG4gICAgJ1xcdTFFRDUnOiAnbycsXG4gICAgJ1xcdTAwRjUnOiAnbycsXG4gICAgJ1xcdTFFNEQnOiAnbycsXG4gICAgJ1xcdTAyMkQnOiAnbycsXG4gICAgJ1xcdTFFNEYnOiAnbycsXG4gICAgJ1xcdTAxNEQnOiAnbycsXG4gICAgJ1xcdTFFNTEnOiAnbycsXG4gICAgJ1xcdTFFNTMnOiAnbycsXG4gICAgJ1xcdTAxNEYnOiAnbycsXG4gICAgJ1xcdTAyMkYnOiAnbycsXG4gICAgJ1xcdTAyMzEnOiAnbycsXG4gICAgJ1xcdTAwRjYnOiAnbycsXG4gICAgJ1xcdTAyMkInOiAnbycsXG4gICAgJ1xcdTFFQ0YnOiAnbycsXG4gICAgJ1xcdTAxNTEnOiAnbycsXG4gICAgJ1xcdTAxRDInOiAnbycsXG4gICAgJ1xcdTAyMEQnOiAnbycsXG4gICAgJ1xcdTAyMEYnOiAnbycsXG4gICAgJ1xcdTAxQTEnOiAnbycsXG4gICAgJ1xcdTFFREQnOiAnbycsXG4gICAgJ1xcdTFFREInOiAnbycsXG4gICAgJ1xcdTFFRTEnOiAnbycsXG4gICAgJ1xcdTFFREYnOiAnbycsXG4gICAgJ1xcdTFFRTMnOiAnbycsXG4gICAgJ1xcdTFFQ0QnOiAnbycsXG4gICAgJ1xcdTFFRDknOiAnbycsXG4gICAgJ1xcdTAxRUInOiAnbycsXG4gICAgJ1xcdTAxRUQnOiAnbycsXG4gICAgJ1xcdTAwRjgnOiAnbycsXG4gICAgJ1xcdTAxRkYnOiAnbycsXG4gICAgJ1xcdTAyNTQnOiAnbycsXG4gICAgJ1xcdUE3NEInOiAnbycsXG4gICAgJ1xcdUE3NEQnOiAnbycsXG4gICAgJ1xcdTAyNzUnOiAnbycsXG4gICAgJ1xcdTAxNTMnOiAnb2UnLFxuICAgICdcXHUwMUEzJzogJ29pJyxcbiAgICAnXFx1MDIyMyc6ICdvdScsXG4gICAgJ1xcdUE3NEYnOiAnb28nLFxuICAgICdcXHUyNERGJzogJ3AnLFxuICAgICdcXHVGRjUwJzogJ3AnLFxuICAgICdcXHUxRTU1JzogJ3AnLFxuICAgICdcXHUxRTU3JzogJ3AnLFxuICAgICdcXHUwMUE1JzogJ3AnLFxuICAgICdcXHUxRDdEJzogJ3AnLFxuICAgICdcXHVBNzUxJzogJ3AnLFxuICAgICdcXHVBNzUzJzogJ3AnLFxuICAgICdcXHVBNzU1JzogJ3AnLFxuICAgICdcXHUyNEUwJzogJ3EnLFxuICAgICdcXHVGRjUxJzogJ3EnLFxuICAgICdcXHUwMjRCJzogJ3EnLFxuICAgICdcXHVBNzU3JzogJ3EnLFxuICAgICdcXHVBNzU5JzogJ3EnLFxuICAgICdcXHUyNEUxJzogJ3InLFxuICAgICdcXHVGRjUyJzogJ3InLFxuICAgICdcXHUwMTU1JzogJ3InLFxuICAgICdcXHUxRTU5JzogJ3InLFxuICAgICdcXHUwMTU5JzogJ3InLFxuICAgICdcXHUwMjExJzogJ3InLFxuICAgICdcXHUwMjEzJzogJ3InLFxuICAgICdcXHUxRTVCJzogJ3InLFxuICAgICdcXHUxRTVEJzogJ3InLFxuICAgICdcXHUwMTU3JzogJ3InLFxuICAgICdcXHUxRTVGJzogJ3InLFxuICAgICdcXHUwMjREJzogJ3InLFxuICAgICdcXHUwMjdEJzogJ3InLFxuICAgICdcXHVBNzVCJzogJ3InLFxuICAgICdcXHVBN0E3JzogJ3InLFxuICAgICdcXHVBNzgzJzogJ3InLFxuICAgICdcXHUyNEUyJzogJ3MnLFxuICAgICdcXHVGRjUzJzogJ3MnLFxuICAgICdcXHUwMERGJzogJ3MnLFxuICAgICdcXHUwMTVCJzogJ3MnLFxuICAgICdcXHUxRTY1JzogJ3MnLFxuICAgICdcXHUwMTVEJzogJ3MnLFxuICAgICdcXHUxRTYxJzogJ3MnLFxuICAgICdcXHUwMTYxJzogJ3MnLFxuICAgICdcXHUxRTY3JzogJ3MnLFxuICAgICdcXHUxRTYzJzogJ3MnLFxuICAgICdcXHUxRTY5JzogJ3MnLFxuICAgICdcXHUwMjE5JzogJ3MnLFxuICAgICdcXHUwMTVGJzogJ3MnLFxuICAgICdcXHUwMjNGJzogJ3MnLFxuICAgICdcXHVBN0E5JzogJ3MnLFxuICAgICdcXHVBNzg1JzogJ3MnLFxuICAgICdcXHUxRTlCJzogJ3MnLFxuICAgICdcXHUyNEUzJzogJ3QnLFxuICAgICdcXHVGRjU0JzogJ3QnLFxuICAgICdcXHUxRTZCJzogJ3QnLFxuICAgICdcXHUxRTk3JzogJ3QnLFxuICAgICdcXHUwMTY1JzogJ3QnLFxuICAgICdcXHUxRTZEJzogJ3QnLFxuICAgICdcXHUwMjFCJzogJ3QnLFxuICAgICdcXHUwMTYzJzogJ3QnLFxuICAgICdcXHUxRTcxJzogJ3QnLFxuICAgICdcXHUxRTZGJzogJ3QnLFxuICAgICdcXHUwMTY3JzogJ3QnLFxuICAgICdcXHUwMUFEJzogJ3QnLFxuICAgICdcXHUwMjg4JzogJ3QnLFxuICAgICdcXHUyQzY2JzogJ3QnLFxuICAgICdcXHVBNzg3JzogJ3QnLFxuICAgICdcXHVBNzI5JzogJ3R6JyxcbiAgICAnXFx1MjRFNCc6ICd1JyxcbiAgICAnXFx1RkY1NSc6ICd1JyxcbiAgICAnXFx1MDBGOSc6ICd1JyxcbiAgICAnXFx1MDBGQSc6ICd1JyxcbiAgICAnXFx1MDBGQic6ICd1JyxcbiAgICAnXFx1MDE2OSc6ICd1JyxcbiAgICAnXFx1MUU3OSc6ICd1JyxcbiAgICAnXFx1MDE2Qic6ICd1JyxcbiAgICAnXFx1MUU3Qic6ICd1JyxcbiAgICAnXFx1MDE2RCc6ICd1JyxcbiAgICAnXFx1MDBGQyc6ICd1JyxcbiAgICAnXFx1MDFEQyc6ICd1JyxcbiAgICAnXFx1MDFEOCc6ICd1JyxcbiAgICAnXFx1MDFENic6ICd1JyxcbiAgICAnXFx1MDFEQSc6ICd1JyxcbiAgICAnXFx1MUVFNyc6ICd1JyxcbiAgICAnXFx1MDE2Ric6ICd1JyxcbiAgICAnXFx1MDE3MSc6ICd1JyxcbiAgICAnXFx1MDFENCc6ICd1JyxcbiAgICAnXFx1MDIxNSc6ICd1JyxcbiAgICAnXFx1MDIxNyc6ICd1JyxcbiAgICAnXFx1MDFCMCc6ICd1JyxcbiAgICAnXFx1MUVFQic6ICd1JyxcbiAgICAnXFx1MUVFOSc6ICd1JyxcbiAgICAnXFx1MUVFRic6ICd1JyxcbiAgICAnXFx1MUVFRCc6ICd1JyxcbiAgICAnXFx1MUVGMSc6ICd1JyxcbiAgICAnXFx1MUVFNSc6ICd1JyxcbiAgICAnXFx1MUU3Myc6ICd1JyxcbiAgICAnXFx1MDE3Myc6ICd1JyxcbiAgICAnXFx1MUU3Nyc6ICd1JyxcbiAgICAnXFx1MUU3NSc6ICd1JyxcbiAgICAnXFx1MDI4OSc6ICd1JyxcbiAgICAnXFx1MjRFNSc6ICd2JyxcbiAgICAnXFx1RkY1Nic6ICd2JyxcbiAgICAnXFx1MUU3RCc6ICd2JyxcbiAgICAnXFx1MUU3Ric6ICd2JyxcbiAgICAnXFx1MDI4Qic6ICd2JyxcbiAgICAnXFx1QTc1Ric6ICd2JyxcbiAgICAnXFx1MDI4Qyc6ICd2JyxcbiAgICAnXFx1QTc2MSc6ICd2eScsXG4gICAgJ1xcdTI0RTYnOiAndycsXG4gICAgJ1xcdUZGNTcnOiAndycsXG4gICAgJ1xcdTFFODEnOiAndycsXG4gICAgJ1xcdTFFODMnOiAndycsXG4gICAgJ1xcdTAxNzUnOiAndycsXG4gICAgJ1xcdTFFODcnOiAndycsXG4gICAgJ1xcdTFFODUnOiAndycsXG4gICAgJ1xcdTFFOTgnOiAndycsXG4gICAgJ1xcdTFFODknOiAndycsXG4gICAgJ1xcdTJDNzMnOiAndycsXG4gICAgJ1xcdTI0RTcnOiAneCcsXG4gICAgJ1xcdUZGNTgnOiAneCcsXG4gICAgJ1xcdTFFOEInOiAneCcsXG4gICAgJ1xcdTFFOEQnOiAneCcsXG4gICAgJ1xcdTI0RTgnOiAneScsXG4gICAgJ1xcdUZGNTknOiAneScsXG4gICAgJ1xcdTFFRjMnOiAneScsXG4gICAgJ1xcdTAwRkQnOiAneScsXG4gICAgJ1xcdTAxNzcnOiAneScsXG4gICAgJ1xcdTFFRjknOiAneScsXG4gICAgJ1xcdTAyMzMnOiAneScsXG4gICAgJ1xcdTFFOEYnOiAneScsXG4gICAgJ1xcdTAwRkYnOiAneScsXG4gICAgJ1xcdTFFRjcnOiAneScsXG4gICAgJ1xcdTFFOTknOiAneScsXG4gICAgJ1xcdTFFRjUnOiAneScsXG4gICAgJ1xcdTAxQjQnOiAneScsXG4gICAgJ1xcdTAyNEYnOiAneScsXG4gICAgJ1xcdTFFRkYnOiAneScsXG4gICAgJ1xcdTI0RTknOiAneicsXG4gICAgJ1xcdUZGNUEnOiAneicsXG4gICAgJ1xcdTAxN0EnOiAneicsXG4gICAgJ1xcdTFFOTEnOiAneicsXG4gICAgJ1xcdTAxN0MnOiAneicsXG4gICAgJ1xcdTAxN0UnOiAneicsXG4gICAgJ1xcdTFFOTMnOiAneicsXG4gICAgJ1xcdTFFOTUnOiAneicsXG4gICAgJ1xcdTAxQjYnOiAneicsXG4gICAgJ1xcdTAyMjUnOiAneicsXG4gICAgJ1xcdTAyNDAnOiAneicsXG4gICAgJ1xcdTJDNkMnOiAneicsXG4gICAgJ1xcdUE3NjMnOiAneicsXG4gICAgJ1xcdTAzODYnOiAnXFx1MDM5MScsXG4gICAgJ1xcdTAzODgnOiAnXFx1MDM5NScsXG4gICAgJ1xcdTAzODknOiAnXFx1MDM5NycsXG4gICAgJ1xcdTAzOEEnOiAnXFx1MDM5OScsXG4gICAgJ1xcdTAzQUEnOiAnXFx1MDM5OScsXG4gICAgJ1xcdTAzOEMnOiAnXFx1MDM5RicsXG4gICAgJ1xcdTAzOEUnOiAnXFx1MDNBNScsXG4gICAgJ1xcdTAzQUInOiAnXFx1MDNBNScsXG4gICAgJ1xcdTAzOEYnOiAnXFx1MDNBOScsXG4gICAgJ1xcdTAzQUMnOiAnXFx1MDNCMScsXG4gICAgJ1xcdTAzQUQnOiAnXFx1MDNCNScsXG4gICAgJ1xcdTAzQUUnOiAnXFx1MDNCNycsXG4gICAgJ1xcdTAzQUYnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzQ0EnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzOTAnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzQ0MnOiAnXFx1MDNCRicsXG4gICAgJ1xcdTAzQ0QnOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQ0InOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQjAnOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQ0UnOiAnXFx1MDNDOScsXG4gICAgJ1xcdTAzQzInOiAnXFx1MDNDMycsXG4gICAgJ1xcdTIwMTknOiAnXFwnJ1xuICB9O1xuXG4gIHJldHVybiBkaWFjcml0aWNzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL2Jhc2UnLFtcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKFV0aWxzKSB7XG4gIGZ1bmN0aW9uIEJhc2VBZGFwdGVyICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIEJhc2VBZGFwdGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKEJhc2VBZGFwdGVyLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGBjdXJyZW50YCBtZXRob2QgbXVzdCBiZSBkZWZpbmVkIGluIGNoaWxkIGNsYXNzZXMuJyk7XG4gIH07XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgcXVlcnlgIG1ldGhvZCBtdXN0IGJlIGRlZmluZWQgaW4gY2hpbGQgY2xhc3Nlcy4nKTtcbiAgfTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICAvLyBDYW4gYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIENhbiBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXG4gIH07XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmdlbmVyYXRlUmVzdWx0SWQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHQtJztcblxuICAgIGlkICs9IFV0aWxzLmdlbmVyYXRlQ2hhcnMoNCk7XG5cbiAgICBpZiAoZGF0YS5pZCAhPSBudWxsKSB7XG4gICAgICBpZCArPSAnLScgKyBkYXRhLmlkLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICctJyArIFV0aWxzLmdlbmVyYXRlQ2hhcnMoNCk7XG4gICAgfVxuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICByZXR1cm4gQmFzZUFkYXB0ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvc2VsZWN0JyxbXG4gICcuL2Jhc2UnLFxuICAnLi4vdXRpbHMnLFxuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKEJhc2VBZGFwdGVyLCBVdGlscywgJCkge1xuICBmdW5jdGlvbiBTZWxlY3RBZGFwdGVyICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgU2VsZWN0QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChTZWxlY3RBZGFwdGVyLCBCYXNlQWRhcHRlcik7XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHZhciBkYXRhID0gW107XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCc6c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgdmFyIG9wdGlvbiA9IHNlbGYuaXRlbSgkb3B0aW9uKTtcblxuICAgICAgZGF0YS5wdXNoKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBjYWxsYmFjayhkYXRhKTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRhdGEuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgLy8gSWYgZGF0YS5lbGVtZW50IGlzIGEgRE9NIG5vZGUsIHVzZSBpdCBpbnN0ZWFkXG4gICAgaWYgKCQoZGF0YS5lbGVtZW50KS5pcygnb3B0aW9uJykpIHtcbiAgICAgIGRhdGEuZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiRlbGVtZW50LnByb3AoJ211bHRpcGxlJykpIHtcbiAgICAgIHRoaXMuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgICAgdmFyIHZhbCA9IFtdO1xuXG4gICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICAgIGRhdGEucHVzaC5hcHBseShkYXRhLCBjdXJyZW50RGF0YSk7XG5cbiAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgdmFyIGlkID0gZGF0YVtkXS5pZDtcblxuICAgICAgICAgIGlmICgkLmluQXJyYXkoaWQsIHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICB2YWwucHVzaChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi4kZWxlbWVudC52YWwodmFsKTtcbiAgICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2YWwgPSBkYXRhLmlkO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWwpO1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS51bnNlbGVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLiRlbGVtZW50LnByb3AoJ211bHRpcGxlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkYXRhLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICBpZiAoJChkYXRhLmVsZW1lbnQpLmlzKCdvcHRpb24nKSkge1xuICAgICAgZGF0YS5lbGVtZW50LnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgIHZhciB2YWwgPSBbXTtcblxuICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBjdXJyZW50RGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgICB2YXIgaWQgPSBjdXJyZW50RGF0YVtkXS5pZDtcblxuICAgICAgICBpZiAoaWQgIT09IGRhdGEuaWQgJiYgJC5pbkFycmF5KGlkLCB2YWwpID09PSAtMSkge1xuICAgICAgICAgIHZhbC5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLiRlbGVtZW50LnZhbCh2YWwpO1xuXG4gICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5zZWxlY3QocGFyYW1zLmRhdGEpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYudW5zZWxlY3QocGFyYW1zLmRhdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmVtb3ZlIGFueXRoaW5nIGFkZGVkIHRvIGNoaWxkIGVsZW1lbnRzXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcqJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBSZW1vdmUgYW55IGN1c3RvbSBkYXRhIHNldCBieSBTZWxlY3QyXG4gICAgICBVdGlscy5SZW1vdmVEYXRhKHRoaXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oKTtcblxuICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoISRvcHRpb24uaXMoJ29wdGlvbicpICYmICEkb3B0aW9uLmlzKCdvcHRncm91cCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdGlvbiA9IHNlbGYuaXRlbSgkb3B0aW9uKTtcblxuICAgICAgdmFyIG1hdGNoZXMgPSBzZWxmLm1hdGNoZXMocGFyYW1zLCBvcHRpb24pO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhLnB1c2gobWF0Y2hlcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjYWxsYmFjayh7XG4gICAgICByZXN1bHRzOiBkYXRhXG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuYWRkT3B0aW9ucyA9IGZ1bmN0aW9uICgkb3B0aW9ucykge1xuICAgIFV0aWxzLmFwcGVuZE1hbnkodGhpcy4kZWxlbWVudCwgJG9wdGlvbnMpO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLm9wdGlvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIG9wdGlvbjtcblxuICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuICAgICAgb3B0aW9uLmxhYmVsID0gZGF0YS50ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGRhdGEudGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBkYXRhLnRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YS5pZDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5kaXNhYmxlZCkge1xuICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5zZWxlY3RlZCkge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50aXRsZSkge1xuICAgICAgb3B0aW9uLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICB2YXIgJG9wdGlvbiA9ICQob3B0aW9uKTtcblxuICAgIHZhciBub3JtYWxpemVkRGF0YSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YSk7XG4gICAgbm9ybWFsaXplZERhdGEuZWxlbWVudCA9IG9wdGlvbjtcblxuICAgIC8vIE92ZXJyaWRlIHRoZSBvcHRpb24ncyBkYXRhIHdpdGggdGhlIGNvbWJpbmVkIGRhdGFcbiAgICBVdGlscy5TdG9yZURhdGEob3B0aW9uLCAnZGF0YScsIG5vcm1hbGl6ZWREYXRhKTtcblxuICAgIHJldHVybiAkb3B0aW9uO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLml0ZW0gPSBmdW5jdGlvbiAoJG9wdGlvbikge1xuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBkYXRhID0gVXRpbHMuR2V0RGF0YSgkb3B0aW9uWzBdLCAnZGF0YScpO1xuXG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCRvcHRpb24uaXMoJ29wdGlvbicpKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpZDogJG9wdGlvbi52YWwoKSxcbiAgICAgICAgdGV4dDogJG9wdGlvbi50ZXh0KCksXG4gICAgICAgIGRpc2FibGVkOiAkb3B0aW9uLnByb3AoJ2Rpc2FibGVkJyksXG4gICAgICAgIHNlbGVjdGVkOiAkb3B0aW9uLnByb3AoJ3NlbGVjdGVkJyksXG4gICAgICAgIHRpdGxlOiAkb3B0aW9uLnByb3AoJ3RpdGxlJylcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgkb3B0aW9uLmlzKCdvcHRncm91cCcpKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB0ZXh0OiAkb3B0aW9uLnByb3AoJ2xhYmVsJyksXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgdGl0bGU6ICRvcHRpb24ucHJvcCgndGl0bGUnKVxuICAgICAgfTtcblxuICAgICAgdmFyICRjaGlsZHJlbiA9ICRvcHRpb24uY2hpbGRyZW4oJ29wdGlvbicpO1xuICAgICAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgJGNoaWxkcmVuLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIHZhciAkY2hpbGQgPSAkKCRjaGlsZHJlbltjXSk7XG5cbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5pdGVtKCRjaGlsZCk7XG5cbiAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGRhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICBkYXRhID0gdGhpcy5fbm9ybWFsaXplSXRlbShkYXRhKTtcbiAgICBkYXRhLmVsZW1lbnQgPSAkb3B0aW9uWzBdO1xuXG4gICAgVXRpbHMuU3RvcmVEYXRhKCRvcHRpb25bMF0sICdkYXRhJywgZGF0YSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5fbm9ybWFsaXplSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0gIT09IE9iamVjdChpdGVtKSkge1xuICAgICAgaXRlbSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0sXG4gICAgICAgIHRleHQ6IGl0ZW1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaXRlbSA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICB0ZXh0OiAnJ1xuICAgIH0sIGl0ZW0pO1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmIChpdGVtLmlkICE9IG51bGwpIHtcbiAgICAgIGl0ZW0uaWQgPSBpdGVtLmlkLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0udGV4dCAhPSBudWxsKSB7XG4gICAgICBpdGVtLnRleHQgPSBpdGVtLnRleHQudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbS5fcmVzdWx0SWQgPT0gbnVsbCAmJiBpdGVtLmlkICYmIHRoaXMuY29udGFpbmVyICE9IG51bGwpIHtcbiAgICAgIGl0ZW0uX3Jlc3VsdElkID0gdGhpcy5nZW5lcmF0ZVJlc3VsdElkKHRoaXMuY29udGFpbmVyLCBpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBpdGVtKTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKHBhcmFtcywgZGF0YSkge1xuICAgIHZhciBtYXRjaGVyID0gdGhpcy5vcHRpb25zLmdldCgnbWF0Y2hlcicpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXIocGFyYW1zLCBkYXRhKTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0QWRhcHRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9hcnJheScsW1xuICAnLi9zZWxlY3QnLFxuICAnLi4vdXRpbHMnLFxuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKFNlbGVjdEFkYXB0ZXIsIFV0aWxzLCAkKSB7XG4gIGZ1bmN0aW9uIEFycmF5QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLl9kYXRhVG9Db252ZXJ0ID0gb3B0aW9ucy5nZXQoJ2RhdGEnKSB8fCBbXTtcblxuICAgIEFycmF5QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoQXJyYXlBZGFwdGVyLCBTZWxlY3RBZGFwdGVyKTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgQXJyYXlBZGFwdGVyLl9fc3VwZXJfXy5iaW5kLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIHRoaXMuYWRkT3B0aW9ucyh0aGlzLmNvbnZlcnRUb09wdGlvbnModGhpcy5fZGF0YVRvQ29udmVydCkpO1xuICB9O1xuXG4gIEFycmF5QWRhcHRlci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgJG9wdGlvbiA9IHRoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uIChpLCBlbG0pIHtcbiAgICAgIHJldHVybiBlbG0udmFsdWUgPT0gZGF0YS5pZC50b1N0cmluZygpO1xuICAgIH0pO1xuXG4gICAgaWYgKCRvcHRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAkb3B0aW9uID0gdGhpcy5vcHRpb24oZGF0YSk7XG5cbiAgICAgIHRoaXMuYWRkT3B0aW9ucygkb3B0aW9uKTtcbiAgICB9XG5cbiAgICBBcnJheUFkYXB0ZXIuX19zdXBlcl9fLnNlbGVjdC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9O1xuXG4gIEFycmF5QWRhcHRlci5wcm90b3R5cGUuY29udmVydFRvT3B0aW9ucyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyICRleGlzdGluZyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uJyk7XG4gICAgdmFyIGV4aXN0aW5nSWRzID0gJGV4aXN0aW5nLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2VsZi5pdGVtKCQodGhpcykpLmlkO1xuICAgIH0pLmdldCgpO1xuXG4gICAgdmFyICRvcHRpb25zID0gW107XG5cbiAgICAvLyBGaWx0ZXIgb3V0IGFsbCBpdGVtcyBleGNlcHQgZm9yIHRoZSBvbmUgcGFzc2VkIGluIHRoZSBhcmd1bWVudFxuICAgIGZ1bmN0aW9uIG9ubHlJdGVtIChpdGVtKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJCh0aGlzKS52YWwoKSA9PSBpdGVtLmlkO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBpdGVtID0gdGhpcy5fbm9ybWFsaXplSXRlbShkYXRhW2RdKTtcblxuICAgICAgLy8gU2tpcCBpdGVtcyB3aGljaCB3ZXJlIHByZS1sb2FkZWQsIG9ubHkgbWVyZ2UgdGhlIGRhdGFcbiAgICAgIGlmICgkLmluQXJyYXkoaXRlbS5pZCwgZXhpc3RpbmdJZHMpID49IDApIHtcbiAgICAgICAgdmFyICRleGlzdGluZ09wdGlvbiA9ICRleGlzdGluZy5maWx0ZXIob25seUl0ZW0oaXRlbSkpO1xuXG4gICAgICAgIHZhciBleGlzdGluZ0RhdGEgPSB0aGlzLml0ZW0oJGV4aXN0aW5nT3B0aW9uKTtcbiAgICAgICAgdmFyIG5ld0RhdGEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgaXRlbSwgZXhpc3RpbmdEYXRhKTtcblxuICAgICAgICB2YXIgJG5ld09wdGlvbiA9IHRoaXMub3B0aW9uKG5ld0RhdGEpO1xuXG4gICAgICAgICRleGlzdGluZ09wdGlvbi5yZXBsYWNlV2l0aCgkbmV3T3B0aW9uKTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyICRvcHRpb24gPSB0aGlzLm9wdGlvbihpdGVtKTtcblxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyICRjaGlsZHJlbiA9IHRoaXMuY29udmVydFRvT3B0aW9ucyhpdGVtLmNoaWxkcmVuKTtcblxuICAgICAgICBVdGlscy5hcHBlbmRNYW55KCRvcHRpb24sICRjaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgICRvcHRpb25zLnB1c2goJG9wdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuICRvcHRpb25zO1xuICB9O1xuXG4gIHJldHVybiBBcnJheUFkYXB0ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvYWpheCcsW1xuICAnLi9hcnJheScsXG4gICcuLi91dGlscycsXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoQXJyYXlBZGFwdGVyLCBVdGlscywgJCkge1xuICBmdW5jdGlvbiBBamF4QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmFqYXhPcHRpb25zID0gdGhpcy5fYXBwbHlEZWZhdWx0cyhvcHRpb25zLmdldCgnYWpheCcpKTtcblxuICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLnByb2Nlc3NSZXN1bHRzICE9IG51bGwpIHtcbiAgICAgIHRoaXMucHJvY2Vzc1Jlc3VsdHMgPSB0aGlzLmFqYXhPcHRpb25zLnByb2Nlc3NSZXN1bHRzO1xuICAgIH1cblxuICAgIEFqYXhBZGFwdGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChBamF4QWRhcHRlciwgQXJyYXlBZGFwdGVyKTtcblxuICBBamF4QWRhcHRlci5wcm90b3R5cGUuX2FwcGx5RGVmYXVsdHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgICBxOiBwYXJhbXMudGVybVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB0cmFuc3BvcnQ6IGZ1bmN0aW9uIChwYXJhbXMsIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICAgICAgdmFyICRyZXF1ZXN0ID0gJC5hamF4KHBhcmFtcyk7XG5cbiAgICAgICAgJHJlcXVlc3QudGhlbihzdWNjZXNzKTtcbiAgICAgICAgJHJlcXVlc3QuZmFpbChmYWlsdXJlKTtcblxuICAgICAgICByZXR1cm4gJHJlcXVlc3Q7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMsIHRydWUpO1xuICB9O1xuXG4gIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5wcm9jZXNzUmVzdWx0cyA9IGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgQWpheEFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9yZXF1ZXN0ICE9IG51bGwpIHtcbiAgICAgIC8vIEpTT05QIHJlcXVlc3RzIGNhbm5vdCBhbHdheXMgYmUgYWJvcnRlZFxuICAgICAgaWYgKCQuaXNGdW5jdGlvbih0aGlzLl9yZXF1ZXN0LmFib3J0KSkge1xuICAgICAgICB0aGlzLl9yZXF1ZXN0LmFib3J0KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgdHlwZTogJ0dFVCdcbiAgICB9LCB0aGlzLmFqYXhPcHRpb25zKTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51cmwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMudXJsID0gb3B0aW9ucy51cmwuY2FsbCh0aGlzLiRlbGVtZW50LCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLmRhdGEgPSBvcHRpb25zLmRhdGEuY2FsbCh0aGlzLiRlbGVtZW50LCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3QgKCkge1xuICAgICAgdmFyICRyZXF1ZXN0ID0gb3B0aW9ucy50cmFuc3BvcnQob3B0aW9ucywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBzZWxmLnByb2Nlc3NSZXN1bHRzKGRhdGEsIHBhcmFtcyk7XG5cbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIC8vIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSByZXNwb25zZSBpbmNsdWRlZCBhIGByZXN1bHRzYCBrZXkuXG4gICAgICAgICAgaWYgKCFyZXN1bHRzIHx8ICFyZXN1bHRzLnJlc3VsdHMgfHwgISQuaXNBcnJheShyZXN1bHRzLnJlc3VsdHMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAnU2VsZWN0MjogVGhlIEFKQVggcmVzdWx0cyBkaWQgbm90IHJldHVybiBhbiBhcnJheSBpbiB0aGUgJyArXG4gICAgICAgICAgICAgICdgcmVzdWx0c2Aga2V5IG9mIHRoZSByZXNwb25zZS4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdHMpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBBdHRlbXB0IHRvIGRldGVjdCBpZiBhIHJlcXVlc3Qgd2FzIGFib3J0ZWRcbiAgICAgICAgLy8gT25seSB3b3JrcyBpZiB0aGUgdHJhbnNwb3J0IGV4cG9zZXMgYSBzdGF0dXMgcHJvcGVydHlcbiAgICAgICAgaWYgKCdzdGF0dXMnIGluICRyZXF1ZXN0ICYmXG4gICAgICAgICAgICAoJHJlcXVlc3Quc3RhdHVzID09PSAwIHx8ICRyZXF1ZXN0LnN0YXR1cyA9PT0gJzAnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvckxvYWRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuX3JlcXVlc3QgPSAkcmVxdWVzdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5kZWxheSAmJiBwYXJhbXMudGVybSAhPSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5fcXVlcnlUaW1lb3V0KSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fcXVlcnlUaW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcXVlcnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVxdWVzdCwgdGhpcy5hamF4T3B0aW9ucy5kZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3QoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEFqYXhBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3RhZ3MnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIFRhZ3MgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGFncyA9IG9wdGlvbnMuZ2V0KCd0YWdzJyk7XG5cbiAgICB2YXIgY3JlYXRlVGFnID0gb3B0aW9ucy5nZXQoJ2NyZWF0ZVRhZycpO1xuXG4gICAgaWYgKGNyZWF0ZVRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNyZWF0ZVRhZyA9IGNyZWF0ZVRhZztcbiAgICB9XG5cbiAgICB2YXIgaW5zZXJ0VGFnID0gb3B0aW9ucy5nZXQoJ2luc2VydFRhZycpO1xuXG4gICAgaWYgKGluc2VydFRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VGFnID0gaW5zZXJ0VGFnO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcblxuICAgIGlmICgkLmlzQXJyYXkodGFncykpIHtcbiAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGFncy5sZW5ndGg7IHQrKykge1xuICAgICAgICB2YXIgdGFnID0gdGFnc1t0XTtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLl9ub3JtYWxpemVJdGVtKHRhZyk7XG5cbiAgICAgICAgdmFyICRvcHRpb24gPSB0aGlzLm9wdGlvbihpdGVtKTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZCgkb3B0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBUYWdzLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLl9yZW1vdmVPbGRUYWdzKCk7XG5cbiAgICBpZiAocGFyYW1zLnRlcm0gPT0gbnVsbCB8fCBwYXJhbXMucGFnZSAhPSBudWxsKSB7XG4gICAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3cmFwcGVyIChvYmosIGNoaWxkKSB7XG4gICAgICB2YXIgZGF0YSA9IG9iai5yZXN1bHRzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IGRhdGFbaV07XG5cbiAgICAgICAgdmFyIGNoZWNrQ2hpbGRyZW4gPSAoXG4gICAgICAgICAgb3B0aW9uLmNoaWxkcmVuICE9IG51bGwgJiZcbiAgICAgICAgICAhd3JhcHBlcih7XG4gICAgICAgICAgICByZXN1bHRzOiBvcHRpb24uY2hpbGRyZW5cbiAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICApO1xuXG4gICAgICAgIHZhciBvcHRpb25UZXh0ID0gKG9wdGlvbi50ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB2YXIgcGFyYW1zVGVybSA9IChwYXJhbXMudGVybSB8fCAnJykudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB2YXIgY2hlY2tUZXh0ID0gb3B0aW9uVGV4dCA9PT0gcGFyYW1zVGVybTtcblxuICAgICAgICBpZiAoY2hlY2tUZXh0IHx8IGNoZWNrQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvYmouZGF0YSA9IGRhdGE7XG4gICAgICAgICAgY2FsbGJhY2sob2JqKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWcgPSBzZWxmLmNyZWF0ZVRhZyhwYXJhbXMpO1xuXG4gICAgICBpZiAodGFnICE9IG51bGwpIHtcbiAgICAgICAgdmFyICRvcHRpb24gPSBzZWxmLm9wdGlvbih0YWcpO1xuICAgICAgICAkb3B0aW9uLmF0dHIoJ2RhdGEtc2VsZWN0Mi10YWcnLCB0cnVlKTtcblxuICAgICAgICBzZWxmLmFkZE9wdGlvbnMoWyRvcHRpb25dKTtcblxuICAgICAgICBzZWxmLmluc2VydFRhZyhkYXRhLCB0YWcpO1xuICAgICAgfVxuXG4gICAgICBvYmoucmVzdWx0cyA9IGRhdGE7XG5cbiAgICAgIGNhbGxiYWNrKG9iaik7XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCB3cmFwcGVyKTtcbiAgfTtcblxuICBUYWdzLnByb3RvdHlwZS5jcmVhdGVUYWcgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMpIHtcbiAgICB2YXIgdGVybSA9ICQudHJpbShwYXJhbXMudGVybSk7XG5cbiAgICBpZiAodGVybSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZDogdGVybSxcbiAgICAgIHRleHQ6IHRlcm1cbiAgICB9O1xuICB9O1xuXG4gIFRhZ3MucHJvdG90eXBlLmluc2VydFRhZyA9IGZ1bmN0aW9uIChfLCBkYXRhLCB0YWcpIHtcbiAgICBkYXRhLnVuc2hpZnQodGFnKTtcbiAgfTtcblxuICBUYWdzLnByb3RvdHlwZS5fcmVtb3ZlT2xkVGFncyA9IGZ1bmN0aW9uIChfKSB7XG4gICAgdmFyICRvcHRpb25zID0gdGhpcy4kZWxlbWVudC5maW5kKCdvcHRpb25bZGF0YS1zZWxlY3QyLXRhZ10nKTtcblxuICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUYWdzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3Rva2VuaXplcicsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgZnVuY3Rpb24gVG9rZW5pemVyIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIHRva2VuaXplciA9IG9wdGlvbnMuZ2V0KCd0b2tlbml6ZXInKTtcblxuICAgIGlmICh0b2tlbml6ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50b2tlbml6ZXIgPSB0b2tlbml6ZXI7XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgVG9rZW5pemVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIHRoaXMuJHNlYXJjaCA9ICBjb250YWluZXIuZHJvcGRvd24uJHNlYXJjaCB8fCBjb250YWluZXIuc2VsZWN0aW9uLiRzZWFyY2ggfHxcbiAgICAgICRjb250YWluZXIuZmluZCgnLnNlbGVjdDItc2VhcmNoX19maWVsZCcpO1xuICB9O1xuXG4gIFRva2VuaXplci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQW5kU2VsZWN0IChkYXRhKSB7XG4gICAgICAvLyBOb3JtYWxpemUgdGhlIGRhdGEgb2JqZWN0IHNvIHdlIGNhbiB1c2UgaXQgZm9yIGNoZWNrc1xuICAgICAgdmFyIGl0ZW0gPSBzZWxmLl9ub3JtYWxpemVJdGVtKGRhdGEpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgZGF0YSBvYmplY3QgYWxyZWFkeSBleGlzdHMgYXMgYSB0YWdcbiAgICAgIC8vIFNlbGVjdCBpdCBpZiBpdCBkb2Vzbid0XG4gICAgICB2YXIgJGV4aXN0aW5nT3B0aW9ucyA9IHNlbGYuJGVsZW1lbnQuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcykudmFsKCkgPT09IGl0ZW0uaWQ7XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgYW4gZXhpc3Rpbmcgb3B0aW9uIHdhc24ndCBmb3VuZCBmb3IgaXQsIGNyZWF0ZSB0aGUgb3B0aW9uXG4gICAgICBpZiAoISRleGlzdGluZ09wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gc2VsZi5vcHRpb24oaXRlbSk7XG4gICAgICAgICRvcHRpb24uYXR0cignZGF0YS1zZWxlY3QyLXRhZycsIHRydWUpO1xuXG4gICAgICAgIHNlbGYuX3JlbW92ZU9sZFRhZ3MoKTtcbiAgICAgICAgc2VsZi5hZGRPcHRpb25zKFskb3B0aW9uXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbGVjdCB0aGUgaXRlbSwgbm93IHRoYXQgd2Uga25vdyB0aGVyZSBpcyBhbiBvcHRpb24gZm9yIGl0XG4gICAgICBzZWxlY3QoaXRlbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0IChkYXRhKSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcblxuICAgIHZhciB0b2tlbkRhdGEgPSB0aGlzLnRva2VuaXplcihwYXJhbXMsIHRoaXMub3B0aW9ucywgY3JlYXRlQW5kU2VsZWN0KTtcblxuICAgIGlmICh0b2tlbkRhdGEudGVybSAhPT0gcGFyYW1zLnRlcm0pIHtcbiAgICAgIC8vIFJlcGxhY2UgdGhlIHNlYXJjaCB0ZXJtIGlmIHdlIGhhdmUgdGhlIHNlYXJjaCBib3hcbiAgICAgIGlmICh0aGlzLiRzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuJHNlYXJjaC52YWwodG9rZW5EYXRhLnRlcm0pO1xuICAgICAgICB0aGlzLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnRlcm0gPSB0b2tlbkRhdGEudGVybTtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBUb2tlbml6ZXIucHJvdG90eXBlLnRva2VuaXplciA9IGZ1bmN0aW9uIChfLCBwYXJhbXMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlcGFyYXRvcnMgPSBvcHRpb25zLmdldCgndG9rZW5TZXBhcmF0b3JzJykgfHwgW107XG4gICAgdmFyIHRlcm0gPSBwYXJhbXMudGVybTtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICB2YXIgY3JlYXRlVGFnID0gdGhpcy5jcmVhdGVUYWcgfHwgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHBhcmFtcy50ZXJtLFxuICAgICAgICB0ZXh0OiBwYXJhbXMudGVybVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgd2hpbGUgKGkgPCB0ZXJtLmxlbmd0aCkge1xuICAgICAgdmFyIHRlcm1DaGFyID0gdGVybVtpXTtcblxuICAgICAgaWYgKCQuaW5BcnJheSh0ZXJtQ2hhciwgc2VwYXJhdG9ycykgPT09IC0xKSB7XG4gICAgICAgIGkrKztcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnQgPSB0ZXJtLnN1YnN0cigwLCBpKTtcbiAgICAgIHZhciBwYXJ0UGFyYW1zID0gJC5leHRlbmQoe30sIHBhcmFtcywge1xuICAgICAgICB0ZXJtOiBwYXJ0XG4gICAgICB9KTtcblxuICAgICAgdmFyIGRhdGEgPSBjcmVhdGVUYWcocGFydFBhcmFtcyk7XG5cbiAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soZGF0YSk7XG5cbiAgICAgIC8vIFJlc2V0IHRoZSB0ZXJtIHRvIG5vdCBpbmNsdWRlIHRoZSB0b2tlbml6ZWQgcG9ydGlvblxuICAgICAgdGVybSA9IHRlcm0uc3Vic3RyKGkgKyAxKSB8fCAnJztcbiAgICAgIGkgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0ZXJtOiB0ZXJtXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gVG9rZW5pemVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL21pbmltdW1JbnB1dExlbmd0aCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmltdW1JbnB1dExlbmd0aCAoZGVjb3JhdGVkLCAkZSwgb3B0aW9ucykge1xuICAgIHRoaXMubWluaW11bUlucHV0TGVuZ3RoID0gb3B0aW9ucy5nZXQoJ21pbmltdW1JbnB1dExlbmd0aCcpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgTWluaW11bUlucHV0TGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICBwYXJhbXMudGVybSA9IHBhcmFtcy50ZXJtIHx8ICcnO1xuXG4gICAgaWYgKHBhcmFtcy50ZXJtLmxlbmd0aCA8IHRoaXMubWluaW11bUlucHV0TGVuZ3RoKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgbWVzc2FnZTogJ2lucHV0VG9vU2hvcnQnLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgbWluaW11bTogdGhpcy5taW5pbXVtSW5wdXRMZW5ndGgsXG4gICAgICAgICAgaW5wdXQ6IHBhcmFtcy50ZXJtLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgcmV0dXJuIE1pbmltdW1JbnB1dExlbmd0aDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9tYXhpbXVtSW5wdXRMZW5ndGgnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXhpbXVtSW5wdXRMZW5ndGggKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm1heGltdW1JbnB1dExlbmd0aCA9IG9wdGlvbnMuZ2V0KCdtYXhpbXVtSW5wdXRMZW5ndGgnKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIE1heGltdW1JbnB1dExlbmd0aC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcblxuICAgIGlmICh0aGlzLm1heGltdW1JbnB1dExlbmd0aCA+IDAgJiZcbiAgICAgICAgcGFyYW1zLnRlcm0ubGVuZ3RoID4gdGhpcy5tYXhpbXVtSW5wdXRMZW5ndGgpIHtcbiAgICAgIHRoaXMudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICBtZXNzYWdlOiAnaW5wdXRUb29Mb25nJyxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIG1heGltdW06IHRoaXMubWF4aW11bUlucHV0TGVuZ3RoLFxuICAgICAgICAgIGlucHV0OiBwYXJhbXMudGVybSxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xuICB9O1xuXG4gIHJldHVybiBNYXhpbXVtSW5wdXRMZW5ndGg7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcsW1xuXG5dLCBmdW5jdGlvbiAoKXtcbiAgZnVuY3Rpb24gTWF4aW11bVNlbGVjdGlvbkxlbmd0aCAoZGVjb3JhdGVkLCAkZSwgb3B0aW9ucykge1xuICAgIHRoaXMubWF4aW11bVNlbGVjdGlvbkxlbmd0aCA9IG9wdGlvbnMuZ2V0KCdtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZSwgb3B0aW9ucyk7XG4gIH1cblxuICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoLnByb3RvdHlwZS5iaW5kID1cbiAgICBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX2NoZWNrSWZNYXhpbXVtU2VsZWN0ZWQoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIE1heGltdW1TZWxlY3Rpb25MZW5ndGgucHJvdG90eXBlLnF1ZXJ5ID1cbiAgICBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2NoZWNrSWZNYXhpbXVtU2VsZWN0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWNvcmF0ZWQuY2FsbChzZWxmLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIE1heGltdW1TZWxlY3Rpb25MZW5ndGgucHJvdG90eXBlLl9jaGVja0lmTWF4aW11bVNlbGVjdGVkID1cbiAgICBmdW5jdGlvbiAoXywgc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gY3VycmVudERhdGEgIT0gbnVsbCA/IGN1cnJlbnREYXRhLmxlbmd0aCA6IDA7XG4gICAgICAgIGlmIChzZWxmLm1heGltdW1TZWxlY3Rpb25MZW5ndGggPiAwICYmXG4gICAgICAgICAgY291bnQgPj0gc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnbWF4aW11bVNlbGVjdGVkJyxcbiAgICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgICAgbWF4aW11bTogc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTWF4aW11bVNlbGVjdGlvbkxlbmd0aDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24nLFtcbiAgJ2pxdWVyeScsXG4gICcuL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIERyb3Bkb3duICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgRHJvcGRvd24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoRHJvcGRvd24sIFV0aWxzLk9ic2VydmFibGUpO1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRkcm9wZG93biA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLWRyb3Bkb3duXCI+JyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItcmVzdWx0c1wiPjwvc3Bhbj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICAkZHJvcGRvd24uYXR0cignZGlyJywgdGhpcy5vcHRpb25zLmdldCgnZGlyJykpO1xuXG4gICAgdGhpcy4kZHJvcGRvd24gPSAkZHJvcGRvd247XG5cbiAgICByZXR1cm4gJGRyb3Bkb3duO1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNob3VsZCBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXG4gIH07XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCRkcm9wZG93biwgJGNvbnRhaW5lcikge1xuICAgIC8vIFNob3VsZCBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXG4gIH07XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBkcm9wZG93biBmcm9tIHRoZSBET01cbiAgICB0aGlzLiRkcm9wZG93bi5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL3NlYXJjaCcsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIFNlYXJjaCAoKSB7IH1cblxuICBTZWFyY2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB2YXIgJHJlbmRlcmVkID0gZGVjb3JhdGVkLmNhbGwodGhpcyk7XG5cbiAgICB2YXIgJHNlYXJjaCA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0tZHJvcGRvd25cIj4nICtcbiAgICAgICAgJzxpbnB1dCBjbGFzcz1cInNlbGVjdDItc2VhcmNoX19maWVsZFwiIHR5cGU9XCJzZWFyY2hcIiB0YWJpbmRleD1cIi0xXCInICtcbiAgICAgICAgJyBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiJyArXG4gICAgICAgICcgc3BlbGxjaGVjaz1cImZhbHNlXCIgcm9sZT1cInNlYXJjaGJveFwiIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiIC8+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgdGhpcy4kc2VhcmNoQ29udGFpbmVyID0gJHNlYXJjaDtcbiAgICB0aGlzLiRzZWFyY2ggPSAkc2VhcmNoLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICAkcmVuZGVyZWQucHJlcGVuZCgkc2VhcmNoKTtcblxuICAgIHJldHVybiAkcmVuZGVyZWQ7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHJlc3VsdHNJZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgdGhpcy4kc2VhcmNoLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdrZXlwcmVzcycsIGV2dCk7XG5cbiAgICAgIHNlbGYuX2tleVVwUHJldmVudGVkID0gZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xuICAgIH0pO1xuXG4gICAgLy8gV29ya2Fyb3VuZCBmb3IgYnJvd3NlcnMgd2hpY2ggZG8gbm90IHN1cHBvcnQgdGhlIGBpbnB1dGAgZXZlbnRcbiAgICAvLyBUaGlzIHdpbGwgcHJldmVudCBkb3VibGUtdHJpZ2dlcmluZyBvZiBldmVudHMgZm9yIGJyb3dzZXJzIHdoaWNoIHN1cHBvcnRcbiAgICAvLyBib3RoIHRoZSBga2V5dXBgIGFuZCBgaW5wdXRgIGV2ZW50cy5cbiAgICB0aGlzLiRzZWFyY2gub24oJ2lucHV0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gVW5iaW5kIHRoZSBkdXBsaWNhdGVkIGBrZXl1cGAgZXZlbnRcbiAgICAgICQodGhpcykub2ZmKCdrZXl1cCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VhcmNoLm9uKCdrZXl1cCBpbnB1dCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuaGFuZGxlU2VhcmNoKGV2dCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cigndGFiaW5kZXgnLCAwKTtcbiAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgcmVzdWx0c0lkKTtcblxuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cigndGFiaW5kZXgnLCAtMSk7XG4gICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1jb250cm9scycpO1xuICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuXG4gICAgICBzZWxmLiRzZWFyY2gudmFsKCcnKTtcbiAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdibHVyJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YWxsJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgaWYgKHBhcmFtcy5xdWVyeS50ZXJtID09IG51bGwgfHwgcGFyYW1zLnF1ZXJ5LnRlcm0gPT09ICcnKSB7XG4gICAgICAgIHZhciBzaG93U2VhcmNoID0gc2VsZi5zaG93U2VhcmNoKHBhcmFtcyk7XG5cbiAgICAgICAgaWYgKHNob3dTZWFyY2gpIHtcbiAgICAgICAgICBzZWxmLiRzZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItc2VhcmNoLS1oaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi4kc2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCdzZWxlY3QyLXNlYXJjaC0taGlkZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBpZiAocGFyYW1zLmRhdGEuX3Jlc3VsdElkKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBwYXJhbXMuZGF0YS5fcmVzdWx0SWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuaGFuZGxlU2VhcmNoID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICghdGhpcy5fa2V5VXBQcmV2ZW50ZWQpIHtcbiAgICAgIHZhciBpbnB1dCA9IHRoaXMuJHNlYXJjaC52YWwoKTtcblxuICAgICAgdGhpcy50cmlnZ2VyKCdxdWVyeScsIHtcbiAgICAgICAgdGVybTogaW5wdXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2tleVVwUHJldmVudGVkID0gZmFsc2U7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5zaG93U2VhcmNoID0gZnVuY3Rpb24gKF8sIHBhcmFtcykge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiBTZWFyY2g7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2hpZGVQbGFjZWhvbGRlcicsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhpZGVQbGFjZWhvbGRlciAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5ub3JtYWxpemVQbGFjZWhvbGRlcihvcHRpb25zLmdldCgncGxhY2Vob2xkZXInKSk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpO1xuICB9XG5cbiAgSGlkZVBsYWNlaG9sZGVyLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgZGF0YS5yZXN1bHRzID0gdGhpcy5yZW1vdmVQbGFjZWhvbGRlcihkYXRhLnJlc3VsdHMpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG4gIH07XG5cbiAgSGlkZVBsYWNlaG9sZGVyLnByb3RvdHlwZS5ub3JtYWxpemVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChfLCBwbGFjZWhvbGRlcikge1xuICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH07XG5cbiAgSGlkZVBsYWNlaG9sZGVyLnByb3RvdHlwZS5yZW1vdmVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChfLCBkYXRhKSB7XG4gICAgdmFyIG1vZGlmaWVkRGF0YSA9IGRhdGEuc2xpY2UoMCk7XG5cbiAgICBmb3IgKHZhciBkID0gZGF0YS5sZW5ndGggLSAxOyBkID49IDA7IGQtLSkge1xuICAgICAgdmFyIGl0ZW0gPSBkYXRhW2RdO1xuXG4gICAgICBpZiAodGhpcy5wbGFjZWhvbGRlci5pZCA9PT0gaXRlbS5pZCkge1xuICAgICAgICBtb2RpZmllZERhdGEuc3BsaWNlKGQsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2RpZmllZERhdGE7XG4gIH07XG5cbiAgcmV0dXJuIEhpZGVQbGFjZWhvbGRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vaW5maW5pdGVTY3JvbGwnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIEluZmluaXRlU2Nyb2xsIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xuICAgIHRoaXMubGFzdFBhcmFtcyA9IHt9O1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKTtcblxuICAgIHRoaXMuJGxvYWRpbmdNb3JlID0gdGhpcy5jcmVhdGVMb2FkaW5nTW9yZSgpO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICB0aGlzLiRsb2FkaW5nTW9yZS5yZW1vdmUoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuXG4gICAgaWYgKHRoaXMuc2hvd0xvYWRpbmdNb3JlKGRhdGEpKSB7XG4gICAgICB0aGlzLiRyZXN1bHRzLmFwcGVuZCh0aGlzLiRsb2FkaW5nTW9yZSk7XG4gICAgICB0aGlzLmxvYWRNb3JlSWZOZWVkZWQoKTtcbiAgICB9XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdxdWVyeScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYubGFzdFBhcmFtcyA9IHBhcmFtcztcbiAgICAgIHNlbGYubG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3F1ZXJ5OmFwcGVuZCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYubGFzdFBhcmFtcyA9IHBhcmFtcztcbiAgICAgIHNlbGYubG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRyZXN1bHRzLm9uKCdzY3JvbGwnLCB0aGlzLmxvYWRNb3JlSWZOZWVkZWQuYmluZCh0aGlzKSk7XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmxvYWRNb3JlSWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlzTG9hZE1vcmVWaXNpYmxlID0gJC5jb250YWlucyhcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIHRoaXMuJGxvYWRpbmdNb3JlWzBdXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmxvYWRpbmcgfHwgIWlzTG9hZE1vcmVWaXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRPZmZzZXQgPSB0aGlzLiRyZXN1bHRzLm9mZnNldCgpLnRvcCArXG4gICAgICB0aGlzLiRyZXN1bHRzLm91dGVySGVpZ2h0KGZhbHNlKTtcbiAgICB2YXIgbG9hZGluZ01vcmVPZmZzZXQgPSB0aGlzLiRsb2FkaW5nTW9yZS5vZmZzZXQoKS50b3AgK1xuICAgICAgdGhpcy4kbG9hZGluZ01vcmUub3V0ZXJIZWlnaHQoZmFsc2UpO1xuXG4gICAgaWYgKGN1cnJlbnRPZmZzZXQgKyA1MCA+PSBsb2FkaW5nTW9yZU9mZnNldCkge1xuICAgICAgdGhpcy5sb2FkTW9yZSgpO1xuICAgIH1cbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUubG9hZE1vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIHZhciBwYXJhbXMgPSAkLmV4dGVuZCh7fSwge3BhZ2U6IDF9LCB0aGlzLmxhc3RQYXJhbXMpO1xuXG4gICAgcGFyYW1zLnBhZ2UrKztcblxuICAgIHRoaXMudHJpZ2dlcigncXVlcnk6YXBwZW5kJywgcGFyYW1zKTtcbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuc2hvd0xvYWRpbmdNb3JlID0gZnVuY3Rpb24gKF8sIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5wYWdpbmF0aW9uICYmIGRhdGEucGFnaW5hdGlvbi5tb3JlO1xuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5jcmVhdGVMb2FkaW5nTW9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJG9wdGlvbiA9ICQoXG4gICAgICAnPGxpICcgK1xuICAgICAgJ2NsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWxvYWQtbW9yZVwiJyArXG4gICAgICAncm9sZT1cIm9wdGlvblwiIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCI+PC9saT4nXG4gICAgKTtcblxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KCdsb2FkaW5nTW9yZScpO1xuXG4gICAgJG9wdGlvbi5odG1sKG1lc3NhZ2UodGhpcy5sYXN0UGFyYW1zKSk7XG5cbiAgICByZXR1cm4gJG9wdGlvbjtcbiAgfTtcblxuICByZXR1cm4gSW5maW5pdGVTY3JvbGw7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2F0dGFjaEJvZHknLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBBdHRhY2hCb2R5IChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZHJvcGRvd25QYXJlbnQgPSAkKG9wdGlvbnMuZ2V0KCdkcm9wZG93blBhcmVudCcpIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9zaG93RHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX2F0dGFjaFBvc2l0aW9uaW5nSGFuZGxlcihjb250YWluZXIpO1xuXG4gICAgICAvLyBNdXN0IGJpbmQgYWZ0ZXIgdGhlIHJlc3VsdHMgaGFuZGxlcnMgdG8gZW5zdXJlIGNvcnJlY3Qgc2l6aW5nXG4gICAgICBzZWxmLl9iaW5kQ29udGFpbmVyUmVzdWx0SGFuZGxlcnMoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9oaWRlRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX2RldGFjaFBvc2l0aW9uaW5nSGFuZGxlcihjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCAkZHJvcGRvd24sICRjb250YWluZXIpIHtcbiAgICAvLyBDbG9uZSBhbGwgb2YgdGhlIGNvbnRhaW5lciBjbGFzc2VzXG4gICAgJGRyb3Bkb3duLmF0dHIoJ2NsYXNzJywgJGNvbnRhaW5lci5hdHRyKCdjbGFzcycpKTtcblxuICAgICRkcm9wZG93bi5yZW1vdmVDbGFzcygnc2VsZWN0MicpO1xuICAgICRkcm9wZG93bi5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcblxuICAgICRkcm9wZG93bi5jc3Moe1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IC05OTk5OTlcbiAgICB9KTtcblxuICAgIHRoaXMuJGNvbnRhaW5lciA9ICRjb250YWluZXI7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHZhciAkY29udGFpbmVyID0gJCgnPHNwYW4+PC9zcGFuPicpO1xuXG4gICAgdmFyICRkcm9wZG93biA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuICAgICRjb250YWluZXIuYXBwZW5kKCRkcm9wZG93bik7XG5cbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lciA9ICRjb250YWluZXI7XG5cbiAgICByZXR1cm4gJGNvbnRhaW5lcjtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5faGlkZURyb3Bkb3duID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLmRldGFjaCgpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9iaW5kQ29udGFpbmVyUmVzdWx0SGFuZGxlcnMgPVxuICAgICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyKSB7XG5cbiAgICAvLyBUaGVzZSBzaG91bGQgb25seSBiZSBib3VuZCBvbmNlXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YXBwZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czptZXNzYWdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY29udGFpbmVyUmVzdWx0c0hhbmRsZXJzQm91bmQgPSB0cnVlO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9hdHRhY2hQb3NpdGlvbmluZ0hhbmRsZXIgPVxuICAgICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHNjcm9sbEV2ZW50ID0gJ3Njcm9sbC5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG4gICAgdmFyIHJlc2l6ZUV2ZW50ID0gJ3Jlc2l6ZS5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG4gICAgdmFyIG9yaWVudGF0aW9uRXZlbnQgPSAnb3JpZW50YXRpb25jaGFuZ2Uuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuXG4gICAgdmFyICR3YXRjaGVycyA9IHRoaXMuJGNvbnRhaW5lci5wYXJlbnRzKCkuZmlsdGVyKFV0aWxzLmhhc1Njcm9sbCk7XG4gICAgJHdhdGNoZXJzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgVXRpbHMuU3RvcmVEYXRhKHRoaXMsICdzZWxlY3QyLXNjcm9sbC1wb3NpdGlvbicsIHtcbiAgICAgICAgeDogJCh0aGlzKS5zY3JvbGxMZWZ0KCksXG4gICAgICAgIHk6ICQodGhpcykuc2Nyb2xsVG9wKClcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJHdhdGNoZXJzLm9uKHNjcm9sbEV2ZW50LCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IFV0aWxzLkdldERhdGEodGhpcywgJ3NlbGVjdDItc2Nyb2xsLXBvc2l0aW9uJyk7XG4gICAgICAkKHRoaXMpLnNjcm9sbFRvcChwb3NpdGlvbi55KTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5vbihzY3JvbGxFdmVudCArICcgJyArIHJlc2l6ZUV2ZW50ICsgJyAnICsgb3JpZW50YXRpb25FdmVudCxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xuICAgIH0pO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIgPVxuICAgICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyKSB7XG4gICAgdmFyIHNjcm9sbEV2ZW50ID0gJ3Njcm9sbC5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG4gICAgdmFyIHJlc2l6ZUV2ZW50ID0gJ3Jlc2l6ZS5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG4gICAgdmFyIG9yaWVudGF0aW9uRXZlbnQgPSAnb3JpZW50YXRpb25jaGFuZ2Uuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuXG4gICAgdmFyICR3YXRjaGVycyA9IHRoaXMuJGNvbnRhaW5lci5wYXJlbnRzKCkuZmlsdGVyKFV0aWxzLmhhc1Njcm9sbCk7XG4gICAgJHdhdGNoZXJzLm9mZihzY3JvbGxFdmVudCk7XG5cbiAgICAkKHdpbmRvdykub2ZmKHNjcm9sbEV2ZW50ICsgJyAnICsgcmVzaXplRXZlbnQgKyAnICcgKyBvcmllbnRhdGlvbkV2ZW50KTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fcG9zaXRpb25Ecm9wZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcblxuICAgIHZhciBpc0N1cnJlbnRseUFib3ZlID0gdGhpcy4kZHJvcGRvd24uaGFzQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLWFib3ZlJyk7XG4gICAgdmFyIGlzQ3VycmVudGx5QmVsb3cgPSB0aGlzLiRkcm9wZG93bi5oYXNDbGFzcygnc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cnKTtcblxuICAgIHZhciBuZXdEaXJlY3Rpb24gPSBudWxsO1xuXG4gICAgdmFyIG9mZnNldCA9IHRoaXMuJGNvbnRhaW5lci5vZmZzZXQoKTtcblxuICAgIG9mZnNldC5ib3R0b20gPSBvZmZzZXQudG9wICsgdGhpcy4kY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKTtcblxuICAgIHZhciBjb250YWluZXIgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuJGNvbnRhaW5lci5vdXRlckhlaWdodChmYWxzZSlcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnRvcCA9IG9mZnNldC50b3A7XG4gICAgY29udGFpbmVyLmJvdHRvbSA9IG9mZnNldC50b3AgKyBjb250YWluZXIuaGVpZ2h0O1xuXG4gICAgdmFyIGRyb3Bkb3duID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLiRkcm9wZG93bi5vdXRlckhlaWdodChmYWxzZSlcbiAgICB9O1xuXG4gICAgdmFyIHZpZXdwb3J0ID0ge1xuICAgICAgdG9wOiAkd2luZG93LnNjcm9sbFRvcCgpLFxuICAgICAgYm90dG9tOiAkd2luZG93LnNjcm9sbFRvcCgpICsgJHdpbmRvdy5oZWlnaHQoKVxuICAgIH07XG5cbiAgICB2YXIgZW5vdWdoUm9vbUFib3ZlID0gdmlld3BvcnQudG9wIDwgKG9mZnNldC50b3AgLSBkcm9wZG93bi5oZWlnaHQpO1xuICAgIHZhciBlbm91Z2hSb29tQmVsb3cgPSB2aWV3cG9ydC5ib3R0b20gPiAob2Zmc2V0LmJvdHRvbSArIGRyb3Bkb3duLmhlaWdodCk7XG5cbiAgICB2YXIgY3NzID0ge1xuICAgICAgbGVmdDogb2Zmc2V0LmxlZnQsXG4gICAgICB0b3A6IGNvbnRhaW5lci5ib3R0b21cbiAgICB9O1xuXG4gICAgLy8gRGV0ZXJtaW5lIHdoYXQgdGhlIHBhcmVudCBlbGVtZW50IGlzIHRvIHVzZSBmb3IgY2FsY3VsYXRpbmcgdGhlIG9mZnNldFxuICAgIHZhciAkb2Zmc2V0UGFyZW50ID0gdGhpcy4kZHJvcGRvd25QYXJlbnQ7XG5cbiAgICAvLyBGb3Igc3RhdGljYWxseSBwb3NpdGlvbmVkIGVsZW1lbnRzLCB3ZSBuZWVkIHRvIGdldCB0aGUgZWxlbWVudFxuICAgIC8vIHRoYXQgaXMgZGV0ZXJtaW5pbmcgdGhlIG9mZnNldFxuICAgIGlmICgkb2Zmc2V0UGFyZW50LmNzcygncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICRvZmZzZXRQYXJlbnQgPSAkb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudCgpO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnRPZmZzZXQgPSB7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwXG4gICAgfTtcblxuICAgIGlmIChcbiAgICAgICQuY29udGFpbnMoZG9jdW1lbnQuYm9keSwgJG9mZnNldFBhcmVudFswXSkgfHxcbiAgICAgICRvZmZzZXRQYXJlbnRbMF0uaXNDb25uZWN0ZWRcbiAgICAgICkge1xuICAgICAgcGFyZW50T2Zmc2V0ID0gJG9mZnNldFBhcmVudC5vZmZzZXQoKTtcbiAgICB9XG5cbiAgICBjc3MudG9wIC09IHBhcmVudE9mZnNldC50b3A7XG4gICAgY3NzLmxlZnQgLT0gcGFyZW50T2Zmc2V0LmxlZnQ7XG5cbiAgICBpZiAoIWlzQ3VycmVudGx5QWJvdmUgJiYgIWlzQ3VycmVudGx5QmVsb3cpIHtcbiAgICAgIG5ld0RpcmVjdGlvbiA9ICdiZWxvdyc7XG4gICAgfVxuXG4gICAgaWYgKCFlbm91Z2hSb29tQmVsb3cgJiYgZW5vdWdoUm9vbUFib3ZlICYmICFpc0N1cnJlbnRseUFib3ZlKSB7XG4gICAgICBuZXdEaXJlY3Rpb24gPSAnYWJvdmUnO1xuICAgIH0gZWxzZSBpZiAoIWVub3VnaFJvb21BYm92ZSAmJiBlbm91Z2hSb29tQmVsb3cgJiYgaXNDdXJyZW50bHlBYm92ZSkge1xuICAgICAgbmV3RGlyZWN0aW9uID0gJ2JlbG93JztcbiAgICB9XG5cbiAgICBpZiAobmV3RGlyZWN0aW9uID09ICdhYm92ZScgfHxcbiAgICAgIChpc0N1cnJlbnRseUFib3ZlICYmIG5ld0RpcmVjdGlvbiAhPT0gJ2JlbG93JykpIHtcbiAgICAgIGNzcy50b3AgPSBjb250YWluZXIudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGRyb3Bkb3duLmhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAobmV3RGlyZWN0aW9uICE9IG51bGwpIHtcbiAgICAgIHRoaXMuJGRyb3Bkb3duXG4gICAgICAgIC5yZW1vdmVDbGFzcygnc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cgc2VsZWN0Mi1kcm9wZG93bi0tYWJvdmUnKVxuICAgICAgICAuYWRkQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLScgKyBuZXdEaXJlY3Rpb24pO1xuICAgICAgdGhpcy4kY29udGFpbmVyXG4gICAgICAgIC5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWJlbG93IHNlbGVjdDItY29udGFpbmVyLS1hYm92ZScpXG4gICAgICAgIC5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLScgKyBuZXdEaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLmNzcyhjc3MpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9yZXNpemVEcm9wZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3NzID0ge1xuICAgICAgd2lkdGg6IHRoaXMuJGNvbnRhaW5lci5vdXRlcldpZHRoKGZhbHNlKSArICdweCdcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2Ryb3Bkb3duQXV0b1dpZHRoJykpIHtcbiAgICAgIGNzcy5taW5XaWR0aCA9IGNzcy53aWR0aDtcbiAgICAgIGNzcy5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICBjc3Mud2lkdGggPSAnYXV0byc7XG4gICAgfVxuXG4gICAgdGhpcy4kZHJvcGRvd24uY3NzKGNzcyk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX3Nob3dEcm9wZG93biA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5hcHBlbmRUbyh0aGlzLiRkcm9wZG93blBhcmVudCk7XG5cbiAgICB0aGlzLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgdGhpcy5fcmVzaXplRHJvcGRvd24oKTtcbiAgfTtcblxuICByZXR1cm4gQXR0YWNoQm9keTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBjb3VudFJlc3VsdHMgKGRhdGEpIHtcbiAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGRhdGFbZF07XG5cbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvdW50ICs9IGNvdW50UmVzdWx0cyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgZnVuY3Rpb24gTWluaW11bVJlc3VsdHNGb3JTZWFyY2ggKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XG4gICAgdGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IG9wdGlvbnMuZ2V0KCdtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcpO1xuXG4gICAgaWYgKHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPCAwKSB7XG4gICAgICB0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gSW5maW5pdHk7XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKTtcbiAgfVxuXG4gIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoLnByb3RvdHlwZS5zaG93U2VhcmNoID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zKSB7XG4gICAgaWYgKGNvdW50UmVzdWx0cyhwYXJhbXMuZGF0YS5yZXN1bHRzKSA8IHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2gpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zKTtcbiAgfTtcblxuICByZXR1cm4gTWluaW11bVJlc3VsdHNGb3JTZWFyY2g7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL3NlbGVjdE9uQ2xvc2UnLFtcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKFV0aWxzKSB7XG4gIGZ1bmN0aW9uIFNlbGVjdE9uQ2xvc2UgKCkgeyB9XG5cbiAgU2VsZWN0T25DbG9zZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5faGFuZGxlU2VsZWN0T25DbG9zZShwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdE9uQ2xvc2UucHJvdG90eXBlLl9oYW5kbGVTZWxlY3RPbkNsb3NlID0gZnVuY3Rpb24gKF8sIHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLm9yaWdpbmFsU2VsZWN0MkV2ZW50ICE9IG51bGwpIHtcbiAgICAgIHZhciBldmVudCA9IHBhcmFtcy5vcmlnaW5hbFNlbGVjdDJFdmVudDtcblxuICAgICAgLy8gRG9uJ3Qgc2VsZWN0IGFuIGl0ZW0gaWYgdGhlIGNsb3NlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgZnJvbSBhIHNlbGVjdCBvclxuICAgICAgLy8gdW5zZWxlY3QgZXZlbnRcbiAgICAgIGlmIChldmVudC5fdHlwZSA9PT0gJ3NlbGVjdCcgfHwgZXZlbnQuX3R5cGUgPT09ICd1bnNlbGVjdCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciAkaGlnaGxpZ2h0ZWRSZXN1bHRzID0gdGhpcy5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgIC8vIE9ubHkgc2VsZWN0IGhpZ2hsaWdodGVkIHJlc3VsdHNcbiAgICBpZiAoJGhpZ2hsaWdodGVkUmVzdWx0cy5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRoaWdobGlnaHRlZFJlc3VsdHNbMF0sICdkYXRhJyk7XG5cbiAgICAvLyBEb24ndCByZS1zZWxlY3QgYWxyZWFkeSBzZWxlY3RlZCByZXN1bHRlXG4gICAgaWYgKFxuICAgICAgKGRhdGEuZWxlbWVudCAhPSBudWxsICYmIGRhdGEuZWxlbWVudC5zZWxlY3RlZCkgfHxcbiAgICAgIChkYXRhLmVsZW1lbnQgPT0gbnVsbCAmJiBkYXRhLnNlbGVjdGVkKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcignc2VsZWN0Jywge1xuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdE9uQ2xvc2U7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2Nsb3NlT25TZWxlY3QnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDbG9zZU9uU2VsZWN0ICgpIHsgfVxuXG4gIENsb3NlT25TZWxlY3QucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9zZWxlY3RUcmlnZ2VyZWQoZXZ0KTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9zZWxlY3RUcmlnZ2VyZWQoZXZ0KTtcbiAgICB9KTtcbiAgfTtcblxuICBDbG9zZU9uU2VsZWN0LnByb3RvdHlwZS5fc2VsZWN0VHJpZ2dlcmVkID0gZnVuY3Rpb24gKF8sIGV2dCkge1xuICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gZXZ0Lm9yaWdpbmFsRXZlbnQ7XG5cbiAgICAvLyBEb24ndCBjbG9zZSBpZiB0aGUgY29udHJvbCBrZXkgaXMgYmVpbmcgaGVsZFxuICAgIGlmIChvcmlnaW5hbEV2ZW50ICYmIChvcmlnaW5hbEV2ZW50LmN0cmxLZXkgfHwgb3JpZ2luYWxFdmVudC5tZXRhS2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcignY2xvc2UnLCB7XG4gICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgICAgb3JpZ2luYWxTZWxlY3QyRXZlbnQ6IGV2dFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDbG9zZU9uU2VsZWN0O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9pMThuL2VuJyxbXSxmdW5jdGlvbiAoKSB7XG4gIC8vIEVuZ2xpc2hcbiAgcmV0dXJuIHtcbiAgICBlcnJvckxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnVGhlIHJlc3VsdHMgY291bGQgbm90IGJlIGxvYWRlZC4nO1xuICAgIH0sXG4gICAgaW5wdXRUb29Mb25nOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdmFyIG92ZXJDaGFycyA9IGFyZ3MuaW5wdXQubGVuZ3RoIC0gYXJncy5tYXhpbXVtO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9ICdQbGVhc2UgZGVsZXRlICcgKyBvdmVyQ2hhcnMgKyAnIGNoYXJhY3Rlcic7XG5cbiAgICAgIGlmIChvdmVyQ2hhcnMgIT0gMSkge1xuICAgICAgICBtZXNzYWdlICs9ICdzJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICBpbnB1dFRvb1Nob3J0OiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XG5cbiAgICAgIHZhciBtZXNzYWdlID0gJ1BsZWFzZSBlbnRlciAnICsgcmVtYWluaW5nQ2hhcnMgKyAnIG9yIG1vcmUgY2hhcmFjdGVycyc7XG5cbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG4gICAgbG9hZGluZ01vcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnTG9hZGluZyBtb3JlIHJlc3VsdHPigKYnO1xuICAgIH0sXG4gICAgbWF4aW11bVNlbGVjdGVkOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnWW91IGNhbiBvbmx5IHNlbGVjdCAnICsgYXJncy5tYXhpbXVtICsgJyBpdGVtJztcblxuICAgICAgaWYgKGFyZ3MubWF4aW11bSAhPSAxKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gJ3MnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgIG5vUmVzdWx0czogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdObyByZXN1bHRzIGZvdW5kJztcbiAgICB9LFxuICAgIHNlYXJjaGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdTZWFyY2hpbmfigKYnO1xuICAgIH0sXG4gICAgcmVtb3ZlQWxsSXRlbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnUmVtb3ZlIGFsbCBpdGVtcyc7XG4gICAgfVxuICB9O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kZWZhdWx0cycsW1xuICAnanF1ZXJ5JyxcbiAgJ3JlcXVpcmUnLFxuXG4gICcuL3Jlc3VsdHMnLFxuXG4gICcuL3NlbGVjdGlvbi9zaW5nbGUnLFxuICAnLi9zZWxlY3Rpb24vbXVsdGlwbGUnLFxuICAnLi9zZWxlY3Rpb24vcGxhY2Vob2xkZXInLFxuICAnLi9zZWxlY3Rpb24vYWxsb3dDbGVhcicsXG4gICcuL3NlbGVjdGlvbi9zZWFyY2gnLFxuICAnLi9zZWxlY3Rpb24vZXZlbnRSZWxheScsXG5cbiAgJy4vdXRpbHMnLFxuICAnLi90cmFuc2xhdGlvbicsXG4gICcuL2RpYWNyaXRpY3MnLFxuXG4gICcuL2RhdGEvc2VsZWN0JyxcbiAgJy4vZGF0YS9hcnJheScsXG4gICcuL2RhdGEvYWpheCcsXG4gICcuL2RhdGEvdGFncycsXG4gICcuL2RhdGEvdG9rZW5pemVyJyxcbiAgJy4vZGF0YS9taW5pbXVtSW5wdXRMZW5ndGgnLFxuICAnLi9kYXRhL21heGltdW1JbnB1dExlbmd0aCcsXG4gICcuL2RhdGEvbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcsXG5cbiAgJy4vZHJvcGRvd24nLFxuICAnLi9kcm9wZG93bi9zZWFyY2gnLFxuICAnLi9kcm9wZG93bi9oaWRlUGxhY2Vob2xkZXInLFxuICAnLi9kcm9wZG93bi9pbmZpbml0ZVNjcm9sbCcsXG4gICcuL2Ryb3Bkb3duL2F0dGFjaEJvZHknLFxuICAnLi9kcm9wZG93bi9taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcsXG4gICcuL2Ryb3Bkb3duL3NlbGVjdE9uQ2xvc2UnLFxuICAnLi9kcm9wZG93bi9jbG9zZU9uU2VsZWN0JyxcblxuICAnLi9pMThuL2VuJ1xuXSwgZnVuY3Rpb24gKCQsIHJlcXVpcmUsXG5cbiAgICAgICAgICAgICBSZXN1bHRzTGlzdCxcblxuICAgICAgICAgICAgIFNpbmdsZVNlbGVjdGlvbiwgTXVsdGlwbGVTZWxlY3Rpb24sIFBsYWNlaG9sZGVyLCBBbGxvd0NsZWFyLFxuICAgICAgICAgICAgIFNlbGVjdGlvblNlYXJjaCwgRXZlbnRSZWxheSxcblxuICAgICAgICAgICAgIFV0aWxzLCBUcmFuc2xhdGlvbiwgRElBQ1JJVElDUyxcblxuICAgICAgICAgICAgIFNlbGVjdERhdGEsIEFycmF5RGF0YSwgQWpheERhdGEsIFRhZ3MsIFRva2VuaXplcixcbiAgICAgICAgICAgICBNaW5pbXVtSW5wdXRMZW5ndGgsIE1heGltdW1JbnB1dExlbmd0aCwgTWF4aW11bVNlbGVjdGlvbkxlbmd0aCxcblxuICAgICAgICAgICAgIERyb3Bkb3duLCBEcm9wZG93blNlYXJjaCwgSGlkZVBsYWNlaG9sZGVyLCBJbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgICAgICBBdHRhY2hCb2R5LCBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCwgU2VsZWN0T25DbG9zZSwgQ2xvc2VPblNlbGVjdCxcblxuICAgICAgICAgICAgIEVuZ2xpc2hUcmFuc2xhdGlvbikge1xuICBmdW5jdGlvbiBEZWZhdWx0cyAoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9wdGlvbnMuZGF0YUFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuYWpheCAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBBamF4RGF0YTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IEFycmF5RGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBTZWxlY3REYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIE1pbmltdW1JbnB1dExlbmd0aFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5tYXhpbXVtSW5wdXRMZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIE1heGltdW1JbnB1dExlbmd0aFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnRhZ3MpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKG9wdGlvbnMuZGF0YUFkYXB0ZXIsIFRhZ3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50b2tlblNlcGFyYXRvcnMgIT0gbnVsbCB8fCBvcHRpb25zLnRva2VuaXplciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIFRva2VuaXplclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5xdWVyeSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBRdWVyeSA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9xdWVyeScpO1xuXG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIFF1ZXJ5XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmluaXRTZWxlY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICB2YXIgSW5pdFNlbGVjdGlvbiA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9pbml0U2VsZWN0aW9uJyk7XG5cbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgSW5pdFNlbGVjdGlvblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnJlc3VsdHNBZGFwdGVyID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBSZXN1bHRzTGlzdDtcblxuICAgICAgaWYgKG9wdGlvbnMuYWpheCAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIEluZmluaXRlU2Nyb2xsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIsXG4gICAgICAgICAgSGlkZVBsYWNlaG9sZGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnNlbGVjdE9uQ2xvc2UpIHtcbiAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIsXG4gICAgICAgICAgU2VsZWN0T25DbG9zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5tdWx0aXBsZSkge1xuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IERyb3Bkb3duO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIFNlYXJjaGFibGVEcm9wZG93biA9IFV0aWxzLkRlY29yYXRlKERyb3Bkb3duLCBEcm9wZG93blNlYXJjaCk7XG5cbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBTZWFyY2hhYmxlRHJvcGRvd247XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoICE9PSAwKSB7XG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXG4gICAgICAgICAgTWluaW11bVJlc3VsdHNGb3JTZWFyY2hcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICAgIENsb3NlT25TZWxlY3RcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgIT0gbnVsbCB8fFxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQ3NzICE9IG51bGwgfHxcbiAgICAgICAgb3B0aW9ucy5hZGFwdERyb3Bkb3duQ3NzQ2xhc3MgIT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHZhciBEcm9wZG93bkNTUyA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9kcm9wZG93bkNzcycpO1xuXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXG4gICAgICAgICAgRHJvcGRvd25DU1NcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXG4gICAgICAgIEF0dGFjaEJvZHlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5tdWx0aXBsZSkge1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBNdWx0aXBsZVNlbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFNpbmdsZVNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBwbGFjZWhvbGRlciBtaXhpbiBpZiBhIHBsYWNlaG9sZGVyIHdhcyBzcGVjaWZpZWRcbiAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIFBsYWNlaG9sZGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmFsbG93Q2xlYXIpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIEFsbG93Q2xlYXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIFNlbGVjdGlvblNlYXJjaFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgIT0gbnVsbCB8fFxuICAgICAgICBvcHRpb25zLmNvbnRhaW5lckNzcyAhPSBudWxsIHx8XG4gICAgICAgIG9wdGlvbnMuYWRhcHRDb250YWluZXJDc3NDbGFzcyAhPSBudWxsXG4gICAgICApIHtcbiAgICAgICAgdmFyIENvbnRhaW5lckNTUyA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9jb250YWluZXJDc3MnKTtcblxuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXG4gICAgICAgICAgQ29udGFpbmVyQ1NTXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXG4gICAgICAgIEV2ZW50UmVsYXlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRlZmF1bHRzIHdlcmUgbm90IHByZXZpb3VzbHkgYXBwbGllZCBmcm9tIGFuIGVsZW1lbnQsIGl0IGlzXG4gICAgLy8gcG9zc2libGUgZm9yIHRoZSBsYW5ndWFnZSBvcHRpb24gdG8gaGF2ZSBub3QgYmVlbiByZXNvbHZlZFxuICAgIG9wdGlvbnMubGFuZ3VhZ2UgPSB0aGlzLl9yZXNvbHZlTGFuZ3VhZ2Uob3B0aW9ucy5sYW5ndWFnZSk7XG5cbiAgICAvLyBBbHdheXMgZmFsbCBiYWNrIHRvIEVuZ2xpc2ggc2luY2UgaXQgd2lsbCBhbHdheXMgYmUgY29tcGxldGVcbiAgICBvcHRpb25zLmxhbmd1YWdlLnB1c2goJ2VuJyk7XG5cbiAgICB2YXIgdW5pcXVlTGFuZ3VhZ2VzID0gW107XG5cbiAgICBmb3IgKHZhciBsID0gMDsgbCA8IG9wdGlvbnMubGFuZ3VhZ2UubGVuZ3RoOyBsKyspIHtcbiAgICAgIHZhciBsYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2VbbF07XG5cbiAgICAgIGlmICh1bmlxdWVMYW5ndWFnZXMuaW5kZXhPZihsYW5ndWFnZSkgPT09IC0xKSB7XG4gICAgICAgIHVuaXF1ZUxhbmd1YWdlcy5wdXNoKGxhbmd1YWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zLmxhbmd1YWdlID0gdW5pcXVlTGFuZ3VhZ2VzO1xuXG4gICAgb3B0aW9ucy50cmFuc2xhdGlvbnMgPSB0aGlzLl9wcm9jZXNzVHJhbnNsYXRpb25zKFxuICAgICAgb3B0aW9ucy5sYW5ndWFnZSxcbiAgICAgIG9wdGlvbnMuZGVidWdcbiAgICApO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHN0cmlwRGlhY3JpdGljcyAodGV4dCkge1xuICAgICAgLy8gVXNlZCAndW5pIHJhbmdlICsgbmFtZWQgZnVuY3Rpb24nIGZyb20gaHR0cDovL2pzcGVyZi5jb20vZGlhY3JpdGljcy8xOFxuICAgICAgZnVuY3Rpb24gbWF0Y2goYSkge1xuICAgICAgICByZXR1cm4gRElBQ1JJVElDU1thXSB8fCBhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXlxcdTAwMDAtXFx1MDA3RV0vZywgbWF0Y2gpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoZXIgKHBhcmFtcywgZGF0YSkge1xuICAgICAgLy8gQWx3YXlzIHJldHVybiB0aGUgb2JqZWN0IGlmIHRoZXJlIGlzIG5vdGhpbmcgdG8gY29tcGFyZVxuICAgICAgaWYgKCQudHJpbShwYXJhbXMudGVybSkgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICAvLyBEbyBhIHJlY3Vyc2l2ZSBjaGVjayBmb3Igb3B0aW9ucyB3aXRoIGNoaWxkcmVuXG4gICAgICBpZiAoZGF0YS5jaGlsZHJlbiAmJiBkYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gQ2xvbmUgdGhlIGRhdGEgb2JqZWN0IGlmIHRoZXJlIGFyZSBjaGlsZHJlblxuICAgICAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGFzIHdlIG1vZGlmeSB0aGUgb2JqZWN0IHRvIHJlbW92ZSBhbnkgbm9uLW1hdGNoZXNcbiAgICAgICAgdmFyIG1hdGNoID0gJC5leHRlbmQodHJ1ZSwge30sIGRhdGEpO1xuXG4gICAgICAgIC8vIENoZWNrIGVhY2ggY2hpbGQgb2YgdGhlIG9wdGlvblxuICAgICAgICBmb3IgKHZhciBjID0gZGF0YS5jaGlsZHJlbi5sZW5ndGggLSAxOyBjID49IDA7IGMtLSkge1xuICAgICAgICAgIHZhciBjaGlsZCA9IGRhdGEuY2hpbGRyZW5bY107XG5cbiAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG1hdGNoZXIocGFyYW1zLCBjaGlsZCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSB3YXNuJ3QgYSBtYXRjaCwgcmVtb3ZlIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5XG4gICAgICAgICAgaWYgKG1hdGNoZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgbWF0Y2guY2hpbGRyZW4uc3BsaWNlKGMsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGFueSBjaGlsZHJlbiBtYXRjaGVkLCByZXR1cm4gdGhlIG5ldyBvYmplY3RcbiAgICAgICAgaWYgKG1hdGNoLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSB3ZXJlIG5vIG1hdGNoaW5nIGNoaWxkcmVuLCBjaGVjayBqdXN0IHRoZSBwbGFpbiBvYmplY3RcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIocGFyYW1zLCBtYXRjaCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcmlnaW5hbCA9IHN0cmlwRGlhY3JpdGljcyhkYXRhLnRleHQpLnRvVXBwZXJDYXNlKCk7XG4gICAgICB2YXIgdGVybSA9IHN0cmlwRGlhY3JpdGljcyhwYXJhbXMudGVybSkudG9VcHBlckNhc2UoKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRleHQgY29udGFpbnMgdGhlIHRlcm1cbiAgICAgIGlmIChvcmlnaW5hbC5pbmRleE9mKHRlcm0pID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgdGVybSwgZG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgYW1kQmFzZTogJy4vJyxcbiAgICAgIGFtZExhbmd1YWdlQmFzZTogJy4vaTE4bi8nLFxuICAgICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgIGRyb3Bkb3duQXV0b1dpZHRoOiBmYWxzZSxcbiAgICAgIGVzY2FwZU1hcmt1cDogVXRpbHMuZXNjYXBlTWFya3VwLFxuICAgICAgbGFuZ3VhZ2U6IHt9LFxuICAgICAgbWF0Y2hlcjogbWF0Y2hlcixcbiAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMCxcbiAgICAgIG1heGltdW1JbnB1dExlbmd0aDogMCxcbiAgICAgIG1heGltdW1TZWxlY3Rpb25MZW5ndGg6IDAsXG4gICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogMCxcbiAgICAgIHNlbGVjdE9uQ2xvc2U6IGZhbHNlLFxuICAgICAgc2Nyb2xsQWZ0ZXJTZWxlY3Q6IGZhbHNlLFxuICAgICAgc29ydGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZVJlc3VsdDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0LnRleHQ7XG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVTZWxlY3Rpb246IGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbi50ZXh0O1xuICAgICAgfSxcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCcsXG4gICAgICB3aWR0aDogJ3Jlc29sdmUnXG4gICAgfTtcbiAgfTtcblxuICBEZWZhdWx0cy5wcm90b3R5cGUuYXBwbHlGcm9tRWxlbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zLCAkZWxlbWVudCkge1xuICAgIHZhciBvcHRpb25MYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2U7XG4gICAgdmFyIGRlZmF1bHRMYW5ndWFnZSA9IHRoaXMuZGVmYXVsdHMubGFuZ3VhZ2U7XG4gICAgdmFyIGVsZW1lbnRMYW5ndWFnZSA9ICRlbGVtZW50LnByb3AoJ2xhbmcnKTtcbiAgICB2YXIgcGFyZW50TGFuZ3VhZ2UgPSAkZWxlbWVudC5jbG9zZXN0KCdbbGFuZ10nKS5wcm9wKCdsYW5nJyk7XG5cbiAgICB2YXIgbGFuZ3VhZ2VzID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5jYWxsKFxuICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKGVsZW1lbnRMYW5ndWFnZSksXG4gICAgICB0aGlzLl9yZXNvbHZlTGFuZ3VhZ2Uob3B0aW9uTGFuZ3VhZ2UpLFxuICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKGRlZmF1bHRMYW5ndWFnZSksXG4gICAgICB0aGlzLl9yZXNvbHZlTGFuZ3VhZ2UocGFyZW50TGFuZ3VhZ2UpXG4gICAgKTtcblxuICAgIG9wdGlvbnMubGFuZ3VhZ2UgPSBsYW5ndWFnZXM7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfTtcblxuICBEZWZhdWx0cy5wcm90b3R5cGUuX3Jlc29sdmVMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xuICAgIGlmICghbGFuZ3VhZ2UpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoJC5pc0VtcHR5T2JqZWN0KGxhbmd1YWdlKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGlmICgkLmlzUGxhaW5PYmplY3QobGFuZ3VhZ2UpKSB7XG4gICAgICByZXR1cm4gW2xhbmd1YWdlXTtcbiAgICB9XG5cbiAgICB2YXIgbGFuZ3VhZ2VzO1xuXG4gICAgaWYgKCEkLmlzQXJyYXkobGFuZ3VhZ2UpKSB7XG4gICAgICBsYW5ndWFnZXMgPSBbbGFuZ3VhZ2VdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYW5ndWFnZXMgPSBsYW5ndWFnZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzb2x2ZWRMYW5ndWFnZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGwgPSAwOyBsIDwgbGFuZ3VhZ2VzLmxlbmd0aDsgbCsrKSB7XG4gICAgICByZXNvbHZlZExhbmd1YWdlcy5wdXNoKGxhbmd1YWdlc1tsXSk7XG5cbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2VzW2xdID09PSAnc3RyaW5nJyAmJiBsYW5ndWFnZXNbbF0uaW5kZXhPZignLScpID4gMCkge1xuICAgICAgICAvLyBFeHRyYWN0IHRoZSByZWdpb24gaW5mb3JtYXRpb24gaWYgaXQgaXMgaW5jbHVkZWRcbiAgICAgICAgdmFyIGxhbmd1YWdlUGFydHMgPSBsYW5ndWFnZXNbbF0uc3BsaXQoJy0nKTtcbiAgICAgICAgdmFyIGJhc2VMYW5ndWFnZSA9IGxhbmd1YWdlUGFydHNbMF07XG5cbiAgICAgICAgcmVzb2x2ZWRMYW5ndWFnZXMucHVzaChiYXNlTGFuZ3VhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZExhbmd1YWdlcztcbiAgfTtcblxuICBEZWZhdWx0cy5wcm90b3R5cGUuX3Byb2Nlc3NUcmFuc2xhdGlvbnMgPSBmdW5jdGlvbiAobGFuZ3VhZ2VzLCBkZWJ1Zykge1xuICAgIHZhciB0cmFuc2xhdGlvbnMgPSBuZXcgVHJhbnNsYXRpb24oKTtcblxuICAgIGZvciAodmFyIGwgPSAwOyBsIDwgbGFuZ3VhZ2VzLmxlbmd0aDsgbCsrKSB7XG4gICAgICB2YXIgbGFuZ3VhZ2VEYXRhID0gbmV3IFRyYW5zbGF0aW9uKCk7XG5cbiAgICAgIHZhciBsYW5ndWFnZSA9IGxhbmd1YWdlc1tsXTtcblxuICAgICAgaWYgKHR5cGVvZiBsYW5ndWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUcnkgdG8gbG9hZCBpdCB3aXRoIHRoZSBvcmlnaW5hbCBuYW1lXG4gICAgICAgICAgbGFuZ3VhZ2VEYXRhID0gVHJhbnNsYXRpb24ubG9hZFBhdGgobGFuZ3VhZ2UpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIElmIHdlIGNvdWxkbid0IGxvYWQgaXQsIGNoZWNrIGlmIGl0IHdhc24ndCB0aGUgZnVsbCBwYXRoXG4gICAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMuZGVmYXVsdHMuYW1kTGFuZ3VhZ2VCYXNlICsgbGFuZ3VhZ2U7XG4gICAgICAgICAgICBsYW5ndWFnZURhdGEgPSBUcmFuc2xhdGlvbi5sb2FkUGF0aChsYW5ndWFnZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIC8vIFRoZSB0cmFuc2xhdGlvbiBjb3VsZCBub3QgYmUgbG9hZGVkIGF0IGFsbC4gU29tZXRpbWVzIHRoaXMgaXNcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgYSBjb25maWd1cmF0aW9uIHByb2JsZW0sIG90aGVyIHRpbWVzIHRoaXMgY2FuIGJlXG4gICAgICAgICAgICAvLyBiZWNhdXNlIG9mIGhvdyBTZWxlY3QyIGhlbHBzIGxvYWQgYWxsIHBvc3NpYmxlIHRyYW5zbGF0aW9uIGZpbGVzXG4gICAgICAgICAgICBpZiAoZGVidWcgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAnU2VsZWN0MjogVGhlIGxhbmd1YWdlIGZpbGUgZm9yIFwiJyArIGxhbmd1YWdlICsgJ1wiIGNvdWxkICcgK1xuICAgICAgICAgICAgICAgICdub3QgYmUgYXV0b21hdGljYWxseSBsb2FkZWQuIEEgZmFsbGJhY2sgd2lsbCBiZSB1c2VkIGluc3RlYWQuJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgkLmlzUGxhaW5PYmplY3QobGFuZ3VhZ2UpKSB7XG4gICAgICAgIGxhbmd1YWdlRGF0YSA9IG5ldyBUcmFuc2xhdGlvbihsYW5ndWFnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYW5ndWFnZURhdGEgPSBsYW5ndWFnZTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNsYXRpb25zLmV4dGVuZChsYW5ndWFnZURhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2xhdGlvbnM7XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgdmFyIGNhbWVsS2V5ID0gJC5jYW1lbENhc2Uoa2V5KTtcblxuICAgIHZhciBkYXRhID0ge307XG4gICAgZGF0YVtjYW1lbEtleV0gPSB2YWx1ZTtcblxuICAgIHZhciBjb252ZXJ0ZWREYXRhID0gVXRpbHMuX2NvbnZlcnREYXRhKGRhdGEpO1xuXG4gICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5kZWZhdWx0cywgY29udmVydGVkRGF0YSk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRzID0gbmV3IERlZmF1bHRzKCk7XG5cbiAgcmV0dXJuIGRlZmF1bHRzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9vcHRpb25zJyxbXG4gICdyZXF1aXJlJyxcbiAgJ2pxdWVyeScsXG4gICcuL2RlZmF1bHRzJyxcbiAgJy4vdXRpbHMnXG5dLCBmdW5jdGlvbiAocmVxdWlyZSwgJCwgRGVmYXVsdHMsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIE9wdGlvbnMgKG9wdGlvbnMsICRlbGVtZW50KSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICgkZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmZyb21FbGVtZW50KCRlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5vcHRpb25zID0gRGVmYXVsdHMuYXBwbHlGcm9tRWxlbWVudCh0aGlzLm9wdGlvbnMsICRlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBEZWZhdWx0cy5hcHBseSh0aGlzLm9wdGlvbnMpO1xuXG4gICAgaWYgKCRlbGVtZW50ICYmICRlbGVtZW50LmlzKCdpbnB1dCcpKSB7XG4gICAgICB2YXIgSW5wdXRDb21wYXQgPSByZXF1aXJlKHRoaXMuZ2V0KCdhbWRCYXNlJykgKyAnY29tcGF0L2lucHV0RGF0YScpO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgdGhpcy5vcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICBJbnB1dENvbXBhdFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBPcHRpb25zLnByb3RvdHlwZS5mcm9tRWxlbWVudCA9IGZ1bmN0aW9uICgkZSkge1xuICAgIHZhciBleGNsdWRlZERhdGEgPSBbJ3NlbGVjdDInXTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubXVsdGlwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5vcHRpb25zLm11bHRpcGxlID0gJGUucHJvcCgnbXVsdGlwbGUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkID09IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9ICRlLnByb3AoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXIgPT0gbnVsbCkge1xuICAgICAgaWYgKCRlLnByb3AoJ2RpcicpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kaXIgPSAkZS5wcm9wKCdkaXInKTtcbiAgICAgIH0gZWxzZSBpZiAoJGUuY2xvc2VzdCgnW2Rpcl0nKS5wcm9wKCdkaXInKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJGUuY2xvc2VzdCgnW2Rpcl0nKS5wcm9wKCdkaXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kaXIgPSAnbHRyJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkZS5wcm9wKCdkaXNhYmxlZCcsIHRoaXMub3B0aW9ucy5kaXNhYmxlZCk7XG4gICAgJGUucHJvcCgnbXVsdGlwbGUnLCB0aGlzLm9wdGlvbnMubXVsdGlwbGUpO1xuXG4gICAgaWYgKFV0aWxzLkdldERhdGEoJGVbMF0sICdzZWxlY3QyVGFncycpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1NlbGVjdDI6IFRoZSBgZGF0YS1zZWxlY3QyLXRhZ3NgIGF0dHJpYnV0ZSBoYXMgYmVlbiBjaGFuZ2VkIHRvICcgK1xuICAgICAgICAgICd1c2UgdGhlIGBkYXRhLWRhdGFgIGFuZCBgZGF0YS10YWdzPVwidHJ1ZVwiYCBhdHRyaWJ1dGVzIGFuZCB3aWxsIGJlICcgK1xuICAgICAgICAgICdyZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBTZWxlY3QyLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuU3RvcmVEYXRhKCRlWzBdLCAnZGF0YScsIFV0aWxzLkdldERhdGEoJGVbMF0sICdzZWxlY3QyVGFncycpKTtcbiAgICAgIFV0aWxzLlN0b3JlRGF0YSgkZVswXSwgJ3RhZ3MnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoVXRpbHMuR2V0RGF0YSgkZVswXSwgJ2FqYXhVcmwnKSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdTZWxlY3QyOiBUaGUgYGRhdGEtYWpheC11cmxgIGF0dHJpYnV0ZSBoYXMgYmVlbiBjaGFuZ2VkIHRvICcgK1xuICAgICAgICAgICdgZGF0YS1hamF4LS11cmxgIGFuZCBzdXBwb3J0IGZvciB0aGUgb2xkIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQnICtcbiAgICAgICAgICAnIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBTZWxlY3QyLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgJGUuYXR0cignYWpheC0tdXJsJywgVXRpbHMuR2V0RGF0YSgkZVswXSwgJ2FqYXhVcmwnKSk7XG4gICAgICBVdGlscy5TdG9yZURhdGEoJGVbMF0sICdhamF4LVVybCcsIFV0aWxzLkdldERhdGEoJGVbMF0sICdhamF4VXJsJykpO1xuICAgIH1cblxuICAgIHZhciBkYXRhc2V0ID0ge307XG5cbiAgICBmdW5jdGlvbiB1cHBlckNhc2VMZXR0ZXIoXywgbGV0dGVyKSB7XG4gICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gUHJlLWxvYWQgYWxsIG9mIHRoZSBhdHRyaWJ1dGVzIHdoaWNoIGFyZSBwcmVmaXhlZCB3aXRoIGBkYXRhLWBcbiAgICBmb3IgKHZhciBhdHRyID0gMDsgYXR0ciA8ICRlWzBdLmF0dHJpYnV0ZXMubGVuZ3RoOyBhdHRyKyspIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gJGVbMF0uYXR0cmlidXRlc1thdHRyXS5uYW1lO1xuICAgICAgdmFyIHByZWZpeCA9ICdkYXRhLSc7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVOYW1lLnN1YnN0cigwLCBwcmVmaXgubGVuZ3RoKSA9PSBwcmVmaXgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBjb250ZW50cyBvZiB0aGUgYXR0cmlidXRlIGFmdGVyIGBkYXRhLWBcbiAgICAgICAgdmFyIGRhdGFOYW1lID0gYXR0cmlidXRlTmFtZS5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBkYXRhIGNvbnRlbnRzIGZyb20gdGhlIGNvbnNpc3RlbnQgc291cmNlXG4gICAgICAgIC8vIFRoaXMgaXMgbW9yZSB0aGFuIGxpa2VseSB0aGUgalF1ZXJ5IGRhdGEgaGVscGVyXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBVdGlscy5HZXREYXRhKCRlWzBdLCBkYXRhTmFtZSk7XG5cbiAgICAgICAgLy8gY2FtZWxDYXNlIHRoZSBhdHRyaWJ1dGUgbmFtZSB0byBtYXRjaCB0aGUgc3BlY1xuICAgICAgICB2YXIgY2FtZWxEYXRhTmFtZSA9IGRhdGFOYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIHVwcGVyQ2FzZUxldHRlcik7XG5cbiAgICAgICAgLy8gU3RvcmUgdGhlIGRhdGEgYXR0cmlidXRlIGNvbnRlbnRzIGludG8gdGhlIGRhdGFzZXQgc2luY2VcbiAgICAgICAgZGF0YXNldFtjYW1lbERhdGFOYW1lXSA9IGRhdGFWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmVmZXIgdGhlIGVsZW1lbnQncyBgZGF0YXNldGAgYXR0cmlidXRlIGlmIGl0IGV4aXN0c1xuICAgIC8vIGpRdWVyeSAxLnggZG9lcyBub3QgY29ycmVjdGx5IGhhbmRsZSBkYXRhIGF0dHJpYnV0ZXMgd2l0aCBtdWx0aXBsZSBkYXNoZXNcbiAgICBpZiAoJC5mbi5qcXVlcnkgJiYgJC5mbi5qcXVlcnkuc3Vic3RyKDAsIDIpID09ICcxLicgJiYgJGVbMF0uZGF0YXNldCkge1xuICAgICAgZGF0YXNldCA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkZVswXS5kYXRhc2V0LCBkYXRhc2V0KTtcbiAgICB9XG5cbiAgICAvLyBQcmVmZXIgb3VyIGludGVybmFsIGRhdGEgY2FjaGUgaWYgaXQgZXhpc3RzXG4gICAgdmFyIGRhdGEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgVXRpbHMuR2V0RGF0YSgkZVswXSksIGRhdGFzZXQpO1xuXG4gICAgZGF0YSA9IFV0aWxzLl9jb252ZXJ0RGF0YShkYXRhKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoJC5pbkFycmF5KGtleSwgZXhjbHVkZWREYXRhKSA+IC0xKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KHRoaXMub3B0aW9uc1trZXldKSkge1xuICAgICAgICAkLmV4dGVuZCh0aGlzLm9wdGlvbnNba2V5XSwgZGF0YVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIE9wdGlvbnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zW2tleV07XG4gIH07XG5cbiAgT3B0aW9ucy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgdGhpcy5vcHRpb25zW2tleV0gPSB2YWw7XG4gIH07XG5cbiAgcmV0dXJuIE9wdGlvbnM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2NvcmUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL29wdGlvbnMnLFxuICAnLi91dGlscycsXG4gICcuL2tleXMnXG5dLCBmdW5jdGlvbiAoJCwgT3B0aW9ucywgVXRpbHMsIEtFWVMpIHtcbiAgdmFyIFNlbGVjdDIgPSBmdW5jdGlvbiAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAoVXRpbHMuR2V0RGF0YSgkZWxlbWVudFswXSwgJ3NlbGVjdDInKSAhPSBudWxsKSB7XG4gICAgICBVdGlscy5HZXREYXRhKCRlbGVtZW50WzBdLCAnc2VsZWN0MicpLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgICB0aGlzLmlkID0gdGhpcy5fZ2VuZXJhdGVJZCgkZWxlbWVudCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMsICRlbGVtZW50KTtcblxuICAgIFNlbGVjdDIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgdGhlIHRhYmluZGV4XG5cbiAgICB2YXIgdGFiaW5kZXggPSAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpIHx8IDA7XG4gICAgVXRpbHMuU3RvcmVEYXRhKCRlbGVtZW50WzBdLCAnb2xkLXRhYmluZGV4JywgdGFiaW5kZXgpO1xuICAgICRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICAvLyBTZXQgdXAgY29udGFpbmVycyBhbmQgYWRhcHRlcnNcblxuICAgIHZhciBEYXRhQWRhcHRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ2RhdGFBZGFwdGVyJyk7XG4gICAgdGhpcy5kYXRhQWRhcHRlciA9IG5ldyBEYXRhQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcblxuICAgIHZhciAkY29udGFpbmVyID0gdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMuX3BsYWNlQ29udGFpbmVyKCRjb250YWluZXIpO1xuXG4gICAgdmFyIFNlbGVjdGlvbkFkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdzZWxlY3Rpb25BZGFwdGVyJyk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLiRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5yZW5kZXIoKTtcblxuICAgIHRoaXMuc2VsZWN0aW9uLnBvc2l0aW9uKHRoaXMuJHNlbGVjdGlvbiwgJGNvbnRhaW5lcik7XG5cbiAgICB2YXIgRHJvcGRvd25BZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgnZHJvcGRvd25BZGFwdGVyJyk7XG4gICAgdGhpcy5kcm9wZG93biA9IG5ldyBEcm9wZG93bkFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy4kZHJvcGRvd24gPSB0aGlzLmRyb3Bkb3duLnJlbmRlcigpO1xuXG4gICAgdGhpcy5kcm9wZG93bi5wb3NpdGlvbih0aGlzLiRkcm9wZG93biwgJGNvbnRhaW5lcik7XG5cbiAgICB2YXIgUmVzdWx0c0FkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdyZXN1bHRzQWRhcHRlcicpO1xuICAgIHRoaXMucmVzdWx0cyA9IG5ldyBSZXN1bHRzQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zLCB0aGlzLmRhdGFBZGFwdGVyKTtcbiAgICB0aGlzLiRyZXN1bHRzID0gdGhpcy5yZXN1bHRzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5yZXN1bHRzLnBvc2l0aW9uKHRoaXMuJHJlc3VsdHMsIHRoaXMuJGRyb3Bkb3duKTtcblxuICAgIC8vIEJpbmQgZXZlbnRzXG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBCaW5kIHRoZSBjb250YWluZXIgdG8gYWxsIG9mIHRoZSBhZGFwdGVyc1xuICAgIHRoaXMuX2JpbmRBZGFwdGVycygpO1xuXG4gICAgLy8gUmVnaXN0ZXIgYW55IERPTSBldmVudCBoYW5kbGVyc1xuICAgIHRoaXMuX3JlZ2lzdGVyRG9tRXZlbnRzKCk7XG5cbiAgICAvLyBSZWdpc3RlciBhbnkgaW50ZXJuYWwgZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLl9yZWdpc3RlckRhdGFFdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cygpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRHJvcGRvd25FdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlclJlc3VsdHNFdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlckV2ZW50cygpO1xuXG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uIChpbml0aWFsRGF0YSkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3Rpb246dXBkYXRlJywge1xuICAgICAgICBkYXRhOiBpbml0aWFsRGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBIaWRlIHRoZSBvcmlnaW5hbCBzZWxlY3RcbiAgICAkZWxlbWVudC5hZGRDbGFzcygnc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZScpO1xuICAgICRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIC8vIFN5bmNocm9uaXplIGFueSBtb25pdG9yZWQgYXR0cmlidXRlc1xuICAgIHRoaXMuX3N5bmNBdHRyaWJ1dGVzKCk7XG5cbiAgICBVdGlscy5TdG9yZURhdGEoJGVsZW1lbnRbMF0sICdzZWxlY3QyJywgdGhpcyk7XG5cbiAgICAvLyBFbnN1cmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCAkZWxlbWVudC5kYXRhKCdzZWxlY3QyJykuXG4gICAgJGVsZW1lbnQuZGF0YSgnc2VsZWN0MicsIHRoaXMpO1xuICB9O1xuXG4gIFV0aWxzLkV4dGVuZChTZWxlY3QyLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgIHZhciBpZCA9ICcnO1xuXG4gICAgaWYgKCRlbGVtZW50LmF0dHIoJ2lkJykgIT0gbnVsbCkge1xuICAgICAgaWQgPSAkZWxlbWVudC5hdHRyKCdpZCcpO1xuICAgIH0gZWxzZSBpZiAoJGVsZW1lbnQuYXR0cignbmFtZScpICE9IG51bGwpIHtcbiAgICAgIGlkID0gJGVsZW1lbnQuYXR0cignbmFtZScpICsgJy0nICsgVXRpbHMuZ2VuZXJhdGVDaGFycygyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuICAgIH1cblxuICAgIGlkID0gaWQucmVwbGFjZSgvKDp8XFwufFxcW3xcXF18LCkvZywgJycpO1xuICAgIGlkID0gJ3NlbGVjdDItJyArIGlkO1xuXG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9wbGFjZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgkY29udGFpbmVyKSB7XG4gICAgJGNvbnRhaW5lci5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KTtcblxuICAgIHZhciB3aWR0aCA9IHRoaXMuX3Jlc29sdmVXaWR0aCh0aGlzLiRlbGVtZW50LCB0aGlzLm9wdGlvbnMuZ2V0KCd3aWR0aCcpKTtcblxuICAgIGlmICh3aWR0aCAhPSBudWxsKSB7XG4gICAgICAkY29udGFpbmVyLmNzcygnd2lkdGgnLCB3aWR0aCk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZXNvbHZlV2lkdGggPSBmdW5jdGlvbiAoJGVsZW1lbnQsIG1ldGhvZCkge1xuICAgIHZhciBXSURUSCA9IC9ed2lkdGg6KChbLStdPyhbMC05XSpcXC4pP1swLTldKykocHh8ZW18ZXh8JXxpbnxjbXxtbXxwdHxwYykpL2k7XG5cbiAgICBpZiAobWV0aG9kID09ICdyZXNvbHZlJykge1xuICAgICAgdmFyIHN0eWxlV2lkdGggPSB0aGlzLl9yZXNvbHZlV2lkdGgoJGVsZW1lbnQsICdzdHlsZScpO1xuXG4gICAgICBpZiAoc3R5bGVXaWR0aCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBzdHlsZVdpZHRoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVdpZHRoKCRlbGVtZW50LCAnZWxlbWVudCcpO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QgPT0gJ2VsZW1lbnQnKSB7XG4gICAgICB2YXIgZWxlbWVudFdpZHRoID0gJGVsZW1lbnQub3V0ZXJXaWR0aChmYWxzZSk7XG5cbiAgICAgIGlmIChlbGVtZW50V2lkdGggPD0gMCkge1xuICAgICAgICByZXR1cm4gJ2F1dG8nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudFdpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09ICdzdHlsZScpIHtcbiAgICAgIHZhciBzdHlsZSA9ICRlbGVtZW50LmF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgIGlmICh0eXBlb2Yoc3R5bGUpICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGF0dHJzID0gc3R5bGUuc3BsaXQoJzsnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpID0gaSArIDEpIHtcbiAgICAgICAgdmFyIGF0dHIgPSBhdHRyc1tpXS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IGF0dHIubWF0Y2goV0lEVEgpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsICYmIG1hdGNoZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hlc1sxXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09ICdjb21wdXRlZHN0eWxlJykge1xuICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkZWxlbWVudFswXSk7XG5cbiAgICAgIHJldHVybiBjb21wdXRlZFN0eWxlLndpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRob2Q7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX2JpbmRBZGFwdGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRhdGFBZGFwdGVyLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcbiAgICB0aGlzLnNlbGVjdGlvbi5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLmRyb3Bkb3duLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcbiAgICB0aGlzLnJlc3VsdHMuYmluZCh0aGlzLCB0aGlzLiRjb250YWluZXIpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckRvbUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdjaGFuZ2Uuc2VsZWN0MicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdGlvbjp1cGRhdGUnLCB7XG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignZm9jdXMuc2VsZWN0MicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignZm9jdXMnLCBldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc3luY0EgPSBVdGlscy5iaW5kKHRoaXMuX3N5bmNBdHRyaWJ1dGVzLCB0aGlzKTtcbiAgICB0aGlzLl9zeW5jUyA9IFV0aWxzLmJpbmQodGhpcy5fc3luY1N1YnRyZWUsIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuJGVsZW1lbnRbMF0uYXR0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYXR0YWNoRXZlbnQoJ29ucHJvcGVydHljaGFuZ2UnLCB0aGlzLl9zeW5jQSk7XG4gICAgfVxuXG4gICAgdmFyIG9ic2VydmVyID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHxcbiAgICAgIHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyIHx8XG4gICAgICB3aW5kb3cuTW96TXV0YXRpb25PYnNlcnZlclxuICAgIDtcblxuICAgIGlmIChvYnNlcnZlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBvYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgIHNlbGYuX3N5bmNBKCk7XG4gICAgICAgIHNlbGYuX3N5bmNTKG51bGwsIG11dGF0aW9ucyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy4kZWxlbWVudFswXSwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy4kZWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnRE9NQXR0ck1vZGlmaWVkJyxcbiAgICAgICAgc2VsZi5fc3luY0EsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgICAgdGhpcy4kZWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnRE9NTm9kZUluc2VydGVkJyxcbiAgICAgICAgc2VsZi5fc3luY1MsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgICAgdGhpcy4kZWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnRE9NTm9kZVJlbW92ZWQnLFxuICAgICAgICBzZWxmLl9zeW5jUyxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckRhdGFFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRhQWRhcHRlci5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5vblJlbGF5RXZlbnRzID0gWyd0b2dnbGUnLCAnZm9jdXMnXTtcblxuICAgIHRoaXMuc2VsZWN0aW9uLm9uKCd0b2dnbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRvZ2dsZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmZvY3VzKHBhcmFtcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIGlmICgkLmluQXJyYXkobmFtZSwgbm9uUmVsYXlFdmVudHMpICE9PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZHJvcGRvd24ub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJSZXN1bHRzRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMucmVzdWx0cy5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdlbmFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1kaXNhYmxlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignZGlzYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWRpc2FibGVkJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3F1ZXJ5JywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgaWYgKCFzZWxmLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignb3BlbicsIHt9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhQWRhcHRlci5xdWVyeShwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czphbGwnLCB7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBxdWVyeTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdxdWVyeTphcHBlbmQnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICB0aGlzLmRhdGFBZGFwdGVyLnF1ZXJ5KHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOmFwcGVuZCcsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHF1ZXJ5OiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGtleSA9IGV2dC53aGljaDtcblxuICAgICAgaWYgKHNlbGYuaXNPcGVuKCkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gS0VZUy5FU0MgfHwga2V5ID09PSBLRVlTLlRBQiB8fFxuICAgICAgICAgICAgKGtleSA9PT0gS0VZUy5VUCAmJiBldnQuYWx0S2V5KSkge1xuICAgICAgICAgIHNlbGYuY2xvc2UoZXZ0KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gS0VZUy5FTlRFUikge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czpzZWxlY3QnLCB7fSk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmICgoa2V5ID09PSBLRVlTLlNQQUNFICYmIGV2dC5jdHJsS2V5KSkge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czp0b2dnbGUnLCB7fSk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuVVApIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6cHJldmlvdXMnLCB7fSk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuRE9XTikge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czpuZXh0Jywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChrZXkgPT09IEtFWVMuRU5URVIgfHwga2V5ID09PSBLRVlTLlNQQUNFIHx8XG4gICAgICAgICAgICAoa2V5ID09PSBLRVlTLkRPV04gJiYgZXZ0LmFsdEtleSkpIHtcbiAgICAgICAgICBzZWxmLm9wZW4oKTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3N5bmNBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMub3B0aW9ucy5zZXQoJ2Rpc2FibGVkJywgdGhpcy4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcpKTtcblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRyaWdnZXIoJ2Rpc2FibGUnLCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJpZ2dlcignZW5hYmxlJywge30pO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5faXNDaGFuZ2VNdXRhdGlvbiA9IGZ1bmN0aW9uIChldnQsIG11dGF0aW9ucykge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gSWdub3JlIGFueSBtdXRhdGlvbiBldmVudHMgcmFpc2VkIGZvciBlbGVtZW50cyB0aGF0IGFyZW4ndCBvcHRpb25zIG9yXG4gICAgLy8gb3B0Z3JvdXBzLiBUaGlzIGhhbmRsZXMgdGhlIGNhc2Ugd2hlbiB0aGUgc2VsZWN0IGVsZW1lbnQgaXMgZGVzdHJveWVkXG4gICAgaWYgKFxuICAgICAgZXZ0ICYmIGV2dC50YXJnZXQgJiYgKFxuICAgICAgICBldnQudGFyZ2V0Lm5vZGVOYW1lICE9PSAnT1BUSU9OJyAmJiBldnQudGFyZ2V0Lm5vZGVOYW1lICE9PSAnT1BUR1JPVVAnXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFtdXRhdGlvbnMpIHtcbiAgICAgIC8vIElmIG11dGF0aW9uIGV2ZW50cyBhcmVuJ3Qgc3VwcG9ydGVkLCB0aGVuIHdlIGNhbiBvbmx5IGFzc3VtZSB0aGF0IHRoZVxuICAgICAgLy8gY2hhbmdlIGFmZmVjdGVkIHRoZSBzZWxlY3Rpb25zXG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG11dGF0aW9ucy5hZGRlZE5vZGVzICYmIG11dGF0aW9ucy5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbXV0YXRpb25zLmFkZGVkTm9kZXMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBtdXRhdGlvbnMuYWRkZWROb2Rlc1tuXTtcblxuICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCkge1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtdXRhdGlvbnMucmVtb3ZlZE5vZGVzICYmIG11dGF0aW9ucy5yZW1vdmVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICgkLmlzQXJyYXkobXV0YXRpb25zKSkge1xuICAgICAgJC5lYWNoKG11dGF0aW9ucywgZnVuY3Rpb24oZXZ0LCBtdXRhdGlvbikge1xuICAgICAgICBpZiAoc2VsZi5faXNDaGFuZ2VNdXRhdGlvbihldnQsIG11dGF0aW9uKSkge1xuICAgICAgICAgIC8vIFdlJ3ZlIGZvdW5kIGEgY2hhbmdlIG11dGF0aW9uLlxuICAgICAgICAgIC8vIExldCdzIGVzY2FwZSBmcm9tIHRoZSBsb29wIGFuZCBjb250aW51ZVxuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFuZ2VkO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9zeW5jU3VidHJlZSA9IGZ1bmN0aW9uIChldnQsIG11dGF0aW9ucykge1xuICAgIHZhciBjaGFuZ2VkID0gdGhpcy5faXNDaGFuZ2VNdXRhdGlvbihldnQsIG11dGF0aW9ucyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gT25seSByZS1wdWxsIHRoZSBkYXRhIGlmIHdlIHRoaW5rIHRoZXJlIGlzIGEgY2hhbmdlXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHRoaXMuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3Rpb246dXBkYXRlJywge1xuICAgICAgICAgIGRhdGE6IGN1cnJlbnREYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgdHJpZ2dlciBtZXRob2QgdG8gYXV0b21hdGljYWxseSB0cmlnZ2VyIHByZS1ldmVudHMgd2hlblxuICAgKiB0aGVyZSBhcmUgZXZlbnRzIHRoYXQgY2FuIGJlIHByZXZlbnRlZC5cbiAgICovXG4gIFNlbGVjdDIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAobmFtZSwgYXJncykge1xuICAgIHZhciBhY3R1YWxUcmlnZ2VyID0gU2VsZWN0Mi5fX3N1cGVyX18udHJpZ2dlcjtcbiAgICB2YXIgcHJlVHJpZ2dlck1hcCA9IHtcbiAgICAgICdvcGVuJzogJ29wZW5pbmcnLFxuICAgICAgJ2Nsb3NlJzogJ2Nsb3NpbmcnLFxuICAgICAgJ3NlbGVjdCc6ICdzZWxlY3RpbmcnLFxuICAgICAgJ3Vuc2VsZWN0JzogJ3Vuc2VsZWN0aW5nJyxcbiAgICAgICdjbGVhcic6ICdjbGVhcmluZydcbiAgICB9O1xuXG4gICAgaWYgKGFyZ3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXJncyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChuYW1lIGluIHByZVRyaWdnZXJNYXApIHtcbiAgICAgIHZhciBwcmVUcmlnZ2VyTmFtZSA9IHByZVRyaWdnZXJNYXBbbmFtZV07XG4gICAgICB2YXIgcHJlVHJpZ2dlckFyZ3MgPSB7XG4gICAgICAgIHByZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgIH07XG5cbiAgICAgIGFjdHVhbFRyaWdnZXIuY2FsbCh0aGlzLCBwcmVUcmlnZ2VyTmFtZSwgcHJlVHJpZ2dlckFyZ3MpO1xuXG4gICAgICBpZiAocHJlVHJpZ2dlckFyZ3MucHJldmVudGVkKSB7XG4gICAgICAgIGFyZ3MucHJldmVudGVkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWN0dWFsVHJpZ2dlci5jYWxsKHRoaXMsIG5hbWUsIGFyZ3MpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLnRvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdxdWVyeScsIHt9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ2Nsb3NlJywgeyBvcmlnaW5hbEV2ZW50IDogZXZ0IH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIGFic3RyYWN0IHRoZSBcImVuYWJsZWRcIiAobm90IFwiZGlzYWJsZWRcIikgc3RhdGUgb2YgdGhpc1xuICAgKiBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge3RydWV9IGlmIHRoZSBpbnN0YW5jZSBpcyBub3QgZGlzYWJsZWQuXG4gICAqIEByZXR1cm4ge2ZhbHNlfSBpZiB0aGUgaW5zdGFuY2UgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBTZWxlY3QyLnByb3RvdHlwZS5pc0VuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzRGlzYWJsZWQoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJkaXNhYmxlZFwiIHN0YXRlIG9mIHRoaXMgb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgZGlzYWJsZWQgb3B0aW9uIGlzIHRydWUuXG4gICAqIEByZXR1cm4ge2ZhbHNlfSBpZiB0aGUgZGlzYWJsZWQgb3B0aW9uIGlzIGZhbHNlLlxuICAgKi9cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldCgnZGlzYWJsZWQnKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGNvbnRhaW5lci5oYXNDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5oYXNGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy4kY29udGFpbmVyLmhhc0NsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZm9jdXMnKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gTm8gbmVlZCB0byByZS10cmlnZ2VyIGZvY3VzIGV2ZW50cyBpZiB3ZSBhcmUgYWxyZWFkeSBmb2N1c2VkXG4gICAgaWYgKHRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XG4gICAgdGhpcy50cmlnZ2VyKCdmb2N1cycsIHt9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU2VsZWN0MjogVGhlIGBzZWxlY3QyKFwiZW5hYmxlXCIpYCBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCcgK1xuICAgICAgICAnIGJlIHJlbW92ZWQgaW4gbGF0ZXIgU2VsZWN0MiB2ZXJzaW9ucy4gVXNlICRlbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiKScgK1xuICAgICAgICAnIGluc3RlYWQuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBhcmdzID0gW3RydWVdO1xuICAgIH1cblxuICAgIHZhciBkaXNhYmxlZCA9ICFhcmdzWzBdO1xuXG4gICAgdGhpcy4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsIGRpc2FibGVkKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmXG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU2VsZWN0MjogRGF0YSBjYW4gbm8gbG9uZ2VyIGJlIHNldCB1c2luZyBgc2VsZWN0MihcImRhdGFcIilgLiBZb3UgJyArXG4gICAgICAgICdzaG91bGQgY29uc2lkZXIgc2V0dGluZyB0aGUgdmFsdWUgaW5zdGVhZCB1c2luZyBgJGVsZW1lbnQudmFsKClgLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSBbXTtcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgIGRhdGEgPSBjdXJyZW50RGF0YTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTZWxlY3QyOiBUaGUgYHNlbGVjdDIoXCJ2YWxcIilgIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlJyArXG4gICAgICAgICcgcmVtb3ZlZCBpbiBsYXRlciBTZWxlY3QyIHZlcnNpb25zLiBVc2UgJGVsZW1lbnQudmFsKCkgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChhcmdzID09IG51bGwgfHwgYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50LnZhbCgpO1xuICAgIH1cblxuICAgIHZhciBuZXdWYWwgPSBhcmdzWzBdO1xuXG4gICAgaWYgKCQuaXNBcnJheShuZXdWYWwpKSB7XG4gICAgICBuZXdWYWwgPSAkLm1hcChuZXdWYWwsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai50b1N0cmluZygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC52YWwobmV3VmFsKS50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kY29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgaWYgKHRoaXMuJGVsZW1lbnRbMF0uZGV0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uZGV0YWNoRXZlbnQoJ29ucHJvcGVydHljaGFuZ2UnLCB0aGlzLl9zeW5jQSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29ic2VydmVyICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy4kZWxlbWVudFswXVxuICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQXR0ck1vZGlmaWVkJywgdGhpcy5fc3luY0EsIGZhbHNlKTtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF1cbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIHRoaXMuX3N5bmNTLCBmYWxzZSk7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdXG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Ob2RlUmVtb3ZlZCcsIHRoaXMuX3N5bmNTLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3luY0EgPSBudWxsO1xuICAgIHRoaXMuX3N5bmNTID0gbnVsbDtcblxuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCcuc2VsZWN0MicpO1xuICAgIHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnLFxuICAgIFV0aWxzLkdldERhdGEodGhpcy4kZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcpKTtcblxuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgVXRpbHMuUmVtb3ZlRGF0YSh0aGlzLiRlbGVtZW50WzBdKTtcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZURhdGEoJ3NlbGVjdDInKTtcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuc2VsZWN0aW9uLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRyb3Bkb3duLmRlc3Ryb3koKTtcbiAgICB0aGlzLnJlc3VsdHMuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5kYXRhQWRhcHRlciA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBudWxsO1xuICAgIHRoaXMuZHJvcGRvd24gPSBudWxsO1xuICAgIHRoaXMucmVzdWx0cyA9IG51bGw7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkY29udGFpbmVyID0gJChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDIgc2VsZWN0Mi1jb250YWluZXJcIj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0aW9uXCI+PC9zcGFuPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi13cmFwcGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgICRjb250YWluZXIuYXR0cignZGlyJywgdGhpcy5vcHRpb25zLmdldCgnZGlyJykpO1xuXG4gICAgdGhpcy4kY29udGFpbmVyID0gJGNvbnRhaW5lcjtcblxuICAgIHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLScgKyB0aGlzLm9wdGlvbnMuZ2V0KCd0aGVtZScpKTtcblxuICAgIFV0aWxzLlN0b3JlRGF0YSgkY29udGFpbmVyWzBdLCAnZWxlbWVudCcsIHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdDI7XG59KTtcblxuUzIuZGVmaW5lKCdqcXVlcnktbW91c2V3aGVlbCcsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgLy8gVXNlZCB0byBzaGltIGpRdWVyeS5tb3VzZXdoZWVsIGZvciBub24tZnVsbCBidWlsZHMuXG4gIHJldHVybiAkO1xufSk7XG5cblMyLmRlZmluZSgnanF1ZXJ5LnNlbGVjdDInLFtcbiAgJ2pxdWVyeScsXG4gICdqcXVlcnktbW91c2V3aGVlbCcsXG5cbiAgJy4vc2VsZWN0Mi9jb3JlJyxcbiAgJy4vc2VsZWN0Mi9kZWZhdWx0cycsXG4gICcuL3NlbGVjdDIvdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgXywgU2VsZWN0MiwgRGVmYXVsdHMsIFV0aWxzKSB7XG4gIGlmICgkLmZuLnNlbGVjdDIgPT0gbnVsbCkge1xuICAgIC8vIEFsbCBtZXRob2RzIHRoYXQgc2hvdWxkIHJldHVybiB0aGUgZWxlbWVudFxuICAgIHZhciB0aGlzTWV0aG9kcyA9IFsnb3BlbicsICdjbG9zZScsICdkZXN0cm95J107XG5cbiAgICAkLmZuLnNlbGVjdDIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2VPcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIG9wdGlvbnMpO1xuXG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IFNlbGVjdDIoJCh0aGlzKSwgaW5zdGFuY2VPcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgcmV0O1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBVdGlscy5HZXREYXRhKHRoaXMsICdzZWxlY3QyJyk7XG5cbiAgICAgICAgICBpZiAoaW5zdGFuY2UgPT0gbnVsbCAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAnVGhlIHNlbGVjdDIoXFwnJyArIG9wdGlvbnMgKyAnXFwnKSBtZXRob2Qgd2FzIGNhbGxlZCBvbiBhbiAnICtcbiAgICAgICAgICAgICAgJ2VsZW1lbnQgdGhhdCBpcyBub3QgdXNpbmcgU2VsZWN0Mi4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldCA9IGluc3RhbmNlW29wdGlvbnNdLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2Ugc2hvdWxkIGJlIHJldHVybmluZyBgdGhpc2BcbiAgICAgICAgaWYgKCQuaW5BcnJheShvcHRpb25zLCB0aGlzTWV0aG9kcykgPiAtMSkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudHMgZm9yIFNlbGVjdDI6ICcgKyBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKCQuZm4uc2VsZWN0Mi5kZWZhdWx0cyA9PSBudWxsKSB7XG4gICAgJC5mbi5zZWxlY3QyLmRlZmF1bHRzID0gRGVmYXVsdHM7XG4gIH1cblxuICByZXR1cm4gU2VsZWN0Mjtcbn0pO1xuXG4gIC8vIFJldHVybiB0aGUgQU1EIGxvYWRlciBjb25maWd1cmF0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIG91dHNpZGUgb2YgdGhpcyBmaWxlXG4gIHJldHVybiB7XG4gICAgZGVmaW5lOiBTMi5kZWZpbmUsXG4gICAgcmVxdWlyZTogUzIucmVxdWlyZVxuICB9O1xufSgpKTtcblxuICAvLyBBdXRvbG9hZCB0aGUgalF1ZXJ5IGJpbmRpbmdzXG4gIC8vIFdlIGtub3cgdGhhdCBhbGwgb2YgdGhlIG1vZHVsZXMgZXhpc3QgYWJvdmUgdGhpcywgc28gd2UncmUgc2FmZVxuICB2YXIgc2VsZWN0MiA9IFMyLnJlcXVpcmUoJ2pxdWVyeS5zZWxlY3QyJyk7XG5cbiAgLy8gSG9sZCB0aGUgQU1EIG1vZHVsZSByZWZlcmVuY2VzIG9uIHRoZSBqUXVlcnkgZnVuY3Rpb24gdGhhdCB3YXMganVzdCBsb2FkZWRcbiAgLy8gVGhpcyBhbGxvd3MgU2VsZWN0MiB0byB1c2UgdGhlIGludGVybmFsIGxvYWRlciBvdXRzaWRlIG9mIHRoaXMgZmlsZSwgc3VjaFxuICAvLyBhcyBpbiB0aGUgbGFuZ3VhZ2UgZmlsZXMuXG4gIGpRdWVyeS5mbi5zZWxlY3QyLmFtZCA9IFMyO1xuXG4gIC8vIFJldHVybiB0aGUgU2VsZWN0MiBpbnN0YW5jZSBmb3IgYW55b25lIHdobyBpcyBpbXBvcnRpbmcgaXQuXG4gIHJldHVybiBzZWxlY3QyO1xufSkpO1xuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgXCJzZWxlY3QyXCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBlbGVtZW50c1xyXG4gICAgY29uc3QgZWxzID0ge1xyXG4gICAgICAgIGJpbGxpbmdfY291bnRyeTogJChcIiNiaWxsaW5nX2NvdW50cnlcIiksXHJcbiAgICAgICAgYmlsbGluZ19zdGF0ZTogJChcIiNiaWxsaW5nX3N0YXRlXCIpLFxyXG4gICAgICAgIGJpbGxpbmdfY2l0eTogJChcIiNiaWxsaW5nX2NpdHlcIiksXHJcbiAgICAgICAgYmlsbGluZ19jaXR5X2ZpZWxkOiAkKFwiI2JpbGxpbmdfY2l0eV9maWVsZFwiKSxcclxuICAgICAgICBiaWxsaW5nX3N1YmRpc3RyaWN0OiAkKFwiI2JpbGxpbmdfc3ViZGlzdHJpY3RcIiksXHJcbiAgICAgICAgYmlsbGluZ19zdWJkaXN0cmljdF9maWVsZDogJChcIiNiaWxsaW5nX3N1YmRpc3RyaWN0X2ZpZWxkXCIpLFxyXG5cclxuICAgICAgICBzaGlwcGluZ19jb3VudHJ5OiAkKFwiI3NoaXBwaW5nX2NvdW50cnlcIiksXHJcbiAgICAgICAgc2hpcHBpbmdfc3RhdGU6ICQoXCIjc2hpcHBpbmdfc3RhdGVcIiksXHJcbiAgICAgICAgc2hpcHBpbmdfY2l0eTogJChcIiNzaGlwcGluZ19jaXR5XCIpLFxyXG4gICAgICAgIHNoaXBwaW5nX2NpdHlfZmllbGQ6ICQoXCIjc2hpcHBpbmdfY2l0eV9maWVsZFwiKSxcclxuICAgICAgICBzaGlwcGluZ19zdWJkaXN0cmljdDogJChcIiNzaGlwcGluZ19zdWJkaXN0cmljdFwiKSxcclxuICAgICAgICBzaGlwcGluZ19zdWJkaXN0cmljdF9maWVsZDogJChcIiNzaGlwcGluZ19zdWJkaXN0cmljdF9maWVsZFwiKSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBzZWxlY3QyXHJcbiAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdC5zZWxlY3QyKCk7XHJcbiAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3Quc2VsZWN0MigpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgYWRkcmVzcyBmaWVsZHNcclxuICAgIHNkb2tyX2JpbGxpbmdfYWRkcmVzc19maWVsZHMoKTtcclxuICAgIHNkb2tyX3NoaXBwaW5nX2FkZHJlc3NfZmllbGRzKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBiaWxsaW5nIGNpdHkgYW5kIHN1YmRpc3RyaWN0IG9wdGlvbnNcclxuICAgIGlmIChlbHMuYmlsbGluZ19jb3VudHJ5LnZhbCgpID09IFwiSURcIikge1xyXG4gICAgICAgIHNkb2tyX2dldF9iaWxsaW5nX2NpdHlfb3B0aW9ucygpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdChcImJpbGxpbmdcIiwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2Rva3JfZ2V0X2JpbGxpbmdfc3ViZGlzdHJpY3Rfb3B0aW9ucygpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdChcImJpbGxpbmdcIiwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBzaGlwcGluZyBjaXR5IGFuZCBzdWJkaXN0cmljdCBvcHRpb25zXHJcbiAgICBpZiAoZWxzLnNoaXBwaW5nX2NvdW50cnkudmFsKCkgPT0gXCJJRFwiKSB7XHJcbiAgICAgICAgc2Rva3JfZ2V0X3NoaXBwaW5nX2NpdHlfb3B0aW9ucygpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdChcInNoaXBwaW5nXCIsIFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNkb2tyX2dldF9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zKCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0KFwic2hpcHBpbmdcIiwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIGJpbGxpbmcgY291bnRyeVxyXG4gICAgZWxzLmJpbGxpbmdfY291bnRyeS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3JfYmlsbGluZ19hZGRyZXNzX2ZpZWxkcygpO1xyXG4gICAgICAgIHNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0KFwiYmlsbGluZ1wiLCBcIlwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBiaWxsaW5nIHN0YXRlXHJcbiAgICBlbHMuYmlsbGluZ19zdGF0ZS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGVscy5iaWxsaW5nX2NvdW50cnkudmFsKCkgIT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Rva3JfZ2V0X2JpbGxpbmdfY2l0eV9vcHRpb25zKCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0KFwiYmlsbGluZ1wiLCBcIlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBiaWxsaW5nIGNpdHlcclxuICAgICQoXCIjYmlsbGluZ19jaXR5X2ZpZWxkXCIpLm9uKFwiY2hhbmdlXCIsIFwiI2JpbGxpbmdfY2l0eVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGVscy5iaWxsaW5nX2NvdW50cnkudmFsKCkgIT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Rva3JfZ2V0X2JpbGxpbmdfc3ViZGlzdHJpY3Rfb3B0aW9ucygpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdChcImJpbGxpbmdcIiwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPbiBjaGFuZ2UgYmlsbGluZyBzdWJkaXN0cmljdFxyXG4gICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3Qub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0KFwiYmlsbGluZ1wiLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBzaGlwcGluZyBjb3VudHJ5XHJcbiAgICBlbHMuc2hpcHBpbmdfY291bnRyeS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3Jfc2hpcHBpbmdfYWRkcmVzc19maWVsZHMoKTtcclxuICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdChcImJpbGxpbmdcIiwgXCJcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPbiBjaGFuZ2Ugc2hpcHBpbmcgc3RhdGVcclxuICAgIGVscy5zaGlwcGluZ19zdGF0ZS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGVscy5zaGlwcGluZ19jb3VudHJ5LnZhbCgpICE9IFwiSURcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNkb2tyX2dldF9zaGlwcGluZ19jaXR5X29wdGlvbnMoKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3QoXCJzaGlwcGluZ1wiLCBcIlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBzaGlwcGluZyBjaXR5XHJcbiAgICAkKFwiI3NoaXBwaW5nX2NpdHlfZmllbGRcIikub24oXCJjaGFuZ2VcIiwgXCIjc2hpcHBpbmdfY2l0eVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGVscy5zaGlwcGluZ19jb3VudHJ5LnZhbCgpICE9IFwiSURcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNkb2tyX2dldF9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zKCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0KFwic2hpcHBpbmdcIiwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPbiBjaGFuZ2Ugc2hpcHBpbmcgc3ViZGlzdHJpY3RcclxuICAgIGVscy5zaGlwcGluZ19zdWJkaXN0cmljdC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3QoXCJzaGlwcGluZ1wiLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNob3cgaGlkZSBiaWxsaW5nIHN1YmRpc3RyaWN0XHJcbiAgICBmdW5jdGlvbiBzZG9rcl9iaWxsaW5nX2FkZHJlc3NfZmllbGRzKCkge1xyXG4gICAgICAgIGlmIChlbHMuYmlsbGluZ19jb3VudHJ5LnZhbCgpID09IFwiSURcIikge1xyXG4gICAgICAgICAgICAvLyBTZXR1cCBzdWJkaXN0cmljdFxyXG4gICAgICAgICAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdF9maWVsZFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwibGFiZWxcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKFxyXG4gICAgICAgICAgICAgICAgICAgIGAke3Nkb25na2lyX2xjei5zdWJkaXN0cmljdF90ZXh0fSZuYnNwOzxhYmJyIGNsYXNzPVwicmVxdWlyZWRcIiB0aXRsZT1cInJlcXVpcmVkXCI+KjwvYWJicj5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3RfZmllbGQuZmFkZUluKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXR1cCBjaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbGxpbmdfY2l0eV9zZWxlY3QgPSBgPHNlbGVjdCBuYW1lPVwiYmlsbGluZ19jaXR5XCIgaWQ9XCJiaWxsaW5nX2NpdHlcIiBjbGFzcz1cInNlbGVjdFwiIGF1dG9jb21wbGV0ZT1cImFkZHJlc3MtbGV2ZWwyXCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7c2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dH1cIj48L3NlbGVjdD5gO1xyXG4gICAgICAgICAgICBlbHMuYmlsbGluZ19jaXR5X2ZpZWxkXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCIud29vY29tbWVyY2UtaW5wdXQtd3JhcHBlclwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoYmlsbGluZ19jaXR5X3NlbGVjdCk7XHJcbiAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLnNlbGVjdDIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZXR1cCBzdWJkaXN0cmljdFxyXG4gICAgICAgICAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdF9maWVsZC5mYWRlT3V0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXR1cCBjaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbGxpbmdfY2l0eV9pbnB1dCA9XHJcbiAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dC10ZXh0IFwiIG5hbWU9XCJiaWxsaW5nX2NpdHlcIiBpZD1cImJpbGxpbmdfY2l0eVwiIHBsYWNlaG9sZGVyPVwiXCIgdmFsdWU9XCJcIiBhdXRvY29tcGxldGU9XCJhZGRyZXNzLWxldmVsMlwiPic7XHJcbiAgICAgICAgICAgIGVscy5iaWxsaW5nX2NpdHlfZmllbGRcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihcIi53b29jb21tZXJjZS1pbnB1dC13cmFwcGVyXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChiaWxsaW5nX2NpdHlfaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTaG93IGhpZGUgc2hpcHBpbmcgc3ViZGlzdHJpY3RcclxuICAgIGZ1bmN0aW9uIHNkb2tyX3NoaXBwaW5nX2FkZHJlc3NfZmllbGRzKCkge1xyXG4gICAgICAgIGlmIChlbHMuc2hpcHBpbmdfY291bnRyeS52YWwoKSA9PSBcIklEXCIpIHtcclxuICAgICAgICAgICAgLy8gU2V0dXAgc3ViZGlzdHJpY3RcclxuICAgICAgICAgICAgZWxzLnNoaXBwaW5nX3N1YmRpc3RyaWN0X2ZpZWxkXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCJsYWJlbFwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7c2RvbmdraXJfbGN6LnN1YmRpc3RyaWN0X3RleHR9Jm5ic3A7PGFiYnIgY2xhc3M9XCJyZXF1aXJlZFwiIHRpdGxlPVwicmVxdWlyZWRcIj4qPC9hYmJyPmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGQuZmFkZUluKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXR1cCBjaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBwaW5nX2NpdHlfc2VsZWN0ID0gYDxzZWxlY3QgbmFtZT1cInNoaXBwaW5nX2NpdHlcIiBpZD1cInNoaXBwaW5nX2NpdHlcIiBjbGFzcz1cInNlbGVjdFwiIGF1dG9jb21wbGV0ZT1cImFkZHJlc3MtbGV2ZWwyXCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7c2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dH1cIj48L3NlbGVjdD5gO1xyXG4gICAgICAgICAgICBlbHMuc2hpcHBpbmdfY2l0eV9maWVsZFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwiLndvb2NvbW1lcmNlLWlucHV0LXdyYXBwZXJcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKHNoaXBwaW5nX2NpdHlfc2VsZWN0KTtcclxuICAgICAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLnNlbGVjdDIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZXR1cCBzdWJkaXN0cmljdFxyXG4gICAgICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGQuZmFkZU91dCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0dXAgY2l0eVxyXG4gICAgICAgICAgICBjb25zdCBzaGlwcGluZ19jaXR5X2lucHV0ID1cclxuICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LXRleHQgXCIgbmFtZT1cInNoaXBwaW5nX2NpdHlcIiBpZD1cInNoaXBwaW5nX2NpdHlcIiBwbGFjZWhvbGRlcj1cIlwiIHZhbHVlPVwiXCIgYXV0b2NvbXBsZXRlPVwiYWRkcmVzcy1sZXZlbDJcIj4nO1xyXG4gICAgICAgICAgICBlbHMuc2hpcHBpbmdfY2l0eV9maWVsZFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwiLndvb2NvbW1lcmNlLWlucHV0LXdyYXBwZXJcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKHNoaXBwaW5nX2NpdHlfaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYmlsbGluZyBjaXR5IG9wdGlvbnNcclxuICAgIGZ1bmN0aW9uIHNkb2tyX2dldF9iaWxsaW5nX2NpdHlfb3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoZWxzLmJpbGxpbmdfc3RhdGUudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiI2JpbGxpbmdfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGVscy5iaWxsaW5nX3N1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZWxzLmJpbGxpbmdfc3RhdGUudmFsKCkuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZV9pZCA9IHN0YXRlWzFdO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9jaXRpZXNfYnlfcHJvdmluY2VfaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2VfaWQ6IHByb3ZpbmNlX2lkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaXRpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfY2l0eVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLnZhbCgpID09IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdC52YWwoKSA9PSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIGNpdHkuY2l0eV9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChgJHtjaXR5LnR5cGV9ICR7Y2l0eS5uYW1lfWApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5iaWxsaW5nX3N1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNiaWxsaW5nX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHNoaXBwaW5nIGNpdHkgb3B0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2Rva3JfZ2V0X3NoaXBwaW5nX2NpdHlfb3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoZWxzLnNoaXBwaW5nX3N0YXRlLnZhbCgpID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgZWxzLnNoaXBwaW5nX3N1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfY2l0aWVzX2J5X3Byb3ZpbmNlX2lkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpbmNlX2lkOiBlbHMuc2hpcHBpbmdfc3RhdGUudmFsKCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpdGllcyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfY2l0eVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfY2l0eVwiKS52YWwoKSA9PSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zaGlwcGluZ19zdWJkaXN0cmljdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zaGlwcGluZ19zdWJkaXN0cmljdC52YWwoKSA9PSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nX2NpdHlcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgY2l0eS5jaXR5X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGAke2NpdHkudHlwZX0gJHtjaXR5Lm5hbWV9YCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5zaGlwcGluZ19zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBiaWxsaW5nIHN1YmRpc3RyaWN0IG9wdGlvbnNcclxuICAgIGZ1bmN0aW9uIHNkb2tyX2dldF9iaWxsaW5nX3N1YmRpc3RyaWN0X29wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjYmlsbGluZ19jaXR5XCIpLnZhbCgpID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNiaWxsaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfc3ViZGlzdHJpY3RzX2J5X2NpdHlfaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eV9pZDogJChcIiNiaWxsaW5nX2NpdHlcIikudmFsKCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YmRpc3RyaWN0cyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19zdWJkaXN0cmljdFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19zdWJkaXN0cmljdFwiKS52YWwoKSA9PSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfc3ViZGlzdHJpY3RcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViZGlzdHJpY3RzLmZvckVhY2goKHN1YmRpc3RyaWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19zdWJkaXN0cmljdFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIHN1YmRpc3RyaWN0LnN1YmRpc3RyaWN0X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHN1YmRpc3RyaWN0Lm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfc3ViZGlzdHJpY3RcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNiaWxsaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc2hpcHBpbmcgc3ViZGlzdHJpY3Qgb3B0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2Rva3JfZ2V0X3NoaXBwaW5nX3N1YmRpc3RyaWN0X29wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjc2hpcHBpbmdfY2l0eVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9zdWJkaXN0cmljdHNfYnlfY2l0eV9pZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBjaXR5X2lkOiAkKFwiI3NoaXBwaW5nX2NpdHlcIikudmFsKCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YmRpc3RyaWN0cyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLnZhbCgpID09IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViZGlzdHJpY3RzLmZvckVhY2goKHN1YmRpc3RyaWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBzdWJkaXN0cmljdC5zdWJkaXN0cmljdF9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzdWJkaXN0cmljdC5uYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBzZXNzaW9uIHN1YmRpc3RyaWN0XHJcbiAgICBmdW5jdGlvbiBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdCh0eXBlLCBzdWJkaXN0cmljdF9pZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJkaXN0cmljdF9pZDogc3ViZGlzdHJpY3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnRyaWdnZXIoXCJ1cGRhdGVfY2hlY2tvdXRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9