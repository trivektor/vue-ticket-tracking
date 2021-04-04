import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import store from './store';
import App from './App.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

const routes = [
  {path: '/register', name: 'Register', component: Register},
  {path: '/login', name: 'Login', component: Login},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');