import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'splash',
    component: () => import(/* webpackChunkName: "about" */ '../views/Splash.vue')
  },
  {
    path: '/color',
    name: 'color',
    component: () => import(/* webpackChunkName: "about" */ '../views/Color.vue')
  },
  {
    path: '/style',
    name: 'style',
    component: () => import(/* webpackChunkName: "about" */ '../views/Style.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
