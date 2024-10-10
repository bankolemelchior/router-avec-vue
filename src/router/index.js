import { createRouter, createWebHistory } from 'vue-router'
import UserComponent from '../components/dashboardComponents/AllUserComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: '/login',
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/Auth/SignUpView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: '/users',
          name: 'users',
          component: UserComponent,    
        },
        {path: '/show-user/:id', component: () => import('../components/dashboardComponents/ShowUserComponent.vue')},
        {
          path: '/products',
          name: 'products',
          component: () => import('../components/dashboardComponents/AllProductComponent.vue')
    
        },
    

    
      ]
    },
    {
      path: '/:pathMatch(.*)*', // Route catch-all
      component: () => import('../views/404NotFound.vue'),
  },
  ]
})

export default router
