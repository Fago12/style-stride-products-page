import { getElement } from '../utils.js';

const cartOverlay = getElement('.cart-overlay');
const closeCartBtn = getElement('.close-cart');
const toggleCartBtn = getElement('.cart-btn');

toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});
closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});

const openCart = () => {
  cartOverlay.classList.add('show');
};

const closeCart = () => {
  cartOverlay.classList.remove('show');
}

export { openCart, closeCart }