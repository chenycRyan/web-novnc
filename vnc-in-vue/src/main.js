import '@babel/polyfill'
import Vue from 'vue'
import axios from './network/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// 日期转换插件
import moment from 'moment'
import Vuex from 'vuex'
/* ---iview4.0---*/
// import ViewUI from 'view-design'
// import 'view-design/dist/styles/iview.css'
import util from './utils'
import './styles/common.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuex) // 注入 Vuex
// Vue.use(ViewUI)
Vue.use(ElementUI)
Vue.prototype.$moment = moment
Vue.prototype.$util = util
// 将i18n挂载在vue实例下
Vue.locale = () => {}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
