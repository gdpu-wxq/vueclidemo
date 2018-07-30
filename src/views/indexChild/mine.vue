<template>
  <Page style="background-color: coral">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">我</x-header>
  </Page>
</template>

<script>
import { Page } from 'custom-ui'
import { XHeader } from 'vux'
export default {
  name: 'Mine',
  components: {
    Page,
    'x-header': XHeader
  },
  data () {
    return {
      showMenus: false,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
