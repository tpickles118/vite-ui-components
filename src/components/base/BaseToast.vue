<!--
  DaisyToast.vue
  Toast notification wrapper that displays positioned alerts with auto-hide functionality.
-->
<script setup>
import { computed, watch, onBeforeUnmount } from 'vue'
import { TOAST_OPTIONS } from '@/constants/index.js'
import DaisyAlert from '@/components/base/BaseAlert.vue'

const props = defineProps({
  toastModel: {
    type: Object, // Should be an instance of ToastModel
    required: true
  }
})

const emit = defineEmits(['auto-hide'])


// Builds positioning classes based on toast model configuration
const toastClasses = computed(() => [
  TOAST_OPTIONS.TOAST,
  TOAST_OPTIONS.PLACEMENT.VERTICAL[props.toastModel.verticalPosition] || TOAST_OPTIONS.PLACEMENT.VERTICAL.BOTTOM,
  TOAST_OPTIONS.PLACEMENT.HORIZONTAL[props.toastModel.horizontalPosition] || TOAST_OPTIONS.PLACEMENT.HORIZONTAL.END
].join(' '))

let timer = null

// Auto-hide toast after configured duration when visible
watch(
  () => props.toastModel.isVisible,
  (visible) => {
    if (visible && props.toastModel.duration) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        emit('auto-hide')
      }, props.toastModel.duration)
    }
  }
)

// Cleanup timer on component unmount
onBeforeUnmount(() => {
  clearTimeout(timer)
})


</script>

<template>
  <div
    v-if="toastModel.isVisible"
    :class="toastClasses"
  >
    <DaisyAlert
      v-for="alert in toastModel.alerts"
      :key="alert.id"
      :alert-model="alert"
    />
  </div>
</template>