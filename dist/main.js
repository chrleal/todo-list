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

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));\n  utcDate.setUTCFullYear(date.getFullYear());\n  return date.getTime() - utcDate.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInCalendarDays)\n/* harmony export */ });\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js\");\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\nvar MILLISECONDS_IN_DAY = 86400000;\n/**\n * @name differenceInCalendarDays\n * @category Day Helpers\n * @summary Get the number of calendar days between the given dates.\n *\n * @description\n * Get the number of calendar days between the given dates. This means that the times are removed\n * from the dates and then the difference in days is calculated.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar days\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many calendar days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * const result = differenceInCalendarDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 366\n * // How many calendar days are between\n * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?\n * const result = differenceInCalendarDays(\n *   new Date(2011, 6, 3, 0, 1),\n *   new Date(2011, 6, 2, 23, 59)\n * )\n * //=> 1\n */\n\nfunction differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startOfDayLeft);\n  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startOfDayRight); // Round the number of days to the nearest integer\n  // because the number of milliseconds in a day is not constant\n  // (e.g. it's different in the day of the daylight saving time clock shift)\n\n  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/differenceInCalendarDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInDays/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInDays)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ \"./node_modules/date-fns/esm/differenceInCalendarDays/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n // Like `compareAsc` but uses local time not UTC, which is needed\n// for accurate equality comparisons of UTC timestamps that end up\n// having the same representation in local time, e.g. one hour before\n// DST ends vs. the instant that DST ends.\n\nfunction compareLocalAsc(dateLeft, dateRight) {\n  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n/**\n * @name differenceInDays\n * @category Day Helpers\n * @summary Get the number of full days between the given dates.\n *\n * @description\n * Get the number of full day periods between two dates. Fractional days are\n * truncated towards zero.\n *\n * One \"full day\" is the distance between a local time in one day to the same\n * local time on the next or previous day. A full day can sometimes be less than\n * or more than 24 hours if a daylight savings change happens between two dates.\n *\n * To ignore DST and only measure exact 24-hour periods, use this instead:\n * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.\n *\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of full days according to the local timezone\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many full days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * const result = differenceInDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 365\n * // How many full days are between\n * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?\n * const result = differenceInDays(\n *   new Date(2011, 6, 3, 0, 1),\n *   new Date(2011, 6, 2, 23, 59)\n * )\n * //=> 0\n * // How many full days are between\n * // 1 March 2020 0:00 and 1 June 2020 0:00 ?\n * // Note: because local time is used, the\n * // result will always be 92 days, even in\n * // time zones where DST starts and the\n * // period has only 92*24-1 hours.\n * const result = differenceInDays(\n *   new Date(2020, 5, 1),\n *   new Date(2020, 2, 1)\n * )\n//=> 92\n */\n\n\nfunction differenceInDays(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var sign = compareLocalAsc(dateLeft, dateRight);\n  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dateLeft, dateRight));\n  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full\n  // If so, result must be decreased by 1 in absolute value\n\n  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);\n  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero\n\n  return result === 0 ? 0 : result;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/differenceInDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\n\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\n\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"date\": () => (/* binding */ date),\n/* harmony export */   \"description\": () => (/* binding */ description),\n/* harmony export */   \"heading\": () => (/* binding */ heading),\n/* harmony export */   \"priority\": () => (/* binding */ priority),\n/* harmony export */   \"resetDisplay\": () => (/* binding */ resetDisplay),\n/* harmony export */   \"saveEditBtn\": () => (/* binding */ saveEditBtn),\n/* harmony export */   \"showTask\": () => (/* binding */ showTask),\n/* harmony export */   \"title\": () => (/* binding */ title),\n/* harmony export */   \"titleProject\": () => (/* binding */ titleProject)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/differenceInDays/index.js\");\n\n\n\nlet indexTask;\nlet filteredTasks;\nconst modalOverlay = document.querySelector('.modal-overlay');\nconst modal = document.querySelector('.modal-todo');\nconst modalTitle = document.querySelector('.modal-title');\nconst form = document.querySelector('#form-todo');\nconst formProject = document.querySelector('#form-project');\nconst title = document.querySelector('#title');\nconst titleProject = document.querySelector('#title-project')\nconst description = document.querySelector('#description');\nconst date = document.querySelector('#date');\nconst priority = document.querySelector('#priority');\nconst closeButton = document.querySelector('.close');\nconst saveEditBtn = document.querySelector('#save-edit-button');\nconst addButton = document.querySelector('.add-button');\nconst todoContainer = document.querySelector('.todo-container');\nconst projectBtn = document.querySelector('#add-project');\nconst projectContainer = document.querySelector('.sidebar-project');\nconst heading = document.querySelector('.heading');\nconst sidebarBtns = document.querySelectorAll('.sidebar-item-content');\n\n(function sidebarEventHandler(){\n  sidebarBtns.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      heading.textContent = btn.querySelector('p').textContent;\n      removeAllTasks();\n      showTask(_todo__WEBPACK_IMPORTED_MODULE_0__.myTasks);\n      addButton.style.display = 'flex';\n      saveEditBtn.removeAttribute('class');\n      saveEditBtn.classList.add('save-inbox-task');\n      switch (e.target.id){\n        case 'today':\n          filteredTasks = _todo__WEBPACK_IMPORTED_MODULE_0__.myTasks.filter(task => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Date(task.date.replace(/-/g, '\\/'))));\n          console.log('click');\n          removeAllTasks();\n          showTask(filteredTasks);\n          addButton.style.display = 'none';\n          break;\n        case 'upcoming':\n          filteredTasks = _todo__WEBPACK_IMPORTED_MODULE_0__.myTasks.filter(task => {\n            const totalDays = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new Date(task.date.replace(/-/g, '\\/')), new Date());\n            if (totalDays >= 0 && totalDays <= 6){\n              return task\n            }\n          })\n          removeAllTasks();\n          showTask(filteredTasks);\n          addButton.style.display = 'none';\n          break;\n        case 'important':\n          filteredTasks = _todo__WEBPACK_IMPORTED_MODULE_0__.myTasks.filter(task => (task.priority == 'high'));\n          removeAllTasks();\n          showTask(filteredTasks);\n          addButton.style.display = 'none';\n          break;\n        case 'completed':\n          filteredTasks = _todo__WEBPACK_IMPORTED_MODULE_0__.myTasks.filter(task => (task.checkbox == 'checked'));\n          removeAllTasks();\n          showTask(filteredTasks);\n          addButton.style.display = 'none';\n          break;\n      }\n    })\n  })\n})();\n\n(function toggleModal(){\n    showModal();\n  if (showModal){\n    closeModal();\n  }\n})();\n\nfunction showModal(){\n  addButton.addEventListener('click', () => {\n    modal.style.display = 'flex';\n    modalOverlay.style.display = 'block';\n    modalTitle.textContent = \"New Task\";\n    saveEditBtn.textContent = \"Save\";\n    form.style.display = 'block';\n    formProject.style.display = 'none';\n  })\n\n   projectBtn.addEventListener('click', () => {\n    modal.style.display = 'flex';\n    modalOverlay.style.display = 'block';\n    modalTitle.textContent = \"New Project\";\n    saveEditBtn.textContent = \"Save\";\n    saveEditBtn.removeAttribute('class');\n    saveEditBtn.classList.add('save-project');\n    form.style.display = 'none';\n    formProject.style.display = 'block';\n    formProject.reset();\n  })\n}\n\nfunction closeModal(){\n  modalOverlay.addEventListener('click', resetDisplay);\n  closeButton.addEventListener('click', resetDisplay);\n}\n\nfunction resetDisplay() {\n  modal.style.display = 'none';\n  modalOverlay.style.display = 'none';\n  form.reset();\n}\n\n(function submitForm(){\n  saveEditBtn.addEventListener('click', () => {\n    if (saveEditBtn.classList.contains('save-inbox-task')){\n      _todo__WEBPACK_IMPORTED_MODULE_0__.submitTask();\n      removeAllTasks();\n      showTask(_todo__WEBPACK_IMPORTED_MODULE_0__.myTasks);\n      console.log(saveEditBtn.className, _todo__WEBPACK_IMPORTED_MODULE_0__.myTasks);\n    } else if (saveEditBtn.classList.contains('save-project-task')){\n      _todo__WEBPACK_IMPORTED_MODULE_0__.submitTask();\n      removeAllTasks();\n      showTask(_todo__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(item => item.title == heading.textContent).tasks);\n      console.log(_todo__WEBPACK_IMPORTED_MODULE_0__.myTasks, _todo__WEBPACK_IMPORTED_MODULE_0__.myProjects);\n    } else if (saveEditBtn.classList.contains('save-project')){\n      _todo__WEBPACK_IMPORTED_MODULE_0__.submitProject();\n      removeAllProjects();\n      showProject();\n      console.log(saveEditBtn.className, _todo__WEBPACK_IMPORTED_MODULE_0__.myProjects);\n    } else if (saveEditBtn.classList.contains('edit-task')){\n      _todo__WEBPACK_IMPORTED_MODULE_0__.editTask(indexTask);\n      removeAllTasks();\n      showTask(_todo__WEBPACK_IMPORTED_MODULE_0__.myTasks);\n      console.log(saveEditBtn.className, _todo__WEBPACK_IMPORTED_MODULE_0__.myTasks);\n    } \n  })\n})();\n\nfunction showProject(){\n  _todo__WEBPACK_IMPORTED_MODULE_0__.myProjects.forEach((project) => {\n    const newProject = document.createElement('div');\n    newProject.classList.add('sidebar-project-content');\n    newProject.setAttribute('id', 'project');\n    newProject.textContent = project.title;\n    projectContainer.appendChild(newProject);\n    newProject.addEventListener('click', () => {\n      removeAllTasks();\n      filteredTasks = _todo__WEBPACK_IMPORTED_MODULE_0__.myTasks.filter(task => (task.project == project.title));\n      addButton.style.display = 'flex';\n      heading.textContent = project.title;\n      showTask(filteredTasks);\n      // console.log('showproject', filteredTasks, todo.myTasks);\n      saveEditBtn.removeAttribute('class');\n      saveEditBtn.classList.add('save-project-task');\n    })\n  })\n}\n\n(function projectEventHandler(){\n  \n})();\n\nfunction showTask(tasks){\n  if (tasks) {\n    tasks.forEach((task, index) => {\n      const taskContainer = document.createElement('div');\n      taskContainer.setAttribute('class', 'task-container')\n      taskContainer.setAttribute('data-id', `${index}`)\n      todoContainer.insertBefore(taskContainer, addButton);\n\n      const taskCheck = document.createElement('input');\n      taskContainer.appendChild(taskCheck);\n      taskCheck.setAttribute('type', 'checkbox');\n\n      if (task.checkbox == 'unchecked'){\n        taskCheck.removeAttribute('checked', true);\n      } else {\n        taskCheck.setAttribute('checked', true);\n      }\n\n      taskCheck.addEventListener('click', () => {\n        if (task.checkbox == 'unchecked'){\n          taskCheck.removeAttribute('checked', false);\n          taskCheck.setAttribute('checked', true);\n          task.checkbox = 'checked';\n        } else {\n          taskCheck.removeAttribute('checked', true);\n          taskCheck.setAttribute('checked', false);\n          task.checkbox = 'unchecked';\n        }\n      })\n\n      const taskTitle = document.createElement('h2');\n      taskTitle.classList.add('task-title');\n      taskContainer.appendChild(taskTitle);\n      taskTitle.textContent = task.title;\n\n      const taskEditBtn = document.createElement('span');\n      taskContainer.appendChild(taskEditBtn);\n      taskEditBtn.setAttribute('class', 'material-icons-outlined edit-button');\n      taskEditBtn.textContent = \"edit_note\";\n      \n      taskEditBtn.addEventListener('click', (e) => {\n        indexTask = e.target.parentElement.getAttribute('data-id');\n        modal.style.display = 'flex';\n        modalOverlay.style.display = 'block';\n        modalTitle.textContent = \"Edit Task\";\n        saveEditBtn.textContent = \"Edit\";\n        saveEditBtn.removeAttribute('class');\n        saveEditBtn.classList.add('edit-task');\n        editModal(task.title, task.description, task.date, task.priority);\n      })\n\n      const taskDeleteBtn = document.createElement('span');\n      taskContainer.appendChild(taskDeleteBtn);\n      taskDeleteBtn.setAttribute('class', 'material-icons-outlined delete-button');\n      taskDeleteBtn.textContent = \"delete_outline\";\n\n      taskDeleteBtn.addEventListener('click', () => {\n        console.log(task);\n        todoContainer.removeChild(taskContainer);\n        _todo__WEBPACK_IMPORTED_MODULE_0__.deleteTask(task);\n      })\n    })\n  }\n}\n\nfunction editModal(titleEdit, descriptionEdit, dateEdit, priorityEdit) {\n  title.value = titleEdit;\n  description.value = descriptionEdit;\n  date.value = dateEdit;\n  priority.value = priorityEdit;\n}\n\nfunction removeAllTasks(){\n  const removeDiv = todoContainer.querySelectorAll('.task-container');\n  removeDiv.forEach(div => div.remove());\n}\n\nfunction removeAllProjects(){\n  const removeProject = projectContainer.querySelectorAll('#project');\n  removeProject.forEach(div => div.remove());\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"myProjects\": () => (/* binding */ myProjects),\n/* harmony export */   \"myTasks\": () => (/* binding */ myTasks),\n/* harmony export */   \"submitProject\": () => (/* binding */ submitProject),\n/* harmony export */   \"submitTask\": () => (/* binding */ submitTask)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nlet validate;\nconst myTasks = [];\nconst myProjects = [];\n\nconst taskFactory = (title, description, date, priority, project, checkbox) => {\n  return {title, description, date, priority, project, checkbox}\n}\n\nconst projectFactory = (title) => {\n  return {title, tasks: []}\n}\n\nfunction validateInput() {\n  if (_dom__WEBPACK_IMPORTED_MODULE_0__.title.value != \"\" || _dom__WEBPACK_IMPORTED_MODULE_0__.titleProject.value != \"\"){\n    return validate = true;\n  } else {\n    return validate = false;\n  }\n}\n\nfunction submitTask(){\n  if (validateInput() == true) {\n    const newTask = taskFactory(_dom__WEBPACK_IMPORTED_MODULE_0__.title.value, _dom__WEBPACK_IMPORTED_MODULE_0__.description.value, _dom__WEBPACK_IMPORTED_MODULE_0__.date.value, _dom__WEBPACK_IMPORTED_MODULE_0__.priority.value, _dom__WEBPACK_IMPORTED_MODULE_0__.heading.textContent, 'unchecked');\n    myTasks.push(newTask);\n    if (_dom__WEBPACK_IMPORTED_MODULE_0__.saveEditBtn.classList.contains('save-project-task')){\n      myProjects.find(item => item.title == _dom__WEBPACK_IMPORTED_MODULE_0__.heading.textContent).tasks.push(newTask);\n    }\n    _dom__WEBPACK_IMPORTED_MODULE_0__.resetDisplay();\n  } else {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.title.reportValidity();\n    _dom__WEBPACK_IMPORTED_MODULE_0__.titleProject.reportValidity();\n  }\n}\n\nfunction submitProject() {\n  if (validateInput() == true) {\n    if (myProjects.find(item => item.title == _dom__WEBPACK_IMPORTED_MODULE_0__.titleProject.value)){\n      _dom__WEBPACK_IMPORTED_MODULE_0__.titleProject.setCustomValidity('This title has been used');\n      _dom__WEBPACK_IMPORTED_MODULE_0__.titleProject.reportValidity();\n      return\n    }\n    const newProject = projectFactory(_dom__WEBPACK_IMPORTED_MODULE_0__.titleProject.value);\n    myProjects.push(newProject);\n    _dom__WEBPACK_IMPORTED_MODULE_0__.resetDisplay();\n  } else {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.titleProject.setCustomValidity('');\n    _dom__WEBPACK_IMPORTED_MODULE_0__.titleProject.reportValidity();\n  }\n}\n\nfunction selectProject(){\n  \n}\n\nfunction deleteTask(task){\n  myTasks.splice(myTasks.indexOf(task), 1);\n  if (myProjects.find(item => item.title == task.project)){\n    myProjects.find(item => item.title == task.project).tasks.splice(myProjects.find(item => item.title == task.project).tasks.indexOf(task), 1);\n  }\n}\n\nfunction editTask(index) {\n  if (validateInput() == true) {\n    myTasks[index].title = _dom__WEBPACK_IMPORTED_MODULE_0__.title.value;\n    myTasks[index].description = _dom__WEBPACK_IMPORTED_MODULE_0__.description.value;\n    myTasks[index].date = _dom__WEBPACK_IMPORTED_MODULE_0__.date.value;\n    myTasks[index].priority = _dom__WEBPACK_IMPORTED_MODULE_0__.priority.value;\n    if (myProjects.find(item => item.title == myTasks[index].project)){\n      myProjects.find(item => item.title == myTasks[index].project).tasks.splice(myProjects.find(item => item.title == myTasks[index].project).tasks[index], 1, myTasks[index]);\n    }\n    _dom__WEBPACK_IMPORTED_MODULE_0__.resetDisplay();\n  }\n}\n\n// const task = taskFactory('test', 'test', '19/07/22', 'high');\n// myTasks.push(task);\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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