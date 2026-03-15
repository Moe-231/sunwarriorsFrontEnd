import AccessDenied from '@/pages/AccessDenied.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { title: 'Home' } },
    { path: '/404', name: '404', component: AccessDenied, meta: { title: 404 } },
  ],
})

export default router
