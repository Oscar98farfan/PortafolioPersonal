const hamburgerMenu = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
})