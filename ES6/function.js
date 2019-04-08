'use strict';

const fetcherForAll = function () {
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

const fetcherForIE10 = function () {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url, false);
        xhr.send();
        this.parseDataUsers(JSON.parse(xhr.responseText).results);
    } catch (message) {
        handlerErrorFetcher.call(this, message);
    }
};

const handlerErrorFetcher = function (e) {
    console.log(this);
    console.log(e);
    this.renderDataUsers();
    setTimeout(() => {
        this.getDataUser(this.url);
    }, 60000);
};

const createHobbyDomNode = (hobby, method) =>{
    let newHobby = document.createElement('div');
    newHobby.className = 'hobby';
    newHobby.innerHTML = hobby;
    method === 'after' ? userHobby.appendChild(newHobby) : userHobby.insertBefore(newHobby, userHobby.firstChild);
};

const getActiveTab = (active) => {
    if(active === '0') {
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

const activePopup = (event, eventUser = '') => {
    if(event.target.className === 'closePopup' || eventUser === 'close') {
        popupAddHobby.classList.remove('openPopup');
        wrapper.classList.remove('filter');
        overlay.style.display = 'none';
    } else {
        popupAddHobby.classList.add('openPopup');
        wrapper.classList.add('filter');
        overlay.style.display = 'block';
    }
};

const addHobbies = (inputValue, event) => {
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
    } else console.log('Hobby with this name already exists');
};

const deleteHobby = (nameHobby) => {
    let notDeleteElem = JSON.parse(localStorage.getItem('hobby'));
    for (let i = 0; i < hobbyName.length; i++) {
        if (hobbyName[i].innerHTML === nameHobby) {
            userHobby.removeChild(hobbyName[i]);
            notDeleteElem.splice( i, 1);
        }
    }
    localStorage.setItem('hobby', JSON.stringify(notDeleteElem));
};

const changeInfo = (dataName, event) => {
    const arrProp = dataName.split('.');
    const elementChange = document.querySelector(`.${ event.target.className }`);
    const currentProfileData = JSON.parse(localStorage.getItem('profile'));
    if (dataName !== 'fullName') {
        elementChange.addEventListener('change', () => {
            if (arrProp.length > 1) currentProfileData[`${arrProp[0]}`][`${arrProp[1]}`] = elementChange.value;
            else currentProfileData[`${arrProp[0]}`] = elementChange.value;
            localStorage.setItem('profile', JSON.stringify(currentProfileData));
        });
    } else {
        elementChange.addEventListener('input', () => {
            currentProfileData[`${arrProp[0]}`] = elementChange.value;
            imageUser.title = imageUser.alt = elementChange.value;
            localStorage.setItem('profile', JSON.stringify(currentProfileData));
        });
    }
};