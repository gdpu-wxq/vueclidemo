<template>
  <div class="main-container">
    <router-view class="index-container"></router-view>
    <keep-alive>
      <Tabbar style="position: fixed;background-color: #ffffff" tabbar-text-active-color="#999999">
        <tabbar-item link="/" :selected="this.$route.path==='/'">
          <img slot="icon" src="./../assets/icon_gray/home.png" alt="">
          <img slot="icon-active" src="./../assets/icon_gold/home.png" alt="">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/investment" :selected="this.$route.path==='/investment'">
          <img slot="icon" src="./../assets/icon_gray/touzi.png" alt="">
          <img slot="icon-active" src="./../assets/icon_gold/touzi.png" alt="">
          <span slot="label">投资</span>
        </tabbar-item>
        <tabbar-item link="/discovery" :selected="this.$route.path==='/discovery'">
          <img slot="icon" src="./../assets/icon_gray/faxian.png" alt="">
          <img slot="icon-active" src="./../assets/icon_gold/faxian.png" alt="">
          <span slot="label">发现</span>
        </tabbar-item>
        <tabbar-item link="/mine" :selected="this.$route.path==='/mine'">
          <img slot="icon" src="./../assets/icon_gray/mine.png" alt="">
          <img slot="icon-active" src="./../assets/icon_gold/mine.png" alt="">
          <span slot="label">我</span>
        </tabbar-item>
      </Tabbar>
    </keep-alive>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'
  export default {
    name: 'index',
    components: {
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',

      }
    },
    mounted:function(){
      this.init();
    },
    methods:{
      init(){
        console.log(this.$route.path);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .index-container {
    height: calc(100vh - 50px);
    overflow: scroll;
  }

  .icon-shouye:before {
    content: "\e633";
    color: gray
  }

  .icon-wode-F:before {
    content: "\e61d";
  }

  .icon-faxian:before {
    content: "\e603";
  }

  .icon-touzizhongxin:before {
    content: "\e605";
  }

  .weui-bar__item_on .icon-shouye:before {
    content: "\e633";
    color: gold
  }
</style>
