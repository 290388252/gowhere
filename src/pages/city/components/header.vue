<template>
    <div class="header">
      城市选择
      <router-link to="/">
        <span class="iconfont header-back">&#xe606;</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
 @import "~styles/varibles.styl"
.header
  position relative
  height .86rem
  overflow: hidden
  line-height .86rem
  text-align center
  color white
  background $bgColor
  font-size .32rem
  .header-back
    top 0
    left 0
    position absolute
    width .64rem
    text-align center
    color white
</style>
