<template>
    <div>
        <noscript v-html="noscriptHtml"></noscript>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
import ogImage from '~/assets/img/red.png'
import faviconPng from '~/assets/img/favicon.png'
import { useYMetric } from '~/composables/useYMetric'

const url = useRequestURL()
const ogImageUrl = computed(() => new URL(ogImage, url.origin).href)

const { script, noscriptHtml } = useYMetric()

useSeoMeta({
  ogImage: () => ogImageUrl.value,
  twitterImage: () => ogImageUrl.value
})

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: faviconPng }
  ],
  script
})
</script>
