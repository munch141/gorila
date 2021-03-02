<template>
  <h1>{{ currentUser }}</h1>
  <button class="btn">
    <router-link class="btn" to="/">Home</router-link>
  </button>
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
import ProductsGrid from '@/components/ProductsGrid.vue';
import AddProductForm from '@/components/AddProductForm.vue';
import LogoutButton from '@/components/LogoutButton.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  components: { ProductsGrid, AddProductForm, LogoutButton },
  computed: {
    ...mapGetters(['currentUser']),
  },
});
</script>
