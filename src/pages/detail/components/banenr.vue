<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">广州长隆野生动物园（AAAA景区）</div>
        <div class="banner-number"><span class="iconfont">&#xe632;</span>123</div>
      </div>
    </div>
    <common-gallary :gallaryImgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"/>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'detailBanenr',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="stylus">
.banner
  position relative
  overflow: hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    color white
    display flex
    position: absolute
    left 0
    right:0
    bottom 0
    line-height .6rem
    background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
    .banner-title
      float: 1
      font-size .24rem
      padding 0 .2rem
    .banner-number
      padding 0 .4rem
      height .32rem
      line-height .32rem
      border-radius .2rem
      background rgba(0,0,0,.8)
      font-size .24rem
      margin-top .14rem
      margin-left 24px
</style>
