import { default as Empty } from './empty';
import { default as Popup } from './popup';
import { default as Image } from './image';
const components = [Empty, Popup, Image];
const install = function(Vue) {
  components.map((component) => {
    Vue.use(component);
  });
};
export default {
  install,
};
