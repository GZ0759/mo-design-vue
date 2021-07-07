<template>
  <div>
    <button @click="show = !show">点我</button>
    <m-popup v-model="show" closeable>
        <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="">
    </m-popup>
  </div>
</template>

<script>
export default {
  name: 'popupList',
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style></style>
