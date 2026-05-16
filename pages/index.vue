<template>
  <div>
    <HeroSection/>
    <AboutSection/>
    <ServicesPreview/>
    <SeoContent/>
    <CTASection/>
  </div>
</template>

<script setup>
// Импорты компонентов главной страницы
import HeroSection from '~/components/home/HeroSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import ServicesPreview from '~/components/home/ServicesPreview.vue'
import SeoContent from '~/components/home/SeoContent.vue'
import CTASection from '~/components/home/CTASection.vue'

// SEO
const url = useRequestURL()

useSeoMeta({
  title: 'Кавер группа Стерео-Хит Нягань ХМАО | Свадьбы, корпоративы, праздники',
  description: 'Кавер группа Стерео-Хит из Нягани ХМАО. Местная группа для свадеб, корпоративов, праздников. Работаем с любым оборудованием. Звоните для консультации.',
  keywords: 'кавер группа, Нягань, ХМАО, свадьба, корпоратив, живая музыка, музыканты Нягань',
  ogTitle: 'Кавер группа Стерео-Хит из Нягани ХМАО',
  ogDescription: 'Местная кавер группа из Нягани. Свадьбы, корпоративы, праздники. Работаем с любым оборудованием.',
  ogImage: '/images/stereo-hit-og.jpg',
  ogType: 'website',
  ogUrl: url.href,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Кавер группа Стерео-Хит из Нягани ХМАО',
  twitterDescription: 'Местная кавер группа из Нягани. Свадьбы, корпоративы, праздники. Работаем с любым оборудованием.'
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  'name': 'Стерео-Хит',
  'description': 'Профессиональная кавер группа ХМАО-Югра',
  'areaServed': ['Нягань', 'Сургут', 'Нижневартовск', 'Ханты-Мансийск', 'ХМАО-Югра']
})

useHead({
  link: [
    {rel: 'canonical', href: url.href}
  ]
})
</script>
