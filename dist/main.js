/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://retro-game/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\r\n\r\n\r\n// Точка входа webpack\r\n// Не пишите код в данном файле\r\n\n\n//# sourceURL=webpack://retro-game/./src/index.js?");

/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Character; }\n/* harmony export */ });\n/**\r\n * Базовый класс, от которого наследуются классы персонажей\r\n * @property level - уровень персонажа, от 1 до 4\r\n * @property attack - показатель атаки\r\n * @property defence - показатель защиты\r\n * @property health - здоровье персонажа\r\n * @property type - строка с одним из допустимых значений:\r\n * swordsman\r\n * bowman\r\n * magician\r\n * daemon\r\n * undead\r\n * vampire\r\n */\r\nclass Character {\r\n  constructor(level, type = 'generic') {\r\n    if (new.target.name === \"Character\")\r\n      throw new Error(\"cannot use new Character()\");\r\n    this.level = level;\r\n    this.attack = 0;\r\n    this.defence = 0;\r\n    this.health = 50;\r\n    this.type = type;\r\n    // TODO: выбросите исключение, если кто-то использует \"new Character()\"\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/Character.js?");

/***/ }),

/***/ "./src/js/GameController.js":
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameController; }\n/* harmony export */ });\n/* harmony import */ var _characters_Bowman__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/Bowman */ \"./src/js/characters/Bowman.js\");\n/* harmony import */ var _characters_Swordsman__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters/Swordsman */ \"./src/js/characters/Swordsman.js\");\n/* harmony import */ var _characters_Magician__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters/Magician */ \"./src/js/characters/Magician.js\");\n/* harmony import */ var _characters_Undead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/Undead */ \"./src/js/characters/Undead.js\");\n/* harmony import */ var _characters_Vampire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/Vampire */ \"./src/js/characters/Vampire.js\");\n/* harmony import */ var _characters_Daemon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/Daemon */ \"./src/js/characters/Daemon.js\");\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generators */ \"./src/js/generators.js\");\n/* harmony import */ var _PositionedCharacter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PositionedCharacter */ \"./src/js/PositionedCharacter.js\");\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _cursors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cursors */ \"./src/js/cursors.js\");\n/* harmony import */ var _Themes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Themes.js */ \"./src/js/Themes.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass GameController {\r\n  constructor(gamePlay, stateService) {\r\n    this.gamePlay = gamePlay;\r\n    this.stateService = stateService;\r\n    this.playerTypesGeneration = [];\r\n    this.computerTypesGeneration = [];\r\n    this.allTypesGeneration = [];\r\n    this.playerTypesList = [];\r\n    this.computerTypesList = [];\r\n    this.selectedIndex = null;\r\n    this.computerIndex = null;\r\n    this.selectedCharacter = null;\r\n    this.positionedCharacterArray =[];\r\n    this.selected = false;\r\n  }\r\n\r\n  init() {\r\n    this.gamePlay.drawUi(_Themes_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].selectThemes(1))\r\n    this.setPosition()\r\n    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this))\r\n    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this))\r\n    this.gamePlay.addCellClickListener(this.onCellClick.bind(this))\r\n\r\n\r\n    // TODO: add event listeners to gamePlay events\r\n    // TODO: load saved stated from stateService\r\n  }\r\n\r\n  setPosition() {\r\n\r\n    const playerTypes = [_characters_Bowman__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _characters_Swordsman__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _characters_Magician__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\r\n    const computerTypes = [_characters_Undead__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _characters_Vampire__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _characters_Daemon__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\r\n    const team1 = (0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)(playerTypes, 1, 2);\r\n    const team2 = (0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)(computerTypes, 1, 2);\r\n\r\n\r\n\r\n    this.playerTypesGeneration.push(...team1.characters)\r\n    this.playerTypesList = this.playerTypesGeneration.map(i => i.type)\r\n\r\n\r\n    this.computerTypesGeneration.push(...team2.characters)\r\n    this.computerTypesList = this.computerTypesGeneration.map(i => i.type)\r\n\r\n    this.allTypesGeneration.push(...team1.characters,...team2.characters)\r\n\r\n    this.positionedCharacterArray = [\r\n      new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_7__[\"default\"](team1.characters[0], this.randomPosition(0)),\r\n      new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_7__[\"default\"](team1.characters[1], this.randomPosition(1)),\r\n      new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_7__[\"default\"](team2.characters[0], this.randomPosition(2)),\r\n      new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_7__[\"default\"](team2.characters[1], this.randomPosition(3))\r\n    ];\r\n\r\n    this.gamePlay.redrawPositions(this.positionedCharacterArray)\r\n  }\r\n\r\n  randomPosition(numberInTeam) {\r\n\r\n    if(numberInTeam === 0) {\r\n      const zeroArray = [0, 8, 16, 24, 32, 40, 48, 56]\r\n      return zeroArray[Math.floor(Math.random() * zeroArray.length)]\r\n    }\r\n    if(numberInTeam === 1) {\r\n      const zeroArray = [1, 9, 17, 25, 33, 41, 49, 57]\r\n      return zeroArray[Math.floor(Math.random() * zeroArray.length)]\r\n    }\r\n    if(numberInTeam === 2) {\r\n      const zeroArray = [6, 14, 22, 30, 38, 46, 54, 62]\r\n      return zeroArray[Math.floor(Math.random() * zeroArray.length)]\r\n    }\r\n    if(numberInTeam === 3) {\r\n      const zeroArray = [7, 15, 23, 31, 39, 47, 55, 63]\r\n      return zeroArray[Math.floor(Math.random() * zeroArray.length)]\r\n    }\r\n  }\r\n\r\n  characterInfo(characterName) {\r\n    const icons = {\r\n      level: '\\u{1F396}',\r\n      attack: '\\u{2694}',\r\n      defence: '\\u{1F6E1}',\r\n      health: '\\u{2764}',\r\n    };\r\n\r\n    return `${icons.level}${characterName.level} ${icons.attack}${characterName.attack} ${icons.defence}${characterName.defence} ${icons.health}${characterName.health}`;\r\n  }\r\n\r\n  roundStepDistance(index, distance) {\r\n    const values = [];\r\n    const indexRow = Math.floor(index / this.gamePlay.boardSize);\r\n    const indexColumn = index % this.gamePlay.boardSize;\r\n\r\n    for (let i = 1; i <= distance; i += 1) {\r\n      if (indexColumn + i < this.gamePlay.boardSize) {\r\n        values.push(indexRow * this.gamePlay.boardSize + (indexColumn + i));\r\n      }\r\n      if (indexColumn - i >= 0) {\r\n        values.push(indexRow * this.gamePlay.boardSize + (indexColumn - i));\r\n      }\r\n      if (indexRow + i < this.gamePlay.boardSize) {\r\n        values.push((indexRow + i) * this.gamePlay.boardSize + indexColumn);\r\n      }\r\n      if (indexRow - i >= 0) {\r\n        values.push((indexRow - i) * this.gamePlay.boardSize + indexColumn);\r\n      }\r\n      if (indexRow + i < this.gamePlay.boardSize && indexColumn + i < this.gamePlay.boardSize) {\r\n        values.push((indexRow + i) * this.gamePlay.boardSize + (indexColumn + i));\r\n      }\r\n      if (indexRow - i >= 0 && indexColumn - i >= 0) {\r\n        values.push((indexRow - i) * this.gamePlay.boardSize + (indexColumn - i));\r\n      }\r\n      if (indexRow + i < this.gamePlay.boardSize && indexColumn - i >= 0) {\r\n        values.push((indexRow + i) * this.gamePlay.boardSize + (indexColumn - i));\r\n      }\r\n      if (indexRow - i >= 0 && indexColumn + i < this.gamePlay.boardSize) {\r\n        values.push((indexRow - i) * this.gamePlay.boardSize + (indexColumn + i));\r\n      }\r\n    }\r\n    return values;\r\n  }\r\n\r\n\r\n  roundAttackDistance(index, distance) {\r\n    const attackCell = [];\r\n    const indexRow = Math.floor(index / this.gamePlay.boardSize);\r\n    const indexColumn = index % this.gamePlay.boardSize;\r\n\r\n    for (let i = 1; i <= distance; i += 1) {\r\n      if (indexColumn + i < this.gamePlay.boardSize) {\r\n        attackCell.push(indexRow * this.gamePlay.boardSize + (indexColumn + i));\r\n      }\r\n      if (indexColumn - i >= 0) {\r\n        attackCell.push(indexRow * this.gamePlay.boardSize + (indexColumn - i));\r\n      }\r\n      if (indexRow + i < this.gamePlay.boardSize) {\r\n        attackCell.push((indexRow + i) * this.gamePlay.boardSize + indexColumn);\r\n      }\r\n      if (indexRow - i >= 0) {\r\n        attackCell.push((indexRow - i) * this.gamePlay.boardSize + indexColumn);\r\n      }\r\n      if (indexRow + i < this.gamePlay.boardSize && indexColumn + i < this.gamePlay.boardSize) {\r\n        attackCell.push((indexRow + i) * this.gamePlay.boardSize + (indexColumn + i));\r\n      }\r\n      if (indexRow - i >= 0 && indexColumn - i >= 0) {\r\n        attackCell.push((indexRow - i) * this.gamePlay.boardSize + (indexColumn - i));\r\n      }\r\n      if (indexRow + i < this.gamePlay.boardSize && indexColumn - i >= 0) {\r\n        attackCell.push((indexRow + i) * this.gamePlay.boardSize + (indexColumn - i));\r\n      }\r\n      if (indexRow - i >= 0 && indexColumn + i < this.gamePlay.boardSize) {\r\n        attackCell.push((indexRow - i) * this.gamePlay.boardSize + (indexColumn + i));\r\n      }\r\n    }\r\n    return attackCell;\r\n  }\r\n\r\n\r\n  levelUp (character) {\r\n    if (character.health <= 0) {\r\n      throw new Error('it is impossible to raise the level of the deceased')\r\n    }\r\n    character.level++;\r\n    character.attack = Math.max(character.attack, character.attack * (80 + character.health) / 100);\r\n    character.defence = Math.max(character.defence, character.defence * (80 + character.health) / 100);\r\n    if(character.health + 80 >= 100) {\r\n      character.health = 100\r\n    } else {\r\n      character.health = character.health + 80;\r\n    }\r\n  }\r\n\r\n\r\n  async computerAttack(index) {\r\n    const position = document.querySelectorAll('.cell');\r\n    let character =  position[index].querySelector('.character');\r\n\r\n    const computerCharacter = this.computerTypesGeneration.find( i =>\r\n      i.type === character.classList[1]\r\n    );\r\n\r\n    const damage = this.calculationDamage(computerCharacter, this.selectedCharacter);\r\n\r\n      if(this.roundAttackDistance(index, computerCharacter.attackDistance).includes(this.selectedIndex)) {\r\n        await this.gamePlay.showDamage(this.selectedIndex, damage)\r\n        let pos = this.positionedCharacterArray.find(item => item.character.type === this.selectedCharacter.type)\r\n        const indexHeroInArray = this.positionedCharacterArray.findIndex(item => item.character.type === this.selectedCharacter.type)\r\n        const indexHero = this.playerTypesGeneration.findIndex(item => item.type === character.type)\r\n        pos.character.health -= damage\r\n        if (pos.character.health <= 0) {\r\n          this.positionedCharacterArray.splice(indexHeroInArray, 1)\r\n          this.playerTypesGeneration.splice(indexHero, 1)\r\n          this.gamePlay.redrawPositions(this.positionedCharacterArray)\r\n          this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_9__[\"default\"].auto)\r\n          this.gamePlay.deselectCell(this.selectedIndex)\r\n          this.gamePlay.deselectCell(index)\r\n          this.selected = false;\r\n        }\r\n      } else {\r\n        this.computerMove(index)\r\n        this.gamePlay.redrawPositions(this.positionedCharacterArray)\r\n      }\r\n  }\r\n\r\n\r\n  computerMove(index) {\r\n    const position = document.querySelectorAll('.cell');\r\n    let character =  position[index].querySelector('.character');\r\n\r\n\r\n    const pos = this.positionedCharacterArray.find(item => item.position === index)\r\n    pos.position = index - 1\r\n    this.gamePlay.redrawPositions(this.positionedCharacterArray)\r\n    this.gamePlay.deselectCell(index)\r\n  }\r\n\r\n  calculationDamage(attacker, target) {\r\n    return Math.max(attacker.attack - target.defence, attacker.attack * 0.1)\r\n  }\r\n\r\n  // выделение персонажа\r\n  async onCellClick(index) {\r\n    const position = Array.from(document.querySelectorAll('.cell'));\r\n    const character = position[index].querySelector('.character');\r\n    const board = document.querySelector('.board');\r\n\r\n    if(!this.selected) {\r\n      if(position[index].children.length !== 0 && !this.playerTypesList.includes(character.classList[1])) {\r\n        _GamePlay__WEBPACK_IMPORTED_MODULE_8__[\"default\"].showError('Необходимо выделить персонажа')\r\n      }\r\n      if(position[index].children.length === 0) {\r\n        _GamePlay__WEBPACK_IMPORTED_MODULE_8__[\"default\"].showError('Необходимо выделить персонажа')\r\n      }\r\n\r\n      if(position[index].hasChildNodes()) {\r\n        if(this.playerTypesList.includes(character.classList[1])) {\r\n          let result = this.playerTypesGeneration.find( i =>\r\n            i.type === character.classList[1]\r\n          );\r\n\r\n          this.gamePlay.selectCell(index)\r\n          this.selectedIndex = index;\r\n          this.selectedCharacter = result;\r\n          this.selected = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    // манипуляции с выделенным персонажем\r\n    if(this.selected) {\r\n      // первый выбор персонажа\r\n      if(position.find(item => item.className.includes('selected-green'))) {\r\n        let pos = this.positionedCharacterArray.find(item => item.position === this.selectedIndex)\r\n        position.forEach((item1, selectedIndex) => {\r\n          if(item1.className.includes('selected-yellow')) {\r\n            this.gamePlay.deselectCell(selectedIndex)\r\n          }\r\n        })\r\n        pos.position = index\r\n        this.selectedIndex = index\r\n        this.gamePlay.redrawPositions(this.positionedCharacterArray)\r\n        this.gamePlay.deselectCell(index)\r\n        this.gamePlay.selectCell(index)\r\n      }\r\n\r\n      if (board.style.cursor.includes('not-allowed')) {\r\n        if (!position[index].hasChildNodes()) {\r\n          _GamePlay__WEBPACK_IMPORTED_MODULE_8__[\"default\"].showError('Перемещение невозможно!')\r\n        } else {\r\n          _GamePlay__WEBPACK_IMPORTED_MODULE_8__[\"default\"].showError('Враг находится далеко!')\r\n        }\r\n      }\r\n\r\n      // выбор другого персонажа\r\n      if(position[index].hasChildNodes()) {\r\n        if (index !== this.selectedIndex) {\r\n          let result = this.playerTypesGeneration.find( i =>\r\n            i.type === character.classList[1]\r\n          );\r\n          if(result) {\r\n            position.forEach((item1, selectedIndex) => {\r\n              if(item1.className.includes('selected-yellow')) {\r\n                this.gamePlay.deselectCell(selectedIndex)\r\n              }\r\n            })\r\n\r\n            this.gamePlay.selectCell(index)\r\n            this.selectedIndex = index;\r\n            this.selectedCharacter = result;\r\n            this.selected = true;\r\n          }\r\n        }\r\n\r\n\r\n        // атака по сопернику\r\n        if (board.style.cursor.includes('crosshair')) {\r\n          let targetCharacter = this.computerTypesGeneration.find( i =>\r\n                i.type === character.classList[1]\r\n              );\r\n\r\n          const damage = this.calculationDamage(this.selectedCharacter, targetCharacter);\r\n\r\n          if(!board.style.cursor.includes('not-allowed')) {\r\n            await this.gamePlay.showDamage(index, damage)\r\n            let pos = this.positionedCharacterArray.find(item => item.character.type === targetCharacter.type)\r\n            const indexComputerInArray = this.positionedCharacterArray.findIndex(item => item.character.type === targetCharacter.type)\r\n            const indexComputer = this.computerTypesGeneration.findIndex(item => item.type === targetCharacter.type)\r\n            pos.character.health -= damage\r\n            this.computerIndex = index;\r\n\r\n            // Проигрыш противника\r\n            if (pos.character.health <= 0) {\r\n              this.positionedCharacterArray.splice(indexComputerInArray, 1)\r\n              this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_9__[\"default\"].auto)\r\n              this.computerTypesGeneration.splice(indexComputer, 1)\r\n              this.gamePlay.redrawPositions(this.positionedCharacterArray)\r\n            } else {\r\n              await this.computerAttack(index)\r\n              this.gamePlay.redrawPositions(this.positionedCharacterArray)\r\n            }\r\n\r\n            // Проигрыш команды противника\r\n            if(this.computerTypesGeneration.length === 0) {\r\n              this.playerTypesGeneration.forEach(item => {\r\n                this.levelUp (item)\r\n              })\r\n              this.gamePlay.drawUi(_Themes_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].selectThemes(this.playerTypesGeneration[0].level))\r\n              this.gamePlay.redrawPositions(this.positionedCharacterArray)\r\n            }\r\n\r\n\r\n          }\r\n        }\r\n      }\r\n    }\r\n    // TODO: react to click\r\n  }\r\n\r\n  async onCellEnter(index) {\r\n    const position = document.querySelectorAll('.cell')\r\n    let character =  position[index].querySelector('.character')\r\n\r\n    if (position[index].hasChildNodes()) {\r\n      if(this.playerTypesList.includes(character.classList[1])) {\r\n        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_9__[\"default\"].pointer)\r\n      }\r\n      this.allTypesGeneration.forEach(item => {\r\n        if(position[index].children[0].className.includes(item.type)) {\r\n          this.gamePlay.showCellTooltip(this.characterInfo(item), index)\r\n        }\r\n      })\r\n      await position.forEach((item) => {\r\n        if(item.className.includes('selected')) {\r\n          if(this.computerTypesList.includes(character.classList[1])) {\r\n            if(!this.roundAttackDistance(index, this.selectedCharacter.attackDistance).includes(this.selectedIndex)) {\r\n              this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_9__[\"default\"].notallowed)\r\n            } if(this.roundAttackDistance(index, this.selectedCharacter.attackDistance).includes(this.selectedIndex)) {\r\n              this.gamePlay.selectCell(index, 'red')\r\n              this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_9__[\"default\"].crosshair)\r\n            }\r\n          }\r\n        }\r\n      })\r\n    } else if (position[index].children.length === 0){\r\n\r\n\r\n      await position.forEach((item) => {\r\n        if(item.className.includes('selected-yellow')) {\r\n          if(!this.roundStepDistance(index, this.selectedCharacter.stepDistance).includes(this.selectedIndex)){\r\n            this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_9__[\"default\"].notallowed)\r\n          } else {\r\n            this.gamePlay.selectCell(index, 'green')\r\n          }\r\n        }\r\n      })\r\n    }\r\n    // TODO: react to mouse enter\r\n  }\r\n\r\n  onCellLeave(index) {\r\n    const position = document.querySelectorAll('.cell')\r\n    let character =  position[index].querySelector('.character')\r\n\r\n    if (position[index].children.length !== 0) {\r\n      this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_9__[\"default\"].auto)\r\n      if(this.computerTypesList.includes(character.classList[1])) {\r\n        this.gamePlay.deselectCell(index)\r\n      }\r\n    } else {\r\n      position.forEach((item) => {\r\n        if(item.className.includes('selected')) {\r\n          this.gamePlay.deselectCell(index)\r\n        }\r\n      })\r\n    }\r\n    this.gamePlay.hideCellTooltip(index)\r\n    this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_9__[\"default\"].auto)\r\n    // TODO: react to mouse leave\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/GameController.js?");

