<template>
    <section class="section-padding bg-gray-50">
        <div class="container-custom">
            <div class="max-w-2xl mx-auto">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Оставьте свой отзыв</h2>
                    <p class="text-lg text-gray-600">
                        Поделитесь впечатлениями о нашем выступлении
                    </p>
                </div>

                <div class="bg-white rounded-lg shadow-lg p-8">
                    <form @submit.prevent="submitReview" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Ваше имя *</label>
                                <input v-model="localReviewForm.name" type="text" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Ваше имя">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Тип мероприятия
                                    *</label>
                                <select v-model="localReviewForm.eventType" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                    <option value="">Выберите тип</option>
                                    <option value="corporate">Корпоратив</option>
                                    <option value="wedding">Свадьба</option>
                                    <option value="birthday">День рождения</option>
                                    <option value="other">Другое</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Оценка *</label>
                            <div class="flex space-x-2">
                                <button v-for="i in 5" :key="i" type="button" @click="localReviewForm.rating = i"
                                    :class="[
                                        'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                                        i <= localReviewForm.rating
                                            ? 'bg-accent text-white'
                                            : 'bg-gray-200 text-gray-400 hover:bg-accent/70'
                                    ]">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Ваш отзыв *</label>
                            <textarea v-model="localReviewForm.text" rows="4" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Расскажите о ваших впечатлениях..."></textarea>
                        </div>

                        <button type="submit" :disabled="isSubmittingReview"
                            class="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                            {{ isSubmittingReview ? 'Отправляем...' : 'Отправить отзыв' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Props
const props = defineProps({
    reviewForm: {
        type: Object,
        required: true
    },
    isSubmittingReview: {
        type: Boolean,
        required: true
    }
})

// Emits
const emit = defineEmits(['update:reviewForm', 'submitReview'])

// Локальная копия формы для v-model
const localReviewForm = ref({ ...props.reviewForm })

// Следим за изменениями локальной формы и эмитим обновление
watch(localReviewForm, (newValue) => {
    emit('update:reviewForm', newValue)
}, { deep: true })

// Следим за изменениями пропса и обновляем локальную форму
watch(() => props.reviewForm, (newValue) => {
    localReviewForm.value = { ...newValue }
}, { deep: true })

// Methods
const submitReview = () => {
    emit('submitReview', localReviewForm.value)
}
</script>
