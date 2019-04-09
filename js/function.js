'use strict';
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
};

// При ошибке запроса выгрузка статичных данных из объекта defaultSettings
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
    method === 'after' ? userHobby.appendChild(newHobby) : userHobby.insertBefore(newHobby, userHobby.firstChild);
};

var getActiveTab = function getActiveTab(active) {
    if (active === '0') {
        mainTab[0].classList.remove('currentTab');
        mainTab[1].classList.add('currentTab');
        tabBlock[0].style.display = 'flex';
        tabBlock[1].style.display = 'none';
    } else {
        mainTab[1].classList.remove('currentTab');
        mainTab[0].classList.add('currentTab');
        tabBlock[1].style.display = 'flex';
        tabBlock[0].style.display = 'none';
    }
    sessionStorage.setItem('tabId', active);
};

var activePopup = function activePopup(event) {
    var eventUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (event.target.className === 'closePopup' || eventUser === 'close') {
        popupAddHobby.classList.remove('openPopup');
        wrapper.classList.remove('filter');
        overlay.style.display = 'none';
    } else {
        popupAddHobby.classList.add('openPopup');
        wrapper.classList.add('filter');
        overlay.style.display = 'block';
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
        fieldEnterHobby.value = '';
        activePopup(event, 'close');
        showMessage(inputValue + ' \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u0432\u0430\u0448\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432', 'access');
    } else showMessage('Hobby with this name already exists', 'danger');
};

var deleteHobby = function deleteHobby(nameHobby) {
    var notDeleteElem = JSON.parse(localStorage.getItem('hobby'));
    for (var i = 0; i < hobbyName.length; i++) {
        if (hobbyName[i].innerHTML === nameHobby) {
            userHobby.removeChild(hobbyName[i]);
            notDeleteElem.splice(i, 1);
        }
    }
    localStorage.setItem('hobby', JSON.stringify(notDeleteElem));
    showMessage(nameHobby + ' \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432', 'access');
};

var changeInfo = function changeInfo(dataName, event) {
    var arrProp = dataName.split('.');
    var elementChange = document.querySelector('.' + event.target.className);
    var currentProfileData = JSON.parse(localStorage.getItem('profile'));

    // Запоминает только при снятии фокуса
    elementChange.addEventListener('change', function () {
        localStorage.setItem('profile', JSON.stringify(currentProfileData));
    });
    // мониторит ввод пользователя
    elementChange.addEventListener('input', function () {
        if (dataName === 'fullName') {
            currentProfileData['' + arrProp[0]] = validFields(elementChange, /[^A-Za-zА-Яа-я\s]/g, dataName, 'Имя может состоять только из букв!');
        } else if (dataName === 'info.phone') {
            currentProfileData['' + arrProp[0]]['' + arrProp[1]] = validFields(elementChange, /[^0-9\s()+]/g, dataName, 'Телефон не может состоять из букв!');
        } else if (dataName === 'info.email') {
            currentProfileData['' + arrProp[0]]['' + arrProp[1]] = validFields(elementChange, /@/g, dataName, 'Отсутствует @!');
        } else {
            if (arrProp.length > 1) {
                currentProfileData['' + arrProp[0]]['' + arrProp[1]] = validFields(elementChange, /[^A-Za-zА-Яа-я]/g, dataName, 'Любые сиволы кроме буквенных недопустимы!');
            } else currentProfileData['' + arrProp[0]] = validFields(elementChange, /[^A-Za-zА-Яа-я\s\-]/g, dataName, 'Любые сиволы кроме буквенных недопустимы!');
        }
    });
};
// show message
var showMessage = function showMessage(message, typeMessage) {
    infoMessage.innerHTML = message;
    infoMessage.classList.add('' + typeMessage);
    setTimeout(function () {
        infoMessage.classList.remove('' + typeMessage);
    }, 2000);
};

// validation fields
var validFields = function validFields(elementChange, regexp, dataName, message) {
    if (dataName === 'info.email' ? regexp.test(elementChange.value) : !regexp.test(elementChange.value)) {
        if (dataName === 'fullName') imageUser.title = imageUser.alt = elementChange.value;
        return elementChange.value.trim();
    } else {
        if (dataName !== 'info.email') elementChange.value = elementChange.value.replace(regexp, '');
        showMessage('' + message, 'danger');
    }
};