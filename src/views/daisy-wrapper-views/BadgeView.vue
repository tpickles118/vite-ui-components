<script setup>
import { BadgeModel } from '@/components/models/badgeModel.js'
import DaisyBadge from '@/components/base/DaisyBadge.vue'

const basic = new BadgeModel()
const primarySoft = new BadgeModel({ size: 'LG', color: 'PRIMARY', isSoft: true, label: 'Primary Soft' })
const outlined = new BadgeModel({ size: 'SM', color: 'SECONDARY', isOutline: true, label: 'Outline' })
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
    </div>
</template>