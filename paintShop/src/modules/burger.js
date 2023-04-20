const burgerMenu = document.querySelector('.menu-burger');
const navList = document.querySelector('.nav__list');

export function openAndCloseBurgerMenu() {
  burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('nav__list_active');
    burgerMenu.classList.toggle('menu-burger_active');
  })
}