<template>
  <div class="kit-page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'page'
}
</script>

<style scoped>
  .kit-page {
    font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 14px;
    padding: 0;
    margin: 0;
    min-height: 568px;
    width: 100%;
  }
</style>
