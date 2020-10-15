<template>
  <div class="message-dialog" :class="clazzList" @mouseover="_showMessage" @mouseleave="_closeMessage">
    <TSVG class="message-svg" :name="`icon-${icon}`"/>{{mes}}<span class="biconfont icon-guanbi message-close" @click="closeMessage()"/>
  </div>
</template>

<script>
import TSVG from '../../common/svg-icon.vue'
export default {
  props: {
    mes: String,
    icon: String,
    clazzList: Array
  },
  components: {
    TSVG
  },
  data () {
    return {
      timeout: null
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
  mounted () {
    // this.timeout = setTimeout(() => {
    //   this.closeMessage()
    // }, 3000)
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
    padding 0 40px 0 62px
    .message-svg {
      position absolute
      width 20px
      height 20px
      left 30px
      top 18px
    }
    .message-close {
      position absolute
      font-size 12px
      right 20px
      cursor pointer
      &:hover {
        color #3065FF
      }
    }
    &.xinxitishi {
      border-color: #2CB5F3;
    }
    &.cuowu {
      border-color: #F63A44;
    }
    &.tishi {
      border-color: #F6A146;
    }
    &.chenggong {
      border-color: #56CD75;
    }
  }
</style>
