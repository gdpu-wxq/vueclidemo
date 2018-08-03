<template>
  <div style="background-color: #eeeeee;height: 100%">
    <x-header style="background-color:#fff;"><span style="color:#000">通讯</span></x-header>
    <viewBox style="padding: 8px 0px">
      <Box style="background-color: #ffffff;padding: 8px">
        <x-input style="border:1px solid #000000;margin-bottom: 8px;border-radius: 5px" title="手机号码"
                 mask="999 9999 9999" ref="input01" v-model="maskValue" :max="13" is-type="china-mobile"></x-input>
        <x-button type="primary" @click.native="callPhone">打电话</x-button>
        <x-button type="primary" @click.native="sendMessage">发短信</x-button>
      </Box>
    </viewBox>
  </div>
</template>

<script>
  import {Page} from 'custom-ui'
  import {TransferDom, XHeader, Actionsheet, ViewBox, XButton, Box, Grid, GridItem, XInput} from 'vux'
  import P1 from '@/assets/ad/p1.png'

  export default {
    name: 'Messaging',
    components: {
      Page, XHeader, Actionsheet, ViewBox, XButton, Box, Grid, GridItem, XInput
    },
    directives: {
      TransferDom
    },
    data() {
      return {
        showMenus: false,
        msg: 'Welcome to Your Vue.js App',
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        imgList: [],
        maskValue: '',
      }
    },
    methods: {
      callPhone() {
        let _this = this;
        if (this.maskValue && this.$refs.input01.valid) {
          console.log(this.maskValue);
          plus.device.dial(this.Trim(this.maskValue), false);
        } else {
          return;
        }
        // if(plus.os.name=="Android"){
        //   var Intent = plus.android.importClass("android.content.Intent");
        //   var Uri = plus.android.importClass("android.net.Uri");
        //   var main = plus.android.runtimeMainActivity();
        //   var uri = Uri.parse("tel:"+_this.maskValue);
        //   var call = new Intent("android.intent.action.CALL", uri);
        //   main.startActivity(call);
        // }else{
        //   //plus.device.dial(number, false);
        //   var UIAPP=plus.ios.importClass("UIApplication");
        //   var NSURL=plus.ios.importClass("NSURL");
        //
        //   var app=UIAPP.sharedApplication();
        //
        //   app.openURL(NSURL.URLWithString("tel://"+_this.maskValue));
        // }

      },
      Trim(str) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g, "");
        result = result.replace(/\s/g, "");
        return result;
      },
      sendMessage() {
        if (this.maskValue && this.$refs.input01.valid) {
          console.log(this.maskValue);
        } else {
          return;
        }
        var msg = plus.messaging.createMessage(plus.messaging.TYPE_SMS);
        msg.to = [this.maskValue];
        msg.body = '这是一条默认消息';
        plus.messaging.sendMessage(msg);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
