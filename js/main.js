'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Profile = function () {
    function Profile(state, url) {
        var currentTab = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, Profile);

        this._state = state;
        this.url = url;
        this.tab = currentTab;
    }

    _createClass(Profile, [{
        key: 'init',

        // init
        value: function init() {
            // Загрузка обновление страницы
            if (!this.userProfile[0]) {
                this.getDataUser();
                sessionStorage.setItem('tabId', this.tab);
            } else this.renderDataUsers.apply(this, _toConsumableArray(this.userProfile));

            // Табы
            mainNavigation.addEventListener('click', function (event) {
                getActiveTab(event.target.dataset.tabId);
            });

            // Добавление интереса
            hobbiesControl.addEventListener('click', activePopup);
            closePopup.addEventListener('click', activePopup);
            addHobby.addEventListener('click', function () {
                var inputValue = fieldEnterHobby.value.toLowerCase();
                inputValue !== '' ? addHobbies(inputValue) : console.log('Enter name hobby');
            });
            userHobby.addEventListener('click', function () {
                event.target.className !== 'userHobby' ? deleteHobby(event.target.innerHTML) : false;
            });

            //Изменение данных 
            mainInfoUser.addEventListener('click', function (event) {
                event.target.tagName === 'INPUT' ? changeInfo(event.target.dataset.nameField) : false;
            });
        }

        //getData

    }, {
        key: 'getDataUser',
        value: function getDataUser() {
            var _this = this;

            var headers = new Headers();
            var initRequest = {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default'
            };
            var request = new Request(this.url, initRequest);

            fetch(request).then(function (response) {
                if (response.status === 200) return response.json();else throw new Error('Response status not 200!');
            }).then(function (success) {
                _this.parseDataUsers(success.results);
            }).catch(function (message) {
                console.log('error:' + message);
                setTimeout(function (url) {
                    _this.getDataUser(url);
                }, 60000);
                _this.renderDataUsers();
            });
        }

        //Parse

    }, {
        key: 'parseDataUsers',
        value: function parseDataUsers(users) {
            // первого юзера в списке беру как основного
            var dataMainProfile = void 0,
                hobby = void 0,
                friends = [];

            users.forEach(function (user, i) {
                if (i === 0) {
                    dataMainProfile = {
                        picture: user.picture.large,
                        fullName: user.name.first + ' ' + user.name.last,
                        city: '' + user.location.city,
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
                        fullName: user.name.first + ' ' + user.name.last,
                        city: '' + user.location.city,
                        status: user.gender === 'male' ? 'online' : ''
                    });
                }
            });

            localStorage.setItem('friends', JSON.stringify(friends));
            this.renderDataUsers(dataMainProfile, hobby, friends);
        }

        //Render

    }, {
        key: 'renderDataUsers',
        value: function renderDataUsers() {
            var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSettings;
            var hobbies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var friends = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            var tabId = sessionStorage.getItem('tabId');
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
            hobbies.forEach(function (hobby) {
                createHobbyDomNode(hobby);
            });
            // Render списка друзей
            userFriends.innerHTML = '';
            friends.forEach(function (friend) {
                // блок инфо о друге
                var newFriend = document.createElement('section');
                newFriend.className = 'friendUser';
                newFriend.innerHTML = '\n                <img src="' + friend.picture + '" alt="' + friend.fullName + '" src="' + friend.fullName + '">\n                <div class="infoFriend">\n                    <div class="mainInfoFriend">\n                        <a href="' + friend.picture + '" class="fullNameFriend">' + friend.fullName + '</a>\n                        <span class="cityFriend">c. ' + friend.city + '</span>\n                    </div>\n                    <span class="friendStatus">' + friend.status + '</span>\n                </div>\n            ';
                userFriends.appendChild(newFriend);
            });

            setTimeout(function () {
                wrapper.classList.remove('filter');
                spinner.style.display = overlay.style.display = 'none';
            }, 1000);
        }
    }, {
        key: 'userProfile',
        set: function set(local) {
            state.length !== 0 ? this._state = local : false;
        },
        get: function get() {
            return [JSON.parse(this._state.getItem('profile')), JSON.parse(this._state.getItem('hobby')), JSON.parse(this._state.getItem('friends'))];
        }
    }]);

    return Profile;
}();

new Profile(localStorage, URL).init();