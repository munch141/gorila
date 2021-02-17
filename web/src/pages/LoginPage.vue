<template>
  <section class="container p-6">
    <h1 class="text-3xl">Login (en construcción)</h1>
    <button @click="login">login</button>
    <router-link to="/">home</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  methods: {
    ...mapActions(['login']),
  },
});
</script>