/***/ }),

/***/ "./src/js/GamePlay.js":
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamePlay; }\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\r\n\r\nclass GamePlay {\r\n  constructor() {\r\n    this.boardSize = 8;\r\n    this.container = null;\r\n    this.boardEl = null;\r\n    this.cells = [];\r\n    this.cellClickListeners = [];\r\n    this.cellEnterListeners = [];\r\n    this.cellLeaveListeners = [];\r\n    this.newGameListeners = [];\r\n    this.saveGameListeners = [];\r\n    this.loadGameListeners = [];\r\n  }\r\n\r\n  bindToDOM(container) {\r\n    if (!(container instanceof HTMLElement)) {\r\n      throw new Error('container is not HTMLElement');\r\n    }\r\n    this.container = container;\r\n  }\r\n\r\n  /**\r\n   * Draws boardEl with specific theme\r\n   *\r\n   * @param theme\r\n   */\r\n  drawUi(theme) {\r\n    this.checkBinding();\r\n\r\n    this.container.innerHTML = `\r\n      <div class=\"controls\">\r\n        <button data-id=\"action-restart\" class=\"btn\">New Game</button>\r\n        <button data-id=\"action-save\" class=\"btn\">Save Game</button>\r\n        <button data-id=\"action-load\" class=\"btn\">Load Game</button>\r\n      </div>\r\n      <div class=\"board-container\">\r\n        <div data-id=\"board\" class=\"board\"></div>\r\n      </div>\r\n    `;\r\n\r\n    this.newGameEl = this.container.querySelector('[data-id=action-restart]');\r\n    this.saveGameEl = this.container.querySelector('[data-id=action-save]');\r\n    this.loadGameEl = this.container.querySelector('[data-id=action-load]');\r\n\r\n    this.newGameEl.addEventListener('click', event => this.onNewGameClick(event));\r\n    this.saveGameEl.addEventListener('click', event => this.onSaveGameClick(event));\r\n    this.loadGameEl.addEventListener('click', event => this.onLoadGameClick(event));\r\n\r\n    this.boardEl = this.container.querySelector('[data-id=board]');\r\n\r\n    this.boardEl.classList.add(theme);\r\n    for (let i = 0; i < this.boardSize ** 2; i += 1) {\r\n\r\n      const cellEl = document.createElement('div');\r\n      cellEl.classList.add('cell', 'map-tile', `map-tile-${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcTileType)(i, this.boardSize)}`);\r\n      cellEl.addEventListener('mouseenter', event => this.onCellEnter(event));\r\n      cellEl.addEventListener('mouseleave', event => this.onCellLeave(event));\r\n      cellEl.addEventListener('click', event => this.onCellClick(event));\r\n      this.boardEl.appendChild(cellEl);\r\n    }\r\n\r\n    this.cells = Array.from(this.boardEl.children);\r\n  }\r\n\r\n  /**\r\n   * Draws positions (with chars) on boardEl\r\n   *\r\n   * @param positions array of PositionedCharacter objects\r\n   */\r\n  redrawPositions(positions) {\r\n    for (const cell of this.cells) {\r\n      cell.innerHTML = '';\r\n    }\r\n\r\n    for (const position of positions) {\r\n      const cellEl = this.boardEl.children[position.position];\r\n      const charEl = document.createElement('div');\r\n      charEl.classList.add('character', position.character.type);\r\n\r\n      const healthEl = document.createElement('div');\r\n      healthEl.classList.add('health-level');\r\n\r\n      const healthIndicatorEl = document.createElement('div');\r\n      healthIndicatorEl.classList.add('health-level-indicator', `health-level-indicator-${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcHealthLevel)(position.character.health)}`);\r\n      healthIndicatorEl.style.width = `${position.character.health}%`;\r\n      healthEl.appendChild(healthIndicatorEl);\r\n\r\n      charEl.appendChild(healthEl);\r\n      cellEl.appendChild(charEl);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Add listener to mouse enter for cell\r\n   *\r\n   * @param callback\r\n   */\r\n  addCellEnterListener(callback) {\r\n    this.cellEnterListeners.push(callback);\r\n  }\r\n\r\n  /**\r\n   * Add listener to mouse leave for cell\r\n   *\r\n   * @param callback\r\n   */\r\n  addCellLeaveListener(callback) {\r\n    this.cellLeaveListeners.push(callback);\r\n  }\r\n\r\n  /**\r\n   * Add listener to mouse click for cell\r\n   *\r\n   * @param callback\r\n   */\r\n  addCellClickListener(callback) {\r\n    this.cellClickListeners.push(callback);\r\n  }\r\n\r\n  /**\r\n   * Add listener to \"New Game\" button click\r\n   *\r\n   * @param callback\r\n   */\r\n  addNewGameListener(callback) {\r\n    this.newGameListeners.push(callback);\r\n  }\r\n\r\n  /**\r\n   * Add listener to \"Save Game\" button click\r\n   *\r\n   * @param callback\r\n   */\r\n  addSaveGameListener(callback) {\r\n    this.saveGameListeners.push(callback);\r\n  }\r\n\r\n  /**\r\n   * Add listener to \"Load Game\" button click\r\n   *\r\n   * @param callback\r\n   */\r\n  addLoadGameListener(callback) {\r\n    this.loadGameListeners.push(callback);\r\n  }\r\n\r\n  onCellEnter(event) {\r\n    event.preventDefault();\r\n    const index = this.cells.indexOf(event.currentTarget);\r\n    this.cellEnterListeners.forEach(o => o.call(null, index));\r\n  }\r\n\r\n  onCellLeave(event) {\r\n    event.preventDefault();\r\n    const index = this.cells.indexOf(event.currentTarget);\r\n    this.cellLeaveListeners.forEach(o => o.call(null, index));\r\n  }\r\n\r\n  onCellClick(event) {\r\n    const index = this.cells.indexOf(event.currentTarget);\r\n    this.cellClickListeners.forEach(o => o.call(null, index));\r\n  }\r\n\r\n  onNewGameClick(event) {\r\n    event.preventDefault();\r\n    this.newGameListeners.forEach(o => o.call(null));\r\n  }\r\n\r\n  onSaveGameClick(event) {\r\n    event.preventDefault();\r\n    this.saveGameListeners.forEach(o => o.call(null));\r\n  }\r\n\r\n  onLoadGameClick(event) {\r\n    event.preventDefault();\r\n    this.loadGameListeners.forEach(o => o.call(null));\r\n  }\r\n\r\n  static showError(message) {\r\n    alert(message);\r\n  }\r\n\r\n  static showMessage(message) {\r\n    alert(message);\r\n  }\r\n\r\n  selectCell(index, color = 'yellow') {\r\n    this.deselectCell(index);\r\n    this.cells[index].classList.add('selected', `selected-${color}`);\r\n  }\r\n\r\n  deselectCell(index) {\r\n    const cell = this.cells[index];\r\n    cell.classList.remove(...Array.from(cell.classList)\r\n      .filter(o => o.startsWith('selected')));\r\n  }\r\n\r\n  showCellTooltip(message, index) {\r\n    this.cells[index].title = message;\r\n  }\r\n\r\n  hideCellTooltip(index) {\r\n    this.cells[index].title = '';\r\n  }\r\n  \r\n  showDamage(index, damage) {\r\n    return new Promise((resolve) => {\r\n      const cell = this.cells[index];\r\n      const damageEl = document.createElement('span');\r\n      damageEl.textContent = damage;\r\n      damageEl.classList.add('damage');\r\n      cell.appendChild(damageEl);\r\n\r\n      damageEl.addEventListener('animationend', () => {\r\n        cell.removeChild(damageEl);\r\n        resolve();\r\n      });\r\n    });\r\n  }\r\n\r\n  setCursor(cursor) {\r\n    this.boardEl.style.cursor = cursor;\r\n  }\r\n\r\n  checkBinding() {\r\n    if (this.container === null) {\r\n      throw new Error('GamePlay not bind to DOM');\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/GamePlay.js?");

/***/ }),

/***/ "./src/js/GameStateService.js":
/*!************************************!*\
  !*** ./src/js/GameStateService.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameStateService; }\n/* harmony export */ });\nclass GameStateService {\r\n  constructor(storage) {\r\n    this.storage = storage;\r\n  }\r\n\r\n  save(state) {\r\n    this.storage.setItem('state', JSON.stringify(state));\r\n  }\r\n\r\n  load() {\r\n    try {\r\n      return JSON.parse(this.storage.getItem('state'));\r\n    } catch (e) {\r\n      throw new Error('Invalid state');\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/GameStateService.js?");

/***/ }),

/***/ "./src/js/PositionedCharacter.js":
/*!***************************************!*\
  !*** ./src/js/PositionedCharacter.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PositionedCharacter; }\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n\r\n\r\nclass PositionedCharacter {\r\n  constructor(character, position) {\r\n    if (!(character instanceof _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\r\n      throw new Error('character must be instance of Character or its children');\r\n    }\r\n\r\n    if (typeof position !== 'number') {\r\n      throw new Error('position must be a number');\r\n    }\r\n\r\n    this.character = character;\r\n    this.position = position;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/PositionedCharacter.js?");

/***/ }),

