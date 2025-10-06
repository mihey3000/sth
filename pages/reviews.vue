<template>
    <div>
        <!-- Hero Section -->
        <section class="hero-gradient text-white section-padding">
            <div class="container-custom">
                <div class="text-center">
                    <h1 class="text-5xl font-bold mb-6">Отзывы клиентов</h1>
                    <p class="text-xl text-gray-200 max-w-3xl mx-auto">
                        Узнайте, что говорят о нас наши клиенты.
                        Каждый отзыв - это история успешного мероприятия
                    </p>
                </div>
            </div>
        </section>

        <!-- Статистика -->
        <section class="section-padding bg-gray-50">
            <div class="container-custom">
                <div class="max-w-4xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">4.9</div>
                            <div class="text-gray-600">Средняя оценка</div>
                            <div class="flex justify-center mt-2">
                                <div class="flex text-accent">
                                    <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">200+</div>
                            <div class="text-gray-600">Мероприятий</div>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">98%</div>
                            <div class="text-gray-600">Довольных клиентов</div>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">5</div>
                            <div class="text-gray-600">Лет опыта</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Фильтры -->
        <section class="section-padding">
            <div class="container-custom">
                <div class="max-w-4xl mx-auto">
                    <div class="flex flex-wrap gap-4 justify-center mb-8">
                        <button v-for="filter in filters" :key="filter"
                            @click="selectedFilter = selectedFilter === filter ? null : filter" :class="[
                                'px-6 py-2 rounded-full font-medium transition-colors',
                                selectedFilter === filter
                                    ? 'bg-primary text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                            ]">
                            {{ filter }}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Отзывы -->
        <section class="section-padding bg-gray-50">
            <div class="container-custom">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="review in filteredReviews" :key="review.id"
                            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <!-- Заголовок отзыва -->
                            <div class="flex items-start justify-between mb-4">
                                <div class="flex items-center">
                                    <div
                                        class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                                        {{ review.clientName.charAt(0) }}
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-gray-900">{{ review.clientName }}</h3>
                                        <p class="text-sm text-gray-600">{{ review.event }}</p>
                                    </div>
                                </div>
                                <div class="flex text-accent">
                                    <svg v-for="i in review.rating" :key="i" class="w-4 h-4" fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                            </div>

                            <!-- Текст отзыва -->
                            <p class="text-gray-700 mb-4 leading-relaxed">{{ review.text }}</p>

                            <!-- Дата и тип мероприятия -->
                            <div class="flex items-center justify-between text-sm text-gray-500">
                                <span>{{ review.date }}</span>
                                <span class="px-2 py-1 bg-gray-100 rounded-full">{{ review.eventType }}</span>
                            </div>

                            <!-- Дополнительная информация -->
                            <div v-if="review.highlights" class="mt-4 pt-4 border-t border-gray-100">
                                <div class="text-sm text-gray-600">
                                    <div class="font-medium mb-2">Особенно понравилось:</div>
                                    <ul class="space-y-1">
                                        <li v-for="highlight in review.highlights" :key="highlight"
                                            class="flex items-center">
                                            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor"
                                                viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            {{ highlight }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Кнопка "Показать еще" -->
                    <div v-if="hasMoreReviews" class="text-center mt-12">
                        <button @click="loadMore" class="btn-primary px-8 py-3">
                            Показать еще отзывы
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Видео отзывы -->
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

        <!-- Форма отзыва -->
        <section class="section-padding bg-gray-50">
            <div class="container-custom">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Оставьте свой отзыв</h2>
                        <p class="text-lg text-gray-600">
                            Поделитесь впечатлениями о нашем выступлении
                        </p>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <form @submit.prevent="submitReview" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Ваше имя *</label>
                                    <input v-model="reviewForm.name" type="text" required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Ваше имя">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Тип мероприятия
                                        *</label>
                                    <select v-model="reviewForm.eventType" required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                        <option value="">Выберите тип</option>
                                        <option value="corporate">Корпоратив</option>
                                        <option value="wedding">Свадьба</option>
                                        <option value="birthday">День рождения</option>
                                        <option value="other">Другое</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Оценка *</label>
                                <div class="flex space-x-2">
                                    <button v-for="i in 5" :key="i" type="button" @click="reviewForm.rating = i" :class="[
                                        'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                                        i <= reviewForm.rating
                                            ? 'bg-accent text-white'
                                            : 'bg-gray-200 text-gray-400 hover:bg-accent/70'
                                    ]">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Ваш отзыв *</label>
                                <textarea v-model="reviewForm.text" rows="4" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Расскажите о ваших впечатлениях..."></textarea>
                            </div>

                            <button type="submit" :disabled="isSubmittingReview"
                                class="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                                {{ isSubmittingReview ? 'Отправляем...' : 'Отправить отзыв' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="hero-gradient text-white section-padding">
            <div class="container-custom text-center">
                <h2 class="text-4xl font-bold mb-6">
                    Станьте нашим следующим довольным клиентом!
                </h2>
                <p class="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                    Закажите выступление и создайте незабываемые воспоминания
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="btn-accent text-lg px-8 py-4">
                        Заказать выступление
                    </button>
                    <button
                        class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg">
                        Посмотреть репертуар
                    </button>
                </div>
            </div>
        </section>

        <!-- Видео модальное окно -->
        <div v-if="videoModalOpen"
            class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            @click="closeVideoModal">
            <div class="relative max-w-4xl max-h-full">
                <button @click="closeVideoModal"
                    class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
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
    </div>
