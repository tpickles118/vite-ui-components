<script setup>
const appName = import.meta.env.VITE_APP_NAME
const debugMode = import.meta.env.VITE_DEBUG_MODE === 'true'
</script>

<template>
    <div>
        <nav class="navbar bg-base-100 shadow-lg mb-8">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">{{ appName }}</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                </ul>
            </div>
        </nav>

        <router-view />
        <div v-if="debugMode" class="ml-4 text-center">
            <span class="badge badge-info">Debug Mode</span>
        </div>
    </div>
</template>
