import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import store from './store';
import routes from './routes';
import App from './App.vue';
import './assets/tailwind.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn;

  if (to.matched.some((entry) => entry.requiresAuth)) {
    if (isLoggedIn) {
      store.dispatch('getCurrentUser');
      next();
    } else {
      store.dispatch('logout');

      next({path: '/login'});
    }
  } else {
    store.dispatch('getCurrentUser');
    next();
  }
});

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
