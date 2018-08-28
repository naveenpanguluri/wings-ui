// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueProgressBar from 'vue-progressbar';
import VuejsDialog from 'vuejs-dialog';
import Vuelidate from 'vuelidate';
import JsonExcel from 'vue-json-excel';
import XLSX from 'xlsx';
import router from './router';
import store from './store/store';

import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'font-awesome/css/font-awesome.css';


Vue.use(VueProgressBar, {
  color: '#1dcaff',
  failedColor: 'red',
  height: '2px',
  autoRevert: true,
});
Vue.component('downloadExcel', JsonExcel);
Vue.use(Vuelidate);
Vue.use(VueResource);
Vue.use(VuejsDialog);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
