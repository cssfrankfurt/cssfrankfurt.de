// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMediaQueryMixin from 'vue-media-query-mixin'
// Vue Router
import router from './router'
// Vuex Store
import store from './store/store'
// FontAwesome Brands
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faMeetup from '@fortawesome/fontawesome-free-brands/faMeetup'
import faMedium from '@fortawesome/fontawesome-free-brands/faMedium'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn'
import faXing from '@fortawesome/fontawesome-free-brands/faXing'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
// FontAwesome
import faCalendarAlt from '@fortawesome/fontawesome-free-regular/faCalendarAlt'
import faTag from '@fortawesome/fontawesome-free-solid/faTag'
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
import faWindowMaximize from '@fortawesome/fontawesome-free-regular/faWindowMaximize'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers'

fontawesome.library.add(faTwitter, faMeetup, faMedium, faInstagram, faCodepen, faGithub, faLinkedinIn, faXing, faYoutube, faCalendarAlt, faTag, faInfoCircle, faWindowMaximize, faMapMarkerAlt, faUsers)

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
