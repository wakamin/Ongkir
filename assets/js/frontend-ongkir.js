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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ "./node_modules/tingle.js/dist/tingle.min.js":
/*!***************************************************!*\
  !*** ./node_modules/tingle.js/dist/tingle.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, o) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  var o = !1;

  function t(t) {
    this.opts = function () {
      for (var t = 1; t < arguments.length; t++) {
        for (var o in arguments[t]) {
          arguments[t].hasOwnProperty(o) && (arguments[0][o] = arguments[t][o]);
        }
      }

      return arguments[0];
    }({}, {
      onClose: null,
      onOpen: null,
      beforeOpen: null,
      beforeClose: null,
      stickyFooter: !1,
      footer: !1,
      cssClass: [],
      closeLabel: "Close",
      closeMethods: ["overlay", "button", "escape"]
    }, t), this.init();
  }

  function e() {
    this.modalBoxFooter && (this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px", this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px");
  }

  return t.prototype.init = function () {
    if (!this.modal) return function () {
      this.modal = document.createElement("div"), this.modal.classList.add("tingle-modal"), 0 !== this.opts.closeMethods.length && -1 !== this.opts.closeMethods.indexOf("overlay") || this.modal.classList.add("tingle-modal--noOverlayClose");
      this.modal.style.display = "none", this.opts.cssClass.forEach(function (t) {
        "string" == typeof t && this.modal.classList.add(t);
      }, this), -1 !== this.opts.closeMethods.indexOf("button") && (this.modalCloseBtn = document.createElement("button"), this.modalCloseBtn.type = "button", this.modalCloseBtn.classList.add("tingle-modal__close"), this.modalCloseBtnIcon = document.createElement("span"), this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"), this.modalCloseBtnIcon.innerHTML = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>', this.modalCloseBtnLabel = document.createElement("span"), this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"), this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel, this.modalCloseBtn.appendChild(this.modalCloseBtnIcon), this.modalCloseBtn.appendChild(this.modalCloseBtnLabel));
      this.modalBox = document.createElement("div"), this.modalBox.classList.add("tingle-modal-box"), this.modalBoxContent = document.createElement("div"), this.modalBoxContent.classList.add("tingle-modal-box__content"), this.modalBox.appendChild(this.modalBoxContent), -1 !== this.opts.closeMethods.indexOf("button") && this.modal.appendChild(this.modalCloseBtn);
      this.modal.appendChild(this.modalBox);
    }.call(this), function () {
      this._events = {
        clickCloseBtn: this.close.bind(this),
        clickOverlay: function (t) {
          var o = this.modal.offsetWidth - this.modal.clientWidth,
              e = t.clientX >= this.modal.offsetWidth - 15,
              s = this.modal.scrollHeight !== this.modal.offsetHeight;
          if ("MacIntel" === navigator.platform && 0 == o && e && s) return;
          -1 !== this.opts.closeMethods.indexOf("overlay") && !function (t, o) {
            for (; (t = t.parentElement) && !t.classList.contains(o);) {
              ;
            }

            return t;
          }(t.target, "tingle-modal") && t.clientX < this.modal.clientWidth && this.close();
        }.bind(this),
        resize: this.checkOverflow.bind(this),
        keyboardNav: function (t) {
          -1 !== this.opts.closeMethods.indexOf("escape") && 27 === t.which && this.isOpen() && this.close();
        }.bind(this)
      }, -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.addEventListener("click", this._events.clickCloseBtn);
      this.modal.addEventListener("mousedown", this._events.clickOverlay), window.addEventListener("resize", this._events.resize), document.addEventListener("keydown", this._events.keyboardNav);
    }.call(this), document.body.appendChild(this.modal, document.body.firstChild), this.opts.footer && this.addFooter(), this;
  }, t.prototype._busy = function (t) {
    o = t;
  }, t.prototype._isBusy = function () {
    return o;
  }, t.prototype.destroy = function () {
    null !== this.modal && (this.isOpen() && this.close(!0), function () {
      -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.removeEventListener("click", this._events.clickCloseBtn);
      this.modal.removeEventListener("mousedown", this._events.clickOverlay), window.removeEventListener("resize", this._events.resize), document.removeEventListener("keydown", this._events.keyboardNav);
    }.call(this), this.modal.parentNode.removeChild(this.modal), this.modal = null);
  }, t.prototype.isOpen = function () {
    return !!this.modal.classList.contains("tingle-modal--visible");
  }, t.prototype.open = function () {
    if (!this._isBusy()) {
      this._busy(!0);

      var t = this;
      return "function" == typeof t.opts.beforeOpen && t.opts.beforeOpen(), this.modal.style.removeProperty ? this.modal.style.removeProperty("display") : this.modal.style.removeAttribute("display"), this._scrollPosition = window.pageYOffset, document.body.classList.add("tingle-enabled"), document.body.style.top = -this._scrollPosition + "px", this.setStickyFooter(this.opts.stickyFooter), this.modal.classList.add("tingle-modal--visible"), "function" == typeof t.opts.onOpen && t.opts.onOpen.call(t), t._busy(!1), this.checkOverflow(), this;
    }
  }, t.prototype.close = function (t) {
    if (!this._isBusy()) {
      if (this._busy(!0), !1, "function" == typeof this.opts.beforeClose) if (!this.opts.beforeClose.call(this)) return void this._busy(!1);
      document.body.classList.remove("tingle-enabled"), document.body.style.top = null, window.scrollTo({
        top: this._scrollPosition,
        behavior: "instant"
      }), this.modal.classList.remove("tingle-modal--visible");
      var o = this;
      o.modal.style.display = "none", "function" == typeof o.opts.onClose && o.opts.onClose.call(this), o._busy(!1);
    }
  }, t.prototype.setContent = function (t) {
    return "string" == typeof t ? this.modalBoxContent.innerHTML = t : (this.modalBoxContent.innerHTML = "", this.modalBoxContent.appendChild(t)), this.isOpen() && this.checkOverflow(), this;
  }, t.prototype.getContent = function () {
    return this.modalBoxContent;
  }, t.prototype.addFooter = function () {
    return function () {
      this.modalBoxFooter = document.createElement("div"), this.modalBoxFooter.classList.add("tingle-modal-box__footer"), this.modalBox.appendChild(this.modalBoxFooter);
    }.call(this), this;
  }, t.prototype.setFooterContent = function (t) {
    return this.modalBoxFooter.innerHTML = t, this;
  }, t.prototype.getFooterContent = function () {
    return this.modalBoxFooter;
  }, t.prototype.setStickyFooter = function (t) {
    return this.isOverflow() || (t = !1), t ? this.modalBox.contains(this.modalBoxFooter) && (this.modalBox.removeChild(this.modalBoxFooter), this.modal.appendChild(this.modalBoxFooter), this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"), e.call(this), this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter.clientHeight + 20 + "px") : this.modalBoxFooter && (this.modalBox.contains(this.modalBoxFooter) || (this.modal.removeChild(this.modalBoxFooter), this.modalBox.appendChild(this.modalBoxFooter), this.modalBoxFooter.style.width = "auto", this.modalBoxFooter.style.left = "", this.modalBoxContent.style["padding-bottom"] = "", this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))), this;
  }, t.prototype.addFooterBtn = function (t, o, e) {
    var s = document.createElement("button");
    return s.innerHTML = t, s.addEventListener("click", e), "string" == typeof o && o.length && o.split(" ").forEach(function (t) {
      s.classList.add(t);
    }), this.modalBoxFooter.appendChild(s), s;
  }, t.prototype.resize = function () {
    console.warn("Resize is deprecated and will be removed in version 1.0");
  }, t.prototype.isOverflow = function () {
    return window.innerHeight <= this.modalBox.clientHeight;
  }, t.prototype.checkOverflow = function () {
    this.modal.classList.contains("tingle-modal--visible") && (this.isOverflow() ? this.modal.classList.add("tingle-modal--overflow") : this.modal.classList.remove("tingle-modal--overflow"), !this.isOverflow() && this.opts.stickyFooter ? this.setStickyFooter(!1) : this.isOverflow() && this.opts.stickyFooter && (e.call(this), this.setStickyFooter(!0)));
  }, {
    modal: t
  };
});

/***/ }),

/***/ "./src/assets/js/frontend-ongkir.js":
/*!******************************************!*\
  !*** ./src/assets/js/frontend-ongkir.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tingle.js */ "./node_modules/tingle.js/dist/tingle.min.js");
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tingle_js__WEBPACK_IMPORTED_MODULE_2__);



jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  "use strict"; // Ongkir form

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-form__tab a").on("click", function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-form__tab").removeClass("sdokr-form__tab--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent(".sdokr-form__tab").addClass("sdokr-form__tab--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-form__content").removeClass("sdokr-form__content--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).addClass("sdokr-form__content--active");
  }); // Select2

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-select2").select2();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-location-select2").select2({
    minimumInputLength: 3,
    ajax: {
      url: sdongkir_lcz.ajaxurl,
      delay: 250,
      dataType: "json",
      cache: true,
      method: "POST",
      data: function data(params) {
        return {
          q: params.term,
          // search query
          action: "ongkir_search_location",
          // AJAX action for admin-ajax.php,
          nonce_ajax: sdongkir_lcz.nonce
        };
      },
      processResults: function processResults(data) {
        return {
          results: data.data.data
        };
      }
    }
  }); // Error modal

  var error_modal = new tingle_js__WEBPACK_IMPORTED_MODULE_2___default.a.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ["overlay", "button", "escape"],
    closeLabel: sdongkir_lcz.close_label
  });
  error_modal.addFooterBtn("Ok", "tingle-btn tingle-btn--primary tingle-btn--pull-right", function () {
    error_modal.close();
  }); // Get shipping cost

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdokr-shipping-cost-form").submit(function (e) {
    e.preventDefault(); // instanciate new modal

    var modal = new tingle_js__WEBPACK_IMPORTED_MODULE_2___default.a.modal({
      footer: true,
      stickyFooter: true,
      closeMethods: ["overlay", "button", "escape"],
      closeLabel: sdongkir_lcz.close_label
    }); // add a button

    modal.addFooterBtn("Ok", "tingle-btn tingle-btn--primary tingle-btn--pull-right", function () {
      modal.close();
    });
    var couriers = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-couriers-cb:checked").each(function () {
      couriers.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("value"));
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: sdongkir_lcz.ajaxurl,
      type: "POST",
      data: {
        action: "ongkir_shipping_cost",
        nonce_ajax: sdongkir_lcz.nonce,
        origin: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdokr-origin").val(),
        dest: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdokr-destination").val(),
        weight: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdokr-weight").val(),
        couriers: couriers
      },
      success: function success(res) {
        console.log(res);
        var html = res.data.data.html; // set content

        modal.setContent(html); // // open modal

        modal.open();
      },
      error: function error(err) {
        console.log(err);
        error_modal.setContent(err.responseJSON.data.message);
        error_modal.open();
      }
    });
  }); // Courier selection type

  var courier_selection_type = "single";
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-selection-type").on("click", function () {
    courier_selection_type = courier_selection_type == "single" ? "multiple" : "single";
    console.log(courier_selection_type);

    if (courier_selection_type == "single") {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-single-courier-selection").removeClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-couriers-wrapper").addClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-select-all").addClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-unselect-all").addClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html(sdongkir_lcz.multiple_selection);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-single-courier-selection").addClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-couriers-wrapper").removeClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-select-all").removeClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-unselect-all").removeClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html(sdongkir_lcz.single_selection);
    }
  }); // Shipping cost

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdokr-shipping-tracking-form").submit(function (e) {
    e.preventDefault(); // instanciate new modal

    var modal = new tingle_js__WEBPACK_IMPORTED_MODULE_2___default.a.modal({
      footer: true,
      stickyFooter: true,
      closeMethods: ["overlay", "button", "escape"],
      closeLabel: sdongkir_lcz.close_label
    }); // set content

    modal.setContent("<h1>Shipping track</h1>"); // add a button

    modal.addFooterBtn("Ok", "tingle-btn tingle-btn--primary tingle-btn--pull-right", function () {
      modal.close();
    }); // open modal

    modal.open();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").on("click", ".sdokr-red", function () {
    alert("test");
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-select-all").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target")).prop("checked", true);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-unselect-all").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target")).prop("checked", false);
  });
});

/***/ }),

/***/ 1:
/*!************************************************!*\
  !*** multi ./src/assets/js/frontend-ongkir.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\wordpress\wp-content\plugins\ongkir\src\assets\js\frontend-ongkir.js */"./src/assets/js/frontend-ongkir.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW5nbGUuanMvZGlzdC90aW5nbGUubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnJvbnRlbmQtb25na2lyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJkZWZpbmUiLCJqUXVlcnkiLCJTMiIsImZuIiwic2VsZWN0MiIsImFtZCIsInJlcXVpcmVqcyIsInJlcXVpcmUiLCJ1bmRlZiIsIm1haW4iLCJyZXEiLCJtYWtlTWFwIiwiaGFuZGxlcnMiLCJkZWZpbmVkIiwid2FpdGluZyIsImNvbmZpZyIsImRlZmluaW5nIiwiaGFzT3duIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJhcHMiLCJzbGljZSIsImpzU3VmZml4UmVnRXhwIiwiaGFzUHJvcCIsIm9iaiIsInByb3AiLCJjYWxsIiwibm9ybWFsaXplIiwibmFtZSIsImJhc2VOYW1lIiwibmFtZVBhcnRzIiwibmFtZVNlZ21lbnQiLCJtYXBWYWx1ZSIsImZvdW5kTWFwIiwibGFzdEluZGV4IiwiZm91bmRJIiwiZm91bmRTdGFyTWFwIiwic3RhckkiLCJpIiwiaiIsInBhcnQiLCJub3JtYWxpemVkQmFzZVBhcnRzIiwiYmFzZVBhcnRzIiwic3BsaXQiLCJtYXAiLCJzdGFyTWFwIiwibGVuZ3RoIiwibm9kZUlkQ29tcGF0IiwidGVzdCIsInJlcGxhY2UiLCJjaGFyQXQiLCJjb25jYXQiLCJzcGxpY2UiLCJqb2luIiwibWFrZVJlcXVpcmUiLCJyZWxOYW1lIiwiZm9yY2VTeW5jIiwiYXJncyIsImFyZ3VtZW50cyIsInB1c2giLCJhcHBseSIsIm1ha2VOb3JtYWxpemUiLCJtYWtlTG9hZCIsImRlcE5hbWUiLCJ2YWx1ZSIsImNhbGxEZXAiLCJFcnJvciIsInNwbGl0UHJlZml4IiwicHJlZml4IiwiaW5kZXgiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwibWFrZVJlbFBhcnRzIiwicmVsUGFydHMiLCJwbHVnaW4iLCJwYXJ0cyIsInJlbFJlc291cmNlTmFtZSIsImYiLCJuIiwicHIiLCJwIiwibWFrZUNvbmZpZyIsImV4cG9ydHMiLCJlIiwibW9kdWxlIiwiaWQiLCJ1cmkiLCJkZXBzIiwiY2FsbGJhY2siLCJjanNNb2R1bGUiLCJyZXQiLCJjYWxsYmFja1R5cGUiLCJ1c2luZ0V4cG9ydHMiLCJsb2FkIiwidW5kZWZpbmVkIiwiYWx0Iiwic2V0VGltZW91dCIsImNmZyIsIl9kZWZpbmVkIiwiXyQiLCIkIiwiY29uc29sZSIsImVycm9yIiwiVXRpbHMiLCJFeHRlbmQiLCJDaGlsZENsYXNzIiwiU3VwZXJDbGFzcyIsIl9faGFzUHJvcCIsIkJhc2VDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwia2V5IiwiX19zdXBlcl9fIiwiZ2V0TWV0aG9kcyIsInRoZUNsYXNzIiwicHJvdG8iLCJtZXRob2RzIiwibWV0aG9kTmFtZSIsIm0iLCJEZWNvcmF0ZSIsIkRlY29yYXRvckNsYXNzIiwiZGVjb3JhdGVkTWV0aG9kcyIsInN1cGVyTWV0aG9kcyIsIkRlY29yYXRlZENsYXNzIiwidW5zaGlmdCIsIkFycmF5IiwiYXJnQ291bnQiLCJjYWxsZWRDb25zdHJ1Y3RvciIsImRpc3BsYXlOYW1lIiwiY3RyIiwic3VwZXJNZXRob2QiLCJjYWxsZWRNZXRob2QiLCJvcmlnaW5hbE1ldGhvZCIsImRlY29yYXRlZE1ldGhvZCIsImQiLCJPYnNlcnZhYmxlIiwibGlzdGVuZXJzIiwib24iLCJldmVudCIsInRyaWdnZXIiLCJwYXJhbXMiLCJfdHlwZSIsImludm9rZSIsImxlbiIsImdlbmVyYXRlQ2hhcnMiLCJjaGFycyIsInJhbmRvbUNoYXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImJpbmQiLCJmdW5jIiwiY29udGV4dCIsIl9jb252ZXJ0RGF0YSIsImRhdGEiLCJvcmlnaW5hbEtleSIsImtleXMiLCJkYXRhTGV2ZWwiLCJrIiwidG9Mb3dlckNhc2UiLCJoYXNTY3JvbGwiLCJlbCIsIiRlbCIsIm92ZXJmbG93WCIsInN0eWxlIiwib3ZlcmZsb3dZIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJpbm5lcldpZHRoIiwic2Nyb2xsV2lkdGgiLCJlc2NhcGVNYXJrdXAiLCJtYXJrdXAiLCJyZXBsYWNlTWFwIiwiU3RyaW5nIiwibWF0Y2giLCJhcHBlbmRNYW55IiwiJGVsZW1lbnQiLCIkbm9kZXMiLCJqcXVlcnkiLCJzdWJzdHIiLCIkanFOb2RlcyIsIm5vZGUiLCJhZGQiLCJhcHBlbmQiLCJfX2NhY2hlIiwiR2V0VW5pcXVlRWxlbWVudElkIiwiZWxlbWVudCIsInNlbGVjdDJJZCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIlN0b3JlRGF0YSIsIkdldERhdGEiLCJSZW1vdmVEYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwiUmVzdWx0cyIsIm9wdGlvbnMiLCJkYXRhQWRhcHRlciIsInJlbmRlciIsIiRyZXN1bHRzIiwiZ2V0IiwiYXR0ciIsImNsZWFyIiwiZW1wdHkiLCJkaXNwbGF5TWVzc2FnZSIsImhpZGVMb2FkaW5nIiwiJG1lc3NhZ2UiLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwiaGlkZU1lc3NhZ2VzIiwiZmluZCIsInJlbW92ZSIsIiRvcHRpb25zIiwicmVzdWx0cyIsImNoaWxkcmVuIiwic29ydCIsIml0ZW0iLCIkb3B0aW9uIiwib3B0aW9uIiwicG9zaXRpb24iLCIkZHJvcGRvd24iLCIkcmVzdWx0c0NvbnRhaW5lciIsInNvcnRlciIsImhpZ2hsaWdodEZpcnN0SXRlbSIsIiRzZWxlY3RlZCIsImZpbHRlciIsImZpcnN0IiwiZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSIsInNldENsYXNzZXMiLCJzZWxmIiwiY3VycmVudCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJZHMiLCJzIiwiZWFjaCIsImluQXJyYXkiLCJzaG93TG9hZGluZyIsImxvYWRpbmdNb3JlIiwibG9hZGluZyIsImRpc2FibGVkIiwidGV4dCIsIiRsb2FkaW5nIiwicHJlcGVuZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJzIiwibWF0Y2hlcyIsIndpbmRvdyIsIkVsZW1lbnQiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIl9yZXN1bHRJZCIsInRpdGxlIiwicm9sZSIsInZhbCIsImxhYmVsIiwiJGxhYmVsIiwidGVtcGxhdGUiLCIkY2hpbGRyZW4iLCJjIiwiY2hpbGQiLCIkY2hpbGQiLCIkY2hpbGRyZW5Db250YWluZXIiLCJjb250YWluZXIiLCIkY29udGFpbmVyIiwiaXNPcGVuIiwicmVtb3ZlQXR0ciIsIiRoaWdobGlnaHRlZCIsImdldEhpZ2hsaWdodGVkUmVzdWx0cyIsImN1cnJlbnRJbmRleCIsIm5leHRJbmRleCIsIiRuZXh0IiwiZXEiLCJjdXJyZW50T2Zmc2V0Iiwib2Zmc2V0IiwidG9wIiwibmV4dFRvcCIsIm5leHRPZmZzZXQiLCJzY3JvbGxUb3AiLCJvdXRlckhlaWdodCIsIm5leHRCb3R0b20iLCJhZGRDbGFzcyIsIm1vdXNld2hlZWwiLCJib3R0b20iLCJkZWx0YVkiLCJpc0F0VG9wIiwiaXNBdEJvdHRvbSIsImhlaWdodCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXZ0IiwiJHRoaXMiLCJvcmlnaW5hbEV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJkZXN0cm95Iiwib2Zmc2V0RGVsdGEiLCJyZXN1bHQiLCJjb250ZW50IiwiZGlzcGxheSIsImlubmVySFRNTCIsIktFWVMiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQyIsIlNQQUNFIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsIkVORCIsIkhPTUUiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJERUxFVEUiLCJCYXNlU2VsZWN0aW9uIiwiJHNlbGVjdGlvbiIsIl90YWJpbmRleCIsInJlc3VsdHNJZCIsIl9oYW5kbGVCbHVyIiwid2hpY2giLCJ1cGRhdGUiLCJfYXR0YWNoQ2xvc2VIYW5kbGVyIiwiX2RldGFjaENsb3NlSGFuZGxlciIsImFjdGl2ZUVsZW1lbnQiLCJjb250YWlucyIsImJvZHkiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiJHNlbGVjdCIsImNsb3Nlc3QiLCIkYWxsIiwib2ZmIiwiJHNlbGVjdGlvbkNvbnRhaW5lciIsImlzRW5hYmxlZCIsImlzRGlzYWJsZWQiLCJTaW5nbGVTZWxlY3Rpb24iLCJodG1sIiwiJHJlbmRlcmVkIiwic2VsZWN0aW9uQ29udGFpbmVyIiwic2VsZWN0aW9uIiwiZm9ybWF0dGVkIiwiTXVsdGlwbGVTZWxlY3Rpb24iLCIkcmVtb3ZlIiwicGFyZW50IiwiJHNlbGVjdGlvbnMiLCJQbGFjZWhvbGRlciIsImRlY29yYXRlZCIsInBsYWNlaG9sZGVyIiwibm9ybWFsaXplUGxhY2Vob2xkZXIiLCJfIiwiY3JlYXRlUGxhY2Vob2xkZXIiLCIkcGxhY2Vob2xkZXIiLCJzaW5nbGVQbGFjZWhvbGRlciIsIm11bHRpcGxlU2VsZWN0aW9ucyIsIkFsbG93Q2xlYXIiLCJfaGFuZGxlQ2xlYXIiLCJfaGFuZGxlS2V5Ym9hcmRDbGVhciIsIiRjbGVhciIsInByZXZpb3VzVmFsIiwidW5zZWxlY3REYXRhIiwicHJldmVudGVkIiwicmVtb3ZlQWxsIiwiU2VhcmNoIiwiJHNlYXJjaCIsIiRzZWFyY2hDb250YWluZXIiLCJfdHJhbnNmZXJUYWJJbmRleCIsIl9rZXlVcFByZXZlbnRlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIiRwcmV2aW91c0Nob2ljZSIsInByZXYiLCJzZWFyY2hSZW1vdmVDaG9pY2UiLCJtc2llIiwiZG9jdW1lbnRNb2RlIiwiZGlzYWJsZUlucHV0RXZlbnRzIiwidHlwZSIsImhhbmRsZVNlYXJjaCIsInNlYXJjaEhhZEZvY3VzIiwicmVzaXplU2VhcmNoIiwiaW5wdXQiLCJ0ZXJtIiwiY3NzIiwid2lkdGgiLCJtaW5pbXVtV2lkdGgiLCJFdmVudFJlbGF5IiwicmVsYXlFdmVudHMiLCJwcmV2ZW50YWJsZUV2ZW50cyIsIkV2ZW50IiwiVHJhbnNsYXRpb24iLCJkaWN0IiwiYWxsIiwiZXh0ZW5kIiwidHJhbnNsYXRpb24iLCJfY2FjaGUiLCJsb2FkUGF0aCIsInBhdGgiLCJ0cmFuc2xhdGlvbnMiLCJkaWFjcml0aWNzIiwiQmFzZUFkYXB0ZXIiLCJxdWVyeSIsImdlbmVyYXRlUmVzdWx0SWQiLCJTZWxlY3RBZGFwdGVyIiwic2VsZWN0IiwiaXMiLCJjdXJyZW50RGF0YSIsInVuc2VsZWN0IiwiYWRkT3B0aW9ucyIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0Iiwibm9ybWFsaXplZERhdGEiLCJfbm9ybWFsaXplSXRlbSIsImRlZmF1bHRzIiwibWF0Y2hlciIsIkFycmF5QWRhcHRlciIsIl9kYXRhVG9Db252ZXJ0IiwiY29udmVydFRvT3B0aW9ucyIsImVsbSIsIiRleGlzdGluZyIsImV4aXN0aW5nSWRzIiwib25seUl0ZW0iLCIkZXhpc3RpbmdPcHRpb24iLCJleGlzdGluZ0RhdGEiLCJuZXdEYXRhIiwiJG5ld09wdGlvbiIsInJlcGxhY2VXaXRoIiwiQWpheEFkYXB0ZXIiLCJhamF4T3B0aW9ucyIsIl9hcHBseURlZmF1bHRzIiwicHJvY2Vzc1Jlc3VsdHMiLCJxIiwidHJhbnNwb3J0Iiwic3VjY2VzcyIsImZhaWx1cmUiLCIkcmVxdWVzdCIsImFqYXgiLCJ0aGVuIiwiZmFpbCIsIl9yZXF1ZXN0IiwiaXNGdW5jdGlvbiIsImFib3J0IiwidXJsIiwicmVxdWVzdCIsImlzQXJyYXkiLCJzdGF0dXMiLCJkZWxheSIsIl9xdWVyeVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJUYWdzIiwidGFncyIsImNyZWF0ZVRhZyIsImluc2VydFRhZyIsInQiLCJ0YWciLCJfcmVtb3ZlT2xkVGFncyIsInBhZ2UiLCJ3cmFwcGVyIiwiY2hlY2tDaGlsZHJlbiIsIm9wdGlvblRleHQiLCJ0b1VwcGVyQ2FzZSIsInBhcmFtc1Rlcm0iLCJjaGVja1RleHQiLCJ0cmltIiwiVG9rZW5pemVyIiwidG9rZW5pemVyIiwiZHJvcGRvd24iLCJjcmVhdGVBbmRTZWxlY3QiLCIkZXhpc3RpbmdPcHRpb25zIiwidG9rZW5EYXRhIiwic2VwYXJhdG9ycyIsInRlcm1DaGFyIiwicGFydFBhcmFtcyIsIk1pbmltdW1JbnB1dExlbmd0aCIsIiRlIiwibWluaW11bUlucHV0TGVuZ3RoIiwibWluaW11bSIsIk1heGltdW1JbnB1dExlbmd0aCIsIm1heGltdW1JbnB1dExlbmd0aCIsIm1heGltdW0iLCJNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoIiwibWF4aW11bVNlbGVjdGlvbkxlbmd0aCIsIl9jaGVja0lmTWF4aW11bVNlbGVjdGVkIiwic3VjY2Vzc0NhbGxiYWNrIiwiY291bnQiLCJEcm9wZG93biIsInNob3dTZWFyY2giLCJIaWRlUGxhY2Vob2xkZXIiLCJyZW1vdmVQbGFjZWhvbGRlciIsIm1vZGlmaWVkRGF0YSIsIkluZmluaXRlU2Nyb2xsIiwibGFzdFBhcmFtcyIsIiRsb2FkaW5nTW9yZSIsImNyZWF0ZUxvYWRpbmdNb3JlIiwic2hvd0xvYWRpbmdNb3JlIiwibG9hZE1vcmVJZk5lZWRlZCIsImlzTG9hZE1vcmVWaXNpYmxlIiwiZG9jdW1lbnRFbGVtZW50IiwibG9hZGluZ01vcmVPZmZzZXQiLCJsb2FkTW9yZSIsInBhZ2luYXRpb24iLCJtb3JlIiwiQXR0YWNoQm9keSIsIiRkcm9wZG93blBhcmVudCIsIl9zaG93RHJvcGRvd24iLCJfYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyIiwiX2JpbmRDb250YWluZXJSZXN1bHRIYW5kbGVycyIsIl9oaWRlRHJvcGRvd24iLCJfZGV0YWNoUG9zaXRpb25pbmdIYW5kbGVyIiwiJGRyb3Bkb3duQ29udGFpbmVyIiwiZGV0YWNoIiwiX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kIiwiX3Bvc2l0aW9uRHJvcGRvd24iLCJfcmVzaXplRHJvcGRvd24iLCJzY3JvbGxFdmVudCIsInJlc2l6ZUV2ZW50Iiwib3JpZW50YXRpb25FdmVudCIsIiR3YXRjaGVycyIsInBhcmVudHMiLCJ4Iiwic2Nyb2xsTGVmdCIsInkiLCJldiIsIiR3aW5kb3ciLCJpc0N1cnJlbnRseUFib3ZlIiwiaGFzQ2xhc3MiLCJpc0N1cnJlbnRseUJlbG93IiwibmV3RGlyZWN0aW9uIiwidmlld3BvcnQiLCJlbm91Z2hSb29tQWJvdmUiLCJlbm91Z2hSb29tQmVsb3ciLCJsZWZ0IiwiJG9mZnNldFBhcmVudCIsIm9mZnNldFBhcmVudCIsInBhcmVudE9mZnNldCIsImlzQ29ubmVjdGVkIiwib3V0ZXJXaWR0aCIsIm1pbldpZHRoIiwiYXBwZW5kVG8iLCJjb3VudFJlc3VsdHMiLCJNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiSW5maW5pdHkiLCJTZWxlY3RPbkNsb3NlIiwiX2hhbmRsZVNlbGVjdE9uQ2xvc2UiLCJvcmlnaW5hbFNlbGVjdDJFdmVudCIsIiRoaWdobGlnaHRlZFJlc3VsdHMiLCJDbG9zZU9uU2VsZWN0IiwiX3NlbGVjdFRyaWdnZXJlZCIsImN0cmxLZXkiLCJtZXRhS2V5IiwiZXJyb3JMb2FkaW5nIiwiaW5wdXRUb29Mb25nIiwib3ZlckNoYXJzIiwiaW5wdXRUb29TaG9ydCIsInJlbWFpbmluZ0NoYXJzIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwicmVtb3ZlQWxsSXRlbXMiLCJSZXN1bHRzTGlzdCIsIlNlbGVjdGlvblNlYXJjaCIsIkRJQUNSSVRJQ1MiLCJTZWxlY3REYXRhIiwiQXJyYXlEYXRhIiwiQWpheERhdGEiLCJEcm9wZG93blNlYXJjaCIsIkVuZ2xpc2hUcmFuc2xhdGlvbiIsIkRlZmF1bHRzIiwicmVzZXQiLCJ0b2tlblNlcGFyYXRvcnMiLCJRdWVyeSIsImFtZEJhc2UiLCJpbml0U2VsZWN0aW9uIiwiSW5pdFNlbGVjdGlvbiIsInJlc3VsdHNBZGFwdGVyIiwic2VsZWN0T25DbG9zZSIsImRyb3Bkb3duQWRhcHRlciIsIm11bHRpcGxlIiwiU2VhcmNoYWJsZURyb3Bkb3duIiwiY2xvc2VPblNlbGVjdCIsImRyb3Bkb3duQ3NzQ2xhc3MiLCJkcm9wZG93bkNzcyIsImFkYXB0RHJvcGRvd25Dc3NDbGFzcyIsIkRyb3Bkb3duQ1NTIiwic2VsZWN0aW9uQWRhcHRlciIsImFsbG93Q2xlYXIiLCJjb250YWluZXJDc3NDbGFzcyIsImNvbnRhaW5lckNzcyIsImFkYXB0Q29udGFpbmVyQ3NzQ2xhc3MiLCJDb250YWluZXJDU1MiLCJsYW5ndWFnZSIsIl9yZXNvbHZlTGFuZ3VhZ2UiLCJ1bmlxdWVMYW5ndWFnZXMiLCJsIiwiX3Byb2Nlc3NUcmFuc2xhdGlvbnMiLCJkZWJ1ZyIsInN0cmlwRGlhY3JpdGljcyIsImEiLCJvcmlnaW5hbCIsImFtZExhbmd1YWdlQmFzZSIsImRyb3Bkb3duQXV0b1dpZHRoIiwic2Nyb2xsQWZ0ZXJTZWxlY3QiLCJ0ZW1wbGF0ZVJlc3VsdCIsInRlbXBsYXRlU2VsZWN0aW9uIiwidGhlbWUiLCJhcHBseUZyb21FbGVtZW50Iiwib3B0aW9uTGFuZ3VhZ2UiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJlbGVtZW50TGFuZ3VhZ2UiLCJwYXJlbnRMYW5ndWFnZSIsImxhbmd1YWdlcyIsImlzRW1wdHlPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwicmVzb2x2ZWRMYW5ndWFnZXMiLCJsYW5ndWFnZVBhcnRzIiwiYmFzZUxhbmd1YWdlIiwibGFuZ3VhZ2VEYXRhIiwiZXgiLCJ3YXJuIiwic2V0IiwiY2FtZWxLZXkiLCJjYW1lbENhc2UiLCJjb252ZXJ0ZWREYXRhIiwiT3B0aW9ucyIsImZyb21FbGVtZW50IiwiSW5wdXRDb21wYXQiLCJleGNsdWRlZERhdGEiLCJkaXIiLCJkYXRhc2V0IiwidXBwZXJDYXNlTGV0dGVyIiwibGV0dGVyIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZU5hbWUiLCJkYXRhTmFtZSIsImRhdGFWYWx1ZSIsImNhbWVsRGF0YU5hbWUiLCJTZWxlY3QyIiwiX2dlbmVyYXRlSWQiLCJ0YWJpbmRleCIsIkRhdGFBZGFwdGVyIiwiX3BsYWNlQ29udGFpbmVyIiwiU2VsZWN0aW9uQWRhcHRlciIsIkRyb3Bkb3duQWRhcHRlciIsIlJlc3VsdHNBZGFwdGVyIiwiX2JpbmRBZGFwdGVycyIsIl9yZWdpc3RlckRvbUV2ZW50cyIsIl9yZWdpc3RlckRhdGFFdmVudHMiLCJfcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMiLCJfcmVnaXN0ZXJEcm9wZG93bkV2ZW50cyIsIl9yZWdpc3RlclJlc3VsdHNFdmVudHMiLCJfcmVnaXN0ZXJFdmVudHMiLCJpbml0aWFsRGF0YSIsIl9zeW5jQXR0cmlidXRlcyIsImluc2VydEFmdGVyIiwiX3Jlc29sdmVXaWR0aCIsIm1ldGhvZCIsIldJRFRIIiwic3R5bGVXaWR0aCIsImVsZW1lbnRXaWR0aCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiX3N5bmNBIiwiX3N5bmNTIiwiX3N5bmNTdWJ0cmVlIiwiYXR0YWNoRXZlbnQiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiTW96TXV0YXRpb25PYnNlcnZlciIsIl9vYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vblJlbGF5RXZlbnRzIiwidG9nZ2xlRHJvcGRvd24iLCJmb2N1cyIsImFsdEtleSIsImNsb3NlIiwib3BlbiIsIl9pc0NoYW5nZU11dGF0aW9uIiwiY2hhbmdlZCIsIm5vZGVOYW1lIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsIm11dGF0aW9uIiwiYWN0dWFsVHJpZ2dlciIsInByZVRyaWdnZXJNYXAiLCJwcmVUcmlnZ2VyTmFtZSIsInByZVRyaWdnZXJBcmdzIiwiaGFzRm9jdXMiLCJlbmFibGUiLCJuZXdWYWwiLCJkZXRhY2hFdmVudCIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlRGF0YSIsInRoaXNNZXRob2RzIiwiaW5zdGFuY2VPcHRpb25zIiwiaW5zdGFuY2UiLCJvIiwib3B0cyIsIm9uQ2xvc2UiLCJvbk9wZW4iLCJiZWZvcmVPcGVuIiwiYmVmb3JlQ2xvc2UiLCJzdGlja3lGb290ZXIiLCJmb290ZXIiLCJjc3NDbGFzcyIsImNsb3NlTGFiZWwiLCJjbG9zZU1ldGhvZHMiLCJpbml0IiwibW9kYWxCb3hGb290ZXIiLCJtb2RhbEJveCIsImNsaWVudFdpZHRoIiwib2Zmc2V0TGVmdCIsIm1vZGFsIiwiY2xhc3NMaXN0IiwiZm9yRWFjaCIsIm1vZGFsQ2xvc2VCdG4iLCJtb2RhbENsb3NlQnRuSWNvbiIsIm1vZGFsQ2xvc2VCdG5MYWJlbCIsImFwcGVuZENoaWxkIiwibW9kYWxCb3hDb250ZW50IiwiX2V2ZW50cyIsImNsaWNrQ2xvc2VCdG4iLCJjbGlja092ZXJsYXkiLCJvZmZzZXRXaWR0aCIsImNsaWVudFgiLCJvZmZzZXRIZWlnaHQiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInBhcmVudEVsZW1lbnQiLCJyZXNpemUiLCJjaGVja092ZXJmbG93Iiwia2V5Ym9hcmROYXYiLCJmaXJzdENoaWxkIiwiYWRkRm9vdGVyIiwiX2J1c3kiLCJfaXNCdXN5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlUHJvcGVydHkiLCJfc2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsInNldFN0aWNreUZvb3RlciIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJzZXRDb250ZW50IiwiZ2V0Q29udGVudCIsInNldEZvb3RlckNvbnRlbnQiLCJnZXRGb290ZXJDb250ZW50IiwiaXNPdmVyZmxvdyIsImNsaWVudEhlaWdodCIsImFkZEZvb3RlckJ0biIsInJlYWR5Iiwic2RvbmdraXJfbGN6IiwiYWpheHVybCIsImRhdGFUeXBlIiwiY2FjaGUiLCJhY3Rpb24iLCJub25jZV9hamF4Iiwibm9uY2UiLCJlcnJvcl9tb2RhbCIsInRpbmdsZSIsImNsb3NlX2xhYmVsIiwic3VibWl0IiwiY291cmllcnMiLCJvcmlnaW4iLCJkZXN0Iiwid2VpZ2h0IiwicmVzIiwibG9nIiwiZXJyIiwicmVzcG9uc2VKU09OIiwiY291cmllcl9zZWxlY3Rpb25fdHlwZSIsIm11bHRpcGxlX3NlbGVjdGlvbiIsInNpbmdsZV9zZWxlY3Rpb24iLCJhbGVydCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7QUFPQTs7QUFBRSxXQUFVQSxPQUFWLEVBQW1CO0FBQ25CLE1BQUksSUFBSixFQUFnRDtBQUM5QztBQUNBQyxxQ0FBTyxDQUFDLDJDQUFELENBQUQsb0NBQWFELE9BQWI7QUFBQTtBQUFBO0FBQUEsb0dBQU47QUFDRCxHQUhELE1BR08sRUFxQk47QUFDRixDQTFCQyxFQTBCQyxVQUFVRSxNQUFWLEVBQWtCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE1BQUlDLEVBQUUsR0FBRyxZQUFZO0FBQ3JCO0FBQ0E7QUFDQSxRQUFJRCxNQUFNLElBQUlBLE1BQU0s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QUFVLEdBekJLO0FBMEJmLGtCQUFVLEdBMUJLO0FBMkJmLGtCQUFVLEdBM0JLO0FBNEJmLGtCQUFVLEdBNUJLO0FBNkJmLGtCQUFVLEdBN0JLO0FBOEJmLGtCQUFVLEdBOUJLO0FBK0JmLGtCQUFVLEdBL0JLO0FBZ0NmLGtCQUFVLEdBaENLO0FBaUNmLGtCQUFVLEdBakNLO0FBa0NmLGtCQUFVLElBbENLO0FBbUNmLGdCQUFVLElBbkNLO0FBb0NmLGtCQUFVLElBcENLO0FBcUNmLGtCQUFVLElBckNLO0FBc0NmLGtCQUFVLElBdENLO0FBdUNmLGtCQUFVLElBdkNLO0FBd0NmLGtCQUFVLElBeENLO0FBeUNmLGtCQUFVLElBekNLO0FBMENmLGtCQUFVLElBMUNLO0FBMkNmLGtCQUFVLEdBM0NLO0FBNENmLGtCQUFVLEdBNUNLO0FBNkNmLGtCQUFVLEdBN0NLO0FBOENmLGtCQUFVLEdBOUNLO0FBK0NmLGtCQUFVLEdBL0NLO0FBZ0RmLGtCQUFVLEdBaERLO0FBaURmLGtCQUFVLEdBakRLO0FBa0RmLGtCQUFVLEdBbERLO0FBbURmLGtCQUFVLEdBbkRLO0FBb0RmLGtCQUFVLEdBcERLO0FBcURmLGtCQUFVLEdBckRLO0FBc0RmLGtCQUFVLEdBdERLO0FBdURmLGtCQUFVLEdBdkRLO0FBd0RmLGtCQUFVLEdBeERLO0FBeURmLGdCQUFVLEdBekRLO0FBMERmLGtCQUFVLEdBMURLO0FBMkRmLGtCQUFVLEdBM0RLO0FBNERmLGtCQUFVLEdBNURLO0FBNkRmLGtCQUFVLEdBN0RLO0FBOERmLGtCQUFVLEdBOURLO0FBK0RmLGtCQUFVLEdBL0RLO0FBZ0VmLGtCQUFVLEdBaEVLO0FBaUVmLGtCQUFVLEdBakVLO0FBa0VmLGtCQUFVLEdBbEVLO0FBbUVmLGtCQUFVLEdBbkVLO0FBb0VmLGtCQUFVLEdBcEVLO0FBcUVmLGtCQUFVLEdBckVLO0FBc0VmLGtCQUFVLEdBdEVLO0FBdUVmLGtCQUFVLEdBdkVLO0FBd0VmLGtCQUFVLEdBeEVLO0FBeUVmLGtCQUFVLEdBekVLO0FBMEVmLGtCQUFVLEdBMUVLO0FBMkVmLGtCQUFVLElBM0VLO0FBNEVmLGtCQUFVLElBNUVLO0FBNkVmLGtCQUFVLElBN0VLO0FBOEVmLGtCQUFVLElBOUVLO0FBK0VmLGtCQUFVLEdBL0VLO0FBZ0ZmLGtCQUFVLEdBaEZLO0FBaUZmLGdCQUFVLEdBakZLO0FBa0ZmLGdCQUFVLEdBbEZLO0FBbUZmLGdCQUFVLEdBbkZLO0FBb0ZmLGtCQUFVLEdBcEZLO0FBcUZmLGtCQUFVLEdBckZLO0FBc0ZmLGtCQUFVLEdBdEZLO0FBdUZmLGtCQUFVLEdBdkZLO0FBd0ZmLGtCQUFVLEdBeEZLO0FBeUZmLGtCQUFVLEdBekZLO0FBMEZmLGtCQUFVLEdBMUZLO0FBMkZmLGtCQUFVLEdBM0ZLO0FBNEZmLGtCQUFVLEdBNUZLO0FBNkZmLGtCQUFVLEdBN0ZLO0FBOEZmLGdCQUFVLEdBOUZLO0FBK0ZmLGtCQUFVLEdBL0ZLO0FBZ0dmLGtCQUFVLEdBaEdLO0FBaUdmLGtCQUFVLEdBakdLO0FBa0dmLGtCQUFVLEdBbEdLO0FBbUdmLGtCQUFVLEdBbkdLO0FBb0dmLGtCQUFVLEdBcEdLO0FBcUdmLGtCQUFVLEdBckdLO0FBc0dmLGtCQUFVLEdBdEdLO0FBdUdmLGtCQUFVLEdBdkdLO0FBd0dmLGtCQUFVLEdBeEdLO0FBeUdmLGtCQUFVLEdBekdLO0FBMEdmLGtCQUFVLEdBMUdLO0FBMkdmLGtCQUFVLEdBM0dLO0FBNEdmLGtCQUFVLEdBNUdLO0FBNkdmLGtCQUFVLEdBN0dLO0FBOEdmLGtCQUFVLEdBOUdLO0FBK0dmLGtCQUFVLEdBL0dLO0FBZ0hmLGtCQUFVLEdBaEhLO0FBaUhmLGtCQUFVLEdBakhLO0FBa0hmLGtCQUFVLEdBbEhLO0FBbUhmLGtCQUFVLEdBbkhLO0FBb0hmLGtCQUFVLEdBcEhLO0FBcUhmLGtCQUFVLEdBckhLO0FBc0hmLGtCQUFVLEdBdEhLO0FBdUhmLGtCQUFVLEdBdkhLO0FBd0hmLGtCQUFVLEdBeEhLO0FBeUhmLGtCQUFVLEdBekhLO0FBMEhmLGtCQUFVLEdBMUhLO0FBMkhmLGtCQUFVLEdBM0hLO0FBNEhmLGtCQUFVLEdBNUhLO0FBNkhmLGtCQUFVLEdBN0hLO0FBOEhmLGtCQUFVLEdBOUhLO0FBK0hmLGtCQUFVLEdBL0hLO0FBZ0lmLGtCQUFVLEdBaElLO0FBaUlmLGtCQUFVLEdBaklLO0FBa0lmLGtCQUFVLEdBbElLO0FBbUlmLGtCQUFVLEdBbklLO0FBb0lmLGtCQUFVLEdBcElLO0FBcUlmLGtCQUFVLEdBcklLO0FBc0lmLGtCQUFVLEdBdElLO0FBdUlmLGtCQUFVLEdBdklLO0FBd0lmLGtCQUFVLEdBeElLO0FBeUlmLGtCQUFVLEdBeklLO0FBMElmLGtCQUFVLEdBMUlLO0FBMklmLGtCQUFVLEdBM0lLO0FBNElmLGtCQUFVLEdBNUlLO0FBNklmLGtCQUFVLEdBN0lLO0FBOElmLGdCQUFVLEdBOUlLO0FBK0lmLGdCQUFVLEdBL0lLO0FBZ0pmLGdCQUFVLEdBaEpLO0FBaUpmLGtCQUFVLEdBakpLO0FBa0pmLGtCQUFVLEdBbEpLO0FBbUpmLGtCQUFVLEdBbkpLO0FBb0pmLGtCQUFVLEdBcEpLO0FBcUpmLGdCQUFVLEdBckpLO0FBc0pmLGtCQUFVLEdBdEpLO0FBdUpmLGtCQUFVLEdBdkpLO0FBd0pmLGtCQUFVLEdBeEpLO0FBeUpmLGtCQUFVLEdBekpLO0FBMEpmLGtCQUFVLEdBMUpLO0FBMkpmLGtCQUFVLEdBM0pLO0FBNEpmLGtCQUFVLEdBNUpLO0FBNkpmLGtCQUFVLEdBN0pLO0FBOEpmLGtCQUFVLEdBOUpLO0FBK0pmLGtCQUFVLEdBL0pLO0FBZ0tmLGtCQUFVLEdBaEtLO0FBaUtmLGtCQUFVLEdBaktLO0FBa0tmLGtCQUFVLEdBbEtLO0FBbUtmLGtCQUFVLEdBbktLO0FBb0tmLGtCQUFVLEdBcEtLO0FBcUtmLGtCQUFVLEdBcktLO0FBc0tmLGtCQUFVLEdBdEtLO0FBdUtmLGtCQUFVLEdBdktLO0FBd0tmLGtCQUFVLEdBeEtLO0FBeUtmLGtCQUFVLEdBektLO0FBMEtmLGtCQUFVLEdBMUtLO0FBMktmLGtCQUFVLEdBM0tLO0FBNEtmLGtCQUFVLEdBNUtLO0FBNktmLGtCQUFVLEdBN0tLO0FBOEtmLGtCQUFVLEdBOUtLO0FBK0tmLGtCQUFVLEdBL0tLO0FBZ0xmLGtCQUFVLEdBaExLO0FBaUxmLGtCQUFVLEdBakxLO0FBa0xmLGtCQUFVLEdBbExLO0FBbUxmLGtCQUFVLEdBbkxLO0FBb0xmLGtCQUFVLEdBcExLO0FBcUxmLGtCQUFVLEdBckxLO0FBc0xmLGtCQUFVLEdBdExLO0FBdUxmLGtCQUFVLEdBdkxLO0FBd0xmLGtCQUFVLEdBeExLO0FBeUxmLGtCQUFVLEdBekxLO0FBMExmLGtCQUFVLEdBMUxLO0FBMkxmLGtCQUFVLEdBM0xLO0FBNExmLGtCQUFVLEdBNUxLO0FBNkxmLGtCQUFVLEdBN0xLO0FBOExmLGtCQUFVLEdBOUxLO0FBK0xmLGtCQUFVLEdBL0xLO0FBZ01mLGtCQUFVLEdBaE1LO0FBaU1mLGtCQUFVLElBak1LO0FBa01mLGtCQUFVLElBbE1LO0FBbU1mLGtCQUFVLEdBbk1LO0FBb01mLGtCQUFVLEdBcE1LO0FBcU1mLGtCQUFVLEdBck1LO0FBc01mLGtCQUFVLEdBdE1LO0FBdU1mLGtCQUFVLEdBdk1LO0FBd01mLGtCQUFVLEdBeE1LO0FBeU1mLGtCQUFVLEdBek1LO0FBME1mLGtCQUFVLEdBMU1LO0FBMk1mLGtCQUFVLEdBM01LO0FBNE1mLGtCQUFVLEdBNU1LO0FBNk1mLGtCQUFVLEdBN01LO0FBOE1mLGdCQUFVLEdBOU1LO0FBK01mLGtCQUFVLEdBL01LO0FBZ05mLGtCQUFVLEdBaE5LO0FBaU5mLGtCQUFVLEdBak5LO0FBa05mLGtCQUFVLEdBbE5LO0FBbU5mLGtCQUFVLEdBbk5LO0FBb05mLGtCQUFVLEdBcE5LO0FBcU5mLGtCQUFVLEdBck5LO0FBc05mLGtCQUFVLEdBdE5LO0FBdU5mLGtCQUFVLEdBdk5LO0FBd05mLGtCQUFVLEdBeE5LO0FBeU5mLGtCQUFVLElBek5LO0FBME5mLGtCQUFVLElBMU5LO0FBMk5mLGtCQUFVLEdBM05LO0FBNE5mLGtCQUFVLEdBNU5LO0FBNk5mLGdCQUFVLEdBN05LO0FBOE5mLGdCQUFVLEdBOU5LO0FBK05mLGdCQUFVLEdBL05LO0FBZ09mLGtCQUFVLEdBaE9LO0FBaU9mLGtCQUFVLEdBak9LO0FBa09mLGtCQUFVLEdBbE9LO0FBbU9mLGtCQUFVLEdBbk9LO0FBb09mLGdCQUFVLEdBcE9LO0FBcU9mLGtCQUFVLEdBck9LO0FBc09mLGtCQUFVLEdBdE9LO0FBdU9mLGtCQUFVLEdBdk9LO0FBd09mLGtCQUFVLEdBeE9LO0FBeU9mLGtCQUFVLEdBek9LO0FBME9mLGtCQUFVLEdBMU9LO0FBMk9mLGtCQUFVLEdBM09LO0FBNE9mLGtCQUFVLEdBNU9LO0FBNk9mLGtCQUFVLEdBN09LO0FBOE9mLGdCQUFVLEdBOU9LO0FBK09mLGtCQUFVLEdBL09LO0FBZ1BmLGtCQUFVLEdBaFBLO0FBaVBmLGtCQUFVLEdBalBLO0FBa1BmLGtCQUFVLEdBbFBLO0FBbVBmLGtCQUFVLEdBblBLO0FBb1BmLGtCQUFVLEdBcFBLO0FBcVBmLGtCQUFVLEdBclBLO0FBc1BmLGtCQUFVLEdBdFBLO0FBdVBmLGtCQUFVLEdBdlBLO0FBd1BmLGtCQUFVLEdBeFBLO0FBeVBmLGtCQUFVLEdBelBLO0FBMFBmLGtCQUFVLEdBMVBLO0FBMlBmLGtCQUFVLEdBM1BLO0FBNFBmLGtCQUFVLEdBNVBLO0FBNlBmLGtCQUFVLEdBN1BLO0FBOFBmLGtCQUFVLEdBOVBLO0FBK1BmLGdCQUFVLEdBL1BLO0FBZ1FmLGtCQUFVLEdBaFFLO0FBaVFmLGtCQUFVLEdBalFLO0FBa1FmLGtCQUFVLEdBbFFLO0FBbVFmLGtCQUFVLEdBblFLO0FBb1FmLGtCQUFVLEdBcFFLO0FBcVFmLGtCQUFVLElBclFLO0FBc1FmLGtCQUFVLElBdFFLO0FBdVFmLGtCQUFVLElBdlFLO0FBd1FmLGtCQUFVLElBeFFLO0FBeVFmLGtCQUFVLEdBelFLO0FBMFFmLGtCQUFVLEdBMVFLO0FBMlFmLGtCQUFVLEdBM1FLO0FBNFFmLGtCQUFVLEdBNVFLO0FBNlFmLGtCQUFVLEdBN1FLO0FBOFFmLGtCQUFVLEdBOVFLO0FBK1FmLGtCQUFVLEdBL1FLO0FBZ1JmLGtCQUFVLEdBaFJLO0FBaVJmLGtCQUFVLEdBalJLO0FBa1JmLGtCQUFVLEdBbFJLO0FBbVJmLGtCQUFVLEdBblJLO0FBb1JmLGtCQUFVLEdBcFJLO0FBcVJmLGtCQUFVLEdBclJLO0FBc1JmLGtCQUFVLEdBdFJLO0FBdVJmLGtCQUFVLEdBdlJLO0FBd1JmLGtCQUFVLEdBeFJLO0FBeVJmLGtCQUFVLEdBelJLO0FBMFJmLGtCQUFVLEdBMVJLO0FBMlJmLGtCQUFVLEdBM1JLO0FBNFJmLGtCQUFVLEdBNVJLO0FBNlJmLGtCQUFVLEdBN1JLO0FBOFJmLGtCQUFVLEdBOVJLO0FBK1JmLGtCQUFVLEdBL1JLO0FBZ1NmLGtCQUFVLEdBaFNLO0FBaVNmLGtCQUFVLEdBalNLO0FBa1NmLGtCQUFVLEdBbFNLO0FBbVNmLGtCQUFVLEdBblNLO0FBb1NmLGtCQUFVLEdBcFNLO0FBcVNmLGtCQUFVLEdBclNLO0FBc1NmLGtCQUFVLEdBdFNLO0FBdVNmLGtCQUFVLEdBdlNLO0FBd1NmLGtCQUFVLEdBeFNLO0FBeVNmLGtCQUFVLEdBelNLO0FBMFNmLGtCQUFVLEdBMVNLO0FBMlNmLGtCQUFVLEdBM1NLO0FBNFNmLGtCQUFVLEdBNVNLO0FBNlNmLGtCQUFVLEdBN1NLO0FBOFNmLGtCQUFVLEdBOVNLO0FBK1NmLGtCQUFVLEdBL1NLO0FBZ1RmLGtCQUFVLEdBaFRLO0FBaVRmLGtCQUFVLEdBalRLO0FBa1RmLGtCQUFVLEdBbFRLO0FBbVRmLGtCQUFVLEdBblRLO0FBb1RmLGtCQUFVLEdBcFRLO0FBcVRmLGtCQUFVLEdBclRLO0FBc1RmLGtCQUFVLEdBdFRLO0FBdVRmLGtCQUFVLEdBdlRLO0FBd1RmLGtCQUFVLEdBeFRLO0FBeVRmLGtCQUFVLEdBelRLO0FBMFRmLGtCQUFVLEdBMVRLO0FBMlRmLGtCQUFVLEdBM1RLO0FBNFRmLGtCQUFVLEdBNVRLO0FBNlRmLGtCQUFVLEdBN1RLO0FBOFRmLGtCQUFVLEdBOVRLO0FBK1RmLGtCQUFVLEdBL1RLO0FBZ1VmLGtCQUFVLEdBaFVLO0FBaVVmLGtCQUFVLEdBalVLO0FBa1VmLGtCQUFVLEdBbFVLO0FBbVVmLGtCQUFVLEdBblVLO0FBb1VmLGtCQUFVLEdBcFVLO0FBcVVmLGtCQUFVLElBclVLO0FBc1VmLGtCQUFVLEdBdFVLO0FBdVVmLGtCQUFVLEdBdlVLO0FBd1VmLGdCQUFVLEdBeFVLO0FBeVVmLGdCQUFVLEdBelVLO0FBMFVmLGdCQUFVLEdBMVVLO0FBMlVmLGtCQUFVLEdBM1VLO0FBNFVmLGtCQUFVLEdBNVVLO0FBNlVmLGtCQUFVLEdBN1VLO0FBOFVmLGtCQUFVLEdBOVVLO0FBK1VmLGtCQUFVLEdBL1VLO0FBZ1ZmLGdCQUFVLEdBaFZLO0FBaVZmLGtCQUFVLEdBalZLO0FBa1ZmLGtCQUFVLEdBbFZLO0FBbVZmLGtCQUFVLEdBblZLO0FBb1ZmLGtCQUFVLEdBcFZLO0FBcVZmLGtCQUFVLEdBclZLO0FBc1ZmLGtCQUFVLEdBdFZLO0FBdVZmLGtCQUFVLEdBdlZLO0FBd1ZmLGtCQUFVLEdBeFZLO0FBeVZmLGtCQUFVLEdBelZLO0FBMFZmLGtCQUFVLEdBMVZLO0FBMlZmLGtCQUFVLEdBM1ZLO0FBNFZmLGtCQUFVLEdBNVZLO0FBNlZmLGtCQUFVLEdBN1ZLO0FBOFZmLGtCQUFVLEdBOVZLO0FBK1ZmLGtCQUFVLEdBL1ZLO0FBZ1dmLGtCQUFVLEdBaFdLO0FBaVdmLGtCQUFVLEdBaldLO0FBa1dmLGtCQUFVLEdBbFdLO0FBbVdmLGtCQUFVLEdBbldLO0FBb1dmLGtCQUFVLEdBcFdLO0FBcVdmLGtCQUFVLEdBcldLO0FBc1dmLGtCQUFVLEdBdFdLO0FBdVdmLGtCQUFVLEdBdldLO0FBd1dmLGtCQUFVLEdBeFdLO0FBeVdmLGtCQUFVLEdBeldLO0FBMFdmLGtCQUFVLEdBMVdLO0FBMldmLGtCQUFVLEdBM1dLO0FBNFdmLGtCQUFVLEdBNVdLO0FBNldmLGtCQUFVLEdBN1dLO0FBOFdmLGtCQUFVLElBOVdLO0FBK1dmLGtCQUFVLEdBL1dLO0FBZ1hmLGtCQUFVLEdBaFhLO0FBaVhmLGtCQUFVLEdBalhLO0FBa1hmLGtCQUFVLEdBbFhLO0FBbVhmLGtCQUFVLEdBblhLO0FBb1hmLGtCQUFVLEdBcFhLO0FBcVhmLGtCQUFVLEdBclhLO0FBc1hmLGtCQUFVLEdBdFhLO0FBdVhmLGtCQUFVLEdBdlhLO0FBd1hmLGtCQUFVLEdBeFhLO0FBeVhmLGtCQUFVLEdBelhLO0FBMFhmLGtCQUFVLEdBMVhLO0FBMlhmLGtCQUFVLEdBM1hLO0FBNFhmLGtCQUFVLEdBNVhLO0FBNlhmLGtCQUFVLEdBN1hLO0FBOFhmLGtCQUFVLEdBOVhLO0FBK1hmLGdCQUFVLEdBL1hLO0FBZ1lmLGtCQUFVLEdBaFlLO0FBaVlmLGtCQUFVLEdBallLO0FBa1lmLGtCQUFVLEdBbFlLO0FBbVlmLGtCQUFVLEdBbllLO0FBb1lmLGtCQUFVLEdBcFlLO0FBcVlmLGtCQUFVLEdBcllLO0FBc1lmLGtCQUFVLEdBdFlLO0FBdVlmLGtCQUFVLEdBdllLO0FBd1lmLGtCQUFVLEdBeFlLO0FBeVlmLGtCQUFVLEdBellLO0FBMFlmLGtCQUFVLEdBMVlLO0FBMllmLGtCQUFVLEdBM1lLO0FBNFlmLGtCQUFVLEdBNVlLO0FBNllmLGtCQUFVLEdBN1lLO0FBOFlmLGtCQUFVLEdBOVlLO0FBK1lmLGtCQUFVLEdBL1lLO0FBZ1pmLGtCQUFVLEdBaFpLO0FBaVpmLGtCQUFVLEdBalpLO0FBa1pmLGtCQUFVLEdBbFpLO0FBbVpmLGtCQUFVLEdBblpLO0FBb1pmLGtCQUFVLEdBcFpLO0FBcVpmLGtCQUFVLEdBclpLO0FBc1pmLGtCQUFVLEdBdFpLO0FBdVpmLGtCQUFVLEdBdlpLO0FBd1pmLGtCQUFVLEdBeFpLO0FBeVpmLGtCQUFVLEdBelpLO0FBMFpmLGdCQUFVLEdBMVpLO0FBMlpmLGdCQUFVLEdBM1pLO0FBNFpmLGdCQUFVLEdBNVpLO0FBNlpmLGtCQUFVLEdBN1pLO0FBOFpmLGtCQUFVLEdBOVpLO0FBK1pmLGtCQUFVLEdBL1pLO0FBZ2FmLGtCQUFVLEdBaGFLO0FBaWFmLGdCQUFVLEdBamFLO0FBa2FmLGtCQUFVLEdBbGFLO0FBbWFmLGtCQUFVLEdBbmFLO0FBb2FmLGtCQUFVLEdBcGFLO0FBcWFmLGtCQUFVLEdBcmFLO0FBc2FmLGtCQUFVLEdBdGFLO0FBdWFmLGtCQUFVLEdBdmFLO0FBd2FmLGtCQUFVLEdBeGFLO0FBeWFmLGtCQUFVLEdBemFLO0FBMGFmLGdCQUFVLEdBMWFLO0FBMmFmLGtCQUFVLEdBM2FLO0FBNGFmLGtCQUFVLEdBNWFLO0FBNmFmLGdCQUFVLEdBN2FLO0FBOGFmLGtCQUFVLEdBOWFLO0FBK2FmLGtCQUFVLEdBL2FLO0FBZ2JmLGtCQUFVLEdBaGJLO0FBaWJmLGtCQUFVLEdBamJLO0FBa2JmLGtCQUFVLEdBbGJLO0FBbWJmLGtCQUFVLEdBbmJLO0FBb2JmLGtCQUFVLEdBcGJLO0FBcWJmLGtCQUFVLEdBcmJLO0FBc2JmLGtCQUFVLEdBdGJLO0FBdWJmLGtCQUFVLEdBdmJLO0FBd2JmLGtCQUFVLEdBeGJLO0FBeWJmLGtCQUFVLElBemJLO0FBMGJmLGdCQUFVLElBMWJLO0FBMmJmLGtCQUFVLElBM2JLO0FBNGJmLGtCQUFVLElBNWJLO0FBNmJmLGtCQUFVLElBN2JLO0FBOGJmLGtCQUFVLElBOWJLO0FBK2JmLGtCQUFVLElBL2JLO0FBZ2NmLGtCQUFVLElBaGNLO0FBaWNmLGtCQUFVLElBamNLO0FBa2NmLGtCQUFVLEdBbGNLO0FBbWNmLGtCQUFVLEdBbmNLO0FBb2NmLGtCQUFVLEdBcGNLO0FBcWNmLGtCQUFVLEdBcmNLO0FBc2NmLGtCQUFVLEdBdGNLO0FBdWNmLGtCQUFVLEdBdmNLO0FBd2NmLGtCQUFVLEdBeGNLO0FBeWNmLGtCQUFVLEdBemNLO0FBMGNmLGtCQUFVLEdBMWNLO0FBMmNmLGtCQUFVLEdBM2NLO0FBNGNmLGtCQUFVLEdBNWNLO0FBNmNmLGtCQUFVLEdBN2NLO0FBOGNmLGtCQUFVLEdBOWNLO0FBK2NmLGtCQUFVLEdBL2NLO0FBZ2RmLGdCQUFVLEdBaGRLO0FBaWRmLGtCQUFVLEdBamRLO0FBa2RmLGtCQUFVLEdBbGRLO0FBbWRmLGtCQUFVLEdBbmRLO0FBb2RmLGtCQUFVLEdBcGRLO0FBcWRmLGtCQUFVLEdBcmRLO0FBc2RmLGtCQUFVLEdBdGRLO0FBdWRmLGtCQUFVLEdBdmRLO0FBd2RmLGtCQUFVLEdBeGRLO0FBeWRmLGtCQUFVLEdBemRLO0FBMGRmLGtCQUFVLEdBMWRLO0FBMmRmLGtC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cEMsaURBQUMsQ0FBQ0EsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNELElBQVIsQ0FBYSxRQUFiLENBQUQsQ0FBRCxDQUEwQmpJLElBQTFCLENBQStCLFNBQS9CLEVBQTBDLEtBQTFDO0FBQ0gsR0FGRDtBQUdILENBMUtELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsd0IiLCJmaWxlIjoiZnJvbnRlbmQtb25na2lyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiLyohXG4gKiBTZWxlY3QyIDQuMC4xM1xuICogaHR0cHM6Ly9zZWxlY3QyLmdpdGh1Yi5pb1xuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocm9vdCwgalF1ZXJ5KSB7XG4gICAgICBpZiAoalF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gcmVxdWlyZSgnalF1ZXJ5JykgcmV0dXJucyBhIGZhY3RvcnkgdGhhdCByZXF1aXJlcyB3aW5kb3cgdG9cbiAgICAgICAgLy8gYnVpbGQgYSBqUXVlcnkgaW5zdGFuY2UsIHdlIG5vcm1hbGl6ZSBob3cgd2UgdXNlIG1vZHVsZXNcbiAgICAgICAgLy8gdGhhdCByZXF1aXJlIHRoaXMgcGF0dGVybiBidXQgdGhlIHdpbmRvdyBwcm92aWRlZCBpcyBhIG5vb3BcbiAgICAgICAgLy8gaWYgaXQncyBkZWZpbmVkIChob3cganF1ZXJ5IHdvcmtzKVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKShyb290KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgICAgcmV0dXJuIGpRdWVyeTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgfVxufSAoZnVuY3Rpb24gKGpRdWVyeSkge1xuICAvLyBUaGlzIGlzIG5lZWRlZCBzbyB3ZSBjYW4gY2F0Y2ggdGhlIEFNRCBsb2FkZXIgY29uZmlndXJhdGlvbiBhbmQgdXNlIGl0XG4gIC8vIFRoZSBpbm5lciBmaWxlIHNob3VsZCBiZSB3cmFwcGVkIChieSBgYmFubmVyLnN0YXJ0LmpzYCkgaW4gYSBmdW5jdGlvbiB0aGF0XG4gIC8vIHJldHVybnMgdGhlIEFNRCBsb2FkZXIgcmVmZXJlbmNlcy5cbiAgdmFyIFMyID0oZnVuY3Rpb24gKCkge1xuICAvLyBSZXN0b3JlIHRoZSBTZWxlY3QyIEFNRCBsb2FkZXIgc28gaXQgY2FuIGJlIHVzZWRcbiAgLy8gTmVlZGVkIG1vc3RseSBpbiB0aGUgbGFuZ3VhZ2UgZmlsZXMsIHdoZXJlIHRoZSBsb2FkZXIgaXMgbm90IGluc2VydGVkXG4gIGlmIChqUXVlcnkgJiYgalF1ZXJ5LmZuICYmIGpRdWVyeS5mbi5zZWxlY3QyICYmIGpRdWVyeS5mbi5zZWxlY3QyLmFtZCkge1xuICAgIHZhciBTMiA9IGpRdWVyeS5mbi5zZWxlY3QyLmFtZDtcbiAgfVxudmFyIFMyOyhmdW5jdGlvbiAoKSB7IGlmICghUzIgfHwgIVMyLnJlcXVpcmVqcykge1xuaWYgKCFTMikgeyBTMiA9IHt9OyB9IGVsc2UgeyByZXF1aXJlID0gUzI7IH1cbi8qKlxuICogQGxpY2Vuc2UgYWxtb25kIDAuMy4zIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzLlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UsIGh0dHA6Ly9naXRodWIuY29tL3JlcXVpcmVqcy9hbG1vbmQvTElDRU5TRVxuICovXG4vL0dvaW5nIHNsb3BweSB0byBhdm9pZCAndXNlIHN0cmljdCcgc3RyaW5nIGNvc3QsIGJ1dCBzdHJpY3QgcHJhY3RpY2VzIHNob3VsZFxuLy9iZSBmb2xsb3dlZC5cbi8qZ2xvYmFsIHNldFRpbWVvdXQ6IGZhbHNlICovXG5cbnZhciByZXF1aXJlanMsIHJlcXVpcmUsIGRlZmluZTtcbihmdW5jdGlvbiAodW5kZWYpIHtcbiAgICB2YXIgbWFpbiwgcmVxLCBtYWtlTWFwLCBoYW5kbGVycyxcbiAgICAgICAgZGVmaW5lZCA9IHt9LFxuICAgICAgICB3YWl0aW5nID0ge30sXG4gICAgICAgIGNvbmZpZyA9IHt9LFxuICAgICAgICBkZWZpbmluZyA9IHt9LFxuICAgICAgICBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgICBhcHMgPSBbXS5zbGljZSxcbiAgICAgICAganNTdWZmaXhSZWdFeHAgPSAvXFwuanMkLztcblxuICAgIGZ1bmN0aW9uIGhhc1Byb3Aob2JqLCBwcm9wKSB7XG4gICAgICAgIHJldHVybiBoYXNPd24uY2FsbChvYmosIHByb3ApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgcmVsYXRpdmUgbW9kdWxlIG5hbWUsIGxpa2UgLi9zb21ldGhpbmcsIG5vcm1hbGl6ZSBpdCB0b1xuICAgICAqIGEgcmVhbCBuYW1lIHRoYXQgY2FuIGJlIG1hcHBlZCB0byBhIHBhdGguXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIHJlbGF0aXZlIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYmFzZU5hbWUgYSByZWFsIG5hbWUgdGhhdCB0aGUgbmFtZSBhcmcgaXMgcmVsYXRpdmVcbiAgICAgKiB0by5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBub3JtYWxpemVkIG5hbWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBub3JtYWxpemUobmFtZSwgYmFzZU5hbWUpIHtcbiAgICAgICAgdmFyIG5hbWVQYXJ0cywgbmFtZVNlZ21lbnQsIG1hcFZhbHVlLCBmb3VuZE1hcCwgbGFzdEluZGV4LFxuICAgICAgICAgICAgZm91bmRJLCBmb3VuZFN0YXJNYXAsIHN0YXJJLCBpLCBqLCBwYXJ0LCBub3JtYWxpemVkQmFzZVBhcnRzLFxuICAgICAgICAgICAgYmFzZVBhcnRzID0gYmFzZU5hbWUgJiYgYmFzZU5hbWUuc3BsaXQoXCIvXCIpLFxuICAgICAgICAgICAgbWFwID0gY29uZmlnLm1hcCxcbiAgICAgICAgICAgIHN0YXJNYXAgPSAobWFwICYmIG1hcFsnKiddKSB8fCB7fTtcblxuICAgICAgICAvL0FkanVzdCBhbnkgcmVsYXRpdmUgcGF0aHMuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gbmFtZS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAvLyBJZiB3YW50aW5nIG5vZGUgSUQgY29tcGF0aWJpbGl0eSwgc3RyaXAgLmpzIGZyb20gZW5kXG4gICAgICAgICAgICAvLyBvZiBJRHMuIEhhdmUgdG8gZG8gdGhpcyBoZXJlLCBhbmQgbm90IGluIG5hbWVUb1VybFxuICAgICAgICAgICAgLy8gYmVjYXVzZSBub2RlIGFsbG93cyBlaXRoZXIgLmpzIG9yIG5vbiAuanMgdG8gbWFwXG4gICAgICAgICAgICAvLyB0byBzYW1lIGZpbGUuXG4gICAgICAgICAgICBpZiAoY29uZmlnLm5vZGVJZENvbXBhdCAmJiBqc1N1ZmZpeFJlZ0V4cC50ZXN0KG5hbWVbbGFzdEluZGV4XSkpIHtcbiAgICAgICAgICAgICAgICBuYW1lW2xhc3RJbmRleF0gPSBuYW1lW2xhc3RJbmRleF0ucmVwbGFjZShqc1N1ZmZpeFJlZ0V4cCwgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGFydHMgd2l0aCBhICcuJyBzbyBuZWVkIHRoZSBiYXNlTmFtZVxuICAgICAgICAgICAgaWYgKG5hbWVbMF0uY2hhckF0KDApID09PSAnLicgJiYgYmFzZVBhcnRzKSB7XG4gICAgICAgICAgICAgICAgLy9Db252ZXJ0IGJhc2VOYW1lIHRvIGFycmF5LCBhbmQgbG9wIG9mZiB0aGUgbGFzdCBwYXJ0LFxuICAgICAgICAgICAgICAgIC8vc28gdGhhdCAuIG1hdGNoZXMgdGhhdCAnZGlyZWN0b3J5JyBhbmQgbm90IG5hbWUgb2YgdGhlIGJhc2VOYW1lJ3NcbiAgICAgICAgICAgICAgICAvL21vZHVsZS4gRm9yIGluc3RhbmNlLCBiYXNlTmFtZSBvZiAnb25lL3R3by90aHJlZScsIG1hcHMgdG9cbiAgICAgICAgICAgICAgICAvLydvbmUvdHdvL3RocmVlLmpzJywgYnV0IHdlIHdhbnQgdGhlIGRpcmVjdG9yeSwgJ29uZS90d28nIGZvclxuICAgICAgICAgICAgICAgIC8vdGhpcyBub3JtYWxpemF0aW9uLlxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCYXNlUGFydHMgPSBiYXNlUGFydHMuc2xpY2UoMCwgYmFzZVBhcnRzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIG5hbWUgPSBub3JtYWxpemVkQmFzZVBhcnRzLmNvbmNhdChuYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9zdGFydCB0cmltRG90c1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gbmFtZVtpXTtcbiAgICAgICAgICAgICAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBpIC09IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGF0IHRoZSBzdGFydCwgb3IgcHJldmlvdXMgdmFsdWUgaXMgc3RpbGwgLi4sXG4gICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgdGhlbSBzbyB0aGF0IHdoZW4gY29udmVydGVkIHRvIGEgcGF0aCBpdCBtYXlcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RpbGwgd29yayB3aGVuIGNvbnZlcnRlZCB0byBhIHBhdGgsIGV2ZW4gdGhvdWdoXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIGFuIElEIGl0IGlzIGxlc3MgdGhhbiBpZGVhbC4gSW4gbGFyZ2VyIHBvaW50XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbGVhc2VzLCBtYXkgYmUgYmV0dGVyIHRvIGp1c3Qga2ljayBvdXQgYW4gZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwIHx8IChpID09PSAxICYmIG5hbWVbMl0gPT09ICcuLicpIHx8IG5hbWVbaSAtIDFdID09PSAnLi4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zcGxpY2UoaSAtIDEsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAtPSAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9lbmQgdHJpbURvdHNcblxuICAgICAgICAgICAgbmFtZSA9IG5hbWUuam9pbignLycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9BcHBseSBtYXAgY29uZmlnIGlmIGF2YWlsYWJsZS5cbiAgICAgICAgaWYgKChiYXNlUGFydHMgfHwgc3Rhck1hcCkgJiYgbWFwKSB7XG4gICAgICAgICAgICBuYW1lUGFydHMgPSBuYW1lLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IG5hbWVQYXJ0cy5sZW5ndGg7IGkgPiAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICBuYW1lU2VnbWVudCA9IG5hbWVQYXJ0cy5zbGljZSgwLCBpKS5qb2luKFwiL1wiKTtcblxuICAgICAgICAgICAgICAgIGlmIChiYXNlUGFydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9GaW5kIHRoZSBsb25nZXN0IGJhc2VOYW1lIHNlZ21lbnQgbWF0Y2ggaW4gdGhlIGNvbmZpZy5cbiAgICAgICAgICAgICAgICAgICAgLy9TbywgZG8gam9pbnMgb24gdGhlIGJpZ2dlc3QgdG8gc21hbGxlc3QgbGVuZ3RocyBvZiBiYXNlUGFydHMuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGJhc2VQYXJ0cy5sZW5ndGg7IGogPiAwOyBqIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZhbHVlID0gbWFwW2Jhc2VQYXJ0cy5zbGljZSgwLCBqKS5qb2luKCcvJyldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Jhc2VOYW1lIHNlZ21lbnQgaGFzICBjb25maWcsIGZpbmQgaWYgaXQgaGFzIG9uZSBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyBuYW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwVmFsdWUgPSBtYXBWYWx1ZVtuYW1lU2VnbWVudF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTWF0Y2gsIHVwZGF0ZSBuYW1lIHRvIHRoZSBuZXcgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTWFwID0gbWFwVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kSSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmb3VuZE1hcCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0NoZWNrIGZvciBhIHN0YXIgbWFwIG1hdGNoLCBidXQganVzdCBob2xkIG9uIHRvIGl0LFxuICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBzaG9ydGVyIHNlZ21lbnQgbWF0Y2ggbGF0ZXIgaW4gYSBtYXRjaGluZ1xuICAgICAgICAgICAgICAgIC8vY29uZmlnLCB0aGVuIGZhdm9yIG92ZXIgdGhpcyBzdGFyIG1hcC5cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kU3Rhck1hcCAmJiBzdGFyTWFwICYmIHN0YXJNYXBbbmFtZVNlZ21lbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kU3Rhck1hcCA9IHN0YXJNYXBbbmFtZVNlZ21lbnRdO1xuICAgICAgICAgICAgICAgICAgICBzdGFySSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWZvdW5kTWFwICYmIGZvdW5kU3Rhck1hcCkge1xuICAgICAgICAgICAgICAgIGZvdW5kTWFwID0gZm91bmRTdGFyTWFwO1xuICAgICAgICAgICAgICAgIGZvdW5kSSA9IHN0YXJJO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRNYXApIHtcbiAgICAgICAgICAgICAgICBuYW1lUGFydHMuc3BsaWNlKDAsIGZvdW5kSSwgZm91bmRNYXApO1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lUGFydHMuam9pbignLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVJlcXVpcmUocmVsTmFtZSwgZm9yY2VTeW5jKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL0EgdmVyc2lvbiBvZiBhIHJlcXVpcmUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgYSBtb2R1bGVOYW1lXG4gICAgICAgICAgICAvL3ZhbHVlIGZvciBpdGVtcyB0aGF0IG1heSBuZWVkIHRvXG4gICAgICAgICAgICAvL2xvb2sgdXAgcGF0aHMgcmVsYXRpdmUgdG8gdGhlIG1vZHVsZU5hbWVcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXBzLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgICAgICAgICAgLy9JZiBmaXJzdCBhcmcgaXMgbm90IHJlcXVpcmUoJ3N0cmluZycpLCBhbmQgdGhlcmUgaXMgb25seVxuICAgICAgICAgICAgLy9vbmUgYXJnLCBpdCBpcyB0aGUgYXJyYXkgZm9ybSB3aXRob3V0IGEgY2FsbGJhY2suIEluc2VydFxuICAgICAgICAgICAgLy9hIG51bGwgc28gdGhhdCB0aGUgZm9sbG93aW5nIGNvbmNhdCBpcyBjb3JyZWN0LlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJyAmJiBhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXEuYXBwbHkodW5kZWYsIGFyZ3MuY29uY2F0KFtyZWxOYW1lLCBmb3JjZVN5bmNdKSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZU5vcm1hbGl6ZShyZWxOYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuYW1lLCByZWxOYW1lKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlTG9hZChkZXBOYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGRlZmluZWRbZGVwTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsRGVwKG5hbWUpIHtcbiAgICAgICAgaWYgKGhhc1Byb3Aod2FpdGluZywgbmFtZSkpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gd2FpdGluZ1tuYW1lXTtcbiAgICAgICAgICAgIGRlbGV0ZSB3YWl0aW5nW25hbWVdO1xuICAgICAgICAgICAgZGVmaW5pbmdbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFpbi5hcHBseSh1bmRlZiwgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc1Byb3AoZGVmaW5lZCwgbmFtZSkgJiYgIWhhc1Byb3AoZGVmaW5pbmcsIG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vICcgKyBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmaW5lZFtuYW1lXTtcbiAgICB9XG5cbiAgICAvL1R1cm5zIGEgcGx1Z2luIXJlc291cmNlIHRvIFtwbHVnaW4sIHJlc291cmNlXVxuICAgIC8vd2l0aCB0aGUgcGx1Z2luIGJlaW5nIHVuZGVmaW5lZCBpZiB0aGUgbmFtZVxuICAgIC8vZGlkIG5vdCBoYXZlIGEgcGx1Z2luIHByZWZpeC5cbiAgICBmdW5jdGlvbiBzcGxpdFByZWZpeChuYW1lKSB7XG4gICAgICAgIHZhciBwcmVmaXgsXG4gICAgICAgICAgICBpbmRleCA9IG5hbWUgPyBuYW1lLmluZGV4T2YoJyEnKSA6IC0xO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcHJlZml4ID0gbmFtZS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKGluZGV4ICsgMSwgbmFtZS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcHJlZml4LCBuYW1lXTtcbiAgICB9XG5cbiAgICAvL0NyZWF0ZXMgYSBwYXJ0cyBhcnJheSBmb3IgYSByZWxOYW1lIHdoZXJlIGZpcnN0IHBhcnQgaXMgcGx1Z2luIElELFxuICAgIC8vc2Vjb25kIHBhcnQgaXMgcmVzb3VyY2UgSUQuIEFzc3VtZXMgcmVsTmFtZSBoYXMgYWxyZWFkeSBiZWVuIG5vcm1hbGl6ZWQuXG4gICAgZnVuY3Rpb24gbWFrZVJlbFBhcnRzKHJlbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHJlbE5hbWUgPyBzcGxpdFByZWZpeChyZWxOYW1lKSA6IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgbmFtZSBtYXAsIG5vcm1hbGl6aW5nIHRoZSBuYW1lLCBhbmQgdXNpbmcgYSBwbHVnaW5cbiAgICAgKiBmb3Igbm9ybWFsaXphdGlvbiBpZiBuZWNlc3NhcnkuIEdyYWJzIGEgcmVmIHRvIHBsdWdpblxuICAgICAqIHRvbywgYXMgYW4gb3B0aW1pemF0aW9uLlxuICAgICAqL1xuICAgIG1ha2VNYXAgPSBmdW5jdGlvbiAobmFtZSwgcmVsUGFydHMpIHtcbiAgICAgICAgdmFyIHBsdWdpbixcbiAgICAgICAgICAgIHBhcnRzID0gc3BsaXRQcmVmaXgobmFtZSksXG4gICAgICAgICAgICBwcmVmaXggPSBwYXJ0c1swXSxcbiAgICAgICAgICAgIHJlbFJlc291cmNlTmFtZSA9IHJlbFBhcnRzWzFdO1xuXG4gICAgICAgIG5hbWUgPSBwYXJ0c1sxXTtcblxuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICBwcmVmaXggPSBub3JtYWxpemUocHJlZml4LCByZWxSZXNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgcGx1Z2luID0gY2FsbERlcChwcmVmaXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Ob3JtYWxpemUgYWNjb3JkaW5nXG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgIGlmIChwbHVnaW4gJiYgcGx1Z2luLm5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBwbHVnaW4ubm9ybWFsaXplKG5hbWUsIG1ha2VOb3JtYWxpemUocmVsUmVzb3VyY2VOYW1lKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBub3JtYWxpemUobmFtZSwgcmVsUmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWUgPSBub3JtYWxpemUobmFtZSwgcmVsUmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIHBhcnRzID0gc3BsaXRQcmVmaXgobmFtZSk7XG4gICAgICAgICAgICBwcmVmaXggPSBwYXJ0c1swXTtcbiAgICAgICAgICAgIG5hbWUgPSBwYXJ0c1sxXTtcbiAgICAgICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4gPSBjYWxsRGVwKHByZWZpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1VzaW5nIHJpZGljdWxvdXMgcHJvcGVydHkgbmFtZXMgZm9yIHNwYWNlIHJlYXNvbnNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGY6IHByZWZpeCA/IHByZWZpeCArICchJyArIG5hbWUgOiBuYW1lLCAvL2Z1bGxOYW1lXG4gICAgICAgICAgICBuOiBuYW1lLFxuICAgICAgICAgICAgcHI6IHByZWZpeCxcbiAgICAgICAgICAgIHA6IHBsdWdpblxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtYWtlQ29uZmlnKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoY29uZmlnICYmIGNvbmZpZy5jb25maWcgJiYgY29uZmlnLmNvbmZpZ1tuYW1lXSkgfHwge307XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlcnMgPSB7XG4gICAgICAgIHJlcXVpcmU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZVJlcXVpcmUobmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydHM6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgZSA9IGRlZmluZWRbbmFtZV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZGVmaW5lZFtuYW1lXSA9IHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kdWxlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbmFtZSxcbiAgICAgICAgICAgICAgICB1cmk6ICcnLFxuICAgICAgICAgICAgICAgIGV4cG9ydHM6IGRlZmluZWRbbmFtZV0sXG4gICAgICAgICAgICAgICAgY29uZmlnOiBtYWtlQ29uZmlnKG5hbWUpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1haW4gPSBmdW5jdGlvbiAobmFtZSwgZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUpIHtcbiAgICAgICAgdmFyIGNqc01vZHVsZSwgZGVwTmFtZSwgcmV0LCBtYXAsIGksIHJlbFBhcnRzLFxuICAgICAgICAgICAgYXJncyA9IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tUeXBlID0gdHlwZW9mIGNhbGxiYWNrLFxuICAgICAgICAgICAgdXNpbmdFeHBvcnRzO1xuXG4gICAgICAgIC8vVXNlIG5hbWUgaWYgbm8gcmVsTmFtZVxuICAgICAgICByZWxOYW1lID0gcmVsTmFtZSB8fCBuYW1lO1xuICAgICAgICByZWxQYXJ0cyA9IG1ha2VSZWxQYXJ0cyhyZWxOYW1lKTtcblxuICAgICAgICAvL0NhbGwgdGhlIGNhbGxiYWNrIHRvIGRlZmluZSB0aGUgbW9kdWxlLCBpZiBuZWNlc3NhcnkuXG4gICAgICAgIGlmIChjYWxsYmFja1R5cGUgPT09ICd1bmRlZmluZWQnIHx8IGNhbGxiYWNrVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy9QdWxsIG91dCB0aGUgZGVmaW5lZCBkZXBlbmRlbmNpZXMgYW5kIHBhc3MgdGhlIG9yZGVyZWRcbiAgICAgICAgICAgIC8vdmFsdWVzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIC8vRGVmYXVsdCB0byBbcmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlXSBpZiBubyBkZXBzXG4gICAgICAgICAgICBkZXBzID0gIWRlcHMubGVuZ3RoICYmIGNhbGxiYWNrLmxlbmd0aCA/IFsncmVxdWlyZScsICdleHBvcnRzJywgJ21vZHVsZSddIDogZGVwcztcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkZXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWFwID0gbWFrZU1hcChkZXBzW2ldLCByZWxQYXJ0cyk7XG4gICAgICAgICAgICAgICAgZGVwTmFtZSA9IG1hcC5mO1xuXG4gICAgICAgICAgICAgICAgLy9GYXN0IHBhdGggQ29tbW9uSlMgc3RhbmRhcmQgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAgICAgIGlmIChkZXBOYW1lID09PSBcInJlcXVpcmVcIikge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gaGFuZGxlcnMucmVxdWlyZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlcE5hbWUgPT09IFwiZXhwb3J0c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQ29tbW9uSlMgbW9kdWxlIHNwZWMgMS4xXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBoYW5kbGVycy5leHBvcnRzKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB1c2luZ0V4cG9ydHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVwTmFtZSA9PT0gXCJtb2R1bGVcIikge1xuICAgICAgICAgICAgICAgICAgICAvL0NvbW1vbkpTIG1vZHVsZSBzcGVjIDEuMVxuICAgICAgICAgICAgICAgICAgICBjanNNb2R1bGUgPSBhcmdzW2ldID0gaGFuZGxlcnMubW9kdWxlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzUHJvcChkZWZpbmVkLCBkZXBOYW1lKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUHJvcCh3YWl0aW5nLCBkZXBOYW1lKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUHJvcChkZWZpbmluZywgZGVwTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGNhbGxEZXAoZGVwTmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXAucCkge1xuICAgICAgICAgICAgICAgICAgICBtYXAucC5sb2FkKG1hcC5uLCBtYWtlUmVxdWlyZShyZWxOYW1lLCB0cnVlKSwgbWFrZUxvYWQoZGVwTmFtZSksIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGRlZmluZWRbZGVwTmFtZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5hbWUgKyAnIG1pc3NpbmcgJyArIGRlcE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0ID0gY2FsbGJhY2sgPyBjYWxsYmFjay5hcHBseShkZWZpbmVkW25hbWVdLCBhcmdzKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAvL0lmIHNldHRpbmcgZXhwb3J0cyB2aWEgXCJtb2R1bGVcIiBpcyBpbiBwbGF5LFxuICAgICAgICAgICAgICAgIC8vZmF2b3IgdGhhdCBvdmVyIHJldHVybiB2YWx1ZSBhbmQgZXhwb3J0cy4gQWZ0ZXIgdGhhdCxcbiAgICAgICAgICAgICAgICAvL2Zhdm9yIGEgbm9uLXVuZGVmaW5lZCByZXR1cm4gdmFsdWUgb3ZlciBleHBvcnRzIHVzZS5cbiAgICAgICAgICAgICAgICBpZiAoY2pzTW9kdWxlICYmIGNqc01vZHVsZS5leHBvcnRzICE9PSB1bmRlZiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY2pzTW9kdWxlLmV4cG9ydHMgIT09IGRlZmluZWRbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lZFtuYW1lXSA9IGNqc01vZHVsZS5leHBvcnRzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmV0ICE9PSB1bmRlZiB8fCAhdXNpbmdFeHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVXNlIHRoZSByZXR1cm4gdmFsdWUgZnJvbSB0aGUgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSByZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIC8vTWF5IGp1c3QgYmUgYW4gb2JqZWN0IGRlZmluaXRpb24gZm9yIHRoZSBtb2R1bGUuIE9ubHlcbiAgICAgICAgICAgIC8vd29ycnkgYWJvdXQgZGVmaW5pbmcgaWYgaGF2ZSBhIG1vZHVsZSBuYW1lLlxuICAgICAgICAgICAgZGVmaW5lZFtuYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlcXVpcmVqcyA9IHJlcXVpcmUgPSByZXEgPSBmdW5jdGlvbiAoZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUsIGZvcmNlU3luYywgYWx0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVwcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2RlcHNdKSB7XG4gICAgICAgICAgICAgICAgLy9jYWxsYmFjayBpbiB0aGlzIGNhc2UgaXMgcmVhbGx5IHJlbE5hbWVcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlcnNbZGVwc10oY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9KdXN0IHJldHVybiB0aGUgbW9kdWxlIHdhbnRlZC4gSW4gdGhpcyBzY2VuYXJpbywgdGhlXG4gICAgICAgICAgICAvL2RlcHMgYXJnIGlzIHRoZSBtb2R1bGUgbmFtZSwgYW5kIHNlY29uZCBhcmcgKGlmIHBhc3NlZClcbiAgICAgICAgICAgIC8vaXMganVzdCB0aGUgcmVsTmFtZS5cbiAgICAgICAgICAgIC8vTm9ybWFsaXplIG1vZHVsZSBuYW1lLCBpZiBpdCBjb250YWlucyAuIG9yIC4uXG4gICAgICAgICAgICByZXR1cm4gY2FsbERlcChtYWtlTWFwKGRlcHMsIG1ha2VSZWxQYXJ0cyhjYWxsYmFjaykpLmYpO1xuICAgICAgICB9IGVsc2UgaWYgKCFkZXBzLnNwbGljZSkge1xuICAgICAgICAgICAgLy9kZXBzIGlzIGEgY29uZmlnIG9iamVjdCwgbm90IGFuIGFycmF5LlxuICAgICAgICAgICAgY29uZmlnID0gZGVwcztcbiAgICAgICAgICAgIGlmIChjb25maWcuZGVwcykge1xuICAgICAgICAgICAgICAgIHJlcShjb25maWcuZGVwcywgY29uZmlnLmNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5zcGxpY2UpIHtcbiAgICAgICAgICAgICAgICAvL2NhbGxiYWNrIGlzIGFuIGFycmF5LCB3aGljaCBtZWFucyBpdCBpcyBhIGRlcGVuZGVuY3kgbGlzdC5cbiAgICAgICAgICAgICAgICAvL0FkanVzdCBhcmdzIGlmIHRoZXJlIGFyZSBkZXBlbmRlbmNpZXNcbiAgICAgICAgICAgICAgICBkZXBzID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSByZWxOYW1lO1xuICAgICAgICAgICAgICAgIHJlbE5hbWUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXBzID0gdW5kZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1N1cHBvcnQgcmVxdWlyZShbJ2EnXSlcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgICAgICAvL0lmIHJlbE5hbWUgaXMgYSBmdW5jdGlvbiwgaXQgaXMgYW4gZXJyYmFjayBoYW5kbGVyLFxuICAgICAgICAvL3NvIHJlbW92ZSBpdC5cbiAgICAgICAgaWYgKHR5cGVvZiByZWxOYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZWxOYW1lID0gZm9yY2VTeW5jO1xuICAgICAgICAgICAgZm9yY2VTeW5jID0gYWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9TaW11bGF0ZSBhc3luYyBjYWxsYmFjaztcbiAgICAgICAgaWYgKGZvcmNlU3luYykge1xuICAgICAgICAgICAgbWFpbih1bmRlZiwgZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9Vc2luZyBhIG5vbi16ZXJvIHZhbHVlIGJlY2F1c2Ugb2YgY29uY2VybiBmb3Igd2hhdCBvbGQgYnJvd3NlcnNcbiAgICAgICAgICAgIC8vZG8sIGFuZCBsYXRlc3QgYnJvd3NlcnMgXCJ1cGdyYWRlXCIgdG8gNCBpZiBsb3dlciB2YWx1ZSBpcyB1c2VkOlxuICAgICAgICAgICAgLy9odHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS90aW1lcnMuaHRtbCNkb20td2luZG93dGltZXJzLXNldHRpbWVvdXQ6XG4gICAgICAgICAgICAvL0lmIHdhbnQgYSB2YWx1ZSBpbW1lZGlhdGVseSwgdXNlIHJlcXVpcmUoJ2lkJykgaW5zdGVhZCAtLSBzb21ldGhpbmdcbiAgICAgICAgICAgIC8vdGhhdCB3b3JrcyBpbiBhbG1vbmQgb24gdGhlIGdsb2JhbCBsZXZlbCwgYnV0IG5vdCBndWFyYW50ZWVkIGFuZFxuICAgICAgICAgICAgLy91bmxpa2VseSB0byB3b3JrIGluIG90aGVyIEFNRCBpbXBsZW1lbnRhdGlvbnMuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtYWluKHVuZGVmLCBkZXBzLCBjYWxsYmFjaywgcmVsTmFtZSk7XG4gICAgICAgICAgICB9LCA0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEp1c3QgZHJvcHMgdGhlIGNvbmZpZyBvbiB0aGUgZmxvb3IsIGJ1dCByZXR1cm5zIHJlcSBpbiBjYXNlXG4gICAgICogdGhlIGNvbmZpZyByZXR1cm4gdmFsdWUgaXMgdXNlZC5cbiAgICAgKi9cbiAgICByZXEuY29uZmlnID0gZnVuY3Rpb24gKGNmZykge1xuICAgICAgICByZXR1cm4gcmVxKGNmZyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV4cG9zZSBtb2R1bGUgcmVnaXN0cnkgZm9yIGRlYnVnZ2luZyBhbmQgdG9vbGluZ1xuICAgICAqL1xuICAgIHJlcXVpcmVqcy5fZGVmaW5lZCA9IGRlZmluZWQ7XG5cbiAgICBkZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgZGVwcywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWUgYWxtb25kIFJFQURNRTogaW5jb3JyZWN0IG1vZHVsZSBidWlsZCwgbm8gbW9kdWxlIG5hbWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVGhpcyBtb2R1bGUgbWF5IG5vdCBoYXZlIGRlcGVuZGVuY2llc1xuICAgICAgICBpZiAoIWRlcHMuc3BsaWNlKSB7XG4gICAgICAgICAgICAvL2RlcHMgaXMgbm90IGFuIGFycmF5LCBzbyBwcm9iYWJseSBtZWFuc1xuICAgICAgICAgICAgLy9hbiBvYmplY3QgbGl0ZXJhbCBvciBmYWN0b3J5IGZ1bmN0aW9uIGZvclxuICAgICAgICAgICAgLy90aGUgdmFsdWUuIEFkanVzdCBhcmdzLlxuICAgICAgICAgICAgY2FsbGJhY2sgPSBkZXBzO1xuICAgICAgICAgICAgZGVwcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNQcm9wKGRlZmluZWQsIG5hbWUpICYmICFoYXNQcm9wKHdhaXRpbmcsIG5hbWUpKSB7XG4gICAgICAgICAgICB3YWl0aW5nW25hbWVdID0gW25hbWUsIGRlcHMsIGNhbGxiYWNrXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkZWZpbmUuYW1kID0ge1xuICAgICAgICBqUXVlcnk6IHRydWVcbiAgICB9O1xufSgpKTtcblxuUzIucmVxdWlyZWpzID0gcmVxdWlyZWpzO1MyLnJlcXVpcmUgPSByZXF1aXJlO1MyLmRlZmluZSA9IGRlZmluZTtcbn1cbn0oKSk7XG5TMi5kZWZpbmUoXCJhbG1vbmRcIiwgZnVuY3Rpb24oKXt9KTtcblxuLyogZ2xvYmFsIGpRdWVyeTpmYWxzZSwgJDpmYWxzZSAqL1xuUzIuZGVmaW5lKCdqcXVlcnknLFtdLGZ1bmN0aW9uICgpIHtcbiAgdmFyIF8kID0galF1ZXJ5IHx8ICQ7XG5cbiAgaWYgKF8kID09IG51bGwgJiYgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdTZWxlY3QyOiBBbiBpbnN0YW5jZSBvZiBqUXVlcnkgb3IgYSBqUXVlcnktY29tcGF0aWJsZSBsaWJyYXJ5IHdhcyBub3QgJyArXG4gICAgICAnZm91bmQuIE1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgaW5jbHVkaW5nIGpRdWVyeSBiZWZvcmUgU2VsZWN0MiBvbiB5b3VyICcgK1xuICAgICAgJ3dlYiBwYWdlLidcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIF8kO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi91dGlscycsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgdmFyIFV0aWxzID0ge307XG5cbiAgVXRpbHMuRXh0ZW5kID0gZnVuY3Rpb24gKENoaWxkQ2xhc3MsIFN1cGVyQ2xhc3MpIHtcbiAgICB2YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgICBmdW5jdGlvbiBCYXNlQ29uc3RydWN0b3IgKCkge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IENoaWxkQ2xhc3M7XG4gICAgfVxuXG4gICAgZm9yICh2YXIga2V5IGluIFN1cGVyQ2xhc3MpIHtcbiAgICAgIGlmIChfX2hhc1Byb3AuY2FsbChTdXBlckNsYXNzLCBrZXkpKSB7XG4gICAgICAgIENoaWxkQ2xhc3Nba2V5XSA9IFN1cGVyQ2xhc3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBCYXNlQ29uc3RydWN0b3IucHJvdG90eXBlID0gU3VwZXJDbGFzcy5wcm90b3R5cGU7XG4gICAgQ2hpbGRDbGFzcy5wcm90b3R5cGUgPSBuZXcgQmFzZUNvbnN0cnVjdG9yKCk7XG4gICAgQ2hpbGRDbGFzcy5fX3N1cGVyX18gPSBTdXBlckNsYXNzLnByb3RvdHlwZTtcblxuICAgIHJldHVybiBDaGlsZENsYXNzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE1ldGhvZHMgKHRoZUNsYXNzKSB7XG4gICAgdmFyIHByb3RvID0gdGhlQ2xhc3MucHJvdG90eXBlO1xuXG4gICAgdmFyIG1ldGhvZHMgPSBbXTtcblxuICAgIGZvciAodmFyIG1ldGhvZE5hbWUgaW4gcHJvdG8pIHtcbiAgICAgIHZhciBtID0gcHJvdG9bbWV0aG9kTmFtZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG1ldGhvZHMucHVzaChtZXRob2ROYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kcztcbiAgfVxuXG4gIFV0aWxzLkRlY29yYXRlID0gZnVuY3Rpb24gKFN1cGVyQ2xhc3MsIERlY29yYXRvckNsYXNzKSB7XG4gICAgdmFyIGRlY29yYXRlZE1ldGhvZHMgPSBnZXRNZXRob2RzKERlY29yYXRvckNsYXNzKTtcbiAgICB2YXIgc3VwZXJNZXRob2RzID0gZ2V0TWV0aG9kcyhTdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIERlY29yYXRlZENsYXNzICgpIHtcbiAgICAgIHZhciB1bnNoaWZ0ID0gQXJyYXkucHJvdG90eXBlLnVuc2hpZnQ7XG5cbiAgICAgIHZhciBhcmdDb3VudCA9IERlY29yYXRvckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cbiAgICAgIHZhciBjYWxsZWRDb25zdHJ1Y3RvciA9IFN1cGVyQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAoYXJnQ291bnQgPiAwKSB7XG4gICAgICAgIHVuc2hpZnQuY2FsbChhcmd1bWVudHMsIFN1cGVyQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yKTtcblxuICAgICAgICBjYWxsZWRDb25zdHJ1Y3RvciA9IERlY29yYXRvckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICAgIH1cblxuICAgICAgY2FsbGVkQ29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBEZWNvcmF0b3JDbGFzcy5kaXNwbGF5TmFtZSA9IFN1cGVyQ2xhc3MuZGlzcGxheU5hbWU7XG5cbiAgICBmdW5jdGlvbiBjdHIgKCkge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IERlY29yYXRlZENsYXNzO1xuICAgIH1cblxuICAgIERlY29yYXRlZENsYXNzLnByb3RvdHlwZSA9IG5ldyBjdHIoKTtcblxuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgc3VwZXJNZXRob2RzLmxlbmd0aDsgbSsrKSB7XG4gICAgICB2YXIgc3VwZXJNZXRob2QgPSBzdXBlck1ldGhvZHNbbV07XG5cbiAgICAgIERlY29yYXRlZENsYXNzLnByb3RvdHlwZVtzdXBlck1ldGhvZF0gPVxuICAgICAgICBTdXBlckNsYXNzLnByb3RvdHlwZVtzdXBlck1ldGhvZF07XG4gICAgfVxuXG4gICAgdmFyIGNhbGxlZE1ldGhvZCA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICAvLyBTdHViIG91dCB0aGUgb3JpZ2luYWwgbWV0aG9kIGlmIGl0J3Mgbm90IGRlY29yYXRpbmcgYW4gYWN0dWFsIG1ldGhvZFxuICAgICAgdmFyIG9yaWdpbmFsTWV0aG9kID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAgIGlmIChtZXRob2ROYW1lIGluIERlY29yYXRlZENsYXNzLnByb3RvdHlwZSkge1xuICAgICAgICBvcmlnaW5hbE1ldGhvZCA9IERlY29yYXRlZENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRlY29yYXRlZE1ldGhvZCA9IERlY29yYXRvckNsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVuc2hpZnQgPSBBcnJheS5wcm90b3R5cGUudW5zaGlmdDtcblxuICAgICAgICB1bnNoaWZ0LmNhbGwoYXJndW1lbnRzLCBvcmlnaW5hbE1ldGhvZCk7XG5cbiAgICAgICAgcmV0dXJuIGRlY29yYXRlZE1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkZWNvcmF0ZWRNZXRob2RzLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgZGVjb3JhdGVkTWV0aG9kID0gZGVjb3JhdGVkTWV0aG9kc1tkXTtcblxuICAgICAgRGVjb3JhdGVkQ2xhc3MucHJvdG90eXBlW2RlY29yYXRlZE1ldGhvZF0gPSBjYWxsZWRNZXRob2QoZGVjb3JhdGVkTWV0aG9kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRGVjb3JhdGVkQ2xhc3M7XG4gIH07XG5cbiAgdmFyIE9ic2VydmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgfTtcblxuICBPYnNlcnZhYmxlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgaWYgKGV2ZW50IGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XSA9IFtjYWxsYmFja107XG4gICAgfVxuICB9O1xuXG4gIE9ic2VydmFibGUucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gICAgdmFyIHBhcmFtcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwge307XG5cbiAgICAvLyBQYXJhbXMgc2hvdWxkIGFsd2F5cyBjb21lIGluIGFzIGFuIGFycmF5XG4gICAgaWYgKHBhcmFtcyA9PSBudWxsKSB7XG4gICAgICBwYXJhbXMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gYXJndW1lbnRzIHRvIHRoZSBldmVudCwgdXNlIGEgdGVtcG9yYXJ5IG9iamVjdFxuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBwYXJhbXMucHVzaCh7fSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBgX3R5cGVgIG9mIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIGV2ZW50XG4gICAgcGFyYW1zWzBdLl90eXBlID0gZXZlbnQ7XG5cbiAgICBpZiAoZXZlbnQgaW4gdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuaW52b2tlKHRoaXMubGlzdGVuZXJzW2V2ZW50XSwgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9XG5cbiAgICBpZiAoJyonIGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmludm9rZSh0aGlzLmxpc3RlbmVyc1snKiddLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcblxuICBPYnNlcnZhYmxlLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAobGlzdGVuZXJzLCBwYXJhbXMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgcGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgVXRpbHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XG5cbiAgVXRpbHMuZ2VuZXJhdGVDaGFycyA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICB2YXIgY2hhcnMgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByYW5kb21DaGFyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYpO1xuICAgICAgY2hhcnMgKz0gcmFuZG9tQ2hhci50b1N0cmluZygzNik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYXJzO1xuICB9O1xuXG4gIFV0aWxzLmJpbmQgPSBmdW5jdGlvbiAoZnVuYywgY29udGV4dCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICBVdGlscy5fY29udmVydERhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGZvciAodmFyIG9yaWdpbmFsS2V5IGluIGRhdGEpIHtcbiAgICAgIHZhciBrZXlzID0gb3JpZ2luYWxLZXkuc3BsaXQoJy0nKTtcblxuICAgICAgdmFyIGRhdGFMZXZlbCA9IGRhdGE7XG5cbiAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBrZXlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdO1xuXG4gICAgICAgIC8vIExvd2VyY2FzZSB0aGUgZmlyc3QgbGV0dGVyXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIGRhc2gtc2VwYXJhdGVkIGJlY29tZXMgY2FtZWxDYXNlXG4gICAgICAgIGtleSA9IGtleS5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG5cbiAgICAgICAgaWYgKCEoa2V5IGluIGRhdGFMZXZlbCkpIHtcbiAgICAgICAgICBkYXRhTGV2ZWxba2V5XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGsgPT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgZGF0YUxldmVsW2tleV0gPSBkYXRhW29yaWdpbmFsS2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFMZXZlbCA9IGRhdGFMZXZlbFtrZXldO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgZGF0YVtvcmlnaW5hbEtleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgVXRpbHMuaGFzU2Nyb2xsID0gZnVuY3Rpb24gKGluZGV4LCBlbCkge1xuICAgIC8vIEFkYXB0ZWQgZnJvbSB0aGUgZnVuY3Rpb24gY3JlYXRlZCBieSBAU2hhZG93U2NyaXB0ZXJcbiAgICAvLyBhbmQgYWRhcHRlZCBieSBAQmlsbEJhcnJ5IG9uIHRoZSBTdGFjayBFeGNoYW5nZSBDb2RlIFJldmlldyB3ZWJzaXRlLlxuICAgIC8vIFRoZSBvcmlnaW5hbCBjb2RlIGNhbiBiZSBmb3VuZCBhdFxuICAgIC8vIGh0dHA6Ly9jb2RlcmV2aWV3LnN0YWNrZXhjaGFuZ2UuY29tL3EvMTMzMzhcbiAgICAvLyBhbmQgd2FzIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCB0aGUgU2l6emxlIHNlbGVjdG9yIGVuZ2luZS5cblxuICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICB2YXIgb3ZlcmZsb3dYID0gZWwuc3R5bGUub3ZlcmZsb3dYO1xuICAgIHZhciBvdmVyZmxvd1kgPSBlbC5zdHlsZS5vdmVyZmxvd1k7XG5cbiAgICAvL0NoZWNrIGJvdGggeCBhbmQgeSBkZWNsYXJhdGlvbnNcbiAgICBpZiAob3ZlcmZsb3dYID09PSBvdmVyZmxvd1kgJiZcbiAgICAgICAgKG92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgb3ZlcmZsb3dZID09PSAndmlzaWJsZScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG92ZXJmbG93WCA9PT0gJ3Njcm9sbCcgfHwgb3ZlcmZsb3dZID09PSAnc2Nyb2xsJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICgkZWwuaW5uZXJIZWlnaHQoKSA8IGVsLnNjcm9sbEhlaWdodCB8fFxuICAgICAgJGVsLmlubmVyV2lkdGgoKSA8IGVsLnNjcm9sbFdpZHRoKTtcbiAgfTtcblxuICBVdGlscy5lc2NhcGVNYXJrdXAgPSBmdW5jdGlvbiAobWFya3VwKSB7XG4gICAgdmFyIHJlcGxhY2VNYXAgPSB7XG4gICAgICAnXFxcXCc6ICcmIzkyOycsXG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnLFxuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAnXFwnJzogJyYjMzk7JyxcbiAgICAgICcvJzogJyYjNDc7J1xuICAgIH07XG5cbiAgICAvLyBEbyBub3QgdHJ5IHRvIGVzY2FwZSB0aGUgbWFya3VwIGlmIGl0J3Mgbm90IGEgc3RyaW5nXG4gICAgaWYgKHR5cGVvZiBtYXJrdXAgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbWFya3VwO1xuICAgIH1cblxuICAgIHJldHVybiBTdHJpbmcobWFya3VwKS5yZXBsYWNlKC9bJjw+XCInXFwvXFxcXF0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZU1hcFttYXRjaF07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQXBwZW5kIGFuIGFycmF5IG9mIGpRdWVyeSBub2RlcyB0byBhIGdpdmVuIGVsZW1lbnQuXG4gIFV0aWxzLmFwcGVuZE1hbnkgPSBmdW5jdGlvbiAoJGVsZW1lbnQsICRub2Rlcykge1xuICAgIC8vIGpRdWVyeSAxLjcueCBkb2VzIG5vdCBzdXBwb3J0ICQuZm4uYXBwZW5kKCkgd2l0aCBhbiBhcnJheVxuICAgIC8vIEZhbGwgYmFjayB0byBhIGpRdWVyeSBvYmplY3QgY29sbGVjdGlvbiB1c2luZyAkLmZuLmFkZCgpXG4gICAgaWYgKCQuZm4uanF1ZXJ5LnN1YnN0cigwLCAzKSA9PT0gJzEuNycpIHtcbiAgICAgIHZhciAkanFOb2RlcyA9ICQoKTtcblxuICAgICAgJC5tYXAoJG5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAkanFOb2RlcyA9ICRqcU5vZGVzLmFkZChub2RlKTtcbiAgICAgIH0pO1xuXG4gICAgICAkbm9kZXMgPSAkanFOb2RlcztcbiAgICB9XG5cbiAgICAkZWxlbWVudC5hcHBlbmQoJG5vZGVzKTtcbiAgfTtcblxuICAvLyBDYWNoZSBvYmplY3RzIGluIFV0aWxzLl9fY2FjaGUgaW5zdGVhZCBvZiAkLmRhdGEgKHNlZSAjNDM0NilcbiAgVXRpbHMuX19jYWNoZSA9IHt9O1xuXG4gIHZhciBpZCA9IDA7XG4gIFV0aWxzLkdldFVuaXF1ZUVsZW1lbnRJZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gR2V0IGEgdW5pcXVlIGVsZW1lbnQgSWQuIElmIGVsZW1lbnQgaGFzIG5vIGlkLFxuICAgIC8vIGNyZWF0ZXMgYSBuZXcgdW5pcXVlIG51bWJlciwgc3RvcmVzIGl0IGluIHRoZSBpZFxuICAgIC8vIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyB0aGUgbmV3IGlkLlxuICAgIC8vIElmIGFuIGlkIGFscmVhZHkgZXhpc3RzLCBpdCBzaW1wbHkgcmV0dXJucyBpdC5cblxuICAgIHZhciBzZWxlY3QySWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QyLWlkJyk7XG4gICAgaWYgKHNlbGVjdDJJZCA9PSBudWxsKSB7XG4gICAgICAvLyBJZiBlbGVtZW50IGhhcyBpZCwgdXNlIGl0LlxuICAgICAgaWYgKGVsZW1lbnQuaWQpIHtcbiAgICAgICAgc2VsZWN0MklkID0gZWxlbWVudC5pZDtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcsIHNlbGVjdDJJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QyLWlkJywgKytpZCk7XG4gICAgICAgIHNlbGVjdDJJZCA9IGlkLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3QySWQ7XG4gIH07XG5cbiAgVXRpbHMuU3RvcmVEYXRhID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgLy8gU3RvcmVzIGFuIGl0ZW0gaW4gdGhlIGNhY2hlIGZvciBhIHNwZWNpZmllZCBlbGVtZW50LlxuICAgIC8vIG5hbWUgaXMgdGhlIGNhY2hlIGtleS5cbiAgICB2YXIgaWQgPSBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQoZWxlbWVudCk7XG4gICAgaWYgKCFVdGlscy5fX2NhY2hlW2lkXSkge1xuICAgICAgVXRpbHMuX19jYWNoZVtpZF0gPSB7fTtcbiAgICB9XG5cbiAgICBVdGlscy5fX2NhY2hlW2lkXVtuYW1lXSA9IHZhbHVlO1xuICB9O1xuXG4gIFV0aWxzLkdldERhdGEgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSkge1xuICAgIC8vIFJldHJpZXZlcyBhIHZhbHVlIGZyb20gdGhlIGNhY2hlIGJ5IGl0cyBrZXkgKG5hbWUpXG4gICAgLy8gbmFtZSBpcyBvcHRpb25hbC4gSWYgbm8gbmFtZSBzcGVjaWZpZWQsIHJldHVyblxuICAgIC8vIGFsbCBjYWNoZSBpdGVtcyBmb3IgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgIC8vIGFuZCBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICB2YXIgaWQgPSBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQoZWxlbWVudCk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGlmIChVdGlscy5fX2NhY2hlW2lkXSkge1xuICAgICAgICBpZiAoVXRpbHMuX19jYWNoZVtpZF1bbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBVdGlscy5fX2NhY2hlW2lkXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJChlbGVtZW50KS5kYXRhKG5hbWUpOyAvLyBGYWxsYmFjayB0byBIVE1MNSBkYXRhIGF0dHJpYnMuXG4gICAgICB9XG4gICAgICByZXR1cm4gJChlbGVtZW50KS5kYXRhKG5hbWUpOyAvLyBGYWxsYmFjayB0byBIVE1MNSBkYXRhIGF0dHJpYnMuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBVdGlscy5fX2NhY2hlW2lkXTtcbiAgICB9XG4gIH07XG5cbiAgVXRpbHMuUmVtb3ZlRGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gUmVtb3ZlcyBhbGwgY2FjaGVkIGl0ZW1zIGZvciBhIHNwZWNpZmllZCBlbGVtZW50LlxuICAgIHZhciBpZCA9IFV0aWxzLkdldFVuaXF1ZUVsZW1lbnRJZChlbGVtZW50KTtcbiAgICBpZiAoVXRpbHMuX19jYWNoZVtpZF0gIT0gbnVsbCkge1xuICAgICAgZGVsZXRlIFV0aWxzLl9fY2FjaGVbaWRdO1xuICAgIH1cblxuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNlbGVjdDItaWQnKTtcbiAgfTtcblxuICByZXR1cm4gVXRpbHM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3Jlc3VsdHMnLFtcbiAgJ2pxdWVyeScsXG4gICcuL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIFJlc3VsdHMgKCRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhQWRhcHRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgUmVzdWx0cy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChSZXN1bHRzLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRyZXN1bHRzID0gJChcbiAgICAgICc8dWwgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvbnNcIiByb2xlPVwibGlzdGJveFwiPjwvdWw+J1xuICAgICk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnbXVsdGlwbGUnKSkge1xuICAgICAgJHJlc3VsdHMuYXR0cignYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIHRoaXMuJHJlc3VsdHMgPSAkcmVzdWx0cztcblxuICAgIHJldHVybiAkcmVzdWx0cztcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLmVtcHR5KCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuZGlzcGxheU1lc3NhZ2UgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIHZhciAkbWVzc2FnZSA9ICQoXG4gICAgICAnPGxpIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiJyArXG4gICAgICAnIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIj48L2xpPidcbiAgICApO1xuXG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQocGFyYW1zLm1lc3NhZ2UpO1xuXG4gICAgJG1lc3NhZ2UuYXBwZW5kKFxuICAgICAgZXNjYXBlTWFya3VwKFxuICAgICAgICBtZXNzYWdlKHBhcmFtcy5hcmdzKVxuICAgICAgKVxuICAgICk7XG5cbiAgICAkbWVzc2FnZVswXS5jbGFzc05hbWUgKz0gJyBzZWxlY3QyLXJlc3VsdHNfX21lc3NhZ2UnO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQoJG1lc3NhZ2UpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmhpZGVNZXNzYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX21lc3NhZ2UnKS5yZW1vdmUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIHZhciAkb3B0aW9ucyA9IFtdO1xuXG4gICAgaWYgKGRhdGEucmVzdWx0cyA9PSBudWxsIHx8IGRhdGEucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLiRyZXN1bHRzLmNoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICAgIG1lc3NhZ2U6ICdub1Jlc3VsdHMnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5yZXN1bHRzID0gdGhpcy5zb3J0KGRhdGEucmVzdWx0cyk7XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGl0ZW0gPSBkYXRhLnJlc3VsdHNbZF07XG5cbiAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgICRvcHRpb25zLnB1c2goJG9wdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQoJG9wdGlvbnMpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCRyZXN1bHRzLCAkZHJvcGRvd24pIHtcbiAgICB2YXIgJHJlc3VsdHNDb250YWluZXIgPSAkZHJvcGRvd24uZmluZCgnLnNlbGVjdDItcmVzdWx0cycpO1xuICAgICRyZXN1bHRzQ29udGFpbmVyLmFwcGVuZCgkcmVzdWx0cyk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHNvcnRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ3NvcnRlcicpO1xuXG4gICAgcmV0dXJuIHNvcnRlcihkYXRhKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5oaWdobGlnaHRGaXJzdEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRvcHRpb25zID0gdGhpcy4kcmVzdWx0c1xuICAgICAgLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgdmFyICRzZWxlY3RlZCA9ICRvcHRpb25zLmZpbHRlcignW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0nKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgc2VsZWN0ZWQgb3B0aW9uc1xuICAgIGlmICgkc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIHNlbGVjdGVkIG9wdGlvbnMsIGhpZ2hsaWdodCB0aGUgZmlyc3RcbiAgICAgICRzZWxlY3RlZC5maXJzdCgpLnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHNlbGVjdGVkIG9wdGlvbnMsIGhpZ2hsaWdodCB0aGUgZmlyc3Qgb3B0aW9uXG4gICAgICAvLyBpbiB0aGUgZHJvcGRvd25cbiAgICAgICRvcHRpb25zLmZpcnN0KCkudHJpZ2dlcignbW91c2VlbnRlcicpO1xuICAgIH1cblxuICAgIHRoaXMuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnNldENsYXNzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRhLmN1cnJlbnQoZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRJZHMgPSAkLm1hcChzZWxlY3RlZCwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHMuaWQudG9TdHJpbmcoKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgJG9wdGlvbnMgPSBzZWxmLiRyZXN1bHRzXG4gICAgICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgICAgJG9wdGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgICB2YXIgaXRlbSA9IFV0aWxzLkdldERhdGEodGhpcywgJ2RhdGEnKTtcblxuICAgICAgICAvLyBpZCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgd2hlbiBjb21wYXJpbmdcbiAgICAgICAgdmFyIGlkID0gJycgKyBpdGVtLmlkO1xuXG4gICAgICAgIGlmICgoaXRlbS5lbGVtZW50ICE9IG51bGwgJiYgaXRlbS5lbGVtZW50LnNlbGVjdGVkKSB8fFxuICAgICAgICAgICAgKGl0ZW0uZWxlbWVudCA9PSBudWxsICYmICQuaW5BcnJheShpZCwgc2VsZWN0ZWRJZHMpID4gLTEpKSB7XG4gICAgICAgICAgJG9wdGlvbi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkb3B0aW9uLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5zaG93TG9hZGluZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICB2YXIgbG9hZGluZ01vcmUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQoJ3NlYXJjaGluZycpO1xuXG4gICAgdmFyIGxvYWRpbmcgPSB7XG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB0ZXh0OiBsb2FkaW5nTW9yZShwYXJhbXMpXG4gICAgfTtcbiAgICB2YXIgJGxvYWRpbmcgPSB0aGlzLm9wdGlvbihsb2FkaW5nKTtcbiAgICAkbG9hZGluZy5jbGFzc05hbWUgKz0gJyBsb2FkaW5nLXJlc3VsdHMnO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5wcmVwZW5kKCRsb2FkaW5nKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5oaWRlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLmZpbmQoJy5sb2FkaW5nLXJlc3VsdHMnKS5yZW1vdmUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5vcHRpb24gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24nO1xuXG4gICAgdmFyIGF0dHJzID0ge1xuICAgICAgJ3JvbGUnOiAnb3B0aW9uJyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogJ2ZhbHNlJ1xuICAgIH07XG5cbiAgICB2YXIgbWF0Y2hlcyA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8XG4gICAgICB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgIHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICBpZiAoKGRhdGEuZWxlbWVudCAhPSBudWxsICYmIG1hdGNoZXMuY2FsbChkYXRhLmVsZW1lbnQsICc6ZGlzYWJsZWQnKSkgfHxcbiAgICAgICAgKGRhdGEuZWxlbWVudCA9PSBudWxsICYmIGRhdGEuZGlzYWJsZWQpKSB7XG4gICAgICBkZWxldGUgYXR0cnNbJ2FyaWEtc2VsZWN0ZWQnXTtcbiAgICAgIGF0dHJzWydhcmlhLWRpc2FibGVkJ10gPSAndHJ1ZSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaWQgPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuX3Jlc3VsdElkICE9IG51bGwpIHtcbiAgICAgIG9wdGlvbi5pZCA9IGRhdGEuX3Jlc3VsdElkO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnRpdGxlKSB7XG4gICAgICBvcHRpb24udGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgICBhdHRycy5yb2xlID0gJ2dyb3VwJztcbiAgICAgIGF0dHJzWydhcmlhLWxhYmVsJ10gPSBkYXRhLnRleHQ7XG4gICAgICBkZWxldGUgYXR0cnNbJ2FyaWEtc2VsZWN0ZWQnXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSB7XG4gICAgICB2YXIgdmFsID0gYXR0cnNbYXR0cl07XG5cbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgdmFyICRvcHRpb24gPSAkKG9wdGlvbik7XG5cbiAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ3NlbGVjdDItcmVzdWx0c19fZ3JvdXAnO1xuXG4gICAgICB2YXIgJGxhYmVsID0gJChsYWJlbCk7XG4gICAgICB0aGlzLnRlbXBsYXRlKGRhdGEsIGxhYmVsKTtcblxuICAgICAgdmFyICRjaGlsZHJlbiA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGRhdGEuY2hpbGRyZW4ubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gZGF0YS5jaGlsZHJlbltjXTtcblxuICAgICAgICB2YXIgJGNoaWxkID0gdGhpcy5vcHRpb24oY2hpbGQpO1xuXG4gICAgICAgICRjaGlsZHJlbi5wdXNoKCRjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHZhciAkY2hpbGRyZW5Db250YWluZXIgPSAkKCc8dWw+PC91bD4nLCB7XG4gICAgICAgICdjbGFzcyc6ICdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbnMgc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zLS1uZXN0ZWQnXG4gICAgICB9KTtcblxuICAgICAgJGNoaWxkcmVuQ29udGFpbmVyLmFwcGVuZCgkY2hpbGRyZW4pO1xuXG4gICAgICAkb3B0aW9uLmFwcGVuZChsYWJlbCk7XG4gICAgICAkb3B0aW9uLmFwcGVuZCgkY2hpbGRyZW5Db250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlbXBsYXRlKGRhdGEsIG9wdGlvbik7XG4gICAgfVxuXG4gICAgVXRpbHMuU3RvcmVEYXRhKG9wdGlvbiwgJ2RhdGEnLCBkYXRhKTtcblxuICAgIHJldHVybiBvcHRpb247XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgaWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5hdHRyKCdpZCcsIGlkKTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphbGwnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmNsZWFyKCk7XG4gICAgICBzZWxmLmFwcGVuZChwYXJhbXMuZGF0YSk7XG5cbiAgICAgIGlmIChjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG4gICAgICAgIHNlbGYuaGlnaGxpZ2h0Rmlyc3RJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YXBwZW5kJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5hcHBlbmQocGFyYW1zLmRhdGEpO1xuXG4gICAgICBpZiAoY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdxdWVyeScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuaGlkZU1lc3NhZ2VzKCk7XG4gICAgICBzZWxmLnNob3dMb2FkaW5nKHBhcmFtcyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG5cbiAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdzY3JvbGxBZnRlclNlbGVjdCcpKSB7XG4gICAgICAgIHNlbGYuaGlnaGxpZ2h0Rmlyc3RJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnNldENsYXNzZXMoKTtcblxuICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ3Njcm9sbEFmdGVyU2VsZWN0JykpIHtcbiAgICAgICAgc2VsZi5oaWdobGlnaHRGaXJzdEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW4sIGFyaWEtZXhwZW5kZWQ9XCJ0cnVlXCJcbiAgICAgIHNlbGYuJHJlc3VsdHMuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuICAgICAgc2VsZi5lbnN1cmVIaWdobGlnaHRWaXNpYmxlKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgY2xvc2VkLCBhcmlhLWV4cGVuZGVkPVwiZmFsc2VcIlxuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIHNlbGYuJHJlc3VsdHMucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6dG9nZ2xlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJGhpZ2hsaWdodGVkLnRyaWdnZXIoJ21vdXNldXAnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJGhpZ2hsaWdodGVkWzBdLCAnZGF0YScpO1xuXG4gICAgICBpZiAoJGhpZ2hsaWdodGVkLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnKSA9PSAndHJ1ZScpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdjbG9zZScsIHt9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0Jywge1xuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6cHJldmlvdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0cy5maW5kKCdbYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XG5cbiAgICAgIC8vIElmIHdlIGFyZSBhbHJlYWR5IGF0IHRoZSB0b3AsIGRvbid0IG1vdmUgZnVydGhlclxuICAgICAgLy8gSWYgbm8gb3B0aW9ucywgY3VycmVudEluZGV4IHdpbGwgYmUgLTFcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuXG4gICAgICAvLyBJZiBub25lIGFyZSBoaWdobGlnaHRlZCwgaGlnaGxpZ2h0IHRoZSBmaXJzdFxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyICRuZXh0ID0gJG9wdGlvbnMuZXEobmV4dEluZGV4KTtcblxuICAgICAgJG5leHQudHJpZ2dlcignbW91c2VlbnRlcicpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHNlbGYuJHJlc3VsdHMub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIG5leHRUb3AgPSAkbmV4dC5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgbmV4dE9mZnNldCA9IHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQpO1xuXG4gICAgICBpZiAobmV4dEluZGV4ID09PSAwKSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xuICAgICAgfSBlbHNlIGlmIChuZXh0VG9wIC0gY3VycmVudE9mZnNldCA8IDApIHtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AobmV4dE9mZnNldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bmV4dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgICB2YXIgJG9wdGlvbnMgPSBzZWxmLiRyZXN1bHRzLmZpbmQoJ1thcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgICB2YXIgY3VycmVudEluZGV4ID0gJG9wdGlvbnMuaW5kZXgoJGhpZ2hsaWdodGVkKTtcblxuICAgICAgdmFyIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG5cbiAgICAgIC8vIElmIHdlIGFyZSBhdCB0aGUgbGFzdCBvcHRpb24sIHN0YXkgdGhlcmVcbiAgICAgIGlmIChuZXh0SW5kZXggPj0gJG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyICRuZXh0ID0gJG9wdGlvbnMuZXEobmV4dEluZGV4KTtcblxuICAgICAgJG5leHQudHJpZ2dlcignbW91c2VlbnRlcicpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHNlbGYuJHJlc3VsdHMub2Zmc2V0KCkudG9wICtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgICB2YXIgbmV4dEJvdHRvbSA9ICRuZXh0Lm9mZnNldCgpLnRvcCArICRuZXh0Lm91dGVySGVpZ2h0KGZhbHNlKTtcbiAgICAgIHZhciBuZXh0T2Zmc2V0ID0gc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoKSArIG5leHRCb3R0b20gLSBjdXJyZW50T2Zmc2V0O1xuXG4gICAgICBpZiAobmV4dEluZGV4ID09PSAwKSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xuICAgICAgfSBlbHNlIGlmIChuZXh0Qm90dG9tID4gY3VycmVudE9mZnNldCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcChuZXh0T2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5lbGVtZW50LmFkZENsYXNzKCdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czptZXNzYWdlJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5kaXNwbGF5TWVzc2FnZShwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKCQuZm4ubW91c2V3aGVlbCkge1xuICAgICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0b3AgPSBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgIHZhciBib3R0b20gPSBzZWxmLiRyZXN1bHRzLmdldCgwKS5zY3JvbGxIZWlnaHQgLSB0b3AgKyBlLmRlbHRhWTtcblxuICAgICAgICB2YXIgaXNBdFRvcCA9IGUuZGVsdGFZID4gMCAmJiB0b3AgLSBlLmRlbHRhWSA8PSAwO1xuICAgICAgICB2YXIgaXNBdEJvdHRvbSA9IGUuZGVsdGFZIDwgMCAmJiBib3R0b20gPD0gc2VsZi4kcmVzdWx0cy5oZWlnaHQoKTtcblxuICAgICAgICBpZiAoaXNBdFRvcCkge1xuICAgICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBdEJvdHRvbSkge1xuICAgICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKFxuICAgICAgICAgICAgc2VsZi4kcmVzdWx0cy5nZXQoMCkuc2Nyb2xsSGVpZ2h0IC0gc2VsZi4kcmVzdWx0cy5oZWlnaHQoKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2V1cCcsICcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XG5cbiAgICAgIGlmICgkdGhpcy5hdHRyKCdhcmlhLXNlbGVjdGVkJykgPT09ICd0cnVlJykge1xuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmdldCgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigndW5zZWxlY3QnLCB7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdjbG9zZScsIHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3QnLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dCxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRyZXN1bHRzLm9uKCdtb3VzZWVudGVyJywgJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkXScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEodGhpcywgJ2RhdGEnKTtcblxuICAgICAgc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG5cbiAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czpmb2N1cycsIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgZWxlbWVudDogJCh0aGlzKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSB0aGlzLiRyZXN1bHRzXG4gICAgLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcblxuICAgIHJldHVybiAkaGlnaGxpZ2h0ZWQ7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLnJlbW92ZSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmVuc3VyZUhpZ2hsaWdodFZpc2libGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRoaWdobGlnaHRlZCA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJHJlc3VsdHMuZmluZCgnW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gJG9wdGlvbnMuaW5kZXgoJGhpZ2hsaWdodGVkKTtcblxuICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gdGhpcy4kcmVzdWx0cy5vZmZzZXQoKS50b3A7XG4gICAgdmFyIG5leHRUb3AgPSAkaGlnaGxpZ2h0ZWQub2Zmc2V0KCkudG9wO1xuICAgIHZhciBuZXh0T2Zmc2V0ID0gdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AoKSArIChuZXh0VG9wIC0gY3VycmVudE9mZnNldCk7XG5cbiAgICB2YXIgb2Zmc2V0RGVsdGEgPSBuZXh0VG9wIC0gY3VycmVudE9mZnNldDtcbiAgICBuZXh0T2Zmc2V0IC09ICRoaWdobGlnaHRlZC5vdXRlckhlaWdodChmYWxzZSkgKiAyO1xuXG4gICAgaWYgKGN1cnJlbnRJbmRleCA8PSAyKSB7XG4gICAgICB0aGlzLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICB9IGVsc2UgaWYgKG9mZnNldERlbHRhID4gdGhpcy4kcmVzdWx0cy5vdXRlckhlaWdodCgpIHx8IG9mZnNldERlbHRhIDwgMCkge1xuICAgICAgdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AobmV4dE9mZnNldCk7XG4gICAgfVxuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24gKHJlc3VsdCwgY29udGFpbmVyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLmdldCgndGVtcGxhdGVSZXN1bHQnKTtcbiAgICB2YXIgZXNjYXBlTWFya3VwID0gdGhpcy5vcHRpb25zLmdldCgnZXNjYXBlTWFya3VwJyk7XG5cbiAgICB2YXIgY29udGVudCA9IHRlbXBsYXRlKHJlc3VsdCwgY29udGFpbmVyKTtcblxuICAgIGlmIChjb250ZW50ID09IG51bGwpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gZXNjYXBlTWFya3VwKGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGNvbnRhaW5lcikuYXBwZW5kKGNvbnRlbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUmVzdWx0cztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIva2V5cycsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBLRVlTID0ge1xuICAgIEJBQ0tTUEFDRTogOCxcbiAgICBUQUI6IDksXG4gICAgRU5URVI6IDEzLFxuICAgIFNISUZUOiAxNixcbiAgICBDVFJMOiAxNyxcbiAgICBBTFQ6IDE4LFxuICAgIEVTQzogMjcsXG4gICAgU1BBQ0U6IDMyLFxuICAgIFBBR0VfVVA6IDMzLFxuICAgIFBBR0VfRE9XTjogMzQsXG4gICAgRU5EOiAzNSxcbiAgICBIT01FOiAzNixcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxuICAgIERFTEVURTogNDZcbiAgfTtcblxuICByZXR1cm4gS0VZUztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL2Jhc2UnLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscycsXG4gICcuLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzLCBLRVlTKSB7XG4gIGZ1bmN0aW9uIEJhc2VTZWxlY3Rpb24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBCYXNlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKEJhc2VTZWxlY3Rpb24sIFV0aWxzLk9ic2VydmFibGUpO1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHNlbGVjdGlvbiA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvblwiIHJvbGU9XCJjb21ib2JveFwiICcgK1xuICAgICAgJyBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgIHRoaXMuX3RhYmluZGV4ID0gMDtcblxuICAgIGlmIChVdGlscy5HZXREYXRhKHRoaXMuJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnKSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl90YWJpbmRleCA9IFV0aWxzLkdldERhdGEodGhpcy4kZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3RhYmluZGV4ID0gdGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgICRzZWxlY3Rpb24uYXR0cigndGl0bGUnLCB0aGlzLiRlbGVtZW50LmF0dHIoJ3RpdGxlJykpO1xuICAgICRzZWxlY3Rpb24uYXR0cigndGFiaW5kZXgnLCB0aGlzLl90YWJpbmRleCk7XG4gICAgJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24gPSAkc2VsZWN0aW9uO1xuXG4gICAgcmV0dXJuICRzZWxlY3Rpb247XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcmVzdWx0c0lkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHRzJztcblxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignZm9jdXMnLCBldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdibHVyJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5faGFuZGxlQmx1cihldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdrZXlwcmVzcycsIGV2dCk7XG5cbiAgICAgIGlmIChldnQud2hpY2ggPT09IEtFWVMuU1BBQ0UpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgcGFyYW1zLmRhdGEuX3Jlc3VsdElkKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0aW9uOnVwZGF0ZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYudXBkYXRlKHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW4sIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLW93bnMnLCByZXN1bHRzSWQpO1xuXG4gICAgICBzZWxmLl9hdHRhY2hDbG9zZUhhbmRsZXIoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBjbG9zZWQsIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLnJlbW92ZUF0dHIoJ2FyaWEtb3ducycpO1xuXG4gICAgICBzZWxmLiRzZWxlY3Rpb24udHJpZ2dlcignZm9jdXMnKTtcblxuICAgICAgc2VsZi5fZGV0YWNoQ2xvc2VIYW5kbGVyKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2VuYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsIHNlbGYuX3RhYmluZGV4KTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Rpc2FibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9KTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5faGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRlbGF5ZWQgYXMgdGhlIGFjdGl2ZSBlbGVtZW50IGlzIHRoZSBib2R5IHdoZW4gdGhlIHRhYlxuICAgIC8vIGtleSBpcyBwcmVzc2VkLCBwb3NzaWJseSBhbG9uZyB3aXRoIG90aGVycy5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBEb24ndCB0cmlnZ2VyIGBibHVyYCBpZiB0aGUgZm9jdXMgaXMgc3RpbGwgaW4gdGhlIHNlbGVjdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBzZWxmLiRzZWxlY3Rpb25bMF0pIHx8XG4gICAgICAgICgkLmNvbnRhaW5zKHNlbGYuJHNlbGVjdGlvblswXSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRyaWdnZXIoJ2JsdXInLCBldnQpO1xuICAgIH0sIDEpO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLl9hdHRhY2hDbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cbiAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdtb3VzZWRvd24uc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcblxuICAgICAgdmFyICRzZWxlY3QgPSAkdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QyJyk7XG5cbiAgICAgIHZhciAkYWxsID0gJCgnLnNlbGVjdDIuc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcblxuICAgICAgJGFsbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgPT0gJHNlbGVjdFswXSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkZWxlbWVudCA9IFV0aWxzLkdldERhdGEodGhpcywgJ2VsZW1lbnQnKTtcblxuICAgICAgICAkZWxlbWVudC5zZWxlY3QyKCdjbG9zZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuX2RldGFjaENsb3NlSGFuZGxlciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAkKGRvY3VtZW50LmJvZHkpLm9mZignbW91c2Vkb3duLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZCk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoJHNlbGVjdGlvbiwgJGNvbnRhaW5lcikge1xuICAgIHZhciAkc2VsZWN0aW9uQ29udGFpbmVyID0gJGNvbnRhaW5lci5maW5kKCcuc2VsZWN0aW9uJyk7XG4gICAgJHNlbGVjdGlvbkNvbnRhaW5lci5hcHBlbmQoJHNlbGVjdGlvbik7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9kZXRhY2hDbG9zZUhhbmRsZXIodGhpcy5jb250YWluZXIpO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHVwZGF0ZWAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIGFic3RyYWN0IHRoZSBcImVuYWJsZWRcIiAobm90IFwiZGlzYWJsZWRcIikgc3RhdGUgb2YgdGhpc1xuICAgKiBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge3RydWV9IGlmIHRoZSBpbnN0YW5jZSBpcyBub3QgZGlzYWJsZWQuXG4gICAqIEByZXR1cm4ge2ZhbHNlfSBpZiB0aGUgaW5zdGFuY2UgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5pc0VuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzRGlzYWJsZWQoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJkaXNhYmxlZFwiIHN0YXRlIG9mIHRoaXMgb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgZGlzYWJsZWQgb3B0aW9uIGlzIHRydWUuXG4gICAqIEByZXR1cm4ge2ZhbHNlfSBpZiB0aGUgZGlzYWJsZWQgb3B0aW9uIGlzIGZhbHNlLlxuICAgKi9cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldCgnZGlzYWJsZWQnKTtcbiAgfTtcblxuICByZXR1cm4gQmFzZVNlbGVjdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL3NpbmdsZScsW1xuICAnanF1ZXJ5JyxcbiAgJy4vYmFzZScsXG4gICcuLi91dGlscycsXG4gICcuLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIEJhc2VTZWxlY3Rpb24sIFV0aWxzLCBLRVlTKSB7XG4gIGZ1bmN0aW9uIFNpbmdsZVNlbGVjdGlvbiAoKSB7XG4gICAgU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKFNpbmdsZVNlbGVjdGlvbiwgQmFzZVNlbGVjdGlvbik7XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSBTaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLnJlbmRlci5jYWxsKHRoaXMpO1xuXG4gICAgJHNlbGVjdGlvbi5hZGRDbGFzcygnc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZScpO1xuXG4gICAgJHNlbGVjdGlvbi5odG1sKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkXCI+PC9zcGFuPicgK1xuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93XCIgcm9sZT1cInByZXNlbnRhdGlvblwiPicgK1xuICAgICAgICAnPGIgcm9sZT1cInByZXNlbnRhdGlvblwiPjwvYj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICByZXR1cm4gJHNlbGVjdGlvbjtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5iaW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgaWQgPSBjb250YWluZXIuaWQgKyAnLWNvbnRhaW5lcic7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpXG4gICAgICAuYXR0cignaWQnLCBpZClcbiAgICAgIC5hdHRyKCdyb2xlJywgJ3RleHRib3gnKVxuICAgICAgLmF0dHIoJ2FyaWEtcmVhZG9ubHknLCAndHJ1ZScpO1xuICAgIHRoaXMuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCBpZCk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIE9ubHkgcmVzcG9uZCB0byBsZWZ0IGNsaWNrc1xuICAgICAgaWYgKGV2dC53aGljaCAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcigndG9nZ2xlJywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBVc2VyIGV4aXRzIHRoZSBjb250YWluZXJcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLiRzZWxlY3Rpb24udHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuICAgICRyZW5kZXJlZC5lbXB0eSgpO1xuICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpOyAvLyBjbGVhciB0b29sdGlwIG9uIGVtcHR5XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5ID0gZnVuY3Rpb24gKGRhdGEsIGNvbnRhaW5lcikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlU2VsZWN0aW9uJyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgcmV0dXJuIGVzY2FwZU1hcmt1cCh0ZW1wbGF0ZShkYXRhLCBjb250YWluZXIpKTtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJCgnPHNwYW4+PC9zcGFuPicpO1xuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0aW9uID0gZGF0YVswXTtcblxuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuICAgIHZhciBmb3JtYXR0ZWQgPSB0aGlzLmRpc3BsYXkoc2VsZWN0aW9uLCAkcmVuZGVyZWQpO1xuXG4gICAgJHJlbmRlcmVkLmVtcHR5KCkuYXBwZW5kKGZvcm1hdHRlZCk7XG5cbiAgICB2YXIgdGl0bGUgPSBzZWxlY3Rpb24udGl0bGUgfHwgc2VsZWN0aW9uLnRleHQ7XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgICRyZW5kZXJlZC5hdHRyKCd0aXRsZScsIHRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHJlbmRlcmVkLnJlbW92ZUF0dHIoJ3RpdGxlJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTaW5nbGVTZWxlY3Rpb247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9tdWx0aXBsZScsW1xuICAnanF1ZXJ5JyxcbiAgJy4vYmFzZScsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBCYXNlU2VsZWN0aW9uLCBVdGlscykge1xuICBmdW5jdGlvbiBNdWx0aXBsZVNlbGVjdGlvbiAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBNdWx0aXBsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChNdWx0aXBsZVNlbGVjdGlvbiwgQmFzZVNlbGVjdGlvbik7XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHNlbGVjdGlvbiA9IE11bHRpcGxlU2VsZWN0aW9uLl9fc3VwZXJfXy5yZW5kZXIuY2FsbCh0aGlzKTtcblxuICAgICRzZWxlY3Rpb24uYWRkQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZScpO1xuXG4gICAgJHNlbGVjdGlvbi5odG1sKFxuICAgICAgJzx1bCBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiPjwvdWw+J1xuICAgICk7XG5cbiAgICByZXR1cm4gJHNlbGVjdGlvbjtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBNdWx0aXBsZVNlbGVjdGlvbi5fX3N1cGVyX18uYmluZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcigndG9nZ2xlJywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgICcuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiBpdCBpcyBkaXNhYmxlZFxuICAgICAgICBpZiAoc2VsZi5pc0Rpc2FibGVkKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJHJlbW92ZSA9ICQodGhpcyk7XG4gICAgICAgIHZhciAkc2VsZWN0aW9uID0gJHJlbW92ZS5wYXJlbnQoKTtcblxuICAgICAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJHNlbGVjdGlvblswXSwgJ2RhdGEnKTtcblxuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuICAgICRyZW5kZXJlZC5lbXB0eSgpO1xuICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5ID0gZnVuY3Rpb24gKGRhdGEsIGNvbnRhaW5lcikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlU2VsZWN0aW9uJyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgcmV0dXJuIGVzY2FwZU1hcmt1cCh0ZW1wbGF0ZShkYXRhLCBjb250YWluZXIpKTtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuc2VsZWN0aW9uQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkY29udGFpbmVyID0gJChcbiAgICAgICc8bGkgY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlXCI+JyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj4nICtcbiAgICAgICAgICAnJnRpbWVzOycgK1xuICAgICAgICAnPC9zcGFuPicgK1xuICAgICAgJzwvbGk+J1xuICAgICk7XG5cbiAgICByZXR1cm4gJGNvbnRhaW5lcjtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJHNlbGVjdGlvbnMgPSBbXTtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IGRhdGFbZF07XG5cbiAgICAgIHZhciAkc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb25Db250YWluZXIoKTtcbiAgICAgIHZhciBmb3JtYXR0ZWQgPSB0aGlzLmRpc3BsYXkoc2VsZWN0aW9uLCAkc2VsZWN0aW9uKTtcblxuICAgICAgJHNlbGVjdGlvbi5hcHBlbmQoZm9ybWF0dGVkKTtcblxuICAgICAgdmFyIHRpdGxlID0gc2VsZWN0aW9uLnRpdGxlIHx8IHNlbGVjdGlvbi50ZXh0O1xuXG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgJHNlbGVjdGlvbi5hdHRyKCd0aXRsZScsIHRpdGxlKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuU3RvcmVEYXRhKCRzZWxlY3Rpb25bMF0sICdkYXRhJywgc2VsZWN0aW9uKTtcblxuICAgICAgJHNlbGVjdGlvbnMucHVzaCgkc2VsZWN0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcblxuICAgIFV0aWxzLmFwcGVuZE1hbnkoJHJlbmRlcmVkLCAkc2VsZWN0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIE11bHRpcGxlU2VsZWN0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vcGxhY2Vob2xkZXInLFtcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKFV0aWxzKSB7XG4gIGZ1bmN0aW9uIFBsYWNlaG9sZGVyIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubm9ybWFsaXplUGxhY2Vob2xkZXIob3B0aW9ucy5nZXQoJ3BsYWNlaG9sZGVyJykpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgUGxhY2Vob2xkZXIucHJvdG90eXBlLm5vcm1hbGl6ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKF8sIHBsYWNlaG9sZGVyKSB7XG4gICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0ge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfTtcblxuICBQbGFjZWhvbGRlci5wcm90b3R5cGUuY3JlYXRlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwbGFjZWhvbGRlcikge1xuICAgIHZhciAkcGxhY2Vob2xkZXIgPSB0aGlzLnNlbGVjdGlvbkNvbnRhaW5lcigpO1xuXG4gICAgJHBsYWNlaG9sZGVyLmh0bWwodGhpcy5kaXNwbGF5KHBsYWNlaG9sZGVyKSk7XG4gICAgJHBsYWNlaG9sZGVyLmFkZENsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXInKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZScpO1xuXG4gICAgcmV0dXJuICRwbGFjZWhvbGRlcjtcbiAgfTtcblxuICBQbGFjZWhvbGRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIHZhciBzaW5nbGVQbGFjZWhvbGRlciA9IChcbiAgICAgIGRhdGEubGVuZ3RoID09IDEgJiYgZGF0YVswXS5pZCAhPSB0aGlzLnBsYWNlaG9sZGVyLmlkXG4gICAgKTtcbiAgICB2YXIgbXVsdGlwbGVTZWxlY3Rpb25zID0gZGF0YS5sZW5ndGggPiAxO1xuXG4gICAgaWYgKG11bHRpcGxlU2VsZWN0aW9ucyB8fCBzaW5nbGVQbGFjZWhvbGRlcikge1xuICAgICAgcmV0dXJuIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHZhciAkcGxhY2Vob2xkZXIgPSB0aGlzLmNyZWF0ZVBsYWNlaG9sZGVyKHRoaXMucGxhY2Vob2xkZXIpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKS5hcHBlbmQoJHBsYWNlaG9sZGVyKTtcbiAgfTtcblxuICByZXR1cm4gUGxhY2Vob2xkZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9hbGxvd0NsZWFyJyxbXG4gICdqcXVlcnknLFxuICAnLi4va2V5cycsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBLRVlTLCBVdGlscykge1xuICBmdW5jdGlvbiBBbGxvd0NsZWFyICgpIHsgfVxuXG4gIEFsbG93Q2xlYXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdTZWxlY3QyOiBUaGUgYGFsbG93Q2xlYXJgIG9wdGlvbiBzaG91bGQgYmUgdXNlZCBpbiBjb21iaW5hdGlvbiAnICtcbiAgICAgICAgICAnd2l0aCB0aGUgYHBsYWNlaG9sZGVyYCBvcHRpb24uJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignbW91c2Vkb3duJywgJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXInLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBzZWxmLl9oYW5kbGVDbGVhcihldnQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX2hhbmRsZUtleWJvYXJkQ2xlYXIoZXZ0LCBjb250YWluZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIEFsbG93Q2xlYXIucHJvdG90eXBlLl9oYW5kbGVDbGVhciA9IGZ1bmN0aW9uIChfLCBldnQpIHtcbiAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIGl0IGlzIGRpc2FibGVkXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRjbGVhciA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyJyk7XG5cbiAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIG5vdGhpbmcgaGFzIGJlZW4gc2VsZWN0ZWRcbiAgICBpZiAoJGNsZWFyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSgkY2xlYXJbMF0sICdkYXRhJyk7XG5cbiAgICB2YXIgcHJldmlvdXNWYWwgPSB0aGlzLiRlbGVtZW50LnZhbCgpO1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHRoaXMucGxhY2Vob2xkZXIuaWQpO1xuXG4gICAgdmFyIHVuc2VsZWN0RGF0YSA9IHtcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xuICAgIHRoaXMudHJpZ2dlcignY2xlYXInLCB1bnNlbGVjdERhdGEpO1xuICAgIGlmICh1bnNlbGVjdERhdGEucHJldmVudGVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnZhbChwcmV2aW91c1ZhbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICB1bnNlbGVjdERhdGEgPSB7XG4gICAgICAgIGRhdGE6IGRhdGFbZF1cbiAgICAgIH07XG5cbiAgICAgIC8vIFRyaWdnZXIgdGhlIGB1bnNlbGVjdGAgZXZlbnQsIHNvIHBlb3BsZSBjYW4gcHJldmVudCBpdCBmcm9tIGJlaW5nXG4gICAgICAvLyBjbGVhcmVkLlxuICAgICAgdGhpcy50cmlnZ2VyKCd1bnNlbGVjdCcsIHVuc2VsZWN0RGF0YSk7XG5cbiAgICAgIC8vIElmIHRoZSBldmVudCB3YXMgcHJldmVudGVkLCBkb24ndCBjbGVhciBpdCBvdXQuXG4gICAgICBpZiAodW5zZWxlY3REYXRhLnByZXZlbnRlZCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LnZhbChwcmV2aW91c1ZhbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3RvZ2dsZScsIHt9KTtcbiAgfTtcblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS5faGFuZGxlS2V5Ym9hcmRDbGVhciA9IGZ1bmN0aW9uIChfLCBldnQsIGNvbnRhaW5lcikge1xuICAgIGlmIChjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZ0LndoaWNoID09IEtFWVMuREVMRVRFIHx8IGV2dC53aGljaCA9PSBLRVlTLkJBQ0tTUEFDRSkge1xuICAgICAgdGhpcy5faGFuZGxlQ2xlYXIoZXZ0KTtcbiAgICB9XG4gIH07XG5cbiAgQWxsb3dDbGVhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuXG4gICAgaWYgKHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyJykubGVuZ3RoID4gMCB8fFxuICAgICAgICBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciByZW1vdmVBbGwgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQoJ3JlbW92ZUFsbEl0ZW1zJyk7XG5cbiAgICB2YXIgJHJlbW92ZSA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXJcIiB0aXRsZT1cIicgKyByZW1vdmVBbGwoKSArJ1wiPicgK1xuICAgICAgICAnJnRpbWVzOycgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcbiAgICBVdGlscy5TdG9yZURhdGEoJHJlbW92ZVswXSwgJ2RhdGEnLCBkYXRhKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykucHJlcGVuZCgkcmVtb3ZlKTtcbiAgfTtcblxuICByZXR1cm4gQWxsb3dDbGVhcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL3NlYXJjaCcsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL3V0aWxzJyxcbiAgJy4uL2tleXMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMsIEtFWVMpIHtcbiAgZnVuY3Rpb24gU2VhcmNoIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdmFyICRzZWFyY2ggPSAkKFxuICAgICAgJzxsaSBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1pbmxpbmVcIj4nICtcbiAgICAgICAgJzxpbnB1dCBjbGFzcz1cInNlbGVjdDItc2VhcmNoX19maWVsZFwiIHR5cGU9XCJzZWFyY2hcIiB0YWJpbmRleD1cIi0xXCInICtcbiAgICAgICAgJyBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiJyArXG4gICAgICAgICcgc3BlbGxjaGVjaz1cImZhbHNlXCIgcm9sZT1cInNlYXJjaGJveFwiIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiIC8+JyArXG4gICAgICAnPC9saT4nXG4gICAgKTtcblxuICAgIHRoaXMuJHNlYXJjaENvbnRhaW5lciA9ICRzZWFyY2g7XG4gICAgdGhpcy4kc2VhcmNoID0gJHNlYXJjaC5maW5kKCdpbnB1dCcpO1xuXG4gICAgdmFyICRyZW5kZXJlZCA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5fdHJhbnNmZXJUYWJJbmRleCgpO1xuXG4gICAgcmV0dXJuICRyZW5kZXJlZDtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcmVzdWx0c0lkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHRzJztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1jb250cm9scycsIHJlc3VsdHNJZCk7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2gudmFsKCcnKTtcbiAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZW5hYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICBzZWxmLl90cmFuc2ZlclRhYkluZGV4KCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Rpc2FibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2gucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIGlmIChwYXJhbXMuZGF0YS5fcmVzdWx0SWQpIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHBhcmFtcy5kYXRhLl9yZXN1bHRJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzaW4nLCAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2ZvY3VzJywgZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXNvdXQnLCAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9oYW5kbGVCbHVyKGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2tleWRvd24nLCAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHNlbGYudHJpZ2dlcigna2V5cHJlc3MnLCBldnQpO1xuXG4gICAgICBzZWxmLl9rZXlVcFByZXZlbnRlZCA9IGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcblxuICAgICAgdmFyIGtleSA9IGV2dC53aGljaDtcblxuICAgICAgaWYgKGtleSA9PT0gS0VZUy5CQUNLU1BBQ0UgJiYgc2VsZi4kc2VhcmNoLnZhbCgpID09PSAnJykge1xuICAgICAgICB2YXIgJHByZXZpb3VzQ2hvaWNlID0gc2VsZi4kc2VhcmNoQ29udGFpbmVyXG4gICAgICAgICAgLnByZXYoJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlJyk7XG5cbiAgICAgICAgaWYgKCRwcmV2aW91c0Nob2ljZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBVdGlscy5HZXREYXRhKCRwcmV2aW91c0Nob2ljZVswXSwgJ2RhdGEnKTtcblxuICAgICAgICAgIHNlbGYuc2VhcmNoUmVtb3ZlQ2hvaWNlKGl0ZW0pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignY2xpY2snLCAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoc2VsZi4kc2VhcmNoLnZhbCgpKSB7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRyeSB0byBkZXRlY3QgdGhlIElFIHZlcnNpb24gc2hvdWxkIHRoZSBgZG9jdW1lbnRNb2RlYCBwcm9wZXJ0eSB0aGF0XG4gICAgLy8gaXMgc3RvcmVkIG9uIHRoZSBkb2N1bWVudC4gVGhpcyBpcyBvbmx5IGltcGxlbWVudGVkIGluIElFIGFuZCBpc1xuICAgIC8vIHNsaWdodGx5IGNsZWFuZXIgdGhhbiBkb2luZyBhIHVzZXIgYWdlbnQgY2hlY2suXG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlIGluIEVkZ2UsIGJ1dCBFZGdlIGFsc28gZG9lc24ndCBoYXZlXG4gICAgLy8gdGhpcyBidWcuXG4gICAgdmFyIG1zaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gICAgdmFyIGRpc2FibGVJbnB1dEV2ZW50cyA9IG1zaWUgJiYgbXNpZSA8PSAxMTtcblxuICAgIC8vIFdvcmthcm91bmQgZm9yIGJyb3dzZXJzIHdoaWNoIGRvIG5vdCBzdXBwb3J0IHRoZSBgaW5wdXRgIGV2ZW50XG4gICAgLy8gVGhpcyB3aWxsIHByZXZlbnQgZG91YmxlLXRyaWdnZXJpbmcgb2YgZXZlbnRzIGZvciBicm93c2VycyB3aGljaCBzdXBwb3J0XG4gICAgLy8gYm90aCB0aGUgYGtleXVwYCBhbmQgYGlucHV0YCBldmVudHMuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKFxuICAgICAgJ2lucHV0LnNlYXJjaGNoZWNrJyxcbiAgICAgICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElFIHdpbGwgdHJpZ2dlciB0aGUgYGlucHV0YCBldmVudCB3aGVuIGEgcGxhY2Vob2xkZXIgaXMgdXNlZCBvbiBhXG4gICAgICAgIC8vIHNlYXJjaCBib3guIFRvIGdldCBhcm91bmQgdGhpcyBpc3N1ZSwgd2UgYXJlIGZvcmNlZCB0byBpZ25vcmUgYWxsXG4gICAgICAgIC8vIGBpbnB1dGAgZXZlbnRzIGluIElFIGFuZCBrZWVwIHVzaW5nIGBrZXl1cGAuXG4gICAgICAgIGlmIChkaXNhYmxlSW5wdXRFdmVudHMpIHtcbiAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24ub2ZmKCdpbnB1dC5zZWFyY2ggaW5wdXQuc2VhcmNoY2hlY2snKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbmJpbmQgdGhlIGR1cGxpY2F0ZWQgYGtleXVwYCBldmVudFxuICAgICAgICBzZWxmLiRzZWxlY3Rpb24ub2ZmKCdrZXl1cC5zZWFyY2gnKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKFxuICAgICAgJ2tleXVwLnNlYXJjaCBpbnB1dC5zZWFyY2gnLFxuICAgICAgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gSUUgd2lsbCB0cmlnZ2VyIHRoZSBgaW5wdXRgIGV2ZW50IHdoZW4gYSBwbGFjZWhvbGRlciBpcyB1c2VkIG9uIGFcbiAgICAgICAgLy8gc2VhcmNoIGJveC4gVG8gZ2V0IGFyb3VuZCB0aGlzIGlzc3VlLCB3ZSBhcmUgZm9yY2VkIHRvIGlnbm9yZSBhbGxcbiAgICAgICAgLy8gYGlucHV0YCBldmVudHMgaW4gSUUgYW5kIGtlZXAgdXNpbmcgYGtleXVwYC5cbiAgICAgICAgaWYgKGRpc2FibGVJbnB1dEV2ZW50cyAmJiBldnQudHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgIHNlbGYuJHNlbGVjdGlvbi5vZmYoJ2lucHV0LnNlYXJjaCBpbnB1dC5zZWFyY2hjaGVjaycpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXkgPSBldnQud2hpY2g7XG5cbiAgICAgICAgLy8gV2UgY2FuIGZyZWVseSBpZ25vcmUgZXZlbnRzIGZyb20gbW9kaWZpZXIga2V5c1xuICAgICAgICBpZiAoa2V5ID09IEtFWVMuU0hJRlQgfHwga2V5ID09IEtFWVMuQ1RSTCB8fCBrZXkgPT0gS0VZUy5BTFQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUYWJiaW5nIHdpbGwgYmUgaGFuZGxlZCBkdXJpbmcgdGhlIGBrZXlkb3duYCBwaGFzZVxuICAgICAgICBpZiAoa2V5ID09IEtFWVMuVEFCKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5oYW5kbGVTZWFyY2goZXZ0KTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHRyYW5zZmVyIHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgZnJvbSB0aGUgcmVuZGVyZWRcbiAgICogc2VsZWN0aW9uIHRvIHRoZSBzZWFyY2ggYm94LiBUaGlzIGFsbG93cyBmb3IgdGhlIHNlYXJjaCBib3ggdG8gYmUgdXNlZCBhc1xuICAgKiB0aGUgcHJpbWFyeSBmb2N1cyBpbnN0ZWFkIG9mIHRoZSBzZWxlY3Rpb24gY29udGFpbmVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgU2VhcmNoLnByb3RvdHlwZS5fdHJhbnNmZXJUYWJJbmRleCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB0aGlzLiRzZWFyY2guYXR0cigndGFiaW5kZXgnLCB0aGlzLiRzZWxlY3Rpb24uYXR0cigndGFiaW5kZXgnKSk7XG4gICAgdGhpcy4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5jcmVhdGVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBsYWNlaG9sZGVyKSB7XG4gICAgdGhpcy4kc2VhcmNoLmF0dHIoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIudGV4dCk7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgdmFyIHNlYXJjaEhhZEZvY3VzID0gdGhpcy4kc2VhcmNoWzBdID09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLiRzZWFyY2guYXR0cigncGxhY2Vob2xkZXInLCAnJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJylcbiAgICAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuJHNlYXJjaENvbnRhaW5lcik7XG5cbiAgICB0aGlzLnJlc2l6ZVNlYXJjaCgpO1xuICAgIGlmIChzZWFyY2hIYWRGb2N1cykge1xuICAgICAgdGhpcy4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfVxuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuaGFuZGxlU2VhcmNoID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzaXplU2VhcmNoKCk7XG5cbiAgICBpZiAoIXRoaXMuX2tleVVwUHJldmVudGVkKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLiRzZWFyY2gudmFsKCk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7XG4gICAgICAgIHRlcm06IGlucHV0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9rZXlVcFByZXZlbnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuc2VhcmNoUmVtb3ZlQ2hvaWNlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgaXRlbSkge1xuICAgIHRoaXMudHJpZ2dlcigndW5zZWxlY3QnLCB7XG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWFyY2gudmFsKGl0ZW0udGV4dCk7XG4gICAgdGhpcy5oYW5kbGVTZWFyY2goKTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnJlc2l6ZVNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRzZWFyY2guY3NzKCd3aWR0aCcsICcyNXB4Jyk7XG5cbiAgICB2YXIgd2lkdGggPSAnJztcblxuICAgIGlmICh0aGlzLiRzZWFyY2guYXR0cigncGxhY2Vob2xkZXInKSAhPT0gJycpIHtcbiAgICAgIHdpZHRoID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKS53aWR0aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWluaW11bVdpZHRoID0gdGhpcy4kc2VhcmNoLnZhbCgpLmxlbmd0aCArIDE7XG5cbiAgICAgIHdpZHRoID0gKG1pbmltdW1XaWR0aCAqIDAuNzUpICsgJ2VtJztcbiAgICB9XG5cbiAgICB0aGlzLiRzZWFyY2guY3NzKCd3aWR0aCcsIHdpZHRoKTtcbiAgfTtcblxuICByZXR1cm4gU2VhcmNoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vZXZlbnRSZWxheScsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgZnVuY3Rpb24gRXZlbnRSZWxheSAoKSB7IH1cblxuICBFdmVudFJlbGF5LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciByZWxheUV2ZW50cyA9IFtcbiAgICAgICdvcGVuJywgJ29wZW5pbmcnLFxuICAgICAgJ2Nsb3NlJywgJ2Nsb3NpbmcnLFxuICAgICAgJ3NlbGVjdCcsICdzZWxlY3RpbmcnLFxuICAgICAgJ3Vuc2VsZWN0JywgJ3Vuc2VsZWN0aW5nJyxcbiAgICAgICdjbGVhcicsICdjbGVhcmluZydcbiAgICBdO1xuXG4gICAgdmFyIHByZXZlbnRhYmxlRXZlbnRzID0gW1xuICAgICAgJ29wZW5pbmcnLCAnY2xvc2luZycsICdzZWxlY3RpbmcnLCAndW5zZWxlY3RpbmcnLCAnY2xlYXJpbmcnXG4gICAgXTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICAvLyBJZ25vcmUgZXZlbnRzIHRoYXQgc2hvdWxkIG5vdCBiZSByZWxheWVkXG4gICAgICBpZiAoJC5pbkFycmF5KG5hbWUsIHJlbGF5RXZlbnRzKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcGFyYW1ldGVycyBzaG91bGQgYWx3YXlzIGJlIGFuIG9iamVjdFxuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgICAvLyBHZW5lcmF0ZSB0aGUgalF1ZXJ5IGV2ZW50IGZvciB0aGUgU2VsZWN0MiBldmVudFxuICAgICAgdmFyIGV2dCA9ICQuRXZlbnQoJ3NlbGVjdDI6JyArIG5hbWUsIHtcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoZXZ0KTtcblxuICAgICAgLy8gT25seSBoYW5kbGUgcHJldmVudGFibGUgZXZlbnRzIGlmIGl0IHdhcyBvbmVcbiAgICAgIGlmICgkLmluQXJyYXkobmFtZSwgcHJldmVudGFibGVFdmVudHMpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5wcmV2ZW50ZWQgPSBldnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEV2ZW50UmVsYXk7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3RyYW5zbGF0aW9uJyxbXG4gICdqcXVlcnknLFxuICAncmVxdWlyZSdcbl0sIGZ1bmN0aW9uICgkLCByZXF1aXJlKSB7XG4gIGZ1bmN0aW9uIFRyYW5zbGF0aW9uIChkaWN0KSB7XG4gICAgdGhpcy5kaWN0ID0gZGljdCB8fCB7fTtcbiAgfVxuXG4gIFRyYW5zbGF0aW9uLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGljdDtcbiAgfTtcblxuICBUcmFuc2xhdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0aGlzLmRpY3Rba2V5XTtcbiAgfTtcblxuICBUcmFuc2xhdGlvbi5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKHRyYW5zbGF0aW9uKSB7XG4gICAgdGhpcy5kaWN0ID0gJC5leHRlbmQoe30sIHRyYW5zbGF0aW9uLmFsbCgpLCB0aGlzLmRpY3QpO1xuICB9O1xuXG4gIC8vIFN0YXRpYyBmdW5jdGlvbnNcblxuICBUcmFuc2xhdGlvbi5fY2FjaGUgPSB7fTtcblxuICBUcmFuc2xhdGlvbi5sb2FkUGF0aCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgaWYgKCEocGF0aCBpbiBUcmFuc2xhdGlvbi5fY2FjaGUpKSB7XG4gICAgICB2YXIgdHJhbnNsYXRpb25zID0gcmVxdWlyZShwYXRoKTtcblxuICAgICAgVHJhbnNsYXRpb24uX2NhY2hlW3BhdGhdID0gdHJhbnNsYXRpb25zO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb24oVHJhbnNsYXRpb24uX2NhY2hlW3BhdGhdKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNsYXRpb247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RpYWNyaXRpY3MnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICB2YXIgZGlhY3JpdGljcyA9IHtcbiAgICAnXFx1MjRCNic6ICdBJyxcbiAgICAnXFx1RkYyMSc6ICdBJyxcbiAgICAnXFx1MDBDMCc6ICdBJyxcbiAgICAnXFx1MDBDMSc6ICdBJyxcbiAgICAnXFx1MDBDMic6ICdBJyxcbiAgICAnXFx1MUVBNic6ICdBJyxcbiAgICAnXFx1MUVBNCc6ICdBJyxcbiAgICAnXFx1MUVBQSc6ICdBJyxcbiAgICAnXFx1MUVBOCc6ICdBJyxcbiAgICAnXFx1MDBDMyc6ICdBJyxcbiAgICAnXFx1MDEwMCc6ICdBJyxcbiAgICAnXFx1MDEwMic6ICdBJyxcbiAgICAnXFx1MUVCMCc6ICdBJyxcbiAgICAnXFx1MUVBRSc6ICdBJyxcbiAgICAnXFx1MUVCNCc6ICdBJyxcbiAgICAnXFx1MUVCMic6ICdBJyxcbiAgICAnXFx1MDIyNic6ICdBJyxcbiAgICAnXFx1MDFFMCc6ICdBJyxcbiAgICAnXFx1MDBDNCc6ICdBJyxcbiAgICAnXFx1MDFERSc6ICdBJyxcbiAgICAnXFx1MUVBMic6ICdBJyxcbiAgICAnXFx1MDBDNSc6ICdBJyxcbiAgICAnXFx1MDFGQSc6ICdBJyxcbiAgICAnXFx1MDFDRCc6ICdBJyxcbiAgICAnXFx1MDIwMCc6ICdBJyxcbiAgICAnXFx1MDIwMic6ICdBJyxcbiAgICAnXFx1MUVBMCc6ICdBJyxcbiAgICAnXFx1MUVBQyc6ICdBJyxcbiAgICAnXFx1MUVCNic6ICdBJyxcbiAgICAnXFx1MUUwMCc6ICdBJyxcbiAgICAnXFx1MDEwNCc6ICdBJyxcbiAgICAnXFx1MDIzQSc6ICdBJyxcbiAgICAnXFx1MkM2Ric6ICdBJyxcbiAgICAnXFx1QTczMic6ICdBQScsXG4gICAgJ1xcdTAwQzYnOiAnQUUnLFxuICAgICdcXHUwMUZDJzogJ0FFJyxcbiAgICAnXFx1MDFFMic6ICdBRScsXG4gICAgJ1xcdUE3MzQnOiAnQU8nLFxuICAgICdcXHVBNzM2JzogJ0FVJyxcbiAgICAnXFx1QTczOCc6ICdBVicsXG4gICAgJ1xcdUE3M0EnOiAnQVYnLFxuICAgICdcXHVBNzNDJzogJ0FZJyxcbiAgICAnXFx1MjRCNyc6ICdCJyxcbiAgICAnXFx1RkYyMic6ICdCJyxcbiAgICAnXFx1MUUwMic6ICdCJyxcbiAgICAnXFx1MUUwNCc6ICdCJyxcbiAgICAnXFx1MUUwNic6ICdCJyxcbiAgICAnXFx1MDI0Myc6ICdCJyxcbiAgICAnXFx1MDE4Mic6ICdCJyxcbiAgICAnXFx1MDE4MSc6ICdCJyxcbiAgICAnXFx1MjRCOCc6ICdDJyxcbiAgICAnXFx1RkYyMyc6ICdDJyxcbiAgICAnXFx1MDEwNic6ICdDJyxcbiAgICAnXFx1MDEwOCc6ICdDJyxcbiAgICAnXFx1MDEwQSc6ICdDJyxcbiAgICAnXFx1MDEwQyc6ICdDJyxcbiAgICAnXFx1MDBDNyc6ICdDJyxcbiAgICAnXFx1MUUwOCc6ICdDJyxcbiAgICAnXFx1MDE4Nyc6ICdDJyxcbiAgICAnXFx1MDIzQic6ICdDJyxcbiAgICAnXFx1QTczRSc6ICdDJyxcbiAgICAnXFx1MjRCOSc6ICdEJyxcbiAgICAnXFx1RkYyNCc6ICdEJyxcbiAgICAnXFx1MUUwQSc6ICdEJyxcbiAgICAnXFx1MDEwRSc6ICdEJyxcbiAgICAnXFx1MUUwQyc6ICdEJyxcbiAgICAnXFx1MUUxMCc6ICdEJyxcbiAgICAnXFx1MUUxMic6ICdEJyxcbiAgICAnXFx1MUUwRSc6ICdEJyxcbiAgICAnXFx1MDExMCc6ICdEJyxcbiAgICAnXFx1MDE4Qic6ICdEJyxcbiAgICAnXFx1MDE4QSc6ICdEJyxcbiAgICAnXFx1MDE4OSc6ICdEJyxcbiAgICAnXFx1QTc3OSc6ICdEJyxcbiAgICAnXFx1MDFGMSc6ICdEWicsXG4gICAgJ1xcdTAxQzQnOiAnRFonLFxuICAgICdcXHUwMUYyJzogJ0R6JyxcbiAgICAnXFx1MDFDNSc6ICdEeicsXG4gICAgJ1xcdTI0QkEnOiAnRScsXG4gICAgJ1xcdUZGMjUnOiAnRScsXG4gICAgJ1xcdTAwQzgnOiAnRScsXG4gICAgJ1xcdTAwQzknOiAnRScsXG4gICAgJ1xcdTAwQ0EnOiAnRScsXG4gICAgJ1xcdTFFQzAnOiAnRScsXG4gICAgJ1xcdTFFQkUnOiAnRScsXG4gICAgJ1xcdTFFQzQnOiAnRScsXG4gICAgJ1xcdTFFQzInOiAnRScsXG4gICAgJ1xcdTFFQkMnOiAnRScsXG4gICAgJ1xcdTAxMTInOiAnRScsXG4gICAgJ1xcdTFFMTQnOiAnRScsXG4gICAgJ1xcdTFFMTYnOiAnRScsXG4gICAgJ1xcdTAxMTQnOiAnRScsXG4gICAgJ1xcdTAxMTYnOiAnRScsXG4gICAgJ1xcdTAwQ0InOiAnRScsXG4gICAgJ1xcdTFFQkEnOiAnRScsXG4gICAgJ1xcdTAxMUEnOiAnRScsXG4gICAgJ1xcdTAyMDQnOiAnRScsXG4gICAgJ1xcdTAyMDYnOiAnRScsXG4gICAgJ1xcdTFFQjgnOiAnRScsXG4gICAgJ1xcdTFFQzYnOiAnRScsXG4gICAgJ1xcdTAyMjgnOiAnRScsXG4gICAgJ1xcdTFFMUMnOiAnRScsXG4gICAgJ1xcdTAxMTgnOiAnRScsXG4gICAgJ1xcdTFFMTgnOiAnRScsXG4gICAgJ1xcdTFFMUEnOiAnRScsXG4gICAgJ1xcdTAxOTAnOiAnRScsXG4gICAgJ1xcdTAxOEUnOiAnRScsXG4gICAgJ1xcdTI0QkInOiAnRicsXG4gICAgJ1xcdUZGMjYnOiAnRicsXG4gICAgJ1xcdTFFMUUnOiAnRicsXG4gICAgJ1xcdTAxOTEnOiAnRicsXG4gICAgJ1xcdUE3N0InOiAnRicsXG4gICAgJ1xcdTI0QkMnOiAnRycsXG4gICAgJ1xcdUZGMjcnOiAnRycsXG4gICAgJ1xcdTAxRjQnOiAnRycsXG4gICAgJ1xcdTAxMUMnOiAnRycsXG4gICAgJ1xcdTFFMjAnOiAnRycsXG4gICAgJ1xcdTAxMUUnOiAnRycsXG4gICAgJ1xcdTAxMjAnOiAnRycsXG4gICAgJ1xcdTAxRTYnOiAnRycsXG4gICAgJ1xcdTAxMjInOiAnRycsXG4gICAgJ1xcdTAxRTQnOiAnRycsXG4gICAgJ1xcdTAxOTMnOiAnRycsXG4gICAgJ1xcdUE3QTAnOiAnRycsXG4gICAgJ1xcdUE3N0QnOiAnRycsXG4gICAgJ1xcdUE3N0UnOiAnRycsXG4gICAgJ1xcdTI0QkQnOiAnSCcsXG4gICAgJ1xcdUZGMjgnOiAnSCcsXG4gICAgJ1xcdTAxMjQnOiAnSCcsXG4gICAgJ1xcdTFFMjInOiAnSCcsXG4gICAgJ1xcdTFFMjYnOiAnSCcsXG4gICAgJ1xcdTAyMUUnOiAnSCcsXG4gICAgJ1xcdTFFMjQnOiAnSCcsXG4gICAgJ1xcdTFFMjgnOiAnSCcsXG4gICAgJ1xcdTFFMkEnOiAnSCcsXG4gICAgJ1xcdTAxMjYnOiAnSCcsXG4gICAgJ1xcdTJDNjcnOiAnSCcsXG4gICAgJ1xcdTJDNzUnOiAnSCcsXG4gICAgJ1xcdUE3OEQnOiAnSCcsXG4gICAgJ1xcdTI0QkUnOiAnSScsXG4gICAgJ1xcdUZGMjknOiAnSScsXG4gICAgJ1xcdTAwQ0MnOiAnSScsXG4gICAgJ1xcdTAwQ0QnOiAnSScsXG4gICAgJ1xcdTAwQ0UnOiAnSScsXG4gICAgJ1xcdTAxMjgnOiAnSScsXG4gICAgJ1xcdTAxMkEnOiAnSScsXG4gICAgJ1xcdTAxMkMnOiAnSScsXG4gICAgJ1xcdTAxMzAnOiAnSScsXG4gICAgJ1xcdTAwQ0YnOiAnSScsXG4gICAgJ1xcdTFFMkUnOiAnSScsXG4gICAgJ1xcdTFFQzgnOiAnSScsXG4gICAgJ1xcdTAxQ0YnOiAnSScsXG4gICAgJ1xcdTAyMDgnOiAnSScsXG4gICAgJ1xcdTAyMEEnOiAnSScsXG4gICAgJ1xcdTFFQ0EnOiAnSScsXG4gICAgJ1xcdTAxMkUnOiAnSScsXG4gICAgJ1xcdTFFMkMnOiAnSScsXG4gICAgJ1xcdTAxOTcnOiAnSScsXG4gICAgJ1xcdTI0QkYnOiAnSicsXG4gICAgJ1xcdUZGMkEnOiAnSicsXG4gICAgJ1xcdTAxMzQnOiAnSicsXG4gICAgJ1xcdTAyNDgnOiAnSicsXG4gICAgJ1xcdTI0QzAnOiAnSycsXG4gICAgJ1xcdUZGMkInOiAnSycsXG4gICAgJ1xcdTFFMzAnOiAnSycsXG4gICAgJ1xcdTAxRTgnOiAnSycsXG4gICAgJ1xcdTFFMzInOiAnSycsXG4gICAgJ1xcdTAxMzYnOiAnSycsXG4gICAgJ1xcdTFFMzQnOiAnSycsXG4gICAgJ1xcdTAxOTgnOiAnSycsXG4gICAgJ1xcdTJDNjknOiAnSycsXG4gICAgJ1xcdUE3NDAnOiAnSycsXG4gICAgJ1xcdUE3NDInOiAnSycsXG4gICAgJ1xcdUE3NDQnOiAnSycsXG4gICAgJ1xcdUE3QTInOiAnSycsXG4gICAgJ1xcdTI0QzEnOiAnTCcsXG4gICAgJ1xcdUZGMkMnOiAnTCcsXG4gICAgJ1xcdTAxM0YnOiAnTCcsXG4gICAgJ1xcdTAxMzknOiAnTCcsXG4gICAgJ1xcdTAxM0QnOiAnTCcsXG4gICAgJ1xcdTFFMzYnOiAnTCcsXG4gICAgJ1xcdTFFMzgnOiAnTCcsXG4gICAgJ1xcdTAxM0InOiAnTCcsXG4gICAgJ1xcdTFFM0MnOiAnTCcsXG4gICAgJ1xcdTFFM0EnOiAnTCcsXG4gICAgJ1xcdTAxNDEnOiAnTCcsXG4gICAgJ1xcdTAyM0QnOiAnTCcsXG4gICAgJ1xcdTJDNjInOiAnTCcsXG4gICAgJ1xcdTJDNjAnOiAnTCcsXG4gICAgJ1xcdUE3NDgnOiAnTCcsXG4gICAgJ1xcdUE3NDYnOiAnTCcsXG4gICAgJ1xcdUE3ODAnOiAnTCcsXG4gICAgJ1xcdTAxQzcnOiAnTEonLFxuICAgICdcXHUwMUM4JzogJ0xqJyxcbiAgICAnXFx1MjRDMic6ICdNJyxcbiAgICAnXFx1RkYyRCc6ICdNJyxcbiAgICAnXFx1MUUzRSc6ICdNJyxcbiAgICAnXFx1MUU0MCc6ICdNJyxcbiAgICAnXFx1MUU0Mic6ICdNJyxcbiAgICAnXFx1MkM2RSc6ICdNJyxcbiAgICAnXFx1MDE5Qyc6ICdNJyxcbiAgICAnXFx1MjRDMyc6ICdOJyxcbiAgICAnXFx1RkYyRSc6ICdOJyxcbiAgICAnXFx1MDFGOCc6ICdOJyxcbiAgICAnXFx1MDE0Myc6ICdOJyxcbiAgICAnXFx1MDBEMSc6ICdOJyxcbiAgICAnXFx1MUU0NCc6ICdOJyxcbiAgICAnXFx1MDE0Nyc6ICdOJyxcbiAgICAnXFx1MUU0Nic6ICdOJyxcbiAgICAnXFx1MDE0NSc6ICdOJyxcbiAgICAnXFx1MUU0QSc6ICdOJyxcbiAgICAnXFx1MUU0OCc6ICdOJyxcbiAgICAnXFx1MDIyMCc6ICdOJyxcbiAgICAnXFx1MDE5RCc6ICdOJyxcbiAgICAnXFx1QTc5MCc6ICdOJyxcbiAgICAnXFx1QTdBNCc6ICdOJyxcbiAgICAnXFx1MDFDQSc6ICdOSicsXG4gICAgJ1xcdTAxQ0InOiAnTmonLFxuICAgICdcXHUyNEM0JzogJ08nLFxuICAgICdcXHVGRjJGJzogJ08nLFxuICAgICdcXHUwMEQyJzogJ08nLFxuICAgICdcXHUwMEQzJzogJ08nLFxuICAgICdcXHUwMEQ0JzogJ08nLFxuICAgICdcXHUxRUQyJzogJ08nLFxuICAgICdcXHUxRUQwJzogJ08nLFxuICAgICdcXHUxRUQ2JzogJ08nLFxuICAgICdcXHUxRUQ0JzogJ08nLFxuICAgICdcXHUwMEQ1JzogJ08nLFxuICAgICdcXHUxRTRDJzogJ08nLFxuICAgICdcXHUwMjJDJzogJ08nLFxuICAgICdcXHUxRTRFJzogJ08nLFxuICAgICdcXHUwMTRDJzogJ08nLFxuICAgICdcXHUxRTUwJzogJ08nLFxuICAgICdcXHUxRTUyJzogJ08nLFxuICAgICdcXHUwMTRFJzogJ08nLFxuICAgICdcXHUwMjJFJzogJ08nLFxuICAgICdcXHUwMjMwJzogJ08nLFxuICAgICdcXHUwMEQ2JzogJ08nLFxuICAgICdcXHUwMjJBJzogJ08nLFxuICAgICdcXHUxRUNFJzogJ08nLFxuICAgICdcXHUwMTUwJzogJ08nLFxuICAgICdcXHUwMUQxJzogJ08nLFxuICAgICdcXHUwMjBDJzogJ08nLFxuICAgICdcXHUwMjBFJzogJ08nLFxuICAgICdcXHUwMUEwJzogJ08nLFxuICAgICdcXHUxRURDJzogJ08nLFxuICAgICdcXHUxRURBJzogJ08nLFxuICAgICdcXHUxRUUwJzogJ08nLFxuICAgICdcXHUxRURFJzogJ08nLFxuICAgICdcXHUxRUUyJzogJ08nLFxuICAgICdcXHUxRUNDJzogJ08nLFxuICAgICdcXHUxRUQ4JzogJ08nLFxuICAgICdcXHUwMUVBJzogJ08nLFxuICAgICdcXHUwMUVDJzogJ08nLFxuICAgICdcXHUwMEQ4JzogJ08nLFxuICAgICdcXHUwMUZFJzogJ08nLFxuICAgICdcXHUwMTg2JzogJ08nLFxuICAgICdcXHUwMTlGJzogJ08nLFxuICAgICdcXHVBNzRBJzogJ08nLFxuICAgICdcXHVBNzRDJzogJ08nLFxuICAgICdcXHUwMTUyJzogJ09FJyxcbiAgICAnXFx1MDFBMic6ICdPSScsXG4gICAgJ1xcdUE3NEUnOiAnT08nLFxuICAgICdcXHUwMjIyJzogJ09VJyxcbiAgICAnXFx1MjRDNSc6ICdQJyxcbiAgICAnXFx1RkYzMCc6ICdQJyxcbiAgICAnXFx1MUU1NCc6ICdQJyxcbiAgICAnXFx1MUU1Nic6ICdQJyxcbiAgICAnXFx1MDFBNCc6ICdQJyxcbiAgICAnXFx1MkM2Myc6ICdQJyxcbiAgICAnXFx1QTc1MCc6ICdQJyxcbiAgICAnXFx1QTc1Mic6ICdQJyxcbiAgICAnXFx1QTc1NCc6ICdQJyxcbiAgICAnXFx1MjRDNic6ICdRJyxcbiAgICAnXFx1RkYzMSc6ICdRJyxcbiAgICAnXFx1QTc1Nic6ICdRJyxcbiAgICAnXFx1QTc1OCc6ICdRJyxcbiAgICAnXFx1MDI0QSc6ICdRJyxcbiAgICAnXFx1MjRDNyc6ICdSJyxcbiAgICAnXFx1RkYzMic6ICdSJyxcbiAgICAnXFx1MDE1NCc6ICdSJyxcbiAgICAnXFx1MUU1OCc6ICdSJyxcbiAgICAnXFx1MDE1OCc6ICdSJyxcbiAgICAnXFx1MDIxMCc6ICdSJyxcbiAgICAnXFx1MDIxMic6ICdSJyxcbiAgICAnXFx1MUU1QSc6ICdSJyxcbiAgICAnXFx1MUU1Qyc6ICdSJyxcbiAgICAnXFx1MDE1Nic6ICdSJyxcbiAgICAnXFx1MUU1RSc6ICdSJyxcbiAgICAnXFx1MDI0Qyc6ICdSJyxcbiAgICAnXFx1MkM2NCc6ICdSJyxcbiAgICAnXFx1QTc1QSc6ICdSJyxcbiAgICAnXFx1QTdBNic6ICdSJyxcbiAgICAnXFx1QTc4Mic6ICdSJyxcbiAgICAnXFx1MjRDOCc6ICdTJyxcbiAgICAnXFx1RkYzMyc6ICdTJyxcbiAgICAnXFx1MUU5RSc6ICdTJyxcbiAgICAnXFx1MDE1QSc6ICdTJyxcbiAgICAnXFx1MUU2NCc6ICdTJyxcbiAgICAnXFx1MDE1Qyc6ICdTJyxcbiAgICAnXFx1MUU2MCc6ICdTJyxcbiAgICAnXFx1MDE2MCc6ICdTJyxcbiAgICAnXFx1MUU2Nic6ICdTJyxcbiAgICAnXFx1MUU2Mic6ICdTJyxcbiAgICAnXFx1MUU2OCc6ICdTJyxcbiAgICAnXFx1MDIxOCc6ICdTJyxcbiAgICAnXFx1MDE1RSc6ICdTJyxcbiAgICAnXFx1MkM3RSc6ICdTJyxcbiAgICAnXFx1QTdBOCc6ICdTJyxcbiAgICAnXFx1QTc4NCc6ICdTJyxcbiAgICAnXFx1MjRDOSc6ICdUJyxcbiAgICAnXFx1RkYzNCc6ICdUJyxcbiAgICAnXFx1MUU2QSc6ICdUJyxcbiAgICAnXFx1MDE2NCc6ICdUJyxcbiAgICAnXFx1MUU2Qyc6ICdUJyxcbiAgICAnXFx1MDIxQSc6ICdUJyxcbiAgICAnXFx1MDE2Mic6ICdUJyxcbiAgICAnXFx1MUU3MCc6ICdUJyxcbiAgICAnXFx1MUU2RSc6ICdUJyxcbiAgICAnXFx1MDE2Nic6ICdUJyxcbiAgICAnXFx1MDFBQyc6ICdUJyxcbiAgICAnXFx1MDFBRSc6ICdUJyxcbiAgICAnXFx1MDIzRSc6ICdUJyxcbiAgICAnXFx1QTc4Nic6ICdUJyxcbiAgICAnXFx1QTcyOCc6ICdUWicsXG4gICAgJ1xcdTI0Q0EnOiAnVScsXG4gICAgJ1xcdUZGMzUnOiAnVScsXG4gICAgJ1xcdTAwRDknOiAnVScsXG4gICAgJ1xcdTAwREEnOiAnVScsXG4gICAgJ1xcdTAwREInOiAnVScsXG4gICAgJ1xcdTAxNjgnOiAnVScsXG4gICAgJ1xcdTFFNzgnOiAnVScsXG4gICAgJ1xcdTAxNkEnOiAnVScsXG4gICAgJ1xcdTFFN0EnOiAnVScsXG4gICAgJ1xcdTAxNkMnOiAnVScsXG4gICAgJ1xcdTAwREMnOiAnVScsXG4gICAgJ1xcdTAxREInOiAnVScsXG4gICAgJ1xcdTAxRDcnOiAnVScsXG4gICAgJ1xcdTAxRDUnOiAnVScsXG4gICAgJ1xcdTAxRDknOiAnVScsXG4gICAgJ1xcdTFFRTYnOiAnVScsXG4gICAgJ1xcdTAxNkUnOiAnVScsXG4gICAgJ1xcdTAxNzAnOiAnVScsXG4gICAgJ1xcdTAxRDMnOiAnVScsXG4gICAgJ1xcdTAyMTQnOiAnVScsXG4gICAgJ1xcdTAyMTYnOiAnVScsXG4gICAgJ1xcdTAxQUYnOiAnVScsXG4gICAgJ1xcdTFFRUEnOiAnVScsXG4gICAgJ1xcdTFFRTgnOiAnVScsXG4gICAgJ1xcdTFFRUUnOiAnVScsXG4gICAgJ1xcdTFFRUMnOiAnVScsXG4gICAgJ1xcdTFFRjAnOiAnVScsXG4gICAgJ1xcdTFFRTQnOiAnVScsXG4gICAgJ1xcdTFFNzInOiAnVScsXG4gICAgJ1xcdTAxNzInOiAnVScsXG4gICAgJ1xcdTFFNzYnOiAnVScsXG4gICAgJ1xcdTFFNzQnOiAnVScsXG4gICAgJ1xcdTAyNDQnOiAnVScsXG4gICAgJ1xcdTI0Q0InOiAnVicsXG4gICAgJ1xcdUZGMzYnOiAnVicsXG4gICAgJ1xcdTFFN0MnOiAnVicsXG4gICAgJ1xcdTFFN0UnOiAnVicsXG4gICAgJ1xcdTAxQjInOiAnVicsXG4gICAgJ1xcdUE3NUUnOiAnVicsXG4gICAgJ1xcdTAyNDUnOiAnVicsXG4gICAgJ1xcdUE3NjAnOiAnVlknLFxuICAgICdcXHUyNENDJzogJ1cnLFxuICAgICdcXHVGRjM3JzogJ1cnLFxuICAgICdcXHUxRTgwJzogJ1cnLFxuICAgICdcXHUxRTgyJzogJ1cnLFxuICAgICdcXHUwMTc0JzogJ1cnLFxuICAgICdcXHUxRTg2JzogJ1cnLFxuICAgICdcXHUxRTg0JzogJ1cnLFxuICAgICdcXHUxRTg4JzogJ1cnLFxuICAgICdcXHUyQzcyJzogJ1cnLFxuICAgICdcXHUyNENEJzogJ1gnLFxuICAgICdcXHVGRjM4JzogJ1gnLFxuICAgICdcXHUxRThBJzogJ1gnLFxuICAgICdcXHUxRThDJzogJ1gnLFxuICAgICdcXHUyNENFJzogJ1knLFxuICAgICdcXHVGRjM5JzogJ1knLFxuICAgICdcXHUxRUYyJzogJ1knLFxuICAgICdcXHUwMEREJzogJ1knLFxuICAgICdcXHUwMTc2JzogJ1knLFxuICAgICdcXHUxRUY4JzogJ1knLFxuICAgICdcXHUwMjMyJzogJ1knLFxuICAgICdcXHUxRThFJzogJ1knLFxuICAgICdcXHUwMTc4JzogJ1knLFxuICAgICdcXHUxRUY2JzogJ1knLFxuICAgICdcXHUxRUY0JzogJ1knLFxuICAgICdcXHUwMUIzJzogJ1knLFxuICAgICdcXHUwMjRFJzogJ1knLFxuICAgICdcXHUxRUZFJzogJ1knLFxuICAgICdcXHUyNENGJzogJ1onLFxuICAgICdcXHVGRjNBJzogJ1onLFxuICAgICdcXHUwMTc5JzogJ1onLFxuICAgICdcXHUxRTkwJzogJ1onLFxuICAgICdcXHUwMTdCJzogJ1onLFxuICAgICdcXHUwMTdEJzogJ1onLFxuICAgICdcXHUxRTkyJzogJ1onLFxuICAgICdcXHUxRTk0JzogJ1onLFxuICAgICdcXHUwMUI1JzogJ1onLFxuICAgICdcXHUwMjI0JzogJ1onLFxuICAgICdcXHUyQzdGJzogJ1onLFxuICAgICdcXHUyQzZCJzogJ1onLFxuICAgICdcXHVBNzYyJzogJ1onLFxuICAgICdcXHUyNEQwJzogJ2EnLFxuICAgICdcXHVGRjQxJzogJ2EnLFxuICAgICdcXHUxRTlBJzogJ2EnLFxuICAgICdcXHUwMEUwJzogJ2EnLFxuICAgICdcXHUwMEUxJzogJ2EnLFxuICAgICdcXHUwMEUyJzogJ2EnLFxuICAgICdcXHUxRUE3JzogJ2EnLFxuICAgICdcXHUxRUE1JzogJ2EnLFxuICAgICdcXHUxRUFCJzogJ2EnLFxuICAgICdcXHUxRUE5JzogJ2EnLFxuICAgICdcXHUwMEUzJzogJ2EnLFxuICAgICdcXHUwMTAxJzogJ2EnLFxuICAgICdcXHUwMTAzJzogJ2EnLFxuICAgICdcXHUxRUIxJzogJ2EnLFxuICAgICdcXHUxRUFGJzogJ2EnLFxuICAgICdcXHUxRUI1JzogJ2EnLFxuICAgICdcXHUxRUIzJzogJ2EnLFxuICAgICdcXHUwMjI3JzogJ2EnLFxuICAgICdcXHUwMUUxJzogJ2EnLFxuICAgICdcXHUwMEU0JzogJ2EnLFxuICAgICdcXHUwMURGJzogJ2EnLFxuICAgICdcXHUxRUEzJzogJ2EnLFxuICAgICdcXHUwMEU1JzogJ2EnLFxuICAgICdcXHUwMUZCJzogJ2EnLFxuICAgICdcXHUwMUNFJzogJ2EnLFxuICAgICdcXHUwMjAxJzogJ2EnLFxuICAgICdcXHUwMjAzJzogJ2EnLFxuICAgICdcXHUxRUExJzogJ2EnLFxuICAgICdcXHUxRUFEJzogJ2EnLFxuICAgICdcXHUxRUI3JzogJ2EnLFxuICAgICdcXHUxRTAxJzogJ2EnLFxuICAgICdcXHUwMTA1JzogJ2EnLFxuICAgICdcXHUyQzY1JzogJ2EnLFxuICAgICdcXHUwMjUwJzogJ2EnLFxuICAgICdcXHVBNzMzJzogJ2FhJyxcbiAgICAnXFx1MDBFNic6ICdhZScsXG4gICAgJ1xcdTAxRkQnOiAnYWUnLFxuICAgICdcXHUwMUUzJzogJ2FlJyxcbiAgICAnXFx1QTczNSc6ICdhbycsXG4gICAgJ1xcdUE3MzcnOiAnYXUnLFxuICAgICdcXHVBNzM5JzogJ2F2JyxcbiAgICAnXFx1QTczQic6ICdhdicsXG4gICAgJ1xcdUE3M0QnOiAnYXknLFxuICAgICdcXHUyNEQxJzogJ2InLFxuICAgICdcXHVGRjQyJzogJ2InLFxuICAgICdcXHUxRTAzJzogJ2InLFxuICAgICdcXHUxRTA1JzogJ2InLFxuICAgICdcXHUxRTA3JzogJ2InLFxuICAgICdcXHUwMTgwJzogJ2InLFxuICAgICdcXHUwMTgzJzogJ2InLFxuICAgICdcXHUwMjUzJzogJ2InLFxuICAgICdcXHUyNEQyJzogJ2MnLFxuICAgICdcXHVGRjQzJzogJ2MnLFxuICAgICdcXHUwMTA3JzogJ2MnLFxuICAgICdcXHUwMTA5JzogJ2MnLFxuICAgICdcXHUwMTBCJzogJ2MnLFxuICAgICdcXHUwMTBEJzogJ2MnLFxuICAgICdcXHUwMEU3JzogJ2MnLFxuICAgICdcXHUxRTA5JzogJ2MnLFxuICAgICdcXHUwMTg4JzogJ2MnLFxuICAgICdcXHUwMjNDJzogJ2MnLFxuICAgICdcXHVBNzNGJzogJ2MnLFxuICAgICdcXHUyMTg0JzogJ2MnLFxuICAgICdcXHUyNEQzJzogJ2QnLFxuICAgICdcXHVGRjQ0JzogJ2QnLFxuICAgICdcXHUxRTBCJzogJ2QnLFxuICAgICdcXHUwMTBGJzogJ2QnLFxuICAgICdcXHUxRTBEJzogJ2QnLFxuICAgICdcXHUxRTExJzogJ2QnLFxuICAgICdcXHUxRTEzJzogJ2QnLFxuICAgICdcXHUxRTBGJzogJ2QnLFxuICAgICdcXHUwMTExJzogJ2QnLFxuICAgICdcXHUwMThDJzogJ2QnLFxuICAgICdcXHUwMjU2JzogJ2QnLFxuICAgICdcXHUwMjU3JzogJ2QnLFxuICAgICdcXHVBNzdBJzogJ2QnLFxuICAgICdcXHUwMUYzJzogJ2R6JyxcbiAgICAnXFx1MDFDNic6ICdkeicsXG4gICAgJ1xcdTI0RDQnOiAnZScsXG4gICAgJ1xcdUZGNDUnOiAnZScsXG4gICAgJ1xcdTAwRTgnOiAnZScsXG4gICAgJ1xcdTAwRTknOiAnZScsXG4gICAgJ1xcdTAwRUEnOiAnZScsXG4gICAgJ1xcdTFFQzEnOiAnZScsXG4gICAgJ1xcdTFFQkYnOiAnZScsXG4gICAgJ1xcdTFFQzUnOiAnZScsXG4gICAgJ1xcdTFFQzMnOiAnZScsXG4gICAgJ1xcdTFFQkQnOiAnZScsXG4gICAgJ1xcdTAxMTMnOiAnZScsXG4gICAgJ1xcdTFFMTUnOiAnZScsXG4gICAgJ1xcdTFFMTcnOiAnZScsXG4gICAgJ1xcdTAxMTUnOiAnZScsXG4gICAgJ1xcdTAxMTcnOiAnZScsXG4gICAgJ1xcdTAwRUInOiAnZScsXG4gICAgJ1xcdTFFQkInOiAnZScsXG4gICAgJ1xcdTAxMUInOiAnZScsXG4gICAgJ1xcdTAyMDUnOiAnZScsXG4gICAgJ1xcdTAyMDcnOiAnZScsXG4gICAgJ1xcdTFFQjknOiAnZScsXG4gICAgJ1xcdTFFQzcnOiAnZScsXG4gICAgJ1xcdTAyMjknOiAnZScsXG4gICAgJ1xcdTFFMUQnOiAnZScsXG4gICAgJ1xcdTAxMTknOiAnZScsXG4gICAgJ1xcdTFFMTknOiAnZScsXG4gICAgJ1xcdTFFMUInOiAnZScsXG4gICAgJ1xcdTAyNDcnOiAnZScsXG4gICAgJ1xcdTAyNUInOiAnZScsXG4gICAgJ1xcdTAxREQnOiAnZScsXG4gICAgJ1xcdTI0RDUnOiAnZicsXG4gICAgJ1xcdUZGNDYnOiAnZicsXG4gICAgJ1xcdTFFMUYnOiAnZicsXG4gICAgJ1xcdTAxOTInOiAnZicsXG4gICAgJ1xcdUE3N0MnOiAnZicsXG4gICAgJ1xcdTI0RDYnOiAnZycsXG4gICAgJ1xcdUZGNDcnOiAnZycsXG4gICAgJ1xcdTAxRjUnOiAnZycsXG4gICAgJ1xcdTAxMUQnOiAnZycsXG4gICAgJ1xcdTFFMjEnOiAnZycsXG4gICAgJ1xcdTAxMUYnOiAnZycsXG4gICAgJ1xcdTAxMjEnOiAnZycsXG4gICAgJ1xcdTAxRTcnOiAnZycsXG4gICAgJ1xcdTAxMjMnOiAnZycsXG4gICAgJ1xcdTAxRTUnOiAnZycsXG4gICAgJ1xcdTAyNjAnOiAnZycsXG4gICAgJ1xcdUE3QTEnOiAnZycsXG4gICAgJ1xcdTFENzknOiAnZycsXG4gICAgJ1xcdUE3N0YnOiAnZycsXG4gICAgJ1xcdTI0RDcnOiAnaCcsXG4gICAgJ1xcdUZGNDgnOiAnaCcsXG4gICAgJ1xcdTAxMjUnOiAnaCcsXG4gICAgJ1xcdTFFMjMnOiAnaCcsXG4gICAgJ1xcdTFFMjcnOiAnaCcsXG4gICAgJ1xcdTAyMUYnOiAnaCcsXG4gICAgJ1xcdTFFMjUnOiAnaCcsXG4gICAgJ1xcdTFFMjknOiAnaCcsXG4gICAgJ1xcdTFFMkInOiAnaCcsXG4gICAgJ1xcdTFFOTYnOiAnaCcsXG4gICAgJ1xcdTAxMjcnOiAnaCcsXG4gICAgJ1xcdTJDNjgnOiAnaCcsXG4gICAgJ1xcdTJDNzYnOiAnaCcsXG4gICAgJ1xcdTAyNjUnOiAnaCcsXG4gICAgJ1xcdTAxOTUnOiAnaHYnLFxuICAgICdcXHUyNEQ4JzogJ2knLFxuICAgICdcXHVGRjQ5JzogJ2knLFxuICAgICdcXHUwMEVDJzogJ2knLFxuICAgICdcXHUwMEVEJzogJ2knLFxuICAgICdcXHUwMEVFJzogJ2knLFxuICAgICdcXHUwMTI5JzogJ2knLFxuICAgICdcXHUwMTJCJzogJ2knLFxuICAgICdcXHUwMTJEJzogJ2knLFxuICAgICdcXHUwMEVGJzogJ2knLFxuICAgICdcXHUxRTJGJzogJ2knLFxuICAgICdcXHUxRUM5JzogJ2knLFxuICAgICdcXHUwMUQwJzogJ2knLFxuICAgICdcXHUwMjA5JzogJ2knLFxuICAgICdcXHUwMjBCJzogJ2knLFxuICAgICdcXHUxRUNCJzogJ2knLFxuICAgICdcXHUwMTJGJzogJ2knLFxuICAgICdcXHUxRTJEJzogJ2knLFxuICAgICdcXHUwMjY4JzogJ2knLFxuICAgICdcXHUwMTMxJzogJ2knLFxuICAgICdcXHUyNEQ5JzogJ2onLFxuICAgICdcXHVGRjRBJzogJ2onLFxuICAgICdcXHUwMTM1JzogJ2onLFxuICAgICdcXHUwMUYwJzogJ2onLFxuICAgICdcXHUwMjQ5JzogJ2onLFxuICAgICdcXHUyNERBJzogJ2snLFxuICAgICdcXHVGRjRCJzogJ2snLFxuICAgICdcXHUxRTMxJzogJ2snLFxuICAgICdcXHUwMUU5JzogJ2snLFxuICAgICdcXHUxRTMzJzogJ2snLFxuICAgICdcXHUwMTM3JzogJ2snLFxuICAgICdcXHUxRTM1JzogJ2snLFxuICAgICdcXHUwMTk5JzogJ2snLFxuICAgICdcXHUyQzZBJzogJ2snLFxuICAgICdcXHVBNzQxJzogJ2snLFxuICAgICdcXHVBNzQzJzogJ2snLFxuICAgICdcXHVBNzQ1JzogJ2snLFxuICAgICdcXHVBN0EzJzogJ2snLFxuICAgICdcXHUyNERCJzogJ2wnLFxuICAgICdcXHVGRjRDJzogJ2wnLFxuICAgICdcXHUwMTQwJzogJ2wnLFxuICAgICdcXHUwMTNBJzogJ2wnLFxuICAgICdcXHUwMTNFJzogJ2wnLFxuICAgICdcXHUxRTM3JzogJ2wnLFxuICAgICdcXHUxRTM5JzogJ2wnLFxuICAgICdcXHUwMTNDJzogJ2wnLFxuICAgICdcXHUxRTNEJzogJ2wnLFxuICAgICdcXHUxRTNCJzogJ2wnLFxuICAgICdcXHUwMTdGJzogJ2wnLFxuICAgICdcXHUwMTQyJzogJ2wnLFxuICAgICdcXHUwMTlBJzogJ2wnLFxuICAgICdcXHUwMjZCJzogJ2wnLFxuICAgICdcXHUyQzYxJzogJ2wnLFxuICAgICdcXHVBNzQ5JzogJ2wnLFxuICAgICdcXHVBNzgxJzogJ2wnLFxuICAgICdcXHVBNzQ3JzogJ2wnLFxuICAgICdcXHUwMUM5JzogJ2xqJyxcbiAgICAnXFx1MjREQyc6ICdtJyxcbiAgICAnXFx1RkY0RCc6ICdtJyxcbiAgICAnXFx1MUUzRic6ICdtJyxcbiAgICAnXFx1MUU0MSc6ICdtJyxcbiAgICAnXFx1MUU0Myc6ICdtJyxcbiAgICAnXFx1MDI3MSc6ICdtJyxcbiAgICAnXFx1MDI2Ric6ICdtJyxcbiAgICAnXFx1MjRERCc6ICduJyxcbiAgICAnXFx1RkY0RSc6ICduJyxcbiAgICAnXFx1MDFGOSc6ICduJyxcbiAgICAnXFx1MDE0NCc6ICduJyxcbiAgICAnXFx1MDBGMSc6ICduJyxcbiAgICAnXFx1MUU0NSc6ICduJyxcbiAgICAnXFx1MDE0OCc6ICduJyxcbiAgICAnXFx1MUU0Nyc6ICduJyxcbiAgICAnXFx1MDE0Nic6ICduJyxcbiAgICAnXFx1MUU0Qic6ICduJyxcbiAgICAnXFx1MUU0OSc6ICduJyxcbiAgICAnXFx1MDE5RSc6ICduJyxcbiAgICAnXFx1MDI3Mic6ICduJyxcbiAgICAnXFx1MDE0OSc6ICduJyxcbiAgICAnXFx1QTc5MSc6ICduJyxcbiAgICAnXFx1QTdBNSc6ICduJyxcbiAgICAnXFx1MDFDQyc6ICduaicsXG4gICAgJ1xcdTI0REUnOiAnbycsXG4gICAgJ1xcdUZGNEYnOiAnbycsXG4gICAgJ1xcdTAwRjInOiAnbycsXG4gICAgJ1xcdTAwRjMnOiAnbycsXG4gICAgJ1xcdTAwRjQnOiAnbycsXG4gICAgJ1xcdTFFRDMnOiAnbycsXG4gICAgJ1xcdTFFRDEnOiAnbycsXG4gICAgJ1xcdTFFRDcnOiAnbycsXG4gICAgJ1xcdTFFRDUnOiAnbycsXG4gICAgJ1xcdTAwRjUnOiAnbycsXG4gICAgJ1xcdTFFNEQnOiAnbycsXG4gICAgJ1xcdTAyMkQnOiAnbycsXG4gICAgJ1xcdTFFNEYnOiAnbycsXG4gICAgJ1xcdTAxNEQnOiAnbycsXG4gICAgJ1xcdTFFNTEnOiAnbycsXG4gICAgJ1xcdTFFNTMnOiAnbycsXG4gICAgJ1xcdTAxNEYnOiAnbycsXG4gICAgJ1xcdTAyMkYnOiAnbycsXG4gICAgJ1xcdTAyMzEnOiAnbycsXG4gICAgJ1xcdTAwRjYnOiAnbycsXG4gICAgJ1xcdTAyMkInOiAnbycsXG4gICAgJ1xcdTFFQ0YnOiAnbycsXG4gICAgJ1xcdTAxNTEnOiAnbycsXG4gICAgJ1xcdTAxRDInOiAnbycsXG4gICAgJ1xcdTAyMEQnOiAnbycsXG4gICAgJ1xcdTAyMEYnOiAnbycsXG4gICAgJ1xcdTAxQTEnOiAnbycsXG4gICAgJ1xcdTFFREQnOiAnbycsXG4gICAgJ1xcdTFFREInOiAnbycsXG4gICAgJ1xcdTFFRTEnOiAnbycsXG4gICAgJ1xcdTFFREYnOiAnbycsXG4gICAgJ1xcdTFFRTMnOiAnbycsXG4gICAgJ1xcdTFFQ0QnOiAnbycsXG4gICAgJ1xcdTFFRDknOiAnbycsXG4gICAgJ1xcdTAxRUInOiAnbycsXG4gICAgJ1xcdTAxRUQnOiAnbycsXG4gICAgJ1xcdTAwRjgnOiAnbycsXG4gICAgJ1xcdTAxRkYnOiAnbycsXG4gICAgJ1xcdTAyNTQnOiAnbycsXG4gICAgJ1xcdUE3NEInOiAnbycsXG4gICAgJ1xcdUE3NEQnOiAnbycsXG4gICAgJ1xcdTAyNzUnOiAnbycsXG4gICAgJ1xcdTAxNTMnOiAnb2UnLFxuICAgICdcXHUwMUEzJzogJ29pJyxcbiAgICAnXFx1MDIyMyc6ICdvdScsXG4gICAgJ1xcdUE3NEYnOiAnb28nLFxuICAgICdcXHUyNERGJzogJ3AnLFxuICAgICdcXHVGRjUwJzogJ3AnLFxuICAgICdcXHUxRTU1JzogJ3AnLFxuICAgICdcXHUxRTU3JzogJ3AnLFxuICAgICdcXHUwMUE1JzogJ3AnLFxuICAgICdcXHUxRDdEJzogJ3AnLFxuICAgICdcXHVBNzUxJzogJ3AnLFxuICAgICdcXHVBNzUzJzogJ3AnLFxuICAgICdcXHVBNzU1JzogJ3AnLFxuICAgICdcXHUyNEUwJzogJ3EnLFxuICAgICdcXHVGRjUxJzogJ3EnLFxuICAgICdcXHUwMjRCJzogJ3EnLFxuICAgICdcXHVBNzU3JzogJ3EnLFxuICAgICdcXHVBNzU5JzogJ3EnLFxuICAgICdcXHUyNEUxJzogJ3InLFxuICAgICdcXHVGRjUyJzogJ3InLFxuICAgICdcXHUwMTU1JzogJ3InLFxuICAgICdcXHUxRTU5JzogJ3InLFxuICAgICdcXHUwMTU5JzogJ3InLFxuICAgICdcXHUwMjExJzogJ3InLFxuICAgICdcXHUwMjEzJzogJ3InLFxuICAgICdcXHUxRTVCJzogJ3InLFxuICAgICdcXHUxRTVEJzogJ3InLFxuICAgICdcXHUwMTU3JzogJ3InLFxuICAgICdcXHUxRTVGJzogJ3InLFxuICAgICdcXHUwMjREJzogJ3InLFxuICAgICdcXHUwMjdEJzogJ3InLFxuICAgICdcXHVBNzVCJzogJ3InLFxuICAgICdcXHVBN0E3JzogJ3InLFxuICAgICdcXHVBNzgzJzogJ3InLFxuICAgICdcXHUyNEUyJzogJ3MnLFxuICAgICdcXHVGRjUzJzogJ3MnLFxuICAgICdcXHUwMERGJzogJ3MnLFxuICAgICdcXHUwMTVCJzogJ3MnLFxuICAgICdcXHUxRTY1JzogJ3MnLFxuICAgICdcXHUwMTVEJzogJ3MnLFxuICAgICdcXHUxRTYxJzogJ3MnLFxuICAgICdcXHUwMTYxJzogJ3MnLFxuICAgICdcXHUxRTY3JzogJ3MnLFxuICAgICdcXHUxRTYzJzogJ3MnLFxuICAgICdcXHUxRTY5JzogJ3MnLFxuICAgICdcXHUwMjE5JzogJ3MnLFxuICAgICdcXHUwMTVGJzogJ3MnLFxuICAgICdcXHUwMjNGJzogJ3MnLFxuICAgICdcXHVBN0E5JzogJ3MnLFxuICAgICdcXHVBNzg1JzogJ3MnLFxuICAgICdcXHUxRTlCJzogJ3MnLFxuICAgICdcXHUyNEUzJzogJ3QnLFxuICAgICdcXHVGRjU0JzogJ3QnLFxuICAgICdcXHUxRTZCJzogJ3QnLFxuICAgICdcXHUxRTk3JzogJ3QnLFxuICAgICdcXHUwMTY1JzogJ3QnLFxuICAgICdcXHUxRTZEJzogJ3QnLFxuICAgICdcXHUwMjFCJzogJ3QnLFxuICAgICdcXHUwMTYzJzogJ3QnLFxuICAgICdcXHUxRTcxJzogJ3QnLFxuICAgICdcXHUxRTZGJzogJ3QnLFxuICAgICdcXHUwMTY3JzogJ3QnLFxuICAgICdcXHUwMUFEJzogJ3QnLFxuICAgICdcXHUwMjg4JzogJ3QnLFxuICAgICdcXHUyQzY2JzogJ3QnLFxuICAgICdcXHVBNzg3JzogJ3QnLFxuICAgICdcXHVBNzI5JzogJ3R6JyxcbiAgICAnXFx1MjRFNCc6ICd1JyxcbiAgICAnXFx1RkY1NSc6ICd1JyxcbiAgICAnXFx1MDBGOSc6ICd1JyxcbiAgICAnXFx1MDBGQSc6ICd1JyxcbiAgICAnXFx1MDBGQic6ICd1JyxcbiAgICAnXFx1MDE2OSc6ICd1JyxcbiAgICAnXFx1MUU3OSc6ICd1JyxcbiAgICAnXFx1MDE2Qic6ICd1JyxcbiAgICAnXFx1MUU3Qic6ICd1JyxcbiAgICAnXFx1MDE2RCc6ICd1JyxcbiAgICAnXFx1MDBGQyc6ICd1JyxcbiAgICAnXFx1MDFEQyc6ICd1JyxcbiAgICAnXFx1MDFEOCc6ICd1JyxcbiAgICAnXFx1MDFENic6ICd1JyxcbiAgICAnXFx1MDFEQSc6ICd1JyxcbiAgICAnXFx1MUVFNyc6ICd1JyxcbiAgICAnXFx1MDE2Ric6ICd1JyxcbiAgICAnXFx1MDE3MSc6ICd1JyxcbiAgICAnXFx1MDFENCc6ICd1JyxcbiAgICAnXFx1MDIxNSc6ICd1JyxcbiAgICAnXFx1MDIxNyc6ICd1JyxcbiAgICAnXFx1MDFCMCc6ICd1JyxcbiAgICAnXFx1MUVFQic6ICd1JyxcbiAgICAnXFx1MUVFOSc6ICd1JyxcbiAgICAnXFx1MUVFRic6ICd1JyxcbiAgICAnXFx1MUVFRCc6ICd1JyxcbiAgICAnXFx1MUVGMSc6ICd1JyxcbiAgICAnXFx1MUVFNSc6ICd1JyxcbiAgICAnXFx1MUU3Myc6ICd1JyxcbiAgICAnXFx1MDE3Myc6ICd1JyxcbiAgICAnXFx1MUU3Nyc6ICd1JyxcbiAgICAnXFx1MUU3NSc6ICd1JyxcbiAgICAnXFx1MDI4OSc6ICd1JyxcbiAgICAnXFx1MjRFNSc6ICd2JyxcbiAgICAnXFx1RkY1Nic6ICd2JyxcbiAgICAnXFx1MUU3RCc6ICd2JyxcbiAgICAnXFx1MUU3Ric6ICd2JyxcbiAgICAnXFx1MDI4Qic6ICd2JyxcbiAgICAnXFx1QTc1Ric6ICd2JyxcbiAgICAnXFx1MDI4Qyc6ICd2JyxcbiAgICAnXFx1QTc2MSc6ICd2eScsXG4gICAgJ1xcdTI0RTYnOiAndycsXG4gICAgJ1xcdUZGNTcnOiAndycsXG4gICAgJ1xcdTFFODEnOiAndycsXG4gICAgJ1xcdTFFODMnOiAndycsXG4gICAgJ1xcdTAxNzUnOiAndycsXG4gICAgJ1xcdTFFODcnOiAndycsXG4gICAgJ1xcdTFFODUnOiAndycsXG4gICAgJ1xcdTFFOTgnOiAndycsXG4gICAgJ1xcdTFFODknOiAndycsXG4gICAgJ1xcdTJDNzMnOiAndycsXG4gICAgJ1xcdTI0RTcnOiAneCcsXG4gICAgJ1xcdUZGNTgnOiAneCcsXG4gICAgJ1xcdTFFOEInOiAneCcsXG4gICAgJ1xcdTFFOEQnOiAneCcsXG4gICAgJ1xcdTI0RTgnOiAneScsXG4gICAgJ1xcdUZGNTknOiAneScsXG4gICAgJ1xcdTFFRjMnOiAneScsXG4gICAgJ1xcdTAwRkQnOiAneScsXG4gICAgJ1xcdTAxNzcnOiAneScsXG4gICAgJ1xcdTFFRjknOiAneScsXG4gICAgJ1xcdTAyMzMnOiAneScsXG4gICAgJ1xcdTFFOEYnOiAneScsXG4gICAgJ1xcdTAwRkYnOiAneScsXG4gICAgJ1xcdTFFRjcnOiAneScsXG4gICAgJ1xcdTFFOTknOiAneScsXG4gICAgJ1xcdTFFRjUnOiAneScsXG4gICAgJ1xcdTAxQjQnOiAneScsXG4gICAgJ1xcdTAyNEYnOiAneScsXG4gICAgJ1xcdTFFRkYnOiAneScsXG4gICAgJ1xcdTI0RTknOiAneicsXG4gICAgJ1xcdUZGNUEnOiAneicsXG4gICAgJ1xcdTAxN0EnOiAneicsXG4gICAgJ1xcdTFFOTEnOiAneicsXG4gICAgJ1xcdTAxN0MnOiAneicsXG4gICAgJ1xcdTAxN0UnOiAneicsXG4gICAgJ1xcdTFFOTMnOiAneicsXG4gICAgJ1xcdTFFOTUnOiAneicsXG4gICAgJ1xcdTAxQjYnOiAneicsXG4gICAgJ1xcdTAyMjUnOiAneicsXG4gICAgJ1xcdTAyNDAnOiAneicsXG4gICAgJ1xcdTJDNkMnOiAneicsXG4gICAgJ1xcdUE3NjMnOiAneicsXG4gICAgJ1xcdTAzODYnOiAnXFx1MDM5MScsXG4gICAgJ1xcdTAzODgnOiAnXFx1MDM5NScsXG4gICAgJ1xcdTAzODknOiAnXFx1MDM5NycsXG4gICAgJ1xcdTAzOEEnOiAnXFx1MDM5OScsXG4gICAgJ1xcdTAzQUEnOiAnXFx1MDM5OScsXG4gICAgJ1xcdTAzOEMnOiAnXFx1MDM5RicsXG4gICAgJ1xcdTAzOEUnOiAnXFx1MDNBNScsXG4gICAgJ1xcdTAzQUInOiAnXFx1MDNBNScsXG4gICAgJ1xcdTAzOEYnOiAnXFx1MDNBOScsXG4gICAgJ1xcdTAzQUMnOiAnXFx1MDNCMScsXG4gICAgJ1xcdTAzQUQnOiAnXFx1MDNCNScsXG4gICAgJ1xcdTAzQUUnOiAnXFx1MDNCNycsXG4gICAgJ1xcdTAzQUYnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzQ0EnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzOTAnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzQ0MnOiAnXFx1MDNCRicsXG4gICAgJ1xcdTAzQ0QnOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQ0InOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQjAnOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQ0UnOiAnXFx1MDNDOScsXG4gICAgJ1xcdTAzQzInOiAnXFx1MDNDMycsXG4gICAgJ1xcdTIwMTknOiAnXFwnJ1xuICB9O1xuXG4gIHJldHVybiBkaWFjcml0aWNzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL2Jhc2UnLFtcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKFV0aWxzKSB7XG4gIGZ1bmN0aW9uIEJhc2VBZGFwdGVyICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIEJhc2VBZGFwdGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKEJhc2VBZGFwdGVyLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGBjdXJyZW50YCBtZXRob2QgbXVzdCBiZSBkZWZpbmVkIGluIGNoaWxkIGNsYXNzZXMuJyk7XG4gIH07XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgcXVlcnlgIG1ldGhvZCBtdXN0IGJlIGRlZmluZWQgaW4gY2hpbGQgY2xhc3Nlcy4nKTtcbiAgfTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICAvLyBDYW4gYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIENhbiBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXG4gIH07XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmdlbmVyYXRlUmVzdWx0SWQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHQtJztcblxuICAgIGlkICs9IFV0aWxzLmdlbmVyYXRlQ2hhcnMoNCk7XG5cbiAgICBpZiAoZGF0YS5pZCAhPSBudWxsKSB7XG4gICAgICBpZCArPSAnLScgKyBkYXRhLmlkLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICctJyArIFV0aWxzLmdlbmVyYXRlQ2hhcnMoNCk7XG4gICAgfVxuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICByZXR1cm4gQmFzZUFkYXB0ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvc2VsZWN0JyxbXG4gICcuL2Jhc2UnLFxuICAnLi4vdXRpbHMnLFxuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKEJhc2VBZGFwdGVyLCBVdGlscywgJCkge1xuICBmdW5jdGlvbiBTZWxlY3RBZGFwdGVyICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgU2VsZWN0QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChTZWxlY3RBZGFwdGVyLCBCYXNlQWRhcHRlcik7XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHZhciBkYXRhID0gW107XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCc6c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgdmFyIG9wdGlvbiA9IHNlbGYuaXRlbSgkb3B0aW9uKTtcblxuICAgICAgZGF0YS5wdXNoKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBjYWxsYmFjayhkYXRhKTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRhdGEuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgLy8gSWYgZGF0YS5lbGVtZW50IGlzIGEgRE9NIG5vZGUsIHVzZSBpdCBpbnN0ZWFkXG4gICAgaWYgKCQoZGF0YS5lbGVtZW50KS5pcygnb3B0aW9uJykpIHtcbiAgICAgIGRhdGEuZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiRlbGVtZW50LnByb3AoJ211bHRpcGxlJykpIHtcbiAgICAgIHRoaXMuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgICAgdmFyIHZhbCA9IFtdO1xuXG4gICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICAgIGRhdGEucHVzaC5hcHBseShkYXRhLCBjdXJyZW50RGF0YSk7XG5cbiAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgdmFyIGlkID0gZGF0YVtkXS5pZDtcblxuICAgICAgICAgIGlmICgkLmluQXJyYXkoaWQsIHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICB2YWwucHVzaChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi4kZWxlbWVudC52YWwodmFsKTtcbiAgICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2YWwgPSBkYXRhLmlkO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWwpO1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS51bnNlbGVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLiRlbGVtZW50LnByb3AoJ211bHRpcGxlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkYXRhLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICBpZiAoJChkYXRhLmVsZW1lbnQpLmlzKCdvcHRpb24nKSkge1xuICAgICAgZGF0YS5lbGVtZW50LnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgIHZhciB2YWwgPSBbXTtcblxuICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBjdXJyZW50RGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgICB2YXIgaWQgPSBjdXJyZW50RGF0YVtkXS5pZDtcblxuICAgICAgICBpZiAoaWQgIT09IGRhdGEuaWQgJiYgJC5pbkFycmF5KGlkLCB2YWwpID09PSAtMSkge1xuICAgICAgICAgIHZhbC5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLiRlbGVtZW50LnZhbCh2YWwpO1xuXG4gICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5zZWxlY3QocGFyYW1zLmRhdGEpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYudW5zZWxlY3QocGFyYW1zLmRhdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmVtb3ZlIGFueXRoaW5nIGFkZGVkIHRvIGNoaWxkIGVsZW1lbnRzXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcqJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBSZW1vdmUgYW55IGN1c3RvbSBkYXRhIHNldCBieSBTZWxlY3QyXG4gICAgICBVdGlscy5SZW1vdmVEYXRhKHRoaXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oKTtcblxuICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoISRvcHRpb24uaXMoJ29wdGlvbicpICYmICEkb3B0aW9uLmlzKCdvcHRncm91cCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdGlvbiA9IHNlbGYuaXRlbSgkb3B0aW9uKTtcblxuICAgICAgdmFyIG1hdGNoZXMgPSBzZWxmLm1hdGNoZXMocGFyYW1zLCBvcHRpb24pO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhLnB1c2gobWF0Y2hlcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjYWxsYmFjayh7XG4gICAgICByZXN1bHRzOiBkYXRhXG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuYWRkT3B0aW9ucyA9IGZ1bmN0aW9uICgkb3B0aW9ucykge1xuICAgIFV0aWxzLmFwcGVuZE1hbnkodGhpcy4kZWxlbWVudCwgJG9wdGlvbnMpO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLm9wdGlvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIG9wdGlvbjtcblxuICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuICAgICAgb3B0aW9uLmxhYmVsID0gZGF0YS50ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGRhdGEudGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBkYXRhLnRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YS5pZDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5kaXNhYmxlZCkge1xuICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5zZWxlY3RlZCkge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50aXRsZSkge1xuICAgICAgb3B0aW9uLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICB2YXIgJG9wdGlvbiA9ICQob3B0aW9uKTtcblxuICAgIHZhciBub3JtYWxpemVkRGF0YSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YSk7XG4gICAgbm9ybWFsaXplZERhdGEuZWxlbWVudCA9IG9wdGlvbjtcblxuICAgIC8vIE92ZXJyaWRlIHRoZSBvcHRpb24ncyBkYXRhIHdpdGggdGhlIGNvbWJpbmVkIGRhdGFcbiAgICBVdGlscy5TdG9yZURhdGEob3B0aW9uLCAnZGF0YScsIG5vcm1hbGl6ZWREYXRhKTtcblxuICAgIHJldHVybiAkb3B0aW9uO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLml0ZW0gPSBmdW5jdGlvbiAoJG9wdGlvbikge1xuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBkYXRhID0gVXRpbHMuR2V0RGF0YSgkb3B0aW9uWzBdLCAnZGF0YScpO1xuXG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCRvcHRpb24uaXMoJ29wdGlvbicpKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpZDogJG9wdGlvbi52YWwoKSxcbiAgICAgICAgdGV4dDogJG9wdGlvbi50ZXh0KCksXG4gICAgICAgIGRpc2FibGVkOiAkb3B0aW9uLnByb3AoJ2Rpc2FibGVkJyksXG4gICAgICAgIHNlbGVjdGVkOiAkb3B0aW9uLnByb3AoJ3NlbGVjdGVkJyksXG4gICAgICAgIHRpdGxlOiAkb3B0aW9uLnByb3AoJ3RpdGxlJylcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgkb3B0aW9uLmlzKCdvcHRncm91cCcpKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB0ZXh0OiAkb3B0aW9uLnByb3AoJ2xhYmVsJyksXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgdGl0bGU6ICRvcHRpb24ucHJvcCgndGl0bGUnKVxuICAgICAgfTtcblxuICAgICAgdmFyICRjaGlsZHJlbiA9ICRvcHRpb24uY2hpbGRyZW4oJ29wdGlvbicpO1xuICAgICAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgJGNoaWxkcmVuLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIHZhciAkY2hpbGQgPSAkKCRjaGlsZHJlbltjXSk7XG5cbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5pdGVtKCRjaGlsZCk7XG5cbiAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGRhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICBkYXRhID0gdGhpcy5fbm9ybWFsaXplSXRlbShkYXRhKTtcbiAgICBkYXRhLmVsZW1lbnQgPSAkb3B0aW9uWzBdO1xuXG4gICAgVXRpbHMuU3RvcmVEYXRhKCRvcHRpb25bMF0sICdkYXRhJywgZGF0YSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5fbm9ybWFsaXplSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0gIT09IE9iamVjdChpdGVtKSkge1xuICAgICAgaXRlbSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0sXG4gICAgICAgIHRleHQ6IGl0ZW1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaXRlbSA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICB0ZXh0OiAnJ1xuICAgIH0sIGl0ZW0pO1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmIChpdGVtLmlkICE9IG51bGwpIHtcbiAgICAgIGl0ZW0uaWQgPSBpdGVtLmlkLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0udGV4dCAhPSBudWxsKSB7XG4gICAgICBpdGVtLnRleHQgPSBpdGVtLnRleHQudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbS5fcmVzdWx0SWQgPT0gbnVsbCAmJiBpdGVtLmlkICYmIHRoaXMuY29udGFpbmVyICE9IG51bGwpIHtcbiAgICAgIGl0ZW0uX3Jlc3VsdElkID0gdGhpcy5nZW5lcmF0ZVJlc3VsdElkKHRoaXMuY29udGFpbmVyLCBpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBpdGVtKTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKHBhcmFtcywgZGF0YSkge1xuICAgIHZhciBtYXRjaGVyID0gdGhpcy5vcHRpb25zLmdldCgnbWF0Y2hlcicpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXIocGFyYW1zLCBkYXRhKTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0QWRhcHRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9hcnJheScsW1xuICAnLi9zZWxlY3QnLFxuICAnLi4vdXRpbHMnLFxuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKFNlbGVjdEFkYXB0ZXIsIFV0aWxzLCAkKSB7XG4gIGZ1bmN0aW9uIEFycmF5QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLl9kYXRhVG9Db252ZXJ0ID0gb3B0aW9ucy5nZXQoJ2RhdGEnKSB8fCBbXTtcblxuICAgIEFycmF5QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoQXJyYXlBZGFwdGVyLCBTZWxlY3RBZGFwdGVyKTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgQXJyYXlBZGFwdGVyLl9fc3VwZXJfXy5iaW5kLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIHRoaXMuYWRkT3B0aW9ucyh0aGlzLmNvbnZlcnRUb09wdGlvbnModGhpcy5fZGF0YVRvQ29udmVydCkpO1xuICB9O1xuXG4gIEFycmF5QWRhcHRlci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgJG9wdGlvbiA9IHRoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uIChpLCBlbG0pIHtcbiAgICAgIHJldHVybiBlbG0udmFsdWUgPT0gZGF0YS5pZC50b1N0cmluZygpO1xuICAgIH0pO1xuXG4gICAgaWYgKCRvcHRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAkb3B0aW9uID0gdGhpcy5vcHRpb24oZGF0YSk7XG5cbiAgICAgIHRoaXMuYWRkT3B0aW9ucygkb3B0aW9uKTtcbiAgICB9XG5cbiAgICBBcnJheUFkYXB0ZXIuX19zdXBlcl9fLnNlbGVjdC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9O1xuXG4gIEFycmF5QWRhcHRlci5wcm90b3R5cGUuY29udmVydFRvT3B0aW9ucyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyICRleGlzdGluZyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uJyk7XG4gICAgdmFyIGV4aXN0aW5nSWRzID0gJGV4aXN0aW5nLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2VsZi5pdGVtKCQodGhpcykpLmlkO1xuICAgIH0pLmdldCgpO1xuXG4gICAgdmFyICRvcHRpb25zID0gW107XG5cbiAgICAvLyBGaWx0ZXIgb3V0IGFsbCBpdGVtcyBleGNlcHQgZm9yIHRoZSBvbmUgcGFzc2VkIGluIHRoZSBhcmd1bWVudFxuICAgIGZ1bmN0aW9uIG9ubHlJdGVtIChpdGVtKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJCh0aGlzKS52YWwoKSA9PSBpdGVtLmlkO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBpdGVtID0gdGhpcy5fbm9ybWFsaXplSXRlbShkYXRhW2RdKTtcblxuICAgICAgLy8gU2tpcCBpdGVtcyB3aGljaCB3ZXJlIHByZS1sb2FkZWQsIG9ubHkgbWVyZ2UgdGhlIGRhdGFcbiAgICAgIGlmICgkLmluQXJyYXkoaXRlbS5pZCwgZXhpc3RpbmdJZHMpID49IDApIHtcbiAgICAgICAgdmFyICRleGlzdGluZ09wdGlvbiA9ICRleGlzdGluZy5maWx0ZXIob25seUl0ZW0oaXRlbSkpO1xuXG4gICAgICAgIHZhciBleGlzdGluZ0RhdGEgPSB0aGlzLml0ZW0oJGV4aXN0aW5nT3B0aW9uKTtcbiAgICAgICAgdmFyIG5ld0RhdGEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgaXRlbSwgZXhpc3RpbmdEYXRhKTtcblxuICAgICAgICB2YXIgJG5ld09wdGlvbiA9IHRoaXMub3B0aW9uKG5ld0RhdGEpO1xuXG4gICAgICAgICRleGlzdGluZ09wdGlvbi5yZXBsYWNlV2l0aCgkbmV3T3B0aW9uKTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyICRvcHRpb24gPSB0aGlzLm9wdGlvbihpdGVtKTtcblxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyICRjaGlsZHJlbiA9IHRoaXMuY29udmVydFRvT3B0aW9ucyhpdGVtLmNoaWxkcmVuKTtcblxuICAgICAgICBVdGlscy5hcHBlbmRNYW55KCRvcHRpb24sICRjaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgICRvcHRpb25zLnB1c2goJG9wdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuICRvcHRpb25zO1xuICB9O1xuXG4gIHJldHVybiBBcnJheUFkYXB0ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvYWpheCcsW1xuICAnLi9hcnJheScsXG4gICcuLi91dGlscycsXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoQXJyYXlBZGFwdGVyLCBVdGlscywgJCkge1xuICBmdW5jdGlvbiBBamF4QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmFqYXhPcHRpb25zID0gdGhpcy5fYXBwbHlEZWZhdWx0cyhvcHRpb25zLmdldCgnYWpheCcpKTtcblxuICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLnByb2Nlc3NSZXN1bHRzICE9IG51bGwpIHtcbiAgICAgIHRoaXMucHJvY2Vzc1Jlc3VsdHMgPSB0aGlzLmFqYXhPcHRpb25zLnByb2Nlc3NSZXN1bHRzO1xuICAgIH1cblxuICAgIEFqYXhBZGFwdGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChBamF4QWRhcHRlciwgQXJyYXlBZGFwdGVyKTtcblxuICBBamF4QWRhcHRlci5wcm90b3R5cGUuX2FwcGx5RGVmYXVsdHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgICBxOiBwYXJhbXMudGVybVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB0cmFuc3BvcnQ6IGZ1bmN0aW9uIChwYXJhbXMsIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICAgICAgdmFyICRyZXF1ZXN0ID0gJC5hamF4KHBhcmFtcyk7XG5cbiAgICAgICAgJHJlcXVlc3QudGhlbihzdWNjZXNzKTtcbiAgICAgICAgJHJlcXVlc3QuZmFpbChmYWlsdXJlKTtcblxuICAgICAgICByZXR1cm4gJHJlcXVlc3Q7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMsIHRydWUpO1xuICB9O1xuXG4gIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5wcm9jZXNzUmVzdWx0cyA9IGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgQWpheEFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9yZXF1ZXN0ICE9IG51bGwpIHtcbiAgICAgIC8vIEpTT05QIHJlcXVlc3RzIGNhbm5vdCBhbHdheXMgYmUgYWJvcnRlZFxuICAgICAgaWYgKCQuaXNGdW5jdGlvbih0aGlzLl9yZXF1ZXN0LmFib3J0KSkge1xuICAgICAgICB0aGlzLl9yZXF1ZXN0LmFib3J0KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgdHlwZTogJ0dFVCdcbiAgICB9LCB0aGlzLmFqYXhPcHRpb25zKTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51cmwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMudXJsID0gb3B0aW9ucy51cmwuY2FsbCh0aGlzLiRlbGVtZW50LCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLmRhdGEgPSBvcHRpb25zLmRhdGEuY2FsbCh0aGlzLiRlbGVtZW50LCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3QgKCkge1xuICAgICAgdmFyICRyZXF1ZXN0ID0gb3B0aW9ucy50cmFuc3BvcnQob3B0aW9ucywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBzZWxmLnByb2Nlc3NSZXN1bHRzKGRhdGEsIHBhcmFtcyk7XG5cbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIC8vIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSByZXNwb25zZSBpbmNsdWRlZCBhIGByZXN1bHRzYCBrZXkuXG4gICAgICAgICAgaWYgKCFyZXN1bHRzIHx8ICFyZXN1bHRzLnJlc3VsdHMgfHwgISQuaXNBcnJheShyZXN1bHRzLnJlc3VsdHMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAnU2VsZWN0MjogVGhlIEFKQVggcmVzdWx0cyBkaWQgbm90IHJldHVybiBhbiBhcnJheSBpbiB0aGUgJyArXG4gICAgICAgICAgICAgICdgcmVzdWx0c2Aga2V5IG9mIHRoZSByZXNwb25zZS4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdHMpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBBdHRlbXB0IHRvIGRldGVjdCBpZiBhIHJlcXVlc3Qgd2FzIGFib3J0ZWRcbiAgICAgICAgLy8gT25seSB3b3JrcyBpZiB0aGUgdHJhbnNwb3J0IGV4cG9zZXMgYSBzdGF0dXMgcHJvcGVydHlcbiAgICAgICAgaWYgKCdzdGF0dXMnIGluICRyZXF1ZXN0ICYmXG4gICAgICAgICAgICAoJHJlcXVlc3Quc3RhdHVzID09PSAwIHx8ICRyZXF1ZXN0LnN0YXR1cyA9PT0gJzAnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvckxvYWRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuX3JlcXVlc3QgPSAkcmVxdWVzdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5kZWxheSAmJiBwYXJhbXMudGVybSAhPSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5fcXVlcnlUaW1lb3V0KSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fcXVlcnlUaW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcXVlcnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVxdWVzdCwgdGhpcy5hamF4T3B0aW9ucy5kZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3QoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEFqYXhBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3RhZ3MnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIFRhZ3MgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGFncyA9IG9wdGlvbnMuZ2V0KCd0YWdzJyk7XG5cbiAgICB2YXIgY3JlYXRlVGFnID0gb3B0aW9ucy5nZXQoJ2NyZWF0ZVRhZycpO1xuXG4gICAgaWYgKGNyZWF0ZVRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNyZWF0ZVRhZyA9IGNyZWF0ZVRhZztcbiAgICB9XG5cbiAgICB2YXIgaW5zZXJ0VGFnID0gb3B0aW9ucy5nZXQoJ2luc2VydFRhZycpO1xuXG4gICAgaWYgKGluc2VydFRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VGFnID0gaW5zZXJ0VGFnO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcblxuICAgIGlmICgkLmlzQXJyYXkodGFncykpIHtcbiAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGFncy5sZW5ndGg7IHQrKykge1xuICAgICAgICB2YXIgdGFnID0gdGFnc1t0XTtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLl9ub3JtYWxpemVJdGVtKHRhZyk7XG5cbiAgICAgICAgdmFyICRvcHRpb24gPSB0aGlzLm9wdGlvbihpdGVtKTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZCgkb3B0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBUYWdzLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLl9yZW1vdmVPbGRUYWdzKCk7XG5cbiAgICBpZiAocGFyYW1zLnRlcm0gPT0gbnVsbCB8fCBwYXJhbXMucGFnZSAhPSBudWxsKSB7XG4gICAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3cmFwcGVyIChvYmosIGNoaWxkKSB7XG4gICAgICB2YXIgZGF0YSA9IG9iai5yZXN1bHRzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IGRhdGFbaV07XG5cbiAgICAgICAgdmFyIGNoZWNrQ2hpbGRyZW4gPSAoXG4gICAgICAgICAgb3B0aW9uLmNoaWxkcmVuICE9IG51bGwgJiZcbiAgICAgICAgICAhd3JhcHBlcih7XG4gICAgICAgICAgICByZXN1bHRzOiBvcHRpb24uY2hpbGRyZW5cbiAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICApO1xuXG4gICAgICAgIHZhciBvcHRpb25UZXh0ID0gKG9wdGlvbi50ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB2YXIgcGFyYW1zVGVybSA9IChwYXJhbXMudGVybSB8fCAnJykudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB2YXIgY2hlY2tUZXh0ID0gb3B0aW9uVGV4dCA9PT0gcGFyYW1zVGVybTtcblxuICAgICAgICBpZiAoY2hlY2tUZXh0IHx8IGNoZWNrQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvYmouZGF0YSA9IGRhdGE7XG4gICAgICAgICAgY2FsbGJhY2sob2JqKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWcgPSBzZWxmLmNyZWF0ZVRhZyhwYXJhbXMpO1xuXG4gICAgICBpZiAodGFnICE9IG51bGwpIHtcbiAgICAgICAgdmFyICRvcHRpb24gPSBzZWxmLm9wdGlvbih0YWcpO1xuICAgICAgICAkb3B0aW9uLmF0dHIoJ2RhdGEtc2VsZWN0Mi10YWcnLCB0cnVlKTtcblxuICAgICAgICBzZWxmLmFkZE9wdGlvbnMoWyRvcHRpb25dKTtcblxuICAgICAgICBzZWxmLmluc2VydFRhZyhkYXRhLCB0YWcpO1xuICAgICAgfVxuXG4gICAgICBvYmoucmVzdWx0cyA9IGRhdGE7XG5cbiAgICAgIGNhbGxiYWNrKG9iaik7XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCB3cmFwcGVyKTtcbiAgfTtcblxuICBUYWdzLnByb3RvdHlwZS5jcmVhdGVUYWcgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMpIHtcbiAgICB2YXIgdGVybSA9ICQudHJpbShwYXJhbXMudGVybSk7XG5cbiAgICBpZiAodGVybSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZDogdGVybSxcbiAgICAgIHRleHQ6IHRlcm1cbiAgICB9O1xuICB9O1xuXG4gIFRhZ3MucHJvdG90eXBlLmluc2VydFRhZyA9IGZ1bmN0aW9uIChfLCBkYXRhLCB0YWcpIHtcbiAgICBkYXRhLnVuc2hpZnQodGFnKTtcbiAgfTtcblxuICBUYWdzLnByb3RvdHlwZS5fcmVtb3ZlT2xkVGFncyA9IGZ1bmN0aW9uIChfKSB7XG4gICAgdmFyICRvcHRpb25zID0gdGhpcy4kZWxlbWVudC5maW5kKCdvcHRpb25bZGF0YS1zZWxlY3QyLXRhZ10nKTtcblxuICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUYWdzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3Rva2VuaXplcicsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgZnVuY3Rpb24gVG9rZW5pemVyIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIHRva2VuaXplciA9IG9wdGlvbnMuZ2V0KCd0b2tlbml6ZXInKTtcblxuICAgIGlmICh0b2tlbml6ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50b2tlbml6ZXIgPSB0b2tlbml6ZXI7XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgVG9rZW5pemVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIHRoaXMuJHNlYXJjaCA9ICBjb250YWluZXIuZHJvcGRvd24uJHNlYXJjaCB8fCBjb250YWluZXIuc2VsZWN0aW9uLiRzZWFyY2ggfHxcbiAgICAgICRjb250YWluZXIuZmluZCgnLnNlbGVjdDItc2VhcmNoX19maWVsZCcpO1xuICB9O1xuXG4gIFRva2VuaXplci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQW5kU2VsZWN0IChkYXRhKSB7XG4gICAgICAvLyBOb3JtYWxpemUgdGhlIGRhdGEgb2JqZWN0IHNvIHdlIGNhbiB1c2UgaXQgZm9yIGNoZWNrc1xuICAgICAgdmFyIGl0ZW0gPSBzZWxmLl9ub3JtYWxpemVJdGVtKGRhdGEpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgZGF0YSBvYmplY3QgYWxyZWFkeSBleGlzdHMgYXMgYSB0YWdcbiAgICAgIC8vIFNlbGVjdCBpdCBpZiBpdCBkb2Vzbid0XG4gICAgICB2YXIgJGV4aXN0aW5nT3B0aW9ucyA9IHNlbGYuJGVsZW1lbnQuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcykudmFsKCkgPT09IGl0ZW0uaWQ7XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgYW4gZXhpc3Rpbmcgb3B0aW9uIHdhc24ndCBmb3VuZCBmb3IgaXQsIGNyZWF0ZSB0aGUgb3B0aW9uXG4gICAgICBpZiAoISRleGlzdGluZ09wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gc2VsZi5vcHRpb24oaXRlbSk7XG4gICAgICAgICRvcHRpb24uYXR0cignZGF0YS1zZWxlY3QyLXRhZycsIHRydWUpO1xuXG4gICAgICAgIHNlbGYuX3JlbW92ZU9sZFRhZ3MoKTtcbiAgICAgICAgc2VsZi5hZGRPcHRpb25zKFskb3B0aW9uXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbGVjdCB0aGUgaXRlbSwgbm93IHRoYXQgd2Uga25vdyB0aGVyZSBpcyBhbiBvcHRpb24gZm9yIGl0XG4gICAgICBzZWxlY3QoaXRlbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0IChkYXRhKSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcblxuICAgIHZhciB0b2tlbkRhdGEgPSB0aGlzLnRva2VuaXplcihwYXJhbXMsIHRoaXMub3B0aW9ucywgY3JlYXRlQW5kU2VsZWN0KTtcblxuICAgIGlmICh0b2tlbkRhdGEudGVybSAhPT0gcGFyYW1zLnRlcm0pIHtcbiAgICAgIC8vIFJlcGxhY2UgdGhlIHNlYXJjaCB0ZXJtIGlmIHdlIGhhdmUgdGhlIHNlYXJjaCBib3hcbiAgICAgIGlmICh0aGlzLiRzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuJHNlYXJjaC52YWwodG9rZW5EYXRhLnRlcm0pO1xuICAgICAgICB0aGlzLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnRlcm0gPSB0b2tlbkRhdGEudGVybTtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBUb2tlbml6ZXIucHJvdG90eXBlLnRva2VuaXplciA9IGZ1bmN0aW9uIChfLCBwYXJhbXMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlcGFyYXRvcnMgPSBvcHRpb25zLmdldCgndG9rZW5TZXBhcmF0b3JzJykgfHwgW107XG4gICAgdmFyIHRlcm0gPSBwYXJhbXMudGVybTtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICB2YXIgY3JlYXRlVGFnID0gdGhpcy5jcmVhdGVUYWcgfHwgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHBhcmFtcy50ZXJtLFxuICAgICAgICB0ZXh0OiBwYXJhbXMudGVybVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgd2hpbGUgKGkgPCB0ZXJtLmxlbmd0aCkge1xuICAgICAgdmFyIHRlcm1DaGFyID0gdGVybVtpXTtcblxuICAgICAgaWYgKCQuaW5BcnJheSh0ZXJtQ2hhciwgc2VwYXJhdG9ycykgPT09IC0xKSB7XG4gICAgICAgIGkrKztcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnQgPSB0ZXJtLnN1YnN0cigwLCBpKTtcbiAgICAgIHZhciBwYXJ0UGFyYW1zID0gJC5leHRlbmQoe30sIHBhcmFtcywge1xuICAgICAgICB0ZXJtOiBwYXJ0XG4gICAgICB9KTtcblxuICAgICAgdmFyIGRhdGEgPSBjcmVhdGVUYWcocGFydFBhcmFtcyk7XG5cbiAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soZGF0YSk7XG5cbiAgICAgIC8vIFJlc2V0IHRoZSB0ZXJtIHRvIG5vdCBpbmNsdWRlIHRoZSB0b2tlbml6ZWQgcG9ydGlvblxuICAgICAgdGVybSA9IHRlcm0uc3Vic3RyKGkgKyAxKSB8fCAnJztcbiAgICAgIGkgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0ZXJtOiB0ZXJtXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gVG9rZW5pemVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL21pbmltdW1JbnB1dExlbmd0aCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmltdW1JbnB1dExlbmd0aCAoZGVjb3JhdGVkLCAkZSwgb3B0aW9ucykge1xuICAgIHRoaXMubWluaW11bUlucHV0TGVuZ3RoID0gb3B0aW9ucy5nZXQoJ21pbmltdW1JbnB1dExlbmd0aCcpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgTWluaW11bUlucHV0TGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICBwYXJhbXMudGVybSA9IHBhcmFtcy50ZXJtIHx8ICcnO1xuXG4gICAgaWYgKHBhcmFtcy50ZXJtLmxlbmd0aCA8IHRoaXMubWluaW11bUlucHV0TGVuZ3RoKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgbWVzc2FnZTogJ2lucHV0VG9vU2hvcnQnLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgbWluaW11bTogdGhpcy5taW5pbXVtSW5wdXRMZW5ndGgsXG4gICAgICAgICAgaW5wdXQ6IHBhcmFtcy50ZXJtLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgcmV0dXJuIE1pbmltdW1JbnB1dExlbmd0aDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9tYXhpbXVtSW5wdXRMZW5ndGgnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXhpbXVtSW5wdXRMZW5ndGggKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm1heGltdW1JbnB1dExlbmd0aCA9IG9wdGlvbnMuZ2V0KCdtYXhpbXVtSW5wdXRMZW5ndGgnKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIE1heGltdW1JbnB1dExlbmd0aC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcblxuICAgIGlmICh0aGlzLm1heGltdW1JbnB1dExlbmd0aCA+IDAgJiZcbiAgICAgICAgcGFyYW1zLnRlcm0ubGVuZ3RoID4gdGhpcy5tYXhpbXVtSW5wdXRMZW5ndGgpIHtcbiAgICAgIHRoaXMudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICBtZXNzYWdlOiAnaW5wdXRUb29Mb25nJyxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIG1heGltdW06IHRoaXMubWF4aW11bUlucHV0TGVuZ3RoLFxuICAgICAgICAgIGlucHV0OiBwYXJhbXMudGVybSxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xuICB9O1xuXG4gIHJldHVybiBNYXhpbXVtSW5wdXRMZW5ndGg7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcsW1xuXG5dLCBmdW5jdGlvbiAoKXtcbiAgZnVuY3Rpb24gTWF4aW11bVNlbGVjdGlvbkxlbmd0aCAoZGVjb3JhdGVkLCAkZSwgb3B0aW9ucykge1xuICAgIHRoaXMubWF4aW11bVNlbGVjdGlvbkxlbmd0aCA9IG9wdGlvbnMuZ2V0KCdtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZSwgb3B0aW9ucyk7XG4gIH1cblxuICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoLnByb3RvdHlwZS5iaW5kID1cbiAgICBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX2NoZWNrSWZNYXhpbXVtU2VsZWN0ZWQoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIE1heGltdW1TZWxlY3Rpb25MZW5ndGgucHJvdG90eXBlLnF1ZXJ5ID1cbiAgICBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2NoZWNrSWZNYXhpbXVtU2VsZWN0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWNvcmF0ZWQuY2FsbChzZWxmLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIE1heGltdW1TZWxlY3Rpb25MZW5ndGgucHJvdG90eXBlLl9jaGVja0lmTWF4aW11bVNlbGVjdGVkID1cbiAgICBmdW5jdGlvbiAoXywgc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gY3VycmVudERhdGEgIT0gbnVsbCA/IGN1cnJlbnREYXRhLmxlbmd0aCA6IDA7XG4gICAgICAgIGlmIChzZWxmLm1heGltdW1TZWxlY3Rpb25MZW5ndGggPiAwICYmXG4gICAgICAgICAgY291bnQgPj0gc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnbWF4aW11bVNlbGVjdGVkJyxcbiAgICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgICAgbWF4aW11bTogc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTWF4aW11bVNlbGVjdGlvbkxlbmd0aDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24nLFtcbiAgJ2pxdWVyeScsXG4gICcuL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIERyb3Bkb3duICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgRHJvcGRvd24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoRHJvcGRvd24sIFV0aWxzLk9ic2VydmFibGUpO1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRkcm9wZG93biA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLWRyb3Bkb3duXCI+JyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItcmVzdWx0c1wiPjwvc3Bhbj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICAkZHJvcGRvd24uYXR0cignZGlyJywgdGhpcy5vcHRpb25zLmdldCgnZGlyJykpO1xuXG4gICAgdGhpcy4kZHJvcGRvd24gPSAkZHJvcGRvd247XG5cbiAgICByZXR1cm4gJGRyb3Bkb3duO1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNob3VsZCBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXG4gIH07XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCRkcm9wZG93biwgJGNvbnRhaW5lcikge1xuICAgIC8vIFNob3VsZCBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXG4gIH07XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBkcm9wZG93biBmcm9tIHRoZSBET01cbiAgICB0aGlzLiRkcm9wZG93bi5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL3NlYXJjaCcsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIFNlYXJjaCAoKSB7IH1cblxuICBTZWFyY2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB2YXIgJHJlbmRlcmVkID0gZGVjb3JhdGVkLmNhbGwodGhpcyk7XG5cbiAgICB2YXIgJHNlYXJjaCA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0tZHJvcGRvd25cIj4nICtcbiAgICAgICAgJzxpbnB1dCBjbGFzcz1cInNlbGVjdDItc2VhcmNoX19maWVsZFwiIHR5cGU9XCJzZWFyY2hcIiB0YWJpbmRleD1cIi0xXCInICtcbiAgICAgICAgJyBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiJyArXG4gICAgICAgICcgc3BlbGxjaGVjaz1cImZhbHNlXCIgcm9sZT1cInNlYXJjaGJveFwiIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiIC8+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgdGhpcy4kc2VhcmNoQ29udGFpbmVyID0gJHNlYXJjaDtcbiAgICB0aGlzLiRzZWFyY2ggPSAkc2VhcmNoLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICAkcmVuZGVyZWQucHJlcGVuZCgkc2VhcmNoKTtcblxuICAgIHJldHVybiAkcmVuZGVyZWQ7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHJlc3VsdHNJZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgdGhpcy4kc2VhcmNoLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdrZXlwcmVzcycsIGV2dCk7XG5cbiAgICAgIHNlbGYuX2tleVVwUHJldmVudGVkID0gZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xuICAgIH0pO1xuXG4gICAgLy8gV29ya2Fyb3VuZCBmb3IgYnJvd3NlcnMgd2hpY2ggZG8gbm90IHN1cHBvcnQgdGhlIGBpbnB1dGAgZXZlbnRcbiAgICAvLyBUaGlzIHdpbGwgcHJldmVudCBkb3VibGUtdHJpZ2dlcmluZyBvZiBldmVudHMgZm9yIGJyb3dzZXJzIHdoaWNoIHN1cHBvcnRcbiAgICAvLyBib3RoIHRoZSBga2V5dXBgIGFuZCBgaW5wdXRgIGV2ZW50cy5cbiAgICB0aGlzLiRzZWFyY2gub24oJ2lucHV0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gVW5iaW5kIHRoZSBkdXBsaWNhdGVkIGBrZXl1cGAgZXZlbnRcbiAgICAgICQodGhpcykub2ZmKCdrZXl1cCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VhcmNoLm9uKCdrZXl1cCBpbnB1dCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuaGFuZGxlU2VhcmNoKGV2dCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cigndGFiaW5kZXgnLCAwKTtcbiAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgcmVzdWx0c0lkKTtcblxuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cigndGFiaW5kZXgnLCAtMSk7XG4gICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1jb250cm9scycpO1xuICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuXG4gICAgICBzZWxmLiRzZWFyY2gudmFsKCcnKTtcbiAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdibHVyJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YWxsJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgaWYgKHBhcmFtcy5xdWVyeS50ZXJtID09IG51bGwgfHwgcGFyYW1zLnF1ZXJ5LnRlcm0gPT09ICcnKSB7XG4gICAgICAgIHZhciBzaG93U2VhcmNoID0gc2VsZi5zaG93U2VhcmNoKHBhcmFtcyk7XG5cbiAgICAgICAgaWYgKHNob3dTZWFyY2gpIHtcbiAgICAgICAgICBzZWxmLiRzZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItc2VhcmNoLS1oaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi4kc2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCdzZWxlY3QyLXNlYXJjaC0taGlkZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBpZiAocGFyYW1zLmRhdGEuX3Jlc3VsdElkKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBwYXJhbXMuZGF0YS5fcmVzdWx0SWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuaGFuZGxlU2VhcmNoID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICghdGhpcy5fa2V5VXBQcmV2ZW50ZWQpIHtcbiAgICAgIHZhciBpbnB1dCA9IHRoaXMuJHNlYXJjaC52YWwoKTtcblxuICAgICAgdGhpcy50cmlnZ2VyKCdxdWVyeScsIHtcbiAgICAgICAgdGVybTogaW5wdXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2tleVVwUHJldmVudGVkID0gZmFsc2U7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5zaG93U2VhcmNoID0gZnVuY3Rpb24gKF8sIHBhcmFtcykge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiBTZWFyY2g7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2hpZGVQbGFjZWhvbGRlcicsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhpZGVQbGFjZWhvbGRlciAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5ub3JtYWxpemVQbGFjZWhvbGRlcihvcHRpb25zLmdldCgncGxhY2Vob2xkZXInKSk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpO1xuICB9XG5cbiAgSGlkZVBsYWNlaG9sZGVyLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgZGF0YS5yZXN1bHRzID0gdGhpcy5yZW1vdmVQbGFjZWhvbGRlcihkYXRhLnJlc3VsdHMpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG4gIH07XG5cbiAgSGlkZVBsYWNlaG9sZGVyLnByb3RvdHlwZS5ub3JtYWxpemVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChfLCBwbGFjZWhvbGRlcikge1xuICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH07XG5cbiAgSGlkZVBsYWNlaG9sZGVyLnByb3RvdHlwZS5yZW1vdmVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChfLCBkYXRhKSB7XG4gICAgdmFyIG1vZGlmaWVkRGF0YSA9IGRhdGEuc2xpY2UoMCk7XG5cbiAgICBmb3IgKHZhciBkID0gZGF0YS5sZW5ndGggLSAxOyBkID49IDA7IGQtLSkge1xuICAgICAgdmFyIGl0ZW0gPSBkYXRhW2RdO1xuXG4gICAgICBpZiAodGhpcy5wbGFjZWhvbGRlci5pZCA9PT0gaXRlbS5pZCkge1xuICAgICAgICBtb2RpZmllZERhdGEuc3BsaWNlKGQsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2RpZmllZERhdGE7XG4gIH07XG5cbiAgcmV0dXJuIEhpZGVQbGFjZWhvbGRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vaW5maW5pdGVTY3JvbGwnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIEluZmluaXRlU2Nyb2xsIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xuICAgIHRoaXMubGFzdFBhcmFtcyA9IHt9O1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKTtcblxuICAgIHRoaXMuJGxvYWRpbmdNb3JlID0gdGhpcy5jcmVhdGVMb2FkaW5nTW9yZSgpO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICB0aGlzLiRsb2FkaW5nTW9yZS5yZW1vdmUoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuXG4gICAgaWYgKHRoaXMuc2hvd0xvYWRpbmdNb3JlKGRhdGEpKSB7XG4gICAgICB0aGlzLiRyZXN1bHRzLmFwcGVuZCh0aGlzLiRsb2FkaW5nTW9yZSk7XG4gICAgICB0aGlzLmxvYWRNb3JlSWZOZWVkZWQoKTtcbiAgICB9XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdxdWVyeScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYubGFzdFBhcmFtcyA9IHBhcmFtcztcbiAgICAgIHNlbGYubG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3F1ZXJ5OmFwcGVuZCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYubGFzdFBhcmFtcyA9IHBhcmFtcztcbiAgICAgIHNlbGYubG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRyZXN1bHRzLm9uKCdzY3JvbGwnLCB0aGlzLmxvYWRNb3JlSWZOZWVkZWQuYmluZCh0aGlzKSk7XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmxvYWRNb3JlSWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlzTG9hZE1vcmVWaXNpYmxlID0gJC5jb250YWlucyhcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIHRoaXMuJGxvYWRpbmdNb3JlWzBdXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmxvYWRpbmcgfHwgIWlzTG9hZE1vcmVWaXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRPZmZzZXQgPSB0aGlzLiRyZXN1bHRzLm9mZnNldCgpLnRvcCArXG4gICAgICB0aGlzLiRyZXN1bHRzLm91dGVySGVpZ2h0KGZhbHNlKTtcbiAgICB2YXIgbG9hZGluZ01vcmVPZmZzZXQgPSB0aGlzLiRsb2FkaW5nTW9yZS5vZmZzZXQoKS50b3AgK1xuICAgICAgdGhpcy4kbG9hZGluZ01vcmUub3V0ZXJIZWlnaHQoZmFsc2UpO1xuXG4gICAgaWYgKGN1cnJlbnRPZmZzZXQgKyA1MCA+PSBsb2FkaW5nTW9yZU9mZnNldCkge1xuICAgICAgdGhpcy5sb2FkTW9yZSgpO1xuICAgIH1cbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUubG9hZE1vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIHZhciBwYXJhbXMgPSAkLmV4dGVuZCh7fSwge3BhZ2U6IDF9LCB0aGlzLmxhc3RQYXJhbXMpO1xuXG4gICAgcGFyYW1zLnBhZ2UrKztcblxuICAgIHRoaXMudHJpZ2dlcigncXVlcnk6YXBwZW5kJywgcGFyYW1zKTtcbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuc2hvd0xvYWRpbmdNb3JlID0gZnVuY3Rpb24gKF8sIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5wYWdpbmF0aW9uICYmIGRhdGEucGFnaW5hdGlvbi5tb3JlO1xuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5jcmVhdGVMb2FkaW5nTW9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJG9wdGlvbiA9ICQoXG4gICAgICAnPGxpICcgK1xuICAgICAgJ2NsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWxvYWQtbW9yZVwiJyArXG4gICAgICAncm9sZT1cIm9wdGlvblwiIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCI+PC9saT4nXG4gICAgKTtcblxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KCdsb2FkaW5nTW9yZScpO1xuXG4gICAgJG9wdGlvbi5odG1sKG1lc3NhZ2UodGhpcy5sYXN0UGFyYW1zKSk7XG5cbiAgICByZXR1cm4gJG9wdGlvbjtcbiAgfTtcblxuICByZXR1cm4gSW5maW5pdGVTY3JvbGw7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2F0dGFjaEJvZHknLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBBdHRhY2hCb2R5IChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZHJvcGRvd25QYXJlbnQgPSAkKG9wdGlvbnMuZ2V0KCdkcm9wZG93blBhcmVudCcpIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9zaG93RHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX2F0dGFjaFBvc2l0aW9uaW5nSGFuZGxlcihjb250YWluZXIpO1xuXG4gICAgICAvLyBNdXN0IGJpbmQgYWZ0ZXIgdGhlIHJlc3VsdHMgaGFuZGxlcnMgdG8gZW5zdXJlIGNvcnJlY3Qgc2l6aW5nXG4gICAgICBzZWxmLl9iaW5kQ29udGFpbmVyUmVzdWx0SGFuZGxlcnMoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9oaWRlRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX2RldGFjaFBvc2l0aW9uaW5nSGFuZGxlcihjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCAkZHJvcGRvd24sICRjb250YWluZXIpIHtcbiAgICAvLyBDbG9uZSBhbGwgb2YgdGhlIGNvbnRhaW5lciBjbGFzc2VzXG4gICAgJGRyb3Bkb3duLmF0dHIoJ2NsYXNzJywgJGNvbnRhaW5lci5hdHRyKCdjbGFzcycpKTtcblxuICAgICRkcm9wZG93bi5yZW1vdmVDbGFzcygnc2VsZWN0MicpO1xuICAgICRkcm9wZG93bi5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcblxuICAgICRkcm9wZG93bi5jc3Moe1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IC05OTk5OTlcbiAgICB9KTtcblxuICAgIHRoaXMuJGNvbnRhaW5lciA9ICRjb250YWluZXI7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHZhciAkY29udGFpbmVyID0gJCgnPHNwYW4+PC9zcGFuPicpO1xuXG4gICAgdmFyICRkcm9wZG93biA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuICAgICRjb250YWluZXIuYXBwZW5kKCRkcm9wZG93bik7XG5cbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lciA9ICRjb250YWluZXI7XG5cbiAgICByZXR1cm4gJGNvbnRhaW5lcjtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5faGlkZURyb3Bkb3duID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLmRldGFjaCgpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9iaW5kQ29udGFpbmVyUmVzdWx0SGFuZGxlcnMgPVxuICAgICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyKSB7XG5cbiAgICAvLyBUaGVzZSBzaG91bGQgb25seSBiZSBib3VuZCBvbmNlXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YXBwZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czptZXNzYWdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY29udGFpbmVyUmVzdWx0c0hhbmRsZXJzQm91bmQgPSB0cnVlO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9hdHRhY2hQb3NpdGlvbmluZ0hhbmRsZXIgPVxuICAgICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHNjcm9sbEV2ZW50ID0gJ3Njcm9sbC5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG4gICAgdmFyIHJlc2l6ZUV2ZW50ID0gJ3Jlc2l6ZS5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG4gICAgdmFyIG9yaWVudGF0aW9uRXZlbnQgPSAnb3JpZW50YXRpb25jaGFuZ2Uuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuXG4gICAgdmFyICR3YXRjaGVycyA9IHRoaXMuJGNvbnRhaW5lci5wYXJlbnRzKCkuZmlsdGVyKFV0aWxzLmhhc1Njcm9sbCk7XG4gICAgJHdhdGNoZXJzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgVXRpbHMuU3RvcmVEYXRhKHRoaXMsICdzZWxlY3QyLXNjcm9sbC1wb3NpdGlvbicsIHtcbiAgICAgICAgeDogJCh0aGlzKS5zY3JvbGxMZWZ0KCksXG4gICAgICAgIHk6ICQodGhpcykuc2Nyb2xsVG9wKClcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJHdhdGNoZXJzLm9uKHNjcm9sbEV2ZW50LCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IFV0aWxzLkdldERhdGEodGhpcywgJ3NlbGVjdDItc2Nyb2xsLXBvc2l0aW9uJyk7XG4gICAgICAkKHRoaXMpLnNjcm9sbFRvcChwb3NpdGlvbi55KTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5vbihzY3JvbGxFdmVudCArICcgJyArIHJlc2l6ZUV2ZW50ICsgJyAnICsgb3JpZW50YXRpb25FdmVudCxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xuICAgIH0pO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIgPVxuICAgICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyKSB7XG4gICAgdmFyIHNjcm9sbEV2ZW50ID0gJ3Njcm9sbC5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG4gICAgdmFyIHJlc2l6ZUV2ZW50ID0gJ3Jlc2l6ZS5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG4gICAgdmFyIG9yaWVudGF0aW9uRXZlbnQgPSAnb3JpZW50YXRpb25jaGFuZ2Uuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuXG4gICAgdmFyICR3YXRjaGVycyA9IHRoaXMuJGNvbnRhaW5lci5wYXJlbnRzKCkuZmlsdGVyKFV0aWxzLmhhc1Njcm9sbCk7XG4gICAgJHdhdGNoZXJzLm9mZihzY3JvbGxFdmVudCk7XG5cbiAgICAkKHdpbmRvdykub2ZmKHNjcm9sbEV2ZW50ICsgJyAnICsgcmVzaXplRXZlbnQgKyAnICcgKyBvcmllbnRhdGlvbkV2ZW50KTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fcG9zaXRpb25Ecm9wZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcblxuICAgIHZhciBpc0N1cnJlbnRseUFib3ZlID0gdGhpcy4kZHJvcGRvd24uaGFzQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLWFib3ZlJyk7XG4gICAgdmFyIGlzQ3VycmVudGx5QmVsb3cgPSB0aGlzLiRkcm9wZG93bi5oYXNDbGFzcygnc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cnKTtcblxuICAgIHZhciBuZXdEaXJlY3Rpb24gPSBudWxsO1xuXG4gICAgdmFyIG9mZnNldCA9IHRoaXMuJGNvbnRhaW5lci5vZmZzZXQoKTtcblxuICAgIG9mZnNldC5ib3R0b20gPSBvZmZzZXQudG9wICsgdGhpcy4kY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKTtcblxuICAgIHZhciBjb250YWluZXIgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuJGNvbnRhaW5lci5vdXRlckhlaWdodChmYWxzZSlcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnRvcCA9IG9mZnNldC50b3A7XG4gICAgY29udGFpbmVyLmJvdHRvbSA9IG9mZnNldC50b3AgKyBjb250YWluZXIuaGVpZ2h0O1xuXG4gICAgdmFyIGRyb3Bkb3duID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLiRkcm9wZG93bi5vdXRlckhlaWdodChmYWxzZSlcbiAgICB9O1xuXG4gICAgdmFyIHZpZXdwb3J0ID0ge1xuICAgICAgdG9wOiAkd2luZG93LnNjcm9sbFRvcCgpLFxuICAgICAgYm90dG9tOiAkd2luZG93LnNjcm9sbFRvcCgpICsgJHdpbmRvdy5oZWlnaHQoKVxuICAgIH07XG5cbiAgICB2YXIgZW5vdWdoUm9vbUFib3ZlID0gdmlld3BvcnQudG9wIDwgKG9mZnNldC50b3AgLSBkcm9wZG93bi5oZWlnaHQpO1xuICAgIHZhciBlbm91Z2hSb29tQmVsb3cgPSB2aWV3cG9ydC5ib3R0b20gPiAob2Zmc2V0LmJvdHRvbSArIGRyb3Bkb3duLmhlaWdodCk7XG5cbiAgICB2YXIgY3NzID0ge1xuICAgICAgbGVmdDogb2Zmc2V0LmxlZnQsXG4gICAgICB0b3A6IGNvbnRhaW5lci5ib3R0b21cbiAgICB9O1xuXG4gICAgLy8gRGV0ZXJtaW5lIHdoYXQgdGhlIHBhcmVudCBlbGVtZW50IGlzIHRvIHVzZSBmb3IgY2FsY3VsYXRpbmcgdGhlIG9mZnNldFxuICAgIHZhciAkb2Zmc2V0UGFyZW50ID0gdGhpcy4kZHJvcGRvd25QYXJlbnQ7XG5cbiAgICAvLyBGb3Igc3RhdGljYWxseSBwb3NpdGlvbmVkIGVsZW1lbnRzLCB3ZSBuZWVkIHRvIGdldCB0aGUgZWxlbWVudFxuICAgIC8vIHRoYXQgaXMgZGV0ZXJtaW5pbmcgdGhlIG9mZnNldFxuICAgIGlmICgkb2Zmc2V0UGFyZW50LmNzcygncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICRvZmZzZXRQYXJlbnQgPSAkb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudCgpO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnRPZmZzZXQgPSB7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwXG4gICAgfTtcblxuICAgIGlmIChcbiAgICAgICQuY29udGFpbnMoZG9jdW1lbnQuYm9keSwgJG9mZnNldFBhcmVudFswXSkgfHxcbiAgICAgICRvZmZzZXRQYXJlbnRbMF0uaXNDb25uZWN0ZWRcbiAgICAgICkge1xuICAgICAgcGFyZW50T2Zmc2V0ID0gJG9mZnNldFBhcmVudC5vZmZzZXQoKTtcbiAgICB9XG5cbiAgICBjc3MudG9wIC09IHBhcmVudE9mZnNldC50b3A7XG4gICAgY3NzLmxlZnQgLT0gcGFyZW50T2Zmc2V0LmxlZnQ7XG5cbiAgICBpZiAoIWlzQ3VycmVudGx5QWJvdmUgJiYgIWlzQ3VycmVudGx5QmVsb3cpIHtcbiAgICAgIG5ld0RpcmVjdGlvbiA9ICdiZWxvdyc7XG4gICAgfVxuXG4gICAgaWYgKCFlbm91Z2hSb29tQmVsb3cgJiYgZW5vdWdoUm9vbUFib3ZlICYmICFpc0N1cnJlbnRseUFib3ZlKSB7XG4gICAgICBuZXdEaXJlY3Rpb24gPSAnYWJvdmUnO1xuICAgIH0gZWxzZSBpZiAoIWVub3VnaFJvb21BYm92ZSAmJiBlbm91Z2hSb29tQmVsb3cgJiYgaXNDdXJyZW50bHlBYm92ZSkge1xuICAgICAgbmV3RGlyZWN0aW9uID0gJ2JlbG93JztcbiAgICB9XG5cbiAgICBpZiAobmV3RGlyZWN0aW9uID09ICdhYm92ZScgfHxcbiAgICAgIChpc0N1cnJlbnRseUFib3ZlICYmIG5ld0RpcmVjdGlvbiAhPT0gJ2JlbG93JykpIHtcbiAgICAgIGNzcy50b3AgPSBjb250YWluZXIudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGRyb3Bkb3duLmhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAobmV3RGlyZWN0aW9uICE9IG51bGwpIHtcbiAgICAgIHRoaXMuJGRyb3Bkb3duXG4gICAgICAgIC5yZW1vdmVDbGFzcygnc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cgc2VsZWN0Mi1kcm9wZG93bi0tYWJvdmUnKVxuICAgICAgICAuYWRkQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLScgKyBuZXdEaXJlY3Rpb24pO1xuICAgICAgdGhpcy4kY29udGFpbmVyXG4gICAgICAgIC5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWJlbG93IHNlbGVjdDItY29udGFpbmVyLS1hYm92ZScpXG4gICAgICAgIC5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLScgKyBuZXdEaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLmNzcyhjc3MpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9yZXNpemVEcm9wZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3NzID0ge1xuICAgICAgd2lkdGg6IHRoaXMuJGNvbnRhaW5lci5vdXRlcldpZHRoKGZhbHNlKSArICdweCdcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2Ryb3Bkb3duQXV0b1dpZHRoJykpIHtcbiAgICAgIGNzcy5taW5XaWR0aCA9IGNzcy53aWR0aDtcbiAgICAgIGNzcy5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICBjc3Mud2lkdGggPSAnYXV0byc7XG4gICAgfVxuXG4gICAgdGhpcy4kZHJvcGRvd24uY3NzKGNzcyk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX3Nob3dEcm9wZG93biA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5hcHBlbmRUbyh0aGlzLiRkcm9wZG93blBhcmVudCk7XG5cbiAgICB0aGlzLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgdGhpcy5fcmVzaXplRHJvcGRvd24oKTtcbiAgfTtcblxuICByZXR1cm4gQXR0YWNoQm9keTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBjb3VudFJlc3VsdHMgKGRhdGEpIHtcbiAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGRhdGFbZF07XG5cbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvdW50ICs9IGNvdW50UmVzdWx0cyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgZnVuY3Rpb24gTWluaW11bVJlc3VsdHNGb3JTZWFyY2ggKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XG4gICAgdGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IG9wdGlvbnMuZ2V0KCdtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcpO1xuXG4gICAgaWYgKHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPCAwKSB7XG4gICAgICB0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gSW5maW5pdHk7XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKTtcbiAgfVxuXG4gIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoLnByb3RvdHlwZS5zaG93U2VhcmNoID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zKSB7XG4gICAgaWYgKGNvdW50UmVzdWx0cyhwYXJhbXMuZGF0YS5yZXN1bHRzKSA8IHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2gpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zKTtcbiAgfTtcblxuICByZXR1cm4gTWluaW11bVJlc3VsdHNGb3JTZWFyY2g7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL3NlbGVjdE9uQ2xvc2UnLFtcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKFV0aWxzKSB7XG4gIGZ1bmN0aW9uIFNlbGVjdE9uQ2xvc2UgKCkgeyB9XG5cbiAgU2VsZWN0T25DbG9zZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5faGFuZGxlU2VsZWN0T25DbG9zZShwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdE9uQ2xvc2UucHJvdG90eXBlLl9oYW5kbGVTZWxlY3RPbkNsb3NlID0gZnVuY3Rpb24gKF8sIHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLm9yaWdpbmFsU2VsZWN0MkV2ZW50ICE9IG51bGwpIHtcbiAgICAgIHZhciBldmVudCA9IHBhcmFtcy5vcmlnaW5hbFNlbGVjdDJFdmVudDtcblxuICAgICAgLy8gRG9uJ3Qgc2VsZWN0IGFuIGl0ZW0gaWYgdGhlIGNsb3NlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgZnJvbSBhIHNlbGVjdCBvclxuICAgICAgLy8gdW5zZWxlY3QgZXZlbnRcbiAgICAgIGlmIChldmVudC5fdHlwZSA9PT0gJ3NlbGVjdCcgfHwgZXZlbnQuX3R5cGUgPT09ICd1bnNlbGVjdCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciAkaGlnaGxpZ2h0ZWRSZXN1bHRzID0gdGhpcy5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgIC8vIE9ubHkgc2VsZWN0IGhpZ2hsaWdodGVkIHJlc3VsdHNcbiAgICBpZiAoJGhpZ2hsaWdodGVkUmVzdWx0cy5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRoaWdobGlnaHRlZFJlc3VsdHNbMF0sICdkYXRhJyk7XG5cbiAgICAvLyBEb24ndCByZS1zZWxlY3QgYWxyZWFkeSBzZWxlY3RlZCByZXN1bHRlXG4gICAgaWYgKFxuICAgICAgKGRhdGEuZWxlbWVudCAhPSBudWxsICYmIGRhdGEuZWxlbWVudC5zZWxlY3RlZCkgfHxcbiAgICAgIChkYXRhLmVsZW1lbnQgPT0gbnVsbCAmJiBkYXRhLnNlbGVjdGVkKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcignc2VsZWN0Jywge1xuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdE9uQ2xvc2U7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2Nsb3NlT25TZWxlY3QnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDbG9zZU9uU2VsZWN0ICgpIHsgfVxuXG4gIENsb3NlT25TZWxlY3QucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9zZWxlY3RUcmlnZ2VyZWQoZXZ0KTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9zZWxlY3RUcmlnZ2VyZWQoZXZ0KTtcbiAgICB9KTtcbiAgfTtcblxuICBDbG9zZU9uU2VsZWN0LnByb3RvdHlwZS5fc2VsZWN0VHJpZ2dlcmVkID0gZnVuY3Rpb24gKF8sIGV2dCkge1xuICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gZXZ0Lm9yaWdpbmFsRXZlbnQ7XG5cbiAgICAvLyBEb24ndCBjbG9zZSBpZiB0aGUgY29udHJvbCBrZXkgaXMgYmVpbmcgaGVsZFxuICAgIGlmIChvcmlnaW5hbEV2ZW50ICYmIChvcmlnaW5hbEV2ZW50LmN0cmxLZXkgfHwgb3JpZ2luYWxFdmVudC5tZXRhS2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcignY2xvc2UnLCB7XG4gICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgICAgb3JpZ2luYWxTZWxlY3QyRXZlbnQ6IGV2dFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDbG9zZU9uU2VsZWN0O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9pMThuL2VuJyxbXSxmdW5jdGlvbiAoKSB7XG4gIC8vIEVuZ2xpc2hcbiAgcmV0dXJuIHtcbiAgICBlcnJvckxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnVGhlIHJlc3VsdHMgY291bGQgbm90IGJlIGxvYWRlZC4nO1xuICAgIH0sXG4gICAgaW5wdXRUb29Mb25nOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdmFyIG92ZXJDaGFycyA9IGFyZ3MuaW5wdXQubGVuZ3RoIC0gYXJncy5tYXhpbXVtO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9ICdQbGVhc2UgZGVsZXRlICcgKyBvdmVyQ2hhcnMgKyAnIGNoYXJhY3Rlcic7XG5cbiAgICAgIGlmIChvdmVyQ2hhcnMgIT0gMSkge1xuICAgICAgICBtZXNzYWdlICs9ICdzJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICBpbnB1dFRvb1Nob3J0OiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XG5cbiAgICAgIHZhciBtZXNzYWdlID0gJ1BsZWFzZSBlbnRlciAnICsgcmVtYWluaW5nQ2hhcnMgKyAnIG9yIG1vcmUgY2hhcmFjdGVycyc7XG5cbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG4gICAgbG9hZGluZ01vcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnTG9hZGluZyBtb3JlIHJlc3VsdHPigKYnO1xuICAgIH0sXG4gICAgbWF4aW11bVNlbGVjdGVkOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnWW91IGNhbiBvbmx5IHNlbGVjdCAnICsgYXJncy5tYXhpbXVtICsgJyBpdGVtJztcblxuICAgICAgaWYgKGFyZ3MubWF4aW11bSAhPSAxKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gJ3MnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgIG5vUmVzdWx0czogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdObyByZXN1bHRzIGZvdW5kJztcbiAgICB9LFxuICAgIHNlYXJjaGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdTZWFyY2hpbmfigKYnO1xuICAgIH0sXG4gICAgcmVtb3ZlQWxsSXRlbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnUmVtb3ZlIGFsbCBpdGVtcyc7XG4gICAgfVxuICB9O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kZWZhdWx0cycsW1xuICAnanF1ZXJ5JyxcbiAgJ3JlcXVpcmUnLFxuXG4gICcuL3Jlc3VsdHMnLFxuXG4gICcuL3NlbGVjdGlvbi9zaW5nbGUnLFxuICAnLi9zZWxlY3Rpb24vbXVsdGlwbGUnLFxuICAnLi9zZWxlY3Rpb24vcGxhY2Vob2xkZXInLFxuICAnLi9zZWxlY3Rpb24vYWxsb3dDbGVhcicsXG4gICcuL3NlbGVjdGlvbi9zZWFyY2gnLFxuICAnLi9zZWxlY3Rpb24vZXZlbnRSZWxheScsXG5cbiAgJy4vdXRpbHMnLFxuICAnLi90cmFuc2xhdGlvbicsXG4gICcuL2RpYWNyaXRpY3MnLFxuXG4gICcuL2RhdGEvc2VsZWN0JyxcbiAgJy4vZGF0YS9hcnJheScsXG4gICcuL2RhdGEvYWpheCcsXG4gICcuL2RhdGEvdGFncycsXG4gICcuL2RhdGEvdG9rZW5pemVyJyxcbiAgJy4vZGF0YS9taW5pbXVtSW5wdXRMZW5ndGgnLFxuICAnLi9kYXRhL21heGltdW1JbnB1dExlbmd0aCcsXG4gICcuL2RhdGEvbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcsXG5cbiAgJy4vZHJvcGRvd24nLFxuICAnLi9kcm9wZG93bi9zZWFyY2gnLFxuICAnLi9kcm9wZG93bi9oaWRlUGxhY2Vob2xkZXInLFxuICAnLi9kcm9wZG93bi9pbmZpbml0ZVNjcm9sbCcsXG4gICcuL2Ryb3Bkb3duL2F0dGFjaEJvZHknLFxuICAnLi9kcm9wZG93bi9taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcsXG4gICcuL2Ryb3Bkb3duL3NlbGVjdE9uQ2xvc2UnLFxuICAnLi9kcm9wZG93bi9jbG9zZU9uU2VsZWN0JyxcblxuICAnLi9pMThuL2VuJ1xuXSwgZnVuY3Rpb24gKCQsIHJlcXVpcmUsXG5cbiAgICAgICAgICAgICBSZXN1bHRzTGlzdCxcblxuICAgICAgICAgICAgIFNpbmdsZVNlbGVjdGlvbiwgTXVsdGlwbGVTZWxlY3Rpb24sIFBsYWNlaG9sZGVyLCBBbGxvd0NsZWFyLFxuICAgICAgICAgICAgIFNlbGVjdGlvblNlYXJjaCwgRXZlbnRSZWxheSxcblxuICAgICAgICAgICAgIFV0aWxzLCBUcmFuc2xhdGlvbiwgRElBQ1JJVElDUyxcblxuICAgICAgICAgICAgIFNlbGVjdERhdGEsIEFycmF5RGF0YSwgQWpheERhdGEsIFRhZ3MsIFRva2VuaXplcixcbiAgICAgICAgICAgICBNaW5pbXVtSW5wdXRMZW5ndGgsIE1heGltdW1JbnB1dExlbmd0aCwgTWF4aW11bVNlbGVjdGlvbkxlbmd0aCxcblxuICAgICAgICAgICAgIERyb3Bkb3duLCBEcm9wZG93blNlYXJjaCwgSGlkZVBsYWNlaG9sZGVyLCBJbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgICAgICBBdHRhY2hCb2R5LCBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCwgU2VsZWN0T25DbG9zZSwgQ2xvc2VPblNlbGVjdCxcblxuICAgICAgICAgICAgIEVuZ2xpc2hUcmFuc2xhdGlvbikge1xuICBmdW5jdGlvbiBEZWZhdWx0cyAoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9wdGlvbnMuZGF0YUFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuYWpheCAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBBamF4RGF0YTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IEFycmF5RGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBTZWxlY3REYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIE1pbmltdW1JbnB1dExlbmd0aFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5tYXhpbXVtSW5wdXRMZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIE1heGltdW1JbnB1dExlbmd0aFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnRhZ3MpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKG9wdGlvbnMuZGF0YUFkYXB0ZXIsIFRhZ3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50b2tlblNlcGFyYXRvcnMgIT0gbnVsbCB8fCBvcHRpb25zLnRva2VuaXplciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIFRva2VuaXplclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5xdWVyeSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBRdWVyeSA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9xdWVyeScpO1xuXG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIFF1ZXJ5XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmluaXRTZWxlY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICB2YXIgSW5pdFNlbGVjdGlvbiA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9pbml0U2VsZWN0aW9uJyk7XG5cbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgSW5pdFNlbGVjdGlvblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnJlc3VsdHNBZGFwdGVyID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBSZXN1bHRzTGlzdDtcblxuICAgICAgaWYgKG9wdGlvbnMuYWpheCAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIEluZmluaXRlU2Nyb2xsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIsXG4gICAgICAgICAgSGlkZVBsYWNlaG9sZGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnNlbGVjdE9uQ2xvc2UpIHtcbiAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIsXG4gICAgICAgICAgU2VsZWN0T25DbG9zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5tdWx0aXBsZSkge1xuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IERyb3Bkb3duO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIFNlYXJjaGFibGVEcm9wZG93biA9IFV0aWxzLkRlY29yYXRlKERyb3Bkb3duLCBEcm9wZG93blNlYXJjaCk7XG5cbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBTZWFyY2hhYmxlRHJvcGRvd247XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoICE9PSAwKSB7XG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXG4gICAgICAgICAgTWluaW11bVJlc3VsdHNGb3JTZWFyY2hcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICAgIENsb3NlT25TZWxlY3RcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgIT0gbnVsbCB8fFxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQ3NzICE9IG51bGwgfHxcbiAgICAgICAgb3B0aW9ucy5hZGFwdERyb3Bkb3duQ3NzQ2xhc3MgIT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHZhciBEcm9wZG93bkNTUyA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9kcm9wZG93bkNzcycpO1xuXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXG4gICAgICAgICAgRHJvcGRvd25DU1NcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXG4gICAgICAgIEF0dGFjaEJvZHlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5tdWx0aXBsZSkge1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBNdWx0aXBsZVNlbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFNpbmdsZVNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBwbGFjZWhvbGRlciBtaXhpbiBpZiBhIHBsYWNlaG9sZGVyIHdhcyBzcGVjaWZpZWRcbiAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIFBsYWNlaG9sZGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmFsbG93Q2xlYXIpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIEFsbG93Q2xlYXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIFNlbGVjdGlvblNlYXJjaFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgIT0gbnVsbCB8fFxuICAgICAgICBvcHRpb25zLmNvbnRhaW5lckNzcyAhPSBudWxsIHx8XG4gICAgICAgIG9wdGlvbnMuYWRhcHRDb250YWluZXJDc3NDbGFzcyAhPSBudWxsXG4gICAgICApIHtcbiAgICAgICAgdmFyIENvbnRhaW5lckNTUyA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9jb250YWluZXJDc3MnKTtcblxuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXG4gICAgICAgICAgQ29udGFpbmVyQ1NTXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXG4gICAgICAgIEV2ZW50UmVsYXlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRlZmF1bHRzIHdlcmUgbm90IHByZXZpb3VzbHkgYXBwbGllZCBmcm9tIGFuIGVsZW1lbnQsIGl0IGlzXG4gICAgLy8gcG9zc2libGUgZm9yIHRoZSBsYW5ndWFnZSBvcHRpb24gdG8gaGF2ZSBub3QgYmVlbiByZXNvbHZlZFxuICAgIG9wdGlvbnMubGFuZ3VhZ2UgPSB0aGlzLl9yZXNvbHZlTGFuZ3VhZ2Uob3B0aW9ucy5sYW5ndWFnZSk7XG5cbiAgICAvLyBBbHdheXMgZmFsbCBiYWNrIHRvIEVuZ2xpc2ggc2luY2UgaXQgd2lsbCBhbHdheXMgYmUgY29tcGxldGVcbiAgICBvcHRpb25zLmxhbmd1YWdlLnB1c2goJ2VuJyk7XG5cbiAgICB2YXIgdW5pcXVlTGFuZ3VhZ2VzID0gW107XG5cbiAgICBmb3IgKHZhciBsID0gMDsgbCA8IG9wdGlvbnMubGFuZ3VhZ2UubGVuZ3RoOyBsKyspIHtcbiAgICAgIHZhciBsYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2VbbF07XG5cbiAgICAgIGlmICh1bmlxdWVMYW5ndWFnZXMuaW5kZXhPZihsYW5ndWFnZSkgPT09IC0xKSB7XG4gICAgICAgIHVuaXF1ZUxhbmd1YWdlcy5wdXNoKGxhbmd1YWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zLmxhbmd1YWdlID0gdW5pcXVlTGFuZ3VhZ2VzO1xuXG4gICAgb3B0aW9ucy50cmFuc2xhdGlvbnMgPSB0aGlzLl9wcm9jZXNzVHJhbnNsYXRpb25zKFxuICAgICAgb3B0aW9ucy5sYW5ndWFnZSxcbiAgICAgIG9wdGlvbnMuZGVidWdcbiAgICApO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHN0cmlwRGlhY3JpdGljcyAodGV4dCkge1xuICAgICAgLy8gVXNlZCAndW5pIHJhbmdlICsgbmFtZWQgZnVuY3Rpb24nIGZyb20gaHR0cDovL2pzcGVyZi5jb20vZGlhY3JpdGljcy8xOFxuICAgICAgZnVuY3Rpb24gbWF0Y2goYSkge1xuICAgICAgICByZXR1cm4gRElBQ1JJVElDU1thXSB8fCBhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXlxcdTAwMDAtXFx1MDA3RV0vZywgbWF0Y2gpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoZXIgKHBhcmFtcywgZGF0YSkge1xuICAgICAgLy8gQWx3YXlzIHJldHVybiB0aGUgb2JqZWN0IGlmIHRoZXJlIGlzIG5vdGhpbmcgdG8gY29tcGFyZVxuICAgICAgaWYgKCQudHJpbShwYXJhbXMudGVybSkgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICAvLyBEbyBhIHJlY3Vyc2l2ZSBjaGVjayBmb3Igb3B0aW9ucyB3aXRoIGNoaWxkcmVuXG4gICAgICBpZiAoZGF0YS5jaGlsZHJlbiAmJiBkYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gQ2xvbmUgdGhlIGRhdGEgb2JqZWN0IGlmIHRoZXJlIGFyZSBjaGlsZHJlblxuICAgICAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGFzIHdlIG1vZGlmeSB0aGUgb2JqZWN0IHRvIHJlbW92ZSBhbnkgbm9uLW1hdGNoZXNcbiAgICAgICAgdmFyIG1hdGNoID0gJC5leHRlbmQodHJ1ZSwge30sIGRhdGEpO1xuXG4gICAgICAgIC8vIENoZWNrIGVhY2ggY2hpbGQgb2YgdGhlIG9wdGlvblxuICAgICAgICBmb3IgKHZhciBjID0gZGF0YS5jaGlsZHJlbi5sZW5ndGggLSAxOyBjID49IDA7IGMtLSkge1xuICAgICAgICAgIHZhciBjaGlsZCA9IGRhdGEuY2hpbGRyZW5bY107XG5cbiAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG1hdGNoZXIocGFyYW1zLCBjaGlsZCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSB3YXNuJ3QgYSBtYXRjaCwgcmVtb3ZlIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5XG4gICAgICAgICAgaWYgKG1hdGNoZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgbWF0Y2guY2hpbGRyZW4uc3BsaWNlKGMsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGFueSBjaGlsZHJlbiBtYXRjaGVkLCByZXR1cm4gdGhlIG5ldyBvYmplY3RcbiAgICAgICAgaWYgKG1hdGNoLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSB3ZXJlIG5vIG1hdGNoaW5nIGNoaWxkcmVuLCBjaGVjayBqdXN0IHRoZSBwbGFpbiBvYmplY3RcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIocGFyYW1zLCBtYXRjaCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcmlnaW5hbCA9IHN0cmlwRGlhY3JpdGljcyhkYXRhLnRleHQpLnRvVXBwZXJDYXNlKCk7XG4gICAgICB2YXIgdGVybSA9IHN0cmlwRGlhY3JpdGljcyhwYXJhbXMudGVybSkudG9VcHBlckNhc2UoKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRleHQgY29udGFpbnMgdGhlIHRlcm1cbiAgICAgIGlmIChvcmlnaW5hbC5pbmRleE9mKHRlcm0pID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgdGVybSwgZG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgYW1kQmFzZTogJy4vJyxcbiAgICAgIGFtZExhbmd1YWdlQmFzZTogJy4vaTE4bi8nLFxuICAgICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgIGRyb3Bkb3duQXV0b1dpZHRoOiBmYWxzZSxcbiAgICAgIGVzY2FwZU1hcmt1cDogVXRpbHMuZXNjYXBlTWFya3VwLFxuICAgICAgbGFuZ3VhZ2U6IHt9LFxuICAgICAgbWF0Y2hlcjogbWF0Y2hlcixcbiAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMCxcbiAgICAgIG1heGltdW1JbnB1dExlbmd0aDogMCxcbiAgICAgIG1heGltdW1TZWxlY3Rpb25MZW5ndGg6IDAsXG4gICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogMCxcbiAgICAgIHNlbGVjdE9uQ2xvc2U6IGZhbHNlLFxuICAgICAgc2Nyb2xsQWZ0ZXJTZWxlY3Q6IGZhbHNlLFxuICAgICAgc29ydGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZVJlc3VsdDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0LnRleHQ7XG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVTZWxlY3Rpb246IGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbi50ZXh0O1xuICAgICAgfSxcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCcsXG4gICAgICB3aWR0aDogJ3Jlc29sdmUnXG4gICAgfTtcbiAgfTtcblxuICBEZWZhdWx0cy5wcm90b3R5cGUuYXBwbHlGcm9tRWxlbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zLCAkZWxlbWVudCkge1xuICAgIHZhciBvcHRpb25MYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2U7XG4gICAgdmFyIGRlZmF1bHRMYW5ndWFnZSA9IHRoaXMuZGVmYXVsdHMubGFuZ3VhZ2U7XG4gICAgdmFyIGVsZW1lbnRMYW5ndWFnZSA9ICRlbGVtZW50LnByb3AoJ2xhbmcnKTtcbiAgICB2YXIgcGFyZW50TGFuZ3VhZ2UgPSAkZWxlbWVudC5jbG9zZXN0KCdbbGFuZ10nKS5wcm9wKCdsYW5nJyk7XG5cbiAgICB2YXIgbGFuZ3VhZ2VzID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5jYWxsKFxuICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKGVsZW1lbnRMYW5ndWFnZSksXG4gICAgICB0aGlzLl9yZXNvbHZlTGFuZ3VhZ2Uob3B0aW9uTGFuZ3VhZ2UpLFxuICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKGRlZmF1bHRMYW5ndWFnZSksXG4gICAgICB0aGlzLl9yZXNvbHZlTGFuZ3VhZ2UocGFyZW50TGFuZ3VhZ2UpXG4gICAgKTtcblxuICAgIG9wdGlvbnMubGFuZ3VhZ2UgPSBsYW5ndWFnZXM7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfTtcblxuICBEZWZhdWx0cy5wcm90b3R5cGUuX3Jlc29sdmVMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xuICAgIGlmICghbGFuZ3VhZ2UpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoJC5pc0VtcHR5T2JqZWN0KGxhbmd1YWdlKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGlmICgkLmlzUGxhaW5PYmplY3QobGFuZ3VhZ2UpKSB7XG4gICAgICByZXR1cm4gW2xhbmd1YWdlXTtcbiAgICB9XG5cbiAgICB2YXIgbGFuZ3VhZ2VzO1xuXG4gICAgaWYgKCEkLmlzQXJyYXkobGFuZ3VhZ2UpKSB7XG4gICAgICBsYW5ndWFnZXMgPSBbbGFuZ3VhZ2VdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYW5ndWFnZXMgPSBsYW5ndWFnZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzb2x2ZWRMYW5ndWFnZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGwgPSAwOyBsIDwgbGFuZ3VhZ2VzLmxlbmd0aDsgbCsrKSB7XG4gICAgICByZXNvbHZlZExhbmd1YWdlcy5wdXNoKGxhbmd1YWdlc1tsXSk7XG5cbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2VzW2xdID09PSAnc3RyaW5nJyAmJiBsYW5ndWFnZXNbbF0uaW5kZXhPZignLScpID4gMCkge1xuICAgICAgICAvLyBFeHRyYWN0IHRoZSByZWdpb24gaW5mb3JtYXRpb24gaWYgaXQgaXMgaW5jbHVkZWRcbiAgICAgICAgdmFyIGxhbmd1YWdlUGFydHMgPSBsYW5ndWFnZXNbbF0uc3BsaXQoJy0nKTtcbiAgICAgICAgdmFyIGJhc2VMYW5ndWFnZSA9IGxhbmd1YWdlUGFydHNbMF07XG5cbiAgICAgICAgcmVzb2x2ZWRMYW5ndWFnZXMucHVzaChiYXNlTGFuZ3VhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZExhbmd1YWdlcztcbiAgfTtcblxuICBEZWZhdWx0cy5wcm90b3R5cGUuX3Byb2Nlc3NUcmFuc2xhdGlvbnMgPSBmdW5jdGlvbiAobGFuZ3VhZ2VzLCBkZWJ1Zykge1xuICAgIHZhciB0cmFuc2xhdGlvbnMgPSBuZXcgVHJhbnNsYXRpb24oKTtcblxuICAgIGZvciAodmFyIGwgPSAwOyBsIDwgbGFuZ3VhZ2VzLmxlbmd0aDsgbCsrKSB7XG4gICAgICB2YXIgbGFuZ3VhZ2VEYXRhID0gbmV3IFRyYW5zbGF0aW9uKCk7XG5cbiAgICAgIHZhciBsYW5ndWFnZSA9IGxhbmd1YWdlc1tsXTtcblxuICAgICAgaWYgKHR5cGVvZiBsYW5ndWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUcnkgdG8gbG9hZCBpdCB3aXRoIHRoZSBvcmlnaW5hbCBuYW1lXG4gICAgICAgICAgbGFuZ3VhZ2VEYXRhID0gVHJhbnNsYXRpb24ubG9hZFBhdGgobGFuZ3VhZ2UpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIElmIHdlIGNvdWxkbid0IGxvYWQgaXQsIGNoZWNrIGlmIGl0IHdhc24ndCB0aGUgZnVsbCBwYXRoXG4gICAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMuZGVmYXVsdHMuYW1kTGFuZ3VhZ2VCYXNlICsgbGFuZ3VhZ2U7XG4gICAgICAgICAgICBsYW5ndWFnZURhdGEgPSBUcmFuc2xhdGlvbi5sb2FkUGF0aChsYW5ndWFnZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIC8vIFRoZSB0cmFuc2xhdGlvbiBjb3VsZCBub3QgYmUgbG9hZGVkIGF0IGFsbC4gU29tZXRpbWVzIHRoaXMgaXNcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgYSBjb25maWd1cmF0aW9uIHByb2JsZW0sIG90aGVyIHRpbWVzIHRoaXMgY2FuIGJlXG4gICAgICAgICAgICAvLyBiZWNhdXNlIG9mIGhvdyBTZWxlY3QyIGhlbHBzIGxvYWQgYWxsIHBvc3NpYmxlIHRyYW5zbGF0aW9uIGZpbGVzXG4gICAgICAgICAgICBpZiAoZGVidWcgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAnU2VsZWN0MjogVGhlIGxhbmd1YWdlIGZpbGUgZm9yIFwiJyArIGxhbmd1YWdlICsgJ1wiIGNvdWxkICcgK1xuICAgICAgICAgICAgICAgICdub3QgYmUgYXV0b21hdGljYWxseSBsb2FkZWQuIEEgZmFsbGJhY2sgd2lsbCBiZSB1c2VkIGluc3RlYWQuJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgkLmlzUGxhaW5PYmplY3QobGFuZ3VhZ2UpKSB7XG4gICAgICAgIGxhbmd1YWdlRGF0YSA9IG5ldyBUcmFuc2xhdGlvbihsYW5ndWFnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYW5ndWFnZURhdGEgPSBsYW5ndWFnZTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNsYXRpb25zLmV4dGVuZChsYW5ndWFnZURhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2xhdGlvbnM7XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgdmFyIGNhbWVsS2V5ID0gJC5jYW1lbENhc2Uoa2V5KTtcblxuICAgIHZhciBkYXRhID0ge307XG4gICAgZGF0YVtjYW1lbEtleV0gPSB2YWx1ZTtcblxuICAgIHZhciBjb252ZXJ0ZWREYXRhID0gVXRpbHMuX2NvbnZlcnREYXRhKGRhdGEpO1xuXG4gICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5kZWZhdWx0cywgY29udmVydGVkRGF0YSk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRzID0gbmV3IERlZmF1bHRzKCk7XG5cbiAgcmV0dXJuIGRlZmF1bHRzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9vcHRpb25zJyxbXG4gICdyZXF1aXJlJyxcbiAgJ2pxdWVyeScsXG4gICcuL2RlZmF1bHRzJyxcbiAgJy4vdXRpbHMnXG5dLCBmdW5jdGlvbiAocmVxdWlyZSwgJCwgRGVmYXVsdHMsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIE9wdGlvbnMgKG9wdGlvbnMsICRlbGVtZW50KSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICgkZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmZyb21FbGVtZW50KCRlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5vcHRpb25zID0gRGVmYXVsdHMuYXBwbHlGcm9tRWxlbWVudCh0aGlzLm9wdGlvbnMsICRlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBEZWZhdWx0cy5hcHBseSh0aGlzLm9wdGlvbnMpO1xuXG4gICAgaWYgKCRlbGVtZW50ICYmICRlbGVtZW50LmlzKCdpbnB1dCcpKSB7XG4gICAgICB2YXIgSW5wdXRDb21wYXQgPSByZXF1aXJlKHRoaXMuZ2V0KCdhbWRCYXNlJykgKyAnY29tcGF0L2lucHV0RGF0YScpO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgdGhpcy5vcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICBJbnB1dENvbXBhdFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBPcHRpb25zLnByb3RvdHlwZS5mcm9tRWxlbWVudCA9IGZ1bmN0aW9uICgkZSkge1xuICAgIHZhciBleGNsdWRlZERhdGEgPSBbJ3NlbGVjdDInXTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubXVsdGlwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5vcHRpb25zLm11bHRpcGxlID0gJGUucHJvcCgnbXVsdGlwbGUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkID09IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9ICRlLnByb3AoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXIgPT0gbnVsbCkge1xuICAgICAgaWYgKCRlLnByb3AoJ2RpcicpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kaXIgPSAkZS5wcm9wKCdkaXInKTtcbiAgICAgIH0gZWxzZSBpZiAoJGUuY2xvc2VzdCgnW2Rpcl0nKS5wcm9wKCdkaXInKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJGUuY2xvc2VzdCgnW2Rpcl0nKS5wcm9wKCdkaXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kaXIgPSAnbHRyJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkZS5wcm9wKCdkaXNhYmxlZCcsIHRoaXMub3B0aW9ucy5kaXNhYmxlZCk7XG4gICAgJGUucHJvcCgnbXVsdGlwbGUnLCB0aGlzLm9wdGlvbnMubXVsdGlwbGUpO1xuXG4gICAgaWYgKFV0aWxzLkdldERhdGEoJGVbMF0sICdzZWxlY3QyVGFncycpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1NlbGVjdDI6IFRoZSBgZGF0YS1zZWxlY3QyLXRhZ3NgIGF0dHJpYnV0ZSBoYXMgYmVlbiBjaGFuZ2VkIHRvICcgK1xuICAgICAgICAgICd1c2UgdGhlIGBkYXRhLWRhdGFgIGFuZCBgZGF0YS10YWdzPVwidHJ1ZVwiYCBhdHRyaWJ1dGVzIGFuZCB3aWxsIGJlICcgK1xuICAgICAgICAgICdyZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBTZWxlY3QyLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuU3RvcmVEYXRhKCRlWzBdLCAnZGF0YScsIFV0aWxzLkdldERhdGEoJGVbMF0sICdzZWxlY3QyVGFncycpKTtcbiAgICAgIFV0aWxzLlN0b3JlRGF0YSgkZVswXSwgJ3RhZ3MnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoVXRpbHMuR2V0RGF0YSgkZVswXSwgJ2FqYXhVcmwnKSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdTZWxlY3QyOiBUaGUgYGRhdGEtYWpheC11cmxgIGF0dHJpYnV0ZSBoYXMgYmVlbiBjaGFuZ2VkIHRvICcgK1xuICAgICAgICAgICdgZGF0YS1hamF4LS11cmxgIGFuZCBzdXBwb3J0IGZvciB0aGUgb2xkIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQnICtcbiAgICAgICAgICAnIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBTZWxlY3QyLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgJGUuYXR0cignYWpheC0tdXJsJywgVXRpbHMuR2V0RGF0YSgkZVswXSwgJ2FqYXhVcmwnKSk7XG4gICAgICBVdGlscy5TdG9yZURhdGEoJGVbMF0sICdhamF4LVVybCcsIFV0aWxzLkdldERhdGEoJGVbMF0sICdhamF4VXJsJykpO1xuICAgIH1cblxuICAgIHZhciBkYXRhc2V0ID0ge307XG5cbiAgICBmdW5jdGlvbiB1cHBlckNhc2VMZXR0ZXIoXywgbGV0dGVyKSB7XG4gICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gUHJlLWxvYWQgYWxsIG9mIHRoZSBhdHRyaWJ1dGVzIHdoaWNoIGFyZSBwcmVmaXhlZCB3aXRoIGBkYXRhLWBcbiAgICBmb3IgKHZhciBhdHRyID0gMDsgYXR0ciA8ICRlWzBdLmF0dHJpYnV0ZXMubGVuZ3RoOyBhdHRyKyspIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gJGVbMF0uYXR0cmlidXRlc1thdHRyXS5uYW1lO1xuICAgICAgdmFyIHByZWZpeCA9ICdkYXRhLSc7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVOYW1lLnN1YnN0cigwLCBwcmVmaXgubGVuZ3RoKSA9PSBwcmVmaXgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBjb250ZW50cyBvZiB0aGUgYXR0cmlidXRlIGFmdGVyIGBkYXRhLWBcbiAgICAgICAgdmFyIGRhdGFOYW1lID0gYXR0cmlidXRlTmFtZS5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBkYXRhIGNvbnRlbnRzIGZyb20gdGhlIGNvbnNpc3RlbnQgc291cmNlXG4gICAgICAgIC8vIFRoaXMgaXMgbW9yZSB0aGFuIGxpa2VseSB0aGUgalF1ZXJ5IGRhdGEgaGVscGVyXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBVdGlscy5HZXREYXRhKCRlWzBdLCBkYXRhTmFtZSk7XG5cbiAgICAgICAgLy8gY2FtZWxDYXNlIHRoZSBhdHRyaWJ1dGUgbmFtZSB0byBtYXRjaCB0aGUgc3BlY1xuICAgICAgICB2YXIgY2FtZWxEYXRhTmFtZSA9IGRhdGFOYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIHVwcGVyQ2FzZUxldHRlcik7XG5cbiAgICAgICAgLy8gU3RvcmUgdGhlIGRhdGEgYXR0cmlidXRlIGNvbnRlbnRzIGludG8gdGhlIGRhdGFzZXQgc2luY2VcbiAgICAgICAgZGF0YXNldFtjYW1lbERhdGFOYW1lXSA9IGRhdGFWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmVmZXIgdGhlIGVsZW1lbnQncyBgZGF0YXNldGAgYXR0cmlidXRlIGlmIGl0IGV4aXN0c1xuICAgIC8vIGpRdWVyeSAxLnggZG9lcyBub3QgY29ycmVjdGx5IGhhbmRsZSBkYXRhIGF0dHJpYnV0ZXMgd2l0aCBtdWx0aXBsZSBkYXNoZXNcbiAgICBpZiAoJC5mbi5qcXVlcnkgJiYgJC5mbi5qcXVlcnkuc3Vic3RyKDAsIDIpID09ICcxLicgJiYgJGVbMF0uZGF0YXNldCkge1xuICAgICAgZGF0YXNldCA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkZVswXS5kYXRhc2V0LCBkYXRhc2V0KTtcbiAgICB9XG5cbiAgICAvLyBQcmVmZXIgb3VyIGludGVybmFsIGRhdGEgY2FjaGUgaWYgaXQgZXhpc3RzXG4gICAgdmFyIGRhdGEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgVXRpbHMuR2V0RGF0YSgkZVswXSksIGRhdGFzZXQpO1xuXG4gICAgZGF0YSA9IFV0aWxzLl9jb252ZXJ0RGF0YShkYXRhKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoJC5pbkFycmF5KGtleSwgZXhjbHVkZWREYXRhKSA+IC0xKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KHRoaXMub3B0aW9uc1trZXldKSkge1xuICAgICAgICAkLmV4dGVuZCh0aGlzLm9wdGlvbnNba2V5XSwgZGF0YVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIE9wdGlvbnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zW2tleV07XG4gIH07XG5cbiAgT3B0aW9ucy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgdGhpcy5vcHRpb25zW2tleV0gPSB2YWw7XG4gIH07XG5cbiAgcmV0dXJuIE9wdGlvbnM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2NvcmUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL29wdGlvbnMnLFxuICAnLi91dGlscycsXG4gICcuL2tleXMnXG5dLCBmdW5jdGlvbiAoJCwgT3B0aW9ucywgVXRpbHMsIEtFWVMpIHtcbiAgdmFyIFNlbGVjdDIgPSBmdW5jdGlvbiAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAoVXRpbHMuR2V0RGF0YSgkZWxlbWVudFswXSwgJ3NlbGVjdDInKSAhPSBudWxsKSB7XG4gICAgICBVdGlscy5HZXREYXRhKCRlbGVtZW50WzBdLCAnc2VsZWN0MicpLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgICB0aGlzLmlkID0gdGhpcy5fZ2VuZXJhdGVJZCgkZWxlbWVudCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMsICRlbGVtZW50KTtcblxuICAgIFNlbGVjdDIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgdGhlIHRhYmluZGV4XG5cbiAgICB2YXIgdGFiaW5kZXggPSAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpIHx8IDA7XG4gICAgVXRpbHMuU3RvcmVEYXRhKCRlbGVtZW50WzBdLCAnb2xkLXRhYmluZGV4JywgdGFiaW5kZXgpO1xuICAgICRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICAvLyBTZXQgdXAgY29udGFpbmVycyBhbmQgYWRhcHRlcnNcblxuICAgIHZhciBEYXRhQWRhcHRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ2RhdGFBZGFwdGVyJyk7XG4gICAgdGhpcy5kYXRhQWRhcHRlciA9IG5ldyBEYXRhQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcblxuICAgIHZhciAkY29udGFpbmVyID0gdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMuX3BsYWNlQ29udGFpbmVyKCRjb250YWluZXIpO1xuXG4gICAgdmFyIFNlbGVjdGlvbkFkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdzZWxlY3Rpb25BZGFwdGVyJyk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLiRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5yZW5kZXIoKTtcblxuICAgIHRoaXMuc2VsZWN0aW9uLnBvc2l0aW9uKHRoaXMuJHNlbGVjdGlvbiwgJGNvbnRhaW5lcik7XG5cbiAgICB2YXIgRHJvcGRvd25BZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgnZHJvcGRvd25BZGFwdGVyJyk7XG4gICAgdGhpcy5kcm9wZG93biA9IG5ldyBEcm9wZG93bkFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy4kZHJvcGRvd24gPSB0aGlzLmRyb3Bkb3duLnJlbmRlcigpO1xuXG4gICAgdGhpcy5kcm9wZG93bi5wb3NpdGlvbih0aGlzLiRkcm9wZG93biwgJGNvbnRhaW5lcik7XG5cbiAgICB2YXIgUmVzdWx0c0FkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdyZXN1bHRzQWRhcHRlcicpO1xuICAgIHRoaXMucmVzdWx0cyA9IG5ldyBSZXN1bHRzQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zLCB0aGlzLmRhdGFBZGFwdGVyKTtcbiAgICB0aGlzLiRyZXN1bHRzID0gdGhpcy5yZXN1bHRzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5yZXN1bHRzLnBvc2l0aW9uKHRoaXMuJHJlc3VsdHMsIHRoaXMuJGRyb3Bkb3duKTtcblxuICAgIC8vIEJpbmQgZXZlbnRzXG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBCaW5kIHRoZSBjb250YWluZXIgdG8gYWxsIG9mIHRoZSBhZGFwdGVyc1xuICAgIHRoaXMuX2JpbmRBZGFwdGVycygpO1xuXG4gICAgLy8gUmVnaXN0ZXIgYW55IERPTSBldmVudCBoYW5kbGVyc1xuICAgIHRoaXMuX3JlZ2lzdGVyRG9tRXZlbnRzKCk7XG5cbiAgICAvLyBSZWdpc3RlciBhbnkgaW50ZXJuYWwgZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLl9yZWdpc3RlckRhdGFFdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cygpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRHJvcGRvd25FdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlclJlc3VsdHNFdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlckV2ZW50cygpO1xuXG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uIChpbml0aWFsRGF0YSkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3Rpb246dXBkYXRlJywge1xuICAgICAgICBkYXRhOiBpbml0aWFsRGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBIaWRlIHRoZSBvcmlnaW5hbCBzZWxlY3RcbiAgICAkZWxlbWVudC5hZGRDbGFzcygnc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZScpO1xuICAgICRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIC8vIFN5bmNocm9uaXplIGFueSBtb25pdG9yZWQgYXR0cmlidXRlc1xuICAgIHRoaXMuX3N5bmNBdHRyaWJ1dGVzKCk7XG5cbiAgICBVdGlscy5TdG9yZURhdGEoJGVsZW1lbnRbMF0sICdzZWxlY3QyJywgdGhpcyk7XG5cbiAgICAvLyBFbnN1cmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCAkZWxlbWVudC5kYXRhKCdzZWxlY3QyJykuXG4gICAgJGVsZW1lbnQuZGF0YSgnc2VsZWN0MicsIHRoaXMpO1xuICB9O1xuXG4gIFV0aWxzLkV4dGVuZChTZWxlY3QyLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgIHZhciBpZCA9ICcnO1xuXG4gICAgaWYgKCRlbGVtZW50LmF0dHIoJ2lkJykgIT0gbnVsbCkge1xuICAgICAgaWQgPSAkZWxlbWVudC5hdHRyKCdpZCcpO1xuICAgIH0gZWxzZSBpZiAoJGVsZW1lbnQuYXR0cignbmFtZScpICE9IG51bGwpIHtcbiAgICAgIGlkID0gJGVsZW1lbnQuYXR0cignbmFtZScpICsgJy0nICsgVXRpbHMuZ2VuZXJhdGVDaGFycygyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuICAgIH1cblxuICAgIGlkID0gaWQucmVwbGFjZSgvKDp8XFwufFxcW3xcXF18LCkvZywgJycpO1xuICAgIGlkID0gJ3NlbGVjdDItJyArIGlkO1xuXG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9wbGFjZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgkY29udGFpbmVyKSB7XG4gICAgJGNvbnRhaW5lci5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KTtcblxuICAgIHZhciB3aWR0aCA9IHRoaXMuX3Jlc29sdmVXaWR0aCh0aGlzLiRlbGVtZW50LCB0aGlzLm9wdGlvbnMuZ2V0KCd3aWR0aCcpKTtcblxuICAgIGlmICh3aWR0aCAhPSBudWxsKSB7XG4gICAgICAkY29udGFpbmVyLmNzcygnd2lkdGgnLCB3aWR0aCk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZXNvbHZlV2lkdGggPSBmdW5jdGlvbiAoJGVsZW1lbnQsIG1ldGhvZCkge1xuICAgIHZhciBXSURUSCA9IC9ed2lkdGg6KChbLStdPyhbMC05XSpcXC4pP1swLTldKykocHh8ZW18ZXh8JXxpbnxjbXxtbXxwdHxwYykpL2k7XG5cbiAgICBpZiAobWV0aG9kID09ICdyZXNvbHZlJykge1xuICAgICAgdmFyIHN0eWxlV2lkdGggPSB0aGlzLl9yZXNvbHZlV2lkdGgoJGVsZW1lbnQsICdzdHlsZScpO1xuXG4gICAgICBpZiAoc3R5bGVXaWR0aCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBzdHlsZVdpZHRoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVdpZHRoKCRlbGVtZW50LCAnZWxlbWVudCcpO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QgPT0gJ2VsZW1lbnQnKSB7XG4gICAgICB2YXIgZWxlbWVudFdpZHRoID0gJGVsZW1lbnQub3V0ZXJXaWR0aChmYWxzZSk7XG5cbiAgICAgIGlmIChlbGVtZW50V2lkdGggPD0gMCkge1xuICAgICAgICByZXR1cm4gJ2F1dG8nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudFdpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09ICdzdHlsZScpIHtcbiAgICAgIHZhciBzdHlsZSA9ICRlbGVtZW50LmF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgIGlmICh0eXBlb2Yoc3R5bGUpICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGF0dHJzID0gc3R5bGUuc3BsaXQoJzsnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpID0gaSArIDEpIHtcbiAgICAgICAgdmFyIGF0dHIgPSBhdHRyc1tpXS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IGF0dHIubWF0Y2goV0lEVEgpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsICYmIG1hdGNoZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hlc1sxXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09ICdjb21wdXRlZHN0eWxlJykge1xuICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkZWxlbWVudFswXSk7XG5cbiAgICAgIHJldHVybiBjb21wdXRlZFN0eWxlLndpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRob2Q7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX2JpbmRBZGFwdGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRhdGFBZGFwdGVyLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcbiAgICB0aGlzLnNlbGVjdGlvbi5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLmRyb3Bkb3duLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcbiAgICB0aGlzLnJlc3VsdHMuYmluZCh0aGlzLCB0aGlzLiRjb250YWluZXIpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckRvbUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdjaGFuZ2Uuc2VsZWN0MicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdGlvbjp1cGRhdGUnLCB7XG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignZm9jdXMuc2VsZWN0MicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignZm9jdXMnLCBldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc3luY0EgPSBVdGlscy5iaW5kKHRoaXMuX3N5bmNBdHRyaWJ1dGVzLCB0aGlzKTtcbiAgICB0aGlzLl9zeW5jUyA9IFV0aWxzLmJpbmQodGhpcy5fc3luY1N1YnRyZWUsIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuJGVsZW1lbnRbMF0uYXR0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYXR0YWNoRXZlbnQoJ29ucHJvcGVydHljaGFuZ2UnLCB0aGlzLl9zeW5jQSk7XG4gICAgfVxuXG4gICAgdmFyIG9ic2VydmVyID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHxcbiAgICAgIHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyIHx8XG4gICAgICB3aW5kb3cuTW96TXV0YXRpb25PYnNlcnZlclxuICAgIDtcblxuICAgIGlmIChvYnNlcnZlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBvYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgIHNlbGYuX3N5bmNBKCk7XG4gICAgICAgIHNlbGYuX3N5bmNTKG51bGwsIG11dGF0aW9ucyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy4kZWxlbWVudFswXSwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy4kZWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnRE9NQXR0ck1vZGlmaWVkJyxcbiAgICAgICAgc2VsZi5fc3luY0EsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgICAgdGhpcy4kZWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnRE9NTm9kZUluc2VydGVkJyxcbiAgICAgICAgc2VsZi5fc3luY1MsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgICAgdGhpcy4kZWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnRE9NTm9kZVJlbW92ZWQnLFxuICAgICAgICBzZWxmLl9zeW5jUyxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckRhdGFFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRhQWRhcHRlci5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5vblJlbGF5RXZlbnRzID0gWyd0b2dnbGUnLCAnZm9jdXMnXTtcblxuICAgIHRoaXMuc2VsZWN0aW9uLm9uKCd0b2dnbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRvZ2dsZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmZvY3VzKHBhcmFtcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIGlmICgkLmluQXJyYXkobmFtZSwgbm9uUmVsYXlFdmVudHMpICE9PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZHJvcGRvd24ub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJSZXN1bHRzRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMucmVzdWx0cy5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdlbmFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1kaXNhYmxlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignZGlzYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWRpc2FibGVkJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3F1ZXJ5JywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgaWYgKCFzZWxmLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignb3BlbicsIHt9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhQWRhcHRlci5xdWVyeShwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czphbGwnLCB7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBxdWVyeTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdxdWVyeTphcHBlbmQnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICB0aGlzLmRhdGFBZGFwdGVyLnF1ZXJ5KHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOmFwcGVuZCcsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHF1ZXJ5OiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGtleSA9IGV2dC53aGljaDtcblxuICAgICAgaWYgKHNlbGYuaXNPcGVuKCkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gS0VZUy5FU0MgfHwga2V5ID09PSBLRVlTLlRBQiB8fFxuICAgICAgICAgICAgKGtleSA9PT0gS0VZUy5VUCAmJiBldnQuYWx0S2V5KSkge1xuICAgICAgICAgIHNlbGYuY2xvc2UoZXZ0KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gS0VZUy5FTlRFUikge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czpzZWxlY3QnLCB7fSk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmICgoa2V5ID09PSBLRVlTLlNQQUNFICYmIGV2dC5jdHJsS2V5KSkge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czp0b2dnbGUnLCB7fSk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuVVApIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6cHJldmlvdXMnLCB7fSk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuRE9XTikge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czpuZXh0Jywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChrZXkgPT09IEtFWVMuRU5URVIgfHwga2V5ID09PSBLRVlTLlNQQUNFIHx8XG4gICAgICAgICAgICAoa2V5ID09PSBLRVlTLkRPV04gJiYgZXZ0LmFsdEtleSkpIHtcbiAgICAgICAgICBzZWxmLm9wZW4oKTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3N5bmNBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMub3B0aW9ucy5zZXQoJ2Rpc2FibGVkJywgdGhpcy4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcpKTtcblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRyaWdnZXIoJ2Rpc2FibGUnLCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJpZ2dlcignZW5hYmxlJywge30pO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5faXNDaGFuZ2VNdXRhdGlvbiA9IGZ1bmN0aW9uIChldnQsIG11dGF0aW9ucykge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gSWdub3JlIGFueSBtdXRhdGlvbiBldmVudHMgcmFpc2VkIGZvciBlbGVtZW50cyB0aGF0IGFyZW4ndCBvcHRpb25zIG9yXG4gICAgLy8gb3B0Z3JvdXBzLiBUaGlzIGhhbmRsZXMgdGhlIGNhc2Ugd2hlbiB0aGUgc2VsZWN0IGVsZW1lbnQgaXMgZGVzdHJveWVkXG4gICAgaWYgKFxuICAgICAgZXZ0ICYmIGV2dC50YXJnZXQgJiYgKFxuICAgICAgICBldnQudGFyZ2V0Lm5vZGVOYW1lICE9PSAnT1BUSU9OJyAmJiBldnQudGFyZ2V0Lm5vZGVOYW1lICE9PSAnT1BUR1JPVVAnXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFtdXRhdGlvbnMpIHtcbiAgICAgIC8vIElmIG11dGF0aW9uIGV2ZW50cyBhcmVuJ3Qgc3VwcG9ydGVkLCB0aGVuIHdlIGNhbiBvbmx5IGFzc3VtZSB0aGF0IHRoZVxuICAgICAgLy8gY2hhbmdlIGFmZmVjdGVkIHRoZSBzZWxlY3Rpb25zXG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG11dGF0aW9ucy5hZGRlZE5vZGVzICYmIG11dGF0aW9ucy5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbXV0YXRpb25zLmFkZGVkTm9kZXMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBtdXRhdGlvbnMuYWRkZWROb2Rlc1tuXTtcblxuICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCkge1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtdXRhdGlvbnMucmVtb3ZlZE5vZGVzICYmIG11dGF0aW9ucy5yZW1vdmVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICgkLmlzQXJyYXkobXV0YXRpb25zKSkge1xuICAgICAgJC5lYWNoKG11dGF0aW9ucywgZnVuY3Rpb24oZXZ0LCBtdXRhdGlvbikge1xuICAgICAgICBpZiAoc2VsZi5faXNDaGFuZ2VNdXRhdGlvbihldnQsIG11dGF0aW9uKSkge1xuICAgICAgICAgIC8vIFdlJ3ZlIGZvdW5kIGEgY2hhbmdlIG11dGF0aW9uLlxuICAgICAgICAgIC8vIExldCdzIGVzY2FwZSBmcm9tIHRoZSBsb29wIGFuZCBjb250aW51ZVxuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFuZ2VkO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9zeW5jU3VidHJlZSA9IGZ1bmN0aW9uIChldnQsIG11dGF0aW9ucykge1xuICAgIHZhciBjaGFuZ2VkID0gdGhpcy5faXNDaGFuZ2VNdXRhdGlvbihldnQsIG11dGF0aW9ucyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gT25seSByZS1wdWxsIHRoZSBkYXRhIGlmIHdlIHRoaW5rIHRoZXJlIGlzIGEgY2hhbmdlXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHRoaXMuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3Rpb246dXBkYXRlJywge1xuICAgICAgICAgIGRhdGE6IGN1cnJlbnREYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgdHJpZ2dlciBtZXRob2QgdG8gYXV0b21hdGljYWxseSB0cmlnZ2VyIHByZS1ldmVudHMgd2hlblxuICAgKiB0aGVyZSBhcmUgZXZlbnRzIHRoYXQgY2FuIGJlIHByZXZlbnRlZC5cbiAgICovXG4gIFNlbGVjdDIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAobmFtZSwgYXJncykge1xuICAgIHZhciBhY3R1YWxUcmlnZ2VyID0gU2VsZWN0Mi5fX3N1cGVyX18udHJpZ2dlcjtcbiAgICB2YXIgcHJlVHJpZ2dlck1hcCA9IHtcbiAgICAgICdvcGVuJzogJ29wZW5pbmcnLFxuICAgICAgJ2Nsb3NlJzogJ2Nsb3NpbmcnLFxuICAgICAgJ3NlbGVjdCc6ICdzZWxlY3RpbmcnLFxuICAgICAgJ3Vuc2VsZWN0JzogJ3Vuc2VsZWN0aW5nJyxcbiAgICAgICdjbGVhcic6ICdjbGVhcmluZydcbiAgICB9O1xuXG4gICAgaWYgKGFyZ3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXJncyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChuYW1lIGluIHByZVRyaWdnZXJNYXApIHtcbiAgICAgIHZhciBwcmVUcmlnZ2VyTmFtZSA9IHByZVRyaWdnZXJNYXBbbmFtZV07XG4gICAgICB2YXIgcHJlVHJpZ2dlckFyZ3MgPSB7XG4gICAgICAgIHByZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgIH07XG5cbiAgICAgIGFjdHVhbFRyaWdnZXIuY2FsbCh0aGlzLCBwcmVUcmlnZ2VyTmFtZSwgcHJlVHJpZ2dlckFyZ3MpO1xuXG4gICAgICBpZiAocHJlVHJpZ2dlckFyZ3MucHJldmVudGVkKSB7XG4gICAgICAgIGFyZ3MucHJldmVudGVkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWN0dWFsVHJpZ2dlci5jYWxsKHRoaXMsIG5hbWUsIGFyZ3MpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLnRvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdxdWVyeScsIHt9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ2Nsb3NlJywgeyBvcmlnaW5hbEV2ZW50IDogZXZ0IH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIGFic3RyYWN0IHRoZSBcImVuYWJsZWRcIiAobm90IFwiZGlzYWJsZWRcIikgc3RhdGUgb2YgdGhpc1xuICAgKiBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge3RydWV9IGlmIHRoZSBpbnN0YW5jZSBpcyBub3QgZGlzYWJsZWQuXG4gICAqIEByZXR1cm4ge2ZhbHNlfSBpZiB0aGUgaW5zdGFuY2UgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBTZWxlY3QyLnByb3RvdHlwZS5pc0VuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzRGlzYWJsZWQoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJkaXNhYmxlZFwiIHN0YXRlIG9mIHRoaXMgb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgZGlzYWJsZWQgb3B0aW9uIGlzIHRydWUuXG4gICAqIEByZXR1cm4ge2ZhbHNlfSBpZiB0aGUgZGlzYWJsZWQgb3B0aW9uIGlzIGZhbHNlLlxuICAgKi9cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldCgnZGlzYWJsZWQnKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGNvbnRhaW5lci5oYXNDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5oYXNGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy4kY29udGFpbmVyLmhhc0NsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZm9jdXMnKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gTm8gbmVlZCB0byByZS10cmlnZ2VyIGZvY3VzIGV2ZW50cyBpZiB3ZSBhcmUgYWxyZWFkeSBmb2N1c2VkXG4gICAgaWYgKHRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XG4gICAgdGhpcy50cmlnZ2VyKCdmb2N1cycsIHt9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU2VsZWN0MjogVGhlIGBzZWxlY3QyKFwiZW5hYmxlXCIpYCBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCcgK1xuICAgICAgICAnIGJlIHJlbW92ZWQgaW4gbGF0ZXIgU2VsZWN0MiB2ZXJzaW9ucy4gVXNlICRlbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiKScgK1xuICAgICAgICAnIGluc3RlYWQuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBhcmdzID0gW3RydWVdO1xuICAgIH1cblxuICAgIHZhciBkaXNhYmxlZCA9ICFhcmdzWzBdO1xuXG4gICAgdGhpcy4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsIGRpc2FibGVkKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmXG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU2VsZWN0MjogRGF0YSBjYW4gbm8gbG9uZ2VyIGJlIHNldCB1c2luZyBgc2VsZWN0MihcImRhdGFcIilgLiBZb3UgJyArXG4gICAgICAgICdzaG91bGQgY29uc2lkZXIgc2V0dGluZyB0aGUgdmFsdWUgaW5zdGVhZCB1c2luZyBgJGVsZW1lbnQudmFsKClgLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSBbXTtcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgIGRhdGEgPSBjdXJyZW50RGF0YTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTZWxlY3QyOiBUaGUgYHNlbGVjdDIoXCJ2YWxcIilgIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlJyArXG4gICAgICAgICcgcmVtb3ZlZCBpbiBsYXRlciBTZWxlY3QyIHZlcnNpb25zLiBVc2UgJGVsZW1lbnQudmFsKCkgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChhcmdzID09IG51bGwgfHwgYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50LnZhbCgpO1xuICAgIH1cblxuICAgIHZhciBuZXdWYWwgPSBhcmdzWzBdO1xuXG4gICAgaWYgKCQuaXNBcnJheShuZXdWYWwpKSB7XG4gICAgICBuZXdWYWwgPSAkLm1hcChuZXdWYWwsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai50b1N0cmluZygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC52YWwobmV3VmFsKS50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kY29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgaWYgKHRoaXMuJGVsZW1lbnRbMF0uZGV0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uZGV0YWNoRXZlbnQoJ29ucHJvcGVydHljaGFuZ2UnLCB0aGlzLl9zeW5jQSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29ic2VydmVyICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy4kZWxlbWVudFswXVxuICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQXR0ck1vZGlmaWVkJywgdGhpcy5fc3luY0EsIGZhbHNlKTtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF1cbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIHRoaXMuX3N5bmNTLCBmYWxzZSk7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdXG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Ob2RlUmVtb3ZlZCcsIHRoaXMuX3N5bmNTLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3luY0EgPSBudWxsO1xuICAgIHRoaXMuX3N5bmNTID0gbnVsbDtcblxuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCcuc2VsZWN0MicpO1xuICAgIHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnLFxuICAgIFV0aWxzLkdldERhdGEodGhpcy4kZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcpKTtcblxuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgVXRpbHMuUmVtb3ZlRGF0YSh0aGlzLiRlbGVtZW50WzBdKTtcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZURhdGEoJ3NlbGVjdDInKTtcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuc2VsZWN0aW9uLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRyb3Bkb3duLmRlc3Ryb3koKTtcbiAgICB0aGlzLnJlc3VsdHMuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5kYXRhQWRhcHRlciA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBudWxsO1xuICAgIHRoaXMuZHJvcGRvd24gPSBudWxsO1xuICAgIHRoaXMucmVzdWx0cyA9IG51bGw7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkY29udGFpbmVyID0gJChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDIgc2VsZWN0Mi1jb250YWluZXJcIj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0aW9uXCI+PC9zcGFuPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi13cmFwcGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgICRjb250YWluZXIuYXR0cignZGlyJywgdGhpcy5vcHRpb25zLmdldCgnZGlyJykpO1xuXG4gICAgdGhpcy4kY29udGFpbmVyID0gJGNvbnRhaW5lcjtcblxuICAgIHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLScgKyB0aGlzLm9wdGlvbnMuZ2V0KCd0aGVtZScpKTtcblxuICAgIFV0aWxzLlN0b3JlRGF0YSgkY29udGFpbmVyWzBdLCAnZWxlbWVudCcsIHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdDI7XG59KTtcblxuUzIuZGVmaW5lKCdqcXVlcnktbW91c2V3aGVlbCcsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgLy8gVXNlZCB0byBzaGltIGpRdWVyeS5tb3VzZXdoZWVsIGZvciBub24tZnVsbCBidWlsZHMuXG4gIHJldHVybiAkO1xufSk7XG5cblMyLmRlZmluZSgnanF1ZXJ5LnNlbGVjdDInLFtcbiAgJ2pxdWVyeScsXG4gICdqcXVlcnktbW91c2V3aGVlbCcsXG5cbiAgJy4vc2VsZWN0Mi9jb3JlJyxcbiAgJy4vc2VsZWN0Mi9kZWZhdWx0cycsXG4gICcuL3NlbGVjdDIvdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgXywgU2VsZWN0MiwgRGVmYXVsdHMsIFV0aWxzKSB7XG4gIGlmICgkLmZuLnNlbGVjdDIgPT0gbnVsbCkge1xuICAgIC8vIEFsbCBtZXRob2RzIHRoYXQgc2hvdWxkIHJldHVybiB0aGUgZWxlbWVudFxuICAgIHZhciB0aGlzTWV0aG9kcyA9IFsnb3BlbicsICdjbG9zZScsICdkZXN0cm95J107XG5cbiAgICAkLmZuLnNlbGVjdDIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2VPcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIG9wdGlvbnMpO1xuXG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IFNlbGVjdDIoJCh0aGlzKSwgaW5zdGFuY2VPcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgcmV0O1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBVdGlscy5HZXREYXRhKHRoaXMsICdzZWxlY3QyJyk7XG5cbiAgICAgICAgICBpZiAoaW5zdGFuY2UgPT0gbnVsbCAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAnVGhlIHNlbGVjdDIoXFwnJyArIG9wdGlvbnMgKyAnXFwnKSBtZXRob2Qgd2FzIGNhbGxlZCBvbiBhbiAnICtcbiAgICAgICAgICAgICAgJ2VsZW1lbnQgdGhhdCBpcyBub3QgdXNpbmcgU2VsZWN0Mi4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldCA9IGluc3RhbmNlW29wdGlvbnNdLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2Ugc2hvdWxkIGJlIHJldHVybmluZyBgdGhpc2BcbiAgICAgICAgaWYgKCQuaW5BcnJheShvcHRpb25zLCB0aGlzTWV0aG9kcykgPiAtMSkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudHMgZm9yIFNlbGVjdDI6ICcgKyBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKCQuZm4uc2VsZWN0Mi5kZWZhdWx0cyA9PSBudWxsKSB7XG4gICAgJC5mbi5zZWxlY3QyLmRlZmF1bHRzID0gRGVmYXVsdHM7XG4gIH1cblxuICByZXR1cm4gU2VsZWN0Mjtcbn0pO1xuXG4gIC8vIFJldHVybiB0aGUgQU1EIGxvYWRlciBjb25maWd1cmF0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIG91dHNpZGUgb2YgdGhpcyBmaWxlXG4gIHJldHVybiB7XG4gICAgZGVmaW5lOiBTMi5kZWZpbmUsXG4gICAgcmVxdWlyZTogUzIucmVxdWlyZVxuICB9O1xufSgpKTtcblxuICAvLyBBdXRvbG9hZCB0aGUgalF1ZXJ5IGJpbmRpbmdzXG4gIC8vIFdlIGtub3cgdGhhdCBhbGwgb2YgdGhlIG1vZHVsZXMgZXhpc3QgYWJvdmUgdGhpcywgc28gd2UncmUgc2FmZVxuICB2YXIgc2VsZWN0MiA9IFMyLnJlcXVpcmUoJ2pxdWVyeS5zZWxlY3QyJyk7XG5cbiAgLy8gSG9sZCB0aGUgQU1EIG1vZHVsZSByZWZlcmVuY2VzIG9uIHRoZSBqUXVlcnkgZnVuY3Rpb24gdGhhdCB3YXMganVzdCBsb2FkZWRcbiAgLy8gVGhpcyBhbGxvd3MgU2VsZWN0MiB0byB1c2UgdGhlIGludGVybmFsIGxvYWRlciBvdXRzaWRlIG9mIHRoaXMgZmlsZSwgc3VjaFxuICAvLyBhcyBpbiB0aGUgbGFuZ3VhZ2UgZmlsZXMuXG4gIGpRdWVyeS5mbi5zZWxlY3QyLmFtZCA9IFMyO1xuXG4gIC8vIFJldHVybiB0aGUgU2VsZWN0MiBpbnN0YW5jZSBmb3IgYW55b25lIHdobyBpcyBpbXBvcnRpbmcgaXQuXG4gIHJldHVybiBzZWxlY3QyO1xufSkpO1xuIiwiIWZ1bmN0aW9uKHQsbyl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShvKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1vKCk6dC50aW5nbGU9bygpfSh0aGlzLGZ1bmN0aW9uKCl7dmFyIG89ITE7ZnVuY3Rpb24gdCh0KXt0aGlzLm9wdHM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKWZvcih2YXIgbyBpbiBhcmd1bWVudHNbdF0pYXJndW1lbnRzW3RdLmhhc093blByb3BlcnR5KG8pJiYoYXJndW1lbnRzWzBdW29dPWFyZ3VtZW50c1t0XVtvXSk7cmV0dXJuIGFyZ3VtZW50c1swXX0oe30se29uQ2xvc2U6bnVsbCxvbk9wZW46bnVsbCxiZWZvcmVPcGVuOm51bGwsYmVmb3JlQ2xvc2U6bnVsbCxzdGlja3lGb290ZXI6ITEsZm9vdGVyOiExLGNzc0NsYXNzOltdLGNsb3NlTGFiZWw6XCJDbG9zZVwiLGNsb3NlTWV0aG9kczpbXCJvdmVybGF5XCIsXCJidXR0b25cIixcImVzY2FwZVwiXX0sdCksdGhpcy5pbml0KCl9ZnVuY3Rpb24gZSgpe3RoaXMubW9kYWxCb3hGb290ZXImJih0aGlzLm1vZGFsQm94Rm9vdGVyLnN0eWxlLndpZHRoPXRoaXMubW9kYWxCb3guY2xpZW50V2lkdGgrXCJweFwiLHRoaXMubW9kYWxCb3hGb290ZXIuc3R5bGUubGVmdD10aGlzLm1vZGFsQm94Lm9mZnNldExlZnQrXCJweFwiKX1yZXR1cm4gdC5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe2lmKCF0aGlzLm1vZGFsKXJldHVybiBmdW5jdGlvbigpe3RoaXMubW9kYWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWxcIiksMCE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMubGVuZ3RoJiYtMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcIm92ZXJsYXlcIil8fHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC0tbm9PdmVybGF5Q2xvc2VcIik7dGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHRoaXMub3B0cy5jc3NDbGFzcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wic3RyaW5nXCI9PXR5cGVvZiB0JiZ0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQodCl9LHRoaXMpLC0xIT09dGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwiYnV0dG9uXCIpJiYodGhpcy5tb2RhbENsb3NlQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksdGhpcy5tb2RhbENsb3NlQnRuLnR5cGU9XCJidXR0b25cIix0aGlzLm1vZGFsQ2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbF9fY2xvc2VcIiksdGhpcy5tb2RhbENsb3NlQnRuSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSx0aGlzLm1vZGFsQ2xvc2VCdG5JY29uLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWxfX2Nsb3NlSWNvblwiKSx0aGlzLm1vZGFsQ2xvc2VCdG5JY29uLmlubmVySFRNTD0nPHN2ZyB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNLjMgOS43Yy4yLjIuNC4zLjcuMy4zIDAgLjUtLjEuNy0uM0w1IDYuNGwzLjMgMy4zYy4yLjIuNS4zLjcuMy4yIDAgLjUtLjEuNy0uMy40LS40LjQtMSAwLTEuNEw2LjQgNWwzLjMtMy4zYy40LS40LjQtMSAwLTEuNC0uNC0uNC0xLS40LTEuNCAwTDUgMy42IDEuNy4zQzEuMy0uMS43LS4xLjMuM2MtLjQuNC0uNCAxIDAgMS40TDMuNiA1IC4zIDguM2MtLjQuNC0uNCAxIDAgMS40elwiIGZpbGw9XCIjMDAwXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLHRoaXMubW9kYWxDbG9zZUJ0bkxhYmVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLHRoaXMubW9kYWxDbG9zZUJ0bkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWxfX2Nsb3NlTGFiZWxcIiksdGhpcy5tb2RhbENsb3NlQnRuTGFiZWwuaW5uZXJIVE1MPXRoaXMub3B0cy5jbG9zZUxhYmVsLHRoaXMubW9kYWxDbG9zZUJ0bi5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQ2xvc2VCdG5JY29uKSx0aGlzLm1vZGFsQ2xvc2VCdG4uYXBwZW5kQ2hpbGQodGhpcy5tb2RhbENsb3NlQnRuTGFiZWwpKTt0aGlzLm1vZGFsQm94PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5tb2RhbEJveC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsLWJveFwiKSx0aGlzLm1vZGFsQm94Q29udGVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMubW9kYWxCb3hDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtYm94X19jb250ZW50XCIpLHRoaXMubW9kYWxCb3guYXBwZW5kQ2hpbGQodGhpcy5tb2RhbEJveENvbnRlbnQpLC0xIT09dGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwiYnV0dG9uXCIpJiZ0aGlzLm1vZGFsLmFwcGVuZENoaWxkKHRoaXMubW9kYWxDbG9zZUJ0bik7dGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQm94KX0uY2FsbCh0aGlzKSxmdW5jdGlvbigpe3RoaXMuX2V2ZW50cz17Y2xpY2tDbG9zZUJ0bjp0aGlzLmNsb3NlLmJpbmQodGhpcyksY2xpY2tPdmVybGF5OmZ1bmN0aW9uKHQpe3ZhciBvPXRoaXMubW9kYWwub2Zmc2V0V2lkdGgtdGhpcy5tb2RhbC5jbGllbnRXaWR0aCxlPXQuY2xpZW50WD49dGhpcy5tb2RhbC5vZmZzZXRXaWR0aC0xNSxzPXRoaXMubW9kYWwuc2Nyb2xsSGVpZ2h0IT09dGhpcy5tb2RhbC5vZmZzZXRIZWlnaHQ7aWYoXCJNYWNJbnRlbFwiPT09bmF2aWdhdG9yLnBsYXRmb3JtJiYwPT1vJiZlJiZzKXJldHVybjstMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcIm92ZXJsYXlcIikmJiFmdW5jdGlvbih0LG8pe2Zvcig7KHQ9dC5wYXJlbnRFbGVtZW50KSYmIXQuY2xhc3NMaXN0LmNvbnRhaW5zKG8pOyk7cmV0dXJuIHR9KHQudGFyZ2V0LFwidGluZ2xlLW1vZGFsXCIpJiZ0LmNsaWVudFg8dGhpcy5tb2RhbC5jbGllbnRXaWR0aCYmdGhpcy5jbG9zZSgpfS5iaW5kKHRoaXMpLHJlc2l6ZTp0aGlzLmNoZWNrT3ZlcmZsb3cuYmluZCh0aGlzKSxrZXlib2FyZE5hdjpmdW5jdGlvbih0KXstMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImVzY2FwZVwiKSYmMjc9PT10LndoaWNoJiZ0aGlzLmlzT3BlbigpJiZ0aGlzLmNsb3NlKCl9LmJpbmQodGhpcyl9LC0xIT09dGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwiYnV0dG9uXCIpJiZ0aGlzLm1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fZXZlbnRzLmNsaWNrQ2xvc2VCdG4pO3RoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuX2V2ZW50cy5jbGlja092ZXJsYXkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fZXZlbnRzLnJlc2l6ZSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLl9ldmVudHMua2V5Ym9hcmROYXYpfS5jYWxsKHRoaXMpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbCxkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpLHRoaXMub3B0cy5mb290ZXImJnRoaXMuYWRkRm9vdGVyKCksdGhpc30sdC5wcm90b3R5cGUuX2J1c3k9ZnVuY3Rpb24odCl7bz10fSx0LnByb3RvdHlwZS5faXNCdXN5PWZ1bmN0aW9uKCl7cmV0dXJuIG99LHQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXtudWxsIT09dGhpcy5tb2RhbCYmKHRoaXMuaXNPcGVuKCkmJnRoaXMuY2xvc2UoITApLGZ1bmN0aW9uKCl7LTEhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmluZGV4T2YoXCJidXR0b25cIikmJnRoaXMubW9kYWxDbG9zZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLl9ldmVudHMuY2xpY2tDbG9zZUJ0bik7dGhpcy5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5fZXZlbnRzLmNsaWNrT3ZlcmxheSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9ldmVudHMucmVzaXplKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHRoaXMuX2V2ZW50cy5rZXlib2FyZE5hdil9LmNhbGwodGhpcyksdGhpcy5tb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubW9kYWwpLHRoaXMubW9kYWw9bnVsbCl9LHQucHJvdG90eXBlLmlzT3Blbj1mdW5jdGlvbigpe3JldHVybiEhdGhpcy5tb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aW5nbGUtbW9kYWwtLXZpc2libGVcIil9LHQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oKXtpZighdGhpcy5faXNCdXN5KCkpe3RoaXMuX2J1c3koITApO3ZhciB0PXRoaXM7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdC5vcHRzLmJlZm9yZU9wZW4mJnQub3B0cy5iZWZvcmVPcGVuKCksdGhpcy5tb2RhbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eT90aGlzLm1vZGFsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTp0aGlzLm1vZGFsLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcImRpc3BsYXlcIiksdGhpcy5fc2Nyb2xsUG9zaXRpb249d2luZG93LnBhZ2VZT2Zmc2V0LGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInRpbmdsZS1lbmFibGVkXCIpLGRvY3VtZW50LmJvZHkuc3R5bGUudG9wPS10aGlzLl9zY3JvbGxQb3NpdGlvbitcInB4XCIsdGhpcy5zZXRTdGlja3lGb290ZXIodGhpcy5vcHRzLnN0aWNreUZvb3RlciksdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsLS12aXNpYmxlXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQub3B0cy5vbk9wZW4mJnQub3B0cy5vbk9wZW4uY2FsbCh0KSx0Ll9idXN5KCExKSx0aGlzLmNoZWNrT3ZlcmZsb3coKSx0aGlzfX0sdC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24odCl7aWYoIXRoaXMuX2lzQnVzeSgpKXtpZih0aGlzLl9idXN5KCEwKSwhMSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdHMuYmVmb3JlQ2xvc2UpaWYoIXRoaXMub3B0cy5iZWZvcmVDbG9zZS5jYWxsKHRoaXMpKXJldHVybiB2b2lkIHRoaXMuX2J1c3koITEpO2RvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInRpbmdsZS1lbmFibGVkXCIpLGRvY3VtZW50LmJvZHkuc3R5bGUudG9wPW51bGwsd2luZG93LnNjcm9sbFRvKHt0b3A6dGhpcy5fc2Nyb2xsUG9zaXRpb24sYmVoYXZpb3I6XCJpbnN0YW50XCJ9KSx0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aW5nbGUtbW9kYWwtLXZpc2libGVcIik7dmFyIG89dGhpcztvLm1vZGFsLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsXCJmdW5jdGlvblwiPT10eXBlb2Ygby5vcHRzLm9uQ2xvc2UmJm8ub3B0cy5vbkNsb3NlLmNhbGwodGhpcyksby5fYnVzeSghMSl9fSx0LnByb3RvdHlwZS5zZXRDb250ZW50PWZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P3RoaXMubW9kYWxCb3hDb250ZW50LmlubmVySFRNTD10Oih0aGlzLm1vZGFsQm94Q29udGVudC5pbm5lckhUTUw9XCJcIix0aGlzLm1vZGFsQm94Q29udGVudC5hcHBlbmRDaGlsZCh0KSksdGhpcy5pc09wZW4oKSYmdGhpcy5jaGVja092ZXJmbG93KCksdGhpc30sdC5wcm90b3R5cGUuZ2V0Q29udGVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGFsQm94Q29udGVudH0sdC5wcm90b3R5cGUuYWRkRm9vdGVyPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5tb2RhbEJveEZvb3Rlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMubW9kYWxCb3hGb290ZXIuY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC1ib3hfX2Zvb3RlclwiKSx0aGlzLm1vZGFsQm94LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb3hGb290ZXIpfS5jYWxsKHRoaXMpLHRoaXN9LHQucHJvdG90eXBlLnNldEZvb3RlckNvbnRlbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMubW9kYWxCb3hGb290ZXIuaW5uZXJIVE1MPXQsdGhpc30sdC5wcm90b3R5cGUuZ2V0Rm9vdGVyQ29udGVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGFsQm94Rm9vdGVyfSx0LnByb3RvdHlwZS5zZXRTdGlja3lGb290ZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaXNPdmVyZmxvdygpfHwodD0hMSksdD90aGlzLm1vZGFsQm94LmNvbnRhaW5zKHRoaXMubW9kYWxCb3hGb290ZXIpJiYodGhpcy5tb2RhbEJveC5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKSx0aGlzLm1vZGFsLmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb3hGb290ZXIpLHRoaXMubW9kYWxCb3hGb290ZXIuY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC1ib3hfX2Zvb3Rlci0tc3RpY2t5XCIpLGUuY2FsbCh0aGlzKSx0aGlzLm1vZGFsQm94Q29udGVudC5zdHlsZVtcInBhZGRpbmctYm90dG9tXCJdPXRoaXMubW9kYWxCb3hGb290ZXIuY2xpZW50SGVpZ2h0KzIwK1wicHhcIik6dGhpcy5tb2RhbEJveEZvb3RlciYmKHRoaXMubW9kYWxCb3guY29udGFpbnModGhpcy5tb2RhbEJveEZvb3Rlcil8fCh0aGlzLm1vZGFsLnJlbW92ZUNoaWxkKHRoaXMubW9kYWxCb3hGb290ZXIpLHRoaXMubW9kYWxCb3guYXBwZW5kQ2hpbGQodGhpcy5tb2RhbEJveEZvb3RlciksdGhpcy5tb2RhbEJveEZvb3Rlci5zdHlsZS53aWR0aD1cImF1dG9cIix0aGlzLm1vZGFsQm94Rm9vdGVyLnN0eWxlLmxlZnQ9XCJcIix0aGlzLm1vZGFsQm94Q29udGVudC5zdHlsZVtcInBhZGRpbmctYm90dG9tXCJdPVwiXCIsdGhpcy5tb2RhbEJveEZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKFwidGluZ2xlLW1vZGFsLWJveF9fZm9vdGVyLS1zdGlja3lcIikpKSx0aGlzfSx0LnByb3RvdHlwZS5hZGRGb290ZXJCdG49ZnVuY3Rpb24odCxvLGUpe3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7cmV0dXJuIHMuaW5uZXJIVE1MPXQscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlKSxcInN0cmluZ1wiPT10eXBlb2YgbyYmby5sZW5ndGgmJm8uc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24odCl7cy5jbGFzc0xpc3QuYWRkKHQpfSksdGhpcy5tb2RhbEJveEZvb3Rlci5hcHBlbmRDaGlsZChzKSxzfSx0LnByb3RvdHlwZS5yZXNpemU9ZnVuY3Rpb24oKXtjb25zb2xlLndhcm4oXCJSZXNpemUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMS4wXCIpfSx0LnByb3RvdHlwZS5pc092ZXJmbG93PWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDw9dGhpcy5tb2RhbEJveC5jbGllbnRIZWlnaHR9LHQucHJvdG90eXBlLmNoZWNrT3ZlcmZsb3c9ZnVuY3Rpb24oKXt0aGlzLm1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcInRpbmdsZS1tb2RhbC0tdmlzaWJsZVwiKSYmKHRoaXMuaXNPdmVyZmxvdygpP3RoaXMubW9kYWwuY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC0tb3ZlcmZsb3dcIik6dGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwidGluZ2xlLW1vZGFsLS1vdmVyZmxvd1wiKSwhdGhpcy5pc092ZXJmbG93KCkmJnRoaXMub3B0cy5zdGlja3lGb290ZXI/dGhpcy5zZXRTdGlja3lGb290ZXIoITEpOnRoaXMuaXNPdmVyZmxvdygpJiZ0aGlzLm9wdHMuc3RpY2t5Rm9vdGVyJiYoZS5jYWxsKHRoaXMpLHRoaXMuc2V0U3RpY2t5Rm9vdGVyKCEwKSkpfSx7bW9kYWw6dH19KTsiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBcInNlbGVjdDJcIjtcclxuaW1wb3J0IHRpbmdsZSBmcm9tIFwidGluZ2xlLmpzXCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvLyBPbmdraXIgZm9ybVxyXG4gICAgJChcIi5zZG9rci1mb3JtX190YWIgYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIik7XHJcblxyXG4gICAgICAgICQoXCIuc2Rva3ItZm9ybV9fdGFiXCIpLnJlbW92ZUNsYXNzKFwic2Rva3ItZm9ybV9fdGFiLS1hY3RpdmVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoXCIuc2Rva3ItZm9ybV9fdGFiXCIpLmFkZENsYXNzKFwic2Rva3ItZm9ybV9fdGFiLS1hY3RpdmVcIik7XHJcblxyXG4gICAgICAgICQoXCIuc2Rva3ItZm9ybV9fY29udGVudFwiKS5yZW1vdmVDbGFzcyhcInNkb2tyLWZvcm1fX2NvbnRlbnQtLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKHRhcmdldCkuYWRkQ2xhc3MoXCJzZG9rci1mb3JtX19jb250ZW50LS1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTZWxlY3QyXHJcbiAgICAkKFwiLnNkb2tyLXNlbGVjdDJcIikuc2VsZWN0MigpO1xyXG5cclxuICAgICQoXCIuc2Rva3ItbG9jYXRpb24tc2VsZWN0MlwiKS5zZWxlY3QyKHtcclxuICAgICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDMsXHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICBkZWxheTogMjUwLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHE6IHBhcmFtcy50ZXJtLCAvLyBzZWFyY2ggcXVlcnlcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX3NlYXJjaF9sb2NhdGlvblwiLCAvLyBBSkFYIGFjdGlvbiBmb3IgYWRtaW4tYWpheC5waHAsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IGRhdGEuZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRXJyb3IgbW9kYWxcclxuICAgIHZhciBlcnJvcl9tb2RhbCA9IG5ldyB0aW5nbGUubW9kYWwoe1xyXG4gICAgICAgIGZvb3RlcjogdHJ1ZSxcclxuICAgICAgICBzdGlja3lGb290ZXI6IHRydWUsXHJcbiAgICAgICAgY2xvc2VNZXRob2RzOiBbXCJvdmVybGF5XCIsIFwiYnV0dG9uXCIsIFwiZXNjYXBlXCJdLFxyXG4gICAgICAgIGNsb3NlTGFiZWw6IHNkb25na2lyX2xjei5jbG9zZV9sYWJlbCxcclxuICAgIH0pO1xyXG4gICAgZXJyb3JfbW9kYWwuYWRkRm9vdGVyQnRuKFxyXG4gICAgICAgIFwiT2tcIixcclxuICAgICAgICBcInRpbmdsZS1idG4gdGluZ2xlLWJ0bi0tcHJpbWFyeSB0aW5nbGUtYnRuLS1wdWxsLXJpZ2h0XCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlcnJvcl9tb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEdldCBzaGlwcGluZyBjb3N0XHJcbiAgICAkKFwiI3Nkb2tyLXNoaXBwaW5nLWNvc3QtZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIGluc3RhbmNpYXRlIG5ldyBtb2RhbFxyXG4gICAgICAgIHZhciBtb2RhbCA9IG5ldyB0aW5nbGUubW9kYWwoe1xyXG4gICAgICAgICAgICBmb290ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHN0aWNreUZvb3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgY2xvc2VNZXRob2RzOiBbXCJvdmVybGF5XCIsIFwiYnV0dG9uXCIsIFwiZXNjYXBlXCJdLFxyXG4gICAgICAgICAgICBjbG9zZUxhYmVsOiBzZG9uZ2tpcl9sY3ouY2xvc2VfbGFiZWwsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhIGJ1dHRvblxyXG4gICAgICAgIG1vZGFsLmFkZEZvb3RlckJ0bihcclxuICAgICAgICAgICAgXCJPa1wiLFxyXG4gICAgICAgICAgICBcInRpbmdsZS1idG4gdGluZ2xlLWJ0bi0tcHJpbWFyeSB0aW5nbGUtYnRuLS1wdWxsLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdmFyIGNvdXJpZXJzID0gW107XHJcbiAgICAgICAgJChcIi5zZG9rci1jb3VyaWVycy1jYjpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb3VyaWVycy5wdXNoKCQodGhpcykuYXR0cihcInZhbHVlXCIpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBzZG9uZ2tpcl9sY3ouYWpheHVybCxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfc2hpcHBpbmdfY29zdFwiLFxyXG4gICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiAkKFwiI3Nkb2tyLW9yaWdpblwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIGRlc3Q6ICQoXCIjc2Rva3ItZGVzdGluYXRpb25cIikudmFsKCksXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6ICQoXCIjc2Rva3Itd2VpZ2h0XCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgY291cmllcnM6IGNvdXJpZXJzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSByZXMuZGF0YS5kYXRhLmh0bWw7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgY29udGVudFxyXG4gICAgICAgICAgICAgICAgbW9kYWwuc2V0Q29udGVudChodG1sKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAvLyBvcGVuIG1vZGFsXHJcbiAgICAgICAgICAgICAgICBtb2RhbC5vcGVuKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JfbW9kYWwuc2V0Q29udGVudChlcnIucmVzcG9uc2VKU09OLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBlcnJvcl9tb2RhbC5vcGVuKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDb3VyaWVyIHNlbGVjdGlvbiB0eXBlXHJcbiAgICBsZXQgY291cmllcl9zZWxlY3Rpb25fdHlwZSA9IFwic2luZ2xlXCI7XHJcbiAgICAkKFwiLnNkb2tyLXNlbGVjdGlvbi10eXBlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvdXJpZXJfc2VsZWN0aW9uX3R5cGUgPVxyXG4gICAgICAgICAgICBjb3VyaWVyX3NlbGVjdGlvbl90eXBlID09IFwic2luZ2xlXCIgPyBcIm11bHRpcGxlXCIgOiBcInNpbmdsZVwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvdXJpZXJfc2VsZWN0aW9uX3R5cGUpO1xyXG4gICAgICAgIGlmIChjb3VyaWVyX3NlbGVjdGlvbl90eXBlID09IFwic2luZ2xlXCIpIHtcclxuICAgICAgICAgICAgJChcIi5zZG9rci1zaW5nbGUtY291cmllci1zZWxlY3Rpb25cIikucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnNkb2tyLWNvdXJpZXJzLXdyYXBwZXJcIikuYWRkQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnNkb2tyLXNlbGVjdC1hbGxcIikuYWRkQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnNkb2tyLXVuc2VsZWN0LWFsbFwiKS5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuaHRtbChzZG9uZ2tpcl9sY3oubXVsdGlwbGVfc2VsZWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiLnNkb2tyLXNpbmdsZS1jb3VyaWVyLXNlbGVjdGlvblwiKS5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2Rva3ItY291cmllcnMtd3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2Rva3Itc2VsZWN0LWFsbFwiKS5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2Rva3ItdW5zZWxlY3QtYWxsXCIpLnJlbW92ZUNsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5odG1sKHNkb25na2lyX2xjei5zaW5nbGVfc2VsZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTaGlwcGluZyBjb3N0XHJcbiAgICAkKFwiI3Nkb2tyLXNoaXBwaW5nLXRyYWNraW5nLWZvcm1cIikuc3VibWl0KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBpbnN0YW5jaWF0ZSBuZXcgbW9kYWxcclxuICAgICAgICB2YXIgbW9kYWwgPSBuZXcgdGluZ2xlLm1vZGFsKHtcclxuICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBzdGlja3lGb290ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGNsb3NlTWV0aG9kczogW1wib3ZlcmxheVwiLCBcImJ1dHRvblwiLCBcImVzY2FwZVwiXSxcclxuICAgICAgICAgICAgY2xvc2VMYWJlbDogc2RvbmdraXJfbGN6LmNsb3NlX2xhYmVsLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzZXQgY29udGVudFxyXG4gICAgICAgIG1vZGFsLnNldENvbnRlbnQoXCI8aDE+U2hpcHBpbmcgdHJhY2s8L2gxPlwiKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGEgYnV0dG9uXHJcbiAgICAgICAgbW9kYWwuYWRkRm9vdGVyQnRuKFxyXG4gICAgICAgICAgICBcIk9rXCIsXHJcbiAgICAgICAgICAgIFwidGluZ2xlLWJ0biB0aW5nbGUtYnRuLS1wcmltYXJ5IHRpbmdsZS1idG4tLXB1bGwtcmlnaHRcIixcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBvcGVuIG1vZGFsXHJcbiAgICAgICAgbW9kYWwub3BlbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zZG9rci1yZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFsZXJ0KFwidGVzdFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2Rva3Itc2VsZWN0LWFsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCQodGhpcykuZGF0YShcInRhcmdldFwiKSkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnNkb2tyLXVuc2VsZWN0LWFsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCQodGhpcykuZGF0YShcInRhcmdldFwiKSkucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9