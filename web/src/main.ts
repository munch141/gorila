import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './registerServiceWorker';
import './main.css';
import HomePage from '@/components/HomePage.vue';
import GorilaPage from '@/components/gorila/GorilaPage.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/gorila', component: GorilaPage },
  ],
});

const app = createApp(App);

app.use(router);
app.mount('#app');
