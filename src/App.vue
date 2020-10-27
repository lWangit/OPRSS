<template>
  <div id="app" class=" clear-fix">
    <!-- 图标字体CDN -->
    <link
      rel="stylesheet"
      href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"
    />
    <!-- 导航条 -->
    <div id="navBar" class="navBar">
      <ul>
        <!-- 控制nav区显示隐藏 -->
        <li class="toggleBtn" @click="switchNav($event)">
          <span id="toggle1" class="toggle t1"></span>
          <span id="toggle2" class="toggle t2"></span>
          <span id="toggle3" class="toggle t3"></span>
        </li>
        <!-- 路由跳转按钮 -->
        <router-link
          id="navRouter"
          v-for="(icon, navRouter) in navBar"
          :key="navRouter"
          :to="navRouter"
          tag="li"
          ><i :class="'fa ' + icon + ' fa-2x'" aria-hidden="true"></i
        ></router-link>
      </ul>
    </div>
    <!-- 导航 -->
    <transition name="slide">
      <nav v-show="showNav">
        <div id="sWrap" class="sWrap">
          <!-- 搜索框 -->
          <input
            @input="inputVal($event, cVal)"
            @keydown.enter="submitS"
            id="sBox"
            class="sBox"
            v-model="cVal"
            type="text"
            autofocus="autofocus"
            placeholder="Search.."
          />
          <!-- 提交按钮 -->
          <a id="sBtn" class="sBtn" href="" @click="setSBtn()"
            ><i class="fa fa-search" aria-hidden="true"></i
          ></a>
        </div>
        <!-- 菜单 -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </nav>
    </transition>

    <!-- 搜索内容 -->
    <main>
      <iframe
        scrolling="auto"
        id="sContent"
        class="sContent"
        name="sContent"
        src="https://cn.bing.com/"
        allowfullscreen="true"
      ></iframe>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      // nav区显示隐藏参数
      showNav: true,
      cVal: '',
      // 导航条图标
      navBar: {
        search: 'fa-at',
        video: 'fa-video-camera',
        music: 'fa-music',
        pic: 'fa-picture-o',
        map: 'fa-map-marker',
        set: 'fa-cog fa-spin'
      }
    }
  },
  methods: {
    // 设置搜索按钮target属性
    setSBtn() {
      const dUN = localStorage.getItem('dUN')
      document.querySelector('#sBtn').target = 'sContent'
      const sOArr = Object.keys(this.sameOrigin.search)
        .concat(Object.keys(this.sameOrigin.video))
        .concat(Object.keys(this.sameOrigin.pic))
        .concat(Object.keys(this.sameOrigin.map))
      for (let i of sOArr) {
        if (dUN === i) {
          document.querySelector('#sBtn').target = '_blank'
        }
      }
      for (let i in this.urlList) {
        const obj = this.urlList[i]
        for (let j in obj) {
          if (dUN == j) {
            console.log(document.querySelector('#sBtn'))
            document.querySelector('#sBtn').href = obj[dUN] + this.sVal
          }
        }
      }
    },
    // 设置搜索框的提交事件
    submitS() {
      document.querySelector('#sBtn').click()
    },
    // 传递当前搜索框的value至store
    inputVal(e, cVal) {
      this.$store.commit({
        type: 'setSVal',
        cVal
      })
    },
    // 控制nav区域显示隐藏，同时设置控制按钮的样式
    switchNav() {
      this.showNav = !this.showNav
      if (this.showNav) {
        document.querySelector('.t1').className = 'toggle t1'
        document.querySelector('.t2').className = 'toggle t2'
        document.querySelector('.t3').className = 'toggle t3'
      } else {
        document.querySelector('.t1').className = 'toggle t1 rotate1'
        document.querySelector('.t2').className = 'toggle t2 rotate2'
        document.querySelector('.t3').className = 'toggle t3 rotate3'
      }
    },
    // 各页面点击事件
    aClick(lS, rD) {
      rD = document.getElementById(`c${lS}`)
      for (let i of document.querySelectorAll('.aN')) {
        i.style.textDecoration = 'none'
        i.style.textShadow = 'none'
      }
      rD.click()
      rD.style.textDecoration = 'underline'
      rD.style.textShadow = '0px 0px 3px #00FFFF'
      document.querySelector('#sBtn').href = rD.href
    },
    // 切换路由触发点击
    cPD() {
      let rD, lS
      const R = this.$route.path
      switch (R) {
        case '/search':
          lS = localStorage.getItem('sPDUN')
          this.aClick(lS, rD)
          break
        case '/video':
          lS = localStorage.getItem('vPDUN')
          this.aClick(lS, rD)
          break
        case '/music':
          lS = localStorage.getItem('muPDUN')
          this.aClick(lS, rD)
          break
        case '/pic':
          lS = localStorage.getItem('pPDUN')
          this.aClick(lS, rD)
          break
        case '/map':
          lS = localStorage.getItem('maPDUN')
          this.aClick(lS, rD)
          break
        case '/set':
          //
          break
      }
    }
  },
  computed: {
    // 获取store数据
    ...mapState(['sVal', 'sameOrigin', 'urlList']),
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
  // 页面内容更新自动设置跳转url
  updated() {
    // 判断全局默认url
    const dUN = localStorage.getItem('dUN')
    if (!dUN) {
      this.cPD()
    }
  },
  mounted() {
    if (!this.pDUs) {
      localStorage.setItem('sPDUN', 'Bing')
    }
    if (!this.pDUv) {
      localStorage.setItem('vPDUN', 'tengxun')
    }
    if (!this.pDUmu) {
      localStorage.setItem('muPDUN', 'migu')
    }
    if (!this.pDUp) {
      localStorage.setItem('pPDUN', 'Pexels')
    }
    if (!this.pDUma) {
      localStorage.setItem('maPDUN', 'AMap')
    }
  }
}
</script>

<style lang="stylus">
// 基本样式
@import 'assets/css/base/base.css'
// 导航条
@import 'assets/css/navbar.styl'
// 导航链接
@import 'assets/css/nav.styl'
// 搜索内容
@import 'assets/css/main.styl'
</style>
