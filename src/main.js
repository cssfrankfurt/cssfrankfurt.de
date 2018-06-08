// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMediaQueryMixin from 'vue-media-query-mixin'
import VeeValidate from 'vee-validate'

// Vue Router
import router from './1_router'
// Vuex Store
import store from './2_store/store'
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
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
import faWindowMaximize from '@fortawesome/fontawesome-free-regular/faWindowMaximize'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers'
import faQuoteLeft from '@fortawesome/fontawesome-free-solid/faQuoteLeft'

fontawesome.library.add(faTwitter, faMeetup, faMedium, faInstagram, faCodepen, faGithub, faLinkedinIn, faXing, faYoutube, faCalendarAlt, faInfoCircle, faWindowMaximize, faMapMarkerAlt, faUsers, faQuoteLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueMediaQueryMixin, {framework: 'bootstrap'})

Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
