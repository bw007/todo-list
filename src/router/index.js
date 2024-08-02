import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { menu } from '@/stores/menu'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardLayout,
      children: [
        ...menu
      ]
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import("@/layouts/AuthLayout.vue"),
      children: [
        {
          path: '/auth/signin',
          name: 'SignIN',
          component: () => import("@/views/auth/SignIn.vue"),
        }
      ]
    }
  ]
})

export default router
