<template>

  <div class="bike-teaser">

    <header>
      <NuxtLink :to="`/photographers/${bike.photographer.data.attributes.slug}`">
        {{bike.photographer.data.attributes.name}}
      </NuxtLink>
    </header>

    <NuxtLink :to="`/bikes/${bike.slug}`">
      <figure>
        <figcaption>
          {{bike.title}}
        </figcaption>
        <img :src="`${config.API_BASE_URL + bike.image.data.attributes.url}`" alt="">
      </figure>
    </NuxtLink>

  </div>

</template>

<script lang="ts" setup>

const config = useRuntimeConfig();

// defineProps
// https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
// https://vuejs.org/api/sfc-script-setup.html#typescript-only-features
// defineProps is a compiler macro only usable inside <script setup>. 
// It does not need to be imported, and is compiled away when <script setup> is processed.
defineProps<{
  bike: IBike,
}>()

</script>

<style scoped>

.bike-teaser a {
  display: inline-block;
}

.bike-teaser img {
  width: 200px;
}

</style>