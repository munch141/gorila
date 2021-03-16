<template>
  <LogoutButton class="btn">Cerrar sesión</LogoutButton>
  <section class="container p-6">
    <div class="rounded shadow-lg w-64 bg-white">
      <AddProductForm></AddProductForm>
    </div>
    <ProductsGrid :enableDelete="true"></ProductsGrid>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import ProductsGrid from '@products/components/ProductsGrid.vue';
import AddProductForm from '@products/components/AddProductForm.vue';
import LogoutButton from '@auth/components/LogoutButton.vue';

export default defineComponent({
  components: { ProductsGrid, AddProductForm, LogoutButton },
  computed: {
    ...mapGetters(['user']),
  },
});
</script>
