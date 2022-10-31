<template>
  <div>
    <pre>
      {{$route}}
      {{bike}}
    </pre>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
const { data: bike } = await useFetch(`http://localhost:1337/api/bikes?filters[slug]=${route.params.slug}`)

</script>