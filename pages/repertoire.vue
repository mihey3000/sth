<template>
  <div>
    <RepertoireHero/>
    <SearchFilters v-if="showFilters" v-model:search-query="searchQuery" v-model:selected-genre="selectedGenre"
                   :genres="genres"
                   :filtered-songs-count="filteredSongs.length" :unique-artists="uniqueArtists"
                   :unique-genres="uniqueGenres"
                   :unique-decades="uniqueDecades"/>
    <SongsGrid :paginated-songs="paginatedSongs" :current-page="currentPage" :total-pages="totalPages"
               :visible-pages="visiblePages" @update:current-page="currentPage = $event"/>
    <SongRequest v-model:new-song-request="newSongRequest" @submit-request="handleSongRequest"
                 :is-submitting="isSubmittingRequest" :submission-message="submissionMessage"
                 :submission-variant="submissionVariant"/>
    <RepertoireCTA/>
  </div>
</template>

<script setup>
// Импорты компонентов репертуара
import RepertoireHero from '~/components/repertoire/RepertoireHero.vue'
import SearchFilters from '~/components/repertoire/SearchFilters.vue'
import SongsGrid from '~/components/repertoire/SongsGrid.vue'
import SongRequest from '~/components/repertoire/SongRequest.vue'
import RepertoireCTA from '~/components/repertoire/RepertoireCTA.vue'

// SEO
const url = useRequestURL()

useSeoMeta({
  title: 'Репертуар Стерео-Хит - Более 100 песен для вашего мероприятия',
  description: 'Репертуар кавер группы Стерео-Хит. Более 100 песен: русские хиты, зарубежная музыка, классика, современные треки. Поиск по жанрам и исполнителям.',
  ogTitle: 'Репертуар Стерео-Хит - Более 100 песен для вашего мероприятия',
  ogDescription: 'Репертуар кавер группы Стерео-Хит. Более 100 песен: русские хиты, зарубежная музыка, классика, современные треки. Поиск по жанрам и исполнителям.',
  ogType: 'website',
  ogUrl: url.href,
  twitterCard: 'summary',
  twitterTitle: 'Репертуар Стерео-Хит - Более 100 песен для вашего мероприятия',
  twitterDescription: 'Репертуар кавер группы Стерео-Хит. Более 100 песен: русские хиты, зарубежная музыка, классика, современные треки. Поиск по жанрам и исполнителям.'
})

useHead({
  link: [
    { rel: 'canonical', href: url.href }
  ]
})

const {
  showFilters,
  searchQuery,
  selectedGenre,
  currentPage,
  genres,
  filteredSongs,
  uniqueArtists,
  uniqueGenres,
  uniqueDecades,
  totalPages,
  paginatedSongs,
  visiblePages,
  newSongRequest,
  isSubmittingRequest,
  submissionMessage,
  submissionVariant,
  handleSongRequest
} = useRepertoire()
</script>
