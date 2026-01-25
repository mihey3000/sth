<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click="closeModal">
        <div class="relative max-w-4xl max-h-full" @click.stop>
            <button @click="closeModal"
                class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="bg-white rounded-lg p-6 max-h-[90vh] overflow-hidden">
                <div class="bg-gray-200 flex items-center justify-center mb-4 max-h-[70vh]">
                    <img
                        v-if="currentItem?.type === 'photo' && currentItem?.src"
                        :src="encodeURI(currentItem.src)"
                        :alt="currentItem?.title || 'Фото'"
                        class="max-h-[70vh] w-auto h-auto object-contain"
                        @touchstart="onTouchStart"
                        @touchmove="onTouchMove"
                        @touchend="onTouchEnd"
                    />
                    <span v-else class="text-gray-500 text-lg">Фото</span>
                </div>
                <p v-if="showSwipeHint" class="text-sm text-gray-500 mb-2">
                    Подсказка: используйте стрелки для переключения фото.
                </p>
                <div class="flex items-center justify-between gap-4 mb-2">
                    <button
                        v-if="hasPrev"
                        @click="prevItem"
                        class="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Предыдущее фото"
                    >
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h3 class="text-xl font-semibold text-center flex-1">{{ currentItem?.title }}</h3>
                    <button
                        v-if="hasNext"
                        @click="nextItem"
                        class="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Следующее фото"
                    >
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <p class="text-gray-600">{{ currentItem?.description }}</p>
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
    hasPrev: {
        type: Boolean,
        default: false
    },
    hasNext: {
        type: Boolean,
        default: false
    },
    currentItem: {
        type: Object,
        default: null
    }
})

// Emits
const emit = defineEmits(['close', 'prev', 'next'])

// Methods
const closeModal = () => {
    emit('close')
}

const prevItem = () => {
    emit('prev')
}

const nextItem = () => {
    emit('next')
}

const handleKeydown = (event) => {
    if (event.key === 'ArrowLeft') {
        emit('prev')
    }

    if (event.key === 'ArrowRight') {
        emit('next')
    }

    if (event.key === 'Escape') {
        emit('close')
    }
}

const touchStartX = ref(0)
const touchEndX = ref(0)
const swipeThreshold = 50
const isCoarsePointer = ref(false)
const showSwipeHint = computed(() => !isCoarsePointer.value)

const onTouchStart = (event) => {
    if (isCoarsePointer.value) {
        return
    }

    const touch = event.touches?.[0]
    if (!touch) {
        return
    }

    touchStartX.value = touch.clientX
    touchEndX.value = touch.clientX
}

const onTouchMove = (event) => {
    if (isCoarsePointer.value) {
        return
    }

    const touch = event.touches?.[0]
    if (!touch) {
        return
    }

    touchEndX.value = touch.clientX
}

const onTouchEnd = () => {
    if (isCoarsePointer.value) {
        return
    }

    const deltaX = touchEndX.value - touchStartX.value
    if (Math.abs(deltaX) < swipeThreshold) {
        return
    }

    if (deltaX > 0) {
        emit('prev')
        return
    }

    emit('next')
}

const lockBodyScroll = () => {
    if (typeof document === 'undefined' || !document.body) {
        return
    }

    document.body.classList.add('overflow-hidden')
}

const unlockBodyScroll = () => {
    if (typeof document === 'undefined' || !document.body) {
        return
    }

    document.body.classList.remove('overflow-hidden')
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onMounted(() => {
    isCoarsePointer.value = window.matchMedia?.('(pointer: coarse)').matches ?? false
})

if (process.client) {
    watch(
        () => props.isOpen,
        (isOpen) => {
            if (isOpen) {
                lockBodyScroll()
                return
            }

            unlockBodyScroll()
        },
        {immediate: true}
    )
}

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
    unlockBodyScroll()
})
</script>
