import Vue from 'vue'
import Vuex from 'vuex'
/* ----------  Modules  ---------- */
import events from './modules/events'
import loader from './modules/loader'
import about from './modules/about'
import routes from './modules/routes'

Vue.use(Vuex) // Tell our vue app to use Vuex

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
  }
})
