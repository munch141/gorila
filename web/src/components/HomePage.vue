<template>
  <section class="container p-6">
    <products-grid :products="products" :isLoading="isLoading"></products-grid>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '@/models/product.model';
import productsService from '@/services/products.service';
import ProductsGrid from '@/components/ProductsGrid.vue';

export default defineComponent({
  components: { ProductsGrid },
  async mounted() {
    const products = await productsService.getAll();
    this.products = products || [];
    this.isLoading = false;
  },
  data() {
    return {
      products: [] as Product[],
      isLoading: true,
    };
  },
  methods: {
    async addProduct(id: string): Promise<void> {
      const product = await productsService.get(id);

      if (product) this.products.unshift(product);
    },

    async deleteProduct(id: string) {
      await productsService.delete(id).then(() => {
        const i = this.products.findIndex((product) => product.id === id);
        if (i >= 0) this.products.splice(i, 1);
      });
    },
  },
});
</script>
