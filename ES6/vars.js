'use strict';
const friendsUser = 21; // количестов друзей -1
//Отсюда получаем рандомных пользователей
const URL = 'https://api.randomuser.me/1.0/?results=' + friendsUser + '&nat=gb,us&inc=gender,name,location,email,phone,picture';

// DOM Node
//main
const wrapper = document.querySelector('.wrapper');

// Tabs
const mainNavigation = document.querySelector('#mainNavigation');
const mainTab = document.querySelectorAll('.mainTab');

// tabBlock

const tabBlock = document.querySelectorAll('.profileTabBlock');

// templates
const imageUser = document.querySelector('.imageUser img'); //avatar
const fullnameUser = document.getElementById('fullNameUser'); // name
const cityUser = document.querySelector('#mainInfo .userLocation'); // city

//info about user
const familyUser = document.querySelector('.valueHaracteristic .valueFamily');
const phoneNumber = document.querySelector('.valueHaracteristic .valuePhoneNumber');
const emailUser = document.querySelector('.valueHaracteristic .valueEmail');
const userHobby = document.querySelector('.userHobby');

// Friends
const userFriends = document.querySelector('.friendsUser');

//default user settings 
const defaultSettings = {
    city: "undefined",
    fullName: "ubdefined undefined",
    hobby: [],
    info: {
        family: "undefined",
        phone: "+7 (***) *** ** **",
        email: "undefined@undefined.ru",
    },
    picture: "./assets/UserPic.png",
}

//spinner
const overlay = document.querySelector('.overlay');
const spinner = document.querySelector('.spinner');

//Add hooby
const hobbiesControl = document.querySelector('.hobbiesControl');
const popupAddHobby = document.querySelector('.popupAddHobby');
const closePopup = document.querySelector('.closePopup');
const addHobby = document.querySelector('.addHobby');
const fieldEnterHobby = document.querySelector('.fieldEnterHobby');
const hobbyName = document.getElementsByClassName('hobby');