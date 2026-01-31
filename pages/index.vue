<template>
  <div>
    <HeroSection/>
    <AboutSection/>
    <ServicesPreview/>
    <CTASection/>
  </div>
</template>

<script setup>
// Импорты компонентов главной страницы
import HeroSection from '~/components/home/HeroSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import ServicesPreview from '~/components/home/ServicesPreview.vue'
import CTASection from '~/components/home/CTASection.vue'

// SEO
const url = useRequestURL()

useSeoMeta({
  title: 'Стерео-Хит - Кавер группа для корпоративов, свадеб и праздников',
  description: 'Профессиональная кавер группа Стерео-Хит. Выступления на корпоративах, свадьбах, днях рождения. Качественная музыка и незабываемые эмоции.',
  ogTitle: 'Стерео-Хит - Кавер группа для корпоративов, свадеб и праздников',
  ogDescription: 'Профессиональная кавер группа Стерео-Хит. Выступления на корпоративах, свадьбах, днях рождения. Качественная музыка и незабываемые эмоции.',
  ogType: 'website',
  ogUrl: url.href,
  twitterCard: 'summary',
  twitterTitle: 'Стерео-Хит - Кавер группа для корпоративов, свадеб и праздников',
  twitterDescription: 'Профессиональная кавер группа Стерео-Хит. Выступления на корпоративах, свадьбах, днях рождения. Качественная музыка и незабываемые эмоции.'
})

useHead({
  link: [
    { rel: 'canonical', href: url.href }
  ]
})
</script>
