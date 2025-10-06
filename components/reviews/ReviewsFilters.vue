<template>
    <section class="section-padding">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <div class="flex flex-wrap gap-4 justify-center mb-8">
                    <button v-for="filter in filters" :key="filter" @click="selectFilter(filter)" :class="[
                        'px-6 py-2 rounded-full font-medium transition-colors',
                        selectedFilter === filter
                            ? 'bg-primary text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    ]">
                        {{ filter }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Props
const props = defineProps({
    selectedFilter: {
        type: String,
        default: null
    },
    filters: {
        type: Array,
        required: true
    }
})

// Emits
const emit = defineEmits(['update:selectedFilter'])

// Methods
const selectFilter = (filter) => {
    const newFilter = props.selectedFilter === filter ? null : filter
    emit('update:selectedFilter', newFilter)
}
</script>
