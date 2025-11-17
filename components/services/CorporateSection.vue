<template>
  <section class="section-padding">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Корпоративы</h2>
          <p class="text-lg text-gray-600 mb-6">
            Ваши сотрудники заслуживают не просто корпоратив, а настоящий праздник души!
            Представьте: после тяжелого рабочего года ваша команда собирается в одном зале.
            Звучат первые аккорды знакомой песни, и вы видите, как на лицах появляются улыбки,
            а в глазах - искорки радости.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            <strong>СтереоХит</strong> знает, как объединить людей через музыку.
            Мы создаем атмосферу, где коллеги становятся друзьями, а рабочий коллектив - семьей.
          </p>
          <div class="space-y-3">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
              <span>Адаптация репертуара под корпоративную культуру</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
              <span>Интерактивные элементы и конкурсы</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
              <span>Профессиональное звуковое оборудование</span>
            </div>
          </div>
          <div class="mt-8">
            <button @click="callPhone" class="btn-primary text-lg px-8 py-4">
              Заказать на корпоратив
            </button>
          </div>
        </div>
        <div class="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
          <span class="text-gray-500 text-lg">Фото с корпоратива</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useContacts from "~/composables/contacts/useContacts";

const {callPhone} = useContacts()
</script>
