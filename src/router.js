import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Community from './views/Community.vue'
import ThaiSongDam from './views/ThaiSongDam.vue'

const routes = [
  { path: '/', component: Home },
  { 
    path: '/community/:id', 
    component: Community,
    beforeEnter: (to, from, next) => {
      // If community ID is 1 (Thai Song Dam), route to our special slide view
      if (to.params.id === '1') {
        next('/thai-song-dam')
      } else {
        next()
      }
    }
  },
  { path: '/thai-song-dam', component: ThaiSongDam }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
