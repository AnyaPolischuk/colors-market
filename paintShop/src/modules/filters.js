import { backgroundDark } from "./basket";
import { renderProductCards } from "./renderProducts";
import { products } from "../products";

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
      } else {
        turnOffFilterArrayOfProducts(filter.id);
      }
    })
  })
}

let filteredProducts;
let notFilteredProducts;

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





