<template>
  <div v-if="isLoading" class="w-full h-full absolute top-0 left-0">
    <div class="flex w-full h-full items-center justify-center">Cargando...</div>
  </div>
  <div v-else class="products-grid">
    <product-card v-for="product in products" :key="product.name" :product="product"></product-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ProductCard from './ProductCard.vue';
import api from '../services/apiService';

export default defineComponent({
  components: { ProductCard },
  async mounted() {
    this.products = await api.getProducts();
    this.isLoading = false;
  },
  data() {
    return {
      products: [],
      isLoading: true,
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
