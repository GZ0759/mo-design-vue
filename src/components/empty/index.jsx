import DefaultImg from './image/default';
import SimpleImg from './image/simple';
require('./style/index.css');

// description	自定义描述内容	string | v-slot	-
// imageStyle	图片样式	CSSProperties	-	1.5.0
// image	设置显示图片，为 string 时表示自定义图片地址	string | v-slot	false

const createProps = () => {
  return {
    description: String,
    imageStyle: Object,
    image: String,
  };
};

const Empty = {
  name: 'MEmpty',
  props: {
    ...createProps(),
  },
  methods: {
    renderEmpty() {
      let { $slots, $props } = this;
      let { image, imageStyle = {}, description } = $props;
      let imageNode = null;
      if (image && typeof image === 'string') {
        imageNode = <img alt="empty" class="image" src={image} />;
      } else {
        imageNode = <DefaultImg />;
      }
      let desNode = description && <p>{description}</p>;
      let defaultNode = $slots && $slots.default && <div class="footer">{$slots.default}</div>;
      return (
        <div class="m-empty">
          <div class="m-empty-img" style={imageStyle}>{imageNode}</div>
          {desNode}
          {defaultNode}
        </div>
      );
    },
  },
  render() {
    return this.renderEmpty();
  },
};

Empty.PRESENTED_IMAGE_DEFAULT = DefaultImg;
Empty.PRESENTED_IMAGE_SIMPLE = SimpleImg;

Empty.install = function(Vue) {
  Vue.component(Empty.name, Empty);
};
export default Empty;
