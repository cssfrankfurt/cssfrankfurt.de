// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMediaQueryMixin from 'vue-media-query-mixin'

// Vue Router
import router from './1_router'
// Vuex Store
import store from './2_store/store'
// FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons'
import {
  faInfoCircle,
  faWindowMaximize,
  faMapMarkerAlt,
  faUsers,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faMeetup,
  faMedium,
  faInstagram,
  faCodepen,
  faGithub,
  faLinkedinIn,
  faXing,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
  faTwitter,
  faMeetup,
  faMedium,
  faInstagram,
  faCodepen,
  faGithub,
  faLinkedinIn,
  faXing,
  faYoutube,
  faCalendarAlt,
  faInfoCircle,
  faWindowMaximize,
  faMapMarkerAlt,
  faUsers,
  faQuoteLeft
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
