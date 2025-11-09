import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import UsersAPI from '@/views/UsersApi.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/users-api', name: 'UsersApi', component: UsersAPI },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
