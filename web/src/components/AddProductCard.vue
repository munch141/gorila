<template>
  <div class="rounded shadow-lg w-64 bg-white">
    <add-product-form @product-added="addProduct"></add-product-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddProductForm from '@/components/AddProductForm.vue';

export default defineComponent({
  components: { AddProductForm },
  methods: {
    async addProduct(id: string): Promise<void> {
      this.$emit('product-added', id);
    },

    async deleteProduct(id: string) {
      this.$emit('product-deleted', id);
    },
  },
});
</script>
