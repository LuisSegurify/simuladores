import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Panel from '../components/panel/Panel.vue';
import Conocenos from '../components/panel/Conocenos.vue';
import ConocenosEjemplo from '../components/panel/ConocenosEjemplo.vue';
import Cursos from '../components/panel/Cursos.vue';
import ApoyosVisuales from '../components/panel/ApoyosVisuales.vue';
import Gaceta from '../components/panel/Gaceta.vue';
import People from '../components/panel/people/People.vue';
import PeopleTest from '../components/panel/people/PeopleTest.vue';
import Damage from '../components/panel/damage/Damage.vue';
import DamageTest from '../components/panel/damage/DamageTest.vue';
import Legal from '../components/panel/legal/Legal.vue';
import LegalTest from '../components/panel/legal/LegalTest.vue';
import Market from '../components/panel/market/Market.vue';
import MarketTest from '../components/panel/market/MarketTest.vue';

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
  {
    path: '/conocenos',
    name: 'Conocenos',
    component: Conocenos,
  },
  {
    path: '/conocenosEjemplo',
    name: 'ConocenosEjemplo',
    component: ConocenosEjemplo,
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: Cursos,
  },
  {
    path: '/apoyosVisuales',
    name: 'ApoyosVisuales',
    component: ApoyosVisuales,
  },
  {
    path: '/gaceta',
    name: 'Gaceta',
    component: Gaceta,
  },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  {
    path: '/people/test/:id',
    name: 'PeopleTest',
    component: PeopleTest,
  },
  {
    path: '/damage',
    name: 'Damage',
    component: Damage,
  },
  {
    path: '/damage/test/:id',
    name: 'DamageTest',
    component: DamageTest,
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal,
  },
  {
    path: '/legal/test/:id',
    name: 'LegalTest',
    component: LegalTest,
  },
  {
    path: '/market',
    name: 'Market',
    component: Market,
  },
  {
    path: '/market/test/:id',
    name: 'MarketTest',
    component: MarketTest,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
