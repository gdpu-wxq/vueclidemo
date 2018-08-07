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
          <span slot="label">H5+</span>
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
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'

    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init () {
      let _this = this
      console.log(this.$route.path)
      this.axios.get('https://raw.githubusercontent.com/gdpu-wxq/Tools/master/version.json').then((response) => {
        console.log(response.data)
        _this.getCurrentVersion(response.data.version)
      })
    },
    getCurrentVersion (newVersion) {
      let _this = this
      // 获取本地应用资源版本号
      plus.runtime.getProperty (plus.runtime.appid,function (inf) {
        //获取当前版本号
        if (newVersion !== inf.version) {
          console.log("newVersion:" + newVersion + "----" + "curVersion:" + inf.version);
          var bts = ["立即更新","取消"]
          plus.nativeUI.confirm("更新提示", function (e) {
            var i = e.index
            if (i === 0) {
              _this.downWgt()
            }
          }, "nativeUI", bts)
        }
      })
    },
    downWgt () {
      let _this = this
      // let wgtUrl='http://www.wsqsl.cn:8080/wxq/H56DE0ED8.wgt'
      let wgtUrl = "https://github.com/gdpu-wxq/Tools/raw/master/H56DE0ED8.wgt"
      plus.nativeUI.showWaiting("下载wgt文件...")
      plus.downloader.createDownload (wgtUrl, {filename : "_doc/update/"}, function (d, status) {
        if (status == 200) {
          console.log("下载wgt成功：" + d.filename)
          _this.installWgt(d.filename) // 安装wgt包
        } else {
          console.log("下载wgt失败！")
          plus.nativeUI.alert("下载wgt失败！")
        }
        plus.nativeUI.closeWaiting()
      }).start()
    },
    installWgt (path) {
      plus.nativeUI.showWaiting("安装wgt文件...")
      plus.runtime.install(path, {}, function () {
        plus.nativeUI.closeWaiting()
        console.log("安装wgt文件成功！")
        plus.nativeUI.alert("应用资源更新完成！", function () {
          plus.runtime.restart()
        });
      },function (e) {
        plus.nativeUI.closeWaiting()
        console.log("安装wgt文件失败["+ e.code +"]：" + e.message)
        plus.nativeUI.alert("安装wgt文件失败[" + e.code + "]：" + e.message)
      });
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
