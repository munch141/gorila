import { createStore } from 'vuex';
import productsModule from '@products/store';

const store = createStore({
  modules: {
    products: productsModule,
  },
});

export default store;
