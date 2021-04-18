export default {
  addProduct(state, { product }) {
    state.products.unshift(product);
  },

  removeProduct(state, { productId }) {
    const i = state.products.findIndex((product) => product.id === productId);
    if (i >= 0) state.products.splice(i, 1);
  },

  markProductsAsInitialized(state) {
    state.productsInitialized = true;
  },
};
