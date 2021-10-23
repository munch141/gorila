<template>
  <div v-if="isLoading" class="w-full h-full absolute top-0 left-0">
    <div class="flex w-full h-full items-center justify-center">Cargando...</div>
  </div>
  <div v-else class="products-grid justify-items-center">
    <Card :bgColor="'bg-gray-100'">
      <AddProductForm></AddProductForm>
    </Card>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :enableDelete="enableDelete"
    ></ProductCard>
  </div>
</template>

<script>
import AddProductForm from './AddProductForm.vue';
import Card from './Card.vue';
import ProductCard from './ProductCard.vue';

export default {
  components: { AddProductForm, Card, ProductCard },
  props: {
    enableDelete: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  async mounted() {
    const timer = setTimeout(() => {
      this.isLoading = true;
    }, 200);

    clearTimeout(timer);
    this.isLoading = false;
  },
};
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
