import { createRouter, createWebHistory } from 'vue-router'
import UserComponent from '../components/dashboardComponents/AllUserComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../')
      // component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../components/dashboardComponents/AllProductComponent.vue')

    },
    {
      path: '/users',
      name: 'users',
      component: UserComponent,
      children: [
        {path: '/show-user/:id', component: () => import('../components/dashboardComponents/ShowUserComponent.vue')}
      ]

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    }
  ]
})

export default router
