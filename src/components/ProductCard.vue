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
  props: {
    product: {
      required: true,
    },
  },
};
</script>
