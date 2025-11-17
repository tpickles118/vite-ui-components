<!--
  DaisyCard.vue
  Reusable card component with DaisyUI styling and flexible slot support for images, titles, and actions.
-->
<script setup>
import { computed } from 'vue'
import { CARD_OPTIONS } from '@/constants/index.js'
import { CardModel } from '@/components/models/cardModel.js'

const props = defineProps({
    cardModel: {
        type: Object,
        required: true,
    },
})

// Builds CSS classes based on card model properties
const cardClasses = computed(() => {
    const cm = props.cardModel
    const cls = [CARD_OPTIONS.CARD]

    if (cm?.size) cls.push(CARD_OPTIONS.SIZE?.[cm.size] ?? cm.size)
    if (cm?.layout) cls.push(CARD_OPTIONS.LAYOUT?.[cm.layout] ?? cm.layout)
    if (cm?.isBordered) cls.push(CARD_OPTIONS.BORDER)
    if (cm?.isDash) cls.push(CARD_OPTIONS.DASH)
    if (cm?.hasImageFull) cls.push(CARD_OPTIONS.IMAGE_FULL)
    if (cm?.shadow) cls.push(CARD_OPTIONS.SHADOW?.[cm.shadow] ?? cm.shadow)
    if (cm?.width) cls.push(CARD_OPTIONS.WIDTH?.[cm.width] ?? cm.width)
    if (cm?.customClasses?.length) cls.push(...cm.customClasses)

    return cls
})
</script>

<template>
    <div :class="cardClasses" class="bg-gray-100">
        <!-- Image/figure slot -->
        <slot name="image"></slot>

        <!-- Card body container -->
        <div :class="CARD_OPTIONS.BODY">
            <!-- Title slot -->
            <slot name="title">
                <h2 v-if="$slots.title" :class="CARD_OPTIONS.TITLE"></h2>
            </slot>

            <!-- Main content slot -->
            <slot></slot>

            <!-- Actions slot for buttons -->
            <div v-if="$slots.actions" :class="CARD_OPTIONS.ACTIONS">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>
