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
                    <div class="h-48 bg-gradient-to-br from-primary to-text flex items-center justify-center">
                        <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3">Корпоративы</h3>
                        <p class="text-gray-600 mb-4">
                            Ваши сотрудники заслуживают не просто
                            корпоратив, а настоящий праздник души! Мы знаем,
                            как объединить людей через музыку.
                        </p>
                        <button class="text-primary font-semibold hover:text-primary transition-colors">
                            Подробнее →
                        </button>
                    </div>
                </div>

                <!-- Свадьбы -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="h-48 bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                        <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3">Свадьбы</h3>
                        <p class="text-gray-600 mb-4">
                            Ваш самый важный день заслуживает самой важной
                            музыки! Мы создаем магию вашего дня через каждую
                            песню.
                        </p>
                        <button class="text-primary font-semibold hover:text-primary transition-colors">
                            Подробнее →
                        </button>
                    </div>
                </div>

                <!-- Дни рождения -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="h-48 bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                        <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 003 15.546V12a9 9 0 0118 0v3.546z" />
                        </svg>
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
                        <button class="text-primary font-semibold hover:text-primary transition-colors">
                            Подробнее →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
