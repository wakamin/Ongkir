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
  sdokr_shipping_address_fields(); // Initialize billing city options

  if (els.billing_country.val() == "ID") {
    sdokr_get_billing_city_options();
    sdokr_get_billing_subdistrict_options();
  } // Initialize shipping city options


  if (els.shipping_country.val() == "ID") {
    sdokr_get_shipping_city_options();
    sdokr_get_shipping_subdistrict_options();
  } // On change billing country


  els.billing_country.on("change", function () {
    sdokr_billing_address_fields();
  }); // On change billing state

  els.billing_state.on("change", function () {
    sdokr_get_billing_city_options();
  }); // On change billing state

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city_field").on("change", "#billing_city", function () {
    sdokr_get_billing_subdistrict_options();
  }); // On change shipping country

  els.shipping_country.on("change", function () {
    sdokr_shipping_address_fields();
  }); // On change shipping state

  els.shipping_state.on("change", function () {
    sdokr_get_shipping_city_options();
  }); // On change shipping state

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city_field").on("change", "#shipping_city", function () {
    sdokr_get_shipping_subdistrict_options();
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
    if (els.billing_state.val() == "") {
      return;
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").attr("disabled", true);
    els.billing_subdistrict.attr("disabled", true);
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: sdongkir_lcz.ajaxurl,
      type: "POST",
      data: {
        action: "ongkir_get_cities_by_province_id",
        nonce_ajax: sdongkir_lcz.nonce,
        province_id: els.billing_state.val()
      },
      success: function success(res) {
        var cities = res.data.data;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").empty();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").val() == "";
        els.billing_subdistrict.empty();
        els.billing_subdistrict.val() == "";
        cities.forEach(function (city) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", city.city_id).text("".concat(city.type, " ").concat(city.name)));
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").attr("disabled", false);
        els.billing_subdistrict.attr("disabled", false);
      },
      error: function error(err) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").attr("disabled", false);
        els.billing_subdistrict.attr("disabled", false);
      }
    });
  } // Get shipping city options


  function sdokr_get_shipping_city_options() {
    if (els.shipping_state.val() == "") {
      return;
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
        cities.forEach(function (city) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", city.city_id).text("".concat(city.type, " ").concat(city.name)));
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").attr("disabled", false);
        els.shipping_subdistrict.attr("disabled", false);
      },
      error: function error(err) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").attr("disabled", false);
        els.shipping_subdistrict.attr("disabled", false);
      }
    });
  } // Get billing subdistrict options


  function sdokr_get_billing_subdistrict_options() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_city").val() == "") {
      return;
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
        subdistricts.forEach(function (subdistrict) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", subdistrict.subdistrict_id).text(subdistrict.name));
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").attr("disabled", false);
      },
      error: function error(err) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").attr("disabled", false);
      }
    });
  } // Get shipping subdistrict options


  function sdokr_get_shipping_subdistrict_options() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").val() == "") {
      return;
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
        subdistricts.forEach(function (subdistrict) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", subdistrict.subdistrict_id).text(subdistrict.name));
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").attr("disabled", false);
      },
      error: function error(err) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").attr("disabled", false);
      }
    });
  }
});

/***/ }),

/***/ 2:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsImpRdWVyeSIsIlMyIiwiZm4iLCJzZWxlY3QyIiwiYW1kIiwicmVxdWlyZWpzIiwicmVxdWlyZSIsInVuZGVmIiwibWFpbiIsInJlcSIsIm1ha2VNYXAiLCJoYW5kbGVycyIsImRlZmluZWQiLCJ3YWl0aW5nIiwiY29uZmlnIiwiZGVmaW5pbmciLCJoYXNPd24iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcyIsInNsaWNlIiwianNTdWZmaXhSZWdFeHAiLCJoYXNQcm9wIiwib2JqIiwicHJvcCIsImNhbGwiLCJub3JtYWxpemUiLCJuYW1lIiwiYmFzZU5hbWUiLCJuYW1lUGFydHMiLCJuYW1lU2VnbWVudCIsIm1hcFZhbHVlIiwiZm91bmRNYXAiLCJsYXN0SW5kZXgiLCJmb3VuZEkiLCJmb3VuZFN0YXJNYXAiLCJzdGFySSIsImkiLCJqIiwicGFydCIsIm5vcm1hbGl6ZWRCYXNlUGFydHMiLCJiYXNlUGFydHMiLCJzcGxpdCIsIm1hcCIsInN0YXJNYXAiLCJsZW5ndGgiLCJub2RlSWRDb21wYXQiLCJ0ZXN0IiwicmVwbGFjZSIsImNoYXJBdCIsImNvbmNhdCIsInNwbGljZSIsImpvaW4iLCJtYWtlUmVxdWlyZSIsInJlbE5hbWUiLCJmb3JjZVN5bmMiLCJhcmdzIiwiYXJndW1lbnRzIiwicHVzaCIsImFwcGx5IiwibWFrZU5vcm1hbGl6ZSIsIm1ha2VMb2FkIiwiZGVwTmFtZSIsInZhbHVlIiwiY2FsbERlcCIsIkVycm9yIiwic3BsaXRQcmVmaXgiLCJwcmVmaXgiLCJpbmRleCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJtYWtlUmVsUGFydHMiLCJyZWxQYXJ0cyIsInBsdWdpbiIsInBhcnRzIiwicmVsUmVzb3VyY2VOYW1lIiwiZiIsIm4iLCJwciIsInAiLCJtYWtlQ29uZmlnIiwiZXhwb3J0cyIsImUiLCJtb2R1bGUiLCJpZCIsInVyaSIsImRlcHMiLCJjYWxsYmFjayIsImNqc01vZHVsZSIsInJldCIsImNhbGxiYWNrVHlwZSIsInVzaW5nRXhwb3J0cyIsImxvYWQiLCJ1bmRlZmluZWQiLCJhbHQiLCJzZXRUaW1lb3V0IiwiY2ZnIiwiX2RlZmluZWQiLCJfJCIsIiQiLCJjb25zb2xlIiwiZXJyb3IiLCJVdGlscyIsIkV4dGVuZCIsIkNoaWxkQ2xhc3MiLCJTdXBlckNsYXNzIiwiX19oYXNQcm9wIiwiQmFzZUNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJrZXkiLCJfX3N1cGVyX18iLCJnZXRNZXRob2RzIiwidGhlQ2xhc3MiLCJwcm90byIsIm1ldGhvZHMiLCJtZXRob2ROYW1lIiwibSIsIkRlY29yYXRlIiwiRGVjb3JhdG9yQ2xhc3MiLCJkZWNvcmF0ZWRNZXRob2RzIiwic3VwZXJNZXRob2RzIiwiRGVjb3JhdGVkQ2xhc3MiLCJ1bnNoaWZ0IiwiQXJyYXkiLCJhcmdDb3VudCIsImNhbGxlZENvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJjdHIiLCJzdXBlck1ldGhvZCIsImNhbGxlZE1ldGhvZCIsIm9yaWdpbmFsTWV0aG9kIiwiZGVjb3JhdGVkTWV0aG9kIiwiZCIsIk9ic2VydmFibGUiLCJsaXN0ZW5lcnMiLCJvbiIsImV2ZW50IiwidHJpZ2dlciIsInBhcmFtcyIsIl90eXBlIiwiaW52b2tlIiwibGVuIiwiZ2VuZXJhdGVDaGFycyIsImNoYXJzIiwicmFuZG9tQ2hhciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiYmluZCIsImZ1bmMiLCJjb250ZXh0IiwiX2NvbnZlcnREYXRhIiwiZGF0YSIsIm9yaWdpbmFsS2V5Iiwia2V5cyIsImRhdGFMZXZlbCIsImsiLCJ0b0xvd2VyQ2FzZSIsImhhc1Njcm9sbCIsImVsIiwiJGVsIiwib3ZlcmZsb3dYIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImlubmVyV2lkdGgiLCJzY3JvbGxXaWR0aCIsImVzY2FwZU1hcmt1cCIsIm1hcmt1cCIsInJlcGxhY2VNYXAiLCJTdHJpbmciLCJtYXRjaCIsImFwcGVuZE1hbnkiLCIkZWxlbWVudCIsIiRub2RlcyIsImpxdWVyeSIsInN1YnN0ciIsIiRqcU5vZGVzIiwibm9kZSIsImFkZCIsImFwcGVuZCIsIl9fY2FjaGUiLCJHZXRVbmlxdWVFbGVtZW50SWQiLCJlbGVtZW50Iiwic2VsZWN0MklkIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiU3RvcmVEYXRhIiwiR2V0RGF0YSIsIlJlbW92ZURhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJSZXN1bHRzIiwib3B0aW9ucyIsImRhdGFBZGFwdGVyIiwicmVuZGVyIiwiJHJlc3VsdHMiLCJnZXQiLCJhdHRyIiwiY2xlYXIiLCJlbXB0eSIsImRpc3BsYXlNZXNzYWdlIiwiaGlkZUxvYWRpbmciLCIkbWVzc2FnZSIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJoaWRlTWVzc2FnZXMiLCJmaW5kIiwicmVtb3ZlIiwiJG9wdGlvbnMiLCJyZXN1bHRzIiwiY2hpbGRyZW4iLCJzb3J0IiwiaXRlbSIsIiRvcHRpb24iLCJvcHRpb24iLCJwb3NpdGlvbiIsIiRkcm9wZG93biIsIiRyZXN1bHRzQ29udGFpbmVyIiwic29ydGVyIiwiaGlnaGxpZ2h0Rmlyc3RJdGVtIiwiJHNlbGVjdGVkIiwiZmlsdGVyIiwiZmlyc3QiLCJlbnN1cmVIaWdobGlnaHRWaXNpYmxlIiwic2V0Q2xhc3NlcyIsInNlbGYiLCJjdXJyZW50Iiwic2VsZWN0ZWQiLCJzZWxlY3RlZElkcyIsInMiLCJlYWNoIiwiaW5BcnJheSIsInNob3dMb2FkaW5nIiwibG9hZGluZ01vcmUiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJ0ZXh0IiwiJGxvYWRpbmciLCJwcmVwZW5kIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cnMiLCJtYXRjaGVzIiwid2luZG93IiwiRWxlbWVudCIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiX3Jlc3VsdElkIiwidGl0bGUiLCJyb2xlIiwidmFsIiwibGFiZWwiLCIkbGFiZWwiLCJ0ZW1wbGF0ZSIsIiRjaGlsZHJlbiIsImMiLCJjaGlsZCIsIiRjaGlsZCIsIiRjaGlsZHJlbkNvbnRhaW5lciIsImNvbnRhaW5lciIsIiRjb250YWluZXIiLCJpc09wZW4iLCJyZW1vdmVBdHRyIiwiJGhpZ2hsaWdodGVkIiwiZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzIiwiY3VycmVudEluZGV4IiwibmV4dEluZGV4IiwiJG5leHQiLCJlcSIsImN1cnJlbnRPZmZzZXQiLCJvZmZzZXQiLCJ0b3AiLCJuZXh0VG9wIiwibmV4dE9mZnNldCIsInNjcm9sbFRvcCIsIm91dGVySGVpZ2h0IiwibmV4dEJvdHRvbSIsImFkZENsYXNzIiwibW91c2V3aGVlbCIsImJvdHRvbSIsImRlbHRhWSIsImlzQXRUb3AiLCJpc0F0Qm90dG9tIiwiaGVpZ2h0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJldnQiLCIkdGhpcyIsIm9yaWdpbmFsRXZlbnQiLCJyZW1vdmVDbGFzcyIsImRlc3Ryb3kiLCJvZmZzZXREZWx0YSIsInJlc3VsdCIsImNvbnRlbnQiLCJkaXNwbGF5IiwiaW5uZXJIVE1MIiwiS0VZUyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDIiwiU1BBQ0UiLCJQQUdFX1VQIiwiUEFHRV9ET1dOIiwiRU5EIiwiSE9NRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIkRFTEVURSIsIkJhc2VTZWxlY3Rpb24iLCIkc2VsZWN0aW9uIiwiX3RhYmluZGV4IiwicmVzdWx0c0lkIiwiX2hhbmRsZUJsdXIiLCJ3aGljaCIsInVwZGF0ZSIsIl9hdHRhY2hDbG9zZUhhbmRsZXIiLCJfZGV0YWNoQ2xvc2VIYW5kbGVyIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwiYm9keSIsIiR0YXJnZXQiLCJ0YXJnZXQiLCIkc2VsZWN0IiwiY2xvc2VzdCIsIiRhbGwiLCJvZmYiLCIkc2VsZWN0aW9uQ29udGFpbmVyIiwiaXNFbmFibGVkIiwiaXNEaXNhYmxlZCIsIlNpbmdsZVNlbGVjdGlvbiIsImh0bWwiLCIkcmVuZGVyZWQiLCJzZWxlY3Rpb25Db250YWluZXIiLCJzZWxlY3Rpb24iLCJmb3JtYXR0ZWQiLCJNdWx0aXBsZVNlbGVjdGlvbiIsIiRyZW1vdmUiLCJwYXJlbnQiLCIkc2VsZWN0aW9ucyIsIlBsYWNlaG9sZGVyIiwiZGVjb3JhdGVkIiwicGxhY2Vob2xkZXIiLCJub3JtYWxpemVQbGFjZWhvbGRlciIsIl8iLCJjcmVhdGVQbGFjZWhvbGRlciIsIiRwbGFjZWhvbGRlciIsInNpbmdsZVBsYWNlaG9sZGVyIiwibXVsdGlwbGVTZWxlY3Rpb25zIiwiQWxsb3dDbGVhciIsIl9oYW5kbGVDbGVhciIsIl9oYW5kbGVLZXlib2FyZENsZWFyIiwiJGNsZWFyIiwicHJldmlvdXNWYWwiLCJ1bnNlbGVjdERhdGEiLCJwcmV2ZW50ZWQiLCJyZW1vdmVBbGwiLCJTZWFyY2giLCIkc2VhcmNoIiwiJHNlYXJjaENvbnRhaW5lciIsIl90cmFuc2ZlclRhYkluZGV4IiwiX2tleVVwUHJldmVudGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiJHByZXZpb3VzQ2hvaWNlIiwicHJldiIsInNlYXJjaFJlbW92ZUNob2ljZSIsIm1zaWUiLCJkb2N1bWVudE1vZGUiLCJkaXNhYmxlSW5wdXRFdmVudHMiLCJ0eXBlIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoSGFkRm9jdXMiLCJyZXNpemVTZWFyY2giLCJpbnB1dCIsInRlcm0iLCJjc3MiLCJ3aWR0aCIsIm1pbmltdW1XaWR0aCIsIkV2ZW50UmVsYXkiLCJyZWxheUV2ZW50cyIsInByZXZlbnRhYmxlRXZlbnRzIiwiRXZlbnQiLCJUcmFuc2xhdGlvbiIsImRpY3QiLCJhbGwiLCJleHRlbmQiLCJ0cmFuc2xhdGlvbiIsIl9jYWNoZSIsImxvYWRQYXRoIiwicGF0aCIsInRyYW5zbGF0aW9ucyIsImRpYWNyaXRpY3MiLCJCYXNlQWRhcHRlciIsInF1ZXJ5IiwiZ2VuZXJhdGVSZXN1bHRJZCIsIlNlbGVjdEFkYXB0ZXIiLCJzZWxlY3QiLCJpcyIsImN1cnJlbnREYXRhIiwidW5zZWxlY3QiLCJhZGRPcHRpb25zIiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJub3JtYWxpemVkRGF0YSIsIl9ub3JtYWxpemVJdGVtIiwiZGVmYXVsdHMiLCJtYXRjaGVyIiwiQXJyYXlBZGFwdGVyIiwiX2RhdGFUb0NvbnZlcnQiLCJjb252ZXJ0VG9PcHRpb25zIiwiZWxtIiwiJGV4aXN0aW5nIiwiZXhpc3RpbmdJZHMiLCJvbmx5SXRlbSIsIiRleGlzdGluZ09wdGlvbiIsImV4aXN0aW5nRGF0YSIsIm5ld0RhdGEiLCIkbmV3T3B0aW9uIiwicmVwbGFjZVdpdGgiLCJBamF4QWRhcHRlciIsImFqYXhPcHRpb25zIiwiX2FwcGx5RGVmYXVsdHMiLCJwcm9jZXNzUmVzdWx0cyIsInEiLCJ0cmFuc3BvcnQiLCJzdWNjZXNzIiwiZmFpbHVyZSIsIiRyZXF1ZXN0IiwiYWpheCIsInRoZW4iLCJmYWlsIiwiX3JlcXVlc3QiLCJpc0Z1bmN0aW9uIiwiYWJvcnQiLCJ1cmwiLCJyZXF1ZXN0IiwiaXNBcnJheSIsInN0YXR1cyIsImRlbGF5IiwiX3F1ZXJ5VGltZW91dCIsImNsZWFyVGltZW91dCIsIlRhZ3MiLCJ0YWdzIiwiY3JlYXRlVGFnIiwiaW5zZXJ0VGFnIiwidCIsInRhZyIsIl9yZW1vdmVPbGRUYWdzIiwicGFnZSIsIndyYXBwZXIiLCJjaGVja0NoaWxkcmVuIiwib3B0aW9uVGV4dCIsInRvVXBwZXJDYXNlIiwicGFyYW1zVGVybSIsImNoZWNrVGV4dCIsInRyaW0iLCJUb2tlbml6ZXIiLCJ0b2tlbml6ZXIiLCJkcm9wZG93biIsImNyZWF0ZUFuZFNlbGVjdCIsIiRleGlzdGluZ09wdGlvbnMiLCJ0b2tlbkRhdGEiLCJzZXBhcmF0b3JzIiwidGVybUNoYXIiLCJwYXJ0UGFyYW1zIiwiTWluaW11bUlucHV0TGVuZ3RoIiwiJGUiLCJtaW5pbXVtSW5wdXRMZW5ndGgiLCJtaW5pbXVtIiwiTWF4aW11bUlucHV0TGVuZ3RoIiwibWF4aW11bUlucHV0TGVuZ3RoIiwibWF4aW11bSIsIk1heGltdW1TZWxlY3Rpb25MZW5ndGgiLCJtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoIiwiX2NoZWNrSWZNYXhpbXVtU2VsZWN0ZWQiLCJzdWNjZXNzQ2FsbGJhY2siLCJjb3VudCIsIkRyb3Bkb3duIiwic2hvd1NlYXJjaCIsIkhpZGVQbGFjZWhvbGRlciIsInJlbW92ZVBsYWNlaG9sZGVyIiwibW9kaWZpZWREYXRhIiwiSW5maW5pdGVTY3JvbGwiLCJsYXN0UGFyYW1zIiwiJGxvYWRpbmdNb3JlIiwiY3JlYXRlTG9hZGluZ01vcmUiLCJzaG93TG9hZGluZ01vcmUiLCJsb2FkTW9yZUlmTmVlZGVkIiwiaXNMb2FkTW9yZVZpc2libGUiLCJkb2N1bWVudEVsZW1lbnQiLCJsb2FkaW5nTW9yZU9mZnNldCIsImxvYWRNb3JlIiwicGFnaW5hdGlvbiIsIm1vcmUiLCJBdHRhY2hCb2R5IiwiJGRyb3Bkb3duUGFyZW50IiwiX3Nob3dEcm9wZG93biIsIl9hdHRhY2hQb3NpdGlvbmluZ0hhbmRsZXIiLCJfYmluZENvbnRhaW5lclJlc3VsdEhhbmRsZXJzIiwiX2hpZGVEcm9wZG93biIsIl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIiLCIkZHJvcGRvd25Db250YWluZXIiLCJkZXRhY2giLCJfY29udGFpbmVyUmVzdWx0c0hhbmRsZXJzQm91bmQiLCJfcG9zaXRpb25Ecm9wZG93biIsIl9yZXNpemVEcm9wZG93biIsInNjcm9sbEV2ZW50IiwicmVzaXplRXZlbnQiLCJvcmllbnRhdGlvbkV2ZW50IiwiJHdhdGNoZXJzIiwicGFyZW50cyIsIngiLCJzY3JvbGxMZWZ0IiwieSIsImV2IiwiJHdpbmRvdyIsImlzQ3VycmVudGx5QWJvdmUiLCJoYXNDbGFzcyIsImlzQ3VycmVudGx5QmVsb3ciLCJuZXdEaXJlY3Rpb24iLCJ2aWV3cG9ydCIsImVub3VnaFJvb21BYm92ZSIsImVub3VnaFJvb21CZWxvdyIsImxlZnQiLCIkb2Zmc2V0UGFyZW50Iiwib2Zmc2V0UGFyZW50IiwicGFyZW50T2Zmc2V0IiwiaXNDb25uZWN0ZWQiLCJvdXRlcldpZHRoIiwibWluV2lkdGgiLCJhcHBlbmRUbyIsImNvdW50UmVzdWx0cyIsIk1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwibWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJJbmZpbml0eSIsIlNlbGVjdE9uQ2xvc2UiLCJfaGFuZGxlU2VsZWN0T25DbG9zZSIsIm9yaWdpbmFsU2VsZWN0MkV2ZW50IiwiJGhpZ2hsaWdodGVkUmVzdWx0cyIsIkNsb3NlT25TZWxlY3QiLCJfc2VsZWN0VHJpZ2dlcmVkIiwiY3RybEtleSIsIm1ldGFLZXkiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJvdmVyQ2hhcnMiLCJpbnB1dFRvb1Nob3J0IiwicmVtYWluaW5nQ2hhcnMiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJyZW1vdmVBbGxJdGVtcyIsIlJlc3VsdHNMaXN0IiwiU2VsZWN0aW9uU2VhcmNoIiwiRElBQ1JJVElDUyIsIlNlbGVjdERhdGEiLCJBcnJheURhdGEiLCJBamF4RGF0YSIsIkRyb3Bkb3duU2VhcmNoIiwiRW5nbGlzaFRyYW5zbGF0aW9uIiwiRGVmYXVsdHMiLCJyZXNldCIsInRva2VuU2VwYXJhdG9ycyIsIlF1ZXJ5IiwiYW1kQmFzZSIsImluaXRTZWxlY3Rpb24iLCJJbml0U2VsZWN0aW9uIiwicmVzdWx0c0FkYXB0ZXIiLCJzZWxlY3RPbkNsb3NlIiwiZHJvcGRvd25BZGFwdGVyIiwibXVsdGlwbGUiLCJTZWFyY2hhYmxlRHJvcGRvd24iLCJjbG9zZU9uU2VsZWN0IiwiZHJvcGRvd25Dc3NDbGFzcyIsImRyb3Bkb3duQ3NzIiwiYWRhcHREcm9wZG93bkNzc0NsYXNzIiwiRHJvcGRvd25DU1MiLCJzZWxlY3Rpb25BZGFwdGVyIiwiYWxsb3dDbGVhciIsImNvbnRhaW5lckNzc0NsYXNzIiwiY29udGFpbmVyQ3NzIiwiYWRhcHRDb250YWluZXJDc3NDbGFzcyIsIkNvbnRhaW5lckNTUyIsImxhbmd1YWdlIiwiX3Jlc29sdmVMYW5ndWFnZSIsInVuaXF1ZUxhbmd1YWdlcyIsImwiLCJfcHJvY2Vzc1RyYW5zbGF0aW9ucyIsImRlYnVnIiwic3RyaXBEaWFjcml0aWNzIiwiYSIsIm9yaWdpbmFsIiwiYW1kTGFuZ3VhZ2VCYXNlIiwiZHJvcGRvd25BdXRvV2lkdGgiLCJzY3JvbGxBZnRlclNlbGVjdCIsInRlbXBsYXRlUmVzdWx0IiwidGVtcGxhdGVTZWxlY3Rpb24iLCJ0aGVtZSIsImFwcGx5RnJvbUVsZW1lbnQiLCJvcHRpb25MYW5ndWFnZSIsImRlZmF1bHRMYW5ndWFnZSIsImVsZW1lbnRMYW5ndWFnZSIsInBhcmVudExhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiaXNFbXB0eU9iamVjdCIsImlzUGxhaW5PYmplY3QiLCJyZXNvbHZlZExhbmd1YWdlcyIsImxhbmd1YWdlUGFydHMiLCJiYXNlTGFuZ3VhZ2UiLCJsYW5ndWFnZURhdGEiLCJleCIsIndhcm4iLCJzZXQiLCJjYW1lbEtleSIsImNhbWVsQ2FzZSIsImNvbnZlcnRlZERhdGEiLCJPcHRpb25zIiwiZnJvbUVsZW1lbnQiLCJJbnB1dENvbXBhdCIsImV4Y2x1ZGVkRGF0YSIsImRpciIsImRhdGFzZXQiLCJ1cHBlckNhc2VMZXR0ZXIiLCJsZXR0ZXIiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlTmFtZSIsImRhdGFOYW1lIiwiZGF0YVZhbHVlIiwiY2FtZWxEYXRhTmFtZSIsIlNlbGVjdDIiLCJfZ2VuZXJhdGVJZCIsInRhYmluZGV4IiwiRGF0YUFkYXB0ZXIiLCJfcGxhY2VDb250YWluZXIiLCJTZWxlY3Rpb25BZGFwdGVyIiwiRHJvcGRvd25BZGFwdGVyIiwiUmVzdWx0c0FkYXB0ZXIiLCJfYmluZEFkYXB0ZXJzIiwiX3JlZ2lzdGVyRG9tRXZlbnRzIiwiX3JlZ2lzdGVyRGF0YUV2ZW50cyIsIl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cyIsIl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzIiwiX3JlZ2lzdGVyUmVzdWx0c0V2ZW50cyIsIl9yZWdpc3RlckV2ZW50cyIsImluaXRpYWxEYXRhIiwiX3N5bmNBdHRyaWJ1dGVzIiwiaW5zZXJ0QWZ0ZXIiLCJfcmVzb2x2ZVdpZHRoIiwibWV0aG9kIiwiV0lEVEgiLCJzdHlsZVdpZHRoIiwiZWxlbWVudFdpZHRoIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJfc3luY0EiLCJfc3luY1MiLCJfc3luY1N1YnRyZWUiLCJhdHRhY2hFdmVudCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwiX29ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhZGRFdmVudExpc3RlbmVyIiwibm9uUmVsYXlFdmVudHMiLCJ0b2dnbGVEcm9wZG93biIsImZvY3VzIiwiYWx0S2V5IiwiY2xvc2UiLCJvcGVuIiwiX2lzQ2hhbmdlTXV0YXRpb24iLCJjaGFuZ2VkIiwibm9kZU5hbWUiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwibXV0YXRpb24iLCJhY3R1YWxUcmlnZ2VyIiwicHJlVHJpZ2dlck1hcCIsInByZVRyaWdnZXJOYW1lIiwicHJlVHJpZ2dlckFyZ3MiLCJoYXNGb2N1cyIsImVuYWJsZSIsIm5ld1ZhbCIsImRldGFjaEV2ZW50IiwiZGlzY29ubmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVEYXRhIiwidGhpc01ldGhvZHMiLCJpbnN0YW5jZU9wdGlvbnMiLCJpbnN0YW5jZSIsInJlYWR5IiwiZWxzIiwiYmlsbGluZ19jb3VudHJ5IiwiYmlsbGluZ19zdGF0ZSIsImJpbGxpbmdfY2l0eSIsImJpbGxpbmdfY2l0eV9maWVsZCIsImJpbGxpbmdfc3ViZGlzdHJpY3QiLCJiaWxsaW5nX3N1YmRpc3RyaWN0X2ZpZWxkIiwic2hpcHBpbmdfY291bnRyeSIsInNoaXBwaW5nX3N0YXRlIiwic2hpcHBpbmdfY2l0eSIsInNoaXBwaW5nX2NpdHlfZmllbGQiLCJzaGlwcGluZ19zdWJkaXN0cmljdCIsInNoaXBwaW5nX3N1YmRpc3RyaWN0X2ZpZWxkIiwic2Rva3JfYmlsbGluZ19hZGRyZXNzX2ZpZWxkcyIsInNkb2tyX3NoaXBwaW5nX2FkZHJlc3NfZmllbGRzIiwic2Rva3JfZ2V0X2JpbGxpbmdfY2l0eV9vcHRpb25zIiwic2Rva3JfZ2V0X2JpbGxpbmdfc3ViZGlzdHJpY3Rfb3B0aW9ucyIsInNkb2tyX2dldF9zaGlwcGluZ19jaXR5X29wdGlvbnMiLCJzZG9rcl9nZXRfc2hpcHBpbmdfc3ViZGlzdHJpY3Rfb3B0aW9ucyIsInNkb25na2lyX2xjeiIsInN1YmRpc3RyaWN0X3RleHQiLCJmYWRlSW4iLCJiaWxsaW5nX2NpdHlfc2VsZWN0IiwicGxlYXNlX3NlbGVjdF90ZXh0IiwiZmFkZU91dCIsImJpbGxpbmdfY2l0eV9pbnB1dCIsInNoaXBwaW5nX2NpdHlfc2VsZWN0Iiwic2hpcHBpbmdfY2l0eV9pbnB1dCIsImFqYXh1cmwiLCJhY3Rpb24iLCJub25jZV9hamF4Iiwibm9uY2UiLCJwcm92aW5jZV9pZCIsInJlcyIsImNpdGllcyIsImZvckVhY2giLCJjaXR5IiwiY2l0eV9pZCIsImVyciIsInN1YmRpc3RyaWN0cyIsInN1YmRpc3RyaWN0Iiwic3ViZGlzdHJpY3RfaWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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VSxHQS9CSztBQWdDZixrQkFBVSxHQWhDSztBQWlDZixrQkFBVSxHQWpDSztBQWtDZixrQkFBVSxJQWxDSztBQW1DZixnQkFBVSxJQW5DSztBQW9DZixrQkFBVSxJQXBDSztBQXFDZixrQkFBVSxJQXJDSztBQXNDZixrQkFBVSxJQXRDSztBQXVDZixrQkFBVSxJQXZDSztBQXdDZixrQkFBVSxJQXhDSztBQXlDZixrQkFBVSxJQXpDSztBQTBDZixrQkFBVSxJQTFDSztBQTJDZixrQkFBVSxHQTNDSztBQTRDZixrQkFBVSxHQTVDSztBQTZDZixrQkFBVSxHQTdDSztBQThDZixrQkFBVSxHQTlDSztBQStDZixrQkFBVSxHQS9DSztBQWdEZixrQkFBVSxHQWhESztBQWlEZixrQkFBVSxHQWpESztBQWtEZixrQkFBVSxHQWxESztBQW1EZixrQkFBVSxHQW5ESztBQW9EZixrQkFBVSxHQXBESztBQXFEZixrQkFBVSxHQXJESztBQXNEZixrQkFBVSxHQXRESztBQXVEZixrQkFBVSxHQXZESztBQXdEZixrQkFBVSxHQXhESztBQXlEZixnQkFBVSxHQXpESztBQTBEZixrQkFBVSxHQTFESztBQTJEZixrQkFBVSxHQTNESztBQTREZixrQkFBVSxHQTVESztBQTZEZixrQkFBVSxHQTdESztBQThEZixrQkFBVSxHQTlESztBQStEZixrQkFBVSxHQS9ESztBQWdFZixrQkFBVSxHQWhFSztBQWlFZixrQkFBVSxHQWpFSztBQWtFZixrQkFBVSxHQWxFSztBQW1FZixrQkFBVSxHQW5FSztBQW9FZixrQkFBVSxHQXBFSztBQXFFZixrQkFBVSxHQXJFSztBQXNFZixrQkFBVSxHQXRFSztBQXVFZixrQkFBVSxHQXZFSztBQXdFZixrQkFBVSxHQXhFSztBQXlFZixrQkFBVSxHQXpFSztBQTBFZixrQkFBVSxHQTFFSztBQTJFZixrQkFBVSxJQTNFSztBQTRFZixrQkFBVSxJQTVFSztBQTZFZixrQkFBVSxJQTdFSztBQThFZixrQkFBVSxJQTlFSztBQStFZixrQkFBVSxHQS9FSztBQWdGZixrQkFBVSxHQWhGSztBQWlGZixnQkFBVSxHQWpGSztBQWtGZixnQkFBVSxHQWxGSztBQW1GZixnQkFBVSxHQW5GSztBQW9GZixrQkFBVSxHQXBGSztBQXFGZixrQkFBVSxHQXJGSztBQXNGZixrQkFBVSxHQXRGSztBQXVGZixrQkFBVSxHQXZGSztBQXdGZixrQkFBVSxHQXhGSztBQXlGZixrQkFBVSxHQXpGSztBQTBGZixrQkFBVSxHQTFGSztBQTJGZixrQkFBVSxHQTNGSztBQTRGZixrQkFBVSxHQTVGSztBQTZGZixrQkFBVSxHQTdGSztBQThGZixnQkFBVSxHQTlGSztBQStGZixrQkFBVSxHQS9GSztBQWdHZixrQkFBVSxHQWhHSztBQWlHZixrQkFBVSxHQWpHSztBQWtHZixrQkFBVSxHQWxHSztBQW1HZixrQkFBVSxHQW5HSztBQW9HZixrQkFBVSxHQXBHSztBQXFHZixrQkFBVSxHQXJHSztBQXNHZixrQkFBVSxHQXRHSztBQXVHZixrQkFBVSxHQXZHSztBQXdHZixrQkFBVSxHQXhHSztBQXlHZixrQkFBVSxHQXpHSztBQTBHZixrQkFBVSxHQTFHSztBQTJHZixrQkFBVSxHQTNHSztBQTRHZixrQkFBVSxHQTVHSztBQTZHZixrQkFBVSxHQTdHSztBQThHZixrQkFBVSxHQTlHSztBQStHZixrQkFBVSxHQS9HSztBQWdIZixrQkFBVSxHQWhISztBQWlIZixrQkFBVSxHQWpISztBQWtIZixrQkFBVSxHQWxISztBQW1IZixrQkFBVSxHQW5ISztBQW9IZixrQkFBVSxHQXBISztBQXFIZixrQkFBVSxHQXJISztBQXNIZixrQkFBVSxHQXRISztBQXVIZixrQkFBVSxHQXZISztBQXdIZixrQkFBVSxHQXhISztBQXlIZixrQkFBVSxHQXpISztBQTBIZixrQkFBVSxHQTFISztBQTJIZixrQkFBVSxHQTNISztBQTRIZixrQkFBVSxHQTVISztBQTZIZixrQkFBVSxHQTdISztBQThIZixrQkFBVSxHQTlISztBQStIZixrQkFBVSxHQS9ISztBQWdJZixrQkFBVSxHQWhJSztBQWlJZixrQkFBVSxHQWpJSztBQWtJZixrQkFBVSxHQWxJSztBQW1JZixrQkFBVSxHQW5JSztBQW9JZixrQkFBVSxHQXBJSztBQXFJZixrQkFBVSxHQXJJSztBQXNJZixrQkFBVSxHQXRJSztBQXVJZixrQkFBVSxHQXZJSztBQXdJZixrQkFBVSxHQXhJSztBQXlJZixrQkFBVSxHQXpJSztBQTBJZixrQkFBVSxHQTFJSztBQTJJZixrQkFBVSxHQTNJSztBQTRJZixrQkFBVSxHQTVJSztBQTZJZixrQkFBVSxHQTdJSztBQThJZixnQkFBVSxHQTlJSztBQStJZixnQkFBVSxHQS9JSztBQWdKZixnQkFBVSxHQWhKSztBQWlKZixrQkFBVSxHQWpKSztBQWtKZixrQkFBVSxHQWxKSztBQW1KZixrQkFBVSxHQW5KSztBQW9KZixrQkFBVSxHQXBKSztBQXFKZixnQkFBVSxHQXJKSztBQXNKZixrQkFBVSxHQXRKSztBQXVKZixrQkFBVSxHQXZKSztBQXdKZixrQkFBVSxHQXhKSztBQXlKZixrQkFBVSxHQXpKSztBQTBKZixrQkFBVSxHQTFKSztBQTJKZixrQkFBVSxHQTNKSztBQTRKZixrQkFBVSxHQTVKSztBQTZKZixrQkFBVSxHQTdKSztBQThKZixrQkFBVSxHQTlKSztBQStKZixrQkFBVSxHQS9KSztBQWdLZixrQkFBVSxHQWhLSztBQWlLZixrQkFBVSxHQWpLSztBQWtLZixrQkFBVSxHQWxLSztBQW1LZixrQkFBVSxHQW5LSztBQW9LZixrQkFBVSxHQXBLSztBQXFLZixrQkFBVSxHQXJLSztBQXNLZixrQkFBVSxHQXRLSztBQXVLZixrQkFBVSxHQXZLSztBQXdLZixrQkFBVSxHQXhLSztBQXlLZixrQkFBVSxHQXpLSztBQTBLZixrQkFBVSxHQTFLSztBQTJLZixrQkFBVSxHQTNLSztBQTRLZixrQkFBVSxHQTVLSztBQTZLZixrQkFBVSxHQTdLSztBQThLZixrQkFBVSxHQTlLSztBQStLZixrQkFBVSxHQS9LSztBQWdMZixrQkFBVSxHQWhMSztBQWlMZixrQkFBVSxHQWpMSztBQWtMZixrQkFBVSxHQWxMSztBQW1MZixrQkFBVSxHQW5MSztBQW9MZixrQkFBVSxHQXBMSztBQXFMZixrQkFBVSxHQXJMSztBQXNMZixrQkFBVSxHQXRMSztBQXVMZixrQkFBVSxHQXZMSztBQXdMZixrQkFBVSxHQXhMSztBQXlMZixrQkFBVSxHQXpMSztBQTBMZixrQkFBVSxHQTFMSztBQTJMZixrQkFBVSxHQTNMSztBQTRMZixrQkFBVSxHQTVMSztBQTZMZixrQkFBVSxHQTdMSztBQThMZixrQkFBVSxHQTlMSztBQStMZixrQkFBVSxHQS9MSztBQWdNZixrQkFBVSxHQWhNSztBQWlNZixrQkFBVSxJQWpNSztBQWtNZixrQkFBVSxJQWxNSztBQW1NZixrQkFBVSxHQW5NSztBQW9NZixrQkFBVSxHQXBNSztBQXFNZixrQkFBVSxHQXJNSztBQXNNZixrQkFBVSxHQXRNSztBQXVNZixrQkFBVSxHQXZNSztBQXdNZixrQkFBVSxHQXhNSztBQXlNZixrQkFBVSxHQXpNSztBQTBNZixrQkFBVSxHQTFNSztBQTJNZixrQkFBVSxHQTNNSztBQTRNZixrQkFBVSxHQTVNSztBQTZNZixrQkFBVSxHQTdNSztBQThNZixnQkFBVSxHQTlNSztBQStNZixrQkFBVSxHQS9NSztBQWdOZixrQkFBVSxHQWhOSztBQWlOZixrQkFBVSxHQWpOSztBQWtOZixrQkFBVSxHQWxOSztBQW1OZixrQkFBVSxHQW5OSztBQW9OZixrQkFBVSxHQXBOSztBQXFOZixrQkFBVSxHQXJOSztBQXNOZixrQkFBVSxHQXROSztBQXVOZixrQkFBVSxHQXZOSztBQXdOZixrQkFBVSxHQXhOSztBQXlOZixrQkFBVSxJQXpOSztBQTBOZixrQkFBVSxJQTFOSztBQTJOZixrQkFBVSxHQTNOSztBQTROZixrQkFBVSxHQTVOSztBQTZOZixnQkFBVSxHQTdOSztBQThOZixnQkFBVSxHQTlOSztBQStOZixnQkFBVSxHQS9OSztBQWdPZixrQkFBVSxHQWhPSztBQWlPZixrQkFBVSxHQWpPSztBQWtPZixrQkFBVSxHQWxPSztBQW1PZixrQkFBVSxHQW5PSztBQW9PZixnQkFBVSxHQXBPSztBQXFPZixrQkFBVSxHQXJPSztBQXNPZixrQkFBVSxHQXRPSztBQXVPZixrQkFBVSxHQXZPSztBQXdPZixrQkFBVSxHQXhPSztBQXlPZixrQkFBVSxHQXpPSztBQTBPZixrQkFBVSxHQTFPSztBQTJPZixrQkFBVSxHQTNPSztBQTRPZixrQkFBVSxHQTVPSztBQTZPZixrQkFBVSxHQTdPSztBQThPZixnQkFBVSxHQTlPSztBQStPZixrQkFBVSxHQS9PSztBQWdQZixrQkFBVSxHQWhQSztBQWlQZixrQkFBVSxHQWpQSztBQWtQZixrQkFBVSxHQWxQSztBQW1QZixrQkFBVSxHQW5QSztBQW9QZixrQkFBVSxHQXBQSztBQXFQZixrQkFBVSxHQXJQSztBQXNQZixrQkFBVSxHQXRQSztBQXVQZixrQkFBVSxHQXZQSztBQXdQZixrQkFBVSxHQXhQSztBQXlQZixrQkFBVSxHQXpQSztBQTBQZixrQkFBVSxHQTFQSztBQTJQZixrQkFBVSxHQTNQSztBQTRQZixrQkFBVSxHQTVQSztBQTZQZixrQkFBVSxHQTdQSztBQThQZixrQkFBVSxHQTlQSztBQStQZixnQkFBVSxHQS9QSztBQWdRZixrQkFBVSxHQWhRSztBQWlRZixrQkFBVSxHQWpRSztBQWtRZixrQkFBVSxHQWxRSztBQW1RZixrQkFBVSxHQW5RSztBQW9RZixrQkFBVSxHQXBRSztBQXFRZixrQkFBVSxJQXJRSztBQXNRZixrQkFBVSxJQXRRSztBQXVRZixrQkFBVSxJQXZRSztBQXdRZixrQkFBVSxJQXhRSztBQXlRZixrQkFBVSxHQXpRSztBQTBRZixrQkFBVSxHQTFRSztBQTJRZixrQkFBVSxHQTNRSztBQTRRZixrQkFBVSxHQTVRSztBQTZRZixrQkFBVSxHQTdRSztBQThRZixrQkFBVSxHQTlRSztBQStRZixrQkFBVSxHQS9RSztBQWdSZixrQkFBVSxHQWhSSztBQWlSZixrQkFBVSxHQWpSSztBQWtSZixrQkFBVSxHQWxSSztBQW1SZixrQkFBVSxHQW5SSztBQW9SZixrQkFBVSxHQXBSSztBQXFSZixrQkFBVSxHQXJSSztBQXNSZixrQkFBVSxHQXRSSztBQXVSZixrQkFBVSxHQXZSSztBQXdSZixrQkFBVSxHQXhSSztBQXlSZixrQkFBVSxHQXpSSztBQTBSZixrQkFBVSxHQTFSSztBQTJSZixrQkFBVSxHQTNSSztBQTRSZixrQkFBVSxHQTVSSztBQTZSZixrQkFBVSxHQTdSSztBQThSZixrQkFBVSxHQTlSSztBQStSZixrQkFBVSxHQS9SSztBQWdTZixrQkFBVSxHQWhTSztBQWlTZixrQkFBVSxHQWpTSztBQWtTZixrQkFBVSxHQWxTSztBQW1TZixrQkFBVSxHQW5TSztBQW9TZixrQkFBVSxHQXBTSztBQXFTZixrQkFBVSxHQXJTSztBQXNTZixrQkFBVSxHQXRTSztBQXVTZixrQkFBVSxHQXZTSztBQXdTZixrQkFBVSxHQXhTSztBQXlTZixrQkFBVSxHQXpTSztBQTBTZixrQkFBVSxHQTFTSztBQTJTZixrQkFBVSxHQTNTSztBQTRTZixrQkFBVSxHQTVTSztBQTZTZixrQkFBVSxHQTdTSztBQThTZixrQkFBVSxHQTlTSztBQStTZixrQkFBVSxHQS9TSztBQWdUZixrQkFBVSxHQWhUSztBQWlUZixrQkFBVSxHQWpUSztBQWtUZixrQkFBVSxHQWxUSztBQW1UZixrQkFBVSxHQW5USztBQW9UZixrQkFBVSxHQXBUSztBQXFUZixrQkFBVSxHQXJUSztBQXNUZixrQkFBVSxHQXRUSztBQXVUZixrQkFBVSxHQXZUSztBQXdUZixrQkFBVSxHQXhUSztBQXlUZixrQkFBVSxHQXpUSztBQTBUZixrQkFBVSxHQTFUSztBQTJUZixrQkFBVSxHQTNUSztBQTRUZixrQkFBVSxHQTVUSztBQTZUZixrQkFBVSxHQTdUSztBQThUZixrQkFBVSxHQTlUSztBQStUZixrQkFBVSxHQS9USztBQWdVZixrQkFBVSxHQWhVSztBQWlVZixrQkFBVSxHQWpVSztBQWtVZixrQkFBVSxHQWxVSztBQW1VZixrQkFBVSxHQW5VSztBQW9VZixrQkFBVSxHQXBVSztBQXFVZixrQkFBVSxJQXJVSztBQXNVZixrQkFBVSxHQXRVSztBQXVVZixrQkFBVSxHQXZVSztBQXdVZixnQkFBVSxHQXhVSztBQXlVZixnQkFBVSxHQXpVSztBQTBVZixnQkFBVSxHQTFVSztBQTJVZixrQkFBVSxHQTNVSztBQTRVZixrQkFBVSxHQTVVSztBQTZVZixrQkFBVSxHQTdVSztBQThVZixrQkFBVSxHQTlVSztBQStVZixrQkFBVSxHQS9VSztBQWdWZixnQkFBVSxHQWhWSztBQWlWZixrQkFBVSxHQWpWSztBQWtWZixrQkFBVSxHQWxWSztBQW1WZixrQkFBVSxHQW5WSztBQW9WZixrQkFBVSxHQXBWSztBQXFWZixrQkFBVSxHQXJWSztBQXNWZixrQkFBVSxHQXRWSztBQXVWZixrQkFBVSxHQXZWSztBQXdWZixrQkFBVSxHQXhWSztBQXlWZixrQkFBVSxHQXpWSztBQTBWZixrQkFBVSxHQTFWSztBQTJWZixrQkFBVSxHQTNWSztBQTRWZixrQkFBVSxHQTVWSztBQTZWZixrQkFBVSxHQTdWSztBQThWZixrQkFBVSxHQTlWSztBQStWZixrQkFBVSxHQS9WSztBQWdXZixrQkFBVSxHQWhXSztBQWlXZixrQkFBVSxHQWpXSztBQWtXZixrQkFBVSxHQWxXSztBQW1XZixrQkFBVSxHQW5XSztBQW9XZixrQkFBVSxHQXBXSztBQXFXZixrQkFBVSxHQXJXSztBQXNXZixrQkFBVSxHQXRXSztBQXVXZixrQkFBVSxHQXZXSztBQXdXZixrQkFBVSxHQXhXSztBQXlXZixrQkFBVSxHQXpXSztBQTBXZixrQkFBVSxHQTFXSztBQTJXZixrQkFBVSxHQTNXSztBQTRXZixrQkFBVSxHQTVXSztBQTZXZixrQkFBVSxHQTdXSztBQThXZixrQkFBVSxJQTlXSztBQStXZixrQkFBVSxHQS9XSztBQWdYZixrQkFBVSxHQWhYSztBQWlYZixrQkFBVSxHQWpYSztBQWtYZixrQkFBVSxHQWxYSztBQW1YZixrQkFBVSxHQW5YSztBQW9YZixrQkFBVSxHQXBYSztBQXFYZixrQkFBVSxHQXJYSztBQXNYZixrQkFBVSxHQXRYSztBQXVYZixrQkFBVSxHQXZYSztBQXdYZixrQkFBVSxHQXhYSztBQXlYZixrQkFBVSxHQXpYSztBQTBYZixrQkFBVSxHQTFYSztBQTJYZixrQkFBVSxHQTNYSztBQTRYZixrQkFBVSxHQTVYSztBQTZYZixrQkFBVSxHQTdYSztBQThYZixrQkFBVSxHQTlYSztBQStYZixnQkFBVSxHQS9YSztBQWdZZixrQkFBVSxHQWhZSztBQWlZZixrQkFBVSxHQWpZSztBQWtZZixrQkFBVSxHQWxZSztBQW1ZZixrQkFBVSxHQW5ZSztBQW9ZZixrQkFBVSxHQXBZSztBQXFZZixrQkFBVSxHQXJZSztBQXNZZixrQkFBVSxHQXRZSztBQXVZZixrQkFBVSxHQXZZSztBQXdZZixrQkFBVSxHQXhZSztBQXlZZixrQkFBVSxHQXpZSztBQTBZZixrQkFBVSxHQTFZSztBQTJZZixrQkFBVSxHQTNZSztBQTRZZixrQkFBVSxHQTVZSztBQTZZZixrQkFBVSxHQTdZSztBQThZZixrQkFBVSxHQTlZSztBQStZZixrQkFBVSxHQS9ZSztBQWdaZixrQkFBVSxHQWhaSztBQWlaZixrQkFBVSxHQWpaSztBQWtaZixrQkFBVSxHQWxaSztBQW1aZixrQkFBVSxHQW5aSztBQW9aZixrQkFBVSxHQXBaSztBQXFaZixrQkFBVSxHQXJaSztBQXNaZixrQkFBVSxHQXRaSztBQXVaZixrQkFBVSxHQXZaSztBQXdaZixrQkFBVSxHQXhaSztBQXlaZixrQkFBVSxHQXpaSztBQTBaZixnQkFBVSxHQTFaSztBQTJaZixnQkFBVSxHQTNaSztBQTRaZixnQkFBVSxHQTVaSztBQTZaZixrQkFBVSxHQTdaSztBQThaZixrQkFBVSxHQTlaSztBQStaZixrQkFBVSxHQS9aSztBQWdhZixrQkFBVSxHQWhhSztBQWlhZixnQkFBVSxHQWphSztBQWthZixrQkFBVSxHQWxhSztBQW1hZixrQkFBVSxHQW5hSztBQW9hZixrQkFBVSxHQXBhSztBQXFhZixrQkFBVSxHQXJhSztBQXNhZixrQkFBVSxHQXRhSztBQXVhZixrQkFBVSxHQXZhSztBQXdhZixrQkFBVSxHQXhhSztBQXlhZixrQkFBVSxHQXphSztBQTBhZixnQkFBVSxHQTFhSztBQTJhZixrQkFBVSxHQTNhSztBQTRhZixrQkFBVSxHQTVhSztBQTZhZixnQkFBVSxHQTdhSztBQThhZixrQkFBVSxHQTlhSztBQSthZixrQkFBVSxHQS9hSztBQWdiZixrQkFBVSxHQWhiSztBQWliZixrQkFBVSxHQWpiSztBQWtiZixrQkFBVSxHQWxiSztBQW1iZixrQkFBVSxHQW5iSztBQW9iZixrQkFBVSxHQXBiSztBQXFiZixrQkFBVSxHQXJiSztBQXNiZixrQkFBVSxHQXRiSztBQXViZixrQkFBVSxHQXZiSztBQXdiZixrQkFBVSxHQXhiSztBQXliZixrQkFBVSxJQXpiSztBQTBiZixnQkFBVSxJQTFiSztBQTJiZixrQkFBVSxJQTNiSztBQTRiZixrQkFBVSxJQTViSztBQTZiZixrQkFBVSxJQTdiSztBQThiZixrQkFBVSxJQTliSztBQStiZixrQkFBVSxJQS9iSztBQWdjZixrQkFBVSxJQWhjSztBQWljZixrQkFBVSxJQWpjSztBQWtjZixrQkFBVSxHQWxjSztBQW1jZixrQkFBVSxHQW5jSztBQW9jZixrQkFBVSxHQXBjSztBQXFjZixrQkFBVSxHQXJjSztBQXNjZixrQkFBVSxHQXRjSztBQXVjZixrQkFBVSxHQXZjSztBQXdjZixrQkFBVSxHQXhjSztBQXljZixrQkFBVSxHQXpjSztBQTBjZixrQkFBVSxHQTFjSztBQTJjZixrQkFBVSxHQTNjSztBQTRjZixrQkFBVSxHQTVjSztBQTZjZixrQkFBVSxHQTdjSztBQThjZixrQkFBVSxHQTljSztBQStjZixrQkFBVSxHQS9jSztBQWdkZixnQkFBVSxHQWhkSztBQWlkZixrQkFBVSxHQWpkSztBQWtkZixrQkFBVSxHQWxkSztBQW1kZixrQkFBVSxHQW5kSztBQW9kZixrQkFBVSxHQXBkSztBQXFkZixrQkFBVSxHQXJkSztBQXNkZixrQkFBVSxHQXRkSztBQXVkZixrQkFBVSxHQXZkSztBQXdkZixrQkFBVSxHQXhkSztBQXlkZixrQkFBVSxHQXpkSztBQTBkZixrQkFBVSxHQTFkSztBQTJkZixrQkFBVSxHQTNkSztBQTRkZixrQkFBVSxHQTVkSztBQTZkZixrQkFBVSxHQTdkSztBQThkZixrQkFBVSxHQTlkSztBQStkZixrQkFBVSxHQS9kSztBQWdlZixrQkFBVSxHQWhlSztBQWllZixrQkFB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Y2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIi8qIVxuICogU2VsZWN0MiA0LjAuMTNcbiAqIGh0dHBzOi8vc2VsZWN0Mi5naXRodWIuaW9cbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gTm9kZS9Db21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJvb3QsIGpRdWVyeSkge1xuICAgICAgaWYgKGpRdWVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHJlcXVpcmUoJ2pRdWVyeScpIHJldHVybnMgYSBmYWN0b3J5IHRoYXQgcmVxdWlyZXMgd2luZG93IHRvXG4gICAgICAgIC8vIGJ1aWxkIGEgalF1ZXJ5IGluc3RhbmNlLCB3ZSBub3JtYWxpemUgaG93IHdlIHVzZSBtb2R1bGVzXG4gICAgICAgIC8vIHRoYXQgcmVxdWlyZSB0aGlzIHBhdHRlcm4gYnV0IHRoZSB3aW5kb3cgcHJvdmlkZWQgaXMgYSBub29wXG4gICAgICAgIC8vIGlmIGl0J3MgZGVmaW5lZCAoaG93IGpxdWVyeSB3b3JrcylcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jykocm9vdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICAgIHJldHVybiBqUXVlcnk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBmYWN0b3J5KGpRdWVyeSk7XG4gIH1cbn0gKGZ1bmN0aW9uIChqUXVlcnkpIHtcbiAgLy8gVGhpcyBpcyBuZWVkZWQgc28gd2UgY2FuIGNhdGNoIHRoZSBBTUQgbG9hZGVyIGNvbmZpZ3VyYXRpb24gYW5kIHVzZSBpdFxuICAvLyBUaGUgaW5uZXIgZmlsZSBzaG91bGQgYmUgd3JhcHBlZCAoYnkgYGJhbm5lci5zdGFydC5qc2ApIGluIGEgZnVuY3Rpb24gdGhhdFxuICAvLyByZXR1cm5zIHRoZSBBTUQgbG9hZGVyIHJlZmVyZW5jZXMuXG4gIHZhciBTMiA9KGZ1bmN0aW9uICgpIHtcbiAgLy8gUmVzdG9yZSB0aGUgU2VsZWN0MiBBTUQgbG9hZGVyIHNvIGl0IGNhbiBiZSB1c2VkXG4gIC8vIE5lZWRlZCBtb3N0bHkgaW4gdGhlIGxhbmd1YWdlIGZpbGVzLCB3aGVyZSB0aGUgbG9hZGVyIGlzIG5vdCBpbnNlcnRlZFxuICBpZiAoalF1ZXJ5ICYmIGpRdWVyeS5mbiAmJiBqUXVlcnkuZm4uc2VsZWN0MiAmJiBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpIHtcbiAgICB2YXIgUzIgPSBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQ7XG4gIH1cbnZhciBTMjsoZnVuY3Rpb24gKCkgeyBpZiAoIVMyIHx8ICFTMi5yZXF1aXJlanMpIHtcbmlmICghUzIpIHsgUzIgPSB7fTsgfSBlbHNlIHsgcmVxdWlyZSA9IFMyOyB9XG4vKipcbiAqIEBsaWNlbnNlIGFsbW9uZCAwLjMuMyBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycy5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLCBodHRwOi8vZ2l0aHViLmNvbS9yZXF1aXJlanMvYWxtb25kL0xJQ0VOU0VcbiAqL1xuLy9Hb2luZyBzbG9wcHkgdG8gYXZvaWQgJ3VzZSBzdHJpY3QnIHN0cmluZyBjb3N0LCBidXQgc3RyaWN0IHByYWN0aWNlcyBzaG91bGRcbi8vYmUgZm9sbG93ZWQuXG4vKmdsb2JhbCBzZXRUaW1lb3V0OiBmYWxzZSAqL1xuXG52YXIgcmVxdWlyZWpzLCByZXF1aXJlLCBkZWZpbmU7XG4oZnVuY3Rpb24gKHVuZGVmKSB7XG4gICAgdmFyIG1haW4sIHJlcSwgbWFrZU1hcCwgaGFuZGxlcnMsXG4gICAgICAgIGRlZmluZWQgPSB7fSxcbiAgICAgICAgd2FpdGluZyA9IHt9LFxuICAgICAgICBjb25maWcgPSB7fSxcbiAgICAgICAgZGVmaW5pbmcgPSB7fSxcbiAgICAgICAgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgYXBzID0gW10uc2xpY2UsXG4gICAgICAgIGpzU3VmZml4UmVnRXhwID0gL1xcLmpzJC87XG5cbiAgICBmdW5jdGlvbiBoYXNQcm9wKG9iaiwgcHJvcCkge1xuICAgICAgICByZXR1cm4gaGFzT3duLmNhbGwob2JqLCBwcm9wKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHJlbGF0aXZlIG1vZHVsZSBuYW1lLCBsaWtlIC4vc29tZXRoaW5nLCBub3JtYWxpemUgaXQgdG9cbiAgICAgKiBhIHJlYWwgbmFtZSB0aGF0IGNhbiBiZSBtYXBwZWQgdG8gYSBwYXRoLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSByZWxhdGl2ZSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGJhc2VOYW1lIGEgcmVhbCBuYW1lIHRoYXQgdGhlIG5hbWUgYXJnIGlzIHJlbGF0aXZlXG4gICAgICogdG8uXG4gICAgICogQHJldHVybnMge1N0cmluZ30gbm9ybWFsaXplZCBuYW1lXG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKG5hbWUsIGJhc2VOYW1lKSB7XG4gICAgICAgIHZhciBuYW1lUGFydHMsIG5hbWVTZWdtZW50LCBtYXBWYWx1ZSwgZm91bmRNYXAsIGxhc3RJbmRleCxcbiAgICAgICAgICAgIGZvdW5kSSwgZm91bmRTdGFyTWFwLCBzdGFySSwgaSwgaiwgcGFydCwgbm9ybWFsaXplZEJhc2VQYXJ0cyxcbiAgICAgICAgICAgIGJhc2VQYXJ0cyA9IGJhc2VOYW1lICYmIGJhc2VOYW1lLnNwbGl0KFwiL1wiKSxcbiAgICAgICAgICAgIG1hcCA9IGNvbmZpZy5tYXAsXG4gICAgICAgICAgICBzdGFyTWFwID0gKG1hcCAmJiBtYXBbJyonXSkgfHwge307XG5cbiAgICAgICAgLy9BZGp1c3QgYW55IHJlbGF0aXZlIHBhdGhzLlxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IG5hbWUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgLy8gSWYgd2FudGluZyBub2RlIElEIGNvbXBhdGliaWxpdHksIHN0cmlwIC5qcyBmcm9tIGVuZFxuICAgICAgICAgICAgLy8gb2YgSURzLiBIYXZlIHRvIGRvIHRoaXMgaGVyZSwgYW5kIG5vdCBpbiBuYW1lVG9VcmxcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugbm9kZSBhbGxvd3MgZWl0aGVyIC5qcyBvciBub24gLmpzIHRvIG1hcFxuICAgICAgICAgICAgLy8gdG8gc2FtZSBmaWxlLlxuICAgICAgICAgICAgaWYgKGNvbmZpZy5ub2RlSWRDb21wYXQgJiYganNTdWZmaXhSZWdFeHAudGVzdChuYW1lW2xhc3RJbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgbmFtZVtsYXN0SW5kZXhdID0gbmFtZVtsYXN0SW5kZXhdLnJlcGxhY2UoanNTdWZmaXhSZWdFeHAsICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RhcnRzIHdpdGggYSAnLicgc28gbmVlZCB0aGUgYmFzZU5hbWVcbiAgICAgICAgICAgIGlmIChuYW1lWzBdLmNoYXJBdCgwKSA9PT0gJy4nICYmIGJhc2VQYXJ0cykge1xuICAgICAgICAgICAgICAgIC8vQ29udmVydCBiYXNlTmFtZSB0byBhcnJheSwgYW5kIGxvcCBvZmYgdGhlIGxhc3QgcGFydCxcbiAgICAgICAgICAgICAgICAvL3NvIHRoYXQgLiBtYXRjaGVzIHRoYXQgJ2RpcmVjdG9yeScgYW5kIG5vdCBuYW1lIG9mIHRoZSBiYXNlTmFtZSdzXG4gICAgICAgICAgICAgICAgLy9tb2R1bGUuIEZvciBpbnN0YW5jZSwgYmFzZU5hbWUgb2YgJ29uZS90d28vdGhyZWUnLCBtYXBzIHRvXG4gICAgICAgICAgICAgICAgLy8nb25lL3R3by90aHJlZS5qcycsIGJ1dCB3ZSB3YW50IHRoZSBkaXJlY3RvcnksICdvbmUvdHdvJyBmb3JcbiAgICAgICAgICAgICAgICAvL3RoaXMgbm9ybWFsaXphdGlvbi5cbiAgICAgICAgICAgICAgICBub3JtYWxpemVkQmFzZVBhcnRzID0gYmFzZVBhcnRzLnNsaWNlKDAsIGJhc2VQYXJ0cy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplZEJhc2VQYXJ0cy5jb25jYXQobmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3RhcnQgdHJpbURvdHNcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IG5hbWVbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBhdCB0aGUgc3RhcnQsIG9yIHByZXZpb3VzIHZhbHVlIGlzIHN0aWxsIC4uLFxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIHRoZW0gc28gdGhhdCB3aGVuIGNvbnZlcnRlZCB0byBhIHBhdGggaXQgbWF5XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0aWxsIHdvcmsgd2hlbiBjb252ZXJ0ZWQgdG8gYSBwYXRoLCBldmVuIHRob3VnaFxuICAgICAgICAgICAgICAgICAgICAvLyBhcyBhbiBJRCBpdCBpcyBsZXNzIHRoYW4gaWRlYWwuIEluIGxhcmdlciBwb2ludFxuICAgICAgICAgICAgICAgICAgICAvLyByZWxlYXNlcywgbWF5IGJlIGJldHRlciB0byBqdXN0IGtpY2sgb3V0IGFuIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCAoaSA9PT0gMSAmJiBuYW1lWzJdID09PSAnLi4nKSB8fCBuYW1lW2kgLSAxXSA9PT0gJy4uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuc3BsaWNlKGkgLSAxLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgLT0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZW5kIHRyaW1Eb3RzXG5cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLmpvaW4oJy8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQXBwbHkgbWFwIGNvbmZpZyBpZiBhdmFpbGFibGUuXG4gICAgICAgIGlmICgoYmFzZVBhcnRzIHx8IHN0YXJNYXApICYmIG1hcCkge1xuICAgICAgICAgICAgbmFtZVBhcnRzID0gbmFtZS5zcGxpdCgnLycpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSBuYW1lUGFydHMubGVuZ3RoOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgbmFtZVNlZ21lbnQgPSBuYW1lUGFydHMuc2xpY2UoMCwgaSkuam9pbihcIi9cIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoYmFzZVBhcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vRmluZCB0aGUgbG9uZ2VzdCBiYXNlTmFtZSBzZWdtZW50IG1hdGNoIGluIHRoZSBjb25maWcuXG4gICAgICAgICAgICAgICAgICAgIC8vU28sIGRvIGpvaW5zIG9uIHRoZSBiaWdnZXN0IHRvIHNtYWxsZXN0IGxlbmd0aHMgb2YgYmFzZVBhcnRzLlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBiYXNlUGFydHMubGVuZ3RoOyBqID4gMDsgaiAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBWYWx1ZSA9IG1hcFtiYXNlUGFydHMuc2xpY2UoMCwgaikuam9pbignLycpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9iYXNlTmFtZSBzZWdtZW50IGhhcyAgY29uZmlnLCBmaW5kIGlmIGl0IGhhcyBvbmUgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZhbHVlID0gbWFwVmFsdWVbbmFtZVNlZ21lbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01hdGNoLCB1cGRhdGUgbmFtZSB0byB0aGUgbmV3IHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZE1hcCA9IG1hcFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEkgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZm91bmRNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9DaGVjayBmb3IgYSBzdGFyIG1hcCBtYXRjaCwgYnV0IGp1c3QgaG9sZCBvbiB0byBpdCxcbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hvcnRlciBzZWdtZW50IG1hdGNoIGxhdGVyIGluIGEgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAvL2NvbmZpZywgdGhlbiBmYXZvciBvdmVyIHRoaXMgc3RhciBtYXAuXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZFN0YXJNYXAgJiYgc3Rhck1hcCAmJiBzdGFyTWFwW25hbWVTZWdtZW50XSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZFN0YXJNYXAgPSBzdGFyTWFwW25hbWVTZWdtZW50XTtcbiAgICAgICAgICAgICAgICAgICAgc3RhckkgPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFmb3VuZE1hcCAmJiBmb3VuZFN0YXJNYXApIHtcbiAgICAgICAgICAgICAgICBmb3VuZE1hcCA9IGZvdW5kU3Rhck1hcDtcbiAgICAgICAgICAgICAgICBmb3VuZEkgPSBzdGFySTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kTWFwKSB7XG4gICAgICAgICAgICAgICAgbmFtZVBhcnRzLnNwbGljZSgwLCBmb3VuZEksIGZvdW5kTWFwKTtcbiAgICAgICAgICAgICAgICBuYW1lID0gbmFtZVBhcnRzLmpvaW4oJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VSZXF1aXJlKHJlbE5hbWUsIGZvcmNlU3luYykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9BIHZlcnNpb24gb2YgYSByZXF1aXJlIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIGEgbW9kdWxlTmFtZVxuICAgICAgICAgICAgLy92YWx1ZSBmb3IgaXRlbXMgdGhhdCBtYXkgbmVlZCB0b1xuICAgICAgICAgICAgLy9sb29rIHVwIHBhdGhzIHJlbGF0aXZlIHRvIHRoZSBtb2R1bGVOYW1lXG4gICAgICAgICAgICB2YXIgYXJncyA9IGFwcy5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgICAgICAgIC8vSWYgZmlyc3QgYXJnIGlzIG5vdCByZXF1aXJlKCdzdHJpbmcnKSwgYW5kIHRoZXJlIGlzIG9ubHlcbiAgICAgICAgICAgIC8vb25lIGFyZywgaXQgaXMgdGhlIGFycmF5IGZvcm0gd2l0aG91dCBhIGNhbGxiYWNrLiBJbnNlcnRcbiAgICAgICAgICAgIC8vYSBudWxsIHNvIHRoYXQgdGhlIGZvbGxvd2luZyBjb25jYXQgaXMgY29ycmVjdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycgJiYgYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2gobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxLmFwcGx5KHVuZGVmLCBhcmdzLmNvbmNhdChbcmVsTmFtZSwgZm9yY2VTeW5jXSkpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VOb3JtYWxpemUocmVsTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUobmFtZSwgcmVsTmFtZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUxvYWQoZGVwTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBkZWZpbmVkW2RlcE5hbWVdID0gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbERlcChuYW1lKSB7XG4gICAgICAgIGlmIChoYXNQcm9wKHdhaXRpbmcsIG5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IHdhaXRpbmdbbmFtZV07XG4gICAgICAgICAgICBkZWxldGUgd2FpdGluZ1tuYW1lXTtcbiAgICAgICAgICAgIGRlZmluaW5nW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIG1haW4uYXBwbHkodW5kZWYsIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNQcm9wKGRlZmluZWQsIG5hbWUpICYmICFoYXNQcm9wKGRlZmluaW5nLCBuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyAnICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluZWRbbmFtZV07XG4gICAgfVxuXG4gICAgLy9UdXJucyBhIHBsdWdpbiFyZXNvdXJjZSB0byBbcGx1Z2luLCByZXNvdXJjZV1cbiAgICAvL3dpdGggdGhlIHBsdWdpbiBiZWluZyB1bmRlZmluZWQgaWYgdGhlIG5hbWVcbiAgICAvL2RpZCBub3QgaGF2ZSBhIHBsdWdpbiBwcmVmaXguXG4gICAgZnVuY3Rpb24gc3BsaXRQcmVmaXgobmFtZSkge1xuICAgICAgICB2YXIgcHJlZml4LFxuICAgICAgICAgICAgaW5kZXggPSBuYW1lID8gbmFtZS5pbmRleE9mKCchJykgOiAtMTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHByZWZpeCA9IG5hbWUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZyhpbmRleCArIDEsIG5hbWUubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3ByZWZpeCwgbmFtZV07XG4gICAgfVxuXG4gICAgLy9DcmVhdGVzIGEgcGFydHMgYXJyYXkgZm9yIGEgcmVsTmFtZSB3aGVyZSBmaXJzdCBwYXJ0IGlzIHBsdWdpbiBJRCxcbiAgICAvL3NlY29uZCBwYXJ0IGlzIHJlc291cmNlIElELiBBc3N1bWVzIHJlbE5hbWUgaGFzIGFscmVhZHkgYmVlbiBub3JtYWxpemVkLlxuICAgIGZ1bmN0aW9uIG1ha2VSZWxQYXJ0cyhyZWxOYW1lKSB7XG4gICAgICAgIHJldHVybiByZWxOYW1lID8gc3BsaXRQcmVmaXgocmVsTmFtZSkgOiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIG5hbWUgbWFwLCBub3JtYWxpemluZyB0aGUgbmFtZSwgYW5kIHVzaW5nIGEgcGx1Z2luXG4gICAgICogZm9yIG5vcm1hbGl6YXRpb24gaWYgbmVjZXNzYXJ5LiBHcmFicyBhIHJlZiB0byBwbHVnaW5cbiAgICAgKiB0b28sIGFzIGFuIG9wdGltaXphdGlvbi5cbiAgICAgKi9cbiAgICBtYWtlTWFwID0gZnVuY3Rpb24gKG5hbWUsIHJlbFBhcnRzKSB7XG4gICAgICAgIHZhciBwbHVnaW4sXG4gICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpLFxuICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF0sXG4gICAgICAgICAgICByZWxSZXNvdXJjZU5hbWUgPSByZWxQYXJ0c1sxXTtcblxuICAgICAgICBuYW1lID0gcGFydHNbMV07XG5cbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgcHJlZml4ID0gbm9ybWFsaXplKHByZWZpeCwgcmVsUmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIHBsdWdpbiA9IGNhbGxEZXAocHJlZml4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vTm9ybWFsaXplIGFjY29yZGluZ1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luICYmIHBsdWdpbi5ub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gcGx1Z2luLm5vcm1hbGl6ZShuYW1lLCBtYWtlTm9ybWFsaXplKHJlbFJlc291cmNlTmFtZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplKG5hbWUsIHJlbFJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplKG5hbWUsIHJlbFJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpO1xuICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF07XG4gICAgICAgICAgICBuYW1lID0gcGFydHNbMV07XG4gICAgICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luID0gY2FsbERlcChwcmVmaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9Vc2luZyByaWRpY3Vsb3VzIHByb3BlcnR5IG5hbWVzIGZvciBzcGFjZSByZWFzb25zXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmOiBwcmVmaXggPyBwcmVmaXggKyAnIScgKyBuYW1lIDogbmFtZSwgLy9mdWxsTmFtZVxuICAgICAgICAgICAgbjogbmFtZSxcbiAgICAgICAgICAgIHByOiBwcmVmaXgsXG4gICAgICAgICAgICBwOiBwbHVnaW5cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWFrZUNvbmZpZyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbmZpZyAmJiBjb25maWcuY29uZmlnICYmIGNvbmZpZy5jb25maWdbbmFtZV0pIHx8IHt9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZXJzID0ge1xuICAgICAgICByZXF1aXJlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VSZXF1aXJlKG5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBleHBvcnRzOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIGUgPSBkZWZpbmVkW25hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRlZmluZWRbbmFtZV0gPSB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG5hbWUsXG4gICAgICAgICAgICAgICAgdXJpOiAnJyxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBkZWZpbmVkW25hbWVdLFxuICAgICAgICAgICAgICAgIGNvbmZpZzogbWFrZUNvbmZpZyhuYW1lKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtYWluID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKSB7XG4gICAgICAgIHZhciBjanNNb2R1bGUsIGRlcE5hbWUsIHJldCwgbWFwLCBpLCByZWxQYXJ0cyxcbiAgICAgICAgICAgIGFyZ3MgPSBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrVHlwZSA9IHR5cGVvZiBjYWxsYmFjayxcbiAgICAgICAgICAgIHVzaW5nRXhwb3J0cztcblxuICAgICAgICAvL1VzZSBuYW1lIGlmIG5vIHJlbE5hbWVcbiAgICAgICAgcmVsTmFtZSA9IHJlbE5hbWUgfHwgbmFtZTtcbiAgICAgICAgcmVsUGFydHMgPSBtYWtlUmVsUGFydHMocmVsTmFtZSk7XG5cbiAgICAgICAgLy9DYWxsIHRoZSBjYWxsYmFjayB0byBkZWZpbmUgdGhlIG1vZHVsZSwgaWYgbmVjZXNzYXJ5LlxuICAgICAgICBpZiAoY2FsbGJhY2tUeXBlID09PSAndW5kZWZpbmVkJyB8fCBjYWxsYmFja1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vUHVsbCBvdXQgdGhlIGRlZmluZWQgZGVwZW5kZW5jaWVzIGFuZCBwYXNzIHRoZSBvcmRlcmVkXG4gICAgICAgICAgICAvL3ZhbHVlcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICAvL0RlZmF1bHQgdG8gW3JlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZV0gaWYgbm8gZGVwc1xuICAgICAgICAgICAgZGVwcyA9ICFkZXBzLmxlbmd0aCAmJiBjYWxsYmFjay5sZW5ndGggPyBbJ3JlcXVpcmUnLCAnZXhwb3J0cycsICdtb2R1bGUnXSA6IGRlcHM7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG1hcCA9IG1ha2VNYXAoZGVwc1tpXSwgcmVsUGFydHMpO1xuICAgICAgICAgICAgICAgIGRlcE5hbWUgPSBtYXAuZjtcblxuICAgICAgICAgICAgICAgIC8vRmFzdCBwYXRoIENvbW1vbkpTIHN0YW5kYXJkIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICAgICBpZiAoZGVwTmFtZSA9PT0gXCJyZXF1aXJlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGhhbmRsZXJzLnJlcXVpcmUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXBOYW1lID09PSBcImV4cG9ydHNcIikge1xuICAgICAgICAgICAgICAgICAgICAvL0NvbW1vbkpTIG1vZHVsZSBzcGVjIDEuMVxuICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gaGFuZGxlcnMuZXhwb3J0cyhuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdXNpbmdFeHBvcnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlcE5hbWUgPT09IFwibW9kdWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9Db21tb25KUyBtb2R1bGUgc3BlYyAxLjFcbiAgICAgICAgICAgICAgICAgICAgY2pzTW9kdWxlID0gYXJnc1tpXSA9IGhhbmRsZXJzLm1vZHVsZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1Byb3AoZGVmaW5lZCwgZGVwTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Byb3Aod2FpdGluZywgZGVwTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Byb3AoZGVmaW5pbmcsIGRlcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBjYWxsRGVwKGRlcE5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFwLnApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnAubG9hZChtYXAubiwgbWFrZVJlcXVpcmUocmVsTmFtZSwgdHJ1ZSksIG1ha2VMb2FkKGRlcE5hbWUpLCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBkZWZpbmVkW2RlcE5hbWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJyBtaXNzaW5nICcgKyBkZXBOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldCA9IGNhbGxiYWNrID8gY2FsbGJhY2suYXBwbHkoZGVmaW5lZFtuYW1lXSwgYXJncykgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy9JZiBzZXR0aW5nIGV4cG9ydHMgdmlhIFwibW9kdWxlXCIgaXMgaW4gcGxheSxcbiAgICAgICAgICAgICAgICAvL2Zhdm9yIHRoYXQgb3ZlciByZXR1cm4gdmFsdWUgYW5kIGV4cG9ydHMuIEFmdGVyIHRoYXQsXG4gICAgICAgICAgICAgICAgLy9mYXZvciBhIG5vbi11bmRlZmluZWQgcmV0dXJuIHZhbHVlIG92ZXIgZXhwb3J0cyB1c2UuXG4gICAgICAgICAgICAgICAgaWYgKGNqc01vZHVsZSAmJiBjanNNb2R1bGUuZXhwb3J0cyAhPT0gdW5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNqc01vZHVsZS5leHBvcnRzICE9PSBkZWZpbmVkW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSBjanNNb2R1bGUuZXhwb3J0cztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJldCAhPT0gdW5kZWYgfHwgIXVzaW5nRXhwb3J0cykge1xuICAgICAgICAgICAgICAgICAgICAvL1VzZSB0aGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVkW25hbWVdID0gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAvL01heSBqdXN0IGJlIGFuIG9iamVjdCBkZWZpbml0aW9uIGZvciB0aGUgbW9kdWxlLiBPbmx5XG4gICAgICAgICAgICAvL3dvcnJ5IGFib3V0IGRlZmluaW5nIGlmIGhhdmUgYSBtb2R1bGUgbmFtZS5cbiAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1aXJlanMgPSByZXF1aXJlID0gcmVxID0gZnVuY3Rpb24gKGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lLCBmb3JjZVN5bmMsIGFsdCkge1xuICAgICAgICBpZiAodHlwZW9mIGRlcHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1tkZXBzXSkge1xuICAgICAgICAgICAgICAgIC8vY2FsbGJhY2sgaW4gdGhpcyBjYXNlIGlzIHJlYWxseSByZWxOYW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJzW2RlcHNdKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSnVzdCByZXR1cm4gdGhlIG1vZHVsZSB3YW50ZWQuIEluIHRoaXMgc2NlbmFyaW8sIHRoZVxuICAgICAgICAgICAgLy9kZXBzIGFyZyBpcyB0aGUgbW9kdWxlIG5hbWUsIGFuZCBzZWNvbmQgYXJnIChpZiBwYXNzZWQpXG4gICAgICAgICAgICAvL2lzIGp1c3QgdGhlIHJlbE5hbWUuXG4gICAgICAgICAgICAvL05vcm1hbGl6ZSBtb2R1bGUgbmFtZSwgaWYgaXQgY29udGFpbnMgLiBvciAuLlxuICAgICAgICAgICAgcmV0dXJuIGNhbGxEZXAobWFrZU1hcChkZXBzLCBtYWtlUmVsUGFydHMoY2FsbGJhY2spKS5mKTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVwcy5zcGxpY2UpIHtcbiAgICAgICAgICAgIC8vZGVwcyBpcyBhIGNvbmZpZyBvYmplY3QsIG5vdCBhbiBhcnJheS5cbiAgICAgICAgICAgIGNvbmZpZyA9IGRlcHM7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmRlcHMpIHtcbiAgICAgICAgICAgICAgICByZXEoY29uZmlnLmRlcHMsIGNvbmZpZy5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suc3BsaWNlKSB7XG4gICAgICAgICAgICAgICAgLy9jYWxsYmFjayBpcyBhbiBhcnJheSwgd2hpY2ggbWVhbnMgaXQgaXMgYSBkZXBlbmRlbmN5IGxpc3QuXG4gICAgICAgICAgICAgICAgLy9BZGp1c3QgYXJncyBpZiB0aGVyZSBhcmUgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgZGVwcyA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gcmVsTmFtZTtcbiAgICAgICAgICAgICAgICByZWxOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVwcyA9IHVuZGVmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9TdXBwb3J0IHJlcXVpcmUoWydhJ10pXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAgICAgLy9JZiByZWxOYW1lIGlzIGEgZnVuY3Rpb24sIGl0IGlzIGFuIGVycmJhY2sgaGFuZGxlcixcbiAgICAgICAgLy9zbyByZW1vdmUgaXQuXG4gICAgICAgIGlmICh0eXBlb2YgcmVsTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVsTmFtZSA9IGZvcmNlU3luYztcbiAgICAgICAgICAgIGZvcmNlU3luYyA9IGFsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vU2ltdWxhdGUgYXN5bmMgY2FsbGJhY2s7XG4gICAgICAgIGlmIChmb3JjZVN5bmMpIHtcbiAgICAgICAgICAgIG1haW4odW5kZWYsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vVXNpbmcgYSBub24temVybyB2YWx1ZSBiZWNhdXNlIG9mIGNvbmNlcm4gZm9yIHdoYXQgb2xkIGJyb3dzZXJzXG4gICAgICAgICAgICAvL2RvLCBhbmQgbGF0ZXN0IGJyb3dzZXJzIFwidXBncmFkZVwiIHRvIDQgaWYgbG93ZXIgdmFsdWUgaXMgdXNlZDpcbiAgICAgICAgICAgIC8vaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvdGltZXJzLmh0bWwjZG9tLXdpbmRvd3RpbWVycy1zZXR0aW1lb3V0OlxuICAgICAgICAgICAgLy9JZiB3YW50IGEgdmFsdWUgaW1tZWRpYXRlbHksIHVzZSByZXF1aXJlKCdpZCcpIGluc3RlYWQgLS0gc29tZXRoaW5nXG4gICAgICAgICAgICAvL3RoYXQgd29ya3MgaW4gYWxtb25kIG9uIHRoZSBnbG9iYWwgbGV2ZWwsIGJ1dCBub3QgZ3VhcmFudGVlZCBhbmRcbiAgICAgICAgICAgIC8vdW5saWtlbHkgdG8gd29yayBpbiBvdGhlciBBTUQgaW1wbGVtZW50YXRpb25zLlxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbWFpbih1bmRlZiwgZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUpO1xuICAgICAgICAgICAgfSwgNCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVxO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBKdXN0IGRyb3BzIHRoZSBjb25maWcgb24gdGhlIGZsb29yLCBidXQgcmV0dXJucyByZXEgaW4gY2FzZVxuICAgICAqIHRoZSBjb25maWcgcmV0dXJuIHZhbHVlIGlzIHVzZWQuXG4gICAgICovXG4gICAgcmVxLmNvbmZpZyA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICAgICAgcmV0dXJuIHJlcShjZmcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2UgbW9kdWxlIHJlZ2lzdHJ5IGZvciBkZWJ1Z2dpbmcgYW5kIHRvb2xpbmdcbiAgICAgKi9cbiAgICByZXF1aXJlanMuX2RlZmluZWQgPSBkZWZpbmVkO1xuXG4gICAgZGVmaW5lID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VlIGFsbW9uZCBSRUFETUU6IGluY29ycmVjdCBtb2R1bGUgYnVpbGQsIG5vIG1vZHVsZSBuYW1lJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RoaXMgbW9kdWxlIG1heSBub3QgaGF2ZSBkZXBlbmRlbmNpZXNcbiAgICAgICAgaWYgKCFkZXBzLnNwbGljZSkge1xuICAgICAgICAgICAgLy9kZXBzIGlzIG5vdCBhbiBhcnJheSwgc28gcHJvYmFibHkgbWVhbnNcbiAgICAgICAgICAgIC8vYW4gb2JqZWN0IGxpdGVyYWwgb3IgZmFjdG9yeSBmdW5jdGlvbiBmb3JcbiAgICAgICAgICAgIC8vdGhlIHZhbHVlLiBBZGp1c3QgYXJncy5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gZGVwcztcbiAgICAgICAgICAgIGRlcHMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzUHJvcChkZWZpbmVkLCBuYW1lKSAmJiAhaGFzUHJvcCh3YWl0aW5nLCBuYW1lKSkge1xuICAgICAgICAgICAgd2FpdGluZ1tuYW1lXSA9IFtuYW1lLCBkZXBzLCBjYWxsYmFja107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVmaW5lLmFtZCA9IHtcbiAgICAgICAgalF1ZXJ5OiB0cnVlXG4gICAgfTtcbn0oKSk7XG5cblMyLnJlcXVpcmVqcyA9IHJlcXVpcmVqcztTMi5yZXF1aXJlID0gcmVxdWlyZTtTMi5kZWZpbmUgPSBkZWZpbmU7XG59XG59KCkpO1xuUzIuZGVmaW5lKFwiYWxtb25kXCIsIGZ1bmN0aW9uKCl7fSk7XG5cbi8qIGdsb2JhbCBqUXVlcnk6ZmFsc2UsICQ6ZmFsc2UgKi9cblMyLmRlZmluZSgnanF1ZXJ5JyxbXSxmdW5jdGlvbiAoKSB7XG4gIHZhciBfJCA9IGpRdWVyeSB8fCAkO1xuXG4gIGlmIChfJCA9PSBudWxsICYmIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnU2VsZWN0MjogQW4gaW5zdGFuY2Ugb2YgalF1ZXJ5IG9yIGEgalF1ZXJ5LWNvbXBhdGlibGUgbGlicmFyeSB3YXMgbm90ICcgK1xuICAgICAgJ2ZvdW5kLiBNYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGluY2x1ZGluZyBqUXVlcnkgYmVmb3JlIFNlbGVjdDIgb24geW91ciAnICtcbiAgICAgICd3ZWIgcGFnZS4nXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBfJDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvdXRpbHMnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIHZhciBVdGlscyA9IHt9O1xuXG4gIFV0aWxzLkV4dGVuZCA9IGZ1bmN0aW9uIChDaGlsZENsYXNzLCBTdXBlckNsYXNzKSB7XG4gICAgdmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gICAgZnVuY3Rpb24gQmFzZUNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBDaGlsZENsYXNzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBTdXBlckNsYXNzKSB7XG4gICAgICBpZiAoX19oYXNQcm9wLmNhbGwoU3VwZXJDbGFzcywga2V5KSkge1xuICAgICAgICBDaGlsZENsYXNzW2tleV0gPSBTdXBlckNsYXNzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmFzZUNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IFN1cGVyQ2xhc3MucHJvdG90eXBlO1xuICAgIENoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IEJhc2VDb25zdHJ1Y3RvcigpO1xuICAgIENoaWxkQ2xhc3MuX19zdXBlcl9fID0gU3VwZXJDbGFzcy5wcm90b3R5cGU7XG5cbiAgICByZXR1cm4gQ2hpbGRDbGFzcztcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRNZXRob2RzICh0aGVDbGFzcykge1xuICAgIHZhciBwcm90byA9IHRoZUNsYXNzLnByb3RvdHlwZTtcblxuICAgIHZhciBtZXRob2RzID0gW107XG5cbiAgICBmb3IgKHZhciBtZXRob2ROYW1lIGluIHByb3RvKSB7XG4gICAgICB2YXIgbSA9IHByb3RvW21ldGhvZE5hbWVdO1xuXG4gICAgICBpZiAodHlwZW9mIG0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBtZXRob2RzLnB1c2gobWV0aG9kTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGhvZHM7XG4gIH1cblxuICBVdGlscy5EZWNvcmF0ZSA9IGZ1bmN0aW9uIChTdXBlckNsYXNzLCBEZWNvcmF0b3JDbGFzcykge1xuICAgIHZhciBkZWNvcmF0ZWRNZXRob2RzID0gZ2V0TWV0aG9kcyhEZWNvcmF0b3JDbGFzcyk7XG4gICAgdmFyIHN1cGVyTWV0aG9kcyA9IGdldE1ldGhvZHMoU3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBEZWNvcmF0ZWRDbGFzcyAoKSB7XG4gICAgICB2YXIgdW5zaGlmdCA9IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0O1xuXG4gICAgICB2YXIgYXJnQ291bnQgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IubGVuZ3RoO1xuXG4gICAgICB2YXIgY2FsbGVkQ29uc3RydWN0b3IgPSBTdXBlckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuICAgICAgaWYgKGFyZ0NvdW50ID4gMCkge1xuICAgICAgICB1bnNoaWZ0LmNhbGwoYXJndW1lbnRzLCBTdXBlckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgY2FsbGVkQ29uc3RydWN0b3IgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3I7XG4gICAgICB9XG5cbiAgICAgIGNhbGxlZENvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgRGVjb3JhdG9yQ2xhc3MuZGlzcGxheU5hbWUgPSBTdXBlckNsYXNzLmRpc3BsYXlOYW1lO1xuXG4gICAgZnVuY3Rpb24gY3RyICgpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBEZWNvcmF0ZWRDbGFzcztcbiAgICB9XG5cbiAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGUgPSBuZXcgY3RyKCk7XG5cbiAgICBmb3IgKHZhciBtID0gMDsgbSA8IHN1cGVyTWV0aG9kcy5sZW5ndGg7IG0rKykge1xuICAgICAgdmFyIHN1cGVyTWV0aG9kID0gc3VwZXJNZXRob2RzW21dO1xuXG4gICAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGVbc3VwZXJNZXRob2RdID1cbiAgICAgICAgU3VwZXJDbGFzcy5wcm90b3R5cGVbc3VwZXJNZXRob2RdO1xuICAgIH1cblxuICAgIHZhciBjYWxsZWRNZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgLy8gU3R1YiBvdXQgdGhlIG9yaWdpbmFsIG1ldGhvZCBpZiBpdCdzIG5vdCBkZWNvcmF0aW5nIGFuIGFjdHVhbCBtZXRob2RcbiAgICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICBpZiAobWV0aG9kTmFtZSBpbiBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGUpIHtcbiAgICAgICAgb3JpZ2luYWxNZXRob2QgPSBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWNvcmF0ZWRNZXRob2QgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1bnNoaWZ0ID0gQXJyYXkucHJvdG90eXBlLnVuc2hpZnQ7XG5cbiAgICAgICAgdW5zaGlmdC5jYWxsKGFyZ3VtZW50cywgb3JpZ2luYWxNZXRob2QpO1xuXG4gICAgICAgIHJldHVybiBkZWNvcmF0ZWRNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGVjb3JhdGVkTWV0aG9kcy5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGRlY29yYXRlZE1ldGhvZCA9IGRlY29yYXRlZE1ldGhvZHNbZF07XG5cbiAgICAgIERlY29yYXRlZENsYXNzLnByb3RvdHlwZVtkZWNvcmF0ZWRNZXRob2RdID0gY2FsbGVkTWV0aG9kKGRlY29yYXRlZE1ldGhvZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERlY29yYXRlZENsYXNzO1xuICB9O1xuXG4gIHZhciBPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCB7fTtcblxuICAgIGlmIChldmVudCBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBbY2FsbGJhY2tdO1xuICAgIH1cbiAgfTtcblxuICBPYnNlcnZhYmxlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICAgIHZhciBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgLy8gUGFyYW1zIHNob3VsZCBhbHdheXMgY29tZSBpbiBhcyBhbiBhcnJheVxuICAgIGlmIChwYXJhbXMgPT0gbnVsbCkge1xuICAgICAgcGFyYW1zID0gW107XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGFyZ3VtZW50cyB0byB0aGUgZXZlbnQsIHVzZSBhIHRlbXBvcmFyeSBvYmplY3RcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcGFyYW1zLnB1c2goe30pO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgYF90eXBlYCBvZiB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBldmVudFxuICAgIHBhcmFtc1swXS5fdHlwZSA9IGV2ZW50O1xuXG4gICAgaWYgKGV2ZW50IGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmludm9rZSh0aGlzLmxpc3RlbmVyc1tldmVudF0sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfVxuXG4gICAgaWYgKCcqJyBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5pbnZva2UodGhpcy5saXN0ZW5lcnNbJyonXSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGxpc3RlbmVycywgcGFyYW1zKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIFV0aWxzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuXG4gIFV0aWxzLmdlbmVyYXRlQ2hhcnMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgdmFyIGNoYXJzID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmFuZG9tQ2hhciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2KTtcbiAgICAgIGNoYXJzICs9IHJhbmRvbUNoYXIudG9TdHJpbmcoMzYpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGFycztcbiAgfTtcblxuICBVdGlscy5iaW5kID0gZnVuY3Rpb24gKGZ1bmMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgVXRpbHMuX2NvbnZlcnREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKHZhciBvcmlnaW5hbEtleSBpbiBkYXRhKSB7XG4gICAgICB2YXIga2V5cyA9IG9yaWdpbmFsS2V5LnNwbGl0KCctJyk7XG5cbiAgICAgIHZhciBkYXRhTGV2ZWwgPSBkYXRhO1xuXG4gICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwga2V5cy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXTtcblxuICAgICAgICAvLyBMb3dlcmNhc2UgdGhlIGZpcnN0IGxldHRlclxuICAgICAgICAvLyBCeSBkZWZhdWx0LCBkYXNoLXNlcGFyYXRlZCBiZWNvbWVzIGNhbWVsQ2FzZVxuICAgICAgICBrZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xuXG4gICAgICAgIGlmICghKGtleSBpbiBkYXRhTGV2ZWwpKSB7XG4gICAgICAgICAgZGF0YUxldmVsW2tleV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrID09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGRhdGFMZXZlbFtrZXldID0gZGF0YVtvcmlnaW5hbEtleV07XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhTGV2ZWwgPSBkYXRhTGV2ZWxba2V5XTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIGRhdGFbb3JpZ2luYWxLZXldO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIFV0aWxzLmhhc1Njcm9sbCA9IGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICAvLyBBZGFwdGVkIGZyb20gdGhlIGZ1bmN0aW9uIGNyZWF0ZWQgYnkgQFNoYWRvd1NjcmlwdGVyXG4gICAgLy8gYW5kIGFkYXB0ZWQgYnkgQEJpbGxCYXJyeSBvbiB0aGUgU3RhY2sgRXhjaGFuZ2UgQ29kZSBSZXZpZXcgd2Vic2l0ZS5cbiAgICAvLyBUaGUgb3JpZ2luYWwgY29kZSBjYW4gYmUgZm91bmQgYXRcbiAgICAvLyBodHRwOi8vY29kZXJldmlldy5zdGFja2V4Y2hhbmdlLmNvbS9xLzEzMzM4XG4gICAgLy8gYW5kIHdhcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggdGhlIFNpenpsZSBzZWxlY3RvciBlbmdpbmUuXG5cbiAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgdmFyIG92ZXJmbG93WCA9IGVsLnN0eWxlLm92ZXJmbG93WDtcbiAgICB2YXIgb3ZlcmZsb3dZID0gZWwuc3R5bGUub3ZlcmZsb3dZO1xuXG4gICAgLy9DaGVjayBib3RoIHggYW5kIHkgZGVjbGFyYXRpb25zXG4gICAgaWYgKG92ZXJmbG93WCA9PT0gb3ZlcmZsb3dZICYmXG4gICAgICAgIChvdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IG92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IG92ZXJmbG93WSA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAoJGVsLmlubmVySGVpZ2h0KCkgPCBlbC5zY3JvbGxIZWlnaHQgfHxcbiAgICAgICRlbC5pbm5lcldpZHRoKCkgPCBlbC5zY3JvbGxXaWR0aCk7XG4gIH07XG5cbiAgVXRpbHMuZXNjYXBlTWFya3VwID0gZnVuY3Rpb24gKG1hcmt1cCkge1xuICAgIHZhciByZXBsYWNlTWFwID0ge1xuICAgICAgJ1xcXFwnOiAnJiM5MjsnLFxuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJ1xcJyc6ICcmIzM5OycsXG4gICAgICAnLyc6ICcmIzQ3OydcbiAgICB9O1xuXG4gICAgLy8gRG8gbm90IHRyeSB0byBlc2NhcGUgdGhlIG1hcmt1cCBpZiBpdCdzIG5vdCBhIHN0cmluZ1xuICAgIGlmICh0eXBlb2YgbWFya3VwICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nKG1hcmt1cCkucmVwbGFjZSgvWyY8PlwiJ1xcL1xcXFxdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VNYXBbbWF0Y2hdO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEFwcGVuZCBhbiBhcnJheSBvZiBqUXVlcnkgbm9kZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxuICBVdGlscy5hcHBlbmRNYW55ID0gZnVuY3Rpb24gKCRlbGVtZW50LCAkbm9kZXMpIHtcbiAgICAvLyBqUXVlcnkgMS43LnggZG9lcyBub3Qgc3VwcG9ydCAkLmZuLmFwcGVuZCgpIHdpdGggYW4gYXJyYXlcbiAgICAvLyBGYWxsIGJhY2sgdG8gYSBqUXVlcnkgb2JqZWN0IGNvbGxlY3Rpb24gdXNpbmcgJC5mbi5hZGQoKVxuICAgIGlmICgkLmZuLmpxdWVyeS5zdWJzdHIoMCwgMykgPT09ICcxLjcnKSB7XG4gICAgICB2YXIgJGpxTm9kZXMgPSAkKCk7XG5cbiAgICAgICQubWFwKCRub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgJGpxTm9kZXMgPSAkanFOb2Rlcy5hZGQobm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgJG5vZGVzID0gJGpxTm9kZXM7XG4gICAgfVxuXG4gICAgJGVsZW1lbnQuYXBwZW5kKCRub2Rlcyk7XG4gIH07XG5cbiAgLy8gQ2FjaGUgb2JqZWN0cyBpbiBVdGlscy5fX2NhY2hlIGluc3RlYWQgb2YgJC5kYXRhIChzZWUgIzQzNDYpXG4gIFV0aWxzLl9fY2FjaGUgPSB7fTtcblxuICB2YXIgaWQgPSAwO1xuICBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIEdldCBhIHVuaXF1ZSBlbGVtZW50IElkLiBJZiBlbGVtZW50IGhhcyBubyBpZCxcbiAgICAvLyBjcmVhdGVzIGEgbmV3IHVuaXF1ZSBudW1iZXIsIHN0b3JlcyBpdCBpbiB0aGUgaWRcbiAgICAvLyBhdHRyaWJ1dGUgYW5kIHJldHVybnMgdGhlIG5ldyBpZC5cbiAgICAvLyBJZiBhbiBpZCBhbHJlYWR5IGV4aXN0cywgaXQgc2ltcGx5IHJldHVybnMgaXQuXG5cbiAgICB2YXIgc2VsZWN0MklkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcpO1xuICAgIGlmIChzZWxlY3QySWQgPT0gbnVsbCkge1xuICAgICAgLy8gSWYgZWxlbWVudCBoYXMgaWQsIHVzZSBpdC5cbiAgICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICAgIHNlbGVjdDJJZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdDItaWQnLCBzZWxlY3QySWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcsICsraWQpO1xuICAgICAgICBzZWxlY3QySWQgPSBpZC50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0MklkO1xuICB9O1xuXG4gIFV0aWxzLlN0b3JlRGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIC8vIFN0b3JlcyBhbiBpdGVtIGluIHRoZSBjYWNoZSBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAvLyBuYW1lIGlzIHRoZSBjYWNoZSBrZXkuXG4gICAgdmFyIGlkID0gVXRpbHMuR2V0VW5pcXVlRWxlbWVudElkKGVsZW1lbnQpO1xuICAgIGlmICghVXRpbHMuX19jYWNoZVtpZF0pIHtcbiAgICAgIFV0aWxzLl9fY2FjaGVbaWRdID0ge307XG4gICAgfVxuXG4gICAgVXRpbHMuX19jYWNoZVtpZF1bbmFtZV0gPSB2YWx1ZTtcbiAgfTtcblxuICBVdGlscy5HZXREYXRhID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAvLyBSZXRyaWV2ZXMgYSB2YWx1ZSBmcm9tIHRoZSBjYWNoZSBieSBpdHMga2V5IChuYW1lKVxuICAgIC8vIG5hbWUgaXMgb3B0aW9uYWwuIElmIG5vIG5hbWUgc3BlY2lmaWVkLCByZXR1cm5cbiAgICAvLyBhbGwgY2FjaGUgaXRlbXMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAvLyBhbmQgZm9yIGEgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgdmFyIGlkID0gVXRpbHMuR2V0VW5pcXVlRWxlbWVudElkKGVsZW1lbnQpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICBpZiAoVXRpbHMuX19jYWNoZVtpZF0pIHtcbiAgICAgICAgaWYgKFV0aWxzLl9fY2FjaGVbaWRdW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gVXRpbHMuX19jYWNoZVtpZF1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQoZWxlbWVudCkuZGF0YShuYW1lKTsgLy8gRmFsbGJhY2sgdG8gSFRNTDUgZGF0YSBhdHRyaWJzLlxuICAgICAgfVxuICAgICAgcmV0dXJuICQoZWxlbWVudCkuZGF0YShuYW1lKTsgLy8gRmFsbGJhY2sgdG8gSFRNTDUgZGF0YSBhdHRyaWJzLlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gVXRpbHMuX19jYWNoZVtpZF07XG4gICAgfVxuICB9O1xuXG4gIFV0aWxzLlJlbW92ZURhdGEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIFJlbW92ZXMgYWxsIGNhY2hlZCBpdGVtcyBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICB2YXIgaWQgPSBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQoZWxlbWVudCk7XG4gICAgaWYgKFV0aWxzLl9fY2FjaGVbaWRdICE9IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBVdGlscy5fX2NhY2hlW2lkXTtcbiAgICB9XG5cbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QyLWlkJyk7XG4gIH07XG5cbiAgcmV0dXJuIFV0aWxzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9yZXN1bHRzJyxbXG4gICdqcXVlcnknLFxuICAnLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBSZXN1bHRzICgkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5kYXRhID0gZGF0YUFkYXB0ZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIFJlc3VsdHMuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoUmVzdWx0cywgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkcmVzdWx0cyA9ICQoXG4gICAgICAnPHVsIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zXCIgcm9sZT1cImxpc3Rib3hcIj48L3VsPidcbiAgICApO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICRyZXN1bHRzLmF0dHIoJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICB0aGlzLiRyZXN1bHRzID0gJHJlc3VsdHM7XG5cbiAgICByZXR1cm4gJHJlc3VsdHM7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5lbXB0eSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmRpc3BsYXlNZXNzYWdlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIHZhciBlc2NhcGVNYXJrdXAgPSB0aGlzLm9wdGlvbnMuZ2V0KCdlc2NhcGVNYXJrdXAnKTtcblxuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICB2YXIgJG1lc3NhZ2UgPSAkKFxuICAgICAgJzxsaSByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIicgK1xuICAgICAgJyBjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCI+PC9saT4nXG4gICAgKTtcblxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KHBhcmFtcy5tZXNzYWdlKTtcblxuICAgICRtZXNzYWdlLmFwcGVuZChcbiAgICAgIGVzY2FwZU1hcmt1cChcbiAgICAgICAgbWVzc2FnZShwYXJhbXMuYXJncylcbiAgICAgIClcbiAgICApO1xuXG4gICAgJG1lc3NhZ2VbMF0uY2xhc3NOYW1lICs9ICcgc2VsZWN0Mi1yZXN1bHRzX19tZXNzYWdlJztcblxuICAgIHRoaXMuJHJlc3VsdHMuYXBwZW5kKCRtZXNzYWdlKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5oaWRlTWVzc2FnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19tZXNzYWdlJykucmVtb3ZlKCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICB2YXIgJG9wdGlvbnMgPSBbXTtcblxuICAgIGlmIChkYXRhLnJlc3VsdHMgPT0gbnVsbCB8fCBkYXRhLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGhpcy4kcmVzdWx0cy5jaGlsZHJlbigpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgICBtZXNzYWdlOiAnbm9SZXN1bHRzJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGEucmVzdWx0cyA9IHRoaXMuc29ydChkYXRhLnJlc3VsdHMpO1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBpdGVtID0gZGF0YS5yZXN1bHRzW2RdO1xuXG4gICAgICB2YXIgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGl0ZW0pO1xuXG4gICAgICAkb3B0aW9ucy5wdXNoKCRvcHRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuJHJlc3VsdHMuYXBwZW5kKCRvcHRpb25zKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5wb3NpdGlvbiA9IGZ1bmN0aW9uICgkcmVzdWx0cywgJGRyb3Bkb3duKSB7XG4gICAgdmFyICRyZXN1bHRzQ29udGFpbmVyID0gJGRyb3Bkb3duLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHMnKTtcbiAgICAkcmVzdWx0c0NvbnRhaW5lci5hcHBlbmQoJHJlc3VsdHMpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzb3J0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdzb3J0ZXInKTtcblxuICAgIHJldHVybiBzb3J0ZXIoZGF0YSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuaGlnaGxpZ2h0Rmlyc3RJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJHJlc3VsdHNcbiAgICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgIHZhciAkc2VsZWN0ZWQgPSAkb3B0aW9ucy5maWx0ZXIoJ1thcmlhLXNlbGVjdGVkPXRydWVdJyk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IHNlbGVjdGVkIG9wdGlvbnNcbiAgICBpZiAoJHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBzZWxlY3RlZCBvcHRpb25zLCBoaWdobGlnaHQgdGhlIGZpcnN0XG4gICAgICAkc2VsZWN0ZWQuZmlyc3QoKS50cmlnZ2VyKCdtb3VzZWVudGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBzZWxlY3RlZCBvcHRpb25zLCBoaWdobGlnaHQgdGhlIGZpcnN0IG9wdGlvblxuICAgICAgLy8gaW4gdGhlIGRyb3Bkb3duXG4gICAgICAkb3B0aW9ucy5maXJzdCgpLnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLmVuc3VyZUhpZ2hsaWdodFZpc2libGUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5zZXRDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YS5jdXJyZW50KGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgdmFyIHNlbGVjdGVkSWRzID0gJC5tYXAoc2VsZWN0ZWQsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzLmlkLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0c1xuICAgICAgICAuZmluZCgnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgdmFyIGl0ZW0gPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XG5cbiAgICAgICAgLy8gaWQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGEgc3RyaW5nIHdoZW4gY29tcGFyaW5nXG4gICAgICAgIHZhciBpZCA9ICcnICsgaXRlbS5pZDtcblxuICAgICAgICBpZiAoKGl0ZW0uZWxlbWVudCAhPSBudWxsICYmIGl0ZW0uZWxlbWVudC5zZWxlY3RlZCkgfHxcbiAgICAgICAgICAgIChpdGVtLmVsZW1lbnQgPT0gbnVsbCAmJiAkLmluQXJyYXkoaWQsIHNlbGVjdGVkSWRzKSA+IC0xKSkge1xuICAgICAgICAgICRvcHRpb24uYXR0cignYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJG9wdGlvbi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgdmFyIGxvYWRpbmdNb3JlID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KCdzZWFyY2hpbmcnKTtcblxuICAgIHZhciBsb2FkaW5nID0ge1xuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgdGV4dDogbG9hZGluZ01vcmUocGFyYW1zKVxuICAgIH07XG4gICAgdmFyICRsb2FkaW5nID0gdGhpcy5vcHRpb24obG9hZGluZyk7XG4gICAgJGxvYWRpbmcuY2xhc3NOYW1lICs9ICcgbG9hZGluZy1yZXN1bHRzJztcblxuICAgIHRoaXMuJHJlc3VsdHMucHJlcGVuZCgkbG9hZGluZyk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5maW5kKCcubG9hZGluZy1yZXN1bHRzJykucmVtb3ZlKCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUub3B0aW9uID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBvcHRpb24uY2xhc3NOYW1lID0gJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uJztcblxuICAgIHZhciBhdHRycyA9IHtcbiAgICAgICdyb2xlJzogJ29wdGlvbicsXG4gICAgICAnYXJpYS1zZWxlY3RlZCc6ICdmYWxzZSdcbiAgICB9O1xuXG4gICAgdmFyIG1hdGNoZXMgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fFxuICAgICAgd2luZG93LkVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgaWYgKChkYXRhLmVsZW1lbnQgIT0gbnVsbCAmJiBtYXRjaGVzLmNhbGwoZGF0YS5lbGVtZW50LCAnOmRpc2FibGVkJykpIHx8XG4gICAgICAgIChkYXRhLmVsZW1lbnQgPT0gbnVsbCAmJiBkYXRhLmRpc2FibGVkKSkge1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgICBhdHRyc1snYXJpYS1kaXNhYmxlZCddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmlkID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBhdHRyc1snYXJpYS1zZWxlY3RlZCddO1xuICAgIH1cblxuICAgIGlmIChkYXRhLl9yZXN1bHRJZCAhPSBudWxsKSB7XG4gICAgICBvcHRpb24uaWQgPSBkYXRhLl9yZXN1bHRJZDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50aXRsZSkge1xuICAgICAgb3B0aW9uLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgYXR0cnMucm9sZSA9ICdncm91cCc7XG4gICAgICBhdHRyc1snYXJpYS1sYWJlbCddID0gZGF0YS50ZXh0O1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgfVxuXG4gICAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuICAgICAgdmFyIHZhbCA9IGF0dHJzW2F0dHJdO1xuXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJChvcHRpb24pO1xuXG4gICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdzZWxlY3QyLXJlc3VsdHNfX2dyb3VwJztcblxuICAgICAgdmFyICRsYWJlbCA9ICQobGFiZWwpO1xuICAgICAgdGhpcy50ZW1wbGF0ZShkYXRhLCBsYWJlbCk7XG5cbiAgICAgIHZhciAkY2hpbGRyZW4gPSBbXTtcblxuICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBkYXRhLmNoaWxkcmVuLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGRhdGEuY2hpbGRyZW5bY107XG5cbiAgICAgICAgdmFyICRjaGlsZCA9IHRoaXMub3B0aW9uKGNoaWxkKTtcblxuICAgICAgICAkY2hpbGRyZW4ucHVzaCgkY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGNoaWxkcmVuQ29udGFpbmVyID0gJCgnPHVsPjwvdWw+Jywge1xuICAgICAgICAnY2xhc3MnOiAnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zIHNlbGVjdDItcmVzdWx0c19fb3B0aW9ucy0tbmVzdGVkJ1xuICAgICAgfSk7XG5cbiAgICAgICRjaGlsZHJlbkNvbnRhaW5lci5hcHBlbmQoJGNoaWxkcmVuKTtcblxuICAgICAgJG9wdGlvbi5hcHBlbmQobGFiZWwpO1xuICAgICAgJG9wdGlvbi5hcHBlbmQoJGNoaWxkcmVuQ29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZW1wbGF0ZShkYXRhLCBvcHRpb24pO1xuICAgIH1cblxuICAgIFV0aWxzLlN0b3JlRGF0YShvcHRpb24sICdkYXRhJywgZGF0YSk7XG5cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHRzJztcblxuICAgIHRoaXMuJHJlc3VsdHMuYXR0cignaWQnLCBpZCk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YWxsJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5jbGVhcigpO1xuICAgICAgc2VsZi5hcHBlbmQocGFyYW1zLmRhdGEpO1xuXG4gICAgICBpZiAoY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuICAgICAgICBzZWxmLmhpZ2hsaWdodEZpcnN0SXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFwcGVuZCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuYXBwZW5kKHBhcmFtcy5kYXRhKTtcblxuICAgICAgaWYgKGNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLnNldENsYXNzZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncXVlcnknLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmhpZGVNZXNzYWdlcygpO1xuICAgICAgc2VsZi5zaG93TG9hZGluZyhwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuXG4gICAgICBpZiAoc2VsZi5vcHRpb25zLmdldCgnc2Nyb2xsQWZ0ZXJTZWxlY3QnKSkge1xuICAgICAgICBzZWxmLmhpZ2hsaWdodEZpcnN0SXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG5cbiAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdzY3JvbGxBZnRlclNlbGVjdCcpKSB7XG4gICAgICAgIHNlbGYuaGlnaGxpZ2h0Rmlyc3RJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBvcGVuLCBhcmlhLWV4cGVuZGVkPVwidHJ1ZVwiXG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICBzZWxmLnNldENsYXNzZXMoKTtcbiAgICAgIHNlbGYuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIGNsb3NlZCwgYXJpYS1leHBlbmRlZD1cImZhbHNlXCJcbiAgICAgIHNlbGYuJHJlc3VsdHMuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBzZWxmLiRyZXN1bHRzLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnRvZ2dsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICRoaWdobGlnaHRlZC50cmlnZ2VyKCdtb3VzZXVwJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6c2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRoaWdobGlnaHRlZFswXSwgJ2RhdGEnKTtcblxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5hdHRyKCdhcmlhLXNlbGVjdGVkJykgPT0gJ3RydWUnKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignY2xvc2UnLCB7fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnByZXZpb3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIHZhciAkb3B0aW9ucyA9IHNlbGYuJHJlc3VsdHMuZmluZCgnW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICAgIHZhciBjdXJyZW50SW5kZXggPSAkb3B0aW9ucy5pbmRleCgkaGlnaGxpZ2h0ZWQpO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSBhdCB0aGUgdG9wLCBkb24ndCBtb3ZlIGZ1cnRoZXJcbiAgICAgIC8vIElmIG5vIG9wdGlvbnMsIGN1cnJlbnRJbmRleCB3aWxsIGJlIC0xXG4gICAgICBpZiAoY3VycmVudEluZGV4IDw9IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcblxuICAgICAgLy8gSWYgbm9uZSBhcmUgaGlnaGxpZ2h0ZWQsIGhpZ2hsaWdodCB0aGUgZmlyc3RcbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciAkbmV4dCA9ICRvcHRpb25zLmVxKG5leHRJbmRleCk7XG5cbiAgICAgICRuZXh0LnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciBuZXh0VG9wID0gJG5leHQub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIG5leHRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgpICsgKG5leHRUb3AgLSBjdXJyZW50T2Zmc2V0KTtcblxuICAgICAgaWYgKG5leHRJbmRleCA9PT0gMCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQgPCAwKSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKG5leHRPZmZzZXQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOm5leHQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0cy5maW5kKCdbYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XG5cbiAgICAgIHZhciBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgYXQgdGhlIGxhc3Qgb3B0aW9uLCBzdGF5IHRoZXJlXG4gICAgICBpZiAobmV4dEluZGV4ID49ICRvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciAkbmV4dCA9ICRvcHRpb25zLmVxKG5leHRJbmRleCk7XG5cbiAgICAgICRuZXh0LnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLm9mZnNldCgpLnRvcCArXG4gICAgICAgIHNlbGYuJHJlc3VsdHMub3V0ZXJIZWlnaHQoZmFsc2UpO1xuICAgICAgdmFyIG5leHRCb3R0b20gPSAkbmV4dC5vZmZzZXQoKS50b3AgKyAkbmV4dC5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgICB2YXIgbmV4dE9mZnNldCA9IHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyBuZXh0Qm90dG9tIC0gY3VycmVudE9mZnNldDtcblxuICAgICAgaWYgKG5leHRJbmRleCA9PT0gMCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dEJvdHRvbSA+IGN1cnJlbnRPZmZzZXQpIHtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AobmV4dE9mZnNldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBwYXJhbXMuZWxlbWVudC5hZGRDbGFzcygnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bWVzc2FnZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuZGlzcGxheU1lc3NhZ2UocGFyYW1zKTtcbiAgICB9KTtcblxuICAgIGlmICgkLmZuLm1vdXNld2hlZWwpIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdG9wID0gc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoKTtcblxuICAgICAgICB2YXIgYm90dG9tID0gc2VsZi4kcmVzdWx0cy5nZXQoMCkuc2Nyb2xsSGVpZ2h0IC0gdG9wICsgZS5kZWx0YVk7XG5cbiAgICAgICAgdmFyIGlzQXRUb3AgPSBlLmRlbHRhWSA+IDAgJiYgdG9wIC0gZS5kZWx0YVkgPD0gMDtcbiAgICAgICAgdmFyIGlzQXRCb3R0b20gPSBlLmRlbHRhWSA8IDAgJiYgYm90dG9tIDw9IHNlbGYuJHJlc3VsdHMuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGlzQXRUb3ApIHtcbiAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXRCb3R0b20pIHtcbiAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcChcbiAgICAgICAgICAgIHNlbGYuJHJlc3VsdHMuZ2V0KDApLnNjcm9sbEhlaWdodCAtIHNlbGYuJHJlc3VsdHMuaGVpZ2h0KClcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuJHJlc3VsdHMub24oJ21vdXNldXAnLCAnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWRdJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnZGF0YScpO1xuXG4gICAgICBpZiAoJHRoaXMuYXR0cignYXJpYS1zZWxlY3RlZCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0LFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcignY2xvc2UnLCB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0Jywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2VlbnRlcicsICcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XG5cbiAgICAgIHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZCcpO1xuXG4gICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6Zm9jdXMnLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGVsZW1lbnQ6ICQodGhpcylcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmdldEhpZ2hsaWdodGVkUmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGhpZ2hsaWdodGVkID0gdGhpcy4kcmVzdWx0c1xuICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG5cbiAgICByZXR1cm4gJGhpZ2hsaWdodGVkO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5yZW1vdmUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5lbnN1cmVIaWdobGlnaHRWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSB0aGlzLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRyZXN1bHRzLmZpbmQoJ1thcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XG5cbiAgICB2YXIgY3VycmVudE9mZnNldCA9IHRoaXMuJHJlc3VsdHMub2Zmc2V0KCkudG9wO1xuICAgIHZhciBuZXh0VG9wID0gJGhpZ2hsaWdodGVkLm9mZnNldCgpLnRvcDtcbiAgICB2YXIgbmV4dE9mZnNldCA9IHRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQpO1xuXG4gICAgdmFyIG9mZnNldERlbHRhID0gbmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQ7XG4gICAgbmV4dE9mZnNldCAtPSAkaGlnaGxpZ2h0ZWQub3V0ZXJIZWlnaHQoZmFsc2UpICogMjtcblxuICAgIGlmIChjdXJyZW50SW5kZXggPD0gMikge1xuICAgICAgdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AoMCk7XG4gICAgfSBlbHNlIGlmIChvZmZzZXREZWx0YSA+IHRoaXMuJHJlc3VsdHMub3V0ZXJIZWlnaHQoKSB8fCBvZmZzZXREZWx0YSA8IDApIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKG5leHRPZmZzZXQpO1xuICAgIH1cbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uIChyZXN1bHQsIGNvbnRhaW5lcikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlUmVzdWx0Jyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSB0ZW1wbGF0ZShyZXN1bHQsIGNvbnRhaW5lcik7XG5cbiAgICBpZiAoY29udGVudCA9PSBudWxsKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGVzY2FwZU1hcmt1cChjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChjb250YWluZXIpLmFwcGVuZChjb250ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJlc3VsdHM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2tleXMnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICB2YXIgS0VZUyA9IHtcbiAgICBCQUNLU1BBQ0U6IDgsXG4gICAgVEFCOiA5LFxuICAgIEVOVEVSOiAxMyxcbiAgICBTSElGVDogMTYsXG4gICAgQ1RSTDogMTcsXG4gICAgQUxUOiAxOCxcbiAgICBFU0M6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBQQUdFX1VQOiAzMyxcbiAgICBQQUdFX0RPV046IDM0LFxuICAgIEVORDogMzUsXG4gICAgSE9NRTogMzYsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBERUxFVEU6IDQ2XG4gIH07XG5cbiAgcmV0dXJuIEtFWVM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9iYXNlJyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBCYXNlU2VsZWN0aW9uICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgQmFzZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChCYXNlU2VsZWN0aW9uLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25cIiByb2xlPVwiY29tYm9ib3hcIiAnICtcbiAgICAgICcgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICB0aGlzLl90YWJpbmRleCA9IDA7XG5cbiAgICBpZiAoVXRpbHMuR2V0RGF0YSh0aGlzLiRlbGVtZW50WzBdLCAnb2xkLXRhYmluZGV4JykgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGFiaW5kZXggPSBVdGlscy5HZXREYXRhKHRoaXMuJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl90YWJpbmRleCA9IHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICAkc2VsZWN0aW9uLmF0dHIoJ3RpdGxlJywgdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScpKTtcbiAgICAkc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgdGhpcy5fdGFiaW5kZXgpO1xuICAgICRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uID0gJHNlbGVjdGlvbjtcblxuICAgIHJldHVybiAkc2VsZWN0aW9uO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHJlc3VsdHNJZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2ZvY3VzJywgZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX2hhbmRsZUJsdXIoZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcigna2V5cHJlc3MnLCBldnQpO1xuXG4gICAgICBpZiAoZXZ0LndoaWNoID09PSBLRVlTLlNQQUNFKSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHBhcmFtcy5kYXRhLl9yZXN1bHRJZCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdGlvbjp1cGRhdGUnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLnVwZGF0ZShwYXJhbXMuZGF0YSk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBvcGVuLCBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1vd25zJywgcmVzdWx0c0lkKTtcblxuICAgICAgc2VsZi5fYXR0YWNoQ2xvc2VIYW5kbGVyKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgY2xvc2VkLCBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5yZW1vdmVBdHRyKCdhcmlhLW93bnMnKTtcblxuICAgICAgc2VsZi4kc2VsZWN0aW9uLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cbiAgICAgIHNlbGYuX2RldGFjaENsb3NlSGFuZGxlcihjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdlbmFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cigndGFiaW5kZXgnLCBzZWxmLl90YWJpbmRleCk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuX2hhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBkZWxheWVkIGFzIHRoZSBhY3RpdmUgZWxlbWVudCBpcyB0aGUgYm9keSB3aGVuIHRoZSB0YWJcbiAgICAvLyBrZXkgaXMgcHJlc3NlZCwgcG9zc2libHkgYWxvbmcgd2l0aCBvdGhlcnMuXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRG9uJ3QgdHJpZ2dlciBgYmx1cmAgaWYgdGhlIGZvY3VzIGlzIHN0aWxsIGluIHRoZSBzZWxlY3Rpb25cbiAgICAgIGlmIChcbiAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gc2VsZi4kc2VsZWN0aW9uWzBdKSB8fFxuICAgICAgICAoJC5jb250YWlucyhzZWxmLiRzZWxlY3Rpb25bMF0sIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi50cmlnZ2VyKCdibHVyJywgZXZ0KTtcbiAgICB9LCAxKTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5fYXR0YWNoQ2xvc2VIYW5kbGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXG4gICAgJChkb2N1bWVudC5ib2R5KS5vbignbW91c2Vkb3duLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cbiAgICAgIHZhciAkc2VsZWN0ID0gJHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0MicpO1xuXG4gICAgICB2YXIgJGFsbCA9ICQoJy5zZWxlY3QyLnNlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG5cbiAgICAgICRhbGwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzID09ICRzZWxlY3RbMF0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJGVsZW1lbnQgPSBVdGlscy5HZXREYXRhKHRoaXMsICdlbGVtZW50Jyk7XG5cbiAgICAgICAgJGVsZW1lbnQuc2VsZWN0MignY2xvc2UnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLl9kZXRhY2hDbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgJChkb2N1bWVudC5ib2R5KS5vZmYoJ21vdXNlZG93bi5zZWxlY3QyLicgKyBjb250YWluZXIuaWQpO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCRzZWxlY3Rpb24sICRjb250YWluZXIpIHtcbiAgICB2YXIgJHNlbGVjdGlvbkNvbnRhaW5lciA9ICRjb250YWluZXIuZmluZCgnLnNlbGVjdGlvbicpO1xuICAgICRzZWxlY3Rpb25Db250YWluZXIuYXBwZW5kKCRzZWxlY3Rpb24pO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZGV0YWNoQ2xvc2VIYW5kbGVyKHRoaXMuY29udGFpbmVyKTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGB1cGRhdGVgIG1ldGhvZCBtdXN0IGJlIGRlZmluZWQgaW4gY2hpbGQgY2xhc3Nlcy4nKTtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJlbmFibGVkXCIgKG5vdCBcImRpc2FibGVkXCIpIHN0YXRlIG9mIHRoaXNcbiAgICogb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgaW5zdGFuY2UgaXMgbm90IGRpc2FibGVkLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGluc3RhbmNlIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuaXNFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0Rpc2FibGVkKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gYWJzdHJhY3QgdGhlIFwiZGlzYWJsZWRcIiBzdGF0ZSBvZiB0aGlzIG9iamVjdC5cbiAgICpcbiAgICogQHJldHVybiB7dHJ1ZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyB0cnVlLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyBmYWxzZS5cbiAgICovXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXQoJ2Rpc2FibGVkJyk7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VTZWxlY3Rpb247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9zaW5nbGUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL2Jhc2UnLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBCYXNlU2VsZWN0aW9uLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBTaW5nbGVTZWxlY3Rpb24gKCkge1xuICAgIFNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChTaW5nbGVTZWxlY3Rpb24sIEJhc2VTZWxlY3Rpb24pO1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkc2VsZWN0aW9uID0gU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5yZW5kZXIuY2FsbCh0aGlzKTtcblxuICAgICRzZWxlY3Rpb24uYWRkQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUnKTtcblxuICAgICRzZWxlY3Rpb24uaHRtbChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiPjwvc3Bhbj4nICtcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19hcnJvd1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj4nICtcbiAgICAgICAgJzxiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2I+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRzZWxlY3Rpb247XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIFNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uYmluZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1jb250YWluZXInO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKVxuICAgICAgLmF0dHIoJ2lkJywgaWQpXG4gICAgICAuYXR0cigncm9sZScsICd0ZXh0Ym94JylcbiAgICAgIC5hdHRyKCdhcmlhLXJlYWRvbmx5JywgJ3RydWUnKTtcbiAgICB0aGlzLiRzZWxlY3Rpb24uYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgaWQpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBPbmx5IHJlc3BvbmQgdG8gbGVmdCBjbGlja3NcbiAgICAgIGlmIChldnQud2hpY2ggIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRyaWdnZXIoJ3RvZ2dsZScsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBVc2VyIGZvY3VzZXMgb24gdGhlIGNvbnRhaW5lclxuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdibHVyJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gVXNlciBleGl0cyB0aGUgY29udGFpbmVyXG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKCFjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi4kc2VsZWN0aW9uLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcbiAgICAkcmVuZGVyZWQuZW1wdHkoKTtcbiAgICAkcmVuZGVyZWQucmVtb3ZlQXR0cigndGl0bGUnKTsgLy8gY2xlYXIgdG9vbHRpcCBvbiBlbXB0eVxuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuZGlzcGxheSA9IGZ1bmN0aW9uIChkYXRhLCBjb250YWluZXIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0ZW1wbGF0ZVNlbGVjdGlvbicpO1xuICAgIHZhciBlc2NhcGVNYXJrdXAgPSB0aGlzLm9wdGlvbnMuZ2V0KCdlc2NhcGVNYXJrdXAnKTtcblxuICAgIHJldHVybiBlc2NhcGVNYXJrdXAodGVtcGxhdGUoZGF0YSwgY29udGFpbmVyKSk7XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5zZWxlY3Rpb25Db250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICQoJzxzcGFuPjwvc3Bhbj4nKTtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNlbGVjdGlvbiA9IGRhdGFbMF07XG5cbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcbiAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy5kaXNwbGF5KHNlbGVjdGlvbiwgJHJlbmRlcmVkKTtcblxuICAgICRyZW5kZXJlZC5lbXB0eSgpLmFwcGVuZChmb3JtYXR0ZWQpO1xuXG4gICAgdmFyIHRpdGxlID0gc2VsZWN0aW9uLnRpdGxlIHx8IHNlbGVjdGlvbi50ZXh0O1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICAkcmVuZGVyZWQuYXR0cigndGl0bGUnLCB0aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2luZ2xlU2VsZWN0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vbXVsdGlwbGUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL2Jhc2UnLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgQmFzZVNlbGVjdGlvbiwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gTXVsdGlwbGVTZWxlY3Rpb24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoTXVsdGlwbGVTZWxlY3Rpb24sIEJhc2VTZWxlY3Rpb24pO1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSBNdWx0aXBsZVNlbGVjdGlvbi5fX3N1cGVyX18ucmVuZGVyLmNhbGwodGhpcyk7XG5cbiAgICAkc2VsZWN0aW9uLmFkZENsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUnKTtcblxuICAgICRzZWxlY3Rpb24uaHRtbChcbiAgICAgICc8dWwgY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIj48L3VsPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRzZWxlY3Rpb247XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ3RvZ2dsZScsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdjbGljaycsXG4gICAgICAnLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgaXQgaXMgZGlzYWJsZWRcbiAgICAgICAgaWYgKHNlbGYuaXNEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICRyZW1vdmUgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgJHNlbGVjdGlvbiA9ICRyZW1vdmUucGFyZW50KCk7XG5cbiAgICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRzZWxlY3Rpb25bMF0sICdkYXRhJyk7XG5cbiAgICAgICAgc2VsZi50cmlnZ2VyKCd1bnNlbGVjdCcsIHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcbiAgICAkcmVuZGVyZWQuZW1wdHkoKTtcbiAgICAkcmVuZGVyZWQucmVtb3ZlQXR0cigndGl0bGUnKTtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuZGlzcGxheSA9IGZ1bmN0aW9uIChkYXRhLCBjb250YWluZXIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0ZW1wbGF0ZVNlbGVjdGlvbicpO1xuICAgIHZhciBlc2NhcGVNYXJrdXAgPSB0aGlzLm9wdGlvbnMuZ2V0KCdlc2NhcGVNYXJrdXAnKTtcblxuICAgIHJldHVybiBlc2NhcGVNYXJrdXAodGVtcGxhdGUoZGF0YSwgY29udGFpbmVyKSk7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoXG4gICAgICAnPGxpIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZVwiPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmVcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+JyArXG4gICAgICAgICAgJyZ0aW1lczsnICtcbiAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICc8L2xpPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRzZWxlY3Rpb25zID0gW107XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSBkYXRhW2RdO1xuXG4gICAgICB2YXIgJHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uQ29udGFpbmVyKCk7XG4gICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy5kaXNwbGF5KHNlbGVjdGlvbiwgJHNlbGVjdGlvbik7XG5cbiAgICAgICRzZWxlY3Rpb24uYXBwZW5kKGZvcm1hdHRlZCk7XG5cbiAgICAgIHZhciB0aXRsZSA9IHNlbGVjdGlvbi50aXRsZSB8fCBzZWxlY3Rpb24udGV4dDtcblxuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICRzZWxlY3Rpb24uYXR0cigndGl0bGUnLCB0aXRsZSk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLlN0b3JlRGF0YSgkc2VsZWN0aW9uWzBdLCAnZGF0YScsIHNlbGVjdGlvbik7XG5cbiAgICAgICRzZWxlY3Rpb25zLnB1c2goJHNlbGVjdGlvbik7XG4gICAgfVxuXG4gICAgdmFyICRyZW5kZXJlZCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJyk7XG5cbiAgICBVdGlscy5hcHBlbmRNYW55KCRyZW5kZXJlZCwgJHNlbGVjdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBNdWx0aXBsZVNlbGVjdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL3BsYWNlaG9sZGVyJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBQbGFjZWhvbGRlciAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLm5vcm1hbGl6ZVBsYWNlaG9sZGVyKG9wdGlvbnMuZ2V0KCdwbGFjZWhvbGRlcicpKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFBsYWNlaG9sZGVyLnByb3RvdHlwZS5ub3JtYWxpemVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChfLCBwbGFjZWhvbGRlcikge1xuICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH07XG5cbiAgUGxhY2Vob2xkZXIucHJvdG90eXBlLmNyZWF0ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGxhY2Vob2xkZXIpIHtcbiAgICB2YXIgJHBsYWNlaG9sZGVyID0gdGhpcy5zZWxlY3Rpb25Db250YWluZXIoKTtcblxuICAgICRwbGFjZWhvbGRlci5odG1sKHRoaXMuZGlzcGxheShwbGFjZWhvbGRlcikpO1xuICAgICRwbGFjZWhvbGRlci5hZGRDbGFzcygnc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uX19jaG9pY2UnKTtcblxuICAgIHJldHVybiAkcGxhY2Vob2xkZXI7XG4gIH07XG5cbiAgUGxhY2Vob2xkZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICB2YXIgc2luZ2xlUGxhY2Vob2xkZXIgPSAoXG4gICAgICBkYXRhLmxlbmd0aCA9PSAxICYmIGRhdGFbMF0uaWQgIT0gdGhpcy5wbGFjZWhvbGRlci5pZFxuICAgICk7XG4gICAgdmFyIG11bHRpcGxlU2VsZWN0aW9ucyA9IGRhdGEubGVuZ3RoID4gMTtcblxuICAgIGlmIChtdWx0aXBsZVNlbGVjdGlvbnMgfHwgc2luZ2xlUGxhY2Vob2xkZXIpIHtcbiAgICAgIHJldHVybiBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB2YXIgJHBsYWNlaG9sZGVyID0gdGhpcy5jcmVhdGVQbGFjZWhvbGRlcih0aGlzLnBsYWNlaG9sZGVyKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykuYXBwZW5kKCRwbGFjZWhvbGRlcik7XG4gIH07XG5cbiAgcmV0dXJuIFBsYWNlaG9sZGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vYWxsb3dDbGVhcicsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL2tleXMnLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgS0VZUywgVXRpbHMpIHtcbiAgZnVuY3Rpb24gQWxsb3dDbGVhciAoKSB7IH1cblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnU2VsZWN0MjogVGhlIGBhbGxvd0NsZWFyYCBvcHRpb24gc2hvdWxkIGJlIHVzZWQgaW4gY29tYmluYXRpb24gJyArXG4gICAgICAgICAgJ3dpdGggdGhlIGBwbGFjZWhvbGRlcmAgb3B0aW9uLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ21vdXNlZG93bicsICcuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgc2VsZi5faGFuZGxlQ2xlYXIoZXZ0KTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9oYW5kbGVLZXlib2FyZENsZWFyKGV2dCwgY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS5faGFuZGxlQ2xlYXIgPSBmdW5jdGlvbiAoXywgZXZ0KSB7XG4gICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiBpdCBpcyBkaXNhYmxlZFxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkY2xlYXIgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhcicpO1xuXG4gICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiBub3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgaWYgKCRjbGVhci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJGNsZWFyWzBdLCAnZGF0YScpO1xuXG4gICAgdmFyIHByZXZpb3VzVmFsID0gdGhpcy4kZWxlbWVudC52YWwoKTtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh0aGlzLnBsYWNlaG9sZGVyLmlkKTtcblxuICAgIHZhciB1bnNlbGVjdERhdGEgPSB7XG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbiAgICB0aGlzLnRyaWdnZXIoJ2NsZWFyJywgdW5zZWxlY3REYXRhKTtcbiAgICBpZiAodW5zZWxlY3REYXRhLnByZXZlbnRlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC52YWwocHJldmlvdXNWYWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdW5zZWxlY3REYXRhID0ge1xuICAgICAgICBkYXRhOiBkYXRhW2RdXG4gICAgICB9O1xuXG4gICAgICAvLyBUcmlnZ2VyIHRoZSBgdW5zZWxlY3RgIGV2ZW50LCBzbyBwZW9wbGUgY2FuIHByZXZlbnQgaXQgZnJvbSBiZWluZ1xuICAgICAgLy8gY2xlYXJlZC5cbiAgICAgIHRoaXMudHJpZ2dlcigndW5zZWxlY3QnLCB1bnNlbGVjdERhdGEpO1xuXG4gICAgICAvLyBJZiB0aGUgZXZlbnQgd2FzIHByZXZlbnRlZCwgZG9uJ3QgY2xlYXIgaXQgb3V0LlxuICAgICAgaWYgKHVuc2VsZWN0RGF0YS5wcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC52YWwocHJldmlvdXNWYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgdGhpcy50cmlnZ2VyKCd0b2dnbGUnLCB7fSk7XG4gIH07XG5cbiAgQWxsb3dDbGVhci5wcm90b3R5cGUuX2hhbmRsZUtleWJvYXJkQ2xlYXIgPSBmdW5jdGlvbiAoXywgZXZ0LCBjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2dC53aGljaCA9PSBLRVlTLkRFTEVURSB8fCBldnQud2hpY2ggPT0gS0VZUy5CQUNLU1BBQ0UpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUNsZWFyKGV2dCk7XG4gICAgfVxuICB9O1xuXG4gIEFsbG93Q2xlYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgIGlmICh0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlcicpLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmVtb3ZlQWxsID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KCdyZW1vdmVBbGxJdGVtcycpO1xuXG4gICAgdmFyICRyZW1vdmUgPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyXCIgdGl0bGU9XCInICsgcmVtb3ZlQWxsKCkgKydcIj4nICtcbiAgICAgICAgJyZ0aW1lczsnICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG4gICAgVXRpbHMuU3RvcmVEYXRhKCRyZW1vdmVbMF0sICdkYXRhJywgZGF0YSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpLnByZXBlbmQoJHJlbW92ZSk7XG4gIH07XG5cbiAgcmV0dXJuIEFsbG93Q2xlYXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9zZWFyY2gnLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscycsXG4gICcuLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzLCBLRVlTKSB7XG4gIGZ1bmN0aW9uIFNlYXJjaCAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFNlYXJjaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHZhciAkc2VhcmNoID0gJChcbiAgICAgICc8bGkgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0taW5saW5lXCI+JyArXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCItMVwiJyArXG4gICAgICAgICcgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIicgK1xuICAgICAgICAnIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJzZWFyY2hib3hcIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiAvPicgK1xuICAgICAgJzwvbGk+J1xuICAgICk7XG5cbiAgICB0aGlzLiRzZWFyY2hDb250YWluZXIgPSAkc2VhcmNoO1xuICAgIHRoaXMuJHNlYXJjaCA9ICRzZWFyY2guZmluZCgnaW5wdXQnKTtcblxuICAgIHZhciAkcmVuZGVyZWQgPSBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuX3RyYW5zZmVyVGFiSW5kZXgoKTtcblxuICAgIHJldHVybiAkcmVuZGVyZWQ7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHJlc3VsdHNJZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ2FyaWEtY29udHJvbHMnLCByZXN1bHRzSWQpO1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnZhbCgnJyk7XG4gICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1jb250cm9scycpO1xuICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2VuYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgc2VsZi5fdHJhbnNmZXJUYWJJbmRleCgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBpZiAocGFyYW1zLmRhdGEuX3Jlc3VsdElkKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBwYXJhbXMuZGF0YS5fcmVzdWx0SWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1c2luJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdmb2N1cycsIGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3Vzb3V0JywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5faGFuZGxlQmx1cihldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdrZXlkb3duJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBzZWxmLnRyaWdnZXIoJ2tleXByZXNzJywgZXZ0KTtcblxuICAgICAgc2VsZi5fa2V5VXBQcmV2ZW50ZWQgPSBldnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG5cbiAgICAgIHZhciBrZXkgPSBldnQud2hpY2g7XG5cbiAgICAgIGlmIChrZXkgPT09IEtFWVMuQkFDS1NQQUNFICYmIHNlbGYuJHNlYXJjaC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgdmFyICRwcmV2aW91c0Nob2ljZSA9IHNlbGYuJHNlYXJjaENvbnRhaW5lclxuICAgICAgICAgIC5wcmV2KCcuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZScpO1xuXG4gICAgICAgIGlmICgkcHJldmlvdXNDaG9pY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBpdGVtID0gVXRpbHMuR2V0RGF0YSgkcHJldmlvdXNDaG9pY2VbMF0sICdkYXRhJyk7XG5cbiAgICAgICAgICBzZWxmLnNlYXJjaFJlbW92ZUNob2ljZShpdGVtKTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2NsaWNrJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKHNlbGYuJHNlYXJjaC52YWwoKSkge1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUcnkgdG8gZGV0ZWN0IHRoZSBJRSB2ZXJzaW9uIHNob3VsZCB0aGUgYGRvY3VtZW50TW9kZWAgcHJvcGVydHkgdGhhdFxuICAgIC8vIGlzIHN0b3JlZCBvbiB0aGUgZG9jdW1lbnQuIFRoaXMgaXMgb25seSBpbXBsZW1lbnRlZCBpbiBJRSBhbmQgaXNcbiAgICAvLyBzbGlnaHRseSBjbGVhbmVyIHRoYW4gZG9pbmcgYSB1c2VyIGFnZW50IGNoZWNrLlxuICAgIC8vIFRoaXMgcHJvcGVydHkgaXMgbm90IGF2YWlsYWJsZSBpbiBFZGdlLCBidXQgRWRnZSBhbHNvIGRvZXNuJ3QgaGF2ZVxuICAgIC8vIHRoaXMgYnVnLlxuICAgIHZhciBtc2llID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICAgIHZhciBkaXNhYmxlSW5wdXRFdmVudHMgPSBtc2llICYmIG1zaWUgPD0gMTE7XG5cbiAgICAvLyBXb3JrYXJvdW5kIGZvciBicm93c2VycyB3aGljaCBkbyBub3Qgc3VwcG9ydCB0aGUgYGlucHV0YCBldmVudFxuICAgIC8vIFRoaXMgd2lsbCBwcmV2ZW50IGRvdWJsZS10cmlnZ2VyaW5nIG9mIGV2ZW50cyBmb3IgYnJvd3NlcnMgd2hpY2ggc3VwcG9ydFxuICAgIC8vIGJvdGggdGhlIGBrZXl1cGAgYW5kIGBpbnB1dGAgZXZlbnRzLlxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdpbnB1dC5zZWFyY2hjaGVjaycsXG4gICAgICAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyBJRSB3aWxsIHRyaWdnZXIgdGhlIGBpbnB1dGAgZXZlbnQgd2hlbiBhIHBsYWNlaG9sZGVyIGlzIHVzZWQgb24gYVxuICAgICAgICAvLyBzZWFyY2ggYm94LiBUbyBnZXQgYXJvdW5kIHRoaXMgaXNzdWUsIHdlIGFyZSBmb3JjZWQgdG8gaWdub3JlIGFsbFxuICAgICAgICAvLyBgaW5wdXRgIGV2ZW50cyBpbiBJRSBhbmQga2VlcCB1c2luZyBga2V5dXBgLlxuICAgICAgICBpZiAoZGlzYWJsZUlucHV0RXZlbnRzKSB7XG4gICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLm9mZignaW5wdXQuc2VhcmNoIGlucHV0LnNlYXJjaGNoZWNrJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5iaW5kIHRoZSBkdXBsaWNhdGVkIGBrZXl1cGAgZXZlbnRcbiAgICAgICAgc2VsZi4kc2VsZWN0aW9uLm9mZigna2V5dXAuc2VhcmNoJyk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdrZXl1cC5zZWFyY2ggaW5wdXQuc2VhcmNoJyxcbiAgICAgICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElFIHdpbGwgdHJpZ2dlciB0aGUgYGlucHV0YCBldmVudCB3aGVuIGEgcGxhY2Vob2xkZXIgaXMgdXNlZCBvbiBhXG4gICAgICAgIC8vIHNlYXJjaCBib3guIFRvIGdldCBhcm91bmQgdGhpcyBpc3N1ZSwgd2UgYXJlIGZvcmNlZCB0byBpZ25vcmUgYWxsXG4gICAgICAgIC8vIGBpbnB1dGAgZXZlbnRzIGluIElFIGFuZCBrZWVwIHVzaW5nIGBrZXl1cGAuXG4gICAgICAgIGlmIChkaXNhYmxlSW5wdXRFdmVudHMgJiYgZXZ0LnR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24ub2ZmKCdpbnB1dC5zZWFyY2ggaW5wdXQuc2VhcmNoY2hlY2snKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5ID0gZXZ0LndoaWNoO1xuXG4gICAgICAgIC8vIFdlIGNhbiBmcmVlbHkgaWdub3JlIGV2ZW50cyBmcm9tIG1vZGlmaWVyIGtleXNcbiAgICAgICAgaWYgKGtleSA9PSBLRVlTLlNISUZUIHx8IGtleSA9PSBLRVlTLkNUUkwgfHwga2V5ID09IEtFWVMuQUxUKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiYmluZyB3aWxsIGJlIGhhbmRsZWQgZHVyaW5nIHRoZSBga2V5ZG93bmAgcGhhc2VcbiAgICAgICAgaWYgKGtleSA9PSBLRVlTLlRBQikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaGFuZGxlU2VhcmNoKGV2dCk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCB0cmFuc2ZlciB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gdGhlIHJlbmRlcmVkXG4gICAqIHNlbGVjdGlvbiB0byB0aGUgc2VhcmNoIGJveC4gVGhpcyBhbGxvd3MgZm9yIHRoZSBzZWFyY2ggYm94IHRvIGJlIHVzZWQgYXNcbiAgICogdGhlIHByaW1hcnkgZm9jdXMgaW5zdGVhZCBvZiB0aGUgc2VsZWN0aW9uIGNvbnRhaW5lci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFNlYXJjaC5wcm90b3R5cGUuX3RyYW5zZmVyVGFiSW5kZXggPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdGhpcy4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgdGhpcy4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JykpO1xuICAgIHRoaXMuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuY3JlYXRlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwbGFjZWhvbGRlcikge1xuICAgIHRoaXMuJHNlYXJjaC5hdHRyKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyLnRleHQpO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIHZhciBzZWFyY2hIYWRGb2N1cyA9IHRoaXMuJHNlYXJjaFswXSA9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgdGhpcy4kc2VhcmNoLmF0dHIoJ3BsYWNlaG9sZGVyJywgJycpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpXG4gICAgICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLiRzZWFyY2hDb250YWluZXIpO1xuXG4gICAgdGhpcy5yZXNpemVTZWFyY2goKTtcbiAgICBpZiAoc2VhcmNoSGFkRm9jdXMpIHtcbiAgICAgIHRoaXMuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgIH1cbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmhhbmRsZVNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc2l6ZVNlYXJjaCgpO1xuXG4gICAgaWYgKCF0aGlzLl9rZXlVcFByZXZlbnRlZCkge1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy4kc2VhcmNoLnZhbCgpO1xuXG4gICAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5Jywge1xuICAgICAgICB0ZXJtOiBpbnB1dFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fa2V5VXBQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnNlYXJjaFJlbW92ZUNob2ljZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGl0ZW0pIHtcbiAgICB0aGlzLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgZGF0YTogaXRlbVxuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VhcmNoLnZhbChpdGVtLnRleHQpO1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoKCk7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5yZXNpemVTZWFyY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kc2VhcmNoLmNzcygnd2lkdGgnLCAnMjVweCcpO1xuXG4gICAgdmFyIHdpZHRoID0gJyc7XG5cbiAgICBpZiAodGhpcy4kc2VhcmNoLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09ICcnKSB7XG4gICAgICB3aWR0aCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykud2lkdGgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1pbmltdW1XaWR0aCA9IHRoaXMuJHNlYXJjaC52YWwoKS5sZW5ndGggKyAxO1xuXG4gICAgICB3aWR0aCA9IChtaW5pbXVtV2lkdGggKiAwLjc1KSArICdlbSc7XG4gICAgfVxuXG4gICAgdGhpcy4kc2VhcmNoLmNzcygnd2lkdGgnLCB3aWR0aCk7XG4gIH07XG5cbiAgcmV0dXJuIFNlYXJjaDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL2V2ZW50UmVsYXknLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIEV2ZW50UmVsYXkgKCkgeyB9XG5cbiAgRXZlbnRSZWxheS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcmVsYXlFdmVudHMgPSBbXG4gICAgICAnb3BlbicsICdvcGVuaW5nJyxcbiAgICAgICdjbG9zZScsICdjbG9zaW5nJyxcbiAgICAgICdzZWxlY3QnLCAnc2VsZWN0aW5nJyxcbiAgICAgICd1bnNlbGVjdCcsICd1bnNlbGVjdGluZycsXG4gICAgICAnY2xlYXInLCAnY2xlYXJpbmcnXG4gICAgXTtcblxuICAgIHZhciBwcmV2ZW50YWJsZUV2ZW50cyA9IFtcbiAgICAgICdvcGVuaW5nJywgJ2Nsb3NpbmcnLCAnc2VsZWN0aW5nJywgJ3Vuc2VsZWN0aW5nJywgJ2NsZWFyaW5nJ1xuICAgIF07XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgLy8gSWdub3JlIGV2ZW50cyB0aGF0IHNob3VsZCBub3QgYmUgcmVsYXllZFxuICAgICAgaWYgKCQuaW5BcnJheShuYW1lLCByZWxheUV2ZW50cykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHBhcmFtZXRlcnMgc2hvdWxkIGFsd2F5cyBiZSBhbiBvYmplY3RcbiAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgICAgLy8gR2VuZXJhdGUgdGhlIGpRdWVyeSBldmVudCBmb3IgdGhlIFNlbGVjdDIgZXZlbnRcbiAgICAgIHZhciBldnQgPSAkLkV2ZW50KCdzZWxlY3QyOicgKyBuYW1lLCB7XG4gICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICB9KTtcblxuICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKGV2dCk7XG5cbiAgICAgIC8vIE9ubHkgaGFuZGxlIHByZXZlbnRhYmxlIGV2ZW50cyBpZiBpdCB3YXMgb25lXG4gICAgICBpZiAoJC5pbkFycmF5KG5hbWUsIHByZXZlbnRhYmxlRXZlbnRzKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwYXJhbXMucHJldmVudGVkID0gZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBFdmVudFJlbGF5O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi90cmFuc2xhdGlvbicsW1xuICAnanF1ZXJ5JyxcbiAgJ3JlcXVpcmUnXG5dLCBmdW5jdGlvbiAoJCwgcmVxdWlyZSkge1xuICBmdW5jdGlvbiBUcmFuc2xhdGlvbiAoZGljdCkge1xuICAgIHRoaXMuZGljdCA9IGRpY3QgfHwge307XG4gIH1cblxuICBUcmFuc2xhdGlvbi5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRpY3Q7XG4gIH07XG5cbiAgVHJhbnNsYXRpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5kaWN0W2tleV07XG4gIH07XG5cbiAgVHJhbnNsYXRpb24ucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uICh0cmFuc2xhdGlvbikge1xuICAgIHRoaXMuZGljdCA9ICQuZXh0ZW5kKHt9LCB0cmFuc2xhdGlvbi5hbGwoKSwgdGhpcy5kaWN0KTtcbiAgfTtcblxuICAvLyBTdGF0aWMgZnVuY3Rpb25zXG5cbiAgVHJhbnNsYXRpb24uX2NhY2hlID0ge307XG5cbiAgVHJhbnNsYXRpb24ubG9hZFBhdGggPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIGlmICghKHBhdGggaW4gVHJhbnNsYXRpb24uX2NhY2hlKSkge1xuICAgICAgdmFyIHRyYW5zbGF0aW9ucyA9IHJlcXVpcmUocGF0aCk7XG5cbiAgICAgIFRyYW5zbGF0aW9uLl9jYWNoZVtwYXRoXSA9IHRyYW5zbGF0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uKFRyYW5zbGF0aW9uLl9jYWNoZVtwYXRoXSk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zbGF0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kaWFjcml0aWNzJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRpYWNyaXRpY3MgPSB7XG4gICAgJ1xcdTI0QjYnOiAnQScsXG4gICAgJ1xcdUZGMjEnOiAnQScsXG4gICAgJ1xcdTAwQzAnOiAnQScsXG4gICAgJ1xcdTAwQzEnOiAnQScsXG4gICAgJ1xcdTAwQzInOiAnQScsXG4gICAgJ1xcdTFFQTYnOiAnQScsXG4gICAgJ1xcdTFFQTQnOiAnQScsXG4gICAgJ1xcdTFFQUEnOiAnQScsXG4gICAgJ1xcdTFFQTgnOiAnQScsXG4gICAgJ1xcdTAwQzMnOiAnQScsXG4gICAgJ1xcdTAxMDAnOiAnQScsXG4gICAgJ1xcdTAxMDInOiAnQScsXG4gICAgJ1xcdTFFQjAnOiAnQScsXG4gICAgJ1xcdTFFQUUnOiAnQScsXG4gICAgJ1xcdTFFQjQnOiAnQScsXG4gICAgJ1xcdTFFQjInOiAnQScsXG4gICAgJ1xcdTAyMjYnOiAnQScsXG4gICAgJ1xcdTAxRTAnOiAnQScsXG4gICAgJ1xcdTAwQzQnOiAnQScsXG4gICAgJ1xcdTAxREUnOiAnQScsXG4gICAgJ1xcdTFFQTInOiAnQScsXG4gICAgJ1xcdTAwQzUnOiAnQScsXG4gICAgJ1xcdTAxRkEnOiAnQScsXG4gICAgJ1xcdTAxQ0QnOiAnQScsXG4gICAgJ1xcdTAyMDAnOiAnQScsXG4gICAgJ1xcdTAyMDInOiAnQScsXG4gICAgJ1xcdTFFQTAnOiAnQScsXG4gICAgJ1xcdTFFQUMnOiAnQScsXG4gICAgJ1xcdTFFQjYnOiAnQScsXG4gICAgJ1xcdTFFMDAnOiAnQScsXG4gICAgJ1xcdTAxMDQnOiAnQScsXG4gICAgJ1xcdTAyM0EnOiAnQScsXG4gICAgJ1xcdTJDNkYnOiAnQScsXG4gICAgJ1xcdUE3MzInOiAnQUEnLFxuICAgICdcXHUwMEM2JzogJ0FFJyxcbiAgICAnXFx1MDFGQyc6ICdBRScsXG4gICAgJ1xcdTAxRTInOiAnQUUnLFxuICAgICdcXHVBNzM0JzogJ0FPJyxcbiAgICAnXFx1QTczNic6ICdBVScsXG4gICAgJ1xcdUE3MzgnOiAnQVYnLFxuICAgICdcXHVBNzNBJzogJ0FWJyxcbiAgICAnXFx1QTczQyc6ICdBWScsXG4gICAgJ1xcdTI0QjcnOiAnQicsXG4gICAgJ1xcdUZGMjInOiAnQicsXG4gICAgJ1xcdTFFMDInOiAnQicsXG4gICAgJ1xcdTFFMDQnOiAnQicsXG4gICAgJ1xcdTFFMDYnOiAnQicsXG4gICAgJ1xcdTAyNDMnOiAnQicsXG4gICAgJ1xcdTAxODInOiAnQicsXG4gICAgJ1xcdTAxODEnOiAnQicsXG4gICAgJ1xcdTI0QjgnOiAnQycsXG4gICAgJ1xcdUZGMjMnOiAnQycsXG4gICAgJ1xcdTAxMDYnOiAnQycsXG4gICAgJ1xcdTAxMDgnOiAnQycsXG4gICAgJ1xcdTAxMEEnOiAnQycsXG4gICAgJ1xcdTAxMEMnOiAnQycsXG4gICAgJ1xcdTAwQzcnOiAnQycsXG4gICAgJ1xcdTFFMDgnOiAnQycsXG4gICAgJ1xcdTAxODcnOiAnQycsXG4gICAgJ1xcdTAyM0InOiAnQycsXG4gICAgJ1xcdUE3M0UnOiAnQycsXG4gICAgJ1xcdTI0QjknOiAnRCcsXG4gICAgJ1xcdUZGMjQnOiAnRCcsXG4gICAgJ1xcdTFFMEEnOiAnRCcsXG4gICAgJ1xcdTAxMEUnOiAnRCcsXG4gICAgJ1xcdTFFMEMnOiAnRCcsXG4gICAgJ1xcdTFFMTAnOiAnRCcsXG4gICAgJ1xcdTFFMTInOiAnRCcsXG4gICAgJ1xcdTFFMEUnOiAnRCcsXG4gICAgJ1xcdTAxMTAnOiAnRCcsXG4gICAgJ1xcdTAxOEInOiAnRCcsXG4gICAgJ1xcdTAxOEEnOiAnRCcsXG4gICAgJ1xcdTAxODknOiAnRCcsXG4gICAgJ1xcdUE3NzknOiAnRCcsXG4gICAgJ1xcdTAxRjEnOiAnRFonLFxuICAgICdcXHUwMUM0JzogJ0RaJyxcbiAgICAnXFx1MDFGMic6ICdEeicsXG4gICAgJ1xcdTAxQzUnOiAnRHonLFxuICAgICdcXHUyNEJBJzogJ0UnLFxuICAgICdcXHVGRjI1JzogJ0UnLFxuICAgICdcXHUwMEM4JzogJ0UnLFxuICAgICdcXHUwMEM5JzogJ0UnLFxuICAgICdcXHUwMENBJzogJ0UnLFxuICAgICdcXHUxRUMwJzogJ0UnLFxuICAgICdcXHUxRUJFJzogJ0UnLFxuICAgICdcXHUxRUM0JzogJ0UnLFxuICAgICdcXHUxRUMyJzogJ0UnLFxuICAgICdcXHUxRUJDJzogJ0UnLFxuICAgICdcXHUwMTEyJzogJ0UnLFxuICAgICdcXHUxRTE0JzogJ0UnLFxuICAgICdcXHUxRTE2JzogJ0UnLFxuICAgICdcXHUwMTE0JzogJ0UnLFxuICAgICdcXHUwMTE2JzogJ0UnLFxuICAgICdcXHUwMENCJzogJ0UnLFxuICAgICdcXHUxRUJBJzogJ0UnLFxuICAgICdcXHUwMTFBJzogJ0UnLFxuICAgICdcXHUwMjA0JzogJ0UnLFxuICAgICdcXHUwMjA2JzogJ0UnLFxuICAgICdcXHUxRUI4JzogJ0UnLFxuICAgICdcXHUxRUM2JzogJ0UnLFxuICAgICdcXHUwMjI4JzogJ0UnLFxuICAgICdcXHUxRTFDJzogJ0UnLFxuICAgICdcXHUwMTE4JzogJ0UnLFxuICAgICdcXHUxRTE4JzogJ0UnLFxuICAgICdcXHUxRTFBJzogJ0UnLFxuICAgICdcXHUwMTkwJzogJ0UnLFxuICAgICdcXHUwMThFJzogJ0UnLFxuICAgICdcXHUyNEJCJzogJ0YnLFxuICAgICdcXHVGRjI2JzogJ0YnLFxuICAgICdcXHUxRTFFJzogJ0YnLFxuICAgICdcXHUwMTkxJzogJ0YnLFxuICAgICdcXHVBNzdCJzogJ0YnLFxuICAgICdcXHUyNEJDJzogJ0cnLFxuICAgICdcXHVGRjI3JzogJ0cnLFxuICAgICdcXHUwMUY0JzogJ0cnLFxuICAgICdcXHUwMTFDJzogJ0cnLFxuICAgICdcXHUxRTIwJzogJ0cnLFxuICAgICdcXHUwMTFFJzogJ0cnLFxuICAgICdcXHUwMTIwJzogJ0cnLFxuICAgICdcXHUwMUU2JzogJ0cnLFxuICAgICdcXHUwMTIyJzogJ0cnLFxuICAgICdcXHUwMUU0JzogJ0cnLFxuICAgICdcXHUwMTkzJzogJ0cnLFxuICAgICdcXHVBN0EwJzogJ0cnLFxuICAgICdcXHVBNzdEJzogJ0cnLFxuICAgICdcXHVBNzdFJzogJ0cnLFxuICAgICdcXHUyNEJEJzogJ0gnLFxuICAgICdcXHVGRjI4JzogJ0gnLFxuICAgICdcXHUwMTI0JzogJ0gnLFxuICAgICdcXHUxRTIyJzogJ0gnLFxuICAgICdcXHUxRTI2JzogJ0gnLFxuICAgICdcXHUwMjFFJzogJ0gnLFxuICAgICdcXHUxRTI0JzogJ0gnLFxuICAgICdcXHUxRTI4JzogJ0gnLFxuICAgICdcXHUxRTJBJzogJ0gnLFxuICAgICdcXHUwMTI2JzogJ0gnLFxuICAgICdcXHUyQzY3JzogJ0gnLFxuICAgICdcXHUyQzc1JzogJ0gnLFxuICAgICdcXHVBNzhEJzogJ0gnLFxuICAgICdcXHUyNEJFJzogJ0knLFxuICAgICdcXHVGRjI5JzogJ0knLFxuICAgICdcXHUwMENDJzogJ0knLFxuICAgICdcXHUwMENEJzogJ0knLFxuICAgICdcXHUwMENFJzogJ0knLFxuICAgICdcXHUwMTI4JzogJ0knLFxuICAgICdcXHUwMTJBJzogJ0knLFxuICAgICdcXHUwMTJDJzogJ0knLFxuICAgICdcXHUwMTMwJzogJ0knLFxuICAgICdcXHUwMENGJzogJ0knLFxuICAgICdcXHUxRTJFJzogJ0knLFxuICAgICdcXHUxRUM4JzogJ0knLFxuICAgICdcXHUwMUNGJzogJ0knLFxuICAgICdcXHUwMjA4JzogJ0knLFxuICAgICdcXHUwMjBBJzogJ0knLFxuICAgICdcXHUxRUNBJzogJ0knLFxuICAgICdcXHUwMTJFJzogJ0knLFxuICAgICdcXHUxRTJDJzogJ0knLFxuICAgICdcXHUwMTk3JzogJ0knLFxuICAgICdcXHUyNEJGJzogJ0onLFxuICAgICdcXHVGRjJBJzogJ0onLFxuICAgICdcXHUwMTM0JzogJ0onLFxuICAgICdcXHUwMjQ4JzogJ0onLFxuICAgICdcXHUyNEMwJzogJ0snLFxuICAgICdcXHVGRjJCJzogJ0snLFxuICAgICdcXHUxRTMwJzogJ0snLFxuICAgICdcXHUwMUU4JzogJ0snLFxuICAgICdcXHUxRTMyJzogJ0snLFxuICAgICdcXHUwMTM2JzogJ0snLFxuICAgICdcXHUxRTM0JzogJ0snLFxuICAgICdcXHUwMTk4JzogJ0snLFxuICAgICdcXHUyQzY5JzogJ0snLFxuICAgICdcXHVBNzQwJzogJ0snLFxuICAgICdcXHVBNzQyJzogJ0snLFxuICAgICdcXHVBNzQ0JzogJ0snLFxuICAgICdcXHVBN0EyJzogJ0snLFxuICAgICdcXHUyNEMxJzogJ0wnLFxuICAgICdcXHVGRjJDJzogJ0wnLFxuICAgICdcXHUwMTNGJzogJ0wnLFxuICAgICdcXHUwMTM5JzogJ0wnLFxuICAgICdcXHUwMTNEJzogJ0wnLFxuICAgICdcXHUxRTM2JzogJ0wnLFxuICAgICdcXHUxRTM4JzogJ0wnLFxuICAgICdcXHUwMTNCJzogJ0wnLFxuICAgICdcXHUxRTNDJzogJ0wnLFxuICAgICdcXHUxRTNBJzogJ0wnLFxuICAgICdcXHUwMTQxJzogJ0wnLFxuICAgICdcXHUwMjNEJzogJ0wnLFxuICAgICdcXHUyQzYyJzogJ0wnLFxuICAgICdcXHUyQzYwJzogJ0wnLFxuICAgICdcXHVBNzQ4JzogJ0wnLFxuICAgICdcXHVBNzQ2JzogJ0wnLFxuICAgICdcXHVBNzgwJzogJ0wnLFxuICAgICdcXHUwMUM3JzogJ0xKJyxcbiAgICAnXFx1MDFDOCc6ICdMaicsXG4gICAgJ1xcdTI0QzInOiAnTScsXG4gICAgJ1xcdUZGMkQnOiAnTScsXG4gICAgJ1xcdTFFM0UnOiAnTScsXG4gICAgJ1xcdTFFNDAnOiAnTScsXG4gICAgJ1xcdTFFNDInOiAnTScsXG4gICAgJ1xcdTJDNkUnOiAnTScsXG4gICAgJ1xcdTAxOUMnOiAnTScsXG4gICAgJ1xcdTI0QzMnOiAnTicsXG4gICAgJ1xcdUZGMkUnOiAnTicsXG4gICAgJ1xcdTAxRjgnOiAnTicsXG4gICAgJ1xcdTAxNDMnOiAnTicsXG4gICAgJ1xcdTAwRDEnOiAnTicsXG4gICAgJ1xcdTFFNDQnOiAnTicsXG4gICAgJ1xcdTAxNDcnOiAnTicsXG4gICAgJ1xcdTFFNDYnOiAnTicsXG4gICAgJ1xcdTAxNDUnOiAnTicsXG4gICAgJ1xcdTFFNEEnOiAnTicsXG4gICAgJ1xcdTFFNDgnOiAnTicsXG4gICAgJ1xcdTAyMjAnOiAnTicsXG4gICAgJ1xcdTAxOUQnOiAnTicsXG4gICAgJ1xcdUE3OTAnOiAnTicsXG4gICAgJ1xcdUE3QTQnOiAnTicsXG4gICAgJ1xcdTAxQ0EnOiAnTkonLFxuICAgICdcXHUwMUNCJzogJ05qJyxcbiAgICAnXFx1MjRDNCc6ICdPJyxcbiAgICAnXFx1RkYyRic6ICdPJyxcbiAgICAnXFx1MDBEMic6ICdPJyxcbiAgICAnXFx1MDBEMyc6ICdPJyxcbiAgICAnXFx1MDBENCc6ICdPJyxcbiAgICAnXFx1MUVEMic6ICdPJyxcbiAgICAnXFx1MUVEMCc6ICdPJyxcbiAgICAnXFx1MUVENic6ICdPJyxcbiAgICAnXFx1MUVENCc6ICdPJyxcbiAgICAnXFx1MDBENSc6ICdPJyxcbiAgICAnXFx1MUU0Qyc6ICdPJyxcbiAgICAnXFx1MDIyQyc6ICdPJyxcbiAgICAnXFx1MUU0RSc6ICdPJyxcbiAgICAnXFx1MDE0Qyc6ICdPJyxcbiAgICAnXFx1MUU1MCc6ICdPJyxcbiAgICAnXFx1MUU1Mic6ICdPJyxcbiAgICAnXFx1MDE0RSc6ICdPJyxcbiAgICAnXFx1MDIyRSc6ICdPJyxcbiAgICAnXFx1MDIzMCc6ICdPJyxcbiAgICAnXFx1MDBENic6ICdPJyxcbiAgICAnXFx1MDIyQSc6ICdPJyxcbiAgICAnXFx1MUVDRSc6ICdPJyxcbiAgICAnXFx1MDE1MCc6ICdPJyxcbiAgICAnXFx1MDFEMSc6ICdPJyxcbiAgICAnXFx1MDIwQyc6ICdPJyxcbiAgICAnXFx1MDIwRSc6ICdPJyxcbiAgICAnXFx1MDFBMCc6ICdPJyxcbiAgICAnXFx1MUVEQyc6ICdPJyxcbiAgICAnXFx1MUVEQSc6ICdPJyxcbiAgICAnXFx1MUVFMCc6ICdPJyxcbiAgICAnXFx1MUVERSc6ICdPJyxcbiAgICAnXFx1MUVFMic6ICdPJyxcbiAgICAnXFx1MUVDQyc6ICdPJyxcbiAgICAnXFx1MUVEOCc6ICdPJyxcbiAgICAnXFx1MDFFQSc6ICdPJyxcbiAgICAnXFx1MDFFQyc6ICdPJyxcbiAgICAnXFx1MDBEOCc6ICdPJyxcbiAgICAnXFx1MDFGRSc6ICdPJyxcbiAgICAnXFx1MDE4Nic6ICdPJyxcbiAgICAnXFx1MDE5Ric6ICdPJyxcbiAgICAnXFx1QTc0QSc6ICdPJyxcbiAgICAnXFx1QTc0Qyc6ICdPJyxcbiAgICAnXFx1MDE1Mic6ICdPRScsXG4gICAgJ1xcdTAxQTInOiAnT0knLFxuICAgICdcXHVBNzRFJzogJ09PJyxcbiAgICAnXFx1MDIyMic6ICdPVScsXG4gICAgJ1xcdTI0QzUnOiAnUCcsXG4gICAgJ1xcdUZGMzAnOiAnUCcsXG4gICAgJ1xcdTFFNTQnOiAnUCcsXG4gICAgJ1xcdTFFNTYnOiAnUCcsXG4gICAgJ1xcdTAxQTQnOiAnUCcsXG4gICAgJ1xcdTJDNjMnOiAnUCcsXG4gICAgJ1xcdUE3NTAnOiAnUCcsXG4gICAgJ1xcdUE3NTInOiAnUCcsXG4gICAgJ1xcdUE3NTQnOiAnUCcsXG4gICAgJ1xcdTI0QzYnOiAnUScsXG4gICAgJ1xcdUZGMzEnOiAnUScsXG4gICAgJ1xcdUE3NTYnOiAnUScsXG4gICAgJ1xcdUE3NTgnOiAnUScsXG4gICAgJ1xcdTAyNEEnOiAnUScsXG4gICAgJ1xcdTI0QzcnOiAnUicsXG4gICAgJ1xcdUZGMzInOiAnUicsXG4gICAgJ1xcdTAxNTQnOiAnUicsXG4gICAgJ1xcdTFFNTgnOiAnUicsXG4gICAgJ1xcdTAxNTgnOiAnUicsXG4gICAgJ1xcdTAyMTAnOiAnUicsXG4gICAgJ1xcdTAyMTInOiAnUicsXG4gICAgJ1xcdTFFNUEnOiAnUicsXG4gICAgJ1xcdTFFNUMnOiAnUicsXG4gICAgJ1xcdTAxNTYnOiAnUicsXG4gICAgJ1xcdTFFNUUnOiAnUicsXG4gICAgJ1xcdTAyNEMnOiAnUicsXG4gICAgJ1xcdTJDNjQnOiAnUicsXG4gICAgJ1xcdUE3NUEnOiAnUicsXG4gICAgJ1xcdUE3QTYnOiAnUicsXG4gICAgJ1xcdUE3ODInOiAnUicsXG4gICAgJ1xcdTI0QzgnOiAnUycsXG4gICAgJ1xcdUZGMzMnOiAnUycsXG4gICAgJ1xcdTFFOUUnOiAnUycsXG4gICAgJ1xcdTAxNUEnOiAnUycsXG4gICAgJ1xcdTFFNjQnOiAnUycsXG4gICAgJ1xcdTAxNUMnOiAnUycsXG4gICAgJ1xcdTFFNjAnOiAnUycsXG4gICAgJ1xcdTAxNjAnOiAnUycsXG4gICAgJ1xcdTFFNjYnOiAnUycsXG4gICAgJ1xcdTFFNjInOiAnUycsXG4gICAgJ1xcdTFFNjgnOiAnUycsXG4gICAgJ1xcdTAyMTgnOiAnUycsXG4gICAgJ1xcdTAxNUUnOiAnUycsXG4gICAgJ1xcdTJDN0UnOiAnUycsXG4gICAgJ1xcdUE3QTgnOiAnUycsXG4gICAgJ1xcdUE3ODQnOiAnUycsXG4gICAgJ1xcdTI0QzknOiAnVCcsXG4gICAgJ1xcdUZGMzQnOiAnVCcsXG4gICAgJ1xcdTFFNkEnOiAnVCcsXG4gICAgJ1xcdTAxNjQnOiAnVCcsXG4gICAgJ1xcdTFFNkMnOiAnVCcsXG4gICAgJ1xcdTAyMUEnOiAnVCcsXG4gICAgJ1xcdTAxNjInOiAnVCcsXG4gICAgJ1xcdTFFNzAnOiAnVCcsXG4gICAgJ1xcdTFFNkUnOiAnVCcsXG4gICAgJ1xcdTAxNjYnOiAnVCcsXG4gICAgJ1xcdTAxQUMnOiAnVCcsXG4gICAgJ1xcdTAxQUUnOiAnVCcsXG4gICAgJ1xcdTAyM0UnOiAnVCcsXG4gICAgJ1xcdUE3ODYnOiAnVCcsXG4gICAgJ1xcdUE3MjgnOiAnVFonLFxuICAgICdcXHUyNENBJzogJ1UnLFxuICAgICdcXHVGRjM1JzogJ1UnLFxuICAgICdcXHUwMEQ5JzogJ1UnLFxuICAgICdcXHUwMERBJzogJ1UnLFxuICAgICdcXHUwMERCJzogJ1UnLFxuICAgICdcXHUwMTY4JzogJ1UnLFxuICAgICdcXHUxRTc4JzogJ1UnLFxuICAgICdcXHUwMTZBJzogJ1UnLFxuICAgICdcXHUxRTdBJzogJ1UnLFxuICAgICdcXHUwMTZDJzogJ1UnLFxuICAgICdcXHUwMERDJzogJ1UnLFxuICAgICdcXHUwMURCJzogJ1UnLFxuICAgICdcXHUwMUQ3JzogJ1UnLFxuICAgICdcXHUwMUQ1JzogJ1UnLFxuICAgICdcXHUwMUQ5JzogJ1UnLFxuICAgICdcXHUxRUU2JzogJ1UnLFxuICAgICdcXHUwMTZFJzogJ1UnLFxuICAgICdcXHUwMTcwJzogJ1UnLFxuICAgICdcXHUwMUQzJzogJ1UnLFxuICAgICdcXHUwMjE0JzogJ1UnLFxuICAgICdcXHUwMjE2JzogJ1UnLFxuICAgICdcXHUwMUFGJzogJ1UnLFxuICAgICdcXHUxRUVBJzogJ1UnLFxuICAgICdcXHUxRUU4JzogJ1UnLFxuICAgICdcXHUxRUVFJzogJ1UnLFxuICAgICdcXHUxRUVDJzogJ1UnLFxuICAgICdcXHUxRUYwJzogJ1UnLFxuICAgICdcXHUxRUU0JzogJ1UnLFxuICAgICdcXHUxRTcyJzogJ1UnLFxuICAgICdcXHUwMTcyJzogJ1UnLFxuICAgICdcXHUxRTc2JzogJ1UnLFxuICAgICdcXHUxRTc0JzogJ1UnLFxuICAgICdcXHUwMjQ0JzogJ1UnLFxuICAgICdcXHUyNENCJzogJ1YnLFxuICAgICdcXHVGRjM2JzogJ1YnLFxuICAgICdcXHUxRTdDJzogJ1YnLFxuICAgICdcXHUxRTdFJzogJ1YnLFxuICAgICdcXHUwMUIyJzogJ1YnLFxuICAgICdcXHVBNzVFJzogJ1YnLFxuICAgICdcXHUwMjQ1JzogJ1YnLFxuICAgICdcXHVBNzYwJzogJ1ZZJyxcbiAgICAnXFx1MjRDQyc6ICdXJyxcbiAgICAnXFx1RkYzNyc6ICdXJyxcbiAgICAnXFx1MUU4MCc6ICdXJyxcbiAgICAnXFx1MUU4Mic6ICdXJyxcbiAgICAnXFx1MDE3NCc6ICdXJyxcbiAgICAnXFx1MUU4Nic6ICdXJyxcbiAgICAnXFx1MUU4NCc6ICdXJyxcbiAgICAnXFx1MUU4OCc6ICdXJyxcbiAgICAnXFx1MkM3Mic6ICdXJyxcbiAgICAnXFx1MjRDRCc6ICdYJyxcbiAgICAnXFx1RkYzOCc6ICdYJyxcbiAgICAnXFx1MUU4QSc6ICdYJyxcbiAgICAnXFx1MUU4Qyc6ICdYJyxcbiAgICAnXFx1MjRDRSc6ICdZJyxcbiAgICAnXFx1RkYzOSc6ICdZJyxcbiAgICAnXFx1MUVGMic6ICdZJyxcbiAgICAnXFx1MDBERCc6ICdZJyxcbiAgICAnXFx1MDE3Nic6ICdZJyxcbiAgICAnXFx1MUVGOCc6ICdZJyxcbiAgICAnXFx1MDIzMic6ICdZJyxcbiAgICAnXFx1MUU4RSc6ICdZJyxcbiAgICAnXFx1MDE3OCc6ICdZJyxcbiAgICAnXFx1MUVGNic6ICdZJyxcbiAgICAnXFx1MUVGNCc6ICdZJyxcbiAgICAnXFx1MDFCMyc6ICdZJyxcbiAgICAnXFx1MDI0RSc6ICdZJyxcbiAgICAnXFx1MUVGRSc6ICdZJyxcbiAgICAnXFx1MjRDRic6ICdaJyxcbiAgICAnXFx1RkYzQSc6ICdaJyxcbiAgICAnXFx1MDE3OSc6ICdaJyxcbiAgICAnXFx1MUU5MCc6ICdaJyxcbiAgICAnXFx1MDE3Qic6ICdaJyxcbiAgICAnXFx1MDE3RCc6ICdaJyxcbiAgICAnXFx1MUU5Mic6ICdaJyxcbiAgICAnXFx1MUU5NCc6ICdaJyxcbiAgICAnXFx1MDFCNSc6ICdaJyxcbiAgICAnXFx1MDIyNCc6ICdaJyxcbiAgICAnXFx1MkM3Ric6ICdaJyxcbiAgICAnXFx1MkM2Qic6ICdaJyxcbiAgICAnXFx1QTc2Mic6ICdaJyxcbiAgICAnXFx1MjREMCc6ICdhJyxcbiAgICAnXFx1RkY0MSc6ICdhJyxcbiAgICAnXFx1MUU5QSc6ICdhJyxcbiAgICAnXFx1MDBFMCc6ICdhJyxcbiAgICAnXFx1MDBFMSc6ICdhJyxcbiAgICAnXFx1MDBFMic6ICdhJyxcbiAgICAnXFx1MUVBNyc6ICdhJyxcbiAgICAnXFx1MUVBNSc6ICdhJyxcbiAgICAnXFx1MUVBQic6ICdhJyxcbiAgICAnXFx1MUVBOSc6ICdhJyxcbiAgICAnXFx1MDBFMyc6ICdhJyxcbiAgICAnXFx1MDEwMSc6ICdhJyxcbiAgICAnXFx1MDEwMyc6ICdhJyxcbiAgICAnXFx1MUVCMSc6ICdhJyxcbiAgICAnXFx1MUVBRic6ICdhJyxcbiAgICAnXFx1MUVCNSc6ICdhJyxcbiAgICAnXFx1MUVCMyc6ICdhJyxcbiAgICAnXFx1MDIyNyc6ICdhJyxcbiAgICAnXFx1MDFFMSc6ICdhJyxcbiAgICAnXFx1MDBFNCc6ICdhJyxcbiAgICAnXFx1MDFERic6ICdhJyxcbiAgICAnXFx1MUVBMyc6ICdhJyxcbiAgICAnXFx1MDBFNSc6ICdhJyxcbiAgICAnXFx1MDFGQic6ICdhJyxcbiAgICAnXFx1MDFDRSc6ICdhJyxcbiAgICAnXFx1MDIwMSc6ICdhJyxcbiAgICAnXFx1MDIwMyc6ICdhJyxcbiAgICAnXFx1MUVBMSc6ICdhJyxcbiAgICAnXFx1MUVBRCc6ICdhJyxcbiAgICAnXFx1MUVCNyc6ICdhJyxcbiAgICAnXFx1MUUwMSc6ICdhJyxcbiAgICAnXFx1MDEwNSc6ICdhJyxcbiAgICAnXFx1MkM2NSc6ICdhJyxcbiAgICAnXFx1MDI1MCc6ICdhJyxcbiAgICAnXFx1QTczMyc6ICdhYScsXG4gICAgJ1xcdTAwRTYnOiAnYWUnLFxuICAgICdcXHUwMUZEJzogJ2FlJyxcbiAgICAnXFx1MDFFMyc6ICdhZScsXG4gICAgJ1xcdUE3MzUnOiAnYW8nLFxuICAgICdcXHVBNzM3JzogJ2F1JyxcbiAgICAnXFx1QTczOSc6ICdhdicsXG4gICAgJ1xcdUE3M0InOiAnYXYnLFxuICAgICdcXHVBNzNEJzogJ2F5JyxcbiAgICAnXFx1MjREMSc6ICdiJyxcbiAgICAnXFx1RkY0Mic6ICdiJyxcbiAgICAnXFx1MUUwMyc6ICdiJyxcbiAgICAnXFx1MUUwNSc6ICdiJyxcbiAgICAnXFx1MUUwNyc6ICdiJyxcbiAgICAnXFx1MDE4MCc6ICdiJyxcbiAgICAnXFx1MDE4Myc6ICdiJyxcbiAgICAnXFx1MDI1Myc6ICdiJyxcbiAgICAnXFx1MjREMic6ICdjJyxcbiAgICAnXFx1RkY0Myc6ICdjJyxcbiAgICAnXFx1MDEwNyc6ICdjJyxcbiAgICAnXFx1MDEwOSc6ICdjJyxcbiAgICAnXFx1MDEwQic6ICdjJyxcbiAgICAnXFx1MDEwRCc6ICdjJyxcbiAgICAnXFx1MDBFNyc6ICdjJyxcbiAgICAnXFx1MUUwOSc6ICdjJyxcbiAgICAnXFx1MDE4OCc6ICdjJyxcbiAgICAnXFx1MDIzQyc6ICdjJyxcbiAgICAnXFx1QTczRic6ICdjJyxcbiAgICAnXFx1MjE4NCc6ICdjJyxcbiAgICAnXFx1MjREMyc6ICdkJyxcbiAgICAnXFx1RkY0NCc6ICdkJyxcbiAgICAnXFx1MUUwQic6ICdkJyxcbiAgICAnXFx1MDEwRic6ICdkJyxcbiAgICAnXFx1MUUwRCc6ICdkJyxcbiAgICAnXFx1MUUxMSc6ICdkJyxcbiAgICAnXFx1MUUxMyc6ICdkJyxcbiAgICAnXFx1MUUwRic6ICdkJyxcbiAgICAnXFx1MDExMSc6ICdkJyxcbiAgICAnXFx1MDE4Qyc6ICdkJyxcbiAgICAnXFx1MDI1Nic6ICdkJyxcbiAgICAnXFx1MDI1Nyc6ICdkJyxcbiAgICAnXFx1QTc3QSc6ICdkJyxcbiAgICAnXFx1MDFGMyc6ICdkeicsXG4gICAgJ1xcdTAxQzYnOiAnZHonLFxuICAgICdcXHUyNEQ0JzogJ2UnLFxuICAgICdcXHVGRjQ1JzogJ2UnLFxuICAgICdcXHUwMEU4JzogJ2UnLFxuICAgICdcXHUwMEU5JzogJ2UnLFxuICAgICdcXHUwMEVBJzogJ2UnLFxuICAgICdcXHUxRUMxJzogJ2UnLFxuICAgICdcXHUxRUJGJzogJ2UnLFxuICAgICdcXHUxRUM1JzogJ2UnLFxuICAgICdcXHUxRUMzJzogJ2UnLFxuICAgICdcXHUxRUJEJzogJ2UnLFxuICAgICdcXHUwMTEzJzogJ2UnLFxuICAgICdcXHUxRTE1JzogJ2UnLFxuICAgICdcXHUxRTE3JzogJ2UnLFxuICAgICdcXHUwMTE1JzogJ2UnLFxuICAgICdcXHUwMTE3JzogJ2UnLFxuICAgICdcXHUwMEVCJzogJ2UnLFxuICAgICdcXHUxRUJCJzogJ2UnLFxuICAgICdcXHUwMTFCJzogJ2UnLFxuICAgICdcXHUwMjA1JzogJ2UnLFxuICAgICdcXHUwMjA3JzogJ2UnLFxuICAgICdcXHUxRUI5JzogJ2UnLFxuICAgICdcXHUxRUM3JzogJ2UnLFxuICAgICdcXHUwMjI5JzogJ2UnLFxuICAgICdcXHUxRTFEJzogJ2UnLFxuICAgICdcXHUwMTE5JzogJ2UnLFxuICAgICdcXHUxRTE5JzogJ2UnLFxuICAgICdcXHUxRTFCJzogJ2UnLFxuICAgICdcXHUwMjQ3JzogJ2UnLFxuICAgICdcXHUwMjVCJzogJ2UnLFxuICAgICdcXHUwMUREJzogJ2UnLFxuICAgICdcXHUyNEQ1JzogJ2YnLFxuICAgICdcXHVGRjQ2JzogJ2YnLFxuICAgICdcXHUxRTFGJzogJ2YnLFxuICAgICdcXHUwMTkyJzogJ2YnLFxuICAgICdcXHVBNzdDJzogJ2YnLFxuICAgICdcXHUyNEQ2JzogJ2cnLFxuICAgICdcXHVGRjQ3JzogJ2cnLFxuICAgICdcXHUwMUY1JzogJ2cnLFxuICAgICdcXHUwMTFEJzogJ2cnLFxuICAgICdcXHUxRTIxJzogJ2cnLFxuICAgICdcXHUwMTFGJzogJ2cnLFxuICAgICdcXHUwMTIxJzogJ2cnLFxuICAgICdcXHUwMUU3JzogJ2cnLFxuICAgICdcXHUwMTIzJzogJ2cnLFxuICAgICdcXHUwMUU1JzogJ2cnLFxuICAgICdcXHUwMjYwJzogJ2cnLFxuICAgICdcXHVBN0ExJzogJ2cnLFxuICAgICdcXHUxRDc5JzogJ2cnLFxuICAgICdcXHVBNzdGJzogJ2cnLFxuICAgICdcXHUyNEQ3JzogJ2gnLFxuICAgICdcXHVGRjQ4JzogJ2gnLFxuICAgICdcXHUwMTI1JzogJ2gnLFxuICAgICdcXHUxRTIzJzogJ2gnLFxuICAgICdcXHUxRTI3JzogJ2gnLFxuICAgICdcXHUwMjFGJzogJ2gnLFxuICAgICdcXHUxRTI1JzogJ2gnLFxuICAgICdcXHUxRTI5JzogJ2gnLFxuICAgICdcXHUxRTJCJzogJ2gnLFxuICAgICdcXHUxRTk2JzogJ2gnLFxuICAgICdcXHUwMTI3JzogJ2gnLFxuICAgICdcXHUyQzY4JzogJ2gnLFxuICAgICdcXHUyQzc2JzogJ2gnLFxuICAgICdcXHUwMjY1JzogJ2gnLFxuICAgICdcXHUwMTk1JzogJ2h2JyxcbiAgICAnXFx1MjREOCc6ICdpJyxcbiAgICAnXFx1RkY0OSc6ICdpJyxcbiAgICAnXFx1MDBFQyc6ICdpJyxcbiAgICAnXFx1MDBFRCc6ICdpJyxcbiAgICAnXFx1MDBFRSc6ICdpJyxcbiAgICAnXFx1MDEyOSc6ICdpJyxcbiAgICAnXFx1MDEyQic6ICdpJyxcbiAgICAnXFx1MDEyRCc6ICdpJyxcbiAgICAnXFx1MDBFRic6ICdpJyxcbiAgICAnXFx1MUUyRic6ICdpJyxcbiAgICAnXFx1MUVDOSc6ICdpJyxcbiAgICAnXFx1MDFEMCc6ICdpJyxcbiAgICAnXFx1MDIwOSc6ICdpJyxcbiAgICAnXFx1MDIwQic6ICdpJyxcbiAgICAnXFx1MUVDQic6ICdpJyxcbiAgICAnXFx1MDEyRic6ICdpJyxcbiAgICAnXFx1MUUyRCc6ICdpJyxcbiAgICAnXFx1MDI2OCc6ICdpJyxcbiAgICAnXFx1MDEzMSc6ICdpJyxcbiAgICAnXFx1MjREOSc6ICdqJyxcbiAgICAnXFx1RkY0QSc6ICdqJyxcbiAgICAnXFx1MDEzNSc6ICdqJyxcbiAgICAnXFx1MDFGMCc6ICdqJyxcbiAgICAnXFx1MDI0OSc6ICdqJyxcbiAgICAnXFx1MjREQSc6ICdrJyxcbiAgICAnXFx1RkY0Qic6ICdrJyxcbiAgICAnXFx1MUUzMSc6ICdrJyxcbiAgICAnXFx1MDFFOSc6ICdrJyxcbiAgICAnXFx1MUUzMyc6ICdrJyxcbiAgICAnXFx1MDEzNyc6ICdrJyxcbiAgICAnXFx1MUUzNSc6ICdrJyxcbiAgICAnXFx1MDE5OSc6ICdrJyxcbiAgICAnXFx1MkM2QSc6ICdrJyxcbiAgICAnXFx1QTc0MSc6ICdrJyxcbiAgICAnXFx1QTc0Myc6ICdrJyxcbiAgICAnXFx1QTc0NSc6ICdrJyxcbiAgICAnXFx1QTdBMyc6ICdrJyxcbiAgICAnXFx1MjREQic6ICdsJyxcbiAgICAnXFx1RkY0Qyc6ICdsJyxcbiAgICAnXFx1MDE0MCc6ICdsJyxcbiAgICAnXFx1MDEzQSc6ICdsJyxcbiAgICAnXFx1MDEzRSc6ICdsJyxcbiAgICAnXFx1MUUzNyc6ICdsJyxcbiAgICAnXFx1MUUzOSc6ICdsJyxcbiAgICAnXFx1MDEzQyc6ICdsJyxcbiAgICAnXFx1MUUzRCc6ICdsJyxcbiAgICAnXFx1MUUzQic6ICdsJyxcbiAgICAnXFx1MDE3Ric6ICdsJyxcbiAgICAnXFx1MDE0Mic6ICdsJyxcbiAgICAnXFx1MDE5QSc6ICdsJyxcbiAgICAnXFx1MDI2Qic6ICdsJyxcbiAgICAnXFx1MkM2MSc6ICdsJyxcbiAgICAnXFx1QTc0OSc6ICdsJyxcbiAgICAnXFx1QTc4MSc6ICdsJyxcbiAgICAnXFx1QTc0Nyc6ICdsJyxcbiAgICAnXFx1MDFDOSc6ICdsaicsXG4gICAgJ1xcdTI0REMnOiAnbScsXG4gICAgJ1xcdUZGNEQnOiAnbScsXG4gICAgJ1xcdTFFM0YnOiAnbScsXG4gICAgJ1xcdTFFNDEnOiAnbScsXG4gICAgJ1xcdTFFNDMnOiAnbScsXG4gICAgJ1xcdTAyNzEnOiAnbScsXG4gICAgJ1xcdTAyNkYnOiAnbScsXG4gICAgJ1xcdTI0REQnOiAnbicsXG4gICAgJ1xcdUZGNEUnOiAnbicsXG4gICAgJ1xcdTAxRjknOiAnbicsXG4gICAgJ1xcdTAxNDQnOiAnbicsXG4gICAgJ1xcdTAwRjEnOiAnbicsXG4gICAgJ1xcdTFFNDUnOiAnbicsXG4gICAgJ1xcdTAxNDgnOiAnbicsXG4gICAgJ1xcdTFFNDcnOiAnbicsXG4gICAgJ1xcdTAxNDYnOiAnbicsXG4gICAgJ1xcdTFFNEInOiAnbicsXG4gICAgJ1xcdTFFNDknOiAnbicsXG4gICAgJ1xcdTAxOUUnOiAnbicsXG4gICAgJ1xcdTAyNzInOiAnbicsXG4gICAgJ1xcdTAxNDknOiAnbicsXG4gICAgJ1xcdUE3OTEnOiAnbicsXG4gICAgJ1xcdUE3QTUnOiAnbicsXG4gICAgJ1xcdTAxQ0MnOiAnbmonLFxuICAgICdcXHUyNERFJzogJ28nLFxuICAgICdcXHVGRjRGJzogJ28nLFxuICAgICdcXHUwMEYyJzogJ28nLFxuICAgICdcXHUwMEYzJzogJ28nLFxuICAgICdcXHUwMEY0JzogJ28nLFxuICAgICdcXHUxRUQzJzogJ28nLFxuICAgICdcXHUxRUQxJzogJ28nLFxuICAgICdcXHUxRUQ3JzogJ28nLFxuICAgICdcXHUxRUQ1JzogJ28nLFxuICAgICdcXHUwMEY1JzogJ28nLFxuICAgICdcXHUxRTREJzogJ28nLFxuICAgICdcXHUwMjJEJzogJ28nLFxuICAgICdcXHUxRTRGJzogJ28nLFxuICAgICdcXHUwMTREJzogJ28nLFxuICAgICdcXHUxRTUxJzogJ28nLFxuICAgICdcXHUxRTUzJzogJ28nLFxuICAgICdcXHUwMTRGJzogJ28nLFxuICAgICdcXHUwMjJGJzogJ28nLFxuICAgICdcXHUwMjMxJzogJ28nLFxuICAgICdcXHUwMEY2JzogJ28nLFxuICAgICdcXHUwMjJCJzogJ28nLFxuICAgICdcXHUxRUNGJzogJ28nLFxuICAgICdcXHUwMTUxJzogJ28nLFxuICAgICdcXHUwMUQyJzogJ28nLFxuICAgICdcXHUwMjBEJzogJ28nLFxuICAgICdcXHUwMjBGJzogJ28nLFxuICAgICdcXHUwMUExJzogJ28nLFxuICAgICdcXHUxRUREJzogJ28nLFxuICAgICdcXHUxRURCJzogJ28nLFxuICAgICdcXHUxRUUxJzogJ28nLFxuICAgICdcXHUxRURGJzogJ28nLFxuICAgICdcXHUxRUUzJzogJ28nLFxuICAgICdcXHUxRUNEJzogJ28nLFxuICAgICdcXHUxRUQ5JzogJ28nLFxuICAgICdcXHUwMUVCJzogJ28nLFxuICAgICdcXHUwMUVEJzogJ28nLFxuICAgICdcXHUwMEY4JzogJ28nLFxuICAgICdcXHUwMUZGJzogJ28nLFxuICAgICdcXHUwMjU0JzogJ28nLFxuICAgICdcXHVBNzRCJzogJ28nLFxuICAgICdcXHVBNzREJzogJ28nLFxuICAgICdcXHUwMjc1JzogJ28nLFxuICAgICdcXHUwMTUzJzogJ29lJyxcbiAgICAnXFx1MDFBMyc6ICdvaScsXG4gICAgJ1xcdTAyMjMnOiAnb3UnLFxuICAgICdcXHVBNzRGJzogJ29vJyxcbiAgICAnXFx1MjRERic6ICdwJyxcbiAgICAnXFx1RkY1MCc6ICdwJyxcbiAgICAnXFx1MUU1NSc6ICdwJyxcbiAgICAnXFx1MUU1Nyc6ICdwJyxcbiAgICAnXFx1MDFBNSc6ICdwJyxcbiAgICAnXFx1MUQ3RCc6ICdwJyxcbiAgICAnXFx1QTc1MSc6ICdwJyxcbiAgICAnXFx1QTc1Myc6ICdwJyxcbiAgICAnXFx1QTc1NSc6ICdwJyxcbiAgICAnXFx1MjRFMCc6ICdxJyxcbiAgICAnXFx1RkY1MSc6ICdxJyxcbiAgICAnXFx1MDI0Qic6ICdxJyxcbiAgICAnXFx1QTc1Nyc6ICdxJyxcbiAgICAnXFx1QTc1OSc6ICdxJyxcbiAgICAnXFx1MjRFMSc6ICdyJyxcbiAgICAnXFx1RkY1Mic6ICdyJyxcbiAgICAnXFx1MDE1NSc6ICdyJyxcbiAgICAnXFx1MUU1OSc6ICdyJyxcbiAgICAnXFx1MDE1OSc6ICdyJyxcbiAgICAnXFx1MDIxMSc6ICdyJyxcbiAgICAnXFx1MDIxMyc6ICdyJyxcbiAgICAnXFx1MUU1Qic6ICdyJyxcbiAgICAnXFx1MUU1RCc6ICdyJyxcbiAgICAnXFx1MDE1Nyc6ICdyJyxcbiAgICAnXFx1MUU1Ric6ICdyJyxcbiAgICAnXFx1MDI0RCc6ICdyJyxcbiAgICAnXFx1MDI3RCc6ICdyJyxcbiAgICAnXFx1QTc1Qic6ICdyJyxcbiAgICAnXFx1QTdBNyc6ICdyJyxcbiAgICAnXFx1QTc4Myc6ICdyJyxcbiAgICAnXFx1MjRFMic6ICdzJyxcbiAgICAnXFx1RkY1Myc6ICdzJyxcbiAgICAnXFx1MDBERic6ICdzJyxcbiAgICAnXFx1MDE1Qic6ICdzJyxcbiAgICAnXFx1MUU2NSc6ICdzJyxcbiAgICAnXFx1MDE1RCc6ICdzJyxcbiAgICAnXFx1MUU2MSc6ICdzJyxcbiAgICAnXFx1MDE2MSc6ICdzJyxcbiAgICAnXFx1MUU2Nyc6ICdzJyxcbiAgICAnXFx1MUU2Myc6ICdzJyxcbiAgICAnXFx1MUU2OSc6ICdzJyxcbiAgICAnXFx1MDIxOSc6ICdzJyxcbiAgICAnXFx1MDE1Ric6ICdzJyxcbiAgICAnXFx1MDIzRic6ICdzJyxcbiAgICAnXFx1QTdBOSc6ICdzJyxcbiAgICAnXFx1QTc4NSc6ICdzJyxcbiAgICAnXFx1MUU5Qic6ICdzJyxcbiAgICAnXFx1MjRFMyc6ICd0JyxcbiAgICAnXFx1RkY1NCc6ICd0JyxcbiAgICAnXFx1MUU2Qic6ICd0JyxcbiAgICAnXFx1MUU5Nyc6ICd0JyxcbiAgICAnXFx1MDE2NSc6ICd0JyxcbiAgICAnXFx1MUU2RCc6ICd0JyxcbiAgICAnXFx1MDIxQic6ICd0JyxcbiAgICAnXFx1MDE2Myc6ICd0JyxcbiAgICAnXFx1MUU3MSc6ICd0JyxcbiAgICAnXFx1MUU2Ric6ICd0JyxcbiAgICAnXFx1MDE2Nyc6ICd0JyxcbiAgICAnXFx1MDFBRCc6ICd0JyxcbiAgICAnXFx1MDI4OCc6ICd0JyxcbiAgICAnXFx1MkM2Nic6ICd0JyxcbiAgICAnXFx1QTc4Nyc6ICd0JyxcbiAgICAnXFx1QTcyOSc6ICd0eicsXG4gICAgJ1xcdTI0RTQnOiAndScsXG4gICAgJ1xcdUZGNTUnOiAndScsXG4gICAgJ1xcdTAwRjknOiAndScsXG4gICAgJ1xcdTAwRkEnOiAndScsXG4gICAgJ1xcdTAwRkInOiAndScsXG4gICAgJ1xcdTAxNjknOiAndScsXG4gICAgJ1xcdTFFNzknOiAndScsXG4gICAgJ1xcdTAxNkInOiAndScsXG4gICAgJ1xcdTFFN0InOiAndScsXG4gICAgJ1xcdTAxNkQnOiAndScsXG4gICAgJ1xcdTAwRkMnOiAndScsXG4gICAgJ1xcdTAxREMnOiAndScsXG4gICAgJ1xcdTAxRDgnOiAndScsXG4gICAgJ1xcdTAxRDYnOiAndScsXG4gICAgJ1xcdTAxREEnOiAndScsXG4gICAgJ1xcdTFFRTcnOiAndScsXG4gICAgJ1xcdTAxNkYnOiAndScsXG4gICAgJ1xcdTAxNzEnOiAndScsXG4gICAgJ1xcdTAxRDQnOiAndScsXG4gICAgJ1xcdTAyMTUnOiAndScsXG4gICAgJ1xcdTAyMTcnOiAndScsXG4gICAgJ1xcdTAxQjAnOiAndScsXG4gICAgJ1xcdTFFRUInOiAndScsXG4gICAgJ1xcdTFFRTknOiAndScsXG4gICAgJ1xcdTFFRUYnOiAndScsXG4gICAgJ1xcdTFFRUQnOiAndScsXG4gICAgJ1xcdTFFRjEnOiAndScsXG4gICAgJ1xcdTFFRTUnOiAndScsXG4gICAgJ1xcdTFFNzMnOiAndScsXG4gICAgJ1xcdTAxNzMnOiAndScsXG4gICAgJ1xcdTFFNzcnOiAndScsXG4gICAgJ1xcdTFFNzUnOiAndScsXG4gICAgJ1xcdTAyODknOiAndScsXG4gICAgJ1xcdTI0RTUnOiAndicsXG4gICAgJ1xcdUZGNTYnOiAndicsXG4gICAgJ1xcdTFFN0QnOiAndicsXG4gICAgJ1xcdTFFN0YnOiAndicsXG4gICAgJ1xcdTAyOEInOiAndicsXG4gICAgJ1xcdUE3NUYnOiAndicsXG4gICAgJ1xcdTAyOEMnOiAndicsXG4gICAgJ1xcdUE3NjEnOiAndnknLFxuICAgICdcXHUyNEU2JzogJ3cnLFxuICAgICdcXHVGRjU3JzogJ3cnLFxuICAgICdcXHUxRTgxJzogJ3cnLFxuICAgICdcXHUxRTgzJzogJ3cnLFxuICAgICdcXHUwMTc1JzogJ3cnLFxuICAgICdcXHUxRTg3JzogJ3cnLFxuICAgICdcXHUxRTg1JzogJ3cnLFxuICAgICdcXHUxRTk4JzogJ3cnLFxuICAgICdcXHUxRTg5JzogJ3cnLFxuICAgICdcXHUyQzczJzogJ3cnLFxuICAgICdcXHUyNEU3JzogJ3gnLFxuICAgICdcXHVGRjU4JzogJ3gnLFxuICAgICdcXHUxRThCJzogJ3gnLFxuICAgICdcXHUxRThEJzogJ3gnLFxuICAgICdcXHUyNEU4JzogJ3knLFxuICAgICdcXHVGRjU5JzogJ3knLFxuICAgICdcXHUxRUYzJzogJ3knLFxuICAgICdcXHUwMEZEJzogJ3knLFxuICAgICdcXHUwMTc3JzogJ3knLFxuICAgICdcXHUxRUY5JzogJ3knLFxuICAgICdcXHUwMjMzJzogJ3knLFxuICAgICdcXHUxRThGJzogJ3knLFxuICAgICdcXHUwMEZGJzogJ3knLFxuICAgICdcXHUxRUY3JzogJ3knLFxuICAgICdcXHUxRTk5JzogJ3knLFxuICAgICdcXHUxRUY1JzogJ3knLFxuICAgICdcXHUwMUI0JzogJ3knLFxuICAgICdcXHUwMjRGJzogJ3knLFxuICAgICdcXHUxRUZGJzogJ3knLFxuICAgICdcXHUyNEU5JzogJ3onLFxuICAgICdcXHVGRjVBJzogJ3onLFxuICAgICdcXHUwMTdBJzogJ3onLFxuICAgICdcXHUxRTkxJzogJ3onLFxuICAgICdcXHUwMTdDJzogJ3onLFxuICAgICdcXHUwMTdFJzogJ3onLFxuICAgICdcXHUxRTkzJzogJ3onLFxuICAgICdcXHUxRTk1JzogJ3onLFxuICAgICdcXHUwMUI2JzogJ3onLFxuICAgICdcXHUwMjI1JzogJ3onLFxuICAgICdcXHUwMjQwJzogJ3onLFxuICAgICdcXHUyQzZDJzogJ3onLFxuICAgICdcXHVBNzYzJzogJ3onLFxuICAgICdcXHUwMzg2JzogJ1xcdTAzOTEnLFxuICAgICdcXHUwMzg4JzogJ1xcdTAzOTUnLFxuICAgICdcXHUwMzg5JzogJ1xcdTAzOTcnLFxuICAgICdcXHUwMzhBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwM0FBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwMzhDJzogJ1xcdTAzOUYnLFxuICAgICdcXHUwMzhFJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwM0FCJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwMzhGJzogJ1xcdTAzQTknLFxuICAgICdcXHUwM0FDJzogJ1xcdTAzQjEnLFxuICAgICdcXHUwM0FEJzogJ1xcdTAzQjUnLFxuICAgICdcXHUwM0FFJzogJ1xcdTAzQjcnLFxuICAgICdcXHUwM0FGJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NBJzogJ1xcdTAzQjknLFxuICAgICdcXHUwMzkwJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NDJzogJ1xcdTAzQkYnLFxuICAgICdcXHUwM0NEJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0NCJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0IwJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0NFJzogJ1xcdTAzQzknLFxuICAgICdcXHUwM0MyJzogJ1xcdTAzQzMnLFxuICAgICdcXHUyMDE5JzogJ1xcJydcbiAgfTtcblxuICByZXR1cm4gZGlhY3JpdGljcztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9iYXNlJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBCYXNlQWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBCYXNlQWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChCYXNlQWRhcHRlciwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY3VycmVudGAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLicpO1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHF1ZXJ5YCBtZXRob2QgbXVzdCBiZSBkZWZpbmVkIGluIGNoaWxkIGNsYXNzZXMuJyk7XG4gIH07XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgLy8gQ2FuIGJlIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcbiAgfTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYW4gYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5nZW5lcmF0ZVJlc3VsdElkID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIHZhciBpZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0LSc7XG5cbiAgICBpZCArPSBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuXG4gICAgaWYgKGRhdGEuaWQgIT0gbnVsbCkge1xuICAgICAgaWQgKz0gJy0nICsgZGF0YS5pZC50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnLScgKyBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3NlbGVjdCcsW1xuICAnLi9iYXNlJyxcbiAgJy4uL3V0aWxzJyxcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uIChCYXNlQWRhcHRlciwgVXRpbHMsICQpIHtcbiAgZnVuY3Rpb24gU2VsZWN0QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIFNlbGVjdEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoU2VsZWN0QWRhcHRlciwgQmFzZUFkYXB0ZXIpO1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgIHZhciBvcHRpb24gPSBzZWxmLml0ZW0oJG9wdGlvbik7XG5cbiAgICAgIGRhdGEucHVzaChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soZGF0YSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkYXRhLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIC8vIElmIGRhdGEuZWxlbWVudCBpcyBhIERPTSBub2RlLCB1c2UgaXQgaW5zdGVhZFxuICAgIGlmICgkKGRhdGEuZWxlbWVudCkuaXMoJ29wdGlvbicpKSB7XG4gICAgICBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kZWxlbWVudC5wcm9wKCdtdWx0aXBsZScpKSB7XG4gICAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIHZhciB2YWwgPSBbXTtcblxuICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICBkYXRhLnB1c2guYXBwbHkoZGF0YSwgY3VycmVudERhdGEpO1xuXG4gICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgICAgIHZhciBpZCA9IGRhdGFbZF0uaWQ7XG5cbiAgICAgICAgICBpZiAoJC5pbkFycmF5KGlkLCB2YWwpID09PSAtMSkge1xuICAgICAgICAgICAgdmFsLnB1c2goaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuJGVsZW1lbnQudmFsKHZhbCk7XG4gICAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsID0gZGF0YS5pZDtcblxuICAgICAgdGhpcy4kZWxlbWVudC52YWwodmFsKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUudW5zZWxlY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICghdGhpcy4kZWxlbWVudC5wcm9wKCdtdWx0aXBsZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCQoZGF0YS5lbGVtZW50KS5pcygnb3B0aW9uJykpIHtcbiAgICAgIGRhdGEuZWxlbWVudC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICB2YXIgdmFsID0gW107XG5cbiAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgY3VycmVudERhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgdmFyIGlkID0gY3VycmVudERhdGFbZF0uaWQ7XG5cbiAgICAgICAgaWYgKGlkICE9PSBkYXRhLmlkICYmICQuaW5BcnJheShpZCwgdmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICB2YWwucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2VsZi4kZWxlbWVudC52YWwodmFsKTtcblxuICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuc2VsZWN0KHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLnVuc2VsZWN0KHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlbW92ZSBhbnl0aGluZyBhZGRlZCB0byBjaGlsZCBlbGVtZW50c1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnKicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgLy8gUmVtb3ZlIGFueSBjdXN0b20gZGF0YSBzZXQgYnkgU2VsZWN0MlxuICAgICAgVXRpbHMuUmVtb3ZlRGF0YSh0aGlzKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGRhdGEgPSBbXTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCk7XG5cbiAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgaWYgKCEkb3B0aW9uLmlzKCdvcHRpb24nKSAmJiAhJG9wdGlvbi5pcygnb3B0Z3JvdXAnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRpb24gPSBzZWxmLml0ZW0oJG9wdGlvbik7XG5cbiAgICAgIHZhciBtYXRjaGVzID0gc2VsZi5tYXRjaGVzKHBhcmFtcywgb3B0aW9uKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YS5wdXNoKG1hdGNoZXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soe1xuICAgICAgcmVzdWx0czogZGF0YVxuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmFkZE9wdGlvbnMgPSBmdW5jdGlvbiAoJG9wdGlvbnMpIHtcbiAgICBVdGlscy5hcHBlbmRNYW55KHRoaXMuJGVsZW1lbnQsICRvcHRpb25zKTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5vcHRpb24gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBvcHRpb247XG5cbiAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgICAgIG9wdGlvbi5sYWJlbCA9IGRhdGEudGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLnRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gZGF0YS50ZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGRhdGEuaWQ7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuZGlzYWJsZWQpIHtcbiAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc2VsZWN0ZWQpIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudGl0bGUpIHtcbiAgICAgIG9wdGlvbi50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgfVxuXG4gICAgdmFyICRvcHRpb24gPSAkKG9wdGlvbik7XG5cbiAgICB2YXIgbm9ybWFsaXplZERhdGEgPSB0aGlzLl9ub3JtYWxpemVJdGVtKGRhdGEpO1xuICAgIG5vcm1hbGl6ZWREYXRhLmVsZW1lbnQgPSBvcHRpb247XG5cbiAgICAvLyBPdmVycmlkZSB0aGUgb3B0aW9uJ3MgZGF0YSB3aXRoIHRoZSBjb21iaW5lZCBkYXRhXG4gICAgVXRpbHMuU3RvcmVEYXRhKG9wdGlvbiwgJ2RhdGEnLCBub3JtYWxpemVkRGF0YSk7XG5cbiAgICByZXR1cm4gJG9wdGlvbjtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24gKCRvcHRpb24pIHtcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgZGF0YSA9IFV0aWxzLkdldERhdGEoJG9wdGlvblswXSwgJ2RhdGEnKTtcblxuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGlmICgkb3B0aW9uLmlzKCdvcHRpb24nKSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICRvcHRpb24udmFsKCksXG4gICAgICAgIHRleHQ6ICRvcHRpb24udGV4dCgpLFxuICAgICAgICBkaXNhYmxlZDogJG9wdGlvbi5wcm9wKCdkaXNhYmxlZCcpLFxuICAgICAgICBzZWxlY3RlZDogJG9wdGlvbi5wcm9wKCdzZWxlY3RlZCcpLFxuICAgICAgICB0aXRsZTogJG9wdGlvbi5wcm9wKCd0aXRsZScpXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoJG9wdGlvbi5pcygnb3B0Z3JvdXAnKSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgdGV4dDogJG9wdGlvbi5wcm9wKCdsYWJlbCcpLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHRpdGxlOiAkb3B0aW9uLnByb3AoJ3RpdGxlJylcbiAgICAgIH07XG5cbiAgICAgIHZhciAkY2hpbGRyZW4gPSAkb3B0aW9uLmNoaWxkcmVuKCdvcHRpb24nKTtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBjID0gMDsgYyA8ICRjaGlsZHJlbi5sZW5ndGg7IGMrKykge1xuICAgICAgICB2YXIgJGNoaWxkID0gJCgkY2hpbGRyZW5bY10pO1xuXG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuaXRlbSgkY2hpbGQpO1xuXG4gICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgZGF0YSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YSk7XG4gICAgZGF0YS5lbGVtZW50ID0gJG9wdGlvblswXTtcblxuICAgIFV0aWxzLlN0b3JlRGF0YSgkb3B0aW9uWzBdLCAnZGF0YScsIGRhdGEpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuX25vcm1hbGl6ZUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtICE9PSBPYmplY3QoaXRlbSkpIHtcbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIGlkOiBpdGVtLFxuICAgICAgICB0ZXh0OiBpdGVtXG4gICAgICB9O1xuICAgIH1cblxuICAgIGl0ZW0gPSAkLmV4dGVuZCh7fSwge1xuICAgICAgdGV4dDogJydcbiAgICB9LCBpdGVtKTtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAoaXRlbS5pZCAhPSBudWxsKSB7XG4gICAgICBpdGVtLmlkID0gaXRlbS5pZC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChpdGVtLnRleHQgIT0gbnVsbCkge1xuICAgICAgaXRlbS50ZXh0ID0gaXRlbS50ZXh0LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0uX3Jlc3VsdElkID09IG51bGwgJiYgaXRlbS5pZCAmJiB0aGlzLmNvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICBpdGVtLl9yZXN1bHRJZCA9IHRoaXMuZ2VuZXJhdGVSZXN1bHRJZCh0aGlzLmNvbnRhaW5lciwgaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgaXRlbSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChwYXJhbXMsIGRhdGEpIHtcbiAgICB2YXIgbWF0Y2hlciA9IHRoaXMub3B0aW9ucy5nZXQoJ21hdGNoZXInKTtcblxuICAgIHJldHVybiBtYXRjaGVyKHBhcmFtcywgZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdEFkYXB0ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvYXJyYXknLFtcbiAgJy4vc2VsZWN0JyxcbiAgJy4uL3V0aWxzJyxcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uIChTZWxlY3RBZGFwdGVyLCBVdGlscywgJCkge1xuICBmdW5jdGlvbiBBcnJheUFkYXB0ZXIgKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5fZGF0YVRvQ29udmVydCA9IG9wdGlvbnMuZ2V0KCdkYXRhJykgfHwgW107XG5cbiAgICBBcnJheUFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKEFycmF5QWRhcHRlciwgU2VsZWN0QWRhcHRlcik7XG5cbiAgQXJyYXlBZGFwdGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIEFycmF5QWRhcHRlci5fX3N1cGVyX18uYmluZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLmFkZE9wdGlvbnModGhpcy5jb252ZXJ0VG9PcHRpb25zKHRoaXMuX2RhdGFUb0NvbnZlcnQpKTtcbiAgfTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyICRvcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpLmZpbHRlcihmdW5jdGlvbiAoaSwgZWxtKSB7XG4gICAgICByZXR1cm4gZWxtLnZhbHVlID09IGRhdGEuaWQudG9TdHJpbmcoKTtcbiAgICB9KTtcblxuICAgIGlmICgkb3B0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGRhdGEpO1xuXG4gICAgICB0aGlzLmFkZE9wdGlvbnMoJG9wdGlvbik7XG4gICAgfVxuXG4gICAgQXJyYXlBZGFwdGVyLl9fc3VwZXJfXy5zZWxlY3QuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLmNvbnZlcnRUb09wdGlvbnMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciAkZXhpc3RpbmcgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpO1xuICAgIHZhciBleGlzdGluZ0lkcyA9ICRleGlzdGluZy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlbGYuaXRlbSgkKHRoaXMpKS5pZDtcbiAgICB9KS5nZXQoKTtcblxuICAgIHZhciAkb3B0aW9ucyA9IFtdO1xuXG4gICAgLy8gRmlsdGVyIG91dCBhbGwgaXRlbXMgZXhjZXB0IGZvciB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYXJndW1lbnRcbiAgICBmdW5jdGlvbiBvbmx5SXRlbSAoaXRlbSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcykudmFsKCkgPT0gaXRlbS5pZDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YVtkXSk7XG5cbiAgICAgIC8vIFNraXAgaXRlbXMgd2hpY2ggd2VyZSBwcmUtbG9hZGVkLCBvbmx5IG1lcmdlIHRoZSBkYXRhXG4gICAgICBpZiAoJC5pbkFycmF5KGl0ZW0uaWQsIGV4aXN0aW5nSWRzKSA+PSAwKSB7XG4gICAgICAgIHZhciAkZXhpc3RpbmdPcHRpb24gPSAkZXhpc3RpbmcuZmlsdGVyKG9ubHlJdGVtKGl0ZW0pKTtcblxuICAgICAgICB2YXIgZXhpc3RpbmdEYXRhID0gdGhpcy5pdGVtKCRleGlzdGluZ09wdGlvbik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIGl0ZW0sIGV4aXN0aW5nRGF0YSk7XG5cbiAgICAgICAgdmFyICRuZXdPcHRpb24gPSB0aGlzLm9wdGlvbihuZXdEYXRhKTtcblxuICAgICAgICAkZXhpc3RpbmdPcHRpb24ucmVwbGFjZVdpdGgoJG5ld09wdGlvbik7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIHZhciAkY2hpbGRyZW4gPSB0aGlzLmNvbnZlcnRUb09wdGlvbnMoaXRlbS5jaGlsZHJlbik7XG5cbiAgICAgICAgVXRpbHMuYXBwZW5kTWFueSgkb3B0aW9uLCAkY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICAkb3B0aW9ucy5wdXNoKCRvcHRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiAkb3B0aW9ucztcbiAgfTtcblxuICByZXR1cm4gQXJyYXlBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL2FqYXgnLFtcbiAgJy4vYXJyYXknLFxuICAnLi4vdXRpbHMnLFxuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKEFycmF5QWRhcHRlciwgVXRpbHMsICQpIHtcbiAgZnVuY3Rpb24gQWpheEFkYXB0ZXIgKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5hamF4T3B0aW9ucyA9IHRoaXMuX2FwcGx5RGVmYXVsdHMob3B0aW9ucy5nZXQoJ2FqYXgnKSk7XG5cbiAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5wcm9jZXNzUmVzdWx0cyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnByb2Nlc3NSZXN1bHRzID0gdGhpcy5hamF4T3B0aW9ucy5wcm9jZXNzUmVzdWx0cztcbiAgICB9XG5cbiAgICBBamF4QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoQWpheEFkYXB0ZXIsIEFycmF5QWRhcHRlcik7XG5cbiAgQWpheEFkYXB0ZXIucHJvdG90eXBlLl9hcHBseURlZmF1bHRzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgcGFyYW1zLCB7XG4gICAgICAgICAgcTogcGFyYW1zLnRlcm1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdHJhbnNwb3J0OiBmdW5jdGlvbiAocGFyYW1zLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgICAgIHZhciAkcmVxdWVzdCA9ICQuYWpheChwYXJhbXMpO1xuXG4gICAgICAgICRyZXF1ZXN0LnRoZW4oc3VjY2Vzcyk7XG4gICAgICAgICRyZXF1ZXN0LmZhaWwoZmFpbHVyZSk7XG5cbiAgICAgICAgcmV0dXJuICRyZXF1ZXN0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zLCB0cnVlKTtcbiAgfTtcblxuICBBamF4QWRhcHRlci5wcm90b3R5cGUucHJvY2Vzc1Jlc3VsdHMgPSBmdW5jdGlvbiAocmVzdWx0cykge1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5fcmVxdWVzdCAhPSBudWxsKSB7XG4gICAgICAvLyBKU09OUCByZXF1ZXN0cyBjYW5ub3QgYWx3YXlzIGJlIGFib3J0ZWRcbiAgICAgIGlmICgkLmlzRnVuY3Rpb24odGhpcy5fcmVxdWVzdC5hYm9ydCkpIHtcbiAgICAgICAgdGhpcy5fcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIHR5cGU6ICdHRVQnXG4gICAgfSwgdGhpcy5hamF4T3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudXJsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLnVybCA9IG9wdGlvbnMudXJsLmNhbGwodGhpcy4kZWxlbWVudCwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhLmNhbGwodGhpcy4kZWxlbWVudCwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0ICgpIHtcbiAgICAgIHZhciAkcmVxdWVzdCA9IG9wdGlvbnMudHJhbnNwb3J0KG9wdGlvbnMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gc2VsZi5wcm9jZXNzUmVzdWx0cyhkYXRhLCBwYXJhbXMpO1xuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhhdCB0aGUgcmVzcG9uc2UgaW5jbHVkZWQgYSBgcmVzdWx0c2Aga2V5LlxuICAgICAgICAgIGlmICghcmVzdWx0cyB8fCAhcmVzdWx0cy5yZXN1bHRzIHx8ICEkLmlzQXJyYXkocmVzdWx0cy5yZXN1bHRzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBBSkFYIHJlc3VsdHMgZGlkIG5vdCByZXR1cm4gYW4gYXJyYXkgaW4gdGhlICcgK1xuICAgICAgICAgICAgICAnYHJlc3VsdHNgIGtleSBvZiB0aGUgcmVzcG9uc2UuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhyZXN1bHRzKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBkZXRlY3QgaWYgYSByZXF1ZXN0IHdhcyBhYm9ydGVkXG4gICAgICAgIC8vIE9ubHkgd29ya3MgaWYgdGhlIHRyYW5zcG9ydCBleHBvc2VzIGEgc3RhdHVzIHByb3BlcnR5XG4gICAgICAgIGlmICgnc3RhdHVzJyBpbiAkcmVxdWVzdCAmJlxuICAgICAgICAgICAgKCRyZXF1ZXN0LnN0YXR1cyA9PT0gMCB8fCAkcmVxdWVzdC5zdGF0dXMgPT09ICcwJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgICBtZXNzYWdlOiAnZXJyb3JMb2FkaW5nJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLl9yZXF1ZXN0ID0gJHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgJiYgcGFyYW1zLnRlcm0gIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3F1ZXJ5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlcXVlc3QsIHRoaXMuYWpheE9wdGlvbnMuZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBamF4QWRhcHRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS90YWdzJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBUYWdzIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIHRhZ3MgPSBvcHRpb25zLmdldCgndGFncycpO1xuXG4gICAgdmFyIGNyZWF0ZVRhZyA9IG9wdGlvbnMuZ2V0KCdjcmVhdGVUYWcnKTtcblxuICAgIGlmIChjcmVhdGVUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jcmVhdGVUYWcgPSBjcmVhdGVUYWc7XG4gICAgfVxuXG4gICAgdmFyIGluc2VydFRhZyA9IG9wdGlvbnMuZ2V0KCdpbnNlcnRUYWcnKTtcblxuICAgIGlmIChpbnNlcnRUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluc2VydFRhZyA9IGluc2VydFRhZztcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICBpZiAoJC5pc0FycmF5KHRhZ3MpKSB7XG4gICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRhZ3MubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgdmFyIHRhZyA9IHRhZ3NbdF07XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5fbm9ybWFsaXplSXRlbSh0YWcpO1xuXG4gICAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgVGFncy5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5fcmVtb3ZlT2xkVGFncygpO1xuXG4gICAgaWYgKHBhcmFtcy50ZXJtID09IG51bGwgfHwgcGFyYW1zLnBhZ2UgIT0gbnVsbCkge1xuICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd3JhcHBlciAob2JqLCBjaGlsZCkge1xuICAgICAgdmFyIGRhdGEgPSBvYmoucmVzdWx0cztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBkYXRhW2ldO1xuXG4gICAgICAgIHZhciBjaGVja0NoaWxkcmVuID0gKFxuICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbiAhPSBudWxsICYmXG4gICAgICAgICAgIXdyYXBwZXIoe1xuICAgICAgICAgICAgcmVzdWx0czogb3B0aW9uLmNoaWxkcmVuXG4gICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgKTtcblxuICAgICAgICB2YXIgb3B0aW9uVGV4dCA9IChvcHRpb24udGV4dCB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdmFyIHBhcmFtc1Rlcm0gPSAocGFyYW1zLnRlcm0gfHwgJycpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdmFyIGNoZWNrVGV4dCA9IG9wdGlvblRleHQgPT09IHBhcmFtc1Rlcm07XG5cbiAgICAgICAgaWYgKGNoZWNrVGV4dCB8fCBjaGVja0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2JqLmRhdGEgPSBkYXRhO1xuICAgICAgICAgIGNhbGxiYWNrKG9iaik7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnID0gc2VsZi5jcmVhdGVUYWcocGFyYW1zKTtcblxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gc2VsZi5vcHRpb24odGFnKTtcbiAgICAgICAgJG9wdGlvbi5hdHRyKCdkYXRhLXNlbGVjdDItdGFnJywgdHJ1ZSk7XG5cbiAgICAgICAgc2VsZi5hZGRPcHRpb25zKFskb3B0aW9uXSk7XG5cbiAgICAgICAgc2VsZi5pbnNlcnRUYWcoZGF0YSwgdGFnKTtcbiAgICAgIH1cblxuICAgICAgb2JqLnJlc3VsdHMgPSBkYXRhO1xuXG4gICAgICBjYWxsYmFjayhvYmopO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgd3JhcHBlcik7XG4gIH07XG5cbiAgVGFncy5wcm90b3R5cGUuY3JlYXRlVGFnID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zKSB7XG4gICAgdmFyIHRlcm0gPSAkLnRyaW0ocGFyYW1zLnRlcm0pO1xuXG4gICAgaWYgKHRlcm0gPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRlcm0sXG4gICAgICB0ZXh0OiB0ZXJtXG4gICAgfTtcbiAgfTtcblxuICBUYWdzLnByb3RvdHlwZS5pbnNlcnRUYWcgPSBmdW5jdGlvbiAoXywgZGF0YSwgdGFnKSB7XG4gICAgZGF0YS51bnNoaWZ0KHRhZyk7XG4gIH07XG5cbiAgVGFncy5wcm90b3R5cGUuX3JlbW92ZU9sZFRhZ3MgPSBmdW5jdGlvbiAoXykge1xuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uW2RhdGEtc2VsZWN0Mi10YWddJyk7XG5cbiAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gVGFncztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS90b2tlbml6ZXInLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIFRva2VuaXplciAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHZhciB0b2tlbml6ZXIgPSBvcHRpb25zLmdldCgndG9rZW5pemVyJyk7XG5cbiAgICBpZiAodG9rZW5pemVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudG9rZW5pemVyID0gdG9rZW5pemVyO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFRva2VuaXplci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLiRzZWFyY2ggPSAgY29udGFpbmVyLmRyb3Bkb3duLiRzZWFyY2ggfHwgY29udGFpbmVyLnNlbGVjdGlvbi4kc2VhcmNoIHx8XG4gICAgICAkY29udGFpbmVyLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKTtcbiAgfTtcblxuICBUb2tlbml6ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFuZFNlbGVjdCAoZGF0YSkge1xuICAgICAgLy8gTm9ybWFsaXplIHRoZSBkYXRhIG9iamVjdCBzbyB3ZSBjYW4gdXNlIGl0IGZvciBjaGVja3NcbiAgICAgIHZhciBpdGVtID0gc2VsZi5fbm9ybWFsaXplSXRlbShkYXRhKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGRhdGEgb2JqZWN0IGFscmVhZHkgZXhpc3RzIGFzIGEgdGFnXG4gICAgICAvLyBTZWxlY3QgaXQgaWYgaXQgZG9lc24ndFxuICAgICAgdmFyICRleGlzdGluZ09wdGlvbnMgPSBzZWxmLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLnZhbCgpID09PSBpdGVtLmlkO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIGFuIGV4aXN0aW5nIG9wdGlvbiB3YXNuJ3QgZm91bmQgZm9yIGl0LCBjcmVhdGUgdGhlIG9wdGlvblxuICAgICAgaWYgKCEkZXhpc3RpbmdPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9IHNlbGYub3B0aW9uKGl0ZW0pO1xuICAgICAgICAkb3B0aW9uLmF0dHIoJ2RhdGEtc2VsZWN0Mi10YWcnLCB0cnVlKTtcblxuICAgICAgICBzZWxmLl9yZW1vdmVPbGRUYWdzKCk7XG4gICAgICAgIHNlbGYuYWRkT3B0aW9ucyhbJG9wdGlvbl0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0sIG5vdyB0aGF0IHdlIGtub3cgdGhlcmUgaXMgYW4gb3B0aW9uIGZvciBpdFxuICAgICAgc2VsZWN0KGl0ZW0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdCAoZGF0YSkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3QnLCB7XG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHBhcmFtcy50ZXJtID0gcGFyYW1zLnRlcm0gfHwgJyc7XG5cbiAgICB2YXIgdG9rZW5EYXRhID0gdGhpcy50b2tlbml6ZXIocGFyYW1zLCB0aGlzLm9wdGlvbnMsIGNyZWF0ZUFuZFNlbGVjdCk7XG5cbiAgICBpZiAodG9rZW5EYXRhLnRlcm0gIT09IHBhcmFtcy50ZXJtKSB7XG4gICAgICAvLyBSZXBsYWNlIHRoZSBzZWFyY2ggdGVybSBpZiB3ZSBoYXZlIHRoZSBzZWFyY2ggYm94XG4gICAgICBpZiAodGhpcy4kc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICB0aGlzLiRzZWFyY2gudmFsKHRva2VuRGF0YS50ZXJtKTtcbiAgICAgICAgdGhpcy4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy50ZXJtID0gdG9rZW5EYXRhLnRlcm07XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgVG9rZW5pemVyLnByb3RvdHlwZS50b2tlbml6ZXIgPSBmdW5jdGlvbiAoXywgcGFyYW1zLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBzZXBhcmF0b3JzID0gb3B0aW9ucy5nZXQoJ3Rva2VuU2VwYXJhdG9ycycpIHx8IFtdO1xuICAgIHZhciB0ZXJtID0gcGFyYW1zLnRlcm07XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgdmFyIGNyZWF0ZVRhZyA9IHRoaXMuY3JlYXRlVGFnIHx8IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwYXJhbXMudGVybSxcbiAgICAgICAgdGV4dDogcGFyYW1zLnRlcm1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIHdoaWxlIChpIDwgdGVybS5sZW5ndGgpIHtcbiAgICAgIHZhciB0ZXJtQ2hhciA9IHRlcm1baV07XG5cbiAgICAgIGlmICgkLmluQXJyYXkodGVybUNoYXIsIHNlcGFyYXRvcnMpID09PSAtMSkge1xuICAgICAgICBpKys7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJ0ID0gdGVybS5zdWJzdHIoMCwgaSk7XG4gICAgICB2YXIgcGFydFBhcmFtcyA9ICQuZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgdGVybTogcGFydFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBkYXRhID0gY3JlYXRlVGFnKHBhcnRQYXJhbXMpO1xuXG4gICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuXG4gICAgICAvLyBSZXNldCB0aGUgdGVybSB0byBub3QgaW5jbHVkZSB0aGUgdG9rZW5pemVkIHBvcnRpb25cbiAgICAgIHRlcm0gPSB0ZXJtLnN1YnN0cihpICsgMSkgfHwgJyc7XG4gICAgICBpID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGVybTogdGVybVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIFRva2VuaXplcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9taW5pbXVtSW5wdXRMZW5ndGgnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNaW5pbXVtSW5wdXRMZW5ndGggKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm1pbmltdW1JbnB1dExlbmd0aCA9IG9wdGlvbnMuZ2V0KCdtaW5pbXVtSW5wdXRMZW5ndGgnKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIE1pbmltdW1JbnB1dExlbmd0aC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcblxuICAgIGlmIChwYXJhbXMudGVybS5sZW5ndGggPCB0aGlzLm1pbmltdW1JbnB1dExlbmd0aCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdyZXN1bHRzOm1lc3NhZ2UnLCB7XG4gICAgICAgIG1lc3NhZ2U6ICdpbnB1dFRvb1Nob3J0JyxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIG1pbmltdW06IHRoaXMubWluaW11bUlucHV0TGVuZ3RoLFxuICAgICAgICAgIGlucHV0OiBwYXJhbXMudGVybSxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xuICB9O1xuXG4gIHJldHVybiBNaW5pbXVtSW5wdXRMZW5ndGg7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvbWF4aW11bUlucHV0TGVuZ3RoJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWF4aW11bUlucHV0TGVuZ3RoIChkZWNvcmF0ZWQsICRlLCBvcHRpb25zKSB7XG4gICAgdGhpcy5tYXhpbXVtSW5wdXRMZW5ndGggPSBvcHRpb25zLmdldCgnbWF4aW11bUlucHV0TGVuZ3RoJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZSwgb3B0aW9ucyk7XG4gIH1cblxuICBNYXhpbXVtSW5wdXRMZW5ndGgucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHBhcmFtcy50ZXJtID0gcGFyYW1zLnRlcm0gfHwgJyc7XG5cbiAgICBpZiAodGhpcy5tYXhpbXVtSW5wdXRMZW5ndGggPiAwICYmXG4gICAgICAgIHBhcmFtcy50ZXJtLmxlbmd0aCA+IHRoaXMubWF4aW11bUlucHV0TGVuZ3RoKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgbWVzc2FnZTogJ2lucHV0VG9vTG9uZycsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBtYXhpbXVtOiB0aGlzLm1heGltdW1JbnB1dExlbmd0aCxcbiAgICAgICAgICBpbnB1dDogcGFyYW1zLnRlcm0sXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICByZXR1cm4gTWF4aW11bUlucHV0TGVuZ3RoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL21heGltdW1TZWxlY3Rpb25MZW5ndGgnLFtcblxuXSwgZnVuY3Rpb24gKCl7XG4gIGZ1bmN0aW9uIE1heGltdW1TZWxlY3Rpb25MZW5ndGggKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm1heGltdW1TZWxlY3Rpb25MZW5ndGggPSBvcHRpb25zLmdldCgnbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aC5wcm90b3R5cGUuYmluZCA9XG4gICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9jaGVja0lmTWF4aW11bVNlbGVjdGVkKCk7XG4gICAgICB9KTtcbiAgfTtcblxuICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9XG4gICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9jaGVja0lmTWF4aW11bVNlbGVjdGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVjb3JhdGVkLmNhbGwoc2VsZiwgcGFyYW1zLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgfTtcblxuICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoLnByb3RvdHlwZS5fY2hlY2tJZk1heGltdW1TZWxlY3RlZCA9XG4gICAgZnVuY3Rpb24gKF8sIHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIHZhciBjb3VudCA9IGN1cnJlbnREYXRhICE9IG51bGwgPyBjdXJyZW50RGF0YS5sZW5ndGggOiAwO1xuICAgICAgICBpZiAoc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoID4gMCAmJlxuICAgICAgICAgIGNvdW50ID49IHNlbGYubWF4aW11bVNlbGVjdGlvbkxlbmd0aCkge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICAgICAgbWVzc2FnZTogJ21heGltdW1TZWxlY3RlZCcsXG4gICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgIG1heGltdW06IHNlbGYubWF4aW11bVNlbGVjdGlvbkxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1heGltdW1TZWxlY3Rpb25MZW5ndGg7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duJyxbXG4gICdqcXVlcnknLFxuICAnLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBEcm9wZG93biAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIERyb3Bkb3duLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKERyb3Bkb3duLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZHJvcGRvd24gPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1kcm9wZG93blwiPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNcIj48L3NwYW4+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgJGRyb3Bkb3duLmF0dHIoJ2RpcicsIHRoaXMub3B0aW9ucy5nZXQoJ2RpcicpKTtcblxuICAgIHRoaXMuJGRyb3Bkb3duID0gJGRyb3Bkb3duO1xuXG4gICAgcmV0dXJuICRkcm9wZG93bjtcbiAgfTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTaG91bGQgYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5wb3NpdGlvbiA9IGZ1bmN0aW9uICgkZHJvcGRvd24sICRjb250YWluZXIpIHtcbiAgICAvLyBTaG91bGQgYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgZHJvcGRvd24gZnJvbSB0aGUgRE9NXG4gICAgdGhpcy4kZHJvcGRvd24ucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9zZWFyY2gnLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBTZWFyY2ggKCkgeyB9XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdmFyICRyZW5kZXJlZCA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuXG4gICAgdmFyICRzZWFyY2ggPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duXCI+JyArXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCItMVwiJyArXG4gICAgICAgICcgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIicgK1xuICAgICAgICAnIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJzZWFyY2hib3hcIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiAvPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgIHRoaXMuJHNlYXJjaENvbnRhaW5lciA9ICRzZWFyY2g7XG4gICAgdGhpcy4kc2VhcmNoID0gJHNlYXJjaC5maW5kKCdpbnB1dCcpO1xuXG4gICAgJHJlbmRlcmVkLnByZXBlbmQoJHNlYXJjaCk7XG5cbiAgICByZXR1cm4gJHJlbmRlcmVkO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciByZXN1bHRzSWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIHRoaXMuJHNlYXJjaC5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcigna2V5cHJlc3MnLCBldnQpO1xuXG4gICAgICBzZWxmLl9rZXlVcFByZXZlbnRlZCA9IGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICB9KTtcblxuICAgIC8vIFdvcmthcm91bmQgZm9yIGJyb3dzZXJzIHdoaWNoIGRvIG5vdCBzdXBwb3J0IHRoZSBgaW5wdXRgIGV2ZW50XG4gICAgLy8gVGhpcyB3aWxsIHByZXZlbnQgZG91YmxlLXRyaWdnZXJpbmcgb2YgZXZlbnRzIGZvciBicm93c2VycyB3aGljaCBzdXBwb3J0XG4gICAgLy8gYm90aCB0aGUgYGtleXVwYCBhbmQgYGlucHV0YCBldmVudHMuXG4gICAgdGhpcy4kc2VhcmNoLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIFVuYmluZCB0aGUgZHVwbGljYXRlZCBga2V5dXBgIGV2ZW50XG4gICAgICAkKHRoaXMpLm9mZigna2V5dXAnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlYXJjaC5vbigna2V5dXAgaW5wdXQnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLmhhbmRsZVNlYXJjaChldnQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgMCk7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1jb250cm9scycsIHJlc3VsdHNJZCk7XG5cbiAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgLTEpO1xuICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcblxuICAgICAgc2VsZi4kc2VhcmNoLnZhbCgnJyk7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignYmx1cicpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFsbCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIGlmIChwYXJhbXMucXVlcnkudGVybSA9PSBudWxsIHx8IHBhcmFtcy5xdWVyeS50ZXJtID09PSAnJykge1xuICAgICAgICB2YXIgc2hvd1NlYXJjaCA9IHNlbGYuc2hvd1NlYXJjaChwYXJhbXMpO1xuXG4gICAgICAgIGlmIChzaG93U2VhcmNoKSB7XG4gICAgICAgICAgc2VsZi4kc2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLXNlYXJjaC0taGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuJHNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1zZWFyY2gtLWhpZGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgaWYgKHBhcmFtcy5kYXRhLl9yZXN1bHRJZCkge1xuICAgICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgcGFyYW1zLmRhdGEuX3Jlc3VsdElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmhhbmRsZVNlYXJjaCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoIXRoaXMuX2tleVVwUHJldmVudGVkKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLiRzZWFyY2gudmFsKCk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7XG4gICAgICAgIHRlcm06IGlucHV0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9rZXlVcFByZXZlbnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuc2hvd1NlYXJjaCA9IGZ1bmN0aW9uIChfLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4gU2VhcmNoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9oaWRlUGxhY2Vob2xkZXInLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIaWRlUGxhY2Vob2xkZXIgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubm9ybWFsaXplUGxhY2Vob2xkZXIob3B0aW9ucy5nZXQoJ3BsYWNlaG9sZGVyJykpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKTtcbiAgfVxuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIGRhdGEucmVzdWx0cyA9IHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoZGF0YS5yZXN1bHRzKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9O1xuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUubm9ybWFsaXplUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgcGxhY2Vob2xkZXIpIHtcbiAgICBpZiAodHlwZW9mIHBsYWNlaG9sZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGV4dDogcGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9O1xuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUucmVtb3ZlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgZGF0YSkge1xuICAgIHZhciBtb2RpZmllZERhdGEgPSBkYXRhLnNsaWNlKDApO1xuXG4gICAgZm9yICh2YXIgZCA9IGRhdGEubGVuZ3RoIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgIHZhciBpdGVtID0gZGF0YVtkXTtcblxuICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIuaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgbW9kaWZpZWREYXRhLnNwbGljZShkLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kaWZpZWREYXRhO1xuICB9O1xuXG4gIHJldHVybiBIaWRlUGxhY2Vob2xkZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2luZmluaXRlU2Nyb2xsJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBJbmZpbml0ZVNjcm9sbCAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLmxhc3RQYXJhbXMgPSB7fTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcik7XG5cbiAgICB0aGlzLiRsb2FkaW5nTW9yZSA9IHRoaXMuY3JlYXRlTG9hZGluZ01vcmUoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgdGhpcy4kbG9hZGluZ01vcmUucmVtb3ZlKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgIGlmICh0aGlzLnNob3dMb2FkaW5nTW9yZShkYXRhKSkge1xuICAgICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQodGhpcy4kbG9hZGluZ01vcmUpO1xuICAgICAgdGhpcy5sb2FkTW9yZUlmTmVlZGVkKCk7XG4gICAgfVxuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbigncXVlcnknLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmxhc3RQYXJhbXMgPSBwYXJhbXM7XG4gICAgICBzZWxmLmxvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdxdWVyeTphcHBlbmQnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmxhc3RQYXJhbXMgPSBwYXJhbXM7XG4gICAgICBzZWxmLmxvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5vbignc2Nyb2xsJywgdGhpcy5sb2FkTW9yZUlmTmVlZGVkLmJpbmQodGhpcykpO1xuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5sb2FkTW9yZUlmTmVlZGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc0xvYWRNb3JlVmlzaWJsZSA9ICQuY29udGFpbnMoXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICB0aGlzLiRsb2FkaW5nTW9yZVswXVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5sb2FkaW5nIHx8ICFpc0xvYWRNb3JlVmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gdGhpcy4kcmVzdWx0cy5vZmZzZXQoKS50b3AgK1xuICAgICAgdGhpcy4kcmVzdWx0cy5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgdmFyIGxvYWRpbmdNb3JlT2Zmc2V0ID0gdGhpcy4kbG9hZGluZ01vcmUub2Zmc2V0KCkudG9wICtcbiAgICAgIHRoaXMuJGxvYWRpbmdNb3JlLm91dGVySGVpZ2h0KGZhbHNlKTtcblxuICAgIGlmIChjdXJyZW50T2Zmc2V0ICsgNTAgPj0gbG9hZGluZ01vcmVPZmZzZXQpIHtcbiAgICAgIHRoaXMubG9hZE1vcmUoKTtcbiAgICB9XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmxvYWRNb3JlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICB2YXIgcGFyYW1zID0gJC5leHRlbmQoe30sIHtwYWdlOiAxfSwgdGhpcy5sYXN0UGFyYW1zKTtcblxuICAgIHBhcmFtcy5wYWdlKys7XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5OmFwcGVuZCcsIHBhcmFtcyk7XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLnNob3dMb2FkaW5nTW9yZSA9IGZ1bmN0aW9uIChfLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEucGFnaW5hdGlvbiAmJiBkYXRhLnBhZ2luYXRpb24ubW9yZTtcbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuY3JlYXRlTG9hZGluZ01vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRvcHRpb24gPSAkKFxuICAgICAgJzxsaSAnICtcbiAgICAgICdjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1sb2FkLW1vcmVcIicgK1xuICAgICAgJ3JvbGU9XCJvcHRpb25cIiBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiPjwvbGk+J1xuICAgICk7XG5cbiAgICB2YXIgbWVzc2FnZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RyYW5zbGF0aW9ucycpLmdldCgnbG9hZGluZ01vcmUnKTtcblxuICAgICRvcHRpb24uaHRtbChtZXNzYWdlKHRoaXMubGFzdFBhcmFtcykpO1xuXG4gICAgcmV0dXJuICRvcHRpb247XG4gIH07XG5cbiAgcmV0dXJuIEluZmluaXRlU2Nyb2xsO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9hdHRhY2hCb2R5JyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gQXR0YWNoQm9keSAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGRyb3Bkb3duUGFyZW50ID0gJChvcHRpb25zLmdldCgnZHJvcGRvd25QYXJlbnQnKSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fc2hvd0Ryb3Bkb3duKCk7XG4gICAgICBzZWxmLl9hdHRhY2hQb3NpdGlvbmluZ0hhbmRsZXIoY29udGFpbmVyKTtcblxuICAgICAgLy8gTXVzdCBiaW5kIGFmdGVyIHRoZSByZXN1bHRzIGhhbmRsZXJzIHRvIGVuc3VyZSBjb3JyZWN0IHNpemluZ1xuICAgICAgc2VsZi5fYmluZENvbnRhaW5lclJlc3VsdEhhbmRsZXJzKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5faGlkZURyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgJGRyb3Bkb3duLCAkY29udGFpbmVyKSB7XG4gICAgLy8gQ2xvbmUgYWxsIG9mIHRoZSBjb250YWluZXIgY2xhc3Nlc1xuICAgICRkcm9wZG93bi5hdHRyKCdjbGFzcycsICRjb250YWluZXIuYXR0cignY2xhc3MnKSk7XG5cbiAgICAkZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ3NlbGVjdDInKTtcbiAgICAkZHJvcGRvd24uYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG5cbiAgICAkZHJvcGRvd24uY3NzKHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAtOTk5OTk5XG4gICAgfSk7XG5cbiAgICB0aGlzLiRjb250YWluZXIgPSAkY29udGFpbmVyO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoJzxzcGFuPjwvc3Bhbj4nKTtcblxuICAgIHZhciAkZHJvcGRvd24gPSBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcbiAgICAkY29udGFpbmVyLmFwcGVuZCgkZHJvcGRvd24pO1xuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIgPSAkY29udGFpbmVyO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX2hpZGVEcm9wZG93biA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5kZXRhY2goKTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fYmluZENvbnRhaW5lclJlc3VsdEhhbmRsZXJzID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuXG4gICAgLy8gVGhlc2Ugc2hvdWxkIG9ubHkgYmUgYm91bmQgb25jZVxuICAgIGlmICh0aGlzLl9jb250YWluZXJSZXN1bHRzSGFuZGxlcnNCb3VuZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFwcGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bWVzc2FnZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kID0gdHJ1ZTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBzY3JvbGxFdmVudCA9ICdzY3JvbGwuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciByZXNpemVFdmVudCA9ICdyZXNpemUuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciBvcmllbnRhdGlvbkV2ZW50ID0gJ29yaWVudGF0aW9uY2hhbmdlLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcblxuICAgIHZhciAkd2F0Y2hlcnMgPSB0aGlzLiRjb250YWluZXIucGFyZW50cygpLmZpbHRlcihVdGlscy5oYXNTY3JvbGwpO1xuICAgICR3YXRjaGVycy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIFV0aWxzLlN0b3JlRGF0YSh0aGlzLCAnc2VsZWN0Mi1zY3JvbGwtcG9zaXRpb24nLCB7XG4gICAgICAgIHg6ICQodGhpcykuc2Nyb2xsTGVmdCgpLFxuICAgICAgICB5OiAkKHRoaXMpLnNjcm9sbFRvcCgpXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgICR3YXRjaGVycy5vbihzY3JvbGxFdmVudCwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBVdGlscy5HZXREYXRhKHRoaXMsICdzZWxlY3QyLXNjcm9sbC1wb3NpdGlvbicpO1xuICAgICAgJCh0aGlzKS5zY3JvbGxUb3AocG9zaXRpb24ueSk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oc2Nyb2xsRXZlbnQgKyAnICcgKyByZXNpemVFdmVudCArICcgJyArIG9yaWVudGF0aW9uRXZlbnQsXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fZGV0YWNoUG9zaXRpb25pbmdIYW5kbGVyID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuICAgIHZhciBzY3JvbGxFdmVudCA9ICdzY3JvbGwuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciByZXNpemVFdmVudCA9ICdyZXNpemUuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciBvcmllbnRhdGlvbkV2ZW50ID0gJ29yaWVudGF0aW9uY2hhbmdlLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcblxuICAgIHZhciAkd2F0Y2hlcnMgPSB0aGlzLiRjb250YWluZXIucGFyZW50cygpLmZpbHRlcihVdGlscy5oYXNTY3JvbGwpO1xuICAgICR3YXRjaGVycy5vZmYoc2Nyb2xsRXZlbnQpO1xuXG4gICAgJCh3aW5kb3cpLm9mZihzY3JvbGxFdmVudCArICcgJyArIHJlc2l6ZUV2ZW50ICsgJyAnICsgb3JpZW50YXRpb25FdmVudCk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX3Bvc2l0aW9uRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XG5cbiAgICB2YXIgaXNDdXJyZW50bHlBYm92ZSA9IHRoaXMuJGRyb3Bkb3duLmhhc0NsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS1hYm92ZScpO1xuICAgIHZhciBpc0N1cnJlbnRseUJlbG93ID0gdGhpcy4kZHJvcGRvd24uaGFzQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLWJlbG93Jyk7XG5cbiAgICB2YXIgbmV3RGlyZWN0aW9uID0gbnVsbDtcblxuICAgIHZhciBvZmZzZXQgPSB0aGlzLiRjb250YWluZXIub2Zmc2V0KCk7XG5cbiAgICBvZmZzZXQuYm90dG9tID0gb2Zmc2V0LnRvcCArIHRoaXMuJGNvbnRhaW5lci5vdXRlckhlaWdodChmYWxzZSk7XG5cbiAgICB2YXIgY29udGFpbmVyID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLiRjb250YWluZXIub3V0ZXJIZWlnaHQoZmFsc2UpXG4gICAgfTtcblxuICAgIGNvbnRhaW5lci50b3AgPSBvZmZzZXQudG9wO1xuICAgIGNvbnRhaW5lci5ib3R0b20gPSBvZmZzZXQudG9wICsgY29udGFpbmVyLmhlaWdodDtcblxuICAgIHZhciBkcm9wZG93biA9IHtcbiAgICAgIGhlaWdodDogdGhpcy4kZHJvcGRvd24ub3V0ZXJIZWlnaHQoZmFsc2UpXG4gICAgfTtcblxuICAgIHZhciB2aWV3cG9ydCA9IHtcbiAgICAgIHRvcDogJHdpbmRvdy5zY3JvbGxUb3AoKSxcbiAgICAgIGJvdHRvbTogJHdpbmRvdy5zY3JvbGxUb3AoKSArICR3aW5kb3cuaGVpZ2h0KClcbiAgICB9O1xuXG4gICAgdmFyIGVub3VnaFJvb21BYm92ZSA9IHZpZXdwb3J0LnRvcCA8IChvZmZzZXQudG9wIC0gZHJvcGRvd24uaGVpZ2h0KTtcbiAgICB2YXIgZW5vdWdoUm9vbUJlbG93ID0gdmlld3BvcnQuYm90dG9tID4gKG9mZnNldC5ib3R0b20gKyBkcm9wZG93bi5oZWlnaHQpO1xuXG4gICAgdmFyIGNzcyA9IHtcbiAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0LFxuICAgICAgdG9wOiBjb250YWluZXIuYm90dG9tXG4gICAgfTtcblxuICAgIC8vIERldGVybWluZSB3aGF0IHRoZSBwYXJlbnQgZWxlbWVudCBpcyB0byB1c2UgZm9yIGNhbGN1bGF0aW5nIHRoZSBvZmZzZXRcbiAgICB2YXIgJG9mZnNldFBhcmVudCA9IHRoaXMuJGRyb3Bkb3duUGFyZW50O1xuXG4gICAgLy8gRm9yIHN0YXRpY2FsbHkgcG9zaXRpb25lZCBlbGVtZW50cywgd2UgbmVlZCB0byBnZXQgdGhlIGVsZW1lbnRcbiAgICAvLyB0aGF0IGlzIGRldGVybWluaW5nIHRoZSBvZmZzZXRcbiAgICBpZiAoJG9mZnNldFBhcmVudC5jc3MoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAkb2Zmc2V0UGFyZW50ID0gJG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQoKTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50T2Zmc2V0ID0ge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG5cbiAgICBpZiAoXG4gICAgICAkLmNvbnRhaW5zKGRvY3VtZW50LmJvZHksICRvZmZzZXRQYXJlbnRbMF0pIHx8XG4gICAgICAkb2Zmc2V0UGFyZW50WzBdLmlzQ29ubmVjdGVkXG4gICAgICApIHtcbiAgICAgIHBhcmVudE9mZnNldCA9ICRvZmZzZXRQYXJlbnQub2Zmc2V0KCk7XG4gICAgfVxuXG4gICAgY3NzLnRvcCAtPSBwYXJlbnRPZmZzZXQudG9wO1xuICAgIGNzcy5sZWZ0IC09IHBhcmVudE9mZnNldC5sZWZ0O1xuXG4gICAgaWYgKCFpc0N1cnJlbnRseUFib3ZlICYmICFpc0N1cnJlbnRseUJlbG93KSB7XG4gICAgICBuZXdEaXJlY3Rpb24gPSAnYmVsb3cnO1xuICAgIH1cblxuICAgIGlmICghZW5vdWdoUm9vbUJlbG93ICYmIGVub3VnaFJvb21BYm92ZSAmJiAhaXNDdXJyZW50bHlBYm92ZSkge1xuICAgICAgbmV3RGlyZWN0aW9uID0gJ2Fib3ZlJztcbiAgICB9IGVsc2UgaWYgKCFlbm91Z2hSb29tQWJvdmUgJiYgZW5vdWdoUm9vbUJlbG93ICYmIGlzQ3VycmVudGx5QWJvdmUpIHtcbiAgICAgIG5ld0RpcmVjdGlvbiA9ICdiZWxvdyc7XG4gICAgfVxuXG4gICAgaWYgKG5ld0RpcmVjdGlvbiA9PSAnYWJvdmUnIHx8XG4gICAgICAoaXNDdXJyZW50bHlBYm92ZSAmJiBuZXdEaXJlY3Rpb24gIT09ICdiZWxvdycpKSB7XG4gICAgICBjc3MudG9wID0gY29udGFpbmVyLnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBkcm9wZG93bi5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKG5ld0RpcmVjdGlvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLiRkcm9wZG93blxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLWJlbG93IHNlbGVjdDItZHJvcGRvd24tLWFib3ZlJylcbiAgICAgICAgLmFkZENsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS0nICsgbmV3RGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuJGNvbnRhaW5lclxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1iZWxvdyBzZWxlY3QyLWNvbnRhaW5lci0tYWJvdmUnKVxuICAgICAgICAuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS0nICsgbmV3RGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5jc3MoY3NzKTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fcmVzaXplRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNzcyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLiRjb250YWluZXIub3V0ZXJXaWR0aChmYWxzZSkgKyAncHgnXG4gICAgfTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkcm9wZG93bkF1dG9XaWR0aCcpKSB7XG4gICAgICBjc3MubWluV2lkdGggPSBjc3Mud2lkdGg7XG4gICAgICBjc3MucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgY3NzLndpZHRoID0gJ2F1dG8nO1xuICAgIH1cblxuICAgIHRoaXMuJGRyb3Bkb3duLmNzcyhjc3MpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9zaG93RHJvcGRvd24gPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIuYXBwZW5kVG8odGhpcy4kZHJvcGRvd25QYXJlbnQpO1xuXG4gICAgdGhpcy5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgIHRoaXMuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gIH07XG5cbiAgcmV0dXJuIEF0dGFjaEJvZHk7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gY291bnRSZXN1bHRzIChkYXRhKSB7XG4gICAgdmFyIGNvdW50ID0gMDtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGl0ZW0gPSBkYXRhW2RdO1xuXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICBjb3VudCArPSBjb3VudFJlc3VsdHMoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xuICAgIHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSBvcHRpb25zLmdldCgnbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnKTtcblxuICAgIGlmICh0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIDwgMCkge1xuICAgICAgdGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IEluZmluaXR5O1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcik7XG4gIH1cblxuICBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaC5wcm90b3R5cGUuc2hvd1NlYXJjaCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcykge1xuICAgIGlmIChjb3VudFJlc3VsdHMocGFyYW1zLmRhdGEucmVzdWx0cykgPCB0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcyk7XG4gIH07XG5cbiAgcmV0dXJuIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9zZWxlY3RPbkNsb3NlJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBTZWxlY3RPbkNsb3NlICgpIHsgfVxuXG4gIFNlbGVjdE9uQ2xvc2UucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuX2hhbmRsZVNlbGVjdE9uQ2xvc2UocGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RPbkNsb3NlLnByb3RvdHlwZS5faGFuZGxlU2VsZWN0T25DbG9zZSA9IGZ1bmN0aW9uIChfLCBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5vcmlnaW5hbFNlbGVjdDJFdmVudCAhPSBudWxsKSB7XG4gICAgICB2YXIgZXZlbnQgPSBwYXJhbXMub3JpZ2luYWxTZWxlY3QyRXZlbnQ7XG5cbiAgICAgIC8vIERvbid0IHNlbGVjdCBhbiBpdGVtIGlmIHRoZSBjbG9zZSBldmVudCB3YXMgdHJpZ2dlcmVkIGZyb20gYSBzZWxlY3Qgb3JcbiAgICAgIC8vIHVuc2VsZWN0IGV2ZW50XG4gICAgICBpZiAoZXZlbnQuX3R5cGUgPT09ICdzZWxlY3QnIHx8IGV2ZW50Ll90eXBlID09PSAndW5zZWxlY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgJGhpZ2hsaWdodGVkUmVzdWx0cyA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAvLyBPbmx5IHNlbGVjdCBoaWdobGlnaHRlZCByZXN1bHRzXG4gICAgaWYgKCRoaWdobGlnaHRlZFJlc3VsdHMubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSgkaGlnaGxpZ2h0ZWRSZXN1bHRzWzBdLCAnZGF0YScpO1xuXG4gICAgLy8gRG9uJ3QgcmUtc2VsZWN0IGFscmVhZHkgc2VsZWN0ZWQgcmVzdWx0ZVxuICAgIGlmIChcbiAgICAgIChkYXRhLmVsZW1lbnQgIT0gbnVsbCAmJiBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQpIHx8XG4gICAgICAoZGF0YS5lbGVtZW50ID09IG51bGwgJiYgZGF0YS5zZWxlY3RlZClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3RPbkNsb3NlO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9jbG9zZU9uU2VsZWN0JyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2xvc2VPblNlbGVjdCAoKSB7IH1cblxuICBDbG9zZU9uU2VsZWN0LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5fc2VsZWN0VHJpZ2dlcmVkKGV2dCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5fc2VsZWN0VHJpZ2dlcmVkKGV2dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ2xvc2VPblNlbGVjdC5wcm90b3R5cGUuX3NlbGVjdFRyaWdnZXJlZCA9IGZ1bmN0aW9uIChfLCBldnQpIHtcbiAgICB2YXIgb3JpZ2luYWxFdmVudCA9IGV2dC5vcmlnaW5hbEV2ZW50O1xuXG4gICAgLy8gRG9uJ3QgY2xvc2UgaWYgdGhlIGNvbnRyb2wga2V5IGlzIGJlaW5nIGhlbGRcbiAgICBpZiAob3JpZ2luYWxFdmVudCAmJiAob3JpZ2luYWxFdmVudC5jdHJsS2V5IHx8IG9yaWdpbmFsRXZlbnQubWV0YUtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ2Nsb3NlJywge1xuICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcbiAgICAgIG9yaWdpbmFsU2VsZWN0MkV2ZW50OiBldnRcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ2xvc2VPblNlbGVjdDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvaTE4bi9lbicsW10sZnVuY3Rpb24gKCkge1xuICAvLyBFbmdsaXNoXG4gIHJldHVybiB7XG4gICAgZXJyb3JMb2FkaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ1RoZSByZXN1bHRzIGNvdWxkIG5vdCBiZSBsb2FkZWQuJztcbiAgICB9LFxuICAgIGlucHV0VG9vTG9uZzogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHZhciBvdmVyQ2hhcnMgPSBhcmdzLmlucHV0Lmxlbmd0aCAtIGFyZ3MubWF4aW11bTtcblxuICAgICAgdmFyIG1lc3NhZ2UgPSAnUGxlYXNlIGRlbGV0ZSAnICsgb3ZlckNoYXJzICsgJyBjaGFyYWN0ZXInO1xuXG4gICAgICBpZiAob3ZlckNoYXJzICE9IDEpIHtcbiAgICAgICAgbWVzc2FnZSArPSAncyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG4gICAgaW5wdXRUb29TaG9ydDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHZhciByZW1haW5pbmdDaGFycyA9IGFyZ3MubWluaW11bSAtIGFyZ3MuaW5wdXQubGVuZ3RoO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9ICdQbGVhc2UgZW50ZXIgJyArIHJlbWFpbmluZ0NoYXJzICsgJyBvciBtb3JlIGNoYXJhY3RlcnMnO1xuXG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ0xvYWRpbmcgbW9yZSByZXN1bHRz4oCmJztcbiAgICB9LFxuICAgIG1heGltdW1TZWxlY3RlZDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1lvdSBjYW4gb25seSBzZWxlY3QgJyArIGFyZ3MubWF4aW11bSArICcgaXRlbSc7XG5cbiAgICAgIGlmIChhcmdzLm1heGltdW0gIT0gMSkge1xuICAgICAgICBtZXNzYWdlICs9ICdzJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICBub1Jlc3VsdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnTm8gcmVzdWx0cyBmb3VuZCc7XG4gICAgfSxcbiAgICBzZWFyY2hpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnU2VhcmNoaW5n4oCmJztcbiAgICB9LFxuICAgIHJlbW92ZUFsbEl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ1JlbW92ZSBhbGwgaXRlbXMnO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGVmYXVsdHMnLFtcbiAgJ2pxdWVyeScsXG4gICdyZXF1aXJlJyxcblxuICAnLi9yZXN1bHRzJyxcblxuICAnLi9zZWxlY3Rpb24vc2luZ2xlJyxcbiAgJy4vc2VsZWN0aW9uL211bHRpcGxlJyxcbiAgJy4vc2VsZWN0aW9uL3BsYWNlaG9sZGVyJyxcbiAgJy4vc2VsZWN0aW9uL2FsbG93Q2xlYXInLFxuICAnLi9zZWxlY3Rpb24vc2VhcmNoJyxcbiAgJy4vc2VsZWN0aW9uL2V2ZW50UmVsYXknLFxuXG4gICcuL3V0aWxzJyxcbiAgJy4vdHJhbnNsYXRpb24nLFxuICAnLi9kaWFjcml0aWNzJyxcblxuICAnLi9kYXRhL3NlbGVjdCcsXG4gICcuL2RhdGEvYXJyYXknLFxuICAnLi9kYXRhL2FqYXgnLFxuICAnLi9kYXRhL3RhZ3MnLFxuICAnLi9kYXRhL3Rva2VuaXplcicsXG4gICcuL2RhdGEvbWluaW11bUlucHV0TGVuZ3RoJyxcbiAgJy4vZGF0YS9tYXhpbXVtSW5wdXRMZW5ndGgnLFxuICAnLi9kYXRhL21heGltdW1TZWxlY3Rpb25MZW5ndGgnLFxuXG4gICcuL2Ryb3Bkb3duJyxcbiAgJy4vZHJvcGRvd24vc2VhcmNoJyxcbiAgJy4vZHJvcGRvd24vaGlkZVBsYWNlaG9sZGVyJyxcbiAgJy4vZHJvcGRvd24vaW5maW5pdGVTY3JvbGwnLFxuICAnLi9kcm9wZG93bi9hdHRhY2hCb2R5JyxcbiAgJy4vZHJvcGRvd24vbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnLFxuICAnLi9kcm9wZG93bi9zZWxlY3RPbkNsb3NlJyxcbiAgJy4vZHJvcGRvd24vY2xvc2VPblNlbGVjdCcsXG5cbiAgJy4vaTE4bi9lbidcbl0sIGZ1bmN0aW9uICgkLCByZXF1aXJlLFxuXG4gICAgICAgICAgICAgUmVzdWx0c0xpc3QsXG5cbiAgICAgICAgICAgICBTaW5nbGVTZWxlY3Rpb24sIE11bHRpcGxlU2VsZWN0aW9uLCBQbGFjZWhvbGRlciwgQWxsb3dDbGVhcixcbiAgICAgICAgICAgICBTZWxlY3Rpb25TZWFyY2gsIEV2ZW50UmVsYXksXG5cbiAgICAgICAgICAgICBVdGlscywgVHJhbnNsYXRpb24sIERJQUNSSVRJQ1MsXG5cbiAgICAgICAgICAgICBTZWxlY3REYXRhLCBBcnJheURhdGEsIEFqYXhEYXRhLCBUYWdzLCBUb2tlbml6ZXIsXG4gICAgICAgICAgICAgTWluaW11bUlucHV0TGVuZ3RoLCBNYXhpbXVtSW5wdXRMZW5ndGgsIE1heGltdW1TZWxlY3Rpb25MZW5ndGgsXG5cbiAgICAgICAgICAgICBEcm9wZG93biwgRHJvcGRvd25TZWFyY2gsIEhpZGVQbGFjZWhvbGRlciwgSW5maW5pdGVTY3JvbGwsXG4gICAgICAgICAgICAgQXR0YWNoQm9keSwgTWluaW11bVJlc3VsdHNGb3JTZWFyY2gsIFNlbGVjdE9uQ2xvc2UsIENsb3NlT25TZWxlY3QsXG5cbiAgICAgICAgICAgICBFbmdsaXNoVHJhbnNsYXRpb24pIHtcbiAgZnVuY3Rpb24gRGVmYXVsdHMgKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmIChvcHRpb25zLmRhdGFBZGFwdGVyID09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmFqYXggIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gQWpheERhdGE7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBBcnJheURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gU2VsZWN0RGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNaW5pbXVtSW5wdXRMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWF4aW11bUlucHV0TGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNYXhpbXVtSW5wdXRMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWF4aW11bVNlbGVjdGlvbkxlbmd0aCA+IDApIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50YWdzKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShvcHRpb25zLmRhdGFBZGFwdGVyLCBUYWdzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudG9rZW5TZXBhcmF0b3JzICE9IG51bGwgfHwgb3B0aW9ucy50b2tlbml6ZXIgIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBUb2tlbml6ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucXVlcnkgIT0gbnVsbCkge1xuICAgICAgICB2YXIgUXVlcnkgPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvcXVlcnknKTtcblxuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBRdWVyeVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5pbml0U2VsZWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgdmFyIEluaXRTZWxlY3Rpb24gPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvaW5pdFNlbGVjdGlvbicpO1xuXG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIEluaXRTZWxlY3Rpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gUmVzdWx0c0xpc3Q7XG5cbiAgICAgIGlmIChvcHRpb25zLmFqYXggIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlcixcbiAgICAgICAgICBJbmZpbml0ZVNjcm9sbFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wbGFjZWhvbGRlciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIEhpZGVQbGFjZWhvbGRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5zZWxlY3RPbkNsb3NlKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIFNlbGVjdE9uQ2xvc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBEcm9wZG93bjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBTZWFyY2hhYmxlRHJvcGRvd24gPSBVdGlscy5EZWNvcmF0ZShEcm9wZG93biwgRHJvcGRvd25TZWFyY2gpO1xuXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gU2VhcmNoYWJsZURyb3Bkb3duO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCAhPT0gMCkge1xuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICAgIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlcixcbiAgICAgICAgICBDbG9zZU9uU2VsZWN0XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzICE9IG51bGwgfHxcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkNzcyAhPSBudWxsIHx8XG4gICAgICAgIG9wdGlvbnMuYWRhcHREcm9wZG93bkNzc0NsYXNzICE9IG51bGxcbiAgICAgICkge1xuICAgICAgICB2YXIgRHJvcGRvd25DU1MgPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvZHJvcGRvd25Dc3MnKTtcblxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICAgIERyb3Bkb3duQ1NTXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICBBdHRhY2hCb2R5XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gTXVsdGlwbGVTZWxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBTaW5nbGVTZWxlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgcGxhY2Vob2xkZXIgbWl4aW4gaWYgYSBwbGFjZWhvbGRlciB3YXMgc3BlY2lmaWVkXG4gICAgICBpZiAob3B0aW9ucy5wbGFjZWhvbGRlciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBQbGFjZWhvbGRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hbGxvd0NsZWFyKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBBbGxvd0NsZWFyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm11bHRpcGxlKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBTZWxlY3Rpb25TZWFyY2hcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBvcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzICE9IG51bGwgfHxcbiAgICAgICAgb3B0aW9ucy5jb250YWluZXJDc3MgIT0gbnVsbCB8fFxuICAgICAgICBvcHRpb25zLmFkYXB0Q29udGFpbmVyQ3NzQ2xhc3MgIT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHZhciBDb250YWluZXJDU1MgPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvY29udGFpbmVyQ3NzJyk7XG5cbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIENvbnRhaW5lckNTU1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICBFdmVudFJlbGF5XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBkZWZhdWx0cyB3ZXJlIG5vdCBwcmV2aW91c2x5IGFwcGxpZWQgZnJvbSBhbiBlbGVtZW50LCBpdCBpc1xuICAgIC8vIHBvc3NpYmxlIGZvciB0aGUgbGFuZ3VhZ2Ugb3B0aW9uIHRvIGhhdmUgbm90IGJlZW4gcmVzb2x2ZWRcbiAgICBvcHRpb25zLmxhbmd1YWdlID0gdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKG9wdGlvbnMubGFuZ3VhZ2UpO1xuXG4gICAgLy8gQWx3YXlzIGZhbGwgYmFjayB0byBFbmdsaXNoIHNpbmNlIGl0IHdpbGwgYWx3YXlzIGJlIGNvbXBsZXRlXG4gICAgb3B0aW9ucy5sYW5ndWFnZS5wdXNoKCdlbicpO1xuXG4gICAgdmFyIHVuaXF1ZUxhbmd1YWdlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgbCA9IDA7IGwgPCBvcHRpb25zLmxhbmd1YWdlLmxlbmd0aDsgbCsrKSB7XG4gICAgICB2YXIgbGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlW2xdO1xuXG4gICAgICBpZiAodW5pcXVlTGFuZ3VhZ2VzLmluZGV4T2YobGFuZ3VhZ2UpID09PSAtMSkge1xuICAgICAgICB1bmlxdWVMYW5ndWFnZXMucHVzaChsYW5ndWFnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9ucy5sYW5ndWFnZSA9IHVuaXF1ZUxhbmd1YWdlcztcblxuICAgIG9wdGlvbnMudHJhbnNsYXRpb25zID0gdGhpcy5fcHJvY2Vzc1RyYW5zbGF0aW9ucyhcbiAgICAgIG9wdGlvbnMubGFuZ3VhZ2UsXG4gICAgICBvcHRpb25zLmRlYnVnXG4gICAgKTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3MgKHRleHQpIHtcbiAgICAgIC8vIFVzZWQgJ3VuaSByYW5nZSArIG5hbWVkIGZ1bmN0aW9uJyBmcm9tIGh0dHA6Ly9qc3BlcmYuY29tL2RpYWNyaXRpY3MvMThcbiAgICAgIGZ1bmN0aW9uIG1hdGNoKGEpIHtcbiAgICAgICAgcmV0dXJuIERJQUNSSVRJQ1NbYV0gfHwgYTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15cXHUwMDAwLVxcdTAwN0VdL2csIG1hdGNoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaGVyIChwYXJhbXMsIGRhdGEpIHtcbiAgICAgIC8vIEFsd2F5cyByZXR1cm4gdGhlIG9iamVjdCBpZiB0aGVyZSBpcyBub3RoaW5nIHRvIGNvbXBhcmVcbiAgICAgIGlmICgkLnRyaW0ocGFyYW1zLnRlcm0pID09PSAnJykge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgLy8gRG8gYSByZWN1cnNpdmUgY2hlY2sgZm9yIG9wdGlvbnMgd2l0aCBjaGlsZHJlblxuICAgICAgaWYgKGRhdGEuY2hpbGRyZW4gJiYgZGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIENsb25lIHRoZSBkYXRhIG9iamVjdCBpZiB0aGVyZSBhcmUgY2hpbGRyZW5cbiAgICAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBhcyB3ZSBtb2RpZnkgdGhlIG9iamVjdCB0byByZW1vdmUgYW55IG5vbi1tYXRjaGVzXG4gICAgICAgIHZhciBtYXRjaCA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkYXRhKTtcblxuICAgICAgICAvLyBDaGVjayBlYWNoIGNoaWxkIG9mIHRoZSBvcHRpb25cbiAgICAgICAgZm9yICh2YXIgYyA9IGRhdGEuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgYyA+PSAwOyBjLS0pIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBkYXRhLmNoaWxkcmVuW2NdO1xuXG4gICAgICAgICAgdmFyIG1hdGNoZXMgPSBtYXRjaGVyKHBhcmFtcywgY2hpbGQpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgd2Fzbid0IGEgbWF0Y2gsIHJlbW92ZSB0aGUgb2JqZWN0IGluIHRoZSBhcnJheVxuICAgICAgICAgIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICAgICAgICAgIG1hdGNoLmNoaWxkcmVuLnNwbGljZShjLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbnkgY2hpbGRyZW4gbWF0Y2hlZCwgcmV0dXJuIHRoZSBuZXcgb2JqZWN0XG4gICAgICAgIGlmIChtYXRjaC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgd2VyZSBubyBtYXRjaGluZyBjaGlsZHJlbiwgY2hlY2sganVzdCB0aGUgcGxhaW4gb2JqZWN0XG4gICAgICAgIHJldHVybiBtYXRjaGVyKHBhcmFtcywgbWF0Y2gpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZ2luYWwgPSBzdHJpcERpYWNyaXRpY3MoZGF0YS50ZXh0KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgdmFyIHRlcm0gPSBzdHJpcERpYWNyaXRpY3MocGFyYW1zLnRlcm0pLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSB0ZXh0IGNvbnRhaW5zIHRoZSB0ZXJtXG4gICAgICBpZiAob3JpZ2luYWwuaW5kZXhPZih0ZXJtKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBkb2Vzbid0IGNvbnRhaW4gdGhlIHRlcm0sIGRvbid0IHJldHVybiBhbnl0aGluZ1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIGFtZEJhc2U6ICcuLycsXG4gICAgICBhbWRMYW5ndWFnZUJhc2U6ICcuL2kxOG4vJyxcbiAgICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICBkcm9wZG93bkF1dG9XaWR0aDogZmFsc2UsXG4gICAgICBlc2NhcGVNYXJrdXA6IFV0aWxzLmVzY2FwZU1hcmt1cCxcbiAgICAgIGxhbmd1YWdlOiB7fSxcbiAgICAgIG1hdGNoZXI6IG1hdGNoZXIsXG4gICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDAsXG4gICAgICBtYXhpbXVtSW5wdXRMZW5ndGg6IDAsXG4gICAgICBtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoOiAwLFxuICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IDAsXG4gICAgICBzZWxlY3RPbkNsb3NlOiBmYWxzZSxcbiAgICAgIHNjcm9sbEFmdGVyU2VsZWN0OiBmYWxzZSxcbiAgICAgIHNvcnRlcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVSZXN1bHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50ZXh0O1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlU2VsZWN0aW9uOiBmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24udGV4dDtcbiAgICAgIH0sXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnLFxuICAgICAgd2lkdGg6ICdyZXNvbHZlJ1xuICAgIH07XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLmFwcGx5RnJvbUVsZW1lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgJGVsZW1lbnQpIHtcbiAgICB2YXIgb3B0aW9uTGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlO1xuICAgIHZhciBkZWZhdWx0TGFuZ3VhZ2UgPSB0aGlzLmRlZmF1bHRzLmxhbmd1YWdlO1xuICAgIHZhciBlbGVtZW50TGFuZ3VhZ2UgPSAkZWxlbWVudC5wcm9wKCdsYW5nJyk7XG4gICAgdmFyIHBhcmVudExhbmd1YWdlID0gJGVsZW1lbnQuY2xvc2VzdCgnW2xhbmddJykucHJvcCgnbGFuZycpO1xuXG4gICAgdmFyIGxhbmd1YWdlcyA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChcbiAgICAgIHRoaXMuX3Jlc29sdmVMYW5ndWFnZShlbGVtZW50TGFuZ3VhZ2UpLFxuICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKG9wdGlvbkxhbmd1YWdlKSxcbiAgICAgIHRoaXMuX3Jlc29sdmVMYW5ndWFnZShkZWZhdWx0TGFuZ3VhZ2UpLFxuICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKHBhcmVudExhbmd1YWdlKVxuICAgICk7XG5cbiAgICBvcHRpb25zLmxhbmd1YWdlID0gbGFuZ3VhZ2VzO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLl9yZXNvbHZlTGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcbiAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKCQuaXNFbXB0eU9iamVjdChsYW5ndWFnZSkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoJC5pc1BsYWluT2JqZWN0KGxhbmd1YWdlKSkge1xuICAgICAgcmV0dXJuIFtsYW5ndWFnZV07XG4gICAgfVxuXG4gICAgdmFyIGxhbmd1YWdlcztcblxuICAgIGlmICghJC5pc0FycmF5KGxhbmd1YWdlKSkge1xuICAgICAgbGFuZ3VhZ2VzID0gW2xhbmd1YWdlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFuZ3VhZ2VzID0gbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgdmFyIHJlc29sdmVkTGFuZ3VhZ2VzID0gW107XG5cbiAgICBmb3IgKHZhciBsID0gMDsgbCA8IGxhbmd1YWdlcy5sZW5ndGg7IGwrKykge1xuICAgICAgcmVzb2x2ZWRMYW5ndWFnZXMucHVzaChsYW5ndWFnZXNbbF0pO1xuXG4gICAgICBpZiAodHlwZW9mIGxhbmd1YWdlc1tsXSA9PT0gJ3N0cmluZycgJiYgbGFuZ3VhZ2VzW2xdLmluZGV4T2YoJy0nKSA+IDApIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgcmVnaW9uIGluZm9ybWF0aW9uIGlmIGl0IGlzIGluY2x1ZGVkXG4gICAgICAgIHZhciBsYW5ndWFnZVBhcnRzID0gbGFuZ3VhZ2VzW2xdLnNwbGl0KCctJyk7XG4gICAgICAgIHZhciBiYXNlTGFuZ3VhZ2UgPSBsYW5ndWFnZVBhcnRzWzBdO1xuXG4gICAgICAgIHJlc29sdmVkTGFuZ3VhZ2VzLnB1c2goYmFzZUxhbmd1YWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZWRMYW5ndWFnZXM7XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLl9wcm9jZXNzVHJhbnNsYXRpb25zID0gZnVuY3Rpb24gKGxhbmd1YWdlcywgZGVidWcpIHtcbiAgICB2YXIgdHJhbnNsYXRpb25zID0gbmV3IFRyYW5zbGF0aW9uKCk7XG5cbiAgICBmb3IgKHZhciBsID0gMDsgbCA8IGxhbmd1YWdlcy5sZW5ndGg7IGwrKykge1xuICAgICAgdmFyIGxhbmd1YWdlRGF0YSA9IG5ldyBUcmFuc2xhdGlvbigpO1xuXG4gICAgICB2YXIgbGFuZ3VhZ2UgPSBsYW5ndWFnZXNbbF07XG5cbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVHJ5IHRvIGxvYWQgaXQgd2l0aCB0aGUgb3JpZ2luYWwgbmFtZVxuICAgICAgICAgIGxhbmd1YWdlRGF0YSA9IFRyYW5zbGF0aW9uLmxvYWRQYXRoKGxhbmd1YWdlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjb3VsZG4ndCBsb2FkIGl0LCBjaGVjayBpZiBpdCB3YXNuJ3QgdGhlIGZ1bGwgcGF0aFxuICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLmRlZmF1bHRzLmFtZExhbmd1YWdlQmFzZSArIGxhbmd1YWdlO1xuICAgICAgICAgICAgbGFuZ3VhZ2VEYXRhID0gVHJhbnNsYXRpb24ubG9hZFBhdGgobGFuZ3VhZ2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAvLyBUaGUgdHJhbnNsYXRpb24gY291bGQgbm90IGJlIGxvYWRlZCBhdCBhbGwuIFNvbWV0aW1lcyB0aGlzIGlzXG4gICAgICAgICAgICAvLyBiZWNhdXNlIG9mIGEgY29uZmlndXJhdGlvbiBwcm9ibGVtLCBvdGhlciB0aW1lcyB0aGlzIGNhbiBiZVxuICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiBob3cgU2VsZWN0MiBoZWxwcyBsb2FkIGFsbCBwb3NzaWJsZSB0cmFuc2xhdGlvbiBmaWxlc1xuICAgICAgICAgICAgaWYgKGRlYnVnICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBsYW5ndWFnZSBmaWxlIGZvciBcIicgKyBsYW5ndWFnZSArICdcIiBjb3VsZCAnICtcbiAgICAgICAgICAgICAgICAnbm90IGJlIGF1dG9tYXRpY2FsbHkgbG9hZGVkLiBBIGZhbGxiYWNrIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoJC5pc1BsYWluT2JqZWN0KGxhbmd1YWdlKSkge1xuICAgICAgICBsYW5ndWFnZURhdGEgPSBuZXcgVHJhbnNsYXRpb24obGFuZ3VhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFuZ3VhZ2VEYXRhID0gbGFuZ3VhZ2U7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zbGF0aW9ucy5leHRlbmQobGFuZ3VhZ2VEYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25zO1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjYW1lbEtleSA9ICQuY2FtZWxDYXNlKGtleSk7XG5cbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIGRhdGFbY2FtZWxLZXldID0gdmFsdWU7XG5cbiAgICB2YXIgY29udmVydGVkRGF0YSA9IFV0aWxzLl9jb252ZXJ0RGF0YShkYXRhKTtcblxuICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuZGVmYXVsdHMsIGNvbnZlcnRlZERhdGEpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0cyA9IG5ldyBEZWZhdWx0cygpO1xuXG4gIHJldHVybiBkZWZhdWx0cztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvb3B0aW9ucycsW1xuICAncmVxdWlyZScsXG4gICdqcXVlcnknLFxuICAnLi9kZWZhdWx0cycsXG4gICcuL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKHJlcXVpcmUsICQsIERlZmF1bHRzLCBVdGlscykge1xuICBmdW5jdGlvbiBPcHRpb25zIChvcHRpb25zLCAkZWxlbWVudCkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAoJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mcm9tRWxlbWVudCgkZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKCRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IERlZmF1bHRzLmFwcGx5RnJvbUVsZW1lbnQodGhpcy5vcHRpb25zLCAkZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gRGVmYXVsdHMuYXBwbHkodGhpcy5vcHRpb25zKTtcblxuICAgIGlmICgkZWxlbWVudCAmJiAkZWxlbWVudC5pcygnaW5wdXQnKSkge1xuICAgICAgdmFyIElucHV0Q29tcGF0ID0gcmVxdWlyZSh0aGlzLmdldCgnYW1kQmFzZScpICsgJ2NvbXBhdC9pbnB1dERhdGEnKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgIHRoaXMub3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgSW5wdXRDb21wYXRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgT3B0aW9ucy5wcm90b3R5cGUuZnJvbUVsZW1lbnQgPSBmdW5jdGlvbiAoJGUpIHtcbiAgICB2YXIgZXhjbHVkZWREYXRhID0gWydzZWxlY3QyJ107XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm11bHRpcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5tdWx0aXBsZSA9ICRlLnByb3AoJ211bHRpcGxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZWQgPSAkZS5wcm9wKCdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyID09IG51bGwpIHtcbiAgICAgIGlmICgkZS5wcm9wKCdkaXInKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJGUucHJvcCgnZGlyJyk7XG4gICAgICB9IGVsc2UgaWYgKCRlLmNsb3Nlc3QoJ1tkaXJdJykucHJvcCgnZGlyJykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRpciA9ICRlLmNsb3Nlc3QoJ1tkaXJdJykucHJvcCgnZGlyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJ2x0cic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJGUucHJvcCgnZGlzYWJsZWQnLCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQpO1xuICAgICRlLnByb3AoJ211bHRpcGxlJywgdGhpcy5vcHRpb25zLm11bHRpcGxlKTtcblxuICAgIGlmIChVdGlscy5HZXREYXRhKCRlWzBdLCAnc2VsZWN0MlRhZ3MnKSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdTZWxlY3QyOiBUaGUgYGRhdGEtc2VsZWN0Mi10YWdzYCBhdHRyaWJ1dGUgaGFzIGJlZW4gY2hhbmdlZCB0byAnICtcbiAgICAgICAgICAndXNlIHRoZSBgZGF0YS1kYXRhYCBhbmQgYGRhdGEtdGFncz1cInRydWVcImAgYXR0cmlidXRlcyBhbmQgd2lsbCBiZSAnICtcbiAgICAgICAgICAncmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgU2VsZWN0Mi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLlN0b3JlRGF0YSgkZVswXSwgJ2RhdGEnLCBVdGlscy5HZXREYXRhKCRlWzBdLCAnc2VsZWN0MlRhZ3MnKSk7XG4gICAgICBVdGlscy5TdG9yZURhdGEoJGVbMF0sICd0YWdzJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKFV0aWxzLkdldERhdGEoJGVbMF0sICdhamF4VXJsJykpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGVidWcgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnU2VsZWN0MjogVGhlIGBkYXRhLWFqYXgtdXJsYCBhdHRyaWJ1dGUgaGFzIGJlZW4gY2hhbmdlZCB0byAnICtcbiAgICAgICAgICAnYGRhdGEtYWpheC0tdXJsYCBhbmQgc3VwcG9ydCBmb3IgdGhlIG9sZCBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkJyArXG4gICAgICAgICAgJyBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgU2VsZWN0Mi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgICRlLmF0dHIoJ2FqYXgtLXVybCcsIFV0aWxzLkdldERhdGEoJGVbMF0sICdhamF4VXJsJykpO1xuICAgICAgVXRpbHMuU3RvcmVEYXRhKCRlWzBdLCAnYWpheC1VcmwnLCBVdGlscy5HZXREYXRhKCRlWzBdLCAnYWpheFVybCcpKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YXNldCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gdXBwZXJDYXNlTGV0dGVyKF8sIGxldHRlcikge1xuICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIFByZS1sb2FkIGFsbCBvZiB0aGUgYXR0cmlidXRlcyB3aGljaCBhcmUgcHJlZml4ZWQgd2l0aCBgZGF0YS1gXG4gICAgZm9yICh2YXIgYXR0ciA9IDA7IGF0dHIgPCAkZVswXS5hdHRyaWJ1dGVzLmxlbmd0aDsgYXR0cisrKSB7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9ICRlWzBdLmF0dHJpYnV0ZXNbYXR0cl0ubmFtZTtcbiAgICAgIHZhciBwcmVmaXggPSAnZGF0YS0nO1xuXG4gICAgICBpZiAoYXR0cmlidXRlTmFtZS5zdWJzdHIoMCwgcHJlZml4Lmxlbmd0aCkgPT0gcHJlZml4KSB7XG4gICAgICAgIC8vIEdldCB0aGUgY29udGVudHMgb2YgdGhlIGF0dHJpYnV0ZSBhZnRlciBgZGF0YS1gXG4gICAgICAgIHZhciBkYXRhTmFtZSA9IGF0dHJpYnV0ZU5hbWUuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgZGF0YSBjb250ZW50cyBmcm9tIHRoZSBjb25zaXN0ZW50IHNvdXJjZVxuICAgICAgICAvLyBUaGlzIGlzIG1vcmUgdGhhbiBsaWtlbHkgdGhlIGpRdWVyeSBkYXRhIGhlbHBlclxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gVXRpbHMuR2V0RGF0YSgkZVswXSwgZGF0YU5hbWUpO1xuXG4gICAgICAgIC8vIGNhbWVsQ2FzZSB0aGUgYXR0cmlidXRlIG5hbWUgdG8gbWF0Y2ggdGhlIHNwZWNcbiAgICAgICAgdmFyIGNhbWVsRGF0YU5hbWUgPSBkYXRhTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCB1cHBlckNhc2VMZXR0ZXIpO1xuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBkYXRhIGF0dHJpYnV0ZSBjb250ZW50cyBpbnRvIHRoZSBkYXRhc2V0IHNpbmNlXG4gICAgICAgIGRhdGFzZXRbY2FtZWxEYXRhTmFtZV0gPSBkYXRhVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJlZmVyIHRoZSBlbGVtZW50J3MgYGRhdGFzZXRgIGF0dHJpYnV0ZSBpZiBpdCBleGlzdHNcbiAgICAvLyBqUXVlcnkgMS54IGRvZXMgbm90IGNvcnJlY3RseSBoYW5kbGUgZGF0YSBhdHRyaWJ1dGVzIHdpdGggbXVsdGlwbGUgZGFzaGVzXG4gICAgaWYgKCQuZm4uanF1ZXJ5ICYmICQuZm4uanF1ZXJ5LnN1YnN0cigwLCAyKSA9PSAnMS4nICYmICRlWzBdLmRhdGFzZXQpIHtcbiAgICAgIGRhdGFzZXQgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJGVbMF0uZGF0YXNldCwgZGF0YXNldCk7XG4gICAgfVxuXG4gICAgLy8gUHJlZmVyIG91ciBpbnRlcm5hbCBkYXRhIGNhY2hlIGlmIGl0IGV4aXN0c1xuICAgIHZhciBkYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIFV0aWxzLkdldERhdGEoJGVbMF0pLCBkYXRhc2V0KTtcblxuICAgIGRhdGEgPSBVdGlscy5fY29udmVydERhdGEoZGF0YSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKCQuaW5BcnJheShrZXksIGV4Y2x1ZGVkRGF0YSkgPiAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdCh0aGlzLm9wdGlvbnNba2V5XSkpIHtcbiAgICAgICAgJC5leHRlbmQodGhpcy5vcHRpb25zW2tleV0sIGRhdGFba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBPcHRpb25zLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uc1trZXldO1xuICB9O1xuXG4gIE9wdGlvbnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICAgIHRoaXMub3B0aW9uc1trZXldID0gdmFsO1xuICB9O1xuXG4gIHJldHVybiBPcHRpb25zO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9jb3JlJyxbXG4gICdqcXVlcnknLFxuICAnLi9vcHRpb25zJyxcbiAgJy4vdXRpbHMnLFxuICAnLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIE9wdGlvbnMsIFV0aWxzLCBLRVlTKSB7XG4gIHZhciBTZWxlY3QyID0gZnVuY3Rpb24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgaWYgKFV0aWxzLkdldERhdGEoJGVsZW1lbnRbMF0sICdzZWxlY3QyJykgIT0gbnVsbCkge1xuICAgICAgVXRpbHMuR2V0RGF0YSgkZWxlbWVudFswXSwgJ3NlbGVjdDInKS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuXG4gICAgdGhpcy5pZCA9IHRoaXMuX2dlbmVyYXRlSWQoJGVsZW1lbnQpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zLCAkZWxlbWVudCk7XG5cbiAgICBTZWxlY3QyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIHRoZSB0YWJpbmRleFxuXG4gICAgdmFyIHRhYmluZGV4ID0gJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKSB8fCAwO1xuICAgIFV0aWxzLlN0b3JlRGF0YSgkZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcsIHRhYmluZGV4KTtcbiAgICAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgLy8gU2V0IHVwIGNvbnRhaW5lcnMgYW5kIGFkYXB0ZXJzXG5cbiAgICB2YXIgRGF0YUFkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdkYXRhQWRhcHRlcicpO1xuICAgIHRoaXMuZGF0YUFkYXB0ZXIgPSBuZXcgRGF0YUFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgJGNvbnRhaW5lciA9IHRoaXMucmVuZGVyKCk7XG5cbiAgICB0aGlzLl9wbGFjZUNvbnRhaW5lcigkY29udGFpbmVyKTtcblxuICAgIHZhciBTZWxlY3Rpb25BZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgnc2VsZWN0aW9uQWRhcHRlcicpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbkFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy4kc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24ucmVuZGVyKCk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5wb3NpdGlvbih0aGlzLiRzZWxlY3Rpb24sICRjb250YWluZXIpO1xuXG4gICAgdmFyIERyb3Bkb3duQWRhcHRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ2Ryb3Bkb3duQWRhcHRlcicpO1xuICAgIHRoaXMuZHJvcGRvd24gPSBuZXcgRHJvcGRvd25BZGFwdGVyKCRlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuJGRyb3Bkb3duID0gdGhpcy5kcm9wZG93bi5yZW5kZXIoKTtcblxuICAgIHRoaXMuZHJvcGRvd24ucG9zaXRpb24odGhpcy4kZHJvcGRvd24sICRjb250YWluZXIpO1xuXG4gICAgdmFyIFJlc3VsdHNBZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgncmVzdWx0c0FkYXB0ZXInKTtcbiAgICB0aGlzLnJlc3VsdHMgPSBuZXcgUmVzdWx0c0FkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucywgdGhpcy5kYXRhQWRhcHRlcik7XG4gICAgdGhpcy4kcmVzdWx0cyA9IHRoaXMucmVzdWx0cy5yZW5kZXIoKTtcblxuICAgIHRoaXMucmVzdWx0cy5wb3NpdGlvbih0aGlzLiRyZXN1bHRzLCB0aGlzLiRkcm9wZG93bik7XG5cbiAgICAvLyBCaW5kIGV2ZW50c1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQmluZCB0aGUgY29udGFpbmVyIHRvIGFsbCBvZiB0aGUgYWRhcHRlcnNcbiAgICB0aGlzLl9iaW5kQWRhcHRlcnMoKTtcblxuICAgIC8vIFJlZ2lzdGVyIGFueSBET00gZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLl9yZWdpc3RlckRvbUV2ZW50cygpO1xuXG4gICAgLy8gUmVnaXN0ZXIgYW55IGludGVybmFsIGV2ZW50IGhhbmRsZXJzXG4gICAgdGhpcy5fcmVnaXN0ZXJEYXRhRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJSZXN1bHRzRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoaW5pdGlhbERhdGEpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcbiAgICAgICAgZGF0YTogaW5pdGlhbERhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSGlkZSB0aGUgb3JpZ2luYWwgc2VsZWN0XG4gICAgJGVsZW1lbnQuYWRkQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKTtcbiAgICAkZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAvLyBTeW5jaHJvbml6ZSBhbnkgbW9uaXRvcmVkIGF0dHJpYnV0ZXNcbiAgICB0aGlzLl9zeW5jQXR0cmlidXRlcygpO1xuXG4gICAgVXRpbHMuU3RvcmVEYXRhKCRlbGVtZW50WzBdLCAnc2VsZWN0MicsIHRoaXMpO1xuXG4gICAgLy8gRW5zdXJlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggJGVsZW1lbnQuZGF0YSgnc2VsZWN0MicpLlxuICAgICRlbGVtZW50LmRhdGEoJ3NlbGVjdDInLCB0aGlzKTtcbiAgfTtcblxuICBVdGlscy5FeHRlbmQoU2VsZWN0MiwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX2dlbmVyYXRlSWQgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICB2YXIgaWQgPSAnJztcblxuICAgIGlmICgkZWxlbWVudC5hdHRyKCdpZCcpICE9IG51bGwpIHtcbiAgICAgIGlkID0gJGVsZW1lbnQuYXR0cignaWQnKTtcbiAgICB9IGVsc2UgaWYgKCRlbGVtZW50LmF0dHIoJ25hbWUnKSAhPSBudWxsKSB7XG4gICAgICBpZCA9ICRlbGVtZW50LmF0dHIoJ25hbWUnKSArICctJyArIFV0aWxzLmdlbmVyYXRlQ2hhcnMoMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gVXRpbHMuZ2VuZXJhdGVDaGFycyg0KTtcbiAgICB9XG5cbiAgICBpZCA9IGlkLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfCwpL2csICcnKTtcbiAgICBpZCA9ICdzZWxlY3QyLScgKyBpZDtcblxuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcGxhY2VDb250YWluZXIgPSBmdW5jdGlvbiAoJGNvbnRhaW5lcikge1xuICAgICRjb250YWluZXIuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCk7XG5cbiAgICB2YXIgd2lkdGggPSB0aGlzLl9yZXNvbHZlV2lkdGgodGhpcy4kZWxlbWVudCwgdGhpcy5vcHRpb25zLmdldCgnd2lkdGgnKSk7XG5cbiAgICBpZiAod2lkdGggIT0gbnVsbCkge1xuICAgICAgJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgd2lkdGgpO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVzb2x2ZVdpZHRoID0gZnVuY3Rpb24gKCRlbGVtZW50LCBtZXRob2QpIHtcbiAgICB2YXIgV0lEVEggPSAvXndpZHRoOigoWy0rXT8oWzAtOV0qXFwuKT9bMC05XSspKHB4fGVtfGV4fCV8aW58Y218bW18cHR8cGMpKS9pO1xuXG4gICAgaWYgKG1ldGhvZCA9PSAncmVzb2x2ZScpIHtcbiAgICAgIHZhciBzdHlsZVdpZHRoID0gdGhpcy5fcmVzb2x2ZVdpZHRoKCRlbGVtZW50LCAnc3R5bGUnKTtcblxuICAgICAgaWYgKHN0eWxlV2lkdGggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gc3R5bGVXaWR0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVXaWR0aCgkZWxlbWVudCwgJ2VsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09ICdlbGVtZW50Jykge1xuICAgICAgdmFyIGVsZW1lbnRXaWR0aCA9ICRlbGVtZW50Lm91dGVyV2lkdGgoZmFsc2UpO1xuXG4gICAgICBpZiAoZWxlbWVudFdpZHRoIDw9IDApIHtcbiAgICAgICAgcmV0dXJuICdhdXRvJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRXaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgc3R5bGUgPSAkZWxlbWVudC5hdHRyKCdzdHlsZScpO1xuXG4gICAgICBpZiAodHlwZW9mKHN0eWxlKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBhdHRycyA9IHN0eWxlLnNwbGl0KCc7Jyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSA9IGkgKyAxKSB7XG4gICAgICAgIHZhciBhdHRyID0gYXR0cnNbaV0ucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBhdHRyLm1hdGNoKFdJRFRIKTtcblxuICAgICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCAmJiBtYXRjaGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXNbMV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PSAnY29tcHV0ZWRzdHlsZScpIHtcbiAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJGVsZW1lbnRbMF0pO1xuXG4gICAgICByZXR1cm4gY29tcHV0ZWRTdHlsZS53aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9iaW5kQWRhcHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kYXRhQWRhcHRlci5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG4gICAgdGhpcy5zZWxlY3Rpb24uYmluZCh0aGlzLCB0aGlzLiRjb250YWluZXIpO1xuXG4gICAgdGhpcy5kcm9wZG93bi5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG4gICAgdGhpcy5yZXN1bHRzLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEb21FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignY2hhbmdlLnNlbGVjdDInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3Rpb246dXBkYXRlJywge1xuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2ZvY3VzLnNlbGVjdDInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2ZvY3VzJywgZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3N5bmNBID0gVXRpbHMuYmluZCh0aGlzLl9zeW5jQXR0cmlidXRlcywgdGhpcyk7XG4gICAgdGhpcy5fc3luY1MgPSBVdGlscy5iaW5kKHRoaXMuX3N5bmNTdWJ0cmVlLCB0aGlzKTtcblxuICAgIGlmICh0aGlzLiRlbGVtZW50WzBdLmF0dGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmF0dGFjaEV2ZW50KCdvbnByb3BlcnR5Y2hhbmdlJywgdGhpcy5fc3luY0EpO1xuICAgIH1cblxuICAgIHZhciBvYnNlcnZlciA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8XG4gICAgICB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlciB8fFxuICAgICAgd2luZG93Lk1vek11dGF0aW9uT2JzZXJ2ZXJcbiAgICA7XG5cbiAgICBpZiAob2JzZXJ2ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgb2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICBzZWxmLl9zeW5jQSgpO1xuICAgICAgICBzZWxmLl9zeW5jUyhudWxsLCBtdXRhdGlvbnMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuJGVsZW1lbnRbMF0sIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ0RPTUF0dHJNb2RpZmllZCcsXG4gICAgICAgIHNlbGYuX3N5bmNBLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ0RPTU5vZGVJbnNlcnRlZCcsXG4gICAgICAgIHNlbGYuX3N5bmNTLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ0RPTU5vZGVSZW1vdmVkJyxcbiAgICAgICAgc2VsZi5fc3luY1MsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEYXRhRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBub25SZWxheUV2ZW50cyA9IFsndG9nZ2xlJywgJ2ZvY3VzJ107XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5vbigndG9nZ2xlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi50b2dnbGVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5mb2N1cyhwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24ub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBpZiAoJC5pbkFycmF5KG5hbWUsIG5vblJlbGF5RXZlbnRzKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEcm9wZG93bkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRyb3Bkb3duLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyUmVzdWx0c0V2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLnJlc3VsdHMub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignZW5hYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2Rpc2FibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1kaXNhYmxlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdxdWVyeScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIGlmICghc2VsZi5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ29wZW4nLCB7fSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YUFkYXB0ZXIucXVlcnkocGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6YWxsJywge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgcXVlcnk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbigncXVlcnk6YXBwZW5kJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgdGhpcy5kYXRhQWRhcHRlci5xdWVyeShwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czphcHBlbmQnLCB7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBxdWVyeTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBrZXkgPSBldnQud2hpY2g7XG5cbiAgICAgIGlmIChzZWxmLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IEtFWVMuRVNDIHx8IGtleSA9PT0gS0VZUy5UQUIgfHxcbiAgICAgICAgICAgIChrZXkgPT09IEtFWVMuVVAgJiYgZXZ0LmFsdEtleSkpIHtcbiAgICAgICAgICBzZWxmLmNsb3NlKGV2dCk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuRU5URVIpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6c2VsZWN0Jywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGtleSA9PT0gS0VZUy5TUEFDRSAmJiBldnQuY3RybEtleSkpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6dG9nZ2xlJywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBLRVlTLlVQKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOnByZXZpb3VzJywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBLRVlTLkRPV04pIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6bmV4dCcsIHt9KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoa2V5ID09PSBLRVlTLkVOVEVSIHx8IGtleSA9PT0gS0VZUy5TUEFDRSB8fFxuICAgICAgICAgICAgKGtleSA9PT0gS0VZUy5ET1dOICYmIGV2dC5hbHRLZXkpKSB7XG4gICAgICAgICAgc2VsZi5vcGVuKCk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9zeW5jQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuc2V0KCdkaXNhYmxlZCcsIHRoaXMuJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnKSk7XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmlnZ2VyKCdkaXNhYmxlJywge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2VuYWJsZScsIHt9KTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX2lzQ2hhbmdlTXV0YXRpb24gPSBmdW5jdGlvbiAoZXZ0LCBtdXRhdGlvbnMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIElnbm9yZSBhbnkgbXV0YXRpb24gZXZlbnRzIHJhaXNlZCBmb3IgZWxlbWVudHMgdGhhdCBhcmVuJ3Qgb3B0aW9ucyBvclxuICAgIC8vIG9wdGdyb3Vwcy4gVGhpcyBoYW5kbGVzIHRoZSBjYXNlIHdoZW4gdGhlIHNlbGVjdCBlbGVtZW50IGlzIGRlc3Ryb3llZFxuICAgIGlmIChcbiAgICAgIGV2dCAmJiBldnQudGFyZ2V0ICYmIChcbiAgICAgICAgZXZ0LnRhcmdldC5ub2RlTmFtZSAhPT0gJ09QVElPTicgJiYgZXZ0LnRhcmdldC5ub2RlTmFtZSAhPT0gJ09QVEdST1VQJ1xuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghbXV0YXRpb25zKSB7XG4gICAgICAvLyBJZiBtdXRhdGlvbiBldmVudHMgYXJlbid0IHN1cHBvcnRlZCwgdGhlbiB3ZSBjYW4gb25seSBhc3N1bWUgdGhhdCB0aGVcbiAgICAgIC8vIGNoYW5nZSBhZmZlY3RlZCB0aGUgc2VsZWN0aW9uc1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChtdXRhdGlvbnMuYWRkZWROb2RlcyAmJiBtdXRhdGlvbnMuYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG11dGF0aW9ucy5hZGRlZE5vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciBub2RlID0gbXV0YXRpb25zLmFkZGVkTm9kZXNbbl07XG5cbiAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQpIHtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobXV0YXRpb25zLnJlbW92ZWROb2RlcyAmJiBtdXRhdGlvbnMucmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoJC5pc0FycmF5KG11dGF0aW9ucykpIHtcbiAgICAgICQuZWFjaChtdXRhdGlvbnMsIGZ1bmN0aW9uKGV2dCwgbXV0YXRpb24pIHtcbiAgICAgICAgaWYgKHNlbGYuX2lzQ2hhbmdlTXV0YXRpb24oZXZ0LCBtdXRhdGlvbikpIHtcbiAgICAgICAgICAvLyBXZSd2ZSBmb3VuZCBhIGNoYW5nZSBtdXRhdGlvbi5cbiAgICAgICAgICAvLyBMZXQncyBlc2NhcGUgZnJvbSB0aGUgbG9vcCBhbmQgY29udGludWVcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fc3luY1N1YnRyZWUgPSBmdW5jdGlvbiAoZXZ0LCBtdXRhdGlvbnMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IHRoaXMuX2lzQ2hhbmdlTXV0YXRpb24oZXZ0LCBtdXRhdGlvbnMpO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIE9ubHkgcmUtcHVsbCB0aGUgZGF0YSBpZiB3ZSB0aGluayB0aGVyZSBpcyBhIGNoYW5nZVxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICB0aGlzLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcbiAgICAgICAgICBkYXRhOiBjdXJyZW50RGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIHRyaWdnZXIgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgdHJpZ2dlciBwcmUtZXZlbnRzIHdoZW5cbiAgICogdGhlcmUgYXJlIGV2ZW50cyB0aGF0IGNhbiBiZSBwcmV2ZW50ZWQuXG4gICAqL1xuICBTZWxlY3QyLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgICB2YXIgYWN0dWFsVHJpZ2dlciA9IFNlbGVjdDIuX19zdXBlcl9fLnRyaWdnZXI7XG4gICAgdmFyIHByZVRyaWdnZXJNYXAgPSB7XG4gICAgICAnb3Blbic6ICdvcGVuaW5nJyxcbiAgICAgICdjbG9zZSc6ICdjbG9zaW5nJyxcbiAgICAgICdzZWxlY3QnOiAnc2VsZWN0aW5nJyxcbiAgICAgICd1bnNlbGVjdCc6ICd1bnNlbGVjdGluZycsXG4gICAgICAnY2xlYXInOiAnY2xlYXJpbmcnXG4gICAgfTtcblxuICAgIGlmIChhcmdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSBpbiBwcmVUcmlnZ2VyTWFwKSB7XG4gICAgICB2YXIgcHJlVHJpZ2dlck5hbWUgPSBwcmVUcmlnZ2VyTWFwW25hbWVdO1xuICAgICAgdmFyIHByZVRyaWdnZXJBcmdzID0ge1xuICAgICAgICBwcmV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBhcmdzOiBhcmdzXG4gICAgICB9O1xuXG4gICAgICBhY3R1YWxUcmlnZ2VyLmNhbGwodGhpcywgcHJlVHJpZ2dlck5hbWUsIHByZVRyaWdnZXJBcmdzKTtcblxuICAgICAgaWYgKHByZVRyaWdnZXJBcmdzLnByZXZlbnRlZCkge1xuICAgICAgICBhcmdzLnByZXZlbnRlZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFjdHVhbFRyaWdnZXIuY2FsbCh0aGlzLCBuYW1lLCBhcmdzKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS50b2dnbGVEcm9wZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7fSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdjbG9zZScsIHsgb3JpZ2luYWxFdmVudCA6IGV2dCB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJlbmFibGVkXCIgKG5vdCBcImRpc2FibGVkXCIpIHN0YXRlIG9mIHRoaXNcbiAgICogb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgaW5zdGFuY2UgaXMgbm90IGRpc2FibGVkLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGluc3RhbmNlIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaXNFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0Rpc2FibGVkKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gYWJzdHJhY3QgdGhlIFwiZGlzYWJsZWRcIiBzdGF0ZSBvZiB0aGlzIG9iamVjdC5cbiAgICpcbiAgICogQHJldHVybiB7dHJ1ZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyB0cnVlLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyBmYWxzZS5cbiAgICovXG4gIFNlbGVjdDIucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXQoJ2Rpc2FibGVkJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLiRjb250YWluZXIuaGFzQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaGFzRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGNvbnRhaW5lci5oYXNDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vIE5vIG5lZWQgdG8gcmUtdHJpZ2dlciBmb2N1cyBldmVudHMgaWYgd2UgYXJlIGFscmVhZHkgZm9jdXNlZFxuICAgIGlmICh0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1mb2N1cycpO1xuICAgIHRoaXMudHJpZ2dlcignZm9jdXMnLCB7fSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NlbGVjdDI6IFRoZSBgc2VsZWN0MihcImVuYWJsZVwiKWAgbWV0aG9kIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwnICtcbiAgICAgICAgJyBiZSByZW1vdmVkIGluIGxhdGVyIFNlbGVjdDIgdmVyc2lvbnMuIFVzZSAkZWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIiknICtcbiAgICAgICAgJyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MgPT0gbnVsbCB8fCBhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXJncyA9IFt0cnVlXTtcbiAgICB9XG5cbiAgICB2YXIgZGlzYWJsZWQgPSAhYXJnc1swXTtcblxuICAgIHRoaXMuJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCBkaXNhYmxlZCk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJlxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NlbGVjdDI6IERhdGEgY2FuIG5vIGxvbmdlciBiZSBzZXQgdXNpbmcgYHNlbGVjdDIoXCJkYXRhXCIpYC4gWW91ICcgK1xuICAgICAgICAnc2hvdWxkIGNvbnNpZGVyIHNldHRpbmcgdGhlIHZhbHVlIGluc3RlYWQgdXNpbmcgYCRlbGVtZW50LnZhbCgpYC4nXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gW107XG5cbiAgICB0aGlzLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICBkYXRhID0gY3VycmVudERhdGE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU2VsZWN0MjogVGhlIGBzZWxlY3QyKFwidmFsXCIpYCBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZScgK1xuICAgICAgICAnIHJlbW92ZWQgaW4gbGF0ZXIgU2VsZWN0MiB2ZXJzaW9ucy4gVXNlICRlbGVtZW50LnZhbCgpIGluc3RlYWQuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC52YWwoKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3VmFsID0gYXJnc1swXTtcblxuICAgIGlmICgkLmlzQXJyYXkobmV3VmFsKSkge1xuICAgICAgbmV3VmFsID0gJC5tYXAobmV3VmFsLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmoudG9TdHJpbmcoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQudmFsKG5ld1ZhbCkudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIGlmICh0aGlzLiRlbGVtZW50WzBdLmRldGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmRldGFjaEV2ZW50KCdvbnByb3BlcnR5Y2hhbmdlJywgdGhpcy5fc3luY0EpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vYnNlcnZlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF1cbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUF0dHJNb2RpZmllZCcsIHRoaXMuX3N5bmNBLCBmYWxzZSk7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdXG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aGlzLl9zeW5jUywgZmFsc2UpO1xuICAgICAgdGhpcy4kZWxlbWVudFswXVxuICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTm9kZVJlbW92ZWQnLCB0aGlzLl9zeW5jUywgZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuX3N5bmNBID0gbnVsbDtcbiAgICB0aGlzLl9zeW5jUyA9IG51bGw7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLnNlbGVjdDInKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JyxcbiAgICBVdGlscy5HZXREYXRhKHRoaXMuJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnKSk7XG5cbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJyk7XG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIFV0aWxzLlJlbW92ZURhdGEodGhpcy4kZWxlbWVudFswXSk7XG4gICAgdGhpcy4kZWxlbWVudC5yZW1vdmVEYXRhKCdzZWxlY3QyJyk7XG5cbiAgICB0aGlzLmRhdGFBZGFwdGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNlbGVjdGlvbi5kZXN0cm95KCk7XG4gICAgdGhpcy5kcm9wZG93bi5kZXN0cm95KCk7XG4gICAgdGhpcy5yZXN1bHRzLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmRyb3Bkb3duID0gbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBudWxsO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyIHNlbGVjdDItY29udGFpbmVyXCI+JyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdGlvblwiPjwvc3Bhbj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24td3JhcHBlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICAkY29udGFpbmVyLmF0dHIoJ2RpcicsIHRoaXMub3B0aW9ucy5nZXQoJ2RpcicpKTtcblxuICAgIHRoaXMuJGNvbnRhaW5lciA9ICRjb250YWluZXI7XG5cbiAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS0nICsgdGhpcy5vcHRpb25zLmdldCgndGhlbWUnKSk7XG5cbiAgICBVdGlscy5TdG9yZURhdGEoJGNvbnRhaW5lclswXSwgJ2VsZW1lbnQnLCB0aGlzLiRlbGVtZW50KTtcblxuICAgIHJldHVybiAkY29udGFpbmVyO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3QyO1xufSk7XG5cblMyLmRlZmluZSgnanF1ZXJ5LW1vdXNld2hlZWwnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIC8vIFVzZWQgdG8gc2hpbSBqUXVlcnkubW91c2V3aGVlbCBmb3Igbm9uLWZ1bGwgYnVpbGRzLlxuICByZXR1cm4gJDtcbn0pO1xuXG5TMi5kZWZpbmUoJ2pxdWVyeS5zZWxlY3QyJyxbXG4gICdqcXVlcnknLFxuICAnanF1ZXJ5LW1vdXNld2hlZWwnLFxuXG4gICcuL3NlbGVjdDIvY29yZScsXG4gICcuL3NlbGVjdDIvZGVmYXVsdHMnLFxuICAnLi9zZWxlY3QyL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIF8sIFNlbGVjdDIsIERlZmF1bHRzLCBVdGlscykge1xuICBpZiAoJC5mbi5zZWxlY3QyID09IG51bGwpIHtcbiAgICAvLyBBbGwgbWV0aG9kcyB0aGF0IHNob3VsZCByZXR1cm4gdGhlIGVsZW1lbnRcbiAgICB2YXIgdGhpc01ldGhvZHMgPSBbJ29wZW4nLCAnY2xvc2UnLCAnZGVzdHJveSddO1xuXG4gICAgJC5mbi5zZWxlY3QyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlT3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcblxuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBTZWxlY3QyKCQodGhpcyksIGluc3RhbmNlT3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHJldDtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnc2VsZWN0MicpO1xuXG4gICAgICAgICAgaWYgKGluc3RhbmNlID09IG51bGwgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ1RoZSBzZWxlY3QyKFxcJycgKyBvcHRpb25zICsgJ1xcJykgbWV0aG9kIHdhcyBjYWxsZWQgb24gYW4gJyArXG4gICAgICAgICAgICAgICdlbGVtZW50IHRoYXQgaXMgbm90IHVzaW5nIFNlbGVjdDIuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXQgPSBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIHNob3VsZCBiZSByZXR1cm5pbmcgYHRoaXNgXG4gICAgICAgIGlmICgkLmluQXJyYXkob3B0aW9ucywgdGhpc01ldGhvZHMpID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzIGZvciBTZWxlY3QyOiAnICsgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmICgkLmZuLnNlbGVjdDIuZGVmYXVsdHMgPT0gbnVsbCkge1xuICAgICQuZm4uc2VsZWN0Mi5kZWZhdWx0cyA9IERlZmF1bHRzO1xuICB9XG5cbiAgcmV0dXJuIFNlbGVjdDI7XG59KTtcblxuICAvLyBSZXR1cm4gdGhlIEFNRCBsb2FkZXIgY29uZmlndXJhdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCBvdXRzaWRlIG9mIHRoaXMgZmlsZVxuICByZXR1cm4ge1xuICAgIGRlZmluZTogUzIuZGVmaW5lLFxuICAgIHJlcXVpcmU6IFMyLnJlcXVpcmVcbiAgfTtcbn0oKSk7XG5cbiAgLy8gQXV0b2xvYWQgdGhlIGpRdWVyeSBiaW5kaW5nc1xuICAvLyBXZSBrbm93IHRoYXQgYWxsIG9mIHRoZSBtb2R1bGVzIGV4aXN0IGFib3ZlIHRoaXMsIHNvIHdlJ3JlIHNhZmVcbiAgdmFyIHNlbGVjdDIgPSBTMi5yZXF1aXJlKCdqcXVlcnkuc2VsZWN0MicpO1xuXG4gIC8vIEhvbGQgdGhlIEFNRCBtb2R1bGUgcmVmZXJlbmNlcyBvbiB0aGUgalF1ZXJ5IGZ1bmN0aW9uIHRoYXQgd2FzIGp1c3QgbG9hZGVkXG4gIC8vIFRoaXMgYWxsb3dzIFNlbGVjdDIgdG8gdXNlIHRoZSBpbnRlcm5hbCBsb2FkZXIgb3V0c2lkZSBvZiB0aGlzIGZpbGUsIHN1Y2hcbiAgLy8gYXMgaW4gdGhlIGxhbmd1YWdlIGZpbGVzLlxuICBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQgPSBTMjtcblxuICAvLyBSZXR1cm4gdGhlIFNlbGVjdDIgaW5zdGFuY2UgZm9yIGFueW9uZSB3aG8gaXMgaW1wb3J0aW5nIGl0LlxuICByZXR1cm4gc2VsZWN0Mjtcbn0pKTtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IFwic2VsZWN0MlwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gZWxlbWVudHNcclxuICAgIGNvbnN0IGVscyA9IHtcclxuICAgICAgICBiaWxsaW5nX2NvdW50cnk6ICQoXCIjYmlsbGluZ19jb3VudHJ5XCIpLFxyXG4gICAgICAgIGJpbGxpbmdfc3RhdGU6ICQoXCIjYmlsbGluZ19zdGF0ZVwiKSxcclxuICAgICAgICBiaWxsaW5nX2NpdHk6ICQoXCIjYmlsbGluZ19jaXR5XCIpLFxyXG4gICAgICAgIGJpbGxpbmdfY2l0eV9maWVsZDogJChcIiNiaWxsaW5nX2NpdHlfZmllbGRcIiksXHJcbiAgICAgICAgYmlsbGluZ19zdWJkaXN0cmljdDogJChcIiNiaWxsaW5nX3N1YmRpc3RyaWN0XCIpLFxyXG4gICAgICAgIGJpbGxpbmdfc3ViZGlzdHJpY3RfZmllbGQ6ICQoXCIjYmlsbGluZ19zdWJkaXN0cmljdF9maWVsZFwiKSxcclxuXHJcbiAgICAgICAgc2hpcHBpbmdfY291bnRyeTogJChcIiNzaGlwcGluZ19jb3VudHJ5XCIpLFxyXG4gICAgICAgIHNoaXBwaW5nX3N0YXRlOiAkKFwiI3NoaXBwaW5nX3N0YXRlXCIpLFxyXG4gICAgICAgIHNoaXBwaW5nX2NpdHk6ICQoXCIjc2hpcHBpbmdfY2l0eVwiKSxcclxuICAgICAgICBzaGlwcGluZ19jaXR5X2ZpZWxkOiAkKFwiI3NoaXBwaW5nX2NpdHlfZmllbGRcIiksXHJcbiAgICAgICAgc2hpcHBpbmdfc3ViZGlzdHJpY3Q6ICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RcIiksXHJcbiAgICAgICAgc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGQ6ICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGRcIiksXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgc2VsZWN0MlxyXG4gICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3Quc2VsZWN0MigpO1xyXG4gICAgZWxzLnNoaXBwaW5nX3N1YmRpc3RyaWN0LnNlbGVjdDIoKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIGFkZHJlc3MgZmllbGRzXHJcbiAgICBzZG9rcl9iaWxsaW5nX2FkZHJlc3NfZmllbGRzKCk7XHJcbiAgICBzZG9rcl9zaGlwcGluZ19hZGRyZXNzX2ZpZWxkcygpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgYmlsbGluZyBjaXR5IG9wdGlvbnNcclxuICAgIGlmIChlbHMuYmlsbGluZ19jb3VudHJ5LnZhbCgpID09IFwiSURcIikge1xyXG4gICAgICAgIHNkb2tyX2dldF9iaWxsaW5nX2NpdHlfb3B0aW9ucygpO1xyXG4gICAgICAgIHNkb2tyX2dldF9iaWxsaW5nX3N1YmRpc3RyaWN0X29wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHNoaXBwaW5nIGNpdHkgb3B0aW9uc1xyXG4gICAgaWYgKGVscy5zaGlwcGluZ19jb3VudHJ5LnZhbCgpID09IFwiSURcIikge1xyXG4gICAgICAgIHNkb2tyX2dldF9zaGlwcGluZ19jaXR5X29wdGlvbnMoKTtcclxuICAgICAgICBzZG9rcl9nZXRfc2hpcHBpbmdfc3ViZGlzdHJpY3Rfb3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBiaWxsaW5nIGNvdW50cnlcclxuICAgIGVscy5iaWxsaW5nX2NvdW50cnkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNkb2tyX2JpbGxpbmdfYWRkcmVzc19maWVsZHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBiaWxsaW5nIHN0YXRlXHJcbiAgICBlbHMuYmlsbGluZ19zdGF0ZS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3JfZ2V0X2JpbGxpbmdfY2l0eV9vcHRpb25zKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPbiBjaGFuZ2UgYmlsbGluZyBzdGF0ZVxyXG4gICAgJChcIiNiaWxsaW5nX2NpdHlfZmllbGRcIikub24oXCJjaGFuZ2VcIiwgXCIjYmlsbGluZ19jaXR5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZG9rcl9nZXRfYmlsbGluZ19zdWJkaXN0cmljdF9vcHRpb25zKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPbiBjaGFuZ2Ugc2hpcHBpbmcgY291bnRyeVxyXG4gICAgZWxzLnNoaXBwaW5nX2NvdW50cnkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNkb2tyX3NoaXBwaW5nX2FkZHJlc3NfZmllbGRzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPbiBjaGFuZ2Ugc2hpcHBpbmcgc3RhdGVcclxuICAgIGVscy5zaGlwcGluZ19zdGF0ZS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3JfZ2V0X3NoaXBwaW5nX2NpdHlfb3B0aW9ucygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIHNoaXBwaW5nIHN0YXRlXHJcbiAgICAkKFwiI3NoaXBwaW5nX2NpdHlfZmllbGRcIikub24oXCJjaGFuZ2VcIiwgXCIjc2hpcHBpbmdfY2l0eVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3JfZ2V0X3NoaXBwaW5nX3N1YmRpc3RyaWN0X29wdGlvbnMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNob3cgaGlkZSBiaWxsaW5nIHN1YmRpc3RyaWN0XHJcbiAgICBmdW5jdGlvbiBzZG9rcl9iaWxsaW5nX2FkZHJlc3NfZmllbGRzKCkge1xyXG4gICAgICAgIGlmIChlbHMuYmlsbGluZ19jb3VudHJ5LnZhbCgpID09IFwiSURcIikge1xyXG4gICAgICAgICAgICAvLyBTZXR1cCBzdWJkaXN0cmljdFxyXG4gICAgICAgICAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdF9maWVsZFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwibGFiZWxcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKFxyXG4gICAgICAgICAgICAgICAgICAgIGAke3Nkb25na2lyX2xjei5zdWJkaXN0cmljdF90ZXh0fSZuYnNwOzxhYmJyIGNsYXNzPVwicmVxdWlyZWRcIiB0aXRsZT1cInJlcXVpcmVkXCI+KjwvYWJicj5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3RfZmllbGQuZmFkZUluKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXR1cCBjaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbGxpbmdfY2l0eV9zZWxlY3QgPSBgPHNlbGVjdCBuYW1lPVwiYmlsbGluZ19jaXR5XCIgaWQ9XCJiaWxsaW5nX2NpdHlcIiBjbGFzcz1cInNlbGVjdFwiIGF1dG9jb21wbGV0ZT1cImFkZHJlc3MtbGV2ZWwyXCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7c2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dH1cIj48L3NlbGVjdD5gO1xyXG4gICAgICAgICAgICBlbHMuYmlsbGluZ19jaXR5X2ZpZWxkXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCIud29vY29tbWVyY2UtaW5wdXQtd3JhcHBlclwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoYmlsbGluZ19jaXR5X3NlbGVjdCk7XHJcbiAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLnNlbGVjdDIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZXR1cCBzdWJkaXN0cmljdFxyXG4gICAgICAgICAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdF9maWVsZC5mYWRlT3V0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXR1cCBjaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbGxpbmdfY2l0eV9pbnB1dCA9XHJcbiAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dC10ZXh0IFwiIG5hbWU9XCJiaWxsaW5nX2NpdHlcIiBpZD1cImJpbGxpbmdfY2l0eVwiIHBsYWNlaG9sZGVyPVwiXCIgdmFsdWU9XCJcIiBhdXRvY29tcGxldGU9XCJhZGRyZXNzLWxldmVsMlwiPic7XHJcbiAgICAgICAgICAgIGVscy5iaWxsaW5nX2NpdHlfZmllbGRcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihcIi53b29jb21tZXJjZS1pbnB1dC13cmFwcGVyXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChiaWxsaW5nX2NpdHlfaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTaG93IGhpZGUgc2hpcHBpbmcgc3ViZGlzdHJpY3RcclxuICAgIGZ1bmN0aW9uIHNkb2tyX3NoaXBwaW5nX2FkZHJlc3NfZmllbGRzKCkge1xyXG4gICAgICAgIGlmIChlbHMuc2hpcHBpbmdfY291bnRyeS52YWwoKSA9PSBcIklEXCIpIHtcclxuICAgICAgICAgICAgLy8gU2V0dXAgc3ViZGlzdHJpY3RcclxuICAgICAgICAgICAgZWxzLnNoaXBwaW5nX3N1YmRpc3RyaWN0X2ZpZWxkXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCJsYWJlbFwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7c2RvbmdraXJfbGN6LnN1YmRpc3RyaWN0X3RleHR9Jm5ic3A7PGFiYnIgY2xhc3M9XCJyZXF1aXJlZFwiIHRpdGxlPVwicmVxdWlyZWRcIj4qPC9hYmJyPmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGQuZmFkZUluKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXR1cCBjaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBwaW5nX2NpdHlfc2VsZWN0ID0gYDxzZWxlY3QgbmFtZT1cInNoaXBwaW5nX2NpdHlcIiBpZD1cInNoaXBwaW5nX2NpdHlcIiBjbGFzcz1cInNlbGVjdFwiIGF1dG9jb21wbGV0ZT1cImFkZHJlc3MtbGV2ZWwyXCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7c2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dH1cIj48L3NlbGVjdD5gO1xyXG4gICAgICAgICAgICBlbHMuc2hpcHBpbmdfY2l0eV9maWVsZFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwiLndvb2NvbW1lcmNlLWlucHV0LXdyYXBwZXJcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKHNoaXBwaW5nX2NpdHlfc2VsZWN0KTtcclxuICAgICAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLnNlbGVjdDIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZXR1cCBzdWJkaXN0cmljdFxyXG4gICAgICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGQuZmFkZU91dCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0dXAgY2l0eVxyXG4gICAgICAgICAgICBjb25zdCBzaGlwcGluZ19jaXR5X2lucHV0ID1cclxuICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LXRleHQgXCIgbmFtZT1cInNoaXBwaW5nX2NpdHlcIiBpZD1cInNoaXBwaW5nX2NpdHlcIiBwbGFjZWhvbGRlcj1cIlwiIHZhbHVlPVwiXCIgYXV0b2NvbXBsZXRlPVwiYWRkcmVzcy1sZXZlbDJcIj4nO1xyXG4gICAgICAgICAgICBlbHMuc2hpcHBpbmdfY2l0eV9maWVsZFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwiLndvb2NvbW1lcmNlLWlucHV0LXdyYXBwZXJcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKHNoaXBwaW5nX2NpdHlfaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYmlsbGluZyBjaXR5IG9wdGlvbnNcclxuICAgIGZ1bmN0aW9uIHNkb2tyX2dldF9iaWxsaW5nX2NpdHlfb3B0aW9ucygpIHtcclxuICAgICAgICBpZiAoZWxzLmJpbGxpbmdfc3RhdGUudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKFwiI2JpbGxpbmdfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfY2l0aWVzX2J5X3Byb3ZpbmNlX2lkXCIsXHJcbiAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICBwcm92aW5jZV9pZDogZWxzLmJpbGxpbmdfc3RhdGUudmFsKCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNpdGllcyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNiaWxsaW5nX2NpdHlcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLnZhbCgpID09IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3QudmFsKCkgPT0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIGNpdHkuY2l0eV9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGAke2NpdHkudHlwZX0gJHtjaXR5Lm5hbWV9YCksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNiaWxsaW5nX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGVscy5iaWxsaW5nX3N1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHNoaXBwaW5nIGNpdHkgb3B0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2Rva3JfZ2V0X3NoaXBwaW5nX2NpdHlfb3B0aW9ucygpIHtcclxuICAgICAgICBpZiAoZWxzLnNoaXBwaW5nX3N0YXRlLnZhbCgpID09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9nZXRfY2l0aWVzX2J5X3Byb3ZpbmNlX2lkXCIsXHJcbiAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICBwcm92aW5jZV9pZDogZWxzLnNoaXBwaW5nX3N0YXRlLnZhbCgpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaXRpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfY2l0eVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLnZhbCgpID09IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIGVscy5zaGlwcGluZ19zdWJkaXN0cmljdC52YWwoKSA9PSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBjaXR5LmNpdHlfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChgJHtjaXR5LnR5cGV9ICR7Y2l0eS5uYW1lfWApLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGVscy5zaGlwcGluZ19zdWJkaXN0cmljdC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYmlsbGluZyBzdWJkaXN0cmljdCBvcHRpb25zXHJcbiAgICBmdW5jdGlvbiBzZG9rcl9nZXRfYmlsbGluZ19zdWJkaXN0cmljdF9vcHRpb25zKCkge1xyXG4gICAgICAgIGlmICgkKFwiI2JpbGxpbmdfY2l0eVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoXCIjYmlsbGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9zdWJkaXN0cmljdHNfYnlfY2l0eV9pZFwiLFxyXG4gICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgY2l0eV9pZDogJChcIiNiaWxsaW5nX2NpdHlcIikudmFsKCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YmRpc3RyaWN0cyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNiaWxsaW5nX3N1YmRpc3RyaWN0XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfc3ViZGlzdHJpY3RcIikudmFsKCkgPT0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBzdWJkaXN0cmljdHMuZm9yRWFjaCgoc3ViZGlzdHJpY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfc3ViZGlzdHJpY3RcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNiaWxsaW5nX3N1YmRpc3RyaWN0XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjxvcHRpb24+PC9vcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIHN1YmRpc3RyaWN0LnN1YmRpc3RyaWN0X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc3ViZGlzdHJpY3QubmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNiaWxsaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHNoaXBwaW5nIHN1YmRpc3RyaWN0IG9wdGlvbnNcclxuICAgIGZ1bmN0aW9uIHNkb2tyX2dldF9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zKCkge1xyXG4gICAgICAgIGlmICgkKFwiI3NoaXBwaW5nX2NpdHlcIikudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKFwiI3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3N1YmRpc3RyaWN0c19ieV9jaXR5X2lkXCIsXHJcbiAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICBjaXR5X2lkOiAkKFwiI3NoaXBwaW5nX2NpdHlcIikudmFsKCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YmRpc3RyaWN0cyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19zdWJkaXN0cmljdFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19zdWJkaXN0cmljdFwiKS52YWwoKSA9PSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHN1YmRpc3RyaWN0cy5mb3JFYWNoKChzdWJkaXN0cmljdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNkb25na2lyX2xjei5wbGVhc2Vfc2VsZWN0X3RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBzdWJkaXN0cmljdC5zdWJkaXN0cmljdF9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHN1YmRpc3RyaWN0Lm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9