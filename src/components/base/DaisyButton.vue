<script setup>
import { computed } from 'vue'
import { BUTTON_OPTIONS } from '@/constants'
import { ButtonModel } from '@/components/models/buttonModel.js'

const props = defineProps({
    buttonModel: {
        type: [Object, ButtonModel],
        required: true,
    },
})

const emit = defineEmits(['click', 'focus', 'blur', 'mouseenter', 'mouseleave'])

const classes = computed(() => {
    const bm = props.buttonModel || {}
    const cls = [BUTTON_OPTIONS.BUTTON]
    if (bm.color) cls.push(BUTTON_OPTIONS.COLOR?.[bm.color] ?? bm.color)
    if (bm.size) cls.push(BUTTON_OPTIONS.SIZE?.[bm.size] ?? bm.size)
    if (bm.variant) cls.push(BUTTON_OPTIONS.VARIANT?.[bm.variant] ?? bm.variant)
    if (bm.shape) cls.push(BUTTON_OPTIONS.SHAPE?.[bm.shape] ?? bm.shape)
    if (bm.isActive) cls.push(BUTTON_OPTIONS.STATE.ACTIVE)
    if (bm.isDisabled) cls.push(BUTTON_OPTIONS.STATE.DISABLED)
    if (bm.isLoading) cls.push('loading') // DaisyUI style for spinner
    return cls
})

// Click handler
const handleClick = (event) => {
    if (props.buttonModel?.isDisabled || props.buttonModel?.isLoading) return
    emit('click', {
        buttonId: props.buttonModel.id,
        label: props.buttonModel.label,
        buttonModel: props.buttonModel,
        event,
    })
}

const handleFocus = event => emit('focus', { buttonModel: props.buttonModel, event })
const handleBlur = event => emit('blur', { buttonModel: props.buttonModel, event })
const handleMouseEnter = event => emit('mouseenter', { buttonModel: props.buttonModel, event })
const handleMouseLeave = event => emit('mouseleave', { buttonModel: props.buttonModel, event })
</script>

<template>
    <button
        :id="buttonModel?.id"
        :class="classes"
        :disabled="buttonModel.isDisabled || buttonModel.isLoading"
        @click="handleClick"
        @focus="handleFocus"
        @blur="handleBlur"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        role="button"
    >
        <!-- Icon Start -->
        <span v-if="buttonModel.icon && buttonModel.iconPosition == 'START'" class="mr-2">
            <component :is="buttonModel.icon" class="size-5" />
        </span>
        {{ buttonModel.label }}
        <!-- Icon End -->
        <span v-if="buttonModel.icon && buttonModel.iconPosition == 'END'" class="ml-2">
            <component :is="buttonModel.icon" class="size-5" />
        </span>
        <!-- Loading Spinner -->
        <span v-if="buttonModel.isLoading" class="ml-2 loading loading-spinner loading-xs"></span>
        <slot />
    </button>
</template>
