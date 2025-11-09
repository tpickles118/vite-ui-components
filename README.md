# Vue 3 + Vite Baseline Template

A production-ready Vue 3 baseline project template with modern tooling and best practices pre-configured.

## 🚀 Features

- ⚡️ **Vue 3** - Progressive JavaScript framework
- 🛠️ **Vite** - Next generation frontend tooling
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌼 **DaisyUI** - Tailwind CSS component library
- 🧭 **Vue Router** - Official router for Vue.js
- 🌐 **Axios** - Promise-based HTTP client with interceptors
- ✅ **ESLint** - Code linting with Vue 3 support
- 💅 **Prettier** - Code formatting
- 📁 **Path Alias** - `@` alias configured for clean imports
- 🔧 **Environment Variables** - Vite env configuration for different environments

## 📋 Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

## 🛠️ Installation

1. **Use this template** by clicking the "Use this template" button on GitHub, or clone the repository:

```

git clone https://github.com/tpickles118/vite-baseline-daisyui.git 

cd vite-baseline-daisyui

```

2. **Install dependencies:**

```

npm install

```

3. **Update project details:**
   - Edit `package.json` (name, description, author, repository)
   - Update this `README.md` with your project information
   - Update `.env` files with your environment variables

## 🚀 Development

Start the development server:

```

npm run dev

```

The app will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```

npm run build

```

Preview the production build:

```

npm run preview

```

## 🧹 Code Quality

Run ESLint:

```

npm run lint

```

Format code with Prettier:

```

npm run format

```

## 📁 Project Structure

```

├── public/              \# Static assets
├── src/
│   ├── api/            \# API configuration and services
│   │   ├── axios.js    \# Axios instance with interceptors
│   │   └── services.js \# API service methods
│   ├── assets/         \# Project assets (images, styles, etc.)
│   ├── components/     \# Reusable Vue components
│   ├── router/         \# Vue Router configuration
│   │   └── index.js    \# Router setup
│   ├── views/          \# Page components
│   ├── App.vue         \# Root component
│   ├── main.js         \# Application entry point
│   └── style.css       \# Global styles (Tailwind imports)
├── .env                \# Default environment variables
├── .env.development    \# Development environment variables
├── .env.production     \# Production environment variables
├── .eslintrc.cjs       \# ESLint configuration
├── .prettierrc         \# Prettier configuration
├── eslint.config.js    \# ESLint flat config (ESLint 9+)
├── index.html          \# HTML entry point
├── jsconfig.json       \# JavaScript configuration (path alias)
├── package.json        \# Project dependencies and scripts
├── postcss.config.js   \# PostCSS configuration
├── tailwind.config.js  \# Tailwind CSS configuration
└── vite.config.js      \# Vite configuration

```

## 🔧 Configuration

### Environment Variables

Environment variables must be prefixed with `VITE_` to be accessible in your app:

```

VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App

```

Access them in your code:

```

const apiUrl = import.meta.env.VITE_API_URL

```

### Path Alias

Use the `@` alias for clean imports:

```

import Component from '@/components/Component.vue'
import { userService } from '@/api/services'

```

### Axios Configuration

API client is pre-configured with:
- Base URL from environment variables
- Request/response interceptors
- Authentication token handling
- Global error handling

Located in `src/api/axios.js`

## 🎨 Styling

### Tailwind CSS

Utility classes are available throughout your components:

```

<div class="container mx-auto p-4">
  <h1 class="text-4xl font-bold">Hello World</h1>
</div>
```

### DaisyUI Components

Pre-built components from DaisyUI:

<button class="btn btn-primary">Click Me</button>
```

<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card content</p>
  </div>
</div>
```

## 📝 Demo Views

The template includes demo views to showcase the setup:

- **Home** - Landing page with hero section
- **About** - Simple static route example
- **Users** - Dynamic routes demonstration
- **User Profile** - Route parameters example
- **Dashboard** - Nested routes example
- **Users API** - Axios integration demo

**Note:** You can remove these demo views and routes when starting your project.

#

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)

## 📧 Support

For issues and questions, please use the [GitHub Issues](https://github.com/yourusername/vite-baseline-daisyui/issues) page.



**Happy Coding! 🎉**
