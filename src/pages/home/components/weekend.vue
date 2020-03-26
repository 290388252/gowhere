<template>
  <div>
    <div class="recommed-title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommedList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommedList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts3/1702/78/4a80960e1406bc02.jpg_r_390x260x95_c26022bd.jpg',
        title: '大连海洋和sfa',
        desc: '大连海洋和sfa大连海洋和sfa大连海洋和sfa大连海洋和sfa'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/tts3/1702/78/4a80960e1406bc02.jpg_r_390x260x95_c26022bd.jpg',
        title: '大连海洋和sfa',
        desc: '大连海洋和sfa大连海洋和sfa大连海洋和sfa大连海洋和sfa'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/tts3/1702/78/4a80960e1406bc02.jpg_r_390x260x95_c26022bd.jpg',
        title: '大连海洋和sfa',
        desc: '大连海洋和sfa大连海洋和sfa大连海洋和sfa大连海洋和sfa'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .recommed-title
    margin-top .2rem
    line-height .5rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
  .item-img
    width 100%
    padding .1rem
  .item-info
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .28rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
