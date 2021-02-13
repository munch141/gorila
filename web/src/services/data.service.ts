import { Product } from '@/models/product.model';
import { productsCollection } from '../firebase';

export default {
  async getProducts(): Promise<Product[] | undefined> {
    const querySnapshot = await productsCollection.get().catch((e) => {
      console.error(e);

      return undefined;
    });

    return querySnapshot?.docs.map((doc) => doc.data());
  },

  async getProduct(id: string): Promise<Product | undefined> {
    const product = await productsCollection.doc(id).get();

    return product.data();
  },

  async addProduct(product: Product): Promise<string> {
    const productRef = await productsCollection.add(product);

    return productRef.id;
  },
};
