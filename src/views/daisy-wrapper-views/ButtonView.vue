<!-- ButtonView.vue
  Demo view showcasing BaseButton component with all style variants, states, and event handling.
-->
<script setup>
import { ref } from 'vue'
import { BUTTON_OPTIONS } from '@/constants'
import { ButtonModel } from '@/components/models/base/buttonModel.js'
import BaseButton from '@/components/base/BaseButton.vue'
import { RocketLaunchIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

// Color variant examples
const primaryBtn = new ButtonModel({ 
  label: 'Primary', 
  color: BUTTON_OPTIONS.COLOR.PRIMARY 
})
const secondaryBtn = new ButtonModel({ 
  label: 'Secondary', 
  color: BUTTON_OPTIONS.COLOR.SECONDARY 
})
const accentBtn = new ButtonModel({ 
  label: 'Accent', 
  color: BUTTON_OPTIONS.COLOR.ACCENT 
})
const infoBtn = new ButtonModel({ 
  label: 'Info', 
  color: BUTTON_OPTIONS.COLOR.INFO 
})
const successBtn = new ButtonModel({ 
  label: 'Success', 
  color: BUTTON_OPTIONS.COLOR.SUCCESS 
})
const warningBtn = new ButtonModel({ 
  label: 'Warning', 
  color: BUTTON_OPTIONS.COLOR.WARNING 
})
const errorBtn = new ButtonModel({ 
  label: 'Error', 
  color: BUTTON_OPTIONS.COLOR.ERROR 
})
const neutralBtn = new ButtonModel({ 
  label: 'Neutral', 
  color: BUTTON_OPTIONS.COLOR.NEUTRAL 
})

// Size variant examples
const smallBtn = new ButtonModel({ 
  label: 'Small', 
  size: BUTTON_OPTIONS.SIZE.SM 
})
const largeBtn = new ButtonModel({ 
  label: 'Large', 
  size: BUTTON_OPTIONS.SIZE.LG 
})

// Style variant examples
const outlineBtn = new ButtonModel({
  label: 'Outline',
  color: BUTTON_OPTIONS.COLOR.PRIMARY,
  variant: BUTTON_OPTIONS.VARIANT.OUTLINE,
})
const ghostBtn = new ButtonModel({
  label: 'Ghost',
  color: BUTTON_OPTIONS.COLOR.PRIMARY,
  variant: BUTTON_OPTIONS.VARIANT.GHOST,
})
const dashBtn = new ButtonModel({
  label: 'Dash',
  color: BUTTON_OPTIONS.COLOR.PRIMARY,
  variant: BUTTON_OPTIONS.VARIANT.DASH,
})
const softBtn = new ButtonModel({
  label: 'Soft',
  color: BUTTON_OPTIONS.COLOR.PRIMARY,
  variant: BUTTON_OPTIONS.VARIANT.SOFT,
})
const linkBtn = new ButtonModel({
  label: 'Link',
  color: BUTTON_OPTIONS.COLOR.PRIMARY,
  variant: BUTTON_OPTIONS.VARIANT.LINK,
})

// Shape variant examples
const circleBtn = new ButtonModel({
  shape: BUTTON_OPTIONS.SHAPE.CIRCLE,
  color: BUTTON_OPTIONS.COLOR.ACCENT,
  icon: RocketLaunchIcon,
  label: '',
  size: BUTTON_OPTIONS.SIZE.LG,
})
const squareBtn = new ButtonModel({
  shape: BUTTON_OPTIONS.SHAPE.SQUARE,
  color: BUTTON_OPTIONS.COLOR.PRIMARY,
  icon: RocketLaunchIcon,
  label: '',
  size: BUTTON_OPTIONS.SIZE.LG,
})
const wideBtn = new ButtonModel({
  shape: BUTTON_OPTIONS.SHAPE.WIDE,
  color: BUTTON_OPTIONS.COLOR.SUCCESS,
  label: 'Wide',
})
const blockBtn = new ButtonModel({
  shape: BUTTON_OPTIONS.SHAPE.BLOCK,
  color: BUTTON_OPTIONS.COLOR.PRIMARY,
  label: 'Block',
})

// State examples
const activeBtn = ref(
  new ButtonModel({
    label: 'Active',
    color: BUTTON_OPTIONS.COLOR.INFO,
    isActive: true,
  })
)
const disabledBtn = new ButtonModel({
  label: 'Disabled',
  color: BUTTON_OPTIONS.COLOR.ERROR,
  isDisabled: true,
})
const loadingBtn = ref(
  new ButtonModel({
    label: 'Loading',
    color: BUTTON_OPTIONS.COLOR.PRIMARY,
    isLoading: true,
  })
)

// Icon position examples
const iconLeftBtn = new ButtonModel({
  label: 'Left Icon',
  color: BUTTON_OPTIONS.COLOR.SUCCESS,
  icon: CheckCircleIcon,
  iconPosition: 'START',
})
const iconRightBtn = new ButtonModel({
  label: 'Right Icon',
  color: BUTTON_OPTIONS.COLOR.SUCCESS,
  icon: CheckCircleIcon,
  iconPosition: 'END',
})

// Edge case examples
const loadingDisabledBtn = new ButtonModel({
  label: 'Loading + Disabled',
  color: BUTTON_OPTIONS.COLOR.ERROR,
  isLoading: true,
  isDisabled: true,
})
const iconOnlyBtn = new ButtonModel({
  color: BUTTON_OPTIONS.COLOR.ACCENT,
  shape: BUTTON_OPTIONS.SHAPE.CIRCLE,
  icon: RocketLaunchIcon,
  size: BUTTON_OPTIONS.SIZE.LG,
  label: '',
})
const longLabelBtn = new ButtonModel({
  color: BUTTON_OPTIONS.COLOR.INFO,
  label: 'This is a very long button label for demo purposes.',
})

// Handles button click events
function handleButtonClick({ buttonId, label }) {
  console.log('Clicked:', label, 'ID:', buttonId)
}

// Handles button focus events
function handleFocus({ buttonModel }) {
  console.log('Focused:', buttonModel.label)
}

// Handles button blur events
function handleBlur({ buttonModel }) {
  console.log('Blurred:', buttonModel.label)
}

// Handles mouse enter events
function handleMouseEnter({ buttonModel }) {
  console.log('Mouse entered:', buttonModel.label)
}

// Handles mouse leave events
function handleMouseLeave({ buttonModel }) {
  console.log('Mouse left:', buttonModel.label)
}
</script>

<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-6">BaseButton Component Test</h1>

    <!-- Color variants -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Color Variants</h2>
      <div class="flex flex-wrap gap-2">
        <BaseButton :button-model="primaryBtn" @click="handleButtonClick" />
        <BaseButton :button-model="secondaryBtn" @click="handleButtonClick" />
        <BaseButton :button-model="accentBtn" @click="handleButtonClick" />
        <BaseButton :button-model="infoBtn" @click="handleButtonClick" />
        <BaseButton :button-model="successBtn" @click="handleButtonClick" />
        <BaseButton :button-model="warningBtn" @click="handleButtonClick" />
        <BaseButton :button-model="errorBtn" @click="handleButtonClick" />
        <BaseButton :button-model="neutralBtn" @click="handleButtonClick" />
      </div>
    </section>

    <!-- Size variants -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Size Variants</h2>
      <div class="flex gap-2">
        <BaseButton :button-model="smallBtn" @click="handleButtonClick" />
        <BaseButton :button-model="primaryBtn" @click="handleButtonClick" />
        <BaseButton :button-model="largeBtn" @click="handleButtonClick" />
      </div>
    </section>

    <!-- Style variants -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Style Variants</h2>
      <div class="flex flex-wrap gap-2">
        <BaseButton :button-model="outlineBtn" @click="handleButtonClick" />
        <BaseButton :button-model="ghostBtn" @click="handleButtonClick" />
        <BaseButton :button-model="dashBtn" @click="handleButtonClick" />
        <BaseButton :button-model="softBtn" @click="handleButtonClick" />
        <BaseButton :button-model="linkBtn" @click="handleButtonClick" />
      </div>
    </section>

    <!-- Shape variants -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Shape Variants</h2>
      <div class="flex flex-wrap gap-2 items-center">
        <BaseButton :button-model="circleBtn" @click="handleButtonClick" />
        <BaseButton :button-model="squareBtn" @click="handleButtonClick" />
        <BaseButton :button-model="wideBtn" @click="handleButtonClick" />
        <BaseButton :button-model="blockBtn" class="w-full" @click="handleButtonClick" />
      </div>
    </section>

    <!-- States -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">States</h2>
      <div class="flex gap-2">
        <BaseButton :button-model="activeBtn" @click="handleButtonClick" />
        <BaseButton :button-model="disabledBtn" @click="handleButtonClick" />
        <BaseButton :button-model="loadingBtn" @click="handleButtonClick" />
      </div>
    </section>

    <!-- Icon positioning -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Icon Content</h2>
      <div class="flex gap-2">
        <BaseButton :button-model="iconLeftBtn" @click="handleButtonClick" />
        <BaseButton :button-model="iconRightBtn" @click="handleButtonClick" />
      </div>
    </section>

    <!-- Event handling -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Event Handling</h2>
      <div class="flex gap-2">
        <BaseButton
          :button-model="primaryBtn"
          @focus="handleFocus"
          @blur="handleBlur"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          @click="handleButtonClick"
        />
        <BaseButton
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

    <!-- Edge cases -->
    <section class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Edge Cases</h2>
      <div class="flex gap-2">
        <BaseButton
          :button-model="loadingDisabledBtn"
          @click="handleButtonClick"
          @focus="handleFocus"
        />
        <BaseButton :button-model="iconOnlyBtn" @click="handleButtonClick" />
        <BaseButton :button-model="longLabelBtn" @click="handleButtonClick" />
      </div>
    </section>
  </div>
</template>
