<template>
  <div v-if="isLoading" class="w-full h-full absolute top-0 left-0">
    <div class="flex w-full h-full items-center justify-center">Cargando...</div>
  </div>
  <div v-else class="products-grid">
    <div class="rounded shadow-lg w-64 bg-white">
      <add-product-form @product-added="addProduct"></add-product-form>
    </div>

    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      @product-deleted="deleteProduct"
    ></product-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '@/models/product.model';
import ProductCard from './ProductCard.vue';
import productsService from '../services/products.service';
import AddProductForm from './AddProductForm.vue';

export default defineComponent({
  components: { ProductCard, AddProductForm },
  async mounted() {
    const products = await productsService.getAll();
    this.products = products || [];
    this.isLoading = false;
  },
  data() {
    return {
      products: [] as Product[],
      isLoading: true,
    };
  },
  methods: {
    async addProduct(id: string): Promise<void> {
      const product = await productsService.get(id);

      if (product) this.products.push(product);
    },

    async deleteProduct(id: string) {
      await productsService.delete(id).then(() => {
        const i = this.products.findIndex((product) => product.id === id);
        if (i >= 0) this.products.splice(i, 1);
      });
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
