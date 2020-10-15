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
  instance.mes = options.mes
  const type = options.type
  let temp = {}
  switch (type) {
    case 'warning':
      temp = {
        clazz: 'tishi',
        icon: 'tishi'
      }
      break
    case 'error':
      temp = {
        clazz: 'cuowu',
        icon: 'cuowu'
      }
      break
    case 'success':
      temp = {
        clazz: 'chenggong',
        icon: 'chenggong'
      }
      break
    default:
      temp = {
        clazz: 'xinxitishi',
        icon: 'xinxitishi'
      }
  }
  const clazzList = []
  clazzList.push(temp.clazz)
  instance.clazzList = clazzList
  instance.icon = temp.icon
  document.body.appendChild(el)
}
export default message
