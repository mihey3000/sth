<template>
    <div>
        <!-- Hero Section -->
        <section class="hero-gradient text-white section-padding">
            <div class="container-custom">
                <div class="text-center">
                    <h1 class="text-5xl font-bold mb-6">Галерея</h1>
                    <p class="text-xl text-gray-200 max-w-3xl mx-auto">
                        Посмотрите на наши выступления и почувствуйте атмосферу,
                        которую мы создаем на каждом мероприятии
                    </p>
                </div>
            </div>
        </section>

        <!-- Фильтры -->
        <section class="section-padding bg-gray-50">
            <div class="container-custom">
                <div class="max-w-4xl mx-auto">
                    <div class="flex flex-wrap gap-4 justify-center mb-8">
                        <button v-for="category in categories" :key="category"
                            @click="selectedCategory = selectedCategory === category ? null : category" :class="[
                                'px-6 py-2 rounded-full font-medium transition-colors',
                                selectedCategory === category
                                    ? 'bg-primary text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            ]">
                            {{ category }}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Фото галерея -->
        <section class="section-padding">
            <div class="container-custom">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="(item, index) in filteredGallery" :key="item.id" class="group cursor-pointer"
                        @click="openLightbox(index)">
                        <div
                            class="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                            <div class="aspect-w-16 aspect-h-12 bg-gray-200 flex items-center justify-center">
                                <span class="text-gray-500 text-lg">{{ item.type === 'photo' ? 'Фото' : 'Видео'
                                }}</span>
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
                            <div
                                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
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

                <!-- Кнопка "Показать еще" -->
                <div v-if="hasMoreItems" class="text-center mt-12">
                    <button @click="loadMore" class="btn-primary px-8 py-3">
                        Показать еще
                    </button>
                </div>
            </div>
        </section>

        <!-- Видео отзывы -->
        <section class="section-padding bg-gray-50">
            <div class="container-custom">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Видео отзывы</h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Послушайте, что говорят наши клиенты о выступлениях СтереоХит
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="testimonial in videoTestimonials" :key="testimonial.id"
                        class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                            <span class="text-gray-500">Видео отзыв</span>
                        </div>
                        <div class="p-6">
                            <h3 class="text-lg font-semibold mb-2">{{ testimonial.clientName }}</h3>
                            <p class="text-gray-600 mb-4">{{ testimonial.event }}</p>
                            <div class="flex items-center">
                                <div class="flex text-accent">
                                    <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <span class="ml-2 text-gray-600 text-sm">{{ testimonial.rating }}/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="hero-gradient text-white section-padding">
            <div class="container-custom text-center">
                <h2 class="text-4xl font-bold mb-6">
                    Хотите стать частью нашей галереи?
                </h2>
                <p class="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                    Закажите выступление и создайте незабываемые воспоминания вместе с нами
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="btn-accent text-lg px-8 py-4">
                        Заказать выступление
                    </button>
                    <button
                        class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg">
                        Посмотреть портфолио
                    </button>
                </div>
            </div>
        </section>

        <!-- Lightbox Modal -->
        <div v-if="lightboxOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            @click="closeLightbox">
            <div class="relative max-w-4xl max-h-full">
                <button @click="closeLightbox"
                    class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div class="bg-white rounded-lg p-6">
                    <div class="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center mb-4">
                        <span class="text-gray-500 text-lg">
                            {{ currentLightboxItem?.type === 'video' ? 'Видео' : 'Фото' }}
                        </span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">{{ currentLightboxItem?.title }}</h3>
                    <p class="text-gray-600">{{ currentLightboxItem?.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// SEO
useHead({
    title: 'Галерея СтереоХит - Фото и видео наших выступлений',
    meta: [
        { name: 'description', content: 'Галерея кавер группы СтереоХит. Фото и видео с корпоративов, свадеб, дней рождения. Видео отзывы клиентов и портфолио выступлений.' }
    ]
})

// Реактивные данные
const selectedCategory = ref(null)
const lightboxOpen = ref(false)
const currentLightboxIndex = ref(0)
const itemsPerLoad = 9
const loadedItems = ref(itemsPerLoad)

// Категории для фильтрации
const categories = ['Все', 'Корпоративы', 'Свадьбы', 'Дни рождения', 'Фото', 'Видео']

// Данные галереи
const galleryItems = ref([
    // Корпоративы
    { id: 1, type: 'photo', title: 'Новогодний корпоратив', description: 'Выступление на корпоративе IT-компании', category: 'Корпоративы', date: 'Декабрь 2023' },
    { id: 2, type: 'video', title: 'Корпоратив банка', description: 'Музыкальная программа для сотрудников банка', category: 'Корпоративы', date: 'Ноябрь 2023' },
    { id: 3, type: 'photo', title: 'День компании', description: 'Празднование 10-летия компании', category: 'Корпоративы', date: 'Октябрь 2023' },

    // Свадьбы
    { id: 4, type: 'video', title: 'Свадьба Анны и Михаила', description: 'Первый танец молодоженов', category: 'Свадьбы', date: 'Сентябрь 2023' },
    { id: 5, type: 'photo', title: 'Свадьба в загородном клубе', description: 'Танцевальная программа для гостей', category: 'Свадьбы', date: 'Август 2023' },
    { id: 6, type: 'video', title: 'Свадебная церемония', description: 'Музыкальное сопровождение церемонии', category: 'Свадьбы', date: 'Июль 2023' },

    // Дни рождения
    { id: 7, type: 'photo', title: 'Юбилей 50 лет', description: 'Празднование юбилея в ресторане', category: 'Дни рождения', date: 'Июнь 2023' },
    { id: 8, type: 'video', title: 'День рождения в клубе', description: 'Вечеринка в стиле 80х', category: 'Дни рождения', date: 'Май 2023' },
    { id: 9, type: 'photo', title: 'Детский день рождения', description: 'Музыкальная программа для детей', category: 'Дни рождения', date: 'Апрель 2023' },

    // Дополнительные фото
    { id: 10, type: 'photo', title: 'За кулисами', description: 'Подготовка к выступлению', category: 'Фото', date: 'Март 2023' },
    { id: 11, type: 'photo', title: 'Репетиция', description: 'Работа над новым репертуаром', category: 'Фото', date: 'Февраль 2023' },
    { id: 12, type: 'video', title: 'Интервью с группой', description: 'Рассказ о творческом процессе', category: 'Видео', date: 'Январь 2023' },

    // Еще больше контента
    { id: 13, type: 'photo', title: 'Корпоратив в офисе', description: 'Выступление в офисе компании', category: 'Корпоративы', date: 'Декабрь 2022' },
    { id: 14, type: 'video', title: 'Свадьба на природе', description: 'Романтичная свадьба на открытом воздухе', category: 'Свадьбы', date: 'Ноябрь 2022' },
    { id: 15, type: 'photo', title: 'День рождения в кафе', description: 'Интимное празднование', category: 'Дни рождения', date: 'Октябрь 2022' },
    { id: 16, type: 'video', title: 'Корпоратив в ресторане', description: 'Гала-ужин с музыкальной программой', category: 'Корпоративы', date: 'Сентябрь 2022' },
    { id: 17, type: 'photo', title: 'Свадебная фотосессия', description: 'Фото с молодоженами', category: 'Свадьбы', date: 'Август 2022' },
    { id: 18, type: 'video', title: 'День рождения ребенка', description: 'Детский праздник с музыкой', category: 'Дни рождения', date: 'Июль 2022' },
])

// Видео отзывы
const videoTestimonials = ref([
    {
        id: 1,
        clientName: 'Елена Петрова',
        event: 'Свадьба',
        rating: 5,
        description: 'Невероятное выступление! Гости до сих пор вспоминают этот вечер.'
    },
    {
        id: 2,
        clientName: 'Александр Козлов',
        event: 'Корпоратив',
        rating: 5,
        description: 'Профессиональная работа. Все сотрудники были в восторге!'
    },
    {
        id: 3,
        clientName: 'Мария Сидорова',
        event: 'День рождения',
        rating: 5,
        description: 'Создали незабываемую атмосферу для моего юбилея.'
    }
])

// Вычисляемые свойства
const filteredGallery = computed(() => {
    let filtered = galleryItems.value

    if (selectedCategory.value && selectedCategory.value !== 'Все') {
        filtered = filtered.filter(item => item.category === selectedCategory.value)
    }

    return filtered.slice(0, loadedItems.value)
})

const hasMoreItems = computed(() => {
    const total = selectedCategory.value && selectedCategory.value !== 'Все'
        ? galleryItems.value.filter(item => item.category === selectedCategory.value).length
        : galleryItems.value.length

    return loadedItems.value < total
})

const currentLightboxItem = computed(() => {
    return filteredGallery.value[currentLightboxIndex.value]
})

// Методы
const openLightbox = (index) => {
    currentLightboxIndex.value = index
    lightboxOpen.value = true
}

const closeLightbox = () => {
    lightboxOpen.value = false
}

const loadMore = () => {
    loadedItems.value += itemsPerLoad
}

// Сброс загруженных элементов при изменении фильтра
watch(selectedCategory, () => {
    loadedItems.value = itemsPerLoad
})
</script>
