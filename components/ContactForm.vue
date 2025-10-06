<template>
    <div class="bg-gray-50 rounded-2xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Заказать выступление</h3>

        <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                    <input v-model="form.name" type="text" required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Ваше имя">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                    <input v-model="form.phone" type="tel" required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+7 (XXX) XXX-XX-XX">
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input v-model="form.email" type="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Тип мероприятия *</label>
                <select v-model="form.eventType" required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Выберите тип мероприятия</option>
                    <option value="corporate">Корпоратив</option>
                    <option value="wedding">Свадьба</option>
                    <option value="birthday">День рождения</option>
                    <option value="other">Другое</option>
                </select>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Дата мероприятия</label>
                    <input v-model="form.date" type="date"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Количество
                        гостей</label>
                    <input v-model="form.guests" type="number"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="50">
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                <textarea v-model="form.message" rows="4"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Расскажите подробнее о вашем мероприятии..."></textarea>
            </div>

            <div class="flex items-start">
                <input v-model="form.agreement" type="checkbox" required class="mt-1 mr-3">
                <label class="text-sm text-gray-600">
                    Я согласен на обработку персональных данных и получение информации о наших услугах
                </label>
            </div>

            <button type="submit" :disabled="isSubmitting"
                class="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {{ isSubmitting ? 'Отправляем...' : 'Отправить заявку' }}
            </button>
        </form>
    </div>
</template>

<script setup>
// Реактивные данные
const isSubmitting = ref(false)

const form = ref({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    guests: '',
    message: '',
    agreement: false
})

// Методы
const submitForm = async () => {
    isSubmitting.value = true

    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Здесь будет реальная отправка формы
    console.log('Форма отправлена:', form.value)

    // Сброс формы
    form.value = {
        name: '',
        phone: '',
        email: '',
        eventType: '',
        date: '',
        guests: '',
        message: '',
        agreement: false
    }

    isSubmitting.value = false

    // Показать уведомление об успешной отправке
    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.')
}
</script>
