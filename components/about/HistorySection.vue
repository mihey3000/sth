<template>
  <section class="section-padding">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Наша история</h2>
          <p class="text-lg text-gray-600 mb-6">
            СтереоХит родилась из страсти к музыке и желания дарить людям
            незабываемые эмоции. Начав с небольших выступлений в кафе и барах,
            мы постепенно выросли в профессиональную кавер группу, которая
            сегодня радует гостей на самых важных мероприятиях.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            За 5 лет работы мы выступили на более чем 200 мероприятиях,
            создав особую атмосферу для тысяч людей. Каждое выступление -
            это не просто концерт, а создание уникального музыкального опыта.
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">200+</div>
              <div class="text-gray-600">Мероприятий</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">20</div>
              <div class="text-gray-600">Лет опыта</div>
            </div>
          </div>
        </div>
        <div class="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
          <img :src="groupImg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import groupImg from '~/assets/img/ny.jpg'
</script>
