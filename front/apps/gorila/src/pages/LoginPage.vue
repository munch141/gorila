<template>
  <section class="container p-6">
    <h1 class="text-3xl">Iniciar sesión (en construcción)</h1>
    <LoginForm></LoginForm>
    <router-link class="btn" to="/">Home</router-link>
  </section>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  components: { LoginForm },
};
</script>
