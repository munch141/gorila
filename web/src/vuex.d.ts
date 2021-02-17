import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { IProduct as Product } from '@/models/product.model';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {}

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
