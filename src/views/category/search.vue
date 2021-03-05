<template>
  <div id="search" class="search">
    <!-- 搜索页面链接 -->
    <a
      :id="'c'+cUrlName"
      :class="cUrlName+' aN'"
      @click="setTarget($event, cUrlName)"
      :href="cUrl + sVal"
      target="sContent"
      v-for="(cUrl, cUrlName) in this.urlList.search"
      :key="cUrlName"
      ><li :class="cUrlName">{{ cUrlName }}</li></a
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      //
    }
  },
  methods: {
    setTarget(e, cUrlName) {
      const sOArr = Object.keys(this.sameOrigin.search)
      for (const i of sOArr) {
        if (cUrlName == i) {
          document.querySelector(`#c${cUrlName}`).target = '_blank'
        }
      }
    }
  },
  computed: {
    // 获取store中的数据
    ...mapState(['du','pDUs','sVal', 'sameOrigin', 'urlList'])
  }
}
</script>

<style lang="stylus">
.search
  font 900 22px / 1.5em 'Lobster'

  .aN
    color #fff
    text-decoration none

    li
      list-style-image url('../../assets/img/currentTag.svg')

    .Google, .Zhihu, .Lookao
      list-style-image url('../../assets/img/newTag.svg')

    &:hover
      color #0e918c
</style>
