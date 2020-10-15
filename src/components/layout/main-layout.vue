<template>
  <div class="m-layout">
    <header class="m-header"></header>
    <Nav />
    <div class="m-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './nav-common'
export default {
  name: 'nav-common',
  components: {
    Nav
  }
}
</script>

<style lang="stylus" scoped>
  .m-layout
    min-height 100vh
    position relative
    .m-header
      height 50px
      line-height 50px
      width 100%
      background blue
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99
    .m-content
      position absolute
      top 50px
      left 64px
      padding-left 24px
      padding-right 24px
      bottom 0
      right 0
      overflow auto
      overflow-x hidden
</style>
