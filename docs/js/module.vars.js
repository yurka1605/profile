'use strict';
export const currentUserAgent = window.navigator.userAgent.toLowerCase();

const friendsUser = 21; // количестов друзей -1
//Отсюда получаем рандомных пользователей
export const URL = 'https://api.randomuser.me/1.0/?results=' + friendsUser + '&nat=gb,us&inc=gender,name,location,email,phone,picture';

// DOM Node
//main
export const wrapper = document.querySelector('.wrapper');

// Tabs
export const mainNavigation = document.querySelector('#mainNavigation');
export const mainTab = document.querySelectorAll('.mainTab');

// tabBlock

export const tabBlock = document.querySelectorAll('.profileTabBlock');

// templates
export const imageUser = document.querySelector('.imageUser img'); //avatar
export const fullNameUser = document.querySelector('.fullNameUser'); // name
export const cityUser = document.querySelector('#mainInfo .userLocation'); // city

//info about user
export const familyUser = document.querySelector('.valueHaracteristic .valueFamily');
export const phoneNumber = document.querySelector('.valueHaracteristic .valuePhoneNumber');
export const emailUser = document.querySelector('.valueHaracteristic .valueEmail');
export const userHobby = document.querySelector('.userHobby');

// Friends
export const userFriends = document.querySelector('.friendsUser');

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
export const hobbiesControl = document.querySelector('.hobbiesControl');
export const popupAddHobby = document.querySelector('.popupAddHobby');
export const closePopup = document.querySelector('.closePopup');
export const addHobby = document.querySelector('.addHobby');
export const fieldEnterHobby = document.querySelector('.fieldEnterHobby');
export const hobbyName = document.getElementsByClassName('hobby');

// изменение информации

export const mainInfoUser = document.querySelector('.mainInfoUser');

// Alert message

export const infoMessage = document.querySelector('.infoMessage');