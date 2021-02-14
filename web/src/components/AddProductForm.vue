<template>
  <form class="p-4" @submit.prevent="submitForm">
    <h2 class="text-lg font-bold mb-2">Nuevo producto</h2>
    <div>
      <label for="name">Nombre</label>
      <input type="text" id="name" v-model="product.name" />
    </div>
    <div>
      <label for="description">Descripción</label>
      <input type="text" id="description" v-model="product.description" />
    </div>
    <div>
      <label for="price">Precio</label>
      <input type="number" step=".01" id="price" v-model.number="product.price" />
    </div>

    <button class="px-3 py-2 mt-4 rounded font-semibold bg-green-500 text-white" type="submit">
      Agregar
    </button>
  </form>
</template>

<script lang="ts">
import { IProduct } from '@/models/product.model';
import { IAddProductPayload } from '@/store/mutations';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  data() {
    return {
      product: {} as IProduct,
    };
  },
  methods: {
    ...mapActions(['addProduct']),
    async submitForm() {
      await this.addProduct({ product: this.product } as IAddProductPayload);
      this.product = {} as IProduct;
    },
  },
});
</script>

<style scoped>
input {
  @apply px-2
    py-1
    leading-5
    border
    rounded
    focus:outline-none
    focus:ring
    focus:border-blue-400;
}

div {
  @apply flex flex-col mb-1;
}
</style>
