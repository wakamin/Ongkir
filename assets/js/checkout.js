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
    sdokr_get_billing_city_options().then(function () {
      sdokr_set_session_subdistrict("billing", "");
    });
    sdokr_get_billing_subdistrict_options().then(function () {
      sdokr_set_session_subdistrict("billing", "");
    });
  } // Initialize shipping city options


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
          cities.forEach(function (city) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_city").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
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
          subdistricts.forEach(function (subdistrict) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#billing_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
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
          subdistricts.forEach(function (subdistrict) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shipping_subdistrict").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<option></option>").attr("value", "").text(sdongkir_lcz.please_select_text));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsImpRdWVyeSIsIlMyIiwiZm4iLCJzZWxlY3QyIiwiYW1kIiwicmVxdWlyZWpzIiwicmVxdWlyZSIsInVuZGVmIiwibWFpbiIsInJlcSIsIm1ha2VNYXAiLCJoYW5kbGVycyIsImRlZmluZWQiLCJ3YWl0aW5nIiwiY29uZmlnIiwiZGVmaW5pbmciLCJoYXNPd24iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcyIsInNsaWNlIiwianNTdWZmaXhSZWdFeHAiLCJoYXNQcm9wIiwib2JqIiwicHJvcCIsImNhbGwiLCJub3JtYWxpemUiLCJuYW1lIiwiYmFzZU5hbWUiLCJuYW1lUGFydHMiLCJuYW1lU2VnbWVudCIsIm1hcFZhbHVlIiwiZm91bmRNYXAiLCJsYXN0SW5kZXgiLCJmb3VuZEkiLCJmb3VuZFN0YXJNYXAiLCJzdGFySSIsImkiLCJqIiwicGFydCIsIm5vcm1hbGl6ZWRCYXNlUGFydHMiLCJiYXNlUGFydHMiLCJzcGxpdCIsIm1hcCIsInN0YXJNYXAiLCJsZW5ndGgiLCJub2RlSWRDb21wYXQiLCJ0ZXN0IiwicmVwbGFjZSIsImNoYXJBdCIsImNvbmNhdCIsInNwbGljZSIsImpvaW4iLCJtYWtlUmVxdWlyZSIsInJlbE5hbWUiLCJmb3JjZVN5bmMiLCJhcmdzIiwiYXJndW1lbnRzIiwicHVzaCIsImFwcGx5IiwibWFrZU5vcm1hbGl6ZSIsIm1ha2VMb2FkIiwiZGVwTmFtZSIsInZhbHVlIiwiY2FsbERlcCIsIkVycm9yIiwic3BsaXRQcmVmaXgiLCJwcmVmaXgiLCJpbmRleCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJtYWtlUmVsUGFydHMiLCJyZWxQYXJ0cyIsInBsdWdpbiIsInBhcnRzIiwicmVsUmVzb3VyY2VOYW1lIiwiZiIsIm4iLCJwciIsInAiLCJtYWtlQ29uZmlnIiwiZXhwb3J0cyIsImUiLCJtb2R1bGUiLCJpZCIsInVyaSIsImRlcHMiLCJjYWxsYmFjayIsImNqc01vZHVsZSIsInJldCIsImNhbGxiYWNrVHlwZSIsInVzaW5nRXhwb3J0cyIsImxvYWQiLCJ1bmRlZmluZWQiLCJhbHQiLCJzZXRUaW1lb3V0IiwiY2ZnIiwiX2RlZmluZWQiLCJfJCIsIiQiLCJjb25zb2xlIiwiZXJyb3IiLCJVdGlscyIsIkV4dGVuZCIsIkNoaWxkQ2xhc3MiLCJTdXBlckNsYXNzIiwiX19oYXNQcm9wIiwiQmFzZUNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJrZXkiLCJfX3N1cGVyX18iLCJnZXRNZXRob2RzIiwidGhlQ2xhc3MiLCJwcm90byIsIm1ldGhvZHMiLCJtZXRob2ROYW1lIiwibSIsIkRlY29yYXRlIiwiRGVjb3JhdG9yQ2xhc3MiLCJkZWNvcmF0ZWRNZXRob2RzIiwic3VwZXJNZXRob2RzIiwiRGVjb3JhdGVkQ2xhc3MiLCJ1bnNoaWZ0IiwiQXJyYXkiLCJhcmdDb3VudCIsImNhbGxlZENvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJjdHIiLCJzdXBlck1ldGhvZCIsImNhbGxlZE1ldGhvZCIsIm9yaWdpbmFsTWV0aG9kIiwiZGVjb3JhdGVkTWV0aG9kIiwiZCIsIk9ic2VydmFibGUiLCJsaXN0ZW5lcnMiLCJvbiIsImV2ZW50IiwidHJpZ2dlciIsInBhcmFtcyIsIl90eXBlIiwiaW52b2tlIiwibGVuIiwiZ2VuZXJhdGVDaGFycyIsImNoYXJzIiwicmFuZG9tQ2hhciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiYmluZCIsImZ1bmMiLCJjb250ZXh0IiwiX2NvbnZlcnREYXRhIiwiZGF0YSIsIm9yaWdpbmFsS2V5Iiwia2V5cyIsImRhdGFMZXZlbCIsImsiLCJ0b0xvd2VyQ2FzZSIsImhhc1Njcm9sbCIsImVsIiwiJGVsIiwib3ZlcmZsb3dYIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImlubmVyV2lkdGgiLCJzY3JvbGxXaWR0aCIsImVzY2FwZU1hcmt1cCIsIm1hcmt1cCIsInJlcGxhY2VNYXAiLCJTdHJpbmciLCJtYXRjaCIsImFwcGVuZE1hbnkiLCIkZWxlbWVudCIsIiRub2RlcyIsImpxdWVyeSIsInN1YnN0ciIsIiRqcU5vZGVzIiwibm9kZSIsImFkZCIsImFwcGVuZCIsIl9fY2FjaGUiLCJHZXRVbmlxdWVFbGVtZW50SWQiLCJlbGVtZW50Iiwic2VsZWN0MklkIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiU3RvcmVEYXRhIiwiR2V0RGF0YSIsIlJlbW92ZURhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJSZXN1bHRzIiwib3B0aW9ucyIsImRhdGFBZGFwdGVyIiwicmVuZGVyIiwiJHJlc3VsdHMiLCJnZXQiLCJhdHRyIiwiY2xlYXIiLCJlbXB0eSIsImRpc3BsYXlNZXNzYWdlIiwiaGlkZUxvYWRpbmciLCIkbWVzc2FnZSIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJoaWRlTWVzc2FnZXMiLCJmaW5kIiwicmVtb3ZlIiwiJG9wdGlvbnMiLCJyZXN1bHRzIiwiY2hpbGRyZW4iLCJzb3J0IiwiaXRlbSIsIiRvcHRpb24iLCJvcHRpb24iLCJwb3NpdGlvbiIsIiRkcm9wZG93biIsIiRyZXN1bHRzQ29udGFpbmVyIiwic29ydGVyIiwiaGlnaGxpZ2h0Rmlyc3RJdGVtIiwiJHNlbGVjdGVkIiwiZmlsdGVyIiwiZmlyc3QiLCJlbnN1cmVIaWdobGlnaHRWaXNpYmxlIiwic2V0Q2xhc3NlcyIsInNlbGYiLCJjdXJyZW50Iiwic2VsZWN0ZWQiLCJzZWxlY3RlZElkcyIsInMiLCJlYWNoIiwiaW5BcnJheSIsInNob3dMb2FkaW5nIiwibG9hZGluZ01vcmUiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJ0ZXh0IiwiJGxvYWRpbmciLCJwcmVwZW5kIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cnMiLCJtYXRjaGVzIiwid2luZG93IiwiRWxlbWVudCIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiX3Jlc3VsdElkIiwidGl0bGUiLCJyb2xlIiwidmFsIiwibGFiZWwiLCIkbGFiZWwiLCJ0ZW1wbGF0ZSIsIiRjaGlsZHJlbiIsImMiLCJjaGlsZCIsIiRjaGlsZCIsIiRjaGlsZHJlbkNvbnRhaW5lciIsImNvbnRhaW5lciIsIiRjb250YWluZXIiLCJpc09wZW4iLCJyZW1vdmVBdHRyIiwiJGhpZ2hsaWdodGVkIiwiZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzIiwiY3VycmVudEluZGV4IiwibmV4dEluZGV4IiwiJG5leHQiLCJlcSIsImN1cnJlbnRPZmZzZXQiLCJvZmZzZXQiLCJ0b3AiLCJuZXh0VG9wIiwibmV4dE9mZnNldCIsInNjcm9sbFRvcCIsIm91dGVySGVpZ2h0IiwibmV4dEJvdHRvbSIsImFkZENsYXNzIiwibW91c2V3aGVlbCIsImJvdHRvbSIsImRlbHRhWSIsImlzQXRUb3AiLCJpc0F0Qm90dG9tIiwiaGVpZ2h0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJldnQiLCIkdGhpcyIsIm9yaWdpbmFsRXZlbnQiLCJyZW1vdmVDbGFzcyIsImRlc3Ryb3kiLCJvZmZzZXREZWx0YSIsInJlc3VsdCIsImNvbnRlbnQiLCJkaXNwbGF5IiwiaW5uZXJIVE1MIiwiS0VZUyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDIiwiU1BBQ0UiLCJQQUdFX1VQIiwiUEFHRV9ET1dOIiwiRU5EIiwiSE9NRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIkRFTEVURSIsIkJhc2VTZWxlY3Rpb24iLCIkc2VsZWN0aW9uIiwiX3RhYmluZGV4IiwicmVzdWx0c0lkIiwiX2hhbmRsZUJsdXIiLCJ3aGljaCIsInVwZGF0ZSIsIl9hdHRhY2hDbG9zZUhhbmRsZXIiLCJfZGV0YWNoQ2xvc2VIYW5kbGVyIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwiYm9keSIsIiR0YXJnZXQiLCJ0YXJnZXQiLCIkc2VsZWN0IiwiY2xvc2VzdCIsIiRhbGwiLCJvZmYiLCIkc2VsZWN0aW9uQ29udGFpbmVyIiwiaXNFbmFibGVkIiwiaXNEaXNhYmxlZCIsIlNpbmdsZVNlbGVjdGlvbiIsImh0bWwiLCIkcmVuZGVyZWQiLCJzZWxlY3Rpb25Db250YWluZXIiLCJzZWxlY3Rpb24iLCJmb3JtYXR0ZWQiLCJNdWx0aXBsZVNlbGVjdGlvbiIsIiRyZW1vdmUiLCJwYXJlbnQiLCIkc2VsZWN0aW9ucyIsIlBsYWNlaG9sZGVyIiwiZGVjb3JhdGVkIiwicGxhY2Vob2xkZXIiLCJub3JtYWxpemVQbGFjZWhvbGRlciIsIl8iLCJjcmVhdGVQbGFjZWhvbGRlciIsIiRwbGFjZWhvbGRlciIsInNpbmdsZVBsYWNlaG9sZGVyIiwibXVsdGlwbGVTZWxlY3Rpb25zIiwiQWxsb3dDbGVhciIsIl9oYW5kbGVDbGVhciIsIl9oYW5kbGVLZXlib2FyZENsZWFyIiwiJGNsZWFyIiwicHJldmlvdXNWYWwiLCJ1bnNlbGVjdERhdGEiLCJwcmV2ZW50ZWQiLCJyZW1vdmVBbGwiLCJTZWFyY2giLCIkc2VhcmNoIiwiJHNlYXJjaENvbnRhaW5lciIsIl90cmFuc2ZlclRhYkluZGV4IiwiX2tleVVwUHJldmVudGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiJHByZXZpb3VzQ2hvaWNlIiwicHJldiIsInNlYXJjaFJlbW92ZUNob2ljZSIsIm1zaWUiLCJkb2N1bWVudE1vZGUiLCJkaXNhYmxlSW5wdXRFdmVudHMiLCJ0eXBlIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoSGFkRm9jdXMiLCJyZXNpemVTZWFyY2giLCJpbnB1dCIsInRlcm0iLCJjc3MiLCJ3aWR0aCIsIm1pbmltdW1XaWR0aCIsIkV2ZW50UmVsYXkiLCJyZWxheUV2ZW50cyIsInByZXZlbnRhYmxlRXZlbnRzIiwiRXZlbnQiLCJUcmFuc2xhdGlvbiIsImRpY3QiLCJhbGwiLCJleHRlbmQiLCJ0cmFuc2xhdGlvbiIsIl9jYWNoZSIsImxvYWRQYXRoIiwicGF0aCIsInRyYW5zbGF0aW9ucyIsImRpYWNyaXRpY3MiLCJCYXNlQWRhcHRlciIsInF1ZXJ5IiwiZ2VuZXJhdGVSZXN1bHRJZCIsIlNlbGVjdEFkYXB0ZXIiLCJzZWxlY3QiLCJpcyIsImN1cnJlbnREYXRhIiwidW5zZWxlY3QiLCJhZGRPcHRpb25zIiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJub3JtYWxpemVkRGF0YSIsIl9ub3JtYWxpemVJdGVtIiwiZGVmYXVsdHMiLCJtYXRjaGVyIiwiQXJyYXlBZGFwdGVyIiwiX2RhdGFUb0NvbnZlcnQiLCJjb252ZXJ0VG9PcHRpb25zIiwiZWxtIiwiJGV4aXN0aW5nIiwiZXhpc3RpbmdJZHMiLCJvbmx5SXRlbSIsIiRleGlzdGluZ09wdGlvbiIsImV4aXN0aW5nRGF0YSIsIm5ld0RhdGEiLCIkbmV3T3B0aW9uIiwicmVwbGFjZVdpdGgiLCJBamF4QWRhcHRlciIsImFqYXhPcHRpb25zIiwiX2FwcGx5RGVmYXVsdHMiLCJwcm9jZXNzUmVzdWx0cyIsInEiLCJ0cmFuc3BvcnQiLCJzdWNjZXNzIiwiZmFpbHVyZSIsIiRyZXF1ZXN0IiwiYWpheCIsInRoZW4iLCJmYWlsIiwiX3JlcXVlc3QiLCJpc0Z1bmN0aW9uIiwiYWJvcnQiLCJ1cmwiLCJyZXF1ZXN0IiwiaXNBcnJheSIsInN0YXR1cyIsImRlbGF5IiwiX3F1ZXJ5VGltZW91dCIsImNsZWFyVGltZW91dCIsIlRhZ3MiLCJ0YWdzIiwiY3JlYXRlVGFnIiwiaW5zZXJ0VGFnIiwidCIsInRhZyIsIl9yZW1vdmVPbGRUYWdzIiwicGFnZSIsIndyYXBwZXIiLCJjaGVja0NoaWxkcmVuIiwib3B0aW9uVGV4dCIsInRvVXBwZXJDYXNlIiwicGFyYW1zVGVybSIsImNoZWNrVGV4dCIsInRyaW0iLCJUb2tlbml6ZXIiLCJ0b2tlbml6ZXIiLCJkcm9wZG93biIsImNyZWF0ZUFuZFNlbGVjdCIsIiRleGlzdGluZ09wdGlvbnMiLCJ0b2tlbkRhdGEiLCJzZXBhcmF0b3JzIiwidGVybUNoYXIiLCJwYXJ0UGFyYW1zIiwiTWluaW11bUlucHV0TGVuZ3RoIiwiJGUiLCJtaW5pbXVtSW5wdXRMZW5ndGgiLCJtaW5pbXVtIiwiTWF4aW11bUlucHV0TGVuZ3RoIiwibWF4aW11bUlucHV0TGVuZ3RoIiwibWF4aW11bSIsIk1heGltdW1TZWxlY3Rpb25MZW5ndGgiLCJtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoIiwiX2NoZWNrSWZNYXhpbXVtU2VsZWN0ZWQiLCJzdWNjZXNzQ2FsbGJhY2siLCJjb3VudCIsIkRyb3Bkb3duIiwic2hvd1NlYXJjaCIsIkhpZGVQbGFjZWhvbGRlciIsInJlbW92ZVBsYWNlaG9sZGVyIiwibW9kaWZpZWREYXRhIiwiSW5maW5pdGVTY3JvbGwiLCJsYXN0UGFyYW1zIiwiJGxvYWRpbmdNb3JlIiwiY3JlYXRlTG9hZGluZ01vcmUiLCJzaG93TG9hZGluZ01vcmUiLCJsb2FkTW9yZUlmTmVlZGVkIiwiaXNMb2FkTW9yZVZpc2libGUiLCJkb2N1bWVudEVsZW1lbnQiLCJsb2FkaW5nTW9yZU9mZnNldCIsImxvYWRNb3JlIiwicGFnaW5hdGlvbiIsIm1vcmUiLCJBdHRhY2hCb2R5IiwiJGRyb3Bkb3duUGFyZW50IiwiX3Nob3dEcm9wZG93biIsIl9hdHRhY2hQb3NpdGlvbmluZ0hhbmRsZXIiLCJfYmluZENvbnRhaW5lclJlc3VsdEhhbmRsZXJzIiwiX2hpZGVEcm9wZG93biIsIl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIiLCIkZHJvcGRvd25Db250YWluZXIiLCJkZXRhY2giLCJfY29udGFpbmVyUmVzdWx0c0hhbmRsZXJzQm91bmQiLCJfcG9zaXRpb25Ecm9wZG93biIsIl9yZXNpemVEcm9wZG93biIsInNjcm9sbEV2ZW50IiwicmVzaXplRXZlbnQiLCJvcmllbnRhdGlvbkV2ZW50IiwiJHdhdGNoZXJzIiwicGFyZW50cyIsIngiLCJzY3JvbGxMZWZ0IiwieSIsImV2IiwiJHdpbmRvdyIsImlzQ3VycmVudGx5QWJvdmUiLCJoYXNDbGFzcyIsImlzQ3VycmVudGx5QmVsb3ciLCJuZXdEaXJlY3Rpb24iLCJ2aWV3cG9ydCIsImVub3VnaFJvb21BYm92ZSIsImVub3VnaFJvb21CZWxvdyIsImxlZnQiLCIkb2Zmc2V0UGFyZW50Iiwib2Zmc2V0UGFyZW50IiwicGFyZW50T2Zmc2V0IiwiaXNDb25uZWN0ZWQiLCJvdXRlcldpZHRoIiwibWluV2lkdGgiLCJhcHBlbmRUbyIsImNvdW50UmVzdWx0cyIsIk1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwibWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJJbmZpbml0eSIsIlNlbGVjdE9uQ2xvc2UiLCJfaGFuZGxlU2VsZWN0T25DbG9zZSIsIm9yaWdpbmFsU2VsZWN0MkV2ZW50IiwiJGhpZ2hsaWdodGVkUmVzdWx0cyIsIkNsb3NlT25TZWxlY3QiLCJfc2VsZWN0VHJpZ2dlcmVkIiwiY3RybEtleSIsIm1ldGFLZXkiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJvdmVyQ2hhcnMiLCJpbnB1dFRvb1Nob3J0IiwicmVtYWluaW5nQ2hhcnMiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJyZW1vdmVBbGxJdGVtcyIsIlJlc3VsdHNMaXN0IiwiU2VsZWN0aW9uU2VhcmNoIiwiRElBQ1JJVElDUyIsIlNlbGVjdERhdGEiLCJBcnJheURhdGEiLCJBamF4RGF0YSIsIkRyb3Bkb3duU2VhcmNoIiwiRW5nbGlzaFRyYW5zbGF0aW9uIiwiRGVmYXVsdHMiLCJyZXNldCIsInRva2VuU2VwYXJhdG9ycyIsIlF1ZXJ5IiwiYW1kQmFzZSIsImluaXRTZWxlY3Rpb24iLCJJbml0U2VsZWN0aW9uIiwicmVzdWx0c0FkYXB0ZXIiLCJzZWxlY3RPbkNsb3NlIiwiZHJvcGRvd25BZGFwdGVyIiwibXVsdGlwbGUiLCJTZWFyY2hhYmxlRHJvcGRvd24iLCJjbG9zZU9uU2VsZWN0IiwiZHJvcGRvd25Dc3NDbGFzcyIsImRyb3Bkb3duQ3NzIiwiYWRhcHREcm9wZG93bkNzc0NsYXNzIiwiRHJvcGRvd25DU1MiLCJzZWxlY3Rpb25BZGFwdGVyIiwiYWxsb3dDbGVhciIsImNvbnRhaW5lckNzc0NsYXNzIiwiY29udGFpbmVyQ3NzIiwiYWRhcHRDb250YWluZXJDc3NDbGFzcyIsIkNvbnRhaW5lckNTUyIsImxhbmd1YWdlIiwiX3Jlc29sdmVMYW5ndWFnZSIsInVuaXF1ZUxhbmd1YWdlcyIsImwiLCJfcHJvY2Vzc1RyYW5zbGF0aW9ucyIsImRlYnVnIiwic3RyaXBEaWFjcml0aWNzIiwiYSIsIm9yaWdpbmFsIiwiYW1kTGFuZ3VhZ2VCYXNlIiwiZHJvcGRvd25BdXRvV2lkdGgiLCJzY3JvbGxBZnRlclNlbGVjdCIsInRlbXBsYXRlUmVzdWx0IiwidGVtcGxhdGVTZWxlY3Rpb24iLCJ0aGVtZSIsImFwcGx5RnJvbUVsZW1lbnQiLCJvcHRpb25MYW5ndWFnZSIsImRlZmF1bHRMYW5ndWFnZSIsImVsZW1lbnRMYW5ndWFnZSIsInBhcmVudExhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiaXNFbXB0eU9iamVjdCIsImlzUGxhaW5PYmplY3QiLCJyZXNvbHZlZExhbmd1YWdlcyIsImxhbmd1YWdlUGFydHMiLCJiYXNlTGFuZ3VhZ2UiLCJsYW5ndWFnZURhdGEiLCJleCIsIndhcm4iLCJzZXQiLCJjYW1lbEtleSIsImNhbWVsQ2FzZSIsImNvbnZlcnRlZERhdGEiLCJPcHRpb25zIiwiZnJvbUVsZW1lbnQiLCJJbnB1dENvbXBhdCIsImV4Y2x1ZGVkRGF0YSIsImRpciIsImRhdGFzZXQiLCJ1cHBlckNhc2VMZXR0ZXIiLCJsZXR0ZXIiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlTmFtZSIsImRhdGFOYW1lIiwiZGF0YVZhbHVlIiwiY2FtZWxEYXRhTmFtZSIsIlNlbGVjdDIiLCJfZ2VuZXJhdGVJZCIsInRhYmluZGV4IiwiRGF0YUFkYXB0ZXIiLCJfcGxhY2VDb250YWluZXIiLCJTZWxlY3Rpb25BZGFwdGVyIiwiRHJvcGRvd25BZGFwdGVyIiwiUmVzdWx0c0FkYXB0ZXIiLCJfYmluZEFkYXB0ZXJzIiwiX3JlZ2lzdGVyRG9tRXZlbnRzIiwiX3JlZ2lzdGVyRGF0YUV2ZW50cyIsIl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cyIsIl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzIiwiX3JlZ2lzdGVyUmVzdWx0c0V2ZW50cyIsIl9yZWdpc3RlckV2ZW50cyIsImluaXRpYWxEYXRhIiwiX3N5bmNBdHRyaWJ1dGVzIiwiaW5zZXJ0QWZ0ZXIiLCJfcmVzb2x2ZVdpZHRoIiwibWV0aG9kIiwiV0lEVEgiLCJzdHlsZVdpZHRoIiwiZWxlbWVudFdpZHRoIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJfc3luY0EiLCJfc3luY1MiLCJfc3luY1N1YnRyZWUiLCJhdHRhY2hFdmVudCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwiX29ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhZGRFdmVudExpc3RlbmVyIiwibm9uUmVsYXlFdmVudHMiLCJ0b2dnbGVEcm9wZG93biIsImZvY3VzIiwiYWx0S2V5IiwiY2xvc2UiLCJvcGVuIiwiX2lzQ2hhbmdlTXV0YXRpb24iLCJjaGFuZ2VkIiwibm9kZU5hbWUiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwibXV0YXRpb24iLCJhY3R1YWxUcmlnZ2VyIiwicHJlVHJpZ2dlck1hcCIsInByZVRyaWdnZXJOYW1lIiwicHJlVHJpZ2dlckFyZ3MiLCJoYXNGb2N1cyIsImVuYWJsZSIsIm5ld1ZhbCIsImRldGFjaEV2ZW50IiwiZGlzY29ubmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVEYXRhIiwidGhpc01ldGhvZHMiLCJpbnN0YW5jZU9wdGlvbnMiLCJpbnN0YW5jZSIsInJlYWR5IiwiZWxzIiwiYmlsbGluZ19jb3VudHJ5IiwiYmlsbGluZ19zdGF0ZSIsImJpbGxpbmdfY2l0eSIsImJpbGxpbmdfY2l0eV9maWVsZCIsImJpbGxpbmdfc3ViZGlzdHJpY3QiLCJiaWxsaW5nX3N1YmRpc3RyaWN0X2ZpZWxkIiwic2hpcHBpbmdfY291bnRyeSIsInNoaXBwaW5nX3N0YXRlIiwic2hpcHBpbmdfY2l0eSIsInNoaXBwaW5nX2NpdHlfZmllbGQiLCJzaGlwcGluZ19zdWJkaXN0cmljdCIsInNoaXBwaW5nX3N1YmRpc3RyaWN0X2ZpZWxkIiwic2Rva3JfYmlsbGluZ19hZGRyZXNzX2ZpZWxkcyIsInNkb2tyX3NoaXBwaW5nX2FkZHJlc3NfZmllbGRzIiwic2Rva3JfZ2V0X2JpbGxpbmdfY2l0eV9vcHRpb25zIiwic2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3QiLCJzZG9rcl9nZXRfYmlsbGluZ19zdWJkaXN0cmljdF9vcHRpb25zIiwic2Rva3JfZ2V0X3NoaXBwaW5nX2NpdHlfb3B0aW9ucyIsInNkb2tyX2dldF9zaGlwcGluZ19zdWJkaXN0cmljdF9vcHRpb25zIiwic2RvbmdraXJfbGN6Iiwic3ViZGlzdHJpY3RfdGV4dCIsImZhZGVJbiIsImJpbGxpbmdfY2l0eV9zZWxlY3QiLCJwbGVhc2Vfc2VsZWN0X3RleHQiLCJmYWRlT3V0IiwiYmlsbGluZ19jaXR5X2lucHV0Iiwic2hpcHBpbmdfY2l0eV9zZWxlY3QiLCJzaGlwcGluZ19jaXR5X2lucHV0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhamF4dXJsIiwiYWN0aW9uIiwibm9uY2VfYWpheCIsIm5vbmNlIiwicHJvdmluY2VfaWQiLCJyZXMiLCJjaXRpZXMiLCJmb3JFYWNoIiwiY2l0eSIsImNpdHlfaWQiLCJlcnIiLCJzdWJkaXN0cmljdHMiLCJzdWJkaXN0cmljdCIsInN1YmRpc3RyaWN0X2lkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QmYsa0JBQVUsR0E1Qks7QUE2QmYsa0JBQVUsR0E3Qks7QUE4QmYsa0JBQVUsR0E5Qks7QUErQmYsa0JBQVUsR0EvQks7QUFnQ2Ysa0JBQVUsR0FoQ0s7QUFpQ2Ysa0JBQVUsR0FqQ0s7QUFrQ2Ysa0JBQVUsSUFsQ0s7QUFtQ2YsZ0JBQVUsSUFuQ0s7QUFvQ2Ysa0JBQVUsSUFwQ0s7QUFxQ2Ysa0JBQVUsSUFyQ0s7QUFzQ2Ysa0JBQVUsSUF0Q0s7QUF1Q2Ysa0JBQVUsSUF2Q0s7QUF3Q2Ysa0JBQVUsSUF4Q0s7QUF5Q2Ysa0JBQVUsSUF6Q0s7QUEwQ2Ysa0JBQVUsSUExQ0s7QUEyQ2Ysa0JBQVUsR0EzQ0s7QUE0Q2Ysa0JBQVUsR0E1Q0s7QUE2Q2Ysa0JBQVUsR0E3Q0s7QUE4Q2Ysa0JBQVUsR0E5Q0s7QUErQ2Ysa0JBQVUsR0EvQ0s7QUFnRGYsa0JBQVUsR0FoREs7QUFpRGYsa0JBQVUsR0FqREs7QUFrRGYsa0JBQVUsR0FsREs7QUFtRGYsa0JBQVUsR0FuREs7QUFvRGYsa0JBQVUsR0FwREs7QUFxRGYsa0JBQVUsR0FyREs7QUFzRGYsa0JBQVUsR0F0REs7QUF1RGYsa0JBQVUsR0F2REs7QUF3RGYsa0JBQVUsR0F4REs7QUF5RGYsZ0JBQVUsR0F6REs7QUEwRGYsa0JBQVUsR0ExREs7QUEyRGYsa0JBQVUsR0EzREs7QUE0RGYsa0JBQVUsR0E1REs7QUE2RGYsa0JBQVUsR0E3REs7QUE4RGYsa0JBQVUsR0E5REs7QUErRGYsa0JBQVUsR0EvREs7QUFnRWYsa0JBQVUsR0FoRUs7QUFpRWYsa0JBQVUsR0FqRUs7QUFrRWYsa0JBQVUsR0FsRUs7QUFtRWYsa0JBQVUsR0FuRUs7QUFvRWYsa0JBQVUsR0FwRUs7QUFxRWYsa0JBQVUsR0FyRUs7QUFzRWYsa0JBQVUsR0F0RUs7QUF1RWYsa0JBQVUsR0F2RUs7QUF3RWYsa0JBQVUsR0F4RUs7QUF5RWYsa0JBQVUsR0F6RUs7QUEwRWYsa0JBQVUsR0ExRUs7QUEyRWYsa0JBQVUsSUEzRUs7QUE0RWYsa0JBQVUsSUE1RUs7QUE2RWYsa0JBQVUsSUE3RUs7QUE4RWYsa0JBQVUsSUE5RUs7QUErRWYsa0JBQVUsR0EvRUs7QUFnRmYsa0JBQVUsR0FoRks7QUFpRmYsZ0JBQVUsR0FqRks7QUFrRmYsZ0JBQVUsR0FsRks7QUFtRmYsZ0JBQVUsR0FuRks7QUFvRmYsa0JBQVUsR0FwRks7QUFxRmYsa0JBQVUsR0FyRks7QUFzRmYsa0JBQVUsR0F0Rks7QUF1RmYsa0JBQVUsR0F2Rks7QUF3RmYsa0JBQVUsR0F4Rks7QUF5RmYsa0JBQVUsR0F6Rks7QUEwRmYsa0JBQVUsR0ExRks7QUEyRmYsa0JBQVUsR0EzRks7QUE0RmYsa0JBQVUsR0E1Rks7QUE2RmYsa0JBQVUsR0E3Rks7QUE4RmYsZ0JBQVUsR0E5Rks7QUErRmYsa0JBQVUsR0EvRks7QUFnR2Ysa0JBQVUsR0FoR0s7QUFpR2Ysa0JBQVUsR0FqR0s7QUFrR2Ysa0JBQVUsR0FsR0s7QUFtR2Ysa0JBQVUsR0FuR0s7QUFvR2Ysa0JBQVUsR0FwR0s7QUFxR2Ysa0JBQVUsR0FyR0s7QUFzR2Ysa0JBQVUsR0F0R0s7QUF1R2Ysa0JBQVUsR0F2R0s7QUF3R2Ysa0JBQVUsR0F4R0s7QUF5R2Ysa0JBQVUsR0F6R0s7QUEwR2Ysa0JBQVUsR0ExR0s7QUEyR2Ysa0JBQVUsR0EzR0s7QUE0R2Ysa0JBQVUsR0E1R0s7QUE2R2Ysa0JBQVUsR0E3R0s7QUE4R2Ysa0JBQVUsR0E5R0s7QUErR2Ysa0JBQVUsR0EvR0s7QUFnSGYsa0JBQVUsR0FoSEs7QUFpSGYsa0JBQVUsR0FqSEs7QUFrSGYsa0JBQVUsR0FsSEs7QUFtSGYsa0JBQVUsR0FuSEs7QUFvSGYsa0JBQVUsR0FwSEs7QUFxSGYsa0JBQVUsR0FySEs7QUFzSGYsa0JBQVUsR0F0SEs7QUF1SGYsa0JBQVUsR0F2SEs7QUF3SGYsa0JBQVUsR0F4SEs7QUF5SGYsa0JBQVUsR0F6SEs7QUEwSGYsa0JBQVUsR0ExSEs7QUEySGYsa0JBQVUsR0EzSEs7QUE0SGYsa0JBQVUsR0E1SEs7QUE2SGYsa0JBQVUsR0E3SEs7QUE4SGYsa0JBQVUsR0E5SEs7QUErSGYsa0JBQVUsR0EvSEs7QUFnSWYsa0JBQVUsR0FoSUs7QUFpSWYsa0JBQVUsR0FqSUs7QUFrSWYsa0JBQVUsR0FsSUs7QUFtSWYsa0JBQVUsR0FuSUs7QUFvSWYsa0JBQVUsR0FwSUs7QUFxSWYsa0JBQVUsR0FySUs7QUFzSWYsa0JBQVUsR0F0SUs7QUF1SWYsa0JBQVUsR0F2SUs7QUF3SWYsa0JBQVUsR0F4SUs7QUF5SWYsa0JBQVUsR0F6SUs7QUEwSWYsa0JBQVUsR0ExSUs7QUEySWYsa0JBQVUsR0EzSUs7QUE0SWYsa0JBQVUsR0E1SUs7QUE2SWYsa0JBQVUsR0E3SUs7QUE4SWYsZ0JBQVUsR0E5SUs7QUErSWYsZ0JBQVUsR0EvSUs7QUFnSmYsZ0JBQVUsR0FoSks7QUFpSmYsa0JBQVUsR0FqSks7QUFrSmYsa0JBQVUsR0FsSks7QUFtSmYsa0JBQVUsR0FuSks7QUFvSmYsa0JBQVUsR0FwSks7QUFxSmYsZ0JBQVUsR0FySks7QUFzSmYsa0JBQVUsR0F0Sks7QUF1SmYsa0JBQVUsR0F2Sks7QUF3SmYsa0JBQVUsR0F4Sks7QUF5SmYsa0JBQVUsR0F6Sks7QUEwSmYsa0JBQVUsR0ExSks7QUEySmYsa0JBQVUsR0EzSks7QUE0SmYsa0JBQVUsR0E1Sks7QUE2SmYsa0JBQVUsR0E3Sks7QUE4SmYsa0JBQVUsR0E5Sks7QUErSmYsa0JBQVUsR0EvSks7QUFnS2Ysa0JBQVUsR0FoS0s7QUFpS2Ysa0JBQVUsR0FqS0s7QUFrS2Ysa0JBQVUsR0FsS0s7QUFtS2Ysa0JBQVUsR0FuS0s7QUFvS2Ysa0JBQVUsR0FwS0s7QUFxS2Ysa0JBQVUsR0FyS0s7QUFzS2Ysa0JBQVUsR0F0S0s7QUF1S2Ysa0JBQVUsR0F2S0s7QUF3S2Ysa0JBQVUsR0F4S0s7QUF5S2Ysa0JBQVUsR0F6S0s7QUEwS2Ysa0JBQVUsR0ExS0s7QUEyS2Ysa0JBQVUsR0EzS0s7QUE0S2Ysa0JBQVUsR0E1S0s7QUE2S2Ysa0JBQVUsR0E3S0s7QUE4S2Ysa0JBQVUsR0E5S0s7QUErS2Ysa0JBQVUsR0EvS0s7QUFnTGYsa0JBQVUsR0FoTEs7QUFpTGYsa0JBQVUsR0FqTEs7QUFrTGYsa0JBQVUsR0FsTEs7QUFtTGYsa0JBQVUsR0FuTEs7QUFvTGYsa0JBQVUsR0FwTEs7QUFxTGYsa0JBQVUsR0FyTEs7QUFzTGYsa0JBQVUsR0F0TEs7QUF1TGYsa0JBQVUsR0F2TEs7QUF3TGYsa0JBQVUsR0F4TEs7QUF5TGYsa0JBQVUsR0F6TEs7QUEwTGYsa0JBQVUsR0ExTEs7QUEyTGYsa0JBQVUsR0EzTEs7QUE0TGYsa0JBQVUsR0E1TEs7QUE2TGYsa0JBQVUsR0E3TEs7QUE4TGYsa0JBQVUsR0E5TEs7QUErTGYsa0JBQVUsR0EvTEs7QUFnTWYsa0JBQVUsR0FoTUs7QUFpTWYsa0JBQVUsSUFqTUs7QUFrTWYsa0JBQVUsSUFsTUs7QUFtTWYsa0JBQVUsR0FuTUs7QUFvTWYsa0JBQVUsR0FwTUs7QUFxTWYsa0JBQVUsR0FyTUs7QUFzTWYsa0JBQVUsR0F0TUs7QUF1TWYsa0JBQVUsR0F2TUs7QUF3TWYsa0JBQVUsR0F4TUs7QUF5TWYsa0JBQVUsR0F6TUs7QUEwTWYsa0JBQVUsR0ExTUs7QUEyTWYsa0JBQVUsR0EzTUs7QUE0TWYsa0JBQVUsR0E1TUs7QUE2TWYsa0JBQVUsR0E3TUs7QUE4TWYsZ0JBQVUsR0E5TUs7QUErTWYsa0JBQVUsR0EvTUs7QUFnTmYsa0JBQVUsR0FoTks7QUFpTmYsa0JBQVUsR0FqTks7QUFrTmYsa0JBQVUsR0FsTks7QUFtTmYsa0JBQVUsR0FuTks7QUFvTmYsa0JBQVUsR0FwTks7QUFxTmYsa0JBQVUsR0FyTks7QUFzTmYsa0JBQVUsR0F0Tks7QUF1TmYsa0JBQVUsR0F2Tks7QUF3TmYsa0JBQVUsR0F4Tks7QUF5TmYsa0JBQVUsSUF6Tks7QUEwTmYsa0JBQVUsSUExTks7QUEyTmYsa0JBQVUsR0EzTks7QUE0TmYsa0JBQVUsR0E1Tks7QUE2TmYsZ0JBQVUsR0E3Tks7QUE4TmYsZ0JBQVUsR0E5Tks7QUErTmYsZ0JBQVUsR0EvTks7QUFnT2Ysa0JBQVUsR0FoT0s7QUFpT2Ysa0JBQVUsR0FqT0s7QUFrT2Ysa0JBQVUsR0FsT0s7QUFtT2Ysa0JBQVUsR0FuT0s7QUFvT2YsZ0JBQVUsR0FwT0s7QUFxT2Ysa0JBQVUsR0FyT0s7QUFzT2Ysa0JBQVUsR0F0T0s7QUF1T2Ysa0JBQVUsR0F2T0s7QUF3T2Ysa0JBQVUsR0F4T0s7QUF5T2Ysa0JBQVUsR0F6T0s7QUEwT2Ysa0JBQVUsR0ExT0s7QUEyT2Ysa0JBQVUsR0EzT0s7QUE0T2Ysa0JBQVUsR0E1T0s7QUE2T2Ysa0JBQVUsR0E3T0s7QUE4T2YsZ0JBQVUsR0E5T0s7QUErT2Ysa0JBQVUsR0EvT0s7QUFnUGYsa0JBQVUsR0FoUEs7QUFpUGYsa0JBQVUsR0FqUEs7QUFrUGYsa0JBQVUsR0FsUEs7QUFtUGYsa0JBQVUsR0FuUEs7QUFvUGYsa0JBQVUsR0FwUEs7QUFxUGYsa0JBQVUsR0FyUEs7QUFzUGYsa0JBQVUsR0F0UEs7QUF1UGYsa0JBQVUsR0F2UEs7QUF3UGYsa0JBQVUsR0F4UEs7QUF5UGYsa0JBQVUsR0F6UEs7QUEwUGYsa0JBQVUsR0ExUEs7QUEyUGYsa0JBQVUsR0EzUEs7QUE0UGYsa0JBQVUsR0E1UEs7QUE2UGYsa0JBQVUsR0E3UEs7QUE4UGYsa0JBQVUsR0E5UEs7QUErUGYsZ0JBQVUsR0EvUEs7QUFnUWYsa0JBQVUsR0FoUUs7QUFpUWYsa0JBQVUsR0FqUUs7QUFrUWYsa0JBQVUsR0FsUUs7QUFtUWYsa0JBQVUsR0FuUUs7QUFvUWYsa0JBQVUsR0FwUUs7QUFxUWYsa0JBQVUsSUFyUUs7QUFzUWYsa0JBQVUsSUF0UUs7QUF1UWYsa0JBQVUsSUF2UUs7QUF3UWYsa0JBQVUsSUF4UUs7QUF5UWYsa0JBQVUsR0F6UUs7QUEwUWYsa0JBQVUsR0ExUUs7QUEyUWYsa0JBQVUsR0EzUUs7QUE0UWYsa0JBQVUsR0E1UUs7QUE2UWYsa0JBQVUsR0E3UUs7QUE4UWYsa0JBQVUsR0E5UUs7QUErUWYsa0JBQVUsR0EvUUs7QUFnUmYsa0JBQVUsR0FoUks7QUFpUmYsa0JBQVUsR0FqUks7QUFrUmYsa0JBQVUsR0FsUks7QUFtUmYsa0JBQVUsR0FuUks7QUFvUmYsa0JBQVUsR0FwUks7QUFxUmYsa0JBQVUsR0FyUks7QUFzUmYsa0JBQVUsR0F0Uks7QUF1UmYsa0JBQVUsR0F2Uks7QUF3UmYsa0JBQVUsR0F4Uks7QUF5UmYsa0JBQVUsR0F6Uks7QUEwUmYsa0JBQVUsR0ExUks7QUEyUmYsa0JBQVUsR0EzUks7QUE0UmYsa0JBQVUsR0E1Uks7QUE2UmYsa0JBQVUsR0E3Uks7QUE4UmYsa0JBQVUsR0E5Uks7QUErUmYsa0JBQVUsR0EvUks7QUFnU2Ysa0JBQVUsR0FoU0s7QUFpU2Ysa0JBQVUsR0FqU0s7QUFrU2Ysa0JBQVUsR0FsU0s7QUFtU2Ysa0JBQVUsR0FuU0s7QUFvU2Ysa0JBQVUsR0FwU0s7QUFxU2Ysa0JBQVUsR0FyU0s7QUFzU2Ysa0JBQVUsR0F0U0s7QUF1U2Ysa0JBQVUsR0F2U0s7QUF3U2Ysa0JBQVUsR0F4U0s7QUF5U2Ysa0JBQVUsR0F6U0s7QUEwU2Ysa0JBQVUsR0ExU0s7QUEyU2Ysa0JBQVUsR0EzU0s7QUE0U2Ysa0JBQVUsR0E1U0s7QUE2U2Ysa0JBQVUsR0E3U0s7QUE4U2Ysa0JBQVUsR0E5U0s7QUErU2Ysa0JBQVUsR0EvU0s7QUFnVGYsa0JBQVUsR0FoVEs7QUFpVGYsa0JBQVUsR0FqVEs7QUFrVGYsa0JBQVUsR0FsVEs7QUFtVGYsa0JBQVUsR0FuVEs7QUFvVGYsa0JBQVUsR0FwVEs7QUFxVGYsa0JBQVUsR0FyVEs7QUFzVGYsa0JBQVUsR0F0VEs7QUF1VGYsa0JBQVUsR0F2VEs7QUF3VGYsa0JBQVUsR0F4VEs7QUF5VGYsa0JBQVUsR0F6VEs7QUEwVGYsa0JBQVUsR0ExVEs7QUEyVGYsa0JBQVUsR0EzVEs7QUE0VGYsa0JBQVUsR0E1VEs7QUE2VGYsa0JBQVUsR0E3VEs7QUE4VGYsa0JBQVUsR0E5VEs7QUErVGYsa0JBQVUsR0EvVEs7QUFnVWYsa0JBQVUsR0FoVUs7QUFpVWYsa0JBQVUsR0FqVUs7QUFrVWYsa0JBQVUsR0FsVUs7QUFtVWYsa0JBQVUsR0FuVUs7QUFvVWYsa0JBQVUsR0FwVUs7QUFxVWYsa0JBQVUsSUFyVUs7QUFzVWYsa0JBQVUsR0F0VUs7QUF1VWYsa0JBQVUsR0F2VUs7QUF3VWYsZ0JBQVUsR0F4VUs7QUF5VWYsZ0JBQVUsR0F6VUs7QUEwVWYsZ0JBQVUsR0ExVUs7QUEyVWYsa0JBQVUsR0EzVUs7QUE0VWYsa0JBQVUsR0E1VUs7QUE2VWYsa0JBQVUsR0E3VUs7QUE4VWYsa0JBQVUsR0E5VUs7QUErVWYsa0JBQVUsR0EvVUs7QUFnVmYsZ0JBQVUsR0FoVks7QUFpVmYsa0JBQVUsR0FqVks7QUFrVmYsa0JBQVUsR0FsVks7QUFtVmYsa0JBQVUsR0FuVks7QUFvVmYsa0JBQVUsR0FwVks7QUFxVmYsa0JBQVUsR0FyVks7QUFzVmYsa0JBQVUsR0F0Vks7QUF1VmYsa0JBQVUsR0F2Vks7QUF3VmYsa0JBQVUsR0F4Vks7QUF5VmYsa0JBQVUsR0F6Vks7QUEwVmYsa0JBQVUsR0ExVks7QUEyVmYsa0JBQVUsR0EzVks7QUE0VmYsa0JBQVUsR0E1Vks7QUE2VmYsa0JBQVUsR0E3Vks7QUE4VmYsa0JBQVUsR0E5Vks7QUErVmYsa0JBQVUsR0EvVks7QUFnV2Ysa0JBQVUsR0FoV0s7QUFpV2Ysa0JBQVUsR0FqV0s7QUFrV2Ysa0JBQVUsR0FsV0s7QUFtV2Ysa0JBQVUsR0FuV0s7QUFvV2Ysa0JBQVUsR0FwV0s7QUFxV2Ysa0JBQVUsR0FyV0s7QUFzV2Ysa0JBQVUsR0F0V0s7QUF1V2Ysa0JBQVUsR0F2V0s7QUF3V2Ysa0JBQVUsR0F4V0s7QUF5V2Ysa0JBQVUsR0F6V0s7QUEwV2Ysa0JBQVUsR0ExV0s7QUEyV2Ysa0JBQVUsR0EzV0s7QUE0V2Ysa0JBQVUsR0E1V0s7QUE2V2Ysa0JBQVUsR0E3V0s7QUE4V2Ysa0JBQVUsSUE5V0s7QUErV2Ysa0JBQVUsR0EvV0s7QUFnWGYsa0JBQVUsR0FoWEs7QUFpWGYsa0JBQVUsR0FqWEs7QUFrWGYsa0JBQVUsR0FsWEs7QUFtWGYsa0JBQVUsR0FuWEs7QUFvWGYsa0JBQVUsR0FwWEs7QUFxWGYsa0JBQVUsR0FyWEs7QUFzWGYsa0JBQVUsR0F0WEs7QUF1WGYsa0JBQVUsR0F2WEs7QUF3WGYsa0JBQVUsR0F4WEs7QUF5WGYsa0JBQVUsR0F6WEs7QUEwWGYsa0JBQVUsR0ExWEs7QUEyWGYsa0JBQVUsR0EzWEs7QUE0WGYsa0JBQVUsR0E1WEs7QUE2WGYsa0JBQVUsR0E3WEs7QUE4WGYsa0JBQVUsR0E5WEs7QUErWGYsZ0JBQVUsR0EvWEs7QUFnWWYsa0JBQVUsR0FoWUs7QUFpWWYsa0JBQVUsR0FqWUs7QUFrWWYsa0JBQVUsR0FsWUs7QUFtWWYsa0JBQVUsR0FuWUs7QUFvWWYsa0JBQVUsR0FwWUs7QUFxWWYsa0JBQVUsR0FyWUs7QUFzWWYsa0JBQVUsR0F0WUs7QUF1WWYsa0JBQVUsR0F2WUs7QUF3WWYsa0JBQVUsR0F4WUs7QUF5WWYsa0JBQVUsR0F6WUs7QUEwWWYsa0JBQVUsR0ExWUs7QUEyWWYsa0JBQVUsR0EzWUs7QUE0WWYsa0JBQVUsR0E1WUs7QUE2WWYsa0JBQVUsR0E3WUs7QUE4WWYsa0JBQVUsR0E5WUs7QUErWWYsa0JBQVUsR0EvWUs7QUFnWmYsa0JBQVUsR0FoWks7QUFpWmYsa0JBQVUsR0FqWks7QUFrWmYsa0JBQVUsR0FsWks7QUFtWmYsa0JBQVUsR0FuWks7QUFvWmYsa0JBQVUsR0FwWks7QUFxWmYsa0JBQVUsR0FyWks7QUFzWmYsa0JBQVUsR0F0Wks7QUF1WmYsa0JBQVUsR0F2Wks7QUF3WmYsa0JBQVUsR0F4Wks7QUF5WmYsa0JBQVUsR0F6Wks7QUEwWmYsZ0JBQVUsR0ExWks7QUEyWmYsZ0JBQVUsR0EzWks7QUE0WmYsZ0JBQVUsR0E1Wks7QUE2WmYsa0JBQVUsR0E3Wks7QUE4WmYsa0JBQVUsR0E5Wks7QUErWmYsa0JBQVUsR0EvWks7QUFnYWYsa0JBQVUsR0FoYUs7QUFpYWYsZ0JBQVUsR0FqYUs7QUFrYWYsa0JBQVUsR0FsYUs7QUFtYWYsa0JBQVUsR0FuYUs7QUFvYWYsa0JBQVUsR0FwYUs7QUFxYWYsa0JBQVUsR0FyYUs7QUFzYWYsa0JBQVUsR0F0YUs7QUF1YWYsa0JBQVUsR0F2YUs7QUF3YWYsa0JBQVUsR0F4YUs7QUF5YWYsa0JBQVUsR0F6YUs7QUEwYWYsZ0JBQVUsR0ExYUs7QUEyYWYsa0JBQVUsR0EzYUs7QUE0YWYsa0JBQVUsR0E1YUs7QUE2YWYsZ0JBQVUsR0E3YUs7QUE4YWYsa0JBQVUsR0E5YUs7QUErYWYsa0JBQVUsR0EvYUs7QUFnYmYsa0JBQVUsR0FoYks7QUFpYmYsa0JBQVUsR0FqYks7QUFrYmYsa0JBQVUsR0FsYks7QUFtYmYsa0JBQVUsR0FuYks7QUFvYmYsa0JBQVUsR0FwYks7QUFxYmYsa0JBQVUsR0FyYks7QUFzYmYsa0JBQVUsR0F0Yks7QUF1YmYsa0JBQVUsR0F2Yks7QUF3YmYsa0JBQVUsR0F4Yks7QUF5YmYsa0JBQVUsSUF6Yks7QUEwYmYsZ0JBQVUsSUExYks7QUEyYmYsa0JBQVUsSUEzYks7QUE0YmYsa0JBQVUsSUE1Yks7QUE2YmYsa0JBQVUsSUE3Yks7QUE4YmYsa0JBQVUsSUE5Yks7QUErYmYsa0JBQVUsSUEvYks7QUFnY2Ysa0JBQVUsSUFoY0s7QUFpY2Ysa0JBQVUsSUFqY0s7QUFrY2Ysa0JBQVUsR0FsY0s7QUFtY2Ysa0JBQVUsR0FuY0s7QUFvY2Ysa0JBQVUsR0FwY0s7QUFxY2Ysa0JBQVUsR0FyY0s7QUFzY2Ysa0JBQVUsR0F0Y0s7QUF1Y2Ysa0JBQVUsR0F2Y0s7QUF3Y2Ysa0JBQVUsR0F4Y0s7QUF5Y2Ysa0JBQVUsR0F6Y0s7QUEwY2Ysa0JBQVUsR0ExY0s7QUEyY2Ysa0JBQVUsR0EzY0s7QUE0Y2Ysa0JBQVUsR0E1Y0s7QUE2Y2Ysa0JBQVUsR0E3Y0s7QUE4Y2Ysa0JBQVUsR0E5Y0s7QUErY2Ysa0JBQVUsR0EvY0s7QUFnZGYsZ0JBQVUsR0FoZEs7QUFpZGYsa0JBQVUsR0FqZEs7QUFrZGYsa0JBQVUsR0FsZEs7QUFtZGYsa0JBQVUsR0FuZEs7QUFvZGYsa0JBQVUsR0FwZEs7QUFxZGYsa0JBQVUsR0FyZEs7QUFzZGYsa0JBQVUsR0F0ZEs7QUF1ZGYsa0JBQVUsR0F2ZEs7QUF3ZGYsa0JBQVUsR0F4ZEs7QUF5ZGYsa0JBQVUsR0F6ZEs7QUEwZGYsa0JBQVUsR0ExZEs7QUEyZGYsa0JBQVUsR0EzZEs7QUE0ZGYsa0JBQVUsR0E1ZEs7QUE2ZGYsa0JBQVUsR0E3ZEs7QUE4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QXVDdFYsSUFBdkMsRUFBNkNtWCxjQUE3QyxFQUE2RDtBQUN6RCxXQUFPLElBQUloQixPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDMUMxbkIsbURBQUMsQ0FBQ2dWLElBQUYsQ0FBTztBQUNITSxXQUFHLEVBQUV5UixZQUFZLENBQUNZLE9BRGY7QUFFSHRXLFlBQUksRUFBRSxNQUZIO0FBR0gvTixZQUFJLEVBQUU7QUFDRnNrQixnQkFBTSxFQUFFLGdDQUROO0FBRUZDLG9CQUFVLEVBQUVkLFlBQVksQ0FBQ2UsS0FGdkI7QUFHRlUsd0JBQWMsRUFBRUEsY0FIZDtBQUlGblgsY0FBSSxFQUFFQTtBQUpKLFNBSEg7QUFTSHdELGVBQU8sRUFBRSxpQkFBVW1ULEdBQVYsRUFBZTtBQUNwQlAsaUJBQU8sQ0FBQ08sR0FBRCxDQUFQO0FBQ0g7QUFYRSxPQUFQO0FBYUgsS0FkTSxFQWNKL1MsSUFkSSxDQWNDLFlBQVk7QUFDaEJqVixtREFBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVc0MsT0FBVixDQUFrQixpQkFBbEI7QUFDSCxLQWhCTSxDQUFQO0FBaUJIO0FBQ0osQ0FwWUQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSx3QiIsImZpbGUiOiJjaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIi8qIVxuICogU2VsZWN0MiA0LjAuMTNcbiAqIGh0dHBzOi8vc2VsZWN0Mi5naXRodWIuaW9cbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gTm9kZS9Db21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJvb3QsIGpRdWVyeSkge1xuICAgICAgaWYgKGpRdWVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHJlcXVpcmUoJ2pRdWVyeScpIHJldHVybnMgYSBmYWN0b3J5IHRoYXQgcmVxdWlyZXMgd2luZG93IHRvXG4gICAgICAgIC8vIGJ1aWxkIGEgalF1ZXJ5IGluc3RhbmNlLCB3ZSBub3JtYWxpemUgaG93IHdlIHVzZSBtb2R1bGVzXG4gICAgICAgIC8vIHRoYXQgcmVxdWlyZSB0aGlzIHBhdHRlcm4gYnV0IHRoZSB3aW5kb3cgcHJvdmlkZWQgaXMgYSBub29wXG4gICAgICAgIC8vIGlmIGl0J3MgZGVmaW5lZCAoaG93IGpxdWVyeSB3b3JrcylcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jykocm9vdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICAgIHJldHVybiBqUXVlcnk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBmYWN0b3J5KGpRdWVyeSk7XG4gIH1cbn0gKGZ1bmN0aW9uIChqUXVlcnkpIHtcbiAgLy8gVGhpcyBpcyBuZWVkZWQgc28gd2UgY2FuIGNhdGNoIHRoZSBBTUQgbG9hZGVyIGNvbmZpZ3VyYXRpb24gYW5kIHVzZSBpdFxuICAvLyBUaGUgaW5uZXIgZmlsZSBzaG91bGQgYmUgd3JhcHBlZCAoYnkgYGJhbm5lci5zdGFydC5qc2ApIGluIGEgZnVuY3Rpb24gdGhhdFxuICAvLyByZXR1cm5zIHRoZSBBTUQgbG9hZGVyIHJlZmVyZW5jZXMuXG4gIHZhciBTMiA9KGZ1bmN0aW9uICgpIHtcbiAgLy8gUmVzdG9yZSB0aGUgU2VsZWN0MiBBTUQgbG9hZGVyIHNvIGl0IGNhbiBiZSB1c2VkXG4gIC8vIE5lZWRlZCBtb3N0bHkgaW4gdGhlIGxhbmd1YWdlIGZpbGVzLCB3aGVyZSB0aGUgbG9hZGVyIGlzIG5vdCBpbnNlcnRlZFxuICBpZiAoalF1ZXJ5ICYmIGpRdWVyeS5mbiAmJiBqUXVlcnkuZm4uc2VsZWN0MiAmJiBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpIHtcbiAgICB2YXIgUzIgPSBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQ7XG4gIH1cbnZhciBTMjsoZnVuY3Rpb24gKCkgeyBpZiAoIVMyIHx8ICFTMi5yZXF1aXJlanMpIHtcbmlmICghUzIpIHsgUzIgPSB7fTsgfSBlbHNlIHsgcmVxdWlyZSA9IFMyOyB9XG4vKipcbiAqIEBsaWNlbnNlIGFsbW9uZCAwLjMuMyBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycy5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLCBodHRwOi8vZ2l0aHViLmNvbS9yZXF1aXJlanMvYWxtb25kL0xJQ0VOU0VcbiAqL1xuLy9Hb2luZyBzbG9wcHkgdG8gYXZvaWQgJ3VzZSBzdHJpY3QnIHN0cmluZyBjb3N0LCBidXQgc3RyaWN0IHByYWN0aWNlcyBzaG91bGRcbi8vYmUgZm9sbG93ZWQuXG4vKmdsb2JhbCBzZXRUaW1lb3V0OiBmYWxzZSAqL1xuXG52YXIgcmVxdWlyZWpzLCByZXF1aXJlLCBkZWZpbmU7XG4oZnVuY3Rpb24gKHVuZGVmKSB7XG4gICAgdmFyIG1haW4sIHJlcSwgbWFrZU1hcCwgaGFuZGxlcnMsXG4gICAgICAgIGRlZmluZWQgPSB7fSxcbiAgICAgICAgd2FpdGluZyA9IHt9LFxuICAgICAgICBjb25maWcgPSB7fSxcbiAgICAgICAgZGVmaW5pbmcgPSB7fSxcbiAgICAgICAgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgYXBzID0gW10uc2xpY2UsXG4gICAgICAgIGpzU3VmZml4UmVnRXhwID0gL1xcLmpzJC87XG5cbiAgICBmdW5jdGlvbiBoYXNQcm9wKG9iaiwgcHJvcCkge1xuICAgICAgICByZXR1cm4gaGFzT3duLmNhbGwob2JqLCBwcm9wKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHJlbGF0aXZlIG1vZHVsZSBuYW1lLCBsaWtlIC4vc29tZXRoaW5nLCBub3JtYWxpemUgaXQgdG9cbiAgICAgKiBhIHJlYWwgbmFtZSB0aGF0IGNhbiBiZSBtYXBwZWQgdG8gYSBwYXRoLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSByZWxhdGl2ZSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGJhc2VOYW1lIGEgcmVhbCBuYW1lIHRoYXQgdGhlIG5hbWUgYXJnIGlzIHJlbGF0aXZlXG4gICAgICogdG8uXG4gICAgICogQHJldHVybnMge1N0cmluZ30gbm9ybWFsaXplZCBuYW1lXG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKG5hbWUsIGJhc2VOYW1lKSB7XG4gICAgICAgIHZhciBuYW1lUGFydHMsIG5hbWVTZWdtZW50LCBtYXBWYWx1ZSwgZm91bmRNYXAsIGxhc3RJbmRleCxcbiAgICAgICAgICAgIGZvdW5kSSwgZm91bmRTdGFyTWFwLCBzdGFySSwgaSwgaiwgcGFydCwgbm9ybWFsaXplZEJhc2VQYXJ0cyxcbiAgICAgICAgICAgIGJhc2VQYXJ0cyA9IGJhc2VOYW1lICYmIGJhc2VOYW1lLnNwbGl0KFwiL1wiKSxcbiAgICAgICAgICAgIG1hcCA9IGNvbmZpZy5tYXAsXG4gICAgICAgICAgICBzdGFyTWFwID0gKG1hcCAmJiBtYXBbJyonXSkgfHwge307XG5cbiAgICAgICAgLy9BZGp1c3QgYW55IHJlbGF0aXZlIHBhdGhzLlxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IG5hbWUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgLy8gSWYgd2FudGluZyBub2RlIElEIGNvbXBhdGliaWxpdHksIHN0cmlwIC5qcyBmcm9tIGVuZFxuICAgICAgICAgICAgLy8gb2YgSURzLiBIYXZlIHRvIGRvIHRoaXMgaGVyZSwgYW5kIG5vdCBpbiBuYW1lVG9VcmxcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugbm9kZSBhbGxvd3MgZWl0aGVyIC5qcyBvciBub24gLmpzIHRvIG1hcFxuICAgICAgICAgICAgLy8gdG8gc2FtZSBmaWxlLlxuICAgICAgICAgICAgaWYgKGNvbmZpZy5ub2RlSWRDb21wYXQgJiYganNTdWZmaXhSZWdFeHAudGVzdChuYW1lW2xhc3RJbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgbmFtZVtsYXN0SW5kZXhdID0gbmFtZVtsYXN0SW5kZXhdLnJlcGxhY2UoanNTdWZmaXhSZWdFeHAsICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RhcnRzIHdpdGggYSAnLicgc28gbmVlZCB0aGUgYmFzZU5hbWVcbiAgICAgICAgICAgIGlmIChuYW1lWzBdLmNoYXJBdCgwKSA9PT0gJy4nICYmIGJhc2VQYXJ0cykge1xuICAgICAgICAgICAgICAgIC8vQ29udmVydCBiYXNlTmFtZSB0byBhcnJheSwgYW5kIGxvcCBvZmYgdGhlIGxhc3QgcGFydCxcbiAgICAgICAgICAgICAgICAvL3NvIHRoYXQgLiBtYXRjaGVzIHRoYXQgJ2RpcmVjdG9yeScgYW5kIG5vdCBuYW1lIG9mIHRoZSBiYXNlTmFtZSdzXG4gICAgICAgICAgICAgICAgLy9tb2R1bGUuIEZvciBpbnN0YW5jZSwgYmFzZU5hbWUgb2YgJ29uZS90d28vdGhyZWUnLCBtYXBzIHRvXG4gICAgICAgICAgICAgICAgLy8nb25lL3R3by90aHJlZS5qcycsIGJ1dCB3ZSB3YW50IHRoZSBkaXJlY3RvcnksICdvbmUvdHdvJyBmb3JcbiAgICAgICAgICAgICAgICAvL3RoaXMgbm9ybWFsaXphdGlvbi5cbiAgICAgICAgICAgICAgICBub3JtYWxpemVkQmFzZVBhcnRzID0gYmFzZVBhcnRzLnNsaWNlKDAsIGJhc2VQYXJ0cy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplZEJhc2VQYXJ0cy5jb25jYXQobmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3RhcnQgdHJpbURvdHNcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IG5hbWVbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBhdCB0aGUgc3RhcnQsIG9yIHByZXZpb3VzIHZhbHVlIGlzIHN0aWxsIC4uLFxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIHRoZW0gc28gdGhhdCB3aGVuIGNvbnZlcnRlZCB0byBhIHBhdGggaXQgbWF5XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0aWxsIHdvcmsgd2hlbiBjb252ZXJ0ZWQgdG8gYSBwYXRoLCBldmVuIHRob3VnaFxuICAgICAgICAgICAgICAgICAgICAvLyBhcyBhbiBJRCBpdCBpcyBsZXNzIHRoYW4gaWRlYWwuIEluIGxhcmdlciBwb2ludFxuICAgICAgICAgICAgICAgICAgICAvLyByZWxlYXNlcywgbWF5IGJlIGJldHRlciB0byBqdXN0IGtpY2sgb3V0IGFuIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCAoaSA9PT0gMSAmJiBuYW1lWzJdID09PSAnLi4nKSB8fCBuYW1lW2kgLSAxXSA9PT0gJy4uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuc3BsaWNlKGkgLSAxLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgLT0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZW5kIHRyaW1Eb3RzXG5cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLmpvaW4oJy8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQXBwbHkgbWFwIGNvbmZpZyBpZiBhdmFpbGFibGUuXG4gICAgICAgIGlmICgoYmFzZVBhcnRzIHx8IHN0YXJNYXApICYmIG1hcCkge1xuICAgICAgICAgICAgbmFtZVBhcnRzID0gbmFtZS5zcGxpdCgnLycpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSBuYW1lUGFydHMubGVuZ3RoOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgbmFtZVNlZ21lbnQgPSBuYW1lUGFydHMuc2xpY2UoMCwgaSkuam9pbihcIi9cIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoYmFzZVBhcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vRmluZCB0aGUgbG9uZ2VzdCBiYXNlTmFtZSBzZWdtZW50IG1hdGNoIGluIHRoZSBjb25maWcuXG4gICAgICAgICAgICAgICAgICAgIC8vU28sIGRvIGpvaW5zIG9uIHRoZSBiaWdnZXN0IHRvIHNtYWxsZXN0IGxlbmd0aHMgb2YgYmFzZVBhcnRzLlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBiYXNlUGFydHMubGVuZ3RoOyBqID4gMDsgaiAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBWYWx1ZSA9IG1hcFtiYXNlUGFydHMuc2xpY2UoMCwgaikuam9pbignLycpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9iYXNlTmFtZSBzZWdtZW50IGhhcyAgY29uZmlnLCBmaW5kIGlmIGl0IGhhcyBvbmUgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZhbHVlID0gbWFwVmFsdWVbbmFtZVNlZ21lbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01hdGNoLCB1cGRhdGUgbmFtZSB0byB0aGUgbmV3IHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZE1hcCA9IG1hcFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEkgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZm91bmRNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9DaGVjayBmb3IgYSBzdGFyIG1hcCBtYXRjaCwgYnV0IGp1c3QgaG9sZCBvbiB0byBpdCxcbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hvcnRlciBzZWdtZW50IG1hdGNoIGxhdGVyIGluIGEgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAvL2NvbmZpZywgdGhlbiBmYXZvciBvdmVyIHRoaXMgc3RhciBtYXAuXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZFN0YXJNYXAgJiYgc3Rhck1hcCAmJiBzdGFyTWFwW25hbWVTZWdtZW50XSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZFN0YXJNYXAgPSBzdGFyTWFwW25hbWVTZWdtZW50XTtcbiAgICAgICAgICAgICAgICAgICAgc3RhckkgPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFmb3VuZE1hcCAmJiBmb3VuZFN0YXJNYXApIHtcbiAgICAgICAgICAgICAgICBmb3VuZE1hcCA9IGZvdW5kU3Rhck1hcDtcbiAgICAgICAgICAgICAgICBmb3VuZEkgPSBzdGFySTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kTWFwKSB7XG4gICAgICAgICAgICAgICAgbmFtZVBhcnRzLnNwbGljZSgwLCBmb3VuZEksIGZvdW5kTWFwKTtcbiAgICAgICAgICAgICAgICBuYW1lID0gbmFtZVBhcnRzLmpvaW4oJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VSZXF1aXJlKHJlbE5hbWUsIGZvcmNlU3luYykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9BIHZlcnNpb24gb2YgYSByZXF1aXJlIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIGEgbW9kdWxlTmFtZVxuICAgICAgICAgICAgLy92YWx1ZSBmb3IgaXRlbXMgdGhhdCBtYXkgbmVlZCB0b1xuICAgICAgICAgICAgLy9sb29rIHVwIHBhdGhzIHJlbGF0aXZlIHRvIHRoZSBtb2R1bGVOYW1lXG4gICAgICAgICAgICB2YXIgYXJncyA9IGFwcy5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgICAgICAgIC8vSWYgZmlyc3QgYXJnIGlzIG5vdCByZXF1aXJlKCdzdHJpbmcnKSwgYW5kIHRoZXJlIGlzIG9ubHlcbiAgICAgICAgICAgIC8vb25lIGFyZywgaXQgaXMgdGhlIGFycmF5IGZvcm0gd2l0aG91dCBhIGNhbGxiYWNrLiBJbnNlcnRcbiAgICAgICAgICAgIC8vYSBudWxsIHNvIHRoYXQgdGhlIGZvbGxvd2luZyBjb25jYXQgaXMgY29ycmVjdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycgJiYgYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2gobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxLmFwcGx5KHVuZGVmLCBhcmdzLmNvbmNhdChbcmVsTmFtZSwgZm9yY2VTeW5jXSkpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VOb3JtYWxpemUocmVsTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUobmFtZSwgcmVsTmFtZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUxvYWQoZGVwTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBkZWZpbmVkW2RlcE5hbWVdID0gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbERlcChuYW1lKSB7XG4gICAgICAgIGlmIChoYXNQcm9wKHdhaXRpbmcsIG5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IHdhaXRpbmdbbmFtZV07XG4gICAgICAgICAgICBkZWxldGUgd2FpdGluZ1tuYW1lXTtcbiAgICAgICAgICAgIGRlZmluaW5nW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIG1haW4uYXBwbHkodW5kZWYsIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNQcm9wKGRlZmluZWQsIG5hbWUpICYmICFoYXNQcm9wKGRlZmluaW5nLCBuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyAnICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluZWRbbmFtZV07XG4gICAgfVxuXG4gICAgLy9UdXJucyBhIHBsdWdpbiFyZXNvdXJjZSB0byBbcGx1Z2luLCByZXNvdXJjZV1cbiAgICAvL3dpdGggdGhlIHBsdWdpbiBiZWluZyB1bmRlZmluZWQgaWYgdGhlIG5hbWVcbiAgICAvL2RpZCBub3QgaGF2ZSBhIHBsdWdpbiBwcmVmaXguXG4gICAgZnVuY3Rpb24gc3BsaXRQcmVmaXgobmFtZSkge1xuICAgICAgICB2YXIgcHJlZml4LFxuICAgICAgICAgICAgaW5kZXggPSBuYW1lID8gbmFtZS5pbmRleE9mKCchJykgOiAtMTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHByZWZpeCA9IG5hbWUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZyhpbmRleCArIDEsIG5hbWUubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3ByZWZpeCwgbmFtZV07XG4gICAgfVxuXG4gICAgLy9DcmVhdGVzIGEgcGFydHMgYXJyYXkgZm9yIGEgcmVsTmFtZSB3aGVyZSBmaXJzdCBwYXJ0IGlzIHBsdWdpbiBJRCxcbiAgICAvL3NlY29uZCBwYXJ0IGlzIHJlc291cmNlIElELiBBc3N1bWVzIHJlbE5hbWUgaGFzIGFscmVhZHkgYmVlbiBub3JtYWxpemVkLlxuICAgIGZ1bmN0aW9uIG1ha2VSZWxQYXJ0cyhyZWxOYW1lKSB7XG4gICAgICAgIHJldHVybiByZWxOYW1lID8gc3BsaXRQcmVmaXgocmVsTmFtZSkgOiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIG5hbWUgbWFwLCBub3JtYWxpemluZyB0aGUgbmFtZSwgYW5kIHVzaW5nIGEgcGx1Z2luXG4gICAgICogZm9yIG5vcm1hbGl6YXRpb24gaWYgbmVjZXNzYXJ5LiBHcmFicyBhIHJlZiB0byBwbHVnaW5cbiAgICAgKiB0b28sIGFzIGFuIG9wdGltaXphdGlvbi5cbiAgICAgKi9cbiAgICBtYWtlTWFwID0gZnVuY3Rpb24gKG5hbWUsIHJlbFBhcnRzKSB7XG4gICAgICAgIHZhciBwbHVnaW4sXG4gICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpLFxuICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF0sXG4gICAgICAgICAgICByZWxSZXNvdXJjZU5hbWUgPSByZWxQYXJ0c1sxXTtcblxuICAgICAgICBuYW1lID0gcGFydHNbMV07XG5cbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgcHJlZml4ID0gbm9ybWFsaXplKHByZWZpeCwgcmVsUmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIHBsdWdpbiA9IGNhbGxEZXAocHJlZml4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vTm9ybWFsaXplIGFjY29yZGluZ1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luICYmIHBsdWdpbi5ub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gcGx1Z2luLm5vcm1hbGl6ZShuYW1lLCBtYWtlTm9ybWFsaXplKHJlbFJlc291cmNlTmFtZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplKG5hbWUsIHJlbFJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplKG5hbWUsIHJlbFJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpO1xuICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF07XG4gICAgICAgICAgICBuYW1lID0gcGFydHNbMV07XG4gICAgICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luID0gY2FsbERlcChwcmVmaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9Vc2luZyByaWRpY3Vsb3VzIHByb3BlcnR5IG5hbWVzIGZvciBzcGFjZSByZWFzb25zXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmOiBwcmVmaXggPyBwcmVmaXggKyAnIScgKyBuYW1lIDogbmFtZSwgLy9mdWxsTmFtZVxuICAgICAgICAgICAgbjogbmFtZSxcbiAgICAgICAgICAgIHByOiBwcmVmaXgsXG4gICAgICAgICAgICBwOiBwbHVnaW5cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWFrZUNvbmZpZyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbmZpZyAmJiBjb25maWcuY29uZmlnICYmIGNvbmZpZy5jb25maWdbbmFtZV0pIHx8IHt9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZXJzID0ge1xuICAgICAgICByZXF1aXJlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VSZXF1aXJlKG5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBleHBvcnRzOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIGUgPSBkZWZpbmVkW25hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRlZmluZWRbbmFtZV0gPSB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG5hbWUsXG4gICAgICAgICAgICAgICAgdXJpOiAnJyxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBkZWZpbmVkW25hbWVdLFxuICAgICAgICAgICAgICAgIGNvbmZpZzogbWFrZUNvbmZpZyhuYW1lKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtYWluID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKSB7XG4gICAgICAgIHZhciBjanNNb2R1bGUsIGRlcE5hbWUsIHJldCwgbWFwLCBpLCByZWxQYXJ0cyxcbiAgICAgICAgICAgIGFyZ3MgPSBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrVHlwZSA9IHR5cGVvZiBjYWxsYmFjayxcbiAgICAgICAgICAgIHVzaW5nRXhwb3J0cztcblxuICAgICAgICAvL1VzZSBuYW1lIGlmIG5vIHJlbE5hbWVcbiAgICAgICAgcmVsTmFtZSA9IHJlbE5hbWUgfHwgbmFtZTtcbiAgICAgICAgcmVsUGFydHMgPSBtYWtlUmVsUGFydHMocmVsTmFtZSk7XG5cbiAgICAgICAgLy9DYWxsIHRoZSBjYWxsYmFjayB0byBkZWZpbmUgdGhlIG1vZHVsZSwgaWYgbmVjZXNzYXJ5LlxuICAgICAgICBpZiAoY2FsbGJhY2tUeXBlID09PSAndW5kZWZpbmVkJyB8fCBjYWxsYmFja1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vUHVsbCBvdXQgdGhlIGRlZmluZWQgZGVwZW5kZW5jaWVzIGFuZCBwYXNzIHRoZSBvcmRlcmVkXG4gICAgICAgICAgICAvL3ZhbHVlcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICAvL0RlZmF1bHQgdG8gW3JlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZV0gaWYgbm8gZGVwc1xuICAgICAgICAgICAgZGVwcyA9ICFkZXBzLmxlbmd0aCAmJiBjYWxsYmFjay5sZW5ndGggPyBbJ3JlcXVpcmUnLCAnZXhwb3J0cycsICdtb2R1bGUnXSA6IGRlcHM7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG1hcCA9IG1ha2VNYXAoZGVwc1tpXSwgcmVsUGFydHMpO1xuICAgICAgICAgICAgICAgIGRlcE5hbWUgPSBtYXAuZjtcblxuICAgICAgICAgICAgICAgIC8vRmFzdCBwYXRoIENvbW1vbkpTIHN0YW5kYXJkIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICAgICBpZiAoZGVwTmFtZSA9PT0gXCJyZXF1aXJlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGhhbmRsZXJzLnJlcXVpcmUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXBOYW1lID09PSBcImV4cG9ydHNcIikge1xuICAgICAgICAgICAgICAgICAgICAvL0NvbW1vbkpTIG1vZHVsZSBzcGVjIDEuMVxuICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gaGFuZGxlcnMuZXhwb3J0cyhuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdXNpbmdFeHBvcnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlcE5hbWUgPT09IFwibW9kdWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9Db21tb25KUyBtb2R1bGUgc3BlYyAxLjFcbiAgICAgICAgICAgICAgICAgICAgY2pzTW9kdWxlID0gYXJnc1tpXSA9IGhhbmRsZXJzLm1vZHVsZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1Byb3AoZGVmaW5lZCwgZGVwTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Byb3Aod2FpdGluZywgZGVwTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Byb3AoZGVmaW5pbmcsIGRlcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBjYWxsRGVwKGRlcE5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFwLnApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnAubG9hZChtYXAubiwgbWFrZVJlcXVpcmUocmVsTmFtZSwgdHJ1ZSksIG1ha2VMb2FkKGRlcE5hbWUpLCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBkZWZpbmVkW2RlcE5hbWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJyBtaXNzaW5nICcgKyBkZXBOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldCA9IGNhbGxiYWNrID8gY2FsbGJhY2suYXBwbHkoZGVmaW5lZFtuYW1lXSwgYXJncykgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy9JZiBzZXR0aW5nIGV4cG9ydHMgdmlhIFwibW9kdWxlXCIgaXMgaW4gcGxheSxcbiAgICAgICAgICAgICAgICAvL2Zhdm9yIHRoYXQgb3ZlciByZXR1cm4gdmFsdWUgYW5kIGV4cG9ydHMuIEFmdGVyIHRoYXQsXG4gICAgICAgICAgICAgICAgLy9mYXZvciBhIG5vbi11bmRlZmluZWQgcmV0dXJuIHZhbHVlIG92ZXIgZXhwb3J0cyB1c2UuXG4gICAgICAgICAgICAgICAgaWYgKGNqc01vZHVsZSAmJiBjanNNb2R1bGUuZXhwb3J0cyAhPT0gdW5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNqc01vZHVsZS5leHBvcnRzICE9PSBkZWZpbmVkW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSBjanNNb2R1bGUuZXhwb3J0cztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJldCAhPT0gdW5kZWYgfHwgIXVzaW5nRXhwb3J0cykge1xuICAgICAgICAgICAgICAgICAgICAvL1VzZSB0aGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVkW25hbWVdID0gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAvL01heSBqdXN0IGJlIGFuIG9iamVjdCBkZWZpbml0aW9uIGZvciB0aGUgbW9kdWxlLiBPbmx5XG4gICAgICAgICAgICAvL3dvcnJ5IGFib3V0IGRlZmluaW5nIGlmIGhhdmUgYSBtb2R1bGUgbmFtZS5cbiAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1aXJlanMgPSByZXF1aXJlID0gcmVxID0gZnVuY3Rpb24gKGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lLCBmb3JjZVN5bmMsIGFsdCkge1xuICAgICAgICBpZiAodHlwZW9mIGRlcHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1tkZXBzXSkge1xuICAgICAgICAgICAgICAgIC8vY2FsbGJhY2sgaW4gdGhpcyBjYXNlIGlzIHJlYWxseSByZWxOYW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJzW2RlcHNdKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSnVzdCByZXR1cm4gdGhlIG1vZHVsZSB3YW50ZWQuIEluIHRoaXMgc2NlbmFyaW8sIHRoZVxuICAgICAgICAgICAgLy9kZXBzIGFyZyBpcyB0aGUgbW9kdWxlIG5hbWUsIGFuZCBzZWNvbmQgYXJnIChpZiBwYXNzZWQpXG4gICAgICAgICAgICAvL2lzIGp1c3QgdGhlIHJlbE5hbWUuXG4gICAgICAgICAgICAvL05vcm1hbGl6ZSBtb2R1bGUgbmFtZSwgaWYgaXQgY29udGFpbnMgLiBvciAuLlxuICAgICAgICAgICAgcmV0dXJuIGNhbGxEZXAobWFrZU1hcChkZXBzLCBtYWtlUmVsUGFydHMoY2FsbGJhY2spKS5mKTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVwcy5zcGxpY2UpIHtcbiAgICAgICAgICAgIC8vZGVwcyBpcyBhIGNvbmZpZyBvYmplY3QsIG5vdCBhbiBhcnJheS5cbiAgICAgICAgICAgIGNvbmZpZyA9IGRlcHM7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmRlcHMpIHtcbiAgICAgICAgICAgICAgICByZXEoY29uZmlnLmRlcHMsIGNvbmZpZy5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suc3BsaWNlKSB7XG4gICAgICAgICAgICAgICAgLy9jYWxsYmFjayBpcyBhbiBhcnJheSwgd2hpY2ggbWVhbnMgaXQgaXMgYSBkZXBlbmRlbmN5IGxpc3QuXG4gICAgICAgICAgICAgICAgLy9BZGp1c3QgYXJncyBpZiB0aGVyZSBhcmUgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgZGVwcyA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gcmVsTmFtZTtcbiAgICAgICAgICAgICAgICByZWxOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVwcyA9IHVuZGVmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9TdXBwb3J0IHJlcXVpcmUoWydhJ10pXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAgICAgLy9JZiByZWxOYW1lIGlzIGEgZnVuY3Rpb24sIGl0IGlzIGFuIGVycmJhY2sgaGFuZGxlcixcbiAgICAgICAgLy9zbyByZW1vdmUgaXQuXG4gICAgICAgIGlmICh0eXBlb2YgcmVsTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVsTmFtZSA9IGZvcmNlU3luYztcbiAgICAgICAgICAgIGZvcmNlU3luYyA9IGFsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vU2ltdWxhdGUgYXN5bmMgY2FsbGJhY2s7XG4gICAgICAgIGlmIChmb3JjZVN5bmMpIHtcbiAgICAgICAgICAgIG1haW4odW5kZWYsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vVXNpbmcgYSBub24temVybyB2YWx1ZSBiZWNhdXNlIG9mIGNvbmNlcm4gZm9yIHdoYXQgb2xkIGJyb3dzZXJzXG4gICAgICAgICAgICAvL2RvLCBhbmQgbGF0ZXN0IGJyb3dzZXJzIFwidXBncmFkZVwiIHRvIDQgaWYgbG93ZXIgdmFsdWUgaXMgdXNlZDpcbiAgICAgICAgICAgIC8vaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvdGltZXJzLmh0bWwjZG9tLXdpbmRvd3RpbWVycy1zZXR0aW1lb3V0OlxuICAgICAgICAgICAgLy9JZiB3YW50IGEgdmFsdWUgaW1tZWRpYXRlbHksIHVzZSByZXF1aXJlKCdpZCcpIGluc3RlYWQgLS0gc29tZXRoaW5nXG4gICAgICAgICAgICAvL3RoYXQgd29ya3MgaW4gYWxtb25kIG9uIHRoZSBnbG9iYWwgbGV2ZWwsIGJ1dCBub3QgZ3VhcmFudGVlZCBhbmRcbiAgICAgICAgICAgIC8vdW5saWtlbHkgdG8gd29yayBpbiBvdGhlciBBTUQgaW1wbGVtZW50YXRpb25zLlxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbWFpbih1bmRlZiwgZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUpO1xuICAgICAgICAgICAgfSwgNCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVxO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBKdXN0IGRyb3BzIHRoZSBjb25maWcgb24gdGhlIGZsb29yLCBidXQgcmV0dXJucyByZXEgaW4gY2FzZVxuICAgICAqIHRoZSBjb25maWcgcmV0dXJuIHZhbHVlIGlzIHVzZWQuXG4gICAgICovXG4gICAgcmVxLmNvbmZpZyA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICAgICAgcmV0dXJuIHJlcShjZmcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2UgbW9kdWxlIHJlZ2lzdHJ5IGZvciBkZWJ1Z2dpbmcgYW5kIHRvb2xpbmdcbiAgICAgKi9cbiAgICByZXF1aXJlanMuX2RlZmluZWQgPSBkZWZpbmVkO1xuXG4gICAgZGVmaW5lID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VlIGFsbW9uZCBSRUFETUU6IGluY29ycmVjdCBtb2R1bGUgYnVpbGQsIG5vIG1vZHVsZSBuYW1lJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RoaXMgbW9kdWxlIG1heSBub3QgaGF2ZSBkZXBlbmRlbmNpZXNcbiAgICAgICAgaWYgKCFkZXBzLnNwbGljZSkge1xuICAgICAgICAgICAgLy9kZXBzIGlzIG5vdCBhbiBhcnJheSwgc28gcHJvYmFibHkgbWVhbnNcbiAgICAgICAgICAgIC8vYW4gb2JqZWN0IGxpdGVyYWwgb3IgZmFjdG9yeSBmdW5jdGlvbiBmb3JcbiAgICAgICAgICAgIC8vdGhlIHZhbHVlLiBBZGp1c3QgYXJncy5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gZGVwcztcbiAgICAgICAgICAgIGRlcHMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzUHJvcChkZWZpbmVkLCBuYW1lKSAmJiAhaGFzUHJvcCh3YWl0aW5nLCBuYW1lKSkge1xuICAgICAgICAgICAgd2FpdGluZ1tuYW1lXSA9IFtuYW1lLCBkZXBzLCBjYWxsYmFja107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVmaW5lLmFtZCA9IHtcbiAgICAgICAgalF1ZXJ5OiB0cnVlXG4gICAgfTtcbn0oKSk7XG5cblMyLnJlcXVpcmVqcyA9IHJlcXVpcmVqcztTMi5yZXF1aXJlID0gcmVxdWlyZTtTMi5kZWZpbmUgPSBkZWZpbmU7XG59XG59KCkpO1xuUzIuZGVmaW5lKFwiYWxtb25kXCIsIGZ1bmN0aW9uKCl7fSk7XG5cbi8qIGdsb2JhbCBqUXVlcnk6ZmFsc2UsICQ6ZmFsc2UgKi9cblMyLmRlZmluZSgnanF1ZXJ5JyxbXSxmdW5jdGlvbiAoKSB7XG4gIHZhciBfJCA9IGpRdWVyeSB8fCAkO1xuXG4gIGlmIChfJCA9PSBudWxsICYmIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnU2VsZWN0MjogQW4gaW5zdGFuY2Ugb2YgalF1ZXJ5IG9yIGEgalF1ZXJ5LWNvbXBhdGlibGUgbGlicmFyeSB3YXMgbm90ICcgK1xuICAgICAgJ2ZvdW5kLiBNYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGluY2x1ZGluZyBqUXVlcnkgYmVmb3JlIFNlbGVjdDIgb24geW91ciAnICtcbiAgICAgICd3ZWIgcGFnZS4nXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBfJDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvdXRpbHMnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIHZhciBVdGlscyA9IHt9O1xuXG4gIFV0aWxzLkV4dGVuZCA9IGZ1bmN0aW9uIChDaGlsZENsYXNzLCBTdXBlckNsYXNzKSB7XG4gICAgdmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gICAgZnVuY3Rpb24gQmFzZUNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBDaGlsZENsYXNzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBTdXBlckNsYXNzKSB7XG4gICAgICBpZiAoX19oYXNQcm9wLmNhbGwoU3VwZXJDbGFzcywga2V5KSkge1xuICAgICAgICBDaGlsZENsYXNzW2tleV0gPSBTdXBlckNsYXNzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmFzZUNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IFN1cGVyQ2xhc3MucHJvdG90eXBlO1xuICAgIENoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IEJhc2VDb25zdHJ1Y3RvcigpO1xuICAgIENoaWxkQ2xhc3MuX19zdXBlcl9fID0gU3VwZXJDbGFzcy5wcm90b3R5cGU7XG5cbiAgICByZXR1cm4gQ2hpbGRDbGFzcztcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRNZXRob2RzICh0aGVDbGFzcykge1xuICAgIHZhciBwcm90byA9IHRoZUNsYXNzLnByb3RvdHlwZTtcblxuICAgIHZhciBtZXRob2RzID0gW107XG5cbiAgICBmb3IgKHZhciBtZXRob2ROYW1lIGluIHByb3RvKSB7XG4gICAgICB2YXIgbSA9IHByb3RvW21ldGhvZE5hbWVdO1xuXG4gICAgICBpZiAodHlwZW9mIG0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBtZXRob2RzLnB1c2gobWV0aG9kTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGhvZHM7XG4gIH1cblxuICBVdGlscy5EZWNvcmF0ZSA9IGZ1bmN0aW9uIChTdXBlckNsYXNzLCBEZWNvcmF0b3JDbGFzcykge1xuICAgIHZhciBkZWNvcmF0ZWRNZXRob2RzID0gZ2V0TWV0aG9kcyhEZWNvcmF0b3JDbGFzcyk7XG4gICAgdmFyIHN1cGVyTWV0aG9kcyA9IGdldE1ldGhvZHMoU3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBEZWNvcmF0ZWRDbGFzcyAoKSB7XG4gICAgICB2YXIgdW5zaGlmdCA9IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0O1xuXG4gICAgICB2YXIgYXJnQ291bnQgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IubGVuZ3RoO1xuXG4gICAgICB2YXIgY2FsbGVkQ29uc3RydWN0b3IgPSBTdXBlckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuICAgICAgaWYgKGFyZ0NvdW50ID4gMCkge1xuICAgICAgICB1bnNoaWZ0LmNhbGwoYXJndW1lbnRzLCBTdXBlckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgY2FsbGVkQ29uc3RydWN0b3IgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3I7XG4gICAgICB9XG5cbiAgICAgIGNhbGxlZENvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgRGVjb3JhdG9yQ2xhc3MuZGlzcGxheU5hbWUgPSBTdXBlckNsYXNzLmRpc3BsYXlOYW1lO1xuXG4gICAgZnVuY3Rpb24gY3RyICgpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBEZWNvcmF0ZWRDbGFzcztcbiAgICB9XG5cbiAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGUgPSBuZXcgY3RyKCk7XG5cbiAgICBmb3IgKHZhciBtID0gMDsgbSA8IHN1cGVyTWV0aG9kcy5sZW5ndGg7IG0rKykge1xuICAgICAgdmFyIHN1cGVyTWV0aG9kID0gc3VwZXJNZXRob2RzW21dO1xuXG4gICAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGVbc3VwZXJNZXRob2RdID1cbiAgICAgICAgU3VwZXJDbGFzcy5wcm90b3R5cGVbc3VwZXJNZXRob2RdO1xuICAgIH1cblxuICAgIHZhciBjYWxsZWRNZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgLy8gU3R1YiBvdXQgdGhlIG9yaWdpbmFsIG1ldGhvZCBpZiBpdCdzIG5vdCBkZWNvcmF0aW5nIGFuIGFjdHVhbCBtZXRob2RcbiAgICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICBpZiAobWV0aG9kTmFtZSBpbiBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGUpIHtcbiAgICAgICAgb3JpZ2luYWxNZXRob2QgPSBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWNvcmF0ZWRNZXRob2QgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1bnNoaWZ0ID0gQXJyYXkucHJvdG90eXBlLnVuc2hpZnQ7XG5cbiAgICAgICAgdW5zaGlmdC5jYWxsKGFyZ3VtZW50cywgb3JpZ2luYWxNZXRob2QpO1xuXG4gICAgICAgIHJldHVybiBkZWNvcmF0ZWRNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGVjb3JhdGVkTWV0aG9kcy5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGRlY29yYXRlZE1ldGhvZCA9IGRlY29yYXRlZE1ldGhvZHNbZF07XG5cbiAgICAgIERlY29yYXRlZENsYXNzLnByb3RvdHlwZVtkZWNvcmF0ZWRNZXRob2RdID0gY2FsbGVkTWV0aG9kKGRlY29yYXRlZE1ldGhvZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERlY29yYXRlZENsYXNzO1xuICB9O1xuXG4gIHZhciBPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCB7fTtcblxuICAgIGlmIChldmVudCBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBbY2FsbGJhY2tdO1xuICAgIH1cbiAgfTtcblxuICBPYnNlcnZhYmxlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICAgIHZhciBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgLy8gUGFyYW1zIHNob3VsZCBhbHdheXMgY29tZSBpbiBhcyBhbiBhcnJheVxuICAgIGlmIChwYXJhbXMgPT0gbnVsbCkge1xuICAgICAgcGFyYW1zID0gW107XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGFyZ3VtZW50cyB0byB0aGUgZXZlbnQsIHVzZSBhIHRlbXBvcmFyeSBvYmplY3RcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcGFyYW1zLnB1c2goe30pO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgYF90eXBlYCBvZiB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBldmVudFxuICAgIHBhcmFtc1swXS5fdHlwZSA9IGV2ZW50O1xuXG4gICAgaWYgKGV2ZW50IGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmludm9rZSh0aGlzLmxpc3RlbmVyc1tldmVudF0sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfVxuXG4gICAgaWYgKCcqJyBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5pbnZva2UodGhpcy5saXN0ZW5lcnNbJyonXSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGxpc3RlbmVycywgcGFyYW1zKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIFV0aWxzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuXG4gIFV0aWxzLmdlbmVyYXRlQ2hhcnMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgdmFyIGNoYXJzID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmFuZG9tQ2hhciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2KTtcbiAgICAgIGNoYXJzICs9IHJhbmRvbUNoYXIudG9TdHJpbmcoMzYpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGFycztcbiAgfTtcblxuICBVdGlscy5iaW5kID0gZnVuY3Rpb24gKGZ1bmMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgVXRpbHMuX2NvbnZlcnREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKHZhciBvcmlnaW5hbEtleSBpbiBkYXRhKSB7XG4gICAgICB2YXIga2V5cyA9IG9yaWdpbmFsS2V5LnNwbGl0KCctJyk7XG5cbiAgICAgIHZhciBkYXRhTGV2ZWwgPSBkYXRhO1xuXG4gICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwga2V5cy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXTtcblxuICAgICAgICAvLyBMb3dlcmNhc2UgdGhlIGZpcnN0IGxldHRlclxuICAgICAgICAvLyBCeSBkZWZhdWx0LCBkYXNoLXNlcGFyYXRlZCBiZWNvbWVzIGNhbWVsQ2FzZVxuICAgICAgICBrZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xuXG4gICAgICAgIGlmICghKGtleSBpbiBkYXRhTGV2ZWwpKSB7XG4gICAgICAgICAgZGF0YUxldmVsW2tleV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrID09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGRhdGFMZXZlbFtrZXldID0gZGF0YVtvcmlnaW5hbEtleV07XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhTGV2ZWwgPSBkYXRhTGV2ZWxba2V5XTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIGRhdGFbb3JpZ2luYWxLZXldO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIFV0aWxzLmhhc1Njcm9sbCA9IGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICAvLyBBZGFwdGVkIGZyb20gdGhlIGZ1bmN0aW9uIGNyZWF0ZWQgYnkgQFNoYWRvd1NjcmlwdGVyXG4gICAgLy8gYW5kIGFkYXB0ZWQgYnkgQEJpbGxCYXJyeSBvbiB0aGUgU3RhY2sgRXhjaGFuZ2UgQ29kZSBSZXZpZXcgd2Vic2l0ZS5cbiAgICAvLyBUaGUgb3JpZ2luYWwgY29kZSBjYW4gYmUgZm91bmQgYXRcbiAgICAvLyBodHRwOi8vY29kZXJldmlldy5zdGFja2V4Y2hhbmdlLmNvbS9xLzEzMzM4XG4gICAgLy8gYW5kIHdhcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggdGhlIFNpenpsZSBzZWxlY3RvciBlbmdpbmUuXG5cbiAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgdmFyIG92ZXJmbG93WCA9IGVsLnN0eWxlLm92ZXJmbG93WDtcbiAgICB2YXIgb3ZlcmZsb3dZID0gZWwuc3R5bGUub3ZlcmZsb3dZO1xuXG4gICAgLy9DaGVjayBib3RoIHggYW5kIHkgZGVjbGFyYXRpb25zXG4gICAgaWYgKG92ZXJmbG93WCA9PT0gb3ZlcmZsb3dZICYmXG4gICAgICAgIChvdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IG92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IG92ZXJmbG93WSA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAoJGVsLmlubmVySGVpZ2h0KCkgPCBlbC5zY3JvbGxIZWlnaHQgfHxcbiAgICAgICRlbC5pbm5lcldpZHRoKCkgPCBlbC5zY3JvbGxXaWR0aCk7XG4gIH07XG5cbiAgVXRpbHMuZXNjYXBlTWFya3VwID0gZnVuY3Rpb24gKG1hcmt1cCkge1xuICAgIHZhciByZXBsYWNlTWFwID0ge1xuICAgICAgJ1xcXFwnOiAnJiM5MjsnLFxuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJ1xcJyc6ICcmIzM5OycsXG4gICAgICAnLyc6ICcmIzQ3OydcbiAgICB9O1xuXG4gICAgLy8gRG8gbm90IHRyeSB0byBlc2NhcGUgdGhlIG1hcmt1cCBpZiBpdCdzIG5vdCBhIHN0cmluZ1xuICAgIGlmICh0eXBlb2YgbWFya3VwICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nKG1hcmt1cCkucmVwbGFjZSgvWyY8PlwiJ1xcL1xcXFxdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VNYXBbbWF0Y2hdO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEFwcGVuZCBhbiBhcnJheSBvZiBqUXVlcnkgbm9kZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxuICBVdGlscy5hcHBlbmRNYW55ID0gZnVuY3Rpb24gKCRlbGVtZW50LCAkbm9kZXMpIHtcbiAgICAvLyBqUXVlcnkgMS43LnggZG9lcyBub3Qgc3VwcG9ydCAkLmZuLmFwcGVuZCgpIHdpdGggYW4gYXJyYXlcbiAgICAvLyBGYWxsIGJhY2sgdG8gYSBqUXVlcnkgb2JqZWN0IGNvbGxlY3Rpb24gdXNpbmcgJC5mbi5hZGQoKVxuICAgIGlmICgkLmZuLmpxdWVyeS5zdWJzdHIoMCwgMykgPT09ICcxLjcnKSB7XG4gICAgICB2YXIgJGpxTm9kZXMgPSAkKCk7XG5cbiAgICAgICQubWFwKCRub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgJGpxTm9kZXMgPSAkanFOb2Rlcy5hZGQobm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgJG5vZGVzID0gJGpxTm9kZXM7XG4gICAgfVxuXG4gICAgJGVsZW1lbnQuYXBwZW5kKCRub2Rlcyk7XG4gIH07XG5cbiAgLy8gQ2FjaGUgb2JqZWN0cyBpbiBVdGlscy5fX2NhY2hlIGluc3RlYWQgb2YgJC5kYXRhIChzZWUgIzQzNDYpXG4gIFV0aWxzLl9fY2FjaGUgPSB7fTtcblxuICB2YXIgaWQgPSAwO1xuICBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIEdldCBhIHVuaXF1ZSBlbGVtZW50IElkLiBJZiBlbGVtZW50IGhhcyBubyBpZCxcbiAgICAvLyBjcmVhdGVzIGEgbmV3IHVuaXF1ZSBudW1iZXIsIHN0b3JlcyBpdCBpbiB0aGUgaWRcbiAgICAvLyBhdHRyaWJ1dGUgYW5kIHJldHVybnMgdGhlIG5ldyBpZC5cbiAgICAvLyBJZiBhbiBpZCBhbHJlYWR5IGV4aXN0cywgaXQgc2ltcGx5IHJldHVybnMgaXQuXG5cbiAgICB2YXIgc2VsZWN0MklkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcpO1xuICAgIGlmIChzZWxlY3QySWQgPT0gbnVsbCkge1xuICAgICAgLy8gSWYgZWxlbWVudCBoYXMgaWQsIHVzZSBpdC5cbiAgICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICAgIHNlbGVjdDJJZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdDItaWQnLCBzZWxlY3QySWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcsICsraWQpO1xuICAgICAgICBzZWxlY3QySWQgPSBpZC50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0MklkO1xuICB9O1xuXG4gIFV0aWxzLlN0b3JlRGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIC8vIFN0b3JlcyBhbiBpdGVtIGluIHRoZSBjYWNoZSBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAvLyBuYW1lIGlzIHRoZSBjYWNoZSBrZXkuXG4gICAgdmFyIGlkID0gVXRpbHMuR2V0VW5pcXVlRWxlbWVudElkKGVsZW1lbnQpO1xuICAgIGlmICghVXRpbHMuX19jYWNoZVtpZF0pIHtcbiAgICAgIFV0aWxzLl9fY2FjaGVbaWRdID0ge307XG4gICAgfVxuXG4gICAgVXRpbHMuX19jYWNoZVtpZF1bbmFtZV0gPSB2YWx1ZTtcbiAgfTtcblxuICBVdGlscy5HZXREYXRhID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAvLyBSZXRyaWV2ZXMgYSB2YWx1ZSBmcm9tIHRoZSBjYWNoZSBieSBpdHMga2V5IChuYW1lKVxuICAgIC8vIG5hbWUgaXMgb3B0aW9uYWwuIElmIG5vIG5hbWUgc3BlY2lmaWVkLCByZXR1cm5cbiAgICAvLyBhbGwgY2FjaGUgaXRlbXMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAvLyBhbmQgZm9yIGEgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgdmFyIGlkID0gVXRpbHMuR2V0VW5pcXVlRWxlbWVudElkKGVsZW1lbnQpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICBpZiAoVXRpbHMuX19jYWNoZVtpZF0pIHtcbiAgICAgICAgaWYgKFV0aWxzLl9fY2FjaGVbaWRdW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gVXRpbHMuX19jYWNoZVtpZF1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQoZWxlbWVudCkuZGF0YShuYW1lKTsgLy8gRmFsbGJhY2sgdG8gSFRNTDUgZGF0YSBhdHRyaWJzLlxuICAgICAgfVxuICAgICAgcmV0dXJuICQoZWxlbWVudCkuZGF0YShuYW1lKTsgLy8gRmFsbGJhY2sgdG8gSFRNTDUgZGF0YSBhdHRyaWJzLlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gVXRpbHMuX19jYWNoZVtpZF07XG4gICAgfVxuICB9O1xuXG4gIFV0aWxzLlJlbW92ZURhdGEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIFJlbW92ZXMgYWxsIGNhY2hlZCBpdGVtcyBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICB2YXIgaWQgPSBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQoZWxlbWVudCk7XG4gICAgaWYgKFV0aWxzLl9fY2FjaGVbaWRdICE9IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBVdGlscy5fX2NhY2hlW2lkXTtcbiAgICB9XG5cbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QyLWlkJyk7XG4gIH07XG5cbiAgcmV0dXJuIFV0aWxzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9yZXN1bHRzJyxbXG4gICdqcXVlcnknLFxuICAnLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBSZXN1bHRzICgkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5kYXRhID0gZGF0YUFkYXB0ZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIFJlc3VsdHMuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoUmVzdWx0cywgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkcmVzdWx0cyA9ICQoXG4gICAgICAnPHVsIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zXCIgcm9sZT1cImxpc3Rib3hcIj48L3VsPidcbiAgICApO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICRyZXN1bHRzLmF0dHIoJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICB0aGlzLiRyZXN1bHRzID0gJHJlc3VsdHM7XG5cbiAgICByZXR1cm4gJHJlc3VsdHM7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5lbXB0eSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmRpc3BsYXlNZXNzYWdlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIHZhciBlc2NhcGVNYXJrdXAgPSB0aGlzLm9wdGlvbnMuZ2V0KCdlc2NhcGVNYXJrdXAnKTtcblxuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICB2YXIgJG1lc3NhZ2UgPSAkKFxuICAgICAgJzxsaSByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIicgK1xuICAgICAgJyBjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCI+PC9saT4nXG4gICAgKTtcblxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KHBhcmFtcy5tZXNzYWdlKTtcblxuICAgICRtZXNzYWdlLmFwcGVuZChcbiAgICAgIGVzY2FwZU1hcmt1cChcbiAgICAgICAgbWVzc2FnZShwYXJhbXMuYXJncylcbiAgICAgIClcbiAgICApO1xuXG4gICAgJG1lc3NhZ2VbMF0uY2xhc3NOYW1lICs9ICcgc2VsZWN0Mi1yZXN1bHRzX19tZXNzYWdlJztcblxuICAgIHRoaXMuJHJlc3VsdHMuYXBwZW5kKCRtZXNzYWdlKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5oaWRlTWVzc2FnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19tZXNzYWdlJykucmVtb3ZlKCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICB2YXIgJG9wdGlvbnMgPSBbXTtcblxuICAgIGlmIChkYXRhLnJlc3VsdHMgPT0gbnVsbCB8fCBkYXRhLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGhpcy4kcmVzdWx0cy5jaGlsZHJlbigpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgICBtZXNzYWdlOiAnbm9SZXN1bHRzJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGEucmVzdWx0cyA9IHRoaXMuc29ydChkYXRhLnJlc3VsdHMpO1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBpdGVtID0gZGF0YS5yZXN1bHRzW2RdO1xuXG4gICAgICB2YXIgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGl0ZW0pO1xuXG4gICAgICAkb3B0aW9ucy5wdXNoKCRvcHRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuJHJlc3VsdHMuYXBwZW5kKCRvcHRpb25zKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5wb3NpdGlvbiA9IGZ1bmN0aW9uICgkcmVzdWx0cywgJGRyb3Bkb3duKSB7XG4gICAgdmFyICRyZXN1bHRzQ29udGFpbmVyID0gJGRyb3Bkb3duLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHMnKTtcbiAgICAkcmVzdWx0c0NvbnRhaW5lci5hcHBlbmQoJHJlc3VsdHMpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzb3J0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdzb3J0ZXInKTtcblxuICAgIHJldHVybiBzb3J0ZXIoZGF0YSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuaGlnaGxpZ2h0Rmlyc3RJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJHJlc3VsdHNcbiAgICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgIHZhciAkc2VsZWN0ZWQgPSAkb3B0aW9ucy5maWx0ZXIoJ1thcmlhLXNlbGVjdGVkPXRydWVdJyk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IHNlbGVjdGVkIG9wdGlvbnNcbiAgICBpZiAoJHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBzZWxlY3RlZCBvcHRpb25zLCBoaWdobGlnaHQgdGhlIGZpcnN0XG4gICAgICAkc2VsZWN0ZWQuZmlyc3QoKS50cmlnZ2VyKCdtb3VzZWVudGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBzZWxlY3RlZCBvcHRpb25zLCBoaWdobGlnaHQgdGhlIGZpcnN0IG9wdGlvblxuICAgICAgLy8gaW4gdGhlIGRyb3Bkb3duXG4gICAgICAkb3B0aW9ucy5maXJzdCgpLnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLmVuc3VyZUhpZ2hsaWdodFZpc2libGUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5zZXRDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YS5jdXJyZW50KGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgdmFyIHNlbGVjdGVkSWRzID0gJC5tYXAoc2VsZWN0ZWQsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzLmlkLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0c1xuICAgICAgICAuZmluZCgnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgdmFyIGl0ZW0gPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XG5cbiAgICAgICAgLy8gaWQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGEgc3RyaW5nIHdoZW4gY29tcGFyaW5nXG4gICAgICAgIHZhciBpZCA9ICcnICsgaXRlbS5pZDtcblxuICAgICAgICBpZiAoKGl0ZW0uZWxlbWVudCAhPSBudWxsICYmIGl0ZW0uZWxlbWVudC5zZWxlY3RlZCkgfHxcbiAgICAgICAgICAgIChpdGVtLmVsZW1lbnQgPT0gbnVsbCAmJiAkLmluQXJyYXkoaWQsIHNlbGVjdGVkSWRzKSA+IC0xKSkge1xuICAgICAgICAgICRvcHRpb24uYXR0cignYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJG9wdGlvbi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgdmFyIGxvYWRpbmdNb3JlID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KCdzZWFyY2hpbmcnKTtcblxuICAgIHZhciBsb2FkaW5nID0ge1xuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgdGV4dDogbG9hZGluZ01vcmUocGFyYW1zKVxuICAgIH07XG4gICAgdmFyICRsb2FkaW5nID0gdGhpcy5vcHRpb24obG9hZGluZyk7XG4gICAgJGxvYWRpbmcuY2xhc3NOYW1lICs9ICcgbG9hZGluZy1yZXN1bHRzJztcblxuICAgIHRoaXMuJHJlc3VsdHMucHJlcGVuZCgkbG9hZGluZyk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5maW5kKCcubG9hZGluZy1yZXN1bHRzJykucmVtb3ZlKCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUub3B0aW9uID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBvcHRpb24uY2xhc3NOYW1lID0gJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uJztcblxuICAgIHZhciBhdHRycyA9IHtcbiAgICAgICdyb2xlJzogJ29wdGlvbicsXG4gICAgICAnYXJpYS1zZWxlY3RlZCc6ICdmYWxzZSdcbiAgICB9O1xuXG4gICAgdmFyIG1hdGNoZXMgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fFxuICAgICAgd2luZG93LkVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgaWYgKChkYXRhLmVsZW1lbnQgIT0gbnVsbCAmJiBtYXRjaGVzLmNhbGwoZGF0YS5lbGVtZW50LCAnOmRpc2FibGVkJykpIHx8XG4gICAgICAgIChkYXRhLmVsZW1lbnQgPT0gbnVsbCAmJiBkYXRhLmRpc2FibGVkKSkge1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgICBhdHRyc1snYXJpYS1kaXNhYmxlZCddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmlkID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBhdHRyc1snYXJpYS1zZWxlY3RlZCddO1xuICAgIH1cblxuICAgIGlmIChkYXRhLl9yZXN1bHRJZCAhPSBudWxsKSB7XG4gICAgICBvcHRpb24uaWQgPSBkYXRhLl9yZXN1bHRJZDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50aXRsZSkge1xuICAgICAgb3B0aW9uLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgYXR0cnMucm9sZSA9ICdncm91cCc7XG4gICAgICBhdHRyc1snYXJpYS1sYWJlbCddID0gZGF0YS50ZXh0O1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgfVxuXG4gICAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuICAgICAgdmFyIHZhbCA9IGF0dHJzW2F0dHJdO1xuXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJChvcHRpb24pO1xuXG4gICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdzZWxlY3QyLXJlc3VsdHNfX2dyb3VwJztcblxuICAgICAgdmFyICRsYWJlbCA9ICQobGFiZWwpO1xuICAgICAgdGhpcy50ZW1wbGF0ZShkYXRhLCBsYWJlbCk7XG5cbiAgICAgIHZhciAkY2hpbGRyZW4gPSBbXTtcblxuICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBkYXRhLmNoaWxkcmVuLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGRhdGEuY2hpbGRyZW5bY107XG5cbiAgICAgICAgdmFyICRjaGlsZCA9IHRoaXMub3B0aW9uKGNoaWxkKTtcblxuICAgICAgICAkY2hpbGRyZW4ucHVzaCgkY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGNoaWxkcmVuQ29udGFpbmVyID0gJCgnPHVsPjwvdWw+Jywge1xuICAgICAgICAnY2xhc3MnOiAnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zIHNlbGVjdDItcmVzdWx0c19fb3B0aW9ucy0tbmVzdGVkJ1xuICAgICAgfSk7XG5cbiAgICAgICRjaGlsZHJlbkNvbnRhaW5lci5hcHBlbmQoJGNoaWxkcmVuKTtcblxuICAgICAgJG9wdGlvbi5hcHBlbmQobGFiZWwpO1xuICAgICAgJG9wdGlvbi5hcHBlbmQoJGNoaWxkcmVuQ29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZW1wbGF0ZShkYXRhLCBvcHRpb24pO1xuICAgIH1cblxuICAgIFV0aWxzLlN0b3JlRGF0YShvcHRpb24sICdkYXRhJywgZGF0YSk7XG5cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHRzJztcblxuICAgIHRoaXMuJHJlc3VsdHMuYXR0cignaWQnLCBpZCk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YWxsJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5jbGVhcigpO1xuICAgICAgc2VsZi5hcHBlbmQocGFyYW1zLmRhdGEpO1xuXG4gICAgICBpZiAoY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuICAgICAgICBzZWxmLmhpZ2hsaWdodEZpcnN0SXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFwcGVuZCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuYXBwZW5kKHBhcmFtcy5kYXRhKTtcblxuICAgICAgaWYgKGNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLnNldENsYXNzZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncXVlcnknLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmhpZGVNZXNzYWdlcygpO1xuICAgICAgc2VsZi5zaG93TG9hZGluZyhwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuXG4gICAgICBpZiAoc2VsZi5vcHRpb25zLmdldCgnc2Nyb2xsQWZ0ZXJTZWxlY3QnKSkge1xuICAgICAgICBzZWxmLmhpZ2hsaWdodEZpcnN0SXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG5cbiAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdzY3JvbGxBZnRlclNlbGVjdCcpKSB7XG4gICAgICAgIHNlbGYuaGlnaGxpZ2h0Rmlyc3RJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBvcGVuLCBhcmlhLWV4cGVuZGVkPVwidHJ1ZVwiXG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICBzZWxmLnNldENsYXNzZXMoKTtcbiAgICAgIHNlbGYuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIGNsb3NlZCwgYXJpYS1leHBlbmRlZD1cImZhbHNlXCJcbiAgICAgIHNlbGYuJHJlc3VsdHMuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBzZWxmLiRyZXN1bHRzLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnRvZ2dsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICRoaWdobGlnaHRlZC50cmlnZ2VyKCdtb3VzZXVwJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6c2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRoaWdobGlnaHRlZFswXSwgJ2RhdGEnKTtcblxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5hdHRyKCdhcmlhLXNlbGVjdGVkJykgPT0gJ3RydWUnKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignY2xvc2UnLCB7fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnByZXZpb3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIHZhciAkb3B0aW9ucyA9IHNlbGYuJHJlc3VsdHMuZmluZCgnW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICAgIHZhciBjdXJyZW50SW5kZXggPSAkb3B0aW9ucy5pbmRleCgkaGlnaGxpZ2h0ZWQpO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSBhdCB0aGUgdG9wLCBkb24ndCBtb3ZlIGZ1cnRoZXJcbiAgICAgIC8vIElmIG5vIG9wdGlvbnMsIGN1cnJlbnRJbmRleCB3aWxsIGJlIC0xXG4gICAgICBpZiAoY3VycmVudEluZGV4IDw9IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcblxuICAgICAgLy8gSWYgbm9uZSBhcmUgaGlnaGxpZ2h0ZWQsIGhpZ2hsaWdodCB0aGUgZmlyc3RcbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciAkbmV4dCA9ICRvcHRpb25zLmVxKG5leHRJbmRleCk7XG5cbiAgICAgICRuZXh0LnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciBuZXh0VG9wID0gJG5leHQub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIG5leHRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgpICsgKG5leHRUb3AgLSBjdXJyZW50T2Zmc2V0KTtcblxuICAgICAgaWYgKG5leHRJbmRleCA9PT0gMCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQgPCAwKSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKG5leHRPZmZzZXQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOm5leHQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0cy5maW5kKCdbYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XG5cbiAgICAgIHZhciBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgYXQgdGhlIGxhc3Qgb3B0aW9uLCBzdGF5IHRoZXJlXG4gICAgICBpZiAobmV4dEluZGV4ID49ICRvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciAkbmV4dCA9ICRvcHRpb25zLmVxKG5leHRJbmRleCk7XG5cbiAgICAgICRuZXh0LnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLm9mZnNldCgpLnRvcCArXG4gICAgICAgIHNlbGYuJHJlc3VsdHMub3V0ZXJIZWlnaHQoZmFsc2UpO1xuICAgICAgdmFyIG5leHRCb3R0b20gPSAkbmV4dC5vZmZzZXQoKS50b3AgKyAkbmV4dC5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgICB2YXIgbmV4dE9mZnNldCA9IHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyBuZXh0Qm90dG9tIC0gY3VycmVudE9mZnNldDtcblxuICAgICAgaWYgKG5leHRJbmRleCA9PT0gMCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dEJvdHRvbSA+IGN1cnJlbnRPZmZzZXQpIHtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AobmV4dE9mZnNldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBwYXJhbXMuZWxlbWVudC5hZGRDbGFzcygnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bWVzc2FnZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuZGlzcGxheU1lc3NhZ2UocGFyYW1zKTtcbiAgICB9KTtcblxuICAgIGlmICgkLmZuLm1vdXNld2hlZWwpIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdG9wID0gc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoKTtcblxuICAgICAgICB2YXIgYm90dG9tID0gc2VsZi4kcmVzdWx0cy5nZXQoMCkuc2Nyb2xsSGVpZ2h0IC0gdG9wICsgZS5kZWx0YVk7XG5cbiAgICAgICAgdmFyIGlzQXRUb3AgPSBlLmRlbHRhWSA+IDAgJiYgdG9wIC0gZS5kZWx0YVkgPD0gMDtcbiAgICAgICAgdmFyIGlzQXRCb3R0b20gPSBlLmRlbHRhWSA8IDAgJiYgYm90dG9tIDw9IHNlbGYuJHJlc3VsdHMuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGlzQXRUb3ApIHtcbiAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXRCb3R0b20pIHtcbiAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcChcbiAgICAgICAgICAgIHNlbGYuJHJlc3VsdHMuZ2V0KDApLnNjcm9sbEhlaWdodCAtIHNlbGYuJHJlc3VsdHMuaGVpZ2h0KClcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuJHJlc3VsdHMub24oJ21vdXNldXAnLCAnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWRdJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnZGF0YScpO1xuXG4gICAgICBpZiAoJHRoaXMuYXR0cignYXJpYS1zZWxlY3RlZCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0LFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcignY2xvc2UnLCB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0Jywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2VlbnRlcicsICcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XG5cbiAgICAgIHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZCcpO1xuXG4gICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6Zm9jdXMnLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGVsZW1lbnQ6ICQodGhpcylcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmdldEhpZ2hsaWdodGVkUmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGhpZ2hsaWdodGVkID0gdGhpcy4kcmVzdWx0c1xuICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG5cbiAgICByZXR1cm4gJGhpZ2hsaWdodGVkO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5yZW1vdmUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5lbnN1cmVIaWdobGlnaHRWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSB0aGlzLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRyZXN1bHRzLmZpbmQoJ1thcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XG5cbiAgICB2YXIgY3VycmVudE9mZnNldCA9IHRoaXMuJHJlc3VsdHMub2Zmc2V0KCkudG9wO1xuICAgIHZhciBuZXh0VG9wID0gJGhpZ2hsaWdodGVkLm9mZnNldCgpLnRvcDtcbiAgICB2YXIgbmV4dE9mZnNldCA9IHRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQpO1xuXG4gICAgdmFyIG9mZnNldERlbHRhID0gbmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQ7XG4gICAgbmV4dE9mZnNldCAtPSAkaGlnaGxpZ2h0ZWQub3V0ZXJIZWlnaHQoZmFsc2UpICogMjtcblxuICAgIGlmIChjdXJyZW50SW5kZXggPD0gMikge1xuICAgICAgdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AoMCk7XG4gICAgfSBlbHNlIGlmIChvZmZzZXREZWx0YSA+IHRoaXMuJHJlc3VsdHMub3V0ZXJIZWlnaHQoKSB8fCBvZmZzZXREZWx0YSA8IDApIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKG5leHRPZmZzZXQpO1xuICAgIH1cbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uIChyZXN1bHQsIGNvbnRhaW5lcikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlUmVzdWx0Jyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSB0ZW1wbGF0ZShyZXN1bHQsIGNvbnRhaW5lcik7XG5cbiAgICBpZiAoY29udGVudCA9PSBudWxsKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGVzY2FwZU1hcmt1cChjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChjb250YWluZXIpLmFwcGVuZChjb250ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJlc3VsdHM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2tleXMnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICB2YXIgS0VZUyA9IHtcbiAgICBCQUNLU1BBQ0U6IDgsXG4gICAgVEFCOiA5LFxuICAgIEVOVEVSOiAxMyxcbiAgICBTSElGVDogMTYsXG4gICAgQ1RSTDogMTcsXG4gICAgQUxUOiAxOCxcbiAgICBFU0M6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBQQUdFX1VQOiAzMyxcbiAgICBQQUdFX0RPV046IDM0LFxuICAgIEVORDogMzUsXG4gICAgSE9NRTogMzYsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBERUxFVEU6IDQ2XG4gIH07XG5cbiAgcmV0dXJuIEtFWVM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9iYXNlJyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBCYXNlU2VsZWN0aW9uICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgQmFzZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChCYXNlU2VsZWN0aW9uLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25cIiByb2xlPVwiY29tYm9ib3hcIiAnICtcbiAgICAgICcgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICB0aGlzLl90YWJpbmRleCA9IDA7XG5cbiAgICBpZiAoVXRpbHMuR2V0RGF0YSh0aGlzLiRlbGVtZW50WzBdLCAnb2xkLXRhYmluZGV4JykgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGFiaW5kZXggPSBVdGlscy5HZXREYXRhKHRoaXMuJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl90YWJpbmRleCA9IHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICAkc2VsZWN0aW9uLmF0dHIoJ3RpdGxlJywgdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScpKTtcbiAgICAkc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgdGhpcy5fdGFiaW5kZXgpO1xuICAgICRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uID0gJHNlbGVjdGlvbjtcblxuICAgIHJldHVybiAkc2VsZWN0aW9uO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHJlc3VsdHNJZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2ZvY3VzJywgZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX2hhbmRsZUJsdXIoZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcigna2V5cHJlc3MnLCBldnQpO1xuXG4gICAgICBpZiAoZXZ0LndoaWNoID09PSBLRVlTLlNQQUNFKSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHBhcmFtcy5kYXRhLl9yZXN1bHRJZCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdGlvbjp1cGRhdGUnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLnVwZGF0ZShwYXJhbXMuZGF0YSk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBvcGVuLCBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1vd25zJywgcmVzdWx0c0lkKTtcblxuICAgICAgc2VsZi5fYXR0YWNoQ2xvc2VIYW5kbGVyKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgY2xvc2VkLCBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5yZW1vdmVBdHRyKCdhcmlhLW93bnMnKTtcblxuICAgICAgc2VsZi4kc2VsZWN0aW9uLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cbiAgICAgIHNlbGYuX2RldGFjaENsb3NlSGFuZGxlcihjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdlbmFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cigndGFiaW5kZXgnLCBzZWxmLl90YWJpbmRleCk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuX2hhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBkZWxheWVkIGFzIHRoZSBhY3RpdmUgZWxlbWVudCBpcyB0aGUgYm9keSB3aGVuIHRoZSB0YWJcbiAgICAvLyBrZXkgaXMgcHJlc3NlZCwgcG9zc2libHkgYWxvbmcgd2l0aCBvdGhlcnMuXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRG9uJ3QgdHJpZ2dlciBgYmx1cmAgaWYgdGhlIGZvY3VzIGlzIHN0aWxsIGluIHRoZSBzZWxlY3Rpb25cbiAgICAgIGlmIChcbiAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gc2VsZi4kc2VsZWN0aW9uWzBdKSB8fFxuICAgICAgICAoJC5jb250YWlucyhzZWxmLiRzZWxlY3Rpb25bMF0sIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi50cmlnZ2VyKCdibHVyJywgZXZ0KTtcbiAgICB9LCAxKTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5fYXR0YWNoQ2xvc2VIYW5kbGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXG4gICAgJChkb2N1bWVudC5ib2R5KS5vbignbW91c2Vkb3duLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cbiAgICAgIHZhciAkc2VsZWN0ID0gJHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0MicpO1xuXG4gICAgICB2YXIgJGFsbCA9ICQoJy5zZWxlY3QyLnNlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG5cbiAgICAgICRhbGwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzID09ICRzZWxlY3RbMF0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJGVsZW1lbnQgPSBVdGlscy5HZXREYXRhKHRoaXMsICdlbGVtZW50Jyk7XG5cbiAgICAgICAgJGVsZW1lbnQuc2VsZWN0MignY2xvc2UnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLl9kZXRhY2hDbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgJChkb2N1bWVudC5ib2R5KS5vZmYoJ21vdXNlZG93bi5zZWxlY3QyLicgKyBjb250YWluZXIuaWQpO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCRzZWxlY3Rpb24sICRjb250YWluZXIpIHtcbiAgICB2YXIgJHNlbGVjdGlvbkNvbnRhaW5lciA9ICRjb250YWluZXIuZmluZCgnLnNlbGVjdGlvbicpO1xuICAgICRzZWxlY3Rpb25Db250YWluZXIuYXBwZW5kKCRzZWxlY3Rpb24pO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZGV0YWNoQ2xvc2VIYW5kbGVyKHRoaXMuY29udGFpbmVyKTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGB1cGRhdGVgIG1ldGhvZCBtdXN0IGJlIGRlZmluZWQgaW4gY2hpbGQgY2xhc3Nlcy4nKTtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJlbmFibGVkXCIgKG5vdCBcImRpc2FibGVkXCIpIHN0YXRlIG9mIHRoaXNcbiAgICogb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgaW5zdGFuY2UgaXMgbm90IGRpc2FibGVkLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGluc3RhbmNlIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuaXNFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0Rpc2FibGVkKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gYWJzdHJhY3QgdGhlIFwiZGlzYWJsZWRcIiBzdGF0ZSBvZiB0aGlzIG9iamVjdC5cbiAgICpcbiAgICogQHJldHVybiB7dHJ1ZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyB0cnVlLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyBmYWxzZS5cbiAgICovXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXQoJ2Rpc2FibGVkJyk7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VTZWxlY3Rpb247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9zaW5nbGUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL2Jhc2UnLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBCYXNlU2VsZWN0aW9uLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBTaW5nbGVTZWxlY3Rpb24gKCkge1xuICAgIFNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChTaW5nbGVTZWxlY3Rpb24sIEJhc2VTZWxlY3Rpb24pO1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkc2VsZWN0aW9uID0gU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5yZW5kZXIuY2FsbCh0aGlzKTtcblxuICAgICRzZWxlY3Rpb24uYWRkQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUnKTtcblxuICAgICRzZWxlY3Rpb24uaHRtbChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiPjwvc3Bhbj4nICtcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19hcnJvd1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj4nICtcbiAgICAgICAgJzxiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2I+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRzZWxlY3Rpb247XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIFNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uYmluZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1jb250YWluZXInO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKVxuICAgICAgLmF0dHIoJ2lkJywgaWQpXG4gICAgICAuYXR0cigncm9sZScsICd0ZXh0Ym94JylcbiAgICAgIC5hdHRyKCdhcmlhLXJlYWRvbmx5JywgJ3RydWUnKTtcbiAgICB0aGlzLiRzZWxlY3Rpb24uYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgaWQpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBPbmx5IHJlc3BvbmQgdG8gbGVmdCBjbGlja3NcbiAgICAgIGlmIChldnQud2hpY2ggIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRyaWdnZXIoJ3RvZ2dsZScsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBVc2VyIGZvY3VzZXMgb24gdGhlIGNvbnRhaW5lclxuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdibHVyJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gVXNlciBleGl0cyB0aGUgY29udGFpbmVyXG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKCFjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi4kc2VsZWN0aW9uLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcbiAgICAkcmVuZGVyZWQuZW1wdHkoKTtcbiAgICAkcmVuZGVyZWQucmVtb3ZlQXR0cigndGl0bGUnKTsgLy8gY2xlYXIgdG9vbHRpcCBvbiBlbXB0eVxuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuZGlzcGxheSA9IGZ1bmN0aW9uIChkYXRhLCBjb250YWluZXIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0ZW1wbGF0ZVNlbGVjdGlvbicpO1xuICAgIHZhciBlc2NhcGVNYXJrdXAgPSB0aGlzLm9wdGlvbnMuZ2V0KCdlc2NhcGVNYXJrdXAnKTtcblxuICAgIHJldHVybiBlc2NhcGVNYXJrdXAodGVtcGxhdGUoZGF0YSwgY29udGFpbmVyKSk7XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5zZWxlY3Rpb25Db250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICQoJzxzcGFuPjwvc3Bhbj4nKTtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNlbGVjdGlvbiA9IGRhdGFbMF07XG5cbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcbiAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy5kaXNwbGF5KHNlbGVjdGlvbiwgJHJlbmRlcmVkKTtcblxuICAgICRyZW5kZXJlZC5lbXB0eSgpLmFwcGVuZChmb3JtYXR0ZWQpO1xuXG4gICAgdmFyIHRpdGxlID0gc2VsZWN0aW9uLnRpdGxlIHx8IHNlbGVjdGlvbi50ZXh0O1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICAkcmVuZGVyZWQuYXR0cigndGl0bGUnLCB0aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2luZ2xlU2VsZWN0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vbXVsdGlwbGUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL2Jhc2UnLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgQmFzZVNlbGVjdGlvbiwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gTXVsdGlwbGVTZWxlY3Rpb24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoTXVsdGlwbGVTZWxlY3Rpb24sIEJhc2VTZWxlY3Rpb24pO1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSBNdWx0aXBsZVNlbGVjdGlvbi5fX3N1cGVyX18ucmVuZGVyLmNhbGwodGhpcyk7XG5cbiAgICAkc2VsZWN0aW9uLmFkZENsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUnKTtcblxuICAgICRzZWxlY3Rpb24uaHRtbChcbiAgICAgICc8dWwgY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIj48L3VsPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRzZWxlY3Rpb247XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ3RvZ2dsZScsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdjbGljaycsXG4gICAgICAnLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgaXQgaXMgZGlzYWJsZWRcbiAgICAgICAgaWYgKHNlbGYuaXNEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICRyZW1vdmUgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgJHNlbGVjdGlvbiA9ICRyZW1vdmUucGFyZW50KCk7XG5cbiAgICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRzZWxlY3Rpb25bMF0sICdkYXRhJyk7XG5cbiAgICAgICAgc2VsZi50cmlnZ2VyKCd1bnNlbGVjdCcsIHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcbiAgICAkcmVuZGVyZWQuZW1wdHkoKTtcbiAgICAkcmVuZGVyZWQucmVtb3ZlQXR0cigndGl0bGUnKTtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuZGlzcGxheSA9IGZ1bmN0aW9uIChkYXRhLCBjb250YWluZXIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0ZW1wbGF0ZVNlbGVjdGlvbicpO1xuICAgIHZhciBlc2NhcGVNYXJrdXAgPSB0aGlzLm9wdGlvbnMuZ2V0KCdlc2NhcGVNYXJrdXAnKTtcblxuICAgIHJldHVybiBlc2NhcGVNYXJrdXAodGVtcGxhdGUoZGF0YSwgY29udGFpbmVyKSk7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoXG4gICAgICAnPGxpIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZVwiPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmVcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+JyArXG4gICAgICAgICAgJyZ0aW1lczsnICtcbiAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICc8L2xpPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRzZWxlY3Rpb25zID0gW107XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSBkYXRhW2RdO1xuXG4gICAgICB2YXIgJHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uQ29udGFpbmVyKCk7XG4gICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy5kaXNwbGF5KHNlbGVjdGlvbiwgJHNlbGVjdGlvbik7XG5cbiAgICAgICRzZWxlY3Rpb24uYXBwZW5kKGZvcm1hdHRlZCk7XG5cbiAgICAgIHZhciB0aXRsZSA9IHNlbGVjdGlvbi50aXRsZSB8fCBzZWxlY3Rpb24udGV4dDtcblxuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICRzZWxlY3Rpb24uYXR0cigndGl0bGUnLCB0aXRsZSk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLlN0b3JlRGF0YSgkc2VsZWN0aW9uWzBdLCAnZGF0YScsIHNlbGVjdGlvbik7XG5cbiAgICAgICRzZWxlY3Rpb25zLnB1c2goJHNlbGVjdGlvbik7XG4gICAgfVxuXG4gICAgdmFyICRyZW5kZXJlZCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJyk7XG5cbiAgICBVdGlscy5hcHBlbmRNYW55KCRyZW5kZXJlZCwgJHNlbGVjdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBNdWx0aXBsZVNlbGVjdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL3BsYWNlaG9sZGVyJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBQbGFjZWhvbGRlciAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLm5vcm1hbGl6ZVBsYWNlaG9sZGVyKG9wdGlvbnMuZ2V0KCdwbGFjZWhvbGRlcicpKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFBsYWNlaG9sZGVyLnByb3RvdHlwZS5ub3JtYWxpemVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChfLCBwbGFjZWhvbGRlcikge1xuICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH07XG5cbiAgUGxhY2Vob2xkZXIucHJvdG90eXBlLmNyZWF0ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGxhY2Vob2xkZXIpIHtcbiAgICB2YXIgJHBsYWNlaG9sZGVyID0gdGhpcy5zZWxlY3Rpb25Db250YWluZXIoKTtcblxuICAgICRwbGFjZWhvbGRlci5odG1sKHRoaXMuZGlzcGxheShwbGFjZWhvbGRlcikpO1xuICAgICRwbGFjZWhvbGRlci5hZGRDbGFzcygnc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uX19jaG9pY2UnKTtcblxuICAgIHJldHVybiAkcGxhY2Vob2xkZXI7XG4gIH07XG5cbiAgUGxhY2Vob2xkZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICB2YXIgc2luZ2xlUGxhY2Vob2xkZXIgPSAoXG4gICAgICBkYXRhLmxlbmd0aCA9PSAxICYmIGRhdGFbMF0uaWQgIT0gdGhpcy5wbGFjZWhvbGRlci5pZFxuICAgICk7XG4gICAgdmFyIG11bHRpcGxlU2VsZWN0aW9ucyA9IGRhdGEubGVuZ3RoID4gMTtcblxuICAgIGlmIChtdWx0aXBsZVNlbGVjdGlvbnMgfHwgc2luZ2xlUGxhY2Vob2xkZXIpIHtcbiAgICAgIHJldHVybiBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB2YXIgJHBsYWNlaG9sZGVyID0gdGhpcy5jcmVhdGVQbGFjZWhvbGRlcih0aGlzLnBsYWNlaG9sZGVyKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykuYXBwZW5kKCRwbGFjZWhvbGRlcik7XG4gIH07XG5cbiAgcmV0dXJuIFBsYWNlaG9sZGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vYWxsb3dDbGVhcicsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL2tleXMnLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgS0VZUywgVXRpbHMpIHtcbiAgZnVuY3Rpb24gQWxsb3dDbGVhciAoKSB7IH1cblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnU2VsZWN0MjogVGhlIGBhbGxvd0NsZWFyYCBvcHRpb24gc2hvdWxkIGJlIHVzZWQgaW4gY29tYmluYXRpb24gJyArXG4gICAgICAgICAgJ3dpdGggdGhlIGBwbGFjZWhvbGRlcmAgb3B0aW9uLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ21vdXNlZG93bicsICcuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgc2VsZi5faGFuZGxlQ2xlYXIoZXZ0KTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9oYW5kbGVLZXlib2FyZENsZWFyKGV2dCwgY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS5faGFuZGxlQ2xlYXIgPSBmdW5jdGlvbiAoXywgZXZ0KSB7XG4gICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiBpdCBpcyBkaXNhYmxlZFxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkY2xlYXIgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhcicpO1xuXG4gICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiBub3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgaWYgKCRjbGVhci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJGNsZWFyWzBdLCAnZGF0YScpO1xuXG4gICAgdmFyIHByZXZpb3VzVmFsID0gdGhpcy4kZWxlbWVudC52YWwoKTtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh0aGlzLnBsYWNlaG9sZGVyLmlkKTtcblxuICAgIHZhciB1bnNlbGVjdERhdGEgPSB7XG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbiAgICB0aGlzLnRyaWdnZXIoJ2NsZWFyJywgdW5zZWxlY3REYXRhKTtcbiAgICBpZiAodW5zZWxlY3REYXRhLnByZXZlbnRlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC52YWwocHJldmlvdXNWYWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdW5zZWxlY3REYXRhID0ge1xuICAgICAgICBkYXRhOiBkYXRhW2RdXG4gICAgICB9O1xuXG4gICAgICAvLyBUcmlnZ2VyIHRoZSBgdW5zZWxlY3RgIGV2ZW50LCBzbyBwZW9wbGUgY2FuIHByZXZlbnQgaXQgZnJvbSBiZWluZ1xuICAgICAgLy8gY2xlYXJlZC5cbiAgICAgIHRoaXMudHJpZ2dlcigndW5zZWxlY3QnLCB1bnNlbGVjdERhdGEpO1xuXG4gICAgICAvLyBJZiB0aGUgZXZlbnQgd2FzIHByZXZlbnRlZCwgZG9uJ3QgY2xlYXIgaXQgb3V0LlxuICAgICAgaWYgKHVuc2VsZWN0RGF0YS5wcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC52YWwocHJldmlvdXNWYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgdGhpcy50cmlnZ2VyKCd0b2dnbGUnLCB7fSk7XG4gIH07XG5cbiAgQWxsb3dDbGVhci5wcm90b3R5cGUuX2hhbmRsZUtleWJvYXJkQ2xlYXIgPSBmdW5jdGlvbiAoXywgZXZ0LCBjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2dC53aGljaCA9PSBLRVlTLkRFTEVURSB8fCBldnQud2hpY2ggPT0gS0VZUy5CQUNLU1BBQ0UpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUNsZWFyKGV2dCk7XG4gICAgfVxuICB9O1xuXG4gIEFsbG93Q2xlYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgIGlmICh0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlcicpLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmVtb3ZlQWxsID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KCdyZW1vdmVBbGxJdGVtcycpO1xuXG4gICAgdmFyICRyZW1vdmUgPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyXCIgdGl0bGU9XCInICsgcmVtb3ZlQWxsKCkgKydcIj4nICtcbiAgICAgICAgJyZ0aW1lczsnICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG4gICAgVXRpbHMuU3RvcmVEYXRhKCRyZW1vdmVbMF0sICdkYXRhJywgZGF0YSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpLnByZXBlbmQoJHJlbW92ZSk7XG4gIH07XG5cbiAgcmV0dXJuIEFsbG93Q2xlYXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9zZWFyY2gnLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscycsXG4gICcuLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzLCBLRVlTKSB7XG4gIGZ1bmN0aW9uIFNlYXJjaCAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFNlYXJjaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHZhciAkc2VhcmNoID0gJChcbiAgICAgICc8bGkgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0taW5saW5lXCI+JyArXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCItMVwiJyArXG4gICAgICAgICcgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIicgK1xuICAgICAgICAnIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJzZWFyY2hib3hcIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiAvPicgK1xuICAgICAgJzwvbGk+J1xuICAgICk7XG5cbiAgICB0aGlzLiRzZWFyY2hDb250YWluZXIgPSAkc2VhcmNoO1xuICAgIHRoaXMuJHNlYXJjaCA9ICRzZWFyY2guZmluZCgnaW5wdXQnKTtcblxuICAgIHZhciAkcmVuZGVyZWQgPSBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuX3RyYW5zZmVyVGFiSW5kZXgoKTtcblxuICAgIHJldHVybiAkcmVuZGVyZWQ7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHJlc3VsdHNJZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ2FyaWEtY29udHJvbHMnLCByZXN1bHRzSWQpO1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnZhbCgnJyk7XG4gICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1jb250cm9scycpO1xuICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2VuYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgc2VsZi5fdHJhbnNmZXJUYWJJbmRleCgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBpZiAocGFyYW1zLmRhdGEuX3Jlc3VsdElkKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBwYXJhbXMuZGF0YS5fcmVzdWx0SWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1c2luJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdmb2N1cycsIGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3Vzb3V0JywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5faGFuZGxlQmx1cihldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdrZXlkb3duJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBzZWxmLnRyaWdnZXIoJ2tleXByZXNzJywgZXZ0KTtcblxuICAgICAgc2VsZi5fa2V5VXBQcmV2ZW50ZWQgPSBldnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG5cbiAgICAgIHZhciBrZXkgPSBldnQud2hpY2g7XG5cbiAgICAgIGlmIChrZXkgPT09IEtFWVMuQkFDS1NQQUNFICYmIHNlbGYuJHNlYXJjaC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgdmFyICRwcmV2aW91c0Nob2ljZSA9IHNlbGYuJHNlYXJjaENvbnRhaW5lclxuICAgICAgICAgIC5wcmV2KCcuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZScpO1xuXG4gICAgICAgIGlmICgkcHJldmlvdXNDaG9pY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBpdGVtID0gVXRpbHMuR2V0RGF0YSgkcHJldmlvdXNDaG9pY2VbMF0sICdkYXRhJyk7XG5cbiAgICAgICAgICBzZWxmLnNlYXJjaFJlbW92ZUNob2ljZShpdGVtKTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2NsaWNrJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKHNlbGYuJHNlYXJjaC52YWwoKSkge1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUcnkgdG8gZGV0ZWN0IHRoZSBJRSB2ZXJzaW9uIHNob3VsZCB0aGUgYGRvY3VtZW50TW9kZWAgcHJvcGVydHkgdGhhdFxuICAgIC8vIGlzIHN0b3JlZCBvbiB0aGUgZG9jdW1lbnQuIFRoaXMgaXMgb25seSBpbXBsZW1lbnRlZCBpbiBJRSBhbmQgaXNcbiAgICAvLyBzbGlnaHRseSBjbGVhbmVyIHRoYW4gZG9pbmcgYSB1c2VyIGFnZW50IGNoZWNrLlxuICAgIC8vIFRoaXMgcHJvcGVydHkgaXMgbm90IGF2YWlsYWJsZSBpbiBFZGdlLCBidXQgRWRnZSBhbHNvIGRvZXNuJ3QgaGF2ZVxuICAgIC8vIHRoaXMgYnVnLlxuICAgIHZhciBtc2llID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICAgIHZhciBkaXNhYmxlSW5wdXRFdmVudHMgPSBtc2llICYmIG1zaWUgPD0gMTE7XG5cbiAgICAvLyBXb3JrYXJvdW5kIGZvciBicm93c2VycyB3aGljaCBkbyBub3Qgc3VwcG9ydCB0aGUgYGlucHV0YCBldmVudFxuICAgIC8vIFRoaXMgd2lsbCBwcmV2ZW50IGRvdWJsZS10cmlnZ2VyaW5nIG9mIGV2ZW50cyBmb3IgYnJvd3NlcnMgd2hpY2ggc3VwcG9ydFxuICAgIC8vIGJvdGggdGhlIGBrZXl1cGAgYW5kIGBpbnB1dGAgZXZlbnRzLlxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdpbnB1dC5zZWFyY2hjaGVjaycsXG4gICAgICAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyBJRSB3aWxsIHRyaWdnZXIgdGhlIGBpbnB1dGAgZXZlbnQgd2hlbiBhIHBsYWNlaG9sZGVyIGlzIHVzZWQgb24gYVxuICAgICAgICAvLyBzZWFyY2ggYm94LiBUbyBnZXQgYXJvdW5kIHRoaXMgaXNzdWUsIHdlIGFyZSBmb3JjZWQgdG8gaWdub3JlIGFsbFxuICAgICAgICAvLyBgaW5wdXRgIGV2ZW50cyBpbiBJRSBhbmQga2VlcCB1c2luZyBga2V5dXBgLlxuICAgICAgICBpZiAoZGlzYWJsZUlucHV0RXZlbnRzKSB7XG4gICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLm9mZignaW5wdXQuc2VhcmNoIGlucHV0LnNlYXJjaGNoZWNrJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5iaW5kIHRoZSBkdXBsaWNhdGVkIGBrZXl1cGAgZXZlbnRcbiAgICAgICAgc2VsZi4kc2VsZWN0aW9uLm9mZigna2V5dXAuc2VhcmNoJyk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdrZXl1cC5zZWFyY2ggaW5wdXQuc2VhcmNoJyxcbiAgICAgICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElFIHdpbGwgdHJpZ2dlciB0aGUgYGlucHV0YCBldmVudCB3aGVuIGEgcGxhY2Vob2xkZXIgaXMgdXNlZCBvbiBhXG4gICAgICAgIC8vIHNlYXJjaCBib3guIFRvIGdldCBhcm91bmQgdGhpcyBpc3N1ZSwgd2UgYXJlIGZvcmNlZCB0byBpZ25vcmUgYWxsXG4gICAgICAgIC8vIGBpbnB1dGAgZXZlbnRzIGluIElFIGFuZCBrZWVwIHVzaW5nIGBrZXl1cGAuXG4gICAgICAgIGlmIChkaXNhYmxlSW5wdXRFdmVudHMgJiYgZXZ0LnR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24ub2ZmKCdpbnB1dC5zZWFyY2ggaW5wdXQuc2VhcmNoY2hlY2snKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5ID0gZXZ0LndoaWNoO1xuXG4gICAgICAgIC8vIFdlIGNhbiBmcmVlbHkgaWdub3JlIGV2ZW50cyBmcm9tIG1vZGlmaWVyIGtleXNcbiAgICAgICAgaWYgKGtleSA9PSBLRVlTLlNISUZUIHx8IGtleSA9PSBLRVlTLkNUUkwgfHwga2V5ID09IEtFWVMuQUxUKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiYmluZyB3aWxsIGJlIGhhbmRsZWQgZHVyaW5nIHRoZSBga2V5ZG93bmAgcGhhc2VcbiAgICAgICAgaWYgKGtleSA9PSBLRVlTLlRBQikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaGFuZGxlU2VhcmNoKGV2dCk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCB0cmFuc2ZlciB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gdGhlIHJlbmRlcmVkXG4gICAqIHNlbGVjdGlvbiB0byB0aGUgc2VhcmNoIGJveC4gVGhpcyBhbGxvd3MgZm9yIHRoZSBzZWFyY2ggYm94IHRvIGJlIHVzZWQgYXNcbiAgICogdGhlIHByaW1hcnkgZm9jdXMgaW5zdGVhZCBvZiB0aGUgc2VsZWN0aW9uIGNvbnRhaW5lci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFNlYXJjaC5wcm90b3R5cGUuX3RyYW5zZmVyVGFiSW5kZXggPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdGhpcy4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgdGhpcy4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JykpO1xuICAgIHRoaXMuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuY3JlYXRlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwbGFjZWhvbGRlcikge1xuICAgIHRoaXMuJHNlYXJjaC5hdHRyKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyLnRleHQpO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIHZhciBzZWFyY2hIYWRGb2N1cyA9IHRoaXMuJHNlYXJjaFswXSA9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgdGhpcy4kc2VhcmNoLmF0dHIoJ3BsYWNlaG9sZGVyJywgJycpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpXG4gICAgICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLiRzZWFyY2hDb250YWluZXIpO1xuXG4gICAgdGhpcy5yZXNpemVTZWFyY2goKTtcbiAgICBpZiAoc2VhcmNoSGFkRm9jdXMpIHtcbiAgICAgIHRoaXMuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgIH1cbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmhhbmRsZVNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc2l6ZVNlYXJjaCgpO1xuXG4gICAgaWYgKCF0aGlzLl9rZXlVcFByZXZlbnRlZCkge1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy4kc2VhcmNoLnZhbCgpO1xuXG4gICAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5Jywge1xuICAgICAgICB0ZXJtOiBpbnB1dFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fa2V5VXBQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnNlYXJjaFJlbW92ZUNob2ljZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGl0ZW0pIHtcbiAgICB0aGlzLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgZGF0YTogaXRlbVxuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VhcmNoLnZhbChpdGVtLnRleHQpO1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoKCk7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5yZXNpemVTZWFyY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kc2VhcmNoLmNzcygnd2lkdGgnLCAnMjVweCcpO1xuXG4gICAgdmFyIHdpZHRoID0gJyc7XG5cbiAgICBpZiAodGhpcy4kc2VhcmNoLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09ICcnKSB7XG4gICAgICB3aWR0aCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykud2lkdGgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1pbmltdW1XaWR0aCA9IHRoaXMuJHNlYXJjaC52YWwoKS5sZW5ndGggKyAxO1xuXG4gICAgICB3aWR0aCA9IChtaW5pbXVtV2lkdGggKiAwLjc1KSArICdlbSc7XG4gICAgfVxuXG4gICAgdGhpcy4kc2VhcmNoLmNzcygnd2lkdGgnLCB3aWR0aCk7XG4gIH07XG5cbiAgcmV0dXJuIFNlYXJjaDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL2V2ZW50UmVsYXknLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIEV2ZW50UmVsYXkgKCkgeyB9XG5cbiAgRXZlbnRSZWxheS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcmVsYXlFdmVudHMgPSBbXG4gICAgICAnb3BlbicsICdvcGVuaW5nJyxcbiAgICAgICdjbG9zZScsICdjbG9zaW5nJyxcbiAgICAgICdzZWxlY3QnLCAnc2VsZWN0aW5nJyxcbiAgICAgICd1bnNlbGVjdCcsICd1bnNlbGVjdGluZycsXG4gICAgICAnY2xlYXInLCAnY2xlYXJpbmcnXG4gICAgXTtcblxuICAgIHZhciBwcmV2ZW50YWJsZUV2ZW50cyA9IFtcbiAgICAgICdvcGVuaW5nJywgJ2Nsb3NpbmcnLCAnc2VsZWN0aW5nJywgJ3Vuc2VsZWN0aW5nJywgJ2NsZWFyaW5nJ1xuICAgIF07XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgLy8gSWdub3JlIGV2ZW50cyB0aGF0IHNob3VsZCBub3QgYmUgcmVsYXllZFxuICAgICAgaWYgKCQuaW5BcnJheShuYW1lLCByZWxheUV2ZW50cykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHBhcmFtZXRlcnMgc2hvdWxkIGFsd2F5cyBiZSBhbiBvYmplY3RcbiAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgICAgLy8gR2VuZXJhdGUgdGhlIGpRdWVyeSBldmVudCBmb3IgdGhlIFNlbGVjdDIgZXZlbnRcbiAgICAgIHZhciBldnQgPSAkLkV2ZW50KCdzZWxlY3QyOicgKyBuYW1lLCB7XG4gICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICB9KTtcblxuICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKGV2dCk7XG5cbiAgICAgIC8vIE9ubHkgaGFuZGxlIHByZXZlbnRhYmxlIGV2ZW50cyBpZiBpdCB3YXMgb25lXG4gICAgICBpZiAoJC5pbkFycmF5KG5hbWUsIHByZXZlbnRhYmxlRXZlbnRzKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwYXJhbXMucHJldmVudGVkID0gZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBFdmVudFJlbGF5O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi90cmFuc2xhdGlvbicsW1xuICAnanF1ZXJ5JyxcbiAgJ3JlcXVpcmUnXG5dLCBmdW5jdGlvbiAoJCwgcmVxdWlyZSkge1xuICBmdW5jdGlvbiBUcmFuc2xhdGlvbiAoZGljdCkge1xuICAgIHRoaXMuZGljdCA9IGRpY3QgfHwge307XG4gIH1cblxuICBUcmFuc2xhdGlvbi5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRpY3Q7XG4gIH07XG5cbiAgVHJhbnNsYXRpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5kaWN0W2tleV07XG4gIH07XG5cbiAgVHJhbnNsYXRpb24ucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uICh0cmFuc2xhdGlvbikge1xuICAgIHRoaXMuZGljdCA9ICQuZXh0ZW5kKHt9LCB0cmFuc2xhdGlvbi5hbGwoKSwgdGhpcy5kaWN0KTtcbiAgfTtcblxuICAvLyBTdGF0aWMgZnVuY3Rpb25zXG5cbiAgVHJhbnNsYXRpb24uX2NhY2hlID0ge307XG5cbiAgVHJhbnNsYXRpb24ubG9hZFBhdGggPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIGlmICghKHBhdGggaW4gVHJhbnNsYXRpb24uX2NhY2hlKSkge1xuICAgICAgdmFyIHRyYW5zbGF0aW9ucyA9IHJlcXVpcmUocGF0aCk7XG5cbiAgICAgIFRyYW5zbGF0aW9uLl9jYWNoZVtwYXRoXSA9IHRyYW5zbGF0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uKFRyYW5zbGF0aW9uLl9jYWNoZVtwYXRoXSk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zbGF0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kaWFjcml0aWNzJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRpYWNyaXRpY3MgPSB7XG4gICAgJ1xcdTI0QjYnOiAnQScsXG4gICAgJ1xcdUZGMjEnOiAnQScsXG4gICAgJ1xcdTAwQzAnOiAnQScsXG4gICAgJ1xcdTAwQzEnOiAnQScsXG4gICAgJ1xcdTAwQzInOiAnQScsXG4gICAgJ1xcdTFFQTYnOiAnQScsXG4gICAgJ1xcdTFFQTQnOiAnQScsXG4gICAgJ1xcdTFFQUEnOiAnQScsXG4gICAgJ1xcdTFFQTgnOiAnQScsXG4gICAgJ1xcdTAwQzMnOiAnQScsXG4gICAgJ1xcdTAxMDAnOiAnQScsXG4gICAgJ1xcdTAxMDInOiAnQScsXG4gICAgJ1xcdTFFQjAnOiAnQScsXG4gICAgJ1xcdTFFQUUnOiAnQScsXG4gICAgJ1xcdTFFQjQnOiAnQScsXG4gICAgJ1xcdTFFQjInOiAnQScsXG4gICAgJ1xcdTAyMjYnOiAnQScsXG4gICAgJ1xcdTAxRTAnOiAnQScsXG4gICAgJ1xcdTAwQzQnOiAnQScsXG4gICAgJ1xcdTAxREUnOiAnQScsXG4gICAgJ1xcdTFFQTInOiAnQScsXG4gICAgJ1xcdTAwQzUnOiAnQScsXG4gICAgJ1xcdTAxRkEnOiAnQScsXG4gICAgJ1xcdTAxQ0QnOiAnQScsXG4gICAgJ1xcdTAyMDAnOiAnQScsXG4gICAgJ1xcdTAyMDInOiAnQScsXG4gICAgJ1xcdTFFQTAnOiAnQScsXG4gICAgJ1xcdTFFQUMnOiAnQScsXG4gICAgJ1xcdTFFQjYnOiAnQScsXG4gICAgJ1xcdTFFMDAnOiAnQScsXG4gICAgJ1xcdTAxMDQnOiAnQScsXG4gICAgJ1xcdTAyM0EnOiAnQScsXG4gICAgJ1xcdTJDNkYnOiAnQScsXG4gICAgJ1xcdUE3MzInOiAnQUEnLFxuICAgICdcXHUwMEM2JzogJ0FFJyxcbiAgICAnXFx1MDFGQyc6ICdBRScsXG4gICAgJ1xcdTAxRTInOiAnQUUnLFxuICAgICdcXHVBNzM0JzogJ0FPJyxcbiAgICAnXFx1QTczNic6ICdBVScsXG4gICAgJ1xcdUE3MzgnOiAnQVYnLFxuICAgICdcXHVBNzNBJzogJ0FWJyxcbiAgICAnXFx1QTczQyc6ICdBWScsXG4gICAgJ1xcdTI0QjcnOiAnQicsXG4gICAgJ1xcdUZGMjInOiAnQicsXG4gICAgJ1xcdTFFMDInOiAnQicsXG4gICAgJ1xcdTFFMDQnOiAnQicsXG4gICAgJ1xcdTFFMDYnOiAnQicsXG4gICAgJ1xcdTAyNDMnOiAnQicsXG4gICAgJ1xcdTAxODInOiAnQicsXG4gICAgJ1xcdTAxODEnOiAnQicsXG4gICAgJ1xcdTI0QjgnOiAnQycsXG4gICAgJ1xcdUZGMjMnOiAnQycsXG4gICAgJ1xcdTAxMDYnOiAnQycsXG4gICAgJ1xcdTAxMDgnOiAnQycsXG4gICAgJ1xcdTAxMEEnOiAnQycsXG4gICAgJ1xcdTAxMEMnOiAnQycsXG4gICAgJ1xcdTAwQzcnOiAnQycsXG4gICAgJ1xcdTFFMDgnOiAnQycsXG4gICAgJ1xcdTAxODcnOiAnQycsXG4gICAgJ1xcdTAyM0InOiAnQycsXG4gICAgJ1xcdUE3M0UnOiAnQycsXG4gICAgJ1xcdTI0QjknOiAnRCcsXG4gICAgJ1xcdUZGMjQnOiAnRCcsXG4gICAgJ1xcdTFFMEEnOiAnRCcsXG4gICAgJ1xcdTAxMEUnOiAnRCcsXG4gICAgJ1xcdTFFMEMnOiAnRCcsXG4gICAgJ1xcdTFFMTAnOiAnRCcsXG4gICAgJ1xcdTFFMTInOiAnRCcsXG4gICAgJ1xcdTFFMEUnOiAnRCcsXG4gICAgJ1xcdTAxMTAnOiAnRCcsXG4gICAgJ1xcdTAxOEInOiAnRCcsXG4gICAgJ1xcdTAxOEEnOiAnRCcsXG4gICAgJ1xcdTAxODknOiAnRCcsXG4gICAgJ1xcdUE3NzknOiAnRCcsXG4gICAgJ1xcdTAxRjEnOiAnRFonLFxuICAgICdcXHUwMUM0JzogJ0RaJyxcbiAgICAnXFx1MDFGMic6ICdEeicsXG4gICAgJ1xcdTAxQzUnOiAnRHonLFxuICAgICdcXHUyNEJBJzogJ0UnLFxuICAgICdcXHVGRjI1JzogJ0UnLFxuICAgICdcXHUwMEM4JzogJ0UnLFxuICAgICdcXHUwMEM5JzogJ0UnLFxuICAgICdcXHUwMENBJzogJ0UnLFxuICAgICdcXHUxRUMwJzogJ0UnLFxuICAgICdcXHUxRUJFJzogJ0UnLFxuICAgICdcXHUxRUM0JzogJ0UnLFxuICAgICdcXHUxRUMyJzogJ0UnLFxuICAgICdcXHUxRUJDJzogJ0UnLFxuICAgICdcXHUwMTEyJzogJ0UnLFxuICAgICdcXHUxRTE0JzogJ0UnLFxuICAgICdcXHUxRTE2JzogJ0UnLFxuICAgICdcXHUwMTE0JzogJ0UnLFxuICAgICdcXHUwMTE2JzogJ0UnLFxuICAgICdcXHUwMENCJzogJ0UnLFxuICAgICdcXHUxRUJBJzogJ0UnLFxuICAgICdcXHUwMTFBJzogJ0UnLFxuICAgICdcXHUwMjA0JzogJ0UnLFxuICAgICdcXHUwMjA2JzogJ0UnLFxuICAgICdcXHUxRUI4JzogJ0UnLFxuICAgICdcXHUxRUM2JzogJ0UnLFxuICAgICdcXHUwMjI4JzogJ0UnLFxuICAgICdcXHUxRTFDJzogJ0UnLFxuICAgICdcXHUwMTE4JzogJ0UnLFxuICAgICdcXHUxRTE4JzogJ0UnLFxuICAgICdcXHUxRTFBJzogJ0UnLFxuICAgICdcXHUwMTkwJzogJ0UnLFxuICAgICdcXHUwMThFJzogJ0UnLFxuICAgICdcXHUyNEJCJzogJ0YnLFxuICAgICdcXHVGRjI2JzogJ0YnLFxuICAgICdcXHUxRTFFJzogJ0YnLFxuICAgICdcXHUwMTkxJzogJ0YnLFxuICAgICdcXHVBNzdCJzogJ0YnLFxuICAgICdcXHUyNEJDJzogJ0cnLFxuICAgICdcXHVGRjI3JzogJ0cnLFxuICAgICdcXHUwMUY0JzogJ0cnLFxuICAgICdcXHUwMTFDJzogJ0cnLFxuICAgICdcXHUxRTIwJzogJ0cnLFxuICAgICdcXHUwMTFFJzogJ0cnLFxuICAgICdcXHUwMTIwJzogJ0cnLFxuICAgICdcXHUwMUU2JzogJ0cnLFxuICAgICdcXHUwMTIyJzogJ0cnLFxuICAgICdcXHUwMUU0JzogJ0cnLFxuICAgICdcXHUwMTkzJzogJ0cnLFxuICAgICdcXHVBN0EwJzogJ0cnLFxuICAgICdcXHVBNzdEJzogJ0cnLFxuICAgICdcXHVBNzdFJzogJ0cnLFxuICAgICdcXHUyNEJEJzogJ0gnLFxuICAgICdcXHVGRjI4JzogJ0gnLFxuICAgICdcXHUwMTI0JzogJ0gnLFxuICAgICdcXHUxRTIyJzogJ0gnLFxuICAgICdcXHUxRTI2JzogJ0gnLFxuICAgICdcXHUwMjFFJzogJ0gnLFxuICAgICdcXHUxRTI0JzogJ0gnLFxuICAgICdcXHUxRTI4JzogJ0gnLFxuICAgICdcXHUxRTJBJzogJ0gnLFxuICAgICdcXHUwMTI2JzogJ0gnLFxuICAgICdcXHUyQzY3JzogJ0gnLFxuICAgICdcXHUyQzc1JzogJ0gnLFxuICAgICdcXHVBNzhEJzogJ0gnLFxuICAgICdcXHUyNEJFJzogJ0knLFxuICAgICdcXHVGRjI5JzogJ0knLFxuICAgICdcXHUwMENDJzogJ0knLFxuICAgICdcXHUwMENEJzogJ0knLFxuICAgICdcXHUwMENFJzogJ0knLFxuICAgICdcXHUwMTI4JzogJ0knLFxuICAgICdcXHUwMTJBJzogJ0knLFxuICAgICdcXHUwMTJDJzogJ0knLFxuICAgICdcXHUwMTMwJzogJ0knLFxuICAgICdcXHUwMENGJzogJ0knLFxuICAgICdcXHUxRTJFJzogJ0knLFxuICAgICdcXHUxRUM4JzogJ0knLFxuICAgICdcXHUwMUNGJzogJ0knLFxuICAgICdcXHUwMjA4JzogJ0knLFxuICAgICdcXHUwMjBBJzogJ0knLFxuICAgICdcXHUxRUNBJzogJ0knLFxuICAgICdcXHUwMTJFJzogJ0knLFxuICAgICdcXHUxRTJDJzogJ0knLFxuICAgICdcXHUwMTk3JzogJ0knLFxuICAgICdcXHUyNEJGJzogJ0onLFxuICAgICdcXHVGRjJBJzogJ0onLFxuICAgICdcXHUwMTM0JzogJ0onLFxuICAgICdcXHUwMjQ4JzogJ0onLFxuICAgICdcXHUyNEMwJzogJ0snLFxuICAgICdcXHVGRjJCJzogJ0snLFxuICAgICdcXHUxRTMwJzogJ0snLFxuICAgICdcXHUwMUU4JzogJ0snLFxuICAgICdcXHUxRTMyJzogJ0snLFxuICAgICdcXHUwMTM2JzogJ0snLFxuICAgICdcXHUxRTM0JzogJ0snLFxuICAgICdcXHUwMTk4JzogJ0snLFxuICAgICdcXHUyQzY5JzogJ0snLFxuICAgICdcXHVBNzQwJzogJ0snLFxuICAgICdcXHVBNzQyJzogJ0snLFxuICAgICdcXHVBNzQ0JzogJ0snLFxuICAgICdcXHVBN0EyJzogJ0snLFxuICAgICdcXHUyNEMxJzogJ0wnLFxuICAgICdcXHVGRjJDJzogJ0wnLFxuICAgICdcXHUwMTNGJzogJ0wnLFxuICAgICdcXHUwMTM5JzogJ0wnLFxuICAgICdcXHUwMTNEJzogJ0wnLFxuICAgICdcXHUxRTM2JzogJ0wnLFxuICAgICdcXHUxRTM4JzogJ0wnLFxuICAgICdcXHUwMTNCJzogJ0wnLFxuICAgICdcXHUxRTNDJzogJ0wnLFxuICAgICdcXHUxRTNBJzogJ0wnLFxuICAgICdcXHUwMTQxJzogJ0wnLFxuICAgICdcXHUwMjNEJzogJ0wnLFxuICAgICdcXHUyQzYyJzogJ0wnLFxuICAgICdcXHUyQzYwJzogJ0wnLFxuICAgICdcXHVBNzQ4JzogJ0wnLFxuICAgICdcXHVBNzQ2JzogJ0wnLFxuICAgICdcXHVBNzgwJzogJ0wnLFxuICAgICdcXHUwMUM3JzogJ0xKJyxcbiAgICAnXFx1MDFDOCc6ICdMaicsXG4gICAgJ1xcdTI0QzInOiAnTScsXG4gICAgJ1xcdUZGMkQnOiAnTScsXG4gICAgJ1xcdTFFM0UnOiAnTScsXG4gICAgJ1xcdTFFNDAnOiAnTScsXG4gICAgJ1xcdTFFNDInOiAnTScsXG4gICAgJ1xcdTJDNkUnOiAnTScsXG4gICAgJ1xcdTAxOUMnOiAnTScsXG4gICAgJ1xcdTI0QzMnOiAnTicsXG4gICAgJ1xcdUZGMkUnOiAnTicsXG4gICAgJ1xcdTAxRjgnOiAnTicsXG4gICAgJ1xcdTAxNDMnOiAnTicsXG4gICAgJ1xcdTAwRDEnOiAnTicsXG4gICAgJ1xcdTFFNDQnOiAnTicsXG4gICAgJ1xcdTAxNDcnOiAnTicsXG4gICAgJ1xcdTFFNDYnOiAnTicsXG4gICAgJ1xcdTAxNDUnOiAnTicsXG4gICAgJ1xcdTFFNEEnOiAnTicsXG4gICAgJ1xcdTFFNDgnOiAnTicsXG4gICAgJ1xcdTAyMjAnOiAnTicsXG4gICAgJ1xcdTAxOUQnOiAnTicsXG4gICAgJ1xcdUE3OTAnOiAnTicsXG4gICAgJ1xcdUE3QTQnOiAnTicsXG4gICAgJ1xcdTAxQ0EnOiAnTkonLFxuICAgICdcXHUwMUNCJzogJ05qJyxcbiAgICAnXFx1MjRDNCc6ICdPJyxcbiAgICAnXFx1RkYyRic6ICdPJyxcbiAgICAnXFx1MDBEMic6ICdPJyxcbiAgICAnXFx1MDBEMyc6ICdPJyxcbiAgICAnXFx1MDBENCc6ICdPJyxcbiAgICAnXFx1MUVEMic6ICdPJyxcbiAgICAnXFx1MUVEMCc6ICdPJyxcbiAgICAnXFx1MUVENic6ICdPJyxcbiAgICAnXFx1MUVENCc6ICdPJyxcbiAgICAnXFx1MDBENSc6ICdPJyxcbiAgICAnXFx1MUU0Qyc6ICdPJyxcbiAgICAnXFx1MDIyQyc6ICdPJyxcbiAgICAnXFx1MUU0RSc6ICdPJyxcbiAgICAnXFx1MDE0Qyc6ICdPJyxcbiAgICAnXFx1MUU1MCc6ICdPJyxcbiAgICAnXFx1MUU1Mic6ICdPJyxcbiAgICAnXFx1MDE0RSc6ICdPJyxcbiAgICAnXFx1MDIyRSc6ICdPJyxcbiAgICAnXFx1MDIzMCc6ICdPJyxcbiAgICAnXFx1MDBENic6ICdPJyxcbiAgICAnXFx1MDIyQSc6ICdPJyxcbiAgICAnXFx1MUVDRSc6ICdPJyxcbiAgICAnXFx1MDE1MCc6ICdPJyxcbiAgICAnXFx1MDFEMSc6ICdPJyxcbiAgICAnXFx1MDIwQyc6ICdPJyxcbiAgICAnXFx1MDIwRSc6ICdPJyxcbiAgICAnXFx1MDFBMCc6ICdPJyxcbiAgICAnXFx1MUVEQyc6ICdPJyxcbiAgICAnXFx1MUVEQSc6ICdPJyxcbiAgICAnXFx1MUVFMCc6ICdPJyxcbiAgICAnXFx1MUVERSc6ICdPJyxcbiAgICAnXFx1MUVFMic6ICdPJyxcbiAgICAnXFx1MUVDQyc6ICdPJyxcbiAgICAnXFx1MUVEOCc6ICdPJyxcbiAgICAnXFx1MDFFQSc6ICdPJyxcbiAgICAnXFx1MDFFQyc6ICdPJyxcbiAgICAnXFx1MDBEOCc6ICdPJyxcbiAgICAnXFx1MDFGRSc6ICdPJyxcbiAgICAnXFx1MDE4Nic6ICdPJyxcbiAgICAnXFx1MDE5Ric6ICdPJyxcbiAgICAnXFx1QTc0QSc6ICdPJyxcbiAgICAnXFx1QTc0Qyc6ICdPJyxcbiAgICAnXFx1MDE1Mic6ICdPRScsXG4gICAgJ1xcdTAxQTInOiAnT0knLFxuICAgICdcXHVBNzRFJzogJ09PJyxcbiAgICAnXFx1MDIyMic6ICdPVScsXG4gICAgJ1xcdTI0QzUnOiAnUCcsXG4gICAgJ1xcdUZGMzAnOiAnUCcsXG4gICAgJ1xcdTFFNTQnOiAnUCcsXG4gICAgJ1xcdTFFNTYnOiAnUCcsXG4gICAgJ1xcdTAxQTQnOiAnUCcsXG4gICAgJ1xcdTJDNjMnOiAnUCcsXG4gICAgJ1xcdUE3NTAnOiAnUCcsXG4gICAgJ1xcdUE3NTInOiAnUCcsXG4gICAgJ1xcdUE3NTQnOiAnUCcsXG4gICAgJ1xcdTI0QzYnOiAnUScsXG4gICAgJ1xcdUZGMzEnOiAnUScsXG4gICAgJ1xcdUE3NTYnOiAnUScsXG4gICAgJ1xcdUE3NTgnOiAnUScsXG4gICAgJ1xcdTAyNEEnOiAnUScsXG4gICAgJ1xcdTI0QzcnOiAnUicsXG4gICAgJ1xcdUZGMzInOiAnUicsXG4gICAgJ1xcdTAxNTQnOiAnUicsXG4gICAgJ1xcdTFFNTgnOiAnUicsXG4gICAgJ1xcdTAxNTgnOiAnUicsXG4gICAgJ1xcdTAyMTAnOiAnUicsXG4gICAgJ1xcdTAyMTInOiAnUicsXG4gICAgJ1xcdTFFNUEnOiAnUicsXG4gICAgJ1xcdTFFNUMnOiAnUicsXG4gICAgJ1xcdTAxNTYnOiAnUicsXG4gICAgJ1xcdTFFNUUnOiAnUicsXG4gICAgJ1xcdTAyNEMnOiAnUicsXG4gICAgJ1xcdTJDNjQnOiAnUicsXG4gICAgJ1xcdUE3NUEnOiAnUicsXG4gICAgJ1xcdUE3QTYnOiAnUicsXG4gICAgJ1xcdUE3ODInOiAnUicsXG4gICAgJ1xcdTI0QzgnOiAnUycsXG4gICAgJ1xcdUZGMzMnOiAnUycsXG4gICAgJ1xcdTFFOUUnOiAnUycsXG4gICAgJ1xcdTAxNUEnOiAnUycsXG4gICAgJ1xcdTFFNjQnOiAnUycsXG4gICAgJ1xcdTAxNUMnOiAnUycsXG4gICAgJ1xcdTFFNjAnOiAnUycsXG4gICAgJ1xcdTAxNjAnOiAnUycsXG4gICAgJ1xcdTFFNjYnOiAnUycsXG4gICAgJ1xcdTFFNjInOiAnUycsXG4gICAgJ1xcdTFFNjgnOiAnUycsXG4gICAgJ1xcdTAyMTgnOiAnUycsXG4gICAgJ1xcdTAxNUUnOiAnUycsXG4gICAgJ1xcdTJDN0UnOiAnUycsXG4gICAgJ1xcdUE3QTgnOiAnUycsXG4gICAgJ1xcdUE3ODQnOiAnUycsXG4gICAgJ1xcdTI0QzknOiAnVCcsXG4gICAgJ1xcdUZGMzQnOiAnVCcsXG4gICAgJ1xcdTFFNkEnOiAnVCcsXG4gICAgJ1xcdTAxNjQnOiAnVCcsXG4gICAgJ1xcdTFFNkMnOiAnVCcsXG4gICAgJ1xcdTAyMUEnOiAnVCcsXG4gICAgJ1xcdTAxNjInOiAnVCcsXG4gICAgJ1xcdTFFNzAnOiAnVCcsXG4gICAgJ1xcdTFFNkUnOiAnVCcsXG4gICAgJ1xcdTAxNjYnOiAnVCcsXG4gICAgJ1xcdTAxQUMnOiAnVCcsXG4gICAgJ1xcdTAxQUUnOiAnVCcsXG4gICAgJ1xcdTAyM0UnOiAnVCcsXG4gICAgJ1xcdUE3ODYnOiAnVCcsXG4gICAgJ1xcdUE3MjgnOiAnVFonLFxuICAgICdcXHUyNENBJzogJ1UnLFxuICAgICdcXHVGRjM1JzogJ1UnLFxuICAgICdcXHUwMEQ5JzogJ1UnLFxuICAgICdcXHUwMERBJzogJ1UnLFxuICAgICdcXHUwMERCJzogJ1UnLFxuICAgICdcXHUwMTY4JzogJ1UnLFxuICAgICdcXHUxRTc4JzogJ1UnLFxuICAgICdcXHUwMTZBJzogJ1UnLFxuICAgICdcXHUxRTdBJzogJ1UnLFxuICAgICdcXHUwMTZDJzogJ1UnLFxuICAgICdcXHUwMERDJzogJ1UnLFxuICAgICdcXHUwMURCJzogJ1UnLFxuICAgICdcXHUwMUQ3JzogJ1UnLFxuICAgICdcXHUwMUQ1JzogJ1UnLFxuICAgICdcXHUwMUQ5JzogJ1UnLFxuICAgICdcXHUxRUU2JzogJ1UnLFxuICAgICdcXHUwMTZFJzogJ1UnLFxuICAgICdcXHUwMTcwJzogJ1UnLFxuICAgICdcXHUwMUQzJzogJ1UnLFxuICAgICdcXHUwMjE0JzogJ1UnLFxuICAgICdcXHUwMjE2JzogJ1UnLFxuICAgICdcXHUwMUFGJzogJ1UnLFxuICAgICdcXHUxRUVBJzogJ1UnLFxuICAgICdcXHUxRUU4JzogJ1UnLFxuICAgICdcXHUxRUVFJzogJ1UnLFxuICAgICdcXHUxRUVDJzogJ1UnLFxuICAgICdcXHUxRUYwJzogJ1UnLFxuICAgICdcXHUxRUU0JzogJ1UnLFxuICAgICdcXHUxRTcyJzogJ1UnLFxuICAgICdcXHUwMTcyJzogJ1UnLFxuICAgICdcXHUxRTc2JzogJ1UnLFxuICAgICdcXHUxRTc0JzogJ1UnLFxuICAgICdcXHUwMjQ0JzogJ1UnLFxuICAgICdcXHUyNENCJzogJ1YnLFxuICAgICdcXHVGRjM2JzogJ1YnLFxuICAgICdcXHUxRTdDJzogJ1YnLFxuICAgICdcXHUxRTdFJzogJ1YnLFxuICAgICdcXHUwMUIyJzogJ1YnLFxuICAgICdcXHVBNzVFJzogJ1YnLFxuICAgICdcXHUwMjQ1JzogJ1YnLFxuICAgICdcXHVBNzYwJzogJ1ZZJyxcbiAgICAnXFx1MjRDQyc6ICdXJyxcbiAgICAnXFx1RkYzNyc6ICdXJyxcbiAgICAnXFx1MUU4MCc6ICdXJyxcbiAgICAnXFx1MUU4Mic6ICdXJyxcbiAgICAnXFx1MDE3NCc6ICdXJyxcbiAgICAnXFx1MUU4Nic6ICdXJyxcbiAgICAnXFx1MUU4NCc6ICdXJyxcbiAgICAnXFx1MUU4OCc6ICdXJyxcbiAgICAnXFx1MkM3Mic6ICdXJyxcbiAgICAnXFx1MjRDRCc6ICdYJyxcbiAgICAnXFx1RkYzOCc6ICdYJyxcbiAgICAnXFx1MUU4QSc6ICdYJyxcbiAgICAnXFx1MUU4Qyc6ICdYJyxcbiAgICAnXFx1MjRDRSc6ICdZJyxcbiAgICAnXFx1RkYzOSc6ICdZJyxcbiAgICAnXFx1MUVGMic6ICdZJyxcbiAgICAnXFx1MDBERCc6ICdZJyxcbiAgICAnXFx1MDE3Nic6ICdZJyxcbiAgICAnXFx1MUVGOCc6ICdZJyxcbiAgICAnXFx1MDIzMic6ICdZJyxcbiAgICAnXFx1MUU4RSc6ICdZJyxcbiAgICAnXFx1MDE3OCc6ICdZJyxcbiAgICAnXFx1MUVGNic6ICdZJyxcbiAgICAnXFx1MUVGNCc6ICdZJyxcbiAgICAnXFx1MDFCMyc6ICdZJyxcbiAgICAnXFx1MDI0RSc6ICdZJyxcbiAgICAnXFx1MUVGRSc6ICdZJyxcbiAgICAnXFx1MjRDRic6ICdaJyxcbiAgICAnXFx1RkYzQSc6ICdaJyxcbiAgICAnXFx1MDE3OSc6ICdaJyxcbiAgICAnXFx1MUU5MCc6ICdaJyxcbiAgICAnXFx1MDE3Qic6ICdaJyxcbiAgICAnXFx1MDE3RCc6ICdaJyxcbiAgICAnXFx1MUU5Mic6ICdaJyxcbiAgICAnXFx1MUU5NCc6ICdaJyxcbiAgICAnXFx1MDFCNSc6ICdaJyxcbiAgICAnXFx1MDIyNCc6ICdaJyxcbiAgICAnXFx1MkM3Ric6ICdaJyxcbiAgICAnXFx1MkM2Qic6ICdaJyxcbiAgICAnXFx1QTc2Mic6ICdaJyxcbiAgICAnXFx1MjREMCc6ICdhJyxcbiAgICAnXFx1RkY0MSc6ICdhJyxcbiAgICAnXFx1MUU5QSc6ICdhJyxcbiAgICAnXFx1MDBFMCc6ICdhJyxcbiAgICAnXFx1MDBFMSc6ICdhJyxcbiAgICAnXFx1MDBFMic6ICdhJyxcbiAgICAnXFx1MUVBNyc6ICdhJyxcbiAgICAnXFx1MUVBNSc6ICdhJyxcbiAgICAnXFx1MUVBQic6ICdhJyxcbiAgICAnXFx1MUVBOSc6ICdhJyxcbiAgICAnXFx1MDBFMyc6ICdhJyxcbiAgICAnXFx1MDEwMSc6ICdhJyxcbiAgICAnXFx1MDEwMyc6ICdhJyxcbiAgICAnXFx1MUVCMSc6ICdhJyxcbiAgICAnXFx1MUVBRic6ICdhJyxcbiAgICAnXFx1MUVCNSc6ICdhJyxcbiAgICAnXFx1MUVCMyc6ICdhJyxcbiAgICAnXFx1MDIyNyc6ICdhJyxcbiAgICAnXFx1MDFFMSc6ICdhJyxcbiAgICAnXFx1MDBFNCc6ICdhJyxcbiAgICAnXFx1MDFERic6ICdhJyxcbiAgICAnXFx1MUVBMyc6ICdhJyxcbiAgICAnXFx1MDBFNSc6ICdhJyxcbiAgICAnXFx1MDFGQic6ICdhJyxcbiAgICAnXFx1MDFDRSc6ICdhJyxcbiAgICAnXFx1MDIwMSc6ICdhJyxcbiAgICAnXFx1MDIwMyc6ICdhJyxcbiAgICAnXFx1MUVBMSc6ICdhJyxcbiAgICAnXFx1MUVBRCc6ICdhJyxcbiAgICAnXFx1MUVCNyc6ICdhJyxcbiAgICAnXFx1MUUwMSc6ICdhJyxcbiAgICAnXFx1MDEwNSc6ICdhJyxcbiAgICAnXFx1MkM2NSc6ICdhJyxcbiAgICAnXFx1MDI1MCc6ICdhJyxcbiAgICAnXFx1QTczMyc6ICdhYScsXG4gICAgJ1xcdTAwRTYnOiAnYWUnLFxuICAgICdcXHUwMUZEJzogJ2FlJyxcbiAgICAnXFx1MDFFMyc6ICdhZScsXG4gICAgJ1xcdUE3MzUnOiAnYW8nLFxuICAgICdcXHVBNzM3JzogJ2F1JyxcbiAgICAnXFx1QTczOSc6ICdhdicsXG4gICAgJ1xcdUE3M0InOiAnYXYnLFxuICAgICdcXHVBNzNEJzogJ2F5JyxcbiAgICAnXFx1MjREMSc6ICdiJyxcbiAgICAnXFx1RkY0Mic6ICdiJyxcbiAgICAnXFx1MUUwMyc6ICdiJyxcbiAgICAnXFx1MUUwNSc6ICdiJyxcbiAgICAnXFx1MUUwNyc6ICdiJyxcbiAgICAnXFx1MDE4MCc6ICdiJyxcbiAgICAnXFx1MDE4Myc6ICdiJyxcbiAgICAnXFx1MDI1Myc6ICdiJyxcbiAgICAnXFx1MjREMic6ICdjJyxcbiAgICAnXFx1RkY0Myc6ICdjJyxcbiAgICAnXFx1MDEwNyc6ICdjJyxcbiAgICAnXFx1MDEwOSc6ICdjJyxcbiAgICAnXFx1MDEwQic6ICdjJyxcbiAgICAnXFx1MDEwRCc6ICdjJyxcbiAgICAnXFx1MDBFNyc6ICdjJyxcbiAgICAnXFx1MUUwOSc6ICdjJyxcbiAgICAnXFx1MDE4OCc6ICdjJyxcbiAgICAnXFx1MDIzQyc6ICdjJyxcbiAgICAnXFx1QTczRic6ICdjJyxcbiAgICAnXFx1MjE4NCc6ICdjJyxcbiAgICAnXFx1MjREMyc6ICdkJyxcbiAgICAnXFx1RkY0NCc6ICdkJyxcbiAgICAnXFx1MUUwQic6ICdkJyxcbiAgICAnXFx1MDEwRic6ICdkJyxcbiAgICAnXFx1MUUwRCc6ICdkJyxcbiAgICAnXFx1MUUxMSc6ICdkJyxcbiAgICAnXFx1MUUxMyc6ICdkJyxcbiAgICAnXFx1MUUwRic6ICdkJyxcbiAgICAnXFx1MDExMSc6ICdkJyxcbiAgICAnXFx1MDE4Qyc6ICdkJyxcbiAgICAnXFx1MDI1Nic6ICdkJyxcbiAgICAnXFx1MDI1Nyc6ICdkJyxcbiAgICAnXFx1QTc3QSc6ICdkJyxcbiAgICAnXFx1MDFGMyc6ICdkeicsXG4gICAgJ1xcdTAxQzYnOiAnZHonLFxuICAgICdcXHUyNEQ0JzogJ2UnLFxuICAgICdcXHVGRjQ1JzogJ2UnLFxuICAgICdcXHUwMEU4JzogJ2UnLFxuICAgICdcXHUwMEU5JzogJ2UnLFxuICAgICdcXHUwMEVBJzogJ2UnLFxuICAgICdcXHUxRUMxJzogJ2UnLFxuICAgICdcXHUxRUJGJzogJ2UnLFxuICAgICdcXHUxRUM1JzogJ2UnLFxuICAgICdcXHUxRUMzJzogJ2UnLFxuICAgICdcXHUxRUJEJzogJ2UnLFxuICAgICdcXHUwMTEzJzogJ2UnLFxuICAgICdcXHUxRTE1JzogJ2UnLFxuICAgICdcXHUxRTE3JzogJ2UnLFxuICAgICdcXHUwMTE1JzogJ2UnLFxuICAgICdcXHUwMTE3JzogJ2UnLFxuICAgICdcXHUwMEVCJzogJ2UnLFxuICAgICdcXHUxRUJCJzogJ2UnLFxuICAgICdcXHUwMTFCJzogJ2UnLFxuICAgICdcXHUwMjA1JzogJ2UnLFxuICAgICdcXHUwMjA3JzogJ2UnLFxuICAgICdcXHUxRUI5JzogJ2UnLFxuICAgICdcXHUxRUM3JzogJ2UnLFxuICAgICdcXHUwMjI5JzogJ2UnLFxuICAgICdcXHUxRTFEJzogJ2UnLFxuICAgICdcXHUwMTE5JzogJ2UnLFxuICAgICdcXHUxRTE5JzogJ2UnLFxuICAgICdcXHUxRTFCJzogJ2UnLFxuICAgICdcXHUwMjQ3JzogJ2UnLFxuICAgICdcXHUwMjVCJzogJ2UnLFxuICAgICdcXHUwMUREJzogJ2UnLFxuICAgICdcXHUyNEQ1JzogJ2YnLFxuICAgICdcXHVGRjQ2JzogJ2YnLFxuICAgICdcXHUxRTFGJzogJ2YnLFxuICAgICdcXHUwMTkyJzogJ2YnLFxuICAgICdcXHVBNzdDJzogJ2YnLFxuICAgICdcXHUyNEQ2JzogJ2cnLFxuICAgICdcXHVGRjQ3JzogJ2cnLFxuICAgICdcXHUwMUY1JzogJ2cnLFxuICAgICdcXHUwMTFEJzogJ2cnLFxuICAgICdcXHUxRTIxJzogJ2cnLFxuICAgICdcXHUwMTFGJzogJ2cnLFxuICAgICdcXHUwMTIxJzogJ2cnLFxuICAgICdcXHUwMUU3JzogJ2cnLFxuICAgICdcXHUwMTIzJzogJ2cnLFxuICAgICdcXHUwMUU1JzogJ2cnLFxuICAgICdcXHUwMjYwJzogJ2cnLFxuICAgICdcXHVBN0ExJzogJ2cnLFxuICAgICdcXHUxRDc5JzogJ2cnLFxuICAgICdcXHVBNzdGJzogJ2cnLFxuICAgICdcXHUyNEQ3JzogJ2gnLFxuICAgICdcXHVGRjQ4JzogJ2gnLFxuICAgICdcXHUwMTI1JzogJ2gnLFxuICAgICdcXHUxRTIzJzogJ2gnLFxuICAgICdcXHUxRTI3JzogJ2gnLFxuICAgICdcXHUwMjFGJzogJ2gnLFxuICAgICdcXHUxRTI1JzogJ2gnLFxuICAgICdcXHUxRTI5JzogJ2gnLFxuICAgICdcXHUxRTJCJzogJ2gnLFxuICAgICdcXHUxRTk2JzogJ2gnLFxuICAgICdcXHUwMTI3JzogJ2gnLFxuICAgICdcXHUyQzY4JzogJ2gnLFxuICAgICdcXHUyQzc2JzogJ2gnLFxuICAgICdcXHUwMjY1JzogJ2gnLFxuICAgICdcXHUwMTk1JzogJ2h2JyxcbiAgICAnXFx1MjREOCc6ICdpJyxcbiAgICAnXFx1RkY0OSc6ICdpJyxcbiAgICAnXFx1MDBFQyc6ICdpJyxcbiAgICAnXFx1MDBFRCc6ICdpJyxcbiAgICAnXFx1MDBFRSc6ICdpJyxcbiAgICAnXFx1MDEyOSc6ICdpJyxcbiAgICAnXFx1MDEyQic6ICdpJyxcbiAgICAnXFx1MDEyRCc6ICdpJyxcbiAgICAnXFx1MDBFRic6ICdpJyxcbiAgICAnXFx1MUUyRic6ICdpJyxcbiAgICAnXFx1MUVDOSc6ICdpJyxcbiAgICAnXFx1MDFEMCc6ICdpJyxcbiAgICAnXFx1MDIwOSc6ICdpJyxcbiAgICAnXFx1MDIwQic6ICdpJyxcbiAgICAnXFx1MUVDQic6ICdpJyxcbiAgICAnXFx1MDEyRic6ICdpJyxcbiAgICAnXFx1MUUyRCc6ICdpJyxcbiAgICAnXFx1MDI2OCc6ICdpJyxcbiAgICAnXFx1MDEzMSc6ICdpJyxcbiAgICAnXFx1MjREOSc6ICdqJyxcbiAgICAnXFx1RkY0QSc6ICdqJyxcbiAgICAnXFx1MDEzNSc6ICdqJyxcbiAgICAnXFx1MDFGMCc6ICdqJyxcbiAgICAnXFx1MDI0OSc6ICdqJyxcbiAgICAnXFx1MjREQSc6ICdrJyxcbiAgICAnXFx1RkY0Qic6ICdrJyxcbiAgICAnXFx1MUUzMSc6ICdrJyxcbiAgICAnXFx1MDFFOSc6ICdrJyxcbiAgICAnXFx1MUUzMyc6ICdrJyxcbiAgICAnXFx1MDEzNyc6ICdrJyxcbiAgICAnXFx1MUUzNSc6ICdrJyxcbiAgICAnXFx1MDE5OSc6ICdrJyxcbiAgICAnXFx1MkM2QSc6ICdrJyxcbiAgICAnXFx1QTc0MSc6ICdrJyxcbiAgICAnXFx1QTc0Myc6ICdrJyxcbiAgICAnXFx1QTc0NSc6ICdrJyxcbiAgICAnXFx1QTdBMyc6ICdrJyxcbiAgICAnXFx1MjREQic6ICdsJyxcbiAgICAnXFx1RkY0Qyc6ICdsJyxcbiAgICAnXFx1MDE0MCc6ICdsJyxcbiAgICAnXFx1MDEzQSc6ICdsJyxcbiAgICAnXFx1MDEzRSc6ICdsJyxcbiAgICAnXFx1MUUzNyc6ICdsJyxcbiAgICAnXFx1MUUzOSc6ICdsJyxcbiAgICAnXFx1MDEzQyc6ICdsJyxcbiAgICAnXFx1MUUzRCc6ICdsJyxcbiAgICAnXFx1MUUzQic6ICdsJyxcbiAgICAnXFx1MDE3Ric6ICdsJyxcbiAgICAnXFx1MDE0Mic6ICdsJyxcbiAgICAnXFx1MDE5QSc6ICdsJyxcbiAgICAnXFx1MDI2Qic6ICdsJyxcbiAgICAnXFx1MkM2MSc6ICdsJyxcbiAgICAnXFx1QTc0OSc6ICdsJyxcbiAgICAnXFx1QTc4MSc6ICdsJyxcbiAgICAnXFx1QTc0Nyc6ICdsJyxcbiAgICAnXFx1MDFDOSc6ICdsaicsXG4gICAgJ1xcdTI0REMnOiAnbScsXG4gICAgJ1xcdUZGNEQnOiAnbScsXG4gICAgJ1xcdTFFM0YnOiAnbScsXG4gICAgJ1xcdTFFNDEnOiAnbScsXG4gICAgJ1xcdTFFNDMnOiAnbScsXG4gICAgJ1xcdTAyNzEnOiAnbScsXG4gICAgJ1xcdTAyNkYnOiAnbScsXG4gICAgJ1xcdTI0REQnOiAnbicsXG4gICAgJ1xcdUZGNEUnOiAnbicsXG4gICAgJ1xcdTAxRjknOiAnbicsXG4gICAgJ1xcdTAxNDQnOiAnbicsXG4gICAgJ1xcdTAwRjEnOiAnbicsXG4gICAgJ1xcdTFFNDUnOiAnbicsXG4gICAgJ1xcdTAxNDgnOiAnbicsXG4gICAgJ1xcdTFFNDcnOiAnbicsXG4gICAgJ1xcdTAxNDYnOiAnbicsXG4gICAgJ1xcdTFFNEInOiAnbicsXG4gICAgJ1xcdTFFNDknOiAnbicsXG4gICAgJ1xcdTAxOUUnOiAnbicsXG4gICAgJ1xcdTAyNzInOiAnbicsXG4gICAgJ1xcdTAxNDknOiAnbicsXG4gICAgJ1xcdUE3OTEnOiAnbicsXG4gICAgJ1xcdUE3QTUnOiAnbicsXG4gICAgJ1xcdTAxQ0MnOiAnbmonLFxuICAgICdcXHUyNERFJzogJ28nLFxuICAgICdcXHVGRjRGJzogJ28nLFxuICAgICdcXHUwMEYyJzogJ28nLFxuICAgICdcXHUwMEYzJzogJ28nLFxuICAgICdcXHUwMEY0JzogJ28nLFxuICAgICdcXHUxRUQzJzogJ28nLFxuICAgICdcXHUxRUQxJzogJ28nLFxuICAgICdcXHUxRUQ3JzogJ28nLFxuICAgICdcXHUxRUQ1JzogJ28nLFxuICAgICdcXHUwMEY1JzogJ28nLFxuICAgICdcXHUxRTREJzogJ28nLFxuICAgICdcXHUwMjJEJzogJ28nLFxuICAgICdcXHUxRTRGJzogJ28nLFxuICAgICdcXHUwMTREJzogJ28nLFxuICAgICdcXHUxRTUxJzogJ28nLFxuICAgICdcXHUxRTUzJzogJ28nLFxuICAgICdcXHUwMTRGJzogJ28nLFxuICAgICdcXHUwMjJGJzogJ28nLFxuICAgICdcXHUwMjMxJzogJ28nLFxuICAgICdcXHUwMEY2JzogJ28nLFxuICAgICdcXHUwMjJCJzogJ28nLFxuICAgICdcXHUxRUNGJzogJ28nLFxuICAgICdcXHUwMTUxJzogJ28nLFxuICAgICdcXHUwMUQyJzogJ28nLFxuICAgICdcXHUwMjBEJzogJ28nLFxuICAgICdcXHUwMjBGJzogJ28nLFxuICAgICdcXHUwMUExJzogJ28nLFxuICAgICdcXHUxRUREJzogJ28nLFxuICAgICdcXHUxRURCJzogJ28nLFxuICAgICdcXHUxRUUxJzogJ28nLFxuICAgICdcXHUxRURGJzogJ28nLFxuICAgICdcXHUxRUUzJzogJ28nLFxuICAgICdcXHUxRUNEJzogJ28nLFxuICAgICdcXHUxRUQ5JzogJ28nLFxuICAgICdcXHUwMUVCJzogJ28nLFxuICAgICdcXHUwMUVEJzogJ28nLFxuICAgICdcXHUwMEY4JzogJ28nLFxuICAgICdcXHUwMUZGJzogJ28nLFxuICAgICdcXHUwMjU0JzogJ28nLFxuICAgICdcXHVBNzRCJzogJ28nLFxuICAgICdcXHVBNzREJzogJ28nLFxuICAgICdcXHUwMjc1JzogJ28nLFxuICAgICdcXHUwMTUzJzogJ29lJyxcbiAgICAnXFx1MDFBMyc6ICdvaScsXG4gICAgJ1xcdTAyMjMnOiAnb3UnLFxuICAgICdcXHVBNzRGJzogJ29vJyxcbiAgICAnXFx1MjRERic6ICdwJyxcbiAgICAnXFx1RkY1MCc6ICdwJyxcbiAgICAnXFx1MUU1NSc6ICdwJyxcbiAgICAnXFx1MUU1Nyc6ICdwJyxcbiAgICAnXFx1MDFBNSc6ICdwJyxcbiAgICAnXFx1MUQ3RCc6ICdwJyxcbiAgICAnXFx1QTc1MSc6ICdwJyxcbiAgICAnXFx1QTc1Myc6ICdwJyxcbiAgICAnXFx1QTc1NSc6ICdwJyxcbiAgICAnXFx1MjRFMCc6ICdxJyxcbiAgICAnXFx1RkY1MSc6ICdxJyxcbiAgICAnXFx1MDI0Qic6ICdxJyxcbiAgICAnXFx1QTc1Nyc6ICdxJyxcbiAgICAnXFx1QTc1OSc6ICdxJyxcbiAgICAnXFx1MjRFMSc6ICdyJyxcbiAgICAnXFx1RkY1Mic6ICdyJyxcbiAgICAnXFx1MDE1NSc6ICdyJyxcbiAgICAnXFx1MUU1OSc6ICdyJyxcbiAgICAnXFx1MDE1OSc6ICdyJyxcbiAgICAnXFx1MDIxMSc6ICdyJyxcbiAgICAnXFx1MDIxMyc6ICdyJyxcbiAgICAnXFx1MUU1Qic6ICdyJyxcbiAgICAnXFx1MUU1RCc6ICdyJyxcbiAgICAnXFx1MDE1Nyc6ICdyJyxcbiAgICAnXFx1MUU1Ric6ICdyJyxcbiAgICAnXFx1MDI0RCc6ICdyJyxcbiAgICAnXFx1MDI3RCc6ICdyJyxcbiAgICAnXFx1QTc1Qic6ICdyJyxcbiAgICAnXFx1QTdBNyc6ICdyJyxcbiAgICAnXFx1QTc4Myc6ICdyJyxcbiAgICAnXFx1MjRFMic6ICdzJyxcbiAgICAnXFx1RkY1Myc6ICdzJyxcbiAgICAnXFx1MDBERic6ICdzJyxcbiAgICAnXFx1MDE1Qic6ICdzJyxcbiAgICAnXFx1MUU2NSc6ICdzJyxcbiAgICAnXFx1MDE1RCc6ICdzJyxcbiAgICAnXFx1MUU2MSc6ICdzJyxcbiAgICAnXFx1MDE2MSc6ICdzJyxcbiAgICAnXFx1MUU2Nyc6ICdzJyxcbiAgICAnXFx1MUU2Myc6ICdzJyxcbiAgICAnXFx1MUU2OSc6ICdzJyxcbiAgICAnXFx1MDIxOSc6ICdzJyxcbiAgICAnXFx1MDE1Ric6ICdzJyxcbiAgICAnXFx1MDIzRic6ICdzJyxcbiAgICAnXFx1QTdBOSc6ICdzJyxcbiAgICAnXFx1QTc4NSc6ICdzJyxcbiAgICAnXFx1MUU5Qic6ICdzJyxcbiAgICAnXFx1MjRFMyc6ICd0JyxcbiAgICAnXFx1RkY1NCc6ICd0JyxcbiAgICAnXFx1MUU2Qic6ICd0JyxcbiAgICAnXFx1MUU5Nyc6ICd0JyxcbiAgICAnXFx1MDE2NSc6ICd0JyxcbiAgICAnXFx1MUU2RCc6ICd0JyxcbiAgICAnXFx1MDIxQic6ICd0JyxcbiAgICAnXFx1MDE2Myc6ICd0JyxcbiAgICAnXFx1MUU3MSc6ICd0JyxcbiAgICAnXFx1MUU2Ric6ICd0JyxcbiAgICAnXFx1MDE2Nyc6ICd0JyxcbiAgICAnXFx1MDFBRCc6ICd0JyxcbiAgICAnXFx1MDI4OCc6ICd0JyxcbiAgICAnXFx1MkM2Nic6ICd0JyxcbiAgICAnXFx1QTc4Nyc6ICd0JyxcbiAgICAnXFx1QTcyOSc6ICd0eicsXG4gICAgJ1xcdTI0RTQnOiAndScsXG4gICAgJ1xcdUZGNTUnOiAndScsXG4gICAgJ1xcdTAwRjknOiAndScsXG4gICAgJ1xcdTAwRkEnOiAndScsXG4gICAgJ1xcdTAwRkInOiAndScsXG4gICAgJ1xcdTAxNjknOiAndScsXG4gICAgJ1xcdTFFNzknOiAndScsXG4gICAgJ1xcdTAxNkInOiAndScsXG4gICAgJ1xcdTFFN0InOiAndScsXG4gICAgJ1xcdTAxNkQnOiAndScsXG4gICAgJ1xcdTAwRkMnOiAndScsXG4gICAgJ1xcdTAxREMnOiAndScsXG4gICAgJ1xcdTAxRDgnOiAndScsXG4gICAgJ1xcdTAxRDYnOiAndScsXG4gICAgJ1xcdTAxREEnOiAndScsXG4gICAgJ1xcdTFFRTcnOiAndScsXG4gICAgJ1xcdTAxNkYnOiAndScsXG4gICAgJ1xcdTAxNzEnOiAndScsXG4gICAgJ1xcdTAxRDQnOiAndScsXG4gICAgJ1xcdTAyMTUnOiAndScsXG4gICAgJ1xcdTAyMTcnOiAndScsXG4gICAgJ1xcdTAxQjAnOiAndScsXG4gICAgJ1xcdTFFRUInOiAndScsXG4gICAgJ1xcdTFFRTknOiAndScsXG4gICAgJ1xcdTFFRUYnOiAndScsXG4gICAgJ1xcdTFFRUQnOiAndScsXG4gICAgJ1xcdTFFRjEnOiAndScsXG4gICAgJ1xcdTFFRTUnOiAndScsXG4gICAgJ1xcdTFFNzMnOiAndScsXG4gICAgJ1xcdTAxNzMnOiAndScsXG4gICAgJ1xcdTFFNzcnOiAndScsXG4gICAgJ1xcdTFFNzUnOiAndScsXG4gICAgJ1xcdTAyODknOiAndScsXG4gICAgJ1xcdTI0RTUnOiAndicsXG4gICAgJ1xcdUZGNTYnOiAndicsXG4gICAgJ1xcdTFFN0QnOiAndicsXG4gICAgJ1xcdTFFN0YnOiAndicsXG4gICAgJ1xcdTAyOEInOiAndicsXG4gICAgJ1xcdUE3NUYnOiAndicsXG4gICAgJ1xcdTAyOEMnOiAndicsXG4gICAgJ1xcdUE3NjEnOiAndnknLFxuICAgICdcXHUyNEU2JzogJ3cnLFxuICAgICdcXHVGRjU3JzogJ3cnLFxuICAgICdcXHUxRTgxJzogJ3cnLFxuICAgICdcXHUxRTgzJzogJ3cnLFxuICAgICdcXHUwMTc1JzogJ3cnLFxuICAgICdcXHUxRTg3JzogJ3cnLFxuICAgICdcXHUxRTg1JzogJ3cnLFxuICAgICdcXHUxRTk4JzogJ3cnLFxuICAgICdcXHUxRTg5JzogJ3cnLFxuICAgICdcXHUyQzczJzogJ3cnLFxuICAgICdcXHUyNEU3JzogJ3gnLFxuICAgICdcXHVGRjU4JzogJ3gnLFxuICAgICdcXHUxRThCJzogJ3gnLFxuICAgICdcXHUxRThEJzogJ3gnLFxuICAgICdcXHUyNEU4JzogJ3knLFxuICAgICdcXHVGRjU5JzogJ3knLFxuICAgICdcXHUxRUYzJzogJ3knLFxuICAgICdcXHUwMEZEJzogJ3knLFxuICAgICdcXHUwMTc3JzogJ3knLFxuICAgICdcXHUxRUY5JzogJ3knLFxuICAgICdcXHUwMjMzJzogJ3knLFxuICAgICdcXHUxRThGJzogJ3knLFxuICAgICdcXHUwMEZGJzogJ3knLFxuICAgICdcXHUxRUY3JzogJ3knLFxuICAgICdcXHUxRTk5JzogJ3knLFxuICAgICdcXHUxRUY1JzogJ3knLFxuICAgICdcXHUwMUI0JzogJ3knLFxuICAgICdcXHUwMjRGJzogJ3knLFxuICAgICdcXHUxRUZGJzogJ3knLFxuICAgICdcXHUyNEU5JzogJ3onLFxuICAgICdcXHVGRjVBJzogJ3onLFxuICAgICdcXHUwMTdBJzogJ3onLFxuICAgICdcXHUxRTkxJzogJ3onLFxuICAgICdcXHUwMTdDJzogJ3onLFxuICAgICdcXHUwMTdFJzogJ3onLFxuICAgICdcXHUxRTkzJzogJ3onLFxuICAgICdcXHUxRTk1JzogJ3onLFxuICAgICdcXHUwMUI2JzogJ3onLFxuICAgICdcXHUwMjI1JzogJ3onLFxuICAgICdcXHUwMjQwJzogJ3onLFxuICAgICdcXHUyQzZDJzogJ3onLFxuICAgICdcXHVBNzYzJzogJ3onLFxuICAgICdcXHUwMzg2JzogJ1xcdTAzOTEnLFxuICAgICdcXHUwMzg4JzogJ1xcdTAzOTUnLFxuICAgICdcXHUwMzg5JzogJ1xcdTAzOTcnLFxuICAgICdcXHUwMzhBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwM0FBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwMzhDJzogJ1xcdTAzOUYnLFxuICAgICdcXHUwMzhFJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwM0FCJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwMzhGJzogJ1xcdTAzQTknLFxuICAgICdcXHUwM0FDJzogJ1xcdTAzQjEnLFxuICAgICdcXHUwM0FEJzogJ1xcdTAzQjUnLFxuICAgICdcXHUwM0FFJzogJ1xcdTAzQjcnLFxuICAgICdcXHUwM0FGJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NBJzogJ1xcdTAzQjknLFxuICAgICdcXHUwMzkwJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NDJzogJ1xcdTAzQkYnLFxuICAgICdcXHUwM0NEJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0NCJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0IwJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0NFJzogJ1xcdTAzQzknLFxuICAgICdcXHUwM0MyJzogJ1xcdTAzQzMnLFxuICAgICdcXHUyMDE5JzogJ1xcJydcbiAgfTtcblxuICByZXR1cm4gZGlhY3JpdGljcztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9iYXNlJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBCYXNlQWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBCYXNlQWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChCYXNlQWRhcHRlciwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY3VycmVudGAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLicpO1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHF1ZXJ5YCBtZXRob2QgbXVzdCBiZSBkZWZpbmVkIGluIGNoaWxkIGNsYXNzZXMuJyk7XG4gIH07XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgLy8gQ2FuIGJlIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcbiAgfTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYW4gYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5nZW5lcmF0ZVJlc3VsdElkID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIHZhciBpZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0LSc7XG5cbiAgICBpZCArPSBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuXG4gICAgaWYgKGRhdGEuaWQgIT0gbnVsbCkge1xuICAgICAgaWQgKz0gJy0nICsgZGF0YS5pZC50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnLScgKyBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3NlbGVjdCcsW1xuICAnLi9iYXNlJyxcbiAgJy4uL3V0aWxzJyxcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uIChCYXNlQWRhcHRlciwgVXRpbHMsICQpIHtcbiAgZnVuY3Rpb24gU2VsZWN0QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIFNlbGVjdEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoU2VsZWN0QWRhcHRlciwgQmFzZUFkYXB0ZXIpO1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgIHZhciBvcHRpb24gPSBzZWxmLml0ZW0oJG9wdGlvbik7XG5cbiAgICAgIGRhdGEucHVzaChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soZGF0YSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkYXRhLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIC8vIElmIGRhdGEuZWxlbWVudCBpcyBhIERPTSBub2RlLCB1c2UgaXQgaW5zdGVhZFxuICAgIGlmICgkKGRhdGEuZWxlbWVudCkuaXMoJ29wdGlvbicpKSB7XG4gICAgICBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kZWxlbWVudC5wcm9wKCdtdWx0aXBsZScpKSB7XG4gICAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIHZhciB2YWwgPSBbXTtcblxuICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICBkYXRhLnB1c2guYXBwbHkoZGF0YSwgY3VycmVudERhdGEpO1xuXG4gICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgICAgIHZhciBpZCA9IGRhdGFbZF0uaWQ7XG5cbiAgICAgICAgICBpZiAoJC5pbkFycmF5KGlkLCB2YWwpID09PSAtMSkge1xuICAgICAgICAgICAgdmFsLnB1c2goaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuJGVsZW1lbnQudmFsKHZhbCk7XG4gICAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsID0gZGF0YS5pZDtcblxuICAgICAgdGhpcy4kZWxlbWVudC52YWwodmFsKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUudW5zZWxlY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICghdGhpcy4kZWxlbWVudC5wcm9wKCdtdWx0aXBsZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCQoZGF0YS5lbGVtZW50KS5pcygnb3B0aW9uJykpIHtcbiAgICAgIGRhdGEuZWxlbWVudC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICB2YXIgdmFsID0gW107XG5cbiAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgY3VycmVudERhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgdmFyIGlkID0gY3VycmVudERhdGFbZF0uaWQ7XG5cbiAgICAgICAgaWYgKGlkICE9PSBkYXRhLmlkICYmICQuaW5BcnJheShpZCwgdmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICB2YWwucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2VsZi4kZWxlbWVudC52YWwodmFsKTtcblxuICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuc2VsZWN0KHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLnVuc2VsZWN0KHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlbW92ZSBhbnl0aGluZyBhZGRlZCB0byBjaGlsZCBlbGVtZW50c1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnKicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgLy8gUmVtb3ZlIGFueSBjdXN0b20gZGF0YSBzZXQgYnkgU2VsZWN0MlxuICAgICAgVXRpbHMuUmVtb3ZlRGF0YSh0aGlzKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGRhdGEgPSBbXTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCk7XG5cbiAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgaWYgKCEkb3B0aW9uLmlzKCdvcHRpb24nKSAmJiAhJG9wdGlvbi5pcygnb3B0Z3JvdXAnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRpb24gPSBzZWxmLml0ZW0oJG9wdGlvbik7XG5cbiAgICAgIHZhciBtYXRjaGVzID0gc2VsZi5tYXRjaGVzKHBhcmFtcywgb3B0aW9uKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YS5wdXNoKG1hdGNoZXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soe1xuICAgICAgcmVzdWx0czogZGF0YVxuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmFkZE9wdGlvbnMgPSBmdW5jdGlvbiAoJG9wdGlvbnMpIHtcbiAgICBVdGlscy5hcHBlbmRNYW55KHRoaXMuJGVsZW1lbnQsICRvcHRpb25zKTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5vcHRpb24gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBvcHRpb247XG5cbiAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgICAgIG9wdGlvbi5sYWJlbCA9IGRhdGEudGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLnRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gZGF0YS50ZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGRhdGEuaWQ7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuZGlzYWJsZWQpIHtcbiAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc2VsZWN0ZWQpIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudGl0bGUpIHtcbiAgICAgIG9wdGlvbi50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgfVxuXG4gICAgdmFyICRvcHRpb24gPSAkKG9wdGlvbik7XG5cbiAgICB2YXIgbm9ybWFsaXplZERhdGEgPSB0aGlzLl9ub3JtYWxpemVJdGVtKGRhdGEpO1xuICAgIG5vcm1hbGl6ZWREYXRhLmVsZW1lbnQgPSBvcHRpb247XG5cbiAgICAvLyBPdmVycmlkZSB0aGUgb3B0aW9uJ3MgZGF0YSB3aXRoIHRoZSBjb21iaW5lZCBkYXRhXG4gICAgVXRpbHMuU3RvcmVEYXRhKG9wdGlvbiwgJ2RhdGEnLCBub3JtYWxpemVkRGF0YSk7XG5cbiAgICByZXR1cm4gJG9wdGlvbjtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24gKCRvcHRpb24pIHtcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgZGF0YSA9IFV0aWxzLkdldERhdGEoJG9wdGlvblswXSwgJ2RhdGEnKTtcblxuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGlmICgkb3B0aW9uLmlzKCdvcHRpb24nKSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICRvcHRpb24udmFsKCksXG4gICAgICAgIHRleHQ6ICRvcHRpb24udGV4dCgpLFxuICAgICAgICBkaXNhYmxlZDogJG9wdGlvbi5wcm9wKCdkaXNhYmxlZCcpLFxuICAgICAgICBzZWxlY3RlZDogJG9wdGlvbi5wcm9wKCdzZWxlY3RlZCcpLFxuICAgICAgICB0aXRsZTogJG9wdGlvbi5wcm9wKCd0aXRsZScpXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoJG9wdGlvbi5pcygnb3B0Z3JvdXAnKSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgdGV4dDogJG9wdGlvbi5wcm9wKCdsYWJlbCcpLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHRpdGxlOiAkb3B0aW9uLnByb3AoJ3RpdGxlJylcbiAgICAgIH07XG5cbiAgICAgIHZhciAkY2hpbGRyZW4gPSAkb3B0aW9uLmNoaWxkcmVuKCdvcHRpb24nKTtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBjID0gMDsgYyA8ICRjaGlsZHJlbi5sZW5ndGg7IGMrKykge1xuICAgICAgICB2YXIgJGNoaWxkID0gJCgkY2hpbGRyZW5bY10pO1xuXG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuaXRlbSgkY2hpbGQpO1xuXG4gICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgZGF0YSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YSk7XG4gICAgZGF0YS5lbGVtZW50ID0gJG9wdGlvblswXTtcblxuICAgIFV0aWxzLlN0b3JlRGF0YSgkb3B0aW9uWzBdLCAnZGF0YScsIGRhdGEpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuX25vcm1hbGl6ZUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtICE9PSBPYmplY3QoaXRlbSkpIHtcbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIGlkOiBpdGVtLFxuICAgICAgICB0ZXh0OiBpdGVtXG4gICAgICB9O1xuICAgIH1cblxuICAgIGl0ZW0gPSAkLmV4dGVuZCh7fSwge1xuICAgICAgdGV4dDogJydcbiAgICB9LCBpdGVtKTtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAoaXRlbS5pZCAhPSBudWxsKSB7XG4gICAgICBpdGVtLmlkID0gaXRlbS5pZC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChpdGVtLnRleHQgIT0gbnVsbCkge1xuICAgICAgaXRlbS50ZXh0ID0gaXRlbS50ZXh0LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0uX3Jlc3VsdElkID09IG51bGwgJiYgaXRlbS5pZCAmJiB0aGlzLmNvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICBpdGVtLl9yZXN1bHRJZCA9IHRoaXMuZ2VuZXJhdGVSZXN1bHRJZCh0aGlzLmNvbnRhaW5lciwgaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgaXRlbSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChwYXJhbXMsIGRhdGEpIHtcbiAgICB2YXIgbWF0Y2hlciA9IHRoaXMub3B0aW9ucy5nZXQoJ21hdGNoZXInKTtcblxuICAgIHJldHVybiBtYXRjaGVyKHBhcmFtcywgZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdEFkYXB0ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvYXJyYXknLFtcbiAgJy4vc2VsZWN0JyxcbiAgJy4uL3V0aWxzJyxcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uIChTZWxlY3RBZGFwdGVyLCBVdGlscywgJCkge1xuICBmdW5jdGlvbiBBcnJheUFkYXB0ZXIgKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5fZGF0YVRvQ29udmVydCA9IG9wdGlvbnMuZ2V0KCdkYXRhJykgfHwgW107XG5cbiAgICBBcnJheUFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKEFycmF5QWRhcHRlciwgU2VsZWN0QWRhcHRlcik7XG5cbiAgQXJyYXlBZGFwdGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIEFycmF5QWRhcHRlci5fX3N1cGVyX18uYmluZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLmFkZE9wdGlvbnModGhpcy5jb252ZXJ0VG9PcHRpb25zKHRoaXMuX2RhdGFUb0NvbnZlcnQpKTtcbiAgfTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyICRvcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpLmZpbHRlcihmdW5jdGlvbiAoaSwgZWxtKSB7XG4gICAgICByZXR1cm4gZWxtLnZhbHVlID09IGRhdGEuaWQudG9TdHJpbmcoKTtcbiAgICB9KTtcblxuICAgIGlmICgkb3B0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGRhdGEpO1xuXG4gICAgICB0aGlzLmFkZE9wdGlvbnMoJG9wdGlvbik7XG4gICAgfVxuXG4gICAgQXJyYXlBZGFwdGVyLl9fc3VwZXJfXy5zZWxlY3QuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLmNvbnZlcnRUb09wdGlvbnMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciAkZXhpc3RpbmcgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpO1xuICAgIHZhciBleGlzdGluZ0lkcyA9ICRleGlzdGluZy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlbGYuaXRlbSgkKHRoaXMpKS5pZDtcbiAgICB9KS5nZXQoKTtcblxuICAgIHZhciAkb3B0aW9ucyA9IFtdO1xuXG4gICAgLy8gRmlsdGVyIG91dCBhbGwgaXRlbXMgZXhjZXB0IGZvciB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYXJndW1lbnRcbiAgICBmdW5jdGlvbiBvbmx5SXRlbSAoaXRlbSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcykudmFsKCkgPT0gaXRlbS5pZDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YVtkXSk7XG5cbiAgICAgIC8vIFNraXAgaXRlbXMgd2hpY2ggd2VyZSBwcmUtbG9hZGVkLCBvbmx5IG1lcmdlIHRoZSBkYXRhXG4gICAgICBpZiAoJC5pbkFycmF5KGl0ZW0uaWQsIGV4aXN0aW5nSWRzKSA+PSAwKSB7XG4gICAgICAgIHZhciAkZXhpc3RpbmdPcHRpb24gPSAkZXhpc3RpbmcuZmlsdGVyKG9ubHlJdGVtKGl0ZW0pKTtcblxuICAgICAgICB2YXIgZXhpc3RpbmdEYXRhID0gdGhpcy5pdGVtKCRleGlzdGluZ09wdGlvbik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIGl0ZW0sIGV4aXN0aW5nRGF0YSk7XG5cbiAgICAgICAgdmFyICRuZXdPcHRpb24gPSB0aGlzLm9wdGlvbihuZXdEYXRhKTtcblxuICAgICAgICAkZXhpc3RpbmdPcHRpb24ucmVwbGFjZVdpdGgoJG5ld09wdGlvbik7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIHZhciAkY2hpbGRyZW4gPSB0aGlzLmNvbnZlcnRUb09wdGlvbnMoaXRlbS5jaGlsZHJlbik7XG5cbiAgICAgICAgVXRpbHMuYXBwZW5kTWFueSgkb3B0aW9uLCAkY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICAkb3B0aW9ucy5wdXNoKCRvcHRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiAkb3B0aW9ucztcbiAgfTtcblxuICByZXR1cm4gQXJyYXlBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL2FqYXgnLFtcbiAgJy4vYXJyYXknLFxuICAnLi4vdXRpbHMnLFxuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKEFycmF5QWRhcHRlciwgVXRpbHMsICQpIHtcbiAgZnVuY3Rpb24gQWpheEFkYXB0ZXIgKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5hamF4T3B0aW9ucyA9IHRoaXMuX2FwcGx5RGVmYXVsdHMob3B0aW9ucy5nZXQoJ2FqYXgnKSk7XG5cbiAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5wcm9jZXNzUmVzdWx0cyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnByb2Nlc3NSZXN1bHRzID0gdGhpcy5hamF4T3B0aW9ucy5wcm9jZXNzUmVzdWx0cztcbiAgICB9XG5cbiAgICBBamF4QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoQWpheEFkYXB0ZXIsIEFycmF5QWRhcHRlcik7XG5cbiAgQWpheEFkYXB0ZXIucHJvdG90eXBlLl9hcHBseURlZmF1bHRzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgcGFyYW1zLCB7XG4gICAgICAgICAgcTogcGFyYW1zLnRlcm1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdHJhbnNwb3J0OiBmdW5jdGlvbiAocGFyYW1zLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgICAgIHZhciAkcmVxdWVzdCA9ICQuYWpheChwYXJhbXMpO1xuXG4gICAgICAgICRyZXF1ZXN0LnRoZW4oc3VjY2Vzcyk7XG4gICAgICAgICRyZXF1ZXN0LmZhaWwoZmFpbHVyZSk7XG5cbiAgICAgICAgcmV0dXJuICRyZXF1ZXN0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zLCB0cnVlKTtcbiAgfTtcblxuICBBamF4QWRhcHRlci5wcm90b3R5cGUucHJvY2Vzc1Jlc3VsdHMgPSBmdW5jdGlvbiAocmVzdWx0cykge1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5fcmVxdWVzdCAhPSBudWxsKSB7XG4gICAgICAvLyBKU09OUCByZXF1ZXN0cyBjYW5ub3QgYWx3YXlzIGJlIGFib3J0ZWRcbiAgICAgIGlmICgkLmlzRnVuY3Rpb24odGhpcy5fcmVxdWVzdC5hYm9ydCkpIHtcbiAgICAgICAgdGhpcy5fcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIHR5cGU6ICdHRVQnXG4gICAgfSwgdGhpcy5hamF4T3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudXJsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLnVybCA9IG9wdGlvbnMudXJsLmNhbGwodGhpcy4kZWxlbWVudCwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhLmNhbGwodGhpcy4kZWxlbWVudCwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0ICgpIHtcbiAgICAgIHZhciAkcmVxdWVzdCA9IG9wdGlvbnMudHJhbnNwb3J0KG9wdGlvbnMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gc2VsZi5wcm9jZXNzUmVzdWx0cyhkYXRhLCBwYXJhbXMpO1xuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhhdCB0aGUgcmVzcG9uc2UgaW5jbHVkZWQgYSBgcmVzdWx0c2Aga2V5LlxuICAgICAgICAgIGlmICghcmVzdWx0cyB8fCAhcmVzdWx0cy5yZXN1bHRzIHx8ICEkLmlzQXJyYXkocmVzdWx0cy5yZXN1bHRzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBBSkFYIHJlc3VsdHMgZGlkIG5vdCByZXR1cm4gYW4gYXJyYXkgaW4gdGhlICcgK1xuICAgICAgICAgICAgICAnYHJlc3VsdHNgIGtleSBvZiB0aGUgcmVzcG9uc2UuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhyZXN1bHRzKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBkZXRlY3QgaWYgYSByZXF1ZXN0IHdhcyBhYm9ydGVkXG4gICAgICAgIC8vIE9ubHkgd29ya3MgaWYgdGhlIHRyYW5zcG9ydCBleHBvc2VzIGEgc3RhdHVzIHByb3BlcnR5XG4gICAgICAgIGlmICgnc3RhdHVzJyBpbiAkcmVxdWVzdCAmJlxuICAgICAgICAgICAgKCRyZXF1ZXN0LnN0YXR1cyA9PT0gMCB8fCAkcmVxdWVzdC5zdGF0dXMgPT09ICcwJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgICBtZXNzYWdlOiAnZXJyb3JMb2FkaW5nJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLl9yZXF1ZXN0ID0gJHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgJiYgcGFyYW1zLnRlcm0gIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3F1ZXJ5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlcXVlc3QsIHRoaXMuYWpheE9wdGlvbnMuZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBamF4QWRhcHRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS90YWdzJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBUYWdzIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIHRhZ3MgPSBvcHRpb25zLmdldCgndGFncycpO1xuXG4gICAgdmFyIGNyZWF0ZVRhZyA9IG9wdGlvbnMuZ2V0KCdjcmVhdGVUYWcnKTtcblxuICAgIGlmIChjcmVhdGVUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jcmVhdGVUYWcgPSBjcmVhdGVUYWc7XG4gICAgfVxuXG4gICAgdmFyIGluc2VydFRhZyA9IG9wdGlvbnMuZ2V0KCdpbnNlcnRUYWcnKTtcblxuICAgIGlmIChpbnNlcnRUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluc2VydFRhZyA9IGluc2VydFRhZztcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICBpZiAoJC5pc0FycmF5KHRhZ3MpKSB7XG4gICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRhZ3MubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgdmFyIHRhZyA9IHRhZ3NbdF07XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5fbm9ybWFsaXplSXRlbSh0YWcpO1xuXG4gICAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgVGFncy5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5fcmVtb3ZlT2xkVGFncygpO1xuXG4gICAgaWYgKHBhcmFtcy50ZXJtID09IG51bGwgfHwgcGFyYW1zLnBhZ2UgIT0gbnVsbCkge1xuICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd3JhcHBlciAob2JqLCBjaGlsZCkge1xuICAgICAgdmFyIGRhdGEgPSBvYmoucmVzdWx0cztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBkYXRhW2ldO1xuXG4gICAgICAgIHZhciBjaGVja0NoaWxkcmVuID0gKFxuICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbiAhPSBudWxsICYmXG4gICAgICAgICAgIXdyYXBwZXIoe1xuICAgICAgICAgICAgcmVzdWx0czogb3B0aW9uLmNoaWxkcmVuXG4gICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgKTtcblxuICAgICAgICB2YXIgb3B0aW9uVGV4dCA9IChvcHRpb24udGV4dCB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdmFyIHBhcmFtc1Rlcm0gPSAocGFyYW1zLnRlcm0gfHwgJycpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdmFyIGNoZWNrVGV4dCA9IG9wdGlvblRleHQgPT09IHBhcmFtc1Rlcm07XG5cbiAgICAgICAgaWYgKGNoZWNrVGV4dCB8fCBjaGVja0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2JqLmRhdGEgPSBkYXRhO1xuICAgICAgICAgIGNhbGxiYWNrKG9iaik7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnID0gc2VsZi5jcmVhdGVUYWcocGFyYW1zKTtcblxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gc2VsZi5vcHRpb24odGFnKTtcbiAgICAgICAgJG9wdGlvbi5hdHRyKCdkYXRhLXNlbGVjdDItdGFnJywgdHJ1ZSk7XG5cbiAgICAgICAgc2VsZi5hZGRPcHRpb25zKFskb3B0aW9uXSk7XG5cbiAgICAgICAgc2VsZi5pbnNlcnRUYWcoZGF0YSwgdGFnKTtcbiAgICAgIH1cblxuICAgICAgb2JqLnJlc3VsdHMgPSBkYXRhO1xuXG4gICAgICBjYWxsYmFjayhvYmopO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgd3JhcHBlcik7XG4gIH07XG5cbiAgVGFncy5wcm90b3R5cGUuY3JlYXRlVGFnID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zKSB7XG4gICAgdmFyIHRlcm0gPSAkLnRyaW0ocGFyYW1zLnRlcm0pO1xuXG4gICAgaWYgKHRlcm0gPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRlcm0sXG4gICAgICB0ZXh0OiB0ZXJtXG4gICAgfTtcbiAgfTtcblxuICBUYWdzLnByb3RvdHlwZS5pbnNlcnRUYWcgPSBmdW5jdGlvbiAoXywgZGF0YSwgdGFnKSB7XG4gICAgZGF0YS51bnNoaWZ0KHRhZyk7XG4gIH07XG5cbiAgVGFncy5wcm90b3R5cGUuX3JlbW92ZU9sZFRhZ3MgPSBmdW5jdGlvbiAoXykge1xuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uW2RhdGEtc2VsZWN0Mi10YWddJyk7XG5cbiAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gVGFncztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS90b2tlbml6ZXInLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIFRva2VuaXplciAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHZhciB0b2tlbml6ZXIgPSBvcHRpb25zLmdldCgndG9rZW5pemVyJyk7XG5cbiAgICBpZiAodG9rZW5pemVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudG9rZW5pemVyID0gdG9rZW5pemVyO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFRva2VuaXplci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLiRzZWFyY2ggPSAgY29udGFpbmVyLmRyb3Bkb3duLiRzZWFyY2ggfHwgY29udGFpbmVyLnNlbGVjdGlvbi4kc2VhcmNoIHx8XG4gICAgICAkY29udGFpbmVyLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKTtcbiAgfTtcblxuICBUb2tlbml6ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFuZFNlbGVjdCAoZGF0YSkge1xuICAgICAgLy8gTm9ybWFsaXplIHRoZSBkYXRhIG9iamVjdCBzbyB3ZSBjYW4gdXNlIGl0IGZvciBjaGVja3NcbiAgICAgIHZhciBpdGVtID0gc2VsZi5fbm9ybWFsaXplSXRlbShkYXRhKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGRhdGEgb2JqZWN0IGFscmVhZHkgZXhpc3RzIGFzIGEgdGFnXG4gICAgICAvLyBTZWxlY3QgaXQgaWYgaXQgZG9lc24ndFxuICAgICAgdmFyICRleGlzdGluZ09wdGlvbnMgPSBzZWxmLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLnZhbCgpID09PSBpdGVtLmlkO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIGFuIGV4aXN0aW5nIG9wdGlvbiB3YXNuJ3QgZm91bmQgZm9yIGl0LCBjcmVhdGUgdGhlIG9wdGlvblxuICAgICAgaWYgKCEkZXhpc3RpbmdPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9IHNlbGYub3B0aW9uKGl0ZW0pO1xuICAgICAgICAkb3B0aW9uLmF0dHIoJ2RhdGEtc2VsZWN0Mi10YWcnLCB0cnVlKTtcblxuICAgICAgICBzZWxmLl9yZW1vdmVPbGRUYWdzKCk7XG4gICAgICAgIHNlbGYuYWRkT3B0aW9ucyhbJG9wdGlvbl0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0sIG5vdyB0aGF0IHdlIGtub3cgdGhlcmUgaXMgYW4gb3B0aW9uIGZvciBpdFxuICAgICAgc2VsZWN0KGl0ZW0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdCAoZGF0YSkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3QnLCB7XG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHBhcmFtcy50ZXJtID0gcGFyYW1zLnRlcm0gfHwgJyc7XG5cbiAgICB2YXIgdG9rZW5EYXRhID0gdGhpcy50b2tlbml6ZXIocGFyYW1zLCB0aGlzLm9wdGlvbnMsIGNyZWF0ZUFuZFNlbGVjdCk7XG5cbiAgICBpZiAodG9rZW5EYXRhLnRlcm0gIT09IHBhcmFtcy50ZXJtKSB7XG4gICAgICAvLyBSZXBsYWNlIHRoZSBzZWFyY2ggdGVybSBpZiB3ZSBoYXZlIHRoZSBzZWFyY2ggYm94XG4gICAgICBpZiAodGhpcy4kc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICB0aGlzLiRzZWFyY2gudmFsKHRva2VuRGF0YS50ZXJtKTtcbiAgICAgICAgdGhpcy4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy50ZXJtID0gdG9rZW5EYXRhLnRlcm07XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgVG9rZW5pemVyLnByb3RvdHlwZS50b2tlbml6ZXIgPSBmdW5jdGlvbiAoXywgcGFyYW1zLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBzZXBhcmF0b3JzID0gb3B0aW9ucy5nZXQoJ3Rva2VuU2VwYXJhdG9ycycpIHx8IFtdO1xuICAgIHZhciB0ZXJtID0gcGFyYW1zLnRlcm07XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgdmFyIGNyZWF0ZVRhZyA9IHRoaXMuY3JlYXRlVGFnIHx8IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwYXJhbXMudGVybSxcbiAgICAgICAgdGV4dDogcGFyYW1zLnRlcm1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIHdoaWxlIChpIDwgdGVybS5sZW5ndGgpIHtcbiAgICAgIHZhciB0ZXJtQ2hhciA9IHRlcm1baV07XG5cbiAgICAgIGlmICgkLmluQXJyYXkodGVybUNoYXIsIHNlcGFyYXRvcnMpID09PSAtMSkge1xuICAgICAgICBpKys7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJ0ID0gdGVybS5zdWJzdHIoMCwgaSk7XG4gICAgICB2YXIgcGFydFBhcmFtcyA9ICQuZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgdGVybTogcGFydFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBkYXRhID0gY3JlYXRlVGFnKHBhcnRQYXJhbXMpO1xuXG4gICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuXG4gICAgICAvLyBSZXNldCB0aGUgdGVybSB0byBub3QgaW5jbHVkZSB0aGUgdG9rZW5pemVkIHBvcnRpb25cbiAgICAgIHRlcm0gPSB0ZXJtLnN1YnN0cihpICsgMSkgfHwgJyc7XG4gICAgICBpID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGVybTogdGVybVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIFRva2VuaXplcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9taW5pbXVtSW5wdXRMZW5ndGgnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNaW5pbXVtSW5wdXRMZW5ndGggKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm1pbmltdW1JbnB1dExlbmd0aCA9IG9wdGlvbnMuZ2V0KCdtaW5pbXVtSW5wdXRMZW5ndGgnKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIE1pbmltdW1JbnB1dExlbmd0aC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcblxuICAgIGlmIChwYXJhbXMudGVybS5sZW5ndGggPCB0aGlzLm1pbmltdW1JbnB1dExlbmd0aCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdyZXN1bHRzOm1lc3NhZ2UnLCB7XG4gICAgICAgIG1lc3NhZ2U6ICdpbnB1dFRvb1Nob3J0JyxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIG1pbmltdW06IHRoaXMubWluaW11bUlucHV0TGVuZ3RoLFxuICAgICAgICAgIGlucHV0OiBwYXJhbXMudGVybSxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xuICB9O1xuXG4gIHJldHVybiBNaW5pbXVtSW5wdXRMZW5ndGg7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvbWF4aW11bUlucHV0TGVuZ3RoJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWF4aW11bUlucHV0TGVuZ3RoIChkZWNvcmF0ZWQsICRlLCBvcHRpb25zKSB7XG4gICAgdGhpcy5tYXhpbXVtSW5wdXRMZW5ndGggPSBvcHRpb25zLmdldCgnbWF4aW11bUlucHV0TGVuZ3RoJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZSwgb3B0aW9ucyk7XG4gIH1cblxuICBNYXhpbXVtSW5wdXRMZW5ndGgucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHBhcmFtcy50ZXJtID0gcGFyYW1zLnRlcm0gfHwgJyc7XG5cbiAgICBpZiAodGhpcy5tYXhpbXVtSW5wdXRMZW5ndGggPiAwICYmXG4gICAgICAgIHBhcmFtcy50ZXJtLmxlbmd0aCA+IHRoaXMubWF4aW11bUlucHV0TGVuZ3RoKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgbWVzc2FnZTogJ2lucHV0VG9vTG9uZycsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBtYXhpbXVtOiB0aGlzLm1heGltdW1JbnB1dExlbmd0aCxcbiAgICAgICAgICBpbnB1dDogcGFyYW1zLnRlcm0sXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICByZXR1cm4gTWF4aW11bUlucHV0TGVuZ3RoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL21heGltdW1TZWxlY3Rpb25MZW5ndGgnLFtcblxuXSwgZnVuY3Rpb24gKCl7XG4gIGZ1bmN0aW9uIE1heGltdW1TZWxlY3Rpb25MZW5ndGggKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm1heGltdW1TZWxlY3Rpb25MZW5ndGggPSBvcHRpb25zLmdldCgnbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aC5wcm90b3R5cGUuYmluZCA9XG4gICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9jaGVja0lmTWF4aW11bVNlbGVjdGVkKCk7XG4gICAgICB9KTtcbiAgfTtcblxuICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9XG4gICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9jaGVja0lmTWF4aW11bVNlbGVjdGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVjb3JhdGVkLmNhbGwoc2VsZiwgcGFyYW1zLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgfTtcblxuICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoLnByb3RvdHlwZS5fY2hlY2tJZk1heGltdW1TZWxlY3RlZCA9XG4gICAgZnVuY3Rpb24gKF8sIHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIHZhciBjb3VudCA9IGN1cnJlbnREYXRhICE9IG51bGwgPyBjdXJyZW50RGF0YS5sZW5ndGggOiAwO1xuICAgICAgICBpZiAoc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoID4gMCAmJlxuICAgICAgICAgIGNvdW50ID49IHNlbGYubWF4aW11bVNlbGVjdGlvbkxlbmd0aCkge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICAgICAgbWVzc2FnZTogJ21heGltdW1TZWxlY3RlZCcsXG4gICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgIG1heGltdW06IHNlbGYubWF4aW11bVNlbGVjdGlvbkxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1heGltdW1TZWxlY3Rpb25MZW5ndGg7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duJyxbXG4gICdqcXVlcnknLFxuICAnLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBEcm9wZG93biAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIERyb3Bkb3duLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKERyb3Bkb3duLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZHJvcGRvd24gPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1kcm9wZG93blwiPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNcIj48L3NwYW4+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgJGRyb3Bkb3duLmF0dHIoJ2RpcicsIHRoaXMub3B0aW9ucy5nZXQoJ2RpcicpKTtcblxuICAgIHRoaXMuJGRyb3Bkb3duID0gJGRyb3Bkb3duO1xuXG4gICAgcmV0dXJuICRkcm9wZG93bjtcbiAgfTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTaG91bGQgYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5wb3NpdGlvbiA9IGZ1bmN0aW9uICgkZHJvcGRvd24sICRjb250YWluZXIpIHtcbiAgICAvLyBTaG91bGQgYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgZHJvcGRvd24gZnJvbSB0aGUgRE9NXG4gICAgdGhpcy4kZHJvcGRvd24ucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9zZWFyY2gnLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBTZWFyY2ggKCkgeyB9XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdmFyICRyZW5kZXJlZCA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuXG4gICAgdmFyICRzZWFyY2ggPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duXCI+JyArXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCItMVwiJyArXG4gICAgICAgICcgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIicgK1xuICAgICAgICAnIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJzZWFyY2hib3hcIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiAvPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgIHRoaXMuJHNlYXJjaENvbnRhaW5lciA9ICRzZWFyY2g7XG4gICAgdGhpcy4kc2VhcmNoID0gJHNlYXJjaC5maW5kKCdpbnB1dCcpO1xuXG4gICAgJHJlbmRlcmVkLnByZXBlbmQoJHNlYXJjaCk7XG5cbiAgICByZXR1cm4gJHJlbmRlcmVkO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciByZXN1bHRzSWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIHRoaXMuJHNlYXJjaC5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcigna2V5cHJlc3MnLCBldnQpO1xuXG4gICAgICBzZWxmLl9rZXlVcFByZXZlbnRlZCA9IGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICB9KTtcblxuICAgIC8vIFdvcmthcm91bmQgZm9yIGJyb3dzZXJzIHdoaWNoIGRvIG5vdCBzdXBwb3J0IHRoZSBgaW5wdXRgIGV2ZW50XG4gICAgLy8gVGhpcyB3aWxsIHByZXZlbnQgZG91YmxlLXRyaWdnZXJpbmcgb2YgZXZlbnRzIGZvciBicm93c2VycyB3aGljaCBzdXBwb3J0XG4gICAgLy8gYm90aCB0aGUgYGtleXVwYCBhbmQgYGlucHV0YCBldmVudHMuXG4gICAgdGhpcy4kc2VhcmNoLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIFVuYmluZCB0aGUgZHVwbGljYXRlZCBga2V5dXBgIGV2ZW50XG4gICAgICAkKHRoaXMpLm9mZigna2V5dXAnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlYXJjaC5vbigna2V5dXAgaW5wdXQnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLmhhbmRsZVNlYXJjaChldnQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgMCk7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1jb250cm9scycsIHJlc3VsdHNJZCk7XG5cbiAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgLTEpO1xuICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcblxuICAgICAgc2VsZi4kc2VhcmNoLnZhbCgnJyk7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignYmx1cicpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFsbCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIGlmIChwYXJhbXMucXVlcnkudGVybSA9PSBudWxsIHx8IHBhcmFtcy5xdWVyeS50ZXJtID09PSAnJykge1xuICAgICAgICB2YXIgc2hvd1NlYXJjaCA9IHNlbGYuc2hvd1NlYXJjaChwYXJhbXMpO1xuXG4gICAgICAgIGlmIChzaG93U2VhcmNoKSB7XG4gICAgICAgICAgc2VsZi4kc2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLXNlYXJjaC0taGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuJHNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1zZWFyY2gtLWhpZGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgaWYgKHBhcmFtcy5kYXRhLl9yZXN1bHRJZCkge1xuICAgICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgcGFyYW1zLmRhdGEuX3Jlc3VsdElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmhhbmRsZVNlYXJjaCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoIXRoaXMuX2tleVVwUHJldmVudGVkKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLiRzZWFyY2gudmFsKCk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7XG4gICAgICAgIHRlcm06IGlucHV0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9rZXlVcFByZXZlbnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuc2hvd1NlYXJjaCA9IGZ1bmN0aW9uIChfLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4gU2VhcmNoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9oaWRlUGxhY2Vob2xkZXInLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIaWRlUGxhY2Vob2xkZXIgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubm9ybWFsaXplUGxhY2Vob2xkZXIob3B0aW9ucy5nZXQoJ3BsYWNlaG9sZGVyJykpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKTtcbiAgfVxuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIGRhdGEucmVzdWx0cyA9IHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoZGF0YS5yZXN1bHRzKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9O1xuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUubm9ybWFsaXplUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgcGxhY2Vob2xkZXIpIHtcbiAgICBpZiAodHlwZW9mIHBsYWNlaG9sZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGV4dDogcGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9O1xuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUucmVtb3ZlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgZGF0YSkge1xuICAgIHZhciBtb2RpZmllZERhdGEgPSBkYXRhLnNsaWNlKDApO1xuXG4gICAgZm9yICh2YXIgZCA9IGRhdGEubGVuZ3RoIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgIHZhciBpdGVtID0gZGF0YVtkXTtcblxuICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIuaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgbW9kaWZpZWREYXRhLnNwbGljZShkLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kaWZpZWREYXRhO1xuICB9O1xuXG4gIHJldHVybiBIaWRlUGxhY2Vob2xkZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2luZmluaXRlU2Nyb2xsJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBJbmZpbml0ZVNjcm9sbCAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLmxhc3RQYXJhbXMgPSB7fTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcik7XG5cbiAgICB0aGlzLiRsb2FkaW5nTW9yZSA9IHRoaXMuY3JlYXRlTG9hZGluZ01vcmUoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgdGhpcy4kbG9hZGluZ01vcmUucmVtb3ZlKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgIGlmICh0aGlzLnNob3dMb2FkaW5nTW9yZShkYXRhKSkge1xuICAgICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQodGhpcy4kbG9hZGluZ01vcmUpO1xuICAgICAgdGhpcy5sb2FkTW9yZUlmTmVlZGVkKCk7XG4gICAgfVxuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbigncXVlcnknLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmxhc3RQYXJhbXMgPSBwYXJhbXM7XG4gICAgICBzZWxmLmxvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdxdWVyeTphcHBlbmQnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmxhc3RQYXJhbXMgPSBwYXJhbXM7XG4gICAgICBzZWxmLmxvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5vbignc2Nyb2xsJywgdGhpcy5sb2FkTW9yZUlmTmVlZGVkLmJpbmQodGhpcykpO1xuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5sb2FkTW9yZUlmTmVlZGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc0xvYWRNb3JlVmlzaWJsZSA9ICQuY29udGFpbnMoXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICB0aGlzLiRsb2FkaW5nTW9yZVswXVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5sb2FkaW5nIHx8ICFpc0xvYWRNb3JlVmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gdGhpcy4kcmVzdWx0cy5vZmZzZXQoKS50b3AgK1xuICAgICAgdGhpcy4kcmVzdWx0cy5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgdmFyIGxvYWRpbmdNb3JlT2Zmc2V0ID0gdGhpcy4kbG9hZGluZ01vcmUub2Zmc2V0KCkudG9wICtcbiAgICAgIHRoaXMuJGxvYWRpbmdNb3JlLm91dGVySGVpZ2h0KGZhbHNlKTtcblxuICAgIGlmIChjdXJyZW50T2Zmc2V0ICsgNTAgPj0gbG9hZGluZ01vcmVPZmZzZXQpIHtcbiAgICAgIHRoaXMubG9hZE1vcmUoKTtcbiAgICB9XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmxvYWRNb3JlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICB2YXIgcGFyYW1zID0gJC5leHRlbmQoe30sIHtwYWdlOiAxfSwgdGhpcy5sYXN0UGFyYW1zKTtcblxuICAgIHBhcmFtcy5wYWdlKys7XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5OmFwcGVuZCcsIHBhcmFtcyk7XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLnNob3dMb2FkaW5nTW9yZSA9IGZ1bmN0aW9uIChfLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEucGFnaW5hdGlvbiAmJiBkYXRhLnBhZ2luYXRpb24ubW9yZTtcbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuY3JlYXRlTG9hZGluZ01vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRvcHRpb24gPSAkKFxuICAgICAgJzxsaSAnICtcbiAgICAgICdjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1sb2FkLW1vcmVcIicgK1xuICAgICAgJ3JvbGU9XCJvcHRpb25cIiBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiPjwvbGk+J1xuICAgICk7XG5cbiAgICB2YXIgbWVzc2FnZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RyYW5zbGF0aW9ucycpLmdldCgnbG9hZGluZ01vcmUnKTtcblxuICAgICRvcHRpb24uaHRtbChtZXNzYWdlKHRoaXMubGFzdFBhcmFtcykpO1xuXG4gICAgcmV0dXJuICRvcHRpb247XG4gIH07XG5cbiAgcmV0dXJuIEluZmluaXRlU2Nyb2xsO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9hdHRhY2hCb2R5JyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gQXR0YWNoQm9keSAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGRyb3Bkb3duUGFyZW50ID0gJChvcHRpb25zLmdldCgnZHJvcGRvd25QYXJlbnQnKSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fc2hvd0Ryb3Bkb3duKCk7XG4gICAgICBzZWxmLl9hdHRhY2hQb3NpdGlvbmluZ0hhbmRsZXIoY29udGFpbmVyKTtcblxuICAgICAgLy8gTXVzdCBiaW5kIGFmdGVyIHRoZSByZXN1bHRzIGhhbmRsZXJzIHRvIGVuc3VyZSBjb3JyZWN0IHNpemluZ1xuICAgICAgc2VsZi5fYmluZENvbnRhaW5lclJlc3VsdEhhbmRsZXJzKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5faGlkZURyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgJGRyb3Bkb3duLCAkY29udGFpbmVyKSB7XG4gICAgLy8gQ2xvbmUgYWxsIG9mIHRoZSBjb250YWluZXIgY2xhc3Nlc1xuICAgICRkcm9wZG93bi5hdHRyKCdjbGFzcycsICRjb250YWluZXIuYXR0cignY2xhc3MnKSk7XG5cbiAgICAkZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ3NlbGVjdDInKTtcbiAgICAkZHJvcGRvd24uYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG5cbiAgICAkZHJvcGRvd24uY3NzKHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAtOTk5OTk5XG4gICAgfSk7XG5cbiAgICB0aGlzLiRjb250YWluZXIgPSAkY29udGFpbmVyO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoJzxzcGFuPjwvc3Bhbj4nKTtcblxuICAgIHZhciAkZHJvcGRvd24gPSBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcbiAgICAkY29udGFpbmVyLmFwcGVuZCgkZHJvcGRvd24pO1xuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIgPSAkY29udGFpbmVyO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX2hpZGVEcm9wZG93biA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5kZXRhY2goKTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fYmluZENvbnRhaW5lclJlc3VsdEhhbmRsZXJzID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuXG4gICAgLy8gVGhlc2Ugc2hvdWxkIG9ubHkgYmUgYm91bmQgb25jZVxuICAgIGlmICh0aGlzLl9jb250YWluZXJSZXN1bHRzSGFuZGxlcnNCb3VuZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFwcGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bWVzc2FnZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kID0gdHJ1ZTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBzY3JvbGxFdmVudCA9ICdzY3JvbGwuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciByZXNpemVFdmVudCA9ICdyZXNpemUuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciBvcmllbnRhdGlvbkV2ZW50ID0gJ29yaWVudGF0aW9uY2hhbmdlLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcblxuICAgIHZhciAkd2F0Y2hlcnMgPSB0aGlzLiRjb250YWluZXIucGFyZW50cygpLmZpbHRlcihVdGlscy5oYXNTY3JvbGwpO1xuICAgICR3YXRjaGVycy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIFV0aWxzLlN0b3JlRGF0YSh0aGlzLCAnc2VsZWN0Mi1zY3JvbGwtcG9zaXRpb24nLCB7XG4gICAgICAgIHg6ICQodGhpcykuc2Nyb2xsTGVmdCgpLFxuICAgICAgICB5OiAkKHRoaXMpLnNjcm9sbFRvcCgpXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgICR3YXRjaGVycy5vbihzY3JvbGxFdmVudCwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBVdGlscy5HZXREYXRhKHRoaXMsICdzZWxlY3QyLXNjcm9sbC1wb3NpdGlvbicpO1xuICAgICAgJCh0aGlzKS5zY3JvbGxUb3AocG9zaXRpb24ueSk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oc2Nyb2xsRXZlbnQgKyAnICcgKyByZXNpemVFdmVudCArICcgJyArIG9yaWVudGF0aW9uRXZlbnQsXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fZGV0YWNoUG9zaXRpb25pbmdIYW5kbGVyID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuICAgIHZhciBzY3JvbGxFdmVudCA9ICdzY3JvbGwuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciByZXNpemVFdmVudCA9ICdyZXNpemUuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciBvcmllbnRhdGlvbkV2ZW50ID0gJ29yaWVudGF0aW9uY2hhbmdlLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcblxuICAgIHZhciAkd2F0Y2hlcnMgPSB0aGlzLiRjb250YWluZXIucGFyZW50cygpLmZpbHRlcihVdGlscy5oYXNTY3JvbGwpO1xuICAgICR3YXRjaGVycy5vZmYoc2Nyb2xsRXZlbnQpO1xuXG4gICAgJCh3aW5kb3cpLm9mZihzY3JvbGxFdmVudCArICcgJyArIHJlc2l6ZUV2ZW50ICsgJyAnICsgb3JpZW50YXRpb25FdmVudCk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX3Bvc2l0aW9uRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XG5cbiAgICB2YXIgaXNDdXJyZW50bHlBYm92ZSA9IHRoaXMuJGRyb3Bkb3duLmhhc0NsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS1hYm92ZScpO1xuICAgIHZhciBpc0N1cnJlbnRseUJlbG93ID0gdGhpcy4kZHJvcGRvd24uaGFzQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLWJlbG93Jyk7XG5cbiAgICB2YXIgbmV3RGlyZWN0aW9uID0gbnVsbDtcblxuICAgIHZhciBvZmZzZXQgPSB0aGlzLiRjb250YWluZXIub2Zmc2V0KCk7XG5cbiAgICBvZmZzZXQuYm90dG9tID0gb2Zmc2V0LnRvcCArIHRoaXMuJGNvbnRhaW5lci5vdXRlckhlaWdodChmYWxzZSk7XG5cbiAgICB2YXIgY29udGFpbmVyID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLiRjb250YWluZXIub3V0ZXJIZWlnaHQoZmFsc2UpXG4gICAgfTtcblxuICAgIGNvbnRhaW5lci50b3AgPSBvZmZzZXQudG9wO1xuICAgIGNvbnRhaW5lci5ib3R0b20gPSBvZmZzZXQudG9wICsgY29udGFpbmVyLmhlaWdodDtcblxuICAgIHZhciBkcm9wZG93biA9IHtcbiAgICAgIGhlaWdodDogdGhpcy4kZHJvcGRvd24ub3V0ZXJIZWlnaHQoZmFsc2UpXG4gICAgfTtcblxuICAgIHZhciB2aWV3cG9ydCA9IHtcbiAgICAgIHRvcDogJHdpbmRvdy5zY3JvbGxUb3AoKSxcbiAgICAgIGJvdHRvbTogJHdpbmRvdy5zY3JvbGxUb3AoKSArICR3aW5kb3cuaGVpZ2h0KClcbiAgICB9O1xuXG4gICAgdmFyIGVub3VnaFJvb21BYm92ZSA9IHZpZXdwb3J0LnRvcCA8IChvZmZzZXQudG9wIC0gZHJvcGRvd24uaGVpZ2h0KTtcbiAgICB2YXIgZW5vdWdoUm9vbUJlbG93ID0gdmlld3BvcnQuYm90dG9tID4gKG9mZnNldC5ib3R0b20gKyBkcm9wZG93bi5oZWlnaHQpO1xuXG4gICAgdmFyIGNzcyA9IHtcbiAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0LFxuICAgICAgdG9wOiBjb250YWluZXIuYm90dG9tXG4gICAgfTtcblxuICAgIC8vIERldGVybWluZSB3aGF0IHRoZSBwYXJlbnQgZWxlbWVudCBpcyB0byB1c2UgZm9yIGNhbGN1bGF0aW5nIHRoZSBvZmZzZXRcbiAgICB2YXIgJG9mZnNldFBhcmVudCA9IHRoaXMuJGRyb3Bkb3duUGFyZW50O1xuXG4gICAgLy8gRm9yIHN0YXRpY2FsbHkgcG9zaXRpb25lZCBlbGVtZW50cywgd2UgbmVlZCB0byBnZXQgdGhlIGVsZW1lbnRcbiAgICAvLyB0aGF0IGlzIGRldGVybWluaW5nIHRoZSBvZmZzZXRcbiAgICBpZiAoJG9mZnNldFBhcmVudC5jc3MoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAkb2Zmc2V0UGFyZW50ID0gJG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQoKTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50T2Zmc2V0ID0ge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG5cbiAgICBpZiAoXG4gICAgICAkLmNvbnRhaW5zKGRvY3VtZW50LmJvZHksICRvZmZzZXRQYXJlbnRbMF0pIHx8XG4gICAgICAkb2Zmc2V0UGFyZW50WzBdLmlzQ29ubmVjdGVkXG4gICAgICApIHtcbiAgICAgIHBhcmVudE9mZnNldCA9ICRvZmZzZXRQYXJlbnQub2Zmc2V0KCk7XG4gICAgfVxuXG4gICAgY3NzLnRvcCAtPSBwYXJlbnRPZmZzZXQudG9wO1xuICAgIGNzcy5sZWZ0IC09IHBhcmVudE9mZnNldC5sZWZ0O1xuXG4gICAgaWYgKCFpc0N1cnJlbnRseUFib3ZlICYmICFpc0N1cnJlbnRseUJlbG93KSB7XG4gICAgICBuZXdEaXJlY3Rpb24gPSAnYmVsb3cnO1xuICAgIH1cblxuICAgIGlmICghZW5vdWdoUm9vbUJlbG93ICYmIGVub3VnaFJvb21BYm92ZSAmJiAhaXNDdXJyZW50bHlBYm92ZSkge1xuICAgICAgbmV3RGlyZWN0aW9uID0gJ2Fib3ZlJztcbiAgICB9IGVsc2UgaWYgKCFlbm91Z2hSb29tQWJvdmUgJiYgZW5vdWdoUm9vbUJlbG93ICYmIGlzQ3VycmVudGx5QWJvdmUpIHtcbiAgICAgIG5ld0RpcmVjdGlvbiA9ICdiZWxvdyc7XG4gICAgfVxuXG4gICAgaWYgKG5ld0RpcmVjdGlvbiA9PSAnYWJvdmUnIHx8XG4gICAgICAoaXNDdXJyZW50bHlBYm92ZSAmJiBuZXdEaXJlY3Rpb24gIT09ICdiZWxvdycpKSB7XG4gICAgICBjc3MudG9wID0gY29udGFpbmVyLnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBkcm9wZG93bi5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKG5ld0RpcmVjdGlvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLiRkcm9wZG93blxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLWJlbG93IHNlbGVjdDItZHJvcGRvd24tLWFib3ZlJylcbiAgICAgICAgLmFkZENsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS0nICsgbmV3RGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuJGNvbnRhaW5lclxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1iZWxvdyBzZWxlY3QyLWNvbnRhaW5lci0tYWJvdmUnKVxuICAgICAgICAuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS0nICsgbmV3RGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5jc3MoY3NzKTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fcmVzaXplRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNzcyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLiRjb250YWluZXIub3V0ZXJXaWR0aChmYWxzZSkgKyAncHgnXG4gICAgfTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkcm9wZG93bkF1dG9XaWR0aCcpKSB7XG4gICAgICBjc3MubWluV2lkdGggPSBjc3Mud2lkdGg7XG4gICAgICBjc3MucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgY3NzLndpZHRoID0gJ2F1dG8nO1xuICAgIH1cblxuICAgIHRoaXMuJGRyb3Bkb3duLmNzcyhjc3MpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9zaG93RHJvcGRvd24gPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIuYXBwZW5kVG8odGhpcy4kZHJvcGRvd25QYXJlbnQpO1xuXG4gICAgdGhpcy5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgIHRoaXMuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gIH07XG5cbiAgcmV0dXJuIEF0dGFjaEJvZHk7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gY291bnRSZXN1bHRzIChkYXRhKSB7XG4gICAgdmFyIGNvdW50ID0gMDtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGl0ZW0gPSBkYXRhW2RdO1xuXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICBjb3VudCArPSBjb3VudFJlc3VsdHMoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xuICAgIHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSBvcHRpb25zLmdldCgnbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnKTtcblxuICAgIGlmICh0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIDwgMCkge1xuICAgICAgdGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IEluZmluaXR5O1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcik7XG4gIH1cblxuICBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaC5wcm90b3R5cGUuc2hvd1NlYXJjaCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcykge1xuICAgIGlmIChjb3VudFJlc3VsdHMocGFyYW1zLmRhdGEucmVzdWx0cykgPCB0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcyk7XG4gIH07XG5cbiAgcmV0dXJuIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9zZWxlY3RPbkNsb3NlJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBTZWxlY3RPbkNsb3NlICgpIHsgfVxuXG4gIFNlbGVjdE9uQ2xvc2UucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuX2hhbmRsZVNlbGVjdE9uQ2xvc2UocGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RPbkNsb3NlLnByb3RvdHlwZS5faGFuZGxlU2VsZWN0T25DbG9zZSA9IGZ1bmN0aW9uIChfLCBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5vcmlnaW5hbFNlbGVjdDJFdmVudCAhPSBudWxsKSB7XG4gICAgICB2YXIgZXZlbnQgPSBwYXJhbXMub3JpZ2luYWxTZWxlY3QyRXZlbnQ7XG5cbiAgICAgIC8vIERvbid0IHNlbGVjdCBhbiBpdGVtIGlmIHRoZSBjbG9zZSBldmVudCB3YXMgdHJpZ2dlcmVkIGZyb20gYSBzZWxlY3Qgb3JcbiAgICAgIC8vIHVuc2VsZWN0IGV2ZW50XG4gICAgICBpZiAoZXZlbnQuX3R5cGUgPT09ICdzZWxlY3QnIHx8IGV2ZW50Ll90eXBlID09PSAndW5zZWxlY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgJGhpZ2hsaWdodGVkUmVzdWx0cyA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAvLyBPbmx5IHNlbGVjdCBoaWdobGlnaHRlZCByZXN1bHRzXG4gICAgaWYgKCRoaWdobGlnaHRlZFJlc3VsdHMubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSgkaGlnaGxpZ2h0ZWRSZXN1bHRzWzBdLCAnZGF0YScpO1xuXG4gICAgLy8gRG9uJ3QgcmUtc2VsZWN0IGFscmVhZHkgc2VsZWN0ZWQgcmVzdWx0ZVxuICAgIGlmIChcbiAgICAgIChkYXRhLmVsZW1lbnQgIT0gbnVsbCAmJiBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQpIHx8XG4gICAgICAoZGF0YS5lbGVtZW50ID09IG51bGwgJiYgZGF0YS5zZWxlY3RlZClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3RPbkNsb3NlO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9jbG9zZU9uU2VsZWN0JyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2xvc2VPblNlbGVjdCAoKSB7IH1cblxuICBDbG9zZU9uU2VsZWN0LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5fc2VsZWN0VHJpZ2dlcmVkKGV2dCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5fc2VsZWN0VHJpZ2dlcmVkKGV2dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ2xvc2VPblNlbGVjdC5wcm90b3R5cGUuX3NlbGVjdFRyaWdnZXJlZCA9IGZ1bmN0aW9uIChfLCBldnQpIHtcbiAgICB2YXIgb3JpZ2luYWxFdmVudCA9IGV2dC5vcmlnaW5hbEV2ZW50O1xuXG4gICAgLy8gRG9uJ3QgY2xvc2UgaWYgdGhlIGNvbnRyb2wga2V5IGlzIGJlaW5nIGhlbGRcbiAgICBpZiAob3JpZ2luYWxFdmVudCAmJiAob3JpZ2luYWxFdmVudC5jdHJsS2V5IHx8IG9yaWdpbmFsRXZlbnQubWV0YUtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ2Nsb3NlJywge1xuICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcbiAgICAgIG9yaWdpbmFsU2VsZWN0MkV2ZW50OiBldnRcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ2xvc2VPblNlbGVjdDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvaTE4bi9lbicsW10sZnVuY3Rpb24gKCkge1xuICAvLyBFbmdsaXNoXG4gIHJldHVybiB7XG4gICAgZXJyb3JMb2FkaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ1RoZSByZXN1bHRzIGNvdWxkIG5vdCBiZSBsb2FkZWQuJztcbiAgICB9LFxuICAgIGlucHV0VG9vTG9uZzogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHZhciBvdmVyQ2hhcnMgPSBhcmdzLmlucHV0Lmxlbmd0aCAtIGFyZ3MubWF4aW11bTtcblxuICAgICAgdmFyIG1lc3NhZ2UgPSAnUGxlYXNlIGRlbGV0ZSAnICsgb3ZlckNoYXJzICsgJyBjaGFyYWN0ZXInO1xuXG4gICAgICBpZiAob3ZlckNoYXJzICE9IDEpIHtcbiAgICAgICAgbWVzc2FnZSArPSAncyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG4gICAgaW5wdXRUb29TaG9ydDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHZhciByZW1haW5pbmdDaGFycyA9IGFyZ3MubWluaW11bSAtIGFyZ3MuaW5wdXQubGVuZ3RoO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9ICdQbGVhc2UgZW50ZXIgJyArIHJlbWFpbmluZ0NoYXJzICsgJyBvciBtb3JlIGNoYXJhY3RlcnMnO1xuXG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ0xvYWRpbmcgbW9yZSByZXN1bHRz4oCmJztcbiAgICB9LFxuICAgIG1heGltdW1TZWxlY3RlZDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1lvdSBjYW4gb25seSBzZWxlY3QgJyArIGFyZ3MubWF4aW11bSArICcgaXRlbSc7XG5cbiAgICAgIGlmIChhcmdzLm1heGltdW0gIT0gMSkge1xuICAgICAgICBtZXNzYWdlICs9ICdzJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICBub1Jlc3VsdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnTm8gcmVzdWx0cyBmb3VuZCc7XG4gICAgfSxcbiAgICBzZWFyY2hpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnU2VhcmNoaW5n4oCmJztcbiAgICB9LFxuICAgIHJlbW92ZUFsbEl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ1JlbW92ZSBhbGwgaXRlbXMnO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGVmYXVsdHMnLFtcbiAgJ2pxdWVyeScsXG4gICdyZXF1aXJlJyxcblxuICAnLi9yZXN1bHRzJyxcblxuICAnLi9zZWxlY3Rpb24vc2luZ2xlJyxcbiAgJy4vc2VsZWN0aW9uL211bHRpcGxlJyxcbiAgJy4vc2VsZWN0aW9uL3BsYWNlaG9sZGVyJyxcbiAgJy4vc2VsZWN0aW9uL2FsbG93Q2xlYXInLFxuICAnLi9zZWxlY3Rpb24vc2VhcmNoJyxcbiAgJy4vc2VsZWN0aW9uL2V2ZW50UmVsYXknLFxuXG4gICcuL3V0aWxzJyxcbiAgJy4vdHJhbnNsYXRpb24nLFxuICAnLi9kaWFjcml0aWNzJyxcblxuICAnLi9kYXRhL3NlbGVjdCcsXG4gICcuL2RhdGEvYXJyYXknLFxuICAnLi9kYXRhL2FqYXgnLFxuICAnLi9kYXRhL3RhZ3MnLFxuICAnLi9kYXRhL3Rva2VuaXplcicsXG4gICcuL2RhdGEvbWluaW11bUlucHV0TGVuZ3RoJyxcbiAgJy4vZGF0YS9tYXhpbXVtSW5wdXRMZW5ndGgnLFxuICAnLi9kYXRhL21heGltdW1TZWxlY3Rpb25MZW5ndGgnLFxuXG4gICcuL2Ryb3Bkb3duJyxcbiAgJy4vZHJvcGRvd24vc2VhcmNoJyxcbiAgJy4vZHJvcGRvd24vaGlkZVBsYWNlaG9sZGVyJyxcbiAgJy4vZHJvcGRvd24vaW5maW5pdGVTY3JvbGwnLFxuICAnLi9kcm9wZG93bi9hdHRhY2hCb2R5JyxcbiAgJy4vZHJvcGRvd24vbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnLFxuICAnLi9kcm9wZG93bi9zZWxlY3RPbkNsb3NlJyxcbiAgJy4vZHJvcGRvd24vY2xvc2VPblNlbGVjdCcsXG5cbiAgJy4vaTE4bi9lbidcbl0sIGZ1bmN0aW9uICgkLCByZXF1aXJlLFxuXG4gICAgICAgICAgICAgUmVzdWx0c0xpc3QsXG5cbiAgICAgICAgICAgICBTaW5nbGVTZWxlY3Rpb24sIE11bHRpcGxlU2VsZWN0aW9uLCBQbGFjZWhvbGRlciwgQWxsb3dDbGVhcixcbiAgICAgICAgICAgICBTZWxlY3Rpb25TZWFyY2gsIEV2ZW50UmVsYXksXG5cbiAgICAgICAgICAgICBVdGlscywgVHJhbnNsYXRpb24sIERJQUNSSVRJQ1MsXG5cbiAgICAgICAgICAgICBTZWxlY3REYXRhLCBBcnJheURhdGEsIEFqYXhEYXRhLCBUYWdzLCBUb2tlbml6ZXIsXG4gICAgICAgICAgICAgTWluaW11bUlucHV0TGVuZ3RoLCBNYXhpbXVtSW5wdXRMZW5ndGgsIE1heGltdW1TZWxlY3Rpb25MZW5ndGgsXG5cbiAgICAgICAgICAgICBEcm9wZG93biwgRHJvcGRvd25TZWFyY2gsIEhpZGVQbGFjZWhvbGRlciwgSW5maW5pdGVTY3JvbGwsXG4gICAgICAgICAgICAgQXR0YWNoQm9keSwgTWluaW11bVJlc3VsdHNGb3JTZWFyY2gsIFNlbGVjdE9uQ2xvc2UsIENsb3NlT25TZWxlY3QsXG5cbiAgICAgICAgICAgICBFbmdsaXNoVHJhbnNsYXRpb24pIHtcbiAgZnVuY3Rpb24gRGVmYXVsdHMgKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmIChvcHRpb25zLmRhdGFBZGFwdGVyID09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmFqYXggIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gQWpheERhdGE7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBBcnJheURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gU2VsZWN0RGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNaW5pbXVtSW5wdXRMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWF4aW11bUlucHV0TGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNYXhpbXVtSW5wdXRMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWF4aW11bVNlbGVjdGlvbkxlbmd0aCA+IDApIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50YWdzKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShvcHRpb25zLmRhdGFBZGFwdGVyLCBUYWdzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudG9rZW5TZXBhcmF0b3JzICE9IG51bGwgfHwgb3B0aW9ucy50b2tlbml6ZXIgIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBUb2tlbml6ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucXVlcnkgIT0gbnVsbCkge1xuICAgICAgICB2YXIgUXVlcnkgPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvcXVlcnknKTtcblxuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBRdWVyeVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5pbml0U2VsZWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgdmFyIEluaXRTZWxlY3Rpb24gPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvaW5pdFNlbGVjdGlvbicpO1xuXG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIEluaXRTZWxlY3Rpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gUmVzdWx0c0xpc3Q7XG5cbiAgICAgIGlmIChvcHRpb25zLmFqYXggIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlcixcbiAgICAgICAgICBJbmZpbml0ZVNjcm9sbFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wbGFjZWhvbGRlciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIEhpZGVQbGFjZWhvbGRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5zZWxlY3RPbkNsb3NlKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIFNlbGVjdE9uQ2xvc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBEcm9wZG93bjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBTZWFyY2hhYmxlRHJvcGRvd24gPSBVdGlscy5EZWNvcmF0ZShEcm9wZG93biwgRHJvcGRvd25TZWFyY2gpO1xuXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gU2VhcmNoYWJsZURyb3Bkb3duO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCAhPT0gMCkge1xuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICAgIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlcixcbiAgICAgICAgICBDbG9zZU9uU2VsZWN0XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzICE9IG51bGwgfHxcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkNzcyAhPSBudWxsIHx8XG4gICAgICAgIG9wdGlvbnMuYWRhcHREcm9wZG93bkNzc0NsYXNzICE9IG51bGxcbiAgICAgICkge1xuICAgICAgICB2YXIgRHJvcGRvd25DU1MgPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvZHJvcGRvd25Dc3MnKTtcblxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICAgIERyb3Bkb3duQ1NTXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICBBdHRhY2hCb2R5XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gTXVsdGlwbGVTZWxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBTaW5nbGVTZWxlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgcGxhY2Vob2xkZXIgbWl4aW4gaWYgYSBwbGFjZWhvbGRlciB3YXMgc3BlY2lmaWVkXG4gICAgICBpZiAob3B0aW9ucy5wbGFjZWhvbGRlciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBQbGFjZWhvbGRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hbGxvd0NsZWFyKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBBbGxvd0NsZWFyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm11bHRpcGxlKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBTZWxlY3Rpb25TZWFyY2hcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBvcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzICE9IG51bGwgfHxcbiAgICAgICAgb3B0aW9ucy5jb250YWluZXJDc3MgIT0gbnVsbCB8fFxuICAgICAgICBvcHRpb25zLmFkYXB0Q29udGFpbmVyQ3NzQ2xhc3MgIT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHZhciBDb250YWluZXJDU1MgPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvY29udGFpbmVyQ3NzJyk7XG5cbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIENvbnRhaW5lckNTU1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICBFdmVudFJlbGF5XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBkZWZhdWx0cyB3ZXJlIG5vdCBwcmV2aW91c2x5IGFwcGxpZWQgZnJvbSBhbiBlbGVtZW50LCBpdCBpc1xuICAgIC8vIHBvc3NpYmxlIGZvciB0aGUgbGFuZ3VhZ2Ugb3B0aW9uIHRvIGhhdmUgbm90IGJlZW4gcmVzb2x2ZWRcbiAgICBvcHRpb25zLmxhbmd1YWdlID0gdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKG9wdGlvbnMubGFuZ3VhZ2UpO1xuXG4gICAgLy8gQWx3YXlzIGZhbGwgYmFjayB0byBFbmdsaXNoIHNpbmNlIGl0IHdpbGwgYWx3YXlzIGJlIGNvbXBsZXRlXG4gICAgb3B0aW9ucy5sYW5ndWFnZS5wdXNoKCdlbicpO1xuXG4gICAgdmFyIHVuaXF1ZUxhbmd1YWdlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgbCA9IDA7IGwgPCBvcHRpb25zLmxhbmd1YWdlLmxlbmd0aDsgbCsrKSB7XG4gICAgICB2YXIgbGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlW2xdO1xuXG4gICAgICBpZiAodW5pcXVlTGFuZ3VhZ2VzLmluZGV4T2YobGFuZ3VhZ2UpID09PSAtMSkge1xuICAgICAgICB1bmlxdWVMYW5ndWFnZXMucHVzaChsYW5ndWFnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9ucy5sYW5ndWFnZSA9IHVuaXF1ZUxhbmd1YWdlcztcblxuICAgIG9wdGlvbnMudHJhbnNsYXRpb25zID0gdGhpcy5fcHJvY2Vzc1RyYW5zbGF0aW9ucyhcbiAgICAgIG9wdGlvbnMubGFuZ3VhZ2UsXG4gICAgICBvcHRpb25zLmRlYnVnXG4gICAgKTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3MgKHRleHQpIHtcbiAgICAgIC8vIFVzZWQgJ3VuaSByYW5nZSArIG5hbWVkIGZ1bmN0aW9uJyBmcm9tIGh0dHA6Ly9qc3BlcmYuY29tL2RpYWNyaXRpY3MvMThcbiAgICAgIGZ1bmN0aW9uIG1hdGNoKGEpIHtcbiAgICAgICAgcmV0dXJuIERJQUNSSVRJQ1NbYV0gfHwgYTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15cXHUwMDAwLVxcdTAwN0VdL2csIG1hdGNoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaGVyIChwYXJhbXMsIGRhdGEpIHtcbiAgICAgIC8vIEFsd2F5cyByZXR1cm4gdGhlIG9iamVjdCBpZiB0aGVyZSBpcyBub3RoaW5nIHRvIGNvbXBhcmVcbiAgICAgIGlmICgkLnRyaW0ocGFyYW1zLnRlcm0pID09PSAnJykge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgLy8gRG8gYSByZWN1cnNpdmUgY2hlY2sgZm9yIG9wdGlvbnMgd2l0aCBjaGlsZHJlblxuICAgICAgaWYgKGRhdGEuY2hpbGRyZW4gJiYgZGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIENsb25lIHRoZSBkYXRhIG9iamVjdCBpZiB0aGVyZSBhcmUgY2hpbGRyZW5cbiAgICAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBhcyB3ZSBtb2RpZnkgdGhlIG9iamVjdCB0byByZW1vdmUgYW55IG5vbi1tYXRjaGVzXG4gICAgICAgIHZhciBtYXRjaCA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkYXRhKTtcblxuICAgICAgICAvLyBDaGVjayBlYWNoIGNoaWxkIG9mIHRoZSBvcHRpb25cbiAgICAgICAgZm9yICh2YXIgYyA9IGRhdGEuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgYyA+PSAwOyBjLS0pIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBkYXRhLmNoaWxkcmVuW2NdO1xuXG4gICAgICAgICAgdmFyIG1hdGNoZXMgPSBtYXRjaGVyKHBhcmFtcywgY2hpbGQpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgd2Fzbid0IGEgbWF0Y2gsIHJlbW92ZSB0aGUgb2JqZWN0IGluIHRoZSBhcnJheVxuICAgICAgICAgIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICAgICAgICAgIG1hdGNoLmNoaWxkcmVuLnNwbGljZShjLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbnkgY2hpbGRyZW4gbWF0Y2hlZCwgcmV0dXJuIHRoZSBuZXcgb2JqZWN0XG4gICAgICAgIGlmIChtYXRjaC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgd2VyZSBubyBtYXRjaGluZyBjaGlsZHJlbiwgY2hlY2sganVzdCB0aGUgcGxhaW4gb2JqZWN0XG4gICAgICAgIHJldHVybiBtYXRjaGVyKHBhcmFtcywgbWF0Y2gpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZ2luYWwgPSBzdHJpcERpYWNyaXRpY3MoZGF0YS50ZXh0KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgdmFyIHRlcm0gPSBzdHJpcERpYWNyaXRpY3MocGFyYW1zLnRlcm0pLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSB0ZXh0IGNvbnRhaW5zIHRoZSB0ZXJtXG4gICAgICBpZiAob3JpZ2luYWwuaW5kZXhPZih0ZXJtKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBkb2Vzbid0IGNvbnRhaW4gdGhlIHRlcm0sIGRvbid0IHJldHVybiBhbnl0aGluZ1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIGFtZEJhc2U6ICcuLycsXG4gICAgICBhbWRMYW5ndWFnZUJhc2U6ICcuL2kxOG4vJyxcbiAgICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICBkcm9wZG93bkF1dG9XaWR0aDogZmFsc2UsXG4gICAgICBlc2NhcGVNYXJrdXA6IFV0aWxzLmVzY2FwZU1hcmt1cCxcbiAgICAgIGxhbmd1YWdlOiB7fSxcbiAgICAgIG1hdGNoZXI6IG1hdGNoZXIsXG4gICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDAsXG4gICAgICBtYXhpbXVtSW5wdXRMZW5ndGg6IDAsXG4gICAgICBtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoOiAwLFxuICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IDAsXG4gICAgICBzZWxlY3RPbkNsb3NlOiBmYWxzZSxcbiAgICAgIHNjcm9sbEFmdGVyU2VsZWN0OiBmYWxzZSxcbiAgICAgIHNvcnRlcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVSZXN1bHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50ZXh0O1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlU2VsZWN0aW9uOiBmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24udGV4dDtcbiAgICAgIH0sXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnLFxuICAgICAgd2lkdGg6ICdyZXNvbHZlJ1xuICAgIH07XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLmFwcGx5RnJvbUVsZW1lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgJGVsZW1lbnQpIHtcbiAgICB2YXIgb3B0aW9uTGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlO1xuICAgIHZhciBkZWZhdWx0TGFuZ3VhZ2UgPSB0aGlzLmRlZmF1bHRzLmxhbmd1YWdlO1xuICAgIHZhciBlbGVtZW50TGFuZ3VhZ2UgPSAkZWxlbWVudC5wcm9wKCdsYW5nJyk7XG4gICAgdmFyIHBhcmVudExhbmd1YWdlID0gJGVsZW1lbnQuY2xvc2VzdCgnW2xhbmddJykucHJvcCgnbGFuZycpO1xuXG4gICAgdmFyIGxhbmd1YWdlcyA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChcbiAgICAgIHRoaXMuX3Jlc29sdmVMYW5ndWFnZShlbGVtZW50TGFuZ3VhZ2UpLFxuICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKG9wdGlvbkxhbmd1YWdlKSxcbiAgICAgIHRoaXMuX3Jlc29sdmVMYW5ndWFnZShkZWZhdWx0TGFuZ3VhZ2UpLFxuICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKHBhcmVudExhbmd1YWdlKVxuICAgICk7XG5cbiAgICBvcHRpb25zLmxhbmd1YWdlID0gbGFuZ3VhZ2VzO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLl9yZXNvbHZlTGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcbiAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKCQuaXNFbXB0eU9iamVjdChsYW5ndWFnZSkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoJC5pc1BsYWluT2JqZWN0KGxhbmd1YWdlKSkge1xuICAgICAgcmV0dXJuIFtsYW5ndWFnZV07XG4gICAgfVxuXG4gICAgdmFyIGxhbmd1YWdlcztcblxuICAgIGlmICghJC5pc0FycmF5KGxhbmd1YWdlKSkge1xuICAgICAgbGFuZ3VhZ2VzID0gW2xhbmd1YWdlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFuZ3VhZ2VzID0gbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgdmFyIHJlc29sdmVkTGFuZ3VhZ2VzID0gW107XG5cbiAgICBmb3IgKHZhciBsID0gMDsgbCA8IGxhbmd1YWdlcy5sZW5ndGg7IGwrKykge1xuICAgICAgcmVzb2x2ZWRMYW5ndWFnZXMucHVzaChsYW5ndWFnZXNbbF0pO1xuXG4gICAgICBpZiAodHlwZW9mIGxhbmd1YWdlc1tsXSA9PT0gJ3N0cmluZycgJiYgbGFuZ3VhZ2VzW2xdLmluZGV4T2YoJy0nKSA+IDApIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgcmVnaW9uIGluZm9ybWF0aW9uIGlmIGl0IGlzIGluY2x1ZGVkXG4gICAgICAgIHZhciBsYW5ndWFnZVBhcnRzID0gbGFuZ3VhZ2VzW2xdLnNwbGl0KCctJyk7XG4gICAgICAgIHZhciBiYXNlTGFuZ3VhZ2UgPSBsYW5ndWFnZVBhcnRzWzBdO1xuXG4gICAgICAgIHJlc29sdmVkTGFuZ3VhZ2VzLnB1c2goYmFzZUxhbmd1YWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZWRMYW5ndWFnZXM7XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLl9wcm9jZXNzVHJhbnNsYXRpb25zID0gZnVuY3Rpb24gKGxhbmd1YWdlcywgZGVidWcpIHtcbiAgICB2YXIgdHJhbnNsYXRpb25zID0gbmV3IFRyYW5zbGF0aW9uKCk7XG5cbiAgICBmb3IgKHZhciBsID0gMDsgbCA8IGxhbmd1YWdlcy5sZW5ndGg7IGwrKykge1xuICAgICAgdmFyIGxhbmd1YWdlRGF0YSA9IG5ldyBUcmFuc2xhdGlvbigpO1xuXG4gICAgICB2YXIgbGFuZ3VhZ2UgPSBsYW5ndWFnZXNbbF07XG5cbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVHJ5IHRvIGxvYWQgaXQgd2l0aCB0aGUgb3JpZ2luYWwgbmFtZVxuICAgICAgICAgIGxhbmd1YWdlRGF0YSA9IFRyYW5zbGF0aW9uLmxvYWRQYXRoKGxhbmd1YWdlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjb3VsZG4ndCBsb2FkIGl0LCBjaGVjayBpZiBpdCB3YXNuJ3QgdGhlIGZ1bGwgcGF0aFxuICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLmRlZmF1bHRzLmFtZExhbmd1YWdlQmFzZSArIGxhbmd1YWdlO1xuICAgICAgICAgICAgbGFuZ3VhZ2VEYXRhID0gVHJhbnNsYXRpb24ubG9hZFBhdGgobGFuZ3VhZ2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAvLyBUaGUgdHJhbnNsYXRpb24gY291bGQgbm90IGJlIGxvYWRlZCBhdCBhbGwuIFNvbWV0aW1lcyB0aGlzIGlzXG4gICAgICAgICAgICAvLyBiZWNhdXNlIG9mIGEgY29uZmlndXJhdGlvbiBwcm9ibGVtLCBvdGhlciB0aW1lcyB0aGlzIGNhbiBiZVxuICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiBob3cgU2VsZWN0MiBoZWxwcyBsb2FkIGFsbCBwb3NzaWJsZSB0cmFuc2xhdGlvbiBmaWxlc1xuICAgICAgICAgICAgaWYgKGRlYnVnICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBsYW5ndWFnZSBmaWxlIGZvciBcIicgKyBsYW5ndWFnZSArICdcIiBjb3VsZCAnICtcbiAgICAgICAgICAgICAgICAnbm90IGJlIGF1dG9tYXRpY2FsbHkgbG9hZGVkLiBBIGZhbGxiYWNrIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoJC5pc1BsYWluT2JqZWN0KGxhbmd1YWdlKSkge1xuICAgICAgICBsYW5ndWFnZURhdGEgPSBuZXcgVHJhbnNsYXRpb24obGFuZ3VhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFuZ3VhZ2VEYXRhID0gbGFuZ3VhZ2U7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zbGF0aW9ucy5leHRlbmQobGFuZ3VhZ2VEYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25zO1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjYW1lbEtleSA9ICQuY2FtZWxDYXNlKGtleSk7XG5cbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIGRhdGFbY2FtZWxLZXldID0gdmFsdWU7XG5cbiAgICB2YXIgY29udmVydGVkRGF0YSA9IFV0aWxzLl9jb252ZXJ0RGF0YShkYXRhKTtcblxuICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuZGVmYXVsdHMsIGNvbnZlcnRlZERhdGEpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0cyA9IG5ldyBEZWZhdWx0cygpO1xuXG4gIHJldHVybiBkZWZhdWx0cztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvb3B0aW9ucycsW1xuICAncmVxdWlyZScsXG4gICdqcXVlcnknLFxuICAnLi9kZWZhdWx0cycsXG4gICcuL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKHJlcXVpcmUsICQsIERlZmF1bHRzLCBVdGlscykge1xuICBmdW5jdGlvbiBPcHRpb25zIChvcHRpb25zLCAkZWxlbWVudCkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAoJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mcm9tRWxlbWVudCgkZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKCRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IERlZmF1bHRzLmFwcGx5RnJvbUVsZW1lbnQodGhpcy5vcHRpb25zLCAkZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gRGVmYXVsdHMuYXBwbHkodGhpcy5vcHRpb25zKTtcblxuICAgIGlmICgkZWxlbWVudCAmJiAkZWxlbWVudC5pcygnaW5wdXQnKSkge1xuICAgICAgdmFyIElucHV0Q29tcGF0ID0gcmVxdWlyZSh0aGlzLmdldCgnYW1kQmFzZScpICsgJ2NvbXBhdC9pbnB1dERhdGEnKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgIHRoaXMub3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgSW5wdXRDb21wYXRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgT3B0aW9ucy5wcm90b3R5cGUuZnJvbUVsZW1lbnQgPSBmdW5jdGlvbiAoJGUpIHtcbiAgICB2YXIgZXhjbHVkZWREYXRhID0gWydzZWxlY3QyJ107XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm11bHRpcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5tdWx0aXBsZSA9ICRlLnByb3AoJ211bHRpcGxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZWQgPSAkZS5wcm9wKCdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyID09IG51bGwpIHtcbiAgICAgIGlmICgkZS5wcm9wKCdkaXInKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJGUucHJvcCgnZGlyJyk7XG4gICAgICB9IGVsc2UgaWYgKCRlLmNsb3Nlc3QoJ1tkaXJdJykucHJvcCgnZGlyJykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRpciA9ICRlLmNsb3Nlc3QoJ1tkaXJdJykucHJvcCgnZGlyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJ2x0cic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJGUucHJvcCgnZGlzYWJsZWQnLCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQpO1xuICAgICRlLnByb3AoJ211bHRpcGxlJywgdGhpcy5vcHRpb25zLm11bHRpcGxlKTtcblxuICAgIGlmIChVdGlscy5HZXREYXRhKCRlWzBdLCAnc2VsZWN0MlRhZ3MnKSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdTZWxlY3QyOiBUaGUgYGRhdGEtc2VsZWN0Mi10YWdzYCBhdHRyaWJ1dGUgaGFzIGJlZW4gY2hhbmdlZCB0byAnICtcbiAgICAgICAgICAndXNlIHRoZSBgZGF0YS1kYXRhYCBhbmQgYGRhdGEtdGFncz1cInRydWVcImAgYXR0cmlidXRlcyBhbmQgd2lsbCBiZSAnICtcbiAgICAgICAgICAncmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgU2VsZWN0Mi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLlN0b3JlRGF0YSgkZVswXSwgJ2RhdGEnLCBVdGlscy5HZXREYXRhKCRlWzBdLCAnc2VsZWN0MlRhZ3MnKSk7XG4gICAgICBVdGlscy5TdG9yZURhdGEoJGVbMF0sICd0YWdzJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKFV0aWxzLkdldERhdGEoJGVbMF0sICdhamF4VXJsJykpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGVidWcgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnU2VsZWN0MjogVGhlIGBkYXRhLWFqYXgtdXJsYCBhdHRyaWJ1dGUgaGFzIGJlZW4gY2hhbmdlZCB0byAnICtcbiAgICAgICAgICAnYGRhdGEtYWpheC0tdXJsYCBhbmQgc3VwcG9ydCBmb3IgdGhlIG9sZCBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkJyArXG4gICAgICAgICAgJyBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgU2VsZWN0Mi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgICRlLmF0dHIoJ2FqYXgtLXVybCcsIFV0aWxzLkdldERhdGEoJGVbMF0sICdhamF4VXJsJykpO1xuICAgICAgVXRpbHMuU3RvcmVEYXRhKCRlWzBdLCAnYWpheC1VcmwnLCBVdGlscy5HZXREYXRhKCRlWzBdLCAnYWpheFVybCcpKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YXNldCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gdXBwZXJDYXNlTGV0dGVyKF8sIGxldHRlcikge1xuICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIFByZS1sb2FkIGFsbCBvZiB0aGUgYXR0cmlidXRlcyB3aGljaCBhcmUgcHJlZml4ZWQgd2l0aCBgZGF0YS1gXG4gICAgZm9yICh2YXIgYXR0ciA9IDA7IGF0dHIgPCAkZVswXS5hdHRyaWJ1dGVzLmxlbmd0aDsgYXR0cisrKSB7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9ICRlWzBdLmF0dHJpYnV0ZXNbYXR0cl0ubmFtZTtcbiAgICAgIHZhciBwcmVmaXggPSAnZGF0YS0nO1xuXG4gICAgICBpZiAoYXR0cmlidXRlTmFtZS5zdWJzdHIoMCwgcHJlZml4Lmxlbmd0aCkgPT0gcHJlZml4KSB7XG4gICAgICAgIC8vIEdldCB0aGUgY29udGVudHMgb2YgdGhlIGF0dHJpYnV0ZSBhZnRlciBgZGF0YS1gXG4gICAgICAgIHZhciBkYXRhTmFtZSA9IGF0dHJpYnV0ZU5hbWUuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgZGF0YSBjb250ZW50cyBmcm9tIHRoZSBjb25zaXN0ZW50IHNvdXJjZVxuICAgICAgICAvLyBUaGlzIGlzIG1vcmUgdGhhbiBsaWtlbHkgdGhlIGpRdWVyeSBkYXRhIGhlbHBlclxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gVXRpbHMuR2V0RGF0YSgkZVswXSwgZGF0YU5hbWUpO1xuXG4gICAgICAgIC8vIGNhbWVsQ2FzZSB0aGUgYXR0cmlidXRlIG5hbWUgdG8gbWF0Y2ggdGhlIHNwZWNcbiAgICAgICAgdmFyIGNhbWVsRGF0YU5hbWUgPSBkYXRhTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCB1cHBlckNhc2VMZXR0ZXIpO1xuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBkYXRhIGF0dHJpYnV0ZSBjb250ZW50cyBpbnRvIHRoZSBkYXRhc2V0IHNpbmNlXG4gICAgICAgIGRhdGFzZXRbY2FtZWxEYXRhTmFtZV0gPSBkYXRhVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJlZmVyIHRoZSBlbGVtZW50J3MgYGRhdGFzZXRgIGF0dHJpYnV0ZSBpZiBpdCBleGlzdHNcbiAgICAvLyBqUXVlcnkgMS54IGRvZXMgbm90IGNvcnJlY3RseSBoYW5kbGUgZGF0YSBhdHRyaWJ1dGVzIHdpdGggbXVsdGlwbGUgZGFzaGVzXG4gICAgaWYgKCQuZm4uanF1ZXJ5ICYmICQuZm4uanF1ZXJ5LnN1YnN0cigwLCAyKSA9PSAnMS4nICYmICRlWzBdLmRhdGFzZXQpIHtcbiAgICAgIGRhdGFzZXQgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJGVbMF0uZGF0YXNldCwgZGF0YXNldCk7XG4gICAgfVxuXG4gICAgLy8gUHJlZmVyIG91ciBpbnRlcm5hbCBkYXRhIGNhY2hlIGlmIGl0IGV4aXN0c1xuICAgIHZhciBkYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIFV0aWxzLkdldERhdGEoJGVbMF0pLCBkYXRhc2V0KTtcblxuICAgIGRhdGEgPSBVdGlscy5fY29udmVydERhdGEoZGF0YSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKCQuaW5BcnJheShrZXksIGV4Y2x1ZGVkRGF0YSkgPiAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdCh0aGlzLm9wdGlvbnNba2V5XSkpIHtcbiAgICAgICAgJC5leHRlbmQodGhpcy5vcHRpb25zW2tleV0sIGRhdGFba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBPcHRpb25zLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uc1trZXldO1xuICB9O1xuXG4gIE9wdGlvbnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICAgIHRoaXMub3B0aW9uc1trZXldID0gdmFsO1xuICB9O1xuXG4gIHJldHVybiBPcHRpb25zO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9jb3JlJyxbXG4gICdqcXVlcnknLFxuICAnLi9vcHRpb25zJyxcbiAgJy4vdXRpbHMnLFxuICAnLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIE9wdGlvbnMsIFV0aWxzLCBLRVlTKSB7XG4gIHZhciBTZWxlY3QyID0gZnVuY3Rpb24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgaWYgKFV0aWxzLkdldERhdGEoJGVsZW1lbnRbMF0sICdzZWxlY3QyJykgIT0gbnVsbCkge1xuICAgICAgVXRpbHMuR2V0RGF0YSgkZWxlbWVudFswXSwgJ3NlbGVjdDInKS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuXG4gICAgdGhpcy5pZCA9IHRoaXMuX2dlbmVyYXRlSWQoJGVsZW1lbnQpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zLCAkZWxlbWVudCk7XG5cbiAgICBTZWxlY3QyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIHRoZSB0YWJpbmRleFxuXG4gICAgdmFyIHRhYmluZGV4ID0gJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKSB8fCAwO1xuICAgIFV0aWxzLlN0b3JlRGF0YSgkZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcsIHRhYmluZGV4KTtcbiAgICAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgLy8gU2V0IHVwIGNvbnRhaW5lcnMgYW5kIGFkYXB0ZXJzXG5cbiAgICB2YXIgRGF0YUFkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdkYXRhQWRhcHRlcicpO1xuICAgIHRoaXMuZGF0YUFkYXB0ZXIgPSBuZXcgRGF0YUFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgJGNvbnRhaW5lciA9IHRoaXMucmVuZGVyKCk7XG5cbiAgICB0aGlzLl9wbGFjZUNvbnRhaW5lcigkY29udGFpbmVyKTtcblxuICAgIHZhciBTZWxlY3Rpb25BZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgnc2VsZWN0aW9uQWRhcHRlcicpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbkFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy4kc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24ucmVuZGVyKCk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5wb3NpdGlvbih0aGlzLiRzZWxlY3Rpb24sICRjb250YWluZXIpO1xuXG4gICAgdmFyIERyb3Bkb3duQWRhcHRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ2Ryb3Bkb3duQWRhcHRlcicpO1xuICAgIHRoaXMuZHJvcGRvd24gPSBuZXcgRHJvcGRvd25BZGFwdGVyKCRlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuJGRyb3Bkb3duID0gdGhpcy5kcm9wZG93bi5yZW5kZXIoKTtcblxuICAgIHRoaXMuZHJvcGRvd24ucG9zaXRpb24odGhpcy4kZHJvcGRvd24sICRjb250YWluZXIpO1xuXG4gICAgdmFyIFJlc3VsdHNBZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgncmVzdWx0c0FkYXB0ZXInKTtcbiAgICB0aGlzLnJlc3VsdHMgPSBuZXcgUmVzdWx0c0FkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucywgdGhpcy5kYXRhQWRhcHRlcik7XG4gICAgdGhpcy4kcmVzdWx0cyA9IHRoaXMucmVzdWx0cy5yZW5kZXIoKTtcblxuICAgIHRoaXMucmVzdWx0cy5wb3NpdGlvbih0aGlzLiRyZXN1bHRzLCB0aGlzLiRkcm9wZG93bik7XG5cbiAgICAvLyBCaW5kIGV2ZW50c1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQmluZCB0aGUgY29udGFpbmVyIHRvIGFsbCBvZiB0aGUgYWRhcHRlcnNcbiAgICB0aGlzLl9iaW5kQWRhcHRlcnMoKTtcblxuICAgIC8vIFJlZ2lzdGVyIGFueSBET00gZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLl9yZWdpc3RlckRvbUV2ZW50cygpO1xuXG4gICAgLy8gUmVnaXN0ZXIgYW55IGludGVybmFsIGV2ZW50IGhhbmRsZXJzXG4gICAgdGhpcy5fcmVnaXN0ZXJEYXRhRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJSZXN1bHRzRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoaW5pdGlhbERhdGEpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcbiAgICAgICAgZGF0YTogaW5pdGlhbERhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSGlkZSB0aGUgb3JpZ2luYWwgc2VsZWN0XG4gICAgJGVsZW1lbnQuYWRkQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKTtcbiAgICAkZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAvLyBTeW5jaHJvbml6ZSBhbnkgbW9uaXRvcmVkIGF0dHJpYnV0ZXNcbiAgICB0aGlzLl9zeW5jQXR0cmlidXRlcygpO1xuXG4gICAgVXRpbHMuU3RvcmVEYXRhKCRlbGVtZW50WzBdLCAnc2VsZWN0MicsIHRoaXMpO1xuXG4gICAgLy8gRW5zdXJlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggJGVsZW1lbnQuZGF0YSgnc2VsZWN0MicpLlxuICAgICRlbGVtZW50LmRhdGEoJ3NlbGVjdDInLCB0aGlzKTtcbiAgfTtcblxuICBVdGlscy5FeHRlbmQoU2VsZWN0MiwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX2dlbmVyYXRlSWQgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICB2YXIgaWQgPSAnJztcblxuICAgIGlmICgkZWxlbWVudC5hdHRyKCdpZCcpICE9IG51bGwpIHtcbiAgICAgIGlkID0gJGVsZW1lbnQuYXR0cignaWQnKTtcbiAgICB9IGVsc2UgaWYgKCRlbGVtZW50LmF0dHIoJ25hbWUnKSAhPSBudWxsKSB7XG4gICAgICBpZCA9ICRlbGVtZW50LmF0dHIoJ25hbWUnKSArICctJyArIFV0aWxzLmdlbmVyYXRlQ2hhcnMoMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gVXRpbHMuZ2VuZXJhdGVDaGFycyg0KTtcbiAgICB9XG5cbiAgICBpZCA9IGlkLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfCwpL2csICcnKTtcbiAgICBpZCA9ICdzZWxlY3QyLScgKyBpZDtcblxuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcGxhY2VDb250YWluZXIgPSBmdW5jdGlvbiAoJGNvbnRhaW5lcikge1xuICAgICRjb250YWluZXIuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCk7XG5cbiAgICB2YXIgd2lkdGggPSB0aGlzLl9yZXNvbHZlV2lkdGgodGhpcy4kZWxlbWVudCwgdGhpcy5vcHRpb25zLmdldCgnd2lkdGgnKSk7XG5cbiAgICBpZiAod2lkdGggIT0gbnVsbCkge1xuICAgICAgJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgd2lkdGgpO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVzb2x2ZVdpZHRoID0gZnVuY3Rpb24gKCRlbGVtZW50LCBtZXRob2QpIHtcbiAgICB2YXIgV0lEVEggPSAvXndpZHRoOigoWy0rXT8oWzAtOV0qXFwuKT9bMC05XSspKHB4fGVtfGV4fCV8aW58Y218bW18cHR8cGMpKS9pO1xuXG4gICAgaWYgKG1ldGhvZCA9PSAncmVzb2x2ZScpIHtcbiAgICAgIHZhciBzdHlsZVdpZHRoID0gdGhpcy5fcmVzb2x2ZVdpZHRoKCRlbGVtZW50LCAnc3R5bGUnKTtcblxuICAgICAgaWYgKHN0eWxlV2lkdGggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gc3R5bGVXaWR0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVXaWR0aCgkZWxlbWVudCwgJ2VsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09ICdlbGVtZW50Jykge1xuICAgICAgdmFyIGVsZW1lbnRXaWR0aCA9ICRlbGVtZW50Lm91dGVyV2lkdGgoZmFsc2UpO1xuXG4gICAgICBpZiAoZWxlbWVudFdpZHRoIDw9IDApIHtcbiAgICAgICAgcmV0dXJuICdhdXRvJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRXaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgc3R5bGUgPSAkZWxlbWVudC5hdHRyKCdzdHlsZScpO1xuXG4gICAgICBpZiAodHlwZW9mKHN0eWxlKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBhdHRycyA9IHN0eWxlLnNwbGl0KCc7Jyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSA9IGkgKyAxKSB7XG4gICAgICAgIHZhciBhdHRyID0gYXR0cnNbaV0ucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBhdHRyLm1hdGNoKFdJRFRIKTtcblxuICAgICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCAmJiBtYXRjaGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXNbMV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PSAnY29tcHV0ZWRzdHlsZScpIHtcbiAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJGVsZW1lbnRbMF0pO1xuXG4gICAgICByZXR1cm4gY29tcHV0ZWRTdHlsZS53aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9iaW5kQWRhcHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kYXRhQWRhcHRlci5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG4gICAgdGhpcy5zZWxlY3Rpb24uYmluZCh0aGlzLCB0aGlzLiRjb250YWluZXIpO1xuXG4gICAgdGhpcy5kcm9wZG93bi5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG4gICAgdGhpcy5yZXN1bHRzLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEb21FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignY2hhbmdlLnNlbGVjdDInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3Rpb246dXBkYXRlJywge1xuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2ZvY3VzLnNlbGVjdDInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2ZvY3VzJywgZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3N5bmNBID0gVXRpbHMuYmluZCh0aGlzLl9zeW5jQXR0cmlidXRlcywgdGhpcyk7XG4gICAgdGhpcy5fc3luY1MgPSBVdGlscy5iaW5kKHRoaXMuX3N5bmNTdWJ0cmVlLCB0aGlzKTtcblxuICAgIGlmICh0aGlzLiRlbGVtZW50WzBdLmF0dGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmF0dGFjaEV2ZW50KCdvbnByb3BlcnR5Y2hhbmdlJywgdGhpcy5fc3luY0EpO1xuICAgIH1cblxuICAgIHZhciBvYnNlcnZlciA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8XG4gICAgICB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlciB8fFxuICAgICAgd2luZG93Lk1vek11dGF0aW9uT2JzZXJ2ZXJcbiAgICA7XG5cbiAgICBpZiAob2JzZXJ2ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgb2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICBzZWxmLl9zeW5jQSgpO1xuICAgICAgICBzZWxmLl9zeW5jUyhudWxsLCBtdXRhdGlvbnMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuJGVsZW1lbnRbMF0sIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ0RPTUF0dHJNb2RpZmllZCcsXG4gICAgICAgIHNlbGYuX3N5bmNBLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ0RPTU5vZGVJbnNlcnRlZCcsXG4gICAgICAgIHNlbGYuX3N5bmNTLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ0RPTU5vZGVSZW1vdmVkJyxcbiAgICAgICAgc2VsZi5fc3luY1MsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEYXRhRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBub25SZWxheUV2ZW50cyA9IFsndG9nZ2xlJywgJ2ZvY3VzJ107XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5vbigndG9nZ2xlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi50b2dnbGVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5mb2N1cyhwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24ub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBpZiAoJC5pbkFycmF5KG5hbWUsIG5vblJlbGF5RXZlbnRzKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEcm9wZG93bkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRyb3Bkb3duLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyUmVzdWx0c0V2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLnJlc3VsdHMub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignZW5hYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2Rpc2FibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1kaXNhYmxlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdxdWVyeScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIGlmICghc2VsZi5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ29wZW4nLCB7fSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YUFkYXB0ZXIucXVlcnkocGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6YWxsJywge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgcXVlcnk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbigncXVlcnk6YXBwZW5kJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgdGhpcy5kYXRhQWRhcHRlci5xdWVyeShwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czphcHBlbmQnLCB7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBxdWVyeTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBrZXkgPSBldnQud2hpY2g7XG5cbiAgICAgIGlmIChzZWxmLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IEtFWVMuRVNDIHx8IGtleSA9PT0gS0VZUy5UQUIgfHxcbiAgICAgICAgICAgIChrZXkgPT09IEtFWVMuVVAgJiYgZXZ0LmFsdEtleSkpIHtcbiAgICAgICAgICBzZWxmLmNsb3NlKGV2dCk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuRU5URVIpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6c2VsZWN0Jywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGtleSA9PT0gS0VZUy5TUEFDRSAmJiBldnQuY3RybEtleSkpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6dG9nZ2xlJywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBLRVlTLlVQKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOnByZXZpb3VzJywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBLRVlTLkRPV04pIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6bmV4dCcsIHt9KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoa2V5ID09PSBLRVlTLkVOVEVSIHx8IGtleSA9PT0gS0VZUy5TUEFDRSB8fFxuICAgICAgICAgICAgKGtleSA9PT0gS0VZUy5ET1dOICYmIGV2dC5hbHRLZXkpKSB7XG4gICAgICAgICAgc2VsZi5vcGVuKCk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9zeW5jQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuc2V0KCdkaXNhYmxlZCcsIHRoaXMuJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnKSk7XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmlnZ2VyKCdkaXNhYmxlJywge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2VuYWJsZScsIHt9KTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX2lzQ2hhbmdlTXV0YXRpb24gPSBmdW5jdGlvbiAoZXZ0LCBtdXRhdGlvbnMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIElnbm9yZSBhbnkgbXV0YXRpb24gZXZlbnRzIHJhaXNlZCBmb3IgZWxlbWVudHMgdGhhdCBhcmVuJ3Qgb3B0aW9ucyBvclxuICAgIC8vIG9wdGdyb3Vwcy4gVGhpcyBoYW5kbGVzIHRoZSBjYXNlIHdoZW4gdGhlIHNlbGVjdCBlbGVtZW50IGlzIGRlc3Ryb3llZFxuICAgIGlmIChcbiAgICAgIGV2dCAmJiBldnQudGFyZ2V0ICYmIChcbiAgICAgICAgZXZ0LnRhcmdldC5ub2RlTmFtZSAhPT0gJ09QVElPTicgJiYgZXZ0LnRhcmdldC5ub2RlTmFtZSAhPT0gJ09QVEdST1VQJ1xuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghbXV0YXRpb25zKSB7XG4gICAgICAvLyBJZiBtdXRhdGlvbiBldmVudHMgYXJlbid0IHN1cHBvcnRlZCwgdGhlbiB3ZSBjYW4gb25seSBhc3N1bWUgdGhhdCB0aGVcbiAgICAgIC8vIGNoYW5nZSBhZmZlY3RlZCB0aGUgc2VsZWN0aW9uc1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChtdXRhdGlvbnMuYWRkZWROb2RlcyAmJiBtdXRhdGlvbnMuYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG11dGF0aW9ucy5hZGRlZE5vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciBub2RlID0gbXV0YXRpb25zLmFkZGVkTm9kZXNbbl07XG5cbiAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQpIHtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobXV0YXRpb25zLnJlbW92ZWROb2RlcyAmJiBtdXRhdGlvbnMucmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoJC5pc0FycmF5KG11dGF0aW9ucykpIHtcbiAgICAgICQuZWFjaChtdXRhdGlvbnMsIGZ1bmN0aW9uKGV2dCwgbXV0YXRpb24pIHtcbiAgICAgICAgaWYgKHNlbGYuX2lzQ2hhbmdlTXV0YXRpb24oZXZ0LCBtdXRhdGlvbikpIHtcbiAgICAgICAgICAvLyBXZSd2ZSBmb3VuZCBhIGNoYW5nZSBtdXRhdGlvbi5cbiAgICAgICAgICAvLyBMZXQncyBlc2NhcGUgZnJvbSB0aGUgbG9vcCBhbmQgY29udGludWVcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fc3luY1N1YnRyZWUgPSBmdW5jdGlvbiAoZXZ0LCBtdXRhdGlvbnMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IHRoaXMuX2lzQ2hhbmdlTXV0YXRpb24oZXZ0LCBtdXRhdGlvbnMpO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIE9ubHkgcmUtcHVsbCB0aGUgZGF0YSBpZiB3ZSB0aGluayB0aGVyZSBpcyBhIGNoYW5nZVxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICB0aGlzLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcbiAgICAgICAgICBkYXRhOiBjdXJyZW50RGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIHRyaWdnZXIgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgdHJpZ2dlciBwcmUtZXZlbnRzIHdoZW5cbiAgICogdGhlcmUgYXJlIGV2ZW50cyB0aGF0IGNhbiBiZSBwcmV2ZW50ZWQuXG4gICAqL1xuICBTZWxlY3QyLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgICB2YXIgYWN0dWFsVHJpZ2dlciA9IFNlbGVjdDIuX19zdXBlcl9fLnRyaWdnZXI7XG4gICAgdmFyIHByZVRyaWdnZXJNYXAgPSB7XG4gICAgICAnb3Blbic6ICdvcGVuaW5nJyxcbiAgICAgICdjbG9zZSc6ICdjbG9zaW5nJyxcbiAgICAgICdzZWxlY3QnOiAnc2VsZWN0aW5nJyxcbiAgICAgICd1bnNlbGVjdCc6ICd1bnNlbGVjdGluZycsXG4gICAgICAnY2xlYXInOiAnY2xlYXJpbmcnXG4gICAgfTtcblxuICAgIGlmIChhcmdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSBpbiBwcmVUcmlnZ2VyTWFwKSB7XG4gICAgICB2YXIgcHJlVHJpZ2dlck5hbWUgPSBwcmVUcmlnZ2VyTWFwW25hbWVdO1xuICAgICAgdmFyIHByZVRyaWdnZXJBcmdzID0ge1xuICAgICAgICBwcmV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBhcmdzOiBhcmdzXG4gICAgICB9O1xuXG4gICAgICBhY3R1YWxUcmlnZ2VyLmNhbGwodGhpcywgcHJlVHJpZ2dlck5hbWUsIHByZVRyaWdnZXJBcmdzKTtcblxuICAgICAgaWYgKHByZVRyaWdnZXJBcmdzLnByZXZlbnRlZCkge1xuICAgICAgICBhcmdzLnByZXZlbnRlZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFjdHVhbFRyaWdnZXIuY2FsbCh0aGlzLCBuYW1lLCBhcmdzKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS50b2dnbGVEcm9wZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7fSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdjbG9zZScsIHsgb3JpZ2luYWxFdmVudCA6IGV2dCB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJlbmFibGVkXCIgKG5vdCBcImRpc2FibGVkXCIpIHN0YXRlIG9mIHRoaXNcbiAgICogb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgaW5zdGFuY2UgaXMgbm90IGRpc2FibGVkLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGluc3RhbmNlIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaXNFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0Rpc2FibGVkKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gYWJzdHJhY3QgdGhlIFwiZGlzYWJsZWRcIiBzdGF0ZSBvZiB0aGlzIG9iamVjdC5cbiAgICpcbiAgICogQHJldHVybiB7dHJ1ZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyB0cnVlLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyBmYWxzZS5cbiAgICovXG4gIFNlbGVjdDIucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXQoJ2Rpc2FibGVkJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLiRjb250YWluZXIuaGFzQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaGFzRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGNvbnRhaW5lci5oYXNDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vIE5vIG5lZWQgdG8gcmUtdHJpZ2dlciBmb2N1cyBldmVudHMgaWYgd2UgYXJlIGFscmVhZHkgZm9jdXNlZFxuICAgIGlmICh0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1mb2N1cycpO1xuICAgIHRoaXMudHJpZ2dlcignZm9jdXMnLCB7fSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NlbGVjdDI6IFRoZSBgc2VsZWN0MihcImVuYWJsZVwiKWAgbWV0aG9kIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwnICtcbiAgICAgICAgJyBiZSByZW1vdmVkIGluIGxhdGVyIFNlbGVjdDIgdmVyc2lvbnMuIFVzZSAkZWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIiknICtcbiAgICAgICAgJyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MgPT0gbnVsbCB8fCBhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXJncyA9IFt0cnVlXTtcbiAgICB9XG5cbiAgICB2YXIgZGlzYWJsZWQgPSAhYXJnc1swXTtcblxuICAgIHRoaXMuJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCBkaXNhYmxlZCk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJlxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NlbGVjdDI6IERhdGEgY2FuIG5vIGxvbmdlciBiZSBzZXQgdXNpbmcgYHNlbGVjdDIoXCJkYXRhXCIpYC4gWW91ICcgK1xuICAgICAgICAnc2hvdWxkIGNvbnNpZGVyIHNldHRpbmcgdGhlIHZhbHVlIGluc3RlYWQgdXNpbmcgYCRlbGVtZW50LnZhbCgpYC4nXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gW107XG5cbiAgICB0aGlzLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICBkYXRhID0gY3VycmVudERhdGE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU2VsZWN0MjogVGhlIGBzZWxlY3QyKFwidmFsXCIpYCBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZScgK1xuICAgICAgICAnIHJlbW92ZWQgaW4gbGF0ZXIgU2VsZWN0MiB2ZXJzaW9ucy4gVXNlICRlbGVtZW50LnZhbCgpIGluc3RlYWQuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC52YWwoKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3VmFsID0gYXJnc1swXTtcblxuICAgIGlmICgkLmlzQXJyYXkobmV3VmFsKSkge1xuICAgICAgbmV3VmFsID0gJC5tYXAobmV3VmFsLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmoudG9TdHJpbmcoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQudmFsKG5ld1ZhbCkudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIGlmICh0aGlzLiRlbGVtZW50WzBdLmRldGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmRldGFjaEV2ZW50KCdvbnByb3BlcnR5Y2hhbmdlJywgdGhpcy5fc3luY0EpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vYnNlcnZlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF1cbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUF0dHJNb2RpZmllZCcsIHRoaXMuX3N5bmNBLCBmYWxzZSk7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdXG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aGlzLl9zeW5jUywgZmFsc2UpO1xuICAgICAgdGhpcy4kZWxlbWVudFswXVxuICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTm9kZVJlbW92ZWQnLCB0aGlzLl9zeW5jUywgZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuX3N5bmNBID0gbnVsbDtcbiAgICB0aGlzLl9zeW5jUyA9IG51bGw7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLnNlbGVjdDInKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JyxcbiAgICBVdGlscy5HZXREYXRhKHRoaXMuJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnKSk7XG5cbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJyk7XG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIFV0aWxzLlJlbW92ZURhdGEodGhpcy4kZWxlbWVudFswXSk7XG4gICAgdGhpcy4kZWxlbWVudC5yZW1vdmVEYXRhKCdzZWxlY3QyJyk7XG5cbiAgICB0aGlzLmRhdGFBZGFwdGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNlbGVjdGlvbi5kZXN0cm95KCk7XG4gICAgdGhpcy5kcm9wZG93bi5kZXN0cm95KCk7XG4gICAgdGhpcy5yZXN1bHRzLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmRyb3Bkb3duID0gbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBudWxsO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyIHNlbGVjdDItY29udGFpbmVyXCI+JyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdGlvblwiPjwvc3Bhbj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24td3JhcHBlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICAkY29udGFpbmVyLmF0dHIoJ2RpcicsIHRoaXMub3B0aW9ucy5nZXQoJ2RpcicpKTtcblxuICAgIHRoaXMuJGNvbnRhaW5lciA9ICRjb250YWluZXI7XG5cbiAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS0nICsgdGhpcy5vcHRpb25zLmdldCgndGhlbWUnKSk7XG5cbiAgICBVdGlscy5TdG9yZURhdGEoJGNvbnRhaW5lclswXSwgJ2VsZW1lbnQnLCB0aGlzLiRlbGVtZW50KTtcblxuICAgIHJldHVybiAkY29udGFpbmVyO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3QyO1xufSk7XG5cblMyLmRlZmluZSgnanF1ZXJ5LW1vdXNld2hlZWwnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIC8vIFVzZWQgdG8gc2hpbSBqUXVlcnkubW91c2V3aGVlbCBmb3Igbm9uLWZ1bGwgYnVpbGRzLlxuICByZXR1cm4gJDtcbn0pO1xuXG5TMi5kZWZpbmUoJ2pxdWVyeS5zZWxlY3QyJyxbXG4gICdqcXVlcnknLFxuICAnanF1ZXJ5LW1vdXNld2hlZWwnLFxuXG4gICcuL3NlbGVjdDIvY29yZScsXG4gICcuL3NlbGVjdDIvZGVmYXVsdHMnLFxuICAnLi9zZWxlY3QyL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIF8sIFNlbGVjdDIsIERlZmF1bHRzLCBVdGlscykge1xuICBpZiAoJC5mbi5zZWxlY3QyID09IG51bGwpIHtcbiAgICAvLyBBbGwgbWV0aG9kcyB0aGF0IHNob3VsZCByZXR1cm4gdGhlIGVsZW1lbnRcbiAgICB2YXIgdGhpc01ldGhvZHMgPSBbJ29wZW4nLCAnY2xvc2UnLCAnZGVzdHJveSddO1xuXG4gICAgJC5mbi5zZWxlY3QyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlT3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcblxuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBTZWxlY3QyKCQodGhpcyksIGluc3RhbmNlT3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHJldDtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnc2VsZWN0MicpO1xuXG4gICAgICAgICAgaWYgKGluc3RhbmNlID09IG51bGwgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ1RoZSBzZWxlY3QyKFxcJycgKyBvcHRpb25zICsgJ1xcJykgbWV0aG9kIHdhcyBjYWxsZWQgb24gYW4gJyArXG4gICAgICAgICAgICAgICdlbGVtZW50IHRoYXQgaXMgbm90IHVzaW5nIFNlbGVjdDIuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXQgPSBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIHNob3VsZCBiZSByZXR1cm5pbmcgYHRoaXNgXG4gICAgICAgIGlmICgkLmluQXJyYXkob3B0aW9ucywgdGhpc01ldGhvZHMpID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzIGZvciBTZWxlY3QyOiAnICsgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmICgkLmZuLnNlbGVjdDIuZGVmYXVsdHMgPT0gbnVsbCkge1xuICAgICQuZm4uc2VsZWN0Mi5kZWZhdWx0cyA9IERlZmF1bHRzO1xuICB9XG5cbiAgcmV0dXJuIFNlbGVjdDI7XG59KTtcblxuICAvLyBSZXR1cm4gdGhlIEFNRCBsb2FkZXIgY29uZmlndXJhdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCBvdXRzaWRlIG9mIHRoaXMgZmlsZVxuICByZXR1cm4ge1xuICAgIGRlZmluZTogUzIuZGVmaW5lLFxuICAgIHJlcXVpcmU6IFMyLnJlcXVpcmVcbiAgfTtcbn0oKSk7XG5cbiAgLy8gQXV0b2xvYWQgdGhlIGpRdWVyeSBiaW5kaW5nc1xuICAvLyBXZSBrbm93IHRoYXQgYWxsIG9mIHRoZSBtb2R1bGVzIGV4aXN0IGFib3ZlIHRoaXMsIHNvIHdlJ3JlIHNhZmVcbiAgdmFyIHNlbGVjdDIgPSBTMi5yZXF1aXJlKCdqcXVlcnkuc2VsZWN0MicpO1xuXG4gIC8vIEhvbGQgdGhlIEFNRCBtb2R1bGUgcmVmZXJlbmNlcyBvbiB0aGUgalF1ZXJ5IGZ1bmN0aW9uIHRoYXQgd2FzIGp1c3QgbG9hZGVkXG4gIC8vIFRoaXMgYWxsb3dzIFNlbGVjdDIgdG8gdXNlIHRoZSBpbnRlcm5hbCBsb2FkZXIgb3V0c2lkZSBvZiB0aGlzIGZpbGUsIHN1Y2hcbiAgLy8gYXMgaW4gdGhlIGxhbmd1YWdlIGZpbGVzLlxuICBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQgPSBTMjtcblxuICAvLyBSZXR1cm4gdGhlIFNlbGVjdDIgaW5zdGFuY2UgZm9yIGFueW9uZSB3aG8gaXMgaW1wb3J0aW5nIGl0LlxuICByZXR1cm4gc2VsZWN0Mjtcbn0pKTtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IFwic2VsZWN0MlwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gZWxlbWVudHNcclxuICAgIGNvbnN0IGVscyA9IHtcclxuICAgICAgICBiaWxsaW5nX2NvdW50cnk6ICQoXCIjYmlsbGluZ19jb3VudHJ5XCIpLFxyXG4gICAgICAgIGJpbGxpbmdfc3RhdGU6ICQoXCIjYmlsbGluZ19zdGF0ZVwiKSxcclxuICAgICAgICBiaWxsaW5nX2NpdHk6ICQoXCIjYmlsbGluZ19jaXR5XCIpLFxyXG4gICAgICAgIGJpbGxpbmdfY2l0eV9maWVsZDogJChcIiNiaWxsaW5nX2NpdHlfZmllbGRcIiksXHJcbiAgICAgICAgYmlsbGluZ19zdWJkaXN0cmljdDogJChcIiNiaWxsaW5nX3N1YmRpc3RyaWN0XCIpLFxyXG4gICAgICAgIGJpbGxpbmdfc3ViZGlzdHJpY3RfZmllbGQ6ICQoXCIjYmlsbGluZ19zdWJkaXN0cmljdF9maWVsZFwiKSxcclxuXHJcbiAgICAgICAgc2hpcHBpbmdfY291bnRyeTogJChcIiNzaGlwcGluZ19jb3VudHJ5XCIpLFxyXG4gICAgICAgIHNoaXBwaW5nX3N0YXRlOiAkKFwiI3NoaXBwaW5nX3N0YXRlXCIpLFxyXG4gICAgICAgIHNoaXBwaW5nX2NpdHk6ICQoXCIjc2hpcHBpbmdfY2l0eVwiKSxcclxuICAgICAgICBzaGlwcGluZ19jaXR5X2ZpZWxkOiAkKFwiI3NoaXBwaW5nX2NpdHlfZmllbGRcIiksXHJcbiAgICAgICAgc2hpcHBpbmdfc3ViZGlzdHJpY3Q6ICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RcIiksXHJcbiAgICAgICAgc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGQ6ICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGRcIiksXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgc2VsZWN0MlxyXG4gICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3Quc2VsZWN0MigpO1xyXG4gICAgZWxzLnNoaXBwaW5nX3N1YmRpc3RyaWN0LnNlbGVjdDIoKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIGFkZHJlc3MgZmllbGRzXHJcbiAgICBzZG9rcl9iaWxsaW5nX2FkZHJlc3NfZmllbGRzKCk7XHJcbiAgICBzZG9rcl9zaGlwcGluZ19hZGRyZXNzX2ZpZWxkcygpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgYmlsbGluZyBjaXR5IG9wdGlvbnNcclxuICAgIGlmIChlbHMuYmlsbGluZ19jb3VudHJ5LnZhbCgpID09IFwiSURcIikge1xyXG4gICAgICAgIHNkb2tyX2dldF9iaWxsaW5nX2NpdHlfb3B0aW9ucygpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdChcImJpbGxpbmdcIiwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2Rva3JfZ2V0X2JpbGxpbmdfc3ViZGlzdHJpY3Rfb3B0aW9ucygpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdChcImJpbGxpbmdcIiwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBzaGlwcGluZyBjaXR5IG9wdGlvbnNcclxuICAgIGlmIChlbHMuc2hpcHBpbmdfY291bnRyeS52YWwoKSA9PSBcIklEXCIpIHtcclxuICAgICAgICBzZG9rcl9nZXRfc2hpcHBpbmdfY2l0eV9vcHRpb25zKCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0KFwic2hpcHBpbmdcIiwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2Rva3JfZ2V0X3NoaXBwaW5nX3N1YmRpc3RyaWN0X29wdGlvbnMoKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3QoXCJzaGlwcGluZ1wiLCBcIlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbiBjaGFuZ2UgYmlsbGluZyBjb3VudHJ5XHJcbiAgICBlbHMuYmlsbGluZ19jb3VudHJ5Lm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZG9rcl9iaWxsaW5nX2FkZHJlc3NfZmllbGRzKCk7XHJcbiAgICAgICAgc2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3QoXCJiaWxsaW5nXCIsIFwiXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIGJpbGxpbmcgc3RhdGVcclxuICAgIGVscy5iaWxsaW5nX3N0YXRlLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZWxzLmJpbGxpbmdfY291bnRyeS52YWwoKSAhPSBcIklEXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZG9rcl9nZXRfYmlsbGluZ19jaXR5X29wdGlvbnMoKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3QoXCJiaWxsaW5nXCIsIFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIGJpbGxpbmcgY2l0eVxyXG4gICAgJChcIiNiaWxsaW5nX2NpdHlfZmllbGRcIikub24oXCJjaGFuZ2VcIiwgXCIjYmlsbGluZ19jaXR5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZWxzLmJpbGxpbmdfY291bnRyeS52YWwoKSAhPSBcIklEXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZG9rcl9nZXRfYmlsbGluZ19zdWJkaXN0cmljdF9vcHRpb25zKCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0KFwiYmlsbGluZ1wiLCBcIlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBiaWxsaW5nIHN1YmRpc3RyaWN0XHJcbiAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3QoXCJiaWxsaW5nXCIsICQodGhpcykudmFsKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIHNoaXBwaW5nIGNvdW50cnlcclxuICAgIGVscy5zaGlwcGluZ19jb3VudHJ5Lm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZG9rcl9zaGlwcGluZ19hZGRyZXNzX2ZpZWxkcygpO1xyXG4gICAgICAgIHNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0KFwiYmlsbGluZ1wiLCBcIlwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBzaGlwcGluZyBzdGF0ZVxyXG4gICAgZWxzLnNoaXBwaW5nX3N0YXRlLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZWxzLnNoaXBwaW5nX2NvdW50cnkudmFsKCkgIT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Rva3JfZ2V0X3NoaXBwaW5nX2NpdHlfb3B0aW9ucygpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdChcInNoaXBwaW5nXCIsIFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gY2hhbmdlIHNoaXBwaW5nIGNpdHlcclxuICAgICQoXCIjc2hpcHBpbmdfY2l0eV9maWVsZFwiKS5vbihcImNoYW5nZVwiLCBcIiNzaGlwcGluZ19jaXR5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZWxzLnNoaXBwaW5nX2NvdW50cnkudmFsKCkgIT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Rva3JfZ2V0X3NoaXBwaW5nX3N1YmRpc3RyaWN0X29wdGlvbnMoKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2Rva3Jfc2V0X3Nlc3Npb25fc3ViZGlzdHJpY3QoXCJzaGlwcGluZ1wiLCBcIlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNoYW5nZSBzaGlwcGluZyBzdWJkaXN0cmljdFxyXG4gICAgZWxzLnNoaXBwaW5nX3N1YmRpc3RyaWN0Lm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZG9rcl9zZXRfc2Vzc2lvbl9zdWJkaXN0cmljdChcInNoaXBwaW5nXCIsICQodGhpcykudmFsKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2hvdyBoaWRlIGJpbGxpbmcgc3ViZGlzdHJpY3RcclxuICAgIGZ1bmN0aW9uIHNkb2tyX2JpbGxpbmdfYWRkcmVzc19maWVsZHMoKSB7XHJcbiAgICAgICAgaWYgKGVscy5iaWxsaW5nX2NvdW50cnkudmFsKCkgPT0gXCJJRFwiKSB7XHJcbiAgICAgICAgICAgIC8vIFNldHVwIHN1YmRpc3RyaWN0XHJcbiAgICAgICAgICAgIGVscy5iaWxsaW5nX3N1YmRpc3RyaWN0X2ZpZWxkXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCJsYWJlbFwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7c2RvbmdraXJfbGN6LnN1YmRpc3RyaWN0X3RleHR9Jm5ic3A7PGFiYnIgY2xhc3M9XCJyZXF1aXJlZFwiIHRpdGxlPVwicmVxdWlyZWRcIj4qPC9hYmJyPmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdF9maWVsZC5mYWRlSW4oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldHVwIGNpdHlcclxuICAgICAgICAgICAgY29uc3QgYmlsbGluZ19jaXR5X3NlbGVjdCA9IGA8c2VsZWN0IG5hbWU9XCJiaWxsaW5nX2NpdHlcIiBpZD1cImJpbGxpbmdfY2l0eVwiIGNsYXNzPVwic2VsZWN0XCIgYXV0b2NvbXBsZXRlPVwiYWRkcmVzcy1sZXZlbDJcIiBkYXRhLXBsYWNlaG9sZGVyPVwiJHtzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0fVwiPjwvc2VsZWN0PmA7XHJcbiAgICAgICAgICAgIGVscy5iaWxsaW5nX2NpdHlfZmllbGRcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihcIi53b29jb21tZXJjZS1pbnB1dC13cmFwcGVyXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChiaWxsaW5nX2NpdHlfc2VsZWN0KTtcclxuICAgICAgICAgICAgJChcIiNiaWxsaW5nX2NpdHlcIikuc2VsZWN0MigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNldHVwIHN1YmRpc3RyaWN0XHJcbiAgICAgICAgICAgIGVscy5iaWxsaW5nX3N1YmRpc3RyaWN0X2ZpZWxkLmZhZGVPdXQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldHVwIGNpdHlcclxuICAgICAgICAgICAgY29uc3QgYmlsbGluZ19jaXR5X2lucHV0ID1cclxuICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LXRleHQgXCIgbmFtZT1cImJpbGxpbmdfY2l0eVwiIGlkPVwiYmlsbGluZ19jaXR5XCIgcGxhY2Vob2xkZXI9XCJcIiB2YWx1ZT1cIlwiIGF1dG9jb21wbGV0ZT1cImFkZHJlc3MtbGV2ZWwyXCI+JztcclxuICAgICAgICAgICAgZWxzLmJpbGxpbmdfY2l0eV9maWVsZFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwiLndvb2NvbW1lcmNlLWlucHV0LXdyYXBwZXJcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKGJpbGxpbmdfY2l0eV9pbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3cgaGlkZSBzaGlwcGluZyBzdWJkaXN0cmljdFxyXG4gICAgZnVuY3Rpb24gc2Rva3Jfc2hpcHBpbmdfYWRkcmVzc19maWVsZHMoKSB7XHJcbiAgICAgICAgaWYgKGVscy5zaGlwcGluZ19jb3VudHJ5LnZhbCgpID09IFwiSURcIikge1xyXG4gICAgICAgICAgICAvLyBTZXR1cCBzdWJkaXN0cmljdFxyXG4gICAgICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3RfZmllbGRcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihcImxhYmVsXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICBgJHtzZG9uZ2tpcl9sY3ouc3ViZGlzdHJpY3RfdGV4dH0mbmJzcDs8YWJiciBjbGFzcz1cInJlcXVpcmVkXCIgdGl0bGU9XCJyZXF1aXJlZFwiPio8L2FiYnI+YCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGVscy5zaGlwcGluZ19zdWJkaXN0cmljdF9maWVsZC5mYWRlSW4oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldHVwIGNpdHlcclxuICAgICAgICAgICAgY29uc3Qgc2hpcHBpbmdfY2l0eV9zZWxlY3QgPSBgPHNlbGVjdCBuYW1lPVwic2hpcHBpbmdfY2l0eVwiIGlkPVwic2hpcHBpbmdfY2l0eVwiIGNsYXNzPVwic2VsZWN0XCIgYXV0b2NvbXBsZXRlPVwiYWRkcmVzcy1sZXZlbDJcIiBkYXRhLXBsYWNlaG9sZGVyPVwiJHtzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0fVwiPjwvc2VsZWN0PmA7XHJcbiAgICAgICAgICAgIGVscy5zaGlwcGluZ19jaXR5X2ZpZWxkXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCIud29vY29tbWVyY2UtaW5wdXQtd3JhcHBlclwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoc2hpcHBpbmdfY2l0eV9zZWxlY3QpO1xyXG4gICAgICAgICAgICAkKFwiI3NoaXBwaW5nX2NpdHlcIikuc2VsZWN0MigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNldHVwIHN1YmRpc3RyaWN0XHJcbiAgICAgICAgICAgIGVscy5zaGlwcGluZ19zdWJkaXN0cmljdF9maWVsZC5mYWRlT3V0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXR1cCBjaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBwaW5nX2NpdHlfaW5wdXQgPVxyXG4gICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQtdGV4dCBcIiBuYW1lPVwic2hpcHBpbmdfY2l0eVwiIGlkPVwic2hpcHBpbmdfY2l0eVwiIHBsYWNlaG9sZGVyPVwiXCIgdmFsdWU9XCJcIiBhdXRvY29tcGxldGU9XCJhZGRyZXNzLWxldmVsMlwiPic7XHJcbiAgICAgICAgICAgIGVscy5zaGlwcGluZ19jaXR5X2ZpZWxkXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCIud29vY29tbWVyY2UtaW5wdXQtd3JhcHBlclwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoc2hpcHBpbmdfY2l0eV9pbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBiaWxsaW5nIGNpdHkgb3B0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2Rva3JfZ2V0X2JpbGxpbmdfY2l0eV9vcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChlbHMuYmlsbGluZ19zdGF0ZS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9jaXRpZXNfYnlfcHJvdmluY2VfaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2VfaWQ6IGVscy5iaWxsaW5nX3N0YXRlLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaXRpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfY2l0eVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLnZhbCgpID09IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuYmlsbGluZ19zdWJkaXN0cmljdC52YWwoKSA9PSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgY2l0eS5jaXR5X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGAke2NpdHkudHlwZX0gJHtjaXR5Lm5hbWV9YCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLmJpbGxpbmdfc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfY2l0eVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVscy5iaWxsaW5nX3N1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc2hpcHBpbmcgY2l0eSBvcHRpb25zXHJcbiAgICBmdW5jdGlvbiBzZG9rcl9nZXRfc2hpcHBpbmdfY2l0eV9vcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChlbHMuc2hpcHBpbmdfc3RhdGUudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiI3NoaXBwaW5nX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9jaXRpZXNfYnlfcHJvdmluY2VfaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2VfaWQ6IGVscy5zaGlwcGluZ19zdGF0ZS52YWwoKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2l0aWVzID0gcmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLnZhbCgpID09IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnNoaXBwaW5nX3N1YmRpc3RyaWN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnNoaXBwaW5nX3N1YmRpc3RyaWN0LnZhbCgpID09IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfY2l0eVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIGNpdHkuY2l0eV9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChgJHtjaXR5LnR5cGV9ICR7Y2l0eS5uYW1lfWApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nX2NpdHlcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHMuc2hpcHBpbmdfc3ViZGlzdHJpY3QuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19jaXR5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzLnNoaXBwaW5nX3N1YmRpc3RyaWN0LmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYmlsbGluZyBzdWJkaXN0cmljdCBvcHRpb25zXHJcbiAgICBmdW5jdGlvbiBzZG9rcl9nZXRfYmlsbGluZ19zdWJkaXN0cmljdF9vcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiI2JpbGxpbmdfY2l0eVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjYmlsbGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfZ2V0X3N1YmRpc3RyaWN0c19ieV9jaXR5X2lkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpdHlfaWQ6ICQoXCIjYmlsbGluZ19jaXR5XCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJkaXN0cmljdHMgPSByZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfc3ViZGlzdHJpY3RcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfc3ViZGlzdHJpY3RcIikudmFsKCkgPT0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViZGlzdHJpY3RzLmZvckVhY2goKHN1YmRpc3RyaWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19zdWJkaXN0cmljdFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2RvbmdraXJfbGN6LnBsZWFzZV9zZWxlY3RfdGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYmlsbGluZ19zdWJkaXN0cmljdFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIHN1YmRpc3RyaWN0LnN1YmRpc3RyaWN0X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHN1YmRpc3RyaWN0Lm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2JpbGxpbmdfc3ViZGlzdHJpY3RcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNiaWxsaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc2hpcHBpbmcgc3ViZGlzdHJpY3Qgb3B0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2Rva3JfZ2V0X3NoaXBwaW5nX3N1YmRpc3RyaWN0X29wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjc2hpcHBpbmdfY2l0eVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX2dldF9zdWJkaXN0cmljdHNfYnlfY2l0eV9pZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBjaXR5X2lkOiAkKFwiI3NoaXBwaW5nX2NpdHlcIikudmFsKCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YmRpc3RyaWN0cyA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2hpcHBpbmdfc3ViZGlzdHJpY3RcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLnZhbCgpID09IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmRpc3RyaWN0cy5mb3JFYWNoKChzdWJkaXN0cmljdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChzZG9uZ2tpcl9sY3oucGxlYXNlX3NlbGVjdF90ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPG9wdGlvbj48L29wdGlvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIHN1YmRpc3RyaWN0LnN1YmRpc3RyaWN0X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHN1YmRpc3RyaWN0Lm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NoaXBwaW5nX3N1YmRpc3RyaWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzaGlwcGluZ19zdWJkaXN0cmljdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHNlc3Npb24gc3ViZGlzdHJpY3RcclxuICAgIGZ1bmN0aW9uIHNkb2tyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0KHR5cGUsIHN1YmRpc3RyaWN0X2lkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX3NldF9zZXNzaW9uX3N1YmRpc3RyaWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmRpc3RyaWN0X2lkOiBzdWJkaXN0cmljdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcImJvZHlcIikudHJpZ2dlcihcInVwZGF0ZV9jaGVja291dFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=