import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/loginusu',
      name: 'login',
      component: () => import('../views/LoginUsuario.vue'),
    },
    {
      path: '/Cadastrousu',
      name: 'cadastro',
      component: () => import('../views/CadastroUsuario.vue'),
    },
    {
      path: '/Cadastro',
      name: 'cadastroCorretor',
      component: () => import('../views/Cadastro.vue'),
    },
  ],
})

export default router
