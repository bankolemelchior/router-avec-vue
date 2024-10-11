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
      path: '/logni',
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/Auth/SignUpView.vue')
    },
    {
      path: '/agent',
      name: 'agent',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/dashboard:user',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      beforeEnter: (to, from) => {
        console.log(to, from);
        
      },
   
      children: [
        {
          path: '/users:user',
          name: 'users',
          component: UserComponent,    
        },
        {path: '/show-user/:user/:id', component: () => import('../components/dashboardComponents/ShowUserComponent.vue')},
        {
          path: '/products:user',
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

/**
 * Globaux : Ces guards s'appliquent à toutes les transitions de route. Ils sont définis au niveau du routeur et s'exécutent avant chaque changement de route.
 */
// router.beforeEach((to, from) => {
//   console.log("to", to);
//   console.log("from", from);
//   console.log("Le guard beforeEach");

  
// })

// router.afterEach((to, from) => {
//   console.log("Le guard afterEach");
  
// })

export default router
