<template>
  <Page style="background-color: #eeeeee">
    <x-header style="background-color:#fff;" :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true"><span style="color:#000">我</span></x-header>
    <viewBox style="padding: 1px 0px;background-color: #eeeeee">
      <group>
        <cell title="version" :value="123456"></cell>
      </group>
    </viewBox>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </Page>
</template>

<script>
import { Page } from 'custom-ui'
import { TransferDom, XHeader, Actionsheet, ViewBox, XButton, Box, Cell, Group} from 'vux'

export default {
  name: 'Mine',
  components: {
    Page, XHeader, Actionsheet, ViewBox, XButton, Box, Cell, Group
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      showMenus: false,
      version: '',
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      }
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init () {
      let _this = this
      plus.runtime.getProperty (plus.runtime.appid,function (inf) {
        //获取当前版本号
        _this.version = inf.version;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
