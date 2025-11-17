/**
 * constants/routes.js
 * Centralized route definitions for the application
 * Single source of truth for all routing configuration
 */

export const ROUTE_NAMES = {
    HOME: 'Home',
    ABOUT: 'About',
    USERS_API: 'UsersApi',
    BADGE_VIEW: 'BadgeView',
    ALERT_VIEW: 'AlertView',
    TOAST_VIEW: 'ToastView',
    BUTTON_VIEW: 'ButtonView',
    CARD_VIEW: 'CardView',
}

export const ROUTE_PATHS = {
    HOME: '/',
    ABOUT: '/about',
    USERS_API: '/users-api',
    BADGE_VIEW: '/badge-view',
    ALERT_VIEW: '/alert-view',
    TOAST_VIEW: '/toast-view',
    BUTTON_VIEW: '/button-view',
    CARD_VIEW: '/card-view',
}

/**
 * Route metadata for enhanced navigation
 */
export const ROUTE_META = {
    [ROUTE_NAMES.HOME]: {
        title: 'Home',
        description: 'Welcome to Daisy Component Tests',
        icon: 'HomeIcon', // For future icon integration
    },
    [ROUTE_NAMES.ABOUT]: {
        title: 'About',
        description: 'About this application',
        icon: 'InformationCircleIcon',
    },
    [ROUTE_NAMES.USERS_API]: {
        title: 'Axios API Demo',
        description: 'User data fetching demonstration',
        icon: 'UsersIcon',
    },
    [ROUTE_NAMES.BADGE_VIEW]: {
        title: 'Badge Tests',
        description: 'DaisyUI Badge component examples',
        icon: 'TagIcon',
        category: 'components',
    },
    [ROUTE_NAMES.ALERT_VIEW]: {
        title: 'Alert Tests',
        description: 'DaisyUI Alert component examples',
        icon: 'BellAlertIcon',
        category: 'components',
    },
    [ROUTE_NAMES.TOAST_VIEW]: {
        title: 'Toast Tests',
        description: 'DaisyUI Toast notification examples',
        icon: 'ChatBubbleBottomCenterTextIcon',
        category: 'components',
    },
    [ROUTE_NAMES.BUTTON_VIEW]: {
        title: 'Button Tests',
        description: 'DaisyUI Button component examples',
        icon: 'CursorArrowRaysIcon',
        category: 'components',
    },
    [ROUTE_NAMES.CARD_VIEW]: {
        title: 'Card Tests',
        description: 'DaisyUI Card component examples',
        icon: 'RectangleStackIcon',
        category: 'components',
    },
}

/**
 * Complete route configuration objects
 * Maps directly to Vue Router route definitions
 */
export const ROUTES = [
    {
        path: ROUTE_PATHS.HOME,
        name: ROUTE_NAMES.HOME,
        component: () => import('@/views/HomeView.vue'),
        meta: ROUTE_META[ROUTE_NAMES.HOME],
    },
    {
        path: ROUTE_PATHS.ABOUT,
        name: ROUTE_NAMES.ABOUT,
        component: () => import('@/views/AboutView.vue'),
        meta: ROUTE_META[ROUTE_NAMES.ABOUT],
    },
    {
        path: ROUTE_PATHS.USERS_API,
        name: ROUTE_NAMES.USERS_API,
        component: () => import('@/views/UsersApi.vue'),
        meta: ROUTE_META[ROUTE_NAMES.USERS_API],
    },
    {
        path: ROUTE_PATHS.BADGE_VIEW,
        name: ROUTE_NAMES.BADGE_VIEW,
        component: () => import('@/views/daisy-wrapper-views/BadgeView.vue'),
        meta: ROUTE_META[ROUTE_NAMES.BADGE_VIEW],
    },
    {
        path: ROUTE_PATHS.ALERT_VIEW,
        name: ROUTE_NAMES.ALERT_VIEW,
        component: () => import('@/views/daisy-wrapper-views/AlertView.vue'),
        meta: ROUTE_META[ROUTE_NAMES.ALERT_VIEW],
    },
    {
        path: ROUTE_PATHS.TOAST_VIEW,
        name: ROUTE_NAMES.TOAST_VIEW,
        component: () => import('@/views/daisy-wrapper-views/ToastView.vue'),
        meta: ROUTE_META[ROUTE_NAMES.TOAST_VIEW],
    },
    {
        path: ROUTE_PATHS.BUTTON_VIEW,
        name: ROUTE_NAMES.BUTTON_VIEW,
        component: () => import('@/views/daisy-wrapper-views/ButtonView.vue'),
        meta: ROUTE_META[ROUTE_NAMES.BUTTON_VIEW],
    },
    {
        path: ROUTE_PATHS.CARD_VIEW,
        name: ROUTE_NAMES.CARD_VIEW,
        component: () => import('@/views/daisy-wrapper-views/CardView.vue'),
        meta: ROUTE_META[ROUTE_NAMES.CARD_VIEW],
    },
]
