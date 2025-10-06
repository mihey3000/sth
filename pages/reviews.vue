<template>
    <div>
        <ReviewsHero />
        <ReviewsStats />
        <ReviewsFilters v-model:selected-filter="selectedFilter" :filters="filters" />
        <ReviewsGrid :filtered-reviews="filteredReviews" :has-more-reviews="hasMoreReviews" @load-more="loadMore" />
        <VideoReviews :video-reviews="videoReviews" @open-video-modal="openVideoModal" />
        <ReviewForm v-model:review-form="reviewForm" :is-submitting-review="isSubmittingReview"
            @submit-review="submitReview" />
        <ReviewsCTA />
        <VideoModal :is-open="videoModalOpen" :current-video-review="currentVideoReview" @close="closeVideoModal" />
    </div>
</template>

<script setup>
// Импорты компонентов отзывов
import ReviewsHero from '~/components/reviews/ReviewsHero.vue'
import ReviewsStats from '~/components/reviews/ReviewsStats.vue'
import ReviewsFilters from '~/components/reviews/ReviewsFilters.vue'
import ReviewsGrid from '~/components/reviews/ReviewsGrid.vue'
import VideoReviews from '~/components/reviews/VideoReviews.vue'
import ReviewForm from '~/components/reviews/ReviewForm.vue'
import ReviewsCTA from '~/components/reviews/ReviewsCTA.vue'
import VideoModal from '~/components/reviews/VideoModal.vue'

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
