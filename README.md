
***

# vite-ui-components

A Vue 3 + Vite-based, production-ready component library template. Modern tooling, best practices, and common UI methodology are pre-configured for an efficient workflow.

## 🚀 Features

- **Vue 3** – Progressive JavaScript framework
- **Vite** – Lightning-fast frontend tooling
- **Tailwind CSS** – Utility-first CSS framework
- **DaisyUI** – Beautiful UI components for Tailwind
- **Vue Router** – Official Vue routing solution
- **Axios** – Promise-based HTTP client with interceptors
- **ESLint/Prettier** – Code linting and formatting
- **Path Aliases** – Clean import paths (`@`)
- **Environment Variables** – Vite ENV setup for all environments


## 📋 Prerequisites

- **Node.js v18+**
- **npm** or **yarn**


## 🛠️ Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/tpickles118/vite-ui-components.git](https://github.com/tpickles118/vite-ui-components.git)
cd vite-ui-components
npm install
```


## 🚀 Development

Run the development server:

```bash
npm run dev
# App runs at http://localhost:5173
```


## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```


## 🧹 Code Quality

Lint your code:

```bash
npm run lint
```

Format your code:

```bash
npm run format
```


## 📁 Project Structure

```
├── public/                # Static assets
├── src/
│   ├── api/               # API config/services (axios setup)
│   ├── assets/            # Images, styles, etc.
│   ├── components/        # Reusable Vue components
│   │   └── base/          # Low-level, foundational UI components
│   ├── router/            # Vue Router config
│   ├── views/             # Page components
│   ├── App.vue            # Root Vue component
│   ├── main.js            # Main entry point
│   └── style.css          # Global styles (with Tailwind)
├── .env                   # Default env variables
├── .env.development
├── .env.production
├── .eslintrc.cjs          # ESLint config
├── .prettierrc            # Prettier config
├── eslint.config.js
├── index.html             # Main HTML entry
├── jsconfig.json          # Path alias config
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```


## 🔧 Configuration

### Environment Variables

Prefix your variables with `VITE_` in `.env` files:

```env
VITE_API_URL=https://api.example.com
```

Usage in code:

```js
const apiUrl = import.meta.env.VITE_API_URL
```


### Path Alias

Use `@` for clean imports:

```js
import Button from '@/components/Button.vue'
```


### Axios

Axios instance is in `src/api/axios.js` with:

- Base URL from env
- Request/response interceptors
- Auth token handling
- Global error handling


## 🎨 Styling

**Tailwind CSS** and **DaisyUI** are available globally.
Example:

```html
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">My Card</h2>
    <p>Card content here</p>
  </div>
</div>
```


***

## 🧩 Base UI Components

The following base UI components are available in `src/components/base`:


| Component | File Path | Description |
| :-- | :-- | :-- |
| DaisyAlert | `src/components/base/DaisyAlert.vue` | Alert banner for warnings, success, info, error, or custom messages |
| DaisyBadge | `src/components/base/DaisyBadge.vue` | Versatile badge label for notifications or statuses |

### How to Use

Import these base components into your Vue files:

```vue
<script setup>
import DaisyAlert from '@/components/base/DaisyAlert.vue'
import DaisyBadge from '@/components/base/DaisyBadge.vue'
</script>
```


#### DaisyAlert Example

```vue
<DaisyAlert type="success" message="Operation was successful!"/>
<DaisyAlert type="error" message="Something went wrong."/>
```

**Props:**

- `type` – `'success' | 'info' | 'warning' | 'error' | 'custom'`
- `message` – String (alert message to display)


#### DaisyBadge Example

```vue
<DaisyBadge text="New" type="info"/>
```

**Props:**

- `text` – String (label to display in the badge)
- `type` – `'success' | 'info' | 'warning' | 'error' | etc.` (choose your color/purpose)

**Tip:**
Check each `*.vue` file for more available props and customization options.

***

## 📝 Demo Pages

Demo views are provided to showcase the setup and usage of your core and base components, including wrappers for DaisyUI:

- **Home:** Main landing page for your project (`/src/views/HomeView.vue`)
- **About:** Example of a static route (`/src/views/AboutView.vue`)
- **Users:** Demonstrates dynamic routing and API calls (`/src/views/UsersApi.vue`)
- **Daisy Wrapper Views:** Specialized demo pages for DaisyUI components, located in `/src/views/daisy-wrapper-views`
    - **AlertView.vue:** Demo and documentation for DaisyAlert usage and variants
    - **BadgeView.vue:** Demo and documentation for DaisyBadge usage and variants


## 🙏 Acknowledgments

- Vue.js
- Vite
- Tailwind CSS
- DaisyUI
- Vue Router
- Axios


## 📧 Support

