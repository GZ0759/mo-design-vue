<template>
  <div>
    <m-image
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
      width="100"
      height="100"
      fit="fill"
      round
    />
    <m-image
      src="https://img01.yzcdn.cn/vant/cat1.jpeg"
      width="300"
      height="200"
      fit="fill"
      @click="$log"
      @error="$log('error')"
    />
  </div>
</template>

<script>
export default {
  name: 'imageList',
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style></style>
