<template>
    <div>
        <GalleryHero />
        <GalleryFilters :categories="categories" v-model:selected-category="selectedCategory" />
        <GalleryGrid :filtered-gallery="filteredGallery" :has-more-items="hasMoreItems" @open-lightbox="openLightbox"
            @load-more="loadMore" />
        <VideoTestimonials :video-testimonials="videoTestimonials" />
        <GalleryCTA />
        <LightboxModal :is-open="lightboxOpen" :current-item="currentLightboxItem" @close="closeLightbox" />
    </div>
</template>

<script setup>
// Импорты компонентов галереи
import GalleryHero from '~/components/gallery/GalleryHero.vue'
import GalleryFilters from '~/components/gallery/GalleryFilters.vue'
import GalleryGrid from '~/components/gallery/GalleryGrid.vue'
import VideoTestimonials from '~/components/gallery/VideoTestimonials.vue'
import GalleryCTA from '~/components/gallery/GalleryCTA.vue'
import LightboxModal from '~/components/gallery/LightboxModal.vue'

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