For issues and questions, use the [GitHub Issues page](https://github.com/tpickles118/vite-ui-components/issues).

***

**Happy Coding! 🎉**

***

create an update for these files

components/base/DaisyAlert.vue
================================================================================

<!--
  DaisyAlert.vue
  Reusable alert component with DaisyUI styling and flexible slot support.
-->
<script setup>
import { computed } from 'vue'
import { ALERT_OPTIONS } from '@/constants'
import { AlertModel } from '@/components/models/alertModel.js'
import {
    InformationCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({
    alertModel: {
        type: [Object, AlertModel],
        required: true,
    },
})

const emit = defineEmits(['button-click', 'dismiss', 'action'])

// Icon mapping for alert types
const iconMap = {
    INFO: InformationCircleIcon,
    SUCCESS: CheckCircleIcon,
    WARNING: ExclamationTriangleIcon,
    ERROR: ExclamationCircleIcon,
}

// Resolves icon: custom icon from model takes precedence over type-based icon
const currentIcon = computed(() => {
    if (props.alertModel?.customIcon) {
        return props.alertModel.customIcon
    }
    return iconMap[props.alertModel?.type] || null
})

// Builds CSS classes based on alert model properties
const classes = computed(() => {
    const am = props.alertModel || {}
    const cls = [ALERT_OPTIONS.ALERT]

    if (am.type) {
        const typeVal = ALERT_OPTIONS.TYPE?.[am.type] ?? am.type
        if (typeVal) cls.push(typeVal)
    }

    if (am.isOutline) cls.push(ALERT_OPTIONS.OUTLINE)
    if (am.isDash) cls.push(ALERT_OPTIONS.DASH)
    if (am.isSoft) cls.push(ALERT_OPTIONS.SOFT)

    if (am.direction) {
        const dirVal = ALERT_OPTIONS.DIRECTION?.[am.direction] ?? am.direction
        if (dirVal) cls.push(dirVal)
    }

    return cls
})

// Emits button click with alert context
const handleButtonClick = (buttonKey) => {
    emit('button-click', {
        alertId: props.alertModel?.id,
        buttonKey,
        alertModel: props.alertModel,
    })
}

// Emits dismiss event with alert ID
const handleDismiss = () => {
    emit('dismiss', {
        alertId: props.alertModel?.id,
        alertModel: props.alertModel,
    })
}

// Emits custom action event
const handleAction = (actionKey) => {
    emit('action', {
        alertId: props.alertModel?.id,
        actionKey,
        alertModel: props.alertModel,
    })
}
</script>
<template>
    <div :id="alertModel?.id" :class="classes" role="alert" aria-label="alert">
        <!-- Icon slot with fallback to type-based icon -->
        <slot name="icon">
            <component :is="currentIcon" v-if="currentIcon" class="size-5 mr-2" />
        </slot>

        <!-- Title slot -->
        <slot name="title">
            <h3 v-if="alertModel?.title" class="font-bold">
                {{ alertModel?.title }}
            </h3>
        </slot>

        <!-- Message slot with responsive text sizing -->
        <slot name="message">
            <div v-if="alertModel?.message" :class="alertModel?.title ? 'txt-xs' : ''">
                {{ alertModel?.message }}
            </div>
        </slot>

        <!-- Render action buttons from model -->
        <div v-if="alertModel?.buttons && alertModel.buttons.length > 0" class="flex gap-2">
            <button
                v-for="button in alertModel.buttons"
                :key="button.key || button.label"
                :class="button.class || 'btn btn-sm'"
                :disabled="button.disabled"
                @click="handleButtonClick(button.key || button.label)"
            >
                {{ button.label || 'Button' }}
            </button>
        </div>

        <!-- Dismiss button -->
        <button
            v-if="alertModel?.isDismissible"
            class="btn btn-sm btn-ghost ml-auto"
            @click="handleDismiss"
        >
            <XMarkIcon class="size-5" />
        </button>

        <!-- Custom actions slot -->
        ```
        <slot name="actions" :on-action="handleAction"></slot>
        ```
    </div>
</template>
================================================================================

components/base/DaisyBadge.vue
================================================================================

<!--
  DaisyBadge.vue
  Reusable badge component with DaisyUI styling, click/dismiss handlers, and slot support.
-->
<script setup>
import { computed } from 'vue'
import { BADGE_OPTIONS } from '@/constants'
import { BadgeModel } from '@/components/models/badgeModel.js'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    badgeModel: {
        type: [Object, BadgeModel],
        required: true,
    },
})

const emit = defineEmits(['click', 'dismiss', 'hover', 'mouseenter', 'mouseleave'])

// Builds CSS classes based on badge model properties
const classes = computed(() => {
    const bm = props.badgeModel || {}
    const cls = [BADGE_OPTIONS.BADGE]

    if (bm.size) {
        const sizeVal = BADGE_OPTIONS.SIZE?.[bm.size] ?? bm.size
        if (sizeVal) cls.push(sizeVal)
    }

    if (bm.color) {
        const colorVal = BADGE_OPTIONS.COLOR?.[bm.color] ?? bm.color
        if (colorVal) cls.push(colorVal)
    }

    if (bm.isSoft) cls.push(BADGE_OPTIONS.SOFT)
    if (bm.isOutline) cls.push(BADGE_OPTIONS.OUTLINE)
    if (bm.isDash) cls.push(BADGE_OPTIONS.DASH)
    if (bm.isGhost) cls.push(BADGE_OPTIONS.GHOST)

    // add cursor pointer if click handler is interactive
    if (bm.isClickable || bm.isDismissible) {
        cls.push('cursor-pointer')
    }

    return cls
})

