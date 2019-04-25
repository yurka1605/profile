'use strict';
export const currentUserAgent = window.navigator.userAgent.toLowerCase();

const friendsUser = 21; // количестов друзей -1
//Отсюда получаем рандомных пользователей
export const URL = 'https://api.randomuser.me/1.0/?results=' + friendsUser + '&nat=gb,us&inc=gender,name,location,email,phone,picture';

// DOM Node
//main
export const wrapper = document.querySelector('.wrapper');

// Tabs
export const mainNavigation = document.querySelector('.header__nav');
export const mainTab = document.querySelectorAll('.header__main-tab');

// tabBlock

export const tabBlock = document.querySelectorAll('.profile__tab-block');

// templates
export const imageUser = document.querySelector('.avatar__img img'); //avatar
export const fullNameUser = document.querySelector('.user__full-name'); // name
export const cityUser = document.querySelector('.user__location'); // city

//info about user
export const familyUser = document.querySelector('.user__input-family');
export const phoneNumber = document.querySelector('.user__input-phone-number');
export const emailUser = document.querySelector('.user__input-email');
export const userHobby = document.querySelector('.user__hobbies');

// Friends
export const userFriends = document.querySelector('.profile__tab-block_friends');

//default user settings
export const defaultSettings = {
  city: "undefined",
  fullName: "undefined undefined",
  hobby: [],
  info: {
    family: "undefined",
    phone: "+7 (***) *** ** **",
    email: "undefined@undefined.ru",
  },
  picture: "./assets/UserPic.png",
};

//spinner
export const overlay = document.querySelector('.overlay');
export const spinner = document.querySelector('.spinner');

//Add hooby
export const hobbiesControl = document.querySelector('.avatar__button');
export const popupAddHobby = document.querySelector('.popup');
export const closePopup = document.querySelector('.popup__button-close');
export const addHobby = document.querySelector('.popup__button_state_add-hobby');
export const fieldEnterHobby = document.querySelector('.popup__input-field-enter');
export const hobbyName = document.getElementsByClassName('hobby');

// изменение информации

export const mainInfoUser = document.querySelector('.user');

// Alert message

export const infoMessage = document.querySelector('.message-info');