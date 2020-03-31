<template>
    <div>
      <city-header/>
      <city-search :cities="cities"/>
      <city-list :cities="cities" :hotCities="hotCities" :letter="letter"/>
      <city-alphabet :cities="cities" @change="handleLetterChange"/>
    </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    CityAlphabet,
    CityHeader,
    CityList,
    CitySearch
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(res => {
        res = res.data
        if (res.ret) {
          this.cities = res.data.cities
          this.hotCities = res.data.hotCities
        }
      })
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped lang="stylus">

</style>
