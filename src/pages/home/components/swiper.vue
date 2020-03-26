<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for='item of swiperList' :key='item.id'>
      <img class='swiper-img' :src='item.imgUrl' alt="去哪儿门票" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }// 三张轮播，使用变量循环
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  width 100%
  height 0
  overflow: hidden
  padding-bottom 26.7%
  .swiper-img
    width 100%
</style>
