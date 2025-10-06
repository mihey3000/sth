<template>
    <section class="section-padding bg-gray-50">
        <div class="container-custom">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="review in filteredReviews" :key="review.id"
                        class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <!-- Заголовок отзыва -->
                        <div class="flex items-start justify-between mb-4">
                            <div class="flex items-center">
                                <div
                                    class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                                    {{ review.clientName.charAt(0) }}
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">{{ review.clientName }}</h3>
                                    <p class="text-sm text-gray-600">{{ review.event }}</p>
                                </div>
                            </div>
                            <div class="flex text-accent">
                                <svg v-for="i in review.rating" :key="i" class="w-4 h-4" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                        </div>

                        <!-- Текст отзыва -->
                        <p class="text-gray-700 mb-4 leading-relaxed">{{ review.text }}</p>

                        <!-- Дата и тип мероприятия -->
                        <div class="flex items-center justify-between text-sm text-gray-500">
                            <span>{{ review.date }}</span>
                            <span class="px-2 py-1 bg-gray-100 rounded-full">{{ review.eventType }}</span>
                        </div>

                        <!-- Дополнительная информация -->
                        <div v-if="review.highlights" class="mt-4 pt-4 border-t border-gray-100">
                            <div class="text-sm text-gray-600">
                                <div class="font-medium mb-2">Особенно понравилось:</div>
                                <ul class="space-y-1">
                                    <li v-for="highlight in review.highlights" :key="highlight"
                                        class="flex items-center">
                                        <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        {{ highlight }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Кнопка "Показать еще" -->
                <div v-if="hasMoreReviews" class="text-center mt-12">
                    <button @click="loadMore" class="btn-primary px-8 py-3">
                        Показать еще отзывы
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Props
const props = defineProps({
    filteredReviews: {
        type: Array,
        required: true
    },
    hasMoreReviews: {
        type: Boolean,
        required: true
    }
})

// Emits
const emit = defineEmits(['loadMore'])

// Methods
const loadMore = () => {
    emit('loadMore')
}
</script>
