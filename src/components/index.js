import { default as Empty } from './empty';
import { default as Popup } from './popup';
const components = [Empty, Popup];
const install = function(Vue) {
  components.map((component) => {
    Vue.use(component);
  });
};
export default {
  install,
};
