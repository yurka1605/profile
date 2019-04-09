'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Profile = function () {
    function Profile(state, url, currentUserAgent) {
        var currentTab = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, Profile);

        this._state = state;
        this.url = url;
        this.tab = currentTab;
        this.currentUserAgent = /msie 10/i.test(currentUserAgent) || /net/i.test(currentUserAgent);
    }

    _createClass(Profile, [{
        key: 'init',

        // init
        value: function init() {
            var _this = this;

            // Условие выбора данных для загрузки(обновления) страницы
            if (this.userProfile === null) {
                sessionStorage.setItem('tabId', this.tab);
                this.getDataUser();
            } else this.renderDataUsers.apply(this, _toConsumableArray(this.userProfile));

            // Табы
            mainNavigation.addEventListener('click', function (event) {
                _this.currentUserAgent !== true ? getActiveTab(event.target.dataset.tabId) : getActiveTab(event.target.getAttribute('data-tab-id')); // for IE 10 и Edge
            });

            // Активация Popup
            hobbiesControl.addEventListener('click', function (event) {
                return activePopup(event);
            });
            closePopup.addEventListener('click', function (event) {
                return activePopup(event);
            });

            // Управление интересами
            fieldEnterHobby.addEventListener('input', function (event) {
                validFields(event.target, /[^A-Za-zА-Яа-я\s\-]/g, '', 'Телефон не может состоять из букв!');
            });
            addHobby.addEventListener('click', function (event) {
                var inputValue = fieldEnterHobby.value.toLowerCase();
                inputValue.trim() !== '' ? addHobbies(inputValue, event) : showMessage('Enter name hobby', 'danger');
            });
            userHobby.addEventListener('click', function (event) {
                if (event.target.className !== 'userHobby') deleteHobby(event.target.innerHTML);
            });

            //Изменение данных профиля
            mainInfoUser.addEventListener('click', function (event) {
                if (event.target.tagName === 'INPUT') {
                    _this.currentUserAgent !== true ? changeInfo(event.target.dataset.nameField, event) : changeInfo(event.target.getAttribute('data-name-field'), event); // for IE 10
                }
            });
        }

        //getData

    }, {
        key: 'getDataUser',
        value: function getDataUser() {
            this.currentUserAgent ? fetcherForIE.call(this) : fetcherForAll.call(this); //add context for Opera
        }

        //Parse

    }, {
        key: 'parseDataUsers',
        value: function parseDataUsers(users) {
            // первого юзера в списке беру как основного
            var dataMainProfile = {},
                hobby = [],
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
                createHobbyDomNode(hobby, 'after');
            });
            // Render списка друзей
            userFriends.innerHTML = '';
            friends.forEach(function (friend) {
                // блок инфо о друге
                var newFriend = document.createElement('section');
                newFriend.className = 'friendUser';
                newFriend.innerHTML = '\n                <img src="' + friend.picture + '" alt="' + friend.fullName + '" src="' + friend.fullName + '">\n                <div class="infoFriend">\n                     <div class="mainInfoFriend">\n                         <a href="' + friend.picture + '" class="fullNameFriend">' + friend.fullName + '</a>\n                         <span class="cityFriend">c. ' + friend.city + '</span>\n                     </div>\n                     <span class="friendStatus">' + friend.status + '</span>\n                </div>\n            ';
                userFriends.appendChild(newFriend);
            });

            setTimeout(function () {
                wrapper.classList.remove('filter');
                spinner.style.display = overlay.style.display = 'none';
            }, 1000);
        }
    }, {
        key: 'userProfile',
        get: function get() {
            if (this._state.length !== 0) {
                return [JSON.parse(this._state.getItem('profile')), JSON.parse(this._state.getItem('hobby')), JSON.parse(this._state.getItem('friends'))];
            } else return null;
        }
    }]);

    return Profile;
}();

var profile = new Profile(localStorage, URL, currentUserAgent);
profile.init();