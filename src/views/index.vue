<template>
  <div class="main-container">
    <router-view class="index-container"></router-view>
    <Tabbar style="position: fixed">
      <tabbar-item selected link="/">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/investment">
        <span slot="label">投资</span>
      </tabbar-item>
      <tabbar-item link="/discovery">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item link="/mine">
        <span slot="label">我</span>
      </tabbar-item>
    </Tabbar>
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
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
