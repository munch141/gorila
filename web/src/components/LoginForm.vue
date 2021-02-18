<template>
  <form class="p-4" @submit.prevent="submitForm">
    <div>
      <label for="description">Contraseña</label>
      <input type="password" id="password" v-model="password" />
    </div>

    <button class="btn btn-primary" type="submit">
      Entrar
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  data() {
    return { password: String };
  },
  methods: {
    ...mapActions(['login']),
    async submitForm() {
      await this.login();
      this.$router.replace('/gorila');
    },
  },
});
</script>
