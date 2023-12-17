import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Buscar from '../views/BuscarVagas.vue'
import Cadastrar from '../views/CadastrarVagas.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: Buscar
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: Cadastrar
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
