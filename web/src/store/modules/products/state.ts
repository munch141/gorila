import { Product } from '@/models/product.model';
import { State } from 'vue';

export interface ProductsState extends State {
  products: Product[];
}

export default {
  products: [],
} as ProductsState;
