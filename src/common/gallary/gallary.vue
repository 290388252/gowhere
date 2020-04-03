<template>
    <div class="container">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for='item of gallaryImgs' :key='item.id'>
            <img style="width: 100%" :src='item' alt="去哪儿门票" @click="handleSwiperImg"/>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'gallary',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }// 三张轮播，使用变量循环
    }
  },
  methods: {
    handleSwiperImg () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
.container >>> .swiper-container
  overflow: inherit
.container
  display flex
  flex-direction column
  justify-content center
  position fixed
  left:0
  right 0
  top 0
  bottom 0
  background #222222
  z-index 99
  .wrapper
    width 100%
    height 0
    padding-bottom 100%
    .swiper-pagination
      color white
      bottom -1rem
</style>
