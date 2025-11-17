<script setup>
import { NAV_GROUPS } from '@/constants/navigation.js'
</script>

<template>
    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-4">Welcome to Daisy Component Tests</h1>

        <!-- Iterate through navigation groups -->
        <div v-for="(group, key) in NAV_GROUPS" :key="key" class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">{{ group.label }}</h2>
            <ul class="list-disc list-inside ml-4">
                <li v-for="navItem in group.items" :key="navItem.routeName">
                    <router-link :to="navItem.path" class="link link-hover">
                        {{ navItem.label }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
