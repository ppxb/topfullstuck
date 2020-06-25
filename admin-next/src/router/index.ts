import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Components from '../views/Components.vue'
import Login from '../views/Login.vue'
import { CLayout } from '../components'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: CLayout,
    children: [
      {
        path: '/',
        name: 'comp',
        component: async () => import('../views/Components.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
