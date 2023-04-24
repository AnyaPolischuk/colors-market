import { backgroundDark } from "./basket";
import { renderProductCards } from "./renderProducts";
import { products } from "../products";
import { sortProductsBy, sortingSelectedOption } from "./sorting";
import { addProductToBasket } from "./basket";
import { body, html } from "./burger";
import { bodyOfPage } from "./basket";

const filterBtn = document.querySelector('.products-sorting__btn');
const filterList = document.querySelector('.products-filter');
const filterCloseBtn = document.querySelector('.products-filter__close');

export let filteredProducts;
let notFilteredProducts;

export function openAndCloseFilterList() {
  const heightOfPage = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  filterBtn.addEventListener('click', () => {
    filterList.classList.add('products-filter_active');
    backgroundDark.classList.add('header__cover_active');
    bodyOfPage.classList.add('body_noscroll');
    backgroundDark.style.height = `${heightOfPage}px`;
  })
  filterCloseBtn.addEventListener('click', () => {
    filterList.classList.remove('products-filter_active');
    backgroundDark.classList.remove('header__cover_active');
    bodyOfPage.classList.remove('body_noscroll');
  })
}

export function checkFilters() {
  const checkboxNewFilter = document.querySelector('#new');
  const checkboxAvaliableFilter = document.querySelector('#avaliable');
  const checkboxContractsFilter = document.querySelector('#contracts');
  const checkboxExclusiveFilter = document.querySelector('#exclusive');
  const checkboxSaleFilter = document.querySelector('#sale');

  const arrayOfFilters = [checkboxNewFilter, checkboxAvaliableFilter, checkboxContractsFilter, checkboxExclusiveFilter, checkboxSaleFilter]

  arrayOfFilters.forEach(filter => {
    filter.addEventListener('change', (event) => {
      if (event.currentTarget.checked) {
        filterArrayOfProducts(filter.id);
        sortProductsBy(sortingSelectedOption);
        addProductToBasket();
      } else {
        turnOffFilterArrayOfProducts(filter.id);
        sortProductsBy(sortingSelectedOption);
        addProductToBasket();
      }
    })
  })
}

function filterArrayOfProducts(parameter) {
  
  if (parameter === 'new' || parameter === 'contracts' || parameter === 'exclusive') {
    if (!filteredProducts) {
      filteredProducts = products.filter(product => product[parameter] === true);
    } else {
      filteredProducts = filteredProducts.filter(product => product[parameter] === true);
    }
    renderProductCards(filteredProducts);
  }

  if (parameter === 'avaliable' || parameter === 'sale') {
    if (!filteredProducts) {
      filteredProducts = products.filter(product => product[parameter] > 0);
    } else {
      filteredProducts = filteredProducts.filter(product => product[parameter] > 0);
    }
    renderProductCards(filteredProducts);
  }
}

function turnOffFilterArrayOfProducts(parameter) {
  
  if (parameter === 'new' || parameter === 'contracts' || parameter === 'exclusive') {
    notFilteredProducts = products.filter(product => product[parameter] === false);
    filteredProducts = [...filteredProducts, ...notFilteredProducts];
    filteredProducts = Array.from(new Set(filteredProducts))
    renderProductCards(filteredProducts);
  }

  if (parameter === 'sale' || parameter === 'avaliable') {
    notFilteredProducts = products.filter(product => product[parameter] === 0);
    filteredProducts = [...filteredProducts, ...notFilteredProducts];
    filteredProducts = Array.from(new Set(filteredProducts))
    renderProductCards(filteredProducts);
  }
}





