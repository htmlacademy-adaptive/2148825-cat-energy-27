let mainHeader = document.querySelector('.main-header');
let navToggle = document.querySelector('.main-header__toggle');
let navigation = document.querySelector('.main-header__nav');

mainHeader.classList.remove('main-header--nojs');
navToggle.classList.remove('main-header__toggle--nojs');
navigation.classList.remove('main-header__nav--nojs');

navToggle.addEventListener('click', function () {
    navigation.classList.toggle('main-header__nav--closed');
    navigation.classList.toggle('main-header__nav--opened');
    navToggle.classList.toggle('main-header__toggle--closed');
    navToggle.classList.toggle('main-header__toggle--opened');
});
