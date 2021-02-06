<template>
  <div class="rounded shadow-lg w-64 bg-white">
    <img
      class="object-cover w-full rounded-t"
      src="../assets/dummy.png"
      :alt="product.name"
      :title="product.name"
    />
    <div class="p-4">
      <h3 class="text-xl font-bold">{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <b>${{ product.price }}</b>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    product: {
      required: true,
    },
  },
});
</script>
