import { addToCart } from './cart/setupCart.js';

const display = (products, element, filters) => {
    element.innerHTML = products.map((product) => {
      // const { title, price, id, image } = product;
      return `
        <!-- single product -->
        <article class="product">
          <div class="img-container">
            <img src=${product.image} alt="product" class="product-img" />

            <button class="bag-btn" data-id=${product.id}>
              <i class="bx bxs-cart-alt"></i>
              <p>add to cart</p>
            </button>
          </div>

          <h3>${product.title}</h3>

          <h4>$${product.price}</h4>
        </article>
      `;
    }).join("");
    
    if (filters) return;
    
    element.addEventListener('click', function (e) {
      const parent = e.target.parentElement;
      //console.log(parent);
      if (parent.classList.contains('bag-btn')) {
         addToCart(parent.dataset.id);
      }
    });
}

export default display;