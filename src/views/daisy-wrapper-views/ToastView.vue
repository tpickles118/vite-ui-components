<!-- views/daisy-wrapper-views/ToastView.vue -->
<script setup>
import { ref } from 'vue'
import { ToastModel } from '@/components/models/toastModel.js'
import { AlertModel } from '@/components/models/alertModel.js'
import DaisyToast from '@/components/base/DaisyToast.vue'

// Helper: Create an AlertModel from simple args
function makeAlert({ type, message = '', title = '', ...rest }) {
    return new AlertModel({
        type,
        message: message || `${type.charAt(0) + type.slice(1).toLowerCase()} notification!`,
        title,
        ...rest,
    })
}

// ToastModel: parent (or store) manages isVisible and alert content
const toastModel = ref(
    new ToastModel({
        horizontalPosition: 'END',
        verticalPosition: 'BOTTOM',
        alerts: [], // start empty for demo
        isVisible: false,
        duration: 3000, // auto-hide after 3s
    })
)

// Show a toast with user input type/messages
function showToast(type, message = '', title = '') {
    toastModel.value.alerts = [makeAlert({ type, message, title })]
    toastModel.value.isVisible = true
}
function hideToast() {
    toastModel.value.isVisible = false
}
</script>

<template>
    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-4">DaisyUI Toast Component Test</h1>

        <div class="space-x-2 mb-8">
            <button
                class="btn btn-success"
                @click="showToast('SUCCESS', 'File uploaded successfully!')"
            >
                Show Success Toast
            </button>
            <button class="btn btn-error" @click="showToast('ERROR', 'Upload failed!')">
                Show Error Toast
            </button>
            <button class="btn btn-info" @click="showToast('INFO', 'This is some info.')">
                Show Info Toast
            </button>
            <button class="btn btn-ghost" @click="hideToast">Hide Toast</button>
        </div>

        <DaisyToast :toast-model="toastModel" @auto-hide="hideToast" />
    </div>
</template>
