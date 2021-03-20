<template>
  <button class="btn" @click="logoutAndRedirect">Cerrar sesión</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['logout']),
    async logoutAndRedirect() {
      await this.logout();
      this.$router.replace('/login');
    },
  },
};
</script>
