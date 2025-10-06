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
// SEO
useHead({
    title: 'Контакты СтереоХит - Заказать выступление кавер группы',
    meta: [
        { name: 'description', content: 'Контакты кавер группы СтереоХит. Телефон, email, форма заказа выступления. Корпоративы, свадьбы, дни рождения в Москве.' }
    ]
})
</script>
