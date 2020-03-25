<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key='item.id'>
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {id: '0001', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '热门景点11111111111'},
        {id: '0002', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '热门景点2'},
        {id: '0003', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '热门景点3'},
        {id: '0004', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '热门景点4'},
        {id: '0005', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '热门景点5'},
        {id: '0006', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '热门景点6'},
        {id: '0007', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '热门景点7'},
        {id: '0008', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '热门景点8'},
        {id: '0009', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '热门景点9'}
      ],
      swiperOption: {
        pagination: '.swiper-pagination'
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }, // 三张轮播，使用变量循环
      swiperList: []
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icon
    position: relative
    overflow hidden
    float left
    width 25%
    padding-bottom 25%
    .icon-img
      position: absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding 6px
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position: absolute
      bottom 0
      left 0
      right 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      text-align center
      ellipsis()
</style>
