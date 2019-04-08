'use strict';
const createHobbyDomNode = (hobby) =>{
    let newHobby = document.createElement('div');
    newHobby.className = 'hobby';
    newHobby.innerHTML = hobby;
    userHobby.insertBefore(newHobby, userHobby.firstChild);
}

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
}

const activePopup = (eventUser = '') => {
    if(event.target.className === 'closePopup' || eventUser === 'close') {
        popupAddHobby.classList.remove('openPopup');
        wrapper.classList.remove('filter');
        overlay.style.display = 'none';
    } else {
        popupAddHobby.classList.add('openPopup');
        wrapper.classList.add('filter');
        overlay.style.display = 'block';
    }
}

const addHobbies = (inputValue) => {
    let currentHobbies = JSON.parse(localStorage.getItem('hobby'));
    let countIdentical = 0;
    currentHobbies.forEach(element => {
        if (inputValue === element) countIdentical++;
    });
    if (countIdentical === 0) {
        currentHobbies.splice( 0, 0, inputValue);
        localStorage.setItem('hobby', JSON.stringify(currentHobbies));
        createHobbyDomNode(inputValue);
        fieldEnterHobby.value = '';
        activePopup('close');
    } else console.log('Hobby with this name already exists');
}

const deleteHobby = (nameHobby) => {
    let notDeleteElem = JSON.parse(localStorage.getItem('hobby'));
    for (let i = 0; i < hobbyName.length; i++) {
        if (hobbyName[i].innerHTML === nameHobby) {
            userHobby.removeChild(hobbyName[i]);
            notDeleteElem.splice( i, 1);
        };
    }
    localStorage.setItem('hobby', JSON.stringify(notDeleteElem));
}

const changeInfo = (dataName) => {
    const arrProp = dataName.split('.');
    const elementChange = document.querySelector(`.${ event.target.className }`);
    elementChange.addEventListener('change', () => {
            const currentProfileData = JSON.parse(localStorage.getItem('profile'));
            if (arrProp.length > 1) currentProfileData[`${ arrProp[0] }`][`${ arrProp[1] }`] = elementChange.value;
            else currentProfileData[`${ arrProp[0] }`] = elementChange.value;
            localStorage.setItem('profile', JSON.stringify(currentProfileData));
        });
}