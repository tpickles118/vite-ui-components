// constants/avatar.js
export const AVATAR_OPTIONS = {
    AVATAR: 'avatar',
    PLACEHOLDER: 'avatar-placeholder',
    ONLINE: 'avatar-online',
    OFFLINE: 'avatar-offline',
    RING: 'ring',
    
    // Ring sizes
    RING_SIZE: {
        RING_1: 'ring-1',
        RING_2: 'ring-2',
        RING_4: 'ring-4',
        RING_8: 'ring-8',
    },
    
    // Ring colors
    RING_COLOR: {
        PRIMARY: 'ring-primary',
        SECONDARY: 'ring-secondary',
        ACCENT: 'ring-accent',
        INFO: 'ring-info',
        SUCCESS: 'ring-success',
        WARNING: 'ring-warning',
        ERROR: 'ring-error',
        NEUTRAL: 'ring-neutral',
    },
    
    // Ring offset widths (spacing between element and ring)
    RING_OFFSET_SIZE: {
        OFFSET_0: 'ring-offset-0',
        OFFSET_1: 'ring-offset-1',
        OFFSET_2: 'ring-offset-2',
        OFFSET_4: 'ring-offset-4',
        OFFSET_8: 'ring-offset-8',
    },
    
    // Ring offset colors (background color showing through the offset)
    RING_OFFSET_COLOR: {
        BASE_100: 'ring-offset-base-100',
        BASE_200: 'ring-offset-base-200',
        BASE_300: 'ring-offset-base-300',
        PRIMARY: 'ring-offset-primary',
        SECONDARY: 'ring-offset-secondary',
        ACCENT: 'ring-offset-accent',
        NEUTRAL: 'ring-offset-neutral',
        WHITE: 'ring-offset-white',
        TRANSPARENT: 'ring-offset-transparent',
    },

    // Avatar sizes
    SIZE: {
        XS: 'w-6',
        SM: 'w-10',
        MD: 'w-16',
        LG: 'w-24',
        XL: 'w-36',
        XXL: 'w-48'
    },

// Avatar shapes - using DaisyUI mask classes and rounded utilities
    SHAPE: {
        // Standard rounded shapes
        CIRCLE: 'rounded-full',
        SQUARE: 'rounded',
        
        // DaisyUI mask shapes
        SQUIRCLE: 'mask mask-squircle',
        HEART: 'mask mask-heart',
        HEXAGON: 'mask mask-hexagon',           // vertical hexagon
        HEXAGON_2: 'mask mask-hexagon-2',       // horizontal hexagon
        DECAGON: 'mask mask-decagon',
        PENTAGON: 'mask mask-pentagon',
        DIAMOND: 'mask mask-diamond',
        
        // Star shapes
        STAR: 'mask mask-star',
        STAR_2: 'mask mask-star-2',             // bold star
        
        // Triangle shapes (different orientations)
        TRIANGLE: 'mask mask-triangle',         // pointing top
        TRIANGLE_2: 'mask mask-triangle-2',     // pointing down
        TRIANGLE_3: 'mask mask-triangle-3',     // pointing left
        TRIANGLE_4: 'mask mask-triangle-4',     // pointing right
    },
}
