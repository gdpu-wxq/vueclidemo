<template>
  <Page style="background-color: gold">
    <x-header style="background-color:#fff;" :left-options="{showBack: false}"><span style="color:#000">首页</span></x-header>
  </Page>
</template>

<script>
import {Page} from 'custom-ui'
import { XHeader } from 'vux'

export default {
  name: 'Home',
  components: {
    Page,
    'x-header': XHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
