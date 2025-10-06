<template>
    <div>
        <!-- Hero Section -->
        <section class="hero-gradient text-white section-padding">
            <div class="container-custom">
                <div class="text-center">
                    <h1 class="text-5xl font-bold mb-6">Наш репертуар</h1>
                    <p class="text-xl text-gray-200 max-w-3xl mx-auto">
                        Более 500 песен в нашем репертуаре! От классики до современной музыки,
                        от русских хитов до зарубежных шедевров. Мы играем то, что любят ваши гости.
                    </p>
                </div>
            </div>
        </section>

        <!-- Поиск и фильтры -->
        <section class="section-padding bg-gray-50">
            <div class="container-custom">
                <div class="max-w-4xl mx-auto">
                    <!-- Поиск -->
                    <div class="mb-8">
                        <div class="relative">
                            <input v-model="searchQuery" type="text" placeholder="Найти песню или исполнителя..."
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
                        <button v-for="genre in genres" :key="genre"
                            @click="selectedGenre = selectedGenre === genre ? null : genre" :class="[
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
                            <div class="text-2xl font-bold text-primary">{{ filteredSongs.length }}</div>
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

        <!-- Список песен -->
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
                                        <span class="px-2 py-1 bg-light text-primary text-xs rounded-full">{{
                                            song.genre }}</span>
                                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{{
                                            song.decade }}</span>
                                        <span v-if="song.language"
                                            class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{{
                                                song.language }}</span>
                                    </div>
                                </div>
                                <button class="text-gray-400 hover:text-primary transition-colors">
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
                            <button @click="currentPage = Math.max(1, currentPage - 1)" :disabled="currentPage === 1"
                                class="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">
                                Назад
                            </button>
                            <button v-for="page in visiblePages" :key="page" @click="currentPage = page" :class="[
                                'px-4 py-2 rounded-lg border',
                                currentPage === page
                                    ? 'bg-primary text-white border-primary'
                                    : 'border-gray-300 hover:bg-gray-50'
                            ]">
                                {{ page }}
                            </button>
                            <button @click="currentPage = Math.min(totalPages, currentPage + 1)"
                                :disabled="currentPage === totalPages"
                                class="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">
                                Вперед
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Запрос новой песни -->
        <section class="section-padding bg-gray-50">
            <div class="container-custom">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">Не нашли нужную песню?</h2>
                    <p class="text-lg text-gray-600 mb-8">
                        Мы всегда готовы разучить новые песни для вашего мероприятия!
                        Просто сообщите нам название и исполнителя.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <input v-model="newSongRequest" type="text" placeholder="Название песни и исполнитель"
                            class="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                        <button class="btn-primary">
                            Отправить запрос
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="hero-gradient text-white section-padding">
            <div class="container-custom text-center">
                <h2 class="text-4xl font-bold mb-6">
                    Готовы заказать выступление?
                </h2>
                <p class="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                    Выберите песни из нашего репертуара или предложите свои варианты
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="btn-accent text-lg px-8 py-4">
                        Заказать выступление
                    </button>
                    <button
                        class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg">
                        Получить консультацию
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// SEO
useHead({
    title: 'Репертуар СтереоХит - Более 500 песен для вашего мероприятия',
    meta: [
        { name: 'description', content: 'Репертуар кавер группы СтереоХит. Более 500 песен: русские хиты, зарубежная музыка, классика, современные треки. Поиск по жанрам и исполнителям.' }
    ]
})

// Реактивные данные
const searchQuery = ref('')
const selectedGenre = ref(null)
const currentPage = ref(1)
const itemsPerPage = 12
const newSongRequest = ref('')

// Жанры для фильтрации
const genres = ['Поп', 'Рок', 'Джаз', 'Ретро', 'Классика', 'Современная', 'Русская', 'Зарубежная']

