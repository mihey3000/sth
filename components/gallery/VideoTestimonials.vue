<template>
    <section class="section-padding bg-gray-50">
        <div class="container-custom">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Видео отзывы</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Послушайте, что говорят наши клиенты о выступлениях СтереоХит
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="testimonial in videoTestimonials" :key="testimonial.id"
                    class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                        <span class="text-gray-500">Видео отзыв</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-semibold mb-2">{{ testimonial.clientName }}</h3>
                        <p class="text-gray-600 mb-4">{{ testimonial.event }}</p>
                        <div class="flex items-center">
                            <div class="flex text-accent">
                                <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <span class="ml-2 text-gray-600 text-sm">{{ testimonial.rating }}/5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Props
const props = defineProps({
    videoTestimonials: {
        type: Array,
        required: true
    }
})
</script>
