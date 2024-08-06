import HomepageView from '../views/HomepageView.vue'
import RulesView from '../views/RulesView.vue'
import CategoryView from '../views/CategoryView.vue'
import GameSection from '../views/GameSection.vue'

import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomepageView
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView
    },
   
    {
      path: '/game',
      name: 'game',
      component: CategoryView
    },
    
    {
      path: '/game/:category',
      name: 'category',
      component: GameSection
    }
  ]
})

export default router
