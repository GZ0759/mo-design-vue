// description	自定义描述内容	string | v-slot	-
// imageStyle	图片样式	CSSProperties	-	1.5.0
// image	设置显示图片，为 string 时表示自定义图片地址	string | v-slot	false

const createProps = () => {
  return {
    description: String,
    imageStyle: () => {},
    image: String,
  };
};

const Empty = {
  name: 'MEmpty',
  props: {
    ...createProps(),
  },
  created() {
    let props = Object.entries(this.$props);
    for (const [key, value] of props) {
      console.log(key, value);
    }
  },
  methods: {
    renderEmpty() {
      return <div>我是好人{this.description}</div>;
    },
  },
  render() {
    return this.renderEmpty();
  },
};

Empty.install = function(Vue) {
  Vue.component(Empty.name, Empty);
};
export default Empty;
