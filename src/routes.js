import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Projects from './components/Projects.vue';

const routes = [
  {path: '/', name: 'Root', component: Projects, requiresPath: true},
  {path: '/projects', name: 'Projects', component: Projects, requiresPath: true},
  {path: '/register', name: 'Register', component: Register},
  {path: '/login', name: 'Login', component: Login},
];

export default routes;