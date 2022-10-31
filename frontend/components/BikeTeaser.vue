<template>
  <NuxtLink :to="`/bikes/${bike.slug}`">{{bike.slug}}</NuxtLink>
</template>

<script lang="ts" setup>

// defineProps
// https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
// https://vuejs.org/api/sfc-script-setup.html#typescript-only-features
// defineProps is a compiler macro only usable inside <script setup>. 
// It does not need to be imported, and is compiled away when <script setup> is processed.
defineProps<{
  bike: IBike,
}>()

</script>