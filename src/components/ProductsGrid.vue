<template>
  <div class="products-grid">
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  components: { ProductCard },
};
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
