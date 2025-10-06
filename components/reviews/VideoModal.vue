<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click="closeModal">
        <div class="relative max-w-4xl max-h-full">
            <button @click="closeModal"
                class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="bg-white rounded-lg p-6">
                <div class="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center mb-4">
                    <span class="text-gray-500 text-lg">Видео отзыв</span>
                </div>
                <h3 class="text-xl font-semibold mb-2">{{ currentVideoReview?.clientName }}</h3>
                <p class="text-gray-600">{{ currentVideoReview?.event }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// Props
const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    currentVideoReview: {
        type: Object,
        default: null
    }
})

// Emits
const emit = defineEmits(['close'])

// Methods
const closeModal = () => {
    emit('close')
}
</script>
