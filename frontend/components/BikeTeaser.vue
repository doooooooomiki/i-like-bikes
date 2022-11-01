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
        <div>
          <img :src="`${config.API_BASE_URL + bike.image.data.attributes.url}`" alt="">
        </div>
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
  text-decoration: none;
}

.bike-teaser img {
  width: 100%
}

figure {
  width: 200px;
  margin: unset;
}

figure div {
  width: 100%;
  overflow: hidden;
}

figure img {
  transition: transform 200ms ease;
}

figure:hover img {
  transform: scale(1.08);
}

</style>