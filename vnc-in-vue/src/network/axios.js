'use strict'
import axios from 'axios'

// 若需要引用VUE实例的变量
// import Vue from "vue";
// 若需要引用ivew的样式，以及cookie存取
// import VueCookies from "vue-cookies";
// import "view-design/dist/styles/iview.css";
// import iView from "view-design";

axios.defaults.retry = 4 // 设置重新请求次数
const config = {
  baseURL: window.appsettings.baseUrl,
  timeout: 50000
}
const instance = axios.create(config)
// axios拦截器，拦截发起请求前操作
instance.interceptors.request.use(
  config => {
    // 设置GET请求随机数
    if (config.method === 'get') {
      config.params = { ...config.params }
      config.params['v'] = new Date().getTime()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// axios拦截器，拦截发起返回前操作
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
