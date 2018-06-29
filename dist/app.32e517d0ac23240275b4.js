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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /Users/xujianwei/sites/react-server/node_modules/eslint-config-airbnb/rules/react.js:\n\tConfiguration for rule \"react/jsx-wrap-multilines\" is invalid:\n\tValue \"[object Object]\" should NOT have additional properties.\n\nReferenced from: /Users/xujianwei/sites/react-server/node_modules/eslint-config-airbnb/index.js\nReferenced from: /Users/xujianwei/sites/react-server/client/.eslintrc\n    at validateRuleOptions (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-validator.js:113:15)\n    at Object.keys.forEach.id (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-validator.js:153:9)\n    at Array.forEach (<anonymous>)\n    at validateRules (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-validator.js:152:30)\n    at Object.validate (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-validator.js:230:5)\n    at loadFromDisk (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-file.js:549:19)\n    at load (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-file.js:592:20)\n    at configExtends.reduceRight (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-file.js:421:36)\n    at Array.reduceRight (<anonymous>)\n    at applyExtends (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-file.js:403:28)\n    at loadFromDisk (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-file.js:556:22)\n    at load (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-file.js:592:20)\n    at configExtends.reduceRight (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-file.js:421:36)\n    at Array.reduceRight (<anonymous>)\n    at applyExtends (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-file.js:403:28)\n    at loadFromDisk (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-file.js:556:22)\n    at Object.load (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config/config-file.js:592:20)\n    at Config.getLocalConfigHierarchy (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config.js:226:44)\n    at Config.getConfigHierarchy (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config.js:180:43)\n    at Config.getConfigVector (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config.js:285:21)\n    at Config.getConfig (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/config.js:328:29)\n    at processText (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/cli-engine.js:158:33)\n    at CLIEngine.executeOnText (/Users/xujianwei/sites/react-server/node_modules/eslint/lib/cli-engine.js:606:17)\n    at lint (/Users/xujianwei/sites/react-server/node_modules/eslint-loader/index.js:218:17)\n    at Object.module.exports (/Users/xujianwei/sites/react-server/node_modules/eslint-loader/index.js:213:21)");

/***/ })
/******/ ]);