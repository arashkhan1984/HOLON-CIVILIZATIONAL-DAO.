import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Phase from '../views/Phase.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/phase/:id', name: 'Phase', component: Phase },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
