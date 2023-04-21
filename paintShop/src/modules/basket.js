const basketIcon = document.querySelector('.panel-icons__basket');
const basketCloseItem = document.querySelector('.basket-header__close');
const basketProducts = document.querySelector('.basket');
export const backgroundDark = document.querySelector('.header__cover');

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
