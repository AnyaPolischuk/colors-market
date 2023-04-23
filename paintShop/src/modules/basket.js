import { products } from "../products";

const basketIcon = document.querySelector('.panel-icons__basket');
const basketCloseItem = document.querySelector('.basket-header__close');
const basketProducts = document.querySelector('.basket');
export const backgroundDark = document.querySelector('.header__cover');
const basketCards = document.querySelector('.basket-cards');
const amountProductsInBasket = document.querySelector('.panel-icons__amount');

let productsInBasket = [];
let uniqueProductsInBasket = [];

export function openBasket() {
  basketIcon.addEventListener('click', () => {
    basketProducts.classList.add('basket_active');
    backgroundDark.classList.add('header__cover_active');
  });
  basketCloseItem.addEventListener('click', () => {
    basketProducts.classList.remove('basket_active');
    backgroundDark.classList.remove('header__cover_active');
  })
}

export function addProductToBasket() {
  const addProductBtns = document.querySelectorAll('.products-card__btn');

  addProductBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const selectedCardId = event.currentTarget.closest('.products-card').id;
      const currentProduct = products.find(product => product.id == selectedCardId);
      uniqueProductsInBasket.push(currentProduct);
      productsInBasket.push(currentProduct)
      amountProductsInBasket.innerHTML  = productsInBasket.length;
      //добавить new Set

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

  addAndRemoveProducts()
}

function addAndRemoveProducts() {
  const addBtns = document.querySelectorAll('.basket-card__btn_add');
  const removeBtns = document.querySelectorAll('.basket-card__btn_remove');
  

  addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.closest('.basket-card').id;
      const currentProduct = products.find(product => product.id == productId);

      if (+btn.previousElementSibling.innerHTML < currentProduct.avaliable) {
        btn.previousElementSibling.innerHTML = +btn.previousElementSibling.innerHTML + 1;
        //console.log(productsInBasket)
        productsInBasket.push(currentProduct);
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
        //console.log(productsInBasket)
      }
    })
  })
}