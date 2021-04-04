import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Signup from './components/Signup.vue'

const routes = [
  { path: '/signup', name: 'Signup', component: Signup },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
