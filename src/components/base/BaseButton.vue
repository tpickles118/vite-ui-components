<!--
  DaisyButton.vue
  Reusable button component with DaisyUI styling, icons, loading states, and event handling.
-->
<script setup>
import { computed } from 'vue'
import { BUTTON_OPTIONS } from '@/constants'
import { ButtonModel } from '@/components/models/base/buttonModel.js'

const props = defineProps({
    buttonModel: {
        type: [Object, ButtonModel],
        required: true,
    },
})

const emit = defineEmits(['click', 'focus', 'blur', 'mouseenter', 'mouseleave'])

// Builds CSS classes based on button model properties
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

// Emits click event with button context if not disabled or loading
const handleClick = (event) => {
    if (props.buttonModel?.isDisabled || props.buttonModel?.isLoading) return
    emit('click', {
        buttonId: props.buttonModel.id,
        label: props.buttonModel.label,
        buttonModel: props.buttonModel,
        event,
    })
}

// Emits focus event with button context
const handleFocus = (event) => emit('focus', { buttonModel: props.buttonModel, event })

// Emits blur event with button context
const handleBlur = (event) => emit('blur', { buttonModel: props.buttonModel, event })

// Emits mouseenter event with button context
const handleMouseEnter = (event) => emit('mouseenter', { buttonModel: props.buttonModel, event })

// Emits mouseleave event with button context
const handleMouseLeave = (event) => emit('mouseleave', { buttonModel: props.buttonModel, event })
</script>

<template>
    <button
        :id="buttonModel?.id"
        :class="classes"
        :disabled="buttonModel.isDisabled || buttonModel.isLoading"
        role="button"
        @click="handleClick"
        @focus="handleFocus"
        @blur="handleBlur"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
        <!-- Icon-only (no label) -->
        <template v-if="!buttonModel.label && buttonModel.icon">
            <component :is="buttonModel.icon" class="size-5 m-auto" />
        </template>
        <!-- Icon + label (icon left) -->
        <template v-else-if="buttonModel.icon && buttonModel.iconPosition == 'START'">
            <span class="mr-2"><component :is="buttonModel.icon" class="size-5" /></span>
            <span>{{ buttonModel.label }}</span>
        </template>
        <!-- Icon + label (icon right) -->
        <template v-else-if="buttonModel.icon && buttonModel.iconPosition == 'END'">
            <span>{{ buttonModel.label }}</span>
            <span class="ml-2"><component :is="buttonModel.icon" class="size-5" /></span>
        </template>
        <!-- Label only -->
        <template v-else>
            <span>{{ buttonModel.label }}</span>
        </template>
        <!-- Loading Spinner, etc -->
        <span v-if="buttonModel.isLoading" class="ml-2 loading loading-spinner loading-xs"></span>
        <slot />
    </button>
</template>
