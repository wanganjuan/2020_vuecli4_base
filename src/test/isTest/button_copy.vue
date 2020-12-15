<script>
export default {
  name: 'ButtonCopy',
  props: ['text'],
  render(h, context) {
    console.log(this, this.text)
    return h('div', {
      on: {
        click: () => {
          alert(this.text)
        }
      }
    }, [  this.text,
    h('h1', {},'一则头条'),]
    )
  }
}

//  1 {
//  2  // 和`v-bind:class`一样的 API
//  3  'class': {
//  4   foo: true,
//  5   bar: false
//  6  },
//  7  // 和`v-bind:style`一样的 API
//  8  style: {
//  9   color: 'red',
// 10   fontSize: '14px'
// 11  },
// 12  // 正常的 HTML 特性
// 13  attrs: {
// 14   id: 'foo'
// 15  },
// 16  // 组件 props
// 17  props: {
// 18   myProp: 'bar'
// 19  },
// 20  // DOM 属性
// 21  domProps: {
// 22   innerHTML: 'baz'
// 23  },
// 24  // 事件监听器基于 `on`
// 25  // 所以不再支持如 `v-on:keyup.enter` 修饰器
// 26  // 需要手动匹配 keyCode。
// 27  on: {
// 28   click: this.clickHandler
// 29  },
// 30  // 仅对于组件，用于监听原生事件，而不是组件内部使用
// 31  // `vm.$emit` 触发的事件。
// 32  nativeOn: {
// 33   click: this.nativeClickHandler
// 34  },
// 35  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
// 36  // 赋值，因为 Vue 已经自动为你进行了同步。
// 37  directives: [
// 38   {
// 39    name: 'my-custom-directive',
// 40    value: '2',
// 41    expression: '1 + 1',
// 42    arg: 'foo',
// 43    modifiers: {
// 44     bar: true
// 45    }
// 46   }
// 47  ],
// 48  // Scoped slots in the form of
// 49  // { name: props => VNode | Array<VNode> }
// 50  scopedSlots: {
// 51   default: props => createElement('span', props.text)
// 52  },
// 53  // 如果组件是其他组件的子组件，需为插槽指定名称
// 54  slot: 'name-of-slot',
// 55  // 其他特殊顶层属性
// 56  key: 'myKey',
// 57  ref: 'myRef'
// 58 }
</script>
