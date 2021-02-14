import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { IProduct } from '@/models/product.model';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    isAuthenticated: boolean;
    products: IProduct[];
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
