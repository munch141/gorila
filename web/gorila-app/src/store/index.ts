import { createStore } from 'vuex';
import authModule from '@auth/store';
import productsModule from '@products/store';

const store = createStore({
  modules: {
    auth: authModule,
    products: productsModule,
  },
});

export default store;
