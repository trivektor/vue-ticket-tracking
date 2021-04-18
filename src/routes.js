import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Projects from './components/Projects.vue';
import NewProject from './components/NewProject.vue';
import EditProject from './components/EditProject.vue';

const routes = [
  {path: '/', name: 'Root', component: Projects, requiresAuth: true},
  {path: '/projects', name: 'Projects', component: Projects, requiresAuth: true},
  {path: '/projects/new', name: 'New Project', component: NewProject, requiresAuth: true},
  {path: '/project/:id', name: 'Edit Project', component: EditProject, requiresAuth: true},
  {path: '/register', name: 'Register', component: Register},
  {path: '/login', name: 'Login', component: Login},
];

export default routes;