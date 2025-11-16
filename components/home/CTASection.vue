<template>
  <section class="hero-gradient text-white section-padding">
    <div class="container-custom text-center">
      <h2 class="text-4xl font-bold mb-6">
        Готовы создать незабываемое мероприятие?
      </h2>
      <p class="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
        Свяжитесь с нами прямо сейчас, и мы обсудим все детали
        вашего мероприятия
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button v-if="false" class="btn-accent text-lg px-8 py-4">
          Заказать выступление
        </button>
        <button @click="callPhone"
                class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg">
          {{ phone }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useContacts from "~/composables/contacts/useContacts";

const {phone, phoneLink, callPhone} = useContacts()


</script>
