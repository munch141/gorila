<template>
  <router-link to="/">home</router-link>
  <section class="container p-6">
    <div class="rounded shadow-lg w-64 bg-white">
      <add-product-form></add-product-form>
    </div>
    <products-grid :enableDelete="true"></products-grid>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductsGrid from '@/components/ProductsGrid.vue';
import AddProductForm from '@/components/AddProductForm.vue';

export default defineComponent({
  components: { ProductsGrid, AddProductForm },
});
</script>
