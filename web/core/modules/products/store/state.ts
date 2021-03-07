import { State } from 'vue';
import { Product } from '../models/product';

export interface ProductsState extends State {
  products: Product[];
  productsInitialized: Boolean;
}

export default {
  products: [],
  productsInitialized: false,
} as ProductsState;
