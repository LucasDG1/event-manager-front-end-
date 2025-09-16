import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import EventInfo from '../views/EventInfo.vue'

const routes = [
  { path: '/', name: 'Home', component: Homepage },
  { path: '/event/:id', name: 'EventInfo', component: EventInfo, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Als er een opgeslagen positie is (back/forward), gebruik die
    if (savedPosition) {
      return savedPosition
    } else {
      // Anders scroll naar boven
      return { top: 0 }
    }
  },
})


export default router