<template>
  <div>
    <!-- Hero секция -->
    <section class="hero-gradient section-padding text-white flex items-center">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Кавер группа в <span class="text-accent text-glow">Сургуте</span> | Заказать Стерео-Хит
            </h1>
            <p class="text-xl mb-8 text-gray-200 leading-relaxed">
              Мощная живая музыка для масштабных корпоративов и ярких свадеб в крупнейшем городе ХМАО
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button @click="callPhone" class="btn-accent text-lg px-8 py-4">
                {{ phone }}
              </button>
              <a :href="telegramLink" target="_blank" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg text-center">
                Написать в Telegram
              </a>
            </div>
          </div>
          <div class="hidden lg:block relative">
            <img :src="heroImage" alt="Стерео-Хит — кавер-группа в Сургуте" class="w-full h-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- Основной контент -->
    <div class="container-custom py-12 px-4">
      <!-- Выступления в Сургуте -->
      <section class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Корпоративы нефтяных компаний в Сургуте</h2>
          <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <p class="text-lg text-gray-700 leading-relaxed">
              Сургут — признанная столица нефтяной индустрии ХМАО. Здесь находится штаб-квартира ПАО «Сургутнефтегаз» и десятки крупнейших профильных предприятий. 
              <br><br>
              Кавер группа <span class="font-semibold text-primary">"Стерео-Хит"</span> отлично понимает корпоративную культуру нефтяников. Мы адаптируем наши музыкальные программы под серьезную деловую аудиторию, создавая идеальный баланс между торжественной официальной частью и зажигательным отдыхом.
            </p>
          </div>
          
          <div class="bg-primary text-white p-8 rounded-2xl shadow-xl card-hover">
            <h3 class="text-2xl font-bold mb-8">Связаться с нами</h3>
            <div class="space-y-6">
              <div class="flex items-center group">
                <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent transition-colors">
                  <svg class="w-6 h-6 text-white group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white/60 text-sm">Телефон</p>
                  <a :href="phoneLink" class="text-xl font-bold hover:text-accent transition-colors">{{ phone }}</a>
                </div>
              </div>
              
              <div class="flex items-center group">
                <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent transition-colors">
                  <svg class="w-6 h-6 text-white group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.28 7.06c.1.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white/60 text-sm">Telegram</p>
                  <a :href="telegramLink" target="_blank" class="text-xl font-bold hover:text-accent transition-colors">@SergFroloff</a>
                </div>
              </div>

              <div class="flex items-center group">
                <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent transition-colors">
                  <svg class="w-6 h-6 text-white group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white/60 text-sm">Email</p>
                  <a :href="emailLink" class="text-xl font-bold hover:text-accent transition-colors">{{ email }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Услуги -->
      <section class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги в Сургуте</h2>
          <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="service in services" :key="service.title" class="bg-white p-8 rounded-2xl shadow-lg text-center card-hover border border-gray-50">
            <div class="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Особенности -->
      <section class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Масштаб и профессионализм</h2>
          <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <p class="text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            Крупнейший город округа требует соответствующего размаха. Мы обеспечиваем плотное, качественное звучание даже в самых больших банкетных залах Сургута. Наша команда работает четко по таймингу, согласованному с организаторами.
          </p>
          
          <div class="grid md:grid-cols-2 gap-12">
            <div class="bg-gray-50 p-8 rounded-2xl">
              <h3 class="text-2xl font-bold mb-6 flex items-center text-gray-900">
                <span class="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center mr-4 text-lg">♫</span>
                Репертуар для Сургута
              </h3>
              <ul class="space-y-4">
                <li v-for="item in repertoireItems" :key="item" class="flex items-center text-gray-700 font-medium">
                  <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  {{ item }}
                </li>
              </ul>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-2xl">
              <h3 class="text-2xl font-bold mb-6 flex items-center text-gray-900">
                <span class="w-10 h-10 bg-accent text-primary rounded-lg flex items-center justify-center mr-4 text-lg">★</span>
                Наши преимущества
              </h3>
              <ul class="space-y-4">
                <li v-for="item in advantages" :key="item" class="flex items-center text-gray-700 font-medium">
                  <div class="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Отзывы -->
      <section class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов из Сургута</h2>
          <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="review in reviews" :key="review.name" class="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 card-hover">
            <div class="flex items-center mb-6">
              <div class="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-inner">
                {{ review.name.charAt(0) }}
              </div>
              <div>
                <h3 class="font-bold text-gray-900 leading-tight">{{ review.name }}</h3>
                <p class="text-sm text-primary font-medium">{{ review.role }}</p>
              </div>
            </div>
            <p class="text-gray-700 italic leading-relaxed">"{{ review.text }}"</p>
            <div class="mt-6 flex text-accent">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- CTA секция -->
    <section class="hero-gradient text-white section-padding">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Планируете масштабное событие в Сургуте?</h2>
        <p class="text-xl mb-10 text-gray-200 max-w-2xl mx-auto">Забронируйте дату заранее, чтобы гарантировать лучшее музыкальное шоу для ваших гостей.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <button @click="callPhone" class="btn-accent text-lg px-10 py-4">
            {{ phone }}
          </button>
          <a :href="telegramLink" target="_blank" class="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg text-center">
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import useContacts from "~/composables/contacts/useContacts"
import heroImage from 'assets/img/hero.png'

const { phone, phoneLink, telegramLink, email, emailLink, callPhone } = useContacts()

const services = [
  { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: 'Масштабные корпоративы', desc: 'День нефтяника, юбилеи компаний, профессиональные праздники' },
  { icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8', title: 'Большие свадьбы', desc: 'Драйвовая музыкальная программа для торжеств любого размаха' },
  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', title: 'Городские фестивали', desc: 'Выступления на открытых площадках и массовых гуляниях' },
  { icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.703 2.703 0 00-3 0 2.703 2.703 0 01-3 0 2.703 2.703 0 00-3 0 2.704 2.704 0 01-1.5-.454M21 12.742C21 16.481 18 19 12 19s-9-2.519-9-6.258V4.277c.523 0 1.046.151 1.5.454a2.704 2.704 0 013 0 2.703 2.703 0 003 0 2.703 2.703 0 013 0 2.703 2.703 0 003 0 2.704 2.704 0 011.5-.454V12.742z', title: 'Юбилеи', desc: 'Яркие музыкальные подарки для именинников и их гостей' }
]

const repertoireItems = [
  'Проверенные хиты для деловой аудитории',
  'Зажигательная современная поп-музыка',
  'Золотая коллекция русского рока'
]

const advantages = [
  'Понимание специфики нефтяных компаний',
  'Официальный договор и закрывающая документация',
  'Мощный звук для больших банкетных залов'
]

const reviews = [
  { name: 'Дмитрий С.', role: 'HR-директор', text: 'Приглашали Стерео-Хит на корпоратив компании в Сургуте. Ребята отработали на 200%! Завели зал с первой песни, отличный звук и подача. Руководство осталось довольно.' },
  { name: 'Екатерина', role: 'Невеста', text: 'Искали кавер-группу на свадьбу в Сургуте, остановили выбор на Стерео-Хит и ни разу не пожалели! Гости не уходили с танцпола, энергетика просто бешеная!' }
]

useSeoMeta({
  title: 'Кавер группа Сургут | Заказать Стерео-Хит на корпоратив и свадьбу',
  description: 'Кавер группа Стерео-Хит в Сургуте. Профессиональная живая музыка для масштабных корпоративов нефтяных компаний, свадеб и юбилеев. Мощный звук и драйв.',
  keywords: 'кавер группа Сургут, живая музыка Сургут, музыканты на праздник Сургут, корпоратив Сургутнефтегаз, свадьба Сургут'
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'MusicEvent',
  'name': 'Выступления кавер группы Стерео-Хит в Сургуте',
  'location': {
    '@type': 'Place',
    'name': 'Сургут, ХМАО-Югра',
    'address': 'Сургут, Ханты-Мансийский автономный округ'
  },
  'performer': {
    '@type': 'MusicGroup',
    'name': 'Стерео-Хит',
    'description': 'Живая музыка для масштабных корпоративов и свадеб',
    'areaServed': 'Сургут, ХМАО-Югра'
  }
})
</script>