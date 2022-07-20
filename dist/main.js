/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"date\": () => (/* binding */ date),\n/* harmony export */   \"description\": () => (/* binding */ description),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"priority\": () => (/* binding */ priority),\n/* harmony export */   \"resetDisplay\": () => (/* binding */ resetDisplay),\n/* harmony export */   \"title\": () => (/* binding */ title)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nconst modalOverlay = document.querySelector('.modal-overlay');\nconst modal = document.querySelector('.modal');\nconst form = document.querySelector('#form');\nconst title = document.querySelector('#title');\nconst description = document.querySelector('#description');\nconst date = document.querySelector('#date');\nconst priority = document.querySelector('#priority');\nconst closeButton = document.querySelector('.close');\nconst saveBtn = document.querySelector('#save');\nconst addButton = document.querySelector('.add-button');\nconst todoContainer = document.querySelector('.todo-container');\n\nshowTask();\n\n(function toggleModal(){\n    showModal();\n  if (showModal){\n    closeModal();\n  }\n})();\n\nfunction showModal(){\n  addButton.addEventListener('click', () => {\n    modal.style.display = 'flex';\n    modalOverlay.style.display = 'block';\n  })\n}\n\nfunction closeModal(){\n  modalOverlay.addEventListener('click', resetDisplay);\n  closeButton.addEventListener('click', resetDisplay);\n}\n\nfunction resetDisplay() {\n  modal.style.display = 'none';\n  modalOverlay.style.display = 'none';\n  form.reset();\n}\n\n(function submitForm(){\n  saveBtn.addEventListener('click', () => {\n    _todo__WEBPACK_IMPORTED_MODULE_0__.validateInput();\n    removeAll();\n    showTask();\n  })\n})();\n\nfunction showTask(){\n  _todo__WEBPACK_IMPORTED_MODULE_0__.myTasks.forEach((task) => {\n    const taskContainer = document.createElement('div');\n    taskContainer.setAttribute('class', 'task')\n    todoContainer.insertBefore(taskContainer, addButton);\n\n    const taskCheck = document.createElement('input');\n    taskContainer.appendChild(taskCheck);\n    taskCheck.setAttribute('type', 'checkbox');\n  \n    const taskTitle = document.createElement('h2');\n    taskContainer.appendChild(taskTitle);\n    taskTitle.textContent = task.title;\n  })\n}\n\nfunction removeAll(){\n  const removeDiv = todoContainer.querySelectorAll('.task');\n  removeDiv.forEach(div => div.remove());\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconsole.log('ok!')\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myTasks\": () => (/* binding */ myTasks),\n/* harmony export */   \"validateInput\": () => (/* binding */ validateInput)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst myTasks = [];\n\nconst taskFactory = (title, description, date, priority) => {\n  return {title, description, date, priority}\n}\n\nfunction validateInput() {\n  if (_dom__WEBPACK_IMPORTED_MODULE_0__.title.value != \"\"){\n    submitTask();\n    console.log(myTasks);\n    _dom__WEBPACK_IMPORTED_MODULE_0__.resetDisplay();\n  } else {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.title.reportValidity();\n  }\n}\n\n//Add new task\nfunction submitTask(){\n  const newTask = taskFactory(_dom__WEBPACK_IMPORTED_MODULE_0__.title.value, _dom__WEBPACK_IMPORTED_MODULE_0__.description.value, _dom__WEBPACK_IMPORTED_MODULE_0__.date.value, _dom__WEBPACK_IMPORTED_MODULE_0__.priority.value);\n  myTasks.push(newTask);\n}\n\nconst task = taskFactory('test', 'test', '19/07/22', 'high');\nmyTasks.push(task);\nconsole.log(myTasks);\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;