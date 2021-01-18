import image from '../assets/dummy.png';

export default {
  getProducts() {
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
  addProduct(product) {
    return { id: -1, ...product };
  },
};
