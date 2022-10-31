<template>
  <div>
    <p>
      {{bike.name}}
      <strong>{{bike.price}}</strong>
    </p>
    <p>
      {{bike.description}}
    </p>
    <NuxtLink :to="`/bikes/${bike.slug}`">ride to bike</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  bike?: IBike
}>()
</script>