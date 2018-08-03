<template>
  <Page style="background-color: #ffffff;overflow: hidden">
    <x-header style="background-color:#FFD700;" :left-options="{showBack: false}"><span style="color:#000">投资</span></x-header>
    <viewBox style="padding: 1px 0px;background-color: #D9D9D9">
      <grid :cols="3" :show-lr-borders="false" style="background-color: #ffffff">
        <grid-item v-for="(item,i) in linkData" :key="i" :link="{ path: item.linkUrl}">
          <span class="grid-center">{{item.label}}</span>
        </grid-item>
      </grid>
    </viewBox>
  </Page>
</template>

<script>
import { Page } from 'custom-ui'
import { XHeader, ViewBox, Grid, GridItem} from 'vux'

export default {
  name: 'Investment',
  components: {
    Page, XHeader, ViewBox, Grid, GridItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      linkData: [
        {
          label : 'Camera',
          linkUrl:'/camera'
        },
        {
          label : 'Messaging',
          linkUrl:'/messaging'
        }
      ]
    }
  },
  methods:{
    gotoH5Plus(url){
      console.log('jjjjjj');
      this.$router.push({
        path:url
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
