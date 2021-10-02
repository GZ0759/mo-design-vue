/* eslint-disable no-debugger */
require('./index.css');
import { isDef, addUnit } from '@/utils/index';

// | src | 图片链接 | _string_ | - |
// | fit | 图片填充模式 | _string_ | `fill` |
// | alt | 替代文本 | _string_ | - |
// | width | 宽度，默认单位为`px` | _number \| string_ | - |
// | height | 高度，默认单位为`px` | _number \| string_ | - |
// | radius | 圆角大小，默认单位为`px` | _number \| string_ | `0` |
// | round | 是否显示为圆形 | _boolean_ | `false` |
// | lazy-load | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | _boolean_ | `false` |
// | show-error | 是否展示图片加载失败提示 | _boolean_ | `true` |
// | show-loading | 是否展示图片加载中提示 | _boolean_ | `true` |
// | error-icon | 失败时提示的[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `photo-fail` |
// | loading-icon | 加载时提示的[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `photo` |
// | icon-prefix `v2.10.12` | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |

const createProps = () => {
  return {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
  };
};

const Image = {
  name: 'MImage',
  props: {
    ...createProps(),
  },
  data() {
    return {
      error: false,
    };
  },
  wwath: {
    src() {
      this.error = false;
    },
  },
  mounted() {},
  methods: {
    // 用户点击
    onClick(e) {
      this.$emit('click', e);
    },
    // 图片加载失败
    onError(e) {
      this.error = true;
      this.$emit('error', e);
    },
  },
  computed: {
    // 图片外样式 style
    contentStyle() {
      let { width, height, radius } = this;
      const style = {};
      width = addUnit(width);
      height = addUnit(height);
      radius = addUnit(radius);
      isDef(width) && Object.assign(style, { width });
      isDef(height) && Object.assign(style, { height });
      isDef(radius) && Object.assign(style, { radius });
      return style;
    },
    // 图片填充 style
    imgStyle() {
      let { fit: objectFit } = this;
      return {
        objectFit,
      };
    },
  },
  render() {
    let { contentStyle, imgStyle } = this;
    let { src, round, alt, error } = this;
    let contentClass = [{ 'image-round': round }];
    return (
      <div
        class={['mo-image-wrap', ...contentClass]}
        style={contentStyle}
        onClick={this.onClick}
      >
        {error ? (
          <div class="mo-error">图片出错了</div>
        ) : (
          <img
            class="mo-image"
            src={src}
            alt={alt}
            style={imgStyle}
            onError={this.onError}
          />
        )}
      </div>
    );
  },
};

Image.install = function(Vue) {
  Vue.component(Image.name, Image);
};
export default Image;
