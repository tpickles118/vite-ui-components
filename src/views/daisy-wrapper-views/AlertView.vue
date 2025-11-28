<!-- AlertView.vue
  Demo view showcasing BaseAlert component with various configurations.
-->
<script setup>
import { ref } from 'vue'
import { ALERT_OPTIONS, BUTTON_OPTIONS } from '@/constants'
import { AlertModel, WarningAlertModel, CustomAlertModel } from '@/components/models/alertModel.js'
import BaseAlert from '@/components/base/BaseAlert.vue'
import { ButtonModel } from '@/components/models/buttonModel.js'
import { RocketLaunchIcon } from '@heroicons/vue/24/outline'

// Basic alert examples
const successAlert = new AlertModel({
    type: ALERT_OPTIONS.TYPE.SUCCESS,
    message: 'This is a success alert with AlertModel!',
})

const errorAlert = new AlertModel({
    type: ALERT_OPTIONS.TYPE.ERROR,
    message: 'This is an error alert with AlertModel!',
})

const infoAlert = new AlertModel({
    type: ALERT_OPTIONS.TYPE.INFO,
    message: 'This is an info alert with AlertModel!',
    direction: ALERT_OPTIONS.DIRECTION.VERTICAL,
})

const warningAlert = new AlertModel({
    type: ALERT_OPTIONS.TYPE.WARNING,
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
        type: ALERT_OPTIONS.TYPE.INFO,
        title: 'New message!',
        message: 'You have 1 unread message',
        isSoft: true,
        buttons: [
            new ButtonModel({
                key: 'view',
                label: 'View',
                color: BUTTON_OPTIONS.COLOR.PRIMARY,
                size: BUTTON_OPTIONS.SIZE.SM,
            }),
        ],
    })
)

const warningAlert2 = ref(
    new AlertModel({
        id: 'warning-alert-1',
        type: ALERT_OPTIONS.TYPE.WARNING,
        title: 'Unsaved changes',
        message: 'You have unsaved changes. Do you want to save them?',
        isOutline: true,
        buttons: [
            new ButtonModel({
                key: 'save',
                label: 'Save',
                color: BUTTON_OPTIONS.COLOR.SUCCESS,
                size: BUTTON_OPTIONS.SIZE.SM,
            }),
            new ButtonModel({
                key: 'discard',
                label: 'Discard',
                color: BUTTON_OPTIONS.COLOR.GHOST,
                size: BUTTON_OPTIONS.SIZE.SM,
                variant: BUTTON_OPTIONS.VARIANT.GHOST,
            }),
        ],
    })
)

const successAlert2 = ref(
    new AlertModel({
        id: 'success-alert-1',
        type: ALERT_OPTIONS.TYPE.SUCCESS,
        message: 'Your purchase has been confirmed!',
        isSoft: true,
        isDismissible: true,
    })
)

const errorAlert2 = ref(
    new AlertModel({
        id: 'error-alert-1',
        type: ALERT_OPTIONS.TYPE.ERROR,
        title: 'Connection failed',
        message: 'Unable to connect to server. Please try again.',
        isDash: true,
        buttons: [
            new ButtonModel({
                key: 'retry',
                label: 'Retry',
                color: BUTTON_OPTIONS.COLOR.ERROR,
                size: BUTTON_OPTIONS.SIZE.SM,
            }),
        ],
        isDismissible: true,
    })
)

const customAlert2 = ref(
    new AlertModel({
        id: 'custom-alert-1',
        type: ALERT_OPTIONS.TYPE.INFO,
        message: '12 unread messages. Tap to see.',
        isSoft: true,
    })
)

// Handles button click events from alerts
const handleButtonClick = ({ alertId, buttonKey, alertModel }) => {
    console.log('Button clicked:', buttonKey, 'on alert', alertId)
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
    console.log('Alert dismissed:', alertId)
}

// Handles custom action events
const handleAction = ({ alertId, actionName }) => {
    console.log('Custom action:', actionName, 'on alert', alertId)
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
                <BaseAlert :alert-model="successAlert" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert as basic Error with AlertModel</h3>
                <BaseAlert :alert-model="errorAlert" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert as basic Info with AlertModel</h3>
                <BaseAlert :alert-model="infoAlert" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert as basic Warning with AlertModel</h3>
                <BaseAlert :alert-model="warningAlert" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert with WarningAlertModel</h3>
                <BaseAlert :alert-model="Warning" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">
                    Alert as basic Success with AlertModel, Message Overridden
                </h3>
                <BaseAlert :alert-model="successAlert">
                    Overridden slot message for success alert
                </BaseAlert>
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">
                    Alert as basic Success with CustomAlertModel, inject different icon
                </h3>
                <BaseAlert :alert-model="customAlert" class="alert-success">
                    <template #icon>
                        <component :is="customAlert.customIcon" class="size-6" />
                    </template>
                </BaseAlert>
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert with Action Button</h3>
                <BaseAlert :alert-model="infoAlert2" @button-click="handleButtonClick" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert with Multiple Buttons</h3>
                <BaseAlert :alert-model="warningAlert2" @button-click="handleButtonClick" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Dismissible Alert</h3>
                <BaseAlert :alert-model="successAlert2" @dismiss="handleDismiss" />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Error Alert with Actions</h3>
                <BaseAlert
                    :alert-model="errorAlert2"
                    @button-click="handleButtonClick"
                    @dismiss="handleDismiss"
                />
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Alert with Custom Action Slot</h3>
                <BaseAlert :alert-model="customAlert2" @action="handleAction">
                    <template #actions="{ onAction }">
                        <button class="btn btn-sm btn-primary" @click="handleCustomSee">See</button>
                    </template>
                </BaseAlert>
            </section>

            <section>
                <h3 class="text-lg font-semibold mb-2">Complex Alert Example</h3>
                <BaseAlert
                    :alert-model="
                        new AlertModel({
                            id: 'complex-alert',
                            type: ALERT_OPTIONS.TYPE.WARNING,
                            title: 'Payment Required',
                            message: 'Your subscription expires in 3 days.',
                            isOutline: true,
                            buttons: [
                                new ButtonModel({
                                    key: 'upgrade',
                                    label: 'Upgrade Now',
                                    color: BUTTON_OPTIONS.COLOR.WARNING,
                                    size: BUTTON_OPTIONS.SIZE.SM,
                                }),
                                new ButtonModel({
                                    key: 'remind',
                                    label: 'Remind Later',
                                    color: BUTTON_OPTIONS.COLOR.GHOST,
                                    size: BUTTON_OPTIONS.SIZE.SM,
                                    variant: BUTTON_OPTIONS.VARIANT.GHOST,
                                }),
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
