import Vue from 'vue'
import Router from 'vue-router'
const PageComponent = () => import('@/components/PageComponent')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageComponent,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: PageComponent,
      props: true
    },
    {
      path: '/events',
      name: 'events',
      component: PageComponent,
      props: true
    },
    {
      path: '/contact',
      name: 'contact',
      component: PageComponent,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