/***/ "./src/js/Team.js":
/*!************************!*\
  !*** ./src/js/Team.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Team; }\n/* harmony export */ });\n/**\r\n * Класс, представляющий персонажей команды\r\n *\r\n * @todo Самостоятельно продумайте хранение персонажей в классе\r\n * Например\r\n * @example\r\n * ```js\r\n * const characters = [new Swordsman(2), new Bowman(1)]\r\n * const team = new Team(characters);\r\n *\r\n * team.characters // [swordsman, bowman]\r\n * ```\r\n * */\r\n\r\n\r\n\r\nclass Team {\r\n  constructor(characters) {\r\n    this.characters = characters;\r\n  }\r\n  // TODO: write your logic here\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/Team.js?");

/***/ }),

/***/ "./src/js/Themes.js":
/*!**************************!*\
  !*** ./src/js/Themes.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Themes; }\n/* harmony export */ });\n// const themes = {\r\n//   prairie: 'prairie',\r\n//   desert: 'desert',\r\n//   arctic: 'arctic',\r\n//   mountain: 'mountain',\r\n// };\r\n\r\n// export default themes;\r\n\r\nclass Themes {\r\n  constructor() {\r\n    // this.level = level;\r\n    this.prairie = 'prairie';\r\n    this.desert = 'desert';\r\n    this.arctic = 'arctic';\r\n    this.mountain = 'mountain';\r\n  }\r\n\r\n  static selectThemes (level) {\r\n    switch(level) {\r\n      case 1:\r\n        return 'prairie';\r\n      case 2:\r\n        return 'desert';\r\n      case 3:\r\n        return 'arctic';\r\n      case 4:\r\n        return 'mountain';\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/Themes.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/js/GameController.js\");\n/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameStateService */ \"./src/js/GameStateService.js\");\n/**\r\n * Entry point of app: don't change this\r\n */\r\n\r\n\r\n\r\n\r\nconst gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\ngamePlay.bindToDOM(document.querySelector('#game-container'));\r\n\r\nconst stateService = new _GameStateService__WEBPACK_IMPORTED_MODULE_2__[\"default\"](localStorage);\r\n\r\nconst gameCtrl = new _GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gamePlay, stateService);\r\ngameCtrl.init();\r\n\r\n// don't write your code here\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/app.js?");

