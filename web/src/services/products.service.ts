import { Product } from '@/models/product.model';
import { productsCollection } from '../firebase';

export default {
  async getAll(): Promise<Product[] | undefined> {
    const querySnapshot = await productsCollection.get().catch((e) => {
      console.error(e);

      return undefined;
    });

    return querySnapshot?.docs.map((doc) => doc.data());
  },

  async get(id: string): Promise<Product | undefined> {
    const product = await productsCollection.doc(id).get();

    return product.data();
  },

  async add(product: Product): Promise<string> {
    const productRef = await productsCollection.add(product);

    return productRef.id;
  },

  async delete(id: string): Promise<void> {
    await productsCollection.doc(id).delete();
  },
};
