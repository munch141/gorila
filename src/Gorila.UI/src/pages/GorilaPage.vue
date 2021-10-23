<template>
  <LogoutButton class="btn">Cerrar sesión</LogoutButton>
  <section class="container p-6">
    <ProductsGrid :enableDelete="true"></ProductsGrid>
  </section>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';
import LogoutButton from '../components/LogoutButton.vue';

export default {
  components: { ProductsGrid, LogoutButton },
};
</script>
