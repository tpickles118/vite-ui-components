<!--
  CardView.vue
  Demo view showcasing BaseCard component with various layouts, sizes, and style configurations.
-->
<script setup>
import { ref } from 'vue'
import { CARD_OPTIONS, BUTTON_OPTIONS, BADGE_OPTIONS, IMAGES } from '@/constants/index.js'
import { CardModel } from '@/components/models/base/cardModel.js'
import { ButtonModel } from '@/components/models/base/buttonModel.js'
import { BadgeModel } from '@/components/models/base/badgeModel.js'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'

// Basic card examples
const basicCard = new CardModel({
    isBordered: true,
    shadow: CARD_OPTIONS.SHADOW.MD,
    width: CARD_OPTIONS.WIDTH.SM,
})

const compactCard = new CardModel({
    layout: CARD_OPTIONS.LAYOUT.COMPACT,
    isBordered: true,
})

const sideCard = new CardModel({
    layout: CARD_OPTIONS.LAYOUT.SIDE,
    isBordered: true,
    shadow: CARD_OPTIONS.SHADOW.SM,
})

// Size variant examples
const smallCard = new CardModel({
    size: CARD_OPTIONS.SIZE.SM,
    isBordered: true,
    shadow: CARD_OPTIONS.SHADOW.SM,
})

const largeCard = new CardModel({
    size: CARD_OPTIONS.SIZE.LG,
    isBordered: true,
    shadow: CARD_OPTIONS.SHADOW.LG,
})

// Style variant examples
const borderedCard = new CardModel({
    isBordered: true,
    width: CARD_OPTIONS.WIDTH.SM,
})

const dashCard = new CardModel({
    isBordered: true,
    isDash: true,
    width: CARD_OPTIONS.WIDTH.SM,
})

const shadowCard = new CardModel({
    shadow: CARD_OPTIONS.SHADOW.XL,
    width: CARD_OPTIONS.WIDTH.SM,
})

// Interactive product card
const productCard = ref(
    new CardModel({
        isBordered: true,
        shadow: CARD_OPTIONS.SHADOW.MD,
        width: CARD_OPTIONS.WIDTH.SM,
    })
)

const buyButton = new ButtonModel({
    label: 'Buy Now',
    color: BUTTON_OPTIONS.COLOR.PRIMARY,
    size: BUTTON_OPTIONS.SIZE.SM,
})

const detailsButton = new ButtonModel({
    label: 'Details',
    color: BUTTON_OPTIONS.COLOR.GHOST,
    variant: BUTTON_OPTIONS.VARIANT.GHOST,
    size: BUTTON_OPTIONS.SIZE.SM,
})

const newBadge = new BadgeModel({
    label: 'New',
    color: BADGE_OPTIONS.COLOR.SUCCESS,
    size: BADGE_OPTIONS.SIZE.SM,
})

const saleBadge = new BadgeModel({
    label: 'Sale',
    color: BADGE_OPTIONS.COLOR.ERROR,
    size: BADGE_OPTIONS.SIZE.SM,
})

// Full background image card
const imageFullCard = new CardModel({
    isImageFull: true, // ✅ CORRECTED: was hasImageFull
    shadow: CARD_OPTIONS.SHADOW.LG,
    width: CARD_OPTIONS.WIDTH.SM,
})

// Custom classes example
const customCard = new CardModel({
    isBordered: true,
    customClasses: ['hover:shadow-2xl', 'transition-shadow', 'duration-300'],
    width: CARD_OPTIONS.WIDTH.SM,
})

// Handles buy button click
function handleBuyClick() {
    console.log('Buy button clicked')
}

// Handles details button click
function handleDetailsClick() {
    console.log('Details button clicked')
}
</script>