</template>

<script setup>
// SEO
useHead({
    title: 'Отзывы о СтереоХит - Реальные отзывы клиентов кавер группы',
    meta: [
        { name: 'description', content: 'Отзывы клиентов о кавер группе СтереоХит. Реальные отзывы с корпоративов, свадеб, дней рождения. Видео отзывы и рейтинги.' }
    ]
})

// Реактивные данные
const selectedFilter = ref(null)
const videoModalOpen = ref(false)
const currentVideoReview = ref(null)
const isSubmittingReview = ref(false)
const reviewsPerLoad = 9
const loadedReviews = ref(reviewsPerLoad)

// Фильтры
const filters = ['Все', 'Корпоративы', 'Свадьбы', 'Дни рождения', '5 звезд', '4 звезды']

// Форма отзыва
const reviewForm = ref({
    name: '',
    eventType: '',
    rating: 0,
    text: ''
})

// Данные отзывов
const reviews = ref([
    {
        id: 1,
        clientName: 'Елена Петрова',
        event: 'Свадьба 15.09.2023',
        eventType: 'Свадьба',
        rating: 5,
        text: 'Невероятное выступление! Гости до сих пор вспоминают этот вечер. СтереоХит создали такую атмосферу, что все танцевали до утра. Очень профессионально и душевно.',
        date: 'Сентябрь 2023',
        highlights: ['Первый танец молодоженов', 'Интерактив с гостями', 'Качественный звук']
    },
    {
        id: 2,
        clientName: 'Александр Козлов',
        event: 'Корпоратив IT-компании',
        eventType: 'Корпоратив',
        rating: 5,
        text: 'Профессиональная работа! Все сотрудники были в восторге. Группа адаптировала репертуар под нашу корпоративную культуру. Рекомендую всем!',
        date: 'Октябрь 2023',
        highlights: ['Адаптация под корпоратив', 'Профессионализм', 'Пунктуальность']
    },
    {
        id: 3,
        clientName: 'Мария Сидорова',
        event: 'День рождения 50 лет',
        eventType: 'День рождения',
        rating: 5,
        text: 'Создали незабываемую атмосферу для моего юбилея. Персонально подобрали песни из моей молодости. Гости были в восторге!',
        date: 'Ноябрь 2023',
        highlights: ['Персональный подбор песен', 'Атмосфера', 'Внимание к деталям']
    },
    {
        id: 4,
        clientName: 'Дмитрий Волков',
        event: 'Корпоратив банка',
        eventType: 'Корпоратив',
        rating: 4,
        text: 'Отличное выступление! Группа очень профессиональная. Единственное - хотелось бы больше современных песен, но в целом все понравилось.',
        date: 'Декабрь 2023',
        highlights: ['Профессионализм', 'Качество звука']
    },
    {
        id: 5,
        clientName: 'Анна Козлова',
        event: 'Свадьба в загородном клубе',
        eventType: 'Свадьба',
        rating: 5,
        text: 'Лучший выбор для нашей свадьбы! СтереоХит сделали наш день особенным. Все гости до сих пор говорят, что это была лучшая свадьба.',
        date: 'Август 2023',
        highlights: ['Особенная атмосфера', 'Работа с гостями', 'Качественная музыка']
    },
    {
        id: 6,
        clientName: 'Игорь Смирнов',
        event: 'День рождения в клубе',
        eventType: 'День рождения',
        rating: 5,
        text: 'Вечеринка в стиле 80х удалась на 100%! Группа привезла все необходимое оборудование и создала настоящую атмосферу дискотеки.',
        date: 'Июль 2023',
        highlights: ['Тематическая вечеринка', 'Полное оборудование', 'Атмосфера 80х']
    },
    {
        id: 7,
        clientName: 'Ольга Новикова',
        event: 'Корпоратив в ресторане',
        eventType: 'Корпоратив',
        rating: 5,
        text: 'Прекрасное выступление! Группа очень гибко подстроилась под наши пожелания и создала отличную атмосферу для корпоратива.',
        date: 'Июнь 2023',
        highlights: ['Гибкость', 'Атмосфера', 'Профессионализм']
    },
    {
        id: 8,
        clientName: 'Сергей Петров',
        event: 'Свадебная церемония',
        eventType: 'Свадьба',
        rating: 5,
        text: 'Музыкальное сопровождение церемонии было просто идеальным. СтереоХит помогли сделать наш день незабываемым.',
        date: 'Май 2023',
        highlights: ['Музыкальное сопровождение', 'Идеальное исполнение']
    },
    {
        id: 9,
        clientName: 'Татьяна Морозова',
        event: 'День рождения ребенка',
        eventType: 'День рождения',
        rating: 4,
        text: 'Дети были в восторге! Группа адаптировала программу под детскую аудиторию. Единственное - хотелось бы больше интерактива.',
        date: 'Апрель 2023',
        highlights: ['Адаптация под детей', 'Детская программа']
    }
])

