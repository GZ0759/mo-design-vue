import Vue from 'vue';
import App from './App.vue';
import Mo from './components';
import demoComponents from './utils/register/demoComponents';
import methods from './utils/register/methods';

Vue.config.productionTip = false;
Vue.use(Mo);
Vue.use(demoComponents);
Vue.use(methods);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
