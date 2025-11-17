/**
 * constants/index.js
 * DaisyUI component styling constants for alerts, badges, buttons, cards, and toasts.
 */

export const ALERT_OPTIONS = {
    ALERT: 'alert',
    OUTLINE: 'alert-outline',
    DASH: 'alert-dash',
    SOFT: 'alert-soft',
    
    // Alert type variants
    TYPE: {
        INFO: 'alert-info',
        SUCCESS: 'alert-success',
        WARNING: 'alert-warning',
        ERROR: 'alert-error',
    },
    
    // Alert direction/layout
    DIRECTION: {
        VERTICAL: 'alert-vertical',
        HORIZONTAL: 'alert-horizontal',
    },
}

export const BADGE_OPTIONS = {
    BADGE: 'badge',
    
    // Size variants
    SIZE: {
        XS: 'badge-xs',
        SM: 'badge-sm',
        MD: 'badge-md',
        LG: 'badge-lg',
        XL: 'badge-xl',
    },
    
    // Color variants
    COLOR: {
        PRIMARY: 'badge-primary',
        SECONDARY: 'badge-secondary',
        ACCENT: 'badge-accent',
        NEUTRAL: 'badge-neutral',
        INFO: 'badge-info',
        SUCCESS: 'badge-success',
        WARNING: 'badge-warning',
        ERROR: 'badge-error',
    },
    
    // Style variants
    SOFT: 'badge-soft',
    OUTLINE: 'badge-outline',
    DASH: 'badge-dash',
    GHOST: 'badge-ghost',
}

export const BUTTON_OPTIONS = {
    BUTTON: 'btn',
    
    // Color variants
    COLOR: {
        NEUTRAL: 'btn-neutral',
        PRIMARY: 'btn-primary',
        SECONDARY: 'btn-secondary',
        ACCENT: 'btn-accent',
        INFO: 'btn-info',
        SUCCESS: 'btn-success',
        WARNING: 'btn-warning',
        ERROR: 'btn-error',
    },
    
    // Size variants
    SIZE: {
        XS: 'btn-xs',
        SM: 'btn-sm',
        MD: 'btn-md',
        LG: 'btn-lg',
        XL: 'btn-xl',
    },
    
    // Style variants
    VARIANT: {
        SOFT: 'btn-soft',
        OUTLINE: 'btn-outline',
        DASH: 'btn-dash',
        GHOST: 'btn-ghost',
        LINK: 'btn-link',
    },
    
    // Shape variants
    SHAPE: {
        SQUARE: 'btn-square',
        CIRCLE: 'btn-circle',
        WIDE: 'btn-wide',
        BLOCK: 'btn-block',
    },
    
    // State variants
    STATE: {
        ACTIVE: 'btn-active',
        DISABLED: 'btn-disabled',
    },
}

export const CARD_OPTIONS = {
    CARD: 'card',

    // Card structure parts
    BODY: 'card-body',
    TITLE: 'card-title',
    ACTIONS: 'card-actions',

    // Size variants
    SIZE: {
        XS: 'card-xs',
        SM: 'card-sm',
        MD: 'card-md',
        LG: 'card-lg',
        XL: 'card-xl',
    },

    // Layout variants
    LAYOUT: {
        SIDE: 'card-side',
        COMPACT: 'card-compact',
        NORMAL: 'card-normal',
    },

    // Border variants
    BORDER: 'card-bordered',
    DASH: 'card-dash',

    // Background variants
    IMAGE_FULL: 'image-full',

    // Shadow utilities
    SHADOW: {
        SM: 'shadow-sm',
        MD: 'shadow-md',
        LG: 'shadow-lg',
        XL: 'shadow-xl',
        NONE: 'shadow-none',
    },

    // Width utilities
    WIDTH: {
        FULL: 'w-full',
        SM: 'w-96',
        MD: 'w-[28rem]',
        LG: 'w-[32rem]',
    },
}

export const TOAST_OPTIONS = {
    TOAST: 'toast',
    
    // Toast positioning
    PLACEMENT: {
        // Horizontal alignment
        HORIZONTAL: {
            START: 'toast-start',
            CENTER: 'toast-center',
            END: 'toast-end',
        },
        // Vertical alignment
        VERTICAL: {
            TOP: 'toast-top',
            MIDDLE: 'toast-middle',
            BOTTOM: 'toast-bottom',
        },
    },
}
