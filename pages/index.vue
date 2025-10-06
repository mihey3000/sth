<template>
    <div>
        <HeroSection />
        <AboutSection />
        <ServicesPreview />
        <CTASection />
    </div>
</template>

<script setup>
// Импорты компонентов главной страницы
import HeroSection from '~/components/home/HeroSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import ServicesPreview from '~/components/home/ServicesPreview.vue'
import CTASection from '~/components/home/CTASection.vue'

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
