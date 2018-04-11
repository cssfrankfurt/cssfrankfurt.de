import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import HomePage from '@/components/home/HomePage'
import AboutPage from '@/components/about/AboutPage'
import EventsPage from '@/components/events/EventsPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      props: {
        title: store.state.routes.home.title,
        description: store.state.routes.home.description,
        tweets: store.getters['tweets/tweets']
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      props: {
        title: store.state.routes.about.title,
        description: store.state.routes.about.description,
        about: store.getters['about/about']
      }
    },
    {
      path: '/events',
      name: 'events',
      component: EventsPage,
      props: {
        title: store.state.routes.events.title,
        description: store.state.routes.events.description,
        events: store.getters['events/events']
      }
    }
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: PageComp,
    //   props: {
    //     title: store.state.routes.contact.title,
    //     description: store.state.routes.contact.description
    //   }
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
