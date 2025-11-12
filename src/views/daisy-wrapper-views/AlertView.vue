<script setup>
import { AlertModel, WarningAlertModel, CustomAlertModel } from '@/components/models/alertModel.js';
import  DaisyAlert  from '@/components/base/DaisyAlert.vue';
import { RocketLaunchIcon } from '@heroicons/vue/24/outline'

const successAlert = new AlertModel({ type: 'SUCCESS', message: 'This is a success alert with AlertModel!' });
const errorAlert = new AlertModel({ type: 'ERROR', message: 'This is an error alert with AlertModel!' });
const infoAlert = new AlertModel({ type: 'INFO', message: 'This is an info alert with AlertModel!', direction: 'vertical' });  
const warningAlert = new AlertModel({ type: 'WARNING', message: 'This is a warning alert with AlertModel!'});
const Warning = new WarningAlertModel({ message: 'This is another success alert using WarningAlertModel!' });

const customAlert = new CustomAlertModel({ 
    message: 'This is a custom alert with a custom type!', 
    customIcon: RocketLaunchIcon
});


</script>

<template>  

    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-4">DaisyUI Alert Component Tests</h1>

        <div class="space-y-4">
            <DaisyAlert :alert-model="successAlert" />
            <DaisyAlert :alert-model="errorAlert" />
            <DaisyAlert :alert-model="infoAlert" />
            <DaisyAlert :alert-model="warningAlert" />
            <DaisyAlert :alert-model="Warning" />
            <!-- slot example -->
            <DaisyAlert :alert-model="successAlert">Overridden slot message for success alert</DaisyAlert>
            <DaisyAlert :alert-model="customAlert" class=" alert-success">
                <template #icon>
                    <component :is="customAlert.customIcon" class="size-6" />
                </template>
            </DaisyAlert>
        </div>
    </div>
</template>