export function renderProductCards(arrayOfCards) {
  const cardsWrapper = document.querySelector('.products-cards');
  cardsWrapper.innerHTML = '';
  // console.log(arrayOfCards[0].price)

  for (let i = 0; i < arrayOfCards.length; i++) {
    const productCard = document.createElement('div');
    productCard.classList.add('products-card');
    cardsWrapper.append(productCard);

    const productCardPhoto = document.createElement('img');
    productCardPhoto.classList.add('product-card__photo');
    // TODO: разобраться с путями картинок
    // productCardPhoto.src = arrayOfCards[i].image;
    productCardPhoto.src = "https://grad-snab.ru/uploads/product/116/278x278.jpg";
    productCardPhoto.alt = arrayOfCards[i].title;
    productCard.append(productCardPhoto);

    const productCardTitle = document.createElement('p');
    productCardTitle.classList.add('product-card__title');
    productCardTitle.innerHTML = arrayOfCards[i].description;
    productCard.append(productCardTitle);

    const productCardInfo = document.createElement('div');
    productCardInfo.classList.add('products-card__info');
    productCard.append(productCardInfo);
  
    const productCardPrice = document.createElement('p');
    productCardPrice.classList.add('products-card__price');
    productCardPrice.innerHTML = arrayOfCards[i].price;
    productCardInfo.append(productCardPrice);

    const productCardBtn = document.createElement('button');
    productCardBtn.classList.add('products-card__btn');
    productCardBtn.innerHTML = '+';
    productCardInfo.append(productCardBtn);
  }
  renderAmountOfProducts(arrayOfCards);
}

function renderAmountOfProducts(arrayOfProducts) {
  const amountOfProducts = document.querySelector('.products-sorting__amount');
  amountOfProducts.innerHTML = `${arrayOfProducts.length} товаров`;
}