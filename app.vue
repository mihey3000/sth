<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
import ogImage from '~/assets/img/red.png'

const url = useRequestURL()
const ogImageUrl = computed(() => new URL(ogImage, url.origin).href)

useSeoMeta({
  ogImage: () => ogImageUrl.value,
  twitterImage: () => ogImageUrl.value
})
</script>
