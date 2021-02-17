import { createStore } from 'vuex';
import authModule from './modules/auth';
import productsModule from './modules/products';

const store = createStore({
  modules: {
    auth: authModule,
    products: productsModule,
  },
});

export default store;
