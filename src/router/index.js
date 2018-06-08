import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Home from '@/views/Home'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: {
        title: store.state.routes.home.title,
        description: store.state.routes.home.description,
        events: store.getters['events/events']
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      props: {
        title: store.state.routes.about.title,
        description: store.state.routes.about.description,
        about: store.getters['about/about']
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
