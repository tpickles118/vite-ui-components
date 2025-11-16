<script setup>
import { computed } from 'vue'
import { TOAST_OPTIONS } from '@/constants/index.js'
import DaisyAlert from '@/components/base/DaisyAlert.vue'

const props = defineProps({
  toastModel: {
    type: Object, // Should be an instance of ToastModel
    required: true
  }
})

// Compute DaisyUI toast positioning classes based on toastModel
const toastClasses = computed(() => [
  TOAST_OPTIONS.TOAST,
  TOAST_OPTIONS.PLACEMENT.VERTICAL[props.toastModel.verticalPosition] || TOAST_OPTIONS.PLACEMENT.VERTICAL.BOTTOM,
  TOAST_OPTIONS.PLACEMENT.HORIZONTAL[props.toastModel.horizontalPosition] || TOAST_OPTIONS.PLACEMENT.HORIZONTAL.END
].join(' '))


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