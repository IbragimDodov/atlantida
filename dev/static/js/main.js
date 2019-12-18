$(document).ready(function () {
    svg4everybody({});
});



//-----------------MOBILE NAVIGATION BUTTON and MOBILE NAVIGATION----------------

const menuToggle = document.querySelector('#menu-toggle');
const mobileNavToggle = document.querySelector('#mobile-nav');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavToggle.classList.toggle('mobile-nav--active');
};
