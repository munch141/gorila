import { IProduct } from '@/models/product.model';
import { productsCollection } from '../firebase';

export default {
  async getAll(): Promise<IProduct[] | undefined> {
    const querySnapshot = await productsCollection.get().catch((e) => {
      console.error(e);

      return undefined;
    });

    return querySnapshot?.docs.map((doc) => doc.data());
  },

  async get(id: string): Promise<IProduct | undefined> {
    return productsCollection
      .doc(id)
      .get()
      .then((product) => product.data());
  },

  async add(product: IProduct): Promise<IProduct> {
    return productsCollection
      .add(product)
      .then((productRef) => ({ ...product, id: productRef.id } as IProduct));
  },

  async delete(id: string): Promise<void> {
    await productsCollection.doc(id).delete();
  },
};
