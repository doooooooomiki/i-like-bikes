<template>
  <div>
    <pre>
      {{bike}}
    </pre>
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

const url = `${config.API_BASE_URL}/api/bikes?filters[slug]=${route.params.slug}`

// useFetch
// https://v3.nuxtjs.org/api/composables/use-fetch#usefetch
// This composable provides a convenient wrapper around useAsyncData and $fetch.
const { data: bike } = await useFetch(url)

</script>