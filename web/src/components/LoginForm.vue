<template>
  <form class="p-4" @submit.prevent="submitForm">
    <div>
      <label for="description">Contraseña</label>
      <input type="password" required id="password" v-model="password" />
    </div>

    <button class="btn btn-primary" type="submit">
      Iniciar sesión
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  data() {
    return { password: '' };
  },
  methods: {
    ...mapActions(['login']),
    async submitForm() {
      console.log('password: ', this.password);

      await this.login();
      this.$router.replace('/gorila');
    },
  },
});
</script>
