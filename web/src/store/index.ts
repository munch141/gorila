import { createStore } from 'vuex';
import { State } from 'vue';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      products: [],
    } as State;
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
