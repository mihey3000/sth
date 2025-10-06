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

useHead({
    title: 'О группе СтереоХит - Наша команда и история',
    meta: [
        { name: 'description', content: 'Познакомьтесь с командой СтереоХит. Наша история, участники группы и достижения. Профессиональные музыканты с многолетним опытом.' }
    ]
})
</script>
