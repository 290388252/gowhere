<template>
    <div>
      <detail-banner :gallaryImgs="gallaryImgs"/>
    </div>
</template>

<script>
import DetailBanner from './components/banenr'
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      gallaryImgs: []
    }
  },
  components: {
    DetailBanner
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

<style scoped>

</style>
