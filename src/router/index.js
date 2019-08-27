import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import navigationDrawer from '@/components/navigationDrawer'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/navigationDrawer',
            name: 'navigationDrawer',
            component: navigationDrawer
        },
    ]
  })