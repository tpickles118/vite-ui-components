/**
 * index.js
 * Central export point for all DaisyUI component constants.
 *
 * Usage:
 *   import { ALERT_OPTIONS, BUTTON_OPTIONS } from '@/constants'
 *   import { ALERT_OPTIONS } from '@/constants/alert'  // Direct import also works
 */

export { ALERT_OPTIONS } from '@/constants/base/alert.js'
export { AVATAR_OPTIONS } from '@/constants/base/avatar.js'
export { BADGE_OPTIONS } from '@/constants/base/badge.js'
export { BUTTON_OPTIONS } from '@/constants/base/button.js'
export { CARD_OPTIONS } from '@/constants/base/card.js'
export { TOAST_OPTIONS } from '@/constants/base/toast.js'

// Application constants
export { IMAGES } from '@/constants/images.js'
export { ROUTE_NAMES, ROUTE_PATHS, ROUTE_META, ROUTES } from './routes.js'
export { NAV_ITEMS, NAV_GROUPS, getNavItem, getComponentRoutes } from './navigation.js'
