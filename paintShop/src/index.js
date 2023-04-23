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




 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';
 // import Swiper and modules styles
//  import 'swiper/css';
//  import 'swiper/css/navigation';
//  import 'swiper/css/pagination';

 // init Swiper:
//  const swiper = new Swiper('.swiper', {
//    // configure Swiper to use modules
//    modules: [Navigation, Pagination],
//  });

 const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation, Pagination],
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});