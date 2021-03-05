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
      title: 'search'
    },
    component: search
  },
  {
    path: '/video',
    meta: {
      title: 'video'
    },
    component: video
  },
  {
    path: '/music',
    meta: {
      title: 'music'
    },
    component: music
  },
  {
    path: '/pic',
    meta: {
      title: 'pic'
    },
    component: pic
  },
  {
    path: '/map/',
    meta: {
      title: 'map'
    },
    component: map
  },
  {
    path: '/set/',
    meta: {
      title: 'set'
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