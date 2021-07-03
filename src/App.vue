<template>
  <div id="app">
    <m-empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original" description="这里是空的" :imageStyle="{width: '120px', height: '120px'}">
      <div>这是默认插槽内容</div>
    </m-empty>
    <m-empty description="这里是空的" :imageStyle="{width: '120px', height: '120px'}">
      <div>这是默认插槽内容</div>
    </m-empty>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
/* #app {
} */
</style>
