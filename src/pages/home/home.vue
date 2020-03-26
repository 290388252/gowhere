<template>
  <div>
    <home-header/>
    <home-swiper/>
    <home-icons/>
    <home-recommed/>
    <home-weekend/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommed from './components/recommed'
import HomeWeekend from './components/weekend'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommed,
    HomeWeekend
  }
}
</script>

<style scoped>

</style>
