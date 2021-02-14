import { IProduct } from '@/models/product.model';
import { State } from 'vue';

export interface IIsAuthenticatedPayload {
  isAuthenticated: boolean;
}

export interface IAddProductPayload {
  product: IProduct;
}

export interface IRemoveProductPayload {
  productId: string;
}

export default {
  setAuth(state: State, { isAuthenticated }: IIsAuthenticatedPayload) {
    state.isAuthenticated = isAuthenticated;
  },
  addProduct(state: State, { product }: IAddProductPayload) {
    state.products.push(product);
  },
  removeProduct(state: State, { productId }: IRemoveProductPayload) {
    const i = state.products.findIndex((product: IProduct) => product.id === productId);
    if (i >= 0) state.products.splice(i, 1);
  },
};
