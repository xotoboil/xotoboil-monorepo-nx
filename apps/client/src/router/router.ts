import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Home } from '../views';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about').then((m) => m.About),
  },
];
export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
