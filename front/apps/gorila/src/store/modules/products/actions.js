import productsService from '../../../services/products';

export default {
  async initProducts(context) {
    if (!context.state.productsInitialized) {
      const products = await productsService.getAll();

      if (products) {
        products.forEach((product) => {
          context.commit('addProduct', { product });
        });
      }

      context.commit('markProductsAsInitialized');
    }
  },

  async addProduct(context, { product }) {
    const newProduct = await productsService.add(product);
    context.commit('addProduct', { product: newProduct });
  },

  async deleteProduct(context, { productId }) {
    await productsService.delete(productId);
    context.commit('removeProduct', { productId });
  },
};
