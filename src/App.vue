<script setup>
import { HomeIcon, IdentificationIcon } from '@heroicons/vue/24/outline'
import DaisyBadge from '@/components/base/DaisyBadge.vue'
import { BadgeModel } from '@/components/models/badgeModel.js'
import { ROUTE_PATHS } from '@/constants'

const appName = import.meta.env.VITE_APP_NAME
const debugMode = import.meta.env.VITE_DEBUG_MODE === 'true'

const debugBadgeModel = new BadgeModel({
    size: 'MD',
    color: 'PRIMARY',
    isSoft: true,
    isOutline: true,
    label: '** DEBUG MODE **',
})
</script>

<template>
    <div>
        <nav class="navbar bg-base-100 shadow-lg mb-8">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">{{ appName }}</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <router-link :to="ROUTE_PATHS.HOME"
                            ><HomeIcon class="size-4" />Home</router-link
                        >
                    </li>
                    <li>
                        <router-link :to="ROUTE_PATHS.ABOUT"
                            ><IdentificationIcon class="size=4" />About</router-link
                        >
                    </li>
                </ul>
            </div>
        </nav>

        <router-view />
        <div v-if="debugMode" class="ml-4 text-center">
            <DaisyBadge :badge-model="debugBadgeModel" />
        </div>
    </div>
</template>
