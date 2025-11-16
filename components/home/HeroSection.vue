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
          <!-- Placeholder for hero image/video -->
          <div class="bg-gray-800 rounded-2xl p-8 text-center">
            <div
                class="w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4 flex items-center justify-center float-animation">
              <svg class="w-16 h-16 text-dark" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">СтереоХит</h3>
            <p class="text-gray-300">Кавер группа</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useContacts from "~/composables/contacts/useContacts";

const {callPhone, phone} = useContacts()
</script>
