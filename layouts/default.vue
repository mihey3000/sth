<template>
    <div class="min-h-screen bg-white">
        <!-- Header -->
        <AppHeader />

        <!-- Main Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <AppFooter />
    </div>
</template>

<script setup>
// Импорты компонентов макета
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>
