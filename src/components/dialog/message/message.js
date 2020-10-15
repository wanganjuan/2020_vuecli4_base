import Message from './message.vue'
import Vue from 'vue'
// 导入模板
// 类似模板文件，vue extend 返回一个function 通过new 进行是实例化，el 绑定绑定位置
// 生成 构造函数
const MessageConstructor = Vue.extend(Message)
const instance = new MessageConstructor({
  el: document.createElement('div')
})
const el = instance.$el
MessageConstructor.prototype.closeMessage = function (stay, callback) {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}
const message = (options = {}) => {
  instance.content = options.content
  instance.type = options.type
  document.body.appendChild(el)
}
export default message
