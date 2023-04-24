import { backgroundDark } from "./basket";

const burgerMenu = document.querySelector('.menu-burger');
const navList = document.querySelector('.nav__list');
export const body = document.body;
export const html = document.documentElement;
let heightOfPage;

export function openAndCloseBurgerMenu() {
  heightOfPage = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('nav__list_active');
    burgerMenu.classList.toggle('menu-burger_active');
    backgroundDark.classList.toggle('header__cover_active');
    backgroundDark.style.height = `${heightOfPage}px`;
    document.querySelector('.body').classList.toggle('body_noscroll');
  })
}





