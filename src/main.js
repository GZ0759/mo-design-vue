import Vue from 'vue';
import App from './App.vue';
import Mo from './components';

Vue.config.productionTip = false;
Vue.use(Mo);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
