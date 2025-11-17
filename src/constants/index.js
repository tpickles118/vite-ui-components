/**
 * index.js
 * Central export point for all DaisyUI component constants.
 *
 * Usage:
 *   import { ALERT_OPTIONS, BUTTON_OPTIONS } from '@/constants'
 *   import { ALERT_OPTIONS } from '@/constants/alert'  // Direct import also works
 */

export { ALERT_OPTIONS } from '@/constants/alert.js'
export { BADGE_OPTIONS } from '@/constants/badge.js'
export { BUTTON_OPTIONS } from '@/constants/button.js'
export { CARD_OPTIONS } from '@/constants/card.js'
export { TOAST_OPTIONS } from '@/constants/toast.js'

// Application constants
export { IMAGES } from '@/constants/images.js'
export { ROUTE_NAMES, ROUTE_PATHS, ROUTE_META, ROUTES } from './routes.js'
export { NAV_ITEMS, NAV_GROUPS, getNavItem, getComponentRoutes } from './navigation.js'
