import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Community from './views/Community.vue'
import ThaiSongDam from './views/ThaiSongDam.vue'
import SaltAndCoastal from './views/SaltAndCoastal.vue'
import ArtisansAndRiverside from './views/ArtisansAndRiverside.vue'

const routes = [
  { path: '/', component: Home },
  { 
    path: '/community/:id', 
    component: Community,
    beforeEnter: (to, from, next) => {
      // If community ID is 1 (Thai Song Dam), route to our special slide view
      if (to.params.id === '1') {
        next('/thai-song-dam')
      } else if (to.params.id === '4') {
        next('/artisans-and-riverside')
      } else if (to.params.id === '5') {
        // If community ID is 5 (Salt & Coastal Fishing), route to our special coastal slide view
        next('/salt-and-coastal')
      } else {
        next()
      }
    }
  },
  { path: '/thai-song-dam', component: ThaiSongDam },
  { path: '/salt-and-coastal', component: SaltAndCoastal },
  { path: '/artisans-and-riverside', component: ArtisansAndRiverside }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
