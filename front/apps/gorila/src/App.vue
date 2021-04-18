<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'App',
  computed: {
    ...mapGetters(['user']),
  },
  watch: {
    user(currentValue) {
      if (!currentValue) this.$router.replace('/login');
    },
  },
});
</script>
