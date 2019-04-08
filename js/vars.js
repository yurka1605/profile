'use strict';

var friendsUser = 21; // количестов друзей -1
//Отсюда получаем рандомных пользователей
var URL = 'https://api.randomuser.me/1.0/?results=' + friendsUser + '&nat=gb,us&inc=gender,name,location,email,phone,picture';

// DOM Node
//main
var wrapper = document.querySelector('.wrapper');

// Tabs
var mainNavigation = document.querySelector('#mainNavigation');
var mainTab = document.querySelectorAll('.mainTab');

// tabBlock

var tabBlock = document.querySelectorAll('.profileTabBlock');

// templates
var imageUser = document.querySelector('.imageUser img'); //avatar
var fullNameUser = document.querySelector('.fullNameUser'); // name
var cityUser = document.querySelector('#mainInfo .userLocation'); // city

//info about user
var familyUser = document.querySelector('.valueHaracteristic .valueFamily');
var phoneNumber = document.querySelector('.valueHaracteristic .valuePhoneNumber');
var emailUser = document.querySelector('.valueHaracteristic .valueEmail');
var userHobby = document.querySelector('.userHobby');

// Friends
var userFriends = document.querySelector('.friendsUser');

//default user settings 
var defaultSettings = {
    city: "undefined",
    fullName: "ubdefined undefined",
    hobby: [],
    info: {
        family: "undefined",
        phone: "+7 (***) *** ** **",
        email: "undefined@undefined.ru"
    },
    picture: "./assets/UserPic.png"

    //spinner
};var overlay = document.querySelector('.overlay');
var spinner = document.querySelector('.spinner');

//Add hooby
var hobbiesControl = document.querySelector('.hobbiesControl');
var popupAddHobby = document.querySelector('.popupAddHobby');
var closePopup = document.querySelector('.closePopup');
var addHobby = document.querySelector('.addHobby');
var fieldEnterHobby = document.querySelector('.fieldEnterHobby');
var hobbyName = document.getElementsByClassName('hobby');

// изменение информации

var mainInfoUser = document.querySelector('.mainInfoUser');