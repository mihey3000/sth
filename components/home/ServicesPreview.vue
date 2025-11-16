<template>
  <section class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Наши услуги
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Мы специализируемся на различных типах мероприятий,
          создавая уникальную атмосферу для каждого случая
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Корпоративы -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="h-48 bg-gradient-to-br from-primary to-text flex items-center justify-center  overflow-hidden">
            <img :src="corpImage" alt="">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3">Корпоративы</h3>
            <p class="text-gray-600 mb-4">
              Ваши сотрудники заслуживают не просто
              корпоратив, а настоящий праздник души! Мы знаем,
              как объединить людей через музыку.
            </p>
            <button v-if="false" class="text-primary font-semibold hover:text-primary transition-colors">
              Подробнее →
            </button>
          </div>
        </div>

        <!-- Свадьбы -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="h-48 bg-gradient-to-br from-secondary to-accent flex items-center justify-center overflow-hidden">
            <img :src="weddingImage" alt="">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3">Свадьбы</h3>
            <p class="text-gray-600 mb-4">
              Ваш самый важный день заслуживает самой важной
              музыки! Мы создаем магию вашего дня через каждую
              песню.
            </p>
            <button v-if="false" class="text-primary font-semibold hover:text-primary transition-colors">
              Подробнее →
            </button>
          </div>
        </div>

        <!-- Дни рождения -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div
              class="h-48 bg-gradient-to-br from-accent to-secondary flex items-center justify-center  overflow-hidden">
            <img :src="birthDateImage" alt="">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3">
              Дни рождения
            </h3>
            <p class="text-gray-600 mb-4">
              Юбилей - это не просто цифра, это повод для
              настоящего праздника! Мы вернем вам детское
              ощущение праздника.
            </p>
            <button v-if="false" class="text-primary font-semibold hover:text-primary transition-colors">
              Подробнее →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import birthDateImage from 'assets/img/birthDate.jpg'
import corpImage from 'assets/img/corp.jpg'
import weddingImage from 'assets/img/wedding.jpg'
</script>