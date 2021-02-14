import { State } from 'vue';
import { ActionContext } from 'vuex';
import { IProduct } from '@/models/product.model';
import productsService from '@/services/products.service';
import { IAddProductPayload, IIsAuthenticatedPayload, IRemoveProductPayload } from './mutations';

export default {
  login(context: ActionContext<State, State>) {
    context.commit('setAuth', { isAuthenticated: true } as IIsAuthenticatedPayload);
  },
  logout(context: ActionContext<State, State>) {
    context.commit('setAuth', { isAuthenticated: false } as IIsAuthenticatedPayload);
  },
  async initProducts(context: ActionContext<State, State>) {
    const products = await productsService.getAll();

    if (products) {
      products.forEach((product: IProduct) => {
        context.commit('addProduct', { product } as IAddProductPayload);
      });
    }
  },
  async addProduct(context: ActionContext<State, State>, { product }: IAddProductPayload) {
    const newProduct = await productsService.add(product);
    console.log('new prod: ', newProduct);
    context.commit('addProduct', { product: newProduct } as IAddProductPayload);
  },
  async deleteProduct(context: ActionContext<State, State>, { productId }: IRemoveProductPayload) {
    await productsService.delete(productId);
    context.commit('addProduct', { productId } as IRemoveProductPayload);
  },
};
