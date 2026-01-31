<template>
  <div>
    <GalleryHero />
    <GalleryFilters :categories="categories" v-model:selected-category="selectedCategory" />
    <GalleryGrid :filtered-gallery="filteredGallery" :has-more-items="hasMoreItems" @open-lightbox="openLightbox"
      @load-more="loadMore" />

    <LightboxModal :is-open="lightboxOpen" :current-item="currentLightboxItem" :has-prev="hasPrevItem"
      :has-next="hasNextItem" @close="closeLightbox" @prev="showPrevItem" @next="showNextItem" />
    <template v-if="false">
      <VideoTestimonials :video-testimonials="videoTestimonials" />
      <GalleryCTA />
    </template>
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
import galleryManifest from '~/data/gallery-manifest.json'

// SEO
useHead({
  title: 'Галерея Стерео-Хит - Фото и видео наших выступлений',
  meta: [
    {
      name: 'description',
      content: 'Галерея кавер группы Стерео-Хит. Фото и видео с корпоративов, свадеб, дней рождения. Видео отзывы клиентов и портфолио выступлений.'
    }
  ]
})

// Реактивные данные
const selectedCategory = ref('Все')
const lightboxOpen = ref(false)
const currentLightboxIndex = ref(0)
const itemsPerLoad = 9
const loadedItems = ref(itemsPerLoad)
const galleryItems = computed(() => galleryManifest ?? [])
const videoTestimonials = ref([])

const MANUAL_CATEGORY_ORDER = [
  '2025',
  '07.03.2024',
  '17.05 White party',
  '2024.12.27_Уч-Кудук №3',
  'Белоярский ДР Тани',
  'Выпускной 2024',
  'НГ'
]

const parseCategoryTimestamp = (category) => {
  if (!category) {
    return 0
  }

  const isoMatch = category.match(/(\d{4})[.\-_](\d{2})[.\-_](\d{2})/)
  if (isoMatch) {
    const [, year, month, day] = isoMatch
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime()
  }

  const ruMatch = category.match(/(\d{2})[.\-_](\d{2})[.\-_](\d{4})/)
  if (ruMatch) {
    const [, day, month, year] = ruMatch
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime()
  }

  const yearMatch = category.match(/(19|20)\d{2}/)
  if (yearMatch) {
    return new Date(Number(yearMatch[0]), 0, 1).getTime()
  }

  return 0
}

const parseItemTimestamp = (item) => {
  if (!item) {
    return 0
  }
  return parseCategoryTimestamp(item.date || item.category)
}

// Категории для фильтрации
const categories = computed(() => {
  const uniqueCategories = new Set(
    galleryItems.value.map((item) => item.category).filter(Boolean)
  )

  const baseCategories = Array.from(uniqueCategories)
  const manualCategories = MANUAL_CATEGORY_ORDER.filter((category) =>
    baseCategories.includes(category)
  )
  const remainingCategories = baseCategories.filter(
    (category) => !manualCategories.includes(category)
  )
  const sortedRemaining = remainingCategories.sort((a, b) => {
    const diff = parseCategoryTimestamp(b) - parseCategoryTimestamp(a)
    if (diff) {
      return diff
    }
    return a.localeCompare(b, 'ru')
  })

  return ['Все', ...manualCategories, ...sortedRemaining]
})

// Вычисляемые свойства
const filteredGallery = computed(() => {
  let filtered = galleryItems.value

  if (selectedCategory.value && selectedCategory.value !== 'Все') {
    filtered = filtered.filter(item => item.category === selectedCategory.value)
  }

  if (selectedCategory.value === 'Все') {
    filtered = [...filtered].sort((a, b) => parseItemTimestamp(b) - parseItemTimestamp(a))
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

const hasPrevItem = computed(() => filteredGallery.value.length > 1)
const hasNextItem = computed(() => filteredGallery.value.length > 1)

// Методы
const openLightbox = (index) => {
  currentLightboxIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const showPrevItem = () => {
  const total = filteredGallery.value.length
  if (!total) {
    return
  }

  currentLightboxIndex.value = (currentLightboxIndex.value - 1 + total) % total
}

const showNextItem = () => {
  const total = filteredGallery.value.length
  if (!total) {
    return
  }

  currentLightboxIndex.value = (currentLightboxIndex.value + 1) % total
}

const loadMore = () => {
  loadedItems.value += itemsPerLoad
}

// Сброс загруженных элементов при изменении фильтра
watch(selectedCategory, () => {
  loadedItems.value = itemsPerLoad
})
</script>
