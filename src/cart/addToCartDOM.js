import { getElement } from '../utils.js';

const cartItemsDOM = getElement('.cart-content');

const addToCartDOM = (item) => {
  const div = document.createElement('div');
  div.classList.add('cart-item');
  div.setAttribute('data-id', `${item.id}`);
  div.innerHTML = `
            <img src=${item.image} alt="product" />

            <div>
              <h4>${item.title}</h4>
              <h5>$${item.price}</h5>
              <span class="remove-item" data-id=${item.id}>remove</span>
            </div>

            <div>
              <i class="bx bx-chevron-up cart-item-increase-btn" data-id=${item.id}></i>
              <p class="item-amount" data-id=${item.id}>${item.amount}</p>
              <i class="bx bx-chevron-down cart-item-decrease-btn" data-id=${item.id}></i>
            </div>
  `;
  cartItemsDOM.appendChild(div);
};

export default addToCartDOM;