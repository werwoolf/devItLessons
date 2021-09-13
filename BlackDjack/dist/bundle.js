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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".gameWindow {\\n  height: 98vh;\\n  background-color: green;\\n  position: relative;\\n}\\n.gameWindow footer {\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n  height: 20vh;\\n}\\n.gameWindow footer h1 {\\n  padding: 5px;\\n}\\n\\n.sideBar {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  width: 20%;\\n  height: 100%;\\n}\\n.sideBar .buttonContainer {\\n  position: absolute;\\n  display: none;\\n  flex-direction: column;\\n  width: 100%;\\n  right: 5px;\\n  top: 200px;\\n}\\n.sideBar .buttonContainer button {\\n  background-color: bisque;\\n  height: 35px;\\n  margin: 3px;\\n}\\n\\n.deckCard {\\n  position: absolute;\\n  top: 5px;\\n  right: 5px;\\n}\\n.deckCard img {\\n  height: 150px;\\n}\\n\\n.gameTable {\\n  height: 80vh;\\n  width: 78vw;\\n}\\n\\n.rowPlayers1, .rowPlayers2 {\\n  display: flex;\\n}\\n\\n.playerTable {\\n  width: 50%;\\n  height: 376px;\\n  border: 1px solid red;\\n  display: none;\\n}\\n.playerTable h2 {\\n  margin: 5px;\\n}\\n\\n.startGameContainer {\\n  position: absolute;\\n  top: 350px;\\n}\\n.startGameContainer input {\\n  margin: 3px;\\n}\\n\\n.card {\\n  height: 100px;\\n  width: 70px;\\n  background: white;\\n  margin: 5px;\\n  border-radius: 2px;\\n  display: inline-block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://blackdjack/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://blackdjack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://blackdjack/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://blackdjack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://blackdjack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://blackdjack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://blackdjack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://blackdjack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://blackdjack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _scripts_Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Game.js */ \"./src/scripts/Game.js\");\n/* harmony import */ var _scripts_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/helpers.js */ \"./src/scripts/helpers.js\");\n\n\n\nvar startGameButton = document.querySelector('.startGameButton');\nvar takeCardButton = document.querySelector('.takeCardButton');\nvar stopGameButton = document.querySelector('.stopGameButton');\nvar cardsCount = document.querySelector('.cardsCount');\nvar containerButton = document.querySelector('.buttonContainer');\nvar startGameContainer = document.querySelector('.startGameContainer');\nvar playerTables = document.querySelectorAll('.playerTable');\nvar game = null;\nstartGameButton.addEventListener('click', function () {\n  game = startGame();\n  actuallyVisual(game);\n});\ntakeCardButton.addEventListener('click', function () {\n  if (!game.activePlayer || game.activePlayer.rating > 20) {\n    actuallyVisual(game);\n    return game.passPlayer();\n  }\n\n  game.activePlayer.getCard(game.cards.pop());\n\n  if (!game.activePlayer || game.activePlayer.rating > 20) {\n    actuallyVisual(game);\n    return game.passPlayer();\n  }\n\n  actuallyVisual(game);\n});\nstopGameButton.addEventListener('click', function () {\n  game.passPlayer();\n  actuallyVisual(game);\n});\n\nfunction startGame() {\n  var playerN1 = document.querySelector('.inputPlayer.n1');\n  var playerN2 = document.querySelector('.inputPlayer.n2');\n  var playerN3 = document.querySelector('.inputPlayer.n3');\n  var playerN4 = document.querySelector('.inputPlayer.n4');\n  var players = [playerN1.value, playerN2.value, playerN3.value, playerN4.value].filter(function (player) {\n    return player;\n  });\n  return new _scripts_Game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](players);\n}\n\nfunction actuallyVisual(game) {\n  console.log(game);\n  var playerTables = document.querySelectorAll('.');\n  cardsCount.innerHTML = game.cards.length;\n}\n\n//# sourceURL=webpack://blackdjack/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Card.js":
/*!*****************************!*\
  !*** ./src/scripts/Card.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Card = function Card(_ref) {\n  var suit = _ref.suit,\n      rating = _ref.rating,\n      name = _ref.name;\n\n  _classCallCheck(this, Card);\n\n  this.suit = suit;\n  this.rating = rating;\n  this.name = name;\n};\n\n\n\n//# sourceURL=webpack://blackdjack/./src/scripts/Card.js?");

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.js */ \"./src/scripts/Card.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ \"./src/scripts/Player.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ \"./src/scripts/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar listCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Lady', 'King', 'Ace'];\nvar listSuits = ['club', 'diamond', 'heart', 'spade'];\nvar containerButton = document.querySelector('.buttonContainer');\nvar startGameContainer = document.querySelector('.startGameContainer');\nvar playerTables = document.querySelectorAll('.playerTable');\n\nvar Game = /*#__PURE__*/function () {\n  function Game(players) {\n    _classCallCheck(this, Game);\n\n    playerTables.forEach(function (table) {\n      return table.style.display = 'none';\n    });\n    this.cards = this.cardGenerate();\n    this.players = this.playersGenerate(players);\n    this.firstDealCards();\n    this.canStep = this.players.filter(function (player) {\n      return player.rating < 21;\n    });\n\n    if (this.players.length === 0) {\n      throw new Error('need min 1 player');\n    }\n\n    containerButton.style.display = 'flex';\n    startGameContainer.style.display = 'none';\n    this.activePlayer = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.findMaxRaitingPlayers)(this.canStep)[0];\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.writeMessage)(\"now step \".concat(this.activePlayer.name));\n  }\n\n  _createClass(Game, [{\n    key: \"cardGenerate\",\n    value: function cardGenerate() {\n      var cards = [];\n\n      for (var i = 0; i < listCards.length; i++) {\n        var rating = null;\n        typeof listCards[i] === 'number' ? rating = listCards[i] : rating = 10;\n\n        if (listCards[i] === 'Ace') {\n          rating = 11;\n        }\n\n        cards.push(new _Card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          suit: listSuits[0],\n          rating: rating,\n          name: listCards[i]\n        }));\n        cards.push(new _Card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          suit: listSuits[1],\n          rating: rating,\n          name: listCards[i]\n        }));\n        cards.push(new _Card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          suit: listSuits[2],\n          rating: rating,\n          name: listCards[i]\n        }));\n        cards.push(new _Card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          suit: listSuits[3],\n          rating: rating,\n          name: listCards[i]\n        }));\n      }\n\n      return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.shuffle)(cards);\n    }\n  }, {\n    key: \"playersGenerate\",\n    value: function playersGenerate(players) {\n      return players.map(function (player) {\n        return new _Player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          name: player,\n          id: players.indexOf(player)\n        });\n      });\n    }\n  }, {\n    key: \"firstDealCards\",\n    value: function firstDealCards() {\n      var _this = this;\n\n      this.players.forEach(function (player) {\n        return player.getCard([_this.cards.pop(), _this.cards.pop()]);\n      });\n    }\n  }, {\n    key: \"passPlayer\",\n    value: function passPlayer() {\n      this.canStep.splice(this.canStep.indexOf(this.activePlayer), 1);\n\n      if (this.canStep.length === 0) {\n        this.activePlayer = null;\n        return this.endGame();\n      }\n\n      if (this.canStep.indexOf(this.activePlayer) + 1) {\n        this.activePlayer = this.canStep[this.canStep.indexOf(this.activePlayer)];\n      } else {\n        this.activePlayer = this.canStep[0];\n      }\n\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.writeMessage)(\"now step \".concat(this.activePlayer.name));\n    }\n  }, {\n    key: \"endGame\",\n    value: function endGame() {\n      var winner = null;\n      var listHave21 = [];\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.findMaxRaitingPlayers)(this.players);\n      this.players.forEach(function (player) {\n        return player.rating === 21 ? listHave21.push(player.name) : player;\n      });\n      startGameContainer.style.display = 'block';\n      containerButton.style.display = 'none';\n\n      if (listHave21.length) {\n        playerTables.forEach(function (table) {\n          return table.style.display = 'none';\n        });\n        winner = listHave21;\n        return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.writeMessage)(\"\".concat(winner, \" is Winner\"));\n      }\n\n      if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.separatePlayers)(this.players).listRaitingUnder21.length) {\n        winner = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.separatePlayers)((0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.findMaxRaitingPlayers)(this.players)).listRaitingUnder21[0].name;\n        return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.writeMessage)(\"\".concat(winner, \" is Winner\"));\n      }\n\n      winner = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.separatePlayers)((0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.findMaxRaitingPlayers)(this.players)).listRaitingUpper21.reverse()[0].name;\n      console.log(playerTables);\n      return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.writeMessage)(\"\".concat(winner, \" is Winner\"));\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack://blackdjack/./src/scripts/Game.js?");

