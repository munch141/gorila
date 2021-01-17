import { createApp } from 'vue';
import './registerServiceWorker';
import './main.css';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');
