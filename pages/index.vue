<template>
    <div>
        <!-- Hero Section -->
        <section
            class="hero-gradient section-padding text-white flex items-center"
        >
            <div class="container-custom">
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h1
                            class="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            Создаем незабываемые
                            <span class="text-accent text-glow">моменты</span>
                            через музыку
                        </h1>
                        <p class="text-xl mb-8 text-gray-200 leading-relaxed">
                            Помните тот момент, когда музыка заставила ваше
                            сердце биться в такт? Когда все вокруг замерли,
                            затаив дыхание, а вы почувствовали, что живете?
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <button class="btn-accent text-lg px-8 py-4">
                                Заказать выступление
                            </button>
                            <button
                                class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg"
                            >
                                Посмотреть репертуар
                            </button>
                        </div>
                    </div>
                    <div class="relative">
                        <!-- Placeholder for hero image/video -->
                        <div class="bg-gray-800 rounded-2xl p-8 text-center">
                            <div
                                class="w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4 flex items-center justify-center float-animation"
                            >
                                <svg
                                    class="w-16 h-16 text-dark"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-2">СтереоХит</h3>
                            <p class="text-gray-300">Кавер группа</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="section-padding bg-gray-50">
            <div class="container-custom">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">
                        СтереоХит - это не просто кавер группа
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Это мастера эмоций, которые превратят ваше мероприятие в
                        незабываемое путешествие в мир музыки. Каждая нота,
                        каждый аккорд, каждое слово - все это создано для того,
                        чтобы ваши гости унесли с собой не просто воспоминания,
                        а частичку счастья.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div
                            class="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <svg
                                class="w-8 h-8 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                />
                            </svg>
                        </div>

                        <p class="text-gray-600">
                            Более 5 лет опыта выступлений на корпоративах,
                            свадьбах и частных мероприятиях
                        </p>
                    </div>

                    <div class="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div
                            class="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <svg
                                class="w-8 h-8 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                        <p class="text-gray-600">
                            Создаем атмосферу, где коллеги становятся друзьями,
                            а рабочий коллектив - семьей
                        </p>
                    </div>

                    <div class="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div
                            class="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <svg
                                class="w-8 h-8 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <p class="text-gray-600">
                            Современное оборудование и тщательно подобранный
                            репертуар для каждого мероприятия
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Preview -->
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
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <div
                            class="h-48 bg-gradient-to-br from-primary to-text flex items-center justify-center"
                        >
                            <svg
                                class="w-16 h-16 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </div>
                        <div class="p-6">
                            <h3 class="text-2xl font-bold mb-3">Корпоративы</h3>
                            <p class="text-gray-600 mb-4">
                                Ваши сотрудники заслуживают не просто
                                корпоратив, а настоящий праздник души! Мы знаем,
                                как объединить людей через музыку.
                            </p>
                            <button
                                class="text-primary font-semibold hover:text-primary transition-colors"
                            >
                                Подробнее →
                            </button>
                        </div>
                    </div>

                    <!-- Свадьбы -->
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <div
                            class="h-48 bg-gradient-to-br from-secondary to-accent flex items-center justify-center"
                        >
                            <svg
                                class="w-16 h-16 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                        <div class="p-6">
                            <h3 class="text-2xl font-bold mb-3">Свадьбы</h3>
                            <p class="text-gray-600 mb-4">
                                Ваш самый важный день заслуживает самой важной
                                музыки! Мы создаем магию вашего дня через каждую
                                песню.
                            </p>
                            <button
                                class="text-primary font-semibold hover:text-primary transition-colors"
                            >
                                Подробнее →
                            </button>
                        </div>
                    </div>

                    <!-- Дни рождения -->
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <div
                            class="h-48 bg-gradient-to-br from-accent to-secondary flex items-center justify-center"
                        >
                            <svg
                                class="w-16 h-16 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 003 15.546V12a9 9 0 0118 0v3.546z"
                                />
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
                            <button
                                class="text-primary font-semibold hover:text-primary transition-colors"
                            >
                                Подробнее →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="hero-gradient text-white section-padding">
            <div class="container-custom text-center">
                <h2 class="text-4xl font-bold mb-6">
                    Готовы создать незабываемое мероприятие?
                </h2>
                <p class="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                    Свяжитесь с нами прямо сейчас, и мы обсудим все детали
                    вашего мероприятия
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="btn-accent text-lg px-8 py-4">
                        Заказать выступление
                    </button>
                    <button
                        class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg"
                    >
                        +7 (XXX) XXX-XX-XX
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// SEO
useHead({
    title: "СтереоХит - Кавер группа для корпоративов, свадеб и праздников",
    meta: [
        {
            name: "description",
            content:
                "Профессиональная кавер группа СтереоХит. Выступления на корпоративах, свадьбах, днях рождения. Качественная музыка и незабываемые эмоции.",
        },
    ],
});
</script>
