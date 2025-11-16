
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

