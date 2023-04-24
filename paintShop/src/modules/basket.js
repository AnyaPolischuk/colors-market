import { products } from "../products";
import { body, html } from "./burger";

const basketIcon = document.querySelector('.panel-icons__basket');
const basketCloseItem = document.querySelector('.basket-header__close');
const basketProducts = document.querySelector('.basket');
export const backgroundDark = document.querySelector('.header__cover');
const basketCards = document.querySelector('.basket-cards');
const amountProductsInBasket = document.querySelector('.panel-icons__amount');
const sumOfProducts = document.querySelector('.basket-purchase__price');
export const bodyOfPage = document.querySelector('.body');

let productsInBasket = [];
let uniqueProductsInBasket = [];
let heightOfPage;

export function openBasket() {
  heightOfPage = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  basketIcon.addEventListener('click', () => {
    basketProducts.classList.add('basket_active');
    backgroundDark.classList.add('header__cover_active');
    bodyOfPage.classList.add('body_noscroll');
    backgroundDark.style.height = `${heightOfPage}px`;
  });
  basketCloseItem.addEventListener('click', () => {
    basketProducts.classList.remove('basket_active');
    backgroundDark.classList.remove('header__cover_active');
    bodyOfPage.classList.remove('body_noscroll');
  })
}

export function addProductToBasket() {
  const addProductBtns = document.querySelectorAll('.products-card__btn');

  addProductBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      //btn.disabled = true;

      const selectedCardId = event.currentTarget.closest('.products-card').id;
      const currentProduct = products.find(product => product.id == selectedCardId);
      uniqueProductsInBasket.push(currentProduct);
      productsInBasket.push(currentProduct)
      amountProductsInBasket.innerHTML  = productsInBasket.length;
      uniqueProductsInBasket = [...new Set(uniqueProductsInBasket)];
      

      renderProductsInBasket(uniqueProductsInBasket);
      
    })
  })
}

function renderProductsInBasket(productsArray) {

  basketCards.innerHTML = '';
  

  for (let i = 0; i < productsArray.length; i++) {
    const basketCard = document.createElement('div');
    basketCard.classList.add('basket-card');
    basketCard.id = productsArray[i].id;
    basketCards.append(basketCard);
  
    const basketCardInfo = document.createElement('div');
    basketCardInfo.classList.add('basket-card__info');
    basketCard.append(basketCardInfo);
  
    const basketCardImg = document.createElement('img');
    basketCardImg.classList.add('basket-card__photo');
    basketCardImg.src = "https://grad-snab.ru/uploads/product/116/278x278.jpg";
    basketCardImg.alt = productsArray[i].title;
    basketCardInfo.append(basketCardImg);

    const basketCardText = document.createElement('div');
    basketCardText.classList.add('basket-card__text');
    basketCardInfo.append(basketCardText);

    const basketCardTitle = document.createElement('p');
    basketCardTitle.classList.add('basket-card__title');
    basketCardTitle.innerHTML = productsArray[i].description;
    basketCardText.append(basketCardTitle);

    const basketCardPrice = document.createElement('p');
    basketCardPrice.classList.add('basket-card__title');
    basketCardPrice.innerHTML = productsArray[i].price;
    basketCardText.append(basketCardPrice);

    const basketCardSetting = document.createElement('div');
    basketCardSetting.classList.add('basket-card__setting');
    basketCard.append(basketCardSetting);

    const btnRemove = document.createElement('button');
    btnRemove.classList.add('basket-card__btn');
    btnRemove.classList.add('basket-card__btn_remove');
    btnRemove.innerHTML = '-'
    basketCardSetting.append(btnRemove);

    const basketCardAmount = document.createElement('p');
    basketCardAmount.classList.add('basket-card__amount');
    basketCardAmount.innerHTML = 1;
    basketCardSetting.append(basketCardAmount);

    const btnAdd = document.createElement('button');
    btnAdd.classList.add('basket-card__btn');
    btnAdd.classList.add('basket-card__btn_add');
    btnAdd.innerHTML = '+'
    basketCardSetting.append(btnAdd);

    const btnDelete = document.createElement('img');
    btnDelete.classList.add('basket-card__delete');
    btnDelete.src = "https://w7.pngwing.com/pngs/1007/1023/png-transparent-trash-cancel-delete-remove-close-cross-ink-alert-icon-thumbnail.png";
    btnDelete.alt = 'delete';
    basketCardSetting.append(btnDelete);
  }

  addRemoveDeleteProducts();
  findSum(productsInBasket);
}

export function addRemoveDeleteProducts() {
  const addBtns = document.querySelectorAll('.basket-card__btn_add');
  const removeBtns = document.querySelectorAll('.basket-card__btn_remove');
  const deleteBtns = document.querySelectorAll('.basket-card__delete');
  

  addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.closest('.basket-card').id;
      const currentProduct = products.find(product => product.id == productId);

      if (+btn.previousElementSibling.innerHTML < currentProduct.avaliable) {
        btn.previousElementSibling.innerHTML = +btn.previousElementSibling.innerHTML + 1;
        //console.log(productsInBasket)
        productsInBasket.push(currentProduct);
        findSum(productsInBasket);
      }
    })
  })

  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (+btn.nextElementSibling.innerHTML > 0) {
        btn.nextElementSibling.innerHTML = +btn.nextElementSibling.innerHTML - 1;
        const productId = btn.closest('.basket-card').id;
        //console.log('productId', productId)
        const currentProduct = products.find(product => product.id == productId);
        const indexOfProduct = productsInBasket.indexOf(currentProduct)
        //console.log(indexOfProduct);
        productsInBasket.splice(indexOfProduct, 1);
        findSum(productsInBasket);
        //console.log(productsInBasket)
      }
    })
  })

  deleteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.closest('.basket-card').id;
      const deletedProduct = btn.closest('.basket-card');

      deletedProduct.innerHTML = '';
      productsInBasket = productsInBasket.filter(product => product.id != productId);
      uniqueProductsInBasket = uniqueProductsInBasket.filter(product => product.id != productId); 
      findSum(productsInBasket); 
    })
  })
}

function findSum(allProducts) {
  sumOfProducts.innerHTML = '';
  if (allProducts.length === 0) {
    sumOfProducts.innerHTML = '0 р';
  } else {
    const sum = allProducts.reduce((total, amount) => Number(total) + Number(amount.price), 0); 
    console.log(sum)
    sumOfProducts.innerHTML = `${sum} р`;
  }
}