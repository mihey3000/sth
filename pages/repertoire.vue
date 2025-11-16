<template>
  <div>
    <RepertoireHero/>
    <SearchFilters v-model:search-query="searchQuery" v-model:selected-genre="selectedGenre" :genres="genres"
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
  {
    id: 1,
    title: 'Виновата ли я',
    artist: 'Алла Пугачева',
    genre: 'Поп',
    decade: '80е',
    language: 'Русский',
    popular: true
  },
  {
    id: 2,
    title: 'Миллион алых роз',
    artist: 'Алла Пугачева',
    genre: 'Поп',
    decade: '80е',
    language: 'Русский',
    popular: true
  },
  {
    id: 3,
    title: 'Земля в иллюминаторе',
    artist: 'ВИА "Земляне"',
    genre: 'Поп',
    decade: '80е',
    language: 'Русский',
    popular: true
  },
  {id: 4, title: 'Кукушка', artist: 'Виктор Цой', genre: 'Рок', decade: '80е', language: 'Русский', popular: true},
  {id: 5, title: 'Группа крови', artist: 'Виктор Цой', genre: 'Рок', decade: '80е', language: 'Русский', popular: true},
  {
    id: 6,
    title: 'Звезда по имени Солнце',
    artist: 'Виктор Цой',
    genre: 'Рок',
    decade: '80е',
    language: 'Русский',
    popular: true
  },
  {id: 7, title: 'На заре', artist: 'Альянс', genre: 'Поп', decade: '80е', language: 'Русский', popular: false},
  {id: 8, title: 'Спокойной ночи', artist: 'Альянс', genre: 'Поп', decade: '80е', language: 'Русский', popular: false},

  // Зарубежные хиты
  {
    id: 9,
    title: 'Hotel California',
    artist: 'Eagles',
    genre: 'Рок',
    decade: '70е',
    language: 'Английский',
    popular: true
  },
  {
    id: 10,
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    genre: 'Рок',
    decade: '70е',
    language: 'Английский',
    popular: true
  },
  {id: 11, title: 'Imagine', artist: 'John Lennon', genre: 'Поп', decade: '70е', language: 'Английский', popular: true},
  {
    id: 12,
    title: 'Yesterday',
    artist: 'The Beatles',
    genre: 'Поп',
    decade: '60е',
    language: 'Английский',
    popular: true
  },
  {
    id: 13,
    title: 'Sweet Child O\' Mine',
    artist: 'Guns N\' Roses',
    genre: 'Рок',
    decade: '80е',
    language: 'Английский',
    popular: true
  },
  {id: 14, title: 'Wonderwall', artist: 'Oasis', genre: 'Рок', decade: '90е', language: 'Английский', popular: true},
  {
    id: 15,
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    genre: 'Рок',
    decade: '90е',
    language: 'Английский',
    popular: true
  },
  {
    id: 16,
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    genre: 'Поп',
    decade: '80е',
    language: 'Английский',
    popular: true
  },

  // Джаз
  {
    id: 17,
    title: 'Take Five',
    artist: 'Dave Brubeck',
    genre: 'Джаз',
    decade: '60е',
    language: 'Инструментальная',
    popular: false
  },
  {
    id: 18,
    title: 'Blue Moon',
    artist: 'Frank Sinatra',
    genre: 'Джаз',
    decade: '50е',
    language: 'Английский',
    popular: false
  },
  {
    id: 19,
    title: 'Summertime',
    artist: 'Ella Fitzgerald',
    genre: 'Джаз',
    decade: '50е',
    language: 'Английский',
    popular: false
  },
  {
    id: 20,
    title: 'Fly Me to the Moon',
    artist: 'Frank Sinatra',
    genre: 'Джаз',
    decade: '60е',
    language: 'Английский',
    popular: false
  },

  // Современная музыка
  {
    id: 21,
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    genre: 'Поп',
    decade: '2010е',
    language: 'Английский',
    popular: true
  },
  {
    id: 22,
    title: 'Despacito',
    artist: 'Luis Fonsi',
    genre: 'Поп',
    decade: '2010е',
    language: 'Испанский',
    popular: true
  },
  {
    id: 23,
    title: 'Perfect',
    artist: 'Ed Sheeran',
    genre: 'Поп',
    decade: '2010е',
    language: 'Английский',
    popular: true
  },
  {
    id: 24,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    genre: 'Поп',
    decade: '2020е',
    language: 'Английский',
    popular: true
  },

  // Классика
  {
    id: 25,
    title: 'Can\'t Help Myself',
    artist: 'Four Tops',
    genre: 'Ретро',
    decade: '60е',
    language: 'Английский',
    popular: false
  },
  {
    id: 26,
    title: 'My Girl',
    artist: 'The Temptations',
    genre: 'Ретро',
    decade: '60е',
    language: 'Английский',
    popular: false
  },
  {
    id: 27,
    title: 'Stand by Me',
    artist: 'Ben E. King',
    genre: 'Ретро',
    decade: '60е',
    language: 'Английский',
    popular: true
  },
  {
    id: 28,
    title: 'Unchained Melody',
    artist: 'The Righteous Brothers',
    genre: 'Ретро',
    decade: '60е',
    language: 'Английский',
    popular: true
  },
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
