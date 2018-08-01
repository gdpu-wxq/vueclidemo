<template>
  <Page style="background-color: #F7F7FA">
    <x-header style="background-color:#fff;position: fixed;z-index: 100;width: 100%" :left-options="{showBack: false}" >
      <a slot="left"><i class="iconfont icon-tongzhi"></i></a>
      <span style="color:#000" @click="showConfirm('aaa','bbb')">团贷网</span>
      <a slot="right"><i class="iconfont icon-kefu"></i></a>
    </x-header>
    <viewBox style="margin-top: 46px">
      <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="160px" :show-dots="false" :show-desc-mask="false"></swiper>
      <flexbox style="background-color: #ffffff">
        <flexbox-item  v-for="(item,i) in homeIconData" :key="i">
          <div class="flex-demo">
            <i class="iconfont" :class="item.iconClass"></i>
            {{item.label}}
          </div>
        </flexbox-item>
      </flexbox>
      <div style="background-color: #ffffff;padding: 8px">
        <img class="img" :src="P5" alt="">
        <img class="img" :src="P6" alt="">
      </div>
      <new-comer-item style="margin-top: 8px"></new-comer-item>
      <divider style="padding: 24px 48px;color: #bbb">团贷网，让金融更简单</divider>
    </viewBox>
  </Page>
</template>

<script>
import {Page} from 'custom-ui'
import { XHeader, Icon, Swiper, Flexbox, FlexboxItem, ViewBox, Divider } from 'vux'
import homeIconData from '@/mock/homeIconData'
import P1 from '@/assets/ad/p1.png'
import P2 from '@/assets/ad/p2.png'
import P3 from '@/assets/ad/p3.png'
import P5 from '@/assets/ad/p5.png'
import P6 from '@/assets/ad/p6.png'
import newComerItem from '@/views/indexChild/components/newComerItem'

const imgList = [P1, P2, P3]

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

export default {
  name: 'Home',
  components: {
    Page, Icon, XHeader, Swiper, Flexbox, FlexboxItem, newComerItem, ViewBox, Divider
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      demo03_list: demoList,
      homeIconData: homeIconData.data,
      P5: P5,
      P6: P6
    }
  },
  methods: {
    showConfirm (message, title) {
      var buttons = ['确认', '取消']
      plus.nativeUI.confirm(message, function (e) {
        var i = e.index
        if (i >= 0) {
          if (i === 0) {
            // 确认
            console.log('确认')
          } else {
            // 取消
            console.log('取消')
          }
        } else {
          // 后退键
          console.log('后退键')
        }
      }, title, buttons)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-demo{
    text-align: center;
    padding: 8px;
  }
  .flex-demo img{
    display: block;
    width: 32px;
    height: 32px;
    margin: 0 auto;
    padding-bottom: 4px;
  }
  .img{
    display: block;
    height: 80px;
    width: 95%;
    margin: 0px auto;
    margin-bottom: 8px;
    border-radius: 40px;
  }
  .iconfont{
    font-size: 24px;
  }
  .flex-demo .iconfont{
    display: block;
    font-size: 32px;
  }
</style>
