import { createRouter, createWebHistory } from 'vue-router';
import GorilaPage from '../pages/GorilaPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import store from '../store';

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
