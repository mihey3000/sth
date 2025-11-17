<template>
  <section class="section-padding">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Дни рождения</h2>
          <p class="text-lg text-gray-600 mb-6">
            Юбилей - это не просто цифра, это повод для настоящего праздника!
          </p>
          <p class="text-lg text-gray-600 mb-6">
            Вспомните, как в детстве вы ждали свой день рождения целый год.
            Взрослые тоже заслуживают такого же волшебства!
          </p>
          <p class="text-lg text-gray-600 mb-6">
            <strong>СтереоХит</strong> вернет вам это детское ощущение праздника.
            Мы сыграем ваши любимые песни так, как будто они написаны специально для этого дня.
            Потому что так оно и есть - каждая песня будет звучать только для вас.
          </p>
          <div class="space-y-3">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
              <span>Персональный подбор песен для именинника</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
              <span>Музыкальные сюрпризы и поздравления</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
              <span>Интерактивные игры и конкурсы</span>
            </div>
          </div>
          <div class="mt-8">
            <button @click="callPhone" class="btn-primary text-lg px-8 py-4">
              Заказать на день рождения
            </button>
          </div>
        </div>
        <div class="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
          <span class="text-gray-500 text-lg">Фото с дня рождения</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import useContacts from "~/composables/contacts/useContacts";

const {callPhone} = useContacts()
</script>