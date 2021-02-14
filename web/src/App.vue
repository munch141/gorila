<template>
  <main>
    <div v-if="isLoading" class="w-full h-full absolute top-0 left-0">
      <div class="flex w-full h-full items-center justify-center">Cargando...</div>
    </div>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'App',
  data() {
    return {
      isLoading: false,
    };
  },
  async mounted() {
    const timer = setTimeout(() => {
      this.isLoading = true;
    }, 200);
    await this.initProducts();
    this.isLoading = false;
    clearTimeout(timer);
  },
  methods: {
    ...mapActions(['initProducts']),
  },
});
</script>