// Emits click event with badge context
const handleClick = (event) => {
    if (props.badgeModel?.isClickable) {
        emit('click', {
            badgeId: props.badgeModel.id,
            label: props.badgeModel.label,
            badgeModel: props.badgeModel,
            event,
        })
    }
}

// Emits dismiss event and prevents click propagation
const handleDismiss = (event) => {
    event.stopPropagation() // Prevent click event from firing
    emit('dismiss', {
        badgeId: props.badgeModel?.id,
        label: props.badgeModel?.label,
        badgeModel: props.badgeModel,
    })
}

// Emits mouseenter event with badge context
const handleMouseEnter = (event) => {
    emit('mouseenter', {
        badgeId: props.badgeModel?.id,
        badgeModel: props.badgeModel,
        event,
    })
}

// Emits mouseleave event with badge context
const handleMouseLeave = (event) => {
    emit('mouseleave', {
        badgeId: props.badgeModel?.id,
        badgeModel: props.badgeModel,
        event,
    })
}


</script>
<template>
    <span
        :id="badgeModel?.id"
        :class="classes"
        role="status"
        aria-label="badgeModel?.ariaLabel || 'badge'"
        @click="handleClick"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
        <slot>{{ badgeModel?.label }}</slot>

        <!-- dismiss button -->
         <button 
            v-if="badgeModel?.isDismissible"
            type="button"
            class="ml-1 inline-flex items-center"
            @click="handleDismiss"
            aria-label="Remove badge"
        >
        <XMarkIcon class="size-3" />
    </button>
    </span>
</template>
================================================================================

components/base/DaisyToast.vue
================================================================================

<!--
  DaisyToast.vue
  Toast notification wrapper that displays positioned alerts with auto-hide functionality.
-->
<script setup>
import { computed, watch, onBeforeUnmount } from 'vue'
import { TOAST_OPTIONS } from '@/constants/index.js'
import DaisyAlert from '@/components/base/DaisyAlert.vue'

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
================================================================================

views/daisy-wrapper-views/AlertView.vue
================================================================================

<!--
  AlertView.vue
  Demo view showcasing DaisyAlert component with various configurations.
-->
<script setup>
import { ref } from 'vue'
import { AlertModel, WarningAlertModel, CustomAlertModel } from '@/components/models/alertModel.js'
import DaisyAlert from '@/components/base/DaisyAlert.vue'
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
        buttons: [{ key: 'view', label: 'View', class: 'btn btn-sm btn-primary' }],
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
            { key: 'save', label: 'Save', class: 'btn btn-sm btn-success' },
            { key: 'discard', label: 'Discard', class: 'btn btn-sm btn-ghost' },
        ],
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
        buttons: [{ key: 'retry', label: 'Retry', class: 'btn btn-sm btn-error' }],
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
        ```
        <h1 class="text-4xl font-bold mb-4">DaisyUI Alert Component Tests</h1>
        ```

        <div class="space-y-4">
            <section>
                ```
                <h3 class="text-lg font-semibold mb-2">Alert as basic Success with AlertModel</h3>
                ```
                <DaisyAlert :alert-model="successAlert" />
            </section>

            <section>
                ```
                <h3 class="text-lg font-semibold mb-2">Alert as basic Error with AlertModel</h3>
                ```
                <DaisyAlert :alert-model="errorAlert" />
            </section>

            <section>
                ```
                <h3 class="text-lg font-semibold mb-2">Alert as basic Info with AlertModel</h3>
                ```
                <DaisyAlert :alert-model="infoAlert" />
            </section>

            <section>
                ```
                <h3 class="text-lg font-semibold mb-2">Alert as basic Warning with AlertModel</h3>
                ```
                <DaisyAlert :alert-model="warningAlert" />
            </section>

            <section>
                ```
                <h3 class="text-lg font-semibold mb-2">Alert with WarningAlertModel</h3>
                ```
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
                ```
                <h3 class="text-lg font-semibold mb-2">Alert with Action Button</h3>
                ```
                <DaisyAlert :alert-model="infoAlert2" @button-click="handleButtonClick" />
            </section>

            <section>
                ```
                <h3 class="text-lg font-semibold mb-2">Alert with Multiple Buttons</h3>
                ```
                <DaisyAlert :alert-model="warningAlert2" @button-click="handleButtonClick" />
            </section>

            <section>
                ```
                <h3 class="text-lg font-semibold mb-2">Dismissible Alert</h3>
                ```
                <DaisyAlert :alert-model="successAlert2" @dismiss="handleDismiss" />
            </section>

            <section>
                ```
                <h3 class="text-lg font-semibold mb-2">Error Alert with Actions</h3>
                ```
                <DaisyAlert
                    :alert-model="errorAlert2"
                    @button-click="handleButtonClick"
                    @dismiss="handleDismiss"
                />
            </section>

            <section>
                ```
                <h3 class="text-lg font-semibold mb-2">Alert with Custom Action Slot</h3>
                ```
                <DaisyAlert :alert-model="customAlert2" @action="handleAction">
                    <template #actions="{ onAction }">
                        ```
                        <button class="btn btn-sm btn-primary" @click="handleCustomSee">See</button>
                        ```
                    </template>
                </DaisyAlert>
            </section>

            <section>
                ```
                <h3 class="text-lg font-semibold mb-2">Complex Alert Example</h3>
                ```
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
================================================================================

