import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/PaginaAnuncio',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/',
      name: 'ParticularProficional',
      component: () => import('../views/ParticularProficional.vue'),
    },
    {
      path: '/loginusu',
      name: 'login',
      component: () => import('../views/LoginUsuario.vue'),
    },
    {
      path: '/Cadastro',
      name: 'cadastroCorretor',
      component: () => import('../views/Cadastro.vue'),
    },
    {
      path:'/Detalhes',
      name: 'detalhesDoAnuncio',
      component: () => import('../components/DetalhesDoAnuncio.vue') 
    },
    {
      path:'/Favoritos',
      name: 'Favoritos',
      component: () => import('../views/Favoritos.vue') 
    }
  ],
})

export default router
