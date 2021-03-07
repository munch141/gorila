<template>
  <button class="btn" @click="logoutAndRedirect">Cerrar sesión</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  methods: {
    ...mapActions(['logout']),
    async logoutAndRedirect() {
      await this.logout();
      this.$router.replace('/login');
    },
  },
});
</script>
