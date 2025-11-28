<script setup>
import { AVATAR_OPTIONS } from '@/constants'
import { AvatarModel } from '@/components/models/base/avatarModel.js'
import BaseAvatar from '@/components/base/BaseAvatar.vue'

// import avatar images
import avatar1 from '@/assets/images/avatar1.png'
import avatar2 from '@/assets/images/avatar2.png'
import avatar3 from '@/assets/images/avatar3.png'

// Size examples
const sizeAvatars = [
    new AvatarModel({ src: avatar1, alt: 'XS', size: AVATAR_OPTIONS.SIZE.XS }),
    new AvatarModel({ src: avatar1, alt: 'SM', size: AVATAR_OPTIONS.SIZE.SM }),
    new AvatarModel({ src: avatar1, alt: 'MD', size: AVATAR_OPTIONS.SIZE.MD }),
    new AvatarModel({ src: avatar1, alt: 'LG', size: AVATAR_OPTIONS.SIZE.LG }),
    new AvatarModel({ src: avatar1, alt: 'XL', size: AVATAR_OPTIONS.SIZE.XL }),
    new AvatarModel({ src: avatar1, alt: 'XXL', size: AVATAR_OPTIONS.SIZE.XXL }),
]

// Shape examples - All DaisyUI mask shapes
const shapeAvatars = [
    new AvatarModel({
        src: avatar1,
        alt: 'Circle',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.CIRCLE,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Square',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.SQUARE,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Squircle',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.SQUIRCLE,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Heart',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.HEART,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Hexagon',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.HEXAGON,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Hexagon-2',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.HEXAGON_2,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Decagon',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.DECAGON,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Pentagon',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.PENTAGON,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Diamond',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.DIAMOND,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Star',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.STAR,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Star-2',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.STAR_2,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Triangle',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.TRIANGLE,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Triangle-2',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.TRIANGLE_2,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Triangle-3',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.TRIANGLE_3,
    }),
    new AvatarModel({
        src: avatar1,
        alt: 'Triangle-4',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.TRIANGLE_4,
    }),
]


// Placeholder examples with different sizes
const placeholderAvatars = [
    new AvatarModel({
        alt: 'Daisy',
        size: AVATAR_OPTIONS.SIZE.XXL,
        shape: AVATAR_OPTIONS.SHAPE.CIRCLE,
        isPlaceholder: true,
        placeholderSize: 'text-3xl',
        customClasses: ['bg-neutral', 'text-neutral-content'],
    }),
    new AvatarModel({
        alt: 'Alice',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.CIRCLE,
        isPlaceholder: true,
        isOnline: true,
        placeholderSize: 'text-xl',
        customClasses: ['bg-neutral', 'text-neutral-content'],
    }),
    new AvatarModel({
        alt: 'System',
        size: AVATAR_OPTIONS.SIZE.MD,
        shape: AVATAR_OPTIONS.SHAPE.CIRCLE,
        isPlaceholder: true,
        customClasses: ['bg-neutral', 'text-neutral-content'],
    }),
    new AvatarModel({
        alt: 'UI',
        size: AVATAR_OPTIONS.SIZE.XS,
        shape: AVATAR_OPTIONS.SHAPE.CIRCLE,
        isPlaceholder: true,
        placeholderSize: 'text-xs',
        customClasses: ['bg-neutral', 'text-neutral-content'],
    }),
]

// Custom slot example
const customSlotAvatar = new AvatarModel({
    alt: 'Custom',
    size: AVATAR_OPTIONS.SIZE.LG,
    shape: AVATAR_OPTIONS.SHAPE.CIRCLE,
    isPlaceholder: true,
    customClasses: ['bg-primary', 'text-primary-content'],
})

// Ring examples
const ringAvatars = [
    new AvatarModel({
        src: avatar2,
        alt: 'Ring Primary',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.CIRCLE,
        hasRing: true,
        ringSize: AVATAR_OPTIONS.RING_SIZE.RING_4,
        ringColor: AVATAR_OPTIONS.RING_COLOR.PRIMARY,
        ringOffset: true,
    }),
    new AvatarModel({
        src: avatar3,
        alt: 'Ring Secondary',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.CIRCLE,
        hasRing: true,
        ringSize: AVATAR_OPTIONS.RING_SIZE.RING_2,
        ringColor: AVATAR_OPTIONS.RING_COLOR.SECONDARY,
        ringOffset: true,
    }),

    // Example with ring offset
    new AvatarModel({
        src: avatar1,
        alt: 'User',
        size: AVATAR_OPTIONS.SIZE.LG,
        shape: AVATAR_OPTIONS.SHAPE.CIRCLE,
        hasRing: true,
        ringOffset: true,
        ringSize: AVATAR_OPTIONS.RING_SIZE.RING_8,
        ringColor: AVATAR_OPTIONS.RING_COLOR.INFO,
        ringOffsetSize: AVATAR_OPTIONS.RING_OFFSET_SIZE.OFFSET_8,
        ringOffsetColor: AVATAR_OPTIONS.RING_OFFSET_COLOR.BASE_100,
    }),
]

// Online Presence Examples
const presenceAvatars = [
    new AvatarModel({
        src: avatar2,
        alt: 'user online',
        size: AVATAR_OPTIONS.SIZE.XL,
        hasRing: true,
        ringSize: AVATAR_OPTIONS.RING_SIZE.RING_4,
        isOnline: true,
    }),
    new AvatarModel({
        src: avatar3,
        alt: 'user offline',
        size: AVATAR_OPTIONS.SIZE.XL,
        isOffline: true,
    }),
]
</script>

<template>
    <div class="container mx-auto py-8">
        <h1 class="text-4xl font-bold mb-6">BaseAvatar Component Tests</h1>

        <!-- Custom slot example -->
        <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Custom Slot Example:</h2>
            <div class="flex flex-wrap gap-6 items-center">
                <BaseAvatar :avatar-model="customSlotAvatar">
                    <span class="text-4xl">:)</span>
                </BaseAvatar>
            </div>
        </div>

        <!-- Placeholders -->
        <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Placeholders with Auto Text:</h2>
            <div class="flex flex-wrap gap-6 items-center">
                <BaseAvatar v-for="a in placeholderAvatars" :key="a.id" :avatar-model="a" />
            </div>
        </div>

        <!-- All sizes -->
        <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">All sizes:</h2>
            <div class="flex flex-wrap gap-6 items-center">
                <div v-for="a in sizeAvatars" :key="a.id">
                    <div class="text-sm mb-2">{{ a.alt }}</div>
                    <BaseAvatar :avatar-model="a" />
                </div>
            </div>
        </div>

        <!-- All shapes -->
        <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">All shapes:</h2>
            <div class="flex flex-wrap gap-6 items-center">
                <div v-for="a in shapeAvatars" :key="a.id">
                    <div class="text-sm mb-2">{{ a.alt }}</div>
                    <BaseAvatar :avatar-model="a" />
                </div>
            </div>
        </div>

        <!-- Ring variants -->
        <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">With Ring:</h2>
            <div class="flex flex-wrap gap-6 items-center">
                <BaseAvatar v-for="a in ringAvatars" :key="a.id" :avatar-model="a" />
            </div>
        </div>

        <!-- Online Presence variants -->
        <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Online Status:</h2>
            <div class="flex flex-wrap gap-6 items-center">
                <BaseAvatar v-for="a in presenceAvatars" :key="a.id" :avatar-model="a" />
            </div>
        </div>
    </div>
</template>
