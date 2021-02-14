<template>
  <div class="products-grid">
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
import { IProduct } from '@/models/product.model';
import ProductCard from '@/components/ProductCard.vue';

export default defineComponent({
  components: { ProductCard },
  props: {
    products: {
      type: Array as PropType<Array<IProduct> | undefined>,
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