views/daisy-wrapper-views/BadgeView.vue
================================================================================

<!--
  BadgeView.vue
  Demo view showcasing DaisyBadge component with various configurations.
-->
<script setup>
import { ref } from 'vue'
import { BadgeModel } from '@/components/models/badgeModel.js'
import DaisyBadge from '@/components/base/DaisyBadge.vue'

// Basic badge examples
const basic = new BadgeModel()
const primarySoft = new BadgeModel({
    size: 'LG',
    color: 'PRIMARY',
    isSoft: true,
    label: 'Primary Soft',
})
const outlined = new BadgeModel({
    size: 'SM',
    color: 'SECONDARY',
    isOutline: true,
    label: 'Outline',
})

// Interactive badge examples
const filterBadge = ref(
    new BadgeModel({
        label: 'Filter Badge - hover and click',
        color: 'PRIMARY',
        isClickable: true,
    })
)

const tagBadge = ref(
    new BadgeModel({
        label: 'Important - click with icon',
        color: 'WARNING',
        isDismissible: true,
    })
)

// Handles badge click events
const handleBadgeClick = ({ badgeId, label }) => {
    console.log(`Badge clicked: ${label} (ID: ${badgeId})`)
    // Handle filter toggle, navigation, etc.
}

// Handles badge dismissal
const handleBadgeDismiss = ({ badgeId, label }) => {
    console.log(`Badge dismissed: ${label} (ID: ${badgeId})`)
    // Remove badge from list
}

// Handles badge hover events
const handleBadgeHover = ({ badgeId }) => {
    console.log(`Badge hovered: ${badgeId}`)
    // Show to
}
</script>
<template>
    <div class="container mx-auto p-8">
        ```
        <h1 class="text-4xl font-bold mb-4">DaisyUI Badge Component Tests</h1>
        ```

        <div class="space-x-4">
            <DaisyBadge :badge-model="basic" />
            <DaisyBadge :badge-model="primarySoft" />
            <DaisyBadge :badge-model="outlined" />
            <!-- slot example -->
            ```
            <DaisyBadge :badge-model="basic">Overridden slot</DaisyBadge>
            ```
        </div>
        <div class="space-x-2">
            <DaisyBadge
                :badge-model="filterBadge"
                @click="handleBadgeClick"
                @mouseenter="handleBadgeHover"
            />
            <DaisyBadge :badge-model="tagBadge" @dismiss="handleBadgeDismiss" />
        </div>
    </div>
</template>
================================================================================

views/daisy-wrapper-views/ToastView.vue
================================================================================

<!--
  ToastView.vue
  Demo view showcasing DaisyToast component with different notification types.
-->
<script setup>
import { ref } from 'vue'
import { ToastModel } from '@/components/models/toastModel.js'
import { AlertModel } from '@/components/models/alertModel.js'
import DaisyToast from '@/components/base/DaisyToast.vue'

// Creates an alert model from simplified parameters
function makeAlert({ type, message = '', title = '', ...rest }) {
    return new AlertModel({
        type,
        message: message || `${type.charAt(0) + type.slice(1).toLowerCase()} notification!`,
        title,
        ...rest,
    })
}

// Toast model with positioning and auto-hide configuration
const toastModel = ref(
    new ToastModel({
        horizontalPosition: 'END',
        verticalPosition: 'BOTTOM',
        alerts: [], // start empty for demo
        isVisible: false,
        duration: 3000, // auto-hide after 3s
    })
)

// Displays toast with specified type and message
function showToast(type, message = '', title = '') {
    toastModel.value.alerts = [makeAlert({ type, message, title })]
    toastModel.value.isVisible = true
}

// Hides the currently displayed toast
function hideToast() {
    toastModel.value.isVisible = false
}
</script>
<template>
    <div class="container mx-auto p-8">
        ```
        <h1 class="text-4xl font-bold mb-4">DaisyUI Toast Component Test</h1>
        ```

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
            ```
            <button class="btn btn-ghost" @click="hideToast">Hide Toast</button>
            ```
        </div>

        <DaisyToast :toast-model="toastModel" @auto-hide="hideToast" />
    </div>
</template>
================================================================================

