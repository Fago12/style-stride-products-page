import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCategories = (store) => {
  let categories = ['all', ...new Set(store.map((product) => product.category))];
  
  // Sort categories alphabetically
  categories.sort((a, b) => a.localeCompare(b));
  
  const categoriesDOM = getElement('.categories');
  categoriesDOM.innerHTML = categories
    .map((category) => {
      return ` <button class="category-btn">${category}</button>`;
    })
    .join('');
  categoriesDOM.addEventListener('click', function (e) {
    const element = e.target;
    if (element.classList.contains('category-btn')) {
      let newStore = [];
      if (element.textContent === 'all') {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.category === e.target.textContent
        );
      }

      display(newStore, getElement('.products-container'), true);
    }
  });
};

export default setupCategories;