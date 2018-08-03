<template>
  <div style="background-color: #eeeeee;height: 100%">
    <x-header style="background-color:#fff;"><span style="color:#000">相机</span></x-header>
    <viewBox style="padding: 8px 0px">
      <Box style="background-color: #ffffff;padding: 8px">
        <x-button type="primary" @click.native="getCaptureImage">照相</x-button>
      </Box>
      <grid :cols="3" :show-lr-borders="false" style="background-color: #ffffff">
        <grid-item v-for="(item,i) in imgList" :key="i">
          <img :src="item.imgUrl" alt="" style="display: block;width: 100%;height: 100%">
        </grid-item>
      </grid>
    </viewBox>
  </div>
</template>

<script>
  import { Page } from 'custom-ui'
  import { TransferDom, XHeader, Actionsheet, ViewBox, XButton, Box, Grid, GridItem } from 'vux'
  import P1 from '@/assets/ad/p1.png'

  export default {
    name: 'Camera',
    components: {
      Page, XHeader, Actionsheet, ViewBox, XButton, Box, Grid, GridItem
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        showMenus: false,
        msg: 'Welcome to Your Vue.js App',
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        imgList:[]
      }
    },
    methods:{
      getCaptureImage(){
        let _this=this;
        let res = cameraPlus.supportedImageResolutions[0];
        let fmt = cameraPlus.supportedImageFormats[0];
        console.log("Resolution: "+res+", Format: "+fmt);
        cameraPlus.captureImage( function( path ){
            let picUrl=plus.io.convertLocalFileSystemURL(path);
            _this.imgList.push( { imgUrl:picUrl} );
          },
          function( error ) {
            alert( "Capture image failed: " + error.message );
          },
          {resolution:res,format:fmt}
        );
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
