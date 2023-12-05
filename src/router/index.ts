import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CadastroView from '../views/CadastroView.vue'
import MainViewVue from '@/views/MainView.vue'
import SliderMainVue from '@/components/SliderMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: CadastroView
    },

    {
      path: "/login",
      name: 'Login',
      component: LoginView
    },

    {
      path: "/",
      name: "Main",
      component: MainViewVue
    },

    {
      path: "/slider",
      name: "Slider",
      component: SliderMainVue
    }

  ]
})

export default router
