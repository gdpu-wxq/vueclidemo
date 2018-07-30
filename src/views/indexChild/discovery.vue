<template>
  <Page style="background-color:cadetblue;">
    <x-header style="background-color:#fff;" :left-options="{showBack: false}"><span style="color:#000">发现</span></x-header>
  </Page>
</template>

<script>
import { Page } from 'custom-ui'
import { XHeader } from 'vux'

export default {
  name: 'Discovery',
  components: {
    Page,
    'x-header': XHeader
  },
  data () {
    return {
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
