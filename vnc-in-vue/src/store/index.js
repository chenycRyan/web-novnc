import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 定义初始化数据
const state = {
  taskId: 'hello'
}
// 记录默认state数据
const initState = {
  taskId: 'hello'
}
// mutation只能处理同步函数
const mutations = {
  updateTaskObj(state, params) {
    state.taskObj = params
  },
  // 清空Vuex里面的数据
  // ES6 assign方法用于重新赋值，将initState源对象覆盖state目标对象
  resetState() {
    Object.assign(state, initState)
  }
}
// actions可以处理同异步数据
const actions = {}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
