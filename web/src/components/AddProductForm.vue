<template>
  <form class="p-4">
    <h2 class="text-lg font-bold mb-2">Nuevo producto</h2>
    <div>
      <label for="name">Nombre</label>
      <input type="text" id="name" />
    </div>
    <div>
      <label for="description">Descripción</label>
      <input type="text" id="description" />
    </div>
    <div>
      <label for="price">Precio</label>
      <input type="number" id="price" />
    </div>

    <button class="px-3 py-2 mt-2 rounded font-semibold bg-green-500 text-white" type="submit">
      Agregar
    </button>
  </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({});
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
