import { computed, ref, watch } from 'vue'

interface RepertoireSong {
  id: number
  title: string
  artist: string
  genre: string | null
  decade: string | null
  language: string | null
  popular: boolean
}

const FORM_ENDPOINT = 'https://formspree.io/f/xblqpopb'
const ITEMS_PER_PAGE = 12

export const useRepertoire = () => {
  const showFilters = ref(false)
  const searchQuery = ref('')
  const selectedGenre = ref<string | null>(null)
  const currentPage = ref(1)
  const newSongRequest = ref('')
  const isSubmittingRequest = ref(false)
  const submissionMessage = ref('')
  const submissionVariant = ref<'success' | 'error' | ''>('')

  const genres = ['Поп', 'Рок', 'Джаз', 'Ретро', 'Классика', 'Современная', 'Русская', 'Зарубежная']

  const songs = ref<RepertoireSong[]>([
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
    {id: 39, title: 'Ты – музыкант', artist: 'Стерео-хит', genre: null, decade: null, language: null, popular: false}
  ])

  const filteredSongs = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    const genre = selectedGenre.value

    return songs.value.filter((song) => {
      const matchesQuery =
        !query ||
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query)

      const matchesGenre = !genre || song.genre === genre
      return matchesQuery && matchesGenre
    })
  })

  const uniqueArtists = computed(() => new Set(filteredSongs.value.map(song => song.artist)).size)
  const uniqueGenres = computed(() => new Set(filteredSongs.value.map(song => song.genre)).size)
  const uniqueDecades = computed(() => new Set(filteredSongs.value.map(song => song.decade)).size)

  const totalPages = computed(() => Math.ceil(filteredSongs.value.length / ITEMS_PER_PAGE))

  const paginatedSongs = computed(() => {
    const start = (currentPage.value - 1) * ITEMS_PER_PAGE
    const end = start + ITEMS_PER_PAGE
    return filteredSongs.value.slice(start, end)
  })

  const visiblePages = computed(() => {
    const total = totalPages.value
    if (!total) {
      return []
    }
    if (total <= 7) {
      return Array.from({length: total}, (_, index) => index + 1)
    }
    const current = currentPage.value
    if (current <= 4) {
      return [...Array.from({length: 5}, (_, index) => index + 1), '...', total]
    }
    if (current >= total - 3) {
      const tailStart = total - 4
      return [1, '...', ...Array.from({length: 5}, (_, index) => tailStart + index)]
    }
    return [1, '...', current - 1, current, current + 1, '...', total]
  })

  watch([searchQuery, selectedGenre], () => {
    currentPage.value = 1
  })

  const handleSongRequest = async (songRequest: string) => {
    const requestText = songRequest.trim()
    if (!requestText) {
      submissionVariant.value = 'error'
      submissionMessage.value = 'Пожалуйста, введите название песни и исполнителя.'
      return
    }

    console.debug('Отправляем запрос новой песни', { requestText })
    submissionMessage.value = ''
    submissionVariant.value = ''
    isSubmittingRequest.value = true

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          songRequest: requestText,
          source: 'stereo-hit repertoire page'
        })
      })

      console.debug('Ответ Formspree получен', { status: response.status })

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => null)
        console.debug('Formspree вернул ошибку', errorPayload)
        submissionVariant.value = 'error'
        submissionMessage.value = 'Не удалось отправить запрос. Попробуйте позже.'
        return
      }

      submissionVariant.value = 'success'
      submissionMessage.value = 'Спасибо! Мы получили ваш запрос.'
      newSongRequest.value = ''
    } catch (error) {
      console.debug('Исключение при отправке в Formspree', error)
      submissionVariant.value = 'error'
      submissionMessage.value = 'Возникла ошибка при отправке. Попробуйте позже.'
    } finally {
      isSubmittingRequest.value = false
    }
  }

  return {
    showFilters,
    searchQuery,
    selectedGenre,
    currentPage,
    genres,
    songs,
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
  }
}

