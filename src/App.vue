<template>
  <div id="app">
    <div id="nav">
      <p @click="_goRouterByPath('/')">Home</p> | <p @click="_goRouterByPath('/about')">About</p>
    </div>
    <div @click="_changeMsg()">{{ msg }}</div>
    <h1>{{state.count}}</h1>
    <h2>12311===={{plusOne}}</h2>
    <router-view />
  </div>
</template>

<script>
import { ref, reactive, computed } from '@vue/composition-api'
import useHandle from '@/hooks/useHandle'
export default {
  name: 'app',
  setup (props, { root }) {
    const { goRouterByPath } = useHandle
    const { $store } = root
    // console.log($store)
    // let msg = ref(process.env.VUE_APP_API)
    const msg = ref(222)
    const plusOne = computed(() => $store.state.count)
    const state = reactive({
      count: 0
    })
    function _changeMsg () {
      msg.value++
      state.count++
      $store.commit('increment')
    }
    // function _goRouterByPath (path) {
    //   $router.push(path)
    // }
    return {
      plusOne,
      msg,
      state,
      _changeMsg,
      _goRouterByPath: goRouterByPath
    }
  }
  // data () {
  //   return {
  //     msg: process.env.VUE_APP_API,
  //     test: process.env.NODE_ENV
  //   }
  // }
}
</script>

<style>
</style>
