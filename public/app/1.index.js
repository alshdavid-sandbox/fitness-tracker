(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/interface/views/home/home.tsx":
/*!*******************************************!*\
  !*** ./src/interface/views/home/home.tsx ***!
  \*******************************************/
/*! exports provided: HomeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeView\", function() { return HomeView; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _platform_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/platform/item */ \"./src/platform/item/index.ts\");\n/* harmony import */ var _platform_use_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/platform/use-observable */ \"./src/platform/use-observable/index.ts\");\n\n\n\nconst HomeView = (store) => () => {\n    const items = Object(_platform_use_observable__WEBPACK_IMPORTED_MODULE_2__[\"useObservable\"])(store.$);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { onClick: () => store.add(_platform_item__WEBPACK_IMPORTED_MODULE_1__[\"create\"]('test')) }, \"Add\"),\n        items.map((item, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { key: i }, item.title)));\n};\n\n\n//# sourceURL=webpack:///./src/interface/views/home/home.tsx?");

/***/ }),

/***/ "./src/interface/views/home/index.ts":
/*!*******************************************!*\
  !*** ./src/interface/views/home/index.ts ***!
  \*******************************************/
/*! exports provided: HomeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/interface/views/home/home.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HomeView\", function() { return _home__WEBPACK_IMPORTED_MODULE_0__[\"HomeView\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/interface/views/home/index.ts?");

/***/ }),

/***/ "./src/platform/use-observable/index.ts":
/*!**********************************************!*\
  !*** ./src/platform/use-observable/index.ts ***!
  \**********************************************/
/*! exports provided: useObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _use_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-observable */ \"./src/platform/use-observable/use-observable.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useObservable\", function() { return _use_observable__WEBPACK_IMPORTED_MODULE_0__[\"useObservable\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/platform/use-observable/index.ts?");

/***/ }),

/***/ "./src/platform/use-observable/use-observable.ts":
/*!*******************************************************!*\
  !*** ./src/platform/use-observable/use-observable.ts ***!
  \*******************************************************/
/*! exports provided: useObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useObservable\", function() { return useObservable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useObservable(observable, initialValue) {\n    if (!initialValue && observable.value) {\n        initialValue = observable.value;\n    }\n    const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialValue);\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n        const subscription = observable.subscribe(newValue => {\n            setValue(newValue);\n        });\n        return () => subscription.unsubscribe();\n    }, []);\n    return value;\n}\n\n\n//# sourceURL=webpack:///./src/platform/use-observable/use-observable.ts?");

/***/ })

}]);