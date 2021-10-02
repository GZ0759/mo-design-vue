const $log = (value) => {
    console.log('[mo-design]', value)
}
export default {
    install: (Vue)=> {
        Object.assign(Vue.prototype, {
            $log,
        })
    },
  };
  