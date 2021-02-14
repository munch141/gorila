import { Product } from '@/models/product.model';
import { State } from 'vue';

export interface IIsAuthenticatedPayload {
  isAuthenticated: boolean;
}

export interface IAddProductPayload {
  product: Product;
}

export interface IRemoveProductPayload {
  productId: string;
}

export default {
  setAuth(state: State, payload: IIsAuthenticatedPayload) {
    state.isAuthenticated = payload.isAuthenticated;
  },
  addProduct(state: State, payload: IAddProductPayload) {
    state.products.push(payload.product);
  },
  removeProduct(state: State, payload: IRemoveProductPayload) {
    const i = state.products.findIndex((product: Product) => product.id === payload.productId);
    if (i >= 0) state.products.splice(i, 1);
  },
};
