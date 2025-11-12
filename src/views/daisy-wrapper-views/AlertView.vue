<script setup>
import { AlertModel } from '@/components/models/alertModel.js';
import  DaisyAlert  from '@/components/base/DaisyAlert.vue';

const successAlert = new AlertModel({ type: 'SUCCESS', message: 'This is a success alert!' });
const errorAlert = new AlertModel({ type: 'ERROR', message: 'This is an error alert!' });
const infoAlert = new AlertModel({ type: 'INFO', message: 'This is an info alert!', direction: 'vertical' });  
const warningAlert = new AlertModel({ type: 'WARNING', message: 'This is a warning alert!'});



</script>

<template>  

    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-4">DaisyUI Alert Component Tests</h1>

        <div class="space-y-4">
            <DaisyAlert :alert-model="successAlert" />
            <DaisyAlert :alert-model="errorAlert" />
            <DaisyAlert :alert-model="infoAlert" />
            <DaisyAlert :alert-model="warningAlert" />
            <!-- slot example -->
            <DaisyAlert :alert-model="successAlert">Overridden slot message for success alert</DaisyAlert>
        </div>
    </div>
</template>