import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import home from './modules/home'

Vue.use(Vuex)

// 路由的状态
const state = {}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    home
  },
  strict: debug
})
