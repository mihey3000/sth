<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1">
          <div class="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <span class="text-gray-500 text-lg">Фото со свадьбы</span>
          </div>
        </div>
        <div class="order-1 lg:order-2">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Свадьбы</h2>
          <p class="text-lg text-gray-600 mb-6">
            Ваш самый важный день заслуживает самой важной музыки!
          </p>
          <p class="text-lg text-gray-600 mb-6">
            Первый танец молодоженов под любимую песню, когда весь зал замирает от красоты момента.
            Гости, которые не могут усидеть на месте, потому что музыка зовет их на танцпол.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            <strong>СтереоХит</strong> - это не просто музыкальное сопровождение, это создатели магии
            вашего дня.
            Мы знаем, как сделать так, чтобы через 20 лет вы с улыбкой вспоминали каждую песню с вашей
            свадьбы.
          </p>
          <div class="space-y-3">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
              <span>Специальный репертуар для свадебных церемоний</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
              <span>Первый танец молодоженов</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
              <span>Танцевальная программа для гостей</span>
            </div>
          </div>
          <div class="mt-8">
            <button @click="callPhone" class="btn-primary text-lg px-8 py-4">
              Заказать на свадьбу
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import useContacts from "~/composables/contacts/useContacts";

const {callPhone} = useContacts()
</script>