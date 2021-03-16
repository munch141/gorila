import GorilaPage from '@gorila/pages/GorilaPage.vue';
import LoginPage from '@gorila/pages/LoginPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: GorilaPage, meta: { requiresAuth: true } },
    { path: '/login', component: LoginPage },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (to.path === '/login' && store.getters.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
