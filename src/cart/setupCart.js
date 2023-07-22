// import
import {
  getStorageItem,
  setStorageItem,
  getElement,
} from '../utils.js';
import { findProduct } from '../store.js';

import { openCart, closeCart } from './toggleCart.js';
import addToCartDOM from './addToCartDOM.js';

//set variables
const cartItemCountDOM = getElement('.cart-items-count');
const cartItemsDOM = getElement('.cart-content');
const cartTotalDOM = getElement('.cart-total');
const clearCartBtn = getElement('.clear-cart');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);

  if (!item) {
    let product = findProduct(id);
    // add item to the the
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the DOM;
    addToCartDOM(product);
  } else {
    // update values
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll('.item-amount')];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  // add one to the item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();
  // set cart in local storage

  setStorageItem('cart', cart);
  //more stuff coming up
  openCart();
};

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent = `${parseFloat(total.toFixed(2)) }`;
}

function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}

function removeItem(id) {
  cart = cart.filter((cartItem) => cartItem.id !== id);
}

function increaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function setupCartFunctionality() {
  clearCartBtn.addEventListener("click", () => {
      clearCart();
    });
    
  cartItemsDOM.addEventListener('click', function (e) {
    const element = e.target;
    //const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    //const parentID = e.target.parentElement.dataset.id;
    
    // remove
    if (element.classList.contains('remove-item')) {
      removeItem(id);
      // parent.parentElement.remove();
      element.parentElement.parentElement.remove();
    }
    // increase
    if (element.classList.contains('cart-item-increase-btn')) {
      const newAmount = increaseAmount(id);
      element.nextElementSibling.textContent = newAmount;
    }
    // decrease
    if (element.classList.contains('cart-item-decrease-btn')) {
      const newAmount = decreaseAmount(id);
      if (newAmount === 0) {
        removeItem(id);
        element.parentElement.parentElement.remove();
      } else {
        element.previousElementSibling.textContent = newAmount;
      }
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);
  });
  
  function clearCart() {
    cart = [];
    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);
    
    while (cartItemsDOM.children.length > 0) {
      cartItemsDOM.removeChild(cartItemsDOM.children[0]);
    }
    closeCart();
  }
}

const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFunctionality();
};
init();