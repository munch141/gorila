import { productsCollection } from '../firebase';

export default {
  async getAll() {
    const querySnapshot = await productsCollection.get().catch((e) => {
      console.error(e);

      return undefined;
    });

    return querySnapshot?.docs.map((doc) => doc.data());
  },

  async get(id) {
    return productsCollection
      .doc(id)
      .get()
      .then((product) => product.data());
  },

  async add(product) {
    return productsCollection
      .add(product)
      .then((productRef) => ({ ...product, id: productRef.id }));
  },

  async delete(id) {
    await productsCollection.doc(id).delete();
  },
};
