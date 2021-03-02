<template>
  <section class="container p-6">
    <h1 class="text-3xl">Iniciar sesión (en construcción)</h1>
    <LoginForm></LoginForm>
    <router-link class="btn" to="/">Home</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/LoginForm.vue';

export default defineComponent({
  components: { LoginForm },
});
</script>
