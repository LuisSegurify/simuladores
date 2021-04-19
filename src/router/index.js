import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Panel from '../components/panel/Panel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue'),
  },
  {
    path: '/panel',
    name: 'Panel',
    component: Panel,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
