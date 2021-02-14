import { State } from 'vue';

export default {
  isAuthenticated(state: State) {
    return state.isAuthenticated;
  },
  products(state: State) {
    return state.products;
  },
};
