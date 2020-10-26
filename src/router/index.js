import Vue from "vue";
import VueRouter from "vue-router";

const search = () => import('../views/category/search.vue');
const video = () => import('../views/category/video.vue');
const music = () => import('../views/category/music.vue');
const pic = () => import('../views/category/pic.vue');
const map = () => import('../views/category/map.vue');
const set = () => import('../views/category/set.vue');

Vue.use(VueRouter);

const routes = [{
    path: '',
    redirect: '/search'
  },
  {
    path: '/search',
    meta: {
      title: '搜索'
    },
    component: search
  },
  {
    path: '/video',
    meta: {
      title: '视频'
    },
    component: video
  },
  {
    path: '/music',
    meta: {
      title: '音乐'
    },
    component: music
  },
  {
    path: '/pic',
    meta: {
      title: '图片'
    },
    component: pic
  },
  {
    path: '/map/',
    meta: {
      title: '地图'
    },
    component: map
  },
  {
    path: '/set/',
    meta: {
      title: '设置'
    },
    component: set
  }
];

const router = new VueRouter({
  routes
});
// 配置路由标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
})


export default router;