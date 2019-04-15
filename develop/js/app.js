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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_module_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/module.functions */ "./src/js/module.functions.js");
/* harmony import */ var _js_module_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/module.vars */ "./src/js/module.vars.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Profile =
/*#__PURE__*/
function () {
  function Profile(state, url, currentUserAgent) {
    var currentTab = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Profile);

    this._state = state;
    this.url = url;
    this.tab = currentTab;
    this.currentUserAgent = /msie 10/i.test(currentUserAgent) || /net/i.test(currentUserAgent);
  }

  _createClass(Profile, [{
    key: "init",
    // init
    value: function init() {
      var _this = this;

      // Условие выбора данных для загрузки(обновления) страницы
      if (this.userProfile === null) {
        sessionStorage.setItem('tabId', this.tab);
        this.getDataUser();
      } else this.renderDataUsers.apply(this, _toConsumableArray(this.userProfile)); // Табы


      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["mainNavigation"].addEventListener('click', function (event) {
        _this.currentUserAgent !== true ? Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["getActiveTab"])(event.target.dataset.tabId) : Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["getActiveTab"])(event.target.getAttribute('data-tab-id')); // for IE 10 и Edge
      }); // Активация Popup

      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["hobbiesControl"].addEventListener('click', function (event) {
        return Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["activePopup"])(event);
      });
      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["closePopup"].addEventListener('click', function (event) {
        return Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["activePopup"])(event);
      }); // Управление интересами

      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["fieldEnterHobby"].addEventListener('input', function (event) {
        Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["validFields"])(event.target, /[^A-Za-zА-Яа-я\s\-]/g, '', 'Телефон не может состоять из букв!');
      });
      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["addHobby"].addEventListener('click', function (event) {
        var inputValue = _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["fieldEnterHobby"].value.toLowerCase();
        inputValue.trim() !== '' ? Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["addHobbies"])(inputValue, event) : Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["showMessage"])('Enter name hobby', 'danger');
      });
      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["userHobby"].addEventListener('click', function (event) {
        if (event.target.className !== 'userHobby') Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["deleteHobby"])(event.target.innerHTML);
      }); //Изменение данных профиля

      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["mainInfoUser"].addEventListener('click', function (event) {
        if (event.target.tagName === 'INPUT') {
          _this.currentUserAgent !== true ? Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["changeInfo"])(event.target.dataset.nameField, event) : Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["changeInfo"])(event.target.getAttribute('data-name-field'), event); // for IE 10
        }
      });
    } //getData

  }, {
    key: "getDataUser",
    value: function getDataUser() {
      this.currentUserAgent ? _js_module_functions__WEBPACK_IMPORTED_MODULE_1__["fetcherForIE"].call(this) : _js_module_functions__WEBPACK_IMPORTED_MODULE_1__["fetcherForAll"].call(this); //add context for Opera
    } //Parse

  }, {
    key: "parseDataUsers",
    value: function parseDataUsers(users) {
      // первого юзера в списке беру как основного
      var dataMainProfile = {},
          hobby = [],
          friends = [];
      users.forEach(function (user, i) {
        if (i === 0) {
          dataMainProfile = {
            picture: user.picture.large,
            fullName: "".concat(user.name.first, " ").concat(user.name.last),
            city: "".concat(user.location.city),
            info: {
              family: user.gender === 'male' ? 'Холост' : 'Married',
              phone: user.phone,
              email: user.email
            }
          };
          hobby = ['cat', 'car', 'music', 'sport'];
          localStorage.setItem('hobby', JSON.stringify(hobby));
          localStorage.setItem('profile', JSON.stringify(dataMainProfile));
        } else {
          friends.push({
            picture: user.picture.medium,
            fullName: "".concat(user.name.first, " ").concat(user.name.last),
            city: "".concat(user.location.city),
            status: user.gender === 'male' ? 'online' : ''
          });
        }
      });
      localStorage.setItem('friends', JSON.stringify(friends));
      this.renderDataUsers(dataMainProfile, hobby, friends);
    } //Render

  }, {
    key: "renderDataUsers",
    value: function renderDataUsers() {
      var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["defaultSettings"];
      var hobbies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var friends = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var tabId = sessionStorage.getItem('tabId');
      Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["getActiveTab"])(tabId); // render основного профиля

      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["imageUser"].src = user.picture;
      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["imageUser"].title = _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["imageUser"].alt = user.fullName;
      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["fullNameUser"].value = user.fullName;
      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["cityUser"].value = user.city;
      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["familyUser"].value = user.info.family;
      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["phoneNumber"].value = user.info.phone;
      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["emailUser"].value = user.info.email;
      _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["userHobby"].innerHTML = '';
      hobbies.forEach(function (hobby) {
        Object(_js_module_functions__WEBPACK_IMPORTED_MODULE_1__["createHobbyDomNode"])(hobby, 'after');
      }); // Render списка друзей
      // userFriends.innerHTML = '';

      friends.forEach(function (friend) {
        // блок инфо о друге
        var newFriend = document.createElement('div');
        newFriend.className = 'friendUser';
        newFriend.innerHTML = "\n                <img src=\"".concat(friend.picture, "\" alt=\"").concat(friend.fullName, "\" src=\"").concat(friend.fullName, "\">\n                <div class=\"infoFriend\">\n                     <div class=\"mainInfoFriend\">\n                         <a href=\"").concat(friend.picture, "\" class=\"fullNameFriend\">").concat(friend.fullName, "</a>\n                         <span class=\"cityFriend\">c. ").concat(friend.city, "</span>\n                     </div>\n                     <span class=\"friendStatus\">").concat(friend.status, "</span>\n                </div>\n            ");
        _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["userFriends"].appendChild(newFriend);
      });
      setTimeout(function () {
        _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["wrapper"].classList.remove('filter');
        _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["spinner"].style.display = _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["overlay"].style.display = 'none';
      }, 1000);
    }
  }, {
    key: "userProfile",
    get: function get() {
      if (this._state.length !== 0) {
        return [JSON.parse(this._state.getItem('profile')), JSON.parse(this._state.getItem('hobby')), JSON.parse(this._state.getItem('friends'))];
      } else return null;
    }
  }]);

  return Profile;
}();

