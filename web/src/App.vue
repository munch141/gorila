<template>
  <main>
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
    }, 150);
    await this.initProducts();
    this.isLoading = false;
    clearTimeout(timer);
  },
  methods: {
    ...mapActions(['initProducts']),
  },
});
</script>
