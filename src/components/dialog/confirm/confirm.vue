<template>
  <div class="mask-black-dialog"  @click.stop="closeConfirm(false)">
    <div class="mask-content">
      <span class="biconfont icon-guanbi message-close" @click="closeConfirm(false)"/>
      <div class="mask-header">
        <TSVG class="message-svg" :name="!isDel ? 'icon-tishi' : 'icon-cuowu'"/>
        <div class="header-title">添加patch语料</div>
        <div v-html="content" class="mask-notice"></div>
      </div>
      <div class="mask-foot">
        <el-button type="primary"  @click.stop="closeConfirm(false, callback)"  class="mask-foot-button" :class="{'important-button': isDel}">{{buttonDesc || '确 定'}}</el-button>
        <el-button @click.stop="closeConfirm(false)" class="mask-foot-button" >取 消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import TSVG from '../../common/svg-icon.vue'
export default {
  props: {
    content: String,
    buttonDesc: String,
    callback: Function,
    isDel: Boolean
  },
  components: {
    TSVG
  }
}
</script>

<style lang="stylus" scoped>
  .mask-black-dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background:rgba(36,47,62,.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    .mask-content {
      width:360px;
      background:rgba(255,255,255,1);
      box-shadow:0px 2px 8px 0px rgba(0,0,0,0.2);
      border-radius:8px;
      min-height:166px;
      padding 30px
      padding-bottom 72px
      box-sizing border-box
      border:1px solid rgba(228,231,237,1);
      position relative
      .mask-header {
        padding-left 32px
        box-sizing border-box
        position relative
        text-align left
        line-height:20px
        .header-title {
          height:22px;
          line-height 22px
          font-size:16px;
          color #242F3E
        }
      }
    }
    .mask-foot {
      text-align: right;
      margin-top: 16px;
      position absolute
      bottom 30px
      right 30px
      width 100%
      .mask-foot-button {
        width:64px;
        height:32px;
        border-radius:4px;
      }
      .important-button {
        background-color $error
        border-color $error
        &:hover {
          background-color #f45d65
          border-color #f45d65
        }
      }
    }
  }
  .message-svg {
    position absolute
    width 20px
    height 20px
    left 0
    top 2px
  }
  .mask-notice {
    color:rgba(136,140,145,1);
    line-height:22px;
    font-size:14px;
    padding-top 8px
  }
  .message-close {
    position absolute
    font-size 12px
    right 30px
    cursor pointer
    width 12px
    height 12px
    color #9BA0A6
    transform scale(0.8)
    top 16px
    &:hover {
      color #3065FF
    }
  }
</style>
