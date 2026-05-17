<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <div class="container-custom">
      <nav class="flex items-center justify-between py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 p-2">
          <span class="text-2xl font-bold text-primary">Стерео-Хит</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/about" class="text-gray-700 hover:text-primary font-medium transition-colors">
            О группе
          </NuxtLink>
          
          <!-- Cities Dropdown -->
          <div class="relative group">
            <button class="text-gray-700 hover:text-primary font-medium transition-colors flex items-center gap-1 py-2">
              Города
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
              <div class="py-2">
                <NuxtLink to="/kaver-gruppa-beloyarskiy" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Белоярский
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-kogalym" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Когалым
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-langepas" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Лангепас
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-megion" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Мегион
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-nefteyugansk" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Нефтеюганск
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-nizhnevartovsk" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Нижневартовск
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-nyagan" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Нягань
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-oktyabrskiy" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Октябрьский
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-pokachi" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Покачи
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-priobye" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Приобье
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-pyt-yakh" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Пыть-Ях
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-raduzhniy" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Радужный
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-sovetskiy" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Советский
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-surgut" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Сургут
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-uray" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Урай
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-khanty-mansiysk" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Ханты-Мансийск
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-sherkaly" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Шеркалы
                </NuxtLink>
                <NuxtLink to="/kaver-gruppa-yugorsk" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                  Югорск
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink v-if="false" to="/services" class="text-gray-700 hover:text-primary font-medium transition-colors">
            Услуги
          </NuxtLink>
          <NuxtLink to="/repertoire" class="text-gray-700 hover:text-primary font-medium transition-colors">
            Репертуар
          </NuxtLink>
          <NuxtLink to="/gallery" class="text-gray-700 hover:text-primary font-medium transition-colors">
            Галерея
          </NuxtLink>
          <NuxtLink v-if="false" to="/reviews" class="text-gray-700 hover:text-primary font-medium transition-colors">
            Отзывы
          </NuxtLink>
          <NuxtLink to="/contacts" class="text-gray-700 hover:text-primary font-medium transition-colors">
            Контакты
          </NuxtLink>
          <a v-if="phone" :href="phoneLink"
             class="text-gray-700 hover:text-primary font-semibold transition-colors">
            {{ phone }}
          </a>
          <button v-if="false" class="btn-primary">
            Заказать выступление
          </button>
        </div>

        <!-- Mobile menu button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      <!-- Mobile Navigation -->
      <div
          v-if="mobileMenuOpen"
          class="md:hidden fixed inset-0 z-40 bg-black/40"
          @click="closeMobileMenu"
      ></div>
      <div v-if="mobileMenuOpen" class="md:hidden p-4 border-t relative z-50 bg-white max-h-[80vh] overflow-y-auto">
        <div class="flex flex-col space-y-4">
          <NuxtLink
              to="/about"
              class="text-gray-700 hover:text-primary font-medium transition-colors"
              @click="closeMobileMenu"
          >
            О группе
          </NuxtLink>
          
          <!-- Mobile Cities Dropdown -->
          <div class="flex flex-col space-y-2">
            <button 
                @click="mobileCitiesOpen = !mobileCitiesOpen" 
                class="flex items-center justify-between text-gray-700 hover:text-primary font-medium transition-colors w-full text-left"
            >
              <span>Города</span>
              <svg :class="{'rotate-180': mobileCitiesOpen}" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-show="mobileCitiesOpen" class="flex flex-col space-y-3 pl-4 mt-2 border-l-2 border-gray-100">
              <NuxtLink
                  to="/kaver-gruppa-beloyarskiy"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Белоярский
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-kogalym"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Когалым
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-langepas"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Лангепас
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-megion"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Мегион
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-nefteyugansk"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Нефтеюганск
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-nizhnevartovsk"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Нижневартовск
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-nyagan"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Нягань
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-oktyabrskiy"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Октябрьский
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-pokachi"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Покачи
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-priobye"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Приобье
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-pyt-yakh"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Пыть-Ях
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-raduzhniy"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Радужный
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-sovetskiy"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Советский
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-surgut"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Сургут
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-uray"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Урай
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-khanty-mansiysk"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Ханты-Мансийск
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-sherkaly"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Шеркалы
              </NuxtLink>
              <NuxtLink
                  to="/kaver-gruppa-yugorsk"
                  class="text-gray-600 hover:text-primary transition-colors"
                  @click="closeMobileMenu"
              >
                Югорск
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
              v-if="false"
              to="/services"
              class="text-gray-700 hover:text-primary font-medium transition-colors"
              @click="closeMobileMenu"
          >
            Услуги
          </NuxtLink>
          <NuxtLink
              to="/repertoire"
              class="text-gray-700 hover:text-primary font-medium transition-colors"
              @click="closeMobileMenu"
          >
            Репертуар
          </NuxtLink>
          <NuxtLink
              to="/gallery"
              class="text-gray-700 hover:text-primary font-medium transition-colors"
              @click="closeMobileMenu"
          >
            Галерея
          </NuxtLink>
          <NuxtLink
              v-if="false"
              to="/reviews"
              class="text-gray-700 hover:text-primary font-medium transition-colors"
              @click="closeMobileMenu"
          >
            Отзывы
          </NuxtLink>
          <NuxtLink
              to="/contacts"
              class="text-gray-700 hover:text-primary font-medium transition-colors"
              @click="closeMobileMenu"
          >
            Контакты
          </NuxtLink>
          <button v-if="false" class="btn-primary w-full">
            Заказать выступление
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import useContacts from "~/composables/contacts/useContacts.js";

const mobileMenuOpen = ref(false)
const mobileCitiesOpen = ref(false)
const {phone, phoneLink} = useContacts()

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileCitiesOpen.value = false
}
</script>
