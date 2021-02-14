<template>
  <div class="products-grid">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      :enableDelete="enableDelete"
    ></product-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  components: { ProductCard },
  props: {
    enableDelete: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(['products']),
  },
});
</script>

<style scoped>
.products-grid {
  @apply grid
    gap-y-10
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5;
}
</style>
