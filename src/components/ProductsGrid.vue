<template>
  <div class="products-grid">
    <product-card v-for="product in products" :key="product.name" :product="product"></product-card>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          name: 'Producto 1',
          price: 1.99,
          img: 'rout/to/img.png',
          description: 'Aquí va la descripción del producto, puede ser medio larga.',
        },
        {
          name: 'Producto 2',
          price: 13.99,
          img: 'rout/to/img.png',
          description: 'Aquí va la descripción del producto, puede ser medio larga.',
        },
        {
          name: 'Producto 3',
          price: 4.99,
          img: 'rout/to/img.png',
          description: 'Aquí va la descripción del producto, puede ser medio larga.',
        },
        {
          name: 'Producto 4',
          price: 56.99,
          img: 'rout/to/img.png',
          description: 'Aquí va la descripción del producto, puede ser medio larga.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.products-grid {
  @apply grid
    gap-y-10
    justify-items-center
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5;
}
</style>
