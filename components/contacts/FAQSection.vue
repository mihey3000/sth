<template>
    <section class="section-padding bg-gray-50">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
                    <p class="text-xl text-gray-600">
                        Ответы на самые популярные вопросы о наших услугах
                    </p>
                </div>

                <div class="space-y-4">
                    <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-sm">
                        <button @click="toggleFaq(index)"
                            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <span class="text-lg font-medium text-gray-900">{{ faq.question }}</span>
                            <svg :class="['w-5 h-5 text-gray-500 transition-transform', openFaqs.includes(index) ? 'rotate-180' : '']"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div v-if="openFaqs.includes(index)" class="px-6 pb-4 text-gray-600">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Реактивные данные
const openFaqs = ref([])

// FAQ данные
const faqs = ref([
    {
        question: 'Как далеко заранее нужно заказывать выступление?',
        answer: 'Мы рекомендуем заказывать выступление за 2-4 недели до мероприятия. Однако, если у нас есть свободные даты, мы можем принять заказ и за несколько дней.'
    },
    {
        question: 'Выезжаете ли вы за пределы Москвы?',
        answer: 'Да, мы выезжаем по всей Московской области. За пределы области выезжаем по договоренности с дополнительной оплатой транспортных расходов.'
    },
    {
        question: 'Какое оборудование вы привозите?',
        answer: 'Мы привозим полный комплект профессионального звукового оборудования: микшерный пульт, колонки, микрофоны, инструменты. Также можем предоставить световое оборудование.'
    },
    {
        question: 'Можете ли вы разучить новую песню?',
        answer: 'Конечно! Мы всегда готовы разучить новые песни для вашего мероприятия. Просто сообщите нам название и исполнителя за 2 недели до выступления.'
    },
    {
        question: 'Что входит в стоимость выступления?',
        answer: 'В стоимость входит: выступление группы, звуковое оборудование, репертуар, работа звукорежиссера. Дополнительно может потребоваться оплата за световое оборудование и выезд за пределы Москвы.'
    },
    {
        question: 'Можно ли изменить программу в день выступления?',
        answer: 'Да, мы всегда готовы адаптироваться к пожеланиям гостей и заказчика. Однако, для лучшего результата рекомендуем заранее обсудить все детали.'
    }
])

// Методы
const toggleFaq = (index) => {
    if (openFaqs.value.includes(index)) {
        openFaqs.value = openFaqs.value.filter(i => i !== index)
    } else {
        openFaqs.value.push(index)
    }
}
</script>
