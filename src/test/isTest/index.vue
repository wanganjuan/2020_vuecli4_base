<template>
  <div>
    <div @click="test = {is: 'Button',text: 'xxxx'}">第一个</div>
     <div  @click="test = {is: 'ButtonCopy', text: 'yyy'}">第2个</div>
     <keep-alive include="Button">
        <component v-bind="test" ></component>
     </keep-alive>
  </div>
</template>

<script>
import Button from './button.vue'
import ButtonCopy from './button_copy.vue'
export default {
  data () {
    return {
      test: {
        is: 'Button',text: 'xxxx'
      }
    }
  },
  components: {
    Button,
    ButtonCopy
  }
}
</script>

<style>

</style>