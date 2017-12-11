import Vue from 'vue'
import Router from 'vue-router'
import buyInstance from '@/components/buyInstance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'buyInstance',
      component: buyInstance
    }
  ]
})
