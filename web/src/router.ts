import HomePage from '@/pages/HomePage.vue';
import GorilaPage from '@/pages/GorilaPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/gorila', component: GorilaPage, meta: { requiresAuth: true } },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
