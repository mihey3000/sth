<template>
  <div>
    <GalleryHero/>
    <GalleryFilters :categories="categories" v-model:selected-category="selectedCategory"/>
    <GalleryGrid :filtered-gallery="filteredGallery" :has-more-items="hasMoreItems" @open-lightbox="openLightbox"
                 @load-more="loadMore"/>

    <LightboxModal
        :is-open="lightboxOpen"
        :current-item="currentLightboxItem"
        :has-prev="hasPrevItem"
        :has-next="hasNextItem"
        @close="closeLightbox"
        @prev="showPrevItem"
        @next="showNextItem"
    />
    <template v-if="false">
      <VideoTestimonials :video-testimonials="videoTestimonials"/>
      <GalleryCTA/>
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

// Категории для фильтрации
const categories = computed(() => {
  const uniqueCategories = new Set(
      galleryItems.value.map((item) => item.category).filter(Boolean)
  )

  return ['Все', ...Array.from(uniqueCategories).sort((a, b) => a.localeCompare(b, 'ru'))]
})

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
