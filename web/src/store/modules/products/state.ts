import { Product } from '@/models/product.model';
import { State } from 'vue';

export interface ProductsState extends State {
  products: Product[];
  productsInitialized: Boolean;
}

export default {
  products: [],
  productsInitialized: false,
} as ProductsState;
