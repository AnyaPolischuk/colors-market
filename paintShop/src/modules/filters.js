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
        //console.log(filter.id, 'checked');
      } else {
        //console.log(filter.id, 'not checked');
        filterArrayOfProducts(filter.id);
      }
    })
  })
}

let newArr;

function filterArrayOfProducts(parameter) {
  
  if (parameter === 'new') {
    if (!newArr) {
      newArr = products.filter(product => product.new === true )
    } else {
      newArr = newArr.filter(product => product.new === true )
    }
    renderProductCards(newArr);
    console.log(newArr)
  }

  if (parameter === 'avaliable') {
    if (!newArr) {
      newArr = products.filter(product => product.avaliable > 0 )
    } else {
      newArr = newArr.filter(product => product.avaliable > 0 )
    }
    renderProductCards(newArr);
    console.log(newArr)
  }

  if (parameter === 'contracts') {
    if (!newArr) {
      newArr = products.filter(product => product.contracts === true )
    } else {
      newArr = newArr.filter(product => product.contracts === true)
    }
    renderProductCards(newArr);
    console.log(newArr)
  }

  if (parameter === 'exclusive') {
    if (!newArr) {
      newArr = products.filter(product => product.exclusive === true )
    } else {
      newArr = newArr.filter(product => product.exclusive === true)
    }
    renderProductCards(newArr);
    console.log(newArr)
  }

  if (parameter === 'sale') {
    if (!newArr) {
      newArr = products.filter(product => product.sale > 0 )
    } else {
      newArr = newArr.filter(product => product.sale > 0)
    }
    renderProductCards(newArr);
    console.log(newArr)
  }
}





