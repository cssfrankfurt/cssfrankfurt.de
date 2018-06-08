import Vue from 'vue'
import Vuex from 'vuex'
/* ---------- Persisted State -------- */
import VuexPersist from 'vuex-persist'
/* ----------  Modules  ---------- */
import events from './modules/events'
import loader from './modules/loader'
import about from './modules/about'
import routes from './modules/routes'

Vue.use(Vuex) // Tell our vue app to use Vuex

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage, // or window.sessionStorage or localForage
  reducer: state => ({})
})

/* ----------  Global Scope  ---------- */
const state = {
  form: 'contact'
}
const getters = {
  form() {
    return state.form
  }
}
const actions = {
  getFormType({commit}, type) {
    commit('setFormType', type)
  }
}
const mutations = {
  setFormType(state, type) {
    state.form = type
  }
}

/* ----------  Export the store so main.js can import it when we bootstrap the app  ---------- */
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    events,
    loader,
    about,
    routes
  },
  plugins: [vuexLocalStorage.plugin]
})