constants/index.js
================================================================================
/**

* constants/index.js
* DaisyUI component styling constants for alerts and badges.
*/

export const ALERT_OPTIONS = {
ALERT: 'alert',
OUTLINE: 'alert-outline',
DASH: 'alert-dash',
SOFT: 'alert-soft',
TYPE: {
INFO: 'alert-info',
SUCCESS: 'alert-success',
WARNING: 'alert-warning',
ERROR: 'alert-error',
},
DIRECTION: {
VERTICAL: 'alert-vertical',
HORIZONTAL: 'alert-horizontal',
},
}

export const BADGE_OPTIONS = {
BADGE: 'badge',
SIZE: {
XS: 'badge-xs',
SM: 'badge-sm',
MD: 'badge-md',
LG: 'badge-lg',
XL: 'badge-xl',
},
COLOR: {
PRIMARY: 'badge-primary',
SECONDARY: 'badge-secondary',
ACCENT: 'badge-accent',
NEUTRAL: 'badge-neutral',
INFO: 'badge-info',
SUCCESS: 'badge-success',
WARNING: 'badge-warning',
ERROR: 'badge-error',
},
SOFT: 'badge-soft',
OUTLINE: 'badge-outline',
DASH: 'badge-dash',
GHOST: 'badge-ghost',
}

export const TOAST_OPTIONS = {
TOAST: 'toast',
PLACEMENT: {
HORIZONTAL: {
START: 'toast-start',
CENTER: 'toast-center',
END: 'toast-end',
},
VERTICAL: {
TOP: 'toast-top',
MIDDLE: 'toast-middle',
BOTTOM: 'toast-bottom',
},
},
}
================================================================================

components/models/alertModel.js
================================================================================
/**

* alertModel.js
* Alert model classes for creating and managing alert component state.
*/

import { v4 as uuidv4 } from 'uuid'

/**

* Base alert model with configurable properties.
*/
export class AlertModel {
constructor({
id = uuidv4(),
type = null,
isSoft = false,
isOutline = false,
isDash = false,
direction = null,
buttons = [],
isDismissible = false,
message = 'This is an alert message.',
} = {}) {
Object.defineProperty(this, 'id', {
value: id,
writable: false,
configurable: false,
enumerable: true,
})
this.type = type
this.isSoft = isSoft
this.isOutline = isOutline
this.isDash = isDash
this.direction = direction
this.buttons = buttons
this.isDismissible = isDismissible
this.message = message
}

getId() {
return this.id
}

getType() {
return this.type
}

getIsSoft() {
return this.isSoft
}

getIsOutline() {
return this.isOutline
}

getIsDash() {
return this.isDash
}

getDirection() {
return this.direction
}

getMessage() {
return this.message
}

setType(value) {
this.type = value
return this
}

setIsSoft(value) {
this.isSoft = !!value
return this
}

setIsOutline(value) {
this.isOutline = !!value
return this
}

setIsDash(value) {
this.isDash = !!value
return this
}

setDirection(value) {
this.direction = value
return this
}

setMessage(value) {
this.message = value
return this
}

// Serializes model to plain object
toJson() {
return {
id: this.id,
type: this.type,
isSoft: this.isSoft,
isOutline: this.isOutline,
isDash: this.isDash,
direction: this.direction,
message: this.message,
}
}

// Creates model instance from plain object
static fromJson(obj = {}) {
return new AlertModel({
id: obj.id,
type: obj.type,
isSoft: obj.isSoft,
isOutline: obj.isOutline,
isDash: obj.isDash,
direction: obj.direction,
message: obj.message,
})
}

// Compares this model with another by ID or properties
equals(other) {
if (!other) return false
if (other.id) return this.id === other.id
return (
this.type === other.type \&\&
this.isSoft === other.isSoft \&\&
this.isOutline === other.isOutline \&\&
this.isDash === other.isDash \&\&
this.direction === other.direction \&\&
this.message === other.message
)
}
}

/**

* Pre-configured success alert model.
*/
export class SuccessAlertModel extends AlertModel {
constructor(options = {}) {
super({ ...options, type: 'SUCCESS' })
}
}

/**

* Pre-configured error alert model.
*/
export class ErrorAlertModel extends AlertModel {
constructor(options = {}) {
super({ ...options, type: 'ERROR' })
}
}

/**

* Pre-configured info alert model.
*/
export class InfoAlertModel extends AlertModel {
constructor(options = {}) {
super({ ...options, type: 'INFO' })
}
}

/**

* Pre-configured warning alert model.
*/
export class WarningAlertModel extends AlertModel {
constructor(options = {}) {
super({ ...options, type: 'WARNING' })
}
}

/**

* Custom alert model with additional icon and actions support.
*/
export class CustomAlertModel extends AlertModel {
constructor(options = {}) {
super({ ...options, type: 'CUSTOM' })
this.customIcon = options.customIcon || null
this.actions = options.actions || []
}

getCustomIcon() {
return this.customIcon
}

getActions() {
return this.actions
}

setCustomIcon(value) {
this.customIcon = value
return this
}

setActions(value) {
this.actions = value
return this
}
}
================================================================================

