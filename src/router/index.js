import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import City from '../pages/city/city'
import Detail from '../pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 每次页面切换的时候都回到最顶部
    return {x: 0, y: 0}
  }
})
