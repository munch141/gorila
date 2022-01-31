import { createRouter, createWebHistory } from 'vue-router';
import GorilaPage from '../pages/GorilaPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import ProductsPage from '../pages/ProductsPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: GorilaPage },
    { path: '/login', component: LoginPage },
    { path: '/inventory', component: ProductsPage },
  ],
});

// router.beforeEach((to, _, next) => {
//   if (to.meta.requiresAuth) {
//     next('/login');
//   } else if (to.path === '/login') {
//     next('/');
//   } else {
//     next();
//   }
// });

export default router;
