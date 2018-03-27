import Vue from 'vue'
import Router from 'vue-router'
const HomePage = () => import('@/components/home/HomePage')
const AboutPage = () => import('@/components/about/AboutPage')
const EventPage = () => import('@/components/events/EventPage')
const ContactPage = () => import('@/components/contact/ContactPage')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/events',
      name: 'events',
      component: EventPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
