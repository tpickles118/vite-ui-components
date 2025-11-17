<!-- CardView.vue -->
<!-- Demo view showcasing DaisyCard component with various configurations. -->

<script setup>
import { ref } from 'vue'
import { CardModel } from '@/components/models/cardModel.js'
import { ButtonModel } from '@/components/models/buttonModel.js'
import { BadgeModel } from '@/components/models/badgeModel.js'
import DaisyCard from '@/components/base/DaisyCard.vue'
import DaisyButton from '@/components/base/DaisyButton.vue'
import DaisyBadge from '@/components/base/DaisyBadge.vue'

// Basic card examples
const basicCard = new CardModel({ isBordered: true, shadow: 'MD', width: 'SM' })
const compactCard = new CardModel({ layout: 'COMPACT',isBordered: true })
const sideCard = new CardModel({ layout: 'SIDE', isBordered: true, shadow: 'SM' })

// Size variants
const smallCard = new CardModel({ size: 'SM', isBordered: true, shadow: 'SM' })
const largeCard = new CardModel({ size: 'LG', isBordered: true, shadow: 'LG' })

// Style variants
const borderedCard = new CardModel({ isBordered: true, width: 'SM', shadow: 'MD' })
const dashCard = new CardModel({ isBordered: true, isDash: true, width: 'SM' })
const shadowCard = new CardModel({ shadow: 'XL', width: 'SM' })

// Interactive card with actions
const productCard = ref(
    new CardModel({
        isBordered: true,
        shadow: 'MD',
        width: 'SM',
    })
)

const buyButton = new ButtonModel({ label: 'Buy Now', color: 'PRIMARY', size: 'SM' })
const detailsButton = new ButtonModel({ label: 'Details', color: 'GHOST', variant: 'GHOST', size: 'SM' })
const trialButton = new ButtonModel({ label: 'Start Free Trial', color: 'WARNING', shape: 'BLOCK', size: 'SM' })

const newBadge = new BadgeModel({ label: 'New', color: 'SUCCESS', size: 'SM' })
const saleBadge = new BadgeModel({ label: 'Sale', color: 'ERROR', size: 'SM' })


// Image full card
const imageFullCard = new CardModel({ hasImageFull: true, shadow: 'LG', width: 'SM' })

// Custom classes example
const customCard = new CardModel({
    isBordered: true,
    customClasses: ['hover:shadow-2xl', 'transition-shadow', 'duration-300'],
    width: 'SM',
})

