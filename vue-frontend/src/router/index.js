import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Eventinfo from '../views/Eventinfo.vue'

const routes = [
  { path: '/', name: 'Home', component: Homepage },
  { path: '/event/:id', name: 'Eventinfo', component: Eventinfo, props: true }, // <--- props: true
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router