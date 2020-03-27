<template>
    <div>
      <city-header/>
      <city-search/>
      <city-list/>
      <city-alphabet/>
    </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
export default {
  name: 'city',
  components: {
    CityAlphabet,
    CityHeader,
    CityList,
    CitySearch
  }
}
</script>

<style scoped lang="stylus">

</style>