// Event handlers
function handleBuyClick() {
    console.log('Buy button clicked')
}

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
            <DaisyCard :card-model="basicCard">
                <template #title>Card Title</template>
                <p>This is a basic card with title and body content.</p>
            </DaisyCard>
        </section>

        <!-- Card with image -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Card with Image</h2>
            <DaisyCard :card-model="basicCard">
                <template #image>
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/19090/pexels-photo.jpg"
                            alt="Shoes"
                        />
                    </figure>
                </template>
                <template #title>Shoes!</template>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <template #actions>
                    <DaisyButton :button-model="buyButton" @click="handleBuyClick" />
                </template>
            </DaisyCard>
        </section>

        <!-- Card side (horizontal) -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Horizontal Card (card-side)</h2>
            <DaisyCard :card-model="sideCard">
                <template #image>
                    <figure class="w-48">
                        <img
                            src="https://images.pexels.com/photos/5662857/pexels-photo-5662857.png"
                            alt="Movie"
                        />
                    </figure>
                </template>
                <template #title>New Movie!</template>
                <p>Watch this amazing new release now.</p>
                <template #actions>
                    <DaisyButton
                        :button-model="
                            new ButtonModel({ label: 'Watch', color: 'PRIMARY', size: 'SM' })
                        "
                    />
                </template>
            </DaisyCard>
        </section>

        <!-- Size variants -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Size Variants</h2>
            <div class="space-y-4">
                <DaisyCard :card-model="smallCard">
                    <template #title>Small Card</template>
                    <p class="text-sm">This is a small card (card-sm).</p>
                </DaisyCard>

                <DaisyCard :card-model="largeCard">
                    <template #title>Large Card</template>
                    <p>This is a large card (card-lg) with more prominent styling.</p>
                </DaisyCard>
            </div>
        </section>

        <!-- Style variants -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Style Variants</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <DaisyCard :card-model="borderedCard">
                    <template #title>Bordered</template>
                    <p>Card with border.</p>
                </DaisyCard>

                <DaisyCard :card-model="dashCard">
                    <template #title>Dashed</template>
                    <p>Card with dashed border.</p>
                </DaisyCard>

                <DaisyCard :card-model="shadowCard">
                    <template #title>Shadow XL</template>
                    <p>Card with large shadow.</p>
                </DaisyCard>
            </div>
        </section>

        <!-- Product card example -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Product Card with Badges</h2>
            <DaisyCard :card-model="productCard">
                <template #image>
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/16890924/pexels-photo-16890924.jpeg"
                            alt="Product"
                        />
                    </figure>
                </template>
                <template #title>
                    <div class="flex justify-between items-center">
                        <span>Premium Widget</span>
                        <div class="space-x-2">
                            <DaisyBadge :badge-model="newBadge" />
                            <DaisyBadge :badge-model="saleBadge" />
                        </div>
                    </div>
                </template>
                <p>High-quality product with amazing features. Limited time offer!</p>
                <div class="text-2xl font-bold text-primary mt-2">$99.99</div>
                <template #actions>
                    <DaisyButton :button-model="buyButton" @click="handleBuyClick" />
                    <DaisyButton :button-model="detailsButton" @click="handleDetailsClick" />
                </template>
            </DaisyCard>
        </section>

        <!-- Image full background -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Card with Full Background Image</h2>
            <DaisyCard :card-model="imageFullCard">
                <template #image>
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/28879459/pexels-photo-28879459.jpeg"
                            alt="Background"
                        />
                    </figure>
                </template>
                <template #title>
                    <span class="text-white">Image Overlay Card</span>
                </template>
                <p class="text-white">Content overlays the image background.</p>
                <template #actions>
                    <DaisyButton
                        :button-model="
                            new ButtonModel({ label: 'Explore', color: 'WARNING', size: 'SM' })
                        "
                    />
                </template>
            </DaisyCard>
        </section>

        <!-- Compact layout -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Compact Card</h2>
            <DaisyCard :card-model="compactCard">
                <template #title>Compact Layout</template>
                <p>This card uses reduced padding (card-compact).</p>
            </DaisyCard>
        </section>

        <!-- Custom classes -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Card with Custom Classes</h2>
            <DaisyCard :card-model="customCard">
                <template #title>Hover Me!</template>
                <p>This card has custom Tailwind classes for hover effects.</p>
            </DaisyCard>
        </section>

        <!-- Complex example -->
        <section class="mb-8">
            <div class="bg-primary"></div>
            <h2 class="text-2xl font-semibold mb-4">Complex Card Example</h2>
            <DaisyCard
                :card-model="
                    new CardModel({
                        isBordered: true,
                        shadow: 'LG',
                        width: 'MD',
                    })
                "
                class="bg-gray-500"
            >
                <template #image>
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg"
                            alt="Office"
                        />
                    </figure>
                </template>
                <template #title>
                    <div class="flex justify-between items-center w-full">
                        <span>Premium Plan</span>
                        <DaisyBadge
                            :badge-model="
                                new BadgeModel({ label: 'Popular', color: 'PRIMARY', size: 'SM' })
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
                    <DaisyButton :button-model="trialButton" @click="handleBuyClick" />
                    <DaisyButton
                        :button-model="
                            new ButtonModel({
                                label: 'Learn More',
                                color: 'GHOST',
                                variant: 'GHOST',
                                size: 'SM',
                                shape: 'BLOCK',
                            })
                        "
                    />
                </template>
            </DaisyCard>
        </section>
    </div>
</template>