/***/ }),

/***/ "./src/scripts/Player.js":
/*!*******************************!*\
  !*** ./src/scripts/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/scripts/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player(properties) {\n    _classCallCheck(this, Player);\n\n    this.name = properties.name;\n    this.id = properties.id;\n    this.cards = [];\n    this.playerTable = document.querySelector(\".playerTable.n\".concat(this.id + 1));\n    this.playerTable.style.display = 'inline';\n    this.placePlayerName = document.querySelector(\".playerName.n\".concat(this.id + 1));\n    this.placePlayerName.innerHTML = this.name;\n    this.placeStoreCards = document.querySelector(\".placeStoreCards.n\".concat(this.id + 1));\n    this.placePlayerRaiting = document.querySelector(\".playerRaiting.n\".concat(this.id + 1));\n  }\n\n  _createClass(Player, [{\n    key: \"getCard\",\n    value: function getCard(cards) {\n      this.cards = this.cards.concat(cards);\n      this.calculateTotalRaiting();\n    }\n  }, {\n    key: \"calculateTotalRaiting\",\n    value: function calculateTotalRaiting() {\n      var _this = this;\n\n      this.rating = 0;\n      this.cards.forEach(function (card) {\n        return _this.rating += card.rating;\n      });\n      this.writeActualData();\n    }\n  }, {\n    key: \"writeActualData\",\n    value: function writeActualData() {\n      var _this2 = this;\n\n      this.placePlayerRaiting.innerHTML = this.rating;\n      this.placeStoreCards.innerHTML = '';\n      this.cards.forEach(function (card) {\n        return _this2.placeStoreCards.appendChild((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.visualCreateCard)(card));\n      });\n    }\n  }]);\n\n  return Player;\n}();\n\n\n\n//# sourceURL=webpack://blackdjack/./src/scripts/Player.js?");

/***/ }),

