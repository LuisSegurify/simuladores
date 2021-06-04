import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
// eslint-disable-next-line import/order
import VueIntro from 'vue-introjs';
// eslint-disable-next-line import/order
import introJS from 'intro.js';
import 'intro.js/introjs.css';

Vue.use(VueIntro);
Vue.use(introJS);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
