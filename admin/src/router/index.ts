import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        name: 'home',
        path: '/',
        component: async () => import('../views/Home.vue')
      },
      {
        name: 'test',
        path: '/test',
        component: async () => import('../views/GraphQL.vue')
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: async () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
