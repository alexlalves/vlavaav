import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/palette',
    redirect: { name: 'Home' },
  },
  {
    path: '/palette/:colors',
    name: 'Palette',
    props: true,
    component: () => import('../views/Palette.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
