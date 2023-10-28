"use strict"

const menu = document.querySelector('.menu_btn');
const nav = document.querySelector('.navigation_menu')

function active() {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

menu.addEventListener('click', active);