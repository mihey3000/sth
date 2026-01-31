<template>
  <div>
    <AboutHero />
    <HistorySection />
    <TeamSection />
    <AchievementsSection />
    <AboutCTA />
  </div>
</template>

<script setup>
// Импорты компонентов страницы О группе
import AboutHero from '~/components/about/AboutHero.vue'
import HistorySection from '~/components/about/HistorySection.vue'
import TeamSection from '~/components/about/TeamSection.vue'
import AchievementsSection from '~/components/about/AchievementsSection.vue'
import AboutCTA from '~/components/about/AboutCTA.vue'

const url = useRequestURL()

useSeoMeta({
  title: 'О группе Стерео-Хит - Наша команда и история',
  description: 'Познакомьтесь с командой Стерео-Хит. Наша история, участники группы и достижения. Профессиональные музыканты с многолетним опытом.',
  ogTitle: 'О группе Стерео-Хит - Наша команда и история',
  ogDescription: 'Познакомьтесь с командой Стерео-Хит. Наша история, участники группы и достижения. Профессиональные музыканты с многолетним опытом.',
  ogType: 'website',
  ogUrl: url.href,
  twitterCard: 'summary',
  twitterTitle: 'О группе Стерео-Хит - Наша команда и история',
  twitterDescription: 'Познакомьтесь с командой Стерео-Хит. Наша история, участники группы и достижения. Профессиональные музыканты с многолетним опытом.'
})

useHead({
  link: [
    { rel: 'canonical', href: url.href }
  ]
})
</script>
