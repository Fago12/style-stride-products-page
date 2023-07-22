import { client } from './utils.js';

const fetchProducts = async () => {
  try {
    const response = await client.getEntries({
      content_type: "styleStride"
    });
    
    //const response = await fetch("products.json");
    
    if (response.items) {
      const data = response.items;
      return data.reverse();
    } else {
        console.log("Error:", response.status);
        return [];
      }
  } catch (error) {
      console.log("Error:", error);
      return [];
    }
}

export default fetchProducts;