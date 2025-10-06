<template>
    <section class="section-padding bg-gray-50">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div class="text-4xl font-bold text-primary mb-2">4.9</div>
                        <div class="text-gray-600">Средняя оценка</div>
                        <div class="flex justify-center mt-2">
                            <div class="flex text-accent">
                                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-primary mb-2">200+</div>
                        <div class="text-gray-600">Мероприятий</div>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-primary mb-2">98%</div>
                        <div class="text-gray-600">Довольных клиентов</div>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-primary mb-2">5</div>
                        <div class="text-gray-600">Лет опыта</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
