import { createApp } from 'vue';
// import './registerServiceWorker';
import './main.css';
import App from './App.vue';
import { auth } from './firebase';
import store from './store';
import router from './router';

const app = createApp(App);
let appIsMounted = false;
const mountApp = () => {
  app.use(store).use(router);
  app.mount('#app');
  appIsMounted = true;
};

auth.onAuthStateChanged((user) => {
  store.commit('setUser', user?.toJSON());

  if (!appIsMounted) {
    mountApp();
  }
});
