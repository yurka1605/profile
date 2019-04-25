import { getActiveTab } from "./header/__main-tab/__main-tab";
import { activePopup } from "../popup/popup";
import { showMessage } from "../message-info/message-info";
import { renderFriends } from "./profile/__tab-block/_friends/_friends";
import { renderUsers } from "./profile/__tab-block/_user/_user";
import { createHobbyDomNode } from "./profile/__tab-block/_user/user/__hobbies/__hobbies";
import { addHobbies } from "./profile/__tab-block/_user/user/__hobbies/hobby/hobby";
import { deleteHobby } from "./profile/__tab-block/_user/user/__hobbies/hobby/hobby";
import { validFields } from "./profile/__tab-block/_user/user/__input/__input.validate";
import { changeInfo } from "./profile/__tab-block/_user/user/user";
import { fetcherForIE, fetcherForAll } from "./main-fetch";
import { parseData } from "./main-parse-request-data";
import { currentUserAgent, URL, mainNavigation, hobbiesControl, closePopup, fieldEnterHobby,
          addHobby, userHobby, mainInfoUser, defaultSettings, wrapper, spinner, overlay } from "../vars";

export class Profile {
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

    // Активация Popup
    hobbiesControl.addEventListener('click', (event) => activePopup(event));
    closePopup.addEventListener('click', (event) => activePopup(event));

    // Управление интересами
    fieldEnterHobby.addEventListener('input', (event) => {
      validFields(event.target, /[^A-Za-zА-Яа-я0-9\s\-]/g,'','Введены недопустимые символы в названии интереса!');
    });

    //Добавление интереса
    addHobby.addEventListener('click', (event) => {
      let inputValue = fieldEnterHobby.value.toLowerCase();
      inputValue.trim() !== ''
        ? addHobbies(inputValue, event)
        : showMessage('Enter name hobby', 'message-info_type_danger');
    });
    //Удаление интереса
    userHobby.addEventListener('click', (event) => {
      if(event.target.className !== 'user__hobbies') deleteHobby(event.target.innerHTML);
    });

    //Изменение данных профиля
    mainInfoUser.addEventListener('click', event => {
      if (event.target.tagName === 'INPUT') {
        this.currentUserAgent !== true
          ? changeInfo(event.target.dataset.nameField, event)
          : changeInfo(event.target.getAttribute('data-name-field'), event); // for IE 10
      }
    });
  }

  //getData
  getDataUser() {
    this.currentUserAgent ? fetcherForIE.call(this) : fetcherForAll.call(this); //add context for Opera
  }

  //Parse
  parseDataUsers(users) {
    // первого юзера в списке беру как основного
    const [dataMainProfile, hobby, friends] = parseData({}, [], [], users);
    localStorage.setItem('friends', JSON.stringify(friends));
    this.renderDataUsers(dataMainProfile, hobby, friends);
  }

  //Render
  renderDataUsers(user = defaultSettings, hobbies = [], friends = []) {
    getActiveTab(sessionStorage.getItem('tabId'));

    // render основного профиля
    renderUsers(user, hobbies);

    userHobby.innerHTML = '';
    hobbies.forEach( hobby => {
      createHobbyDomNode(hobby, 'after');
    });

    // Render списка друзей
    renderFriends( friends );

    setTimeout(() => {
      wrapper.classList.remove('wrapper-filter');
      spinner.style.display = overlay.style.display = 'none';
    }, 1000);
  }
}
const profile = new Profile(localStorage, URL, currentUserAgent);
profile.init();
