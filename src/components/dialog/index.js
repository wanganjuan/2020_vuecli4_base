import Confirm from './confirm/confirm.js'
import Message from './message/message.js'
export default {
  install (Vue, options) {
    Vue.prototype.$bconfirm = Confirm
    Vue.prototype.$bmessage = Message
  }
}
