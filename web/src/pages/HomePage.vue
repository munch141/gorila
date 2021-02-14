<template>
  <router-link to="/gorila">gorila</router-link>
  <section class="container p-6">
    <products-grid :products="products"></products-grid>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductsGrid from '@/components/ProductsGrid.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  components: { ProductsGrid },
  computed: {
    ...mapGetters(['products']),
  },
});
</script>
