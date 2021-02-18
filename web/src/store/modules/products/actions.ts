import { State } from 'vue';
import { ActionContext } from 'vuex';
import { Product } from '@/models/product.model';
import productsService from '@/services/products.service';
import { AddProductPayload, RemoveProductPayload } from './mutations';
import { ProductsState } from './state';

export default {
  async initProducts(context: ActionContext<ProductsState, State>) {
    if (!context.state.productsInitialized) {
      const products = await productsService.getAll();

      if (products) {
        products.forEach((product: Product) => {
          context.commit('addProduct', { product } as AddProductPayload);
        });
      }

      context.commit('markProductsAsInitialized');
    }
  },

  async addProduct(context: ActionContext<ProductsState, State>, { product }: AddProductPayload) {
    const newProduct = await productsService.add(product);
    context.commit('addProduct', { product: newProduct } as AddProductPayload);
  },

  async deleteProduct(
    context: ActionContext<ProductsState, State>,
    { productId }: RemoveProductPayload,
  ) {
    await productsService.delete(productId);
    context.commit('removeProduct', { productId } as RemoveProductPayload);
  },
};
