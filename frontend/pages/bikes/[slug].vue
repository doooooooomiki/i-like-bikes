<template>
  <div>
    <figure>
        <figcaption>
          {{bikeTitle}}
        </figcaption>
        <div>
          <img :src="bikeUrl" alt="">
        </div>
      </figure>
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

const url = `${config.API_BASE_URL}/api/bikes?populate=*&filters[slug][$eq]=${route.params.slug}`
const options = {
  // https://v3.nuxtjs.org/api/composables/use-fetch/#params
  // https://stackoverflow.com/questions/73358147/why-usefetch-is-not-working-on-page-change-in-nuxt3-on-client-side
  key: `slug:${route.params.slug}`,
}

// useFetch
// https://v3.nuxtjs.org/api/composables/use-fetch#usefetch
// This composable provides a convenient wrapper around useAsyncData and $fetch.
const { data: bike } = await useFetch<IAPIBody>(url, options)

const bikeTitle = computed(() => {
  return bike.value.data[0].attributes.title
})

const bikeUrl = computed(() => {
  return `${config.API_BASE_URL + bike.value.data[0].attributes.image.data.attributes.url}`
})

</script>

<style scoped>


figure {
  width: 400px;
  margin: unset;
}

figure div {
  width: 100%;
  overflow: hidden;
}

img {
  width: 100%
}

</style>