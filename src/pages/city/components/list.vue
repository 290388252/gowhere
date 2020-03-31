<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="buttom-wrapper">
            <div class="button">广州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="buttom-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="items of item" :key="items.id">
          <div class="item border-bottom">{{items.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      console.log(this.letter)
      if (this.letter) {
        this.scroll.scrollToElement(this.$refs[this.letter][0])
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #777
    &:after
      border-color #777
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      background #eee
      line-height .54rem
      padding-left .2rem
      color: #666
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .buttom-wrapper
        float left
        width 33.33%
        .button
          text-align center
          margin .1rem
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        color #666
        padding-left .2rem
      .border-bottom
        &:before
          border-color #ccc
</style>
