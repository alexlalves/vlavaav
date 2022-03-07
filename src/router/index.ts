import Vue from 'vue';
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router';
import SamplePalettes from '@/assets/sample_palettes';

const paletteRoutes = Object.values(SamplePalettes)
  .map(palette => ({
    path: `/palette/${palette}`,
    name: `Palette-${palette}`,
    props: {
      palette,
    },
    component: () => import('../views/SamplePalette.vue'),
  }));

const noColorsRedirect = (to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  if (to.query.colors) {
    next();
  } else {
    next({ name: 'Home' });
  }
};

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/palette',
    name: 'Palette',
    props: true,
    component: () => import('../views/Palette.vue'),
    beforeEnter: noColorsRedirect,
  },
  ...paletteRoutes,
  {
    path: '/palette/:nonexistent',
    redirect: { name: 'Home' },
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (from.name === 'Palette' && to.name === 'TitledPalette') {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
});

export default router;
