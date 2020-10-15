<template>
  <div class="m-login">
    <div class="login-content-position">
      <div class="login-content">
        <div class="login-logo"><img src="../../assets/logo.png"><span>优化训练平台</span></div>
        <div class="login-welcome">您好！欢迎登录z</div>
        <LoginOption></LoginOption>
      </div>
    </div>
  </div>
</template>

<script>
import LoginOption from './login-option'
export default {
  name: 'login',
  components: {
    LoginOption
  },
  methods: {
  },
  created () {
    this.$store.commit('setPermissionObj', null)
  }
}
</script>

<style lang="stylus" scoped>
  .m-login
    height 100vh
    background url('~@/assets/bg.png') no-repeat fixed center
    background-size cover
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .login-content
      position absolute
      top 50%
      transform translateY(-52%)
    .login-content-position
      width:460px;
      position fixed
      top 0
      right 0
      bottom 0
      background: rgba(0,0,0,.75);
      overflow: hidden;
      box-sizing border-box
      padding-left 80px
      color #fff
      .login-logo
        font-size:18px;
        display flex
        align-items center
        margin-bottom 16px
        span
          padding-left 10px
      .login-welcome
        height:24px;
        font-size:20px;
        line-height 24px
        margin-bottom 30px
</style>
