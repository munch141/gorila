<template>
  <section class="bg-red-300 h-full p-6">
    <div class="container">
      <products-grid></products-grid>
    </div>
  </section>
</template>

<script>
import ProductsGrid from './components/ProductsGrid.vue';

export default {
  components: { ProductsGrid },
  name: 'App',
};
</script>
