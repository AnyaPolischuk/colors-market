import { backgroundDark } from "./basket";
import { products } from "../products";
import { filteredProducts } from "./filters";
import { renderProductCards } from "./renderProducts";
import { addProductToBasket } from "./basket";
import { body, html } from "./burger";
import { bodyOfPage } from "./basket";

const modalSorting = document.querySelector(".products-sorting__modal");
const sortingList = document.querySelector(".products-sorting__list");
const sortingItem = document.querySelectorAll(".products-sorting__item");

const sortingOptions = {
  expensive: 'Сначала дорогие',
  cheap: 'Сначала недорогие',
  popular: 'Сначала популярные',
  new: 'Сначала новые'
}

let heightOfPage;

export let sortingSelectedOption;

export function makeSortingList() {
  heightOfPage = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  modalSorting.addEventListener("click", () => {
    sortingList.classList.toggle("active");
    backgroundDark.classList.add('header__cover_active');
    bodyOfPage.classList.add('body_noscroll');
    backgroundDark.style.height = `${heightOfPage}px`;
  });

  sortingItem.forEach((item) => {
    item.addEventListener("click", () => {
      sortingItem.forEach((item) => {item.classList.remove('selected')});
      modalSorting.querySelector("span").innerHTML = item.innerHTML;
      item.classList.add("selected");
      sortingList.classList.toggle("active");
      backgroundDark.classList.remove('header__cover_active');
      bodyOfPage.classList.remove('body_noscroll');
      sortingSelectedOption = item.innerHTML;
      sortProductsBy(item.innerHTML);
    });
  });
}

 export function sortProductsBy(parameter) {
  if (parameter === sortingOptions.expensive) {
    if (filteredProducts) {
      filteredProducts.sort((a, b) => a.price < b.price ? 1 : -1);
      renderProductCards(filteredProducts);
    } else {
      products.sort((a, b) => a.price < b.price ? 1 : -1);
      renderProductCards(products);
    }
  }

  if (parameter === sortingOptions.cheap) {
    if (filteredProducts) {
      filteredProducts.sort((a, b) => a.price > b.price ? 1 : -1);
      renderProductCards(filteredProducts);
    } else {
      products.sort((a, b) => a.price > b.price ? 1 : -1);
      renderProductCards(products);
    }
  }
  addProductToBasket();
}
