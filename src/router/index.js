import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Servers from '../views/Servers.vue'
import Tools from '../views/Tools.vue'
import SupervisionTools from '../views/SupervisionTools.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/servers',
    name: 'Servers',
    component: Servers
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/supervision-tools',
    name: 'SupervisionTools',
    component: SupervisionTools
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
