<template>
  <div>
    <div class="login-option" :class="{'login-input-error': !!usernameErrorMsg}">
      <label>用户名</label>
      <div class="login-input">
        <span class="iconfont">&#xe6ef;</span><input type="text" placeholder="请输入用户名" v-model="username" @focus="_foucs('username')" @blur="_check('username')">
      </div>
      <div class="error-desc" v-show="!!usernameErrorMsg">{{usernameErrorMsg}}</div>
    </div>
    <div class="login-option" :class="{'login-input-error': !!passwordErrorMsg}">
      <label>密码</label>
      <div class="login-input">
        <span class="iconfont">&#xe6f1;</span><input type="password" placeholder="请输入密码" v-model="password" @focus="_foucs('password')" @blur="_check('password')" @keyup.enter="_submitLogin()">
      </div>
      <div class="error-desc" v-show="!!passwordErrorMsg">{{passwordErrorMsg}}</div>
    </div>
    <div class="login-button" @click="_submitLogin()">登 录</div>
  </div>
</template>

<script>
import {login} from '@/api/user'
// 使用新特性
import { toRefs, reactive } from '@vue/composition-api'
import Login from './login.js'
export default {
  setup (_, context) {
    context.root.$bconfirm()
    const {root: {$router}} = context
    const _data = reactive({
      username: '',
      usernameErrorMsg: '',
      password: '',
      passwordErrorMsg: ''
    })
    const _foucs = (option) => {
      if (option === 'username') {
        _data.usernameErrorMsg = ''
      } else {
        _data.passwordErrorMsg = ''
      }
    }
    const _submitLogin = () => {
      if (Login('username', _data) && Login('password', _data)) {
        login({
          username: _data.username,
          password: _data.password
        }).then((res) => {
          window.localStorage.setItem('Authorization', res.data)
          $router.replace('/')
        }).catch((item) => {
          console.log(item)
        })
      }
    }
    return {
      ...toRefs(_data),
      _check: Login,
      _foucs,
      _submitLogin
    }
  }
}
</script>

<style lang="stylus" scoped>
$login-color = rgba(255,255,255,.65)
.login-button
  width:300px;
  height:44px;
  background: $base_color;
  box-shadow:0px 2px 10px 0px rgba(61,193,223,0.5);
  border-radius:4px;
  font-size:16px;
  text-align center
  line-height 44px
  cursor pointer
  margin-top 8px
  transition all 0.2s ease
  &:hover
    background-color $base_color_hover
.login-option
  padding-bottom 25px
  position relative
  &.login-input-error
    .error-desc
      font-size $font-mini
      color $error
      position absolute
      bottom 5px
      height 20px
      line-height 20px
      left 0
    .login-input
      border 1px solid $error
  label
    color $login-color
  .login-input
    margin-top 10px
    width:300px;
    height:44px;
    border-radius:3px;
    border:1px solid rgba(65,65,65,1);
    padding-left 42px
    box-sizing border-box
    position relative
    .iconfont
      position absolute
      left 16px
      top 14px
      font-size 14px
      color $login-color
    input
      background-color transparent
      width 100%
      height 44px
      line-height 44px
      box-sizing border-box
      outline none
      border none
      color $login-color
</style>
