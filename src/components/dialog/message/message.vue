<template>
  <div class="message-dialog" :class="clazzList" @mouseover="_showMessage" @mouseleave="_closeMessage">123124443</div>
</template>

<script>
export default {
  props: {
    content: String,
    type: String,
    timeout: null
  },
  data () {
    return {
      clazzList: [],
      icon: ''
    }
  },
  methods: {
    _showMessage () {
      this.timeout && clearTimeout(this.timeout)
    },
    _closeMessage () {
      this.timeout = setTimeout(() => {
        this.closeMessage()
      }, 3000)
    }
  },
  created () {
    const type = this.type
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
    this.clazzList.push(temp.clazz)
    this.icon = temp.icon
  },
  mounted () {
    this.timeout = setTimeout(() => {
      this.closeMessage()
    }, 3000)
  },
  beforeDestroy () {
    this.timeout && clearTimeout(this.timeout)
  }
}
</script>

<style lang="stylus" scoped>
  @keyframes show {
    from {
      transform: translate(-50%, -100%);
      opacity: 0
    }
    to {
      transform: translateY(-50%, 0);
      opacity: 1
    }
  }
  .message-dialog {
    min-width:360px;
    min-height:54px;
    line-height: 54px;
    background:rgba(255,255,255,1);
    box-shadow:0px 4px 30px 0px rgba(174,174,194,0.6);
    border-radius:4px;
    position: fixed;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000;
    border-left: 4px solid;
    box-sizing border-box
    animation show 0.5s ease
    &.xinxitishi {
      border-color: #2CB5F3;
      padding 0 40px 0 62px
    }
  }
</style>
