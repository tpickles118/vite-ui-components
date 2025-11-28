<!-- components/base/DaisyAvatar.vue -->
<script setup>
import { computed } from 'vue'
import { AVATAR_OPTIONS } from '@/constants/index.js'

const props = defineProps({
    avatarModel: {
        type: Object,
        required: true,
    },
})

const outerClasses = computed(() => {
    const am = props.avatarModel
    const cls = [AVATAR_OPTIONS.AVATAR]
    
    if (am.isOnline) cls.push(AVATAR_OPTIONS.ONLINE)
    if (am.isOffline) cls.push(AVATAR_OPTIONS.OFFLINE)
    if (am.isPlaceholder) cls.push(AVATAR_OPTIONS.PLACEHOLDER)
    
    return cls
})

const innerClasses = computed(() => {
    const am = props.avatarModel
    const cls = []
    
    if (am.size) cls.push(am.size)
    if (am.shape) cls.push(am.shape)
    if (am.hasRing) {
        cls.push(AVATAR_OPTIONS.RING)
        if (am.ringSize) cls.push(am.ringSize)
        if (am.ringColor) cls.push(am.ringColor)
        if (am.ringOffsetSize) cls.push(am.ringOffsetSize)
        if (am.ringOffsetColor) cls.push(am.ringOffsetColor)
    }
    if (am.customClasses?.length) cls.push(...am.customClasses)
    
    return cls
})

const placeholderContentClasses = computed(() => {
    const am = props.avatarModel
    const cls = []
    if (am.placeholderSize) cls.push(am.placeholderSize)
    return cls
})

const placeholderText = computed(() => {
    const am = props.avatarModel
    if (am.placeholderText) return am.placeholderText
    if (am.alt) return am.alt.substring(0, 2).toUpperCase()
    return '??'
})
</script>

<template>
    <div :class="outerClasses">
        <div :class="innerClasses">
            <template v-if="!avatarModel.src">
                <slot>
                    <span :class="placeholderContentClasses">
                        {{ placeholderText }}
                    </span>
                </slot>
            </template>
            <img v-else :src="avatarModel.src" :alt="avatarModel.alt || 'avatar'" />
        </div>
    </div>
</template>
