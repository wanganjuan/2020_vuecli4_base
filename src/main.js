import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'

// 引入默认样式
import './stylus/reset.styl'
// 用于实现浏览器不支持原生功能的代码, Babel默认只转换新的JavaScript句法（syntax），而不转换新的API
import '@babel/polyfill'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
