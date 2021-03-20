import { createApp } from 'vue';
// import './registerServiceWorker';
import './main.css';
import App from './App.vue';
import store from './store';
import router from './router';

const app = createApp(App);

app.use(store).use(router);

store.dispatch('tryLogin').then(() => app.mount('#app'));