/***/ }),

/***/ "./src/js/characters/Bowman.js":
/*!*************************************!*\
  !*** ./src/js/characters/Bowman.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bowman; }\n/* harmony export */ });\n/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character.js */ \"./src/js/Character.js\");\n\r\n\r\nclass Bowman extends _Character_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level);\r\n    this.level = level;\r\n    this.attack = 25;\r\n    this.defence = 25;\r\n    this.type = 'bowman';\r\n    this.attackDistance = 2;\r\n    this.stepDistance = 2;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/Bowman.js?");

/***/ }),

/***/ "./src/js/characters/Daemon.js":
/*!*************************************!*\
  !*** ./src/js/characters/Daemon.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Daemon; }\n/* harmony export */ });\n/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character.js */ \"./src/js/Character.js\");\n\r\n\r\nclass Daemon extends _Character_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level);\r\n    this.level = level;\r\n    this.attack = 10;\r\n    this.defence = 10;\r\n    this.type = 'daemon';\r\n    this.attackDistance = 4;\r\n    this.stepDistance = 1;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/Daemon.js?");

/***/ }),

/***/ "./src/js/characters/Magician.js":
/*!***************************************!*\
  !*** ./src/js/characters/Magician.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Magician; }\n/* harmony export */ });\n/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character.js */ \"./src/js/Character.js\");\n\r\n\r\nclass Magician extends _Character_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level);\r\n    this.level = level;\r\n    this.attack = 10;\r\n    this.defence = 40;\r\n    this.type = 'magician';\r\n    this.attackDistance = 4;\r\n    this.stepDistance = 1;\r\n\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/Magician.js?");

