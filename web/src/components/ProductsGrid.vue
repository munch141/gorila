<template>
  <div v-if="isLoading" class="w-full h-full absolute top-0 left-0">
    <div class="flex w-full h-full items-center justify-center">Cargando...</div>
  </div>
  <div v-else class="products-grid">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      :enableDelete="enableDelete"
      @product-deleted="deleteProduct"
    ></product-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '@/models/product.model';
import ProductCard from '@/components/ProductCard.vue';

export default defineComponent({
  components: { ProductCard },
  props: {
    products: {
      type: Array as PropType<Array<Product> | undefined>,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: true,
      required: true,
    },
    enableDelete: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    deleteProduct(id: string) {
      this.$emit('product-deleted', id);
    },
  },
});
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
