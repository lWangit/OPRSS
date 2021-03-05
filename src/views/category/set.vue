<template>
  <div id="set" class="set">
    <h2>All</h2>
    <select
      @change="sDU($event)"
      name="defSel"
      id="defSel"
      class="defSel"
      v-model="dUName"
    >
      <option value="">null</option>
      <optgroup label="search">
        <option
          :id="'f' + urlName"
          v-for="(url, urlName) in this.urlList.search"
          :key="urlName"
          :value="urlName"
          :dU="url"
          >{{ urlName }}</option
        ></optgroup
      >
      <optgroup label="video">
        <option
          :id="'f' + urlName"
          :value="urlName"
          v-for="(url, urlName) in this.urlList.video"
          :key="urlName"
          :dU="url"
          >{{ urlName }}</option
        ></optgroup
      >
      <optgroup label="music">
        <option
          :id="'f' + urlName"
          :value="urlName"
          v-for="(url, urlName) in this.urlList.music"
          :key="urlName"
          :dU="url"
          >{{ urlName }}</option
        ></optgroup
      >
      <optgroup label="pic">
        <option
          :id="'f' + urlName"
          :value="urlName"
          v-for="(url, urlName) in this.urlList.pic"
          :key="urlName"
          :dU="url"
          >{{ urlName }}</option
        ></optgroup
      >
      <optgroup label="map">
        <option
          :id="'f' + urlName"
          :value="urlName"
          v-for="(url, urlName) in this.urlList.map"
          :key="urlName"
          :dU="url"
          >{{ urlName }}</option
        ></optgroup
      >
    </select>
    <h2>Page</h2>
    <h3>search</h3>
    <select
      @change="sPDU($event)"
      name="pDUS"
      id="pDUS"
      class="pDUS"
      v-model="pDUName.search"
    >
      <option
        :id="urlName"
        v-for="(url, urlName) in this.urlList.search"
        :key="urlName"
        :pDU="url"
        >{{ urlName }}</option
      >
    </select>
    <h3>video</h3>
    <select
      @change="vPDU($event)"
      name="pDUV"
      id="pDUV"
      class="pDUV"
      v-model="pDUName.video"
    >
      <option
        :id="urlName"
        v-for="(url, urlName) in this.urlList.video"
        :key="urlName"
        :pDU="url"
        >{{ urlName }}</option
      >
    </select>
    <h3>music</h3>
    <select
      @change="muPDU($event)"
      name="pDUMu"
      id="pDUMu"
      class="pDUMu"
      v-model="pDUName.music"
    >
      <option
        :id="urlName"
        v-for="(url, urlName) in this.urlList.music"
        :key="urlName"
        :pDU="url"
        >{{ urlName }}</option
      >
    </select>
    <h3>pic</h3>
    <select
      @change="pPDU($event)"
      name="pDUP"
      id="pDUP"
      class="pDUP"
      v-model="pDUName.pic"
    >
      <option
        :id="urlName"
        v-for="(url, urlName) in this.urlList.pic"
        :key="urlName"
        :pDU="url"
        >{{ urlName }}</option
      >
    </select>
    <h3>map</h3>
    <select
      @change="maPDU($event)"
      name="pDUMa"
      id="pDUMa"
      class="pDUMa"
      v-model="pDUName.map"
      autocomplete="off"
    >
      <option
        :id="urlName"
        v-for="(url, urlName) in this.urlList.map"
        :key="urlName"
        :pDU="url"
        >{{ urlName }}</option
      >
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      pDUName: {
        search: '',
        video: '',
        music: '',
        pic: '',
        map: ''
      },
      dUName: ''
    }
  },
  methods: {
    // 全局默认url
    sDU(e) {
      localStorage.setItem('dUN', e.target.value)
    },
    // 页面默认url
    sPDU(e) {
      localStorage.setItem('sPDUN', e.target.value)
    },
    vPDU(e) {
      localStorage.setItem('vPDUN', e.target.value)
    },
    muPDU(e) {
      localStorage.setItem('muPDUN', e.target.value)
    },
    pPDU(e) {
      localStorage.setItem('pPDUN', e.target.value)
    },
    maPDU(e) {
      localStorage.setItem('maPDUN', e.target.value)
    },
    // 设置页面默认url处于选中状态
    setSelected() {
      let fDUN = localStorage.getItem('dUN')
      if (fDUN) {
        document.getElementById('f' + fDUN).selected = true
      }
      let pDUs = localStorage.getItem('sPDUN')
      let pDUv = localStorage.getItem('vPDUN')
      let pDUmu = localStorage.getItem('muPDUN')
      let pDUp = localStorage.getItem('pPDUN')
      let pDUma = localStorage.getItem('maPDUN')
      document.getElementById(pDUs).selected = true
      document.getElementById(pDUv).selected = true
      document.getElementById(pDUmu).selected = true
      document.getElementById(pDUp).selected = true
      document.getElementById(pDUma).selected = true
      document.getElementById(pDUma).selected = true
    }
  },
  computed: {
    // 获取store中的数据
    ...mapState(['sVal', 'urlList'])
  },
  updated() {
    this.setSelected()
  },
  mounted() {
    this.setSelected()
  }
}
</script>

<style lang="stylus">
h2, h3
  font-family Lobster

h3, select
  -webkit-transform translateX(10px)
  -ms-transform translateX(10px)
  -moz-transform translateX(10px)
  -o-transform translateX(10px)
  transform translateX(10px)
  width 100%

.defSel
  margin 10px 0

select
  outline none
  border-radius 4px
  margin-bottom 5px

option
  border-radius 4px
  font-size 16px
  padding 5px 20px
  width 100%
  -webkit-transition 0.25s ease-in-out
  -ms-transition 0.25s ease-in-out
  -moz-transition 0.25s ease-in-out
  -o-transition 0.25s ease-in-out
  transition 0.25s ease-in-out
</style>
