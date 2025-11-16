<template>
    <section class="section-padding">
        <div class="container-custom">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="song in paginatedSongs" :key="song.id"
                        class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="flex items-start justify-between mb-4">
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ song.title }}</h3>
                                <p class="text-gray-600 mb-2">{{ song.artist }}</p>
                                <div class="flex flex-wrap gap-2">
                                    <span v-if="song.genre"
                                        class="px-2 py-1 bg-light text-primary text-xs rounded-full">{{ song.genre
                                        }}</span>
                                    <span v-if="song.decade"
                                        class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{{ song.decade
                                        }}</span>
                                    <span v-if="song.language"
                                        class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{{
                                            song.language }}</span>
                                </div>
                            </div>
                            <button v-if="showPreviewButton" class="text-gray-400 hover:text-primary transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                </svg>
                            </button>
                        </div>
                        <div v-if="song.popular" class="flex items-center text-accent text-sm">
                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            Популярная
                        </div>
                    </div>
                </div>

                <!-- Пагинация -->
                <div v-if="totalPages > 1" class="flex justify-center mt-12">
                    <div class="flex space-x-2">
                        <button @click="goToPreviousPage" :disabled="currentPage === 1"
                            class="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">
                            Назад
                        </button>
                        <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="[
                            'px-4 py-2 rounded-lg border',
                            currentPage === page
                                ? 'bg-primary text-white border-primary'
                                : 'border-gray-300 hover:bg-gray-50'
                        ]">
                            {{ page }}
                        </button>
                        <button @click="goToNextPage" :disabled="currentPage === totalPages"
                            class="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">
                            Вперед
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Props
const props = defineProps({
    paginatedSongs: {
        type: Array,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    },
    visiblePages: {
        type: Array,
        required: true
    }
})

// Emits
const emit = defineEmits(['update:currentPage'])

const showPreviewButton = false

// Methods
const goToPage = (page) => {
    if (typeof page === 'number') {
        emit('update:currentPage', page)
    }
}

const goToPreviousPage = () => {
    if (props.currentPage > 1) {
        emit('update:currentPage', props.currentPage - 1)
    }
}

const goToNextPage = () => {
    if (props.currentPage < props.totalPages) {
        emit('update:currentPage', props.currentPage + 1)
    }
}
</script>
