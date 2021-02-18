<template>
  <section class="container p-6">
    <h1 class="text-3xl">Iniciar sesión (en construcción)</h1>
    <button class="btn btn-primary" @click="submitForm">Iniciar sesión</button>
    <router-link class="btn" to="/">Home</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  methods: {
    ...mapActions(['login']),
    async submitForm() {
      await this.login();
      this.$router.replace('/gorila');
    },
  },
});
</script>
