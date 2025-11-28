<!-- BadgeView.vue
  Demo view showcasing DaisyBadge component with various configurations.
-->
<script setup>
import { ref } from 'vue'
import { BADGE_OPTIONS } from '@/constants'
import { BadgeModel } from '@/components/models/base/badgeModel.js'
import DaisyBadge from '@/components/base/BaseBadge.vue'

// Basic badge examples
const basic = new BadgeModel()

const primarySoft = new BadgeModel({
    size: BADGE_OPTIONS.SIZE.LG,
    color: BADGE_OPTIONS.COLOR.PRIMARY,
    isSoft: true,
    label: 'Primary Soft',
})

const outlined = new BadgeModel({
    size: BADGE_OPTIONS.SIZE.SM,
    color: BADGE_OPTIONS.COLOR.SECONDARY,
    isOutline: true,
    label: 'Outline',
})

// Interactive badge examples
const filterBadge = ref(
    new BadgeModel({
        label: 'Filter Badge - hover and click',
        color: BADGE_OPTIONS.COLOR.PRIMARY,
        isClickable: true,
    })
)

const tagBadge = ref(
    new BadgeModel({
        label: 'Important - click with icon',
        color: BADGE_OPTIONS.COLOR.WARNING,
        isDismissible: true,
    })
)

// Handles badge click events
const handleBadgeClick = ({ badgeId, label }) => {
    console.log('Badge clicked:', label, 'ID:', badgeId)
    // Handle filter toggle, navigation, etc.
}

// Handles badge dismissal
const handleBadgeDismiss = ({ badgeId, label }) => {
    console.log('Badge dismissed:', label, 'ID:', badgeId)
    // Remove badge from list
}

// Handles badge hover events
const handleBadgeHover = ({ badgeId }) => {
    console.log('Badge hovered:', badgeId)
    // Show tooltip, etc.
}
</script>

<template>
    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-4">DaisyUI Badge Component Tests</h1>

        <div class="space-x-4">
            <DaisyBadge :badge-model="basic" />
            <DaisyBadge :badge-model="primarySoft" />
            <DaisyBadge :badge-model="outlined" />

            <!-- slot example -->
            <DaisyBadge :badge-model="basic">Overridden slot</DaisyBadge>
        </div>

        <div class="space-x-2">
            <DaisyBadge
                :badge-model="filterBadge"
                @click="handleBadgeClick"
                @mouseenter="handleBadgeHover"
            />
            <DaisyBadge :badge-model="tagBadge" @dismiss="handleBadgeDismiss" />
        </div>
    </div>
</template>
