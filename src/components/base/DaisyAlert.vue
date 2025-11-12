<script setup>
import { computed } from 'vue'
import { ALERT_OPTIONS } from '@/constants'
import { AlertModel } from '@/components/models/alertModel.js'
import {
    InformationCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({
    alertModel: {
        type: [Object, AlertModel],
        required: true,
    },
})

const iconMap = {
    INFO: InformationCircleIcon,
    SUCCESS: CheckCircleIcon,
    WARNING: ExclamationTriangleIcon,
    ERROR: ExclamationCircleIcon,
}

const currentIcon = computed(() => {
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

// TODO: add events
// TODO: add button support once button model is done

</script>

<template>
    <div :id="alertModel?.id" :class="classes" role="alert" aria-label="alert">
        <component :is="currentIcon" v-if="currentIcon" class="size-5" />
        <slot>{{ alertModel?.message }}</slot>
    </div>
</template>
