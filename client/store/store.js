import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const CHANGE_LANG_JP = 'CHANGE_LANG_JP'
export const CHANGE_LANG_KR = 'CHANGE_LANG_KR'

const store = new Vuex.Store({
  state: {
    language: 0
  },
  mutations: {
    [CHANGE_LANG_JP] (state) {
      state.language = 0
    },
    [CHANGE_LANG_KR] (state) {
      state.language = 1
    }
  },
  actions: {
    changeLangJP ({ commit }) {
      commit({ type: CHANGE_LANG_JP })
    },
    changeLangKR ({ commit }) {
      commit({ type: CHANGE_LANG_KR })
    }
  }
})

export default store
