'use strict';
import { wrapper, mainTab, tabBlock, imageUser, popupAddHobby,
    hobbyName, userHobby, overlay, fieldEnterHobby, infoMessage } from "./module.vars";

// func for request
export const fetcherForAll = function () {
    const request = new Request(this.url, {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
    });
    fetch(request)
        .then( response => {
            if (response.status === 200) return response.json();
            else throw new Error('Response status not 200!');
        })
        .then( success => {
            this.parseDataUsers(success.results);
        })
        .catch( message => {
            handlerErrorFetcher.call(this, message);
        });
};

export const fetcherForIE = function () {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url, false);
        xhr.send();
        this.parseDataUsers(JSON.parse(xhr.responseText).results);
    } catch (message) {
        handlerErrorFetcher.call(this, message);
    }
};

// При ошибке запроса выгрузка статичных данных из объекта defaultSettings
// Запроса к серверу повторно каждую минуту
export const handlerErrorFetcher = function (e) {
    showMessage(e, 'message-info_type_danger');
    this.renderDataUsers();
    setTimeout(() => {
        showMessage('Не удалось получить данные', 'message-info_type_danger');
        this.getDataUser(this.url);
    }, 60000);
};

export const createHobbyDomNode = (hobby, method) =>{
    let newHobby = document.createElement('div');
    newHobby.className = 'hobby';
    newHobby.innerHTML = hobby;
    method === 'after' ? userHobby.appendChild(newHobby) : userHobby.insertBefore(newHobby, userHobby.firstChild);
};

export const getActiveTab = (active) => {
    if(active === '0') {
        mainTab[0].classList.remove('header__main-tab_deactivated');
        mainTab[1].classList.add('header__main-tab_deactivated');
        tabBlock[0].style.display = 'flex';
        tabBlock[1].style.display = 'none';
    } else {
        mainTab[1].classList.remove('header__main-tab_deactivated');
        mainTab[0].classList.add('header__main-tab_deactivated');
        tabBlock[1].style.display = 'flex';
        tabBlock[0].style.display = 'none';
    }
    sessionStorage.setItem('tabId', active);
};

export const activePopup = (event, eventUser = '') => {
    if(event.target.className === 'popup__button-close' || eventUser === 'close') {
        popupAddHobby.classList.remove('popup_show');
        wrapper.classList.remove('wrapper-filter');
        overlay.style.display = 'none';
    } else {
        popupAddHobby.classList.add('popup_show');
        wrapper.classList.add('wrapper-filter');
        overlay.style.display = 'block';
    }
};

export const addHobbies = (inputValue, event) => {
    let currentHobbies = JSON.parse(localStorage.getItem('hobby'));
    let countIdentical = 0;
    currentHobbies.forEach(element => {
        if (inputValue === element) countIdentical++;
    });
    if (countIdentical === 0) {
        currentHobbies.splice( 0, 0, inputValue);
        localStorage.setItem('hobby', JSON.stringify(currentHobbies));
        createHobbyDomNode(inputValue, 'before');
        fieldEnterHobby.value = '';
        activePopup(event, 'close');
        showMessage(`${ inputValue } успешно добавлен в список ваших интересов`, 'message-info_type_access');
    } else showMessage('Hobby with this name already exists', 'message-info_type_danger');
};

export const deleteHobby = (nameHobby) => {
    let notDeleteElem = JSON.parse(localStorage.getItem('hobby'));
    for (let i = 0; i < hobbyName.length; i++) {
        if (hobbyName[i].innerHTML === nameHobby) {
            userHobby.removeChild(hobbyName[i]);
            notDeleteElem.splice( i, 1);
        }
    }
    localStorage.setItem('hobby', JSON.stringify(notDeleteElem));
    showMessage(`${ nameHobby } успешно удален из списка интересов`, 'message-info_type_access');
};

export const changeInfo = (dataName, event) => {
    const arrProp = dataName.split('.');
    const elementChange = event.target;
    const currentProfileData = JSON.parse(localStorage.getItem('profile'));

    // Запоминает только при снятии фокуса
    elementChange.addEventListener('change', () => {
       localStorage.setItem('profile', JSON.stringify(currentProfileData));
    });
    // мониторит ввод пользователя
    elementChange.addEventListener('input', () => {
        if (dataName === 'fullName') {
            currentProfileData[`${arrProp[0]}`] = validFields(
                elementChange,
                /[^A-Za-zА-Яа-я\s]/g,
                dataName,
                'Имя может состоять только из букв!'
            );
        } else if (dataName === 'info.phone') {
            currentProfileData[`${arrProp[0]}`][`${arrProp[1]}`] = validFields(
                elementChange,
                /[^0-9\s()+]/g,
                dataName,
                'Телефон не может состоять из букв!'
            );
        } else if (dataName === 'info.email') {
            currentProfileData[`${arrProp[0]}`][`${arrProp[1]}`] = validFields(
                elementChange,
                /@/g,
                dataName,
                'Отсутствует @!'
            );
        } else {
            if (arrProp.length > 1) {
                currentProfileData[`${arrProp[0]}`][`${arrProp[1]}`] = validFields(
                    elementChange,
                    /[^A-Za-zА-Яа-я]/g,
                    dataName,
                    'Любые сиволы кроме буквенных недопустимы!'
                );
            } else currentProfileData[`${ arrProp[0] }`] = validFields(
                elementChange,
                /[^A-Za-zА-Яа-я\s\-]/g,
                dataName,
                'Любые сиволы кроме буквенных недопустимы!'
            );
        }
    });
};
// show message
export const showMessage = (message, typeMessage) => {
    infoMessage.innerHTML = message;
    infoMessage.classList.add(`${ typeMessage }`);
    setTimeout( () =>{
        infoMessage.classList.remove(`${ typeMessage }`);
    },2000);
};

// validation fields
export const validFields = (elementChange, regexp, dataName, message) => {
    if (dataName === 'info.email' ? regexp.test(elementChange.value) : !regexp.test(elementChange.value)) {
        if (dataName === 'fullName') imageUser.title = imageUser.alt = elementChange.value;
        return elementChange.value.trim();
    } else {
        if (dataName !== 'info.email') elementChange.value = elementChange.value.replace(regexp, '');
        showMessage(`${ message }`,'message-info_type_danger');
    }
};