/***/ "./src/scripts/helpers.js":
/*!********************************!*\
  !*** ./src/scripts/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle),\n/* harmony export */   \"findMaxRaitingPlayers\": () => (/* binding */ findMaxRaitingPlayers),\n/* harmony export */   \"separatePlayers\": () => (/* binding */ separatePlayers),\n/* harmony export */   \"visualCreateCard\": () => (/* binding */ visualCreateCard),\n/* harmony export */   \"writeMessage\": () => (/* binding */ writeMessage)\n/* harmony export */ });\nfunction shuffle(array) {\n  var currentIndex = array.length,\n      temporaryValue,\n      randomIndex;\n\n  while (0 !== currentIndex) {\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1;\n    temporaryValue = array[currentIndex];\n    array[currentIndex] = array[randomIndex];\n    array[randomIndex] = temporaryValue;\n  }\n\n  return array;\n}\nfunction findMaxRaitingPlayers(players) {\n  var clone = players.map(function (player) {\n    return player;\n  });\n  return clone.sort(function (a, b) {\n    return b.rating - a.rating;\n  });\n}\nfunction separatePlayers(players) {\n  var listRaitingUnder21 = [];\n  var listRaitingUpper21 = [];\n  players.forEach(function (player) {\n    return player.rating <= 21 ? listRaitingUnder21.push(player) : listRaitingUpper21.push(player);\n  });\n  return {\n    listRaitingUnder21: listRaitingUnder21,\n    listRaitingUpper21: listRaitingUpper21\n  };\n}\nfunction visualCreateCard(cardInfo) {\n  var card = document.createElement('div');\n  var imageSuit = document.createElement('img');\n  imageSuit.src = \"./src/images/cardSuits/\".concat(cardInfo.suit, \".png\");\n  card.innerHTML = \"\".concat(cardInfo.name);\n  card.appendChild(imageSuit);\n  card.classList.add('card');\n  return card;\n}\nfunction writeMessage(message) {\n  var messageWindow = document.querySelector('.messageWindow');\n  messageWindow.innerHTML = message;\n}\n\n//# sourceURL=webpack://blackdjack/./src/scripts/helpers.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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