<template>
    <section class="section-padding bg-gray-50">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <div class="flex flex-wrap gap-4 justify-center mb-8">
                    <button v-for="category in categories" :key="category" @click="selectCategory(category)" :class="[
                        'px-6 py-2 rounded-full font-medium transition-colors',
                        selectedCategory === category
                            ? 'bg-primary text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                    ]">
                        {{ category }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Props
const props = defineProps({
    categories: {
        type: Array,
        required: true
    },
    selectedCategory: {
        type: String,
        default: null
    }
})

// Emits
const emit = defineEmits(['update:selectedCategory'])

// Methods
const selectCategory = (category) => {
    const newCategory = props.selectedCategory === category ? null : category
    emit('update:selectedCategory', newCategory)
}
</script>
