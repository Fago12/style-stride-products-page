import { getElement } from '../utils.js';
import display from '../displayProducts.js';

 const setupSearch = (store) => {
    const form = getElement('.input-form');
    const searchInput = getElement('.search-input');
    
    form.addEventListener("keyup", () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      
      const newStore = store.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm);
      });
      
      if (newStore.length > 0) {
        display(newStore, getElement('.products-container'), true);
      } else {
        const productsContainer = getElement('.products-container');
        productsContainer.innerHTML = `<h3 class="filter-error">
       Sorry, no products matched your search.
       </h3>`;
      }
    });
 };
 
 export default setupSearch;