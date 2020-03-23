<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe606;</span>
    </div>
    <div class="header-input"><span class="iconfont">&#xe627;</span>输入城市景点/游玩城市</div>
    <div class="header-right">城市<span class="iconfont" style="font-size: 12px">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header
    display flex
    line-height: .86rem
    background $bgColor
    color #fff
    .header-left
      width : .64rem
      float left
      margin-left: 10px;
    .header-input
      flex: 1
      border-radius .1rem
      margin-top .12rem
      margin-left .2rem
      padding-left 5px
      height .64rem
      line-height .64rem
      background #fff
      color #ccc
    .header-right
      width: 1.24rem
      float right
      text-align center
</style>
