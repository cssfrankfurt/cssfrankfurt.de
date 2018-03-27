// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// Vue Router
import router from './router'
// Vuex Store
import store from './store/store'

import VueMediaQueryMixin from 'vue-media-query-mixin'

Vue.config.productionTip = false

Vue.use(VueMediaQueryMixin, {framework: 'bootstrap'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
