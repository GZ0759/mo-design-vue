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
    image: [String, Object],
  };
};

const Empty = {
  name: 'MEmpty',
  props: {
    ...createProps(),
  },
  data() {
    return {
      cls: ['m-empty'],
    };
  },
  computed: {
    // 获取图片内容
    getImageNode() {
      let {
        cls,
        image,
        $slots: { image: imageSlot },
      } = this;
      let imageNode = null;
      if (image && typeof image === 'string') {
        imageNode = <img alt="empty" class="image" src={image} />;
      } else if (typeof image === 'object' && image.PRESENTED_IMAGE_SIMPLE) {
        const Image = image;
        imageNode = <Image />;
        cls.push('m-empty-normal');
      } else {
        imageNode = imageSlot || <DefaultImg />;
      }
      return imageNode;
    },
    // 获取描述内容
    getDescNode() {
      let { description,$slots: { description: descSlot }, } = this;
      let descNode = null;
      descNode = descSlot || (description && <p>{description}</p>);
      return descNode;
    },
    // 获取默认卡槽
    getDefaultNode() {
      let { $slots } = this;
      return $slots.default && <div class="footer">{$slots.default}</div>
    }
  },
  methods: {
    renderEmpty() {
      let {
        cls,
        imageStyle = {},
        getImageNode,
        getDescNode,
        getDefaultNode,
      } = this;
      // // eslint-disable-next-line no-debugger
      // debugger;
      return (
        <div class={cls}>
          <div class="m-empty-img" style={imageStyle}>
            {getImageNode}
          </div>
          {getDescNode}
          {getDefaultNode}
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
