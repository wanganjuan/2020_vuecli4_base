import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import Dialog from './components/dialog'
import axios from './api'

// 引入默认样式
import './style/reset.styl'
import './styles.scss'
import './style/font/iconfont.css'
// 用于实现浏览器不支持原生功能的代码, Babel默认只转换新的JavaScript句法（syntax），而不转换新的API
import '@babel/polyfill'
Vue.config.productionTip = false
Vue.use(VueCompositionAPI)
Vue.use(axios)
Vue.use(Dialog)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
