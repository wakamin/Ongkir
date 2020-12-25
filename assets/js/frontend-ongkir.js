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

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-form__tab-nav").on("click", function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent(".sdokr-form__tab").parent(".sdokr-form__tabs").find(".sdokr-form__tab").removeClass("sdokr-form__tab--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent(".sdokr-form__tab").addClass("sdokr-form__tab--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent(".sdokr-form__tab").parent(".sdokr-form__tabs").parent(".sdokr-form").find(".sdokr-form__content").removeClass("sdokr-form__content--active");
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
  }); // Courier selection type

  var courier_selection_type = "single";
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-selection-type").on("click", function () {
    courier_selection_type = courier_selection_type == "single" ? "multiple" : "single";

    if (courier_selection_type == "single") {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings(".sdokr-single-courier-selection").removeClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings(".sdokr-couriers-wrapper").addClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings(".sdokr-select-all").addClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings(".sdokr-unselect-all").addClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html(sdongkir_lcz.multiple_selection);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings(".sdokr-single-courier-selection").addClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings(".sdokr-couriers-wrapper").removeClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings(".sdokr-select-all").removeClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings(".sdokr-unselect-all").removeClass("sdokr-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html(sdongkir_lcz.single_selection);
    }
  }); // Get shipping cost

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-shipping-cost-form").submit(function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-scost-btn").attr("disabled", true);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-scost-btn").html(sdongkir_lcz.processing_text); // instanciate new modal

    var modal = new tingle_js__WEBPACK_IMPORTED_MODULE_2___default.a.modal({
      // footer: true,
      // stickyFooter: true,
      closeMethods: ["overlay", "button", "escape"],
      closeLabel: sdongkir_lcz.close_label
    }); // // add a button
    // modal.addFooterBtn(
    //     "Ok",
    //     "tingle-btn tingle-btn--primary tingle-btn--pull-right",
    //     function () {
    //         modal.close();
    //     },
    // );

    var couriers = [];

    if (courier_selection_type == "single") {
      couriers.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".sdokr-cost-courier").val());
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".sdokr-couriers-cb:checked").each(function () {
        couriers.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("value"));
      });
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: sdongkir_lcz.ajaxurl,
      type: "POST",
      data: {
        action: "ongkir_shipping_cost",
        nonce_ajax: sdongkir_lcz.nonce,
        origin: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".sdokr-origin-input").val(),
        dest: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".sdokr-destination-input").val(),
        weight: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".sdokr-weight-input").val(),
        couriers: couriers
      },
      success: function success(res) {
        var html = res.data.data.html; // set content

        modal.setContent(html); // open modal

        modal.open();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-scost-btn").attr("disabled", false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-scost-btn").html(sdongkir_lcz.get_shipping_cost_text);
      },
      error: function error(err) {
        console.log(err);
        error_modal.setContent(err.responseJSON.data.message);
        error_modal.open();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-scost-btn").attr("disabled", false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-scost-btn").html(sdongkir_lcz.get_shipping_cost_text);
      }
    });
  }); // Shipping tracking

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-shipping-tracking-form").submit(function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-strack-btn").attr("disabled", true);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-strack-btn").html(sdongkir_lcz.processing_text); // instanciate new modal

    var modal = new tingle_js__WEBPACK_IMPORTED_MODULE_2___default.a.modal({
      // footer: true,
      // stickyFooter: true,
      closeMethods: ["overlay", "button", "escape"],
      closeLabel: sdongkir_lcz.close_label,
      cssClass: ["sdokr-tingle-ship-tracking"]
    }); // // add a button
    // modal.addFooterBtn(
    //     "Ok",
    //     "tingle-btn tingle-btn--primary tingle-btn--pull-right",
    //     function () {
    //         modal.close();
    //     },
    // );

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: sdongkir_lcz.ajaxurl,
      type: "POST",
      data: {
        action: "ongkir_shipping_track",
        nonce_ajax: sdongkir_lcz.nonce,
        tracking_number: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".sdokr-tracking-number-input").val(),
        courier: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".sdokr-track-courier-input").val()
      },
      success: function success(res) {
        var html = res.data.data.html; // set content

        modal.setContent(html); // open modal

        modal.open();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-strack-btn").attr("disabled", false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-strack-btn").html(sdongkir_lcz.get_shipping_cost_text);
      },
      error: function error(err) {
        console.log(err);
        error_modal.setContent(err.responseJSON.data.message);
        error_modal.open();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-strack-btn").attr("disabled", false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdokr-strack-btn").html(sdongkir_lcz.get_shipping_track_text);
      }
    });
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

module.exports = __webpack_require__(/*! E:\Course\WooCommerce\JuanPablo\wp-content\plugins\ongkir\src\assets\js\frontend-ongkir.js */"./src/assets/js/frontend-ongkir.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW5nbGUuanMvZGlzdC90aW5nbGUubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZnJvbnRlbmQtb25na2lyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJkZWZpbmUiLCJqUXVlcnkiLCJTMiIsImZuIiwic2VsZWN0MiIsImFtZCIsInJlcXVpcmVqcyIsInJlcXVpcmUiLCJ1bmRlZiIsIm1haW4iLCJyZXEiLCJtYWtlTWFwIiwiaGFuZGxlcnMiLCJkZWZpbmVkIiwid2FpdGluZyIsImNvbmZpZyIsImRlZmluaW5nIiwiaGFzT3duIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJhcHMiLCJzbGljZSIsImpzU3VmZml4UmVnRXhwIiwiaGFzUHJvcCIsIm9iaiIsInByb3AiLCJjYWxsIiwibm9ybWFsaXplIiwibmFtZSIsImJhc2VOYW1lIiwibmFtZVBhcnRzIiwibmFtZVNlZ21lbnQiLCJtYXBWYWx1ZSIsImZvdW5kTWFwIiwibGFzdEluZGV4IiwiZm91bmRJIiwiZm91bmRTdGFyTWFwIiwic3RhckkiLCJpIiwiaiIsInBhcnQiLCJub3JtYWxpemVkQmFzZVBhcnRzIiwiYmFzZVBhcnRzIiwic3BsaXQiLCJtYXAiLCJzdGFyTWFwIiwibGVuZ3RoIiwibm9kZUlkQ29tcGF0IiwidGVzdCIsInJlcGxhY2UiLCJjaGFyQXQiLCJjb25jYXQiLCJzcGxpY2UiLCJqb2luIiwibWFrZVJlcXVpcmUiLCJyZWxOYW1lIiwiZm9yY2VTeW5jIiwiYXJncyIsImFyZ3VtZW50cyIsInB1c2giLCJhcHBseSIsIm1ha2VOb3JtYWxpemUiLCJtYWtlTG9hZCIsImRlcE5hbWUiLCJ2YWx1ZSIsImNhbGxEZXAiLCJFcnJvciIsInNwbGl0UHJlZml4IiwicHJlZml4IiwiaW5kZXgiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwibWFrZVJlbFBhcnRzIiwicmVsUGFydHMiLCJwbHVnaW4iLCJwYXJ0cyIsInJlbFJlc291cmNlTmFtZSIsImYiLCJuIiwicHIiLCJwIiwibWFrZUNvbmZpZyIsImV4cG9ydHMiLCJlIiwibW9kdWxlIiwiaWQiLCJ1cmkiLCJkZXBzIiwiY2FsbGJhY2siLCJjanNNb2R1bGUiLCJyZXQiLCJjYWxsYmFja1R5cGUiLCJ1c2luZ0V4cG9ydHMiLCJsb2FkIiwidW5kZWZpbmVkIiwiYWx0Iiwic2V0VGltZW91dCIsImNmZyIsIl9kZWZpbmVkIiwiXyQiLCIkIiwiY29uc29sZSIsImVycm9yIiwiVXRpbHMiLCJFeHRlbmQiLCJDaGlsZENsYXNzIiwiU3VwZXJDbGFzcyIsIl9faGFzUHJvcCIsIkJhc2VDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwia2V5IiwiX19zdXBlcl9fIiwiZ2V0TWV0aG9kcyIsInRoZUNsYXNzIiwicHJvdG8iLCJtZXRob2RzIiwibWV0aG9kTmFtZSIsIm0iLCJEZWNvcmF0ZSIsIkRlY29yYXRvckNsYXNzIiwiZGVjb3JhdGVkTWV0aG9kcyIsInN1cGVyTWV0aG9kcyIsIkRlY29yYXRlZENsYXNzIiwidW5zaGlmdCIsIkFycmF5IiwiYXJnQ291bnQiLCJjYWxsZWRDb25zdHJ1Y3RvciIsImRpc3BsYXlOYW1lIiwiY3RyIiwic3VwZXJNZXRob2QiLCJjYWxsZWRNZXRob2QiLCJvcmlnaW5hbE1ldGhvZCIsImRlY29yYXRlZE1ldGhvZCIsImQiLCJPYnNlcnZhYmxlIiwibGlzdGVuZXJzIiwib24iLCJldmVudCIsInRyaWdnZXIiLCJwYXJhbXMiLCJfdHlwZSIsImludm9rZSIsImxlbiIsImdlbmVyYXRlQ2hhcnMiLCJjaGFycyIsInJhbmRvbUNoYXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImJpbmQiLCJmdW5jIiwiY29udGV4dCIsIl9jb252ZXJ0RGF0YSIsImRhdGEiLCJvcmlnaW5hbEtleSIsImtleXMiLCJkYXRhTGV2ZWwiLCJrIiwidG9Mb3dlckNhc2UiLCJoYXNTY3JvbGwiLCJlbCIsIiRlbCIsIm92ZXJmbG93WCIsInN0eWxlIiwib3ZlcmZsb3dZIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJpbm5lcldpZHRoIiwic2Nyb2xsV2lkdGgiLCJlc2NhcGVNYXJrdXAiLCJtYXJrdXAiLCJyZXBsYWNlTWFwIiwiU3RyaW5nIiwibWF0Y2giLCJhcHBlbmRNYW55IiwiJGVsZW1lbnQiLCIkbm9kZXMiLCJqcXVlcnkiLCJzdWJzdHIiLCIkanFOb2RlcyIsIm5vZGUiLCJhZGQiLCJhcHBlbmQiLCJfX2NhY2hlIiwiR2V0VW5pcXVlRWxlbWVudElkIiwiZWxlbWVudCIsInNlbGVjdDJJZCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIlN0b3JlRGF0YSIsIkdldERhdGEiLCJSZW1vdmVEYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwiUmVzdWx0cyIsIm9wdGlvbnMiLCJkYXRhQWRhcHRlciIsInJlbmRlciIsIiRyZXN1bHRzIiwiZ2V0IiwiYXR0ciIsImNsZWFyIiwiZW1wdHkiLCJkaXNwbGF5TWVzc2FnZSIsImhpZGVMb2FkaW5nIiwiJG1lc3NhZ2UiLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwiaGlkZU1lc3NhZ2VzIiwiZmluZCIsInJlbW92ZSIsIiRvcHRpb25zIiwicmVzdWx0cyIsImNoaWxkcmVuIiwic29ydCIsIml0ZW0iLCIkb3B0aW9uIiwib3B0aW9uIiwicG9zaXRpb24iLCIkZHJvcGRvd24iLCIkcmVzdWx0c0NvbnRhaW5lciIsInNvcnRlciIsImhpZ2hsaWdodEZpcnN0SXRlbSIsIiRzZWxlY3RlZCIsImZpbHRlciIsImZpcnN0IiwiZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSIsInNldENsYXNzZXMiLCJzZWxmIiwiY3VycmVudCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJZHMiLCJzIiwiZWFjaCIsImluQXJyYXkiLCJzaG93TG9hZGluZyIsImxvYWRpbmdNb3JlIiwibG9hZGluZyIsImRpc2FibGVkIiwidGV4dCIsIiRsb2FkaW5nIiwicHJlcGVuZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJzIiwibWF0Y2hlcyIsIndpbmRvdyIsIkVsZW1lbnQiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIl9yZXN1bHRJZCIsInRpdGxlIiwicm9sZSIsInZhbCIsImxhYmVsIiwiJGxhYmVsIiwidGVtcGxhdGUiLCIkY2hpbGRyZW4iLCJjIiwiY2hpbGQiLCIkY2hpbGQiLCIkY2hpbGRyZW5Db250YWluZXIiLCJjb250YWluZXIiLCIkY29udGFpbmVyIiwiaXNPcGVuIiwicmVtb3ZlQXR0ciIsIiRoaWdobGlnaHRlZCIsImdldEhpZ2hsaWdodGVkUmVzdWx0cyIsImN1cnJlbnRJbmRleCIsIm5leHRJbmRleCIsIiRuZXh0IiwiZXEiLCJjdXJyZW50T2Zmc2V0Iiwib2Zmc2V0IiwidG9wIiwibmV4dFRvcCIsIm5leHRPZmZzZXQiLCJzY3JvbGxUb3AiLCJvdXRlckhlaWdodCIsIm5leHRCb3R0b20iLCJhZGRDbGFzcyIsIm1vdXNld2hlZWwiLCJib3R0b20iLCJkZWx0YVkiLCJpc0F0VG9wIiwiaXNBdEJvdHRvbSIsImhlaWdodCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXZ0IiwiJHRoaXMiLCJvcmlnaW5hbEV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJkZXN0cm95Iiwib2Zmc2V0RGVsdGEiLCJyZXN1bHQiLCJjb250ZW50IiwiZGlzcGxheSIsImlubmVySFRNTCIsIktFWVMiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQyIsIlNQQUNFIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsIkVORCIsIkhPTUUiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJERUxFVEUiLCJCYXNlU2VsZWN0aW9uIiwiJHNlbGVjdGlvbiIsIl90YWJpbmRleCIsInJlc3VsdHNJZCIsIl9oYW5kbGVCbHVyIiwid2hpY2giLCJ1cGRhdGUiLCJfYXR0YWNoQ2xvc2VIYW5kbGVyIiwiX2RldGFjaENsb3NlSGFuZGxlciIsImFjdGl2ZUVsZW1lbnQiLCJjb250YWlucyIsImJvZHkiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiJHNlbGVjdCIsImNsb3Nlc3QiLCIkYWxsIiwib2ZmIiwiJHNlbGVjdGlvbkNvbnRhaW5lciIsImlzRW5hYmxlZCIsImlzRGlzYWJsZWQiLCJTaW5nbGVTZWxlY3Rpb24iLCJodG1sIiwiJHJlbmRlcmVkIiwic2VsZWN0aW9uQ29udGFpbmVyIiwic2VsZWN0aW9uIiwiZm9ybWF0dGVkIiwiTXVsdGlwbGVTZWxlY3Rpb24iLCIkcmVtb3ZlIiwicGFyZW50IiwiJHNlbGVjdGlvbnMiLCJQbGFjZWhvbGRlciIsImRlY29yYXRlZCIsInBsYWNlaG9sZGVyIiwibm9ybWFsaXplUGxhY2Vob2xkZXIiLCJfIiwiY3JlYXRlUGxhY2Vob2xkZXIiLCIkcGxhY2Vob2xkZXIiLCJzaW5nbGVQbGFjZWhvbGRlciIsIm11bHRpcGxlU2VsZWN0aW9ucyIsIkFsbG93Q2xlYXIiLCJfaGFuZGxlQ2xlYXIiLCJfaGFuZGxlS2V5Ym9hcmRDbGVhciIsIiRjbGVhciIsInByZXZpb3VzVmFsIiwidW5zZWxlY3REYXRhIiwicHJldmVudGVkIiwicmVtb3ZlQWxsIiwiU2VhcmNoIiwiJHNlYXJjaCIsIiRzZWFyY2hDb250YWluZXIiLCJfdHJhbnNmZXJUYWJJbmRleCIsIl9rZXlVcFByZXZlbnRlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIiRwcmV2aW91c0Nob2ljZSIsInByZXYiLCJzZWFyY2hSZW1vdmVDaG9pY2UiLCJtc2llIiwiZG9jdW1lbnRNb2RlIiwiZGlzYWJsZUlucHV0RXZlbnRzIiwidHlwZSIsImhhbmRsZVNlYXJjaCIsInNlYXJjaEhhZEZvY3VzIiwicmVzaXplU2VhcmNoIiwiaW5wdXQiLCJ0ZXJtIiwiY3NzIiwid2lkdGgiLCJtaW5pbXVtV2lkdGgiLCJFdmVudFJlbGF5IiwicmVsYXlFdmVudHMiLCJwcmV2ZW50YWJsZUV2ZW50cyIsIkV2ZW50IiwiVHJhbnNsYXRpb24iLCJkaWN0IiwiYWxsIiwiZXh0ZW5kIiwidHJhbnNsYXRpb24iLCJfY2FjaGUiLCJsb2FkUGF0aCIsInBhdGgiLCJ0cmFuc2xhdGlvbnMiLCJkaWFjcml0aWNzIiwiQmFzZUFkYXB0ZXIiLCJxdWVyeSIsImdlbmVyYXRlUmVzdWx0SWQiLCJTZWxlY3RBZGFwdGVyIiwic2VsZWN0IiwiaXMiLCJjdXJyZW50RGF0YSIsInVuc2VsZWN0IiwiYWRkT3B0aW9ucyIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0Iiwibm9ybWFsaXplZERhdGEiLCJfbm9ybWFsaXplSXRlbSIsImRlZmF1bHRzIiwibWF0Y2hlciIsIkFycmF5QWRhcHRlciIsIl9kYXRhVG9Db252ZXJ0IiwiY29udmVydFRvT3B0aW9ucyIsImVsbSIsIiRleGlzdGluZyIsImV4aXN0aW5nSWRzIiwib25seUl0ZW0iLCIkZXhpc3RpbmdPcHRpb24iLCJleGlzdGluZ0RhdGEiLCJuZXdEYXRhIiwiJG5ld09wdGlvbiIsInJlcGxhY2VXaXRoIiwiQWpheEFkYXB0ZXIiLCJhamF4T3B0aW9ucyIsIl9hcHBseURlZmF1bHRzIiwicHJvY2Vzc1Jlc3VsdHMiLCJxIiwidHJhbnNwb3J0Iiwic3VjY2VzcyIsImZhaWx1cmUiLCIkcmVxdWVzdCIsImFqYXgiLCJ0aGVuIiwiZmFpbCIsIl9yZXF1ZXN0IiwiaXNGdW5jdGlvbiIsImFib3J0IiwidXJsIiwicmVxdWVzdCIsImlzQXJyYXkiLCJzdGF0dXMiLCJkZWxheSIsIl9xdWVyeVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJUYWdzIiwidGFncyIsImNyZWF0ZVRhZyIsImluc2VydFRhZyIsInQiLCJ0YWciLCJfcmVtb3ZlT2xkVGFncyIsInBhZ2UiLCJ3cmFwcGVyIiwiY2hlY2tDaGlsZHJlbiIsIm9wdGlvblRleHQiLCJ0b1VwcGVyQ2FzZSIsInBhcmFtc1Rlcm0iLCJjaGVja1RleHQiLCJ0cmltIiwiVG9rZW5pemVyIiwidG9rZW5pemVyIiwiZHJvcGRvd24iLCJjcmVhdGVBbmRTZWxlY3QiLCIkZXhpc3RpbmdPcHRpb25zIiwidG9rZW5EYXRhIiwic2VwYXJhdG9ycyIsInRlcm1DaGFyIiwicGFydFBhcmFtcyIsIk1pbmltdW1JbnB1dExlbmd0aCIsIiRlIiwibWluaW11bUlucHV0TGVuZ3RoIiwibWluaW11bSIsIk1heGltdW1JbnB1dExlbmd0aCIsIm1heGltdW1JbnB1dExlbmd0aCIsIm1heGltdW0iLCJNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoIiwibWF4aW11bVNlbGVjdGlvbkxlbmd0aCIsIl9jaGVja0lmTWF4aW11bVNlbGVjdGVkIiwic3VjY2Vzc0NhbGxiYWNrIiwiY291bnQiLCJEcm9wZG93biIsInNob3dTZWFyY2giLCJIaWRlUGxhY2Vob2xkZXIiLCJyZW1vdmVQbGFjZWhvbGRlciIsIm1vZGlmaWVkRGF0YSIsIkluZmluaXRlU2Nyb2xsIiwibGFzdFBhcmFtcyIsIiRsb2FkaW5nTW9yZSIsImNyZWF0ZUxvYWRpbmdNb3JlIiwic2hvd0xvYWRpbmdNb3JlIiwibG9hZE1vcmVJZk5lZWRlZCIsImlzTG9hZE1vcmVWaXNpYmxlIiwiZG9jdW1lbnRFbGVtZW50IiwibG9hZGluZ01vcmVPZmZzZXQiLCJsb2FkTW9yZSIsInBhZ2luYXRpb24iLCJtb3JlIiwiQXR0YWNoQm9keSIsIiRkcm9wZG93blBhcmVudCIsIl9zaG93RHJvcGRvd24iLCJfYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyIiwiX2JpbmRDb250YWluZXJSZXN1bHRIYW5kbGVycyIsIl9oaWRlRHJvcGRvd24iLCJfZGV0YWNoUG9zaXRpb25pbmdIYW5kbGVyIiwiJGRyb3Bkb3duQ29udGFpbmVyIiwiZGV0YWNoIiwiX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kIiwiX3Bvc2l0aW9uRHJvcGRvd24iLCJfcmVzaXplRHJvcGRvd24iLCJzY3JvbGxFdmVudCIsInJlc2l6ZUV2ZW50Iiwib3JpZW50YXRpb25FdmVudCIsIiR3YXRjaGVycyIsInBhcmVudHMiLCJ4Iiwic2Nyb2xsTGVmdCIsInkiLCJldiIsIiR3aW5kb3ciLCJpc0N1cnJlbnRseUFib3ZlIiwiaGFzQ2xhc3MiLCJpc0N1cnJlbnRseUJlbG93IiwibmV3RGlyZWN0aW9uIiwidmlld3BvcnQiLCJlbm91Z2hSb29tQWJvdmUiLCJlbm91Z2hSb29tQmVsb3ciLCJsZWZ0IiwiJG9mZnNldFBhcmVudCIsIm9mZnNldFBhcmVudCIsInBhcmVudE9mZnNldCIsImlzQ29ubmVjdGVkIiwib3V0ZXJXaWR0aCIsIm1pbldpZHRoIiwiYXBwZW5kVG8iLCJjb3VudFJlc3VsdHMiLCJNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiSW5maW5pdHkiLCJTZWxlY3RPbkNsb3NlIiwiX2hhbmRsZVNlbGVjdE9uQ2xvc2UiLCJvcmlnaW5hbFNlbGVjdDJFdmVudCIsIiRoaWdobGlnaHRlZFJlc3VsdHMiLCJDbG9zZU9uU2VsZWN0IiwiX3NlbGVjdFRyaWdnZXJlZCIsImN0cmxLZXkiLCJtZXRhS2V5IiwiZXJyb3JMb2FkaW5nIiwiaW5wdXRUb29Mb25nIiwib3ZlckNoYXJzIiwiaW5wdXRUb29TaG9ydCIsInJlbWFpbmluZ0NoYXJzIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwicmVtb3ZlQWxsSXRlbXMiLCJSZXN1bHRzTGlzdCIsIlNlbGVjdGlvblNlYXJjaCIsIkRJQUNSSVRJQ1MiLCJTZWxlY3REYXRhIiwiQXJyYXlEYXRhIiwiQWpheERhdGEiLCJEcm9wZG93blNlYXJjaCIsIkVuZ2xpc2hUcmFuc2xhdGlvbiIsIkRlZmF1bHRzIiwicmVzZXQiLCJ0b2tlblNlcGFyYXRvcnMiLCJRdWVyeSIsImFtZEJhc2UiLCJpbml0U2VsZWN0aW9uIiwiSW5pdFNlbGVjdGlvbiIsInJlc3VsdHNBZGFwdGVyIiwic2VsZWN0T25DbG9zZSIsImRyb3Bkb3duQWRhcHRlciIsIm11bHRpcGxlIiwiU2VhcmNoYWJsZURyb3Bkb3duIiwiY2xvc2VPblNlbGVjdCIsImRyb3Bkb3duQ3NzQ2xhc3MiLCJkcm9wZG93bkNzcyIsImFkYXB0RHJvcGRvd25Dc3NDbGFzcyIsIkRyb3Bkb3duQ1NTIiwic2VsZWN0aW9uQWRhcHRlciIsImFsbG93Q2xlYXIiLCJjb250YWluZXJDc3NDbGFzcyIsImNvbnRhaW5lckNzcyIsImFkYXB0Q29udGFpbmVyQ3NzQ2xhc3MiLCJDb250YWluZXJDU1MiLCJsYW5ndWFnZSIsIl9yZXNvbHZlTGFuZ3VhZ2UiLCJ1bmlxdWVMYW5ndWFnZXMiLCJsIiwiX3Byb2Nlc3NUcmFuc2xhdGlvbnMiLCJkZWJ1ZyIsInN0cmlwRGlhY3JpdGljcyIsImEiLCJvcmlnaW5hbCIsImFtZExhbmd1YWdlQmFzZSIsImRyb3Bkb3duQXV0b1dpZHRoIiwic2Nyb2xsQWZ0ZXJTZWxlY3QiLCJ0ZW1wbGF0ZVJlc3VsdCIsInRlbXBsYXRlU2VsZWN0aW9uIiwidGhlbWUiLCJhcHBseUZyb21FbGVtZW50Iiwib3B0aW9uTGFuZ3VhZ2UiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJlbGVtZW50TGFuZ3VhZ2UiLCJwYXJlbnRMYW5ndWFnZSIsImxhbmd1YWdlcyIsImlzRW1wdHlPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwicmVzb2x2ZWRMYW5ndWFnZXMiLCJsYW5ndWFnZVBhcnRzIiwiYmFzZUxhbmd1YWdlIiwibGFuZ3VhZ2VEYXRhIiwiZXgiLCJ3YXJuIiwic2V0IiwiY2FtZWxLZXkiLCJjYW1lbENhc2UiLCJjb252ZXJ0ZWREYXRhIiwiT3B0aW9ucyIsImZyb21FbGVtZW50IiwiSW5wdXRDb21wYXQiLCJleGNsdWRlZERhdGEiLCJkaXIiLCJkYXRhc2V0IiwidXBwZXJDYXNlTGV0dGVyIiwibGV0dGVyIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZU5hbWUiLCJkYXRhTmFtZSIsImRhdGFWYWx1ZSIsImNhbWVsRGF0YU5hbWUiLCJTZWxlY3QyIiwiX2dlbmVyYXRlSWQiLCJ0YWJpbmRleCIsIkRhdGFBZGFwdGVyIiwiX3BsYWNlQ29udGFpbmVyIiwiU2VsZWN0aW9uQWRhcHRlciIsIkRyb3Bkb3duQWRhcHRlciIsIlJlc3VsdHNBZGFwdGVyIiwiX2JpbmRBZGFwdGVycyIsIl9yZWdpc3RlckRvbUV2ZW50cyIsIl9yZWdpc3RlckRhdGFFdmVudHMiLCJfcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMiLCJfcmVnaXN0ZXJEcm9wZG93bkV2ZW50cyIsIl9yZWdpc3RlclJlc3VsdHNFdmVudHMiLCJfcmVnaXN0ZXJFdmVudHMiLCJpbml0aWFsRGF0YSIsIl9zeW5jQXR0cmlidXRlcyIsImluc2VydEFmdGVyIiwiX3Jlc29sdmVXaWR0aCIsIm1ldGhvZCIsIldJRFRIIiwic3R5bGVXaWR0aCIsImVsZW1lbnRXaWR0aCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiX3N5bmNBIiwiX3N5bmNTIiwiX3N5bmNTdWJ0cmVlIiwiYXR0YWNoRXZlbnQiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiTW96TXV0YXRpb25PYnNlcnZlciIsIl9vYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vblJlbGF5RXZlbnRzIiwidG9nZ2xlRHJvcGRvd24iLCJmb2N1cyIsImFsdEtleSIsImNsb3NlIiwib3BlbiIsIl9pc0NoYW5nZU11dGF0aW9uIiwiY2hhbmdlZCIsIm5vZGVOYW1lIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsIm11dGF0aW9uIiwiYWN0dWFsVHJpZ2dlciIsInByZVRyaWdnZXJNYXAiLCJwcmVUcmlnZ2VyTmFtZSIsInByZVRyaWdnZXJBcmdzIiwiaGFzRm9jdXMiLCJlbmFibGUiLCJuZXdWYWwiLCJkZXRhY2hFdmVudCIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlRGF0YSIsInRoaXNNZXRob2RzIiwiaW5zdGFuY2VPcHRpb25zIiwiaW5zdGFuY2UiLCJvIiwib3B0cyIsIm9uQ2xvc2UiLCJvbk9wZW4iLCJiZWZvcmVPcGVuIiwiYmVmb3JlQ2xvc2UiLCJzdGlja3lGb290ZXIiLCJmb290ZXIiLCJjc3NDbGFzcyIsImNsb3NlTGFiZWwiLCJjbG9zZU1ldGhvZHMiLCJpbml0IiwibW9kYWxCb3hGb290ZXIiLCJtb2RhbEJveCIsImNsaWVudFdpZHRoIiwib2Zmc2V0TGVmdCIsIm1vZGFsIiwiY2xhc3NMaXN0IiwiZm9yRWFjaCIsIm1vZGFsQ2xvc2VCdG4iLCJtb2RhbENsb3NlQnRuSWNvbiIsIm1vZGFsQ2xvc2VCdG5MYWJlbCIsImFwcGVuZENoaWxkIiwibW9kYWxCb3hDb250ZW50IiwiX2V2ZW50cyIsImNsaWNrQ2xvc2VCdG4iLCJjbGlja092ZXJsYXkiLCJvZmZzZXRXaWR0aCIsImNsaWVudFgiLCJvZmZzZXRIZWlnaHQiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInBhcmVudEVsZW1lbnQiLCJyZXNpemUiLCJjaGVja092ZXJmbG93Iiwia2V5Ym9hcmROYXYiLCJmaXJzdENoaWxkIiwiYWRkRm9vdGVyIiwiX2J1c3kiLCJfaXNCdXN5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlUHJvcGVydHkiLCJfc2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsInNldFN0aWNreUZvb3RlciIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJzZXRDb250ZW50IiwiZ2V0Q29udGVudCIsInNldEZvb3RlckNvbnRlbnQiLCJnZXRGb290ZXJDb250ZW50IiwiaXNPdmVyZmxvdyIsImNsaWVudEhlaWdodCIsImFkZEZvb3RlckJ0biIsInJlYWR5Iiwic2RvbmdraXJfbGN6IiwiYWpheHVybCIsImRhdGFUeXBlIiwiY2FjaGUiLCJhY3Rpb24iLCJub25jZV9hamF4Iiwibm9uY2UiLCJlcnJvcl9tb2RhbCIsInRpbmdsZSIsImNsb3NlX2xhYmVsIiwiY291cmllcl9zZWxlY3Rpb25fdHlwZSIsInNpYmxpbmdzIiwibXVsdGlwbGVfc2VsZWN0aW9uIiwic2luZ2xlX3NlbGVjdGlvbiIsInN1Ym1pdCIsInByb2Nlc3NpbmdfdGV4dCIsImNvdXJpZXJzIiwib3JpZ2luIiwiZGVzdCIsIndlaWdodCIsInJlcyIsImdldF9zaGlwcGluZ19jb3N0X3RleHQiLCJlcnIiLCJsb2ciLCJyZXNwb25zZUpTT04iLCJ0cmFja2luZ19udW1iZXIiLCJjb3VyaWVyIiwiZ2V0X3NoaXBwaW5nX3RyYWNrX3RleHQiLCJhbGVydCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBRSxXQUFVQSxPQUFWLEVBQW1CO0FBQ25CLE1BQUksSUFBSixFQUFnRDtBQUM5QztBQUNBQyxxQ0FBTyxDQUFDLDJDQUFELENBQUQsb0NBQWFELE9BQWI7QUFBQTtBQUFBO0FBQUEsb0dBQU47QUFD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QkFBVSxHQVRLO0FBVWYsZ0JBQVUsR0FWSztBQVdmLGtCQUFVLEdBWEs7QUFZZixrQkFBVSxHQVpLO0FBYWYsa0JBQVUsR0FiSztBQWNmLGtCQUFVLEdBZEs7QUFlZixrQkFBVSxHQWZLO0FBZ0JmLGtCQUFVLEdBaEJLO0FBaUJmLGtCQUFVLEdBakJLO0FBa0JmLGtCQUFVLEdBbEJLO0FBbUJmLGdCQUFVLEdBbkJLO0FBb0JmLGtCQUFVLEdBcEJLO0FBcUJmLGtCQUFVLEdBckJLO0FBc0JmLGdCQUFVLEdBdEJLO0FBdUJmLGtCQUFVLEdBdkJLO0FBd0JmLGtCQUFVLEdBeEJLO0FBeUJmLGtCQUFVLEdBekJLO0FBMEJmLGtCQUFVLEdBMUJLO0FBMkJmLGtCQUFVLEdBM0JLO0FBNEJmLGtCQUFVLEdBNUJLO0FBNkJmLGtCQUFVLEdBN0JLO0FBOEJmLGtCQUFVLEdBOUJLO0FBK0JmLGtCQUFVLEdBL0JLO0FBZ0NmLGtCQUFVLEdBaENLO0FBaUNmLGtCQUFVLEdBakNLO0FBa0NmLGtCQUFVLElBbENLO0FBbUNmLGdCQUFVLElBbkNLO0FBb0NmLGtCQUFVLElBcENLO0FBcUNmLGtCQUFVLElBckNLO0FBc0NmLGtCQUFVLElBdENLO0FBdUNmLGtCQUFVLElBdkNLO0FBd0NmLGtCQUFVLElBeENLO0FBeUNmLGtCQUFVLElBekNLO0FBMENmLGtCQUFVLElBMUNLO0FBMkNmLGtCQUFVLEdBM0NLO0FBNENmLGtCQUFVLEdBNUNLO0FBNkNmLGtCQUFVLEdBN0NLO0FBOENmLGtCQUFVLEdBOUNLO0FBK0NmLGtCQUFVLEdBL0NLO0FBZ0RmLGtCQUFVLEdBaERLO0FBaURmLGtCQUFVLEdBakRLO0FBa0RmLGtCQUFVLEdBbERLO0FBbURmLGtCQUFVLEdBbkRLO0FBb0RmLGtCQUFVLEdBcERLO0FBcURmLGtCQUFVLEdBckRLO0FBc0RmLGtCQUFVLEdBdERLO0FBdURmLGtCQUFVLEdBdkRLO0FBd0RmLGtCQUFVLEdBeERLO0FBeURmLGdCQUFVLEdBekRLO0FBMERmLGtCQUFVLEdBMURLO0FBMkRmLGtCQUFVLEdBM0RLO0FBNERmLGtCQUFVLEdBNURLO0FBNkRmLGtCQUFVLEdBN0RLO0FBOERmLGtCQUFVLEdBOURLO0FBK0RmLGtCQUFVLEdBL0RLO0FBZ0VmLGtCQUFVLEdBaEVLO0FBaUVmLGtCQUFVLEdBakVLO0FBa0VmLGtCQUFVLEdBbEVLO0FBbUVmLGtCQUFVLEdBbkVLO0FBb0VmLGtCQUFVLEdBcEVLO0FBcUVmLGtCQUFVLEdBckVLO0FBc0VmLGtCQUFVLEdBdEVLO0FBdUVmLGtCQUFVLEdBdkVLO0FBd0VmLGtCQUFVLEdBeEVLO0FBeUVmLGtCQUFVLEdBekVLO0FBMEVmLGtCQUFVLEdBMUVLO0FBMkVmLGtCQUFVLElBM0VLO0FBNEVmLGtCQUFVLElBNUVLO0FBNkVmLGtCQUFVLElBN0VLO0FBOEVmLGtCQUFVLElBOUVLO0FBK0VmLGtCQUFVLEdBL0VLO0FBZ0ZmLGtCQUFVLEdBaEZLO0FBaUZmLGdCQUFVLEdBakZLO0FBa0ZmLGdCQUFVLEdBbEZLO0FBbUZmLGdCQUFVLEdBbkZLO0FBb0ZmLGtCQUFVLEdBcEZLO0FBcUZmLGtCQUFVLEdBckZLO0FBc0ZmLGtCQUFVLEdBdEZLO0FBdUZmLGtCQUFVLEdBdkZLO0FBd0ZmLGtCQUFVLEdBeEZLO0FBeUZmLGtCQUFVLEdBekZLO0FBMEZmLGtCQUFVLEdBMUZLO0FBMkZmLGtCQUFVLEdBM0ZLO0FBNEZmLGtCQUFVLEdBNUZLO0FBNkZmLGtCQUFVLEdBN0ZLO0FBOEZmLGdCQUFVLEdBOUZLO0FBK0ZmLGtCQUFVLEdBL0ZLO0FBZ0dmLGtCQUFVLEdBaEdLO0FBaUdmLGtCQUFVLEdBakdLO0FBa0dmLGtCQUFVLEdBbEdLO0FBbUdmLGtCQUFVLEdBbkdLO0FBb0dmLGtCQUFVLEdBcEdLO0FBcUdmLGtCQUFVLEdBckdLO0FBc0dmLGtCQUFVLEdBdEdLO0FBdUdmLGtCQUFVLEdBdkdLO0FBd0dmLGtCQUFVLEdBeEdLO0FBeUdmLGtCQUFVLEdBekdLO0FBMEdmLGtCQUFVLEdBMUdLO0FBMkdmLGtCQUFVLEdBM0dLO0FBNEdmLGtCQUFVLEdBNUdLO0FBNkdmLGtCQUFVLEdBN0dLO0FBOEdmLGtCQUFVLEdBOUdLO0FBK0dmLGtCQUFVLEdBL0dLO0FBZ0hmLGtCQUFVLEdBaEhLO0FBaUhmLGtCQUFVLEdBakhLO0FBa0hmLGtCQUFVLEdBbEhLO0FBbUhmLGtCQUFVLEdBbkhLO0FBb0hmLGtCQUFVLEdBcEhLO0FBcUhmLGtCQUFVLEdBckhLO0FBc0hmLGtCQUFVLEdBdEhLO0FBdUhmLGtCQUFVLEdBdkhLO0FBd0hmLGtCQUFVLEdBeEhLO0FBeUhmLGtCQUFVLEdBekhLO0FBMEhmLGtCQUFVLEdBMUhLO0FBMkhmLGtCQUFVLEdBM0hLO0FBNEhmLGtCQUFVLEdBNUhLO0FBNkhmLGtCQUFVLEdBN0hLO0FBOEhmLGtCQUFVLEdBOUhLO0FBK0hmLGtCQUFVLEdBL0hLO0FBZ0lmLGtCQUFVLEdBaElLO0FBaUlmLGtCQUFVLEdBaklLO0FBa0lmLGtCQUFVLEdBbElLO0FBbUlmLGtCQUFVLEdBbklLO0FBb0lmLGtCQUFVLEdBcElLO0FBcUlmLGtCQUFVLEdBcklLO0FBc0lmLGtCQUFVLEdBdElLO0FBdUlmLGtCQUFVLEdBdklLO0FBd0lmLGtCQUFVLEdBeElLO0FBeUlmLGtCQUFVLEdBeklLO0FBMElmLGtCQUFVLEdBMUlLO0FBMklmLGtCQUFVLEdBM0lLO0FBNElmLGtCQUFVLEdBNUlLO0FBNklmLGtCQUFVLEdBN0lLO0FBOElmLGdCQUFVLEdBOUlLO0FBK0lmLGdCQUFVLEdBL0lLO0FBZ0pmLGdCQUFVLEdBaEpLO0FBaUpmLGtCQUFVLEdBakpLO0FBa0pmLGtCQUFVLEdBbEpLO0FBbUpmLGtCQUFVLEdBbkpLO0FBb0pmLGtCQUFVLEdBcEpLO0FBcUpmLGdCQUFVLEdBckpLO0FBc0pmLGtCQUFVLEdBdEpLO0FBdUpmLGtCQUFVLEdBdkpLO0FBd0pmLGtCQUFVLEdBeEpLO0FBeUpmLGtCQUFVLEdBekpLO0FBMEpmLGtCQUFVLEdBMUpLO0FBMkpmLGtCQUFVLEdBM0pLO0FBNEpmLGtCQUFVLEdBNUpLO0FBNkpmLGtCQUFVLEdBN0pLO0FBOEpmLGtCQUFVLEdBOUpLO0FBK0pmLGtCQUFVLEdBL0pLO0FBZ0tmLGtCQUFVLEdBaEtLO0FBaUtmLGtCQUFVLEdBaktLO0FBa0tmLGtCQUFVLEdBbEtLO0FBbUtmLGtCQUFVLEdBbktLO0FBb0tmLGtCQUFVLEdBcEtLO0FBcUtmLGtCQUFVLEdBcktLO0FBc0tmLGtCQUFVLEdBdEtLO0FBdUtmLGtCQUFVLEdBdktLO0FBd0tmLGtCQUFVLEdBeEtLO0FBeUtmLGtCQUFVLEdBektLO0FBMEtmLGtCQUFVLEdBMUtLO0FBMktmLGtCQUFVLEdBM0tLO0FBNEtmLGtCQUFVLEdBNUtLO0FBNktmLGtCQUFVLEdBN0tLO0FBOEtmLGtCQUFVLEdBOUtLO0FBK0tmLGtCQUFVLEdBL0tLO0FBZ0xmLGtCQUFVLEdBaExLO0FBaUxmLGtCQUFVLEdBakxLO0FBa0xmLGtCQUFVLEdBbExLO0FBbUxmLGtCQUFVLEdBbkxLO0FBb0xmLGtCQUFVLEdBcExLO0FBcUxmLGtCQUFVLEdBckxLO0FBc0xmLGtCQUFVLEdBdExLO0FBdUxmLGtCQUFVLEdBdkxLO0FBd0xmLGtCQUFVLEdBeExLO0FBeUxmLGtCQUFVLEdBekxLO0FBMExmLGtCQUFVLEdBMUxLO0FBMkxmLGtCQUFVLEdBM0xLO0FBNExmLGtCQUFVLEdBNUxLO0FBNkxmLGtCQUFVLEdBN0xLO0FBOExmLGtCQUFVLEdBOUxLO0FBK0xmLGtCQUFVLEdBL0xLO0FBZ01mLGtCQUFVLEdBaE1LO0FBaU1mLGtCQUFVLElBak1LO0FBa01mLGtCQUFVLElBbE1LO0FBbU1mLGtCQUFVLEdBbk1LO0FBb01mLGtCQUFVLEdBcE1LO0FBcU1mLGtCQUFVLEdBck1LO0FBc01mLGtCQUFVLEdBdE1LO0FBdU1mLGtCQUFVLEdBdk1LO0FBd01mLGtCQUFVLEdBeE1LO0FBeU1mLGtCQUFVLEdBek1LO0FBME1mLGtCQUFVLEdBMU1LO0FBMk1mLGtCQUFVLEdBM01LO0FBNE1mLGtCQUFVLEdBNU1LO0FBNk1mLGtCQUFVLEdBN01LO0FBOE1mLGdCQUFVLEdBOU1LO0FBK01mLGtCQUFVLEdBL01LO0FBZ05mLGtCQUFVLEdBaE5LO0FBaU5mLGtCQUFVLEdBak5LO0FBa05mLGtCQUFVLEdBbE5LO0FBbU5mLGtCQUFVLEdBbk5LO0FBb05mLGtCQUFVLEdBcE5LO0FBcU5mLGtCQUFVLEdBck5LO0FBc05mLGtCQUFVLEdBdE5LO0FBdU5mLGtCQUFVLEdBdk5LO0FBd05mLGtCQUFVLEdBeE5LO0FBeU5mLGtCQUFVLElBek5LO0FBME5mLGtCQUFVLElBMU5LO0FBMk5mLGtCQUFVLEdBM05LO0FBNE5mLGtCQUFVLEdBNU5LO0FBNk5mLGdCQUFVLEdBN05LO0FBOE5mLGdCQUFVLEdBOU5LO0FBK05mLGdCQUFVLEdBL05LO0FBZ09mLGtCQUFVLEdBaE9LO0FBaU9mLGtCQUFVLEdBak9LO0FBa09mLGtCQUFVLEdBbE9LO0FBbU9mLGtCQUFVLEdBbk9LO0FBb09mLGdCQUFVLEdBcE9LO0FBcU9mLGtCQUFVLEdBck9LO0FBc09mLGtCQUFVLEdBdE9LO0FBdU9mLGtCQUFVLEdBdk9LO0FBd09mLGtCQUFVLEdBeE9LO0FBeU9mLGtCQUFVLEdBek9LO0FBME9mLGtCQUFVLEdBMU9LO0FBMk9mLGtCQUFVLEdBM09LO0FBNE9mLGtCQUFVLEdBNU9LO0FBNk9mLGtCQUFVLEdBN09LO0FBOE9mLGdCQUFVLEdBOU9LO0FBK09mLGtCQUFVLEdBL09LO0FBZ1BmLGtCQUFVLEdBaFBLO0FBaVBmLGtCQUFVLEdBalBLO0FBa1BmLGtCQUFVLEdBbFBLO0FBbVBmLGtCQUFVLEdBblBLO0FBb1BmLGtCQUFVLEdBcFBLO0FBcVBmLGtCQUFVLEdBclBLO0FBc1BmLGtCQUFVLEdBdFBLO0FBdVBmLGtCQUFVLEdBdlBLO0FBd1BmLGtCQUFVLEdBeFBLO0FBeVBmLGtCQUFVLEdBelBLO0FBMFBmLGtCQUFVLEdBMVBLO0FBMlBmLGtCQUFVLEdBM1BLO0FBNFBmLGtCQUFVLEdBNVBLO0FBNlBmLGtCQUFVLEdBN1BLO0FBOFBmLGtCQUFVLEdBOVBLO0FBK1BmLGdCQUFVLEdBL1BLO0FBZ1FmLGtCQUFVLEdBaFFLO0FBaVFmLGtCQUFVLEdBalFLO0FBa1FmLGtCQUFVLEdBbFFLO0FBbVFmLGtCQUFVLEdBblFLO0FBb1FmLGtCQUFVLEdBcFFLO0FBcVFmLGtCQUFVLElBclFLO0FBc1FmLGtCQUFVLElBdFFLO0FBdVFmLGtCQUFVLElBdlFLO0FBd1FmLGtCQUFVLElBeFFLO0FBeVFmLGtCQUFVLEdBelFLO0FBMFFmLGtCQUFVLEdBMVFLO0FBMlFmLGtCQUFVLEdBM1FLO0FBNFFmLGtCQUFVLEdBNVFLO0FBNlFmLGtCQUFVLEdBN1FLO0FBOFFmLGtCQUFVLEdBOVFLO0FBK1FmLGtCQUFVLEdBL1FLO0FBZ1JmLGtCQUFVLEdBaFJLO0FBaVJmLGtCQUFVLEdBalJLO0FBa1JmLGtCQUFVLEdBbFJLO0FBbVJmLGtCQUFVLEdBblJLO0FBb1JmLGtCQUFVLEdBcFJLO0FBcVJmLGtCQUFVLEdBclJLO0FBc1JmLGtCQUFVLEdBdFJLO0FBdVJmLGtCQUFVLEdBdlJLO0FBd1JmLGtCQUFVLEdBeFJLO0FBeVJmLGtCQUFVLEdBelJLO0FBMFJmLGtCQUFVLEdBMVJLO0FBMlJmLGtCQUFVLEdBM1JLO0FBNFJmLGtCQUFVLEdBNVJLO0FBNlJmLGtCQUFVLEdBN1JLO0FBOFJmLGtCQUFVLEdBOVJLO0FBK1JmLGtCQUFVLEdBL1JLO0FBZ1NmLGtCQUFVLEdBaFNLO0FBaVNmLGtCQUFVLEdBalNLO0FBa1NmLGtCQUFVLEdBbFNLO0FBbVNmLGtCQUFVLEdBblNLO0FBb1NmLGtCQUFVLEdBcFNLO0FBcVNmLGtCQUFVLEdBclNLO0FBc1NmLGtCQUFVLEdBdFNLO0FBdVNmLGtCQUFVLEdBdlNLO0FBd1NmLGtCQUFVLEdBeFNLO0FBeVNmLGtCQUFVLEdBelNLO0FBMFNmLGtCQUFVLEdBMVNLO0FBMlNmLGtCQUFVLEdBM1NLO0FBNFNmLGtCQUFVLEdBNVNLO0FBNlNmLGtCQUFVLEdBN1NLO0FBOFNmLGtCQUFVLEdBOVNLO0FBK1NmLGtCQUFVLEdBL1NLO0FBZ1RmLGtCQUFVLEdBaFRLO0FBaVRmLGtCQUFVLEdBalRLO0FBa1RmLGtCQUFVLEdBbFRLO0FBbVRmLGtCQUFVLEdBblRLO0FBb1RmLGtCQUFVLEdBcFRLO0FBcVRmLGtCQUFVLEdBclRLO0FBc1RmLGtCQUFVLEdBdFRLO0FBdVRmLGtCQUFVLEdBdlRLO0FBd1RmLGtCQUFVLEdBeFRLO0FBeVRmLGtCQUFVLEdBelRLO0FBMFRmLGtCQUFVLEdBMVRLO0FBMlRmLGtCQUFVLEdBM1RLO0FBNFRmLGtCQUFVLEdBNVRLO0FBNlRmLGtCQUFVLEdBN1RLO0FBOFRmLGtCQUFVLEdBOVRLO0FBK1RmLGtCQUFVLEdBL1RLO0FBZ1VmLGtCQUFVLEdBaFVLO0FBaVVmLGtCQUFVLEdBalVLO0FBa1VmLGtCQUFVLEdBbFVLO0FBbVVmLGtCQUFVLEdBblVLO0FBb1VmLGtCQUFVLEdBcFVLO0FBcVVmLGtCQUFVLElBclVLO0FBc1VmLGtCQUFVLEdBdFVLO0FBdVVmLGtCQUFVLEdBdlVLO0FBd1VmLGdCQUFVLEdBeFVLO0FBeVVmLGdCQUFVLEdBelVLO0FBMFVmLGdCQUFVLEdBMVVLO0FBMlVmLGtCQUFVLEdBM1VLO0FBNFVmLGtCQUFVLEdBNVVLO0FBNlVmLGtCQUFVLEdBN1VLO0FBOFVmLGtCQUFVLEdBOVVLO0FBK1VmLGtCQUFVLEdBL1VLO0FBZ1ZmLGdCQUFVLEdBaFZLO0FBaVZmLGtCQUFVLEdBalZLO0FBa1ZmLGtCQUFVLEdBbFZLO0FBbVZmLGtCQUFVLEdBblZLO0FBb1ZmLGtCQUFVLEdBcFZLO0FBcVZmLGtCQUFVLEdBclZLO0FBc1ZmLGtCQUFVLEdBdFZLO0FBdVZmLGtCQUFVLEdBdlZLO0FBd1ZmLGtCQUFVLEdBeFZLO0FBeVZmLGtCQUFVLEdBelZLO0FBMFZmLGtCQUFVLEdBMVZLO0FBMlZmLGtCQUFVLEdBM1ZLO0FBNFZmLGtCQUFVLEdBNVZLO0FBNlZmLGtCQUFVLEdBN1ZLO0FBOFZmLGtCQUFVLEdBOVZLO0FBK1ZmLGtCQUFVLEdBL1ZLO0FBZ1dmLGtCQUFVLEdBaFdLO0FBaVdmLGtCQUFVLEdBaldLO0FBa1dmLGtCQUFVLEdBbFdLO0FBbVdmLGtCQUFVLEdBbldLO0FBb1dmLGtCQUFVLEdBcFdLO0FBcVdmLGtCQUFVLEdBcldLO0FBc1dmLGtCQUFVLEdBdFdLO0FBdVdmLGtCQUFVLEdBdldLO0FBd1dmLGtCQUFVLEdBeFdLO0FBeVdmLGtCQUFVLEdBeldLO0FBMFdmLGtCQUFVLEdBMVdLO0FBMldmLGtCQUFVLEdBM1dLO0FBNFdmLGtCQUFVLEdBNVdLO0FBNldmLGtCQUFVLEdBN1dLO0FBOFdmLGtCQUFVLElBOVdLO0FBK1dmLGtCQUFVLEdBL1dLO0FBZ1hmLGtCQUFVLEdBaFhLO0FBaVhmLGtCQUFVLEdBalhLO0FBa1hmLGtCQUFVLEdBbFhLO0FBbVhmLGtCQUFVLEdBblhLO0FBb1hmLGtCQUFVLEdBcFhLO0FBcVhmLGtCQUFVLEdBclhLO0FBc1hmLGtCQUFVLEdBdFhLO0FBdVhmLGtCQUFVLEdBdlhLO0FBd1hmLGtCQUFVLEdBeFhLO0FBeVhmLGtCQUFVLEdBelhLO0FBMFhmLGtCQUFVLEdBMVhLO0FBMlhmLGtCQUFVLEdBM1hLO0FBNFhmLGtCQUFVLEdBNVhLO0FBNlhmLGtCQUFVLEdBN1hLO0FBOFhmLGtCQUFVLEdBOVhLO0FBK1hmLGdCQUFVLEdBL1hLO0FBZ1lmLGtCQUFVLEdBaFlLO0FBaVlmLGtCQUFVLEdBallLO0FBa1lmLGtCQUFVLEdBbFlLO0FBbVlmLGtCQUFVLEdBbllLO0FBb1lmLGtCQUFVLEdBcFlLO0FBcVlmLGtCQUFVLEdBcllLO0FBc1lmLGtCQUFVLEdBdFlLO0FBdVlmLGtCQUFVLEdBdllLO0FBd1lmLGtCQUFVLEdBeFlLO0FBeVlmLGtCQUFVLEdBellLO0FBMFlmLGtCQUFVLEdBMVlLO0FBMllmLGtCQUFVLEdBM1lLO0FBNFlmLGtCQUFVLEdBNVlLO0FBNllmLGtCQUFVLEdBN1lLO0FBOFlmLGtCQUFVLEdBOVlLO0FBK1lmLGtCQUFVLEdBL1lLO0FBZ1pmLGtCQUFVLEdBaFpLO0FBaVpmLGtCQUFVLEdBalpLO0FBa1pmLGtCQUFVLEdBbFpLO0FBbVpmLGtCQUFVLEdBblpLO0FBb1pmLGtCQUFVLEdBcFpLO0FBcVpmLGtCQUFVLEdBclpLO0FBc1pmLGtCQUFVLEdBdFpLO0FBdVpmLGtCQUFVLEdBdlpLO0FBd1pmLGtCQUFVLEdBeFpLO0FBeVpmLGtCQUFVLEdBelpLO0FBMFpmLGdCQUFVLEdBMVpLO0FBMlpmLGdCQUFVLEdBM1pLO0FBNFpmLGdCQUFVLEdBNVpLO0FBNlpmLGtCQUFVLEdBN1pLO0FBOFpmLGtCQUFVLEdBOVpLO0FBK1pmLGtCQUFVLEdBL1pLO0FBZ2FmLGtCQUFVLEdBaGFLO0FBaWFmLGdCQUFVLEdBamFLO0FBa2FmLGtCQUFVLEdBbGFLO0FBbWFmLGtCQUFVLEdBbmFLO0FBb2FmLGtCQUFVLEdBcGFLO0FBcWFmLGtCQUFVLEdBcmFLO0FBc2FmLGtCQUFVLEdBdGFLO0FBdWFmLGtCQUFVLEdBdmFLO0FBd2FmLGtCQUFVLEdBeGFLO0FBeWFmLGtCQUFVLEdBemFLO0FBMGFmLGdCQUFVLEdBMWFLO0FBMmFmLGtCQUFVLEdBM2FLO0FBNGFmLGtCQUFVLEdBNWFLO0FBNmFmLGdCQUFVLEdBN2FLO0FBOGFmLGtCQUFVLEdBOWFLO0FBK2FmLGtCQUFVLEdBL2FLO0FBZ2JmLGtCQUFVLEdBaGJLO0FBaWJmLGtCQUFVLEdBamJLO0FBa2JmLGtCQUFVLEdBbGJLO0FBbWJmLGtCQUFVLEdBbmJLO0FBb2JmLGtCQUFVLEdBcGJLO0FBcWJmLGtCQUFVLEdBcmJLO0FBc2JmLGtCQUFVLEdBdGJLO0FBdWJmLGtCQUFVLEdBdmJLO0FBd2JmLGtCQUFVLEdBeGJLO0FBeWJmLGtCQUFVLElBemJLO0FBMGJmLGdCQUFVLElBMWJLO0FBMmJmLGtCQUFVLElBM2JLO0FBNGJmLGtCQUFVLElBNWJLO0FBNmJmLGtCQUFVLElBN2JLO0FBOGJmLGtCQUFVLElBOWJLO0FBK2JmLGtCQUFVLElBL2JLO0FBZ2NmLGtCQUFVLElBaGNLO0FBaWNmLGtCQUFVLElBamNLO0FBa2NmLGtCQUFVLEdBbGNLO0FBbWNmLGtCQUFVLEdBbmNLO0FBb2NmLGtCQUFVLEdBcGNLO0FBcWNmLGtCQUFVLEdBcmNLO0FBc2NmLGtCQUFVLEdBdGNLO0FBdWNmLGtCQUFVLEdBdmNLO0FBd2NmLGtCQUFVLEdBeGNLO0FBeWNmLGtCQUFVLEdBemNLO0FBMGNmLGtCQUFVLEdBMWNLO0FBMmNmLGtCQUFVLEdBM2NLO0FBNGNmLGtCQUFVLEdBNWNLO0FBNmNmLGtCQUFVLEdBN2NLO0FBOGNmLGtCQUFVLEdBOWNLO0FBK2NmLGtCQUFVLEdBL2NLO0FBZ2RmLGdCQUFVLEdBaGRLO0FBaWRmLGtCQUFVLEdBamRLO0FBa2RmLGtCQUFVLEdBbGRLO0FBbWRmLGtCQUFVLEdBbmRLO0FBb2RmLGtCQUFVLEdBcGRLO0FBcWRmLGtCQUFVLEdBcmRLO0FBc2RmLGtCQUFVLEdBdGRLO0FBdWRmLGtCQUFVLEdBdmRLO0FBd2RmLGtCQUFVLEdBeGRLO0FBeWRmLGtCQUFVLEdBemRLO0FBMGRmLGtCQUFVLEdBMWRLO0FBMmRmLGtCQUFVLEdBM2RLO0FBNGRmLGtCQUFVLEdBNWRLO0FBNmRmLGtCQUFVLEdBN2RLO0FBOGRmLGtCQUFVLEdBOWRLO0FBK2RmLGtCQUFVLEdBL2RLO0FBZ2VmLGtCQUFVLEdBaGVLO0FBaWVmLGtCQUFVLEdBamVLO0FBa2VmLGtCQUFVLEdBbGVLO0FBbWVmLGtCQUFVLElBbmVLO0FBb2VmLGtCQUFVLElBcGVLO0FBcWVmLGtCQUFVLEdBcmVLO0FBc2VmLGtCQUFVLEdBdGVLO0FBdWVmLGdCQUFVLEdBdmVLO0FBd2VmLGdCQUFVLEdBeGVLO0FBeWVmLGdCQUFVLEdBemVLO0FBMGVmLGtCQUFVLEdBMWVLO0FBMmVmLGtCQUFVLEdBM2VLO0FBNGVmLGtCQUFVLEdBNWVLO0FBNmVmLGtCQUFVLEdBN2VLO0FBOGVmLGtCQUFVLEdBOWVLO0FBK2VmLGtCQUFVLEdBL2VLO0FBZ2ZmLGtCQUFVLEdBaGZLO0FBaWZmLGtCQUFVLEdBamZLO0FBa2ZmLGtCQUFVLEdBbGZLO0FBbWZmLGtCQUFVLEdBbmZLO0FBb2ZmLGdCQUFVLEdBcGZLO0FBcWZmLGtCQUFVLEdBcmZLO0FBc2ZmLGtCQUFVLEdBdGZLO0FBdWZmLGtCQUFVLEdBdmZLO0FBd2ZmLGtCQUFVLEdBeGZLO0FBeWZmLGtCQUFVLEdBemZLO0FBMGZmLGtCQUFVLEdBMWZLO0FBMmZmLGtCQUFVLEdBM2ZLO0FBNGZmLGtCQUFVLEdBNWZLO0FBNmZmLGtCQUFVLEdBN2ZLO0FB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QUQsQ0FBVW9DLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFlBQXRCLEVBQW9DLFlBQVk7QUFDNUMwb0IsU0FBSyxDQUFDLE1BQUQsQ0FBTDtBQUNILEdBRkQ7QUFJQTlxQiwrQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJvQyxFQUF2QixDQUEwQixPQUExQixFQUFtQyxZQUFZO0FBQzNDcEMsaURBQUMsQ0FBQ0EsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNELElBQVIsQ0FBYSxRQUFiLENBQUQsQ0FBRCxDQUEwQmpJLElBQTFCLENBQStCLFNBQS9CLEVBQTBDLElBQTFDO0FBQ0gsR0FGRDtBQUlBMkUsK0NBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCb0MsRUFBekIsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBWTtBQUM3Q3BDLGlEQUFDLENBQUNBLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzRCxJQUFSLENBQWEsUUFBYixDQUFELENBQUQsQ0FBMEJqSSxJQUExQixDQUErQixTQUEvQixFQUEwQyxLQUExQztBQUNILEdBRkQ7QUFHSCxDQXZPRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLHdCIiwiZmlsZSI6ImZyb250ZW5kLW9uZ2tpci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIi8qIVxuICogU2VsZWN0MiA0LjAuMTNcbiAqIGh0dHBzOi8vc2VsZWN0Mi5naXRodWIuaW9cbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gTm9kZS9Db21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJvb3QsIGpRdWVyeSkge1xuICAgICAgaWYgKGpRdWVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHJlcXVpcmUoJ2pRdWVyeScpIHJldHVybnMgYSBmYWN0b3J5IHRoYXQgcmVxdWlyZXMgd2luZG93IHRvXG4gICAgICAgIC8vIGJ1aWxkIGEgalF1ZXJ5IGluc3RhbmNlLCB3ZSBub3JtYWxpemUgaG93IHdlIHVzZSBtb2R1bGVzXG4gICAgICAgIC8vIHRoYXQgcmVxdWlyZSB0aGlzIHBhdHRlcm4gYnV0IHRoZSB3aW5kb3cgcHJvdmlkZWQgaXMgYSBub29wXG4gICAgICAgIC8vIGlmIGl0J3MgZGVmaW5lZCAoaG93IGpxdWVyeSB3b3JrcylcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jykocm9vdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICAgIHJldHVybiBqUXVlcnk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBmYWN0b3J5KGpRdWVyeSk7XG4gIH1cbn0gKGZ1bmN0aW9uIChqUXVlcnkpIHtcbiAgLy8gVGhpcyBpcyBuZWVkZWQgc28gd2UgY2FuIGNhdGNoIHRoZSBBTUQgbG9hZGVyIGNvbmZpZ3VyYXRpb24gYW5kIHVzZSBpdFxuICAvLyBUaGUgaW5uZXIgZmlsZSBzaG91bGQgYmUgd3JhcHBlZCAoYnkgYGJhbm5lci5zdGFydC5qc2ApIGluIGEgZnVuY3Rpb24gdGhhdFxuICAvLyByZXR1cm5zIHRoZSBBTUQgbG9hZGVyIHJlZmVyZW5jZXMuXG4gIHZhciBTMiA9KGZ1bmN0aW9uICgpIHtcbiAgLy8gUmVzdG9yZSB0aGUgU2VsZWN0MiBBTUQgbG9hZGVyIHNvIGl0IGNhbiBiZSB1c2VkXG4gIC8vIE5lZWRlZCBtb3N0bHkgaW4gdGhlIGxhbmd1YWdlIGZpbGVzLCB3aGVyZSB0aGUgbG9hZGVyIGlzIG5vdCBpbnNlcnRlZFxuICBpZiAoalF1ZXJ5ICYmIGpRdWVyeS5mbiAmJiBqUXVlcnkuZm4uc2VsZWN0MiAmJiBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpIHtcbiAgICB2YXIgUzIgPSBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQ7XG4gIH1cbnZhciBTMjsoZnVuY3Rpb24gKCkgeyBpZiAoIVMyIHx8ICFTMi5yZXF1aXJlanMpIHtcbmlmICghUzIpIHsgUzIgPSB7fTsgfSBlbHNlIHsgcmVxdWlyZSA9IFMyOyB9XG4vKipcbiAqIEBsaWNlbnNlIGFsbW9uZCAwLjMuMyBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycy5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLCBodHRwOi8vZ2l0aHViLmNvbS9yZXF1aXJlanMvYWxtb25kL0xJQ0VOU0VcbiAqL1xuLy9Hb2luZyBzbG9wcHkgdG8gYXZvaWQgJ3VzZSBzdHJpY3QnIHN0cmluZyBjb3N0LCBidXQgc3RyaWN0IHByYWN0aWNlcyBzaG91bGRcbi8vYmUgZm9sbG93ZWQuXG4vKmdsb2JhbCBzZXRUaW1lb3V0OiBmYWxzZSAqL1xuXG52YXIgcmVxdWlyZWpzLCByZXF1aXJlLCBkZWZpbmU7XG4oZnVuY3Rpb24gKHVuZGVmKSB7XG4gICAgdmFyIG1haW4sIHJlcSwgbWFrZU1hcCwgaGFuZGxlcnMsXG4gICAgICAgIGRlZmluZWQgPSB7fSxcbiAgICAgICAgd2FpdGluZyA9IHt9LFxuICAgICAgICBjb25maWcgPSB7fSxcbiAgICAgICAgZGVmaW5pbmcgPSB7fSxcbiAgICAgICAgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgYXBzID0gW10uc2xpY2UsXG4gICAgICAgIGpzU3VmZml4UmVnRXhwID0gL1xcLmpzJC87XG5cbiAgICBmdW5jdGlvbiBoYXNQcm9wKG9iaiwgcHJvcCkge1xuICAgICAgICByZXR1cm4gaGFzT3duLmNhbGwob2JqLCBwcm9wKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHJlbGF0aXZlIG1vZHVsZSBuYW1lLCBsaWtlIC4vc29tZXRoaW5nLCBub3JtYWxpemUgaXQgdG9cbiAgICAgKiBhIHJlYWwgbmFtZSB0aGF0IGNhbiBiZSBtYXBwZWQgdG8gYSBwYXRoLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSByZWxhdGl2ZSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGJhc2VOYW1lIGEgcmVhbCBuYW1lIHRoYXQgdGhlIG5hbWUgYXJnIGlzIHJlbGF0aXZlXG4gICAgICogdG8uXG4gICAgICogQHJldHVybnMge1N0cmluZ30gbm9ybWFsaXplZCBuYW1lXG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKG5hbWUsIGJhc2VOYW1lKSB7XG4gICAgICAgIHZhciBuYW1lUGFydHMsIG5hbWVTZWdtZW50LCBtYXBWYWx1ZSwgZm91bmRNYXAsIGxhc3RJbmRleCxcbiAgICAgICAgICAgIGZvdW5kSSwgZm91bmRTdGFyTWFwLCBzdGFySSwgaSwgaiwgcGFydCwgbm9ybWFsaXplZEJhc2VQYXJ0cyxcbiAgICAgICAgICAgIGJhc2VQYXJ0cyA9IGJhc2VOYW1lICYmIGJhc2VOYW1lLnNwbGl0KFwiL1wiKSxcbiAgICAgICAgICAgIG1hcCA9IGNvbmZpZy5tYXAsXG4gICAgICAgICAgICBzdGFyTWFwID0gKG1hcCAmJiBtYXBbJyonXSkgfHwge307XG5cbiAgICAgICAgLy9BZGp1c3QgYW55IHJlbGF0aXZlIHBhdGhzLlxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IG5hbWUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgLy8gSWYgd2FudGluZyBub2RlIElEIGNvbXBhdGliaWxpdHksIHN0cmlwIC5qcyBmcm9tIGVuZFxuICAgICAgICAgICAgLy8gb2YgSURzLiBIYXZlIHRvIGRvIHRoaXMgaGVyZSwgYW5kIG5vdCBpbiBuYW1lVG9VcmxcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugbm9kZSBhbGxvd3MgZWl0aGVyIC5qcyBvciBub24gLmpzIHRvIG1hcFxuICAgICAgICAgICAgLy8gdG8gc2FtZSBmaWxlLlxuICAgICAgICAgICAgaWYgKGNvbmZpZy5ub2RlSWRDb21wYXQgJiYganNTdWZmaXhSZWdFeHAudGVzdChuYW1lW2xhc3RJbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgbmFtZVtsYXN0SW5kZXhdID0gbmFtZVtsYXN0SW5kZXhdLnJlcGxhY2UoanNTdWZmaXhSZWdFeHAsICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RhcnRzIHdpdGggYSAnLicgc28gbmVlZCB0aGUgYmFzZU5hbWVcbiAgICAgICAgICAgIGlmIChuYW1lWzBdLmNoYXJBdCgwKSA9PT0gJy4nICYmIGJhc2VQYXJ0cykge1xuICAgICAgICAgICAgICAgIC8vQ29udmVydCBiYXNlTmFtZSB0byBhcnJheSwgYW5kIGxvcCBvZmYgdGhlIGxhc3QgcGFydCxcbiAgICAgICAgICAgICAgICAvL3NvIHRoYXQgLiBtYXRjaGVzIHRoYXQgJ2RpcmVjdG9yeScgYW5kIG5vdCBuYW1lIG9mIHRoZSBiYXNlTmFtZSdzXG4gICAgICAgICAgICAgICAgLy9tb2R1bGUuIEZvciBpbnN0YW5jZSwgYmFzZU5hbWUgb2YgJ29uZS90d28vdGhyZWUnLCBtYXBzIHRvXG4gICAgICAgICAgICAgICAgLy8nb25lL3R3by90aHJlZS5qcycsIGJ1dCB3ZSB3YW50IHRoZSBkaXJlY3RvcnksICdvbmUvdHdvJyBmb3JcbiAgICAgICAgICAgICAgICAvL3RoaXMgbm9ybWFsaXphdGlvbi5cbiAgICAgICAgICAgICAgICBub3JtYWxpemVkQmFzZVBhcnRzID0gYmFzZVBhcnRzLnNsaWNlKDAsIGJhc2VQYXJ0cy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplZEJhc2VQYXJ0cy5jb25jYXQobmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3RhcnQgdHJpbURvdHNcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IG5hbWVbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBhdCB0aGUgc3RhcnQsIG9yIHByZXZpb3VzIHZhbHVlIGlzIHN0aWxsIC4uLFxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIHRoZW0gc28gdGhhdCB3aGVuIGNvbnZlcnRlZCB0byBhIHBhdGggaXQgbWF5XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0aWxsIHdvcmsgd2hlbiBjb252ZXJ0ZWQgdG8gYSBwYXRoLCBldmVuIHRob3VnaFxuICAgICAgICAgICAgICAgICAgICAvLyBhcyBhbiBJRCBpdCBpcyBsZXNzIHRoYW4gaWRlYWwuIEluIGxhcmdlciBwb2ludFxuICAgICAgICAgICAgICAgICAgICAvLyByZWxlYXNlcywgbWF5IGJlIGJldHRlciB0byBqdXN0IGtpY2sgb3V0IGFuIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCAoaSA9PT0gMSAmJiBuYW1lWzJdID09PSAnLi4nKSB8fCBuYW1lW2kgLSAxXSA9PT0gJy4uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuc3BsaWNlKGkgLSAxLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgLT0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZW5kIHRyaW1Eb3RzXG5cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLmpvaW4oJy8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQXBwbHkgbWFwIGNvbmZpZyBpZiBhdmFpbGFibGUuXG4gICAgICAgIGlmICgoYmFzZVBhcnRzIHx8IHN0YXJNYXApICYmIG1hcCkge1xuICAgICAgICAgICAgbmFtZVBhcnRzID0gbmFtZS5zcGxpdCgnLycpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSBuYW1lUGFydHMubGVuZ3RoOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgbmFtZVNlZ21lbnQgPSBuYW1lUGFydHMuc2xpY2UoMCwgaSkuam9pbihcIi9cIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoYmFzZVBhcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vRmluZCB0aGUgbG9uZ2VzdCBiYXNlTmFtZSBzZWdtZW50IG1hdGNoIGluIHRoZSBjb25maWcuXG4gICAgICAgICAgICAgICAgICAgIC8vU28sIGRvIGpvaW5zIG9uIHRoZSBiaWdnZXN0IHRvIHNtYWxsZXN0IGxlbmd0aHMgb2YgYmFzZVBhcnRzLlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBiYXNlUGFydHMubGVuZ3RoOyBqID4gMDsgaiAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBWYWx1ZSA9IG1hcFtiYXNlUGFydHMuc2xpY2UoMCwgaikuam9pbignLycpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9iYXNlTmFtZSBzZWdtZW50IGhhcyAgY29uZmlnLCBmaW5kIGlmIGl0IGhhcyBvbmUgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZhbHVlID0gbWFwVmFsdWVbbmFtZVNlZ21lbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01hdGNoLCB1cGRhdGUgbmFtZSB0byB0aGUgbmV3IHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZE1hcCA9IG1hcFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEkgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZm91bmRNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9DaGVjayBmb3IgYSBzdGFyIG1hcCBtYXRjaCwgYnV0IGp1c3QgaG9sZCBvbiB0byBpdCxcbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hvcnRlciBzZWdtZW50IG1hdGNoIGxhdGVyIGluIGEgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAvL2NvbmZpZywgdGhlbiBmYXZvciBvdmVyIHRoaXMgc3RhciBtYXAuXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZFN0YXJNYXAgJiYgc3Rhck1hcCAmJiBzdGFyTWFwW25hbWVTZWdtZW50XSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZFN0YXJNYXAgPSBzdGFyTWFwW25hbWVTZWdtZW50XTtcbiAgICAgICAgICAgICAgICAgICAgc3RhckkgPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFmb3VuZE1hcCAmJiBmb3VuZFN0YXJNYXApIHtcbiAgICAgICAgICAgICAgICBmb3VuZE1hcCA9IGZvdW5kU3Rhck1hcDtcbiAgICAgICAgICAgICAgICBmb3VuZEkgPSBzdGFySTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kTWFwKSB7XG4gICAgICAgICAgICAgICAgbmFtZVBhcnRzLnNwbGljZSgwLCBmb3VuZEksIGZvdW5kTWFwKTtcbiAgICAgICAgICAgICAgICBuYW1lID0gbmFtZVBhcnRzLmpvaW4oJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VSZXF1aXJlKHJlbE5hbWUsIGZvcmNlU3luYykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9BIHZlcnNpb24gb2YgYSByZXF1aXJlIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIGEgbW9kdWxlTmFtZVxuICAgICAgICAgICAgLy92YWx1ZSBmb3IgaXRlbXMgdGhhdCBtYXkgbmVlZCB0b1xuICAgICAgICAgICAgLy9sb29rIHVwIHBhdGhzIHJlbGF0aXZlIHRvIHRoZSBtb2R1bGVOYW1lXG4gICAgICAgICAgICB2YXIgYXJncyA9IGFwcy5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgICAgICAgIC8vSWYgZmlyc3QgYXJnIGlzIG5vdCByZXF1aXJlKCdzdHJpbmcnKSwgYW5kIHRoZXJlIGlzIG9ubHlcbiAgICAgICAgICAgIC8vb25lIGFyZywgaXQgaXMgdGhlIGFycmF5IGZvcm0gd2l0aG91dCBhIGNhbGxiYWNrLiBJbnNlcnRcbiAgICAgICAgICAgIC8vYSBudWxsIHNvIHRoYXQgdGhlIGZvbGxvd2luZyBjb25jYXQgaXMgY29ycmVjdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycgJiYgYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2gobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxLmFwcGx5KHVuZGVmLCBhcmdzLmNvbmNhdChbcmVsTmFtZSwgZm9yY2VTeW5jXSkpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VOb3JtYWxpemUocmVsTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUobmFtZSwgcmVsTmFtZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUxvYWQoZGVwTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBkZWZpbmVkW2RlcE5hbWVdID0gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbERlcChuYW1lKSB7XG4gICAgICAgIGlmIChoYXNQcm9wKHdhaXRpbmcsIG5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IHdhaXRpbmdbbmFtZV07XG4gICAgICAgICAgICBkZWxldGUgd2FpdGluZ1tuYW1lXTtcbiAgICAgICAgICAgIGRlZmluaW5nW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIG1haW4uYXBwbHkodW5kZWYsIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNQcm9wKGRlZmluZWQsIG5hbWUpICYmICFoYXNQcm9wKGRlZmluaW5nLCBuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyAnICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluZWRbbmFtZV07XG4gICAgfVxuXG4gICAgLy9UdXJucyBhIHBsdWdpbiFyZXNvdXJjZSB0byBbcGx1Z2luLCByZXNvdXJjZV1cbiAgICAvL3dpdGggdGhlIHBsdWdpbiBiZWluZyB1bmRlZmluZWQgaWYgdGhlIG5hbWVcbiAgICAvL2RpZCBub3QgaGF2ZSBhIHBsdWdpbiBwcmVmaXguXG4gICAgZnVuY3Rpb24gc3BsaXRQcmVmaXgobmFtZSkge1xuICAgICAgICB2YXIgcHJlZml4LFxuICAgICAgICAgICAgaW5kZXggPSBuYW1lID8gbmFtZS5pbmRleE9mKCchJykgOiAtMTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHByZWZpeCA9IG5hbWUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZyhpbmRleCArIDEsIG5hbWUubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3ByZWZpeCwgbmFtZV07XG4gICAgfVxuXG4gICAgLy9DcmVhdGVzIGEgcGFydHMgYXJyYXkgZm9yIGEgcmVsTmFtZSB3aGVyZSBmaXJzdCBwYXJ0IGlzIHBsdWdpbiBJRCxcbiAgICAvL3NlY29uZCBwYXJ0IGlzIHJlc291cmNlIElELiBBc3N1bWVzIHJlbE5hbWUgaGFzIGFscmVhZHkgYmVlbiBub3JtYWxpemVkLlxuICAgIGZ1bmN0aW9uIG1ha2VSZWxQYXJ0cyhyZWxOYW1lKSB7XG4gICAgICAgIHJldHVybiByZWxOYW1lID8gc3BsaXRQcmVmaXgocmVsTmFtZSkgOiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIG5hbWUgbWFwLCBub3JtYWxpemluZyB0aGUgbmFtZSwgYW5kIHVzaW5nIGEgcGx1Z2luXG4gICAgICogZm9yIG5vcm1hbGl6YXRpb24gaWYgbmVjZXNzYXJ5LiBHcmFicyBhIHJlZiB0byBwbHVnaW5cbiAgICAgKiB0b28sIGFzIGFuIG9wdGltaXphdGlvbi5cbiAgICAgKi9cbiAgICBtYWtlTWFwID0gZnVuY3Rpb24gKG5hbWUsIHJlbFBhcnRzKSB7XG4gICAgICAgIHZhciBwbHVnaW4sXG4gICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpLFxuICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF0sXG4gICAgICAgICAgICByZWxSZXNvdXJjZU5hbWUgPSByZWxQYXJ0c1sxXTtcblxuICAgICAgICBuYW1lID0gcGFydHNbMV07XG5cbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgcHJlZml4ID0gbm9ybWFsaXplKHByZWZpeCwgcmVsUmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIHBsdWdpbiA9IGNhbGxEZXAocHJlZml4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vTm9ybWFsaXplIGFjY29yZGluZ1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luICYmIHBsdWdpbi5ub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gcGx1Z2luLm5vcm1hbGl6ZShuYW1lLCBtYWtlTm9ybWFsaXplKHJlbFJlc291cmNlTmFtZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplKG5hbWUsIHJlbFJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplKG5hbWUsIHJlbFJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpO1xuICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF07XG4gICAgICAgICAgICBuYW1lID0gcGFydHNbMV07XG4gICAgICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luID0gY2FsbERlcChwcmVmaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9Vc2luZyByaWRpY3Vsb3VzIHByb3BlcnR5IG5hbWVzIGZvciBzcGFjZSByZWFzb25zXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmOiBwcmVmaXggPyBwcmVmaXggKyAnIScgKyBuYW1lIDogbmFtZSwgLy9mdWxsTmFtZVxuICAgICAgICAgICAgbjogbmFtZSxcbiAgICAgICAgICAgIHByOiBwcmVmaXgsXG4gICAgICAgICAgICBwOiBwbHVnaW5cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWFrZUNvbmZpZyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbmZpZyAmJiBjb25maWcuY29uZmlnICYmIGNvbmZpZy5jb25maWdbbmFtZV0pIHx8IHt9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZXJzID0ge1xuICAgICAgICByZXF1aXJlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VSZXF1aXJlKG5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBleHBvcnRzOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIGUgPSBkZWZpbmVkW25hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRlZmluZWRbbmFtZV0gPSB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG5hbWUsXG4gICAgICAgICAgICAgICAgdXJpOiAnJyxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBkZWZpbmVkW25hbWVdLFxuICAgICAgICAgICAgICAgIGNvbmZpZzogbWFrZUNvbmZpZyhuYW1lKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtYWluID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKSB7XG4gICAgICAgIHZhciBjanNNb2R1bGUsIGRlcE5hbWUsIHJldCwgbWFwLCBpLCByZWxQYXJ0cyxcbiAgICAgICAgICAgIGFyZ3MgPSBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrVHlwZSA9IHR5cGVvZiBjYWxsYmFjayxcbiAgICAgICAgICAgIHVzaW5nRXhwb3J0cztcblxuICAgICAgICAvL1VzZSBuYW1lIGlmIG5vIHJlbE5hbWVcbiAgICAgICAgcmVsTmFtZSA9IHJlbE5hbWUgfHwgbmFtZTtcbiAgICAgICAgcmVsUGFydHMgPSBtYWtlUmVsUGFydHMocmVsTmFtZSk7XG5cbiAgICAgICAgLy9DYWxsIHRoZSBjYWxsYmFjayB0byBkZWZpbmUgdGhlIG1vZHVsZSwgaWYgbmVjZXNzYXJ5LlxuICAgICAgICBpZiAoY2FsbGJhY2tUeXBlID09PSAndW5kZWZpbmVkJyB8fCBjYWxsYmFja1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vUHVsbCBvdXQgdGhlIGRlZmluZWQgZGVwZW5kZW5jaWVzIGFuZCBwYXNzIHRoZSBvcmRlcmVkXG4gICAgICAgICAgICAvL3ZhbHVlcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICAvL0RlZmF1bHQgdG8gW3JlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZV0gaWYgbm8gZGVwc1xuICAgICAgICAgICAgZGVwcyA9ICFkZXBzLmxlbmd0aCAmJiBjYWxsYmFjay5sZW5ndGggPyBbJ3JlcXVpcmUnLCAnZXhwb3J0cycsICdtb2R1bGUnXSA6IGRlcHM7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG1hcCA9IG1ha2VNYXAoZGVwc1tpXSwgcmVsUGFydHMpO1xuICAgICAgICAgICAgICAgIGRlcE5hbWUgPSBtYXAuZjtcblxuICAgICAgICAgICAgICAgIC8vRmFzdCBwYXRoIENvbW1vbkpTIHN0YW5kYXJkIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICAgICBpZiAoZGVwTmFtZSA9PT0gXCJyZXF1aXJlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGhhbmRsZXJzLnJlcXVpcmUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXBOYW1lID09PSBcImV4cG9ydHNcIikge1xuICAgICAgICAgICAgICAgICAgICAvL0NvbW1vbkpTIG1vZHVsZSBzcGVjIDEuMVxuICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gaGFuZGxlcnMuZXhwb3J0cyhuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdXNpbmdFeHBvcnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlcE5hbWUgPT09IFwibW9kdWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9Db21tb25KUyBtb2R1bGUgc3BlYyAxLjFcbiAgICAgICAgICAgICAgICAgICAgY2pzTW9kdWxlID0gYXJnc1tpXSA9IGhhbmRsZXJzLm1vZHVsZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1Byb3AoZGVmaW5lZCwgZGVwTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Byb3Aod2FpdGluZywgZGVwTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Byb3AoZGVmaW5pbmcsIGRlcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBjYWxsRGVwKGRlcE5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFwLnApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnAubG9hZChtYXAubiwgbWFrZVJlcXVpcmUocmVsTmFtZSwgdHJ1ZSksIG1ha2VMb2FkKGRlcE5hbWUpLCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBkZWZpbmVkW2RlcE5hbWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJyBtaXNzaW5nICcgKyBkZXBOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldCA9IGNhbGxiYWNrID8gY2FsbGJhY2suYXBwbHkoZGVmaW5lZFtuYW1lXSwgYXJncykgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy9JZiBzZXR0aW5nIGV4cG9ydHMgdmlhIFwibW9kdWxlXCIgaXMgaW4gcGxheSxcbiAgICAgICAgICAgICAgICAvL2Zhdm9yIHRoYXQgb3ZlciByZXR1cm4gdmFsdWUgYW5kIGV4cG9ydHMuIEFmdGVyIHRoYXQsXG4gICAgICAgICAgICAgICAgLy9mYXZvciBhIG5vbi11bmRlZmluZWQgcmV0dXJuIHZhbHVlIG92ZXIgZXhwb3J0cyB1c2UuXG4gICAgICAgICAgICAgICAgaWYgKGNqc01vZHVsZSAmJiBjanNNb2R1bGUuZXhwb3J0cyAhPT0gdW5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNqc01vZHVsZS5leHBvcnRzICE9PSBkZWZpbmVkW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSBjanNNb2R1bGUuZXhwb3J0cztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJldCAhPT0gdW5kZWYgfHwgIXVzaW5nRXhwb3J0cykge1xuICAgICAgICAgICAgICAgICAgICAvL1VzZSB0aGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVkW25hbWVdID0gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAvL01heSBqdXN0IGJlIGFuIG9iamVjdCBkZWZpbml0aW9uIGZvciB0aGUgbW9kdWxlLiBPbmx5XG4gICAgICAgICAgICAvL3dvcnJ5IGFib3V0IGRlZmluaW5nIGlmIGhhdmUgYSBtb2R1bGUgbmFtZS5cbiAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1aXJlanMgPSByZXF1aXJlID0gcmVxID0gZnVuY3Rpb24gKGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lLCBmb3JjZVN5bmMsIGFsdCkge1xuICAgICAgICBpZiAodHlwZW9mIGRlcHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1tkZXBzXSkge1xuICAgICAgICAgICAgICAgIC8vY2FsbGJhY2sgaW4gdGhpcyBjYXNlIGlzIHJlYWxseSByZWxOYW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJzW2RlcHNdKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSnVzdCByZXR1cm4gdGhlIG1vZHVsZSB3YW50ZWQuIEluIHRoaXMgc2NlbmFyaW8sIHRoZVxuICAgICAgICAgICAgLy9kZXBzIGFyZyBpcyB0aGUgbW9kdWxlIG5hbWUsIGFuZCBzZWNvbmQgYXJnIChpZiBwYXNzZWQpXG4gICAgICAgICAgICAvL2lzIGp1c3QgdGhlIHJlbE5hbWUuXG4gICAgICAgICAgICAvL05vcm1hbGl6ZSBtb2R1bGUgbmFtZSwgaWYgaXQgY29udGFpbnMgLiBvciAuLlxuICAgICAgICAgICAgcmV0dXJuIGNhbGxEZXAobWFrZU1hcChkZXBzLCBtYWtlUmVsUGFydHMoY2FsbGJhY2spKS5mKTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVwcy5zcGxpY2UpIHtcbiAgICAgICAgICAgIC8vZGVwcyBpcyBhIGNvbmZpZyBvYmplY3QsIG5vdCBhbiBhcnJheS5cbiAgICAgICAgICAgIGNvbmZpZyA9IGRlcHM7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmRlcHMpIHtcbiAgICAgICAgICAgICAgICByZXEoY29uZmlnLmRlcHMsIGNvbmZpZy5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suc3BsaWNlKSB7XG4gICAgICAgICAgICAgICAgLy9jYWxsYmFjayBpcyBhbiBhcnJheSwgd2hpY2ggbWVhbnMgaXQgaXMgYSBkZXBlbmRlbmN5IGxpc3QuXG4gICAgICAgICAgICAgICAgLy9BZGp1c3QgYXJncyBpZiB0aGVyZSBhcmUgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgZGVwcyA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gcmVsTmFtZTtcbiAgICAgICAgICAgICAgICByZWxOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVwcyA9IHVuZGVmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9TdXBwb3J0IHJlcXVpcmUoWydhJ10pXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAgICAgLy9JZiByZWxOYW1lIGlzIGEgZnVuY3Rpb24sIGl0IGlzIGFuIGVycmJhY2sgaGFuZGxlcixcbiAgICAgICAgLy9zbyByZW1vdmUgaXQuXG4gICAgICAgIGlmICh0eXBlb2YgcmVsTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVsTmFtZSA9IGZvcmNlU3luYztcbiAgICAgICAgICAgIGZvcmNlU3luYyA9IGFsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vU2ltdWxhdGUgYXN5bmMgY2FsbGJhY2s7XG4gICAgICAgIGlmIChmb3JjZVN5bmMpIHtcbiAgICAgICAgICAgIG1haW4odW5kZWYsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vVXNpbmcgYSBub24temVybyB2YWx1ZSBiZWNhdXNlIG9mIGNvbmNlcm4gZm9yIHdoYXQgb2xkIGJyb3dzZXJzXG4gICAgICAgICAgICAvL2RvLCBhbmQgbGF0ZXN0IGJyb3dzZXJzIFwidXBncmFkZVwiIHRvIDQgaWYgbG93ZXIgdmFsdWUgaXMgdXNlZDpcbiAgICAgICAgICAgIC8vaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvdGltZXJzLmh0bWwjZG9tLXdpbmRvd3RpbWVycy1zZXR0aW1lb3V0OlxuICAgICAgICAgICAgLy9JZiB3YW50IGEgdmFsdWUgaW1tZWRpYXRlbHksIHVzZSByZXF1aXJlKCdpZCcpIGluc3RlYWQgLS0gc29tZXRoaW5nXG4gICAgICAgICAgICAvL3RoYXQgd29ya3MgaW4gYWxtb25kIG9uIHRoZSBnbG9iYWwgbGV2ZWwsIGJ1dCBub3QgZ3VhcmFudGVlZCBhbmRcbiAgICAgICAgICAgIC8vdW5saWtlbHkgdG8gd29yayBpbiBvdGhlciBBTUQgaW1wbGVtZW50YXRpb25zLlxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbWFpbih1bmRlZiwgZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUpO1xuICAgICAgICAgICAgfSwgNCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVxO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBKdXN0IGRyb3BzIHRoZSBjb25maWcgb24gdGhlIGZsb29yLCBidXQgcmV0dXJucyByZXEgaW4gY2FzZVxuICAgICAqIHRoZSBjb25maWcgcmV0dXJuIHZhbHVlIGlzIHVzZWQuXG4gICAgICovXG4gICAgcmVxLmNvbmZpZyA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICAgICAgcmV0dXJuIHJlcShjZmcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2UgbW9kdWxlIHJlZ2lzdHJ5IGZvciBkZWJ1Z2dpbmcgYW5kIHRvb2xpbmdcbiAgICAgKi9cbiAgICByZXF1aXJlanMuX2RlZmluZWQgPSBkZWZpbmVkO1xuXG4gICAgZGVmaW5lID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VlIGFsbW9uZCBSRUFETUU6IGluY29ycmVjdCBtb2R1bGUgYnVpbGQsIG5vIG1vZHVsZSBuYW1lJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RoaXMgbW9kdWxlIG1heSBub3QgaGF2ZSBkZXBlbmRlbmNpZXNcbiAgICAgICAgaWYgKCFkZXBzLnNwbGljZSkge1xuICAgICAgICAgICAgLy9kZXBzIGlzIG5vdCBhbiBhcnJheSwgc28gcHJvYmFibHkgbWVhbnNcbiAgICAgICAgICAgIC8vYW4gb2JqZWN0IGxpdGVyYWwgb3IgZmFjdG9yeSBmdW5jdGlvbiBmb3JcbiAgICAgICAgICAgIC8vdGhlIHZhbHVlLiBBZGp1c3QgYXJncy5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gZGVwcztcbiAgICAgICAgICAgIGRlcHMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzUHJvcChkZWZpbmVkLCBuYW1lKSAmJiAhaGFzUHJvcCh3YWl0aW5nLCBuYW1lKSkge1xuICAgICAgICAgICAgd2FpdGluZ1tuYW1lXSA9IFtuYW1lLCBkZXBzLCBjYWxsYmFja107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVmaW5lLmFtZCA9IHtcbiAgICAgICAgalF1ZXJ5OiB0cnVlXG4gICAgfTtcbn0oKSk7XG5cblMyLnJlcXVpcmVqcyA9IHJlcXVpcmVqcztTMi5yZXF1aXJlID0gcmVxdWlyZTtTMi5kZWZpbmUgPSBkZWZpbmU7XG59XG59KCkpO1xuUzIuZGVmaW5lKFwiYWxtb25kXCIsIGZ1bmN0aW9uKCl7fSk7XG5cbi8qIGdsb2JhbCBqUXVlcnk6ZmFsc2UsICQ6ZmFsc2UgKi9cblMyLmRlZmluZSgnanF1ZXJ5JyxbXSxmdW5jdGlvbiAoKSB7XG4gIHZhciBfJCA9IGpRdWVyeSB8fCAkO1xuXG4gIGlmIChfJCA9PSBudWxsICYmIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnU2VsZWN0MjogQW4gaW5zdGFuY2Ugb2YgalF1ZXJ5IG9yIGEgalF1ZXJ5LWNvbXBhdGlibGUgbGlicmFyeSB3YXMgbm90ICcgK1xuICAgICAgJ2ZvdW5kLiBNYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGluY2x1ZGluZyBqUXVlcnkgYmVmb3JlIFNlbGVjdDIgb24geW91ciAnICtcbiAgICAgICd3ZWIgcGFnZS4nXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBfJDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvdXRpbHMnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIHZhciBVdGlscyA9IHt9O1xuXG4gIFV0aWxzLkV4dGVuZCA9IGZ1bmN0aW9uIChDaGlsZENsYXNzLCBTdXBlckNsYXNzKSB7XG4gICAgdmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gICAgZnVuY3Rpb24gQmFzZUNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBDaGlsZENsYXNzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBTdXBlckNsYXNzKSB7XG4gICAgICBpZiAoX19oYXNQcm9wLmNhbGwoU3VwZXJDbGFzcywga2V5KSkge1xuICAgICAgICBDaGlsZENsYXNzW2tleV0gPSBTdXBlckNsYXNzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmFzZUNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IFN1cGVyQ2xhc3MucHJvdG90eXBlO1xuICAgIENoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IEJhc2VDb25zdHJ1Y3RvcigpO1xuICAgIENoaWxkQ2xhc3MuX19zdXBlcl9fID0gU3VwZXJDbGFzcy5wcm90b3R5cGU7XG5cbiAgICByZXR1cm4gQ2hpbGRDbGFzcztcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRNZXRob2RzICh0aGVDbGFzcykge1xuICAgIHZhciBwcm90byA9IHRoZUNsYXNzLnByb3RvdHlwZTtcblxuICAgIHZhciBtZXRob2RzID0gW107XG5cbiAgICBmb3IgKHZhciBtZXRob2ROYW1lIGluIHByb3RvKSB7XG4gICAgICB2YXIgbSA9IHByb3RvW21ldGhvZE5hbWVdO1xuXG4gICAgICBpZiAodHlwZW9mIG0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBtZXRob2RzLnB1c2gobWV0aG9kTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGhvZHM7XG4gIH1cblxuICBVdGlscy5EZWNvcmF0ZSA9IGZ1bmN0aW9uIChTdXBlckNsYXNzLCBEZWNvcmF0b3JDbGFzcykge1xuICAgIHZhciBkZWNvcmF0ZWRNZXRob2RzID0gZ2V0TWV0aG9kcyhEZWNvcmF0b3JDbGFzcyk7XG4gICAgdmFyIHN1cGVyTWV0aG9kcyA9IGdldE1ldGhvZHMoU3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBEZWNvcmF0ZWRDbGFzcyAoKSB7XG4gICAgICB2YXIgdW5zaGlmdCA9IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0O1xuXG4gICAgICB2YXIgYXJnQ291bnQgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IubGVuZ3RoO1xuXG4gICAgICB2YXIgY2FsbGVkQ29uc3RydWN0b3IgPSBTdXBlckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuICAgICAgaWYgKGFyZ0NvdW50ID4gMCkge1xuICAgICAgICB1bnNoaWZ0LmNhbGwoYXJndW1lbnRzLCBTdXBlckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgY2FsbGVkQ29uc3RydWN0b3IgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3I7XG4gICAgICB9XG5cbiAgICAgIGNhbGxlZENvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgRGVjb3JhdG9yQ2xhc3MuZGlzcGxheU5hbWUgPSBTdXBlckNsYXNzLmRpc3BsYXlOYW1lO1xuXG4gICAgZnVuY3Rpb24gY3RyICgpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBEZWNvcmF0ZWRDbGFzcztcbiAgICB9XG5cbiAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGUgPSBuZXcgY3RyKCk7XG5cbiAgICBmb3IgKHZhciBtID0gMDsgbSA8IHN1cGVyTWV0aG9kcy5sZW5ndGg7IG0rKykge1xuICAgICAgdmFyIHN1cGVyTWV0aG9kID0gc3VwZXJNZXRob2RzW21dO1xuXG4gICAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGVbc3VwZXJNZXRob2RdID1cbiAgICAgICAgU3VwZXJDbGFzcy5wcm90b3R5cGVbc3VwZXJNZXRob2RdO1xuICAgIH1cblxuICAgIHZhciBjYWxsZWRNZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgLy8gU3R1YiBvdXQgdGhlIG9yaWdpbmFsIG1ldGhvZCBpZiBpdCdzIG5vdCBkZWNvcmF0aW5nIGFuIGFjdHVhbCBtZXRob2RcbiAgICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICBpZiAobWV0aG9kTmFtZSBpbiBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGUpIHtcbiAgICAgICAgb3JpZ2luYWxNZXRob2QgPSBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWNvcmF0ZWRNZXRob2QgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1bnNoaWZ0ID0gQXJyYXkucHJvdG90eXBlLnVuc2hpZnQ7XG5cbiAgICAgICAgdW5zaGlmdC5jYWxsKGFyZ3VtZW50cywgb3JpZ2luYWxNZXRob2QpO1xuXG4gICAgICAgIHJldHVybiBkZWNvcmF0ZWRNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGVjb3JhdGVkTWV0aG9kcy5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGRlY29yYXRlZE1ldGhvZCA9IGRlY29yYXRlZE1ldGhvZHNbZF07XG5cbiAgICAgIERlY29yYXRlZENsYXNzLnByb3RvdHlwZVtkZWNvcmF0ZWRNZXRob2RdID0gY2FsbGVkTWV0aG9kKGRlY29yYXRlZE1ldGhvZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERlY29yYXRlZENsYXNzO1xuICB9O1xuXG4gIHZhciBPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCB7fTtcblxuICAgIGlmIChldmVudCBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBbY2FsbGJhY2tdO1xuICAgIH1cbiAgfTtcblxuICBPYnNlcnZhYmxlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICAgIHZhciBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgLy8gUGFyYW1zIHNob3VsZCBhbHdheXMgY29tZSBpbiBhcyBhbiBhcnJheVxuICAgIGlmIChwYXJhbXMgPT0gbnVsbCkge1xuICAgICAgcGFyYW1zID0gW107XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGFyZ3VtZW50cyB0byB0aGUgZXZlbnQsIHVzZSBhIHRlbXBvcmFyeSBvYmplY3RcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcGFyYW1zLnB1c2goe30pO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgYF90eXBlYCBvZiB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBldmVudFxuICAgIHBhcmFtc1swXS5fdHlwZSA9IGV2ZW50O1xuXG4gICAgaWYgKGV2ZW50IGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmludm9rZSh0aGlzLmxpc3RlbmVyc1tldmVudF0sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfVxuXG4gICAgaWYgKCcqJyBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5pbnZva2UodGhpcy5saXN0ZW5lcnNbJyonXSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGxpc3RlbmVycywgcGFyYW1zKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIFV0aWxzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuXG4gIFV0aWxzLmdlbmVyYXRlQ2hhcnMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgdmFyIGNoYXJzID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmFuZG9tQ2hhciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2KTtcbiAgICAgIGNoYXJzICs9IHJhbmRvbUNoYXIudG9TdHJpbmcoMzYpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGFycztcbiAgfTtcblxuICBVdGlscy5iaW5kID0gZnVuY3Rpb24gKGZ1bmMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgVXRpbHMuX2NvbnZlcnREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKHZhciBvcmlnaW5hbEtleSBpbiBkYXRhKSB7XG4gICAgICB2YXIga2V5cyA9IG9yaWdpbmFsS2V5LnNwbGl0KCctJyk7XG5cbiAgICAgIHZhciBkYXRhTGV2ZWwgPSBkYXRhO1xuXG4gICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwga2V5cy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXTtcblxuICAgICAgICAvLyBMb3dlcmNhc2UgdGhlIGZpcnN0IGxldHRlclxuICAgICAgICAvLyBCeSBkZWZhdWx0LCBkYXNoLXNlcGFyYXRlZCBiZWNvbWVzIGNhbWVsQ2FzZVxuICAgICAgICBrZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xuXG4gICAgICAgIGlmICghKGtleSBpbiBkYXRhTGV2ZWwpKSB7XG4gICAgICAgICAgZGF0YUxldmVsW2tleV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrID09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGRhdGFMZXZlbFtrZXldID0gZGF0YVtvcmlnaW5hbEtleV07XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhTGV2ZWwgPSBkYXRhTGV2ZWxba2V5XTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIGRhdGFbb3JpZ2luYWxLZXldO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIFV0aWxzLmhhc1Njcm9sbCA9IGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICAvLyBBZGFwdGVkIGZyb20gdGhlIGZ1bmN0aW9uIGNyZWF0ZWQgYnkgQFNoYWRvd1NjcmlwdGVyXG4gICAgLy8gYW5kIGFkYXB0ZWQgYnkgQEJpbGxCYXJyeSBvbiB0aGUgU3RhY2sgRXhjaGFuZ2UgQ29kZSBSZXZpZXcgd2Vic2l0ZS5cbiAgICAvLyBUaGUgb3JpZ2luYWwgY29kZSBjYW4gYmUgZm91bmQgYXRcbiAgICAvLyBodHRwOi8vY29kZXJldmlldy5zdGFja2V4Y2hhbmdlLmNvbS9xLzEzMzM4XG4gICAgLy8gYW5kIHdhcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggdGhlIFNpenpsZSBzZWxlY3RvciBlbmdpbmUuXG5cbiAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgdmFyIG92ZXJmbG93WCA9IGVsLnN0eWxlLm92ZXJmbG93WDtcbiAgICB2YXIgb3ZlcmZsb3dZID0gZWwuc3R5bGUub3ZlcmZsb3dZO1xuXG4gICAgLy9DaGVjayBib3RoIHggYW5kIHkgZGVjbGFyYXRpb25zXG4gICAgaWYgKG92ZXJmbG93WCA9PT0gb3ZlcmZsb3dZICYmXG4gICAgICAgIChvdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IG92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IG92ZXJmbG93WSA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAoJGVsLmlubmVySGVpZ2h0KCkgPCBlbC5zY3JvbGxIZWlnaHQgfHxcbiAgICAgICRlbC5pbm5lcldpZHRoKCkgPCBlbC5zY3JvbGxXaWR0aCk7XG4gIH07XG5cbiAgVXRpbHMuZXNjYXBlTWFya3VwID0gZnVuY3Rpb24gKG1hcmt1cCkge1xuICAgIHZhciByZXBsYWNlTWFwID0ge1xuICAgICAgJ1xcXFwnOiAnJiM5MjsnLFxuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJ1xcJyc6ICcmIzM5OycsXG4gICAgICAnLyc6ICcmIzQ3OydcbiAgICB9O1xuXG4gICAgLy8gRG8gbm90IHRyeSB0byBlc2NhcGUgdGhlIG1hcmt1cCBpZiBpdCdzIG5vdCBhIHN0cmluZ1xuICAgIGlmICh0eXBlb2YgbWFya3VwICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nKG1hcmt1cCkucmVwbGFjZSgvWyY8PlwiJ1xcL1xcXFxdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VNYXBbbWF0Y2hdO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEFwcGVuZCBhbiBhcnJheSBvZiBqUXVlcnkgbm9kZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxuICBVdGlscy5hcHBlbmRNYW55ID0gZnVuY3Rpb24gKCRlbGVtZW50LCAkbm9kZXMpIHtcbiAgICAvLyBqUXVlcnkgMS43LnggZG9lcyBub3Qgc3VwcG9ydCAkLmZuLmFwcGVuZCgpIHdpdGggYW4gYXJyYXlcbiAgICAvLyBGYWxsIGJhY2sgdG8gYSBqUXVlcnkgb2JqZWN0IGNvbGxlY3Rpb24gdXNpbmcgJC5mbi5hZGQoKVxuICAgIGlmICgkLmZuLmpxdWVyeS5zdWJzdHIoMCwgMykgPT09ICcxLjcnKSB7XG4gICAgICB2YXIgJGpxTm9kZXMgPSAkKCk7XG5cbiAgICAgICQubWFwKCRub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgJGpxTm9kZXMgPSAkanFOb2Rlcy5hZGQobm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgJG5vZGVzID0gJGpxTm9kZXM7XG4gICAgfVxuXG4gICAgJGVsZW1lbnQuYXBwZW5kKCRub2Rlcyk7XG4gIH07XG5cbiAgLy8gQ2FjaGUgb2JqZWN0cyBpbiBVdGlscy5fX2NhY2hlIGluc3RlYWQgb2YgJC5kYXRhIChzZWUgIzQzNDYpXG4gIFV0aWxzLl9fY2FjaGUgPSB7fTtcblxuICB2YXIgaWQgPSAwO1xuICBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIEdldCBhIHVuaXF1ZSBlbGVtZW50IElkLiBJZiBlbGVtZW50IGhhcyBubyBpZCxcbiAgICAvLyBjcmVhdGVzIGEgbmV3IHVuaXF1ZSBudW1iZXIsIHN0b3JlcyBpdCBpbiB0aGUgaWRcbiAgICAvLyBhdHRyaWJ1dGUgYW5kIHJldHVybnMgdGhlIG5ldyBpZC5cbiAgICAvLyBJZiBhbiBpZCBhbHJlYWR5IGV4aXN0cywgaXQgc2ltcGx5IHJldHVybnMgaXQuXG5cbiAgICB2YXIgc2VsZWN0MklkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcpO1xuICAgIGlmIChzZWxlY3QySWQgPT0gbnVsbCkge1xuICAgICAgLy8gSWYgZWxlbWVudCBoYXMgaWQsIHVzZSBpdC5cbiAgICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICAgIHNlbGVjdDJJZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdDItaWQnLCBzZWxlY3QySWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcsICsraWQpO1xuICAgICAgICBzZWxlY3QySWQgPSBpZC50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0MklkO1xuICB9O1xuXG4gIFV0aWxzLlN0b3JlRGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIC8vIFN0b3JlcyBhbiBpdGVtIGluIHRoZSBjYWNoZSBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAvLyBuYW1lIGlzIHRoZSBjYWNoZSBrZXkuXG4gICAgdmFyIGlkID0gVXRpbHMuR2V0VW5pcXVlRWxlbWVudElkKGVsZW1lbnQpO1xuICAgIGlmICghVXRpbHMuX19jYWNoZVtpZF0pIHtcbiAgICAgIFV0aWxzLl9fY2FjaGVbaWRdID0ge307XG4gICAgfVxuXG4gICAgVXRpbHMuX19jYWNoZVtpZF1bbmFtZV0gPSB2YWx1ZTtcbiAgfTtcblxuICBVdGlscy5HZXREYXRhID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAvLyBSZXRyaWV2ZXMgYSB2YWx1ZSBmcm9tIHRoZSBjYWNoZSBieSBpdHMga2V5IChuYW1lKVxuICAgIC8vIG5hbWUgaXMgb3B0aW9uYWwuIElmIG5vIG5hbWUgc3BlY2lmaWVkLCByZXR1cm5cbiAgICAvLyBhbGwgY2FjaGUgaXRlbXMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAvLyBhbmQgZm9yIGEgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgdmFyIGlkID0gVXRpbHMuR2V0VW5pcXVlRWxlbWVudElkKGVsZW1lbnQpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICBpZiAoVXRpbHMuX19jYWNoZVtpZF0pIHtcbiAgICAgICAgaWYgKFV0aWxzLl9fY2FjaGVbaWRdW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gVXRpbHMuX19jYWNoZVtpZF1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQoZWxlbWVudCkuZGF0YShuYW1lKTsgLy8gRmFsbGJhY2sgdG8gSFRNTDUgZGF0YSBhdHRyaWJzLlxuICAgICAgfVxuICAgICAgcmV0dXJuICQoZWxlbWVudCkuZGF0YShuYW1lKTsgLy8gRmFsbGJhY2sgdG8gSFRNTDUgZGF0YSBhdHRyaWJzLlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gVXRpbHMuX19jYWNoZVtpZF07XG4gICAgfVxuICB9O1xuXG4gIFV0aWxzLlJlbW92ZURhdGEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIFJlbW92ZXMgYWxsIGNhY2hlZCBpdGVtcyBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICB2YXIgaWQgPSBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQoZWxlbWVudCk7XG4gICAgaWYgKFV0aWxzLl9fY2FjaGVbaWRdICE9IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBVdGlscy5fX2NhY2hlW2lkXTtcbiAgICB9XG5cbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QyLWlkJyk7XG4gIH07XG5cbiAgcmV0dXJuIFV0aWxzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9yZXN1bHRzJyxbXG4gICdqcXVlcnknLFxuICAnLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBSZXN1bHRzICgkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5kYXRhID0gZGF0YUFkYXB0ZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIFJlc3VsdHMuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoUmVzdWx0cywgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkcmVzdWx0cyA9ICQoXG4gICAgICAnPHVsIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zXCIgcm9sZT1cImxpc3Rib3hcIj48L3VsPidcbiAgICApO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICRyZXN1bHRzLmF0dHIoJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICB0aGlzLiRyZXN1bHRzID0gJHJlc3VsdHM7XG5cbiAgICByZXR1cm4gJHJlc3VsdHM7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5lbXB0eSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmRpc3BsYXlNZXNzYWdlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIHZhciBlc2NhcGVNYXJrdXAgPSB0aGlzLm9wdGlvbnMuZ2V0KCdlc2NhcGVNYXJrdXAnKTtcblxuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICB2YXIgJG1lc3NhZ2UgPSAkKFxuICAgICAgJzxsaSByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIicgK1xuICAgICAgJyBjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCI+PC9saT4nXG4gICAgKTtcblxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KHBhcmFtcy5tZXNzYWdlKTtcblxuICAgICRtZXNzYWdlLmFwcGVuZChcbiAgICAgIGVzY2FwZU1hcmt1cChcbiAgICAgICAgbWVzc2FnZShwYXJhbXMuYXJncylcbiAgICAgIClcbiAgICApO1xuXG4gICAgJG1lc3NhZ2VbMF0uY2xhc3NOYW1lICs9ICcgc2VsZWN0Mi1yZXN1bHRzX19tZXNzYWdlJztcblxuICAgIHRoaXMuJHJlc3VsdHMuYXBwZW5kKCRtZXNzYWdlKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5oaWRlTWVzc2FnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19tZXNzYWdlJykucmVtb3ZlKCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICB2YXIgJG9wdGlvbnMgPSBbXTtcblxuICAgIGlmIChkYXRhLnJlc3VsdHMgPT0gbnVsbCB8fCBkYXRhLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGhpcy4kcmVzdWx0cy5jaGlsZHJlbigpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgICBtZXNzYWdlOiAnbm9SZXN1bHRzJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGEucmVzdWx0cyA9IHRoaXMuc29ydChkYXRhLnJlc3VsdHMpO1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBpdGVtID0gZGF0YS5yZXN1bHRzW2RdO1xuXG4gICAgICB2YXIgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGl0ZW0pO1xuXG4gICAgICAkb3B0aW9ucy5wdXNoKCRvcHRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuJHJlc3VsdHMuYXBwZW5kKCRvcHRpb25zKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5wb3NpdGlvbiA9IGZ1bmN0aW9uICgkcmVzdWx0cywgJGRyb3Bkb3duKSB7XG4gICAgdmFyICRyZXN1bHRzQ29udGFpbmVyID0gJGRyb3Bkb3duLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHMnKTtcbiAgICAkcmVzdWx0c0NvbnRhaW5lci5hcHBlbmQoJHJlc3VsdHMpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzb3J0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdzb3J0ZXInKTtcblxuICAgIHJldHVybiBzb3J0ZXIoZGF0YSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuaGlnaGxpZ2h0Rmlyc3RJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJHJlc3VsdHNcbiAgICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgIHZhciAkc2VsZWN0ZWQgPSAkb3B0aW9ucy5maWx0ZXIoJ1thcmlhLXNlbGVjdGVkPXRydWVdJyk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IHNlbGVjdGVkIG9wdGlvbnNcbiAgICBpZiAoJHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBzZWxlY3RlZCBvcHRpb25zLCBoaWdobGlnaHQgdGhlIGZpcnN0XG4gICAgICAkc2VsZWN0ZWQuZmlyc3QoKS50cmlnZ2VyKCdtb3VzZWVudGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBzZWxlY3RlZCBvcHRpb25zLCBoaWdobGlnaHQgdGhlIGZpcnN0IG9wdGlvblxuICAgICAgLy8gaW4gdGhlIGRyb3Bkb3duXG4gICAgICAkb3B0aW9ucy5maXJzdCgpLnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLmVuc3VyZUhpZ2hsaWdodFZpc2libGUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5zZXRDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YS5jdXJyZW50KGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgdmFyIHNlbGVjdGVkSWRzID0gJC5tYXAoc2VsZWN0ZWQsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzLmlkLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0c1xuICAgICAgICAuZmluZCgnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgdmFyIGl0ZW0gPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XG5cbiAgICAgICAgLy8gaWQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGEgc3RyaW5nIHdoZW4gY29tcGFyaW5nXG4gICAgICAgIHZhciBpZCA9ICcnICsgaXRlbS5pZDtcblxuICAgICAgICBpZiAoKGl0ZW0uZWxlbWVudCAhPSBudWxsICYmIGl0ZW0uZWxlbWVudC5zZWxlY3RlZCkgfHxcbiAgICAgICAgICAgIChpdGVtLmVsZW1lbnQgPT0gbnVsbCAmJiAkLmluQXJyYXkoaWQsIHNlbGVjdGVkSWRzKSA+IC0xKSkge1xuICAgICAgICAgICRvcHRpb24uYXR0cignYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJG9wdGlvbi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgdmFyIGxvYWRpbmdNb3JlID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KCdzZWFyY2hpbmcnKTtcblxuICAgIHZhciBsb2FkaW5nID0ge1xuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgdGV4dDogbG9hZGluZ01vcmUocGFyYW1zKVxuICAgIH07XG4gICAgdmFyICRsb2FkaW5nID0gdGhpcy5vcHRpb24obG9hZGluZyk7XG4gICAgJGxvYWRpbmcuY2xhc3NOYW1lICs9ICcgbG9hZGluZy1yZXN1bHRzJztcblxuICAgIHRoaXMuJHJlc3VsdHMucHJlcGVuZCgkbG9hZGluZyk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5maW5kKCcubG9hZGluZy1yZXN1bHRzJykucmVtb3ZlKCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUub3B0aW9uID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBvcHRpb24uY2xhc3NOYW1lID0gJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uJztcblxuICAgIHZhciBhdHRycyA9IHtcbiAgICAgICdyb2xlJzogJ29wdGlvbicsXG4gICAgICAnYXJpYS1zZWxlY3RlZCc6ICdmYWxzZSdcbiAgICB9O1xuXG4gICAgdmFyIG1hdGNoZXMgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fFxuICAgICAgd2luZG93LkVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgaWYgKChkYXRhLmVsZW1lbnQgIT0gbnVsbCAmJiBtYXRjaGVzLmNhbGwoZGF0YS5lbGVtZW50LCAnOmRpc2FibGVkJykpIHx8XG4gICAgICAgIChkYXRhLmVsZW1lbnQgPT0gbnVsbCAmJiBkYXRhLmRpc2FibGVkKSkge1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgICBhdHRyc1snYXJpYS1kaXNhYmxlZCddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmlkID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBhdHRyc1snYXJpYS1zZWxlY3RlZCddO1xuICAgIH1cblxuICAgIGlmIChkYXRhLl9yZXN1bHRJZCAhPSBudWxsKSB7XG4gICAgICBvcHRpb24uaWQgPSBkYXRhLl9yZXN1bHRJZDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50aXRsZSkge1xuICAgICAgb3B0aW9uLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgYXR0cnMucm9sZSA9ICdncm91cCc7XG4gICAgICBhdHRyc1snYXJpYS1sYWJlbCddID0gZGF0YS50ZXh0O1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgfVxuXG4gICAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuICAgICAgdmFyIHZhbCA9IGF0dHJzW2F0dHJdO1xuXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJChvcHRpb24pO1xuXG4gICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdzZWxlY3QyLXJlc3VsdHNfX2dyb3VwJztcblxuICAgICAgdmFyICRsYWJlbCA9ICQobGFiZWwpO1xuICAgICAgdGhpcy50ZW1wbGF0ZShkYXRhLCBsYWJlbCk7XG5cbiAgICAgIHZhciAkY2hpbGRyZW4gPSBbXTtcblxuICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBkYXRhLmNoaWxkcmVuLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGRhdGEuY2hpbGRyZW5bY107XG5cbiAgICAgICAgdmFyICRjaGlsZCA9IHRoaXMub3B0aW9uKGNoaWxkKTtcblxuICAgICAgICAkY2hpbGRyZW4ucHVzaCgkY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGNoaWxkcmVuQ29udGFpbmVyID0gJCgnPHVsPjwvdWw+Jywge1xuICAgICAgICAnY2xhc3MnOiAnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zIHNlbGVjdDItcmVzdWx0c19fb3B0aW9ucy0tbmVzdGVkJ1xuICAgICAgfSk7XG5cbiAgICAgICRjaGlsZHJlbkNvbnRhaW5lci5hcHBlbmQoJGNoaWxkcmVuKTtcblxuICAgICAgJG9wdGlvbi5hcHBlbmQobGFiZWwpO1xuICAgICAgJG9wdGlvbi5hcHBlbmQoJGNoaWxkcmVuQ29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZW1wbGF0ZShkYXRhLCBvcHRpb24pO1xuICAgIH1cblxuICAgIFV0aWxzLlN0b3JlRGF0YShvcHRpb24sICdkYXRhJywgZGF0YSk7XG5cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHRzJztcblxuICAgIHRoaXMuJHJlc3VsdHMuYXR0cignaWQnLCBpZCk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YWxsJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5jbGVhcigpO1xuICAgICAgc2VsZi5hcHBlbmQocGFyYW1zLmRhdGEpO1xuXG4gICAgICBpZiAoY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuICAgICAgICBzZWxmLmhpZ2hsaWdodEZpcnN0SXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFwcGVuZCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuYXBwZW5kKHBhcmFtcy5kYXRhKTtcblxuICAgICAgaWYgKGNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLnNldENsYXNzZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncXVlcnknLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmhpZGVNZXNzYWdlcygpO1xuICAgICAgc2VsZi5zaG93TG9hZGluZyhwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuXG4gICAgICBpZiAoc2VsZi5vcHRpb25zLmdldCgnc2Nyb2xsQWZ0ZXJTZWxlY3QnKSkge1xuICAgICAgICBzZWxmLmhpZ2hsaWdodEZpcnN0SXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG5cbiAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdzY3JvbGxBZnRlclNlbGVjdCcpKSB7XG4gICAgICAgIHNlbGYuaGlnaGxpZ2h0Rmlyc3RJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBvcGVuLCBhcmlhLWV4cGVuZGVkPVwidHJ1ZVwiXG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICBzZWxmLnNldENsYXNzZXMoKTtcbiAgICAgIHNlbGYuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIGNsb3NlZCwgYXJpYS1leHBlbmRlZD1cImZhbHNlXCJcbiAgICAgIHNlbGYuJHJlc3VsdHMuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBzZWxmLiRyZXN1bHRzLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnRvZ2dsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICRoaWdobGlnaHRlZC50cmlnZ2VyKCdtb3VzZXVwJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6c2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRoaWdobGlnaHRlZFswXSwgJ2RhdGEnKTtcblxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5hdHRyKCdhcmlhLXNlbGVjdGVkJykgPT0gJ3RydWUnKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignY2xvc2UnLCB7fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnByZXZpb3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIHZhciAkb3B0aW9ucyA9IHNlbGYuJHJlc3VsdHMuZmluZCgnW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICAgIHZhciBjdXJyZW50SW5kZXggPSAkb3B0aW9ucy5pbmRleCgkaGlnaGxpZ2h0ZWQpO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSBhdCB0aGUgdG9wLCBkb24ndCBtb3ZlIGZ1cnRoZXJcbiAgICAgIC8vIElmIG5vIG9wdGlvbnMsIGN1cnJlbnRJbmRleCB3aWxsIGJlIC0xXG4gICAgICBpZiAoY3VycmVudEluZGV4IDw9IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcblxuICAgICAgLy8gSWYgbm9uZSBhcmUgaGlnaGxpZ2h0ZWQsIGhpZ2hsaWdodCB0aGUgZmlyc3RcbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciAkbmV4dCA9ICRvcHRpb25zLmVxKG5leHRJbmRleCk7XG5cbiAgICAgICRuZXh0LnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciBuZXh0VG9wID0gJG5leHQub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIG5leHRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgpICsgKG5leHRUb3AgLSBjdXJyZW50T2Zmc2V0KTtcblxuICAgICAgaWYgKG5leHRJbmRleCA9PT0gMCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQgPCAwKSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKG5leHRPZmZzZXQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOm5leHQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0cy5maW5kKCdbYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XG5cbiAgICAgIHZhciBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgYXQgdGhlIGxhc3Qgb3B0aW9uLCBzdGF5IHRoZXJlXG4gICAgICBpZiAobmV4dEluZGV4ID49ICRvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciAkbmV4dCA9ICRvcHRpb25zLmVxKG5leHRJbmRleCk7XG5cbiAgICAgICRuZXh0LnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLm9mZnNldCgpLnRvcCArXG4gICAgICAgIHNlbGYuJHJlc3VsdHMub3V0ZXJIZWlnaHQoZmFsc2UpO1xuICAgICAgdmFyIG5leHRCb3R0b20gPSAkbmV4dC5vZmZzZXQoKS50b3AgKyAkbmV4dC5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgICB2YXIgbmV4dE9mZnNldCA9IHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyBuZXh0Qm90dG9tIC0gY3VycmVudE9mZnNldDtcblxuICAgICAgaWYgKG5leHRJbmRleCA9PT0gMCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dEJvdHRvbSA+IGN1cnJlbnRPZmZzZXQpIHtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AobmV4dE9mZnNldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBwYXJhbXMuZWxlbWVudC5hZGRDbGFzcygnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bWVzc2FnZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuZGlzcGxheU1lc3NhZ2UocGFyYW1zKTtcbiAgICB9KTtcblxuICAgIGlmICgkLmZuLm1vdXNld2hlZWwpIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdG9wID0gc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoKTtcblxuICAgICAgICB2YXIgYm90dG9tID0gc2VsZi4kcmVzdWx0cy5nZXQoMCkuc2Nyb2xsSGVpZ2h0IC0gdG9wICsgZS5kZWx0YVk7XG5cbiAgICAgICAgdmFyIGlzQXRUb3AgPSBlLmRlbHRhWSA+IDAgJiYgdG9wIC0gZS5kZWx0YVkgPD0gMDtcbiAgICAgICAgdmFyIGlzQXRCb3R0b20gPSBlLmRlbHRhWSA8IDAgJiYgYm90dG9tIDw9IHNlbGYuJHJlc3VsdHMuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGlzQXRUb3ApIHtcbiAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXRCb3R0b20pIHtcbiAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcChcbiAgICAgICAgICAgIHNlbGYuJHJlc3VsdHMuZ2V0KDApLnNjcm9sbEhlaWdodCAtIHNlbGYuJHJlc3VsdHMuaGVpZ2h0KClcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuJHJlc3VsdHMub24oJ21vdXNldXAnLCAnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWRdJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnZGF0YScpO1xuXG4gICAgICBpZiAoJHRoaXMuYXR0cignYXJpYS1zZWxlY3RlZCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0LFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcignY2xvc2UnLCB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0Jywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2VlbnRlcicsICcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XG5cbiAgICAgIHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZCcpO1xuXG4gICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6Zm9jdXMnLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGVsZW1lbnQ6ICQodGhpcylcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmdldEhpZ2hsaWdodGVkUmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGhpZ2hsaWdodGVkID0gdGhpcy4kcmVzdWx0c1xuICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG5cbiAgICByZXR1cm4gJGhpZ2hsaWdodGVkO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5yZW1vdmUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5lbnN1cmVIaWdobGlnaHRWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSB0aGlzLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRyZXN1bHRzLmZpbmQoJ1thcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XG5cbiAgICB2YXIgY3VycmVudE9mZnNldCA9IHRoaXMuJHJlc3VsdHMub2Zmc2V0KCkudG9wO1xuICAgIHZhciBuZXh0VG9wID0gJGhpZ2hsaWdodGVkLm9mZnNldCgpLnRvcDtcbiAgICB2YXIgbmV4dE9mZnNldCA9IHRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQpO1xuXG4gICAgdmFyIG9mZnNldERlbHRhID0gbmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQ7XG4gICAgbmV4dE9mZnNldCAtPSAkaGlnaGxpZ2h0ZWQub3V0ZXJIZWlnaHQoZmFsc2UpICogMjtcblxuICAgIGlmIChjdXJyZW50SW5kZXggPD0gMikge1xuICAgICAgdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AoMCk7XG4gICAgfSBlbHNlIGlmIChvZmZzZXREZWx0YSA+IHRoaXMuJHJlc3VsdHMub3V0ZXJIZWlnaHQoKSB8fCBvZmZzZXREZWx0YSA8IDApIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKG5leHRPZmZzZXQpO1xuICAgIH1cbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uIChyZXN1bHQsIGNvbnRhaW5lcikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlUmVzdWx0Jyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSB0ZW1wbGF0ZShyZXN1bHQsIGNvbnRhaW5lcik7XG5cbiAgICBpZiAoY29udGVudCA9PSBudWxsKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGVzY2FwZU1hcmt1cChjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChjb250YWluZXIpLmFwcGVuZChjb250ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJlc3VsdHM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2tleXMnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICB2YXIgS0VZUyA9IHtcbiAgICBCQUNLU1BBQ0U6IDgsXG4gICAgVEFCOiA5LFxuICAgIEVOVEVSOiAxMyxcbiAgICBTSElGVDogMTYsXG4gICAgQ1RSTDogMTcsXG4gICAgQUxUOiAxOCxcbiAgICBFU0M6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBQQUdFX1VQOiAzMyxcbiAgICBQQUdFX0RPV046IDM0LFxuICAgIEVORDogMzUsXG4gICAgSE9NRTogMzYsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBERUxFVEU6IDQ2XG4gIH07XG5cbiAgcmV0dXJuIEtFWVM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9iYXNlJyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBCYXNlU2VsZWN0aW9uICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgQmFzZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChCYXNlU2VsZWN0aW9uLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25cIiByb2xlPVwiY29tYm9ib3hcIiAnICtcbiAgICAgICcgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICB0aGlzLl90YWJpbmRleCA9IDA7XG5cbiAgICBpZiAoVXRpbHMuR2V0RGF0YSh0aGlzLiRlbGVtZW50WzBdLCAnb2xkLXRhYmluZGV4JykgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGFiaW5kZXggPSBVdGlscy5HZXREYXRhKHRoaXMuJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl90YWJpbmRleCA9IHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICAkc2VsZWN0aW9uLmF0dHIoJ3RpdGxlJywgdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScpKTtcbiAgICAkc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgdGhpcy5fdGFiaW5kZXgpO1xuICAgICRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uID0gJHNlbGVjdGlvbjtcblxuICAgIHJldHVybiAkc2VsZWN0aW9uO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHJlc3VsdHNJZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2ZvY3VzJywgZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX2hhbmRsZUJsdXIoZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcigna2V5cHJlc3MnLCBldnQpO1xuXG4gICAgICBpZiAoZXZ0LndoaWNoID09PSBLRVlTLlNQQUNFKSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHBhcmFtcy5kYXRhLl9yZXN1bHRJZCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdGlvbjp1cGRhdGUnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLnVwZGF0ZShwYXJhbXMuZGF0YSk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBvcGVuLCBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1vd25zJywgcmVzdWx0c0lkKTtcblxuICAgICAgc2VsZi5fYXR0YWNoQ2xvc2VIYW5kbGVyKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgY2xvc2VkLCBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5yZW1vdmVBdHRyKCdhcmlhLW93bnMnKTtcblxuICAgICAgc2VsZi4kc2VsZWN0aW9uLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cbiAgICAgIHNlbGYuX2RldGFjaENsb3NlSGFuZGxlcihjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdlbmFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cigndGFiaW5kZXgnLCBzZWxmLl90YWJpbmRleCk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuX2hhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBkZWxheWVkIGFzIHRoZSBhY3RpdmUgZWxlbWVudCBpcyB0aGUgYm9keSB3aGVuIHRoZSB0YWJcbiAgICAvLyBrZXkgaXMgcHJlc3NlZCwgcG9zc2libHkgYWxvbmcgd2l0aCBvdGhlcnMuXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRG9uJ3QgdHJpZ2dlciBgYmx1cmAgaWYgdGhlIGZvY3VzIGlzIHN0aWxsIGluIHRoZSBzZWxlY3Rpb25cbiAgICAgIGlmIChcbiAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gc2VsZi4kc2VsZWN0aW9uWzBdKSB8fFxuICAgICAgICAoJC5jb250YWlucyhzZWxmLiRzZWxlY3Rpb25bMF0sIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi50cmlnZ2VyKCdibHVyJywgZXZ0KTtcbiAgICB9LCAxKTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5fYXR0YWNoQ2xvc2VIYW5kbGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXG4gICAgJChkb2N1bWVudC5ib2R5KS5vbignbW91c2Vkb3duLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cbiAgICAgIHZhciAkc2VsZWN0ID0gJHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0MicpO1xuXG4gICAgICB2YXIgJGFsbCA9ICQoJy5zZWxlY3QyLnNlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG5cbiAgICAgICRhbGwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzID09ICRzZWxlY3RbMF0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJGVsZW1lbnQgPSBVdGlscy5HZXREYXRhKHRoaXMsICdlbGVtZW50Jyk7XG5cbiAgICAgICAgJGVsZW1lbnQuc2VsZWN0MignY2xvc2UnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLl9kZXRhY2hDbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgJChkb2N1bWVudC5ib2R5KS5vZmYoJ21vdXNlZG93bi5zZWxlY3QyLicgKyBjb250YWluZXIuaWQpO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCRzZWxlY3Rpb24sICRjb250YWluZXIpIHtcbiAgICB2YXIgJHNlbGVjdGlvbkNvbnRhaW5lciA9ICRjb250YWluZXIuZmluZCgnLnNlbGVjdGlvbicpO1xuICAgICRzZWxlY3Rpb25Db250YWluZXIuYXBwZW5kKCRzZWxlY3Rpb24pO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZGV0YWNoQ2xvc2VIYW5kbGVyKHRoaXMuY29udGFpbmVyKTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGB1cGRhdGVgIG1ldGhvZCBtdXN0IGJlIGRlZmluZWQgaW4gY2hpbGQgY2xhc3Nlcy4nKTtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJlbmFibGVkXCIgKG5vdCBcImRpc2FibGVkXCIpIHN0YXRlIG9mIHRoaXNcbiAgICogb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgaW5zdGFuY2UgaXMgbm90IGRpc2FibGVkLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGluc3RhbmNlIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuaXNFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0Rpc2FibGVkKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gYWJzdHJhY3QgdGhlIFwiZGlzYWJsZWRcIiBzdGF0ZSBvZiB0aGlzIG9iamVjdC5cbiAgICpcbiAgICogQHJldHVybiB7dHJ1ZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyB0cnVlLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyBmYWxzZS5cbiAgICovXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXQoJ2Rpc2FibGVkJyk7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VTZWxlY3Rpb247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9zaW5nbGUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL2Jhc2UnLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBCYXNlU2VsZWN0aW9uLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBTaW5nbGVTZWxlY3Rpb24gKCkge1xuICAgIFNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChTaW5nbGVTZWxlY3Rpb24sIEJhc2VTZWxlY3Rpb24pO1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkc2VsZWN0aW9uID0gU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5yZW5kZXIuY2FsbCh0aGlzKTtcblxuICAgICRzZWxlY3Rpb24uYWRkQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUnKTtcblxuICAgICRzZWxlY3Rpb24uaHRtbChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiPjwvc3Bhbj4nICtcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19hcnJvd1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj4nICtcbiAgICAgICAgJzxiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2I+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRzZWxlY3Rpb247XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIFNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uYmluZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1jb250YWluZXInO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKVxuICAgICAgLmF0dHIoJ2lkJywgaWQpXG4gICAgICAuYXR0cigncm9sZScsICd0ZXh0Ym94JylcbiAgICAgIC5hdHRyKCdhcmlhLXJlYWRvbmx5JywgJ3RydWUnKTtcbiAgICB0aGlzLiRzZWxlY3Rpb24uYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgaWQpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBPbmx5IHJlc3BvbmQgdG8gbGVmdCBjbGlja3NcbiAgICAgIGlmIChldnQud2hpY2ggIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRyaWdnZXIoJ3RvZ2dsZScsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBVc2VyIGZvY3VzZXMgb24gdGhlIGNvbnRhaW5lclxuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdibHVyJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gVXNlciBleGl0cyB0aGUgY29udGFpbmVyXG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKCFjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi4kc2VsZWN0aW9uLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcbiAgICAkcmVuZGVyZWQuZW1wdHkoKTtcbiAgICAkcmVuZGVyZWQucmVtb3ZlQXR0cigndGl0bGUnKTsgLy8gY2xlYXIgdG9vbHRpcCBvbiBlbXB0eVxuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuZGlzcGxheSA9IGZ1bmN0aW9uIChkYXRhLCBjb250YWluZXIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0ZW1wbGF0ZVNlbGVjdGlvbicpO1xuICAgIHZhciBlc2NhcGVNYXJrdXAgPSB0aGlzLm9wdGlvbnMuZ2V0KCdlc2NhcGVNYXJrdXAnKTtcblxuICAgIHJldHVybiBlc2NhcGVNYXJrdXAodGVtcGxhdGUoZGF0YSwgY29udGFpbmVyKSk7XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5zZWxlY3Rpb25Db250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICQoJzxzcGFuPjwvc3Bhbj4nKTtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNlbGVjdGlvbiA9IGRhdGFbMF07XG5cbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcbiAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy5kaXNwbGF5KHNlbGVjdGlvbiwgJHJlbmRlcmVkKTtcblxuICAgICRyZW5kZXJlZC5lbXB0eSgpLmFwcGVuZChmb3JtYXR0ZWQpO1xuXG4gICAgdmFyIHRpdGxlID0gc2VsZWN0aW9uLnRpdGxlIHx8IHNlbGVjdGlvbi50ZXh0O1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICAkcmVuZGVyZWQuYXR0cigndGl0bGUnLCB0aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2luZ2xlU2VsZWN0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vbXVsdGlwbGUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL2Jhc2UnLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgQmFzZVNlbGVjdGlvbiwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gTXVsdGlwbGVTZWxlY3Rpb24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoTXVsdGlwbGVTZWxlY3Rpb24sIEJhc2VTZWxlY3Rpb24pO1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSBNdWx0aXBsZVNlbGVjdGlvbi5fX3N1cGVyX18ucmVuZGVyLmNhbGwodGhpcyk7XG5cbiAgICAkc2VsZWN0aW9uLmFkZENsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUnKTtcblxuICAgICRzZWxlY3Rpb24uaHRtbChcbiAgICAgICc8dWwgY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIj48L3VsPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRzZWxlY3Rpb247XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ3RvZ2dsZScsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdjbGljaycsXG4gICAgICAnLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgaXQgaXMgZGlzYWJsZWRcbiAgICAgICAgaWYgKHNlbGYuaXNEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICRyZW1vdmUgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgJHNlbGVjdGlvbiA9ICRyZW1vdmUucGFyZW50KCk7XG5cbiAgICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRzZWxlY3Rpb25bMF0sICdkYXRhJyk7XG5cbiAgICAgICAgc2VsZi50cmlnZ2VyKCd1bnNlbGVjdCcsIHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcbiAgICAkcmVuZGVyZWQuZW1wdHkoKTtcbiAgICAkcmVuZGVyZWQucmVtb3ZlQXR0cigndGl0bGUnKTtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuZGlzcGxheSA9IGZ1bmN0aW9uIChkYXRhLCBjb250YWluZXIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0ZW1wbGF0ZVNlbGVjdGlvbicpO1xuICAgIHZhciBlc2NhcGVNYXJrdXAgPSB0aGlzLm9wdGlvbnMuZ2V0KCdlc2NhcGVNYXJrdXAnKTtcblxuICAgIHJldHVybiBlc2NhcGVNYXJrdXAodGVtcGxhdGUoZGF0YSwgY29udGFpbmVyKSk7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoXG4gICAgICAnPGxpIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZVwiPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmVcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+JyArXG4gICAgICAgICAgJyZ0aW1lczsnICtcbiAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICc8L2xpPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRzZWxlY3Rpb25zID0gW107XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSBkYXRhW2RdO1xuXG4gICAgICB2YXIgJHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uQ29udGFpbmVyKCk7XG4gICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy5kaXNwbGF5KHNlbGVjdGlvbiwgJHNlbGVjdGlvbik7XG5cbiAgICAgICRzZWxlY3Rpb24uYXBwZW5kKGZvcm1hdHRlZCk7XG5cbiAgICAgIHZhciB0aXRsZSA9IHNlbGVjdGlvbi50aXRsZSB8fCBzZWxlY3Rpb24udGV4dDtcblxuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICRzZWxlY3Rpb24uYXR0cigndGl0bGUnLCB0aXRsZSk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLlN0b3JlRGF0YSgkc2VsZWN0aW9uWzBdLCAnZGF0YScsIHNlbGVjdGlvbik7XG5cbiAgICAgICRzZWxlY3Rpb25zLnB1c2goJHNlbGVjdGlvbik7XG4gICAgfVxuXG4gICAgdmFyICRyZW5kZXJlZCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJyk7XG5cbiAgICBVdGlscy5hcHBlbmRNYW55KCRyZW5kZXJlZCwgJHNlbGVjdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBNdWx0aXBsZVNlbGVjdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL3BsYWNlaG9sZGVyJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBQbGFjZWhvbGRlciAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLm5vcm1hbGl6ZVBsYWNlaG9sZGVyKG9wdGlvbnMuZ2V0KCdwbGFjZWhvbGRlcicpKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFBsYWNlaG9sZGVyLnByb3RvdHlwZS5ub3JtYWxpemVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChfLCBwbGFjZWhvbGRlcikge1xuICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH07XG5cbiAgUGxhY2Vob2xkZXIucHJvdG90eXBlLmNyZWF0ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGxhY2Vob2xkZXIpIHtcbiAgICB2YXIgJHBsYWNlaG9sZGVyID0gdGhpcy5zZWxlY3Rpb25Db250YWluZXIoKTtcblxuICAgICRwbGFjZWhvbGRlci5odG1sKHRoaXMuZGlzcGxheShwbGFjZWhvbGRlcikpO1xuICAgICRwbGFjZWhvbGRlci5hZGRDbGFzcygnc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uX19jaG9pY2UnKTtcblxuICAgIHJldHVybiAkcGxhY2Vob2xkZXI7XG4gIH07XG5cbiAgUGxhY2Vob2xkZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICB2YXIgc2luZ2xlUGxhY2Vob2xkZXIgPSAoXG4gICAgICBkYXRhLmxlbmd0aCA9PSAxICYmIGRhdGFbMF0uaWQgIT0gdGhpcy5wbGFjZWhvbGRlci5pZFxuICAgICk7XG4gICAgdmFyIG11bHRpcGxlU2VsZWN0aW9ucyA9IGRhdGEubGVuZ3RoID4gMTtcblxuICAgIGlmIChtdWx0aXBsZVNlbGVjdGlvbnMgfHwgc2luZ2xlUGxhY2Vob2xkZXIpIHtcbiAgICAgIHJldHVybiBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB2YXIgJHBsYWNlaG9sZGVyID0gdGhpcy5jcmVhdGVQbGFjZWhvbGRlcih0aGlzLnBsYWNlaG9sZGVyKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykuYXBwZW5kKCRwbGFjZWhvbGRlcik7XG4gIH07XG5cbiAgcmV0dXJuIFBsYWNlaG9sZGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vYWxsb3dDbGVhcicsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL2tleXMnLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgS0VZUywgVXRpbHMpIHtcbiAgZnVuY3Rpb24gQWxsb3dDbGVhciAoKSB7IH1cblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnU2VsZWN0MjogVGhlIGBhbGxvd0NsZWFyYCBvcHRpb24gc2hvdWxkIGJlIHVzZWQgaW4gY29tYmluYXRpb24gJyArXG4gICAgICAgICAgJ3dpdGggdGhlIGBwbGFjZWhvbGRlcmAgb3B0aW9uLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ21vdXNlZG93bicsICcuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgc2VsZi5faGFuZGxlQ2xlYXIoZXZ0KTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9oYW5kbGVLZXlib2FyZENsZWFyKGV2dCwgY29udGFpbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS5faGFuZGxlQ2xlYXIgPSBmdW5jdGlvbiAoXywgZXZ0KSB7XG4gICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiBpdCBpcyBkaXNhYmxlZFxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkY2xlYXIgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhcicpO1xuXG4gICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiBub3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgaWYgKCRjbGVhci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJGNsZWFyWzBdLCAnZGF0YScpO1xuXG4gICAgdmFyIHByZXZpb3VzVmFsID0gdGhpcy4kZWxlbWVudC52YWwoKTtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh0aGlzLnBsYWNlaG9sZGVyLmlkKTtcblxuICAgIHZhciB1bnNlbGVjdERhdGEgPSB7XG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbiAgICB0aGlzLnRyaWdnZXIoJ2NsZWFyJywgdW5zZWxlY3REYXRhKTtcbiAgICBpZiAodW5zZWxlY3REYXRhLnByZXZlbnRlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC52YWwocHJldmlvdXNWYWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdW5zZWxlY3REYXRhID0ge1xuICAgICAgICBkYXRhOiBkYXRhW2RdXG4gICAgICB9O1xuXG4gICAgICAvLyBUcmlnZ2VyIHRoZSBgdW5zZWxlY3RgIGV2ZW50LCBzbyBwZW9wbGUgY2FuIHByZXZlbnQgaXQgZnJvbSBiZWluZ1xuICAgICAgLy8gY2xlYXJlZC5cbiAgICAgIHRoaXMudHJpZ2dlcigndW5zZWxlY3QnLCB1bnNlbGVjdERhdGEpO1xuXG4gICAgICAvLyBJZiB0aGUgZXZlbnQgd2FzIHByZXZlbnRlZCwgZG9uJ3QgY2xlYXIgaXQgb3V0LlxuICAgICAgaWYgKHVuc2VsZWN0RGF0YS5wcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC52YWwocHJldmlvdXNWYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgdGhpcy50cmlnZ2VyKCd0b2dnbGUnLCB7fSk7XG4gIH07XG5cbiAgQWxsb3dDbGVhci5wcm90b3R5cGUuX2hhbmRsZUtleWJvYXJkQ2xlYXIgPSBmdW5jdGlvbiAoXywgZXZ0LCBjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2dC53aGljaCA9PSBLRVlTLkRFTEVURSB8fCBldnQud2hpY2ggPT0gS0VZUy5CQUNLU1BBQ0UpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUNsZWFyKGV2dCk7XG4gICAgfVxuICB9O1xuXG4gIEFsbG93Q2xlYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgIGlmICh0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlcicpLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmVtb3ZlQWxsID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KCdyZW1vdmVBbGxJdGVtcycpO1xuXG4gICAgdmFyICRyZW1vdmUgPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyXCIgdGl0bGU9XCInICsgcmVtb3ZlQWxsKCkgKydcIj4nICtcbiAgICAgICAgJyZ0aW1lczsnICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG4gICAgVXRpbHMuU3RvcmVEYXRhKCRyZW1vdmVbMF0sICdkYXRhJywgZGF0YSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpLnByZXBlbmQoJHJlbW92ZSk7XG4gIH07XG5cbiAgcmV0dXJuIEFsbG93Q2xlYXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9zZWFyY2gnLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscycsXG4gICcuLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzLCBLRVlTKSB7XG4gIGZ1bmN0aW9uIFNlYXJjaCAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFNlYXJjaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHZhciAkc2VhcmNoID0gJChcbiAgICAgICc8bGkgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0taW5saW5lXCI+JyArXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCItMVwiJyArXG4gICAgICAgICcgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIicgK1xuICAgICAgICAnIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJzZWFyY2hib3hcIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiAvPicgK1xuICAgICAgJzwvbGk+J1xuICAgICk7XG5cbiAgICB0aGlzLiRzZWFyY2hDb250YWluZXIgPSAkc2VhcmNoO1xuICAgIHRoaXMuJHNlYXJjaCA9ICRzZWFyY2guZmluZCgnaW5wdXQnKTtcblxuICAgIHZhciAkcmVuZGVyZWQgPSBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuX3RyYW5zZmVyVGFiSW5kZXgoKTtcblxuICAgIHJldHVybiAkcmVuZGVyZWQ7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHJlc3VsdHNJZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ2FyaWEtY29udHJvbHMnLCByZXN1bHRzSWQpO1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnZhbCgnJyk7XG4gICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1jb250cm9scycpO1xuICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2VuYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgc2VsZi5fdHJhbnNmZXJUYWJJbmRleCgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBpZiAocGFyYW1zLmRhdGEuX3Jlc3VsdElkKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBwYXJhbXMuZGF0YS5fcmVzdWx0SWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1c2luJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdmb2N1cycsIGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3Vzb3V0JywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5faGFuZGxlQmx1cihldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdrZXlkb3duJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBzZWxmLnRyaWdnZXIoJ2tleXByZXNzJywgZXZ0KTtcblxuICAgICAgc2VsZi5fa2V5VXBQcmV2ZW50ZWQgPSBldnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG5cbiAgICAgIHZhciBrZXkgPSBldnQud2hpY2g7XG5cbiAgICAgIGlmIChrZXkgPT09IEtFWVMuQkFDS1NQQUNFICYmIHNlbGYuJHNlYXJjaC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgdmFyICRwcmV2aW91c0Nob2ljZSA9IHNlbGYuJHNlYXJjaENvbnRhaW5lclxuICAgICAgICAgIC5wcmV2KCcuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZScpO1xuXG4gICAgICAgIGlmICgkcHJldmlvdXNDaG9pY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBpdGVtID0gVXRpbHMuR2V0RGF0YSgkcHJldmlvdXNDaG9pY2VbMF0sICdkYXRhJyk7XG5cbiAgICAgICAgICBzZWxmLnNlYXJjaFJlbW92ZUNob2ljZShpdGVtKTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2NsaWNrJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKHNlbGYuJHNlYXJjaC52YWwoKSkge1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUcnkgdG8gZGV0ZWN0IHRoZSBJRSB2ZXJzaW9uIHNob3VsZCB0aGUgYGRvY3VtZW50TW9kZWAgcHJvcGVydHkgdGhhdFxuICAgIC8vIGlzIHN0b3JlZCBvbiB0aGUgZG9jdW1lbnQuIFRoaXMgaXMgb25seSBpbXBsZW1lbnRlZCBpbiBJRSBhbmQgaXNcbiAgICAvLyBzbGlnaHRseSBjbGVhbmVyIHRoYW4gZG9pbmcgYSB1c2VyIGFnZW50IGNoZWNrLlxuICAgIC8vIFRoaXMgcHJvcGVydHkgaXMgbm90IGF2YWlsYWJsZSBpbiBFZGdlLCBidXQgRWRnZSBhbHNvIGRvZXNuJ3QgaGF2ZVxuICAgIC8vIHRoaXMgYnVnLlxuICAgIHZhciBtc2llID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICAgIHZhciBkaXNhYmxlSW5wdXRFdmVudHMgPSBtc2llICYmIG1zaWUgPD0gMTE7XG5cbiAgICAvLyBXb3JrYXJvdW5kIGZvciBicm93c2VycyB3aGljaCBkbyBub3Qgc3VwcG9ydCB0aGUgYGlucHV0YCBldmVudFxuICAgIC8vIFRoaXMgd2lsbCBwcmV2ZW50IGRvdWJsZS10cmlnZ2VyaW5nIG9mIGV2ZW50cyBmb3IgYnJvd3NlcnMgd2hpY2ggc3VwcG9ydFxuICAgIC8vIGJvdGggdGhlIGBrZXl1cGAgYW5kIGBpbnB1dGAgZXZlbnRzLlxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdpbnB1dC5zZWFyY2hjaGVjaycsXG4gICAgICAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyBJRSB3aWxsIHRyaWdnZXIgdGhlIGBpbnB1dGAgZXZlbnQgd2hlbiBhIHBsYWNlaG9sZGVyIGlzIHVzZWQgb24gYVxuICAgICAgICAvLyBzZWFyY2ggYm94LiBUbyBnZXQgYXJvdW5kIHRoaXMgaXNzdWUsIHdlIGFyZSBmb3JjZWQgdG8gaWdub3JlIGFsbFxuICAgICAgICAvLyBgaW5wdXRgIGV2ZW50cyBpbiBJRSBhbmQga2VlcCB1c2luZyBga2V5dXBgLlxuICAgICAgICBpZiAoZGlzYWJsZUlucHV0RXZlbnRzKSB7XG4gICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLm9mZignaW5wdXQuc2VhcmNoIGlucHV0LnNlYXJjaGNoZWNrJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5iaW5kIHRoZSBkdXBsaWNhdGVkIGBrZXl1cGAgZXZlbnRcbiAgICAgICAgc2VsZi4kc2VsZWN0aW9uLm9mZigna2V5dXAuc2VhcmNoJyk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdrZXl1cC5zZWFyY2ggaW5wdXQuc2VhcmNoJyxcbiAgICAgICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElFIHdpbGwgdHJpZ2dlciB0aGUgYGlucHV0YCBldmVudCB3aGVuIGEgcGxhY2Vob2xkZXIgaXMgdXNlZCBvbiBhXG4gICAgICAgIC8vIHNlYXJjaCBib3guIFRvIGdldCBhcm91bmQgdGhpcyBpc3N1ZSwgd2UgYXJlIGZvcmNlZCB0byBpZ25vcmUgYWxsXG4gICAgICAgIC8vIGBpbnB1dGAgZXZlbnRzIGluIElFIGFuZCBrZWVwIHVzaW5nIGBrZXl1cGAuXG4gICAgICAgIGlmIChkaXNhYmxlSW5wdXRFdmVudHMgJiYgZXZ0LnR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24ub2ZmKCdpbnB1dC5zZWFyY2ggaW5wdXQuc2VhcmNoY2hlY2snKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5ID0gZXZ0LndoaWNoO1xuXG4gICAgICAgIC8vIFdlIGNhbiBmcmVlbHkgaWdub3JlIGV2ZW50cyBmcm9tIG1vZGlmaWVyIGtleXNcbiAgICAgICAgaWYgKGtleSA9PSBLRVlTLlNISUZUIHx8IGtleSA9PSBLRVlTLkNUUkwgfHwga2V5ID09IEtFWVMuQUxUKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiYmluZyB3aWxsIGJlIGhhbmRsZWQgZHVyaW5nIHRoZSBga2V5ZG93bmAgcGhhc2VcbiAgICAgICAgaWYgKGtleSA9PSBLRVlTLlRBQikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaGFuZGxlU2VhcmNoKGV2dCk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCB0cmFuc2ZlciB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gdGhlIHJlbmRlcmVkXG4gICAqIHNlbGVjdGlvbiB0byB0aGUgc2VhcmNoIGJveC4gVGhpcyBhbGxvd3MgZm9yIHRoZSBzZWFyY2ggYm94IHRvIGJlIHVzZWQgYXNcbiAgICogdGhlIHByaW1hcnkgZm9jdXMgaW5zdGVhZCBvZiB0aGUgc2VsZWN0aW9uIGNvbnRhaW5lci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFNlYXJjaC5wcm90b3R5cGUuX3RyYW5zZmVyVGFiSW5kZXggPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdGhpcy4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgdGhpcy4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JykpO1xuICAgIHRoaXMuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuY3JlYXRlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwbGFjZWhvbGRlcikge1xuICAgIHRoaXMuJHNlYXJjaC5hdHRyKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyLnRleHQpO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIHZhciBzZWFyY2hIYWRGb2N1cyA9IHRoaXMuJHNlYXJjaFswXSA9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgdGhpcy4kc2VhcmNoLmF0dHIoJ3BsYWNlaG9sZGVyJywgJycpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpXG4gICAgICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLiRzZWFyY2hDb250YWluZXIpO1xuXG4gICAgdGhpcy5yZXNpemVTZWFyY2goKTtcbiAgICBpZiAoc2VhcmNoSGFkRm9jdXMpIHtcbiAgICAgIHRoaXMuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgIH1cbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmhhbmRsZVNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc2l6ZVNlYXJjaCgpO1xuXG4gICAgaWYgKCF0aGlzLl9rZXlVcFByZXZlbnRlZCkge1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy4kc2VhcmNoLnZhbCgpO1xuXG4gICAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5Jywge1xuICAgICAgICB0ZXJtOiBpbnB1dFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fa2V5VXBQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnNlYXJjaFJlbW92ZUNob2ljZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGl0ZW0pIHtcbiAgICB0aGlzLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgZGF0YTogaXRlbVxuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VhcmNoLnZhbChpdGVtLnRleHQpO1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoKCk7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5yZXNpemVTZWFyY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kc2VhcmNoLmNzcygnd2lkdGgnLCAnMjVweCcpO1xuXG4gICAgdmFyIHdpZHRoID0gJyc7XG5cbiAgICBpZiAodGhpcy4kc2VhcmNoLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09ICcnKSB7XG4gICAgICB3aWR0aCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykud2lkdGgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1pbmltdW1XaWR0aCA9IHRoaXMuJHNlYXJjaC52YWwoKS5sZW5ndGggKyAxO1xuXG4gICAgICB3aWR0aCA9IChtaW5pbXVtV2lkdGggKiAwLjc1KSArICdlbSc7XG4gICAgfVxuXG4gICAgdGhpcy4kc2VhcmNoLmNzcygnd2lkdGgnLCB3aWR0aCk7XG4gIH07XG5cbiAgcmV0dXJuIFNlYXJjaDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL2V2ZW50UmVsYXknLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIEV2ZW50UmVsYXkgKCkgeyB9XG5cbiAgRXZlbnRSZWxheS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcmVsYXlFdmVudHMgPSBbXG4gICAgICAnb3BlbicsICdvcGVuaW5nJyxcbiAgICAgICdjbG9zZScsICdjbG9zaW5nJyxcbiAgICAgICdzZWxlY3QnLCAnc2VsZWN0aW5nJyxcbiAgICAgICd1bnNlbGVjdCcsICd1bnNlbGVjdGluZycsXG4gICAgICAnY2xlYXInLCAnY2xlYXJpbmcnXG4gICAgXTtcblxuICAgIHZhciBwcmV2ZW50YWJsZUV2ZW50cyA9IFtcbiAgICAgICdvcGVuaW5nJywgJ2Nsb3NpbmcnLCAnc2VsZWN0aW5nJywgJ3Vuc2VsZWN0aW5nJywgJ2NsZWFyaW5nJ1xuICAgIF07XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgLy8gSWdub3JlIGV2ZW50cyB0aGF0IHNob3VsZCBub3QgYmUgcmVsYXllZFxuICAgICAgaWYgKCQuaW5BcnJheShuYW1lLCByZWxheUV2ZW50cykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHBhcmFtZXRlcnMgc2hvdWxkIGFsd2F5cyBiZSBhbiBvYmplY3RcbiAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgICAgLy8gR2VuZXJhdGUgdGhlIGpRdWVyeSBldmVudCBmb3IgdGhlIFNlbGVjdDIgZXZlbnRcbiAgICAgIHZhciBldnQgPSAkLkV2ZW50KCdzZWxlY3QyOicgKyBuYW1lLCB7XG4gICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICB9KTtcblxuICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKGV2dCk7XG5cbiAgICAgIC8vIE9ubHkgaGFuZGxlIHByZXZlbnRhYmxlIGV2ZW50cyBpZiBpdCB3YXMgb25lXG4gICAgICBpZiAoJC5pbkFycmF5KG5hbWUsIHByZXZlbnRhYmxlRXZlbnRzKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwYXJhbXMucHJldmVudGVkID0gZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBFdmVudFJlbGF5O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi90cmFuc2xhdGlvbicsW1xuICAnanF1ZXJ5JyxcbiAgJ3JlcXVpcmUnXG5dLCBmdW5jdGlvbiAoJCwgcmVxdWlyZSkge1xuICBmdW5jdGlvbiBUcmFuc2xhdGlvbiAoZGljdCkge1xuICAgIHRoaXMuZGljdCA9IGRpY3QgfHwge307XG4gIH1cblxuICBUcmFuc2xhdGlvbi5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRpY3Q7XG4gIH07XG5cbiAgVHJhbnNsYXRpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5kaWN0W2tleV07XG4gIH07XG5cbiAgVHJhbnNsYXRpb24ucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uICh0cmFuc2xhdGlvbikge1xuICAgIHRoaXMuZGljdCA9ICQuZXh0ZW5kKHt9LCB0cmFuc2xhdGlvbi5hbGwoKSwgdGhpcy5kaWN0KTtcbiAgfTtcblxuICAvLyBTdGF0aWMgZnVuY3Rpb25zXG5cbiAgVHJhbnNsYXRpb24uX2NhY2hlID0ge307XG5cbiAgVHJhbnNsYXRpb24ubG9hZFBhdGggPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIGlmICghKHBhdGggaW4gVHJhbnNsYXRpb24uX2NhY2hlKSkge1xuICAgICAgdmFyIHRyYW5zbGF0aW9ucyA9IHJlcXVpcmUocGF0aCk7XG5cbiAgICAgIFRyYW5zbGF0aW9uLl9jYWNoZVtwYXRoXSA9IHRyYW5zbGF0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uKFRyYW5zbGF0aW9uLl9jYWNoZVtwYXRoXSk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zbGF0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kaWFjcml0aWNzJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRpYWNyaXRpY3MgPSB7XG4gICAgJ1xcdTI0QjYnOiAnQScsXG4gICAgJ1xcdUZGMjEnOiAnQScsXG4gICAgJ1xcdTAwQzAnOiAnQScsXG4gICAgJ1xcdTAwQzEnOiAnQScsXG4gICAgJ1xcdTAwQzInOiAnQScsXG4gICAgJ1xcdTFFQTYnOiAnQScsXG4gICAgJ1xcdTFFQTQnOiAnQScsXG4gICAgJ1xcdTFFQUEnOiAnQScsXG4gICAgJ1xcdTFFQTgnOiAnQScsXG4gICAgJ1xcdTAwQzMnOiAnQScsXG4gICAgJ1xcdTAxMDAnOiAnQScsXG4gICAgJ1xcdTAxMDInOiAnQScsXG4gICAgJ1xcdTFFQjAnOiAnQScsXG4gICAgJ1xcdTFFQUUnOiAnQScsXG4gICAgJ1xcdTFFQjQnOiAnQScsXG4gICAgJ1xcdTFFQjInOiAnQScsXG4gICAgJ1xcdTAyMjYnOiAnQScsXG4gICAgJ1xcdTAxRTAnOiAnQScsXG4gICAgJ1xcdTAwQzQnOiAnQScsXG4gICAgJ1xcdTAxREUnOiAnQScsXG4gICAgJ1xcdTFFQTInOiAnQScsXG4gICAgJ1xcdTAwQzUnOiAnQScsXG4gICAgJ1xcdTAxRkEnOiAnQScsXG4gICAgJ1xcdTAxQ0QnOiAnQScsXG4gICAgJ1xcdTAyMDAnOiAnQScsXG4gICAgJ1xcdTAyMDInOiAnQScsXG4gICAgJ1xcdTFFQTAnOiAnQScsXG4gICAgJ1xcdTFFQUMnOiAnQScsXG4gICAgJ1xcdTFFQjYnOiAnQScsXG4gICAgJ1xcdTFFMDAnOiAnQScsXG4gICAgJ1xcdTAxMDQnOiAnQScsXG4gICAgJ1xcdTAyM0EnOiAnQScsXG4gICAgJ1xcdTJDNkYnOiAnQScsXG4gICAgJ1xcdUE3MzInOiAnQUEnLFxuICAgICdcXHUwMEM2JzogJ0FFJyxcbiAgICAnXFx1MDFGQyc6ICdBRScsXG4gICAgJ1xcdTAxRTInOiAnQUUnLFxuICAgICdcXHVBNzM0JzogJ0FPJyxcbiAgICAnXFx1QTczNic6ICdBVScsXG4gICAgJ1xcdUE3MzgnOiAnQVYnLFxuICAgICdcXHVBNzNBJzogJ0FWJyxcbiAgICAnXFx1QTczQyc6ICdBWScsXG4gICAgJ1xcdTI0QjcnOiAnQicsXG4gICAgJ1xcdUZGMjInOiAnQicsXG4gICAgJ1xcdTFFMDInOiAnQicsXG4gICAgJ1xcdTFFMDQnOiAnQicsXG4gICAgJ1xcdTFFMDYnOiAnQicsXG4gICAgJ1xcdTAyNDMnOiAnQicsXG4gICAgJ1xcdTAxODInOiAnQicsXG4gICAgJ1xcdTAxODEnOiAnQicsXG4gICAgJ1xcdTI0QjgnOiAnQycsXG4gICAgJ1xcdUZGMjMnOiAnQycsXG4gICAgJ1xcdTAxMDYnOiAnQycsXG4gICAgJ1xcdTAxMDgnOiAnQycsXG4gICAgJ1xcdTAxMEEnOiAnQycsXG4gICAgJ1xcdTAxMEMnOiAnQycsXG4gICAgJ1xcdTAwQzcnOiAnQycsXG4gICAgJ1xcdTFFMDgnOiAnQycsXG4gICAgJ1xcdTAxODcnOiAnQycsXG4gICAgJ1xcdTAyM0InOiAnQycsXG4gICAgJ1xcdUE3M0UnOiAnQycsXG4gICAgJ1xcdTI0QjknOiAnRCcsXG4gICAgJ1xcdUZGMjQnOiAnRCcsXG4gICAgJ1xcdTFFMEEnOiAnRCcsXG4gICAgJ1xcdTAxMEUnOiAnRCcsXG4gICAgJ1xcdTFFMEMnOiAnRCcsXG4gICAgJ1xcdTFFMTAnOiAnRCcsXG4gICAgJ1xcdTFFMTInOiAnRCcsXG4gICAgJ1xcdTFFMEUnOiAnRCcsXG4gICAgJ1xcdTAxMTAnOiAnRCcsXG4gICAgJ1xcdTAxOEInOiAnRCcsXG4gICAgJ1xcdTAxOEEnOiAnRCcsXG4gICAgJ1xcdTAxODknOiAnRCcsXG4gICAgJ1xcdUE3NzknOiAnRCcsXG4gICAgJ1xcdTAxRjEnOiAnRFonLFxuICAgICdcXHUwMUM0JzogJ0RaJyxcbiAgICAnXFx1MDFGMic6ICdEeicsXG4gICAgJ1xcdTAxQzUnOiAnRHonLFxuICAgICdcXHUyNEJBJzogJ0UnLFxuICAgICdcXHVGRjI1JzogJ0UnLFxuICAgICdcXHUwMEM4JzogJ0UnLFxuICAgICdcXHUwMEM5JzogJ0UnLFxuICAgICdcXHUwMENBJzogJ0UnLFxuICAgICdcXHUxRUMwJzogJ0UnLFxuICAgICdcXHUxRUJFJzogJ0UnLFxuICAgICdcXHUxRUM0JzogJ0UnLFxuICAgICdcXHUxRUMyJzogJ0UnLFxuICAgICdcXHUxRUJDJzogJ0UnLFxuICAgICdcXHUwMTEyJzogJ0UnLFxuICAgICdcXHUxRTE0JzogJ0UnLFxuICAgICdcXHUxRTE2JzogJ0UnLFxuICAgICdcXHUwMTE0JzogJ0UnLFxuICAgICdcXHUwMTE2JzogJ0UnLFxuICAgICdcXHUwMENCJzogJ0UnLFxuICAgICdcXHUxRUJBJzogJ0UnLFxuICAgICdcXHUwMTFBJzogJ0UnLFxuICAgICdcXHUwMjA0JzogJ0UnLFxuICAgICdcXHUwMjA2JzogJ0UnLFxuICAgICdcXHUxRUI4JzogJ0UnLFxuICAgICdcXHUxRUM2JzogJ0UnLFxuICAgICdcXHUwMjI4JzogJ0UnLFxuICAgICdcXHUxRTFDJzogJ0UnLFxuICAgICdcXHUwMTE4JzogJ0UnLFxuICAgICdcXHUxRTE4JzogJ0UnLFxuICAgICdcXHUxRTFBJzogJ0UnLFxuICAgICdcXHUwMTkwJzogJ0UnLFxuICAgICdcXHUwMThFJzogJ0UnLFxuICAgICdcXHUyNEJCJzogJ0YnLFxuICAgICdcXHVGRjI2JzogJ0YnLFxuICAgICdcXHUxRTFFJzogJ0YnLFxuICAgICdcXHUwMTkxJzogJ0YnLFxuICAgICdcXHVBNzdCJzogJ0YnLFxuICAgICdcXHUyNEJDJzogJ0cnLFxuICAgICdcXHVGRjI3JzogJ0cnLFxuICAgICdcXHUwMUY0JzogJ0cnLFxuICAgICdcXHUwMTFDJzogJ0cnLFxuICAgICdcXHUxRTIwJzogJ0cnLFxuICAgICdcXHUwMTFFJzogJ0cnLFxuICAgICdcXHUwMTIwJzogJ0cnLFxuICAgICdcXHUwMUU2JzogJ0cnLFxuICAgICdcXHUwMTIyJzogJ0cnLFxuICAgICdcXHUwMUU0JzogJ0cnLFxuICAgICdcXHUwMTkzJzogJ0cnLFxuICAgICdcXHVBN0EwJzogJ0cnLFxuICAgICdcXHVBNzdEJzogJ0cnLFxuICAgICdcXHVBNzdFJzogJ0cnLFxuICAgICdcXHUyNEJEJzogJ0gnLFxuICAgICdcXHVGRjI4JzogJ0gnLFxuICAgICdcXHUwMTI0JzogJ0gnLFxuICAgICdcXHUxRTIyJzogJ0gnLFxuICAgICdcXHUxRTI2JzogJ0gnLFxuICAgICdcXHUwMjFFJzogJ0gnLFxuICAgICdcXHUxRTI0JzogJ0gnLFxuICAgICdcXHUxRTI4JzogJ0gnLFxuICAgICdcXHUxRTJBJzogJ0gnLFxuICAgICdcXHUwMTI2JzogJ0gnLFxuICAgICdcXHUyQzY3JzogJ0gnLFxuICAgICdcXHUyQzc1JzogJ0gnLFxuICAgICdcXHVBNzhEJzogJ0gnLFxuICAgICdcXHUyNEJFJzogJ0knLFxuICAgICdcXHVGRjI5JzogJ0knLFxuICAgICdcXHUwMENDJzogJ0knLFxuICAgICdcXHUwMENEJzogJ0knLFxuICAgICdcXHUwMENFJzogJ0knLFxuICAgICdcXHUwMTI4JzogJ0knLFxuICAgICdcXHUwMTJBJzogJ0knLFxuICAgICdcXHUwMTJDJzogJ0knLFxuICAgICdcXHUwMTMwJzogJ0knLFxuICAgICdcXHUwMENGJzogJ0knLFxuICAgICdcXHUxRTJFJzogJ0knLFxuICAgICdcXHUxRUM4JzogJ0knLFxuICAgICdcXHUwMUNGJzogJ0knLFxuICAgICdcXHUwMjA4JzogJ0knLFxuICAgICdcXHUwMjBBJzogJ0knLFxuICAgICdcXHUxRUNBJzogJ0knLFxuICAgICdcXHUwMTJFJzogJ0knLFxuICAgICdcXHUxRTJDJzogJ0knLFxuICAgICdcXHUwMTk3JzogJ0knLFxuICAgICdcXHUyNEJGJzogJ0onLFxuICAgICdcXHVGRjJBJzogJ0onLFxuICAgICdcXHUwMTM0JzogJ0onLFxuICAgICdcXHUwMjQ4JzogJ0onLFxuICAgICdcXHUyNEMwJzogJ0snLFxuICAgICdcXHVGRjJCJzogJ0snLFxuICAgICdcXHUxRTMwJzogJ0snLFxuICAgICdcXHUwMUU4JzogJ0snLFxuICAgICdcXHUxRTMyJzogJ0snLFxuICAgICdcXHUwMTM2JzogJ0snLFxuICAgICdcXHUxRTM0JzogJ0snLFxuICAgICdcXHUwMTk4JzogJ0snLFxuICAgICdcXHUyQzY5JzogJ0snLFxuICAgICdcXHVBNzQwJzogJ0snLFxuICAgICdcXHVBNzQyJzogJ0snLFxuICAgICdcXHVBNzQ0JzogJ0snLFxuICAgICdcXHVBN0EyJzogJ0snLFxuICAgICdcXHUyNEMxJzogJ0wnLFxuICAgICdcXHVGRjJDJzogJ0wnLFxuICAgICdcXHUwMTNGJzogJ0wnLFxuICAgICdcXHUwMTM5JzogJ0wnLFxuICAgICdcXHUwMTNEJzogJ0wnLFxuICAgICdcXHUxRTM2JzogJ0wnLFxuICAgICdcXHUxRTM4JzogJ0wnLFxuICAgICdcXHUwMTNCJzogJ0wnLFxuICAgICdcXHUxRTNDJzogJ0wnLFxuICAgICdcXHUxRTNBJzogJ0wnLFxuICAgICdcXHUwMTQxJzogJ0wnLFxuICAgICdcXHUwMjNEJzogJ0wnLFxuICAgICdcXHUyQzYyJzogJ0wnLFxuICAgICdcXHUyQzYwJzogJ0wnLFxuICAgICdcXHVBNzQ4JzogJ0wnLFxuICAgICdcXHVBNzQ2JzogJ0wnLFxuICAgICdcXHVBNzgwJzogJ0wnLFxuICAgICdcXHUwMUM3JzogJ0xKJyxcbiAgICAnXFx1MDFDOCc6ICdMaicsXG4gICAgJ1xcdTI0QzInOiAnTScsXG4gICAgJ1xcdUZGMkQnOiAnTScsXG4gICAgJ1xcdTFFM0UnOiAnTScsXG4gICAgJ1xcdTFFNDAnOiAnTScsXG4gICAgJ1xcdTFFNDInOiAnTScsXG4gICAgJ1xcdTJDNkUnOiAnTScsXG4gICAgJ1xcdTAxOUMnOiAnTScsXG4gICAgJ1xcdTI0QzMnOiAnTicsXG4gICAgJ1xcdUZGMkUnOiAnTicsXG4gICAgJ1xcdTAxRjgnOiAnTicsXG4gICAgJ1xcdTAxNDMnOiAnTicsXG4gICAgJ1xcdTAwRDEnOiAnTicsXG4gICAgJ1xcdTFFNDQnOiAnTicsXG4gICAgJ1xcdTAxNDcnOiAnTicsXG4gICAgJ1xcdTFFNDYnOiAnTicsXG4gICAgJ1xcdTAxNDUnOiAnTicsXG4gICAgJ1xcdTFFNEEnOiAnTicsXG4gICAgJ1xcdTFFNDgnOiAnTicsXG4gICAgJ1xcdTAyMjAnOiAnTicsXG4gICAgJ1xcdTAxOUQnOiAnTicsXG4gICAgJ1xcdUE3OTAnOiAnTicsXG4gICAgJ1xcdUE3QTQnOiAnTicsXG4gICAgJ1xcdTAxQ0EnOiAnTkonLFxuICAgICdcXHUwMUNCJzogJ05qJyxcbiAgICAnXFx1MjRDNCc6ICdPJyxcbiAgICAnXFx1RkYyRic6ICdPJyxcbiAgICAnXFx1MDBEMic6ICdPJyxcbiAgICAnXFx1MDBEMyc6ICdPJyxcbiAgICAnXFx1MDBENCc6ICdPJyxcbiAgICAnXFx1MUVEMic6ICdPJyxcbiAgICAnXFx1MUVEMCc6ICdPJyxcbiAgICAnXFx1MUVENic6ICdPJyxcbiAgICAnXFx1MUVENCc6ICdPJyxcbiAgICAnXFx1MDBENSc6ICdPJyxcbiAgICAnXFx1MUU0Qyc6ICdPJyxcbiAgICAnXFx1MDIyQyc6ICdPJyxcbiAgICAnXFx1MUU0RSc6ICdPJyxcbiAgICAnXFx1MDE0Qyc6ICdPJyxcbiAgICAnXFx1MUU1MCc6ICdPJyxcbiAgICAnXFx1MUU1Mic6ICdPJyxcbiAgICAnXFx1MDE0RSc6ICdPJyxcbiAgICAnXFx1MDIyRSc6ICdPJyxcbiAgICAnXFx1MDIzMCc6ICdPJyxcbiAgICAnXFx1MDBENic6ICdPJyxcbiAgICAnXFx1MDIyQSc6ICdPJyxcbiAgICAnXFx1MUVDRSc6ICdPJyxcbiAgICAnXFx1MDE1MCc6ICdPJyxcbiAgICAnXFx1MDFEMSc6ICdPJyxcbiAgICAnXFx1MDIwQyc6ICdPJyxcbiAgICAnXFx1MDIwRSc6ICdPJyxcbiAgICAnXFx1MDFBMCc6ICdPJyxcbiAgICAnXFx1MUVEQyc6ICdPJyxcbiAgICAnXFx1MUVEQSc6ICdPJyxcbiAgICAnXFx1MUVFMCc6ICdPJyxcbiAgICAnXFx1MUVERSc6ICdPJyxcbiAgICAnXFx1MUVFMic6ICdPJyxcbiAgICAnXFx1MUVDQyc6ICdPJyxcbiAgICAnXFx1MUVEOCc6ICdPJyxcbiAgICAnXFx1MDFFQSc6ICdPJyxcbiAgICAnXFx1MDFFQyc6ICdPJyxcbiAgICAnXFx1MDBEOCc6ICdPJyxcbiAgICAnXFx1MDFGRSc6ICdPJyxcbiAgICAnXFx1MDE4Nic6ICdPJyxcbiAgICAnXFx1MDE5Ric6ICdPJyxcbiAgICAnXFx1QTc0QSc6ICdPJyxcbiAgICAnXFx1QTc0Qyc6ICdPJyxcbiAgICAnXFx1MDE1Mic6ICdPRScsXG4gICAgJ1xcdTAxQTInOiAnT0knLFxuICAgICdcXHVBNzRFJzogJ09PJyxcbiAgICAnXFx1MDIyMic6ICdPVScsXG4gICAgJ1xcdTI0QzUnOiAnUCcsXG4gICAgJ1xcdUZGMzAnOiAnUCcsXG4gICAgJ1xcdTFFNTQnOiAnUCcsXG4gICAgJ1xcdTFFNTYnOiAnUCcsXG4gICAgJ1xcdTAxQTQnOiAnUCcsXG4gICAgJ1xcdTJDNjMnOiAnUCcsXG4gICAgJ1xcdUE3NTAnOiAnUCcsXG4gICAgJ1xcdUE3NTInOiAnUCcsXG4gICAgJ1xcdUE3NTQnOiAnUCcsXG4gICAgJ1xcdTI0QzYnOiAnUScsXG4gICAgJ1xcdUZGMzEnOiAnUScsXG4gICAgJ1xcdUE3NTYnOiAnUScsXG4gICAgJ1xcdUE3NTgnOiAnUScsXG4gICAgJ1xcdTAyNEEnOiAnUScsXG4gICAgJ1xcdTI0QzcnOiAnUicsXG4gICAgJ1xcdUZGMzInOiAnUicsXG4gICAgJ1xcdTAxNTQnOiAnUicsXG4gICAgJ1xcdTFFNTgnOiAnUicsXG4gICAgJ1xcdTAxNTgnOiAnUicsXG4gICAgJ1xcdTAyMTAnOiAnUicsXG4gICAgJ1xcdTAyMTInOiAnUicsXG4gICAgJ1xcdTFFNUEnOiAnUicsXG4gICAgJ1xcdTFFNUMnOiAnUicsXG4gICAgJ1xcdTAxNTYnOiAnUicsXG4gICAgJ1xcdTFFNUUnOiAnUicsXG4gICAgJ1xcdTAyNEMnOiAnUicsXG4gICAgJ1xcdTJDNjQnOiAnUicsXG4gICAgJ1xcdUE3NUEnOiAnUicsXG4gICAgJ1xcdUE3QTYnOiAnUicsXG4gICAgJ1xcdUE3ODInOiAnUicsXG4gICAgJ1xcdTI0QzgnOiAnUycsXG4gICAgJ1xcdUZGMzMnOiAnUycsXG4gICAgJ1xcdTFFOUUnOiAnUycsXG4gICAgJ1xcdTAxNUEnOiAnUycsXG4gICAgJ1xcdTFFNjQnOiAnUycsXG4gICAgJ1xcdTAxNUMnOiAnUycsXG4gICAgJ1xcdTFFNjAnOiAnUycsXG4gICAgJ1xcdTAxNjAnOiAnUycsXG4gICAgJ1xcdTFFNjYnOiAnUycsXG4gICAgJ1xcdTFFNjInOiAnUycsXG4gICAgJ1xcdTFFNjgnOiAnUycsXG4gICAgJ1xcdTAyMTgnOiAnUycsXG4gICAgJ1xcdTAxNUUnOiAnUycsXG4gICAgJ1xcdTJDN0UnOiAnUycsXG4gICAgJ1xcdUE3QTgnOiAnUycsXG4gICAgJ1xcdUE3ODQnOiAnUycsXG4gICAgJ1xcdTI0QzknOiAnVCcsXG4gICAgJ1xcdUZGMzQnOiAnVCcsXG4gICAgJ1xcdTFFNkEnOiAnVCcsXG4gICAgJ1xcdTAxNjQnOiAnVCcsXG4gICAgJ1xcdTFFNkMnOiAnVCcsXG4gICAgJ1xcdTAyMUEnOiAnVCcsXG4gICAgJ1xcdTAxNjInOiAnVCcsXG4gICAgJ1xcdTFFNzAnOiAnVCcsXG4gICAgJ1xcdTFFNkUnOiAnVCcsXG4gICAgJ1xcdTAxNjYnOiAnVCcsXG4gICAgJ1xcdTAxQUMnOiAnVCcsXG4gICAgJ1xcdTAxQUUnOiAnVCcsXG4gICAgJ1xcdTAyM0UnOiAnVCcsXG4gICAgJ1xcdUE3ODYnOiAnVCcsXG4gICAgJ1xcdUE3MjgnOiAnVFonLFxuICAgICdcXHUyNENBJzogJ1UnLFxuICAgICdcXHVGRjM1JzogJ1UnLFxuICAgICdcXHUwMEQ5JzogJ1UnLFxuICAgICdcXHUwMERBJzogJ1UnLFxuICAgICdcXHUwMERCJzogJ1UnLFxuICAgICdcXHUwMTY4JzogJ1UnLFxuICAgICdcXHUxRTc4JzogJ1UnLFxuICAgICdcXHUwMTZBJzogJ1UnLFxuICAgICdcXHUxRTdBJzogJ1UnLFxuICAgICdcXHUwMTZDJzogJ1UnLFxuICAgICdcXHUwMERDJzogJ1UnLFxuICAgICdcXHUwMURCJzogJ1UnLFxuICAgICdcXHUwMUQ3JzogJ1UnLFxuICAgICdcXHUwMUQ1JzogJ1UnLFxuICAgICdcXHUwMUQ5JzogJ1UnLFxuICAgICdcXHUxRUU2JzogJ1UnLFxuICAgICdcXHUwMTZFJzogJ1UnLFxuICAgICdcXHUwMTcwJzogJ1UnLFxuICAgICdcXHUwMUQzJzogJ1UnLFxuICAgICdcXHUwMjE0JzogJ1UnLFxuICAgICdcXHUwMjE2JzogJ1UnLFxuICAgICdcXHUwMUFGJzogJ1UnLFxuICAgICdcXHUxRUVBJzogJ1UnLFxuICAgICdcXHUxRUU4JzogJ1UnLFxuICAgICdcXHUxRUVFJzogJ1UnLFxuICAgICdcXHUxRUVDJzogJ1UnLFxuICAgICdcXHUxRUYwJzogJ1UnLFxuICAgICdcXHUxRUU0JzogJ1UnLFxuICAgICdcXHUxRTcyJzogJ1UnLFxuICAgICdcXHUwMTcyJzogJ1UnLFxuICAgICdcXHUxRTc2JzogJ1UnLFxuICAgICdcXHUxRTc0JzogJ1UnLFxuICAgICdcXHUwMjQ0JzogJ1UnLFxuICAgICdcXHUyNENCJzogJ1YnLFxuICAgICdcXHVGRjM2JzogJ1YnLFxuICAgICdcXHUxRTdDJzogJ1YnLFxuICAgICdcXHUxRTdFJzogJ1YnLFxuICAgICdcXHUwMUIyJzogJ1YnLFxuICAgICdcXHVBNzVFJzogJ1YnLFxuICAgICdcXHUwMjQ1JzogJ1YnLFxuICAgICdcXHVBNzYwJzogJ1ZZJyxcbiAgICAnXFx1MjRDQyc6ICdXJyxcbiAgICAnXFx1RkYzNyc6ICdXJyxcbiAgICAnXFx1MUU4MCc6ICdXJyxcbiAgICAnXFx1MUU4Mic6ICdXJyxcbiAgICAnXFx1MDE3NCc6ICdXJyxcbiAgICAnXFx1MUU4Nic6ICdXJyxcbiAgICAnXFx1MUU4NCc6ICdXJyxcbiAgICAnXFx1MUU4OCc6ICdXJyxcbiAgICAnXFx1MkM3Mic6ICdXJyxcbiAgICAnXFx1MjRDRCc6ICdYJyxcbiAgICAnXFx1RkYzOCc6ICdYJyxcbiAgICAnXFx1MUU4QSc6ICdYJyxcbiAgICAnXFx1MUU4Qyc6ICdYJyxcbiAgICAnXFx1MjRDRSc6ICdZJyxcbiAgICAnXFx1RkYzOSc6ICdZJyxcbiAgICAnXFx1MUVGMic6ICdZJyxcbiAgICAnXFx1MDBERCc6ICdZJyxcbiAgICAnXFx1MDE3Nic6ICdZJyxcbiAgICAnXFx1MUVGOCc6ICdZJyxcbiAgICAnXFx1MDIzMic6ICdZJyxcbiAgICAnXFx1MUU4RSc6ICdZJyxcbiAgICAnXFx1MDE3OCc6ICdZJyxcbiAgICAnXFx1MUVGNic6ICdZJyxcbiAgICAnXFx1MUVGNCc6ICdZJyxcbiAgICAnXFx1MDFCMyc6ICdZJyxcbiAgICAnXFx1MDI0RSc6ICdZJyxcbiAgICAnXFx1MUVGRSc6ICdZJyxcbiAgICAnXFx1MjRDRic6ICdaJyxcbiAgICAnXFx1RkYzQSc6ICdaJyxcbiAgICAnXFx1MDE3OSc6ICdaJyxcbiAgICAnXFx1MUU5MCc6ICdaJyxcbiAgICAnXFx1MDE3Qic6ICdaJyxcbiAgICAnXFx1MDE3RCc6ICdaJyxcbiAgICAnXFx1MUU5Mic6ICdaJyxcbiAgICAnXFx1MUU5NCc6ICdaJyxcbiAgICAnXFx1MDFCNSc6ICdaJyxcbiAgICAnXFx1MDIyNCc6ICdaJyxcbiAgICAnXFx1MkM3Ric6ICdaJyxcbiAgICAnXFx1MkM2Qic6ICdaJyxcbiAgICAnXFx1QTc2Mic6ICdaJyxcbiAgICAnXFx1MjREMCc6ICdhJyxcbiAgICAnXFx1RkY0MSc6ICdhJyxcbiAgICAnXFx1MUU5QSc6ICdhJyxcbiAgICAnXFx1MDBFMCc6ICdhJyxcbiAgICAnXFx1MDBFMSc6ICdhJyxcbiAgICAnXFx1MDBFMic6ICdhJyxcbiAgICAnXFx1MUVBNyc6ICdhJyxcbiAgICAnXFx1MUVBNSc6ICdhJyxcbiAgICAnXFx1MUVBQic6ICdhJyxcbiAgICAnXFx1MUVBOSc6ICdhJyxcbiAgICAnXFx1MDBFMyc6ICdhJyxcbiAgICAnXFx1MDEwMSc6ICdhJyxcbiAgICAnXFx1MDEwMyc6ICdhJyxcbiAgICAnXFx1MUVCMSc6ICdhJyxcbiAgICAnXFx1MUVBRic6ICdhJyxcbiAgICAnXFx1MUVCNSc6ICdhJyxcbiAgICAnXFx1MUVCMyc6ICdhJyxcbiAgICAnXFx1MDIyNyc6ICdhJyxcbiAgICAnXFx1MDFFMSc6ICdhJyxcbiAgICAnXFx1MDBFNCc6ICdhJyxcbiAgICAnXFx1MDFERic6ICdhJyxcbiAgICAnXFx1MUVBMyc6ICdhJyxcbiAgICAnXFx1MDBFNSc6ICdhJyxcbiAgICAnXFx1MDFGQic6ICdhJyxcbiAgICAnXFx1MDFDRSc6ICdhJyxcbiAgICAnXFx1MDIwMSc6ICdhJyxcbiAgICAnXFx1MDIwMyc6ICdhJyxcbiAgICAnXFx1MUVBMSc6ICdhJyxcbiAgICAnXFx1MUVBRCc6ICdhJyxcbiAgICAnXFx1MUVCNyc6ICdhJyxcbiAgICAnXFx1MUUwMSc6ICdhJyxcbiAgICAnXFx1MDEwNSc6ICdhJyxcbiAgICAnXFx1MkM2NSc6ICdhJyxcbiAgICAnXFx1MDI1MCc6ICdhJyxcbiAgICAnXFx1QTczMyc6ICdhYScsXG4gICAgJ1xcdTAwRTYnOiAnYWUnLFxuICAgICdcXHUwMUZEJzogJ2FlJyxcbiAgICAnXFx1MDFFMyc6ICdhZScsXG4gICAgJ1xcdUE3MzUnOiAnYW8nLFxuICAgICdcXHVBNzM3JzogJ2F1JyxcbiAgICAnXFx1QTczOSc6ICdhdicsXG4gICAgJ1xcdUE3M0InOiAnYXYnLFxuICAgICdcXHVBNzNEJzogJ2F5JyxcbiAgICAnXFx1MjREMSc6ICdiJyxcbiAgICAnXFx1RkY0Mic6ICdiJyxcbiAgICAnXFx1MUUwMyc6ICdiJyxcbiAgICAnXFx1MUUwNSc6ICdiJyxcbiAgICAnXFx1MUUwNyc6ICdiJyxcbiAgICAnXFx1MDE4MCc6ICdiJyxcbiAgICAnXFx1MDE4Myc6ICdiJyxcbiAgICAnXFx1MDI1Myc6ICdiJyxcbiAgICAnXFx1MjREMic6ICdjJyxcbiAgICAnXFx1RkY0Myc6ICdjJyxcbiAgICAnXFx1MDEwNyc6ICdjJyxcbiAgICAnXFx1MDEwOSc6ICdjJyxcbiAgICAnXFx1MDEwQic6ICdjJyxcbiAgICAnXFx1MDEwRCc6ICdjJyxcbiAgICAnXFx1MDBFNyc6ICdjJyxcbiAgICAnXFx1MUUwOSc6ICdjJyxcbiAgICAnXFx1MDE4OCc6ICdjJyxcbiAgICAnXFx1MDIzQyc6ICdjJyxcbiAgICAnXFx1QTczRic6ICdjJyxcbiAgICAnXFx1MjE4NCc6ICdjJyxcbiAgICAnXFx1MjREMyc6ICdkJyxcbiAgICAnXFx1RkY0NCc6ICdkJyxcbiAgICAnXFx1MUUwQic6ICdkJyxcbiAgICAnXFx1MDEwRic6ICdkJyxcbiAgICAnXFx1MUUwRCc6ICdkJyxcbiAgICAnXFx1MUUxMSc6ICdkJyxcbiAgICAnXFx1MUUxMyc6ICdkJyxcbiAgICAnXFx1MUUwRic6ICdkJyxcbiAgICAnXFx1MDExMSc6ICdkJyxcbiAgICAnXFx1MDE4Qyc6ICdkJyxcbiAgICAnXFx1MDI1Nic6ICdkJyxcbiAgICAnXFx1MDI1Nyc6ICdkJyxcbiAgICAnXFx1QTc3QSc6ICdkJyxcbiAgICAnXFx1MDFGMyc6ICdkeicsXG4gICAgJ1xcdTAxQzYnOiAnZHonLFxuICAgICdcXHUyNEQ0JzogJ2UnLFxuICAgICdcXHVGRjQ1JzogJ2UnLFxuICAgICdcXHUwMEU4JzogJ2UnLFxuICAgICdcXHUwMEU5JzogJ2UnLFxuICAgICdcXHUwMEVBJzogJ2UnLFxuICAgICdcXHUxRUMxJzogJ2UnLFxuICAgICdcXHUxRUJGJzogJ2UnLFxuICAgICdcXHUxRUM1JzogJ2UnLFxuICAgICdcXHUxRUMzJzogJ2UnLFxuICAgICdcXHUxRUJEJzogJ2UnLFxuICAgICdcXHUwMTEzJzogJ2UnLFxuICAgICdcXHUxRTE1JzogJ2UnLFxuICAgICdcXHUxRTE3JzogJ2UnLFxuICAgICdcXHUwMTE1JzogJ2UnLFxuICAgICdcXHUwMTE3JzogJ2UnLFxuICAgICdcXHUwMEVCJzogJ2UnLFxuICAgICdcXHUxRUJCJzogJ2UnLFxuICAgICdcXHUwMTFCJzogJ2UnLFxuICAgICdcXHUwMjA1JzogJ2UnLFxuICAgICdcXHUwMjA3JzogJ2UnLFxuICAgICdcXHUxRUI5JzogJ2UnLFxuICAgICdcXHUxRUM3JzogJ2UnLFxuICAgICdcXHUwMjI5JzogJ2UnLFxuICAgICdcXHUxRTFEJzogJ2UnLFxuICAgICdcXHUwMTE5JzogJ2UnLFxuICAgICdcXHUxRTE5JzogJ2UnLFxuICAgICdcXHUxRTFCJzogJ2UnLFxuICAgICdcXHUwMjQ3JzogJ2UnLFxuICAgICdcXHUwMjVCJzogJ2UnLFxuICAgICdcXHUwMUREJzogJ2UnLFxuICAgICdcXHUyNEQ1JzogJ2YnLFxuICAgICdcXHVGRjQ2JzogJ2YnLFxuICAgICdcXHUxRTFGJzogJ2YnLFxuICAgICdcXHUwMTkyJzogJ2YnLFxuICAgICdcXHVBNzdDJzogJ2YnLFxuICAgICdcXHUyNEQ2JzogJ2cnLFxuICAgICdcXHVGRjQ3JzogJ2cnLFxuICAgICdcXHUwMUY1JzogJ2cnLFxuICAgICdcXHUwMTFEJzogJ2cnLFxuICAgICdcXHUxRTIxJzogJ2cnLFxuICAgICdcXHUwMTFGJzogJ2cnLFxuICAgICdcXHUwMTIxJzogJ2cnLFxuICAgICdcXHUwMUU3JzogJ2cnLFxuICAgICdcXHUwMTIzJzogJ2cnLFxuICAgICdcXHUwMUU1JzogJ2cnLFxuICAgICdcXHUwMjYwJzogJ2cnLFxuICAgICdcXHVBN0ExJzogJ2cnLFxuICAgICdcXHUxRDc5JzogJ2cnLFxuICAgICdcXHVBNzdGJzogJ2cnLFxuICAgICdcXHUyNEQ3JzogJ2gnLFxuICAgICdcXHVGRjQ4JzogJ2gnLFxuICAgICdcXHUwMTI1JzogJ2gnLFxuICAgICdcXHUxRTIzJzogJ2gnLFxuICAgICdcXHUxRTI3JzogJ2gnLFxuICAgICdcXHUwMjFGJzogJ2gnLFxuICAgICdcXHUxRTI1JzogJ2gnLFxuICAgICdcXHUxRTI5JzogJ2gnLFxuICAgICdcXHUxRTJCJzogJ2gnLFxuICAgICdcXHUxRTk2JzogJ2gnLFxuICAgICdcXHUwMTI3JzogJ2gnLFxuICAgICdcXHUyQzY4JzogJ2gnLFxuICAgICdcXHUyQzc2JzogJ2gnLFxuICAgICdcXHUwMjY1JzogJ2gnLFxuICAgICdcXHUwMTk1JzogJ2h2JyxcbiAgICAnXFx1MjREOCc6ICdpJyxcbiAgICAnXFx1RkY0OSc6ICdpJyxcbiAgICAnXFx1MDBFQyc6ICdpJyxcbiAgICAnXFx1MDBFRCc6ICdpJyxcbiAgICAnXFx1MDBFRSc6ICdpJyxcbiAgICAnXFx1MDEyOSc6ICdpJyxcbiAgICAnXFx1MDEyQic6ICdpJyxcbiAgICAnXFx1MDEyRCc6ICdpJyxcbiAgICAnXFx1MDBFRic6ICdpJyxcbiAgICAnXFx1MUUyRic6ICdpJyxcbiAgICAnXFx1MUVDOSc6ICdpJyxcbiAgICAnXFx1MDFEMCc6ICdpJyxcbiAgICAnXFx1MDIwOSc6ICdpJyxcbiAgICAnXFx1MDIwQic6ICdpJyxcbiAgICAnXFx1MUVDQic6ICdpJyxcbiAgICAnXFx1MDEyRic6ICdpJyxcbiAgICAnXFx1MUUyRCc6ICdpJyxcbiAgICAnXFx1MDI2OCc6ICdpJyxcbiAgICAnXFx1MDEzMSc6ICdpJyxcbiAgICAnXFx1MjREOSc6ICdqJyxcbiAgICAnXFx1RkY0QSc6ICdqJyxcbiAgICAnXFx1MDEzNSc6ICdqJyxcbiAgICAnXFx1MDFGMCc6ICdqJyxcbiAgICAnXFx1MDI0OSc6ICdqJyxcbiAgICAnXFx1MjREQSc6ICdrJyxcbiAgICAnXFx1RkY0Qic6ICdrJyxcbiAgICAnXFx1MUUzMSc6ICdrJyxcbiAgICAnXFx1MDFFOSc6ICdrJyxcbiAgICAnXFx1MUUzMyc6ICdrJyxcbiAgICAnXFx1MDEzNyc6ICdrJyxcbiAgICAnXFx1MUUzNSc6ICdrJyxcbiAgICAnXFx1MDE5OSc6ICdrJyxcbiAgICAnXFx1MkM2QSc6ICdrJyxcbiAgICAnXFx1QTc0MSc6ICdrJyxcbiAgICAnXFx1QTc0Myc6ICdrJyxcbiAgICAnXFx1QTc0NSc6ICdrJyxcbiAgICAnXFx1QTdBMyc6ICdrJyxcbiAgICAnXFx1MjREQic6ICdsJyxcbiAgICAnXFx1RkY0Qyc6ICdsJyxcbiAgICAnXFx1MDE0MCc6ICdsJyxcbiAgICAnXFx1MDEzQSc6ICdsJyxcbiAgICAnXFx1MDEzRSc6ICdsJyxcbiAgICAnXFx1MUUzNyc6ICdsJyxcbiAgICAnXFx1MUUzOSc6ICdsJyxcbiAgICAnXFx1MDEzQyc6ICdsJyxcbiAgICAnXFx1MUUzRCc6ICdsJyxcbiAgICAnXFx1MUUzQic6ICdsJyxcbiAgICAnXFx1MDE3Ric6ICdsJyxcbiAgICAnXFx1MDE0Mic6ICdsJyxcbiAgICAnXFx1MDE5QSc6ICdsJyxcbiAgICAnXFx1MDI2Qic6ICdsJyxcbiAgICAnXFx1MkM2MSc6ICdsJyxcbiAgICAnXFx1QTc0OSc6ICdsJyxcbiAgICAnXFx1QTc4MSc6ICdsJyxcbiAgICAnXFx1QTc0Nyc6ICdsJyxcbiAgICAnXFx1MDFDOSc6ICdsaicsXG4gICAgJ1xcdTI0REMnOiAnbScsXG4gICAgJ1xcdUZGNEQnOiAnbScsXG4gICAgJ1xcdTFFM0YnOiAnbScsXG4gICAgJ1xcdTFFNDEnOiAnbScsXG4gICAgJ1xcdTFFNDMnOiAnbScsXG4gICAgJ1xcdTAyNzEnOiAnbScsXG4gICAgJ1xcdTAyNkYnOiAnbScsXG4gICAgJ1xcdTI0REQnOiAnbicsXG4gICAgJ1xcdUZGNEUnOiAnbicsXG4gICAgJ1xcdTAxRjknOiAnbicsXG4gICAgJ1xcdTAxNDQnOiAnbicsXG4gICAgJ1xcdTAwRjEnOiAnbicsXG4gICAgJ1xcdTFFNDUnOiAnbicsXG4gICAgJ1xcdTAxNDgnOiAnbicsXG4gICAgJ1xcdTFFNDcnOiAnbicsXG4gICAgJ1xcdTAxNDYnOiAnbicsXG4gICAgJ1xcdTFFNEInOiAnbicsXG4gICAgJ1xcdTFFNDknOiAnbicsXG4gICAgJ1xcdTAxOUUnOiAnbicsXG4gICAgJ1xcdTAyNzInOiAnbicsXG4gICAgJ1xcdTAxNDknOiAnbicsXG4gICAgJ1xcdUE3OTEnOiAnbicsXG4gICAgJ1xcdUE3QTUnOiAnbicsXG4gICAgJ1xcdTAxQ0MnOiAnbmonLFxuICAgICdcXHUyNERFJzogJ28nLFxuICAgICdcXHVGRjRGJzogJ28nLFxuICAgICdcXHUwMEYyJzogJ28nLFxuICAgICdcXHUwMEYzJzogJ28nLFxuICAgICdcXHUwMEY0JzogJ28nLFxuICAgICdcXHUxRUQzJzogJ28nLFxuICAgICdcXHUxRUQxJzogJ28nLFxuICAgICdcXHUxRUQ3JzogJ28nLFxuICAgICdcXHUxRUQ1JzogJ28nLFxuICAgICdcXHUwMEY1JzogJ28nLFxuICAgICdcXHUxRTREJzogJ28nLFxuICAgICdcXHUwMjJEJzogJ28nLFxuICAgICdcXHUxRTRGJzogJ28nLFxuICAgICdcXHUwMTREJzogJ28nLFxuICAgICdcXHUxRTUxJzogJ28nLFxuICAgICdcXHUxRTUzJzogJ28nLFxuICAgICdcXHUwMTRGJzogJ28nLFxuICAgICdcXHUwMjJGJzogJ28nLFxuICAgICdcXHUwMjMxJzogJ28nLFxuICAgICdcXHUwMEY2JzogJ28nLFxuICAgICdcXHUwMjJCJzogJ28nLFxuICAgICdcXHUxRUNGJzogJ28nLFxuICAgICdcXHUwMTUxJzogJ28nLFxuICAgICdcXHUwMUQyJzogJ28nLFxuICAgICdcXHUwMjBEJzogJ28nLFxuICAgICdcXHUwMjBGJzogJ28nLFxuICAgICdcXHUwMUExJzogJ28nLFxuICAgICdcXHUxRUREJzogJ28nLFxuICAgICdcXHUxRURCJzogJ28nLFxuICAgICdcXHUxRUUxJzogJ28nLFxuICAgICdcXHUxRURGJzogJ28nLFxuICAgICdcXHUxRUUzJzogJ28nLFxuICAgICdcXHUxRUNEJzogJ28nLFxuICAgICdcXHUxRUQ5JzogJ28nLFxuICAgICdcXHUwMUVCJzogJ28nLFxuICAgICdcXHUwMUVEJzogJ28nLFxuICAgICdcXHUwMEY4JzogJ28nLFxuICAgICdcXHUwMUZGJzogJ28nLFxuICAgICdcXHUwMjU0JzogJ28nLFxuICAgICdcXHVBNzRCJzogJ28nLFxuICAgICdcXHVBNzREJzogJ28nLFxuICAgICdcXHUwMjc1JzogJ28nLFxuICAgICdcXHUwMTUzJzogJ29lJyxcbiAgICAnXFx1MDFBMyc6ICdvaScsXG4gICAgJ1xcdTAyMjMnOiAnb3UnLFxuICAgICdcXHVBNzRGJzogJ29vJyxcbiAgICAnXFx1MjRERic6ICdwJyxcbiAgICAnXFx1RkY1MCc6ICdwJyxcbiAgICAnXFx1MUU1NSc6ICdwJyxcbiAgICAnXFx1MUU1Nyc6ICdwJyxcbiAgICAnXFx1MDFBNSc6ICdwJyxcbiAgICAnXFx1MUQ3RCc6ICdwJyxcbiAgICAnXFx1QTc1MSc6ICdwJyxcbiAgICAnXFx1QTc1Myc6ICdwJyxcbiAgICAnXFx1QTc1NSc6ICdwJyxcbiAgICAnXFx1MjRFMCc6ICdxJyxcbiAgICAnXFx1RkY1MSc6ICdxJyxcbiAgICAnXFx1MDI0Qic6ICdxJyxcbiAgICAnXFx1QTc1Nyc6ICdxJyxcbiAgICAnXFx1QTc1OSc6ICdxJyxcbiAgICAnXFx1MjRFMSc6ICdyJyxcbiAgICAnXFx1RkY1Mic6ICdyJyxcbiAgICAnXFx1MDE1NSc6ICdyJyxcbiAgICAnXFx1MUU1OSc6ICdyJyxcbiAgICAnXFx1MDE1OSc6ICdyJyxcbiAgICAnXFx1MDIxMSc6ICdyJyxcbiAgICAnXFx1MDIxMyc6ICdyJyxcbiAgICAnXFx1MUU1Qic6ICdyJyxcbiAgICAnXFx1MUU1RCc6ICdyJyxcbiAgICAnXFx1MDE1Nyc6ICdyJyxcbiAgICAnXFx1MUU1Ric6ICdyJyxcbiAgICAnXFx1MDI0RCc6ICdyJyxcbiAgICAnXFx1MDI3RCc6ICdyJyxcbiAgICAnXFx1QTc1Qic6ICdyJyxcbiAgICAnXFx1QTdBNyc6ICdyJyxcbiAgICAnXFx1QTc4Myc6ICdyJyxcbiAgICAnXFx1MjRFMic6ICdzJyxcbiAgICAnXFx1RkY1Myc6ICdzJyxcbiAgICAnXFx1MDBERic6ICdzJyxcbiAgICAnXFx1MDE1Qic6ICdzJyxcbiAgICAnXFx1MUU2NSc6ICdzJyxcbiAgICAnXFx1MDE1RCc6ICdzJyxcbiAgICAnXFx1MUU2MSc6ICdzJyxcbiAgICAnXFx1MDE2MSc6ICdzJyxcbiAgICAnXFx1MUU2Nyc6ICdzJyxcbiAgICAnXFx1MUU2Myc6ICdzJyxcbiAgICAnXFx1MUU2OSc6ICdzJyxcbiAgICAnXFx1MDIxOSc6ICdzJyxcbiAgICAnXFx1MDE1Ric6ICdzJyxcbiAgICAnXFx1MDIzRic6ICdzJyxcbiAgICAnXFx1QTdBOSc6ICdzJyxcbiAgICAnXFx1QTc4NSc6ICdzJyxcbiAgICAnXFx1MUU5Qic6ICdzJyxcbiAgICAnXFx1MjRFMyc6ICd0JyxcbiAgICAnXFx1RkY1NCc6ICd0JyxcbiAgICAnXFx1MUU2Qic6ICd0JyxcbiAgICAnXFx1MUU5Nyc6ICd0JyxcbiAgICAnXFx1MDE2NSc6ICd0JyxcbiAgICAnXFx1MUU2RCc6ICd0JyxcbiAgICAnXFx1MDIxQic6ICd0JyxcbiAgICAnXFx1MDE2Myc6ICd0JyxcbiAgICAnXFx1MUU3MSc6ICd0JyxcbiAgICAnXFx1MUU2Ric6ICd0JyxcbiAgICAnXFx1MDE2Nyc6ICd0JyxcbiAgICAnXFx1MDFBRCc6ICd0JyxcbiAgICAnXFx1MDI4OCc6ICd0JyxcbiAgICAnXFx1MkM2Nic6ICd0JyxcbiAgICAnXFx1QTc4Nyc6ICd0JyxcbiAgICAnXFx1QTcyOSc6ICd0eicsXG4gICAgJ1xcdTI0RTQnOiAndScsXG4gICAgJ1xcdUZGNTUnOiAndScsXG4gICAgJ1xcdTAwRjknOiAndScsXG4gICAgJ1xcdTAwRkEnOiAndScsXG4gICAgJ1xcdTAwRkInOiAndScsXG4gICAgJ1xcdTAxNjknOiAndScsXG4gICAgJ1xcdTFFNzknOiAndScsXG4gICAgJ1xcdTAxNkInOiAndScsXG4gICAgJ1xcdTFFN0InOiAndScsXG4gICAgJ1xcdTAxNkQnOiAndScsXG4gICAgJ1xcdTAwRkMnOiAndScsXG4gICAgJ1xcdTAxREMnOiAndScsXG4gICAgJ1xcdTAxRDgnOiAndScsXG4gICAgJ1xcdTAxRDYnOiAndScsXG4gICAgJ1xcdTAxREEnOiAndScsXG4gICAgJ1xcdTFFRTcnOiAndScsXG4gICAgJ1xcdTAxNkYnOiAndScsXG4gICAgJ1xcdTAxNzEnOiAndScsXG4gICAgJ1xcdTAxRDQnOiAndScsXG4gICAgJ1xcdTAyMTUnOiAndScsXG4gICAgJ1xcdTAyMTcnOiAndScsXG4gICAgJ1xcdTAxQjAnOiAndScsXG4gICAgJ1xcdTFFRUInOiAndScsXG4gICAgJ1xcdTFFRTknOiAndScsXG4gICAgJ1xcdTFFRUYnOiAndScsXG4gICAgJ1xcdTFFRUQnOiAndScsXG4gICAgJ1xcdTFFRjEnOiAndScsXG4gICAgJ1xcdTFFRTUnOiAndScsXG4gICAgJ1xcdTFFNzMnOiAndScsXG4gICAgJ1xcdTAxNzMnOiAndScsXG4gICAgJ1xcdTFFNzcnOiAndScsXG4gICAgJ1xcdTFFNzUnOiAndScsXG4gICAgJ1xcdTAyODknOiAndScsXG4gICAgJ1xcdTI0RTUnOiAndicsXG4gICAgJ1xcdUZGNTYnOiAndicsXG4gICAgJ1xcdTFFN0QnOiAndicsXG4gICAgJ1xcdTFFN0YnOiAndicsXG4gICAgJ1xcdTAyOEInOiAndicsXG4gICAgJ1xcdUE3NUYnOiAndicsXG4gICAgJ1xcdTAyOEMnOiAndicsXG4gICAgJ1xcdUE3NjEnOiAndnknLFxuICAgICdcXHUyNEU2JzogJ3cnLFxuICAgICdcXHVGRjU3JzogJ3cnLFxuICAgICdcXHUxRTgxJzogJ3cnLFxuICAgICdcXHUxRTgzJzogJ3cnLFxuICAgICdcXHUwMTc1JzogJ3cnLFxuICAgICdcXHUxRTg3JzogJ3cnLFxuICAgICdcXHUxRTg1JzogJ3cnLFxuICAgICdcXHUxRTk4JzogJ3cnLFxuICAgICdcXHUxRTg5JzogJ3cnLFxuICAgICdcXHUyQzczJzogJ3cnLFxuICAgICdcXHUyNEU3JzogJ3gnLFxuICAgICdcXHVGRjU4JzogJ3gnLFxuICAgICdcXHUxRThCJzogJ3gnLFxuICAgICdcXHUxRThEJzogJ3gnLFxuICAgICdcXHUyNEU4JzogJ3knLFxuICAgICdcXHVGRjU5JzogJ3knLFxuICAgICdcXHUxRUYzJzogJ3knLFxuICAgICdcXHUwMEZEJzogJ3knLFxuICAgICdcXHUwMTc3JzogJ3knLFxuICAgICdcXHUxRUY5JzogJ3knLFxuICAgICdcXHUwMjMzJzogJ3knLFxuICAgICdcXHUxRThGJzogJ3knLFxuICAgICdcXHUwMEZGJzogJ3knLFxuICAgICdcXHUxRUY3JzogJ3knLFxuICAgICdcXHUxRTk5JzogJ3knLFxuICAgICdcXHUxRUY1JzogJ3knLFxuICAgICdcXHUwMUI0JzogJ3knLFxuICAgICdcXHUwMjRGJzogJ3knLFxuICAgICdcXHUxRUZGJzogJ3knLFxuICAgICdcXHUyNEU5JzogJ3onLFxuICAgICdcXHVGRjVBJzogJ3onLFxuICAgICdcXHUwMTdBJzogJ3onLFxuICAgICdcXHUxRTkxJzogJ3onLFxuICAgICdcXHUwMTdDJzogJ3onLFxuICAgICdcXHUwMTdFJzogJ3onLFxuICAgICdcXHUxRTkzJzogJ3onLFxuICAgICdcXHUxRTk1JzogJ3onLFxuICAgICdcXHUwMUI2JzogJ3onLFxuICAgICdcXHUwMjI1JzogJ3onLFxuICAgICdcXHUwMjQwJzogJ3onLFxuICAgICdcXHUyQzZDJzogJ3onLFxuICAgICdcXHVBNzYzJzogJ3onLFxuICAgICdcXHUwMzg2JzogJ1xcdTAzOTEnLFxuICAgICdcXHUwMzg4JzogJ1xcdTAzOTUnLFxuICAgICdcXHUwMzg5JzogJ1xcdTAzOTcnLFxuICAgICdcXHUwMzhBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwM0FBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwMzhDJzogJ1xcdTAzOUYnLFxuICAgICdcXHUwMzhFJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwM0FCJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwMzhGJzogJ1xcdTAzQTknLFxuICAgICdcXHUwM0FDJzogJ1xcdTAzQjEnLFxuICAgICdcXHUwM0FEJzogJ1xcdTAzQjUnLFxuICAgICdcXHUwM0FFJzogJ1xcdTAzQjcnLFxuICAgICdcXHUwM0FGJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NBJzogJ1xcdTAzQjknLFxuICAgICdcXHUwMzkwJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NDJzogJ1xcdTAzQkYnLFxuICAgICdcXHUwM0NEJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0NCJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0IwJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0NFJzogJ1xcdTAzQzknLFxuICAgICdcXHUwM0MyJzogJ1xcdTAzQzMnLFxuICAgICdcXHUyMDE5JzogJ1xcJydcbiAgfTtcblxuICByZXR1cm4gZGlhY3JpdGljcztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9iYXNlJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBCYXNlQWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBCYXNlQWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChCYXNlQWRhcHRlciwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY3VycmVudGAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLicpO1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHF1ZXJ5YCBtZXRob2QgbXVzdCBiZSBkZWZpbmVkIGluIGNoaWxkIGNsYXNzZXMuJyk7XG4gIH07XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgLy8gQ2FuIGJlIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcbiAgfTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYW4gYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5nZW5lcmF0ZVJlc3VsdElkID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIHZhciBpZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0LSc7XG5cbiAgICBpZCArPSBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuXG4gICAgaWYgKGRhdGEuaWQgIT0gbnVsbCkge1xuICAgICAgaWQgKz0gJy0nICsgZGF0YS5pZC50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnLScgKyBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3NlbGVjdCcsW1xuICAnLi9iYXNlJyxcbiAgJy4uL3V0aWxzJyxcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uIChCYXNlQWRhcHRlciwgVXRpbHMsICQpIHtcbiAgZnVuY3Rpb24gU2VsZWN0QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIFNlbGVjdEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoU2VsZWN0QWRhcHRlciwgQmFzZUFkYXB0ZXIpO1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgIHZhciBvcHRpb24gPSBzZWxmLml0ZW0oJG9wdGlvbik7XG5cbiAgICAgIGRhdGEucHVzaChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soZGF0YSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkYXRhLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIC8vIElmIGRhdGEuZWxlbWVudCBpcyBhIERPTSBub2RlLCB1c2UgaXQgaW5zdGVhZFxuICAgIGlmICgkKGRhdGEuZWxlbWVudCkuaXMoJ29wdGlvbicpKSB7XG4gICAgICBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kZWxlbWVudC5wcm9wKCdtdWx0aXBsZScpKSB7XG4gICAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIHZhciB2YWwgPSBbXTtcblxuICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICBkYXRhLnB1c2guYXBwbHkoZGF0YSwgY3VycmVudERhdGEpO1xuXG4gICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgICAgIHZhciBpZCA9IGRhdGFbZF0uaWQ7XG5cbiAgICAgICAgICBpZiAoJC5pbkFycmF5KGlkLCB2YWwpID09PSAtMSkge1xuICAgICAgICAgICAgdmFsLnB1c2goaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuJGVsZW1lbnQudmFsKHZhbCk7XG4gICAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsID0gZGF0YS5pZDtcblxuICAgICAgdGhpcy4kZWxlbWVudC52YWwodmFsKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUudW5zZWxlY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICghdGhpcy4kZWxlbWVudC5wcm9wKCdtdWx0aXBsZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCQoZGF0YS5lbGVtZW50KS5pcygnb3B0aW9uJykpIHtcbiAgICAgIGRhdGEuZWxlbWVudC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICB2YXIgdmFsID0gW107XG5cbiAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgY3VycmVudERhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgdmFyIGlkID0gY3VycmVudERhdGFbZF0uaWQ7XG5cbiAgICAgICAgaWYgKGlkICE9PSBkYXRhLmlkICYmICQuaW5BcnJheShpZCwgdmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICB2YWwucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2VsZi4kZWxlbWVudC52YWwodmFsKTtcblxuICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuc2VsZWN0KHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLnVuc2VsZWN0KHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlbW92ZSBhbnl0aGluZyBhZGRlZCB0byBjaGlsZCBlbGVtZW50c1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnKicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgLy8gUmVtb3ZlIGFueSBjdXN0b20gZGF0YSBzZXQgYnkgU2VsZWN0MlxuICAgICAgVXRpbHMuUmVtb3ZlRGF0YSh0aGlzKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGRhdGEgPSBbXTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCk7XG5cbiAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgaWYgKCEkb3B0aW9uLmlzKCdvcHRpb24nKSAmJiAhJG9wdGlvbi5pcygnb3B0Z3JvdXAnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRpb24gPSBzZWxmLml0ZW0oJG9wdGlvbik7XG5cbiAgICAgIHZhciBtYXRjaGVzID0gc2VsZi5tYXRjaGVzKHBhcmFtcywgb3B0aW9uKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YS5wdXNoKG1hdGNoZXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soe1xuICAgICAgcmVzdWx0czogZGF0YVxuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmFkZE9wdGlvbnMgPSBmdW5jdGlvbiAoJG9wdGlvbnMpIHtcbiAgICBVdGlscy5hcHBlbmRNYW55KHRoaXMuJGVsZW1lbnQsICRvcHRpb25zKTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5vcHRpb24gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBvcHRpb247XG5cbiAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgICAgIG9wdGlvbi5sYWJlbCA9IGRhdGEudGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLnRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gZGF0YS50ZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGRhdGEuaWQ7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuZGlzYWJsZWQpIHtcbiAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc2VsZWN0ZWQpIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudGl0bGUpIHtcbiAgICAgIG9wdGlvbi50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgfVxuXG4gICAgdmFyICRvcHRpb24gPSAkKG9wdGlvbik7XG5cbiAgICB2YXIgbm9ybWFsaXplZERhdGEgPSB0aGlzLl9ub3JtYWxpemVJdGVtKGRhdGEpO1xuICAgIG5vcm1hbGl6ZWREYXRhLmVsZW1lbnQgPSBvcHRpb247XG5cbiAgICAvLyBPdmVycmlkZSB0aGUgb3B0aW9uJ3MgZGF0YSB3aXRoIHRoZSBjb21iaW5lZCBkYXRhXG4gICAgVXRpbHMuU3RvcmVEYXRhKG9wdGlvbiwgJ2RhdGEnLCBub3JtYWxpemVkRGF0YSk7XG5cbiAgICByZXR1cm4gJG9wdGlvbjtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24gKCRvcHRpb24pIHtcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgZGF0YSA9IFV0aWxzLkdldERhdGEoJG9wdGlvblswXSwgJ2RhdGEnKTtcblxuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGlmICgkb3B0aW9uLmlzKCdvcHRpb24nKSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICRvcHRpb24udmFsKCksXG4gICAgICAgIHRleHQ6ICRvcHRpb24udGV4dCgpLFxuICAgICAgICBkaXNhYmxlZDogJG9wdGlvbi5wcm9wKCdkaXNhYmxlZCcpLFxuICAgICAgICBzZWxlY3RlZDogJG9wdGlvbi5wcm9wKCdzZWxlY3RlZCcpLFxuICAgICAgICB0aXRsZTogJG9wdGlvbi5wcm9wKCd0aXRsZScpXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoJG9wdGlvbi5pcygnb3B0Z3JvdXAnKSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgdGV4dDogJG9wdGlvbi5wcm9wKCdsYWJlbCcpLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHRpdGxlOiAkb3B0aW9uLnByb3AoJ3RpdGxlJylcbiAgICAgIH07XG5cbiAgICAgIHZhciAkY2hpbGRyZW4gPSAkb3B0aW9uLmNoaWxkcmVuKCdvcHRpb24nKTtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBjID0gMDsgYyA8ICRjaGlsZHJlbi5sZW5ndGg7IGMrKykge1xuICAgICAgICB2YXIgJGNoaWxkID0gJCgkY2hpbGRyZW5bY10pO1xuXG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuaXRlbSgkY2hpbGQpO1xuXG4gICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgZGF0YSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YSk7XG4gICAgZGF0YS5lbGVtZW50ID0gJG9wdGlvblswXTtcblxuICAgIFV0aWxzLlN0b3JlRGF0YSgkb3B0aW9uWzBdLCAnZGF0YScsIGRhdGEpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuX25vcm1hbGl6ZUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtICE9PSBPYmplY3QoaXRlbSkpIHtcbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIGlkOiBpdGVtLFxuICAgICAgICB0ZXh0OiBpdGVtXG4gICAgICB9O1xuICAgIH1cblxuICAgIGl0ZW0gPSAkLmV4dGVuZCh7fSwge1xuICAgICAgdGV4dDogJydcbiAgICB9LCBpdGVtKTtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAoaXRlbS5pZCAhPSBudWxsKSB7XG4gICAgICBpdGVtLmlkID0gaXRlbS5pZC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChpdGVtLnRleHQgIT0gbnVsbCkge1xuICAgICAgaXRlbS50ZXh0ID0gaXRlbS50ZXh0LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0uX3Jlc3VsdElkID09IG51bGwgJiYgaXRlbS5pZCAmJiB0aGlzLmNvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICBpdGVtLl9yZXN1bHRJZCA9IHRoaXMuZ2VuZXJhdGVSZXN1bHRJZCh0aGlzLmNvbnRhaW5lciwgaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgaXRlbSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChwYXJhbXMsIGRhdGEpIHtcbiAgICB2YXIgbWF0Y2hlciA9IHRoaXMub3B0aW9ucy5nZXQoJ21hdGNoZXInKTtcblxuICAgIHJldHVybiBtYXRjaGVyKHBhcmFtcywgZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdEFkYXB0ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvYXJyYXknLFtcbiAgJy4vc2VsZWN0JyxcbiAgJy4uL3V0aWxzJyxcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uIChTZWxlY3RBZGFwdGVyLCBVdGlscywgJCkge1xuICBmdW5jdGlvbiBBcnJheUFkYXB0ZXIgKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5fZGF0YVRvQ29udmVydCA9IG9wdGlvbnMuZ2V0KCdkYXRhJykgfHwgW107XG5cbiAgICBBcnJheUFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKEFycmF5QWRhcHRlciwgU2VsZWN0QWRhcHRlcik7XG5cbiAgQXJyYXlBZGFwdGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIEFycmF5QWRhcHRlci5fX3N1cGVyX18uYmluZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLmFkZE9wdGlvbnModGhpcy5jb252ZXJ0VG9PcHRpb25zKHRoaXMuX2RhdGFUb0NvbnZlcnQpKTtcbiAgfTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyICRvcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpLmZpbHRlcihmdW5jdGlvbiAoaSwgZWxtKSB7XG4gICAgICByZXR1cm4gZWxtLnZhbHVlID09IGRhdGEuaWQudG9TdHJpbmcoKTtcbiAgICB9KTtcblxuICAgIGlmICgkb3B0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGRhdGEpO1xuXG4gICAgICB0aGlzLmFkZE9wdGlvbnMoJG9wdGlvbik7XG4gICAgfVxuXG4gICAgQXJyYXlBZGFwdGVyLl9fc3VwZXJfXy5zZWxlY3QuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLmNvbnZlcnRUb09wdGlvbnMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciAkZXhpc3RpbmcgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpO1xuICAgIHZhciBleGlzdGluZ0lkcyA9ICRleGlzdGluZy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlbGYuaXRlbSgkKHRoaXMpKS5pZDtcbiAgICB9KS5nZXQoKTtcblxuICAgIHZhciAkb3B0aW9ucyA9IFtdO1xuXG4gICAgLy8gRmlsdGVyIG91dCBhbGwgaXRlbXMgZXhjZXB0IGZvciB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYXJndW1lbnRcbiAgICBmdW5jdGlvbiBvbmx5SXRlbSAoaXRlbSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcykudmFsKCkgPT0gaXRlbS5pZDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YVtkXSk7XG5cbiAgICAgIC8vIFNraXAgaXRlbXMgd2hpY2ggd2VyZSBwcmUtbG9hZGVkLCBvbmx5IG1lcmdlIHRoZSBkYXRhXG4gICAgICBpZiAoJC5pbkFycmF5KGl0ZW0uaWQsIGV4aXN0aW5nSWRzKSA+PSAwKSB7XG4gICAgICAgIHZhciAkZXhpc3RpbmdPcHRpb24gPSAkZXhpc3RpbmcuZmlsdGVyKG9ubHlJdGVtKGl0ZW0pKTtcblxuICAgICAgICB2YXIgZXhpc3RpbmdEYXRhID0gdGhpcy5pdGVtKCRleGlzdGluZ09wdGlvbik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIGl0ZW0sIGV4aXN0aW5nRGF0YSk7XG5cbiAgICAgICAgdmFyICRuZXdPcHRpb24gPSB0aGlzLm9wdGlvbihuZXdEYXRhKTtcblxuICAgICAgICAkZXhpc3RpbmdPcHRpb24ucmVwbGFjZVdpdGgoJG5ld09wdGlvbik7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIHZhciAkY2hpbGRyZW4gPSB0aGlzLmNvbnZlcnRUb09wdGlvbnMoaXRlbS5jaGlsZHJlbik7XG5cbiAgICAgICAgVXRpbHMuYXBwZW5kTWFueSgkb3B0aW9uLCAkY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICAkb3B0aW9ucy5wdXNoKCRvcHRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiAkb3B0aW9ucztcbiAgfTtcblxuICByZXR1cm4gQXJyYXlBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL2FqYXgnLFtcbiAgJy4vYXJyYXknLFxuICAnLi4vdXRpbHMnLFxuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKEFycmF5QWRhcHRlciwgVXRpbHMsICQpIHtcbiAgZnVuY3Rpb24gQWpheEFkYXB0ZXIgKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5hamF4T3B0aW9ucyA9IHRoaXMuX2FwcGx5RGVmYXVsdHMob3B0aW9ucy5nZXQoJ2FqYXgnKSk7XG5cbiAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5wcm9jZXNzUmVzdWx0cyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnByb2Nlc3NSZXN1bHRzID0gdGhpcy5hamF4T3B0aW9ucy5wcm9jZXNzUmVzdWx0cztcbiAgICB9XG5cbiAgICBBamF4QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoQWpheEFkYXB0ZXIsIEFycmF5QWRhcHRlcik7XG5cbiAgQWpheEFkYXB0ZXIucHJvdG90eXBlLl9hcHBseURlZmF1bHRzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgcGFyYW1zLCB7XG4gICAgICAgICAgcTogcGFyYW1zLnRlcm1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdHJhbnNwb3J0OiBmdW5jdGlvbiAocGFyYW1zLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgICAgIHZhciAkcmVxdWVzdCA9ICQuYWpheChwYXJhbXMpO1xuXG4gICAgICAgICRyZXF1ZXN0LnRoZW4oc3VjY2Vzcyk7XG4gICAgICAgICRyZXF1ZXN0LmZhaWwoZmFpbHVyZSk7XG5cbiAgICAgICAgcmV0dXJuICRyZXF1ZXN0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zLCB0cnVlKTtcbiAgfTtcblxuICBBamF4QWRhcHRlci5wcm90b3R5cGUucHJvY2Vzc1Jlc3VsdHMgPSBmdW5jdGlvbiAocmVzdWx0cykge1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5fcmVxdWVzdCAhPSBudWxsKSB7XG4gICAgICAvLyBKU09OUCByZXF1ZXN0cyBjYW5ub3QgYWx3YXlzIGJlIGFib3J0ZWRcbiAgICAgIGlmICgkLmlzRnVuY3Rpb24odGhpcy5fcmVxdWVzdC5hYm9ydCkpIHtcbiAgICAgICAgdGhpcy5fcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIHR5cGU6ICdHRVQnXG4gICAgfSwgdGhpcy5hamF4T3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudXJsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLnVybCA9IG9wdGlvbnMudXJsLmNhbGwodGhpcy4kZWxlbWVudCwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhLmNhbGwodGhpcy4kZWxlbWVudCwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0ICgpIHtcbiAgICAgIHZhciAkcmVxdWVzdCA9IG9wdGlvbnMudHJhbnNwb3J0KG9wdGlvbnMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gc2VsZi5wcm9jZXNzUmVzdWx0cyhkYXRhLCBwYXJhbXMpO1xuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhhdCB0aGUgcmVzcG9uc2UgaW5jbHVkZWQgYSBgcmVzdWx0c2Aga2V5LlxuICAgICAgICAgIGlmICghcmVzdWx0cyB8fCAhcmVzdWx0cy5yZXN1bHRzIHx8ICEkLmlzQXJyYXkocmVzdWx0cy5yZXN1bHRzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBBSkFYIHJlc3VsdHMgZGlkIG5vdCByZXR1cm4gYW4gYXJyYXkgaW4gdGhlICcgK1xuICAgICAgICAgICAgICAnYHJlc3VsdHNgIGtleSBvZiB0aGUgcmVzcG9uc2UuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhyZXN1bHRzKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBkZXRlY3QgaWYgYSByZXF1ZXN0IHdhcyBhYm9ydGVkXG4gICAgICAgIC8vIE9ubHkgd29ya3MgaWYgdGhlIHRyYW5zcG9ydCBleHBvc2VzIGEgc3RhdHVzIHByb3BlcnR5XG4gICAgICAgIGlmICgnc3RhdHVzJyBpbiAkcmVxdWVzdCAmJlxuICAgICAgICAgICAgKCRyZXF1ZXN0LnN0YXR1cyA9PT0gMCB8fCAkcmVxdWVzdC5zdGF0dXMgPT09ICcwJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgICBtZXNzYWdlOiAnZXJyb3JMb2FkaW5nJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLl9yZXF1ZXN0ID0gJHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgJiYgcGFyYW1zLnRlcm0gIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3F1ZXJ5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlcXVlc3QsIHRoaXMuYWpheE9wdGlvbnMuZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBamF4QWRhcHRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS90YWdzJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBUYWdzIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIHRhZ3MgPSBvcHRpb25zLmdldCgndGFncycpO1xuXG4gICAgdmFyIGNyZWF0ZVRhZyA9IG9wdGlvbnMuZ2V0KCdjcmVhdGVUYWcnKTtcblxuICAgIGlmIChjcmVhdGVUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jcmVhdGVUYWcgPSBjcmVhdGVUYWc7XG4gICAgfVxuXG4gICAgdmFyIGluc2VydFRhZyA9IG9wdGlvbnMuZ2V0KCdpbnNlcnRUYWcnKTtcblxuICAgIGlmIChpbnNlcnRUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluc2VydFRhZyA9IGluc2VydFRhZztcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICBpZiAoJC5pc0FycmF5KHRhZ3MpKSB7XG4gICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRhZ3MubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgdmFyIHRhZyA9IHRhZ3NbdF07XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5fbm9ybWFsaXplSXRlbSh0YWcpO1xuXG4gICAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgVGFncy5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5fcmVtb3ZlT2xkVGFncygpO1xuXG4gICAgaWYgKHBhcmFtcy50ZXJtID09IG51bGwgfHwgcGFyYW1zLnBhZ2UgIT0gbnVsbCkge1xuICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd3JhcHBlciAob2JqLCBjaGlsZCkge1xuICAgICAgdmFyIGRhdGEgPSBvYmoucmVzdWx0cztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBkYXRhW2ldO1xuXG4gICAgICAgIHZhciBjaGVja0NoaWxkcmVuID0gKFxuICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbiAhPSBudWxsICYmXG4gICAgICAgICAgIXdyYXBwZXIoe1xuICAgICAgICAgICAgcmVzdWx0czogb3B0aW9uLmNoaWxkcmVuXG4gICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgKTtcblxuICAgICAgICB2YXIgb3B0aW9uVGV4dCA9IChvcHRpb24udGV4dCB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdmFyIHBhcmFtc1Rlcm0gPSAocGFyYW1zLnRlcm0gfHwgJycpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdmFyIGNoZWNrVGV4dCA9IG9wdGlvblRleHQgPT09IHBhcmFtc1Rlcm07XG5cbiAgICAgICAgaWYgKGNoZWNrVGV4dCB8fCBjaGVja0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2JqLmRhdGEgPSBkYXRhO1xuICAgICAgICAgIGNhbGxiYWNrKG9iaik7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnID0gc2VsZi5jcmVhdGVUYWcocGFyYW1zKTtcblxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gc2VsZi5vcHRpb24odGFnKTtcbiAgICAgICAgJG9wdGlvbi5hdHRyKCdkYXRhLXNlbGVjdDItdGFnJywgdHJ1ZSk7XG5cbiAgICAgICAgc2VsZi5hZGRPcHRpb25zKFskb3B0aW9uXSk7XG5cbiAgICAgICAgc2VsZi5pbnNlcnRUYWcoZGF0YSwgdGFnKTtcbiAgICAgIH1cblxuICAgICAgb2JqLnJlc3VsdHMgPSBkYXRhO1xuXG4gICAgICBjYWxsYmFjayhvYmopO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgd3JhcHBlcik7XG4gIH07XG5cbiAgVGFncy5wcm90b3R5cGUuY3JlYXRlVGFnID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zKSB7XG4gICAgdmFyIHRlcm0gPSAkLnRyaW0ocGFyYW1zLnRlcm0pO1xuXG4gICAgaWYgKHRlcm0gPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRlcm0sXG4gICAgICB0ZXh0OiB0ZXJtXG4gICAgfTtcbiAgfTtcblxuICBUYWdzLnByb3RvdHlwZS5pbnNlcnRUYWcgPSBmdW5jdGlvbiAoXywgZGF0YSwgdGFnKSB7XG4gICAgZGF0YS51bnNoaWZ0KHRhZyk7XG4gIH07XG5cbiAgVGFncy5wcm90b3R5cGUuX3JlbW92ZU9sZFRhZ3MgPSBmdW5jdGlvbiAoXykge1xuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uW2RhdGEtc2VsZWN0Mi10YWddJyk7XG5cbiAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gVGFncztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS90b2tlbml6ZXInLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIFRva2VuaXplciAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHZhciB0b2tlbml6ZXIgPSBvcHRpb25zLmdldCgndG9rZW5pemVyJyk7XG5cbiAgICBpZiAodG9rZW5pemVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudG9rZW5pemVyID0gdG9rZW5pemVyO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIFRva2VuaXplci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLiRzZWFyY2ggPSAgY29udGFpbmVyLmRyb3Bkb3duLiRzZWFyY2ggfHwgY29udGFpbmVyLnNlbGVjdGlvbi4kc2VhcmNoIHx8XG4gICAgICAkY29udGFpbmVyLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKTtcbiAgfTtcblxuICBUb2tlbml6ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFuZFNlbGVjdCAoZGF0YSkge1xuICAgICAgLy8gTm9ybWFsaXplIHRoZSBkYXRhIG9iamVjdCBzbyB3ZSBjYW4gdXNlIGl0IGZvciBjaGVja3NcbiAgICAgIHZhciBpdGVtID0gc2VsZi5fbm9ybWFsaXplSXRlbShkYXRhKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGRhdGEgb2JqZWN0IGFscmVhZHkgZXhpc3RzIGFzIGEgdGFnXG4gICAgICAvLyBTZWxlY3QgaXQgaWYgaXQgZG9lc24ndFxuICAgICAgdmFyICRleGlzdGluZ09wdGlvbnMgPSBzZWxmLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLnZhbCgpID09PSBpdGVtLmlkO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIGFuIGV4aXN0aW5nIG9wdGlvbiB3YXNuJ3QgZm91bmQgZm9yIGl0LCBjcmVhdGUgdGhlIG9wdGlvblxuICAgICAgaWYgKCEkZXhpc3RpbmdPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9IHNlbGYub3B0aW9uKGl0ZW0pO1xuICAgICAgICAkb3B0aW9uLmF0dHIoJ2RhdGEtc2VsZWN0Mi10YWcnLCB0cnVlKTtcblxuICAgICAgICBzZWxmLl9yZW1vdmVPbGRUYWdzKCk7XG4gICAgICAgIHNlbGYuYWRkT3B0aW9ucyhbJG9wdGlvbl0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0sIG5vdyB0aGF0IHdlIGtub3cgdGhlcmUgaXMgYW4gb3B0aW9uIGZvciBpdFxuICAgICAgc2VsZWN0KGl0ZW0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdCAoZGF0YSkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3QnLCB7XG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHBhcmFtcy50ZXJtID0gcGFyYW1zLnRlcm0gfHwgJyc7XG5cbiAgICB2YXIgdG9rZW5EYXRhID0gdGhpcy50b2tlbml6ZXIocGFyYW1zLCB0aGlzLm9wdGlvbnMsIGNyZWF0ZUFuZFNlbGVjdCk7XG5cbiAgICBpZiAodG9rZW5EYXRhLnRlcm0gIT09IHBhcmFtcy50ZXJtKSB7XG4gICAgICAvLyBSZXBsYWNlIHRoZSBzZWFyY2ggdGVybSBpZiB3ZSBoYXZlIHRoZSBzZWFyY2ggYm94XG4gICAgICBpZiAodGhpcy4kc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICB0aGlzLiRzZWFyY2gudmFsKHRva2VuRGF0YS50ZXJtKTtcbiAgICAgICAgdGhpcy4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy50ZXJtID0gdG9rZW5EYXRhLnRlcm07XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgVG9rZW5pemVyLnByb3RvdHlwZS50b2tlbml6ZXIgPSBmdW5jdGlvbiAoXywgcGFyYW1zLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBzZXBhcmF0b3JzID0gb3B0aW9ucy5nZXQoJ3Rva2VuU2VwYXJhdG9ycycpIHx8IFtdO1xuICAgIHZhciB0ZXJtID0gcGFyYW1zLnRlcm07XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgdmFyIGNyZWF0ZVRhZyA9IHRoaXMuY3JlYXRlVGFnIHx8IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwYXJhbXMudGVybSxcbiAgICAgICAgdGV4dDogcGFyYW1zLnRlcm1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIHdoaWxlIChpIDwgdGVybS5sZW5ndGgpIHtcbiAgICAgIHZhciB0ZXJtQ2hhciA9IHRlcm1baV07XG5cbiAgICAgIGlmICgkLmluQXJyYXkodGVybUNoYXIsIHNlcGFyYXRvcnMpID09PSAtMSkge1xuICAgICAgICBpKys7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJ0ID0gdGVybS5zdWJzdHIoMCwgaSk7XG4gICAgICB2YXIgcGFydFBhcmFtcyA9ICQuZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgdGVybTogcGFydFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBkYXRhID0gY3JlYXRlVGFnKHBhcnRQYXJhbXMpO1xuXG4gICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuXG4gICAgICAvLyBSZXNldCB0aGUgdGVybSB0byBub3QgaW5jbHVkZSB0aGUgdG9rZW5pemVkIHBvcnRpb25cbiAgICAgIHRlcm0gPSB0ZXJtLnN1YnN0cihpICsgMSkgfHwgJyc7XG4gICAgICBpID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGVybTogdGVybVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIFRva2VuaXplcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9taW5pbXVtSW5wdXRMZW5ndGgnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNaW5pbXVtSW5wdXRMZW5ndGggKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm1pbmltdW1JbnB1dExlbmd0aCA9IG9wdGlvbnMuZ2V0KCdtaW5pbXVtSW5wdXRMZW5ndGgnKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIE1pbmltdW1JbnB1dExlbmd0aC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcblxuICAgIGlmIChwYXJhbXMudGVybS5sZW5ndGggPCB0aGlzLm1pbmltdW1JbnB1dExlbmd0aCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdyZXN1bHRzOm1lc3NhZ2UnLCB7XG4gICAgICAgIG1lc3NhZ2U6ICdpbnB1dFRvb1Nob3J0JyxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIG1pbmltdW06IHRoaXMubWluaW11bUlucHV0TGVuZ3RoLFxuICAgICAgICAgIGlucHV0OiBwYXJhbXMudGVybSxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xuICB9O1xuXG4gIHJldHVybiBNaW5pbXVtSW5wdXRMZW5ndGg7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvbWF4aW11bUlucHV0TGVuZ3RoJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWF4aW11bUlucHV0TGVuZ3RoIChkZWNvcmF0ZWQsICRlLCBvcHRpb25zKSB7XG4gICAgdGhpcy5tYXhpbXVtSW5wdXRMZW5ndGggPSBvcHRpb25zLmdldCgnbWF4aW11bUlucHV0TGVuZ3RoJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZSwgb3B0aW9ucyk7XG4gIH1cblxuICBNYXhpbXVtSW5wdXRMZW5ndGgucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHBhcmFtcy50ZXJtID0gcGFyYW1zLnRlcm0gfHwgJyc7XG5cbiAgICBpZiAodGhpcy5tYXhpbXVtSW5wdXRMZW5ndGggPiAwICYmXG4gICAgICAgIHBhcmFtcy50ZXJtLmxlbmd0aCA+IHRoaXMubWF4aW11bUlucHV0TGVuZ3RoKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgbWVzc2FnZTogJ2lucHV0VG9vTG9uZycsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBtYXhpbXVtOiB0aGlzLm1heGltdW1JbnB1dExlbmd0aCxcbiAgICAgICAgICBpbnB1dDogcGFyYW1zLnRlcm0sXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICByZXR1cm4gTWF4aW11bUlucHV0TGVuZ3RoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL21heGltdW1TZWxlY3Rpb25MZW5ndGgnLFtcblxuXSwgZnVuY3Rpb24gKCl7XG4gIGZ1bmN0aW9uIE1heGltdW1TZWxlY3Rpb25MZW5ndGggKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm1heGltdW1TZWxlY3Rpb25MZW5ndGggPSBvcHRpb25zLmdldCgnbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aC5wcm90b3R5cGUuYmluZCA9XG4gICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9jaGVja0lmTWF4aW11bVNlbGVjdGVkKCk7XG4gICAgICB9KTtcbiAgfTtcblxuICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9XG4gICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9jaGVja0lmTWF4aW11bVNlbGVjdGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVjb3JhdGVkLmNhbGwoc2VsZiwgcGFyYW1zLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgfTtcblxuICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoLnByb3RvdHlwZS5fY2hlY2tJZk1heGltdW1TZWxlY3RlZCA9XG4gICAgZnVuY3Rpb24gKF8sIHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIHZhciBjb3VudCA9IGN1cnJlbnREYXRhICE9IG51bGwgPyBjdXJyZW50RGF0YS5sZW5ndGggOiAwO1xuICAgICAgICBpZiAoc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoID4gMCAmJlxuICAgICAgICAgIGNvdW50ID49IHNlbGYubWF4aW11bVNlbGVjdGlvbkxlbmd0aCkge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICAgICAgbWVzc2FnZTogJ21heGltdW1TZWxlY3RlZCcsXG4gICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgIG1heGltdW06IHNlbGYubWF4aW11bVNlbGVjdGlvbkxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1heGltdW1TZWxlY3Rpb25MZW5ndGg7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duJyxbXG4gICdqcXVlcnknLFxuICAnLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBEcm9wZG93biAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIERyb3Bkb3duLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKERyb3Bkb3duLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZHJvcGRvd24gPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1kcm9wZG93blwiPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNcIj48L3NwYW4+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgJGRyb3Bkb3duLmF0dHIoJ2RpcicsIHRoaXMub3B0aW9ucy5nZXQoJ2RpcicpKTtcblxuICAgIHRoaXMuJGRyb3Bkb3duID0gJGRyb3Bkb3duO1xuXG4gICAgcmV0dXJuICRkcm9wZG93bjtcbiAgfTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTaG91bGQgYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5wb3NpdGlvbiA9IGZ1bmN0aW9uICgkZHJvcGRvd24sICRjb250YWluZXIpIHtcbiAgICAvLyBTaG91bGQgYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgZHJvcGRvd24gZnJvbSB0aGUgRE9NXG4gICAgdGhpcy4kZHJvcGRvd24ucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9zZWFyY2gnLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBTZWFyY2ggKCkgeyB9XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdmFyICRyZW5kZXJlZCA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuXG4gICAgdmFyICRzZWFyY2ggPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duXCI+JyArXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCItMVwiJyArXG4gICAgICAgICcgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIicgK1xuICAgICAgICAnIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJzZWFyY2hib3hcIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiAvPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgIHRoaXMuJHNlYXJjaENvbnRhaW5lciA9ICRzZWFyY2g7XG4gICAgdGhpcy4kc2VhcmNoID0gJHNlYXJjaC5maW5kKCdpbnB1dCcpO1xuXG4gICAgJHJlbmRlcmVkLnByZXBlbmQoJHNlYXJjaCk7XG5cbiAgICByZXR1cm4gJHJlbmRlcmVkO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciByZXN1bHRzSWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIHRoaXMuJHNlYXJjaC5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcigna2V5cHJlc3MnLCBldnQpO1xuXG4gICAgICBzZWxmLl9rZXlVcFByZXZlbnRlZCA9IGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICB9KTtcblxuICAgIC8vIFdvcmthcm91bmQgZm9yIGJyb3dzZXJzIHdoaWNoIGRvIG5vdCBzdXBwb3J0IHRoZSBgaW5wdXRgIGV2ZW50XG4gICAgLy8gVGhpcyB3aWxsIHByZXZlbnQgZG91YmxlLXRyaWdnZXJpbmcgb2YgZXZlbnRzIGZvciBicm93c2VycyB3aGljaCBzdXBwb3J0XG4gICAgLy8gYm90aCB0aGUgYGtleXVwYCBhbmQgYGlucHV0YCBldmVudHMuXG4gICAgdGhpcy4kc2VhcmNoLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIFVuYmluZCB0aGUgZHVwbGljYXRlZCBga2V5dXBgIGV2ZW50XG4gICAgICAkKHRoaXMpLm9mZigna2V5dXAnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlYXJjaC5vbigna2V5dXAgaW5wdXQnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLmhhbmRsZVNlYXJjaChldnQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgMCk7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1jb250cm9scycsIHJlc3VsdHNJZCk7XG5cbiAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgLTEpO1xuICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcblxuICAgICAgc2VsZi4kc2VhcmNoLnZhbCgnJyk7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignYmx1cicpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFsbCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIGlmIChwYXJhbXMucXVlcnkudGVybSA9PSBudWxsIHx8IHBhcmFtcy5xdWVyeS50ZXJtID09PSAnJykge1xuICAgICAgICB2YXIgc2hvd1NlYXJjaCA9IHNlbGYuc2hvd1NlYXJjaChwYXJhbXMpO1xuXG4gICAgICAgIGlmIChzaG93U2VhcmNoKSB7XG4gICAgICAgICAgc2VsZi4kc2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLXNlYXJjaC0taGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuJHNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1zZWFyY2gtLWhpZGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgaWYgKHBhcmFtcy5kYXRhLl9yZXN1bHRJZCkge1xuICAgICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgcGFyYW1zLmRhdGEuX3Jlc3VsdElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmhhbmRsZVNlYXJjaCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoIXRoaXMuX2tleVVwUHJldmVudGVkKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLiRzZWFyY2gudmFsKCk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7XG4gICAgICAgIHRlcm06IGlucHV0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9rZXlVcFByZXZlbnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuc2hvd1NlYXJjaCA9IGZ1bmN0aW9uIChfLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4gU2VhcmNoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9oaWRlUGxhY2Vob2xkZXInLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIaWRlUGxhY2Vob2xkZXIgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubm9ybWFsaXplUGxhY2Vob2xkZXIob3B0aW9ucy5nZXQoJ3BsYWNlaG9sZGVyJykpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKTtcbiAgfVxuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIGRhdGEucmVzdWx0cyA9IHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoZGF0YS5yZXN1bHRzKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9O1xuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUubm9ybWFsaXplUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgcGxhY2Vob2xkZXIpIHtcbiAgICBpZiAodHlwZW9mIHBsYWNlaG9sZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGV4dDogcGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9O1xuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUucmVtb3ZlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgZGF0YSkge1xuICAgIHZhciBtb2RpZmllZERhdGEgPSBkYXRhLnNsaWNlKDApO1xuXG4gICAgZm9yICh2YXIgZCA9IGRhdGEubGVuZ3RoIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgIHZhciBpdGVtID0gZGF0YVtkXTtcblxuICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIuaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgbW9kaWZpZWREYXRhLnNwbGljZShkLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kaWZpZWREYXRhO1xuICB9O1xuXG4gIHJldHVybiBIaWRlUGxhY2Vob2xkZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2luZmluaXRlU2Nyb2xsJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBJbmZpbml0ZVNjcm9sbCAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLmxhc3RQYXJhbXMgPSB7fTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcik7XG5cbiAgICB0aGlzLiRsb2FkaW5nTW9yZSA9IHRoaXMuY3JlYXRlTG9hZGluZ01vcmUoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgdGhpcy4kbG9hZGluZ01vcmUucmVtb3ZlKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgIGlmICh0aGlzLnNob3dMb2FkaW5nTW9yZShkYXRhKSkge1xuICAgICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQodGhpcy4kbG9hZGluZ01vcmUpO1xuICAgICAgdGhpcy5sb2FkTW9yZUlmTmVlZGVkKCk7XG4gICAgfVxuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbigncXVlcnknLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmxhc3RQYXJhbXMgPSBwYXJhbXM7XG4gICAgICBzZWxmLmxvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdxdWVyeTphcHBlbmQnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmxhc3RQYXJhbXMgPSBwYXJhbXM7XG4gICAgICBzZWxmLmxvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5vbignc2Nyb2xsJywgdGhpcy5sb2FkTW9yZUlmTmVlZGVkLmJpbmQodGhpcykpO1xuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5sb2FkTW9yZUlmTmVlZGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc0xvYWRNb3JlVmlzaWJsZSA9ICQuY29udGFpbnMoXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICB0aGlzLiRsb2FkaW5nTW9yZVswXVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5sb2FkaW5nIHx8ICFpc0xvYWRNb3JlVmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gdGhpcy4kcmVzdWx0cy5vZmZzZXQoKS50b3AgK1xuICAgICAgdGhpcy4kcmVzdWx0cy5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgdmFyIGxvYWRpbmdNb3JlT2Zmc2V0ID0gdGhpcy4kbG9hZGluZ01vcmUub2Zmc2V0KCkudG9wICtcbiAgICAgIHRoaXMuJGxvYWRpbmdNb3JlLm91dGVySGVpZ2h0KGZhbHNlKTtcblxuICAgIGlmIChjdXJyZW50T2Zmc2V0ICsgNTAgPj0gbG9hZGluZ01vcmVPZmZzZXQpIHtcbiAgICAgIHRoaXMubG9hZE1vcmUoKTtcbiAgICB9XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmxvYWRNb3JlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICB2YXIgcGFyYW1zID0gJC5leHRlbmQoe30sIHtwYWdlOiAxfSwgdGhpcy5sYXN0UGFyYW1zKTtcblxuICAgIHBhcmFtcy5wYWdlKys7XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5OmFwcGVuZCcsIHBhcmFtcyk7XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLnNob3dMb2FkaW5nTW9yZSA9IGZ1bmN0aW9uIChfLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEucGFnaW5hdGlvbiAmJiBkYXRhLnBhZ2luYXRpb24ubW9yZTtcbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuY3JlYXRlTG9hZGluZ01vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRvcHRpb24gPSAkKFxuICAgICAgJzxsaSAnICtcbiAgICAgICdjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1sb2FkLW1vcmVcIicgK1xuICAgICAgJ3JvbGU9XCJvcHRpb25cIiBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiPjwvbGk+J1xuICAgICk7XG5cbiAgICB2YXIgbWVzc2FnZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RyYW5zbGF0aW9ucycpLmdldCgnbG9hZGluZ01vcmUnKTtcblxuICAgICRvcHRpb24uaHRtbChtZXNzYWdlKHRoaXMubGFzdFBhcmFtcykpO1xuXG4gICAgcmV0dXJuICRvcHRpb247XG4gIH07XG5cbiAgcmV0dXJuIEluZmluaXRlU2Nyb2xsO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9hdHRhY2hCb2R5JyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gQXR0YWNoQm9keSAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGRyb3Bkb3duUGFyZW50ID0gJChvcHRpb25zLmdldCgnZHJvcGRvd25QYXJlbnQnKSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fc2hvd0Ryb3Bkb3duKCk7XG4gICAgICBzZWxmLl9hdHRhY2hQb3NpdGlvbmluZ0hhbmRsZXIoY29udGFpbmVyKTtcblxuICAgICAgLy8gTXVzdCBiaW5kIGFmdGVyIHRoZSByZXN1bHRzIGhhbmRsZXJzIHRvIGVuc3VyZSBjb3JyZWN0IHNpemluZ1xuICAgICAgc2VsZi5fYmluZENvbnRhaW5lclJlc3VsdEhhbmRsZXJzKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5faGlkZURyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgJGRyb3Bkb3duLCAkY29udGFpbmVyKSB7XG4gICAgLy8gQ2xvbmUgYWxsIG9mIHRoZSBjb250YWluZXIgY2xhc3Nlc1xuICAgICRkcm9wZG93bi5hdHRyKCdjbGFzcycsICRjb250YWluZXIuYXR0cignY2xhc3MnKSk7XG5cbiAgICAkZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ3NlbGVjdDInKTtcbiAgICAkZHJvcGRvd24uYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG5cbiAgICAkZHJvcGRvd24uY3NzKHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAtOTk5OTk5XG4gICAgfSk7XG5cbiAgICB0aGlzLiRjb250YWluZXIgPSAkY29udGFpbmVyO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoJzxzcGFuPjwvc3Bhbj4nKTtcblxuICAgIHZhciAkZHJvcGRvd24gPSBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcbiAgICAkY29udGFpbmVyLmFwcGVuZCgkZHJvcGRvd24pO1xuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIgPSAkY29udGFpbmVyO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX2hpZGVEcm9wZG93biA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5kZXRhY2goKTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fYmluZENvbnRhaW5lclJlc3VsdEhhbmRsZXJzID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuXG4gICAgLy8gVGhlc2Ugc2hvdWxkIG9ubHkgYmUgYm91bmQgb25jZVxuICAgIGlmICh0aGlzLl9jb250YWluZXJSZXN1bHRzSGFuZGxlcnNCb3VuZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFwcGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bWVzc2FnZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kID0gdHJ1ZTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBzY3JvbGxFdmVudCA9ICdzY3JvbGwuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciByZXNpemVFdmVudCA9ICdyZXNpemUuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciBvcmllbnRhdGlvbkV2ZW50ID0gJ29yaWVudGF0aW9uY2hhbmdlLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcblxuICAgIHZhciAkd2F0Y2hlcnMgPSB0aGlzLiRjb250YWluZXIucGFyZW50cygpLmZpbHRlcihVdGlscy5oYXNTY3JvbGwpO1xuICAgICR3YXRjaGVycy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIFV0aWxzLlN0b3JlRGF0YSh0aGlzLCAnc2VsZWN0Mi1zY3JvbGwtcG9zaXRpb24nLCB7XG4gICAgICAgIHg6ICQodGhpcykuc2Nyb2xsTGVmdCgpLFxuICAgICAgICB5OiAkKHRoaXMpLnNjcm9sbFRvcCgpXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgICR3YXRjaGVycy5vbihzY3JvbGxFdmVudCwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBVdGlscy5HZXREYXRhKHRoaXMsICdzZWxlY3QyLXNjcm9sbC1wb3NpdGlvbicpO1xuICAgICAgJCh0aGlzKS5zY3JvbGxUb3AocG9zaXRpb24ueSk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oc2Nyb2xsRXZlbnQgKyAnICcgKyByZXNpemVFdmVudCArICcgJyArIG9yaWVudGF0aW9uRXZlbnQsXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fZGV0YWNoUG9zaXRpb25pbmdIYW5kbGVyID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuICAgIHZhciBzY3JvbGxFdmVudCA9ICdzY3JvbGwuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciByZXNpemVFdmVudCA9ICdyZXNpemUuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciBvcmllbnRhdGlvbkV2ZW50ID0gJ29yaWVudGF0aW9uY2hhbmdlLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcblxuICAgIHZhciAkd2F0Y2hlcnMgPSB0aGlzLiRjb250YWluZXIucGFyZW50cygpLmZpbHRlcihVdGlscy5oYXNTY3JvbGwpO1xuICAgICR3YXRjaGVycy5vZmYoc2Nyb2xsRXZlbnQpO1xuXG4gICAgJCh3aW5kb3cpLm9mZihzY3JvbGxFdmVudCArICcgJyArIHJlc2l6ZUV2ZW50ICsgJyAnICsgb3JpZW50YXRpb25FdmVudCk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX3Bvc2l0aW9uRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XG5cbiAgICB2YXIgaXNDdXJyZW50bHlBYm92ZSA9IHRoaXMuJGRyb3Bkb3duLmhhc0NsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS1hYm92ZScpO1xuICAgIHZhciBpc0N1cnJlbnRseUJlbG93ID0gdGhpcy4kZHJvcGRvd24uaGFzQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLWJlbG93Jyk7XG5cbiAgICB2YXIgbmV3RGlyZWN0aW9uID0gbnVsbDtcblxuICAgIHZhciBvZmZzZXQgPSB0aGlzLiRjb250YWluZXIub2Zmc2V0KCk7XG5cbiAgICBvZmZzZXQuYm90dG9tID0gb2Zmc2V0LnRvcCArIHRoaXMuJGNvbnRhaW5lci5vdXRlckhlaWdodChmYWxzZSk7XG5cbiAgICB2YXIgY29udGFpbmVyID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLiRjb250YWluZXIub3V0ZXJIZWlnaHQoZmFsc2UpXG4gICAgfTtcblxuICAgIGNvbnRhaW5lci50b3AgPSBvZmZzZXQudG9wO1xuICAgIGNvbnRhaW5lci5ib3R0b20gPSBvZmZzZXQudG9wICsgY29udGFpbmVyLmhlaWdodDtcblxuICAgIHZhciBkcm9wZG93biA9IHtcbiAgICAgIGhlaWdodDogdGhpcy4kZHJvcGRvd24ub3V0ZXJIZWlnaHQoZmFsc2UpXG4gICAgfTtcblxuICAgIHZhciB2aWV3cG9ydCA9IHtcbiAgICAgIHRvcDogJHdpbmRvdy5zY3JvbGxUb3AoKSxcbiAgICAgIGJvdHRvbTogJHdpbmRvdy5zY3JvbGxUb3AoKSArICR3aW5kb3cuaGVpZ2h0KClcbiAgICB9O1xuXG4gICAgdmFyIGVub3VnaFJvb21BYm92ZSA9IHZpZXdwb3J0LnRvcCA8IChvZmZzZXQudG9wIC0gZHJvcGRvd24uaGVpZ2h0KTtcbiAgICB2YXIgZW5vdWdoUm9vbUJlbG93ID0gdmlld3BvcnQuYm90dG9tID4gKG9mZnNldC5ib3R0b20gKyBkcm9wZG93bi5oZWlnaHQpO1xuXG4gICAgdmFyIGNzcyA9IHtcbiAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0LFxuICAgICAgdG9wOiBjb250YWluZXIuYm90dG9tXG4gICAgfTtcblxuICAgIC8vIERldGVybWluZSB3aGF0IHRoZSBwYXJlbnQgZWxlbWVudCBpcyB0byB1c2UgZm9yIGNhbGN1bGF0aW5nIHRoZSBvZmZzZXRcbiAgICB2YXIgJG9mZnNldFBhcmVudCA9IHRoaXMuJGRyb3Bkb3duUGFyZW50O1xuXG4gICAgLy8gRm9yIHN0YXRpY2FsbHkgcG9zaXRpb25lZCBlbGVtZW50cywgd2UgbmVlZCB0byBnZXQgdGhlIGVsZW1lbnRcbiAgICAvLyB0aGF0IGlzIGRldGVybWluaW5nIHRoZSBvZmZzZXRcbiAgICBpZiAoJG9mZnNldFBhcmVudC5jc3MoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAkb2Zmc2V0UGFyZW50ID0gJG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQoKTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50T2Zmc2V0ID0ge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG5cbiAgICBpZiAoXG4gICAgICAkLmNvbnRhaW5zKGRvY3VtZW50LmJvZHksICRvZmZzZXRQYXJlbnRbMF0pIHx8XG4gICAgICAkb2Zmc2V0UGFyZW50WzBdLmlzQ29ubmVjdGVkXG4gICAgICApIHtcbiAgICAgIHBhcmVudE9mZnNldCA9ICRvZmZzZXRQYXJlbnQub2Zmc2V0KCk7XG4gICAgfVxuXG4gICAgY3NzLnRvcCAtPSBwYXJlbnRPZmZzZXQudG9wO1xuICAgIGNzcy5sZWZ0IC09IHBhcmVudE9mZnNldC5sZWZ0O1xuXG4gICAgaWYgKCFpc0N1cnJlbnRseUFib3ZlICYmICFpc0N1cnJlbnRseUJlbG93KSB7XG4gICAgICBuZXdEaXJlY3Rpb24gPSAnYmVsb3cnO1xuICAgIH1cblxuICAgIGlmICghZW5vdWdoUm9vbUJlbG93ICYmIGVub3VnaFJvb21BYm92ZSAmJiAhaXNDdXJyZW50bHlBYm92ZSkge1xuICAgICAgbmV3RGlyZWN0aW9uID0gJ2Fib3ZlJztcbiAgICB9IGVsc2UgaWYgKCFlbm91Z2hSb29tQWJvdmUgJiYgZW5vdWdoUm9vbUJlbG93ICYmIGlzQ3VycmVudGx5QWJvdmUpIHtcbiAgICAgIG5ld0RpcmVjdGlvbiA9ICdiZWxvdyc7XG4gICAgfVxuXG4gICAgaWYgKG5ld0RpcmVjdGlvbiA9PSAnYWJvdmUnIHx8XG4gICAgICAoaXNDdXJyZW50bHlBYm92ZSAmJiBuZXdEaXJlY3Rpb24gIT09ICdiZWxvdycpKSB7XG4gICAgICBjc3MudG9wID0gY29udGFpbmVyLnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBkcm9wZG93bi5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKG5ld0RpcmVjdGlvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLiRkcm9wZG93blxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLWJlbG93IHNlbGVjdDItZHJvcGRvd24tLWFib3ZlJylcbiAgICAgICAgLmFkZENsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS0nICsgbmV3RGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuJGNvbnRhaW5lclxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1iZWxvdyBzZWxlY3QyLWNvbnRhaW5lci0tYWJvdmUnKVxuICAgICAgICAuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS0nICsgbmV3RGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5jc3MoY3NzKTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fcmVzaXplRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNzcyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLiRjb250YWluZXIub3V0ZXJXaWR0aChmYWxzZSkgKyAncHgnXG4gICAgfTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkcm9wZG93bkF1dG9XaWR0aCcpKSB7XG4gICAgICBjc3MubWluV2lkdGggPSBjc3Mud2lkdGg7XG4gICAgICBjc3MucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgY3NzLndpZHRoID0gJ2F1dG8nO1xuICAgIH1cblxuICAgIHRoaXMuJGRyb3Bkb3duLmNzcyhjc3MpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9zaG93RHJvcGRvd24gPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIuYXBwZW5kVG8odGhpcy4kZHJvcGRvd25QYXJlbnQpO1xuXG4gICAgdGhpcy5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgIHRoaXMuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gIH07XG5cbiAgcmV0dXJuIEF0dGFjaEJvZHk7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gY291bnRSZXN1bHRzIChkYXRhKSB7XG4gICAgdmFyIGNvdW50ID0gMDtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGl0ZW0gPSBkYXRhW2RdO1xuXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICBjb3VudCArPSBjb3VudFJlc3VsdHMoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xuICAgIHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSBvcHRpb25zLmdldCgnbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnKTtcblxuICAgIGlmICh0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIDwgMCkge1xuICAgICAgdGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IEluZmluaXR5O1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcik7XG4gIH1cblxuICBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaC5wcm90b3R5cGUuc2hvd1NlYXJjaCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcykge1xuICAgIGlmIChjb3VudFJlc3VsdHMocGFyYW1zLmRhdGEucmVzdWx0cykgPCB0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcyk7XG4gIH07XG5cbiAgcmV0dXJuIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9zZWxlY3RPbkNsb3NlJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBTZWxlY3RPbkNsb3NlICgpIHsgfVxuXG4gIFNlbGVjdE9uQ2xvc2UucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuX2hhbmRsZVNlbGVjdE9uQ2xvc2UocGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RPbkNsb3NlLnByb3RvdHlwZS5faGFuZGxlU2VsZWN0T25DbG9zZSA9IGZ1bmN0aW9uIChfLCBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5vcmlnaW5hbFNlbGVjdDJFdmVudCAhPSBudWxsKSB7XG4gICAgICB2YXIgZXZlbnQgPSBwYXJhbXMub3JpZ2luYWxTZWxlY3QyRXZlbnQ7XG5cbiAgICAgIC8vIERvbid0IHNlbGVjdCBhbiBpdGVtIGlmIHRoZSBjbG9zZSBldmVudCB3YXMgdHJpZ2dlcmVkIGZyb20gYSBzZWxlY3Qgb3JcbiAgICAgIC8vIHVuc2VsZWN0IGV2ZW50XG4gICAgICBpZiAoZXZlbnQuX3R5cGUgPT09ICdzZWxlY3QnIHx8IGV2ZW50Ll90eXBlID09PSAndW5zZWxlY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgJGhpZ2hsaWdodGVkUmVzdWx0cyA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAvLyBPbmx5IHNlbGVjdCBoaWdobGlnaHRlZCByZXN1bHRzXG4gICAgaWYgKCRoaWdobGlnaHRlZFJlc3VsdHMubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSgkaGlnaGxpZ2h0ZWRSZXN1bHRzWzBdLCAnZGF0YScpO1xuXG4gICAgLy8gRG9uJ3QgcmUtc2VsZWN0IGFscmVhZHkgc2VsZWN0ZWQgcmVzdWx0ZVxuICAgIGlmIChcbiAgICAgIChkYXRhLmVsZW1lbnQgIT0gbnVsbCAmJiBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQpIHx8XG4gICAgICAoZGF0YS5lbGVtZW50ID09IG51bGwgJiYgZGF0YS5zZWxlY3RlZClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3RPbkNsb3NlO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9jbG9zZU9uU2VsZWN0JyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2xvc2VPblNlbGVjdCAoKSB7IH1cblxuICBDbG9zZU9uU2VsZWN0LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5fc2VsZWN0VHJpZ2dlcmVkKGV2dCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5fc2VsZWN0VHJpZ2dlcmVkKGV2dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ2xvc2VPblNlbGVjdC5wcm90b3R5cGUuX3NlbGVjdFRyaWdnZXJlZCA9IGZ1bmN0aW9uIChfLCBldnQpIHtcbiAgICB2YXIgb3JpZ2luYWxFdmVudCA9IGV2dC5vcmlnaW5hbEV2ZW50O1xuXG4gICAgLy8gRG9uJ3QgY2xvc2UgaWYgdGhlIGNvbnRyb2wga2V5IGlzIGJlaW5nIGhlbGRcbiAgICBpZiAob3JpZ2luYWxFdmVudCAmJiAob3JpZ2luYWxFdmVudC5jdHJsS2V5IHx8IG9yaWdpbmFsRXZlbnQubWV0YUtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ2Nsb3NlJywge1xuICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcbiAgICAgIG9yaWdpbmFsU2VsZWN0MkV2ZW50OiBldnRcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ2xvc2VPblNlbGVjdDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvaTE4bi9lbicsW10sZnVuY3Rpb24gKCkge1xuICAvLyBFbmdsaXNoXG4gIHJldHVybiB7XG4gICAgZXJyb3JMb2FkaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ1RoZSByZXN1bHRzIGNvdWxkIG5vdCBiZSBsb2FkZWQuJztcbiAgICB9LFxuICAgIGlucHV0VG9vTG9uZzogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHZhciBvdmVyQ2hhcnMgPSBhcmdzLmlucHV0Lmxlbmd0aCAtIGFyZ3MubWF4aW11bTtcblxuICAgICAgdmFyIG1lc3NhZ2UgPSAnUGxlYXNlIGRlbGV0ZSAnICsgb3ZlckNoYXJzICsgJyBjaGFyYWN0ZXInO1xuXG4gICAgICBpZiAob3ZlckNoYXJzICE9IDEpIHtcbiAgICAgICAgbWVzc2FnZSArPSAncyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG4gICAgaW5wdXRUb29TaG9ydDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHZhciByZW1haW5pbmdDaGFycyA9IGFyZ3MubWluaW11bSAtIGFyZ3MuaW5wdXQubGVuZ3RoO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9ICdQbGVhc2UgZW50ZXIgJyArIHJlbWFpbmluZ0NoYXJzICsgJyBvciBtb3JlIGNoYXJhY3RlcnMnO1xuXG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ0xvYWRpbmcgbW9yZSByZXN1bHRz4oCmJztcbiAgICB9LFxuICAgIG1heGltdW1TZWxlY3RlZDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1lvdSBjYW4gb25seSBzZWxlY3QgJyArIGFyZ3MubWF4aW11bSArICcgaXRlbSc7XG5cbiAgICAgIGlmIChhcmdzLm1heGltdW0gIT0gMSkge1xuICAgICAgICBtZXNzYWdlICs9ICdzJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICBub1Jlc3VsdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnTm8gcmVzdWx0cyBmb3VuZCc7XG4gICAgfSxcbiAgICBzZWFyY2hpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnU2VhcmNoaW5n4oCmJztcbiAgICB9LFxuICAgIHJlbW92ZUFsbEl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ1JlbW92ZSBhbGwgaXRlbXMnO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGVmYXVsdHMnLFtcbiAgJ2pxdWVyeScsXG4gICdyZXF1aXJlJyxcblxuICAnLi9yZXN1bHRzJyxcblxuICAnLi9zZWxlY3Rpb24vc2luZ2xlJyxcbiAgJy4vc2VsZWN0aW9uL211bHRpcGxlJyxcbiAgJy4vc2VsZWN0aW9uL3BsYWNlaG9sZGVyJyxcbiAgJy4vc2VsZWN0aW9uL2FsbG93Q2xlYXInLFxuICAnLi9zZWxlY3Rpb24vc2VhcmNoJyxcbiAgJy4vc2VsZWN0aW9uL2V2ZW50UmVsYXknLFxuXG4gICcuL3V0aWxzJyxcbiAgJy4vdHJhbnNsYXRpb24nLFxuICAnLi9kaWFjcml0aWNzJyxcblxuICAnLi9kYXRhL3NlbGVjdCcsXG4gICcuL2RhdGEvYXJyYXknLFxuICAnLi9kYXRhL2FqYXgnLFxuICAnLi9kYXRhL3RhZ3MnLFxuICAnLi9kYXRhL3Rva2VuaXplcicsXG4gICcuL2RhdGEvbWluaW11bUlucHV0TGVuZ3RoJyxcbiAgJy4vZGF0YS9tYXhpbXVtSW5wdXRMZW5ndGgnLFxuICAnLi9kYXRhL21heGltdW1TZWxlY3Rpb25MZW5ndGgnLFxuXG4gICcuL2Ryb3Bkb3duJyxcbiAgJy4vZHJvcGRvd24vc2VhcmNoJyxcbiAgJy4vZHJvcGRvd24vaGlkZVBsYWNlaG9sZGVyJyxcbiAgJy4vZHJvcGRvd24vaW5maW5pdGVTY3JvbGwnLFxuICAnLi9kcm9wZG93bi9hdHRhY2hCb2R5JyxcbiAgJy4vZHJvcGRvd24vbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnLFxuICAnLi9kcm9wZG93bi9zZWxlY3RPbkNsb3NlJyxcbiAgJy4vZHJvcGRvd24vY2xvc2VPblNlbGVjdCcsXG5cbiAgJy4vaTE4bi9lbidcbl0sIGZ1bmN0aW9uICgkLCByZXF1aXJlLFxuXG4gICAgICAgICAgICAgUmVzdWx0c0xpc3QsXG5cbiAgICAgICAgICAgICBTaW5nbGVTZWxlY3Rpb24sIE11bHRpcGxlU2VsZWN0aW9uLCBQbGFjZWhvbGRlciwgQWxsb3dDbGVhcixcbiAgICAgICAgICAgICBTZWxlY3Rpb25TZWFyY2gsIEV2ZW50UmVsYXksXG5cbiAgICAgICAgICAgICBVdGlscywgVHJhbnNsYXRpb24sIERJQUNSSVRJQ1MsXG5cbiAgICAgICAgICAgICBTZWxlY3REYXRhLCBBcnJheURhdGEsIEFqYXhEYXRhLCBUYWdzLCBUb2tlbml6ZXIsXG4gICAgICAgICAgICAgTWluaW11bUlucHV0TGVuZ3RoLCBNYXhpbXVtSW5wdXRMZW5ndGgsIE1heGltdW1TZWxlY3Rpb25MZW5ndGgsXG5cbiAgICAgICAgICAgICBEcm9wZG93biwgRHJvcGRvd25TZWFyY2gsIEhpZGVQbGFjZWhvbGRlciwgSW5maW5pdGVTY3JvbGwsXG4gICAgICAgICAgICAgQXR0YWNoQm9keSwgTWluaW11bVJlc3VsdHNGb3JTZWFyY2gsIFNlbGVjdE9uQ2xvc2UsIENsb3NlT25TZWxlY3QsXG5cbiAgICAgICAgICAgICBFbmdsaXNoVHJhbnNsYXRpb24pIHtcbiAgZnVuY3Rpb24gRGVmYXVsdHMgKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmIChvcHRpb25zLmRhdGFBZGFwdGVyID09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmFqYXggIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gQWpheERhdGE7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBBcnJheURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gU2VsZWN0RGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNaW5pbXVtSW5wdXRMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWF4aW11bUlucHV0TGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNYXhpbXVtSW5wdXRMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWF4aW11bVNlbGVjdGlvbkxlbmd0aCA+IDApIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50YWdzKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShvcHRpb25zLmRhdGFBZGFwdGVyLCBUYWdzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudG9rZW5TZXBhcmF0b3JzICE9IG51bGwgfHwgb3B0aW9ucy50b2tlbml6ZXIgIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBUb2tlbml6ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucXVlcnkgIT0gbnVsbCkge1xuICAgICAgICB2YXIgUXVlcnkgPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvcXVlcnknKTtcblxuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBRdWVyeVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5pbml0U2VsZWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgdmFyIEluaXRTZWxlY3Rpb24gPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvaW5pdFNlbGVjdGlvbicpO1xuXG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIEluaXRTZWxlY3Rpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gUmVzdWx0c0xpc3Q7XG5cbiAgICAgIGlmIChvcHRpb25zLmFqYXggIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlcixcbiAgICAgICAgICBJbmZpbml0ZVNjcm9sbFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wbGFjZWhvbGRlciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIEhpZGVQbGFjZWhvbGRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5zZWxlY3RPbkNsb3NlKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIFNlbGVjdE9uQ2xvc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBEcm9wZG93bjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBTZWFyY2hhYmxlRHJvcGRvd24gPSBVdGlscy5EZWNvcmF0ZShEcm9wZG93biwgRHJvcGRvd25TZWFyY2gpO1xuXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gU2VhcmNoYWJsZURyb3Bkb3duO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCAhPT0gMCkge1xuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICAgIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlcixcbiAgICAgICAgICBDbG9zZU9uU2VsZWN0XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzICE9IG51bGwgfHxcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkNzcyAhPSBudWxsIHx8XG4gICAgICAgIG9wdGlvbnMuYWRhcHREcm9wZG93bkNzc0NsYXNzICE9IG51bGxcbiAgICAgICkge1xuICAgICAgICB2YXIgRHJvcGRvd25DU1MgPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvZHJvcGRvd25Dc3MnKTtcblxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICAgIERyb3Bkb3duQ1NTXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICBBdHRhY2hCb2R5XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gTXVsdGlwbGVTZWxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBTaW5nbGVTZWxlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgcGxhY2Vob2xkZXIgbWl4aW4gaWYgYSBwbGFjZWhvbGRlciB3YXMgc3BlY2lmaWVkXG4gICAgICBpZiAob3B0aW9ucy5wbGFjZWhvbGRlciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBQbGFjZWhvbGRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hbGxvd0NsZWFyKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBBbGxvd0NsZWFyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm11bHRpcGxlKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBTZWxlY3Rpb25TZWFyY2hcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBvcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzICE9IG51bGwgfHxcbiAgICAgICAgb3B0aW9ucy5jb250YWluZXJDc3MgIT0gbnVsbCB8fFxuICAgICAgICBvcHRpb25zLmFkYXB0Q29udGFpbmVyQ3NzQ2xhc3MgIT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHZhciBDb250YWluZXJDU1MgPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvY29udGFpbmVyQ3NzJyk7XG5cbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIENvbnRhaW5lckNTU1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICBFdmVudFJlbGF5XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBkZWZhdWx0cyB3ZXJlIG5vdCBwcmV2aW91c2x5IGFwcGxpZWQgZnJvbSBhbiBlbGVtZW50LCBpdCBpc1xuICAgIC8vIHBvc3NpYmxlIGZvciB0aGUgbGFuZ3VhZ2Ugb3B0aW9uIHRvIGhhdmUgbm90IGJlZW4gcmVzb2x2ZWRcbiAgICBvcHRpb25zLmxhbmd1YWdlID0gdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKG9wdGlvbnMubGFuZ3VhZ2UpO1xuXG4gICAgLy8gQWx3YXlzIGZhbGwgYmFjayB0byBFbmdsaXNoIHNpbmNlIGl0IHdpbGwgYWx3YXlzIGJlIGNvbXBsZXRlXG4gICAgb3B0aW9ucy5sYW5ndWFnZS5wdXNoKCdlbicpO1xuXG4gICAgdmFyIHVuaXF1ZUxhbmd1YWdlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgbCA9IDA7IGwgPCBvcHRpb25zLmxhbmd1YWdlLmxlbmd0aDsgbCsrKSB7XG4gICAgICB2YXIgbGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlW2xdO1xuXG4gICAgICBpZiAodW5pcXVlTGFuZ3VhZ2VzLmluZGV4T2YobGFuZ3VhZ2UpID09PSAtMSkge1xuICAgICAgICB1bmlxdWVMYW5ndWFnZXMucHVzaChsYW5ndWFnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9ucy5sYW5ndWFnZSA9IHVuaXF1ZUxhbmd1YWdlcztcblxuICAgIG9wdGlvbnMudHJhbnNsYXRpb25zID0gdGhpcy5fcHJvY2Vzc1RyYW5zbGF0aW9ucyhcbiAgICAgIG9wdGlvbnMubGFuZ3VhZ2UsXG4gICAgICBvcHRpb25zLmRlYnVnXG4gICAgKTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3MgKHRleHQpIHtcbiAgICAgIC8vIFVzZWQgJ3VuaSByYW5nZSArIG5hbWVkIGZ1bmN0aW9uJyBmcm9tIGh0dHA6Ly9qc3BlcmYuY29tL2RpYWNyaXRpY3MvMThcbiAgICAgIGZ1bmN0aW9uIG1hdGNoKGEpIHtcbiAgICAgICAgcmV0dXJuIERJQUNSSVRJQ1NbYV0gfHwgYTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15cXHUwMDAwLVxcdTAwN0VdL2csIG1hdGNoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaGVyIChwYXJhbXMsIGRhdGEpIHtcbiAgICAgIC8vIEFsd2F5cyByZXR1cm4gdGhlIG9iamVjdCBpZiB0aGVyZSBpcyBub3RoaW5nIHRvIGNvbXBhcmVcbiAgICAgIGlmICgkLnRyaW0ocGFyYW1zLnRlcm0pID09PSAnJykge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgLy8gRG8gYSByZWN1cnNpdmUgY2hlY2sgZm9yIG9wdGlvbnMgd2l0aCBjaGlsZHJlblxuICAgICAgaWYgKGRhdGEuY2hpbGRyZW4gJiYgZGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIENsb25lIHRoZSBkYXRhIG9iamVjdCBpZiB0aGVyZSBhcmUgY2hpbGRyZW5cbiAgICAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBhcyB3ZSBtb2RpZnkgdGhlIG9iamVjdCB0byByZW1vdmUgYW55IG5vbi1tYXRjaGVzXG4gICAgICAgIHZhciBtYXRjaCA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkYXRhKTtcblxuICAgICAgICAvLyBDaGVjayBlYWNoIGNoaWxkIG9mIHRoZSBvcHRpb25cbiAgICAgICAgZm9yICh2YXIgYyA9IGRhdGEuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgYyA+PSAwOyBjLS0pIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBkYXRhLmNoaWxkcmVuW2NdO1xuXG4gICAgICAgICAgdmFyIG1hdGNoZXMgPSBtYXRjaGVyKHBhcmFtcywgY2hpbGQpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgd2Fzbid0IGEgbWF0Y2gsIHJlbW92ZSB0aGUgb2JqZWN0IGluIHRoZSBhcnJheVxuICAgICAgICAgIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICAgICAgICAgIG1hdGNoLmNoaWxkcmVuLnNwbGljZShjLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbnkgY2hpbGRyZW4gbWF0Y2hlZCwgcmV0dXJuIHRoZSBuZXcgb2JqZWN0XG4gICAgICAgIGlmIChtYXRjaC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgd2VyZSBubyBtYXRjaGluZyBjaGlsZHJlbiwgY2hlY2sganVzdCB0aGUgcGxhaW4gb2JqZWN0XG4gICAgICAgIHJldHVybiBtYXRjaGVyKHBhcmFtcywgbWF0Y2gpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZ2luYWwgPSBzdHJpcERpYWNyaXRpY3MoZGF0YS50ZXh0KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgdmFyIHRlcm0gPSBzdHJpcERpYWNyaXRpY3MocGFyYW1zLnRlcm0pLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSB0ZXh0IGNvbnRhaW5zIHRoZSB0ZXJtXG4gICAgICBpZiAob3JpZ2luYWwuaW5kZXhPZih0ZXJtKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBkb2Vzbid0IGNvbnRhaW4gdGhlIHRlcm0sIGRvbid0IHJldHVybiBhbnl0aGluZ1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIGFtZEJhc2U6ICcuLycsXG4gICAgICBhbWRMYW5ndWFnZUJhc2U6ICcuL2kxOG4vJyxcbiAgICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICBkcm9wZG93bkF1dG9XaWR0aDogZmFsc2UsXG4gICAgICBlc2NhcGVNYXJrdXA6IFV0aWxzLmVzY2FwZU1hcmt1cCxcbiAgICAgIGxhbmd1YWdlOiB7fSxcbiAgICAgIG1hdGNoZXI6IG1hdGNoZXIsXG4gICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDAsXG4gICAgICBtYXhpbXVtSW5wdXRMZW5ndGg6IDAsXG4gICAgICBtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoOiAwLFxuICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IDAsXG4gICAgICBzZWxlY3RPbkNsb3NlOiBmYWxzZSxcbiAgICAgIHNjcm9sbEFmdGVyU2VsZWN0OiBmYWxzZSxcbiAgICAgIHNvcnRlcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVSZXN1bHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50ZXh0O1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlU2VsZWN0aW9uOiBmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24udGV4dDtcbiAgICAgIH0sXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnLFxuICAgICAgd2lkdGg6ICdyZXNvbHZlJ1xuICAgIH07XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLmFwcGx5RnJvbUVsZW1lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgJGVsZW1lbnQpIHtcbiAgICB2YXIgb3B0aW9uTGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlO1xuICAgIHZhciBkZWZhdWx0TGFuZ3VhZ2UgPSB0aGlzLmRlZmF1bHRzLmxhbmd1YWdlO1xuICAgIHZhciBlbGVtZW50TGFuZ3VhZ2UgPSAkZWxlbWVudC5wcm9wKCdsYW5nJyk7XG4gICAgdmFyIHBhcmVudExhbmd1YWdlID0gJGVsZW1lbnQuY2xvc2VzdCgnW2xhbmddJykucHJvcCgnbGFuZycpO1xuXG4gICAgdmFyIGxhbmd1YWdlcyA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChcbiAgICAgIHRoaXMuX3Jlc29sdmVMYW5ndWFnZShlbGVtZW50TGFuZ3VhZ2UpLFxuICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKG9wdGlvbkxhbmd1YWdlKSxcbiAgICAgIHRoaXMuX3Jlc29sdmVMYW5ndWFnZShkZWZhdWx0TGFuZ3VhZ2UpLFxuICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKHBhcmVudExhbmd1YWdlKVxuICAgICk7XG5cbiAgICBvcHRpb25zLmxhbmd1YWdlID0gbGFuZ3VhZ2VzO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLl9yZXNvbHZlTGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcbiAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKCQuaXNFbXB0eU9iamVjdChsYW5ndWFnZSkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoJC5pc1BsYWluT2JqZWN0KGxhbmd1YWdlKSkge1xuICAgICAgcmV0dXJuIFtsYW5ndWFnZV07XG4gICAgfVxuXG4gICAgdmFyIGxhbmd1YWdlcztcblxuICAgIGlmICghJC5pc0FycmF5KGxhbmd1YWdlKSkge1xuICAgICAgbGFuZ3VhZ2VzID0gW2xhbmd1YWdlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFuZ3VhZ2VzID0gbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgdmFyIHJlc29sdmVkTGFuZ3VhZ2VzID0gW107XG5cbiAgICBmb3IgKHZhciBsID0gMDsgbCA8IGxhbmd1YWdlcy5sZW5ndGg7IGwrKykge1xuICAgICAgcmVzb2x2ZWRMYW5ndWFnZXMucHVzaChsYW5ndWFnZXNbbF0pO1xuXG4gICAgICBpZiAodHlwZW9mIGxhbmd1YWdlc1tsXSA9PT0gJ3N0cmluZycgJiYgbGFuZ3VhZ2VzW2xdLmluZGV4T2YoJy0nKSA+IDApIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgcmVnaW9uIGluZm9ybWF0aW9uIGlmIGl0IGlzIGluY2x1ZGVkXG4gICAgICAgIHZhciBsYW5ndWFnZVBhcnRzID0gbGFuZ3VhZ2VzW2xdLnNwbGl0KCctJyk7XG4gICAgICAgIHZhciBiYXNlTGFuZ3VhZ2UgPSBsYW5ndWFnZVBhcnRzWzBdO1xuXG4gICAgICAgIHJlc29sdmVkTGFuZ3VhZ2VzLnB1c2goYmFzZUxhbmd1YWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZWRMYW5ndWFnZXM7XG4gIH07XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLl9wcm9jZXNzVHJhbnNsYXRpb25zID0gZnVuY3Rpb24gKGxhbmd1YWdlcywgZGVidWcpIHtcbiAgICB2YXIgdHJhbnNsYXRpb25zID0gbmV3IFRyYW5zbGF0aW9uKCk7XG5cbiAgICBmb3IgKHZhciBsID0gMDsgbCA8IGxhbmd1YWdlcy5sZW5ndGg7IGwrKykge1xuICAgICAgdmFyIGxhbmd1YWdlRGF0YSA9IG5ldyBUcmFuc2xhdGlvbigpO1xuXG4gICAgICB2YXIgbGFuZ3VhZ2UgPSBsYW5ndWFnZXNbbF07XG5cbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVHJ5IHRvIGxvYWQgaXQgd2l0aCB0aGUgb3JpZ2luYWwgbmFtZVxuICAgICAgICAgIGxhbmd1YWdlRGF0YSA9IFRyYW5zbGF0aW9uLmxvYWRQYXRoKGxhbmd1YWdlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjb3VsZG4ndCBsb2FkIGl0LCBjaGVjayBpZiBpdCB3YXNuJ3QgdGhlIGZ1bGwgcGF0aFxuICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLmRlZmF1bHRzLmFtZExhbmd1YWdlQmFzZSArIGxhbmd1YWdlO1xuICAgICAgICAgICAgbGFuZ3VhZ2VEYXRhID0gVHJhbnNsYXRpb24ubG9hZFBhdGgobGFuZ3VhZ2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAvLyBUaGUgdHJhbnNsYXRpb24gY291bGQgbm90IGJlIGxvYWRlZCBhdCBhbGwuIFNvbWV0aW1lcyB0aGlzIGlzXG4gICAgICAgICAgICAvLyBiZWNhdXNlIG9mIGEgY29uZmlndXJhdGlvbiBwcm9ibGVtLCBvdGhlciB0aW1lcyB0aGlzIGNhbiBiZVxuICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiBob3cgU2VsZWN0MiBoZWxwcyBsb2FkIGFsbCBwb3NzaWJsZSB0cmFuc2xhdGlvbiBmaWxlc1xuICAgICAgICAgICAgaWYgKGRlYnVnICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBsYW5ndWFnZSBmaWxlIGZvciBcIicgKyBsYW5ndWFnZSArICdcIiBjb3VsZCAnICtcbiAgICAgICAgICAgICAgICAnbm90IGJlIGF1dG9tYXRpY2FsbHkgbG9hZGVkLiBBIGZhbGxiYWNrIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoJC5pc1BsYWluT2JqZWN0KGxhbmd1YWdlKSkge1xuICAgICAgICBsYW5ndWFnZURhdGEgPSBuZXcgVHJhbnNsYXRpb24obGFuZ3VhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFuZ3VhZ2VEYXRhID0gbGFuZ3VhZ2U7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zbGF0aW9ucy5leHRlbmQobGFuZ3VhZ2VEYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25zO1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjYW1lbEtleSA9ICQuY2FtZWxDYXNlKGtleSk7XG5cbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIGRhdGFbY2FtZWxLZXldID0gdmFsdWU7XG5cbiAgICB2YXIgY29udmVydGVkRGF0YSA9IFV0aWxzLl9jb252ZXJ0RGF0YShkYXRhKTtcblxuICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuZGVmYXVsdHMsIGNvbnZlcnRlZERhdGEpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0cyA9IG5ldyBEZWZhdWx0cygpO1xuXG4gIHJldHVybiBkZWZhdWx0cztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvb3B0aW9ucycsW1xuICAncmVxdWlyZScsXG4gICdqcXVlcnknLFxuICAnLi9kZWZhdWx0cycsXG4gICcuL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKHJlcXVpcmUsICQsIERlZmF1bHRzLCBVdGlscykge1xuICBmdW5jdGlvbiBPcHRpb25zIChvcHRpb25zLCAkZWxlbWVudCkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAoJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mcm9tRWxlbWVudCgkZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKCRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IERlZmF1bHRzLmFwcGx5RnJvbUVsZW1lbnQodGhpcy5vcHRpb25zLCAkZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gRGVmYXVsdHMuYXBwbHkodGhpcy5vcHRpb25zKTtcblxuICAgIGlmICgkZWxlbWVudCAmJiAkZWxlbWVudC5pcygnaW5wdXQnKSkge1xuICAgICAgdmFyIElucHV0Q29tcGF0ID0gcmVxdWlyZSh0aGlzLmdldCgnYW1kQmFzZScpICsgJ2NvbXBhdC9pbnB1dERhdGEnKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgIHRoaXMub3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgSW5wdXRDb21wYXRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgT3B0aW9ucy5wcm90b3R5cGUuZnJvbUVsZW1lbnQgPSBmdW5jdGlvbiAoJGUpIHtcbiAgICB2YXIgZXhjbHVkZWREYXRhID0gWydzZWxlY3QyJ107XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm11bHRpcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5tdWx0aXBsZSA9ICRlLnByb3AoJ211bHRpcGxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZWQgPSAkZS5wcm9wKCdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyID09IG51bGwpIHtcbiAgICAgIGlmICgkZS5wcm9wKCdkaXInKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJGUucHJvcCgnZGlyJyk7XG4gICAgICB9IGVsc2UgaWYgKCRlLmNsb3Nlc3QoJ1tkaXJdJykucHJvcCgnZGlyJykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRpciA9ICRlLmNsb3Nlc3QoJ1tkaXJdJykucHJvcCgnZGlyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJ2x0cic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJGUucHJvcCgnZGlzYWJsZWQnLCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQpO1xuICAgICRlLnByb3AoJ211bHRpcGxlJywgdGhpcy5vcHRpb25zLm11bHRpcGxlKTtcblxuICAgIGlmIChVdGlscy5HZXREYXRhKCRlWzBdLCAnc2VsZWN0MlRhZ3MnKSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdTZWxlY3QyOiBUaGUgYGRhdGEtc2VsZWN0Mi10YWdzYCBhdHRyaWJ1dGUgaGFzIGJlZW4gY2hhbmdlZCB0byAnICtcbiAgICAgICAgICAndXNlIHRoZSBgZGF0YS1kYXRhYCBhbmQgYGRhdGEtdGFncz1cInRydWVcImAgYXR0cmlidXRlcyBhbmQgd2lsbCBiZSAnICtcbiAgICAgICAgICAncmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgU2VsZWN0Mi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLlN0b3JlRGF0YSgkZVswXSwgJ2RhdGEnLCBVdGlscy5HZXREYXRhKCRlWzBdLCAnc2VsZWN0MlRhZ3MnKSk7XG4gICAgICBVdGlscy5TdG9yZURhdGEoJGVbMF0sICd0YWdzJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKFV0aWxzLkdldERhdGEoJGVbMF0sICdhamF4VXJsJykpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGVidWcgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnU2VsZWN0MjogVGhlIGBkYXRhLWFqYXgtdXJsYCBhdHRyaWJ1dGUgaGFzIGJlZW4gY2hhbmdlZCB0byAnICtcbiAgICAgICAgICAnYGRhdGEtYWpheC0tdXJsYCBhbmQgc3VwcG9ydCBmb3IgdGhlIG9sZCBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkJyArXG4gICAgICAgICAgJyBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgU2VsZWN0Mi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgICRlLmF0dHIoJ2FqYXgtLXVybCcsIFV0aWxzLkdldERhdGEoJGVbMF0sICdhamF4VXJsJykpO1xuICAgICAgVXRpbHMuU3RvcmVEYXRhKCRlWzBdLCAnYWpheC1VcmwnLCBVdGlscy5HZXREYXRhKCRlWzBdLCAnYWpheFVybCcpKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YXNldCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gdXBwZXJDYXNlTGV0dGVyKF8sIGxldHRlcikge1xuICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIFByZS1sb2FkIGFsbCBvZiB0aGUgYXR0cmlidXRlcyB3aGljaCBhcmUgcHJlZml4ZWQgd2l0aCBgZGF0YS1gXG4gICAgZm9yICh2YXIgYXR0ciA9IDA7IGF0dHIgPCAkZVswXS5hdHRyaWJ1dGVzLmxlbmd0aDsgYXR0cisrKSB7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9ICRlWzBdLmF0dHJpYnV0ZXNbYXR0cl0ubmFtZTtcbiAgICAgIHZhciBwcmVmaXggPSAnZGF0YS0nO1xuXG4gICAgICBpZiAoYXR0cmlidXRlTmFtZS5zdWJzdHIoMCwgcHJlZml4Lmxlbmd0aCkgPT0gcHJlZml4KSB7XG4gICAgICAgIC8vIEdldCB0aGUgY29udGVudHMgb2YgdGhlIGF0dHJpYnV0ZSBhZnRlciBgZGF0YS1gXG4gICAgICAgIHZhciBkYXRhTmFtZSA9IGF0dHJpYnV0ZU5hbWUuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgZGF0YSBjb250ZW50cyBmcm9tIHRoZSBjb25zaXN0ZW50IHNvdXJjZVxuICAgICAgICAvLyBUaGlzIGlzIG1vcmUgdGhhbiBsaWtlbHkgdGhlIGpRdWVyeSBkYXRhIGhlbHBlclxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gVXRpbHMuR2V0RGF0YSgkZVswXSwgZGF0YU5hbWUpO1xuXG4gICAgICAgIC8vIGNhbWVsQ2FzZSB0aGUgYXR0cmlidXRlIG5hbWUgdG8gbWF0Y2ggdGhlIHNwZWNcbiAgICAgICAgdmFyIGNhbWVsRGF0YU5hbWUgPSBkYXRhTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCB1cHBlckNhc2VMZXR0ZXIpO1xuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBkYXRhIGF0dHJpYnV0ZSBjb250ZW50cyBpbnRvIHRoZSBkYXRhc2V0IHNpbmNlXG4gICAgICAgIGRhdGFzZXRbY2FtZWxEYXRhTmFtZV0gPSBkYXRhVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJlZmVyIHRoZSBlbGVtZW50J3MgYGRhdGFzZXRgIGF0dHJpYnV0ZSBpZiBpdCBleGlzdHNcbiAgICAvLyBqUXVlcnkgMS54IGRvZXMgbm90IGNvcnJlY3RseSBoYW5kbGUgZGF0YSBhdHRyaWJ1dGVzIHdpdGggbXVsdGlwbGUgZGFzaGVzXG4gICAgaWYgKCQuZm4uanF1ZXJ5ICYmICQuZm4uanF1ZXJ5LnN1YnN0cigwLCAyKSA9PSAnMS4nICYmICRlWzBdLmRhdGFzZXQpIHtcbiAgICAgIGRhdGFzZXQgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJGVbMF0uZGF0YXNldCwgZGF0YXNldCk7XG4gICAgfVxuXG4gICAgLy8gUHJlZmVyIG91ciBpbnRlcm5hbCBkYXRhIGNhY2hlIGlmIGl0IGV4aXN0c1xuICAgIHZhciBkYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIFV0aWxzLkdldERhdGEoJGVbMF0pLCBkYXRhc2V0KTtcblxuICAgIGRhdGEgPSBVdGlscy5fY29udmVydERhdGEoZGF0YSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKCQuaW5BcnJheShrZXksIGV4Y2x1ZGVkRGF0YSkgPiAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdCh0aGlzLm9wdGlvbnNba2V5XSkpIHtcbiAgICAgICAgJC5leHRlbmQodGhpcy5vcHRpb25zW2tleV0sIGRhdGFba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBPcHRpb25zLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uc1trZXldO1xuICB9O1xuXG4gIE9wdGlvbnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICAgIHRoaXMub3B0aW9uc1trZXldID0gdmFsO1xuICB9O1xuXG4gIHJldHVybiBPcHRpb25zO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9jb3JlJyxbXG4gICdqcXVlcnknLFxuICAnLi9vcHRpb25zJyxcbiAgJy4vdXRpbHMnLFxuICAnLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIE9wdGlvbnMsIFV0aWxzLCBLRVlTKSB7XG4gIHZhciBTZWxlY3QyID0gZnVuY3Rpb24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgaWYgKFV0aWxzLkdldERhdGEoJGVsZW1lbnRbMF0sICdzZWxlY3QyJykgIT0gbnVsbCkge1xuICAgICAgVXRpbHMuR2V0RGF0YSgkZWxlbWVudFswXSwgJ3NlbGVjdDInKS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuXG4gICAgdGhpcy5pZCA9IHRoaXMuX2dlbmVyYXRlSWQoJGVsZW1lbnQpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zLCAkZWxlbWVudCk7XG5cbiAgICBTZWxlY3QyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIHRoZSB0YWJpbmRleFxuXG4gICAgdmFyIHRhYmluZGV4ID0gJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKSB8fCAwO1xuICAgIFV0aWxzLlN0b3JlRGF0YSgkZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcsIHRhYmluZGV4KTtcbiAgICAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgLy8gU2V0IHVwIGNvbnRhaW5lcnMgYW5kIGFkYXB0ZXJzXG5cbiAgICB2YXIgRGF0YUFkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdkYXRhQWRhcHRlcicpO1xuICAgIHRoaXMuZGF0YUFkYXB0ZXIgPSBuZXcgRGF0YUFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgJGNvbnRhaW5lciA9IHRoaXMucmVuZGVyKCk7XG5cbiAgICB0aGlzLl9wbGFjZUNvbnRhaW5lcigkY29udGFpbmVyKTtcblxuICAgIHZhciBTZWxlY3Rpb25BZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgnc2VsZWN0aW9uQWRhcHRlcicpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbkFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy4kc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24ucmVuZGVyKCk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5wb3NpdGlvbih0aGlzLiRzZWxlY3Rpb24sICRjb250YWluZXIpO1xuXG4gICAgdmFyIERyb3Bkb3duQWRhcHRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ2Ryb3Bkb3duQWRhcHRlcicpO1xuICAgIHRoaXMuZHJvcGRvd24gPSBuZXcgRHJvcGRvd25BZGFwdGVyKCRlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuJGRyb3Bkb3duID0gdGhpcy5kcm9wZG93bi5yZW5kZXIoKTtcblxuICAgIHRoaXMuZHJvcGRvd24ucG9zaXRpb24odGhpcy4kZHJvcGRvd24sICRjb250YWluZXIpO1xuXG4gICAgdmFyIFJlc3VsdHNBZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgncmVzdWx0c0FkYXB0ZXInKTtcbiAgICB0aGlzLnJlc3VsdHMgPSBuZXcgUmVzdWx0c0FkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucywgdGhpcy5kYXRhQWRhcHRlcik7XG4gICAgdGhpcy4kcmVzdWx0cyA9IHRoaXMucmVzdWx0cy5yZW5kZXIoKTtcblxuICAgIHRoaXMucmVzdWx0cy5wb3NpdGlvbih0aGlzLiRyZXN1bHRzLCB0aGlzLiRkcm9wZG93bik7XG5cbiAgICAvLyBCaW5kIGV2ZW50c1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQmluZCB0aGUgY29udGFpbmVyIHRvIGFsbCBvZiB0aGUgYWRhcHRlcnNcbiAgICB0aGlzLl9iaW5kQWRhcHRlcnMoKTtcblxuICAgIC8vIFJlZ2lzdGVyIGFueSBET00gZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLl9yZWdpc3RlckRvbUV2ZW50cygpO1xuXG4gICAgLy8gUmVnaXN0ZXIgYW55IGludGVybmFsIGV2ZW50IGhhbmRsZXJzXG4gICAgdGhpcy5fcmVnaXN0ZXJEYXRhRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJSZXN1bHRzRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoaW5pdGlhbERhdGEpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcbiAgICAgICAgZGF0YTogaW5pdGlhbERhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSGlkZSB0aGUgb3JpZ2luYWwgc2VsZWN0XG4gICAgJGVsZW1lbnQuYWRkQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKTtcbiAgICAkZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAvLyBTeW5jaHJvbml6ZSBhbnkgbW9uaXRvcmVkIGF0dHJpYnV0ZXNcbiAgICB0aGlzLl9zeW5jQXR0cmlidXRlcygpO1xuXG4gICAgVXRpbHMuU3RvcmVEYXRhKCRlbGVtZW50WzBdLCAnc2VsZWN0MicsIHRoaXMpO1xuXG4gICAgLy8gRW5zdXJlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggJGVsZW1lbnQuZGF0YSgnc2VsZWN0MicpLlxuICAgICRlbGVtZW50LmRhdGEoJ3NlbGVjdDInLCB0aGlzKTtcbiAgfTtcblxuICBVdGlscy5FeHRlbmQoU2VsZWN0MiwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX2dlbmVyYXRlSWQgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICB2YXIgaWQgPSAnJztcblxuICAgIGlmICgkZWxlbWVudC5hdHRyKCdpZCcpICE9IG51bGwpIHtcbiAgICAgIGlkID0gJGVsZW1lbnQuYXR0cignaWQnKTtcbiAgICB9IGVsc2UgaWYgKCRlbGVtZW50LmF0dHIoJ25hbWUnKSAhPSBudWxsKSB7XG4gICAgICBpZCA9ICRlbGVtZW50LmF0dHIoJ25hbWUnKSArICctJyArIFV0aWxzLmdlbmVyYXRlQ2hhcnMoMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gVXRpbHMuZ2VuZXJhdGVDaGFycyg0KTtcbiAgICB9XG5cbiAgICBpZCA9IGlkLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfCwpL2csICcnKTtcbiAgICBpZCA9ICdzZWxlY3QyLScgKyBpZDtcblxuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcGxhY2VDb250YWluZXIgPSBmdW5jdGlvbiAoJGNvbnRhaW5lcikge1xuICAgICRjb250YWluZXIuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCk7XG5cbiAgICB2YXIgd2lkdGggPSB0aGlzLl9yZXNvbHZlV2lkdGgodGhpcy4kZWxlbWVudCwgdGhpcy5vcHRpb25zLmdldCgnd2lkdGgnKSk7XG5cbiAgICBpZiAod2lkdGggIT0gbnVsbCkge1xuICAgICAgJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgd2lkdGgpO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVzb2x2ZVdpZHRoID0gZnVuY3Rpb24gKCRlbGVtZW50LCBtZXRob2QpIHtcbiAgICB2YXIgV0lEVEggPSAvXndpZHRoOigoWy0rXT8oWzAtOV0qXFwuKT9bMC05XSspKHB4fGVtfGV4fCV8aW58Y218bW18cHR8cGMpKS9pO1xuXG4gICAgaWYgKG1ldGhvZCA9PSAncmVzb2x2ZScpIHtcbiAgICAgIHZhciBzdHlsZVdpZHRoID0gdGhpcy5fcmVzb2x2ZVdpZHRoKCRlbGVtZW50LCAnc3R5bGUnKTtcblxuICAgICAgaWYgKHN0eWxlV2lkdGggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gc3R5bGVXaWR0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVXaWR0aCgkZWxlbWVudCwgJ2VsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09ICdlbGVtZW50Jykge1xuICAgICAgdmFyIGVsZW1lbnRXaWR0aCA9ICRlbGVtZW50Lm91dGVyV2lkdGgoZmFsc2UpO1xuXG4gICAgICBpZiAoZWxlbWVudFdpZHRoIDw9IDApIHtcbiAgICAgICAgcmV0dXJuICdhdXRvJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRXaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgc3R5bGUgPSAkZWxlbWVudC5hdHRyKCdzdHlsZScpO1xuXG4gICAgICBpZiAodHlwZW9mKHN0eWxlKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBhdHRycyA9IHN0eWxlLnNwbGl0KCc7Jyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSA9IGkgKyAxKSB7XG4gICAgICAgIHZhciBhdHRyID0gYXR0cnNbaV0ucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBhdHRyLm1hdGNoKFdJRFRIKTtcblxuICAgICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCAmJiBtYXRjaGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXNbMV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PSAnY29tcHV0ZWRzdHlsZScpIHtcbiAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJGVsZW1lbnRbMF0pO1xuXG4gICAgICByZXR1cm4gY29tcHV0ZWRTdHlsZS53aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9iaW5kQWRhcHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kYXRhQWRhcHRlci5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG4gICAgdGhpcy5zZWxlY3Rpb24uYmluZCh0aGlzLCB0aGlzLiRjb250YWluZXIpO1xuXG4gICAgdGhpcy5kcm9wZG93bi5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG4gICAgdGhpcy5yZXN1bHRzLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEb21FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignY2hhbmdlLnNlbGVjdDInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3Rpb246dXBkYXRlJywge1xuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2ZvY3VzLnNlbGVjdDInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2ZvY3VzJywgZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3N5bmNBID0gVXRpbHMuYmluZCh0aGlzLl9zeW5jQXR0cmlidXRlcywgdGhpcyk7XG4gICAgdGhpcy5fc3luY1MgPSBVdGlscy5iaW5kKHRoaXMuX3N5bmNTdWJ0cmVlLCB0aGlzKTtcblxuICAgIGlmICh0aGlzLiRlbGVtZW50WzBdLmF0dGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmF0dGFjaEV2ZW50KCdvbnByb3BlcnR5Y2hhbmdlJywgdGhpcy5fc3luY0EpO1xuICAgIH1cblxuICAgIHZhciBvYnNlcnZlciA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8XG4gICAgICB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlciB8fFxuICAgICAgd2luZG93Lk1vek11dGF0aW9uT2JzZXJ2ZXJcbiAgICA7XG5cbiAgICBpZiAob2JzZXJ2ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgb2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICBzZWxmLl9zeW5jQSgpO1xuICAgICAgICBzZWxmLl9zeW5jUyhudWxsLCBtdXRhdGlvbnMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuJGVsZW1lbnRbMF0sIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ0RPTUF0dHJNb2RpZmllZCcsXG4gICAgICAgIHNlbGYuX3N5bmNBLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ0RPTU5vZGVJbnNlcnRlZCcsXG4gICAgICAgIHNlbGYuX3N5bmNTLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ0RPTU5vZGVSZW1vdmVkJyxcbiAgICAgICAgc2VsZi5fc3luY1MsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEYXRhRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBub25SZWxheUV2ZW50cyA9IFsndG9nZ2xlJywgJ2ZvY3VzJ107XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5vbigndG9nZ2xlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi50b2dnbGVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5mb2N1cyhwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24ub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBpZiAoJC5pbkFycmF5KG5hbWUsIG5vblJlbGF5RXZlbnRzKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEcm9wZG93bkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRyb3Bkb3duLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyUmVzdWx0c0V2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLnJlc3VsdHMub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignZW5hYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2Rpc2FibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1kaXNhYmxlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdxdWVyeScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIGlmICghc2VsZi5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ29wZW4nLCB7fSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YUFkYXB0ZXIucXVlcnkocGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6YWxsJywge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgcXVlcnk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbigncXVlcnk6YXBwZW5kJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgdGhpcy5kYXRhQWRhcHRlci5xdWVyeShwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czphcHBlbmQnLCB7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBxdWVyeTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBrZXkgPSBldnQud2hpY2g7XG5cbiAgICAgIGlmIChzZWxmLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IEtFWVMuRVNDIHx8IGtleSA9PT0gS0VZUy5UQUIgfHxcbiAgICAgICAgICAgIChrZXkgPT09IEtFWVMuVVAgJiYgZXZ0LmFsdEtleSkpIHtcbiAgICAgICAgICBzZWxmLmNsb3NlKGV2dCk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuRU5URVIpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6c2VsZWN0Jywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGtleSA9PT0gS0VZUy5TUEFDRSAmJiBldnQuY3RybEtleSkpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6dG9nZ2xlJywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBLRVlTLlVQKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOnByZXZpb3VzJywge30pO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBLRVlTLkRPV04pIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6bmV4dCcsIHt9KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoa2V5ID09PSBLRVlTLkVOVEVSIHx8IGtleSA9PT0gS0VZUy5TUEFDRSB8fFxuICAgICAgICAgICAgKGtleSA9PT0gS0VZUy5ET1dOICYmIGV2dC5hbHRLZXkpKSB7XG4gICAgICAgICAgc2VsZi5vcGVuKCk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9zeW5jQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuc2V0KCdkaXNhYmxlZCcsIHRoaXMuJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnKSk7XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmlnZ2VyKCdkaXNhYmxlJywge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2VuYWJsZScsIHt9KTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX2lzQ2hhbmdlTXV0YXRpb24gPSBmdW5jdGlvbiAoZXZ0LCBtdXRhdGlvbnMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIElnbm9yZSBhbnkgbXV0YXRpb24gZXZlbnRzIHJhaXNlZCBmb3IgZWxlbWVudHMgdGhhdCBhcmVuJ3Qgb3B0aW9ucyBvclxuICAgIC8vIG9wdGdyb3Vwcy4gVGhpcyBoYW5kbGVzIHRoZSBjYXNlIHdoZW4gdGhlIHNlbGVjdCBlbGVtZW50IGlzIGRlc3Ryb3llZFxuICAgIGlmIChcbiAgICAgIGV2dCAmJiBldnQudGFyZ2V0ICYmIChcbiAgICAgICAgZXZ0LnRhcmdldC5ub2RlTmFtZSAhPT0gJ09QVElPTicgJiYgZXZ0LnRhcmdldC5ub2RlTmFtZSAhPT0gJ09QVEdST1VQJ1xuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghbXV0YXRpb25zKSB7XG4gICAgICAvLyBJZiBtdXRhdGlvbiBldmVudHMgYXJlbid0IHN1cHBvcnRlZCwgdGhlbiB3ZSBjYW4gb25seSBhc3N1bWUgdGhhdCB0aGVcbiAgICAgIC8vIGNoYW5nZSBhZmZlY3RlZCB0aGUgc2VsZWN0aW9uc1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChtdXRhdGlvbnMuYWRkZWROb2RlcyAmJiBtdXRhdGlvbnMuYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG11dGF0aW9ucy5hZGRlZE5vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciBub2RlID0gbXV0YXRpb25zLmFkZGVkTm9kZXNbbl07XG5cbiAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQpIHtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobXV0YXRpb25zLnJlbW92ZWROb2RlcyAmJiBtdXRhdGlvbnMucmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoJC5pc0FycmF5KG11dGF0aW9ucykpIHtcbiAgICAgICQuZWFjaChtdXRhdGlvbnMsIGZ1bmN0aW9uKGV2dCwgbXV0YXRpb24pIHtcbiAgICAgICAgaWYgKHNlbGYuX2lzQ2hhbmdlTXV0YXRpb24oZXZ0LCBtdXRhdGlvbikpIHtcbiAgICAgICAgICAvLyBXZSd2ZSBmb3VuZCBhIGNoYW5nZSBtdXRhdGlvbi5cbiAgICAgICAgICAvLyBMZXQncyBlc2NhcGUgZnJvbSB0aGUgbG9vcCBhbmQgY29udGludWVcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fc3luY1N1YnRyZWUgPSBmdW5jdGlvbiAoZXZ0LCBtdXRhdGlvbnMpIHtcbiAgICB2YXIgY2hhbmdlZCA9IHRoaXMuX2lzQ2hhbmdlTXV0YXRpb24oZXZ0LCBtdXRhdGlvbnMpO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIE9ubHkgcmUtcHVsbCB0aGUgZGF0YSBpZiB3ZSB0aGluayB0aGVyZSBpcyBhIGNoYW5nZVxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICB0aGlzLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcbiAgICAgICAgICBkYXRhOiBjdXJyZW50RGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIHRyaWdnZXIgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgdHJpZ2dlciBwcmUtZXZlbnRzIHdoZW5cbiAgICogdGhlcmUgYXJlIGV2ZW50cyB0aGF0IGNhbiBiZSBwcmV2ZW50ZWQuXG4gICAqL1xuICBTZWxlY3QyLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgICB2YXIgYWN0dWFsVHJpZ2dlciA9IFNlbGVjdDIuX19zdXBlcl9fLnRyaWdnZXI7XG4gICAgdmFyIHByZVRyaWdnZXJNYXAgPSB7XG4gICAgICAnb3Blbic6ICdvcGVuaW5nJyxcbiAgICAgICdjbG9zZSc6ICdjbG9zaW5nJyxcbiAgICAgICdzZWxlY3QnOiAnc2VsZWN0aW5nJyxcbiAgICAgICd1bnNlbGVjdCc6ICd1bnNlbGVjdGluZycsXG4gICAgICAnY2xlYXInOiAnY2xlYXJpbmcnXG4gICAgfTtcblxuICAgIGlmIChhcmdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSBpbiBwcmVUcmlnZ2VyTWFwKSB7XG4gICAgICB2YXIgcHJlVHJpZ2dlck5hbWUgPSBwcmVUcmlnZ2VyTWFwW25hbWVdO1xuICAgICAgdmFyIHByZVRyaWdnZXJBcmdzID0ge1xuICAgICAgICBwcmV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBhcmdzOiBhcmdzXG4gICAgICB9O1xuXG4gICAgICBhY3R1YWxUcmlnZ2VyLmNhbGwodGhpcywgcHJlVHJpZ2dlck5hbWUsIHByZVRyaWdnZXJBcmdzKTtcblxuICAgICAgaWYgKHByZVRyaWdnZXJBcmdzLnByZXZlbnRlZCkge1xuICAgICAgICBhcmdzLnByZXZlbnRlZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFjdHVhbFRyaWdnZXIuY2FsbCh0aGlzLCBuYW1lLCBhcmdzKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS50b2dnbGVEcm9wZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7fSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdjbG9zZScsIHsgb3JpZ2luYWxFdmVudCA6IGV2dCB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJlbmFibGVkXCIgKG5vdCBcImRpc2FibGVkXCIpIHN0YXRlIG9mIHRoaXNcbiAgICogb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgaW5zdGFuY2UgaXMgbm90IGRpc2FibGVkLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGluc3RhbmNlIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaXNFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0Rpc2FibGVkKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gYWJzdHJhY3QgdGhlIFwiZGlzYWJsZWRcIiBzdGF0ZSBvZiB0aGlzIG9iamVjdC5cbiAgICpcbiAgICogQHJldHVybiB7dHJ1ZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyB0cnVlLlxuICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyBmYWxzZS5cbiAgICovXG4gIFNlbGVjdDIucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXQoJ2Rpc2FibGVkJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLiRjb250YWluZXIuaGFzQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuaGFzRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGNvbnRhaW5lci5oYXNDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vIE5vIG5lZWQgdG8gcmUtdHJpZ2dlciBmb2N1cyBldmVudHMgaWYgd2UgYXJlIGFscmVhZHkgZm9jdXNlZFxuICAgIGlmICh0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1mb2N1cycpO1xuICAgIHRoaXMudHJpZ2dlcignZm9jdXMnLCB7fSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NlbGVjdDI6IFRoZSBgc2VsZWN0MihcImVuYWJsZVwiKWAgbWV0aG9kIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwnICtcbiAgICAgICAgJyBiZSByZW1vdmVkIGluIGxhdGVyIFNlbGVjdDIgdmVyc2lvbnMuIFVzZSAkZWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIiknICtcbiAgICAgICAgJyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MgPT0gbnVsbCB8fCBhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXJncyA9IFt0cnVlXTtcbiAgICB9XG5cbiAgICB2YXIgZGlzYWJsZWQgPSAhYXJnc1swXTtcblxuICAgIHRoaXMuJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCBkaXNhYmxlZCk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJlxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NlbGVjdDI6IERhdGEgY2FuIG5vIGxvbmdlciBiZSBzZXQgdXNpbmcgYHNlbGVjdDIoXCJkYXRhXCIpYC4gWW91ICcgK1xuICAgICAgICAnc2hvdWxkIGNvbnNpZGVyIHNldHRpbmcgdGhlIHZhbHVlIGluc3RlYWQgdXNpbmcgYCRlbGVtZW50LnZhbCgpYC4nXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gW107XG5cbiAgICB0aGlzLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICBkYXRhID0gY3VycmVudERhdGE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU2VsZWN0MjogVGhlIGBzZWxlY3QyKFwidmFsXCIpYCBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZScgK1xuICAgICAgICAnIHJlbW92ZWQgaW4gbGF0ZXIgU2VsZWN0MiB2ZXJzaW9ucy4gVXNlICRlbGVtZW50LnZhbCgpIGluc3RlYWQuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC52YWwoKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3VmFsID0gYXJnc1swXTtcblxuICAgIGlmICgkLmlzQXJyYXkobmV3VmFsKSkge1xuICAgICAgbmV3VmFsID0gJC5tYXAobmV3VmFsLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmoudG9TdHJpbmcoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQudmFsKG5ld1ZhbCkudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIGlmICh0aGlzLiRlbGVtZW50WzBdLmRldGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmRldGFjaEV2ZW50KCdvbnByb3BlcnR5Y2hhbmdlJywgdGhpcy5fc3luY0EpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vYnNlcnZlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF1cbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUF0dHJNb2RpZmllZCcsIHRoaXMuX3N5bmNBLCBmYWxzZSk7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdXG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aGlzLl9zeW5jUywgZmFsc2UpO1xuICAgICAgdGhpcy4kZWxlbWVudFswXVxuICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTm9kZVJlbW92ZWQnLCB0aGlzLl9zeW5jUywgZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuX3N5bmNBID0gbnVsbDtcbiAgICB0aGlzLl9zeW5jUyA9IG51bGw7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLnNlbGVjdDInKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JyxcbiAgICBVdGlscy5HZXREYXRhKHRoaXMuJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnKSk7XG5cbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJyk7XG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIFV0aWxzLlJlbW92ZURhdGEodGhpcy4kZWxlbWVudFswXSk7XG4gICAgdGhpcy4kZWxlbWVudC5yZW1vdmVEYXRhKCdzZWxlY3QyJyk7XG5cbiAgICB0aGlzLmRhdGFBZGFwdGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNlbGVjdGlvbi5kZXN0cm95KCk7XG4gICAgdGhpcy5kcm9wZG93bi5kZXN0cm95KCk7XG4gICAgdGhpcy5yZXN1bHRzLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmRyb3Bkb3duID0gbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBudWxsO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyIHNlbGVjdDItY29udGFpbmVyXCI+JyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdGlvblwiPjwvc3Bhbj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24td3JhcHBlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICAkY29udGFpbmVyLmF0dHIoJ2RpcicsIHRoaXMub3B0aW9ucy5nZXQoJ2RpcicpKTtcblxuICAgIHRoaXMuJGNvbnRhaW5lciA9ICRjb250YWluZXI7XG5cbiAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS0nICsgdGhpcy5vcHRpb25zLmdldCgndGhlbWUnKSk7XG5cbiAgICBVdGlscy5TdG9yZURhdGEoJGNvbnRhaW5lclswXSwgJ2VsZW1lbnQnLCB0aGlzLiRlbGVtZW50KTtcblxuICAgIHJldHVybiAkY29udGFpbmVyO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3QyO1xufSk7XG5cblMyLmRlZmluZSgnanF1ZXJ5LW1vdXNld2hlZWwnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIC8vIFVzZWQgdG8gc2hpbSBqUXVlcnkubW91c2V3aGVlbCBmb3Igbm9uLWZ1bGwgYnVpbGRzLlxuICByZXR1cm4gJDtcbn0pO1xuXG5TMi5kZWZpbmUoJ2pxdWVyeS5zZWxlY3QyJyxbXG4gICdqcXVlcnknLFxuICAnanF1ZXJ5LW1vdXNld2hlZWwnLFxuXG4gICcuL3NlbGVjdDIvY29yZScsXG4gICcuL3NlbGVjdDIvZGVmYXVsdHMnLFxuICAnLi9zZWxlY3QyL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIF8sIFNlbGVjdDIsIERlZmF1bHRzLCBVdGlscykge1xuICBpZiAoJC5mbi5zZWxlY3QyID09IG51bGwpIHtcbiAgICAvLyBBbGwgbWV0aG9kcyB0aGF0IHNob3VsZCByZXR1cm4gdGhlIGVsZW1lbnRcbiAgICB2YXIgdGhpc01ldGhvZHMgPSBbJ29wZW4nLCAnY2xvc2UnLCAnZGVzdHJveSddO1xuXG4gICAgJC5mbi5zZWxlY3QyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlT3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcblxuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBTZWxlY3QyKCQodGhpcyksIGluc3RhbmNlT3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHJldDtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnc2VsZWN0MicpO1xuXG4gICAgICAgICAgaWYgKGluc3RhbmNlID09IG51bGwgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ1RoZSBzZWxlY3QyKFxcJycgKyBvcHRpb25zICsgJ1xcJykgbWV0aG9kIHdhcyBjYWxsZWQgb24gYW4gJyArXG4gICAgICAgICAgICAgICdlbGVtZW50IHRoYXQgaXMgbm90IHVzaW5nIFNlbGVjdDIuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXQgPSBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIHNob3VsZCBiZSByZXR1cm5pbmcgYHRoaXNgXG4gICAgICAgIGlmICgkLmluQXJyYXkob3B0aW9ucywgdGhpc01ldGhvZHMpID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzIGZvciBTZWxlY3QyOiAnICsgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmICgkLmZuLnNlbGVjdDIuZGVmYXVsdHMgPT0gbnVsbCkge1xuICAgICQuZm4uc2VsZWN0Mi5kZWZhdWx0cyA9IERlZmF1bHRzO1xuICB9XG5cbiAgcmV0dXJuIFNlbGVjdDI7XG59KTtcblxuICAvLyBSZXR1cm4gdGhlIEFNRCBsb2FkZXIgY29uZmlndXJhdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCBvdXRzaWRlIG9mIHRoaXMgZmlsZVxuICByZXR1cm4ge1xuICAgIGRlZmluZTogUzIuZGVmaW5lLFxuICAgIHJlcXVpcmU6IFMyLnJlcXVpcmVcbiAgfTtcbn0oKSk7XG5cbiAgLy8gQXV0b2xvYWQgdGhlIGpRdWVyeSBiaW5kaW5nc1xuICAvLyBXZSBrbm93IHRoYXQgYWxsIG9mIHRoZSBtb2R1bGVzIGV4aXN0IGFib3ZlIHRoaXMsIHNvIHdlJ3JlIHNhZmVcbiAgdmFyIHNlbGVjdDIgPSBTMi5yZXF1aXJlKCdqcXVlcnkuc2VsZWN0MicpO1xuXG4gIC8vIEhvbGQgdGhlIEFNRCBtb2R1bGUgcmVmZXJlbmNlcyBvbiB0aGUgalF1ZXJ5IGZ1bmN0aW9uIHRoYXQgd2FzIGp1c3QgbG9hZGVkXG4gIC8vIFRoaXMgYWxsb3dzIFNlbGVjdDIgdG8gdXNlIHRoZSBpbnRlcm5hbCBsb2FkZXIgb3V0c2lkZSBvZiB0aGlzIGZpbGUsIHN1Y2hcbiAgLy8gYXMgaW4gdGhlIGxhbmd1YWdlIGZpbGVzLlxuICBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQgPSBTMjtcblxuICAvLyBSZXR1cm4gdGhlIFNlbGVjdDIgaW5zdGFuY2UgZm9yIGFueW9uZSB3aG8gaXMgaW1wb3J0aW5nIGl0LlxuICByZXR1cm4gc2VsZWN0Mjtcbn0pKTtcbiIsIiFmdW5jdGlvbih0LG8pe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobyk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bygpOnQudGluZ2xlPW8oKX0odGhpcyxmdW5jdGlvbigpe3ZhciBvPSExO2Z1bmN0aW9uIHQodCl7dGhpcy5vcHRzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylmb3IodmFyIG8gaW4gYXJndW1lbnRzW3RdKWFyZ3VtZW50c1t0XS5oYXNPd25Qcm9wZXJ0eShvKSYmKGFyZ3VtZW50c1swXVtvXT1hcmd1bWVudHNbdF1bb10pO3JldHVybiBhcmd1bWVudHNbMF19KHt9LHtvbkNsb3NlOm51bGwsb25PcGVuOm51bGwsYmVmb3JlT3BlbjpudWxsLGJlZm9yZUNsb3NlOm51bGwsc3RpY2t5Rm9vdGVyOiExLGZvb3RlcjohMSxjc3NDbGFzczpbXSxjbG9zZUxhYmVsOlwiQ2xvc2VcIixjbG9zZU1ldGhvZHM6W1wib3ZlcmxheVwiLFwiYnV0dG9uXCIsXCJlc2NhcGVcIl19LHQpLHRoaXMuaW5pdCgpfWZ1bmN0aW9uIGUoKXt0aGlzLm1vZGFsQm94Rm9vdGVyJiYodGhpcy5tb2RhbEJveEZvb3Rlci5zdHlsZS53aWR0aD10aGlzLm1vZGFsQm94LmNsaWVudFdpZHRoK1wicHhcIix0aGlzLm1vZGFsQm94Rm9vdGVyLnN0eWxlLmxlZnQ9dGhpcy5tb2RhbEJveC5vZmZzZXRMZWZ0K1wicHhcIil9cmV0dXJuIHQucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXtpZighdGhpcy5tb2RhbClyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm1vZGFsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsXCIpLDAhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmxlbmd0aCYmLTEhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmluZGV4T2YoXCJvdmVybGF5XCIpfHx0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtLW5vT3ZlcmxheUNsb3NlXCIpO3RoaXMubW9kYWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLm9wdHMuY3NzQ2xhc3MuZm9yRWFjaChmdW5jdGlvbih0KXtcInN0cmluZ1wiPT10eXBlb2YgdCYmdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHQpfSx0aGlzKSwtMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImJ1dHRvblwiKSYmKHRoaXMubW9kYWxDbG9zZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLHRoaXMubW9kYWxDbG9zZUJ0bi50eXBlPVwiYnV0dG9uXCIsdGhpcy5tb2RhbENsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWxfX2Nsb3NlXCIpLHRoaXMubW9kYWxDbG9zZUJ0bkljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksdGhpcy5tb2RhbENsb3NlQnRuSWNvbi5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsX19jbG9zZUljb25cIiksdGhpcy5tb2RhbENsb3NlQnRuSWNvbi5pbm5lckhUTUw9Jzxzdmcgdmlld0JveD1cIjAgMCAxMCAxMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTS4zIDkuN2MuMi4yLjQuMy43LjMuMyAwIC41LS4xLjctLjNMNSA2LjRsMy4zIDMuM2MuMi4yLjUuMy43LjMuMiAwIC41LS4xLjctLjMuNC0uNC40LTEgMC0xLjRMNi40IDVsMy4zLTMuM2MuNC0uNC40LTEgMC0xLjQtLjQtLjQtMS0uNC0xLjQgMEw1IDMuNiAxLjcuM0MxLjMtLjEuNy0uMS4zLjNjLS40LjQtLjQgMSAwIDEuNEwzLjYgNSAuMyA4LjNjLS40LjQtLjQgMSAwIDEuNHpcIiBmaWxsPVwiIzAwMFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+Jyx0aGlzLm1vZGFsQ2xvc2VCdG5MYWJlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSx0aGlzLm1vZGFsQ2xvc2VCdG5MYWJlbC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsX19jbG9zZUxhYmVsXCIpLHRoaXMubW9kYWxDbG9zZUJ0bkxhYmVsLmlubmVySFRNTD10aGlzLm9wdHMuY2xvc2VMYWJlbCx0aGlzLm1vZGFsQ2xvc2VCdG4uYXBwZW5kQ2hpbGQodGhpcy5tb2RhbENsb3NlQnRuSWNvbiksdGhpcy5tb2RhbENsb3NlQnRuLmFwcGVuZENoaWxkKHRoaXMubW9kYWxDbG9zZUJ0bkxhYmVsKSk7dGhpcy5tb2RhbEJveD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMubW9kYWxCb3guY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC1ib3hcIiksdGhpcy5tb2RhbEJveENvbnRlbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLm1vZGFsQm94Q29udGVudC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsLWJveF9fY29udGVudFwiKSx0aGlzLm1vZGFsQm94LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb3hDb250ZW50KSwtMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImJ1dHRvblwiKSYmdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQ2xvc2VCdG4pO3RoaXMubW9kYWwuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbEJveCl9LmNhbGwodGhpcyksZnVuY3Rpb24oKXt0aGlzLl9ldmVudHM9e2NsaWNrQ2xvc2VCdG46dGhpcy5jbG9zZS5iaW5kKHRoaXMpLGNsaWNrT3ZlcmxheTpmdW5jdGlvbih0KXt2YXIgbz10aGlzLm1vZGFsLm9mZnNldFdpZHRoLXRoaXMubW9kYWwuY2xpZW50V2lkdGgsZT10LmNsaWVudFg+PXRoaXMubW9kYWwub2Zmc2V0V2lkdGgtMTUscz10aGlzLm1vZGFsLnNjcm9sbEhlaWdodCE9PXRoaXMubW9kYWwub2Zmc2V0SGVpZ2h0O2lmKFwiTWFjSW50ZWxcIj09PW5hdmlnYXRvci5wbGF0Zm9ybSYmMD09byYmZSYmcylyZXR1cm47LTEhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmluZGV4T2YoXCJvdmVybGF5XCIpJiYhZnVuY3Rpb24odCxvKXtmb3IoOyh0PXQucGFyZW50RWxlbWVudCkmJiF0LmNsYXNzTGlzdC5jb250YWlucyhvKTspO3JldHVybiB0fSh0LnRhcmdldCxcInRpbmdsZS1tb2RhbFwiKSYmdC5jbGllbnRYPHRoaXMubW9kYWwuY2xpZW50V2lkdGgmJnRoaXMuY2xvc2UoKX0uYmluZCh0aGlzKSxyZXNpemU6dGhpcy5jaGVja092ZXJmbG93LmJpbmQodGhpcyksa2V5Ym9hcmROYXY6ZnVuY3Rpb24odCl7LTEhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmluZGV4T2YoXCJlc2NhcGVcIikmJjI3PT09dC53aGljaCYmdGhpcy5pc09wZW4oKSYmdGhpcy5jbG9zZSgpfS5iaW5kKHRoaXMpfSwtMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImJ1dHRvblwiKSYmdGhpcy5tb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuX2V2ZW50cy5jbGlja0Nsb3NlQnRuKTt0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLl9ldmVudHMuY2xpY2tPdmVybGF5KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX2V2ZW50cy5yZXNpemUpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5fZXZlbnRzLmtleWJvYXJkTmF2KX0uY2FsbCh0aGlzKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubW9kYWwsZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSx0aGlzLm9wdHMuZm9vdGVyJiZ0aGlzLmFkZEZvb3RlcigpLHRoaXN9LHQucHJvdG90eXBlLl9idXN5PWZ1bmN0aW9uKHQpe289dH0sdC5wcm90b3R5cGUuX2lzQnVzeT1mdW5jdGlvbigpe3JldHVybiBvfSx0LnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7bnVsbCE9PXRoaXMubW9kYWwmJih0aGlzLmlzT3BlbigpJiZ0aGlzLmNsb3NlKCEwKSxmdW5jdGlvbigpey0xIT09dGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwiYnV0dG9uXCIpJiZ0aGlzLm1vZGFsQ2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fZXZlbnRzLmNsaWNrQ2xvc2VCdG4pO3RoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuX2V2ZW50cy5jbGlja092ZXJsYXkpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fZXZlbnRzLnJlc2l6ZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLl9ldmVudHMua2V5Ym9hcmROYXYpfS5jYWxsKHRoaXMpLHRoaXMubW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsKSx0aGlzLm1vZGFsPW51bGwpfSx0LnByb3RvdHlwZS5pc09wZW49ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGluZ2xlLW1vZGFsLS12aXNpYmxlXCIpfSx0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2lzQnVzeSgpKXt0aGlzLl9idXN5KCEwKTt2YXIgdD10aGlzO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQub3B0cy5iZWZvcmVPcGVuJiZ0Lm9wdHMuYmVmb3JlT3BlbigpLHRoaXMubW9kYWwuc3R5bGUucmVtb3ZlUHJvcGVydHk/dGhpcy5tb2RhbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik6dGhpcy5tb2RhbC5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNwbGF5XCIpLHRoaXMuX3Njcm9sbFBvc2l0aW9uPXdpbmRvdy5wYWdlWU9mZnNldCxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtZW5hYmxlZFwiKSxkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD0tdGhpcy5fc2Nyb2xsUG9zaXRpb24rXCJweFwiLHRoaXMuc2V0U3RpY2t5Rm9vdGVyKHRoaXMub3B0cy5zdGlja3lGb290ZXIpLHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC0tdmlzaWJsZVwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9wdHMub25PcGVuJiZ0Lm9wdHMub25PcGVuLmNhbGwodCksdC5fYnVzeSghMSksdGhpcy5jaGVja092ZXJmbG93KCksdGhpc319LHQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKHQpe2lmKCF0aGlzLl9pc0J1c3koKSl7aWYodGhpcy5fYnVzeSghMCksITEsXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRzLmJlZm9yZUNsb3NlKWlmKCF0aGlzLm9wdHMuYmVmb3JlQ2xvc2UuY2FsbCh0aGlzKSlyZXR1cm4gdm9pZCB0aGlzLl9idXN5KCExKTtkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJ0aW5nbGUtZW5hYmxlZFwiKSxkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD1udWxsLHdpbmRvdy5zY3JvbGxUbyh7dG9wOnRoaXMuX3Njcm9sbFBvc2l0aW9uLGJlaGF2aW9yOlwiaW5zdGFudFwifSksdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwidGluZ2xlLW1vZGFsLS12aXNpYmxlXCIpO3ZhciBvPXRoaXM7by5tb2RhbC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLFwiZnVuY3Rpb25cIj09dHlwZW9mIG8ub3B0cy5vbkNsb3NlJiZvLm9wdHMub25DbG9zZS5jYWxsKHRoaXMpLG8uX2J1c3koITEpfX0sdC5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD90aGlzLm1vZGFsQm94Q29udGVudC5pbm5lckhUTUw9dDoodGhpcy5tb2RhbEJveENvbnRlbnQuaW5uZXJIVE1MPVwiXCIsdGhpcy5tb2RhbEJveENvbnRlbnQuYXBwZW5kQ2hpbGQodCkpLHRoaXMuaXNPcGVuKCkmJnRoaXMuY2hlY2tPdmVyZmxvdygpLHRoaXN9LHQucHJvdG90eXBlLmdldENvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RhbEJveENvbnRlbnR9LHQucHJvdG90eXBlLmFkZEZvb3Rlcj1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe3RoaXMubW9kYWxCb3hGb290ZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLm1vZGFsQm94Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtYm94X19mb290ZXJcIiksdGhpcy5tb2RhbEJveC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKX0uY2FsbCh0aGlzKSx0aGlzfSx0LnByb3RvdHlwZS5zZXRGb290ZXJDb250ZW50PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1vZGFsQm94Rm9vdGVyLmlubmVySFRNTD10LHRoaXN9LHQucHJvdG90eXBlLmdldEZvb3RlckNvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RhbEJveEZvb3Rlcn0sdC5wcm90b3R5cGUuc2V0U3RpY2t5Rm9vdGVyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmlzT3ZlcmZsb3coKXx8KHQ9ITEpLHQ/dGhpcy5tb2RhbEJveC5jb250YWlucyh0aGlzLm1vZGFsQm94Rm9vdGVyKSYmKHRoaXMubW9kYWxCb3gucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbEJveEZvb3RlciksdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKSx0aGlzLm1vZGFsQm94Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtYm94X19mb290ZXItLXN0aWNreVwiKSxlLmNhbGwodGhpcyksdGhpcy5tb2RhbEJveENvbnRlbnQuc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXT10aGlzLm1vZGFsQm94Rm9vdGVyLmNsaWVudEhlaWdodCsyMCtcInB4XCIpOnRoaXMubW9kYWxCb3hGb290ZXImJih0aGlzLm1vZGFsQm94LmNvbnRhaW5zKHRoaXMubW9kYWxCb3hGb290ZXIpfHwodGhpcy5tb2RhbC5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKSx0aGlzLm1vZGFsQm94LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb3hGb290ZXIpLHRoaXMubW9kYWxCb3hGb290ZXIuc3R5bGUud2lkdGg9XCJhdXRvXCIsdGhpcy5tb2RhbEJveEZvb3Rlci5zdHlsZS5sZWZ0PVwiXCIsdGhpcy5tb2RhbEJveENvbnRlbnQuc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXT1cIlwiLHRoaXMubW9kYWxCb3hGb290ZXIuY2xhc3NMaXN0LnJlbW92ZShcInRpbmdsZS1tb2RhbC1ib3hfX2Zvb3Rlci0tc3RpY2t5XCIpKSksdGhpc30sdC5wcm90b3R5cGUuYWRkRm9vdGVyQnRuPWZ1bmN0aW9uKHQsbyxlKXt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO3JldHVybiBzLmlubmVySFRNTD10LHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZSksXCJzdHJpbmdcIj09dHlwZW9mIG8mJm8ubGVuZ3RoJiZvLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3MuY2xhc3NMaXN0LmFkZCh0KX0pLHRoaXMubW9kYWxCb3hGb290ZXIuYXBwZW5kQ2hpbGQocyksc30sdC5wcm90b3R5cGUucmVzaXplPWZ1bmN0aW9uKCl7Y29uc29sZS53YXJuKFwiUmVzaXplIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDEuMFwiKX0sdC5wcm90b3R5cGUuaXNPdmVyZmxvdz1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ8PXRoaXMubW9kYWxCb3guY2xpZW50SGVpZ2h0fSx0LnByb3RvdHlwZS5jaGVja092ZXJmbG93PWZ1bmN0aW9uKCl7dGhpcy5tb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aW5nbGUtbW9kYWwtLXZpc2libGVcIikmJih0aGlzLmlzT3ZlcmZsb3coKT90aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtLW92ZXJmbG93XCIpOnRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInRpbmdsZS1tb2RhbC0tb3ZlcmZsb3dcIiksIXRoaXMuaXNPdmVyZmxvdygpJiZ0aGlzLm9wdHMuc3RpY2t5Rm9vdGVyP3RoaXMuc2V0U3RpY2t5Rm9vdGVyKCExKTp0aGlzLmlzT3ZlcmZsb3coKSYmdGhpcy5vcHRzLnN0aWNreUZvb3RlciYmKGUuY2FsbCh0aGlzKSx0aGlzLnNldFN0aWNreUZvb3RlcighMCkpKX0se21vZGFsOnR9fSk7IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgXCJzZWxlY3QyXCI7XHJcbmltcG9ydCB0aW5nbGUgZnJvbSBcInRpbmdsZS5qc1wiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8gT25na2lyIGZvcm1cclxuICAgICQoXCIuc2Rva3ItZm9ybV9fdGFiLW5hdlwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIik7XHJcblxyXG4gICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgLnBhcmVudChcIi5zZG9rci1mb3JtX190YWJcIilcclxuICAgICAgICAgICAgLnBhcmVudChcIi5zZG9rci1mb3JtX190YWJzXCIpXHJcbiAgICAgICAgICAgIC5maW5kKFwiLnNkb2tyLWZvcm1fX3RhYlwiKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJzZG9rci1mb3JtX190YWItLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudChcIi5zZG9rci1mb3JtX190YWJcIikuYWRkQ2xhc3MoXCJzZG9rci1mb3JtX190YWItLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAucGFyZW50KFwiLnNkb2tyLWZvcm1fX3RhYlwiKVxyXG4gICAgICAgICAgICAucGFyZW50KFwiLnNkb2tyLWZvcm1fX3RhYnNcIilcclxuICAgICAgICAgICAgLnBhcmVudChcIi5zZG9rci1mb3JtXCIpXHJcbiAgICAgICAgICAgIC5maW5kKFwiLnNkb2tyLWZvcm1fX2NvbnRlbnRcIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwic2Rva3ItZm9ybV9fY29udGVudC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICQodGFyZ2V0KS5hZGRDbGFzcyhcInNkb2tyLWZvcm1fX2NvbnRlbnQtLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNlbGVjdDJcclxuICAgICQoXCIuc2Rva3Itc2VsZWN0MlwiKS5zZWxlY3QyKCk7XHJcblxyXG4gICAgJChcIi5zZG9rci1sb2NhdGlvbi1zZWxlY3QyXCIpLnNlbGVjdDIoe1xyXG4gICAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMyxcclxuICAgICAgICBhamF4OiB7XHJcbiAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgIGRlbGF5OiAyNTAsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcTogcGFyYW1zLnRlcm0sIC8vIHNlYXJjaCBxdWVyeVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJvbmdraXJfc2VhcmNoX2xvY2F0aW9uXCIsIC8vIEFKQVggYWN0aW9uIGZvciBhZG1pbi1hamF4LnBocCxcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZG9uZ2tpcl9sY3oubm9uY2UsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogZGF0YS5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFcnJvciBtb2RhbFxyXG4gICAgdmFyIGVycm9yX21vZGFsID0gbmV3IHRpbmdsZS5tb2RhbCh7XHJcbiAgICAgICAgZm9vdGVyOiB0cnVlLFxyXG4gICAgICAgIHN0aWNreUZvb3RlcjogdHJ1ZSxcclxuICAgICAgICBjbG9zZU1ldGhvZHM6IFtcIm92ZXJsYXlcIiwgXCJidXR0b25cIiwgXCJlc2NhcGVcIl0sXHJcbiAgICAgICAgY2xvc2VMYWJlbDogc2RvbmdraXJfbGN6LmNsb3NlX2xhYmVsLFxyXG4gICAgfSk7XHJcbiAgICBlcnJvcl9tb2RhbC5hZGRGb290ZXJCdG4oXHJcbiAgICAgICAgXCJPa1wiLFxyXG4gICAgICAgIFwidGluZ2xlLWJ0biB0aW5nbGUtYnRuLS1wcmltYXJ5IHRpbmdsZS1idG4tLXB1bGwtcmlnaHRcIixcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVycm9yX21vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgLy8gQ291cmllciBzZWxlY3Rpb24gdHlwZVxyXG4gICAgbGV0IGNvdXJpZXJfc2VsZWN0aW9uX3R5cGUgPSBcInNpbmdsZVwiO1xyXG4gICAgJChcIi5zZG9rci1zZWxlY3Rpb24tdHlwZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb3VyaWVyX3NlbGVjdGlvbl90eXBlID1cclxuICAgICAgICAgICAgY291cmllcl9zZWxlY3Rpb25fdHlwZSA9PSBcInNpbmdsZVwiID8gXCJtdWx0aXBsZVwiIDogXCJzaW5nbGVcIjtcclxuICAgICAgICBpZiAoY291cmllcl9zZWxlY3Rpb25fdHlwZSA9PSBcInNpbmdsZVwiKSB7XHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcIi5zZG9rci1zaW5nbGUtY291cmllci1zZWxlY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoXCIuc2Rva3ItY291cmllcnMtd3JhcHBlclwiKS5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoXCIuc2Rva3Itc2VsZWN0LWFsbFwiKS5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoXCIuc2Rva3ItdW5zZWxlY3QtYWxsXCIpLmFkZENsYXNzKFwic2Rva3ItaGlkZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5odG1sKHNkb25na2lyX2xjei5tdWx0aXBsZV9zZWxlY3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcIi5zZG9rci1zaW5nbGUtY291cmllci1zZWxlY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcIi5zZG9rci1jb3VyaWVycy13cmFwcGVyXCIpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKFwiLnNkb2tyLXNlbGVjdC1hbGxcIikucmVtb3ZlQ2xhc3MoXCJzZG9rci1oaWRlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKFwiLnNkb2tyLXVuc2VsZWN0LWFsbFwiKS5yZW1vdmVDbGFzcyhcInNkb2tyLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuaHRtbChzZG9uZ2tpcl9sY3ouc2luZ2xlX3NlbGVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gR2V0IHNoaXBwaW5nIGNvc3RcclxuICAgICQoXCIuc2Rva3Itc2hpcHBpbmctY29zdC1mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJChcIi5zZG9rci1zY29zdC1idG5cIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICQoXCIuc2Rva3Itc2Nvc3QtYnRuXCIpLmh0bWwoc2RvbmdraXJfbGN6LnByb2Nlc3NpbmdfdGV4dCk7XHJcblxyXG4gICAgICAgIC8vIGluc3RhbmNpYXRlIG5ldyBtb2RhbFxyXG4gICAgICAgIHZhciBtb2RhbCA9IG5ldyB0aW5nbGUubW9kYWwoe1xyXG4gICAgICAgICAgICAvLyBmb290ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIHN0aWNreUZvb3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgY2xvc2VNZXRob2RzOiBbXCJvdmVybGF5XCIsIFwiYnV0dG9uXCIsIFwiZXNjYXBlXCJdLFxyXG4gICAgICAgICAgICBjbG9zZUxhYmVsOiBzZG9uZ2tpcl9sY3ouY2xvc2VfbGFiZWwsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIC8vIGFkZCBhIGJ1dHRvblxyXG4gICAgICAgIC8vIG1vZGFsLmFkZEZvb3RlckJ0bihcclxuICAgICAgICAvLyAgICAgXCJPa1wiLFxyXG4gICAgICAgIC8vICAgICBcInRpbmdsZS1idG4gdGluZ2xlLWJ0bi0tcHJpbWFyeSB0aW5nbGUtYnRuLS1wdWxsLXJpZ2h0XCIsXHJcbiAgICAgICAgLy8gICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIG1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gKTtcclxuXHJcbiAgICAgICAgdmFyIGNvdXJpZXJzID0gW107XHJcblxyXG4gICAgICAgIGlmIChjb3VyaWVyX3NlbGVjdGlvbl90eXBlID09IFwic2luZ2xlXCIpIHtcclxuICAgICAgICAgICAgY291cmllcnMucHVzaCgkKHRoaXMpLmZpbmQoXCIuc2Rva3ItY29zdC1jb3VyaWVyXCIpLnZhbCgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5zZG9rci1jb3VyaWVycy1jYjpjaGVja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291cmllcnMucHVzaCgkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogc2RvbmdraXJfbGN6LmFqYXh1cmwsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwib25na2lyX3NoaXBwaW5nX2Nvc3RcIixcclxuICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkb25na2lyX2xjei5ub25jZSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogJCh0aGlzKS5maW5kKFwiLnNkb2tyLW9yaWdpbi1pbnB1dFwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIGRlc3Q6ICQodGhpcykuZmluZChcIi5zZG9rci1kZXN0aW5hdGlvbi1pbnB1dFwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIHdlaWdodDogJCh0aGlzKS5maW5kKFwiLnNkb2tyLXdlaWdodC1pbnB1dFwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIGNvdXJpZXJzOiBjb3VyaWVycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSByZXMuZGF0YS5kYXRhLmh0bWw7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgY29udGVudFxyXG4gICAgICAgICAgICAgICAgbW9kYWwuc2V0Q29udGVudChodG1sKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBvcGVuIG1vZGFsXHJcbiAgICAgICAgICAgICAgICBtb2RhbC5vcGVuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5zZG9rci1zY29zdC1idG5cIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2Rva3Itc2Nvc3QtYnRuXCIpLmh0bWwoc2RvbmdraXJfbGN6LmdldF9zaGlwcGluZ19jb3N0X3RleHQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIGVycm9yX21vZGFsLnNldENvbnRlbnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JfbW9kYWwub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zZG9rci1zY29zdC1idG5cIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2Rva3Itc2Nvc3QtYnRuXCIpLmh0bWwoc2RvbmdraXJfbGN6LmdldF9zaGlwcGluZ19jb3N0X3RleHQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2hpcHBpbmcgdHJhY2tpbmdcclxuICAgICQoXCIuc2Rva3Itc2hpcHBpbmctdHJhY2tpbmctZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoXCIuc2Rva3Itc3RyYWNrLWJ0blwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgJChcIi5zZG9rci1zdHJhY2stYnRuXCIpLmh0bWwoc2RvbmdraXJfbGN6LnByb2Nlc3NpbmdfdGV4dCk7XHJcblxyXG4gICAgICAgIC8vIGluc3RhbmNpYXRlIG5ldyBtb2RhbFxyXG4gICAgICAgIHZhciBtb2RhbCA9IG5ldyB0aW5nbGUubW9kYWwoe1xyXG4gICAgICAgICAgICAvLyBmb290ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIHN0aWNreUZvb3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgY2xvc2VNZXRob2RzOiBbXCJvdmVybGF5XCIsIFwiYnV0dG9uXCIsIFwiZXNjYXBlXCJdLFxyXG4gICAgICAgICAgICBjbG9zZUxhYmVsOiBzZG9uZ2tpcl9sY3ouY2xvc2VfbGFiZWwsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzOiBbXCJzZG9rci10aW5nbGUtc2hpcC10cmFja2luZ1wiXSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gLy8gYWRkIGEgYnV0dG9uXHJcbiAgICAgICAgLy8gbW9kYWwuYWRkRm9vdGVyQnRuKFxyXG4gICAgICAgIC8vICAgICBcIk9rXCIsXHJcbiAgICAgICAgLy8gICAgIFwidGluZ2xlLWJ0biB0aW5nbGUtYnRuLS1wcmltYXJ5IHRpbmdsZS1idG4tLXB1bGwtcmlnaHRcIixcclxuICAgICAgICAvLyAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbW9kYWwuY2xvc2UoKTtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyApO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHNkb25na2lyX2xjei5hamF4dXJsLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcIm9uZ2tpcl9zaGlwcGluZ190cmFja1wiLFxyXG4gICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RvbmdraXJfbGN6Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgdHJhY2tpbmdfbnVtYmVyOiAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2Rva3ItdHJhY2tpbmctbnVtYmVyLWlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgY291cmllcjogJCh0aGlzKS5maW5kKFwiLnNkb2tyLXRyYWNrLWNvdXJpZXItaW5wdXRcIikudmFsKCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBodG1sID0gcmVzLmRhdGEuZGF0YS5odG1sO1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIG1vZGFsLnNldENvbnRlbnQoaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gb3BlbiBtb2RhbFxyXG4gICAgICAgICAgICAgICAgbW9kYWwub3BlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIuc2Rva3Itc3RyYWNrLWJ0blwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zZG9rci1zdHJhY2stYnRuXCIpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgc2RvbmdraXJfbGN6LmdldF9zaGlwcGluZ19jb3N0X3RleHQsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIGVycm9yX21vZGFsLnNldENvbnRlbnQoZXJyLnJlc3BvbnNlSlNPTi5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JfbW9kYWwub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zZG9rci1zdHJhY2stYnRuXCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNkb2tyLXN0cmFjay1idG5cIikuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICBzZG9uZ2tpcl9sY3ouZ2V0X3NoaXBwaW5nX3RyYWNrX3RleHQsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zZG9rci1yZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFsZXJ0KFwidGVzdFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2Rva3Itc2VsZWN0LWFsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCQodGhpcykuZGF0YShcInRhcmdldFwiKSkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnNkb2tyLXVuc2VsZWN0LWFsbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCQodGhpcykuZGF0YShcInRhcmdldFwiKSkucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9