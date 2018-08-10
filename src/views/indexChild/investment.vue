<template>
  <Page style="background-color: #ffffff;overflow: hidden">
    <x-header style="background-color:#FFD700;" :left-options="{showBack: false}"><span style="color:#000">H5+</span></x-header>
    <viewBox style="padding: 1px 0px;background-color: #eeeeee">
      <!--<grid :cols="3" :show-lr-borders="false" style="background-color: #ffffff">-->
        <!--<grid-item v-for="(item,i) in linkData" :key="i" :link="{ path: item.linkUrl}">-->
          <!--<span class="grid-center">{{item.label}}</span>-->
        <!--</grid-item>-->
      <!--</grid>-->
      <Box style="background-color: #ffffff;padding: 8px">
        <x-button type="primary" @click.native="gotoH5Plus('/camera')">照相</x-button>
        <x-button type="primary" @click.native="gotoH5Plus('/messaging')">通讯</x-button>
        <x-button type="primary" @click.native="gotoWebview">mui-ui</x-button>
      </Box>
    </viewBox>
  </Page>
</template>

<script>
import { Page } from 'custom-ui'
import { XHeader, ViewBox, Grid, GridItem, XButton, Box} from 'vux'

export default {
  name: 'Investment',
  components: {
    Page, XHeader, ViewBox, Grid, GridItem, XButton, Box
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      linkData: [
        {
          label: 'Camera',
          linkUrl: '/camera'
        },
        {
          label: 'Messaging',
          linkUrl: '/messaging'
        }
      ]
    }
  },
  methods: {
    gotoH5Plus (url) {
      this.$router.push({
        path: url
      })
    },
    gotoWebview(){
      plus.webview.open('http://www.dcloud.io/hellomui/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
