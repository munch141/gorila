<template>
  <Card>
    <button
      v-if="enableDelete"
      class="
        rounded-full
        h-8
        w-8
        font-bold
        bg-white
        shadow-md
        absolute
        top-2
        right-2
        group-hover:opacity-100
        items-center
        justify-center
        focus:outline-none
        opacity-0
        "
      @click="deleteProduct({ productId: product.id })"
    >
      &#10005;
    </button>
    <!-- <img
      class="object-cover w-full rounded-t"
      src="../../../assets/dummy.png"
      :alt="product.name"
      :title="product.name"
    /> -->
    <div class="p-4 flex-grow flex flex-col">
      <h3 class="text-xl font-bold cursor-default">{{ product.name }}</h3>
      <p class="cursor-default">{{ product.description }}</p>
      <b class="mt-auto cursor-default">${{ product.price }}</b>
    </div>
  </Card>
</template>

<script>
import Card from './Card.vue';

export default {
  components: { Card },
  props: {
    product: {
      type: Object,
      required: true,
    },
    enableDelete: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
