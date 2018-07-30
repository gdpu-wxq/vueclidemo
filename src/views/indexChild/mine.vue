<template>
  <Page style="background-color: coral">
    <x-header style="background-color:#fff;" :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true"><span style="color:#000">我</span></x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </Page>
</template>

<script>
import { Page } from 'custom-ui'
import { TransferDom, XHeader, Actionsheet } from 'vux'

export default {
  name: 'Mine',
  components: {
    Page,
    'x-header': XHeader,
    'actionsheet': Actionsheet
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      showMenus: false,
      msg: 'Welcome to Your Vue.js App',
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
