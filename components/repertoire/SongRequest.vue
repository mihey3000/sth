<template>
    <section class="section-padding bg-gray-50">
        <div class="container-custom">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Не нашли нужную песню?</h2>
                <p class="text-lg text-gray-600 mb-8">
                    Мы всегда готовы разучить новые песни для вашего мероприятия!
                    Просто сообщите нам название и исполнителя.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <input v-model="localSongRequest" type="text" placeholder="Название песни и исполнитель"
                        class="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <button @click="submitRequest" class="btn-primary" :disabled="isSubmitting"
                        :class="{'opacity-70 cursor-not-allowed': isSubmitting}">
                        <span v-if="isSubmitting">Отправляем...</span>
                        <span v-else>Отправить запрос</span>
                    </button>
                </div>
                <div v-if="submissionMessage" class="mt-4">
                    <p :class="submissionVariant === 'success' ? 'text-green-600' : 'text-red-600'">
                        {{ submissionMessage }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Props
const props = defineProps({
    newSongRequest: {
        type: String,
        required: true
    },
    isSubmitting: {
        type: Boolean,
        default: false
    },
    submissionMessage: {
        type: String,
        default: ''
    },
    submissionVariant: {
        type: String,
        default: ''
    }
})

// Emits
const emit = defineEmits(['update:newSongRequest', 'submitRequest'])

// Локальная переменная для v-model
const localSongRequest = ref(props.newSongRequest)

// Следим за изменениями локальной переменной и эмитим обновление
watch(localSongRequest, (newValue) => {
    emit('update:newSongRequest', newValue)
})

// Следим за изменениями пропса и обновляем локальную переменную
watch(() => props.newSongRequest, (newValue) => {
    localSongRequest.value = newValue
})

// Methods
const submitRequest = () => {
    if (localSongRequest.value.trim()) {
        emit('submitRequest', localSongRequest.value)
    }
}
</script>
