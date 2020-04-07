<template>
    <div>
      <div class="item" v-for="(item, index) of categoryList" :key="index">
        <div class="item-title border-bottom">
          <span class="item-title-icon"/>
          {{item.title}}
        </div>
        <div v-if="item.children" style="padding: 0 .2rem">
          <detail-list :categoryList="item.children"/>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    categoryList: Array
  }
}
</script>

<style scoped lang="stylus">
.item-title
  position relative
  left .06rem
  top .06rem
  line-height .8rem
  font-size .32rem
  padding 0 .2rem
.item-title-icon
  display inline-block
  width .36rem
  height .36rem
  background : url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
  margin-right .1rem
  background-size .4rem 3rem
</style>
