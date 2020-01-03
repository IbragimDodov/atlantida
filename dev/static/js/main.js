$(document).ready(function () {
    svg4everybody({});


    $('.index-slider__items').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    })



});



// //-----------------MOBILE NAVIGATION BUTTON and MOBILE NAVIGATION----------------

// const menuToggle = document.querySelector('#menu-toggle');
// const mobileNavToggle = document.querySelector('#mobile-nav');

// menuToggle.onclick = function() {
//     menuToggle.classList.toggle('menu-icon-active');
//     mobileNavToggle.classList.toggle('mobile-nav--active');
// };



// ----------------------------------------------- portfolio__tabs----start

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.portfolio__tabs-content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach( item => {
            item.classList.remove( 'is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tab();

// ----------------------------------------------- portfolio__tabs----end
