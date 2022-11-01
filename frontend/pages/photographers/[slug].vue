<template>
  <div class="photographer">
    <img :src="profilePictureUrl" alt="">
    <p>
      Visit <span>{{photographerName}}</span> on
      <a target=”_blank” :href="unsplashUrl">Unsplash</a>
    </p>
  </div>
</template>

<script setup lang="ts">

// useRuntimeConfig
// https://v3.nuxtjs.org/api/composables/use-runtime-config#useruntimeconfig
// The useRuntimeConfig composable is used to expose config variables within your app.
const config = useRuntimeConfig();

// useRoute
// https://v3.nuxtjs.org/api/composables/use-route#useroute
// The useRoute composable returns the current route and must be called 
// in a setup function, plugin, or route middleware.
const route = useRoute()

const url = `${config.API_BASE_URL}/api/photographers?populate=profilePicture&filters[slug][$eq]=${route.params.slug}`
const options = {
  // https://v3.nuxtjs.org/api/composables/use-fetch/#params
  // https://stackoverflow.com/questions/73358147/why-usefetch-is-not-working-on-page-change-in-nuxt3-on-client-side
  key: `slug:${route.params.slug}`,
}

// useFetch
// https://v3.nuxtjs.org/api/composables/use-fetch#usefetch
// This composable provides a convenient wrapper around useAsyncData and $fetch.
const { data: photographer } = await useFetch<IAPIBody>(url, options)

const profilePictureUrl = computed(() => {
  return `${config.API_BASE_URL + photographer.value.data[0].attributes.profilePicture.data.attributes.url}`
})

const unsplashUrl = computed(() => {
  return `${config.UNSPASH_BASE_URL}/${photographer.value.data[0].attributes.unsplashHandle}`
})

const photographerName = computed(() => {
  return `${photographer.value.data[0].attributes.name}`
})

</script>

<style scoped>

.photographer img {
  background-color: #eee;
  border-radius: 50%;
  display: block;
  overflow: hidden;
  width: 128px;
}

</style>