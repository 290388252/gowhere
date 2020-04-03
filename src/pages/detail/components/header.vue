<template>
    <div>
      <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
        <div class="header-abs-back iconfont">&#xe606;</div>
      </router-link>
      <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        <router-link to="/">
          <div class="header-fixed-back iconfont">&#xe606;</div>
        </router-link>
        景点详情
      </div>
    </div>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 50) {
        this.showAbs = false
        let opacity = top / 120
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll')
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  border-radius .4rem
  text-align center
  background rgba(0,0,0,.6)
  .header-abs-back
    color #fff
    font-size .4rem
    margin-top .16rem
.header-fixed
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  height .86rem
  overflow: hidden
  line-height .86rem
  text-align center
  color white
  background $bgColor
  font-size .32rem
  .header-fixed-back
    top 0
    left 0
    position absolute
    width .64rem
    text-align center
    color white
</style>
