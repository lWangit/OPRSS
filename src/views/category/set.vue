<template>
  <div id="set" class="set">
    <h2>全局默认</h2>
    <select @change="sDU($event)" name="defSel" id="defSel" class="defSel" v-model="dUN">
      <option value="">null</option>
      <optgroup label="search">
        <option
          v-for="(url, urlName) in this.urlList.search"
          :key="urlName"
          :value="url"
          >{{ urlName }}</option
        ></optgroup
      >
      <optgroup label="video">
        <option
          v-for="(url, urlName) in this.urlList.video"
          :key="urlName"
          :value="url"
          >{{ urlName }}</option
        ></optgroup
      >
      <optgroup label="music">
        <option
          v-for="(url, urlName) in this.urlList.music"
          :key="urlName"
          :value="url"
          >{{ urlName }}</option
        ></optgroup
      >
      <optgroup label="pic">
        <option
          v-for="(url, urlName) in this.urlList.pic"
          :key="urlName"
          :value="url"
          >{{ urlName }}</option
        ></optgroup
      >
      <optgroup label="map">
        <option
          v-for="(url, urlName) in this.urlList.map"
          :key="urlName"
          :value="url"
          >{{ urlName }}</option
        ></optgroup
      >
    </select>
    <h2>页面默认</h2>
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
      dUN: ''
    }
  },
  methods: {
    // 全局默认
    sDU(){
      localStorage.setItem('dU', this.dUN)
    },
    // 页面默认
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
    }
  },
  computed: {
    // 获取store中的数据
    ...mapState(['pDUN', 'dU', 'sVal', 'urlList']),
    dU() {
      return localStorage.getItem('dU')
    },
    pDUs() {
      return localStorage.getItem('sPDUN')
    },
    pDUv() {
      return localStorage.getItem('vPDUN')
    },
    pDUmu() {
      return localStorage.getItem('muPDUN')
    },
    pDUp() {
      return localStorage.getItem('pPDUN')
    },
    pDUma() {
      return localStorage.getItem('maPDUN')
    }
  },
  mounted() {
    if (!this.pDUs) {
      localStorage.setItem('sPDUN', 'Bing')
    };
    if (!this.pDUv) {
      localStorage.setItem('vPDUN', 'IQIYI')
    };
    if (!this.pDUmu) {
      localStorage.setItem('muPDUN', 'migu')
    };
    if (!this.pDUp) {
      localStorage.setItem('pPDUN', 'colorhub')
    };
    if (!this.pDUma) {
      localStorage.setItem('maPDUN', 'AMap')
    };
    document.getElementById(this.pDUs).setAttribute('selected', 'true')
    document.getElementById(this.pDUv).setAttribute('selected', 'true')
    document.getElementById(this.pDUmu).setAttribute('selected', 'true')
    document.getElementById(this.pDUp).setAttribute('selected', 'true')
    document.getElementById(this.pDUma).setAttribute('selected', 'true')
    document.getElementById(this.pDUma).setAttribute('selected', 'true')
  }
}
</script>

<style lang="stylus">
h3
select
  -webkit-transform translateX(10px)
  -ms-transform translateX(10px)
  -moz-transform translateX(10px)
  -o-transform translateX(10px)
  transform translateX(10px)
  width 100%
.defSel
  margin 10px 0
option
  font-size 16px
  padding 5px 20px
  width 100%
  -webkit-transition 0.25s ease-in-out
  -ms-transition 0.25s ease-in-out
  -moz-transition 0.25s ease-in-out
  -o-transition 0.25s ease-in-out
  transition 0.25s ease-in-out
</style>
