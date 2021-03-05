<template>
  <div id="video" class="video">
    <a
      :id="'c'+cUrlName"
      :class="cUrlName+' aN'"
      @click="setTarget(cUrlName)"
      :href="cUrl + sVal"
      target="sContent"
      v-for="(cUrl, cUrlName) in this.urlList.video"
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
      let sOArr = Object.keys(this.sameOrigin.video)
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
.video
  font 900 22px / 1.5em 'Lobster'

  .aN
    color #fff
    text-decoration none

    li
      list-style-image url('../../assets/img/currentTag.svg')

    .AcFun, .YOUKU, .Imeiju
      list-style-image url('../../assets/img/newTag.svg')

    &:hover
      color #0e918c
</style>