components/models/badgeModel.js
================================================================================
/**

* badgeModel.js
* Badge model class for creating and managing badge component state.
*/
import { v4 as uuidv4 } from 'uuid'
/**
* Badge model with configurable styling and interaction properties.
*/
export class BadgeModel {
constructor({
id = uuidv4(),
size = null,
color = null,
isSoft = false,
isOutline = false,
isDash = false,
isGhost = false,
label = 'Badge',
isClickable = false,
isDismissible = false,
ariaLabel = null,
} = {}) {
Object.defineProperty(this, 'id', {
value: id,
writable: false,
configurable: false,
enumerable: true,
})
this.size = size
this.color = color
this.isSoft = isSoft
this.isOutline = isOutline
this.isDash = isDash
this.isGhost = isGhost
this.label = label
this.isClickable = isClickable
this.isDismissible = isDismissible
this.ariaLabel = ariaLabel
}

// Add getters and setters
getIsClickable() { return this.isClickable }
getIsDismissible() { return this.isDismissible }
getAriaLabel() { return this.ariaLabel }

setIsClickable(value) {
this.isClickable = !!value
return this
}
setIsDismissible(value) {
this.isDismissible = !!value
return this
}
setAriaLabel(value) {
this.ariaLabel = value
return this
}
}
================================================================================

components/models/toastModel.js
================================================================================
/**

* toastModel.js
* Toast model class for managing toast notification positioning and alert content.
*/

import { v4 as uuidv4 } from 'uuid'

/**

* Toast model with configurable positioning, alerts, and auto-hide duration.
*/
export class ToastModel {
constructor({
id = uuidv4(),
horizontalPosition = 'END',
verticalPosition = 'BOTTOM',
alerts = [],
isVisible = true,
duration = null,    // display time in ms
} = {}) {
Object.defineProperty(this, 'id', {
value: id,
writable: false,
configurable: false,
enumerable: true,
})
this.horizontalPosition = horizontalPosition
this.verticalPosition = verticalPosition
this.alerts = alerts
this.isVisible = isVisible
this.duration = duration

}
// Getters
getId() {
return this.id
}
getAlerts() {
return this.alerts
}
getIsVisible() {
return this.isVisible
}
getHorizontalPosition() {
return this.horizontalPosition
}
getVerticalPosition() {
return this.verticalPosition
}

// Setters (chainable)
setAlerts(alerts) {
this.alerts = alerts
return this
}
setIsVisible(val) {
this.isVisible = !!val
return this
}
setHorizontalPosition(val) {
this.horizontalPosition = val
return this
}
setVerticalPosition(val) {
this.verticalPosition = val
return this
}

// Adds an alert to the alerts array
addAlert(alert) {
this.alerts.push(alert)
return this
}

// Removes an alert by ID from the alerts array
removeAlert(alertId) {
this.alerts = this.alerts.filter((alert) => alert.id !== alertId)
return this
}

// Serializes model to plain object
toJson() {
return {
id: this.id,
horizontalPosition: this.horizontalPosition,
verticalPosition: this.verticalPosition,
alerts: this.alerts.map((a) => (a.toJson ? a.toJson() : a)),
isVisible: this.isVisible,
}
}

// Creates model instance from plain object
static fromJson(obj = {}) {
return new ToastModel({
id: obj.id,
horizontalPosition: obj.horizontalPosition,
verticalPosition: obj.verticalPosition,
alerts: obj.alerts,
isVisible: obj.isVisible,
})
}
}
================================================================================

Based on the comprehensive component library you've shared, here's an updated README.md that reflects the new DaisyToast component and provides better documentation for the enhanced features:

***

# vite-ui-components

A Vue 3 + Vite-based, production-ready component library template. Modern tooling, best practices, and common UI methodology are pre-configured for an efficient workflow.[^1_1][^1_2]

## 🚀 Features

- **Vue 3** – Progressive JavaScript framework
- **Vite** – Lightning-fast frontend tooling
- **Tailwind CSS** – Utility-first CSS framework
- **DaisyUI** – Beautiful UI components for Tailwind
- **Vue Router** – Official Vue routing solution
- **Axios** – Promise-based HTTP client with interceptors
- **ESLint/Prettier** – Code linting and formatting
- **Path Aliases** – Clean import paths (`@`)
- **Environment Variables** – Vite ENV setup for all environments
- **Model-Based Components** – Structured component state management


## 📋 Prerequisites

- **Node.js v18+**
- **npm** or **yarn**


## 🛠️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/tpickles118/vite-ui-components.git
cd vite-ui-components
npm install
```


## 🚀 Development

Run the development server:

```bash
npm run dev
# App runs at http://localhost:5173
```


## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```


## 🧹 Code Quality

Lint your code:

```bash
npm run lint
```

Format your code:

```bash
npm run format
```


## 📁 Project Structure

