<template>
  <div>
    <home-header/>
    <home-swiper :swiperList="swiperList"/>
    <home-icons :iconList="iconList"/>
    <home-recommed :recommendList="recommendList"/>
    <home-weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommed from './components/recommed'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommed,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      recommendList: [],
      weekendList: [],
      iconList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(res => {
        res = res.data
        if (res.ret) {
          this.swiperList = res.data.swiperList
          this.iconList = res.data.iconList
          this.recommendList = res.data.recommendList
          this.weekendList = res.data.weekendList
        }
      })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
