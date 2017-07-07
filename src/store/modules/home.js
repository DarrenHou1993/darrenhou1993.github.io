import * as types from '../mutation-types'

// 初始状态
const state = {
  /**
   * 是否初始化
   */
  isInit: false
}

// getters
const getters = {}

// actions
const actions = {

}

// mutations
const mutations = {
  /**
   * 初始化home
   *
   * @param {any} state
   */
  [types.INIT_HOME](state) {
    state.isInit = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
