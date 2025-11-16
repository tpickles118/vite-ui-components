<!--
  ButtonView.vue
  Demo view for DaisyButton component with all style, color, size, shape, state, icon, and event demos.
-->

<script setup>
import { ref } from 'vue'
import { ButtonModel } from '@/components/models/buttonModel.js'
import DaisyButton from '@/components/base/DaisyButton.vue'
import { RocketLaunchIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

// Color variants
const primaryBtn = new ButtonModel({ label: 'Primary', color: 'PRIMARY' })
const secondaryBtn = new ButtonModel({ label: 'Secondary', color: 'SECONDARY' })
const accentBtn = new ButtonModel({ label: 'Accent', color: 'ACCENT' })
const infoBtn = new ButtonModel({ label: 'Info', color: 'INFO' })
const successBtn = new ButtonModel({ label: 'Success', color: 'SUCCESS' })
const warningBtn = new ButtonModel({ label: 'Warning', color: 'WARNING' })
const errorBtn = new ButtonModel({ label: 'Error', color: 'ERROR' })
const neutralBtn = new ButtonModel({ label: 'Neutral', color: 'NEUTRAL' })

// Size
const smallBtn = new ButtonModel({ label: 'Small', size: 'SM' })
const largeBtn = new ButtonModel({ label: 'Large', size: 'LG' })

// Variant styles
const outlineBtn = new ButtonModel({ label: 'Outline', color: 'PRIMARY', variant: 'OUTLINE' })
const ghostBtn = new ButtonModel({ label: 'Ghost', color: 'PRIMARY', variant: 'GHOST' })
const dashBtn = new ButtonModel({ label: 'Dash', color: 'PRIMARY', variant: 'DASH' })
const softBtn = new ButtonModel({ label: 'Soft', color: 'PRIMARY', variant: 'SOFT' })
const linkBtn = new ButtonModel({ label: 'Link', color: 'PRIMARY', variant: 'LINK' })

// Shape
const circleBtn = new ButtonModel({ shape: 'CIRCLE', color: 'ACCENT', icon: RocketLaunchIcon, label: '', size: 'LG' })
const squareBtn = new ButtonModel({ shape: 'SQUARE', color: 'PRIMARY', icon: RocketLaunchIcon, label: '', size: 'LG' })
const wideBtn = new ButtonModel({ shape: 'WIDE', color: 'SUCCESS', label: 'Wide' })
const blockBtn = new ButtonModel({ shape: 'BLOCK', color: 'PRIMARY', label: 'Block' })

// States
const activeBtn = ref(new ButtonModel({ label: 'Active', color: 'INFO', isActive: true }))
const disabledBtn = new ButtonModel({ label: 'Disabled', color: 'ERROR', isDisabled: true })
const loadingBtn = ref(new ButtonModel({ label: 'Loading', color: 'PRIMARY', isLoading: true }))

// Icons
const iconLeftBtn = new ButtonModel({ label: 'Left Icon', color: 'SUCCESS', icon: CheckCircleIcon, iconPosition: 'START' })
const iconRightBtn = new ButtonModel({ label: 'Right Icon', color: 'SUCCESS', icon: CheckCircleIcon, iconPosition: 'END' })

// Edge cases
const loadingDisabledBtn = new ButtonModel({ label: 'Loading & Disabled', color: 'ERROR', isLoading: true, isDisabled: true })
const iconOnlyBtn = new ButtonModel({ color: 'ACCENT', shape: 'CIRCLE', icon: RocketLaunchIcon, size: 'LG', label: '' })
const longLabelBtn = new ButtonModel({ color: 'INFO', label: 'This is a very long button label for demo purposes.' })

// Event handlers
function handleButtonClick({ buttonId, label }) {
    console.log(`Clicked: ${label} (ID: ${buttonId})`)
}
function handleFocus({ buttonModel }) { console.log(`Focused: ${buttonModel.label}`) }
function handleBlur({ buttonModel }) { console.log(`Blurred: ${buttonModel.label}`) }
function handleMouseEnter({ buttonModel }) { console.log(`Mouse entered: ${buttonModel.label}`) }
function handleMouseLeave({ buttonModel }) { console.log(`Mouse left: ${buttonModel.label}`) }

</script>

<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-6">DaisyButton Component Test</h1>

    <!-- Color variants -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Color Variants</h2>
      <div class="flex flex-wrap gap-2">
        <DaisyButton :button-model="primaryBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="secondaryBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="accentBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="infoBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="successBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="warningBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="errorBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="neutralBtn" @click="handleButtonClick" />
      </div>
    </section>

    <!-- Size variants -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Size Variants</h2>
      <div class="flex gap-2">
        <DaisyButton :button-model="smallBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="primaryBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="largeBtn" @click="handleButtonClick" />
      </div>
    </section>

    <!-- Style variants -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Style Variants</h2>
      <div class="flex flex-wrap gap-2">
        <DaisyButton :button-model="outlineBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="ghostBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="dashBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="softBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="linkBtn" @click="handleButtonClick" />
      </div>
    </section>

    <!-- Shape variants -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Shape Variants</h2>
      <div class="flex flex-wrap gap-2 items-center">
        <DaisyButton :button-model="circleBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="squareBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="wideBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="blockBtn" class="w-full" @click="handleButtonClick" />
      </div>
    </section>

    <!-- States -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">States</h2>
      <div class="flex gap-2">
        <DaisyButton :button-model="activeBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="disabledBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="loadingBtn" @click="handleButtonClick" />
      </div>
    </section>

    <!-- Icon left/right demos -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Icon & Content</h2>
      <div class="flex gap-2">
        <DaisyButton :button-model="iconLeftBtn" @click="handleButtonClick" />
        <DaisyButton :button-model="iconRightBtn" @click="handleButtonClick" />
      </div>
    </section>

    <!-- Event Handling Demo -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Event Handling</h2>
      <div class="flex gap-2">
        <DaisyButton
          :button-model="primaryBtn"
          @focus="handleFocus"
          @blur="handleBlur"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          @click="handleButtonClick"
        />
        <DaisyButton
          :button-model="disabledBtn"
          @focus="handleFocus"
          @blur="handleBlur"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          @click="handleButtonClick"
        />
      </div>
      <p class="text-xs mt-2 text-gray-500">
        Watch the console for event logs when you interact with these buttons.
      </p>
    </section>

    <!-- Edge Cases -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Edge Cases</h2>
      <div class="flex gap-2">
        <!-- Loading and Disabled at once -->
        <DaisyButton
          :button-model="loadingDisabledBtn"
          @click="handleButtonClick"
          @focus="handleFocus"
        />
        <!-- Button with no label, just icon -->
        <DaisyButton
          :button-model="iconOnlyBtn"
          @click="handleButtonClick"
        />
        <!-- Button with long label -->
        <DaisyButton
          :button-model="longLabelBtn"
          @click="handleButtonClick"
        />
      </div>
    </section>

  </div>
</template>
