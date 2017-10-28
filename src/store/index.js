import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: null
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  }
})
export default store
