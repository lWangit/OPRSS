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
      dU: localStorage.getItem('dU'),
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
      document.querySelector('#sBtn').target = 'sContent'
      const sOArr = Object.values(this.sameOrigin.search)
        .concat(Object.values(this.sameOrigin.video))
        .concat(Object.values(this.sameOrigin.pic))
        .concat(Object.values(this.sameOrigin.map))
      for (let i of sOArr) {
        if (this.dU === i || this.cU === i) {
          document.querySelector('#sBtn').target = '_blank'
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
    aClick(lS,rD) {
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
          this.aClick(lS,rD)
          break
        case '/video':
          lS = localStorage.getItem('vPDUN')
          this.aClick(lS,rD)
          break
        case '/music':
          lS = localStorage.getItem('muPDUN')
          this.aClick(lS,rD)
          break
        case '/pic':
          lS = localStorage.getItem('pPDUN')
          this.aClick(lS,rD)
          break
        case '/map':
          lS = localStorage.getItem('maPDUN')
          this.aClick(lS,rD)
          break
        case '/set':
          //
          break
      }
    }
  },
  computed: {
    // 获取store数据
    ...mapState(['pDUN', 'sVal', 'sameOrigin', 'urlList'])
  },
  // 页面内容更新自动设置跳转url
  updated() {
    // 判断全局默认url
    if (this.dU) {
      document.querySelector('#sBtn').href = this.dU + this.sVal
      // 判断当前页面默认url，并且执行跳转
    } else {
      this.cPD()
    }
  }
}
</script>

<style lang="stylus">
// 引入基本样式
@import './assets/css/base.css'

#app
  width 100%
  height 100%
  overflow hidden
  display -webkit-flex
  display flex
  justify-content flex-end

// 导航条
.navBar
  background #101322
  z-index 999
  display -webkit-flex
  display flex
  order 2

  ul
    width 2em
    list-style none
    display -webkit-flex
    display flex
    flex-flow wrap
    justify-content center
    align-content flex-start

    // 当前点击的导航图标
    .router-link-active
      background #0e918c
      color #fff

    .toggleBtn
      margin-bottom 20px

    // 导航图标
    li
      width 100%
      color #d6d2c4
      cursor pointer
      padding 5px 0
      margin-top 10px
      line-height 1em
      font-size 0.8em
      text-align center
      border-radius 5px
      -webkit-transition background ease-out 0.3s
      -moz-transition background ease-out 0.3s
      -o-transition background ease-out 0.3s
      transition background ease-out 0.3s
      display -webkit-flex
      display flex
      flex-wrap wrap
      justify-content center

      &:hover
        color #fff

      // nav区域显示/隐藏控制按钮
      .toggle
        width 77%
        height 3px
        border-radius 1px
        background #fff
        display block
        text-align center
        position relative
        transition all 0.3s

      // nav区显示时，控制按钮的样式
      .t2, .t3
        margin-top 5px

      .t1
        -webkit-transform-origin 3px 0px
        -moz-transform-origin 3px 0px
        -o-transform-origin 3px 0px
        transform-origin 3px 0px
        -webkit-transform rotate(45deg) translateX(4px)
        -moz-transform rotate(45deg) translateX(4px)
        -o-transform rotate(45deg) translateX(4px)
        transform rotate(45deg) translateX(4px)

      .t2
        opacity 0

      .t3
        -webkit-transform-origin 5px 5px
        -moz-transform-origin 5px 5px
        -o-transform-origin 5px 5px
        transform-origin 5px 5px
        -webkit-transform rotate(-45deg) translateX(4px)
        -moz-transform rotate(-45deg) translateX(4px)
        -o-transform rotate(-45deg) translateX(4px)
        transform rotate(-45deg) translateX(4px)

      // nav区隐藏时，控制按钮的样式
      .rotate1
        -webkit-transform-origin -1px top
        -moz-transform-origin -1px top
        -o-transform-origin -1px top
        transform-origin -1px top
        -webkit-transform rotate(0deg)
        -moz-transform rotate(0deg)
        -o-transform rotate(0deg)
        transform rotate(0deg)

      .rotate2
        opacity 1

      .rotate3
        -webkit-transform-origin 1px bottom
        -moz-transform-origin 1px bottom
        -o-transform-origin 1px bottom
        transform-origin 1px bottom
        -webkit-transform rotate(0deg)
        -moz-transform rotate(0deg)
        -o-transform rotate(0deg)
        transform rotate(0deg)

// 菜单栏
nav
  width 20%
  height 100%
  color #fff
  background #16192A
  align-self flex-start
  display -webkit-flex
  display flex
  flex-wrap wrap
  justify-content center
  align-content flex-start
  order 1

  // 搜索输入框区域
  .sWrap
    align-self flex-start
    display -webkit-flex
    display flex
    position relative

    // 搜索框
    .sBox
      width 100%
      padding 13px 40px 13px 14px
      margin 10px
      outline-style none
      border 1px solid #ccc
      border-radius 10px
      font-size 16px
      font-weight 700
      font-family 'Microsoft soft'

    // 搜索按钮
    .sBtn
      background transparent
      text-decoration none
      font-size 1.5em
      border-radius 5px
      align-self center
      position absolute
      right 12px

      &:hover
        color green

// 搜索内容
main
  width 100%
  height 100%
  display -webkit-flex
  display flex
  -webkit-transition all 0.3s
  -moz-transition all 0.3s
  -o-transition all 0.3s
  transition all 0.3s
  opacity 0.7

  // iframe部分
  .sContent
    width 100%
    height 95%
    margin 1% 2%
    border none
    border-radius 10px
    box-shadow 2px 2px 10px 20px rgba(0, 0, 0, 0.2)

// nav显示隐藏动画
.slide-enter-active
  -webkit-transition all 0.3s
  -moz-transition all 0.3s
  -o-transition all 0.3s
  transition all 0.3s

.slide-leave-active
  -webkit-transition all 0.3s cubic-bezier(1, 0.5, 0.8, 1)
  -moz-transition all 0.3s cubic-bezier(1, 0.5, 0.8, 1)
  -o-transition all 0.3s cubic-bezier(1, 0.5, 0.8, 1)
  transition all 0.3s cubic-bezier(1, 0.5, 0.8, 1)

.slide-enter, .slide-leave-active
  -webkit-transform translateX(30px)
  -moz-transform translateX(30px)
  -o-transform translateX(30px)
  transform translateX(30px)
  width 0
  opacity 0
</style>
