<script setup>
import { computed } from 'vue'
import { BADGE_OPTIONS } from '@/constants'
import { BadgeModel } from '@/components/models/badgeModel.js'

const props = defineProps({
    badgeModel: {
        type: [Object, BadgeModel],
        required: true,
    },
})

const classes = computed(() => {
    const bm = props.badgeModel || {}
    const cls = [BADGE_OPTIONS.BADGE]

    // Size can be either a key (e.g. 'LG') or a full class string ('badge-lg')
    if (bm.size) {
        const sizeVal = BADGE_OPTIONS.SIZE?.[bm.size] ?? bm.size
        if (sizeVal) cls.push(sizeVal)
    }

    // Color can be either a key (e.g. 'PRIMARY') or a full class string ('badge-primary')
    if (bm.color) {
        const colorVal = BADGE_OPTIONS.COLOR?.[bm.color] ?? bm.color
        if (colorVal) cls.push(colorVal)
    }

    if (bm.isSoft) cls.push(BADGE_OPTIONS.SOFT)
    if (bm.isOutline) cls.push(BADGE_OPTIONS.OUTLINE)
    if (bm.isDash) cls.push(BADGE_OPTIONS.DASH)
    if (bm.isGhost) cls.push(BADGE_OPTIONS.GHOST)

    return cls
})
</script>

<template>
    <span
        :class="classes"
        :id="badgeModel?.id"
        role="status"
        aria-label="badge"
    >
        <slot>{{ badgeModel?.label }}</slot>
    </span>
</template>