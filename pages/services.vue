<template>
  <div>
    <ServicesHero/>
    <CorporateSection/>
    <WeddingSection/>
    <BirthdaySection/>
    <PricingSection v-if="false"/>
    <ServicesCTA/>
  </div>
</template>

<script setup>
// Импорты компонентов услуг
import ServicesHero from '~/components/services/ServicesHero.vue'
import CorporateSection from '~/components/services/CorporateSection.vue'
import WeddingSection from '~/components/services/WeddingSection.vue'
import BirthdaySection from '~/components/services/BirthdaySection.vue'
import PricingSection from '~/components/services/PricingSection.vue'
import ServicesCTA from '~/components/services/ServicesCTA.vue'

const url = useRequestURL()

useSeoMeta({
  title: 'Услуги Стерео-Хит - Корпоративы, свадьбы, дни рождения',
  description: 'Услуги кавер группы Стерео-Хит. Корпоративы, свадьбы, дни рождения. Профессиональные выступления с качественным звуком. Прозрачные цены.',
  ogTitle: 'Услуги Стерео-Хит - Корпоративы, свадьбы, дни рождения',
  ogDescription: 'Услуги кавер группы Стерео-Хит. Корпоративы, свадьбы, дни рождения. Профессиональные выступления с качественным звуком. Прозрачные цены.',
  ogType: 'website',
  ogUrl: url.href,
  twitterCard: 'summary',
  twitterTitle: 'Услуги Стерео-Хит - Корпоративы, свадьбы, дни рождения',
  twitterDescription: 'Услуги кавер группы Стерео-Хит. Корпоративы, свадьбы, дни рождения. Профессиональные выступления с качественным звуком. Прозрачные цены.'
})

useHead({
  link: [
    { rel: 'canonical', href: url.href }
  ]
})
</script>
