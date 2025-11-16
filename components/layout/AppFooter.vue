<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and description -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <span class="text-2xl font-bold">СтереоХит</span>
          </div>
          <p class="text-gray-300 mb-4">
            Профессиональная кавер группа, создающая незабываемые музыкальные моменты
            для ваших корпоративов, свадеб и праздников.
          </p>
          <div class="flex space-x-4">
            <!-- VK -->
            <a href="#" class="text-gray-300 hover:text-white transition-colors" title="ВКонтакте">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.677.863 2.49 2.303 4.675 3.253 4.675.22 0 .322-.102.322-.66V9.721c-.068-.979-.525-1.068-.525-1.424 0-.135.102-.254.254-.254.441 0 1.203.102 1.203.102.22 0 .373.102.373.373v2.49c0 .254.102.491.593.491.22 0 .525-.102 1.017-.593.39-.39 1.118-1.322 1.118-1.322.102-.22.322-.254.525-.254h1.744c.525 0 .66.254.525.677-.22.441-1.253 1.253-1.253 1.253-.22.22-.322.373-.22.677.102.254.441.593.66.847.22.254.373.525.525.847.152.322.102.593-.22.593z"/>
              </svg>
            </a>
            <!-- Telegram -->
            <a href="#" class="text-gray-300 hover:text-white transition-colors" title="Telegram">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Быстрые ссылки</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors">О группе
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="text-gray-300 hover:text-white transition-colors">Услуги
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/repertoire" class="text-gray-300 hover:text-white transition-colors">
                Репертуар
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/gallery" class="text-gray-300 hover:text-white transition-colors">
                Галерея
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Контакты</h3>
          <div class="space-y-2 text-gray-300">
            <p>{{ phone }}</p>
            <p>{{ email }}</p>
            <p>{{ city }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import useContacts from "~/composables/contacts/useContacts";

const {phone, email, city} = useContacts()
</script>
