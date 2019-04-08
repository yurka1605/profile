'use strict';

var fetcherForAll = function fetcherForAll() {
    var request = new Request(undefined.url, {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
    });
    fetch(request).then(function (response) {
        if (response.status === 200) return response.json();else throw new Error('Response status not 200!');
    }).then(function (success) {
        undefined.parseDataUsers(success.results);
    }).catch(function (message) {
        handlerErrorFetcher(message);
    });
};

var fetcherForIE10 = function fetcherForIE10() {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', undefined.url, false);
        xhr.send();
        undefined.parseDataUsers(JSON.parse(xhr.responseText).results);
    } catch (message) {
        handlerErrorFetcher(message);
    }
};

var handlerErrorFetcher = function handlerErrorFetcher(e) {
    console.log(e);
    undefined.renderDataUsers();
    setTimeout(function () {
        undefined.getDataUser(undefined.url);
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
    } else console.log('Hobby with this name already exists');
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
};

var changeInfo = function changeInfo(dataName, event) {
    var arrProp = dataName.split('.');
    var elementChange = document.querySelector('.' + event.target.className);
    var currentProfileData = JSON.parse(localStorage.getItem('profile'));
    if (dataName !== 'fullName') {
        elementChange.addEventListener('change', function () {
            if (arrProp.length > 1) currentProfileData['' + arrProp[0]]['' + arrProp[1]] = elementChange.value;else currentProfileData['' + arrProp[0]] = elementChange.value;
            localStorage.setItem('profile', JSON.stringify(currentProfileData));
        });
    } else {
        elementChange.addEventListener('input', function () {
            currentProfileData['' + arrProp[0]] = elementChange.value;
            imageUser.title = imageUser.alt = elementChange.value;
            localStorage.setItem('profile', JSON.stringify(currentProfileData));
        });
    }
};