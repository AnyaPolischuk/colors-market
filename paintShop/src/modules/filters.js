import { backgroundDark } from "./basket";

const filterBtn = document.querySelector('.products-sorting__btn');
const filterList = document.querySelector('.products-filter');
const filterCloseBtn = document.querySelector('.products-filter__close');

export function openAndCloseFilterList() {
  filterBtn.addEventListener('click', () => {
    filterList.classList.add('products-filter_active');
    backgroundDark.classList.add('header__cover_active');
  })
  filterCloseBtn.addEventListener('click', () => {
    filterList.classList.remove('products-filter_active');
    backgroundDark.classList.remove('header__cover_active');
  })
}