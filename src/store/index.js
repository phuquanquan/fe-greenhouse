import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: true,
    sidebarUnfoldable: false,
  },
  mutations: {
    toggleSidebar(state) {
      // state.sidebarVisible = !state.sidebarVisible
      state.sidebarVisible = true
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = false
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  actions: {},
  modules: {},
})
