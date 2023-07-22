//header events
import Navbar from "./src/headerEvents/Navbar.js";
import Header from "./src/headerEvents/Header.js";

const navbar = new Navbar();
const header = new Header();

navbar.addEventListeners();
header.addEventListeners();

//global imports
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';

//  filter imports
import setupSearch from './src/filters/search.js';
import setupCategories from './src/filters/categories.js';
import setupPrice from './src/filters/price.js';

//specific imports
import { store, setupStore } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

// import fetch products
import fetchProducts from './src/fetchProducts.js';

const init = async () => {
  const loading = getElement('.page-loading');
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  display(store, getElement('.products-container'));

  setupSearch(store);
  setupCategories(store);
  setupPrice(store);
  loading.style.display = 'none';
};

init();

//localStorage.clear();

// footer year
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
