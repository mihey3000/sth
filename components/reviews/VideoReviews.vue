<template>
    <section class="section-padding">
        <div class="container-custom">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Видео отзывы</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Послушайте, что говорят наши клиенты в видео отзывах
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="videoReview in videoReviews" :key="videoReview.id"
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    @click="openVideoModal(videoReview)">
                    <div class="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center relative">
                        <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                            <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <span class="text-gray-500">Видео отзыв</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-semibold mb-2">{{ videoReview.clientName }}</h3>
                        <p class="text-gray-600 mb-3">{{ videoReview.event }}</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-accent">
                                <svg v-for="i in videoReview.rating" :key="i" class="w-4 h-4" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <span class="text-sm text-gray-500">{{ videoReview.duration }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Props
const props = defineProps({
    videoReviews: {
        type: Array,
        required: true
    }
})

// Emits
const emit = defineEmits(['openVideoModal'])

// Methods
const openVideoModal = (videoReview) => {
    emit('openVideoModal', videoReview)
}
</script>
