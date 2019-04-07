'use strict';

class Profile {
    constructor(state, url, currentTab = 0) {
        this._state = state;
        this.url = url;
        this.tab = currentTab;
    }
    set userProfile(local) {
        state.length !== 0 ? this._state = local : false;
    }
    get userProfile() {
        return [
            JSON.parse(this._state.getItem('profile')),
            JSON.parse(this._state.getItem('hobby')),
            JSON.parse(this._state.getItem('friends')),
        ];
    }
    // init
    init() {
        // Загрузка обновление страницы
        if (!this.userProfile[0])  {
            this.getDataUser();
            sessionStorage.setItem('tabId', this.tab);
        } else this.renderDataUsers(...this.userProfile);
        
        // Табы
        mainNavigation.addEventListener('click', event => {
            getActiveTab(event.target.dataset.tabId);
        });

        // Добавление интереса
        hobbiesControl.addEventListener('click', () => {
            activePopup(event);
            closePopup.addEventListener('click', activePopup);
            addHobby.addEventListener('click', () => {
                let inputValue = fieldEnterHobby.value.toLowerCase();
                inputValue !== '' ? addHobbies(inputValue) : console.log('Enter name hobby');
            });
        });
        userHobby.addEventListener('click', () => { 
            event.target.className !== 'userHobby' ? deleteHobby(event.target.innerHTML) : false; 
        });
    }

    //getData
    getDataUser() {
        const headers = new Headers();
        const initRequest = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default' 
        };
        const request = new Request(this.url, initRequest);
        
        fetch(request)
            .then( response => {
                if (response.status === 200) return response.json();
                else throw new Error('Response status not 200!');
            })
            .then( success => {
                this.parseDataUsers(success.results);
            })
            .catch( message => {
                console.log('error:' + message);
                setTimeout((url) => {
                    this.getDataUser(url);
                }, 60000);
                this.renderDataUsers();
            })
    }

    //Parse
    parseDataUsers(users) {
        // первого юзера в списке беру как основного
        let dataMainProfile, 
        hobby,
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
                }
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
        imageUser.descrription = imageUser.alt = user.fullName;
        fullNameUser.innerHTML = user.fullName;
        cityUser.innerHTML = user.city;
        familyUser.innerHTML = user.info.family;
        phoneNumber.innerHTML = user.info.phone;
        emailUser.innerHTML = user.info.email;

        userHobby.innerHTML = '';
        hobbies.forEach( hobby => {
            createHobbyDomNode(hobby);
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
new Profile(localStorage, URL).init();