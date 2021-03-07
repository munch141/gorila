<template>
  <section class="container p-6">
    <ProductsGrid></ProductsGrid>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductsGrid from '@products/components/ProductsGrid.vue';

export default defineComponent({
  components: { ProductsGrid },
});
</script>
