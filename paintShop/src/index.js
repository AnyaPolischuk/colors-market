import Swiper, { Navigation, Pagination } from 'swiper';

import './index.html';
import './style.scss';

import { openBasket } from '../src/modules/basket';
import { openAndCloseBurgerMenu } from './modules/burger';
import { openAndCloseFilterList } from './modules/filters';
import { renderProductCards } from './modules/renderProducts';
import { products } from './products';
import { checkFilters } from './modules/filters';
import { makeSortingList } from './modules/sorting';
import { addProductToBasket } from '../src/modules/basket';


openBasket();
openAndCloseBurgerMenu();
openAndCloseFilterList();
renderProductCards(products);
checkFilters();
makeSortingList();
addProductToBasket();


 const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