/***/ }),

/***/ "./src/js/characters/Swordsman.js":
/*!****************************************!*\
  !*** ./src/js/characters/Swordsman.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Swordsman; }\n/* harmony export */ });\n/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character.js */ \"./src/js/Character.js\");\n\r\n\r\nclass Swordsman extends _Character_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level);\r\n    this.level = level;\r\n    this.attack = 40;\r\n    this.defence = 10;\r\n    this.type = 'swordsman';\r\n    this.attackDistance = 1;\r\n    this.stepDistance = 4;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/Swordsman.js?");

/***/ }),

/***/ "./src/js/characters/Undead.js":
/*!*************************************!*\
  !*** ./src/js/characters/Undead.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Undead; }\n/* harmony export */ });\n/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character.js */ \"./src/js/Character.js\");\n\r\n\r\nclass Undead extends _Character_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level);\r\n    this.level = level;\r\n    this.attack = 40;\r\n    this.defence = 10;\r\n    this.type = 'undead'\r\n    this.attackDistance = 1;\r\n    this.stepDistance = 4;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/Undead.js?");

/***/ }),

/***/ "./src/js/characters/Vampire.js":
/*!**************************************!*\
  !*** ./src/js/characters/Vampire.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Vampire; }\n/* harmony export */ });\n/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character.js */ \"./src/js/Character.js\");\n\r\n\r\nclass Vampire extends _Character_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level);\r\n    this.level = level;\r\n    this.attack = 25;\r\n    this.defence = 25;\r\n    this.type = 'vampire'\r\n    this.attackDistance = 2;\r\n    this.stepDistance = 2;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/Vampire.js?");