```
├── public/                # Static assets
├── src/
│   ├── api/               # API config/services (axios setup)
│   ├── assets/            # Images, styles, etc.
│   ├── components/        # Reusable Vue components
│   │   ├── base/          # Low-level, foundational UI components
│   │   └── models/        # Component data models
│   ├── constants/         # Component styling constants
│   ├── router/            # Vue Router config
│   ├── views/             # Page components
│   │   └── daisy-wrapper-views/  # Component demo pages
│   ├── App.vue            # Root Vue component
│   ├── main.js            # Main entry point
│   └── style.css          # Global styles (with Tailwind)
├── .env                   # Default env variables
├── .env.development
├── .env.production
├── .eslintrc.cjs          # ESLint config
├── .prettierrc            # Prettier config
├── eslint.config.js
├── index.html             # Main HTML entry
├── jsconfig.json          # Path alias config
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```


## 🔧 Configuration

### Environment Variables

Prefix your variables with `VITE_` in `.env` files:

```env
VITE_API_URL=https://api.example.com
```

Usage in code:

```js
const apiUrl = import.meta.env.VITE_API_URL
```


### Path Alias

Use `@` for clean imports:[^1_3]

```js
import Button from '@/components/Button.vue'
```


### Axios

Axios instance is in `src/api/axios.js` with:

- Base URL from env
- Request/response interceptors
- Auth token handling
- Global error handling


## 🎨 Styling

**Tailwind CSS** and **DaisyUI** are available globally.[^1_4][^1_5]
Example:

```html
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">My Card</h2>
    <p>Card content here</p>
  </div>
</div>
```


***

## 🧩 Base UI Components

The following base UI components are available in `src/components/base`:[^1_6]


| Component | File Path | Description |
| :-- | :-- | :-- |
| DaisyAlert | `src/components/base/DaisyAlert.vue` | Alert banner for warnings, success, info, error, or custom messages with action buttons |
| DaisyBadge | `src/components/base/DaisyBadge.vue` | Versatile badge label for notifications or statuses with click/dismiss handlers |
| DaisyToast | `src/components/base/DaisyToast.vue` | Toast notification wrapper with positioning and auto-hide functionality |

### Component Models

All components use model-based state management for type safety and consistency:[^1_3]

- **AlertModel** – Base alert configuration with type, styling, buttons, and dismissibility
- **BadgeModel** – Badge configuration with size, color, interactivity, and styling options
- **ToastModel** – Toast positioning, alert collection, visibility, and auto-hide duration


### How to Use

Import these base components and their models into your Vue files:

```vue
<script setup>
import DaisyAlert from '@/components/base/DaisyAlert.vue'
import DaisyBadge from '@/components/base/DaisyBadge.vue'
import DaisyToast from '@/components/base/DaisyToast.vue'
import { AlertModel, BadgeModel, ToastModel } from '@/components/models'
</script>
```


#### DaisyAlert Example

```vue
<script setup>
import { ref } from 'vue'
import { AlertModel } from '@/components/models/alertModel.js'
import DaisyAlert from '@/components/base/DaisyAlert.vue'

const successAlert = new AlertModel({
    type: 'SUCCESS',
    title: 'Success!',
    message: 'Your changes have been saved.',
    isSoft: true,
    isDismissible: true,
    buttons: [
        { key: 'view', label: 'View Changes', class: 'btn btn-sm btn-primary' }
    ]
})

const handleButtonClick = ({ alertId, buttonKey }) => {
    console.log(`Button ${buttonKey} clicked on alert ${alertId}`)
}

const handleDismiss = ({ alertId }) => {
    console.log(`Alert ${alertId} dismissed`)
}
</script>

<template>
    <DaisyAlert 
        :alert-model="successAlert"
        @button-click="handleButtonClick"
        @dismiss="handleDismiss"
    />
</template>
```

**AlertModel Props:**

- `type` – `'SUCCESS' | 'INFO' | 'WARNING' | 'ERROR' | 'CUSTOM'`
- `title` – String (optional alert title)
- `message` – String (alert message to display)
- `isSoft` – Boolean (applies soft styling)
- `isOutline` – Boolean (applies outline styling)
- `isDash` – Boolean (applies dashed border)
- `direction` – `'vertical' | 'horizontal'` (layout direction)
- `buttons` – Array of button objects with `key`, `label`, and `class`
- `isDismissible` – Boolean (shows dismiss button)
- `customIcon` – Component (custom icon component for display)

**Events:**

- `@button-click` – Emitted when action button is clicked
- `@dismiss` – Emitted when dismiss button is clicked
- `@action` – Emitted for custom slot actions


#### DaisyBadge Example

