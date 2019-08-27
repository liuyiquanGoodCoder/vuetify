import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import topHome from '@/components/topHome'
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
            path: '/test',
            name: 'topHome',
            component: topHome
        },
        {
            path: '/navigationDrawer',
            name: 'navigationDrawer',
            component: navigationDrawer
        },
    ]
  })