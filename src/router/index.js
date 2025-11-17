/**
 * router/index.js
 * Vue Router configuration using centralized route constants
 */

import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/constants/routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes: ROUTES,
})

// Optional: Global navigation guard using route metadata
router.beforeEach((to, from, next) => {
    // Set page title from route meta
    if (to.meta?.title) {
        document.title = `${to.meta.title} | Daisy Component Tests`
    }
    next()
})

export default router
