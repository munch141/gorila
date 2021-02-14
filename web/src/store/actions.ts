import { State } from 'vue';
import { ActionContext } from 'vuex';
import { Product } from '@/models/product.model';
import productsService from '@/services/products.service';
import { IAddProductPayload, IIsAuthenticatedPayload } from './mutations';

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
      products.forEach((product: Product) => {
        context.commit('addProduct', { product } as IAddProductPayload);
      });
    }
  },
};
