import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design'

Vue.use(VueRouter)
Vue.use(ViewUI)
// 路由懒加载
const HelloWorld = () => import('@/views/HelloWorld.vue')

const routes = [
  {
    path: '/',
    redirect: 'HelloWorld',
    meta: '首页',
    component: HelloWorld
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    meta: '首页',
    component: HelloWorld
  },
  {
    path: '/test',
    name: 'test',
    meta: 'test',
    component: () => import('@/views/test.vue')
  }
]
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta
  // iview顶部loading
  // ViewUI.LoadingBar.start();
  next()
})
// eslint-disable-next-line no-unused-vars
router.afterEach(route => {
  // ViewUI.LoadingBar.finish();
})

export default router
