$(document).ready(function () {
    svg4everybody({});


    $('.index-slider__items').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    })



});



//-----------------MOBILE NAVIGATION BUTTON and MOBILE NAVIGATION----------------

const menuToggle = document.querySelector('#menu-toggle');
const mobileNavToggle = document.querySelector('#mobile-nav');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavToggle.classList.toggle('mobile-nav--active');
};