// Пример данных песен
const songs = ref([
    // Русские хиты
    { id: 1, title: 'Виновата ли я', artist: 'Алла Пугачева', genre: 'Поп', decade: '80е', language: 'Русский', popular: true },
    { id: 2, title: 'Миллион алых роз', artist: 'Алла Пугачева', genre: 'Поп', decade: '80е', language: 'Русский', popular: true },
    { id: 3, title: 'Земля в иллюминаторе', artist: 'ВИА "Земляне"', genre: 'Поп', decade: '80е', language: 'Русский', popular: true },
    { id: 4, title: 'Кукушка', artist: 'Виктор Цой', genre: 'Рок', decade: '80е', language: 'Русский', popular: true },
    { id: 5, title: 'Группа крови', artist: 'Виктор Цой', genre: 'Рок', decade: '80е', language: 'Русский', popular: true },
    { id: 6, title: 'Звезда по имени Солнце', artist: 'Виктор Цой', genre: 'Рок', decade: '80е', language: 'Русский', popular: true },
    { id: 7, title: 'На заре', artist: 'Альянс', genre: 'Поп', decade: '80е', language: 'Русский', popular: false },
    { id: 8, title: 'Спокойной ночи', artist: 'Альянс', genre: 'Поп', decade: '80е', language: 'Русский', popular: false },

    // Зарубежные хиты
    { id: 9, title: 'Hotel California', artist: 'Eagles', genre: 'Рок', decade: '70е', language: 'Английский', popular: true },
    { id: 10, title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Рок', decade: '70е', language: 'Английский', popular: true },
    { id: 11, title: 'Imagine', artist: 'John Lennon', genre: 'Поп', decade: '70е', language: 'Английский', popular: true },
    { id: 12, title: 'Yesterday', artist: 'The Beatles', genre: 'Поп', decade: '60е', language: 'Английский', popular: true },
    { id: 13, title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', genre: 'Рок', decade: '80е', language: 'Английский', popular: true },
    { id: 14, title: 'Wonderwall', artist: 'Oasis', genre: 'Рок', decade: '90е', language: 'Английский', popular: true },
    { id: 15, title: 'Smells Like Teen Spirit', artist: 'Nirvana', genre: 'Рок', decade: '90е', language: 'Английский', popular: true },
    { id: 16, title: 'Billie Jean', artist: 'Michael Jackson', genre: 'Поп', decade: '80е', language: 'Английский', popular: true },

    // Джаз
    { id: 17, title: 'Take Five', artist: 'Dave Brubeck', genre: 'Джаз', decade: '60е', language: 'Инструментальная', popular: false },
    { id: 18, title: 'Blue Moon', artist: 'Frank Sinatra', genre: 'Джаз', decade: '50е', language: 'Английский', popular: false },
    { id: 19, title: 'Summertime', artist: 'Ella Fitzgerald', genre: 'Джаз', decade: '50е', language: 'Английский', popular: false },
    { id: 20, title: 'Fly Me to the Moon', artist: 'Frank Sinatra', genre: 'Джаз', decade: '60е', language: 'Английский', popular: false },

    // Современная музыка
    { id: 21, title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Поп', decade: '2010е', language: 'Английский', popular: true },
    { id: 22, title: 'Despacito', artist: 'Luis Fonsi', genre: 'Поп', decade: '2010е', language: 'Испанский', popular: true },
    { id: 23, title: 'Perfect', artist: 'Ed Sheeran', genre: 'Поп', decade: '2010е', language: 'Английский', popular: true },
    { id: 24, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'Поп', decade: '2020е', language: 'Английский', popular: true },

    // Классика
    { id: 25, title: 'Can\'t Help Myself', artist: 'Four Tops', genre: 'Ретро', decade: '60е', language: 'Английский', popular: false },
    { id: 26, title: 'My Girl', artist: 'The Temptations', genre: 'Ретро', decade: '60е', language: 'Английский', popular: false },
    { id: 27, title: 'Stand by Me', artist: 'Ben E. King', genre: 'Ретро', decade: '60е', language: 'Английский', popular: true },
    { id: 28, title: 'Unchained Melody', artist: 'The Righteous Brothers', genre: 'Ретро', decade: '60е', language: 'Английский', popular: true },
])

// Вычисляемые свойства
const filteredSongs = computed(() => {
    let filtered = songs.value

    // Фильтр по поиску
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(song =>
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query)
        )
    }

    // Фильтр по жанру
    if (selectedGenre.value) {
        filtered = filtered.filter(song => song.genre === selectedGenre.value)
    }

    return filtered
})

const uniqueArtists = computed(() => {
    return new Set(filteredSongs.value.map(song => song.artist)).size
})

const uniqueGenres = computed(() => {
    return new Set(filteredSongs.value.map(song => song.genre)).size
})

const uniqueDecades = computed(() => {
    return new Set(filteredSongs.value.map(song => song.decade)).size
})

const totalPages = computed(() => {
    return Math.ceil(filteredSongs.value.length / itemsPerPage)
})

const paginatedSongs = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredSongs.value.slice(start, end)
})

const visiblePages = computed(() => {
    const pages = []
    const total = totalPages.value
    const current = currentPage.value

    if (total <= 7) {
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }
    } else {
        if (current <= 4) {
            for (let i = 1; i <= 5; i++) pages.push(i)
            pages.push('...')
            pages.push(total)
        } else if (current >= total - 3) {
            pages.push(1)
            pages.push('...')
            for (let i = total - 4; i <= total; i++) pages.push(i)
        } else {
            pages.push(1)
            pages.push('...')
            for (let i = current - 1; i <= current + 1; i++) pages.push(i)
            pages.push('...')
            pages.push(total)
        }
    }

    return pages
})

// Сброс страницы при изменении фильтров
watch([searchQuery, selectedGenre], () => {
    currentPage.value = 1
})
</script>
