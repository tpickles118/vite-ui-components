<script setup>
import { computed } from 'vue'
import { ALERT_OPTIONS } from '@/constants'
import { AlertModel } from '@/components/models/alertModel.js'
import {
    InformationCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import alert from 'daisyui/components/alert'

const props = defineProps({
    alertModel: {
        type: [Object, AlertModel],
        required: true,
    },
})

// define emits
const emit = defineEmits(['button-click', 'dismiss', 'action'])

const iconMap = {
    INFO: InformationCircleIcon,
    SUCCESS: CheckCircleIcon,
    WARNING: ExclamationTriangleIcon,
    ERROR: ExclamationCircleIcon,
}

// Use slot > custom > fallback icon
const currentIcon = computed(() => {
    // Prefer customIcon provided in model if present
    if (props.alertModel?.customIcon) {
        return props.alertModel.customIcon
    }
    // Otherwise use mapped icon
    return iconMap[props.alertModel?.type] || null
})

const classes = computed(() => {
    const am = props.alertModel || {}
    const cls = [ALERT_OPTIONS.ALERT]

    // Type mapping
    if (am.type) {
        const typeVal = ALERT_OPTIONS.TYPE?.[am.type] ?? am.type
        if (typeVal) cls.push(typeVal)
    }

    // Style modifiers
    if (am.isOutline) cls.push(ALERT_OPTIONS.OUTLINE)
    if (am.isDash) cls.push(ALERT_OPTIONS.DASH)
    if (am.isSoft) cls.push(ALERT_OPTIONS.SOFT)

    // Direction
    if (am.direction) {
        const dirVal = ALERT_OPTIONS.DIRECTION?.[am.direction] ?? am.direction
        if (dirVal) cls.push(dirVal)
    }

    return cls
})

// Handle button click events
const handleButtonClick = (buttonKey) => {
    emit('button-click', {
        alertId: props.alertModel?.id,
        buttonKey,
        alertModel: props.alertModel,
    })
}

// handle dismiss event
const handleDismiss = () => {
    emit('dismiss', {
        alertId: props.alertModel?.id,
        alertModel: props.alertModel,
    })
}

// handle action event
const handleAction = (actionKey) => {
    emit('action', {
        alertId: props.alertModel?.id,
        actionKey,
        alertModel: props.alertModel,
    })
}
</script>

<template>
    <div :id="alertModel?.id" :class="classes" role="alert" aria-label="alert">
        <!-- Named slot for icon, else fallback -->
        <slot name="icon">
            <component :is="currentIcon" v-if="currentIcon" class="size-5 mr-2" />
        </slot>

        <!-- Named slot for title/header -->
        <slot name="title">
            <h3 v-if="alertModel?.title" class="font-bold">
                {{ alertModel?.title }}
            </h3>
        </slot>

        <!-- Named slot for message (fallback to alertModel.message) -->
        <slot name="message">
            <div v-if="alertModel?.message" :class="alertModel?.title ? 'txt-xs' : ''">
                {{ alertModel?.message }}
            </div>
        </slot>

        <div v-if="alertModel?.buttons && alertModel.buttons.length > 0" class="flex gap-2">
            <button
                v-for="button in alertModel.buttons"
                :key="button.key || button.label"
                :class="button.class || 'btn btn-sm'"
                :disabled="button.disabled"
                @click="handleButtonClick(button.key || button.label)"
            >
                {{ button.label || 'Button' }}
            </button>
        </div>

        <button v-if="alertModel?.isDismissible" class="btn btn-sm btn-ghost ml-auto" @click="handleDismiss">
            <XMarkIcon class="size-5" />
        </button>

        <!-- Extra actions: e.g. buttons, etc. -->
        <slot name="actions" :on-action="handleAction"></slot>
    </div>
</template>
