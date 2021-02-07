import image from '../assets/dummy.png';
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

  getProductsMock() {
    return [
      {
        name: 'Producto 1',
        price: 1.99,
        imgUrls: { default: image, mobile: image },
        description: 'Aquí va la descripción del producto, puede ser medio larga.',
      },
      {
        name: 'Producto 2',
        price: 13.99,
        imgUrls: { default: image, mobile: image },
        description: 'Aquí va la descripción del producto, puede ser medio larga.',
      },
      {
        name: 'Producto 3',
        price: 4.99,
        imgUrls: { default: image, mobile: image },
        description: 'Aquí va la descripción del producto, puede ser medio larga.',
      },
      {
        name: 'Producto 4',
        price: 56.99,
        imgUrls: { default: image, mobile: image },
        description: 'Aquí va la descripción del producto, puede ser medio larga.',
      },
    ];
  },
};
