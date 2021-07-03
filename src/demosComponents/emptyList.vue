<template>
  <div>
    <m-empty description="图片卡槽">
      <img slot="image" :src="srcImage" alt="" />
    </m-empty>
    <m-empty>
      <div slot="description">描述卡槽</div>
    </m-empty>
    <m-empty
      :image="srcImage"
      description="在线图片"
      :imageStyle="{ width: '120px', height: '120px' }"
    >
    </m-empty>
    <m-empty :image="moImage" description="默认卡槽和框架图片">
      <div>这是默认插槽内容</div>
    </m-empty>
  </div>
</template>

<script>
import MEmpty from '../components/empty';
export default {
  name: 'emptyList',
  data() {
    return {
      moImage: MEmpty.PRESENTED_IMAGE_SIMPLE,
      srcImage:
        'https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original',
    };
  },
};
</script>

<style></style>
