<template>
  <div id="music" class="music">
    <!-- 音乐页面链接 -->
    <a :id="'c'+cUrlName"
      :class="cUrlName+' aN'"
      @click="setTarget(cUrlName)"
      :href="cUrl + sVal"
      target="sContent"
      v-for="(cUrl, cUrlName) in this.urlList.music"
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
    setTarget(cUrlName) {
      const sOArr=Object.keys(this.sameOrigin.music)
      for (const i of sOArr) {
        if (cUrlName == i) {
          document.querySelector(`#c${cUrlName}`).target = '_blank'
        }
      }
    }
  },
  computed: {
    // 获取store中的数据
    ...mapState(['sVal', 'sameOrigin', 'urlList'])
  }
}
</script>

<style lang="stylus">
.music
  font 900 22px / 1.5em 'KS-R'

  .aN
    color #FF8C00
    text-decoration none

    li
      list-style-image url('../../assets/img/currentTag.svg')

    .NetEaseCloud
      list-style-image url('../../assets/img/newTag.svg')

    &:hover
      color #fff
</style>
