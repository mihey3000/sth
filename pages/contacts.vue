<template>
    <div>
        <ContactsHero />
        <section class="section-padding">
            <div class="container-custom">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
        <FAQSection />
        <ContactsCTA />
    </div>
</template>

<script setup>
// Импорты компонентов страницы контактов
import ContactsHero from '~/components/contacts/ContactsHero.vue'
import ContactInfo from '~/components/contacts/ContactInfo.vue'
import ContactForm from '~/components/contacts/ContactForm.vue'
import FAQSection from '~/components/contacts/FAQSection.vue'
import ContactsCTA from '~/components/contacts/ContactsCTA.vue'

// SEO
useHead({
    title: 'Контакты СтереоХит - Заказать выступление кавер группы',
    meta: [
        { name: 'description', content: 'Контакты кавер группы СтереоХит. Телефон, email, форма заказа выступления. Корпоративы, свадьбы, дни рождения в Москве.' }
    ]
})
</script>
