import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityWeatherView from '../views/CityWeatherView.vue'
import FavoritesView from '../views/FavsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  { path: '/', component: HomeView, props: true },
  { path: '/weather', component: CityWeatherView, props: true },
  { path: '/favorites', component: FavoritesView },
  { path: '/:pathMatch(.*)*', component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
