<template>
  <div id="pic" class="pic">
    <!-- 图片页面链接 -->
    <a :id="'c'+cUrlName"
      :class="cUrlName+' aN'"
      @click="setTarget(cUrlName)"
      @contextmenu="setCDU($event)"
      :href="cUrl + sVal"
      target="sContent"
      v-for="(cUrl, cUrlName) in this.urlList.pic"
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
      const sOArr=Object.keys(this.sameOrigin.pic)
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
.pic
  font 900 22px / 1.5em 'Lobster'

  .aN
    color #fff
    text-decoration none

    li
      list-style-image url('../../assets/img/currentTag.svg')

    .Unsplash, .pixabay, .freepik, .visualhunt
      list-style-image url('../../assets/img/newTag.svg')

    &:hover
      color #0e918c
</style>
