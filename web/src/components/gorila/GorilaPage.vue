<template>
  <section class="container p-6">
    <add-product-card
      @product-added="addProduct"
      @product-deleted="deleteProduct"
    ></add-product-card>

    <products-grid
      :enableDelete="true"
      :products="products"
      :isLoading="isLoading"
      @product-deleted="deleteProduct"
    ></products-grid>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '@/models/product.model';
import productsService from '@/services/products.service';
import ProductsGrid from '@/components/ProductsGrid.vue';
import AddProductCard from './AddProductCard.vue';

export default defineComponent({
  components: { ProductsGrid, AddProductCard },
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