// Видео отзывы
const videoReviews = ref([
    {
        id: 1,
        clientName: 'Елена Петрова',
        event: 'Свадьба',
        rating: 5,
        duration: '2:30'
    },
    {
        id: 2,
        clientName: 'Александр Козлов',
        event: 'Корпоратив',
        rating: 5,
        duration: '1:45'
    },
    {
        id: 3,
        clientName: 'Мария Сидорова',
        event: 'День рождения',
        rating: 5,
        duration: '3:15'
    }
])

// Вычисляемые свойства
const filteredReviews = computed(() => {
    let filtered = reviews.value

    if (selectedFilter.value && selectedFilter.value !== 'Все') {
        if (selectedFilter.value.includes('звезд')) {
            const rating = parseInt(selectedFilter.value.charAt(0))
            filtered = filtered.filter(review => review.rating === rating)
        } else {
            filtered = filtered.filter(review => review.eventType === selectedFilter.value)
        }
    }

    return filtered.slice(0, loadedReviews.value)
})

const hasMoreReviews = computed(() => {
    const total = selectedFilter.value && selectedFilter.value !== 'Все'
        ? reviews.value.filter(review => {
            if (selectedFilter.value.includes('звезд')) {
                const rating = parseInt(selectedFilter.value.charAt(0))
                return review.rating === rating
            } else {
                return review.eventType === selectedFilter.value
            }
        }).length
        : reviews.value.length

    return loadedReviews.value < total
})

// Методы
const loadMore = () => {
    loadedReviews.value += reviewsPerLoad
}

const openVideoModal = (videoReview) => {
    currentVideoReview.value = videoReview
    videoModalOpen.value = true
}

const closeVideoModal = () => {
    videoModalOpen.value = false
    currentVideoReview.value = null
}

const submitReview = async () => {
    isSubmittingReview.value = true

    // Имитация отправки отзыва
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Здесь будет реальная отправка отзыва
    console.log('Отзыв отправлен:', reviewForm.value)

    // Сброс формы
    reviewForm.value = {
        name: '',
        eventType: '',
        rating: 0,
        text: ''
    }

    isSubmittingReview.value = false

    // Показать уведомление об успешной отправке
    alert('Спасибо за ваш отзыв! Он будет опубликован после модерации.')
}

// Сброс загруженных отзывов при изменении фильтра
watch(selectedFilter, () => {
    loadedReviews.value = reviewsPerLoad
})
</script>
