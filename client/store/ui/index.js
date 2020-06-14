export const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
export const LOCATION_CHANGE = 'router/ROUTE_CHANGED'
export const WINDOW_RESIZE = 'WINDOW_RESIZE'
export const LANG_JAPANESE = 'LANG_JAPANESE'
export const LANG_KOREAN = 'LANG_KOREAN'

const state = {
  sidebarOpened: false,
  obfuscatorActive: false,
  isMobile: false,
  language: 0
}

const mutations = {
  [CLOSE_SIDEBAR] (state) {
    state.sidebarOpened = false
    state.obfuscatorActive = false
  },
  [OPEN_SIDEBAR] (state) {
    state.sidebarOpened = true
    state.obfuscatorActive = true
  },
  [LOCATION_CHANGE] (state) {
    state.sidebarOpened = false
    state.obfuscatorActive = false
  },
  [WINDOW_RESIZE] (state) {
    const { innerWidth } = window
    const isMobile = innerWidth > 1024
    state.isMobile = isMobile
    state.sidebarOpened = isMobile
  },
  [LANG_JAPANESE] (state) {
    state.language = 0
  },
  [LANG_KOREAN] (state) {
    state.language = 1
  }
}

const actions = {
  openSidebar ({ commit }) {
    commit({ type: OPEN_SIDEBAR })
  },
  closeSidebar ({ commit }) {
    commit({ type: CLOSE_SIDEBAR })
  },
  handleResize ({ commit }) {
    commit({ type: WINDOW_RESIZE })
  },
  langJapanese ({ commit }) {
    commit({ type: LANG_JAPANESE })
  },
  langKorean ({ commit }) {
    commit({ type: LANG_KOREAN })
  }
}

export default {
  state,
  actions,
  mutations
}