<template>
    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-6">DaisyUI Card Component Tests</h1>

        <!-- Basic card -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Basic Card</h2>
            <BaseCard :card-model="basicCard">
                <template #title>Card Title</template>
                <p>This is a basic card with title and body content.</p>
            </BaseCard>
        </section>

        <!-- Card with image -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Card with Image</h2>
            <BaseCard :card-model="basicCard">
                <template #image>
                    <figure>
                        <img :src="IMAGES.SHOES" alt="Shoes" />
                    </figure>
                </template>
                <template #title>Shoes!</template>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <template #actions>
                    <BaseButton :button-model="buyButton" @click="handleBuyClick" />
                </template>
            </BaseCard>
        </section>

        <!-- Card side (horizontal) -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Horizontal Card (card-side)</h2>
            <BaseCard :card-model="sideCard">
                <template #image>
                    <figure class="w-48">
                        <img :src="IMAGES.MOVIE" alt="Movie" />
                    </figure>
                </template>
                <template #title>New Movie!</template>
                <p>Watch this amazing new release now.</p>
                <template #actions>
                    <BaseButton
                        :button-model="
                            new ButtonModel({
                                label: 'Watch',
                                color: BUTTON_OPTIONS.COLOR.PRIMARY,
                                size: BUTTON_OPTIONS.SIZE.SM,
                            })
                        "
                    />
                </template>
            </BaseCard>
        </section>

        <!-- Size variants -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Size Variants</h2>
            <div class="space-y-4">
                <BaseCard :card-model="smallCard">
                    <template #title>Small Card</template>
                    <p class="text-sm">This is a small card (card-sm).</p>
                </BaseCard>

                <BaseCard :card-model="largeCard">
                    <template #title>Large Card</template>
                    <p>This is a large card (card-lg) with more prominent styling.</p>
                </BaseCard>
            </div>
        </section>

        <!-- Style variants -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Style Variants</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BaseCard :card-model="borderedCard">
                    <template #title>Bordered</template>
                    <p>Card with border.</p>
                </BaseCard>

                <BaseCard :card-model="dashCard">
                    <template #title>Dashed</template>
                    <p>Card with dashed border.</p>
                </BaseCard>

                <BaseCard :card-model="shadowCard">
                    <template #title>Shadow XL</template>
                    <p>Card with large shadow.</p>
                </BaseCard>
            </div>
        </section>

        <!-- Product card example -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Product Card with Badges</h2>
            <BaseCard :card-model="productCard">
                <template #image>
                    <figure>
                        <img :src="IMAGES.PRODUCT" alt="Product" />
                    </figure>
                </template>
                <template #title>
                    <div class="flex justify-between items-center">
                        <span>Premium Widget</span>
                        <div class="space-x-2">
                            <BaseBadge :badge-model="newBadge" />
                            <BaseBadge :badge-model="saleBadge" />
                        </div>
                    </div>
                </template>
                <p>High-quality product with amazing features. Limited time offer!</p>
                <div class="text-2xl font-bold text-primary mt-2">$99.99</div>
                <template #actions>
                    <BaseButton :button-model="buyButton" @click="handleBuyClick" />
                    <BaseButton :button-model="detailsButton" @click="handleDetailsClick" />
                </template>
            </BaseCard>
        </section>

        <!-- Image full background -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Card with Full Background Image</h2>
            <BaseCard :card-model="imageFullCard">
                <template #image>
                    <figure>
                        <img :src="IMAGES.BACKGROUND" alt="Background" />
                    </figure>
                </template>
                <template #title>
                    <span class="text-white">Image Overlay Card</span>
                </template>
                <p class="text-white">Content overlays the image background.</p>
                <template #actions>
                    <BaseButton
                        :button-model="
                            new ButtonModel({
                                label: 'Explore',
                                color: BUTTON_OPTIONS.COLOR.PRIMARY,
                                size: BUTTON_OPTIONS.SIZE.SM,
                            })
                        "
                    />
                </template>
            </BaseCard>
        </section>

        <!-- Compact layout -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Compact Card</h2>
            <BaseCard :card-model="compactCard">
                <template #title>Compact Layout</template>
                <p>This card uses reduced padding (card-compact).</p>
            </BaseCard>
        </section>

        <!-- Custom classes -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Card with Custom Classes</h2>
            <BaseCard :card-model="customCard">
                <template #title>Hover Me!</template>
                <p>This card has custom Tailwind classes for hover effects.</p>
            </BaseCard>
        </section>

        <!-- Complex example -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Complex Card Example</h2>
            <BaseCard
                :card-model="
                    new CardModel({
                        isBordered: true,
                        shadow: CARD_OPTIONS.SHADOW.LG,
                        width: CARD_OPTIONS.WIDTH.MD,
                    })
                "
            >
                <template #image>
                    <figure>
                        <img :src="IMAGES.OFFICE" alt="Office" />
                    </figure>
                </template>
                <template #title>
                    <div class="flex justify-between items-center w-full">
                        <span>Premium Plan</span>
                        <BaseBadge
                            :badge-model="
                                new BadgeModel({
                                    label: 'Popular',
                                    color: BADGE_OPTIONS.COLOR.PRIMARY,
                                    size: BADGE_OPTIONS.SIZE.MD,
                                })
                            "
                        />
                    </div>
                </template>

                <div class="space-y-2">
                    <p>Everything you need for your team.</p>
                    <ul class="list-disc list-inside text-sm space-y-1">
                        <li>Unlimited projects</li>
                        <li>Priority support</li>
                        <li>Advanced analytics</li>
                    </ul>
                    <div class="text-3xl font-bold text-primary">
                        $29<span class="text-base font-normal">/month</span>
                    </div>
                </div>

                <template #actions>
                    <BaseButton
                        :button-model="
                            new ButtonModel({
                                label: 'Start Free Trial',
                                color: BUTTON_OPTIONS.COLOR.PRIMARY,
                                size: BUTTON_OPTIONS.SIZE.SM,
                                shape: BUTTON_OPTIONS.SHAPE.BLOCK,
                            })
                        "
                    />
                    <BaseButton
                        :button-model="
                            new ButtonModel({
                                label: 'Learn More',
                                color: BUTTON_OPTIONS.COLOR.GHOST,
                                variant: BUTTON_OPTIONS.VARIANT.GHOST,
                                size: BUTTON_OPTIONS.SIZE.SM,
                                shape: BUTTON_OPTIONS.SHAPE.BLOCK,
                            })
                        "
                    />
                </template>
            </BaseCard>
        </section>
    </div>
</template>
