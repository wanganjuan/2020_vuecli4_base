<template>
  <div class="m-layout">
    <header class="m-header"></header>
    <div class="m-content">
      <el-button type="primary">13</el-button>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-layout'
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
