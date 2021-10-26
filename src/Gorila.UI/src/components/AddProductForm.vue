<template>
  <form class="h-full p-4 flex flex-col" @submit.prevent="submitForm">
    <div>
      <input
        type="text"
        id="name"
        class="text-lg font-bold"
        placeholder="Nombre"
        v-model="product.name"
      />
    </div>
    <div>
      <textarea
        type="text"
        id="description"
        placeholder="Descripción"
        v-model="product.description"
      />
    </div>
    <div>
      <input
        type="number"
        step=".01"
        id="price"
        placeholder="Precio"
        v-model.number="product.price"
      />
    </div>

    <button class="btn btn-primary mt-auto" type="submit">Agregar</button>
  </form>
</template>

<script>
import apiClient from '../services/apiClient';

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    async submitForm() {
      await apiClient.addAsync(this.product);

      this.product = {};

      this.$emit('product-added');
    },
  },
};
</script>

<style scoped>
div {
  @apply flex flex-col mb-1;
}

input {
  @apply py-0 border-none bg-gray-100 placeholder-black focus:bg-white;
}

textarea {
  @apply placeholder-black
    cursor-pointer
    resize-none
    bg-gray-200
    hover:bg-gray-300
    focus:bg-white
    cursor-pointer
    focus:cursor-text;
}
</style>
