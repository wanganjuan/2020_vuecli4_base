<template>
  <div class="m-nav"></div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="stylus" scoped>
  // 选中的左边渐变导航
  .m-nav
    position: fixed;
    bottom: 0;
    left: 0;
    width: 64px;
    top: 50px;
    background: linear-gradient(180deg,rgba(66,70,153,1) 0%,rgba(99,104,199,1) 100%);
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10);
    transition all 0.3s ease
    // 如果想点击完就切换，可以设置低一点
    z-index 2001
    font-size 14px
    overflow hidden
</style>
