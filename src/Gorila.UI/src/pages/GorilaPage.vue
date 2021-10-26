<template>
  <section class="container p-6">
    <ProductsGrid :enableDelete="true"></ProductsGrid>
  </section>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';

export default {
  components: { ProductsGrid },
};
</script>
