<script setup>
import { ref } from 'vue'
import { BadgeModel } from '@/components/models/badgeModel.js'
import DaisyBadge from '@/components/base/DaisyBadge.vue'

const basic = new BadgeModel()
const primarySoft = new BadgeModel({
    size: 'LG',
    color: 'PRIMARY',
    isSoft: true,
    label: 'Primary Soft',
})
const outlined = new BadgeModel({
    size: 'SM',
    color: 'SECONDARY',
    isOutline: true,
    label: 'Outline',
})

const filterBadge = ref(
    new BadgeModel({
        label: 'Filter Badge - hover and click',
        color: 'PRIMARY',
        isClickable: true,
    })
)

const tagBadge = ref(
    new BadgeModel({
        label: 'Important - click with icon',
        color: 'WARNING',
        isDismissible: true,
    })
)

const handleBadgeClick = ({ badgeId, label }) => {
    console.log(`Badge clicked: ${label} (ID: ${badgeId})`)
    // Handle filter toggle, navigation, etc.
}

const handleBadgeDismiss = ({ badgeId, label }) => {
    console.log(`Badge dismissed: ${label} (ID: ${badgeId})`)
    // Remove badge from list
}

const handleBadgeHover = ({ badgeId }) => {
    console.log(`Badge hovered: ${badgeId}`)
    // Show to
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
