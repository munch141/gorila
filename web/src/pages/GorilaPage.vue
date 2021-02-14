<template>
  <router-link to="/">home</router-link>
  <section class="container p-6">
    <!-- <add-product-card
      @product-added="addProduct"
      @product-deleted="deleteProduct"
    ></add-product-card> -->

    <products-grid
      :enableDelete="false"
      :products="products"
      :isLoading="isLoading"
    ></products-grid>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { Product } from '@/models/product.model';
import ProductsGrid from '@/components/ProductsGrid.vue';
// import AddProductCard from '@/components/AddProductCard.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  components: { ProductsGrid },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['products']),
  },
  methods: {
    // async addProduct(id: string): Promise<void> {
    //   const product = await productsService.get(id);
    //   if (product) this.products.unshift(product);
    // },
    // async deleteProduct(id: string) {
    //   await productsService.delete(id).then(() => {
    //     const i = this.products.findIndex((product: Product) => product.id === id);
    //     if (i >= 0) this.products.splice(i, 1);
    //   });
    // },
  },
});
</script>
