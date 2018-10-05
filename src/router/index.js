import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Games from '@/components/Games'
import Service from '@/components/Service'
import CareersMaster from '@/components/careers/Master'
import CareersDetail from '@/components/careers/Detail'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/careers',
      name: 'CareersMaster',
      component: CareersMaster
    },
    {
      path: '/careers/:id',
      name: 'CareersDetail',
      component: CareersDetail
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    { 
      path: '*', 
      component: Home 
    }
  ]
})
