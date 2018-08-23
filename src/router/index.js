import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Admin from '@/components/Admin/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
