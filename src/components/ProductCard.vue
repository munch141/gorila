<template>
  <div class="rounded shadow-lg w-64 p-4 bg-white">
    <img :src="product.img" alt="" />
    <h3 class="text-xl font-bold">{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <b>${{ product.price }}</b>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: 'Producto',
        price: 3.99,
        img: 'rout/to/img.png',
        description: 'Aquí va la descripción del producto, puede ser medio larga.',
      },
    };
  },
};
</script>
