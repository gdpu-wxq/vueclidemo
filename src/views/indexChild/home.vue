<template>
  <Page style="background-color: gold">
    首页
  </Page>
</template>

<script>
  import { Page } from 'custom-ui';
  export default {
    name: 'Home',
    components: {
      Page
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
