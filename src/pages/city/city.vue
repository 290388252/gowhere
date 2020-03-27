<template>
    <div>
      <city-header/>
      <city-search/>
      <city-list/>
    </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
export default {
  name: 'city',
  components: {
    CityHeader,
    CityList,
    CitySearch
  }
}
</script>

<style scoped lang="stylus">

</style>
