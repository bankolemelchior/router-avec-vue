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
      // beforeEnter: (to, from, next) => {
      //   console.log("to", to);
      //   console.log("from", from);
      //   // console.log("next" next);
      //   // if (userRole !== 'admin') {
      //   //     next('/unauthorized'); // Redirection si l'utilisateur n'est pas administrateur
      //   // } else {
      //   //     next();
      //   // }
      // },
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

      // Route Catch-All : La route /:pathMatch(.*)* est définie en dernier pour s'assurer qu'elle ne capte que les routes qui ne correspondent à aucune des autres définitions. Cela garantit que toute URL non reconnue sera redirigée vers le composant NotFound.
  },
  ]
})

export default router
