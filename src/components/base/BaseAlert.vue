<!--
  DaisyAlert.vue
  Reusable alert component with DaisyUI styling and flexible slot support.
-->
<script setup>
import { computed } from 'vue'
import { ALERT_OPTIONS, BUTTON_OPTIONS } from '@/constants/index.js'
import { AlertModel } from '@/components/models/base/alertModel.js'
import { ButtonModel } from '../models/base/buttonModel.js'
import DaisyButton from '@/components/base/BaseButton.vue'

import {
    InformationCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({
    alertModel: {
        type: [Object, AlertModel],
        required: true,
    },
})

const emit = defineEmits(['button-click', 'dismiss', 'action'])

// Icon mapping for alert types
const iconMap = {
    INFO: InformationCircleIcon,
    SUCCESS: CheckCircleIcon,
    WARNING: ExclamationTriangleIcon,
    ERROR: ExclamationCircleIcon,
}

// Resolves icon: custom icon from model takes precedence over type-based icon
const currentIcon = computed(() => {
    if (props.alertModel?.customIcon) {
        return props.alertModel.customIcon
    }
    return iconMap[props.alertModel?.type] || null
})

// Builds CSS classes based on alert model properties
const classes = computed(() => {
    const am = props.alertModel
    const cls = [ALERT_OPTIONS.ALERT]

    if (am.type) cls.push(ALERT_OPTIONS.TYPE?.[am.type] ?? am.type)
    if (am.isOutline) cls.push(ALERT_OPTIONS.OUTLINE)
    if (am.isDash) cls.push(ALERT_OPTIONS.DASH)
    if (am.isSoft) cls.push(ALERT_OPTIONS.SOFT)
    if (am.direction) cls.push(ALERT_OPTIONS.DIRECTION?.[am.direction] ?? am.direction)

    return cls
})

// Emits button click with alert context
const handleButtonClick = (buttonKey) => {
    emit('button-click', {
        alertId: props.alertModel?.id,
        buttonKey,
        alertModel: props.alertModel,
    })
}

// Emits dismiss event with alert ID
const handleDismiss = () => {
    emit('dismiss', {
        alertId: props.alertModel?.id,
        alertModel: props.alertModel,
    })
}

// Emits custom action event
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
        <!-- Icon slot with fallback to type-based icon -->
        <slot name="icon">
            <component :is="currentIcon" v-if="currentIcon" class="size-5 mr-2" />
        </slot>

        <!-- Title slot -->
        <slot name="title">
            <h3 v-if="alertModel?.title" class="font-bold">
                {{ alertModel?.title }}
            </h3>
        </slot>

        <!-- Message slot with responsive text sizing -->
        <slot name="message">
            <div v-if="alertModel?.message" :class="alertModel?.title ? 'txt-xs' : ''">
                {{ alertModel?.message }}
            </div>
        </slot>

        <!-- Render action buttons from model -->
        <div v-if="alertModel?.buttons && alertModel.buttons.length > 0" class="flex gap-2">
            <DaisyButton
                v-for="button in alertModel.buttons"
                :key="button.key || button.label"
                :button-model="button"
                @click="() => handleButtonClick(button.key || button.label)"
            />
        </div>

        <!-- Dismiss button -->
        <DaisyButton
            v-if="alertModel?.isDismissible"
            :button-model="
                new ButtonModel({
                    label: '',
                    icon: XMarkIcon,
                    color: BUTTON_OPTIONS.COLOR.NEUTRAL,
                    size: BUTTON_OPTIONS.SIZE.SM,
                    variant: BUTTON_OPTIONS.VARIANT.GHOST,
                    key: 'dismiss',
                })
            "
            @click="handleDismiss"
        />

        <slot name="actions" :on-action="handleAction"></slot>
    </div>
</template>
