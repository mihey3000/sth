<template>
  <div class="min-h-screen bg-white">
    <AppHeader/>
    <main>
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>

<script setup>
// Импорты компонентов макета
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>
