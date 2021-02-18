<template>
  <button class="btn">
    <router-link to="/gorila">Gorila</router-link>
  </button>
  <section class="container p-6">
    <ProductsGrid></ProductsGrid>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductsGrid from '@/components/ProductsGrid.vue';

export default defineComponent({
  components: { ProductsGrid },
});
</script>