/***/ }),

/***/ "./src/js/cursors.js":
/*!***************************!*\
  !*** ./src/js/cursors.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst cursors = {\r\n  auto: 'auto',\r\n  pointer: 'pointer',\r\n  crosshair: 'crosshair',\r\n  notallowed: 'not-allowed',\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cursors);\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/cursors.js?");

/***/ }),

/***/ "./src/js/generators.js":
/*!******************************!*\
  !*** ./src/js/generators.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   characterGenerator: function() { return /* binding */ characterGenerator; },\n/* harmony export */   generateTeam: function() { return /* binding */ generateTeam; }\n/* harmony export */ });\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ \"./src/js/Team.js\");\n\r\n\r\n/**\r\n * Формирует экземпляр персонажа из массива allowedTypes со\r\n * случайным уровнем от 1 до maxLevel\r\n *\r\n * @param allowedTypes массив классов\r\n * @param maxLevel максимальный возможный уровень персонажа\r\n * @returns генератор, который при каждом вызове\r\n * возвращает новый экземпляр класса персонажа\r\n *\r\n */\r\nfunction* characterGenerator(allowedTypes, maxLevel) {\r\n  while (true) {\r\n    const generation = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];\r\n    const randomLevel = Math.floor(Math.random() * ((maxLevel + 1) - 1)  + 1);\r\n    yield new generation(randomLevel)\r\n  }\r\n  // TODO: write logic here\r\n}\r\n\r\n/**\r\n * Формирует массив персонажей на основе characterGenerator\r\n * @param allowedTypes массив классов\r\n * @param maxLevel максимальный возможный уровень персонажа\r\n * @param characterCount количество персонажей, которое нужно сформировать\r\n * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount\r\n * */\r\nfunction generateTeam(allowedTypes, maxLevel, characterCount) {\r\n  const teamArray = [];\r\n  const playerGenerator = characterGenerator(allowedTypes, maxLevel);\r\n  while(teamArray.length < characterCount) {\r\n    if(teamArray.length === 0){\r\n      const character = playerGenerator.next().value\r\n      teamArray.push(character)\r\n    } else {\r\n      const character = playerGenerator.next().value\r\n      if(teamArray[0].constructor.name !== character.constructor.name) {\r\n        teamArray.push(character)\r\n      }\r\n    }\r\n  }\r\n  return new _Team__WEBPACK_IMPORTED_MODULE_0__[\"default\"](teamArray)\r\n  // TODO: write logic here\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/generators.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcHealthLevel: function() { return /* binding */ calcHealthLevel; },\n/* harmony export */   calcTileType: function() { return /* binding */ calcTileType; }\n/* harmony export */ });\n/**\r\n * @todo\r\n * @param index - индекс поля\r\n * @param boardSize - размер квадратного поля (в длину или ширину)\r\n * @returns строка - тип ячейки на поле:\r\n *\r\n * top-left\r\n * top-right\r\n * top\r\n * bottom-left\r\n * bottom-right\r\n * bottom\r\n * right\r\n * left\r\n * center\r\n *\r\n * @example\r\n * ```js\r\n * calcTileType(0, 8); // 'top-left'\r\n * calcTileType(1, 8); // 'top'\r\n * calcTileType(63, 8); // 'bottom-right'\r\n * calcTileType(7, 7); // 'left'\r\n * ```\r\n * */\r\nfunction calcTileType(index, boardSize) {\r\n  // TODO: ваш код будет тут\r\n  if (index === 0) {\r\n    return 'top-left';\r\n  }\r\n  if (index === (boardSize - 1)) {\r\n    return 'top-right';\r\n  }\r\n  if (index > 0 && index < (boardSize - 1)) {\r\n    return 'top';\r\n  }\r\n  if (index === 56) {\r\n    return 'bottom-left';\r\n  }\r\n  if (index === (boardSize * boardSize - 1)) {\r\n\r\n    return 'bottom-right';\r\n  }\r\n  if (index > boardSize * boardSize - boardSize  && index < boardSize * boardSize - 1) {\r\n    return 'bottom';\r\n  }\r\n  if (index % boardSize === boardSize - 1) {\r\n    return 'right';\r\n  }\r\n  if (index % boardSize === 0) {\r\n    return 'left';\r\n  }\r\n  return 'center';\r\n}\r\n\r\nfunction calcHealthLevel(health) {\r\n  if (health < 15) {\r\n    return 'critical';\r\n  }\r\n\r\n  if (health < 50) {\r\n    return 'normal';\r\n  }\r\n\r\n  return 'high';\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/utils.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
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