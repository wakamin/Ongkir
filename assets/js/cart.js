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
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_1__);


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
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").select2();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict_field").removeClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").select2();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city_field").append(html.city_text);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict_field").addClass("sdokr-hide");
    }
  }); // On state change

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("change", "#calc_shipping_state", function () {
    var state = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val().split("-");
    var province_id = state[1];

    if (province_id != undefined) {
      sdokr_get_city_options(province_id);
    }
  }); // On city change

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("change", "#calc_shipping_city", function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_country").val() == "ID") {
      sdokr_get_subdistrict_options(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
    }
  }); // On change subdistrict

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("change", '#calc_shipping_subdistrict', function () {
    sdokr_set_session_subdistrict(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
  }); // Get city options

  function sdokr_get_city_options(province_id) {
    return new Promise(function (resolve, reject) {
      if (province_id == "") {
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
          action: "ongkir_get_cities_by_province_id",
          nonce_ajax: sdongkir_lcz.nonce,
          province_id: province_id
        },
        success: function success(res) {
          var cities = res.data.data;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          cities.forEach(function (city) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", city.city_id).text("".concat(city.type, " ").concat(city.name)));
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


  function sdokr_get_subdistrict_options(city_id) {
    return new Promise(function (resolve, reject) {
      if (city_id == "") {
        resolve();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").attr("disabled", true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").val() == "";
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
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          subdistricts.forEach(function (subdistrict) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#calc_shipping_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", subdistrict.subdistrict_id).text(subdistrict.name));
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
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: sdongkir_lcz.ajaxurl,
        type: "POST",
        data: {
          action: "ongkir_set_session_subdistrict",
          nonce_ajax: sdongkir_lcz.nonce,
          subdistrict_id: subdistrict_id
        },
        success: function success(res) {
          resolve(res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY2FydC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiZGVmaW5lIiwialF1ZXJ5IiwiUzIiLCJmbiIsInNlbGVjdDIiLCJhbWQiLCJyZXF1aXJlanMiLCJyZXF1aXJlIiwidW5kZWYiLCJtYWluIiwicmVxIiwibWFrZU1hcCIsImhhbmRsZXJzIiwiZGVmaW5lZCIsIndhaXRpbmciLCJjb25maWciLCJkZWZpbmluZyIsImhhc093biIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiYXBzIiwic2xpY2UiLCJqc1N1ZmZpeFJlZ0V4cCIsImhhc1Byb3AiLCJvYmoiLCJwcm9wIiwiY2FsbCIsIm5vcm1hbGl6ZSIsIm5hbWUiLCJiYXNlTmFtZSIsIm5hbWVQYXJ0cyIsIm5hbWVTZWdtZW50IiwibWFwVmFsdWUiLCJmb3VuZE1hcCIsImxhc3RJbmRleCIsImZvdW5kSSIsImZvdW5kU3Rhck1hcCIsInN0YXJJIiwiaSIsImoiLCJwYXJ0Iiwibm9ybWFsaXplZEJhc2VQYXJ0cyIsImJhc2VQYXJ0cyIsInNwbGl0IiwibWFwIiwic3Rhck1hcCIsImxlbmd0aCIsIm5vZGVJZENvbXBhdCIsInRlc3QiLCJyZXBsYWNlIiwiY2hhckF0IiwiY29uY2F0Iiwic3BsaWNlIiwiam9pbiIsIm1ha2VSZXF1aXJlIiwicmVsTmFtZSIsImZvcmNlU3luYyIsImFyZ3MiLCJhcmd1bWVudHMiLCJwdXNoIiwiYXBwbHkiLCJtYWtlTm9ybWFsaXplIiwibWFrZUxvYWQiLCJkZXBOYW1lIiwidmFsdWUiLCJjYWxsRGVwIiwiRXJyb3IiLCJzcGxpdFByZWZpeCIsInByZWZpeCIsImluZGV4IiwiaW5kZXhPZiIsInN1YnN0cmluZyIsIm1ha2VSZWxQYXJ0cyIsInJlbFBhcnRzIiwicGx1Z2luIiwicGFydHMiLCJyZWxSZXNvdXJjZU5hbWUiLCJmIiwibiIsInByIiwicCIsIm1ha2VDb25maWciLCJleHBvcnRzIiwiZSIsIm1vZHVsZSIsImlkIiwidXJpIiwiZGVwcyIsImNhbGxiYWNrIiwiY2pzTW9kdWxlIiwicmV0IiwiY2FsbGJhY2tUeXBlIiwidXNpbmdFeHBvcnRzIiwibG9hZCIsInVuZGVmaW5lZCIsImFsdCIsInNldFRpbWVvdXQiLCJjZmciLCJfZGVmaW5lZCIsIl8kIiwiJCIsImNvbnNvbGUiLCJlcnJvciIsIlV0aWxzIiwiRXh0ZW5kIiwiQ2hpbGRDbGFzcyIsIlN1cGVyQ2xhc3MiLCJfX2hhc1Byb3AiLCJCYXNlQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImtleSIsIl9fc3VwZXJfXyIsImdldE1ldGhvZHMiLCJ0aGVDbGFzcyIsInByb3RvIiwibWV0aG9kcyIsIm1ldGhvZE5hbWUiLCJtIiwiRGVjb3JhdGUiLCJEZWNvcmF0b3JDbGFzcyIsImRlY29yYXRlZE1ldGhvZHMiLCJzdXBlck1ldGhvZHMiLCJEZWNvcmF0ZWRDbGFzcyIsInVuc2hpZnQiLCJBcnJheSIsImFyZ0NvdW50IiwiY2FsbGVkQ29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImN0ciIsInN1cGVyTWV0aG9kIiwiY2FsbGVkTWV0aG9kIiwib3JpZ2luYWxNZXRob2QiLCJkZWNvcmF0ZWRNZXRob2QiLCJkIiwiT2JzZXJ2YWJsZSIsImxpc3RlbmVycyIsIm9uIiwiZXZlbnQiLCJ0cmlnZ2VyIiwicGFyYW1zIiwiX3R5cGUiLCJpbnZva2UiLCJsZW4iLCJnZW5lcmF0ZUNoYXJzIiwiY2hhcnMiLCJyYW5kb21DaGFyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJiaW5kIiwiZnVuYyIsImNvbnRleHQiLCJfY29udmVydERhdGEiLCJkYXRhIiwib3JpZ2luYWxLZXkiLCJrZXlzIiwiZGF0YUxldmVsIiwiayIsInRvTG93ZXJDYXNlIiwiaGFzU2Nyb2xsIiwiZWwiLCIkZWwiLCJvdmVyZmxvd1giLCJzdHlsZSIsIm92ZXJmbG93WSIsImlubmVySGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNjcm9sbFdpZHRoIiwiZXNjYXBlTWFya3VwIiwibWFya3VwIiwicmVwbGFjZU1hcCIsIlN0cmluZyIsIm1hdGNoIiwiYXBwZW5kTWFueSIsIiRlbGVtZW50IiwiJG5vZGVzIiwianF1ZXJ5Iiwic3Vic3RyIiwiJGpxTm9kZXMiLCJub2RlIiwiYWRkIiwiYXBwZW5kIiwiX19jYWNoZSIsIkdldFVuaXF1ZUVsZW1lbnRJZCIsImVsZW1lbnQiLCJzZWxlY3QySWQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJTdG9yZURhdGEiLCJHZXREYXRhIiwiUmVtb3ZlRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsIlJlc3VsdHMiLCJvcHRpb25zIiwiZGF0YUFkYXB0ZXIiLCJyZW5kZXIiLCIkcmVzdWx0cyIsImdldCIsImF0dHIiLCJjbGVhciIsImVtcHR5IiwiZGlzcGxheU1lc3NhZ2UiLCJoaWRlTG9hZGluZyIsIiRtZXNzYWdlIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsImhpZGVNZXNzYWdlcyIsImZpbmQiLCJyZW1vdmUiLCIkb3B0aW9ucyIsInJlc3VsdHMiLCJjaGlsZHJlbiIsInNvcnQiLCJpdGVtIiwiJG9wdGlvbiIsIm9wdGlvbiIsInBvc2l0aW9uIiwiJGRyb3Bkb3duIiwiJHJlc3VsdHNDb250YWluZXIiLCJzb3J0ZXIiLCJoaWdobGlnaHRGaXJzdEl0ZW0iLCIkc2VsZWN0ZWQiLCJmaWx0ZXIiLCJmaXJzdCIsImVuc3VyZUhpZ2hsaWdodFZpc2libGUiLCJzZXRDbGFzc2VzIiwic2VsZiIsImN1cnJlbnQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSWRzIiwicyIsImVhY2giLCJpbkFycmF5Iiwic2hvd0xvYWRpbmciLCJsb2FkaW5nTW9yZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsInRleHQiLCIkbG9hZGluZyIsInByZXBlbmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdHRycyIsIm1hdGNoZXMiLCJ3aW5kb3ciLCJFbGVtZW50IiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJfcmVzdWx0SWQiLCJ0aXRsZSIsInJvbGUiLCJ2YWwiLCJsYWJlbCIsIiRsYWJlbCIsInRlbXBsYXRlIiwiJGNoaWxkcmVuIiwiYyIsImNoaWxkIiwiJGNoaWxkIiwiJGNoaWxkcmVuQ29udGFpbmVyIiwiY29udGFpbmVyIiwiJGNvbnRhaW5lciIsImlzT3BlbiIsInJlbW92ZUF0dHIiLCIkaGlnaGxpZ2h0ZWQiLCJnZXRIaWdobGlnaHRlZFJlc3VsdHMiLCJjdXJyZW50SW5kZXgiLCJuZXh0SW5kZXgiLCIkbmV4dCIsImVxIiwiY3VycmVudE9mZnNldCIsIm9mZnNldCIsInRvcCIsIm5leHRUb3AiLCJuZXh0T2Zmc2V0Iiwic2Nyb2xsVG9wIiwib3V0ZXJIZWlnaHQiLCJuZXh0Qm90dG9tIiwiYWRkQ2xhc3MiLCJtb3VzZXdoZWVsIiwiYm90dG9tIiwiZGVsdGFZIiwiaXNBdFRvcCIsImlzQXRCb3R0b20iLCJoZWlnaHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImV2dCIsIiR0aGlzIiwib3JpZ2luYWxFdmVudCIsInJlbW92ZUNsYXNzIiwiZGVzdHJveSIsIm9mZnNldERlbHRhIiwicmVzdWx0IiwiY29udGVudCIsImRpc3BsYXkiLCJpbm5lckhUTUwiLCJLRVlTIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0MiLCJTUEFDRSIsIlBBR0VfVVAiLCJQQUdFX0RPV04iLCJFTkQiLCJIT01FIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwiREVMRVRFIiwiQmFzZVNlbGVjdGlvbiIsIiRzZWxlY3Rpb24iLCJfdGFiaW5kZXgiLCJyZXN1bHRzSWQiLCJfaGFuZGxlQmx1ciIsIndoaWNoIiwidXBkYXRlIiwiX2F0dGFjaENsb3NlSGFuZGxlciIsIl9kZXRhY2hDbG9zZUhhbmRsZXIiLCJhY3RpdmVFbGVtZW50IiwiY29udGFpbnMiLCJib2R5IiwiJHRhcmdldCIsInRhcmdldCIsIiRzZWxlY3QiLCJjbG9zZXN0IiwiJGFsbCIsIm9mZiIsIiRzZWxlY3Rpb25Db250YWluZXIiLCJpc0VuYWJsZWQiLCJpc0Rpc2FibGVkIiwiU2luZ2xlU2VsZWN0aW9uIiwiaHRtbCIsIiRyZW5kZXJlZCIsInNlbGVjdGlvbkNvbnRhaW5lciIsInNlbGVjdGlvbiIsImZvcm1hdHRlZCIsIk11bHRpcGxlU2VsZWN0aW9uIiwiJHJlbW92ZSIsInBhcmVudCIsIiRzZWxlY3Rpb25zIiwiUGxhY2Vob2xkZXIiLCJkZWNvcmF0ZWQiLCJwbGFjZWhvbGRlciIsIm5vcm1hbGl6ZVBsYWNlaG9sZGVyIiwiXyIsImNyZWF0ZVBsYWNlaG9sZGVyIiwiJHBsYWNlaG9sZGVyIiwic2luZ2xlUGxhY2Vob2xkZXIiLCJtdWx0aXBsZVNlbGVjdGlvbnMiLCJBbGxvd0NsZWFyIiwiX2hhbmRsZUNsZWFyIiwiX2hhbmRsZUtleWJvYXJkQ2xlYXIiLCIkY2xlYXIiLCJwcmV2aW91c1ZhbCIsInVuc2VsZWN0RGF0YSIsInByZXZlbnRlZCIsInJlbW92ZUFsbCIsIlNlYXJjaCIsIiRzZWFyY2giLCIkc2VhcmNoQ29udGFpbmVyIiwiX3RyYW5zZmVyVGFiSW5kZXgiLCJfa2V5VXBQcmV2ZW50ZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCIkcHJldmlvdXNDaG9pY2UiLCJwcmV2Iiwic2VhcmNoUmVtb3ZlQ2hvaWNlIiwibXNpZSIsImRvY3VtZW50TW9kZSIsImRpc2FibGVJbnB1dEV2ZW50cyIsInR5cGUiLCJoYW5kbGVTZWFyY2giLCJzZWFyY2hIYWRGb2N1cyIsInJlc2l6ZVNlYXJjaCIsImlucHV0IiwidGVybSIsImNzcyIsIndpZHRoIiwibWluaW11bVdpZHRoIiwiRXZlbnRSZWxheSIsInJlbGF5RXZlbnRzIiwicHJldmVudGFibGVFdmVudHMiLCJFdmVudCIsIlRyYW5zbGF0aW9uIiwiZGljdCIsImFsbCIsImV4dGVuZCIsInRyYW5zbGF0aW9uIiwiX2NhY2hlIiwibG9hZFBhdGgiLCJwYXRoIiwidHJhbnNsYXRpb25zIiwiZGlhY3JpdGljcyIsIkJhc2VBZGFwdGVyIiwicXVlcnkiLCJnZW5lcmF0ZVJlc3VsdElkIiwiU2VsZWN0QWRhcHRlciIsInNlbGVjdCIsImlzIiwiY3VycmVudERhdGEiLCJ1bnNlbGVjdCIsImFkZE9wdGlvbnMiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsIm5vcm1hbGl6ZWREYXRhIiwiX25vcm1hbGl6ZUl0ZW0iLCJkZWZhdWx0cyIsIm1hdGNoZXIiLCJBcnJheUFkYXB0ZXIiLCJfZGF0YVRvQ29udmVydCIsImNvbnZlcnRUb09wdGlvbnMiLCJlbG0iLCIkZXhpc3RpbmciLCJleGlzdGluZ0lkcyIsIm9ubHlJdGVtIiwiJGV4aXN0aW5nT3B0aW9uIiwiZXhpc3RpbmdEYXRhIiwibmV3RGF0YSIsIiRuZXdPcHRpb24iLCJyZXBsYWNlV2l0aCIsIkFqYXhBZGFwdGVyIiwiYWpheE9wdGlvbnMiLCJfYXBwbHlEZWZhdWx0cyIsInByb2Nlc3NSZXN1bHRzIiwicSIsInRyYW5zcG9ydCIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwiJHJlcXVlc3QiLCJhamF4IiwidGhlbiIsImZhaWwiLCJfcmVxdWVzdCIsImlzRnVuY3Rpb24iLCJhYm9ydCIsInVybCIsInJlcXVlc3QiLCJpc0FycmF5Iiwic3RhdHVzIiwiZGVsYXkiLCJfcXVlcnlUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiVGFncyIsInRhZ3MiLCJjcmVhdGVUYWciLCJpbnNlcnRUYWciLCJ0IiwidGFnIiwiX3JlbW92ZU9sZFRhZ3MiLCJwYWdlIiwid3JhcHBlciIsImNoZWNrQ2hpbGRyZW4iLCJvcHRpb25UZXh0IiwidG9VcHBlckNhc2UiLCJwYXJhbXNUZXJtIiwiY2hlY2tUZXh0IiwidHJpbSIsIlRva2VuaXplciIsInRva2VuaXplciIsImRyb3Bkb3duIiwiY3JlYXRlQW5kU2VsZWN0IiwiJGV4aXN0aW5nT3B0aW9ucyIsInRva2VuRGF0YSIsInNlcGFyYXRvcnMiLCJ0ZXJtQ2hhciIsInBhcnRQYXJhbXMiLCJNaW5pbXVtSW5wdXRMZW5ndGgiLCIkZSIsIm1pbmltdW1JbnB1dExlbmd0aCIsIm1pbmltdW0iLCJNYXhpbXVtSW5wdXRMZW5ndGgiLCJtYXhpbXVtSW5wdXRMZW5ndGgiLCJtYXhpbXVtIiwiTWF4aW11bVNlbGVjdGlvbkxlbmd0aCIsIm1heGltdW1TZWxlY3Rpb25MZW5ndGgiLCJfY2hlY2tJZk1heGltdW1TZWxlY3RlZCIsInN1Y2Nlc3NDYWxsYmFjayIsImNvdW50IiwiRHJvcGRvd24iLCJzaG93U2VhcmNoIiwiSGlkZVBsYWNlaG9sZGVyIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJtb2RpZmllZERhdGEiLCJJbmZpbml0ZVNjcm9sbCIsImxhc3RQYXJhbXMiLCIkbG9hZGluZ01vcmUiLCJjcmVhdGVMb2FkaW5nTW9yZSIsInNob3dMb2FkaW5nTW9yZSIsImxvYWRNb3JlSWZOZWVkZWQiLCJpc0xvYWRNb3JlVmlzaWJsZSIsImRvY3VtZW50RWxlbWVudCIsImxvYWRpbmdNb3JlT2Zmc2V0IiwibG9hZE1vcmUiLCJwYWdpbmF0aW9uIiwibW9yZSIsIkF0dGFjaEJvZHkiLCIkZHJvcGRvd25QYXJlbnQiLCJfc2hvd0Ryb3Bkb3duIiwiX2F0dGFjaFBvc2l0aW9uaW5nSGFuZGxlciIsIl9iaW5kQ29udGFpbmVyUmVzdWx0SGFuZGxlcnMiLCJfaGlkZURyb3Bkb3duIiwiX2RldGFjaFBvc2l0aW9uaW5nSGFuZGxlciIsIiRkcm9wZG93bkNvbnRhaW5lciIsImRldGFjaCIsIl9jb250YWluZXJSZXN1bHRzSGFuZGxlcnNCb3VuZCIsIl9wb3NpdGlvbkRyb3Bkb3duIiwiX3Jlc2l6ZURyb3Bkb3duIiwic2Nyb2xsRXZlbnQiLCJyZXNpemVFdmVudCIsIm9yaWVudGF0aW9uRXZlbnQiLCIkd2F0Y2hlcnMiLCJwYXJlbnRzIiwieCIsInNjcm9sbExlZnQiLCJ5IiwiZXYiLCIkd2luZG93IiwiaXNDdXJyZW50bHlBYm92ZSIsImhhc0NsYXNzIiwiaXNDdXJyZW50bHlCZWxvdyIsIm5ld0RpcmVjdGlvbiIsInZpZXdwb3J0IiwiZW5vdWdoUm9vbUFib3ZlIiwiZW5vdWdoUm9vbUJlbG93IiwibGVmdCIsIiRvZmZzZXRQYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJwYXJlbnRPZmZzZXQiLCJpc0Nvbm5lY3RlZCIsIm91dGVyV2lkdGgiLCJtaW5XaWR0aCIsImFwcGVuZFRvIiwiY291bnRSZXN1bHRzIiwiTWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsIkluZmluaXR5IiwiU2VsZWN0T25DbG9zZSIsIl9oYW5kbGVTZWxlY3RPbkNsb3NlIiwib3JpZ2luYWxTZWxlY3QyRXZlbnQiLCIkaGlnaGxpZ2h0ZWRSZXN1bHRzIiwiQ2xvc2VPblNlbGVjdCIsIl9zZWxlY3RUcmlnZ2VyZWQiLCJjdHJsS2V5IiwibWV0YUtleSIsImVycm9yTG9hZGluZyIsImlucHV0VG9vTG9uZyIsIm92ZXJDaGFycyIsImlucHV0VG9vU2hvcnQiLCJyZW1haW5pbmdDaGFycyIsIm1heGltdW1TZWxlY3RlZCIsIm5vUmVzdWx0cyIsInNlYXJjaGluZyIsInJlbW92ZUFsbEl0ZW1zIiwiUmVzdWx0c0xpc3QiLCJTZWxlY3Rpb25TZWFyY2giLCJESUFDUklUSUNTIiwiU2VsZWN0RGF0YSIsIkFycmF5RGF0YSIsIkFqYXhEYXRhIiwiRHJvcGRvd25TZWFyY2giLCJFbmdsaXNoVHJhbnNsYXRpb24iLCJEZWZhdWx0cyIsInJlc2V0IiwidG9rZW5TZXBhcmF0b3JzIiwiUXVlcnkiLCJhbWRCYXNlIiwiaW5pdFNlbGVjdGlvbiIsIkluaXRTZWxlY3Rpb24iLCJyZXN1bHRzQWRhcHRlciIsInNlbGVjdE9uQ2xvc2UiLCJkcm9wZG93bkFkYXB0ZXIiLCJtdWx0aXBsZSIsIlNlYXJjaGFibGVEcm9wZG93biIsImNsb3NlT25TZWxlY3QiLCJkcm9wZG93bkNzc0NsYXNzIiwiZHJvcGRvd25Dc3MiLCJhZGFwdERyb3Bkb3duQ3NzQ2xhc3MiLCJEcm9wZG93bkNTUyIsInNlbGVjdGlvbkFkYXB0ZXIiLCJhbGxvd0NsZWFyIiwiY29udGFpbmVyQ3NzQ2xhc3MiLCJjb250YWluZXJDc3MiLCJhZGFwdENvbnRhaW5lckNzc0NsYXNzIiwiQ29udGFpbmVyQ1NTIiwibGFuZ3VhZ2UiLCJfcmVzb2x2ZUxhbmd1YWdlIiwidW5pcXVlTGFuZ3VhZ2VzIiwibCIsIl9wcm9jZXNzVHJhbnNsYXRpb25zIiwiZGVidWciLCJzdHJpcERpYWNyaXRpY3MiLCJhIiwib3JpZ2luYWwiLCJhbWRMYW5ndWFnZUJhc2UiLCJkcm9wZG93bkF1dG9XaWR0aCIsInNjcm9sbEFmdGVyU2VsZWN0IiwidGVtcGxhdGVSZXN1bHQiLCJ0ZW1wbGF0ZVNlbGVjdGlvbiIsInRoZW1lIiwiYXBwbHlGcm9tRWxlbWVudCIsIm9wdGlvbkxhbmd1YWdlIiwiZGVmYXVsdExhbmd1YWdlIiwiZWxlbWVudExhbmd1YWdlIiwicGFyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJpc0VtcHR5T2JqZWN0IiwiaXNQbGFpbk9iamVjdCIsInJlc29sdmVkTGFuZ3VhZ2VzIiwibGFuZ3VhZ2VQYXJ0cyIsImJhc2VMYW5ndWFnZSIsImxhbmd1YWdlRGF0YSIsImV4Iiwid2FybiIsInNldCIsImNhbWVsS2V5IiwiY2FtZWxDYXNlIiwiY29udmVydGVkRGF0YSIsIk9wdGlvbnMiLCJmcm9tRWxlbWVudCIsIklucHV0Q29tcGF0IiwiZXhjbHVkZWREYXRhIiwiZGlyIiwiZGF0YXNldCIsInVwcGVyQ2FzZUxldHRlciIsImxldHRlciIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVOYW1lIiwiZGF0YU5hbWUiLCJkYXRhVmFsdWUiLCJjYW1lbERhdGFOYW1lIiwiU2VsZWN0MiIsIl9nZW5lcmF0ZUlkIiwidGFiaW5kZXgiLCJEYXRhQWRhcHRlciIsIl9wbGFjZUNvbnRhaW5lciIsIlNlbGVjdGlvbkFkYXB0ZXIiLCJEcm9wZG93bkFkYXB0ZXIiLCJSZXN1bHRzQWRhcHRlciIsIl9iaW5kQWRhcHRlcnMiLCJfcmVnaXN0ZXJEb21FdmVudHMiLCJfcmVnaXN0ZXJEYXRhRXZlbnRzIiwiX3JlZ2lzdGVyU2VsZWN0aW9uRXZlbnRzIiwiX3JlZ2lzdGVyRHJvcGRvd25FdmVudHMiLCJfcmVnaXN0ZXJSZXN1bHRzRXZlbnRzIiwiX3JlZ2lzdGVyRXZlbnRzIiwiaW5pdGlhbERhdGEiLCJfc3luY0F0dHJpYnV0ZXMiLCJpbnNlcnRBZnRlciIsIl9yZXNvbHZlV2lkdGgiLCJtZXRob2QiLCJXSURUSCIsInN0eWxlV2lkdGgiLCJlbGVtZW50V2lkdGgiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIl9zeW5jQSIsIl9zeW5jUyIsIl9zeW5jU3VidHJlZSIsImF0dGFjaEV2ZW50Iiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsIk1vek11dGF0aW9uT2JzZXJ2ZXIiLCJfb2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJub25SZWxheUV2ZW50cyIsInRvZ2dsZURyb3Bkb3duIiwiZm9jdXMiLCJhbHRLZXkiLCJjbG9zZSIsIm9wZW4iLCJfaXNDaGFuZ2VNdXRhdGlvbiIsImNoYW5nZWQiLCJub2RlTmFtZSIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJtdXRhdGlvbiIsImFjdHVhbFRyaWdnZXIiLCJwcmVUcmlnZ2VyTWFwIiwicHJlVHJpZ2dlck5hbWUiLCJwcmVUcmlnZ2VyQXJncyIsImhhc0ZvY3VzIiwiZW5hYmxlIiwibmV3VmFsIiwiZGV0YWNoRXZlbnQiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZURhdGEiLCJ0aGlzTWV0aG9kcyIsImluc3RhbmNlT3B0aW9ucyIsImluc3RhbmNlIiwicmVhZHkiLCJjaXR5X3RleHQiLCJzZG9uZ2tpcl9sY3oiLCJjaXR5X3NlbGVjdCIsInBsZWFzZV9zZWxlY3RfdGV4dCIsInN0YXRlIiwicHJvdmluY2VfaWQiLCJzZG9rcl9nZXRfY2l0eV9vcHRpb25zIiwic2Rva3JfZ2V0X3N1YmRpc3RyaWN0X29wdGlvbnMiLCJzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWpheHVybCIsImFjdGlvbiIsIm5vbmNlX2FqYXgiLCJub25jZSIsInJlcyIsImNpdGllcyIsImZvckVhY2giLCJjaXR5IiwiY2l0eV9pZCIsImVyciIsInN1YmRpc3RyaWN0cyIsInN1YmRpc3RyaWN0Iiwic3ViZGlzdHJpY3RfaWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUUsV0FBVUEsT0FBVixFQUFtQjtBQUNuQixNQUFJLElBQUosRUFB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QXdEZixrQkFBVSxHQXhESztBQXlEZixnQkFBVSxHQXpESztBQTBEZixrQkFBVSxHQTFESztBQTJEZixrQkFBVSxHQTNESztBQTREZixrQkFBVSxHQTVESztBQTZEZixrQkFBVSxHQTdESztBQThEZixrQkFBVSxHQTlESztBQStEZixrQkFBVSxHQS9ESztBQWdFZixrQkFBVSxHQWhFSztBQWlFZixrQkFBVSxHQWpFSztBQWtFZixrQkFBVSxHQWxFSztBQW1FZixrQkFBVSxHQW5FSztBQW9FZixrQkFBVSxHQXBFSztBQXFFZixrQkFBVSxHQXJFSztBQXNFZixrQkFBVSxHQXRFSztBQXVFZixrQkFBVSxHQXZFSztBQXdFZixrQkFBVSxHQXhFSztBQXlFZixrQkFBVSxHQXpFSztBQTBFZixrQkFBVSxHQTFFSztBQTJFZixrQkFBVSxJQTNFSztBQTRFZixrQkFBVSxJQTVFSztBQTZFZixrQkFBVSxJQTdFSztBQThFZixrQkFBVSxJQTlFSztBQStFZixrQkFBVSxHQS9FSztBQWdGZixrQkFBVSxHQWhGSztBQWlGZixnQkFBVSxHQWpGSztBQWtGZixnQkFBVSxHQWxGSztBQW1GZixnQkFBVSxHQW5GSztBQW9GZixrQkFBVSxHQXBGSztBQXFGZixrQkFBVSxHQXJGSztBQXNGZixrQkFBVSxHQXRGSztBQXVGZixrQkFBVSxHQXZGSztBQXdGZixrQkFBVSxHQXhGSztBQXlGZixrQkFBVSxHQXpGSztBQTBGZixrQkFBVSxHQTFGSztBQTJGZixrQkFBVSxHQTNGSztBQTRGZixrQkFBVSxHQTVGSztBQTZGZixrQkFBVSxHQTdGSztBQThGZixnQkFBVSxHQTlGSztBQStGZixrQkFBVSxHQS9GSztBQWdHZixrQkFBVSxHQWhHSztBQWlHZixrQkFBVSxHQWpHSztBQWtHZixrQkFBVSxHQWxHSztBQW1HZixrQkFBVSxHQW5HSztBQW9HZixrQkFBVSxHQXBHSztBQXFHZixrQkFBVSxHQXJHSztBQXNHZixrQkFBVSxHQXRHSztBQXVHZixrQkFBVSxHQXZHSztBQXdHZixrQkFBVSxHQXhHSztBQXlHZixrQkFBVSxHQXpHSztBQTBHZixrQkFBVSxHQTFHSztBQTJHZixrQkFBVSxHQTNHSztBQTRHZixrQkFBVSxHQTVHSztBQTZHZixrQkFBVSxHQTdHSztBQThHZixrQkFBVSxHQTlHSztBQStHZixrQkFBVSxHQS9HSztBQWdIZixrQkFBVSxHQWhISztBQWlIZixrQkFBVSxHQWpISztBQWtIZixrQkFBVSxHQWxISztBQW1IZixrQkFBVSxHQW5ISztBQW9IZixrQkFBVSxHQXBISztBQXFIZixrQkFBVSxHQXJISztBQXNIZixrQkFBVSxHQXRISztBQXVIZixrQkFBVSxHQXZISztBQXdIZixrQkFBVSxHQXhISztBQXlIZixrQkFBVSxHQXpISztBQTBIZixrQkFBVSxHQTFISztBQTJIZixrQkFBVSxHQTNISztBQTRIZixrQkFBVSxHQTVISztBQTZIZixrQkFBVSxHQTdISztBQThIZixrQkFBVSxHQTlISztBQStIZixrQkFBVSxHQS9ISztBQWdJZixrQkFBVSxHQWhJSztBQWlJZixrQkFBVSxHQWpJSztBQWtJZixrQkFBVSxHQWxJSztBQW1JZixrQkFBVSxHQW5JSztBQW9JZixrQkFBVSxHQXBJSztBQXFJZixrQkFBVSxHQXJJSztBQXNJZixrQkFBVSxHQXRJSztBQXVJZixrQkFBVSxHQXZJSztBQXdJZixrQkFBVSxHQXhJSztBQXlJZixrQkFBVSxHQXpJSztBQTBJZixrQkFBVSxHQTFJSztBQTJJZixrQkFBVSxHQTNJSztBQTRJZixrQkFBVSxHQTVJSztBQTZJZixrQkFBVSxHQTdJSztBQThJZixnQkFBVSxHQTlJSztBQStJZixnQkFBVSxHQS9JSztBQWdKZixnQkFBVSxHQWhKSztBQWlKZixrQkFBVSxHQWpKSztBQWtKZixrQkFBVSxHQWxKSztBQW1KZixrQkFBVSxHQW5KSztBQW9KZixrQkFBVSxHQXBKSztBQXFKZixnQkFBVSxHQXJKSztBQXNKZixrQkFBVSxHQXRKSztBQXVKZixrQkFBVSxHQXZKSztBQXdKZixrQkFBVSxHQXhKSztBQXlKZixrQkFBVSxHQXpKSztBQTBKZixrQkFBVSxHQTFKSztBQTJKZixrQkFBVSxHQTNKSztBQTRKZixrQkFBVSxHQTVKSztBQTZKZixrQkFBVSxHQTdKSztBQThKZixrQkFBVSxHQTlKSztBQStKZixrQkFBVSxHQS9KSztBQWdLZixrQkFBVSxHQWhLSztBQWlLZixrQkFBVSxHQWpLSztBQWtLZixrQkFBVSxHQWxLSztBQW1LZixrQkFBVSxHQW5LSztBQW9LZixrQkFBVSxHQXBLSztBQXFLZixrQkFBVSxHQXJLSztBQXNLZixrQkFBVSxHQXRLSztBQXVLZixrQkFBVSxHQXZLSztBQXdLZixrQkFBVSxHQXhLSztBQXlLZixrQkFBVSxHQXpLSztBQTBLZixrQkFBVSxHQTFLSztBQTJLZixrQkFBVSxHQTNLSztBQTRLZixrQkFBVSxHQTVLSztBQTZLZixrQkFBVSxHQTdLSztBQThLZixrQkFBVSxHQTlLSztBQStLZixrQkFBVSxHQS9LSztBQWdMZixrQkFBVSxHQWhMSztBQWlMZixrQkFBVSxHQWpMSztBQWtMZixrQkFBVSxHQWxMSztBQW1MZixrQkFBVSxHQW5MSztBQW9MZixrQkFBVSxHQXBMSztBQXFMZixrQkFBVSxHQXJMSztBQXNMZixrQkFBVSxHQXRMSztBQXVMZixrQkFBVSxHQXZMSztBQXdMZixrQkFBVSxHQXhMSztBQXlMZixrQkFBVSxHQXpMSztBQTBMZixrQkFBVSxHQTFMSztBQTJMZixrQkFBVSxHQTNMSztBQTRMZixrQkFBVSxHQTVMSztBQTZMZixrQkFBVSxHQTdMSztBQThMZixrQkFBVSxHQTlMSztBQStMZixrQkFBVSxHQS9MSztBQWdNZixrQkFBVSxHQWhNSztBQWlNZixrQkFBVSxJQWpNSztBQWtNZixrQkFBVSxJQWxNSztBQW1NZixrQkFBVSxHQW5NSztBQW9NZixrQkFBVSxHQXBNSztBQXFNZixrQkFBVSxHQXJNSztBQXNNZixrQkFBVSxHQXRNSztBQXVNZixrQkFBVSxHQXZNSztBQXdNZixrQkFBVSxHQXhNSztBQXlNZixrQkFBVSxHQXpNSztBQTBNZixrQkFBVSxHQTFNSztBQTJNZixrQkFBVSxHQTNNSztBQTRNZixrQkFBVSxHQTVNSztBQTZNZixrQkFBVSxHQTdNSztBQThNZixnQkFBVSxHQTlNSztBQStNZixrQkFBVSxHQS9NSztBQWdOZixrQkFBVSxHQWhOSztBQWlOZixrQkFBVSxHQWpOSztBQWtOZixrQkFBVSxHQWxOSztBQW1OZixrQkFBVSxHQW5OSztBQW9OZixrQkFBVSxHQXBOSztBQXFOZixrQkFBVSxHQXJOSztBQXNOZixrQkFBVSxHQXROSztBQXVOZixrQkFBVSxHQXZOSztBQXdOZixrQkFBVSxHQXhOSztBQXlOZixrQkFBVSxJQXpOSztBQTBOZixrQkFBVSxJQTFOSztBQTJOZixrQkFBVSxHQTNOSztBQTROZixrQkFBVSxHQTVOSztBQTZOZixnQkFBVSxHQTdOSztBQThOZixnQkFBVSxHQTlOSztBQStOZixnQkFBVSxHQS9OSztBQWdPZixrQkFBVSxHQWhPSztBQWlPZixrQkFBVSxHQWpPSztBQWtPZixrQkFBVSxHQWxPSztBQW1PZixrQkFBVSxHQW5PSztBQW9PZixnQkFBVSxHQXBPSztBQXFPZixrQkFBVSxHQXJPSztBQXNPZixrQkFBVSxHQXRPSztBQXVPZixrQkFBVSxHQXZPSztBQXdPZixrQkFBVSxHQXhPSztBQXlPZixrQkFBVSxHQXpPSztBQTBPZixrQkFBVSxHQTFPSztBQTJPZixrQkFBVSxHQTNPSztBQTRPZixrQkFBVSxHQTVPSztBQTZPZixrQkFBVSxHQTdPSztBQThPZixnQkFBVSxHQTlPSztBQStPZixrQkFBVSxHQS9PSztBQWdQZixrQkFBVSxHQWhQSztBQWlQZixrQkFBVSxHQWpQSztBQWtQZixrQkFBVSxHQWxQSztBQW1QZixrQkFBVSxHQW5QSztBQW9QZixrQkFBVSxHQXBQSztBQXFQZixrQkFBVSxHQXJQSztBQXNQZixrQkFBVSxHQXRQSztBQXVQZixrQkFBVSxHQXZQSztBQXdQZixrQkFBVSxHQXhQSztBQXlQZixrQkFBVSxHQXpQSztBQTBQZixrQkFBVSxHQTFQSztBQTJQZixrQkFBVSxHQTNQSztBQTRQZixrQkFBVSxHQTVQSztBQTZQZixrQkFBVSxHQTdQSztBQThQZixrQkFBVSxHQTlQSztBQStQZixnQkFBVSxHQS9QSztBQWdRZixrQkFBVSxHQWhRSztBQWlRZixrQkFBVSxHQWpRSztBQWtRZixrQkFBVSxHQWxRSztBQW1RZixrQkFBVSxHQW5RSztBQW9RZixrQkFBVSxHQXBRSztBQXFRZixrQkFBVSxJQXJRSztBQXNRZixrQkFBVSxJQXRRSztBQXVRZixrQkFBVSxJQXZRSztBQXdRZixrQkFBVSxJQXhRSztBQXlRZixrQkFBVSxHQXpRSztBQTBRZixrQkFBVSxHQTFRSztBQTJRZixrQkFBVSxHQTNRSztBQTRRZixrQkFBVSxHQTVRSztBQTZRZixrQkFBVSxHQTdRSztBQThRZixrQkFBVSxHQTlRSztBQStRZixrQkFBVSxHQS9RSztBQWdSZixrQkFBVSxHQWhSSztBQWlSZixrQkFBVSxHQWpSSztBQWtSZixrQkFBVSxHQWxSSztBQW1SZixrQkFBVSxHQW5SSztBQW9SZixrQkFBVSxHQXBSSztBQXFSZixrQkFBVSxHQXJSSztBQXNSZixrQkFBVSxHQXRSSztBQXVSZixrQkFBVSxHQXZSSztBQXdSZixrQkFBVSxHQXhSSztBQXlSZixrQkFBVSxHQXpSSztBQTBSZixrQkFBVSxHQTFSSztBQTJSZixrQkFBVSxHQTNSSztBQTRSZixrQkFBVSxHQTVSSztBQTZSZixrQkFBVSxHQTdSSztBQThSZixrQkFBVSxHQTlSSztBQStSZixrQkFBVSxHQS9SSztBQWdTZixrQkFBVSxHQWhTSztBQWlTZixrQkFBVSxHQWpTSztBQWtTZixrQkFBVSxHQWxTSztBQW1TZixrQkFBVSxHQW5TSztBQW9TZixrQkFBVSxHQXBTSztBQXFTZixrQkFBVSxHQXJTSztBQXNTZixrQkFBVSxHQXRTSztBQXVTZixrQkFBVSxHQXZTSztBQXdTZixrQkFBVSxHQXhTSztBQXlTZixrQkFBVSxHQXpTSztBQTBTZixrQkFBVSxHQTFTSztBQTJTZixrQkFBVSxHQTNTSztBQTRTZixrQkFBVSxHQTVTSztBQTZTZixrQkFBVSxHQTdTSztBQThTZixrQkFBVSxHQTlTSztBQStTZixrQkFBVSxHQS9TSztBQWdUZixrQkFBVSxHQWhUSztBQWlUZixrQkFBVSxHQWpUSztBQWtUZixrQkFBVSxHQWxUSztBQW1UZixrQkFBVSxHQW5USztBQW9UZixrQkFBVSxHQXBUSztBQXFUZixrQkFBVSxHQXJUSztBQXNUZixrQkFBVSxHQXRUSztBQXVUZixrQkFBVSxHQXZUSztBQXdUZixrQkFBVSxHQXhUSztBQXlUZixrQkFBVSxHQXpUSztBQTBUZixrQkFBVSxHQTFUSztBQTJUZixrQkFBVSxHQTNUSztBQTRUZixrQkFBVSxHQTVUSztBQTZUZixrQkFBVSxHQTdUSztBQThUZixrQkFBVSxHQTlUSztBQStUZixrQkFBVSxHQS9USztBQWdVZixrQkFBVSxHQWhVSztBQWlVZixrQkFBVSxHQWpVSztBQWtVZixrQkFBVSxHQWxVSztBQW1VZixrQkFBVSxHQW5VSztBQW9VZixrQkFBVSxHQXBVSztBQXFVZixrQkFBVSxJQXJVSztBQXNVZixrQkFBVSxHQXRVSztBQXVVZixrQkFBVSxHQXZVSztBQXdVZixnQkFBVSxHQXhVSztBQXlVZixnQkFBVSxHQXpVSztBQTBVZixnQkFBVSxHQTFVSztBQTJVZixrQkFBVSxHQTNVSztBQTRVZixrQkFBVSxHQTVVSztBQTZVZixrQkFBVSxHQTdVSztBQThVZixrQkFBVSxHQTlVSztBQStVZixrQkFBVSxHQS9VSztBQWdWZixnQkFBVSxHQWhWSztBQWlWZixrQkFBVSxHQWpWSztBQWtWZixrQkFBVSxHQWxWSztBQW1WZixrQkFBVSxHQW5WSztBQW9WZixrQkFBVSxHQXBWSztBQXFWZixrQkFBVSxHQXJWSztBQXNWZixrQkFBVSxHQXRWSztBQXVWZixrQkFBVSxHQXZWSztBQXdWZixrQkFBVSxHQXhWSztBQXlWZixrQkFBVSxHQXpWSztBQTBWZixrQkFBVSxHQTFWSztBQTJWZixrQkFBVSxHQTNWSztBQTRWZixrQkFBVSxHQTVWSztBQTZWZixrQkFBVSxHQTdWSztBQThWZixrQkFBVSxHQTlWSztBQStWZixrQkFBVSxHQS9WSztBQWdXZixrQkFBVSxHQWhXSztBQWlXZixrQkFBVSxHQWpXSztBQWtXZixrQkFBVSxHQWxXSztBQW1XZixrQkFBVSxHQW5XSztBQW9XZixrQkFBVSxHQXBXSztBQXFXZixrQkFBVSxHQXJXSztBQXNXZixrQkFBVSxHQXRXSztBQXVXZixrQkFBVSxHQXZXSztBQXdXZixrQkFBVSxHQXhXSztBQXlXZixrQkFBVSxHQXpXSztBQTBXZixrQkFBVSxHQTFXSztBQTJXZixrQkFBVSxHQTNXSztBQTRXZixrQkFBVSxHQTVXSztBQTZXZixrQkFBVSxHQTdXSztBQThXZixrQkFBVSxJQTlXSztBQStXZixrQkFBVSxHQS9XSztBQWdYZixrQkFBVSxHQWhYSztBQWlYZixrQkFBVSxHQWpYSztBQWtYZixrQkFBVSxHQWxYSztBQW1YZixrQkFBVSxHQW5YSztBQW9YZixrQkFBVSxHQXBYSztBQXFYZixrQkFBVSxHQXJYSztBQXNYZixrQkFBVSxHQXRYSztBQXVYZixrQkFBVSxHQXZYSztBQXdYZixrQkFBVSxHQXhYSztBQXlYZixrQkFBVSxHQXpYSztBQTBYZixrQkFBVSxHQTFYSztBQTJYZixrQkFBVSxHQTNYSztBQTRYZixrQkFBVSxHQTVYSztBQTZYZixrQkFBVSxHQTdYSztBQThYZixrQkFBVSxHQTlYSztBQStYZixnQkFBVSxHQS9YSztBQWdZZixrQkFBVSxHQWhZSztBQWlZZixrQkFBVSxHQWpZSztBQWtZZixrQkFBVSxHQWxZSztBQW1ZZixrQkFBVSxHQW5ZSztBQW9ZZixrQkFBVSxHQXBZSztBQXFZZixrQkFBVSxHQXJZSztBQXNZZixrQkFBVSxHQXRZSztBQXVZZixrQkFBVSxHQXZZSztBQXdZZixrQkFBVSxHQXhZSztBQXlZZixrQkFBVSxHQXpZSztBQTBZZixrQkFBVSxHQTFZSztBQTJZZixrQkFBVSxHQTNZSztBQTRZZixrQkFBVSxHQTVZSztBQTZZZixrQkFBVSxHQTdZSztBQThZZixrQkFBVSxHQTlZSztBQStZZixrQkFBVSxHQS9ZSztBQWdaZixrQkFBVSxHQWhaSztBQWlaZixrQkFBVSxHQWpaSztBQWtaZixrQkFBVSxHQWxaSztBQW1aZixrQkFBVSxHQW5aSztBQW9aZixrQkFBVSxHQXBaSztBQXFaZixrQkFBVSxHQXJaSztBQXNaZixrQkFBVSxHQXRaSztBQXVaZixrQkFBVSxHQXZaSztBQXdaZixrQkFBVSxHQXhaSztBQXlaZixrQkFBVSxHQXpaSztBQTBaZixnQkFBVSxHQTFaSztBQTJaZixnQkFBVSxHQTNaSztBQTRaZixnQkFBVSxHQTVaSztBQTZaZixrQkFBVSxHQTdaSztBQThaZixrQkFBVSxHQTlaSztBQStaZixrQkFBVSxHQS9aSztBQWdhZixrQkFBVSxHQWhhSztBQWlhZixnQkFBVSxHQWphSztBQWthZixrQkFBVSxHQWxhSztBQW1hZixrQkFBVSxHQW5hSztBQW9hZixrQkFBVSxHQXBhSztBQXFhZixrQkFBVSxHQXJhSztBQXNhZixrQkFBVSxHQXRhSztBQXVhZixrQkFBVSxHQXZhSztBQXdhZixrQkFBVSxHQXhhSztBQXlhZixrQkFBVSxHQXphSztBQTBhZixnQkFBVSxHQTFhSztBQTJhZixrQkFBVSxHQTNhSztBQTRhZixrQkFBVSxHQTVhSztBQTZhZixnQkFBVSxHQTdhSztBQThhZixrQkFBVSxHQTlhSztBQSthZixrQkFBVSxHQS9hSztBQWdiZixrQkFBVSxHQWhiSztBQWliZixrQkFBVSxHQWpiSztBQWtiZixrQkFBVSxHQWxiSztBQW1iZixrQkFBVSxHQW5iSztBQW9iZixrQkFBVSxHQXBiSztBQXFiZixrQkFBVSxHQXJiSztBQXNiZixrQkFBVSxHQXRiSztBQXViZixrQkFBVSxHQXZiSztBQXdiZixrQkFBVSxHQXhiSztBQXliZixrQkFBVSxJQXpiSztBQTBiZixnQkFBVSxJQTFiSztBQTJiZixrQkFBVSxJQTNiSztBQTRiZixrQkFBVSxJQTViSztBQTZiZixrQkFBVSxJQTdiSztBQThiZixrQkFBVSxJQTliSztBQStiZixrQkFBVSxJQS9iSztBQWdjZixrQkFBVSxJQWhjSztBQWljZixrQkFBVSxJQWpjSztBQWtjZixrQkFBVSxHQWxjSztBQW1jZixrQkFBVSxHQW5jSztBQW9jZixrQkFBVSxHQXBjSztBQXFjZixrQkFBVSxHQXJjSztBQXNjZixrQkFBVSxHQXRjSztBQXVjZixrQkFBVSxHQXZjSztBQXdjZixrQkFBVSxHQXhjSztBQXljZixrQkFBVSxHQXpjSztBQTBjZixrQkFBVSxHQTFjSztBQTJjZixrQkFBVSxHQTNjSztBQTRjZixrQkFBVSxHQTVjSztBQTZjZixrQkFBVSxHQTdjSztBQThjZixrQkFBVSxHQTljSztBQStjZixrQkFBVSxHQS9jSztBQWdkZixnQkFBVSxHQWhkSztBQWlkZixrQkFBVSxHQWpkSztBQWtkZixrQkFBVSxHQWxkSztBQW1kZixrQkFBVSxHQW5kSztBQW9kZixrQkFBVSxHQXBkSztBQXFkZixrQkFBVSxHQXJkSztBQXNkZixrQkFBVSxHQXRkSztBQXVkZixrQkFBVSxHQXZkSztBQXdkZixrQkFBVSxHQXhkSztBQXlkZixrQkFBVSxHQXpkSztBQTBkZixrQkFBVSxHQTFkSztBQTJkZixrQkFBVSxHQTNkSztBQTRkZixrQkFBVSxHQTVkSztBQTZkZixrQkFBVSxHQTdkSztBQThkZixrQkFBVSxHQTlkSztBQStkZixrQkFBVSxHQS9kSztBQWdlZixrQkFBVSxHQWhlSztBQWllZixrQkFBVSxHQWplSztBQWtlZixrQkFBVSxHQWxlSztBQW1lZixrQkFBVSxJQW5lSztBQW9lZixrQkFBVSxJQXBlSztBQXFlZixrQkFBVSxHQXJlSztBQXNlZixrQkFBVSxHQXRlSztBQXVlZixnQkFBVSxHQXZlSztBQXdlZixnQkFBVSxHQXhlSztBQXllZixnQkFBVSxHQXplSztBQTBlZixrQkFBVSxHQTFlSztBQTJlZixrQkFBVSxHQTNlSztBQTRlZixrQkFBVSxHQTVlSztBQTZlZixrQkFBVSxHQTdlSztBQThlZixrQkFBVSxHQTllSztBQStlZixrQkFBVSxHQS9lSztBQWdmZixrQkFBVSxHQWhmSztBQWlmZixrQkFBVSxHQWpmSztBQWtmZixrQkFBVSxHQWxmSztBQW1mZixrQkFBVSxHQW5mSztBQW9mZixnQkFBVSxHQXBmSztBQXFmZixrQkFBVSxHQXJmSztBQXNmZixrQkFBVSxHQXRmSztBQXVmZixrQkFBVSxHQXZmSztBQXdmZixrQkFBVSxHQXhmSztBQXlmZixrQkFBVSxHQXpmSztB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VThSLEdBQVYsRUFBZTtBQUNwQk4saUJBQU8sQ0FBQ00sR0FBRCxDQUFQO0FBQ0g7QUFWRSxPQUFQO0FBWUgsS0FiTSxDQUFQO0FBY0g7QUFDSixDQTdLRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHdCIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCIvKiFcbiAqIFNlbGVjdDIgNC4wLjEzXG4gKiBodHRwczovL3NlbGVjdDIuZ2l0aHViLmlvXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc2VsZWN0Mi9zZWxlY3QyL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIC8vIE5vZGUvQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyb290LCBqUXVlcnkpIHtcbiAgICAgIGlmIChqUXVlcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyByZXF1aXJlKCdqUXVlcnknKSByZXR1cm5zIGEgZmFjdG9yeSB0aGF0IHJlcXVpcmVzIHdpbmRvdyB0b1xuICAgICAgICAvLyBidWlsZCBhIGpRdWVyeSBpbnN0YW5jZSwgd2Ugbm9ybWFsaXplIGhvdyB3ZSB1c2UgbW9kdWxlc1xuICAgICAgICAvLyB0aGF0IHJlcXVpcmUgdGhpcyBwYXR0ZXJuIGJ1dCB0aGUgd2luZG93IHByb3ZpZGVkIGlzIGEgbm9vcFxuICAgICAgICAvLyBpZiBpdCdzIGRlZmluZWQgKGhvdyBqcXVlcnkgd29ya3MpXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpKHJvb3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgICByZXR1cm4galF1ZXJ5O1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZmFjdG9yeShqUXVlcnkpO1xuICB9XG59IChmdW5jdGlvbiAoalF1ZXJ5KSB7XG4gIC8vIFRoaXMgaXMgbmVlZGVkIHNvIHdlIGNhbiBjYXRjaCB0aGUgQU1EIGxvYWRlciBjb25maWd1cmF0aW9uIGFuZCB1c2UgaXRcbiAgLy8gVGhlIGlubmVyIGZpbGUgc2hvdWxkIGJlIHdyYXBwZWQgKGJ5IGBiYW5uZXIuc3RhcnQuanNgKSBpbiBhIGZ1bmN0aW9uIHRoYXRcbiAgLy8gcmV0dXJucyB0aGUgQU1EIGxvYWRlciByZWZlcmVuY2VzLlxuICB2YXIgUzIgPShmdW5jdGlvbiAoKSB7XG4gIC8vIFJlc3RvcmUgdGhlIFNlbGVjdDIgQU1EIGxvYWRlciBzbyBpdCBjYW4gYmUgdXNlZFxuICAvLyBOZWVkZWQgbW9zdGx5IGluIHRoZSBsYW5ndWFnZSBmaWxlcywgd2hlcmUgdGhlIGxvYWRlciBpcyBub3QgaW5zZXJ0ZWRcbiAgaWYgKGpRdWVyeSAmJiBqUXVlcnkuZm4gJiYgalF1ZXJ5LmZuLnNlbGVjdDIgJiYgalF1ZXJ5LmZuLnNlbGVjdDIuYW1kKSB7XG4gICAgdmFyIFMyID0galF1ZXJ5LmZuLnNlbGVjdDIuYW1kO1xuICB9XG52YXIgUzI7KGZ1bmN0aW9uICgpIHsgaWYgKCFTMiB8fCAhUzIucmVxdWlyZWpzKSB7XG5pZiAoIVMyKSB7IFMyID0ge307IH0gZWxzZSB7IHJlcXVpcmUgPSBTMjsgfVxuLyoqXG4gKiBAbGljZW5zZSBhbG1vbmQgMC4zLjMgQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMuXG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSwgaHR0cDovL2dpdGh1Yi5jb20vcmVxdWlyZWpzL2FsbW9uZC9MSUNFTlNFXG4gKi9cbi8vR29pbmcgc2xvcHB5IHRvIGF2b2lkICd1c2Ugc3RyaWN0JyBzdHJpbmcgY29zdCwgYnV0IHN0cmljdCBwcmFjdGljZXMgc2hvdWxkXG4vL2JlIGZvbGxvd2VkLlxuLypnbG9iYWwgc2V0VGltZW91dDogZmFsc2UgKi9cblxudmFyIHJlcXVpcmVqcywgcmVxdWlyZSwgZGVmaW5lO1xuKGZ1bmN0aW9uICh1bmRlZikge1xuICAgIHZhciBtYWluLCByZXEsIG1ha2VNYXAsIGhhbmRsZXJzLFxuICAgICAgICBkZWZpbmVkID0ge30sXG4gICAgICAgIHdhaXRpbmcgPSB7fSxcbiAgICAgICAgY29uZmlnID0ge30sXG4gICAgICAgIGRlZmluaW5nID0ge30sXG4gICAgICAgIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgIGFwcyA9IFtdLnNsaWNlLFxuICAgICAgICBqc1N1ZmZpeFJlZ0V4cCA9IC9cXC5qcyQvO1xuXG4gICAgZnVuY3Rpb24gaGFzUHJvcChvYmosIHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGhhc093bi5jYWxsKG9iaiwgcHJvcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSByZWxhdGl2ZSBtb2R1bGUgbmFtZSwgbGlrZSAuL3NvbWV0aGluZywgbm9ybWFsaXplIGl0IHRvXG4gICAgICogYSByZWFsIG5hbWUgdGhhdCBjYW4gYmUgbWFwcGVkIHRvIGEgcGF0aC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSB0aGUgcmVsYXRpdmUgbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlTmFtZSBhIHJlYWwgbmFtZSB0aGF0IHRoZSBuYW1lIGFyZyBpcyByZWxhdGl2ZVxuICAgICAqIHRvLlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IG5vcm1hbGl6ZWQgbmFtZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShuYW1lLCBiYXNlTmFtZSkge1xuICAgICAgICB2YXIgbmFtZVBhcnRzLCBuYW1lU2VnbWVudCwgbWFwVmFsdWUsIGZvdW5kTWFwLCBsYXN0SW5kZXgsXG4gICAgICAgICAgICBmb3VuZEksIGZvdW5kU3Rhck1hcCwgc3RhckksIGksIGosIHBhcnQsIG5vcm1hbGl6ZWRCYXNlUGFydHMsXG4gICAgICAgICAgICBiYXNlUGFydHMgPSBiYXNlTmFtZSAmJiBiYXNlTmFtZS5zcGxpdChcIi9cIiksXG4gICAgICAgICAgICBtYXAgPSBjb25maWcubWFwLFxuICAgICAgICAgICAgc3Rhck1hcCA9IChtYXAgJiYgbWFwWycqJ10pIHx8IHt9O1xuXG4gICAgICAgIC8vQWRqdXN0IGFueSByZWxhdGl2ZSBwYXRocy5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICBsYXN0SW5kZXggPSBuYW1lLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgIC8vIElmIHdhbnRpbmcgbm9kZSBJRCBjb21wYXRpYmlsaXR5LCBzdHJpcCAuanMgZnJvbSBlbmRcbiAgICAgICAgICAgIC8vIG9mIElEcy4gSGF2ZSB0byBkbyB0aGlzIGhlcmUsIGFuZCBub3QgaW4gbmFtZVRvVXJsXG4gICAgICAgICAgICAvLyBiZWNhdXNlIG5vZGUgYWxsb3dzIGVpdGhlciAuanMgb3Igbm9uIC5qcyB0byBtYXBcbiAgICAgICAgICAgIC8vIHRvIHNhbWUgZmlsZS5cbiAgICAgICAgICAgIGlmIChjb25maWcubm9kZUlkQ29tcGF0ICYmIGpzU3VmZml4UmVnRXhwLnRlc3QobmFtZVtsYXN0SW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIG5hbWVbbGFzdEluZGV4XSA9IG5hbWVbbGFzdEluZGV4XS5yZXBsYWNlKGpzU3VmZml4UmVnRXhwLCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0YXJ0cyB3aXRoIGEgJy4nIHNvIG5lZWQgdGhlIGJhc2VOYW1lXG4gICAgICAgICAgICBpZiAobmFtZVswXS5jaGFyQXQoMCkgPT09ICcuJyAmJiBiYXNlUGFydHMpIHtcbiAgICAgICAgICAgICAgICAvL0NvbnZlcnQgYmFzZU5hbWUgdG8gYXJyYXksIGFuZCBsb3Agb2ZmIHRoZSBsYXN0IHBhcnQsXG4gICAgICAgICAgICAgICAgLy9zbyB0aGF0IC4gbWF0Y2hlcyB0aGF0ICdkaXJlY3RvcnknIGFuZCBub3QgbmFtZSBvZiB0aGUgYmFzZU5hbWUnc1xuICAgICAgICAgICAgICAgIC8vbW9kdWxlLiBGb3IgaW5zdGFuY2UsIGJhc2VOYW1lIG9mICdvbmUvdHdvL3RocmVlJywgbWFwcyB0b1xuICAgICAgICAgICAgICAgIC8vJ29uZS90d28vdGhyZWUuanMnLCBidXQgd2Ugd2FudCB0aGUgZGlyZWN0b3J5LCAnb25lL3R3bycgZm9yXG4gICAgICAgICAgICAgICAgLy90aGlzIG5vcm1hbGl6YXRpb24uXG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZEJhc2VQYXJ0cyA9IGJhc2VQYXJ0cy5zbGljZSgwLCBiYXNlUGFydHMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5vcm1hbGl6ZWRCYXNlUGFydHMuY29uY2F0KG5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N0YXJ0IHRyaW1Eb3RzXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcnQgPSBuYW1lW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGkgLT0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYXQgdGhlIHN0YXJ0LCBvciBwcmV2aW91cyB2YWx1ZSBpcyBzdGlsbCAuLixcbiAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCB0aGVtIHNvIHRoYXQgd2hlbiBjb252ZXJ0ZWQgdG8gYSBwYXRoIGl0IG1heVxuICAgICAgICAgICAgICAgICAgICAvLyBzdGlsbCB3b3JrIHdoZW4gY29udmVydGVkIHRvIGEgcGF0aCwgZXZlbiB0aG91Z2hcbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgYW4gSUQgaXQgaXMgbGVzcyB0aGFuIGlkZWFsLiBJbiBsYXJnZXIgcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVsZWFzZXMsIG1heSBiZSBiZXR0ZXIgdG8ganVzdCBraWNrIG91dCBhbiBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDAgfHwgKGkgPT09IDEgJiYgbmFtZVsyXSA9PT0gJy4uJykgfHwgbmFtZVtpIC0gMV0gPT09ICcuLicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnNwbGljZShpIC0gMSwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpIC09IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2VuZCB0cmltRG90c1xuXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5qb2luKCcvJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0FwcGx5IG1hcCBjb25maWcgaWYgYXZhaWxhYmxlLlxuICAgICAgICBpZiAoKGJhc2VQYXJ0cyB8fCBzdGFyTWFwKSAmJiBtYXApIHtcbiAgICAgICAgICAgIG5hbWVQYXJ0cyA9IG5hbWUuc3BsaXQoJy8nKTtcblxuICAgICAgICAgICAgZm9yIChpID0gbmFtZVBhcnRzLmxlbmd0aDsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgIG5hbWVTZWdtZW50ID0gbmFtZVBhcnRzLnNsaWNlKDAsIGkpLmpvaW4oXCIvXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJhc2VQYXJ0cykge1xuICAgICAgICAgICAgICAgICAgICAvL0ZpbmQgdGhlIGxvbmdlc3QgYmFzZU5hbWUgc2VnbWVudCBtYXRjaCBpbiB0aGUgY29uZmlnLlxuICAgICAgICAgICAgICAgICAgICAvL1NvLCBkbyBqb2lucyBvbiB0aGUgYmlnZ2VzdCB0byBzbWFsbGVzdCBsZW5ndGhzIG9mIGJhc2VQYXJ0cy5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gYmFzZVBhcnRzLmxlbmd0aDsgaiA+IDA7IGogLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwVmFsdWUgPSBtYXBbYmFzZVBhcnRzLnNsaWNlKDAsIGopLmpvaW4oJy8nKV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYmFzZU5hbWUgc2VnbWVudCBoYXMgIGNvbmZpZywgZmluZCBpZiBpdCBoYXMgb25lIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBWYWx1ZSA9IG1hcFZhbHVlW25hbWVTZWdtZW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9NYXRjaCwgdXBkYXRlIG5hbWUgdG8gdGhlIG5ldyB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRNYXAgPSBtYXBWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRJID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vQ2hlY2sgZm9yIGEgc3RhciBtYXAgbWF0Y2gsIGJ1dCBqdXN0IGhvbGQgb24gdG8gaXQsXG4gICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNob3J0ZXIgc2VnbWVudCBtYXRjaCBsYXRlciBpbiBhIG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgLy9jb25maWcsIHRoZW4gZmF2b3Igb3ZlciB0aGlzIHN0YXIgbWFwLlxuICAgICAgICAgICAgICAgIGlmICghZm91bmRTdGFyTWFwICYmIHN0YXJNYXAgJiYgc3Rhck1hcFtuYW1lU2VnbWVudF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRTdGFyTWFwID0gc3Rhck1hcFtuYW1lU2VnbWVudF07XG4gICAgICAgICAgICAgICAgICAgIHN0YXJJID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZm91bmRNYXAgJiYgZm91bmRTdGFyTWFwKSB7XG4gICAgICAgICAgICAgICAgZm91bmRNYXAgPSBmb3VuZFN0YXJNYXA7XG4gICAgICAgICAgICAgICAgZm91bmRJID0gc3Rhckk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3VuZE1hcCkge1xuICAgICAgICAgICAgICAgIG5hbWVQYXJ0cy5zcGxpY2UoMCwgZm91bmRJLCBmb3VuZE1hcCk7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWVQYXJ0cy5qb2luKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlUmVxdWlyZShyZWxOYW1lLCBmb3JjZVN5bmMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vQSB2ZXJzaW9uIG9mIGEgcmVxdWlyZSBmdW5jdGlvbiB0aGF0IHBhc3NlcyBhIG1vZHVsZU5hbWVcbiAgICAgICAgICAgIC8vdmFsdWUgZm9yIGl0ZW1zIHRoYXQgbWF5IG5lZWQgdG9cbiAgICAgICAgICAgIC8vbG9vayB1cCBwYXRocyByZWxhdGl2ZSB0byB0aGUgbW9kdWxlTmFtZVxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcHMuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgICAgICAgICAvL0lmIGZpcnN0IGFyZyBpcyBub3QgcmVxdWlyZSgnc3RyaW5nJyksIGFuZCB0aGVyZSBpcyBvbmx5XG4gICAgICAgICAgICAvL29uZSBhcmcsIGl0IGlzIHRoZSBhcnJheSBmb3JtIHdpdGhvdXQgYSBjYWxsYmFjay4gSW5zZXJ0XG4gICAgICAgICAgICAvL2EgbnVsbCBzbyB0aGF0IHRoZSBmb2xsb3dpbmcgY29uY2F0IGlzIGNvcnJlY3QuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnICYmIGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcS5hcHBseSh1bmRlZiwgYXJncy5jb25jYXQoW3JlbE5hbWUsIGZvcmNlU3luY10pKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlTm9ybWFsaXplKHJlbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplKG5hbWUsIHJlbE5hbWUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VMb2FkKGRlcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgZGVmaW5lZFtkZXBOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxEZXAobmFtZSkge1xuICAgICAgICBpZiAoaGFzUHJvcCh3YWl0aW5nLCBuYW1lKSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSB3YWl0aW5nW25hbWVdO1xuICAgICAgICAgICAgZGVsZXRlIHdhaXRpbmdbbmFtZV07XG4gICAgICAgICAgICBkZWZpbmluZ1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICBtYWluLmFwcGx5KHVuZGVmLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzUHJvcChkZWZpbmVkLCBuYW1lKSAmJiAhaGFzUHJvcChkZWZpbmluZywgbmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gJyArIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZpbmVkW25hbWVdO1xuICAgIH1cblxuICAgIC8vVHVybnMgYSBwbHVnaW4hcmVzb3VyY2UgdG8gW3BsdWdpbiwgcmVzb3VyY2VdXG4gICAgLy93aXRoIHRoZSBwbHVnaW4gYmVpbmcgdW5kZWZpbmVkIGlmIHRoZSBuYW1lXG4gICAgLy9kaWQgbm90IGhhdmUgYSBwbHVnaW4gcHJlZml4LlxuICAgIGZ1bmN0aW9uIHNwbGl0UHJlZml4KG5hbWUpIHtcbiAgICAgICAgdmFyIHByZWZpeCxcbiAgICAgICAgICAgIGluZGV4ID0gbmFtZSA/IG5hbWUuaW5kZXhPZignIScpIDogLTE7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBuYW1lLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoaW5kZXggKyAxLCBuYW1lLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtwcmVmaXgsIG5hbWVdO1xuICAgIH1cblxuICAgIC8vQ3JlYXRlcyBhIHBhcnRzIGFycmF5IGZvciBhIHJlbE5hbWUgd2hlcmUgZmlyc3QgcGFydCBpcyBwbHVnaW4gSUQsXG4gICAgLy9zZWNvbmQgcGFydCBpcyByZXNvdXJjZSBJRC4gQXNzdW1lcyByZWxOYW1lIGhhcyBhbHJlYWR5IGJlZW4gbm9ybWFsaXplZC5cbiAgICBmdW5jdGlvbiBtYWtlUmVsUGFydHMocmVsTmFtZSkge1xuICAgICAgICByZXR1cm4gcmVsTmFtZSA/IHNwbGl0UHJlZml4KHJlbE5hbWUpIDogW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgYSBuYW1lIG1hcCwgbm9ybWFsaXppbmcgdGhlIG5hbWUsIGFuZCB1c2luZyBhIHBsdWdpblxuICAgICAqIGZvciBub3JtYWxpemF0aW9uIGlmIG5lY2Vzc2FyeS4gR3JhYnMgYSByZWYgdG8gcGx1Z2luXG4gICAgICogdG9vLCBhcyBhbiBvcHRpbWl6YXRpb24uXG4gICAgICovXG4gICAgbWFrZU1hcCA9IGZ1bmN0aW9uIChuYW1lLCByZWxQYXJ0cykge1xuICAgICAgICB2YXIgcGx1Z2luLFxuICAgICAgICAgICAgcGFydHMgPSBzcGxpdFByZWZpeChuYW1lKSxcbiAgICAgICAgICAgIHByZWZpeCA9IHBhcnRzWzBdLFxuICAgICAgICAgICAgcmVsUmVzb3VyY2VOYW1lID0gcmVsUGFydHNbMV07XG5cbiAgICAgICAgbmFtZSA9IHBhcnRzWzFdO1xuXG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgIHByZWZpeCA9IG5vcm1hbGl6ZShwcmVmaXgsIHJlbFJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICBwbHVnaW4gPSBjYWxsRGVwKHByZWZpeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL05vcm1hbGl6ZSBhY2NvcmRpbmdcbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgaWYgKHBsdWdpbiAmJiBwbHVnaW4ubm9ybWFsaXplKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IHBsdWdpbi5ub3JtYWxpemUobmFtZSwgbWFrZU5vcm1hbGl6ZShyZWxSZXNvdXJjZU5hbWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5vcm1hbGl6ZShuYW1lLCByZWxSZXNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZSA9IG5vcm1hbGl6ZShuYW1lLCByZWxSZXNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgcGFydHMgPSBzcGxpdFByZWZpeChuYW1lKTtcbiAgICAgICAgICAgIHByZWZpeCA9IHBhcnRzWzBdO1xuICAgICAgICAgICAgbmFtZSA9IHBhcnRzWzFdO1xuICAgICAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgICAgIHBsdWdpbiA9IGNhbGxEZXAocHJlZml4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vVXNpbmcgcmlkaWN1bG91cyBwcm9wZXJ0eSBuYW1lcyBmb3Igc3BhY2UgcmVhc29uc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZjogcHJlZml4ID8gcHJlZml4ICsgJyEnICsgbmFtZSA6IG5hbWUsIC8vZnVsbE5hbWVcbiAgICAgICAgICAgIG46IG5hbWUsXG4gICAgICAgICAgICBwcjogcHJlZml4LFxuICAgICAgICAgICAgcDogcGx1Z2luXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG1ha2VDb25maWcobmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChjb25maWcgJiYgY29uZmlnLmNvbmZpZyAmJiBjb25maWcuY29uZmlnW25hbWVdKSB8fCB7fTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBoYW5kbGVycyA9IHtcbiAgICAgICAgcmVxdWlyZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlUmVxdWlyZShuYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXhwb3J0czogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBlID0gZGVmaW5lZFtuYW1lXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChkZWZpbmVkW25hbWVdID0ge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb2R1bGU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBuYW1lLFxuICAgICAgICAgICAgICAgIHVyaTogJycsXG4gICAgICAgICAgICAgICAgZXhwb3J0czogZGVmaW5lZFtuYW1lXSxcbiAgICAgICAgICAgICAgICBjb25maWc6IG1ha2VDb25maWcobmFtZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbWFpbiA9IGZ1bmN0aW9uIChuYW1lLCBkZXBzLCBjYWxsYmFjaywgcmVsTmFtZSkge1xuICAgICAgICB2YXIgY2pzTW9kdWxlLCBkZXBOYW1lLCByZXQsIG1hcCwgaSwgcmVsUGFydHMsXG4gICAgICAgICAgICBhcmdzID0gW10sXG4gICAgICAgICAgICBjYWxsYmFja1R5cGUgPSB0eXBlb2YgY2FsbGJhY2ssXG4gICAgICAgICAgICB1c2luZ0V4cG9ydHM7XG5cbiAgICAgICAgLy9Vc2UgbmFtZSBpZiBubyByZWxOYW1lXG4gICAgICAgIHJlbE5hbWUgPSByZWxOYW1lIHx8IG5hbWU7XG4gICAgICAgIHJlbFBhcnRzID0gbWFrZVJlbFBhcnRzKHJlbE5hbWUpO1xuXG4gICAgICAgIC8vQ2FsbCB0aGUgY2FsbGJhY2sgdG8gZGVmaW5lIHRoZSBtb2R1bGUsIGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgaWYgKGNhbGxiYWNrVHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgY2FsbGJhY2tUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvL1B1bGwgb3V0IHRoZSBkZWZpbmVkIGRlcGVuZGVuY2llcyBhbmQgcGFzcyB0aGUgb3JkZXJlZFxuICAgICAgICAgICAgLy92YWx1ZXMgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgLy9EZWZhdWx0IHRvIFtyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGVdIGlmIG5vIGRlcHNcbiAgICAgICAgICAgIGRlcHMgPSAhZGVwcy5sZW5ndGggJiYgY2FsbGJhY2subGVuZ3RoID8gWydyZXF1aXJlJywgJ2V4cG9ydHMnLCAnbW9kdWxlJ10gOiBkZXBzO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBtYXAgPSBtYWtlTWFwKGRlcHNbaV0sIHJlbFBhcnRzKTtcbiAgICAgICAgICAgICAgICBkZXBOYW1lID0gbWFwLmY7XG5cbiAgICAgICAgICAgICAgICAvL0Zhc3QgcGF0aCBDb21tb25KUyBzdGFuZGFyZCBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAgICAgaWYgKGRlcE5hbWUgPT09IFwicmVxdWlyZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBoYW5kbGVycy5yZXF1aXJlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVwTmFtZSA9PT0gXCJleHBvcnRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9Db21tb25KUyBtb2R1bGUgc3BlYyAxLjFcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGhhbmRsZXJzLmV4cG9ydHMobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHVzaW5nRXhwb3J0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXBOYW1lID09PSBcIm1vZHVsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQ29tbW9uSlMgbW9kdWxlIHNwZWMgMS4xXG4gICAgICAgICAgICAgICAgICAgIGNqc01vZHVsZSA9IGFyZ3NbaV0gPSBoYW5kbGVycy5tb2R1bGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNQcm9wKGRlZmluZWQsIGRlcE5hbWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcm9wKHdhaXRpbmcsIGRlcE5hbWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcm9wKGRlZmluaW5nLCBkZXBOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gY2FsbERlcChkZXBOYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcC5wKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5wLmxvYWQobWFwLm4sIG1ha2VSZXF1aXJlKHJlbE5hbWUsIHRydWUpLCBtYWtlTG9hZChkZXBOYW1lKSwge30pO1xuICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gZGVmaW5lZFtkZXBOYW1lXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICcgbWlzc2luZyAnICsgZGVwTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXQgPSBjYWxsYmFjayA/IGNhbGxiYWNrLmFwcGx5KGRlZmluZWRbbmFtZV0sIGFyZ3MpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgIC8vSWYgc2V0dGluZyBleHBvcnRzIHZpYSBcIm1vZHVsZVwiIGlzIGluIHBsYXksXG4gICAgICAgICAgICAgICAgLy9mYXZvciB0aGF0IG92ZXIgcmV0dXJuIHZhbHVlIGFuZCBleHBvcnRzLiBBZnRlciB0aGF0LFxuICAgICAgICAgICAgICAgIC8vZmF2b3IgYSBub24tdW5kZWZpbmVkIHJldHVybiB2YWx1ZSBvdmVyIGV4cG9ydHMgdXNlLlxuICAgICAgICAgICAgICAgIGlmIChjanNNb2R1bGUgJiYgY2pzTW9kdWxlLmV4cG9ydHMgIT09IHVuZGVmICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjanNNb2R1bGUuZXhwb3J0cyAhPT0gZGVmaW5lZFtuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZpbmVkW25hbWVdID0gY2pzTW9kdWxlLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXQgIT09IHVuZGVmIHx8ICF1c2luZ0V4cG9ydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9Vc2UgdGhlIHJldHVybiB2YWx1ZSBmcm9tIHRoZSBmdW5jdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lZFtuYW1lXSA9IHJldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSkge1xuICAgICAgICAgICAgLy9NYXkganVzdCBiZSBhbiBvYmplY3QgZGVmaW5pdGlvbiBmb3IgdGhlIG1vZHVsZS4gT25seVxuICAgICAgICAgICAgLy93b3JyeSBhYm91dCBkZWZpbmluZyBpZiBoYXZlIGEgbW9kdWxlIG5hbWUuXG4gICAgICAgICAgICBkZWZpbmVkW25hbWVdID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVxdWlyZWpzID0gcmVxdWlyZSA9IHJlcSA9IGZ1bmN0aW9uIChkZXBzLCBjYWxsYmFjaywgcmVsTmFtZSwgZm9yY2VTeW5jLCBhbHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXBzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlcnNbZGVwc10pIHtcbiAgICAgICAgICAgICAgICAvL2NhbGxiYWNrIGluIHRoaXMgY2FzZSBpcyByZWFsbHkgcmVsTmFtZVxuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyc1tkZXBzXShjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0p1c3QgcmV0dXJuIHRoZSBtb2R1bGUgd2FudGVkLiBJbiB0aGlzIHNjZW5hcmlvLCB0aGVcbiAgICAgICAgICAgIC8vZGVwcyBhcmcgaXMgdGhlIG1vZHVsZSBuYW1lLCBhbmQgc2Vjb25kIGFyZyAoaWYgcGFzc2VkKVxuICAgICAgICAgICAgLy9pcyBqdXN0IHRoZSByZWxOYW1lLlxuICAgICAgICAgICAgLy9Ob3JtYWxpemUgbW9kdWxlIG5hbWUsIGlmIGl0IGNvbnRhaW5zIC4gb3IgLi5cbiAgICAgICAgICAgIHJldHVybiBjYWxsRGVwKG1ha2VNYXAoZGVwcywgbWFrZVJlbFBhcnRzKGNhbGxiYWNrKSkuZik7XG4gICAgICAgIH0gZWxzZSBpZiAoIWRlcHMuc3BsaWNlKSB7XG4gICAgICAgICAgICAvL2RlcHMgaXMgYSBjb25maWcgb2JqZWN0LCBub3QgYW4gYXJyYXkuXG4gICAgICAgICAgICBjb25maWcgPSBkZXBzO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5kZXBzKSB7XG4gICAgICAgICAgICAgICAgcmVxKGNvbmZpZy5kZXBzLCBjb25maWcuY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLnNwbGljZSkge1xuICAgICAgICAgICAgICAgIC8vY2FsbGJhY2sgaXMgYW4gYXJyYXksIHdoaWNoIG1lYW5zIGl0IGlzIGEgZGVwZW5kZW5jeSBsaXN0LlxuICAgICAgICAgICAgICAgIC8vQWRqdXN0IGFyZ3MgaWYgdGhlcmUgYXJlIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgICAgIGRlcHMgPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHJlbE5hbWU7XG4gICAgICAgICAgICAgICAgcmVsTmFtZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlcHMgPSB1bmRlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vU3VwcG9ydCByZXF1aXJlKFsnYSddKVxuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICAgIC8vSWYgcmVsTmFtZSBpcyBhIGZ1bmN0aW9uLCBpdCBpcyBhbiBlcnJiYWNrIGhhbmRsZXIsXG4gICAgICAgIC8vc28gcmVtb3ZlIGl0LlxuICAgICAgICBpZiAodHlwZW9mIHJlbE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlbE5hbWUgPSBmb3JjZVN5bmM7XG4gICAgICAgICAgICBmb3JjZVN5bmMgPSBhbHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvL1NpbXVsYXRlIGFzeW5jIGNhbGxiYWNrO1xuICAgICAgICBpZiAoZm9yY2VTeW5jKSB7XG4gICAgICAgICAgICBtYWluKHVuZGVmLCBkZXBzLCBjYWxsYmFjaywgcmVsTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL1VzaW5nIGEgbm9uLXplcm8gdmFsdWUgYmVjYXVzZSBvZiBjb25jZXJuIGZvciB3aGF0IG9sZCBicm93c2Vyc1xuICAgICAgICAgICAgLy9kbywgYW5kIGxhdGVzdCBicm93c2VycyBcInVwZ3JhZGVcIiB0byA0IGlmIGxvd2VyIHZhbHVlIGlzIHVzZWQ6XG4gICAgICAgICAgICAvL2h0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL3RpbWVycy5odG1sI2RvbS13aW5kb3d0aW1lcnMtc2V0dGltZW91dDpcbiAgICAgICAgICAgIC8vSWYgd2FudCBhIHZhbHVlIGltbWVkaWF0ZWx5LCB1c2UgcmVxdWlyZSgnaWQnKSBpbnN0ZWFkIC0tIHNvbWV0aGluZ1xuICAgICAgICAgICAgLy90aGF0IHdvcmtzIGluIGFsbW9uZCBvbiB0aGUgZ2xvYmFsIGxldmVsLCBidXQgbm90IGd1YXJhbnRlZWQgYW5kXG4gICAgICAgICAgICAvL3VubGlrZWx5IHRvIHdvcmsgaW4gb3RoZXIgQU1EIGltcGxlbWVudGF0aW9ucy5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1haW4odW5kZWYsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKTtcbiAgICAgICAgICAgIH0sIDQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSnVzdCBkcm9wcyB0aGUgY29uZmlnIG9uIHRoZSBmbG9vciwgYnV0IHJldHVybnMgcmVxIGluIGNhc2VcbiAgICAgKiB0aGUgY29uZmlnIHJldHVybiB2YWx1ZSBpcyB1c2VkLlxuICAgICAqL1xuICAgIHJlcS5jb25maWcgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgICAgIHJldHVybiByZXEoY2ZnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXhwb3NlIG1vZHVsZSByZWdpc3RyeSBmb3IgZGVidWdnaW5nIGFuZCB0b29saW5nXG4gICAgICovXG4gICAgcmVxdWlyZWpzLl9kZWZpbmVkID0gZGVmaW5lZDtcblxuICAgIGRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBkZXBzLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlZSBhbG1vbmQgUkVBRE1FOiBpbmNvcnJlY3QgbW9kdWxlIGJ1aWxkLCBubyBtb2R1bGUgbmFtZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UaGlzIG1vZHVsZSBtYXkgbm90IGhhdmUgZGVwZW5kZW5jaWVzXG4gICAgICAgIGlmICghZGVwcy5zcGxpY2UpIHtcbiAgICAgICAgICAgIC8vZGVwcyBpcyBub3QgYW4gYXJyYXksIHNvIHByb2JhYmx5IG1lYW5zXG4gICAgICAgICAgICAvL2FuIG9iamVjdCBsaXRlcmFsIG9yIGZhY3RvcnkgZnVuY3Rpb24gZm9yXG4gICAgICAgICAgICAvL3RoZSB2YWx1ZS4gQWRqdXN0IGFyZ3MuXG4gICAgICAgICAgICBjYWxsYmFjayA9IGRlcHM7XG4gICAgICAgICAgICBkZXBzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc1Byb3AoZGVmaW5lZCwgbmFtZSkgJiYgIWhhc1Byb3Aod2FpdGluZywgbmFtZSkpIHtcbiAgICAgICAgICAgIHdhaXRpbmdbbmFtZV0gPSBbbmFtZSwgZGVwcywgY2FsbGJhY2tdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRlZmluZS5hbWQgPSB7XG4gICAgICAgIGpRdWVyeTogdHJ1ZVxuICAgIH07XG59KCkpO1xuXG5TMi5yZXF1aXJlanMgPSByZXF1aXJlanM7UzIucmVxdWlyZSA9IHJlcXVpcmU7UzIuZGVmaW5lID0gZGVmaW5lO1xufVxufSgpKTtcblMyLmRlZmluZShcImFsbW9uZFwiLCBmdW5jdGlvbigpe30pO1xuXG4vKiBnbG9iYWwgalF1ZXJ5OmZhbHNlLCAkOmZhbHNlICovXG5TMi5kZWZpbmUoJ2pxdWVyeScsW10sZnVuY3Rpb24gKCkge1xuICB2YXIgXyQgPSBqUXVlcnkgfHwgJDtcblxuICBpZiAoXyQgPT0gbnVsbCAmJiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgJ1NlbGVjdDI6IEFuIGluc3RhbmNlIG9mIGpRdWVyeSBvciBhIGpRdWVyeS1jb21wYXRpYmxlIGxpYnJhcnkgd2FzIG5vdCAnICtcbiAgICAgICdmb3VuZC4gTWFrZSBzdXJlIHRoYXQgeW91IGFyZSBpbmNsdWRpbmcgalF1ZXJ5IGJlZm9yZSBTZWxlY3QyIG9uIHlvdXIgJyArXG4gICAgICAnd2ViIHBhZ2UuJ1xuICAgICk7XG4gIH1cblxuICByZXR1cm4gXyQ7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3V0aWxzJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICB2YXIgVXRpbHMgPSB7fTtcblxuICBVdGlscy5FeHRlbmQgPSBmdW5jdGlvbiAoQ2hpbGRDbGFzcywgU3VwZXJDbGFzcykge1xuICAgIHZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgIGZ1bmN0aW9uIEJhc2VDb25zdHJ1Y3RvciAoKSB7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yID0gQ2hpbGRDbGFzcztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gU3VwZXJDbGFzcykge1xuICAgICAgaWYgKF9faGFzUHJvcC5jYWxsKFN1cGVyQ2xhc3MsIGtleSkpIHtcbiAgICAgICAgQ2hpbGRDbGFzc1trZXldID0gU3VwZXJDbGFzc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIEJhc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBTdXBlckNsYXNzLnByb3RvdHlwZTtcbiAgICBDaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBCYXNlQ29uc3RydWN0b3IoKTtcbiAgICBDaGlsZENsYXNzLl9fc3VwZXJfXyA9IFN1cGVyQ2xhc3MucHJvdG90eXBlO1xuXG4gICAgcmV0dXJuIENoaWxkQ2xhc3M7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0TWV0aG9kcyAodGhlQ2xhc3MpIHtcbiAgICB2YXIgcHJvdG8gPSB0aGVDbGFzcy5wcm90b3R5cGU7XG5cbiAgICB2YXIgbWV0aG9kcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgbWV0aG9kTmFtZSBpbiBwcm90bykge1xuICAgICAgdmFyIG0gPSBwcm90b1ttZXRob2ROYW1lXTtcblxuICAgICAgaWYgKHR5cGVvZiBtICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbWV0aG9kcy5wdXNoKG1ldGhvZE5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRob2RzO1xuICB9XG5cbiAgVXRpbHMuRGVjb3JhdGUgPSBmdW5jdGlvbiAoU3VwZXJDbGFzcywgRGVjb3JhdG9yQ2xhc3MpIHtcbiAgICB2YXIgZGVjb3JhdGVkTWV0aG9kcyA9IGdldE1ldGhvZHMoRGVjb3JhdG9yQ2xhc3MpO1xuICAgIHZhciBzdXBlck1ldGhvZHMgPSBnZXRNZXRob2RzKFN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gRGVjb3JhdGVkQ2xhc3MgKCkge1xuICAgICAgdmFyIHVuc2hpZnQgPSBBcnJheS5wcm90b3R5cGUudW5zaGlmdDtcblxuICAgICAgdmFyIGFyZ0NvdW50ID0gRGVjb3JhdG9yQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yLmxlbmd0aDtcblxuICAgICAgdmFyIGNhbGxlZENvbnN0cnVjdG9yID0gU3VwZXJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3I7XG5cbiAgICAgIGlmIChhcmdDb3VudCA+IDApIHtcbiAgICAgICAgdW5zaGlmdC5jYWxsKGFyZ3VtZW50cywgU3VwZXJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IpO1xuXG4gICAgICAgIGNhbGxlZENvbnN0cnVjdG9yID0gRGVjb3JhdG9yQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuICAgICAgfVxuXG4gICAgICBjYWxsZWRDb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIERlY29yYXRvckNsYXNzLmRpc3BsYXlOYW1lID0gU3VwZXJDbGFzcy5kaXNwbGF5TmFtZTtcblxuICAgIGZ1bmN0aW9uIGN0ciAoKSB7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yID0gRGVjb3JhdGVkQ2xhc3M7XG4gICAgfVxuXG4gICAgRGVjb3JhdGVkQ2xhc3MucHJvdG90eXBlID0gbmV3IGN0cigpO1xuXG4gICAgZm9yICh2YXIgbSA9IDA7IG0gPCBzdXBlck1ldGhvZHMubGVuZ3RoOyBtKyspIHtcbiAgICAgIHZhciBzdXBlck1ldGhvZCA9IHN1cGVyTWV0aG9kc1ttXTtcblxuICAgICAgRGVjb3JhdGVkQ2xhc3MucHJvdG90eXBlW3N1cGVyTWV0aG9kXSA9XG4gICAgICAgIFN1cGVyQ2xhc3MucHJvdG90eXBlW3N1cGVyTWV0aG9kXTtcbiAgICB9XG5cbiAgICB2YXIgY2FsbGVkTWV0aG9kID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICAgIC8vIFN0dWIgb3V0IHRoZSBvcmlnaW5hbCBtZXRob2QgaWYgaXQncyBub3QgZGVjb3JhdGluZyBhbiBhY3R1YWwgbWV0aG9kXG4gICAgICB2YXIgb3JpZ2luYWxNZXRob2QgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgICAgaWYgKG1ldGhvZE5hbWUgaW4gRGVjb3JhdGVkQ2xhc3MucHJvdG90eXBlKSB7XG4gICAgICAgIG9yaWdpbmFsTWV0aG9kID0gRGVjb3JhdGVkQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVjb3JhdGVkTWV0aG9kID0gRGVjb3JhdG9yQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdW5zaGlmdCA9IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0O1xuXG4gICAgICAgIHVuc2hpZnQuY2FsbChhcmd1bWVudHMsIG9yaWdpbmFsTWV0aG9kKTtcblxuICAgICAgICByZXR1cm4gZGVjb3JhdGVkTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRlY29yYXRlZE1ldGhvZHMubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBkZWNvcmF0ZWRNZXRob2QgPSBkZWNvcmF0ZWRNZXRob2RzW2RdO1xuXG4gICAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGVbZGVjb3JhdGVkTWV0aG9kXSA9IGNhbGxlZE1ldGhvZChkZWNvcmF0ZWRNZXRob2QpO1xuICAgIH1cblxuICAgIHJldHVybiBEZWNvcmF0ZWRDbGFzcztcbiAgfTtcblxuICB2YXIgT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICB9O1xuXG4gIE9ic2VydmFibGUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwge307XG5cbiAgICBpZiAoZXZlbnQgaW4gdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gW2NhbGxiYWNrXTtcbiAgICB9XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiAgICB2YXIgcGFyYW1zID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCB7fTtcblxuICAgIC8vIFBhcmFtcyBzaG91bGQgYWx3YXlzIGNvbWUgaW4gYXMgYW4gYXJyYXlcbiAgICBpZiAocGFyYW1zID09IG51bGwpIHtcbiAgICAgIHBhcmFtcyA9IFtdO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBubyBhcmd1bWVudHMgdG8gdGhlIGV2ZW50LCB1c2UgYSB0ZW1wb3Jhcnkgb2JqZWN0XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHBhcmFtcy5wdXNoKHt9KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGBfdHlwZWAgb2YgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgZXZlbnRcbiAgICBwYXJhbXNbMF0uX3R5cGUgPSBldmVudDtcblxuICAgIGlmIChldmVudCBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5pbnZva2UodGhpcy5saXN0ZW5lcnNbZXZlbnRdLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIH1cblxuICAgIGlmICgnKicgaW4gdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuaW52b2tlKHRoaXMubGlzdGVuZXJzWycqJ10sIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xuXG4gIE9ic2VydmFibGUucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uIChsaXN0ZW5lcnMsIHBhcmFtcykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBwYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICBVdGlscy5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZTtcblxuICBVdGlscy5nZW5lcmF0ZUNoYXJzID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHZhciBjaGFycyA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJhbmRvbUNoYXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNik7XG4gICAgICBjaGFycyArPSByYW5kb21DaGFyLnRvU3RyaW5nKDM2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hhcnM7XG4gIH07XG5cbiAgVXRpbHMuYmluZCA9IGZ1bmN0aW9uIChmdW5jLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIFV0aWxzLl9jb252ZXJ0RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZm9yICh2YXIgb3JpZ2luYWxLZXkgaW4gZGF0YSkge1xuICAgICAgdmFyIGtleXMgPSBvcmlnaW5hbEtleS5zcGxpdCgnLScpO1xuXG4gICAgICB2YXIgZGF0YUxldmVsID0gZGF0YTtcblxuICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGtleXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba107XG5cbiAgICAgICAgLy8gTG93ZXJjYXNlIHRoZSBmaXJzdCBsZXR0ZXJcbiAgICAgICAgLy8gQnkgZGVmYXVsdCwgZGFzaC1zZXBhcmF0ZWQgYmVjb21lcyBjYW1lbENhc2VcbiAgICAgICAga2V5ID0ga2V5LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcblxuICAgICAgICBpZiAoIShrZXkgaW4gZGF0YUxldmVsKSkge1xuICAgICAgICAgIGRhdGFMZXZlbFtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoayA9PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBkYXRhTGV2ZWxba2V5XSA9IGRhdGFbb3JpZ2luYWxLZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YUxldmVsID0gZGF0YUxldmVsW2tleV07XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBkYXRhW29yaWdpbmFsS2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBVdGlscy5oYXNTY3JvbGwgPSBmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XG4gICAgLy8gQWRhcHRlZCBmcm9tIHRoZSBmdW5jdGlvbiBjcmVhdGVkIGJ5IEBTaGFkb3dTY3JpcHRlclxuICAgIC8vIGFuZCBhZGFwdGVkIGJ5IEBCaWxsQmFycnkgb24gdGhlIFN0YWNrIEV4Y2hhbmdlIENvZGUgUmV2aWV3IHdlYnNpdGUuXG4gICAgLy8gVGhlIG9yaWdpbmFsIGNvZGUgY2FuIGJlIGZvdW5kIGF0XG4gICAgLy8gaHR0cDovL2NvZGVyZXZpZXcuc3RhY2tleGNoYW5nZS5jb20vcS8xMzMzOFxuICAgIC8vIGFuZCB3YXMgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIHRoZSBTaXp6bGUgc2VsZWN0b3IgZW5naW5lLlxuXG4gICAgdmFyICRlbCA9ICQoZWwpO1xuICAgIHZhciBvdmVyZmxvd1ggPSBlbC5zdHlsZS5vdmVyZmxvd1g7XG4gICAgdmFyIG92ZXJmbG93WSA9IGVsLnN0eWxlLm92ZXJmbG93WTtcblxuICAgIC8vQ2hlY2sgYm90aCB4IGFuZCB5IGRlY2xhcmF0aW9uc1xuICAgIGlmIChvdmVyZmxvd1ggPT09IG92ZXJmbG93WSAmJlxuICAgICAgICAob3ZlcmZsb3dZID09PSAnaGlkZGVuJyB8fCBvdmVyZmxvd1kgPT09ICd2aXNpYmxlJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBvdmVyZmxvd1kgPT09ICdzY3JvbGwnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCRlbC5pbm5lckhlaWdodCgpIDwgZWwuc2Nyb2xsSGVpZ2h0IHx8XG4gICAgICAkZWwuaW5uZXJXaWR0aCgpIDwgZWwuc2Nyb2xsV2lkdGgpO1xuICB9O1xuXG4gIFV0aWxzLmVzY2FwZU1hcmt1cCA9IGZ1bmN0aW9uIChtYXJrdXApIHtcbiAgICB2YXIgcmVwbGFjZU1hcCA9IHtcbiAgICAgICdcXFxcJzogJyYjOTI7JyxcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICdcXCcnOiAnJiMzOTsnLFxuICAgICAgJy8nOiAnJiM0NzsnXG4gICAgfTtcblxuICAgIC8vIERvIG5vdCB0cnkgdG8gZXNjYXBlIHRoZSBtYXJrdXAgaWYgaXQncyBub3QgYSBzdHJpbmdcbiAgICBpZiAodHlwZW9mIG1hcmt1cCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBtYXJrdXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0cmluZyhtYXJrdXApLnJlcGxhY2UoL1smPD5cIidcXC9cXFxcXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiByZXBsYWNlTWFwW21hdGNoXTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBBcHBlbmQgYW4gYXJyYXkgb2YgalF1ZXJ5IG5vZGVzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cbiAgVXRpbHMuYXBwZW5kTWFueSA9IGZ1bmN0aW9uICgkZWxlbWVudCwgJG5vZGVzKSB7XG4gICAgLy8galF1ZXJ5IDEuNy54IGRvZXMgbm90IHN1cHBvcnQgJC5mbi5hcHBlbmQoKSB3aXRoIGFuIGFycmF5XG4gICAgLy8gRmFsbCBiYWNrIHRvIGEgalF1ZXJ5IG9iamVjdCBjb2xsZWN0aW9uIHVzaW5nICQuZm4uYWRkKClcbiAgICBpZiAoJC5mbi5qcXVlcnkuc3Vic3RyKDAsIDMpID09PSAnMS43Jykge1xuICAgICAgdmFyICRqcU5vZGVzID0gJCgpO1xuXG4gICAgICAkLm1hcCgkbm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICRqcU5vZGVzID0gJGpxTm9kZXMuYWRkKG5vZGUpO1xuICAgICAgfSk7XG5cbiAgICAgICRub2RlcyA9ICRqcU5vZGVzO1xuICAgIH1cblxuICAgICRlbGVtZW50LmFwcGVuZCgkbm9kZXMpO1xuICB9O1xuXG4gIC8vIENhY2hlIG9iamVjdHMgaW4gVXRpbHMuX19jYWNoZSBpbnN0ZWFkIG9mICQuZGF0YSAoc2VlICM0MzQ2KVxuICBVdGlscy5fX2NhY2hlID0ge307XG5cbiAgdmFyIGlkID0gMDtcbiAgVXRpbHMuR2V0VW5pcXVlRWxlbWVudElkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBHZXQgYSB1bmlxdWUgZWxlbWVudCBJZC4gSWYgZWxlbWVudCBoYXMgbm8gaWQsXG4gICAgLy8gY3JlYXRlcyBhIG5ldyB1bmlxdWUgbnVtYmVyLCBzdG9yZXMgaXQgaW4gdGhlIGlkXG4gICAgLy8gYXR0cmlidXRlIGFuZCByZXR1cm5zIHRoZSBuZXcgaWQuXG4gICAgLy8gSWYgYW4gaWQgYWxyZWFkeSBleGlzdHMsIGl0IHNpbXBseSByZXR1cm5zIGl0LlxuXG4gICAgdmFyIHNlbGVjdDJJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdDItaWQnKTtcbiAgICBpZiAoc2VsZWN0MklkID09IG51bGwpIHtcbiAgICAgIC8vIElmIGVsZW1lbnQgaGFzIGlkLCB1c2UgaXQuXG4gICAgICBpZiAoZWxlbWVudC5pZCkge1xuICAgICAgICBzZWxlY3QySWQgPSBlbGVtZW50LmlkO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QyLWlkJywgc2VsZWN0MklkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdDItaWQnLCArK2lkKTtcbiAgICAgICAgc2VsZWN0MklkID0gaWQudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdDJJZDtcbiAgfTtcblxuICBVdGlscy5TdG9yZURhdGEgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICAvLyBTdG9yZXMgYW4gaXRlbSBpbiB0aGUgY2FjaGUgZm9yIGEgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgLy8gbmFtZSBpcyB0aGUgY2FjaGUga2V5LlxuICAgIHZhciBpZCA9IFV0aWxzLkdldFVuaXF1ZUVsZW1lbnRJZChlbGVtZW50KTtcbiAgICBpZiAoIVV0aWxzLl9fY2FjaGVbaWRdKSB7XG4gICAgICBVdGlscy5fX2NhY2hlW2lkXSA9IHt9O1xuICAgIH1cblxuICAgIFV0aWxzLl9fY2FjaGVbaWRdW25hbWVdID0gdmFsdWU7XG4gIH07XG5cbiAgVXRpbHMuR2V0RGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lKSB7XG4gICAgLy8gUmV0cmlldmVzIGEgdmFsdWUgZnJvbSB0aGUgY2FjaGUgYnkgaXRzIGtleSAobmFtZSlcbiAgICAvLyBuYW1lIGlzIG9wdGlvbmFsLiBJZiBubyBuYW1lIHNwZWNpZmllZCwgcmV0dXJuXG4gICAgLy8gYWxsIGNhY2hlIGl0ZW1zIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgLy8gYW5kIGZvciBhIHNwZWNpZmllZCBlbGVtZW50LlxuICAgIHZhciBpZCA9IFV0aWxzLkdldFVuaXF1ZUVsZW1lbnRJZChlbGVtZW50KTtcbiAgICBpZiAobmFtZSkge1xuICAgICAgaWYgKFV0aWxzLl9fY2FjaGVbaWRdKSB7XG4gICAgICAgIGlmIChVdGlscy5fX2NhY2hlW2lkXVtuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIFV0aWxzLl9fY2FjaGVbaWRdW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkKGVsZW1lbnQpLmRhdGEobmFtZSk7IC8vIEZhbGxiYWNrIHRvIEhUTUw1IGRhdGEgYXR0cmlicy5cbiAgICAgIH1cbiAgICAgIHJldHVybiAkKGVsZW1lbnQpLmRhdGEobmFtZSk7IC8vIEZhbGxiYWNrIHRvIEhUTUw1IGRhdGEgYXR0cmlicy5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFV0aWxzLl9fY2FjaGVbaWRdO1xuICAgIH1cbiAgfTtcblxuICBVdGlscy5SZW1vdmVEYXRhID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBSZW1vdmVzIGFsbCBjYWNoZWQgaXRlbXMgZm9yIGEgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgdmFyIGlkID0gVXRpbHMuR2V0VW5pcXVlRWxlbWVudElkKGVsZW1lbnQpO1xuICAgIGlmIChVdGlscy5fX2NhY2hlW2lkXSAhPSBudWxsKSB7XG4gICAgICBkZWxldGUgVXRpbHMuX19jYWNoZVtpZF07XG4gICAgfVxuXG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcpO1xuICB9O1xuXG4gIHJldHVybiBVdGlscztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvcmVzdWx0cycsW1xuICAnanF1ZXJ5JyxcbiAgJy4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gUmVzdWx0cyAoJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgIHRoaXMuZGF0YSA9IGRhdGFBZGFwdGVyO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBSZXN1bHRzLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKFJlc3VsdHMsIFV0aWxzLk9ic2VydmFibGUpO1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHJlc3VsdHMgPSAkKFxuICAgICAgJzx1bCBjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uc1wiIHJvbGU9XCJsaXN0Ym94XCI+PC91bD4nXG4gICAgKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdtdWx0aXBsZScpKSB7XG4gICAgICAkcmVzdWx0cy5hdHRyKCdhcmlhLW11bHRpc2VsZWN0YWJsZScsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVzdWx0cyA9ICRyZXN1bHRzO1xuXG4gICAgcmV0dXJuICRyZXN1bHRzO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJHJlc3VsdHMuZW1wdHkoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5kaXNwbGF5TWVzc2FnZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICB2YXIgZXNjYXBlTWFya3VwID0gdGhpcy5vcHRpb25zLmdldCgnZXNjYXBlTWFya3VwJyk7XG5cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgdmFyICRtZXNzYWdlID0gJChcbiAgICAgICc8bGkgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCInICtcbiAgICAgICcgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvblwiPjwvbGk+J1xuICAgICk7XG5cbiAgICB2YXIgbWVzc2FnZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RyYW5zbGF0aW9ucycpLmdldChwYXJhbXMubWVzc2FnZSk7XG5cbiAgICAkbWVzc2FnZS5hcHBlbmQoXG4gICAgICBlc2NhcGVNYXJrdXAoXG4gICAgICAgIG1lc3NhZ2UocGFyYW1zLmFyZ3MpXG4gICAgICApXG4gICAgKTtcblxuICAgICRtZXNzYWdlWzBdLmNsYXNzTmFtZSArPSAnIHNlbGVjdDItcmVzdWx0c19fbWVzc2FnZSc7XG5cbiAgICB0aGlzLiRyZXN1bHRzLmFwcGVuZCgkbWVzc2FnZSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuaGlkZU1lc3NhZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJHJlc3VsdHMuZmluZCgnLnNlbGVjdDItcmVzdWx0c19fbWVzc2FnZScpLnJlbW92ZSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgdmFyICRvcHRpb25zID0gW107XG5cbiAgICBpZiAoZGF0YS5yZXN1bHRzID09IG51bGwgfHwgZGF0YS5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuJHJlc3VsdHMuY2hpbGRyZW4oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdyZXN1bHRzOm1lc3NhZ2UnLCB7XG4gICAgICAgICAgbWVzc2FnZTogJ25vUmVzdWx0cydcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkYXRhLnJlc3VsdHMgPSB0aGlzLnNvcnQoZGF0YS5yZXN1bHRzKTtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGRhdGEucmVzdWx0c1tkXTtcblxuICAgICAgdmFyICRvcHRpb24gPSB0aGlzLm9wdGlvbihpdGVtKTtcblxuICAgICAgJG9wdGlvbnMucHVzaCgkb3B0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLiRyZXN1bHRzLmFwcGVuZCgkb3B0aW9ucyk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoJHJlc3VsdHMsICRkcm9wZG93bikge1xuICAgIHZhciAkcmVzdWx0c0NvbnRhaW5lciA9ICRkcm9wZG93bi5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzJyk7XG4gICAgJHJlc3VsdHNDb250YWluZXIuYXBwZW5kKCRyZXN1bHRzKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5zb3J0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgc29ydGVyID0gdGhpcy5vcHRpb25zLmdldCgnc29ydGVyJyk7XG5cbiAgICByZXR1cm4gc29ydGVyKGRhdGEpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmhpZ2hsaWdodEZpcnN0SXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRyZXN1bHRzXG4gICAgICAuZmluZCgnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICB2YXIgJHNlbGVjdGVkID0gJG9wdGlvbnMuZmlsdGVyKCdbYXJpYS1zZWxlY3RlZD10cnVlXScpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBzZWxlY3RlZCBvcHRpb25zXG4gICAgaWYgKCRzZWxlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBJZiB0aGVyZSBhcmUgc2VsZWN0ZWQgb3B0aW9ucywgaGlnaGxpZ2h0IHRoZSBmaXJzdFxuICAgICAgJHNlbGVjdGVkLmZpcnN0KCkudHJpZ2dlcignbW91c2VlbnRlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gc2VsZWN0ZWQgb3B0aW9ucywgaGlnaGxpZ2h0IHRoZSBmaXJzdCBvcHRpb25cbiAgICAgIC8vIGluIHRoZSBkcm9wZG93blxuICAgICAgJG9wdGlvbnMuZmlyc3QoKS50cmlnZ2VyKCdtb3VzZWVudGVyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnN1cmVIaWdobGlnaHRWaXNpYmxlKCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuc2V0Q2xhc3NlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGEuY3VycmVudChmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgIHZhciBzZWxlY3RlZElkcyA9ICQubWFwKHNlbGVjdGVkLCBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcy5pZC50b1N0cmluZygpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciAkb3B0aW9ucyA9IHNlbGYuJHJlc3VsdHNcbiAgICAgICAgLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuXG4gICAgICAgIHZhciBpdGVtID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnZGF0YScpO1xuXG4gICAgICAgIC8vIGlkIG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBhIHN0cmluZyB3aGVuIGNvbXBhcmluZ1xuICAgICAgICB2YXIgaWQgPSAnJyArIGl0ZW0uaWQ7XG5cbiAgICAgICAgaWYgKChpdGVtLmVsZW1lbnQgIT0gbnVsbCAmJiBpdGVtLmVsZW1lbnQuc2VsZWN0ZWQpIHx8XG4gICAgICAgICAgICAoaXRlbS5lbGVtZW50ID09IG51bGwgJiYgJC5pbkFycmF5KGlkLCBzZWxlY3RlZElkcykgPiAtMSkpIHtcbiAgICAgICAgICAkb3B0aW9uLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRvcHRpb24uYXR0cignYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnNob3dMb2FkaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIHZhciBsb2FkaW5nTW9yZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RyYW5zbGF0aW9ucycpLmdldCgnc2VhcmNoaW5nJyk7XG5cbiAgICB2YXIgbG9hZGluZyA9IHtcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHRleHQ6IGxvYWRpbmdNb3JlKHBhcmFtcylcbiAgICB9O1xuICAgIHZhciAkbG9hZGluZyA9IHRoaXMub3B0aW9uKGxvYWRpbmcpO1xuICAgICRsb2FkaW5nLmNsYXNzTmFtZSArPSAnIGxvYWRpbmctcmVzdWx0cyc7XG5cbiAgICB0aGlzLiRyZXN1bHRzLnByZXBlbmQoJGxvYWRpbmcpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmhpZGVMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJHJlc3VsdHMuZmluZCgnLmxvYWRpbmctcmVzdWx0cycpLnJlbW92ZSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLm9wdGlvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgb3B0aW9uLmNsYXNzTmFtZSA9ICdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbic7XG5cbiAgICB2YXIgYXR0cnMgPSB7XG4gICAgICAncm9sZSc6ICdvcHRpb24nLFxuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAnZmFsc2UnXG4gICAgfTtcblxuICAgIHZhciBtYXRjaGVzID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHxcbiAgICAgIHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgd2luZG93LkVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxuICAgIGlmICgoZGF0YS5lbGVtZW50ICE9IG51bGwgJiYgbWF0Y2hlcy5jYWxsKGRhdGEuZWxlbWVudCwgJzpkaXNhYmxlZCcpKSB8fFxuICAgICAgICAoZGF0YS5lbGVtZW50ID09IG51bGwgJiYgZGF0YS5kaXNhYmxlZCkpIHtcbiAgICAgIGRlbGV0ZSBhdHRyc1snYXJpYS1zZWxlY3RlZCddO1xuICAgICAgYXR0cnNbJ2FyaWEtZGlzYWJsZWQnXSA9ICd0cnVlJztcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5pZCA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgYXR0cnNbJ2FyaWEtc2VsZWN0ZWQnXTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5fcmVzdWx0SWQgIT0gbnVsbCkge1xuICAgICAgb3B0aW9uLmlkID0gZGF0YS5fcmVzdWx0SWQ7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudGl0bGUpIHtcbiAgICAgIG9wdGlvbi50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcbiAgICAgIGF0dHJzLnJvbGUgPSAnZ3JvdXAnO1xuICAgICAgYXR0cnNbJ2FyaWEtbGFiZWwnXSA9IGRhdGEudGV4dDtcbiAgICAgIGRlbGV0ZSBhdHRyc1snYXJpYS1zZWxlY3RlZCddO1xuICAgIH1cblxuICAgIGZvciAodmFyIGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIHZhciB2YWwgPSBhdHRyc1thdHRyXTtcblxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQob3B0aW9uKTtcblxuICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XG4gICAgICBsYWJlbC5jbGFzc05hbWUgPSAnc2VsZWN0Mi1yZXN1bHRzX19ncm91cCc7XG5cbiAgICAgIHZhciAkbGFiZWwgPSAkKGxhYmVsKTtcbiAgICAgIHRoaXMudGVtcGxhdGUoZGF0YSwgbGFiZWwpO1xuXG4gICAgICB2YXIgJGNoaWxkcmVuID0gW107XG5cbiAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgZGF0YS5jaGlsZHJlbi5sZW5ndGg7IGMrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBkYXRhLmNoaWxkcmVuW2NdO1xuXG4gICAgICAgIHZhciAkY2hpbGQgPSB0aGlzLm9wdGlvbihjaGlsZCk7XG5cbiAgICAgICAgJGNoaWxkcmVuLnB1c2goJGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgdmFyICRjaGlsZHJlbkNvbnRhaW5lciA9ICQoJzx1bD48L3VsPicsIHtcbiAgICAgICAgJ2NsYXNzJzogJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9ucyBzZWxlY3QyLXJlc3VsdHNfX29wdGlvbnMtLW5lc3RlZCdcbiAgICAgIH0pO1xuXG4gICAgICAkY2hpbGRyZW5Db250YWluZXIuYXBwZW5kKCRjaGlsZHJlbik7XG5cbiAgICAgICRvcHRpb24uYXBwZW5kKGxhYmVsKTtcbiAgICAgICRvcHRpb24uYXBwZW5kKCRjaGlsZHJlbkNvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGVtcGxhdGUoZGF0YSwgb3B0aW9uKTtcbiAgICB9XG5cbiAgICBVdGlscy5TdG9yZURhdGEob3B0aW9uLCAnZGF0YScsIGRhdGEpO1xuXG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBpZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XG5cbiAgICB0aGlzLiRyZXN1bHRzLmF0dHIoJ2lkJywgaWQpO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFsbCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuY2xlYXIoKTtcbiAgICAgIHNlbGYuYXBwZW5kKHBhcmFtcy5kYXRhKTtcblxuICAgICAgaWYgKGNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLnNldENsYXNzZXMoKTtcbiAgICAgICAgc2VsZi5oaWdobGlnaHRGaXJzdEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphcHBlbmQnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmFwcGVuZChwYXJhbXMuZGF0YSk7XG5cbiAgICAgIGlmIChjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3F1ZXJ5JywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5oaWRlTWVzc2FnZXMoKTtcbiAgICAgIHNlbGYuc2hvd0xvYWRpbmcocGFyYW1zKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnNldENsYXNzZXMoKTtcblxuICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ3Njcm9sbEFmdGVyU2VsZWN0JykpIHtcbiAgICAgICAgc2VsZi5oaWdobGlnaHRGaXJzdEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuXG4gICAgICBpZiAoc2VsZi5vcHRpb25zLmdldCgnc2Nyb2xsQWZ0ZXJTZWxlY3QnKSkge1xuICAgICAgICBzZWxmLmhpZ2hsaWdodEZpcnN0SXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgb3BlbiwgYXJpYS1leHBlbmRlZD1cInRydWVcIlxuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIHNlbGYuJHJlc3VsdHMuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG4gICAgICBzZWxmLmVuc3VyZUhpZ2hsaWdodFZpc2libGUoKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBjbG9zZWQsIGFyaWEtZXhwZW5kZWQ9XCJmYWxzZVwiXG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHNlbGYuJHJlc3VsdHMuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgc2VsZi4kcmVzdWx0cy5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czp0b2dnbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkaGlnaGxpZ2h0ZWQudHJpZ2dlcignbW91c2V1cCcpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnNlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSgkaGlnaGxpZ2h0ZWRbMF0sICdkYXRhJyk7XG5cbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQuYXR0cignYXJpYS1zZWxlY3RlZCcpID09ICd0cnVlJykge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ2Nsb3NlJywge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3QnLCB7XG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpwcmV2aW91cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgICB2YXIgJG9wdGlvbnMgPSBzZWxmLiRyZXN1bHRzLmZpbmQoJ1thcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgICB2YXIgY3VycmVudEluZGV4ID0gJG9wdGlvbnMuaW5kZXgoJGhpZ2hsaWdodGVkKTtcblxuICAgICAgLy8gSWYgd2UgYXJlIGFscmVhZHkgYXQgdGhlIHRvcCwgZG9uJ3QgbW92ZSBmdXJ0aGVyXG4gICAgICAvLyBJZiBubyBvcHRpb25zLCBjdXJyZW50SW5kZXggd2lsbCBiZSAtMVxuICAgICAgaWYgKGN1cnJlbnRJbmRleCA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG5cbiAgICAgIC8vIElmIG5vbmUgYXJlIGhpZ2hsaWdodGVkLCBoaWdobGlnaHQgdGhlIGZpcnN0XG4gICAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBuZXh0SW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgJG5leHQgPSAkb3B0aW9ucy5lcShuZXh0SW5kZXgpO1xuXG4gICAgICAkbmV4dC50cmlnZ2VyKCdtb3VzZWVudGVyJyk7XG5cbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gc2VsZi4kcmVzdWx0cy5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgbmV4dFRvcCA9ICRuZXh0Lm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciBuZXh0T2Zmc2V0ID0gc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoKSArIChuZXh0VG9wIC0gY3VycmVudE9mZnNldCk7XG5cbiAgICAgIGlmIChuZXh0SW5kZXggPT09IDApIHtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoMCk7XG4gICAgICB9IGVsc2UgaWYgKG5leHRUb3AgLSBjdXJyZW50T2Zmc2V0IDwgMCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcChuZXh0T2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpuZXh0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIHZhciAkb3B0aW9ucyA9IHNlbGYuJHJlc3VsdHMuZmluZCgnW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICAgIHZhciBjdXJyZW50SW5kZXggPSAkb3B0aW9ucy5pbmRleCgkaGlnaGxpZ2h0ZWQpO1xuXG4gICAgICB2YXIgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcblxuICAgICAgLy8gSWYgd2UgYXJlIGF0IHRoZSBsYXN0IG9wdGlvbiwgc3RheSB0aGVyZVxuICAgICAgaWYgKG5leHRJbmRleCA+PSAkb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgJG5leHQgPSAkb3B0aW9ucy5lcShuZXh0SW5kZXgpO1xuXG4gICAgICAkbmV4dC50cmlnZ2VyKCdtb3VzZWVudGVyJyk7XG5cbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gc2VsZi4kcmVzdWx0cy5vZmZzZXQoKS50b3AgK1xuICAgICAgICBzZWxmLiRyZXN1bHRzLm91dGVySGVpZ2h0KGZhbHNlKTtcbiAgICAgIHZhciBuZXh0Qm90dG9tID0gJG5leHQub2Zmc2V0KCkudG9wICsgJG5leHQub3V0ZXJIZWlnaHQoZmFsc2UpO1xuICAgICAgdmFyIG5leHRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgpICsgbmV4dEJvdHRvbSAtIGN1cnJlbnRPZmZzZXQ7XG5cbiAgICAgIGlmIChuZXh0SW5kZXggPT09IDApIHtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoMCk7XG4gICAgICB9IGVsc2UgaWYgKG5leHRCb3R0b20gPiBjdXJyZW50T2Zmc2V0KSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKG5leHRPZmZzZXQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgcGFyYW1zLmVsZW1lbnQuYWRkQ2xhc3MoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZCcpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOm1lc3NhZ2UnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmRpc3BsYXlNZXNzYWdlKHBhcmFtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoJC5mbi5tb3VzZXdoZWVsKSB7XG4gICAgICB0aGlzLiRyZXN1bHRzLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRvcCA9IHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgdmFyIGJvdHRvbSA9IHNlbGYuJHJlc3VsdHMuZ2V0KDApLnNjcm9sbEhlaWdodCAtIHRvcCArIGUuZGVsdGFZO1xuXG4gICAgICAgIHZhciBpc0F0VG9wID0gZS5kZWx0YVkgPiAwICYmIHRvcCAtIGUuZGVsdGFZIDw9IDA7XG4gICAgICAgIHZhciBpc0F0Qm90dG9tID0gZS5kZWx0YVkgPCAwICYmIGJvdHRvbSA8PSBzZWxmLiRyZXN1bHRzLmhlaWdodCgpO1xuXG4gICAgICAgIGlmIChpc0F0VG9wKSB7XG4gICAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoMCk7XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0F0Qm90dG9tKSB7XG4gICAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoXG4gICAgICAgICAgICBzZWxmLiRyZXN1bHRzLmdldCgwKS5zY3JvbGxIZWlnaHQgLSBzZWxmLiRyZXN1bHRzLmhlaWdodCgpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLiRyZXN1bHRzLm9uKCdtb3VzZXVwJywgJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkXScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEodGhpcywgJ2RhdGEnKTtcblxuICAgICAgaWYgKCR0aGlzLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCd1bnNlbGVjdCcsIHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2Nsb3NlJywge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0LFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHJlc3VsdHMub24oJ21vdXNlZW50ZXInLCAnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWRdJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnZGF0YScpO1xuXG4gICAgICBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcblxuICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOmZvY3VzJywge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBlbGVtZW50OiAkKHRoaXMpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5nZXRIaWdobGlnaHRlZFJlc3VsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRoaWdobGlnaHRlZCA9IHRoaXMuJHJlc3VsdHNcbiAgICAuZmluZCgnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZCcpO1xuXG4gICAgcmV0dXJuICRoaWdobGlnaHRlZDtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJHJlc3VsdHMucmVtb3ZlKCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGhpZ2hsaWdodGVkID0gdGhpcy5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRvcHRpb25zID0gdGhpcy4kcmVzdWx0cy5maW5kKCdbYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgIHZhciBjdXJyZW50SW5kZXggPSAkb3B0aW9ucy5pbmRleCgkaGlnaGxpZ2h0ZWQpO1xuXG4gICAgdmFyIGN1cnJlbnRPZmZzZXQgPSB0aGlzLiRyZXN1bHRzLm9mZnNldCgpLnRvcDtcbiAgICB2YXIgbmV4dFRvcCA9ICRoaWdobGlnaHRlZC5vZmZzZXQoKS50b3A7XG4gICAgdmFyIG5leHRPZmZzZXQgPSB0aGlzLiRyZXN1bHRzLnNjcm9sbFRvcCgpICsgKG5leHRUb3AgLSBjdXJyZW50T2Zmc2V0KTtcblxuICAgIHZhciBvZmZzZXREZWx0YSA9IG5leHRUb3AgLSBjdXJyZW50T2Zmc2V0O1xuICAgIG5leHRPZmZzZXQgLT0gJGhpZ2hsaWdodGVkLm91dGVySGVpZ2h0KGZhbHNlKSAqIDI7XG5cbiAgICBpZiAoY3VycmVudEluZGV4IDw9IDIpIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xuICAgIH0gZWxzZSBpZiAob2Zmc2V0RGVsdGEgPiB0aGlzLiRyZXN1bHRzLm91dGVySGVpZ2h0KCkgfHwgb2Zmc2V0RGVsdGEgPCAwKSB7XG4gICAgICB0aGlzLiRyZXN1bHRzLnNjcm9sbFRvcChuZXh0T2Zmc2V0KTtcbiAgICB9XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbiAocmVzdWx0LCBjb250YWluZXIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0ZW1wbGF0ZVJlc3VsdCcpO1xuICAgIHZhciBlc2NhcGVNYXJrdXAgPSB0aGlzLm9wdGlvbnMuZ2V0KCdlc2NhcGVNYXJrdXAnKTtcblxuICAgIHZhciBjb250ZW50ID0gdGVtcGxhdGUocmVzdWx0LCBjb250YWluZXIpO1xuXG4gICAgaWYgKGNvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBlc2NhcGVNYXJrdXAoY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoY29udGFpbmVyKS5hcHBlbmQoY29udGVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBSZXN1bHRzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9rZXlzJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIEtFWVMgPSB7XG4gICAgQkFDS1NQQUNFOiA4LFxuICAgIFRBQjogOSxcbiAgICBFTlRFUjogMTMsXG4gICAgU0hJRlQ6IDE2LFxuICAgIENUUkw6IDE3LFxuICAgIEFMVDogMTgsXG4gICAgRVNDOiAyNyxcbiAgICBTUEFDRTogMzIsXG4gICAgUEFHRV9VUDogMzMsXG4gICAgUEFHRV9ET1dOOiAzNCxcbiAgICBFTkQ6IDM1LFxuICAgIEhPTUU6IDM2LFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgREVMRVRFOiA0NlxuICB9O1xuXG4gIHJldHVybiBLRVlTO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vYmFzZScsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL3V0aWxzJyxcbiAgJy4uL2tleXMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMsIEtFWVMpIHtcbiAgZnVuY3Rpb24gQmFzZVNlbGVjdGlvbiAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIEJhc2VTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoQmFzZVNlbGVjdGlvbiwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkc2VsZWN0aW9uID0gJChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uXCIgcm9sZT1cImNvbWJvYm94XCIgJyArXG4gICAgICAnIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgdGhpcy5fdGFiaW5kZXggPSAwO1xuXG4gICAgaWYgKFV0aWxzLkdldERhdGEodGhpcy4kZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3RhYmluZGV4ID0gVXRpbHMuR2V0RGF0YSh0aGlzLiRlbGVtZW50WzBdLCAnb2xkLXRhYmluZGV4Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JykgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGFiaW5kZXggPSB0aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgJHNlbGVjdGlvbi5hdHRyKCd0aXRsZScsIHRoaXMuJGVsZW1lbnQuYXR0cigndGl0bGUnKSk7XG4gICAgJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsIHRoaXMuX3RhYmluZGV4KTtcbiAgICAkc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbiA9ICRzZWxlY3Rpb247XG5cbiAgICByZXR1cm4gJHNlbGVjdGlvbjtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciByZXN1bHRzSWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdmb2N1cycsIGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9oYW5kbGVCbHVyKGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2tleXByZXNzJywgZXZ0KTtcblxuICAgICAgaWYgKGV2dC53aGljaCA9PT0gS0VZUy5TUEFDRSkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBwYXJhbXMuZGF0YS5fcmVzdWx0SWQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdzZWxlY3Rpb246dXBkYXRlJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi51cGRhdGUocGFyYW1zLmRhdGEpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgb3BlbiwgYXJpYS1leHBhbmRlZD1cInRydWVcIlxuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtb3ducycsIHJlc3VsdHNJZCk7XG5cbiAgICAgIHNlbGYuX2F0dGFjaENsb3NlSGFuZGxlcihjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIGNsb3NlZCwgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24ucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24ucmVtb3ZlQXR0cignYXJpYS1vd25zJyk7XG5cbiAgICAgIHNlbGYuJHNlbGVjdGlvbi50cmlnZ2VyKCdmb2N1cycpO1xuXG4gICAgICBzZWxmLl9kZXRhY2hDbG9zZUhhbmRsZXIoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZW5hYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4Jywgc2VsZi5fdGFiaW5kZXgpO1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZGlzYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLl9oYW5kbGVCbHVyID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgZGVsYXllZCBhcyB0aGUgYWN0aXZlIGVsZW1lbnQgaXMgdGhlIGJvZHkgd2hlbiB0aGUgdGFiXG4gICAgLy8ga2V5IGlzIHByZXNzZWQsIHBvc3NpYmx5IGFsb25nIHdpdGggb3RoZXJzLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIERvbid0IHRyaWdnZXIgYGJsdXJgIGlmIHRoZSBmb2N1cyBpcyBzdGlsbCBpbiB0aGUgc2VsZWN0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IHNlbGYuJHNlbGVjdGlvblswXSkgfHxcbiAgICAgICAgKCQuY29udGFpbnMoc2VsZi4kc2VsZWN0aW9uWzBdLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcignYmx1cicsIGV2dCk7XG4gICAgfSwgMSk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuX2F0dGFjaENsb3NlSGFuZGxlciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcblxuICAgICQoZG9jdW1lbnQuYm9keSkub24oJ21vdXNlZG93bi5zZWxlY3QyLicgKyBjb250YWluZXIuaWQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG4gICAgICB2YXIgJHNlbGVjdCA9ICR0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdDInKTtcblxuICAgICAgdmFyICRhbGwgPSAkKCcuc2VsZWN0Mi5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuXG4gICAgICAkYWxsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcyA9PSAkc2VsZWN0WzBdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICRlbGVtZW50ID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnZWxlbWVudCcpO1xuXG4gICAgICAgICRlbGVtZW50LnNlbGVjdDIoJ2Nsb3NlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5fZGV0YWNoQ2xvc2VIYW5kbGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgICQoZG9jdW1lbnQuYm9keSkub2ZmKCdtb3VzZWRvd24uc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkKTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5wb3NpdGlvbiA9IGZ1bmN0aW9uICgkc2VsZWN0aW9uLCAkY29udGFpbmVyKSB7XG4gICAgdmFyICRzZWxlY3Rpb25Db250YWluZXIgPSAkY29udGFpbmVyLmZpbmQoJy5zZWxlY3Rpb24nKTtcbiAgICAkc2VsZWN0aW9uQ29udGFpbmVyLmFwcGVuZCgkc2VsZWN0aW9uKTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2RldGFjaENsb3NlSGFuZGxlcih0aGlzLmNvbnRhaW5lcik7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgdXBkYXRlYCBtZXRob2QgbXVzdCBiZSBkZWZpbmVkIGluIGNoaWxkIGNsYXNzZXMuJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gYWJzdHJhY3QgdGhlIFwiZW5hYmxlZFwiIChub3QgXCJkaXNhYmxlZFwiKSBzdGF0ZSBvZiB0aGlzXG4gICAqIG9iamVjdC5cbiAgICpcbiAgICogQHJldHVybiB7dHJ1ZX0gaWYgdGhlIGluc3RhbmNlIGlzIG5vdCBkaXNhYmxlZC5cbiAgICogQHJldHVybiB7ZmFsc2V9IGlmIHRoZSBpbnN0YW5jZSBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmlzRW5hYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNEaXNhYmxlZCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIGFic3RyYWN0IHRoZSBcImRpc2FibGVkXCIgc3RhdGUgb2YgdGhpcyBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge3RydWV9IGlmIHRoZSBkaXNhYmxlZCBvcHRpb24gaXMgdHJ1ZS5cbiAgICogQHJldHVybiB7ZmFsc2V9IGlmIHRoZSBkaXNhYmxlZCBvcHRpb24gaXMgZmFsc2UuXG4gICAqL1xuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5pc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0KCdkaXNhYmxlZCcpO1xuICB9O1xuXG4gIHJldHVybiBCYXNlU2VsZWN0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vc2luZ2xlJyxbXG4gICdqcXVlcnknLFxuICAnLi9iYXNlJyxcbiAgJy4uL3V0aWxzJyxcbiAgJy4uL2tleXMnXG5dLCBmdW5jdGlvbiAoJCwgQmFzZVNlbGVjdGlvbiwgVXRpbHMsIEtFWVMpIHtcbiAgZnVuY3Rpb24gU2luZ2xlU2VsZWN0aW9uICgpIHtcbiAgICBTaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoU2luZ2xlU2VsZWN0aW9uLCBCYXNlU2VsZWN0aW9uKTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHNlbGVjdGlvbiA9IFNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18ucmVuZGVyLmNhbGwodGhpcyk7XG5cbiAgICAkc2VsZWN0aW9uLmFkZENsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlJyk7XG5cbiAgICAkc2VsZWN0aW9uLmh0bWwoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIj48L3NwYW4+JyArXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3dcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+JyArXG4gICAgICAgICc8YiByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9iPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgIHJldHVybiAkc2VsZWN0aW9uO1xuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBTaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHZhciBpZCA9IGNvbnRhaW5lci5pZCArICctY29udGFpbmVyJztcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJylcbiAgICAgIC5hdHRyKCdpZCcsIGlkKVxuICAgICAgLmF0dHIoJ3JvbGUnLCAndGV4dGJveCcpXG4gICAgICAuYXR0cignYXJpYS1yZWFkb25seScsICd0cnVlJyk7XG4gICAgdGhpcy4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIGlkKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gT25seSByZXNwb25kIHRvIGxlZnQgY2xpY2tzXG4gICAgICBpZiAoZXZ0LndoaWNoICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi50cmlnZ2VyKCd0b2dnbGUnLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gVXNlciBmb2N1c2VzIG9uIHRoZSBjb250YWluZXJcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIFVzZXIgZXhpdHMgdGhlIGNvbnRhaW5lclxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuJHNlbGVjdGlvbi50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRyZW5kZXJlZCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJyk7XG4gICAgJHJlbmRlcmVkLmVtcHR5KCk7XG4gICAgJHJlbmRlcmVkLnJlbW92ZUF0dHIoJ3RpdGxlJyk7IC8vIGNsZWFyIHRvb2x0aXAgb24gZW1wdHlcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmRpc3BsYXkgPSBmdW5jdGlvbiAoZGF0YSwgY29udGFpbmVyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLmdldCgndGVtcGxhdGVTZWxlY3Rpb24nKTtcbiAgICB2YXIgZXNjYXBlTWFya3VwID0gdGhpcy5vcHRpb25zLmdldCgnZXNjYXBlTWFya3VwJyk7XG5cbiAgICByZXR1cm4gZXNjYXBlTWFya3VwKHRlbXBsYXRlKGRhdGEsIGNvbnRhaW5lcikpO1xuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuc2VsZWN0aW9uQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkKCc8c3Bhbj48L3NwYW4+Jyk7XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzZWxlY3Rpb24gPSBkYXRhWzBdO1xuXG4gICAgdmFyICRyZW5kZXJlZCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJyk7XG4gICAgdmFyIGZvcm1hdHRlZCA9IHRoaXMuZGlzcGxheShzZWxlY3Rpb24sICRyZW5kZXJlZCk7XG5cbiAgICAkcmVuZGVyZWQuZW1wdHkoKS5hcHBlbmQoZm9ybWF0dGVkKTtcblxuICAgIHZhciB0aXRsZSA9IHNlbGVjdGlvbi50aXRsZSB8fCBzZWxlY3Rpb24udGV4dDtcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgJHJlbmRlcmVkLmF0dHIoJ3RpdGxlJywgdGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkcmVuZGVyZWQucmVtb3ZlQXR0cigndGl0bGUnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNpbmdsZVNlbGVjdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL211bHRpcGxlJyxbXG4gICdqcXVlcnknLFxuICAnLi9iYXNlJyxcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIEJhc2VTZWxlY3Rpb24sIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIE11bHRpcGxlU2VsZWN0aW9uICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIE11bHRpcGxlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKE11bHRpcGxlU2VsZWN0aW9uLCBCYXNlU2VsZWN0aW9uKTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkc2VsZWN0aW9uID0gTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLnJlbmRlci5jYWxsKHRoaXMpO1xuXG4gICAgJHNlbGVjdGlvbi5hZGRDbGFzcygnc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlJyk7XG5cbiAgICAkc2VsZWN0aW9uLmh0bWwoXG4gICAgICAnPHVsIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkXCI+PC91bD4nXG4gICAgKTtcblxuICAgIHJldHVybiAkc2VsZWN0aW9uO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIE11bHRpcGxlU2VsZWN0aW9uLl9fc3VwZXJfXy5iaW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCd0b2dnbGUnLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oXG4gICAgICAnY2xpY2snLFxuICAgICAgJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUnLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIGl0IGlzIGRpc2FibGVkXG4gICAgICAgIGlmIChzZWxmLmlzRGlzYWJsZWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkcmVtb3ZlID0gJCh0aGlzKTtcbiAgICAgICAgdmFyICRzZWxlY3Rpb24gPSAkcmVtb3ZlLnBhcmVudCgpO1xuXG4gICAgICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSgkc2VsZWN0aW9uWzBdLCAnZGF0YScpO1xuXG4gICAgICAgIHNlbGYudHJpZ2dlcigndW5zZWxlY3QnLCB7XG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0LFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRyZW5kZXJlZCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJyk7XG4gICAgJHJlbmRlcmVkLmVtcHR5KCk7XG4gICAgJHJlbmRlcmVkLnJlbW92ZUF0dHIoJ3RpdGxlJyk7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLmRpc3BsYXkgPSBmdW5jdGlvbiAoZGF0YSwgY29udGFpbmVyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLmdldCgndGVtcGxhdGVTZWxlY3Rpb24nKTtcbiAgICB2YXIgZXNjYXBlTWFya3VwID0gdGhpcy5vcHRpb25zLmdldCgnZXNjYXBlTWFya3VwJyk7XG5cbiAgICByZXR1cm4gZXNjYXBlTWFya3VwKHRlbXBsYXRlKGRhdGEsIGNvbnRhaW5lcikpO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5zZWxlY3Rpb25Db250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRjb250YWluZXIgPSAkKFxuICAgICAgJzxsaSBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VcIj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPicgK1xuICAgICAgICAgICcmdGltZXM7JyArXG4gICAgICAgICc8L3NwYW4+JyArXG4gICAgICAnPC9saT4nXG4gICAgKTtcblxuICAgIHJldHVybiAkY29udGFpbmVyO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkc2VsZWN0aW9ucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gZGF0YVtkXTtcblxuICAgICAgdmFyICRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbkNvbnRhaW5lcigpO1xuICAgICAgdmFyIGZvcm1hdHRlZCA9IHRoaXMuZGlzcGxheShzZWxlY3Rpb24sICRzZWxlY3Rpb24pO1xuXG4gICAgICAkc2VsZWN0aW9uLmFwcGVuZChmb3JtYXR0ZWQpO1xuXG4gICAgICB2YXIgdGl0bGUgPSBzZWxlY3Rpb24udGl0bGUgfHwgc2VsZWN0aW9uLnRleHQ7XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAkc2VsZWN0aW9uLmF0dHIoJ3RpdGxlJywgdGl0bGUpO1xuICAgICAgfVxuXG4gICAgICBVdGlscy5TdG9yZURhdGEoJHNlbGVjdGlvblswXSwgJ2RhdGEnLCBzZWxlY3Rpb24pO1xuXG4gICAgICAkc2VsZWN0aW9ucy5wdXNoKCRzZWxlY3Rpb24pO1xuICAgIH1cblxuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuXG4gICAgVXRpbHMuYXBwZW5kTWFueSgkcmVuZGVyZWQsICRzZWxlY3Rpb25zKTtcbiAgfTtcblxuICByZXR1cm4gTXVsdGlwbGVTZWxlY3Rpb247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9wbGFjZWhvbGRlcicsW1xuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoVXRpbHMpIHtcbiAgZnVuY3Rpb24gUGxhY2Vob2xkZXIgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5ub3JtYWxpemVQbGFjZWhvbGRlcihvcHRpb25zLmdldCgncGxhY2Vob2xkZXInKSk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBQbGFjZWhvbGRlci5wcm90b3R5cGUubm9ybWFsaXplUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgcGxhY2Vob2xkZXIpIHtcbiAgICBpZiAodHlwZW9mIHBsYWNlaG9sZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGV4dDogcGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9O1xuXG4gIFBsYWNlaG9sZGVyLnByb3RvdHlwZS5jcmVhdGVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBsYWNlaG9sZGVyKSB7XG4gICAgdmFyICRwbGFjZWhvbGRlciA9IHRoaXMuc2VsZWN0aW9uQ29udGFpbmVyKCk7XG5cbiAgICAkcGxhY2Vob2xkZXIuaHRtbCh0aGlzLmRpc3BsYXkocGxhY2Vob2xkZXIpKTtcbiAgICAkcGxhY2Vob2xkZXIuYWRkQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlcicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlJyk7XG5cbiAgICByZXR1cm4gJHBsYWNlaG9sZGVyO1xuICB9O1xuXG4gIFBsYWNlaG9sZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgdmFyIHNpbmdsZVBsYWNlaG9sZGVyID0gKFxuICAgICAgZGF0YS5sZW5ndGggPT0gMSAmJiBkYXRhWzBdLmlkICE9IHRoaXMucGxhY2Vob2xkZXIuaWRcbiAgICApO1xuICAgIHZhciBtdWx0aXBsZVNlbGVjdGlvbnMgPSBkYXRhLmxlbmd0aCA+IDE7XG5cbiAgICBpZiAobXVsdGlwbGVTZWxlY3Rpb25zIHx8IHNpbmdsZVBsYWNlaG9sZGVyKSB7XG4gICAgICByZXR1cm4gZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdmFyICRwbGFjZWhvbGRlciA9IHRoaXMuY3JlYXRlUGxhY2Vob2xkZXIodGhpcy5wbGFjZWhvbGRlcik7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpLmFwcGVuZCgkcGxhY2Vob2xkZXIpO1xuICB9O1xuXG4gIHJldHVybiBQbGFjZWhvbGRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL2FsbG93Q2xlYXInLFtcbiAgJ2pxdWVyeScsXG4gICcuLi9rZXlzJyxcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIEtFWVMsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIEFsbG93Q2xlYXIgKCkgeyB9XG5cbiAgQWxsb3dDbGVhci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciA9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ1NlbGVjdDI6IFRoZSBgYWxsb3dDbGVhcmAgb3B0aW9uIHNob3VsZCBiZSB1c2VkIGluIGNvbWJpbmF0aW9uICcgK1xuICAgICAgICAgICd3aXRoIHRoZSBgcGxhY2Vob2xkZXJgIG9wdGlvbi4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdtb3VzZWRvd24nLCAnLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhcicsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHNlbGYuX2hhbmRsZUNsZWFyKGV2dCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5faGFuZGxlS2V5Ym9hcmRDbGVhcihldnQsIGNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgQWxsb3dDbGVhci5wcm90b3R5cGUuX2hhbmRsZUNsZWFyID0gZnVuY3Rpb24gKF8sIGV2dCkge1xuICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgaXQgaXMgZGlzYWJsZWRcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJGNsZWFyID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXInKTtcblxuICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgbm90aGluZyBoYXMgYmVlbiBzZWxlY3RlZFxuICAgIGlmICgkY2xlYXIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRjbGVhclswXSwgJ2RhdGEnKTtcblxuICAgIHZhciBwcmV2aW91c1ZhbCA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodGhpcy5wbGFjZWhvbGRlci5pZCk7XG5cbiAgICB2YXIgdW5zZWxlY3REYXRhID0ge1xuICAgICAgZGF0YTogZGF0YVxuICAgIH07XG4gICAgdGhpcy50cmlnZ2VyKCdjbGVhcicsIHVuc2VsZWN0RGF0YSk7XG4gICAgaWYgKHVuc2VsZWN0RGF0YS5wcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudmFsKHByZXZpb3VzVmFsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgIHVuc2VsZWN0RGF0YSA9IHtcbiAgICAgICAgZGF0YTogZGF0YVtkXVxuICAgICAgfTtcblxuICAgICAgLy8gVHJpZ2dlciB0aGUgYHVuc2VsZWN0YCBldmVudCwgc28gcGVvcGxlIGNhbiBwcmV2ZW50IGl0IGZyb20gYmVpbmdcbiAgICAgIC8vIGNsZWFyZWQuXG4gICAgICB0aGlzLnRyaWdnZXIoJ3Vuc2VsZWN0JywgdW5zZWxlY3REYXRhKTtcblxuICAgICAgLy8gSWYgdGhlIGV2ZW50IHdhcyBwcmV2ZW50ZWQsIGRvbid0IGNsZWFyIGl0IG91dC5cbiAgICAgIGlmICh1bnNlbGVjdERhdGEucHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQudmFsKHByZXZpb3VzVmFsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgIHRoaXMudHJpZ2dlcigndG9nZ2xlJywge30pO1xuICB9O1xuXG4gIEFsbG93Q2xlYXIucHJvdG90eXBlLl9oYW5kbGVLZXlib2FyZENsZWFyID0gZnVuY3Rpb24gKF8sIGV2dCwgY29udGFpbmVyKSB7XG4gICAgaWYgKGNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldnQud2hpY2ggPT0gS0VZUy5ERUxFVEUgfHwgZXZ0LndoaWNoID09IEtFWVMuQkFDS1NQQUNFKSB7XG4gICAgICB0aGlzLl9oYW5kbGVDbGVhcihldnQpO1xuICAgIH1cbiAgfTtcblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICBpZiAodGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXInKS5sZW5ndGggPiAwIHx8XG4gICAgICAgIGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJlbW92ZUFsbCA9IHRoaXMub3B0aW9ucy5nZXQoJ3RyYW5zbGF0aW9ucycpLmdldCgncmVtb3ZlQWxsSXRlbXMnKTtcblxuICAgIHZhciAkcmVtb3ZlID0gJChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19jbGVhclwiIHRpdGxlPVwiJyArIHJlbW92ZUFsbCgpICsnXCI+JyArXG4gICAgICAgICcmdGltZXM7JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuICAgIFV0aWxzLlN0b3JlRGF0YSgkcmVtb3ZlWzBdLCAnZGF0YScsIGRhdGEpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKS5wcmVwZW5kKCRyZW1vdmUpO1xuICB9O1xuXG4gIHJldHVybiBBbGxvd0NsZWFyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vc2VhcmNoJyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBTZWFyY2ggKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBTZWFyY2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB2YXIgJHNlYXJjaCA9ICQoXG4gICAgICAnPGxpIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWlubGluZVwiPicgK1xuICAgICAgICAnPGlucHV0IGNsYXNzPVwic2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgdHlwZT1cInNlYXJjaFwiIHRhYmluZGV4PVwiLTFcIicgK1xuICAgICAgICAnIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJub25lXCInICtcbiAgICAgICAgJyBzcGVsbGNoZWNrPVwiZmFsc2VcIiByb2xlPVwic2VhcmNoYm94XCIgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCIgLz4nICtcbiAgICAgICc8L2xpPidcbiAgICApO1xuXG4gICAgdGhpcy4kc2VhcmNoQ29udGFpbmVyID0gJHNlYXJjaDtcbiAgICB0aGlzLiRzZWFyY2ggPSAkc2VhcmNoLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICB2YXIgJHJlbmRlcmVkID0gZGVjb3JhdGVkLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLl90cmFuc2ZlclRhYkluZGV4KCk7XG5cbiAgICByZXR1cm4gJHJlbmRlcmVkO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciByZXN1bHRzSWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgcmVzdWx0c0lkKTtcbiAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC52YWwoJycpO1xuICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdlbmFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2gucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgIHNlbGYuX3RyYW5zZmVyVGFiSW5kZXgoKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZGlzYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgaWYgKHBhcmFtcy5kYXRhLl9yZXN1bHRJZCkge1xuICAgICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgcGFyYW1zLmRhdGEuX3Jlc3VsdElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXNpbicsICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignZm9jdXMnLCBldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1c291dCcsICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX2hhbmRsZUJsdXIoZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbigna2V5ZG93bicsICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgc2VsZi50cmlnZ2VyKCdrZXlwcmVzcycsIGV2dCk7XG5cbiAgICAgIHNlbGYuX2tleVVwUHJldmVudGVkID0gZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xuXG4gICAgICB2YXIga2V5ID0gZXZ0LndoaWNoO1xuXG4gICAgICBpZiAoa2V5ID09PSBLRVlTLkJBQ0tTUEFDRSAmJiBzZWxmLiRzZWFyY2gudmFsKCkgPT09ICcnKSB7XG4gICAgICAgIHZhciAkcHJldmlvdXNDaG9pY2UgPSBzZWxmLiRzZWFyY2hDb250YWluZXJcbiAgICAgICAgICAucHJldignLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2UnKTtcblxuICAgICAgICBpZiAoJHByZXZpb3VzQ2hvaWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IFV0aWxzLkdldERhdGEoJHByZXZpb3VzQ2hvaWNlWzBdLCAnZGF0YScpO1xuXG4gICAgICAgICAgc2VsZi5zZWFyY2hSZW1vdmVDaG9pY2UoaXRlbSk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdjbGljaycsICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChzZWxmLiRzZWFyY2gudmFsKCkpIHtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVHJ5IHRvIGRldGVjdCB0aGUgSUUgdmVyc2lvbiBzaG91bGQgdGhlIGBkb2N1bWVudE1vZGVgIHByb3BlcnR5IHRoYXRcbiAgICAvLyBpcyBzdG9yZWQgb24gdGhlIGRvY3VtZW50LiBUaGlzIGlzIG9ubHkgaW1wbGVtZW50ZWQgaW4gSUUgYW5kIGlzXG4gICAgLy8gc2xpZ2h0bHkgY2xlYW5lciB0aGFuIGRvaW5nIGEgdXNlciBhZ2VudCBjaGVjay5cbiAgICAvLyBUaGlzIHByb3BlcnR5IGlzIG5vdCBhdmFpbGFibGUgaW4gRWRnZSwgYnV0IEVkZ2UgYWxzbyBkb2Vzbid0IGhhdmVcbiAgICAvLyB0aGlzIGJ1Zy5cbiAgICB2YXIgbXNpZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcbiAgICB2YXIgZGlzYWJsZUlucHV0RXZlbnRzID0gbXNpZSAmJiBtc2llIDw9IDExO1xuXG4gICAgLy8gV29ya2Fyb3VuZCBmb3IgYnJvd3NlcnMgd2hpY2ggZG8gbm90IHN1cHBvcnQgdGhlIGBpbnB1dGAgZXZlbnRcbiAgICAvLyBUaGlzIHdpbGwgcHJldmVudCBkb3VibGUtdHJpZ2dlcmluZyBvZiBldmVudHMgZm9yIGJyb3dzZXJzIHdoaWNoIHN1cHBvcnRcbiAgICAvLyBib3RoIHRoZSBga2V5dXBgIGFuZCBgaW5wdXRgIGV2ZW50cy5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oXG4gICAgICAnaW5wdXQuc2VhcmNoY2hlY2snLFxuICAgICAgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gSUUgd2lsbCB0cmlnZ2VyIHRoZSBgaW5wdXRgIGV2ZW50IHdoZW4gYSBwbGFjZWhvbGRlciBpcyB1c2VkIG9uIGFcbiAgICAgICAgLy8gc2VhcmNoIGJveC4gVG8gZ2V0IGFyb3VuZCB0aGlzIGlzc3VlLCB3ZSBhcmUgZm9yY2VkIHRvIGlnbm9yZSBhbGxcbiAgICAgICAgLy8gYGlucHV0YCBldmVudHMgaW4gSUUgYW5kIGtlZXAgdXNpbmcgYGtleXVwYC5cbiAgICAgICAgaWYgKGRpc2FibGVJbnB1dEV2ZW50cykge1xuICAgICAgICAgIHNlbGYuJHNlbGVjdGlvbi5vZmYoJ2lucHV0LnNlYXJjaCBpbnB1dC5zZWFyY2hjaGVjaycpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVuYmluZCB0aGUgZHVwbGljYXRlZCBga2V5dXBgIGV2ZW50XG4gICAgICAgIHNlbGYuJHNlbGVjdGlvbi5vZmYoJ2tleXVwLnNlYXJjaCcpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oXG4gICAgICAna2V5dXAuc2VhcmNoIGlucHV0LnNlYXJjaCcsXG4gICAgICAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyBJRSB3aWxsIHRyaWdnZXIgdGhlIGBpbnB1dGAgZXZlbnQgd2hlbiBhIHBsYWNlaG9sZGVyIGlzIHVzZWQgb24gYVxuICAgICAgICAvLyBzZWFyY2ggYm94LiBUbyBnZXQgYXJvdW5kIHRoaXMgaXNzdWUsIHdlIGFyZSBmb3JjZWQgdG8gaWdub3JlIGFsbFxuICAgICAgICAvLyBgaW5wdXRgIGV2ZW50cyBpbiBJRSBhbmQga2VlcCB1c2luZyBga2V5dXBgLlxuICAgICAgICBpZiAoZGlzYWJsZUlucHV0RXZlbnRzICYmIGV2dC50eXBlID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLm9mZignaW5wdXQuc2VhcmNoIGlucHV0LnNlYXJjaGNoZWNrJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleSA9IGV2dC53aGljaDtcblxuICAgICAgICAvLyBXZSBjYW4gZnJlZWx5IGlnbm9yZSBldmVudHMgZnJvbSBtb2RpZmllciBrZXlzXG4gICAgICAgIGlmIChrZXkgPT0gS0VZUy5TSElGVCB8fCBrZXkgPT0gS0VZUy5DVFJMIHx8IGtleSA9PSBLRVlTLkFMVCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRhYmJpbmcgd2lsbCBiZSBoYW5kbGVkIGR1cmluZyB0aGUgYGtleWRvd25gIHBoYXNlXG4gICAgICAgIGlmIChrZXkgPT0gS0VZUy5UQUIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmhhbmRsZVNlYXJjaChldnQpO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgdHJhbnNmZXIgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIHRoZSByZW5kZXJlZFxuICAgKiBzZWxlY3Rpb24gdG8gdGhlIHNlYXJjaCBib3guIFRoaXMgYWxsb3dzIGZvciB0aGUgc2VhcmNoIGJveCB0byBiZSB1c2VkIGFzXG4gICAqIHRoZSBwcmltYXJ5IGZvY3VzIGluc3RlYWQgb2YgdGhlIHNlbGVjdGlvbiBjb250YWluZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBTZWFyY2gucHJvdG90eXBlLl90cmFuc2ZlclRhYkluZGV4ID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHRoaXMuJHNlYXJjaC5hdHRyKCd0YWJpbmRleCcsIHRoaXMuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcpKTtcbiAgICB0aGlzLiRzZWxlY3Rpb24uYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmNyZWF0ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGxhY2Vob2xkZXIpIHtcbiAgICB0aGlzLiRzZWFyY2guYXR0cigncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlci50ZXh0KTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICB2YXIgc2VhcmNoSGFkRm9jdXMgPSB0aGlzLiRzZWFyY2hbMF0gPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuJHNlYXJjaC5hdHRyKCdwbGFjZWhvbGRlcicsICcnKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKVxuICAgICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy4kc2VhcmNoQ29udGFpbmVyKTtcblxuICAgIHRoaXMucmVzaXplU2VhcmNoKCk7XG4gICAgaWYgKHNlYXJjaEhhZEZvY3VzKSB7XG4gICAgICB0aGlzLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5oYW5kbGVTZWFyY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXNpemVTZWFyY2goKTtcblxuICAgIGlmICghdGhpcy5fa2V5VXBQcmV2ZW50ZWQpIHtcbiAgICAgIHZhciBpbnB1dCA9IHRoaXMuJHNlYXJjaC52YWwoKTtcblxuICAgICAgdGhpcy50cmlnZ2VyKCdxdWVyeScsIHtcbiAgICAgICAgdGVybTogaW5wdXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2tleVVwUHJldmVudGVkID0gZmFsc2U7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5zZWFyY2hSZW1vdmVDaG9pY2UgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBpdGVtKSB7XG4gICAgdGhpcy50cmlnZ2VyKCd1bnNlbGVjdCcsIHtcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KTtcblxuICAgIHRoaXMuJHNlYXJjaC52YWwoaXRlbS50ZXh0KTtcbiAgICB0aGlzLmhhbmRsZVNlYXJjaCgpO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUucmVzaXplU2VhcmNoID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJHNlYXJjaC5jc3MoJ3dpZHRoJywgJzI1cHgnKTtcblxuICAgIHZhciB3aWR0aCA9ICcnO1xuXG4gICAgaWYgKHRoaXMuJHNlYXJjaC5hdHRyKCdwbGFjZWhvbGRlcicpICE9PSAnJykge1xuICAgICAgd2lkdGggPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpLndpZHRoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtaW5pbXVtV2lkdGggPSB0aGlzLiRzZWFyY2gudmFsKCkubGVuZ3RoICsgMTtcblxuICAgICAgd2lkdGggPSAobWluaW11bVdpZHRoICogMC43NSkgKyAnZW0nO1xuICAgIH1cblxuICAgIHRoaXMuJHNlYXJjaC5jc3MoJ3dpZHRoJywgd2lkdGgpO1xuICB9O1xuXG4gIHJldHVybiBTZWFyY2g7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9ldmVudFJlbGF5JyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBFdmVudFJlbGF5ICgpIHsgfVxuXG4gIEV2ZW50UmVsYXkucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHJlbGF5RXZlbnRzID0gW1xuICAgICAgJ29wZW4nLCAnb3BlbmluZycsXG4gICAgICAnY2xvc2UnLCAnY2xvc2luZycsXG4gICAgICAnc2VsZWN0JywgJ3NlbGVjdGluZycsXG4gICAgICAndW5zZWxlY3QnLCAndW5zZWxlY3RpbmcnLFxuICAgICAgJ2NsZWFyJywgJ2NsZWFyaW5nJ1xuICAgIF07XG5cbiAgICB2YXIgcHJldmVudGFibGVFdmVudHMgPSBbXG4gICAgICAnb3BlbmluZycsICdjbG9zaW5nJywgJ3NlbGVjdGluZycsICd1bnNlbGVjdGluZycsICdjbGVhcmluZydcbiAgICBdO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIC8vIElnbm9yZSBldmVudHMgdGhhdCBzaG91bGQgbm90IGJlIHJlbGF5ZWRcbiAgICAgIGlmICgkLmluQXJyYXkobmFtZSwgcmVsYXlFdmVudHMpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBwYXJhbWV0ZXJzIHNob3VsZCBhbHdheXMgYmUgYW4gb2JqZWN0XG4gICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICAgIC8vIEdlbmVyYXRlIHRoZSBqUXVlcnkgZXZlbnQgZm9yIHRoZSBTZWxlY3QyIGV2ZW50XG4gICAgICB2YXIgZXZ0ID0gJC5FdmVudCgnc2VsZWN0MjonICsgbmFtZSwge1xuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcihldnQpO1xuXG4gICAgICAvLyBPbmx5IGhhbmRsZSBwcmV2ZW50YWJsZSBldmVudHMgaWYgaXQgd2FzIG9uZVxuICAgICAgaWYgKCQuaW5BcnJheShuYW1lLCBwcmV2ZW50YWJsZUV2ZW50cykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnByZXZlbnRlZCA9IGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRXZlbnRSZWxheTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvdHJhbnNsYXRpb24nLFtcbiAgJ2pxdWVyeScsXG4gICdyZXF1aXJlJ1xuXSwgZnVuY3Rpb24gKCQsIHJlcXVpcmUpIHtcbiAgZnVuY3Rpb24gVHJhbnNsYXRpb24gKGRpY3QpIHtcbiAgICB0aGlzLmRpY3QgPSBkaWN0IHx8IHt9O1xuICB9XG5cbiAgVHJhbnNsYXRpb24ucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kaWN0O1xuICB9O1xuXG4gIFRyYW5zbGF0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGljdFtrZXldO1xuICB9O1xuXG4gIFRyYW5zbGF0aW9uLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAodHJhbnNsYXRpb24pIHtcbiAgICB0aGlzLmRpY3QgPSAkLmV4dGVuZCh7fSwgdHJhbnNsYXRpb24uYWxsKCksIHRoaXMuZGljdCk7XG4gIH07XG5cbiAgLy8gU3RhdGljIGZ1bmN0aW9uc1xuXG4gIFRyYW5zbGF0aW9uLl9jYWNoZSA9IHt9O1xuXG4gIFRyYW5zbGF0aW9uLmxvYWRQYXRoID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICBpZiAoIShwYXRoIGluIFRyYW5zbGF0aW9uLl9jYWNoZSkpIHtcbiAgICAgIHZhciB0cmFuc2xhdGlvbnMgPSByZXF1aXJlKHBhdGgpO1xuXG4gICAgICBUcmFuc2xhdGlvbi5fY2FjaGVbcGF0aF0gPSB0cmFuc2xhdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvbihUcmFuc2xhdGlvbi5fY2FjaGVbcGF0aF0pO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2xhdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGlhY3JpdGljcycsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBkaWFjcml0aWNzID0ge1xuICAgICdcXHUyNEI2JzogJ0EnLFxuICAgICdcXHVGRjIxJzogJ0EnLFxuICAgICdcXHUwMEMwJzogJ0EnLFxuICAgICdcXHUwMEMxJzogJ0EnLFxuICAgICdcXHUwMEMyJzogJ0EnLFxuICAgICdcXHUxRUE2JzogJ0EnLFxuICAgICdcXHUxRUE0JzogJ0EnLFxuICAgICdcXHUxRUFBJzogJ0EnLFxuICAgICdcXHUxRUE4JzogJ0EnLFxuICAgICdcXHUwMEMzJzogJ0EnLFxuICAgICdcXHUwMTAwJzogJ0EnLFxuICAgICdcXHUwMTAyJzogJ0EnLFxuICAgICdcXHUxRUIwJzogJ0EnLFxuICAgICdcXHUxRUFFJzogJ0EnLFxuICAgICdcXHUxRUI0JzogJ0EnLFxuICAgICdcXHUxRUIyJzogJ0EnLFxuICAgICdcXHUwMjI2JzogJ0EnLFxuICAgICdcXHUwMUUwJzogJ0EnLFxuICAgICdcXHUwMEM0JzogJ0EnLFxuICAgICdcXHUwMURFJzogJ0EnLFxuICAgICdcXHUxRUEyJzogJ0EnLFxuICAgICdcXHUwMEM1JzogJ0EnLFxuICAgICdcXHUwMUZBJzogJ0EnLFxuICAgICdcXHUwMUNEJzogJ0EnLFxuICAgICdcXHUwMjAwJzogJ0EnLFxuICAgICdcXHUwMjAyJzogJ0EnLFxuICAgICdcXHUxRUEwJzogJ0EnLFxuICAgICdcXHUxRUFDJzogJ0EnLFxuICAgICdcXHUxRUI2JzogJ0EnLFxuICAgICdcXHUxRTAwJzogJ0EnLFxuICAgICdcXHUwMTA0JzogJ0EnLFxuICAgICdcXHUwMjNBJzogJ0EnLFxuICAgICdcXHUyQzZGJzogJ0EnLFxuICAgICdcXHVBNzMyJzogJ0FBJyxcbiAgICAnXFx1MDBDNic6ICdBRScsXG4gICAgJ1xcdTAxRkMnOiAnQUUnLFxuICAgICdcXHUwMUUyJzogJ0FFJyxcbiAgICAnXFx1QTczNCc6ICdBTycsXG4gICAgJ1xcdUE3MzYnOiAnQVUnLFxuICAgICdcXHVBNzM4JzogJ0FWJyxcbiAgICAnXFx1QTczQSc6ICdBVicsXG4gICAgJ1xcdUE3M0MnOiAnQVknLFxuICAgICdcXHUyNEI3JzogJ0InLFxuICAgICdcXHVGRjIyJzogJ0InLFxuICAgICdcXHUxRTAyJzogJ0InLFxuICAgICdcXHUxRTA0JzogJ0InLFxuICAgICdcXHUxRTA2JzogJ0InLFxuICAgICdcXHUwMjQzJzogJ0InLFxuICAgICdcXHUwMTgyJzogJ0InLFxuICAgICdcXHUwMTgxJzogJ0InLFxuICAgICdcXHUyNEI4JzogJ0MnLFxuICAgICdcXHVGRjIzJzogJ0MnLFxuICAgICdcXHUwMTA2JzogJ0MnLFxuICAgICdcXHUwMTA4JzogJ0MnLFxuICAgICdcXHUwMTBBJzogJ0MnLFxuICAgICdcXHUwMTBDJzogJ0MnLFxuICAgICdcXHUwMEM3JzogJ0MnLFxuICAgICdcXHUxRTA4JzogJ0MnLFxuICAgICdcXHUwMTg3JzogJ0MnLFxuICAgICdcXHUwMjNCJzogJ0MnLFxuICAgICdcXHVBNzNFJzogJ0MnLFxuICAgICdcXHUyNEI5JzogJ0QnLFxuICAgICdcXHVGRjI0JzogJ0QnLFxuICAgICdcXHUxRTBBJzogJ0QnLFxuICAgICdcXHUwMTBFJzogJ0QnLFxuICAgICdcXHUxRTBDJzogJ0QnLFxuICAgICdcXHUxRTEwJzogJ0QnLFxuICAgICdcXHUxRTEyJzogJ0QnLFxuICAgICdcXHUxRTBFJzogJ0QnLFxuICAgICdcXHUwMTEwJzogJ0QnLFxuICAgICdcXHUwMThCJzogJ0QnLFxuICAgICdcXHUwMThBJzogJ0QnLFxuICAgICdcXHUwMTg5JzogJ0QnLFxuICAgICdcXHVBNzc5JzogJ0QnLFxuICAgICdcXHUwMUYxJzogJ0RaJyxcbiAgICAnXFx1MDFDNCc6ICdEWicsXG4gICAgJ1xcdTAxRjInOiAnRHonLFxuICAgICdcXHUwMUM1JzogJ0R6JyxcbiAgICAnXFx1MjRCQSc6ICdFJyxcbiAgICAnXFx1RkYyNSc6ICdFJyxcbiAgICAnXFx1MDBDOCc6ICdFJyxcbiAgICAnXFx1MDBDOSc6ICdFJyxcbiAgICAnXFx1MDBDQSc6ICdFJyxcbiAgICAnXFx1MUVDMCc6ICdFJyxcbiAgICAnXFx1MUVCRSc6ICdFJyxcbiAgICAnXFx1MUVDNCc6ICdFJyxcbiAgICAnXFx1MUVDMic6ICdFJyxcbiAgICAnXFx1MUVCQyc6ICdFJyxcbiAgICAnXFx1MDExMic6ICdFJyxcbiAgICAnXFx1MUUxNCc6ICdFJyxcbiAgICAnXFx1MUUxNic6ICdFJyxcbiAgICAnXFx1MDExNCc6ICdFJyxcbiAgICAnXFx1MDExNic6ICdFJyxcbiAgICAnXFx1MDBDQic6ICdFJyxcbiAgICAnXFx1MUVCQSc6ICdFJyxcbiAgICAnXFx1MDExQSc6ICdFJyxcbiAgICAnXFx1MDIwNCc6ICdFJyxcbiAgICAnXFx1MDIwNic6ICdFJyxcbiAgICAnXFx1MUVCOCc6ICdFJyxcbiAgICAnXFx1MUVDNic6ICdFJyxcbiAgICAnXFx1MDIyOCc6ICdFJyxcbiAgICAnXFx1MUUxQyc6ICdFJyxcbiAgICAnXFx1MDExOCc6ICdFJyxcbiAgICAnXFx1MUUxOCc6ICdFJyxcbiAgICAnXFx1MUUxQSc6ICdFJyxcbiAgICAnXFx1MDE5MCc6ICdFJyxcbiAgICAnXFx1MDE4RSc6ICdFJyxcbiAgICAnXFx1MjRCQic6ICdGJyxcbiAgICAnXFx1RkYyNic6ICdGJyxcbiAgICAnXFx1MUUxRSc6ICdGJyxcbiAgICAnXFx1MDE5MSc6ICdGJyxcbiAgICAnXFx1QTc3Qic6ICdGJyxcbiAgICAnXFx1MjRCQyc6ICdHJyxcbiAgICAnXFx1RkYyNyc6ICdHJyxcbiAgICAnXFx1MDFGNCc6ICdHJyxcbiAgICAnXFx1MDExQyc6ICdHJyxcbiAgICAnXFx1MUUyMCc6ICdHJyxcbiAgICAnXFx1MDExRSc6ICdHJyxcbiAgICAnXFx1MDEyMCc6ICdHJyxcbiAgICAnXFx1MDFFNic6ICdHJyxcbiAgICAnXFx1MDEyMic6ICdHJyxcbiAgICAnXFx1MDFFNCc6ICdHJyxcbiAgICAnXFx1MDE5Myc6ICdHJyxcbiAgICAnXFx1QTdBMCc6ICdHJyxcbiAgICAnXFx1QTc3RCc6ICdHJyxcbiAgICAnXFx1QTc3RSc6ICdHJyxcbiAgICAnXFx1MjRCRCc6ICdIJyxcbiAgICAnXFx1RkYyOCc6ICdIJyxcbiAgICAnXFx1MDEyNCc6ICdIJyxcbiAgICAnXFx1MUUyMic6ICdIJyxcbiAgICAnXFx1MUUyNic6ICdIJyxcbiAgICAnXFx1MDIxRSc6ICdIJyxcbiAgICAnXFx1MUUyNCc6ICdIJyxcbiAgICAnXFx1MUUyOCc6ICdIJyxcbiAgICAnXFx1MUUyQSc6ICdIJyxcbiAgICAnXFx1MDEyNic6ICdIJyxcbiAgICAnXFx1MkM2Nyc6ICdIJyxcbiAgICAnXFx1MkM3NSc6ICdIJyxcbiAgICAnXFx1QTc4RCc6ICdIJyxcbiAgICAnXFx1MjRCRSc6ICdJJyxcbiAgICAnXFx1RkYyOSc6ICdJJyxcbiAgICAnXFx1MDBDQyc6ICdJJyxcbiAgICAnXFx1MDBDRCc6ICdJJyxcbiAgICAnXFx1MDBDRSc6ICdJJyxcbiAgICAnXFx1MDEyOCc6ICdJJyxcbiAgICAnXFx1MDEyQSc6ICdJJyxcbiAgICAnXFx1MDEyQyc6ICdJJyxcbiAgICAnXFx1MDEzMCc6ICdJJyxcbiAgICAnXFx1MDBDRic6ICdJJyxcbiAgICAnXFx1MUUyRSc6ICdJJyxcbiAgICAnXFx1MUVDOCc6ICdJJyxcbiAgICAnXFx1MDFDRic6ICdJJyxcbiAgICAnXFx1MDIwOCc6ICdJJyxcbiAgICAnXFx1MDIwQSc6ICdJJyxcbiAgICAnXFx1MUVDQSc6ICdJJyxcbiAgICAnXFx1MDEyRSc6ICdJJyxcbiAgICAnXFx1MUUyQyc6ICdJJyxcbiAgICAnXFx1MDE5Nyc6ICdJJyxcbiAgICAnXFx1MjRCRic6ICdKJyxcbiAgICAnXFx1RkYyQSc6ICdKJyxcbiAgICAnXFx1MDEzNCc6ICdKJyxcbiAgICAnXFx1MDI0OCc6ICdKJyxcbiAgICAnXFx1MjRDMCc6ICdLJyxcbiAgICAnXFx1RkYyQic6ICdLJyxcbiAgICAnXFx1MUUzMCc6ICdLJyxcbiAgICAnXFx1MDFFOCc6ICdLJyxcbiAgICAnXFx1MUUzMic6ICdLJyxcbiAgICAnXFx1MDEzNic6ICdLJyxcbiAgICAnXFx1MUUzNCc6ICdLJyxcbiAgICAnXFx1MDE5OCc6ICdLJyxcbiAgICAnXFx1MkM2OSc6ICdLJyxcbiAgICAnXFx1QTc0MCc6ICdLJyxcbiAgICAnXFx1QTc0Mic6ICdLJyxcbiAgICAnXFx1QTc0NCc6ICdLJyxcbiAgICAnXFx1QTdBMic6ICdLJyxcbiAgICAnXFx1MjRDMSc6ICdMJyxcbiAgICAnXFx1RkYyQyc6ICdMJyxcbiAgICAnXFx1MDEzRic6ICdMJyxcbiAgICAnXFx1MDEzOSc6ICdMJyxcbiAgICAnXFx1MDEzRCc6ICdMJyxcbiAgICAnXFx1MUUzNic6ICdMJyxcbiAgICAnXFx1MUUzOCc6ICdMJyxcbiAgICAnXFx1MDEzQic6ICdMJyxcbiAgICAnXFx1MUUzQyc6ICdMJyxcbiAgICAnXFx1MUUzQSc6ICdMJyxcbiAgICAnXFx1MDE0MSc6ICdMJyxcbiAgICAnXFx1MDIzRCc6ICdMJyxcbiAgICAnXFx1MkM2Mic6ICdMJyxcbiAgICAnXFx1MkM2MCc6ICdMJyxcbiAgICAnXFx1QTc0OCc6ICdMJyxcbiAgICAnXFx1QTc0Nic6ICdMJyxcbiAgICAnXFx1QTc4MCc6ICdMJyxcbiAgICAnXFx1MDFDNyc6ICdMSicsXG4gICAgJ1xcdTAxQzgnOiAnTGonLFxuICAgICdcXHUyNEMyJzogJ00nLFxuICAgICdcXHVGRjJEJzogJ00nLFxuICAgICdcXHUxRTNFJzogJ00nLFxuICAgICdcXHUxRTQwJzogJ00nLFxuICAgICdcXHUxRTQyJzogJ00nLFxuICAgICdcXHUyQzZFJzogJ00nLFxuICAgICdcXHUwMTlDJzogJ00nLFxuICAgICdcXHUyNEMzJzogJ04nLFxuICAgICdcXHVGRjJFJzogJ04nLFxuICAgICdcXHUwMUY4JzogJ04nLFxuICAgICdcXHUwMTQzJzogJ04nLFxuICAgICdcXHUwMEQxJzogJ04nLFxuICAgICdcXHUxRTQ0JzogJ04nLFxuICAgICdcXHUwMTQ3JzogJ04nLFxuICAgICdcXHUxRTQ2JzogJ04nLFxuICAgICdcXHUwMTQ1JzogJ04nLFxuICAgICdcXHUxRTRBJzogJ04nLFxuICAgICdcXHUxRTQ4JzogJ04nLFxuICAgICdcXHUwMjIwJzogJ04nLFxuICAgICdcXHUwMTlEJzogJ04nLFxuICAgICdcXHVBNzkwJzogJ04nLFxuICAgICdcXHVBN0E0JzogJ04nLFxuICAgICdcXHUwMUNBJzogJ05KJyxcbiAgICAnXFx1MDFDQic6ICdOaicsXG4gICAgJ1xcdTI0QzQnOiAnTycsXG4gICAgJ1xcdUZGMkYnOiAnTycsXG4gICAgJ1xcdTAwRDInOiAnTycsXG4gICAgJ1xcdTAwRDMnOiAnTycsXG4gICAgJ1xcdTAwRDQnOiAnTycsXG4gICAgJ1xcdTFFRDInOiAnTycsXG4gICAgJ1xcdTFFRDAnOiAnTycsXG4gICAgJ1xcdTFFRDYnOiAnTycsXG4gICAgJ1xcdTFFRDQnOiAnTycsXG4gICAgJ1xcdTAwRDUnOiAnTycsXG4gICAgJ1xcdTFFNEMnOiAnTycsXG4gICAgJ1xcdTAyMkMnOiAnTycsXG4gICAgJ1xcdTFFNEUnOiAnTycsXG4gICAgJ1xcdTAxNEMnOiAnTycsXG4gICAgJ1xcdTFFNTAnOiAnTycsXG4gICAgJ1xcdTFFNTInOiAnTycsXG4gICAgJ1xcdTAxNEUnOiAnTycsXG4gICAgJ1xcdTAyMkUnOiAnTycsXG4gICAgJ1xcdTAyMzAnOiAnTycsXG4gICAgJ1xcdTAwRDYnOiAnTycsXG4gICAgJ1xcdTAyMkEnOiAnTycsXG4gICAgJ1xcdTFFQ0UnOiAnTycsXG4gICAgJ1xcdTAxNTAnOiAnTycsXG4gICAgJ1xcdTAxRDEnOiAnTycsXG4gICAgJ1xcdTAyMEMnOiAnTycsXG4gICAgJ1xcdTAyMEUnOiAnTycsXG4gICAgJ1xcdTAxQTAnOiAnTycsXG4gICAgJ1xcdTFFREMnOiAnTycsXG4gICAgJ1xcdTFFREEnOiAnTycsXG4gICAgJ1xcdTFFRTAnOiAnTycsXG4gICAgJ1xcdTFFREUnOiAnTycsXG4gICAgJ1xcdTFFRTInOiAnTycsXG4gICAgJ1xcdTFFQ0MnOiAnTycsXG4gICAgJ1xcdTFFRDgnOiAnTycsXG4gICAgJ1xcdTAxRUEnOiAnTycsXG4gICAgJ1xcdTAxRUMnOiAnTycsXG4gICAgJ1xcdTAwRDgnOiAnTycsXG4gICAgJ1xcdTAxRkUnOiAnTycsXG4gICAgJ1xcdTAxODYnOiAnTycsXG4gICAgJ1xcdTAxOUYnOiAnTycsXG4gICAgJ1xcdUE3NEEnOiAnTycsXG4gICAgJ1xcdUE3NEMnOiAnTycsXG4gICAgJ1xcdTAxNTInOiAnT0UnLFxuICAgICdcXHUwMUEyJzogJ09JJyxcbiAgICAnXFx1QTc0RSc6ICdPTycsXG4gICAgJ1xcdTAyMjInOiAnT1UnLFxuICAgICdcXHUyNEM1JzogJ1AnLFxuICAgICdcXHVGRjMwJzogJ1AnLFxuICAgICdcXHUxRTU0JzogJ1AnLFxuICAgICdcXHUxRTU2JzogJ1AnLFxuICAgICdcXHUwMUE0JzogJ1AnLFxuICAgICdcXHUyQzYzJzogJ1AnLFxuICAgICdcXHVBNzUwJzogJ1AnLFxuICAgICdcXHVBNzUyJzogJ1AnLFxuICAgICdcXHVBNzU0JzogJ1AnLFxuICAgICdcXHUyNEM2JzogJ1EnLFxuICAgICdcXHVGRjMxJzogJ1EnLFxuICAgICdcXHVBNzU2JzogJ1EnLFxuICAgICdcXHVBNzU4JzogJ1EnLFxuICAgICdcXHUwMjRBJzogJ1EnLFxuICAgICdcXHUyNEM3JzogJ1InLFxuICAgICdcXHVGRjMyJzogJ1InLFxuICAgICdcXHUwMTU0JzogJ1InLFxuICAgICdcXHUxRTU4JzogJ1InLFxuICAgICdcXHUwMTU4JzogJ1InLFxuICAgICdcXHUwMjEwJzogJ1InLFxuICAgICdcXHUwMjEyJzogJ1InLFxuICAgICdcXHUxRTVBJzogJ1InLFxuICAgICdcXHUxRTVDJzogJ1InLFxuICAgICdcXHUwMTU2JzogJ1InLFxuICAgICdcXHUxRTVFJzogJ1InLFxuICAgICdcXHUwMjRDJzogJ1InLFxuICAgICdcXHUyQzY0JzogJ1InLFxuICAgICdcXHVBNzVBJzogJ1InLFxuICAgICdcXHVBN0E2JzogJ1InLFxuICAgICdcXHVBNzgyJzogJ1InLFxuICAgICdcXHUyNEM4JzogJ1MnLFxuICAgICdcXHVGRjMzJzogJ1MnLFxuICAgICdcXHUxRTlFJzogJ1MnLFxuICAgICdcXHUwMTVBJzogJ1MnLFxuICAgICdcXHUxRTY0JzogJ1MnLFxuICAgICdcXHUwMTVDJzogJ1MnLFxuICAgICdcXHUxRTYwJzogJ1MnLFxuICAgICdcXHUwMTYwJzogJ1MnLFxuICAgICdcXHUxRTY2JzogJ1MnLFxuICAgICdcXHUxRTYyJzogJ1MnLFxuICAgICdcXHUxRTY4JzogJ1MnLFxuICAgICdcXHUwMjE4JzogJ1MnLFxuICAgICdcXHUwMTVFJzogJ1MnLFxuICAgICdcXHUyQzdFJzogJ1MnLFxuICAgICdcXHVBN0E4JzogJ1MnLFxuICAgICdcXHVBNzg0JzogJ1MnLFxuICAgICdcXHUyNEM5JzogJ1QnLFxuICAgICdcXHVGRjM0JzogJ1QnLFxuICAgICdcXHUxRTZBJzogJ1QnLFxuICAgICdcXHUwMTY0JzogJ1QnLFxuICAgICdcXHUxRTZDJzogJ1QnLFxuICAgICdcXHUwMjFBJzogJ1QnLFxuICAgICdcXHUwMTYyJzogJ1QnLFxuICAgICdcXHUxRTcwJzogJ1QnLFxuICAgICdcXHUxRTZFJzogJ1QnLFxuICAgICdcXHUwMTY2JzogJ1QnLFxuICAgICdcXHUwMUFDJzogJ1QnLFxuICAgICdcXHUwMUFFJzogJ1QnLFxuICAgICdcXHUwMjNFJzogJ1QnLFxuICAgICdcXHVBNzg2JzogJ1QnLFxuICAgICdcXHVBNzI4JzogJ1RaJyxcbiAgICAnXFx1MjRDQSc6ICdVJyxcbiAgICAnXFx1RkYzNSc6ICdVJyxcbiAgICAnXFx1MDBEOSc6ICdVJyxcbiAgICAnXFx1MDBEQSc6ICdVJyxcbiAgICAnXFx1MDBEQic6ICdVJyxcbiAgICAnXFx1MDE2OCc6ICdVJyxcbiAgICAnXFx1MUU3OCc6ICdVJyxcbiAgICAnXFx1MDE2QSc6ICdVJyxcbiAgICAnXFx1MUU3QSc6ICdVJyxcbiAgICAnXFx1MDE2Qyc6ICdVJyxcbiAgICAnXFx1MDBEQyc6ICdVJyxcbiAgICAnXFx1MDFEQic6ICdVJyxcbiAgICAnXFx1MDFENyc6ICdVJyxcbiAgICAnXFx1MDFENSc6ICdVJyxcbiAgICAnXFx1MDFEOSc6ICdVJyxcbiAgICAnXFx1MUVFNic6ICdVJyxcbiAgICAnXFx1MDE2RSc6ICdVJyxcbiAgICAnXFx1MDE3MCc6ICdVJyxcbiAgICAnXFx1MDFEMyc6ICdVJyxcbiAgICAnXFx1MDIxNCc6ICdVJyxcbiAgICAnXFx1MDIxNic6ICdVJyxcbiAgICAnXFx1MDFBRic6ICdVJyxcbiAgICAnXFx1MUVFQSc6ICdVJyxcbiAgICAnXFx1MUVFOCc6ICdVJyxcbiAgICAnXFx1MUVFRSc6ICdVJyxcbiAgICAnXFx1MUVFQyc6ICdVJyxcbiAgICAnXFx1MUVGMCc6ICdVJyxcbiAgICAnXFx1MUVFNCc6ICdVJyxcbiAgICAnXFx1MUU3Mic6ICdVJyxcbiAgICAnXFx1MDE3Mic6ICdVJyxcbiAgICAnXFx1MUU3Nic6ICdVJyxcbiAgICAnXFx1MUU3NCc6ICdVJyxcbiAgICAnXFx1MDI0NCc6ICdVJyxcbiAgICAnXFx1MjRDQic6ICdWJyxcbiAgICAnXFx1RkYzNic6ICdWJyxcbiAgICAnXFx1MUU3Qyc6ICdWJyxcbiAgICAnXFx1MUU3RSc6ICdWJyxcbiAgICAnXFx1MDFCMic6ICdWJyxcbiAgICAnXFx1QTc1RSc6ICdWJyxcbiAgICAnXFx1MDI0NSc6ICdWJyxcbiAgICAnXFx1QTc2MCc6ICdWWScsXG4gICAgJ1xcdTI0Q0MnOiAnVycsXG4gICAgJ1xcdUZGMzcnOiAnVycsXG4gICAgJ1xcdTFFODAnOiAnVycsXG4gICAgJ1xcdTFFODInOiAnVycsXG4gICAgJ1xcdTAxNzQnOiAnVycsXG4gICAgJ1xcdTFFODYnOiAnVycsXG4gICAgJ1xcdTFFODQnOiAnVycsXG4gICAgJ1xcdTFFODgnOiAnVycsXG4gICAgJ1xcdTJDNzInOiAnVycsXG4gICAgJ1xcdTI0Q0QnOiAnWCcsXG4gICAgJ1xcdUZGMzgnOiAnWCcsXG4gICAgJ1xcdTFFOEEnOiAnWCcsXG4gICAgJ1xcdTFFOEMnOiAnWCcsXG4gICAgJ1xcdTI0Q0UnOiAnWScsXG4gICAgJ1xcdUZGMzknOiAnWScsXG4gICAgJ1xcdTFFRjInOiAnWScsXG4gICAgJ1xcdTAwREQnOiAnWScsXG4gICAgJ1xcdTAxNzYnOiAnWScsXG4gICAgJ1xcdTFFRjgnOiAnWScsXG4gICAgJ1xcdTAyMzInOiAnWScsXG4gICAgJ1xcdTFFOEUnOiAnWScsXG4gICAgJ1xcdTAxNzgnOiAnWScsXG4gICAgJ1xcdTFFRjYnOiAnWScsXG4gICAgJ1xcdTFFRjQnOiAnWScsXG4gICAgJ1xcdTAxQjMnOiAnWScsXG4gICAgJ1xcdTAyNEUnOiAnWScsXG4gICAgJ1xcdTFFRkUnOiAnWScsXG4gICAgJ1xcdTI0Q0YnOiAnWicsXG4gICAgJ1xcdUZGM0EnOiAnWicsXG4gICAgJ1xcdTAxNzknOiAnWicsXG4gICAgJ1xcdTFFOTAnOiAnWicsXG4gICAgJ1xcdTAxN0InOiAnWicsXG4gICAgJ1xcdTAxN0QnOiAnWicsXG4gICAgJ1xcdTFFOTInOiAnWicsXG4gICAgJ1xcdTFFOTQnOiAnWicsXG4gICAgJ1xcdTAxQjUnOiAnWicsXG4gICAgJ1xcdTAyMjQnOiAnWicsXG4gICAgJ1xcdTJDN0YnOiAnWicsXG4gICAgJ1xcdTJDNkInOiAnWicsXG4gICAgJ1xcdUE3NjInOiAnWicsXG4gICAgJ1xcdTI0RDAnOiAnYScsXG4gICAgJ1xcdUZGNDEnOiAnYScsXG4gICAgJ1xcdTFFOUEnOiAnYScsXG4gICAgJ1xcdTAwRTAnOiAnYScsXG4gICAgJ1xcdTAwRTEnOiAnYScsXG4gICAgJ1xcdTAwRTInOiAnYScsXG4gICAgJ1xcdTFFQTcnOiAnYScsXG4gICAgJ1xcdTFFQTUnOiAnYScsXG4gICAgJ1xcdTFFQUInOiAnYScsXG4gICAgJ1xcdTFFQTknOiAnYScsXG4gICAgJ1xcdTAwRTMnOiAnYScsXG4gICAgJ1xcdTAxMDEnOiAnYScsXG4gICAgJ1xcdTAxMDMnOiAnYScsXG4gICAgJ1xcdTFFQjEnOiAnYScsXG4gICAgJ1xcdTFFQUYnOiAnYScsXG4gICAgJ1xcdTFFQjUnOiAnYScsXG4gICAgJ1xcdTFFQjMnOiAnYScsXG4gICAgJ1xcdTAyMjcnOiAnYScsXG4gICAgJ1xcdTAxRTEnOiAnYScsXG4gICAgJ1xcdTAwRTQnOiAnYScsXG4gICAgJ1xcdTAxREYnOiAnYScsXG4gICAgJ1xcdTFFQTMnOiAnYScsXG4gICAgJ1xcdTAwRTUnOiAnYScsXG4gICAgJ1xcdTAxRkInOiAnYScsXG4gICAgJ1xcdTAxQ0UnOiAnYScsXG4gICAgJ1xcdTAyMDEnOiAnYScsXG4gICAgJ1xcdTAyMDMnOiAnYScsXG4gICAgJ1xcdTFFQTEnOiAnYScsXG4gICAgJ1xcdTFFQUQnOiAnYScsXG4gICAgJ1xcdTFFQjcnOiAnYScsXG4gICAgJ1xcdTFFMDEnOiAnYScsXG4gICAgJ1xcdTAxMDUnOiAnYScsXG4gICAgJ1xcdTJDNjUnOiAnYScsXG4gICAgJ1xcdTAyNTAnOiAnYScsXG4gICAgJ1xcdUE3MzMnOiAnYWEnLFxuICAgICdcXHUwMEU2JzogJ2FlJyxcbiAgICAnXFx1MDFGRCc6ICdhZScsXG4gICAgJ1xcdTAxRTMnOiAnYWUnLFxuICAgICdcXHVBNzM1JzogJ2FvJyxcbiAgICAnXFx1QTczNyc6ICdhdScsXG4gICAgJ1xcdUE3MzknOiAnYXYnLFxuICAgICdcXHVBNzNCJzogJ2F2JyxcbiAgICAnXFx1QTczRCc6ICdheScsXG4gICAgJ1xcdTI0RDEnOiAnYicsXG4gICAgJ1xcdUZGNDInOiAnYicsXG4gICAgJ1xcdTFFMDMnOiAnYicsXG4gICAgJ1xcdTFFMDUnOiAnYicsXG4gICAgJ1xcdTFFMDcnOiAnYicsXG4gICAgJ1xcdTAxODAnOiAnYicsXG4gICAgJ1xcdTAxODMnOiAnYicsXG4gICAgJ1xcdTAyNTMnOiAnYicsXG4gICAgJ1xcdTI0RDInOiAnYycsXG4gICAgJ1xcdUZGNDMnOiAnYycsXG4gICAgJ1xcdTAxMDcnOiAnYycsXG4gICAgJ1xcdTAxMDknOiAnYycsXG4gICAgJ1xcdTAxMEInOiAnYycsXG4gICAgJ1xcdTAxMEQnOiAnYycsXG4gICAgJ1xcdTAwRTcnOiAnYycsXG4gICAgJ1xcdTFFMDknOiAnYycsXG4gICAgJ1xcdTAxODgnOiAnYycsXG4gICAgJ1xcdTAyM0MnOiAnYycsXG4gICAgJ1xcdUE3M0YnOiAnYycsXG4gICAgJ1xcdTIxODQnOiAnYycsXG4gICAgJ1xcdTI0RDMnOiAnZCcsXG4gICAgJ1xcdUZGNDQnOiAnZCcsXG4gICAgJ1xcdTFFMEInOiAnZCcsXG4gICAgJ1xcdTAxMEYnOiAnZCcsXG4gICAgJ1xcdTFFMEQnOiAnZCcsXG4gICAgJ1xcdTFFMTEnOiAnZCcsXG4gICAgJ1xcdTFFMTMnOiAnZCcsXG4gICAgJ1xcdTFFMEYnOiAnZCcsXG4gICAgJ1xcdTAxMTEnOiAnZCcsXG4gICAgJ1xcdTAxOEMnOiAnZCcsXG4gICAgJ1xcdTAyNTYnOiAnZCcsXG4gICAgJ1xcdTAyNTcnOiAnZCcsXG4gICAgJ1xcdUE3N0EnOiAnZCcsXG4gICAgJ1xcdTAxRjMnOiAnZHonLFxuICAgICdcXHUwMUM2JzogJ2R6JyxcbiAgICAnXFx1MjRENCc6ICdlJyxcbiAgICAnXFx1RkY0NSc6ICdlJyxcbiAgICAnXFx1MDBFOCc6ICdlJyxcbiAgICAnXFx1MDBFOSc6ICdlJyxcbiAgICAnXFx1MDBFQSc6ICdlJyxcbiAgICAnXFx1MUVDMSc6ICdlJyxcbiAgICAnXFx1MUVCRic6ICdlJyxcbiAgICAnXFx1MUVDNSc6ICdlJyxcbiAgICAnXFx1MUVDMyc6ICdlJyxcbiAgICAnXFx1MUVCRCc6ICdlJyxcbiAgICAnXFx1MDExMyc6ICdlJyxcbiAgICAnXFx1MUUxNSc6ICdlJyxcbiAgICAnXFx1MUUxNyc6ICdlJyxcbiAgICAnXFx1MDExNSc6ICdlJyxcbiAgICAnXFx1MDExNyc6ICdlJyxcbiAgICAnXFx1MDBFQic6ICdlJyxcbiAgICAnXFx1MUVCQic6ICdlJyxcbiAgICAnXFx1MDExQic6ICdlJyxcbiAgICAnXFx1MDIwNSc6ICdlJyxcbiAgICAnXFx1MDIwNyc6ICdlJyxcbiAgICAnXFx1MUVCOSc6ICdlJyxcbiAgICAnXFx1MUVDNyc6ICdlJyxcbiAgICAnXFx1MDIyOSc6ICdlJyxcbiAgICAnXFx1MUUxRCc6ICdlJyxcbiAgICAnXFx1MDExOSc6ICdlJyxcbiAgICAnXFx1MUUxOSc6ICdlJyxcbiAgICAnXFx1MUUxQic6ICdlJyxcbiAgICAnXFx1MDI0Nyc6ICdlJyxcbiAgICAnXFx1MDI1Qic6ICdlJyxcbiAgICAnXFx1MDFERCc6ICdlJyxcbiAgICAnXFx1MjRENSc6ICdmJyxcbiAgICAnXFx1RkY0Nic6ICdmJyxcbiAgICAnXFx1MUUxRic6ICdmJyxcbiAgICAnXFx1MDE5Mic6ICdmJyxcbiAgICAnXFx1QTc3Qyc6ICdmJyxcbiAgICAnXFx1MjRENic6ICdnJyxcbiAgICAnXFx1RkY0Nyc6ICdnJyxcbiAgICAnXFx1MDFGNSc6ICdnJyxcbiAgICAnXFx1MDExRCc6ICdnJyxcbiAgICAnXFx1MUUyMSc6ICdnJyxcbiAgICAnXFx1MDExRic6ICdnJyxcbiAgICAnXFx1MDEyMSc6ICdnJyxcbiAgICAnXFx1MDFFNyc6ICdnJyxcbiAgICAnXFx1MDEyMyc6ICdnJyxcbiAgICAnXFx1MDFFNSc6ICdnJyxcbiAgICAnXFx1MDI2MCc6ICdnJyxcbiAgICAnXFx1QTdBMSc6ICdnJyxcbiAgICAnXFx1MUQ3OSc6ICdnJyxcbiAgICAnXFx1QTc3Ric6ICdnJyxcbiAgICAnXFx1MjRENyc6ICdoJyxcbiAgICAnXFx1RkY0OCc6ICdoJyxcbiAgICAnXFx1MDEyNSc6ICdoJyxcbiAgICAnXFx1MUUyMyc6ICdoJyxcbiAgICAnXFx1MUUyNyc6ICdoJyxcbiAgICAnXFx1MDIxRic6ICdoJyxcbiAgICAnXFx1MUUyNSc6ICdoJyxcbiAgICAnXFx1MUUyOSc6ICdoJyxcbiAgICAnXFx1MUUyQic6ICdoJyxcbiAgICAnXFx1MUU5Nic6ICdoJyxcbiAgICAnXFx1MDEyNyc6ICdoJyxcbiAgICAnXFx1MkM2OCc6ICdoJyxcbiAgICAnXFx1MkM3Nic6ICdoJyxcbiAgICAnXFx1MDI2NSc6ICdoJyxcbiAgICAnXFx1MDE5NSc6ICdodicsXG4gICAgJ1xcdTI0RDgnOiAnaScsXG4gICAgJ1xcdUZGNDknOiAnaScsXG4gICAgJ1xcdTAwRUMnOiAnaScsXG4gICAgJ1xcdTAwRUQnOiAnaScsXG4gICAgJ1xcdTAwRUUnOiAnaScsXG4gICAgJ1xcdTAxMjknOiAnaScsXG4gICAgJ1xcdTAxMkInOiAnaScsXG4gICAgJ1xcdTAxMkQnOiAnaScsXG4gICAgJ1xcdTAwRUYnOiAnaScsXG4gICAgJ1xcdTFFMkYnOiAnaScsXG4gICAgJ1xcdTFFQzknOiAnaScsXG4gICAgJ1xcdTAxRDAnOiAnaScsXG4gICAgJ1xcdTAyMDknOiAnaScsXG4gICAgJ1xcdTAyMEInOiAnaScsXG4gICAgJ1xcdTFFQ0InOiAnaScsXG4gICAgJ1xcdTAxMkYnOiAnaScsXG4gICAgJ1xcdTFFMkQnOiAnaScsXG4gICAgJ1xcdTAyNjgnOiAnaScsXG4gICAgJ1xcdTAxMzEnOiAnaScsXG4gICAgJ1xcdTI0RDknOiAnaicsXG4gICAgJ1xcdUZGNEEnOiAnaicsXG4gICAgJ1xcdTAxMzUnOiAnaicsXG4gICAgJ1xcdTAxRjAnOiAnaicsXG4gICAgJ1xcdTAyNDknOiAnaicsXG4gICAgJ1xcdTI0REEnOiAnaycsXG4gICAgJ1xcdUZGNEInOiAnaycsXG4gICAgJ1xcdTFFMzEnOiAnaycsXG4gICAgJ1xcdTAxRTknOiAnaycsXG4gICAgJ1xcdTFFMzMnOiAnaycsXG4gICAgJ1xcdTAxMzcnOiAnaycsXG4gICAgJ1xcdTFFMzUnOiAnaycsXG4gICAgJ1xcdTAxOTknOiAnaycsXG4gICAgJ1xcdTJDNkEnOiAnaycsXG4gICAgJ1xcdUE3NDEnOiAnaycsXG4gICAgJ1xcdUE3NDMnOiAnaycsXG4gICAgJ1xcdUE3NDUnOiAnaycsXG4gICAgJ1xcdUE3QTMnOiAnaycsXG4gICAgJ1xcdTI0REInOiAnbCcsXG4gICAgJ1xcdUZGNEMnOiAnbCcsXG4gICAgJ1xcdTAxNDAnOiAnbCcsXG4gICAgJ1xcdTAxM0EnOiAnbCcsXG4gICAgJ1xcdTAxM0UnOiAnbCcsXG4gICAgJ1xcdTFFMzcnOiAnbCcsXG4gICAgJ1xcdTFFMzknOiAnbCcsXG4gICAgJ1xcdTAxM0MnOiAnbCcsXG4gICAgJ1xcdTFFM0QnOiAnbCcsXG4gICAgJ1xcdTFFM0InOiAnbCcsXG4gICAgJ1xcdTAxN0YnOiAnbCcsXG4gICAgJ1xcdTAxNDInOiAnbCcsXG4gICAgJ1xcdTAxOUEnOiAnbCcsXG4gICAgJ1xcdTAyNkInOiAnbCcsXG4gICAgJ1xcdTJDNjEnOiAnbCcsXG4gICAgJ1xcdUE3NDknOiAnbCcsXG4gICAgJ1xcdUE3ODEnOiAnbCcsXG4gICAgJ1xcdUE3NDcnOiAnbCcsXG4gICAgJ1xcdTAxQzknOiAnbGonLFxuICAgICdcXHUyNERDJzogJ20nLFxuICAgICdcXHVGRjREJzogJ20nLFxuICAgICdcXHUxRTNGJzogJ20nLFxuICAgICdcXHUxRTQxJzogJ20nLFxuICAgICdcXHUxRTQzJzogJ20nLFxuICAgICdcXHUwMjcxJzogJ20nLFxuICAgICdcXHUwMjZGJzogJ20nLFxuICAgICdcXHUyNEREJzogJ24nLFxuICAgICdcXHVGRjRFJzogJ24nLFxuICAgICdcXHUwMUY5JzogJ24nLFxuICAgICdcXHUwMTQ0JzogJ24nLFxuICAgICdcXHUwMEYxJzogJ24nLFxuICAgICdcXHUxRTQ1JzogJ24nLFxuICAgICdcXHUwMTQ4JzogJ24nLFxuICAgICdcXHUxRTQ3JzogJ24nLFxuICAgICdcXHUwMTQ2JzogJ24nLFxuICAgICdcXHUxRTRCJzogJ24nLFxuICAgICdcXHUxRTQ5JzogJ24nLFxuICAgICdcXHUwMTlFJzogJ24nLFxuICAgICdcXHUwMjcyJzogJ24nLFxuICAgICdcXHUwMTQ5JzogJ24nLFxuICAgICdcXHVBNzkxJzogJ24nLFxuICAgICdcXHVBN0E1JzogJ24nLFxuICAgICdcXHUwMUNDJzogJ25qJyxcbiAgICAnXFx1MjRERSc6ICdvJyxcbiAgICAnXFx1RkY0Ric6ICdvJyxcbiAgICAnXFx1MDBGMic6ICdvJyxcbiAgICAnXFx1MDBGMyc6ICdvJyxcbiAgICAnXFx1MDBGNCc6ICdvJyxcbiAgICAnXFx1MUVEMyc6ICdvJyxcbiAgICAnXFx1MUVEMSc6ICdvJyxcbiAgICAnXFx1MUVENyc6ICdvJyxcbiAgICAnXFx1MUVENSc6ICdvJyxcbiAgICAnXFx1MDBGNSc6ICdvJyxcbiAgICAnXFx1MUU0RCc6ICdvJyxcbiAgICAnXFx1MDIyRCc6ICdvJyxcbiAgICAnXFx1MUU0Ric6ICdvJyxcbiAgICAnXFx1MDE0RCc6ICdvJyxcbiAgICAnXFx1MUU1MSc6ICdvJyxcbiAgICAnXFx1MUU1Myc6ICdvJyxcbiAgICAnXFx1MDE0Ric6ICdvJyxcbiAgICAnXFx1MDIyRic6ICdvJyxcbiAgICAnXFx1MDIzMSc6ICdvJyxcbiAgICAnXFx1MDBGNic6ICdvJyxcbiAgICAnXFx1MDIyQic6ICdvJyxcbiAgICAnXFx1MUVDRic6ICdvJyxcbiAgICAnXFx1MDE1MSc6ICdvJyxcbiAgICAnXFx1MDFEMic6ICdvJyxcbiAgICAnXFx1MDIwRCc6ICdvJyxcbiAgICAnXFx1MDIwRic6ICdvJyxcbiAgICAnXFx1MDFBMSc6ICdvJyxcbiAgICAnXFx1MUVERCc6ICdvJyxcbiAgICAnXFx1MUVEQic6ICdvJyxcbiAgICAnXFx1MUVFMSc6ICdvJyxcbiAgICAnXFx1MUVERic6ICdvJyxcbiAgICAnXFx1MUVFMyc6ICdvJyxcbiAgICAnXFx1MUVDRCc6ICdvJyxcbiAgICAnXFx1MUVEOSc6ICdvJyxcbiAgICAnXFx1MDFFQic6ICdvJyxcbiAgICAnXFx1MDFFRCc6ICdvJyxcbiAgICAnXFx1MDBGOCc6ICdvJyxcbiAgICAnXFx1MDFGRic6ICdvJyxcbiAgICAnXFx1MDI1NCc6ICdvJyxcbiAgICAnXFx1QTc0Qic6ICdvJyxcbiAgICAnXFx1QTc0RCc6ICdvJyxcbiAgICAnXFx1MDI3NSc6ICdvJyxcbiAgICAnXFx1MDE1Myc6ICdvZScsXG4gICAgJ1xcdTAxQTMnOiAnb2knLFxuICAgICdcXHUwMjIzJzogJ291JyxcbiAgICAnXFx1QTc0Ric6ICdvbycsXG4gICAgJ1xcdTI0REYnOiAncCcsXG4gICAgJ1xcdUZGNTAnOiAncCcsXG4gICAgJ1xcdTFFNTUnOiAncCcsXG4gICAgJ1xcdTFFNTcnOiAncCcsXG4gICAgJ1xcdTAxQTUnOiAncCcsXG4gICAgJ1xcdTFEN0QnOiAncCcsXG4gICAgJ1xcdUE3NTEnOiAncCcsXG4gICAgJ1xcdUE3NTMnOiAncCcsXG4gICAgJ1xcdUE3NTUnOiAncCcsXG4gICAgJ1xcdTI0RTAnOiAncScsXG4gICAgJ1xcdUZGNTEnOiAncScsXG4gICAgJ1xcdTAyNEInOiAncScsXG4gICAgJ1xcdUE3NTcnOiAncScsXG4gICAgJ1xcdUE3NTknOiAncScsXG4gICAgJ1xcdTI0RTEnOiAncicsXG4gICAgJ1xcdUZGNTInOiAncicsXG4gICAgJ1xcdTAxNTUnOiAncicsXG4gICAgJ1xcdTFFNTknOiAncicsXG4gICAgJ1xcdTAxNTknOiAncicsXG4gICAgJ1xcdTAyMTEnOiAncicsXG4gICAgJ1xcdTAyMTMnOiAncicsXG4gICAgJ1xcdTFFNUInOiAncicsXG4gICAgJ1xcdTFFNUQnOiAncicsXG4gICAgJ1xcdTAxNTcnOiAncicsXG4gICAgJ1xcdTFFNUYnOiAncicsXG4gICAgJ1xcdTAyNEQnOiAncicsXG4gICAgJ1xcdTAyN0QnOiAncicsXG4gICAgJ1xcdUE3NUInOiAncicsXG4gICAgJ1xcdUE3QTcnOiAncicsXG4gICAgJ1xcdUE3ODMnOiAncicsXG4gICAgJ1xcdTI0RTInOiAncycsXG4gICAgJ1xcdUZGNTMnOiAncycsXG4gICAgJ1xcdTAwREYnOiAncycsXG4gICAgJ1xcdTAxNUInOiAncycsXG4gICAgJ1xcdTFFNjUnOiAncycsXG4gICAgJ1xcdTAxNUQnOiAncycsXG4gICAgJ1xcdTFFNjEnOiAncycsXG4gICAgJ1xcdTAxNjEnOiAncycsXG4gICAgJ1xcdTFFNjcnOiAncycsXG4gICAgJ1xcdTFFNjMnOiAncycsXG4gICAgJ1xcdTFFNjknOiAncycsXG4gICAgJ1xcdTAyMTknOiAncycsXG4gICAgJ1xcdTAxNUYnOiAncycsXG4gICAgJ1xcdTAyM0YnOiAncycsXG4gICAgJ1xcdUE3QTknOiAncycsXG4gICAgJ1xcdUE3ODUnOiAncycsXG4gICAgJ1xcdTFFOUInOiAncycsXG4gICAgJ1xcdTI0RTMnOiAndCcsXG4gICAgJ1xcdUZGNTQnOiAndCcsXG4gICAgJ1xcdTFFNkInOiAndCcsXG4gICAgJ1xcdTFFOTcnOiAndCcsXG4gICAgJ1xcdTAxNjUnOiAndCcsXG4gICAgJ1xcdTFFNkQnOiAndCcsXG4gICAgJ1xcdTAyMUInOiAndCcsXG4gICAgJ1xcdTAxNjMnOiAndCcsXG4gICAgJ1xcdTFFNzEnOiAndCcsXG4gICAgJ1xcdTFFNkYnOiAndCcsXG4gICAgJ1xcdTAxNjcnOiAndCcsXG4gICAgJ1xcdTAxQUQnOiAndCcsXG4gICAgJ1xcdTAyODgnOiAndCcsXG4gICAgJ1xcdTJDNjYnOiAndCcsXG4gICAgJ1xcdUE3ODcnOiAndCcsXG4gICAgJ1xcdUE3MjknOiAndHonLFxuICAgICdcXHUyNEU0JzogJ3UnLFxuICAgICdcXHVGRjU1JzogJ3UnLFxuICAgICdcXHUwMEY5JzogJ3UnLFxuICAgICdcXHUwMEZBJzogJ3UnLFxuICAgICdcXHUwMEZCJzogJ3UnLFxuICAgICdcXHUwMTY5JzogJ3UnLFxuICAgICdcXHUxRTc5JzogJ3UnLFxuICAgICdcXHUwMTZCJzogJ3UnLFxuICAgICdcXHUxRTdCJzogJ3UnLFxuICAgICdcXHUwMTZEJzogJ3UnLFxuICAgICdcXHUwMEZDJzogJ3UnLFxuICAgICdcXHUwMURDJzogJ3UnLFxuICAgICdcXHUwMUQ4JzogJ3UnLFxuICAgICdcXHUwMUQ2JzogJ3UnLFxuICAgICdcXHUwMURBJzogJ3UnLFxuICAgICdcXHUxRUU3JzogJ3UnLFxuICAgICdcXHUwMTZGJzogJ3UnLFxuICAgICdcXHUwMTcxJzogJ3UnLFxuICAgICdcXHUwMUQ0JzogJ3UnLFxuICAgICdcXHUwMjE1JzogJ3UnLFxuICAgICdcXHUwMjE3JzogJ3UnLFxuICAgICdcXHUwMUIwJzogJ3UnLFxuICAgICdcXHUxRUVCJzogJ3UnLFxuICAgICdcXHUxRUU5JzogJ3UnLFxuICAgICdcXHUxRUVGJzogJ3UnLFxuICAgICdcXHUxRUVEJzogJ3UnLFxuICAgICdcXHUxRUYxJzogJ3UnLFxuICAgICdcXHUxRUU1JzogJ3UnLFxuICAgICdcXHUxRTczJzogJ3UnLFxuICAgICdcXHUwMTczJzogJ3UnLFxuICAgICdcXHUxRTc3JzogJ3UnLFxuICAgICdcXHUxRTc1JzogJ3UnLFxuICAgICdcXHUwMjg5JzogJ3UnLFxuICAgICdcXHUyNEU1JzogJ3YnLFxuICAgICdcXHVGRjU2JzogJ3YnLFxuICAgICdcXHUxRTdEJzogJ3YnLFxuICAgICdcXHUxRTdGJzogJ3YnLFxuICAgICdcXHUwMjhCJzogJ3YnLFxuICAgICdcXHVBNzVGJzogJ3YnLFxuICAgICdcXHUwMjhDJzogJ3YnLFxuICAgICdcXHVBNzYxJzogJ3Z5JyxcbiAgICAnXFx1MjRFNic6ICd3JyxcbiAgICAnXFx1RkY1Nyc6ICd3JyxcbiAgICAnXFx1MUU4MSc6ICd3JyxcbiAgICAnXFx1MUU4Myc6ICd3JyxcbiAgICAnXFx1MDE3NSc6ICd3JyxcbiAgICAnXFx1MUU4Nyc6ICd3JyxcbiAgICAnXFx1MUU4NSc6ICd3JyxcbiAgICAnXFx1MUU5OCc6ICd3JyxcbiAgICAnXFx1MUU4OSc6ICd3JyxcbiAgICAnXFx1MkM3Myc6ICd3JyxcbiAgICAnXFx1MjRFNyc6ICd4JyxcbiAgICAnXFx1RkY1OCc6ICd4JyxcbiAgICAnXFx1MUU4Qic6ICd4JyxcbiAgICAnXFx1MUU4RCc6ICd4JyxcbiAgICAnXFx1MjRFOCc6ICd5JyxcbiAgICAnXFx1RkY1OSc6ICd5JyxcbiAgICAnXFx1MUVGMyc6ICd5JyxcbiAgICAnXFx1MDBGRCc6ICd5JyxcbiAgICAnXFx1MDE3Nyc6ICd5JyxcbiAgICAnXFx1MUVGOSc6ICd5JyxcbiAgICAnXFx1MDIzMyc6ICd5JyxcbiAgICAnXFx1MUU4Ric6ICd5JyxcbiAgICAnXFx1MDBGRic6ICd5JyxcbiAgICAnXFx1MUVGNyc6ICd5JyxcbiAgICAnXFx1MUU5OSc6ICd5JyxcbiAgICAnXFx1MUVGNSc6ICd5JyxcbiAgICAnXFx1MDFCNCc6ICd5JyxcbiAgICAnXFx1MDI0Ric6ICd5JyxcbiAgICAnXFx1MUVGRic6ICd5JyxcbiAgICAnXFx1MjRFOSc6ICd6JyxcbiAgICAnXFx1RkY1QSc6ICd6JyxcbiAgICAnXFx1MDE3QSc6ICd6JyxcbiAgICAnXFx1MUU5MSc6ICd6JyxcbiAgICAnXFx1MDE3Qyc6ICd6JyxcbiAgICAnXFx1MDE3RSc6ICd6JyxcbiAgICAnXFx1MUU5Myc6ICd6JyxcbiAgICAnXFx1MUU5NSc6ICd6JyxcbiAgICAnXFx1MDFCNic6ICd6JyxcbiAgICAnXFx1MDIyNSc6ICd6JyxcbiAgICAnXFx1MDI0MCc6ICd6JyxcbiAgICAnXFx1MkM2Qyc6ICd6JyxcbiAgICAnXFx1QTc2Myc6ICd6JyxcbiAgICAnXFx1MDM4Nic6ICdcXHUwMzkxJyxcbiAgICAnXFx1MDM4OCc6ICdcXHUwMzk1JyxcbiAgICAnXFx1MDM4OSc6ICdcXHUwMzk3JyxcbiAgICAnXFx1MDM4QSc6ICdcXHUwMzk5JyxcbiAgICAnXFx1MDNBQSc6ICdcXHUwMzk5JyxcbiAgICAnXFx1MDM4Qyc6ICdcXHUwMzlGJyxcbiAgICAnXFx1MDM4RSc6ICdcXHUwM0E1JyxcbiAgICAnXFx1MDNBQic6ICdcXHUwM0E1JyxcbiAgICAnXFx1MDM4Ric6ICdcXHUwM0E5JyxcbiAgICAnXFx1MDNBQyc6ICdcXHUwM0IxJyxcbiAgICAnXFx1MDNBRCc6ICdcXHUwM0I1JyxcbiAgICAnXFx1MDNBRSc6ICdcXHUwM0I3JyxcbiAgICAnXFx1MDNBRic6ICdcXHUwM0I5JyxcbiAgICAnXFx1MDNDQSc6ICdcXHUwM0I5JyxcbiAgICAnXFx1MDM5MCc6ICdcXHUwM0I5JyxcbiAgICAnXFx1MDNDQyc6ICdcXHUwM0JGJyxcbiAgICAnXFx1MDNDRCc6ICdcXHUwM0M1JyxcbiAgICAnXFx1MDNDQic6ICdcXHUwM0M1JyxcbiAgICAnXFx1MDNCMCc6ICdcXHUwM0M1JyxcbiAgICAnXFx1MDNDRSc6ICdcXHUwM0M5JyxcbiAgICAnXFx1MDNDMic6ICdcXHUwM0MzJyxcbiAgICAnXFx1MjAxOSc6ICdcXCcnXG4gIH07XG5cbiAgcmV0dXJuIGRpYWNyaXRpY3M7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvYmFzZScsW1xuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoVXRpbHMpIHtcbiAgZnVuY3Rpb24gQmFzZUFkYXB0ZXIgKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgQmFzZUFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoQmFzZUFkYXB0ZXIsIFV0aWxzLk9ic2VydmFibGUpO1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYGN1cnJlbnRgIG1ldGhvZCBtdXN0IGJlIGRlZmluZWQgaW4gY2hpbGQgY2xhc3Nlcy4nKTtcbiAgfTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGBxdWVyeWAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLicpO1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIC8vIENhbiBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXG4gIH07XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2FuIGJlIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcbiAgfTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUuZ2VuZXJhdGVSZXN1bHRJZCA9IGZ1bmN0aW9uIChjb250YWluZXIsIGRhdGEpIHtcbiAgICB2YXIgaWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdC0nO1xuXG4gICAgaWQgKz0gVXRpbHMuZ2VuZXJhdGVDaGFycyg0KTtcblxuICAgIGlmIChkYXRhLmlkICE9IG51bGwpIHtcbiAgICAgIGlkICs9ICctJyArIGRhdGEuaWQudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJy0nICsgVXRpbHMuZ2VuZXJhdGVDaGFycyg0KTtcbiAgICB9XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIHJldHVybiBCYXNlQWRhcHRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9zZWxlY3QnLFtcbiAgJy4vYmFzZScsXG4gICcuLi91dGlscycsXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoQmFzZUFkYXB0ZXIsIFV0aWxzLCAkKSB7XG4gIGZ1bmN0aW9uIFNlbGVjdEFkYXB0ZXIgKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBTZWxlY3RBZGFwdGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKFNlbGVjdEFkYXB0ZXIsIEJhc2VBZGFwdGVyKTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIGRhdGEgPSBbXTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuXG4gICAgICB2YXIgb3B0aW9uID0gc2VsZi5pdGVtKCRvcHRpb24pO1xuXG4gICAgICBkYXRhLnB1c2gob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGNhbGxiYWNrKGRhdGEpO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGF0YS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAvLyBJZiBkYXRhLmVsZW1lbnQgaXMgYSBET00gbm9kZSwgdXNlIGl0IGluc3RlYWRcbiAgICBpZiAoJChkYXRhLmVsZW1lbnQpLmlzKCdvcHRpb24nKSkge1xuICAgICAgZGF0YS5lbGVtZW50LnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJGVsZW1lbnQucHJvcCgnbXVsdGlwbGUnKSkge1xuICAgICAgdGhpcy5jdXJyZW50KGZ1bmN0aW9uIChjdXJyZW50RGF0YSkge1xuICAgICAgICB2YXIgdmFsID0gW107XG5cbiAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgZGF0YS5wdXNoLmFwcGx5KGRhdGEsIGN1cnJlbnREYXRhKTtcblxuICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgICB2YXIgaWQgPSBkYXRhW2RdLmlkO1xuXG4gICAgICAgICAgaWYgKCQuaW5BcnJheShpZCwgdmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHZhbC5wdXNoKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLiRlbGVtZW50LnZhbCh2YWwpO1xuICAgICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZhbCA9IGRhdGEuaWQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbCk7XG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLnVuc2VsZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuJGVsZW1lbnQucHJvcCgnbXVsdGlwbGUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGEuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgIGlmICgkKGRhdGEuZWxlbWVudCkuaXMoJ29wdGlvbicpKSB7XG4gICAgICBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50KGZ1bmN0aW9uIChjdXJyZW50RGF0YSkge1xuICAgICAgdmFyIHZhbCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGN1cnJlbnREYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgIHZhciBpZCA9IGN1cnJlbnREYXRhW2RdLmlkO1xuXG4gICAgICAgIGlmIChpZCAhPT0gZGF0YS5pZCAmJiAkLmluQXJyYXkoaWQsIHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgdmFsLnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGYuJGVsZW1lbnQudmFsKHZhbCk7XG5cbiAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLnNlbGVjdChwYXJhbXMuZGF0YSk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi51bnNlbGVjdChwYXJhbXMuZGF0YSk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZW1vdmUgYW55dGhpbmcgYWRkZWQgdG8gY2hpbGQgZWxlbWVudHNcbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJyonKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFJlbW92ZSBhbnkgY3VzdG9tIGRhdGEgc2V0IGJ5IFNlbGVjdDJcbiAgICAgIFV0aWxzLlJlbW92ZURhdGEodGhpcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHZhciBkYXRhID0gW107XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyICRvcHRpb25zID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbigpO1xuXG4gICAgJG9wdGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgIGlmICghJG9wdGlvbi5pcygnb3B0aW9uJykgJiYgISRvcHRpb24uaXMoJ29wdGdyb3VwJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3B0aW9uID0gc2VsZi5pdGVtKCRvcHRpb24pO1xuXG4gICAgICB2YXIgbWF0Y2hlcyA9IHNlbGYubWF0Y2hlcyhwYXJhbXMsIG9wdGlvbik7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaChtYXRjaGVzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNhbGxiYWNrKHtcbiAgICAgIHJlc3VsdHM6IGRhdGFcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5hZGRPcHRpb25zID0gZnVuY3Rpb24gKCRvcHRpb25zKSB7XG4gICAgVXRpbHMuYXBwZW5kTWFueSh0aGlzLiRlbGVtZW50LCAkb3B0aW9ucyk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUub3B0aW9uID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgb3B0aW9uO1xuXG4gICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcbiAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG4gICAgICBvcHRpb24ubGFiZWwgPSBkYXRhLnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gZGF0YS50ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGRhdGEudGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YS5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb24udmFsdWUgPSBkYXRhLmlkO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmRpc2FibGVkKSB7XG4gICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlbGVjdGVkKSB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnRpdGxlKSB7XG4gICAgICBvcHRpb24udGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIH1cblxuICAgIHZhciAkb3B0aW9uID0gJChvcHRpb24pO1xuXG4gICAgdmFyIG5vcm1hbGl6ZWREYXRhID0gdGhpcy5fbm9ybWFsaXplSXRlbShkYXRhKTtcbiAgICBub3JtYWxpemVkRGF0YS5lbGVtZW50ID0gb3B0aW9uO1xuXG4gICAgLy8gT3ZlcnJpZGUgdGhlIG9wdGlvbidzIGRhdGEgd2l0aCB0aGUgY29tYmluZWQgZGF0YVxuICAgIFV0aWxzLlN0b3JlRGF0YShvcHRpb24sICdkYXRhJywgbm9ybWFsaXplZERhdGEpO1xuXG4gICAgcmV0dXJuICRvcHRpb247XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuaXRlbSA9IGZ1bmN0aW9uICgkb3B0aW9uKSB7XG4gICAgdmFyIGRhdGEgPSB7fTtcblxuICAgIGRhdGEgPSBVdGlscy5HZXREYXRhKCRvcHRpb25bMF0sICdkYXRhJyk7XG5cbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBpZiAoJG9wdGlvbi5pcygnb3B0aW9uJykpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIGlkOiAkb3B0aW9uLnZhbCgpLFxuICAgICAgICB0ZXh0OiAkb3B0aW9uLnRleHQoKSxcbiAgICAgICAgZGlzYWJsZWQ6ICRvcHRpb24ucHJvcCgnZGlzYWJsZWQnKSxcbiAgICAgICAgc2VsZWN0ZWQ6ICRvcHRpb24ucHJvcCgnc2VsZWN0ZWQnKSxcbiAgICAgICAgdGl0bGU6ICRvcHRpb24ucHJvcCgndGl0bGUnKVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCRvcHRpb24uaXMoJ29wdGdyb3VwJykpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIHRleHQ6ICRvcHRpb24ucHJvcCgnbGFiZWwnKSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICB0aXRsZTogJG9wdGlvbi5wcm9wKCd0aXRsZScpXG4gICAgICB9O1xuXG4gICAgICB2YXIgJGNoaWxkcmVuID0gJG9wdGlvbi5jaGlsZHJlbignb3B0aW9uJyk7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBbXTtcblxuICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCAkY2hpbGRyZW4ubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgdmFyICRjaGlsZCA9ICQoJGNoaWxkcmVuW2NdKTtcblxuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLml0ZW0oJGNoaWxkKTtcblxuICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIH1cblxuICAgIGRhdGEgPSB0aGlzLl9ub3JtYWxpemVJdGVtKGRhdGEpO1xuICAgIGRhdGEuZWxlbWVudCA9ICRvcHRpb25bMF07XG5cbiAgICBVdGlscy5TdG9yZURhdGEoJG9wdGlvblswXSwgJ2RhdGEnLCBkYXRhKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLl9ub3JtYWxpemVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSAhPT0gT2JqZWN0KGl0ZW0pKSB7XG4gICAgICBpdGVtID0ge1xuICAgICAgICBpZDogaXRlbSxcbiAgICAgICAgdGV4dDogaXRlbVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpdGVtID0gJC5leHRlbmQoe30sIHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfSwgaXRlbSk7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgaWYgKGl0ZW0uaWQgIT0gbnVsbCkge1xuICAgICAgaXRlbS5pZCA9IGl0ZW0uaWQudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbS50ZXh0ICE9IG51bGwpIHtcbiAgICAgIGl0ZW0udGV4dCA9IGl0ZW0udGV4dC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChpdGVtLl9yZXN1bHRJZCA9PSBudWxsICYmIGl0ZW0uaWQgJiYgdGhpcy5jb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgaXRlbS5fcmVzdWx0SWQgPSB0aGlzLmdlbmVyYXRlUmVzdWx0SWQodGhpcy5jb250YWluZXIsIGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGl0ZW0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbiAocGFyYW1zLCBkYXRhKSB7XG4gICAgdmFyIG1hdGNoZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdtYXRjaGVyJyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3RBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL2FycmF5JyxbXG4gICcuL3NlbGVjdCcsXG4gICcuLi91dGlscycsXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoU2VsZWN0QWRhcHRlciwgVXRpbHMsICQpIHtcbiAgZnVuY3Rpb24gQXJyYXlBZGFwdGVyICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuX2RhdGFUb0NvbnZlcnQgPSBvcHRpb25zLmdldCgnZGF0YScpIHx8IFtdO1xuXG4gICAgQXJyYXlBZGFwdGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChBcnJheUFkYXB0ZXIsIFNlbGVjdEFkYXB0ZXIpO1xuXG4gIEFycmF5QWRhcHRlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICBBcnJheUFkYXB0ZXIuX19zdXBlcl9fLmJpbmQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgdGhpcy5hZGRPcHRpb25zKHRoaXMuY29udmVydFRvT3B0aW9ucyh0aGlzLl9kYXRhVG9Db252ZXJ0KSk7XG4gIH07XG5cbiAgQXJyYXlBZGFwdGVyLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciAkb3B0aW9uID0gdGhpcy4kZWxlbWVudC5maW5kKCdvcHRpb24nKS5maWx0ZXIoZnVuY3Rpb24gKGksIGVsbSkge1xuICAgICAgcmV0dXJuIGVsbS52YWx1ZSA9PSBkYXRhLmlkLnRvU3RyaW5nKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoJG9wdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICRvcHRpb24gPSB0aGlzLm9wdGlvbihkYXRhKTtcblxuICAgICAgdGhpcy5hZGRPcHRpb25zKCRvcHRpb24pO1xuICAgIH1cblxuICAgIEFycmF5QWRhcHRlci5fX3N1cGVyX18uc2VsZWN0LmNhbGwodGhpcywgZGF0YSk7XG4gIH07XG5cbiAgQXJyYXlBZGFwdGVyLnByb3RvdHlwZS5jb252ZXJ0VG9PcHRpb25zID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgJGV4aXN0aW5nID0gdGhpcy4kZWxlbWVudC5maW5kKCdvcHRpb24nKTtcbiAgICB2YXIgZXhpc3RpbmdJZHMgPSAkZXhpc3RpbmcubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZWxmLml0ZW0oJCh0aGlzKSkuaWQ7XG4gICAgfSkuZ2V0KCk7XG5cbiAgICB2YXIgJG9wdGlvbnMgPSBbXTtcblxuICAgIC8vIEZpbHRlciBvdXQgYWxsIGl0ZW1zIGV4Y2VwdCBmb3IgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFyZ3VtZW50XG4gICAgZnVuY3Rpb24gb25seUl0ZW0gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLnZhbCgpID09IGl0ZW0uaWQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLl9ub3JtYWxpemVJdGVtKGRhdGFbZF0pO1xuXG4gICAgICAvLyBTa2lwIGl0ZW1zIHdoaWNoIHdlcmUgcHJlLWxvYWRlZCwgb25seSBtZXJnZSB0aGUgZGF0YVxuICAgICAgaWYgKCQuaW5BcnJheShpdGVtLmlkLCBleGlzdGluZ0lkcykgPj0gMCkge1xuICAgICAgICB2YXIgJGV4aXN0aW5nT3B0aW9uID0gJGV4aXN0aW5nLmZpbHRlcihvbmx5SXRlbShpdGVtKSk7XG5cbiAgICAgICAgdmFyIGV4aXN0aW5nRGF0YSA9IHRoaXMuaXRlbSgkZXhpc3RpbmdPcHRpb24pO1xuICAgICAgICB2YXIgbmV3RGF0YSA9ICQuZXh0ZW5kKHRydWUsIHt9LCBpdGVtLCBleGlzdGluZ0RhdGEpO1xuXG4gICAgICAgIHZhciAkbmV3T3B0aW9uID0gdGhpcy5vcHRpb24obmV3RGF0YSk7XG5cbiAgICAgICAgJGV4aXN0aW5nT3B0aW9uLnJlcGxhY2VXaXRoKCRuZXdPcHRpb24pO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICB2YXIgJGNoaWxkcmVuID0gdGhpcy5jb252ZXJ0VG9PcHRpb25zKGl0ZW0uY2hpbGRyZW4pO1xuXG4gICAgICAgIFV0aWxzLmFwcGVuZE1hbnkoJG9wdGlvbiwgJGNoaWxkcmVuKTtcbiAgICAgIH1cblxuICAgICAgJG9wdGlvbnMucHVzaCgkb3B0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJG9wdGlvbnM7XG4gIH07XG5cbiAgcmV0dXJuIEFycmF5QWRhcHRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9hamF4JyxbXG4gICcuL2FycmF5JyxcbiAgJy4uL3V0aWxzJyxcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uIChBcnJheUFkYXB0ZXIsIFV0aWxzLCAkKSB7XG4gIGZ1bmN0aW9uIEFqYXhBZGFwdGVyICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuYWpheE9wdGlvbnMgPSB0aGlzLl9hcHBseURlZmF1bHRzKG9wdGlvbnMuZ2V0KCdhamF4JykpO1xuXG4gICAgaWYgKHRoaXMuYWpheE9wdGlvbnMucHJvY2Vzc1Jlc3VsdHMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9jZXNzUmVzdWx0cyA9IHRoaXMuYWpheE9wdGlvbnMucHJvY2Vzc1Jlc3VsdHM7XG4gICAgfVxuXG4gICAgQWpheEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKEFqYXhBZGFwdGVyLCBBcnJheUFkYXB0ZXIpO1xuXG4gIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5fYXBwbHlEZWZhdWx0cyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gJC5leHRlbmQoe30sIHBhcmFtcywge1xuICAgICAgICAgIHE6IHBhcmFtcy50ZXJtXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHRyYW5zcG9ydDogZnVuY3Rpb24gKHBhcmFtcywgc3VjY2VzcywgZmFpbHVyZSkge1xuICAgICAgICB2YXIgJHJlcXVlc3QgPSAkLmFqYXgocGFyYW1zKTtcblxuICAgICAgICAkcmVxdWVzdC50aGVuKHN1Y2Nlc3MpO1xuICAgICAgICAkcmVxdWVzdC5mYWlsKGZhaWx1cmUpO1xuXG4gICAgICAgIHJldHVybiAkcmVxdWVzdDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucywgdHJ1ZSk7XG4gIH07XG5cbiAgQWpheEFkYXB0ZXIucHJvdG90eXBlLnByb2Nlc3NSZXN1bHRzID0gZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBBamF4QWRhcHRlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX3JlcXVlc3QgIT0gbnVsbCkge1xuICAgICAgLy8gSlNPTlAgcmVxdWVzdHMgY2Fubm90IGFsd2F5cyBiZSBhYm9ydGVkXG4gICAgICBpZiAoJC5pc0Z1bmN0aW9uKHRoaXMuX3JlcXVlc3QuYWJvcnQpKSB7XG4gICAgICAgIHRoaXMuX3JlcXVlc3QuYWJvcnQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVxdWVzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICB0eXBlOiAnR0VUJ1xuICAgIH0sIHRoaXMuYWpheE9wdGlvbnMpO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnVybCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucy51cmwgPSBvcHRpb25zLnVybC5jYWxsKHRoaXMuJGVsZW1lbnQsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMuZGF0YSA9IG9wdGlvbnMuZGF0YS5jYWxsKHRoaXMuJGVsZW1lbnQsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWVzdCAoKSB7XG4gICAgICB2YXIgJHJlcXVlc3QgPSBvcHRpb25zLnRyYW5zcG9ydChvcHRpb25zLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IHNlbGYucHJvY2Vzc1Jlc3VsdHMoZGF0YSwgcGFyYW1zKTtcblxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmdldCgnZGVidWcnKSAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHJlc3BvbnNlIGluY2x1ZGVkIGEgYHJlc3VsdHNgIGtleS5cbiAgICAgICAgICBpZiAoIXJlc3VsdHMgfHwgIXJlc3VsdHMucmVzdWx0cyB8fCAhJC5pc0FycmF5KHJlc3VsdHMucmVzdWx0cykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICdTZWxlY3QyOiBUaGUgQUpBWCByZXN1bHRzIGRpZCBub3QgcmV0dXJuIGFuIGFycmF5IGluIHRoZSAnICtcbiAgICAgICAgICAgICAgJ2ByZXN1bHRzYCBrZXkgb2YgdGhlIHJlc3BvbnNlLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2socmVzdWx0cyk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEF0dGVtcHQgdG8gZGV0ZWN0IGlmIGEgcmVxdWVzdCB3YXMgYWJvcnRlZFxuICAgICAgICAvLyBPbmx5IHdvcmtzIGlmIHRoZSB0cmFuc3BvcnQgZXhwb3NlcyBhIHN0YXR1cyBwcm9wZXJ0eVxuICAgICAgICBpZiAoJ3N0YXR1cycgaW4gJHJlcXVlc3QgJiZcbiAgICAgICAgICAgICgkcmVxdWVzdC5zdGF0dXMgPT09IDAgfHwgJHJlcXVlc3Quc3RhdHVzID09PSAnMCcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOm1lc3NhZ2UnLCB7XG4gICAgICAgICAgbWVzc2FnZTogJ2Vycm9yTG9hZGluZydcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgc2VsZi5fcmVxdWVzdCA9ICRyZXF1ZXN0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLmRlbGF5ICYmIHBhcmFtcy50ZXJtICE9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLl9xdWVyeVRpbWVvdXQpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9xdWVyeVRpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9xdWVyeVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChyZXF1ZXN0LCB0aGlzLmFqYXhPcHRpb25zLmRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQWpheEFkYXB0ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvdGFncycsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgZnVuY3Rpb24gVGFncyAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHZhciB0YWdzID0gb3B0aW9ucy5nZXQoJ3RhZ3MnKTtcblxuICAgIHZhciBjcmVhdGVUYWcgPSBvcHRpb25zLmdldCgnY3JlYXRlVGFnJyk7XG5cbiAgICBpZiAoY3JlYXRlVGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY3JlYXRlVGFnID0gY3JlYXRlVGFnO1xuICAgIH1cblxuICAgIHZhciBpbnNlcnRUYWcgPSBvcHRpb25zLmdldCgnaW5zZXJ0VGFnJyk7XG5cbiAgICBpZiAoaW5zZXJ0VGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRUYWcgPSBpbnNlcnRUYWc7XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCQuaXNBcnJheSh0YWdzKSkge1xuICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0YWdzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgIHZhciB0YWcgPSB0YWdzW3RdO1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0odGFnKTtcblxuICAgICAgICB2YXIgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGl0ZW0pO1xuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRvcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFRhZ3MucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuX3JlbW92ZU9sZFRhZ3MoKTtcblxuICAgIGlmIChwYXJhbXMudGVybSA9PSBudWxsIHx8IHBhcmFtcy5wYWdlICE9IG51bGwpIHtcbiAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdyYXBwZXIgKG9iaiwgY2hpbGQpIHtcbiAgICAgIHZhciBkYXRhID0gb2JqLnJlc3VsdHM7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb3B0aW9uID0gZGF0YVtpXTtcblxuICAgICAgICB2YXIgY2hlY2tDaGlsZHJlbiA9IChcbiAgICAgICAgICBvcHRpb24uY2hpbGRyZW4gIT0gbnVsbCAmJlxuICAgICAgICAgICF3cmFwcGVyKHtcbiAgICAgICAgICAgIHJlc3VsdHM6IG9wdGlvbi5jaGlsZHJlblxuICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICk7XG5cbiAgICAgICAgdmFyIG9wdGlvblRleHQgPSAob3B0aW9uLnRleHQgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHZhciBwYXJhbXNUZXJtID0gKHBhcmFtcy50ZXJtIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIHZhciBjaGVja1RleHQgPSBvcHRpb25UZXh0ID09PSBwYXJhbXNUZXJtO1xuXG4gICAgICAgIGlmIChjaGVja1RleHQgfHwgY2hlY2tDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9iai5kYXRhID0gZGF0YTtcbiAgICAgICAgICBjYWxsYmFjayhvYmopO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZyA9IHNlbGYuY3JlYXRlVGFnKHBhcmFtcyk7XG5cbiAgICAgIGlmICh0YWcgIT0gbnVsbCkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9IHNlbGYub3B0aW9uKHRhZyk7XG4gICAgICAgICRvcHRpb24uYXR0cignZGF0YS1zZWxlY3QyLXRhZycsIHRydWUpO1xuXG4gICAgICAgIHNlbGYuYWRkT3B0aW9ucyhbJG9wdGlvbl0pO1xuXG4gICAgICAgIHNlbGYuaW5zZXJ0VGFnKGRhdGEsIHRhZyk7XG4gICAgICB9XG5cbiAgICAgIG9iai5yZXN1bHRzID0gZGF0YTtcblxuICAgICAgY2FsbGJhY2sob2JqKTtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIHdyYXBwZXIpO1xuICB9O1xuXG4gIFRhZ3MucHJvdG90eXBlLmNyZWF0ZVRhZyA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcykge1xuICAgIHZhciB0ZXJtID0gJC50cmltKHBhcmFtcy50ZXJtKTtcblxuICAgIGlmICh0ZXJtID09PSAnJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0ZXJtLFxuICAgICAgdGV4dDogdGVybVxuICAgIH07XG4gIH07XG5cbiAgVGFncy5wcm90b3R5cGUuaW5zZXJ0VGFnID0gZnVuY3Rpb24gKF8sIGRhdGEsIHRhZykge1xuICAgIGRhdGEudW5zaGlmdCh0YWcpO1xuICB9O1xuXG4gIFRhZ3MucHJvdG90eXBlLl9yZW1vdmVPbGRUYWdzID0gZnVuY3Rpb24gKF8pIHtcbiAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbltkYXRhLXNlbGVjdDItdGFnXScpO1xuXG4gICAgJG9wdGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFRhZ3M7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvdG9rZW5pemVyJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBUb2tlbml6ZXIgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdG9rZW5pemVyID0gb3B0aW9ucy5nZXQoJ3Rva2VuaXplcicpO1xuXG4gICAgaWYgKHRva2VuaXplciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRva2VuaXplciA9IHRva2VuaXplcjtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBUb2tlbml6ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgdGhpcy4kc2VhcmNoID0gIGNvbnRhaW5lci5kcm9wZG93bi4kc2VhcmNoIHx8IGNvbnRhaW5lci5zZWxlY3Rpb24uJHNlYXJjaCB8fFxuICAgICAgJGNvbnRhaW5lci5maW5kKCcuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkJyk7XG4gIH07XG5cbiAgVG9rZW5pemVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBbmRTZWxlY3QgKGRhdGEpIHtcbiAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgZGF0YSBvYmplY3Qgc28gd2UgY2FuIHVzZSBpdCBmb3IgY2hlY2tzXG4gICAgICB2YXIgaXRlbSA9IHNlbGYuX25vcm1hbGl6ZUl0ZW0oZGF0YSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBkYXRhIG9iamVjdCBhbHJlYWR5IGV4aXN0cyBhcyBhIHRhZ1xuICAgICAgLy8gU2VsZWN0IGl0IGlmIGl0IGRvZXNuJ3RcbiAgICAgIHZhciAkZXhpc3RpbmdPcHRpb25zID0gc2VsZi4kZWxlbWVudC5maW5kKCdvcHRpb24nKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJCh0aGlzKS52YWwoKSA9PT0gaXRlbS5pZDtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiBhbiBleGlzdGluZyBvcHRpb24gd2Fzbid0IGZvdW5kIGZvciBpdCwgY3JlYXRlIHRoZSBvcHRpb25cbiAgICAgIGlmICghJGV4aXN0aW5nT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyICRvcHRpb24gPSBzZWxmLm9wdGlvbihpdGVtKTtcbiAgICAgICAgJG9wdGlvbi5hdHRyKCdkYXRhLXNlbGVjdDItdGFnJywgdHJ1ZSk7XG5cbiAgICAgICAgc2VsZi5fcmVtb3ZlT2xkVGFncygpO1xuICAgICAgICBzZWxmLmFkZE9wdGlvbnMoWyRvcHRpb25dKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VsZWN0IHRoZSBpdGVtLCBub3cgdGhhdCB3ZSBrbm93IHRoZXJlIGlzIGFuIG9wdGlvbiBmb3IgaXRcbiAgICAgIHNlbGVjdChpdGVtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3QgKGRhdGEpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0Jywge1xuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXJhbXMudGVybSA9IHBhcmFtcy50ZXJtIHx8ICcnO1xuXG4gICAgdmFyIHRva2VuRGF0YSA9IHRoaXMudG9rZW5pemVyKHBhcmFtcywgdGhpcy5vcHRpb25zLCBjcmVhdGVBbmRTZWxlY3QpO1xuXG4gICAgaWYgKHRva2VuRGF0YS50ZXJtICE9PSBwYXJhbXMudGVybSkge1xuICAgICAgLy8gUmVwbGFjZSB0aGUgc2VhcmNoIHRlcm0gaWYgd2UgaGF2ZSB0aGUgc2VhcmNoIGJveFxuICAgICAgaWYgKHRoaXMuJHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy4kc2VhcmNoLnZhbCh0b2tlbkRhdGEudGVybSk7XG4gICAgICAgIHRoaXMuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuXG4gICAgICBwYXJhbXMudGVybSA9IHRva2VuRGF0YS50ZXJtO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xuICB9O1xuXG4gIFRva2VuaXplci5wcm90b3R5cGUudG9rZW5pemVyID0gZnVuY3Rpb24gKF8sIHBhcmFtcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VwYXJhdG9ycyA9IG9wdGlvbnMuZ2V0KCd0b2tlblNlcGFyYXRvcnMnKSB8fCBbXTtcbiAgICB2YXIgdGVybSA9IHBhcmFtcy50ZXJtO1xuICAgIHZhciBpID0gMDtcblxuICAgIHZhciBjcmVhdGVUYWcgPSB0aGlzLmNyZWF0ZVRhZyB8fCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogcGFyYW1zLnRlcm0sXG4gICAgICAgIHRleHQ6IHBhcmFtcy50ZXJtXG4gICAgICB9O1xuICAgIH07XG5cbiAgICB3aGlsZSAoaSA8IHRlcm0ubGVuZ3RoKSB7XG4gICAgICB2YXIgdGVybUNoYXIgPSB0ZXJtW2ldO1xuXG4gICAgICBpZiAoJC5pbkFycmF5KHRlcm1DaGFyLCBzZXBhcmF0b3JzKSA9PT0gLTEpIHtcbiAgICAgICAgaSsrO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFydCA9IHRlcm0uc3Vic3RyKDAsIGkpO1xuICAgICAgdmFyIHBhcnRQYXJhbXMgPSAkLmV4dGVuZCh7fSwgcGFyYW1zLCB7XG4gICAgICAgIHRlcm06IHBhcnRcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgZGF0YSA9IGNyZWF0ZVRhZyhwYXJ0UGFyYW1zKTtcblxuICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgICBpKys7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhkYXRhKTtcblxuICAgICAgLy8gUmVzZXQgdGhlIHRlcm0gdG8gbm90IGluY2x1ZGUgdGhlIHRva2VuaXplZCBwb3J0aW9uXG4gICAgICB0ZXJtID0gdGVybS5zdWJzdHIoaSArIDEpIHx8ICcnO1xuICAgICAgaSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRlcm06IHRlcm1cbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBUb2tlbml6ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvbWluaW11bUlucHV0TGVuZ3RoJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWluaW11bUlucHV0TGVuZ3RoIChkZWNvcmF0ZWQsICRlLCBvcHRpb25zKSB7XG4gICAgdGhpcy5taW5pbXVtSW5wdXRMZW5ndGggPSBvcHRpb25zLmdldCgnbWluaW11bUlucHV0TGVuZ3RoJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZSwgb3B0aW9ucyk7XG4gIH1cblxuICBNaW5pbXVtSW5wdXRMZW5ndGgucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHBhcmFtcy50ZXJtID0gcGFyYW1zLnRlcm0gfHwgJyc7XG5cbiAgICBpZiAocGFyYW1zLnRlcm0ubGVuZ3RoIDwgdGhpcy5taW5pbXVtSW5wdXRMZW5ndGgpIHtcbiAgICAgIHRoaXMudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICBtZXNzYWdlOiAnaW5wdXRUb29TaG9ydCcsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBtaW5pbXVtOiB0aGlzLm1pbmltdW1JbnB1dExlbmd0aCxcbiAgICAgICAgICBpbnB1dDogcGFyYW1zLnRlcm0sXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICByZXR1cm4gTWluaW11bUlucHV0TGVuZ3RoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL21heGltdW1JbnB1dExlbmd0aCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1heGltdW1JbnB1dExlbmd0aCAoZGVjb3JhdGVkLCAkZSwgb3B0aW9ucykge1xuICAgIHRoaXMubWF4aW11bUlucHV0TGVuZ3RoID0gb3B0aW9ucy5nZXQoJ21heGltdW1JbnB1dExlbmd0aCcpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgTWF4aW11bUlucHV0TGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICBwYXJhbXMudGVybSA9IHBhcmFtcy50ZXJtIHx8ICcnO1xuXG4gICAgaWYgKHRoaXMubWF4aW11bUlucHV0TGVuZ3RoID4gMCAmJlxuICAgICAgICBwYXJhbXMudGVybS5sZW5ndGggPiB0aGlzLm1heGltdW1JbnB1dExlbmd0aCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdyZXN1bHRzOm1lc3NhZ2UnLCB7XG4gICAgICAgIG1lc3NhZ2U6ICdpbnB1dFRvb0xvbmcnLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgbWF4aW11bTogdGhpcy5tYXhpbXVtSW5wdXRMZW5ndGgsXG4gICAgICAgICAgaW5wdXQ6IHBhcmFtcy50ZXJtLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgcmV0dXJuIE1heGltdW1JbnB1dExlbmd0aDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoJyxbXG5cbl0sIGZ1bmN0aW9uICgpe1xuICBmdW5jdGlvbiBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoIChkZWNvcmF0ZWQsICRlLCBvcHRpb25zKSB7XG4gICAgdGhpcy5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoID0gb3B0aW9ucy5nZXQoJ21heGltdW1TZWxlY3Rpb25MZW5ndGgnKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIE1heGltdW1TZWxlY3Rpb25MZW5ndGgucHJvdG90eXBlLmJpbmQgPVxuICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5fY2hlY2tJZk1heGltdW1TZWxlY3RlZCgpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aC5wcm90b3R5cGUucXVlcnkgPVxuICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5fY2hlY2tJZk1heGltdW1TZWxlY3RlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlY29yYXRlZC5jYWxsKHNlbGYsIHBhcmFtcywgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gIH07XG5cbiAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aC5wcm90b3R5cGUuX2NoZWNrSWZNYXhpbXVtU2VsZWN0ZWQgPVxuICAgIGZ1bmN0aW9uIChfLCBzdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5jdXJyZW50KGZ1bmN0aW9uIChjdXJyZW50RGF0YSkge1xuICAgICAgICB2YXIgY291bnQgPSBjdXJyZW50RGF0YSAhPSBudWxsID8gY3VycmVudERhdGEubGVuZ3RoIDogMDtcbiAgICAgICAgaWYgKHNlbGYubWF4aW11bVNlbGVjdGlvbkxlbmd0aCA+IDAgJiZcbiAgICAgICAgICBjb3VudCA+PSBzZWxmLm1heGltdW1TZWxlY3Rpb25MZW5ndGgpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdtYXhpbXVtU2VsZWN0ZWQnLFxuICAgICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgICBtYXhpbXVtOiBzZWxmLm1heGltdW1TZWxlY3Rpb25MZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bicsW1xuICAnanF1ZXJ5JyxcbiAgJy4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gRHJvcGRvd24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBEcm9wZG93bi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChEcm9wZG93biwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGRyb3Bkb3duID0gJChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItZHJvcGRvd25cIj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzXCI+PC9zcGFuPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgICRkcm9wZG93bi5hdHRyKCdkaXInLCB0aGlzLm9wdGlvbnMuZ2V0KCdkaXInKSk7XG5cbiAgICB0aGlzLiRkcm9wZG93biA9ICRkcm9wZG93bjtcblxuICAgIHJldHVybiAkZHJvcGRvd247XG4gIH07XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2hvdWxkIGJlIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcbiAgfTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoJGRyb3Bkb3duLCAkY29udGFpbmVyKSB7XG4gICAgLy8gU2hvdWxkIGJlIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcbiAgfTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGRyb3Bkb3duIGZyb20gdGhlIERPTVxuICAgIHRoaXMuJGRyb3Bkb3duLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93bjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vc2VhcmNoJyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gU2VhcmNoICgpIHsgfVxuXG4gIFNlYXJjaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHZhciAkcmVuZGVyZWQgPSBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcblxuICAgIHZhciAkc2VhcmNoID0gJChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1kcm9wZG93blwiPicgK1xuICAgICAgICAnPGlucHV0IGNsYXNzPVwic2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgdHlwZT1cInNlYXJjaFwiIHRhYmluZGV4PVwiLTFcIicgK1xuICAgICAgICAnIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJub25lXCInICtcbiAgICAgICAgJyBzcGVsbGNoZWNrPVwiZmFsc2VcIiByb2xlPVwic2VhcmNoYm94XCIgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCIgLz4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICB0aGlzLiRzZWFyY2hDb250YWluZXIgPSAkc2VhcmNoO1xuICAgIHRoaXMuJHNlYXJjaCA9ICRzZWFyY2guZmluZCgnaW5wdXQnKTtcblxuICAgICRyZW5kZXJlZC5wcmVwZW5kKCRzZWFyY2gpO1xuXG4gICAgcmV0dXJuICRyZW5kZXJlZDtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcmVzdWx0c0lkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHRzJztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLiRzZWFyY2gub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2tleXByZXNzJywgZXZ0KTtcblxuICAgICAgc2VsZi5fa2V5VXBQcmV2ZW50ZWQgPSBldnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXb3JrYXJvdW5kIGZvciBicm93c2VycyB3aGljaCBkbyBub3Qgc3VwcG9ydCB0aGUgYGlucHV0YCBldmVudFxuICAgIC8vIFRoaXMgd2lsbCBwcmV2ZW50IGRvdWJsZS10cmlnZ2VyaW5nIG9mIGV2ZW50cyBmb3IgYnJvd3NlcnMgd2hpY2ggc3VwcG9ydFxuICAgIC8vIGJvdGggdGhlIGBrZXl1cGAgYW5kIGBpbnB1dGAgZXZlbnRzLlxuICAgIHRoaXMuJHNlYXJjaC5vbignaW5wdXQnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBVbmJpbmQgdGhlIGR1cGxpY2F0ZWQgYGtleXVwYCBldmVudFxuICAgICAgJCh0aGlzKS5vZmYoJ2tleXVwJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWFyY2gub24oJ2tleXVwIGlucHV0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5oYW5kbGVTZWFyY2goZXZ0KTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCd0YWJpbmRleCcsIDApO1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ2FyaWEtY29udHJvbHMnLCByZXN1bHRzSWQpO1xuXG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcblxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCd0YWJpbmRleCcsIC0xKTtcbiAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG5cbiAgICAgIHNlbGYuJHNlYXJjaC52YWwoJycpO1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2JsdXInKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphbGwnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBpZiAocGFyYW1zLnF1ZXJ5LnRlcm0gPT0gbnVsbCB8fCBwYXJhbXMucXVlcnkudGVybSA9PT0gJycpIHtcbiAgICAgICAgdmFyIHNob3dTZWFyY2ggPSBzZWxmLnNob3dTZWFyY2gocGFyYW1zKTtcblxuICAgICAgICBpZiAoc2hvd1NlYXJjaCkge1xuICAgICAgICAgIHNlbGYuJHNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygnc2VsZWN0Mi1zZWFyY2gtLWhpZGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLiRzZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItc2VhcmNoLS1oaWRlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIGlmIChwYXJhbXMuZGF0YS5fcmVzdWx0SWQpIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHBhcmFtcy5kYXRhLl9yZXN1bHRJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5oYW5kbGVTZWFyY2ggPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKCF0aGlzLl9rZXlVcFByZXZlbnRlZCkge1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy4kc2VhcmNoLnZhbCgpO1xuXG4gICAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5Jywge1xuICAgICAgICB0ZXJtOiBpbnB1dFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fa2V5VXBQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnNob3dTZWFyY2ggPSBmdW5jdGlvbiAoXywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIFNlYXJjaDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vaGlkZVBsYWNlaG9sZGVyJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSGlkZVBsYWNlaG9sZGVyIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLm5vcm1hbGl6ZVBsYWNlaG9sZGVyKG9wdGlvbnMuZ2V0KCdwbGFjZWhvbGRlcicpKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcik7XG4gIH1cblxuICBIaWRlUGxhY2Vob2xkZXIucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICBkYXRhLnJlc3VsdHMgPSB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyKGRhdGEucmVzdWx0cyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfTtcblxuICBIaWRlUGxhY2Vob2xkZXIucHJvdG90eXBlLm5vcm1hbGl6ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKF8sIHBsYWNlaG9sZGVyKSB7XG4gICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0ge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfTtcblxuICBIaWRlUGxhY2Vob2xkZXIucHJvdG90eXBlLnJlbW92ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKF8sIGRhdGEpIHtcbiAgICB2YXIgbW9kaWZpZWREYXRhID0gZGF0YS5zbGljZSgwKTtcblxuICAgIGZvciAodmFyIGQgPSBkYXRhLmxlbmd0aCAtIDE7IGQgPj0gMDsgZC0tKSB7XG4gICAgICB2YXIgaXRlbSA9IGRhdGFbZF07XG5cbiAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyLmlkID09PSBpdGVtLmlkKSB7XG4gICAgICAgIG1vZGlmaWVkRGF0YS5zcGxpY2UoZCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGlmaWVkRGF0YTtcbiAgfTtcblxuICByZXR1cm4gSGlkZVBsYWNlaG9sZGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9pbmZpbml0ZVNjcm9sbCcsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgZnVuY3Rpb24gSW5maW5pdGVTY3JvbGwgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XG4gICAgdGhpcy5sYXN0UGFyYW1zID0ge307XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpO1xuXG4gICAgdGhpcy4kbG9hZGluZ01vcmUgPSB0aGlzLmNyZWF0ZUxvYWRpbmdNb3JlKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIHRoaXMuJGxvYWRpbmdNb3JlLnJlbW92ZSgpO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICBpZiAodGhpcy5zaG93TG9hZGluZ01vcmUoZGF0YSkpIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMuYXBwZW5kKHRoaXMuJGxvYWRpbmdNb3JlKTtcbiAgICAgIHRoaXMubG9hZE1vcmVJZk5lZWRlZCgpO1xuICAgIH1cbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ3F1ZXJ5JywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5sYXN0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgc2VsZi5sb2FkaW5nID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncXVlcnk6YXBwZW5kJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5sYXN0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgc2VsZi5sb2FkaW5nID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHJlc3VsdHMub24oJ3Njcm9sbCcsIHRoaXMubG9hZE1vcmVJZk5lZWRlZC5iaW5kKHRoaXMpKTtcbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUubG9hZE1vcmVJZk5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXNMb2FkTW9yZVZpc2libGUgPSAkLmNvbnRhaW5zKFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgdGhpcy4kbG9hZGluZ01vcmVbMF1cbiAgICApO1xuXG4gICAgaWYgKHRoaXMubG9hZGluZyB8fCAhaXNMb2FkTW9yZVZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudE9mZnNldCA9IHRoaXMuJHJlc3VsdHMub2Zmc2V0KCkudG9wICtcbiAgICAgIHRoaXMuJHJlc3VsdHMub3V0ZXJIZWlnaHQoZmFsc2UpO1xuICAgIHZhciBsb2FkaW5nTW9yZU9mZnNldCA9IHRoaXMuJGxvYWRpbmdNb3JlLm9mZnNldCgpLnRvcCArXG4gICAgICB0aGlzLiRsb2FkaW5nTW9yZS5vdXRlckhlaWdodChmYWxzZSk7XG5cbiAgICBpZiAoY3VycmVudE9mZnNldCArIDUwID49IGxvYWRpbmdNb3JlT2Zmc2V0KSB7XG4gICAgICB0aGlzLmxvYWRNb3JlKCk7XG4gICAgfVxuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5sb2FkTW9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgdmFyIHBhcmFtcyA9ICQuZXh0ZW5kKHt9LCB7cGFnZTogMX0sIHRoaXMubGFzdFBhcmFtcyk7XG5cbiAgICBwYXJhbXMucGFnZSsrO1xuXG4gICAgdGhpcy50cmlnZ2VyKCdxdWVyeTphcHBlbmQnLCBwYXJhbXMpO1xuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5zaG93TG9hZGluZ01vcmUgPSBmdW5jdGlvbiAoXywgZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnBhZ2luYXRpb24gJiYgZGF0YS5wYWdpbmF0aW9uLm1vcmU7XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmNyZWF0ZUxvYWRpbmdNb3JlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkb3B0aW9uID0gJChcbiAgICAgICc8bGkgJyArXG4gICAgICAnY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvbiBzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tbG9hZC1tb3JlXCInICtcbiAgICAgICdyb2xlPVwib3B0aW9uXCIgYXJpYS1kaXNhYmxlZD1cInRydWVcIj48L2xpPidcbiAgICApO1xuXG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQoJ2xvYWRpbmdNb3JlJyk7XG5cbiAgICAkb3B0aW9uLmh0bWwobWVzc2FnZSh0aGlzLmxhc3RQYXJhbXMpKTtcblxuICAgIHJldHVybiAkb3B0aW9uO1xuICB9O1xuXG4gIHJldHVybiBJbmZpbml0ZVNjcm9sbDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vYXR0YWNoQm9keScsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIEF0dGFjaEJvZHkgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRkcm9wZG93blBhcmVudCA9ICQob3B0aW9ucy5nZXQoJ2Ryb3Bkb3duUGFyZW50JykgfHwgZG9jdW1lbnQuYm9keSk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Nob3dEcm9wZG93bigpO1xuICAgICAgc2VsZi5fYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyKGNvbnRhaW5lcik7XG5cbiAgICAgIC8vIE11c3QgYmluZCBhZnRlciB0aGUgcmVzdWx0cyBoYW5kbGVycyB0byBlbnN1cmUgY29ycmVjdCBzaXppbmdcbiAgICAgIHNlbGYuX2JpbmRDb250YWluZXJSZXN1bHRIYW5kbGVycyhjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX2hpZGVEcm9wZG93bigpO1xuICAgICAgc2VsZi5fZGV0YWNoUG9zaXRpb25pbmdIYW5kbGVyKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5wb3NpdGlvbiA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsICRkcm9wZG93biwgJGNvbnRhaW5lcikge1xuICAgIC8vIENsb25lIGFsbCBvZiB0aGUgY29udGFpbmVyIGNsYXNzZXNcbiAgICAkZHJvcGRvd24uYXR0cignY2xhc3MnLCAkY29udGFpbmVyLmF0dHIoJ2NsYXNzJykpO1xuXG4gICAgJGRyb3Bkb3duLnJlbW92ZUNsYXNzKCdzZWxlY3QyJyk7XG4gICAgJGRyb3Bkb3duLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuXG4gICAgJGRyb3Bkb3duLmNzcyh7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogLTk5OTk5OVxuICAgIH0pO1xuXG4gICAgdGhpcy4kY29udGFpbmVyID0gJGNvbnRhaW5lcjtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdmFyICRjb250YWluZXIgPSAkKCc8c3Bhbj48L3NwYW4+Jyk7XG5cbiAgICB2YXIgJGRyb3Bkb3duID0gZGVjb3JhdGVkLmNhbGwodGhpcyk7XG4gICAgJGNvbnRhaW5lci5hcHBlbmQoJGRyb3Bkb3duKTtcblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyID0gJGNvbnRhaW5lcjtcblxuICAgIHJldHVybiAkY29udGFpbmVyO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9oaWRlRHJvcGRvd24gPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIuZGV0YWNoKCk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX2JpbmRDb250YWluZXJSZXN1bHRIYW5kbGVycyA9XG4gICAgICBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIpIHtcblxuICAgIC8vIFRoZXNlIHNob3VsZCBvbmx5IGJlIGJvdW5kIG9uY2VcbiAgICBpZiAodGhpcy5fY29udGFpbmVyUmVzdWx0c0hhbmRsZXJzQm91bmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YWxsJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphcHBlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOm1lc3NhZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb250YWluZXJSZXN1bHRzSGFuZGxlcnNCb3VuZCA9IHRydWU7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX2F0dGFjaFBvc2l0aW9uaW5nSGFuZGxlciA9XG4gICAgICBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgc2Nyb2xsRXZlbnQgPSAnc2Nyb2xsLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcbiAgICB2YXIgcmVzaXplRXZlbnQgPSAncmVzaXplLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcbiAgICB2YXIgb3JpZW50YXRpb25FdmVudCA9ICdvcmllbnRhdGlvbmNoYW5nZS5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG5cbiAgICB2YXIgJHdhdGNoZXJzID0gdGhpcy4kY29udGFpbmVyLnBhcmVudHMoKS5maWx0ZXIoVXRpbHMuaGFzU2Nyb2xsKTtcbiAgICAkd2F0Y2hlcnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBVdGlscy5TdG9yZURhdGEodGhpcywgJ3NlbGVjdDItc2Nyb2xsLXBvc2l0aW9uJywge1xuICAgICAgICB4OiAkKHRoaXMpLnNjcm9sbExlZnQoKSxcbiAgICAgICAgeTogJCh0aGlzKS5zY3JvbGxUb3AoKVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkd2F0Y2hlcnMub24oc2Nyb2xsRXZlbnQsIGZ1bmN0aW9uIChldikge1xuICAgICAgdmFyIHBvc2l0aW9uID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnc2VsZWN0Mi1zY3JvbGwtcG9zaXRpb24nKTtcbiAgICAgICQodGhpcykuc2Nyb2xsVG9wKHBvc2l0aW9uLnkpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKHNjcm9sbEV2ZW50ICsgJyAnICsgcmVzaXplRXZlbnQgKyAnICcgKyBvcmllbnRhdGlvbkV2ZW50LFxuICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX2RldGFjaFBvc2l0aW9uaW5nSGFuZGxlciA9XG4gICAgICBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIpIHtcbiAgICB2YXIgc2Nyb2xsRXZlbnQgPSAnc2Nyb2xsLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcbiAgICB2YXIgcmVzaXplRXZlbnQgPSAncmVzaXplLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcbiAgICB2YXIgb3JpZW50YXRpb25FdmVudCA9ICdvcmllbnRhdGlvbmNoYW5nZS5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG5cbiAgICB2YXIgJHdhdGNoZXJzID0gdGhpcy4kY29udGFpbmVyLnBhcmVudHMoKS5maWx0ZXIoVXRpbHMuaGFzU2Nyb2xsKTtcbiAgICAkd2F0Y2hlcnMub2ZmKHNjcm9sbEV2ZW50KTtcblxuICAgICQod2luZG93KS5vZmYoc2Nyb2xsRXZlbnQgKyAnICcgKyByZXNpemVFdmVudCArICcgJyArIG9yaWVudGF0aW9uRXZlbnQpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9wb3NpdGlvbkRyb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xuXG4gICAgdmFyIGlzQ3VycmVudGx5QWJvdmUgPSB0aGlzLiRkcm9wZG93bi5oYXNDbGFzcygnc2VsZWN0Mi1kcm9wZG93bi0tYWJvdmUnKTtcbiAgICB2YXIgaXNDdXJyZW50bHlCZWxvdyA9IHRoaXMuJGRyb3Bkb3duLmhhc0NsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS1iZWxvdycpO1xuXG4gICAgdmFyIG5ld0RpcmVjdGlvbiA9IG51bGw7XG5cbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy4kY29udGFpbmVyLm9mZnNldCgpO1xuXG4gICAgb2Zmc2V0LmJvdHRvbSA9IG9mZnNldC50b3AgKyB0aGlzLiRjb250YWluZXIub3V0ZXJIZWlnaHQoZmFsc2UpO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHtcbiAgICAgIGhlaWdodDogdGhpcy4kY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKVxuICAgIH07XG5cbiAgICBjb250YWluZXIudG9wID0gb2Zmc2V0LnRvcDtcbiAgICBjb250YWluZXIuYm90dG9tID0gb2Zmc2V0LnRvcCArIGNvbnRhaW5lci5oZWlnaHQ7XG5cbiAgICB2YXIgZHJvcGRvd24gPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuJGRyb3Bkb3duLm91dGVySGVpZ2h0KGZhbHNlKVxuICAgIH07XG5cbiAgICB2YXIgdmlld3BvcnQgPSB7XG4gICAgICB0b3A6ICR3aW5kb3cuc2Nyb2xsVG9wKCksXG4gICAgICBib3R0b206ICR3aW5kb3cuc2Nyb2xsVG9wKCkgKyAkd2luZG93LmhlaWdodCgpXG4gICAgfTtcblxuICAgIHZhciBlbm91Z2hSb29tQWJvdmUgPSB2aWV3cG9ydC50b3AgPCAob2Zmc2V0LnRvcCAtIGRyb3Bkb3duLmhlaWdodCk7XG4gICAgdmFyIGVub3VnaFJvb21CZWxvdyA9IHZpZXdwb3J0LmJvdHRvbSA+IChvZmZzZXQuYm90dG9tICsgZHJvcGRvd24uaGVpZ2h0KTtcblxuICAgIHZhciBjc3MgPSB7XG4gICAgICBsZWZ0OiBvZmZzZXQubGVmdCxcbiAgICAgIHRvcDogY29udGFpbmVyLmJvdHRvbVxuICAgIH07XG5cbiAgICAvLyBEZXRlcm1pbmUgd2hhdCB0aGUgcGFyZW50IGVsZW1lbnQgaXMgdG8gdXNlIGZvciBjYWxjdWxhdGluZyB0aGUgb2Zmc2V0XG4gICAgdmFyICRvZmZzZXRQYXJlbnQgPSB0aGlzLiRkcm9wZG93blBhcmVudDtcblxuICAgIC8vIEZvciBzdGF0aWNhbGx5IHBvc2l0aW9uZWQgZWxlbWVudHMsIHdlIG5lZWQgdG8gZ2V0IHRoZSBlbGVtZW50XG4gICAgLy8gdGhhdCBpcyBkZXRlcm1pbmluZyB0aGUgb2Zmc2V0XG4gICAgaWYgKCRvZmZzZXRQYXJlbnQuY3NzKCdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgJG9mZnNldFBhcmVudCA9ICRvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50KCk7XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudE9mZnNldCA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9O1xuXG4gICAgaWYgKFxuICAgICAgJC5jb250YWlucyhkb2N1bWVudC5ib2R5LCAkb2Zmc2V0UGFyZW50WzBdKSB8fFxuICAgICAgJG9mZnNldFBhcmVudFswXS5pc0Nvbm5lY3RlZFxuICAgICAgKSB7XG4gICAgICBwYXJlbnRPZmZzZXQgPSAkb2Zmc2V0UGFyZW50Lm9mZnNldCgpO1xuICAgIH1cblxuICAgIGNzcy50b3AgLT0gcGFyZW50T2Zmc2V0LnRvcDtcbiAgICBjc3MubGVmdCAtPSBwYXJlbnRPZmZzZXQubGVmdDtcblxuICAgIGlmICghaXNDdXJyZW50bHlBYm92ZSAmJiAhaXNDdXJyZW50bHlCZWxvdykge1xuICAgICAgbmV3RGlyZWN0aW9uID0gJ2JlbG93JztcbiAgICB9XG5cbiAgICBpZiAoIWVub3VnaFJvb21CZWxvdyAmJiBlbm91Z2hSb29tQWJvdmUgJiYgIWlzQ3VycmVudGx5QWJvdmUpIHtcbiAgICAgIG5ld0RpcmVjdGlvbiA9ICdhYm92ZSc7XG4gICAgfSBlbHNlIGlmICghZW5vdWdoUm9vbUFib3ZlICYmIGVub3VnaFJvb21CZWxvdyAmJiBpc0N1cnJlbnRseUFib3ZlKSB7XG4gICAgICBuZXdEaXJlY3Rpb24gPSAnYmVsb3cnO1xuICAgIH1cblxuICAgIGlmIChuZXdEaXJlY3Rpb24gPT0gJ2Fib3ZlJyB8fFxuICAgICAgKGlzQ3VycmVudGx5QWJvdmUgJiYgbmV3RGlyZWN0aW9uICE9PSAnYmVsb3cnKSkge1xuICAgICAgY3NzLnRvcCA9IGNvbnRhaW5lci50b3AgLSBwYXJlbnRPZmZzZXQudG9wIC0gZHJvcGRvd24uaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChuZXdEaXJlY3Rpb24gIT0gbnVsbCkge1xuICAgICAgdGhpcy4kZHJvcGRvd25cbiAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS1iZWxvdyBzZWxlY3QyLWRyb3Bkb3duLS1hYm92ZScpXG4gICAgICAgIC5hZGRDbGFzcygnc2VsZWN0Mi1kcm9wZG93bi0tJyArIG5ld0RpcmVjdGlvbik7XG4gICAgICB0aGlzLiRjb250YWluZXJcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tYmVsb3cgc2VsZWN0Mi1jb250YWluZXItLWFib3ZlJylcbiAgICAgICAgLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tJyArIG5ld0RpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIuY3NzKGNzcyk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX3Jlc2l6ZURyb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjc3MgPSB7XG4gICAgICB3aWR0aDogdGhpcy4kY29udGFpbmVyLm91dGVyV2lkdGgoZmFsc2UpICsgJ3B4J1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZHJvcGRvd25BdXRvV2lkdGgnKSkge1xuICAgICAgY3NzLm1pbldpZHRoID0gY3NzLndpZHRoO1xuICAgICAgY3NzLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIGNzcy53aWR0aCA9ICdhdXRvJztcbiAgICB9XG5cbiAgICB0aGlzLiRkcm9wZG93bi5jc3MoY3NzKTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fc2hvd0Ryb3Bkb3duID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZFRvKHRoaXMuJGRyb3Bkb3duUGFyZW50KTtcblxuICAgIHRoaXMuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICB0aGlzLl9yZXNpemVEcm9wZG93bigpO1xuICB9O1xuXG4gIHJldHVybiBBdHRhY2hCb2R5O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGNvdW50UmVzdWx0cyAoZGF0YSkge1xuICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBpdGVtID0gZGF0YVtkXTtcblxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgY291bnQgKz0gY291bnRSZXN1bHRzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBmdW5jdGlvbiBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gb3B0aW9ucy5nZXQoJ21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyk7XG5cbiAgICBpZiAodGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA8IDApIHtcbiAgICAgIHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSBJbmZpbml0eTtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpO1xuICB9XG5cbiAgTWluaW11bVJlc3VsdHNGb3JTZWFyY2gucHJvdG90eXBlLnNob3dTZWFyY2ggPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMpIHtcbiAgICBpZiAoY291bnRSZXN1bHRzKHBhcmFtcy5kYXRhLnJlc3VsdHMpIDwgdGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMpO1xuICB9O1xuXG4gIHJldHVybiBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vc2VsZWN0T25DbG9zZScsW1xuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoVXRpbHMpIHtcbiAgZnVuY3Rpb24gU2VsZWN0T25DbG9zZSAoKSB7IH1cblxuICBTZWxlY3RPbkNsb3NlLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLl9oYW5kbGVTZWxlY3RPbkNsb3NlKHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0T25DbG9zZS5wcm90b3R5cGUuX2hhbmRsZVNlbGVjdE9uQ2xvc2UgPSBmdW5jdGlvbiAoXywgcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMub3JpZ2luYWxTZWxlY3QyRXZlbnQgIT0gbnVsbCkge1xuICAgICAgdmFyIGV2ZW50ID0gcGFyYW1zLm9yaWdpbmFsU2VsZWN0MkV2ZW50O1xuXG4gICAgICAvLyBEb24ndCBzZWxlY3QgYW4gaXRlbSBpZiB0aGUgY2xvc2UgZXZlbnQgd2FzIHRyaWdnZXJlZCBmcm9tIGEgc2VsZWN0IG9yXG4gICAgICAvLyB1bnNlbGVjdCBldmVudFxuICAgICAgaWYgKGV2ZW50Ll90eXBlID09PSAnc2VsZWN0JyB8fCBldmVudC5fdHlwZSA9PT0gJ3Vuc2VsZWN0Jykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyICRoaWdobGlnaHRlZFJlc3VsdHMgPSB0aGlzLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgLy8gT25seSBzZWxlY3QgaGlnaGxpZ2h0ZWQgcmVzdWx0c1xuICAgIGlmICgkaGlnaGxpZ2h0ZWRSZXN1bHRzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJGhpZ2hsaWdodGVkUmVzdWx0c1swXSwgJ2RhdGEnKTtcblxuICAgIC8vIERvbid0IHJlLXNlbGVjdCBhbHJlYWR5IHNlbGVjdGVkIHJlc3VsdGVcbiAgICBpZiAoXG4gICAgICAoZGF0YS5lbGVtZW50ICE9IG51bGwgJiYgZGF0YS5lbGVtZW50LnNlbGVjdGVkKSB8fFxuICAgICAgKGRhdGEuZWxlbWVudCA9PSBudWxsICYmIGRhdGEuc2VsZWN0ZWQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdzZWxlY3QnLCB7XG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0T25DbG9zZTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vY2xvc2VPblNlbGVjdCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENsb3NlT25TZWxlY3QgKCkgeyB9XG5cbiAgQ2xvc2VPblNlbGVjdC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX3NlbGVjdFRyaWdnZXJlZChldnQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX3NlbGVjdFRyaWdnZXJlZChldnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIENsb3NlT25TZWxlY3QucHJvdG90eXBlLl9zZWxlY3RUcmlnZ2VyZWQgPSBmdW5jdGlvbiAoXywgZXZ0KSB7XG4gICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBldnQub3JpZ2luYWxFdmVudDtcblxuICAgIC8vIERvbid0IGNsb3NlIGlmIHRoZSBjb250cm9sIGtleSBpcyBiZWluZyBoZWxkXG4gICAgaWYgKG9yaWdpbmFsRXZlbnQgJiYgKG9yaWdpbmFsRXZlbnQuY3RybEtleSB8fCBvcmlnaW5hbEV2ZW50Lm1ldGFLZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdjbG9zZScsIHtcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgICBvcmlnaW5hbFNlbGVjdDJFdmVudDogZXZ0XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIENsb3NlT25TZWxlY3Q7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2kxOG4vZW4nLFtdLGZ1bmN0aW9uICgpIHtcbiAgLy8gRW5nbGlzaFxuICByZXR1cm4ge1xuICAgIGVycm9yTG9hZGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdUaGUgcmVzdWx0cyBjb3VsZCBub3QgYmUgbG9hZGVkLic7XG4gICAgfSxcbiAgICBpbnB1dFRvb0xvbmc6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICB2YXIgb3ZlckNoYXJzID0gYXJncy5pbnB1dC5sZW5ndGggLSBhcmdzLm1heGltdW07XG5cbiAgICAgIHZhciBtZXNzYWdlID0gJ1BsZWFzZSBkZWxldGUgJyArIG92ZXJDaGFycyArICcgY2hhcmFjdGVyJztcblxuICAgICAgaWYgKG92ZXJDaGFycyAhPSAxKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gJ3MnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgIGlucHV0VG9vU2hvcnQ6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICB2YXIgcmVtYWluaW5nQ2hhcnMgPSBhcmdzLm1pbmltdW0gLSBhcmdzLmlucHV0Lmxlbmd0aDtcblxuICAgICAgdmFyIG1lc3NhZ2UgPSAnUGxlYXNlIGVudGVyICcgKyByZW1haW5pbmdDaGFycyArICcgb3IgbW9yZSBjaGFyYWN0ZXJzJztcblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICBsb2FkaW5nTW9yZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdMb2FkaW5nIG1vcmUgcmVzdWx0c+KApic7XG4gICAgfSxcbiAgICBtYXhpbXVtU2VsZWN0ZWQ6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdZb3UgY2FuIG9ubHkgc2VsZWN0ICcgKyBhcmdzLm1heGltdW0gKyAnIGl0ZW0nO1xuXG4gICAgICBpZiAoYXJncy5tYXhpbXVtICE9IDEpIHtcbiAgICAgICAgbWVzc2FnZSArPSAncyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG4gICAgbm9SZXN1bHRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ05vIHJlc3VsdHMgZm91bmQnO1xuICAgIH0sXG4gICAgc2VhcmNoaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ1NlYXJjaGluZ+KApic7XG4gICAgfSxcbiAgICByZW1vdmVBbGxJdGVtczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdSZW1vdmUgYWxsIGl0ZW1zJztcbiAgICB9XG4gIH07XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RlZmF1bHRzJyxbXG4gICdqcXVlcnknLFxuICAncmVxdWlyZScsXG5cbiAgJy4vcmVzdWx0cycsXG5cbiAgJy4vc2VsZWN0aW9uL3NpbmdsZScsXG4gICcuL3NlbGVjdGlvbi9tdWx0aXBsZScsXG4gICcuL3NlbGVjdGlvbi9wbGFjZWhvbGRlcicsXG4gICcuL3NlbGVjdGlvbi9hbGxvd0NsZWFyJyxcbiAgJy4vc2VsZWN0aW9uL3NlYXJjaCcsXG4gICcuL3NlbGVjdGlvbi9ldmVudFJlbGF5JyxcblxuICAnLi91dGlscycsXG4gICcuL3RyYW5zbGF0aW9uJyxcbiAgJy4vZGlhY3JpdGljcycsXG5cbiAgJy4vZGF0YS9zZWxlY3QnLFxuICAnLi9kYXRhL2FycmF5JyxcbiAgJy4vZGF0YS9hamF4JyxcbiAgJy4vZGF0YS90YWdzJyxcbiAgJy4vZGF0YS90b2tlbml6ZXInLFxuICAnLi9kYXRhL21pbmltdW1JbnB1dExlbmd0aCcsXG4gICcuL2RhdGEvbWF4aW11bUlucHV0TGVuZ3RoJyxcbiAgJy4vZGF0YS9tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoJyxcblxuICAnLi9kcm9wZG93bicsXG4gICcuL2Ryb3Bkb3duL3NlYXJjaCcsXG4gICcuL2Ryb3Bkb3duL2hpZGVQbGFjZWhvbGRlcicsXG4gICcuL2Ryb3Bkb3duL2luZmluaXRlU2Nyb2xsJyxcbiAgJy4vZHJvcGRvd24vYXR0YWNoQm9keScsXG4gICcuL2Ryb3Bkb3duL21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyxcbiAgJy4vZHJvcGRvd24vc2VsZWN0T25DbG9zZScsXG4gICcuL2Ryb3Bkb3duL2Nsb3NlT25TZWxlY3QnLFxuXG4gICcuL2kxOG4vZW4nXG5dLCBmdW5jdGlvbiAoJCwgcmVxdWlyZSxcblxuICAgICAgICAgICAgIFJlc3VsdHNMaXN0LFxuXG4gICAgICAgICAgICAgU2luZ2xlU2VsZWN0aW9uLCBNdWx0aXBsZVNlbGVjdGlvbiwgUGxhY2Vob2xkZXIsIEFsbG93Q2xlYXIsXG4gICAgICAgICAgICAgU2VsZWN0aW9uU2VhcmNoLCBFdmVudFJlbGF5LFxuXG4gICAgICAgICAgICAgVXRpbHMsIFRyYW5zbGF0aW9uLCBESUFDUklUSUNTLFxuXG4gICAgICAgICAgICAgU2VsZWN0RGF0YSwgQXJyYXlEYXRhLCBBamF4RGF0YSwgVGFncywgVG9rZW5pemVyLFxuICAgICAgICAgICAgIE1pbmltdW1JbnB1dExlbmd0aCwgTWF4aW11bUlucHV0TGVuZ3RoLCBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoLFxuXG4gICAgICAgICAgICAgRHJvcGRvd24sIERyb3Bkb3duU2VhcmNoLCBIaWRlUGxhY2Vob2xkZXIsIEluZmluaXRlU2Nyb2xsLFxuICAgICAgICAgICAgIEF0dGFjaEJvZHksIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoLCBTZWxlY3RPbkNsb3NlLCBDbG9zZU9uU2VsZWN0LFxuXG4gICAgICAgICAgICAgRW5nbGlzaFRyYW5zbGF0aW9uKSB7XG4gIGZ1bmN0aW9uIERlZmF1bHRzICgpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBEZWZhdWx0cy5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5hamF4ICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IEFqYXhEYXRhO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gQXJyYXlEYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFNlbGVjdERhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm1pbmltdW1JbnB1dExlbmd0aCA+IDApIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgTWluaW11bUlucHV0TGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm1heGltdW1JbnB1dExlbmd0aCA+IDApIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgTWF4aW11bUlucHV0TGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm1heGltdW1TZWxlY3Rpb25MZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIE1heGltdW1TZWxlY3Rpb25MZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudGFncykge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUob3B0aW9ucy5kYXRhQWRhcHRlciwgVGFncyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnRva2VuU2VwYXJhdG9ycyAhPSBudWxsIHx8IG9wdGlvbnMudG9rZW5pemVyICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgVG9rZW5pemVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnF1ZXJ5ICE9IG51bGwpIHtcbiAgICAgICAgdmFyIFF1ZXJ5ID0gcmVxdWlyZShvcHRpb25zLmFtZEJhc2UgKyAnY29tcGF0L3F1ZXJ5Jyk7XG5cbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgUXVlcnlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuaW5pdFNlbGVjdGlvbiAhPSBudWxsKSB7XG4gICAgICAgIHZhciBJbml0U2VsZWN0aW9uID0gcmVxdWlyZShvcHRpb25zLmFtZEJhc2UgKyAnY29tcGF0L2luaXRTZWxlY3Rpb24nKTtcblxuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBJbml0U2VsZWN0aW9uXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9IFJlc3VsdHNMaXN0O1xuXG4gICAgICBpZiAob3B0aW9ucy5hamF4ICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIsXG4gICAgICAgICAgSW5maW5pdGVTY3JvbGxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucGxhY2Vob2xkZXIgIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlcixcbiAgICAgICAgICBIaWRlUGxhY2Vob2xkZXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0T25DbG9zZSkge1xuICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlcixcbiAgICAgICAgICBTZWxlY3RPbkNsb3NlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLm11bHRpcGxlKSB7XG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gRHJvcGRvd247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgU2VhcmNoYWJsZURyb3Bkb3duID0gVXRpbHMuRGVjb3JhdGUoRHJvcGRvd24sIERyb3Bkb3duU2VhcmNoKTtcblxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFNlYXJjaGFibGVEcm9wZG93bjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggIT09IDApIHtcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlcixcbiAgICAgICAgICBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXG4gICAgICAgICAgQ2xvc2VPblNlbGVjdFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyAhPSBudWxsIHx8XG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25Dc3MgIT0gbnVsbCB8fFxuICAgICAgICBvcHRpb25zLmFkYXB0RHJvcGRvd25Dc3NDbGFzcyAhPSBudWxsXG4gICAgICApIHtcbiAgICAgICAgdmFyIERyb3Bkb3duQ1NTID0gcmVxdWlyZShvcHRpb25zLmFtZEJhc2UgKyAnY29tcGF0L2Ryb3Bkb3duQ3NzJyk7XG5cbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlcixcbiAgICAgICAgICBEcm9wZG93bkNTU1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlcixcbiAgICAgICAgQXR0YWNoQm9keVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLm11bHRpcGxlKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IE11bHRpcGxlU2VsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gU2luZ2xlU2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIHBsYWNlaG9sZGVyIG1peGluIGlmIGEgcGxhY2Vob2xkZXIgd2FzIHNwZWNpZmllZFxuICAgICAgaWYgKG9wdGlvbnMucGxhY2Vob2xkZXIgIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXG4gICAgICAgICAgUGxhY2Vob2xkZXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWxsb3dDbGVhcikge1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXG4gICAgICAgICAgQWxsb3dDbGVhclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5tdWx0aXBsZSkge1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXG4gICAgICAgICAgU2VsZWN0aW9uU2VhcmNoXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyAhPSBudWxsIHx8XG4gICAgICAgIG9wdGlvbnMuY29udGFpbmVyQ3NzICE9IG51bGwgfHxcbiAgICAgICAgb3B0aW9ucy5hZGFwdENvbnRhaW5lckNzc0NsYXNzICE9IG51bGxcbiAgICAgICkge1xuICAgICAgICB2YXIgQ29udGFpbmVyQ1NTID0gcmVxdWlyZShvcHRpb25zLmFtZEJhc2UgKyAnY29tcGF0L2NvbnRhaW5lckNzcycpO1xuXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBDb250YWluZXJDU1NcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgRXZlbnRSZWxheVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZGVmYXVsdHMgd2VyZSBub3QgcHJldmlvdXNseSBhcHBsaWVkIGZyb20gYW4gZWxlbWVudCwgaXQgaXNcbiAgICAvLyBwb3NzaWJsZSBmb3IgdGhlIGxhbmd1YWdlIG9wdGlvbiB0byBoYXZlIG5vdCBiZWVuIHJlc29sdmVkXG4gICAgb3B0aW9ucy5sYW5ndWFnZSA9IHRoaXMuX3Jlc29sdmVMYW5ndWFnZShvcHRpb25zLmxhbmd1YWdlKTtcblxuICAgIC8vIEFsd2F5cyBmYWxsIGJhY2sgdG8gRW5nbGlzaCBzaW5jZSBpdCB3aWxsIGFsd2F5cyBiZSBjb21wbGV0ZVxuICAgIG9wdGlvbnMubGFuZ3VhZ2UucHVzaCgnZW4nKTtcblxuICAgIHZhciB1bmlxdWVMYW5ndWFnZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGwgPSAwOyBsIDwgb3B0aW9ucy5sYW5ndWFnZS5sZW5ndGg7IGwrKykge1xuICAgICAgdmFyIGxhbmd1YWdlID0gb3B0aW9ucy5sYW5ndWFnZVtsXTtcblxuICAgICAgaWYgKHVuaXF1ZUxhbmd1YWdlcy5pbmRleE9mKGxhbmd1YWdlKSA9PT0gLTEpIHtcbiAgICAgICAgdW5pcXVlTGFuZ3VhZ2VzLnB1c2gobGFuZ3VhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnMubGFuZ3VhZ2UgPSB1bmlxdWVMYW5ndWFnZXM7XG5cbiAgICBvcHRpb25zLnRyYW5zbGF0aW9ucyA9IHRoaXMuX3Byb2Nlc3NUcmFuc2xhdGlvbnMoXG4gICAgICBvcHRpb25zLmxhbmd1YWdlLFxuICAgICAgb3B0aW9ucy5kZWJ1Z1xuICAgICk7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfTtcblxuICBEZWZhdWx0cy5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gc3RyaXBEaWFjcml0aWNzICh0ZXh0KSB7XG4gICAgICAvLyBVc2VkICd1bmkgcmFuZ2UgKyBuYW1lZCBmdW5jdGlvbicgZnJvbSBodHRwOi8vanNwZXJmLmNvbS9kaWFjcml0aWNzLzE4XG4gICAgICBmdW5jdGlvbiBtYXRjaChhKSB7XG4gICAgICAgIHJldHVybiBESUFDUklUSUNTW2FdIHx8IGE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teXFx1MDAwMC1cXHUwMDdFXS9nLCBtYXRjaCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF0Y2hlciAocGFyYW1zLCBkYXRhKSB7XG4gICAgICAvLyBBbHdheXMgcmV0dXJuIHRoZSBvYmplY3QgaWYgdGhlcmUgaXMgbm90aGluZyB0byBjb21wYXJlXG4gICAgICBpZiAoJC50cmltKHBhcmFtcy50ZXJtKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIC8vIERvIGEgcmVjdXJzaXZlIGNoZWNrIGZvciBvcHRpb25zIHdpdGggY2hpbGRyZW5cbiAgICAgIGlmIChkYXRhLmNoaWxkcmVuICYmIGRhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBDbG9uZSB0aGUgZGF0YSBvYmplY3QgaWYgdGhlcmUgYXJlIGNoaWxkcmVuXG4gICAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgYXMgd2UgbW9kaWZ5IHRoZSBvYmplY3QgdG8gcmVtb3ZlIGFueSBub24tbWF0Y2hlc1xuICAgICAgICB2YXIgbWF0Y2ggPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGF0YSk7XG5cbiAgICAgICAgLy8gQ2hlY2sgZWFjaCBjaGlsZCBvZiB0aGUgb3B0aW9uXG4gICAgICAgIGZvciAodmFyIGMgPSBkYXRhLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGMgPj0gMDsgYy0tKSB7XG4gICAgICAgICAgdmFyIGNoaWxkID0gZGF0YS5jaGlsZHJlbltjXTtcblxuICAgICAgICAgIHZhciBtYXRjaGVzID0gbWF0Y2hlcihwYXJhbXMsIGNoaWxkKTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIHdhc24ndCBhIG1hdGNoLCByZW1vdmUgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXlcbiAgICAgICAgICBpZiAobWF0Y2hlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBtYXRjaC5jaGlsZHJlbi5zcGxpY2UoYywgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgYW55IGNoaWxkcmVuIG1hdGNoZWQsIHJldHVybiB0aGUgbmV3IG9iamVjdFxuICAgICAgICBpZiAobWF0Y2guY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIHdlcmUgbm8gbWF0Y2hpbmcgY2hpbGRyZW4sIGNoZWNrIGp1c3QgdGhlIHBsYWluIG9iamVjdFxuICAgICAgICByZXR1cm4gbWF0Y2hlcihwYXJhbXMsIG1hdGNoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9yaWdpbmFsID0gc3RyaXBEaWFjcml0aWNzKGRhdGEudGV4dCkudG9VcHBlckNhc2UoKTtcbiAgICAgIHZhciB0ZXJtID0gc3RyaXBEaWFjcml0aWNzKHBhcmFtcy50ZXJtKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdGV4dCBjb250YWlucyB0aGUgdGVybVxuICAgICAgaWYgKG9yaWdpbmFsLmluZGV4T2YodGVybSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgZG9lc24ndCBjb250YWluIHRoZSB0ZXJtLCBkb24ndCByZXR1cm4gYW55dGhpbmdcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBhbWRCYXNlOiAnLi8nLFxuICAgICAgYW1kTGFuZ3VhZ2VCYXNlOiAnLi9pMThuLycsXG4gICAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxuICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgZHJvcGRvd25BdXRvV2lkdGg6IGZhbHNlLFxuICAgICAgZXNjYXBlTWFya3VwOiBVdGlscy5lc2NhcGVNYXJrdXAsXG4gICAgICBsYW5ndWFnZToge30sXG4gICAgICBtYXRjaGVyOiBtYXRjaGVyLFxuICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAwLFxuICAgICAgbWF4aW11bUlucHV0TGVuZ3RoOiAwLFxuICAgICAgbWF4aW11bVNlbGVjdGlvbkxlbmd0aDogMCxcbiAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAwLFxuICAgICAgc2VsZWN0T25DbG9zZTogZmFsc2UsXG4gICAgICBzY3JvbGxBZnRlclNlbGVjdDogZmFsc2UsXG4gICAgICBzb3J0ZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlUmVzdWx0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQudGV4dDtcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZVNlbGVjdGlvbjogZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gc2VsZWN0aW9uLnRleHQ7XG4gICAgICB9LFxuICAgICAgdGhlbWU6ICdkZWZhdWx0JyxcbiAgICAgIHdpZHRoOiAncmVzb2x2ZSdcbiAgICB9O1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5hcHBseUZyb21FbGVtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMsICRlbGVtZW50KSB7XG4gICAgdmFyIG9wdGlvbkxhbmd1YWdlID0gb3B0aW9ucy5sYW5ndWFnZTtcbiAgICB2YXIgZGVmYXVsdExhbmd1YWdlID0gdGhpcy5kZWZhdWx0cy5sYW5ndWFnZTtcbiAgICB2YXIgZWxlbWVudExhbmd1YWdlID0gJGVsZW1lbnQucHJvcCgnbGFuZycpO1xuICAgIHZhciBwYXJlbnRMYW5ndWFnZSA9ICRlbGVtZW50LmNsb3Nlc3QoJ1tsYW5nXScpLnByb3AoJ2xhbmcnKTtcblxuICAgIHZhciBsYW5ndWFnZXMgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmNhbGwoXG4gICAgICB0aGlzLl9yZXNvbHZlTGFuZ3VhZ2UoZWxlbWVudExhbmd1YWdlKSxcbiAgICAgIHRoaXMuX3Jlc29sdmVMYW5ndWFnZShvcHRpb25MYW5ndWFnZSksXG4gICAgICB0aGlzLl9yZXNvbHZlTGFuZ3VhZ2UoZGVmYXVsdExhbmd1YWdlKSxcbiAgICAgIHRoaXMuX3Jlc29sdmVMYW5ndWFnZShwYXJlbnRMYW5ndWFnZSlcbiAgICApO1xuXG4gICAgb3B0aW9ucy5sYW5ndWFnZSA9IGxhbmd1YWdlcztcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5fcmVzb2x2ZUxhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XG4gICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGlmICgkLmlzRW1wdHlPYmplY3QobGFuZ3VhZ2UpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKCQuaXNQbGFpbk9iamVjdChsYW5ndWFnZSkpIHtcbiAgICAgIHJldHVybiBbbGFuZ3VhZ2VdO1xuICAgIH1cblxuICAgIHZhciBsYW5ndWFnZXM7XG5cbiAgICBpZiAoISQuaXNBcnJheShsYW5ndWFnZSkpIHtcbiAgICAgIGxhbmd1YWdlcyA9IFtsYW5ndWFnZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhbmd1YWdlcyA9IGxhbmd1YWdlO1xuICAgIH1cblxuICAgIHZhciByZXNvbHZlZExhbmd1YWdlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgbCA9IDA7IGwgPCBsYW5ndWFnZXMubGVuZ3RoOyBsKyspIHtcbiAgICAgIHJlc29sdmVkTGFuZ3VhZ2VzLnB1c2gobGFuZ3VhZ2VzW2xdKTtcblxuICAgICAgaWYgKHR5cGVvZiBsYW5ndWFnZXNbbF0gPT09ICdzdHJpbmcnICYmIGxhbmd1YWdlc1tsXS5pbmRleE9mKCctJykgPiAwKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIHJlZ2lvbiBpbmZvcm1hdGlvbiBpZiBpdCBpcyBpbmNsdWRlZFxuICAgICAgICB2YXIgbGFuZ3VhZ2VQYXJ0cyA9IGxhbmd1YWdlc1tsXS5zcGxpdCgnLScpO1xuICAgICAgICB2YXIgYmFzZUxhbmd1YWdlID0gbGFuZ3VhZ2VQYXJ0c1swXTtcblxuICAgICAgICByZXNvbHZlZExhbmd1YWdlcy5wdXNoKGJhc2VMYW5ndWFnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVkTGFuZ3VhZ2VzO1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5fcHJvY2Vzc1RyYW5zbGF0aW9ucyA9IGZ1bmN0aW9uIChsYW5ndWFnZXMsIGRlYnVnKSB7XG4gICAgdmFyIHRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbigpO1xuXG4gICAgZm9yICh2YXIgbCA9IDA7IGwgPCBsYW5ndWFnZXMubGVuZ3RoOyBsKyspIHtcbiAgICAgIHZhciBsYW5ndWFnZURhdGEgPSBuZXcgVHJhbnNsYXRpb24oKTtcblxuICAgICAgdmFyIGxhbmd1YWdlID0gbGFuZ3VhZ2VzW2xdO1xuXG4gICAgICBpZiAodHlwZW9mIGxhbmd1YWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRyeSB0byBsb2FkIGl0IHdpdGggdGhlIG9yaWdpbmFsIG5hbWVcbiAgICAgICAgICBsYW5ndWFnZURhdGEgPSBUcmFuc2xhdGlvbi5sb2FkUGF0aChsYW5ndWFnZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gSWYgd2UgY291bGRuJ3QgbG9hZCBpdCwgY2hlY2sgaWYgaXQgd2Fzbid0IHRoZSBmdWxsIHBhdGhcbiAgICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5kZWZhdWx0cy5hbWRMYW5ndWFnZUJhc2UgKyBsYW5ndWFnZTtcbiAgICAgICAgICAgIGxhbmd1YWdlRGF0YSA9IFRyYW5zbGF0aW9uLmxvYWRQYXRoKGxhbmd1YWdlKTtcbiAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgLy8gVGhlIHRyYW5zbGF0aW9uIGNvdWxkIG5vdCBiZSBsb2FkZWQgYXQgYWxsLiBTb21ldGltZXMgdGhpcyBpc1xuICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiBhIGNvbmZpZ3VyYXRpb24gcHJvYmxlbSwgb3RoZXIgdGltZXMgdGhpcyBjYW4gYmVcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgaG93IFNlbGVjdDIgaGVscHMgbG9hZCBhbGwgcG9zc2libGUgdHJhbnNsYXRpb24gZmlsZXNcbiAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICdTZWxlY3QyOiBUaGUgbGFuZ3VhZ2UgZmlsZSBmb3IgXCInICsgbGFuZ3VhZ2UgKyAnXCIgY291bGQgJyArXG4gICAgICAgICAgICAgICAgJ25vdCBiZSBhdXRvbWF0aWNhbGx5IGxvYWRlZC4gQSBmYWxsYmFjayB3aWxsIGJlIHVzZWQgaW5zdGVhZC4nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCQuaXNQbGFpbk9iamVjdChsYW5ndWFnZSkpIHtcbiAgICAgICAgbGFuZ3VhZ2VEYXRhID0gbmV3IFRyYW5zbGF0aW9uKGxhbmd1YWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhbmd1YWdlRGF0YSA9IGxhbmd1YWdlO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2xhdGlvbnMuZXh0ZW5kKGxhbmd1YWdlRGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcbiAgfTtcblxuICBEZWZhdWx0cy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgY2FtZWxLZXkgPSAkLmNhbWVsQ2FzZShrZXkpO1xuXG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICBkYXRhW2NhbWVsS2V5XSA9IHZhbHVlO1xuXG4gICAgdmFyIGNvbnZlcnRlZERhdGEgPSBVdGlscy5fY29udmVydERhdGEoZGF0YSk7XG5cbiAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLmRlZmF1bHRzLCBjb252ZXJ0ZWREYXRhKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdHMgPSBuZXcgRGVmYXVsdHMoKTtcblxuICByZXR1cm4gZGVmYXVsdHM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL29wdGlvbnMnLFtcbiAgJ3JlcXVpcmUnLFxuICAnanF1ZXJ5JyxcbiAgJy4vZGVmYXVsdHMnLFxuICAnLi91dGlscydcbl0sIGZ1bmN0aW9uIChyZXF1aXJlLCAkLCBEZWZhdWx0cywgVXRpbHMpIHtcbiAgZnVuY3Rpb24gT3B0aW9ucyAob3B0aW9ucywgJGVsZW1lbnQpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKCRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZnJvbUVsZW1lbnQoJGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICgkZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBEZWZhdWx0cy5hcHBseUZyb21FbGVtZW50KHRoaXMub3B0aW9ucywgJGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IERlZmF1bHRzLmFwcGx5KHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAoJGVsZW1lbnQgJiYgJGVsZW1lbnQuaXMoJ2lucHV0JykpIHtcbiAgICAgIHZhciBJbnB1dENvbXBhdCA9IHJlcXVpcmUodGhpcy5nZXQoJ2FtZEJhc2UnKSArICdjb21wYXQvaW5wdXREYXRhJyk7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICB0aGlzLm9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgIElucHV0Q29tcGF0XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIE9wdGlvbnMucHJvdG90eXBlLmZyb21FbGVtZW50ID0gZnVuY3Rpb24gKCRlKSB7XG4gICAgdmFyIGV4Y2x1ZGVkRGF0YSA9IFsnc2VsZWN0MiddO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tdWx0aXBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLm9wdGlvbnMubXVsdGlwbGUgPSAkZS5wcm9wKCdtdWx0aXBsZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5vcHRpb25zLmRpc2FibGVkID0gJGUucHJvcCgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmRpciA9PSBudWxsKSB7XG4gICAgICBpZiAoJGUucHJvcCgnZGlyJykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRpciA9ICRlLnByb3AoJ2RpcicpO1xuICAgICAgfSBlbHNlIGlmICgkZS5jbG9zZXN0KCdbZGlyXScpLnByb3AoJ2RpcicpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kaXIgPSAkZS5jbG9zZXN0KCdbZGlyXScpLnByb3AoJ2RpcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRpciA9ICdsdHInO1xuICAgICAgfVxuICAgIH1cblxuICAgICRlLnByb3AoJ2Rpc2FibGVkJywgdGhpcy5vcHRpb25zLmRpc2FibGVkKTtcbiAgICAkZS5wcm9wKCdtdWx0aXBsZScsIHRoaXMub3B0aW9ucy5tdWx0aXBsZSk7XG5cbiAgICBpZiAoVXRpbHMuR2V0RGF0YSgkZVswXSwgJ3NlbGVjdDJUYWdzJykpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGVidWcgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnU2VsZWN0MjogVGhlIGBkYXRhLXNlbGVjdDItdGFnc2AgYXR0cmlidXRlIGhhcyBiZWVuIGNoYW5nZWQgdG8gJyArXG4gICAgICAgICAgJ3VzZSB0aGUgYGRhdGEtZGF0YWAgYW5kIGBkYXRhLXRhZ3M9XCJ0cnVlXCJgIGF0dHJpYnV0ZXMgYW5kIHdpbGwgYmUgJyArXG4gICAgICAgICAgJ3JlbW92ZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFNlbGVjdDIuJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBVdGlscy5TdG9yZURhdGEoJGVbMF0sICdkYXRhJywgVXRpbHMuR2V0RGF0YSgkZVswXSwgJ3NlbGVjdDJUYWdzJykpO1xuICAgICAgVXRpbHMuU3RvcmVEYXRhKCRlWzBdLCAndGFncycsIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChVdGlscy5HZXREYXRhKCRlWzBdLCAnYWpheFVybCcpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1NlbGVjdDI6IFRoZSBgZGF0YS1hamF4LXVybGAgYXR0cmlidXRlIGhhcyBiZWVuIGNoYW5nZWQgdG8gJyArXG4gICAgICAgICAgJ2BkYXRhLWFqYXgtLXVybGAgYW5kIHN1cHBvcnQgZm9yIHRoZSBvbGQgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZCcgK1xuICAgICAgICAgICcgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFNlbGVjdDIuJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAkZS5hdHRyKCdhamF4LS11cmwnLCBVdGlscy5HZXREYXRhKCRlWzBdLCAnYWpheFVybCcpKTtcbiAgICAgIFV0aWxzLlN0b3JlRGF0YSgkZVswXSwgJ2FqYXgtVXJsJywgVXRpbHMuR2V0RGF0YSgkZVswXSwgJ2FqYXhVcmwnKSk7XG4gICAgfVxuXG4gICAgdmFyIGRhdGFzZXQgPSB7fTtcblxuICAgIGZ1bmN0aW9uIHVwcGVyQ2FzZUxldHRlcihfLCBsZXR0ZXIpIHtcbiAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBQcmUtbG9hZCBhbGwgb2YgdGhlIGF0dHJpYnV0ZXMgd2hpY2ggYXJlIHByZWZpeGVkIHdpdGggYGRhdGEtYFxuICAgIGZvciAodmFyIGF0dHIgPSAwOyBhdHRyIDwgJGVbMF0uYXR0cmlidXRlcy5sZW5ndGg7IGF0dHIrKykge1xuICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSAkZVswXS5hdHRyaWJ1dGVzW2F0dHJdLm5hbWU7XG4gICAgICB2YXIgcHJlZml4ID0gJ2RhdGEtJztcblxuICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUuc3Vic3RyKDAsIHByZWZpeC5sZW5ndGgpID09IHByZWZpeCkge1xuICAgICAgICAvLyBHZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBhdHRyaWJ1dGUgYWZ0ZXIgYGRhdGEtYFxuICAgICAgICB2YXIgZGF0YU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoKTtcblxuICAgICAgICAvLyBHZXQgdGhlIGRhdGEgY29udGVudHMgZnJvbSB0aGUgY29uc2lzdGVudCBzb3VyY2VcbiAgICAgICAgLy8gVGhpcyBpcyBtb3JlIHRoYW4gbGlrZWx5IHRoZSBqUXVlcnkgZGF0YSBoZWxwZXJcbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IFV0aWxzLkdldERhdGEoJGVbMF0sIGRhdGFOYW1lKTtcblxuICAgICAgICAvLyBjYW1lbENhc2UgdGhlIGF0dHJpYnV0ZSBuYW1lIHRvIG1hdGNoIHRoZSBzcGVjXG4gICAgICAgIHZhciBjYW1lbERhdGFOYW1lID0gZGF0YU5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgdXBwZXJDYXNlTGV0dGVyKTtcblxuICAgICAgICAvLyBTdG9yZSB0aGUgZGF0YSBhdHRyaWJ1dGUgY29udGVudHMgaW50byB0aGUgZGF0YXNldCBzaW5jZVxuICAgICAgICBkYXRhc2V0W2NhbWVsRGF0YU5hbWVdID0gZGF0YVZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByZWZlciB0aGUgZWxlbWVudCdzIGBkYXRhc2V0YCBhdHRyaWJ1dGUgaWYgaXQgZXhpc3RzXG4gICAgLy8galF1ZXJ5IDEueCBkb2VzIG5vdCBjb3JyZWN0bHkgaGFuZGxlIGRhdGEgYXR0cmlidXRlcyB3aXRoIG11bHRpcGxlIGRhc2hlc1xuICAgIGlmICgkLmZuLmpxdWVyeSAmJiAkLmZuLmpxdWVyeS5zdWJzdHIoMCwgMikgPT0gJzEuJyAmJiAkZVswXS5kYXRhc2V0KSB7XG4gICAgICBkYXRhc2V0ID0gJC5leHRlbmQodHJ1ZSwge30sICRlWzBdLmRhdGFzZXQsIGRhdGFzZXQpO1xuICAgIH1cblxuICAgIC8vIFByZWZlciBvdXIgaW50ZXJuYWwgZGF0YSBjYWNoZSBpZiBpdCBleGlzdHNcbiAgICB2YXIgZGF0YSA9ICQuZXh0ZW5kKHRydWUsIHt9LCBVdGlscy5HZXREYXRhKCRlWzBdKSwgZGF0YXNldCk7XG5cbiAgICBkYXRhID0gVXRpbHMuX2NvbnZlcnREYXRhKGRhdGEpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmICgkLmluQXJyYXkoa2V5LCBleGNsdWRlZERhdGEpID4gLTEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgkLmlzUGxhaW5PYmplY3QodGhpcy5vcHRpb25zW2tleV0pKSB7XG4gICAgICAgICQuZXh0ZW5kKHRoaXMub3B0aW9uc1trZXldLCBkYXRhW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHRpb25zW2tleV0gPSBkYXRhW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgT3B0aW9ucy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnNba2V5XTtcbiAgfTtcblxuICBPcHRpb25zLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgICB0aGlzLm9wdGlvbnNba2V5XSA9IHZhbDtcbiAgfTtcblxuICByZXR1cm4gT3B0aW9ucztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvY29yZScsW1xuICAnanF1ZXJ5JyxcbiAgJy4vb3B0aW9ucycsXG4gICcuL3V0aWxzJyxcbiAgJy4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBPcHRpb25zLCBVdGlscywgS0VZUykge1xuICB2YXIgU2VsZWN0MiA9IGZ1bmN0aW9uICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGlmIChVdGlscy5HZXREYXRhKCRlbGVtZW50WzBdLCAnc2VsZWN0MicpICE9IG51bGwpIHtcbiAgICAgIFV0aWxzLkdldERhdGEoJGVsZW1lbnRbMF0sICdzZWxlY3QyJykuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgIHRoaXMuaWQgPSB0aGlzLl9nZW5lcmF0ZUlkKCRlbGVtZW50KTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucywgJGVsZW1lbnQpO1xuXG4gICAgU2VsZWN0Mi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcblxuICAgIC8vIFNldCB1cCB0aGUgdGFiaW5kZXhcblxuICAgIHZhciB0YWJpbmRleCA9ICRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JykgfHwgMDtcbiAgICBVdGlscy5TdG9yZURhdGEoJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnLCB0YWJpbmRleCk7XG4gICAgJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgIC8vIFNldCB1cCBjb250YWluZXJzIGFuZCBhZGFwdGVyc1xuXG4gICAgdmFyIERhdGFBZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgnZGF0YUFkYXB0ZXInKTtcbiAgICB0aGlzLmRhdGFBZGFwdGVyID0gbmV3IERhdGFBZGFwdGVyKCRlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyICRjb250YWluZXIgPSB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5fcGxhY2VDb250YWluZXIoJGNvbnRhaW5lcik7XG5cbiAgICB2YXIgU2VsZWN0aW9uQWRhcHRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ3NlbGVjdGlvbkFkYXB0ZXInKTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25BZGFwdGVyKCRlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuJHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnJlbmRlcigpO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24ucG9zaXRpb24odGhpcy4kc2VsZWN0aW9uLCAkY29udGFpbmVyKTtcblxuICAgIHZhciBEcm9wZG93bkFkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdkcm9wZG93bkFkYXB0ZXInKTtcbiAgICB0aGlzLmRyb3Bkb3duID0gbmV3IERyb3Bkb3duQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLiRkcm9wZG93biA9IHRoaXMuZHJvcGRvd24ucmVuZGVyKCk7XG5cbiAgICB0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKHRoaXMuJGRyb3Bkb3duLCAkY29udGFpbmVyKTtcblxuICAgIHZhciBSZXN1bHRzQWRhcHRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ3Jlc3VsdHNBZGFwdGVyJyk7XG4gICAgdGhpcy5yZXN1bHRzID0gbmV3IFJlc3VsdHNBZGFwdGVyKCRlbGVtZW50LCB0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YUFkYXB0ZXIpO1xuICAgIHRoaXMuJHJlc3VsdHMgPSB0aGlzLnJlc3VsdHMucmVuZGVyKCk7XG5cbiAgICB0aGlzLnJlc3VsdHMucG9zaXRpb24odGhpcy4kcmVzdWx0cywgdGhpcy4kZHJvcGRvd24pO1xuXG4gICAgLy8gQmluZCBldmVudHNcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIEJpbmQgdGhlIGNvbnRhaW5lciB0byBhbGwgb2YgdGhlIGFkYXB0ZXJzXG4gICAgdGhpcy5fYmluZEFkYXB0ZXJzKCk7XG5cbiAgICAvLyBSZWdpc3RlciBhbnkgRE9NIGV2ZW50IGhhbmRsZXJzXG4gICAgdGhpcy5fcmVnaXN0ZXJEb21FdmVudHMoKTtcblxuICAgIC8vIFJlZ2lzdGVyIGFueSBpbnRlcm5hbCBldmVudCBoYW5kbGVyc1xuICAgIHRoaXMuX3JlZ2lzdGVyRGF0YUV2ZW50cygpO1xuICAgIHRoaXMuX3JlZ2lzdGVyU2VsZWN0aW9uRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJEcm9wZG93bkV2ZW50cygpO1xuICAgIHRoaXMuX3JlZ2lzdGVyUmVzdWx0c0V2ZW50cygpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnRzKCk7XG5cbiAgICAvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgICB0aGlzLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGluaXRpYWxEYXRhKSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdGlvbjp1cGRhdGUnLCB7XG4gICAgICAgIGRhdGE6IGluaXRpYWxEYXRhXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEhpZGUgdGhlIG9yaWdpbmFsIHNlbGVjdFxuICAgICRlbGVtZW50LmFkZENsYXNzKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJyk7XG4gICAgJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgLy8gU3luY2hyb25pemUgYW55IG1vbml0b3JlZCBhdHRyaWJ1dGVzXG4gICAgdGhpcy5fc3luY0F0dHJpYnV0ZXMoKTtcblxuICAgIFV0aWxzLlN0b3JlRGF0YSgkZWxlbWVudFswXSwgJ3NlbGVjdDInLCB0aGlzKTtcblxuICAgIC8vIEVuc3VyZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoICRlbGVtZW50LmRhdGEoJ3NlbGVjdDInKS5cbiAgICAkZWxlbWVudC5kYXRhKCdzZWxlY3QyJywgdGhpcyk7XG4gIH07XG5cbiAgVXRpbHMuRXh0ZW5kKFNlbGVjdDIsIFV0aWxzLk9ic2VydmFibGUpO1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9nZW5lcmF0ZUlkID0gZnVuY3Rpb24gKCRlbGVtZW50KSB7XG4gICAgdmFyIGlkID0gJyc7XG5cbiAgICBpZiAoJGVsZW1lbnQuYXR0cignaWQnKSAhPSBudWxsKSB7XG4gICAgICBpZCA9ICRlbGVtZW50LmF0dHIoJ2lkJyk7XG4gICAgfSBlbHNlIGlmICgkZWxlbWVudC5hdHRyKCduYW1lJykgIT0gbnVsbCkge1xuICAgICAgaWQgPSAkZWxlbWVudC5hdHRyKCduYW1lJykgKyAnLScgKyBVdGlscy5nZW5lcmF0ZUNoYXJzKDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCA9IFV0aWxzLmdlbmVyYXRlQ2hhcnMoNCk7XG4gICAgfVxuXG4gICAgaWQgPSBpZC5yZXBsYWNlKC8oOnxcXC58XFxbfFxcXXwsKS9nLCAnJyk7XG4gICAgaWQgPSAnc2VsZWN0Mi0nICsgaWQ7XG5cbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3BsYWNlQ29udGFpbmVyID0gZnVuY3Rpb24gKCRjb250YWluZXIpIHtcbiAgICAkY29udGFpbmVyLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgdmFyIHdpZHRoID0gdGhpcy5fcmVzb2x2ZVdpZHRoKHRoaXMuJGVsZW1lbnQsIHRoaXMub3B0aW9ucy5nZXQoJ3dpZHRoJykpO1xuXG4gICAgaWYgKHdpZHRoICE9IG51bGwpIHtcbiAgICAgICRjb250YWluZXIuY3NzKCd3aWR0aCcsIHdpZHRoKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3Jlc29sdmVXaWR0aCA9IGZ1bmN0aW9uICgkZWxlbWVudCwgbWV0aG9kKSB7XG4gICAgdmFyIFdJRFRIID0gL153aWR0aDooKFstK10/KFswLTldKlxcLik/WzAtOV0rKShweHxlbXxleHwlfGlufGNtfG1tfHB0fHBjKSkvaTtcblxuICAgIGlmIChtZXRob2QgPT0gJ3Jlc29sdmUnKSB7XG4gICAgICB2YXIgc3R5bGVXaWR0aCA9IHRoaXMuX3Jlc29sdmVXaWR0aCgkZWxlbWVudCwgJ3N0eWxlJyk7XG5cbiAgICAgIGlmIChzdHlsZVdpZHRoICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlV2lkdGgoJGVsZW1lbnQsICdlbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PSAnZWxlbWVudCcpIHtcbiAgICAgIHZhciBlbGVtZW50V2lkdGggPSAkZWxlbWVudC5vdXRlcldpZHRoKGZhbHNlKTtcblxuICAgICAgaWYgKGVsZW1lbnRXaWR0aCA8PSAwKSB7XG4gICAgICAgIHJldHVybiAnYXV0byc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50V2lkdGggKyAncHgnO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QgPT0gJ3N0eWxlJykge1xuICAgICAgdmFyIHN0eWxlID0gJGVsZW1lbnQuYXR0cignc3R5bGUnKTtcblxuICAgICAgaWYgKHR5cGVvZihzdHlsZSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXR0cnMgPSBzdHlsZS5zcGxpdCgnOycpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkgPSBpICsgMSkge1xuICAgICAgICB2YXIgYXR0ciA9IGF0dHJzW2ldLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIHZhciBtYXRjaGVzID0gYXR0ci5tYXRjaChXSURUSCk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaGVzWzFdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QgPT0gJ2NvbXB1dGVkc3R5bGUnKSB7XG4gICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCRlbGVtZW50WzBdKTtcblxuICAgICAgcmV0dXJuIGNvbXB1dGVkU3R5bGUud2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGhvZDtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fYmluZEFkYXB0ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGF0YUFkYXB0ZXIuYmluZCh0aGlzLCB0aGlzLiRjb250YWluZXIpO1xuICAgIHRoaXMuc2VsZWN0aW9uLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcblxuICAgIHRoaXMuZHJvcGRvd24uYmluZCh0aGlzLCB0aGlzLiRjb250YWluZXIpO1xuICAgIHRoaXMucmVzdWx0cy5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyRG9tRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2NoYW5nZS5zZWxlY3QyJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdmb2N1cy5zZWxlY3QyJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdmb2N1cycsIGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zeW5jQSA9IFV0aWxzLmJpbmQodGhpcy5fc3luY0F0dHJpYnV0ZXMsIHRoaXMpO1xuICAgIHRoaXMuX3N5bmNTID0gVXRpbHMuYmluZCh0aGlzLl9zeW5jU3VidHJlZSwgdGhpcyk7XG5cbiAgICBpZiAodGhpcy4kZWxlbWVudFswXS5hdHRhY2hFdmVudCkge1xuICAgICAgdGhpcy4kZWxlbWVudFswXS5hdHRhY2hFdmVudCgnb25wcm9wZXJ0eWNoYW5nZScsIHRoaXMuX3N5bmNBKTtcbiAgICB9XG5cbiAgICB2YXIgb2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fFxuICAgICAgd2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXIgfHxcbiAgICAgIHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyXG4gICAgO1xuXG4gICAgaWYgKG9ic2VydmVyICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IG9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgc2VsZi5fc3luY0EoKTtcbiAgICAgICAgc2VsZi5fc3luY1MobnVsbCwgbXV0YXRpb25zKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRlbGVtZW50WzBdLCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy4kZWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdET01BdHRyTW9kaWZpZWQnLFxuICAgICAgICBzZWxmLl9zeW5jQSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdET01Ob2RlSW5zZXJ0ZWQnLFxuICAgICAgICBzZWxmLl9zeW5jUyxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdET01Ob2RlUmVtb3ZlZCcsXG4gICAgICAgIHNlbGYuX3N5bmNTLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyRGF0YUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGFBZGFwdGVyLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyU2VsZWN0aW9uRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbm9uUmVsYXlFdmVudHMgPSBbJ3RvZ2dsZScsICdmb2N1cyddO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24ub24oJ3RvZ2dsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYudG9nZ2xlRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuZm9jdXMocGFyYW1zKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0aW9uLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgaWYgKCQuaW5BcnJheShuYW1lLCBub25SZWxheUV2ZW50cykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyRHJvcGRvd25FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kcm9wZG93bi5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlclJlc3VsdHNFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5yZXN1bHRzLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2VuYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWRpc2FibGVkJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1mb2N1cycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbigncXVlcnknLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBpZiAoIXNlbGYuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdvcGVuJywge30pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGFBZGFwdGVyLnF1ZXJ5KHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOmFsbCcsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHF1ZXJ5OiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3F1ZXJ5OmFwcGVuZCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHRoaXMuZGF0YUFkYXB0ZXIucXVlcnkocGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6YXBwZW5kJywge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgcXVlcnk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIga2V5ID0gZXZ0LndoaWNoO1xuXG4gICAgICBpZiAoc2VsZi5pc09wZW4oKSkge1xuICAgICAgICBpZiAoa2V5ID09PSBLRVlTLkVTQyB8fCBrZXkgPT09IEtFWVMuVEFCIHx8XG4gICAgICAgICAgICAoa2V5ID09PSBLRVlTLlVQICYmIGV2dC5hbHRLZXkpKSB7XG4gICAgICAgICAgc2VsZi5jbG9zZShldnQpO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOnNlbGVjdCcsIHt9KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKChrZXkgPT09IEtFWVMuU1BBQ0UgJiYgZXZ0LmN0cmxLZXkpKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOnRvZ2dsZScsIHt9KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gS0VZUy5VUCkge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czpwcmV2aW91cycsIHt9KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gS0VZUy5ET1dOKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOm5leHQnLCB7fSk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGtleSA9PT0gS0VZUy5FTlRFUiB8fCBrZXkgPT09IEtFWVMuU1BBQ0UgfHxcbiAgICAgICAgICAgIChrZXkgPT09IEtFWVMuRE9XTiAmJiBldnQuYWx0S2V5KSkge1xuICAgICAgICAgIHNlbGYub3BlbigpO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fc3luY0F0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnNldCgnZGlzYWJsZWQnLCB0aGlzLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJykpO1xuXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJpZ2dlcignZGlzYWJsZScsIHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmlnZ2VyKCdlbmFibGUnLCB7fSk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9pc0NoYW5nZU11dGF0aW9uID0gZnVuY3Rpb24gKGV2dCwgbXV0YXRpb25zKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBJZ25vcmUgYW55IG11dGF0aW9uIGV2ZW50cyByYWlzZWQgZm9yIGVsZW1lbnRzIHRoYXQgYXJlbid0IG9wdGlvbnMgb3JcbiAgICAvLyBvcHRncm91cHMuIFRoaXMgaGFuZGxlcyB0aGUgY2FzZSB3aGVuIHRoZSBzZWxlY3QgZWxlbWVudCBpcyBkZXN0cm95ZWRcbiAgICBpZiAoXG4gICAgICBldnQgJiYgZXZ0LnRhcmdldCAmJiAoXG4gICAgICAgIGV2dC50YXJnZXQubm9kZU5hbWUgIT09ICdPUFRJT04nICYmIGV2dC50YXJnZXQubm9kZU5hbWUgIT09ICdPUFRHUk9VUCdcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW11dGF0aW9ucykge1xuICAgICAgLy8gSWYgbXV0YXRpb24gZXZlbnRzIGFyZW4ndCBzdXBwb3J0ZWQsIHRoZW4gd2UgY2FuIG9ubHkgYXNzdW1lIHRoYXQgdGhlXG4gICAgICAvLyBjaGFuZ2UgYWZmZWN0ZWQgdGhlIHNlbGVjdGlvbnNcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAobXV0YXRpb25zLmFkZGVkTm9kZXMgJiYgbXV0YXRpb25zLmFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBtdXRhdGlvbnMuYWRkZWROb2Rlcy5sZW5ndGg7IG4rKykge1xuICAgICAgICB2YXIgbm9kZSA9IG11dGF0aW9ucy5hZGRlZE5vZGVzW25dO1xuXG4gICAgICAgIGlmIChub2RlLnNlbGVjdGVkKSB7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG11dGF0aW9ucy5yZW1vdmVkTm9kZXMgJiYgbXV0YXRpb25zLnJlbW92ZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCQuaXNBcnJheShtdXRhdGlvbnMpKSB7XG4gICAgICAkLmVhY2gobXV0YXRpb25zLCBmdW5jdGlvbihldnQsIG11dGF0aW9uKSB7XG4gICAgICAgIGlmIChzZWxmLl9pc0NoYW5nZU11dGF0aW9uKGV2dCwgbXV0YXRpb24pKSB7XG4gICAgICAgICAgLy8gV2UndmUgZm91bmQgYSBjaGFuZ2UgbXV0YXRpb24uXG4gICAgICAgICAgLy8gTGV0J3MgZXNjYXBlIGZyb20gdGhlIGxvb3AgYW5kIGNvbnRpbnVlXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3N5bmNTdWJ0cmVlID0gZnVuY3Rpb24gKGV2dCwgbXV0YXRpb25zKSB7XG4gICAgdmFyIGNoYW5nZWQgPSB0aGlzLl9pc0NoYW5nZU11dGF0aW9uKGV2dCwgbXV0YXRpb25zKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBPbmx5IHJlLXB1bGwgdGhlIGRhdGEgaWYgd2UgdGhpbmsgdGhlcmUgaXMgYSBjaGFuZ2VcbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uIChjdXJyZW50RGF0YSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdGlvbjp1cGRhdGUnLCB7XG4gICAgICAgICAgZGF0YTogY3VycmVudERhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSB0cmlnZ2VyIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgcHJlLWV2ZW50cyB3aGVuXG4gICAqIHRoZXJlIGFyZSBldmVudHMgdGhhdCBjYW4gYmUgcHJldmVudGVkLlxuICAgKi9cbiAgU2VsZWN0Mi5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7XG4gICAgdmFyIGFjdHVhbFRyaWdnZXIgPSBTZWxlY3QyLl9fc3VwZXJfXy50cmlnZ2VyO1xuICAgIHZhciBwcmVUcmlnZ2VyTWFwID0ge1xuICAgICAgJ29wZW4nOiAnb3BlbmluZycsXG4gICAgICAnY2xvc2UnOiAnY2xvc2luZycsXG4gICAgICAnc2VsZWN0JzogJ3NlbGVjdGluZycsXG4gICAgICAndW5zZWxlY3QnOiAndW5zZWxlY3RpbmcnLFxuICAgICAgJ2NsZWFyJzogJ2NsZWFyaW5nJ1xuICAgIH07XG5cbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhcmdzID0ge307XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgaW4gcHJlVHJpZ2dlck1hcCkge1xuICAgICAgdmFyIHByZVRyaWdnZXJOYW1lID0gcHJlVHJpZ2dlck1hcFtuYW1lXTtcbiAgICAgIHZhciBwcmVUcmlnZ2VyQXJncyA9IHtcbiAgICAgICAgcHJldmVudGVkOiBmYWxzZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgYXJnczogYXJnc1xuICAgICAgfTtcblxuICAgICAgYWN0dWFsVHJpZ2dlci5jYWxsKHRoaXMsIHByZVRyaWdnZXJOYW1lLCBwcmVUcmlnZ2VyQXJncyk7XG5cbiAgICAgIGlmIChwcmVUcmlnZ2VyQXJncy5wcmV2ZW50ZWQpIHtcbiAgICAgICAgYXJncy5wcmV2ZW50ZWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY3R1YWxUcmlnZ2VyLmNhbGwodGhpcywgbmFtZSwgYXJncyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUudG9nZ2xlRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5Jywge30pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcignY2xvc2UnLCB7IG9yaWdpbmFsRXZlbnQgOiBldnQgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gYWJzdHJhY3QgdGhlIFwiZW5hYmxlZFwiIChub3QgXCJkaXNhYmxlZFwiKSBzdGF0ZSBvZiB0aGlzXG4gICAqIG9iamVjdC5cbiAgICpcbiAgICogQHJldHVybiB7dHJ1ZX0gaWYgdGhlIGluc3RhbmNlIGlzIG5vdCBkaXNhYmxlZC5cbiAgICogQHJldHVybiB7ZmFsc2V9IGlmIHRoZSBpbnN0YW5jZSBpcyBkaXNhYmxlZC5cbiAgICovXG4gIFNlbGVjdDIucHJvdG90eXBlLmlzRW5hYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNEaXNhYmxlZCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIGFic3RyYWN0IHRoZSBcImRpc2FibGVkXCIgc3RhdGUgb2YgdGhpcyBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge3RydWV9IGlmIHRoZSBkaXNhYmxlZCBvcHRpb24gaXMgdHJ1ZS5cbiAgICogQHJldHVybiB7ZmFsc2V9IGlmIHRoZSBkaXNhYmxlZCBvcHRpb24gaXMgZmFsc2UuXG4gICAqL1xuICBTZWxlY3QyLnByb3RvdHlwZS5pc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0KCdkaXNhYmxlZCcpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy4kY29udGFpbmVyLmhhc0NsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmhhc0ZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLiRjb250YWluZXIuaGFzQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1mb2N1cycpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyBObyBuZWVkIHRvIHJlLXRyaWdnZXIgZm9jdXMgZXZlbnRzIGlmIHdlIGFyZSBhbHJlYWR5IGZvY3VzZWRcbiAgICBpZiAodGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4kY29udGFpbmVyLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZm9jdXMnKTtcbiAgICB0aGlzLnRyaWdnZXIoJ2ZvY3VzJywge30pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTZWxlY3QyOiBUaGUgYHNlbGVjdDIoXCJlbmFibGVcIilgIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsJyArXG4gICAgICAgICcgYmUgcmVtb3ZlZCBpbiBsYXRlciBTZWxlY3QyIHZlcnNpb25zLiBVc2UgJGVsZW1lbnQucHJvcChcImRpc2FibGVkXCIpJyArXG4gICAgICAgICcgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChhcmdzID09IG51bGwgfHwgYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIGFyZ3MgPSBbdHJ1ZV07XG4gICAgfVxuXG4gICAgdmFyIGRpc2FibGVkID0gIWFyZ3NbMF07XG5cbiAgICB0aGlzLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJywgZGlzYWJsZWQpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiZcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTZWxlY3QyOiBEYXRhIGNhbiBubyBsb25nZXIgYmUgc2V0IHVzaW5nIGBzZWxlY3QyKFwiZGF0YVwiKWAuIFlvdSAnICtcbiAgICAgICAgJ3Nob3VsZCBjb25zaWRlciBzZXR0aW5nIHRoZSB2YWx1ZSBpbnN0ZWFkIHVzaW5nIGAkZWxlbWVudC52YWwoKWAuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IFtdO1xuXG4gICAgdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uIChjdXJyZW50RGF0YSkge1xuICAgICAgZGF0YSA9IGN1cnJlbnREYXRhO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NlbGVjdDI6IFRoZSBgc2VsZWN0MihcInZhbFwiKWAgbWV0aG9kIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUnICtcbiAgICAgICAgJyByZW1vdmVkIGluIGxhdGVyIFNlbGVjdDIgdmVyc2lvbnMuIFVzZSAkZWxlbWVudC52YWwoKSBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MgPT0gbnVsbCB8fCBhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQudmFsKCk7XG4gICAgfVxuXG4gICAgdmFyIG5ld1ZhbCA9IGFyZ3NbMF07XG5cbiAgICBpZiAoJC5pc0FycmF5KG5ld1ZhbCkpIHtcbiAgICAgIG5ld1ZhbCA9ICQubWFwKG5ld1ZhbCwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LnZhbChuZXdWYWwpLnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRjb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICBpZiAodGhpcy4kZWxlbWVudFswXS5kZXRhY2hFdmVudCkge1xuICAgICAgdGhpcy4kZWxlbWVudFswXS5kZXRhY2hFdmVudCgnb25wcm9wZXJ0eWNoYW5nZScsIHRoaXMuX3N5bmNBKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy4kZWxlbWVudFswXS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdXG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01BdHRyTW9kaWZpZWQnLCB0aGlzLl9zeW5jQSwgZmFsc2UpO1xuICAgICAgdGhpcy4kZWxlbWVudFswXVxuICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgdGhpcy5fc3luY1MsIGZhbHNlKTtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF1cbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVSZW1vdmVkJywgdGhpcy5fc3luY1MsIGZhbHNlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zeW5jQSA9IG51bGw7XG4gICAgdGhpcy5fc3luY1MgPSBudWxsO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJy5zZWxlY3QyJyk7XG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcsXG4gICAgVXRpbHMuR2V0RGF0YSh0aGlzLiRlbGVtZW50WzBdLCAnb2xkLXRhYmluZGV4JykpO1xuXG4gICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZScpO1xuICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICBVdGlscy5SZW1vdmVEYXRhKHRoaXMuJGVsZW1lbnRbMF0pO1xuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlRGF0YSgnc2VsZWN0MicpO1xuXG4gICAgdGhpcy5kYXRhQWRhcHRlci5kZXN0cm95KCk7XG4gICAgdGhpcy5zZWxlY3Rpb24uZGVzdHJveSgpO1xuICAgIHRoaXMuZHJvcGRvd24uZGVzdHJveSgpO1xuICAgIHRoaXMucmVzdWx0cy5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmRhdGFBZGFwdGVyID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5kcm9wZG93biA9IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gbnVsbDtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRjb250YWluZXIgPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0MiBzZWxlY3QyLWNvbnRhaW5lclwiPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3Rpb25cIj48L3NwYW4+JyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cImRyb3Bkb3duLXdyYXBwZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgJGNvbnRhaW5lci5hdHRyKCdkaXInLCB0aGlzLm9wdGlvbnMuZ2V0KCdkaXInKSk7XG5cbiAgICB0aGlzLiRjb250YWluZXIgPSAkY29udGFpbmVyO1xuXG4gICAgdGhpcy4kY29udGFpbmVyLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tJyArIHRoaXMub3B0aW9ucy5nZXQoJ3RoZW1lJykpO1xuXG4gICAgVXRpbHMuU3RvcmVEYXRhKCRjb250YWluZXJbMF0sICdlbGVtZW50JywgdGhpcy4kZWxlbWVudCk7XG5cbiAgICByZXR1cm4gJGNvbnRhaW5lcjtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0Mjtcbn0pO1xuXG5TMi5kZWZpbmUoJ2pxdWVyeS1tb3VzZXdoZWVsJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICAvLyBVc2VkIHRvIHNoaW0galF1ZXJ5Lm1vdXNld2hlZWwgZm9yIG5vbi1mdWxsIGJ1aWxkcy5cbiAgcmV0dXJuICQ7XG59KTtcblxuUzIuZGVmaW5lKCdqcXVlcnkuc2VsZWN0MicsW1xuICAnanF1ZXJ5JyxcbiAgJ2pxdWVyeS1tb3VzZXdoZWVsJyxcblxuICAnLi9zZWxlY3QyL2NvcmUnLFxuICAnLi9zZWxlY3QyL2RlZmF1bHRzJyxcbiAgJy4vc2VsZWN0Mi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBfLCBTZWxlY3QyLCBEZWZhdWx0cywgVXRpbHMpIHtcbiAgaWYgKCQuZm4uc2VsZWN0MiA9PSBudWxsKSB7XG4gICAgLy8gQWxsIG1ldGhvZHMgdGhhdCBzaG91bGQgcmV0dXJuIHRoZSBlbGVtZW50XG4gICAgdmFyIHRoaXNNZXRob2RzID0gWydvcGVuJywgJ2Nsb3NlJywgJ2Rlc3Ryb3knXTtcblxuICAgICQuZm4uc2VsZWN0MiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBpbnN0YW5jZU9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgU2VsZWN0MigkKHRoaXMpLCBpbnN0YW5jZU9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciByZXQ7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IFV0aWxzLkdldERhdGEodGhpcywgJ3NlbGVjdDInKTtcblxuICAgICAgICAgIGlmIChpbnN0YW5jZSA9PSBudWxsICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICdUaGUgc2VsZWN0MihcXCcnICsgb3B0aW9ucyArICdcXCcpIG1ldGhvZCB3YXMgY2FsbGVkIG9uIGFuICcgK1xuICAgICAgICAgICAgICAnZWxlbWVudCB0aGF0IGlzIG5vdCB1c2luZyBTZWxlY3QyLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0ID0gaW5zdGFuY2Vbb3B0aW9uc10uYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBzaG91bGQgYmUgcmV0dXJuaW5nIGB0aGlzYFxuICAgICAgICBpZiAoJC5pbkFycmF5KG9wdGlvbnMsIHRoaXNNZXRob2RzKSA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50cyBmb3IgU2VsZWN0MjogJyArIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpZiAoJC5mbi5zZWxlY3QyLmRlZmF1bHRzID09IG51bGwpIHtcbiAgICAkLmZuLnNlbGVjdDIuZGVmYXVsdHMgPSBEZWZhdWx0cztcbiAgfVxuXG4gIHJldHVybiBTZWxlY3QyO1xufSk7XG5cbiAgLy8gUmV0dXJuIHRoZSBBTUQgbG9hZGVyIGNvbmZpZ3VyYXRpb24gc28gaXQgY2FuIGJlIHVzZWQgb3V0c2lkZSBvZiB0aGlzIGZpbGVcbiAgcmV0dXJuIHtcbiAgICBkZWZpbmU6IFMyLmRlZmluZSxcbiAgICByZXF1aXJlOiBTMi5yZXF1aXJlXG4gIH07XG59KCkpO1xuXG4gIC8vIEF1dG9sb2FkIHRoZSBqUXVlcnkgYmluZGluZ3NcbiAgLy8gV2Uga25vdyB0aGF0IGFsbCBvZiB0aGUgbW9kdWxlcyBleGlzdCBhYm92ZSB0aGlzLCBzbyB3ZSdyZSBzYWZlXG4gIHZhciBzZWxlY3QyID0gUzIucmVxdWlyZSgnanF1ZXJ5LnNlbGVjdDInKTtcblxuICAvLyBIb2xkIHRoZSBBTUQgbW9kdWxlIHJlZmVyZW5jZXMgb24gdGhlIGpRdWVyeSBmdW5jdGlvbiB0aGF0IHdhcyBqdXN0IGxvYWRlZFxuICAvLyBUaGlzIGFsbG93cyBTZWxlY3QyIHRvIHVzZSB0aGUgaW50ZXJuYWwgbG9hZGVyIG91dHNpZGUgb2YgdGhpcyBmaWxlLCBzdWNoXG4gIC8vIGFzIGluIHRoZSBsYW5ndWFnZSBmaWxlcy5cbiAgalF1ZXJ5LmZuLnNlbGVjdDIuYW1kID0gUzI7XG5cbiAgLy8gUmV0dXJuIHRoZSBTZWxlY3QyIGluc3RhbmNlIGZvciBhbnlvbmUgd2hvIGlzIGltcG9ydGluZyBpdC5cbiAgcmV0dXJuIHNlbGVjdDI7XG59KSk7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBcInNlbGVjdDJcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGh0bWwgPSB7XHJcbiAgICAgICAgY2l0eV90ZXh0OiBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dC10ZXh0XCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIiR7c2RvbmdraXJfbGN6LmNpdHlfdGV4dH1cIiBuYW1lPVwiY2FsY19zaGlwcGluZ19jaXR5XCIgaWQ9XCJjYWxjX3NoaXBwaW5nX2NpdHlcIiAvPmAsXHJcbiAgICAgICAgY2l0eV9zZWxlY3Q6IGA8c2VsZWN0IG5hbWU9XCJjYWxjX3NoaXBwaW5nX2NpdHlcIiBjbGFzcz1cInN0YXRlX3NlbGVjdFwiIGlkPVwiY2FsY19zaGlwcGluZ19jaXR5XCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7c2RvbmdraXJfbGN6LmNpdHlfdGV4dH1cIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4ke3Nkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHR9PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PmAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgdGhlIGlucHV0IGZpZWxkIHR5cGVcclxuICAgIGlmICgkKFwiI2NhbGNfc2hpcHBpbmdfY291bnRyeVwiKS52YWwoKSA9PSBcIklEXCIpIHtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGRcIikucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGRcIikuYWRkQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9uIGNvdW50cnkgY2hhbmdlXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCBcIiNjYWxjX3NoaXBwaW5nX2NvdW50cnlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX2NpdHlcIikudmFsKCkgPT0gXCJcIjtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuZW1wdHkoKTtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikudmFsKCkgPT0gXCJcIjtcclxuICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eV9maWVsZFwiKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIklEXCIpIHtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX2NpdHlfZmllbGRcIikuYXBwZW5kKGh0bWwuY2l0eV9zZWxlY3QpO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdF9maWVsZFwiKS5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX2NpdHlfZmllbGRcIikuYXBwZW5kKGh0bWwuY2l0eV90ZXh0KTtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0X2ZpZWxkXCIpLmFkZENsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPbiBzdGF0ZSBjaGFuZ2VcclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwiI2NhbGNfc2hpcHBpbmdfc3RhdGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gJCh0aGlzKS52YWwoKS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgY29uc3QgcHJvdmluY2VfaWQgPSBzdGF0ZVsxXTtcclxuICAgICAgICBpZiAocHJvdmluY2VfaWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX2dldF9jaXR5X29wdGlvbnMocHJvdmluY2VfaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNpdHkgY2hhbmdlXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCBcIiNjYWxjX3NoaXBwaW5nX2NpdHlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKFwiI2NhbGNfc2hpcHBpbmdfY291bnRyeVwiKS52YWwoKSA9PSBcIklEXCIpIHtcclxuICAgICAgICAgICAgc2Rva3JfZ2V0X3N1YmRpc3RyaWN0X29wdGlvbnMoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgIC8vIE9uIGNoYW5nZSBzdWJkaXN0cmljdFxyXG4gICAgICQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsICcjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCBjaXR5IG9wdGlvbnNcclxuICAgIGZ1bmN0aW9uIHNkb2tyX2dldF9jaXR5X29wdGlvbnMocHJvdmluY2VfaWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAocHJvdmluY2VfaWQgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfY2l0eVwiKS52YWwoKSA9PSBcIlwiO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLnZhbCgpID09IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X2NpdGllc19ieV9wcm92aW5jZV9pZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZV9pZDogcHJvdmluY2VfaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpdGllcyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgY2l0eS5jaXR5X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGAke2NpdHkudHlwZX0gJHtjaXR5Lm5hbWV9YCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc3ViZGlzdHJpY3Qgb3B0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2Rva3JfZ2V0X3N1YmRpc3RyaWN0X29wdGlvbnMoY2l0eV9pZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChjaXR5X2lkID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikudmFsKCkgPT0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfc3ViZGlzdHJpY3RzX2J5X2NpdHlfaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eV9pZDogY2l0eV9pZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViZGlzdHJpY3RzID0gcmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YmRpc3RyaWN0cy5mb3JFYWNoKChzdWJkaXN0cmljdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2NhbGNfc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBzdWJkaXN0cmljdC5zdWJkaXN0cmljdF9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzdWJkaXN0cmljdC5uYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjYWxjX3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2FsY19zaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgIC8vIFNldCBzZXNzaW9uIHN1YmRpc3RyaWN0XHJcbiAgICAgZnVuY3Rpb24gc2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3Qoc3ViZGlzdHJpY3RfaWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViZGlzdHJpY3RfaWQ6IHN1YmRpc3RyaWN0X2lkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==