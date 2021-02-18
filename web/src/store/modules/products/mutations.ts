import { Product } from '@/models/product.model';
import { ProductsState } from './state';

export interface AddProductPayload {
  product: Product;
}

export interface RemoveProductPayload {
  productId: string;
}

export default {
  addProduct(state: ProductsState, { product }: AddProductPayload) {
    state.products.unshift(product);
  },

  removeProduct(state: ProductsState, { productId }: RemoveProductPayload) {
    const i = state.products.findIndex((product: Product) => product.id === productId);
    if (i >= 0) state.products.splice(i, 1);
  },

  markProductsAsInitialized(state: ProductsState) {
    state.productsInitialized = true;
  },
};
