import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem('store');

const setupStore = (products) => {
  store = products.map((item) => {
    const {title, category, price} = item.fields;
    const {id} = item.sys;
    const image = `https:${item.fields.image.fields.file.url}`;
    return { title, category, price, id, image };
    });
  setStorageItem('store', store);
};

const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};

export { store, setupStore, findProduct };