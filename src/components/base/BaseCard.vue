<!--
  DaisyCard.vue
  Reusable card component with DaisyUI styling and flexible slot support for images, titles, and actions.
-->
<script setup>
import { computed } from 'vue'
import { CARD_OPTIONS } from '@/constants/index.js'
import { CardModel } from '@/components/models/base/cardModel.js'

const props = defineProps({
    cardModel: {
        type: Object, // CardModel
        required: true,
    },
})

const emit = defineEmits(['click', 'hover'])

// Builds CSS classes based on card model properties
const cardClasses = computed(() => {
    const cm = props.cardModel
    const cls = [CARD_OPTIONS.CARD]

    if (cm?.size) cls.push(CARD_OPTIONS.SIZE?.[cm.size] ?? cm.size)
    if (cm?.layout) cls.push(CARD_OPTIONS.LAYOUT?.[cm.layout] ?? cm.layout)
    if (cm?.isBordered) cls.push(CARD_OPTIONS.BORDER)
    if (cm?.isDash) cls.push(CARD_OPTIONS.DASH)
    if (cm?.isImageFull) cls.push(CARD_OPTIONS.IMAGE_FULL)
    if (cm?.shadow) cls.push(CARD_OPTIONS.SHADOW?.[cm.shadow] ?? cm.shadow)
    if (cm?.width) cls.push(CARD_OPTIONS.WIDTH?.[cm.width] ?? cm.width)
    if (cm?.customClasses?.length) cls.push(...cm.customClasses)

    return cls
})

// Emits click event with card context
const handleClick = (event) => {
    emit('click', {
        cardId: props.cardModel?.id,
        cardModel: props.cardModel,
        event,
    })
}

// Emits hover event with card context
const handleHover = (event) => {
    emit('hover', {
        cardId: props.cardModel?.id,
        cardModel: props.cardModel,
        event,
    })
}
</script>

<template>
    <div :id="cardModel?.id" :class="cardClasses" @click="handleClick" @mouseenter="handleHover" class="bg-gray-100">
        <!-- Image slot -->
        <slot name="image">
            <figure v-if="cardModel?.imageUrl">
                <img
                    :src="cardModel.imageUrl"
                    :alt="cardModel.imageAlt || 'Card image'"
                    class="w-full h-auto"
                />
            </figure>
        </slot>

        <!-- Card body -->
        <div :class="CARD_OPTIONS.BODY">
            <!-- Title slot -->
            <slot name="title">
                <h2 v-if="cardModel?.title" :class="CARD_OPTIONS.TITLE">
                    {{ cardModel.title }}
                </h2>
            </slot>

            <!-- Content slot -->
            <slot>
                <p v-if="cardModel?.content">{{ cardModel.content }}</p>
            </slot>

            <!-- Actions slot -->
            <div v-if="$slots.actions" :class="CARD_OPTIONS.ACTIONS">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>
