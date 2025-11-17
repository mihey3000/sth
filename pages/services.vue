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

useHead({
  title: 'Услуги СтереоХит - Корпоративы, свадьбы, дни рождения',
  meta: [
    {
      name: 'description',
      content: 'Услуги кавер группы СтереоХит. Корпоративы, свадьбы, дни рождения. Профессиональные выступления с качественным звуком. Прозрачные цены.'
    }
  ]
})
</script>
