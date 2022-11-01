<template>

  <div class="bike-teaser">

    <header>
      <NuxtLink :to="`/photographers/${photographerSlug}`">
        {{bikeName}}
      </NuxtLink>
    </header>

    <NuxtLink :to="`/bikes/${bike.slug}`">
      <figure>
        <figcaption>
          {{bike.title}}
        </figcaption>
        <div>
          <img :src="bikeUrl" alt="">
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
const props = defineProps<{
  bike: IBike,
}>()

const bikeUrl = computed(() => {
  return `${config.API_BASE_URL + props.bike.image.data.attributes.url}`
})

const bikeName = computed(() => {
  return props.bike.photographer.data.attributes.name
})

const photographerSlug = computed(() => {
  return props.bike.photographer.data.attributes.slug
})

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