<template>
  <div v-if="isLoading" class="w-full h-full absolute top-0 left-0">
    <div class="flex w-full h-full items-center justify-center">Cargando...</div>
  </div>
  <div v-else class="products-grid">
    <div class="rounded shadow-lg w-64 bg-white">
      <add-product-form @product-added="addProduct"></add-product-form>
    </div>

    <product-card v-for="product in products" :key="product.name" :product="product"></product-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ProductCard from './ProductCard.vue';
import dataService from '../services/data.service';
import AddProductForm from './AddProductForm.vue';

export default defineComponent({
  components: { ProductCard, AddProductForm },
  async mounted() {
    this.products = await dataService.getProducts();
    this.isLoading = false;
  },
  data() {
    return {
      products: [],
      isLoading: true,
    };
  },
  methods: {
    async addProduct(id) {
      console.log('id: ', id);
      const product = await dataService.getProduct(id);
      console.log('product: ', product);
      this.products.push(product);
    },
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
