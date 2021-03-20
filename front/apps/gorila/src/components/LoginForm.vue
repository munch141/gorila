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
import { mapActions } from 'vuex';

export default {
  data() {
    return { password: '' };
  },
  methods: {
    ...mapActions(['login']),
    async submitForm() {
      if (await this.login(this.password)) this.$router.replace('/');
    },
  },
};
</script>
