import Vue from 'vue';
import App from './App.vue';
import Mo from './components';
import demoComponents from './utils/register/demoComponents';

Vue.config.productionTip = false;
Vue.use(Mo);
Vue.use(demoComponents);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
