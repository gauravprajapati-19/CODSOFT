var menu = document.querySelector('.menu-list');
var menuButton = document.querySelector('.menu-btn');
var closeMenu = document.querySelector('.menu-close');

function showMenu() {
    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide');
        closeMenu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}
menuButton.addEventListener('click', showMenu);

document.querySelector('.menu-close').addEventListener('click', () => {
    menu.classList.add('hide');
    closeMenu.classList.add('hide');
});
