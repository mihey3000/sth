<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Наша команда</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Талантливые музыканты, которые делают каждое выступление особенным
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div class="text-center">
          <div class="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4">
            <img :src="dimaImg" alt="Стерео-Хит — Дмитрий Ткаченко">
          </div>
          <h3 class="text-xl font-semibold mb-2">Дмитрий Ткаченко</h3>
          <p class="text-primary font-medium mb-2">Вокал</p>
          <!--          <p class="text-gray-600 text-sm">-->
          <!--            Пару слов.-->
          <!--          </p>-->
        </div>

        <div class="text-center">
          <div class="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4">
            <img :src="frolImg" alt="Стерео-Хит — Сергей Фролов">
          </div>
          <h3 class="text-xl font-semibold mb-2">Сергей Фролов</h3>
          <p class="text-primary font-medium mb-2">Вокал, гитара</p>
          <!--          <p class="text-gray-600 text-sm">-->
          <!--            Пару слов.-->
          <!--          </p>-->
        </div>

        <div class="text-center">
          <div class="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4">
            <img :src="franzImg" alt="Стерео-Хит — Александр Житник">
          </div>
          <h3 class="text-xl font-semibold mb-2">Александр Житник</h3>
          <p class="text-primary font-medium mb-2">Вокал, гитара</p>
          <!--          <p class="text-gray-600 text-sm">-->
          <!--            Пару слов.-->
          <!--          </p>-->
        </div>

        <div class="text-center">
          <div class="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4">
            <img :src="kasyanovImg" alt="Стерео-Хит — Александр Касьянов">
          </div>
          <h3 class="text-xl font-semibold mb-2">Александр Касьянов</h3>
          <p class="text-primary font-medium mb-2">Ударные</p>
          <!--          <p class="text-gray-600 text-sm">-->
          <!--            Пару слов.-->
          <!--          </p>-->
        </div>

        <div class="text-center">
          <div class="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4">
            <img :src="miheyImg" alt="Стерео-Хит — Михаил Дронов">
          </div>
          <h3 class="text-xl font-semibold mb-2">Михаил Дронов</h3>
          <p class="text-primary font-medium mb-2">Бас-гитара</p>
          <!--          <p class="text-gray-600 text-sm">-->
          <!--            Пару слов.-->
          <!--          </p>-->
        </div>


      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import kasyanovImg from '~/assets/img/kasyanov.png'
import miheyImg from '~/assets/img/mihey.png'
import franzImg from '~/assets/img/franz.png'
import frolImg from '~/assets/img/frol.png'
import dimaImg from '~/assets/img/dima.png'
</script>