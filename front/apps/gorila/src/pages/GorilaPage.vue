<template>
  <LogoutButton class="btn">Cerrar sesión</LogoutButton>
  <section class="container p-6">
    <div class="rounded shadow-lg w-64 bg-white">
      <AddProductForm></AddProductForm>
    </div>
    <ProductsGrid :enableDelete="true"></ProductsGrid>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductsGrid from '../components/ProductsGrid.vue';
import AddProductForm from '../components/AddProductForm.vue';
import LogoutButton from '../components/LogoutButton.vue';

export default {
  components: { ProductsGrid, AddProductForm, LogoutButton },
  computed: {
    ...mapGetters(['user']),
  },
};
</script>
