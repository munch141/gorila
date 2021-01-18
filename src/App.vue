<template>
  <section class="container p-6">
    <products-grid></products-grid>
  </section>
</template>

<script>
import ProductsGrid from './components/ProductsGrid.vue';

export default {
  components: { ProductsGrid },
  name: 'App',
};
</script>
