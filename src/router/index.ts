import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/modules/home/HomeView.vue'
import { pokemonGuard } from './guards/pokemonGuards'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokemon',
    name: 'pokemonView',
    beforeEnter: [pokemonGuard],
    component: () => import( '@/modules/pokemon/views/PokemonView.vue'),
    children: [
      {
        path: '',
        name: 'pokemonHome',
        component: () => import('@/modules/pokemon/pages/PokemonHome.vue'),
      },
      {
        path: 'pokemonInfo',
        name: 'pokemonInfo',
        component: () => import('@/modules/pokemon/pages/PokemonInfo.vue'),
      },
      { path: '/:pathMatch(.*)*', component: HomeView },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
