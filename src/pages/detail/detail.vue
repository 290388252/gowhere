<template>
    <div>
      <detail-banner :gallaryImgs="gallaryImgs"/>
      <detail-header/>
      <div class="container"></div>
    </div>
</template>

<script>
import DetailBanner from './components/banenr'
import DetailHeader from './components/header'
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      gallaryImgs: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader
  },
  methods: {
    getDetailInfo () {
      axios.get(`/api/detail.json`).then(res => {
        res = res.data
        if (res.ret) {
          this.gallaryImgs = res.data.gallaryImgs
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
