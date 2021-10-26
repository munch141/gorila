<template>
  <div v-if="isLoading" class="w-full h-full absolute top-0 left-0">
    <div class="flex w-full h-full items-center justify-center">Cargando...</div>
  </div>
  <div v-else class="products-grid justify-items-center">
    <BaseCard :bgColor="'bg-gray-100'">
      <AddProductForm @product-added="refreshList"></AddProductForm>
    </BaseCard>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :enableDelete="enableDelete"
      @product-deleted="deleteProduct"
    ></ProductCard>
  </div>
</template>

<script>
import AddProductForm from './AddProductForm.vue';
import BaseCard from './BaseCard.vue';
import ProductCard from './ProductCard.vue';

import apiClient from '../services/apiClient';

export default {
  components: { AddProductForm, BaseCard, ProductCard },
  props: {
    enableDelete: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  async mounted() {
    const timer = setTimeout(() => {
      this.isLoading = true;
    }, 500);

    this.products = await apiClient.getAll();

    clearTimeout(timer);
    this.isLoading = false;
  },
  methods: {
    async deleteProduct(productId) {
      await apiClient.delete(productId);

      await this.refreshList();
    },

    async refreshList() {
      this.products = await apiClient.getAll();
    },
  },
};
</script>

<style scoped>
.products-grid {
  @apply grid
    gap-y-10
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5;
}
</style>
