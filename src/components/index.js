import { default as Empty } from './empty';
const components = [Empty];
const install = function(Vue) {
  components.map((component) => {
    Vue.use(component);
  });
};
export default {
  install,
};
