<template>
  <Page style="background-color: #ffffff;overflow: hidden">
    <x-header style="background-color:#FFD700;" :left-options="{showBack: false}"><span style="color:#000">H5+</span>
    </x-header>
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
        <x-button type="primary" @click.native="nameAsyn({name:'haha',age:'18'})">vuex修改值</x-button>
        <group>
          <cell title="name" :value="name"></cell>
          <cell title="age" :value="age"></cell>
        </group>
      </Box>
    </viewBox>
  </Page>
</template>

<script>
  import {Page} from 'custom-ui'
  import {XHeader, ViewBox, Grid, GridItem, XButton, Box, Cell, Group} from 'vux'
  import {mapGetters, mapMutations, mapActions, mapState} from 'vuex'

  export default {
    name: 'Investment',
    components: {
      Page, XHeader, ViewBox, Grid, GridItem, XButton, Box, Cell, Group
    },
    data() {
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
    computed: {
      ...mapGetters([
        'name','age'
      ])
    },
    methods: {
      gotoH5Plus(url) {
        this.$router.push({
          path: url
        })
      },

      gotoWebview() {
        let webview = plus.webview.create('http://www.dcloud.io/hellomui/', {autoBackButton: true});
        webview.show()
      },
      ...mapMutations({
        setName: 'SET_NAME',
        setAge: 'SET_AGE'
      }),
      ...mapActions([
        'nameAsyn'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
