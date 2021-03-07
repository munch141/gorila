<template>
  <div v-if="isLoading" class="w-full h-full absolute top-0 left-0">
    <div class="flex w-full h-full items-center justify-center">Cargando...</div>
  </div>
  <div v-else class="products-grid">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :enableDelete="enableDelete"
    ></ProductCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import ProductCard from './ProductCard.vue';

export default defineComponent({
  components: { ProductCard },
  props: {
    enableDelete: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  async mounted() {
    const timer = setTimeout(() => {
      this.isLoading = true;
    }, 200);

    await this.initProducts();

    this.isLoading = false;
    clearTimeout(timer);
  },
  methods: {
    ...mapActions(['initProducts']),
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
