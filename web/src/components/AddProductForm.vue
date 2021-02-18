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

    <button class="btn btn-primary" type="submit">Agregar</button>
  </form>
</template>

<script lang="ts">
import { Product } from '@/models/product.model';
import { AddProductPayload } from '@/store/modules/products/mutations';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  data() {
    return {
      product: {} as Product,
    };
  },
  methods: {
    ...mapActions(['addProduct']),
    async submitForm() {
      await this.addProduct({ product: this.product } as AddProductPayload);
      this.product = {} as Product;
    },
  },
});
</script>

<style scoped>
div {
  @apply flex flex-col mb-1;
}
</style>
