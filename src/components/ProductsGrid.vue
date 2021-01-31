<template>
  <div class="products-grid">
    <product-card v-for="product in products" :key="product.name" :product="product"></product-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ProductCard from './ProductCard.vue';
import api from '../services/apiService';

export default defineComponent({
  components: { ProductCard },
  mounted() {
    this.products = api.getProducts();
  },
  data() {
    return {
      products: [],
    };
  },
});
</script>

<style scoped>
.products-grid {
  @apply grid
    gap-y-10
    justify-items-center
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5;
}
</style>
