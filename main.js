let navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');
//show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
//hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// close menu after click on link
let navLink = document.querySelectorAll('.nav-link');

let linkAction = () => {
    let navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(e => e.addEventListener('click', linkAction));
