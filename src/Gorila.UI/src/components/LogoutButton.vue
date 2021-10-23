<template>
  <button class="btn" @click="logoutAndRedirect">Cerrar sesión</button>
</template>

<script>
export default {
  methods: {
    async logoutAndRedirect() {
      // eslint-disable-next-line
      console.log('log out');
    },
  },
};
</script>
