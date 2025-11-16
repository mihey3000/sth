<template>
  <section class="hero-gradient section-padding text-white flex items-center">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Создаем незабываемые
            <span class="text-accent text-glow">моменты</span>
            через музыку
          </h1>
          <p class="text-xl mb-8 text-gray-200 leading-relaxed">
            Помните тот момент, когда музыка заставила ваше
            сердце биться в такт? Когда все вокруг замерли,
            затаив дыхание, а вы почувствовали, что живете?
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button v-if="false" class="btn-accent text-lg px-8 py-4">
              Заказать выступление
            </button>
            <button v-if="false"
                    class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg">
              Посмотреть репертуар
            </button>
            <button @click="callPhone"
                    class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg">
              {{ phone }}
            </button>
          </div>
        </div>
        <div class="relative">
          <img :src="heroImage2" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useContacts from "~/composables/contacts/useContacts";
import heroImage2 from 'assets/img/hero.png'

const {callPhone, phone} = useContacts()
</script>
