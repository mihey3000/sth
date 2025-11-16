<template>
  <div>
    <RepertoireHero/>
    <SearchFilters v-if="showFilters" v-model:search-query="searchQuery" v-model:selected-genre="selectedGenre" :genres="genres"
                   :filtered-songs-count="filteredSongs.length" :unique-artists="uniqueArtists"
                   :unique-genres="uniqueGenres"
                   :unique-decades="uniqueDecades"/>
    <SongsGrid :paginated-songs="paginatedSongs" :current-page="currentPage" :total-pages="totalPages"
               :visible-pages="visiblePages" @update:current-page="currentPage = $event"/>
    <SongRequest v-model:new-song-request="newSongRequest" @submit-request="handleSongRequest"/>
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
useHead({
  title: 'Репертуар СтереоХит - Более 100 песен для вашего мероприятия',
  meta: [
    {
      name: 'description',
      content: 'Репертуар кавер группы СтереоХит. Более 100 песен: русские хиты, зарубежная музыка, классика, современные треки. Поиск по жанрам и исполнителям.'
    }
  ]
})

// Реактивные данные
const showFilters = ref(false)
const searchQuery = ref('')
const selectedGenre = ref(null)
const currentPage = ref(1)
const itemsPerPage = 12
const newSongRequest = ref('')

// Жанры для фильтрации
const genres = ['Поп', 'Рок', 'Джаз', 'Ретро', 'Классика', 'Современная', 'Русская', 'Зарубежная']

// Пример данных песен
const songs = ref([
  {id: 1, title: 'Шелк', artist: 'Ваня Дмитриенко', genre: null, decade: null, language: null, popular: false},
  {id: 2, title: 'Чудная Долина', artist: 'Mr. Credo', genre: null, decade: null, language: null, popular: false},
  {id: 3, title: 'Седая ночь', artist: 'Ю. Шатунов', genre: null, decade: null, language: null, popular: false},
  {id: 4, title: 'Кухни', artist: 'Бонд с кнопкой', genre: null, decade: null, language: null, popular: false},
  {id: 5, title: 'Ай-яй-яй', artist: 'Руки Вверх', genre: null, decade: null, language: null, popular: false},
  {id: 6, title: 'Привет', artist: 'Женя Трофимов', genre: null, decade: null, language: null, popular: false},
  {id: 7, title: 'Кукла колдуна', artist: 'Король и Шут', genre: null, decade: null, language: null, popular: false},
  {id: 8, title: 'Земля в иллюминаторе', artist: 'Земляне', genre: null, decade: null, language: null, popular: false},
  {id: 9, title: 'Поезда', artist: 'Женя Трофимов', genre: null, decade: null, language: null, popular: false},
  {id: 10, title: 'Как на войне', artist: 'Агата Кристи', genre: null, decade: null, language: null, popular: false},
  {id: 11, title: 'It’s my life', artist: 'Bon Jovi', genre: null, decade: null, language: null, popular: false},
  {id: 12, title: '18 мне уже', artist: 'Руки Вверх', genre: null, decade: null, language: null, popular: false},
  {id: 13, title: 'Знаешь', artist: 'Rozhden', genre: null, decade: null, language: null, popular: false},
  {id: 14, title: 'Белые розы', artist: 'Ю. Шатунов', genre: null, decade: null, language: null, popular: false},
  {id: 15, title: 'Группа крови', artist: 'В. Цой', genre: null, decade: null, language: null, popular: false},
  {id: 16, title: 'Лесник', artist: 'Король и Шут', genre: null, decade: null, language: null, popular: false},
  {id: 17, title: 'Районы-кварталы', artist: 'Звери', genre: null, decade: null, language: null, popular: false},
  {id: 18, title: 'Тополиный пух', artist: 'Иванушки International', genre: null, decade: null, language: null, popular: false},
  {id: 19, title: 'Пожары', artist: 'Xolidayboy', genre: null, decade: null, language: null, popular: false},
  {id: 20, title: 'Если тебе будет грустно', artist: 'Niletto', genre: null, decade: null, language: null, popular: false},
  {id: 21, title: 'Просто такая сильная любовь', artist: 'Звери', genre: null, decade: null, language: null, popular: false},
  {id: 22, title: 'Раневская', artist: 'Akmal', genre: null, decade: null, language: null, popular: false},
  {id: 23, title: 'Бабушка курит трубку', artist: 'Гарик Сукачев', genre: null, decade: null, language: null, popular: false},
  {id: 24, title: 'Сансара', artist: 'Баста', genre: null, decade: null, language: null, popular: false},
  {id: 25, title: 'Лететь', artist: 'Амега', genre: null, decade: null, language: null, popular: false},
  {id: 26, title: 'Ночь', artist: 'А. Губин', genre: null, decade: null, language: null, popular: false},
  {id: 27, title: 'По барам', artist: 'Anna Asti', genre: null, decade: null, language: null, popular: false},
  {id: 28, title: 'Tutti Frutti', artist: 'Little Richard', genre: null, decade: null, language: null, popular: false},
  {id: 29, title: 'Женщина воздух', artist: 'Сергей Куренков', genre: null, decade: null, language: null, popular: false},
  {id: 30, title: 'Есть только миг', artist: 'Олег Анофриев', genre: null, decade: null, language: null, popular: false},
  {id: 31, title: 'Медлячок', artist: 'Баста', genre: null, decade: null, language: null, popular: false},
  {id: 32, title: 'Пусть она поет', artist: 'Женя Трофимов', genre: null, decade: null, language: null, popular: false},
  {id: 33, title: 'Седьмой лепесток', artist: 'Антон Токарев', genre: null, decade: null, language: null, popular: false},
  {id: 34, title: 'Птичка', artist: 'HammAli & Navai', genre: null, decade: null, language: null, popular: false},
  {id: 35, title: 'Как быть', artist: 'Bittuev, Nansi & Sidorov', genre: null, decade: null, language: null, popular: false},
  {id: 36, title: 'Девушки, как звёзды', artist: 'А. Губин', genre: null, decade: null, language: null, popular: false},
  {id: 37, title: 'Новый год', artist: 'VESNA305', genre: null, decade: null, language: null, popular: false},
  {id: 38, title: 'Новая новогодняя', artist: 'VESNA305', genre: null, decade: null, language: null, popular: false},
  {id: 39, title: 'Ты – музыкант', artist: 'Стерео-хит', genre: null, decade: null, language: null, popular: false},
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

// Методы
const handleSongRequest = (songRequest) => {
  // Здесь будет логика обработки запроса новой песни
  console.log('Запрос новой песни:', songRequest)
  // Можно добавить отправку на сервер или показ уведомления
  alert(`Спасибо! Мы рассмотрим ваш запрос на песню: "${songRequest}"`)
  newSongRequest.value = ''
}

// Сброс страницы при изменении фильтров
watch([searchQuery, selectedGenre], () => {
  currentPage.value = 1
})
</script>
