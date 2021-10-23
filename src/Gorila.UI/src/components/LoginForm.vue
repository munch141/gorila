<template>
  <form class="p-4" @submit.prevent="submitForm">
    <div>
      <label for="description">Contraseña</label>
      <input type="password" required id="password" v-model="password" />
    </div>

    <button class="btn btn-primary" type="submit">Iniciar sesión</button>
  </form>
</template>

<script>
export default {
  data() {
    return { password: '' };
  },
  methods: {
    async submitForm() {
      // eslint-disable-next-line
      console.log('log in');
    },
  },
};
</script>
