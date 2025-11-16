<template>
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container-custom">
            <nav class="flex items-center justify-between py-4">
                <!-- Logo -->
                <div class="flex items-center space-x-2 p-2">
                    <span class="text-2xl font-bold text-primary">СтереоХит</span>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <NuxtLink to="/" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Главная
                    </NuxtLink>
                    <NuxtLink to="/about" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        О группе
                    </NuxtLink>
                    <NuxtLink to="/services" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Услуги
                    </NuxtLink>
                    <NuxtLink to="/repertoire" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Репертуар
                    </NuxtLink>
                    <NuxtLink to="/gallery" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Галерея
                    </NuxtLink>
                    <NuxtLink to="/reviews" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Отзывы
                    </NuxtLink>
                    <NuxtLink to="/contacts" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Контакты
                    </NuxtLink>
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
            <div v-if="mobileMenuOpen" class="md:hidden p-4 border-t">
                <div class="flex flex-col space-y-4">
                    <NuxtLink to="/" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Главная
                    </NuxtLink>
                    <NuxtLink to="/about" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        О группе
                    </NuxtLink>
                    <NuxtLink to="/services" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Услуги
                    </NuxtLink>
                    <NuxtLink to="/repertoire" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Репертуар
                    </NuxtLink>
                    <NuxtLink to="/gallery" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Галерея
                    </NuxtLink>
                    <NuxtLink to="/reviews" class="text-gray-700 hover:text-primary font-medium transition-colors">
                        Отзывы
                    </NuxtLink>
                    <NuxtLink to="/contacts" class="text-gray-700 hover:text-primary font-medium transition-colors">
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
const mobileMenuOpen = ref(false)
</script>
