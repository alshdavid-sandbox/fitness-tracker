(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/interface/views/home/home.tsx":
/*!*******************************************!*\
  !*** ./src/interface/views/home/home.tsx ***!
  \*******************************************/
/*! exports provided: CreateHomeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateHomeView\", function() { return CreateHomeView; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// import './home.scss'\n// import React, { Component } from 'react';\n// import { Router, Todo, Observe } from '~/platform';\n// import { TodoItem, Navbar, FloatingActionBar } from '~/components'\n// export const homeViewComponent = (\n//     router: Router,\n//     todoService: Todo.Service\n// ) => {\n//     class HomeViewComponent extends Component {\n//         @Observe(todoService.store)\n//         todoItems: Todo.ItemRepository = {}\n//         updateItem(index: string, item: Todo.Item) {\n//             return () => todoService.save(index, { ...item, completed: !item.completed})\n//         }\n//         generateTodoList() {\n//             return Object\n//                 .keys(this.todoItems)\n//                 .map(key => ({ ...this.todoItems[key], key }))\n//                 .map(item =>\n//                     <TodoItem\n//                         onClick={this.updateItem(item.key, item)}\n//                         key={item.key}\n//                         name={item.item}\n//                         date={item.date}\n//                         completed={item.completed} />\n//                 )\n//         }\n//         render() {\n//             return (\n//                 <div className=\"home-view-component\">\n//                     <Navbar>Home</Navbar>\n//                     { this.generateTodoList() }\n//                     <FloatingActionBar\n//                         onClick={() => router.navigate('/add')}>\n//                         Add\n//                     </FloatingActionBar>\n//                 </div>\n//             )\n//         }\n//     }\n//     return HomeViewComponent\n// }\n\nconst CreateHomeView = () => {\n    class HomeView extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n        render() {\n            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"home-view\" }, \"Hi\"));\n        }\n    }\n    return HomeView;\n};\n\n\n//# sourceURL=webpack:///./src/interface/views/home/home.tsx?");

/***/ }),

/***/ "./src/interface/views/home/index.ts":
/*!*******************************************!*\
  !*** ./src/interface/views/home/index.ts ***!
  \*******************************************/
/*! exports provided: CreateHomeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/interface/views/home/home.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CreateHomeView\", function() { return _home__WEBPACK_IMPORTED_MODULE_0__[\"CreateHomeView\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/interface/views/home/index.ts?");

/***/ })

}]);