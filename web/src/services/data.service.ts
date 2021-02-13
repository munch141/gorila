import { Product } from '@/models/product.model';
import { productsCollection } from '../firebase';

export default {
  async getProducts() {
    const querySnapshot = await productsCollection.get().catch((e) => {
      console.error(e);
      return null;
    });
    const result = querySnapshot?.docs.map((doc) => doc.data());

    return result;
  },

  async addProduct(product: Product) {
    const result = await productsCollection.add(product);
    console.log('added product: ', result);
  },
};
