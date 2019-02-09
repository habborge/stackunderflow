/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';

import VueRouter from 'vue-router';

import BootstrapVue from 'bootstrap-vue';

import Routes from './routes.js';

import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const rutas = new VueRouter({
  routes: Routes,
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: rutas,
  image_route: '',
}).$mount('#app');
