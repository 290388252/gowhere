<template>
    <ul class="list">
      <li class="item" v-for="item of letter"
          :key="item"
          :ref="item"
          @click="handleLetterClick"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd">{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStates: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 第一个字母到顶部的距离。除去头部栏目
  },
  computed: {
    letter () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStates = true
    },
    handleTouchMove (e) {
      if (this.touchStates) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 79是头部栏高度
          const index = Math.floor((touchY - this.startY) / 17.6) // 17.6是每个字母的高度。touchY是第一个字母高度位置
          if (index >= 0 && index < this.letter.length) {
            this.$emit('change', this.letter[index])
          }
        }, 10)
      }
    },
    handleTouchEnd () {
      this.touchStates = true
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
.list
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  display flex
  flex-direction column
  justify-content center
  .item
    text-align center
    line-height .36rem
    color $bgColor
</style>
