import { createRouter, createWebHistory } from 'vue-router'
import CadastroViewVue from '@/views/CadastroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CadastroCliente',
      component: CadastroViewVue
    },

  ]
})

export default router
