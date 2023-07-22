import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  priceInput.addEventListener('input', function () {
    const value = priceInput.value;
    priceValue.textContent = `Value: $${value}`;
    
    // Filter products based on the selected price range
    const newStore = store.filter((product) => product.price <= value);
    display(newStore, getElement(".products-container"), true);
    
    if (newStore.length < 1) {
      const productsContainer = getElement(".products-container");
      productsContainer.innerHTML = `<h3>Sorry, no products matched your search.</h3>`;
    }
  });
};

export default setupPrice;