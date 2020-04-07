<template>
    <div>
      <detail-banner :gallaryImgs="gallaryImgs"/>
      <detail-header/>
      <div class="container">
        <detail-list :categoryList="categoryList"/>
      </div>
    </div>
</template>

<script>
import DetailBanner from './components/banenr'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailBanner,
    DetailList,
    DetailHeader
  },
  methods: {
    getDetailInfo () {
      axios.get(`/api/detail.json`).then(res => {
        res = res.data
        if (res.ret) {
          this.gallaryImgs = res.data.gallaryImgs
          this.categoryList = res.data.categoryList
          console.log(this.gallaryImgs)
        }
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped lang="stylus">
.container
  height 50rem
</style>
