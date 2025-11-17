<!-- ToastView.vue
  Demo view showcasing DaisyToast component with different notification types.
-->
<script setup>
import { ref } from 'vue'
import { ALERT_OPTIONS, BUTTON_OPTIONS, TOAST_OPTIONS } from '@/constants'
import { ToastModel } from '@/components/models/toastModel.js'
import { AlertModel } from '@/components/models/alertModel.js'
import { ButtonModel } from '@/components/models/buttonModel'
import DaisyToast from '@/components/base/DaisyToast.vue'
import DaisyButton from '@/components/base/DaisyButton.vue'

// Creates an alert model from simplified parameters
function makeAlert(type, message = '', title = '', ...rest) {
  return new AlertModel({
    type,
    message: message || `${type.charAt(0)}${type.slice(1).toLowerCase()} notification!`,
    title,
    ...rest,
  })
}

// Toast model with positioning and auto-hide configuration
const toastModel = ref(
  new ToastModel({
    horizontalPosition: TOAST_OPTIONS.PLACEMENT.HORIZONTAL.END,
    verticalPosition: TOAST_OPTIONS.PLACEMENT.VERTICAL.BOTTOM,
    alerts: [], // start empty for demo
    isVisible: false,
    duration: 3000, // auto-hide after 3s
  })
)

// Button model to trigger toast display
const primaryBtn = new ButtonModel({
  label: 'Show Toast from buttonModel',
  color: BUTTON_OPTIONS.COLOR.PRIMARY,
})

// Displays toast with specified type and message
function showToast(type, message = '', title) {
  toastModel.value.alerts = [makeAlert(type, message, title)]
  toastModel.value.isVisible = true
}

// Hides the currently displayed toast
function hideToast() {
  toastModel.value.isVisible = false
}
</script>

<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-4">DaisyUI Toast Component Tests</h1>

    <div class="space-x-2 mb-8">
      <button
        class="btn btn-success"
        @click="showToast(ALERT_OPTIONS.TYPE.SUCCESS, 'File uploaded successfully!')"
      >
        Show Success Toast
      </button>
      <button
        class="btn btn-error"
        @click="showToast(ALERT_OPTIONS.TYPE.ERROR, 'Upload failed!')"
      >
        Show Error Toast
      </button>
      <button class="btn btn-info" @click="showToast(ALERT_OPTIONS.TYPE.INFO, 'This is some info.')">
        Show Info Toast
      </button>
      <button class="btn btn-ghost" @click="hideToast">Hide Toast</button>
    </div>

    <DaisyToast :toast-model="toastModel" @auto-hide="hideToast" />

    <div class="mt-8">
      <DaisyButton
        :button-model="primaryBtn"
        @click="showToast(ALERT_OPTIONS.TYPE.INFO, 'Toast from buttonModel')"
      />
    </div>
  </div>
</template>