var profile = new Profile(localStorage, _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["URL"], _js_module_vars__WEBPACK_IMPORTED_MODULE_2__["currentUserAgent"]);
profile.init();

/***/ }),

/***/ "./src/js/module.functions.js":
/*!************************************!*\
  !*** ./src/js/module.functions.js ***!
  \************************************/
/*! exports provided: fetcherForAll, fetcherForIE, handlerErrorFetcher, createHobbyDomNode, getActiveTab, activePopup, addHobbies, deleteHobby, changeInfo, showMessage, validFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetcherForAll", function() { return fetcherForAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetcherForIE", function() { return fetcherForIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlerErrorFetcher", function() { return handlerErrorFetcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHobbyDomNode", function() { return createHobbyDomNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveTab", function() { return getActiveTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activePopup", function() { return activePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHobbies", function() { return addHobbies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHobby", function() { return deleteHobby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeInfo", function() { return changeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validFields", function() { return validFields; });
/* harmony import */ var _module_vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.vars */ "./src/js/module.vars.js");


 // func for request

var fetcherForAll = function fetcherForAll() {
  var _this = this;

  var request = new Request(this.url, {
    method: 'GET',
    headers: new Headers(),
    mode: 'cors',
    cache: 'default'
  });
  fetch(request).then(function (response) {
    if (response.status === 200) return response.json();else throw new Error('Response status not 200!');
  }).then(function (success) {
    _this.parseDataUsers(success.results);
  }).catch(function (message) {
    handlerErrorFetcher.call(_this, message);
  });
};
var fetcherForIE = function fetcherForIE() {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', this.url, false);
    xhr.send();
    this.parseDataUsers(JSON.parse(xhr.responseText).results);
  } catch (message) {
    handlerErrorFetcher.call(this, message);
  }
}; // При ошибке запроса выгрузка статичных данных из объекта defaultSettings
// Запроса к серверу повторно каждую минуту