```vue
<script setup>
import { ref } from 'vue'
import { BadgeModel } from '@/components/models/badgeModel.js'
import DaisyBadge from '@/components/base/DaisyBadge.vue'

const filterBadge = new BadgeModel({
    label: 'Active Filter',
    color: 'PRIMARY',
    size: 'MD',
    isClickable: true,
    isDismissible: true
})

const handleClick = ({ badgeId, label }) => {
    console.log(`Badge clicked: ${label}`)
}

const handleDismiss = ({ badgeId }) => {
    console.log(`Badge dismissed: ${badgeId}`)
}
</script>

<template>
    <DaisyBadge 
        :badge-model="filterBadge"
        @click="handleClick"
        @dismiss="handleDismiss"
    />
</template>
```

**BadgeModel Props:**

- `label` – String (badge text)
- `size` – `'XS' | 'SM' | 'MD' | 'LG' | 'XL'`
- `color` – `'PRIMARY' | 'SECONDARY' | 'ACCENT' | 'NEUTRAL' | 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR'`
- `isSoft` – Boolean (applies soft styling)
- `isOutline` – Boolean (applies outline styling)
- `isDash` – Boolean (applies dashed border)
- `isGhost` – Boolean (applies ghost styling)
- `isClickable` – Boolean (enables click interactions)
- `isDismissible` – Boolean (shows dismiss button)
- `ariaLabel` – String (accessibility label)

**Events:**

- `@click` – Emitted when badge is clicked (if isClickable)
- `@dismiss` – Emitted when dismiss button is clicked
- `@mouseenter` – Emitted on mouse enter
- `@mouseleave` – Emitted on mouse leave


#### DaisyToast Example

```vue
<script setup>
import { ref } from 'vue'
import { ToastModel } from '@/components/models/toastModel.js'
import { AlertModel } from '@/components/models/alertModel.js'
import DaisyToast from '@/components/base/DaisyToast.vue'

const toastModel = ref(new ToastModel({
    horizontalPosition: 'END',
    verticalPosition: 'BOTTOM',
    alerts: [],
    isVisible: false,
    duration: 3000  // Auto-hide after 3 seconds
}))

function showToast(type, message) {
    toastModel.value.alerts = [new AlertModel({ type, message })]
    toastModel.value.isVisible = true
}

function hideToast() {
    toastModel.value.isVisible = false
}
</script>

<template>
    <button @click="showToast('SUCCESS', 'Operation completed!')">
        Show Success Toast
    </button>
    
    <DaisyToast 
        :toast-model="toastModel"
        @auto-hide="hideToast"
    />
</template>
```

**ToastModel Props:**

- `horizontalPosition` – `'START' | 'CENTER' | 'END'`
- `verticalPosition` – `'TOP' | 'MIDDLE' | 'BOTTOM'`
- `alerts` – Array of AlertModel instances
- `isVisible` – Boolean (controls toast visibility)
- `duration` – Number (auto-hide duration in milliseconds, null for no auto-hide)

**Events:**

- `@auto-hide` – Emitted when auto-hide timer expires

**Tip:**
Check each `*.vue` file and corresponding model in `src/components/models/` for more available props and customization options.[^1_3]

***

## 📝 Demo Pages

Demo views are provided to showcase the setup and usage of your core and base components, including wrappers for DaisyUI:[^1_7]

- **Home:** Main landing page for your project (`/src/views/HomeView.vue`)
- **About:** Example of a static route (`/src/views/AboutView.vue`)
- **Users:** Demonstrates dynamic routing and API calls (`/src/views/UsersApi.vue`)
- **Daisy Wrapper Views:** Specialized demo pages for DaisyUI components, located in `/src/views/daisy-wrapper-views`
    - **AlertView.vue:** Demo and documentation for DaisyAlert usage and variants
    - **BadgeView.vue:** Demo and documentation for DaisyBadge usage and variants
    - **ToastView.vue:** Demo and documentation for DaisyToast usage and variants


## 🏗️ Architecture Patterns

### Model-Based Components

This library uses a model-based approach for component state management:[^1_3]

```js
// Define component state with a model
const alert = new AlertModel({
    type: 'SUCCESS',
    message: 'Action completed',
    isDismissible: true
})

// Models provide type safety and validation
alert.setMessage('Updated message').setIsSoft(true)

// Serialize for API/storage
const json = alert.toJson()
const restored = AlertModel.fromJson(json)
```


### Event-Driven Interactions

Components emit structured events with consistent payloads:[^1_3]

```js
// All events include component context
@button-click="({ alertId, buttonKey, alertModel }) => { /* ... */ }"
@dismiss="({ badgeId, label, badgeModel }) => { /* ... */ }"
```


### Slot-Based Customization

Components support flexible content override through slots:

```vue
<DaisyAlert :alert-model="model">
    <template #icon>
        <CustomIcon />
    </template>
    <template #actions="{ onAction }">
        <button @click="onAction('custom')">Custom Action</button>
    </template>
</DaisyAlert>
```


## 🙏 Acknowledgments

- Vue.js
- Vite
- Tailwind CSS[^1_5]
- DaisyUI[^1_4]
- Vue Router
- Axios
- Heroicons


## 📧 Support

For issues and questions, use the [GitHub Issues page](https://github.com/tpickles118/vite-ui-components/issues).

***