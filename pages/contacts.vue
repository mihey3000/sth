<template>
  <div>
    <ContactsHero />
    <section class="section-padding">
      <div class="container-custom">
        <ContactInfo />
        <div v-if="false" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
        </div>
      </div>
    </section>
    <FAQSection />
    <ContactsCTA v-if="false" />
  </div>
</template>

<script setup>
// Импорты компонентов страницы контактов
import ContactsHero from '~/components/contacts/ContactsHero.vue'
import ContactInfo from '~/components/contacts/ContactInfo.vue'
import ContactForm from '~/components/contacts/ContactForm.vue'
import FAQSection from '~/components/contacts/FAQSection.vue'
import ContactsCTA from '~/components/contacts/ContactsCTA.vue'

// SEO
const url = useRequestURL()

useSeoMeta({
  title: 'Контакты Стерео-Хит - Заказать выступление кавер группы',
  description: 'Контакты кавер группы Стерео-Хит. Телефон, email, форма заказа выступления. Корпоративы, свадьбы, дни рождения в Москве.',
  ogTitle: 'Контакты Стерео-Хит - Заказать выступление кавер группы',
  ogDescription: 'Контакты кавер группы Стерео-Хит. Телефон, email, форма заказа выступления. Корпоративы, свадьбы, дни рождения в Москве.',
  ogType: 'website',
  ogUrl: url.href,
  twitterCard: 'summary',
  twitterTitle: 'Контакты Стерео-Хит - Заказать выступление кавер группы',
  twitterDescription: 'Контакты кавер группы Стерео-Хит. Телефон, email, форма заказа выступления. Корпоративы, свадьбы, дни рождения в Москве.'
})

useHead({
  link: [
    { rel: 'canonical', href: url.href }
  ]
})
</script>
