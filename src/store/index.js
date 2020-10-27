import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sVal: '',
    dU: '',
    // 无法在iframe加载的链接
    sameOrigin: {
      search: {
        Google: 'https://www.google.com/#q=',
        Zhihu: 'https://www.zhihu.com/search?q=',
        Lookao: 'https://lookao.com/search?q='
      },
      video: {
        AcFun: 'https://www.acfun.cn/search?keyword=',
        YOUKU: 'https://so.youku.com/search_video/q_',
        Imeiju: 'https://www.imeiju.io/?s='
      },
      music: {
        NetEaseCloud: 'https://music.163.com/#/search/m/?s='
      },
      pic: {
        Unsplash: 'https://unsplash.com/s/photos/',
        pixabay: 'https://pixabay.com/images/search/',
        freepik: 'https://www.freepik.com/search?dates=any&format=search&query=',
        visualhunt: 'https://visualhunt.com/search/instant/?q='
      },
      map: {
        GoogleMap: 'https://www.google.com.hk/maps/place/'
      }
    },
    // 所有链接
    urlList: {
      search: {
        Google: 'https://www.google.com/#q=',
        Zhihu: 'https://www.zhihu.com/search?q=',
        Lookao: 'https://lookao.com/search?q=',
        Wiki: 'https://zh.wikipedia.org/zh-cn/index.php?search=',
        Bing: 'https://cn.bing.com/search?ensearch=1&q=',
        Baidu: 'https://www.baidu.com/s?wd=',
        Sougou: 'https://www.sogou.com/web?query=',
        Mijisou: 'https://mijisou.com/?q=',
        Info: 'http://www.info.com/serp?q='
      },
      video: {
        AcFun: 'https://www.acfun.cn/search?keyword=',
        YOUKU: 'https://so.youku.com/search_video/q_',
        Imeiju: 'https://www.imeiju.io/?s=',
        tengxun: 'https://v.qq.com/x/search/?q=',
        IQIYI: 'https://so.iqiyi.com/so/q_',
        bilibili: 'https://search.bilibili.com/all?keyword=',
        cmdyhd: 'https://www.cmdyhd.com/search.php?searchword=',
        haijie: 'https://seastmovie.com/?s=',
        yinfans: 'http://www.yinfans.me/?s=',
        LANGUANG: 'http://www.languang.co/?s=',
        chapaofan: 'https://www.chapaofan.com/search/'

      },
      music: {
        NetEaseCloud: 'https://music.163.com/#/search/m/?s=',
        QQMusic: 'https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=',
        kugou: 'https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=',
        migu: 'https://www.migu.cn/search.html?content=',
        lastfm: 'https://www.last.fm/zh/search?q=',
        streetvoice: 'https://streetvoice.cn/search/?q='
      },
      pic: {
        Unsplash: 'https://unsplash.com/s/photos/',
        pixabay: 'https://pixabay.com/images/search/',
        freepik: 'https://www.freepik.com/search?dates=any&format=search&query=',
        visualhunt: 'https://visualhunt.com/search/instant/?q=',
        Pexels: 'https://www.pexels.com/zh-cn/search/',
        colorhub: 'https://colorhub.me/search?tag=',
        picjumbo: 'https://picjumbo.com/search/',
        Gratisography: 'https://gratisography.com/?s=',
        LifeOfPix: 'https://www.lifeofpix.com/search/',
        Foodiesfeed: 'https://www.foodiesfeed.com/?s=',
      },
      map: {
        GoogleMap: 'https://www.google.com.hk/maps/place/',
        AMap: 'https://ditu.amap.com/search?query=',
        BaiduMap: 'https://map.baidu.com/search/',
        sogoMap: 'https://map.sogou.com/#c=',
        QQMap: 'https://map.qq.com/'
      }
    }
  },
  mutations: {
    // 接收搜索框的value
    setSVal(state, payload) {
      state.sVal = payload.cVal
    }
  }
})

export default store