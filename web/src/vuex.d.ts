import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { Product } from '@/models/product.model';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    isAuthenticated: boolean;
    products: Product[];
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
