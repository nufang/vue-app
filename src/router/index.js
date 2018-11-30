import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

import Shop from '../pages/Shop/Shop'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Msite',
      name: 'Msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Shop',
      name: 'shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },{
          path: '/shop/ratings',
          component: ShopRatings
        },{
          path: '/shop/info',
          component: ShopInfo
        },{
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/msite',
      meta: {
        showFooter: true
      }
    }
  ]
})
