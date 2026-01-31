<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="max-w-2xl mx-auto text-center bg-white shadow-lg rounded-2xl px-8 py-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Сообщение успешно отправлено</h1>
        <p class="text-lg text-gray-600 mb-8">
          Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время и уточним все детали.
        </p>
        <NuxtLink to="/" class="btn-primary inline-flex items-center justify-center">
          Вернуться на главную
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const url = useRequestURL()

useSeoMeta({
  title: 'Спасибо за обращение — Стерео-Хит',
  description: 'Сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время и уточним все детали.',
  ogTitle: 'Спасибо за обращение — Стерео-Хит',
  ogDescription: 'Сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время и уточним все детали.',
  ogType: 'website',
  ogUrl: url.href,
  twitterCard: 'summary',
  twitterTitle: 'Спасибо за обращение — Стерео-Хит',
  twitterDescription: 'Сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время и уточним все детали.'
})

useHead({
  link: [
    { rel: 'canonical', href: url.href }
  ]
})

definePageMeta({
  title: 'Спасибо за обращение — Стерео-хит'
})
</script>

