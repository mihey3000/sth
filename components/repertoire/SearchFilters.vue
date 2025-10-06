<template>
    <section class="section-padding bg-gray-50">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <!-- Поиск -->
                <div class="mb-8">
                    <div class="relative">
                        <input v-model="localSearchQuery" type="text" placeholder="Найти песню или исполнителя..."
                            class="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                        <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <!-- Фильтры -->
                <div class="flex flex-wrap gap-4 mb-8">
                    <button v-for="genre in genres" :key="genre" @click="selectGenre(genre)" :class="[
                        'px-6 py-2 rounded-full font-medium transition-colors',
                        selectedGenre === genre
                            ? 'bg-primary text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                    ]">
                        {{ genre }}
                    </button>
                </div>

                <!-- Статистика -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div class="bg-white p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-primary">{{ filteredSongsCount }}</div>
                        <div class="text-gray-600">Песен найдено</div>
                    </div>
                    <div class="bg-white p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-primary">{{ uniqueArtists }}</div>
                        <div class="text-gray-600">Исполнителей</div>
                    </div>
                    <div class="bg-white p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-primary">{{ uniqueGenres }}</div>
                        <div class="text-gray-600">Жанров</div>
                    </div>
                    <div class="bg-white p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-primary">{{ uniqueDecades }}</div>
                        <div class="text-gray-600">Десятилетий</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Props
const props = defineProps({
    searchQuery: {
        type: String,
        required: true
    },
    selectedGenre: {
        type: String,
        default: null
    },
    genres: {
        type: Array,
        required: true
    },
    filteredSongsCount: {
        type: Number,
        required: true
    },
    uniqueArtists: {
        type: Number,
        required: true
    },
    uniqueGenres: {
        type: Number,
        required: true
    },
    uniqueDecades: {
        type: Number,
        required: true
    }
})

// Emits
const emit = defineEmits(['update:searchQuery', 'update:selectedGenre'])

// Локальная переменная для v-model
const localSearchQuery = ref(props.searchQuery)

// Следим за изменениями локальной переменной и эмитим обновление
watch(localSearchQuery, (newValue) => {
    emit('update:searchQuery', newValue)
})

// Следим за изменениями пропса и обновляем локальную переменную
watch(() => props.searchQuery, (newValue) => {
    localSearchQuery.value = newValue
})

// Methods
const selectGenre = (genre) => {
    const newGenre = props.selectedGenre === genre ? null : genre
    emit('update:selectedGenre', newGenre)
}
</script>
