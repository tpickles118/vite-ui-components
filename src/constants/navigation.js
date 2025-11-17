/**
 * constants/navigation.js
 * Navigation menu structure and helpers
 * Enables dynamic menu generation and consistent navigation
 */

import { ROUTE_NAMES, ROUTE_PATHS, ROUTE_META } from './routes.js'

/**
 * Navigation item structure
 * Used to generate menus, breadcrumbs, and navigation components
 */
export const NAV_ITEMS = [
    {
        label: 'Home',
        routeName: ROUTE_NAMES.HOME,
        path: ROUTE_PATHS.HOME,
    },
    {
        label: 'About Page',
        routeName: ROUTE_NAMES.ABOUT,
        path: ROUTE_PATHS.ABOUT,
    },
    {
        label: 'Axios API Demo',
        routeName: ROUTE_NAMES.USERS_API,
        path: ROUTE_PATHS.USERS_API,
    },
    {
        label: 'Daisy Badge Tests',
        routeName: ROUTE_NAMES.BADGE_VIEW,
        path: ROUTE_PATHS.BADGE_VIEW,
    },
    {
        label: 'Daisy Alert Tests',
        routeName: ROUTE_NAMES.ALERT_VIEW,
        path: ROUTE_PATHS.ALERT_VIEW,
    },
    {
        label: 'Daisy Toast Tests',
        routeName: ROUTE_NAMES.TOAST_VIEW,
        path: ROUTE_PATHS.TOAST_VIEW,
    },
    {
        label: 'Daisy Button Tests',
        routeName: ROUTE_NAMES.BUTTON_VIEW,
        path: ROUTE_PATHS.BUTTON_VIEW,
    },
    {
        label: 'Daisy Card Tests',
        routeName: ROUTE_NAMES.CARD_VIEW,
        path: ROUTE_PATHS.CARD_VIEW,
    },
]

/**
 * Grouped navigation for categorized menus
 * Useful for dropdown menus, sidebars, etc.
 */
export const NAV_GROUPS = {
    MAIN: {
        label: 'Main',
        items: [
            {
                label: 'Home',
                routeName: ROUTE_NAMES.HOME,
                path: ROUTE_PATHS.HOME,
            },
            {
                label: 'About Page',
                routeName: ROUTE_NAMES.ABOUT,
                path: ROUTE_PATHS.ABOUT,
            },
            {
                label: 'Axios API Demo',
                routeName: ROUTE_NAMES.USERS_API,
                path: ROUTE_PATHS.USERS_API,
            },
        ],
    },
    COMPONENTS: {
        label: 'DaisyUI Components',
        items: [
            {
                label: 'Badge Tests',
                routeName: ROUTE_NAMES.BADGE_VIEW,
                path: ROUTE_PATHS.BADGE_VIEW,
            },
            {
                label: 'Alert Tests',
                routeName: ROUTE_NAMES.ALERT_VIEW,
                path: ROUTE_PATHS.ALERT_VIEW,
            },
            {
                label: 'Toast Tests',
                routeName: ROUTE_NAMES.TOAST_VIEW,
                path: ROUTE_PATHS.TOAST_VIEW,
            },
            {
                label: 'Button Tests',
                routeName: ROUTE_NAMES.BUTTON_VIEW,
                path: ROUTE_PATHS.BUTTON_VIEW,
            },
            {
                label: 'Card Tests',
                routeName: ROUTE_NAMES.CARD_VIEW,
                path: ROUTE_PATHS.CARD_VIEW,
            },
        ],
    },
}

/**
 * Helper to get navigation item by route name
 */
export function getNavItem(routeName) {
    return NAV_ITEMS.find((item) => item.routeName === routeName)
}

/**
 * Helper to get all component test routes
 */
export function getComponentRoutes() {
    return NAV_ITEMS.filter((item) => {
        const meta = ROUTE_META[item.routeName]
        return meta?.category === 'components'
    })
}
