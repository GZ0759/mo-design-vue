// It allows you to pass in a directory to search, 
// a flag indicating whether subdirectories should be searched too, 
// and a regular expression to match files against.
const files = require.context('../../demosComponents', true, /\.vue$/);
const modules = files.keys().map((key) => files(key).default);
// 根据组件名字注册 demos 文件夹的所有组件
const install = function(Vue) {
  modules.map((component) => {
    Vue.component(component.name, component);
  });
};
export default {
  install,
};
