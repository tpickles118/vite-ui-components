import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import UsersAPI from '@/views/UsersApi.vue'
import BadgeView from '@/views/daisy-wrapper-views/BadgeView.vue'
import AlertView from '@/views/daisy-wrapper-views/AlertView.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/users-api', name: 'UsersApi', component: UsersAPI },
    { path: '/badge-view', name: 'BadgeView', component: BadgeView },
    { path: '/alert-view', name: 'AlertView', component: AlertView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
