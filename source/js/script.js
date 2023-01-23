let mainHeader = document.querySelector('.main-header');
let navToggle = document.querySelector('.main-header__toggle');
let navigation = document.querySelector('.main-header__nav');
let locationImage = document.querySelector('.location__map-image');
let locationMap = document.querySelector('.location__map');

/* Отлючение режима nojs */
mainHeader.classList.remove('main-header--nojs');
navToggle.classList.remove('main-header__toggle--nojs');
navigation.classList.remove('main-header__nav--nojs');
locationImage.classList.remove('location__map-image--nojs');
locationMap.classList.remove('location__map--nojs');

/* Открытие и закрытие мобильного меню */
navToggle.addEventListener('click', function () {
    navigation.classList.toggle('main-header__nav--closed');
    navigation.classList.toggle('main-header__nav--opened');
    navToggle.classList.toggle('main-header__toggle--closed');
    navToggle.classList.toggle('main-header__toggle--opened');
});
