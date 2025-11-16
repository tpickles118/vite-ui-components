<!--
  AlertView.vue
  Demo view showcasing DaisyAlert component with various configurations.
-->
<script setup>
import { ref } from 'vue'
import { AlertModel, WarningAlertModel, CustomAlertModel } from '@/components/models/alertModel.js'
import DaisyAlert from '@/components/base/DaisyAlert.vue'
import { ButtonModel } from '@/components/models/buttonModel.js'
import { RocketLaunchIcon } from '@heroicons/vue/24/outline'

// Basic alert examples
const successAlert = new AlertModel({
    type: 'SUCCESS',
    message: 'This is a success alert with AlertModel!',
})
const errorAlert = new AlertModel({
    type: 'ERROR',
    message: 'This is an error alert with AlertModel!',
})
const infoAlert = new AlertModel({
    type: 'INFO',
    message: 'This is an info alert with AlertModel!',
    direction: 'vertical',
})
const warningAlert = new AlertModel({
    type: 'WARNING',
    message: 'This is a warning alert with AlertModel!',
})
const Warning = new WarningAlertModel({
    message: 'This is another success alert using WarningAlertModel!',
})

const customAlert = new CustomAlertModel({
    message: 'This is a custom alert with a custom type!',
    customIcon: RocketLaunchIcon,
})

// Interactive alert examples
const infoAlert2 = ref(
    new AlertModel({
        id: 'info-alert-1',
        type: 'INFO',
        title: 'New message!',
        message: 'You have 1 unread message',
        isSoft: true,
        buttons: [
            new ButtonModel({ key: 'view', label: 'View', color: 'PRIMARY', size: 'SM' })
        ],
    })
)

const warningAlert2 = ref(
    new AlertModel({
        id: 'warning-alert-1',
        type: 'WARNING',
        title: 'Unsaved changes',
        message: 'You have unsaved changes. Do you want to save them?',
        isOutline: true,
        buttons: [
            new ButtonModel({ key: 'save', label: 'Save', color: 'SUCCESS', size: 'SM' }),
            new ButtonModel({ key: 'discard', label: 'Discard', color: 'GHOST', size: 'SM', variant: 'GHOST' }),
        ]
    })
)

const successAlert2 = ref(
    new AlertModel({
        id: 'success-alert-1',
        type: 'SUCCESS',
        message: 'Your purchase has been confirmed!',
        isSoft: true,
        isDismissible: true,
    })
)

const errorAlert2 = ref(
    new AlertModel({
        id: 'error-alert-1',
        type: 'ERROR',
        title: 'Connection failed',
        message: 'Unable to connect to server. Please try again.',
        isDash: true,
        buttons: [
            new ButtonModel({ key: 'retry', label: 'Retry', color: 'ERROR', size: 'SM' })
        ],
        isDismissible: true,
    })
)

const customAlert2 = ref(
    new AlertModel({
        id: 'custom-alert-1',
        type: 'INFO',
        message: '12 unread messages. Tap to see.',
        isSoft: true,
    })
)

// Handles button click events from alerts
const handleButtonClick = ({ alertId, buttonKey, alertModel }) => {
    console.log(`Button clicked: ${buttonKey} on alert: ${alertId}`)

    switch (buttonKey) {
        case 'view':
            console.log('Navigating to messages...')
            break
        case 'save':
            console.log('Saving changes...')
            break
        case 'discard':
            console.log('Discarding changes...')
            break
        case 'retry':
            console.log('Retrying connection...')
            break
    }
}

// Handles alert dismissal
const handleDismiss = ({ alertId }) => {
    console.log(`Alert dismissed: ${alertId}`)
}

// Handles custom action events
const handleAction = ({ alertId, actionName }) => {
    console.log(`Custom action: ${actionName} on alert: ${alertId}`)
}

// Custom button handler for slot example
const handleCustomSee = () => {
    console.log('Custom see button clicked')
}
</script>

<template>
    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-4">DaisyUI Alert Component Tests</h1>

        <div class="space-y-4">
            <section>
                <h3 class="text-lg font-semibold mb-2">Alert as basic Success with AlertModel</h3>
                <DaisyAlert :alert-model="successAlert" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert as basic Error with AlertModel</h3>
                <DaisyAlert :alert-model="errorAlert" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert as basic Info with AlertModel</h3>
                <DaisyAlert :alert-model="infoAlert" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert as basic Warning with AlertModel</h3>
                <DaisyAlert :alert-model="warningAlert" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert with WarningAlertModel</h3>
                <DaisyAlert :alert-model="Warning" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">
                    Alert as basic Success with AlertModel, Message Overridden
                </h3>
                <DaisyAlert :alert-model="successAlert"
                    >Overridden slot message for success alert</DaisyAlert
                >
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">
                    Alert as basic Success with CustomAlertModel, inject different icon
                </h3>
                <DaisyAlert :alert-model="customAlert" class="alert-success">
                    <template #icon>
                        <component :is="customAlert.customIcon" class="size-6" />
                    </template>
                </DaisyAlert>
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert with Action Button</h3>
                <DaisyAlert :alert-model="infoAlert2" @button-click="handleButtonClick" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert with Multiple Buttons</h3>
                <DaisyAlert :alert-model="warningAlert2" @button-click="handleButtonClick" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Dismissible Alert</h3>
                <DaisyAlert :alert-model="successAlert2" @dismiss="handleDismiss" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Error Alert with Actions</h3>
                <DaisyAlert
                    :alert-model="errorAlert2"
                    @button-click="handleButtonClick"
                    @dismiss="handleDismiss"
                />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert with Custom Action Slot</h3>
                <DaisyAlert :alert-model="customAlert2" @action="handleAction">
                    <template #actions="{ onAction }">
                        <button class="btn btn-sm btn-primary" @click="handleCustomSee">See</button>
                    </template>
                </DaisyAlert>
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Complex Alert Example</h3>
                <DaisyAlert
                    :alert-model="
                        new AlertModel({
                            id: 'complex-alert',
                            type: 'WARNING',
                            title: 'Payment Required',
                            message: 'Your subscription expires in 3 days.',
                            isOutline: true,
                            buttons: [
                                {
                                    key: 'upgrade',
                                    label: 'Upgrade Now',
                                    class: 'btn btn-sm btn-warning',
                                },
                                {
                                    key: 'remind',
                                    label: 'Remind Later',
                                    class: 'btn btn-sm btn-ghost',
                                },
                            ],
                            isDismissible: true,
                        })
                    "
                    @button-click="handleButtonClick"
                    @dismiss="handleDismiss"
                />
            </section>
        </div>
    </div>
</template>
