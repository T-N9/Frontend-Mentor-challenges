
const getHeader_menu_btn=document.querySelector('.header__menu');
const getOverlay_menu=document.querySelector('.menu-overlay');
const getNav_sm=document.querySelector('.sm-nav-wrapper');


getHeader_menu_btn.onclick=function(){
    this.classList.toggle('menu-btn-open');
    getOverlay_menu.classList.toggle('fade-out');
    getOverlay_menu.classList.toggle('fade-in');

    getNav_sm.classList.toggle('fade-out-up');
    getNav_sm.classList.toggle('fade-in-down');
}

