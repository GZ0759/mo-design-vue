require('./index.css');

// | v-model (value) | 是否显示弹出层 | _boolean_ | `false` |
// | overlay | 是否显示遮罩层 | _boolean_ | `true` |
// | position | 弹出位置，可选值为 `top` `bottom` `right` `left` | _string_ | `center` |
// | overlay-class | 自定义遮罩层类名 | _string_ | - |
// | overlay-style | 自定义遮罩层样式 | _object_ | - |
// | duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
// | round | 是否显示圆角 | _boolean_ | `false` |
// | lock-scroll | 是否锁定背景滚动 | _boolean_ | `true` |
// | lazy-render | 是否在显示弹层时才渲染节点 | _boolean_ | `true` |
// | close-on-popstate | 是否在页面回退时自动关闭 | _boolean_ | `false` |
// | close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
// | closeable | 是否显示关闭图标 | _boolean_ | `false` |
// | close-icon | 关闭图标名称或图片链接 | _string_ | `cross` |
// | close-icon-position | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
// | transition | 动画类名，等价于 [transtion](https://cn.vuejs.org/v2/api/index.html#transition) 的`name`属性 | _string_ | - |
// | transition-appear `v2.10.14` | 是否在初始渲染时启用过渡动画 | _boolean_ | `false` |
// | get-container | 指定挂载的节点 | _string \| () => Element_ | - |
// | safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |

const createProps = () => {
  return {
    value: Boolean,
    closeable: Boolean,
  };
};

const Popup = {
  name: 'MPopup',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    ...createProps(),
  },
  data() {
    return {
      cls: ['m-empty'],
      inited: this.value,
      style: {
        height: '30%',
        display: 'block',
      },
    };
  },
  mounted() {
    if (this.value) {
      this.open();
    }
  },
  watch: {
    value(val) {
      const type = val ? 'open' : 'close';
      this[type]();
      this.inited = this.inited || this.value;
    },
  },
  methods: {
    // 关闭图标
    onClickCloseIcon(e) {
      this.$emit('click-close-icon', e);
      console.log('11');
      this.close();
    },
    open() {
      this.style.display = 'block';
    },
    close() {
      // this.style.display = 'none';
      this.$emit('change');
    },
    renderPopup() {
      let { style, value, $slots, closeable } = this;
      return (
        <div class="mo-popup-wrap">
          <div class="mo-popup-mask" vShow={value} onClick={this.close}></div>
          <transition name="mo-popup-bottom">
            <div vShow={value} class="mo-popup" style={style}>
              {$slots.default}
              {closeable && (
                <span onClick={this.onClickCloseIcon} class="mo-pupup-cross">
                  <span>X</span>
                </span>
              )}
            </div>
          </transition>
        </div>
      );
    },
  },
  render() {
    return this.renderPopup();
  },
};

Popup.install = function(Vue) {
  Vue.component(Popup.name, Popup);
};
export default Popup;
