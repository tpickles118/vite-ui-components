<!--
  DaisyBadge.vue
  Reusable badge component with DaisyUI styling, click/dismiss handlers, and slot support.
-->
<script setup>
import { computed } from 'vue'
import { BADGE_OPTIONS } from '@/constants'
import { BadgeModel } from '@/components/models/badgeModel.js'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    badgeModel: {
        type: [Object, BadgeModel],
        required: true,
    },
})

const emit = defineEmits(['click', 'dismiss', 'hover', 'mouseenter', 'mouseleave'])

// Builds CSS classes based on badge model properties
const classes = computed(() => {
    const bm = props.badgeModel || {}
    const cls = [BADGE_OPTIONS.BADGE]

    if (bm.size) {
        const sizeVal = BADGE_OPTIONS.SIZE?.[bm.size] ?? bm.size
        if (sizeVal) cls.push(sizeVal)
    }

    if (bm.color) {
        const colorVal = BADGE_OPTIONS.COLOR?.[bm.color] ?? bm.color
        if (colorVal) cls.push(colorVal)
    }

    if (bm.isSoft) cls.push(BADGE_OPTIONS.SOFT)
    if (bm.isOutline) cls.push(BADGE_OPTIONS.OUTLINE)
    if (bm.isDash) cls.push(BADGE_OPTIONS.DASH)
    if (bm.isGhost) cls.push(BADGE_OPTIONS.GHOST)

    // add cursor pointer if click handler is interactive
    if (bm.isClickable || bm.isDismissible) {
        cls.push('cursor-pointer')
    }

    return cls
})

// Emits click event with badge context
const handleClick = (event) => {
    if (props.badgeModel?.isClickable) {
        emit('click', {
            badgeId: props.badgeModel.id,
            label: props.badgeModel.label,
            badgeModel: props.badgeModel,
            event,
        })
    }
}

// Emits dismiss event and prevents click propagation
const handleDismiss = (event) => {
    event.stopPropagation() // Prevent click event from firing
    emit('dismiss', {
        badgeId: props.badgeModel?.id,
        label: props.badgeModel?.label,
        badgeModel: props.badgeModel,
    })
}

// Emits mouseenter event with badge context
const handleMouseEnter = (event) => {
    emit('mouseenter', {
        badgeId: props.badgeModel?.id,
        badgeModel: props.badgeModel,
        event,
    })
}

// Emits mouseleave event with badge context
const handleMouseLeave = (event) => {
    emit('mouseleave', {
        badgeId: props.badgeModel?.id,
        badgeModel: props.badgeModel,
        event,
    })
}



</script>

<template>
    <span
        :id="badgeModel?.id"
        :class="classes"
        role="status"
        aria-label="badgeModel?.ariaLabel || 'badge'"
        @click="handleClick"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
        <slot>{{ badgeModel?.label }}</slot>

        <!-- dismiss button -->
         <button 
            v-if="badgeModel?.isDismissible"
            type="button"
            class="ml-1 inline-flex items-center"
            @click="handleDismiss"
            aria-label="Remove badge"
        >
        <XMarkIcon class="size-3" />
    </button>
    </span>
</template>