var handlerErrorFetcher = function handlerErrorFetcher(e) {
  var _this2 = this;

  showMessage(e, 'danger');
  this.renderDataUsers();
  setTimeout(function () {
    showMessage('Не удалось получить данные', 'danger');

    _this2.getDataUser(_this2.url);
  }, 60000);
};
var createHobbyDomNode = function createHobbyDomNode(hobby, method) {
  var newHobby = document.createElement('div');
  newHobby.className = 'hobby';
  newHobby.innerHTML = hobby;
  method === 'after' ? _module_vars__WEBPACK_IMPORTED_MODULE_0__["userHobby"].appendChild(newHobby) : _module_vars__WEBPACK_IMPORTED_MODULE_0__["userHobby"].insertBefore(newHobby, _module_vars__WEBPACK_IMPORTED_MODULE_0__["userHobby"].firstChild);
};
var getActiveTab = function getActiveTab(active) {
  if (active === '0') {
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["mainTab"][0].classList.remove('currentTab');
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["mainTab"][1].classList.add('currentTab');
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["tabBlock"][0].style.display = 'flex';
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["tabBlock"][1].style.display = 'none';
  } else {
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["mainTab"][1].classList.remove('currentTab');
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["mainTab"][0].classList.add('currentTab');
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["tabBlock"][1].style.display = 'flex';
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["tabBlock"][0].style.display = 'none';
  }

  sessionStorage.setItem('tabId', active);
};
var activePopup = function activePopup(event) {
  var eventUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (event.target.className === 'closePopup' || eventUser === 'close') {
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["popupAddHobby"].classList.remove('openPopup');
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["wrapper"].classList.remove('filter');
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["overlay"].style.display = 'none';
  } else {
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["popupAddHobby"].classList.add('openPopup');
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["wrapper"].classList.add('filter');
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["overlay"].style.display = 'block';
  }
};
var addHobbies = function addHobbies(inputValue, event) {
  var currentHobbies = JSON.parse(localStorage.getItem('hobby'));
  var countIdentical = 0;
  currentHobbies.forEach(function (element) {
    if (inputValue === element) countIdentical++;
  });

  if (countIdentical === 0) {
    currentHobbies.splice(0, 0, inputValue);
    localStorage.setItem('hobby', JSON.stringify(currentHobbies));
    createHobbyDomNode(inputValue, 'before');
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["fieldEnterHobby"].value = '';
    activePopup(event, 'close');
    showMessage("".concat(inputValue, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u0432\u0430\u0448\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432"), 'access');
  } else showMessage('Hobby with this name already exists', 'danger');
};
var deleteHobby = function deleteHobby(nameHobby) {
  var notDeleteElem = JSON.parse(localStorage.getItem('hobby'));

  for (var i = 0; i < _module_vars__WEBPACK_IMPORTED_MODULE_0__["hobbyName"].length; i++) {
    if (_module_vars__WEBPACK_IMPORTED_MODULE_0__["hobbyName"][i].innerHTML === nameHobby) {
      _module_vars__WEBPACK_IMPORTED_MODULE_0__["userHobby"].removeChild(_module_vars__WEBPACK_IMPORTED_MODULE_0__["hobbyName"][i]);
      notDeleteElem.splice(i, 1);
    }
  }

  localStorage.setItem('hobby', JSON.stringify(notDeleteElem));
  showMessage("".concat(nameHobby, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432"), 'access');
};
var changeInfo = function changeInfo(dataName, event) {
  var arrProp = dataName.split('.');
  var elementChange = document.querySelector(".".concat(event.target.className));
  var currentProfileData = JSON.parse(localStorage.getItem('profile')); // Запоминает только при снятии фокуса

  elementChange.addEventListener('change', function () {
    localStorage.setItem('profile', JSON.stringify(currentProfileData));
  }); // мониторит ввод пользователя

  elementChange.addEventListener('input', function () {
    if (dataName === 'fullName') {
      currentProfileData["".concat(arrProp[0])] = validFields(elementChange, /[^A-Za-zА-Яа-я\s]/g, dataName, 'Имя может состоять только из букв!');
    } else if (dataName === 'info.phone') {
      currentProfileData["".concat(arrProp[0])]["".concat(arrProp[1])] = validFields(elementChange, /[^0-9\s()+]/g, dataName, 'Телефон не может состоять из букв!');
    } else if (dataName === 'info.email') {
      currentProfileData["".concat(arrProp[0])]["".concat(arrProp[1])] = validFields(elementChange, /@/g, dataName, 'Отсутствует @!');
    } else {
      if (arrProp.length > 1) {
        currentProfileData["".concat(arrProp[0])]["".concat(arrProp[1])] = validFields(elementChange, /[^A-Za-zА-Яа-я]/g, dataName, 'Любые сиволы кроме буквенных недопустимы!');
      } else currentProfileData["".concat(arrProp[0])] = validFields(elementChange, /[^A-Za-zА-Яа-я\s\-]/g, dataName, 'Любые сиволы кроме буквенных недопустимы!');
    }
  });
}; // show message

var showMessage = function showMessage(message, typeMessage) {
  _module_vars__WEBPACK_IMPORTED_MODULE_0__["infoMessage"].innerHTML = message;
  _module_vars__WEBPACK_IMPORTED_MODULE_0__["infoMessage"].classList.add("".concat(typeMessage));
  setTimeout(function () {
    _module_vars__WEBPACK_IMPORTED_MODULE_0__["infoMessage"].classList.remove("".concat(typeMessage));
  }, 2000);
}; // validation fields

var validFields = function validFields(elementChange, regexp, dataName, message) {
  if (dataName === 'info.email' ? regexp.test(elementChange.value) : !regexp.test(elementChange.value)) {
    if (dataName === 'fullName') _module_vars__WEBPACK_IMPORTED_MODULE_0__["imageUser"].title = _module_vars__WEBPACK_IMPORTED_MODULE_0__["imageUser"].alt = elementChange.value;
    return elementChange.value.trim();
  } else {
    if (dataName !== 'info.email') elementChange.value = elementChange.value.replace(regexp, '');
    showMessage("".concat(message), 'danger');
  }
};

/***/ }),

/***/ "./src/js/module.vars.js":
/*!*******************************!*\
  !*** ./src/js/module.vars.js ***!
  \*******************************/
/*! exports provided: currentUserAgent, URL, wrapper, mainNavigation, mainTab, tabBlock, imageUser, fullNameUser, cityUser, familyUser, phoneNumber, emailUser, userHobby, userFriends, defaultSettings, overlay, spinner, hobbiesControl, popupAddHobby, closePopup, addHobby, fieldEnterHobby, hobbyName, mainInfoUser, infoMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUserAgent", function() { return currentUserAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainNavigation", function() { return mainNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainTab", function() { return mainTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabBlock", function() { return tabBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageUser", function() { return imageUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullNameUser", function() { return fullNameUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityUser", function() { return cityUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "familyUser", function() { return familyUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneNumber", function() { return phoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailUser", function() { return emailUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userHobby", function() { return userHobby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFriends", function() { return userFriends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlay", function() { return overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spinner", function() { return spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hobbiesControl", function() { return hobbiesControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupAddHobby", function() { return popupAddHobby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePopup", function() { return closePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHobby", function() { return addHobby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldEnterHobby", function() { return fieldEnterHobby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hobbyName", function() { return hobbyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainInfoUser", function() { return mainInfoUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoMessage", function() { return infoMessage; });


var currentUserAgent = window.navigator.userAgent.toLowerCase();
var friendsUser = 21; // количестов друзей -1
//Отсюда получаем рандомных пользователей

var URL = 'https://api.randomuser.me/1.0/?results=' + friendsUser + '&nat=gb,us&inc=gender,name,location,email,phone,picture'; // DOM Node
//main

var wrapper = document.querySelector('.wrapper'); // Tabs

var mainNavigation = document.querySelector('#mainNavigation');
var mainTab = document.querySelectorAll('.mainTab'); // tabBlock

var tabBlock = document.querySelectorAll('.profileTabBlock'); // templates

var imageUser = document.querySelector('.imageUser img'); //avatar

var fullNameUser = document.querySelector('.fullNameUser'); // name

var cityUser = document.querySelector('#mainInfo .userLocation'); // city
//info about user

var familyUser = document.querySelector('.valueHaracteristic .valueFamily');
var phoneNumber = document.querySelector('.valueHaracteristic .valuePhoneNumber');
var emailUser = document.querySelector('.valueHaracteristic .valueEmail');
var userHobby = document.querySelector('.userHobby'); // Friends

var userFriends = document.querySelector('.friendsUser'); //default user settings 

var defaultSettings = {
  city: "undefined",
  fullName: "undefined undefined",
  hobby: [],
  info: {
    family: "undefined",
    phone: "+7 (***) *** ** **",
    email: "undefined@undefined.ru"
  },
  picture: "./assets/UserPic.png"
}; //spinner

var overlay = document.querySelector('.overlay');
var spinner = document.querySelector('.spinner'); //Add hooby

var hobbiesControl = document.querySelector('.hobbiesControl');
var popupAddHobby = document.querySelector('.popupAddHobby');
var closePopup = document.querySelector('.closePopup');
var addHobby = document.querySelector('.addHobby');
var fieldEnterHobby = document.querySelector('.fieldEnterHobby');
var hobbyName = document.getElementsByClassName('hobby'); // изменение информации

var mainInfoUser = document.querySelector('.mainInfoUser'); // Alert message

var infoMessage = document.querySelector('.infoMessage');

/***/ })

/******/ });
//# sourceMappingURL=app.js.map