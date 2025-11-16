<template>
  <section class="hero-gradient text-white section-padding">
    <div class="container-custom text-center">
      <h2 class="text-4xl font-bold mb-6">
        Хотите узнать нас лучше?
      </h2>
      <p class="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
        Посмотрите наше портфолио или свяжитесь с нами для обсуждения вашего мероприятия
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button @click="navigateTo('/repertoire')" class="btn-accent text-lg px-8 py-4">
          Посмотреть репертуар
        </button>
        <button @click="callPhone"
                class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg">
          Набрать номер телефона
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useContacts from "~/composables/contacts/useContacts";

const {callPhone} = useContacts()
</script>
