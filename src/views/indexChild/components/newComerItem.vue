<template>
  <div class="item">
    <label class="label-tip">新手专享</label>
    <p style="padding-top: 24px">新手专享</p>
    <span class="tip">新手专享</span>
    <p style="font-size: 32px;padding-top: 16px;color: orangered">11%</p>
    <flexbox style="background-color: #ffffff;padding: 8px 0px" :gutter="0">
      <flexbox-item class="vux-1px-r text-align-center" :span="3">3个月</flexbox-item>
      <flexbox-item class="vux-1px-r text-align-center" :span="5">剩余465.14万元</flexbox-item>
      <flexbox-item class="text-align-center" :span="4">100元起购</flexbox-item>
    </flexbox>
    <div class="button">
      <p style="color: #ffffff;line-height: 14px;">加入服务</p>
      <span style="color: #ffffff;font-size: 10px; margin-top: -1px; display: block;">已加入94人</span>
    </div>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem} from 'vux'

export default {
  name: 'NewComerItem',
  props: {},
  components: {
    Flexbox, FlexboxItem
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .text-align-center {
    text-align: center;
  }

  .item {
    height: auto;
    background-color: #ffffff;
    padding-bottom: 8px;
    position: relative
  }

  .label-tip {
    position: absolute;
    top: 0;
    left: 16px;
    padding: 0px 8px;
    background-color: coral;
    color: #ffffff;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .tip {
    display: inline-block;
    border: 1px solid orangered;
    color: orangered;
    font-size: 8px;
    height: 16px;
    line-height: 16px;
    border-radius: 12px;
    padding: 0px 8px
  }

  .button {
    width: 70%;
    height: 40px;
    margin: 8px auto;
    background-color: gold;
    border-radius: 40px;
    padding: 8px;
    box-sizing: border-box
  }
</style>
