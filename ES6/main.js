'use strict';
class Profile {
    constructor(state, url, currentUserAgent, currentTab = 0) {
        this._state = state;
        this.url = url;
        this.tab = currentTab;
        this.currentUserAgent = /msie 10/i.test(currentUserAgent) || /net/i.test(currentUserAgent);
    }
    get userProfile() {
        if (this._state.length !== 0) {
            return [
                JSON.parse(this._state.getItem('profile')),
                JSON.parse(this._state.getItem('hobby')),
                JSON.parse(this._state.getItem('friends')),
            ];
        } else return null;
    }
    // init
    init() {
        // Условие выбора данных для загрузки(обновления) страницы
        if (this.userProfile === null) {
            sessionStorage.setItem('tabId', this.tab);
            this.getDataUser();
        } else this.renderDataUsers(...this.userProfile);

        // Табы
        mainNavigation.addEventListener('click', (event) =>{
            this.currentUserAgent !== true
                ? getActiveTab(event.target.dataset.tabId)
                : getActiveTab(event.target.getAttribute('data-tab-id'));// for IE 10 и Edge
        });

        // Добавление интереса
        hobbiesControl.addEventListener('click', (event) => activePopup(event));
        closePopup.addEventListener('click', (event) => activePopup(event));
        addHobby.addEventListener('click', (event) => {
            let inputValue = fieldEnterHobby.value.toLowerCase();
            inputValue !== '' ? addHobbies(inputValue, event) : console.log('Enter name hobby');
        });
        userHobby.addEventListener('click', (event) => {
            event.target.className !== 'userHobby' ? deleteHobby(event.target.innerHTML) : false;
        });

        //Изменение данных профиля
        mainInfoUser.addEventListener('click', event => {
            if (event.target.tagName === 'INPUT') {
                this.currentUserAgent !== true
                    ? changeInfo(event.target.dataset.nameField, event)
                    : changeInfo(event.target.getAttribute('data-name-field'), event); // for IE 10
            }
        })
    }

    //getData
    getDataUser() {
        this.currentUserAgent ? fetcherForIE10.call(this) : fetcherForAll.call(this); //add context for Opera 
    }

    //Parse
    parseDataUsers(users) {
        // первого юзера в списке беру как основного
        let dataMainProfile = {},
            hobby = [],
            friends = [];

        users.forEach( (user, i) => {
            if (i === 0 ) {
                dataMainProfile = {
                    picture: user.picture.large,
                    fullName: `${user.name.first} ${user.name.last}`,
                    city: `${user.location.city}`,
                    info: {
                        family: user.gender === 'male' ? 'Холост' : 'Married',
                        phone: user.phone,
                        email: user.email,
                    },
                };
                hobby = ['cat', 'car', 'music', 'sport'];
                localStorage.setItem('hobby' ,JSON.stringify(hobby));
                localStorage.setItem('profile', JSON.stringify(dataMainProfile));
            } else {
                friends.push({
                    picture: user.picture.medium,
                    fullName: `${user.name.first} ${user.name.last}`,
                    city: `${user.location.city}`,
                    status: user.gender === 'male' ? 'online' : '',
                });
            }
        });
        localStorage.setItem('friends', JSON.stringify(friends));
        this.renderDataUsers(dataMainProfile, hobby, friends);
    }

    //Render
    renderDataUsers(user = defaultSettings, hobbies = [], friends = []) {
        const tabId = sessionStorage.getItem('tabId');
        getActiveTab(tabId);

        // render основного профиля
        imageUser.src = user.picture;
        imageUser.title = imageUser.alt = user.fullName;
        fullNameUser.value = user.fullName;
        cityUser.value = user.city;
        familyUser.value = user.info.family;
        phoneNumber.value = user.info.phone;
        emailUser.value = user.info.email;

        userHobby.innerHTML = '';
        hobbies.forEach( hobby => {
            createHobbyDomNode(hobby, 'after');
        });
        // Render списка друзей
        userFriends.innerHTML = '';
        friends.forEach( friend => {
            // блок инфо о друге
            let newFriend = document.createElement('section');
            newFriend.className = 'friendUser';
            newFriend.innerHTML = `
                <img src="${ friend.picture }" alt="${ friend.fullName }" src="${ friend.fullName }">
                <div class="infoFriend">
                     <div class="mainInfoFriend">
                         <a href="${ friend.picture }" class="fullNameFriend">${ friend.fullName }</a>
                         <span class="cityFriend">c. ${ friend.city }</span>
                     </div>
                     <span class="friendStatus">${ friend.status }</span>
                </div>
            `;
            userFriends.appendChild(newFriend);
        });

        setTimeout(() => {
            wrapper.classList.remove('filter');
            spinner.style.display = overlay.style.display = 'none';
        }, 1000);
    }
}
const profile = new Profile(localStorage, URL, currentUserAgent);
profile.init();
