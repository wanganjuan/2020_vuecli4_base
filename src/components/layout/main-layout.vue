<template>
  <div class="m-layout">
    <header class="m-header"></header>
    <div class="m-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-common'
}
</script>

<style lang="stylus" scoped>
  .m-layout
    min-height 100vh
    position relative
    .m-header
      line-height 54px
      width 100%
      height:54px;
      background:linear-gradient(90deg,rgba(29,45,100,1) 0%,rgba(37,47,142,1) 100%);
      box-shadow:0px 2px 8px 0px rgba(33,46,118,0.4);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99
    .m-content
      position absolute
      top 50px
      left 0
      padding-left 24px
      padding-right 24px
      bottom 0
      right 0
      overflow auto
      overflow-x hidden
</style>
