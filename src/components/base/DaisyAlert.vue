<script setup>
import { computed } from 'vue'
import { ALERT_OPTIONS } from '@/constants'
import { AlertModel } from '@/components/models/alertModel.js'
import { InformationCircleIcon, ExclamationCircle, ExclamationTriangle, CheckCircle } from '@heroicons/vue/24/solid'


const props = defineProps({
    alertModel: {
        type: [Object, AlertModel],
        required: true,
    },
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
</script>

<template>
    <div :id="alertModel?.id" :class="classes" role="alert" aria-label="alert">
        <InformationCircleIcon v-if="info" />
        <ExclamationCircle v-else-if="error" />
        <ExclamationTriangle v-else-if="warning" />
        <CheckCircle v-else-if="success" />
        <slot>{{ alertModel?.message }}</slot>
    </div>
</template>
