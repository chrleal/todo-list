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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"date\": () => (/* binding */ date),\n/* harmony export */   \"description\": () => (/* binding */ description),\n/* harmony export */   \"priority\": () => (/* binding */ priority),\n/* harmony export */   \"showTask\": () => (/* binding */ showTask),\n/* harmony export */   \"title\": () => (/* binding */ title)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nlet indexTask;\nconst modalOverlay = document.querySelector('.modal-overlay');\nconst modal = document.querySelector('.modal');\nconst modalTitle = document.querySelector('.modal-title');\nconst form = document.querySelector('#form');\nconst title = document.querySelector('#title');\nconst description = document.querySelector('#description');\nconst date = document.querySelector('#date');\nconst priority = document.querySelector('#priority');\nconst closeButton = document.querySelector('.close');\nconst saveEditBtn = document.querySelector('#save-edit-button');\nconst addButton = document.querySelector('.add-button');\nconst todoContainer = document.querySelector('.todo-container');\n\n(function toggleModal(){\n    showModal();\n  if (showModal){\n    closeModal();\n  }\n})();\n\nfunction showModal(){\n  addButton.addEventListener('click', () => {\n    modal.style.display = 'flex';\n    modalOverlay.style.display = 'block';\n    modalTitle.textContent = \"New Task\";\n    saveEditBtn.textContent = \"Save\";\n    saveEditBtn.classList.remove('edit');\n    saveEditBtn.classList.add('save');\n  })\n}\n\nfunction closeModal(){\n  modalOverlay.addEventListener('click', resetDisplay);\n  closeButton.addEventListener('click', resetDisplay);\n}\n\nfunction resetDisplay() {\n  modal.style.display = 'none';\n  modalOverlay.style.display = 'none';\n  form.reset();\n}\n\n(function submitForm(){\n  saveEditBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('save')){\n      _todo__WEBPACK_IMPORTED_MODULE_0__.submitTask();\n      resetDisplay();\n      removeAll();\n      showTask();\n    } else if (e.target.classList.contains('edit')){\n      _todo__WEBPACK_IMPORTED_MODULE_0__.editTask(indexTask);\n      resetDisplay();\n      removeAll();\n      showTask();\n      console.log(\"dentro do botao\" + indexTask)\n    }\n  })\n})();\n\nfunction showTask(){\n  _todo__WEBPACK_IMPORTED_MODULE_0__.myTasks.forEach((task, index) => {\n    const taskContainer = document.createElement('div');\n    taskContainer.setAttribute('class', 'task-container')\n    taskContainer.setAttribute('data-id', `${index}`)\n    todoContainer.insertBefore(taskContainer, addButton);\n\n    const taskCheck = document.createElement('input');\n    taskContainer.appendChild(taskCheck);\n    taskCheck.setAttribute('type', 'checkbox');\n\n    const taskTitle = document.createElement('h2');\n    taskContainer.appendChild(taskTitle);\n    taskTitle.textContent = task.title;\n\n    const taskEditBtn = document.createElement('span');\n    taskContainer.appendChild(taskEditBtn);\n    taskEditBtn.setAttribute('class', 'material-icons-outlined edit-button');\n    taskEditBtn.textContent = \"edit_note\";\n    \n    taskEditBtn.addEventListener('click', (e) => {\n      indexTask = e.target.parentElement.getAttribute('data-id');\n      console.log(\"dentro do lapis\" + indexTask + index);\n      modal.style.display = 'flex';\n      modalOverlay.style.display = 'block';\n      modalTitle.textContent = \"Edit Task\";\n      saveEditBtn.textContent = \"Edit\";\n      saveEditBtn.classList.remove('save');\n      saveEditBtn.classList.add('edit');\n      editModal(task.title, task.description, task.date, task.priority);\n    })\n\n    const taskDeleteBtn = document.createElement('span');\n    taskContainer.appendChild(taskDeleteBtn);\n    taskDeleteBtn.setAttribute('class', 'material-icons-outlined delete-button');\n    taskDeleteBtn.textContent = \"delete_outline\";\n\n    taskDeleteBtn.addEventListener('click', () => {\n      console.log(task);\n      todoContainer.removeChild(taskContainer);\n      _todo__WEBPACK_IMPORTED_MODULE_0__.deleteTask(task);\n    })\n  })\n}\n\nfunction editModal(titleEdit, descriptionEdit, dateEdit, priorityEdit) {\n  title.value = titleEdit;\n  description.value = descriptionEdit;\n  date.value = dateEdit;\n  priority.value = priorityEdit;\n}\n\nfunction removeAll(){\n  const removeDiv = todoContainer.querySelectorAll('.task-container');\n  removeDiv.forEach(div => div.remove());\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__.showTask();\n\nconsole.log('ok!')\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"myTasks\": () => (/* binding */ myTasks),\n/* harmony export */   \"submitTask\": () => (/* binding */ submitTask)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nlet validate;\nconst myTasks = [];\n\nconst taskFactory = (title, description, date, priority) => {\n  return {title, description, date, priority}\n}\n\nfunction validateInput() {\n  if (_dom__WEBPACK_IMPORTED_MODULE_0__.title.value != \"\"){\n    return validate = true;\n  } else {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.title.reportValidity();\n    return validate = false;\n  }\n}\n\nfunction submitTask(){\n  if (validateInput() == true) {\n    const newTask = taskFactory(_dom__WEBPACK_IMPORTED_MODULE_0__.title.value, _dom__WEBPACK_IMPORTED_MODULE_0__.description.value, _dom__WEBPACK_IMPORTED_MODULE_0__.date.value, _dom__WEBPACK_IMPORTED_MODULE_0__.priority.value);\n    myTasks.push(newTask);\n    console.log(myTasks);\n  }\n}\n\nfunction deleteTask(task){\n  myTasks.splice(myTasks.indexOf(task), 1)\n}\n\nfunction editTask(index) {\n  if (validateInput() == true) {\n    myTasks[index].title = _dom__WEBPACK_IMPORTED_MODULE_0__.title.value;\n    myTasks[index].description = _dom__WEBPACK_IMPORTED_MODULE_0__.description.value;\n    myTasks[index].date = _dom__WEBPACK_IMPORTED_MODULE_0__.date.value;\n    myTasks[index].priority = _dom__WEBPACK_IMPORTED_MODULE_0__.priority.value;\n  }\n}\n\nconst task = taskFactory('test', 'test', '19/07/22', 'high');\nmyTasks.push(task);\nconsole.log(myTasks);\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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