<template>
  <Page style="background-color: cornflowerblue;overflow: hidden">
    <x-header style="background-color:#fff;" :left-options="{showBack: false}"><span style="color:#000">投资</span></x-header>
    <viewBox>
      <p v-for="item in 100" :key="item"> {{item}} </p>
    </viewBox>
  </Page>
</template>

<script>
import { Page } from 'custom-ui'
import { XHeader, ViewBox } from 'vux'

export default {
  name: 'Investment',
  components: {
    Page,
    'x-header': XHeader,
    'viewBox': ViewBox
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
