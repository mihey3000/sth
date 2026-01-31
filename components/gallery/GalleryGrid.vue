<template>
    <section class="section-padding">
        <div class="container-custom">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(item, index) in filteredGallery" :key="item.id" class="group cursor-pointer"
                    @click="openLightbox(index)">
                    <div class="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                        <div class="aspect-w-16 aspect-h-12 bg-gray-200 flex items-center justify-center">
                            <img
                                v-if="item.type === 'photo' && item.src"
                                :src="encodeURI(item.src)"
                                :alt="item.title || 'Фото'"
                                class="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <span v-else class="text-gray-500 text-lg">Фото</span>
                        </div>
                        <div
                            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <div class="opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg v-if="item.type === 'video'" class="w-16 h-16 text-white" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                <svg v-else class="w-16 h-16 text-white" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h3 class="text-white font-semibold mb-1">{{ item.title }}</h3>
                            <p class="text-gray-200 text-sm">{{ item.description }}</p>
                            <div class="flex items-center mt-2">
                                <span class="px-2 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full">{{
                                    item.category }}</span>
                                <span class="ml-2 text-gray-300 text-xs">{{ item.date }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref="loadMoreTrigger" class="h-px"></div>
        </div>
    </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

// Props
const props = defineProps({
    filteredGallery: {
        type: Array,
        required: true
    },
    hasMoreItems: {
        type: Boolean,
        required: true
    }
})

// Emits
const emit = defineEmits(['openLightbox', 'loadMore'])

// Methods
const openLightbox = (index) => {
    emit('openLightbox', index)
}

const loadMoreTrigger = ref(null)
const isLoadingMore = ref(false)
let observer = null

const setupObserver = () => {
    if (!loadMoreTrigger.value) {
        return
    }

    observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) {
            return
        }
        if (!props.hasMoreItems) {
            return
        }
        if (isLoadingMore.value) {
            return
        }
        isLoadingMore.value = true
        emit('loadMore')
        nextTick(() => {
            isLoadingMore.value = false
            if (!props.hasMoreItems && observer) {
                observer.disconnect()
            }
        })
    }, { root: null, rootMargin: '200px 0px', threshold: 0.1 })

    observer.observe(loadMoreTrigger.value)
}

onMounted(() => {
    setupObserver()
})

onBeforeUnmount(() => {
    if (!observer) {
        return
    }
    observer.disconnect()
})
</script>
